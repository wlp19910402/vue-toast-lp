(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueToasetDemo"] = factory();
	else
		root["VueToasetDemo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/lib/vue-toast.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      message: \"\",\n      visible: false\n    };\n  }\n});\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?./node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".toast-container{position:absolute;left:0;top:0;bottom:0;right:0;display:flex;justify-content:center;align-items:center}.toast-container .toast{width:180px;height:60px;line-height:60px;text-align:center;background-color:rgba(0,0,0,0.61);border-radius:10px;color:white}@keyframes fade-in{0%{opacity:0;transform:scale(0.7)}100%{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.7)}}.fade-in{animation-name:fade-in;animation-duration:0.3s;animation-fill-mode:both}.fade-out{animation-name:fade-out;animation-duration:0.3s;animation-fill-mode:both}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://VueToasetDemo/./node_modules/_css-loader@3.6.0@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.1@style-loader/dist/cjs.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.1@style-loader/dist/cjs.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./vue-toast.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?./node_modules/_style-loader@1.2.1@style-loader/dist/cjs.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://VueToasetDemo/./node_modules/_style-loader@1.2.1@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"section\", { staticClass: \"toast-container\" }, [\n    _c(\n      \"div\",\n      { staticClass: \"toast\", class: [_vm.visible ? \"fade-in\" : \"fade-out\"] },\n      [_c(\"span\", [_vm._v(_vm._s(_vm.message))])]\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueToasetDemo/./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_toast_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-toast.vue */ \"./src/lib/vue-toast.vue\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\nvar Toast = {};\n\nToast.install = function (Vue, options) {\n  var opt = {\n    duration: 3000\n  };\n\n  for (var key in options) {\n    opt[key] = options[key];\n  }\n\n  Vue.prototype.$toast = function (message, option) {\n    var callback = '';\n\n    if (_typeof(option) === 'object') {\n      for (var key in option) {\n        opt[key] = option[key];\n      }\n    } else if (typeof option === 'function') {\n      callback = option;\n    }\n\n    var ToastController = Vue.extend(_vue_toast_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    var instance = new ToastController().$mount(document.createElement('div'));\n    document.body.appendChild(instance.$el);\n    instance.message = message;\n    instance.visible = true;\n    setTimeout(function () {\n      instance.visible = false;\n      setTimeout(function () {\n        document.body.removeChild(instance.$el);\n        callback && callback();\n      });\n    }, opt.duration);\n  }; //后期扩展\n\n\n  var funArr = ['show', 'success', 'info', 'error'];\n  funArr.forEach(function (type) {\n    Vue.prototype.$toast[type] = function (tips, option) {\n      return Vue.prototype.$toast(tips, option);\n    };\n  });\n};\n\nif (typeof window !== 'undefined' && window.Vue) {\n  window.Vue.use(Toast);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toast);\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/index.js?");

/***/ }),

/***/ "./src/lib/vue-toast.vue":
/*!*******************************!*\
  !*** ./src/lib/vue-toast.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-toast.vue?vue&type=template&id=14e8ee0d& */ \"./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d&\");\n/* harmony import */ var _vue_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-toast.vue?vue&type=script&lang=js& */ \"./src/lib/vue-toast.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-toast.vue?vue&type=style&index=0&lang=scss& */ \"./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_15_9_3_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _vue_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/lib/vue-toast.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?");

/***/ }),

/***/ "./src/lib/vue-toast.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./src/lib/vue-toast.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.1.0@babel-loader/lib??ref--0!../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./vue-toast.vue?vue&type=script&lang=js& */ \"./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_ref_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?");

/***/ }),

/***/ "./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************!*\
  !*** ./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_style-loader@1.2.1@style-loader/dist/cjs.js!../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./vue-toast.vue?vue&type=style&index=0&lang=scss& */ \"./node_modules/_style-loader@1.2.1@style-loader/dist/cjs.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_sass-loader@7.3.1@sass-loader/dist/cjs.js!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=style&index=0&lang=scss&\");\n/* harmony import */ var _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_1_2_1_style_loader_dist_cjs_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?");

/***/ }),

/***/ "./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d&":
/*!**************************************************************!*\
  !*** ./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./vue-toast.vue?vue&type=template&id=14e8ee0d& */ \"./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.3@vue-loader/lib/index.js?!./src/lib/vue-toast.vue?vue&type=template&id=14e8ee0d&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_vue_toast_vue_vue_type_template_id_14e8ee0d___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueToasetDemo/./src/lib/vue-toast.vue?");

/***/ })

/******/ });
});