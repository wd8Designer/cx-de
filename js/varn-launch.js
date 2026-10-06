/* =========================================================================

   VARN LAUNCH — popup card, then a bottom bar.



   Markup:  template-parts/varn-launch.php   Styles: assets/css/varn-launch.css



   Sequence (owner's instruction, 17 Sep 2026):

     1. The card is shown on only 3 or 4 randomly chosen page views per visit

        (a browser tab session). The first page of a visit always gets it;

        after that each page has an even chance until the visit's 3-4 are

        used up. The budget lives in sessionStorage, so a new visit starts a

        new count.

     2. On every other page view the bottom bar is shown instead, a beat

        after load.

     3. When the card is closed (close button, backdrop click, Escape, or its

        call to action), the bottom bar slides up straight away.

     4. Closing the bar hides it for that page view only.



   No dependencies, no framework — one IIFE, deferred with the other footer

   scripts in inc/enqueue.php. Every element ships hidden; nothing here can

   disturb the page unless it finds its own markup.

   ========================================================================= */

(function () {

  'use strict';



  var MODAL_DELAY = 1200; // ms after load before the card reveals

  var EXIT_MS     = 450;  // must cover the longest exit transition in the CSS

  var BAR_DELAY   = 150;  // ms after the card has left before the bar rises



  var modal = document.getElementById('varn-launch-modal');

  var bar   = document.getElementById('varn-launch-bar');



  // Nothing to do if the partial did not render (filter off, or launch over).

  if (!modal && !bar) { return; }



  /* ── Popup card ──────────────────────────────────────────────────────────

     A non-modal promo: it does NOT lock the page or trap focus. Escape and a

     click on the dim (or any close control) put it away. Focus is left where

     it is on purpose: a promo that arrives after load must not move the caret

     out of whatever the reader was doing. */



  function openModal() {

    if (!modal) { openBar(); return; }

    modal.hidden = false;

    modal.setAttribute('aria-hidden', 'false');

    // Next frame so the browser paints the hidden→visible switch before the

    // transition class lands, or there is nothing to animate from.

    requestAnimationFrame(function () {

      requestAnimationFrame(function () { modal.classList.add('is-open'); });

    });

    document.addEventListener('keydown', onModalKey);

  }



  function closeModal() {

    if (!modal || modal.hidden) { return; }

    modal.classList.remove('is-open');

    document.removeEventListener('keydown', onModalKey);

    window.setTimeout(function () {

      modal.hidden = true;

      modal.setAttribute('aria-hidden', 'true');

      window.setTimeout(openBar, BAR_DELAY);

    }, EXIT_MS);

  }



  function onModalKey(e) {

    if (e.key === 'Escape') { closeModal(); }

  }



  /* ── Bottom bar ────────────────────────────────────────────────────────── */



  function openBar() {

    if (!bar || bar.hidden === false) { return; }

    bar.hidden = false;

    bar.setAttribute('aria-hidden', 'false');

    requestAnimationFrame(function () {

      requestAnimationFrame(function () { bar.classList.add('is-open'); });

    });

  }



  function closeBar() {

    if (!bar || bar.hidden) { return; }

    bar.classList.remove('is-open');

    window.setTimeout(function () {

      bar.hidden = true;

      bar.setAttribute('aria-hidden', 'true');

    }, EXIT_MS);

  }



  /* ── Wiring ──────────────────────────────────────────────────────────── */



  // Any [data-varn-close] dismisses whichever region contains it.

  document.addEventListener('click', function (e) {

    var closer = e.target.closest('[data-varn-close]');

    if (closer) {

      if (modal && modal.contains(closer)) { closeModal(); }

      else if (bar && bar.contains(closer)) { closeBar(); }

      return;

    }

    // A call-to-action closes its region on the way out. Its href — the live

    // App Store listing (ES_VARN_APP_URL) — opens in its own tab as normal.

    var cta = e.target.closest('[data-varn-cta]');

    if (cta) {

      if (modal && modal.contains(cta)) { closeModal(); }

      else if (bar && bar.contains(cta)) { closeBar(); }

    }

  });



  /* Old builds stored "seen" and "dismissed" flags; clear them so a browser

     that met the earlier version is not left without the promos. */

  try {

    window.localStorage.removeItem('es_varn_modal_seen');

    window.localStorage.removeItem('es_varn_bar_dismissed');

  } catch (e) {}



  /* ── Card or bar for this page view ─────────────────────────────────────

     sessionStorage can throw (private mode, blocked storage): the card is

     then shown on the first page only and the bar everywhere else, which is

     the closest honest behaviour without a counter. */

  var KEY_LEFT  = 'es_varn_cards_left';

  var KEY_PAGES = 'es_varn_pages_seen';



  function showCardThisPage() {

    try {

      var store = window.sessionStorage;

      var pages = parseInt(store.getItem(KEY_PAGES), 10) || 0;

      var left  = store.getItem(KEY_LEFT);



      if (left === null) {

        left = 3 + Math.floor(Math.random() * 2); // 3 or 4 per visit

      } else {

        left = parseInt(left, 10) || 0;

      }



      var show = left > 0 && (pages === 0 || Math.random() < 0.5);



      store.setItem(KEY_PAGES, String(pages + 1));

      store.setItem(KEY_LEFT, String(show ? left - 1 : left));



      return show;

    } catch (e) {

      return !document.referrer || document.referrer.indexOf(window.location.host) === -1;

    }

  }



  /* ── Kick-off ────────────────────────────────────────────────────────────

     Waits for the visitor's first interaction (scroll, pointer, touch or

     key), then a short beat (PageSpeed pass, 22 Sep 2026). A promo that

     paints over the page while it is still loading counted against its

     speed scores and could become the "largest paint"; after a first

     interaction it costs nothing and the reader is already on the page. */

  var showCard = modal && showCardThisPage();

  var started = false;

  var EVENTS = ['scroll', 'pointerdown', 'pointermove', 'touchstart', 'keydown', 'wheel'];



  function curtainCovers() {

    var curtain = document.getElementById('es-curtain');

    return !!(curtain && !curtain.classList.contains('is-gone'));

  }



  function start() {

    if (started) { return; }

    if (curtainCovers()) { return; }

    started = true;

    EVENTS.forEach(function (ev) { window.removeEventListener(ev, start, { passive: true }); });

    window.setTimeout(showCard ? openModal : openBar, MODAL_DELAY);

  }



  EVENTS.forEach(function (ev) { window.addEventListener(ev, start, { passive: true }); });

})();

