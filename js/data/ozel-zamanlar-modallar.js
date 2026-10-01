/* Yanlışlarına özel anlatımlar: ten-pastperf, ten-perfect, ten-future, ten-continuous, ten-timeclause, mod-pastdeduction, mod-obligation, mod-advice, mod-ability, mod-habit */
Object.assign(OZEL, {
  "ten-pastperf": `
    <p>Soruda şuna bak: Cümlede <b>iki geçmiş olay</b> var mı ve biri diğerinden <b>önce bitmiş</b> mi? Öyleyse "daha eski" olan olay <code class="k">had V3</code>, "sonraki" olay Simple Past olur. Zaman çizgisine iki nokta koy; soldaki nokta Past Perfect'tir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Sonraki olayı veren bağlaçlar (yan cümle Simple Past, ana cümle Past Perfect):</b> <code class="k">by the time</code>, <code class="k">before</code>, <code class="k">when</code> (= -dığında çoktan), <code class="k">until / till</code>, <code class="k">by + geçmiş tarih</code> (by 1990, by the end of the war), <code class="k">prior to</code>, <code class="k">by then</code></li>
      <li><b>Önceki olayı veren bağlaçlar (yan cümle Past Perfect, ana cümle Simple Past):</b> <code class="k">after</code>, <code class="k">as soon as</code>, <code class="k">once</code>, <code class="k">the moment / the minute</code>, <code class="k">because / since / as</code> (geçmiş sebep)</li>
      <li><b>Devrik "…ir …mez" kalıpları:</b> <code class="k">No sooner had S V3 … than</code>, <code class="k">Hardly / Scarcely / Barely had S V3 … when / before</code></li>
      <li><b>"Çoktan / o zamana kadar" zarfları:</b> <code class="k">already</code>, <code class="k">just</code>, <code class="k">never … before</code>, <code class="k">ever</code>, <code class="k">previously</code>, <code class="k">earlier</code>, <code class="k">by that time</code>, <code class="k">up to then / until then</code>, <code class="k">for + süre</code> (had been V-ing ile)</li>
      <li><b>Sabit yapılar:</b> <code class="k">It was the first/second time (that) + had V3</code>, <code class="k">It was the first time … had ever</code>, dolaylı anlatımda <code class="k">said / reported / claimed that + had V3</code>, <code class="k">wish / if only + had V3</code>, <code class="k">If + had V3</code> (Type 3)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">by the time + Simple Past</code> → Past Perfect; <code class="k">by the time + Simple Present</code> → Future Perfect. Yan cümlenin zamanı hangisini seçeceğini belirler.</li>
      <li><code class="k">had V3</code> vs <code class="k">had been V-ing</code> → "for years / for a long time" ile süre vurgusu varsa ikincisi; sonuç/tamamlanma varsa birincisi.</li>
      <li><code class="k">No sooner … than</code> vs <code class="k">Hardly … when</code> → eşleri değiştirilemez; "No sooner … when" hep yanlış seçenektir.</li>
      <li>Past Perfect vs Present Perfect → cümlede "since / so far" olsa bile ikinci geçmiş referans (was, by 1980) varsa Past Perfect.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The glacier <em>had retreated</em> almost two kilometres by the time the first aerial survey was carried out.<br><span class="muted">Önce geri çekilme, sonra hava taraması.</span></div>
    <div class="ex"><em>Scarcely had</em> the committee published its guidelines <em>when</em> several hospitals challenged them.<br><span class="muted">Devrik yapı + when; "…yayımlar yayımlamaz".</span></div>
    <div class="ex">The linguist realised that the villagers <em>had been speaking</em> a distinct dialect for generations.<br><span class="muted">Süre vurgusu → had been V-ing.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Bağlacın hangi olayı taşıdığını bul (by the time/before → sonraki; after/once → önceki). 2) Önceki olaya had V3 ver, seçenekte sıranın ters olmadığını kontrol et.</div>`,

  "ten-perfect": `
    <p>Soruda şuna bak: Olay <b>kapanmış bir geçmişe mi</b> ait, yoksa <b>şu ana kadar uzanan bir döneme mi</b>? Dönem bugüne açıksa (since, so far, over the past …) Present Perfect; dönem kapanmışsa (ago, in 2015, last year) Simple Past.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Başlangıç noktası / süre:</b> <code class="k">since + nokta / cümle</code>, <code class="k">for + süre</code>, <code class="k">for the last / past … years</code>, <code class="k">over / during / in the past (few) decades</code>, <code class="k">in recent years / decades</code>, <code class="k">throughout history</code> (bugüne kadar), <code class="k">ever since</code></li>
      <li><b>Bugüne kadarki toplam:</b> <code class="k">so far</code>, <code class="k">up to now / until now / till now</code>, <code class="k">to date</code>, <code class="k">thus far</code>, <code class="k">up to the present</code>, <code class="k">as yet</code>, <code class="k">hitherto</code></li>
      <li><b>Yakın geçmiş / sonuç:</b> <code class="k">recently / lately</code>, <code class="k">just</code>, <code class="k">already</code>, <code class="k">yet</code> (olumsuz/soru), <code class="k">still … not</code>, <code class="k">now</code> (sonuç vurgusu)</li>
      <li><b>Deneyim / sıklık:</b> <code class="k">ever / never</code>, <code class="k">before</code> (cümle sonunda), <code class="k">once / twice / several times / many times</code>, <code class="k">often</code></li>
      <li><b>Sabit yapılar:</b> <code class="k">It is the first / second / only time (that) + have V3</code>, <code class="k">This is the best … (that) S have ever V3</code>, <code class="k">It has been + süre + since + Simple Past</code>, <code class="k">This week / this year / today</code> (dönem bitmediyse)</li>
      <li><b>Kapanmış geçmiş (Present Perfect ile kullanılmaz):</b> <code class="k">ago</code>, <code class="k">yesterday</code>, <code class="k">last …</code>, <code class="k">in + yıl</code>, <code class="k">in the 19th century</code>, <code class="k">when + geçmiş</code>, <code class="k">at that time</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">since</code> yan cümlesi Simple Past, ana cümle Present Perfect: "since the law <u>passed</u>, crime <u>has dropped</u>". Yan cümleye has V3 koyma.</li>
      <li><code class="k">have V3</code> vs <code class="k">have been V-ing</code> → sayı/miktar/sonuç (three studies, twice) varsa have V3; süreç/süre vurgusu varsa have been V-ing.</li>
      <li><code class="k">It is the first time</code> → Present Perfect; <code class="k">It was the first time</code> → Past Perfect.</li>
      <li><code class="k">for</code> + kapanmış dönem ("for ten years in the 1800s") → Simple Past olur, Present Perfect değil.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">To date, only a handful of laboratories <em>have succeeded</em> in growing the fungus outside its natural habitat.<br><span class="muted">"to date" = bugüne kadar → Present Perfect.</span></div>
    <div class="ex">It has been nearly a century since the last wild wolf <em>was seen</em> in the region.<br><span class="muted">since'ten sonra kapanmış olay → Simple Past.</span></div>
    <div class="ex">Over the past two decades, mountain villages <em>have been converting</em> abandoned schools into small museums.<br><span class="muted">Süreç ve devam → have been V-ing.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Zarf bugüne açık mı (since/so far/to date/over the past), kapalı mı (ago/in 2010)? 2) since yan cümlesinin Simple Past, ana cümlenin Present Perfect olduğunu doğrula.</div>`,

  "ten-future": `
    <p>Soruda şuna bak: Gelecekteki zaman ifadesi bir <b>son tarih</b> mi (by …) yoksa bir <b>an</b> mı (this time tomorrow)? Son tarih → o tarihe kadar bitmiş olacak: <code class="k">will have V3</code>. An → o anda sürüyor olacak: <code class="k">will be V-ing</code>. İkisi de yoksa plan/tahmin ayrımına geç.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Future Perfect (tamamlanmış olacak):</b> <code class="k">by + gelecek tarih</code> (by 2040, by next spring, by the end of the century), <code class="k">by the time + Simple Present</code>, <code class="k">by then</code>, <code class="k">before + Simple Present</code>, <code class="k">within the next … years</code>, <code class="k">in + süre</code> (in five years' time), <code class="k">already</code>, <code class="k">not … until</code></li>
      <li><b>Future Perfect Continuous (süre vurgusu):</b> <code class="k">by + tarih + for + süre</code>, <code class="k">by the time … for … years</code></li>
      <li><b>Future Continuous (o anda sürüyor olacak):</b> <code class="k">this time next week / month / year</code>, <code class="k">at this time tomorrow</code>, <code class="k">at + saat + tomorrow</code>, <code class="k">all day tomorrow</code>, <code class="k">during the summit</code>, <code class="k">when + Simple Present</code> (you arrive, we'll be waiting)</li>
      <li><b>Plan / yakın gelecek:</b> <code class="k">be going to</code> (niyet, kanıta dayalı tahmin), <code class="k">be about to</code> (hemen şimdi), <code class="k">be on the point / verge of + V-ing</code>, <code class="k">be due to</code> (planlı), <code class="k">be set to</code>, <code class="k">be expected to</code>, <code class="k">be scheduled to</code>, <code class="k">be to + V1</code> (resmi plan)</li>
      <li><b>Tarife / program (Simple Present):</b> <code class="k">according to the schedule / timetable</code>, <code class="k">officially</code>, saatli kalkış-varış, açılış-kapanış</li>
      <li><b>Tahmin / olasılık:</b> <code class="k">probably / likely / certainly / surely</code>, <code class="k">I expect / predict</code>, <code class="k">it is estimated / projected that</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">by 2040</code> (bitmiş olacak) vs <code class="k">in 2040</code> (o yıl olacak) → by ise will have V3, in ise düz will.</li>
      <li><code class="k">by the time + present</code> (Future Perfect) vs <code class="k">by the time + past</code> (Past Perfect).</li>
      <li><code class="k">will be V-ing</code> vs <code class="k">will have V3</code> → "this time next year" iş hâlâ sürüyor; "by next year" iş bitmiş.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Within the next five years, the observatory <em>will have catalogued</em> over a million distant galaxies.<br><span class="muted">Süre sonunda tamamlanma → will have V3.</span></div>
    <div class="ex">At this hour next Monday, the surgeons <em>will be performing</em> the first transplant of its kind.<br><span class="muted">Gelecekte belli bir anda süren eylem.</span></div>
    <div class="ex">By the time the survey closes, the volunteers <em>will have been interviewing</em> farmers for eight months.<br><span class="muted">by the time + present + süre → will have been V-ing.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) "by" var mı? Varsa will have V3 (süre de varsa will have been V-ing). 2) "this time / at + saat" varsa will be V-ing; tarife ise Simple Present.</div>`,

  "ten-continuous": `
    <p>Soruda şuna bak: Eylem o anda <b>yarım mı kalmış, sürüyor mu</b>, yoksa <b>bitmiş mi</b>? Arka planda süren uzun eylem -ing alır; onu bölen kısa olay Simple Past'tır. "Bir süredir sürüyordu ve sonra bir şey oldu" dendiğinde <code class="k">had been V-ing</code> gelir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Arka plan eylemi (Past Continuous):</b> <code class="k">while</code>, <code class="k">as</code> (= while), <code class="k">just as</code>, <code class="k">when</code> (+ kısa olay), <code class="k">at that moment / at the time</code>, <code class="k">at + saat + yesterday</code>, <code class="k">all night / all day</code>, <code class="k">throughout the evening</code>, <code class="k">meanwhile</code></li>
      <li><b>Kesilen / önceden süren (Past Perfect Continuous):</b> <code class="k">for + süre … when</code>, <code class="k">for some time before</code>, <code class="k">since + nokta</code> (geçmiş bağlamda), <code class="k">how long … had</code></li>
      <li><b>Bugüne kadar süren (Present Perfect Continuous):</b> <code class="k">for / since</code>, <code class="k">all morning / all year</code>, <code class="k">lately / recently</code>, <code class="k">over the past months</code>, <code class="k">how long</code>, sonuç ipucu (her yer ıslak, yorgun)</li>
      <li><b>Şimdi / geçici durum (Present Continuous):</b> <code class="k">now / right now / at present / currently / at the moment</code>, <code class="k">these days / nowadays</code>, <code class="k">increasingly</code>, <code class="k">more and more</code>, <code class="k">still</code>, değişim fiilleri (getting, rising, becoming)</li>
      <li><b>-ing almayan durum fiilleri:</b> <code class="k">know, believe, understand, belong, own, contain, consist of, seem, exist, depend on, prefer, mean, include, resemble</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">while + was V-ing</code> vs <code class="k">when + Simple Past</code> → while uzun eyleme, when genelde kısa olaya bağlanır.</li>
      <li><code class="k">was V-ing</code> vs <code class="k">had V3</code> → olay anında eylem sürüyorsa Past Continuous; o andan önce bitmişse Past Perfect.</li>
      <li><code class="k">had been V-ing</code> vs <code class="k">was V-ing</code> → "for + süre" varsa had been V-ing; süre yoksa was V-ing.</li>
      <li>Durum fiili görürsen -ing'li seçeneği ele: "The box was containing" yanlış.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Just as the choir <em>was finishing</em> its final piece, the power <em>went</em> out across the hall.<br><span class="muted">Süren eylem + araya giren kısa olay.</span></div>
    <div class="ex">The pharmacist <em>had been dispensing</em> the wrong dosage for months before an inspector noticed the error.<br><span class="muted">Süre + sonraki geçmiş olay → had been V-ing.</span></div>
    <div class="ex">Remote-work tools <em>are reshaping</em> the way rural towns attract young residents.<br><span class="muted">Şu an süren değişim → Present Continuous.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Uzun eylemi ve kısa olayı ayır; uzuna -ing, kısaya Simple Past ver. 2) "for + süre" varsa perfect continuous'a geç; durum fiiliyse -ing'i ele.</div>`,

  "ten-timeclause": `
    <p>Soruda şuna bak: Boşluk <b>bağlacın arkasındaki cümlede mi</b>, yoksa ana cümlede mi? Bağlaçlı cümle gelecek anlatsa bile şimdiki zaman kılığına girer (Simple Present / Present Perfect); will sadece ana cümlede durur. Geçmiş bağlamda iki taraf da geçmişe kayar.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Zaman bağlaçları (sonrasında will yok):</b> <code class="k">when</code>, <code class="k">whenever</code>, <code class="k">while</code>, <code class="k">as</code>, <code class="k">before</code>, <code class="k">after</code>, <code class="k">until / till</code>, <code class="k">as soon as</code>, <code class="k">once</code>, <code class="k">by the time</code>, <code class="k">the moment / the minute / the instant</code>, <code class="k">immediately / directly</code> (bağlaç olarak), <code class="k">as long as</code>, <code class="k">since</code> (başlangıç), <code class="k">the next time</code>, <code class="k">every time / each time</code></li>
      <li><b>Aynı kural geçerli koşul bağlaçları:</b> <code class="k">if</code>, <code class="k">unless</code>, <code class="k">provided (that) / providing</code>, <code class="k">as long as / so long as</code>, <code class="k">in case</code>, <code class="k">on condition that</code></li>
      <li><b>Tamamlanma vurgusu (yan cümlede Present Perfect):</b> <code class="k">once / after / until / when / as soon as + have V3</code></li>
      <li><b>Ana cümlenin alabileceği biçimler:</b> <code class="k">will V1</code>, <code class="k">will have V3</code> (by the time ile), <code class="k">will be V-ing</code>, <code class="k">be going to</code>, <code class="k">can / may / should + V1</code>, emir kipi</li>
      <li><b>Geçmiş kalıplar:</b> <code class="k">when + Simple Past, Simple Past</code>, <code class="k">until + Simple Past, had V3 / didn't V1</code>, <code class="k">not … until</code> (…-ene kadar …-medi), <code class="k">It was not until … that</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">until the bill is passed</code> ✓ / <code class="k">until the bill will be passed</code> ✗ → bağlaçtan sonra will hep çeldiricidir.</li>
      <li><code class="k">when</code> zaman bağlacı (will yok) vs <code class="k">when</code> soru/isim cümlesi ("I don't know when it will open") → ikincide will olur.</li>
      <li><code class="k">by the time + present</code> → ana cümle will have V3; düz will genelde yanlış.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The bridge will reopen to heavy vehicles only after engineers <em>have inspected</em> every support cable.<br><span class="muted">after + Present Perfect; will yalnız ana cümlede.</span></div>
    <div class="ex">The moment the satellite <em>enters</em> orbit, it will begin transmitting weather data.<br><span class="muted">"the moment" = …r …mez; bağlaçtan sonra Simple Present.</span></div>
    <div class="ex">It was not until the archive <em>was digitised</em> that historians noticed the missing pages.<br><span class="muted">Geçmiş bağlamda iki taraf da geçmiş.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Bağlacı bul, boşluğun onun cümlesinde olup olmadığına bak; oradaysa will'li seçenekleri ele. 2) Ana cümle geleceği mi geçmişi mi anlatıyor, iki tarafı buna göre eşle.</div>`,

  "mod-pastdeduction": `
    <p>Soruda şuna bak: Cümlede bir <b>kanıt</b> (as, since, because, given that, …) var mı ve bu kanıt ne kadar güçlü? Kanıt olayı kesinleştiriyorsa must have, olayı imkânsız kılıyorsa can't have, "emin değiliz" diyorsa may/might/could have. Kanıt yoksa, cümle eleştiri anlatıyorsa should have başka bir konudur.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Kanıt bağlaçları:</b> <code class="k">as / since / because</code>, <code class="k">given that</code>, <code class="k">judging by / from</code>, <code class="k">considering that</code>, <code class="k">the fact that</code>, <code class="k">evidence suggests / shows</code>, <code class="k">traces of</code>, <code class="k">remains of</code></li>
      <li><b>Kesinlik → must have V3:</b> <code class="k">clearly</code>, <code class="k">obviously</code>, <code class="k">undoubtedly</code>, <code class="k">there is no doubt</code>, <code class="k">it is certain that</code>, <code class="k">everything indicates</code></li>
      <li><b>İmkânsızlık → can't / couldn't have V3:</b> <code class="k">yet / but it was</code> (çelişen kanıt), <code class="k">only (released / discovered) later</code>, <code class="k">after his death</code>, <code class="k">no trace / no sign of</code>, <code class="k">it is impossible</code>, <code class="k">there is no way</code></li>
      <li><b>Olasılık → may / might / could have V3:</b> <code class="k">possibly / perhaps / maybe</code>, <code class="k">but we cannot be certain / sure</code>, <code class="k">it is not clear</code>, <code class="k">one theory is</code>, <code class="k">it is thought / believed</code>, <code class="k">some scholars suggest</code>, <code class="k">or</code> (iki ihtimal)</li>
      <li><b>Olumsuz olasılık:</b> <code class="k">may not / might not have V3</code> (…-mamış olabilir) — can't have'den zayıftır</li>
      <li><b>Edilgen ve süreç:</b> <code class="k">must have been V3</code>, <code class="k">can't have been V3</code>, <code class="k">might have been V-ing</code>; eş anlamlı: <code class="k">be bound to have</code>, <code class="k">be likely to have V3</code>, <code class="k">It is likely / probable that + past</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">must have V3</code> (çıkarım: -mış olmalı) vs <code class="k">should have V3</code> (eleştiri: -malıydı).</li>
      <li><code class="k">can't have V3</code> (imkânsız) vs <code class="k">mustn't have</code> → olumsuz çıkarımda mustn't kullanılmaz.</li>
      <li><code class="k">could have V3</code> iki anlamlı: "olmuş olabilir" (olasılık) ya da "yapabilirdi ama yapmadı" (kaçırılmış fırsat); cümlenin devamına bak.</li>
      <li><code class="k">needn't have V3</code> çıkarım değil, gereksizlik bildirir.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Judging by the soot on the cave walls, early humans <em>must have used</em> the chamber as a hearth.<br><span class="muted">Güçlü kanıt → kesin çıkarım.</span></div>
    <div class="ex">The manuscript <em>couldn't have been copied</em> in Venice, since that type of paper was not produced there until much later.<br><span class="muted">Zamansal çelişki → imkânsızlık.</span></div>
    <div class="ex">The comet <em>may have delivered</em> water to the young Earth, although the theory remains disputed.<br><span class="muted">"remains disputed" → yalnızca olasılık.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Kanıt cümlesini bul ve derecesini işaretle: kesin / imkânsız / belirsiz. 2) Seçenekte "have + V3" olduğunu ve edilgenlik gerekiyorsa "have been V3" olduğunu kontrol et.</div>`,

  "mod-obligation": `
    <p>Soruda şuna bak: Cümle bir şeyi <b>zorunlu</b> mu, <b>yasak</b> mı, yoksa <b>gereksiz</b> mi kılıyor? Olumsuz modalda tuzak hep buradadır: mustn't = yapma; don't have to / needn't = yapmasan da olur. Geçmişte ise "yapıldı mı?" sorusu needn't have ile didn't need to'yu ayırır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Dışsal zorunluluk (have to / must / be required to):</b> <code class="k">under the new law / regulation</code>, <code class="k">by law</code>, <code class="k">according to the rules</code>, <code class="k">compulsory / mandatory / obligatory</code>, <code class="k">be required / obliged / compelled / forced to</code>, <code class="k">it is essential / vital / imperative that (should) V1</code>, <code class="k">be supposed to</code></li>
      <li><b>Yasak (mustn't / be not allowed to):</b> <code class="k">prohibited / forbidden / banned</code>, <code class="k">under no circumstances</code>, <code class="k">be not permitted to</code>, <code class="k">as it can damage / endanger</code> (gerekçe)</li>
      <li><b>Gereksizlik (don't have to / needn't / don't need to):</b> <code class="k">optional</code>, <code class="k">free of charge</code>, <code class="k">automatically</code>, <code class="k">already provided</code>, <code class="k">there is no need to</code>, <code class="k">it is not necessary</code></li>
      <li><b>Geçmiş — gerekmedi, yapılmadı:</b> <code class="k">didn't have to / didn't need to + V1</code>, <code class="k">so</code> / <code class="k">instead</code> (yapılmadığını gösteren devam)</li>
      <li><b>Geçmiş — gereksizdi ama yapıldı:</b> <code class="k">needn't have V3</code>, ipuçları: <code class="k">it turned out</code>, <code class="k">as it happened</code>, <code class="k">in the end</code>, <code class="k">after all</code>, <code class="k">in vain</code>, <code class="k">unnecessarily</code></li>
      <li><b>Diğer zamanlar:</b> <code class="k">had to</code> (geçmiş zorunluluk), <code class="k">will have to</code>, <code class="k">have had to</code>, <code class="k">need + V-ing</code> (edilgen anlam: the roof needs repairing)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">mustn't</code> (yasak) vs <code class="k">don't have to</code> (gerek yok) → gerekçe "zarar verir" ise mustn't.</li>
      <li><code class="k">needn't have V3</code> (yapıldı, boşunaydı) vs <code class="k">didn't need to V1</code> (gerekmedi, genelde yapılmadı).</li>
      <li><code class="k">must</code> geçmiş hâli yoktur → geçmiş zorunluluk <code class="k">had to</code>; "must have V3" çıkarımdır.</li>
      <li>Biçim tuzakları: "didn't need <u>to</u> V1" (to şart), "needn't V1" (to yok), "needn't have V3".</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Applicants <em>don't have to</em> submit a printed copy, as the portal stores all documents electronically.<br><span class="muted">Serbest bırakma → gerek yok.</span></div>
    <div class="ex">The engineers <em>needn't have reinforced</em> the old wall; the survey later showed it was structurally sound.<br><span class="muted">Güçlendirme yapıldı, sonradan gereksiz çıktı.</span></div>
    <div class="ex">Pilots <em>are required to</em> rest for at least ten hours between long-haul flights.<br><span class="muted">Kurala dayalı dışsal zorunluluk.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Anlamı üç kutudan birine koy: zorunlu / yasak / gereksiz. 2) Geçmişteyse "eylem yapıldı mı?" sor; yapıldıysa needn't have V3, yapılmadıysa didn't need to V1.</div>`,

  "mod-advice": `
    <p>Soruda şuna bak: Cümle <b>ileriye dönük bir öneri</b> mi yapıyor, yoksa <b>geçmişteki bir hatayı</b> mı eleştiriyor? İleriye dönükse should / ought to / had better + V1; geriye dönük pişmanlık/eleştiriyse should / ought to have V3. Cümledeki "sonuç kötü oldu" ipucu (failed, suffered, if they had) eleştiriyi işaret eder.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Tavsiye fiilleri (+ that + (should) V1):</b> <code class="k">advise</code>, <code class="k">recommend</code>, <code class="k">suggest</code>, <code class="k">propose</code>, <code class="k">urge</code>, <code class="k">insist</code>, <code class="k">it is advisable / recommended / important that</code></li>
      <li><b>Uyarı → had better (not) + V1:</b> <code class="k">or (else)</code>, <code class="k">otherwise</code>, <code class="k">or they risk</code>, <code class="k">before it is too late</code>, <code class="k">if … want to avoid</code></li>
      <li><b>Genel öneri / beklenti:</b> <code class="k">should / ought to</code>, <code class="k">be supposed to</code>, <code class="k">it is (high) time + Simple Past</code>, <code class="k">would rather + V1</code>, <code class="k">might / could (want to)</code> (kibar öneri), <code class="k">why not / it would be wise to</code></li>
      <li><b>Geçmiş eleştiri → should / ought to have V3:</b> <code class="k">failed to</code>, <code class="k">ignored / overlooked / neglected</code>, <code class="k">mainly because</code>, <code class="k">if they had</code>, <code class="k">instead</code>, <code class="k">earlier / beforehand / in advance</code>, <code class="k">as a result, …</code>, <code class="k">in hindsight / with hindsight</code></li>
      <li><b>Yapılmış hata → shouldn't have V3:</b> <code class="k">rushed / hastily</code>, <code class="k">too early / too much</code>, <code class="k">it proved to be a mistake</code></li>
      <li><b>Kaçırılmış fırsat (yakın anlam):</b> <code class="k">could have V3</code> (yapabilirdi), <code class="k">might have V3</code> (sitem: en azından … yapabilirdin)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">should have V3</code> (yapılmadı, eleştiri) vs <code class="k">must have V3</code> (yapıldığına dair çıkarım).</li>
      <li><code class="k">had better</code> geçmiş anlam taşımaz ve "to" almaz: had better leave ✓, had better to leave ✗, had better have left (geçmiş eleştiri) ✗.</li>
      <li><code class="k">It is time + Simple Past</code> ("It is time the city <u>upgraded</u>…") → V1 ya da should V1 yerine geçmiş biçim.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">In hindsight, the organisers <em>ought to have tested</em> the ticketing system under heavy traffic.<br><span class="muted">"in hindsight" → geriye dönük eleştiri.</span></div>
    <div class="ex">Hikers <em>had better carry</em> extra water in this canyon, or they may suffer from severe dehydration.<br><span class="muted">"or …" → güçlü uyarı.</span></div>
    <div class="ex">The panel recommended that the drug <em>be withdrawn</em> until further safety trials were completed.<br><span class="muted">recommend that + (should) V1 → yalın biçim.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümle geleceğe mi geçmişe mi bakıyor? Geçmişse V3'lü seçenekleri, geleceğe bakıyorsa V1'li seçenekleri tut. 2) "or / otherwise" varsa had better; "failed / if they had" varsa should have V3.</div>`,

  "mod-ability": `
    <p>Soruda şuna bak: Yetenek <b>genel</b> mi (her zaman yapabilirdi), yoksa <b>tek bir olayda başarılmış</b> mı? Genel geçmiş yetenek could; zorluğa rağmen bir kez başarılan iş was able to / managed to. Could'un giremediği zamanlarda (perfect, future, to-infinitive, V-ing) be able to devreye girer.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Tek seferlik başarı → was/were able to, managed to, succeeded in V-ing:</b> <code class="k">despite / in spite of</code>, <code class="k">although / even though</code>, <code class="k">in the end / eventually / finally</code>, <code class="k">after hours of</code>, <code class="k">at last</code>, <code class="k">narrowly</code>, <code class="k">just in time</code></li>
      <li><b>Genel geçmiş yetenek → could:</b> <code class="k">when he was young</code>, <code class="k">at the age of</code>, <code class="k">in those days</code>, <code class="k">used to be able to</code>, algı fiilleri (<code class="k">could see / hear / smell / feel</code>)</li>
      <li><b>Bugüne uzanan → have been able to:</b> <code class="k">so far</code>, <code class="k">since</code>, <code class="k">to date</code>, <code class="k">recently</code>, <code class="k">for years</code>, <code class="k">yet</code></li>
      <li><b>Gelecek / yeni kazanılan yetenek → will be able to, are now able to:</b> <code class="k">thanks to</code>, <code class="k">with the help of</code>, <code class="k">soon</code>, <code class="k">in the near future</code>, <code class="k">once … is developed</code>, <code class="k">now</code> (öncesine kıyasla)</li>
      <li><b>Olumsuz (hepsi kullanılabilir):</b> <code class="k">couldn't / wasn't able to / failed to / didn't manage to</code>, <code class="k">be unable to</code>, <code class="k">be incapable of + V-ing</code></li>
      <li><b>Kaçırılmış yetenek / fırsat:</b> <code class="k">could have V3</code> (yapabilirdi ama yapmadı), <code class="k">couldn't have V3</code> (yapamazdı)</li>
      <li><b>Eş anlamlı kalıplar:</b> <code class="k">be capable of V-ing</code>, <code class="k">have the capacity / ability to</code>, <code class="k">be in a position to</code>, <code class="k">enable / allow sb to V1</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">could</code> (genel) vs <code class="k">was able to / managed to</code> (tek olay, olumlu cümle); olumsuzda couldn't da doğrudur.</li>
      <li><code class="k">succeed in V-ing</code> ✓ / <code class="k">succeed to</code> ✗; <code class="k">manage to V1</code> ✓ / <code class="k">manage V-ing</code> ✗.</li>
      <li><code class="k">can</code> perfect/future yapamaz: "has could / will can" ✗ → has been able to / will be able to.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">After three failed attempts, the divers finally <em>managed to retrieve</em> the ship's bell from the seabed.<br><span class="muted">Zorlukla tek seferlik başarı → managed to.</span></div>
    <div class="ex">With the new sensors, farmers <em>will be able to detect</em> crop disease before any symptoms appear.<br><span class="muted">Gelecek yetenek → will be able to.</span></div>
    <div class="ex">Linguists <em>have not yet been able to</em> decipher the script found on the tablets.<br><span class="muted">"not yet" → Present Perfect + be able to.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Olumlu cümlede tek bir geçmiş başarı mı var? Varsa could'u ele. 2) Zaman ipucu (so far, will, since) varsa can/could değil be able to'nun o zamandaki biçimini seç.</div>`,

  "mod-habit": `
    <p>Soruda şuna bak: "to"dan sonra ne geliyor ve önünde <b>be / get</b> var mı? Yalnız <code class="k">used to</code> ise ardından fiilin yalın hâli gelir ve anlam "eskiden …-ardı"dır. Önünde be/get varsa "to" edattır; ardından isim ya da V-ing gelir ve anlam "alışkın olmak / alışmak"tır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Artık yapılmayan geçmiş alışkanlık / durum → used to V1, would V1:</b> <code class="k">in the past</code>, <code class="k">in those days</code>, <code class="k">when … was young / a child</code>, <code class="k">before + (buluş) became widespread</code>, <code class="k">traditionally</code>, <code class="k">formerly</code>, <code class="k">once</code> (bir zamanlar), <code class="k">no longer / not … any more / any longer</code>, <code class="k">but now</code>, <code class="k">nowadays</code> (karşıtlık)</li>
      <li><b>Tekrarlanan eylem ipuçları (would da olur):</b> <code class="k">every summer / every morning</code>, <code class="k">often / always / sometimes</code>, <code class="k">whenever</code>, önceki cümlede kurulmuş used to</li>
      <li><b>Alışkın olmak → be used to + isim / V-ing:</b> <code class="k">having lived / worked … for years</code>, <code class="k">no longer finds it difficult</code>, <code class="k">familiar with</code>, <code class="k">accustomed to</code></li>
      <li><b>Alışma süreci → get / become / grow used to + isim / V-ing:</b> <code class="k">at first … but eventually / gradually</code>, <code class="k">in time</code>, <code class="k">soon</code>, <code class="k">after a while</code>, <code class="k">it takes time to</code>, <code class="k">never</code> (hiç alışamadı)</li>
      <li><b>Biçimler:</b> <code class="k">didn't use to</code>, <code class="k">Did … use to?</code>, <code class="k">never used to</code>, <code class="k">be accustomed to V-ing</code>, <code class="k">be used to + V1</code> (edilgen: -mak için kullanılır; the tool is used to cut glass)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><code class="k">used to V1</code> (eskiden yapardı) vs <code class="k">be used to V-ing</code> (alışkındır) vs <code class="k">get used to V-ing</code> (alışır/alıştı).</li>
      <li><code class="k">would</code> vs <code class="k">used to</code> → durum fiillerinde (be, have, live, own, believe) yalnız used to: "There used to be a harbour here".</li>
      <li><code class="k">be used to + V1</code> iki anlamlı olabilir: edilgen "için kullanılmak" (is used to measure) doğru; "alışkın" anlamında V1 yanlış.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Medieval scribes <em>would dip</em> their quills in ink made from crushed oak galls.<br><span class="muted">Tekrarlanan geçmiş eylem → would.</span></div>
    <div class="ex">Night-shift nurses gradually <em>get used to sleeping</em> during daylight hours.<br><span class="muted">"gradually" → alışma süreci + V-ing.</span></div>
    <div class="ex">The island <em>used to have</em> a thriving pearl industry, but little of it survives today.<br><span class="muted">Durum (have) → would değil used to.</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) be/get var mı? Varsa ardından V-ing/isim; yoksa V1. 2) Fiil durum fiiliyse would'u ele; cümle bugünü anlatıyorsa (finds, is) used to V1'i ele.</div>`
});
