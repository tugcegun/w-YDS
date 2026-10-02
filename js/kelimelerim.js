"use strict";
/* ================= Kelimelerim (kelime kitaplığı) =================
   words = [{id, en, tr, learned, date: eklendiği gün, src: kaynak (kitap adı vb.), learnedOn: öğrenildiği gün}]
   Gün gün: o gün eklenen kelimeler + o gün öğrenilen kelimeler (kendi kelimelerin ve YDS listesinden, vocab.learnedOn).
   Eklenen kelimeler Kelime sayfasındaki günlük tekrara ("Başla") da girer. */
const MW={view:"day",q:"",trDirty:false,open:new Set(),scope:"todo",range:"all",src:""};
const MW_SCOPE=[["todo","Çalışılacaklar"],["learned","Öğrendiklerim"],["all","Hepsi"]];
const MW_RANGE=[["all","Tüm zamanlar"],["7","Son 7 gün"],["30","Son 30 gün"]];
const mwDate=w=>w.date||isoOf(new Date(+w.id||Date.now()));
const mwSources=()=>[...new Set(words.map(w=>(w.src||"").trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"tr"));
function mwDayName(iso){
  const d=daysTo(iso);
  const long=new Date(iso+"T00:00").toLocaleDateString("tr-TR",{day:"numeric",month:"long",weekday:"long"});
  return d===0?`Bugün · ${long}`:d===-1?`Dün · ${long}`:long;
}
/* İngilizce kelimenin Türkçesi: YDS listesi → site sözlüğü → çeviri */
function mwLocalTr(en){
  const w=en.toLowerCase().trim();
  if(KW_BY[w])return KW_BY[w].tr;
  if(SOZLUK[w])return SOZLUK[w];
  const base=KW_FORM.get(w);if(base&&KW_BY[base])return KW_BY[base].tr;
  return "";
}
async function mwFindTr(en){return mwLocalTr(en)||await kwTranslate(en)}
/* kendi kelimesinin eş anlamlıları (Datamuse, ücretsiz, anahtarsız); bir kez denenir, kaydedilir */
async function mwFetchSyn(w){
  if(!w||w.sTried||w.ref)return;w.sTried=true;
  const q=encodeURIComponent(w.en.toLowerCase().trim());
  const get=async u=>{try{const r=await fetch(u);return await r.json()}catch(e){return []}};
  let list=(await get("https://api.datamuse.com/words?max=8&rel_syn="+q)).map(x=>x.word);
  if(list.length<2)list=list.concat((await get("https://api.datamuse.com/words?max=8&ml="+q)).map(x=>x.word));
  const own=w.en.toLowerCase();
  w.s=[...new Set(list.filter(x=>x&&x!==own&&!x.includes(own)))].slice(0,4);
  save();
}

function mwMigrate(){
  let n=0;Object.keys(vocab).forEach(k=>{const v=vocab[k];if(v.mw||v.last||!KW_BY[k])return;v.mw=true;
    if(!words.some(x=>ownKey(x)===k)){words.push({id:Date.now()+n,en:k,tr:KW_BY[k].tr,learned:false,date:v.first||todayISO(),src:"Kelime paneli",ref:k});n++}});
  if(n)save();
}
function vMyWords(){
  mwMigrate();
  if(KW.mode==="cards") return kwCardsView();
  if(KW.mode==="quiz") return kwQuizView();
  setTimeout(mwTick,0);   /* çıkmış soru sayacı sayfayı çizdikten sonra doldurulur */
  const t=todayISO(), all=words.slice();
  const learned=all.filter(w=>w.learned).length;
  const week=all.filter(w=>daysTo(mwDate(w))>-7).length;
  const todo=all.filter(w=>!w.learned).length;
  const srcs=mwSources();
  return head("Kelime kitaplığın","Kelimelerim",
    `İstediğin kelimeyi ekle; her kelime eklendiği günle saklanır. Hangi gün hangi kelimeleri eklediğini ve öğrendiğini burada görürsün. Eklediğin kelimeler Kelime sayfasındaki günlük tekrara da girer.`)
  +`<section class="card lift mw-add">
      <div class="mw-form">
        <div><label class="f" for="mwEn">İngilizce</label><input type="text" id="mwEn" placeholder="ör. notwithstanding" autocomplete="off"></div>
        <div><label class="f" for="mwTr">Türkçesi <small class="muted">kendiliğinden gelir</small></label><input type="text" id="mwTr" placeholder="—" autocomplete="off"></div>
        <div><label class="f" for="mwSrc">Kaynak <small class="muted">isteğe bağlı</small></label><input type="text" id="mwSrc" list="mwSrcList" placeholder="ör. kitabın adı, sayfa 45" autocomplete="off" value="${esc(LS.get("mwsrc",""))}">
          <datalist id="mwSrcList">${srcs.map(s=>`<option value="${esc(s)}">`).join("")}</datalist></div>
        <button type="button" class="btn primary" data-act="mw-add">Ekle</button>
      </div>
      <div class="strip kw-strip">
        <div><div class="k">Kitaplığında</div><div class="v">${all.length}</div><div class="m">${week} tanesi son 7 günde eklendi</div></div>
        <div><div class="k">Öğrendiğin</div><div class="v">${learned}</div><div class="m mw-acts">${learned?`<button type="button" class="btn sm" data-act="mw-scope" data-v="learned">${learned} kelimeye çalış</button>`:`<span>en az 4 kez üst üste bildiğin ya da işaretlediğin</span>`}</div></div>
        <div><div class="k">Çalışılacak</div><div class="v">${todo}</div><div class="m mw-acts">${todo?`<button type="button" class="btn sm primary" data-act="mw-scope" data-v="todo">Anlamlarını yazarak çalış</button>`:`<span>hepsini öğrendin — yukarıdan öğrendiklerini tazeleyebilirsin</span>`}</div></div>
      </div>
    </section>
    ${mwHubHTML(all,learned,todo)}
    <div class="mw-bar">
      <div class="seg" role="tablist">${[["day","Günlere göre"],["src","Kaynağa göre"]].map(([v,l])=>`<button type="button" class="${MW.view===v?"on":""}" data-act="mw-view" data-v="${v}">${l}</button>`).join("")}</div>
      <input type="text" id="mwSearch" placeholder="Kitaplığında ara" value="${esc(MW.q)}" autocomplete="off">
    </div>
    ${mwWrongHTML()}
    <div id="mwList" class="kw-folds mw-list">${mwListHTML()}</div>`;
}
/* ================= Çalışma merkezi =================
   Neyi çalışacağını sen seçersin: çalışılacaklar / öğrendiklerim / hepsi,
   istersen yalnız son 7–30 günü ya da tek bir kaynağı.
   Sonra üç yol var: Türkçesini yazarak çalış (kart), beş şıklı kelime testi,
   ya da bu kelimelerin geçtiği gerçek ÖSYM soruları (YDS/YDT/YÖKDİL). */
const mwSrcKey=w=>((w.src||"").trim()||"__");
const mwRefDate=w=>w.learned&&w.learnedOn?w.learnedOn:mwDate(w);
function mwScopeLabel(key,mode){
  const m=mode||MW.scope, s=MW_SCOPE.find(x=>x[0]===m), r=MW_RANGE.find(x=>x[0]===MW.range);
  const parts=[s?s[1]:"Kelimeler",r&&r[0]!=="all"?r[1]:"",MW.src||key&&key.startsWith("s:")&&key.slice(2)!=="__"?MW.src||key.slice(2):""];
  return parts.filter(Boolean).join(" · ");
}
/* seçime uyan kelimeler: kapsam (todo/learned/all) + zaman aralığı + kaynak */
function mwSelectWords(key,mode){
  const m=mode||MW.scope;
  let ws=words.filter(w=>m==="todo"?!w.learned:m==="learned"?w.learned:true);
  if(key&&key.startsWith("d:"))ws=ws.filter(w=>mwDate(w)===key.slice(2));
  else if(key&&key.startsWith("s:"))ws=ws.filter(w=>mwSrcKey(w)===key.slice(2));
  else{
    if(MW.range!=="all")ws=ws.filter(w=>daysTo(mwRefDate(w))>=- +MW.range);
    if(MW.src)ws=ws.filter(w=>mwSrcKey(w)===MW.src);
  }
  return ws;
}
const mwKeysOf=ws=>[...new Set(ws.map(ownKey))].filter(k=>{const e=entryOf(k);return e&&e.tr&&e.tr!=="—"});
function mwScopeKeys(){return mwKeysOf(mwSelectWords())}
function mwExamCount(keys){
  if(typeof kwExamQs!=="function")return 0;
  return kwExamQs(keys,60).length;
}
/* seçili kelimelerle çalış: mode = cards (yazarak) | quiz (5 şık) | exam (çıkmış soru) */
/* Tazeleme koruması kelime bazlıdır. Karışık seçimde (Hepsi) öğrenilmemiş bir kelime,
   çalışmanın içinde öğrenilmişlerle birlikte olsa bile normal kurallara göre işler:
   yanlışta kutusu düşer ve ancak üst üste doğru yazarak öğrendiklerine geçer.
   Oturumdaki öğrenilmiş kelimelerin kümesi KW.taze içinde taşınır. */
function mwRun(mode,key,force){
  const ws=mwSelectWords(key,force), keys=mwKeysOf(ws);
  if(!keys.length){toast("Bu seçimde kelime yok");return}
  const label=mwScopeLabel(key,force), taze=new Set(keys.filter(isLearned));
  if(mode==="exam"){kwStartExam(keys,label);return}
  if(mode==="quiz"){KW.taze=taze;KW.title=label;kwSessionQuiz(keys);return}
  kwStartCards(keys,{taze,title:label});
}
function mwHubHTML(all,learned,todo){
  const srcs=mwSources();
  const ws=mwSelectWords(), n=ws.length;
  const seg=(opts,act,cur)=>`<div class="seg" role="group">${opts.map(([v,l])=>`<button type="button" class="${v===cur?"on":""}" data-act="${act}" data-v="${esc(v)}">${l}</button>`).join("")}</div>`;
  return `<section class="card lift mw-hub">
    <h3>Çalış ve test et</h3>
    <p class="sub">Ne çalışacağını sen seç: <b>öğrendiklerini</b> de tazeleyebilirsin. Sonra Türkçesini yazarak çalış, beş şıklı test çöz ya da bu kelimelerin geçtiği <b>gerçek ÖSYM sorularını</b> (YDS · YDT · YÖKDİL) çöz.</p>
    <div class="mw-hub-bar">
      ${seg(MW_SCOPE,"mw-scope-set",MW.scope)}
      ${seg(MW_RANGE,"mw-range-set",MW.range)}
      <select id="mwSrcSel" aria-label="Kaynak"><option value="">Tüm kaynaklar</option>${srcs.map(s=>`<option value="${esc(s)}" ${MW.src===s?"selected":""}>${esc(s)}</option>`).join("")}</select>
    </div>
    <div class="strip kw-strip mw-hub-strip">
      <div><div class="k">Seçili kelime</div><div class="v">${n}</div><div class="m">${n?(ws.filter(w=>w.learned).length?`${ws.filter(w=>w.learned).length} tanesi öğrenilmiş`:""):"bu seçimde kelime yok"}</div></div>
      <div><div class="k">Çıkmış soru</div><div class="v" id="mwExamN">…</div><div class="m">${n?`senin kelimelerinin geçtiği ÖSYM soruları`:`—`}</div></div>
      <div><div class="k">Kitaplık</div><div class="v">${all.length}</div><div class="m">${learned} öğrendin · ${todo} çalışılacak</div></div>
    </div>
    <div class="row mw-hub-acts">
      <button type="button" class="btn primary" data-act="mw-run" data-v="cards" ${n?"":"disabled"}>${svg(I.words,16)} Anlamlarını yazarak çalış</button>
      <button type="button" class="btn" data-act="mw-run" data-v="quiz" ${n?"":"disabled"}>Kelime testi çöz</button>
      <button type="button" class="btn" data-act="mw-run" data-v="exam" ${n?"":"disabled"}>Çıkmış soruları çöz</button>
    </div>
  </section>`;
}

function mwRow(w){
  const k=ownKey(w), v=vocab[k];
  return `<div class="mw-row ${w.learned?"done":""}">
    <input type="checkbox" data-mwl="${w.id}" ${w.learned?"checked":""} aria-label="${esc(w.en)} öğrenildi" title="Öğrendim">
    <span class="mw-en">${esc(w.en)}</span>
    <span class="mw-tr">${esc(w.tr||"—")}${(()=>{const s=w.ref&&KW_BY[w.ref]?KW_BY[w.ref].s:w.s;return s&&s.length?`<small class="mw-syn">≈ ${s.slice(0,3).map(esc).join(", ")}</small>`:""})()}</span>
    <span class="mw-meta">${w.src?`<span class="chip">${esc(w.src)}</span>`:""}${w.learned?`<span class="pill ok">öğrenildi${w.learnedOn?" · "+fmtDate(w.learnedOn,true):""}</span>`:v&&v.last?`<span class="pill plain">tekrar ${fmtDate(v.due,true)}</span>`:""}</span>
    <button type="button" class="icon-btn" data-act="mw-del" data-v="${w.id}" aria-label="${esc(w.en)} sil">${svg(I.trash,15)}</button>
  </div>`;
}
function mwGroup(key,title,sub,body,studyKey){
  const open=MW.open.has(key);
  return `<details class="st-sub kw-fold" data-mwopen="${esc(key)}" ${open?"open":""}>
    <summary><span class="st-nm"><b>${title}</b><small>${sub}</small></span>
      ${studyKey?`<button type="button" class="btn sm" data-act="mw-study" data-v="${esc(studyKey)}">Çalış</button>`:""}</summary>
    <div class="st-in">${body}</div></details>`;
}
function mwLearnedFold(key,n,inner,studyKey){
  return `<details class="mw-learned" data-mwopen="${esc(key)}" ${MW.open.has(key)?"open":""}>
    <summary>Öğrendiklerin <span class="pill ok">${n}</span>
      ${studyKey?`<span class="mw-fold-acts"><button type="button" class="btn sm" data-act="mw-study" data-v="${esc(studyKey)}|learned">Çalış</button><button type="button" class="btn sm ghost" data-act="mw-study" data-v="${esc(studyKey)}|exam">Çıkmış soru</button></span>`:""}</summary>
    <div class="mw-learned-in">${inner}</div></details>`;
}
function mwListHTML(){
  if(!words.length&&!Object.keys(vocab).some(k=>vocab[k].learnedOn))
    return `<div class="mw-empty">${emptyState("Kitaplığın boş","Yukarıdan ilk kelimeni ekle. Paragraf analizinde bir kelimeye dokunup “Kelimelerime ekle” dediğinde de buraya gelir.")}</div>`;
  const q=MW.q.trim().toLowerCase();
  if(q){
    const hit=words.filter(w=>w.en.toLowerCase().includes(q)||String(w.tr||"").toLowerCase().includes(q)||String(w.src||"").toLowerCase().includes(q));
    return hit.length?`<div class="mw-flat"><p class="st-note">${hit.length} kelime</p>${hit.slice().reverse().map(mwRow).join("")}</div>`
      :`<div class="mw-empty">${emptyState("Bulunamadı","Aramayı değiştir.")}</div>`;
  }
  if(MW.view==="src"){
    const by={};words.forEach(w=>{const s=(w.src||"").trim()||"__";(by[s]=by[s]||[]).push(w)});
    return Object.keys(by).sort((a,b)=>a==="__"?1:b==="__"?-1:a.localeCompare(b,"tr")).map(s=>{
      const ws=by[s].slice().reverse(), lr=ws.filter(w=>w.learned).length, todo=ws.some(w=>!w.learned);
      const open=ws.filter(w=>!w.learned), done=ws.filter(w=>w.learned);
      /* "Çalış" yalnız çalışılacak kelime varken; hepsi öğrenildiyse tazeleme için "|learned" */
      const studyKey=todo?"s:"+s:(done.length?"s:"+s+"|learned":"");
      return mwGroup("s:"+s,s==="__"?"Kaynak yazılmamış":esc(s),`${ws.length} kelime · ${lr} öğrenildi`,
        (open.length?open.map(mwRow).join(""):`<p class="st-note mw-alldone">Bu kaynaktaki bütün kelimeleri öğrendin.</p>`)+(done.length?mwLearnedFold("L:s:"+s,done.length,done.map(mwRow).join(""),"s:"+s):""),studyKey);
    }).join("");
  }
  /* günlere göre: eklenenler + öğrenilenler */
  const days={};
  const day=d=>days[d]=days[d]||{add:[],learn:[],yds:[]};
  words.forEach(w=>{day(mwDate(w)).add.push(w);if(w.learnedOn)day(w.learnedOn).learn.push(w)});
  const refs=new Set(words.map(w=>w.ref).filter(Boolean));
  Object.keys(vocab).forEach(k=>{const v=vocab[k];if(v.learnedOn&&KW_BY[k]&&!refs.has(k))day(v.learnedOn).yds.push(KW_BY[k])});
  const isos=Object.keys(days).sort().reverse();
  if(!MW.init&&isos.length){MW.init=true;MW.open.add("d:"+isos[0])} /* ilk açılışta en son gün açık gelir */
  const recent=isos.slice(0,14), older=isos.slice(14);
  const grp=iso=>{const d=days[iso], ln=d.learn.length+d.yds.length;
    /* açık listede yalnız öğrenilmemişler; öğrenilenler kapalı "Öğrendiklerin" bölümünde */
    const todo=d.add.filter(w=>!w.learned).reverse(), done=d.add.filter(w=>w.learned).reverse();
    const other=d.learn.filter(w=>mwDate(w)!==iso); /* başka gün eklenip bu gün öğrenilenler */
    const inner=`${done.map(mwRow).join("")}${other.length||d.yds.length?`<p class="mw-sub">Bu gün öğrendiğin diğer kelimeler</p><div class="kw-gloss">${other.map(w=>`<div class="kw-gl known"><b>${esc(w.en)}</b><span>${esc(w.tr||"")}</span></div>`).join("")}${d.yds.map(e=>`<button type="button" class="kw-gl known" data-kw="${esc(e.w)}"><b>${esc(e.w)}</b><span>${esc(e.tr)}</span></button>`).join("")}</div>`:""}`;
    const nDone=done.length+other.length+d.yds.length;
    const body=`${todo.length?todo.map(mwRow).join(""):d.add.length?`<p class="st-note mw-alldone">Bu günün bütün kelimelerini öğrendin.</p>`:""}
      ${nDone?mwLearnedFold("L:d:"+iso,nDone,inner,"d:"+iso):""}`;
    /* çalışılacak varsa normal "Çalış", yoksa öğrendikleri tazelemek için "|learned" */
    const hasTodo=d.add.some(w=>!w.learned);
    const studyKey=hasTodo?"d:"+iso:(d.add.length||d.learn.length||d.yds.length?"d:"+iso+"|learned":"");
    return mwGroup("d:"+iso,mwDayName(iso),[d.add.length?`${d.add.length} kelime eklendi`:"",ln?`${ln} kelime öğrenildi`:""].filter(Boolean).join(" · "),body,studyKey);};
  return recent.map(grp).join("")+(older.length?`<details class="st-sub kw-fold mw-older" data-mwopen="older" ${MW.open.has("older")?"open":""}><summary><span class="st-nm"><b>Daha eski günler</b><small>${older.length} gün</small></span></summary><div class="st-in">${older.map(grp).join("")}</div></details>`:"");
}
function mwRefresh(){const el=document.getElementById("mwList");if(el)el.innerHTML=mwListHTML()}
/* Çıkmış soru sayacı. Soru bankasının taranması yarım saniye sürdüğü için sonuç
   seçime göre saklanır: aynı seçime ikinci gelişte sayaç anında dolar.
   Tarama ilk kez gerektiğinde yapılır; kalan kelimeler için arka planda ısıtılır. */
const MW_EXAM_CACHE_KEY="mwexam";
let _mwExamCache=null;
const mwExamCache=()=>_mwExamCache||(_mwExamCache=LS.get(MW_EXAM_CACHE_KEY,{}));
function mwExamSig(keys){return keys.slice().sort().join("|")}
function mwExamN(keys){
  if(!keys.length)return 0;
  const sig=mwExamSig(keys), cache=mwExamCache();
  if(cache[sig]!==undefined)return cache[sig];
  const n=mwExamCount(keys);
  cache[sig]=n;
  const ks=Object.keys(cache);
  if(ks.length>120)ks.slice(0,40).forEach(k=>delete cache[k]);
  LS.set(MW_EXAM_CACHE_KEY,cache);
  return n;
}
function mwTick(){
  const el=document.getElementById("mwExamN");if(!el)return;
  const keys=mwScopeKeys();
  const btn=document.querySelector('[data-act="mw-run"][data-v="exam"]');
  if(!keys.length){el.textContent="0";if(btn)btn.disabled=true;return}
  if(btn)btn.disabled=false;
  if(typeof kwWarmIndex==="function")kwWarmIndex();   /* başka seçimler için taramayı ısıt */
  const n=mwExamN(keys);                             /* seçim ilk kezse burada hesaplanır */
  el.innerHTML=n?`${n}<small> soru</small>`:"0";
  if(btn)btn.title=n?"":"Bu kelimeler sitenin sorularında geçmiyor";
}

/* ---- ekleme ---- */
let _mwTimer=null, _mwReq=0;
function mwAutoTr(){
  const en=(document.getElementById("mwEn")||{}).value||"", tr=document.getElementById("mwTr");
  if(!tr||MW.trDirty)return;
  clearTimeout(_mwTimer);
  if(!en.trim()){tr.value="";tr.placeholder="—";return}
  const local=mwLocalTr(en);
  if(local){tr.value=local;return}
  tr.value="";tr.placeholder="Türkçesi getiriliyor…";
  const req=++_mwReq;
  _mwTimer=setTimeout(async()=>{const t=await kwTranslate(en.trim());
    if(req!==_mwReq||MW.trDirty)return;const el=document.getElementById("mwTr");if(el){el.value=t||"";el.placeholder=t?"—":"bulunamadı, istersen yaz"}},500);
}
function mwAdd(){
  const enEl=document.getElementById("mwEn"), en=enEl.value.trim();
  if(!en){toast("İngilizce kelimeyi yaz");enEl.focus();return}
  const dup=words.find(w=>w.en.toLowerCase()===en.toLowerCase());
  if(dup){toast(`“${dup.en}” zaten kitaplığında (${fmtDate(mwDate(dup),true)} eklendi)`);return}
  const tr=document.getElementById("mwTr").value.trim(), src=document.getElementById("mwSrc").value.trim();
  const lo=en.toLowerCase(), ref=KW_BY[lo]?lo:KW_FORM.get(lo)&&KW_BY[KW_FORM.get(lo)]?KW_FORM.get(lo):null;
  const w={id:Date.now(),en,tr:tr||(ref?KW_BY[ref].tr:""),learned:false,date:todayISO(),src};
  if(ref&&!words.some(x=>x.ref===ref))w.ref=ref; /* listedeki bir kelime: eş anlamlısı, örnek cümlesi ve ilerlemesi oradan */
  words.push(w);LS.set("mwsrc",src);kwFlag(ownKey(w));
  if(!w.ref)mwFetchSyn(w).then(mwRefresh);
  MW.trDirty=false;MW.open.add("d:"+w.date);
  if(!tr)mwFindTr(en).then(t=>{if(t){w.tr=t;save();mwRefresh()}});
  render();toast(`“${en}” eklendi`);
  const e2=document.getElementById("mwEn");if(e2)e2.focus();
}
/* Gruptaki "Çalış": anahtar "d:<gün>" ya da "s:<kaynak>", sonuna "|learned" ya da "|exam" eklenebilir.
   "|learned" → o gruptaki öğrendiklerin tazeleme çalışması · "|exam" → çıkmış soru testi */
function mwStudy(key){
  const ix=(key||"").lastIndexOf("|");
  const mode=ix>-1?key.slice(ix+1):"", k=ix>-1?key.slice(0,ix):key;
  if(mode==="exam"){mwRun("exam",k);return}
  mwRun("cards",k,mode==="learned"?"learned":undefined);
}

/* ================= Yazarak test =================
   İngilizce kelime gösterilir, kullanıcı Türkçesini yazar. Kayıtlı anlamlardan (virgülle ayrılmış) biriyle
   birebir, küçük yazım farkıyla ya da ek farkıyla (azaltmak ~ azaltma) eşleşirse doğru sayılır.
   Anlam başka kelimeyle yazıldıysa "Aslında doğru yazmıştım" ile doğru sayılabilir. */
const trNorm=s=>String(s||"").toLocaleLowerCase("tr").replace(/\([^)]*\)/g," ").replace(/[^a-zçğıöşüâîû ]+/g," ").replace(/\s+/g," ").trim();
const TR_WEAK=new Set(["etmek","olmak","yapmak","bir","olan","şekilde","biçimde","gibi","ile","için","ve","veya","çok","daha","en","kılmak","edilmek","olarak"]);
function lev(a,b){if(a===b)return 0;const m=a.length,n=b.length;if(!m||!n)return m||n;let p=Array.from({length:n+1},(x,j)=>j);
  for(let i=1;i<=m;i++){const c=[i];for(let j=1;j<=n;j++)c[j]=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));p=c}return p[n]}
