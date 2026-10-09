/**
 * Cypherox Enterprise - Header Dynamic Include & Interactions
 */
(function () {
  'use strict';

  // 1. TEMPLATE MARKUP
  const siteHeaderHTML = `
    <header class="header" id="header">
      <div class="header__container container-fluid">
        <a href="#" class="header__logo" aria-label="Cypherox Home">
          <img src="/images/cypherox-logo.png" alt="Cypherox Logo" width="228" height="20"
            style="height: 20px; width: 228px; filter: invert(1) brightness(2);">
        </a>
        <nav class="header__nav" aria-label="Main navigation" id="main-nav">

          <!-- 1. AI Agent -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">AI Agent</a>
          </div>

          <!-- 2. Services -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Services<svg class="chevron" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content">
                    <h3 class="featured-dropdown__title">Services</h3>
                    <div class="featured-dropdown__grid">
                      <a href="generative-ai-development.html" class="featured-dropdown__link">Generative AI Solutions</a>
                      <a href="#" class="featured-dropdown__link">AI &amp; ML Development</a>
                      <a href="#" class="featured-dropdown__link">Consulting Services</a>
                      <a href="#" class="featured-dropdown__link">UI/UX Design Services</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="/images/services.jpg" alt="Services" class="featured-dropdown__graphic-img">
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4>Build Enterprise AI &amp; Custom Software</h4>
                    <p>Schedule a discovery session with our engineering team to explore custom solutions tailored to
                      your business.</p>
                  </div>
                  <a href="#" class="btn btn--dark">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Automation -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Automation</a>
          </div>

          <!-- 4. Technology -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Technology</a>
          </div>

          <!-- 5. Hire Developers (Tabbed Mega Menu) -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Hire Developers<svg class="chevron" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown featured-dropdown--no-image">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content featured-dropdown__content--tabbed">
                    <div class="mega-tab">
                      <ul class="mega-tab__sidebar">
                        <li class="mega-tab__item active" data-tab-idx="0" role="button" tabindex="0">
                          <span>Mobile App Developers</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="1" role="button" tabindex="0">
                          <span>Front-End Web Developers</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="2" role="button" tabindex="0">
                          <span>Back-End Web Developers</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="3" role="button" tabindex="0">
                          <span>E-Commerce Developers</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="4" role="button" tabindex="0">
                          <span>Trending Developers</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <polyline points="9 6 15 12 9 18" />
                          </svg>
                        </li>
                      </ul>
                      <div class="mega-tab__content">
                        <!-- Tab 0: Mobile App Developers -->
                        <div class="mega-tab__panel active" data-tab-panel="0" style="display:block">
                          <p class="mega-tab__panel-title">Mobile App Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="#" class="mega-menu__link">Hire iOS Developers</a>
                            <a href="#" class="mega-menu__link">Hire Android Developers</a>
                            <a href="#" class="mega-menu__link">Hire Swift Developers</a>
                            <a href="#" class="mega-menu__link">Hire Kotlin Developers</a>
                            <a href="#" class="mega-menu__link">Hire Flutter Developers</a>
                            <a href="#" class="mega-menu__link">Hire React Native Developers</a>
                          </div>
                        </div>
                        <!-- Tab 1: Front-End Web Developers -->
                        <div class="mega-tab__panel" data-tab-panel="1" style="display:none">
                          <p class="mega-tab__panel-title">Front-End Web Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="#" class="mega-menu__link">Hire AngularJS Developers</a>
                            <a href="#" class="mega-menu__link">Hire ReactJS Developers</a>
                            <a href="#" class="mega-menu__link">Hire VueJS Developers</a>
                            <a href="#" class="mega-menu__link">Hire Graphic Designers</a>
                            <a href="#" class="mega-menu__link">Hire UI/UX Designers</a>
                          </div>
                        </div>
                        <!-- Tab 2: Back-End Web Developers -->
                        <div class="mega-tab__panel" data-tab-panel="2" style="display:none">
                          <p class="mega-tab__panel-title">Back-End Web Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="#" class="mega-menu__link">Hire NodeJS Developers</a>
                            <a href="#" class="mega-menu__link">Hire Laravel Developers</a>
                            <a href="#" class="mega-menu__link">Hire Python Developers</a>
                            <a href="#" class="mega-menu__link">Hire PHP Developers</a>
                          </div>
                        </div>
                        <!-- Tab 3: E-Commerce Developers -->
                        <div class="mega-tab__panel" data-tab-panel="3" style="display:none">
                          <p class="mega-tab__panel-title">E-Commerce Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="#" class="mega-menu__link">Hire WordPress Developers</a>
                            <a href="#" class="mega-menu__link">Hire Shopify Developers</a>
                            <a href="#" class="mega-menu__link">Hire Magento Developers</a>
                            <a href="#" class="mega-menu__link">Hire BigCommerce Developers</a>
                            <a href="#" class="mega-menu__link">Hire WooCommerce Developers</a>
                            <a href="#" class="mega-menu__link">Hire Digital Marketers</a>
                          </div>
                        </div>
                        <!-- Tab 4: Trending Developers -->
                        <div class="mega-tab__panel" data-tab-panel="4" style="display:none">
                          <p class="mega-tab__panel-title">Trending Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="#" class="mega-menu__link">Hire DevOps Developers</a>
                            <a href="#" class="mega-menu__link">Hire AWS Developers</a>
                            <a href="#" class="mega-menu__link">Hire AI Developers</a>
                            <a href="#" class="mega-menu__link">Hire ML Developers</a>
                            <a href="#" class="mega-menu__link">Hire Blockchain Developers</a>
                            <a href="#" class="mega-menu__link">Hire AR Developers</a>
                            <a href="#" class="mega-menu__link">Hire VR Developers</a>
                            <a href="#" class="mega-menu__link">Hire Data Analytics Experts</a>
                            <a href="#" class="mega-menu__link">Hire Full Stack Developers</a>
                            <a href="#" class="mega-menu__link">Hire Chatbot Developers</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4>Hire Vetted Dedicated Developers</h4>
                    <p>Scale your engineering team with pre-vetted senior developers ready to onboard in 48 hours.</p>
                  </div>
                  <a href="#" class="btn btn--dark">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Industries -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Industries</a>
          </div>

          <!-- 7. Company -->
          <div class="nav-item">
            <a href="#" class="nav-item__link">Company<svg class="chevron" width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content">
                    <h3 class="featured-dropdown__title">Company</h3>
                    <div class="featured-dropdown__grid">
                      <a href="about-us.html" class="featured-dropdown__link">About Us</a>
                      <a href="#" class="featured-dropdown__link">Contact Us</a>
                      <a href="#" class="featured-dropdown__link">Case Studies</a>
                      <a href="#" class="featured-dropdown__link">Blog</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="/images/company.webp" alt="Company" class="featured-dropdown__graphic-img">
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4>Partner with Cypherox</h4>
                    <p>Reach out to our leadership team and discover how we can drive your digital transformation.</p>
                  </div>
                  <a href="#" class="btn btn--dark">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

        </nav>
        <div class="header__actions">
          <a href="#" class="header__cta btn btn--pill-outline">Let's Talk</a>
          <a href="#" class="header__cta btn btn--pill-primary">Book A 15 Min Call</a>
        </div>
        <button class="mobile-toggle" aria-label="Open navigation menu" aria-expanded="false" id="mobile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer Container -->
      <div id="mobile-drawer-container">
        <div class="mobile-drawer" id="mobile-drawer">
          <div class="mobile-drawer__header">
            <a href="#" class="header__logo">
              <img src="/images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto;">
            </a>
            <button class="mobile-drawer__close" aria-label="Close menu"
              style="background: none; border: none; cursor: pointer;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="mobile-drawer__body">

            <!-- Mobile Item 1: AI Agent -->
            <div class="mobile-drawer__item">
              <a href="#" class="mobile-drawer__item-header"
                style="display: block; text-decoration: none; color: inherit;">AI Agent</a>
            </div>

            <!-- Mobile Item 2: Services -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="1">
                Services
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-1">
                <div style="padding-bottom: 16px;">
                  <a href="#" class="mobile-drawer__link">Generative AI Solutions</a>
                  <a href="#" class="mobile-drawer__link">AI &amp; ML Development</a>
                  <a href="#" class="mobile-drawer__link">Consulting Services</a>
                  <a href="#" class="mobile-drawer__link">UI/UX Design Services</a>
                </div>
              </div>
            </div>

            <!-- Mobile Item 3: Automation -->
            <div class="mobile-drawer__item">
              <a href="#" class="mobile-drawer__item-header"
                style="display: block; text-decoration: none; color: inherit;">Automation</a>
            </div>

            <!-- Mobile Item 4: Technology -->
            <div class="mobile-drawer__item">
              <a href="#" class="mobile-drawer__item-header"
                style="display: block; text-decoration: none; color: inherit;">Technology</a>
            </div>

            <!-- Mobile Item 5: Hire Developers -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="4">
                Hire Developers
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-4">
                <div style="padding-bottom: 16px;">
                  <div class="mobile-drawer__subheading">Mobile App Developers</div>
                  <a href="#" class="mobile-drawer__link">Hire iOS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Android Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Swift Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Kotlin Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Flutter Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire React Native Developers</a>

                  <div class="mobile-drawer__subheading">Front-End Web Developers</div>
                  <a href="#" class="mobile-drawer__link">Hire AngularJS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire ReactJS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire VueJS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Graphic Designers</a>
                  <a href="#" class="mobile-drawer__link">Hire UI/UX Designers</a>

                  <div class="mobile-drawer__subheading">Back-End Web Developers</div>
                  <a href="#" class="mobile-drawer__link">Hire NodeJS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Laravel Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Python Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire PHP Developers</a>

                  <div class="mobile-drawer__subheading">E-Commerce Developers</div>
                  <a href="#" class="mobile-drawer__link">Hire WordPress Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Shopify Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Magento Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire BigCommerce Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire WooCommerce Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Digital Marketers</a>

                  <div class="mobile-drawer__subheading">Trending Developers</div>
                  <a href="#" class="mobile-drawer__link">Hire DevOps Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire AWS Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire AI Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire ML Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Blockchain Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire AR Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire VR Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Data Analytics Experts</a>
                  <a href="#" class="mobile-drawer__link">Hire Full Stack Developers</a>
                  <a href="#" class="mobile-drawer__link">Hire Chatbot Developers</a>
                </div>
              </div>
            </div>

            <!-- Mobile Item 6: Industries -->
            <div class="mobile-drawer__item">
              <a href="#" class="mobile-drawer__item-header"
                style="display: block; text-decoration: none; color: inherit;">Industries</a>
            </div>

            <!-- Mobile Item 7: Company -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="6">
                Company
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-6">
                <div style="padding-bottom: 16px;">
                  <a href="about-us.html" class="mobile-drawer__link">About Us</a>
                  <a href="#" class="mobile-drawer__link">Contact Us</a>
                  <a href="#" class="mobile-drawer__link">Case Studies</a>
                  <a href="#" class="mobile-drawer__link">Blog</a>
                </div>
              </div>
            </div>

          </div>
          <div class="mobile-drawer__footer" style="display: flex; flex-direction: column; gap: 12px;">
            <a href="#" class="btn btn--outline"
              style="width: 100%; text-align: center; justify-content: center;">Let's Talk</a>
            <a href="#" class="btn btn--dark"
              style="width: 100%; text-align: center; justify-content: center;">Book A 15 Min Call</a>
          </div>
        </div>
        <div class="mobile-drawer__overlay" style="display: none;"></div>
      </div>
    </header>
  `;


  // 2. DOM INJECTION
  function renderHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;
    if (!headerContainer.innerHTML.trim() || !headerContainer.querySelector('.header')) {
      headerContainer.innerHTML = siteHeaderHTML;
    }
  }

  // 3. HEADER & MEGA-MENU INTERACTIONS
  function initHeaderInteractions() {
    const header = document.querySelector('.header');
    if (!header) return;

    // Sticky Header
    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Desktop Mega Menus
    const navItems = header.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      let timeout;
      item.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        navItems.forEach(ni => {
          if (ni !== item) ni.classList.remove('active');
        });
        item.classList.add('active');
      });

      item.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          item.classList.remove('active');
        }, 150);
      });
    });

    // Tab Switching for Hire Developers
    header.querySelectorAll('.mega-tab').forEach(megaTab => {
      const sidebar = megaTab.querySelector('.mega-tab__sidebar');
      const contentArea = megaTab.querySelector('.mega-tab__content');
      if (!sidebar || !contentArea) return;

      const tabItems = sidebar.querySelectorAll('.mega-tab__item');
      const panels = contentArea.querySelectorAll('.mega-tab__panel');

      tabItems.forEach(tab => {
        const activateTab = () => {
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
        };

        tab.addEventListener('mouseenter', activateTab);
        tab.addEventListener('click', activateTab);
        tab.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            activateTab();
          }
        });
      });
    });

    // Close Mega Menus on Outside Click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        navItems.forEach(ni => ni.classList.remove('active'));
      }
    });

    // Mobile Drawer Interactions
    initMobileDrawer(header);
  }

  // ==========================================
  // 4. MOBILE DRAWER & MENU ACCORDIONS
  // ==========================================

  function initMobileDrawer(header) {
    const toggle = header.querySelector('.mobile-toggle') || document.querySelector('.mobile-toggle');
    const drawer = header.querySelector('.mobile-drawer') || document.querySelector('.mobile-drawer');
    const overlay = header.querySelector('.mobile-drawer__overlay') || document.querySelector('.mobile-drawer__overlay');
    const closeBtn = drawer ? drawer.querySelector('.mobile-drawer__close') : null;

    if (!toggle || !drawer) return;

    const openDrawer = (e) => {
      if (e) e.preventDefault();
      drawer.classList.add('open');
      if (overlay) {
        overlay.classList.add('open');
        overlay.style.display = 'block';
      }
      document.body.style.overflow = 'hidden';
      toggle.setAttribute('aria-expanded', 'true');
    };

    const closeDrawer = (e) => {
      if (e) e.preventDefault();
      drawer.classList.remove('open');
      if (overlay) {
        overlay.classList.remove('open');
        overlay.style.display = 'none';
      }
      document.body.style.overflow = '';
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    // Close drawer when clicking any link inside
    drawer.querySelectorAll('.mobile-drawer__link, .mobile-drawer__footer a').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Accordions for Mobile Drawer Items (Services, Hire Developers, Company)
    const headers = drawer.querySelectorAll('.mobile-drawer__item-header');
    headers.forEach(headerItem => {
      headerItem.addEventListener('click', (e) => {
        const idx = headerItem.getAttribute('data-index');
        if (idx === null || idx === undefined) return; // direct link item
        e.preventDefault();

        const subnav = drawer.querySelector(`#subnav-${idx}`);
        if (!subnav) return;

        const isOpen = headerItem.classList.contains('expanded');

        // Close other open accordions
        headers.forEach(h => {
          if (h !== headerItem) h.classList.remove('expanded');
        });
        drawer.querySelectorAll('.mobile-drawer__subnav').forEach(s => {
          if (s !== subnav) {
            s.classList.remove('open');
            s.style.maxHeight = '0';
          }
        });

        // Toggle clicked accordion
        if (!isOpen) {
          headerItem.classList.add('expanded');
          subnav.classList.add('open');
          // Add extra buffer for generous padding and scrolling
          subnav.style.maxHeight = (subnav.scrollHeight + 80) + 'px';
        } else {
          headerItem.classList.remove('expanded');
          subnav.classList.remove('open');
          subnav.style.maxHeight = '0';
        }
      });
    });
  }

  // ==========================================


  // 4. INITIALIZATION
  function init() {
    renderHeader();
    initHeaderInteractions();
    window.__headerLoaded = true;
    document.dispatchEvent(new CustomEvent('headerLoaded'));
  }

  window.renderSiteHeader = renderHeader;
  window.initSiteHeader = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
