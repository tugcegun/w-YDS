/* Soru bankası kapları — js/data/*.js dosyaları bunları doldurur. */
var TOPIC_BANK = [], LESSONS = {}, PASSAGES = {}, ARCHIVE = [];
/* Kişisel test havuzu (js/data/kisisel-*.js): her soru `from` ile hedeflediği bankadaki soruları gösterir */
var PRACTICE = [];
/* Ekstra havuz (js/data/ekstra-*.js): bir alt başlıkta başarı oranı %80'in altındaysa açılan yeni sorular */
var EKSTRA = [];
/* Yanlışlarım sayfasına özel anlatımlar (js/data/ozel-*.js): konu anlatımından farklı açı, yeni örnekler, tüm ipucu kelimeler */
var OZEL = {};
/* Soru zorluk puanları (js/data/zorluk-*.js): 1 kolay – 10 zor; tekrar testleri Test 1 → Test 3 kolaydan zora */
var ZORLUK = {};
/* Kelime paneli (js/data/kelime-*.js): KPDS/ÜDS/YDS/YÖKDİL'de (2000'den bu yana) en sık çıkan kelimeler.
   {w, p: v|adj|n|adv|phr, tr, s: eş anlamlılar, a: zıt anlamlılar, ex: örnek cümle (kelime aynen geçer), et: Türkçesi, f: 3 çok sık · 2 sık · 1 ara sıra} */
var KELIME = [];
/* Sitedeki metinlerde geçen, listede olmayan kelimelerin Türkçesi (js/data/sozluk-*.js): {"destroyed":"yok etti, tahrip edilmiş", …} */
var SOZLUK = {};
