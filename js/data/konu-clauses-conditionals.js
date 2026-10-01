// Topic data: clauses (week 3), cond (week 4)
TOPIC_BANK.push({
  id: "clauses",
  n: "Relative & Noun Clauses",
  s: "Sıfat ve isim cümlecikleri, kısaltma, fiil kalıpları",
  week: 3,
  html: `
    <p><b>Relative clause</b> (sıfat cümleciği) kendinden önceki bir ismi niteler: <code class="k">who, which, that, whose, whom, where, when</code>. <b>Noun clause</b> (isim cümleciği) ise cümlenin tamamında özne ya da nesne görevi görür: <code class="k">that, whether, if, what, how, whoever</code>. YDS'de özellikle cloze test ve cümle tamamlama sorularında bu yapılar sıkça çıkar.</p>
    <h4>Relative pronoun seçimi</h4>
    <ul>
      <li><code class="k">who</code> insan (özne) · <code class="k">whom</code> insan (nesne / edat sonrası) · <code class="k">which</code> nesne/hayvan · <code class="k">that</code> insan+nesne (yalnızca virgülsüz)</li>
      <li><code class="k">whose</code> + isim: iyelik (ki onun …) · <code class="k">where</code> yer · <code class="k">when</code> zaman</li>
      <li>Virgüllü (non-defining) yapılarda <b>that kullanılmaz</b>; edattan sonra da that gelmez.</li>
    </ul>
    <h4>Edat + which/whom</h4>
    <ul>
      <li><em>the method <b>by which</b></em>, <em>the house <b>in which</b></em> (= where), <em>the people <b>to whom</b></em></li>
      <li>Miktar: <em>most of which / some of whom / none of which</em> (virgülden sonra)</li>
    </ul>
    <h4>Reduction (Kısaltma)</h4>
    <ul>
      <li>Aktif → <b>V-ing</b>: the people <em>who live</em> here → the people <em>living</em> here</li>
      <li>Pasif → <b>V3</b>: the book <em>which was written</em> → the book <em>written</em></li>
      <li>the first / the last / the only + <b>to V</b>: the first woman <em>to win</em></li>
      <li>Önce olan eylem → <b>Having V3</b>: <em>Having finished</em> the report, she left.</li>
    </ul>
    <h4>Noun clause</h4>
    <ul>
      <li><em>What</em> he said surprised us. (what = the thing that)</li>
      <li><em>Whether</em> (or not) it works is unclear. Özne konumunda <b>if</b> kullanılmaz.</li>
      <li><em>The fact that</em> + tam cümle: edatlardan sonra that tek başına gelemez.</li>
    </ul>
    <h4>Gerund / Infinitive</h4>
    <ul>
      <li>+ V-ing: avoid, deny, consider, enjoy, postpone, risk</li>
      <li>+ to V: manage, fail, decide, afford, refuse, tend</li>
      <li>Anlam değiştirenler: remember/forget/stop/regret/try + ing (geçmiş/yapılan) vs. + to (yapılacak/amaç)</li>
    </ul>
    <div class="ex">The scientists <em>conducting</em> the study, <em>most of whom</em> are biologists, doubt <em>whether</em> the results can be replicated.<br><span class="muted">Kısaltma + edatlı relative + noun clause bir arada.</span></div>
    <div class="tip"><b>İpucu:</b> Boşluktan sonra gelen yapıya bak: tam cümle (özne+yüklem) varsa whose/where/when/edat+which; öznesi eksik bir yüklem varsa who/which/that.</div>`,
  qs: [
    {id:"clauses-01", sub:"rel-pronoun", q:"The archaeologists, ---- findings were published last month, claim that the site is older than previously thought.", o:["who","whose","which","whom","that"], a:1, e:"Boşluktan sonra gelen “findings” isminin sahibi arkeologlardır, bu yüzden iyelik bildiren whose gerekir. who/which ardından doğrudan fiil ister; that ise virgüllü yapıda kullanılamaz."},
    {id:"clauses-02", sub:"rel-pronoun", q:"The Amazon rainforest, ---- produces a significant share of the world's oxygen, is being cleared at an alarming rate.", o:["where","that","which","who","whose"], a:2, e:"Boşluktan sonra öznesi eksik bir yüklem (produces) var ve nitelenen şey cansız bir isim; bu yüzden which. that virgüllü (non-defining) yapıda kullanılamaz; where ise ardından tam cümle ister."},
    {id:"clauses-03", sub:"rel-pronoun", q:"The 1990s was a decade ---- the internet began to transform the way people communicate.", o:["which","where","whom","what","when"], a:4, e:"Nitelenen isim bir zaman ifadesi (decade) ve boşluktan sonra tam bir cümle (the internet began…) geliyor; bu yüzden when. which ardından öznesi ya da nesnesi eksik bir yapı ister."},
    {id:"clauses-04", sub:"rel-pronoun", q:"Marie Curie, ---- many regard as the most influential female scientist in history, won two Nobel Prizes.", o:["whom","that","whose","which","what"], a:0, e:"“many regard ---- as…” yapısında Marie Curie “regard” fiilinin nesnesidir; insan + nesne konumu whom gerektirir. that virgüllü yapıda kullanılamaz, which insan için kullanılmaz."},
    {id:"clauses-05", sub:"rel-prep", q:"The committee reviewed the criteria ---- the candidates would be evaluated.", o:["which","on that","by whom","by which","where"], a:3, e:"“evaluate someone by criteria” kalıbı nedeniyle edat + which gerekir: by which. Pasif cümle tam olduğu için tek başına which olmaz; by whom insanlar için, edat + that ise hiç kullanılmaz."},
    {id:"clauses-06", sub:"rel-prep", q:"The survey involved 2,000 participants, ---- reported experiencing sleep problems at least once a week.", o:["most of them","who most of","most of which","most of whom","most whom"], a:3, e:"Virgülden sonra iki cümleyi bağlayacak bir relative gerekir; katılımcılar insan olduğu için most of whom. “most of them” bağlaç olmadığından iki cümleyi virgülle bağlayamaz; most of which ise cansızlar içindir."},
    {id:"clauses-07", sub:"rel-prep", q:"The laboratory ---- the vaccine was developed has recently received additional government funding.", o:["that","which","whose","of which","in which"], a:4, e:"Boşluktan sonraki pasif cümle (the vaccine was developed) eksiksizdir, dolayısıyla yer bildiren in which (= where) gerekir. that/which ardından eksik bir öğe beklerdi; of which ise anlamca uymaz."},
    {id:"clauses-08", sub:"rel-prep", q:"The research team published a report, the conclusions ---- have been challenged by several independent experts.", o:["of which","which","of whom","whose","that"], a:0, e:"“the conclusions of the report” anlamı “the conclusions of which” yapısıyla verilir. whose ismin önüne gelir (whose conclusions), isimden sonra gelemez; of whom ise insanlar içindir."},
    {id:"clauses-09", sub:"rel-reduction", q:"Students ---- to apply for the scholarship must submit their applications before the end of March.", o:["wished","wishing","are wishing","who wishing","to wish"], a:1, e:"“Students who wish to apply” aktif bir relative clause olduğu için V-ing ile kısaltılır: wishing. wished pasif anlam verir; “who wishing” ise hem who hem -ing kullandığı için hatalıdır."},
    {id:"clauses-10", sub:"rel-reduction", q:"Most of the artefacts ---- during the excavation are now on display at the national museum.", o:["discovering","having discovered","were discovered","to discover","discovered"], a:4, e:"Eserler bulunur, kendileri bulmaz; “which were discovered” pasif yapısı V3 ile kısaltılır: discovered. discovering/having discovered aktif anlam taşır; were discovered ise cümlede ikinci bir çekimli fiil yaratır."},
    {id:"clauses-11", sub:"rel-reduction", q:"Neil Armstrong was the first person ---- on the surface of the Moon.", o:["walking","walked","to walk","having walked","who walking"], a:2, e:"the first / the last / the only gibi ifadelerden sonra relative clause “to V” ile kısaltılır: the first person to walk. walking burada kalıba uymayan en çekici çeldiricidir."},
    {id:"clauses-12", sub:"rel-reduction", q:"---- the report thoroughly, the minister decided to postpone the announcement.", o:["Having read","Being read","Read","Having been read","To have read"], a:0, e:"Bakan önce raporu okumuş, sonra karar vermiştir; aktif ve önceki eylem Having V3 ile verilir. Having been read ve Being read pasif olduğu için özneye (the minister) uymaz."},
    {id:"clauses-13", sub:"noun-clause", q:"---- or not the new policy will reduce unemployment is still unclear.", o:["That","If","Whether","What","Which"], a:2, e:"“or not” ve “unclear” belirsizlik bildirir; özne konumundaki noun clause için whether gerekir. if özne konumunda cümle başında kullanılamaz ve “if or not” kalıbı yoktur."},
    {id:"clauses-14", sub:"noun-clause", q:"Scientists have not yet been able to explain ---- causes some whales to beach themselves.", o:["that","which","whether","what","how"], a:3, e:"“causes” fiilinin öznesi eksik; hem explain'in nesnesi hem de causes'ın öznesi olabilecek what (= the thing that) gerekir. how ve whether ardından tam cümle ister."},
    {id:"clauses-15", sub:"noun-clause", q:"---- the company had been warned about the safety risks makes the accident even harder to justify.", o:["What","Whether","The fact that","That is","Although"], a:2, e:"Boşluktan sonra tam bir cümle var ve bu cümle “makes” fiilinin öznesi; gerçek bir durumu bildirdiği için The fact that. Although bir zarf cümleciği başlatır ve özne olamaz; what ardından eksik cümle ister."},
    {id:"clauses-16", sub:"noun-clause", q:"The museum offers free guided tours to ---- is interested in the history of the city.", o:["whoever","whomever","whichever","who","however"], a:0, e:"“is interested” fiilinin öznesi eksik ve bir öncül isim yok; “anyone who” anlamındaki whoever gerekir. to edatından sonra gelse de fiilin öznesi olduğu için whomever yanlıştır."},
    {id:"clauses-17", sub:"ger-inf", q:"Despite repeated attempts, the negotiators failed ---- an agreement on the trade tariffs.", o:["reaching","to reach","reach","to reaching","having reached"], a:1, e:"fail fiili to-infinitive alır: fail to reach. reaching ise avoid/deny gibi -ing alan fiillerle karıştırılan çeldiricidir."},
    {id:"clauses-18", sub:"ger-inf", q:"Many patients avoid ---- to the doctor until their symptoms become severe.", o:["to go","go","to going","going","gone"], a:3, e:"avoid fiili her zaman gerund (V-ing) alır: avoid going. to go, avoid ile hiçbir anlamda kullanılamaz."},
    {id:"clauses-19", sub:"ger-inf", q:"Looking at old photographs, the elderly man remembered ---- in the village as a child.", o:["to live","living","live","to have lived","being lived"], a:1, e:"remember + V-ing geçmişte yaşanmış bir anıyı hatırlamayı anlatır; “as a child” geçmişe işaret eder. remember + to V ise yapılması gereken bir işi unutmamak anlamındadır."},
    {id:"clauses-20", sub:"ger-inf", q:"Although the author denied ---- the documents, investigators found his fingerprints on the files.", o:["to leak","leak","leaked","to have leaked","having leaked"], a:4, e:"deny fiili gerund alır; eylem inkârdan önce gerçekleştiği için having leaked uygundur. deny to-infinitive almadığından to leak ve to have leaked yanlıştır."}
  ]
});

