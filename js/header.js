/**
 * Cypherox Enterprise - Header Dynamic Include & Interactions
 */
(function () {
  'use strict';

  // 1. TEMPLATE MARKUP
  const siteHeaderHTML = `
    <header class="header" id="header">
      <div class="header__container container-fluid">
        <a href="/" class="header__logo" aria-label="Cypherox Home">
          <img src="/images/logo-main.svg" alt="Cypherox Logo" width="228" height="20" style="height: 20px; width: 228px;">
        </a>
        <nav class="header__nav" aria-label="Main navigation" id="main-nav">

          <!-- 1. AI Agent -->
          <div class="nav-item">
            <a href="/ai-agent-development" class="nav-item__link" data-i18n="nav.ai_agent">AI Agent</a>
          </div>

          <!-- 2. Services -->
          <div class="nav-item">
            <a href="javascript:void(0)" class="nav-item__link"><span data-i18n="nav.services">Services</span><svg class="chevron" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content">
                    <h3 class="featured-dropdown__title" data-i18n="nav.services">Services</h3>
                    <div class="featured-dropdown__grid">
                      <a href="/generative-ai-development" class="featured-dropdown__link" data-i18n="nav.services_genai">Generative AI Solutions</a>
                      <a href="/ai-ml-development" class="featured-dropdown__link" data-i18n="nav.services_aiml">AI &amp; ML Development</a>
                      <a href="/it-consulting-services" class="featured-dropdown__link" data-i18n="nav.services_consulting">Consulting Services</a>
                      <a href="/ui-ux-design-services" class="featured-dropdown__link" data-i18n="nav.services_uiux">UI/UX Design Services</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="/images/services.jpg" alt="Services" class="featured-dropdown__graphic-img">
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4 data-i18n="nav.services_cta_title">Build Enterprise AI &amp; Custom Software</h4>
                    <p data-i18n="nav.services_cta_desc">Schedule a discovery session with our engineering team to explore custom solutions tailored to
                      your business.</p>
                  </div>
                  <a href="/schedule-a-call" class="btn btn--dark" data-i18n="nav.services_cta_btn">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. Automation -->
          <div class="nav-item">
            <a href="/business-automation-services" class="nav-item__link" data-i18n="nav.automation">Automation</a>
          </div>

          <!-- 4. Technology -->
          <div class="nav-item">
            <a href="javascript:;" class="nav-item__link"><span data-i18n="nav.technology">Technology</span><svg class="chevron" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content">
                    <h3 class="featured-dropdown__title" data-i18n="nav.technology">Technology</h3>
                    <div class="featured-dropdown__grid">
                      <a href="/web-development" class="featured-dropdown__link" data-i18n="nav.tech_web">Web Development</a><a
                        href="/app-development" class="featured-dropdown__link" data-i18n="nav.tech_app">App Development</a><a
                        href="/ecommerce-development" class="featured-dropdown__link" data-i18n="nav.tech_ecommerce">E-Commerce</a><a
                        href="/cms-development" class="featured-dropdown__link" data-i18n="nav.tech_cms">CMS (WordPress, Drupal)</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="/images/technology.webp" alt="Technology" class="featured-dropdown__graphic-img">
                  </div>

                </div>
                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4 data-i18n="nav.tech_cta_title">Modern Tech Stack Solutions</h4>
                    <p data-i18n="nav.tech_cta_desc">From robust cloud backends to modern cross-platform interfaces, build software that scales with your business.</p>
                  </div>
                  <a href="/schedule-a-call" class="btn btn--dark" data-i18n="nav.tech_cta_btn">DISCUSS YOUR ARCHITECTURE</a>
                </div>
              </div>
            </div>

          </div>

          <!-- 5. Hire Developers (Tabbed Mega Menu) -->
          <div class="nav-item">
            <a href="/hire-developers" class="nav-item__link"><span data-i18n="nav.hire_developers">Hire Developers</span><svg class="chevron" width="16" height="16"
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
                          <a href="/hire-developers/mobile-app-developers">
                            <span data-i18n="nav.hire_mobile_app">Mobile App Developers</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              stroke-width="2">
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </a>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="1" role="button" tabindex="0">
                          <a href="/hire-developers/front-end-developers">
                            <span data-i18n="nav.hire_frontend">Front-End Web Developers</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              stroke-width="2">
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </a>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="2" role="button" tabindex="0">
                          <a href="/hire-developers/back-end-developers">
                            <span data-i18n="nav.hire_backend">Back-End Web Developers</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              stroke-width="2">
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </a>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="3" role="button" tabindex="0">
                          <a href="/hire-developers/ecommerce-developers">
                            <span data-i18n="nav.hire_ecommerce_dev">E-Commerce Developers</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              stroke-width="2">
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </a>
                        </li>
                        <li class="mega-tab__item" data-tab-idx="4" role="button" tabindex="0">
                          <a href="/hire-developers/trending-developers">
                            <span data-i18n="nav.hire_trending">Trending Developers</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                              stroke-width="2">
                              <polyline points="9 6 15 12 9 18" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div class="mega-tab__content">
                        <!-- Tab 0: Mobile App Developers -->
                        <div class="mega-tab__panel active" data-tab-panel="0" style="display:block">
                          <p class="mega-tab__panel-title" data-i18n="nav.hire_mobile_app">Mobile App Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="/hire-developers/ios-developers" class="mega-menu__link" data-i18n="nav.hire_ios">Hire iOS Developers</a>
                            <a href="/hire-developers/android-developers" class="mega-menu__link" data-i18n="nav.hire_android">Hire Android Developers</a>
                            <a href="/hire-developers/swift-developers" class="mega-menu__link" data-i18n="nav.hire_swift">Hire Swift Developers</a>
                            <a href="/hire-developers/kotlin-developers" class="mega-menu__link" data-i18n="nav.hire_kotlin">Hire Kotlin Developers</a>
                            <a href="/hire-developers/flutter-developers" class="mega-menu__link" data-i18n="nav.hire_flutter">Hire Flutter Developers</a>
                            <a href="/hire-developers/react-native-developers" class="mega-menu__link" data-i18n="nav.hire_react_native">Hire React Native Developers</a>
                          </div>
                        </div>
                        <!-- Tab 1: Front-End Web Developers -->
                        <div class="mega-tab__panel" data-tab-panel="1" style="display:none">
                          <p class="mega-tab__panel-title" data-i18n="nav.hire_frontend">Front-End Web Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="/hire-developers/angular-developers" class="mega-menu__link" data-i18n="nav.hire_angularjs">Hire AngularJS Developers</a>
                            <a href="/hire-developers/reactjs-developers" class="mega-menu__link" data-i18n="nav.hire_reactjs">Hire ReactJS Developers</a>
                            <a href="/hire-developers/vuejs-developers" class="mega-menu__link" data-i18n="nav.hire_vuejs">Hire VueJS Developers</a>
                            <a href="/hire-developers/graphic-designers" class="mega-menu__link" data-i18n="nav.hire_graphic_designers">Hire Graphic Designers</a>
                            <a href="/hire-developers/ui-ux-designers" class="mega-menu__link" data-i18n="nav.hire_uiux">Hire UI/UX Designers</a>
                          </div>
                        </div>
                        <!-- Tab 2: Back-End Web Developers -->
                        <div class="mega-tab__panel" data-tab-panel="2" style="display:none">
                          <p class="mega-tab__panel-title" data-i18n="nav.hire_backend">Back-End Web Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="/hire-developers/nodejs-developers" class="mega-menu__link" data-i18n="nav.hire_nodejs">Hire NodeJS Developers</a>
                            <a href="/hire-developers/laravel-developers" class="mega-menu__link" data-i18n="nav.hire_laravel">Hire Laravel Developers</a>
                            <a href="/hire-developers/python-developers" class="mega-menu__link" data-i18n="nav.hire_python">Hire Python Developers</a>
                            <a href="/hire-developers/php-developers" class="mega-menu__link" data-i18n="nav.hire_php">Hire PHP Developers</a>
                          </div>
                        </div>
                        <!-- Tab 3: E-Commerce Developers -->
                        <div class="mega-tab__panel" data-tab-panel="3" style="display:none">
                          <p class="mega-tab__panel-title" data-i18n="nav.hire_ecommerce_dev">E-Commerce Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="/hire-developers/wordpress-developers" class="mega-menu__link" data-i18n="nav.hire_wordpress">Hire WordPress Developers</a>
                            <a href="/hire-developers/shopify-developers" class="mega-menu__link" data-i18n="nav.hire_shopify">Hire Shopify Developers</a>
                            <a href="/hire-developers/magento-developers" class="mega-menu__link" data-i18n="nav.hire_magento">Hire Magento Developers</a>
                            <a href="/hire-developers/bigcommerce-developers" class="mega-menu__link" data-i18n="nav.hire_bigcommerce">Hire BigCommerce Developers</a>
                            <a href="/hire-developers/woocommerce-developers" class="mega-menu__link" data-i18n="nav.hire_woocommerce">Hire WooCommerce Developers</a>
                            <a href="/hire-developers/digital-marketers" class="mega-menu__link" data-i18n="nav.hire_digital_marketers">Hire Digital Marketers</a>
                          </div>
                        </div>
                        <!-- Tab 4: Trending Developers -->
                        <div class="mega-tab__panel" data-tab-panel="4" style="display:none">
                          <p class="mega-tab__panel-title" data-i18n="nav.hire_trending">Trending Developers</p>
                          <div class="mega-tab__panel-links">
                            <a href="/hire-developers/devops-developers" class="mega-menu__link" data-i18n="nav.hire_devops">Hire DevOps Developers</a>
                            <a href="/hire-developers/aws-developers" class="mega-menu__link" data-i18n="nav.hire_aws">Hire AWS Developers</a>
                            <a href="/hire-developers/ai-developers" class="mega-menu__link" data-i18n="nav.hire_ai">Hire AI Developers</a>
                            <a href="/hire-developers/ml-developers" class="mega-menu__link" data-i18n="nav.hire_ml">Hire ML Developers</a>
                            <a href="/hire-developers/blockchain-developers" class="mega-menu__link" data-i18n="nav.hire_blockchain">Hire Blockchain Developers</a>
                            <a href="/hire-developers/ar-developers" class="mega-menu__link" data-i18n="nav.hire_ar">Hire AR Developers</a>
                            <a href="/hire-developers/vr-developers" class="mega-menu__link" data-i18n="nav.hire_vr">Hire VR Developers</a>
                            <a href="/hire-developers/data-analytics-experts" class="mega-menu__link" data-i18n="nav.hire_data_analytics">Hire Data Analytics Experts</a>
                            <a href="/hire-developers/full-stack-developers" class="mega-menu__link" data-i18n="nav.hire_fullstack">Hire Full Stack Developers</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4 data-i18n="nav.hire_cta_title">Hire Vetted Dedicated Developers</h4>
                    <p data-i18n="nav.hire_cta_desc">Scale your engineering team with pre-vetted senior developers ready to onboard in 48 hours.</p>
                  </div>
                  <a href="/schedule-a-call" class="btn btn--dark" data-i18n="nav.hire_cta_btn">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. Industries -->
          <!-- 6. Industries -->
          <div class="nav-item">
            <a href="/industries" class="nav-item__link" data-i18n="nav.industries">Industries</a>
          </div>

          <!-- 7. Company -->
          <div class="nav-item">
            <a href="javascript:void(0)" class="nav-item__link"><span data-i18n="nav.company">Company</span><svg class="chevron" width="16" height="16"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" style="margin-left: 4px; transition: transform 0.3s;">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg></a>

            <div class="mega-menu featured-dropdown">
              <div class="featured-dropdown__inner container">
                <div class="featured-dropdown__top">
                  <div class="featured-dropdown__content">
                    <h3 class="featured-dropdown__title" data-i18n="nav.company">Company</h3>
                    <div class="featured-dropdown__grid">
                      <a href="/about-us" class="featured-dropdown__link" data-i18n="nav.company_about">About Us</a>
                      <a href="/contact-us" class="featured-dropdown__link" data-i18n="nav.company_contact">Contact Us</a>
                      <a href="/blogs" class="featured-dropdown__link" data-i18n="nav.company_blog">Blog</a>
                    </div>
                  </div>

                  <div class="featured-dropdown__graphic">
                    <img src="/images/company.webp" alt="Company" class="featured-dropdown__graphic-img">
                  </div>
                </div>

                <div class="featured-dropdown__bottom">
                  <div class="featured-dropdown__bottom-text">
                    <h4 data-i18n="nav.company_cta_title">Partner with Cypherox</h4>
                    <p data-i18n="nav.company_cta_desc">Reach out to our leadership team and discover how we can drive your digital transformation.</p>
                  </div>
                  <a href="/schedule-a-call" class="btn btn--dark" data-i18n="nav.company_cta_btn">SCHEDULE A CALL</a>
                </div>
              </div>
            </div>
          </div>

        </nav>
        <div class="header__actions">
          <a class="es-btn es-btn--secondary" href="/contact-us" style="">
            <span data-i18n="nav.lets_talk">Let's Talk</span> <svg class="arrow-icon" data-icon="arrow" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path opacity="0.6" d="M4.53927 18.7534L9.22489 12L4.53927 5.24664H0.39563L5.08125 12L0.39563 18.7534H4.53927Z" fill="currentColor"></path>
              <path opacity="0.8" d="M12.2289 18.7534L16.9148 12L12.2289 5.24664H8.08521L12.7711 12L8.08521 18.7534H12.2289Z" fill="currentColor"></path>
              <path d="M19.9188 18.7534L24.6044 12L19.9188 5.24664H15.7751L20.4608 12L15.7751 18.7534H19.9188Z" fill="currentColor"></path>
            </svg> </a>
            
            <a href="/schedule-a-call" class="es-btn es-btn--primary">
              <span data-i18n="nav.book_call">Book A 15 Min Call</span>
              <svg class="arrow-icon" data-icon="arrow" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path opacity="0.6" d="M4.53927 18.7534L9.22489 12L4.53927 5.24664H0.39563L5.08125 12L0.39563 18.7534H4.53927Z" fill="currentColor"></path>
                <path opacity="0.8" d="M12.2289 18.7534L16.9148 12L12.2289 5.24664H8.08521L12.7711 12L8.08521 18.7534H12.2289Z" fill="currentColor"></path>
                <path d="M19.9188 18.7534L24.6044 12L19.9188 5.24664H15.7751L20.4608 12L15.7751 18.7534H19.9188Z" fill="currentColor"></path>
              </svg>
            </a>
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
    </header>

    <!-- Mobile Navigation Drawer Container -->
    <div id="mobile-drawer-container">
      <div class="mobile-drawer" id="mobile-drawer">
          <div class="mobile-drawer__header">
            <a href="/" class="header__logo">
              <img src="/images/logo-main.svg" alt="Cypherox Logo" style="height: 20px; width: auto;">
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
              <a href="/ai-agent-development" class="mobile-drawer__item-header" style="display: block; text-decoration: none; color: inherit;" data-i18n="nav.ai_agent">AI Agent</a>
            </div>

            <!-- Mobile Item 2: Services -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="1">
                <span data-i18n="nav.services">Services</span>
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-1">
                <div style="padding-bottom: 16px;">
                  <a href="/generative-ai-development" class="mobile-drawer__link" data-i18n="nav.services_genai">Generative AI Solutions</a>
                  <a href="/ai-ml-development" class="mobile-drawer__link" data-i18n="nav.services_aiml">AI &amp; ML Development</a>
                  <a href="/it-consulting-services" class="mobile-drawer__link" data-i18n="nav.services_consulting">Consulting Services</a>
                  <a href="/ui-ux-design-services" class="mobile-drawer__link" data-i18n="nav.services_uiux">UI/UX Design Services</a>
                </div>
              </div>
            </div>

            <!-- Mobile Item 3: Automation -->
            <div class="mobile-drawer__item">
              <a href="/business-automation-services" class="mobile-drawer__item-header" style="display: block; text-decoration: none; color: inherit;" data-i18n="nav.automation">Automation</a>
            </div>

            <!-- Mobile Item 4: Technology -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="3">
                <span data-i18n="nav.technology">Technology</span>
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-3">
                <div style="padding-bottom: 16px;">
                  <a href="/web-development" class="mobile-drawer__link" data-i18n="nav.tech_web">Web Development</a>
                  <a href="/app-development" class="mobile-drawer__link" data-i18n="nav.tech_app">App Development</a>
                  <a href="/ecommerce-development" class="mobile-drawer__link" data-i18n="nav.tech_ecommerce">E-Commerce</a>
                  <a href="/cms-development" class="mobile-drawer__link" data-i18n="nav.tech_cms">CMS (WordPress, Drupal)</a>
                </div>
              </div>
            </div>

            <!-- Mobile Item 5: Hire Developers -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="4">
                <span data-i18n="nav.hire_developers">Hire Developers</span>
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-4">
                <div style="padding-bottom: 16px;">
                  <a href="/hire-developers" class="mobile-drawer__link" data-i18n="nav.hire_all">All Hire Developers</a>

                  <div class="mobile-drawer__subheading">
                    <a href="/hire-developers/mobile-app-developers" class="mobile-drawer__link" data-i18n="nav.hire_mobile_app">Mobile App Developers</a>
                  </div>
                  <a href="/hire-developers/ios-developers" class="mobile-drawer__link" data-i18n="nav.hire_ios">Hire iOS Developers</a>
                  <a href="/hire-developers/android-developers" class="mobile-drawer__link" data-i18n="nav.hire_android">Hire Android Developers</a>
                  <a href="/hire-developers/swift-developers" class="mobile-drawer__link" data-i18n="nav.hire_swift">Hire Swift Developers</a>
                  <a href="/hire-developers/kotlin-developers" class="mobile-drawer__link" data-i18n="nav.hire_kotlin">Hire Kotlin Developers</a>
                  <a href="/hire-developers/flutter-developers" class="mobile-drawer__link" data-i18n="nav.hire_flutter">Hire Flutter Developers</a>
                  <a href="/hire-developers/react-native-developers" class="mobile-drawer__link" data-i18n="nav.hire_react_native">Hire React Native Developers</a>

                  <div class="mobile-drawer__subheading">
                    <a href="/hire-developers/front-end-developers" class="mobile-drawer__link" data-i18n="nav.hire_frontend">Front-End Web Developers</a>
                  </div>
                  <a href="/hire-developers/angular-developers" class="mobile-drawer__link" data-i18n="nav.hire_angularjs">Hire AngularJS Developers</a>
                  <a href="/hire-developers/reactjs-developers" class="mobile-drawer__link" data-i18n="nav.hire_reactjs">Hire ReactJS Developers</a>
                  <a href="/hire-developers/vuejs-developers" class="mobile-drawer__link" data-i18n="nav.hire_vuejs">Hire VueJS Developers</a>
                  <a href="/hire-developers/graphic-designers" class="mobile-drawer__link" data-i18n="nav.hire_graphic_designers">Hire Graphic Designers</a>
                  <a href="/hire-developers/ui-ux-designers" class="mobile-drawer__link" data-i18n="nav.hire_uiux">Hire UI/UX Designers</a>

                  <div class="mobile-drawer__subheading">
                    <a href="/hire-developers/back-end-developers" class="mobile-drawer__link" data-i18n="nav.hire_backend">Back-End Web Developers</a>
                  </div>
                  <a href="/hire-developers/nodejs-developers" class="mobile-drawer__link" data-i18n="nav.hire_nodejs">Hire NodeJS Developers</a>
                  <a href="/hire-developers/laravel-developers" class="mobile-drawer__link" data-i18n="nav.hire_laravel">Hire Laravel Developers</a>
                  <a href="/hire-developers/python-developers" class="mobile-drawer__link" data-i18n="nav.hire_python">Hire Python Developers</a>
                  <a href="/hire-developers/php-developers" class="mobile-drawer__link" data-i18n="nav.hire_php">Hire PHP Developers</a>

                  <div class="mobile-drawer__subheading">
                    <a href="/hire-developers/ecommerce-developers" class="mobile-drawer__link" data-i18n="nav.hire_ecommerce_dev">E-Commerce Developers</a>
                  </div>
                  <a href="/hire-developers/wordpress-developers" class="mobile-drawer__link" data-i18n="nav.hire_wordpress">Hire WordPress Developers</a>
                  <a href="/hire-developers/shopify-developers" class="mobile-drawer__link" data-i18n="nav.hire_shopify">Hire Shopify Developers</a>
                  <a href="/hire-developers/magento-developers" class="mobile-drawer__link" data-i18n="nav.hire_magento">Hire Magento Developers</a>
                  <a href="/hire-developers/bigcommerce-developers" class="mobile-drawer__link" data-i18n="nav.hire_bigcommerce">Hire BigCommerce Developers</a>
                  <a href="/hire-developers/woocommerce-developers" class="mobile-drawer__link" data-i18n="nav.hire_woocommerce">Hire WooCommerce Developers</a>
                  <a href="/hire-developers/digital-marketers" class="mobile-drawer__link" data-i18n="nav.hire_digital_marketers">Hire Digital Marketers</a>

                  <div class="mobile-drawer__subheading">
                    <a href="/hire-developers/trending-developers" class="mobile-drawer__link" data-i18n="nav.hire_trending">Trending Developers</a>
                  </div>
                  <a href="/hire-developers/devops-developers" class="mobile-drawer__link" data-i18n="nav.hire_devops">Hire DevOps Developers</a>
                  <a href="/hire-developers/aws-developers" class="mobile-drawer__link" data-i18n="nav.hire_aws">Hire AWS Developers</a>
                  <a href="/hire-developers/ai-developers" class="mobile-drawer__link" data-i18n="nav.hire_ai">Hire AI Developers</a>
                  <a href="/hire-developers/ml-developers" class="mobile-drawer__link" data-i18n="nav.hire_ml">Hire ML Developers</a>
                  <a href="/hire-developers/blockchain-developers" class="mobile-drawer__link" data-i18n="nav.hire_blockchain">Hire Blockchain Developers</a>
                  <a href="/hire-developers/ar-developers" class="mobile-drawer__link" data-i18n="nav.hire_ar">Hire AR Developers</a>
                  <a href="/hire-developers/vr-developers" class="mobile-drawer__link" data-i18n="nav.hire_vr">Hire VR Developers</a>
                  <a href="/hire-developers/data-analytics-experts" class="mobile-drawer__link" data-i18n="nav.hire_data_analytics">Hire Data Analytics Experts</a>
                  <a href="/hire-developers/full-stack-developers" class="mobile-drawer__link" data-i18n="nav.hire_fullstack">Hire Full Stack Developers</a>
                </div>
              </div>
            </div>

            <!-- Mobile Item 6: Industries -->
            <div class="mobile-drawer__item">
              <a href="/industries" class="mobile-drawer__item-header" style="display: block; text-decoration: none; color: inherit;" data-i18n="nav.industries">Industries</a>
            </div>

            <!-- Mobile Item 7: Company -->
            <div class="mobile-drawer__item">
              <div class="mobile-drawer__item-header" data-index="6">
                <span data-i18n="nav.company">Company</span>
                <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-drawer__subnav" id="subnav-6">
                <div style="padding-bottom: 16px;">
                  <a href="/about-us" class="mobile-drawer__link" data-i18n="nav.company_about">About Us</a>
                  <a href="/contact-us" class="mobile-drawer__link" data-i18n="nav.company_contact">Contact Us</a>
                  <a href="/blogs" class="mobile-drawer__link" data-i18n="nav.company_blog">Blog</a>
                </div>
              </div>
            </div>

          </div>
          <div class="mobile-drawer__footer" style="display: flex; flex-direction: column; gap: 12px;">
            <a href="/contact-us" class="btn btn--outline"
              style="width: 100%; text-align: center; justify-content: center;" data-i18n="nav.lets_talk">Let's Talk</a>
            <a href="/schedule-a-call" class="btn btn--dark"
              style="width: 100%; text-align: center; justify-content: center;" data-i18n="nav.book_call">Book A 15 Min Call</a>
          </div>
        </div>
        <div class="mobile-drawer__overlay" style="display: none;"></div>
      </div>
  `;


  // Ensure i18n stylesheet and engine are active across all pages
  function ensureI18n() {
    if (!document.querySelector('link[href*="i18n.css"]')) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/css/i18n.css';
      document.head.appendChild(link);
    }
    if (!window.CypheroxI18n && !document.querySelector('script[src*="i18n.js?v=2.5"]')) {
      var script = document.createElement('script');
      script.src = '/js/i18n.js?v=2.5';
      script.async = false;
      document.body.appendChild(script);
    }
  }

  // 2. DOM INJECTION
  function renderHeader() {
    ensureI18n();
    const headerContainer = document.getElementById('site-header');
    if (!headerContainer) return;
    if (!headerContainer.innerHTML.trim() || !headerContainer.querySelector('.header')) {
      headerContainer.innerHTML = siteHeaderHTML;
      if (window.i18n && typeof window.i18n.applyTranslations === 'function') {
        window.i18n.applyTranslations(headerContainer);
      }
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
    const root = header.closest('#site-header') || document;
    const toggle = root.querySelector('.mobile-toggle') || document.querySelector('.mobile-toggle');
    const drawer = root.querySelector('.mobile-drawer') || document.querySelector('.mobile-drawer');
    const overlay = root.querySelector('.mobile-drawer__overlay') || document.querySelector('.mobile-drawer__overlay');
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
    drawer.querySelectorAll('.mobile-drawer__link, .mobile-drawer__footer a, .mobile-drawer__item-header[href]').forEach(link => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close drawer when resizing to desktop view (>= 1200px)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1200 && drawer.classList.contains('open')) {
        closeDrawer();
      }
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
