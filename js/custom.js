/* =============================================================

   custom.js â€” Core shared scripts for Enstacked theme

   SmoothScroll removed â†’ CSS scroll-behavior: smooth used instead

   Job Application Form â†’ moved to job-form.js (careers page only)

   ============================================================= */



/* ===========================

   OWL Carousel Inits

   =========================== */

jQuery(document).ready(function ($) {

  // CASE STUDY CAROUSEL

  if ($.fn.owlCarousel && $("#case-study-slider").length) {

    $("#case-study-slider").owlCarousel({

      loop: true,

      margin: 15,

      dots: false,

      nav: true,

      autoplay: false,

      autoplayTimeout: 3000,

      autoplayHoverPause: true,

      items: 1,

      navText: [

        `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

          <g clip-path="url(#clip_case_prev)">

            <path d="M4.29963 10.0001C4.29963 10.3585 4.43649 10.7169 4.70964 10.9902L13.3093 19.5897C13.8563 20.1368 14.7433 20.1368 15.2901 19.5897C15.8369 19.0429 15.8369 18.1561 15.2901 17.609L7.68064 10.0001L15.2898 2.39102C15.8366 1.84398 15.8366 0.957304 15.2898 0.410524C14.743 -0.136784 13.8561 -0.136784 13.309 0.410524L4.70937 9.00994C4.43618 9.28335 4.29963 9.64175 4.29963 10.0001Z"/>

          </g>

          <defs>

            <clipPath id="clip_case_prev">

              <rect width="20" height="20" transform="matrix(0 -1 -1 0 20 20)" />

            </clipPath>

          </defs>

        </svg>`,

        `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">

          <g clip-path="url(#clip_case_next)">

            <path d="M15.7004 10.0001C15.7004 10.3585 15.5635 10.7169 15.2904 10.9902L6.69072 19.5897C6.14368 20.1368 5.25674 20.1368 4.70992 19.5897C4.1631 19.0429 4.1631 18.1561 4.70992 17.609L12.3194 10.0001L4.71019 2.39102C4.16336 1.84397 4.16336 0.957303 4.71019 0.410525C5.25701 -0.136784 6.14395 -0.136784 6.69099 0.410525L15.2906 9.00994C15.5638 9.28335 15.7004 9.64175 15.7004 10.0001Z"/>

          </g>

          <defs>

            <clipPath id="clip_case_next">

              <rect width="20" height="20" transform="translate(0 20) rotate(-90)" />

            </clipPath>

          </defs>

        </svg>`

      ]

    });

  }



  // TESTIMONIAL CAROUSEL

  if ($.fn.owlCarousel && $("#client-testimonials-new").length) {

    $("#client-testimonials-new").owlCarousel({

      loop: true,

      margin: 15,

      dots: false,

      nav: true,

      autoplay: false,

      autoplayTimeout: 3000,

      autoplayHoverPause: true,

      onInitialized: function(event) {

        setTimeout(function() {

          $(event.target).find('.owl-prev').attr('aria-label', 'Previous').removeAttr('role');

          $(event.target).find('.owl-next').attr('aria-label', 'Next').removeAttr('role');

        }, 10);

      },

      navText: [

        `<svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg">

          <g clip-path="url(#clip_test_prev)">

            <path d="M4.29963 10.0001C4.29963 10.3585 4.43649 10.7169 4.70964 10.9902L13.3093 19.5897C13.8563 20.1368 14.7433 20.1368 15.2901 19.5897C15.8369 19.0429 15.8369 18.1561 15.2901 17.609L7.68064 10.0001L15.2898 2.39102C15.8366 1.84398 15.8366 0.957304 15.2898 0.410524C14.743 -0.136784 13.8561 -0.136784 13.309 0.410524L4.70937 9.00994C4.43618 9.28335 4.29963 9.64175 4.29963 10.0001Z" fill=""/>

          </g>

          <defs>

            <clipPath id="clip_test_prev">

              <rect width="20" height="20" fill="white" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 20 20)"/>

            </clipPath>

          </defs>

        </svg>`,

        `<svg width="20" height="20" viewBox="0 0 20 20" fill="" xmlns="http://www.w3.org/2000/svg">

          <g clip-path="url(#clip_test_next)">

            <path d="M15.7004 10.0001C15.7004 10.3585 15.5635 10.7169 15.2904 10.9902L6.69072 19.5897C6.14368 20.1368 5.25674 20.1368 4.70992 19.5897C4.1631 19.0429 4.1631 18.1561 4.70992 17.609L12.3194 10.0001L4.71019 2.39102C4.16336 1.84397 4.16336 0.957303 4.71019 0.410525C5.25701 -0.136784 6.14395 -0.136784 6.69099 0.410525L15.2906 9.00994C15.5638 9.28335 15.7004 9.64175 15.7004 10.0001Z" fill=""/>

          </g>

          <defs>

            <clipPath id="clip_test_next">

              <rect width="20" height="20" fill="white" transform="translate(0 20) rotate(-90)"/>

            </clipPath>

          </defs>

        </svg>`

      ],

      responsive: {

        0: { items: 1 },

        768: { items: 2 },

        992: { items: 3 }

      }

    });

  }



  // Our Work Slider

  if ($.fn.owlCarousel && $('#our-work-sld-new').length) {

    $('#our-work-sld-new').owlCarousel({

      loop: true,

      margin: 15,

      nav: true,

      dots: false,

      autoplay: true,

      autoplayTimeout: 5000,

      autoplayHoverPause: true,

      navText: [

        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip_prev_work)"><path d="M4.29963 10.0001C4.29963 10.3585 4.43649 10.7169 4.70964 10.9902L13.3093 19.5897C13.8563 20.1368 14.7433 20.1368 15.2901 19.5897C15.8369 19.0429 15.8369 18.1561 15.2901 17.609L7.68064 10.0001L15.2898 2.39102C15.8366 1.84398 15.8366 0.957304 15.2898 0.410524C14.743 -0.136784 13.8561 -0.136784 13.309 0.410524L4.70937 9.00994C4.43618 9.28335 4.29963 9.64175 4.29963 10.0001Z"></path></g><defs><clipPath id="clip_prev_work"><rect width="20" height="20" transform="matrix(0 -1 -1 0 20 20)"></rect></clipPath></defs></svg>',

        '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip_next_work)"><path d="M15.7004 10.0001C15.7004 10.3585 15.5635 10.7169 15.2904 10.9902L6.69072 19.5897C6.14368 20.1368 5.25674 20.1368 4.70992 19.5897C4.1631 19.0429 4.1631 18.1561 4.70992 17.609L12.3194 10.0001L4.71019 2.39102C4.16336 1.84397 4.16336 0.957303 4.71019 0.410525C5.25701 -0.136784 6.14395 -0.136784 6.69099 0.410525L15.2906 9.00994C15.5638 9.28335 15.7004 9.64175 15.7004 10.0001Z"></path></g><defs><clipPath id="clip_next_work"><rect width="20" height="20" transform="translate(0 20) rotate(-90)"></rect></clipPath></defs></svg>'

      ],

      responsive: {

        0: { items: 1 },

        768: { items: 2 },

        1024: { items: 2 }

      }

    });

  }



  // Marquee Slider

  $(".marquee-content").each(function () {

    const $content = $(this);

    const $list = $content.find("ul");

    const speed = $content.data("speed") || 15000;

    for (let i = 0; i < 4; i++) { $list.clone().appendTo($content); }

    const singleWidth = $list.outerWidth(true);

    const calculatedDuration = (singleWidth / 100) * (speed / 1000);

    $content.css("animation-duration", calculatedDuration + "s");

    if ($content.hasClass("right-to-left")) {

      $content.css("transform", "translateX(-50%)");

      void $content[0].offsetWidth;

      $content.css("transform", "");

    }

    $(window).on("resize", function () {

      const newSingleWidth = $list.outerWidth(true);

      const newDuration = (newSingleWidth / 100) * (speed / 1000);

      const originalState = $content.css("animation-play-state");

      $content.css("animation-play-state", "paused");

      $content.css("animation-duration", newDuration + "s");

      setTimeout(function () { $content.css("animation-play-state", originalState); }, 50);

    });

  });



});



