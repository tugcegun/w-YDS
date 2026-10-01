/* Ekstra havuz 3. tur — rel-pronoun, rel-prep, rel-reduction, noun-clause, ger-inf (her başlık için 10 yeni soru) */
EKSTRA.push(
  /* ---------- rel-pronoun ---------- */
  {id:"x3-rel-pronoun-01", sub:"rel-pronoun", from:["clauses-01"], q:"The nurse ---- looked after him has written a book about the ward.", o:["whom","which","whose","what","who"], a:4, e:"Yan cümlenin öznesi olduğu için “who” gerekir."},
  {id:"x3-rel-pronoun-02", sub:"rel-pronoun", from:["clauses-02"], q:"The theory, ---- was proposed in 1912, is now accepted by most geologists.", o:["who","whose","which","that","what"], a:2, e:"Virgüllü açıklayıcı yan cümlede “that” kullanılamaz."},
  {id:"x3-rel-pronoun-03", sub:"rel-pronoun", from:["clauses-03"], q:"The company ---- shares fell most yesterday has issued a statement.", o:["where","whose","which","that","of which the"], a:1, e:"İyelik ilişkisi vardır: şirketin hisseleri."},
  {id:"x3-rel-pronoun-04", sub:"rel-pronoun", from:["clauses-04"], q:"This is the beach ---- the turtles lay their eggs.", o:["whose","where","which","that","when"], a:1, e:"Yer bildiren yan cümlede “where” kullanılır."},
  {id:"x3-rel-pronoun-05", sub:"rel-pronoun", from:["clauses-01"], q:"2003 was the year ---- the museum was reopened.", o:["when","which","where","that time","whose"], a:0, e:"Zaman bildiren yan cümlede “when” kullanılır."},
  {id:"x3-rel-pronoun-06", sub:"rel-pronoun", from:["clauses-02"], q:"He failed to mention the costs, ---- annoyed the whole committee.", o:["that","who","whose","which","what"], a:3, e:"Bütün cümleye gönderme yapan yan cümle “which” ile kurulur."},
  {id:"x3-rel-pronoun-07", sub:"rel-pronoun", from:["clauses-03"], q:"Everything ---- was kept in the basement was lost in the flood.", o:["who","whose","that","which","what"], a:2, e:"“everything” öncülünden sonra “that” tercih edilir."},
  {id:"x3-rel-pronoun-08", sub:"rel-pronoun", from:["clauses-04"], q:"Nobody explained the reason ---- the project was cancelled.", o:["where","whose","why","which","that reason"], a:2, e:"“the reason why” kalıbı sebep bildirir."},
  {id:"x3-rel-pronoun-09", sub:"rel-pronoun", from:["clauses-01","clauses-03"], q:"The researchers ---- the prize was awarded are all under thirty.", o:["that","to whom","to who","whom","which"], a:1, e:"Edattan sonra kişi için “whom” gelir: to whom."},
  {id:"x3-rel-pronoun-10", sub:"rel-pronoun", from:["clauses-02","clauses-04"], q:"The five samples, all of ---- were frozen, arrived in perfect condition.", o:["them","that","whose","what","which"], a:4, e:"Miktar ifadesinden sonra cansız varlık için “of which” kullanılır."},

  /* ---------- rel-prep ---------- */
  {id:"x3-rel-prep-01", sub:"rel-prep", from:["clauses-05"], q:"The manner ---- the decision was taken has been criticised.", o:["that in","in that","how in","in which","which in"], a:3, e:"“in a manner” ifadesi yan cümlede “in which” olur."},
  {id:"x3-rel-prep-02", sub:"rel-prep", from:["clauses-06"], q:"The museum owns ninety drawings, few of ---- have been exhibited.", o:["whose","what","which","them","that"], a:2, e:"Miktar ifadesi cansız varlıkta “of which” ile bağlanır."},
  {id:"x3-rel-prep-03", sub:"rel-prep", from:["clauses-07"], q:"This is the colleague ---- I wrote the article.", o:["that with","with whom","who with","with who","whom with"], a:1, e:"Resmî yapıda edat zamirin önüne geçer: with whom."},
  {id:"x3-rel-prep-04", sub:"rel-prep", from:["clauses-08"], q:"The method, the details ---- are given below, is surprisingly simple.", o:["of which","of whom","which of","whose of","that of"], a:0, e:"“the details of the method” ifadesi yan cümleye taşınır."},
  {id:"x3-rel-prep-05", sub:"rel-prep", from:["clauses-05"], q:"The rate ---- the glacier is melting has doubled.", o:["which at","that at","at that","in what","at which"], a:4, e:"“at a rate” ifadesi “at which” olur."},
  {id:"x3-rel-prep-06", sub:"rel-prep", from:["clauses-06"], q:"There were sixty applicants, none of ---- had the required licence.", o:["them","who","that","whom","which"], a:3, e:"Kişilerde miktar + of + whom kullanılır."},
  {id:"x3-rel-prep-07", sub:"rel-prep", from:["clauses-07"], q:"The period ---- these coins were minted is uncertain.", o:["in that","during that","in which","which in","that in"], a:2, e:"“in the period” ifadesi “in which” olur."},
  {id:"x3-rel-prep-08", sub:"rel-prep", from:["clauses-08"], q:"She wrote four reports, the first of ---- was never published.", o:["whose","what","which","them","that"], a:2, e:"“the first of which” yapısı kullanılır."},
  {id:"x3-rel-prep-09", sub:"rel-prep", from:["clauses-05","clauses-07"], q:"The extent ---- the two texts overlap is remarkable.", o:["in that","to which","which to","that to","to that"], a:1, e:"“to an extent” kalıbı yan cümlede “to which” olur."},
  {id:"x3-rel-prep-10", sub:"rel-prep", from:["clauses-06","clauses-08"], q:"The hospital has twelve wards, three of ---- are being refurbished.", o:["that","those","whose","which","them"], a:3, e:"“of which” bağlaç görevi görür; “them” kullanılırsa bağlaç eksik kalır."},

  /* ---------- rel-reduction ---------- */
  {id:"x3-rel-reduction-01", sub:"rel-reduction", from:["clauses-09"], q:"The questions ---- in the survey were all optional.", o:["to ask","having asked","asked","asking","who asking"], a:2, e:"“which were asked” edilgen yapısı V3 ile kısaltılır."},
  {id:"x3-rel-reduction-02", sub:"rel-reduction", from:["clauses-10"], q:"Candidates ---- to the second round will be contacted by e-mail.", o:["having gone by","going through","gone through","who going","to going"], a:1, e:"“who go through” etken yapısı V-ing ile kısaltılır."},
  {id:"x3-rel-reduction-03", sub:"rel-reduction", from:["clauses-11"], q:"The statue, ---- in 1890, was moved to the museum last year.", o:["erected","erecting","which erecting","to erect","having erecting"], a:0, e:"Virgüllü edilgen yan cümle V3 ile kısaltılır."},
  {id:"x3-rel-reduction-04", sub:"rel-reduction", from:["clauses-12"], q:"She was the only candidate ---- the technical test.", o:["passing to","passed","who passing","to passing","to pass"], a:4, e:"“the only” ifadesinden sonra mastarla kısaltma yapılır."},
  {id:"x3-rel-reduction-05", sub:"rel-reduction", from:["clauses-09"], q:"Passengers ---- at the front of the train should use the rear doors.", o:["who sitting","to sitting","having sat","sitting","sat"], a:3, e:"“who are sitting” etken yapısı V-ing ile kısaltılır."},
  {id:"x3-rel-reduction-06", sub:"rel-reduction", from:["clauses-10"], q:"Documents ---- before 1950 are kept in a separate room.", o:["to write","having written","written","writing","which writing"], a:2, e:"Belgeler yazılan taraftır: “which were written” → written."},
  {id:"x3-rel-reduction-07", sub:"rel-reduction", from:["clauses-11"], q:"Anyone ---- to volunteer should sign the list.", o:["having wished","wishing","wished","who wishing","to wishing"], a:1, e:"“who wishes” etken yapısı “wishing” olur."},
  {id:"x3-rel-reduction-08", sub:"rel-reduction", from:["clauses-12"], q:"He was the first scientist ---- the effect in the laboratory.", o:["to reproducing","to reproduce","reproducing to","reproduced","who reproducing"], a:1, e:"“the first” ifadesinden sonra mastarla kısaltma yapılır."},
  {id:"x3-rel-reduction-09", sub:"rel-reduction", from:["clauses-09","clauses-11"], q:"Letters ---- after Friday will not reach the committee in time.", o:["posted","posting","which posting","to post","having posted"], a:0, e:"Mektuplar gönderilen taraftır; edilgen yapı V3 ile kısaltılır."},
  {id:"x3-rel-reduction-10", sub:"rel-reduction", from:["clauses-10","clauses-12"], q:"The roads ---- to the village were blocked by snow.", o:["to lead","having led","leading","led","which leading"], a:2, e:"“which lead to” etken yapısı V-ing ile kısaltılır."},

  /* ---------- noun-clause ---------- */
  {id:"x3-noun-clause-01", sub:"noun-clause", from:["clauses-13"], q:"---- the two texts were written by the same author is still debated.", o:["Whether","If","That whether","What","Which"], a:0, e:"Özne görevindeki yan cümle “Whether” ile başlar; “If” bu konumda kullanılmaz."},
  {id:"x3-noun-clause-02", sub:"noun-clause", from:["clauses-14"], q:"Nobody could say ---- the money had gone.", o:["which","whose","where","that","what"], a:2, e:"Yer sorulmaktadır: “where”."},
  {id:"x3-noun-clause-03", sub:"noun-clause", from:["clauses-15"], q:"The difficulty is ---- the two systems use different units.", o:["which","whether","if","that","what"], a:3, e:"Eksiksiz bir cümle geldiği için “that” gerekir."},
  {id:"x3-noun-clause-04", sub:"noun-clause", from:["clauses-16"], q:"---- the report does not explain is why the costs doubled.", o:["Which","Whether","It","What","That"], a:3, e:"Nesne eksikliği bulunan, öncülsüz yan cümle “What” ile kurulur."},
  {id:"x3-noun-clause-05", sub:"noun-clause", from:["clauses-13"], q:"He asked me ---- I had finished the analysis.", o:["that","what","which","why not","whether"], a:4, e:"Evet/hayır sorusunun aktarımında “whether / if” kullanılır."},
  {id:"x3-noun-clause-06", sub:"noun-clause", from:["clauses-14"], q:"It is unclear ---- of the two samples was contaminated.", o:["who","which","what","that","whether"], a:1, e:"Sınırlı seçenekten seçim için “which of the two” gerekir."},
  {id:"x3-noun-clause-07", sub:"noun-clause", from:["clauses-15"], q:"The fact ---- the results were never repeated worries many researchers.", o:["whether","of which","that","which","what"], a:2, e:"“The fact that …” kalıbı kullanılır."},
  {id:"x3-noun-clause-08", sub:"noun-clause", from:["clauses-16"], q:"They cannot decide ---- to accept the offer or look for another.", o:["what","which","whether","if","that"], a:2, e:"Mastardan önce “whether” kullanılır."},
  {id:"x3-noun-clause-09", sub:"noun-clause", from:["clauses-13","clauses-15"], q:"---- she told the police does not match the recording.", o:["Which","Whether","It that","What","That"], a:3, e:"Öncülsüz ve nesne eksikliği olan yan cümle “What” ile kurulur."},
  {id:"x3-noun-clause-10", sub:"noun-clause", from:["clauses-14","clauses-16"], q:"We were never told ---- the samples had been destroyed.", o:["what","which","whether or","of that","that"], a:4, e:"“tell someone that …” kalıbında eksiksiz cümle “that” ile bağlanır."},

  /* ---------- ger-inf ---------- */
  {id:"x3-ger-inf-01", sub:"ger-inf", from:["clauses-17"], q:"The board decided ---- the meeting until March.", o:["postpone","having postponed","to postpone","postponing","to postponing"], a:2, e:"“decide” fiilinden sonra mastar gelir."},
  {id:"x3-ger-inf-02", sub:"ger-inf", from:["clauses-18"], q:"He avoided ---- the question directly.", o:["answer","to answering","having answer","answering","to answer"], a:3, e:"“avoid” fiilinden sonra V-ing gelir."},
  {id:"x3-ger-inf-03", sub:"ger-inf", from:["clauses-19"], q:"I regret ---- her the truth; it only made things worse.", o:["to tell","to telling","tell","having tell","telling"], a:4, e:"“regret + V-ing” geçmişte yapılandan pişmanlıktır; “regret to tell” ise kötü haberi vermeden önce kullanılır."},
  {id:"x3-ger-inf-04", sub:"ger-inf", from:["clauses-20"], q:"We stopped ---- petrol just outside the city.", o:["buy","having bought","to buy","buying","to buying"], a:2, e:"“stop to do” bir şeyi yapmak için durmaktır."},
  {id:"x3-ger-inf-05", sub:"ger-inf", from:["clauses-17"], q:"The doctor advised him ---- salt completely.", o:["avoid","to avoiding","for avoiding","to avoid","avoiding"], a:3, e:"“advise someone to do” kalıbı mastar ister."},
  {id:"x3-ger-inf-06", sub:"ger-inf", from:["clauses-18"], q:"She admitted ---- the deadline.", o:["to forget","forget","to forgetting","having forget","forgetting"], a:4, e:"“admit” fiilinden sonra V-ing gelir."},
  {id:"x3-ger-inf-07", sub:"ger-inf", from:["clauses-19"], q:"Don't forget ---- the alarm before you leave.", o:["to set","setting","to setting","set","having set"], a:0, e:"“forget to do” yapılması gerekeni unutmaktır."},
  {id:"x3-ger-inf-08", sub:"ger-inf", from:["clauses-20"], q:"The scholarship enabled her ---- her studies abroad.", o:["continue","to continuing","for continuing","to continue","continuing"], a:3, e:"“enable someone to do” kalıbı mastar ister."},
  {id:"x3-ger-inf-09", sub:"ger-inf", from:["clauses-17","clauses-19"], q:"She went on ---- about the budget for another hour.", o:["to talk","to talking","talk","having talked","talking"], a:4, e:"“go on + V-ing” aynı işi sürdürmektir; “go on to do” ise başka bir işe geçmektir."},
  {id:"x3-ger-inf-10", sub:"ger-inf", from:["clauses-18","clauses-20"], q:"It is worth ---- the original before you rely on the translation.", o:["for checking","to checking","checking","to check","check"], a:2, e:"“It is worth + V-ing” kalıbı sabittir."}
);
Object.assign(ZORLUK, {
  "x3-rel-pronoun-01":2,"x3-rel-pronoun-02":4,"x3-rel-pronoun-03":5,"x3-rel-pronoun-04":3,"x3-rel-pronoun-05":3,
  "x3-rel-pronoun-06":5,"x3-rel-pronoun-07":4,"x3-rel-pronoun-08":5,"x3-rel-pronoun-09":7,"x3-rel-pronoun-10":6,
  "x3-rel-prep-01":6,"x3-rel-prep-02":4,"x3-rel-prep-03":4,"x3-rel-prep-04":7,"x3-rel-prep-05":5,
  "x3-rel-prep-06":5,"x3-rel-prep-07":5,"x3-rel-prep-08":6,"x3-rel-prep-09":8,"x3-rel-prep-10":5,
  "x3-rel-reduction-01":3,"x3-rel-reduction-02":4,"x3-rel-reduction-03":4,"x3-rel-reduction-04":6,"x3-rel-reduction-05":3,
  "x3-rel-reduction-06":3,"x3-rel-reduction-07":5,"x3-rel-reduction-08":6,"x3-rel-reduction-09":5,"x3-rel-reduction-10":4,
  "x3-noun-clause-01":5,"x3-noun-clause-02":2,"x3-noun-clause-03":3,"x3-noun-clause-04":6,"x3-noun-clause-05":3,
  "x3-noun-clause-06":5,"x3-noun-clause-07":6,"x3-noun-clause-08":6,"x3-noun-clause-09":5,"x3-noun-clause-10":4,
  "x3-ger-inf-01":2,"x3-ger-inf-02":3,"x3-ger-inf-03":6,"x3-ger-inf-04":6,"x3-ger-inf-05":4,
  "x3-ger-inf-06":3,"x3-ger-inf-07":5,"x3-ger-inf-08":4,"x3-ger-inf-09":7,"x3-ger-inf-10":5
});
