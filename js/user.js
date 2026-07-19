var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"user": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"iframe-extension-worker":"iframe-extension-worker","sb":"sb"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/user/user.jsx","vendors~account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~93f8d0c3","vendors~account-settings~editor~embed~fullscreen~login~mystuff~player~register~user","account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~register~user","account-settings~login~mystuff~register~user"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/forms/input.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/forms/input.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sure to keep these in sync with other constants,\r\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\r\n\r\n/* layout contants from `layout-constants.js` */\r\n\r\n/* overridden by src/lib/themes/guiHelpers.js */\r\n\r\n.input_input-form_2EIqD {\r\n    height: 2rem;\r\n    padding: 0 0.75rem;\r\n\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 0.625rem;\r\n    font-weight: bold;\r\n    color: var(--text-primary);\r\n    background-color: var(--input-background);\r\n\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: var(--ui-black-transparent);\r\n    border-radius: 2rem;\r\n\r\n    outline: none;\r\n    cursor: text;\r\n    transition: 0.25s ease-out; /* @todo: standardize with var */\r\n    box-shadow: none;\r\n\r\n    /*\r\n        For truncating overflowing text gracefully\r\n        Min-width is for a bug: https://css-tricks.com/flexbox-truncated-text\r\n        @todo: move this out into a mixin or a helper component\r\n    */\r\n    min-width: 0;\r\n}\r\n\r\n.input_input-form_2EIqD:hover {\r\n    border-color: var(--looks-secondary);\r\n}\r\n\r\n.input_input-form_2EIqD:focus {\r\n    border-color: var(--looks-secondary);\r\n    box-shadow: 0 0 0 0.25rem var(--looks-transparent);\r\n}\r\n\r\n.input_input-small_1bkbs {\r\n    width: 3rem;\r\n    padding: 0 0.5rem;\r\n    text-overflow: clip;\r\n    text-align: center;\r\n}\r\n\r\n/* Chrome, Safari, Edge, Opera */\r\n\r\n.input_input-form_2EIqD::-webkit-outer-spin-button,\r\n.input_input-form_2EIqD::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n/* Firefox */\r\n\r\n.input_input-form_2EIqD[type=number] {\r\n    -moz-appearance: textfield;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"input-form": "input_input-form_2EIqD",
	"inputForm": "input_input-form_2EIqD",
	"input-small": "input_input-small_1bkbs",
	"inputSmall": "input_input-small_1bkbs"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/user/user.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/user/user.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\r\n\r\n/* make sure to keep these in sync with other constants,\r\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\r\n\r\n/* layout contants from `layout-constants.js` */\r\n\r\n/*\r\n    Contains constants for the z-index values of elements that are part of the global stack context.\r\n    In other words, z-index values that are \"inside\" a component are not added here.\r\n    This prevents conflicts between identical z-index values in different components.\r\n*/\r\n\r\n/* Toolbox z-index: 40; set in scratch-blocks */\r\n\r\n/* tooltips should go over add buttons if they overlap */\r\n\r\n/* monitors go over add buttons */\r\n\r\n/* \"ask\" block text input goes above monitors */\r\n\r\n/* menu-bar should go over monitors, alerts and tutorials */\r\n\r\n/* behind menu-bar */\r\n\r\n/* Block drag z-index: 1000; default 50 is overriden in blocks.css */\r\n\r\n/* so it is draggable into other panes */\r\n\r\n/* behind modals */\r\n\r\n/* behind modals */\r\n\r\n/* in most interfaces, the context menu is always on top */\r\n\r\n/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\np {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n    font-weight: bold;\r\n    line-height: 1.7em;\r\n}\r\n\r\nh1 {\r\n    font-weight: 2.5rem;\r\n}\r\n\r\nh2 {\r\n    font-weight: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.4rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1rem;\r\n}\r\n\r\na {\r\n    color: var(--link-color);\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;\r\n    margin: 0px;\r\n}\r\n\r\n.user_container_12JWH {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-width: -webkit-fit-content;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    background: var(--page-background);\r\n    color: var(--page-foreground);\r\n}\r\n\r\n.user_user-wrapper_3ue0H {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    background: var(--ui-primary);\r\n    margin: 0px;\r\n    padding: 0.5rem;\r\n    width: 100vw;\r\n}\r\n\r\n.user_section_11hYE {\r\n    width: calc(100% - 2 * 0.5rem);\r\n    max-width: 900px;\r\n    background: var(--ui-white);\r\n    margin: 0px;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n}\r\n\r\n.user_user-header_i7dlL {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: calc(2 * 0.5rem);\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.user_avatar-img_34ein {\r\n    width: 5rem;\r\n    height: 5rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n.user_user-info_2MSdf {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user_user-info-row_1v1DI {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.user_user-info-divider_3aJd_ {\r\n    height: 100%;\r\n    border-right: 0.0625rem solid var(--ui-black-transparent);\r\n}\r\n\r\n.user_role-badge_1Qfy5 {\r\n    background-color: var(--motion-tertiary);\r\n    color: var(--ui-white);\r\n    border: 1px solid var(--ui-black-transparent);\r\n    padding: 0.25rem 0.5rem;\r\n    border-radius: 1rem;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.user_spinner_hUOY7 {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.user_description_3K0oe {\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n    border-radius: 0.5rem;\r\n    height: 7.5rem;\r\n    overflow-y: auto;\r\n    padding: 0.5rem;\r\n\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    font-size: 0.800rem;\r\n    color: var(--text-primary);\r\n    background-color: var(--input-background);\r\n}\r\n\r\n.user_description-field_LpHJC {\r\n    width: 100% !important;\r\n    height: 7.5rem !important;\r\n    resize: none !important;\r\n    white-space: pre-wrap !important;\r\n    word-wrap: break-word !important;\r\n    border: 0.0625rem dashed var(--ui-black-transparent) !important;\r\n    border-radius: 0.5rem !important;\r\n    background-color: var(--project-title-inactive) !important;\r\n    background-clip: padding-box;\r\n    padding: 0.5rem !important;\r\n}\r\n\r\n.user_description-field_LpHJC {\r\n    color: var(--text-primary) !important;\r\n    font-weight: bold !important;\r\n    font-size: .8rem !important;\r\n}\r\n\r\n.user_description-field_LpHJC::-ms-input-placeholder {\r\n    color: var(--text-primary) !important;\r\n    opacity: 0.8 !important;\r\n    font-weight: normal !important;\r\n    font-size: .8rem !important;\r\n    font-style: italic !important;\r\n}\r\n\r\n.user_description-field_LpHJC::placeholder {\r\n    color: var(--text-primary) !important;\r\n    opacity: 0.8 !important;\r\n    font-weight: normal !important;\r\n    font-size: .8rem !important;\r\n    font-style: italic !important;\r\n}\r\n\r\n.user_description-field_LpHJC:hover {\r\n    background-color: var(--project-title-hover) !important;\r\n    border-color: var(--ui-black-transparent) !important; /* dont use hover border from custom input */\r\n}\r\n\r\n.user_project-grid_3N1br {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.user_project-card_3ign7 {\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n    border-radius: 0.5rem;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    background-color: var(--ui-secondary);\r\n    width: 12rem;\r\n    min-width: 12rem;\r\n    min-height: 12rem;\r\n}\r\n\r\n.user_thumb-wrapper_2VB8H img {\r\n    width: 100%;\r\n    height: 9rem;\r\n    object-fit: cover;\r\n    background: #f3f4f6;\r\n}\r\n\r\n.user_project-info_2lXlP {\r\n    padding: 0.75rem;\r\n}\r\n\r\n.user_project-info_2lXlP h4 {\r\n    margin: 0 0 0.5rem 0;\r\n}\r\n\r\n.user_project-info_2lXlP p {\r\n    font-size: 0.85rem;\r\n    color: #4b5563;\r\n    margin: 0;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "user_container_12JWH",
	"user-wrapper": "user_user-wrapper_3ue0H",
	"userWrapper": "user_user-wrapper_3ue0H",
	"section": "user_section_11hYE",
	"user-header": "user_user-header_i7dlL",
	"userHeader": "user_user-header_i7dlL",
	"avatar-img": "user_avatar-img_34ein",
	"avatarImg": "user_avatar-img_34ein",
	"user-info": "user_user-info_2MSdf",
	"userInfo": "user_user-info_2MSdf",
	"user-info-row": "user_user-info-row_1v1DI",
	"userInfoRow": "user_user-info-row_1v1DI",
	"user-info-divider": "user_user-info-divider_3aJd_",
	"userInfoDivider": "user_user-info-divider_3aJd_",
	"role-badge": "user_role-badge_1Qfy5",
	"roleBadge": "user_role-badge_1Qfy5",
	"spinner": "user_spinner_hUOY7",
	"description": "user_description_3K0oe",
	"description-field": "user_description-field_LpHJC",
	"descriptionField": "user_description-field_LpHJC",
	"project-grid": "user_project-grid_3N1br",
	"projectGrid": "user_project-grid_3N1br",
	"project-card": "user_project-card_3ign7",
	"projectCard": "user_project-card_3ign7",
	"thumb-wrapper": "user_thumb-wrapper_2VB8H",
	"thumbWrapper": "user_thumb-wrapper_2VB8H",
	"project-info": "user_project-info_2lXlP",
	"projectInfo": "user_project-info_2lXlP"
};

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsRegExp.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsRegExp.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/escapeRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/escapeRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
    reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
 * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escapeRegExp('[lodash](https://lodash.com/)');
 * // => '\[lodash\]\(https://lodash\.com/\)'
 */
function escapeRegExp(string) {
  string = toString(string);
  return (string && reHasRegExpChar.test(string))
    ? string.replace(reRegExpChar, '\\$&')
    : string;
}

module.exports = escapeRegExp;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isRegExp.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isRegExp.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(/*! ./_baseIsRegExp */ "./node_modules/lodash/_baseIsRegExp.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/react-string-replace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-string-replace/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable vars-on-top, no-var, prefer-template */
var isRegExp = __webpack_require__(/*! lodash/isRegExp */ "./node_modules/lodash/isRegExp.js");
var escapeRegExp = __webpack_require__(/*! lodash/escapeRegExp */ "./node_modules/lodash/escapeRegExp.js");
var isString = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
var flatten = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");

/**
 * Given a string, replace every substring that is matched by the `match` regex
 * with the result of calling `fn` on matched substring. The result will be an
 * array with all odd indexed elements containing the replacements. The primary
 * use case is similar to using String.prototype.replace except for React.
 *
 * React will happily render an array as children of a react element, which
 * makes this approach very useful for tasks like surrounding certain text
 * within a string with react elements.
 *
 * Example:
 * matchReplace(
 *   'Emphasize all phone numbers like 884-555-4443.',
 *   /([\d|-]+)/g,
 *   (number, i) => <strong key={i}>{number}</strong>
 * );
 * // => ['Emphasize all phone numbers like ', <strong>884-555-4443</strong>, '.'
 *
 * @param {string} str
 * @param {regexp|str} match Must contain a matching group
 * @param {function} fn
 * @return {array}
 */
function replaceString(str, match, fn) {
  var curCharStart = 0;
  var curCharLen = 0;

  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  var re = match;

  if (!isRegExp(re)) {
    re = new RegExp('(' + escapeRegExp(re) + ')', 'gi');
  }

  var result = str.split(re);

  // Apply fn to all odd elements
  for (var i = 1, length = result.length; i < length; i += 2) {
    curCharLen = result[i].length;
    curCharStart += result[i - 1].length;
    result[i] = fn(result[i], i, curCharStart);
    curCharStart += curCharLen;
  }

  return result;
}

module.exports = function reactStringReplace(source, match, fn) {
  if (!Array.isArray(source)) source = [source];

  return flatten(source.map(function(x) {
    return isString(x) ? replaceString(x, match, fn) : x;
  }));
};


/***/ }),

/***/ "./src/components/forms/buffered-input-hoc.jsx":
/*!*****************************************************!*\
  !*** ./src/components/forms/buffered-input-hoc.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.bindall */ "./node_modules/lodash.bindall/index.js");
/* harmony import */ var lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_bindall__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }




/**
 * Higher Order Component to manage inputs that submit on blur and <enter>
 * @param {React.Component} Input text input that consumes onChange, onBlur, onKeyPress
 * @returns {React.Component} Buffered input that calls onSubmit on blur and <enter>
 */
/* harmony default export */ __webpack_exports__["default"] = (function (Input) {
  class BufferedInput extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
    constructor(props) {
      super(props);
      lodash_bindall__WEBPACK_IMPORTED_MODULE_0___default()(this, ['handleChange', 'handleKeyPress', 'handleFlush']);
      this.state = {
        value: null
      };
    }
    handleKeyPress(e) {
      if (e.key === 'Enter' && !this.props.multiline) {
        this.handleFlush();
        e.target.blur();
      }
    }
    handleFlush() {
      const isNumeric = typeof this.props.value === 'number';
      const validatesNumeric = isNumeric ? !isNaN(this.state.value) : true;
      if (this.state.value !== null && validatesNumeric) {
        this.props.onSubmit(isNumeric ? Number(this.state.value) : this.state.value);
      }
      this.setState({
        value: null
      });
    }
    handleChange(e) {
      this.setState({
        value: e.target.value
      });
    }
    render() {
      const bufferedValue = this.state.value === null ? this.props.value : this.state.value;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input, _extends({}, this.props, {
        value: bufferedValue,
        onBlur: this.handleFlush,
        onChange: this.handleChange,
        onKeyPress: this.handleKeyPress
      }));
    }
  }
  BufferedInput.propTypes = {
    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
  };
  return BufferedInput;
});

/***/ }),