/* ===========================

   Gradient hover text + hero title effect

   =========================== */

function applyGradientHoverEffect(selector) {

  const elements = document.querySelectorAll(selector);

  if (!elements.length) return;



  elements.forEach((el) => {

    // Entry sweep-in animation (same class works for all pages via CSS)

    el.classList.add('gradient-hover-animate');

    el.addEventListener('animationend', () => {

      el.classList.remove('gradient-hover-animate');

      el.style.backgroundImage = 'none';

      el.style.color = '';

      el.style.webkitTextFillColor = '';

    }, { once: true });



    // Hover interaction

    el.addEventListener('mouseenter', () => {

      el.style.transition = 'background 0.05s ease';

    });



    el.addEventListener('mousemove', (e) => {

      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;

      const y = e.clientY - rect.top;

      el.style.color = 'transparent';

      el.style.webkitTextFillColor = 'transparent';

      el.style.backgroundImage = `radial-gradient(circle 120px at ${x}px ${y}px, #f26e65 0%, #1a1a1a 80%)`;

      el.style.backgroundClip = 'text';

      el.style.webkitBackgroundClip = 'text';

    });



    el.addEventListener('mouseleave', () => {

      el.style.transition = 'background 0.3s ease';

      el.style.backgroundImage = 'none';

      el.style.color = '';

      el.style.webkitTextFillColor = '';

    });

  });

}



document.addEventListener('DOMContentLoaded', function () {

  applyGradientHoverEffect('.gradient-hover');

});



/* ===========================

   Draggable logo marquee

   =========================== */

document.addEventListener("DOMContentLoaded", function () {

  const marquees = document.querySelectorAll(".logo-radius");



  marquees.forEach((marqueeParent) => {

    const marqueeInner = marqueeParent.querySelector(".ue-marquee");

    if (!marqueeInner) return;



    let isDragging = false;

    let startX;

    let scrollLeft;



    marqueeInner.addEventListener("mousedown", (e) => {

      isDragging = true;

      startX = e.pageX - marqueeInner.offsetLeft;

      scrollLeft = marqueeInner.scrollLeft;

      marqueeInner.style.cursor = "grabbing";

    });



    marqueeInner.addEventListener("mouseleave", () => {

      isDragging = false;

      marqueeInner.style.cursor = "default";

    });



    marqueeInner.addEventListener("mouseup", () => {

      isDragging = false;

      marqueeInner.style.cursor = "default";

    });



    marqueeInner.addEventListener("mousemove", (e) => {

      if (!isDragging) return;

      e.preventDefault();

      const x = e.pageX - marqueeInner.offsetLeft;

      const walk = (x - startX) * 2;

      marqueeInner.scrollLeft = scrollLeft - walk;

    });



    marqueeInner.addEventListener("touchstart", (e) => {

      isDragging = true;

      startX = e.touches[0].pageX - marqueeInner.offsetLeft;

      scrollLeft = marqueeInner.scrollLeft;

    });



    marqueeInner.addEventListener("touchend", () => {

      isDragging = false;

    });



    marqueeInner.addEventListener("touchmove", (e) => {

      if (!isDragging) return;

      const x = e.touches[0].pageX - marqueeInner.offsetLeft;

      const walk = (x - startX) * 2;

      marqueeInner.scrollLeft = scrollLeft - walk;

    });

  });

});



/* ===========================

   Disable Industries accordion toggle

   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  const industriesAccordion = document.getElementById('industries-acc');



  if (industriesAccordion) {

    industriesAccordion.removeAttribute('open');

    industriesAccordion.removeAttribute('tabindex');

    industriesAccordion.classList.remove('e-n-accordion-item');



    const summary = industriesAccordion.querySelector('summary');

    if (summary) {

      summary.removeAttribute('aria-expanded');

      summary.addEventListener('click', function (event) {

        event.preventDefault();

      });

    }

  }

});



/* ===========================

   Tags gradient: remove commas

   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  const tagsParent = document.querySelectorAll('.tags-gradient .elementor-post-info__terms-list');

  tagsParent.forEach(tagList => {

    tagList.innerHTML = tagList.innerHTML.replace(/,\s?/g, '');

  });

});



/* ===========================

   Page-piling banner behavior

   Guarded â€” only attaches listener if sections exist

   =========================== */

(function () {

  var sections = document.querySelectorAll('.page-piling-section');

  if (!sections.length) return; // not on this page, skip



  var banner = document.querySelector('.banner');

  var currentIndex = 0;

  var isScrolling = false;



  var updateActiveSection = function (index) {

    if (isScrolling || index < 0 || index >= sections.length) return;

    isScrolling = true;



    if (banner) {

      banner.style.transform = index > 0 ? 'translateY(-100%)' : 'translateY(0)';

    }



    currentIndex = index;

    setTimeout(function () { isScrolling = false; }, 300);

  };



  var handleWheel = function (e) {

    if (isScrolling) return;

    var delta = Math.sign(e.deltaY);

    if (delta > 0 && currentIndex < sections.length - 1) {

      updateActiveSection(currentIndex + 1);

    } else if (delta < 0 && currentIndex > 0) {

      updateActiveSection(currentIndex - 1);

    }

  };



  updateActiveSection(0);

  window.addEventListener('wheel', handleWheel);

})();







/* ===========================

   Review masonry 2x2 layout

   =========================== */

document.addEventListener("DOMContentLoaded", function () {

  var carouselParent = document.querySelector(".review-masonry");



  if (carouselParent) {

    // Use a generic item selector â€” not Elementor-specific

    var items = carouselParent.querySelectorAll(".review-masonry-item, .loop-item, [class*='post-item']");

    if (!items.length) return;



    items.forEach(function (item) { item.classList.add("masonry-item"); });



    var masonryInit = function () {

      carouselParent.style.display = "grid";

      carouselParent.style.gridTemplateColumns = "repeat(2, 1fr)";

      carouselParent.style.gap = "10px";

      items.forEach(function (item, index) {

        item.style.gridRowEnd = "span " + (index % 3 === 0 ? 2 : 1);

      });

    };



    masonryInit();

    window.addEventListener("resize", masonryInit);

  }

});



