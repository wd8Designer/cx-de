/**
 * Cypherox Technologies — Main Script (German Homepage)
 * Coordinates in-page interactions: tech tabs, testimonials slider,
 * consultation form validation, and smooth anchor scrolling.
 * (Header and Footer are handled by js/header-footer.js)
 */

document.addEventListener('DOMContentLoaded', () => {
  initDirectListeners();
});

// --------------------------------------------------------------------------
// IN-PAGE INTERACTIONS (TABS, SLIDER, FORM, ANCHORS)
// --------------------------------------------------------------------------
function initDirectListeners() {
  initTechTabs();
  initTestimonialsSlider();
  initConsultationForm();
  initSmoothAnchors();
}

// Tech Stack Filter Tabs
function initTechTabs() {
  const tabButtons = document.querySelectorAll('.tech-tab-btn');
  const tabPanes = document.querySelectorAll('.tech-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('is-active'));
      tabPanes.forEach(p => p.classList.remove('is-active'));

      btn.classList.add('is-active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('is-active');
    });
  });
}

// Testimonials Carousel / Slider
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonials-dot');
  if (!track || dots.length === 0) return;

  // Since we show 2 per view on desktop, we might have fewer actual scroll pages than dots
  // For simplicity, let each dot scroll to the specific card index.
  const cards = document.querySelectorAll('.testimonial-card');

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      // Scroll track to the card
      if (cards[index]) {
        track.scrollTo({
          left: cards[index].offsetLeft - track.offsetLeft,
          behavior: 'smooth'
        });
      }
      
      // Update active dot
      dots.forEach(d => {
        d.classList.remove('active');
        d.classList.remove('is-active');
      });
      dot.classList.add('active');
    });
  });

  // Update dots on scroll
  track.addEventListener('scroll', () => {
    const scrollPos = track.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 32; // width + gap
    
    // Calculate index based on scroll progress
    let index = Math.round(scrollPos / cardWidth);
    
    // Check if we reached the very end (fixes the last dot issue)
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (scrollPos >= maxScroll - 10) {
      index = dots.length - 1; // force last dot
    }

    if (dots[index]) {
      dots.forEach(d => {
        d.classList.remove('active');
        d.classList.remove('is-active');
      });
      dots[index].classList.add('active');
    }
  });
}

// Consultation Form Validation & Feedback
function initConsultationForm() {
  const form = document.getElementById('consultation-form');
  const successBox = document.getElementById('form-success-box');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    // Inputs to validate
    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('workEmail');
    const companyInput = document.getElementById('company');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');

    // Reset error states
    form.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Bitte geben Sie Ihren vollständigen Namen ein.');
      hasError = true;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.');
      hasError = true;
    }

    // Validate Company
    if (!companyInput.value.trim()) {
      showError(companyInput, 'Bitte geben Sie Ihr Unternehmen an.');
      hasError = true;
    }

    // Validate Service
    if (!serviceInput.value) {
      showError(serviceInput, 'Bitte wählen Sie einen Leistungsbereich aus.');
      hasError = true;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Bitte beschreiben Sie kurz Ihr Projekt oder Ihre Anforderungen.');
      hasError = true;
    }

    if (!hasError) {
      // Simulate successful submission
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('is-active');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });

  function showError(inputElement, msg) {
    const group = inputElement.closest('.form-group');
    if (!group) return;
    group.classList.add('has-error');
    const errorSpan = group.querySelector('.form-error-msg');
    if (errorSpan) errorSpan.textContent = msg;
  }
}

// Smooth scrolling with fixed header offset compensation
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}



