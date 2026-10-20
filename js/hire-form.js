/**
 * "Get a Free Consultation" form for the hire-developers pages.
 * Single source of truth: every page includes an empty
 *   <div class="es-hero__form es-hero__enter" data-hire-form></div>
 * and this script renders the form into it, validates it with jQuery Validate
 * and submits it to submit-hire-inquiry.php.
 */
(function ($, window, document) {
  'use strict';

  var currentScript = document.currentScript;
  var endpoint = new URL('../submit-hire-inquiry.php', currentScript ? currentScript.src : window.location.href).toString();
  var hiringModels = ['Full Time', 'Hourly', 'Fixed Cost'];

  var arrowIcon = '<svg class="arrow-icon" data-icon="arrow" width="25" height="24" viewBox="0 0 25 24" fill="none"'
    + ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'
    + '<path opacity="0.6" d="M4.53927 18.7534L9.22489 12L4.53927 5.24664H0.39563L5.08125 12L0.39563 18.7534H4.53927Z" fill="currentColor" />'
    + '<path opacity="0.8" d="M12.2289 18.7534L16.9148 12L12.2289 5.24664H8.08521L12.7711 12L8.08521 18.7534H12.2289Z" fill="currentColor" />'
    + '<path d="M19.9188 18.7534L24.6044 12L19.9188 5.24664H15.7751L20.4608 12L15.7751 18.7534H19.9188Z" fill="currentColor" />'
    + '</svg>';

  function formMarkup() {
    var modelKeys = {
      'Full Time': 'model_full_time',
      'Hourly': 'model_hourly',
      'Fixed Cost': 'model_fixed_cost'
    };
    var options = hiringModels.map(function (model, index) {
      var checkedRequired = index === 0 ? ' aria-required="true"' : '';
      var mKey = modelKeys[model] || 'model_full_time';
      return '<label class="es-hmf__option" for="hmf-1-' + index + '">'
        + '<input type="radio" name="hiring_model" id="hmf-1-' + index + '" value="' + model + '"' + checkedRequired + ' />'
        + '<span class="es-hmf__tile" data-i18n="hire_form.' + mKey + '">' + model + '</span>'
        + '</label>';
    }).join('');

    return ''
      + '<div class="es-hero__form-head">'
      + '<h2 class="es-hero__form-title" data-i18n="hire_form.title">Get a Free Consultation</h2>'
      + '<p class="es-hero__form-lede" data-i18n="hire_form.lede">Tell us what you need. We reply within one business day.</p>'
      + '</div>'
      + '<form id="hiring-model-form" class="es-form es-hmf" method="POST" action="' + endpoint + '" novalidate>'
      + '<input type="hidden" name="csrf_token" value="" />'
      + '<input type="hidden" name="captcha_id" value="" />'
      + '<div class="es-form__hp" aria-hidden="true">'
      + '<label>Leave this field empty<input type="text" name="website" tabindex="-1" autocomplete="off" /></label>'
      + '</div>'
      + '<div class="es-form__field">'
      + '<input type="text" name="first_name" placeholder="First Name*" maxlength="60" autocomplete="given-name" aria-label="First name" aria-required="true" data-i18n-placeholder="hire_form.first_name_placeholder" />'
      + '</div>'
      + '<div class="es-form__field">'
      + '<input type="email" name="email" placeholder="Email*" maxlength="254" autocomplete="email" aria-label="Email address" aria-required="true" data-i18n-placeholder="hire_form.email_placeholder" />'
      + '</div>'
      + '<div class="es-form__field">'
      + '<input type="tel" name="phone" placeholder="Phone Number*" maxlength="30" autocomplete="tel" aria-label="Phone number" aria-required="true" data-i18n-placeholder="hire_form.phone_placeholder" />'
      + '</div>'
      + '<fieldset class="es-hmf__group">'
      + '<legend class="es-hmf__legend" data-i18n="hire_form.model_legend">Choose Hiring Model*</legend>'
      + '<div class="es-hmf__options">' + options + '</div>'
      + '</fieldset>'
      + '<div class="contact-captcha-group es-hmf__captcha">'
      + '<label class="form-check-label es-hmf__legend es-hmf__captcha-label" for="hire-captcha" data-i18n="hire_form.captcha_label">'
      + 'Security check: enter the 5-digit number shown'
      + '</label>'
      + '<div class="contact-captcha-controls">'
      + '<div class="contact-captcha-visual">'
      + '<img id="hire-captcha-image" class="contact-captcha-image" width="180" height="56" alt="Five-digit security code" src="" aria-live="polite">'
      + '<button type="button" id="hire-captcha-refresh" class="contact-captcha-refresh" data-i18n="hire_form.captcha_refresh">Refresh security code</button>'
      + '</div>'
      + '<input type="text" id="hire-captcha" name="captcha_answer" class="contact-captcha-input" inputmode="numeric" pattern="[0-9]*"'
      + ' maxlength="5" autocomplete="off" placeholder="Enter 5-digit code" aria-required="true" data-i18n-placeholder="hire_form.captcha_placeholder" />'
      + '</div>'
      + '</div>'
      + '<button type="submit" class="es-btn es-btn--primary es-form__submit">'
      + '<span data-submit-label data-i18n="hire_form.submit">Send</span> ' + arrowIcon
      + '</button>'
      + '<div class="contact-form-status es-hmf__status" role="status" aria-live="polite"></div>'
      + '</form>'
      + '<div class="contact-success es-hmf__success" role="status" aria-live="polite" hidden>'
      + '<div class="contact-success__icon" aria-hidden="true">'
      + '<svg width="44" height="44" viewBox="0 0 52 52" fill="none">'
      + '<path class="contact-success__ring" pathLength="100" d="M46 26a20 20 0 1 1-8.5-16.4" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" />'
      + '<path class="contact-success__check" pathLength="100" d="M17 25l8 8L47 11" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />'
      + '</svg>'
      + '</div>'
      + '<h3 class="contact-success__title" tabindex="-1" data-i18n="hire_form.success_title">Thank you!</h3>'
      + '<p class="contact-success__text" data-i18n="hire_form.success_text">Your request has been received. Our team will be in touch within one business day.</p>'
      + '<button type="button" class="contact-success__btn" data-hire-reset data-i18n="hire_form.reset_btn">Send another request</button>'
      + '</div>'
      + '<p class="es-hero__form-badge">'
      + '<svg class="" data-icon="shield" width="16" height="16" viewBox="0 0 24 24" fill="none"'
      + ' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'
      + '<path d="M12 2.5 4.75 5.5V11c0 4.55 3.1 7.85 7.25 9.5 4.15-1.65 7.25-4.95 7.25-9.5V5.5L12 2.5Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" />'
      + '<path d="M8.9 11.7 11 13.8 15.3 9.4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />'
      + '</svg> <span data-i18n="hire_form.privacy_badge">Your details stay private. No obligation.</span>'
      + '</p>';
  }

  function stringValue(value) {
    return typeof value === 'string' ? value : '';
  }

  function normalizeLine(value) {
    return stringValue(value).trim().replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ');
  }

  function unicodeLength(value) {
    return Array.from(value).length;
  }

  function hasUnsafeControls(value) {
    return /[\u0000-\u001F\u007F]/.test(value);
  }

  function isStrictEmail(value) {
    var parts = value.split('@');
    if (parts.length !== 2 || parts[0].length > 64 || parts[1].length > 253) {
      return false;
    }
    var domainParts = parts[1].split('.');
    if (domainParts.length < 2 || domainParts[domainParts.length - 1].length < 2) {
      return false;
    }
    return /^[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(parts[0])
      && domainParts.every(function (label) {
        return /^[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?$/i.test(label);
      });
  }

  // The page's own H1 (e.g. "Hire PHP Developers in Germany") tells the sales team which page converted.
  function pageLabel() {
    var heading = document.querySelector('h1');
    var parts = [];
    if (heading) {
      // The highlighted part of the heading is a separate span without a space before it, so join text pieces with spaces.
      var walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        parts.push(walker.currentNode.nodeValue);
      }
    }
    var text = normalizeLine(parts.join(' '));
    return (text || document.title || 'Hire Developers').slice(0, 150);
  }

  function addValidationMethods() {
    if ($.validator.methods.hireFirstName) {
      return;
    }

    $.validator.addMethod('hireFirstName', function (value, element) {
      return this.optional(element) || (unicodeLength(value) >= 2
        && unicodeLength(value) <= 60
        && !hasUnsafeControls(value)
        && /\p{L}/u.test(value));
    });

    $.validator.addMethod('hireEmail', function (value, element) {
      return this.optional(element) || (unicodeLength(value) <= 254
        && !hasUnsafeControls(value)
        && value.indexOf('..') === -1
        && isStrictEmail(value));
    });

    $.validator.addMethod('hireCaptcha', function (value) {
      return /^\d{5}$/.test(value);
    });

    // Normally provided by js/phone-input.js; this basic fallback only applies if that script is missing.
    if (!$.validator.methods.intlPhone) {
      $.validator.addMethod('intlPhone', function (value, element) {
        if (this.optional(element)) {
          return true;
        }
        var digits = value.replace(/\D/g, '');
        return digits.length >= 7 && digits.length <= 15 && /^\+?[0-9().\s-]+$/.test(value);
      }, 'Enter a valid phone number containing 7 to 15 digits.');
    }
  }

  function initForm($container) {
    $container.html(formMarkup());

    var $form = $container.find('#hiring-model-form');
    var $head = $container.find('.es-hero__form-head');
    var $badge = $container.find('.es-hero__form-badge');
    var $submitButton = $form.find('button[type="submit"]');
    var $submitLabel = $form.find('[data-submit-label]');
    var $statusBox = $form.find('.es-hmf__status');
    var $successBox = $container.find('.es-hmf__success');
    var $captchaImage = $form.find('#hire-captcha-image');
    var $captchaInput = $form.find('#hire-captcha');
    // International phone field (Germany by default); "POLITE" keeps the "Phone Number*" placeholder.
    var phoneField = window.CypheroxPhone
      ? window.CypheroxPhone.attach($form.find('[name="phone"]')[0], { placeholderNumberPolicy: 'POLITE' })
      : null;

    function setStatus(message) {
      $statusBox.text(message || '').attr('class', 'contact-form-status es-hmf__status');
      if (message) {
        $statusBox.addClass('is-visible is-error');
      }
    }

    function setSubmitting(isSubmitting) {
      $submitButton.prop('disabled', isSubmitting);
      $submitLabel.text(isSubmitting ? 'Sending...' : 'Send');
    }

    function createCaptchaId() {
      var bytes = new Uint8Array(16);
      window.crypto.getRandomValues(bytes);
      return 'captcha-' + Array.prototype.map.call(bytes, function (byte) {
        return byte.toString(16).padStart(2, '0');
      }).join('');
    }

    function refreshCaptcha() {
      var captchaId = createCaptchaId();
      $form.find('[name="captcha_id"]').val(captchaId);
      $captchaInput.val('').removeClass('error').removeAttr('aria-invalid');
      $form.find('#hire-captcha-error').hide();
      $captchaImage.attr('src', endpoint + '?action=captcha&id=' + encodeURIComponent(captchaId) + '&v=' + Date.now());
    }

    // The token request starts the session, so the CAPTCHA image is requested only after it succeeds.
    function loadToken() {
      return $.ajax({
        url: endpoint,
        method: 'GET',
        dataType: 'json',
        data: { action: 'csrf' },
        cache: false
      }).done(function (data) {
        if (data && data.csrfToken) {
          $form.find('[name="csrf_token"]').val(data.csrfToken);
          refreshCaptcha();
        }
      });
    }

    function showSuccess() {
      setStatus('');
      $head.add($form).add($badge).prop('hidden', true);
      $successBox.prop('hidden', false).removeClass('is-visible');
      // Force a reflow so the entrance animation replays on every submission.
      void $successBox[0].offsetWidth;
      $successBox.addClass('is-visible');
      $successBox.find('.contact-success__title').trigger('focus');
    }

    function hideSuccess() {
      $successBox.prop('hidden', true).removeClass('is-visible');
      $head.add($form).add($badge).prop('hidden', false);
      $form.find('[name="first_name"]').trigger('focus');
    }

    var validator = $form.validate({
      ignore: '.es-form__hp input, [type="hidden"]',
      rules: {
        first_name: { required: true, hireFirstName: true, normalizer: normalizeLine },
        email: { required: true, hireEmail: true, normalizer: function (value) { return stringValue(value).trim(); } },
        phone: { required: true, intlPhone: true, normalizer: normalizeLine },
        hiring_model: { required: true },
        captcha_answer: { required: true, hireCaptcha: true, normalizer: function (value) { return stringValue(value).trim(); } }
      },
      messages: {
        first_name: {
          required: 'Enter your first name.',
          hireFirstName: 'Use 2 to 60 characters and include at least one letter.'
        },
        email: {
          required: 'Enter your email address.',
          hireEmail: 'Enter a valid email address, such as name@company.com.'
        },
        phone: {
          required: 'Enter your phone number.'
        },
        hiring_model: {
          required: 'Choose a hiring model.'
        },
        captcha_answer: {
          required: 'Enter the five digits shown in the security image.',
          hireCaptcha: 'Enter the five digits shown in the security image.'
        }
      },
      errorPlacement: function (error, element) {
        if (element.attr('name') === 'hiring_model') {
          error.insertAfter(element.closest('.es-hmf__options'));
        } else if (element.attr('name') === 'captcha_answer') {
          error.insertAfter(element.closest('.contact-captcha-controls'));
        } else if (element.closest('.iti').length) {
          // intl-tel-input wraps the phone field; keep the message below the whole control.
          error.insertAfter(element.closest('.iti'));
        } else {
          error.insertAfter(element);
        }
      },
      invalidHandler: function () {
        setStatus('');
      },
      submitHandler: function () {
        var succeeded = false;
        setStatus('');
        setSubmitting(true);

        var payload = {
          csrf_token: stringValue($form.find('[name="csrf_token"]').val()),
          captcha_id: stringValue($form.find('[name="captcha_id"]').val()),
          captcha_answer: stringValue($captchaInput.val()).trim(),
          website: stringValue($form.find('[name="website"]').val()),
          first_name: normalizeLine($form.find('[name="first_name"]').val()),
          email: stringValue($form.find('[name="email"]').val()).trim(),
          phone: phoneField ? phoneField.getNumber() : normalizeLine($form.find('[name="phone"]').val()),
          phone_country: phoneField ? phoneField.getCountry() : 'DE',
          hiring_model: stringValue($form.find('[name="hiring_model"]:checked').val()),
          page_label: pageLabel(),
          source_page: window.location.pathname
        };

        $.ajax({
          url: endpoint,
          method: 'POST',
          data: JSON.stringify(payload),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          processData: false
        }).done(function (data) {
          if (!data || data.success !== true) {
            setStatus((data && data.message) || 'Your request could not be sent. Please try again.');
            return;
          }

          succeeded = true;
          validator.resetForm();
          $form[0].reset();
          if (phoneField) {
            phoneField.reset();
          }
          showSuccess();
          loadToken().always(function () {
            setSubmitting(false);
          });
        }).fail(function (xhr) {
          var data = xhr.responseJSON || {};
          var errors = data.errors || {};

          if (data.refreshCaptcha) {
            refreshCaptcha();
          }
          if (Object.keys(errors).length) {
            // Field-level messages already explain the problem; no summary box needed.
            setStatus('');
            validator.showErrors(errors);
            validator.focusInvalid();
          } else {
            setStatus(data.message || 'Your request could not be sent. Please try again.');
          }
          if (xhr.status === 403) {
            loadToken();
          }
        }).always(function () {
          if (!succeeded) {
            setSubmitting(false);
          }
        });
      }
    });

    // Paste and autofill do not fire keyup, so re-check flagged fields on every input. Otherwise a stale
    // error can disappear on blur and shift the hiring-model tiles out from under the visitor's click.
    $form.on('input', 'input[name="first_name"], input[name="email"], input[name="phone"], input[name="captcha_answer"]', function () {
      if (validator.submitted[this.name] || validator.invalid[this.name]) {
        validator.element(this);
      }
    });

    // A different country changes which numbers are valid, so re-check an already-flagged phone field.
    $form.find('[name="phone"]').on('countrychange', function () {
      if (validator.submitted.phone || validator.invalid.phone) {
        validator.element(this);
      }
    });

    $form.find('[name="hiring_model"]').on('change', function () {
      if (validator.submitted.hiring_model || validator.invalid.hiring_model) {
        validator.element(this);
      }
    });

    $successBox.find('[data-hire-reset]').on('click', hideSuccess);

    $captchaInput.on('input', function () {
      var digits = this.value.replace(/\D/g, '').slice(0, 5);
      if (digits !== this.value) {
        this.value = digits;
      }
    });

    $form.find('#hire-captcha-refresh').on('click', function () {
      refreshCaptcha();
      $captchaInput.trigger('focus');
    });

    $captchaImage.on('error', function () {
      if ($captchaImage.attr('src')) {
        setStatus('The security code could not load. Select "Refresh security code" to try again.');
      }
    });

    loadToken().fail(function () {
      setStatus('The form could not initialize. Refresh the page or email info@cypherox.de.');
    });

    try {
      document.dispatchEvent(new CustomEvent('hireFormLoaded'));
      if (window.i18n && typeof window.i18n.applyTranslations === 'function') {
        window.i18n.applyTranslations($container[0]);
      }
    } catch (e) {}
  }

  function init() {
    var $containers = $('[data-hire-form]');
    if (!$containers.length) {
      return;
    }

    if (typeof $.fn.validate !== 'function') {
      $containers.html('<p class="es-hero__form-lede">The consultation form could not load. Please email '
        + '<a href="mailto:info@cypherox.de">info@cypherox.de</a>.</p>');
      return;
    }

    addValidationMethods();
    $containers.first().each(function () {
      initForm($(this));
    });
  }

  init();
})(jQuery, window, document);
