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
/******/ 		"credits": 0
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
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~93f8d0c3","account-settings~addon-settings~credits~desktop~editor~embed~fullscreen~login~mystuff~player~register~user"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* overridden by src/lib/themes/guiHelpers.js */\r\n\r\n* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--page-background);\r\n    color: var(--page-foreground);\r\n}\r\n\r\na {\r\n    color: var(--link-color);\r\n}\r\n\r\n.credits_main_3LZ_8 section {\r\n    max-width: 900px;\r\n    margin: auto;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.credits_header-container_Vx3wA {\r\n    color: white;\r\n    background-color: var(--looks-secondary);\r\n    padding: 20px 0;\r\n    text-align: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.credits_header-text_1KkFs {\r\n\r\n}\r\n\r\n.credits_users_3H8Bg {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.credits_user-image_3BJ_h {\r\n    margin-right: 12px;\r\n}\r\n\r\n.credits_user_Hnnpd {\r\n    display: flex;\r\n    align-items: center;\r\n    width: 300px;\r\n    padding: 4px;\r\n    border-radius: 4px;\r\n    font-size: 1.25rem;\r\n    color: inherit !important;\r\n    text-decoration: none;\r\n    transition: background .2s;\r\n}\r\n\r\n.credits_user_Hnnpd:link:hover {\r\n    background: var(--ui-black-transparent);\r\n}\r\n", ""]);

// exports
exports.locals = {
	"main": "credits_main_3LZ_8",
	"header-container": "credits_header-container_Vx3wA",
	"headerContainer": "credits_header-container_Vx3wA",
	"header-text": "credits_header-text_1KkFs",
	"headerText": "credits_header-text_1KkFs",
	"users": "credits_users_3H8Bg",
	"user-image": "credits_user-image_3BJ_h",
	"userImage": "credits_user-image_3BJ_h",
	"user": "credits_user_Hnnpd"
};

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./credits.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

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

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
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
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/brand */ "./src/lib/brand.js");
/* harmony import */ var _lib_brand__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_brand__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/themes/guiHelpers */ "./src/lib/themes/guiHelpers.js");
/* harmony import */ var _lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/themes/themePersistance */ "./src/lib/themes/themePersistance.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }









/* eslint-disable react/jsx-no-literals */

Object(_lib_themes_guiHelpers__WEBPACK_IMPORTED_MODULE_5__["applyGuiColors"])(Object(_lib_themes_themePersistance__WEBPACK_IMPORTED_MODULE_6__["detectTheme"])());
document.documentElement.lang = 'en';
const User = _ref => {
  let {
    image,
    text,
    href
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    loading: "lazy",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.userInfo
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const UserList = _ref2 => {
  let {
    users
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.users
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerText
}, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " project is made possible by the work of many volunteers.")), _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"] !== 'Dash' &&
/*#__PURE__*/
// Be kind and considerate. Don't remove this :)
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://dashblocks.github.io/"
}, "Dash"), ".")), _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"] !== 'TurboWarp' &&
/*#__PURE__*/
// Be kind and considerate. Don't remove this :)
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TurboWarp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/"
}, "TurboWarp"), " is the parent project. ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/credits"
}, "TurboWarp contributors"), " but is not endorsed by TurboWarp in any way.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Other modifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " uses code from other free and open-source TurboWarp modifications/visual programming languages:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://penguinmod.com"
}, "PenguinMod"), ". ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " uses an implementation of extensible blocks, Custom Block Shapes API and has a fork of the PenguinMod's paint editor."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://ampmod.codeberg.page"
}, "AmpMod"), ". ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " uses an implementation of array monitors (only 1D) and has some blocks clearly inspired to AmpMod's blocks from Arrays category.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Also try them out!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " developers and people who contributed to ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " and parent project(s) are listed here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].contributors
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dash Extensions Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "People who develop extensions for Dash Extensions Gallery or whose extensions are included in it are listed here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].dashExtensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TurboWarp Extension Gallery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "People who develop extensions for TurboWarp Extension Gallery are listed here. Thanks to them for the wonderful and useful extensions."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].twExtensionDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Documentation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "People who write the pages in the documentation or help to write are listed here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].docs
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More than 100 people have helped translate ", _lib_brand__WEBPACK_IMPORTED_MODULE_4__["APP_NAME"], " and its addons into many languages \u2014 far more than we could hope to list here.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))));
Object(_app_target__WEBPACK_IMPORTED_MODULE_2__["default"])(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null));

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const links = {
  scratch: {
    avatar: userID => "https://trampoline.turbowarp.org/avatars/".concat(userID),
    href: username => "https://scratch.mit.edu/users/".concat(username, "/")
  },
  github: {
    avatar: userID => "https://avatars.githubusercontent.com/u/".concat(userID, "?v=4"),
    href: username => "https://github.com/".concat(username, "/")
  },
  dash: {
    avatar: () => null,
    // We can't get link to avatar of Dasher without a request to API.
    href: username => "https://dashblocks.github.io/user#".concat(username)
  }
};
const fromHardcoded = _ref => {
  let {
    userID = '0',
    username,
    link = "scratch"
  } = _ref;
  const result = {
    text: username
  };
  if (username && (link === 'dash' || userID !== '0')) {
    result.image = links[link].avatar(userID);
    result.href = links[link].href(username);
  }
  return result;
};

