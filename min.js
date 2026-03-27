/* FARHAN YOUSAF — LUXURY AGENCY PORTFOLIO JS */

// ═══ DETECT MOBILE ═══
var isMobile = window.innerWidth <= 768;

// ═══ LOADER ═══
(function(){
  var loader = document.getElementById('loader');
  var fill = document.getElementById('loaderFill');
  var p = 0;
  // Faster on mobile
  var speed = isMobile ? 80 : 150;
  var increment = isMobile ? 25 : 15;
  function tick(){
    p += Math.random() * increment + 8;
    if(p > 100) p = 100;
    fill.style.width = p + '%';
    if(p < 100){ setTimeout(tick, speed + Math.random() * 100); }
    else { setTimeout(function(){
      gsap.to(loader, { opacity: 0, duration: 0.4, ease: 'power2.inOut', onComplete: function(){ loader.style.display = 'none'; heroEnter(); }});
    }, 200); }
  }
  tick();
})();

// ═══ HERO ENTER ═══
function heroEnter(){
  var tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.h1-word', { y: '0%', duration: 1.2, stagger: 0.12 })
    .to('.an-up', { opacity: 1, y: 0, duration: 0.9, stagger: 0.08 }, '-=0.8')
    .from('.hero-float-card', { opacity: 0, scale: 0.8, y: 20, duration: 0.8, stagger: 0.15 }, '-=0.5');
}

// ═══ GSAP SCROLL — Optimized ═══
gsap.registerPlugin(ScrollTrigger);

// Simpler animations on mobile
var animDuration = isMobile ? 0.5 : 0.9;
var animDistance = isMobile ? 30 : 50;

gsap.utils.toArray('.sec-tag, .sec-h2, .contact-h2, .contact-p').forEach(function(el){
  gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 90%' }, y: animDistance, opacity: 0, duration: animDuration, ease: 'power4.out' });
});

gsap.utils.toArray('.service-card, .journey-card, .yt-card, .cd-item, .cf').forEach(function(el, i){
  gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 92%' }, y: animDistance, opacity: 0, duration: animDuration, delay: isMobile ? 0 : (i % 4) * 0.08, ease: 'power4.out' });
});

// ═══ NAV ═══
var nav = document.getElementById('nav');
window.addEventListener('scroll', function(){ nav.classList.toggle('scrolled', window.scrollY > 80); });

var menuBtn = document.getElementById('menuBtn');
var navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', function(){ menuBtn.classList.toggle('active'); navLinks.classList.toggle('open'); });
navLinks.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ menuBtn.classList.remove('active'); navLinks.classList.remove('open'); }); });

document.querySelectorAll('a[href^="#"]').forEach(function(a){
  a.addEventListener('click', function(e){
    e.preventDefault();
    var id = this.getAttribute('href');
    if(id === '#') return;
    var t = document.querySelector(id);
    if(t) window.scrollTo({ top: t.offsetTop - nav.offsetHeight - 16, behavior: 'smooth' });
  });
});

