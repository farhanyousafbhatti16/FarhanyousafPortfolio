
 
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
  
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
  
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      });
    });
  
    // Gallery filter
    document.addEventListener('DOMContentLoaded', function() {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const galleryItems = document.querySelectorAll('.gallery-item');
  
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');
  
          const filter = this.getAttribute('data-filter');
  
          galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    });
  
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  
    // Contact form handling with WhatsApp
    const contactForm = document.getElementById('contactForm');
    const statusEl = document.getElementById('formStatus');
    const clearBtn = document.getElementById('clearForm');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Basic validation
      if (!name || !email || !subject || !message) {
        statusEl.textContent = 'Please fill all required fields.';
        statusEl.style.color = '#ffc107';
        return;
      }
  
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        statusEl.textContent = 'Please enter a valid email.';
        statusEl.style.color = '#ffc107';
        return;
      }
  
      // Prepare WhatsApp message
      const whatsappNumber = "923325106196"; // country code without '+'
      const whatsappMessage = `Hello, here are my details:%0A- Name: ${name}%0A- Email: ${email}%0A- Subject: ${subject}%0A- Message: ${message}`;
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
      statusEl.textContent = 'Opening WhatsApp...';
      statusEl.style.color = '#4a6cf7';
  
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
  
      // Reset form after sending
      contactForm.reset();
      setTimeout(() => {
        statusEl.textContent = '';
      }, 2000);
    });
  
    // Clear form button
    clearBtn.addEventListener('click', function() {
      contactForm.reset();
      statusEl.textContent = '';
    });
  
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.navbar .nav-link');
  
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    });
 