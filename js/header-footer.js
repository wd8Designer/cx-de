/**
 * Cypherox Enterprise - Header & Footer Dynamic Include & Interactions
 * Includes desktop mega navigation, tabbed menus, mobile drawer with full item checks, and accordion footer.
 */

(function () {
  'use strict';

  // ==========================================
  // 1. TEMPLATE MARKUP
  // ==========================================

  const siteHeaderHTML = `
    <header class="header" id="header">
      <div class="header__container container-fluid">
        <a href="#" class="header__logo" aria-label="Cypherox Home">
          <img src="images/cypherox-logo.png" alt="Cypherox Logo" width="228" height="20"
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
                      <a href="#" class="featured-dropdown__link">Generative AI Solutions</a>
                      <a href="#" class="featured-dropdown__link">AI &amp; ML Development</a>
                      <a href="#" class="featured-dropdown__link">Consulting Services</a>
                      <a href="#" class="featured-dropdown__link">UI/UX Design Services</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="images/services.jpg" alt="Services" class="featured-dropdown__graphic-img">
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
                      <a href="#" class="featured-dropdown__link">About Us</a>
                      <a href="#" class="featured-dropdown__link">Contact Us</a>
                      <a href="#" class="featured-dropdown__link">Case Studies</a>
                      <a href="#" class="featured-dropdown__link">Blog</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="images/company.webp" alt="Company" class="featured-dropdown__graphic-img">
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
              <img src="images/cypherox-logo.png" alt="Cypherox Logo" style="height: 20px; width: auto;">
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
                  <a href="#" class="mobile-drawer__link">About Us</a>
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

  const siteFooterHTML = `
    <footer class="es-footer es-footer--nested">
      <div class="es-container">

        <div class="es-footer__promo es-bg-dark">
          <p class="es-eyebrow">We Have Got You Covered!</p>
          <h2>Take your Business Vision to New Heights with a Trusted IT Company!</h2>
          <p class="es-footer__promo-cta">
            <a href="#" class="es-btn es-btn--secondary es-btn--block-mobile">
              Hire Dedicated Developers <svg class="arrow-icon" data-icon="arrow" width="25" height="24"
                viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path opacity="0.6"
                  d="M4.53927 18.7534L9.22489 12L4.53927 5.24664H0.39563L5.08125 12L0.39563 18.7534H4.53927Z"
                  fill="currentColor" />
                <path opacity="0.8"
                  d="M12.2289 18.7534L16.9148 12L12.2289 5.24664H8.08521L12.7711 12L8.08521 18.7534H12.2289Z"
                  fill="currentColor" />
                <path d="M19.9188 18.7534L24.6044 12L19.9188 5.24664H15.7751L20.4608 12L15.7751 18.7534H19.9188Z"
                  fill="currentColor" />
              </svg> </a>
          </p>
        </div>

        <div class="es-footer__card">
          <div class="es-footer__top">

            <div class="es-footer__brand">
              <a class="es-footer__logo" href="#" aria-label="Cypherox, home">
                <img loading="lazy" src="images/cypherox-logo.png" alt="Cypherox" width="231" height="60" />
              </a>

              <p class="es-footer__blurb">
                Cypherox is a team of dedicated experts, selected to deliver
                outstanding software solutions, enabling businesses to
                flourish in the digital environment.
              </p>

              <ul class="es-footer__social">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span class="es-sr-only">Instagram</span>
                    <img loading="lazy" src="images/instagram-icon.svg" alt="" width="24" height="24"
                      aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span class="es-sr-only">LinkedIn</span>
                    <img loading="lazy" src="images/linkedin-icon.svg" alt="" width="24" height="24"
                      aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span class="es-sr-only">Behance</span>
                    <img loading="lazy" src="images/behance-icon.svg" alt="" width="24" height="24"
                      aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span class="es-sr-only">Dribbble</span>
                    <img loading="lazy" src="images/dribbble-icon.svg" alt="" width="24" height="24"
                      aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <span class="es-sr-only">YouTube</span>
                    <img loading="lazy" src="images/youtube-icon.svg" alt="" width="24" height="24"
                      aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="es-footer__nav">
              <div class="es-footer__cols" data-es-accordion="(max-width: 767px)">

                <div class="es-footer__col" data-es-accordion-item>
                  <span hidden data-es-accordion-caret><svg class="es-footer__caret" data-icon="caret" width="14"
                      height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" focusable="false">
                      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                  <h3 class="es-footer__heading" data-es-accordion-heading>Useful Links</h3>
                  <div class="es-footer__panel" data-es-accordion-panel>
                    <ul class="es-footer__list">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="hire-dedicated-developers.html">Hire Dedicated Developers</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Case Study</a></li>
                    </ul>
                  </div>
                </div>

                <div class="es-footer__col" data-es-accordion-item>
                  <span hidden data-es-accordion-caret><svg class="es-footer__caret" data-icon="caret" width="14"
                      height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" focusable="false">
                      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                  <h3 class="es-footer__heading" data-es-accordion-heading>Legal</h3>
                  <div class="es-footer__panel" data-es-accordion-panel>
                    <ul class="es-footer__list">
                      <li><a href="#">Terms of Use</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Confidentiality</a></li>
                    </ul>
                  </div>
                </div>

                <div class="es-footer__col" data-es-accordion-item>
                  <span hidden data-es-accordion-caret><svg class="es-footer__caret" data-icon="caret" width="14"
                      height="14" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true" focusable="false">
                      <path d="M1.5 3.5 5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
                  <h3 class="es-footer__heading" data-es-accordion-heading>Get in Touch</h3>
                  <div class="es-footer__panel" data-es-accordion-panel>
                    <ul class="es-footer__list es-footer__list--contact">
                      <li>
                        <a href="mailto:solutions@cypherox.com">
                          <svg class="es-footer__list-icon" data-icon="mail" width="17" height="17"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            focusable="false">
                            <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" fill="none" stroke="currentColor"
                              stroke-width="1.6" />
                            <path d="M3.6 6.6 12 13l8.4-6.4" fill="none" stroke="currentColor" stroke-width="1.6"
                              stroke-linecap="round" stroke-linejoin="round" />
                          </svg> solutions@cypherox.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+13026183557">
                          <svg class="es-footer__list-icon" data-icon="phone" width="17" height="17"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            focusable="false">
                            <path
                              d="M7.1 3.6 9.4 3.9a1.4 1.4 0 0 1 1.2 1.1l.5 2.4a1.4 1.4 0 0 1-.5 1.4L9 10a12 12 0 0 0 5 5l1.2-1.6a1.4 1.4 0 0 1 1.4-.5l2.4.5a1.4 1.4 0 0 1 1.1 1.2l.3 2.3a1.6 1.6 0 0 1-1.7 1.8A15.7 15.7 0 0 1 5.3 5.3a1.6 1.6 0 0 1 1.8-1.7Z"
                              fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg> +1 302 618 3557
                        </a>
                      </li>
                      <li>
                        <a href="tel:+919712413434">
                          <svg class="es-footer__list-icon" data-icon="phone" width="17" height="17"
                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            focusable="false">
                            <path
                              d="M7.1 3.6 9.4 3.9a1.4 1.4 0 0 1 1.2 1.1l.5 2.4a1.4 1.4 0 0 1-.5 1.4L9 10a12 12 0 0 0 5 5l1.2-1.6a1.4 1.4 0 0 1 1.4-.5l2.4.5a1.4 1.4 0 0 1 1.1 1.2l.3 2.3a1.6 1.6 0 0 1-1.7 1.8A15.7 15.7 0 0 1 5.3 5.3a1.6 1.6 0 0 1 1.8-1.7Z"
                              fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                              stroke-linejoin="round" />
                          </svg> +91 97124 13434
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

              <div class="es-footer__subscribe">
                <a class="es-footer__news" href="#" target="_blank" rel="noopener noreferrer">
                  <svg class="es-footer__news-icon" data-icon="linkedin" width="18" height="18"
                    viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                    focusable="false">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 21.5h4.2V9.6H2.9v11.9Z"
                      fill="currentColor" />
                    <path
                      d="M9.6 9.6h4v1.63h.06c.56-1.02 1.93-2.1 3.97-2.1 4.25 0 5.03 2.66 5.03 6.12v6.25h-4.19v-5.54c0-1.39-.03-3.18-1.98-3.18-1.98 0-2.28 1.5-2.28 3.08v5.64H9.6V9.6Z"
                      fill="currentColor" />
                  </svg> Subscribe on Our Linkedin Newsletter
                  <span class="es-sr-only"> (opens in a new tab)</span>
                </a>
              </div>

            </div>
          </div>
          <div class="es-footer__bottom">
            <p class="es-footer__copyright">&copy; Copyright 2026 Cypherox Technologies Pvt Ltd</p>
            <p class="es-footer__tagline">
              <span>Build</span><span>Scale</span><span>Grow Together</span>
            </p>
          </div>

        </div>
      </div>

      <span class="es-footer__wordmark" aria-hidden="true">
        <svg width="342" height="30" viewBox="0 0 342 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 20.597C39.8524 24.3284 39.262 26.8657 36.9004 28.5075C34.9816 30 31.5867 30 25.6827 30H14.3173C8.26568 30 5.01844 30 3.09962 28.5075C-1.33726e-05 26.2687 0 22.3881 0 16.2687V13.7313C0 7.61194 0.147588 3.73134 3.09962 1.49254C5.01844 0 8.41328 0 14.3173 0H25.6827C31.7343 0 34.9816 0 36.9004 1.49254C39.1144 3.13433 39.7048 5.52239 40 9.10448H30.9963C30.9963 7.16418 26.8635 6.71642 22.7306 6.71642H17.417C13.2841 6.71642 10.9225 6.86568 9.74169 7.91045C8.56087 8.95523 8.41327 10.7463 8.26567 14.0299V16.1194C8.26567 19.403 8.56087 21.194 9.74169 22.2388C10.9225 23.2836 13.2841 23.4328 17.417 23.4328H22.7306C26.8635 23.4328 31.1439 22.9851 31.1439 20.597H40Z"
            fill="#f26e65" />
          <path
            d="M62.6811 29.8515C61.6666 29.8515 60.7971 28.9604 60.7971 27.9208V21.3861C60.7971 20.3465 60.2174 18.7129 59.4928 17.9703L45.4348 1.33664C45.1449 1.03961 45 0.742576 45 0.594062C45 0.148517 45.2899 0 46.0145 0H53.5507C54.5652 0 56.0145 0.742574 56.5942 1.48515L63.9855 10.8416C64.2754 11.2871 64.7101 11.4356 65.1449 11.4356C65.5797 11.4356 66.0145 11.2871 66.3043 10.8416L73.6956 1.48515C74.2753 0.742574 75.7246 0 76.7391 0H83.9855C84.7101 0 85 0.29703 85 0.742574C85 0.891089 84.855 1.18812 84.5652 1.48515L70.6521 18.1188C69.9275 18.8614 69.3478 20.495 69.3478 21.5346V28.0693C69.3478 29.1089 68.4783 30 67.4638 30L62.6811 29.8515Z"
            fill="#f26e65" />
          <path
            d="M91.918 30C90.8852 30 90 29.1045 90 28.0597V17.3134C90 16.2687 90.8852 15.3731 91.918 15.3731H112.131C113.016 15.3731 114.492 15.3731 115.229 15.0746C116.852 14.4776 116.852 12.8358 116.852 11.4925C116.852 9.25374 116.262 7.76119 113.902 7.46269C113.311 7.46269 112.721 7.46269 112.131 7.46269H91.918C90.8852 7.46269 90 6.56717 90 5.5224V1.9403C90 0.895527 90.8852 0 91.918 0H113.311C116.262 0 120.246 -2.31302e-06 122.459 1.64179C125.705 3.58209 126 7.46269 126 10.8955C126 21.0448 123.049 22.5373 113.607 22.5373H101.066C100.033 22.5373 99.1475 23.4328 99.1475 24.4776V28.0597C99.1475 29.1045 98.2623 30 97.2295 30H91.918Z"
            fill="#f26e65" />
          <path
            d="M132.9 30C131.877 30 131 29.105 131 28.0608V1.95552C131 0.911307 131.877 0.0162655 132.9 0.0162655H138.162C139.038 -0.132907 139.915 0.762134 139.915 1.95552V10.16C139.915 11.2042 140.792 12.0993 141.815 12.0993H158.185C159.208 12.0993 160.085 11.2042 160.085 10.16V1.95552C160.085 0.911307 160.962 0.0162655 161.985 0.0162655H167.1C168.123 0.0162655 169 0.911307 169 1.95552V28.0608C169 29.105 168.123 30 167.1 30H161.985C160.962 30 160.085 29.105 160.085 28.0608V19.8563C160.085 18.812 159.208 17.917 158.185 17.917H141.815C140.792 17.917 139.915 18.812 139.915 19.8563V27.9116C139.915 28.9558 139.038 29.8508 138.015 29.8508H132.9V30Z"
            fill="#f26e65" />
          <path
            d="M211 28.0693C211 29.1089 210.101 30 209.053 30H185.085C181.64 30 179.243 29.5545 177.445 28.6634C174.899 27.3267 174 24.9505 174 21.8317V7.87129C174 5.34654 174.449 2.82178 177.445 1.33664C179.093 0.594062 181.49 0 185.085 0H209.053C210.101 0 211 0.891094 211 1.9307V4.75247C211 5.79208 210.101 6.68317 209.053 6.68317H187.032C184.785 6.68317 184.336 6.83169 183.437 7.12872C182.538 7.42575 182.089 8.31683 182.089 9.20792C182.089 10.099 182.538 11.1386 183.437 11.5842C184.036 11.8812 185.085 11.8812 185.085 11.8812H209.053C210.101 11.8812 211 12.7723 211 13.8119V15.7426C211 16.7822 210.101 17.6733 209.053 17.6733H185.085C185.085 17.6733 184.036 17.6733 183.437 17.9703C182.389 18.4158 181.939 19.4555 181.939 20.6436C181.939 21.8317 182.389 23.0198 183.437 23.3168C184.036 23.4653 184.785 23.4654 187.032 23.4654H209.053C210.101 23.4654 211 24.3564 211 25.396V28.0693Z"
            fill="#f26e65" />
          <path
            d="M233.074 16.7822C233.074 15.7426 233.963 14.8515 235 14.8515H239C241.222 14.8515 241.963 12.6238 241.963 11.2871C241.963 9.0594 241.37 7.27723 239 7.27723H216.926C215.889 7.27723 215 6.38613 215 5.34653V1.9307C215 0.891093 215.889 0 216.926 0H238.407C241.37 0 245.37 -2.30156e-06 247.593 1.63366C249.37 2.82178 250.259 4.60396 250.704 6.68317C250.852 7.72277 251 9.35644 251 10.8416V11.5842C251 14.1089 250.704 16.6337 249.963 18.1188C248.481 21.5347 245.815 22.1287 242.407 22.4257L249.519 28.6634C249.815 28.9604 249.963 29.1089 249.963 29.4059C249.963 29.703 249.667 30 248.926 30H243.296C242.259 30 240.63 29.4059 239.889 28.6634L234.407 23.9109C233.667 23.1683 232.926 21.6832 232.926 20.6436L233.074 16.7822Z"
            fill="#f26e65" />
          <path
            d="M296 13.6634V16.3366C296 22.4257 295.849 26.2871 292.823 28.5149C290.856 30 287.376 30 281.325 30H269.675C263.472 30 260.144 30 258.177 28.5149C255 26.2871 255 22.4257 255 16.3366V13.6634C255 7.57425 255.151 3.71287 258.177 1.48515C260.144 0 263.624 0 269.675 0H281.325C287.528 0 290.856 0 292.823 1.48515C295.849 3.71287 296 7.57425 296 13.6634ZM287.376 13.9604C287.376 10.6931 287.225 8.9109 286.015 7.87129C284.804 6.83169 282.384 6.68317 278.148 6.68317H272.701C268.465 6.68317 266.044 6.83169 264.834 7.87129C263.624 8.9109 263.472 10.6931 263.321 13.9604V16.0396C263.321 19.3069 263.624 21.0891 264.834 22.1287C266.044 23.1683 268.465 23.3168 272.701 23.3168H278.148C282.384 23.3168 284.804 23.1683 286.015 22.1287C287.225 21.0891 287.376 19.3069 287.376 16.0396V13.9604Z"
            fill="#f26e65" />
          <path
            d="M331.5 30C330.45 30 328.95 29.4 328.2 28.65L322.35 22.8C321.9 22.5 321.45 22.2 321 22.2C320.55 22.2 319.95 22.35 319.65 22.8L313.8 28.65C313.05 29.4 311.55 30 310.5 30H301.05C300.45 30 300 29.85 300 29.4C300 29.25 300.15 28.95 300.45 28.65L313.05 16.35C313.5 16.05 313.65 15.45 313.65 15C313.65 14.55 313.5 13.95 313.05 13.65L300.45 1.35C300.15 1.05 300 0.750002 300 0.600002C300 0.300002 300.3 0 301.05 0H310.5C311.55 0 313.05 0.600002 313.8 1.35L319.65 7.2C320.1 7.65 320.55 7.80001 321 7.80001C321.45 7.80001 322.05 7.65 322.35 7.2L328.2 1.35C328.95 0.600002 330.45 0 331.5 0H340.95C341.55 0 342 0.150002 342 0.600002C342 0.750002 341.85 1.05 341.55 1.35L328.95 13.65C328.5 14.1 328.35 14.55 328.35 15C328.35 15.45 328.5 16.05 328.95 16.35L341.55 28.65C341.85 28.95 342 29.25 342 29.4C342 29.7 341.7 30 340.95 30H331.5Z"
            fill="#f26e65" />
        </svg>
      </span>
    </footer>
  `;

  // ==========================================
  // 2. DOM INJECTION
  // ==========================================

  function renderHeader() {
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;
    if (!headerContainer.innerHTML.trim() || !headerContainer.querySelector('.header')) {
      headerContainer.innerHTML = siteHeaderHTML;
    }
  }

  function renderFooter() {
    const footerContainer = document.getElementById('site-footer');
    if (!footerContainer) return;
    if (!footerContainer.innerHTML.trim() || !footerContainer.querySelector('.es-footer')) {
      footerContainer.innerHTML = siteFooterHTML;
    }
  }

  // ==========================================
  // 3. HEADER & MEGA-MENU INTERACTIONS
  // ==========================================

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
  // 5. FOOTER ACCORDION INTERACTIONS
  // ==========================================

  function initFooterAccordions() {
    const groups = document.querySelectorAll('[data-es-accordion]');
    let uid = 0;

    function ensureId(el, prefix) {
      if (!el.id) {
        uid += 1;
        el.id = prefix + '-' + uid;
      }
      return el.id;
    }

    Array.prototype.forEach.call(groups, function (group) {
      const query = window.matchMedia(group.getAttribute('data-es-accordion') || '(max-width: 767px)');
      const items = group.querySelectorAll('[data-es-accordion-item]');
      let collapsed = false;

      function enable() {
        if (collapsed) return;
        collapsed = true;

        Array.prototype.forEach.call(items, function (item) {
          const heading = item.querySelector('[data-es-accordion-heading]');
          const panel = item.querySelector('[data-es-accordion-panel]');
          if (!heading || !panel) return;

          const panelId = ensureId(panel, 'es-footer-panel');
          const button = document.createElement('button');
          const label = document.createElement('span');
          const caret = item.querySelector('[data-es-accordion-caret]');

          button.type = 'button';
          button.className = 'es-footer__toggle';
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', panelId);

          label.textContent = heading.textContent;
          button.appendChild(label);

          if (caret) {
            caret.removeAttribute('hidden');
            button.appendChild(caret);
          }

          button.addEventListener('click', function () {
            const open = item.hasAttribute('data-open');
            button.setAttribute('aria-expanded', String(!open));
            if (open) {
              item.removeAttribute('data-open');
            } else {
              item.setAttribute('data-open', '');
            }
          });

          heading.textContent = '';
          heading.appendChild(button);
          item.setAttribute('data-collapsible', '');
        });
      }

      function disable() {
        if (!collapsed) return;
        collapsed = false;

        Array.prototype.forEach.call(items, function (item) {
          const heading = item.querySelector('[data-es-accordion-heading]');
          const button = heading && heading.querySelector('.es-footer__toggle');
          if (!button) return;

          const caret = button.querySelector('[data-es-accordion-caret]');
          const text = button.querySelector('span').textContent;

          heading.textContent = text;

          if (caret) {
            caret.setAttribute('hidden', '');
            item.insertBefore(caret, item.firstChild);
          }

          item.removeAttribute('data-collapsible');
          item.removeAttribute('data-open');
        });
      }

      function apply() {
        if (query.matches) {
          enable();
        } else {
          disable();
        }
      }

      if (query.addEventListener) {
        query.addEventListener('change', apply);
      } else if (query.addListener) {
        query.addListener(apply);
      }

      apply();
    });
  }

  // ==========================================
  // 6. INITIALIZATION ORCHESTRATION
  // ==========================================

  function init() {
    renderHeader();
    renderFooter();
    initHeaderInteractions();
    initFooterAccordions();

    window.__headerFooterLoaded = true;
    document.dispatchEvent(new CustomEvent('headerFooterLoaded'));
  }

  // Expose global methods for external modules
  window.renderSiteHeader = renderHeader;
  window.renderSiteFooter = renderFooter;
  window.initSiteHeaderFooter = init;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