// The lists below are in no particular order.

const contributors = [{
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '128887584',
  username: 'FurryR'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '102286767',
  username: 'damir2809'
}, {
  userID: '106478819',
  username: 'scratch_craft_2'
}, {
  link: 'github',
  userID: '133135758',
  username: 'DDen4ik-12'
}, {
  userID: '127142246',
  username: 'AnonimKing24'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '141930175',
  username: 'SimonShiki'
}, {
  userID: '34824813',
  username: 'Geotale'
}, {
  username: 'Wowfunhappy'
}].map(fromHardcoded);
const addonDevelopers = [{
  userID: '34018398',
  username: 'Jeffalo'
}, {
  userID: '64184234',
  username: 'ErrorGamer2000'
}, {
  userID: '41616512',
  username: 'pufferfish101007'
}, {
  userID: '61409215',
  username: 'TheColaber'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '10817178',
  username: 'apple502j'
}, {
  userID: '16947341',
  username: '--Explosion--'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '9981676',
  username: 'NitroCipher'
}, {
  userID: '2561680',
  username: 'lisa_wolfgang'
}, {
  userID: '60000111',
  username: 'GDUcrash'
}, {
  userID: '4648559',
  username: 'World_Languages'
}, {
  userID: '17340565',
  username: 'GarboMuffin'
}, {
  userID: '5354974',
  username: 'Chrome_Cat'
}, {
  userID: '34455896',
  username: 'summerscar'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  userID: '9636514',
  username: 'Tacodiva7729'
}, {
  userID: '14792872',
  username: '_nix'
}, {
  userID: '30323614',
  username: 'BarelySmooth'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  username: 'DNin01'
}, {
  userID: '16426047',
  username: 'Maximouse'
}, {
  username: 'retronbv'
}, {
  username: 'GrahamSH'
}, {
  userID: '22529928',
  username: 'simiagain'
}, {
  username: 'Secret-chest'
}, {
  userID: '11677378',
  username: 'Mr_MPH'
}, {
  username: 'TheKodeToad'
}, {
  link: 'github',
  userID: 139097378,
  username: 'SharkPool-SP'
}].map(fromHardcoded);
const dashExtensionDevelopers = [{
  // Is a not actual user, but is a global game distributor, that have organization profile on GitHub.
  link: 'github',
  userID: '150370603',
  username: 'Playgama'
}, {
  link: 'github',
  userID: '183589211',
  username: 'sergei-playgama'
}, {
  link: 'github',
  userID: '75538611',
  username: 'timaaos'
}, {
  userID: '106478819',
  username: 'scratch_craft_2'
}, {
  link: 'github',
  userID: '133135758',
  username: 'DDen4ik-12'
}, {
  userID: '102286767',
  username: 'damir2809'
}, {
  userID: '13777063',
  username: 'ttt999'
}, {
  userID: '111530237',
  username: 'By-ROlil-CO'
}, {
  userID: '127142246',
  username: 'AnonimKing24'
}, {
  userID: '65268342',
  username: 'shilenin'
}, {
  link: 'dash',
  username: 'polzovatel_8787'
}, {
  userID: '136111790',
  username: 'QBacks'
}].map(fromHardcoded);