var sections = document.querySelectorAll('section[id], .hero');
var nLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
window.addEventListener('scroll', function(){
  var cur = '';
  sections.forEach(function(s){ if(window.scrollY >= s.offsetTop - 240) cur = s.id || 'home'; });
  nLinks.forEach(function(a){ a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
});

// ═══ PROJECTS ═══
var projects = [
  { name:'HSL Travel & Tours', desc:'Online flight booking portal with modern design and seamless booking experience.', tags:['Web App','Booking','Payment'], url:'https://hsltravelandtours.com/' },
  { name:'IMYA', desc:'UK healthcare eCommerce store with secure online shopping.', tags:['eCommerce','Healthcare'], url:'https://imya.uk/' },
  { name:'Moan Sale', desc:'Fresh grocery eCommerce with order management.', tags:['eCommerce','Food'], url:'https://moan.sale/' },
  { name:'ABCN Services', desc:'UK supplements store with fast checkout.', tags:['eCommerce','Health'], url:'https://abcnservices.co.uk/' },
  { name:'QDSA', desc:'Healthcare supplements with responsive design.', tags:['eCommerce','Health'], url:'https://qdsa.uk/' },
  { name:'BBA Services', desc:'UK business eCommerce with professional branding.', tags:['eCommerce','Business'], url:'http://bbaservices.co.uk/' },
  { name:'TMK Health', desc:'Health & wellness eCommerce store.', tags:['eCommerce','Wellness'], url:'https://tmkhealth.uk/' },
  { name:'MDKH Construction', desc:'Construction company website with custom backend.', tags:['Corporate','Construction'], url:'http://mdkh.uk/' },
  { name:'EEGA Services', desc:'UK business solutions platform.', tags:['Business','Services'], url:'https://eegaservices.co.uk/' },
  { name:'Swiftfix Auto', desc:'UK auto repair with custom design.', tags:['Automotive','Services'], url:'https://www.swiftfixauto.co.uk/' },
  { name:'UK Perfume & Cosmetics', desc:'Premium eCommerce storefront.', tags:['eCommerce','Beauty'], url:'https://www.ukperfumeandcosmetics.uk/' },
  { name:'UK Cosmetics', desc:'Cosmetics store with optimized layout.', tags:['eCommerce','Beauty'], url:'https://www.ukcosmetics.uk/' },
  { name:'Biomarsh Environmental', desc:'Environmental services website.', tags:['Corporate','Green'], url:'https://biomarshenvironmental.uk/' },
  { name:'DG Transporter', desc:'Logistics & transportation website.', tags:['Logistics','Services'], url:'https://www.dgtransporter.co.uk/' },
  { name:'Patheon Services', desc:'Professional services website.', tags:['Corporate','Services'], url:'https://www.patheonservices.uk/' },
  { name:'SIM Security', desc:'Security & surveillance services.', tags:['Security','Services'], url:'https://www.simsecurity.services/' },
  { name:'Avian Pk', desc:'Travel agency — flights, Umrah, visa.', tags:['Travel','Booking'], url:'https://avian.pk/' }
];

var wg = document.getElementById('workGrid');
if(wg){
  var h = '';
  projects.forEach(function(p,i){
    var tags = p.tags.map(function(t){ return '<span>'+t+'</span>'; }).join('');
    h += '<div class="work-card"><div class="wc-badge">Project '+(i+1)+'</div><h4>'+p.name+'</h4><p>'+p.desc+'</p><div class="wc-tags">'+tags+'</div><a href="'+p.url+'" target="_blank" class="wc-link">View Project <i class="fas fa-arrow-right"></i></a></div>';
  });
  wg.innerHTML = h;
  setTimeout(function(){
    gsap.utils.toArray('.work-card').forEach(function(el,i){
      gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 92%' }, y: animDistance, opacity: 0, duration: animDuration, delay: isMobile ? 0 : (i%3)*0.1, ease: 'power4.out' });
    });
  }, 50);
}

// ═══ GALLERY ═══
var gal = [];

// Websites — some are .png some .PNG
['website1.png','website2.png','website3.png','website4.png','website5.png','website6.PNG','website7.PNG','website8.PNG','website9.PNG','website10.PNG','website11.PNG','website12.PNG','website13.png'].forEach(function(f,i){
  gal.push({src:'img/'+f, cat:'web', alt:'Website '+(i+1)});
});

// Logo
gal.push({src:'img/logo1.png', cat:'logo', alt:'Logo Design'});

// Flyers — 1 to 32, flyer13 is .jpg
for(var fl=1;fl<=32;fl++){
  var ext = (fl === 13) ? '.jpg' : '.png';
  gal.push({src:'img/flyer'+fl+ext, cat:'flyer', alt:'Flyer '+fl});
}

var gg = document.getElementById('galGrid');
if(gg){
  var gh = '';
  gal.forEach(function(g){ gh += '<div class="gal-item '+g.cat+'"><img src="'+g.src+'" alt="'+g.alt+'" loading="lazy"></div>'; });
  gg.innerHTML = gh;
  // Only animate gallery items on desktop — too many items lag on mobile
  if(!isMobile){
    setTimeout(function(){
      gsap.utils.toArray('.gal-item').forEach(function(el,i){
        gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 92%' }, y: 40, opacity: 0, scale: 0.96, duration: 0.6, delay: (i%4)*0.06, ease: 'power4.out' });
      });
    }, 100);
  }
}

document.querySelectorAll('.gf').forEach(function(btn){
  btn.addEventListener('click', function(){
    document.querySelectorAll('.gf').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var f = btn.dataset.filter;
    document.querySelectorAll('.gal-item').forEach(function(item){
      var show = f === 'all' || item.classList.contains(f);
      item.style.display = show ? 'block' : 'none';
      if(show) gsap.from(item, { opacity: 0, y: 20, scale: 0.96, duration: 0.4, ease: 'power2.out' });
    });
  });
});

// ═══ CONTACT FORM ═══
var form = document.getElementById('contactForm');
var status = document.getElementById('formStatus');
var clearBtn = document.getElementById('clearForm');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var n = document.getElementById('name').value.trim();
    var em = document.getElementById('email').value.trim();
    var s = document.getElementById('subject').value.trim();
    var m = document.getElementById('message').value.trim();

    if(!n || !em || !s || !m){
      status.textContent = 'Please fill in all fields.';
      status.style.color = '#fb7185';
      gsap.fromTo(form, {x:0}, {x:-8, duration:.06, repeat:5, yoyo:true});
      return;
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){
      status.textContent = 'Please enter a valid email.';
      status.style.color = '#fb7185';
      gsap.fromTo(form, {x:0}, {x:-8, duration:.06, repeat:5, yoyo:true});
      return;
    }

    // Success
    var btn = form.querySelector('.btn-submit');
    gsap.to(btn, { scale: .94, duration: .12, yoyo: true, repeat: 1 });

    status.textContent = 'Opening WhatsApp...';
    status.style.color = '#6ee7b7';

    var msg = 'Hello!%0A- Name: '+n+'%0A- Email: '+em+'%0A- Subject: '+s+'%0A- Message: '+m;
    window.open('https://wa.me/923325106196?text='+msg, '_blank');
    form.reset();
    setTimeout(function(){ status.textContent = ''; }, 3000);
  });
}

if(clearBtn){
  clearBtn.addEventListener('click', function(){
    form.reset();
    status.textContent = '';
  });
}

// ═══ YEAR ═══
var yr = document.getElementById('currentYear');
if(yr) yr.textContent = new Date().getFullYear();

// ═══ YOUTUBE LITE — Load iframe only on click ═══
document.querySelectorAll('.yt-thumb').forEach(function(thumb){
  thumb.addEventListener('click', function(){
    var parent = this.parentElement;
    var ytId = parent.dataset.yt;
    if(ytId){
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1';
      iframe.title = 'YouTube Video';
      iframe.allowFullscreen = true;
      iframe.allow = 'autoplay';
      parent.innerHTML = '';
      parent.appendChild(iframe);
    }
  });
});
