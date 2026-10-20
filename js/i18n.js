/**
 * Cypherox Multilingual Engine - Automatic IP-Based Language Support
 * Supports: English (en) [Default] & German (de)
 *
 * Rules:
 * - Visitors from Germany (DE) automatically see German content (de).
 * - Visitors from any other country (or if IP lookup fails/times out) see English content (en).
 * - Zero blocking during page load; country detection runs asynchronously.
 * - Country detection result is cached in localStorage for 24 hours.
 * - No manual header dropdown or UI clutter.
 */
(function (window, document) {
  'use strict';

  // Configuration
  var SUPPORTED_LANGS = ['en', 'de'];
  var DEFAULT_LANG = 'en';
  var STORAGE_KEY_COUNTRY = 'cypherox_detected_country';
  var STORAGE_KEY_GEO_TIME = 'cypherox_geo_cached_at';
  var GEO_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

  // Allowed HTML tags and attributes for rich translated strings
  var ALLOWED_TAGS = ['SPAN', 'STRONG', 'B', 'EM', 'I', 'BR', 'SMALL', 'SUB', 'SUP', 'A', 'MARK'];
  var ALLOWED_ATTRS = ['class', 'style', 'href', 'target', 'rel', 'title'];

  // State
  var currentLang = DEFAULT_LANG;
  var detectedCountry = null;
  var translationsCache = {};
  var isSwitching = false;
  var pendingSwitch = null;
  var originalPageMeta = {
    title: document.title,
    description: '',
    ogTitle: '',
    ogDescription: '',
    ogLocale: ''
  };

  // Helper: Resolve translations directory base path
  function getTranslationsBasePath() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].getAttribute('src') || scripts[i].src || '';
      if (src.indexOf('i18n.js') !== -1) {
        var base = src.substring(0, src.lastIndexOf('js/i18n.js'));
        if (base) return base + 'translations/';
      }
    }
    var path = window.location.pathname.replace(/\\/g, '/');
    if (window.location.protocol === 'file:') {
      if (path.indexOf('/blogs/') !== -1 || path.indexOf('/hire-developers/') !== -1) {
        return '../translations/';
      }
      return './translations/';
    }
    return '/translations/';
  }

  // Helper: Deep property lookup (e.g. "nav.services_genai")
  function resolveKey(obj, keyPath) {
    if (!obj || typeof obj !== 'object' || !keyPath) return undefined;
    if (obj[keyPath] !== undefined) return obj[keyPath];
    var parts = keyPath.split('.');
    var curr = obj;
    for (var i = 0; i < parts.length; i++) {
      if (curr === null || curr === undefined || typeof curr !== 'object') {
        return undefined;
      }
      curr = curr[parts[i]];
    }
    return curr;
  }

  // Helper: Detect current page identifier for scoped translations
  function getCurrentPageKey() {
    var path = window.location.pathname.toLowerCase().replace(/\\/g, '/');
    var filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    if (filename.indexOf('.') === -1) {
      filename += '.html';
    }

    if (filename === 'index.html' || filename === '') {
      if (path.indexOf('/blogs/') !== -1) return 'blogs';
      if (path.indexOf('/hire-developers/') !== -1) return 'hire_developers';
      return 'home';
    }

    var map = {
      'about-us.html': 'about',
      'ai-agent-development.html': 'ai_agent',
      'ai-ml-development.html': 'ai_ml',
      'generative-ai-development.html': 'gen_ai',
      'business-automation-services.html': 'automation',
      'web-development.html': 'web_dev',
      'app-development.html': 'app_dev',
      'cms-development.html': 'cms_dev',
      'ecommerce-development.html': 'ecommerce',
      'it-consulting-services.html': 'consulting',
      'ui-ux-design-services.html': 'uiux',
      'industries.html': 'industries',
      'engagement-models.html': 'engagement',
      'contact-us.html': 'contact',
      'schedule-a-call.html': 'schedule_call',
      'privacy-policy.html': 'privacy',
      'terms-and-policy.html': 'terms'
    };

    if (map[filename]) return map[filename];
    if (path.indexOf('/blogs/') !== -1) return 'blog_article';
    if (path.indexOf('/hire-developers/') !== -1) return 'hire_role';
    return filename.replace('.html', '').replace(/-/g, '_');
  }

  // Helper: Safely sanitize and set HTML content without unsafe innerHTML
  function setSafeHTML(element, htmlString) {
    if (!htmlString || typeof htmlString !== 'string') {
      element.textContent = '';
      return;
    }

    // Fast path: if no HTML tags present, use textContent (100% safe)
    if (htmlString.indexOf('<') === -1 || htmlString.indexOf('>') === -1) {
      element.textContent = htmlString;
      return;
    }

    try {
      var parser = new DOMParser();
      var doc = parser.parseFromString('<div>' + htmlString + '</div>', 'text/html');
      var parsedRoot = doc.body.firstElementChild || doc.body;

      // Sanitize nodes
      function cleanNode(node) {
        if (!node) return;
        var children = Array.prototype.slice.call(node.childNodes);
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          if (child.nodeType === 1) { // ELEMENT_NODE
            var tag = child.nodeName.toUpperCase();
            if (ALLOWED_TAGS.indexOf(tag) === -1) {
              var textNode = document.createTextNode(child.textContent || '');
              node.replaceChild(textNode, child);
            } else {
              // Strip disallowed attributes
              var attrs = Array.prototype.slice.call(child.attributes);
              for (var a = 0; a < attrs.length; a++) {
                var attrName = attrs[a].name.toLowerCase();
                if (ALLOWED_ATTRS.indexOf(attrName) === -1 || attrName.indexOf('on') === 0) {
                  child.removeAttribute(attrName);
                }
              }
              cleanNode(child);
            }
          }
        }
      }

      cleanNode(parsedRoot);
      element.innerHTML = parsedRoot.innerHTML;
    } catch (e) {
      element.textContent = htmlString;
    }
  }

  // Load translation JSON file for given language with fallback paths
  function fetchTranslationFile(lang, callback) {
    if (translationsCache[lang]) {
      if (typeof callback === 'function') callback(null, translationsCache[lang]);
      return;
    }

    var basePath = getTranslationsBasePath();
    var primaryUrl = basePath + lang + '.json';
    var fallbackUrl = (basePath !== '/translations/') ? ('/translations/' + lang + '.json') : ('./translations/' + lang + '.json');

    function tryLoad(targetUrl, nextUrl) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', targetUrl, true);
      xhr.timeout = 8000;
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            translationsCache[lang] = data;
            if (typeof callback === 'function') callback(null, data);
          } catch (err) {
            console.warn('[i18n] Failed to parse translation JSON for ' + lang, err);
            if (typeof callback === 'function') callback(err, null);
          }
        } else if (nextUrl) {
          tryLoad(nextUrl, null);
        } else {
          console.warn('[i18n] Failed to load ' + targetUrl + ' (status ' + xhr.status + ')');
          if (typeof callback === 'function') callback(new Error('HTTP ' + xhr.status), null);
        }
      };
      xhr.ontimeout = function () {
        if (nextUrl) tryLoad(nextUrl, null);
        else {
          console.warn('[i18n] Translation fetch timed out for ' + lang);
          if (typeof callback === 'function') callback(new Error('Timeout'), null);
        }
      };
      xhr.onerror = function () {
        if (nextUrl) tryLoad(nextUrl, null);
        else {
          console.warn('[i18n] Network error loading ' + targetUrl);
          if (typeof callback === 'function') callback(new Error('Network error'), null);
        }
      };
      xhr.send();
    }

    tryLoad(primaryUrl, fallbackUrl);
  }

  // Save original page metadata once
  function captureOriginalMetadata() {
    originalPageMeta.title = document.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) originalPageMeta.description = metaDesc.getAttribute('content') || '';
    var ogT = document.querySelector('meta[property="og:title"]');
    if (ogT) originalPageMeta.ogTitle = ogT.getAttribute('content') || '';
    var ogD = document.querySelector('meta[property="og:description"]');
    if (ogD) originalPageMeta.ogDescription = ogD.getAttribute('content') || '';
    var ogL = document.querySelector('meta[property="og:locale"]');
    if (ogL) originalPageMeta.ogLocale = ogL.getAttribute('content') || 'en_GB';
  }

  // Update page title, meta description & OpenGraph
  function updateMetadata(lang, translations) {
    var pageKey = getCurrentPageKey();
    var pageTrans = (translations && translations.pages) ? resolveKey(translations.pages, pageKey) : null;

    if (lang === 'en') {
      if (originalPageMeta.title) document.title = originalPageMeta.title;
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && originalPageMeta.description) {
        metaDesc.setAttribute('content', originalPageMeta.description);
      }
      var ogT = document.querySelector('meta[property="og:title"]');
      if (ogT && originalPageMeta.ogTitle) ogT.setAttribute('content', originalPageMeta.ogTitle);
      var ogD = document.querySelector('meta[property="og:description"]');
      if (ogD && originalPageMeta.ogDescription) ogD.setAttribute('content', originalPageMeta.ogDescription);
      var ogL = document.querySelector('meta[property="og:locale"]');
      if (ogL) ogL.setAttribute('content', 'en_GB');
      return;
    }

    // German metadata
    if (pageTrans) {
      if (pageTrans.meta_title) {
        document.title = pageTrans.meta_title;
        var ogT = document.querySelector('meta[property="og:title"]');
        if (ogT) ogT.setAttribute('content', pageTrans.meta_title);
      }
      if (pageTrans.meta_description) {
        var metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', pageTrans.meta_description);
        var ogD = document.querySelector('meta[property="og:description"]');
        if (ogD) ogD.setAttribute('content', pageTrans.meta_description);
      }
    }
    var ogL = document.querySelector('meta[property="og:locale"]');
    if (ogL) ogL.setAttribute('content', 'de_DE');
  }

  // Translate a specific container or the full document
  function applyTranslationsToContainer(root, lang, translations) {
    if (!root) root = document;

    // 1. data-i18n / data-i18n-html
    var elements = root.querySelectorAll('[data-i18n], [data-i18n-html]');
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute('data-i18n') || el.getAttribute('data-i18n-html');
      var isHtml = el.hasAttribute('data-i18n-html');

      // Preserve pristine original content on first inspection
      if (el._cxOrigHTML === undefined) {
        el._cxOrigHTML = el.innerHTML;
        el._cxOrigText = el.textContent;
      }

      if (lang === 'en') {
        // Restore exact original English content
        el.innerHTML = el._cxOrigHTML;
        continue;
      }

      var val = resolveKey(translations, key);
      if (val !== undefined && val !== null && val !== '') {
        if (isHtml || (typeof val === 'string' && val.indexOf('<') !== -1)) {
          setSafeHTML(el, val);
        } else {
          el.textContent = val;
        }
      } else if (translationsCache['en']) {
        // Fallback to English translation key if German is missing
        var fallbackVal = resolveKey(translationsCache['en'], key);
        if (fallbackVal !== undefined && fallbackVal !== null) {
          if (isHtml) setSafeHTML(el, fallbackVal);
          else el.textContent = fallbackVal;
        }
      }
    }

    // 2. data-i18n-placeholder
    var placeholders = root.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < placeholders.length; p++) {
      var pel = placeholders[p];
      var pkey = pel.getAttribute('data-i18n-placeholder');
      if (pel._cxOrigPlaceholder === undefined) {
        pel._cxOrigPlaceholder = pel.getAttribute('placeholder') || '';
      }
      if (lang === 'en') {
        pel.setAttribute('placeholder', pel._cxOrigPlaceholder);
      } else {
        var pval = resolveKey(translations, pkey);
        if (pval) pel.setAttribute('placeholder', pval);
      }
    }

    // 3. data-i18n-alt
    var alts = root.querySelectorAll('[data-i18n-alt]');
    for (var a = 0; a < alts.length; a++) {
      var ael = alts[a];
      var akey = ael.getAttribute('data-i18n-alt');
      if (ael._cxOrigAlt === undefined) {
        ael._cxOrigAlt = ael.getAttribute('alt') || '';
      }
      if (lang === 'en') {
        ael.setAttribute('alt', ael._cxOrigAlt);
      } else {
        var aval = resolveKey(translations, akey);
        if (aval) ael.setAttribute('alt', aval);
      }
    }

    // 4. data-i18n-title
    var titles = root.querySelectorAll('[data-i18n-title]');
    for (var t = 0; t < titles.length; t++) {
      var tel = titles[t];
      var tkey = tel.getAttribute('data-i18n-title');
      if (tel._cxOrigTitle === undefined) {
        tel._cxOrigTitle = tel.getAttribute('title') || '';
      }
      if (lang === 'en') {
        tel.setAttribute('title', tel._cxOrigTitle);
      } else {
        var tval = resolveKey(translations, tkey);
        if (tval) tel.setAttribute('title', tval);
      }
    }

    // 5. data-i18n-aria-label
    var arias = root.querySelectorAll('[data-i18n-aria-label]');
    for (var ar = 0; ar < arias.length; ar++) {
      var arel = arias[ar];
      var arkey = arel.getAttribute('data-i18n-aria-label');
      if (arel._cxOrigAria === undefined) {
        arel._cxOrigAria = arel.getAttribute('aria-label') || '';
      }
      if (lang === 'en') {
        arel.setAttribute('aria-label', arel._cxOrigAria);
      } else {
        var arval = resolveKey(translations, arkey);
        if (arval) arel.setAttribute('aria-label', arval);
      }
    }

    // 6. Optional phrase map for common recurring phrases across static pages
    if (lang === 'en') {
      var phraseElements = root.querySelectorAll('[data-cx-phrase]');
      for (var ph = 0; ph < phraseElements.length; ph++) {
        var phel = phraseElements[ph];
        if (phel._cxOrigHTML !== undefined) {
          phel.innerHTML = phel._cxOrigHTML;
        }
      }
    } else if (translations && translations.phrases) {
      applyPhraseDictionary(root, translations.phrases);
    }
  }

  // Phrase dictionary mapper for unannotated shared text blocks
  function applyPhraseDictionary(root, phrases) {
    if (!phrases || typeof phrases !== 'object') return;
    var candidates = root.querySelectorAll('h1, h2, h3, h4, h5, h6, p, .btn, .es-btn, span, li, a');
    for (var i = 0; i < candidates.length; i++) {
      var node = candidates[i];
      if (node.hasAttribute('data-i18n') || node.hasAttribute('data-i18n-html')) continue;
      if (node.closest('script, style')) continue;
      if (node.children.length > 2) continue;

      var rawText = node.textContent.trim().replace(/\s+/g, ' ');
      if (!rawText || rawText.length < 3 || rawText.length > 300) continue;

      if (phrases[rawText]) {
        if (node._cxOrigHTML === undefined) {
          node._cxOrigHTML = node.innerHTML;
          node._cxOrigText = node.textContent;
        }
        node.setAttribute('data-cx-phrase', 'true');
        var trans = phrases[rawText];
        if (trans.indexOf('<') !== -1) {
          setSafeHTML(node, trans);
        } else {
          node.textContent = trans;
        }
      }
    }
  }

  // Core language switcher function with concurrency locking
  function setLanguage(lang, callback) {
    if (SUPPORTED_LANGS.indexOf(lang) === -1) {
      lang = DEFAULT_LANG;
    }

    if (isSwitching) {
      pendingSwitch = { lang: lang, callback: callback };
      return;
    }

    isSwitching = true;
    document.body.classList.add('cx-lang-switching');

    function finalize(data) {
      currentLang = lang;
      document.documentElement.lang = lang;

      applyTranslationsToContainer(document, lang, data);
      updateMetadata(lang, data);

      document.body.classList.remove('cx-lang-switching');
      isSwitching = false;

      // Dispatch public event
      try {
        document.dispatchEvent(new CustomEvent('cxLanguageChanged', {
          detail: { lang: lang, country: detectedCountry }
        }));
      } catch (evErr) {}

      if (typeof callback === 'function') callback(null, lang);

      if (pendingSwitch) {
        var next = pendingSwitch;
        pendingSwitch = null;
        setLanguage(next.lang, next.callback);
      }
    }

    if (lang === 'en') {
      if (translationsCache['en']) {
        finalize(translationsCache['en']);
      } else {
        fetchTranslationFile('en', function (_, data) {
          finalize(data || {});
        });
      }
    } else {
      fetchTranslationFile(lang, function (err, data) {
        if (err || !data) {
          console.warn('[i18n] Could not switch to ' + lang + ', staying in English');
          finalize({});
          return;
        }
        finalize(data);
      });
    }
  }

  // Check URL query parameters for country/language testing override
  function getUrlOverride() {
    try {
      var params = new URLSearchParams(window.location.search);
      var country = params.get('country');
      if (country) return country.toUpperCase();
      var lang = params.get('lang');
      if (lang) {
        lang = lang.toLowerCase();
        if (lang === 'de') return 'DE';
        if (lang === 'en') return 'US';
      }
    } catch (e) {}
    return null;
  }

  // Automatic IP Geolocation Detection
  function detectCountryAndApply() {
    // 1. Check URL override (e.g. ?country=DE or ?lang=de for testing)
    var urlCountry = getUrlOverride();
    if (urlCountry) {
      detectedCountry = urlCountry;
      var targetLang = (urlCountry === 'DE') ? 'de' : 'en';
      setLanguage(targetLang);
      return;
    }

    // 2. Check cached country detection result in localStorage
    var cachedCountry = null;
    var cachedTime = 0;
    try {
      cachedCountry = localStorage.getItem(STORAGE_KEY_COUNTRY);
      cachedTime = parseInt(localStorage.getItem(STORAGE_KEY_GEO_TIME), 10) || 0;
    } catch (e) {}

    var isCacheValid = cachedCountry && (Date.now() - cachedTime < GEO_CACHE_TTL_MS);
    if (isCacheValid) {
      detectedCountry = cachedCountry.toUpperCase();
      var targetLang = (detectedCountry === 'DE') ? 'de' : 'en';
      if (targetLang === 'de') {
        setLanguage('de');
      }
      return;
    }

    // 3. Asynchronous Geolocation Detection (Non-blocking)
    function onCountryResolved(countryCode) {
      if (!countryCode) countryCode = 'UNKNOWN';
      countryCode = countryCode.toUpperCase();
      detectedCountry = countryCode;

      try {
        localStorage.setItem(STORAGE_KEY_COUNTRY, countryCode);
        localStorage.setItem(STORAGE_KEY_GEO_TIME, Date.now().toString());
      } catch (e) {}

      // Rule: German IP -> German content; All other countries -> English content
      var targetLang = (countryCode === 'DE') ? 'de' : 'en';
      if (targetLang === 'de') {
        setLanguage('de');
      } else if (currentLang !== 'en') {
        setLanguage('en');
      }
    }

    // Primary service: ipapi.co (3.5s timeout)
    function tryIpApiCo(success, failure) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ipapi.co/json/', true);
      xhr.timeout = 3500;
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            if (data && !data.error && data.country_code) {
              success(data.country_code);
              return;
            }
          } catch (e) {}
        }
        failure();
      };
      xhr.ontimeout = failure;
      xhr.onerror = failure;
      try {
        xhr.send();
      } catch (e) {
        failure();
      }
    }

    // Secondary fallback service: api.country.is (2.5s timeout)
    function tryCountryIs(success, failure) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.country.is/', true);
      xhr.timeout = 2500;
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            var data = JSON.parse(xhr.responseText);
            if (data && data.country) {
              success(data.country);
              return;
            }
          } catch (e) {}
        }
        failure();
      };
      xhr.ontimeout = failure;
      xhr.onerror = failure;
      try {
        xhr.send();
      } catch (e) {
        failure();
      }
    }

    // Execute cascade
    tryIpApiCo(
      function (code) { onCountryResolved(code); },
      function () {
        tryCountryIs(
          function (code) { onCountryResolved(code); },
          function () {
            // Both failed, fallback gracefully to English
            onCountryResolved('FALLBACK_EN');
          }
        );
      }
    );
  }

  // Hook into dynamic element injection
  function registerDynamicComponentHooks() {
    document.addEventListener('headerLoaded', function () {
      if (currentLang !== 'en') {
        applyTranslationsToContainer(document.getElementById('site-header'), currentLang, translationsCache[currentLang]);
      }
    });

    document.addEventListener('footerLoaded', function () {
      if (currentLang !== 'en') {
        applyTranslationsToContainer(document.getElementById('site-footer'), currentLang, translationsCache[currentLang]);
      }
    });

    document.addEventListener('hireFormLoaded', function () {
      var hireFormContainer = document.querySelector('[data-hire-form]');
      if (hireFormContainer && currentLang !== 'en') {
        applyTranslationsToContainer(hireFormContainer, currentLang, translationsCache[currentLang]);
      }
    });
  }

  // Public Translation Helper (t) for JavaScript code
  function t(key, fallback) {
    if (!key) return fallback || '';
    if (currentLang === 'en') {
      if (translationsCache['en']) {
        var enVal = resolveKey(translationsCache['en'], key);
        if (enVal !== undefined && enVal !== null) return enVal;
      }
      return fallback !== undefined ? fallback : key;
    }
    var activeData = translationsCache[currentLang];
    if (activeData) {
      var val = resolveKey(activeData, key);
      if (val !== undefined && val !== null) return val;
    }
    if (translationsCache['en']) {
      var fallbackVal = resolveKey(translationsCache['en'], key);
      if (fallbackVal !== undefined && fallbackVal !== null) return fallbackVal;
    }
    return fallback !== undefined ? fallback : key;
  }

  // Simulate country (useful for testing or debugging)
  function simulateCountry(countryCode) {
    countryCode = (countryCode || 'DE').toUpperCase();
    detectedCountry = countryCode;
    try {
      localStorage.setItem(STORAGE_KEY_COUNTRY, countryCode);
      localStorage.setItem(STORAGE_KEY_GEO_TIME, Date.now().toString());
    } catch (e) {}
    var targetLang = (countryCode === 'DE') ? 'de' : 'en';
    setLanguage(targetLang);
  }

  // Initialization
  function init() {
    captureOriginalMetadata();
    registerDynamicComponentHooks();

    // Clean up any legacy manual preference key
    try {
      localStorage.removeItem('cypherox_lang_manual');
    } catch (e) {}

    // Run automatic country detection
    detectCountryAndApply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global API
  window.CypheroxI18n = {
    setLanguage: setLanguage,
    getLanguage: function () { return currentLang; },
    getCountry: function () { return detectedCountry; },
    simulateCountry: simulateCountry,
    t: t,
    applyTranslations: function (container) {
      applyTranslationsToContainer(container || document, currentLang, translationsCache[currentLang]);
    },
    detectCountry: detectCountryAndApply
  };
  window.i18n = window.CypheroxI18n;

})(window, document);