// generated by TurboWarp/extensions/scripts/get-credits-for-gui.js
const twExtensionDevelopers = [{
  username: '-SIPC-'
}, {
  username: '0832'
}, {
  userID: '74246431',
  username: '0znzw'
}, {
  userID: '17235330',
  username: 'aleb2005'
}, {
  username: 'BlueDome77'
}, {
  username: 'ClaytonTDM'
}, {
  userID: '37070511',
  username: 'cs2627883'
}, {
  userID: '64691048',
  username: 'CST1229'
}, {
  userID: '41219524',
  username: 'CubesterYT'
}, {
  userID: '33988895',
  username: 'D-ScratchNinja'
}, {
  username: 'DT'
}, {
  userID: '1882674',
  username: 'griffpatch'
}, {
  userID: '41876695',
  username: 'JeremyGamer13'
}, {
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  username: 'MikeDEV'
}, {
  userID: '62325737',
  username: 'mybearworld'
}, {
  userID: '62950341',
  username: 'NamelessCat'
}, {
  username: 'NOname-awa'
}, {
  userID: '26959223',
  username: 'pinksheep2917'
}, {
  username: 'pumpkinhasapatch'
}, {
  userID: '126715567',
  username: 'PwLDev'
}, {
  userID: '139929771',
  username: 'qxsck'
}, {
  userID: '29118689',
  username: 'RedMan13'
}, {
  userID: '80038021',
  username: 'RixTheTyrunt'
}, {
  userID: '45777723',
  username: 'DemonX5'
}, {
  userID: '14880401',
  username: 'Sheep_maker'
}, {
  userID: '103496265',
  username: 'shreder95ua'
}, {
  userID: '72467731',
  username: 'Skyhigh173'
}, {
  userID: '52066199',
  username: 'softed'
}, {
  username: 'TheShovel'
}, {
  userID: '105362329',
  username: 'TrueFantom'
}, {
  userID: '19133274',
  username: 'Vadik1'
}, {
  username: 'veggiecan0419'
}, {
  userID: '82486672',
  username: 'lolecksdeehaha'
}, {
  userID: '3318598',
  username: 'plant2014'
}, {
  userID: '128778351',
  username: 'XmerOriginals'
}, {
  username: 'ZXMushroom63'
}].map(fromHardcoded);
const docs = [{
  userID: '12498592',
  username: 'LilyMakesThings'
}, {
  username: 'DNin01'
}, {
  username: 'Samq64'
}, {
  username: '61080GBA'
}, {
  username: 'adazem009'
}, {
  username: 'sajtosteszta32'
}, {
  username: 'yoyomonem'
}, {
  userID: '55742784',
  username: 'RedGuy7'
}, {
  username: '28klotlucas2'
}, {
  username: 'PPPDUD'
}, {
  username: 'BackThePortal'
}, {
  username: 'Naleksuh'
}, {
  userID: '102286767',
  username: 'damir2809'
}, {
  link: 'github',
  userID: '133135758',
  username: 'DDen4ik-12'
}].map(fromHardcoded);
/* harmony default export */ __webpack_exports__["default"] = ({
  contributors: shuffle(contributors),
  addonDevelopers: shuffle(addonDevelopers),
  dashExtensionDevelopers: shuffle(dashExtensionDevelopers),
  twExtensionDevelopers: shuffle(twExtensionDevelopers),
  docs: shuffle(docs)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map