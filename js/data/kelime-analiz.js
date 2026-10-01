/* Paragraf analizi verisi: bağlaç/sinyal ifadeleri (işlevine göre), durak kelimeleri, eş anlamlı grupları.
   Sinyal türleri kelime panelinde renkle gösterilir; cümlenin paragraftaki görevi buna göre tahmin edilir. */
var SIGNAL_KIND = {
  zit:   {t:"Zıtlık",        d:"Yön değişiyor: önceki fikrin tersi ya da sınırlaması geliyor. Ana fikir çoğu zaman bu kelimeden sonra gelir."},
  sebep: {t:"Sebep",         d:"Bir şeyin nedeni açıklanıyor."},
  sonuc: {t:"Sonuç",         d:"Önceki cümlelerden çıkan sonuç geliyor. Paragraf tamamlama sorularında son cümle adayı."},
  ek:    {t:"Ekleme",        d:"Aynı yönde yeni bilgi ekleniyor; önceki cümleyle aynı konuda kalınır."},
  ornek: {t:"Örnek",         d:"Önceki genel fikir bir örnekle destekleniyor; örnekten önce mutlaka genel bir iddia olmalı."},
  zaman: {t:"Sıra / zaman",  d:"Olaylar ya da adımlar sıralanıyor."},
  ozet:  {t:"Özet / vurgu",  d:"Söylenen yeniden ifade ediliyor ya da vurgulanıyor; restatement sorularının mantığı."},
  kosul: {t:"Koşul",         d:"Bir şart öne sürülüyor."},
  amac:  {t:"Amaç",          d:"Bir eylemin amacı belirtiliyor."},
  temkin:{t:"Temkinli dil",  d:"Yazar kesin konuşmuyor (may, might, suggest…). Yazarın tutumu ve çıkarım sorularında önemli."}
};
var SIGNALS = {
  zit: ["however","but","yet","although","though","even though","even if","whereas","while","whilst","nevertheless","nonetheless","despite","in spite of","on the other hand","on the contrary","conversely","in contrast","by contrast","in contrast to","instead","instead of","rather than","unlike","notwithstanding","albeit","even so","regardless of","all the same","paradoxically","ironically","surprisingly","contrary to"],
  sebep: ["because","because of","since","due to","owing to","on account of","as a result of","thanks to","given that","in that","in view of","on the grounds that","for the reason that","now that","seeing that"],
  sonuc: ["therefore","thus","hence","consequently","as a result","as a consequence","accordingly","for this reason","thereby","so that","that is why","which is why","it follows that","in consequence"],
  ek: ["moreover","furthermore","in addition","in addition to","additionally","besides","also","what is more","likewise","similarly","equally","as well as","not only","in the same way","along with","apart from","further"],
  ornek: ["for example","for instance","such as","namely","in particular","particularly","notably","including","to illustrate","as an illustration","especially","specifically"],
  zaman: ["first","firstly","secondly","thirdly","then","finally","eventually","subsequently","previously","initially","meanwhile","afterwards","later","until","once","ultimately","prior to","at first","in the meantime","by the time","as soon as","since then","nowadays","currently","traditionally","historically","recently"],
  ozet: ["in short","in brief","in conclusion","to sum up","to conclude","overall","in other words","that is","that is to say","indeed","in fact","actually","above all","clearly","obviously","in general","generally","on the whole","in essence","in summary"],
  kosul: ["if","unless","provided that","providing that","as long as","otherwise","in case","only if","on condition that","whether","even when"],
  amac: ["so as to","in order to","in order that","with a view to","with the aim of","for the purpose of"],
  temkin: ["may","might","could","possibly","perhaps","probably","likely","unlikely","seem","seems","seemed","appear","appears","appeared","suggest","suggests","suggested","presumably","apparently","arguably","tend to","tends to","it is thought","it is believed","to some extent","somewhat"]
};
/* Kelime sayımında atlanan sık, anlam taşımayan kelimeler */
var STOPWORDS = ("a an the and or nor but if then else of to in on at by for with from into onto upon about above below over under between among through during before after "+
 "is are was were be been being am do does did done doing have has had having can could may might must shall should will would ought "+
 "i me my mine we us our ours you your yours he him his she her hers it its they them their theirs this that these those who whom whose which what where when why how "+
 "not no yes so such than too very just only also even more most less least much many few some any all both each every either neither other another same own "+
 "there here out up down off again further once as while because until although though whether since unless "+
 "one two three four five six seven eight nine ten first second new old way ways thing things lot lots per via etc "+
 "said says say make makes made get gets got go goes went take takes took come came use used uses using become became becomes "+
 "people person time times year years day days part parts well often still yet however therefore thus hence moreover furthermore "+
 "i.e e.g mr mrs ms dr st").split(/\s+/);

