/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/copybtn.js":
/*!**************************************!*\
  !*** ./src/js/components/copybtn.js ***!
  \**************************************/
/***/ (function() {

(function ($) {
  class CopyBtn {
    constructor() {
      this.init();
    }
    init() {
      this.handleCopyBtn(".simplecharm-portfolio-copy-mail");
      this.handleCopyBtn(".simplecharm-portfolio-copy-phone");
    }
    handleCopyBtn(copyBtn) {
      let instance = this;
      $(copyBtn).on("click", e => this.copy(e, instance, copyBtn));
      $(copyBtn).on("focus", e => this.copy(e, instance, copyBtn));
    }
    bottomAlert(alertText, bgColor, timing) {
      var bottomAlert = document.getElementById("simplecharm-portfolio-bottom-alert");
      bottomAlert.textContent = alertText;
      bottomAlert.style.background = bgColor;
      bottomAlert.style.opacity = "1";
      bottomAlert.style.transform = "translate(-50%,0)";
      setTimeout(function () {
        bottomAlert.style.transform = "translate(-50%,50px)";
        bottomAlert.style.opacity = "0";
      }, timing);
    }
    copy(e, instance, copyBtn) {
      e.preventDefault();
      if (e.type !== "click" && e.keyCode !== 13) return;
      let tempTextArea = document.createElement("textarea");
      tempTextArea.value = $(copyBtn).siblings("h2").html();
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      tempTextArea.setSelectionRange(0, 99999);
      if (document.execCommand("copy")) {
        instance.bottomAlert("Copied!", "#204ecf", 1000);
      } else {
        instance.bottomAlert("Can't Copy! Try Again.", "#f00", 3000);
      }
      document.body.removeChild(tempTextArea);
    }
  }
  new CopyBtn();
})(jQuery);

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _components_copybtn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/copybtn.js */ "./src/js/components/copybtn.js");
/* harmony import */ var _components_copybtn_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_copybtn_js__WEBPACK_IMPORTED_MODULE_1__);
//import sass


}();
/******/ })()
;
//# sourceMappingURL=main.js.map