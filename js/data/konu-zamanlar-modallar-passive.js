/* Question bank: Tenses, Modals, Passive (week 1) */

TOPIC_BANK.push({
  id: "tenses",
  n: "Tenses — Zamanlar",
  s: "Zaman–zarf uyumu ve zaman sırası",
  week: 1,
  html: `
    <p>YDS'de zamanlar tek başına nadiren sorulur; asıl olarak <b>zaman zarfları (time adverbials)</b> ve <b>iki eylem arasındaki sıra</b> üzerinden test edilir. Cümledeki ipucu kelimeyi görüp doğru zamanı seçmek anahtardır. Çift boşluklu sorularda iki boşluğun birbirine uyumu da kontrol edilmelidir.</p>
    <h4>Sık çıkan zaman–zarf eşleşmeleri</h4>
    <ul>
      <li><code class="k">Present Perfect</code> → since, for, so far, recently, already, yet, up to now, over the past decade, it is the first time</li>
      <li><code class="k">Past Perfect</code> → by the time + past, before, after, until, no sooner … than, hardly … when</li>
      <li><code class="k">Simple Past</code> → ago, in 1990, yesterday, last …, when + geçmiş</li>
      <li><code class="k">Future Perfect</code> → by + gelecek zaman (by 2030, by the time + present)</li>
      <li><code class="k">Future Continuous</code> → this time next week/year, at 10 tomorrow</li>
    </ul>
    <h4>Sürekli zamanlar</h4>
    <p>Geçmişte devam eden eylem <code class="k">was/were V-ing</code>, onu kesen kısa eylem <code class="k">Simple Past</code> olur. Belli bir andan önce süregelen eylem için <code class="k">had been V-ing</code>, hâlâ süren eylem için <code class="k">have been V-ing</code> kullanılır.</p>
    <div class="ex">While the team <em>was drilling</em> the ice, they <em>discovered</em> ancient bacteria.<br><span class="muted">Uzun süren eylem + araya giren kısa eylem.</span></div>
    <h4>Zaman bağlaçları (time clauses)</h4>
    <p>when, until, as soon as, once, before, after, by the time gibi bağlaçlardan sonra <b>gelecek anlamı için will kullanılmaz</b>; Simple Present veya Present Perfect gelir. Ana cümle ise will / Future Perfect alır.</p>
    <div class="ex">By the time the report <em>was</em> published, the committee <em>had already reviewed</em> the data.<br><span class="muted">"By the time + past" → ana cümlede Past Perfect.</span></div>
    <div class="ex">The results will be announced as soon as the analysis <em>is completed</em>.<br><span class="muted">Zaman bağlacından sonra will yok.</span></div>
    <div class="tip"><b>İpucu:</b> Cümlede iki eylem varsa önce olanı Past Perfect, sonra olanı Simple Past yap. Zaman çizgisini kafanda kur ve önce zarfı, sonra ikinci boşluğu kontrol et; çoğu çeldirici tek boşluğu doğru, diğerini yanlış verir.</div>`,
  qs: [
    {id:"tenses-01", sub:"ten-pastperf", q:"By the time the rescue team ---- the village, most residents ---- to safer areas.", o:["reaches / will move","reached / had moved","has reached / moved","was reaching / have moved","had reached / were moving"], a:1, e:"‘By the time + Simple Past’ kalıbında ana cümle, daha önce tamamlanan eylem olduğu için Past Perfect alır. ‘had reached / were moving’ sırayı tersine çevirir: köye varış önce, taşınma sonra gibi olur."},
    {id:"tenses-02", sub:"ten-perfect", q:"Since the introduction of the vaccine in the 1960s, the number of measles cases worldwide ---- dramatically.", o:["declined","was declining","had declined","has declined","will decline"], a:3, e:"‘Since + geçmişteki bir başlangıç noktası’ geçmişten bugüne uzanan süreci gösterir ve Present Perfect ister. ‘had declined’ için geçmişte ikinci bir referans noktası gerekir, cümlede yok."},
    {id:"tenses-03", sub:"ten-future", q:"By 2050, the global population ---- nearly ten billion, according to UN projections.", o:["will have reached","has reached","reached","had reached","is reaching"], a:0, e:"‘By + gelecekteki bir tarih’ o tarihe kadar tamamlanmış olacak eylemi anlatır; Future Perfect gerekir. ‘is reaching’ şu an süren bir süreci anlatır, ‘by 2050’ ile tamamlanma fikrini vermez."},
    {id:"tenses-04", sub:"ten-continuous", q:"While the archaeologists ---- the site, they ---- a collection of bronze tools buried beneath the floor.", o:["excavated / had discovered","have excavated / discover","had excavated / were discovering","are excavating / discovered","were excavating / discovered"], a:4, e:"‘While’ uzun süren geçmiş eylemi (Past Continuous) verir; araya giren kısa eylem ‘discovered’ Simple Past olur. ‘excavated / had discovered’ keşfi kazıdan önceye atar, anlamsızdır."},
    {id:"tenses-05", sub:"ten-timeclause", q:"The new regulations will not take effect until parliament ---- the bill.", o:["will approve","would approve","approves","approved","had approved"], a:2, e:"Ana cümle gelecek zamanlı (will not take effect); ‘until’ gibi zaman bağlaçlarından sonra gelecek anlamı Simple Present ile verilir. ‘will approve’ zaman bağlacından sonra kullanılmadığı için yanlıştır."},
    {id:"tenses-06", sub:"ten-perfect", q:"So far, researchers ---- more than 200 genes associated with the disease, but its exact cause remains unclear.", o:["identified","had identified","have identified","were identifying","will identify"], a:2, e:"‘So far’ (şimdiye kadar) Present Perfect'in tipik zarfıdır; ‘remains’ de cümlenin şimdiki zamana bağlı olduğunu gösterir. ‘identified’ bitmiş geçmiş anlatır, ‘so far’ ile uyuşmaz."},
    {id:"tenses-07", sub:"ten-pastperf", q:"No sooner ---- the new currency than prices in many shops began to rise sharply.", o:["had the government introduced","the government had introduced","the government introduced","has the government introduced","would the government introduce"], a:0, e:"‘No sooner … than’ cümle başında devrik yapı (inversion) ve Past Perfect ister: No sooner had + özne + V3. ‘the government had introduced’ zamanı doğru ama devrik yapı yapılmadığı için yanlıştır."},
    {id:"tenses-08", sub:"ten-future", q:"This time next year, the engineers ---- the final tests on the prototype, so they will not be available for other projects.", o:["have carried out","carried out","had been carrying out","are carried out","will be carrying out"], a:4, e:"‘This time next year’ gelecekteki belli bir anda sürmekte olacak eylemi anlatır; Future Continuous gerekir. ‘had been carrying out’ geçmişe aittir, gelecekle uyuşmaz."},
    {id:"tenses-09", sub:"ten-continuous", q:"The economy ---- steadily for several years when the financial crisis suddenly ---- in 2008.", o:["grew / has struck","had been growing / struck","has been growing / strikes","was grown / had struck","is growing / was striking"], a:1, e:"‘for several years’ krize kadar süregelen eylemi gösterir: Past Perfect Continuous; ‘in 2008’ ise Simple Past ister. ‘grew / has struck’ seçeneğinde ‘in 2008’ ile Present Perfect kullanılamaz."},
    {id:"tenses-10", sub:"ten-timeclause", q:"As soon as the laboratory ---- the test results, the doctors will decide on the most appropriate treatment.", o:["will receive","would receive","had received","receives","received"], a:3, e:"Ana cümle ‘will decide’ ile gelecek zamanlıdır; ‘as soon as’ zaman bağlacından sonra Simple Present gelir. En çekici çeldirici ‘will receive’ zaman bağlacından sonra will kullanılmadığı için elenir."},
    {id:"tenses-11", sub:"ten-perfect", q:"Global temperatures ---- by roughly 1.1°C since pre-industrial times, and scientists warn that the trend ---- unless emissions are cut.", o:["rose / continued","had risen / would continue","were rising / has continued","have risen / continued","have risen / will continue"], a:4, e:"‘since pre-industrial times’ Present Perfect ister; ‘unless emissions are cut’ ise gelecekteki bir koşuldur, ikinci boşluk ‘will continue’ olmalıdır. ‘have risen / continued’ ilk boşlukta doğru ama ikinci boşlukta gelecek anlamını vermez."},
    {id:"tenses-12", sub:"ten-pastperf", q:"Before the printing press was invented in the fifteenth century, monks ---- books by hand for centuries.", o:["have copied","had been copying","are copying","will have copied","copy"], a:1, e:"Geçmişteki bir olaydan (was invented) önce uzun süre devam etmiş eylem ‘for centuries’ ile Past Perfect Continuous alır. ‘have copied’ bugüne bağlanır, geçmişteki ‘before’ referansıyla uyuşmaz."},
    {id:"tenses-13", sub:"ten-future", q:"According to the schedule, the spacecraft ---- from the launch site at 06:30 tomorrow morning.", o:["has departed","departed","had departed","departs","was departing"], a:3, e:"Resmî program ve tarifeye bağlı gelecek olaylar (according to the schedule) Simple Present ile anlatılır. ‘tomorrow morning’ geçmiş ve perfect seçenekleri tamamen dışarıda bırakır."},
    {id:"tenses-14", sub:"ten-continuous", q:"When the earthquake struck, many of the residents ---- , so they had little time to escape from their homes.", o:["have slept","had slept","were sleeping","are sleeping","will be sleeping"], a:2, e:"Deprem (kısa eylem) geldiğinde süren eylem Past Continuous ile verilir. ‘had slept’ uykunun depremden önce bittiğini ima eder, kaçacak zaman olmaması anlamıyla çelişir."},
    {id:"tenses-15", sub:"ten-timeclause", q:"Once the dam ---- , it will provide electricity to nearly two million households in the region.", o:["has been completed","will be completed","would be completed","had been completed","was being completed"], a:0, e:"‘Once’ zaman bağlacıdır ve ana cümle ‘will provide’ ile gelecek zamanlıdır; bağlaçtan sonra Present Perfect (tamamlanınca) kullanılır. ‘will be completed’ zaman bağlacından sonra will olduğu için yanlıştır."},
    {id:"tenses-16", sub:"ten-perfect", q:"It is the first time that the committee ---- a woman as its chairperson in its 150-year history.", o:["appoints","appointed","had appointed","has appointed","was appointing"], a:3, e:"‘It is the first time that …’ kalıbı Present Perfect ister (‘It was the first time’ olsaydı Past Perfect gelirdi). ‘appointed’ bu kalıpta yanlıştır."},
    {id:"tenses-17", sub:"ten-pastperf", q:"The patient told the doctors that she ---- any unusual symptoms until she ---- the medication.", o:["hasn't noticed / starts","doesn't notice / has started","won't notice / will start","wasn't noticing / has started","hadn't noticed / started"], a:4, e:"Ana fiil ‘told’ geçmişte olduğundan anlatılan olaylar da geçmişe kayar; ilaca başlamadan önceki durum Past Perfect, başlama Simple Past olur. Diğer seçenekler geçmiş bağlamla uyumsuz şimdiki/gelecek zaman içerir."},
    {id:"tenses-18", sub:"ten-future", q:"By the time the new metro line opens, the city ---- over three billion dollars on the project.", o:["will have spent","has spent","had spent","spends","was spending"], a:0, e:"‘By the time + Simple Present’ gelecekteki bir ana kadar tamamlanmış olacak eylemi gösterir; ana cümle Future Perfect alır. ‘had spent’ ‘by the time + past’ ile kullanılır, burada fiil ‘opens’ şimdiki zamandadır."},
    {id:"tenses-19", sub:"ten-continuous", q:"Scientists ---- the effects of microplastics on marine life for over a decade, yet many questions still remain unanswered.", o:["studied","had been studying","have been studying","are studying","will study"], a:2, e:"‘for over a decade’ ve ‘still remain’ geçmişte başlayıp hâlâ süren bir eylemi gösterir: Present Perfect Continuous. ‘had been studying’ geçmişte bitmiş bir referans noktası ister, ‘still remain’ ile çelişir."},
    {id:"tenses-20", sub:"ten-timeclause", q:"When the researchers ---- the data next month, they ---- whether the drug is effective.", o:["analysed / found","analyse / will know","will analyse / know","have analysed / knew","had analysed / would know"], a:1, e:"‘next month’ gelecek anlamı verir; ‘when’ zaman bağlacından sonra Simple Present, ana cümlede will gelir. ‘will analyse / know’ will'i yanlış yere, yani zaman bağlacının içine koyar."}
  ]
});

