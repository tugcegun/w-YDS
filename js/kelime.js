"use strict";
/* ================= Kelime paneli =================
   Veri: KELIME (js/data/kelime-*.js) · SIGNALS, SIGNAL_KIND, STOPWORDS, SYN_GROUPS (js/data/kelime-analiz.js)
   İlerleme: vocab = {anahtar: {b: kutu 0-6, due: tekrar günü, first, ok, no, last}} — anahtar liste kelimesi ya da "my:<id>" (kendi defterim).
   Aralıklı tekrar (Leitner): bildikçe kutu artar, tekrar aralığı uzar; bilemeyince kutu 1'e düşer, ertesi gün tekrar gelir. */

const KW_LIST=[], KW_BY={};
KELIME.forEach(k=>{const w=String(k.w||"").toLowerCase().trim();if(!w||KW_BY[w])return;k.w=w;KW_BY[w]=k;KW_LIST.push(k)});
KW_LIST.sort((a,b)=>a.w.localeCompare(b.w,"en"));
/* ★ derecesi gerçek sınav sayımından (js/data/kelime-sinav.js): 31 ÖSYM sınavından (KPDS 2006-2008, YDS 2013-2025) kaçında geçtiği.
   ★★★ en az 12 sınavda · ★★ 5-11 sınavda · ★ 0-4 sınavda */
if(typeof KELIME_SINAV!=="undefined")KW_LIST.forEach(k=>{const r=KELIME_SINAV.w[k.w];k.n=r?r[0]:0;k.c=r?r[1]:0;k.f=k.n>=12?3:k.n>=5?2:1});
const BOX_DAYS=[0,1,3,7,14,30,60], KW_LEARNED=4, KW_SESSION=20, KW_QUIZ=10;
const POS_TR={v:"fiil",adj:"sıfat",n:"isim",adv:"zarf",phr:"kalıp"};
const addDays=(iso,n)=>{const d=new Date(iso+"T00:00");d.setDate(d.getDate()+n);return isoOf(d)};
const stars=f=>"★".repeat(f||1)+`<span class="kw-off">${"★".repeat(3-(f||1))}</span>`;
const FREQ_TR={3:"Çok sık çıkıyor",2:"Sık çıkıyor",1:"Az çıkıyor"};
const examNote=e=>typeof e.n!=="number"?"":e.n?`Gerçek sınavlarda: ${KELIME_SINAV.exams} sınavın <b>${e.n}</b> tanesinde, toplam ${e.c} kez geçti.`:`${KELIME_SINAV.exams} gerçek sınavda hiç geçmedi; akademik metinlerde sık görülür.`;

/* ---- kelime biçimleri: metinde "alleviates / alleviated / alleviating" da tanınsın ---- */
function wordForms(w){
  const f=new Set([w]), last=w.slice(-1), vow=/[aeiou]/;
  f.add(w+"s");f.add(w+"es");f.add(w+"ed");f.add(w+"ing");f.add(w+"d");
  if(last==="e"){f.add(w.slice(0,-1)+"ing")}
  if(last==="y"&&!vow.test(w.slice(-2,-1))){f.add(w.slice(0,-1)+"ies");f.add(w.slice(0,-1)+"ied")}
  if(/[^aeiou][aeiou][bdgmnprt]$/.test(w)&&w.length<=7){f.add(w+last+"ed");f.add(w+last+"ing")}
  return [...f];
}
function phraseForms(p){const ws=p.split(" ");return wordForms(ws[0]).map(x=>[x].concat(ws.slice(1)).join(" "))}
const KW_FORM=new Map();   /* biçim → başlık kelime */
KW_LIST.forEach(k=>KW_FORM.set(k.w,k.w));
KW_LIST.forEach(k=>(k.w.includes(" ")?phraseForms(k.w):wordForms(k.w)).forEach(x=>{if(!KW_FORM.has(x))KW_FORM.set(x,k.w)}));
const KW_SIG=new Map();
Object.keys(SIGNALS).forEach(kind=>SIGNALS[kind].forEach(s=>{if(!KW_SIG.has(s))KW_SIG.set(s,kind)}));
const KW_STOP=new Set(STOPWORDS);
const KW_MAXN=5;
/* site analizinde "listede olmayan sık kelimeler"den çıkarılan temel kelimeler */
const KW_BASIC=new Set(("passage sentence sentences paragraph question questions answer statement following complete meaning closest "+
 "results result better several century centuries researchers research already scientists scientist within without countries country cities region "+
 "completed company according building public report reached patients opened discovered important because number during between another "+
 "however although student students children school schools people family friend friends before around almost always something nothing "+
 "everything someone anyone because different example world years months minutes hours today tomorrow yesterday english turkish government "+
 "started finished called played changed looked turned worked wanted needed became become thought through should really little large "+
 "should could would itself themselves himself herself yourself myself others whether toward towards beyond across behind became "+
 "problem problems system systems health water energy others person really during rather either around").split(/\s+/));

/* ---- ilerleme ---- */
const vOf=key=>vocab[key]||null;
const isLearned=key=>{const v=vOf(key);return !!(v&&v.b>=KW_LEARNED)};
function kwStatus(key){const v=vOf(key);if(!v)return "new";if(v.b>=KW_LEARNED)return "learned";if(v.no&&v.b<=1)return "hard";return "learning"}
const STATUS_TR={new:"Henüz çalışılmadı",learning:"Çalışılıyor",hard:"Zorlandığın kelime",learned:"Öğrenildi"};
function ownKey(w){return w.ref||"my:"+w.id}
function entryOf(key){
  if(key.startsWith("my:")){const w=words.find(x=>ownKey(x)===key);return w?{w:w.en,tr:w.tr||"—",s:w.s||[],a:[],own:true,p:"",id:w.id}:null}
  return KW_BY[key]||null;
}
function kwMark(key,ok,secs){
  const t=todayISO(), v=vocab[key]||(vocab[key]={b:0,due:t,first:t,ok:0,no:0});
  const wasNew=!v.last;
  /* KW.practice: öğrenilmiş kelimeler isteğe bağlı tazeleme çalışması. Yanlış bilinse bile
     kutu düşmez, "öğrenildi" işareti korunur — yoksa günü gelen tekrarı beklerdi. */
  const keep=KW.practice&&v.b>=KW_LEARNED;
  if(ok){v.b=wasNew?2:Math.min(6,v.b+1);v.ok++}else{if(!keep)v.b=1;v.no++}
  v.due=addDays(t,ok||keep?BOX_DAYS[v.b]:1);v.last=t;
  /* öğrenildiği gün Kelimelerim sayfasında gün gün görünür */
  if(v.b>=KW_LEARNED&&!v.learnedOn)v.learnedOn=t;
  {const w=words.find(x=>ownKey(x)===key);if(w){w.learned=v.b>=KW_LEARNED;if(w.learned&&!w.learnedOn)w.learnedOn=t}}
  const t0=T;T=null;logAnswer({sub:"kelime"},ok);T=t0;  /* açık kalan konu testinin süresi karışmasın */
  /* süre: app.js etkinlik izleyicisi sayar (daily.auto.act) */
  save();
}
/* bugün çalışılacaklara al; listedeki bir kelimeyse Kelimelerim sayfasına da eklenir */
function kwFlag(key,src){
  const t=todayISO(), v=vocab[key]||(vocab[key]={b:0,due:t,first:t,ok:0,no:0});
  v.b=Math.min(v.b,1);v.due=t;v.mw=true;
  if(KW_BY[key]&&!words.some(x=>ownKey(x)===key))words.push({id:Date.now()+Math.floor(Math.random()*1000),en:key,tr:KW_BY[key].tr,learned:false,date:t,src:src||"Kelime paneli",ref:key});
  save();
}

/* ---- bugünün kelimeleri ---- */
const kwNewPerDay=()=>+settings.kwNew||15;
function kwQueue(){
  const t=todayISO();
  const due=Object.keys(vocab).filter(k=>vocab[k].last&&vocab[k].due<=t&&entryOf(k)).sort((a,b)=>vocab[a].due<vocab[b].due?-1:vocab[a].due>vocab[b].due?1:vocab[a].b-vocab[b].b);
  const flagged=Object.keys(vocab).filter(k=>!vocab[k].last&&entryOf(k)); /* işaretlenmiş ama hiç çalışılmamış */
  const introduced=Object.keys(vocab).filter(k=>vocab[k].first===t&&vocab[k].last).length;
  const room=Math.max(0,kwNewPerDay()-introduced);
  const own=words.filter(w=>!w.learned&&!vocab[ownKey(w)]).map(ownKey);
  const fresh=KW_LIST.filter(k=>!vocab[k.w]).sort((a,b)=>(b.f||1)-(a.f||1)||(b.n||0)-(a.n||0)||hashStr(a.w+t)-hashStr(b.w+t)).map(k=>k.w); /* önce gerçek sınavlarda en çok geçenler */
  const news=flagged.concat(own,fresh).slice(0,Math.max(room,flagged.length));
  return {due:due.slice(0,40),news};
}

/* ================= Sayfa ================= */
const KW={mode:null,deck:[],i:0,show:false,ok:0,no:0,re:new Set(),t0:0,missed:[],
  quiz:null,q:"",filter:"all",text:"",pid:"",res:null,fill:null,
  practice:false,title:"",src:""};

