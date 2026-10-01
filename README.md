# w YDS

YDS için kişisel çalışma sitesi: 10 konu × 20 soruluk testler, yanlış defteri ve yanlışlara özel konu anlatımları, 8 haftalık plana göre ÖSYM düzeninde sorular.

Site herhangi bir sunucu kodu gerektirmez (statik site). Google ile giriş ve kişisel kayıtlar **Firebase** (Google'ın ücretsiz servisi) üzerinden çalışır. Böylece:

- Linki gönderdiğin herkes, hangi ağda olursa olsun siteyi açabilir.
- Google ile giren kişinin site adı otomatik olarak **"Adı w YDS"** olur (Ayarlar → Site adı ile değiştirilebilir).
- Her kişinin yanlış defteri, test sonuçları ve notları kendi hesabına bağlıdır; başka bilgisayardan girince de aynen gelir.
- Giriş yapmayanlar siteyi **w YDS** adıyla, kayıtları yalnızca kendi tarayıcılarında kalacak şekilde kullanabilir.

## Klasör yapısı

```
index.html              sayfa iskeleti ve giriş ekranı
css/style.css           tema (kiremit, buğday, krem, adaçayı; açık/koyu)
js/app.js               uygulama
js/cloud.js             Google girişi + Firestore köprüsü
js/firebase-config.js   ← Firebase ayarların buraya
js/bank.js, js/data/    soru bankası ve konu anlatımları
firestore.rules         veritabanı güvenlik kuralları
```

---

## Adım 1 — Firebase projesi oluştur

1. <https://console.firebase.google.com> adresine Google hesabınla gir.
2. **Proje ekle** → isim: `w-yds` → Google Analytics'i kapatabilirsin → **Proje oluştur**.

Ücretsiz (Spark) plan yeterli; kredi kartı gerekmez.

## Adım 2 — Google ile girişi aç

1. Sol menü **Build → Authentication → Başlayın**.
2. **Sign-in method** sekmesi → **Google** → **Etkinleştir** → proje destek e-postasını seç → **Kaydet**.

## Adım 3 — Veritabanını oluştur

1. **Build → Firestore Database → Veritabanı oluştur**.
2. Konum: `eur3 (europe-west)` → **production mode** → **Oluştur**.

## Adım 4 — Güvenlik kurallarını yayınla

1. Firestore'da **Rules** sekmesi.
2. İçindekileri silip bu klasördeki `firestore.rules` dosyasının içeriğini yapıştır → **Yayınla**.

Bu kural sayesinde herkes **yalnızca kendi** kayıtlarını görebilir.

## Adım 5 — Web uygulamasını bağla

1. Sol üstte dişli → **Proje ayarları** → **Genel** → aşağıda **Uygulamalarınız** → **Web** (`</>`) simgesi.
2. Takma ad: `w-yds` → **Uygulamayı kaydet** (Firebase Hosting kutusunu işaretlemene gerek yok).
3. Gösterilen `firebaseConfig` değerlerini `js/firebase-config.js` içine kopyala:

```js
window.FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "w-yds.firebaseapp.com",
  projectId: "w-yds",
  storageBucket: "w-yds.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123"
};
```

Bu değerler gizli değildir, GitHub'a konabilir. Verileri koruyan şey Adım 4'teki kurallardır.

## Adım 6 — Bilgisayarında dene

Google girişi, `index.html` dosyasına çift tıklayınca **çalışmaz** (tarayıcı güvenliği); site bir adresten açılmalı. Klasörde bir terminal açıp:

```
npx serve .
```

Sonra tarayıcıda <http://localhost:3000> adresini aç. `localhost` Firebase'de varsayılan olarak yetkilidir.

---

## Sonra: GitHub Pages ile her yerden açılan link

1. GitHub'da yeni bir depo oluştur (ör. `w-yds`), bu klasördeki dosyaları yükle.
2. Depoda **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. Birkaç dakika sonra site `https://KULLANICI-ADIN.github.io/w-yds/` adresinde yayında olur.
4. Firebase → **Authentication → Settings → Authorized domains → Add domain** → `KULLANICI-ADIN.github.io` ekle.
   Bunu yapmazsan giriş ekranında "Bu adres Firebase'de yetkili değil" uyarısı çıkar.

Bu linki kime gönderirsen göndersin, farklı Wi-Fi'da, telefonda ya da başka bir şehirde açabilir.

> GitHub'dan önce hemen bir link istersen: `npx firebase-tools login`, `npx firebase-tools init hosting` (public klasörü: `.`), `npx firebase-tools deploy` komutlarıyla site `https://w-yds.web.app` adresinde yayınlanır. Bu adres Firebase'de otomatik olarak yetkilidir.

---

## Eski kayıtlarını taşımak

Tek dosyalık eski site (`tugce-w-yds.html`) kayıtlarını o tarayıcı sayfasına bağlı tuttuğu için yeni siteye kendiliğinden gelmez:

1. Eski dosyayı aç → sol alttaki **Ayarlar** → **Yedeği indir**.
2. Yeni sitede Google ile giriş yap → **Ayarlar** → **Yedeği yükle** → indirdiğin JSON dosyasını seç.

Kayıtların hesabına yüklenir ve bundan sonra her cihazda görünür.

## Veriler nerede?

| Kullanım | Yer |
|---|---|
| Google ile giriş yapılmış | Firestore: `users/{kullanıcı}` belgesi (ayarlar, günlük kayıtlar, kelimeler, notlar) ve `mistakes`, `results`, `custom` alt koleksiyonları |
| Giriş yapmadan | Tarayıcının IndexedDB veritabanı (`w-yds`) + localStorage |

Firebase konsolunda **Firestore Database → Data** bölümünden tüm kayıtları görebilirsin.