Object.assign(LESSONS, {
  "ten-perfect": {t:"Present Perfect, since / for / so far", html:`
    <p>Present Perfect (<code class="k">have/has + V3</code>) geçmişte başlayıp bugüne uzanan ya da sonucu bugünü etkileyen eylemleri anlatır. Belli bir geçmiş zaman (in 2008, ago, yesterday) ile <b>kullanılmaz</b>. Süreç vurgulanıyorsa <code class="k">have been V-ing</code> tercih edilir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">since + geçmiş nokta</code> (since 1990, since the crisis began)</li>
      <li><code class="k">for + süre</code> (for decades), <code class="k">over/in the past … years</code></li>
      <li><code class="k">so far, up to now, until now, recently, already, yet</code></li>
      <li><code class="k">It is the first/second time that + Present Perfect</code></li>
    </ul>
    <div class="ex">Since the policy was introduced, unemployment <em>has fallen</em> by 4 percent.<br><span class="muted">since'den sonraki yan cümle Simple Past, ana cümle Present Perfect.</span></div>
    <div class="ex">So far, the probe <em>has sent</em> back thousands of images.</div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘since’ görünce Past Perfect seçmek. Cümlede geçmişte ikinci bir referans (by the time, before + past) yoksa ve ana fiil bugüne bağlıysa (remains, is, still) Present Perfect doğrudur. ‘It was the first time’ olursa Past Perfect gelir.</div>`},
  "ten-pastperf": {t:"Past Perfect & by the time / before / after", html:`
    <p>Past Perfect (<code class="k">had + V3</code>) geçmişteki iki eylemden <b>önce olanı</b> gösterir. Diğer eylem genellikle Simple Past'tır. Süre vurgusu varsa (for years) <code class="k">had been V-ing</code> kullanılır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">By the time + Simple Past, Past Perfect</code></li>
      <li><code class="k">Before + Simple Past, Past Perfect</code> / <code class="k">After + Past Perfect, Simple Past</code></li>
      <li><code class="k">No sooner had + özne + V3 … than + Simple Past</code></li>
      <li><code class="k">Hardly / Scarcely had + özne + V3 … when + Simple Past</code></li>
    </ul>
    <div class="ex">By the time the firefighters <em>arrived</em>, the building <em>had collapsed</em>.<br><span class="muted">Önce çöküş, sonra varış.</span></div>
    <div class="ex"><em>No sooner had</em> the treaty been signed <em>than</em> fighting broke out again.</div>
    <div class="tip"><b>Sık yapılan hata:</b> Paired seçeneklerde sırayı ters çevirmek (had arrived / collapsed). Ayrıca ‘No sooner’ ile başlayan cümlede devrik yapıyı unutmak: ‘No sooner the government had…’ yanlıştır; ‘than’ yerine ‘when’ de kullanılmaz.</div>`},
  "ten-future": {t:"Future forms: Future Perfect & Continuous", html:`
    <p>Gelecek zamanın farklı biçimleri farklı anlamlar taşır. YDS'de özellikle <b>by + gelecek</b> ile Future Perfect ve <b>belli bir gelecek an</b> ile Future Continuous test edilir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">will have V3</code> → by 2030, by the end of the decade, by the time + present</li>
      <li><code class="k">will be V-ing</code> → this time next year, at noon tomorrow</li>
      <li><code class="k">will have been V-ing</code> → by 2030 + for 20 years (süre vurgusu)</li>
      <li><code class="k">Simple Present</code> → tarifeler, programlar (the train leaves at 6)</li>
      <li><code class="k">be going to / be about to / be due to</code> → plan, çok yakın gelecek</li>
    </ul>
    <div class="ex">By the end of this decade, scientists <em>will have mapped</em> every neuron in the fly brain.</div>
    <div class="ex">This time tomorrow, the delegates <em>will be discussing</em> the new climate targets.</div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘by’ gelecek bir tarihle geldiğinde düz ‘will V1’ ya da ‘has V3’ seçmek. ‘by + gelecek’ tamamlanmayı vurgular, bu yüzden Future Perfect gerekir. ‘By the time + past’ ise Past Perfect ister; fiilin zamanına bak.</div>`},
  "ten-continuous": {t:"Continuous tenses: while / when, interrupted actions", html:`
    <p>Sürekli zamanlar bir eylemin belli bir anda <b>devam ettiğini</b> gösterir. Geçmişte süren uzun eylem <code class="k">was/were V-ing</code>, onu kesen kısa eylem Simple Past olur. Belli bir geçmiş olaydan önce bir süredir devam eden eylem için <code class="k">had been V-ing</code>, hâlâ süren için <code class="k">have been V-ing</code> kullanılır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">While + Past Continuous, Simple Past</code></li>
      <li><code class="k">When + Simple Past, Past Continuous</code></li>
      <li><code class="k">had been V-ing + for … when + Simple Past</code></li>
      <li><code class="k">have been V-ing + for/since</code> (hâlâ sürüyor)</li>
    </ul>
    <div class="ex">The volcano <em>had been showing</em> signs of activity for weeks when it finally <em>erupted</em>.</div>
    <div class="ex">While the researchers <em>were collecting</em> samples, a storm <em>hit</em> the coast.<br><span class="muted">Uzun eylem sürerken kısa eylem araya girer.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Kesilen eylem için Past Perfect seçmek (‘When the storm hit, they had slept’). Past Perfect eylemin bittiğini gösterir; eylem o anda sürüyorsa Past Continuous gerekir. Durum fiilleri (know, belong, contain) genellikle -ing almaz.</div>`},
  "ten-timeclause": {t:"Time clauses: when / until / as soon as / once", html:`
    <p>Zaman bağlaçlarıyla kurulan yan cümlelerde <b>gelecek anlamı için will kullanılmaz</b>. Yan cümlede Simple Present (ya da tamamlanmayı vurgulamak için Present Perfect), ana cümlede will / Future Perfect / emir kipi gelir. Geçmiş bağlamda ise iki cümle de geçmiş zamana kayar.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">when / as soon as / once / after / before / until + Simple Present, will V1</code></li>
      <li><code class="k">once / after + Present Perfect, will V1</code> (önce tamamlanma)</li>
      <li><code class="k">by the time + Simple Present, will have V3</code></li>
      <li><code class="k">Geçmişte: when + Simple Past, Simple Past / Past Perfect</code></li>
    </ul>
    <div class="ex">The vaccine will be distributed <em>as soon as</em> it <em>is approved</em>.</div>
    <div class="ex">We won't publish the findings <em>until</em> the experiment <em>has been repeated</em>.<br><span class="muted">Yan cümlede will yok; Present Perfect tamamlanmayı vurgular.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Ana cümle gelecek zamanlı diye yan cümleye de ‘will’ koymak. ÖSYM bu seçeneği neredeyse her zaman çeldirici olarak verir. Önce hangi cümlenin bağlaç taşıdığını bul; will sadece bağlaçsız ana cümlede olur.</div>`}
});

