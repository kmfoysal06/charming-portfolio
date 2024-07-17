/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/admin-experience.js":
/*!***********************************************!*\
  !*** ./src/js/components/admin-experience.js ***!
  \***********************************************/
/***/ (function() {

(function ($) {
  class Experience_Section {
    constructor() {
      this.init();
    }
    init() {
      this.handleWorking();
    }
    handleWorking() {
      const experience_section = $(".simplecharm-portfolio-experience"),
        end_date = experience_section.find('.end_date'),
        still_working = experience_section.find('.working');
      still_working.each(function (index, element) {
        $(element).on("change", function (e) {
          $(this).parents("tr").find('.end_date').prop('disabled', e.target.checked);
        });
      });
    }
  }
  new Experience_Section();
})(jQuery);

/***/ }),

/***/ "./src/js/components/media.js":
/*!************************************!*\
  !*** ./src/js/components/media.js ***!
  \************************************/
/***/ (function() {

/**
 * Media Uploader
 */
(function ($) {
  class SimpleCharm_portfolio_Media {
    constructor() {
      this.init();
    }
    init() {
      this.mediaUploader('simplecharm-portfolio-user-image', "CHARMING_PORTFOLIO_user_image", "Upload Image");
      this.mediaUploader('simplecharm-portfolio-user-image2', "CHARMING_PORTFOLIO_user_image2", "Upload Another Image");
    }
    mediaUploader(picked_image, hidden_field, custom_text = 'Upload Image') {
      let image = null;
      $(`.${picked_image}`).on('keyup', function (e) {
        if ($(e.keyCode)[0] !== 13) return;
        e.target.click();
      });
      $(`.${picked_image}`).off('click').on('click', function (e) {
        e.preventDefault();
        if (wp.media) {
          wp.media.view.Modal.prototype.on('close', function () {
            const existingModal = $(".media-modal");
            if (existingModal) {
              existingModal.remove();
            }
          });
          image = wp.media({
            title: custom_text,
            multiple: false,
            // Set to true if you want to upload multiple files at once
            library: {
              type: 'image' // Only load image files
            }
          }).open().on('select', function () {
            // This will return the selected image from the Media Uploader, the result is an object
            let uploaded_image = image.state().get('selection').first();
            // Convert uploaded_image to a JSON object to make accessing it easier
            let image_url = uploaded_image.toJSON().url;
            // Assign the url value to the image and hidden input field
            $(`.${picked_image}`).attr("src", image_url);
            $(`.${hidden_field}`).val(image_url);
          });
          image.open();
          //  if (wp.media) {
          //     wp.media.view.Modal.prototype.on('open', function(data) {
          //         if(wp.media.frame.modal.clickedOpenerEl){
          //          jQuery( '.media-modal' ).remove();
          //         }
          //     });
          // }
        }
      });
    }
  }
  new SimpleCharm_portfolio_Media();
})(jQuery);

/***/ }),

/***/ "./src/js/components/repeater.js":
/*!***************************************!*\
  !*** ./src/js/components/repeater.js ***!
  \***************************************/
/***/ (function() {

/**
 * Repeater Controll
 */
(function ($) {
  class Repeater {
    constructor() {
      this.init();
    }
    init() {
      this.handleRepeater("charming_portfolio_social_link_add", ['charming_portfolio_empty-row__social_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_social_link_remove', 'social_link');
      this.handleRepeater("charming_portfolio_skill_link_add", ['charming_portfolio_empty-row__skills_link', 'screen-reader-text'], '#repeatable-fieldset-one tbody>tr', 'charming_portfolio_skills_remove', 'skills');
      this.handleRepeater("charming_portfolio_experience_add", ['charming_portfolio_empty-row__experience', 'screen-reader-text'], '#repeatable-fieldset-two tbody>tr', 'charming_portfolio_experience_remove', 'experiences');
      this.handleRepeater("charming_portfolio_work_add", ['charming_portfolio_empty-row__works', 'screen-reader-text'], '#repeatable-fieldset-three tbody>tr', 'charming_portfolio_project_remove', 'works');
    }
    handleRepeater(addBtn, hiddenFields, insertBefore, removeBtn, dataName) {
      let queue = $(`${insertBefore}:nth-last-child(2) input`).data("queue");
      $(`#${addBtn}`).on('click', function () {
        queue++;
        queue = isNaN(queue) ? 1 : queue;
        let row = $(`.${hiddenFields.join(".")}`).clone(true).removeClass(hiddenFields.join(" "));
        let newInputs = row.find('input, textarea');
        console.log(`.${hiddenFields.join(".")}`);
        newInputs.each(function () {
          $(this).attr('data-queue', queue);
          let name = $(this).attr('name');
          let inputType = $(this)[0].className;
          $(this).attr('name', `CHARMING_PORTFOLIO[${dataName}][${queue}][][${inputType}]`);
          let inputId = $(this).attr("id");
          let LabelFor = $(this).siblings('label').attr('for');
          $(this).attr("id", `${inputId}-${queue}`);
          $(this).siblings('label').attr("for", `${LabelFor}-${queue}`);
        });
        // row.removeClass(hiddenFields.join(" "));
        row.insertBefore(`${insertBefore}:last-child`);
        return false;
      });
      $(`.${removeBtn}`).on('click', function () {
        $(this).parents('tr').remove();
        return false;
      });
    }
  }
  new Repeater();
})(jQuery);

/***/ }),

/***/ "./src/js/components/toggler.js":
/*!**************************************!*\
  !*** ./src/js/components/toggler.js ***!
  \**************************************/
/***/ (function() {

/**
 * Toggle Portfolio Customization Section Template
 */
(function ($) {
  $('.portfolio-section-toggle').click(function () {
    $(this).siblings('.portfolio-section-content').slideToggle('slow');
  });
})(jQuery);

/***/ }),

/***/ "./src/sass/admin/admin.scss":
/*!***********************************!*\
  !*** ./src/sass/admin/admin.scss ***!
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_admin_admin_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/admin/admin.scss */ "./src/sass/admin/admin.scss");
/* harmony import */ var _components_media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/media.js */ "./src/js/components/media.js");
/* harmony import */ var _components_media_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_media_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_repeater_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/repeater.js */ "./src/js/components/repeater.js");
/* harmony import */ var _components_repeater_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_repeater_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_toggler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toggler.js */ "./src/js/components/toggler.js");
/* harmony import */ var _components_toggler_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_toggler_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_admin_experience_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-experience.js */ "./src/js/components/admin-experience.js");
/* harmony import */ var _components_admin_experience_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_admin_experience_js__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;
//# sourceMappingURL=admin.js.map