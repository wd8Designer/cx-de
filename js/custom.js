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