TOPIC_BANK.push({
  id: "modals",
  n: "Modals — Kip Fiilleri",
  s: "Olasılık, çıkarım, zorunluluk ve yetenek",
  week: 1,
  html: `
    <p>Modal fiiller ihtimal, tahmin, zorunluluk, tavsiye ve yetenek bildirir. Kendilerinden sonra <b>yalın fiil (V1)</b> gelir; geçmişe yönelik anlam <code class="k">modal + have + V3</code> ile kurulur. YDS'de özellikle <b>geçmişe yönelik çıkarım</b> ve <b>anlam ayrımları</b> (needn't have / didn't need to, could / was able to) sık çıkar. Soruyu çözerken önce cümlenin geri kalanındaki kanıta bak: kesinlik mi, olasılık mı, eleştiri mi?</p>
    <h4>Geçmişe dönük modallar</h4>
    <ul>
      <li><code class="k">must have V3</code> → kesin geçmiş çıkarım ("kesin …-mıştır")</li>
      <li><code class="k">can't / couldn't have V3</code> → imkânsız geçmiş ("…-mış olamaz")</li>
      <li><code class="k">may/might/could have V3</code> → olası geçmiş ("…-mış olabilir")</li>
      <li><code class="k">should / ought to have V3</code> → yapılmayan ama yapılması gereken ("…-malıydı")</li>
      <li><code class="k">needn't have V3</code> → gereksiz yere yapılan ("gerek yoktu")</li>
    </ul>
    <h4>Zorunluluk, tavsiye, yetenek</h4>
    <ul>
      <li><code class="k">must / have to</code> → zorunluluk · <code class="k">mustn't</code> → yasak · <code class="k">don't have to / needn't</code> → gerek yok</li>
      <li><code class="k">should / ought to / had better</code> → tavsiye (had better daha güçlü, uyarı içerir)</li>
      <li><code class="k">can / could / be able to / manage to</code> → yetenek; tek seferlik geçmiş başarı için <em>was able to / managed to</em></li>
      <li><code class="k">used to / would</code> → geçmiş alışkanlık · <code class="k">be/get used to + V-ing</code> → alışkın olmak/alışmak</li>
    </ul>
    <div class="ex">The lights are off; she <em>must have left</em> already.</div>
    <div class="ex">Despite the storm, the crew <em>managed to reach</em> the shore.<br><span class="muted">Tek seferlik başarı: could değil.</span></div>
    <div class="tip"><b>Ayrım:</b> <code class="k">didn't need to V</code> = gerekmedi (genelde yapılmadı) · <code class="k">needn't have V3</code> = gerekmezdi ama yapıldı. <code class="k">used to V1</code> ≠ <code class="k">be used to V-ing</code>.</div>`,
  qs: [
    {id:"modals-01", sub:"mod-pastdeduction", q:"The ancient city ---- a major trading centre, as coins from as far away as China have been found among its ruins.", o:["should have been","needn't have been","must have been","can't have been","had better have been"], a:2, e:"Çin'den gelen sikkeler güçlü bir kanıttır ve geçmişe dair kesin çıkarım ‘must have been’ ile yapılır. ‘can't have been’ kanıtın tersini söyler; ‘should have been’ ise eleştiri bildirir, çıkarım değil."},
    {id:"modals-02", sub:"mod-obligation", q:"Since the museum offered free admission that day, we ---- buy tickets, so we spent the money on a guidebook instead.", o:["mustn't","needn't have","shouldn't","couldn't","didn't have to"], a:4, e:"Giriş ücretsiz olduğu için bilet almak gerekmedi ve alınmadı: ‘didn't have to + V1’. ‘needn't have’ ardından V3 ister (needn't have bought) ve eylemin yapıldığını gösterir; ‘mustn't’ yasak bildirir."},
    {id:"modals-03", sub:"mod-advice", q:"The authorities ---- the residents earlier; if they had, far fewer people would have been trapped by the floodwaters.", o:["should have warned","must have warned","can't have warned","would warn","had better warn"], a:0, e:"‘if they had’ uyarının yapılmadığını gösterir; yapılmayan ama yapılması gereken eylem için ‘should have V3’ kullanılır. ‘must have warned’ uyarının yapıldığına dair kesin çıkarım olur, cümleyle çelişir."},
    {id:"modals-04", sub:"mod-ability", q:"Although the fire spread rapidly through the building, all the workers ---- escape before the roof collapsed.", o:["could","can","must","were able to","ought to"], a:3, e:"Geçmişte belirli bir durumda başarılan tek seferlik eylem için olumlu cümlede ‘could’ değil ‘was/were able to’ ya da ‘managed to’ kullanılır. ‘could’ genel geçmiş yetenek bildirir, bu yüzden çekici ama yanlıştır."},
    {id:"modals-05", sub:"mod-habit", q:"Before refrigeration became widespread, people ---- preserve meat by salting or smoking it.", o:["are used to","used to","get used to","would rather","must have"], a:1, e:"Artık yapılmayan geçmiş alışkanlık ‘used to + V1’ ile anlatılır. ‘are used to’ ve ‘get used to’ ardından V-ing ister ve ‘alışkın olmak / alışmak’ anlamındadır; ayrıca şimdiki zamandadır."},
    {id:"modals-06", sub:"mod-pastdeduction", q:"The dinosaur fossils ---- to that location by floodwater, because they show no signs of transport damage and lie in their original position.", o:["can't have been carried","must have been carried","should have been carried","needn't have been carried","had to be carried"], a:0, e:"Fosillerde taşınma izi olmaması, sel ile taşınmış olmalarının imkânsız olduğunu gösterir: ‘can't have been V3’. ‘must have been carried’ kanıtın tam tersini iddia eder."},
    {id:"modals-07", sub:"mod-obligation", q:"Under the new law, all food manufacturers ---- list potential allergens clearly on their product labels.", o:["needn't","might","would rather","have to","used to"], a:3, e:"‘Under the new law’ dışsal bir zorunluluk bildirir; ‘have to + V1’ uygundur. ‘needn't’ gereklilik olmadığını söyler ve yasa ifadesiyle çelişir; ‘might’ sadece olasılıktır."},
    {id:"modals-08", sub:"mod-advice", q:"Given the rising number of cyber attacks, companies ---- update their security systems regularly, or they risk losing sensitive data.", o:["needn't","had better","might have","used to","couldn't"], a:1, e:"‘or they risk …’ bir uyarı içerir; güçlü tavsiye/uyarı ‘had better + V1’ ile verilir. ‘might have’ ardından V3 ister ve geçmiş olasılık bildirir; ‘needn't’ uyarıyla çelişir."},
    {id:"modals-09", sub:"mod-ability", q:"Thanks to advances in satellite technology, meteorologists ---- predict hurricanes far more accurately than they could a few decades ago.", o:["must have","used to","should have","were able to","are now able to"], a:4, e:"‘than they could a few decades ago’ geçmişle bugünü karşılaştırır; boşluk bugünkü yeteneği anlatmalıdır: ‘are now able to’. ‘were able to’ da geçmişi anlattığı için karşılaştırmayı anlamsızlaştırır."},
    {id:"modals-10", sub:"mod-habit", q:"Having lived in Tokyo for ten years, the researcher ---- the crowded trains and no longer finds them stressful.", o:["used to","would","is used to","is using to","was used to be"], a:2, e:"Uzun süre yaşamanın sonucu olarak bugün bir şeye alışkın olmak ‘be used to + isim/V-ing’ ile anlatılır; ‘finds’ şimdiki zamandır. ‘used to’ ardından V1 ister ve artık geçerli olmayan geçmiş alışkanlık anlamı verir."},
    {id:"modals-11", sub:"mod-pastdeduction", q:"The results of the experiment are inconsistent; the samples ---- contaminated during storage, but we cannot be certain.", o:["must have been","can't have been","should have been","might have been","needn't have been"], a:3, e:"‘but we cannot be certain’ kesinlik olmadığını, sadece olasılık bulunduğunu gösterir: ‘might have been’. ‘must have been’ kesin çıkarım bildirdiği için bu ifadeyle çelişir."},
    {id:"modals-12", sub:"mod-obligation", q:"The expedition team ---- so much bottled water, as there turned out to be clean springs along the entire route.", o:["needn't have carried","didn't need carry","mustn't have carried","couldn't carry","had to carry"], a:0, e:"Su taşındı ama sonradan gereksiz olduğu anlaşıldı (turned out); gereksiz yere yapılan eylem ‘needn't have V3’ ile anlatılır. ‘didn't need carry’ ‘to’ eksik olduğu için dilbilgisel olarak hatalıdır; ‘had to carry’ gereksizlik anlamını vermez."},
    {id:"modals-13", sub:"mod-advice", q:"The project failed mainly because the managers ignored the early warning signs; they ---- more attention to the feedback from employees.", o:["must pay","could pay","ought to have paid","had better pay","needn't have paid"], a:2, e:"Geçmişte yapılmayan ve eleştirilen davranış ‘ought to have / should have V3’ ile anlatılır. ‘had better pay’ şimdi/gelecek için uyarıdır, geçmişteki başarısızlığa uymaz."},
    {id:"modals-14", sub:"mod-ability", q:"Despite the heavy snowstorm, the pilot ---- land the plane safely at a nearby airport.", o:["could","managed to","can","was able","succeeded to"], a:1, e:"Zorluğa rağmen (despite) geçmişte başarılan tek seferlik eylem ‘managed to + V1’ ile anlatılır. ‘could’ belirli başarı için kullanılmaz; ‘was able’ ‘to’ eksik, ‘succeeded’ ise ‘in + V-ing’ ister."},
    {id:"modals-15", sub:"mod-habit", q:"When he was a young scientist, Einstein ---- long walks during which he would think through complex problems.", o:["is used to taking","gets used to take","was used to take","has used to take","used to take"], a:4, e:"Geçmişte düzenli yapılan alışkanlık ‘used to + V1’ ile anlatılır; cümledeki ‘would think’ de geçmiş alışkanlığı destekler. ‘was used to take’ yanlıştır çünkü ‘be used to’ ardından V-ing gelir."},
    {id:"modals-16", sub:"mod-pastdeduction", q:"Shakespeare ---- the play, since it refers to events that happened several years after his death.", o:["must have written","can't have written","should have written","needn't have written","had to write"], a:1, e:"Oyun yazarın ölümünden sonraki olaylardan söz ettiğine göre onu yazmış olması imkânsızdır: ‘can't have V3’. ‘must have written’ mantıksal kanıtın tersini söyler."},
    {id:"modals-17", sub:"mod-obligation", q:"Visitors ---- touch the exhibits, as even minor contact can damage the fragile surfaces.", o:["don't have to","needn't","mustn't","wouldn't","didn't need to"], a:2, e:"Zarar verme gerekçesi bir yasak bildirir: ‘mustn't’. ‘don't have to’ ve ‘needn't’ sadece ‘gerek yok’ anlamındadır, dokunmayı serbest bırakır; en sık düşülen tuzak budur."},
    {id:"modals-18", sub:"mod-advice", q:"Doctors advise that patients with high blood pressure ---- reduce their salt intake.", o:["must have","used to","would rather","needn't","should"], a:4, e:"‘advise that’ tavsiye bildirir ve ardından ‘should + V1’ gelir. ‘must have’ geçmiş çıkarım ve V3 ister; ‘needn't’ tavsiyenin tam tersidir."},
    {id:"modals-19", sub:"mod-ability", q:"Before the development of the telescope, astronomers ---- observe the moons of Jupiter.", o:["weren't able to","can't","mustn't","needn't have","haven't been able to"], a:0, e:"Teleskoptan önceki geçmiş dönemde yeteneğin olmaması ‘weren't able to / couldn't’ ile anlatılır. ‘haven't been able to’ bugüne uzanan bir dönem anlatır, ‘before the development of the telescope’ ise kapanmış geçmiştir."},
    {id:"modals-20", sub:"mod-habit", q:"Immigrants often find it difficult at first, but most eventually ---- the local customs and climate.", o:["used to","are used to adapt","would","get used to","use to"], a:3, e:"‘at first … eventually’ zamanla alışma sürecini anlatır: ‘get used to + isim’. ‘used to’ geçmiş alışkanlıktır ve ardından fiil ister; ‘are used to adapt’ ise ‘to’dan sonra V1 kullandığı için hatalıdır."}
  ]
});

