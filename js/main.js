/**
 * Cypherox Technologies — Unified Master Script
 * Coordinates all site interactions across homepage, service detail pages,
 * and hire developer detail pages:
 * - Tech tabs filter & Testimonials carousel
 * - Service architecture pipeline simulator
 * - Universal FAQ accordions
 * - Interactive developer cost & team estimator
 * - Form validation (General & Hire consultation)
 * - Smooth anchor scrolling with fixed header offset
 */

document.addEventListener('DOMContentLoaded', () => {
  initDirectListeners();
});

// --------------------------------------------------------------------------
// MASTER INITIALIZER
// --------------------------------------------------------------------------
function initDirectListeners() {
  initTechTabs();
  initIndustryTabs();
  initTestimonialsSlider();
  initPipelineCycle();
  initUniversalFAQ();
  initCostCalculator();
  initGeneralConsultationForm();
  initHireConsultationForm();
  initSmoothAnchors();
  initCaseStudyFilters();
  initBlogFilters();
}

// --------------------------------------------------------------------------
// 1. TECH STACK FILTER TABS (HOMEPAGE)
// --------------------------------------------------------------------------
function initTechTabs() {
  const tabButtons = document.querySelectorAll('.tech-tab-btn');
  const tabPanes = document.querySelectorAll('.tech-tab-pane');
  if (!tabButtons.length) return;

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

// --------------------------------------------------------------------------
// 1B. INDUSTRY SUB-SECTOR TABS (INDUSTRY DETAIL PAGES)
// --------------------------------------------------------------------------
function initIndustryTabs() {
  const tabButtons = document.querySelectorAll('.industry-tab-btn');
  const tabPanes = document.querySelectorAll('.industry-tab-pane');
  if (!tabButtons.length) return;

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

// --------------------------------------------------------------------------
// 2. TESTIMONIALS SLIDER / CAROUSEL (HOMEPAGE)
// --------------------------------------------------------------------------
function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const dots = document.querySelectorAll('.testimonials-dot');
  if (!track || dots.length === 0) return;

  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      if (cards[index]) {
        track.scrollTo({
          left: cards[index].offsetLeft - track.offsetLeft,
          behavior: 'smooth'
        });
      }

      dots.forEach(d => {
        d.classList.remove('active');
        d.classList.remove('is-active');
      });
      dot.classList.add('active');
    });
  });

  track.addEventListener('scroll', () => {
    const scrollPos = track.scrollLeft;
    const cardWidth = cards[0].offsetWidth + 32;
    let index = Math.round(scrollPos / cardWidth);

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (scrollPos >= maxScroll - 10) {
      index = dots.length - 1;
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

// --------------------------------------------------------------------------
// 3. SERVICE HERO ARCHITECTURE PIPELINE SIMULATOR (SERVICE DETAIL PAGES)
// --------------------------------------------------------------------------
function initPipelineCycle() {
  const stepGroups = [
    document.querySelectorAll('.pipeline-step'),
    document.querySelectorAll('.matrix-step')
  ];

  stepGroups.forEach(steps => {
    if (steps.length < 2) return;

    let activeIdx = 0;
    setInterval(() => {
      steps.forEach((step, idx) => {
        step.classList.toggle('is-active', idx === activeIdx);
      });
      activeIdx = (activeIdx + 1) % steps.length;
    }, 2600);

    // Manual click override
    steps.forEach((step, idx) => {
      step.addEventListener('click', () => {
        steps.forEach(s => s.classList.remove('is-active'));
        step.classList.add('is-active');
        activeIdx = idx;
      });
    });
  });
}

// --------------------------------------------------------------------------
// 4. UNIVERSAL FAQ ACCORDION (SERVICE DETAIL, HIRE DETAIL & HOMEPAGE)
// --------------------------------------------------------------------------
function initUniversalFAQ() {
  const faqItems = document.querySelectorAll('.faq-item, .faq-accordion-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn, .faq-accordion-header');
    const answerBody = item.querySelector('.faq-answer, .faq-accordion-body');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      // Close other accordion panels in the same list
      const parentList = item.parentElement;
      if (parentList) {
        const siblings = parentList.querySelectorAll('.faq-item, .faq-accordion-item');
        siblings.forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            const otherBtn = other.querySelector('.faq-question-btn, .faq-accordion-header');
            const otherBody = other.querySelector('.faq-answer, .faq-accordion-body');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherBody) otherBody.style.display = 'none';
          }
        });
      }

      // Toggle current panel
      if (isOpen) {
        item.classList.remove('is-open');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (answerBody) answerBody.style.display = 'none';
      } else {
        item.classList.add('is-open');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (answerBody) answerBody.style.display = 'block';
      }
    });
  });
}