TOPIC_BANK.push({
  id: "cond",
  n: "Conditionals, Wish & Inversion",
  s: "Koşul, dilek, devrik yapı ve karşılaştırma",
  week: 4,
  html: `
    <p>Koşul cümlelerinde doğru zaman uyumu, YDS cümle tamamlama sorularının en sık test edilen konusudur. Boşluktaki iki fiilin <b>birbiriyle</b> ve cümledeki <b>zaman zarfıyla</b> (now, last year, today) uyumuna bak.</p>
    <h4>Conditional türleri</h4>
    <ul>
      <li><b>Type 0:</b> If + present, present (genel doğru, bilimsel gerçek)</li>
      <li><b>Type 1:</b> If + present, will + V (gerçekçi gelecek)</li>
      <li><b>Type 2:</b> If + past (were), would/could + V (şimdiki/genel hayali durum)</li>
      <li><b>Type 3:</b> If + had V3, would have V3 (geçmişe dair hayal/pişmanlık)</li>
      <li><b>Mixed:</b> If + had V3, would + V (geçmiş sebep → şimdiki sonuç) · If + past, would have V3 (kalıcı durum → geçmiş sonuç)</li>
    </ul>
    <h4>If yerine kullanılanlar</h4>
    <ul>
      <li><code class="k">unless</code> = if not · <code class="k">provided/providing that, as long as, on condition that</code> = şartıyla</li>
      <li><code class="k">in case</code> = olur da … diye (önlem) · <code class="k">otherwise</code> = aksi takdirde (iki cümle arasında)</li>
      <li><code class="k">but for / without</code> + isim = … olmasaydı · <code class="k">supposing / suppose</code> = farz et ki</li>
    </ul>
    <h4>Wish ve benzerleri</h4>
    <ul>
      <li>wish / if only + past → şimdiki keşke · + had V3 → geçmiş keşke · + would → şikâyet/değişim isteği</li>
      <li>It's (high) time + past · would rather + özne + past</li>
    </ul>
    <h4>Inversion (Devrik yapı)</h4>
    <ul>
      <li>If'siz koşul: <em>Had I known</em> (type 3), <em>Were it not for</em> (type 2), <em>Should you need</em> (type 1)</li>
      <li>Olumsuz/kısıtlayıcı başlangıç + yardımcı fiil + özne: <em>Never have I…, Hardly had … when, No sooner had … than, Not only did …, Only after … did, Little did they know</em></li>
    </ul>
    <h4>Karşılaştırma</h4>
    <ul>
      <li><em>The more</em> you read, <em>the better</em> you write.</li>
      <li>much / far / a lot + comparative (very kullanılmaz) · twice as … as · not as/so … as</li>
    </ul>
    <div class="ex"><em>Had the government acted earlier</em>, the crisis <em>would have been</em> avoided.<br><span class="muted">= If the government had acted earlier… (Type 3 devrik)</span></div>
    <div class="tip"><b>İpucu:</b> Şıklarda “had + V3 / would + V” gibi karışık bir çift görürsen cümlede <u>now, today, still</u> gibi şimdiki zaman işareti ara; mixed conditional orada saklıdır.</div>`,
  qs: [
    {id:"cond-01", sub:"cond-types", q:"If the temperature of water ---- 100°C at sea level, it boils.", o:["reaches","will reach","reached","would reach","had reached"], a:0, e:"Ana cümle geniş zamanda (it boils) ve bilimsel bir gerçek anlatılıyor; Type 0 olduğu için if kısmı da present: reaches. will reach if cümleciğinin içinde kullanılmaz."},
    {id:"cond-02", sub:"cond-types", q:"If the central bank ---- interest rates next month, borrowing costs for households will rise considerably.", o:["raised","would raise","raises","had raised","will have raised"], a:2, e:"Ana cümlede will rise ve “next month” gerçekçi bir gelecek bildiriyor; Type 1 olduğundan if kısmı present simple: raises. raised Type 2'ye aittir ve will ile uyumsuzdur."},
    {id:"cond-03", sub:"cond-types", q:"If the engineers ---- the warning signs more seriously, the bridge ---- in 2018.", o:["took / would not collapse","had taken / would not have collapsed","take / will not collapse","had taken / would not collapse","would take / had not collapsed"], a:1, e:"“in 2018” her iki eylemin de geçmişte kaldığını gösterir; Type 3: had taken / would not have collapsed. “had taken / would not collapse” şimdiki sonuç bildirdiği için 2018 ile uyuşmaz."},
    {id:"cond-04", sub:"cond-types", q:"If governments ---- more in renewable energy today, many countries ---- so dependent on imported oil.", o:["invest / will not be","had invested / would not have been","would invest / were not","invested / would not be","have invested / would not be"], a:3, e:"“today” ve “so dependent” şimdiki gerçeğe aykırı bir durum anlatır; Type 2: invested / would not be. “had invested / would not have been” geçmişe ait olduğu için today ile çelişir."},
    {id:"cond-05", sub:"cond-mixed", q:"If the city ---- a proper drainage system decades ago, residents ---- flooding every spring now.", o:["built / would not face","had built / would not have faced","builds / will not face","would build / had not faced","had built / would not face"], a:4, e:"“decades ago” geçmiş sebebi, “now” şimdiki sonucu gösterir; mixed conditional: had built / would not face. “would not have faced” now ile uyuşmadığı için en çekici çeldiricidir."},
    {id:"cond-06", sub:"cond-mixed", q:"If she ---- fluent in German, she ---- the translation job last year.", o:["had been / would accept","is / will accept","would be / had accepted","were / would have accepted","were / would accept"], a:3, e:"Almanca bilmemek genel/kalıcı bir durumdur (Type 2 koşul), iş teklifi ise geçmişte kaldı (“last year”, Type 3 sonuç): were / would have accepted. “were / would accept” last year ile uyumsuzdur."},
    {id:"cond-07", sub:"cond-mixed", q:"Had the researchers not received early funding, the vaccine ---- available to the public today.", o:["would not have been","will not be","would not be","had not been","was not"], a:2, e:"Had … V3 geçmiş koşuldur ama “today” şimdiki sonucu gösterir; mixed yapı: would not be. would not have been geçmiş sonuç bildirir ve today ile çelişir."},
    {id:"cond-08", sub:"cond-alt", q:"Doctors warn that the patient's condition will deteriorate ---- she receives treatment immediately, so they have scheduled the operation for this afternoon.", o:["unless","provided that","as long as","in case","even if"], a:0, e:"Anlam “hemen tedavi görmezse durumu kötüleşecek” olmalıdır; unless = if not. provided that / as long as “tedavi görürse kötüleşecek” gibi mantıksız bir anlam verir; even if operasyon planlamayı anlamsız kılar."},
    {id:"cond-09", sub:"cond-alt", q:"Employees may work from home ---- they complete their assigned tasks on time.", o:["unless","otherwise","in case","but for","provided that"], a:4, e:"Evden çalışma izni bir şarta bağlanıyor: provided that (= şartıyla). in case “olur da … diye” önlem anlamı taşır; unless anlamı tersine çevirir."},
    {id:"cond-10", sub:"cond-alt", q:"---- the timely intervention of the fire brigade, the whole building would have burned down.", o:["Unless","But for","Provided that","In case of","As long as"], a:1, e:"Boşluktan sonra isim öbeği var ve ana cümle Type 3; “… olmasaydı” anlamındaki But for (+ isim) gerekir. Unless, provided that ve as long as ardından tam cümle ister."},
    {id:"cond-11", sub:"cond-alt", q:"Travellers are advised to carry some cash ---- their credit cards are not accepted in rural areas.", o:["unless","otherwise","in case","provided that","so long as"], a:2, e:"Nakit taşımak olası bir soruna karşı alınan önlemdir: in case (= olur da … diye). provided that / so long as nakit taşımayı kartların geçmemesi şartına bağlar, anlam bozulur; otherwise iki cümle arasında noktalı virgülle kullanılır."},
    {id:"cond-12", sub:"wish", q:"Many residents now wish the council ---- the old factory site into a park instead of selling it to developers last year.", o:["turned","would turn","has turned","had turned","turns"], a:3, e:"Pişmanlık geçmişteki bir karara ait (“last year”); geçmişe yönelik wish + had V3: had turned. would turn gelecekte bir değişim isteği bildirir ve last year ile uyuşmaz."},
    {id:"cond-13", sub:"wish", q:"It is high time the international community ---- decisive action against climate change.", o:["takes","will take","has taken","had taken","took"], a:4, e:"It's (high) time + özne kalıbından sonra anlam şimdi olsa da fiil past simple olur: took. had taken geçmişe yönelik bir pişmanlık gibi okunur ve kalıba uymaz."},
    {id:"cond-14", sub:"wish", q:"I'd rather you ---- the details of the agreement to the press until it has been officially signed.", o:["don't reveal","didn't reveal","to not reveal","hadn't revealed","won't reveal"], a:1, e:"would rather + farklı özne yapısında şimdiki/gelecek istek için past simple kullanılır: didn't reveal. hadn't revealed geçmişe ait bir tercih bildirir; “until it has been signed” ise ileriye dönüktür."},
    {id:"cond-15", sub:"inv", q:"---- had the new regulations come into force than several companies announced plans to relocate abroad.", o:["Hardly","Scarcely","Not only","No sooner","Only after"], a:3, e:"Cümledeki “than” bağlacı No sooner … than kalıbını gösterir. Hardly ve Scarcely aynı anlamı taşısa da “when” ile kullanılır."},
    {id:"cond-16", sub:"inv", q:"---- you require any further information, please do not hesitate to contact our office.", o:["Were","Had","Should","Unless","Did"], a:2, e:"Boşluktan sonra yalın fiil (require) geliyor; Type 1 devrik koşul Should + özne + V ile kurulur. Were ve Had ardından yalın fiil gelemez; unless anlamı bozar."},
    {id:"cond-17", sub:"inv", q:"Only after the results were analysed in detail ---- the significance of the discovery.", o:["the scientists realised","the scientists did realise","had realised the scientists","realised the scientists","did the scientists realise"], a:4, e:"Only after … ile başlayan cümlede ana cümle devrik olur: yardımcı fiil + özne + V (did the scientists realise). Düz sıra (the scientists realised) bu kalıpta yanlıştır."},
    {id:"cond-18", sub:"comp", q:"The more carefully a study is designed, ---- its results are likely to be.", o:["the more reliable","more reliable","the most reliable","the reliable","as reliable"], a:0, e:"“The more …, the + comparative” paralel kalıbı ikinci kısımda da the + comparative ister: the more reliable. the most reliable üstünlük (superlative) olduğu için kalıba uymaz."},
    {id:"cond-19", sub:"comp", q:"Electric vehicles are now ---- cheaper to maintain than conventional cars, according to a recent report.", o:["very","much","so","too","more"], a:1, e:"Comparative sıfatı (cheaper) güçlendirmek için much / far / a lot kullanılır. very yalnızca sıfatın yalın hâlini niteler; “more cheaper” ise çift karşılaştırma hatasıdır."},
    {id:"cond-20", sub:"comp", q:"The population of the city is almost ---- it was two decades ago.", o:["twice as large as","as twice large as","twice larger as","as large twice as","twice as larger than"], a:0, e:"Kat bildiren karşılaştırma “twice / three times + as + sıfat + as” sırasıyla kurulur: twice as large as. as … as içinde comparative (larger) ya da than kullanılamaz."}
  ]
});

