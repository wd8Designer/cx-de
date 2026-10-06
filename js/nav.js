/**
 * Cypherox Header & Navigation Interactions (CX UK Reference)
 * Handles sticky header, mega-menu dropdowns, tab switching, and mobile drawer.
 */

(function () {
  'use strict';

  function initStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initMegaMenus() {
    const navItems = document.querySelectorAll('.nav-item');

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

    // Tab switching for tabbed mega menus (Services & Hire Developers)
    document.querySelectorAll('.mega-tab').forEach(megaTab => {
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

    // Close mega menus when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-item')) {
        navItems.forEach(ni => ni.classList.remove('active'));
      }
    });
  }

  function initMobileDrawer() {
    const toggle = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const overlay = document.querySelector('.mobile-drawer__overlay');
    const closeBtn = document.querySelector('.mobile-drawer__close');

    if (!toggle || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add('open');
      if (overlay) {
        overlay.classList.add('open');
        overlay.style.display = 'block';
      }
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('open');
      if (overlay) {
        overlay.classList.remove('open');
        overlay.style.display = 'none';
      }
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (overlay) overlay.addEventListener('click', closeDrawer);

    // Accordion for mobile drawer items
    const headers = drawer.querySelectorAll('.mobile-drawer__item-header');
    headers.forEach(header => {
      header.addEventListener('click', (e) => {
        const idx = header.getAttribute('data-index');
        if (idx === null || idx === undefined) return;
        e.preventDefault();

        const subnav = drawer.querySelector(`#subnav-${idx}`);
        if (subnav) {
          const isOpen = header.classList.contains('expanded');

          // Close other accordions
          headers.forEach(h => {
            if (h !== header) h.classList.remove('expanded');
          });
          drawer.querySelectorAll('.mobile-drawer__subnav').forEach(s => {
            if (s !== subnav) {
              s.classList.remove('open');
              s.style.maxHeight = '0';
            }
          });

          if (!isOpen) {
            header.classList.add('expanded');
            subnav.classList.add('open');
            subnav.style.maxHeight = subnav.scrollHeight + 50 + 'px';
          } else {
            header.classList.remove('expanded');
            subnav.classList.remove('open');
            subnav.style.maxHeight = '0';
          }
        }
      });
    });
  }

  function init() {
    initStickyHeader();
    initMegaMenus();
    initMobileDrawer();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