/* Eş anlamlı grupları: restatement (yakın anlam) ve kelime soruları için anlam ailesine göre */
var SYN_GROUPS = [
  {t:"Azaltmak, hafifletmek", w:["reduce","decrease","diminish","lessen","alleviate","mitigate","relieve","ease","curtail","cut down on","minimize"]},
  {t:"Artırmak, güçlendirmek", w:["increase","enhance","boost","augment","raise","amplify","intensify","reinforce","strengthen","escalate"]},
  {t:"Kötüleşmek, bozulmak", w:["deteriorate","worsen","decline","degrade","decay","aggravate","exacerbate","impair"]},
  {t:"Zayıflatmak, baltalamak", w:["undermine","weaken","erode","sap","impair","jeopardize","threaten"]},
  {t:"Ortadan kaldırmak", w:["eliminate","eradicate","abolish","remove","wipe out","do away with","get rid of"]},
  {t:"Önlemek, engellemek", w:["prevent","hinder","impede","hamper","inhibit","obstruct","deter","prohibit","preclude"]},
  {t:"Neden olmak", w:["cause","trigger","induce","bring about","give rise to","lead to","result in","provoke","generate"]},
  {t:"Açıklamak, izah etmek", w:["explain","account for","clarify","elucidate","illustrate","interpret"]},
  {t:"Ortaya çıkarmak, göstermek", w:["reveal","disclose","uncover","expose","demonstrate","indicate","show","display"]},
  {t:"İddia etmek, öne sürmek", w:["claim","assert","argue","maintain","contend","allege","put forward","suggest"]},
  {t:"Tahmin etmek", w:["predict","forecast","anticipate","foresee","estimate","project"]},
  {t:"Başarmak, elde etmek", w:["achieve","accomplish","attain","obtain","acquire","gain","secure","fulfil"]},
  {t:"Sürdürmek, korumak", w:["maintain","sustain","preserve","retain","keep up","conserve","uphold"]},
  {t:"Değiştirmek, uyarlamak", w:["change","alter","modify","adjust","adapt","transform","convert","revise"]},
  {t:"Araştırmak, incelemek", w:["investigate","examine","explore","analyze","scrutinize","look into","inspect","survey","probe"]},
  {t:"Değerlendirmek", w:["assess","evaluate","appraise","estimate","gauge","judge"]},
  {t:"Ertelemek", w:["postpone","delay","put off","defer","suspend"]},
  {t:"Vazgeçmek, bırakmak", w:["abandon","give up","quit","renounce","forsake","desert","relinquish"]},
  {t:"Katlanmak, dayanmak", w:["tolerate","endure","bear","put up with","withstand","stand"]},
  {t:"Uygulamak, yürütmek", w:["implement","carry out","conduct","execute","perform","undertake","apply"]},
  {t:"Oluşturmak, içermek", w:["constitute","comprise","consist of","make up","compose","include","contain","encompass"]},
  {t:"Çok önemli, hayati", w:["crucial","vital","essential","critical","significant","paramount","indispensable","fundamental","key"]},
  {t:"Önemsiz, ihmal edilebilir", w:["trivial","negligible","insignificant","minor","marginal","petty"]},
  {t:"Olumsuz, zararlı", w:["adverse","harmful","detrimental","damaging","hazardous","deleterious","negative","unfavourable"]},
  {t:"Yararlı, faydalı", w:["beneficial","advantageous","favourable","useful","helpful","constructive","conducive"]},
  {t:"Bol, çok miktarda", w:["abundant","plentiful","ample","copious","profuse","substantial","considerable"]},
  {t:"Az, yetersiz", w:["scarce","insufficient","inadequate","meagre","sparse","limited","deficient","rare"]},
  {t:"Açık, belirgin", w:["obvious","evident","apparent","clear","manifest","explicit","conspicuous","noticeable","distinct"]},
  {t:"Belirsiz, muğlak", w:["ambiguous","vague","obscure","unclear","uncertain","equivocal","ambivalent"]},
  {t:"Uygulanabilir, mümkün", w:["feasible","viable","practicable","workable","possible","achievable"]},
  {t:"Savunmasız, hassas", w:["vulnerable","susceptible","prone","liable","exposed","fragile","sensitive"]},
  {t:"Yaygın", w:["widespread","prevalent","common","pervasive","rampant","ubiquitous","popular"]},
  {t:"Kapsamlı", w:["comprehensive","extensive","thorough","exhaustive","broad","wide-ranging","inclusive"]},
  {t:"Kesin, doğru", w:["accurate","precise","exact","correct","definite","rigorous"]},
  {t:"Tutarlı, istikrarlı", w:["consistent","coherent","stable","steady","constant","uniform"]},
  {t:"Kaçınılmaz", w:["inevitable","unavoidable","inescapable","certain","bound to"]},
  {t:"İsteksiz", w:["reluctant","unwilling","hesitant","loath","averse","disinclined"]},
  {t:"Aşırı", w:["excessive","extreme","undue","inordinate","exorbitant","immoderate"]},
  {t:"Yalnızca, sadece", w:["merely","solely","only","simply","purely","exclusively"]},
  {t:"Büyük ölçüde", w:["considerably","significantly","substantially","greatly","markedly","remarkably","dramatically"]},
  {t:"Çoğunlukla, esas olarak", w:["mainly","mostly","largely","predominantly","primarily","chiefly","principally"]},
  {t:"Neredeyse, hemen hemen", w:["almost","nearly","virtually","practically","roughly","approximately"]},
  {t:"Sonunda", w:["eventually","ultimately","finally","in the end","in the long run"]},
  {t:"Nadiren, pek az", w:["rarely","seldom","hardly","scarcely","barely","infrequently"]},
  {t:"Sonuç, çıktı", w:["outcome","result","consequence","effect","impact","upshot","implication"]},
  {t:"Dezavantaj, sakınca", w:["drawback","disadvantage","downside","shortcoming","flaw","weakness","defect"]},
  {t:"Uzlaşma, fikir birliği", w:["consensus","agreement","accord","unanimity","compromise","consent"]},
  {t:"Engel", w:["obstacle","barrier","hindrance","impediment","obstruction","constraint"]},
  {t:"Bakımından, açısından", w:["in terms of","with regard to","regarding","concerning","with respect to","as for","in relation to"]},
  {t:"-e rağmen", w:["despite","in spite of","notwithstanding","regardless of","even though","although"]},
  {t:"-den dolayı, yüzünden", w:["due to","owing to","because of","on account of","as a result of","thanks to"]}
];
/* Bağlaç/sinyal ifadelerinin Türkçesi (şık açıklamalarında: "Although: zıtlık · -e rağmen") */
var CONN_TR = {
  "however":"ancak, fakat","but":"ama","yet":"yine de, ama","although":"-e rağmen, -dığı halde","though":"-e rağmen","even though":"-dığı halde, -e rağmen","even if":"-se bile",
  "whereas":"oysa, -e karşın","while":"-iken; oysa","whilst":"-iken; oysa","nevertheless":"yine de, buna rağmen","nonetheless":"yine de","despite":"-e rağmen","in spite of":"-e rağmen",
  "on the other hand":"öte yandan","on the contrary":"aksine","conversely":"tersine","in contrast":"buna karşılık","by contrast":"buna karşılık","in contrast to":"-in aksine",
  "instead":"bunun yerine","instead of":"-in yerine","rather than":"-den ziyade","unlike":"-in aksine","notwithstanding":"-e rağmen","albeit":"-se de","even so":"öyle bile olsa",
  "regardless of":"-e bakılmaksızın","contrary to":"-in aksine","because":"çünkü, -dığı için","because of":"-den dolayı","since":"-dığı için; -den beri","due to":"-den dolayı",
  "owing to":"-den dolayı","on account of":"-den dolayı","as a result of":"-in sonucu olarak","thanks to":"sayesinde","given that":"-dığı düşünülürse","in that":"-dığı için",
  "in view of":"-i göz önünde bulundurarak","now that":"madem ki, artık","therefore":"bu nedenle","thus":"böylece, bu yüzden","hence":"bu yüzden","consequently":"sonuç olarak",
  "as a result":"sonuç olarak","as a consequence":"bunun sonucunda","accordingly":"buna göre","for this reason":"bu nedenle","thereby":"böylece","so that":"-sın diye, böylece",
  "moreover":"üstelik","furthermore":"ayrıca","in addition":"ek olarak","in addition to":"-e ek olarak","additionally":"ek olarak","besides":"bunun yanında","also":"ayrıca",
  "likewise":"aynı şekilde","similarly":"benzer şekilde","as well as":"-in yanı sıra","not only":"sadece ... değil","apart from":"-den başka","further":"dahası",
  "for example":"örneğin","for instance":"örneğin","such as":"gibi","namely":"yani, şöyle ki","in particular":"özellikle","particularly":"özellikle","especially":"özellikle",
  "then":"sonra","finally":"sonunda","eventually":"sonunda","subsequently":"ardından","previously":"önceden","initially":"başlangıçta","meanwhile":"bu arada",
  "until":"-e kadar","once":"-ince, bir kez","ultimately":"en sonunda","prior to":"-den önce","by the time":"-dığında (o zamana kadar)","as soon as":"-ir -mez",
  "in short":"kısacası","in conclusion":"sonuç olarak","in other words":"başka bir deyişle","that is":"yani","indeed":"gerçekten, hatta","in fact":"aslında, hatta",
  "if":"eğer","unless":"-medikçe, -mezse","provided that":"-mek şartıyla","providing that":"-mek şartıyla","as long as":"-dığı sürece","otherwise":"aksi halde",
  "in case":"-ebilir diye, ihtimaline karşı","only if":"ancak -se","on condition that":"-mek şartıyla","whether":"-ip -mediği","so as to":"-mek için","in order to":"-mek için",
  "in order that":"-sın diye","with a view to":"amacıyla","when":"-dığında","whenever":"her ne zaman","as":"-dığı için; -iken; gibi","so":"bu yüzden","or":"veya","and":"ve",
  "both":"hem","either":"ya ... ya da","neither":"ne ... ne de","nor":"ne de","as if":"sanki","as though":"sanki","so long as":"-dığı sürece","before":"-den önce","after":"-den sonra"
};
