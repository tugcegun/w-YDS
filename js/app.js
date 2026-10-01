"use strict";

/* ================= Storage ================= */
const LS={
  get(k,f){try{const v=localStorage.getItem("twyds_"+k);return v?JSON.parse(v):f}catch(e){return f}},
  set(k,v){try{localStorage.setItem("twyds_"+k,JSON.stringify(v))}catch(e){}}
};
const pad2=n=>String(n).padStart(2,"0");
const isoOf=d=>`${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`;
const todayISO=()=>isoOf(new Date());
function fmtDate(iso,short){ if(!iso) return "—"; const d=new Date(iso+"T00:00");
  return d.toLocaleDateString("tr-TR",short?{day:"numeric",month:"short"}:{day:"numeric",month:"long",year:"numeric"}); }
const mmss=s=>{s=Math.max(0,Math.round(s));return `${Math.floor(s/60)}:${pad2(s%60)}`};
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

const defaultSettings=()=>({name:"",siteName:"",hoursPerDay:3,targetScore:75,examDate:""});
let mode="local"; /* local: kayıtlar bu tarayıcıda · user: Google hesabına bağlı Firestore */
let settings=Object.assign(defaultSettings(),LS.get("settings",{}));
let daily=LS.get("daily",{}), weeks=LS.get("weeks",{}), words=LS.get("words",[]), notes=LS.get("notes",[]);
let dates=LS.get("dates",[]);   /* önemli tarihler: sınav, başvuru, sonuç… */
let answered=LS.get("answered",{});
let vocab=LS.get("vocab",{});   /* kelime paneli: aralıklı tekrar ilerlemesi (js/kelime.js) */
function mainObj(){const u=Cloud.state.user;
  return {settings,daily,weeks,words,notes,dates,answered,vocab,profile:u?{name:u.displayName||"",email:u.email||""}:null}}
function applyMain(m){settings=Object.assign(defaultSettings(),m.settings||{});daily=m.daily||{};weeks=m.weeks||{};
  words=m.words||[];notes=m.notes||[];dates=m.dates||[];answered=m.answered||{};vocab=m.vocab||{}}
function save(){
  if(mode==="user"){Cloud.saveMain(mainObj());return}
  LS.set("settings",settings);LS.set("daily",daily);LS.set("weeks",weeks);LS.set("words",words);LS.set("notes",notes);LS.set("dates",dates);LS.set("answered",answered);LS.set("vocab",vocab)}

/* Yanlış veritabanı. Hesapsız: IndexedDB (w-yds) + localStorage yansısı · Hesaplı: Firestore (js/cloud.js) */
const STORES=["mistakes","results","custom","book"];
const mem={mistakes:{},results:{},custom:{},book:{}};
let idb=null;
/* IndexedDB takılırsa 3 sn sonra localStorage yansısıyla devam edilir; site açılışta beklemede kalmaz */
function idbOpen(){return new Promise(res=>{try{
  setTimeout(()=>res(null),3000);
  const r=indexedDB.open("w-yds",2);
  r.onupgradeneeded=()=>{const d=r.result;STORES.forEach(s=>{if(!d.objectStoreNames.contains(s))d.createObjectStore(s,{keyPath:"id"})})};
  r.onsuccess=()=>res(r.result); r.onerror=()=>res(null); r.onblocked=()=>res(null);
}catch(e){res(null)}})}
function idbAll(s){return new Promise(res=>{try{setTimeout(()=>res([]),3000);const q=idb.transaction(s).objectStore(s).getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>res([])}catch(e){res([])}})}
async function loadDB(){
  idb=await idbOpen();
  for(const s of STORES){
    let rows=idb?await idbAll(s):[];
    if(!rows.length) rows=Object.values(LS.get("db_"+s,{}));
    rows.forEach(r=>mem[s][r.id]=r);
    if(idb&&rows.length) rows.forEach(r=>{try{idb.transaction(s,"readwrite").objectStore(s).put(r)}catch(e){}});
  }
}
function dbPut(s,row){mem[s][row.id]=row;if(mode==="user"){Cloud.put(s,row);return}
  if(idb){try{idb.transaction(s,"readwrite").objectStore(s).put(row)}catch(e){}}LS.set("db_"+s,mem[s])}
function dbDel(s,id){delete mem[s][id];if(mode==="user"){Cloud.del(s,id);return}
  if(idb){try{idb.transaction(s,"readwrite").objectStore(s).delete(id)}catch(e){}}LS.set("db_"+s,mem[s])}
function dbClear(s){mem[s]={};if(mode==="user"){Cloud.prune(s,id=>!!mem[s][id]);return}
  if(idb){try{idb.transaction(s,"readwrite").objectStore(s).clear()}catch(e){}}LS.set("db_"+s,{})}

/* ================= Content index ================= */
const PLAN=[
  {w:1,short:"Zamanlar, modallar, kelime",gr:"Tenses, Modals, Passive Voice & Causatives",q:"Kelime soruları (1–6) & edatlar",v:"Günde 20 akademik fiil/sıfat; 2 kısa makale",topics:["tenses","modals","passive","vocab","prep"]},
  {w:2,short:"Bağlaçlar",gr:"Conjunctions, transitions & adverbial clauses",q:"Dilbilgisi, edat & bağlaç (7–16)",v:"Zıtlık ve sebep-sonuç bağlaçları (whereas, notwithstanding, hence)",topics:["conj"]},
  {w:3,short:"Cloze test",gr:"Relative & noun clauses, kısaltmalar",q:"Cloze test (17–26)",v:"Eşdizimler (collocations), phrasal verbs, edat öbekleri",topics:["clauses"]},
  {w:4,short:"Cümle tamamlama",gr:"Conditionals, wish, inversion & karşılaştırmalar",q:"Cümle tamamlama (27–36)",v:"Eksik cümle parçaları ve paralel yapılar",topics:["cond","compl"]},
  {w:5,short:"Çeviri",gr:"Genel dilbilgisi tekrarı & hata analizi",q:"Çeviri: EN→TR, TR→EN (37–42)",v:"Özne–yüklem iskeletini hızlı bulma",topics:["compl"]},
  {w:6,short:"Paragraf",gr:"Hızlı okuma & skimming",q:"Paragraf soruları (43–62)",v:"Haftada 5 uzun metin: ana fikir, çıkarım, yazarın tutumu",topics:["reading"]},
  {w:7,short:"Diyalog, restatement",gr:"Anlamsal bütünlük & bağlantı ifadeleri",q:"Diyalog (63–67) & yakın anlam (68–71)",v:"Eş anlamlılar, yeniden ifade kalıpları",topics:["reading"]},
  {w:8,short:"Tamamlama, akış",gr:"Hızlı tekrar & deneme süreci",q:"Paragraf tamamlama (72–76) & akışı bozan cümle (77–80)",v:"Süreli tam denemeler",topics:["reading"]},
];
const TOPIC={}, Q={}, SUB_TOPIC={}, SUBS_OF={};
TOPIC_BANK.sort((a,b)=>a.week-b.week);
TOPIC_BANK.forEach(t=>{TOPIC[t.id]=t;SUBS_OF[t.id]=[];
  t.qs.forEach(q=>{Q[q.id]=Object.assign({},q,{src:"topic:"+t.id});
    if(!SUB_TOPIC[q.sub])SUB_TOPIC[q.sub]=t.id;
    if(!SUBS_OF[t.id].includes(q.sub))SUBS_OF[t.id].push(q.sub);});});
ARCHIVE.sort((a,b)=>a.week-b.week).forEach(w=>w.qs.forEach(q=>{Q[q.id]=Object.assign({},q,{src:"week:"+w.week})}));
const PRAC_OF={};
PRACTICE.forEach(q=>{Q[q.id]=Object.assign({},q,{src:"personal"});(PRAC_OF[q.sub]=PRAC_OF[q.sub]||[]).push(q.id)});
/* Ekstra havuz (js/data/ekstra-*.js): tekrar testi 1-3'ün içeriği değişmesin diye ayrı tutulur, 4. testten itibaren girer */
const EXTRA_OF={};
EKSTRA.forEach(q=>{Q[q.id]=Object.assign({},q,{src:"personal"});(EXTRA_OF[q.sub]=EXTRA_OF[q.sub]||[]).push(q.id)});
const bookQ=id=>{const b=mem.book[id];return b&&b.kind==="q"?b:null};
const qById=id=>Q[id]||mem.custom[id]||bookQ(id);
const weekQs=w=>{const a=ARCHIVE.find(x=>x.week===w);return a?a.qs.map(q=>Q[q.id]):[]};
const customQs=w=>Object.values(mem.custom).filter(c=>c.week===w).sort((a,b)=>a.created-b.created);
/* Akıllı kitaptaki kendi başlıkları "my:Başlık" diye saklanır */
const subTitle=s=>s==="kelime"?"Kelime çalışması":(LESSONS[s]&&LESSONS[s].t)||(String(s).startsWith("my:")?String(s).slice(3):s);
function srcLabel(src){ if(!src) return "";
  if(src.startsWith("topic:")){const t=TOPIC[src.slice(6)];return t?t.n:"Konu testi"}
  if(src.startsWith("week:")) return `Hafta ${src.slice(5)} soruları`;
  if(src==="retry") return "Yanlış tekrarı";
  if(src==="personal") return "Kişisel test";
  if(src==="book") return "Akıllı kitabım";
  if(src.startsWith("review:")) return "Kitabımdan tekrar testi";
  if(src.startsWith("exam:")){const t=TOPIC[src.split(":")[1]];return (t?t.n:"Konu")+" · konu sınavı"}
  if(src.startsWith("rev:")) return "Tekrar testi · "+subTitle(src.split(":")[1]);
  if(src.startsWith("mini:")) return "Mini test · "+subTitle(src.split(":")[1]);
  if(src.startsWith("para:")) return "Paragraf analizi";
  if(src.startsWith("wrong:")) return "Yanlış testi · "+subTitle(src.slice(6));
  return src; }
const passageOf=q=>q.passage||(q.pid&&PASSAGES[q.pid])||"";

