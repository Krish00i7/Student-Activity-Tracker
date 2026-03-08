let DATA=[
  {id:1,name:"Introduction to HTML & CSS",desc:"Master HTML structure, semantic elements, and core CSS styling principles.",cat:"Web Dev",dur:"2 hrs",xp:50,completed:false},
  {id:2,name:"JavaScript Fundamentals",desc:"Variables, functions, loops, and DOM manipulation to build interactive pages.",cat:"Programming",dur:"3 hrs",xp:80,completed:false},
  {id:3,name:"Git & Version Control",desc:"Repos, commits, branching, merging, and collaborating with pull requests.",cat:"Tools",dur:"1.5 hrs",xp:40,completed:false},
  {id:4,name:"Responsive Design",desc:"Media queries and flexible layouts so sites look great on any screen.",cat:"Web Dev",dur:"2 hrs",xp:60,completed:false},
  {id:5,name:"API Integration Basics",desc:"Fetch live data from REST APIs and render dynamic content with JavaScript.",cat:"Programming",dur:"2.5 hrs",xp:90,completed:false},
  {id:6,name:"UI/UX Design Fundamentals",desc:"Color theory, typography, layout hierarchy, and user-centered design thinking.",cat:"Design",dur:"2 hrs",xp:70,completed:false}
];
const CAT={"Web Dev":{bg:"rgba(98,0,214,0.25)",txt:"#c084fc",bar:"#a855f7",lbg:"rgba(168,85,247,0.12)",ltxt:"#c084fc"},"Programming":{bg:"rgba(62,245,232,0.12)",txt:"#3ef5e8",bar:"#3ef5e8",lbg:"rgba(62,245,232,0.1)",ltxt:"#3ef5e8"},"Tools":{bg:"rgba(255,224,62,0.12)",txt:"#ffe03e",bar:"#ffe03e",lbg:"rgba(255,224,62,0.1)",ltxt:"#ffe03e"},"Design":{bg:"rgba(255,78,184,0.12)",txt:"#ff4eb8",bar:"#ff4eb8",lbg:"rgba(255,78,184,0.1)",ltxt:"#ff4eb8"},"Data Science":{bg:"rgba(62,245,160,0.12)",txt:"#3ef5a0",bar:"#3ef5a0",lbg:"rgba(62,245,160,0.1)",ltxt:"#3ef5a0"},"Other":{bg:"rgba(255,140,62,0.12)",txt:"#ff8c3e",bar:"#ff8c3e",lbg:"rgba(255,140,62,0.1)",ltxt:"#ff8c3e"}};
const LC={"Web Dev":"#a855f7","Programming":"#3ef5e8","Tools":"#ffe03e","Design":"#ff4eb8","Data Science":"#3ef5a0","Other":"#ff8c3e"};
let cf='all',streak=0,nid=100,delId=null;
const done=()=>DATA.filter(a=>a.completed);
const xpTotal=()=>done().reduce((s,a)=>s+a.xp,0);
const pct=()=>DATA.length?Math.round(done().length/DATA.length*100):0;
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
function goPage(n,btn){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.npill').forEach(b=>b.classList.remove('active'));document.getElementById('page-'+n).classList.add('active');if(btn)btn.classList.add('active');if(n==='activities')renderCards();if(n==='progress')renderProg();if(n==='home')updateHome()}
function updateHome(){const d=done().length;document.getElementById('h-total').textContent=DATA.length;document.getElementById('h-done').textContent=d;document.getElementById('h-pend').textContent=DATA.length-d;document.getElementById('h-xp').textContent=xpTotal();document.getElementById('nav-streak').textContent=streak+' Streak'}
function renderCards(){
  const d=done().length,p=pct();
  document.getElementById('pp-frac').textContent=d+' / '+DATA.length;
  document.getElementById('pp-fill').style.width=p+'%';
  const msg=document.getElementById('pp-msg');
  if(!DATA.length)msg.innerHTML='Add your first activity below ✦';
  else if(d===0)msg.innerHTML='Complete your first activity ✦';
  else if(d===DATA.length)msg.innerHTML='<strong>🏆 All done! You crushed it!</strong>';
  else msg.innerHTML='<strong>'+d+' of '+DATA.length+'</strong> activities completed';
  document.getElementById('n-all').textContent=DATA.length;
  document.getElementById('n-pend').textContent=DATA.filter(a=>!a.completed).length;
  document.getElementById('n-done').textContent=d;
  let list=DATA;
  if(cf==='pending')list=DATA.filter(a=>!a.completed);
  if(cf==='completed')list=done();
  const el=document.getElementById('cards');
  if(!list.length){el.innerHTML='<div class="empty">'+(cf==='completed'?'No completed activities yet ✦':cf==='pending'?'No pending activities — all done! 🎉':'No activities yet — add one above! ✦')+'</div>';return}
  el.innerHTML=list.map(a=>{
    const c=CAT[a.cat]||{bg:'rgba(255,255,255,0.08)',txt:'#fff',bar:'#fff'};
    const lc=LC[a.cat]||'#fff';
    return`<div class="acard ${a.completed?'done':''}" id="acard-${a.id}">
      <div class="acard-line" style="background:${lc}${a.completed?';opacity:0.4':''}"></div>
      <div class="card-top">
        <span class="cat-tag" style="background:${c.bg};color:${c.txt}">${esc(a.cat)}</span>
        <span class="status-tag ${a.completed?'done-tag':''}"><span class="stag-dot"></span>${a.completed?'Completed':'Pending'}</span>
      </div>
      <div class="card-title">${esc(a.name)}</div>
      <div class="card-desc">${esc(a.desc)}</div>
      <div class="card-foot">
        <div class="card-meta">
          <span class="meta-item"><svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>${esc(a.dur)||'—'}</span>
          <span class="xp-tag">+${a.xp} XP</span>
        </div>
        <div class="card-actions">
          <button class="del-btn" onclick="openDelModal(${a.id})" title="Delete">
            <svg viewBox="0 0 16 16"><polyline points="2 4 4 4 14 4"/><path d="M13 4l-.7 10H3.7L3 4"/><path d="M6 4V3h4v1"/></svg>
          </button>
          <button class="mark-btn ${a.completed?'mbtn-done':'mbtn-pending'}" onclick="toggle(${a.id})">${a.completed?'↩ Undo':'✓ Complete'}</button>
        </div>
      </div>
      <div class="stamp"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7l3 3L11.5 4"/></svg></div>
    </div>`;
  }).join('');
}
function filt(f,btn){cf=f;document.querySelectorAll('.ftab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderCards()}
function toggle(id){const a=DATA.find(x=>x.id===id);if(!a)return;a.completed=!a.completed;if(a.completed){streak++;toast('+'+a.xp+' XP · "'+a.name+'" complete! 🎉','green');if(done().length===DATA.length)setTimeout(()=>{toast('🏆 ALL DONE! Absolutely legendary!','lime');confetti()},400)}else{streak=Math.max(0,streak-1);toast('"'+a.name+'" moved to pending','')}updateHome();renderCards()}
function openAddModal(){
  document.getElementById('add-modal').classList.add('open');
  ['f-name','f-desc','f-cat','f-dur','f-xp'].forEach(id=>document.getElementById(id).value='');
  ['f-name','f-desc'].forEach(id=>document.getElementById(id).classList.remove('err'));
  document.getElementById('err-name').classList.remove('show-err');
  document.getElementById('err-desc').classList.remove('show-err');
  setTimeout(()=>document.getElementById('f-name').focus(),200);
}
function closeAddModal(){document.getElementById('add-modal').classList.remove('open')}
function submitAdd(){
  const name=document.getElementById('f-name').value.trim();
  const desc=document.getElementById('f-desc').value.trim();
  const cat=document.getElementById('f-cat').value||'Other';
  const dur=document.getElementById('f-dur').value.trim()||'—';
  const xp=Math.max(5,Math.min(500,parseInt(document.getElementById('f-xp').value)||50));
  let ok=true;
  const ne=document.getElementById('f-name'),de=document.getElementById('f-desc');
  ne.classList.toggle('err',!name);document.getElementById('err-name').classList.toggle('show-err',!name);
  de.classList.toggle('err',!desc);document.getElementById('err-desc').classList.toggle('show-err',!desc);
  if(!name||!desc)return;
  DATA.push({id:nid++,name,desc,cat,dur,xp,completed:false});
  closeAddModal();toast('✦ "'+name+'" added successfully!','');updateHome();renderCards();
}
function openDelModal(id){delId=id;const a=DATA.find(x=>x.id===id);document.getElementById('del-name-lbl').textContent='"'+a.name+'"';document.getElementById('del-modal').classList.add('open')}
function closeDelModal(){document.getElementById('del-modal').classList.remove('open');delId=null}
function confirmDelete(){if(delId===null)return;const a=DATA.find(x=>x.id===delId);if(a){if(a.completed)streak=Math.max(0,streak-1);DATA=DATA.filter(x=>x.id!==delId);toast('"'+a.name+'" deleted','red')}document.getElementById('del-modal').classList.remove('open');delId=null;updateHome();renderCards()}
function bgClose(e,id,fn){if(e.target===document.getElementById(id))fn()}
function renderProg(){
  const d=done().length,xp=xpTotal(),p=pct();
  document.getElementById('pb-num').innerHTML=d+'<span> / '+DATA.length+'</span>';
  document.getElementById('pb-fill').style.width=p+'%';
  document.getElementById('pb-pct').textContent=p+'%';
  const msg=document.getElementById('pb-msg');
  if(d===0)msg.innerHTML='Start completing activities!';
  else if(d===DATA.length)msg.innerHTML='<strong>🏆 All activities complete — you\'re a legend!</strong>';
  else msg.innerHTML='<strong>'+d+' of '+DATA.length+'</strong> activities completed · keep going!';
  document.getElementById('pg-total').textContent=DATA.length;
  document.getElementById('pg-done').textContent=d;
  document.getElementById('pg-pend').textContent=DATA.length-d;
  document.getElementById('pg-xp').textContent=xp;
  const cats={};DATA.forEach(a=>{if(!cats[a.cat])cats[a.cat]={tot:0,done:0};cats[a.cat].tot++;if(a.completed)cats[a.cat].done++});
  document.getElementById('cbars').innerHTML=Object.entries(cats).map(([cat,v])=>{const p2=Math.round(v.done/v.tot*100),c=CAT[cat]||{bar:'#fff',txt:'#fff'};return`<div class="cbar-row"><div class="cbar-name" style="color:${c.txt}">${cat}</div><div class="cbar-track"><div class="cbar-fill" style="width:${p2}%;background:${c.bar}"></div></div><div class="cbar-right"><span class="cbar-frac">${v.done}/${v.tot}</span><span class="cbar-pct" style="color:${c.txt}">${p2}%</span></div></div>`}).join('');
  document.getElementById('log-rows').innerHTML=DATA.map(a=>{const c=CAT[a.cat]||{lbg:'rgba(255,255,255,0.08)',ltxt:'rgba(255,255,255,0.4)'};return`<div class="log-row ${a.completed?'done':''}"><span class="log-dot ${a.completed?'done':'todo'}"></span><span class="log-name">${esc(a.name)}</span><span class="log-cat" style="background:${c.lbg};color:${c.ltxt}">${esc(a.cat)}</span><span class="log-st ${a.completed?'done':'todo'}">${a.completed?'✓ Done':'Pending'}</span></div>`}).join('');
}
function toast(msg,cls){const w=document.getElementById('toasts');const t=document.createElement('div');t.className='toast'+(cls?' '+cls:'');t.textContent=msg;w.appendChild(t);setTimeout(()=>t.remove(),3100)}
function confetti(){const cols=['#b8ff3e','#9b4dff','#3ef5e8','#ff4eb8','#ffe03e','#ff8c3e','#ffffff'];for(let i=0;i<100;i++){const el=document.createElement('div');el.className='cp';el.style.cssText=`left:${Math.random()*100}vw;top:-8px;background:${cols[Math.floor(Math.random()*cols.length)]};animation-duration:${1.5+Math.random()*2.2}s;animation-delay:${Math.random()*1.4}s;width:${5+Math.random()*9}px;height:${5+Math.random()*9}px;border-radius:${Math.random()>0.5?'50%':'3px'};`;document.body.appendChild(el);setTimeout(()=>el.remove(),4200)}}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAddModal();closeDelModal()}if(e.key==='Enter'&&document.getElementById('add-modal').classList.contains('open')&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='SELECT')submitAdd()});
updateHome();