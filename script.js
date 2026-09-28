const $=s=>document.querySelector(s);
$('#burger').onclick=()=>$('#nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>$('#nav').classList.remove('open'));
$('#theme2').onclick=()=>$('#theme').click();$('#theme').onclick=()=>{const r=document.documentElement,d=matchMedia('(prefers-color-scheme:dark)').matches;r.dataset.theme=(r.dataset.theme||(d?'dark':'light'))==='dark'?'light':'dark'};
const W=['Brutalist minimalism.','Lush, living facades.','Photorealistic 3D visuals.','Buildable working drawings.'];let w=0,c=0,d=false;const t=$('#typed');
(function k(){const s=W[w];t.textContent=s.slice(0,c);if(!d&&c<s.length){c++;setTimeout(k,70)}else if(!d){d=true;setTimeout(k,1400)}else if(c>0){c--;setTimeout(k,35)}else{d=false;w=(w+1)%W.length;setTimeout(k,300)}})();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');e.target.querySelectorAll('[data-n]').forEach(n=>{const to=+n.dataset.n;let v=0;const i=setInterval(()=>{n.textContent=++v;if(v>=to)clearInterval(i)},250)});io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const S=[...document.querySelectorAll('section[id]')],L=[...document.querySelectorAll('#nav a,#bn a')];
addEventListener('scroll',()=>{let cur='';S.forEach(s=>{if(scrollY>=s.offsetTop-160)cur=s.id});L.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
$('#prog').style.width=(scrollY/(document.documentElement.scrollHeight-innerHeight)*100)+'%'},{passive:true});

addEventListener('load',()=>setTimeout(()=>$('#pre').classList.add('h'),700));
addEventListener('mousemove',e=>{$('#cur').style.transform=`translate(${e.clientX}px,${e.clientY}px)`;const a=$('#art svg');if(a&&scrollY<700)a.style.transform=`translate(${(e.clientX/innerWidth-.5)*-14}px,${(e.clientY/innerHeight-.5)*-10}px) scale(1.04)`});
document.querySelectorAll('.card,.proj').forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-6px)`};c.onmouseleave=()=>c.style.transform=''});
for(let i=0;i<14;i++){const l=document.createElement('span');l.className='lf';l.style.cssText=`left:${Math.random()*100}%;animation-duration:${9+Math.random()*10}s;animation-delay:${-Math.random()*15}s;transform:scale(${.6+Math.random()})`;$('#home').appendChild(l)}
document.querySelectorAll('.ov,.art').forEach(box=>{const b=document.createElement('label');b.className='ph';b.innerHTML='📷 Add your photo<input type="file" accept="image/*" hidden>';box.appendChild(b);b.querySelector('input').onchange=e=>{const f=e.target.files[0];if(!f)return;const im=new Image();im.src=URL.createObjectURL(f);im.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1';box.insertBefore(im,b)}});
document.querySelectorAll('.card,.job,.proj').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));
if(matchMedia('(hover:none)').matches)document.querySelectorAll('.lf').forEach((l,i)=>i>5&&l.remove());
['#services','#projects','#process'].forEach(id=>{const r=document.querySelector(id+' .row');if(r){const h=document.createElement('div');h.className='swipe';h.textContent='Swipe to explore →';r.before(h)}});

(function(){
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;let lenis=null;
if(window.Lenis&&!reduce){lenis=new Lenis({lerp:.085,wheelMultiplier:.95});const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf);
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();lenis.scrollTo(el,{offset:-64,duration:1.5})}}))}
// split headings
let n=0;const wr=t=>{if(!t.trim())return t;const ld=/^\s/.test(t)?' ':'',tr=/\s$/.test(t)?' ':'';return ld+t.trim().split(/\s+/).map(w=>`<span class="w"><span style="--i:${n++}">${w}</span></span>`).join(' ')+tr};
document.querySelectorAll('h2').forEach(h=>{n=0;h.innerHTML=[...h.childNodes].map(c=>c.nodeType===3?wr(c.nodeValue):`<em>${wr(c.textContent)}</em>`).join('')});
const hio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on-h');hio.unobserve(e.target)}}),{threshold:.3});document.querySelectorAll('h2').forEach(h=>hio.observe(h));
document.querySelectorAll('.row.rv').forEach(r=>[...r.children].forEach((c,i)=>c.style.setProperty('--i',i)));
// ghost labels
const G={about:'Profile',services:'Services',projects:'Focus',process:'Process',experience:'Career',skills:'Skills',education:'Study'};
Object.entries(G).forEach(([id,t])=>{const s=document.getElementById(id);if(s){const g=document.createElement('div');g.className='ghost';g.textContent=t;s.prepend(g)}});
// timeline bar
const tl=document.querySelector('.tl'),bar=document.createElement('div');bar.className='tlp';tl.prepend(bar);
// magnetic buttons
if(matchMedia('(hover:hover)').matches)document.querySelectorAll('.btn').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.2}px ${(e.clientY-r.top-r.height/2)*.3}px`});b.addEventListener('mouseleave',()=>b.style.translate='')});
// scroll effects
let tk=false;const upd=()=>{tk=false;const y=scrollY,vh=innerHeight;
const hc=document.querySelector('.hero>div:first-child'),art=document.querySelector('.art'),gb=document.querySelector('.gridbg');
if(y<vh*1.2){hc.style.translate=`0 ${y*.22}px`;hc.style.opacity=Math.max(0,1-y/(vh*.85));art.style.translate=`0 ${y*-.07}px`;gb.style.translate=`0 ${y*.3}px`}
document.querySelectorAll('.ghost').forEach(g=>{const r=g.parentElement.getBoundingClientRect();if(r.bottom>0&&r.top<vh)g.style.translate=`${r.top*.12}px 0`});
const r=tl.getBoundingClientRect();bar.style.height=Math.max(0,Math.min(1,(vh*.65-r.top)/r.height))*100+'%';
document.querySelectorAll('.job').forEach(j=>j.classList.toggle('lit',j.getBoundingClientRect().top<vh*.65));
document.querySelectorAll('.proj .ov').forEach(o=>{const b=o.getBoundingClientRect();if(b.bottom>0&&b.top<vh){const v=o.querySelector('svg');if(v)v.style.translate=`0 ${(b.top+b.height/2-vh/2)*-.08}px`}})};
addEventListener('scroll',()=>{if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});addEventListener('resize',upd);upd();
})();

(function(){const mk=i=>{const d=document.createElement('div');d.id=i;document.body.appendChild(d);return d},dot=mk('dot'),ring=mk('ring');let mx=-100,my=-100,rx=-100,ry=-100;
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`});
(function l(){rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(l)})();
document.addEventListener('pointerover',e=>ring.classList.toggle('h',!!(e.target.closest&&e.target.closest('a,button,label,.card,.proj,.job'))));
addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;const t=document.createElement('div');t.className='tap';t.style.left=e.clientX+'px';t.style.top=e.clientY+'px';document.body.appendChild(t);setTimeout(()=>t.remove(),700)});
})();