/* ================= Icons ================= */
const I={
  home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  cal:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/>',
  mark:'<path d="M9 12l2 2 4-4"/><path d="M5 3h14v18l-7-4-7 4z"/>',
  words:'<path d="M4 7V5h16v2"/><path d="M9 20h6M12 5v15"/>',
  lib:'<rect x="3" y="4" width="6" height="16"/><path d="M13 5h8M13 10h8M13 15h8M13 20h5"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  redo:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  shelf:'<path d="M12 7v14"/><path d="M3 18V5a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3 3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a2 2 0 0 0-2 2 2 2 0 0 0-2-2H4a1 1 0 0 1-1-1Z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  day:'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><path d="M8 13h2v2H8z"/>'
};
const svg=(p,w=18)=>`<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;

/* ================= Router ================= */
const PAGES=[
  {id:"panel",label:"Panel",short:"Panel",ic:I.home},
  {id:"calendar",label:"Takvim",short:"Takvim",ic:I.day},
  {id:"topics",label:"Konular & Testler",short:"Konular",ic:I.book},
  {id:"review",label:"Tekrar",short:"Tekrar",ic:I.redo},
  {id:"weekly",label:"Haftalık Çıkmış Sorular",short:"Haftalık",ic:I.cal},
  {id:"mistakes",label:"Yanlışlarım",short:"Yanlışlar",ic:I.mark},
  {id:"personal",label:"Kişisel Test",short:"Kişisel",ic:I.target},
  {id:"book",label:"Akıllı Kitabım",short:"Kitabım",ic:I.shelf},
  {id:"words",label:"Kelime",short:"Kelime",ic:I.words},
  {id:"mywords",label:"Kelimelerim",short:"Kelimelerim",ic:I.lib},
];
let current="panel", curTopic=null, curWeek=null, T=null, tick=null;
const MF={status:"open",src:"all"};
const CAL={y:null,m:null,sel:null,form:false};
const BK={kind:"all",sub:"all",form:null,edit:null,open:new Set()};
function navOwner(){
  if(current==="topic") return "topics";
  if(current==="test"||current==="result"){const s=T&&T.src||"";return s.startsWith("para:")?"words":s.startsWith("topic:")?"topics":s.startsWith("week:")?"weekly":s==="personal"?"personal":s==="book"||s.startsWith("review:")?"book":"mistakes"}
  return current;
}
function openCount(){return Object.values(mem.mistakes).filter(m=>m.status==="open"&&qById(m.id)).length}
function buildNav(){
  const own=navOwner(), oc=openCount();
  document.getElementById("nav").innerHTML=PAGES.map(p=>`<button type="button" data-act="go" data-v="${p.id}" class="${p.id===own?"on":""}" ${p.id===own?'aria-current="page"':""}>
    ${svg(p.ic)}<span class="long">${p.label}</span><span class="short">${p.short}</span>${p.id==="mistakes"&&oc?`<span class="count">${oc}</span>`:""}</button>`).join("");
  const d=daysToExam();
  document.getElementById("countdown").innerHTML=d===null
    ?`Sınav tarihini <button type="button" data-act="go" data-v="settings" style="border:0;background:none;color:inherit;text-decoration:underline;padding:0">ayarlardan</button> gir.`
    :d>=0?`<b>${d} gün</b>sınava kaldı`:`Sınav tarihi geçti.`;
  document.getElementById("themeLbl").textContent=isDark()?"Açık":"Koyu";
  const name=siteName(); document.title=name; document.getElementById("brandName").innerHTML=brandHTML(name);
  const u=Cloud.state.user, acc=document.getElementById("account");
  acc.innerHTML=mode==="user"&&u
    ?`<div class="acct">${u.photoURL?`<img src="${esc(u.photoURL)}" alt="" referrerpolicy="no-referrer">`:`<span class="ph">${esc((firstName(u.displayName)||"?").charAt(0))}</span>`}
      <div class="who"><b>${esc(u.displayName||"Hesabım")}</b><small>${esc(u.email||"")}</small></div>
      <button type="button" data-act="signout">Çıkış</button></div>`
    :Cloud.state.available?`<button type="button" class="rail-signin" data-act="signin">${GLOGO}<span>Google ile giriş yap</span></button>`:"";
  acc.hidden=!acc.innerHTML;
}
function go(id){ if(current==="test"&&id!=="test"&&id!=="result") stopTick();
  if((id==="words"||id==="mywords")&&current!==id&&typeof KW!=="undefined"){KW.mode=null;KW.quiz=null}
  current=id; render(); window.scrollTo(0,0); }
function render(){
  const V={panel:vPanel,topics:vTopics,topic:vTopic,review:vReview,weekly:vWeekly,test:vTest,result:vResult,mistakes:vMistakes,calendar:vCalendar,personal:vPersonal,book:vBook,words:vWords,mywords:()=>vMyWords(),settings:vSettings};
  const main=document.getElementById("main");
  /* giriş yapmadan kullanılırken her sayfanın üstünde uyarı: kayıtlar yalnızca bu cihazda */
  /* aynı sayfa yeniden çizilince (kelime ekleme, işaretleme…) giriş efekti oynamaz; efekt yalnız sayfa değişince */
  const viewKey=current+"|"+(typeof KW!=="undefined"&&KW.mode||"");
  main.classList.toggle("same",viewKey===render._last);render._last=viewKey;
  main.innerHTML=(mode==="local"&&Cloud.state.available&&current!=="test"?`<div class="guest-bar"><span><b>Giriş yapmadın.</b> Kayıtların yalnızca bu cihazda duruyor; başka cihazdaki yanlışların ve kitabın burada görünmez.</span><button type="button" class="btn sm" data-act="signin">Google ile giriş yap</button></div>`:"")+(V[current]||vPanel)();
  buildNav();
  if(current==="test"&&T){renderTestBody();startTick()}
  if(current==="panel") updateDaySummary();
}
function head(eyebrow,title,desc,right=""){
  return `<header class="head"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1>${desc?`<p>${desc}</p>`:""}</div>${right?`<div class="row">${right}</div>`:""}</header>`;
}
function toast(m){const t=document.getElementById("toast");t.textContent=m;t.classList.add("show");clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove("show"),Math.max(2200,String(m).length*60))}
function emptyState(t,s,btn=""){return `<div class="empty"><h4>${t}</h4><div>${s}</div>${btn?`<div class="mt">${btn}</div>`:""}</div>`}

/* ================= Helpers ================= */
function daysToExam(){
  const iso=settings.examDate||(datesSorted().find(d=>d.kind==="sinav"&&daysTo(d.date)>=0)||{}).date;
  if(!iso)return null;
  return Math.ceil((new Date(iso+"T00:00")-new Date(todayISO()+"T00:00"))/864e5)}
const currentWeek=()=>{for(const p of PLAN) if(!weeks[p.w]) return p.w; return 8};
const resultsOf=src=>Object.values(mem.results).filter(r=>r.src===src).sort((a,b)=>b.ts-a.ts);
const pct=r=>Math.round(r.correct/r.total*100);
function bestOf(src){const rs=resultsOf(src);return rs.length?Math.max(...rs.map(pct)):null}
const tone=p=>p>=settings.targetScore?"ok":p>=50?"plain":"no";
function fmtStem(s){return esc(s).replace(/-{4,}/g,'<span class="blank" aria-label="boşluk"></span>').replace(/\n/g,"<br>")}
function fmtPassage(p,blank){
  return esc(p).replace(/\((\d+)\)\s*-{4,}/g,(m,n)=>`<span class="pb ${+n===blank?"on":""}">(${n})</span><span class="blank"></span>`)
    .replace(/-{4,}/g,'<span class="blank"></span>').replace(/\n/g,"<br>");
}

/* ================= Panel ================= */
function vPanel(){
  const d=daysToExam(), cw=currentWeek(), P=PLAN[cw-1];
  const results=Object.values(mem.results).sort((a,b)=>b.ts-a.ts);
  const last=results.slice(0,10), avg=last.length?Math.round(last.reduce((s,r)=>s+pct(r),0)/last.length):null;
  const oc=openCount();
  /* bugünün süresi kendiliğinden kaydedilenden (takvimdeki gibi) */
  const today=dayInfo(todayISO()), mins=Math.round(today.secs/60), goalMin=Math.round((+settings.hoursPerDay||0)*60);
  const tps=P.topics.filter(id=>TOPIC[id]);
  return head(fmtDate(todayISO()),settings.name?`Merhaba ${esc(settings.name)}`:"Merhaba",
    `Hedefin <b>${settings.targetScore} puan</b>${d!==null&&d>=0?` · sınava <b>${d} gün</b> var`:""}. Bu hafta: <b>${esc(P.q)}</b>.`)
  +`<section class="strip kw-strip4" aria-label="Özet">
      <div><div class="k">Bugün</div><div class="v">${today.secs?durHTML(today.secs):"0<small>dk</small>"}</div><div class="m">${today.q} soru · ${goalMin?(mins>=goalMin?"günlük hedef tamam":"hedefe "+durTxt((goalMin-mins)*60)+" kaldı"):"hedef girilmedi"}</div></div>
      ${typeof kwTodayTile==="function"?kwTodayTile():""}
      <div><div class="k">Test başarısı</div><div class="v">${avg===null?"—":"%"+avg}</div><div class="m">${last.length?`Son ${last.length} testin ortalaması`:"Henüz test çözülmedi"}</div></div>
      <div><div class="k">Açık yanlış</div>${oc?`<button type="button" class="v" data-act="go" data-v="mistakes">${oc}</button>`:`<div class="v">0</div>`}<div class="m">${oc?"Konu anlatımlarıyla tekrar et":"Yanlış defterin temiz"}</div></div>
    </section>

    <section class="card wide-week mt">
      <div class="wn-top">
        <div class="wn-info">
          <div class="eyebrow">Hafta ${cw} / 8</div>
          <h3>${esc(P.gr)}</h3>
          <dl><dt>Soru tipi</dt><dd>${esc(P.q)}</dd>${typeof kwWeekPanel==="function"?kwWeekPanel():""}</dl>
        </div>
        <div class="wn-act">
          <button type="button" class="btn primary" data-act="test-week" data-v="${cw}">Hafta ${cw} sorularını çöz ${svg(I.arrow,16)}</button>
          <button type="button" class="btn" data-act="para-week">Bu haftanın paragrafı</button>
          <label class="wn-done"><input type="checkbox" data-wk="${cw}" id="wk-now" ${weeks[cw]?"checked":""}> Haftayı bitirdim</label>
        </div>
      </div>
      <div class="wn-topics" style="--n:${tps.length||1}">${tps.map(id=>{const t=TOPIC[id], b=bestOf("topic:"+id);
        const open=Object.values(mem.mistakes).filter(m=>m.status==="open"&&SUB_TOPIC[m.sub]===id).length;
        return `<button type="button" class="wn-t" data-act="topic" data-v="${id}"><b>${esc(t.n)}</b>
          <span>${b===null?"Çözülmedi":"En iyi %"+b}${open?` · ${open} açık yanlış`:""}</span></button>`}).join("")}</div>
    </section>

    <section class="mt">
      <div class="row between" style="margin:26px 0 12px"><h3 style="font-size:21px">8 haftalık plan</h3><span class="muted" style="font-size:13.5px">${Object.values(weeks).filter(Boolean).length} / 8 hafta tamamlandı</span></div>
      <div class="weeks">${PLAN.map(p=>`<label class="wtile ${weeks[p.w]?"done":""} ${p.w===cw?"cur":""}" for="wk-${p.w}">
        <input type="checkbox" id="wk-${p.w}" data-wk="${p.w}" ${weeks[p.w]?"checked":""}>
        <span class="wn">Hafta ${p.w}</span><span class="wt">${p.short}</span></label>`).join("")}</div>
    </section>

    <div class="grid g2 pair" style="margin-top:22px">
      <section class="card"><div class="row between"><h3>Çalışma süren</h3><button type="button" class="lnk" data-act="go" data-v="calendar">Takvim</button></div><p class="sub">Son 14 gün · kesik çizgi günlük hedef</p>${hoursChart()}</section>
      <section class="card"><div class="row between"><h3>Son testler</h3>${results.length>4?`<button type="button" class="lnk" data-act="go" data-v="calendar">Tümü</button>`:""}</div><p class="sub">En son çözdüğün 4 test</p>
        ${results.length?`<ul class="rlist">${results.slice(0,4).map(r=>`<li><div class="rt-t"><b>${esc(r.title)}</b><span>${fmtDate(r.date,true)} · ${r.correct}/${r.total} doğru · ${mmss(r.secs)}</span></div><span class="pill ${tone(pct(r))}">%${pct(r)}</span></li>`).join("")}</ul>`
          :emptyState("Henüz test yok","Konular sayfasından ilk 20 soruluk testini çöz.",`<button type="button" class="btn sm primary" data-act="go" data-v="topics">Konulara git</button>`)}
      </section>
    </div>`;
}
function stepField(lbl,key,val,step){
  return `<div><label class="f" for="st-${key}">${lbl}</label>
    <div class="stepper"><button type="button" data-act="step" data-k="${key}" data-d="${-step}" aria-label="Azalt">−</button>
    <input type="number" id="st-${key}" min="0" step="${step}" value="${val}" data-val="${key}"><button type="button" data-act="step" data-k="${key}" data-d="${step}" aria-label="Artır">+</button></div></div>`;
}
function updateDaySummary(){
  const el=document.getElementById("daySummary"); if(!el) return;
  const g={};document.querySelectorAll("[data-val]").forEach(i=>g[i.dataset.val]=+i.value||0);
  el.innerHTML=g.questions?`Kitap doğruluğu <b>%${Math.round(g.correct/g.questions*100)}</b>`:"";
  const wk=document.getElementById("wk-now"); if(wk) wk.checked=!!weeks[currentWeek()];
}
function hoursChart(){
  const data=[], byDay=resultsByDay();const t=new Date(todayISO()+"T00:00");
  for(let i=13;i>=0;i--){const d=new Date(t);d.setDate(t.getDate()-i);const iso=isoOf(d);const inf=dayInfo(iso,byDay);data.push({d,iso,v:Math.round(Math.max(inf.secs/3600,+((daily[iso]||{}).hours)||0)*10)/10})}
  const goal=+settings.hoursPerDay||0, W=520,H=230,L=28,R=8,Tp=12,B=24;
  const max=Math.max(2,Math.ceil(Math.max(goal,...data.map(x=>x.v))/2)*2);
  const y=v=>Tp+(H-Tp-B)*(1-v/max), bw=(W-L-R)/data.length;
  const ticks=[0,max/2,max];
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Son 14 günün çalışma saatleri">
    ${ticks.map(v=>`<line class="gl" x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}"/><text x="${L-7}" y="${y(v)+4}" text-anchor="end">${v}</text>`).join("")}
    ${data.map((x,i)=>{const bx=L+i*bw+bw*.2,w=bw*.6,h=y(0)-y(x.v);const met=goal&&x.v>=goal;
      return `${x.v>0?`<rect x="${bx}" y="${y(x.v)}" width="${w}" height="${h}" fill="${met?"var(--ok-ink)":"var(--line-2)"}"><title>${fmtDate(x.iso,true)}: ${x.v} saat</title></rect>`:""}
      ${(i%2===1||i===13)?`<text x="${bx+w/2}" y="${H-7}" text-anchor="middle" ${i===13?'style="font-weight:700;fill:var(--ink)"':""}>${x.d.getDate()}</text>`:""}`}).join("")}
    ${goal?`<line x1="${L}" x2="${W-R}" y1="${y(goal)}" y2="${y(goal)}" stroke="var(--brand-ink)" stroke-width="1.5" stroke-dasharray="5 4"/>`:""}
  </svg>
  <div class="legend"><span><i style="background:var(--ok-ink)"></i>Hedefe ulaşılan gün</span><span><i style="background:var(--line-2)"></i>Hedefin altında</span></div>`;
}

/* ================= Topics ================= */
function vTopics(){
  return head("Konu anlatımı + 20 soruluk test","Konular & Testler",
    "Her konunun anlatımını oku, ardından soruları tek tek çöz. Yanlışların otomatik olarak Yanlışlarım defterine kaydedilir.")
  +(TOPIC_BANK.length?`<div class="tlist">${TOPIC_BANK.map(t=>{
      const b=bestOf("topic:"+t.id), oc=Object.values(mem.mistakes).filter(m=>m.status==="open"&&m.src==="topic:"+t.id).length;
      return `<div class="trow">
        <span class="tw">Hafta ${t.week}</span>
        <div class="tn" data-act="topic" data-v="${t.id}" role="link" tabindex="0"><b>${esc(t.n)}</b><span>${esc(t.s)}</span></div>
        <div class="ts">${b===null?`<span class="pill plain">Çözülmedi</span>`:`<span class="pill ${tone(b)}">En iyi %${b}</span>`}${oc?`<span class="pill no">${oc} açık yanlış</span>`:""}</div>
        <div class="ta"><button type="button" class="btn sm" data-act="topic" data-v="${t.id}">Anlatım</button>
          <button type="button" class="btn sm primary" data-act="test-topic" data-v="${t.id}">Teste başla</button></div>
      </div>`}).join("")}</div>`:emptyState("Konu bulunamadı","Soru bankası yüklenemedi."));
}
function vTopic(){
  const t=TOPIC[curTopic]; if(!t){current="topics";return vTopics()}
  const rs=resultsOf("topic:"+t.id), subsOf=SUBS_OF[t.id]||[];
  const mOpen=Object.values(mem.mistakes).filter(m=>m.status==="open"&&subsOf.includes(m.sub)&&qById(m.id));
  const bySub={}; mOpen.forEach(m=>bySub[m.sub]=(bySub[m.sub]||0)+1);
  return `<button type="button" class="back" data-act="go" data-v="topics">${svg(I.left,16)} Tüm konular</button>`
  +head(`Hafta ${t.week} · ${t.qs.length} soru`,esc(t.n),esc(t.s))
  +`<div class="topic-layout">
    <article>
      <div class="prose">${t.html}</div>
      <h3 style="font-size:21px;margin:34px 0 4px">Alt başlıklar</h3>
      <p class="sub">Bir başlığa dokun, anlatımı oku ve hemen altındaki kısa testlerle dene. Testte yanlış yaparsan bu anlatımlar Yanlışlarım sayfasında da karşına çıkar.</p>
      ${SUBS_OF[t.id].map(s=>`<details class="fold"><summary>${esc(subTitle(s))}${bySub[s]?`<span class="pill no">${bySub[s]} yanlış</span>`:""}</summary><div class="prose">${LESSONS[s]?LESSONS[s].html:""}</div>${bookLessonsHTML(s)}
        ${(()=>{const st=subStat(s), w=bySub[s]||0;
          const durum=st?`Bu başlıkta <b>${st.ok}/${st.n}</b> doğru (%${st.p}).`:"Bu başlıkta henüz soru çözmedin.";
          return `<div class="mini">
            <div class="mini-t"><b>${w?"Önce yanlışların":"Okudun, hemen dene"}</b><span>${durum}${w?` ${w} açık yanlışın var.`:` ${MINI_N} kısa test · her biri ${MINI_SIZE} soru, en kolaydan başlar.`}</span></div>
            <div class="rv-tests">${w&&wrongTest(s)?`<button type="button" class="rv-btn no" data-act="wrong-start" data-v="${esc(s)}"><b>Yanlış testi</b><span>${wrongTest(s).length} soru · ${w} yanlışın</span></button>`:""}${miniBtns(s)}</div>
          </div>`})()}
        <div class="row" style="margin:4px 0 14px"><button type="button" class="btn sm ghost" data-act="book-add-lesson" data-v="${s}">${svg(I.plus,14)} Anlatımı kitabıma ekle</button></div></details>`).join("")}
    </article>
    <aside class="aside">
      <section class="card lift">
        <div class="eyebrow">Konu testi</div>
        <h3 style="margin:4px 0 6px">${t.qs.length} soru, tek tek</h3>
        <p class="muted" style="margin:0 0 14px;font-size:13.5px">ÖSYM temposu: soru başına 2 dk 15 sn → yaklaşık ${Math.round(t.qs.length*2.25)} dk.</p>
        <button type="button" class="btn primary" style="width:100%" data-act="test-topic" data-v="${t.id}">Teste başla ${svg(I.arrow,16)}</button>
        ${mOpen.length?`<button type="button" class="btn" style="width:100%;margin-top:8px" data-act="retry-ids" data-v="${mOpen.map(m=>m.id).join(",")}">${mOpen.length} yanlışı tekrar çöz</button>`:""}
        ${personalGroups(t.id).length?`<button type="button" class="btn hi" style="width:100%;margin-top:8px" data-act="personal-start" data-v="${t.id}">${svg(I.target,16)} Kişisel test · ${personalGroups(t.id).length} soru</button>`:""}
      </section>
      <section class="card">
        <h3 style="font-size:17px">Denemelerin</h3>
        ${rs.length?`<ul class="rlist">${rs.slice(0,5).map(r=>`<li><div class="rt-t"><b>${fmtDate(r.date)}</b><span>${r.correct}/${r.total} doğru · ${mmss(r.secs)}</span></div><span class="pill ${tone(pct(r))}">%${pct(r)}</span></li>`).join("")}</ul>`
          :`<p class="muted" style="margin:6px 0 0;font-size:13.5px">Bu konuda henüz test çözmedin.</p>`}
      </section>
    </aside>
  </div>`;
}

/* ================= Weekly ================= */
function vWeekly(){
  if(!curWeek) curWeek=currentWeek();
  const P=PLAN[curWeek-1], base=weekQs(curWeek), mine=customQs(curWeek), all=[...base,...mine];
  const rs=resultsOf("week:"+curWeek);
  const status=q=>{const m=mem.mistakes[q.id];if(m&&m.status==="open")return `<span class="pill no">Açık yanlış</span>`;
    const a=answered[q.id];if(!a)return `<span class="pill plain">Çözülmedi</span>`;return a.ok?`<span class="pill ok">Doğru</span>`:`<span class="pill hi">Öğrenildi</span>`};
  return head("ÖSYM soru düzeninde, haftaya göre","Haftalık Çıkmış Sorular",
    "8 haftalık planın her haftası, o haftanın ÖSYM soru aralığına göre gruplandı. Kendi kitaplarından çözdüğün gerçek çıkmış soruları da ilgili haftaya ekleyebilirsin.")
  +`<nav class="wtabs" aria-label="Haftalar">${PLAN.map(p=>`<button type="button" class="${p.w===curWeek?"on":""} ${weeks[p.w]?"done":""}" data-act="week" data-v="${p.w}">Hafta ${p.w}</button>`).join("")}</nav>
  <section class="card lift">
    <div class="row between" style="align-items:flex-start">
      <div style="min-width:0;flex:1 1 320px">
        <div class="eyebrow">Hafta ${curWeek} · ${esc(P.short)}</div>
        <h2 style="font-size:28px;margin-top:4px">${esc(P.q)}</h2>
        <p class="muted" style="margin:6px 0 0">${esc(P.gr)} · ${esc(P.v)}</p>
      </div>
      <div class="stack" style="gap:8px;flex:0 0 auto">
        <button type="button" class="btn primary" data-act="test-week" data-v="${curWeek}" ${all.length?"":"disabled"}>${all.length} soruyu tek tek çöz ${svg(I.arrow,16)}</button>
        ${mine.length?`<button type="button" class="btn" data-act="test-week" data-v="${curWeek}" data-only="mine">Sadece eklediklerim (${mine.length})</button>`:""}
        ${rs.length?`<span class="muted" style="font-size:13px;text-align:right">Son deneme: <b>%${pct(rs[0])}</b> · ${fmtDate(rs[0].date,true)}</span>`:""}
      </div>
    </div>
  </section>

  <section class="card mt">
    <h3>Bu haftanın soruları</h3>
    <p class="sub">Cevaplar test sırasında gösterilir; burada yalnızca durumlar var.</p>
    ${all.length?`<div class="tbl"><table class="qtable"><thead><tr><th>#</th><th>ÖSYM aralığı</th><th>Konu</th><th>Kaynak</th><th>Durum</th><th></th></tr></thead><tbody>
      ${all.map((q,i)=>`<tr><td class="n">${i+1}</td><td>${esc(q.no||"—")}</td><td>${esc(subTitle(q.sub))}</td>
        <td>${q.custom?`<span class="chip">${esc(q.ref||"Eklediğim soru")}</span>`:`<span class="muted">ÖSYM formatı</span>`}</td>
        <td>${status(q)}</td>
        <td>${q.custom?`<button type="button" class="icon-btn" data-act="del-custom" data-v="${q.id}" aria-label="Soruyu sil">${svg(I.trash,16)}</button>`:""}</td></tr>`).join("")}
    </tbody></table></div>`:emptyState("Bu haftada soru yok","Aşağıdan kendi çıkmış sorunu ekleyebilirsin.")}
  </section>

  <section class="card mt">
    <details class="fold" style="border:0" id="adder">
      <summary style="padding:0">Kendi çıkmış sorunu ekle</summary>
      <div class="form-grid mt">
        <p class="muted" style="margin:0;font-size:13.5px">ÖSYM'nin yayımladığı soru kitapçıklarından (osym.gov.tr → Sınav soruları) veya kaynak kitaplarından çözdüğün soruyu yaz. Yanlış yaparsan o da defterine girer.</p>
        <div class="grid g2">
          <div><label class="f" for="cRef">Kaynak</label><input type="text" id="cRef" placeholder="Örn: YDS 2024/1 · Soru 14"></div>
          <div><label class="f" for="cSub">Konu</label><select id="cSub">${TOPIC_BANK.map(t=>`<optgroup label="${esc(t.n)}">${SUBS_OF[t.id].map(s=>`<option value="${s}">${esc(subTitle(s))}</option>`).join("")}</optgroup>`).join("")}</select></div>
        </div>
        <div><label class="f" for="cPass">Paragraf (varsa)</label><textarea id="cPass" placeholder="Paragraf veya cloze metni. Boşlukları ---- ile yaz."></textarea></div>
        <div><label class="f" for="cStem">Soru kökü</label><textarea id="cStem" placeholder="The committee ---- the proposal before the deadline."></textarea></div>
        <fieldset style="border:0;padding:0;margin:0"><legend class="f" style="margin-bottom:6px">Şıklar · doğru olanı işaretle</legend>
          <div class="opt-grid">${"ABCDE".split("").map((L,j)=>`<div class="opt-in"><b>${L}</b><input type="radio" name="cA" value="${j}" id="cA${j}" aria-label="${L} doğru cevap"><input type="text" id="cO${j}" aria-label="${L} şıkkı"></div>`).join("")}</div>
        </fieldset>
        <div><label class="f" for="cExp">Açıklama (neden doğru?)</label><textarea id="cExp" style="min-height:64px"></textarea></div>
        <div><button type="button" class="btn primary" data-act="add-custom">Hafta ${curWeek}'e ekle</button></div>
      </div>
    </details>
  </section>`;
}

/* ================= Test engine ================= */
function startTest({title,src,ids,back,focus,scope}){
  const qs=ids.map(qById).filter(Boolean);
  if(!qs.length){toast("Bu sette çözülecek soru yok");return}
  T={title,src,qs,i:0,ans:Array(qs.length).fill(null),start:Date.now(),back,result:null,focus:focus||null,scope:scope||null};
  go("test");
}
function startTopicTest(id){const t=TOPIC[id];if(!t)return;curTopic=id;
  startTest({title:t.n,src:"topic:"+id,ids:t.qs.map(q=>q.id),back:"topic"})}
function startWeekTest(w,only){curWeek=w;
  const ids=(only?[]:weekQs(w).map(q=>q.id)).concat(customQs(w).map(q=>q.id));
  startTest({title:`Hafta ${w} · ${PLAN[w-1].q}`,src:"week:"+w,ids,back:"weekly"})}
function vTest(){
  if(!T){current="panel";return vPanel()}
  return `<div class="runner">
    <div class="run-top">
      <button type="button" class="btn ghost sm" data-act="quit">${svg(I.x,15)} Çık</button>
      <div class="run-title"><div class="eyebrow">${esc(srcLabel(T.src))}</div><b>${esc(T.title)}</b></div>
      <div class="run-time"><b id="tTime">0:00</b>hedef ${mmss(T.qs.length*135)}</div>
    </div>
    <div class="ticks" id="ticks"></div>
    <div id="testBody"></div>
  </div>`;
}
function renderTestBody(){
  const q=T.qs[T.i], k=T.ans[T.i], locked=k!==null, p=passageOf(q), L="ABCDE";
  document.getElementById("ticks").innerHTML=T.qs.map((qq,i)=>{const a=T.ans[i];
    return `<button type="button" class="tick ${i===T.i?"cur":""} ${a===null?"":a===qq.a?"ok":"no"}" data-act="jump" data-v="${i}" ${a===null&&i!==T.i?"disabled":""} aria-label="Soru ${i+1}${a===null?"":a===qq.a?", doğru":", yanlış"}"></button>`}).join("");
  document.getElementById("testBody").innerHTML=`
    <article class="sheet">
      <div class="q-meta"><span class="q-no">Soru ${T.i+1}<small> / ${T.qs.length}</small></span>
        ${q.no?`<span class="chip">ÖSYM ${esc(q.no)}</span>`:""}${q.ref?`<span class="chip">${esc(q.ref)}</span>`:""}
        ${locked?`<span class="chip">${esc(subTitle(q.sub))}</span>`:""}</div>
      ${p?`<div class="passage">${fmtPassage(p,q.blank)}</div>`:""}
      <div class="stem">${fmtStem(q.q)}</div>
      <div class="opts" role="group" aria-label="Şıklar">${q.o.map((o,j)=>{
        const st=!locked?"":j===q.a?"ok":j===k?"no":"dim";
        return `<button type="button" class="opt ${st}" data-act="opt" data-v="${j}" ${locked?"disabled":""}><span class="L">${L[j]}</span><span>${fmtStem(o)}</span><span class="mark">${locked&&j===q.a?"Doğru":locked&&j===k?"Senin cevabın":""}</span></button>`}).join("")}</div>
      ${locked?`<div class="feedback ${k===q.a?"ok":"no"}" role="status"><b>${k===q.a?"Doğru cevap.":`Yanlış. Doğru cevap ${L[q.a]}.`}</b>
        <p>${esc(q.e||"")}</p>${typeof kwOptNotes==="function"?kwOptNotes(q,k):""}${T.focus&&T.focus[q.id]?`<p class="note">${svg(I.target,14)} ${esc(focusText(T.focus[q.id]))}</p>`:""}${k!==q.a?`<p class="note">Bu soru Yanlışlarım defterine kaydedildi: <b>${esc(subTitle(q.sub))}</b></p>`:""}
        <div style="margin-top:10px">${bookAddBtn(q)}</div></div>`:""}
    </article>
    <div class="run-nav">
      <button type="button" class="btn ghost" data-act="prev" ${T.i===0?"disabled":""}>${svg(I.left,16)} Önceki</button>
      <span class="kbd"><kbd>A</kbd>–<kbd>E</kbd> seç · <kbd>Enter</kbd> sonraki</span>
      <button type="button" class="btn primary" data-act="next" ${locked?"":"disabled"} id="nextBtn">${T.i===T.qs.length-1?"Sonucu gör":"Sonraki soru"} ${svg(I.arrow,16)}</button>
    </div>`;
  if(locked){const nb=document.getElementById("nextBtn");nb&&nb.focus({preventScroll:true})}
}
function answer(k){
  if(!T||T.ans[T.i]!==null||k<0||k>4)return;
  const q=T.qs[T.i];T.ans[T.i]=k;const ok=k===q.a;
  const m=mem.mistakes[q.id], now=todayISO();
  if(!ok) dbPut("mistakes",{id:q.id,sub:q.sub,src:q.src,wrong:(m?m.wrong:0)+1,choice:k,first:m?m.first:now,last:now,status:"open",
    history:[...((m&&m.history)||[]),{d:now,c:k}].slice(-10)});
  else if(m&&m.status==="open") dbPut("mistakes",Object.assign({},m,{status:"learned",fixed:now}));
  answered[q.id]={ok,d:now};logAnswer(q,ok);save();
  renderTestBody();buildNav();
}
function nextQ(){if(!T||T.ans[T.i]===null)return;
  if(T.i<T.qs.length-1){T.i++;renderTestBody();window.scrollTo({top:0})}else finishTest()}
function prevQ(){if(!T||T.i===0)return;T.i--;renderTestBody()}
function jumpQ(i){if(!T||i===T.i)return;if(T.ans[i]===null&&T.ans[T.i]===null)return;
  const firstOpen=T.ans.indexOf(null);if(firstOpen!==-1&&i>firstOpen)return;T.i=i;renderTestBody()}
function finishTest(){
  const correct=T.qs.filter((q,i)=>T.ans[i]===q.a).length;
  const r={id:"r-"+Date.now(),src:T.src,title:T.title,total:T.qs.length,correct,ids:T.qs.map(q=>q.id),wrong:T.qs.filter((q,i)=>T.ans[i]!==q.a).map(q=>q.id),
    secs:Math.round((Date.now()-T.start)/1000),date:todayISO(),ts:Date.now()};
  dbPut("results",r);
  T.result=r;stopTick();go("result");
}
function quitTest(){
  const n=T?T.ans.filter(a=>a!==null).length:0;
  if(n&&!confirm(`Testten çıkılsın mı? Çözdüğün ${n} sorudaki yanlışlar kaydedildi; test sonucu kaydedilmeyecek.`))return;
  const back=T&&T.back||"panel";stopTick();T=null;go(back);
}
function startTick(){stopTick();tick=setInterval(()=>{const el=document.getElementById("tTime");if(!el||!T){stopTick();return}el.textContent=mmss((Date.now()-T.start)/1000)},1000)}
function stopTick(){clearInterval(tick);tick=null}

function vResult(){
  if(!T||!T.result){current="panel";return vPanel()}
  const r=T.result, p=pct(r), per=r.secs/r.total, L="ABCDE";
  const wrongs=T.qs.map((q,i)=>({q,a:T.ans[i]})).filter(x=>x.a!==x.q.a);
  const subs=[...new Set(wrongs.map(x=>x.q.sub))];
  return head(`Test tamamlandı · ${fmtDate(r.date)}`,esc(r.title),esc(srcLabel(r.src)))
  +`<section class="card lift"><div class="score">
      <div class="big">${r.correct}<small> / ${r.total}</small></div>
      <div>
        <span class="pill ${tone(p)}" style="font-size:14px;padding:4px 12px">%${p} başarı ${p>=settings.targetScore?"· hedefin üstünde":"· hedef "+settings.targetScore}</span>
        <dl style="margin-top:14px"><dt>Süre</dt><dd>${mmss(r.secs)} · soru başına ${Math.round(per)} sn <span class="muted">(ÖSYM temposu 135 sn)</span></dd>
        <dt>YDS karşılığı</dt><dd>Bu oran 80 soruda yaklaşık <b>${Math.round(p)}</b> puan eder <span class="muted">(soru başı 1,25)</span></dd>
        <dt>Yanlış</dt><dd>${wrongs.length} soru${wrongs.length?` · ${subs.length} alt başlıkta`:""}</dd></dl>
      </div></div>
    <div class="row mt">
      ${wrongs.length?`<button type="button" class="btn primary" data-act="mistakes-for" data-v="${esc(T.src==="retry"?"all":T.src)}">Yanlışlarıma özel anlatımı aç ${svg(I.arrow,16)}</button>
      <button type="button" class="btn" data-act="retry-ids" data-v="${wrongs.map(x=>x.q.id).join(",")}">${svg(I.redo,16)} Yanlışları tekrar çöz</button>
      ${personalGroups(scopeOf(T)).length?`<button type="button" class="btn hi" data-act="personal-start" data-v="${scopeOf(T)||"all"}">${svg(I.target,16)} ${T.src==="personal"?"Yeni kişisel test":"Bu yanlışlara kişisel test"}</button>`:""}`:""}
      <button type="button" class="btn ${wrongs.length?"ghost":"primary"}" data-act="restart">Testi baştan çöz</button>
      <button type="button" class="btn ghost" data-act="go" data-v="${T.back||"panel"}">Geri dön</button>
    </div>
  </section>
  ${T.src==="personal"&&T.focus?personalSummary():""}
  ${wrongs.length?`<h3 style="font-size:21px;margin:28px 0 10px">Yanlış yaptığın sorular</h3>
    <div class="card">${wrongs.map(({q,a})=>`<div class="mitem" style="padding-top:14px">
      <div class="mi-top"><span class="chip">${esc(subTitle(q.sub))}</span></div>
      <div class="stem sm">${fmtStem(q.q)}</div>
      ${answerRows(q,a)}
      <p class="why">${esc(q.e||"")}</p>${typeof kwOptNotes==="function"?kwOptNotes(q,a):""}
      <div class="mi-act">${bookAddBtn(q)}</div></div>`).join("")}</div>`:
    `<div class="card mt">${emptyState("Hiç yanlışın yok","Bu testi tamamen doğru çözdün. Bir sonraki konuya geçebilirsin.")}</div>`}`;
}
function answerRows(q,chosen){const L="ABCDE";
  return `<div class="ans">
    ${chosen!=null&&chosen!==q.a?`<div class="a-no"><span class="Lx">${L[chosen]}</span><span class="lbl">Senin cevabın</span><span class="tx">${fmtStem(q.o[chosen])}</span></div>`:""}
    <div class="a-ok"><span class="Lx">${L[q.a]}</span><span class="lbl">Doğru cevap</span><span class="tx">${fmtStem(q.o[q.a])}</span></div></div>`;
}

/* ================= Mistakes ================= */
function vMistakes(){
  const all=Object.values(mem.mistakes).filter(m=>qById(m.id));
  const base=all.filter(m=>(MF.status==="all"||m.status===MF.status)&&(MF.src==="all"||m.src===MF.src));
  /* hafta sekmeleri ve alt başlıklar tüm yanlışlardan (öğrenilenler dahil): "Öğrendim" deyince başlık ve anlatımı kaybolmaz */
  const allSrc=all.filter(m=>MF.src==="all"||m.src===MF.src);
  const wCounts=weekCounts(allSrc.map(m=>m.sub)), wSel=weekSel("mistakes",wCounts);
  const allW=allSrc.filter(m=>wkMatch(wSel,m.sub)), everOf={}; allW.forEach(m=>(everOf[m.sub]=everOf[m.sub]||[]).push(m));
  const list=base.filter(m=>wkMatch(wSel,m.sub));
  const openIds=list.filter(m=>m.status==="open").map(m=>m.id);
  const pScope=wSel==="all"?"all":"w:"+wSel, nP=personalGroups(pScope==="all"?null:pScope).length;
  const rs=Object.values(mem.results).filter(r=>wSel==="all"||resultWeeks(r).has(wSel)).sort((x,y)=>y.ts-x.ts);
  const groups={}; Object.keys(everOf).forEach(sb=>groups[sb]=[]); list.forEach(m=>groups[m.sub].push(m));
  const byTopic={}; Object.keys(groups).forEach(sb=>{const tid=SUB_TOPIC[sb]||"_my";(byTopic[tid]=byTopic[tid]||[]).push(sb)});
  const tids=TOPIC_BANK.map(t=>t.id).filter(id=>byTopic[id]).concat(byTopic._my?["_my"]:[]);
  const nOpen=all.filter(m=>m.status==="open").length;
  const snip=t=>{t=String(t||"").replace(/-{4,}/g,"____").replace(/\s+/g," ").trim();return t.length>90?t.slice(0,88)+"…":t};
  return head("Yanlış defteri","Yanlışlarım",
    "Testlerde yanlış yaptığın her soru buraya kendiliğinden kaydedilir; senin bir şey eklemen gerekmez. Aynı soruyu sonra doğru çözersen “öğrenildi” olur."
    +(mode==="user"?" Kayıtların Google hesabında, her cihazda aynı.":""))
  +(all.length?weekTabs("mistakes",wCounts,wSel)
    +`<div class="toolbar"><div class="seg" role="group" aria-label="Durum">${[["open","Açık yanlışlar"],["learned","Öğrendiklerim"],["all","Hepsi"]].map(([v,l])=>`<button type="button" class="${MF.status===v?"on":""}" data-act="mf-status" data-v="${v}">${l}</button>`).join("")}</div>
      ${MF.src!=="all"?`<button type="button" class="chip-x" data-act="mf-src-clear">Yalnızca: ${esc(srcLabel(MF.src))} ✕</button>`:""}</div>`:"")
  +(!all.length?`<div class="card">${emptyState("Henüz yanlışın yok","Bir konu testi çöz; yanlış yaptığın sorular ve sana özel konu anlatımları burada kendiliğinden birikir.",`<button type="button" class="btn primary" data-act="go" data-v="topics">Konulara git</button>`)}</div>`
   :`<section class="card lift study">
      <h3>Çalış · ${esc(weekName(wSel))}</h3>
      ${openIds.length?`<div class="st-row"><div class="st-t"><b>Yanlışlarımı tekrar çöz</b><span>Bu listedeki ${openIds.length} açık yanlış, tek tek</span></div>
        <button type="button" class="btn primary" data-act="retry-ids" data-v="${openIds.join(",")}">Başla ${svg(I.arrow,16)}</button></div>`:""}
      ${nP?`<div class="st-row"><div class="st-t"><b>Kişisel test</b><span>Yanlış yaptığın ${nP} alt başlığın her birinden 1 yeni soru</span></div>
        <button type="button" class="btn hi" data-act="personal-start" data-v="${pScope}">Başla ${svg(I.arrow,16)}</button></div>`:""}
      ${!openIds.length&&!nP?`<p class="muted" style="margin:6px 0 0;font-size:14px">${nOpen?"Bu haftada açık yanlışın yok.":"Açık yanlışın yok, harika."}</p>`:""}
      <details class="st-more" data-bkopen="m:tests" ${BK.open.has("m:tests")?"open":""}><summary>Çözdüğüm testler (${rs.length})</summary>
        ${rs.length?`<ul class="rlist">${rs.slice(0,30).map(r=>`<li><div class="rt-t"><b>${esc(r.title)}</b><span>${fmtDate(r.date,true)} · ${r.correct}/${r.total} doğru · ${mmss(r.secs)}</span></div><span class="pill ${tone(pct(r))}">%${pct(r)}</span></li>`).join("")}</ul>`:`<p class="muted" style="font-size:14px">Bu haftada çözülmüş test yok.</p>`}
      </details>
    </section>
    ${!Object.keys(groups).length?`<div class="card mt">${emptyState("Bu seçimde yanlış yok","Üstteki hafta ya da durum seçimini değiştir.")}</div>`
    :tids.map(tid=>{const t=TOPIC[tid], subs=byTopic[tid].sort((x,y)=>everOf[y].filter(m=>m.status==="open").length-everOf[x].filter(m=>m.status==="open").length||everOf[y].length-everOf[x].length);
      return `<h3 class="bk-h">${esc(t?t.n:"Kendi başlıklarım")}</h3>
      <div class="bk-list">${subs.map(sb=>{const ms=groups[sb].sort((x,y)=>y.wrong-x.wrong), ever=everOf[sb], no=ever.filter(m=>m.status==="open");
        return `<details class="bk-sub" id="g-${esc(sb)}" data-bkopen="m:${esc(sb)}" ${BK.open.has("m:"+sb)?"open":""}>
          <summary><span class="bk-t"><b>${esc(subTitle(sb))}</b><small>${ever.length} soru · toplam ${ever.reduce((x,m)=>x+m.wrong,0)} kez yanlış</small></span>
            ${no.length?`<span class="pill no">${no.length} açık</span>`:`<span class="pill ok">öğrenildi</span>`}</summary>
          <div class="bk-in">
            <details class="bk-item lesson-item" data-bkopen="ml:${esc(sb)}" ${BK.open.has("ml:"+sb)?"open":""}><summary><span class="bk-k">Anlatım</span><span class="bk-s">Yanlışlarına özel konu anlatımı</span></summary>
              <div class="bk-body"><div class="prose">${OZEL[sb]||(LESSONS[sb]?LESSONS[sb].html:bookLessons(sb).length?"":"<p>Bu başlık için anlatım yok.</p>")}</div>${bookLessonsHTML(sb)}
                ${OZEL[sb]&&SUB_TOPIC[sb]?`<div class="bk-act"><button type="button" class="lnk" data-act="topic" data-v="${SUB_TOPIC[sb]}">Konu sayfasındaki anlatımı aç</button></div>`:""}</div></details>
            ${!ms.length?`<p class="muted" style="margin:10px 0 4px;font-size:13.5px">${MF.status==="open"?"Bu başlıktaki yanlışlarının hepsini öğrendin. Anlatım burada kalır; öğrendiğin soruları “Öğrendiklerim”de görebilirsin.":"Bu seçimde soru yok; anlatım burada kalır."}</p>`:""}
            ${ms.map((m,i)=>{const q=qById(m.id), ps=passageOf(q);
              return `<details class="bk-item"><summary><span class="bk-k">Soru ${i+1}</span><span class="bk-s">${esc(snip(q.q))}</span>
                ${m.status==="learned"?`<span class="pill ok">öğrenildi</span>`:m.wrong>1?`<span class="pill no">${m.wrong} kez</span>`:""}</summary>
                <div class="bk-body">
                  <div class="muted" style="font-size:12.5px;margin-bottom:6px">${esc(srcLabel(m.src)||"Test")} · son yanlış ${fmtDate(m.last,true)}</div>
                  ${ps?`<div class="passage">${fmtPassage(ps,q.blank)}</div>`:""}
                  <div class="stem sm">${fmtStem(q.q)}</div>
                  ${answerRows(q,m.choice)}
                  ${q.e?`<p class="why">${esc(q.e)}</p>`:""}
                  <div class="bk-act">
                    <button type="button" class="lnk" data-act="retry-ids" data-v="${m.id}">Tekrar çöz</button>
                    <button type="button" class="lnk" data-act="m-toggle" data-v="${m.id}">${m.status==="open"?"Öğrendim":"Tekrar aç"}</button>
                    ${mem.book[q.id]||Object.values(mem.book).some(b=>b.orig===q.id)?`<span class="muted" style="font-size:13px">Kitabında</span>`:`<button type="button" class="lnk" data-act="book-add-q" data-v="${esc(q.id)}">Kitabıma ekle</button>`}
                    <button type="button" class="lnk danger" data-act="m-del" data-v="${m.id}">Sil</button>
                  </div></div></details>`}).join("")}
          </div></details>`}).join("")}</div>`}).join("")}`)
  +`<details class="st-more notes-box" data-bkopen="m:notes" ${BK.open.has("m:notes")?"open":""}><summary>Kendi notlarım (${notes.length})</summary>
    <div class="card" style="margin-top:8px">
    <div class="grid g2">
      <div><label class="f" for="nTitle">Başlık</label><input type="text" id="nTitle" placeholder="Örn: Past Perfect ile Simple Past karışıyor"></div>
      <div><label class="f" for="nType">Tür</label><select id="nType"><option value="error">Hata analizi</option><option value="rule">Kural / kalıp</option><option value="note">Genel not</option></select></div>
    </div>
    <label class="f mt" for="nBody">İçerik</label>
    <textarea id="nBody" placeholder="Yanlış yaptığım soru… / Doğru cevap neden bu… / Çeldirici neden çekiciydi…"></textarea>
    <div class="row mt" style="justify-content:flex-end"><button type="button" class="btn hi" data-act="add-note">Notu kaydet</button></div>
    ${notes.length?`<ul class="notes">${[...notes].reverse().map(n=>{const tg=n.type==="error"?["no","Hata"]:n.type==="rule"?["ok","Kural"]:["plain","Not"];
      return `<li><div><div class="row"><b>${esc(n.title)}</b><span class="pill ${tg[0]}">${tg[1]}</span><span class="muted" style="font-size:12.5px">${fmtDate(n.date,true)}</span></div><p>${esc(n.body)}</p></div>
        <button type="button" class="icon-btn" data-act="del-note" data-v="${n.id}" aria-label="Notu sil">${svg(I.trash,16)}</button></li>`}).join("")}</ul>`:""}
    </div></details>`;
}
/* Bir test sonucunun hangi haftalara ait olduğu (soru id'lerinden; eski kayıtlarda kaynaktan) */
function resultWeeks(r){
  const w=new Set((r.ids||r.wrong||[]).map(qById).filter(Boolean).map(q=>weekOfSub(q.sub))), src=r.src||"";
  if(src.startsWith("topic:")&&!r.ids){const t=TOPIC[src.slice(6)];if(t)SUBS_OF[t.id].forEach(x=>w.add(weekOfSub(x)))}
  if(src.startsWith("week:")) w.add(+src.slice(5));
  const mx=src.match(/^review:mix@(\d+)/); if(mx) w.add(+mx[1]);
  if(src.startsWith("review:")&&!src.startsWith("review:mix")) w.add(weekOfSub(src.split(":")[1]));
  return w;
}

/* ================= Hafta filtresi ================= */
/* Alt başlığın 8 haftalık plandaki haftası (0 = kitaptaki kendi başlıkların). Çoğu alt başlık konusunun haftasını alır;
   planda ayrı bir haftada çalışılan soru tipleri (cloze, çeviri, diyalog, paragraf tamamlama…) o haftaya yazılır. */
const SUB_WEEK_FIX={cloze:3,"tr-en-tr":5,"tr-tr-en":5,"rd-dialogue":7,"rd-restatement":7,"rd-completion":8,"rd-irrelevant":8};
const weekOfSub=s=>SUB_WEEK_FIX[s]||(TOPIC[SUB_TOPIC[s]]||{}).week||0;
const WK=LS.get("wkf",{});
/* Seçim yoksa kaydı olan en son hafta açılır; seçili haftada kayıt kalmadıysa "Tümü" */
function weekSel(page,counts){
  let v=WK[page];
  if(v===undefined||v===null){const ws=Object.keys(counts).map(Number).filter(w=>w>0&&counts[w]);v=ws.length?Math.max(...ws):"all"}
  if(v!=="all"&&!counts[v]) v="all";
  return v;
}
const wkMatch=(sel,sub)=>sel==="all"||weekOfSub(sub)===sel;
function weekCounts(subs){const c={};subs.forEach(s=>{const w=weekOfSub(s);c[w]=(c[w]||0)+1});return c}
function weekTabs(page,counts,sel){
  const total=Object.values(counts).reduce((a,b)=>a+b,0);
  return `<nav class="wtabs wfilter" aria-label="Haftaya göre filtre">
    <button type="button" class="${sel==="all"?"on":""}" data-act="wk" data-p="${page}" data-v="all">Tümü <em>${total}</em></button>
    ${PLAN.map(p=>`<button type="button" class="${sel===p.w?"on":""}" data-act="wk" data-p="${page}" data-v="${p.w}" ${counts[p.w]?"":"disabled"} title="${esc(p.short)}">Hafta ${p.w} <em>${counts[p.w]||0}</em></button>`).join("")}
    ${counts[0]?`<button type="button" class="${sel===0?"on":""}" data-act="wk" data-p="${page}" data-v="0">Kendi başlıklarım <em>${counts[0]}</em></button>`:""}
  </nav>`;
}
const weekName=sel=>sel==="all"?"Tüm haftalar":sel===0?"Kendi başlıklarım":`Hafta ${sel} · ${PLAN[sel-1].short}`;

/* ================= Kişisel test ================= */
/* Açık yanlışları alt başlığa göre toplar. scope: konu id'si, "_my" (kitaptaki kendi başlıkların), "w:N" (N. hafta) ya da null (tümü) */
function personalGroups(scope){
  const g={};
  Object.values(mem.mistakes).forEach(m=>{
    if(m.status!=="open"||!qById(m.id))return;
    if(scope){const [a,b]=String(scope).split("~"), wk=a.startsWith("w:")?+a.slice(2):b!==undefined?+b:null;
      if(wk!==null&&weekOfSub(m.sub)!==wk)return;
      if(!a.startsWith("w:")&&(SUB_TOPIC[m.sub]||"_my")!==a)return}
    (g[m.sub]=g[m.sub]||[]).push(m)});
  return Object.keys(g).map(sub=>({sub,ms:g[sub],w:g[sub].reduce((s,m)=>s+m.wrong,0)}))
    .filter(x=>personalCandidates(x.sub).length).sort((a,b)=>b.w-a.w);
}
/* Bir alt başlıkta sorulabilecek sorular: önce yeni pratik soruları, sonra kitabındakiler, en son bankadaki diğer sorular.
   Açık yanlış olan sorular (ve onların kitaptaki kopyaları) aday olmaz. */
function personalCandidates(sub){
  const isOpen=id=>!!(id&&mem.mistakes[id]&&mem.mistakes[id].status==="open");
  const out=[];
  (PRAC_OF[sub]||[]).concat(EXTRA_OF[sub]||[]).forEach(id=>{if(!isOpen(id))out.push({id,kind:"new",from:Q[id].from||[]})});
  Object.values(mem.book).forEach(b=>{if(b.kind==="q"&&b.sub===sub&&!isOpen(b.id)&&!isOpen(b.orig))out.push({id:b.id,kind:"book",from:b.orig?[b.orig]:[]})});
  [...Object.values(Q),...Object.values(mem.custom)].forEach(q=>{if(q.sub===sub&&q.src!=="personal"&&!isOpen(q.id))out.push({id:q.id,kind:"bank",from:[]})});
  return out;
}
/* Başlıktaki yanlışlarını en çok kapsayan, daha önce doğru çözmediğin soruyu seçer */
function pickFor(sub,ms){
  const wrongOf={}; ms.forEach(m=>wrongOf[m.id]=m.wrong);
  let best=null;
  personalCandidates(sub).forEach(c=>{
    const hits=c.from.filter(id=>wrongOf[id]);
    const a=answered[c.id];
    const s=hits.reduce((t,id)=>t+wrongOf[id],0)*10+{new:6,book:4,bank:1}[c.kind]+(!a?5:a.ok?-12:0)+Math.random();
    if(!best||s>best.s)best={id:c.id,s,hits};
  });
  return best;
}
function startPersonal(scope){
  const plan=personalGroups(scope).map(g=>({g,p:pickFor(g.sub,g.ms)})).filter(x=>x.p);
  if(!plan.length){toast("Açık yanlışın yok; önce bir test çöz");return}
  const focus={};
  plan.forEach(({g,p})=>focus[p.id]={sub:g.sub,n:g.ms.length,hits:p.hits.length,ids:g.ms.map(m=>m.id)});
  const [a,b]=String(scope||"").split("~"), t=TOPIC[a], wk=a.startsWith("w:")?+a.slice(2):b!==undefined?+b:null;
  const label=t?t.n+(wk?" · Hafta "+wk:""):a==="_my"||wk===0?"Kendi başlıklarım":wk?"Hafta "+wk:"";
  startTest({title:"Kişisel test"+(label?" · "+label:""),src:"personal",ids:plan.map(x=>x.p.id),back:"personal",focus,scope});
}
const scopeOf=x=>x.src==="personal"?x.scope:x.src.startsWith("topic:")?x.src.slice(6):null;
const focusText=f=>`${subTitle(f.sub)} başlığındaki ${f.n} açık yanlışına yönelik soru`+(f.hits>1?` · ${f.hits} yanlışının kuralını birlikte soruyor`:"");
function personalSummary(){
  const rows=T.qs.map((q,i)=>({f:T.focus[q.id],ok:T.ans[i]===q.a})).filter(x=>x.f);
  return `<section class="card mt"><h3>Alt başlık karnesi</h3>
    <p class="sub">Doğru yaptığın başlıklarda eski yanlışlarını tekrar çözüp kapatabilirsin. Yanlış yaptıklarının konu anlatımı Yanlışlarım sayfasında.</p>
    <div class="tbl"><table class="qtable"><thead><tr><th>Alt başlık</th><th>Açık yanlış</th><th>Bu testte</th><th></th></tr></thead><tbody>
    ${rows.map(r=>{const still=r.f.ids.filter(id=>mem.mistakes[id]&&mem.mistakes[id].status==="open");
      return `<tr><td>${esc(subTitle(r.f.sub))}</td><td>${r.f.n}</td><td>${r.ok?`<span class="pill ok">Doğru</span>`:`<span class="pill no">Yanlış</span>`}</td>
      <td>${still.length?`<button type="button" class="btn sm" data-act="retry-ids" data-v="${still.join(",")}">Eski ${still.length} yanlışı çöz</button>`:""}</td></tr>`}).join("")}
    </tbody></table></div></section>`;
}
function vPersonal(){
  const all=personalGroups(null), rs=resultsOf("personal");
  const intro=`Açık yanlışın olan her alt başlıktan <b>1 soru</b> gelir. Bu soru, o başlıkta yanlış yaptığın soruların kuralını yeni bir cümleyle yeniden sorar; aynı başlıkta birden çok yanlışın varsa hepsini en iyi kapsayan soru seçilir. Her testte daha önce doğru çözmediğin sorular öne alınır.`;
  if(!all.length) return head("Yanlışlarına göre hazırlanır","Kişisel Test",intro)
    +`<div class="card">${emptyState("Açık yanlışın yok","Bir konu testi çöz; yanlış yaptığın her alt başlık için burada sana özel soru hazırlanır.",`<button type="button" class="btn primary" data-act="go" data-v="topics">Konulara git</button>`)}</div>`;
  const counts=weekCounts(all.map(g=>g.sub)), sel=weekSel("personal",counts);
  const shown=all.filter(g=>wkMatch(sel,g.sub));
  const byTopic={}; shown.forEach(g=>{const tid=SUB_TOPIC[g.sub]||"_my";(byTopic[tid]=byTopic[tid]||[]).push(g)});
  const tids=TOPIC_BANK.map(t=>t.id).filter(id=>byTopic[id]).concat(byTopic._my?["_my"]:[]);
  const nOpen=shown.reduce((s,g)=>s+g.ms.length,0);
  return head("Yanlışlarına göre hazırlanır","Kişisel Test",intro)
  +weekTabs("personal",counts,sel)
  +`<section class="card lift"><div class="row between" style="align-items:flex-start">
      <div style="min-width:0;flex:1 1 320px"><div class="eyebrow">${esc(weekName(sel))}</div>
        <h2 style="font-size:28px;margin-top:4px">${shown.length} alt başlık · ${shown.length} soru</h2>
        <p class="muted" style="margin:6px 0 0">${nOpen} açık yanlışından hazırlanır · yaklaşık ${Math.max(1,Math.round(shown.length*2.25))} dk</p></div>
      <button type="button" class="btn primary" data-act="personal-start" data-v="${sel==="all"?"all":"w:"+sel}">Kişisel testimi başlat ${svg(I.arrow,16)}</button>
    </div></section>
  <h3 style="font-size:21px;margin:28px 0 10px">Konuya göre kişisel test</h3>
  <div class="tlist">${tids.map(tid=>{const gs=byTopic[tid], t=TOPIC[tid];
    return `<div class="trow">
      <span class="tw">${t?"Hafta "+[...new Set(gs.map(g=>weekOfSub(g.sub)))].join(", "):"Kitabım"}</span>
      <div class="tn-plain"><b>${esc(t?t.n:"Kendi başlıklarım")}</b>
        <div class="psubs">${gs.map(g=>`<span class="chip">${esc(subTitle(g.sub))} · ${g.ms.length} yanlış</span>`).join("")}</div></div>
      <div class="ts"><span class="pill no">${gs.reduce((s,g)=>s+g.ms.length,0)} açık yanlış</span></div>
      <div class="ta"><button type="button" class="btn sm primary" data-act="personal-start" data-v="${sel==="all"?tid:tid+"~"+sel}">${gs.length} soruluk test</button></div>
    </div>`}).join("")}</div>
  ${rs.length?`<section class="card mt"><h3>Kişisel testlerin</h3><ul class="rlist">${rs.slice(0,6).map(r=>`<li><div class="rt-t"><b>${esc(r.title)}</b><span>${fmtDate(r.date,true)} · ${r.correct}/${r.total} doğru · ${mmss(r.secs)}</span></div><span class="pill ${tone(pct(r))}">%${pct(r)}</span></li>`).join("")}</ul></section>`:""}`;
}

/* ================= Akıllı kitabım ================= */
/* Satırlar: {id,kind:"q"|"lesson",sub,created, soru: q,o,a,e,passage,ref,orig · anlatım: title,body|html,orig} */
const SUB_ORDER=[].concat(...TOPIC_BANK.map(t=>SUBS_OF[t.id]));
const orderSubs=ks=>ks.sort((a,b)=>{const ia=SUB_ORDER.indexOf(a),ib=SUB_ORDER.indexOf(b);return (ia<0?1e4:ia)-(ib<0?1e4:ib)||String(a).localeCompare(String(b),"tr")});
const newBookId=()=>"b-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);
const bookAll=()=>Object.values(mem.book).sort((a,b)=>a.created-b.created);
const bookLessons=s=>bookAll().filter(b=>b.kind==="lesson"&&b.sub===s);
const bookQuestions=s=>bookAll().filter(b=>b.kind==="q"&&(!s||b.sub===s));
const fmtBody=t=>esc(t).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/\n/g,"<br>");
const lessonBody=b=>b.html?b.html:`<p>${fmtBody(b.body||"")}</p>`;
function htmlToText(h){const d=document.createElement("div");
  d.innerHTML=String(h).replace(/<li>/g,"<li>• ").replace(/<\/(p|li|h4|div|ul)>/g,"$&\n").replace(/<br\s*\/?>/g,"\n");
  return d.textContent.replace(/[ \t]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim()}
/* Konu sayfasında ve yanlış defterinde, sitenin kendi anlatımının altında gösterilir (sitenin anlatımının kopyası tekrar gösterilmez) */
function bookLessonsHTML(s){const ls=bookLessons(s).filter(b=>b.orig!=="lesson:"+s);if(!ls.length)return "";
  return `<div class="my-lessons"><div class="lh">${svg(I.shelf,14)} Kitabımdaki anlatımım</div>${ls.map(b=>`<div class="prose">${b.title?`<h4>${esc(b.title)}</h4>`:""}${lessonBody(b)}</div>`).join("")}</div>`}
function bookAddBtn(q){
  if(!q||mem.book[q.id]) return "";
  return Object.values(mem.book).some(b=>b.orig===q.id)?`<span class="pill ok">Kitabında</span>`
    :`<button type="button" class="btn sm ghost" data-act="book-add-q" data-v="${esc(q.id)}">${svg(I.plus,14)} Kitabıma ekle</button>`;
}
function bookAddQuestion(id,el){
  const q=qById(id); if(!q) return;
  if(Object.values(mem.book).some(b=>b.orig===id)){toast("Bu soru zaten kitabında");return}
  dbPut("book",{id:newBookId(),kind:"q",orig:id,sub:q.sub,ref:q.ref||srcLabel(q.src),passage:passageOf(q),blank:q.blank||null,
    q:q.q,o:q.o.slice(),a:q.a,e:q.e||"",created:Date.now()});
  toast("Soru kitabına eklendi"); if(el) el.outerHTML=`<span class="pill ok">Kitabında</span>`;
}
function bookAddLesson(s){
  if(!LESSONS[s]) return;
  if(Object.values(mem.book).some(b=>b.orig==="lesson:"+s)){toast("Bu anlatım zaten kitabında");return}
  dbPut("book",{id:newBookId(),kind:"lesson",orig:"lesson:"+s,sub:s,title:subTitle(s),html:LESSONS[s].html,created:Date.now()});
  toast("Anlatım kitabına eklendi"); render();
}
function subOptions(sel){
  const mine=orderSubs([...new Set(bookAll().map(b=>b.sub).filter(s=>String(s).startsWith("my:")))]);
  return `<option value="" ${!sel?"selected":""} disabled>— Alt başlık seç —</option>
    <option value="__new">+ Yeni başlık yaz…</option>
    ${mine.length?`<optgroup label="Kendi başlıklarım">${mine.map(s=>`<option value="${esc(s)}" ${s===sel?"selected":""}>${esc(subTitle(s))}</option>`).join("")}</optgroup>`:""}
    ${TOPIC_BANK.map(t=>`<optgroup label="${esc(t.n)}">${SUBS_OF[t.id].map(s=>`<option value="${s}" ${s===sel?"selected":""}>${esc(subTitle(s))}</option>`).join("")}</optgroup>`).join("")}`;
}
function bookForm(){
  const b=BK.edit?mem.book[BK.edit]:null, isQ=BK.form==="q";
  const sel=b?b.sub:(BK.sub!=="all"?BK.sub:"");
  const subField=`<div class="grid g2">
      <div><label class="f" for="bfSub">Alt başlık</label><select id="bfSub">${subOptions(sel)}</select></div>
      <div id="bfNewWrap" hidden><label class="f" for="bfNew">Yeni başlık adı</label><input type="text" id="bfNew" maxlength="60" placeholder="Örn: Inversion kalıpları"></div>
    </div>`;
  const body=isQ?`${subField}
      <div><label class="f" for="bfRef">Kaynak (isteğe bağlı)</label><input type="text" id="bfRef" value="${esc(b&&b.ref||"")}" placeholder="Örn: YDS 2023/2 · Soru 18 ya da kitap adı"></div>
      <div><label class="f" for="bfPass">Paragraf (varsa)</label><textarea id="bfPass" placeholder="Paragraf veya cloze metni. Boşlukları ---- ile yaz.">${esc(b&&b.passage||"")}</textarea></div>
      <div><label class="f" for="bfStem">Soru kökü</label><textarea id="bfStem" placeholder="The committee ---- the proposal before the deadline.">${esc(b&&b.q||"")}</textarea></div>
      <fieldset style="border:0;padding:0;margin:0"><legend class="f" style="margin-bottom:6px">Şıklar · doğru olanı işaretle</legend>
        <div class="opt-grid">${"ABCDE".split("").map((L,j)=>`<div class="opt-in"><b>${L}</b><input type="radio" name="bfA" value="${j}" ${b&&b.a===j?"checked":""} aria-label="${L} doğru cevap"><input type="text" id="bfO${j}" value="${esc(b&&b.o?b.o[j]:"")}" aria-label="${L} şıkkı"></div>`).join("")}</div>
      </fieldset>
      <div><label class="f" for="bfExp">Açıklama (neden doğru?)</label><textarea id="bfExp" style="min-height:64px">${esc(b&&b.e||"")}</textarea></div>
      <div class="row"><button type="button" class="btn primary" data-act="book-save-q">${b?"Değişiklikleri kaydet":"Kitabıma ekle"}</button><button type="button" class="btn ghost" data-act="book-cancel">Vazgeç</button></div>`
    :`${subField}
      <div><label class="f" for="bfTitle">Anlatım başlığı (isteğe bağlı)</label><input type="text" id="bfTitle" value="${esc(b&&b.title||"")}" placeholder="Örn: By the time kalıbı"></div>
      <div><label class="f" for="bfBody">Anlatım</label><textarea id="bfBody" style="min-height:200px" placeholder="Kuralı kendi cümlelerinle yaz. Örnek cümleler, ipuçları, sık yaptığın hata…&#10;**kalın** yazmak için iki yıldız arasına al.">${esc(b?(b.html?htmlToText(b.html):b.body||""):"")}</textarea></div>
      <div class="row"><button type="button" class="btn primary" data-act="book-save-lesson">${b?"Değişiklikleri kaydet":"Kitabıma ekle"}</button><button type="button" class="btn ghost" data-act="book-cancel">Vazgeç</button></div>`;
  return `<section class="card mt" id="bookForm" style="scroll-margin-top:20px"><h3>${b?"Düzenle":isQ?"Kitabıma soru ekle":"Kitabıma konu anlatımı ekle"}</h3>
    <p class="sub">${isQ?"Eklediğin soru kitabında çözülebilir; yanlış yaparsan Yanlışlarım defterine, aynı başlıktaki kişisel testlerine de girer.":"Anlatımın, aynı alt başlığın konu sayfasında ve yanlış defterinde de gösterilir."}</p>
    <div class="form-grid">${body}</div></section>`;
}
function readBookSub(){
  const v=document.getElementById("bfSub").value;
  if(v==="__new"){const n=document.getElementById("bfNew").value.trim();return n?"my:"+n:null}
  return v||null;
}
function bookSaveQuestion(){
  const sub=readBookSub(); if(!sub){toast("Alt başlık seç ya da yeni başlık yaz");return}
  const stem=document.getElementById("bfStem").value.trim(), o=[0,1,2,3,4].map(j=>document.getElementById("bfO"+j).value.trim());
  const a=document.querySelector('input[name="bfA"]:checked');
  if(!stem){toast("Soru kökünü yaz");return}
  if(o.some(x=>!x)){toast("Beş şıkkın hepsini doldur");return}
  if(!a){toast("Doğru şıkkı işaretle");return}
  const old=BK.edit?mem.book[BK.edit]:null, id=old?old.id:newBookId();
  dbPut("book",Object.assign({},old||{created:Date.now()},{id,kind:"q",sub,ref:document.getElementById("bfRef").value.trim(),
    passage:document.getElementById("bfPass").value.trim(),q:stem,o,a:+a.value,e:document.getElementById("bfExp").value.trim()}));
  const m=mem.mistakes[id]; if(m&&m.sub!==sub) dbPut("mistakes",Object.assign({},m,{sub}));
  toast(old?"Soru güncellendi":"Soru kitabına eklendi"); BK.form=null; BK.edit=null; BK.sub="all"; render();
}
function bookSaveLesson(){
  const sub=readBookSub(); if(!sub){toast("Alt başlık seç ya da yeni başlık yaz");return}
  const body=document.getElementById("bfBody").value.trim(); if(!body){toast("Anlatımı yaz");return}
  const old=BK.edit?mem.book[BK.edit]:null, row=Object.assign({},old||{created:Date.now()},{id:old?old.id:newBookId(),kind:"lesson",sub,
    title:document.getElementById("bfTitle").value.trim(),body});
  if(old&&old.html&&htmlToText(old.html)!==body){delete row.html;delete row.orig}
  else if(old&&old.html) row.body=null;
  dbPut("book",row);
  toast(old?"Anlatım güncellendi":"Anlatım kitabına eklendi"); BK.form=null; BK.edit=null; BK.sub="all"; render();
}
function vBook(){
  const allRows=bookAll(), nq=allRows.filter(b=>b.kind==="q").length, nl=allRows.length-nq;
  const wCounts=weekCounts(allRows.map(b=>b.sub)), wSel=weekSel("book",wCounts);
  const rows=allRows.filter(b=>wkMatch(wSel,b.sub));
  const groups={}; rows.forEach(b=>(groups[b.sub]=groups[b.sub]||[]).push(b));
  const L="ABCDE", snip=t=>{t=String(t||"").replace(/-{4,}/g,"____").replace(/\s+/g," ").trim();return t.length>90?t.slice(0,88)+"…":t};
  return head("Kendi soruların, kendi anlatımların","Akıllı Kitabım",
    `Kitabında <b>${nq}</b> soru, <b>${nl}</b> anlatım var. Açık yanlışın olan her başlık için Çalış kutusunda yanlış testi çıkar; doğru oranın <b>%80</b>'in altına düşerse o başlığa yeni testler de eklenir.`,
    `<button type="button" class="btn" data-act="book-form" data-v="lesson">${svg(I.plus,16)} Anlatım ekle</button>`)
  +(BK.form?bookForm():"")
  +(allRows.length?weekTabs("book",wCounts,wSel):"")
  +studyCard(wSel,rows)
  +(!rows.length?`<div class="card mt">${emptyState("Kitabın boş","Testlerde ve Yanlışlarım sayfasında her sorunun altındaki “Kitabıma ekle” ile soru ekleyebilirsin. Kendi konu anlatımını yukarıdaki “Anlatım ekle” ile yazabilirsin.")}</div>`
   :`<h3 class="bk-h">Kitabımın içindekiler</h3>
    <p class="sub" style="margin-top:-4px">Bir başlığa tıkla, içindeki anlatımlar ve sorular açılsın.</p>
    <div class="bk-list">${orderSubs(Object.keys(groups)).map(s=>{const items=groups[s], t=TOPIC[SUB_TOPIC[s]];
      const ls=items.filter(b=>b.kind==="lesson"), qs=items.filter(b=>b.kind==="q");
      return `<details class="bk-sub" data-bkopen="${esc(s)}" ${BK.open.has(s)?"open":""}>
        <summary><span class="bk-t"><b>${esc(subTitle(s))}</b><small>${esc(t?t.n:"Kendi başlığım")}</small></span>
          <span class="bk-c">${[qs.length?qs.length+" soru":"",ls.length?ls.length+" anlatım":""].filter(Boolean).join(" · ")}</span></summary>
        <div class="bk-in">
        ${ls.map(b=>`<details class="bk-item"><summary><span class="bk-k">Anlatım</span><span class="bk-s">${esc(b.title||subTitle(s))}</span></summary>
          <div class="bk-body"><div class="prose">${lessonBody(b)}</div>
          <div class="bk-act"><button type="button" class="lnk" data-act="book-edit" data-v="${b.id}">Düzenle</button><button type="button" class="lnk danger" data-act="book-del" data-v="${b.id}">Sil</button></div></div></details>`).join("")}
        ${qs.map((b,i)=>{const m=mem.mistakes[b.id];
          return `<details class="bk-item"><summary><span class="bk-k">Soru ${i+1}</span><span class="bk-s">${esc(snip(b.q))}</span>
            ${m&&m.status==="open"?`<span class="pill no">Yanlış</span>`:answered[b.id]&&answered[b.id].ok?`<span class="pill ok">Doğru</span>`:""}</summary>
          <div class="bk-body">
            ${b.ref?`<div class="muted" style="font-size:12.5px;margin-bottom:6px">${esc(b.ref)}</div>`:""}
            ${b.passage?`<div class="passage">${fmtPassage(b.passage,b.blank)}</div>`:""}
            <div class="stem sm">${fmtStem(b.q)}</div>
            <ol class="bk-opts">${b.o.map((o,j)=>`<li><b>${L[j]})</b> ${fmtStem(o)}</li>`).join("")}</ol>
            <details class="fold" style="border:0"><summary style="padding:0 0 8px;font-size:14px">Cevabı göster</summary>${answerRows(b,null)}${b.e?`<p class="why">${esc(b.e)}</p>`:""}</details>
            <div class="bk-act"><button type="button" class="lnk" data-act="book-edit" data-v="${b.id}">Düzenle</button><button type="button" class="lnk danger" data-act="book-del" data-v="${b.id}">Sil</button></div>
          </div></details>`}).join("")}
        </div></details>`}).join("")}</div>`);
}

