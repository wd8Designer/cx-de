/* =========================================================================
   assets/js/es-home-hero.js  ·  17 Sep 2026

   Home hero (both designs): the Shopify and growth marks beside the headline.

   1. PLACEMENT. Each mark names a headline line (data-hs-line, 0-based; -1
      for the last) and a side (data-hs-side left|right). The script measures
      the headline's real line boxes and sets --hs-x / --hs-y on the mark so it
      sits GAP px off the first word (left) or last word (right) of that line,
      vertically centred on it. Re-measured on resize and once fonts load, so
      the marks follow the text as it rewraps.

   2. DRIFT. The marks move a few pixels left and right with the pointer, via
      --hs-mx (-1 to 1) on the wrapper; distance and easing live in
      es-home.css. Skipped for touch-only devices and reduced motion.

   Nothing depends on this file: without it the CSS fallback edges apply.
   ========================================================================= */
(function () {
  'use strict';

  var GAP = 18;

  var wraps = Array.prototype.slice.call(document.querySelectorAll('[data-hs-edges]'));
  if (!wraps.length) { return; }

  /* The headline's visual lines: every client rect of its text, grouped by
     vertical position, each reduced to its left, right, top and bottom. */
  function lines(h) {
    var range = document.createRange();
    range.selectNodeContents(h);
    var rects = Array.prototype.slice.call(range.getClientRects())
      .filter(function (r) { return r.width > 1 && r.height > 1; })
      .sort(function (a, b) { return a.top - b.top || a.left - b.left; });

    var out = [];
    rects.forEach(function (r) {
      var mid = r.top + r.height / 2;
      var line = out.length ? out[out.length - 1] : null;
      if (line && Math.abs(mid - line.mid) < line.height * 0.5) {
        line.left = Math.min(line.left, r.left);
        line.right = Math.max(line.right, r.right);
        line.top = Math.min(line.top, r.top);
        line.bottom = Math.max(line.bottom, r.bottom);
      } else {
        out.push({ left: r.left, right: r.right, top: r.top, bottom: r.bottom, mid: mid, height: r.height });
      }
    });
    return out;
  }

  function place(wrap) {
    var h = wrap.querySelector('h1, h2');
    if (!h) { return; }

    var ls = lines(h);
    if (!ls.length) { return; }

    var box = wrap.getBoundingClientRect();

    Array.prototype.forEach.call(wrap.querySelectorAll('.hs-mark[data-hs-side]'), function (mark) {
      if (getComputedStyle(mark).display === 'none') { return; }

      var idx = parseInt(mark.getAttribute('data-hs-line'), 10) || 0;
      if (idx < 0) { idx = ls.length + idx; }
      var line = ls[Math.max(0, Math.min(ls.length - 1, idx))];

      var w = mark.offsetWidth;
      var hgt = mark.offsetHeight;
      var x = mark.getAttribute('data-hs-side') === 'right'
        ? line.right - box.left + GAP
        : line.left - box.left - GAP - w;
      var y = (line.top + line.bottom) / 2 - box.top - hgt / 2;

      mark.style.setProperty('--hs-x', Math.round(x) + 'px');
      mark.style.setProperty('--hs-y', Math.round(y) + 'px');
    });

    wrap.classList.add('is-edged');
  }

  function placeAll() { wraps.forEach(place); }

  placeAll();

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(placeAll, 120);
  });
  window.addEventListener('load', placeAll);
  if (document.fonts && document.fonts.ready) { document.fonts.ready.then(placeAll); }

  /* ---- Pointer drift ---- */
  if (!window.matchMedia) { return; }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) { return; }

  wraps.forEach(function (wrap) {
    if (!wrap.hasAttribute('data-hs-parallax')) { return; }

    var hero = wrap.closest('section') || document.body;
    var pending = null;

    function write() {
      wrap.style.setProperty('--hs-mx', pending.toFixed(3));
      pending = null;
    }

    hero.addEventListener('pointermove', function (e) {
      var rect = hero.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      var first = (pending === null);
      pending = Math.max(-1, Math.min(1, x));
      if (first) { window.requestAnimationFrame(write); }
    }, { passive: true });

    hero.addEventListener('pointerleave', function () {
      var first = (pending === null);
      pending = 0;
      if (first) { window.requestAnimationFrame(write); }
    }, { passive: true });
  });
})();
