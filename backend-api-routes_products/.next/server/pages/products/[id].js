"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[id]";
exports.ids = ["pages/products/[id]"];
exports.modules = {

/***/ "./pages/products/[id].js":
/*!********************************!*\
  !*** ./pages/products/[id].js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction ProductPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    console.log(id);\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`/api/products/${id}`, fetcher);\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/[id].js\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: data.description\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/[id].js\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2U7QUFFeEMsTUFBTUUsVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRW5ELFNBQVNDLGNBQWM7SUFDcEMsTUFBTUMsU0FBU1Isc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRVMsR0FBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNLEVBQUVJLEtBQUksRUFBRSxHQUFHZCwrQ0FBTUEsQ0FBQyxDQUFDLGNBQWMsRUFBRVUsR0FBRyxDQUFDLEVBQUVSO0lBRS9DVSxRQUFRQyxHQUFHLENBQUNDO0lBRVosSUFBSSxDQUFDQSxNQUFNO1FBQ1QscUJBQU8sOERBQUNDO3NCQUFHOzs7Ozs7SUFDYixDQUFDO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNDO3NCQUFHRixLQUFLRyxXQUFXOzs7Ozs7O0FBRzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcHJvZHVjdHMvLi9wYWdlcy9wcm9kdWN0cy9baWRdLmpzPzk4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zb2xlLmxvZyhpZCk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoYC9hcGkvcHJvZHVjdHMvJHtpZH1gLCBmZXRjaGVyKTtcblxuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGgxPmxvYWRpbmc8L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJQcm9kdWN0UGFnZSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImgxIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[id].js"));
module.exports = __webpack_exports__;

})();