/***/ "./src/components/forms/input.css":
/*!****************************************!*\
  !*** ./src/components/forms/input.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./input.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/forms/input.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/forms/input.jsx":
/*!****************************************!*\
  !*** ./src/components/forms/input.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input.css */ "./src/components/forms/input.css");
/* harmony import */ var _input_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_input_css__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["small", "multiline"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




const Input = props => {
  const small = props.small,
    multiline = props.multiline,
    componentProps = _objectWithoutProperties(props, _excluded);
  if (multiline) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", _extends({}, componentProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_input_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputForm, props.className, {
        [_input_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputSmall]: small
      })
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, componentProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_input_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputForm, props.className, {
      [_input_css__WEBPACK_IMPORTED_MODULE_3___default.a.inputSmall]: small
    })
  }));
};
Input.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  small: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
Input.defaultProps = {
  small: false,
  multiline: false
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./src/lib/decorate-text.jsx":
/*!***********************************!*\
  !*** ./src/lib/decorate-text.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_1__);
// https://github.com/LLK/scratch-www/blob/25232a06bcceeaddec8fcb24fb63a44d870cf1cf/src/lib/decorate-text.jsx



const decorate = (text, isDashProject) => {
  // Make links clickable
  const linkRegex = /(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g;
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_1___default()(text, linkRegex, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: match,
    rel: "noreferrer",
    target: "_blank",
    key: match + i
  }, match));

  // Make @mentions clickable
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_1___default()(text, /@([\w-]+)/, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: isDashProject ? "user#".concat(match) : "https://scratch.mit.edu/users/".concat(match, "/"),
    rel: "noreferrer",
    target: "_blank",
    key: match + i
  }, "@".concat(match)));
  if (isDashProject) return text;

  // Make hashtags clickable
  // TODO: Add projects search for Dash
  text = react_string_replace__WEBPACK_IMPORTED_MODULE_1___default()(text, /#([\w-]+)/g, (match, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://scratch.mit.edu/search/projects?q=".concat(match),
    target: "_blank",
    key: match + i
  }, "#".concat(match)));
  return text;
};
/* harmony default export */ __webpack_exports__["default"] = (decorate);

/***/ }),