function trClose(a,b){
  if(!a||!b)return false;if(a===b)return true;
  const L=Math.max(a.length,b.length), d=lev(a,b);
  if(d<=(L>=10?2:L>=5?1:0))return true;
  let k=0;while(k<a.length&&k<b.length&&a[k]===b[k])k++;
  return k>=5&&k>=Math.min(a.length,b.length)*0.7; /* ek farkı: azaltmak ~ azaltma, türler ~ tür */
}
function mwCheck(typed,stored){
  const split=x=>String(x).split(/[,;/]| veya /).map(trNorm).filter(Boolean);
  const ts=split(typed), as=split(stored);
  if(!ts.length)return "no";
  for(const t of ts)for(const a of as)if(trClose(t,a))return "ok";
  /* kelime kelime: anlamlı bir kelime tutuyorsa "yakın" (doğru sayılır) */
  const words4=list=>list.join(" ").split(" ").filter(w=>w.length>=4&&!TR_WEAK.has(w));
  for(const t of words4(ts))for(const a of words4(as))if(trClose(t,a))return "near";
  return "no";
}
/* ---- yanlış yazdıkların: kart çalışmasında yanlış yazılan anlamlar (vocab[k].wr) ---- */
function mwWrongList(){
  return Object.keys(vocab).filter(k=>vocab[k].wr&&vocab[k].wr.length&&entryOf(k)&&!isLearned(k))
    .sort((a,b)=>(vocab[b].wn||0)-(vocab[a].wn||0)||(vocab[b].wr[vocab[b].wr.length-1].d>vocab[a].wr[vocab[a].wr.length-1].d?1:-1));
}
function mwWrongHTML(){
  const ks=mwWrongList();if(!ks.length)return "";
  const open=MW.open.has("wrong");
  return `<details class="st-sub kw-fold mw-wrong-fold" data-mwopen="wrong" ${open?"open":""}>
    <summary><span class="st-nm"><b>Yanlış yazdıkların</b><small>${ks.length} kelime · en çok yanlış yazdığın en üstte</small></span>
      <button type="button" class="btn sm" data-act="mw-wrong-study">Bunları çalış</button></summary>
    <div class="st-in">${ks.map(k=>{const e=entryOf(k), v=vocab[k];
      return `<div class="mw-wr"><div class="mw-wr-top"><span class="mw-en">${esc(e.w)}</span><span class="mw-tr">${esc(e.tr)}</span><span class="pill no">${v.wn||v.wr.length} kez yanlış</span></div>
        <div class="mw-wr-list">${v.wr.slice().reverse().map(x=>`<span class="mw-wr-i"><small>${fmtDate(x.d,true)}</small> ${x.t==="(bilmiyorum)"?"<i>bilmiyorum</i>":`“${esc(x.t)}”`}</span>`).join("")}</div></div>`}).join("")}</div></details>`;
}

