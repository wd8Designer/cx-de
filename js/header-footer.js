/**
 * Cypherox Enterprise Landing Page - Header & Footer Script
 * Exact match ported from legacy project (www/cx-uk-main/cx-uk-main)
 */

// ==========================================
// PART 1: DATA DEFINITIONS
// ==========================================

const navigationData = [
  {
    label: 'AI Agent',
    href: '#'
  },
  {
    label: 'Services',
    href: '#',
    type: 'mega',
    megaMenu: {
      columns: [
        {
          heading: 'Generative AI Solutions',
          links: [
            { label: 'AI Chatbot Development', href: '#' },
            { label: 'Virtual Assistant Services', href: '#' },
            { label: 'AI Language Translator', href: '#' },
            { label: 'AI Content Generator', href: '#' },
            { label: 'Virtual Research Assistant', href: '#' }
          ]
        },
        {
          heading: 'AI & ML Development',
          links: [
            { label: 'Predictive Maintenance', href: '#' },
            { label: 'Fraud Detection', href: '#' },
            { label: 'AutoML', href: '#' }
          ]
        },
        {
          heading: 'Consulting Services',
          links: [
            { label: 'IT Consulting', href: '#' },
            { label: 'Startup IT Consulting', href: '#' },
            { label: 'AI Strategy Consulting', href: '#' }
          ]
        },
        {
          heading: 'UI/UX Design Services',
          links: [
            { label: 'Responsive Web Design', href: '#' },
            { label: 'Mobile App Design', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Automation',
    href: '#',
    type: 'dropdown',
    graphicNum: '85%',
    graphicText: 'FASTER<br>PROCESSES',
    ctaTitle: 'Streamline Your Operations',
    ctaDesc: 'Schedule a discovery session to identify automation opportunities and reduce manual overhead.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Business Process Automation (RPA)', href: '#' },
            { label: 'Workflow Automation', href: '#' },
            { label: 'Marketing & CRM Automation', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Technology',
    href: '#',
    type: 'dropdown',
    graphicNum: '50+',
    graphicText: 'TECH<br>EXPERTS',
    ctaTitle: 'Build Scalable Software',
    ctaDesc: 'Let\'s discuss your tech stack and engineer a robust architecture for your next big product.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Web Development', href: '#' },
            { label: 'App Development', href: '#' },
            { label: 'E-Commerce', href: '#' },
            { label: 'CMS (WordPress, Drupal)', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Hire Developers',
    href: '#',
    type: 'mega',
    megaMenu: {
      columns: [
        {
          heading: 'Mobile App Developers',
          links: [
            { label: 'Hire iOS Developers', href: '#' },
            { label: 'Hire Android Developers', href: '#' },
            { label: 'Hire Swift Developers', href: '#' },
            { label: 'Hire Kotlin Developers', href: '#' },
            { label: 'Hire Flutter Developers', href: '#' },
            { label: 'Hire React Native Developers', href: '#' }
          ]
        },
        {
          heading: 'Front-End Web Developers',
          links: [
            { label: 'Hire AngularJS Developers', href: '#' },
            { label: 'Hire ReactJS Developers', href: '#' },
            { label: 'Hire VueJS Developers', href: '#' }
          ]
        },
        {
          heading: 'Back-End Web Developers',
          links: [
            { label: 'Hire NodeJS Developers', href: '#' },
            { label: 'Hire Laravel Developers', href: '#' },
            { label: 'Hire Python Developers', href: '#' },
            { label: 'Hire PHP Developers', href: '#' }
          ]
        },
        {
          heading: 'E-Commerce Developers',
          links: [
            { label: 'Hire WordPress Developers', href: '#' },
            { label: 'Hire Shopify Developers', href: '#' },
            { label: 'Hire Magento Developers', href: '#' },
            { label: 'Hire BigCommerce Developers', href: '#' },
            { label: 'Hire WooCommerce Developers', href: '#' },
            { label: 'Hire Chatbot Developers', href: '#' },
            { label: 'Hire Graphic Designers', href: '#' },
            { label: 'Hire UI/UX Designers', href: '#' },
            { label: 'Hire Digital Marketers', href: '#' }
          ]
        },
        {
          heading: 'Trending Developers',
          links: [
            { label: 'Hire DevOps Developers', href: '#' },
            { label: 'Hire AWS Developers', href: '#' },
            { label: 'Hire AI Developers', href: '#' },
            { label: 'Hire ML Developers', href: '#' },
            { label: 'Hire Blockchain Developers', href: '#' },
            { label: 'Hire AR Developers', href: '#' },
            { label: 'Hire VR Developers', href: '#' },
            { label: 'Hire Data Analytics Experts', href: '#' },
            { label: 'Hire Full Stack Developers', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Industries',
    href: '#',
    type: 'dropdown',
    graphicNum: '12+',
    graphicText: 'SECTORS<br>SERVED',
    ctaTitle: 'Tailored Industry Solutions',
    ctaDesc: 'Get bespoke technology strategies that comply with your specific industry regulations and needs.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'Finance & Banking', href: '#' },
            { label: 'Healthcare', href: '#' },
            { label: 'Retail & Ecommerce', href: '#' },
            { label: 'Manufacturing', href: '#' },
            { label: 'Real Estate', href: '#' },
            { label: 'Logistics & Transportation', href: '#' }
          ]
        }
      ]
    }
  },
  {
    label: 'Company',
    href: '#',
    type: 'dropdown',
    graphicNum: '100%',
    graphicText: 'CLIENT<br>FOCUS',
    ctaTitle: 'Partner with Cypherox',
    ctaDesc: 'Reach out to our leadership team and discover how we can drive your digital transformation.',
    megaMenu: {
      columns: [
        {
          heading: '',
          links: [
            { label: 'About Us', href: '#' },
            { label: 'Contact Us', href: '#' },
            { label: 'Case Studies', href: '#' },
            { label: 'Blog', href: '#' }
          ]
        }
      ]
    }
  }
];

const footerData = {
  columns: [
    {
      heading: 'Services',
      links: [
        { label: 'AI & Automation', href: '#' },
        { label: 'Software Dev', href: '#' },
        { label: 'Data & Analytics', href: '#' },
        { label: 'Cloud & DevOps', href: '#' },
        { label: 'Product Engineering', href: '#' }
      ]
    },
    {
      heading: 'Industries',
      links: [
        { label: 'Healthcare', href: '#' },
        { label: 'Finance', href: '#' },
        { label: 'Retail', href: '#' },
        { label: 'Manufacturing', href: '#' },
        { label: 'Education', href: '#' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'News', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Whitepapers', href: '#' },
        { label: 'Webinars', href: '#' }
      ]
    }
  ]
};

const siteHeaderHTML = `<header class="header" id="header">
  <div class="header__container container-fluid">
    <a href="/index.html" class="header__logo" aria-label="Cypherox Home">
      <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto; filter: invert(1) brightness(2);">
    </a>
    <nav class="header__nav" aria-label="Main navigation" id="main-nav">
      <!-- JS will render navigation items here via renderMegaMenus() -->
    </nav>
    <div class="header__actions">
      <a href="#consultation" class="header__cta btn btn--pill-outline">Let's Talk</a>
      <a href="#consultation" class="header__cta btn btn--pill-primary">Book A 15 Min Call</a>
    </div>
    <button class="mobile-toggle" aria-label="Open navigation menu" aria-expanded="false" id="mobile-menu-btn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  </div>
  <div id="mobile-drawer-container"></div>
</header>
`;

const siteFooterHTML = `<footer class="footer" id="footer">
  <div class="footer__container container" id="footer-container">
    <!-- JS renders footer grid + bottom bar here -->
  </div>
</footer>
`;

// ==========================================
// PART 2: RENDER FUNCTIONS
// ==========================================

function ensureHeaderFooterHTML() {
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl && (!headerEl.innerHTML.trim() || !headerEl.querySelector('.header'))) {
    headerEl.innerHTML = siteHeaderHTML;
  }
  if (footerEl && (!footerEl.innerHTML.trim() || !footerEl.querySelector('.footer'))) {
    footerEl.innerHTML = siteFooterHTML;
  }
}

function renderMegaMenus() {
  const navContainer = document.querySelector('.header__nav');
  if (!navContainer) return;
  
  let html = '';
  navigationData.forEach(item => {
    let panelHtml = '';
    
    if (item.type === 'dropdown') {
      let linksHtml = '';
      if (item.megaMenu && item.megaMenu.columns) {
        item.megaMenu.columns.forEach(col => {
          col.links.forEach(link => {
            linksHtml += `<a href="${link.href}" class="featured-dropdown__link">${link.label}</a>`;
          });
        });
      }
      panelHtml = `
        <div class="mega-menu featured-dropdown">
          <div class="featured-dropdown__inner container">
            <div class="featured-dropdown__top">
              <div class="featured-dropdown__content">
                <h3 class="featured-dropdown__title">${item.label}</h3>
                <div class="featured-dropdown__grid">
                  ${linksHtml}
                </div>
              </div>
              <div class="featured-dropdown__graphic">
                <div class="featured-dropdown__graphic-number">${item.graphicNum || '250+'}</div>
                <div class="featured-dropdown__graphic-text">${item.graphicText || 'ENTERPRISE<br>PROJECTS'}</div>
              </div>
            </div>
            <div class="featured-dropdown__bottom">
              <div class="featured-dropdown__bottom-text">
                <h4>${item.ctaTitle || 'Accelerate Your Digital Transformation'}</h4>
                <p>${item.ctaDesc || 'Schedule a free discovery session to explore your needs and find tailored solutions with no obligation.'}</p>
              </div>
              <a href="#consultation" class="btn btn--dark">SCHEDULE A CALL</a>
            </div>
          </div>
        </div>
      `;
    } else if (item.type === 'mega') {
      const cols = item.megaMenu ? item.megaMenu.columns : [];
      
      if (item.label === 'About') {
        let colsHtml = '';
        cols.forEach(col => {
          let links = col.links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
          colsHtml += `<div class="mega-menu__col"><div class="mega-menu__heading">${col.heading}</div><div class="mega-menu__list">${links}</div></div>`;
        });
        panelHtml = `
          <div class="mega-menu">
            <div class="mega-menu__inner">
              <div class="mega-menu__about-layout">
                <div class="mega-menu__about-cols">${colsHtml}</div>
                <div class="mega-menu__about-image">
                  <div class="mega-menu__about-image-inner">
                    <span class="mega-menu__about-image-text">Enterprise Technology Partner</span>
                  </div>
                </div>
              </div>
              <div class="mega-menu__bottom"><span>High-quality, cost-effective technology solutions</span> <a href="#consultation" class="btn btn--primary">Schedule a Call</a></div>
            </div>
          </div>
        `;
      } else if (cols.length >= 2) {
        // Tabbed mega menu (Services, Solutions, Technologies)
        let tabsHtml = '';
        let panelsHtml = '';
        cols.forEach((col, idx) => {
          const activeClass = idx === 0 ? ' active' : '';
          const displayStyle = idx === 0 ? 'display:block' : 'display:none';
          tabsHtml += `<li class="mega-tab__item${activeClass}" data-tab-idx="${idx}" role="button" tabindex="0">
            <span>${col.heading}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 6 15 12 9 18"/></svg>
          </li>`;
          let links = col.links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
          panelsHtml += `<div class="mega-tab__panel${activeClass}" data-tab-panel="${idx}" style="${displayStyle}">
            <p class="mega-tab__panel-title">${col.heading}</p>
            <div class="mega-tab__panel-links">${links}</div>
          </div>`;
        });
        
        panelHtml = `
          <div class="mega-menu mega-menu--tabbed">
            <div class="mega-menu__inner">
              <div class="mega-tab">
                <ul class="mega-tab__sidebar">${tabsHtml}</ul>
                <div class="mega-tab__content">${panelsHtml}</div>
              </div>
            </div>
          </div>
        `;
      } else if (cols.length === 1) {
        let links = cols[0].links.map(l => `<a href="${l.href}" class="mega-menu__link">${l.label}</a>`).join('');
        panelHtml = `
          <div class="mega-menu">
            <div class="mega-menu__inner">
              <div class="mega-menu__heading">${cols[0].heading}</div>
              <div class="mega-menu__single-grid">${links}</div>
            </div>
          </div>
        `;
      }
    }
    
    const chevronSvg = (item.type === 'mega' || item.type === 'dropdown') 
      ? `<svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;"><polyline points="6 9 12 15 18 9"></polyline></svg>` 
      : '';
      
    html += `
      <div class="nav-item">
        <a href="${item.href}" class="nav-item__link">${item.label}${chevronSvg}</a>
        ${panelHtml}
      </div>
    `;
  });
  
  navContainer.innerHTML = html;
}

function renderMobileDrawer() {
  const container = document.getElementById('mobile-drawer-container');
  if (!container) return;

  let itemsHtml = '';
  navigationData.forEach((item, index) => {
    if (item.type === 'mega' || item.type === 'dropdown') {
      let subLinks = '';
      if (item.megaMenu && item.megaMenu.columns) {
        item.megaMenu.columns.forEach(col => {
          if (col.heading) {
            subLinks += `<div class="mobile-drawer__subheading">${col.heading}</div>`;
          }
          col.links.forEach(link => {
            subLinks += `<a href="${link.href}" class="mobile-drawer__link">${link.label}</a>`;
          });
        });
      }
      itemsHtml += `
        <div class="mobile-drawer__item">
          <div class="mobile-drawer__item-header" data-index="${index}">
            ${item.label}
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
          <div class="mobile-drawer__subnav" id="subnav-${index}">
            <div style="padding-bottom: 16px;">${subLinks}</div>
          </div>
        </div>
      `;
    } else {
      itemsHtml += `
        <div class="mobile-drawer__item">
          <a href="${item.href}" class="mobile-drawer__item-header" style="display: block; text-decoration: none; color: inherit;">${item.label}</a>
        </div>
      `;
    }
  });

  container.innerHTML = `
    <div class="mobile-drawer">
      <div class="mobile-drawer__header">
        <a href="/index.html" class="header__logo">
          <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto;">
        </a>
        <button class="mobile-drawer__close" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <div class="mobile-drawer__body">
        ${itemsHtml}
      </div>
      <div class="mobile-drawer__footer" style="display: flex; flex-direction: column; gap: 12px;">
        <a href="#consultation" class="btn btn--outline" style="width: 100%; text-align: center; justify-content: center;">Let's Talk</a>
        <a href="#consultation" class="btn btn--dark" style="width: 100%; text-align: center; justify-content: center;">Book A 15 Min Call</a>
      </div>
    </div>
    <div class="mobile-drawer__overlay"></div>
  `;
}

function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;
  
  let colsHtml = footerData.columns.map(col => `
    <div class="footer__col">
      <h4 class="footer__heading">${col.heading}</h4>
      <ul class="footer__list">
        ${col.links.map(link => `<li><a href="${link.href}" class="footer__link">${link.label}</a></li>`).join('')}
      </ul>
    </div>
  `).join('');
  
  container.innerHTML = `
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="/index.html" class="footer__brand-logo">
          <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto; filter: invert(1) brightness(2);">
        </a>
        <p class="footer__brand-desc">Cypherox Technologies builds and operates AI and software systems for businesses across the US, UK, and Europe. Established in 2015.</p>
        <div class="footer__social">
          <a href="#" class="footer__social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="Twitter">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
          </a>
          <a href="#" class="footer__social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
      ${colsHtml}
    </div>
    <div class="footer__bottom">
      <div class="footer__copyright">&copy; ${new Date().getFullYear()} Cypherox. All rights reserved.</div>
      <div class="footer__legal">
        <a href="#" class="footer__legal-link">Privacy Policy</a>
        <a href="#" class="footer__legal-link">Terms of Service</a>
        <a href="#" class="footer__legal-link">Cookie Policy</a>
      </div>
    </div>
  `;
}

// ==========================================
// PART 3: INTERACTION HANDLERS
// ==========================================

function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  const updateSticky = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', updateSticky);
  updateSticky();
}

function initMegaMenus() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    let timeout;
    
    item.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      navItems.forEach(ni => ni.classList.remove('active'));
      item.classList.add('active');
    });
    
    item.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        item.classList.remove('active');
      }, 200);
    });
  });
  
  // Tab switching for tabbed mega menus
  document.querySelectorAll('.mega-tab__sidebar').forEach(sidebar => {
    const tabItems = sidebar.querySelectorAll('.mega-tab__item');
    const contentArea = sidebar.closest('.mega-tab').querySelector('.mega-tab__content');
    if (!contentArea) return;
    const panels = contentArea.querySelectorAll('.mega-tab__panel');
    
    tabItems.forEach(tab => {
      tab.addEventListener('mouseenter', () => {
        const idx = tab.getAttribute('data-tab-idx');
        tabItems.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        panels.forEach(p => {
          p.classList.remove('active');
          p.style.display = 'none';
        });
        const target = contentArea.querySelector(`[data-tab-panel="${idx}"]`);
        if (target) {
          target.classList.add('active');
          target.style.display = 'block';
        }
      });
      
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          tab.dispatchEvent(new Event('mouseenter'));
        }
      });
    });
  });
  
  // Close mega menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item')) {
      navItems.forEach(ni => ni.classList.remove('active'));
    }
  });
}

