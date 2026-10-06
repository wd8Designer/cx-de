/**
 * Footer link columns — collapse to an accordion on small screens.
 *
 * Ported from the kit's `initAccordions` (enstacked_HTML/assets/js/es-core.js).
 * Its own file rather than a block in es-sections.js, because es-sections.js is
 * enqueued per migrated template and the footer is on every page of the site.
 *
 * The markup ships as a plain heading over a plain list, which is the correct
 * expanded footer for a visitor with no JavaScript. This turns the heading into
 * a button only while the media query matches, and puts the heading back when
 * it stops matching, so a phone rotated to landscape gets the desktop layout
 * rather than a stuck accordion.
 *
 * The heading ELEMENT stays either way. Only its contents are swapped, so
 * screen-reader heading navigation keeps working in both states.
 */
(function () {
  'use strict';

  var uid = 0;

  function ensureId(el, prefix) {
    if (!el.id) {
      uid += 1;
      el.id = prefix + '-' + uid;
    }
    return el.id;
  }

  function initAccordions() {
    var groups = document.querySelectorAll('[data-es-accordion]');

    Array.prototype.forEach.call(groups, function (group) {
      var query = window.matchMedia(group.getAttribute('data-es-accordion') || '(max-width: 767px)');
      var items = group.querySelectorAll('[data-es-accordion-item]');
      var collapsed = false;

      function enable() {
        if (collapsed) { return; }
        collapsed = true;

        Array.prototype.forEach.call(items, function (item) {
          var heading = item.querySelector('[data-es-accordion-heading]');
          var panel = item.querySelector('[data-es-accordion-panel]');
          if (!heading || !panel) { return; }

          var panelId = ensureId(panel, 'es-footer-panel');
          var button = document.createElement('button');
          var label = document.createElement('span');
          var caret = item.querySelector('[data-es-accordion-caret]');

          button.type = 'button';
          button.className = 'es-footer__toggle';
          button.setAttribute('aria-expanded', 'false');
          button.setAttribute('aria-controls', panelId);

          label.textContent = heading.textContent;
          button.appendChild(label);

          /* The caret is rendered by the template through en_icon() and parked
             hidden next to the heading, so this file never has to inline an
             SVG of its own. If it is missing the button still works, it just
             carries no disclosure mark. */
          if (caret) {
            caret.removeAttribute('hidden');
            button.appendChild(caret);
          }

          button.addEventListener('click', function () {
            var open = item.hasAttribute('data-open');
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
        if (!collapsed) { return; }
        collapsed = false;

        Array.prototype.forEach.call(items, function (item) {
          var heading = item.querySelector('[data-es-accordion-heading]');
          var button = heading && heading.querySelector('.es-footer__toggle');
          if (!button) { return; }

          var caret = button.querySelector('[data-es-accordion-caret]');
          var text = button.querySelector('span').textContent;

          heading.textContent = text;

          /* Put the caret back beside the heading rather than dropping it, so
             a second pass over the breakpoint still finds it. */
          if (caret) {
            caret.setAttribute('hidden', '');
            item.insertBefore(caret, item.firstChild);
          }

          item.removeAttribute('data-collapsible');
          item.removeAttribute('data-open');
        });
      }

      function apply() {
        if (query.matches) { enable(); } else { disable(); }
      }

      if (query.addEventListener) {
        query.addEventListener('change', apply);
      } else if (query.addListener) {
        query.addListener(apply);
      }

      apply();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAccordions);
  } else {
    initAccordions();
  }
})();
