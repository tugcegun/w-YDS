/* Yanlışlarına özel anlatımlar: pas-tense, pas-modal, pas-causative, pas-reporting, pas-infger, voc-verb, voc-adj, voc-adv, voc-noun, voc-phrasal */
Object.assign(OZEL, {
  "pas-tense": `
    <p>Bu soruları iki ayrı karar olarak çöz: önce <b>zaman</b> (cümledeki zaman ifadesi hangi zamanı istiyor?), sonra <b>çatı</b> (boşluktan sonra nesne var mı, özne eylemi yapabilir mi?). İki kararı ayrı ayrı verirsen seçenekler hızla ikiye iner.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Simple Present Passive (is/are V3):</b> <code class="k">every year</code> <code class="k">each day</code> <code class="k">usually</code> <code class="k">generally</code> <code class="k">typically</code> <code class="k">often</code> <code class="k">nowadays</code> <code class="k">today</code> <code class="k">currently</code> (durum) <code class="k">as a rule</code></li>
      <li><b>Simple Past Passive (was/were V3):</b> <code class="k">in 1928</code> <code class="k">ago</code> <code class="k">last century</code> <code class="k">in the 19th century</code> <code class="k">then</code> <code class="k">once</code> <code class="k">originally</code> <code class="k">when + geçmiş</code> <code class="k">during the war</code></li>
      <li><b>Present Continuous Passive (is/are being V3):</b> <code class="k">now</code> <code class="k">right now</code> <code class="k">at the moment</code> <code class="k">at present</code> <code class="k">currently</code> <code class="k">these days</code> <code class="k">still</code></li>
      <li><b>Past Continuous Passive (was/were being V3):</b> <code class="k">when + Simple Past</code> <code class="k">while</code> <code class="k">at that time</code> <code class="k">at 5 p.m. yesterday</code> <code class="k">as</code></li>
      <li><b>Present Perfect Passive (has/have been V3):</b> <code class="k">since</code> <code class="k">for</code> <code class="k">so far</code> <code class="k">up to now</code> <code class="k">until now</code> <code class="k">to date</code> <code class="k">recently</code> <code class="k">lately</code> <code class="k">already</code> <code class="k">yet</code> <code class="k">over/in the past/last decade</code> <code class="k">in recent years</code> <code class="k">ever since</code></li>
      <li><b>Past Perfect Passive (had been V3):</b> <code class="k">by the time + Simple Past</code> <code class="k">before + Simple Past</code> <code class="k">by 1990</code> <code class="k">until then</code> <code class="k">already</code> (geçmiş anlatımda) <code class="k">when + Simple Past</code> (önce biten iş)</li>
      <li><b>Future / Future Perfect Passive:</b> <code class="k">next year</code> <code class="k">soon</code> <code class="k">in the coming years</code> <code class="k">tomorrow</code> → will be V3 · <code class="k">by 2040</code> <code class="k">by the time + Simple Present</code> <code class="k">by the end of next year</code> → will have been V3</li>
      <li><b>Çatı ipuçları:</b> <code class="k">by + eylemi yapan</code> · boşluktan sonra nesne yok · cansız özne (data, samples, buildings, species) · geçişsiz fiiller asla edilgen olmaz: <code class="k">occur</code> <code class="k">happen</code> <code class="k">emerge</code> <code class="k">arise</code> <code class="k">disappear</code> <code class="k">die out</code> <code class="k">remain</code> <code class="k">exist</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>was V3 vs has been V3:</b> belirli geçmiş tarih (in 2005, ago) varsa Simple Past; since/so far/recently varsa Present Perfect.</li>
      <li><b>is being V3 vs has been V3:</b> iş şu an sürüyorsa “being”; bitmiş ve sonucu bugüne uzanıyorsa “been”.</li>
      <li><b>“was occurred” tuzağı:</b> occur, happen, arise nesne almaz; seçenekte “been + occurred” görürsen ele.</li>
      <li><b>“by” iki anlamlı:</b> by + kişi/kurum → edilgen ipucu; by + tarih → perfect zaman ipucu.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">To date, fewer than two hundred of the island's native beetles <em>have been catalogued</em> by entomologists.<br><span class="muted">to date → Present Perfect; böcekler kataloglanan taraf.</span></div>
    <div class="ex">While the medieval aqueduct <em>was being restored</em>, visitors were diverted along a temporary path.<br><span class="muted">while + süren geçmiş eylem → Past Continuous Passive.</span></div>
    <div class="ex">By the end of the decade, most coal-fired plants in the region <em>will have been decommissioned</em>.<br><span class="muted">by + gelecek zaman sınırı → Future Perfect Passive.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Zaman ifadesini daire içine al ve zamanı seç. 2) Boşluktan sonra nesne yoksa ve özne eylemi yapamıyorsa aynı zamanın edilgenini (be + V3) işaretle; geçişsiz fiilse edilgeni ele.</div>`,

  "pas-modal": `
    <p>Soruda iki şeye bak: <b>zaman yönü</b> (bugün/gelecek mi, geçmiş mi?) ve <b>anlam türü</b> (zorunluluk, tahmin, pişmanlık, olasılık). Geçmişe bakan bir cümlede “modal + be V3” neredeyse hiç doğru değildir; “modal + have been V3” gerekir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Zorunluluk / kural (must / have to / need to be V3):</b> <code class="k">by law</code> <code class="k">under the regulations</code> <code class="k">compulsory</code> <code class="k">mandatory</code> <code class="k">required</code> <code class="k">no later than</code> <code class="k">deadline</code> <code class="k">in accordance with</code></li>
      <li><b>Tavsiye (should / ought to be V3):</b> <code class="k">it is advisable</code> <code class="k">ideally</code> <code class="k">experts recommend</code> <code class="k">to prevent</code> <code class="k">in order to</code></li>
      <li><b>Olasılık (may / might / could be V3):</b> <code class="k">possibly</code> <code class="k">perhaps</code> <code class="k">it is likely</code> <code class="k">in the future</code> <code class="k">if + Present</code></li>
      <li><b>Kesin geçmiş çıkarım (must have been V3):</b> <code class="k">clearly</code> <code class="k">obviously</code> <code class="k">evidence shows</code> <code class="k">traces of</code> <code class="k">the only explanation</code> <code class="k">judging by</code></li>
      <li><b>İmkânsız geçmiş (can't / couldn't have been V3):</b> <code class="k">impossible</code> <code class="k">no way</code> <code class="k">since it was already</code> <code class="k">at that time it did not yet exist</code></li>
      <li><b>Eleştiri / pişmanlık (should have been V3):</b> <code class="k">but it wasn't</code> <code class="k">instead</code> <code class="k">earlier</code> <code class="k">in time</code> <code class="k">long ago</code> <code class="k">negligence</code></li>
      <li><b>Gerçekleşmemiş olasılık (could / would / might have been V3):</b> <code class="k">if … had been</code> <code class="k">had + özne + V3</code> (devrik) <code class="k">but for</code> <code class="k">without</code> <code class="k">otherwise</code> <code class="k">fortunately</code></li>
      <li><b>Belirsiz geçmiş (may / might have been V3):</b> <code class="k">it is unclear whether</code> <code class="k">possibly</code> <code class="k">researchers suspect</code></li>
      <li><b>Gereksizlik (needn't have been V3):</b> <code class="k">in the end it was unnecessary</code> <code class="k">anyway</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>must be V3 vs must have been V3:</b> kural/gelecek ise ilki; geçmişe dair kanıta dayalı sonuç ise ikincisi.</li>
      <li><b>must have V3 vs must have been V3:</b> özne eylemi yapan mı, etkilenen mi? Etkilenense “been” şart.</li>
      <li><b>should have been vs could have been:</b> yapılmadığı için eleştiri → should; “olabilirdi ama olmadı” + if-koşulu → could.</li>
      <li><b>can't have been vs mustn't have been:</b> geçmiş imkânsızlık her zaman can't/couldn't; “mustn't have been” YDS'de doğru cevap değildir.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Judging by the soot on the ceiling, the chamber <em>must have been lit</em> by oil lamps for centuries.<br><span class="muted">judging by → kesin geçmiş çıkarım + edilgen.</span></div>
    <div class="ex">The contaminated batch <em>should have been withdrawn</em> from pharmacies before the holiday season.<br><span class="muted">geri çekilmesi gerekirdi ama çekilmedi → eleştiri.</span></div>
    <div class="ex">All research proposals involving human tissue <em>must be approved</em> by the ethics board in advance.<br><span class="muted">kural, geleceğe dönük → modal + be V3.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümle geçmişi mi anlatıyor? Evetse “have been V3” içeren seçeneklere daral. 2) İpucu kelimeye göre anlamı seç: kanıt → must, eleştiri → should, if … had → could/would, imkânsız → can't.</div>`,

  "pas-causative": `
    <p>Ettirgende karar anahtarı <b>fiilden hemen sonraki nesnedir</b>: nesne bir <b>şey</b> ise fiil V3 olur (iş ona yapılıyor); nesne bir <b>kişi</b> ise fiil biçimini ettirgen fiilin kendisi belirler (V1 ya da to V1).</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Yaptırmak (şey + V3):</b> <code class="k">have sth done</code> <code class="k">get sth done</code> <code class="k">have one's car/house/eyes … V3</code> · olumsuz deneyim: <code class="k">have one's bag stolen</code> <code class="k">have one's licence suspended</code></li>
      <li><b>Kişiye yaptırmak:</b> <code class="k">have sb do</code> · <code class="k">get sb to do</code> (ikna ederek)</li>
      <li><b>Zorlamak:</b> <code class="k">make sb do</code> · edilgen <code class="k">be made to do</code> · <code class="k">force / compel / oblige / require sb to do</code> · <code class="k">be forced to do</code></li>
      <li><b>İzin vermek:</b> <code class="k">let sb do</code> (edilgeni yok → <code class="k">be allowed to do</code>) · <code class="k">allow / permit / enable sb to do</code> · <code class="k">prevent / stop / prohibit sb from doing</code></li>
      <li><b>Yardım:</b> <code class="k">help sb (to) do</code> — to'lu da to'suz da doğru</li>
      <li><b>Sürdürmek / bırakmak:</b> <code class="k">keep sb waiting</code> <code class="k">leave sth unfinished</code> <code class="k">get sth going</code></li>
      <li><b>Ek ipuçları:</b> <code class="k">by + uzman</code> (by a mechanic, by professionals) → have/get sth V3; <code class="k">persuade / convince</code> anlamı → get sb to V1</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>have sth repaired vs have sb repair:</b> nesne cansızsa V3; kişiyse V1.</li>
      <li><b>make sb do vs be made to do:</b> aktifte “to” yok, edilgende “to” zorunlu.</li>
      <li><b>let vs allow:</b> let + V1; allow/permit + to V1. “was let to” diye bir yapı yoktur → was allowed to.</li>
      <li><b>get sb to do vs have sb do:</b> anlam yakın, biçim farklı; get'ten sonra “to” unutulmaz.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Before the exhibition, the museum <em>had the fragile tapestries photographed</em> in high resolution.<br><span class="muted">nesne şey (tapestries) → V3.</span></div>
    <div class="ex">The coach finally <em>got the reluctant athletes to follow</em> a stricter sleep schedule.<br><span class="muted">get + kişi + to V1 → ikna ederek yaptırmak.</span></div>
    <div class="ex">During the drill, residents <em>were made to leave</em> their flats within four minutes.<br><span class="muted">make'in edilgeni → be made to V1.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Nesne şey mi kişi mi? Şeyse V3. 2) Kişiyse fiile bak: have/make/let → V1; get/allow/force/enable → to V1; edilgen make → to V1.</div>`,

  "pas-reporting": `
    <p>Bu sorularda iki zamanı karşılaştır: <b>söyleme/inanma zamanı</b> (is said, was believed) ve <b>olayın zamanı</b>. Olay aynı zamanda ya da sonra ise basit mastar, daha önce ise perfect mastar (to have V3 / to have been V3) seçilir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Rapor fiilleri:</b> <code class="k">say</code> <code class="k">believe</code> <code class="k">think</code> <code class="k">know</code> <code class="k">report</code> <code class="k">consider</code> <code class="k">expect</code> <code class="k">estimate</code> <code class="k">claim</code> <code class="k">allege</code> <code class="k">assume</code> <code class="k">suppose</code> <code class="k">rumour</code> <code class="k">understand</code> <code class="k">suspect</code> <code class="k">fear</code> <code class="k">find</code> <code class="k">predict</code> <code class="k">acknowledge</code></li>
      <li><b>Kişisiz yapı:</b> <code class="k">It is said that</code> <code class="k">It has been suggested that</code> <code class="k">It was reported that</code> <code class="k">It is widely believed that</code> <code class="k">It is generally accepted that</code></li>
      <li><b>Kişisel yapı (mastar biçimleri):</b> <code class="k">is said to V1</code> (şimdi/genel/gelecek) · <code class="k">to be V-ing</code> (şu an sürüyor) · <code class="k">to have V3</code> (önce oldu) · <code class="k">to be V3</code> (edilgen, aynı zaman) · <code class="k">to have been V3</code> (edilgen, önce)</li>
      <li><b>Geçmişe işaret eden ipuçları (perfect mastar ister):</b> <code class="k">in ancient times</code> <code class="k">centuries ago</code> <code class="k">in the 1500s</code> <code class="k">originally</code> <code class="k">once</code> <code class="k">during the Bronze Age</code> <code class="k">before</code></li>
      <li><b>Şimdiye işaret eden ipuçları (basit mastar):</b> <code class="k">still</code> <code class="k">now</code> <code class="k">currently</code> <code class="k">at present</code> <code class="k">today</code></li>
      <li><b>Sık zarflar:</b> <code class="k">widely</code> <code class="k">generally</code> <code class="k">commonly</code> <code class="k">now</code> <code class="k">once</code> <code class="k">long</code> (long believed) <code class="k">traditionally</code></li>
      <li><b>Eş anlamlı kişisel kalıplar:</b> <code class="k">be likely/unlikely to</code> <code class="k">be certain/sure to</code> <code class="k">be supposed to</code> <code class="k">appear/seem to have V3</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>It is said that vs X is said to:</b> “It” varsa ardından that-cümlesi; somut özne varsa ardından mastar. “It is said to …” ve “X is said that …” yanlıştır.</li>
      <li><b>to be built vs to have been built:</b> geçmiş olay → perfect mastar.</li>
      <li><b>to have V3 vs to have been V3:</b> özne eylemi yapan mı? Geçişsiz fiil (die out, emerge) edilgen olmaz.</li>
      <li><b>is thought vs thinks:</b> kişisiz rapor her zaman edilgendir; “The tomb thinks to …” anlamsızdır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The shipwreck off the Lycian coast <em>is believed to have been carrying</em> copper ingots when it sank.<br><span class="muted">geçmişte süren eylem → to have been V-ing.</span></div>
    <div class="ex"><em>It has long been assumed that</em> migratory birds navigate mainly by the stars.<br><span class="muted">It + edilgen rapor fiili + that-cümlesi.</span></div>
    <div class="ex">The rare orchid <em>is reported to grow</em> only on a few limestone cliffs in the region.<br><span class="muted">bugünkü genel durum → basit mastar.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluktan önce “It” mi somut özne mi? It → that; özne → to. 2) Olay rapordan önceyse “to have (been) V3”, aynı zamandaysa “to (be) V1/V3”.</div>`,

  "pas-infger": `
    <p>Boşluğun <b>solundaki kelimeye</b> bak: mastar isteyen bir fiil mi (expect, hope), V-ing isteyen bir fiil mi (deny, avoid), yoksa edat mı (without, of)? Biçim oradan gelir; sonra özneye “yaptı mı, yapıldı mı?” diye sorarak edilgen olup olmadığına, önce mi olduğuna göre perfect olup olmadığına karar ver.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>to be V3 / to have been V3 isteyen fiiller:</b> <code class="k">expect</code> <code class="k">hope</code> <code class="k">want</code> <code class="k">need</code> <code class="k">refuse</code> <code class="k">agree</code> <code class="k">deserve</code> <code class="k">wish</code> <code class="k">ask</code> <code class="k">seem</code> <code class="k">appear</code> <code class="k">happen</code> <code class="k">tend</code> <code class="k">claim</code> <code class="k">pretend</code> <code class="k">be likely to</code> <code class="k">be due to</code> (-mesi bekleniyor) <code class="k">be the first/last to</code></li>
      <li><b>being V3 / having been V3 isteyen fiiller:</b> <code class="k">deny</code> <code class="k">avoid</code> <code class="k">admit</code> <code class="k">recall</code> <code class="k">remember</code> <code class="k">mind</code> <code class="k">risk</code> <code class="k">resent</code> <code class="k">escape</code> <code class="k">enjoy</code> <code class="k">dislike</code> <code class="k">appreciate</code> <code class="k">object to</code> <code class="k">be used to</code> <code class="k">look forward to</code></li>
      <li><b>Edatlar (+ being / having been V3):</b> <code class="k">without</code> <code class="k">after</code> <code class="k">before</code> <code class="k">on/upon</code> <code class="k">by</code> <code class="k">despite</code> <code class="k">instead of</code> <code class="k">for</code> <code class="k">of</code> <code class="k">at</code> <code class="k">from</code> <code class="k">in addition to</code> <code class="k">as a result of</code></li>
      <li><b>Cümle başı kısaltma:</b> <code class="k">Having been V3,</code> (önce + edilgen, sebep/zaman) · <code class="k">Being V3,</code> (aynı anda) · <code class="k">V3,</code> (Built in…, Written by…) · <code class="k">Having V3,</code> (aktif)</li>
      <li><b>Perfect biçimi tetikleyenler:</b> <code class="k">earlier</code> <code class="k">previously</code> <code class="k">years before</code> <code class="k">already</code> <code class="k">once</code> · ana fiilden önce biten eylem</li>
      <li><b>need + V-ing = edilgen anlam:</b> <code class="k">need repairing</code> = <code class="k">need to be repaired</code> · <code class="k">want cleaning</code> <code class="k">deserve mentioning</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>to be V3 vs being V3:</b> soldaki fiil/edat belirler; edattan sonra asla “to be V3” gelmez.</li>
      <li><b>being V3 vs having been V3:</b> eylem ana fiille eşzamanlıysa being, öncesindeyse having been.</li>
      <li><b>Having warned vs Having been warned:</b> ana cümlenin öznesi uyaran mı uyarılan mı? Uyarılansa “been”.</li>
      <li><b>remember doing vs remember being done:</b> özne kendisi yaptıysa aktif; ona yapıldıysa being V3.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The veteran diplomat strongly resented <em>being excluded</em> from the final round of negotiations.<br><span class="muted">resent + V-ing; diplomat dışlanan taraf.</span></div>
    <div class="ex">The recovered paintings appear <em>to have been stored</em> in a damp cellar for decades.<br><span class="muted">appear + mastar; saklanma daha önce ve edilgen.</span></div>
    <div class="ex"><em>Having been trained</em> in field surgery, the volunteers were sent to the most remote clinics.<br><span class="muted">eğitim önce, gönüllüler eğitilen taraf.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Soldaki kelime to mu istiyor, V-ing mi (fiil ya da edat)? 2) Özne etkilenen tarafsa “be/being/been V3”; eylem daha önceyse “to have been / having been V3”.</div>`,

  "voc-verb": `
    <p>Fiil sorusunda seçeneklere bakmadan önce boşluğu <b>kendi Türkçe fiilinle</b> doldur (“azaltmak”, “ortaya çıkarmak”…). Sonra nesneye ve bağlaca göre yönü kontrol et: olumlu mu olumsuz mu, artış mı azalış mı? Seçeneklerdeki fiillerin çoğu aynı anlam grubundan değil, <b>zıt gruplardan</b> gelir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Artırmak / geliştirmek:</b> <code class="k">enhance</code> (iyileştirmek) <code class="k">boost</code> (artırmak) <code class="k">foster</code> (teşvik etmek) <code class="k">promote</code> (desteklemek) <code class="k">bolster</code> (güçlendirmek) <code class="k">augment</code> (çoğaltmak) <code class="k">amplify</code> (büyütmek) <code class="k">expand</code> (genişletmek) <code class="k">accelerate</code> (hızlandırmak)</li>
      <li><b>Azaltmak / zayıflatmak:</b> <code class="k">alleviate</code> <code class="k">mitigate</code> <code class="k">ease</code> (hafifletmek) <code class="k">diminish</code> <code class="k">curtail</code> (kısıtlamak) <code class="k">undermine</code> (baltalamak) <code class="k">impair</code> (bozmak) <code class="k">hinder</code> <code class="k">impede</code> <code class="k">hamper</code> (engellemek)</li>
      <li><b>Kötüleşmek / kötüleştirmek:</b> <code class="k">exacerbate</code> <code class="k">aggravate</code> (kötüleştirmek, nesneli) · <code class="k">deteriorate</code> (bozulmak, nesnesiz) <code class="k">decline</code> (düşmek)</li>
      <li><b>Bulmak / anlamak:</b> <code class="k">ascertain</code> (tespit etmek) <code class="k">determine</code> <code class="k">identify</code> <code class="k">detect</code> (saptamak) <code class="k">reveal</code> <code class="k">disclose</code> (açığa çıkarmak) <code class="k">uncover</code> <code class="k">assess</code> <code class="k">evaluate</code> (değerlendirmek)</li>
      <li><b>Onaylamak / reddetmek:</b> <code class="k">endorse</code> <code class="k">approve</code> <code class="k">ratify</code> (onaylamak) <code class="k">acknowledge</code> (kabul etmek) · <code class="k">reject</code> <code class="k">dismiss</code> (reddetmek) <code class="k">refute</code> (çürütmek) <code class="k">abolish</code> (kaldırmak)</li>
      <li><b>İddia / ifade:</b> <code class="k">allege</code> <code class="k">claim</code> <code class="k">assert</code> <code class="k">contend</code> (ileri sürmek) <code class="k">imply</code> (ima etmek) <code class="k">indicate</code> (göstermek)</li>
      <li><b>Başlatmak / durdurmak:</b> <code class="k">launch</code> <code class="k">initiate</code> (başlatmak) <code class="k">trigger</code> (tetiklemek) <code class="k">cease</code> <code class="k">halt</code> <code class="k">suspend</code> (durdurmak) <code class="k">postpone</code> <code class="k">defer</code> (ertelemek) <code class="k">abandon</code> (vazgeçmek)</li>
      <li><b>Sağlamak / korumak:</b> <code class="k">ensure</code> (garanti etmek) <code class="k">maintain</code> <code class="k">sustain</code> (sürdürmek) <code class="k">preserve</code> <code class="k">conserve</code> (korumak) <code class="k">acquire</code> <code class="k">obtain</code> (elde etmek) <code class="k">allocate</code> (tahsis etmek)</li>
      <li><b>Nesne almayan (geçişsiz) fiiller:</b> <code class="k">emerge</code> <code class="k">arise</code> <code class="k">occur</code> <code class="k">collapse</code> <code class="k">persist</code> <code class="k">prevail</code> <code class="k">thrive</code> <code class="k">flourish</code> <code class="k">vanish</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>alleviate vs exacerbate:</b> ikisi de “sorun” nesnesi alır; cümle iyileşme mi kötüleşme mi anlatıyor?</li>
      <li><b>exacerbate vs deteriorate:</b> boşluktan sonra nesne varsa exacerbate; yoksa deteriorate.</li>
      <li><b>ensure vs assure vs insure:</b> ensure = garanti altına almak; assure sb = birine güvence vermek; insure = sigortalamak.</li>
      <li><b>imply vs infer:</b> imply = ima etmek (konuşan); infer = sonuç çıkarmak (dinleyen).</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Prolonged drought has severely <em>impaired</em> the ability of farmers to plan their harvests.<br><span class="muted">impair = işlevini bozmak, zayıflatmak.</span></div>
    <div class="ex">Archivists were unable to <em>ascertain</em> who had annotated the margins of the manuscript.<br><span class="muted">ascertain = kesin olarak tespit etmek.</span></div>
    <div class="ex">Small neighbourhood libraries can <em>foster</em> a lasting habit of reading among children.<br><span class="muted">foster a habit / cooperation → geliştirmek, teşvik etmek.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluğa kendi Türkçe fiilini koy ve yönünü (artır/azalt, iyi/kötü) belirle. 2) Boşluktan sonra nesne var mı bak; yoksa geçişsiz fiilleri, varsa geçişli olanları seç.</div>`,

  "voc-adj": `
    <p>Sıfat sorusunda cümleyi <b>iki yarıya böl</b>: bağlacın öbür tarafındaki bilgi, boşluktaki sıfatın ya eş anlamlısını (because, so, and, thus) ya da zıt anlamlısını (although, but, despite, whereas) verir. Ayrıca sıfattan sonraki edat seçenekleri eler.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Önemli / gerekli:</b> <code class="k">vital</code> <code class="k">essential</code> <code class="k">crucial</code> <code class="k">indispensable</code> (vazgeçilmez) <code class="k">paramount</code> (en önemli) <code class="k">integral to</code> (ayrılmaz parçası)</li>
      <li><b>Yeterli / yetersiz:</b> <code class="k">adequate</code> <code class="k">sufficient</code> · <code class="k">inadequate</code> <code class="k">insufficient</code> <code class="k">scarce</code> (kıt) <code class="k">meagre</code> (cılız) · <code class="k">abundant</code> <code class="k">ample</code> (bol)</li>
      <li><b>Kesinlik:</b> <code class="k">conclusive</code> <code class="k">definitive</code> <code class="k">compelling</code> (ikna edici) <code class="k">robust</code> (sağlam) · <code class="k">inconclusive</code> <code class="k">tentative</code> (geçici, kesin olmayan) <code class="k">ambiguous</code> <code class="k">vague</code> (belirsiz) <code class="k">controversial</code> (tartışmalı)</li>
      <li><b>Dayanıklılık:</b> <code class="k">resilient</code> <code class="k">durable</code> <code class="k">robust</code> · <code class="k">vulnerable to</code> <code class="k">susceptible to</code> (-e açık) <code class="k">fragile</code> <code class="k">prone to</code> (-e eğilimli)</li>
      <li><b>Kapsam / çeşit:</b> <code class="k">extensive</code> <code class="k">comprehensive</code> (kapsamlı) <code class="k">widespread</code> (yaygın) <code class="k">diverse</code> <code class="k">varied</code> · <code class="k">limited</code> <code class="k">narrow</code> <code class="k">confined to</code> (-le sınırlı)</li>
      <li><b>Zaman / sürüm:</b> <code class="k">obsolete</code> <code class="k">outdated</code> (eskimiş) <code class="k">contemporary</code> (çağdaş) <code class="k">permanent</code> <code class="k">temporary</code> <code class="k">sustainable</code> <code class="k">unprecedented</code> (eşi görülmemiş)</li>
      <li><b>Nitelik:</b> <code class="k">feasible</code> <code class="k">viable</code> (uygulanabilir) <code class="k">reliable</code> (güvenilir) <code class="k">accurate</code> (doğru) <code class="k">efficient</code> (verimli) <code class="k">effective</code> (etkili) <code class="k">detrimental to</code> <code class="k">harmful</code> (zararlı) <code class="k">beneficial</code> (faydalı)</li>
      <li><b>Edatla gelenler:</b> <code class="k">capable of</code> <code class="k">aware of</code> <code class="k">reluctant to</code> <code class="k">eligible for</code> <code class="k">compatible with</code> <code class="k">consistent with</code> <code class="k">relevant to</code> <code class="k">exempt from</code> <code class="k">reliant on</code></li>
      <li><b>Bağlaç ipuçları:</b> zıtlık → <code class="k">although</code> <code class="k">despite</code> <code class="k">yet</code> <code class="k">whereas</code> <code class="k">surprisingly</code> · uyum → <code class="k">because</code> <code class="k">so</code> <code class="k">therefore</code> <code class="k">as</code> <code class="k">; indeed</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>effective vs efficient:</b> effective = sonuç veren; efficient = az kaynakla çok iş yapan.</li>
      <li><b>economic vs economical:</b> economic = ekonomiyle ilgili; economical = tasarruflu.</li>
      <li><b>sensible vs sensitive:</b> sensible = mantıklı; sensitive = hassas.</li>
      <li><b>vulnerable to vs resistant to:</b> ikisi de “to” alır; cümlenin zarar mı dayanıklılık mı anlattığına bak.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Although the pilot scheme was small, its results were <em>compelling</em> enough to persuade the ministry.<br><span class="muted">compelling = ikna edici; bakanlığı ikna etmekle uyumlu.</span></div>
    <div class="ex">Elderly patients with weak immune systems are particularly <em>susceptible to</em> seasonal infections.<br><span class="muted">susceptible to = -e karşı savunmasız, yatkın.</span></div>
    <div class="ex">With spare parts no longer manufactured, the laboratory's centrifuges have become <em>obsolete</em>.<br><span class="muted">obsolete = kullanım dışı kalmış.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Bağlacı bul: zıtlık mı uyum mu? Buna göre olumlu/olumsuz sıfatı seç. 2) Boşluktan sonra edat varsa (to, of, for, with) o edatı alan sıfatları bırak.</div>`,

  "voc-adv": `
    <p>Zarf sorusunda önce boşluktaki zarfın <b>görevini</b> belirle: derece mi (ne kadar?), sıklık mı (ne sıklıkla?), tutum mu (nasıl?) yoksa yorum mu (konuşanın bakışı)? Sonra cümledeki rakam, oran ya da sonuç ifadesi hangi şiddeti istiyor, ona bak.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Büyük derece:</b> <code class="k">considerably</code> <code class="k">substantially</code> <code class="k">significantly</code> (önemli ölçüde) <code class="k">dramatically</code> <code class="k">sharply</code> (çarpıcı/keskin biçimde) <code class="k">markedly</code> (belirgin biçimde) <code class="k">profoundly</code> (derinden) <code class="k">vastly</code> (fazlasıyla)</li>
      <li><b>Küçük derece:</b> <code class="k">slightly</code> <code class="k">marginally</code> (azıcık) <code class="k">moderately</code> (orta derecede) <code class="k">relatively</code> (görece) <code class="k">somewhat</code> (biraz)</li>
      <li><b>Tamamen / neredeyse:</b> <code class="k">entirely</code> <code class="k">wholly</code> <code class="k">utterly</code> <code class="k">thoroughly</code> (tamamen) · <code class="k">virtually</code> <code class="k">practically</code> <code class="k">nearly</code> <code class="k">almost</code> (neredeyse) · <code class="k">partly</code> <code class="k">partially</code> (kısmen)</li>
      <li><b>Olumsuz anlamlılar (neredeyse hiç):</b> <code class="k">hardly</code> <code class="k">barely</code> <code class="k">scarcely</code> · sıklıkta <code class="k">seldom</code> <code class="k">rarely</code> (nadiren)</li>
      <li><b>Sıklık:</b> <code class="k">invariably</code> (istisnasız) <code class="k">consistently</code> (sürekli) <code class="k">routinely</code> (rutin olarak) <code class="k">frequently</code> <code class="k">typically</code> <code class="k">occasionally</code> <code class="k">sporadically</code> (düzensiz aralıklarla) <code class="k">periodically</code> (belli aralıklarla)</li>
      <li><b>Tutum / biçim:</b> <code class="k">deliberately</code> <code class="k">intentionally</code> (kasten) · <code class="k">accidentally</code> <code class="k">inadvertently</code> (istemeden) · <code class="k">reluctantly</code> (isteksizce) <code class="k">readily</code> (hemen, gönüllüce) <code class="k">meticulously</code> (titizlikle) <code class="k">precisely</code> <code class="k">exactly</code> (tam olarak) · <code class="k">roughly</code> <code class="k">approximately</code> (yaklaşık)</li>
      <li><b>Hız / zaman:</b> <code class="k">rapidly</code> <code class="k">swiftly</code> <code class="k">gradually</code> (yavaş yavaş) <code class="k">steadily</code> (istikrarlı) <code class="k">abruptly</code> (aniden) <code class="k">temporarily</code> <code class="k">permanently</code> <code class="k">eventually</code> (sonunda) <code class="k">initially</code> (başlangıçta) <code class="k">previously</code> (önceden)</li>
      <li><b>Yorum / kesinlik:</b> <code class="k">notoriously</code> (kötü şöhretle) <code class="k">allegedly</code> (iddiaya göre) <code class="k">reportedly</code> (bildirildiğine göre) <code class="k">arguably</code> (tartışmaya açık ama) <code class="k">undoubtedly</code> <code class="k">inevitably</code> (kaçınılmaz olarak) <code class="k">ostensibly</code> (görünüşte) <code class="k">remarkably</code> <code class="k">surprisingly</code></li>
      <li><b>Sınırlama:</b> <code class="k">merely</code> <code class="k">solely</code> <code class="k">exclusively</code> (yalnızca) <code class="k">predominantly</code> <code class="k">largely</code> <code class="k">mainly</code> (büyük ölçüde)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>hardly vs hard / lately vs late:</b> hardly = neredeyse hiç (hard = sıkı); lately = son zamanlarda (late = geç).</li>
      <li><b>virtually vs hardly:</b> “virtually identical” = neredeyse aynı; “hardly identical” = hiç aynı değil.</li>
      <li><b>deliberately vs inadvertently:</b> kanıt/plan varsa kasten; hata/farkında olmama varsa istemeden.</li>
      <li><b>allegedly vs undoubtedly:</b> kanıtlanmamış iddia → allegedly; kesinlik → undoubtedly.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The two dialects are <em>mutually</em> intelligible, so speakers rarely need an interpreter.<br><span class="muted">mutually = karşılıklı olarak.</span></div>
    <div class="ex">The surgeon <em>meticulously</em> recorded every stage of the twelve-hour operation.<br><span class="muted">meticulously = en ince ayrıntısına kadar, titizlikle.</span></div>
    <div class="ex">Sea ice in the strait has been thinning <em>steadily</em>, losing a few centimetres each winter.<br><span class="muted">steadily = düzenli ve istikrarlı biçimde.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Zarfın türünü bul (derece, sıklık, tutum, yorum) ve diğer türleri ele. 2) hardly/barely/scarcely/seldom seçeneklerinin cümleyi olumsuz yaptığını unutma; rakamla karşılaştır.</div>`,

  "voc-noun": `
    <p>İsim sorusunda boşluğu tek kelime olarak değil <b>üçlü bir kalıp</b> olarak oku: önceki fiil + isim + sonraki edat. Bu üçlünün iki parçası zaten verilmiştir; seçeneklerden yalnızca biri bu ikisiyle eşdizim oluşturur.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Fiil + isim eşdizimleri:</b> <code class="k">pose a threat/risk to</code> (tehdit oluşturmak) <code class="k">reach a consensus/verdict/agreement</code> <code class="k">place/put a strain/burden on</code> <code class="k">draw attention to</code> <code class="k">draw a conclusion</code> <code class="k">conduct research/a survey</code> <code class="k">raise awareness/concerns</code> <code class="k">take precautions</code> <code class="k">gain insight into</code> <code class="k">bear responsibility for</code> <code class="k">meet the demand/requirements</code> <code class="k">exert pressure on</code> <code class="k">lay the foundation for</code> <code class="k">shed light on</code> <code class="k">play a role in</code></li>
      <li><b>İsim + edat:</b> <code class="k">impact/effect/influence on</code> <code class="k">increase/decline/rise in</code> <code class="k">demand for</code> <code class="k">access to</code> <code class="k">threat to</code> <code class="k">solution to</code> <code class="k">approach to</code> <code class="k">cause of</code> <code class="k">lack of</code> <code class="k">emphasis on</code> <code class="k">reliance on</code> <code class="k">tendency to</code> <code class="k">insight into</code> <code class="k">link/connection between</code></li>
      <li><b>Eleştiri / inceleme:</b> <code class="k">come under criticism/scrutiny/fire</code> <code class="k">face criticism</code> <code class="k">be subject to scrutiny</code></li>
      <li><b>Kanıt / araştırma:</b> <code class="k">evidence</code> (kanıt) <code class="k">findings</code> (bulgular) <code class="k">hypothesis</code> (hipotez) <code class="k">assumption</code> (varsayım) <code class="k">outcome</code> (sonuç) <code class="k">criterion/criteria</code> (ölçüt) <code class="k">phenomenon</code> (olgu) <code class="k">sample</code> (örneklem)</li>
      <li><b>Sorun / engel:</b> <code class="k">obstacle</code> <code class="k">barrier</code> <code class="k">hurdle</code> (engel) <code class="k">drawback</code> <code class="k">shortcoming</code> (eksiklik) <code class="k">setback</code> (aksilik) <code class="k">dilemma</code> (ikilem) <code class="k">shortage</code> (kıtlık)</li>
      <li><b>Fayda / avantaj:</b> <code class="k">advantage</code> <code class="k">merit</code> (erdem, artı) <code class="k">asset</code> (değerli varlık) <code class="k">incentive</code> (teşvik) <code class="k">breakthrough</code> (çığır açan buluş)</li>
      <li><b>Kişi ve kurum:</b> <code class="k">advocate</code> (savunucu) <code class="k">opponent</code> (karşıt) <code class="k">participant</code> <code class="k">stakeholder</code> (paydaş) <code class="k">authority</code> <code class="k">predecessor</code> (selef) <code class="k">successor</code> (halef)</li>
      <li><b>Miktar / ölçü:</b> <code class="k">proportion</code> (oran) <code class="k">extent</code> (boyut, derece) <code class="k">scope</code> (kapsam) <code class="k">magnitude</code> (büyüklük) <code class="k">bulk</code> (büyük kısım) <code class="k">range</code> (yelpaze)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>effect vs affect:</b> effect isimdir (have an effect on); affect fiildir.</li>
      <li><b>increase in vs increase of:</b> artışın olduğu alan → in (increase in prices); miktar → of (an increase of 5%).</li>
      <li><b>make vs do vs take:</b> make a decision/progress/contribution; do research/damage; take measures/steps/action.</li>
      <li><b>obstacle vs incentive:</b> cümle engel mi teşvik mi anlatıyor? Bağlacı ve olumluluğu kontrol et.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The discovery of the burial site <em>shed new light on</em> trade routes across the ancient Sahara.<br><span class="muted">shed light on = aydınlatmak, açıklığa kavuşturmak.</span></div>
    <div class="ex">High rents remain the main <em>obstacle to</em> young graduates settling in the capital.<br><span class="muted">obstacle to = -e engel.</span></div>
    <div class="ex">Tax relief is offered as an <em>incentive</em> for firms to hire long-term unemployed workers.<br><span class="muted">incentive for/to = teşvik.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluğun önündeki fiili ve arkasındaki edatı işaretle. 2) Seçenekleri “fiil + isim + edat” olarak yüksek sesle oku; alışık olmadığın eşdizimi ele.</div>`,

  "voc-phrasal": `
    <p>Phrasal verb sorusunu <b>resmî tek kelimelik karşılığa</b> çevirerek çöz: boşluğa önce “investigate”, “cancel”, “tolerate” gibi resmî fiili koy, sonra o anlamı taşıyan phrasal verb'ü bul. Seçenekler genellikle aynı fiilin farklı edatlarla kurulmuş hâlleridir (put off / put up with / put forward).</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Yapmak / yürütmek:</b> <code class="k">carry out</code> (conduct) <code class="k">go through</code> (undergo, incelemek) <code class="k">take on</code> (üstlenmek) <code class="k">take up</code> (başlamak; yer kaplamak) <code class="k">set about</code> (işe koyulmak)</li>
      <li><b>Kurmak / başlatmak:</b> <code class="k">set up</code> (establish) <code class="k">bring about</code> (cause) <code class="k">give rise to</code> (yol açmak) <code class="k">set off</code> (tetiklemek; yola çıkmak) <code class="k">come up with</code> (bulmak, öne sürmek) <code class="k">put forward</code> (propose)</li>
      <li><b>Durdurmak / ertelemek:</b> <code class="k">call off</code> (cancel) <code class="k">put off</code> (postpone) <code class="k">hold up</code> (delay) <code class="k">phase out</code> (aşamalı kaldırmak) <code class="k">cut back on</code> (reduce) <code class="k">give up</code> (abandon) <code class="k">wipe out</code> (yok etmek)</li>
      <li><b>Araştırmak / bulmak:</b> <code class="k">look into</code> (investigate) <code class="k">find out</code> (discover) <code class="k">come across</code> (encounter) <code class="k">figure out</code> (anlamak) <code class="k">point out</code> (belirtmek) <code class="k">rule out</code> (olasılık dışı bırakmak)</li>
      <li><b>Açıklamak / oluşturmak:</b> <code class="k">account for</code> (explain; oranını oluşturmak) <code class="k">make up</code> (constitute; uydurmak) <code class="k">consist of</code> <code class="k">stand for</code> (temsil etmek, kısaltma)</li>
      <li><b>Katlanmak / telafi:</b> <code class="k">put up with</code> (tolerate) <code class="k">make up for</code> (compensate) <code class="k">cope with</code> (başa çıkmak) <code class="k">deal with</code> (ele almak) <code class="k">get over</code> (atlatmak)</li>
      <li><b>Çökmek / azalmak:</b> <code class="k">break down</code> (collapse; ayrıştırmak) <code class="k">fall apart</code> (dağılmak) <code class="k">die out</code> (soyu tükenmek) <code class="k">run out of</code> (tükenmek) <code class="k">wear off</code> (etkisi geçmek) <code class="k">fall behind</code> (geride kalmak)</li>
      <li><b>Destek / bağlılık:</b> <code class="k">back up</code> (support) <code class="k">stick to</code> (-e bağlı kalmak) <code class="k">carry on / keep up</code> (continue) <code class="k">rely on / count on</code> (güvenmek) <code class="k">turn down</code> (reject) <code class="k">turn out</code> (ortaya çıkmak) <code class="k">bring up</code> (gündeme getirmek; yetiştirmek) <code class="k">take over</code> (devralmak)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>put off vs put up with vs put forward:</b> ertelemek / katlanmak / önermek.</li>
      <li><b>make up vs make up for:</b> make up = oluşturmak/uydurmak; make up for = telafi etmek.</li>
      <li><b>turn down vs turn out:</b> turn down = reddetmek; turn out = (sonunda) … olduğu anlaşılmak.</li>
      <li><b>break down vs break out:</b> break down = bozulmak, çökmek; break out = (savaş, salgın, yangın) patlak vermek.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Investigators have not yet <em>ruled out</em> sabotage as the cause of the power failure.<br><span class="muted">rule out = olasılık dışı bırakmak.</span></div>
    <div class="ex">The ministry plans to <em>phase out</em> single-use packaging in public canteens over five years.<br><span class="muted">phase out = aşamalı olarak kaldırmak.</span></div>
    <div class="ex">Once the anaesthetic <em>wore off</em>, the patient was able to describe the pain more clearly.<br><span class="muted">wear off = (ilaç, etki) geçmek.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluğa resmî tek kelimelik fiili yaz. 2) Seçeneklerde aynı fiil birkaç kez varsa yalnızca edatı karşılaştır ve resmî karşılığa uyanı seç.</div>`
});
