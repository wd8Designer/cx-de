/**
 * Shared international phone field for the website forms (contact form and hire-developers form).
 * Wraps intl-tel-input (js/vendor/intl-tel-input) with Germany as the default country and adds a
 * jQuery Validate method, "intlPhone", that checks the number against the selected country.
 *
 * Usage:
 *   var phone = CypheroxPhone.attach(inputElement, { placeholderNumberPolicy: 'AGGRESSIVE' });
 *   rules: { phone: { intlPhone: true } }
 *   payload: phone: phone.getNumber(), phone_country: phone.getCountry()
 */
(function ($, window, document) {
  'use strict';

  var DEFAULT_COUNTRY = 'de';
  var currentScript = document.currentScript;
  var scriptUrl = currentScript ? currentScript.src : window.location.href;
  var utilsUrl = new URL('vendor/intl-tel-input/js/utils.js', scriptUrl).toString();

  function digitsOf(value) {
    return String(value || '').replace(/\D/g, '');
  }

  // Used only until the libphonenumber metadata (utils.js) has loaded, or if it fails to load.
  function basicPhoneCheck(value) {
    var digits = digitsOf(value);
    return digits.length >= 7 && digits.length <= 15 && /^\+?[0-9().\s-]+$/.test(value);
  }

  function instanceFor(element) {
    return window.intlTelInput ? window.intlTelInput.getInstance(element) : null;
  }

  function countryName(iti) {
    var country = iti && iti.getSelectedCountry();
    return country && country.name ? country.name : 'the selected country';
  }

  function attach(input, options) {
    if (!input || typeof window.intlTelInput !== 'function') {
      return null;
    }

    var iti = instanceFor(input) || window.intlTelInput(input, $.extend({
      initialCountry: DEFAULT_COUNTRY,
      countryOrder: ['de', 'at', 'ch'],
      separateDialCode: true,
      strictMode: true,
      formatAsYouType: true,
      allowedNumberTypes: null,
      countrySearch: true,
      containerClass: 'cx-phone',
      loadUtils: function () {
        return import(utilsUrl);
      }
    }, options || {}));

    return {
      iti: iti,
      ready: iti.promise,
      // E.164 (e.g. +4930123456) once the metadata is loaded; the raw text before that.
      getNumber: function () {
        var raw = String(input.value || '').trim();
        if (!raw) {
          return '';
        }
        var number = window.intlTelInput.utils ? iti.getNumber() : '';
        return number || raw;
      },
      getCountry: function () {
        var country = iti.getSelectedCountry();
        return country && country.iso2 ? country.iso2.toUpperCase() : DEFAULT_COUNTRY.toUpperCase();
      },
      reset: function () {
        iti.setNumber('');
        iti.setSelectedCountry(DEFAULT_COUNTRY);
      }
    };
  }

  function registerValidator() {
    if (!$.validator || $.validator.methods.intlPhone) {
      return;
    }

    $.validator.addMethod('intlPhone', function (value, element) {
      if (this.optional(element)) {
        return true;
      }
      var iti = instanceFor(element);
      if (!iti || !window.intlTelInput.utils) {
        return basicPhoneCheck(value);
      }
      // isValidNumber() only checks the length; the precise check matches libphonenumber on the server.
      return iti.isValidNumberPrecise() === true;
    }, function (params, element) {
      var iti = instanceFor(element);
      var country = countryName(iti);
      if (!iti || !window.intlTelInput.utils) {
        return 'Enter a valid phone number containing 7 to 15 digits.';
      }
      switch (iti.getValidationError()) {
        case 'TOO_SHORT':
          return 'This number is too short for ' + country + '.';
        case 'TOO_LONG':
          return 'This number is too long for ' + country + '.';
        case 'INVALID_COUNTRY_CODE':
          return 'Select a valid country for this number.';
        default:
          return 'Enter a valid phone number for ' + country + '.';
      }
    });
  }

  registerValidator();

  window.CypheroxPhone = {
    attach: attach,
    registerValidator: registerValidator
  };
})(jQuery, window, document);
