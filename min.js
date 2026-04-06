var M=window.innerWidth<=768;
// PRE
(function(){var pre=document.getElementById('pre'),fill=document.getElementById('preFill'),pct=document.getElementById('prePct'),code=document.getElementById('preCode'),msg=document.getElementById('preMsg');
var lines=['<span class="c1">&lt;html&gt;</span>','  <span class="c1">&lt;head&gt;</span>','    <span class="c1">&lt;title&gt;</span><span class="c3">Farhan Yousaf</span><span class="c1">&lt;/title&gt;</span>','    <span class="c1">&lt;link</span> <span class="c2">rel=</span><span class="c3">"stylesheet"</span><span class="c1">&gt;</span>','  <span class="c1">&lt;/head&gt;</span>','  <span class="c1">&lt;body&gt;</span>','    <span class="cm">// Mounting portfolio...</span>','    <span class="c1">&lt;App</span> <span class="c2">ready</span>=<span class="c3">true</span> <span class="c1">/&gt;</span>','  <span class="c1">&lt;/body&gt;</span>','<span class="c1">&lt;/html&gt;</span>'];
var msgs=['Loading assets...','Compiling styles...','Rendering components...','Almost ready...'];
var i=0,spd=M?70:130;
function next(){if(i<lines.length){code.innerHTML+=lines[i]+'<br>';i++;var p=Math.round(i/lines.length*100);fill.style.width=p+'%';pct.textContent=p+'%';if(i<msgs.length)msg.textContent=msgs[i];setTimeout(next,spd+Math.random()*80);}else{fill.style.width='100%';pct.textContent='100%';msg.textContent='Ready!';setTimeout(function(){gsap.to(pre,{opacity:0,duration:.5,ease:'power2.inOut',onComplete:function(){pre.style.display='none';heroIn();}});},350);}}
setTimeout(next,400);})();

function heroIn(){var tl=gsap.timeline({defaults:{ease:'power4.out'}});
tl.to('.h1-word',{y:'0%',duration:1.1,stagger:.1}).to('.an',{opacity:1,y:0,duration:.8,stagger:.06},'-=.7');
document.querySelectorAll('.stat-num').forEach(function(el){var to=parseInt(el.dataset.to);gsap.to(el,{textContent:to,duration:1.8,delay:1,snap:{textContent:1},ease:'power2.out',onUpdate:function(){el.textContent=Math.round(parseFloat(el.textContent));}});});}

gsap.registerPlugin(ScrollTrigger);
var D=M?.35:.7,Y=M?18:40;
gsap.utils.toArray('.sec-chip,.sec-head h2,.sub-heading,.ct-desc,.exp-title').forEach(function(e){gsap.from(e,{scrollTrigger:{trigger:e,start:'top 88%'},y:Y,opacity:0,duration:D,ease:'power4.out'});});
gsap.utils.toArray('.srv,.exp-card,.yt-card,.ct-item,.ct-form-wrap,.flag,.stat-card').forEach(function(e,i){gsap.from(e,{scrollTrigger:{trigger:e,start:'top 90%'},y:Y,opacity:0,duration:D,delay:M?0:(i%4)*.05,ease:'power4.out'});});

// NAV
var nav=document.getElementById('nav');window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>50);});
var burger=document.getElementById('burger'),nl=document.getElementById('navLinks');
burger.addEventListener('click',function(){burger.classList.toggle('active');nl.classList.toggle('open');});
nl.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){burger.classList.remove('active');nl.classList.remove('open');});});
document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var t=document.querySelector(this.getAttribute('href'));if(t)window.scrollTo({top:t.offsetTop-nav.offsetHeight-8,behavior:'smooth'});});});
var secs=document.querySelectorAll('section[id]'),nla=document.querySelectorAll('.nav-center a');
window.addEventListener('scroll',function(){var c='';secs.forEach(function(s){if(window.scrollY>=s.offsetTop-180)c=s.id;});nla.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+c);});});

