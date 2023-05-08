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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst fetcher = (...args)=>fetch(...args).then((res)=>res.json());\nfunction HomePage() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`/api/random-character`, fetcher);\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"loading\"\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n            lineNumber: 11,\n            columnNumber: 12\n        }, this);\n    }\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"error\"\n        }, void 0, false, {\n            fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Random character\"\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.firstName\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.lastName\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.twitter\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data.geohash\n            }, void 0, false, {\n                fileName: \"/Users/ekaterinachernova/Documents/workspace/spiced/challenges-spiced/backend-api-routes_random-character/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNjO0FBRXZDLE1BQU1FLFVBQVUsQ0FBQyxHQUFHQyxPQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtBQUVuRCxTQUFTQyxXQUFXO0lBQ2pDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1YsK0NBQU1BLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFRTtJQUN4RFMsUUFBUUMsR0FBRyxDQUFDSDtJQUVaLElBQUksQ0FBQ0EsTUFBTTtRQUNULHFCQUFPLDhEQUFDSTtzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELElBQUlILE9BQU87UUFDVCxxQkFBTyw4REFBQ0c7c0JBQUc7Ozs7OztJQUNiLENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNBOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFHTCxLQUFLTSxTQUFTOzs7Ozs7MEJBQ2xCLDhEQUFDRDswQkFBR0wsS0FBS08sUUFBUTs7Ozs7OzBCQUNqQiw4REFBQ0Y7MEJBQUdMLEtBQUtRLE9BQU87Ozs7OzswQkFDaEIsOERBQUNIOzBCQUFHTCxLQUFLUyxPQUFPOzs7Ozs7OztBQUd0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1hcGktcm91dGVzX3JhbmRvbS1jaGFyYWN0ZXIvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgZmV0Y2hlciA9ICguLi5hcmdzKSA9PiBmZXRjaCguLi5hcmdzKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAvYXBpL3JhbmRvbS1jaGFyYWN0ZXJgLCBmZXRjaGVyKTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxoMT5sb2FkaW5nPC9oMT47XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGgxPmVycm9yPC9oMT47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+UmFuZG9tIGNoYXJhY3RlcjwvaDE+XG4gICAgICA8cD57ZGF0YS5maXJzdE5hbWV9PC9wPlxuICAgICAgPHA+e2RhdGEubGFzdE5hbWV9PC9wPlxuICAgICAgPHA+e2RhdGEudHdpdHRlcn08L3A+XG4gICAgICA8cD57ZGF0YS5nZW9oYXNofTwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJzdHlsZWQiLCJmZXRjaGVyIiwiYXJncyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJIb21lUGFnZSIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJoMSIsInAiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInR3aXR0ZXIiLCJnZW9oYXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();