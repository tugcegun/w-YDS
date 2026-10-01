/* Ekstra havuz 3. tur — con-contrast, con-cause, con-result, con-purpose, con-correlative, con-time (her başlık için 10 yeni soru) */
EKSTRA.push(
  /* ---------- con-contrast ---------- */
  {id:"x3-con-contrast-01", sub:"con-contrast", from:["conj-01"], q:"---- the machine is old, it still works perfectly.", o:["In spite of","However","Therefore","Although","Despite"], a:3, e:"Yan cümle geldiği için bağlaç gerekir: “Although”."},
  {id:"x3-con-contrast-02", sub:"con-contrast", from:["conj-02"], q:"The first method is cheap; the second, ----, gives more accurate results.", o:["hence","accordingly","however","therefore","thus"], a:2, e:"İki yöntem arasında zıtlık kurulur: “however”."},
  {id:"x3-con-contrast-03", sub:"con-contrast", from:["conj-03"], q:"---- its small size, the country has a very large fleet.", o:["Whereas","Despite","Although","Even though","However"], a:1, e:"İsim öbeği geldiği için “Despite” gerekir."},
  {id:"x3-con-contrast-04", sub:"con-contrast", from:["conj-04"], q:"Northern dialects keep the old vowel, ---- southern ones have lost it.", o:["so","thus","hence","whereas","therefore"], a:3, e:"Karşılaştırmalı zıtlık “whereas” ile kurulur."},
  {id:"x3-con-contrast-05", sub:"con-contrast", from:["conj-01"], q:"The evidence is thin. ---- , the theory is still widely taught.", o:["Thus","Hence","Nevertheless","Consequently","Therefore"], a:2, e:"“Nevertheless” buna rağmen anlamı verir."},
  {id:"x3-con-contrast-06", sub:"con-contrast", from:["conj-02"], q:"---- most birds, penguins cannot fly.", o:["However","Unlike","Although","Despite that","Whereas"], a:1, e:"“Unlike + isim” karşılaştırmalı zıtlık kurar."},
  {id:"x3-con-contrast-07", sub:"con-contrast", from:["conj-03"], q:"He kept his promise ---- the cost to his own career.", o:["in spite of","although","even though","however","whereas"], a:0, e:"İsim öbeği geldiği için “in spite of” gerekir."},
  {id:"x3-con-contrast-08", sub:"con-contrast", from:["conj-04"], q:"The plan looks attractive; ----, it has never been tested.", o:["that is","on the other hand","in other words","for example","as a result"], a:1, e:"Madalyonun öbür yüzü “on the other hand” ile verilir."},
  {id:"x3-con-contrast-09", sub:"con-contrast", from:["conj-01","conj-03"], q:"---- being written for children, the book is read mostly by adults.", o:["Despite","Although","Even if","Whereas","While"], a:0, e:"“Despite + V-ing” zıtlık kurar; diğerleri özne+yüklem ister."},
  {id:"x3-con-contrast-10", sub:"con-contrast", from:["conj-02","conj-04"], q:"The drug is effective; ----, it is not suitable for children.", o:["accordingly","consequently","hence","thereby","nonetheless"], a:4, e:"“nonetheless” zıtlık kurar; diğerleri sonuç bildirir."},

  /* ---------- con-cause ---------- */
  {id:"x3-con-cause-01", sub:"con-cause", from:["conj-05"], q:"---- the samples were contaminated, the whole test had to be repeated.", o:["Despite","So that","Whereas","In order that","Since"], a:4, e:"Sebep yan cümlesi “Since” ile kurulur."},
  {id:"x3-con-cause-02", sub:"con-cause", from:["conj-06"], q:"The road was closed ---- a landslide.", o:["so","because of","because","since","as"], a:1, e:"İsim öbeği geldiği için “because of” gerekir."},
  {id:"x3-con-cause-03", sub:"con-cause", from:["conj-07"], q:"She left the meeting early, ---- she had a train to catch.", o:["thus","hence","for","so","therefore"], a:2, e:"“for” virgülden sonra “çünkü” anlamında sebep bildirir."},
  {id:"x3-con-cause-04", sub:"con-cause", from:["conj-05"], q:"---- that the deadline is so close, we should start today.", o:["Owing to","In view","Given","Because of","Due to"], a:2, e:"“Given that + cümle” gerekçe bildirir."},
  {id:"x3-con-cause-05", sub:"con-cause", from:["conj-06"], q:"The harvest failed ---- an unusually dry spring.", o:["because","although","whereas","owing to","owing"], a:3, e:"“owing to + isim” sebep bildirir."},
  {id:"x3-con-cause-06", sub:"con-cause", from:["conj-07"], q:"---- nobody objected, the proposal was accepted without a vote.", o:["As","So","Thus","Therefore","Hence"], a:0, e:"“As” sebep yan cümlesi kurar."},
  {id:"x3-con-cause-07", sub:"con-cause", from:["conj-05","conj-07"], q:"Flights were cancelled ---- the volcanic ash.", o:["whereas","on account of","on account","because","although"], a:1, e:"“on account of + isim” sebep bildirir."},
  {id:"x3-con-cause-08", sub:"con-cause", from:["conj-06"], q:"---- there was no electricity, the samples had to be kept on ice.", o:["So that","Seeing that","Due to","Because of","In case"], a:1, e:"“Seeing that + cümle” sebep bildirir; “Due to / Because of” isim ister."},
  {id:"x3-con-cause-09", sub:"con-cause", from:["conj-05"], q:"---- the shortage of teachers, classes were merged.", o:["Because","Since","In view of","In view","Given that"], a:2, e:"“In view of + isim” resmî gerekçe bildirir."},
  {id:"x3-con-cause-10", sub:"con-cause", from:["conj-07"], q:"The documents were copied ---- loss or damage.", o:["for fear","in case","lest","so that","for fear of"], a:4, e:"“for fear of + isim” korkusuyla anlamını verir."},

  /* ---------- con-result ---------- */
  {id:"x3-con-result-01", sub:"con-result", from:["conj-08"], q:"The queue was ---- long that many people gave up.", o:["so","such","too","very","as"], a:0, e:"“so + sıfat + that” sonuç bildirir."},
  {id:"x3-con-result-02", sub:"con-result", from:["conj-09"], q:"It was ---- a cold winter that the lake froze completely.", o:["as","such","so","too","very"], a:1, e:"“such + a/an + sıfat + isim + that” kalıbı kullanılır."},
  {id:"x3-con-result-03", sub:"con-result", from:["conj-10"], q:"The tunnel flooded; ----, the line was closed for a month.", o:["otherwise","instead","consequently","nevertheless","however"], a:2, e:"Sonuç bildiren geçiş ifadesi “consequently”dir."},
  {id:"x3-con-result-04", sub:"con-result", from:["conj-11"], q:"The print is too faint ---- without a magnifying glass.", o:["for reading it","so that read","that read","to be read","to read it"], a:3, e:"“too + sıfat + to + edilgen mastar”: yazı okunan taraftır."},
  {id:"x3-con-result-05", sub:"con-result", from:["conj-08"], q:"The river changed its course, ---- the old harbour useless.", o:["made","make","which making","so making","making"], a:4, e:"Sonuç bir -ing öbeğiyle verilir: making the harbour useless."},
  {id:"x3-con-result-06", sub:"con-result", from:["conj-09"], q:"There was ---- little rain ---- the reservoirs almost emptied.", o:["so / that","such / that","too / to","as / as","very / that"], a:0, e:"“so little + isim + that” kalıbı kullanılır."},
  {id:"x3-con-result-07", sub:"con-result", from:["conj-10"], q:"Two engines failed; ----, the flight was diverted.", o:["even so","as a result","in contrast","on the contrary","by comparison"], a:1, e:"Sonuç bildiren “as a result” gerekir."},
  {id:"x3-con-result-08", sub:"con-result", from:["conj-11"], q:"Demand fell sharply and the factory ---- had to cut production.", o:["conversely","accordingly","alternatively","likewise","meanwhile"], a:1, e:"“accordingly” buna bağlı olarak demektir."},
  {id:"x3-con-result-09", sub:"con-result", from:["conj-08","conj-10"], q:"The results were ---- convincing ---- the method was adopted worldwide.", o:["as / as","very / that","so / that","such / that","too / to"], a:2, e:"“so + sıfat + that” sonuç bildirir."},
  {id:"x3-con-result-10", sub:"con-result", from:["conj-09","conj-11"], q:"The storm destroyed the crops, ---- thousands of families without income.", o:["leaving","left","leave","which leaving","and leaving them"], a:0, e:"Sonuç “leaving + nesne” biçiminde bir -ing öbeğiyle verilir."},

  /* ---------- con-purpose ---------- */
  {id:"x3-con-purpose-01", sub:"con-purpose", from:["conj-12"], q:"The lights are on timers ---- energy is not wasted at night.", o:["so that","so as","in order to","for","because"], a:0, e:"Amaç yan cümlesi özne içerdiği için “so that” gerekir."},
  {id:"x3-con-purpose-02", sub:"con-purpose", from:["conj-13"], q:"She took notes ---- remember the main points.", o:["in order that","so that","for","with a view","in order to"], a:4, e:"Mastarla kurulan amaç “in order to + V1” ile verilir."},
  {id:"x3-con-purpose-03", sub:"con-purpose", from:["conj-14"], q:"Take a spare key ---- you lock yourself out.", o:["so that","in order to","for fear","in case","in case of"], a:3, e:"“in case + cümle” önlem bildirir."},
  {id:"x3-con-purpose-04", sub:"con-purpose", from:["conj-12"], q:"The bottles were wrapped ---- during transport.", o:["in order prevent breakages","to preventing breakages","to prevent breakages","for prevent breakages","so that prevent breakages"], a:2, e:"Amaç mastarla verilir: to prevent breakages."},
  {id:"x3-con-purpose-05", sub:"con-purpose", from:["conj-13"], q:"The text was shortened ---- fit on a single page.", o:["by","so as to","so that","in order that","for"], a:1, e:"Mastar geldiği için “so as to / in order to” kullanılır."},
  {id:"x3-con-purpose-06", sub:"con-purpose", from:["conj-14"], q:"The files were encrypted ---- anyone should intercept them.", o:["lest","in case of","so as to","in order to","for fear"], a:0, e:"“lest + should” olmasın diye anlamı verir ve cümle alır."},
  {id:"x3-con-purpose-07", sub:"con-purpose", from:["conj-12"], q:"Extra trains were added ---- passengers could get home after the concert.", o:["so as to","in order to","for","by means of","so that"], a:4, e:"Yan cümlede özne ve modal olduğu için “so that” gerekir."},
  {id:"x3-con-purpose-08", sub:"con-purpose", from:["conj-13"], q:"The survey was carried out ---- measuring public support.", o:["in order to","so as to","so that","for to","with the aim of"], a:4, e:"“with the aim of + V-ing” amaç bildirir."},
  {id:"x3-con-purpose-09", sub:"con-purpose", from:["conj-14"], q:"Keep a printed copy ---- a computer failure.", o:["so that","lest","in order that","in case of","in case"], a:3, e:"İsim öbeği geldiği için “in case of” gerekir."},
  {id:"x3-con-purpose-10", sub:"con-purpose", from:["conj-12","conj-13"], q:"The graph was redrawn ---- the trend clearer.", o:["to make","for making","so that make","in order make","to making"], a:0, e:"Amaç mastarla verilir: to make the trend clearer."},

  /* ---------- con-correlative ---------- */
  {id:"x3-con-correlative-01", sub:"con-correlative", from:["conj-15"], q:"---- the timing ---- the location was suitable for the festival.", o:["Neither / or","Neither / nor","Either / nor","Both / or","Not only / but"], a:1, e:"“neither … nor” iki olumsuzu birleştirir."},
  {id:"x3-con-correlative-02", sub:"con-correlative", from:["conj-16"], q:"The grant covers ---- travel ---- accommodation.", o:["either / nor","neither / and","not only / also","whether / and","both / and"], a:4, e:"“both … and” iki tarafı birleştirir."},
  {id:"x3-con-correlative-03", sub:"con-correlative", from:["conj-17"], q:"Not only ---- the deadline, but they also exceeded the target.", o:["the team did meet","met the team","did the team met","did the team meet","the team met"], a:3, e:"“Not only” cümle başında devrik yapı ister."},
  {id:"x3-con-correlative-04", sub:"con-correlative", from:["conj-15"], q:"You can reach the island ---- by ferry ---- by plane.", o:["not only / but","either / or","neither / or","both / or","whether / or not"], a:1, e:"İki seçenek “either … or” ile verilir."},
  {id:"x3-con-correlative-05", sub:"con-correlative", from:["conj-16"], q:"It is not yet known ---- the vaccine works in children ---- not.", o:["whether / or","if / or","either / or","whether / nor","both / and"], a:0, e:"“whether … or not” kalıbı kullanılır."},
  {id:"x3-con-correlative-06", sub:"con-correlative", from:["conj-17"], q:"Neither the report nor the appendices ---- available online.", o:["was","has been","being","are","is"], a:3, e:"“neither … nor” yapısında yüklem en yakın özneye uyar; “appendices” çoğuldur."},
  {id:"x3-con-correlative-07", sub:"con-correlative", from:["conj-15"], q:"Not only ---- the roof damaged, but the windows were broken too.", o:["did it be","being","was","it was","were"], a:2, e:"“Not only” devrik yapı ister: Not only was the roof damaged."},
  {id:"x3-con-correlative-08", sub:"con-correlative", from:["conj-16"], q:"Either the figures ---- wrong, or the model needs revising.", o:["is","was","has been","be","are"], a:4, e:"“either … or” yapısında yüklem en yakın özneye uyar; “figures” çoğuldur."},
  {id:"x3-con-correlative-09", sub:"con-correlative", from:["conj-17"], q:"The hall is used ---- for concerts ---- for examinations.", o:["neither / or","not only / and","whether / or","both / and","either / nor"], a:3, e:"İki işlev birlikte üstlenildiği için “both … and” gerekir."},
  {id:"x3-con-correlative-10", sub:"con-correlative", from:["conj-15","conj-17"], q:"The design was ---- practical ---- affordable, so it was abandoned.", o:["whether / or","neither / nor","either / or","both / and","not only / but also"], a:1, e:"Terk edilmesi iki olumsuz durumu gösterir: neither practical nor affordable."},

  /* ---------- con-time ---------- */
  {id:"x3-con-time-01", sub:"con-time", from:["conj-18"], q:"---- the results were announced, the hall fell silent.", o:["By the time of","Meanwhile","As soon as","During","Until"], a:2, e:"Ardışıklık “As soon as” ile kurulur."},
  {id:"x3-con-time-02", sub:"con-time", from:["conj-19"], q:"Stir the mixture ---- it becomes smooth.", o:["as soon as","since","while","until","by the time"], a:3, e:"Bir noktaya kadar devam etme “until” ile verilir."},
  {id:"x3-con-time-03", sub:"con-time", from:["conj-20"], q:"---- the interview, candidates are asked to wait in the foyer.", o:["Prior","Before to","As soon as","Until","Prior to"], a:4, e:"“Prior to + isim” önce anlamı verir; “Prior” tek başına edat değildir."},
  {id:"x3-con-time-04", sub:"con-time", from:["conj-18"], q:"Let me know ---- the parcel arrives.", o:["the moment","the moment of","during","following","prior to"], a:0, e:"“the moment (that)” “-er ermez” anlamı verir ve cümle alır."},
  {id:"x3-con-time-05", sub:"con-time", from:["conj-19"], q:"---- the repairs were going on, the museum stayed open.", o:["Meanwhile","While","During","In","For"], a:1, e:"Yan cümle geldiği için “While” gerekir."},
  {id:"x3-con-time-06", sub:"con-time", from:["conj-20"], q:"---- leaving the laboratory, check that all the taps are closed.", o:["In advance","Earlier than","Before","Prior","Beforehand"], a:2, e:"“Before + V-ing” önce anlamı verir."},
  {id:"x3-con-time-07", sub:"con-time", from:["conj-18"], q:"The pump switches off ---- the tank is full.", o:["during","in the course","by the time of","the instant","the instant of"], a:3, e:"“the instant (that)” anında anlamı veren bir zaman bağlacıdır."},
  {id:"x3-con-time-08", sub:"con-time", from:["conj-19"], q:"He worked in the archive ---- six months last year.", o:["during","while","since","until","for"], a:4, e:"Süre uzunluğu “for” ile verilir."},
  {id:"x3-con-time-09", sub:"con-time", from:["conj-20"], q:"Hardly had the concert started ---- the power went off.", o:["when","than","that","then","as"], a:0, e:"“Hardly … when” kalıbı sabittir; “than” ise “no sooner” ile kullanılır."},
  {id:"x3-con-time-10", sub:"con-time", from:["conj-18","conj-20"], q:"The island had no fresh water ---- the desalination plant opened in 2005.", o:["while","since","until","by the time","as soon as"], a:2, e:"Belirli bir ana kadar süren durum “until” ile verilir."}
);
Object.assign(ZORLUK, {
  "x3-con-contrast-01":2,"x3-con-contrast-02":3,"x3-con-contrast-03":3,"x3-con-contrast-04":4,"x3-con-contrast-05":4,
  "x3-con-contrast-06":3,"x3-con-contrast-07":4,"x3-con-contrast-08":4,"x3-con-contrast-09":5,"x3-con-contrast-10":6,
  "x3-con-cause-01":2,"x3-con-cause-02":2,"x3-con-cause-03":6,"x3-con-cause-04":6,"x3-con-cause-05":3,
  "x3-con-cause-06":4,"x3-con-cause-07":6,"x3-con-cause-08":7,"x3-con-cause-09":6,"x3-con-cause-10":7,
  "x3-con-result-01":2,"x3-con-result-02":4,"x3-con-result-03":3,"x3-con-result-04":5,"x3-con-result-05":5,
  "x3-con-result-06":4,"x3-con-result-07":3,"x3-con-result-08":6,"x3-con-result-09":4,"x3-con-result-10":6,
  "x3-con-purpose-01":3,"x3-con-purpose-02":2,"x3-con-purpose-03":4,"x3-con-purpose-04":5,"x3-con-purpose-05":4,
  "x3-con-purpose-06":8,"x3-con-purpose-07":5,"x3-con-purpose-08":6,"x3-con-purpose-09":4,"x3-con-purpose-10":4,
  "x3-con-correlative-01":3,"x3-con-correlative-02":2,"x3-con-correlative-03":5,"x3-con-correlative-04":2,"x3-con-correlative-05":5,
  "x3-con-correlative-06":6,"x3-con-correlative-07":6,"x3-con-correlative-08":6,"x3-con-correlative-09":3,"x3-con-correlative-10":6,
  "x3-con-time-01":2,"x3-con-time-02":2,"x3-con-time-03":6,"x3-con-time-04":4,"x3-con-time-05":3,
  "x3-con-time-06":4,"x3-con-time-07":7,"x3-con-time-08":3,"x3-con-time-09":5,"x3-con-time-10":4
});