/* ================= Çalış: alt başlık başarı oranı ve tekrar testleri =================
   Kural: bir alt başlıkta çözdüğün bütün testlerdeki doğru oranın %80'in altındaysa o başlık "zayıf" sayılır
   ve o başlıktan yeni bir tekrar testi açılır. Test sayısı sınırsızdır; oran %80'e çıkınca — ya da son 20 sorunun
   en az 16'sı doğru olduğunda (eski yanlışlar toplam oranı aşağı çekmesin diye) — yeni test açılmaz.
   Test 1-2-3: havuzdaki (js/data/kisisel-*.js, tekrar-*.js) sorular, kolaydan zora.
   Test 4 ve sonrası: önce ekstra havuz (js/data/ekstra-*.js) ve bankadaki o başlığın soruları,
   onlar da bitince o başlıkta en çok zorlandığın 10 soru yeniden. */
const REVIEW_N=3, REVIEW_SIZE=10, SUB_GOAL=80, STAT_MIN=3;
/* Hedef: son ${RECENT} sorunun en az ${NEED} tanesi doğru. Toplam oran %80'e çıkmasa da son sorularda hedefi tutturursan yeni test açılmaz. */
const RECENT=20, RECENT_MIN=10, NEED=Math.ceil(RECENT*SUB_GOAL/100);
function hashStr(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
const stableOrder=(ids,salt)=>ids.slice().sort((a,b)=>hashStr(a+salt)-hashStr(b+salt));

/* --- Başarı oranı: çözdüğün bütün testlerin soruları alt başlığa göre toplanır --- */
let _stat={key:"",val:null};
function subStats(){
  const rs=Object.values(mem.results);
  const key=rs.length+"|"+rs.reduce((m,r)=>Math.max(m,r.ts||0),0);
  if(_stat.key===key&&_stat.val) return _stat.val;
  const seq={};  /* alt başlık → cevapların doğru/yanlış dizisi, eskiden yeniye */
  rs.slice().sort((a,b)=>(a.ts||0)-(b.ts||0)).forEach(r=>{const wrong=new Set(r.wrong||[]);
    (r.ids||[]).forEach(id=>{const q=qById(id); if(!q||!q.sub)return;
      (seq[q.sub]=seq[q.sub]||[]).push(!wrong.has(id))})});
  const st={};
  Object.keys(seq).forEach(k=>{
    const a=seq[k], last=a.slice(-RECENT), ok=a.filter(Boolean).length, rok=last.filter(Boolean).length;
    const s=st[k]={n:a.length,ok,p:Math.round(ok/a.length*100),rn:last.length,rok,rp:Math.round(rok/last.length*100),son:last};
    s.fixed=s.rn>=RECENT_MIN&&s.rp>=SUB_GOAL;               /* son sorularda hedefi tutturdu */
    s.weak=s.n>=STAT_MIN&&s.p<SUB_GOAL&&!s.fixed;
  });
  _stat={key,val:st}; return st;
}
const subStat=sub=>subStats()[sub]||null;
const isWeak=sub=>{const s=subStat(sub);return !!(s&&s.weak)};
/* Hedefe girmek için üst üste kaç doğru gerekiyor: her yeni doğru, pencerenin başındaki en eski cevabı dışarı iter */
function needFor(s){
  const dizi=(s&&s.son)||[];
  for(let k=0;k<=RECENT;k++){
    const pencere=dizi.slice(Math.max(0,dizi.length-(RECENT-k))).concat(Array(k).fill(true));
    if(pencere.length>=RECENT_MIN&&pencere.filter(Boolean).length/pencere.length*100>=SUB_GOAL) return k;
  }
  return RECENT;
}

/* --- Soru havuzları --- */
const diffOf=id=>ZORLUK[id]||5;
const byDiff=ids=>ids.slice().sort((a,b)=>diffOf(a)-diffOf(b));
const bookCopies=()=>{const s=new Set();Object.values(mem.book).forEach(b=>{if(b.orig)s.add(b.orig)});return s};
/* Kitabındaki başlıklar ve ağırlıkları (her soru 1, her anlatım 0,5) — karma test için */
function reviewSubs(sel="all"){
  const w={};
  bookAll().forEach(b=>{if(wkMatch(sel,b.sub))w[b.sub]=(w[b.sub]||0)+(b.kind==="q"?1:.5)});
  return orderSubs(Object.keys(w)).map(sub=>({sub,w:w[sub]}));
}
/* Test 1-3'ün havuzu: kitaba eklediklerin çıkarılır, kolaydan zora sıralanır */
function reviewPool(sub,salt){
  const inBook=bookCopies();
  const ids=stableOrder((PRAC_OF[sub]||[]).filter(id=>!inBook.has(id)),"|"+sub+(salt||""));
  return salt?ids:byDiff(ids);
}
/* Test 4 ve sonrası için yeni sorular: ekstra havuz + bankadaki o başlığın soruları */
function extraPool(sub){
  const skip=bookCopies();
  const ekstra=byDiff((EXTRA_OF[sub]||[]).filter(id=>!skip.has(id)));
  const bank=byDiff(Object.values(Q).filter(q=>q.sub===sub&&q.src!=="personal"&&!skip.has(q.id)).map(q=>q.id));
  return ekstra.concat(bank);
}
/* Yeni soru kalmadığında kurulan tur: yarısı zorlandığın sorulardan, yarısı geri kalanlardan.
   Aynı sorular arka arkaya gelmesin diye her turun kendi karışık sırası var. */
function againIds(sub,round){
  const bk=Object.values(mem.book).filter(b=>b.kind==="q"&&b.sub===sub).map(b=>b.id);
  const all=[...new Set(reviewPool(sub).concat(extraPool(sub)).concat(bk))];
  const hard=id=>{const m=mem.mistakes[id];if(m&&m.status==="open")return true;const a=answered[id];return !!(a&&!a.ok)};
  const hot=stableOrder(all.filter(hard),"|h"+round), cool=stableOrder(all.filter(id=>!hard(id)),"|c"+round);
  const take=hot.slice(0,Math.min(Math.ceil(REVIEW_SIZE/2),hot.length));
  return take.concat(cool,hot.slice(take.length)).slice(0,REVIEW_SIZE);
}
/* Alt başlığın n. tekrar testi */
function subTest(sub,n){
  if(n<=REVIEW_N){const ids=reviewPool(sub).slice((n-1)*REVIEW_SIZE,n*REVIEW_SIZE);
    return ids.length?{ids,kind:"base",lvl:["Kolay","Orta","Zor"][n-1]}:null}
  const k=n-REVIEW_N-1, fresh=extraPool(sub).slice(k*REVIEW_SIZE,(k+1)*REVIEW_SIZE);
  if(fresh.length>=6) return {ids:fresh,kind:"new",lvl:"Yeni sorular"};
  const again=againIds(sub,k);
  if(again.length) return {ids:again,kind:"again",lvl:"Zorlandıkların"};
  return fresh.length?{ids:fresh,kind:"new",lvl:"Yeni sorular"}:null;
}
const testSrc=(key,n)=>`review:${key}:${n}`;
const solvedTest=(key,n)=>bestOf(testSrc(key,n))!==null;
/* Alt başlığın çalışma durumu: kaç test görünecek, sırada hangi test var */
function subPlan(sub){
  const s=subStat(sub), weak=!!(s&&s.weak);
  let count=REVIEW_N, n=REVIEW_N+1;
  while(solvedTest(sub,n)&&subTest(sub,n)){count=n;n++}            /* çözdüğün ekstra testler listede kalır */
  if(weak&&subTest(sub,n)) count=n;                                 /* oran %80'in altındaysa bir yeni test daha açılır */
  while(count>1&&!subTest(sub,count)) count--;
  let next=0; for(let i=1;i<=count;i++) if(!solvedTest(sub,i)){next=i;break}
  return {s,p:s?s.p:null,weak,count,next:next||count,done:!next};
}

/* --- Karma test (kitabındaki bütün başlıklardan) --- */
function reviewMixTests(sel="all"){
  const subs=reviewSubs(sel).filter(x=>(PRAC_OF[x.sub]||[]).length);
  if(!subs.length) return [];
  const q={}, taken={}; subs.forEach(x=>{q[x.sub]=reviewPool(x.sub,"|mix");taken[x.sub]=0});
  const slots=[];
  while(slots.length<REVIEW_N*REVIEW_SIZE){
    let best=null;
    subs.forEach(x=>{if(taken[x.sub]<q[x.sub].length){const s=x.w/(taken[x.sub]+1);if(!best||s>best.s)best={sub:x.sub,s}}});
    if(!best)break;
    slots.push(q[best.sub][taken[best.sub]++]);
  }
  const sorted=byDiff(slots), tests=[], size=Math.ceil(sorted.length/REVIEW_N);
  for(let k=0;k<REVIEW_N;k++){const ids=sorted.slice(k*size,(k+1)*size);if(ids.length)tests.push(ids)}
  return tests;
}
function startReview(key,n){
  /* karma anahtarı: "mix" (tüm haftalar) ya da "mix@N" (N. hafta) */
  if(key==="mix"||key.startsWith("mix@")){
    const sel=key.startsWith("mix@")?+key.slice(4):"all", ids=reviewMixTests(sel)[n-1];
    if(!ids){toast("Bu test için yeterli soru yok");return}
    const lvl=["kolay","orta","zor"][n-1]||"";
    startTest({title:`Tekrar testi ${n}${lvl?" ("+lvl+")":""} · Karma${sel==="all"?"":sel?" · Hafta "+sel:" · Kendi başlıklarım"}`,src:testSrc(key,n),ids,back:"book"});
    return;
  }
  const t=subTest(key,n);
  if(!t){toast("Bu test için yeterli soru yok");return}
  startTest({title:`Tekrar testi ${n} (${t.lvl.toLowerCase()}) · ${subTitle(key)}`,src:testSrc(key,n),ids:t.ids,back:"book"});
}
/* Sıradaki testi başlat: çözmediğin ilk test, hepsini çözdüysen sonuncusu */
function startNext(key){
  if(key==="mix"||key.startsWith("mix@")){
    const tests=reviewMixTests(key.startsWith("mix@")?+key.slice(4):"all");
    let n=1; while(n<tests.length&&solvedTest(key,n))n++;
    startReview(key,n); return;
  }
  startReview(key,subPlan(key).next);
}

/* --- Çalış kutusu --- */
function testBtns(key,count){
  let out="";
  for(let n=1;n<=count;n++){
    const t=key==="mix"||key.startsWith("mix@")?{lvl:["Kolay","Orta","Zor"][n-1]||""}:subTest(key,n);
    if(!t)break;
    const b=bestOf(testSrc(key,n));
    out+=`<button type="button" class="rv-btn ${b===null?"":b>=SUB_GOAL?"ok":"no"}" data-act="review-start" data-v="${esc(key)}" data-n="${n}">
      <b>Test ${n}</b><span>${t.lvl}${b===null?"":" · %"+b}</span></button>`;
  }
  return out;
}
function subNote(pl){
  const s=pl.s;
  if(!s) return "Bu başlıkta henüz test çözmedin.";
  const tot=`Çözdüğün testlerde bu başlıktan toplam <b>${s.ok}/${s.n}</b> doğru (%${s.p}).`;
  if(s.n<STAT_MIN) return `${tot} Oranın oturması için birkaç soru daha çöz.`;
  const son=`Son ${s.rn} soruda <b>${s.rok}</b> doğru (%${s.rp}).`;
  if(pl.weak) return `${tot} ${son} Hedef: son ${RECENT} sorunun en az %${SUB_GOAL}'i doğru olsun${needFor(s)?` — bunun için <b>üst üste ${needFor(s)} doğru</b> yapman yeterli`:", iyi gidiyorsun"}. Bu başlığın soruları <b>hangi testte çıkarsa çıksın</b> sayılır (mini test, konu testi, tekrar testi, yanlış testi, kişisel test); testi bitirmen gerekir. Hedefe ulaşana kadar burada yeni test açılır.`;
  if(s.fixed&&s.p<SUB_GOAL) return `${tot} ${son} Son sorularda hedefi tutturdun, yeni test açılmıyor.`;
  return `${tot} Hedefin üstündesin.`;
}
function subRow(sub,pl){
  const t=TOPIC[SUB_TOPIC[sub]], s=pl.s;
  /* oran yalnızca en az ${STAT_MIN} soru çözülmüşse gösterilir; 1-2 soruya bakıp "%100" demek yanıltıcı olur */
  const p=s&&s.n>=STAT_MIN?(s.rn>=RECENT_MIN?s.rp:s.p):null;
  const state=p===null?"":pl.weak?"weak":s.p>=SUB_GOAL?"good":"mid";
  let solved=0; for(let i=1;i<=pl.count;i++) if(solvedTest(sub,i)) solved++;
  const info=`${solved}/${pl.count} test çözüldü`+(s?` · ${s.n} soru`:"");
  return `<details class="st-sub ${state}" data-bkopen="rv:${esc(sub)}" ${BK.open.has("rv:"+sub)?"open":""}>
    <summary title="${esc(t?t.n:"Kendi başlığım")}">
      <span class="st-nm"><b>${esc(subTitle(sub))}</b><small>${info}</small></span>
      <span class="st-bar" aria-hidden="true"><i style="width:${p===null?0:Math.max(3,p)}%"></i></span>
      <span class="st-pct">${p===null?`<small>${s?"az veri":"çözülmedi"}</small>`:"%"+p}</span>
      <button type="button" class="btn sm ${pl.weak?"primary":""}" data-act="study-next" data-v="${esc(sub)}">${pl.done?"Tekrar çöz":"Çöz"}</button>
    </summary>
    <div class="st-in"><p class="st-note">${subNote(pl)}</p><div class="rv-tests">${testBtns(sub,pl.count)}</div></div>
  </details>`;
}
/* --- Yanlış testi: bir alt başlıkta açık yanlışın varsa, oranın kaç olursa olsun --- */
const WRONG_SIZE=8;
/* Açık yanlışı olan alt başlıklar, en çok yanlıştan başlayarak */
function wrongSubs(){
  const g={};
  Object.values(mem.mistakes).forEach(m=>{if(m.status==="open"&&qById(m.id))(g[m.sub]=g[m.sub]||[]).push(m.id)});
  return Object.keys(g).map(sub=>({sub,ids:g[sub]})).sort((a,b)=>b.ids.length-a.ids.length);
}
/* Test içeriği: önce yanlışlarının kuralını yeniden soran sorular, sonra hiç çözmediklerin, en sona eski yanlışların */
function wrongTest(sub){
  const acik=Object.values(mem.mistakes).filter(m=>m.status==="open"&&m.sub===sub&&qById(m.id)).map(m=>m.id);
  if(!acik.length) return null;
  const havuz=(PRAC_OF[sub]||[]).concat(EXTRA_OF[sub]||[]);
  /* Yanlış yaptığın sorunun kendisi ve onun dayandığı banka soruları: aynı kuralı soran bütün sorular hedefli sayılır */
  const kok=new Set(); acik.forEach(id=>{kok.add(id);((qById(id)||{}).from||[]).forEach(f=>kok.add(f))});
  const hedefli=havuz.filter(id=>!acik.includes(id)&&((Q[id]||{}).from||[]).some(f=>kok.has(f))&&!(answered[id]&&answered[id].ok));
  const yeni=havuz.filter(id=>!answered[id]&&!hedefli.includes(id));
  /* 2 tanesi yanlış yaptığın soruların kendisi (doğru çözersen defterden kapanır), gerisi aynı kuralı soran yeni sorular */
  const eski=stableOrder(acik,"|e"+acik.length).slice(0,2);
  const yeniler=[...new Set(stableOrder(hedefli,"|h").concat(stableOrder(yeni,"|y")))].slice(0,Math.max(0,WRONG_SIZE-eski.length));
  const ids=yeniler.concat(eski);
  return ids.length?ids:null;
}
function startWrong(sub){
  const ids=wrongTest(sub);
  if(!ids){toast("Bu başlıkta açık yanlışın yok");return}
  const acik=Object.values(mem.mistakes).filter(m=>m.status==="open"&&m.sub===sub);
  const focus={}; ids.forEach(id=>{if(!acik.some(m=>m.id===id))focus[id]={sub,n:acik.length,hits:0,ids:acik.map(m=>m.id)}});
  startTest({title:`${subTitle(sub)} · Yanlış testi`,src:`wrong:${sub}`,ids,back:"book",focus});
}
const WEAK_SHOWN=5;
function studyCard(sel,rows){
  const nq=rows.filter(b=>b.kind==="q").length;
  const mix=reviewMixTests(sel), mixKey=sel==="all"?"mix":"mix@"+sel;
  const hasPool=s=>(PRAC_OF[s]||[]).length||(EXTRA_OF[s]||[]).length;
  const plan=sub=>({sub,pl:subPlan(sub)});
  /* Zayıf başlıklar hafta seçiminden bağımsızdır: oran %80'in altındaysa hangi hafta olursa olsun burada görünür */
  const weak=Object.keys(subStats()).filter(s=>isWeak(s)&&hasPool(s)).map(plan)
    .filter(x=>x.pl.count>0).sort((a,b)=>a.pl.p-b.pl.p);
  const weakSet=new Set(weak.map(x=>x.sub));
  const rest=orderSubs(reviewSubs(sel).map(x=>x.sub).filter(s=>hasPool(s)&&!weakSet.has(s)))
    .map(plan).filter(x=>x.pl.count>0);
  const plans=weak.concat(rest);
  const yanlis=wrongSubs().filter(x=>wrongTest(x.sub));
  if(!plans.length&&!yanlis.length&&!nq&&!mix.length) return "";
  const where=sel==="all"?"Kitabındaki":sel===0?"Kendi başlıklarındaki":`Hafta ${sel} başlıklarındaki`;
  /* Sıradaki tek eylem: en zayıf başlık → çözülmemiş testi olan başlık → karma test */
  /* Sıradaki: önce açık yanlışın olan başlık, sonra oranı düşük olan */
  const pick=weak[0]||plans.find(x=>!x.pl.done)||plans[0];
  const next=yanlis.length?{act:"wrong-start",v:yanlis[0].sub,t:subTitle(yanlis[0].sub),
      n:`Yanlış testi · ${wrongTest(yanlis[0].sub).length} soru · ${yanlis[0].ids.length} açık yanlışın var`}
    :pick
    ? {act:"study-next",v:pick.sub,t:subTitle(pick.sub),
       n:`Test ${pick.pl.next} · 10 soru`+(pick.pl.s&&pick.pl.s.n>=STAT_MIN?` · şu an %${pick.pl.p}`:" · bu başlıkta ilk testin")+(pick.pl.weak?", hedef %80":"")}
    : mix.length?{act:"study-next",v:mixKey,t:"Karma tekrar testi",n:"10 soru · bütün başlıklardan karışık"}
    : {act:"book-solve",v:sel==="all"?"all":"w:"+sel,t:"Kendi eklediğim sorular",n:`${nq} soru`};
  return `<section class="card lift mt study">
    <div class="st-head"><h3>Çalış</h3><span class="st-goal">Hedef: her başlıkta <b>%80</b> doğru</span></div>
    <div class="st-next">
      <div class="st-t"><div class="eyebrow">Sıradaki</div><b>${esc(next.t)}</b><span>${esc(next.n)}</span></div>
      <button type="button" class="btn primary" data-act="${next.act}" data-v="${esc(next.v)}">Başla ${svg(I.arrow,16)}</button>
    </div>
    ${yanlis.length?`<p class="st-lead">Yanlış yaptığın ${yanlis.length} başlık var; her testte o yanlışların kuralı yeni sorularla yeniden sorulur.</p>
      <div class="st-subs">${yanlis.slice(0,WEAK_SHOWN).map(x=>`<div class="st-sub2">
        <div class="st-nm"><b>${esc(subTitle(x.sub))}</b><small>${x.ids.length} açık yanlış · ${wrongTest(x.sub).length} soruluk test</small></div>
        <button type="button" class="btn sm primary" data-act="wrong-start" data-v="${esc(x.sub)}">Çöz</button></div>`).join("")}</div>
      ${yanlis.length>WEAK_SHOWN?`<details class="st-more" data-bkopen="__wr" ${BK.open.has("__wr")?"open":""}>
        <summary>Yanlışın olan diğer başlıklar (${yanlis.length-WEAK_SHOWN})</summary>
        <div class="st-subs">${yanlis.slice(WEAK_SHOWN).map(x=>`<div class="st-sub2">
          <div class="st-nm"><b>${esc(subTitle(x.sub))}</b><small>${x.ids.length} açık yanlış</small></div>
          <button type="button" class="btn sm" data-act="wrong-start" data-v="${esc(x.sub)}">Çöz</button></div>`).join("")}</div></details>`:""}`:""}
    ${weak.length?`<p class="st-lead">${weak.length} başlıkta oranın %80'in altında; en düşükten başlar. Bir başlığa dokunursan testleri açılır.</p>
      <div class="st-subs">${weak.slice(0,WEAK_SHOWN).map(x=>subRow(x.sub,x.pl)).join("")}</div>
      ${weak.length>WEAK_SHOWN?`<details class="st-more" data-bkopen="__weak" ${BK.open.has("__weak")?"open":""}>
        <summary>Oranı düşük diğer başlıklar (${weak.length-WEAK_SHOWN})</summary>
        <div class="st-subs">${weak.slice(WEAK_SHOWN).map(x=>subRow(x.sub,x.pl)).join("")}</div></details>`:""}`
     :plans.length?`<p class="st-lead">Bütün başlıkların hedefin üstünde. İstersen aşağıdan tekrar testi çözebilirsin.</p>`:""}
    ${rest.length?`<details class="st-more" data-bkopen="__ok" ${BK.open.has("__ok")?"open":""}>
      <summary>${where} diğer başlıklar (${rest.length})</summary>
      <div class="st-subs">${rest.map(x=>subRow(x.sub,x.pl)).join("")}</div></details>`:""}
    <details class="st-more" data-bkopen="__mix" ${BK.open.has("__mix")?"open":""}>
      <summary>Karma test ve kendi sorularım</summary>
      ${mix.length?`<div class="st-sub2"><div class="st-nm"><b>Karma tekrar testi</b><small>${where} bütün başlıklardan, kolaydan zora</small></div>
        <div class="rv-tests">${testBtns(mixKey,mix.length)}</div></div>`:""}
      ${nq?`<div class="st-sub2"><div class="st-nm"><b>Kendi eklediğim sorular</b><small>${where} ${nq} soru, tek tek</small></div>
        <button type="button" class="btn sm" data-act="book-solve" data-v="${sel==="all"?"all":"w:"+sel}">Çöz</button></div>`:""}
    </details>
  </section>`;
}

/* ================= Tekrar paneli =================
   Akıllı Kitabım'daki "Çalış" kutusundan bağımsızdır: orası yanlışlarına göre çalışır,
   burası ise konu konu tekrar içindir. Her konunun tamamından 20 soruluk sınavlar,
   her alt başlıktan 10 soruluk testler; havuzun tamamı (konu bankası + haftalık + pratik + ekstra) kullanılır. */
const REV_SIZE=10, EXAM_SIZE=20, EXAM_MAX=12;
const _revPool={};
/* Bir alt başlığın bütün soruları, kolaydan zora (eşit zorluktakiler sabit bir karışık sırada) */
function revPool(sub){
  if(_revPool[sub]) return _revPool[sub];
  const ids=Object.values(Q).filter(q=>q.sub===sub).map(q=>q.id);
  return _revPool[sub]=byDiff(stableOrder(ids,"|rev"+sub));
}
const revCount=sub=>Math.ceil(revPool(sub).length/REV_SIZE);
/* Mini testler: konu sayfasında anlatımın hemen altında, adım adım ilerlemek için.
   Havuzun en kolay ucundan alınır (kolaydan zora sıralı olduğu için ilk sorular). */
const MINI_SIZE=5, MINI_N=3;
const miniTest=(sub,n)=>{const ids=revPool(sub).slice((n-1)*MINI_SIZE,n*MINI_SIZE);return ids.length?ids:null};
function startMini(sub,n){
  const ids=miniTest(sub,n);
  if(!ids){toast("Bu başlıkta yeterli soru yok");return}
  startTest({title:`${subTitle(sub)} · Mini test ${n}`,src:`mini:${sub}:${n}`,ids,back:"topic"});
}
function miniBtns(sub){
  let out="";
  for(let n=1;n<=MINI_N;n++){
    const ids=miniTest(sub,n); if(!ids)break;
    const b=bestOf(`mini:${sub}:${n}`);
    out+=`<button type="button" class="rv-btn ${b===null?"":b>=SUB_GOAL?"ok":"no"}" data-act="mini-start" data-v="${esc(sub)}" data-n="${n}">
      <b>Mini test ${n}</b><span>${ids.length} soru${b===null?"":" · %"+b}</span></button>`;
  }
  return out;
}
const revTest=(sub,n)=>{const ids=revPool(sub).slice((n-1)*REV_SIZE,n*REV_SIZE);return ids.length?ids:null};
/* Konu sınavı havuzu: alt başlıklardan sırayla birer soru alınır, böylece her sınav bütün alt başlıkları kapsar */
function examPool(tid){
  const subs=(SUBS_OF[tid]||[]).filter(s=>revPool(s).length), out=[];
  for(let i=0,eklendi=true;eklendi;i++){eklendi=false;subs.forEach(s=>{const id=revPool(s)[i];if(id){out.push(id);eklendi=true}})}
  return out;
}
function examTests(tid){
  const pool=examPool(tid), tests=[];
  for(let k=0;k*EXAM_SIZE<pool.length&&tests.length<EXAM_MAX;k++){
    const ids=byDiff(pool.slice(k*EXAM_SIZE,(k+1)*EXAM_SIZE));
    if(ids.length>=EXAM_SIZE/2) tests.push(ids);
  }
  return tests;
}
/* Konunun bütün alt başlıklarındaki doğru oranı */
function topicStat(tid){
  const st=subStats(); let n=0,ok=0;
  (SUBS_OF[tid]||[]).forEach(s=>{const x=st[s];if(x){n+=x.n;ok+=x.ok}});
  return n?{n,ok,p:Math.round(ok/n*100)}:null;
}
const nextIdx=(key,len,src)=>{let n=1;while(n<len&&bestOf(src(n))!==null)n++;return n};
function startExam(tid,n){
  const ids=examTests(tid)[n-1];
  if(!ids){toast("Bu sınav için yeterli soru yok");return}
  startTest({title:`${TOPIC[tid]?TOPIC[tid].n:""} · Sınav ${n}`,src:`exam:${tid}:${n}`,ids,back:"review"});
}
function startRev(sub,n){
  const ids=revTest(sub,n);
  if(!ids){toast("Bu test için yeterli soru yok");return}
  startTest({title:`${subTitle(sub)} · Tekrar ${n}`,src:`rev:${sub}:${n}`,ids,back:"review"});
}
function revBtns(kind,key,count){
  let out="";
  for(let n=1;n<=count;n++){
    const src=`${kind}:${key}:${n}`, b=bestOf(src);
    out+=`<button type="button" class="rv-btn ${b===null?"":b>=SUB_GOAL?"ok":"no"}" data-act="${kind}-start" data-v="${esc(key)}" data-n="${n}">
      <b>${kind==="exam"?"Sınav":"Test"} ${n}</b><span>${kind==="exam"?EXAM_SIZE:REV_SIZE} soru${b===null?"":" · %"+b}</span></button>`;
  }
  return out;
}
function vReview(){
  const toplam=TOPIC_BANK.reduce((a,t)=>a+(SUBS_OF[t.id]||[]).reduce((b,s)=>b+revPool(s).length,0),0);
  return head("Konu konu tekrar","Tekrar",
    `Bir konunun tamamından <b>${EXAM_SIZE} soruluk sınav</b>, alt başlıklarından <b>${REV_SIZE} soruluk test</b> çözersin. Sorular kolaydan zora gelir ve havuzun tamamı (<b>${toplam}</b> soru) kullanılır; burada yanlış filtresi yoktur, istediğin konuyu istediğin zaman tekrar edebilirsin.`)
  +`<div class="st-subs">${TOPIC_BANK.map(t=>{
    const subs=(SUBS_OF[t.id]||[]).filter(s=>revPool(s).length);
    const exams=examTests(t.id), st=topicStat(t.id), n=subs.reduce((a,s)=>a+revPool(s).length,0);
    const p=st&&st.n>=STAT_MIN?st.p:null;
    const durum=p===null?"":p>=SUB_GOAL?"good":p<SUB_GOAL-20?"weak":"mid";
    const sirada=exams.length?nextIdx("exam",exams.length,x=>`exam:${t.id}:${x}`):0;
    return `<details class="st-sub ${durum}" data-bkopen="rv-t:${esc(t.id)}" ${BK.open.has("rv-t:"+t.id)?"open":""}>
      <summary title="${esc(t.gr||t.n)}">
        <span class="st-nm"><b>${esc(t.n)}</b><small>Hafta ${t.week} · ${subs.length} alt başlık · ${n} soru</small></span>
        <span class="st-bar" aria-hidden="true"><i style="width:${p===null?0:Math.max(3,p)}%"></i></span>
        <span class="st-pct">${p===null?"<small>yeni</small>":"%"+p}</span>
        ${exams.length?`<button type="button" class="btn sm primary" data-act="exam-start" data-v="${esc(t.id)}" data-n="${sirada}">Sınav ${sirada}</button>`:""}
      </summary>
      <div class="st-in">
        ${exams.length?`<p class="st-note"><b>Konu sınavı:</b> ${EXAM_SIZE} soru, bütün alt başlıklardan karışık, kolaydan zora. ${exams.length} sınav var.</p>
          <div class="rv-tests">${revBtns("exam",t.id,exams.length)}</div>`:""}
        <p class="st-note" style="margin-top:14px"><b>Alt başlık testleri:</b> her başlıkta ${REV_SIZE}'ar soruluk testler.</p>
        <div class="rev-subs">${subs.map(s=>{
          const ss=subStat(s), sp=ss&&ss.n>=STAT_MIN?ss.p:null, c=revCount(s);
          return `<div class="rev-sub">
            <div class="st-nm"><b>${esc(subTitle(s))}</b><small>${revPool(s).length} soru${sp===null?"":" · %"+sp+" doğru"}</small></div>
            <div class="rv-tests">${revBtns("rev",s,c)}</div>
          </div>`}).join("")}</div>
      </div>
    </details>`}).join("")}</div>`;
}

/* ================= Önemli tarihler =================
   Takvim sayfasının üstünde geri sayım olarak görünür: "YDS sınavına 42 gün kaldı" gibi.
   Kayıt: dates = [{id, title, kind, date}] · kind: sinav | basvuru | sonuc | diger */
const EV_KIND={
  sinav:{t:"Sınav",s:"sınavına",n:"sınavı"},
  basvuru:{t:"Başvuru",s:"başvurusuna",n:"başvurusu"},
  sonuc:{t:"Sonuç açıklanması",s:"sonucuna",n:"sonucu"},
  diger:{t:"Diğer",s:"için",n:""}
};
const evKind=k=>EV_KIND[k]||EV_KIND.diger;
const daysTo=iso=>Math.round((new Date(iso+"T00:00")-new Date(todayISO()+"T00:00"))/864e5);
const datesSorted=()=>dates.slice().sort((a,b)=>a.date<b.date?-1:a.date>b.date?1:0);
const datesOn=iso=>dates.filter(d=>d.date===iso);
const evLabel=d=>`${d.title}${evKind(d.kind).n?" "+evKind(d.kind).n:""}`;
function evText(d){
  const k=evKind(d.kind), n=daysTo(d.date);
  if(n>0) return `${esc(d.title)} ${k.s} <b>${n} gün</b> kaldı`;
  if(n===0) return `${esc(evLabel(d))} <b>bugün</b>`;
  return `${esc(evLabel(d))} geçti <span class="muted">(${-n} gün önce)</span>`;
}
function evRow(d){
  const n=daysTo(d.date), wd=new Date(d.date+"T00:00").toLocaleDateString("tr-TR",{weekday:"long"});
  return `<li class="${n<0?"gone":n===0?"now":n<=7?"soon":""}">
    <span class="ev-n">${n<0?"—":n===0?"<b>bugün</b>":`<b>${n}</b><span>gün</span>`}</span>
    <div class="ev-t"><b>${evText(d)}</b><span>${fmtDate(d.date)} · ${esc(wd)}</span></div>
    <button type="button" class="lnk danger" data-act="ev-del" data-v="${esc(d.id)}">Sil</button>
  </li>`;
}
function evForm(){
  return `<div class="card sunk mt" id="evForm">
    <div class="form-grid">
      <div class="grid g2">
        <div><label class="f" for="evTitle">Ne için?</label><input type="text" id="evTitle" maxlength="40" placeholder="Örn: YDS 2027/1"></div>
        <div><label class="f" for="evKind">Tür</label><select id="evKind">${Object.keys(EV_KIND).map(k=>`<option value="${k}">${EV_KIND[k].t}</option>`).join("")}</select></div>
      </div>
      <div class="grid g2">
        <div><label class="f" for="evDate">Tarih</label><input type="date" id="evDate" value="${todayISO()}"></div>
        <div></div>
      </div>
      <div class="row"><button type="button" class="btn primary" data-act="ev-save">Ekle</button><button type="button" class="btn ghost" data-act="ev-cancel">Vazgeç</button></div>
    </div>
  </div>`;
}
function vDates(){
  const list=datesSorted(), up=list.filter(d=>daysTo(d.date)>=0), gecmis=list.filter(d=>daysTo(d.date)<0).reverse();
  return `<section class="card ev-card">
    <div class="st-head"><h3>Önemli tarihler</h3>
      <button type="button" class="btn sm" data-act="ev-form">${svg(I.plus,15)} Tarih ekle</button></div>
    ${CAL.form?evForm():""}
    ${up.length?`<ul class="ev-list">${up.map(evRow).join("")}</ul>`
      :`<p class="sub" style="margin:10px 0 0">Sınav, başvuru ve sonuç tarihlerini ekle; kaç gün kaldığı burada ve takvimde görünsün.</p>`}
    ${gecmis.length?`<details class="st-more" data-bkopen="ev:past" ${BK.open.has("ev:past")?"open":""}>
      <summary>Geçmiş tarihler (${gecmis.length})</summary>
      <ul class="ev-list past">${gecmis.map(evRow).join("")}</ul></details>`:""}
  </section>`;
}
function evSave(){
  const title=document.getElementById("evTitle").value.trim();
  const date=document.getElementById("evDate").value, kind=document.getElementById("evKind").value;
  if(!title){toast("Ne için olduğunu yaz");return}
  if(!date){toast("Bir tarih seç");return}
  dates.push({id:"e-"+Date.now(),title,kind,date});
  save(); CAL.form=false; CAL.y=null; CAL.m=null; CAL.sel=date; toast("Tarih eklendi"); render();
}

/* ================= Takvim =================
   Her cevap o günün kaydına kendiliğinden yazılır: daily[gün].auto = {q: soru, ok: doğru, secs: süre, subs: {altBaşlık: soru}}.
   Bu özellikten önceki günler için test sonuçlarından (results) hesaplanır. */
function logAnswer(q,ok){
  const iso=todayISO(), r=daily[iso]=daily[iso]||{routine:{}}, a=r.auto=r.auto||{q:0,ok:0,secs:0,subs:{}};
  const now=Date.now(), since=T?(T.lastAt||T.start):now;
  a.q++; if(ok) a.ok++;
  a.secs+=Math.min(300,Math.max(0,Math.round((now-since)/1000))); /* soru başına en çok 5 dk sayılır */
  if(T) T.lastAt=now;
  a.subs[q.sub]=(a.subs[q.sub]||0)+1;
}
/* Aktif çalışma süresi: soru cevaplarken geçen süre logAnswer'da sayılır; paragraf okuma, kelime çalışma,
   anlatım okuma gibi soru dışı çalışma burada sayılır → daily[gün].auto.act (sn).
   Yalnız çalışma sayfalarında, sekme görünürken ve son 2 dakikada fare/klavye/dokunma/kaydırma varsa sayılır. */
const STUDY_PAGES=new Set(["words","mywords","topics","topic","review","weekly","mistakes","personal","book","result"]);
const ACT_TICK=15, ACT_IDLE=120000;
let _lastAct=Date.now(), _actTicks=0;
["mousemove","mousedown","keydown","scroll","touchstart","input","wheel"].forEach(ev=>addEventListener(ev,()=>{_lastAct=Date.now()},{passive:true,capture:true}));
setInterval(()=>{
  if(document.hidden||Date.now()-_lastAct>ACT_IDLE||!STUDY_PAGES.has(current))return;
  const iso=todayISO(), r=daily[iso]=daily[iso]||{routine:{}}, au=r.auto=r.auto||{q:0,ok:0,secs:0,subs:{}};
  au.act=(au.act||0)+ACT_TICK;
  if(++_actTicks%4===0)save(); /* dakikada bir kaydedilir */
},ACT_TICK*1000);
addEventListener("pagehide",()=>{try{save()}catch(e){}});
const WD=["Pzt","Sal","Çar","Per","Cum","Cmt","Paz"];
function resultsByDay(){const g={};Object.values(mem.results).forEach(r=>(g[r.date]=g[r.date]||[]).push(r));return g}
function dayInfo(iso,byDay){
  const rs=((byDay||resultsByDay())[iso]||[]).slice().sort((x,y)=>x.ts-y.ts), d=daily[iso]||{}, a=d.auto;
  const rq=rs.reduce((x,r)=>x+r.total,0), rok=rs.reduce((x,r)=>x+r.correct,0), rsecs=rs.reduce((x,r)=>x+(r.secs||0),0);
  const useAuto=a&&a.q>=rq;
  let subs={};
  if(useAuto) subs=Object.assign({},a.subs);
  else rs.forEach(r=>(r.ids||r.wrong||[]).forEach(id=>{const q=qById(id);if(q)subs[q.sub]=(subs[q.sub]||0)+1}));
  return {rs,q:useAuto?a.q:rq,ok:useAuto?a.ok:rok,secs:Math.max(useAuto?a.secs:0,rsecs)+((a&&a.act)||0)+Math.max(0,+d.extraMin||0)*60,subs,
    act:(a&&a.act)||0, extraMin:Math.max(0,+d.extraMin||0),
    newM:Object.values(mem.mistakes).filter(m=>m.first===iso).length,
    learned:Object.values(mem.mistakes).filter(m=>m.status==="learned"&&m.fixed===iso).length,
    book:Object.values(mem.book).filter(b=>b.created&&isoOf(new Date(b.created))===iso).length,
    hours:+d.hours||0, note:d.note||""};
}
const calLevel=i=>!i.q&&!i.rs.length&&!i.hours?0:i.q<10?1:i.q<30?2:i.q<60?3:4;
/* süre kutusu: sayı büyük, birim küçük; tek satırda kalır */
const durHTML=s=>{const m=Math.round(s/60);return m<60?`${m}<small>dk</small>`:`${Math.floor(m/60)}<small>sa</small>${m%60?" "+m%60+"<small>dk</small>":""}`};
const durTxt=s=>{const m=Math.round(s/60);return m<60?`${m} dk`:`${Math.floor(m/60)} sa ${m%60?m%60+" dk":""}`.trim()};
function vCalendar(){
  const now=new Date(todayISO()+"T00:00");
  if(CAL.y===null){CAL.y=now.getFullYear();CAL.m=now.getMonth()}
  if(!CAL.sel) CAL.sel=todayISO();
  const byDay=resultsByDay(), first=new Date(CAL.y,CAL.m,1), days=new Date(CAL.y,CAL.m+1,0).getDate(), lead=(first.getDay()+6)%7;
  const cells=[]; 
  /* önceki/sonraki ayın günleri soluk: takvim her zaman tam dikdörtgen */
  const prevDays=new Date(CAL.y,CAL.m,0).getDate();
  for(let i=0;i<lead;i++) cells.push(`<span class="cal-c out"><span class="dn">${prevDays-lead+1+i}</span></span>`);
  for(let d=1;d<=days;d++){
    const iso=isoOf(new Date(CAL.y,CAL.m,d)), info=dayInfo(iso,byDay), lv=calLevel(info), evs=datesOn(iso);
    cells.push(`<button type="button" class="cal-c lv${lv} ${evs.length?"hasev":""} ${iso===todayISO()?"today":""} ${iso===CAL.sel?"sel":""}" data-act="cal-day" data-v="${iso}" aria-label="${fmtDate(iso)}${info.q?", "+info.q+" soru":""}${evs.length?", "+evs.map(evLabel).join(", "):""}" ${evs.length?`title="${esc(evs.map(evLabel).join(" · "))}"`:""}>
      <span class="dn">${d}</span>${info.q?`<span class="dq">${info.q}<span class="dqs"> soru</span></span>`:""}${evs.length?`<span class="dev" aria-hidden="true"></span>`:""}</button>`);
  }
  for(let d=1;cells.length%7;d++) cells.push(`<span class="cal-c out"><span class="dn">${d}</span></span>`);
  const monthName=first.toLocaleDateString("tr-TR",{month:"long",year:"numeric"});
  const i=dayInfo(CAL.sel,byDay), selD=new Date(CAL.sel+"T00:00");
  const subs=Object.entries(i.subs).sort((x,y)=>y[1]-x[1]);
  const extra=[i.newM?`${i.newM} yeni yanlış`:"",i.learned?`${i.learned} yanlışı öğrendin`:"",i.book?`kitabına ${i.book} kayıt ekledin`:"",i.hours?`kendi kaydın: ${i.hours} saat`:""].filter(Boolean);
  const empty=!i.q&&!i.rs.length&&!extra.length&&!i.note;
  const back=CAL.y!==now.getFullYear()||CAL.m!==now.getMonth();
  /* başlık/açıklama yok: takvim ve günün özeti ilk ekranda kaydırmadan görünsün; ayrıntılar "Aktivitelerim" altında kapalı */
  return `<div class="cal-page">
    ${vDates()}
    <section class="card cal">
      <div class="cal-head">
        <button type="button" class="icon-btn" data-act="cal-move" data-v="-1" aria-label="Önceki ay">${svg(I.left,18)}</button>
        <div class="cal-title"><b>${esc(monthName.charAt(0).toLocaleUpperCase("tr-TR")+monthName.slice(1))}</b>${back?`<button type="button" class="lnk" data-act="cal-today">bugüne dön</button>`:""}</div>
        <button type="button" class="icon-btn" data-act="cal-move" data-v="1" aria-label="Sonraki ay">${svg(I.arrow,18)}</button>
      </div>
      <div class="cal-grid">${WD.map(w=>`<span class="cal-w">${w}</span>`).join("")}${cells.join("")}</div>
    </section>
    <section class="card cal-day" id="calDay">
      <div class="cal-date"><b>${fmtDate(CAL.sel)}</b><span>${esc(selD.toLocaleDateString("tr-TR",{weekday:"long"}))}${CAL.sel===todayISO()?" · bugün":""}</span></div>
      ${datesOn(CAL.sel).map(d=>`<div class="ev-day"><span class="pill hi">${esc(evKind(d.kind).t)}</span> <b>${esc(d.title)}</b></div>`).join("")}
      <div class="cal-stats">
        <div><b>${i.q}</b><span>soru</span></div>
        <div><b>${i.q?"%"+Math.round(i.ok/i.q*100):"—"}</b><span>doğru</span></div>
        <div><b>${i.secs?durHTML(i.secs):"—"}</b><span>süre</span></div>
        <div><b>${i.rs.length}</b><span>test</span></div>
      </div>
      <details class="st-more cal-extra" data-bkopen="cal:extra" ${BK.open.has("cal:extra")?"open":""}><summary>Süre eksik mi? Elle ekle</summary>
        <p class="muted" style="font-size:13px;margin:8px 0">Site; soru çözerken, paragraf ve kelime çalışırken geçen süreyi kendisi sayar. Kitaptan çalışma gibi sitenin göremediği süreyi buraya dakika olarak yaz.${i.act?` Bu gün soru dışı çalışman: <b>${durTxt(i.act)}</b>.`:""}</p>
        <div class="row"><input type="number" id="calExtra" min="0" step="5" value="${i.extraMin||""}" placeholder="dakika" style="max-width:120px"><button type="button" class="btn sm primary" data-act="cal-extra" data-v="${CAL.sel}">Kaydet</button>${i.extraMin?`<span class="muted" style="font-size:13px">şu an ${i.extraMin} dk elle eklenmiş</span>`:""}</div>
      </details>
      ${empty?"":`<details class="st-more cal-act" data-bkopen="cal:act" ${BK.open.has("cal:act")?"open":""}><summary>Aktivitelerim</summary>
      ${i.rs.length?`<h4 class="cal-h">Çözdüğün testler</h4><ul class="rlist">${i.rs.map(r=>`<li><div class="rt-t"><b>${esc(r.title)}</b><span>${new Date(r.ts).toLocaleTimeString("tr-TR",{hour:"2-digit",minute:"2-digit"})} · ${r.correct}/${r.total} doğru · ${mmss(r.secs)}</span></div><span class="pill ${tone(pct(r))}">%${pct(r)}</span></li>`).join("")}</ul>`:""}
      ${subs.length?`<h4 class="cal-h">Çalıştığın konular</h4><div class="psubs">${subs.map(([sb,n])=>`<span class="chip">${esc(subTitle(sb))} · ${n}</span>`).join("")}</div>`:""}
      ${extra.length?`<p class="muted" style="margin:14px 0 0;font-size:14px">${extra.join(" · ")}</p>`:""}
      ${i.note?`<p style="margin:12px 0 0;font-size:14px"><b>Günün notu:</b> ${esc(i.note)}</p>`:""}</details>`}
    </section>
  </div>`;
}

/* ================= Words ================= */
function vWords(){return vKelime()}  /* js/kelime.js */

/* ================= Settings ================= */
function vSettings(){
  const u=Cloud.state.user, cs=Cloud.state;
  const defName=mode==="user"&&settings.name?`${settings.name} w YDS`:"w YDS";
  const acct=mode==="user"&&u
    ?`<p style="font-size:14px;margin:0 0 10px"><b>${esc(u.displayName||"")}</b><br><span class="muted">${esc(u.email||"")}</span></p>
      <p class="muted" style="font-size:14px">Kayıtların Google hesabınla buluta kaydediliyor. Hangi bilgisayardan ya da telefondan girersen gir aynı yanlış defterini ve sonuçları görürsün.</p>
      <button type="button" class="btn" data-act="signout">Çıkış yap</button>`
    :cs.available
    ?`<p class="muted" style="font-size:14px">Giriş yapmadan kullanıyorsun; kayıtların yalnızca bu tarayıcıda. Google ile girersen buradaki kayıtları hesabına aktarabilirsin.</p>
      <button type="button" class="gbtn" style="width:auto" data-act="signin">${GLOGO}<span>Google ile giriş yap</span></button>`
    :`<p class="muted" style="font-size:14px;margin-bottom:0">${cs.reason==="file"
        ?"Google girişi, dosya bilgisayardan çift tıklanarak açıldığında çalışmaz. Siteyi internet adresinden ya da yerel sunucudan aç (README → Adım 6)."
        :cs.reason==="load"?"Google giriş servisine bağlanılamadı. İnternet bağlantını kontrol edip sayfayı yenile."
        :"Google girişi henüz kurulmadı. README dosyasındaki Firebase adımlarını tamamlayınca burada giriş düğmesi görünür."}</p>`;
  return head("Kurulum","Ayarlar","Site adın ve hedeflerin. Hedefler paneldeki hesapları besler.")
  +`<div class="grid g2" style="align-items:start">
    <section class="card"><div class="form-grid">
      <div><label class="f" for="sSite">Site adı</label><input type="text" id="sSite" maxlength="40" value="${esc(settings.siteName||"")}" placeholder="${esc(defName)}">
        <p class="muted" style="font-size:12.5px;margin:5px 0 0">Boş bırakırsan “${esc(defName)}” görünür.</p></div>
      <div><label class="f" for="sName">Adın</label><input type="text" id="sName" value="${esc(settings.name||"")}" placeholder="Panelde seni bu adla selamlar"></div>
      <div><label class="f" for="sHours">Günlük çalışma hedefi (saat)</label><input type="number" id="sHours" min="0.5" max="12" step="0.5" value="${settings.hoursPerDay}"></div>
      <div><label class="f" for="sScore">Hedef YDS puanı</label><input type="number" id="sScore" min="0" max="100" value="${settings.targetScore}"></div>
      <div><label class="f" for="sDate">Sınav tarihi</label><input type="date" id="sDate" value="${settings.examDate||""}"></div>
      <div><button type="button" class="btn primary" data-act="save-settings">Ayarları kaydet</button></div>
    </div></section>
    <div class="stack">
    <section class="card"><h3>Hesap</h3><div style="margin-top:10px">${acct}</div></section>
    <section class="card">
      <h3>Verilerin</h3>
      <p class="muted" style="font-size:14px">${mode==="user"
        ?"Yanlışların, test sonuçların, eklediğin sorular ve günlük kayıtların Google hesabına bağlı bulut veritabanında (Firestore) saklanıyor. Bunları yalnızca sen görebilirsin."
        :"Yanlışların ve test sonuçların bu tarayıcıdaki <b>IndexedDB</b> veritabanında (w-yds) tutulur; çalışma kayıtların localStorage'da. Tarayıcı verilerini temizlemeden önce yedek al."}</p>
      <p style="font-size:14px;margin:0 0 14px">${Object.keys(mem.mistakes).length} yanlış kaydı · ${Object.keys(mem.results).length} test sonucu · ${Object.keys(mem.custom).length} eklenen soru · ${Object.keys(mem.book).length} kitap kaydı ${mode==="local"&&!idb?"<br><span class='pill no'>IndexedDB açılamadı, localStorage kullanılıyor</span>":""}</p>
      <div class="row">
        <button type="button" class="btn" data-act="export">Yedeği indir</button>
        <label class="btn" for="importFile" style="cursor:pointer">Yedeği yükle</label><input type="file" id="importFile" accept="application/json,.json" hidden>
      </div>
      <div style="border-top:1px solid var(--line);margin-top:18px;padding-top:14px">
        <button type="button" class="btn danger" data-act="reset">Tüm verileri sil</button>
      </div>
    </section></div></div>`;
}

/* ================= Events ================= */
document.addEventListener("click",e=>{
  const el=e.target.closest("[data-act]"); if(!el||el.disabled) return;
  const v=el.dataset.v;
  switch(el.dataset.act){
    case "go": go(v); break;
    case "topic": curTopic=v; go("topic"); break;
    case "test-topic": startTopicTest(v); break;
    case "week": curWeek=+v; go("weekly"); break;
    case "test-week": startWeekTest(+v,el.dataset.only); break;
    case "opt": answer(+v); break;
    case "next": nextQ(); break;
    case "prev": prevQ(); break;
    case "jump": jumpQ(+v); break;
    case "quit": quitTest(); break;
    case "restart": if(T){const x=T;startTest({title:x.title,src:x.src,ids:x.qs.map(q=>q.id),back:x.back,focus:x.focus,scope:x.scope})} break;
    case "personal-start": startPersonal(v==="all"?null:v); break;
    case "book-add-q": bookAddQuestion(v,el); break;
    case "book-add-lesson": bookAddLesson(v); break;
    case "book-kind": BK.kind=v; render(); break;
    case "book-form": BK.form=BK.form===v&&!BK.edit?null:v; BK.edit=null; render(); if(BK.form){const f=document.getElementById("bookForm");f&&f.scrollIntoView({behavior:"smooth",block:"start"})} break;
    case "book-cancel": BK.form=null; BK.edit=null; render(); break;
    case "book-save-q": bookSaveQuestion(); break;
    case "book-save-lesson": bookSaveLesson(); break;
    case "book-edit": {const b=mem.book[v]; if(b){BK.edit=v; BK.form=b.kind==="q"?"q":"lesson"; render(); const f=document.getElementById("bookForm"); f&&f.scrollIntoView({behavior:"smooth",block:"start"})}} break;
    case "book-del": if(confirm("Kitabından silinsin mi?")){dbDel("book",v); if(mem.mistakes[v])dbDel("mistakes",v); toast("Kitabından silindi"); render()} break;
    case "review-start": e.preventDefault(); startReview(v,+el.dataset.n); break;
    case "study-next": e.preventDefault(); startNext(v); break;
    case "exam-start": e.preventDefault(); startExam(v,+el.dataset.n); break;
    case "rev-start": e.preventDefault(); startRev(v,+el.dataset.n); break;
    case "mini-start": e.preventDefault(); startMini(v,+el.dataset.n); break;
    case "wrong-start": e.preventDefault(); startWrong(v); break;
    case "wk": WK[el.dataset.p]=v==="all"?"all":+v; LS.set("wkf",WK); render(); break;
    case "book-solve": {const wk=v.startsWith("w:")?+v.slice(2):null;
      const ids=(wk!==null?bookQuestions(null).filter(b=>weekOfSub(b.sub)===wk):bookQuestions(v==="all"?null:v)).map(b=>b.id);
      startTest({title:v==="all"?"Akıllı kitabım":wk!==null?"Kitabım · "+(wk?"Hafta "+wk:"Kendi başlıklarım"):"Kitabım · "+subTitle(v),src:"book",ids,back:"book"})} break;
    case "retry-ids": startTest({title:"Yanlışlarımı tekrar çöz",src:"retry",ids:v.split(","),back:"mistakes"}); break;
    case "retry-src": startTest({title:"Yanlışlarımı tekrar çöz",src:"retry",ids:Object.values(mem.mistakes).filter(m=>m.status==="open"&&m.src===v).map(m=>m.id),back:"mistakes"}); break;
    case "mistakes-for": MF.status="open"; MF.src=v; go("mistakes"); break;
    case "mf-status": MF.status=v; render(); break;
    case "cal-day": CAL.sel=v; render(); {const d=document.getElementById("calDay"); if(d&&innerWidth<860) d.scrollIntoView({behavior:"smooth"})} break;
    case "cal-move": {let m=CAL.m+(+v), y=CAL.y; if(m<0){m=11;y--} if(m>11){m=0;y++} CAL.m=m; CAL.y=y; render()} break;
    case "cal-today": CAL.y=null; CAL.m=null; CAL.sel=todayISO(); render(); break;
    case "ev-form": CAL.form=!CAL.form; render(); if(CAL.form){const f=document.getElementById("evTitle"); f&&f.focus()} break;
    case "ev-cancel": CAL.form=false; render(); break;
    case "ev-save": evSave(); break;
    case "cal-extra": {const m=Math.max(0,Math.round(+document.getElementById("calExtra").value||0)), r=daily[v]=daily[v]||{routine:{}};
      r.extraMin=m; save(); toast(m?`${m} dakika eklendi`:"Elle eklenen süre kaldırıldı"); render()} break;
    case "ev-del": if(confirm("Bu tarih silinsin mi?")){dates=dates.filter(x=>x.id!==v); save(); toast("Tarih silindi"); render()} break;
    case "mf-src-clear": MF.src="all"; render(); break;
    case "jump-group": e.preventDefault(); {const g=document.getElementById("g-"+v); if(g){if(g.tagName==="DETAILS")g.open=true; g.scrollIntoView({behavior:"smooth"})}} break;
    case "m-toggle": {const m=mem.mistakes[v]; if(m){dbPut("mistakes",Object.assign({},m,m.status==="open"?{status:"learned",fixed:todayISO()}:{status:"open"})); toast(m.status==="open"?"Öğrenildi olarak işaretlendi":"Tekrar açıldı"); render()}} break;
    case "m-del": dbDel("mistakes",v); toast("Defterden silindi"); render(); break;
    case "rt": {const iso=todayISO(); daily[iso]=daily[iso]||{routine:{}}; const r=daily[iso].routine=daily[iso].routine||{}; r[v]=!r[v]; save();
      el.classList.toggle("on",r[v]); el.setAttribute("aria-pressed",r[v]); el.textContent=(r[v]?"✓ ":"")+el.textContent.replace(/^✓ /,"");} break;
    case "step": {const inp=document.getElementById("st-"+el.dataset.k); let x=(+inp.value||0)+(+el.dataset.d); inp.value=Math.max(0,Math.round(x*100)/100); updateDaySummary();} break;
    case "save-day": {const iso=todayISO(), r=daily[iso]||{routine:{}};
      document.querySelectorAll("[data-val]").forEach(i=>r[i.dataset.val]=Math.max(0,+i.value||0));
      r.note=document.getElementById("dayNote").value; daily[iso]=r; save(); toast("Bugün kaydedildi"); render();} break;
    case "add-custom": addCustom(); break;
    case "del-custom": if(confirm("Bu soru haftadan silinsin mi?")){dbDel("custom",v); dbDel("mistakes",v); toast("Soru silindi"); render()} break;
    case "add-word": {const en=document.getElementById("wEn").value.trim(), tr=document.getElementById("wTr").value.trim();
      if(!en){toast("İngilizce kelimeyi yaz");return} words.push({id:Date.now(),en,tr,learned:false}); save(); render(); toast("Kelime eklendi"); document.getElementById("wEn").focus();} break;
    case "del-word": words=words.filter(w=>String(w.id)!==v); save(); render(); break;
    case "add-note": {const title=document.getElementById("nTitle").value.trim(), body=document.getElementById("nBody").value.trim(), type=document.getElementById("nType").value;
      if(!title){toast("Nota bir başlık ver");return} notes.push({id:Date.now(),title,body,type,date:todayISO()}); save(); render(); toast("Not kaydedildi");} break;
    case "del-note": notes=notes.filter(n=>String(n.id)!==v); save(); render(); break;
    case "signin": doSignIn(el); break;
    case "signout": doSignOut(); break;
    case "save-settings": settings.siteName=document.getElementById("sSite").value.trim(); settings.name=document.getElementById("sName").value.trim();
      settings.hoursPerDay=+document.getElementById("sHours").value||3; settings.targetScore=+document.getElementById("sScore").value||75;
      settings.examDate=document.getElementById("sDate").value; save(); toast("Ayarlar kaydedildi"); go("panel"); break;
    case "export": exportData(); break;
    case "reset": if(confirm("Yanlış defterin, test sonuçların, eklediğin sorular, Akıllı kitabın, kelimeler, notlar ve günlük kayıtların silinecek. Emin misin?")){
      STORES.forEach(dbClear); daily={};weeks={};words=[];notes=[];dates=[];answered={};vocab={}; save(); toast("Tüm veriler silindi"); go("panel")} break;
  }
});
document.addEventListener("change",e=>{
  const t=e.target;
  if(t.dataset.wk){weeks[t.dataset.wk]=t.checked;save();toast(t.checked?`Hafta ${t.dataset.wk} tamamlandı`:`Hafta ${t.dataset.wk} işareti kaldırıldı`);render();}
  else if(t.dataset.wl){const w=words.find(x=>String(x.id)===t.dataset.wl);if(w){w.learned=t.checked;save();render()}}
  else if(t.id==="mfSrc"){MF.src=t.value;render()}
  else if(t.id==="bkSub"){BK.sub=t.value;render()}
  else if(t.id==="bfSub"){const n=document.getElementById("bfNewWrap");if(n)n.hidden=t.value!=="__new"}
  else if(t.id==="importFile"&&t.files[0]) importData(t.files[0]);
});
/* Kitaptaki açılır başlıkların açık/kapalı durumu, sayfa yenilenince (ekle/sil/düzenle) korunur */
document.addEventListener("toggle",e=>{const d=e.target;if(d.dataset&&d.dataset.bkopen){d.open?BK.open.add(d.dataset.bkopen):BK.open.delete(d.dataset.bkopen)}},true);
document.addEventListener("input",e=>{if(e.target.dataset&&e.target.dataset.val)updateDaySummary()});
document.addEventListener("keydown",e=>{
  if(e.key==="Enter"&&e.target.matches&&e.target.matches(".tn")){e.target.click();return}
  if(current!=="test"||!T||e.metaKey||e.ctrlKey||e.altKey)return;
  if(e.target.matches("input,textarea,select"))return;
  const k=e.key.toLowerCase(), idx="abcde".indexOf(k);
  if(k.length===1&&idx>=0){answer(idx);e.preventDefault()}
  else if(/^[1-5]$/.test(k)){answer(+k-1);e.preventDefault()}
  else if((k==="enter"&&!e.target.matches("button"))||k==="arrowright"){nextQ();e.preventDefault()}
  else if(k==="arrowleft"){prevQ()}
});

function addCustom(){
  const stem=document.getElementById("cStem").value.trim(), o=[0,1,2,3,4].map(j=>document.getElementById("cO"+j).value.trim());
  const a=document.querySelector('input[name="cA"]:checked');
  if(!stem){toast("Soru kökünü yaz");return}
  if(o.some(x=>!x)){toast("Beş şıkkın hepsini doldur");return}
  if(!a){toast("Doğru şıkkı işaretle");return}
  const id="c-"+Date.now();
  dbPut("custom",{id,custom:true,week:curWeek,src:"week:"+curWeek,sub:document.getElementById("cSub").value,
    ref:document.getElementById("cRef").value.trim(),passage:document.getElementById("cPass").value.trim(),q:stem,o,a:+a.value,
    e:document.getElementById("cExp").value.trim(),created:Date.now()});
  toast(`Soru Hafta ${curWeek}'e eklendi`); render();
}
function exportData(){
  const data={v:2,exported:new Date().toISOString(),settings,daily,weeks,words,notes,dates,answered,vocab,mistakes:mem.mistakes,results:mem.results,custom:mem.custom};
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data)],{type:"application/json"}));
  a.download=`w-yds-yedek-${todayISO()}.json`;document.body.appendChild(a);a.click();a.remove();toast("Yedek indirildi");
}
function importData(file){
  const fr=new FileReader();
  fr.onload=()=>{try{const d=JSON.parse(fr.result);
    if(d.settings)settings=Object.assign(settings,d.settings); if(d.daily)daily=d.daily; if(d.weeks)weeks=d.weeks;
    if(d.words)words=d.words; if(d.notes)notes=d.notes; if(d.dates)dates=d.dates; if(d.answered)answered=d.answered; if(d.vocab)vocab=d.vocab;
    STORES.forEach(s=>{if(d[s]){dbClear(s);Object.values(d[s]).forEach(r=>dbPut(s,r))}});
    save();toast("Yedek yüklendi");render();
  }catch(err){toast("Dosya okunamadı: “yds-yedek” ile başlayan JSON dosyasını seç")}};
  fr.readAsText(file);
}