/* ===========================

   Smooth scroll for anchor links with offset

   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  /* WHERE THE TARGET SITS IN THE FLOW, which is not always where it is drawn.



     getBoundingClientRect() reports the painted position, and for a

     `position: sticky` target that is wherever it is currently pinned rather

     than where it belongs in the document. Read while such a target is stuck

     to the top of the screen, it resolves to roughly "the current scroll

     position", so the jump travels nowhere.



     That is what the industry cards in section-industry-tabs.php hit: they are

     a sticky stack, so every card already pinned above the reader could not be

     reached from its own link in the contents list.



     Taking `position` off for one synchronous measurement gives the flow

     position. Only done when the target really is sticky, so nothing else on

     the site changes behaviour: a `position: relative` target, for one, would

     move under the same treatment. */

  function esFlowTop(el) {

    if (window.getComputedStyle(el).position !== 'sticky') {

      return el.getBoundingClientRect().top + window.scrollY;

    }



    var inline = el.style.position;

    el.style.position = 'static';

    var top = el.getBoundingClientRect().top + window.scrollY;

    el.style.position = inline;

    return top;

  }



  var esNoMotion = window.matchMedia

    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;



  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener('click', function (e) {

      var targetID = this.getAttribute('href').substring(1);

      var targetElement = targetID ? document.getElementById(targetID) : null;



      /* A bare "#" or a dead fragment: leave the browser to it rather than

         swallowing the click and doing nothing with it. */

      if (!targetElement) { return; }



      e.preventDefault();



      /* The target's own scroll-margin-top wins wherever it sets one, so a

         section that knows how much headroom it needs can say so in CSS

         instead of every page on the site sharing this one number. Unset

         computes to 0, which falls through to the 150 this has always used. */

      var offset = parseFloat(window.getComputedStyle(targetElement).scrollMarginTop) || 150;



      window.scrollTo({

        top: esFlowTop(targetElement) - offset,

        behavior: esNoMotion ? 'auto' : 'smooth'

      });

    });

  });

});



/* ===========================

   Custom select options -> hidden input

   =========================== */

document.addEventListener("DOMContentLoaded", function () {

  const serviceOptions = document.querySelectorAll('.custom-select .option');

  const hiddenInput = document.getElementById('selectedService');



  if (!serviceOptions.length || !hiddenInput) return;



  serviceOptions.forEach(option => {

    option.addEventListener('click', () => {

      serviceOptions.forEach(opt => opt.classList.remove('active'));

      option.classList.add('active');

      hiddenInput.value = option.getAttribute('data-value') || '';

    });

  });

});



/* ===========================

   Mobile Menu Toggle Logic

   =========================== */

window.toggleRadio = function (radio) {

  if (radio.getAttribute('data-prev-state') === 'true') {

    radio.checked = false;

    radio.setAttribute('data-prev-state', 'false');

  } else {

    // Reset all with same name

    var group = document.getElementsByName(radio.name);

    for (var i = 0; i < group.length; i++) {

      group[i].setAttribute('data-prev-state', 'false');

    }

    radio.setAttribute('data-prev-state', 'true');

  }

};



/* ===========================

   Consultation Form AJAX Submission

   =========================== */

jQuery(document).ready(function ($) {

  $('#consultation-form').on('submit', function (e) {

    const $form = $(this);

    const $submitBtn = $form.find('button[type="submit"]');

    const originalBtnText = $submitBtn.text();



    // Basic validation

    let isValid = true;

    $form.find('.required-input').each(function () {

      if (!$(this).val().trim()) {

        isValid = false;

        $(this).addClass('error');

      } else {

        $(this).removeClass('error');

      }

    });



    if (!isValid) {

      e.preventDefault();

      return false;

    }



    // Check for ReCaptcha if present

    if (typeof grecaptcha !== 'undefined' && $('.g-recaptcha').length) {

      const response = grecaptcha.getResponse();

      if (!response) {

        alert('Please complete the reCAPTCHA verification');

        e.preventDefault();

        return false;

      }

    }



    // Use AJAX to submit the form

    e.preventDefault();



    $submitBtn.prop('disabled', true).text('Sending...');



    const formData = new FormData(this);

    formData.append('action', 'gfs_ajax_submit');

    formData.append('submit_consultation', '1');



    $.ajax({

      url: '/wp-admin/admin-ajax.php',

      type: 'POST',

      data: formData,

      processData: false,

      contentType: false,

      success: function (response) {

        if (response.success) {

          $form.html('<div class="success-message" style="padding: 20px; background: #d4edda; color: #155724; border-radius: 4px; margin-top: 20px; text-align: center;"><h3>Success!</h3><p>' + response.data + '</p></div>');



          $('html, body').animate({

            scrollTop: $form.offset().top - 100

          }, 500);

        } else {

          alert(response.data || 'Something went wrong. Please try again.');

          $submitBtn.prop('disabled', false).text(originalBtnText);

        }

      },

      error: function () {

        alert('Could not connect to the server. Please try again.');

        $submitBtn.prop('disabled', false).text(originalBtnText);

      }

    });

  });

});



/* ============================================================

   GLOBAL SCROLL ANIMATION (Dynamic JS-Controlled)

   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  // Configuration

  const animConfig = {

    speed: "0.8s",                   // Animation speed

    easing: "cubic-bezier(0.22, 1, 0.36, 1)", // Easing effect

    distance: "100px",                // Distance to move up

    threshold: 0                      // Safe for very tall elements like blog posts

  };



  // Find all major containers to animate

  // We select all .container elements, but skip the first one to avoid animating the Hero section

  const allContainers = Array.from(document.querySelectorAll('.container'));



  if (allContainers.length > 1) {

    // Skip the first container (Hero)

    const elementsToAnimate = allContainers.slice(1);



    // Inject dynamic CSS to handle the base states so we don't need hardcoded CSS

    const style = document.createElement('style');

    style.innerHTML = `

      .js-reveal-item {

        opacity: 0;

        transform: translateY(${animConfig.distance});

        will-change: transform, opacity;

        transition: opacity ${animConfig.speed} ${animConfig.easing}, transform ${animConfig.speed} ${animConfig.easing};

      }

      .js-reveal-item.is-visible {

        opacity: 1;

        transform: translateY(0);

      }

    `;

    document.head.appendChild(style);



    const revealObserver = new IntersectionObserver(function (entries, observer) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add('is-visible');

          observer.unobserve(entry.target);

        }

      });

    }, {

      root: null,

      rootMargin: "-50px 0px",

      threshold: animConfig.threshold

    });



    // Apply classes and observe

    elementsToAnimate.forEach(function (element) {

      // Don't animate footer or header containers to be safe.

      // Nor anything already on screen at load (PageSpeed pass, 22 Sep 2026):

      // hiding it and fading it back in made the first screen change after

      // it had painted, which cost Speed Index for no visible benefit.

      if (element.getBoundingClientRect().top < window.innerHeight) {

        return;

      }

      if (!element.closest('header') && !element.closest('footer')) {

        element.classList.add('js-reveal-item');

        revealObserver.observe(element);

      }

    });

  }

});



/* The Fluid Morph Mega Menu block that used to live here is gone. The

   header no longer ships a `.main-nav-cover` / `.card-nav-box-main` /

   `#mega-menu-shared-bg` shell -- the mega menu is now one shared stage

   card driven by assets/js/nav.js, which is enqueued on every page. */



/* ===========================

   Interactive CRO Slider

   =========================== */