// --------------------------------------------------------------------------
// 5. INTERACTIVE DEVELOPER COST & TEAM ESTIMATOR (HIRE DETAIL PAGES)
// --------------------------------------------------------------------------
function initCostCalculator() {
  const seniorityBtns = document.querySelectorAll('[data-seniority]');
  const teamBtns = document.querySelectorAll('[data-team-size]');
  const commitmentBtns = document.querySelectorAll('[data-commitment]');

  const priceEl = document.getElementById('calc-price');
  const periodEl = document.getElementById('calc-period');
  const savingsEl = document.getElementById('calc-savings');
  const lockInBtn = document.getElementById('calc-lock-in-btn');

  if (!priceEl || !seniorityBtns.length) return;

  // Base rates per developer (Full-Time, 160 hrs/month)
  const baseMonthlyRates = {
    mid: 2900,
    senior: 4200,
    lead: 5400
  };

  // Typical US/Western Europe in-house all-in monthly cost for comparison
  const westernInHouseRates = {
    mid: 8500,
    senior: 12500,
    lead: 16000
  };

  let currentSeniority = 'senior';
  let currentTeamSize = 1;
  let currentCommitment = 'full'; // 'full' (160h) or 'part' (80h)

  function updateEstimate() {
    let ratePerDev = baseMonthlyRates[currentSeniority] || 4200;
    let localCostPerDev = westernInHouseRates[currentSeniority] || 12500;

    if (currentCommitment === 'part') {
      ratePerDev = Math.round(ratePerDev * 0.55);
      localCostPerDev = Math.round(localCostPerDev * 0.55);
    }

    const totalEstimate = ratePerDev * currentTeamSize;
    const totalLocalCost = localCostPerDev * currentTeamSize;
    const totalSavings = totalLocalCost - totalEstimate;
    const savingsPercent = Math.round((totalSavings / totalLocalCost) * 100);

    priceEl.textContent = `$${totalEstimate.toLocaleString('en-US')}`;

    if (periodEl) {
      periodEl.textContent = currentCommitment === 'full'
        ? `per month (${currentTeamSize * 160} hrs/mo billed monthly)`
        : `per month (${currentTeamSize * 80} hrs/mo billed monthly)`;
    }

    if (savingsEl) {
      savingsEl.textContent = `Save ~${savingsPercent}% ($${totalSavings.toLocaleString('en-US')}/mo vs. in-house)`;
    }
  }

  // Handle Seniority buttons
  seniorityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      seniorityBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentSeniority = btn.getAttribute('data-seniority');
      updateEstimate();
    });
  });

  // Handle Team Size buttons
  teamBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      teamBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentTeamSize = parseInt(btn.getAttribute('data-team-size'), 10) || 1;
      updateEstimate();
    });
  });

  // Handle Commitment buttons
  commitmentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      commitmentBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      currentCommitment = btn.getAttribute('data-commitment');
      updateEstimate();
    });
  });

  // Lock In Rate Button -> Smooth Scroll to Form & Pre-fill
  if (lockInBtn) {
    lockInBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const senioritySelect = document.getElementById('seniority');
      if (senioritySelect) {
        senioritySelect.value = currentSeniority;
      }

      const messageField = document.getElementById('message');
      if (messageField && !messageField.value) {
        messageField.value = `Inquiring for ${currentTeamSize} dedicated developer(s) (${currentSeniority} level, ${currentCommitment === 'full' ? 'Full-Time 160h' : 'Part-Time 80h'}).`;
      }

      const formSection = document.getElementById('consultation');
      if (formSection) {
        const headerHeight = 80;
        const targetPos = formSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  }

  updateEstimate();
}