function vKelime(){
  if(KW.mode==="cards") return kwCardsView();
  if(KW.mode==="quiz") return kwQuizView();
  const {due,news}=kwQueue(), n=due.length+news.length, mine=Object.keys(vocab).filter(k=>!vocab[k].last&&entryOf(k)).length;
  const seen=Object.keys(vocab).filter(k=>vocab[k].last&&!k.startsWith("my:"));
  const learned=seen.filter(isLearned).length;
  const hard=seen.filter(k=>kwStatus(k)==="hard").length;
  const top=KW_LIST.filter(k=>k.f===3).length;
  return head("YDS kelime çalışması","Kelime",
    `YDS'de sık çıkan <b>${KW_LIST.length}</b> kelime; eş anlamlıları, zıt anlamlıları ve sınav tarzı örnek cümleleriyle.${typeof KELIME_SINAV!=="undefined"?` ★ dereceleri tahmin değil: ${KELIME_SINAV.exams} gerçek ÖSYM sınavında (KPDS 2006–2008, YDS 2013–2025) tek tek sayıldı.`:""} Aralıklı tekrarla çalışırsın: bildiğin kelime daha seyrek, bilemediğin ertesi gün yine gelir.`)
  +`<section class="card lift kw-today">
      <div class="kw-today-in">
        <div><div class="eyebrow">Bugünün kelimeleri</div>
          <b class="kw-big">${n?`${n} kelime seni bekliyor`:"Bugünlük kelimeler bitti"}</b>
          <span class="muted">${n?`${due.length} tekrar · ${news.length} yeni${mine?` (${mine} tanesini sen ekledin)`:""}`:"Yarın tekrar gelecek olanlar hazırlanıyor. İstersen kelime testi çöz."}</span></div>
        <div class="row">
          ${n?`<button type="button" class="btn primary" data-act="kw-cards">Başla ${svg(I.arrow,16)}</button>`:""}
          <button type="button" class="btn ${n?"":"primary"}" data-act="kw-quiz">Kelime testi</button>
        </div>
      </div>
      <div class="strip kw-strip">
        <div><div class="k">Öğrendiğin</div><div class="v">${learned}<small>/ ${KW_LIST.length}</small></div><div class="m">en az 4 kez üst üste bildiğin</div></div>
        <div><div class="k">Çalıştığın</div><div class="v">${seen.length}</div><div class="m">${hard?`<button type="button" class="kw-hardbtn" data-act="kw-hard">${hard} tanesinde zorlanıyorsun · göster</button>`:"en az bir kez karşına çıkan"}</div></div>
        <div><div class="k">Çok sık çıkanlar</div><div class="v">${KW_LIST.filter(k=>k.f===3&&vocab[k.w]&&vocab[k.w].last).length}<small>/ ${top}</small></div><div class="m">★★★ kelimelerden çalıştığın</div></div>
      </div>
    </section>
    <div class="kw-folds">
      ${kwFold("para","Paragraf analizi","Metni yapıştır ya da sitedeki bir okuma metnini seç: YDS kelimeleri, bağlaçlar ve cümlelerin görevi işaretlenir.",kwParaHTML())}
      ${kwFold("list",`YDS'de en sık çıkan kelimeler`,`${KW_LIST.length} kelime · harfe göre, aranabilir`,`<div id="kwListWrap">${kwListHTML()}</div>`)}
      ${kwFold("syn","Eş anlamlı grupları",`${SYN_GROUPS.length} anlam ailesi · yakın anlam (restatement) ve kelime soruları için`,kwSynHTML())}
      ${kwFold("corpus","Sitedeki metinlerin kelime analizi","Bu sitedeki bütün okuma metinleri ve sorular taranır: en çok geçen YDS kelimeleri ve listede olmayan sık kelimeler",kwCorpusHTML())}
    </div>`;
}
function kwFold(id,title,sub,body){
  const k="kw:"+id;
  return `<details class="st-sub kw-fold" data-bkopen="${k}" ${BK.open.has(k)?"open":""}>
    <summary><span class="st-nm"><b>${title}</b><small>${sub}</small></span></summary>
    <div class="st-in">${BK.open.has(k)||id!=="corpus"?body:`<div class="kw-lazy" data-kwlazy="${id}"></div>`}</div></details>`;
}

/* ---- kelime kartı içeriği (liste, kart arkası, baloncuk) ---- */
function kwDetail(e,opts={}){
  const cnt=opts.count?kwCorpus().list[e.w]||0:null;
  return `<div class="kw-det">
    ${e.s&&e.s.length?`<p><span class="kw-lbl">Eş anlamlı</span> ${e.s.map(x=>`<span class="kw-syn">${esc(x)}</span>`).join("")}</p>`:""}
    ${e.a&&e.a.length?`<p><span class="kw-lbl">Zıt anlamlı</span> ${e.a.map(x=>`<span class="kw-ant">${esc(x)}</span>`).join("")}</p>`:""}
    ${e.ex?`<p class="kw-ex">${kwEmph(e.ex,e.w)}</p>`:""}
    ${e.et?`<p class="kw-et">${esc(e.et)}</p>`:""}
    ${!e.own&&typeof e.n==="number"?`<p class="kw-cnt kw-real">${examNote(e)}</p>`:""}
    ${cnt!==null?`<p class="kw-cnt">${cnt?`Bu sitedeki soru ve metinlerde ${cnt} kez geçiyor.`:"Bu sitedeki soru ve metinlerde henüz geçmiyor."}</p>`:""}
  </div>`;
}
function kwEmph(s,w){
  const forms=(w.includes(" ")?phraseForms(w):wordForms(w)).sort((a,b)=>b.length-a.length).map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  return esc(s).replace(new RegExp(`\\b(${forms.join("|")})\\b`,"i"),"<b>$1</b>");
}

/* ---- liste ---- */
function kwFilterMatch(k){
  const f=KW.filter, q=KW.q.trim().toLowerCase();
  if(q&&!(k.w.includes(q)||String(k.tr).toLowerCase().includes(q)||(k.s||[]).some(x=>x.toLowerCase().includes(q))))return false;
  if(f==="all")return true;
  if(f==="top")return true;
  if(f==="f3")return k.f===3;
  if(POS_TR[f])return k.p===f;
  return kwStatus(k.w)===f;
}
function kwRow(k){
  const st=kwStatus(k.w);
  return `<details class="kw-row st-${st}"><summary>
      <span class="kw-w">${esc(k.w)}</span><span class="kw-p">${POS_TR[k.p]||""}</span>
      <span class="kw-tr">${esc(k.tr)}</span><span class="kw-f" title="${FREQ_TR[k.f||1]}">${stars(k.f)}</span>
      <span class="kw-dot" title="${STATUS_TR[st]}"></span></summary>
    ${kwDetail(k,{count:true})}
    <div class="kw-row-act"><span class="muted">${STATUS_TR[st]}${vOf(k.w)&&vOf(k.w).last?` · sıradaki tekrar ${fmtDate(vOf(k.w).due,true)}`:""}</span>
      <button type="button" class="btn sm" data-act="kw-flag" data-v="${esc(k.w)}">Bugünün kelimelerine ekle</button></div>
  </details>`;
}
function kwListHTML(){
  const opts=[["all","Hepsi"],["top","Gerçek sınavlarda en çok geçen 100"],["f3","★★★ Çok sık çıkanlar"],["v","Fiiller"],["adj","Sıfatlar"],["n","İsimler"],["adv","Zarflar"],["phr","Kalıplar"],["hard","Zorlandıklarım"],["learning","Çalışıyorum"],["learned","Öğrendiklerim"],["new","Hiç çalışmadıklarım"]];
  const bar=`<div class="kw-bar"><input type="text" id="kwSearch" placeholder="Ara: kelime, Türkçesi ya da eş anlamlısı" value="${esc(KW.q)}" autocomplete="off">
    <select id="kwFilter" aria-label="Süz">${opts.map(([v,t])=>`<option value="${v}" ${KW.filter===v?"selected":""}>${t}</option>`).join("")}</select></div>`;
  return bar+`<div id="kwList">${kwListBody()}</div>`;
}
function kwListBody(){
  let rows=KW_LIST.filter(kwFilterMatch);
  if(KW.filter==="top")rows=rows.filter(k=>k.n).sort((a,b)=>b.n-a.n||b.c-a.c).slice(0,100);
  if(!rows.length)return emptyState("Eşleşen kelime yok","Aramayı ya da süzgeci değiştir.");
  if(KW.q.trim()||KW.filter!=="all")
    return `<p class="st-note">${rows.length} kelime</p><div class="kw-rows">${rows.slice(0,100).map(kwRow).join("")}</div>${rows.length>100?`<p class="st-note">İlk 100 kelime gösteriliyor; aramayı daralt.</p>`:""}`;
  const by={};rows.forEach(k=>{const L=k.w[0].toUpperCase();(by[L]=by[L]||[]).push(k)});
  return Object.keys(by).sort().map(L=>{const ks=by[L], lr=ks.filter(k=>isLearned(k.w)).length, key="kw-L:"+L;
    return `<details class="st-sub kw-letter" data-bkopen="${key}" ${BK.open.has(key)?"open":""}><summary><span class="st-nm"><b>${L}</b><small>${ks.length} kelime${lr?` · ${lr} öğrenildi`:""}</small></span>
      <span class="st-bar" aria-hidden="true"><i style="width:${Math.round(lr/ks.length*100)}%"></i></span></summary>
      <div class="kw-rows">${BK.open.has(key)?ks.map(kwRow).join(""):""}</div></details>`}).join("");
}

/* ---- eş anlamlı grupları ---- */
function kwSynHTML(){
  return `<p class="st-note">Sınavda bir kelimenin yerine çoğu zaman aynı ailedeki başka bir kelime gelir. <span class="kw-v">Altı çizili</span> olanlar listede; üstüne dokununca anlamı açılır.</p>
  <div class="kw-groups">${SYN_GROUPS.map(g=>`<div class="kw-group"><b>${esc(g.t)}</b><div>${g.w.map(w=>KW_BY[w]?`<button type="button" class="kw-chip kw-v" data-kw="${esc(w)}">${esc(w)}</button>`:`<span class="kw-chip">${esc(w)}</span>`).join("")}</div></div>`).join("")}</div>`;
}

/* ---- kendi defterim (eski Kelimelerim) ---- */
function kwOwnHTML(){
  return `<div class="grid kw-own-form">
      <div><label class="f" for="wEn">İngilizce</label><input type="text" id="wEn" placeholder="notwithstanding"></div>
      <div><label class="f" for="wTr">Türkçesi</label><input type="text" id="wTr" placeholder="-e rağmen"></div>
      <button type="button" class="btn primary" data-act="add-word">Ekle</button></div>
    ${words.length?`<ul class="words mt">${[...words].reverse().map(w=>`<li class="${w.learned?"done":""}">
      <input type="checkbox" data-wl="${w.id}" ${w.learned?"checked":""} aria-label="${esc(w.en)} öğrenildi">
      <span class="en">${esc(w.en)}</span><span class="tr">${esc(w.tr)}</span>
      <button type="button" class="icon-btn" data-act="del-word" data-v="${w.id}" aria-label="Sil">${svg(I.trash,16)}</button></li>`).join("")}</ul>`
    :`<p class="st-note mt">Henüz kelime eklemedin. Paragraf analizinde bir kelimeye dokunup da ekleyebilirsin.</p>`}`;
}

/* ================= Metin çözümleme ================= */
function kwTokens(text){
  /* parçalar: {t: metin, w: kelime mi} */
  return text.split(/([A-Za-z][A-Za-z'’-]*)/).filter(x=>x!=="").map(t=>({t,w:/^[A-Za-z]/.test(t)}));
}
/* sıradaki n kelimeyi (aralarında yalnız boşluk varsa) birleştirir */
function kwJoin(tk,i,n){let s=[],j=i;
  while(s.length<n&&j<tk.length){if(tk[j].w){s.push(tk[j].t.toLowerCase().replace(/’/g,"'"));j++}
    else{if(s.length&&!/^[ \t]+$/.test(tk[j].t))return null;if(!s.length)return null;j++}}
  return s.length===n?{s:s.join(" "),end:j}:null}
/* metni işaretli parçalara ayırır: sig (bağlaç) · kw (liste kelimesi) · kx (diğer kelime) */
function kwMarkup(text){
  const tk=kwTokens(text), out=[];let i=0;
  while(i<tk.length){
    if(!tk[i].w){out.push({t:tk[i].t});i++;continue}
    let hit=null;
    for(let n=KW_MAXN;n>=1&&!hit;n--){const j=kwJoin(tk,i,n);if(!j)continue;
      if(KW_SIG.has(j.s))hit={type:"sig",kind:KW_SIG.get(j.s),key:j.s,end:j.end};
      else if(KW_FORM.has(j.s))hit={type:"kw",key:KW_FORM.get(j.s),end:j.end};}
    if(hit){out.push({t:tk.slice(i,hit.end).map(x=>x.t).join(""),type:hit.type,kind:hit.kind,key:hit.key});i=hit.end;continue}
    const low=tk[i].t.toLowerCase();
    out.push({t:tk[i].t,type:low.length>=4&&!KW_STOP.has(low)?"kx":null,key:low});i++;
  }
  return out;
}
function kwMarkHTML(parts){
  return parts.map(p=>{
    if(p.type==="sig")return `<button type="button" class="kw-s k-${p.kind}" data-ks="${p.kind}">${esc(p.t)}</button>`;
    if(p.type==="kw")return `<button type="button" class="kw-v ${isLearned(p.key)?"known":""}" data-kw="${esc(p.key)}">${esc(p.t)}</button>`;
    if(p.type==="kx")return `<span class="kw-x" data-kx="${esc(p.key)}">${esc(p.t)}</span>`;
    return esc(p.t).replace(/\n/g,"<br>")
      .replace(/⟦(\d+)⟧/g,(m,i)=>{const it=KW.fill&&KW.fill.items[+i];return `<button type="button" class="kw-blank" data-kb="${i}" title="Dokun: 4 şıktan birini seç">${it&&it.n?`(${it.n}) `:""}<span>seç</span></button>`})
      /* cevaplanmış boşluklar da tıklanır: kutu yeniden açılır, seçimin ve açıklama görünür */
      .replace(/«(\d+)\|/g,'<mark class="kw-fill" data-kb="$1" title="Doğru bildin · açıklama için dokun">').replace(/»/g,"</mark>")
      .replace(/‹(\d+)\|/g,'<mark class="kw-fill no" data-kb="$1" title="Yanlış seçtin; doğru cevap bu · açıklama için dokun">').replace(/›/g,"</mark>")
      .replace(/⁅(\d+)\|/g,'<mark class="kw-fill shown" data-kb="$1" title="Cevap açıldı · açıklama için dokun">').replace(/⁆/g,"</mark>");
  }).join("");
}
/* ---- boşluklu metinler (cloze, paragraf tamamlama) ----
   Sitedeki metin seçilince boşluklar boş gelir: ⟦i⟧. Kullanıcı boşluğa dokununca 4 şıktan birini seçer.
   Doğru → «cevap» (yeşil) · yanlış → ‹doğru cevap› (kırmızı) · "Tümünü aç" → ⁅cevap⁆ (nötr) */
const KW_OPTS=4;
function kwFill(pid){
  let text, qs;
  if(pid.startsWith("q:")){const q=Q[pid.slice(2)];text=q?(q.passage||q.q):"";qs=q?[q]:[]}
  else{text=kwPassages()[pid]||"";qs=Object.values(Q).filter(q=>q.pid===pid&&Array.isArray(q.o))}
  const items=[];
  qs.slice().sort((a,b)=>(a.blank||0)-(b.blank||0)).forEach(q=>{
    const re=q.blank?new RegExp("\\("+q.blank+"\\)\\s*-{3,}"):(/^(sc-|rd-completion|cloze)/.test(q.sub||"")?/-{4,}/:null);
    if(!re||!re.test(text))return;
    /* 5 şıktan biri (yanlışlardan biri, her seferinde aynı) çıkarılır → 4 şık */
    let opts=q.o.map((o,j)=>j);
    if(opts.length>KW_OPTS){const wrong=opts.filter(j=>j!==q.a);const drop=wrong[hashStr(q.id)%wrong.length];opts=opts.filter(j=>j!==drop)}
    text=text.replace(re,"\u0001"+items.length+"\u0001");
    items.push({qid:q.id,n:q.blank||0,opts,st:null,pick:null});
  });
  text=text.replace(/\((\d+)\)\s*-{3,}/g,"($1) ____").replace(/-{4,}/g,"____");
  return {base:text,items,ids:qs.map(q=>q.id),shown:""};
}
const kwAns=it=>String(Q[it.qid].o[Q[it.qid].a]||"").replace(/[«»‹›⁅⁆⟦⟧]/g,"");
function kwFillText(F){ /* analiz edilen metin (işaretli) */
  return F.base.replace(/\u0001(\d+)\u0001/g,(m,i)=>{const it=F.items[+i], pre=it.n?`(${it.n}) `:"";
    if(!it.st)return `⟦${i}⟧`;const a=kwAns(it);return pre+(it.st==="ok"?`«${i}|${a}»`:it.st==="no"?`‹${i}|${a}›`:`⁅${i}|${a}⁆`)});
}
function kwFillClean(F){ /* yazı kutusunda görünen düz metin */
  return F.base.replace(/\u0001(\d+)\u0001/g,(m,i)=>{const it=F.items[+i], pre=it.n?`(${it.n}) `:"";return it.st?pre+kwAns(it):pre+"____"});
}
/* boşluk cevabı, testteki gibi kaydedilir: yanlışsa Yanlışlarım defterine, takvime */
function kwRecord(q,k){
  const ok=k===q.a, m=mem.mistakes[q.id], now=todayISO();
  if(!ok) dbPut("mistakes",{id:q.id,sub:q.sub,src:q.src,wrong:(m?m.wrong:0)+1,choice:k,first:m?m.first:now,last:now,status:"open",
    history:[...((m&&m.history)||[]),{d:now,c:k}].slice(-10)});
  else if(m&&m.status==="open") dbPut("mistakes",Object.assign({},m,{status:"learned",fixed:now}));
  answered[q.id]={ok,d:now};
  const t0=T;T=null;logAnswer(q,ok);T=t0;
  save();buildNav();
}
/* çözülen boşlukların açıklamaları metnin altında kalıcı durur (kutu kapansa da okunur) */
function kwExplHTML(){
  const F=KW.fill;if(!F)return "";
  const its=F.items.map((it,i)=>({it,i})).filter(x=>x.it.st);
  if(!its.length)return "";
  return `<div class="kw-expl"><h4 class="kw-h">Boşlukların açıklamaları</h4>${its.map(({it})=>{const q=Q[it.qid];
    return `<div class="kw-ex-row ${it.st}"><div class="kw-ex-top"><b>${it.n?`(${it.n})`:"Boşluk"} ${esc(q.o[q.a])}</b>
      <span class="pill ${it.st==="ok"?"ok":it.st==="no"?"no":"plain"}">${it.st==="ok"?"Doğru bildin":it.st==="no"?"Yanlış · senin cevabın: "+esc(q.o[it.pick]):"Cevap açıldı"}</span></div>
      ${q.e?`<p>${esc(q.e)}</p>`:""}${kwOptNotes(q,it.st==="no"?it.pick:null,it.opts)}</div>`}).join("")}</div>`;
}
function kwBlankHTML(i){
  const F=KW.fill, it=F&&F.items[i];if(!it)return "";
  const q=Q[it.qid], L="ABCD", done=!!it.st;
  return `<div class="kw-pop-h"><b>${it.n?`(${it.n}) numaralı boşluk`:"Boşluk"}</b></div>
    ${done?"":`<p class="st-note">Boşluğa uygun olanı seç.</p>`}
    <div class="kw-bopts">${it.opts.map((j,x)=>{
      const st=!done?"":j===q.a?"ok":j===it.pick?"no":"dim";
      return `<button type="button" class="kw-bo ${st}" data-act="kw-bpick" data-i="${i}" data-v="${j}" ${done?"disabled":""}><span class="L">${L[x]}</span><span>${esc(q.o[j])}</span></button>`}).join("")}</div>
    ${it.st==="ok"||it.st==="no"?`<div class="feedback ${it.st}"><b>${it.st==="ok"?"Doğru!":"Yanlış."}</b>${q.e?`<p>${esc(q.e)}</p>`:""}${kwOptNotes(q,it.st==="no"?it.pick:null,it.opts,true)}${it.st==="no"?`<p class="note">Yanlışlarım defterine kaydedildi.</p>`:""}</div>`
      :it.st==="shown"?`<div class="feedback ok"><b>Cevap açıldı.</b>${q.e?`<p>${esc(q.e)}</p>`:""}</div>`:""}`;
}
function kwPopBlank(anchor,i){kwPop(anchor,kwBlankHTML(i));const p=document.getElementById("kwPop");if(p)p.dataset.pb=i}
function kwPopRefresh(i){const p=document.getElementById("kwPop");if(!p||p.hidden)return;
  p.dataset.pb=i;
  p.innerHTML=`<button type="button" class="kw-pop-x" data-act="kw-pop-close" aria-label="Kapat">${svg(I.x,14)}</button>`+kwBlankHTML(i);
  kwPopFit(p);p._y=scrollY}
/* boşluk durumu değişince metin yeniden işaretlenir; çeviri açık kalır, değişmeyen cümleler yeniden çevrilmez */
function kwRefill(scroll){
  const F=KW.fill;if(!F)return;
  const old=KW.res;
  KW.text=F.shown=kwFillClean(F);
  const ta=document.getElementById("kwText");if(ta)ta.value=KW.text;
  const r=kwAnalyze(kwFillText(F));
  if(old&&old.tr){r.trOn=old.trOn;r.tr=r.sents.map(s=>{const j=old.sents.findIndex(o=>o.s===s.s);return j>=0?old.tr[j]:""})}
  KW.res=r;
  const el=document.getElementById("kwRes");
  if(el){el.classList.toggle("same",!scroll);el.innerHTML=kwResHTML(r);if(scroll)el.scrollIntoView({behavior:"smooth",block:"start"})}else render();
  if(r.trOn)kwTranslateFill(r);
}
const stemOf=w=>w.replace(/(ies)$/,"y").replace(/(ing|ed|es|s)$/,"").replace(/e$/,"");
function kwSentences(text){
  return text.replace(/\s+/g," ").trim().split(/(?<=[.!?»›⁆])\s+(?=["'(“«‹⁅⟦]?[A-Z(«‹⁅⟦])/).filter(s=>/[A-Za-z⟦]/.test(s));
}
const REF_START=/^(this|these|that|those|it|its|they|their|such|he|she|his|her|both|the latter|the former|the same)\b/i;
function kwAnalyze(raw){
  const text=raw.replace(/\((\d+)\)\s*-{3,}/g,"($1) ____").replace(/-{4,}/g,"____").trim();
  const sents=kwSentences(text);
  const allParts=kwMarkup(text);
  const listHits={}, sigHits={};
  allParts.forEach(p=>{if(p.type==="kw")listHits[p.key]=(listHits[p.key]||0)+1;if(p.type==="sig")sigHits[p.kind]=(sigHits[p.kind]||0)+1});
  /* anahtar kelimeler: metinde en az 2 kez geçen anlamlı kelimeler (kök bazında) */
  const stemCount={}, stemWord={};
  allParts.forEach(p=>{if((p.type==="kx"||p.type==="kw")&&p.t.length>=4){const s=stemOf(p.t.toLowerCase());stemCount[s]=(stemCount[s]||0)+1;stemWord[s]=stemWord[s]||p.t.toLowerCase()}});
  const keys=Object.keys(stemCount).filter(s=>stemCount[s]>=2).sort((a,b)=>stemCount[b]-stemCount[a]).slice(0,8);
  const wordsN=allParts.filter(p=>p.type!==undefined&&p.type!==null||/^[A-Za-z]/.test(p.t)).length;
  const rows=sents.map((s,idx)=>{
    const parts=kwMarkup(s), kinds=[];
    parts.forEach(p=>{if(p.type==="sig"&&!kinds.includes(p.kind))kinds.push(p.kind)});
    const firstWords=s.split(/\s+/).slice(0,4).join(" ").toLowerCase();
    const lead=parts.find(p=>p.type==="sig"&&firstWords.includes(p.t.toLowerCase().split(" ")[0]));
    const stems=new Set(parts.filter(p=>p.type==="kx"||p.type==="kw").map(p=>stemOf(p.t.toLowerCase())));
    const hasKey=keys.some(k=>stems.has(k));
    const notes=[];
    if(idx===0)notes.push({c:"main",t:"Giriş: konu burada tanıtılıyor. Ana fikir çoğunlukla ilk cümlede ya da bir zıtlık bağlacından sonra gelir."});
    if(lead)notes.push({c:lead.kind,t:`${SIGNAL_KIND[lead.kind].t}: ${SIGNAL_KIND[lead.kind].d}`});
    else if(kinds.includes("ornek"))notes.push({c:"ornek",t:"Örnek veriyor: önceki genel fikri destekliyor."});
    else if(kinds.includes("zit")&&idx>0)notes.push({c:"zit",t:"Cümlenin içinde zıtlık var: iki fikir karşılaştırılıyor."});
    if(REF_START.test(s)&&idx>0)notes.push({c:"ref",t:`“${esc(s.match(REF_START)[0])}” ile başlıyor: önceki cümledeki bir şeye gönderme yapıyor, tek başına duramaz.`});
    if(idx===0&&REF_START.test(s))notes.push({c:"warn",t:"İlk cümle gönderme sözcüğüyle başlıyor: bu metin bir paragrafın ortasından alınmış olabilir."});
    if(kinds.includes("temkin"))notes.push({c:"temkin",t:"Temkinli dil: yazar kesin konuşmuyor; şıklarda “kesinlikle, her zaman” gibi ifadeler varsa dikkat."});
    if(sents.length>=4&&idx>0&&keys.length>=3&&!hasKey)notes.push({c:"warn",t:"Metnin anahtar kelimelerinden hiçbiri yok: konu dışı olabilir (akışı bozan cümle ipucu)."});
    if(idx===sents.length-1&&sents.length>2&&(kinds.includes("sonuc")||kinds.includes("ozet")))notes.push({c:"sonuc",t:"Son cümle bir sonuç/özet veriyor: paragrafı kapatıyor."});
    return {s,parts,notes};
  });
  const kws=Object.keys(listHits);
  return {text,sents:rows,listHits,sigHits,keys:keys.map(k=>({w:stemWord[k],n:stemCount[k]})),wordsN,kws,
    known:kws.filter(isLearned).length};
}

/* ---- paragraf analizi arayüzü ---- */
let _pass=null;
function kwPassages(){ /* ortak metinler (PASSAGES) + soruların içindeki paragraflar */
  if(_pass)return _pass;_pass={};const seen=new Set();
  const add=(id,t)=>{if(typeof t!=="string"||t.length<250||/[ğüşıöçĞÜŞİÖÇ]/.test(t))return;const k=t.slice(0,120);if(seen.has(k))return;seen.add(k);_pass[id]=t};
  Object.keys(PASSAGES).forEach(id=>add(id,PASSAGES[id]));
  Object.values(Q).forEach(q=>{if(q.passage)add("q:"+q.id,q.passage);else if(!q.pid&&q.q&&q.q.length>300)add("q:"+q.id,q.q)});
  return _pass;
}
/* ---- metinler çalışılan haftaya göre ----
   Metnin haftası = sorularının haftası (haftalık sorular "week:N", diğerleri alt başlığın haftası).
   Metni olmayan haftada (5, 7, 8) en yakın önceki haftanın metinleri gelir. */
let _pwk=null;
const kwPassQs=id=>id.startsWith("q:")?[Q[id.slice(2)]].filter(Boolean):Object.values(Q).filter(q=>q.pid===id);
function kwPassWeeks(){
  if(_pwk)return _pwk;_pwk={};
  Object.keys(kwPassages()).forEach(id=>{const ws=kwPassQs(id).map(q=>q.src&&q.src.startsWith("week:")?+q.src.slice(5):weekOfSub(q.sub)).filter(Boolean);
    _pwk[id]=ws.length?Math.min(...ws):0});
  return _pwk;
}
function kwTargetWeek(){
  const cw=currentWeek(), W=kwPassWeeks(), has=w=>Object.values(W).includes(w);
  for(let w=cw;w>=1;w--)if(has(w))return w;
  return cw;
}
const kwPassDone=id=>{const qs=kwPassQs(id);return qs.length>0&&qs.every(q=>answered[q.id])};
function kwWeekPassages(w){const W=kwPassWeeks();return Object.keys(W).filter(id=>W[id]===w)}
function kwPassOptions(){
  const P=kwPassages(), W=kwPassWeeks(), tw=kwTargetWeek(), cw=currentWeek();
  const opt=id=>`<option value="${esc(id)}" ${KW.pid===id?"selected":""}>${kwPassDone(id)?"✓ ":""}${esc(P[id].slice(0,70).replace(/\s+/g," "))}…</option>`;
  const weeksAll=[...new Set(Object.values(W))].sort((a,b)=>a-b);
  const label=w=>w&&PLAN[w-1]?`Hafta ${w} · ${PLAN[w-1].short}`:"Diğer metinler";
  return weeksAll.sort((a,b)=>(a===tw?-1:b===tw?1:a-b)).map(w=>{const ids=kwWeekPassages(w);
    const done=ids.filter(kwPassDone).length;
    return `<optgroup label="${w===tw?(w===cw?"Bu hafta · ":"Bu haftaya en yakın · "):""}${esc(label(w))} (${done}/${ids.length} çözüldü)">${ids.map(opt).join("")}</optgroup>`}).join("");
}
/* Panel'deki "Bu haftanın paragrafı": haftanın çözülmemiş ilk metni analizde açılır */
function kwOpenWeekPassage(){
  const ids=kwWeekPassages(kwTargetWeek());
  const id=ids.find(x=>!kwPassDone(x))||ids[0];
  go("words");
  BK.open.add("kw:para");KW.mode=null;
  if(id){KW.pid=id;KW.fill=kwFill(id);KW.res=null}
  render();
  if(id)kwRefill(true);
}
function kwParaHTML(){
  return `<div class="kw-para-in">
    <select id="kwPass" aria-label="Sitedeki okuma metinleri"><option value="">Sitedeki bir okuma metnini seç (${Object.keys(kwPassages()).length} metin)</option>${kwPassOptions()}</select>
    <textarea id="kwText" rows="6" placeholder="Ya da buraya İngilizce bir paragraf yapıştır…">${esc(KW.text)}</textarea>
    <div class="kw-para-bar">
      <button type="button" class="btn primary" data-act="kw-analyze">Analiz et</button>
      <button type="button" class="btn" data-act="kw-clear" ${KW.text?"":"disabled"}>Temizle</button>
      ${(()=>{const tw=kwTargetWeek(), ids=kwWeekPassages(tw), done=ids.filter(kwPassDone).length;return ids.length?`<button type="button" class="btn kw-next-pass" data-act="para-week" title="Hafta ${tw} · ${esc(PLAN[tw-1].short)} · ${done}/${ids.length} metin çözüldü">Bu haftanın sıradaki metni ${svg(I.arrow,16)}</button>`:""})()}
    </div>
  </div><div id="kwRes">${KW.res?kwResHTML(KW.res):""}</div>`;
}
function kwResHTML(r){
  const kinds=Object.keys(r.sigHits);
  const unknown=r.kws.filter(k=>!isLearned(k));
  const F=KW.fill, blanks=/____/.test(r.text);
  const its=F?F.items:[], solved=its.filter(x=>x.st==="ok"||x.st==="no").length, right=its.filter(x=>x.st==="ok").length, open=its.filter(x=>!x.st).length;
  const info=its.length?`<div class="kw-info kw-info-row"><div><div class="kw-score">${solved?`${solved}/${its.length} boşluk çözüldü · <b>${right} doğru</b>`:`${its.length} boşluk`}${open<its.length&&open?` · ${open} boşluk kaldı`:""}</div></div>
      ${open?`<button type="button" class="btn sm" data-act="kw-reveal-all">Tümünü aç</button>`:""}</div>`
    :F&&F.ids.length?`<div class="kw-info">Bu metnin sitede <b>${F.ids.length}</b> sorusu var. <button type="button" class="btn sm" data-act="kw-solve">Soruları çöz</button></div>`
    :blanks?`<div class="kw-info"><b>Metinde boşluk (____) var.</b> Bunlar sınavda şıklardan doldurulan yerler; senin doldurman gerekmiyor, analiz boşlukları atlar.</div>`:"";
  return `<div class="kw-res">${info}
    <div class="strip kw-strip kw-strip4">
      <div><div class="k">Cümle</div><div class="v">${r.sents.length}</div><div class="m">${r.wordsN} kelime</div></div>
      <div><div class="k">YDS kelimesi</div><div class="v">${r.kws.length}</div><div class="m">${r.known} tanesini öğrendin</div></div>
      <div><div class="k">Bağlaç / sinyal</div><div class="v">${Object.values(r.sigHits).reduce((a,b)=>a+b,0)}</div><div class="m">${kinds.length} farklı işlev</div></div>
      <div><div class="k">Anahtar kelime</div><div class="v kw-keys">${r.keys.slice(0,3).map(k=>esc(k.w)).join(", ")||"—"}</div><div class="m">metnin konusu</div></div>
    </div>
    <div class="kw-legend">${kinds.map(k=>`<button type="button" class="kw-s k-${k}" data-ks="${k}">${SIGNAL_KIND[k].t} · ${r.sigHits[k]}</button>`).join("")}
      <span class="kw-v kw-leg">YDS kelimesi</span><span class="muted">Herhangi bir kelimeye dokun: anlamı açılır ya da defterine eklersin.</span></div>
    <div class="kw-text">${kwMarkHTML(kwMarkup(r.text))}</div>
    ${kwExplHTML()}
    <div class="kw-h kw-h-row"><h4>Cümle cümle akış</h4>
      <button type="button" class="btn sm ${r.trOn?"":"primary"}" data-act="kw-trans" id="kwTransBtn">${r.trOn?"Türkçesini gizle":"Türkçesini göster"}</button></div>
    <ol class="kw-sents ${r.trOn?"tr-on":""}">${r.sents.map((x,i)=>`<li><div class="kw-stx">${kwMarkHTML(x.parts)}</div>
      <div class="kw-trl" id="kwTr${i}">${r.tr&&r.tr[i]?esc(r.tr[i]):""}</div>
      ${x.notes.length?`<ul class="kw-notes">${x.notes.map(n=>`<li class="n-${n.c}">${n.t}</li>`).join("")}</ul>`:""}</li>`).join("")}</ol>
    ${r.kws.length?`<h4 class="kw-h">Bu metindeki YDS kelimeleri</h4>
      <div class="kw-gloss">${r.kws.map(k=>{const e=KW_BY[k];return `<button type="button" class="kw-gl ${isLearned(k)?"known":""}" data-kw="${esc(k)}"><b>${esc(k)}</b><span>${esc(e.tr)}</span></button>`}).join("")}</div>
      ${unknown.length?(()=>{const t=todayISO(), added=unknown.every(k=>vocab[k]&&vocab[k].due<=t);
        return `<div class="row mt">${added?`<button type="button" class="btn" disabled>✓ ${unknown.length} kelime Kelimelerim’e eklendi</button><button type="button" class="btn sm ghost" data-act="go" data-v="mywords">Kelimelerim’de gör</button>`
          :`<button type="button" class="btn primary" data-act="kw-flag-all" data-v="${esc(unknown.join("|"))}">Öğrenmediğim ${unknown.length} kelimeyi çalışacaklarıma ekle</button>`}</div>`})():""}`:""}
  </div>`;
}

/* ================= Kelimelerin geçtiği çıkmış sorular =================
   Sitedeki bütün sorular (konu testleri, haftalık çıkmış sorular, kişisel ve ekstra havuzlar)
   bir kez taranır: soru kökü, şıklar ve varsa okuma metni içindeki kelimeler — YDS listesindekiler
   biçimleriyle (alleviate → alleviating) — sözlük anahtarına göre soru numaralarına bağlanır.
   Sonra "şu kelimeler hangi çıkmış sorularda geçiyor" sorusu anında yanıtlanır. */
let _kwQIdx=null, _kwIdxWarm=false;
function kwQIndex(){
  if(_kwQIdx)return _kwQIdx;
  const idx=new Map();
  const add=(k,id)=>{let s=idx.get(k);if(!s)idx.set(k,s=[]);if(!s.includes(id))s.push(id)};
  const feed=(text,id)=>{
    const tk=kwTokens(text), ws=[];
    for(let i=0;i<tk.length;i++){
      if(!tk[i].w)continue;
      ws.push([i,tk[i].t.toLowerCase().replace(/[’]/g,"'")]);
    }
    ws.forEach(([i,t])=>add(KW_FORM.get(t)||t,id));
    /* çok kelimeli kalıplar: ardışık n kelime birleşimi listede varsa soruya bağlanır */
    for(let n=2;n<=4;n++)for(let j=0;j+n<=ws.length;j++){
      let s=ws[j][1];for(let m=j+1;m<j+n;m++)s+=" "+ws[m][1];
      const b=KW_FORM.get(s);if(b)add(b,id);
    }
  };
  Object.values(Q).forEach(q=>{
    if(q.q)feed(q.q,q.id);
    (q.o||[]).forEach(o=>{if(typeof o==="string")feed(o,q.id)});
    const p=q.passage||(q.pid&&PASSAGES[q.pid]);
    if(typeof p==="string"&&!/[ğüşıöç]/.test(p))feed(p,q.id);
  });
  _kwQIdx=idx;return idx;
}
/* Tarama ağır (yarım saniye). Kullanıcı Kelimelerim'e girmeden önce, boşta olduğunda
   hazırlanır; ilk ihtiyaçta zaten hazır olur. requestIdleCallback yoksa kısa bir gecikmeyle. */
function kwWarmIndex(){
  if(_kwQIdx||_kwIdxWarm)return;
  _kwIdxWarm=true;
  const run=()=>{if(!_kwQIdx)kwQIndex()};
  if(typeof requestIdleCallback==="function")requestIdleCallback(run,{timeout:4000});
  else setTimeout(run,2500);
}
/* anahtar listedeki bir kelime mi (yoksa kullanıcının kendi kelimesi mi) */
function kwSearchKeys(keys){
  return [...new Set(keys.map(k=>{const e=entryOf(k);return e?String(e.w).toLowerCase().trim():String(k).toLowerCase().trim()}).filter(Boolean))];
}
/* verilen kelimelerin geçtiği sorular. Önce hiç çözülmemişler, sonra yanlış yapılanlar gelir. */
function kwExamQs(keys,limit){
  const idx=kwQIndex(), base=kwSearchKeys(keys), hit=new Map();
  base.forEach(w=>{
    const forms=(w.includes(" ")?phraseForms(w):wordForms(w)).map(f=>KW_FORM.get(f)||f);
    forms.forEach(f=>(idx.get(f)||[]).forEach(id=>{
      let s=hit.get(id);if(!s)hit.set(id,s=[]);if(!s.includes(w))s.push(w)}));
  });
  if(!hit.size)return [];
  /* okuma metinli sorularda metin bütünlüğü için aynı paragrafın öbür soruları da eklenir */
  const ids=new Set(hit.keys());
  hit.forEach((_,id)=>{
    const q=Q[id];if(!q||!q.pid)return;
    Object.values(Q).forEach(o=>{if(o.pid===q.pid)ids.add(o.id)});
  });
  const rank=id=>{const a=answered[id];return a?(a.ok?2:1):0};
  return [...ids].map(id=>({id,words:hit.get(id)||[],rank:rank(id),q:Q[id]}))
    .sort((a,b)=>a.rank-b.rank||(b.words.length-a.words.length))
    .slice(0,limit||40);
}
const kwExamScope=s=>`Kelimelerin geçtiği sorular · ${s}`;
/* seçili kelimelerle çıkmış soru testini başlatır */
function kwStartExam(keys,label){
  const hits=kwExamQs(keys,40);
  if(!hits.length){toast("Bu kelimeler sitenin sorularında geçmiyor");return}
  const MAX=20, list=hits.slice(0,MAX);
  startTest({title:kwExamScope(label),src:"kwq:"+label,ids:list.map(x=>x.id),back:"mywords"});
  toast(list.length<hits.length?`${list.length} soru açıldı (${hits.length} eşleşmenin ilk ${MAX} tanesi)`:`${list.length} çıkmış soru açıldı`);
}

/* ---- site metinlerinin analizi ---- */
let _corpus=null;
function kwCorpus(){
  if(_corpus)return _corpus;
  const texts=[];const TR=/[ğüşıöçĞÜŞİÖÇ]/;
  Object.values(PASSAGES).forEach(p=>{if(typeof p==="string")texts.push(p)});
  Object.values(Q).forEach(q=>{[q.q,q.passage].concat(q.o||[]).forEach(t=>{if(t&&!TR.test(t))texts.push(t)})});
  const list={}, other={};let tokens=0;
  texts.forEach(t=>kwMarkup(t).forEach(p=>{
    if(p.type==="kw"){list[p.key]=(list[p.key]||0)+1;tokens++}
    else if(p.type==="kx"){tokens++;if(p.key.length>=6&&!/['’]/.test(p.key)&&!KW_BASIC.has(p.key)){other[p.key]=(other[p.key]||0)+1}}
    else if(p.type==="sig")tokens++;
  }));
  _corpus={list,other,texts:texts.length,tokens};
  return _corpus;
}
function kwCorpusHTML(){
  const c=kwCorpus();
  const topList=Object.keys(c.list).sort((a,b)=>c.list[b]-c.list[a]).slice(0,40);
  const topOther=Object.keys(c.other).filter(w=>c.other[w]>=4).sort((a,b)=>c.other[b]-c.other[a]).slice(0,40);
  const covered=Object.keys(c.list).length;
  return `<p class="st-note">Sitedeki <b>${c.texts}</b> metin parçası (okuma metinleri, soru kökleri, şıklar) tarandı. Listedeki ${KW_LIST.length} kelimenin <b>${covered}</b> tanesi bu metinlerde en az bir kez geçiyor.</p>
    <h4 class="kw-h">En çok geçen YDS kelimeleri</h4>
    <div class="kw-gloss">${topList.map(k=>`<button type="button" class="kw-gl ${isLearned(k)?"known":""}" data-kw="${esc(k)}"><b>${esc(k)}</b><span>${c.list[k]} kez · ${esc(KW_BY[k].tr)}</span></button>`).join("")}</div>
    <h4 class="kw-h">Listede olmayan ama metinlerde sık geçen kelimeler</h4>
    <p class="st-note">Bilmediğine dokun, tek tıkla defterine ekle; Türkçesi hazır gelir.</p>
    <div class="kw-gloss">${topOther.map(w=>`<button type="button" class="kw-gl kw-x" data-kx="${esc(w)}"><b>${esc(w)}</b><span>${c.other[w]} kez${SOZLUK[w]?" · "+esc(SOZLUK[w]):""}</span></button>`).join("")}</div>`;
}

/* ================= Kart çalışması ================= */
/* opts: {title, practice} — practice: öğrenilmiş kelimeleri tazeleme çalışması;
   bu modda yanlış bilmek kutu düşürmez, "öğrenildi" işareti korunur. */
function kwStartCards(only,opts={}){
  const {due,news}=kwQueue();
  const deck=only&&only.length?only.slice():due.concat(news);
  if(!deck.length){toast("Çalışılacak kelime yok");return}
  Object.assign(KW,{mode:"cards",deck,i:0,cur:null,ok:0,no:0,re:new Set(),t0:Date.now(),missed:[],
    nNew:news.length,practice:!!opts.practice,title:opts.title||"Bugünün kelimeleri",src:opts.src||""});
  render();window.scrollTo(0,0);kwAnsFocus();
}
function kwCardsView(){
  if(KW.i>=KW.deck.length)return kwCardsDone();
  const key=KW.deck[KW.i], e=entryOf(key), v=vOf(key);
  if(!e){KW.i++;return kwCardsView()}
  const isNew=!v||!v.last, total=KW.deck.length, c=KW.cur;
  if(e.own&&!(e.s&&e.s.length)&&typeof mwFetchSyn==="function"){const w=words.find(x=>x.id===e.id);if(w&&!w.sTried)mwFetchSyn(w).then(()=>{if(KW.mode==="cards"&&KW.deck[KW.i]===key&&KW.cur)render()})}
  const good=c&&(c.res!=="no"||c.fixed);
  return `<div class="runner kw-run">
    <div class="run-top">
      <button type="button" class="btn ghost sm" data-act="kw-exit">${svg(I.x,15)} Çık</button>
      <div class="run-title"><div class="eyebrow">${esc(KW.title||"Bugünün kelimeleri")} · anlamını yaz</div><b>${KW.i+1} / ${total}</b></div>
      <div class="run-time"><b>${KW.ok}</b>doğru</div>
    </div>
    <div class="kw-prog"><i style="width:${Math.round(KW.i/total*100)}%"></i></div>
    <article class="sheet kw-card">
      <div class="kw-card-top">${isNew?`<span class="chip">Yeni</span>`:`<span class="chip">Tekrar</span>`}
        ${KW.practice?`<span class="chip">Tazeleme</span>`:""}
        ${e.p?`<span class="chip">${POS_TR[e.p]}</span>`:""}${e.own?`<span class="chip">Kelimelerim</span>`:`<span class="kw-f" title="${FREQ_TR[e.f||1]}">${stars(e.f)}</span>`}</div>
      <div class="kw-card-w">${esc(e.w)}</div>
      <div class="mw-ans"><input type="text" id="kwAns" placeholder="Türkçesini yaz, Enter'a bas" autocomplete="off" ${c?`value="${esc(c.typed)}" disabled`:""}></div>
      ${c?`<div class="feedback ${good?"ok":"no"}" role="status"><b>${c.res==="ok"?"Doğru!":c.res==="near"?"Yakın, doğru sayıldı.":c.fixed?"Doğru sayıldı.":c.typed==="(bilmiyorum)"?"Bunu öğreneceksin.":"Yanlış."}</b>
          ${c.res==="no"&&!c.fixed&&c.typed!=="(bilmiyorum)"?`<p class="note">Anlamı başka kelimelerle doğru yazdıysan: <button type="button" class="btn sm" data-act="kw-fix">Aslında doğru yazmıştım</button></p>`:""}</div>
        <div class="kw-card-tr">${esc(e.tr)}</div>${kwDetail(e)}`
        :`<p class="kw-hint">Birden fazla anlam yazabilirsin; virgülle ayır. Bilmiyorsan “Bilmiyorum”a bas.</p>`}
    </article>
    <div class="run-nav kw-nav">
      <button type="button" class="btn ghost" data-act="kw-skip" ${c?"disabled":""}>Bilmiyorum</button>
      ${c?`<button type="button" class="btn primary" data-act="kw-cnext" id="kwNext">${KW.i===total-1?"Bitir":"Sonraki"} ${svg(I.arrow,16)}</button>`
        :`<button type="button" class="btn primary" data-act="kw-check">Kontrol et</button>`}
    </div>
  </div>`;
}
/* yazılan anlam kontrol edilir; yanlış yazılanlar kelimenin kaydına eklenir (Kelimelerim → "Yanlış yazdıkların") */
function kwCardCheck(skip){
  if(KW.cur||KW.i>=KW.deck.length)return;
  const key=KW.deck[KW.i], e=entryOf(key);if(!e)return;
  const typed=skip?"":((document.getElementById("kwAns")||{}).value||"").trim();
  if(!typed&&!skip){toast("Türkçesini yaz ya da “Bilmiyorum”a bas");return}
  const res=skip?"no":mwCheck(typed,e.tr), ok=res!=="no";
  KW.cur={typed:skip?"(bilmiyorum)":typed,res,fixed:false,requeued:false};
  kwMark(key,ok,(Date.now()-KW.t0)/1000);KW.t0=Date.now();
  if(ok)KW.ok++;
  else{
    KW.no++;if(!KW.missed.includes(key))KW.missed.push(key);
    const v=vocab[key];if(v){v.wr=(v.wr||[]).concat({d:todayISO(),t:KW.cur.typed}).slice(-6);v.wn=(v.wn||0)+1;save()}
    if(!KW.re.has(key)){KW.re.add(key);KW.deck.push(key);KW.cur.requeued=true} /* bilinemeyen kelime oturumun sonunda bir kez daha gelir */
  }
  render();const n=document.getElementById("kwNext");n&&n.focus({preventScroll:true});
}
function kwCardFix(){
  const c=KW.cur;if(!c||c.res!=="no"||c.fixed)return;
  const key=KW.deck[KW.i], v=vocab[key];
  c.fixed=true;KW.ok++;KW.no=Math.max(0,KW.no-1);KW.missed=KW.missed.filter(k=>k!==key);
  if(c.requeued){const j=KW.deck.lastIndexOf(key);if(j>KW.i)KW.deck.splice(j,1);KW.re.delete(key)}
  if(v){v.b=Math.min(6,Math.max(2,(v.b||1)+1));v.due=addDays(todayISO(),BOX_DAYS[v.b]);v.no=Math.max(0,(v.no||1)-1);v.ok=(v.ok||0)+1;
    if(v.wr&&v.wr.length)v.wr.pop();v.wn=Math.max(0,(v.wn||1)-1);save()}
  render();const n=document.getElementById("kwNext");n&&n.focus({preventScroll:true});
}
function kwCardNext(){if(!KW.cur)return;KW.i++;KW.cur=null;render();window.scrollTo(0,0);kwAnsFocus()}
const kwAnsFocus=()=>setTimeout(()=>{const i=document.getElementById("kwAns");if(i&&!i.disabled)i.focus()},60);
function kwCardsDone(){
  const miss=KW.missed.map(k=>({k,e:entryOf(k)})).filter(x=>x.e);
  return head(KW.title||"Bugünün kelimeleri","Bitti",`${KW.ok} kez doğru yazdın, ${KW.no} kez yanlış. Yanlışların yarın yeniden gelecek ve Kelimelerim sayfasındaki “Yanlış yazdıkların” bölümünde duruyor.`)
  +`<section class="card lift"><div class="row">
      <button type="button" class="btn primary" data-act="kw-quiz-session">Bu kelimelerle teste geç ${svg(I.arrow,16)}</button>
      <button type="button" class="btn ghost" data-act="kw-exit">Geri dön</button></div>
    ${miss.length?`<h4 class="kw-h">Yanlış yazdıkların</h4><div class="mw-flat">${miss.map(({k,e})=>{const v=vocab[k], last=v&&v.wr&&v.wr[v.wr.length-1];
      return `<div class="mw-row"><span></span><span class="mw-en">${esc(e.w)}</span><span class="mw-tr">${esc(e.tr)}</span><span class="mw-meta">${last?`<span class="pill no">sen: ${esc(last.t)}</span>`:""}</span><span></span></div>`}).join("")}</div>`:""}
  </section>`;
}

/* ================= Kelime testi (ÖSYM tarzı 5 şık) ================= */
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function kwPickOthers(e,n,ok){
  const bad=new Set([e.w].concat(e.s||[],e.a||[]).map(x=>x.toLowerCase()));
  const same=KW_LIST.filter(k=>k.w!==e.w&&k.p===e.p&&!bad.has(k.w)&&!(k.s||[]).includes(e.w)&&(!ok||ok(k)));
  return shuffle(same).slice(0,n);
}
function kwMakeQ(e,type){
  if(type==="syn"&&e.s&&e.s.length){
    const right=e.s[0], others=kwPickOthers(e,4,k=>k.w!==right);
    if(others.length<4)return null;
    return {type,w:e.w,q:`<b>${esc(e.w)}</b> kelimesine anlamca en yakın olan hangisidir?`,o:shuffle([right].concat(others.map(k=>k.w))),right};
  }
  if(type==="sen"&&e.ex){
    const forms=(e.w.includes(" ")?phraseForms(e.w):wordForms(e.w)).sort((a,b)=>b.length-a.length).map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
    const re=new RegExp(`\\b(${forms.join("|")})\\b`,"i"), m=e.ex.match(re);
    if(!m)return null;
    const others=kwPickOthers(e,4);if(others.length<4)return null;
    return {type,w:e.w,q:esc(e.ex.replace(re,"----")).replace("----",'<span class="blank"></span>'),o:shuffle([e.w].concat(others.map(k=>k.w))),right:e.w,tr:e.et};
  }
  if(type==="tr"){
    const others=kwPickOthers(e,4,k=>k.tr!==e.tr);if(others.length<4)return null;
    return {type,w:e.w,q:`<b>${esc(e.w)}</b> ne demektir?`,o:shuffle([e.tr].concat(others.map(k=>k.tr))),right:e.tr};
  }
  if(type==="rev"){
    const others=kwPickOthers(e,4);if(others.length<4)return null;
    return {type,w:e.w,q:`“${esc(e.tr)}” anlamına gelen kelime hangisidir?`,o:shuffle([e.w].concat(others.map(k=>k.w))),right:e.w};
  }
  return null;
}
function kwStartQuiz(){
  KW.practice=false;KW.title="";
  const t=todayISO();
  const seen=Object.keys(vocab).filter(k=>KW_BY[k]&&vocab[k].last);
  /* önce zorlandıkların ve yeni öğrendiklerin, sonra rastgele; az çalıştıysan çok sık çıkanlarla tamamlanır */
  const weak=shuffle(seen.filter(k=>vocab[k].b<=2)), rest=shuffle(seen.filter(k=>vocab[k].b>2));
  let pick=weak.slice(0,6).concat(rest).slice(0,KW_QUIZ);
  if(pick.length<KW_QUIZ)pick=pick.concat(shuffle(KW_LIST.filter(k=>k.f===3&&!pick.includes(k.w)).map(k=>k.w)).slice(0,KW_QUIZ-pick.length));
  const types=["sen","syn","tr","sen","rev","syn","sen","tr","syn","sen"];
  const qs=shuffle(pick).map((w,i)=>{const e=KW_BY[w];let q=null;
    for(const ty of [types[i%types.length],"sen","syn","tr","rev"]){q=kwMakeQ(e,ty);if(q)break}return q}).filter(Boolean);
  if(!qs.length){toast("Test hazırlanamadı");return}
  KW.mode="quiz";KW.quiz={qs,i:0,ans:Array(qs.length).fill(null),t0:Date.now(),day:t};
  render();window.scrollTo(0,0);
}
/* ---- çalışmanın ardından test: yalnız o çalışmadaki kelimeler sorulur, şıklar da o kelimelerden kurulur ----
   Böylece yanlış şıklar rastgele değil, aynı anda çalıştığın ve birbirine karışabilecek kelimeler olur.
   Çalışma 5 kelimeden azsa eksik şıklar önce daha önce çalıştığın kelimelerden, sonra listeden tamamlanır. */
function kwConflict(a,b){
  const lw=x=>String(x||"").toLowerCase();
  return lw(a.w)===lw(b.w)||lw(a.tr)===lw(b.tr)||(a.s||[]).map(lw).includes(lw(b.w))||(b.s||[]).map(lw).includes(lw(a.w));
}
function kwSessionQuiz(keys){
  const uniq=[...new Set(keys)];
  const E=uniq.map(k=>({k,e:entryOf(k)})).filter(x=>x.e&&x.e.tr&&x.e.tr!=="—");
  if(!E.length){kwStartQuiz();return}
  const inS=new Set(E.map(x=>x.k));
  /* yedek şık kaynağı: önce daha önce çalıştıkların, sonra listenin geri kalanı */
  const extra=Object.keys(vocab).filter(k=>vocab[k].last&&!inS.has(k)).map(k=>({k,e:entryOf(k),x:true})).filter(x=>x.e&&x.e.tr);
  const pool=(x,n,ok)=>{
    const fit=y=>y.k!==x.k&&!kwConflict(x.e,y.e)&&ok(y);
    let got=shuffle(E.filter(fit));
    if(got.length<n)got=got.concat(shuffle(extra.filter(fit).filter(y=>!y.e.p||!x.e.p||y.e.p===x.e.p)));
    if(got.length<n)got=got.concat(shuffle(KW_LIST.filter(k=>!inS.has(k.w)&&k.p===x.e.p).map(k=>({k:k.w,e:k,x:true})).filter(fit)));
    const seen=new Set(),out=[];for(const y of got){const key=y.k;if(seen.has(key))continue;seen.add(key);out.push(y);if(out.length===n)break}
    return out;
  };
  const uniqOpts=(right,list)=>{const o=[right],lo=new Set([String(right).toLowerCase()]);for(const v of list){const l=String(v).toLowerCase();if(!v||lo.has(l))continue;lo.add(l);o.push(v);if(o.length===5)break}return o};
  const make=(x,type)=>{
    const e=x.e;
    if(type==="sen"&&e.ex){
      const forms=(e.w.includes(" ")?phraseForms(e.w):wordForms(e.w)).sort((a,b)=>b.length-a.length).map(v=>v.replace(/[.*+?^${}()|[\]\\]/g,"\\const QTYPE_TR={"));
      const re=new RegExp(`\\b(${forms.join("|")})\\b`,"i");if(!re.test(e.ex))return null;
      const o=uniqOpts(e.w,pool(x,4,y=>!(y.e.s||[]).includes(e.w)).map(y=>y.e.w));if(o.length<3)return null;
      return {type,w:e.w,key:x.k,q:esc(e.ex.replace(re,"----")).replace("----",'<span class="blank"></span>'),o:shuffle(o),right:e.w};
    }
    if(type==="syn"&&e.s&&e.s.length){
      const right=e.s[0];
      /* yanlış şıklar: bu çalışmadaki öbür kelimelerin eş anlamlıları (yoksa kendileri) */
      const o=uniqOpts(right,pool(x,4,y=>!(e.s||[]).includes(y.e.w)).map(y=>(y.e.s&&y.e.s.find(s=>!(e.s||[]).includes(s)))||y.e.w));if(o.length<3)return null;
      return {type,w:e.w,key:x.k,q:`<b>${esc(e.w)}</b> kelimesine anlamca en yakın olan hangisidir?`,o:shuffle(o),right};
    }
    if(type==="tr"){
      const o=uniqOpts(e.tr,pool(x,4,y=>y.e.tr!==e.tr).map(y=>y.e.tr));if(o.length<3)return null;
      return {type,w:e.w,key:x.k,q:`<b>${esc(e.w)}</b> ne demektir?`,o:shuffle(o),right:e.tr};
    }
    if(type==="rev"){
      const o=uniqOpts(e.w,pool(x,4,()=>true).map(y=>y.e.w));if(o.length<3)return null;
      return {type,w:e.w,key:x.k,q:`“${esc(e.tr)}” anlamına gelen kelime hangisidir?`,o:shuffle(o),right:e.w};
    }
    return null;
  };
  /* az kelime varsa her kelime iki farklı soru tipiyle sorulur */
  const per=E.length<=5?2:1, qs=[];
  shuffle(E).forEach((x,i)=>{
    const order=x.e.own?(x.e.s&&x.e.s.length?["syn"].concat(shuffle(["tr","rev"])):shuffle(["tr","rev"])):[["sen","syn","tr","rev"][i%4],"sen","syn","rev","tr"];
    const used=new Set();
    for(const ty of order){if(used.size>=per)break;if(used.has(ty))continue;const q=make(x,ty);if(q){qs.push(q);used.add(ty)}}
  });
  if(!qs.length){toast("Test hazırlanamadı");return}
  KW.mode="quiz";KW.quiz={qs:shuffle(qs).slice(0,20),i:0,ans:[],t0:Date.now(),day:todayISO(),session:uniq};
  KW.quiz.ans=Array(KW.quiz.qs.length).fill(null);
  render();window.scrollTo(0,0);
}
const QTYPE_TR={sen:"Boşluğa uygun kelime",syn:"Eş anlamlı",tr:"Türkçe anlamı",rev:"Türkçeden İngilizceye"};
function kwQuizView(){
  const Z=KW.quiz;if(Z.i>=Z.qs.length)return kwQuizDone();
  const q=Z.qs[Z.i], k=Z.ans[Z.i], locked=k!==null, L="ABCDE", e=entryOf(q.key||q.w)||KW_BY[q.w];
  return `<div class="runner kw-run">
    <div class="run-top">
      <button type="button" class="btn ghost sm" data-act="kw-exit">${svg(I.x,15)} Çık</button>
      <div class="run-title"><div class="eyebrow">${Z.session?"Çalıştığın kelimelerle test":"Kelime testi"} · ${QTYPE_TR[q.type]}</div><b>Soru ${Z.i+1} / ${Z.qs.length}</b></div>
      <div class="run-time"><b>${Z.ans.filter((a,i)=>a!==null&&Z.qs[i].o[a]===Z.qs[i].right).length}</b>doğru</div>
    </div>
    <div class="kw-prog"><i style="width:${Math.round(Z.i/Z.qs.length*100)}%"></i></div>
    <article class="sheet">
      <div class="stem">${q.q}</div>
      <div class="opts" role="group" aria-label="Şıklar">${q.o.map((o,j)=>{
        const st=!locked?"":o===q.right?"ok":j===k?"no":"dim";
        return `<button type="button" class="opt ${st}" data-act="kw-opt" data-v="${j}" ${locked?"disabled":""}><span class="L">${L[j]}</span><span>${esc(o)}</span><span class="mark">${locked&&o===q.right?"Doğru":locked&&j===k?"Senin cevabın":""}</span></button>`}).join("")}</div>
      ${locked?`<div class="feedback ${q.o[k]===q.right?"ok":"no"}" role="status"><b>${q.o[k]===q.right?"Doğru.":`Yanlış. Doğru cevap: ${esc(q.right)}`}</b>
        <p><b>${esc(e.w)}</b> · ${esc(e.tr)}</p>${q.o[k]!==q.right?kwQuizWhy(q,q.o[k]):""}${kwDetail(e)}</div>`:""}
    </article>
    <div class="run-nav"><span class="kbd"><kbd>A</kbd>–<kbd>E</kbd> seç · <kbd>Enter</kbd> sonraki</span>
      <button type="button" class="btn primary" data-act="kw-next" ${locked?"":"disabled"} id="kwNext">${Z.i===Z.qs.length-1?"Sonucu gör":"Sonraki soru"} ${svg(I.arrow,16)}</button></div>
  </div>`;
}
/* kelime testinde yanlış seçilen şık: kelimeyse anlamı, Türkçe anlamsa hangi kelimenin anlamı olduğu */
function kwQuizWhy(q,o){
  const lo=String(o).toLowerCase();
  const byTr=KW_LIST.find(x=>x.tr===o)||words.map(w=>({w:w.en,tr:w.tr})).find(x=>x.tr===o);
  const tr=kwTrOf(lo)||(words.find(w=>w.en.toLowerCase()===lo)||{}).tr;
  const txt=byTr?`“${esc(o)}” aslında <b>${esc(byTr.w)}</b> kelimesinin anlamı.`:tr?`Seçtiğin <b>${esc(o)}</b> = ${esc(tr)}; bu yüzden olmuyor.`:"";
  return txt?`<p class="kw-on-why"><b>Seçtiğin şık neden olmuyor?</b> ${txt}</p>`:"";
}
function kwQuizAnswer(j){
  const Z=KW.quiz;if(!Z||Z.ans[Z.i]!==null)return;
  const q=Z.qs[Z.i];Z.ans[Z.i]=j;const ok=q.o[j]===q.right;
  kwMark(q.key||q.w,ok,(Date.now()-Z.t0)/1000);Z.t0=Date.now();
  render();const nb=document.getElementById("kwNext");nb&&nb.focus({preventScroll:true});
}
function kwQuizDone(){
  const Z=KW.quiz, ok=Z.qs.filter((q,i)=>q.o[Z.ans[i]]===q.right).length;
  const wrong=[...new Map(Z.qs.filter((q,i)=>q.o[Z.ans[i]]!==q.right).map(q=>[q.key||q.w,entryOf(q.key||q.w)||KW_BY[q.w]])).values()].filter(Boolean);
  return head("Kelime testi","Sonuç",`${Z.qs.length} sorudan <b>${ok}</b> doğru. Yanlış yaptığın kelimeler yarın kart çalışmasında yeniden gelecek.`)
  +`<section class="card lift"><div class="row">
      ${Z.session?`<button type="button" class="btn primary" data-act="kw-quiz-session">Aynı kelimelerle yeni test ${svg(I.redo,16)}</button>`:`<button type="button" class="btn primary" data-act="kw-quiz">Yeni kelime testi ${svg(I.redo,16)}</button>`}
      <button type="button" class="btn ghost" data-act="kw-exit">Geri dön</button></div>
    ${wrong.length?`<h4 class="kw-h">Yanlış yaptığın kelimeler</h4><div class="kw-gloss">${wrong.map(e=>`<button type="button" class="kw-gl" ${e.own?"":`data-kw="${esc(e.w)}"`}><b>${esc(e.w)}</b><span>${esc(e.tr)}</span></button>`).join("")}</div>`
      :`<div class="mt">${emptyState("Hepsi doğru","Bu kelimeleri iyi biliyorsun.")}</div>`}
  </section>`;
}

/* ================= Baloncuk ================= */
function kwPop(anchor,html){
  let p=document.getElementById("kwPop");
  if(!p){p=document.createElement("div");p.id="kwPop";p.className="kw-pop";p.setAttribute("role","dialog");document.body.appendChild(p)}
  p.dataset.pb="";
  p.innerHTML=`<button type="button" class="kw-pop-x" data-act="kw-pop-close" aria-label="Kapat">${svg(I.x,14)}</button>`+html;
  clearTimeout(p._t);p.hidden=false;p.classList.remove("show","out");p._y=scrollY;
  const r=anchor.getBoundingClientRect(), w=Math.min(360,innerWidth-24);
  p.style.width=w+"px";
  let left=Math.min(Math.max(12,r.left+r.width/2-w/2),innerWidth-w-12);
  p.style.left=left+"px";
  const h=p.offsetHeight, below=r.bottom+8+h<innerHeight;
  p.style.top=(below?r.bottom+8:Math.max(12,r.top-8-h))+"px";
  kwPopFit(p);
  requestAnimationFrame(()=>p.classList.add("show"));
}
/* kutu ekrandan taşarsa yukarı kayar; yine sığmazsa içinde kaydırılır */
function kwPopFit(p){
  p.style.maxHeight=(innerHeight-24)+"px";
  const top=parseFloat(p.style.top)||12, h=p.offsetHeight;
  if(top+h>innerHeight-12)p.style.top=Math.max(12,innerHeight-12-h)+"px";
}
/* kutu yumuşakça solarak kapanır */
function kwPopClose(){const p=document.getElementById("kwPop");if(!p||p.hidden)return;
  p.classList.remove("show");p.classList.add("out");clearTimeout(p._t);p._t=setTimeout(()=>{p.hidden=true;p.classList.remove("out")},450)}
/* sayfa kaydırılınca açık kutu yavaşça kaybolur (sabit durup metnin üstünde kalmasın) */
/* fare kutunun üstündeyken ya da parmak kutudayken kaydırma kutuyu kapatmaz */
window.addEventListener("scroll",()=>{const p=document.getElementById("kwPop");
  if(!p||p.hidden||p.classList.contains("out"))return;
  if(p.matches(":hover")||Date.now()-(p._touch||0)<1500){p._y=scrollY;return}
  if(Math.abs(scrollY-(p._y||0))>24)kwPopClose()},{passive:true});
document.addEventListener("touchstart",e=>{const p=e.target.closest&&e.target.closest("#kwPop");if(p)p._touch=Date.now()},{passive:true});
document.addEventListener("touchmove",e=>{const p=e.target.closest&&e.target.closest("#kwPop");if(p)p._touch=Date.now()},{passive:true});
function kwPopWord(anchor,key){
  const e=KW_BY[key];if(!e)return;const st=kwStatus(key);
  kwPop(anchor,`<div class="kw-pop-h"><b>${esc(e.w)}</b> <span class="muted">${POS_TR[e.p]||""}</span> <span class="kw-f">${stars(e.f)}</span></div>
    <div class="kw-card-tr sm">${esc(e.tr)}</div>${kwDetail(e)}
    <div class="kw-pop-act"><span class="muted">${STATUS_TR[st]}</span><button type="button" class="btn sm primary" data-act="kw-flag" data-v="${esc(key)}">Bugünün kelimelerine ekle</button></div>`);
}
function kwPopUnknown(anchor,w){
  const own=words.find(x=>x.en.toLowerCase()===w), tr=SOZLUK[w]||"";
  kwPop(anchor,`<div class="kw-pop-h"><b>${esc(w)}</b></div>
    ${own?`<p class="st-note">Kelimelerinde var: <b>${esc(own.tr||"—")}</b></p>`
      :`<div class="kw-card-tr sm" id="kwPopMean">${tr?esc(tr):`<span class="muted">Türkçesi getiriliyor…</span>`}</div>
      <p class="st-note">YDS listesinde yok. Bilmiyorsan Kelimelerim sayfana ekle; günlük tekrara girer.</p>
      <div class="kw-pop-form"><input type="text" id="kwPopTr" placeholder="Türkçesi" autocomplete="off" value="${esc(tr)}"><button type="button" class="btn sm primary" data-act="kw-add-own" data-v="${esc(w)}">Kelimelerime ekle</button></div>`}`);
  if(!own&&!tr) kwTranslate(w).then(t=>{const m=document.getElementById("kwPopMean"), i=document.getElementById("kwPopTr");
    if(m&&document.querySelector('#kwPop [data-v="'+CSS.escape(w)+'"]')){m.textContent=t||"Türkçesi bulunamadı; kendin yazabilirsin.";if(i&&!i.value&&t)i.value=t}});
}

/* ================= Çeviri =================
   1) Chrome'un kendi çevirisi (Translator API, cihazda çalışır, ücretsiz)  2) olmazsa MyMemory (ücretsiz, anahtarsız; günlük sınırı var)
   Çeviriler tarayıcıda saklanır; aynı cümle ikinci kez istenirse internete gidilmez. */
const TR_CACHE=LS.get("trcache",{});
let _trChrome=null;
async function kwChromeTr(){
  if(_trChrome!==null)return _trChrome;
  try{
    if(!("Translator" in self)){_trChrome=false;return false}
    const o={sourceLanguage:"en",targetLanguage:"tr"};
    if(await Translator.availability(o)==="unavailable"){_trChrome=false;return false}
    _trChrome=await Translator.create(o);
  }catch(e){_trChrome=false}
  return _trChrome;
}
async function kwTranslate(text){
  text=String(text).replace(/⟦\d+⟧/g,"____").replace(/[«‹⁅]\d+\|/g,"").replace(/[«»‹›⁅⁆]/g,"").replace(/\s+/g," ").trim();
  if(!text)return "";
  const key=text.toLowerCase();
  if(TR_CACHE[key])return TR_CACHE[key];
  let out="";
  const ch=await kwChromeTr();
  if(ch){try{out=await ch.translate(text)}catch(e){out=""}}
  if(!out){
    try{
      const r=await fetch("https://api.mymemory.translated.net/get?langpair=en|tr&q="+encodeURIComponent(text.slice(0,480)));
      const d=await r.json();
      const t=d&&d.responseData&&d.responseData.translatedText||"";
      if(d&&+d.responseStatus===200&&t&&!/MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(t))out=t;
    }catch(e){out=""}
  }
  if(out){TR_CACHE[key]=out;const ks=Object.keys(TR_CACHE);if(ks.length>1500)ks.slice(0,300).forEach(k=>delete TR_CACHE[k]);LS.set("trcache",TR_CACHE)}
  return out;
}
async function kwTranslateRes(){
  const r=KW.res;if(!r)return;
  const btn=document.getElementById("kwTransBtn"), list=document.querySelector(".kw-sents");
  if(r.trOn){r.trOn=false;if(list)list.classList.remove("tr-on");if(btn){btn.textContent="Türkçesini göster";btn.classList.add("primary")}return}
  r.trOn=true;if(list)list.classList.add("tr-on");
  if(btn){btn.textContent="Türkçesini gizle";btn.classList.remove("primary")}
  kwTranslateFill(r);
}
async function kwTranslateFill(r){
  r.tr=r.tr||[];let fail=0;
  for(let i=0;i<r.sents.length;i++){
    if(r.tr[i])continue;
    const el=document.getElementById("kwTr"+i);if(el)el.innerHTML=`<span class="muted">çevriliyor…</span>`;
    const t=await kwTranslate(r.sents[i].s);
    if(KW.res!==r)return; /* bu arada başka metne geçildi */
    r.tr[i]=t;if(!t)fail++;
    const e2=document.getElementById("kwTr"+i);if(e2)e2.textContent=t||"Bu cümle şu an çevrilemedi.";
  }
  if(fail)toast("Bazı cümleler çevrilemedi; internet bağlantını kontrol et ya da biraz sonra dene");
}
/* "zorlanıyorsun": son çalışmada bilemediğin (kutusu 1'e düşen) kelimeler */
const kwHardKeys=()=>Object.keys(vocab).filter(k=>vocab[k].last&&!k.startsWith("my:")&&KW_BY[k]&&kwStatus(k)==="hard")
  .sort((a,b)=>(vocab[b].wn||vocab[b].no||0)-(vocab[a].wn||vocab[a].no||0));
function kwPopHard(anchor){
  const ks=kwHardKeys();
  kwPop(anchor,`<div class="kw-pop-h"><b>Zorlandığın kelimeler</b></div>
    <p class="st-note">Son tekrarda bilemediğin kelimeler. Bir sonraki tekrarda doğru yazınca bu listeden çıkarlar.</p>
    <div class="kw-hardlist">${ks.map(k=>{const e=KW_BY[k], v=vocab[k], last=v.wr&&v.wr[v.wr.length-1];
      return `<div class="kw-hardrow"><b>${esc(e.w)}</b><span>${esc(e.tr)}</span><small>${v.no} kez bilemedin${last?` · son yazdığın: ${last.t==="(bilmiyorum)"?"bilmiyorum":"“"+esc(last.t)+"”"}`:""}</small></div>`}).join("")}</div>
    ${ks.length?`<div class="kw-pop-act"><span class="muted">${ks.length} kelime</span><button type="button" class="btn sm primary" data-act="kw-hard-study">Bunları şimdi çalış</button></div>`:""}`);
}
function kwPopSignal(anchor,kind){
  const k=SIGNAL_KIND[kind];
  kwPop(anchor,`<div class="kw-pop-h"><span class="kw-s k-${kind}">${esc(k.t)}</span></div><p class="st-note">${esc(k.d)}</p>
    <p class="kw-sig-list">${SIGNALS[kind].slice(0,16).map(esc).join(" · ")}</p>`);
}

/* ================= Olaylar ================= */
function kwRefreshList(){const el=document.getElementById("kwList");if(el)el.innerHTML=kwListBody()}
function kwRunAnalysis(){
  const ta=document.getElementById("kwText");KW.text=ta?ta.value:KW.text;
  if(KW.fill&&KW.fill.shown===KW.text){kwRefill(true);return}
  KW.fill=null; /* metin elle değiştirildiyse artık seçilen metin değil */
  if(!KW.text.trim()){toast("Önce bir paragraf yapıştır ya da seç");return}
  KW.res=kwAnalyze(KW.text);
  const el=document.getElementById("kwRes");if(el){el.classList.remove("same");el.innerHTML=kwResHTML(KW.res);el.scrollIntoView({behavior:"smooth",block:"start"})}
  else render();
}
document.addEventListener("click",e=>{
  const a=e.target.closest("[data-act]");
  const pop=document.getElementById("kwPop");
  if(pop&&!pop.hidden&&!e.target.closest("#kwPop")&&!e.target.closest("[data-kw],[data-kx],[data-ks],[data-kb]"))kwPopClose();
  if(!a){
    const kw=e.target.closest("[data-kw]"), kx=e.target.closest("[data-kx]"), ks=e.target.closest("[data-ks]"), kb=e.target.closest("[data-kb]");
    if(kb){e.preventDefault();kwPopBlank(kb,+kb.dataset.kb)}
    else if(kw){e.preventDefault();kwPopWord(kw,kw.dataset.kw)}
    else if(kx){kwPopUnknown(kx,kx.dataset.kx)}
    else if(ks){e.preventDefault();kwPopSignal(ks,ks.dataset.ks)}
    return;
  }
  const v=a.dataset.v;
  switch(a.dataset.act){
    case "kw-cards": kwStartCards(); break;
    case "kw-quiz": kwStartQuiz(); break;
    case "kw-quiz-session": kwSessionQuiz(KW.quiz&&KW.quiz.session&&KW.mode==="quiz"?KW.quiz.session:KW.deck); break;
    case "kw-exit": KW.mode=null;KW.quiz=null;KW.practice=false;KW.title="";render();window.scrollTo(0,0); break;
    case "kw-check": kwCardCheck(false); break;
    case "kw-skip": kwCardCheck(true); break;
    case "kw-fix": kwCardFix(); break;
    case "kw-cnext": kwCardNext(); break;
    case "kw-opt": kwQuizAnswer(+v); break;
    case "kw-next": if(KW.quiz&&KW.quiz.ans[KW.quiz.i]!==null){KW.quiz.i++;render();window.scrollTo(0,0)} break;
    case "kw-flag": kwFlag(v,"Kelime paneli");toast(`“${v}” Kelimelerim sayfana ve bugünün kelimelerine eklendi`);kwPopClose();if(!KW.mode)render(); break;
    case "kw-flag-all": {const ks=v.split("|");ks.forEach(x=>kwFlag(x,"Paragraf analizi"));toast(`${ks.length} kelime Kelimelerim sayfana ve bugünün kelimelerine eklendi`);
      const el=document.getElementById("kwRes");if(el&&KW.res){el.classList.add("same");el.innerHTML=kwResHTML(KW.res);const tl=document.querySelector(".kw-sents");if(KW.res.trOn&&tl)tl.classList.add("tr-on")}else render()} break;
    case "kw-pop-close": kwPopClose(); break;
    case "kw-analyze": kwRunAnalysis(); break;
    case "kw-trans": kwTranslateRes(); break;
    case "kw-hard": kwPopHard(a); break;
    case "kw-hard-study": {const ks=kwHardKeys();kwPopClose();if(ks.length)kwStartCards(ks)} break;
    case "para-week": kwOpenWeekPassage(); break;
    case "kw-bpick": {const i=+a.dataset.i, it=KW.fill&&KW.fill.items[i];if(!it||it.st)break;
      const q=Q[it.qid];it.pick=+v;it.st=+v===q.a?"ok":"no";kwRecord(q,+v);kwRefill(false);kwPopRefresh(i)} break;
    case "kw-reveal-all": if(KW.fill){KW.fill.items.forEach(it=>{if(!it.st)it.st="shown"});kwPopClose();kwRefill(false)} break;
    case "kw-clear": KW.text="";KW.res=null;KW.pid="";KW.fill=null;render(); break;
    case "kw-solve": if(KW.fill&&KW.fill.ids.length)startTest({title:"Paragraf analizi · metnin soruları",src:"para:"+KW.pid,ids:KW.fill.ids,back:"words"}); break;
    case "kw-add-own": {const tr=(document.getElementById("kwPopTr")||{}).value||"";
      const nw={id:Date.now(),en:v,tr:tr.trim(),learned:false,date:todayISO(),src:"Paragraf analizi"};words.push(nw);kwFlag(ownKey(nw));kwPopClose();
      toast("Kelimelerim sayfasına eklendi. Çalışmak için Kelime sayfasının en üstündeki “Başla” düğmesine bas");} break;
  }
});
let _kbHover=null;
document.addEventListener("mouseover",e=>{
  const kb=e.target.closest&&e.target.closest("[data-kb]");
  if(!kb||!matchMedia("(hover: hover)").matches)return;
  const p=document.getElementById("kwPop");if(p&&!p.hidden&&p.dataset.pb===kb.dataset.kb)return;
  clearTimeout(_kbHover);_kbHover=setTimeout(()=>{if(kb.matches(":hover"))kwPopBlank(kb,+kb.dataset.kb)},250);
});
document.addEventListener("input",e=>{
  if(e.target.id==="kwSearch"){KW.q=e.target.value;kwRefreshList()}
  else if(e.target.id==="kwText"){KW.text=e.target.value}
});
document.addEventListener("change",e=>{
  const t=e.target;
  if(t.id==="kwFilter"){KW.filter=t.value;kwRefreshList()}
  else if(t.id==="kwNew"){settings.kwNew=+t.value;save();render()}
  else if(t.id==="kwPass"){KW.pid=t.value;if(!t.value)return;KW.fill=kwFill(t.value);KW.res=null;kwRefill(true);return;
    const ta=document.getElementById("kwText");if(ta)ta.value=KW.text;kwRunAnalysis()}
});
/* kapalı başlık ilk açıldığında ağır içerik (harf listesi, site analizi) o an doldurulur */
document.addEventListener("toggle",e=>{
  const d=e.target;if(!d.open||!d.classList)return;
  if(d.classList.contains("kw-letter")){const box=d.querySelector(".kw-rows");if(box&&!box.innerHTML){const L=d.dataset.bkopen.slice(5);box.innerHTML=KW_LIST.filter(k=>k.w[0].toUpperCase()===L&&kwFilterMatch(k)).map(kwRow).join("")}}
  const lz=d.querySelector(":scope > .st-in > .kw-lazy");
  if(lz&&lz.dataset.kwlazy==="corpus"){lz.outerHTML=kwCorpusHTML()}
},true);
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){kwPopClose();return}
  if(e.key==="Enter"&&e.target&&e.target.id==="kwAns"){e.preventDefault();kwCardCheck(false);return}
  if((current!=="words"&&current!=="mywords")||!KW.mode||e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.target.matches&&e.target.matches("input,textarea,select"))return;
  const k=e.key.toLowerCase();
  if(KW.mode==="cards"){ /* kartta Enter: yazı kutusunda kontrol, sonra sonraki (kutu için aşağıdaki dinleyici) */
  }else if(KW.mode==="quiz"&&KW.quiz&&KW.quiz.i<KW.quiz.qs.length){
    const idx="abcde".indexOf(k);
    if(k.length===1&&idx>=0){kwQuizAnswer(idx);e.preventDefault()}
    else if(/^[1-5]$/.test(k)){kwQuizAnswer(+k-1);e.preventDefault()}
    else if(k==="enter"&&!e.target.matches("button")&&KW.quiz.ans[KW.quiz.i]!==null){KW.quiz.i++;render();e.preventDefault()}
  }
});


/* ================= Şık açıklamaları =================
   Yanlış seçilen şıkkın neden olmadığı ve diğer şıkların ne anlama geldiği: bağlaçsa işlevi + Türkçesi,
   fiil kalıbıysa zaman/yapı, kelimeyse Türkçesi. Sorunun açıklaması o şıktan söz ediyorsa o cümle de eklenir. */
function kwTrOf(text){
  const t=String(text||"").toLowerCase().trim();
  if(CONN_TR[t])return CONN_TR[t];
  if(KW_BY[t])return KW_BY[t].tr;
  const b=KW_FORM.get(t);if(b&&KW_BY[b])return KW_BY[b].tr;
  if(SOZLUK[t])return SOZLUK[t];
  return "";
}
const GRAM_RULES=[
  [/^had been \w+ing\b/,"Past perfect continuous: geçmişte bir andan önce süregelen eylem"],
  [/^had (?:not )?(?:been )?\w+/,"Past perfect (-mişti): geçmişteki başka bir olaydan önce olan eylem"],
  [/^would (?:not )?have\b/,"would have + V3: geçmişte gerçekleşmemiş durum (-ardı, -mış olurdu)"],
  [/^(?:could|might|may) (?:not )?have\b/,"could/might/may have + V3: geçmişe yönelik olasılık tahmini"],
  [/^must (?:not )?have\b/,"must have + V3: geçmişe yönelik güçlü çıkarım (-mış olmalı)"],
  [/^(?:should|ought to) (?:not )?have\b/,"should have + V3: geçmişte yapılması gerekip yapılmayan (-meliydi)"],
  [/^needn'?t have\b/,"needn't have + V3: gereksiz yere yapılmış eylem"],
  [/^will have been\b/,"Future perfect continuous"],
  [/^will have\b/,"Future perfect (-mış olacak): gelecekteki bir andan önce tamamlanacak"],
  [/^will be \w+ing\b/,"Future continuous (-iyor olacak)"],
  [/^(?:will|shall)\b/,"will: gelecek zaman / tahmin (-ecek)"],
  [/^(?:is|are|am) (?:going to)\b/,"be going to: plan/yakın gelecek"],
  [/^(?:has|have) been \w+ing\b/,"Present perfect continuous: geçmişten beri süren eylem"],
  [/^(?:has|have) (?:not )?been \w+(?:ed|en|wn)\b/,"Present perfect edilgen (… edilmiştir)"],
  [/^(?:has|have) (?:not )?\w+/,"Present perfect: geçmişte başlayıp etkisi bugüne uzanan"],
  [/^(?:is|are|am) being\b/,"Şimdiki zaman edilgen (… ediliyor)"],
  [/^(?:was|were) being\b/,"Geçmiş sürekli edilgen (… ediliyordu)"],
  [/^(?:is|are|am) \w+ing\b/,"Present continuous (-iyor)"],
  [/^(?:was|were) \w+ing\b/,"Past continuous (-iyordu)"],
  [/^(?:is|are|am|was|were|be|been) \w+(?:ed|en|wn)\b/,"Edilgen yapı (be + V3)"],
  [/^used to\b/,"used to: geçmişteki alışkanlık (-ardı)"],
  [/^(?:is|are|was|were) used to\b/,"be used to: -e alışkın olmak"],
  [/^(?:can|could)\b/,"can/could: yetenek ya da olasılık"],
  [/^(?:may|might)\b/,"may/might: olasılık"],
  [/^(?:must|have to|has to|had to)\b/,"zorunluluk"],
  [/^(?:should|ought to)\b/,"tavsiye / beklenti"],
  [/^to (?:have )?\w+/,"to + fiil (mastar)"],
  [/^\w+ing$/,"-ing (fiilimsi)"]
];
function kwOptKind(text){
  const t=String(text||"").toLowerCase().trim().replace(/[.,;:!?]+$/,"");
  if(!t)return null;
  if(KW_SIG.has(t)){const k=KW_SIG.get(t);return {tag:SIGNAL_KIND[k].t+" bildirir",tr:kwTrOf(t)}}
  if(CONN_TR[t])return {tag:"",tr:CONN_TR[t]};
  for(const [re,d] of GRAM_RULES)if(re.test(t))return {tag:d,tr:""};
  const ws=t.split(/\s+/);
  if(ws.length<=4){const tr=kwTrOf(t)||(ws.length>1?ws.map(kwTrOf).filter(Boolean).join(" + "):"");return tr?{tag:"",tr}:null}
  return null;
}
/* açıklamada bu şıktan söz eden cümle(ler) */
function kwExplMention(q,opt){
  if(!q.e)return "";
  const o=String(opt).toLowerCase().trim();if(o.length<2)return "";
  const sents=String(q.e).split(/(?<=[.!?])\s+/);
  return sents.filter(s=>{const l=s.toLowerCase();return l.includes("“"+o+"”")||l.includes('"'+o+'"')||l.includes("'"+o+"'")}).join(" ");
}
function kwOptLine(q,j,chosen){
  const o=q.o[j], k=kwOptKind(o), m=kwExplMention(q,o);
  const desc=k?[k.tag,k.tr?`Türkçesi: ${k.tr}`:""].filter(Boolean).join(" · "):"";
  return `<li class="${j===q.a?"ok":j===chosen?"no":""}"><b>${esc(o)}</b>${j===q.a?` <span class="pill ok">doğru</span>`:j===chosen?` <span class="pill no">senin seçtiğin</span>`:""}
    ${desc?`<span class="kw-on-d">${esc(desc)}</span>`:""}${m&&j!==q.a?`<span class="kw-on-m">${esc(m)}</span>`:""}</li>`;
}
/* q: soru, chosen: seçilen şık, idx: gösterilecek şıklar (vars. hepsi) */
function kwOptNotes(q,chosen,idx,noList){
  if(!q||!Array.isArray(q.o))return "";
  const ids=(idx||q.o.map((x,j)=>j));
  const wrong=chosen!=null&&chosen!==q.a;
  let head="";
  if(wrong){
    const kc=kwOptKind(q.o[chosen]), ka=kwOptKind(q.o[q.a]), m=kwExplMention(q,q.o[chosen]);
    const why=m?esc(m)
      :kc&&ka&&kc.tag&&ka.tag&&kc.tag!==ka.tag?`“${esc(q.o[chosen])}” ${esc(kc.tag.toLowerCase())}${kc.tr?` (${esc(kc.tr)})`:""}; bu boşluk ise ${esc(ka.tag.toLowerCase())} istiyor: “${esc(q.o[q.a])}”${ka.tr?` (${esc(ka.tr)})`:""}.`
      :kc&&kc.tr?`“${esc(q.o[chosen])}” = ${esc(kc.tr)}${kc.tag?` · ${esc(kc.tag)}`:""}. Cümlenin anlamına uymuyor; doğrusu “${esc(q.o[q.a])}”${ka&&ka.tr?` (${esc(ka.tr)})`:""}.`
      :kc&&kc.tag?`“${esc(q.o[chosen])}”: ${esc(kc.tag)}. Doğrusu “${esc(q.o[q.a])}”${ka&&ka.tag?`: ${esc(ka.tag)}`:""}.`:"";
    if(why)head=`<p class="kw-on-why"><b>Seçtiğin şık neden olmuyor?</b> ${why}</p>`;
  }
  if(noList)return head;
  const lines=ids.map(j=>kwOptLine(q,j,chosen)).join("");
  return `${head}<details class="kw-on"${wrong?" open":""}><summary>Şıkların anlamı</summary><ul>${lines}</ul></details>`;
}

/* ================= Panel parçaları ================= */
/* üstteki bilgi kutusu: bugün öğrenilen kelime sayısı (kutu 4'e ulaşan ya da "öğrendim" işaretlenen) */
function kwTodayTile(){
  const t=todayISO(), learned=new Set();
  Object.keys(vocab).forEach(k=>{if(vocab[k].learnedOn===t)learned.add(k)});
  words.forEach(w=>{if(w.learnedOn===t)learned.add(ownKey(w))});
  const studied=Object.keys(vocab).filter(k=>vocab[k].last===t).length, n=learned.size;
  return `<div><div class="k">Bugün öğrendiğin kelime</div>${n?`<button type="button" class="v" data-act="go" data-v="mywords">${n}</button>`:`<div class="v">0</div>`}
    <div class="m">${studied?`Bugün ${studied} kelime çalıştın`:"Kelime sayfasında “Başla” ile çalış"}</div></div>`;
}
/* hafta kartındaki paragraf satırı */
function kwWeekPanel(){
  const tw=kwTargetWeek(), ids=kwWeekPassages(tw), done=ids.filter(kwPassDone).length;
  if(!ids.length)return "";
  return `<dt>Paragraf</dt><dd>${tw===currentWeek()?"Bu haftanın konusuna uygun":`Hafta ${tw} konusuna uygun`} ${ids.length} metin · ${done} tanesini çözdün</dd>`;
}