// THEME
var tb=document.getElementById('themeBtn'),saved=localStorage.getItem('theme')||'light';
document.documentElement.setAttribute('data-theme',saved);
tb.addEventListener('click',function(){var c=document.documentElement.getAttribute('data-theme'),n=c==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',n);localStorage.setItem('theme',n);});

// WA BUBBLE
var waMsg=document.getElementById('waMsg'),waClose=document.getElementById('waClose');
setTimeout(function(){if(waMsg)waMsg.classList.add('show');},3500);
if(waClose)waClose.addEventListener('click',function(){waMsg.classList.remove('show');});

// FLAGSHIP
var flags=[{name:'HSL Travel & Tours',desc:'Advanced online flight booking portal with real-time search, booking management, and payment integration for a seamless travel experience.',feats:['Flight Booking','Payment Gateway','Admin Dashboard','Responsive UI'],url:'https://hsltravelandtours.com/',label:'Flagship Project'},{name:'Avian Pk',desc:'Full-featured travel agency platform with flight tickets, Umrah packages, and visa services — built with Laravel + Vue.js.',feats:['Vue.js + Laravel','Multi-Service','Booking System','SEO Optimized'],url:'https://avian.pk/',label:'Featured Project'}];
var fg=document.getElementById('flagship');if(fg){var fh='';flags.forEach(function(f){var ft=f.feats.map(function(x){return '<div class="flag-feat"><i class="fas fa-check"></i>'+x+'</div>';}).join('');var ss='https://s0.wp.com/mshots/v1/'+encodeURIComponent(f.url)+'?w=600';fh+='<div class="flag"><div class="flag-chip">'+f.label+'</div><h4>'+f.name+'</h4><p>'+f.desc+'</p><div class="flag-feats">'+ft+'</div><a href="'+f.url+'" target="_blank" class="flag-link">Launch Site <i class="fas fa-arrow-right"></i></a><div class="flag-preview"><img src="'+ss+'" alt="'+f.name+'" loading="lazy"></div></div>';});fg.innerHTML=fh;}

// PROJECTS
var P=[{n:'IMYA',d:'UK healthcare eCommerce.',t:['eCommerce','Healthcare'],u:'https://imya.uk/'},{n:'Moan Sale',d:'Grocery eCommerce platform.',t:['eCommerce','Food'],u:'https://moan.sale/'},{n:'ABCN Services',d:'UK supplements store.',t:['eCommerce','Health'],u:'https://abcnservices.co.uk/'},{n:'QDSA',d:'Healthcare supplements.',t:['eCommerce'],u:'https://qdsa.uk/'},{n:'BBA Services',d:'UK business eCommerce.',t:['eCommerce'],u:'http://bbaservices.co.uk/'},{n:'TMK Health',d:'Wellness eCommerce.',t:['eCommerce'],u:'https://tmkhealth.uk/'},{n:'MDKH Construction',d:'Construction company site.',t:['Corporate'],u:'http://mdkh.uk/'},{n:'EEGA Services',d:'UK business platform.',t:['Business'],u:'https://eegaservices.co.uk/'},{n:'Swiftfix Auto',d:'UK auto repair site.',t:['Automotive'],u:'https://www.swiftfixauto.co.uk/'},{n:'UK Perfume & Cosmetics',d:'Beauty eCommerce.',t:['eCommerce'],u:'https://www.ukperfumeandcosmetics.uk/'},{n:'UK Cosmetics',d:'Cosmetics store.',t:['eCommerce'],u:'https://www.ukcosmetics.uk/'},{n:'Biomarsh',d:'Environmental services.',t:['Corporate'],u:'https://biomarshenvironmental.uk/'},{n:'DG Transporter',d:'Logistics website.',t:['Logistics'],u:'https://www.dgtransporter.co.uk/'},{n:'Patheon Services',d:'Professional services.',t:['Corporate'],u:'https://www.patheonservices.uk/'},{n:'SIM Security',d:'Security services.',t:['Security'],u:'https://www.simsecurity.services/'}];
var pg=document.getElementById('projGrid');if(pg){var ph='';P.forEach(function(p,i){var tg=p.t.map(function(x){return '<span>'+x+'</span>';}).join('');ph+='<div class="proj"><div class="proj-n">Project '+(i+3)+'</div><h4>'+p.n+'</h4><p>'+p.d+'</p><div class="proj-tags">'+tg+'</div><a href="'+p.u+'" target="_blank" class="proj-link">View <i class="fas fa-arrow-right"></i></a></div>';});pg.innerHTML=ph;
if(!M)setTimeout(function(){gsap.utils.toArray('.proj').forEach(function(e,i){gsap.from(e,{scrollTrigger:{trigger:e,start:'top 92%'},y:25,opacity:0,duration:.4,delay:(i%3)*.05,ease:'power4.out'});});},40);}

// GALLERY
var G=[];['website1.png','website2.png','website3.png','website4.png','website5.png','website6.PNG','website7.PNG','website8.PNG','website9.PNG','website10.PNG','website11.PNG','website12.PNG','website13.png'].forEach(function(f,i){G.push({s:'img/'+f,c:'web',a:'Website '+(i+1)});});
G.push({s:'img/logo1.png',c:'logo',a:'Logo'});
for(var fl=1;fl<=32;fl++){var ext=(fl===13)?'.jpg':'.png';G.push({s:'img/flyer'+fl+ext,c:'flyer',a:'Flyer '+fl});}
var gg=document.getElementById('gal');if(gg){var gh='';G.forEach(function(g){gh+='<div class="gi '+g.c+'"><img src="'+g.s+'" alt="'+g.a+'" loading="lazy"></div>';});gg.innerHTML=gh;
if(!M)setTimeout(function(){gsap.utils.toArray('.gi').forEach(function(e,i){gsap.from(e,{scrollTrigger:{trigger:e,start:'top 93%'},y:20,opacity:0,duration:.35,delay:(i%4)*.03,ease:'power4.out'});});},60);}
document.querySelectorAll('.gt').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.gt').forEach(function(x){x.classList.remove('active');});b.classList.add('active');var f=b.dataset.f;document.querySelectorAll('.gi').forEach(function(it){it.style.display=(f==='all'||it.classList.contains(f))?'block':'none';});});});

// YT LITE
document.querySelectorAll('.yt-poster').forEach(function(p){p.addEventListener('click',function(){var w=this.parentElement,id=w.dataset.yt;if(id){var ifr=document.createElement('iframe');ifr.src='https://www.youtube.com/embed/'+id+'?autoplay=1';ifr.allowFullscreen=true;ifr.allow='autoplay';w.innerHTML='';w.appendChild(ifr);}});});

// CONTACT FORM
var form=document.getElementById('ctForm'),st=document.getElementById('ctStatus'),cs=1;
var steps=document.querySelectorAll('.ct-step'),clines=document.querySelectorAll('.ct-line');
function showS(n){cs=n;document.querySelectorAll('.ct-page').forEach(function(p){p.classList.remove('ct-active');});document.querySelector('.ct-p'+n).classList.add('ct-active');
steps.forEach(function(s){var sn=parseInt(s.dataset.s);s.classList.remove('active','done');if(sn===n)s.classList.add('active');if(sn<n)s.classList.add('done');});
clines.forEach(function(l,i){l.classList.toggle('done',i<n-1);});
if(n===3){document.getElementById('rN').textContent=document.getElementById('cName').value||'—';document.getElementById('rE').textContent=document.getElementById('cEmail').value||'—';document.getElementById('rS').textContent=document.getElementById('cSubject').value||'—';document.getElementById('rM').textContent=document.getElementById('cMsg').value||'—';}}
document.querySelectorAll('.ct-next').forEach(function(b){b.addEventListener('click',function(){var nx=parseInt(this.dataset.n);
if(cs===1){var n=document.getElementById('cName').value.trim(),e=document.getElementById('cEmail').value.trim();if(!n||!e){st.textContent='Please fill name & email.';st.style.color='var(--rose)';gsap.fromTo(form,{x:0},{x:-5,duration:.04,repeat:5,yoyo:true});return;}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){st.textContent='Valid email needed.';st.style.color='var(--rose)';return;}st.textContent='';}
if(cs===2){var s=document.getElementById('cSubject').value.trim(),m=document.getElementById('cMsg').value.trim();if(!s||!m){st.textContent='Fill subject & message.';st.style.color='var(--rose)';gsap.fromTo(form,{x:0},{x:-5,duration:.04,repeat:5,yoyo:true});return;}st.textContent='';}
showS(nx);});});
document.querySelectorAll('.ct-prev').forEach(function(b){b.addEventListener('click',function(){showS(parseInt(this.dataset.p));});});

form.addEventListener('submit',function(e){e.preventDefault();
var n=document.getElementById('cName').value.trim(),em=document.getElementById('cEmail').value.trim(),s=document.getElementById('cSubject').value.trim(),m=document.getElementById('cMsg').value.trim();
var via=form.querySelector('input[name="via"]:checked').value;
gsap.to(form.querySelector('.btn-send'),{scale:.94,duration:.1,yoyo:true,repeat:1});
var waMsg='Hi Farhan!%0A%0AName: '+encodeURIComponent(n)+'%0AEmail: '+encodeURIComponent(em)+'%0ASubject: '+encodeURIComponent(s)+'%0AMessage: '+encodeURIComponent(m);
var waUrl='https://wa.me/923325106196?text='+waMsg;
var mailUrl='mailto:farhanbhatti644@gmail.com?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent('Name: '+n+'\nEmail: '+em+'\n\n'+m);
if(via==='both'){window.open(waUrl,'_blank');setTimeout(function(){window.location.href=mailUrl;},500);st.innerHTML='<span style="color:var(--acc)">Opening WhatsApp + Email...</span>';}
else if(via==='wa'){window.open(waUrl,'_blank');st.innerHTML='<span style="color:var(--acc)">Opening WhatsApp...</span>';}
else{window.location.href=mailUrl;st.innerHTML='<span style="color:var(--acc)">Opening email...</span>';}
setTimeout(function(){form.reset();showS(1);st.textContent='';},4000);});

document.getElementById('yr').textContent=new Date().getFullYear();