document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]");if(!a)return;
  const v=a.dataset.v;
  switch(a.dataset.act){
    case "mw-add": mwAdd(); break;
    case "mw-view": MW.view=v; render(); break;
    case "mw-study": e.preventDefault(); mwStudy(v); break;
    case "mw-scope": MW.scope=v;render();mwTick(); break;
    case "mw-scope-set": MW.scope=v;render();mwTick(); break;
    case "mw-range-set": MW.range=v;render();mwTick(); break;
    case "mw-run": mwRun(v); break;
    case "mw-wrong-study": e.preventDefault(); {const ks=mwWrongList();if(ks.length)kwStartCards(ks,{title:"Yanlış yazdıkların"})} break;
    case "mw-del": {const w=words.find(x=>String(x.id)===v);
      if(w&&confirm(`“${w.en}” kitaplığından silinsin mi?`)){words=words.filter(x=>x!==w);if(!w.ref)delete vocab[ownKey(w)];save();mwRefresh();toast("Silindi")}} break;
  }
});
document.addEventListener("input",e=>{
  if(e.target.id==="mwEn"){MW.trDirty=false;mwAutoTr()}
  else if(e.target.id==="mwTr"){MW.trDirty=!!e.target.value.trim()}
  else if(e.target.id==="mwSearch"){MW.q=e.target.value;mwRefresh()}
});
document.addEventListener("change",e=>{
  if(e.target.id==="mwSrcSel"){MW.src=e.target.value;render();mwTick()}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Enter"&&e.target&&["mwEn","mwTr","mwSrc"].includes(e.target.id)){e.preventDefault();mwAdd()}
});
document.addEventListener("change",e=>{
  const t=e.target;if(!t.dataset||!t.dataset.mwl)return;
  const w=words.find(x=>String(x.id)===t.dataset.mwl);if(!w)return;
  w.learned=t.checked;w.learnedOn=t.checked?todayISO():null;
  const k=ownKey(w);if(t.checked){const v=vocab[k]||(vocab[k]={b:0,due:todayISO(),first:todayISO(),ok:0,no:0,last:todayISO()});v.b=Math.max(v.b,KW_LEARNED);v.due=addDays(todayISO(),BOX_DAYS[v.b]);v.learnedOn=v.learnedOn||todayISO()}
  save();mwRefresh();toast(t.checked?`“${w.en}” öğrenildi olarak işaretlendi`:"İşaret kaldırıldı");
});
document.addEventListener("toggle",e=>{const d=e.target;if(d.dataset&&d.dataset.mwopen){d.open?MW.open.add(d.dataset.mwopen):MW.open.delete(d.dataset.mwopen)}},true);
