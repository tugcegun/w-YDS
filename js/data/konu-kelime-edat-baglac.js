/* YDS question bank: vocab, prep, conj */

TOPIC_BANK.push({
  id: "vocab",
  n: "Kelime & Phrasal Verbs",
  s: "Akademik kelime, eşdizimler ve phrasal verb'ler",
  week: 1,
  html: `
    <p>YDS'nin ilk 6 sorusu doğrudan <b>kelime bilgisi</b> ölçer; ayrıca okuma, cloze test ve çeviri sorularının hepsi kelimeye dayanır. Seçenekler genellikle <b>aynı sözcük türünden</b> ve birbirine benzeyen kelimelerden oluşur, bu yüzden tahmin yerine <u>cümledeki ipucunu</u> bulmak gerekir.</p>
    <h4>Nasıl çözülür?</h4>
    <ul>
      <li>Önce boşluğun <b>türünü</b> belirle: fiil mi, sıfat mı, zarf mı, isim mi, phrasal verb mü?</li>
      <li>Cümledeki <b>anlam ipucunu</b> bul: although/despite (zıtlık), because/as a result (sebep-sonuç), olumlu/olumsuz ton.</li>
      <li><b>Eşdizimlere (collocation)</b> dikkat et: <em>place a strain on, reach a consensus, pose a threat</em>.</li>
      <li>Boşluktan sonra gelen edata bak: <em>account for, consist of, vital to</em>.</li>
    </ul>
    <h4>Sık çıkan akademik kelimeler</h4>
    <ul>
      <li><b>Fiiller:</b> alleviate (hafifletmek), ascertain (tespit etmek), undermine (zayıflatmak), enhance (artırmak), postpone (ertelemek), endorse (desteklemek)</li>
      <li><b>Sıfatlar:</b> vital (hayati), vulnerable (savunmasız), inconclusive (kesin olmayan), diverse (çeşitli), obsolete (modası geçmiş), scarce (kıt)</li>
      <li><b>Zarflar:</b> considerably (önemli ölçüde), invariably (her zaman), typically (genellikle), merely (sadece), hardly (neredeyse hiç)</li>
      <li><b>İsimler:</b> consensus (fikir birliği), strain (yük, baskı), scrutiny (inceleme), outcome (sonuç), constraint (kısıt)</li>
      <li><b>Phrasal verbs:</b> carry out (yürütmek), bring about (neden olmak), account for (açıklamak / oluşturmak), break down (çökmek, bozulmak), put off (ertelemek)</li>
    </ul>
    <div class="ex">Although the evidence is still <em>inconclusive</em>, most experts support the theory.<br><span class="muted">although → zıtlık: kanıt kesin değil ama uzmanlar destekliyor.</span></div>
    <div class="ex">Rising rents <em>account for</em> most of the increase in living costs.<br><span class="muted">account for = (bir oranı) oluşturmak / açıklamak</span></div>
    <div class="tip"><b>İpucu:</b> Kelimeleri tek başına değil, birlikte kullanıldığı isim ve edatla ezberle: “alleviate poverty”, “vulnerable to”, “reach a consensus”.</div>`,
  qs: [
    {id:"vocab-01", sub:"voc-verb", q:"The new policy is expected to ---- the negative effects of inflation on low-income households.", o:["alleviate","abandon","acquire","allege","ascend"], a:0, e:"alleviate = hafifletmek, azaltmak. Enflasyonun olumsuz etkileri “hafifletilir”; acquire (edinmek) ve abandon (terk etmek) anlamca uymaz."},
    {id:"vocab-02", sub:"voc-verb", q:"Researchers have yet to ---- whether the drug's side effects outweigh its benefits in elderly patients.", o:["deteriorate","ascertain","exaggerate","collapse","surrender"], a:1, e:"ascertain = tespit etmek, kesin olarak belirlemek; ardından whether gelebilir. deteriorate ve collapse nesne almayan fiillerdir, exaggerate (abartmak) anlamca uymaz."},
    {id:"vocab-03", sub:"voc-verb", q:"Unless governments take urgent action, rising sea levels could ---- the homes of millions of people living in coastal areas.", o:["enhance","endorse","emerge","endanger","enlighten"], a:3, e:"endanger = tehlikeye atmak. Yükselen deniz seviyesi evleri tehdit eder; enhance (iyileştirmek) olumlu anlamlı olduğu için “unless … urgent action” uyarısıyla çelişir."},
    {id:"vocab-04", sub:"voc-verb", q:"The committee decided to ---- the final vote until all members had had a chance to review the revised proposal.", o:["accelerate","dismiss","eliminate","attribute","postpone"], a:4, e:"postpone = ertelemek; “until …” ifadesi ertelemeyi gösterir. accelerate (hızlandırmak) until ile mantıksal olarak çelişir."},
    {id:"vocab-05", sub:"voc-adj", q:"Although the evidence is largely ----, many scientists believe that the theory will eventually be confirmed by further experiments.", o:["abundant","decisive","inconclusive","compelling","reliable"], a:2, e:"inconclusive = kesin sonuç vermeyen. although zıtlık ister: kanıt kesin değil ama teorinin doğrulanacağına inanılıyor. decisive/compelling zıtlık yaratmaz."},
    {id:"vocab-06", sub:"voc-adj", q:"Access to clean water is ---- to public health, as contaminated supplies are a major cause of disease in developing countries.", o:["vulnerable","vital","vague","valid","vivid"], a:1, e:"vital = hayati, çok önemli (vital to). vulnerable to “-e karşı savunmasız” demektir; “temiz suya erişim halk sağlığına karşı savunmasız” anlamsızdır."},
    {id:"vocab-07", sub:"voc-adj", q:"Despite its small size, the country has a remarkably ---- economy, with strong manufacturing, tourism and financial sectors.", o:["fragile","scarce","stagnant","diverse","dormant"], a:3, e:"diverse = çeşitli, çok yönlü; birden fazla güçlü sektör sayılması ipucudur. fragile (kırılgan) ve stagnant (durgun) “strong” ile çelişir."},
    {id:"vocab-08", sub:"voc-adj", q:"The results of the survey should be treated with caution because the sample size was too ---- to represent the whole population.", o:["immense","adequate","considerable","extensive","limited"], a:4, e:"limited = sınırlı. “too … to represent” örneklemin yetersiz olduğunu gösterir; adequate (yeterli) ve extensive (geniş) tam tersi anlam verir."},
    {id:"vocab-09", sub:"voc-adv", q:"Unemployment has risen ---- over the past decade, reaching its highest level since the 1990s.", o:["considerably","hardly","barely","scarcely","seldom"], a:0, e:"considerably = önemli ölçüde. “en yüksek seviyeye ulaşması” büyük artış gösterir; hardly/barely/scarcely “neredeyse hiç” anlamıyla çelişir."},
    {id:"vocab-10", sub:"voc-adv", q:"Early symptoms of the disease are ---- mild, which is why many patients do not seek medical help until it is too late.", o:["rarely","typically","reluctantly","deliberately","precisely"], a:1, e:"typically = genellikle, tipik olarak. Hastaların geç başvurmasının nedeni belirtilerin genelde hafif olmasıdır; rarely (nadiren) bu sonucu açıklamaz."},
    {id:"vocab-11", sub:"voc-adv", q:"The two studies used ---- different methods, so it is not surprising that they reached contradictory conclusions.", o:["similarly","hardly","entirely","equally","merely"], a:2, e:"entirely = tamamen. Tamamen farklı yöntemler çelişkili sonuçları açıklar; hardly different (neredeyse aynı) “not surprising” ile çelişir."},
    {id:"vocab-12", sub:"voc-adv", q:"Large-scale infrastructure projects are ---- delayed and over budget; indeed, researchers found that nine out of ten such projects exceeded their original estimates.", o:["seldom","occasionally","barely","invariably","hardly"], a:3, e:"invariably = her zaman, istisnasız. “ondan dokuzu” neredeyse her zaman anlamını destekler; occasionally (ara sıra) bu oranla uyuşmaz."},
    {id:"vocab-13", sub:"voc-noun", q:"The company's rapid expansion into foreign markets placed a heavy ---- on its limited financial resources.", o:["benefit","reward","relief","gain","strain"], a:4, e:"strain = yük, baskı; “place a strain on” kalıplaşmış bir eşdizimdir. relief (rahatlama) ve benefit olumlu anlamlıdır, “limited resources” ile uyuşmaz."},
    {id:"vocab-14", sub:"voc-noun", q:"Scientists have reached a broad ---- that human activity is the main cause of global warming.", o:["consensus","conflict","dispute","doubt","controversy"], a:0, e:"consensus = fikir birliği; “reach a consensus” eşdizimi. dispute/controversy (anlaşmazlık) “reach” ve “broad” ile birlikte bu anlamda kullanılmaz."},
    {id:"vocab-15", sub:"voc-noun", q:"The government has come under growing ---- for its failure to address the housing crisis.", o:["approval","criticism","praise","support","tolerance"], a:1, e:"criticism = eleştiri; “come under criticism for” kalıbı. “for its failure” olumsuz bir sebep olduğundan praise/approval (övgü/onay) uymaz."},
    {id:"vocab-16", sub:"voc-noun", q:"Regular physical activity can significantly reduce the ---- of developing heart disease, diabetes and certain types of cancer.", o:["cure","treatment","risk","symptom","remedy"], a:2, e:"risk = risk, tehlike; “reduce the risk of doing” eşdizimi. cure/remedy (tedavi, çare) “of developing” ile anlamlı bir yapı kurmaz."},
    {id:"vocab-17", sub:"voc-phrasal", q:"The experiment was ---- by a team of researchers at the university over a period of three years.", o:["put off","given up","broken down","carried out","turned down"], a:3, e:"carry out = yürütmek, gerçekleştirmek (deney, araştırma). put off (ertelemek) ve turned down (reddetmek) “üç yıl boyunca bir ekip tarafından” ile uyuşmaz."},
    {id:"vocab-18", sub:"voc-phrasal", q:"Rising energy costs ---- nearly half of the increase in consumer prices last year.", o:["accounted for","called off","made up for","ran out of","looked into"], a:0, e:"account for = (bir oranı) oluşturmak, açıklamak. made up for “telafi etmek” demektir; enerji maliyetleri artışı telafi etmez, artışın yarısını oluşturur."},
    {id:"vocab-19", sub:"voc-phrasal", q:"The introduction of the printing press ---- dramatic changes in the way knowledge was shared across Europe.", o:["looked after","came across","brought about","put up with","got over"], a:2, e:"bring about = neden olmak, yol açmak. came across (rastlamak) ve put up with (katlanmak) matbaanın değişime yol açması anlamını vermez."},
    {id:"vocab-20", sub:"voc-phrasal", q:"Negotiations between the two sides ---- after the union rejected the management's final offer.", o:["took off","caught on","went through","set up","broke down"], a:4, e:"break down = (görüşme) çıkmaza girmek, kopmak. went through (onaylanmak, gerçekleşmek) teklifin reddedilmesiyle çelişir."}
  ]
});

