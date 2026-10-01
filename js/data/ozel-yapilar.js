/* Yanlışlarına özel anlatımlar: rel-pronoun, rel-prep, rel-reduction, noun-clause, ger-inf, comp, cond-types, cond-mixed, cond-alt, wish, inv */
Object.assign(OZEL, {
  "rel-pronoun": `
    <p>Soruda önce boşluğun <b>sağına</b> bak, sonra soluna. Sağda özne yoksa (doğrudan fiil geliyorsa) who/which/that; sağda özne + fiil var ama fiilin nesnesi eksikse whom/which; sağda eksiksiz bir cümle varsa whose + isim, where, when veya why. Sol taraf yalnızca insan mı nesne mi, yer mi zaman mı sorusunu çözer.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>İnsan:</b> <code class="k">who</code> (özne) · <code class="k">whom</code> (nesne) · <code class="k">that</code> (virgülsüz) · <code class="k">whoever</code> ile karıştırma (öncül isim yoksa)</li>
      <li><b>Nesne / hayvan / kurum:</b> <code class="k">which</code> · <code class="k">that</code> · virgülden sonra bütün cümleyi niteleyen <code class="k">, which</code> (= ve bu durum)</li>
      <li><b>İyelik:</b> <code class="k">whose</code> + isim (insan ve nesne için) · <code class="k">the … of which</code> (resmi eşdeğer)</li>
      <li><b>Yer:</b> <code class="k">where</code> = <code class="k">in/at/on which</code> · soyut “yer”ler: <code class="k">situation, case, stage, point, society, system, context, circumstances</code> + where</li>
      <li><b>Zaman:</b> <code class="k">when</code> = <code class="k">in/on/during which</code> · <code class="k">period, era, decade, century, moment, age, time, day</code></li>
      <li><b>Sebep:</b> <code class="k">the reason why</code> = <code class="k">the reason for which</code> = <code class="k">the reason that</code></li>
      <li><b>Virgül işaretleri (non-defining → that yasak):</b> özel isimler (Ankara, Einstein), <code class="k">my/his + tekil aile üyesi</code>, iki virgül arası açıklama</li>
      <li><b>Zorunlu that:</b> <code class="k">all, everything, nothing, anything, the only, the first, the + superlative</code> sonrasında that tercih edilir</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>where vs. which:</b> “the city <em>which</em> I visited” (visited'in nesnesi eksik) ↔ “the city <em>where</em> I grew up” (cümle tam). Yer ismi görmek where için yetmez.</li>
      <li><b>when vs. which:</b> “the year <em>which</em> changed everything” (changed'in öznesi eksik) → which.</li>
      <li><b>who vs. whom:</b> araya “they think / experts believe” girerse yok say: “the man who (experts believe) is guilty” → who.</li>
      <li><b>whose vs. who's:</b> whose'dan sonra mutlaka isim; artikel (the/a) gelmez.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The village hosted a festival, <em>which</em> attracted more tourists than the local hotels could accommodate.<br><span class="muted">virgül + which bütün cümleyi niteler (bu durum turist çekti)</span></div>
    <div class="ex">Economists still debate the stage of development <em>where</em> inequality begins to decline.<br><span class="muted">soyut yer (stage) + tam cümle → where</span></div>
    <div class="ex">The geologist <em>whom</em> the committee consulted rejected the proposed site for the dam.<br><span class="muted">consulted fiilinin nesnesi eksik → whom</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluktan sonra ne eksik: özne mi, nesne mi, hiçbir şey mi? 2) Virgül var mı? Varsa that'i şıklardan ele.</div>`,

  "rel-prep": `
    <p>Soruda boşluktan sonraki cümle <b>tam</b> görünüyor ama where/when şıklarda yoksa ya da anlam uymuyorsa, cevap “edat + which/whom”dır. Edatı seçmek için relative clause'daki fiilin ya da ismin hangi edatla kullanıldığını sor: <em>rely on, depend on, belong to, refer to, consist of</em>.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Yöntem / araç:</b> <code class="k">the means by which</code> · <code class="k">the mechanism by which</code> · <code class="k">the way in which</code> · <code class="k">the process through which</code></li>
      <li><b>Derece:</b> <code class="k">the extent to which</code> · <code class="k">the degree to which</code> · <code class="k">the rate at which</code> · <code class="k">the speed at which</code> · <code class="k">the price at which</code></li>
      <li><b>Yer / zaman eşdeğeri:</b> <code class="k">in which</code> (= where) · <code class="k">during which</code> · <code class="k">by which time</code> · <code class="k">since when</code> değil <code class="k">since which</code></li>
      <li><b>İnsan:</b> <code class="k">to whom</code> · <code class="k">for whom</code> · <code class="k">with whom</code> · <code class="k">on whom</code> · <code class="k">from whom</code> · <code class="k">among whom</code></li>
      <li><b>Miktar (virgülden sonra):</b> <code class="k">all / most / many / much / some / several / few / none / neither / either / both / half / each / one / two / the majority / a number / the rest + of which / of whom</code></li>
      <li><b>İyelik (resmi):</b> <code class="k">the + isim + of which</code> (the cost of which) · <code class="k">the + superlative + of which</code> (the largest of which)</li>
      <li><b>Fiil + edat kalıpları:</b> <code class="k">depend on, rely on, focus on, belong to, contribute to, respond to, consist of, suffer from, benefit from, deal with, cope with, participate in, result in, account for</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>most of whom vs. most of them:</b> them zamirdir, iki cümleyi bağlamaz. “and most of them” olursa doğru olur.</li>
      <li><b>of which vs. whose:</b> whose isimden <u>önce</u> (whose cost), of which isimden <u>sonra</u> (the cost of which).</li>
      <li><b>in which vs. which:</b> sonrasında nesne/özne eksikse edatsız which; cümle tamsa in which.</li>
      <li><b>edat + that / edat + who:</b> hiçbir zaman doğru değil; şıkta görünce ele.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Researchers measured the rate <em>at which</em> glaciers in the region are retreating.<br><span class="muted">at a rate → at which (hız)</span></div>
    <div class="ex">The charity supports forty families, <em>several of whom</em> lost their homes in the earthquake.<br><span class="muted">virgül + miktar + of whom (insan)</span></div>
    <div class="ex">The theory rests on three assumptions, <em>none of which</em> has been tested experimentally.<br><span class="muted">cansız + miktar → none of which</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Virgülden sonra miktar kelimesi varsa: insan → of whom, nesne → of which. 2) Cümle tam ve fiil/isim edat istiyorsa: o edat + which/whom.</div>`,

  "rel-reduction": `
    <p>Soruda boşluğun sağında ve solunda birer isim ile cümlede <b>zaten bir çekimli fiil</b> varsa, boşluk büyük ihtimalle kısaltılmış relative clause'dur. Karar tek soruya iner: nitelenen isim bu eylemi <b>yapıyor mu</b> (V-ing), <b>ona mı yapılıyor</b> (V3)?</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Pasif işareti (V3 seç):</b> boşluktan sonra <code class="k">by + fail</code> · <code class="k">in + yıl/yer</code> (published in 2010) · nesnesiz geçişli fiil (produced, used, found, collected, known as)</li>
      <li><b>Aktif işareti (V-ing seç):</b> boşluktan sonra nesne ismi gelir (people <em>using</em> <u>smartphones</u>) · <code class="k">containing, involving, living, working, suffering from, seeking</code></li>
      <li><b>to V tetikleyicileri:</b> <code class="k">the first, the second, the last, the next, the only, the + superlative (the youngest), the one</code></li>
      <li><b>Having V3 (önceki eylem):</b> <code class="k">after</code> anlamı, cümle başında virgülle · pasifi <code class="k">Having been V3</code> · olumsuzu <code class="k">Not having V3</code></li>
      <li><b>Sık kısaltılan sıfat kalıpları:</b> <code class="k">known as, based on, related to, compared with, associated with, designed to, aimed at, responsible for, available to</code></li>
      <li><b>Sıfat kısaltması:</b> who/which + be + sıfat → sadece sıfat (<code class="k">the resources available</code>, <code class="k">the people present</code>)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>V3 vs. çekimli past:</b> “The data collected last year <u>show</u>…” — show zaten ana fiil; collected kısaltmadır, “were collected” olamaz.</li>
      <li><b>V-ing vs. to V:</b> the first / the only varsa -ing ne kadar doğal görünse de to V.</li>
      <li><b>Having V3 vs. Having been V3:</b> özne eylemi yaptıysa aktif; özneye yapıldıysa pasif (Having been warned, the pilot…).</li>
      <li><b>being V3:</b> sadece “şu anda yapılmakta olan” pasif için (the bridge <em>being built</em>).</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Samples <em>stored</em> at room temperature lost most of their protein content within a week.<br><span class="muted">örnekler saklanır → pasif → V3; ana fiil lost</span></div>
    <div class="ex">Farmers <em>relying</em> on a single crop are especially vulnerable to price fluctuations.<br><span class="muted">çiftçiler güvenir → aktif → V-ing</span></div>
    <div class="ex">She was the only candidate <em>to answer</em> every question without notes.<br><span class="muted">the only → to V</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümlede başka çekimli fiil var mı? Varsa boşluğa çekimli fiil koyma. 2) “Kim yapıyor?” sor: isim yapıyorsa -ing, isme yapılıyorsa V3.</div>`,

  "noun-clause": `
    <p>Noun clause sorusunda şunu sor: boşluktaki yapı bir <b>soruyu</b> mu (whether, how, why, what), bir <b>gerçeği</b> mi (that, the fact that), yoksa <b>“her kim / ne ise”</b> anlamını mı (whoever, whatever) karşılıyor? Sonra sağdaki cümlenin tam mı eksik mi olduğuna bakarak iki aday arasından seç.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Belirsizlik bildiren fiil/sıfatlar (→ whether / if / wh-):</b> <code class="k">unclear, uncertain, unknown, doubt, wonder, ask, question, investigate, determine, decide, debate, remains to be seen, it is not known</code></li>
      <li><b>Kesinlik bildirenler (→ that):</b> <code class="k">evident, obvious, clear, certain, suggest, indicate, show, reveal, argue, claim, admit, acknowledge, confirm, it is widely believed</code></li>
      <li><b>Edattan sonra:</b> <code class="k">the fact that</code> (despite / due to / in spite of the fact that) · <code class="k">whether</code> (about / on whether) · edat + that <b>asla</b></li>
      <li><b>Eksik cümle alanlar:</b> <code class="k">what, whatever, whoever, whichever, whomever, which</code> (seçenekler arasından)</li>
      <li><b>Tam cümle alanlar:</b> <code class="k">that, whether, if, how, why, when, where, however (ne kadar … olursa)</code></li>
      <li><b>Sabit kalıplar:</b> <code class="k">whether or not</code> · <code class="k">whether … or …</code> · <code class="k">It is + sıfat + that</code> · <code class="k">The reason is that</code> (because değil) · <code class="k">The question is whether</code> · <code class="k">what + özne + need/want is</code></li>
      <li><b>Subjunctive (that + yalın fiil):</b> <code class="k">insist, recommend, suggest, demand, require, propose, it is essential/vital/crucial that</code> + özne + V</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>what vs. that:</b> “what we found” (found'un nesnesi eksik) ↔ “that we found oil” (tam).</li>
      <li><b>whether vs. if:</b> cümle başı, edat sonrası, “or not” hemen yanındaysa ve to V önünde yalnızca whether.</li>
      <li><b>whoever vs. whomever:</b> boşluktan hemen sonra fiil geliyorsa whoever, edat önde olsa bile.</li>
      <li><b>The reason is that vs. because:</b> “The reason … is because” YDS'de yanlış kabul edilir.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Historians remain divided over <em>whether</em> the treaty delayed or accelerated the war.<br><span class="muted">edat (over) + belirsizlik → whether</span></div>
    <div class="ex"><em>That</em> sea levels are rising is no longer disputed by mainstream scientists.<br><span class="muted">tam cümle + kesin bilgi, özne konumu → That</span></div>
    <div class="ex">The panel recommended that every applicant <em>submit</em> a writing sample.<br><span class="muted">recommend that + yalın fiil (submits değil)</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Sağdaki cümle eksik mi? Eksikse what/whoever grubu. 2) Tamsa anlam belirsiz mi (whether) kesin mi (that)? Edat önündeyse the fact that.</div>`,

  "ger-inf": `
    <p>Soruda boşluktan <b>hemen önceki kelimeye</b> bak: bir fiilse listeden hatırla; bir edatsa (to dahil) cevap V-ing'dir; bir sıfat ya da isimse genellikle to V. Anlamı değişen fiillerde ise zaman yönüne bak: geriye dönük (-ing) mi, ileriye dönük (to) mu?</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>+ V-ing fiiller:</b> <code class="k">avoid, admit, anticipate, appreciate, consider, delay, deny, discuss, dislike, enjoy, escape, finish, imagine, involve, justify, keep, mention, mind, miss, postpone, practise, quit, recall, recommend, resent, resist, risk, suggest, tolerate</code></li>
      <li><b>+ to V fiiller:</b> <code class="k">afford, agree, aim, appear, arrange, attempt, choose, claim, decide, deserve, expect, fail, hesitate, hope, intend, learn, manage, offer, plan, prepare, pretend, promise, refuse, seek, seem, strive, tend, threaten, volunteer</code></li>
      <li><b>Nesne + to V:</b> <code class="k">allow, enable, encourage, force, oblige, persuade, require, urge, warn, advise, cause, compel, permit</code> (enable sb to do)</li>
      <li><b>Edat olan “to” (+ V-ing):</b> <code class="k">look forward to, be used to, get accustomed to, object to, be committed to, be devoted to, contribute to, in addition to, with a view to, when it comes to, be opposed to</code></li>
      <li><b>Sabit + V-ing:</b> <code class="k">it's no use, it's worth, there's no point in, can't help, have difficulty (in), spend time, be busy, instead of, without, by, besides</code></li>
      <li><b>Anlamı değişenler:</b> <code class="k">remember, forget, stop, regret, try, mean, go on, need</code> (need doing = yapılması gerek, pasif anlam)</li>
      <li><b>Sıfat + to V:</b> <code class="k">able, likely, eager, reluctant, willing, bound, due, certain, unable</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>used to V vs. be used to V-ing:</b> eski alışkanlık ↔ alışkın olmak.</li>
      <li><b>try to V vs. try V-ing:</b> çabalamak ↔ deneme amaçlı yapmak.</li>
      <li><b>mean to V vs. mean V-ing:</b> niyet etmek ↔ gerektirmek, anlamına gelmek.</li>
      <li><b>having V3 / to have V3:</b> önceki eylemi vurgular; hangi biçim olduğu yine fiile bağlı (deny having done, claim to have done).</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The new regulation will <em>enable</em> small firms <em>to compete</em> with multinational suppliers.<br><span class="muted">enable + nesne + to V</span></div>
    <div class="ex">The agency is committed <em>to reducing</em> plastic waste by half within a decade.<br><span class="muted">committed to (edat) + V-ing</span></div>
    <div class="ex">The witness claimed <em>to have seen</em> the vehicle before the explosion.<br><span class="muted">claim + to V; önceki eylem → to have V3</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluktan önceki “to” edat mı? “to + isim” olabiliyorsa edattır → V-ing. 2) Değilse fiili ezber listesinde bul.</div>`,

  "comp": `
    <p>Karşılaştırma sorusunda cümlenin <b>diğer yarısını</b> ara: than varsa comparative, as varsa yalın sıfat, iki yarının başında the varsa “the …, the …”, in/of + grup varsa superlative. Boşluktaki kelime bu eşi tamamlamak zorundadır.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Comparative güçlendiriciler:</b> <code class="k">much, far, a lot, a great deal, considerably, significantly, substantially, markedly, even, still, slightly, a little, a bit, somewhat, no, any</code> (very / too / so kullanılmaz)</li>
      <li><b>Superlative güçlendiriciler:</b> <code class="k">by far the, easily the, much the, the very</code> · <code class="k">one of the + superlative + çoğul isim</code> · <code class="k">ever / to date / in history</code></li>
      <li><b>Eşitlik:</b> <code class="k">as … as, not as/so … as, the same (isim) as, similar to, just as, nearly as, almost as, twice/three times/half as … as, as many/much … as</code></li>
      <li><b>Farklılık:</b> <code class="k">different from, unlike, compared with/to, in comparison with, rather than, than ever, than expected, than before, than usual</code></li>
      <li><b>Paralel yapı:</b> <code class="k">the more …, the more / the less / the fewer / the + -er</code> · kısa hâli <code class="k">the sooner the better</code></li>
      <li><b>Artış bildiren:</b> <code class="k">more and more, less and less, increasingly, ever + comparative (ever larger)</code></li>
      <li><b>Sayılabilirlik:</b> <code class="k">more / fewer</code> (sayılabilen) · <code class="k">more / less</code> (sayılamayan) · <code class="k">as many as / as much as</code></li>
      <li><b>Tercih:</b> <code class="k">prefer … to …, would rather … than, superior/inferior/preferable to</code> (than değil to)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>than vs. to:</b> superior, inferior, prior, preferable Latince kökenli olduğu için to alır.</li>
      <li><b>less vs. fewer:</b> fewer errors / less pollution.</li>
      <li><b>the + superlative vs. the + comparative:</b> iki şeyden biri için “the better of the two”.</li>
      <li><b>kat ifadesi:</b> times / twice önce, as … as sonra; “twice as much as”, “three times more than” da kabul edilir ama “twice larger as” asla.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">Among the migratory birds tracked by the team, the Arctic tern covered <em>by far the longest</em> distance.<br><span class="muted">by far + superlative</span></div>
    <div class="ex">Wind farms now generate <em>considerably more</em> electricity <em>than</em> coal plants in the region.<br><span class="muted">considerably + comparative + than</span></div>
    <div class="ex">The new alloy is <em>superior to</em> steel in terms of heat resistance.<br><span class="muted">superior + to (than değil)</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümlede eş kelimeyi bul (than / as / the / in-of). 2) Boşluktaki niteleyici o eşe uyuyor mu (very + -er yok)?</div>`,

  "cond-types": `
    <p>Koşul sorusunda iki fiili tek başına değil, <b>cümledeki zaman ifadesiyle birlikte</b> oku. Gerçek dışılık bir “bir adım geri” kaymasıyla anlatılır: şimdiye aykırı için past, geçmişe aykırı için past perfect. Gerçek olasılık ise hiç kaymaz: if + present.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Type 0 (genel gerçek):</b> <code class="k">always, generally, usually, as a rule, at sea level, when/whenever</code> (if yerine), bilimsel süreç fiilleri (boil, freeze, expand, dissolve)</li>
      <li><b>Type 1 (olası gelecek):</b> <code class="k">next week/year, tomorrow, soon, in the coming months, by 2030</code> · sonuçta <code class="k">will, may, might, can, be going to, should</code> veya emir cümlesi</li>
      <li><b>Type 2 (şimdiye aykırı):</b> <code class="k">now, today, currently, at present, these days, nowadays</code> · koşulda <code class="k">were</code> (tüm öznelerde) · sonuçta <code class="k">would, could, might + V</code></li>
      <li><b>Type 3 (geçmişe aykırı):</b> <code class="k">yesterday, last year, in 2018, at that time, then, ago, in the past</code> · sonuçta <code class="k">would/could/might have V3</code></li>
      <li><b>Gerçeği ele veren ek cümle:</b> <code class="k">but he didn't, but they don't, unfortunately, as it is, in reality</code> → aykırı tür</li>
      <li><b>Özel kalıplar:</b> <code class="k">If it were not for</code> (T2) · <code class="k">If it had not been for</code> (T3) · <code class="k">If + were to V</code> (düşük olasılıklı gelecek) · <code class="k">If + should</code> (T1, “olur da”)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Type 1 vs. Type 2:</b> ikisi de geleceğe bakabilir; gerçekçi planlarda T1, hayal/düşük olasılıkta T2. Sonuçta will varsa if kısmı past olamaz.</li>
      <li><b>Type 0 vs. Type 1:</b> genel yasa → present/present; tek seferlik gelecek → will.</li>
      <li><b>if + will:</b> yalnızca rica/istek anlamında (If you will wait here…) doğrudur; zaman bildirmez.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">If metal <em>is heated</em>, it <em>expands</em>.<br><span class="muted">genel fiziksel gerçek → Type 0</span></div>
    <div class="ex">If the city <em>had</em> a metro line today, traffic <em>would be</em> far less congested.<br><span class="muted">today + şimdiye aykırı → Type 2</span></div>
    <div class="ex">If the dam <em>had been inspected</em> in 2015, the cracks <em>might have been noticed</em>.<br><span class="muted">in 2015 + geçmişe aykırı → Type 3 (pasif)</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümledeki zaman kelimesini bul. 2) Durum gerçek mi hayal mi? Hayal ise bir zaman geri kaydır; if kısmına will/would koyma.</div>`,

  "cond-mixed": `
    <p>Mixed conditional'ı yakalamanın yolu cümlede <b>iki farklı zaman işaretini</b> aynı anda görmektir. Koşul kısmının zaman işaretine göre if tarafını, sonuç kısmının zaman işaretine göre ana cümleyi ayrı ayrı çek: her yarı kendi zamanına göre çekilir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Geçmiş sebep (had V3):</b> <code class="k">ago, last year/decade, in 1990, at birth, as a child, when he was young, back then, earlier, in the past, at that time</code></li>
      <li><b>Şimdiki sonuç (would + V):</b> <code class="k">now, today, currently, still, at present, these days, nowadays, anymore</code> · durum fiilleri <code class="k">be, have, know, live, own, need</code> · <code class="k">would be + V-ing</code></li>
      <li><b>Kalıcı özellik (were / past):</b> <code class="k">by nature, in general, always</code> · kişilik/yetenek sıfatları (patient, fluent, tall, careful, qualified) · <code class="k">if I were you</code></li>
      <li><b>Geçmiş sonuç (would have V3):</b> <code class="k">last month, yesterday, in 2020, at the meeting, the other day</code></li>
      <li><b>Devrik biçimler:</b> <code class="k">Had + özne + V3, … would + V now</code> · <code class="k">Were + özne + sıfat, … would have V3</code> · <code class="k">Had it not been for</code> / <code class="k">But for</code> + isim</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Type 3 vs. mixed:</b> sonuç tarafında now/today/still varsa would have V3 yanlış olur.</li>
      <li><b>Type 2 vs. mixed:</b> sonuç tarafında last year gibi geçmiş işaret varsa would + V yanlış olur.</li>
      <li><b>zaman işareti yokken:</b> sonuç fiili bir durum mu (be, have) yoksa tek seferlik olay mı (win, lose)? Durum bugüne, olay geçmişe işaret eder.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">If the tribe <em>had not migrated</em> north centuries ago, its language <em>would be</em> far more widely spoken today.<br><span class="muted">centuries ago → had V3 · today → would + V</span></div>
    <div class="ex">If the manager <em>were</em> less cautious by nature, the firm <em>would have entered</em> the Asian market in 2019.<br><span class="muted">kalıcı özellik → were · 2019 → would have V3</span></div>
    <div class="ex"><em>Had</em> the patient <em>been vaccinated</em> as a child, he <em>would not be</em> in intensive care now.<br><span class="muted">devrik geçmiş koşul + şimdiki sonuç</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümleyi virgülden ikiye böl ve her yarıda zaman işaretini ayrı ara. 2) Her yarıyı kendi zamanına göre seç; şıktaki çiftin iki parçasını ayrı ayrı doğrula.</div>`,

  "cond-alt": `
    <p>If'in yerine geçen bağlaçlarda iki filtre kullan: <b>anlam filtresi</b> (şart mı, olumsuz şart mı, önlem mi, “olsa bile” mi?) ve <b>yapı filtresi</b> (sonrası cümle mi isim mi, yoksa bağlaç iki cümle arasında mı duruyor?). Çoğu soruda yapı filtresi şıkların yarısını tek başına eler.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Şart (+ cümle):</b> <code class="k">provided (that), providing (that), as long as, so long as, on condition that, only if, given that, assuming (that), on the understanding that</code></li>
      <li><b>Olumsuz şart:</b> <code class="k">unless</code> (+ olumlu cümle) · <code class="k">if not</code> · <code class="k">or else</code></li>
      <li><b>Önlem:</b> <code class="k">in case</code> + cümle · <code class="k">in case of</code> + isim · <code class="k">just in case</code> · <code class="k">for fear that / lest</code> (… olmasın diye)</li>
      <li><b>“Olsa bile”:</b> <code class="k">even if, even though</code> (gerçek) · <code class="k">whether or not</code> · <code class="k">regardless of / irrespective of</code> + isim</li>
      <li><b>İsim alanlar (olmasaydı):</b> <code class="k">but for, without, in the absence of, barring, in the event of</code> · <code class="k">with</code> (= if there were/had been)</li>
      <li><b>Varsayım:</b> <code class="k">suppose, supposing, what if, imagine, say</code> (+ past = hayali)</li>
      <li><b>İki cümle arası:</b> <code class="k">otherwise, or (else)</code> (aksi hâlde) · <code class="k">if so / if not</code> (öyleyse / değilse) · <code class="k">in that case</code></li>
      <li><b>Zaman+koşul:</b> <code class="k">once, as soon as, when, whenever</code> (koşul anlamı taşıyabilir, if gibi present alır)</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>unless vs. provided that:</b> anlamları zıttır; boşluğa ikisini de koyup cümleyi Türkçeye çevir.</li>
      <li><b>in case vs. if:</b> in case sonuç ne olursa olsun şimdi yapılan önlemdir; if ise eylemi koşula bağlar.</li>
      <li><b>even if vs. only if:</b> “olsa bile” ↔ “sadece … olursa”; only if cümle başındaysa ana cümle devrik olur.</li>
      <li><b>otherwise vs. unless:</b> otherwise iki bağımsız cümle arasında (noktalı virgül/nokta sonrası), unless bir cümleye bağlanır.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The drug can be sold over the counter <em>on condition that</em> the packaging carries a clear warning.<br><span class="muted">izin bir şarta bağlı → on condition that</span></div>
    <div class="ex"><em>In the absence of</em> reliable data, the ministry had to rely on rough estimates.<br><span class="muted">in the absence of + isim (veri yokken)</span></div>
    <div class="ex">Divers should log their route with the harbour office before descending; <em>otherwise</em>, rescue teams cannot locate them quickly.<br><span class="muted">iki bağımsız cümle arası → otherwise</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Boşluktan sonra isim mi cümle mi? İsimse but for / without / in case of grubu. 2) Cümleyse şıkları Türkçeye çevirip mantığa uyanı seç.</div>`,

  "wish": `
    <p>Bu soruları <b>“gerçek nedir?”</b> sorusuyla çöz: dilek her zaman gerçeğin tersini söyler ve fiil gerçeğin zamanından bir adım geri gider. Gerçek bugünse (I don't know) past; gerçek geçmişse (I didn't go) past perfect; gerçek birinin inatçı davranışıysa would.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Dilek başlatanlar:</b> <code class="k">wish, if only, would that</code> (resmi) · <code class="k">regret</code> (+ V-ing, ters mantık) ile eşleşen sorular</li>
      <li><b>Şimdiki dilek işaretleri (→ past / were / could):</b> <code class="k">now, at the moment, these days, still, anymore, currently</code></li>
      <li><b>Geçmiş dilek işaretleri (→ had V3 / could have V3):</b> <code class="k">last year, then, at that time, before, instead of, when I was, ago</code></li>
      <li><b>Şikâyet / değişim isteği (→ would V):</b> <code class="k">stop, always, keep, refuse, finally</code> · başka bir özne (I wish they would…) · aynı özneyle (I wish I would) kullanılmaz</li>
      <li><b>Zaman kalıpları:</b> <code class="k">It's time, It's high time, It's about time</code> + özne + past · <code class="k">It's time (for sb) to V</code></li>
      <li><b>Tercih kalıpları:</b> <code class="k">would rather / would sooner</code> + V (aynı özne) · + özne + past (farklı özne) · + özne + had V3 (geçmiş) · <code class="k">would rather … than …</code> · <code class="k">had better + V</code></li>
      <li><b>Benzer “hayali” kalıplar:</b> <code class="k">as if / as though</code> + past (gerçek dışı) · <code class="k">suppose / what if</code> + past</li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>wish + past vs. wish + would:</b> durum (know, be, have) → past; davranış değişikliği isteği → would.</li>
      <li><b>wish vs. hope:</b> hope gerçekçi olasılık alır, zaman kaydırmaz: I hope it <em>works</em> ↔ I wish it <em>worked</em>.</li>
      <li><b>would rather + past vs. had V3:</b> şimdiki/gelecek tercih → past; geçmişte olmuş şeye itiraz → had V3.</li>
      <li><b>could vs. could have V3:</b> şimdiki yetenek eksikliği ↔ geçmişte kaçırılan fırsat.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex">The engineers wish the original blueprints <em>had been preserved</em>, as restoring the tower without them is extremely difficult.<br><span class="muted">planlar geçmişte korunmadı → had been V3</span></div>
    <div class="ex">Local shopkeepers wish the council <em>would stop</em> raising parking fees every year.<br><span class="muted">başkasının tekrar eden davranışı → would V</span></div>
    <div class="ex">The professor would rather her students <em>cited</em> peer-reviewed sources than popular websites.<br><span class="muted">farklı özne + şimdiki tercih → past</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Dileğin tersini (gerçeği) Türkçe söyle ve zamanını belirle. 2) O zamandan bir adım geri git; farklı özne + davranış şikâyeti ise would.</div>`,

  "inv": `
    <p>Inversion sorusunda iki yöne bak: boşluk cümle başındaysa <b>sonraki kelime sırasından</b> (yardımcı fiil + özne) kalıbı tanı; boşluk ortadaysa <b>cümlenin başındaki kısıtlayıcı kelimeyi</b> bul ve ana cümleyi soru sırasına çevir. Eş bağlaç (than, when, but also) cevabı çoğu zaman tek başına verir.</p>
    <h4>Sınavda çıkabilecek tüm ipucu kelimeler</h4>
    <ul>
      <li><b>Olumsuz zarflar:</b> <code class="k">never, rarely, seldom, hardly ever, scarcely ever, little, nowhere, at no time, in no way, on no account, under no circumstances, by no means, in no sense</code></li>
      <li><b>Eşli kalıplar (had + V3):</b> <code class="k">No sooner … than</code> · <code class="k">Hardly … when/before</code> · <code class="k">Scarcely … when/before</code> · <code class="k">Barely … when</code></li>
      <li><b>Not only:</b> <code class="k">Not only + yardımcı fiil + özne … but (also) …</code> · <code class="k">Not until … did</code> · <code class="k">Not once</code> · <code class="k">Not a single + isim</code></li>
      <li><b>Only grubu (ana cümle devrik):</b> <code class="k">Only after, Only when, Only if, Only by, Only then, Only in this way, Only recently, Only with</code></li>
      <li><b>Koşul devriği:</b> <code class="k">Should + özne + V</code> (T1) · <code class="k">Were + özne + to V / sıfat</code> (T2) · <code class="k">Were it not for</code> · <code class="k">Had + özne + V3</code> (T3) · <code class="k">Had it not been for</code></li>
      <li><b>So / such:</b> <code class="k">So + sıfat + be/aux + özne + that</code> · <code class="k">Such + be + isim + that</code></li>
      <li><b>Kısa onay devriği:</b> <code class="k">so do I, neither/nor does he</code> · karşılaştırmada <code class="k">as did, than did</code></li>
      <li><b>Yer/hareket (tam devrik):</b> <code class="k">Here comes, There goes, Among the findings was, Attached is, Enclosed are</code></li>
    </ul>
    <h4>Karıştırılanlar</h4>
    <ul>
      <li><b>Only after + cümle vs. ana cümle:</b> devrik olan “Only after” ile başlayan kısım değil, virgülden sonraki ana cümledir.</li>
      <li><b>No sooner (than) vs. Hardly (when):</b> eşi karıştırma; cümlenin ortasındaki bağlaca bak.</li>
      <li><b>Should / Were / Had:</b> sonrası yalın fiil → Should; to V veya sıfat/isim → Were; V3 → Had.</li>
      <li><b>“Only” başta değilse:</b> “He only realised it later” devrik değildir; devrik yalnızca kısıtlayıcı ifade cümle başındayken.</li>
    </ul>
    <h4>Yeni örnekler</h4>
    <div class="ex"><em>Seldom have</em> archaeologists <em>found</em> such well-preserved textiles in a humid climate.<br><span class="muted">Seldom + have + özne + V3</span></div>
    <div class="ex"><em>Were</em> the tax <em>to be</em> abolished, small retailers would benefit the most.<br><span class="muted">= If the tax were to be abolished (T2 devrik)</span></div>
    <div class="ex"><em>Under no circumstances should</em> laboratory equipment <em>be removed</em> from the building.<br><span class="muted">olumsuz zarf + should + özne + be V3</span></div>
    <div class="tip"><b>Hızlı kontrol:</b> 1) Cümle başında olumsuz/kısıtlayıcı kelime var mı? Varsa şıklarda yardımcı fiil + özne sırasını ara. 2) Eş bağlacı (than / when / but also) kontrol et.</div>`
});
