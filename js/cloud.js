/* Google ile giriş + Firestore köprüsü.
   js/firebase-config.js boşsa ya da site dosyadan (file://) açıldıysa hesapsız modda çalışır.
   Veri düzeni: users/{uid}                 → ayarlar, günlük kayıtlar, kelimeler, notlar
                users/{uid}/mistakes/{soru} → yanlış defteri
                users/{uid}/results/{id}    → test sonuçları
                users/{uid}/custom/{id}     → eklenen çıkmış sorular
                users/{uid}/book/{id}       → Akıllı kitabım: kendi soruları ve anlatımları */
var Cloud = (function () {
  var SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
  var STORES = ["mistakes", "results", "custom", "book"];
  var cfg = window.FIREBASE_CONFIG || {};
  var S = { available: false, reason: "", user: null, a: null, fs: null, auth: null, db: null, redirectError: null };
  if (!cfg.apiKey || !cfg.projectId) S.reason = "config";
  else if (location.protocol === "file:") S.reason = "file";
  else S.available = true;

  var pending = null, timer = null;
  function emitError(e) { window.dispatchEvent(new CustomEvent("cloud-error", { detail: e })); }
  function clean(o) { return JSON.parse(JSON.stringify(o)); }
  function userDoc() { return S.fs.doc(S.db, "users", S.user.uid); }
  function col(s) { return S.fs.collection(S.db, "users", S.user.uid, s); }

  /* Firebase yüklenemezse site "Yükleniyor…" ekranında kalmasın: 12 sn sonra hesapsız moda geç */
  function init(onUserChange) {
    if (!S.available) return Promise.resolve(false);
    var settled = false, timedOut = false;
    return new Promise(function (resolve) {
      /* Zaman aşımı yalnızca bağlantı hâlâ kurulmadıysa devreye girer; başarılı açılıştan sonra hiçbir şeyi değiştirmez */
      var timer = setTimeout(function () {
        if (settled) return;
        settled = true; timedOut = true;
        S.available = false; S.reason = "load";
        resolve(false);
      }, 12000);
      start(onUserChange, function () { return timedOut; }).then(function (ok) {
        if (settled) return;
        settled = true; clearTimeout(timer);
        resolve(ok);
      });
    });
  }

  async function start(onUserChange, isTimedOut) {
    try {
      var mods = await Promise.all([
        import(SDK + "firebase-app.js"),
        import(SDK + "firebase-auth.js"),
        import(SDK + "firebase-firestore.js")
      ]);
      var app = mods[0].initializeApp(cfg);
      S.a = mods[1]; S.fs = mods[2];
      /* Oturum önce localStorage'da tutulur: IndexedDB'si takılan tarayıcılarda da giriş bekletmeden açılır */
      try {
        S.auth = S.a.initializeAuth(app, {
          persistence: [S.a.browserLocalPersistence, S.a.indexedDBLocalPersistence, S.a.browserSessionPersistence],
          popupRedirectResolver: S.a.browserPopupRedirectResolver
        });
      } catch (e) { S.auth = S.a.getAuth(app); }
      /* Kalıcı çevrimdışı önbellek kullanılmıyor: uygulama açılışta tüm kayıtları zaten yüklüyor,
         çok sekmeli önbellek ise IndexedDB'yi kilitleyip açılışı bekletebiliyor. */
      try { S.db = S.fs.initializeFirestore(app, { ignoreUndefinedProperties: true }); }
      catch (e) { S.db = S.fs.getFirestore(app); }
      /* Yönlendirmeli giriş yalnızca açılır pencere engellendiyse başlatılır; sonucu sadece o durumda beklenir */
      if (sessionStorage.getItem("wyds_redirect")) {
        sessionStorage.removeItem("wyds_redirect");
        try { await S.a.getRedirectResult(S.auth); } catch (e) { S.redirectError = e; }
      }
      await new Promise(function (resolve) {
        var first = true;
        S.a.onAuthStateChanged(S.auth, function (u) {
          var changed = !first && ((u && u.uid) || null) !== ((S.user && S.user.uid) || null);
          S.user = u;
          if (first) { first = false; resolve(); }
          else if (changed && !isTimedOut()) onUserChange(u);
        });
      });
      if (isTimedOut()) return false;
      return true;
    } catch (e) {
      console.warn("Firebase yüklenemedi", e);
      S.available = false; S.reason = "load";
      return false;
    }
  }

  async function signIn() {
    var p = new S.a.GoogleAuthProvider();
    p.setCustomParameters({ prompt: "select_account" });
    try {
      await S.a.signInWithPopup(S.auth, p);
    } catch (e) {
      if (e.code === "auth/popup-blocked" || e.code === "auth/operation-not-supported-in-this-environment") {
        sessionStorage.setItem("wyds_redirect", "1");
        await S.a.signInWithRedirect(S.auth, p); return;
      }
      if (e.code === "auth/popup-closed-by-user" || e.code === "auth/cancelled-popup-request") return;
      throw e;
    }
  }
  async function signOut() { await flush(); return S.a.signOut(S.auth); }

  async function load() {
    var out = { main: null, mistakes: {}, results: {}, custom: {}, book: {} };
    var snap = await S.fs.getDoc(userDoc());
    if (snap.exists()) out.main = snap.data();
    await Promise.all(STORES.map(async function (s) {
      var q = await S.fs.getDocs(col(s));
      q.forEach(function (d) { out[s][d.id] = d.data(); });
    }));
    return out;
  }

  function saveMain(obj) { pending = clean(obj); clearTimeout(timer); timer = setTimeout(flush, 700); }
  function flush() {
    clearTimeout(timer);
    if (!pending || !S.user) return Promise.resolve();
    var data = pending; pending = null;
    data.updatedAt = S.fs.serverTimestamp();
    return S.fs.setDoc(userDoc(), data).catch(emitError);
  }
  function put(s, row) { return S.fs.setDoc(S.fs.doc(col(s), String(row.id)), clean(row)).catch(emitError); }
  function del(s, id) { return S.fs.deleteDoc(S.fs.doc(col(s), String(id))).catch(emitError); }
  /* keep(id) false dönen belgeleri siler (sıfırlama ve yedekten yükleme için) */
  async function prune(s, keep) {
    try {
      var q = await S.fs.getDocs(col(s)), b = S.fs.writeBatch(S.db), n = 0;
      q.forEach(function (d) { if (!keep(d.id) && n < 500) { b.delete(d.ref); n++; } });
      if (n) await b.commit();
    } catch (e) { emitError(e); }
  }

  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") flush(); });

  return { state: S, init: init, signIn: signIn, signOut: signOut, load: load, saveMain: saveMain, flush: flush, put: put, del: del, prune: prune };
})();