/* ================= Theme ================= */
const root=document.documentElement;
function isDark(){const t=root.getAttribute("data-theme");return t?t==="dark":matchMedia("(prefers-color-scheme: dark)").matches}
(function(){const t=LS.get("theme",null);if(t==="dark"||t==="light")root.setAttribute("data-theme",t)})();
document.getElementById("themeBtn").onclick=()=>{const next=isDark()?"light":"dark";root.setAttribute("data-theme",next);LS.set("theme",next);buildNav()};

/* ================= Hesap & site adı ================= */
const GLOGO=`<svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
const firstName=n=>String(n||"").trim().split(/\s+/)[0]||"";
/* Varsayılan ad "w YDS"; Google ile giren kişide "Adı w YDS"; Ayarlar → Site adı her ikisini de geçersiz kılar */
function siteName(){const c=(settings.siteName||"").trim();if(c)return c;return mode==="user"&&settings.name?`${settings.name} w YDS`:"w YDS"}
function brandHTML(n){const m=n.match(/^(.*?)(?:^|\s)w\s+(.+)$/);if(!m)return `<b>${esc(n)}</b>`;
  return `${m[1]?`<b>${esc(m[1])}</b> `:""}<i>w</i> <b>${esc(m[2])}</b>`}
function cloudErrorText(e){const c=(e&&e.code)||"";
  if(c.includes("permission-denied"))return "Veritabanı izni yok. Firestore kurallarını yayınladığından emin ol (README → Adım 4).";
  if(c.includes("unavailable")||c.includes("network"))return "İnternet bağlantısı yok. Bağlanınca tekrar dene.";
  if(c.includes("not-found"))return "Firestore veritabanı bulunamadı. README → Adım 3'ü tamamla.";
  return (e&&e.message)||"Bilinmeyen hata";}
const SIGNIN_ERR={
  "auth/unauthorized-domain":()=>`Bu adres (${location.hostname}) Firebase'de yetkili değil. Firebase → Authentication → Settings → Authorized domains listesine ekle.`,
  "auth/operation-not-allowed":()=>"Firebase'de Google ile giriş kapalı. Authentication → Sign-in method → Google'ı etkinleştir.",
  "auth/configuration-not-found":()=>"Firebase'de Google ile giriş kapalı. Authentication → Sign-in method → Google'ı etkinleştir.",
  "auth/network-request-failed":()=>"İnternete bağlanılamadı. Bağlantını kontrol edip tekrar dene.",
  "auth/invalid-api-key":()=>"firebase-config.js içindeki apiKey hatalı. Firebase proje ayarlarından yeniden kopyala."
};
const signInMsg=e=>(SIGNIN_ERR[e&&e.code]||(()=>`Giriş yapılamadı (${(e&&e.code)||"bilinmeyen hata"}).`))();
async function doSignIn(btn,errEl){
  if(!Cloud.state.available){toast("Google girişi bu sitede henüz kurulmadı");return}
  if(btn)btn.disabled=true; if(errEl)errEl.hidden=true;
  try{await Cloud.signIn()}
  catch(e){const m=signInMsg(e);if(errEl){errEl.textContent=m;errEl.hidden=false}else toast(m)}
  finally{if(btn)btn.disabled=false}
}
async function doSignOut(){LS.set("guest",false);try{await Cloud.signOut()}catch(e){location.reload()}}
async function loadUserData(){
  const u=Cloud.state.user, d=await Cloud.load();
  mode="user";
  if(d.main){applyMain(d.main);STORES.forEach(s=>mem[s]=d[s]);return}
  /* ilk giriş: bu tarayıcıda hesapsız tutulmuş kayıtları hesaba aktarmayı öner */
  await loadDB();
  const nm=Object.keys(mem.mistakes).length, nr=Object.keys(mem.results).length;
  const has=nm+nr+Object.keys(mem.custom).length+Object.keys(daily).length+words.length+notes.length;
  if(has&&confirm(`Bu tarayıcıda giriş yapmadan kaydedilmiş çalışmaların var (${nm} yanlış, ${nr} test sonucu). Google hesabına aktarılsın mı?`)){
    STORES.forEach(s=>Object.values(mem[s]).forEach(r=>Cloud.put(s,r)));
  }else{
    STORES.forEach(s=>mem[s]={});settings=defaultSettings();daily={};weeks={};words=[];notes=[];dates=[];answered={};vocab={};
  }
  if(!settings.name)settings.name=firstName(u&&u.displayName);
  save();Cloud.flush();
}