Object.assign(LESSONS, {
  "rel-pronoun": {t:"Relative pronoun seçimi", html:`
    <p>Doğru relative pronoun'u seçmek için iki şeye bak: <b>nitelenen isim</b> (insan, nesne, yer, zaman) ve <b>boşluktan sonraki yapı</b>. Boşluktan sonra öznesi eksik bir yüklem varsa who/which/that; tam bir cümle varsa whose + isim, where veya when gelir. Virgüllü (non-defining) yapılarda that kullanılmaz.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>insan + <code class="k">who</code> + fiil · insan + <code class="k">whom</code> + özne + fiil</li>
      <li>nesne + <code class="k">which / that</code> + fiil (virgüllüyse sadece which)</li>
      <li>isim + <code class="k">whose</code> + isim + fiil (iyelik)</li>
      <li>yer + <code class="k">where</code> + tam cümle · zaman + <code class="k">when</code> + tam cümle</li>
    </ul>
    <div class="ex">The novelist, <em>whose</em> latest book became a bestseller, rarely gives interviews.<br><span class="muted">whose + isim (book): kitabı çok satan romancı</span></div>
    <div class="ex">This is the town <em>where</em> the treaty was signed.<br><span class="muted">where sonrası tam cümle; “the town which the treaty was signed” yanlış</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Virgülden sonra that seçmek (“Istanbul, that is…”) ya da where'den sonra öznesi eksik cümle kullanmak. where = in/at which; ardından mutlaka özne + yüklem gelir.</div>`},
  "rel-prep": {t:"Edat + which / whom ve miktar ifadeleri", html:`
    <p>Relative clause içindeki fiil ya da isim bir edat gerektiriyorsa, resmi yazıda edat relative pronoun'un önüne taşınır. Edattan sonra yalnızca <b>which</b> (nesne) veya <b>whom</b> (insan) gelir; <b>that ve who kullanılmaz</b>. Miktar bildiren ifadeler (most, some, all, none, both, many) de virgülden sonra “of which / of whom” ile bağlanır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>the method <code class="k">by which</code> … · the extent <code class="k">to which</code> … · the room <code class="k">in which</code> (= where)</li>
      <li>the person <code class="k">to whom</code> I wrote · the experts <code class="k">on whom</code> we rely</li>
      <li>…, <code class="k">most of whom / some of which / none of which</code> + fiil</li>
      <li>the book, <code class="k">the title of which</code> … (= whose title)</li>
    </ul>
    <div class="ex">The company employs 500 people, <em>most of whom</em> work part-time.<br><span class="muted">“most of them” olsaydı iki cümle bağlaçsız kalırdı</span></div>
    <div class="ex">This is the process <em>by which</em> plants convert sunlight into energy.<br><span class="muted">convert by a process → by which</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Virgülden sonra “most of them / some of it” seçmek. Bunlar zamirdir, bağlaç değildir; iki tam cümleyi birleştirmek için “of whom / of which” gerekir.</div>`},
  "rel-reduction": {t:"Relative clause kısaltma (reduction)", html:`
    <p>Relative clause'da pronoun özne konumundaysa cümle kısaltılabilir. Önce <b>aktif mi pasif mi</b> olduğuna karar ver: nitelenen isim eylemi yapıyorsa V-ing, eyleme maruz kalıyorsa V3. Sıra bildiren ifadelerden sonra to V kullanılır; özneyle aynı kişi tarafından daha önce yapılmış eylem ise Having V3 ile verilir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>Aktif: who/which + V → <code class="k">V-ing</code> (people <em>living</em> in cities)</li>
      <li>Pasif: who/which + be + V3 → <code class="k">V3</code> (goods <em>produced</em> in China)</li>
      <li>the first / last / only / next + <code class="k">to V</code> (the first <em>to arrive</em>)</li>
      <li>Önceki aktif eylem: <code class="k">Having V3</code> · önceki pasif: <code class="k">Having been V3</code></li>
    </ul>
    <div class="ex">Applicants <em>selected</em> for the interview will be contacted by email.<br><span class="muted">başvuranlar seçilir → pasif → V3</span></div>
    <div class="ex"><em>Having completed</em> the experiment, the team analysed the data.<br><span class="muted">önce deney bitti, sonra analiz</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Kısaltmada who/which'i bırakmak (“who living”) veya çekimli fiil kullanmak (“were discovered”). Kısaltılmış yapıda ne pronoun ne de çekimli fiil kalır.</div>`},
  "noun-clause": {t:"Noun clause (isim cümleciği)", html:`
    <p>Noun clause bir cümlenin <b>öznesi</b> ya da <b>nesnesi</b> olur. Seçim, boşluktan sonraki cümlenin tam mı eksik mi olduğuna ve anlama bağlıdır. <b>what / whoever / whichever</b> kendi içinde bir öğe eksik olan cümle alır; <b>that / whether / if / how / why</b> tam cümle alır.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">That</code> + tam cümle: kesin bilgi (That he lied is obvious.)</li>
      <li><code class="k">Whether (or not)</code> + tam cümle: belirsizlik; özne konumunda ve edattan sonra <b>if kullanılmaz</b></li>
      <li><code class="k">What</code> + eksik cümle = the thing that (What happened shocked us.)</li>
      <li><code class="k">whoever</code> = anyone who (fiilin öznesiyse whomever değil)</li>
      <li>Edat + <code class="k">the fact that</code> + tam cümle (despite the fact that)</li>
    </ul>
    <div class="ex"><em>What</em> surprised researchers was the speed of the recovery.<br><span class="muted">surprised fiilinin öznesi eksik → what</span></div>
    <div class="ex">It is not clear <em>whether</em> the treaty will be ratified.<br><span class="muted">belirsizlik → whether</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Tam cümleden önce what seçmek (“What the company was warned…”) ya da cümle başında if kullanmak. Tam cümle + gerçek bilgi → that / the fact that; tam cümle + belirsizlik → whether.</div>`},
  "ger-inf": {t:"Gerund / Infinitive fiil kalıpları", html:`
    <p>Bazı fiiller kendisinden sonra gelen fiilin biçimini belirler. YDS'de en çok test edilenler ezber gerektiren fiil listeleri ve <b>anlamı değişen</b> fiillerdir. Edattan (to dahil, örn. look forward to, be used to, object to) sonra daima V-ing gelir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>+ <code class="k">V-ing</code>: avoid, deny, consider, delay, postpone, risk, involve, admit, mind, resist</li>
      <li>+ <code class="k">to V</code>: manage, fail, afford, refuse, decide, tend, seem, attempt, aim</li>
      <li>remember / forget + <b>ing</b> = yapılmış olanı · + <b>to</b> = yapılacak olanı</li>
      <li>stop + ing = bırakmak · stop + to = … yapmak için durmak</li>
      <li>regret + ing = yaptığına pişman olmak · regret to inform = üzülerek bildirmek</li>
    </ul>
    <div class="ex">The firm <em>managed to reduce</em> costs without <em>cutting</em> jobs.<br><span class="muted">manage + to V · without (edat) + V-ing</span></div>
    <div class="ex">I remember <em>visiting</em> the museum as a child, but I forgot <em>to buy</em> tickets this time.<br><span class="muted">geçmiş anı vs. yapılması gereken iş</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> “avoid to do / deny to have done” gibi kalıplar kurmak. avoid ve deny asla to-infinitive almaz; önceki eylem vurgulanacaksa having V3 kullanılır.</div>`},
  "cond-types": {t:"Conditional türleri (0/1/2/3)", html:`
    <p>Koşul cümlesinde doğru türü seçmek için anlama ve cümledeki zaman ipuçlarına bak: genel gerçek mi, gerçekçi gelecek mi, şimdiki hayal mi, geçmiş hayal mi? if cümleciğinin içinde <b>will / would kullanılmaz</b>.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><b>Type 0:</b> If + present, present → bilimsel gerçek</li>
      <li><b>Type 1:</b> If + present, will / may / can + V → olası gelecek</li>
      <li><b>Type 2:</b> If + past (were), would / could / might + V → şimdiye aykırı durum</li>
      <li><b>Type 3:</b> If + had V3, would / could have V3 → geçmişe aykırı durum</li>
    </ul>
    <div class="ex">If demand <em>falls</em> next quarter, the factory <em>will cut</em> production.<br><span class="muted">next quarter → gerçekçi gelecek (Type 1)</span></div>
    <div class="ex">If the warning <em>had been issued</em> earlier, thousands <em>could have been evacuated</em>.<br><span class="muted">geçmişte olmadı → Type 3</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Zaman zarfını görmeden çift seçmek. “today / now” varsa sonuç would + V; “in 2018 / last year” varsa would have V3 olmalıdır.</div>`},
  "cond-mixed": {t:"Mixed conditionals", html:`
    <p>Mixed conditional'da koşul ve sonuç <b>farklı zamanlara</b> aittir. En yaygını geçmişteki bir olayın bugünkü sonucudur. İpucu genellikle cümlede birlikte bulunan <b>ago / last year</b> ile <b>now / today / still</b> ifadeleridir. Devrik biçimi de (Had + özne + V3) sık çıkar.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>Geçmiş sebep → şimdiki sonuç: <code class="k">If + had V3, would + V</code></li>
      <li>Kalıcı/şimdiki durum → geçmiş sonuç: <code class="k">If + past (were), would have V3</code></li>
      <li>Devrik: <code class="k">Had + özne + V3, would + V (now)</code></li>
    </ul>
    <div class="ex">If I <em>had accepted</em> that job in 2015, I <em>would be living</em> in Canada now.<br><span class="muted">geçmiş karar → bugünkü durum</span></div>
    <div class="ex">If he <em>were</em> more patient, he <em>wouldn't have quit</em> the project last month.<br><span class="muted">genel kişilik özelliği → geçmiş sonuç</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> if kısmı had V3 diye sonuç kısmını otomatik olarak would have V3 seçmek. Cümlede “now / today” varsa sonuç would + V olmalıdır.</div>`},
  "cond-alt": {t:"If yerine kullanılan bağlaçlar", html:`
    <p>YDS'de if'in eş anlamlıları ve anlamı farklı olan benzerleri birbirine karıştırılmak üzere şık olarak verilir. Önce <b>anlamı</b> (şart mı, önlem mi, olumsuz koşul mu), sonra <b>boşluktan sonraki yapıyı</b> (tam cümle mi, isim mi) kontrol et.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">unless</code> + cümle = if … not (… mezse)</li>
      <li><code class="k">provided (that) / providing / as long as / on condition that</code> + cümle = şartıyla</li>
      <li><code class="k">in case</code> + cümle = olur da … diye (önlem) · <code class="k">in case of</code> + isim</li>
      <li><code class="k">but for / without</code> + isim = … olmasaydı (Type 2/3)</li>
      <li>cümle; <code class="k">otherwise</code>, cümle = aksi takdirde · <code class="k">supposing</code> + cümle = farz edelim ki</li>
    </ul>
    <div class="ex">Take an umbrella <em>in case</em> it rains.<br><span class="muted">yağarsa diye önlem; “if it rains” ile aynı değil</span></div>
    <div class="ex"><em>But for</em> his support, the project would have failed.<br><span class="muted">but for + isim → Type 3 sonuç</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> in case'i if/provided that anlamında kullanmak ya da unless'tan sonra ayrıca not eklemek. unless zaten olumsuzluk içerir.</div>`},
  "wish": {t:"Wish, if only, would rather, it's time", html:`
    <p>Dilek ve tercih kalıplarında fiil, anlamın zamanından <b>bir adım geriye</b> kayar: şimdiki dilek için past, geçmiş dilek için past perfect. wish + would ise başkasının davranışından şikâyet ya da bir değişim isteği bildirir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li>wish / if only + <code class="k">past</code> → şimdi keşke (I wish I knew)</li>
      <li>wish / if only + <code class="k">had V3</code> → geçmişte keşke (I wish I had studied)</li>
      <li>wish + özne + <code class="k">would V</code> → şikâyet / değişim isteği</li>
      <li>It's (high / about) time + özne + <code class="k">past</code> · It's time + <code class="k">to V</code></li>
      <li>would rather + aynı özne + <code class="k">V</code> · would rather + farklı özne + <code class="k">past</code></li>
    </ul>
    <div class="ex">Many investors now wish they <em>had sold</em> their shares before the crash.<br><span class="muted">geçmişe pişmanlık → had V3</span></div>
    <div class="ex">It's high time the government <em>addressed</em> the housing crisis.<br><span class="muted">anlam şimdi, fiil past</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> It's time veya would rather'dan sonra present kullanmak (“It's time we go”). Farklı özneyle mutlaka past gelir.</div>`},
  "inv": {t:"Inversion (devrik yapı)", html:`
    <p>Olumsuz ya da kısıtlayıcı bir zarfla başlayan cümlelerde ve if'siz koşullarda <b>yardımcı fiil özneden önce</b> gelir. Yardımcı fiil yoksa do/does/did eklenir. Bazı kalıplar sabit bağlaç çiftiyle kullanılır, bu yüzden cümlenin devamındaki <b>than / when / but also</b> kelimelerine bak.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">No sooner</code> had + özne + V3 <b>than</b> … · <code class="k">Hardly / Scarcely</code> had … <b>when</b> …</li>
      <li><code class="k">Not only</code> did/have + özne … <b>but also</b> …</li>
      <li><code class="k">Only after / Only when / Not until</code> + cümle, <b>did + özne + V</b></li>
      <li><code class="k">Never / Rarely / Little</code> + yardımcı fiil + özne</li>
      <li>Koşul: <code class="k">Should</code> you need (T1) · <code class="k">Were</code> it (T2) · <code class="k">Had</code> they known (T3)</li>
    </ul>
    <div class="ex"><em>Not only did</em> the reform reduce costs, <em>but it also</em> improved efficiency.<br><span class="muted">Not only + did + özne + V</span></div>
    <div class="ex"><em>Should</em> the situation worsen, the embassy will be evacuated.<br><span class="muted">= If the situation worsens</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> Hardly/Scarcely'yi than ile, No sooner'ı when ile eşleştirmek; ya da “Only after …” sonrasında ana cümleyi düz sırayla bırakmak.</div>`},
  "comp": {t:"Karşılaştırma yapıları", html:`
    <p>Karşılaştırma sorularında hem <b>kalıbın bütünlüğü</b> (as … as, the … the) hem de <b>niteleyici seçimi</b> test edilir. Comparative sıfatları güçlendirmek için very değil much / far / a lot / considerably kullanılır. as … as kalıbında sıfat yalın hâldedir.</p>
    <h4>Kalıp</h4>
    <ul>
      <li><code class="k">The + comparative …, the + comparative …</code> (The sooner, the better)</li>
      <li><code class="k">much / far / significantly + comparative + than</code></li>
      <li><code class="k">twice / three times / half + as + sıfat + as</code></li>
      <li><code class="k">not as / not so + sıfat + as</code> · <code class="k">the same + isim + as</code></li>
      <li>comparative + <code class="k">and</code> + comparative (more and more, colder and colder)</li>
    </ul>
    <div class="ex"><em>The longer</em> the negotiations continue, <em>the less likely</em> an agreement becomes.<br><span class="muted">iki yarıda da the + comparative</span></div>
    <div class="ex">Solar panels are <em>far more efficient</em> than they were a decade ago.<br><span class="muted">far + comparative</span></div>
    <div class="tip"><b>Sık yapılan hata:</b> “twice larger than”, “as larger as” gibi karışık kalıplar ya da “very cheaper”, “more cheaper” gibi hatalı niteleme.</div>`}
});
