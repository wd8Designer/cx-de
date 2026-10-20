(function ($, window, document) {
  'use strict';

  var $form = $('#contact-page-form');
  if (!$form.length) {
    return;
  }

  if (typeof $.fn.validate !== 'function') {
    $('#contact-form-status')
      .attr('class', 'contact-form-status is-visible is-error')
      .text('The form validator could not load. Refresh the page or email info@cypherox.de.');
    return;
  }

  var endpoint = $form.attr('action') || 'submit-inquiry.php';
  var $submitButton = $form.find('button[type="submit"]');
  var $submitLabel = $form.find('[data-submit-label]');
  var $statusBox = $('#contact-form-status');
  var $captchaImage = $('#contact-captcha-image');
  var $captchaInput = $('#contact-captcha');
  var $captchaRefresh = $('#contact-captcha-refresh');
  var $card = $form.closest('.contact-form-card');
  var $successBox = $('#contact-form-success');
  var serviceValues = [
    'ai-automation',
    'custom-software',
    'cloud-devops',
    'data-analytics',
    'dedicated-team',
    'modernization',
    'security-audit',
    'other'
  ];
  var budgetValues = ['10k-25k', '25k-50k', '50k-100k', '100k-plus', 'flexible'];

  function stringValue(value) {
    return typeof value === 'string' ? value : '';
  }

  function normalizeLine(value) {
    return stringValue(value).trim().replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ');
  }

  function normalizeMessage(value) {
    return stringValue(value).replace(/\r\n?/g, '\n').trim();
  }

  function unicodeLength(value) {
    return Array.from(value).length;
  }

  function hasUnsafeControls(value, allowLineBreaks) {
    var pattern = allowLineBreaks
      ? /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/
      : /[\u0000-\u001F\u007F]/;
    return pattern.test(value);
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

  function t(key, fallback) {
    if (window.i18n && typeof window.i18n.t === 'function') {
      return window.i18n.t('contact_form.' + key, fallback);
    }
    return fallback;
  }

  function setStatus(message, type) {
    $statusBox
      .text(message || '')
      .attr('class', 'contact-form-status');
    if (message) {
      $statusBox.addClass('is-visible ' + (type === 'success' ? 'is-success' : 'is-error'));
    }
  }

  function setSubmitting(isSubmitting) {
    $submitButton.prop('disabled', isSubmitting);
    $submitLabel.text(isSubmitting ? t('submitting_btn', 'Sending...') : t('submit_btn', 'Submit Your Project Brief'));
  }

  function scrollToCard() {
    var top = $card.offset().top - 120;
    if ($(window).scrollTop() > top) {
      $('html, body').animate({ scrollTop: Math.max(top, 0) }, 300);
    }
  }

  function showSuccess() {
    setStatus('', '');
    $card.addClass('is-submitted');
    $successBox.prop('hidden', false).removeClass('is-visible');
    // Force a reflow so the entrance animation replays on every submission.
    void $successBox[0].offsetWidth;
    $successBox.addClass('is-visible');
    $successBox.find('.contact-success__title').trigger('focus');
    scrollToCard();
  }

  function hideSuccess() {
    $successBox.prop('hidden', true).removeClass('is-visible');
    $card.removeClass('is-submitted');
    scrollToCard();
    $form.find('[name="name"]').trigger('focus');
  }

  function createCaptchaId() {
    var bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return 'captcha-' + Array.prototype.map.call(bytes, function (byte) {
      return byte.toString(16).padStart(2, '0');
    }).join('');
  }

  function clearCaptchaError() {
    $captchaInput.removeClass('is-invalid').attr('aria-invalid', 'false');
    $form.find('[data-error-for="captcha_answer"]').empty();
  }

  function refreshCaptcha() {
    var captchaId = createCaptchaId();
    $form.find('[name="captcha_id"]').val(captchaId);
    $captchaInput.val('');
    clearCaptchaError();
    $captchaImage.attr(
      'src',
      endpoint + '?action=captcha&id=' + encodeURIComponent(captchaId) + '&v=' + Date.now()
    );
  }

  function loadSecurity(clearStatus) {
    $submitButton.prop('disabled', true);
    return $.ajax({
      url: endpoint,
      method: 'GET',
      dataType: 'json',
      data: { action: 'csrf' },
      cache: false
    }).done(function (data) {
      if (!data || !data.csrfToken) {
        setStatus('The contact form could not initialize. Refresh the page or email info@cypherox.de.', 'error');
        return;
      }
      $form.find('[name="csrf_token"]').val(data.csrfToken);
      refreshCaptcha();
      if (clearStatus) {
        setStatus('', '');
      }
      $submitButton.prop('disabled', false);
    }).fail(function () {
      setStatus('The contact form could not initialize. Refresh the page or email info@cypherox.de.', 'error');
    });
  }

  $.validator.addMethod('contactName', function (value, element) {
    if (this.optional(element)) {
      return true;
    }
    return unicodeLength(value) >= 2
      && unicodeLength(value) <= 100
      && !hasUnsafeControls(value, false)
      && /\p{L}/u.test(value);
  });

  $.validator.addMethod('strictEmail', function (value, element) {
    if (this.optional(element)) {
      return true;
    }
    return unicodeLength(value) <= 254
      && !hasUnsafeControls(value, false)
      && value.indexOf('..') === -1
      && isStrictEmail(value);
  });

  // International phone field (Germany by default); validation comes from js/phone-input.js ("intlPhone").
  var phoneField = window.CypheroxPhone
    ? window.CypheroxPhone.attach($form.find('[name="phone"]')[0], { placeholderNumberPolicy: 'AGGRESSIVE' })
    : null;
  if (!$.validator.methods.intlPhone) {
    $.validator.addMethod('intlPhone', function (value, element) {
      if (this.optional(element)) {
        return true;
      }
      var digits = value.replace(/\D/g, '');
      return digits.length >= 7 && digits.length <= 15 && /^\+?[0-9().\s-]+$/.test(value);
    }, 'Enter a valid phone number containing 7 to 15 digits.');
  }

  $.validator.addMethod('companyName', function (value, element) {
    if (this.optional(element)) {
      return true;
    }
    return unicodeLength(value) >= 2
      && unicodeLength(value) <= 120
      && !hasUnsafeControls(value, false);
  });

  $.validator.addMethod('allowedService', function (value) {
    return serviceValues.indexOf(value) !== -1;
  });

  $.validator.addMethod('allowedBudget', function (value, element) {
    return this.optional(element) || budgetValues.indexOf(value) !== -1;
  });

  $.validator.addMethod('projectBrief', function (value, element) {
    if (this.optional(element)) {
      return true;
    }
    return unicodeLength(value) >= 10
      && unicodeLength(value) <= 5000
      && !hasUnsafeControls(value, true);
  });

  $.validator.addMethod('captchaCode', function (value) {
    return /^\d{5}$/.test(value);
  });

  var validator = $form.validate({
    errorElement: 'span',
    errorClass: 'contact-validation-error',
    validClass: '',
    focusInvalid: true,
    rules: {
      name: {
        required: true,
        contactName: true,
        normalizer: normalizeLine
      },
      email: {
        required: true,
        strictEmail: true,
        normalizer: function (value) { return stringValue(value).trim(); }
      },
      phone: {
        intlPhone: true,
        normalizer: normalizeLine
      },
      company: {
        companyName: true,
        normalizer: normalizeLine
      },
      service: {
        required: true,
        allowedService: true
      },
      budget: {
        allowedBudget: true
      },
      message: {
        required: true,
        projectBrief: true,
        normalizer: normalizeMessage
      },
      captcha_answer: {
        required: true,
        captchaCode: true,
        normalizer: function (value) { return stringValue(value).trim(); }
      }
    },
    messages: {
      name: {
        required: function () { return t('val_name_required', 'Enter your full name.'); },
        contactName: function () { return t('val_name_format', 'Use 2 to 100 characters and include at least one letter.'); }
      },
      email: {
        required: function () { return t('val_email_required', 'Enter your work email address.'); },
        strictEmail: function () { return t('val_email_format', 'Enter a valid email address, such as name@company.com.'); }
      },
      company: {
        companyName: function () { return t('val_company_format', 'Use 2 to 120 characters for the company name.'); }
      },
      service: {
        required: function () { return t('val_service_required', 'Select the core service you need.'); },
        allowedService: function () { return t('val_service_required', 'Select the core service you need.'); }
      },
      budget: {
        allowedBudget: function () { return t('val_budget_format', 'Select one of the listed budget ranges.'); }
      },
      message: {
        required: function () { return t('val_message_required', 'Enter your project brief.'); },
        projectBrief: function () { return t('val_message_format', 'Use 10 to 5,000 characters for the project brief.'); }
      },
      captcha_answer: {
        required: function () { return t('val_captcha_required', 'Enter the five digits shown in the security image.'); },
        captchaCode: function () { return t('val_captcha_required', 'Enter the five digits shown in the security image.'); }
      }
    },
    errorPlacement: function (error, element) {
      var $target = $form.find('[data-error-for="' + element.attr('name') + '"]');
      if ($target.length) {
        error.removeAttr('id');
        $target.empty().append(error);
      }
    },
    highlight: function (element) {
      $(element).addClass('is-invalid').attr('aria-invalid', 'true');
    },
    unhighlight: function (element) {
      var $element = $(element);
      $element.removeClass('is-invalid').attr('aria-invalid', 'false');
      $form.find('[data-error-for="' + $element.attr('name') + '"]').empty();
    },
    invalidHandler: function () {
      setStatus('', '');
    },
    submitHandler: function () {
      var submissionSucceeded = false;
      setStatus('', '');
      setSubmitting(true);

      var payload = {
        csrf_token: stringValue($form.find('[name="csrf_token"]').val()),
        captcha_id: stringValue($form.find('[name="captcha_id"]').val()),
        captcha_answer: stringValue($captchaInput.val()).trim(),
        website: stringValue($form.find('[name="website"]').val()),
        name: normalizeLine($form.find('[name="name"]').val()),
        email: stringValue($form.find('[name="email"]').val()).trim(),
        phone: phoneField ? phoneField.getNumber() : normalizeLine($form.find('[name="phone"]').val()),
        phone_country: phoneField ? phoneField.getCountry() : 'DE',
        company: normalizeLine($form.find('[name="company"]').val()),
        service: stringValue($form.find('[name="service"]').val()).trim(),
        budget: stringValue($form.find('[name="budget"]').val()).trim(),
        message: normalizeMessage($form.find('[name="message"]').val()),
        nda_requested: $form.find('[name="nda_requested"]').is(':checked') ? 'yes' : 'no',
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
          setStatus((data && data.message) || 'Your inquiry could not be sent. Please try again.', 'error');
          return;
        }

        validator.resetForm();
        submissionSucceeded = true;
        $form[0].reset();
        if (phoneField) {
          phoneField.reset();
        }
        $form.find('.is-invalid').removeClass('is-invalid').attr('aria-invalid', 'false');
        $form.find('[data-error-for]').empty();
        showSuccess();
        loadSecurity(false).always(function () {
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
          setStatus('', '');
          validator.showErrors(errors);
          validator.focusInvalid();
        } else {
          setStatus(data.message || 'Your inquiry could not be sent. Please try again.', 'error');
        }
        if (xhr.status === 403) {
          loadSecurity(false);
        }
      }).always(function () {
        if (!submissionSucceeded) {
          setSubmitting(false);
        }
      });
    }
  });

  // A different country changes which numbers are valid, so re-check an already-flagged phone field.
  $form.find('[name="phone"]').on('countrychange input', function () {
    if (validator.submitted.phone || validator.invalid.phone) {
      validator.element(this);
    }
  });

  $form.find('select').on('change', function () {
    validator.element(this);
  });

  $captchaInput.on('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 5);
  });

  $('#contact-form-reset').on('click', hideSuccess);

  $captchaRefresh.on('click', function () {
    refreshCaptcha();
    $captchaInput.trigger('focus');
  });

  $captchaImage.on('error', function () {
    if (!$captchaImage.attr('src')) {
      return;
    }
    setStatus('The security code could not load. Select "New code" to try again.', 'error');
  });

  $form.attr('data-validation-ready', 'true');
  loadSecurity(true);
})(jQuery, window, document);
