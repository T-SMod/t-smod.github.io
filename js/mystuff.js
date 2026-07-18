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
/******/ 		"mystuff": 0
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
/******/ 	deferredModules.push(["./src/playground/mystuff/mystuff.jsx","vendors~account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~93f8d0c3","vendors~account-settings~editor~embed~fullscreen~login~mystuff~player~register~user","account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~register~user","account-settings~login~mystuff~register~user"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/button/button.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* make sure to keep these in sync with other constants,\r\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\r\n\r\n/* layout contants from `layout-constants.js` */\r\n\r\n.button_outlined-button_2f510 {\r\n    cursor: pointer;\r\n    border-radius: calc(0.5rem / 2);\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: .75rem;\r\n    padding-right: .75rem;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n}\r\n\r\n.button_icon_JhCuM {\r\n    height: 1.5rem;\r\n}\r\n\r\n[dir=\"ltr\"] .button_icon_JhCuM {\r\n    margin-right: .5rem;\r\n}\r\n\r\n[dir=\"rtl\"] .button_icon_JhCuM {\r\n    margin-left: .5rem;\r\n}\r\n\r\n.button_content_3y79K {\r\n    white-space: nowrap;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"outlined-button": "button_outlined-button_2f510",
	"outlinedButton": "button_outlined-button_2f510",
	"icon": "button_icon_JhCuM",
	"content": "button_content_3y79K"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/mystuff/mystuff.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/mystuff/mystuff.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\r\n\r\n/* make sure to keep these in sync with other constants,\r\ne.g. STAGE_DIMENSION_DEFAULTS in lib/screen-utils.js */\r\n\r\n/* layout contants from `layout-constants.js` */\r\n\r\n/*\r\n    Contains constants for the z-index values of elements that are part of the global stack context.\r\n    In other words, z-index values that are \"inside\" a component are not added here.\r\n    This prevents conflicts between identical z-index values in different components.\r\n*/\r\n\r\n/* Toolbox z-index: 40; set in scratch-blocks */\r\n\r\n/* tooltips should go over add buttons if they overlap */\r\n\r\n/* monitors go over add buttons */\r\n\r\n/* \"ask\" block text input goes above monitors */\r\n\r\n/* menu-bar should go over monitors, alerts and tutorials */\r\n\r\n/* behind menu-bar */\r\n\r\n/* Block drag z-index: 1000; default 50 is overriden in blocks.css */\r\n\r\n/* so it is draggable into other panes */\r\n\r\n/* behind modals */\r\n\r\n/* behind modals */\r\n\r\n/* in most interfaces, the context menu is always on top */\r\n\r\n/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\np {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n    font-weight: bold;\r\n    line-height: 1.7em;\r\n}\r\n\r\nh1 {\r\n    font-weight: 2.5rem;\r\n}\r\n\r\nh2 {\r\n    font-weight: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.4rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 1rem;\r\n}\r\n\r\na {\r\n    color: var(--link-color);\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;\r\n    margin: 0px;\r\n}\r\n\r\n.mystuff_container_33Sa8 {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-width: -webkit-fit-content;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    background: var(--page-background);\r\n    color: var(--page-foreground);\r\n}\r\n\r\n.mystuff_mystuff-wrapper_1I2uD {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    background: var(--ui-primary);\r\n    margin: 0px;\r\n    padding: 0.5rem;\r\n    width: 100vw;\r\n}\r\n\r\n.mystuff_section_jI7IK {\r\n    width: calc(100% - 2 * 0.5rem);\r\n    max-width: 900px;\r\n    background: var(--ui-white);\r\n    margin: 0px;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n}\r\n\r\n.mystuff_spinner_A8JUz {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n}\r\n\r\n.mystuff_project-grid_K8kYf {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n    border-radius: 0.5rem;\r\n    padding: 0.5rem;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.mystuff_project-card_rw6Sj {\r\n    border: 0.0625rem solid var(--ui-black-transparent);\r\n    border-radius: 0.5rem;\r\n    overflow: hidden;\r\n    background-color: var(--ui-secondary);\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.mystuff_thumb-wrapper_1xJyL {\r\n    height: 9rem;\r\n}\r\n\r\n.mystuff_thumb-wrapper_1xJyL img {\r\n    width: 12rem;\r\n    height: 9rem;\r\n    object-fit: cover;\r\n    background: #f3f4f6;\r\n}\r\n\r\n.mystuff_project-info_3AvXf {\r\n    padding: 0.75rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.mystuff_project-info_3AvXf h4 {\r\n    margin: 0 0 0.5rem 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.mystuff_project-info_3AvXf p {\r\n    font-size: 0.85rem;\r\n    color: #4b5563;\r\n    margin: 0;\r\n}\r\n\r\n.mystuff_see-inside-button_2DWwk {\r\n    padding: 0.5rem;\r\n    background: var(--data-primary);\r\n    color: white;\r\n    border: 1px solid var(--data-primary);\r\n    font-weight: 600;\r\n    font-size: 0.85rem;\r\n    display: inline-block;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.mystuff_delete-project-button_15H3E {\r\n    color: red;\r\n}\r\n\r\n.mystuff_project-stats_3HQ-X {\r\n    margin: 0 0 0.5rem 0;\r\n    margin-left: auto;\r\n}\r\n\r\n.mystuff_project-stats_3HQ-X p {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"container": "mystuff_container_33Sa8",
	"mystuff-wrapper": "mystuff_mystuff-wrapper_1I2uD",
	"mystuffWrapper": "mystuff_mystuff-wrapper_1I2uD",
	"section": "mystuff_section_jI7IK",
	"spinner": "mystuff_spinner_A8JUz",
	"project-grid": "mystuff_project-grid_K8kYf",
	"projectGrid": "mystuff_project-grid_K8kYf",
	"project-card": "mystuff_project-card_rw6Sj",
	"projectCard": "mystuff_project-card_rw6Sj",
	"thumb-wrapper": "mystuff_thumb-wrapper_1xJyL",
	"thumbWrapper": "mystuff_thumb-wrapper_1xJyL",
	"project-info": "mystuff_project-info_3AvXf",
	"projectInfo": "mystuff_project-info_3AvXf",
	"see-inside-button": "mystuff_see-inside-button_2DWwk",
	"seeInsideButton": "mystuff_see-inside-button_2DWwk",
	"delete-project-button": "mystuff_delete-project-button_15H3E",
	"deleteProjectButton": "mystuff_delete-project-button_15H3E",
	"project-stats": "mystuff_project-stats_3HQ-X",
	"projectStats": "mystuff_project-stats_3HQ-X"
};

/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/button/button.css");

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

/***/ "./src/components/button/button.jsx":
/*!******************************************!*\
  !*** ./src/components/button/button.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "disabled", "iconAlt", "iconClassName", "iconSrc", "iconWidth", "iconHeight", "onClick", "children"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }




const ButtonComponent = _ref => {
  let {
      className,
      disabled,
      iconAlt,
      iconClassName,
      iconSrc,
      iconWidth,
      iconHeight,
      onClick,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  if (disabled) {
    onClick = function onClick() {};
  }
  const icon = iconSrc && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    alt: iconAlt,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(iconClassName, _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon),
    draggable: false,
    src: iconSrc,
    height: iconHeight,
    width: iconWidth
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_button_css__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedButton, className),
    role: "button",
    onClick: onClick
  }, props), icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: _button_css__WEBPACK_IMPORTED_MODULE_3___default.a.content
  }, children));
};
ButtonComponent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  iconAlt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconSrc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  iconHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  iconWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonComponent);

/***/ }),

/***/ "./src/playground/mystuff/mystuff.css":
/*!********************************************!*\
  !*** ./src/playground/mystuff/mystuff.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./mystuff.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/mystuff/mystuff.css");

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

/***/ "./src/playground/mystuff/mystuff.jsx":
/*!********************************************!*\
  !*** ./src/playground/mystuff/mystuff.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _mystuff_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mystuff.css */ "./src/playground/mystuff/mystuff.css");
/* harmony import */ var _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mystuff_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_spinner_spinner_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/spinner/spinner.jsx */ "./src/components/spinner/spinner.jsx");
/* harmony import */ var _components_button_button_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _lib_session_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../lib/session.js */ "./src/lib/session.js");













