/* Yanlışlarına özel anlatımlar: cloze, sc-logic, sc-structure, tr-en-tr, tr-tr-en, rd-main, rd-detail, rd-inference, rd-dialogue, rd-restatement, rd-completion, rd-irrelevant */
Object.assign(OZEL, {
  "cloze": `
    <p>Cloze'da boşluğu bir "köprü" gibi düşün: sol yakası önceki cümle, sağ yakası boşluktan sonraki kelimeler. Şık, iki yakaya da aynı anda oturmalı. Önce şıkların <b>türüne</b> bak (bağlaç / edat / fiil / ilgi zamiri / kelime); hangi kurala bakacağını bu belirler.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Zıtlık (bağlaç + cümle):</b> <code class="k">although</code> <code class="k">even though</code> <code class="k">though</code> <code class="k">whereas</code> <code class="k">while</code> <code class="k">even if</code> — <b>(edat + isim/V-ing):</b> <code class="k">despite</code> <code class="k">in spite of</code> <code class="k">notwithstanding</code> — <b>(cümle başı, noktalı virgülle):</b> <code class="k">however</code> <code class="k">nevertheless</code> <code class="k">nonetheless</code> <code class="k">yet</code> <code class="k">still</code> <code class="k">on the other hand</code> <code class="k">in contrast</code> <code class="k">conversely</code> <code class="k">on the contrary</code> <code class="k">rather</code> <code class="k">instead</code></li>
      <li><b>Sebep:</b> <code class="k">because</code> <code class="k">since</code> <code class="k">as</code> <code class="k">now that</code> <code class="k">given that</code> <code class="k">seeing that</code> / edat: <code class="k">because of</code> <code class="k">due to</code> <code class="k">owing to</code> <code class="k">on account of</code> <code class="k">thanks to</code> <code class="k">as a result of</code></li>
      <li><b>Sonuç:</b> <code class="k">therefore</code> <code class="k">thus</code> <code class="k">hence</code> <code class="k">consequently</code> <code class="k">as a result</code> <code class="k">accordingly</code> <code class="k">so</code> <code class="k">so … that</code> <code class="k">such … that</code></li>
      <li><b>Amaç:</b> <code class="k">so that</code> <code class="k">in order to</code> <code class="k">so as to</code> <code class="k">in order that</code> <code class="k">for fear that</code> <code class="k">lest</code></li>
      <li><b>Koşul:</b> <code class="k">if</code> <code class="k">unless</code> <code class="k">provided (that)</code> <code class="k">providing</code> <code class="k">as long as</code> <code class="k">on condition that</code> <code class="k">in case</code> <code class="k">otherwise</code> <code class="k">only if</code> <code class="k">even if</code> <code class="k">whether or not</code> <code class="k">in the event of</code></li>
      <li><b>Ekleme / örnek:</b> <code class="k">moreover</code> <code class="k">furthermore</code> <code class="k">in addition</code> <code class="k">besides</code> <code class="k">likewise</code> <code class="k">similarly</code> <code class="k">as well as</code> <code class="k">not only … but also</code> <code class="k">for example</code> <code class="k">for instance</code> <code class="k">such as</code> <code class="k">namely</code> <code class="k">in particular</code></li>
      <li><b>Zaman:</b> <code class="k">when</code> <code class="k">as soon as</code> <code class="k">once</code> <code class="k">until</code> <code class="k">by the time</code> <code class="k">since</code> <code class="k">before</code> <code class="k">after</code> <code class="k">while</code> <code class="k">over time</code> <code class="k">so far</code> <code class="k">recently</code> <code class="k">in recent years</code> <code class="k">for decades</code> <code class="k">in the past</code> <code class="k">originally</code></li>
      <li><b>İlgi zamirleri:</b> <code class="k">which</code> <code class="k">who</code> <code class="k">whom</code> <code class="k">whose</code> <code class="k">where</code> <code class="k">when</code> <code class="k">in which</code> <code class="k">by which</code> <code class="k">through which</code> <code class="k">none of which</code> <code class="k">most of whom</code></li>
      <li><b>Kelime sorusunda ton sinyalleri:</b> olumsuz → <code class="k">threat</code> <code class="k">warn</code> <code class="k">decline</code> <code class="k">fail</code> <code class="k">risk</code>; olumlu → <code class="k">benefit</code> <code class="k">improve</code> <code class="k">enable</code> <code class="k">promising</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>although vs despite:</b> arkasında özne + yüklem varsa although, isim/V-ing varsa despite.</li>
      <li><b>however vs whereas:</b> however noktadan/noktalı virgülden sonra gelir ve virgül alır; whereas iki cümleyi tek cümlede bağlar.</li>
      <li><b>which vs where:</b> arkadaki cümlede özne ya da nesne eksikse which; cümle tamsa where / in which.</li>
      <li><b>due to vs because:</b> due to + isim; because + cümle.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The mine's main shaft flooded in March; <em>consequently</em>, production was halted for the rest of the year.<br><span class="muted">Su baskını → üretimin durması: sebep-sonuç, "however" olamaz.</span></div>
    <div class="ex">The lake, <em>in which</em> several rare fish species live, is now protected by law.<br><span class="muted">"several rare fish species live" tam cümle; bu yüzden "which" değil "in which".</span></div>
    <div class="ex">Volunteers checked the nests every morning <em>so that</em> no hatchling would go unrecorded.<br><span class="muted">Amaç ilişkisi: "so that + would/could".</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Şıklar hangi türde? 2) Boşluğun arkasına bak: cümle mi, isim mi, virgül mü geliyor; önce yapıyla ele, sonra anlama bak.</div>`,

  "sc-logic": `
    <p>Soruda bir cümle yarım bırakılmış; önce verilen yarının <b>tek kelimelik bir etiketini</b> çıkar (ör. "olumlu gelişme", "sorun"), sonra bağlacın o etiketten ne beklediğini söyle: aynı yön mü, ters yön mü? Şıkları tek tek değil, bu beklentiyle tara.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Ters yön (beklenmeyen sonuç):</b> <code class="k">although</code> <code class="k">even though</code> <code class="k">though</code> <code class="k">despite</code> <code class="k">in spite of</code> <code class="k">even if</code> <code class="k">however much</code> <code class="k">no matter how</code> <code class="k">much as</code> <code class="k">while</code> <code class="k">yet</code> <code class="k">still</code></li>
      <li><b>Karşılaştırma (iki grup / iki durum):</b> <code class="k">whereas</code> <code class="k">while</code> <code class="k">unlike</code> <code class="k">in contrast to</code> <code class="k">compared with</code> <code class="k">rather than</code> <code class="k">just as … so</code></li>
      <li><b>Aynı yön (sebep):</b> <code class="k">because</code> <code class="k">since</code> <code class="k">as</code> <code class="k">now that</code> <code class="k">given that</code> <code class="k">in that</code> <code class="k">inasmuch as</code></li>
      <li><b>Aynı yön (sonuç):</b> <code class="k">so … that</code> <code class="k">such … that</code> <code class="k">therefore</code> <code class="k">consequently</code> <code class="k">hence</code> <code class="k">thus</code> <code class="k">as a result</code></li>
      <li><b>Amaç:</b> <code class="k">so that</code> <code class="k">in order that</code> <code class="k">lest</code> <code class="k">for fear that</code></li>
      <li><b>Koşul:</b> <code class="k">unless</code> (= if not) <code class="k">provided that</code> <code class="k">as long as</code> <code class="k">only if</code> <code class="k">in case</code> <code class="k">otherwise</code> <code class="k">or else</code></li>
      <li><b>Zaman-mantık:</b> <code class="k">until</code> <code class="k">only when</code> <code class="k">not until</code> <code class="k">once</code> <code class="k">as soon as</code> <code class="k">the moment</code></li>
      <li><b>Derece / oran:</b> <code class="k">the more … the more</code> <code class="k">as … as</code> <code class="k">to the extent that</code> <code class="k">just as</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>since = sebep vs since = -den beri:</b> since + tarih/past ve ana cümlede have V3 → zaman; aksi hâlde sebep.</li>
      <li><b>while = iken vs while = oysa:</b> iki farklı özne karşılaştırılıyorsa "oysa" (whereas) anlamındadır.</li>
      <li><b>unless vs if:</b> unless = "-mezse"; şıkta ayrıca "not" varsa çift olumsuzluk olur, dikkat.</li>
      <li><b>Çift bağlaç tuzağı:</b> although'lu soruda şıkta "therefore / as a result" varsa neredeyse her zaman yanlıştır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Much as</em> the committee admired the proposal, <em>it rejected the plan on financial grounds</em>.<br><span class="muted">"Ne kadar beğense de" → beklenmeyen sonuç: reddetti.</span></div>
    <div class="ex">The bridge was closed to heavy vehicles <em>lest</em> <em>the weakened supports should collapse</em>.<br><span class="muted">"lest" = -mesin diye; arkası olumsuz bir ihtimal.</span></div>
    <div class="ex"><em>Unlike</em> desert reptiles, <em>which rely on the sun for warmth</em>, birds produce their own body heat.<br><span class="muted">İki grup karşılaştırılıyor; ikinci yarı zıt özellik vermeli.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Verilen yarıya etiket koy (+ / −). 2) Bağlaç "ters yön" mü "aynı yön" mü istiyor, söyle; ona uymayan tüm şıkları okumadan ele.</div>`,

  "sc-structure": `
    <p>Buradaki sorular bir "eşleştirme tablosu" gibidir: verilen yarıdaki <b>zaman sinyali</b> şıktaki yüklemi zorunlu kılar. Şıkların sadece yüklemlerine bak; anlam ancak iki şık kalınca devreye girer.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Past perfect isteyenler:</b> <code class="k">by the time + past</code> <code class="k">before + past</code> <code class="k">until + past</code> <code class="k">when + past</code> (öncelik) <code class="k">already … when</code> <code class="k">hardly … when</code> <code class="k">no sooner … than</code> <code class="k">scarcely … when</code> <code class="k">by 1990 / by then</code></li>
      <li><b>Future perfect isteyenler:</b> <code class="k">by the time + present</code> <code class="k">by the end of next year</code> <code class="k">by 2040</code> <code class="k">within the next decade</code></li>
      <li><b>Present perfect isteyenler:</b> <code class="k">since + past</code> <code class="k">for the last/past … years</code> <code class="k">over the past decade</code> <code class="k">so far</code> <code class="k">up to now</code> <code class="k">recently</code> <code class="k">lately</code> <code class="k">in recent years</code> <code class="k">yet</code> <code class="k">ever since</code></li>
      <li><b>Past simple isteyenler:</b> <code class="k">ago</code> <code class="k">in 1850</code> <code class="k">last century</code> <code class="k">in ancient times</code> <code class="k">once</code> (bir zamanlar) <code class="k">during the war</code></li>
      <li><b>Koşul kalıpları:</b> <code class="k">If + present → will/can/may</code> <code class="k">If + past → would/could/might</code> <code class="k">If + had V3 → would have V3</code> <code class="k">Were + özne + to V</code> <code class="k">Should + özne + V</code> <code class="k">Had + özne + V3</code> <code class="k">But for / Without + isim</code> <code class="k">Had it not been for</code> <code class="k">Otherwise</code> (gizli koşul)</li>
      <li><b>Wish / as if:</b> <code class="k">wish + past</code> <code class="k">wish + had V3</code> <code class="k">as if + past / had V3</code> <code class="k">it's (high) time + past</code> <code class="k">would rather + past</code></li>
      <li><b>Yapı kuralları:</b> virgüllü ilgi cümlesi → <code class="k">which / who / whose</code> (that olmaz); <code class="k">so + sıfat + that</code>; <code class="k">such + a + sıfat + isim + that</code>; <code class="k">the + -er …, the + -er …</code>; <code class="k">not only + devrik</code>; <code class="k">only after/only when + devrik</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>by the time + past vs + present:</b> past → had V3; present → will have V3.</li>
      <li><b>since + past vs ago:</b> since → have V3; ago → past simple. Aynı cümlede birbirinin yerine geçmez.</li>
      <li><b>Had + V3 (devrik koşul) vs had V3 (past perfect):</b> cümle başında ve özneden önceyse koşuldur, ana cümle would have V3 ister.</li>
      <li><b>Ana cümlede yüklem eksik mi?</b> Şıkta sadece "which …" ya da "V-ing …" varsa ve cümlede başka yüklem yoksa yanlıştır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>No sooner had</em> the new dam been completed <em>than</em> engineers discovered cracks in its base.<br><span class="muted">"No sooner had … than + past": -er -mez.</span></div>
    <div class="ex"><em>By the time</em> the survey ends next spring, the team <em>will have interviewed</em> over two thousand households.<br><span class="muted">by the time + present → future perfect.</span></div>
    <div class="ex"><em>Were</em> the tax <em>to be</em> abolished, local councils <em>would lose</em> a major source of income.<br><span class="muted">"Were + özne + to V" = If the tax were abolished → would.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Verilen yarıda zaman sinyalini daire içine al ve hangi zamanı istediğini yaz. 2) Şıklardan yalnızca yüklemi uyanları bırak; kalanlarda anlama bak.</div>`,

  "tr-en-tr": `
    <p>İngilizce cümleyi okurken dört şeyi "etiketle": <b>kim, ne yapıyor, hangi kesinlikte, hangi bağla</b>. Sonra Türkçe şıkları baştan değil <b>sondan</b> oku; Türkçede yüklem sonda olduğu için yanlış şıkların çoğu son iki kelimede ele verir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Zıtlık:</b> <code class="k">although / even though</code> = -e rağmen, -se de; <code class="k">despite / in spite of</code> = -e rağmen; <code class="k">whereas / while</code> = oysa, -ken; <code class="k">even if</code> = -se bile</li>
      <li><b>Sebep-sonuç:</b> <code class="k">because / since / as</code> = -dığı için; <code class="k">due to / owing to</code> = nedeniyle; <code class="k">thanks to</code> = sayesinde; <code class="k">so that</code> = -sin diye; <code class="k">so … that</code> = o kadar … ki; <code class="k">lead to / result in</code> = yol açmak</li>
      <li><b>Koşul / zaman:</b> <code class="k">unless</code> = -mezse; <code class="k">as long as</code> = -dığı sürece; <code class="k">once</code> = -ince; <code class="k">until</code> = -e kadar; <code class="k">as</code> + artış fiili = -dıkça; <code class="k">the more … the more</code> = ne kadar … o kadar</li>
      <li><b>Kesinlik / tahmin:</b> <code class="k">may / might / could</code> = -ebilir; <code class="k">must</code> = -meli / -miş olmalı; <code class="k">is likely to</code> = muhtemelen; <code class="k">is thought / believed / estimated</code> = düşünülmekte / tahmin edilmektedir; <code class="k">appear / seem to</code> = gibi görünmek; <code class="k">tend to</code> = eğiliminde</li>
      <li><b>Miktar / derece:</b> <code class="k">most</code> = çoğu; <code class="k">almost all</code> = neredeyse tümü; <code class="k">few</code> = pek az (olumsuz!); <code class="k">a few</code> = birkaç; <code class="k">little</code> = pek az; <code class="k">nearly / almost</code> = neredeyse; <code class="k">more than</code> = -den fazla; <code class="k">up to</code> = -e varan; <code class="k">at least</code> = en az; <code class="k">largely / mainly</code> = büyük ölçüde; <code class="k">partly</code> = kısmen</li>
      <li><b>Olumsuzluk / süreklilik:</b> <code class="k">no longer</code> = artık … değil; <code class="k">still</code> = hâlâ; <code class="k">yet to / have yet to</code> = henüz … -memiş; <code class="k">hardly / barely</code> = neredeyse hiç; <code class="k">far from</code> = … olmaktan uzak; <code class="k">not necessarily</code> = illa ki değil</li>
      <li><b>Kalıplar:</b> <code class="k">not only … but also</code> = yalnızca … değil, aynı zamanda; <code class="k">either … or</code> = ya … ya da; <code class="k">neither … nor</code> = ne … ne de; <code class="k">whether … or</code> = … mı yoksa … mı; <code class="k">rather than</code> = … yerine; <code class="k">as well as</code> = … yanı sıra; <code class="k">it is … that</code> = asıl …</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>few vs a few:</b> "few experts" = çok az uzman (olumsuz vurgu); "a few experts" = birkaç uzman.</li>
      <li><b>no longer vs not yet:</b> artık değil (önceden vardı) ≠ henüz değil (hiç olmadı).</li>
      <li><b>thanks to vs due to:</b> sayesinde (olumlu) ≠ nedeniyle (nötr/olumsuz); Türkçe şıkta bu ton farkı sık değiştirilir.</li>
      <li><b>is estimated vs is known:</b> tahmin edilmektedir ≠ bilinmektedir.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Far from</em> shortening queues, the online booking system <em>appears to have</em> made waiting times longer.<br><span class="muted">Çevrim içi randevu sistemi kuyrukları kısaltmak şöyle dursun, bekleme sürelerini uzatmış görünüyor.</span></div>
    <div class="ex"><em>Few</em> of the medieval sailors <em>had</em> any means of measuring their exact position at sea.<br><span class="muted">Orta Çağ denizcilerinin pek azının denizde tam konumlarını ölçecek bir aracı vardı.</span></div>
    <div class="ex">The painting is <em>thought to have been</em> completed <em>shortly before</em> the artist's death.<br><span class="muted">Tablonun, sanatçının ölümünden kısa süre önce tamamlandığı düşünülmektedir.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Türkçe şıkların son kelimelerini (yüklem + kesinlik eki) karşılaştır, uymayanı ele. 2) Kalanlarda miktar kelimesi ve bağlacı tek tek eşle.</div>`,

  "tr-tr-en": `
    <p>Türkçe cümleyi önce <b>eklerine</b> ayır: her ek bir İngilizce yapıya karşılık gelir (-dıkça, -mesine rağmen, -ebilir, -miş olmalı). Doğru İngilizce şık, bu eklerin <b>hepsini</b> karşılayan ve hiçbir şey eklemeyen şıktır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Zıtlık ekleri:</b> -mesine rağmen / -diği hâlde → <code class="k">although</code> <code class="k">despite</code>; -se de / -se bile → <code class="k">even if</code> <code class="k">even though</code>; oysa / -ken → <code class="k">whereas</code> <code class="k">while</code>; yine de → <code class="k">nevertheless</code> <code class="k">still</code></li>
      <li><b>Sebep-amaç ekleri:</b> -diği için → <code class="k">because</code> <code class="k">since</code>; nedeniyle / yüzünden → <code class="k">due to</code> <code class="k">because of</code>; sayesinde → <code class="k">thanks to</code>; -mek için → <code class="k">in order to</code> <code class="k">so as to</code>; -sin diye → <code class="k">so that</code>; -e yol açmak → <code class="k">lead to</code> <code class="k">cause</code> <code class="k">result in</code></li>
      <li><b>Zaman / oran ekleri:</b> -dıkça → <code class="k">as</code> <code class="k">the more … the more</code>; -ir -mez → <code class="k">as soon as</code> <code class="k">no sooner … than</code>; -ene kadar → <code class="k">until</code> <code class="k">by the time</code>; -diğinden beri → <code class="k">since</code>; giderek → <code class="k">increasingly</code> <code class="k">gradually</code></li>
      <li><b>Kip ekleri:</b> -ebilir → <code class="k">may</code> <code class="k">can</code> <code class="k">could</code>; -meli → <code class="k">should</code> <code class="k">must</code>; -miş olmalı → <code class="k">must have V3</code>; -miş olabilir → <code class="k">may/might have V3</code>; -mek zorunda kalmak → <code class="k">be forced to</code> <code class="k">have to</code>; muhtemelen → <code class="k">likely</code> <code class="k">probably</code></li>
      <li><b>Kaynak / görüş:</b> -e göre → <code class="k">according to</code>; -e inanılıyor → <code class="k">it is believed that</code>; iddia ediliyor → <code class="k">it is claimed</code>; vurgulamak → <code class="k">emphasise</code> <code class="k">stress</code> <code class="k">highlight</code>; öne sürmek → <code class="k">suggest</code> <code class="k">argue</code> <code class="k">put forward</code></li>
      <li><b>Miktar:</b> çoğu → <code class="k">most</code>; bazı → <code class="k">some</code>; pek az → <code class="k">few / little</code>; neredeyse hiç → <code class="k">hardly any</code>; yaklaşık → <code class="k">about / roughly / approximately</code>; -den fazla → <code class="k">more than / over</code>; büyük ölçüde → <code class="k">largely / to a great extent</code></li>
      <li><b>Kalıplar:</b> yalnızca … değil, aynı zamanda → <code class="k">not only … but also</code>; hem … hem de → <code class="k">both … and</code>; ne … ne de → <code class="k">neither … nor</code>; … mı yoksa … mı → <code class="k">whether … or</code>; artık … değil → <code class="k">no longer</code>; henüz → <code class="k">yet / have yet to</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>-dıkça vs -diği için:</b> as/the more (eşzamanlı artış) ≠ because (kesin sebep).</li>
      <li><b>-miş olmalı vs -meli:</b> must have V3 (geçmişe dair çıkarım) ≠ should/must V (zorunluluk).</li>
      <li><b>Özne kayması:</b> "X'e göre Y bunu yaptı" cümlesinde X ile Y'nin yerini değiştiren İngilizce şık en sık tuzaktır.</li>
      <li><b>Pasif / aktif:</b> "-ilmektedir" pasiftir; aktif yapılı şıkta özne kimdir, kontrol et.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Deniz seviyesi yükseldikçe kıyıdaki tarım arazileri tuzlanmaktadır.<br>→ <em>As sea levels rise</em>, farmland along the coast <em>is becoming</em> salty.<br><span class="muted">-dıkça = as; "-mektedir" süreç bildirdiği için present continuous da uygundur.</span></div>
    <div class="ex">Kayıp kentin bir depremle yıkılmış olabileceği ileri sürülmektedir.<br>→ <em>It has been suggested</em> that the lost city <em>may have been destroyed</em> by an earthquake.<br><span class="muted">-miş olabilir = may have been V3; kesin "was destroyed" yanlış olur.</span></div>
    <div class="ex">Müze, bağışlar sayesinde ayakta kalmayı başarmıştır.<br>→ The museum has managed to survive <em>thanks to</em> donations.<br><span class="muted">"sayesinde" olumlu; "due to" tonu nötrdür ama kabul edilir, "despite" anlamı ters çevirir.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Türkçedeki son yüklemi ve kip ekini İngilizceye çevir, uymayan şıkları ele. 2) Kalanlarda bağlaç ekini ve miktar kelimesini birebir eşle.</div>`,

  "rd-main": `
    <p>Ana fikir şıkkını seçerken şu testi uygula: "Bu şık metnin <b>başlığı</b> olabilir mi?" Başlık, metnin her paragrafını kapsamalı; tek bir örneği ya da metnin hiç söylemediği bir sonucu anlatan şık başlık olamaz.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Soru kökleri:</b> <code class="k">The passage is mainly concerned with</code> <code class="k">The passage mainly deals with / focuses on</code> <code class="k">The main idea of the passage is</code> <code class="k">The primary purpose of the author is to</code> <code class="k">The passage is primarily about</code> <code class="k">Which of the following best summarises</code> <code class="k">The best title for the passage would be</code> <code class="k">The author wrote the passage in order to</code></li>
      <li><b>Amaç fiilleri (şıklarda):</b> <code class="k">explain</code> <code class="k">describe</code> <code class="k">argue</code> <code class="k">compare</code> <code class="k">criticise</code> <code class="k">warn</code> <code class="k">challenge a view</code> <code class="k">propose a solution</code> <code class="k">trace the development of</code> <code class="k">point out</code> <code class="k">illustrate</code></li>
      <li><b>Görüş değişimi / tez sinyalleri:</b> <code class="k">however</code> <code class="k">but</code> <code class="k">yet</code> <code class="k">recent research suggests</code> <code class="k">contrary to popular belief</code> <code class="k">it is now clear that</code> <code class="k">in fact</code> <code class="k">actually</code> <code class="k">what is often overlooked</code> <code class="k">the real question is</code></li>
      <li><b>Eski görüş sinyalleri:</b> <code class="k">traditionally</code> <code class="k">for decades</code> <code class="k">for a long time</code> <code class="k">it was once believed</code> <code class="k">conventional wisdom</code> <code class="k">until recently</code></li>
      <li><b>Sonuç / özet sinyalleri:</b> <code class="k">in short</code> <code class="k">in conclusion</code> <code class="k">overall</code> <code class="k">all in all</code> <code class="k">ultimately</code> <code class="k">thus</code> <code class="k">therefore</code> <code class="k">clearly</code></li>
      <li><b>Örnek sinyalleri (ana fikir değil!):</b> <code class="k">for example</code> <code class="k">for instance</code> <code class="k">such as</code> <code class="k">one case is</code> <code class="k">to illustrate</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Konu vs ana fikir:</b> "robots" konu; "robots are changing jobs faster than expected" ana fikir. Doğru şık bir iddia/yön içerir.</li>
      <li><b>Dar şık vs kapsayıcı şık:</b> "for example" sonrasında anlatılan olay tek başına ana fikir değildir.</li>
      <li><b>Aşırı şık:</b> "should be replaced", "the only", "prove" gibi metnin ötesine geçen yargılar içeren şıklar elenir.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Until recently</em>, bats were seen mainly as carriers of disease. <em>It is now clear, however,</em> that they pollinate crops and control insects.<br><span class="muted">Ana fikir: yarasalara bakışın olumsuzdan faydalıya dönmesi.</span></div>
    <div class="ex">Some towns, <em>for instance</em>, painted their bus stops bright colours.<br><span class="muted">"for instance" ile gelen bu cümle bir örnektir; ana fikir şıkkı olamaz.</span></div>
    <div class="ex"><em>Ultimately</em>, the success of any recycling scheme depends less on technology than on public habits.<br><span class="muted">Son cümledeki "ultimately" yazarın vardığı sonucu verir: ana fikre çok yakındır.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) İlk + son cümleden bir başlık yaz. 2) Şıkları "dar / aşırı / doğru" diye işaretle; yalnızca başlığa uyanı seç.</div>`,

  "rd-detail": `
    <p>Detay sorusu bir "bul-karşılaştır" işidir: soru kökünden bir <b>çapa kelime</b> seç, metinde onu (ya da eş anlamlısını) bul, o cümlenin anlamını şıkla karşılaştır. Kafandan çıkarım yapma; cevap metinde yazılıdır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Soru kökleri:</b> <code class="k">According to the passage,</code> <code class="k">It is stated / pointed out / mentioned in the passage that</code> <code class="k">The passage states that</code> <code class="k">As stated in the passage,</code> <code class="k">One can learn from the passage that</code> <code class="k">Which of the following is true according to the passage?</code> <code class="k">… is NOT mentioned</code> <code class="k">The word "…" refers to</code> <code class="k">One reason why … is that</code></li>
      <li><b>Görüş sahibi sinyalleri (kimin görüşü?):</b> <code class="k">critics argue</code> <code class="k">some claim</code> <code class="k">it was once thought</code> <code class="k">many assume</code> <code class="k">sceptics say</code> <code class="k">proponents believe</code> — ardından gelen <code class="k">but</code> <code class="k">however</code> <code class="k">in reality</code> <code class="k">in fact</code> yazarın görüşünü getirir</li>
      <li><b>Sebep bilgisini taşıyanlar:</b> <code class="k">because</code> <code class="k">since</code> <code class="k">due to</code> <code class="k">as a result of</code> <code class="k">stem from</code> <code class="k">be attributed to</code> <code class="k">account for</code> <code class="k">give rise to</code> <code class="k">lie behind</code></li>
      <li><b>Kısıt / derece:</b> <code class="k">only</code> <code class="k">mainly</code> <code class="k">partly</code> <code class="k">largely</code> <code class="k">some</code> <code class="k">most</code> <code class="k">rarely</code> <code class="k">seldom</code> <code class="k">not always</code> <code class="k">under certain conditions</code></li>
      <li><b>Sık kullanılan eşleşmeler (metin → şık):</b> <code class="k">rise → increase</code> <code class="k">decline → fall/drop</code> <code class="k">tackle → deal with</code> <code class="k">reveal → show</code> <code class="k">crucial → essential</code> <code class="k">obstacle → barrier</code> <code class="k">be linked to → be associated with</code> <code class="k">diminish → reduce</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Metindeki kelime vs metindeki anlam:</b> aynı kelimeleri içeren şık çoğu zaman tuzaktır; doğru şık eş anlamlı kelimelerle yazılır.</li>
      <li><b>Aktarılan görüş vs yazarın görüşü:</b> "critics argue" cümlesi yazarın düşüncesi değildir.</li>
      <li><b>partly vs mainly:</b> metin "kısmen" diyorsa "esas olarak" diyen şık yanlıştır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The decline in sparrow numbers <em>has been attributed partly to</em> the loss of nesting sites in modern buildings.<br><span class="muted">Doğru şık: "one reason is …", yanlış şık: "is caused mainly by …".</span></div>
    <div class="ex"><em>Many assume</em> that deserts are lifeless; <em>in reality</em>, they host thousands of specialised species.<br><span class="muted">"in reality" sonrası metnin savunduğu bilgidir.</span></div>
    <div class="ex">The new filter <em>diminishes</em> noise only <em>under certain conditions</em>.<br><span class="muted">Şık "always reduces noise" derse yanlış; kısıt kaybolmuş.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Soru kökünden çapa kelimeyi seç ve metinde yerini bul. 2) O cümleyle şıkkı karşılaştırırken derece kelimesini (only, partly, most) mutlaka eşle.</div>`,

  "rd-inference": `
    <p>Çıkarım şıkkı için "Metin doğruysa bu şık <b>da mutlaka</b> doğru mu?" sorusunu sor. Cevap "belki" ise şık yanlıştır. Tutum sorularında ise yazarın kelime seçimine bak: aynı olguyu "remarkable" ya da "alarming" diye anlatmak tutumu ele verir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Soru kökleri:</b> <code class="k">It can be inferred / understood / concluded from the passage that</code> <code class="k">The passage implies / suggests that</code> <code class="k">The author would most likely agree that</code> <code class="k">The author's attitude/tone towards … is</code> <code class="k">The author's view on … can be described as</code> <code class="k">It is clear from the passage that</code> <code class="k">… most probably</code></li>
      <li><b>Temkin (hedging) — kesinliğe çevrilmemeli:</b> <code class="k">may</code> <code class="k">might</code> <code class="k">could</code> <code class="k">possibly</code> <code class="k">perhaps</code> <code class="k">likely</code> <code class="k">tend to</code> <code class="k">appear / seem</code> <code class="k">suggest</code> <code class="k">indicate</code> <code class="k">to some extent</code> <code class="k">it is thought that</code> <code class="k">ask whether</code> <code class="k">remain unclear</code></li>
      <li><b>Kesinlik sinyalleri:</b> <code class="k">clearly</code> <code class="k">undoubtedly</code> <code class="k">certainly</code> <code class="k">prove</code> <code class="k">demonstrate</code> <code class="k">confirm</code> <code class="k">establish</code> <code class="k">there is no doubt</code></li>
      <li><b>Olumlu tutum kelimeleri:</b> <code class="k">remarkable</code> <code class="k">impressive</code> <code class="k">promising</code> <code class="k">valuable</code> <code class="k">considerable</code> <code class="k">welcome</code> <code class="k">fortunately</code> <code class="k">perhaps more importantly</code></li>
      <li><b>Olumsuz tutum kelimeleri:</b> <code class="k">alarming</code> <code class="k">worrying</code> <code class="k">misguided</code> <code class="k">flawed</code> <code class="k">overstated</code> <code class="k">questionable</code> <code class="k">regrettably</code> <code class="k">unfortunately</code> <code class="k">so-called</code></li>
      <li><b>Tutum şıklarında çıkan sıfatlar:</b> <code class="k">supportive</code> <code class="k">approving</code> <code class="k">enthusiastic</code> <code class="k">optimistic</code> <code class="k">critical</code> <code class="k">sceptical</code> <code class="k">disapproving</code> <code class="k">pessimistic</code> <code class="k">objective / neutral</code> <code class="k">indifferent</code> <code class="k">cautious</code> <code class="k">ambivalent</code> <code class="k">hostile</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Mümkün vs zorunlu:</b> metinden "olabilir" diye çıkan şık yanlış; "başka türlü olamaz" diye çıkan doğru.</li>
      <li><b>objective vs indifferent:</b> objective = taraf tutmadan anlatır; indifferent = umursamaz (YDS'de nadiren doğru).</li>
      <li><b>cautious vs sceptical:</b> cautious = olumlu ama temkinli; sceptical = şüpheci, inanmıyor.</li>
      <li><b>Aşırı çıkarım:</b> "some" → "all", "may" → "will", "ask whether" → "have started" dönüşümleri tuzaktır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The drug <em>appears to</em> slow memory loss in mice, <em>but</em> human trials <em>have yet to</em> begin.<br><span class="muted">Çıkarım: insanlardaki etkisi henüz bilinmiyor. "It cures memory loss" aşırı çıkarımdır.</span></div>
    <div class="ex">The <em>so-called</em> miracle diet has, <em>regrettably</em>, attracted millions of followers.<br><span class="muted">"so-called" ve "regrettably" → yazarın tutumu eleştirel (critical / sceptical).</span></div>
    <div class="ex">Wind farms are <em>promising</em>, <em>although</em> storage problems <em>remain unclear</em>.<br><span class="muted">Olumlu ama çekinceli: "cautiously optimistic".</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Her şık için "metin bunu zorunlu kılıyor mu?" diye sor. 2) Tutumda yazarın kullandığı sıfat/zarfları topla ve olumlu/olumsuz/nötr diye karar ver.</div>`,

  "rd-dialogue": `
    <p>Diyalogda boşluğu doldurmak yerine önce <b>boşluktan sonraki satırın ilk iki kelimesini</b> oku ve "bu hangi sözün cevabı olabilir?" diye sor. Yes/No ile başlıyorsa evet-hayır sorusu, bilgi veriyorsa Wh- sorusu, tepki veriyorsa bir yorum/itiraf gelir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Evet-hayır sorusu isteyen cevaplar:</b> <code class="k">Yes, …</code> <code class="k">No, …</code> <code class="k">Not at all</code> <code class="k">Not really</code> <code class="k">Not necessarily</code> <code class="k">Certainly</code> <code class="k">Absolutely</code> <code class="k">I'm afraid so / not</code> <code class="k">It can / it does / they did</code> <code class="k">Of course</code></li>
      <li><b>Bilgi sorusu (Wh-) isteyen cevaplar:</b> <code class="k">Because …</code> (why) <code class="k">By …ing</code> (how) <code class="k">Mainly …</code> <code class="k">About / Around + sayı</code> (how many/much) <code class="k">In + yer/yıl</code> (where/when) <code class="k">It depends on …</code></li>
      <li><b>Yorum / açıklamaya tepki:</b> <code class="k">That explains it</code> <code class="k">That could explain it</code> <code class="k">That makes sense</code> <code class="k">I see</code> <code class="k">That's surprising</code> <code class="k">Really? I thought …</code> <code class="k">Exactly</code> <code class="k">I agree</code> <code class="k">I'm not so sure</code></li>
      <li><b>Düzeltme / itiraz sinyalleri:</b> <code class="k">Actually, …</code> <code class="k">In fact, …</code> <code class="k">On the contrary</code> <code class="k">Not quite</code> <code class="k">Well, …</code> <code class="k">That's a common misconception</code></li>
      <li><b>Özetleme / son satır:</b> <code class="k">So you mean …</code> <code class="k">So in your view …</code> <code class="k">In other words …</code> <code class="k">Then I should …</code></li>
      <li><b>Referans kelimeleri:</b> <code class="k">it</code> <code class="k">that</code> <code class="k">this</code> <code class="k">they</code> <code class="k">so</code> (I think so) <code class="k">one</code> <code class="k">do so</code> — cevaptaki "it/that" boşluktaki neyi gösteriyor, bul.</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Yardımcı fiil uyumu:</b> "Yes, it does" → Does…? ; "It can" → Can…? ; "They did" → Did…? Soru ile cevabın yardımcı fiili aynı olmalı.</li>
      <li><b>Soru mu, cümle mi?</b> Cevap "That makes sense" ise boşluğa soru değil bir açıklama gelir.</li>
      <li><b>Konuya uygun ama cevaba uymayan:</b> konu doğru olsa bile sonraki satırla bağlanmayan şık yanlıştır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">A: ----<br>B: <em>Mainly by</em> tracking the tags we attach to their shells.<br><span class="muted">"By …ing" cevabı "How do you follow the turtles' migration?" gibi bir "how" sorusu ister.</span></div>
    <div class="ex">A: ----<br>B: <em>Actually</em>, most of the heat escapes through the windows, not the roof.<br><span class="muted">"Actually" düzeltme yapar: boşlukta yanlış bir varsayım vardır (ör. "I suppose the roof loses the most heat.").</span></div>
    <div class="ex">A: ----<br>B: <em>I'm afraid not</em>; the archive closes to visitors in August.<br><span class="muted">Evet-hayır sorusu: "Can we visit the archive next month?"</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Sonraki satırın ilk kelimelerinden soru tipini belirle (evet-hayır / Wh- / yorum). 2) Şıklarda bu tipe ve yardımcı fiile uyanı bırak, sonra önceki satırla konu bağını doğrula.</div>`,

  "rd-restatement": `
    <p>Verilen cümleyi bir <b>matematik denklemi</b> gibi gör: iddia + yön (olumlu/olumsuz) + derece + ilişki (sebep, koşul, karşılaştırma). Doğru şık dördünü de korur; kelimeler tamamen farklı olabilir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Gizli olumsuzluk:</b> <code class="k">few</code> <code class="k">little</code> <code class="k">hardly</code> <code class="k">barely</code> <code class="k">scarcely</code> <code class="k">seldom</code> <code class="k">rarely</code> <code class="k">fail to</code> <code class="k">lack</code> <code class="k">far from</code> <code class="k">anything but</code> <code class="k">by no means</code> <code class="k">no longer</code></li>
      <li><b>Çift olumsuzluk = olumlu:</b> <code class="k">not uncommon</code> (= fairly common) <code class="k">not without</code> <code class="k">few would deny</code> <code class="k">it is hard to deny</code> <code class="k">no one doubts</code> <code class="k">not unlike</code></li>
      <li><b>Koşul / gerçekleşmemiş durum:</b> <code class="k">had it not been for</code> <code class="k">but for</code> <code class="k">without</code> <code class="k">if only</code> <code class="k">otherwise</code> <code class="k">were it not for</code> <code class="k">unless</code> <code class="k">provided that</code></li>
      <li><b>Karşılaştırma / oran:</b> <code class="k">the more … the less</code> <code class="k">no more … than</code> <code class="k">not so much … as</code> <code class="k">rather than</code> <code class="k">as … as</code> <code class="k">twice as</code> <code class="k">less … than</code> <code class="k">by far</code> <code class="k">second only to</code></li>
      <li><b>Kesinlik derecesi:</b> <code class="k">must</code> <code class="k">certainly</code> ↔ <code class="k">may</code> <code class="k">might</code> <code class="k">likely</code> <code class="k">tend to</code> <code class="k">in some cases</code>; <code class="k">always / never / only</code> ifadeleri orijinalde yoksa şıkta olmamalı</li>
      <li><b>Zaman ilişkisi:</b> <code class="k">not until</code> (= ancak … olunca) <code class="k">only after</code> <code class="k">no sooner … than</code> <code class="k">hardly … when</code> <code class="k">until recently</code> (= artık değişti) <code class="k">it was not until … that</code></li>
      <li><b>Soru kökü:</b> <code class="k">Which of the following is closest in meaning to the sentence?</code> / "Verilen cümleye anlamca en yakın cümleyi bulunuz."</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>not until vs until:</b> "It was not until 1950 that X happened" = X ancak 1950'de oldu; "X happened until 1950" = 1950'ye kadar sürdü.</li>
      <li><b>not so much A as B:</b> asıl olan B'dir; şıkta A'yı ön plana çıkaran yanlıştır.</li>
      <li><b>few vs a few:</b> "few" olumsuz, "a few" olumlu; şık bu farkı ters çevirebilir.</li>
      <li><b>Sebep-sonuç yönü:</b> "A leads to B" ile "B leads to A" aynı kelimeleri içerir ama anlamı zıttır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>It was not until</em> the telescope improved <em>that</em> astronomers could see Saturn's rings clearly.<br><span class="muted">= Astronomlar Satürn'ün halkalarını ancak teleskop gelişince net görebildi.</span></div>
    <div class="ex">The crisis was caused <em>not so much by</em> a lack of money <em>as by</em> poor planning.<br><span class="muted">= Asıl sebep kötü planlamaydı, paranın azlığı değil.</span></div>
    <div class="ex">Heavy rainfall in this valley is <em>not uncommon</em> in early autumn.<br><span class="muted">= Sonbahar başında bu vadide şiddetli yağmur oldukça sık görülür.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümleyi tek Türkçe cümleyle özetle; olumlu mu olumsuz mu yaz. 2) Şıklarda yön ve derece kelimesini karşılaştır; "always/never/only" ekleyeni ele.</div>`,

  "rd-completion": `
    <p>Paragraf tamamlamada boşluk cümlesi bir <b>yapboz parçası</b> gibidir: sol kenarı önceki cümleye, sağ kenarı sonraki cümleye uymalı. Önce sağ kenara bak; sonraki cümledeki zamir veya bağlaç, boşlukta neyin söylenmiş olması gerektiğini sana doğrudan söyler.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Gönderme (referans) kelimeleri:</b> <code class="k">this</code> <code class="k">that</code> <code class="k">these</code> <code class="k">those</code> <code class="k">it</code> <code class="k">they</code> <code class="k">them</code> <code class="k">such</code> <code class="k">such a(n)</code> <code class="k">this approach / trend / problem</code> <code class="k">the former / the latter</code> <code class="k">the same</code> <code class="k">one / another / the other</code> <code class="k">both</code> <code class="k">here</code> <code class="k">there</code> <code class="k">then</code></li>
      <li><b>Zıtlık:</b> <code class="k">however</code> <code class="k">though</code> (cümle sonu) <code class="k">yet</code> <code class="k">nevertheless</code> <code class="k">in contrast</code> <code class="k">on the other hand</code> <code class="k">instead</code> <code class="k">rather</code> <code class="k">still</code></li>
      <li><b>Sonuç:</b> <code class="k">therefore</code> <code class="k">thus</code> <code class="k">hence</code> <code class="k">as a result</code> <code class="k">consequently</code> <code class="k">for this reason</code> <code class="k">that is why</code></li>
      <li><b>Ekleme / sıralama:</b> <code class="k">also</code> <code class="k">moreover</code> <code class="k">furthermore</code> <code class="k">in addition</code> <code class="k">another</code> <code class="k">first / second / finally</code> <code class="k">then</code> <code class="k">later</code> <code class="k">eventually</code> <code class="k">at first</code></li>
      <li><b>Örnek / açıklama:</b> <code class="k">for example</code> <code class="k">for instance</code> <code class="k">in particular</code> <code class="k">that is</code> <code class="k">in other words</code> <code class="k">namely</code> <code class="k">indeed</code> <code class="k">in fact</code></li>
      <li><b>Zaman çizgisi:</b> <code class="k">originally</code> <code class="k">initially</code> <code class="k">at the time</code> <code class="k">by then</code> <code class="k">today</code> <code class="k">nowadays</code> <code class="k">since then</code> <code class="k">in recent years</code></li>
      <li><b>Kapanış (boşluk sondaysa):</b> <code class="k">in short</code> <code class="k">overall</code> <code class="k">therefore</code> <code class="k">this suggests</code> <code class="k">they attribute this to</code> <code class="k">as a result</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>this/these tekil-çoğul:</b> sonraki cümle "these changes" diyorsa boşlukta birden fazla değişiklik anlatılmış olmalı.</li>
      <li><b>though (cümle sonu) vs although:</b> "…, though." sonraki cümle, boşluktakine zıt bir ek bilgi getirir.</li>
      <li><b>Yeni konu açan şık:</b> konuya yakın ama sonraki cümleye hiç bağlanmayan şık, kelime ortak olsa da yanlıştır.</li>
      <li><b>the former vs the latter:</b> former = ilk anılan, latter = son anılan; boşlukta iki şey sıralanmış olmalı.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">---- <em>This shift</em> meant that children spent far less time playing outdoors.<br><span class="muted">Boşlukta bir değişim (shift) anlatılmalı: ör. "In the 1990s, many families moved from villages to high-rise flats."</span></div>
    <div class="ex">---- <em>The latter</em>, however, proved far more resistant to cold.<br><span class="muted">Boşlukta iki şey sayılmalı: ör. "Farmers planted two varieties of wheat."</span></div>
    <div class="ex">Early glass was cloudy and expensive. ---- <em>As a result</em>, windows became common even in ordinary homes.<br><span class="muted">Boşluk, sorunu çözen gelişmeyi vermeli: ör. "New furnaces later made clear glass cheap to produce."</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Sonraki cümledeki gönderme kelimesini/bağlacı bul ve "boşlukta ne olmalı?" diye tahmin et. 2) Şıkı hem önceki hem sonraki cümleyle birlikte sesli oku; iki bağ da kuruluyorsa işaretle.</div>`,

  "rd-irrelevant": `
    <p>Bu soruda cümleleri tek tek "doğru mu" diye değil, "paragrafın <b>sorusuna</b> cevap veriyor mu" diye oku. İlk cümle bir soru açar (ne? neden? nasıl?); ona cevap vermeyen, sadece aynı alandan bilgi veren cümle akışı bozar.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Bağlantı kuran gönderme kelimeleri (akışta olduğunu gösterir):</b> <code class="k">this</code> <code class="k">these findings</code> <code class="k">such</code> <code class="k">this process</code> <code class="k">the latter</code> <code class="k">they</code> <code class="k">it</code> <code class="k">one example</code> <code class="k">another reason</code> <code class="k">in this way</code></li>
      <li><b>Mantık bağlaçları (kontrol noktası):</b> <code class="k">however</code> <code class="k">therefore</code> <code class="k">as a result</code> <code class="k">for example</code> <code class="k">in addition</code> <code class="k">moreover</code> <code class="k">consequently</code> <code class="k">thus</code> <code class="k">in contrast</code> — bağlacın neye bağladığını kontrol et; önceki cümle çıkarılınca anlamsız kalıyorsa o cümle gereklidir</li>
      <li><b>Tipik sapma türleri:</b> <code class="k">tarihçe</code> (was first invented/discovered in…) <code class="k">genel bilgi</code> (is widely used / is popular) <code class="k">aynı kelime, farklı yön</code> <code class="k">aynı yer/uygarlık, farklı konu</code> <code class="k">kişisel/günlük bilgi</code> (many people find…) <code class="k">farklı zaman dilimi</code></li>
      <li><b>Konu belirleyen ifadeler (genelde I. cümle):</b> <code class="k">plays a crucial role in</code> <code class="k">has been the subject of</code> <code class="k">one of the most … is</code> <code class="k">researchers have found</code> <code class="k">there are several reasons why</code></li>
      <li><b>Kapanış sinyalleri (genelde V. cümle, nadiren cevap):</b> <code class="k">these findings suggest</code> <code class="k">in short</code> <code class="k">as a result</code> <code class="k">therefore</code> <code class="k">understanding this</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Konuya yakın vs konuyu sürdüren:</b> "plastik" paragrafında plastiğin icadı yakındır ama mikroplastiklerin yayılmasını sürdürmez.</li>
      <li><b>Detay cümlesi vs sapma cümlesi:</b> ilk bakışta alakasız görünen bir örnek (for example) aslında ana fikre hizmet ediyorsa sapma değildir.</li>
      <li><b>Gönderme kopması:</b> bir cümledeki "this/they" hemen önceki cümleyi değil, iki önceki cümleyi gösteriyorsa, aradaki cümle muhtemelen fazladır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">(I) Chameleons can change colour within minutes. (II) <em>Chameleons are popular pets in many European countries.</em> (III) <em>This ability</em> relies on tiny crystals in their skin that reflect light differently.<br><span class="muted">III'teki "This ability" I'i gösterir; II aradaki bağı koparır.</span></div>
    <div class="ex">(I) Lighthouse lamps must be visible from great distances. (II) Special glass lenses gather the light into a single powerful beam. (III) <em>Many old lighthouses have been converted into hotels.</em><br><span class="muted">Güncel kullanım cümlesi: "ışık nasıl uzağa ulaşır?" sorusuna cevap vermez.</span></div>
    <div class="ex">(I) Some birds hide food in hundreds of places each autumn. (II) <em>Remarkably</em>, <em>they</em> can find most of <em>these stores</em> months later.<br><span class="muted">"this" I'e bağlanıyor: II akışın parçasıdır, sapma değildir.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) I. cümlenin açtığı soruyu yaz (ör. "uyku hafızayı nasıl etkiler?"). 2) Şüpheli cümleyi çıkar, önceki ile sonrakini birleştir; gönderme kelimeleri doğru yere bağlanıyorsa cevabı buldun.</div>`
});