TOPIC_BANK.push({
  id: "prep",
  n: "Edatlar — Prepositions",
  s: "Fiil/sıfat + edat, edat öbekleri, zaman ve yer edatları",
  week: 1,
  html: `
    <p>YDS'de edat soruları hem gramer bölümünde hem de cloze testte düzenli olarak çıkar. Çoğu soru mantıkla değil <b>ezberlenmiş kalıplarla</b> çözülür; bu yüzden edatları kelimeyle birlikte öğrenmek şarttır.</p>
    <h4>1. Kelimeye bağlı edatlar (dependent prepositions)</h4>
    <ul>
      <li><b>Fiil +:</b> rely on, depend on, consist of, result in (sonuç), result from (sebep), attribute sth to</li>
      <li><b>Sıfat +:</b> responsible for, vulnerable to, aware of, capable of, similar to</li>
      <li><b>İsim +:</b> increase in, demand for, impact on, access to, solution to</li>
    </ul>
    <h4>2. Edat öbekleri (prepositional phrases)</h4>
    <ul>
      <li><code class="k">in terms of</code> açısından · <code class="k">on behalf of</code> adına · <code class="k">at the expense of</code> -in bedeli olarak · <code class="k">by means of</code> aracılığıyla · <code class="k">on the verge of</code> eşiğinde</li>
    </ul>
    <h4>3. Bileşik edatlar (+ isim / V-ing)</h4>
    <ul>
      <li><b>Sebep:</b> due to, owing to, because of · <b>Zıtlık:</b> despite, in spite of, regardless of</li>
      <li><b>Diğer:</b> instead of (yerine), apart from (dışında), as opposed to (-in aksine)</li>
    </ul>
    <h4>4. Zaman ve yer</h4>
    <ul>
      <li><code class="k">by</code> en geç · <code class="k">until</code> -e kadar (süreklilik) · <code class="k">during</code> esnasında · <code class="k">for</code> süre boyunca · <code class="k">within</code> içinde</li>
      <li><code class="k">throughout</code> baştan sona, her yerinde · <code class="k">between</code> iki öğe · <code class="k">among</code> grup içinde</li>
    </ul>
    <div class="ex">The rise in prices <em>resulted in</em> lower demand. / Lower demand <em>resulted from</em> the rise in prices.<br><span class="muted">result in → sonuç gelir; result from → sebep gelir.</span></div>
    <div class="tip"><b>İpucu:</b> Bileşik edatlardan sonra asla özne + yüklem gelmez: <em>due to the rain</em> doğru, <em>due to it rained</em> yanlış. Fiil gerekiyorsa V-ing kullan: <em>instead of waiting</em>.</div>`,
  qs: [
    {id:"prep-01", sub:"pre-dependent", q:"The success of the project will largely depend ---- the level of cooperation between the participating countries.", o:["on","in","with","at","for"], a:0, e:"depend on = -e bağlı olmak. “depend in/with” diye bir kalıp yoktur."},
    {id:"prep-02", sub:"pre-dependent", q:"The human body consists ---- trillions of cells, each of which performs a specialised function.", o:["from","by","of","in","with"], a:2, e:"consist of = -den oluşmak. consist in “-de yatmak, -den ibaret olmak (soyut)” anlamındadır; hücrelerden oluşmayı anlatmaz."},
    {id:"prep-03", sub:"pre-dependent", q:"Parents are legally responsible ---- ensuring that their children receive a full-time education.", o:["for","to","of","with","about"], a:0, e:"responsible for (doing) = -den sorumlu. “responsible to” birine karşı hesap veren anlamındadır ve ardından kişi gelir, V-ing değil."},
    {id:"prep-04", sub:"pre-dependent", q:"Many elderly people are particularly vulnerable ---- infections during the winter months.", o:["against","from","with","to","by"], a:3, e:"vulnerable to = -e karşı savunmasız/açık. Türkçedeki “-e karşı” çevirisi against'i çağrıştırsa da doğru kalıp “vulnerable to”dur."},
    {id:"prep-05", sub:"pre-dependent", q:"There has been a sharp increase ---- demand for renewable energy, which has resulted ---- lower prices for solar panels.", o:["of / from","in / in","for / to","on / with","at / by"], a:1, e:"increase in = -de artış; result in = ile sonuçlanmak (ardından sonuç gelir). result from sebep bildirir; düşük fiyatlar talebin sebebi değil sonucudur."},
    {id:"prep-06", sub:"pre-phrase", q:"---- economic growth, the country has performed well, but it still lags behind its neighbours in education and healthcare.", o:["On behalf of","By means of","In terms of","At the expense of","In charge of"], a:2, e:"in terms of = açısından, bakımından; farklı alanlar karşılaştırılıyor. At the expense of (-in bedeline) cümlenin olumlu ilk yarısıyla uyuşmaz."},
    {id:"prep-07", sub:"pre-phrase", q:"The lawyer made a statement to the press ---- her client, who was unable to attend the hearing.", o:["in terms of","in accordance with","by means of","on behalf of","at the expense of"], a:3, e:"on behalf of = adına. Müvekkil duruşmaya gelemediği için avukat onun adına açıklama yapıyor; in accordance with (-e uygun olarak) anlamı tutmaz."},
    {id:"prep-08", sub:"pre-phrase", q:"Rapid industrialisation in the region was achieved largely ---- the environment, as forests were cleared and rivers polluted.", o:["in response to","on behalf of","by means of","in addition to","at the expense of"], a:4, e:"at the expense of = -in zararına, bedeli olarak. Ormanların yok edilmesi çevrenin zarar gördüğünü gösterir; by means of (aracılığıyla) mantıksızdır."},
    {id:"prep-09", sub:"pre-phrase", q:"Information was transmitted across the empire ---- a sophisticated network of messengers and relay stations.", o:["by means of","in spite of","in charge of","in contrast to","on the verge of"], a:0, e:"by means of = aracılığıyla, vasıtasıyla. Bilgi, haberci ağı yoluyla iletiliyor; in spite of (-e rağmen) zıtlık ilişkisi kurar, burada zıtlık yoktur."},
    {id:"prep-10", sub:"pre-phrase", q:"Several endangered species are ---- extinction because their natural habitats are being destroyed at an alarming rate.", o:["in favour of","on the verge of","in terms of","by way of","in line with"], a:1, e:"on the verge of = eşiğinde, -mek üzere. Yaşam alanlarının yok edilmesi türleri yok olmanın eşiğine getirir; in line with (-e uygun) anlam vermez."},
    {id:"prep-11", sub:"pre-compound", q:"The flight was cancelled ---- severe weather conditions at the destination airport.", o:["despite","regardless of","due to","instead of","apart from"], a:2, e:"due to = yüzünden, nedeniyle. Kötü hava iptalin sebebidir; despite ve regardless of zıtlık bildirir."},
    {id:"prep-12", sub:"pre-compound", q:"The scholarship is open to all qualified students ---- their nationality or financial background.", o:["because of","regardless of","owing to","in addition to","as a result of"], a:1, e:"regardless of = -e bakılmaksızın. “all qualified students” herkesin başvurabileceğini gösterir; because of/owing to sebep bildirir ve mantığı bozar."},
    {id:"prep-13", sub:"pre-compound", q:"---- repeated warnings from health experts, the number of young people who smoke has continued to rise.", o:["Owing to","Instead of","As a result of","In spite of","Thanks to"], a:3, e:"in spite of = -e rağmen. Uyarılara rağmen sigara içenler artıyor; Owing to/As a result of sebep-sonuç ilişkisi kurar, uyarılar artışın sebebi değildir."},
    {id:"prep-14", sub:"pre-compound", q:"---- investing in new technology, the company chose to cut costs by reducing its workforce.", o:["Because of","Due to","Thanks to","Regardless of","Instead of"], a:4, e:"instead of + V-ing = -mek yerine. Şirket teknolojiye yatırım yapmak yerine işçi çıkarmayı seçiyor; Because of/Due to yatırımı işten çıkarmanın sebebi yapar."},
    {id:"prep-15", sub:"pre-compound", q:"---- a few minor errors, the report provides an accurate and comprehensive overview of the situation.", o:["Apart from","Due to","As opposed to","On behalf of","Because of"], a:0, e:"apart from = dışında, haricinde. Birkaç küçük hata dışında rapor doğru; Due to/Because of hataları doğruluğun sebebi yapar, bu çelişkilidir."},
    {id:"prep-16", sub:"pre-timeplace", q:"Applicants must submit all the required documents ---- 30 June; late applications will not be considered.", o:["until","during","since","for","by"], a:4, e:"by = en geç, -e kadar (son tarih). until süreklilik gerektirir (wait until); “submit” anlık bir eylem olduğundan until uymaz."},
    {id:"prep-17", sub:"pre-timeplace", q:"The museum will remain closed ---- the end of the month while renovation work is completed.", o:["by","within","until","since","among"], a:2, e:"until = -e kadar (süren durum). “remain closed” süreklilik bildirir, bu yüzden until gerekir; by bir eylemin en geç tamamlanma zamanını gösterir."},
    {id:"prep-18", sub:"pre-timeplace", q:"Most of the damage was caused ---- the night, while residents were asleep.", o:["for","since","by","during","until"], a:3, e:"during = esnasında, sırasında (ardından olay/dönem ismi). for bir süre miktarı ister (for three hours); “for the night” burada anlam vermez."},
    {id:"prep-19", sub:"pre-timeplace", q:"The disease spread rapidly ---- the region, affecting almost every village.", o:["between","since","by","until","throughout"], a:4, e:"throughout = baştan başa, her yerinde. “neredeyse her köy” ipucudur; between iki öğe arasında kullanılır."},
    {id:"prep-20", sub:"pre-timeplace", q:"The inheritance was divided equally ---- the two sisters, while the rest of the land was shared ---- the villagers.", o:["among / between","between / among","within / throughout","during / for","by / until"], a:1, e:"between iki kişi/öğe için (the two sisters), among bir grup içinde (the villagers) kullanılır. İlk seçenek bu kuralı tersine çevirir."}
  ]
});