/* eslint-disable react/jsx-no-literals */

const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_10__["detectTheme"])();
Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_9__["applyGuiColors"])(theme);
const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["defineMessages"])({
  hoverText: {
    "id": "tw.studioview.hoverText",
    "defaultMessage": "{title} by {author}"
  },
  confirmDeleteProject: {
    "id": "dash.mystuff.confirmDeleteProject",
    "defaultMessage": "Are you sure you want to delete {projectName}? This action CANNOT be undone!"
  },
  deletedOnlyFromProfile: {
    "id": "dash.mystuff.deletedOnlyFromProfile",
    "defaultMessage": "Project deleted from your profile, but it still accessable via ID - full deletion requested"
  }
});
const User = props => {
  const [userData, setUserData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const [projects, setProjects] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const fetchFullProfile = async () => {
      setLoading(true);
      const session = await Object(_lib_session_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
      if (!session || !session.userId) {
        setError('Not logged in');
        setLoading(false);
        return;
      }
      let userData;
      try {
        const userRes = await fetch("https://dashblocks-server.vercel.app/users/".concat(session.userId));
        userData = await userRes.json();
        if (!userData.ok) throw new Error(userData.error);
        setUserData(userData.user);
        const projects = userData.user.projects.slice(0, 10);
        setProjects(projects);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFullProfile();
  }, []); // Let's say session won't change

  async function handleDeleteProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project || !window.confirm(props.intl.formatMessage(messages.confirmDeleteProject, {
      projectName: project.name
    }))) return;
    try {
      const res = await fetch("https://dashblocks-server.vercel.app/projects/".concat(projectId), {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      if (res.status_code === 202) alert(props.intl.formatMessage(messages.deletedOnlyFromProfile));
      setProjects(projects.filter(p => p.id !== projectId));
    } catch (error) {
      alert("Error deleting ".concat(project.name, " project: ").concat(error.message));
    }
  }
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.spinner
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_spinner_spinner_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
    level: 'primary',
    large: true
  }));
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Error: ", error);
  if (!userData) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.container,
    dir: props.isRtl ? 'rtl' : 'ltr'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.mystuffWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
    defaultMessage: "My Stuff",
    id: "dash.mystuff.title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectGrid
  }, projects.map(project => {
    var _project$stats;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: project.id,
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectCard
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.thumbWrapper
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      draggable: false,
      src: "https://dashblocks-server.vercel.app/projects/thumbnails/".concat(project.thumbnailId || 1),
      alt: project.id
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectInfo
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      onClick: () => window.open("./#".concat(project.id), '_blank'),
      title: props.intl.formatMessage(messages.hoverText, {
        author: userData.username,
        title: project.name
      })
    }, project.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.seeInsideButton,
      onClick: () => window.open("./editor.html#".concat(project.id), '_blank')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "See inside",
      id: "tw.menuBar.seeInside"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.projectStats
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "{fires} fires" // TODO: Icon + count
      ,

      id: "dash.project.stats.fires",
      values: {
        fires: ((_project$stats = project.stats) === null || _project$stats === void 0 ? void 0 : _project$stats.fires) || 0
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: _mystuff_css__WEBPACK_IMPORTED_MODULE_6___default.a.deleteProjectButton,
      onClick: () => handleDeleteProject(project.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__["FormattedMessage"], {
      defaultMessage: "Delete",
      id: "dash.mystuff.delete"
    }))));
  })))));
};
User.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_3__["intlShape"],
  isRtl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
};
const mapStateToProps = state => ({
  isRtl: state.locales.isRtl
});
const mapDispatchToProps = () => ({});
const ConnectedUser = Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(User));
const WrappedUser = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_4__["default"])(ConnectedUser, true);
Object(_app_target__WEBPACK_IMPORTED_MODULE_5__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedUser, null));

/***/ })

/******/ });
//# sourceMappingURL=mystuff.js.map