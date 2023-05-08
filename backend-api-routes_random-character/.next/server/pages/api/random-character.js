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
exports.id = "pages/api/random-character";
exports.ids = ["pages/api/random-character"];
exports.modules = {

/***/ "chance":
/*!*************************!*\
  !*** external "chance" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("chance");

/***/ }),

/***/ "(api)/./pages/api/random-character.js":
/*!***************************************!*\
  !*** ./pages/api/random-character.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hendler)\n/* harmony export */ });\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ \"chance\");\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction hendler(request, response) {\n    const chance = new (chance__WEBPACK_IMPORTED_MODULE_0___default())();\n    const character = {\n        firstName: chance.first(),\n        lastName: chance.last(),\n        twitter: chance.twitter(),\n        geohash: chance.geohash()\n    };\n    response.status(200).json(character);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFuZG9tLWNoYXJhY3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFYixTQUFTQyxRQUFRQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUNqRCxNQUFNQyxTQUFTLElBQUlKLCtDQUFNQTtJQUV6QixNQUFNSyxZQUFZO1FBQ2hCQyxXQUFXRixPQUFPRyxLQUFLO1FBQ3ZCQyxVQUFVSixPQUFPSyxJQUFJO1FBQ3JCQyxTQUFTTixPQUFPTSxPQUFPO1FBQ3ZCQyxTQUFTUCxPQUFPTyxPQUFPO0lBQ3pCO0lBRUFSLFNBQVNTLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNSO0FBQzVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLWFwaS1yb3V0ZXNfcmFuZG9tLWNoYXJhY3Rlci8uL3BhZ2VzL2FwaS9yYW5kb20tY2hhcmFjdGVyLmpzPzAzM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoYW5jZSBmcm9tIFwiY2hhbmNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlbmRsZXIocmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgY29uc3QgY2hhbmNlID0gbmV3IENoYW5jZSgpO1xuXG4gIGNvbnN0IGNoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6IGNoYW5jZS5maXJzdCgpLFxuICAgIGxhc3ROYW1lOiBjaGFuY2UubGFzdCgpLFxuICAgIHR3aXR0ZXI6IGNoYW5jZS50d2l0dGVyKCksXG4gICAgZ2VvaGFzaDogY2hhbmNlLmdlb2hhc2goKSxcbiAgfTtcblxuICByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKGNoYXJhY3Rlcik7XG59XG4iXSwibmFtZXMiOlsiQ2hhbmNlIiwiaGVuZGxlciIsInJlcXVlc3QiLCJyZXNwb25zZSIsImNoYW5jZSIsImNoYXJhY3RlciIsImZpcnN0TmFtZSIsImZpcnN0IiwibGFzdE5hbWUiLCJsYXN0IiwidHdpdHRlciIsImdlb2hhc2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/random-character.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/random-character.js"));
module.exports = __webpack_exports__;

})();