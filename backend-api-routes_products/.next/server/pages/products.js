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
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction ProductsPage() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`/api/products/`, fetcher);\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 10,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"error\"\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All products\"\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: product.name\n                    }, product.id, false, {\n                        fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_products/pages/products/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFekIsTUFBTUMsVUFBVSxDQUFDLEdBQUdDLE9BQVNDLFNBQVNELE1BQU1FLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0FBRW5ELFNBQVNDLGVBQWU7SUFDckMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRSxHQUFHVCwrQ0FBTUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFQztJQUNqRFMsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLElBQUksQ0FBQ0EsTUFBTTtRQUNULHFCQUFPLDhEQUFDSTtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlILE9BQU87UUFDVCxxQkFBTyw4REFBQ0c7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNBOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFTCxLQUFLTSxHQUFHLENBQUMsQ0FBQ0Msd0JBQ1QsOERBQUNDO2tDQUFxQkQsUUFBUUUsSUFBSTt1QkFBekJGLFFBQVFHLEVBQUU7Ozs7Ozs7Ozs7OztBQUs3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1hcGktcm91dGVzX3Byb2R1Y3RzLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/YTJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0c1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihgL2FwaS9wcm9kdWN0cy9gLCBmZXRjaGVyKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxoMT5sb2FkaW5nPC9oMT47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGgxPmVycm9yPC9oMT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+QWxsIHByb2R1Y3RzPC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QubmFtZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsImFyZ3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiUHJvZHVjdHNQYWdlIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImgxIiwidWwiLCJtYXAiLCJwcm9kdWN0IiwibGkiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/index.js"));
module.exports = __webpack_exports__;

})();