TOPIC_BANK.push({
  id: "conj",
  n: "Bağlaçlar & Geçiş İfadeleri",
  s: "Zıtlık, sebep, sonuç, amaç, eşli ve zaman bağlaçları",
  week: 2,
  html: `
    <p>YDS'nin en çok puan getiren alanlarından biri. Bağlacın <b>anlam ilişkisini</b> (zıtlık, sebep, sonuç, amaç, zaman) ve <b>gramer türünü</b> (cümle bağlacı mı, zarf mı, edat mı) doğru eşleştirmek gerekir. Bağlaç bilgisi cümle tamamlama, paragraf ve anlamı bozan cümle sorularında da doğrudan işe yarar.</p>
    <h4>Anlama göre gruplar</h4>
    <ul>
      <li><b>Zıtlık:</b> although, though, even though, whereas, while (+cümle) · despite, in spite of (+isim) · however, nevertheless, nonetheless (; ... ,)</li>
      <li><b>Sebep:</b> because, since, as (+cümle) · because of, due to, owing to (+isim)</li>
      <li><b>Sonuç:</b> so, therefore, thus, hence, consequently, as a result · so + sıfat + that · such + (a) sıfat + isim + that</li>
      <li><b>Amaç:</b> so that, in order that (+cümle) · in order to, so as to (+fiil) · lest (+özne + (should) V1) = -mesin diye</li>
      <li><b>Eşli bağlaçlar:</b> both…and, either…or, neither…nor, not only…but also, whether…or</li>
      <li><b>Zaman:</b> as soon as, once, until, by the time, now that, before, after</li>
    </ul>
    <h4>Gramer türüne göre</h4>
    <ul>
      <li><b>Cümle bağlacı</b> (subordinator): iki cümleyi tek cümlede birleştirir → <em>Although it rained, …</em></li>
      <li><b>Geçiş zarfı</b> (transition): noktalı virgül veya nokta sonrası, virgülle → <em>…; however, …</em></li>
      <li><b>Edat</b>: ardından isim / V-ing → <em>Despite the rain, …</em></li>
    </ul>
    <div class="ex"><em>Despite</em> the heavy rain, the match continued. → <em>Although</em> it rained heavily, the match continued.<br><span class="muted">Aynı anlam, farklı gramer: despite + isim, although + cümle.</span></div>
    <div class="ex">The data were incomplete; <em>therefore</em>, no firm conclusion could be drawn.<br><span class="muted">therefore iki ayrı cümleyi bağlar, önünde noktalı virgül/nokta olur.</span></div>
    <div class="tip"><b>Kritik ayrım:</b> despite/in spite of ardından <u>isim</u>, although/though ardından <u>cümle (özne+yüklem)</u> gelir. Önce boşluktan sonraki yapıya bak, sonra anlam ilişkisini kontrol et.</div>`,
  qs: [
    {id:"conj-01", sub:"con-contrast", q:"---- the treatment has proved effective in clinical trials, it is still too expensive for most hospitals to use.", o:["Despite","Although","Because","Unless","In spite of"], a:1, e:"Although + cümle = -e rağmen. Etkili olması ile pahalı olması zıtlıktır; Despite/In spite of da zıtlık bildirir ama ardından cümle değil isim almalıdır."},
    {id:"conj-02", sub:"con-contrast", q:"---- its limited budget, the film became one of the most successful productions of the year.", o:["Although","Even though","Despite","Whereas","However"], a:2, e:"Despite + isim öbeği (its limited budget) = -e rağmen. Although ve Even though da zıtlık bildirir ama ardından özne + yüklem gerekir."},
    {id:"conj-03", sub:"con-contrast", q:"The northern part of the country receives plenty of rainfall, ---- the south suffers from frequent droughts.", o:["whereas","so that","because","as long as","therefore"], a:0, e:"whereas = oysa, -iken; iki durumu karşılaştırır (kuzey yağışlı, güney kurak). therefore sonuç bildirir ve virgülle iki cümleyi bağlayamaz."},
    {id:"conj-04", sub:"con-contrast", q:"Scientists have warned about the dangers of microplastics for years; ----, very few countries have introduced effective regulations.", o:["therefore","in addition","for instance","nevertheless","similarly"], a:3, e:"nevertheless = yine de, buna rağmen. Yıllardır uyarılmasına rağmen düzenleme az; therefore bir sonuç ilişkisi kurar ki uyarılar düzenleme azlığının sebebi değildir."},
    {id:"conj-05", sub:"con-cause", q:"---- the population is ageing rapidly, the government will need to spend more on healthcare and pensions.", o:["Although","So that","Unless","Since","Whereas"], a:3, e:"Since = -dığı için (sebep). Nüfusun yaşlanması harcama artışının sebebidir; Although zıtlık bildirir, burada zıtlık yoktur."},
    {id:"conj-06", sub:"con-cause", q:"Many flights were delayed ---- a strike by air traffic controllers.", o:["because","since","although","as","due to"], a:4, e:"due to + isim öbeği = yüzünden. because, since ve as da sebep bildirir ama ardından özne + yüklem içeren bir cümle gelmelidir."},
    {id:"conj-07", sub:"con-cause", q:"---- the company failed to meet safety standards, its licence was suspended.", o:["As","Because of","Despite","Owing to","In case"], a:0, e:"As + cümle = -dığı için. Because of ve Owing to da sebep bildirir ama edat olduklarından ardından cümle alamazlar."},
    {id:"conj-08", sub:"con-result", q:"The new vaccine was ---- effective ---- the number of infections fell by 80 percent within six months.", o:["such / that","so / that","too / to","as / as","enough / to"], a:1, e:"so + sıfat + that = o kadar …ki. such isimle kullanılır (such an effective vaccine that); burada yalnızca sıfat (effective) olduğu için so gerekir."},
    {id:"conj-09", sub:"con-result", q:"It was ---- a complex problem ---- even the most experienced engineers could not find a solution.", o:["so / that","too / to","such / that","enough / that","as / as"], a:2, e:"such + a + sıfat + isim + that = öyle … ki. so doğrudan “a complex problem” gibi bir isim öbeğinden önce gelemez."},
    {id:"conj-10", sub:"con-result", q:"The region's soil is extremely fertile; ----, it has been used for agriculture for thousands of years.", o:["however","otherwise","whereas","nonetheless","therefore"], a:4, e:"therefore = bu yüzden. Toprağın verimli olması binlerce yıllık kullanımın sebebidir; however/nonetheless zıtlık bildirir."},
    {id:"conj-11", sub:"con-result", q:"The new material is lighter and stronger than steel, ---- making it ideal for use in aircraft construction.", o:["whereas","although","unless","because","thus"], a:4, e:"thus + V-ing = böylece, dolayısıyla. Önceki bilginin sonucunu verir; because ardından V-ing değil cümle alır ve sebep bildirir."},
    {id:"conj-12", sub:"con-purpose", q:"Many employees work from home ---- avoid spending hours commuting every day.", o:["so that","in order to","in case","as long as","because"], a:1, e:"in order to + V1 = -mek için. so that de amaç bildirir ama ardından özne + yüklem gerekir (so that they can avoid)."},
    {id:"conj-13", sub:"con-purpose", q:"The instructions were written in simple language ---- even children could understand them.", o:["in order to","so as to","despite","so that","due to"], a:3, e:"so that + özne + can/could = -sin diye. in order to ve so as to da amaç bildirir ama ardından yalın fiil gelir, cümle gelmez."},
    {id:"conj-14", sub:"con-purpose", q:"The records were stored in a secure location ---- they be lost or damaged.", o:["lest","so that","unless","in order that","provided that"], a:0, e:"lest + özne + (should) V1 = -mesin diye. so that de amaç bildirir ama “so that they be lost” kayıpların istendiği anlamına gelir ve yalın fiil yapısıyla uyuşmaz."},
    {id:"conj-15", sub:"con-correlative", q:"---- the government ---- private companies are willing to invest in the project, so it is unlikely to go ahead.", o:["Both / and","Either / or","Neither / nor","Not only / but also","Whether / or"], a:2, e:"Neither … nor = ne … ne de. Projenin gerçekleşmesinin olası olmaması kimsenin yatırım yapmadığını gösterir; Both … and anlamı tersine çevirir."},
    {id:"conj-16", sub:"con-correlative", q:"The new policy will ---- reduce pollution ---- create thousands of jobs in the renewable energy sector.", o:["neither / or","not only / but also","either / nor","whether / or","such / that"], a:1, e:"not only … but also = yalnızca … değil, aynı zamanda. neither/nor ve either/or eşleri karıştırılamaz; whether … or seçenek/belirsizlik bildirir."},
    {id:"conj-17", sub:"con-correlative", q:"Researchers are still debating ---- the decline in bird populations is caused by climate change ---- by habitat loss.", o:["either / nor","neither / or","both / and","whether / or","so / that"], a:3, e:"whether … or = -ip -mediği, … mı yoksa … mı. “debating” belirsizlik bildirir; either … nor yanlış eşleşmedir (either … or olmalı)."},
    {id:"conj-18", sub:"con-time", q:"---- the new law comes into force, all companies will be required to publish their carbon emissions.", o:["Although","Until","Once","Whereas","Even though"], a:2, e:"Once = -er -mez, -dikten sonra. Yasa yürürlüğe girince zorunluluk başlar; Until “-e kadar” anlamıyla zorunluluğu yasadan önceye koyar."},
    {id:"conj-19", sub:"con-time", q:"---- the rescue team arrived, the fire had already destroyed most of the building.", o:["Until","As long as","Now that","Unless","By the time"], a:4, e:"By the time = -diği zamana kadar; ana cümlede past perfect (had destroyed) ile kullanılır. Until “already” ile uyuşmaz."},
    {id:"conj-20", sub:"con-time", q:"---- the construction work has been completed, residents can finally use the new bridge.", o:["Now that","Until","Unless","Before","Whereas"], a:0, e:"Now that = madem ki, artık … olduğuna göre. “finally” tamamlanmış duruma bağlı yeni bir durumu gösterir; Before inşaat bitmeden köprünün kullanılması anlamı verir."}
  ]
});