/***/ "./src/playground/user/user.css":
/*!**************************************!*\
  !*** ./src/playground/user/user.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./user.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/user/user.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/user/user.jsx":
/*!**************************************!*\
  !*** ./src/playground/user/user.jsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.css */ "./src/playground/user/user.css");
/* harmony import */ var _user_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_spinner_spinner_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/spinner/spinner.jsx */ "./src/components/spinner/spinner.jsx");
/* harmony import */ var _lib_decorate_text_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/decorate-text.jsx */ "./src/lib/decorate-text.jsx");
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../lib/session */ "./src/lib/session.js");
/* harmony import */ var _components_forms_buffered_input_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/forms/buffered-input-hoc.jsx */ "./src/components/forms/buffered-input-hoc.jsx");
/* harmony import */ var _components_forms_input_jsx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/forms/input.jsx */ "./src/components/forms/input.jsx");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
















const BufferedInput = Object(_components_forms_buffered_input_hoc_jsx__WEBPACK_IMPORTED_MODULE_14__["default"])(_components_forms_input_jsx__WEBPACK_IMPORTED_MODULE_15__["default"]);

/* eslint-disable react/jsx-no-literals */

const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_12__["detectTheme"])();
Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_11__["applyGuiColors"])(theme);

// Browser support is not perfect yet
const relativeTimeSupported = () => typeof Intl !== 'undefined' && typeof Intl.RelativeTimeFormat !== 'undefined';
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["defineMessages"])({
  dasherRole: {
    "id": "dash.user.role.dasher",
    "defaultMessage": "Dasher"
  },
  dasherPlusRole: {
    "id": "dash.user.role.dasherPlus",
    "defaultMessage": "Dasher+"
  },
  dashTeamRole: {
    "id": "dash.user.role.dashTeam",
    "defaultMessage": "Dash Team"
  },
  dashSupporterRole: {
    "id": "dash.user.role.dashSupporter",
    "defaultMessage": "Dash Supporter"
  },
  hoverText: {
    "id": "tw.studioview.hoverText",
    "defaultMessage": "{title} by {author}"
  },
  descriptionPlaceholder: {
    "id": "dash.user.description.placeholder",
    "defaultMessage": "This user is kinda quiet..."
  },
  descriptionInputPlaceholder: {
    "id": "dash.user.description.inputPlaceholder",
    "defaultMessage": "Who are you? What are you working on? ..."
  },
  descriptionInputPlaceholderForDasher: {
    "id": "dash.user.description.inputPlaceholderForDasher",
    "defaultMessage": "Descriptions are available only for Dasher+ role and higher. Come back later!"
  }
});
const User = props => {
  var _userData$profile;
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(window.location.hash.replace('#', '')),
    _useState2 = _slicedToArray(_useState, 2),
    id = _useState2[0],
    setId = _useState2[1];
  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
    _useState4 = _slicedToArray(_useState3, 2),
    userData = _useState4[0],
    setUserData = _useState4[1];
  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState6 = _slicedToArray(_useState5, 2),
    descriptionDisabled = _useState6[0],
    setDescriptionDisabled = _useState6[1];
  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    _useState8 = _slicedToArray(_useState7, 2),
    projects = _useState8[0],
    setProjects = _useState8[1];
  const _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
    _useState0 = _slicedToArray(_useState9, 2),
    avgGradient = _useState0[0],
    setAvgGradient = _useState0[1];
  const _useState1 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
    _useState10 = _slicedToArray(_useState1, 2),
    isMyProfile = _useState10[0],
    setIsMyProfile = _useState10[1];
  const _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  const _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setId(window.location.hash.replace('#', ''));
  }, [window.location.hash]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const fetchFullProfile = async () => {
      setLoading(true);
      let userData;
      try {
        var _session$userId, _session$username;
        const session = await Object(_lib_session__WEBPACK_IMPORTED_MODULE_13__["default"])();
        setIsMyProfile((session === null || session === void 0 ? void 0 : (_session$userId = session.userId) === null || _session$userId === void 0 ? void 0 : _session$userId.toString()) === id || (session === null || session === void 0 ? void 0 : (_session$username = session.username) === null || _session$username === void 0 ? void 0 : _session$username.toLowerCase()) === (id === null || id === void 0 ? void 0 : id.toLowerCase()));
        const userRes = await fetch("https://api.dashblocks.org/users/".concat(id));
        userData = await userRes.json();
        if (!userData.ok) throw new Error(userData.error);
        document.title = "".concat(userData.user.username, " - ").concat(_lib_brand__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]);
        // Only Dasher+ or higher can do this
        if (userData.user.role === "dasher") setDescriptionDisabled(true);
        setUserData(userData.user);
        const projects = userData.user.projects.slice(0, 20);
        setProjects(projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFullProfile();
  }, [id]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const avgGradientByImgSections = async (src, sections, points) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = src;
      await img.decode();
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height).data;
      const avgCssColors = [];
      for (let section = 0; section < sections; section++) {
        const colors = [];
        for (let x = 0; x < points; x++) {
          for (let y = 0; y < points * sections; y++) {
            const realX = Math.round((section * points + x) * img.width / (sections * points - 1));
            const realY = Math.round(y * img.height / (sections * points - 1));
            const i = (realY * img.width + realX) * 4;
            // Check that the color isn't completely transparent
            if (imgData[i + 3] > 0) {
              colors.push([imgData[i], imgData[i + 1], imgData[i + 2], imgData[i + 3]]);
            }
          }
        }
        if (colors.length > 0) {
          const _colors$reduce$map = colors.reduce((_ref, _ref2) => {
              let _ref3 = _slicedToArray(_ref, 4),
                r1 = _ref3[0],
                g1 = _ref3[1],
                b1 = _ref3[2],
                a1 = _ref3[3];
              let _ref4 = _slicedToArray(_ref2, 4),
                r2 = _ref4[0],
                g2 = _ref4[1],
                b2 = _ref4[2],
                a2 = _ref4[3];
              return [r1 + r2, g1 + g2, b1 + b2, a1 + a2];
            }, [0, 0, 0, 0]).map(v => v / colors.length),
            _colors$reduce$map2 = _slicedToArray(_colors$reduce$map, 4),
            r = _colors$reduce$map2[0],
            g = _colors$reduce$map2[1],
            b = _colors$reduce$map2[2],
            a = _colors$reduce$map2[3];
          avgCssColors.push("color-mix(in srgb, rgb(".concat(r, ", ").concat(g, ", ").concat(b, "), var(--ui-white) ").concat(60 + (a - 255) / 2.55 * 0.4, "%)"));
        } else {
          avgCssColors.push("var(--ui-white)");
        }
      }
      return avgCssColors;
    };
    try {
      avgGradientByImgSections("https://api.dashblocks.org/users/avatars/".concat(userData.profile.avatarId), 5, 2).then(avgGradient => setAvgGradient(avgGradient));
    } catch (_) {
      // Ignore errors
    }
  }, [userData === null || userData === void 0 ? void 0 : (_userData$profile = userData.profile) === null || _userData$profile === void 0 ? void 0 : _userData$profile.avatarId]);
  async function handleChangeAvatar(e) {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('avatar', file);
    const response = await fetch('https://api.dashblocks.org/users/upload-avatar', {
      method: 'POST',
      body: formData,
      credentials: 'include'
    });
    const data = await response.json();
    if (data.ok) {
      setUserData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        profile: _objectSpread(_objectSpread({}, prev.profile), {}, {
          avatarId: data.avatarId
        })
      }));
    } else {
      alert(data.error);
    }
  }
  async function handleChangeDescription(description) {
    if (!description) return;
    const prevDescription = userData.profile.description;
    setDescriptionDisabled(true);
    setUserData(prev => _objectSpread(_objectSpread({}, prev), {}, {
      profile: _objectSpread(_objectSpread({}, prev.profile), {}, {
        description
      })
    }));
    try {
      const response = await fetch('https://dashblocks-server.vercel.app/users/set-description', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description
        }),
        credentials: 'include'
      });
      const data = await response.json();
      if (!data.ok) {
        throw new Error(data.error);
      }
    } catch (error) {
      setUserData(prev => _objectSpread(_objectSpread({}, prev), {}, {
        profile: _objectSpread(_objectSpread({}, prev.profile), {}, {
          description: prevDescription
        })
      }));
      alert(error.message);
    } finally {
      setDescriptionDisabled(false);
    }
  }
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.spinner
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_spinner_spinner_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], {
    level: 'primary',
    large: true
  }));
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Error: ", error);
  if (!userData) return null;
  const joinDate = userData.joinedAt ? new Date(userData.joinedAt) : null;
  const lastActiveDate = userData.lastActive ? new Date(userData.lastActive) : null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.container,
    dir: props.isRtl ? 'rtl' : 'ltr'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_user_css__WEBPACK_IMPORTED_MODULE_7___default.a.section, _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userHeader),
    style: avgGradient.length > 0 ? {
      backgroundImage: "linear-gradient(to right, ".concat(avgGradient.join(', '), ")")
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    accept: ".png,.jpg,.jpeg,.img,.gif",
    ref: fileInputRef,
    onChange: handleChangeAvatar,
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    draggable: false,
    src: "https://api.dashblocks.org/users/avatars/".concat(userData.profile.avatarId),
    alt: userData.username,
    onClick: () => isMyProfile ? fileInputRef.current.click() : null,
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.avatarImg,
    style: isMyProfile ? {
      cursor: 'pointer'
    } : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userInfoRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, userData.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.roleBadge
  }, userData.role === 'dashteam' ? props.intl.formatMessage(messages.dashTeamRole) : userData.role === 'supporter' ? props.intl.formatMessage(messages.dashSupporterRole) : userData.role === 'dasher+' ? props.intl.formatMessage(messages.dasherPlusRole) : props.intl.formatMessage(messages.dasherRole))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userInfoRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Joined: {date}",
    id: "dash.user.joinedAt",
    values: {
      date: joinDate ? relativeTimeSupported() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedRelative"], {
        value: joinDate
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedDate"], {
        value: joinDate
      }) : '?'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.userInfoDivider
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Last Active: {date}",
    id: "dash.user.lastActive",
    values: {
      date: lastActiveDate ? relativeTimeSupported() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedRelative"], {
        value: lastActiveDate
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedDate"], {
        value: lastActiveDate
      }) : '?'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Description",
    id: "dash.home.tab.description"
  })), isMyProfile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BufferedInput, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_user_css__WEBPACK_IMPORTED_MODULE_7___default.a.descriptionField),
    maxLength: "1000",
    multiline: true,
    placeholder: props.intl.formatMessage(userData.role === "dasher" ? messages.descriptionInputPlaceholderForDasher : messages.descriptionInputPlaceholder),
    tabIndex: "0",
    value: userData.profile.description,
    onSubmit: handleChangeDescription,
    disabled: descriptionDisabled
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.description
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, userData.profile.description ? Object(_lib_decorate_text_jsx__WEBPACK_IMPORTED_MODULE_10__["default"])(userData.profile.description, true) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", null, props.intl.formatMessage(messages.descriptionPlaceholder))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "Projects ({projectsCount})",
    id: "dash.user.projects",
    values: {
      projectsCount: userData.projects.length
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.projectGrid
  }, projects.map(project => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    key: project.id,
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.projectCard,
    title: props.intl.formatMessage(messages.hoverText, {
      author: userData.username,
      title: project.name
    }),
    onClick: () => window.open("./#".concat(project.id), '_blank')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.thumbWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    draggable: false,
    src: "https://api.dashblocks.org/projects/thumbnails/".concat(project.thumbnailId || 1),
    alt: project.id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _user_css__WEBPACK_IMPORTED_MODULE_7___default.a.projectInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, project.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    defaultMessage: "by {author}",
    id: "tw.studioview.authorAttribution",
    values: {
      author: userData.username
    }
  })))))))));
};
User.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_4__["intlShape"],
  isRtl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
const mapStateToProps = state => ({
  isRtl: state.locales.isRtl
});
const mapDispatchToProps = () => ({});
const ConnectedUser = Object(react_intl__WEBPACK_IMPORTED_MODULE_4__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(User));
const WrappedUser = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(ConnectedUser, true);
Object(_app_target__WEBPACK_IMPORTED_MODULE_6__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedUser, null));

/***/ })

/******/ });
//# sourceMappingURL=user.js.map