document.addEventListener('DOMContentLoaded', function () {

  const slider = document.getElementById('cro-range');

  const optVal = document.getElementById('cro-opt-val');

  const revVal = document.getElementById('cro-rev-val');

  const roasBadge = document.getElementById('cro-roas-badge');

  

  if (slider && optVal && revVal && roasBadge) {

    // Underlying assumptions for realistic calculations

    const traffic = 50000; // 50k visitors

    const aov = 100;       // $100 average order value

    const adSpend = 12500; // $12.5k ad spend



    slider.addEventListener('input', function(e) {

      const croPercent = parseFloat(e.target.value);

      optVal.textContent = croPercent.toFixed(1) + '%';

      

      const orders = traffic * (croPercent / 100);

      const revenue = orders * aov;

      const roas = (revenue / adSpend) * 100;

      

      revVal.textContent = '$' + (revenue / 1000).toFixed(1) + 'k';

      roasBadge.textContent = Math.round(roas) + '% ROAS';

    });

    

    // Trigger input event to set initial correct values

    slider.dispatchEvent(new Event('input'));

  }

});




/* ========================================================
   HOMEPAGE CURTAIN LOCK & TRANSITION CONTROLLER
   ======================================================== */
(function () {
  var root = document.getElementById('es-curtain');
  if (!root) return;

  document.documentElement.classList.add('es-curtain-lock');
  if (!location.hash) window.scrollTo(0, 0);

  var finished = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function unlock() {
    var header = document.querySelector('.esn-header');
    var drawer = document.querySelector('.esn-drawer');
    var backdrop = document.querySelector('.esn-backdrop');
    var footer = document.querySelector('footer');
    var under = document.getElementById('es-under');
    if (header) header.inert = false;
    if (drawer) drawer.inert = false;
    if (backdrop) backdrop.inert = false;
    if (footer) footer.inert = false;
    if (under) under.inert = false;
  }

  function cover() {
    if (!('inert' in root)) return;
    var header = document.querySelector('.esn-header');
    var drawer = document.querySelector('.esn-drawer');
    var backdrop = document.querySelector('.esn-backdrop');
    var footer = document.querySelector('footer');
    var under = document.getElementById('es-under');
    if (header) header.inert = true;
    if (drawer) drawer.inert = true;
    if (backdrop) backdrop.inert = true;
    if (footer) footer.inert = true;
    if (under) under.inert = true;
  }

  function finish() {
    if (finished) return;
    finished = true;
    root.classList.add('is-gone');
    root.inert = true;
    document.documentElement.classList.remove('es-curtain-lock');
    unlock();
  }

  function leave() {
    if (finished || root.classList.contains('is-leaving')) return;
    root.classList.add('is-leaving');
    if (more) more.classList.add('is-leaving');
    if (reduce) finish();
    else window.setTimeout(finish, 2700);
  }

  root.addEventListener('transitionend', function (e) {
    if (e.target === root && e.propertyName === 'transform') finish();
  });

  var more = document.getElementById('es-curtain-more');
  if (more) more.addEventListener('click', leave);

  window.addEventListener('wheel', function (e) {
    if (finished) return;
    e.preventDefault();
    if (e.deltaY > 8) leave();
  }, { passive: false });

  var touchY = null;
  window.addEventListener('touchstart', function (e) {
    if (finished || !e.touches[0]) return;
    touchY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (finished || touchY === null || !e.touches[0]) return;
    if (touchY - e.touches[0].clientY > 28) {
      e.preventDefault();
      leave();
    }
  }, { passive: false });

  window.addEventListener('keydown', function (e) {
    if (finished) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
      e.preventDefault();
      leave();
    }
  });

  cover();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cover);
  window.esCurtainPlace = function () { };
})();



/* ========================================================
   GLOBAL SCROLL REVEAL OBSERVER FOR .reveal-up ELEMENTS
   ======================================================== */
(function () {
  'use strict';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal-up');

  if ('IntersectionObserver' in window && !reducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
          setTimeout(function () {
            entry.target.style.transitionDelay = '0s';
          }, 800);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();

/* ========================================================
   ANIMATED STAT COUNTERS (.rv-counter)
   ======================================================== */
(function () {
  'use strict';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var counters = document.querySelectorAll('.rv-counter');
  if (!counters.length) return;

  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    if (reducedMotion) { el.textContent = target; return; }

    var duration = 1400;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(function (el) { el.textContent = el.getAttribute('data-target'); });
  }
})();

/* ========================================================
   OUR WORK CAROUSEL (#rv-work-slider)
   ======================================================== */
document.addEventListener('DOMContentLoaded', function () {
  if (!window.jQuery || !jQuery.fn.owlCarousel) return;
  var $slider = jQuery('#rv-work-slider');
  if (!$slider.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function labelSliderControls() {
    $slider.find('.owl-dot').each(function (i) {
      jQuery(this).attr('aria-label', 'Go to slide ' + (i + 1));
    });
    $slider.find('.owl-prev').attr('aria-label', 'Previous slide');
    $slider.find('.owl-next').attr('aria-label', 'Next slide');
  }

  $slider.on('initialized.owl.carousel refreshed.owl.carousel changed.owl.carousel', function () {
    setTimeout(labelSliderControls, 0);
  });

  $slider.owlCarousel({
    loop: $slider.children().length > 2,
    margin: 24,
    nav: true,
    dots: false,
    autoplay: !reducedMotion,
    autoplayTimeout: 5500,
    autoplayHoverPause: true,
    navText: [
      '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.29963 10.0001C4.29963 10.3585 4.43649 10.7169 4.70964 10.9902L13.3093 19.5897C13.8563 20.1368 14.7433 20.1368 15.2901 19.5897C15.8369 19.0429 15.8369 18.1561 15.2901 17.609L7.68064 10.0001L15.2898 2.39102C15.8366 1.84398 15.8366 0.957304 15.2898 0.410524C14.743 -0.136784 13.8561 -0.136784 13.309 0.410524L4.70937 9.00994C4.43618 9.28335 4.29963 9.64175 4.29963 10.0001Z"/></svg>',
      '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.7004 10.0001C15.7004 10.3585 15.5635 10.7169 15.2904 10.9902L6.69072 19.5897C6.14368 20.1368 5.25674 20.1368 4.70992 19.5897C4.1631 19.0429 4.1631 18.1561 4.70992 17.609L12.3194 10.0001L4.71019 2.39102C4.16336 1.84397 4.16336 0.957303 4.71019 0.410525C5.25701 -0.136784 6.14395 -0.136784 6.69099 0.410525L15.2906 9.00994C15.5638 9.28335 15.7004 9.64175 15.7004 10.0001Z"/></svg>'
    ],
    responsive: {
      0: { items: 1 },
      992: { items: 2 }
    }
  });
});

/* ========================================================
   LAZY CALENDLY WIDGET LOADER FOR SCHEDULER SECTION
   ======================================================== */
(function () {
  function initCalendly() {
    var widgets = document.querySelectorAll('.es-sched .calendly-inline-widget');
    if (!widgets.length) return;

    var loaded = false;
    function loadScript() {
      if (loaded) return;
      loaded = true;
      window.removeEventListener('scroll', checkNear);
      window.removeEventListener('resize', checkNear);

      var script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onerror = function () {
        Array.prototype.forEach.call(widgets, function (w) {
          var fallback = w.parentNode.querySelector('.es-sched__fallback[hidden]');
          if (!fallback) return;
          w.hidden = true;
          fallback.hidden = false;
        });
      };
      document.body.appendChild(script);
    }

    function checkNear() {
      for (var i = 0; i < widgets.length; i++) {
        var r = widgets[i].getBoundingClientRect();
        if (r.top - window.innerHeight < 600 && r.bottom > -600) {
          loadScript();
          break;
        }
      }
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        if (entries.some(function (e) { return e.isIntersecting; })) {
          io.disconnect();
          loadScript();
        }
      }, { rootMargin: '600px 0px' });
      Array.prototype.forEach.call(widgets, function (w) { io.observe(w); });
    } else {
      window.addEventListener('scroll', checkNear, { passive: true });
      window.addEventListener('resize', checkNear, { passive: true });
      checkNear();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCalendly);
  } else {
    initCalendly();
  }
})();

/* ========================================================
   CONSULTATION FORM SUBMISSION FEEDBACK (#hiring-model-form)
   ======================================================== */
document.addEventListener('DOMContentLoaded', function () {
  const hireForm = document.getElementById('hiring-model-form');
  if (hireForm) {
    hireForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = hireForm.querySelector('.es-form__submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting...';
      }

      setTimeout(() => {
        hireForm.innerHTML = `
          <div style="padding: 32px 16px; text-align: center;">
            <div style="width: 56px; height: 56px; margin: 0 auto 16px; border-radius: 50%; background: rgba(242, 110, 101, 0.12); display: flex; align-items: center; justify-content: center; color: #f26e65;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px; color: #1a1a1a;">Consultation Request Received!</h3>
            <p style="font-size: 14px; color: #666666; line-height: 1.5;">Thank you! Our engineering director will review your requirements and reach out within 24 hours.</p>
          </div>
        `;
      }, 800);
    });
  }
});