Object.assign(LESSONS, {
  "voc-verb": {t:"Akademik fiiller", html:`
    <p>YDS kelime sorularında en sık fiiller sorulur. Seçenekler çoğunlukla <b>aynı harfle başlayan</b> veya benzer görünen fiillerdir. Doğru fiili bulmak için <u>nesneye</u> (neyi?) ve cümlenin <u>tonuna</u> (olumlu/olumsuz) bak. Ayrıca fiilin nesne alıp almadığını kontrol et: <em>deteriorate, emerge, collapse</em> nesne almaz.</p>
    <h4>Sık çıkanlar</h4>
    <ul>
      <li>alleviate (hafifletmek) · exacerbate (kötüleştirmek)</li>
      <li>ascertain (tespit etmek) · assess (değerlendirmek)</li>
      <li>enhance (geliştirmek) · undermine (zayıflatmak) · endanger (tehlikeye atmak)</li>
      <li>postpone (ertelemek) · accelerate (hızlandırmak) · abandon (vazgeçmek)</li>
      <li>endorse (desteklemek, onaylamak) · allege (iddia etmek)</li>
    </ul>
    <div class="ex">The measures helped to <em>alleviate</em> poverty in rural areas.<br><span class="muted">alleviate poverty / pain / suffering → hafifletmek</span></div>
    <div class="ex">Officials are trying to <em>ascertain</em> the cause of the accident.<br><span class="muted">ascertain = kesin olarak öğrenmek</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Benzer görünen fiilleri karıştırmak (enhance / endanger, alleviate / allege). Seçeneği cümleye yerleştirip Türkçesini söyle; anlam “kötü şeyi azaltmak” mı “iyi şeyi artırmak” mı, kontrol et.</div>`},
  "voc-adj": {t:"Sıfatlar", html:`
    <p>Sıfat sorularında ipucu genellikle cümlenin <b>diğer yarısındadır</b>: although/despite zıt bir sıfat, because/so ise uyumlu bir sıfat ister. Sıfattan sonra gelen edat da yol gösterir: <em>vital to, vulnerable to, capable of</em>.</p>
    <h4>Sık çıkanlar</h4>
    <ul>
      <li>vital / essential (hayati) · crucial (kritik)</li>
      <li>vulnerable (savunmasız) · fragile (kırılgan) · resilient (dayanıklı)</li>
      <li>inconclusive (kesin olmayan) · compelling (ikna edici) · decisive (belirleyici)</li>
      <li>diverse (çeşitli) · scarce (kıt) · abundant (bol)</li>
      <li>limited (sınırlı) · adequate (yeterli) · extensive (kapsamlı)</li>
    </ul>
    <div class="ex">The findings remain <em>inconclusive</em>, so more research is needed.<br><span class="muted">inconclusive → so more research is needed ile uyumlu</span></div>
    <div class="ex">Coastal cities are especially <em>vulnerable to</em> flooding.<br><span class="muted">vulnerable to = -e karşı savunmasız</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Cümledeki bağlacı atlamak. “Despite its small size … remarkably ---- economy” gibi bir cümlede zıtlığı kaçırırsan olumsuz bir sıfat seçebilirsin; önce bağlacın kurduğu ilişkiyi belirle.</div>`},
  "voc-adv": {t:"Zarflar", html:`
    <p>Zarf sorularında <b>derece</b> (considerably, slightly), <b>sıklık</b> (invariably, seldom) ve <b>tutum</b> (deliberately, reluctantly) zarfları sorulur. Cümledeki sayısal ya da mantıksal ipucu (“en yüksek seviye”, “ondan dokuzu”, “which is why”) doğru zarfı belirler.</p>
    <h4>Sık çıkanlar</h4>
    <ul>
      <li><b>Derece:</b> considerably, substantially (önemli ölçüde) · slightly (biraz) · entirely (tamamen) · merely (sadece)</li>
      <li><b>Sıklık:</b> invariably (her zaman) · typically (genellikle) · occasionally (ara sıra) · seldom, rarely (nadiren)</li>
      <li><b>Olumsuz anlamlı:</b> hardly, barely, scarcely (neredeyse hiç)</li>
      <li><b>Tutum:</b> deliberately (kasten) · reluctantly (isteksizce) · precisely (tam olarak)</li>
    </ul>
    <div class="ex">Prices have increased <em>considerably</em> since last year.<br><span class="muted">considerably = önemli ölçüde</span></div>
    <div class="ex">The service is <em>invariably</em> slow at weekends.<br><span class="muted">invariably = istisnasız, her zaman</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> hardly / barely / scarcely zarflarının <u>olumsuz</u> anlam taşıdığını unutmak. “has risen hardly” artış olmadığını söyler; büyük artış anlatan bir cümleye uymaz.</div>`},
  "voc-noun": {t:"İsimler ve eşdizimler", html:`
    <p>İsim sorularında çoğu zaman tek başına anlam değil, <b>eşdizim (collocation)</b> sorulur: hangi fiil hangi isimle, hangi isim hangi edatla kullanılır? Boşluğun önündeki fiile (place, reach, pose) ve arkasındaki edata (of, on, for) bak.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">place / put a strain on</code> üzerinde baskı oluşturmak</li>
      <li><code class="k">reach a consensus</code> fikir birliğine varmak</li>
      <li><code class="k">come under criticism / scrutiny for</code> eleştiriye / incelemeye maruz kalmak</li>
      <li><code class="k">reduce / increase the risk of</code> riskini azaltmak / artırmak</li>
      <li><code class="k">pose a threat to</code> tehdit oluşturmak · <code class="k">have an impact on</code> etkilemek</li>
    </ul>
    <div class="ex">The rising number of patients has <em>placed a strain on</em> hospitals.<br><span class="muted">strain = yük, baskı</span></div>
    <div class="ex">Delegates failed to <em>reach a consensus</em> on the issue.<br><span class="muted">reach a consensus = uzlaşmaya varmak</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Türkçeden kelime kelime çevirmek. “Eleştiri almak” <em>take criticism</em> değil, genellikle <em>come under criticism</em> ya da <em>face criticism</em> olur. Eşdizimleri kalıp olarak ezberle.</div>`},
  "voc-phrasal": {t:"Phrasal verbs", html:`
    <p>Phrasal verb'ler fiil + edat/zarf birleşimidir ve anlamları çoğu zaman parçalardan tahmin edilemez. YDS'de akademik metinlerde sık geçen, <b>resmî fiil karşılığı olan</b> phrasal verb'ler sorulur.</p>
    <h4>Sık çıkanlar</h4>
    <ul>
      <li>carry out = conduct (yürütmek) · bring about = cause (neden olmak)</li>
      <li>account for = explain / constitute (açıklamak / oluşturmak)</li>
      <li>break down = collapse / fail (çökmek, kopmak) · set up = establish (kurmak)</li>
      <li>put off = postpone (ertelemek) · call off = cancel (iptal etmek)</li>
      <li>make up for = compensate (telafi etmek) · put up with = tolerate (katlanmak)</li>
      <li>look into = investigate (araştırmak) · come across = encounter (rastlamak)</li>
    </ul>
    <div class="ex">The survey was <em>carried out</em> by an independent agency.<br><span class="muted">carry out a survey / study / experiment</span></div>
    <div class="ex">Talks <em>broke down</em> when neither side would compromise.<br><span class="muted">break down = (görüşme) çıkmaza girmek</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> account for ile make up for'u karıştırmak. account for bir şeyin oranını oluşturmak ya da açıklamaktır; make up for ise bir kaybı telafi etmektir. Phrasal verb'ü resmî eş anlamlısıyla birlikte öğren.</div>`},
  "pre-dependent": {t:"Kelimeye bağlı edatlar", html:`
    <p>Bazı fiil, sıfat ve isimler <b>belirli bir edatla</b> kullanılır. Bu edatlar mantıkla bulunamaz; kelimeyle birlikte ezberlenmelidir. Edattan sonra isim ya da <b>V-ing</b> gelir (responsible for <em>ensuring</em>).</p>
    <h4>Kalıp</h4>
    <ul>
      <li><b>Fiil:</b> depend/rely on · consist of · result in (sonuç) / result from (sebep) · attribute sth to · contribute to · participate in</li>
      <li><b>Sıfat:</b> responsible for · vulnerable to · aware of · capable of · similar to · dependent on</li>
      <li><b>İsim:</b> increase/decrease in · demand for · impact/effect on · access to · reason for · solution to</li>
    </ul>
    <div class="ex">The committee <em>consists of</em> twelve members.<br><span class="muted">consist of = -den oluşmak</span></div>
    <div class="ex">Poor diet can <em>result in</em> serious health problems.<br><span class="muted">result in + sonuç · result from + sebep</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Türkçedeki hâl ekine göre edat seçmek. “-e karşı savunmasız” against değil <em>vulnerable to</em>; “-den sorumlu” from değil <em>responsible for</em>; “talepte artış” <em>increase in demand</em> olur.</div>`},
  "pre-phrase": {t:"Edat öbekleri", html:`
    <p>Edat öbekleri <b>edat + isim + edat</b> yapısındaki kalıplardır ve cümlede tek bir edat gibi çalışır. Ardından isim veya V-ing gelir. YDS'de hem anlamları hem de kalıbın doğru edatları (at the expense <u>of</u>, in line <u>with</u>) sorulur.</p>
    <h4>Sık çıkanlar</h4>
    <ul>
      <li><code class="k">in terms of</code> açısından · <code class="k">in favour of</code> lehine</li>
      <li><code class="k">on behalf of</code> adına · <code class="k">in charge of</code> -den sorumlu</li>
      <li><code class="k">at the expense of</code> -in zararına · <code class="k">by means of</code> aracılığıyla</li>
      <li><code class="k">on the verge of</code> eşiğinde · <code class="k">in accordance with / in line with</code> -e uygun olarak</li>
      <li><code class="k">in response to</code> -e yanıt olarak · <code class="k">in addition to</code> -e ek olarak</li>
    </ul>
    <div class="ex">The company grew quickly, but <em>at the expense of</em> its workers' wellbeing.<br><span class="muted">büyüme, çalışanların refahı feda edilerek sağlandı</span></div>
    <div class="ex"><em>In terms of</em> cost, solar power is now competitive.<br><span class="muted">in terms of = maliyet açısından</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> on behalf of (adına) ile in favour of (lehine) karıştırmak. Avukat müvekkili <em>adına</em> konuşur (on behalf of); bir karar birinin <em>lehine</em> çıkar (in favour of).</div>`},
  "pre-compound": {t:"Bileşik edatlar", html:`
    <p>Bileşik edatlar iki-üç kelimeden oluşur ve ardından <b>isim, zamir veya V-ing</b> alır; asla özne + yüklem almaz. Önce anlam grubunu (sebep, zıtlık, yerine, dışında) belirle, sonra cümlenin mantığıyla eşleştir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><b>Sebep:</b> due to, owing to, because of, as a result of, thanks to (olumlu)</li>
      <li><b>Zıtlık:</b> despite, in spite of, regardless of (-e bakılmaksızın), notwithstanding</li>
      <li><b>Yerine:</b> instead of, rather than · <b>Karşıtlık:</b> as opposed to, unlike</li>
      <li><b>Dışında:</b> apart from, except for, aside from · <b>Ek olarak:</b> in addition to, as well as</li>
    </ul>
    <div class="ex"><em>Regardless of</em> age, all participants completed the test.<br><span class="muted">yaş fark etmeksizin</span></div>
    <div class="ex">Many people now shop online, <em>as opposed to</em> visiting stores.<br><span class="muted">as opposed to + V-ing = -mek yerine / -in aksine</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> apart from'u sadece “hariç” sanmak. “Apart from a few errors, the report is good” = birkaç hata dışında; ama “apart from English, she speaks French” = İngilizcenin yanı sıra. Bağlama bak.</div>`},
  "pre-timeplace": {t:"Zaman ve yer edatları", html:`
    <p>YDS'de en çok karıştırılan çiftler <b>by / until</b>, <b>during / for</b> ve <b>between / among</b>'dir. Eylemin <u>anlık mı sürekli mi</u> olduğu ve öğelerin <u>sayısı</u> doğru edatı belirler.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">by</code> en geç (anlık eylem: submit, finish) · <code class="k">until</code> -e kadar (süren durum: remain, wait, stay)</li>
      <li><code class="k">during</code> + olay/dönem (during the war) · <code class="k">for</code> + süre (for three years)</li>
      <li><code class="k">within</code> süre/sınır içinde (within 48 hours) · <code class="k">throughout</code> baştan sona / her yerinde</li>
      <li><code class="k">between</code> iki öğe ya da tek tek belirtilen öğeler · <code class="k">among</code> bir grup / kalabalık içinde</li>
    </ul>
    <div class="ex">The report must be finished <em>by</em> Friday. / I will wait <em>until</em> Friday.<br><span class="muted">by → son tarih · until → o zamana kadar devam</span></div>
    <div class="ex">She slept <em>during</em> the flight <em>for</em> about two hours.<br><span class="muted">during ne zaman? · for ne kadar süre?</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Türkçedeki tek “-e kadar” ifadesi yüzünden by ile until'i karıştırmak. Fiile sor: “teslim etmek” bir anda olur → by; “kapalı kalmak” süre boyunca devam eder → until.</div>`},
  "con-contrast": {t:"Zıtlık bağlaçları", html:`
    <p>Zıtlık bağlaçları, beklenenin tersi bir durumu veya iki farklı durumun karşılaştırmasını gösterir. Doğru seçim için önce <b>gramer türüne</b> bak: ardından cümle mi, isim mi geliyor, yoksa iki ayrı cümleyi mi bağlıyor?</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">although / though / even though + cümle</code> -e rağmen</li>
      <li><code class="k">despite / in spite of + isim / V-ing</code> -e rağmen</li>
      <li><code class="k">whereas / while + cümle</code> oysa, -iken (karşılaştırma)</li>
      <li><code class="k">Cümle 1; however / nevertheless / nonetheless, cümle 2</code> ancak, yine de</li>
    </ul>
    <div class="ex"><em>Although</em> the plan was risky, it succeeded. = <em>Despite</em> the risks, the plan succeeded.<br><span class="muted">aynı anlam, farklı yapı</span></div>
    <div class="ex">Some species adapted quickly, <em>whereas</em> others died out.<br><span class="muted">whereas iki grubu karşılaştırır</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> despite'ın ardından cümle kullanmak (<em>despite it was raining</em> ✗). Cümle gerekiyorsa <em>although</em> ya da <em>despite the fact that</em> kullanılır.</div>`},
  "con-cause": {t:"Sebep bağlaçları", html:`
    <p>Sebep bildiren yapılar anlamca aynıdır; fark <b>gramerdedir</b>. Boşluktan sonra özne + yüklem varsa cümle bağlacı, isim öbeği varsa edat seçilir. Ayrıca yan cümlenin gerçekten <u>sebep</u> olduğunu kontrol et: zıtlık varsa although, sonuç varsa therefore gerekir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">because / since / as + cümle</code> -dığı için</li>
      <li><code class="k">because of / due to / owing to / on account of + isim</code> yüzünden</li>
      <li><code class="k">due to the fact that + cümle</code> -dığı gerçeğinden dolayı</li>
      <li><code class="k">now that + cümle</code> madem ki (yeni ortaya çıkan sebep)</li>
    </ul>
    <div class="ex"><em>Since</em> demand has fallen, prices are dropping.<br><span class="muted">since burada “-den beri” değil, “-dığı için” anlamında</span></div>
    <div class="ex">The event was postponed <em>owing to</em> the storm.<br><span class="muted">owing to + isim</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> since ve as'i yalnızca zaman bağlacı sanmak. Cümlenin başında gelip bir gerekçe sunuyorsa ikisi de “-dığı için” anlamındadır.</div>`},
  "con-result": {t:"Sonuç bağlaçları", html:`
    <p>Sonuç yapıları, önceki bilginin <b>doğal sonucunu</b> verir. Geçiş zarfları (therefore, thus, hence, consequently) iki ayrı cümleyi noktalı virgül/nokta ile bağlar; so…that ve such…that ise “o kadar … ki” anlamı taşır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">so + sıfat/zarf + that</code> → so effective that · so quickly that</li>
      <li><code class="k">such + (a/an) + sıfat + isim + that</code> → such a complex problem that</li>
      <li><code class="k">so many/much/few/little + isim + that</code></li>
      <li><code class="k">; therefore, / ; consequently, / ; as a result,</code> + cümle</li>
      <li><code class="k">, thus / hence + V-ing veya isim</code> → thus making it ideal · hence the name</li>
    </ul>
    <div class="ex">The test was <em>so</em> difficult <em>that</em> few students passed.<br><span class="muted">so + sıfat + that</span></div>
    <div class="ex">It was <em>such</em> a difficult test <em>that</em> few students passed.<br><span class="muted">such + a + sıfat + isim + that</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> so ile such'ı karıştırmak. Arkadan hemen isim öbeği (a/an ile başlayan) geliyorsa <em>such</em>, yalnızca sıfat/zarf geliyorsa <em>so</em> kullanılır.</div>`},
  "con-purpose": {t:"Amaç bağlaçları", html:`
    <p>Amaç yapıları “-mek için, -sin diye” anlamı verir. Seçimi belirleyen şey boşluktan sonra <b>yalın fiil mi yoksa cümle mi</b> geldiğidir. so that'li cümlelerde genellikle can/could/will/would kullanılır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">in order to / so as to + V1</code> → in order to save time</li>
      <li><code class="k">in order not to / so as not to + V1</code> → -memek için</li>
      <li><code class="k">so that / in order that + özne + can/could/will</code> → so that everyone can hear</li>
      <li><code class="k">lest + özne + (should) V1</code> → -mesin diye (resmî)</li>
      <li><code class="k">for fear that + cümle / for fear of + V-ing</code> → korkusuyla</li>
    </ul>
    <div class="ex">She spoke slowly <em>so that</em> the audience <em>could</em> follow her.<br><span class="muted">so that + özne + could</span></div>
    <div class="ex">Keep the files safe <em>lest</em> they <em>be</em> lost.<br><span class="muted">lest zaten olumsuz anlamlıdır; ayrıca not kullanılmaz</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> lest'ten sonra not eklemek (<em>lest they not be lost</em> ✗). lest “-mesin diye” anlamını kendi içinde taşır.</div>`},
  "con-correlative": {t:"Eşli bağlaçlar", html:`
    <p>Eşli bağlaçlar iki parçadan oluşur ve <b>parçaları asla karıştırılamaz</b>. Paired-blank sorularda önce eşleri kontrol et (either–or, neither–nor), sonra cümlenin olumlu/olumsuz anlamına bak. Bağlanan öğeler aynı yapıda olmalıdır (fiil–fiil, isim–isim).</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">both … and</code> hem … hem de (fiil çoğul)</li>
      <li><code class="k">either … or</code> ya … ya da · <code class="k">neither … nor</code> ne … ne de (fiil yakın özneye uyar)</li>
      <li><code class="k">not only … but also</code> sadece … değil, aynı zamanda</li>
      <li><code class="k">whether … or (not)</code> … mı yoksa … mı</li>
    </ul>
    <div class="ex"><em>Neither</em> the manager <em>nor</em> the employees <em>were</em> informed.<br><span class="muted">fiil yakındaki özneye (employees) uyar</span></div>
    <div class="ex">The drug <em>not only</em> relieves pain <em>but also</em> reduces swelling.<br><span class="muted">iki fiil paralel yapıda</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> neither … nor yapısının zaten olumsuz olduğunu unutup cümleye ayrıca not eklemek ya da “either … nor” gibi yanlış eşleştirmeleri seçmek.</div>`},
  "con-time": {t:"Zaman bağlaçları", html:`
    <p>Zaman bağlaçlarında hem <b>anlam</b> hem <b>zaman uyumu</b> sorulur. Gelecek anlamlı zaman cümlelerinde will kullanılmaz (once the law <em>comes</em> into force). by the time çoğu zaman ana cümlede perfect tense ister.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">as soon as / once</code> -er -mez, -dikten sonra</li>
      <li><code class="k">until / till</code> -e kadar (ana cümle süreklilik veya olumsuzluk)</li>
      <li><code class="k">by the time + past simple → past perfect</code> · <code class="k">by the time + present simple → future perfect</code></li>
      <li><code class="k">now that</code> artık … olduğuna göre (zaman + sebep)</li>
      <li><code class="k">before / after / while / when</code></li>
    </ul>
    <div class="ex"><em>By the time</em> we arrived, the film <em>had</em> already <em>started</em>.<br><span class="muted">by the time + V2, had + V3</span></div>
    <div class="ex"><em>Now that</em> the exams are over, students can relax.<br><span class="muted">sınavlar bittiğine göre artık</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> until ile by the time'ı karıştırmak. Ana cümlede <em>already</em> ve past perfect varsa “o zamana gelindiğinde” anlamı gerekir → by the time.</div>`}
});
