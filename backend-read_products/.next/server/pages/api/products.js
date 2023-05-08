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
exports.id = "pages/api/products";
exports.ids = ["pages/api/products"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/connect.js":
/*!***********************!*\
  !*** ./db/connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9jb25uZWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDQTtBQUNKLENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBRTtJQUNWO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vZGIvY29ubmVjdC5qcz9jNzQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbFwiXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/connect.js\n");

/***/ }),

/***/ "(api)/./db/models/Product.js":
/*!******************************!*\
  !*** ./db/models/Product.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema  } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst productSchema = new Schema({\n    product: {\n        id: Number,\n        name: String,\n        description: String,\n        price: Number,\n        currency: String\n    }\n});\nconst Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Product\", productSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUHJvZHVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxTQUFTO1FBQ1BDLElBQUlDO1FBQ0pDLE1BQU1DO1FBQ05DLGFBQWFEO1FBQ2JFLE9BQU9KO1FBQ1BLLFVBQVVIO0lBQ1o7QUFDRjtBQUVBLE1BQU1JLFVBQ0pYLGdFQUF1QixJQUFJQSxxREFBYyxDQUFDLFdBQVdFO0FBRXZELGlFQUFlUyxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vZGIvbW9kZWxzL1Byb2R1Y3QuanM/Mjk1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcblxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBwcm9kdWN0OiB7XG4gICAgaWQ6IE51bWJlcixcbiAgICBuYW1lOiBTdHJpbmcsXG4gICAgZGVzY3JpcHRpb246IFN0cmluZyxcbiAgICBwcmljZTogTnVtYmVyLFxuICAgIGN1cnJlbmN5OiBTdHJpbmcsXG4gIH0sXG59KTtcblxuY29uc3QgUHJvZHVjdCA9XG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKFwiUHJvZHVjdFwiLCBwcm9kdWN0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInByb2R1Y3RTY2hlbWEiLCJwcm9kdWN0IiwiaWQiLCJOdW1iZXIiLCJuYW1lIiwiU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImN1cnJlbmN5IiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/models/Product.js\n");

/***/ }),

/***/ "(api)/./pages/api/products/index.js":
/*!*************************************!*\
  !*** ./pages/api/products/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../db/connect */ \"(api)/./db/connect.js\");\n/* harmony import */ var _db_models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../db/models/Product */ \"(api)/./db/models/Product.js\");\n\n\nasync function handler(request, response) {\n    await (0,_db_connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (request.method === \"GET\") {\n        const products = await _db_models_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n        return response.status(200).json(products);\n    } else {\n        return response.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZHVjdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9DO0FBQ2E7QUFFbEMsZUFBZUUsUUFBUUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFDdkQsTUFBTUosdURBQVNBO0lBRWYsSUFBSUcsUUFBUUUsTUFBTSxLQUFLLE9BQU87UUFDNUIsTUFBTUMsV0FBVyxNQUFNTCwrREFBWTtRQUNuQyxPQUFPRyxTQUFTSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtJQUNuQyxPQUFPO1FBQ0wsT0FBT0YsU0FBU0ksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ25FLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vcGFnZXMvYXBpL3Byb2R1Y3RzL2luZGV4LmpzPzU5NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiL2RiL2Nvbm5lY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi8uLi9kYi9tb2RlbHMvUHJvZHVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xuXG4gIGlmIChyZXF1ZXN0Lm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgUHJvZHVjdC5maW5kKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24ocHJvZHVjdHMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlByb2R1Y3QiLCJoYW5kbGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwibWV0aG9kIiwicHJvZHVjdHMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/products/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/products/index.js"));
module.exports = __webpack_exports__;

})();