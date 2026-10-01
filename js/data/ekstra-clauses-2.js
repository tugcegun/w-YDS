/* Ekstra havuz 2. tur — rel-pronoun, rel-prep, rel-reduction, noun-clause, ger-inf (her başlık için 10 yeni soru) */
EKSTRA.push(
  /* ---------- rel-pronoun ---------- */
  {id:"x2-rel-pronoun-01", sub:"rel-pronoun", from:["clauses-01"], q:"The engineer ---- designed the tunnel died before it was finished.", o:["who","whom","which","whose","what"], a:0, e:"Yan cümlenin öznesi olduğu için “who” gerekir."},
  {id:"x2-rel-pronoun-02", sub:"rel-pronoun", from:["clauses-02"], q:"The vaccine, ---- was developed in under a year, is now used worldwide.", o:["who","whose","which","that","what"], a:2, e:"Virgüllü açıklayıcı yan cümlede “that” kullanılamaz; cansız varlık için “which” gerekir."},
  {id:"x2-rel-pronoun-03", sub:"rel-pronoun", from:["clauses-03"], q:"The author ---- books we studied last term is coming to the university.", o:["whom","which","that","whose","who"], a:3, e:"İyelik ilişkisi vardır: yazarın kitapları."},
  {id:"x2-rel-pronoun-04", sub:"rel-pronoun", from:["clauses-04"], q:"This is the room ---- the treaty was signed.", o:["where","which","that","when","whose"], a:0, e:"Yer bildiren yan cümlede “where” kullanılır."},
  {id:"x2-rel-pronoun-05", sub:"rel-pronoun", from:["clauses-01"], q:"1969 was the year ---- humans first landed on the Moon.", o:["whose","when","which","where","that time"], a:1, e:"Zaman bildiren yan cümlede “when” kullanılır."},
  {id:"x2-rel-pronoun-06", sub:"rel-pronoun", from:["clauses-02"], q:"The train was two hours late, ---- meant we missed the opening session.", o:["that","who","whose","which","what"], a:3, e:"Bütün bir cümleye gönderme yapan yan cümle virgülden sonra “which” ile kurulur."},
  {id:"x2-rel-pronoun-07", sub:"rel-pronoun", from:["clauses-03"], q:"The only thing ---- matters now is the safety of the crew.", o:["which","what","who","whose","that"], a:4, e:"“the only thing / everything / all” gibi öncüllerden sonra “that” tercih edilir."},
  {id:"x2-rel-pronoun-08", sub:"rel-pronoun", from:["clauses-04"], q:"She never explained the reason ---- she left the project.", o:["where","whose","why","which","that reason"], a:2, e:"“the reason why” kalıbında sebep bildiren “why” kullanılır."},
  {id:"x2-rel-pronoun-09", sub:"rel-pronoun", from:["clauses-01","clauses-03"], q:"The candidate ---- we interviewed yesterday has withdrawn her application.", o:["which","whose","what","whom","who"], a:3, e:"Yan cümlenin nesnesi olduğu için resmî kullanımda “whom” gelir."},
  {id:"x2-rel-pronoun-10", sub:"rel-pronoun", from:["clauses-02","clauses-04"], q:"The three witnesses, none of ---- knew each other, gave identical accounts.", o:["whom","who","which","them","whose"], a:0, e:"Miktar ifadesinden sonra kişi için “of whom” kullanılır."},

  /* ---------- rel-prep ---------- */
  {id:"x2-rel-prep-01", sub:"rel-prep", from:["clauses-05"], q:"The speed ---- the disease spreads depends on the climate.", o:["which at","that at","at that","in what","at which"], a:4, e:"“at a speed” ifadesi yan cümleye taşınır: at which."},
  {id:"x2-rel-prep-02", sub:"rel-prep", from:["clauses-06"], q:"The library holds two thousand manuscripts, most of ---- have never been catalogued.", o:["what","which","them","that","whose"], a:1, e:"Cansız varlıkta miktar ifadesi “of which” ile bağlanır."},
  {id:"x2-rel-prep-03", sub:"rel-prep", from:["clauses-07"], q:"This is the researcher ---- I mentioned in my last e-mail.", o:["whose","that whom","whom","who to","which"], a:2, e:"Yan cümlenin nesnesi kişi olduğu için “whom” kullanılır."},
  {id:"x2-rel-prep-04", sub:"rel-prep", from:["clauses-08"], q:"The device, the principles ---- are surprisingly simple, has transformed the industry.", o:["of whom","which of","whose of","that of","of which"], a:4, e:"“the principles of the device” ifadesi yan cümleye taşınır: of which."},
  {id:"x2-rel-prep-05", sub:"rel-prep", from:["clauses-05"], q:"She described the conditions ---- the refugees were living.", o:["in which","which in","that in","in that","where in"], a:0, e:"“in the conditions” kalıbı “in which” olur."},
  {id:"x2-rel-prep-06", sub:"rel-prep", from:["clauses-06"], q:"There were forty applicants, only three of ---- were invited to interview.", o:["who","that","whom","which","them"], a:2, e:"Kişiler için miktar + of + whom kullanılır."},
  {id:"x2-rel-prep-07", sub:"rel-prep", from:["clauses-07"], q:"The century ---- the cathedral was built is still disputed.", o:["that in","in that","during that","in which","which in"], a:3, e:"“in the century” ifadesi yan cümlede “in which” olur."},
  {id:"x2-rel-prep-08", sub:"rel-prep", from:["clauses-08"], q:"He wrote five novels, the last of ---- was published after his death.", o:["which","them","that","whose","what"], a:0, e:"Cansız varlıkta “the last of which” yapısı kullanılır."},
  {id:"x2-rel-prep-09", sub:"rel-prep", from:["clauses-05","clauses-07"], q:"The degree ---- the two languages are related is still debated.", o:["in that","to which","which to","that to","to that"], a:1, e:"“to a degree” kalıbı yan cümlede “to which” olur."},
  {id:"x2-rel-prep-10", sub:"rel-prep", from:["clauses-06","clauses-08"], q:"The company owns six factories, two of ---- are due to close.", o:["those","whose","which","them","that"], a:2, e:"“of which” burada bağlaç görevi görür; “them” kullanılırsa bağlaç eksik kalır."},

  /* ---------- rel-reduction ---------- */
  {id:"x2-rel-reduction-01", sub:"rel-reduction", from:["clauses-09"], q:"The people ---- in the survey were all aged over sixty.", o:["interviewed","interviewing","who interviewing","to interview","having interviewed"], a:0, e:"“who were interviewed” edilgen yapısı V3 ile kısaltılır."},
  {id:"x2-rel-reduction-02", sub:"rel-reduction", from:["clauses-10"], q:"Students ---- for the scholarship must submit two references.", o:["having applied by","applying","applied","who applying","to applying"], a:1, e:"“who apply / are applying” etken yapısı V-ing ile kısaltılır."},
  {id:"x2-rel-reduction-03", sub:"rel-reduction", from:["clauses-11"], q:"The report, ---- last week, has already been translated into three languages.", o:["to publish","having publishing","published","publishing","which publishing"], a:2, e:"Virgüllü edilgen yan cümle V3 ile kısaltılır."},
  {id:"x2-rel-reduction-04", sub:"rel-reduction", from:["clauses-12"], q:"He was the last person ---- the building before the fire.", o:["to leave","leaving","left","who leaving","to leaving"], a:0, e:"“the last / the first / the only” ifadelerinden sonra kısaltma mastarla yapılır."},
  {id:"x2-rel-reduction-05", sub:"rel-reduction", from:["clauses-09"], q:"Any passenger ---- without a valid ticket will be fined.", o:["having travelled","travelling","travelled","who travelling","to travelling"], a:1, e:"“who travels” etken yapısı V-ing ile kısaltılır."},
  {id:"x2-rel-reduction-06", sub:"rel-reduction", from:["clauses-10"], q:"The samples ---- in the first study were destroyed in the fire.", o:["to collect","having collected","collected","collecting","which collecting"], a:2, e:"Örnekler toplanan taraftır: “which were collected” → collected."},
  {id:"x2-rel-reduction-07", sub:"rel-reduction", from:["clauses-11"], q:"Anyone ---- more information should contact the secretary.", o:["who wanting","to wanting","having wanted","wanting","wanted"], a:3, e:"“who wants” etken yapısı “wanting” olarak kısaltılır."},
  {id:"x2-rel-reduction-08", sub:"rel-reduction", from:["clauses-12"], q:"She was the first woman ---- the department.", o:["who leading","to leading","to lead","leading to","led"], a:2, e:"“the first” ifadesinden sonra mastarla kısaltma yapılır."},
  {id:"x2-rel-reduction-09", sub:"rel-reduction", from:["clauses-09","clauses-11"], q:"Books ---- on the top shelf may only be consulted in the reading room.", o:["which keeping","to keep","having kept","kept","keeping"], a:3, e:"“which are kept” edilgen yapısı V3 ile kısaltılır."},
  {id:"x2-rel-reduction-10", sub:"rel-reduction", from:["clauses-10","clauses-12"], q:"The villages ---- by the landslide have been rebuilt higher up the valley.", o:["destroyed","destroying","which destroying","to destroy","having destroyed"], a:0, e:"Köyler yıkılan taraftır; edilgen yan cümle V3 ile kısaltılır."},

  /* ---------- noun-clause ---------- */
  {id:"x2-noun-clause-01", sub:"noun-clause", from:["clauses-13"], q:"---- the two samples come from the same source is still unclear.", o:["If","That whether","What","Which","Whether"], a:4, e:"Cümle başında özne görevi gören yan cümle “Whether” ile başlar; “If” bu konumda kullanılmaz."},
  {id:"x2-noun-clause-02", sub:"noun-clause", from:["clauses-14"], q:"Nobody knows ---- the fire started.", o:["which","whose","how","that","what"], a:2, e:"Yangının nasıl başladığı sorulmaktadır: “how”."},
  {id:"x2-noun-clause-03", sub:"noun-clause", from:["clauses-15"], q:"The trouble is ---- nobody kept a record of the measurements.", o:["if","that","what","which","whether"], a:1, e:"“The trouble is that …” yapısında eksiksiz bir cümle geldiği için “that” gerekir."},
  {id:"x2-noun-clause-04", sub:"noun-clause", from:["clauses-16"], q:"---- worries the committee most is the cost of the repairs.", o:["It","What","That","Which","Whether"], a:1, e:"Öncülü olmayan özne görevindeki yan cümle “What” ile kurulur."},
  {id:"x2-noun-clause-05", sub:"noun-clause", from:["clauses-13"], q:"They asked me ---- I had ever worked in a laboratory.", o:["whether","that","what","which","why not"], a:0, e:"Evet/hayır sorusunun aktarımında “whether / if” kullanılır."},
  {id:"x2-noun-clause-06", sub:"noun-clause", from:["clauses-14"], q:"It is not yet clear ---- of the two theories is correct.", o:["that","whether","who","which","what"], a:3, e:"Sınırlı seçenekten seçim yapıldığı için “which of the two” gerekir."},
  {id:"x2-noun-clause-07", sub:"noun-clause", from:["clauses-15"], q:"The fact ---- nobody objected does not mean that everyone agreed.", o:["whether","of which","that","which","what"], a:2, e:"“The fact that …” kalıbı açıklayıcı yan cümle kurar."},
  {id:"x2-noun-clause-08", sub:"noun-clause", from:["clauses-16"], q:"We have not decided ---- to publish the results now or wait.", o:["what","which","whether","if","that"], a:2, e:"Mastardan önce “whether” kullanılır; “if to do” yapısı yoktur."},
  {id:"x2-noun-clause-09", sub:"noun-clause", from:["clauses-13","clauses-15"], q:"---- he wrote in his diary contradicts the official account.", o:["It that","What","That","Which","Whether"], a:1, e:"Nesne eksikliği bulunan ve öncülü olmayan yan cümle “What” ile kurulur."},
  {id:"x2-noun-clause-10", sub:"noun-clause", from:["clauses-14","clauses-16"], q:"She reminded us ---- the deadline had been brought forward.", o:["what","which","whether or","of that","that"], a:4, e:"“remind someone that …” kalıbında eksiksiz cümle “that” ile bağlanır."},

  /* ---------- ger-inf ---------- */
  {id:"x2-ger-inf-01", sub:"ger-inf", from:["clauses-17"], q:"The council refused ---- the building as a historical monument.", o:["having registered","to register","registering","to registering","register"], a:1, e:"“refuse” fiilinden sonra mastar gelir."},
  {id:"x2-ger-inf-02", sub:"ger-inf", from:["clauses-18"], q:"He admitted ---- the figures before the audit.", o:["changing","to change","change","to changing","to have change"], a:0, e:"“admit” fiilinden sonra V-ing gelir."},
  {id:"x2-ger-inf-03", sub:"ger-inf", from:["clauses-19"], q:"Remember ---- the alarm before you leave the laboratory.", o:["setting","to setting","set","having set","to set"], a:4, e:"“remember to do” unutmadan yapmaktır; “remember doing” ise geçmişte yapılanı hatırlamaktır."},
  {id:"x2-ger-inf-04", sub:"ger-inf", from:["clauses-20"], q:"She stopped ---- coffee after the doctor advised her to.", o:["having drunk","drinking","to drink","to drinking","drink"], a:1, e:"“stop doing” o eylemi bırakmaktır; “stop to do” ise yapmak için durmaktır."},
  {id:"x2-ger-inf-05", sub:"ger-inf", from:["clauses-17"], q:"The guide warned the tourists ---- too close to the edge.", o:["not to go","not going","to not go","not go","against to go"], a:0, e:"“warn someone not to do” kalıbında olumsuzluk mastarın önüne gelir."},
  {id:"x2-ger-inf-06", sub:"ger-inf", from:["clauses-18"], q:"They denied ---- any payment from the company.", o:["to receive","receive","to receiving","for receiving","receiving"], a:4, e:"“deny” fiilinden sonra V-ing gelir."},
  {id:"x2-ger-inf-07", sub:"ger-inf", from:["clauses-19"], q:"The supervisor suggested ---- the experiment with a larger sample.", o:["us to repeat","repeat","to repeating","repeating","to repeat"], a:3, e:"“suggest” fiilinden sonra V-ing ya da “that + cümle” gelir."},
  {id:"x2-ger-inf-08", sub:"ger-inf", from:["clauses-20"], q:"The grant allows researchers ---- equipment they could not otherwise afford.", o:["buying","buy","to buying","for buying","to buy"], a:4, e:"“allow someone to do” kalıbı mastar ister."},
  {id:"x2-ger-inf-09", sub:"ger-inf", from:["clauses-17","clauses-19"], q:"We regret ---- that your proposal has not been accepted.", o:["to informing you","inform you","having inform you","to inform you","informing you"], a:3, e:"“regret to inform” kötü haberi vermeden önce kullanılır."},
  {id:"x2-ger-inf-10", sub:"ger-inf", from:["clauses-18","clauses-20"], q:"There is no point ---- about something you cannot change.", o:["in worry","in worrying","to worry","worry","for worry"], a:1, e:"“There is no point in + V-ing” kalıbı sabittir."}
);
Object.assign(ZORLUK, {
  "x2-rel-pronoun-01":2,"x2-rel-pronoun-02":4,"x2-rel-pronoun-03":4,"x2-rel-pronoun-04":3,"x2-rel-pronoun-05":3,
  "x2-rel-pronoun-06":6,"x2-rel-pronoun-07":5,"x2-rel-pronoun-08":5,"x2-rel-pronoun-09":5,"x2-rel-pronoun-10":7,
  "x2-rel-prep-01":6,"x2-rel-prep-02":4,"x2-rel-prep-03":4,"x2-rel-prep-04":7,"x2-rel-prep-05":5,
  "x2-rel-prep-06":5,"x2-rel-prep-07":5,"x2-rel-prep-08":6,"x2-rel-prep-09":8,"x2-rel-prep-10":5,
  "x2-rel-reduction-01":3,"x2-rel-reduction-02":3,"x2-rel-reduction-03":5,"x2-rel-reduction-04":6,"x2-rel-reduction-05":4,
  "x2-rel-reduction-06":3,"x2-rel-reduction-07":5,"x2-rel-reduction-08":6,"x2-rel-reduction-09":4,"x2-rel-reduction-10":4,
  "x2-noun-clause-01":5,"x2-noun-clause-02":2,"x2-noun-clause-03":3,"x2-noun-clause-04":5,"x2-noun-clause-05":3,
  "x2-noun-clause-06":5,"x2-noun-clause-07":6,"x2-noun-clause-08":6,"x2-noun-clause-09":5,"x2-noun-clause-10":4,
  "x2-ger-inf-01":2,"x2-ger-inf-02":3,"x2-ger-inf-03":5,"x2-ger-inf-04":5,"x2-ger-inf-05":5,
  "x2-ger-inf-06":3,"x2-ger-inf-07":6,"x2-ger-inf-08":4,"x2-ger-inf-09":7,"x2-ger-inf-10":6
});
