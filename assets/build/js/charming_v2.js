/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/charm-alert.js":
/*!******************************************!*\
  !*** ./src/js/components/charm-alert.js ***!
  \******************************************/
/***/ (function() {

class CharmAlert {
  constructor() {
    this.timeout = null;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new CharmAlert();
    }
    return this.instance;
  }
  showAlert(message, type = 'info') {
    const alertBox = document.createElement('div');
    alertBox.className = `charm-alert charm-alert-${type}`;
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50px';
    // zindex 
    alertBox.style.zIndex = '1111';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.padding = '10px 20px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.color = '#fff';
    alertBox.style.fontSize = '16px';
    alertBox.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    alertBox.style.backgroundColor = type === 'success' ? '#4CAF50' : type === 'error' ? '#F44336' : type === 'warning' ? '#FF9800' : '#2196F3';
    alertBox.style.transition = 'opacity 0.3s ease-in-out';
    alertBox.style.opacity = '0.9';
    alertBox.style.cursor = 'pointer';
    alertBox.innerText = message;
    // pause timeout on hover and resume on mouse leave
    alertBox.addEventListener('mouseenter', () => {
      if (typeof this.timeout !== 'undefined') {
        clearTimeout(this.timeout);
      }
    });
    alertBox.addEventListener('mouseleave', () => {
      this.timeout = setTimeout(() => {
        alertBox.remove();
      }, 3000);
    });

    // Append the alert box to the body
    document.body.appendChild(alertBox);

    // Automatically remove the alert after 3 seconds
    this.timeout = setTimeout(() => {
      alertBox.remove();
    }, 3000);
  }
}
window.CharmAlert = CharmAlert.getInstance();

/***/ }),

/***/ "./src/js/components/contact_form.js":
/*!*******************************************!*\
  !*** ./src/js/components/contact_form.js ***!
  \*******************************************/
/***/ (function() {

jQuery(document).ready(function ($) {
  // event deligation on .submit_charming_portfolio_enquiry
  $(document).on('click', '.submit_charming_portfolio_enquiry', async function (e) {
    e.preventDefault();
    const form = $(this).closest('.contact-form');
    const submitButton = $(this);
    var formData = new FormData();

    // Disable the submit button to prevent multiple submissions
    submitButton.prop('disabled', true).text('Sending...');
    const name = form.find("input[name='name']").val();
    const email = form.find("input[name='email']").val();
    const message = form.find("textarea[name='message']").val();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('action', 'charming_portfolio_add_enquiry');
    formData.append('nonce', charming_portfolio_v2.nonce);
    try {
      const response = await fetch(charming_portfolio_v2.ajax_url, {
        method: "POST",
        body: formData
      });
      if (!response.ok) {
        CharmAlert.showAlert("Error! Please try again later.", 'error');
      }
      const result = await response.json();
      if (!result.success) {
        CharmAlert.showAlert(result.message, 'error');
      } else {
        CharmAlert.showAlert("Enquiry Added! We'll get back to you as soon as possible.", 'success');
        form[0].reset();
      }
    } catch (e) {
      CharmAlert.showAlert("Error adding enquiry! Please try again", 'error');
    } finally {
      submitButton.prop('disabled', false).text('Submit');
    }
  });
});

/***/ }),

/***/ "./src/js/components/v2-nav.js":
/*!*************************************!*\
  !*** ./src/js/components/v2-nav.js ***!
  \*************************************/
/***/ (function() {

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector('.menu-toggle');
  menuIcon.addEventListener('click', function (e) {
    const header = document.querySelector('.charming-portfolio-header');
    if (header.classList.contains('mobile-menu-open')) {
      header.classList.remove('mobile-menu-open');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    } else {
      header.classList.add('mobile-menu-open');
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    }
  });
});

/***/ }),

/***/ "./src/sass/charming-v2.scss":
/*!***********************************!*\
  !*** ./src/sass/charming-v2.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!*******************************!*\
  !*** ./src/js/charming-v2.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_charming_v2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/charming-v2.scss */ "./src/sass/charming-v2.scss");
/* harmony import */ var _components_charm_alert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/charm-alert.js */ "./src/js/components/charm-alert.js");
/* harmony import */ var _components_charm_alert_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_charm_alert_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_contact_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/contact_form.js */ "./src/js/components/contact_form.js");
/* harmony import */ var _components_contact_form_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_contact_form_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_v2_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/v2-nav.js */ "./src/js/components/v2-nav.js");
/* harmony import */ var _components_v2_nav_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_v2_nav_js__WEBPACK_IMPORTED_MODULE_3__);




}();
/******/ })()
;
//# sourceMappingURL=charming_v2.js.map