/* ================= Boot ================= */
function show(w){["boot","gate","app"].forEach(id=>document.getElementById(id).hidden=id!==w)}
async function startLocal(){mode="local";await loadDB();show("app");render()}
async function boot(){
  const ok=await Cloud.init(()=>location.reload());
  if(ok&&Cloud.state.user){
    try{await loadUserData()}
    catch(e){console.error(e);
      document.getElementById("boot").innerHTML=`<div class="empty"><h4>Kayıtların yüklenemedi</h4><div>${esc(cloudErrorText(e))}</div><div class="mt"><button type="button" class="btn primary" onclick="location.reload()">Tekrar dene</button></div></div>`;
      return}
    show("app");render();
  }else if(ok&&!LS.get("guest",false)){
    document.title="w YDS";show("gate");
    if(Cloud.state.redirectError){const el=document.getElementById("gateErr");el.textContent=signInMsg(Cloud.state.redirectError);el.hidden=false}
  }else await startLocal();
}
document.getElementById("gSignIn").onclick=e=>doSignIn(e.currentTarget,document.getElementById("gateErr"));
document.getElementById("gGuest").onclick=()=>{LS.set("guest",true);startLocal()};
window.addEventListener("cloud-error",e=>toast("Buluta kaydedilemedi: "+cloudErrorText(e.detail)));
boot();
