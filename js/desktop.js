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
/******/ 		"desktop": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/desktop/desktop.jsx","vendors~account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~93f8d0c3","account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~register~user"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

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

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/desktop/desktop.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/desktop/desktop.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--page-background);\r\n    color: var(--page-foreground);\r\n}\r\n\r\na {\r\n    color: var(--link-color);\r\n}\r\n\r\n.desktop_main_3baHe section {\r\n    max-width: 900px;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.desktop_header-container_2NW36 {\r\n    color: white;\r\n    background-color: var(--looks-secondary);\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.desktop_header-text_MpG9y {\r\n\r\n}\r\n\r\n.desktop_download-list_19bAb {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.desktop_screenshot_3spjz {\r\n    filter: drop-shadow(0 0 1rem var(--ui-black-transparent));\r\n    border-radius: 0.5rem;\r\n    background-color: var(--page-background);\r\n    width: 100%;\r\n}\r\n\r\n.desktop_download-button_W0JAR {\r\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;\r\n    padding: 0.75rem 1rem;\r\n    background: var(--looks-secondary);\r\n    color: white;\r\n    border: 1px solid var(--looks-secondary);\r\n    font-weight: 600;\r\n    font-size: 0.85rem;\r\n}\r\n", ""]);

// exports
exports.locals = {
	"main": "desktop_main_3baHe",
	"header-container": "desktop_header-container_2NW36",
	"headerContainer": "desktop_header-container_2NW36",
	"header-text": "desktop_header-text_MpG9y",
	"headerText": "desktop_header-text_MpG9y",
	"download-list": "desktop_download-list_19bAb",
	"downloadList": "desktop_download-list_19bAb",
	"screenshot": "desktop_screenshot_3spjz",
	"download-button": "desktop_download-button_W0JAR",
	"downloadButton": "desktop_download-button_W0JAR"
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

/***/ "./src/playground/desktop/desktop.css":
/*!********************************************!*\
  !*** ./src/playground/desktop/desktop.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./desktop.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/desktop/desktop.css");

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

/***/ "./src/playground/desktop/desktop.jsx":
/*!********************************************!*\
  !*** ./src/playground/desktop/desktop.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _desktop_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop.css */ "./src/playground/desktop/desktop.css");
/* harmony import */ var _desktop_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_desktop_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/button/button.jsx */ "./src/components/button/button.jsx");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _screenshot_light_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screenshot-light.png */ "./src/playground/desktop/screenshot-light.png");
/* harmony import */ var _screenshot_light_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_screenshot_light_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _screenshot_dark_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screenshot-dark.png */ "./src/playground/desktop/screenshot-dark.png");
/* harmony import */ var _screenshot_dark_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_screenshot_dark_png__WEBPACK_IMPORTED_MODULE_9__);










const version = '2.2.0';
const releasesDownloadUrl = "https://github.com/DashBlocks/desktop/releases/download/v${version}";

/* eslint-disable react/jsx-no-literals */

const theme = Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_7__["detectTheme"])();
Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_6__["applyGuiColors"])(theme);
const Desktop = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, _lib_brand__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"], " Desktop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Dash as a desktop app."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.screenshot,
  loading: "lazy",
  src: theme.isDark() ? _screenshot_dark_png__WEBPACK_IMPORTED_MODULE_9___default.a : _screenshot_light_png__WEBPACK_IMPORTED_MODULE_8___default.a
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Download (v", version, "):")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Windows:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop.Setup.").concat(version, ".exe"), '_blank', 'noreferrer');
  }
}, "Download for Windows (64-bit)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Linux:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, ".AppImage"), '_blank', 'noreferrer');
  }
}, "Download for AppImage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, "-arm64.AppImage"), '_blank', 'noreferrer');
  }
}, "Download for AppImage (ARM 64-bit)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "macOS:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadList
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, ".dmg"), '_blank', 'noreferrer');
  }
}, "Download for macOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, "-arm64.dmg"), '_blank', 'noreferrer');
  }
}, "Download for macOS (ARM 64-bit)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, "-mac.zip"), '_blank', 'noreferrer');
  }
}, "Download ZIP for macOS"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_button_button_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
  className: _desktop_css__WEBPACK_IMPORTED_MODULE_3___default.a.downloadButton,
  onClick: () => {
    window.open("".concat(releasesDownloadUrl, "/Dash.Desktop-").concat(version, "-arm64-mac.zip"), '_blank', 'noreferrer');
  }
}, "Download ZIP for macOS (ARM 64-bit)"))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Desktop, null));

/***/ }),

/***/ "./src/playground/desktop/screenshot-dark.png":
/*!****************************************************!*\
  !*** ./src/playground/desktop/screenshot-dark.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/49f5a3248030302a7f573497d20885d5.png";

/***/ }),

/***/ "./src/playground/desktop/screenshot-light.png":
/*!*****************************************************!*\
  !*** ./src/playground/desktop/screenshot-light.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/f458a864064215d4c1f59bc21ccae5d7.png";

/***/ })

/******/ });
//# sourceMappingURL=desktop.js.map