function initMobileDrawer() {
  const toggle = document.querySelector('.mobile-toggle') || document.getElementById('mobile-menu-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.mobile-drawer__overlay');
  const closeBtn = document.querySelector('.mobile-drawer__close');
  
  if (!toggle || !drawer || !overlay) return;
  
  const openDrawer = (e) => {
    if (e) e.preventDefault();
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  
  const closeDrawer = (e) => {
    if (e) e.preventDefault();
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };
  
  toggle.removeEventListener('click', openDrawer);
  toggle.addEventListener('click', openDrawer);
  if (closeBtn) {
    closeBtn.removeEventListener('click', closeDrawer);
    closeBtn.addEventListener('click', closeDrawer);
  }
  overlay.removeEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  
  // Accordion for drawer subnavs
  const headers = document.querySelectorAll('.mobile-drawer__item-header');
  headers.forEach(header => {
    header.addEventListener('click', (e) => {
      const idx = header.getAttribute('data-index');
      if (idx === null) return;
      e.preventDefault();
      
      const subnav = document.getElementById(`subnav-${idx}`);
      if (!subnav) return;
      
      const isExpanded = header.classList.contains('expanded');
      
      headers.forEach(h => h.classList.remove('expanded'));
      document.querySelectorAll('.mobile-drawer__subnav').forEach(sn => sn.classList.remove('open'));
      
      if (!isExpanded) {
        header.classList.add('expanded');
        subnav.classList.add('open');
      }
    });
  });
}

// ==========================================
// PART 4: INITIALIZATION
// ==========================================

function initAll() {
  ensureHeaderFooterHTML();
  renderMegaMenus();
  renderMobileDrawer();
  renderFooter();
  initStickyHeader();
  initMegaMenus();
  initMobileDrawer();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

document.addEventListener('includesLoaded', initAll);
document.addEventListener('componentsLoaded', initAll);
