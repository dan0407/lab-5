/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Product/Product.css":
/*!********************************************!*\
  !*** ./src/components/Product/Product.css ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".cardSection {\\r\\n\\tbackground: #fff;\\r\\n\\tbox-shadow: 0 2px 89px 73px rgba(0, 0, 0, 0.1);\\r\\n\\tborder-radius: 10px;\\r\\n\\toverflow: hidden;\\r\\n\\tmargin-bottom: 3%;\\r\\n\\twidth: 31%;\\r\\n}\\r\\n\\r\\n.infoSection {\\r\\n\\tpadding: 20px;\\r\\n\\twidth: 80%;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n\\tfont-size: 1.5rem;\\r\\n\\tfont-weight: bold;\\r\\n\\tmargin-bottom: 10px;\\r\\n}\\r\\n\\r\\n.text {\\r\\n\\tfont-size: 1rem;\\r\\n\\tline-height: 1.6;\\r\\n\\tmargin-bottom: 10px;\\r\\n}\\r\\n.image {\\r\\n\\twidth: 106%;\\r\\n\\theight: 458px;\\r\\n\\tmargin-bottom: 20px;\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n}\\r\\n\\r\\np:last-of-type {\\r\\n\\tmargin-bottom: 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Product/Product.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://dca_scoffolding/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/components/Product/Product.ts":
/*!*******************************************!*\
  !*** ./src/components/Product/Product.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AttributeCard\": () => (/* binding */ AttributeCard),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.css */ \"./src/components/Product/Product.css\");\n\nvar AttributeCard;\n(function (AttributeCard) {\n    AttributeCard[\"name\"] = \"name\";\n    AttributeCard[\"image\"] = \"image\";\n    AttributeCard[\"Title\"] = \"Title\";\n    AttributeCard[\"Description\"] = \"Description\";\n    AttributeCard[\"category\"] = \"Category\";\n    AttributeCard[\"Price\"] = \"Price\";\n    AttributeCard[\"Rating\"] = \"Rating\";\n})(AttributeCard || (AttributeCard = {}));\nclass card extends HTMLElement {\n    constructor() {\n        super(); // always call super() first in the ctor.\n        this.attachShadow({ mode: 'open' });\n    }\n    static get observedAttributes() {\n        const attrs = {\n            name: null,\n            image: null,\n            Title: null,\n            Description: null,\n            Category: null,\n            Price: null,\n            Rating: null,\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            case AttributeCard.Price:\n                this.Price = newValue ? Number(newValue) : undefined;\n                break;\n            case AttributeCard.Rating:\n                this.Rating = newValue ? Number(newValue) : undefined;\n                break;\n            default:\n                this[propName] = newValue;\n                break;\n        }\n        this.render();\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = ``;\n            const css = this.ownerDocument.createElement('style');\n            css.innerHTML = _Product_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(css);\n            this.shadowRoot.innerHTML += `\r\n\t\t\t<section class=\"cardSection\">\r\n\r\n\t\t <div class=\"infoSection\">\r\n\t\t\t\t <h1>Name: ${this.name}</h1>\r\n\t\t\t\t <img class=\"image\" src=\"${this.image}\" alt=\"\">\r\n\t\t\t\t <p class=\"text\">Title: ${this.Title}</p>\r\n\t\t\t\t <p class=\"text\">Description: ${this.Description}</p>\r\n\t\t\t\t <p class=\"text\">Price: ${this.Price}</p>\r\n\t\t\t\t <p class=\"text\">Rating: ${this.Rating}</p>\r\n\t\t </div>\r\n </section>\r\n\r\n `;\n        }\n    }\n}\ncustomElements.define('my-card', card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Product/Product.ts?");

/***/ }),

/***/ "./src/components/indexapa.ts":
/*!************************************!*\
  !*** ./src/components/indexapa.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _components_Product_Product__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Product/Product */ \"./src/components/Product/Product.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/indexapa.ts?");

/***/ }),

/***/ "./src/indexab.ts":
/*!************************!*\
  !*** ./src/indexab.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_indexapa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/indexapa */ \"./src/components/indexapa.ts\");\n/* harmony import */ var _screens_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard */ \"./src/screens/dashboard.ts\");\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        var _a;\n        const something = this.ownerDocument.createElement('app-dashboard');\n        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(something);\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/indexab.ts?");

/***/ }),