/* ==========================================
   MODULE: js/curtain.js
   ========================================== */
/* Homepage curtain. Scoped to #es-curtain.
   The lamp is baked off the main thread in short slices so the first
   screen stays responsive, and the loop stops once the band has scrolled
   away. Only the visible logo is baked up front; the other two wait until
   they are opened, which keeps the Caffenza typeface off the first load. */
(function () {
  var root = document.getElementById('es-curtain');
  if (!root) return;

  var CFG = {
    orbitMs: 9000,
    fadeMs: 1100,
    ambient: 0.14,
    gain: 0.78,
    grain: 0.42,
    halo: 0.27
  };

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var small = window.matchMedia('(max-width: 768px)').matches;
  var hero = root;
  var band = root.querySelector('.band');
  var cv = document.getElementById('es-curtain-burn');
  var slotEl = document.getElementById('es-curtain-slot');
  if (!band || !cv || !slotEl) return;
  var ctx = cv.getContext('2d', { alpha: false });

  var CX_PATH = new Path2D(
    'M106.007 55.4254C105.58 65.0677 103.96 71.4526 97.988 75.6095L97.977 75.6172L97.9664 75.6254C95.5239 77.5278 92.1012 78.5105 87.2653 79.0051C82.432 79.4994 76.2705 79.5 68.3984 79.5H38.1302C30.0611 79.5 23.9002 79.4994 19.1165 79.0051C14.3333 78.511 11.0066 77.5292 8.56219 75.6254L8.55517 75.62L8.54796 75.6147C4.55338 72.7258 2.53868 68.7773 1.52288 63.4878C0.502 58.1718 0.5 51.5597 0.5 43.3831V36.6169C0.5 28.4471 0.600034 21.832 1.66944 16.5165C2.73464 11.222 4.75209 7.26792 8.55734 4.3783L8.55736 4.37833L8.56219 4.37457C11.0047 2.47222 14.4274 1.4895 19.2633 0.994918C24.0966 0.500603 30.2581 0.5 38.1302 0.5H68.3984C76.4675 0.5 82.6284 0.500624 87.4122 0.994865C92.1953 1.48904 95.522 2.47077 97.9664 4.37457L97.9663 4.37467L97.9756 4.38154C103.573 8.53775 105.184 14.5459 105.985 23.7786H83.019C82.8593 22.5095 82.0909 21.4904 80.9441 20.6906C79.6635 19.7975 77.8715 19.1453 75.7823 18.6668C71.5975 17.7085 66.0477 17.4104 60.5365 17.4104H46.3851C40.8838 17.4104 36.5286 17.5094 33.15 17.9621C29.7786 18.4139 27.2981 19.227 25.6126 20.7203C23.9294 22.2115 23.0096 24.219 22.457 26.9145C21.9072 29.5971 21.7099 33.0214 21.5138 37.3905L21.5133 37.4017V37.4129V42.9851C21.5133 47.3693 21.7092 50.7986 22.3115 53.4922C22.9164 56.1973 23.9388 58.1948 25.6126 59.6777C27.2981 61.1709 29.7786 61.984 33.15 62.4358C36.5286 62.8886 40.8838 62.9875 46.3851 62.9875H60.5365C66.0456 62.9875 71.7013 62.69 75.9926 61.5785C78.137 61.0231 79.9846 60.2538 81.3049 59.1817C82.5135 58.2003 83.2839 56.9595 83.4209 55.4254H106.007ZM165.139 59.9954L165.104 59.96L165.063 59.9322L165.049 59.9227C164.473 59.5324 163.865 59.1207 163.25 58.8086C162.629 58.4936 161.962 58.2582 161.264 58.2582C160.039 58.2582 158.283 58.663 157.356 60.0291L142.142 75.479C141.226 76.409 139.824 77.2698 138.3 77.8986C136.776 78.5273 133.896 78.903 133.896 78.903H109.265C108.51 78.903 107.92 78.8044 107.537 78.6098C107.352 78.5161 107.231 78.4079 107.154 78.2911C107.079 78.1771 107.029 78.0268 107.029 77.8149C107.029 77.746 107.076 77.5395 107.258 77.2165C107.429 76.9118 107.694 76.5507 108.056 76.1829C108.056 76.1821 108.057 76.1814 108.058 76.1807L140.863 43.6612C142.21 42.7199 142.607 40.9404 142.607 39.7015C142.607 38.4626 142.21 36.6832 140.863 35.7418L108.058 3.22231C108.057 3.22156 108.056 3.22082 108.056 3.22007C107.694 2.8523 107.429 2.49114 107.258 2.18651C107.076 1.86352 107.029 1.65705 107.029 1.58807C107.029 1.37261 107.128 1.12419 107.444 0.910315C107.773 0.687529 108.348 0.5 109.265 0.5H133.896C135.18 0.5 136.776 0.875666 138.3 1.50438C139.824 2.1332 141.226 2.99406 142.142 3.92397L157.389 19.4076C158.654 20.6921 159.955 21.1448 161.264 21.1448C162.49 21.1448 164.245 20.74 165.173 19.3739L180.387 3.92397C181.303 2.99406 182.705 2.1332 184.229 1.50438C185.753 0.875666 187.348 0.5 188.632 0.5H213.263C214.019 0.5 214.608 0.598618 214.992 0.793216C215.176 0.886867 215.298 0.995073 215.374 1.11186C215.449 1.22589 215.5 1.37624 215.5 1.58807C215.5 1.65706 215.453 1.86352 215.271 2.18651C215.1 2.49109 214.835 2.85219 214.473 3.21991C214.472 3.22071 214.472 3.22151 214.471 3.22231L181.634 35.7733L181.629 35.7775C180.365 37.0619 179.922 38.3788 179.922 39.7015C179.922 40.9404 180.318 42.7199 181.665 43.6612L214.471 76.1807C214.472 76.1815 214.472 76.1823 214.473 76.1832C214.835 76.5509 215.1 76.9119 215.271 77.2165C215.453 77.5395 215.5 77.746 215.5 77.8149C215.5 78.0304 215.4 78.2788 215.084 78.4927C214.755 78.7155 214.181 78.903 213.263 78.903H188.632C187.348 78.903 185.753 78.5273 184.229 77.8986C182.705 77.2698 181.303 76.409 180.387 75.479L165.139 59.9954Z'
  );

  var VARN_LIGHT = [
    [278, 263, 355, 432, [0.50, 0.47, 0.87]],
    [355, 432, 432, 600, [0.93, 0.58, 0.69]],
    [432, 600, 512, 775, [0.85, 0.35, 0.19]],
    [747, 263, 512, 775, [1.0, 0.93, 0.82]]
  ];

  function segD(px, py, ax, ay, bx, by) {
    var vx = bx - ax, vy = by - ay, wx = px - ax, wy = py - ay;
    var h = (wx * vx + wy * vy) / (vx * vx + vy * vy);
    h = h < 0 ? 0 : h > 1 ? 1 : h;
    var dx = wx - vx * h, dy = wy - vy * h;
    return Math.sqrt(dx * dx + dy * dy);
  }

  var SLIDES = [
    {
      label: 'Cypherox logo',
      box: [0.5, 0.5, 215, 79],
      fitW: 1.15,
      fitH: 0.65,
      draw: function (c) {
        c.fillStyle = '#fff';
        c.fill(CX_PATH);
      },
      track: [
        [-20, -20],
        [108, -30],
        [236, -20],
        [246, 40],
        [236, 100],
        [108, 110],
        [-20, 100],
        [-30, 40]
      ],
      ramp: { e: [0.95, 0.43, 0.40], m: [1.0, 0.58, 0.52], c: [1.0, 0.88, 0.86] }
    },
    {
      label: 'Cypherox logo',
      box: [0.5, 0.5, 215, 79],
      fitW: 1.15,
      fitH: 0.65,
      draw: function (c) {
        c.fillStyle = '#fff';
        c.fill(CX_PATH);
      },
      track: [
        [-20, -20],
        [108, -30],
        [236, -20],
        [246, 40],
        [236, 100],
        [108, 110],
        [-20, 100],
        [-30, 40]
      ],
      ramp: { e: [0.95, 0.43, 0.40], m: [1.0, 0.58, 0.52], c: [1.0, 0.88, 0.86] }
    },
    {
      label: 'Caffenza logo',
      box: null,
      fitW: 1.3,
      fitH: 0.42,
      gain: 1,
      font: '800 200px Fraunces, Georgia, serif',
      draw: function (c) {
        c.font = this.font;
        c.fillStyle = '#fff';
        c.textBaseline = 'alphabetic';
        c.fillText('CYPHEROX', 0, 0);
      },
      track: null,
      ramp: { e: [0.55, 0.26, 0.10], m: [0.88, 0.56, 0.28], c: [1, 0.9, 0.74] }
    }
  ];

  var fontsReady = false;
  var frauncesPromise = null;

  function measureCaffenza() {
    var s = SLIDES[2];
    var m = document.createElement('canvas').getContext('2d');
    m.font = s.font;
    var t = m.measureText('CYPHEROX');
    var asc = t.actualBoundingBoxAscent || 150;
    var desc = t.actualBoundingBoxDescent || 10;
    var x0 = -(t.actualBoundingBoxLeft || 0);
    var x1 = t.actualBoundingBoxRight || t.width;
    s.box = [x0, -asc, x1 - x0, asc + desc];
    var p = 70;
    s.track = [[x0 - p, -asc - p], [x1 + p, -asc - p], [x1 + p, desc + p], [x0 - p, desc + p]];
  }

  function ensureFraunces() {
    if (frauncesPromise) return frauncesPromise;
    frauncesPromise = new Promise(function (resolve) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,800&display=swap';
      link.media = 'print';
      link.onload = function () { link.media = 'all'; };
      document.head.appendChild(link);
      var fonts = (document.fonts && document.fonts.load) ? document.fonts.load('800 200px Fraunces') : Promise.resolve();
      Promise.race([fonts, new Promise(function (r) { setTimeout(r, 2500); })]).then(function () {
        fontsReady = true;
        measureCaffenza();
        resolve();
      });
    });
    return frauncesPromise;
  }

  var R = 1, W = 0, H = 0, slot = { cx: 0, cy: 0, s: 1 };

  function fit(S) {
    var bx = S.box[0], by = S.box[1], bw = S.box[2], bh = S.box[3];
    var k = Math.min(slot.s * S.fitW / bw, slot.s * S.fitH / bh);
    return { k: k, ox: slot.cx - (bx + bw / 2) * k, oy: slot.cy - (by + bh / 2) * k };
  }

  function edt(g, w, h) {
    var n = Math.max(w, h);
    var f = new Float64Array(n);
    var d = new Float64Array(n);
    var v = new Int32Array(n);
    var z = new Float64Array(n + 1);
    var BIG = 1e20;
    function pass(len) {
      var k = 0, q, s, r;
      v[0] = 0;
      z[0] = -BIG;
      z[1] = BIG;
      for (q = 1; q < len; q++) {
        s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while (s <= z[k]) {
          k--;
          s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = BIG;
      }
      k = 0;
      for (q = 0; q < len; q++) {
        while (z[k + 1] < q) k++;
        r = q - v[k];
        d[q] = r * r + f[v[k]];
      }
    }
    var x, y;
    for (x = 0; x < w; x++) {
      for (y = 0; y < h; y++) f[y] = g[y * w + x];
      pass(h);
      for (y = 0; y < h; y++) g[y * w + x] = d[y];
    }
    for (y = 0; y < h; y++) {
      for (x = 0; x < w; x++) f[x] = g[y * w + x];
      pass(w);
      for (x = 0; x < w; x++) g[y * w + x] = Math.sqrt(d[x]);
    }
    return g;
  }

  function sm(a, b, x) {
    x = (x - a) / (b - a);
    x = x < 0 ? 0 : x > 1 ? 1 : x;
    return x * x * (3 - 2 * x);
  }

  function yieldThread() {
    return new Promise(function (resolve) {
      if (window.requestIdleCallback) requestIdleCallback(function () { resolve(); }, { timeout: 48 });
      else setTimeout(resolve, 0);
    });
  }

  var bakeGen = 0;

  function bake(S, gen) {
    var F = fit(S);
    var mc = document.createElement('canvas');
    mc.width = W;
    mc.height = H;
    var m = mc.getContext('2d', { willReadFrequently: true });
    m.setTransform(F.k, 0, 0, F.k, F.ox, F.oy);
    S.draw(m);
    var mask = m.getImageData(0, 0, W, H).data;

    var q = 0.25;
    var w2 = Math.ceil(W * q);
    var h2 = Math.ceil(H * q);
    var sc = document.createElement('canvas');
    sc.width = w2;
    sc.height = h2;
    var s2 = sc.getContext('2d', { willReadFrequently: true });
    s2.drawImage(mc, 0, 0, w2, h2);
    var sd = s2.getImageData(0, 0, w2, h2).data;
    var g = new Float64Array(w2 * h2);
    var i;
    for (i = 0; i < w2 * h2; i++) g[i] = sd[i * 4 + 3] > 110 ? 0 : 1e20;
    edt(g, w2, h2);

    var sigma = CFG.halo * slot.s;
    var gain = S.gain || CFG.gain;
    var amb = CFG.ambient;
    var noise = CFG.grain;
    var full = new ImageData(W, H);
    var dim = new ImageData(W, H);
    var fd = full.data;
    var dd = dim.data;
    var rp = S.ramp;
    var T = new Float64Array(3);
    var seed = 1234567;
    var er = 0, eg = 0, eb = 0, mr = 0, mg = 0, mb = 0, cr = 0, cg = 0, cb = 0;
    if (!S.tint) {
      er = rp.e[0]; eg = rp.e[1]; eb = rp.e[2];
      mr = rp.m[0]; mg = rp.m[1]; mb = rp.m[2];
      cr = rp.c[0]; cg = rp.c[1]; cb = rp.c[2];
    }

    var y = 0;
    var rows = small ? 10 : 6;

    function rowsNow() {
      var yEnd = Math.min(H, y + rows);
      var x, o, gx, gy, x0, y0, fx, fy, j, dist, inside, halo, n, v, pass, t, a, b, out;
      for (; y < yEnd; y++) {
        gy = Math.min(h2 - 1.001, y * q);
        y0 = gy | 0;
        fy = gy - y0;
        for (x = 0; x < W; x++) {
          i = y * W + x;
          o = i * 4;
          gx = Math.min(w2 - 1.001, x * q);
          x0 = gx | 0;
          fx = gx - x0;
          j = y0 * w2 + x0;
          dist = (g[j] * (1 - fx) + g[j + 1] * fx) * (1 - fy) + (g[j + w2] * (1 - fx) + g[j + w2 + 1] * fx) * fy;
          inside = mask[o + 3] / 255;
          halo = sigma / (sigma + Math.max(0, dist / q - 1.5));
          seed ^= seed << 13;
          seed ^= seed >>> 17;
          seed ^= seed << 5;
          n = 1 - noise + noise * (0.45 + 0.55 * ((seed >>> 0) / 4294967296));
          v = gain * halo * (1 - inside) * n;
          if (S.tint) {
            S.tint((x - F.ox) / F.k, (y - F.oy) / F.k, T);
            mr = T[0]; mg = T[1]; mb = T[2];
            er = mr * 0.82; eg = mg * 0.7; eb = mb * 0.7;
            cr = mr + (1 - mr) * 0.62;
            cg = mg + (0.97 - mg) * 0.62;
            cb = mb + (0.92 - mb) * 0.62;
          }
          for (pass = 0; pass < 2; pass++) {
            t = Math.min(1, pass ? v * amb : v);
            a = sm(0, 0.45, t);
            b = sm(0.55, 1, t);
            out = pass ? dd : fd;
            out[o] = ((er + (mr - er) * a) * (1 - b) + cr * b) * t * 255;
            out[o + 1] = ((eg + (mg - eg) * a) * (1 - b) + cg * b) * t * 255;
            out[o + 2] = ((eb + (mb - eb) * a) * (1 - b) + cb * b) * t * 255;
            out[o + 3] = 255;
          }
        }
      }
    }

    return new Promise(function (resolve) {
      function step() {
        if (gen !== bakeGen) { resolve(false); return; }
        rowsNow();
        if (y < H) {
          yieldThread().then(step);
          return;
        }
        function put(img) {
          var c = document.createElement('canvas');
          c.width = W;
          c.height = H;
          c.getContext('2d').putImageData(img, 0, 0);
          return c;
        }
        S.full = put(full);
        S.dim = put(dim);
        S.fit = F;
        var pts = S.track.map(function (pt) { return [F.ox + pt[0] * F.k, F.oy + pt[1] * F.k]; });
        var cum = [0];
        var pi;
        for (pi = 0; pi < pts.length; pi++) {
          var aa = pts[pi];
          var bb = pts[(pi + 1) % pts.length];
          cum.push(cum[pi] + Math.hypot(bb[0] - aa[0], bb[1] - aa[1]));
        }
        S.pts = pts;
        S.cum = cum;
        var bx = S.box[0], by = S.box[1], bw = S.box[2], bh = S.box[3];
        S.hit = [F.ox + bx * F.k, F.oy + by * F.k, bw * F.k, bh * F.k];
        S.ready = true;
        resolve(true);
      }
      step();
    });
  }

  function onTrack(S, u) {
    var L = S.cum[S.cum.length - 1];
    var t = (u % 1) * L;
    var i = 0;
    while (i < S.pts.length - 1 && S.cum[i + 1] < t) i++;
    var a = S.pts[i];
    var b = S.pts[(i + 1) % S.pts.length];
    var f = (t - S.cum[i]) / Math.max(1e-6, S.cum[i + 1] - S.cum[i]);
    return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
  }

  var lc = document.createElement('canvas');
  var lctx = lc.getContext('2d');
  var bc = document.createElement('canvas');
  var bctx = bc.getContext('2d');
  var Q_END = Math.sqrt(Math.pow(CFG.ambient, -1 / 1.3) - 1);
  var STOPS = [];
  var sj;
  for (sj = 0; sj < 10; sj++) {
    var rr = sj / 9;
    var qq = rr * Q_END;
    var lamp = Math.pow(1 / (1 + qq * qq), 1.3);
    STOPS.push([rr, Math.max(0, (Math.max(lamp, CFG.ambient) - CFG.ambient) / (1 - CFG.ambient))]);
  }

  var pointer = { x: 0, y: 0, over: false };

  function paint(target, S, lampX, lampY, reach) {
    target.globalAlpha = 1;
    target.drawImage(S.dim, 0, 0);
    var Rr = reach * Q_END;
    var gr = lctx.createRadialGradient(lampX, lampY, 0, lampX, lampY, Rr);
    var si;
    for (si = 0; si < STOPS.length; si++) gr.addColorStop(STOPS[si][0], 'rgba(0,0,0,' + STOPS[si][1].toFixed(3) + ')');
    lctx.globalCompositeOperation = 'copy';
    lctx.fillStyle = gr;
    lctx.fillRect(0, 0, W, H);
    lctx.globalCompositeOperation = 'source-in';
    lctx.drawImage(S.full, 0, 0);
    lctx.globalCompositeOperation = 'source-over';
    target.drawImage(lc, 0, 0);
  }

  var lamps = SLIDES.map(function () { return { x: 0, y: 0, follow: 0, set: false }; });
  var t0 = performance.now();

  function lampFor(i, now) {
    var S = SLIDES[i];
    var L = lamps[i];
    var u = reduce ? 0.78 : ((now - t0) % CFG.orbitMs) / CFG.orbitMs;
    var track = onTrack(S, u);
    var hx = S.hit[0], hy = S.hit[1], hw = S.hit[2], hh = S.hit[3];
    var pad = slot.s * 0.12;
    var over = pointer.over && i === cur && pointer.x > hx - pad && pointer.x < hx + hw + pad && pointer.y > hy - pad && pointer.y < hy + hh + pad;
    L.follow += ((over ? 1 : 0) - L.follow) * 0.09;
    var gx = track[0] + (pointer.x - track[0]) * L.follow;
    var gy = track[1] + (pointer.y - track[1]) * L.follow;
    if (!L.set) { L.x = gx; L.y = gy; L.set = true; }
    L.x += (gx - L.x) * 0.14;
    L.y += (gy - L.y) * 0.14;
    return [L.x, L.y, slot.s * 0.97 * (0.5 + 0.14 * L.follow)];
  }

  var cur = 0, prev = -1, fadeStart = 0;
  var visible = true;
  var raf = 0;

  function frame(now) {
    raf = 0;
    if (!visible) return;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, W, H);
    if (!SLIDES[cur].ready) {
      if (prev >= 0 && SLIDES[prev].ready) {
        var prevLamp = lampFor(prev, now);
        paint(ctx, SLIDES[prev], prevLamp[0], prevLamp[1], prevLamp[2]);
      }
    } else {
      var p = prev < 0 ? 1 : Math.min(1, (now - fadeStart) / (reduce ? 1 : CFG.fadeMs));
      if (p < 1 && prev >= 0 && SLIDES[prev].ready) {
        var pl = lampFor(prev, now);
        paint(ctx, SLIDES[prev], pl[0], pl[1], pl[2]);
        var cl = lampFor(cur, now);
        bctx.fillStyle = '#000';
        bctx.fillRect(0, 0, W, H);
        paint(bctx, SLIDES[cur], cl[0], cl[1], cl[2]);
        ctx.globalAlpha = p * p * (3 - 2 * p);
        ctx.drawImage(bc, 0, 0);
        ctx.globalAlpha = 1;
      } else {
        prev = -1;
        var ll = lampFor(cur, now);
        paint(ctx, SLIDES[cur], ll[0], ll[1], ll[2]);
      }
      hero.classList.add('is-lit');
    }
    if (!reduce || (prev >= 0 && (now - fadeStart) < CFG.fadeMs)) raf = requestAnimationFrame(frame);
  }

  function kick() {
    if (visible && !raf) raf = requestAnimationFrame(frame);
  }

  function layout() {
    var gen = ++bakeGen;
    R = Math.min(window.devicePixelRatio || 1, small ? 1 : 1.25);
    var cr = cv.getBoundingClientRect();
    var sr = slotEl.getBoundingClientRect();
    W = cv.width = lc.width = bc.width = Math.max(2, Math.round(cr.width * R));
    H = cv.height = lc.height = bc.height = Math.max(2, Math.round(cr.height * R));
    slot = {
      cx: (sr.left - cr.left + sr.width / 2) * R,
      cy: (sr.top - cr.top + sr.height / 2) * R,
      s: sr.width * R
    };
    SLIDES.forEach(function (S, i) {
      S.ready = false;
      lamps[i].set = false;
    });
    hero.classList.remove('is-lit');
    if (saveData || !W || !H) return;
    function bakeVisible() {
      if (!SLIDES[cur].box) return;
      bake(SLIDES[cur], gen).then(function (ok) {
        if (ok && gen === bakeGen) kick();
      });
    }
    if (cur === 2 && !fontsReady) ensureFraunces().then(function () {
      if (gen === bakeGen) bakeVisible();
    });
    else bakeVisible();
    if (window.esCurtainPlace) window.esCurtainPlace();
  }

  var rt = 0;
  var started = false;
  if (window.ResizeObserver) {
    new ResizeObserver(function () {
      if (!started) return;
      clearTimeout(rt);
      rt = setTimeout(layout, 180);
    }).observe(band);
  }

  var tabs = Array.prototype.slice.call(root.querySelectorAll('.tab'));
  var panes = [0, 1, 2].map(function (i) { return document.getElementById('es-curtain-p' + i); });
  var points = Array.prototype.slice.call(root.querySelectorAll('.points'));
  var ink = document.getElementById('es-curtain-ink');

  function moveInk(from, to) {
    var right = to > from;
    var far = Math.abs(to - from);
    var fast = 0.38 + 0.08 * far;
    var slow = 0.62 + 0.1 * far;
    ink.style.setProperty('--tl', (right ? slow : fast) + 's');
    ink.style.setProperty('--tr', (right ? fast : slow) + 's');
    ink.style.setProperty('--dl', right ? '.06s' : '0s');
    ink.style.setProperty('--dr', right ? '0s' : '.06s');
    ink.style.setProperty('--from', to);
    ink.style.setProperty('--to', to);
  }

  function go(i, focus) {
    i = (i + 3) % 3;
    if (i === cur) return;
    prev = cur;
    cur = i;
    fadeStart = performance.now();
    hero.dataset.active = String(i);
    slotEl.setAttribute('aria-label', SLIDES[i].label);
    tabs.forEach(function (t, k) {
      t.setAttribute('aria-selected', k === i ? 'true' : 'false');
      t.tabIndex = k === i ? 0 : -1;
    });
    moveInk(prev, i);
    [panes, points].forEach(function (list) {
      list.forEach(function (el, k) {
        if (!el) return;
        el.classList.toggle('on', k === i);
        if (k === i) {
          el.removeAttribute('aria-hidden');
          el.inert = false;
        } else {
          el.setAttribute('aria-hidden', 'true');
          el.inert = true;
        }
      });
    });
    if (focus) tabs[i].focus();
    function bakeCurrent() {
      if (!SLIDES[i].ready && W && (i !== 2 || fontsReady)) {
        bake(SLIDES[i], bakeGen).then(function () { kick(); });
      } else {
        kick();
      }
    }
    if (i === 2 && !fontsReady) ensureFraunces().then(bakeCurrent);
    else bakeCurrent();
  }

  tabs.forEach(function (t, i) { t.addEventListener('click', function () { go(i); }); });
  root.querySelector('.tabs').addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(cur + 1, true); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(cur - 1, true); }
  });

  band.addEventListener('pointermove', function (e) {
    var cr = cv.getBoundingClientRect();
    pointer.x = (e.clientX - cr.left) * R;
    pointer.y = (e.clientY - cr.top) * R;
    pointer.over = true;
  }, { passive: true });
  band.addEventListener('pointerleave', function () { pointer.over = false; }, { passive: true });

  var sx = null, sy = 0;
  band.addEventListener('pointerdown', function (e) {
    if (!e.target.closest('a,button')) { sx = e.clientX; sy = e.clientY; }
  });
  window.addEventListener('pointerup', function (e) {
    if (sx === null) return;
    var dx = e.clientX - sx;
    var dy = e.clientY - sy;
    sx = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) kick();
    }, { rootMargin: '80px' }).observe(hero);
  }

  function start() {
    if (started) return;
    started = true;
    layout();
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    start();
  } else {
    document.addEventListener('DOMContentLoaded', start);
  }
  window.addEventListener('load', start);
  if (window.requestIdleCallback) requestIdleCallback(start, { timeout: 600 });
})();


/* ==========================================
   MODULE: js/es-home-hero.js
   ========================================== */
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


/* ==========================================
   MODULE: js/varn-launch.js
   ========================================== */
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