Object.assign(LESSONS, {
  "mod-pastdeduction": {t:"Past deduction: must / can't / might have V3", html:`
    <p>Geçmişte olmuş bir şey hakkında kanıta dayalı tahmin yürütürken <code class="k">modal + have + V3</code> kullanılır. Doğru modalı seçmek için cümledeki <b>kanıtın gücüne</b> bak: kesin mi, imkânsız mı, yoksa sadece olası mı?</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">must have V3</code> → güçlü kanıt, %90 emin ("kesin …-mış")</li>
      <li><code class="k">can't / couldn't have V3</code> → mantıken imkânsız ("…-mış olamaz")</li>
      <li><code class="k">may / might / could have V3</code> → olası, emin değil</li>
      <li>Edilgen: <code class="k">must have been V3</code></li>
    </ul>
    <div class="ex">The ground is wet; it <em>must have rained</em> during the night.</div>
    <div class="ex">He <em>can't have seen</em> the report — it was only released this morning.<br><span class="muted">Mantıksal imkânsızlık → can't have.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘should have V3’ ile ‘must have V3’ karıştırmak. ‘should have’ çıkarım değil eleştiridir (yapılmalıydı ama yapılmadı). Ayrıca ‘but we are not sure / possibly’ gibi ifadeler varsa ‘must’ değil ‘might/may/could have’ seç. Olumsuz çıkarımda ‘mustn't have’ kullanılmaz; ‘can't have’ gerekir.</div>`},
  "mod-obligation": {t:"Obligation: must / have to / needn't have / didn't need to", html:`
    <p>Zorunluluk, yasak ve gereksizlik anlamları birbirine çok yakın göründüğü için YDS'de sık test edilir. Özellikle olumsuz biçimlerin anlamı farklıdır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">must / have to + V1</code> → zorunluluk (have to daha çok dışsal kural)</li>
      <li><code class="k">mustn't + V1</code> → yasak</li>
      <li><code class="k">don't have to / needn't + V1</code> → gerek yok (serbest)</li>
      <li><code class="k">didn't need to / didn't have to + V1</code> → geçmişte gerekmedi (genelde yapılmadı)</li>
      <li><code class="k">needn't have V3</code> → gerekmezdi ama yapıldı</li>
    </ul>
    <div class="ex">We <em>needn't have booked</em> a table; the restaurant was almost empty.<br><span class="muted">Rezervasyon yapıldı ama gereksizdi.</span></div>
    <div class="ex">Passengers <em>mustn't</em> leave their luggage unattended.</div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘mustn't’ ile ‘don't have to’ yu eş anlamlı sanmak. Biri yasak, diğeri serbestliktir. Geçmişte ‘needn't have’ görürsen ardından V3 geldiğini ve eylemin gerçekten yapıldığını kontrol et; ‘didn't need to’ ardından V1 gelir.</div>`},
  "mod-advice": {t:"Advice: should / ought to / had better / should have V3", html:`
    <p>Tavsiye ve eleştiri modalları bugün/gelecek için yalın fiil, geçmiş için <code class="k">have + V3</code> alır. Geçmiş biçim her zaman <b>yapılmamış bir şeyin eleştirisi</b> (ya da yapılmış bir hatanın) anlamındadır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">should / ought to + V1</code> → tavsiye</li>
      <li><code class="k">had better (not) + V1</code> → güçlü tavsiye/uyarı, genelde ‘or …’ ile</li>
      <li><code class="k">should / ought to have V3</code> → yapılmalıydı (yapılmadı)</li>
      <li><code class="k">shouldn't have V3</code> → yapılmamalıydı (yapıldı)</li>
      <li><code class="k">advise / recommend / suggest that + (should) V1</code></li>
    </ul>
    <div class="ex">The bank <em>should have assessed</em> the risks before lending such large sums.<br><span class="muted">Değerlendirme yapılmadı → eleştiri.</span></div>
    <div class="ex">You <em>had better back up</em> your files, or you may lose them.</div>
    <div class="tip"><b>Sık yapılan hata:</b> Geçmişteki bir hatayı anlatan cümlede ‘had better’ seçmek; had better geçmiş için kullanılmaz. Ayrıca ‘had better’ ardından ‘to’ gelmez (had better to go yanlış). ‘if they had …’ gibi ipuçları eylemin yapılmadığını gösterir ve ‘should have V3’ ister.</div>`},
  "mod-ability": {t:"Ability: can / could / be able to / managed to", html:`
    <p>Yetenek bildiren yapılar zamana ve anlama göre değişir. <code class="k">can</code> sadece şimdiki zamanda, <code class="k">could</code> genel geçmiş yetenekte kullanılır. Diğer zamanlar (perfect, future, infinitive) için <code class="k">be able to</code> gerekir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">could + V1</code> → geçmişte genel yetenek (She could read at four.)</li>
      <li><code class="k">was/were able to, managed to + V1</code> → belirli bir durumda başarılan eylem</li>
      <li><code class="k">couldn't / wasn't able to</code> → olumsuzda ikisi de olur</li>
      <li><code class="k">will be able to / have been able to</code> → gelecek ve perfect</li>
      <li><code class="k">succeed in + V-ing</code> (succeed to değil)</li>
    </ul>
    <div class="ex">Although the engine failed, the crew <em>managed to land</em> safely.</div>
    <div class="ex">Researchers <em>have not been able to</em> replicate the results so far.<br><span class="muted">Present Perfect → be able to.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘despite / although’ ile anlatılan tek seferlik geçmiş başarıda ‘could’ seçmek. Olumlu cümlede belirli başarı için ‘was able to / managed to’ gerekir. Ayrıca ‘so far / since’ gibi Present Perfect ipuçlarında ‘could’ değil ‘have been able to’ kullanılır.</div>`},
  "mod-habit": {t:"Habit: used to / would / be used to / get used to", html:`
    <p>Bu yapılar biçimce benzer ama anlamca çok farklıdır. <code class="k">used to + V1</code> artık yapılmayan geçmiş alışkanlık ya da durumu; <code class="k">be used to + V-ing</code> bir şeye alışkın olmayı; <code class="k">get used to + V-ing</code> alışma sürecini anlatır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">used to + V1</code> → eskiden …-ardı (durum ve eylem)</li>
      <li><code class="k">would + V1</code> → eskiden …-ardı (sadece tekrarlanan eylem, durum değil)</li>
      <li><code class="k">be used to + isim / V-ing</code> → alışkın olmak</li>
      <li><code class="k">get / become used to + isim / V-ing</code> → alışmak</li>
      <li>Olumsuz/soru: <code class="k">didn't use to / did … use to</code></li>
    </ul>
    <div class="ex">Sailors <em>used to navigate</em> by the stars.</div>
    <div class="ex">After a few months, the volunteers <em>got used to working</em> in extreme heat.<br><span class="muted">‘to’ burada edattır → V-ing.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘be/get used to’ dan sonra V1 getirmek (is used to work yanlış). Bu yapıdaki ‘to’ edattır. Ayrıca ‘would’ durum fiilleriyle kullanılmaz: ‘There would be a forest here’ geçmiş durum anlamında yanlış, ‘used to be’ doğrudur.</div>`}
});

