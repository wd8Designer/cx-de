/**
 * Cypherox Enterprise - Logos Marquee Dynamic Include
 */
(function () {
      'use strict';

      // Helper to resolve base path for subdirectories (e.g. /hire-developers/)
      function getBasePath() {
            const path = window.location.pathname.replace(/\\/g, '/');
            if (path.includes('/hire-developers/') || path.endsWith('/hire-developers')) {
                  return '../';
            }
            return '';
      }

      // Template markup for logos marquee
      function getLogosMarqueeHTML() {
            const base = getBasePath();
            return `
          <ul class="es-logos__track">
            <li class="es-logos__card"><span class="es-logos__link"><img class="es-logos__logo" src="${base}images/viget-logo.svg"
                  alt="viget-logo" width="160" height="66" loading="lazy" decoding="async"></span></li>
            <li class="es-logos__card"><span class="es-logos__link"><img class="es-logos__logo" src="${base}images/fingent-logo.svg"
                  alt="fingent" width="134" height="29" loading="lazy" decoding="async"></span></li>
            <li class="es-logos__card"><span class="es-logos__link"><img class="es-logos__logo"
                  src="${base}images/xfive-logo.svg" alt="xfive-logo" width="128" height="45" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card"><span class="es-logos__link"><img class="es-logos__logo" src="${base}images/chopdawg-logo.svg"
                  alt="chopdawg-logo" width="146" height="35" loading="lazy" decoding="async"></span></li>
            <li class="es-logos__card"><span class="es-logos__link"><img class="es-logos__logo" src="${base}images/dockyard-logo.svg"
                  alt="dockyard-logo" width="84" height="47" loading="lazy" decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/viget-logo.svg" alt="viget-logo" width="160" height="66" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/fingent-logo.svg" alt="fingent" width="134" height="29" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/xfive-logo.svg" alt="xfive-logo" width="128" height="45" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/chopdawg-logo.svg" alt="chopdawg-logo" width="146" height="35" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/dockyard-logo.svg" alt="dockyard-logo" width="84" height="47" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/viget-logo.svg" alt="viget-logo" width="160" height="66" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/fingent-logo.svg" alt="fingent" width="134" height="29" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/xfive-logo.svg" alt="xfive-logo" width="128" height="45" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/chopdawg-logo.svg" alt="chopdawg-logo" width="146" height="35" loading="lazy"
                  decoding="async"></span></li>
            <li class="es-logos__card es-logos__card--dup" aria-hidden="true"><span class="es-logos__link"><img
                  class="es-logos__logo" src="${base}images/dockyard-logo.svg" alt="dockyard-logo" width="84" height="47" loading="lazy"
                  decoding="async"></span></li>
            
          </ul>`;
      }

      // DOM injection
      function renderMarquee() {
            const marquees = document.querySelectorAll('.es-logos__marquee');
            if (!marquees || !marquees.length) return;

            const html = getLogosMarqueeHTML();
            marquees.forEach(function (el) {
                  if (!el.querySelector('.es-logos__track')) {
                        el.innerHTML = html;
                  }
            });
      }

      window.renderLogosMarquee = renderMarquee;

      if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', renderMarquee);
      } else {
            renderMarquee();
      }

      window.addEventListener('load', renderMarquee);
})();
