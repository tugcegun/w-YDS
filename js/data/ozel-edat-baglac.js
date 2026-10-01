/* Yanlışlarına özel anlatımlar: pre-dependent, pre-phrase, pre-compound, pre-timeplace, con-contrast, con-cause, con-result, con-purpose, con-correlative, con-time */
Object.assign(OZEL, {
  "pre-dependent": `
    <p>Bu sorularda anlam değil <b>kelimenin “eşi”</b> sorulur. Boşluğun hemen solundaki kelimeyi (fiil, sıfat ya da isim) bul, onu tek parça gibi oku: “interfere ___” değil, “interfere with”. Aynı kelime iki farklı edatla iki farklı anlam veriyorsa (result in / result from), boşluktan sonra gelenin <b>sebep mi sonuç mu</b> olduğuna bak.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>on (bağlılık, etki, odak):</b> <code class="k">depend on</code> <code class="k">rely on</code> <code class="k">dependent on</code> <code class="k">based on</code> <code class="k">focus on</code> <code class="k">concentrate on</code> <code class="k">insist on</code> <code class="k">impact / effect / influence on</code> <code class="k">emphasis on</code> <code class="k">comment on</code> <code class="k">embark on</code> <code class="k">impose sth on</code></li>
      <li><b>to (yönelme, uyum, katkı):</b> <code class="k">contribute to</code> <code class="k">lead to</code> <code class="k">attribute / ascribe sth to</code> <code class="k">adapt / adjust to</code> <code class="k">respond to</code> <code class="k">object to (+V-ing)</code> <code class="k">be committed / devoted to (+V-ing)</code> <code class="k">vulnerable / susceptible / prone to</code> <code class="k">exposed to</code> <code class="k">similar / equivalent / relevant to</code> <code class="k">access / solution / threat / approach to</code> <code class="k">key to</code></li>
      <li><b>of (içerik, farkındalık, yetenek):</b> <code class="k">consist of</code> <code class="k">be composed of</code> <code class="k">deprive sb of</code> <code class="k">rid of</code> <code class="k">aware / conscious of</code> <code class="k">capable of</code> <code class="k">independent of</code> <code class="k">indicative of</code> <code class="k">typical / characteristic of</code> <code class="k">cause / example of</code></li>
      <li><b>in (alan, değişim, katılım):</b> <code class="k">result in (sonuç)</code> <code class="k">participate / engage / invest in</code> <code class="k">succeed in (+V-ing)</code> <code class="k">consist in (soyut: -de yatmak)</code> <code class="k">involved in</code> <code class="k">rich in</code> <code class="k">increase / decrease / rise / decline / drop / change in</code> <code class="k">interest in</code></li>
      <li><b>for (amaç, talep, sorumluluk):</b> <code class="k">account for</code> <code class="k">compensate for</code> <code class="k">responsible for</code> <code class="k">suitable / eligible for</code> <code class="k">demand / need / reason / respect / substitute for</code></li>
      <li><b>from (kaynak, ayrılma, engel):</b> <code class="k">result / stem / derive from (sebep)</code> <code class="k">suffer from</code> <code class="k">differ from</code> <code class="k">distinguish A from B</code> <code class="k">prevent / prohibit / protect sb from (+V-ing)</code> <code class="k">recover from</code> <code class="k">immune from</code></li>
      <li><b>with (ilişki, çatışma, donatma):</b> <code class="k">cope / deal with</code> <code class="k">interfere with</code> <code class="k">comply with</code> <code class="k">associated with</code> <code class="k">compatible / consistent with</code> <code class="k">equip / provide sb with</code> <code class="k">familiar with</code> <code class="k">contact / relationship with</code></li>
      <li><b>about / against / at:</b> <code class="k">concerned / anxious about</code> <code class="k">warn against</code> <code class="k">discriminate against</code> <code class="k">good / skilled at</code> <code class="k">aim at</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>result in / result from:</b> boşluktan sonra sonuç varsa in, sebep varsa from. “Sebep result ___ sonuç” sırasını kontrol et.</li>
      <li><b>consist of / consist in:</b> somut parçalar sayılıyorsa of; “-in özü şudur” deniyorsa in.</li>
      <li><b>provide sth to / for sb ↔ provide sb with sth:</b> önce kişi geliyorsa with gerekir.</li>
      <li><b>“to” edat mı, mastar mı?</b> contribute to, object to, committed to, look forward to'dan sonra fiil <b>V-ing</b> olur; V1 seçen şık tuzaktır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Loud traffic noise may <em>interfere with</em> the way songbirds communicate during the breeding season.<br><span class="muted">interfere with = -e engel olmak, -i bozmak</span></div>
    <div class="ex">Much of the town's wealth <em>stemmed from</em> the salt trade that flourished in the Middle Ages.<br><span class="muted">stem from + sebep/kaynak</span></div>
    <div class="ex">Coastal wetlands are highly <em>susceptible to</em> rising sea levels and saltwater intrusion.<br><span class="muted">susceptible to = -e açık, -den kolay etkilenen</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluğun solundaki kelimeyi eşiyle birlikte sesli oku; tanıdık gelmeyen eşleşmeyi ele. 2) İki anlamlı kelimede (result, consist, provide) sağ tarafın sebep/sonuç ya da kişi/nesne olduğunu doğrula.</div>`,

  "pre-phrase": `
    <p>Edat öbeği sorusunu bir <b>anlam ilişkisi</b> sorusu gibi çöz: boşluktan önceki ve sonraki kısım arasında nasıl bir bağ var? Açısından mı, adına mı, bedeli mi, eşiğinde mi? İlişkiyi Türkçe bir kelimeyle adlandır, sonra o anlama denk gelen öbeği seç. Şıklar genelde aynı biçimde (in … of) olduğu için gramer yardım etmez; karar anlamla verilir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Bakış açısı / alan:</b> <code class="k">in terms of</code> açısından · <code class="k">with regard to</code> <code class="k">with respect to</code> <code class="k">in respect of</code> <code class="k">with reference to</code> -e ilişkin · <code class="k">as regards</code> <code class="k">in the case of</code> söz konusu olduğunda</li>
      <li><b>Uygunluk / uyum:</b> <code class="k">in accordance with</code> <code class="k">in line with</code> <code class="k">in keeping with</code> <code class="k">in compliance with</code> -e uygun olarak · <code class="k">in conformity with</code></li>
      <li><b>Araç / yol:</b> <code class="k">by means of</code> <code class="k">by way of</code> <code class="k">through the use of</code> <code class="k">with the help / aid of</code> aracılığıyla</li>
      <li><b>Temsil / taraf tutma:</b> <code class="k">on behalf of</code> adına · <code class="k">in favour of</code> lehine · <code class="k">in support of</code> desteğinde · <code class="k">at the request of</code> talebi üzerine</li>
      <li><b>Bedel / kayıp:</b> <code class="k">at the expense of</code> <code class="k">at the cost of</code> -in pahasına · <code class="k">to the detriment of</code> -in zararına</li>
      <li><b>Eşik / durum:</b> <code class="k">on the verge of</code> <code class="k">on the brink of</code> <code class="k">on the point of</code> eşiğinde · <code class="k">in danger of</code> tehlikesiyle karşı karşıya · <code class="k">in the process of</code> sürecinde · <code class="k">in the midst of</code> ortasında</li>
      <li><b>Tepki / sebep:</b> <code class="k">in response to</code> <code class="k">in reaction to</code> -e karşılık · <code class="k">in the light of</code> <code class="k">in view of</code> ışığında, göz önüne alındığında · <code class="k">on account of</code> <code class="k">by virtue of</code> sayesinde, nedeniyle</li>
      <li><b>Sorumluluk / kontrol:</b> <code class="k">in charge of</code> -den sorumlu · <code class="k">in control of</code> · <code class="k">under the supervision of</code> · <code class="k">at the mercy of</code> -in insafına kalmış</li>
      <li><b>Ekleme / yerine / karşılaştırma:</b> <code class="k">in addition to</code> · <code class="k">in place of</code> <code class="k">in lieu of</code> yerine · <code class="k">in contrast to</code> <code class="k">in comparison with</code> · <code class="k">in proportion to</code> ile orantılı · <code class="k">in excess of</code> -i aşan</li>
      <li><b>Amaç / takip:</b> <code class="k">in pursuit of</code> peşinde · <code class="k">in search of</code> arayışında · <code class="k">with a view to (+V-ing)</code> amacıyla · <code class="k">for the sake of</code> uğruna</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>on behalf of / in favour of:</b> “adına konuşmak” mı, “lehine karar” mı? Kişinin yerine hareket ediliyorsa on behalf of.</li>
      <li><b>by means of / at the expense of:</b> ikisi de “-i kullanarak” gibi görünebilir; cümlede kayıp, zarar, feda varsa at the expense of.</li>
      <li><b>in terms of / in accordance with:</b> alan ayrımı (ekonomi açısından, sağlık açısından) → in terms of; kural, yasa, talimat → in accordance with.</li>
      <li><b>with a view to + V-ing:</b> buradaki to edattır; “with a view to reduce” ✗, “with a view to reducing” ✓.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The excavation was carried out <em>in keeping with</em> international standards for protecting fragile remains.<br><span class="muted">in keeping with = -e uygun olarak (standart, kural)</span></div>
    <div class="ex"><em>In the light of</em> new satellite data, glaciologists revised their estimates of ice loss.<br><span class="muted">in the light of = yeni bilgi ışığında</span></div>
    <div class="ex">Some farmers have increased their harvests <em>to the detriment of</em> long-term soil fertility.<br><span class="muted">to the detriment of = -in zararına (bedel)</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) İki parça arasındaki ilişkiyi tek Türkçe kelimeyle adlandır (açısından / adına / pahasına / eşiğinde / aracılığıyla). 2) Olumlu-olumsuz tonu kontrol et: cümlede zarar varsa “expense / detriment”, tehlike yakınsa “verge / brink”.</div>`,

  "pre-compound": `
    <p>Soruya önce <b>gramer süzgeci</b> uygula: boşluktan sonra yalnızca isim öbeği ya da V-ing varsa cümle bağlaçlarını (although, because) hemen ele. Kalan bileşik edatları dört kutuya ayır: <b>sebep, zıtlık, yerine, hariç/ek</b>. İki yarı arasındaki mantığı bulunca tek kutu kalır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Sebep (nötr):</b> <code class="k">because of</code> <code class="k">due to</code> <code class="k">owing to</code> <code class="k">on account of</code> <code class="k">as a result of</code> <code class="k">as a consequence of</code> <code class="k">in view of</code> <code class="k">on the grounds of</code> <code class="k">by virtue of</code> <code class="k">out of (duygu: out of curiosity)</code></li>
      <li><b>Sebep (olumlu sonuç):</b> <code class="k">thanks to</code> sayesinde</li>
      <li><b>Zıtlık / rağmen:</b> <code class="k">despite</code> <code class="k">in spite of</code> <code class="k">notwithstanding</code> <code class="k">for all</code> (-e rağmen) · <code class="k">regardless of</code> <code class="k">irrespective of</code> -e bakılmaksızın</li>
      <li><b>Karşıtlık / farklılık:</b> <code class="k">unlike</code> <code class="k">as opposed to</code> <code class="k">in contrast to</code> <code class="k">contrary to</code> (beklentinin aksine)</li>
      <li><b>Yerine:</b> <code class="k">instead of</code> <code class="k">rather than</code> <code class="k">in place of</code></li>
      <li><b>Hariç:</b> <code class="k">except (for)</code> <code class="k">apart from</code> <code class="k">aside from</code> <code class="k">but for</code> (-olmasaydı) · <code class="k">with the exception of</code></li>
      <li><b>Ek olarak:</b> <code class="k">in addition to</code> <code class="k">as well as</code> <code class="k">besides</code> <code class="k">along with</code> <code class="k">together with</code> <code class="k">apart from</code> (yanı sıra)</li>
      <li><b>Koşul / olasılık:</b> <code class="k">in case of</code> <code class="k">in the event of</code> durumunda · <code class="k">without</code> · <code class="k">but for</code></li>
      <li><b>Benzerlik / ilişki:</b> <code class="k">like</code> <code class="k">such as</code> <code class="k">according to</code> -e göre · <code class="k">depending on</code> -e bağlı olarak · <code class="k">in proportion to</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>due to / thanks to:</b> ikisi de sebep; sonuç olumluysa thanks to daha uygun, olumsuzsa (iptal, kayıp) due to / owing to.</li>
      <li><b>despite / regardless of:</b> despite beklenmedik sonuç verir; regardless of “fark etmeksizin, kimse/hiçbiri için ayrım yok” demektir (all, any, whatever ile gelir).</li>
      <li><b>unlike / like:</b> cümlede iki şeyin farklı davrandığı görülüyorsa unlike; benzer davranıyorsa like.</li>
      <li><b>but for / except for:</b> but for çoğu zaman koşul cümlesiyle (would have) birlikte “-olmasaydı” anlamı taşır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Contrary to</em> earlier assumptions, the ancient city was abandoned gradually rather than overnight.<br><span class="muted">contrary to = önceki varsayımın aksine</span></div>
    <div class="ex"><em>But for</em> the timely intervention of volunteers, the parish archives would have been destroyed by the flood.<br><span class="muted">but for = -olmasaydı (would have + V3 ile)</span></div>
    <div class="ex">The disease affects bees <em>irrespective of</em> the climate in which their colonies live.<br><span class="muted">irrespective of = -e bakılmaksızın</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluktan sonra özne + yüklem var mı? Varsa bileşik edatların hepsi yanlıştır. 2) İki yarıyı “çünkü / rağmen / yerine / dışında” ile birleştir; hangisi anlamlı okunuyorsa o grubun şıkkını seç.</div>`,

  "pre-timeplace": `
    <p>Bu sorularda iki soru sor: <b>Fiil bir anda mı biter, süre boyunca mı devam eder?</b> ve <b>Kaç öğe var?</b> Anlık eylem + son tarih → by; süregelen durum + bitiş noktası → until. İki öğe → between; kalabalık/grup → among. Zaman ifadesinin türü (tarih, süre, olay) doğru edatı hemen gösterir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Son tarih / bitiş:</b> <code class="k">by</code> (en geç) · <code class="k">until / till</code> (-e kadar süren) · <code class="k">up to</code> · <code class="k">no later than</code></li>
      <li><b>Süre:</b> <code class="k">for</code> + süre (for decades) · <code class="k">within</code> süre içinde (within a week) · <code class="k">in</code> süre sonunda (in two hours) · <code class="k">over</code> boyunca (over the past decade) · <code class="k">throughout</code> baştan sona</li>
      <li><b>Olay / dönem içinde:</b> <code class="k">during</code> + olay/isim (during the drought) · <code class="k">in the course of</code> · <code class="k">amid</code> ortasında</li>
      <li><b>Başlangıç noktası:</b> <code class="k">since</code> + nokta (since 1990) · <code class="k">from … to / until</code> · <code class="k">as of / as from</code> itibaren</li>
      <li><b>Önce / sonra:</b> <code class="k">before</code> <code class="k">prior to</code> <code class="k">ahead of</code> · <code class="k">after</code> <code class="k">following</code> <code class="k">subsequent to</code></li>
      <li><b>Takvim:</b> <code class="k">at</code> saat/an (at dawn, at the end of) · <code class="k">on</code> gün/tarih · <code class="k">in</code> ay/yıl/yüzyıl · <code class="k">in the end</code> sonunda / <code class="k">at the end of</code> -in sonunda</li>
      <li><b>Yer / dağılım:</b> <code class="k">between</code> iki öğe · <code class="k">among</code> grup · <code class="k">throughout</code> her yerinde · <code class="k">across</code> bir uçtan öbürüne, genelinde · <code class="k">within</code> sınırları içinde · <code class="k">beyond</code> ötesinde · <code class="k">along</code> boyunca · <code class="k">beneath / underneath</code> altında</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>by / until:</b> “complete, submit, arrive, finish” → by; “remain, stay, last, continue, wait” → until. Olumsuz cümlede until “ancak o zaman” anlamı verir (not … until).</li>
      <li><b>during / for:</b> “ne zaman?” → during + olay; “ne kadar?” → for + sayı.</li>
      <li><b>since / for:</b> since bir başlangıç anı ister (since the 1990s); for bir miktar (for thirty years). İkisi de genelde present perfect ile gelir.</li>
      <li><b>within / in:</b> within “o süreyi aşmadan”, in “o süre dolunca” vurgusu taşır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The volcano showed no signs of activity <em>until</em> a series of small earthquakes began in early spring.<br><span class="muted">no … until = ancak o zamana kadar hiç</span></div>
    <div class="ex">Researchers expect the vaccine trials to be completed <em>by</em> the end of next year.<br><span class="muted">complete (anlık bitiş) + son tarih → by</span></div>
    <div class="ex">Traces of the same pottery style have been found <em>across</em> the entire Mediterranean basin.<br><span class="muted">across = genelinde, bir uçtan diğerine</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Fiil anlık mı süreç mi? (by/until). 2) Boşluktan sonra ne var: tarih/nokta → by, until, since; sayı + süre → for, within, in; olay adı → during; kişi/öğe sayısı → between / among.</div>`,

  "con-contrast": `
    <p>Zıtlık sorusunda iki ayrı karar ver: <b>Mantık</b> (iki yarı birbirine “ama” ile mi bağlanıyor?) ve <b>kalıp</b> (boşluktan sonra cümle mi, isim mi, yoksa noktalı virgülden sonra mı geliyor?). Mantık zıtlığı doğrular, kalıp ise aynı anlamlı şıklardan tek birini bırakır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Yan cümle bağlacı (+ özne + yüklem):</b> <code class="k">although</code> <code class="k">though</code> <code class="k">even though</code> <code class="k">even if</code> <code class="k">while</code> <code class="k">whereas</code> <code class="k">whilst</code> <code class="k">much as</code> <code class="k">despite / in spite of the fact that</code> <code class="k">notwithstanding the fact that</code></li>
      <li><b>Edat (+ isim / V-ing):</b> <code class="k">despite</code> <code class="k">in spite of</code> <code class="k">notwithstanding</code> <code class="k">for all</code> <code class="k">regardless of</code> <code class="k">unlike</code> <code class="k">contrary to</code> <code class="k">in contrast to</code></li>
      <li><b>Geçiş zarfı (; … , + cümle):</b> <code class="k">however</code> <code class="k">nevertheless</code> <code class="k">nonetheless</code> <code class="k">even so</code> <code class="k">still</code> <code class="k">yet</code> <code class="k">all the same</code> <code class="k">on the other hand</code> <code class="k">in contrast</code> <code class="k">by contrast</code> <code class="k">conversely</code> <code class="k">on the contrary</code> <code class="k">instead</code> <code class="k">rather</code></li>
      <li><b>Eşit bağlaç:</b> <code class="k">but</code> <code class="k">yet</code></li>
      <li><b>Devrik / özel kalıplar:</b> <code class="k">adjective + as / though + özne + be</code> (Strange as it may seem …) · <code class="k">however + sıfat + özne + fiil</code> (however hard they tried) · <code class="k">no matter how / what</code> · <code class="k">whatever / whoever</code></li>
      <li><b>Metindeki zıtlık sinyalleri:</b> <code class="k">surprisingly</code> <code class="k">unexpectedly</code> <code class="k">still</code> <code class="k">only</code> <code class="k">few / little</code> (beklenenden az) · olumlu ↔ olumsuz yarım</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>although / despite:</b> anlam aynı; boşluktan sonra fiil çekimli cümle varsa although, yoksa despite.</li>
      <li><b>whereas / although:</b> whereas iki tarafı yan yana karşılaştırır (A şöyle, B böyle); although beklentiyi kırar (bir şeye rağmen).</li>
      <li><b>however / but:</b> however virgülle iki cümleyi bağlayamaz; önünde nokta ya da noktalı virgül olmalı. Virgülle bağlanıyorsa but / while.</li>
      <li><b>on the contrary / in contrast:</b> on the contrary önceki ifadeyi yalanlar (“Tam tersine”); in contrast iki farklı öğeyi karşılaştırır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Much as</em> historians admire the treaty, they admit that it failed to prevent further conflict.<br><span class="muted">much as = her ne kadar … -se de (+ cümle)</span></div>
    <div class="ex">Deep-sea corals grow extremely slowly; <em>even so</em>, some colonies have survived for over four thousand years.<br><span class="muted">even so = yine de (geçiş zarfı, noktalı virgülden sonra)</span></div>
    <div class="ex"><em>For all</em> its technological sophistication, the observatory produced very little useful data in its first decade.<br><span class="muted">for all + isim = -e rağmen</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) İki yarıyı “ama / rağmen” ile okumak anlamlı mı? Değilse zıtlık şıklarını ele. 2) Boşluğun sağına bak: çekimli fiil → although/while; isim → despite; noktalı virgül + virgül → however/nevertheless.</div>`,

  "con-cause": `
    <p>Sebep sorusunu <b>“Neden?” testi</b> ile çöz: boşluklu yarıyı cevap olarak koy; ana cümledeki olaya “neden?” diye sorduğunda doğal bir cevap oluyorsa sebep şıkları devrededir. Ardından boşluktan sonra gelenin <b>cümle mi, isim öbeği mi</b> olduğuna bakıp bağlaç ile edat arasında seçim yap.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Bağlaç (+ özne + yüklem):</b> <code class="k">because</code> <code class="k">since</code> <code class="k">as</code> <code class="k">for</code> (resmî, cümle ortasında) <code class="k">now that</code> <code class="k">seeing that</code> <code class="k">given that</code> <code class="k">inasmuch as</code> <code class="k">insofar as</code> <code class="k">in that</code> (şu bakımdan ki)</li>
      <li><b>Uzun kalıp (+ cümle):</b> <code class="k">due to the fact that</code> <code class="k">owing to the fact that</code> <code class="k">on account of the fact that</code> <code class="k">in view of the fact that</code> <code class="k">on the grounds that</code></li>
      <li><b>Edat (+ isim / V-ing):</b> <code class="k">because of</code> <code class="k">due to</code> <code class="k">owing to</code> <code class="k">on account of</code> <code class="k">as a result of</code> <code class="k">in view of</code> <code class="k">thanks to</code> <code class="k">by virtue of</code> <code class="k">given</code> <code class="k">out of</code></li>
      <li><b>Sebep bildiren fiiller:</b> <code class="k">result from</code> <code class="k">stem from</code> <code class="k">arise from</code> <code class="k">be attributed to</code> <code class="k">be caused by</code> <code class="k">be triggered by</code></li>
      <li><b>Participle ile sebep:</b> <code class="k">Being …, / Having + V3, / V-ing …,</code> (Having lost its funding, the lab closed.)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>since (sebep) / since (zaman):</b> ana cümle present perfect ve boşluktan sonra bir başlangıç anı varsa zaman; genel bir gerekçe sunuyorsa “-dığı için”.</li>
      <li><b>because / because of:</b> anlam aynı, kalıp farklı. “because of the drought” ✓, “because the drought” ✗.</li>
      <li><b>due to / thanks to:</b> sonuç olumlu (başarı, iyileşme) → thanks to; olumsuz → due to / owing to.</li>
      <li><b>as (sebep) / as (-iken, gibi):</b> cümle başında gerekçe veriyorsa sebep; “as the temperature rose” gibi eşzamanlı değişim varsa zaman.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The two dialects are distinct <em>in that</em> one has preserved ancient vowel sounds while the other has not.<br><span class="muted">in that = şu bakımdan ki, çünkü</span></div>
    <div class="ex"><em>Given that</em> most volcanic eruptions are preceded by ground swelling, satellites are used to monitor slopes.<br><span class="muted">given that = -dığı göz önüne alınırsa (+ cümle)</span></div>
    <div class="ex">The bridge remained closed for months <em>on account of</em> structural cracks discovered during an inspection.<br><span class="muted">on account of + isim = yüzünden</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Ana olaya “neden?” diye sor; boşluklu kısım cevap mı? 2) Cevapsa sağ tarafı kontrol et: çekimli fiil → because/since/as/given that; isim → because of/due to/owing to.</div>`,

  "con-result": `
    <p>Sonuç sorusunda yönü ters çevir: boşluktan <b>önceki</b> kısım sebep, <b>sonraki</b> kısım onun doğal sonucu olmalı. “Bu yüzden” ile okuyup anlam akıyorsa sonuç ifadesi doğrudur. Sonra yapıya bak: noktalı virgül → therefore türü zarflar; sıfat/isim + that → so/such; virgül + V-ing → thus.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Geçiş zarfı (; … , + cümle):</b> <code class="k">therefore</code> <code class="k">thus</code> <code class="k">hence</code> <code class="k">consequently</code> <code class="k">as a result</code> <code class="k">as a consequence</code> <code class="k">accordingly</code> <code class="k">for this reason</code> <code class="k">that is why</code> <code class="k">in consequence</code></li>
      <li><b>Eşit bağlaç (virgülle):</b> <code class="k">so</code> (, so + cümle)</li>
      <li><b>Kısa kalıp:</b> <code class="k">, thus / thereby + V-ing</code> (thereby reducing costs) · <code class="k">hence + isim</code> (hence the name) · <code class="k">, which + fiil</code> (which led to …)</li>
      <li><b>O kadar … ki:</b> <code class="k">so + sıfat / zarf + that</code> · <code class="k">so many / few + sayılabilen isim + that</code> · <code class="k">so much / little + sayılamayan isim + that</code> · <code class="k">such + a/an + sıfat + tekil isim + that</code> · <code class="k">such + sıfat + çoğul / sayılamayan isim + that</code> · <code class="k">so + sıfat + a/an + isim + that</code> (resmî)</li>
      <li><b>Devrik:</b> <code class="k">So + sıfat + be + özne + that</code> (So severe was the frost that …) · <code class="k">Such + be + isim + that</code></li>
      <li><b>Yeterlik / aşırılık:</b> <code class="k">too + sıfat + to V1</code> (sonuç: yapılamaz) · <code class="k">sıfat + enough + to V1</code> (sonuç: yapılabilir)</li>
      <li><b>Sonuç bildiren fiiller:</b> <code class="k">result in</code> <code class="k">lead to</code> <code class="k">give rise to</code> <code class="k">bring about</code> <code class="k">cause</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>so … that / such … that:</b> boşluktan hemen sonra a/an veya isim geliyorsa such; tek başına sıfat/zarf geliyorsa so. “so many people”, “such a lot of people”.</li>
      <li><b>therefore / because:</b> therefore sonucu, because sebebi başlatır; ikisi ters yöndedir. Boşluktan sonrası sebepse therefore yanlış.</li>
      <li><b>so … that (sonuç) / so that (amaç):</b> araya sıfat giriyorsa sonuç (“o kadar … ki”); bitişik “so that + can” ise amaç.</li>
      <li><b>too … to / so … that:</b> too zaten olumsuz sonuç verir; “too weak to lift” = kaldıramayacak kadar zayıf.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The island lacked any large mammals; <em>consequently</em>, several bird species lost the ability to fly.<br><span class="muted">consequently = sonuç olarak (noktalı virgülden sonra)</span></div>
    <div class="ex">The new irrigation method delivers water directly to the roots, <em>thereby</em> reducing evaporation losses.<br><span class="muted">, thereby + V-ing = böylece, bu sayede</span></div>
    <div class="ex"><em>So</em> dense <em>was</em> the fog over the harbour <em>that</em> all ferry services were suspended.<br><span class="muted">devrik: So + sıfat + be + özne + that</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) “A, bu yüzden B” diye oku; anlam akıyorsa sonuç ifadesi. 2) Yapıyı eşle: “; ___,” → therefore/consequently; “___ + sıfat + that” → so; “___ + a + isim + that” → such; “, ___ + V-ing” → thus/thereby.</div>`,

  "con-purpose": `
    <p>Amaç yapısını tanımanın yolu <b>“-mek için / -sin diye” testidir</b>: boşluktan sonraki kısım bir <u>niyet</u> mi (henüz gerçekleşmemiş, istenen bir durum)? Öyleyse şık grubu amaç yapılarıdır. Son kararı boşluğun sağı verir: yalın fiil → in order to / so as to; özne + modal → so that / in order that; olumsuz niyet → lest / for fear that / in case.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>+ V1 (yalın fiil):</b> <code class="k">to</code> <code class="k">in order to</code> <code class="k">so as to</code> · olumsuz: <code class="k">in order not to</code> <code class="k">so as not to</code></li>
      <li><b>+ özne + can / could / will / would / may / might:</b> <code class="k">so that</code> <code class="k">in order that</code> (resmî) <code class="k">so</code> (gündelik)</li>
      <li><b>Olumsuz niyet (“olmasın diye”):</b> <code class="k">lest + özne + (should) V1</code> · <code class="k">for fear that + özne + might / would</code> · <code class="k">for fear of + V-ing / isim</code> · <code class="k">in case + cümle</code> (ihtimale karşı)</li>
      <li><b>+ isim / V-ing:</b> <code class="k">for the purpose of</code> <code class="k">with the aim of</code> <code class="k">with a view to</code> <code class="k">with the intention of</code> <code class="k">for the sake of</code> <code class="k">in an effort to (+V1)</code> <code class="k">in an attempt to (+V1)</code></li>
      <li><b>Amaç bildiren isim / fiiller:</b> <code class="k">aim to</code> <code class="k">intend to</code> <code class="k">be designed to</code> <code class="k">be intended to</code> <code class="k">seek to</code> <code class="k">strive to</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>in order to / so that:</b> anlam aynı; sağda özne varsa so that, doğrudan fiil varsa in order to.</li>
      <li><b>lest / so that:</b> lest olumsuz anlamı kendisi taşır, arkasına not gelmez; so that + couldn't / wouldn't ile aynı anlamı verir.</li>
      <li><b>in case / if:</b> in case “olur diye önceden önlem”; if “olursa o zaman”. “Take a map in case you get lost.”</li>
      <li><b>with a view to / in an effort to:</b> ilki V-ing ister (to edattır), ikincisi V1 ister (to mastardır).</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The ancient city walls were built on a hill <em>so as to</em> give defenders a clear view of approaching armies.<br><span class="muted">so as to + V1 = -mek için</span></div>
    <div class="ex">The nurses spoke quietly <em>for fear that</em> they <em>might</em> wake the sleeping patients.<br><span class="muted">for fear that + özne + might = -ir korkusuyla</span></div>
    <div class="ex">The committee met twice a week <em>in an effort to</em> finalise the budget before the deadline.<br><span class="muted">in an effort to + V1 = -mek amacıyla, -mek için çabalayarak</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluklu kısım bir niyet/amaç mı? 2) Sağda yalın fiil → to / in order to / so as to; özne + can/could → so that; istenmeyen sonuç → lest / for fear that / in case.</div>`,

  "con-correlative": `
    <p>Eşli bağlaç sorusu çoğu zaman <b>iki boşluklu</b> gelir ve bir anahtar kelime zaten verilmiştir. Önce <b>ikinci parçaya</b> bak (or, nor, and, but also): o parça ilk yarıyı tek başına belirler. Sonra cümlenin olumlu mu olumsuz mu olduğunu kontrol et; “neither … nor” zaten olumsuzdur, yanında ayrıca not bulunmaz.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Ekleme:</b> <code class="k">both … and</code> hem … hem de · <code class="k">not only … but also</code> · <code class="k">not only … but … as well</code> · <code class="k">as well as</code> · <code class="k">not just … but</code></li>
      <li><b>Seçenek:</b> <code class="k">either … or</code> ya … ya da · <code class="k">whether … or (not)</code> … olsun … olmasın, … mı yoksa … mı</li>
      <li><b>Olumsuzluk:</b> <code class="k">neither … nor</code> ne … ne de · <code class="k">not … nor</code> · <code class="k">not … either</code></li>
      <li><b>Tercih / karşıtlık:</b> <code class="k">rather than</code> · <code class="k">not … but</code> (şu değil, bu) · <code class="k">not so much … as</code> (… olmaktan çok … )</li>
      <li><b>Oran / derece:</b> <code class="k">the + comparative …, the + comparative</code> (ne kadar … o kadar) · <code class="k">as … as</code> · <code class="k">no sooner … than</code> · <code class="k">hardly / scarcely … when</code></li>
      <li><b>Sonuç / derece ikilileri:</b> <code class="k">so … that</code> · <code class="k">such … that</code> · <code class="k">too … to</code> · <code class="k">enough … to</code></li>
      <li><b>Devrik yapı:</b> <code class="k">Not only + yardımcı fiil + özne …, but … also</code> (Not only did the drug …)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>either … or / neither … nor:</b> eşler karışmaz. “either … nor” ya da “neither … or” şıkkı otomatik elenir.</li>
      <li><b>both … and / neither … nor:</b> sonuç cümlesi olumsuzsa (so it failed, unlikely) neither … nor; olumluysa both … and.</li>
      <li><b>whether … or / either … or:</b> belirsizlik, tartışma, karar fiilleri (debate, decide, unclear, wonder) whether ister; iki seçenekten biri kesin olacaksa either.</li>
      <li><b>Fiil uyumu:</b> both … and → çoğul; either/neither … or/nor → yakın özneye göre; not only … but also → yakın özneye göre.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The manuscript is valuable <em>not so much</em> for its age <em>as</em> for the notes written in its margins.<br><span class="muted">not so much A as B = A'dan çok B yüzünden</span></div>
    <div class="ex"><em>The</em> deeper the divers descended, <em>the</em> fewer species of fish they observed.<br><span class="muted">the + comparative, the + comparative = ne kadar …, o kadar</span></div>
    <div class="ex"><em>Not only did</em> the drought reduce crop yields, <em>but</em> it <em>also</em> forced thousands of families to migrate.<br><span class="muted">devrik: Not only + did + özne + V1</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) İkinci boşluğun şıklarını tara ve yanlış eşleri (either/nor, neither/or, both/or) hemen ele. 2) Cümlenin genel anlamı olumlu mu olumsuz mu, yoksa belirsiz mi (whether)? Kalan şıkkı buna göre seç.</div>`,

  "con-time": `
    <p>Zaman bağlacı sorusunda iki olayı bir <b>zaman çizgisine</b> yerleştir: hangisi önce, hangisi sonra, yoksa aynı anda mı? Sonra zamanlara bak: ana cümledeki had + V3 veya will have + V3 “by the time”, sürüp giden bir durum “until/while”, yeni oluşmuş bir durumun sonucu “now that” ister. Zaman yan cümlesinde gelecek için will kullanılmaz.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Hemen ardından:</b> <code class="k">as soon as</code> <code class="k">once</code> <code class="k">the moment / the minute</code> <code class="k">immediately</code> <code class="k">directly</code> · <code class="k">no sooner … than</code> <code class="k">hardly / scarcely / barely … when</code> (had + V3 ile, devrik)</li>
      <li><b>Önce / sonra:</b> <code class="k">before</code> <code class="k">after</code> <code class="k">prior to</code> · <code class="k">by the time</code> (-diği zamana kadar; ana cümle perfect) · <code class="k">until / till</code> · <code class="k">not … until</code> (ancak … -ince)</li>
      <li><b>Aynı anda:</b> <code class="k">when</code> <code class="k">while</code> <code class="k">as</code> (-dikçe, -iken) · <code class="k">just as</code> tam -diği sırada · <code class="k">whenever</code> her -diğinde · <code class="k">every time / each time</code></li>
      <li><b>Başlangıç / süreç:</b> <code class="k">since</code> (-den beri; ana cümle present perfect) · <code class="k">ever since</code> · <code class="k">as long as</code> (-dikçe, sürece)</li>
      <li><b>Zaman + sebep:</b> <code class="k">now that</code> <code class="k">once</code> (-ince, -dığına göre)</li>
      <li><b>Zaman uyumu ipuçları:</b> <code class="k">already</code> <code class="k">yet</code> <code class="k">just</code> · <code class="k">had + V3</code> (by the time + V2, before, when) · <code class="k">will have + V3</code> (by the time + V1) · <code class="k">was / were + V-ing</code> (while, when, as)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>until / by the time:</b> until “o ana kadar sürdü”; by the time “o ana gelindiğinde çoktan olmuştu” (already + perfect).</li>
      <li><b>once / now that:</b> once gelecekteki bir koşula da uyar (once it is approved); now that yalnızca gerçekleşmiş, bugünkü bir duruma bağlanır.</li>
      <li><b>as long as / as soon as:</b> as long as “-dığı sürece” (koşul/süreklilik), as soon as “-er -mez” (anlık).</li>
      <li><b>since / when:</b> ana cümle present perfect ise since; tek bir geçmiş an ve past simple ise when.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>No sooner had</em> the excavators unsealed the burial chamber <em>than</em> the ancient pigments began to fade.<br><span class="muted">No sooner + had + özne + V3 + than = -er -mez</span></div>
    <div class="ex"><em>By the time</em> the telescope is launched, engineers <em>will have tested</em> each mirror hundreds of times.<br><span class="muted">by the time + V1 → will have + V3</span></div>
    <div class="ex">The tribe did <em>not</em> settle permanently <em>until</em> they learned how to store grain through the winter.<br><span class="muted">not … until = ancak … -dikten sonra</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) İki olayı sırala: önce / sonra / aynı anda. 2) Ana cümlenin zamanını eşle: had/will have + V3 → by the time; present perfect → since; bugünkü yeni durum → now that; zaman cümlesinde will varsa şık yanlıştır.</div>`
});