TOPIC_BANK.push({
  id: "passive",
  n: "Passive Voice & Causatives",
  s: "Edilgen yapı, ettirgenlik ve rapor kalıpları",
  week: 1,
  html: `
    <p>Edilgen yapı, eylemi yapanı değil eylemin kendisini ya da etkilenen nesneyi öne çıkarır: <code class="k">be + V3</code>. Akademik ve haber metinlerinde çok yaygındır. YDS'de önce <b>özne eylemi yapabilir mi?</b> sorusunu sor: ‘The bridge built…’ olamaz, köprü inşa edilir. Sonra zaman ipucuna göre ‘be’ fiilini çekimle.</p>
    <h4>Zamanlara göre passive</h4>
    <ul>
      <li>Present: is/are done · Past: was/were done</li>
      <li>Perfect: has/have been done · had been done · will have been done</li>
      <li>Continuous: is being done / was being done</li>
      <li>Modal: must be done · should have been done · can't have been done</li>
    </ul>
    <h4>Rapor kalıpları (Reporting passive)</h4>
    <ul>
      <li><code class="k">It is said / believed / thought that + cümle</code></li>
      <li><code class="k">Özne + is believed + to V1</code> (şimdi/genel) · <code class="k">to have V3</code> (geçmiş)</li>
      <li><code class="k">to have been V3</code> → geçmiş + edilgen</li>
    </ul>
    <h4>Causatives (Ettirgen)</h4>
    <ul>
      <li><code class="k">have / get + nesne + V3</code> → başkasına yaptırmak: <em>I had my car repaired.</em></li>
      <li><code class="k">have + kişi + V1</code> · <code class="k">get + kişi + to V1</code></li>
      <li><code class="k">make + kişi + V1</code> → zorlamak · <code class="k">let + kişi + V1</code> → izin vermek</li>
    </ul>
    <h4>Edilgen mastar ve isim-fiil</h4>
    <ul>
      <li><code class="k">to be done</code> · <code class="k">being done</code> · <code class="k">having been done</code></li>
    </ul>
    <div class="ex">The council <em>had the old bridge demolished</em> last year.</div>
    <div class="ex">The manuscript <em>is believed to have been written</em> in the 12th century.<br><span class="muted">Geçmiş olay + edilgen → to have been V3.</span></div>
    <div class="tip"><b>İpucu:</b> Seçeneklerde aktif ve edilgen aynı zamanda verildiyse karar nesneye bağlıdır: boşluktan sonra nesne varsa aktif, yoksa ve özne etkilenen taraf ise edilgen seç.</div>`,
  qs: [
    {id:"passive-01", sub:"pas-tense", q:"The Great Wall of China ---- over many centuries by successive dynasties.", o:["built","has built","is building","was built","had been building"], a:3, e:"Duvar kendini inşa edemez ve ‘by successive dynasties’ eylemi yapanı gösterir; geçmiş edilgen ‘was built’ gerekir. ‘built’ aktif anlam verir ve nesne eksik kalır."},
    {id:"passive-02", sub:"pas-modal", q:"The ancient manuscript ---- by moisture, since the ink on several pages has faded and the paper is badly stained.", o:["must have been damaged","must have damaged","should be damaged","can't have been damaged","had better be damaged"], a:0, e:"Soluk mürekkep ve lekeler geçmişte nem hasarına dair kesin kanıttır; el yazması etkilenen taraf olduğu için ‘must have been damaged’ gerekir. ‘must have damaged’ aktiftir ve el yazmasını hasar veren konuma koyar."},
    {id:"passive-03", sub:"pas-causative", q:"Before publishing the study, the researchers ---- their statistical analysis ---- by an independent expert.", o:["made / checking","let / checked","had / checked","got / check","made / to check"], a:2, e:"Bir işi başkasına yaptırmak ‘have + nesne + V3’ ile anlatılır; ‘by an independent expert’ yapanı gösterir. ‘got / check’ yanlıştır çünkü ‘get + nesne’ ardından V3 ister; ‘let’ ise V3 ile kullanılmaz."},
    {id:"passive-04", sub:"pas-reporting", q:"The painting ---- by Leonardo da Vinci in the early 1500s, although some experts dispute this attribution.", o:["believes to paint","is believing to have painted","was believed painting","is believed to be painted","is believed to have been painted"], a:4, e:"Tablo geçmişte (early 1500s) yapıldığı ve etkilenen taraf olduğu için ‘is believed + to have been V3’ gerekir. ‘is believed to be painted’ şimdiki/genel zaman bildirir, geçmiş olayla uyuşmaz."},
    {id:"passive-05", sub:"pas-infger", q:"Most employees expect ---- fairly and consistently by their managers.", o:["treating","to be treated","being treated","to treat","having treated"], a:1, e:"‘expect’ ardından mastar (to V1) alır; çalışanlar muameleye maruz kalan taraf olduğu ve ‘by their managers’ bulunduğu için edilgen mastar ‘to be treated’ gerekir. ‘to treat’ aktif anlam verir."},
    {id:"passive-06", sub:"pas-tense", q:"Currently, a new bridge ---- across the river, and it is expected to open next spring.", o:["builds","has built","is building","was being built","is being built"], a:4, e:"‘Currently’ şu anda süren bir eylemi gösterir ve köprü inşa edilen taraftır: Present Continuous Passive ‘is being built’. ‘is building’ aktif olduğundan köprüyü inşa eden gibi gösterir."},
    {id:"passive-07", sub:"pas-modal", q:"All the data ---- carefully before any conclusions can be drawn from the survey.", o:["must analyse","should have analysed","must be analysed","can't have been analysed","ought to analyse"], a:2, e:"Veriler analiz edilen taraftır ve gelecekteki bir gereklilik anlatılır: ‘must be analysed’. ‘must analyse’ ve ‘ought to analyse’ aktif olup nesne gerektirir; ‘should have analysed’ geçmiş eleştiridir."},
    {id:"passive-08", sub:"pas-causative", q:"The government finally let the journalists ---- the refugee camp after weeks of negotiations.", o:["visit","to visit","visited","visiting","to be visited"], a:0, e:"‘let + kişi + V1’ kalıbında ‘to’ kullanılmaz. En çekici çeldirici ‘to visit’ tir; ‘allow + kişi + to V1’ ile karıştırılır."},
    {id:"passive-09", sub:"pas-reporting", q:"It ---- that the ancient Egyptians used simple ramps to move the massive stones used in the pyramids.", o:["thinks","has thought","was thinking","is thought","is thought to"], a:3, e:"‘It + is thought + that-cümlesi’ kişisiz rapor kalıbıdır. ‘is thought to’ ardından that değil fiil gelir; ‘thinks’ ise ‘it’ öznesiyle aktif anlamda anlamsızdır."},
    {id:"passive-10", sub:"pas-infger", q:"The minister denied ---- by the lobbying group, insisting that his decisions had been entirely independent.", o:["to influence","having been influenced","to have influenced","having influenced","being influencing"], a:1, e:"‘deny’ ardından V-ing alır; etkilenme inkârdan önce olduğu ve bakan etkilenen taraf olduğu için perfect edilgen isim-fiil ‘having been influenced’ gerekir. ‘having influenced’ aktif olup bakanı etkileyen konumuna koyar."},
    {id:"passive-11", sub:"pas-tense", q:"By the end of the nineteenth century, most of the region's forests ---- to make way for farmland.", o:["have been cleared","had been cleared","were clearing","are cleared","had cleared"], a:1, e:"‘By the end of + geçmiş’ Past Perfect ister ve ormanlar temizlenen taraftır: ‘had been cleared’. ‘had cleared’ aktif olduğu için ormanları temizleyen gibi gösterir."},
    {id:"passive-12", sub:"pas-modal", q:"The accident ---- if the safety inspections had been carried out as required.", o:["must have prevented","should be prevented","can't be prevented","could have been prevented","might prevent"], a:3, e:"‘if … had been carried out’ geçmişe yönelik gerçekleşmemiş bir koşuldur; kaza önlenen taraf olduğu için ‘could have been prevented’ gerekir. ‘must have prevented’ hem aktif hem de kesin çıkarım bildirir."},
    {id:"passive-13", sub:"pas-causative", q:"The factory owners made the workers ---- twelve hours a day, which led to widespread protests.", o:["to work","working","worked","to be worked","work"], a:4, e:"Aktif ‘make + kişi + V1’ kalıbında ‘to’ kullanılmaz. ‘to work’ sadece edilgen biçimde (the workers were made to work) doğrudur."},
    {id:"passive-14", sub:"pas-reporting", q:"The virus ---- from bats to humans several years ago, according to several recent studies.", o:["is thought to have spread","is thought to spread","thinks to have spread","is thinking to have spread","has thought to spread"], a:0, e:"Rapor (is thought) bugüne ait, yayılma ise geçmişte (several years ago) olduğu için perfect mastar ‘to have spread’ gerekir. ‘is thought to spread’ genel/şimdiki zaman anlamı verir ve ‘ago’ ile uyuşmaz."},
    {id:"passive-15", sub:"pas-infger", q:"The children were delighted at ---- to the science museum as a reward for their hard work.", o:["to be taken","taking","being taken","to take","have been taken"], a:2, e:"Edattan (at) sonra V-ing gelir; çocuklar götürülen taraf olduğu için edilgen isim-fiil ‘being taken’ doğrudur. ‘taking’ aktif anlam verir, ‘to be taken’ edattan sonra kullanılamaz."},
    {id:"passive-16", sub:"pas-tense", q:"Since 2010, more than a thousand new species ---- in the Amazon rainforest.", o:["have been discovered","were discovered","had discovered","are discovering","have discovered"], a:0, e:"‘Since 2010’ Present Perfect ister ve türler keşfedilen taraftır: ‘have been discovered’. ‘have discovered’ aktiftir, türleri keşfeden gibi gösterir."},
    {id:"passive-17", sub:"pas-modal", q:"The medicine ---- in a cool, dry place, or it may lose its effectiveness.", o:["should keep","should be kept","must have been kept","can't have kept","needn't be kept"], a:1, e:"İlaç saklanan taraftır ve bir tavsiye/gereklilik anlatılır: ‘should be kept’. ‘should keep’ aktiftir ve nesne ister; ‘needn't be kept’ uyarıyla çelişir."},
    {id:"passive-18", sub:"pas-causative", q:"Patients who want to travel abroad must get their vaccinations ---- at least two weeks before departure.", o:["update","to update","updated","updating","to be updating"], a:2, e:"‘get + nesne (their vaccinations) + V3’ bir işi yaptırmayı anlatır; aşılar güncellenen taraftır. ‘to update’ ancak nesne kişi olduğunda (get the nurse to update) kullanılır."},
    {id:"passive-19", sub:"pas-reporting", q:"The economy ---- by 3 percent next year, according to the central bank's latest report.", o:["is expected growing","expects to be grown","was said to have grown","is expecting to grow","is expected to grow"], a:4, e:"‘next year’ gelecekteki bir durumu anlatır; rapor kalıbı ‘is expected + to V1’ olur. ‘was said to have grown’ geçmişte olmuş bir büyümeyi anlatır, ‘next year’ ile çelişir; ekonomi bir şey ‘beklemediği’ için ‘is expecting’ de anlamsızdır."},
    {id:"passive-20", sub:"pas-infger", q:"---- about the dangers of the approaching storm, the fishermen stayed in the harbour.", o:["Warning","Having warned","To warn","Having been warned","Being warning"], a:3, e:"Balıkçılar uyarılan taraftır ve uyarı limanda kalmadan önce gerçekleşmiştir: perfect edilgen ‘Having been warned’. ‘Having warned’ aktif olup balıkçıları başkalarını uyaran konumuna koyar."}
  ]
});