/***/ "./src/screens/dashboard.ts":
/*!**********************************!*\
  !*** ./src/screens/dashboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Product/Product */ \"./src/components/Product/Product.ts\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.ts\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/actions */ \"./src/store/actions.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass Dashboard extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: 'open' });\n        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.addObserver)(this);\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            const action = yield (0,_store_actions__WEBPACK_IMPORTED_MODULE_2__.GetProductActiondata)();\n            (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.dispatch)(action);\n        });\n    }\n    render() {\n        _store_index__WEBPACK_IMPORTED_MODULE_1__.appState.products.forEach((products) => {\n            var _a;\n            const card = this.ownerDocument.createElement('my-card');\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.name, products.name);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.image, products.image);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.Title, products.Title);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.Description, products.Description);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.Category, products.Category);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.Price, products.Price);\n            card.setAttribute(_components_Product_Product__WEBPACK_IMPORTED_MODULE_0__.AttributeCard.Rating, products.Rating);\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(card);\n        });\n    }\n}\ncustomElements.define('app-dashboard', Dashboard);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/screens/dashboard.ts?");

/***/ }),

/***/ "./src/services/getProduts.ts":
/*!************************************!*\
  !*** ./src/services/getProduts.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"vainito\": () => (/* binding */ vainito)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst vainito = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const data = yield fetch('https://fakestoreapi.com/products').then(res => res.json());\n        return data;\n    }\n    catch (error) {\n        console.error(Error);\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/services/getProduts.ts?");

/***/ }),

/***/ "./src/store/actions.ts":
/*!******************************!*\
  !*** ./src/store/actions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetProductActiondata\": () => (/* binding */ GetProductActiondata),\n/* harmony export */   \"GetshoppingItemsActiondata\": () => (/* binding */ GetshoppingItemsActiondata),\n/* harmony export */   \"SaveshoppingItemsActiondata\": () => (/* binding */ SaveshoppingItemsActiondata)\n/* harmony export */ });\n/* harmony import */ var _services_getProduts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getProduts */ \"./src/services/getProduts.ts\");\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst GetProductActiondata = () => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield (0,_services_getProduts__WEBPACK_IMPORTED_MODULE_0__.vainito)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.productActions.GETPRODUCTS,\n        payload: data\n    };\n});\nconst GetshoppingItemsActiondata = () => __awaiter(void 0, void 0, void 0, function* () {\n    const data = yield (0,_services_getProduts__WEBPACK_IMPORTED_MODULE_0__.vainito)();\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.shoppingItemsActions.GETSHOPPINGITEMS,\n        payload: data\n    };\n});\nconst SaveshoppingItemsActiondata = (product) => {\n    return {\n        action: _types_store__WEBPACK_IMPORTED_MODULE_1__.shoppingItemsActions.SAVESHOPPINGITEMS,\n        payload: product\n    };\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/actions.ts?");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addObserver\": () => (/* binding */ addObserver),\n/* harmony export */   \"appState\": () => (/* binding */ appState),\n/* harmony export */   \"dispatch\": () => (/* binding */ dispatch)\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.ts\");\n\nlet appState = {\n    products: [],\n    shoppingitems: [],\n};\nlet observers = [];\nconst dispatch = (action) => {\n    const clone = JSON.parse(JSON.stringify(appState));\n    appState = (0,_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer)(action, clone);\n    observers.forEach((o) => o.render());\n};\nconst addObserver = (ref) => {\n    observers = [...observers, ref];\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/index.ts?");

/***/ }),

/***/ "./src/store/reducer.ts":
/*!******************************!*\
  !*** ./src/store/reducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* binding */ reducer)\n/* harmony export */ });\n/* harmony import */ var _types_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/store */ \"./src/types/store.ts\");\n\nconst reducer = (currentAction, currentState) => {\n    const { action, payload } = currentAction;\n    console.log(action, payload);\n    switch (action) {\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.productActions.GETPRODUCTS:\n            return Object.assign(Object.assign({}, currentState), { products: payload });\n        case _types_store__WEBPACK_IMPORTED_MODULE_0__.shoppingItemsActions.GETSHOPPINGITEMS:\n            return Object.assign(Object.assign({}, currentState), { shoppingitems: payload });\n        default:\n            return currentState;\n    }\n};\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/store/reducer.ts?");

/***/ }),

/***/ "./src/types/store.ts":
/*!****************************!*\
  !*** ./src/types/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"productActions\": () => (/* binding */ productActions),\n/* harmony export */   \"shoppingItemsActions\": () => (/* binding */ shoppingItemsActions)\n/* harmony export */ });\nvar productActions;\n(function (productActions) {\n    productActions[\"GETPRODUCTS\"] = \"GETPRODUCTS\";\n})(productActions || (productActions = {}));\nvar shoppingItemsActions;\n(function (shoppingItemsActions) {\n    shoppingItemsActions[\"GETSHOPPINGITEMS\"] = \"GETSHOPPINGITEMS\";\n    shoppingItemsActions[\"SAVESHOPPINGITEMS\"] = \"SAVESHOPPINGITEMS\";\n})(shoppingItemsActions || (shoppingItemsActions = {}));\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/types/store.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/indexab.ts");
/******/ 	
/******/ })()
;