// --------------------------------------------------------------------------
// 6. GENERAL CONSULTATION FORM VALIDATION (HOMEPAGE & SERVICE DETAIL)
// --------------------------------------------------------------------------
function initGeneralConsultationForm() {
  const form = document.getElementById('consultation-form');
  const successBox = document.getElementById('form-success-box');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const nameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('workEmail');
    const companyInput = document.getElementById('company');
    const serviceInput = document.getElementById('service');
    const messageInput = document.getElementById('message');

    const isEn = document.documentElement.lang === 'en';

    form.querySelectorAll('.form-group').forEach(group => group.classList.remove('has-error'));

    if (nameInput && !nameInput.value.trim()) {
      showError(nameInput, isEn ? 'Please enter your full name.' : 'Bitte geben Sie Ihren vollständigen Namen ein.');
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim()))) {
      showError(emailInput, isEn ? 'Please enter a valid work email address.' : 'Bitte geben Sie eine gültige geschäftliche E-Mail-Adresse ein.');
      hasError = true;
    }

    if (companyInput && !companyInput.value.trim()) {
      showError(companyInput, isEn ? 'Please enter your company name.' : 'Bitte geben Sie Ihr Unternehmen an.');
      hasError = true;
    }

    if (serviceInput && !serviceInput.value) {
      showError(serviceInput, isEn ? 'Please select a service area.' : 'Bitte wählen Sie einen Leistungsbereich aus.');
      hasError = true;
    }

    if (messageInput && !messageInput.value.trim()) {
      showError(messageInput, isEn ? 'Please describe your project or requirements briefly.' : 'Bitte beschreiben Sie kurz Ihr Projekt oder Ihre Anforderungen.');
      hasError = true;
    }

    if (!hasError) {
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('is-active');
        successBox.classList.add('is-visible');
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

// --------------------------------------------------------------------------
// 7. HIRE CONSULTATION FORM VALIDATION (HIRE DETAIL PAGES)
// --------------------------------------------------------------------------
function initHireConsultationForm() {
  const form = document.getElementById('hire-consultation-form');
  const successBox = document.getElementById('hire-form-success-box');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      const group = field.closest('.form-group');
      if (!field.value.trim()) {
        isValid = false;
        if (group) group.classList.add('has-error');
      } else {
        if (group) group.classList.remove('has-error');
      }

      if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          isValid = false;
          if (group) group.classList.add('has-error');
        }
      }
    });

    if (isValid) {
      form.style.display = 'none';
      if (successBox) {
        successBox.classList.add('is-visible');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });

  form.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

// --------------------------------------------------------------------------
// 8. SMOOTH ANCHOR SCROLLING (80px HEADER OFFSET)
// --------------------------------------------------------------------------
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#' || !href.startsWith('#')) return;

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

// --------------------------------------------------------------------------
// 9. CASE STUDY CATEGORY FILTER (CASE STUDIES LISTING PAGE)
// --------------------------------------------------------------------------
function initCaseStudyFilters() {
  const filterBtns = document.querySelectorAll('.cs-filter-btn');
  const cards = document.querySelectorAll('.cs-card[data-category], .cs-dossier-card[data-category]');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = card.classList.contains('cs-dossier-card') ? 'grid' : 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 10. BLOG CATEGORY FILTER (BLOG LISTING PAGE)
// --------------------------------------------------------------------------
function initBlogFilters() {
  const filterBtns = document.querySelectorAll('.blog-filter-btn, .blog-tag-pill');
  const cards = document.querySelectorAll('.blog-card[data-category], .blog-mag-card[data-category]');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');

      filterBtns.forEach(b => {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');

      cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // Search input filter
  const searchInput = document.getElementById('blog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  }
}

// --------------------------------------------------------------------------
// 11. BLOG TABLE OF CONTENTS SCROLL SPY (BLOG DETAIL PAGE)
// --------------------------------------------------------------------------
function initBlogTocScrollSpy() {
  const tocLinks = document.querySelectorAll('.blog-toc-link');
  if (!tocLinks.length) return;

  const sections = [];
  tocLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const section = document.querySelector(targetId);
      if (section) sections.push({ link, section });
    }
  });

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;
    let currentActive = null;

    sections.forEach(({ link, section }) => {
      if (section.offsetTop <= scrollPos) {
        currentActive = link;
      }
    });

    if (currentActive) {
      tocLinks.forEach(l => l.classList.remove('is-active'));
      currentActive.classList.add('is-active');
    }
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 12. CASE STUDY STEPPER & SCROLL SPY (CASE STUDY DETAIL PAGE)
// --------------------------------------------------------------------------
function initCaseStudyStepper() {
  const stepperLinks = document.querySelectorAll('.cs-stepper-item');
  if (!stepperLinks.length) return;

  const sections = [];
  stepperLinks.forEach(link => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const section = document.querySelector(targetId);
      if (section) {
        sections.push({ link, section });
      }
    }

    // Smooth click handler with fixed header offset
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerOffset = 110;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        stepperLinks.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  });

  // Dynamic ScrollSpy
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150;
    let currentActive = null;

    sections.forEach(({ link, section }) => {
      if (section.offsetTop <= scrollPos) {
        currentActive = link;
      }
    });

    if (currentActive) {
      stepperLinks.forEach(l => l.classList.remove('is-active'));
      currentActive.classList.add('is-active');
    }
  }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
  initBlogTocScrollSpy();
  initCaseStudyStepper();
});