Object.assign(LESSONS, {
  "pas-tense": {t:"Passive across tenses", html:`
    <p>Edilgen yapıda zaman bilgisini <b>be</b> fiili taşır, ana fiil her zaman V3 olur. Aktif cümlenin zamanı ne ise edilgen cümlede ‘be’ o zamana çekimlenir. Özne eylemi yapamıyorsa (bina, veri, tür, orman) edilgen gerekir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">is/are V3</code> · <code class="k">was/were V3</code></li>
      <li><code class="k">is/are being V3</code> · <code class="k">was/were being V3</code></li>
      <li><code class="k">has/have been V3</code> · <code class="k">had been V3</code></li>
      <li><code class="k">will be V3</code> · <code class="k">will have been V3</code></li>
    </ul>
    <div class="ex">Over the past decade, thousands of solar panels <em>have been installed</em> across the country.<br><span class="muted">Zaman zarfı → Present Perfect; paneller kurulan taraf → edilgen.</span></div>
    <div class="ex">When we arrived, the samples <em>were being tested</em>.</div>
    <div class="tip"><b>Sık yapılan hata:</b> Zamanı doğru seçip çatıyı (aktif/edilgen) kaçırmak. ÖSYM genellikle ‘have discovered / have been discovered’ gibi aynı zamanda iki seçenek verir. Boşluktan sonra nesne yoksa ve özne eylemi yapamıyorsa edilgen seç. Continuous passive'de ‘being’ i unutma.</div>`},
  "pas-modal": {t:"Modal & perfect passive: must have been done", html:`
    <p>Modal fiillerle edilgen yapı <code class="k">modal + be + V3</code>, geçmişe yönelik olanı ise <code class="k">modal + have been + V3</code> ile kurulur. Anlam, modalın kendi anlamıdır (zorunluluk, çıkarım, eleştiri, olasılık).</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">must / should / can / may + be V3</code> → şimdi/gelecek</li>
      <li><code class="k">must have been V3</code> → kesin geçmiş çıkarım</li>
      <li><code class="k">can't have been V3</code> → imkânsız geçmiş</li>
      <li><code class="k">should have been V3</code> → yapılmalıydı</li>
      <li><code class="k">could have been V3</code> → yapılabilirdi (ama yapılmadı), çoğu kez ‘if … had’ ile</li>
    </ul>
    <div class="ex">The tragedy <em>could have been avoided</em> if the warnings had been taken seriously.</div>
    <div class="ex">Applications <em>must be submitted</em> by 30 June.<br><span class="muted">Başvurular gönderilen taraf → edilgen.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘must have damaged’ ile ‘must have been damaged’ arasında aceleyle seçim yapmak. Özneye bak: etkilenen tarafsa ‘been’ şarttır. Ayrıca geçmişe dair ‘if … had been’ koşulu varsa ‘could/would have been V3’, şimdiki bir kural varsa ‘must be V3’ seç.</div>`},
  "pas-causative": {t:"Causatives: have / get / make / let", html:`
    <p>Ettirgen yapılar bir işi başkasına yaptırmayı, birini bir şeye zorlamayı ya da izin vermeyi anlatır. Kalıba göre fiil biçimi (V1, to V1, V3) değişir; YDS'de tam olarak bu biçim ayrımı sorulur.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">have / get + nesne (şey) + V3</code> → yaptırmak</li>
      <li><code class="k">have + kişi + V1</code> · <code class="k">get + kişi + to V1</code></li>
      <li><code class="k">make + kişi + V1</code> → zorlamak (edilgen: be made <u>to</u> V1)</li>
      <li><code class="k">let + kişi + V1</code> → izin vermek · <code class="k">allow + kişi + to V1</code></li>
    </ul>
    <div class="ex">The hospital <em>had its equipment inspected</em> by external auditors.</div>
    <div class="ex">The regime <em>made</em> citizens <em>carry</em> identity cards at all times.<br><span class="muted">Edilgende: Citizens were made to carry…</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> ‘let/make’ ten sonra ‘to’ koymak ya da ‘get + şey’ ten sonra V1 kullanmak. Önce nesnenin kişi mi şey mi olduğuna bak: şey ise V3; kişi ise have/make/let → V1, get/allow → to V1.</div>`},
  "pas-reporting": {t:"Reporting passive: it is said that / is believed to have V3", html:`
    <p>Haber ve bilim metinlerinde bilginin kaynağını belirtmeden aktarmak için rapor kalıpları kullanılır (say, believe, think, report, expect, consider, claim). İki yapı vardır: kişisiz <b>It</b> yapısı ve kişisel <b>özne + mastar</b> yapısı.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">It is said / believed that + cümle</code></li>
      <li><code class="k">Özne + is said + to V1</code> → aynı zaman / gelecek</li>
      <li><code class="k">Özne + is said + to be V-ing</code> → şu an sürüyor</li>
      <li><code class="k">Özne + is said + to have V3</code> → daha önce oldu</li>
      <li><code class="k">Özne + is said + to have been V3</code> → daha önce oldu + edilgen</li>
    </ul>
    <div class="ex">The temple <em>is thought to have been built</em> around 3000 BC.</div>
    <div class="ex"><em>It is estimated that</em> over a million people attended the protest.<br><span class="muted">It + passive + that-cümlesi.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Geçmiş bir olayı anlatırken basit mastar (to be built) seçmek. Rapor fiili şimdiki, olay geçmişse perfect mastar gerekir. ‘It is thought to …’ ve ‘The X is thought that …’ karışımları her zaman yanlıştır.</div>`},
  "pas-infger": {t:"Passive infinitive & gerund: to be done / being done / having been done", html:`
    <p>Mastar veya isim-fiil gerektiren yerlerde (expect, deny, edatlar, cümle başı) özne eylemden etkileniyorsa edilgen biçim kullanılır. Eylem ana fiilden önce olmuşsa perfect biçim seçilir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">to be V3</code> → expect, want, hope, need, refuse + edilgen</li>
      <li><code class="k">to have been V3</code> → önceki eylem + edilgen</li>
      <li><code class="k">being V3</code> → deny, avoid, enjoy, edatlar (at, of, without) + edilgen</li>
      <li><code class="k">having been V3</code> → önceki eylem + edilgen; cümle başında sebep/zaman</li>
    </ul>
    <div class="ex">The suspect denied <em>having been paid</em> for the information.</div>
    <div class="ex"><em>Having been rejected</em> by three publishers, the novel finally became a bestseller.<br><span class="muted">Roman reddedilen taraf, ret daha önce.</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Cümle başındaki kısaltmada aktif ‘Having warned’ seçmek. Ana cümlenin öznesini bul ve sor: bu özne eylemi mi yaptı, eylemden mi etkilendi? Etkilendiyse ‘Having been V3’ ya da yalnızca ‘V3’ gerekir. Edattan sonra ‘to be V3’ kullanılamaz.</div>`}
});
