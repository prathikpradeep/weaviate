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
exports.id = "app/api/search/route";
exports.ids = ["app/api/search/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_prathikpradeep_weaviate_frontend_src_app_api_search_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/search/route.js */ \"(rsc)/./src/app/api/search/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/search/route\",\n        pathname: \"/api/search\",\n        filename: \"route\",\n        bundlePath: \"app/api/search/route\"\n    },\n    resolvedPagePath: \"/Users/prathikpradeep/weaviate-frontend/src/app/api/search/route.js\",\n    nextConfigOutput,\n    userland: _Users_prathikpradeep_weaviate_frontend_src_app_api_search_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/search/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZWFyY2glMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnNlYXJjaCUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRnByYXRoaWtwcmFkZWVwJTJGd2VhdmlhdGUtZnJvbnRlbmQlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGcHJhdGhpa3ByYWRlZXAlMkZ3ZWF2aWF0ZS1mcm9udGVuZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDbUI7QUFDaEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF2aWF0ZS1mcm9udGVuZC8/MzJmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvcHJhdGhpa3ByYWRlZXAvd2VhdmlhdGUtZnJvbnRlbmQvc3JjL2FwcC9hcGkvc2VhcmNoL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zZWFyY2gvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZWFyY2hcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3NlYXJjaC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wcmF0aGlrcHJhZGVlcC93ZWF2aWF0ZS1mcm9udGVuZC9zcmMvYXBwL2FwaS9zZWFyY2gvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlYXJjaC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/search/route.js":
/*!*************************************!*\
  !*** ./src/app/api/search/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var weaviate_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weaviate-ts-client */ \"(rsc)/../node_modules/weaviate-ts-client/dist/index.mjs\");\n\nasync function POST(req) {\n    try {\n        const { query } = await req.json();\n        const client = weaviate_ts_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].client({\n            scheme: process.env.WEAVIATE_HOST.startsWith(\"https\") ? \"https\" : \"http\",\n            host: process.env.WEAVIATE_HOST.replace(/^https?:\\/\\//, \"\"),\n            apiKey: new weaviate_ts_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ApiKey(process.env.WEAVIATE_API_KEY),\n            headers: {\n                \"X-Openai-Api-Key\": process.env.OPENAI_API_KEY\n            }\n        });\n        const properties = [\n            \"_additional { answer { hasAnswer result } distance }\"\n        ];\n        const result = await client.graphql.get().withClassName(\"FAQ\").withFields(properties).withAsk({\n            question: query,\n            properties: [\n                \"answer\"\n            ]\n        }).withLimit(1).do();\n        console.log(\"Received response from Weaviate:\", result);\n        // Format the response\n        const formattedResult = result.data.Get.FAQ.map((item)=>({\n                question: query,\n                answer: item._additional.answer.result\n            }));\n        return new Response(JSON.stringify(formattedResult), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching data from Weaviate:\", error);\n        return new Response(JSON.stringify({\n            error: \"Error fetching data from Weaviate\",\n            details: error.message\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZWFyY2gvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFbkMsZUFBZUMsS0FBS0MsR0FBRztJQUM1QixJQUFJO1FBQ0YsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO1FBRWhDLE1BQU1DLFNBQVNMLDBEQUFRQSxDQUFDSyxNQUFNLENBQUM7WUFDN0JDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsYUFBYSxDQUFDQyxVQUFVLENBQUMsV0FBVyxVQUFVO1lBQ2xFQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLGFBQWEsQ0FBQ0csT0FBTyxDQUFDLGdCQUFnQjtZQUN4REMsUUFBUSxJQUFJYixpRUFBZSxDQUFDTyxRQUFRQyxHQUFHLENBQUNPLGdCQUFnQjtZQUN4REMsU0FBUztnQkFDUCxvQkFBb0JULFFBQVFDLEdBQUcsQ0FBQ1MsY0FBYztZQUNoRDtRQUNGO1FBRUEsTUFBTUMsYUFBYTtZQUNqQjtTQUNEO1FBRUQsTUFBTUMsU0FBUyxNQUFNZCxPQUFPZSxPQUFPLENBQ2hDQyxHQUFHLEdBQ0hDLGFBQWEsQ0FBQyxPQUNkQyxVQUFVLENBQUNMLFlBQ1hNLE9BQU8sQ0FBQztZQUNQQyxVQUFVdEI7WUFDVmUsWUFBWTtnQkFBQzthQUFTO1FBQ3hCLEdBQ0NRLFNBQVMsQ0FBQyxHQUNWQyxFQUFFO1FBRUxDLFFBQVFDLEdBQUcsQ0FBQyxvQ0FBb0NWO1FBRWhELHNCQUFzQjtRQUN0QixNQUFNVyxrQkFBa0JYLE9BQU9ZLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxHQUFHLENBQUNDLEdBQUcsQ0FBQ0MsQ0FBQUEsT0FBUztnQkFDdkRWLFVBQVV0QjtnQkFDVmlDLFFBQVFELEtBQUtFLFdBQVcsQ0FBQ0QsTUFBTSxDQUFDakIsTUFBTTtZQUN4QztRQUVBLE9BQU8sSUFBSW1CLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ1Ysa0JBQWtCO1lBQUVXLFFBQVE7UUFBSTtJQUNyRSxFQUFFLE9BQU9DLE9BQU87UUFDZGQsUUFBUWMsS0FBSyxDQUFDLHNDQUFzQ0E7UUFDcEQsT0FBTyxJQUFJSixTQUFTQyxLQUFLQyxTQUFTLENBQUM7WUFBRUUsT0FBTztZQUFxQ0MsU0FBU0QsTUFBTUUsT0FBTztRQUFDLElBQUk7WUFBRUgsUUFBUTtRQUFJO0lBQzVIO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF2aWF0ZS1mcm9udGVuZC8uL3NyYy9hcHAvYXBpL3NlYXJjaC9yb3V0ZS5qcz8zZjVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF2aWF0ZSBmcm9tICd3ZWF2aWF0ZS10cy1jbGllbnQnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgY29uc3QgY2xpZW50ID0gd2VhdmlhdGUuY2xpZW50KHtcbiAgICAgIHNjaGVtZTogcHJvY2Vzcy5lbnYuV0VBVklBVEVfSE9TVC5zdGFydHNXaXRoKCdodHRwcycpID8gJ2h0dHBzJyA6ICdodHRwJyxcbiAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LldFQVZJQVRFX0hPU1QucmVwbGFjZSgvXmh0dHBzPzpcXC9cXC8vLCAnJyksIC8vIFJlbW92ZSB0aGUgcHJvdG9jb2wgZnJvbSB0aGUgaG9zdFxuICAgICAgYXBpS2V5OiBuZXcgd2VhdmlhdGUuQXBpS2V5KHByb2Nlc3MuZW52LldFQVZJQVRFX0FQSV9LRVkpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1PcGVuYWktQXBpLUtleSc6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgIFwiX2FkZGl0aW9uYWwgeyBhbnN3ZXIgeyBoYXNBbnN3ZXIgcmVzdWx0IH0gZGlzdGFuY2UgfVwiXG4gICAgXTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5ncmFwaHFsXG4gICAgICAuZ2V0KClcbiAgICAgIC53aXRoQ2xhc3NOYW1lKCdGQVEnKVxuICAgICAgLndpdGhGaWVsZHMocHJvcGVydGllcylcbiAgICAgIC53aXRoQXNrKHtcbiAgICAgICAgcXVlc3Rpb246IHF1ZXJ5LFxuICAgICAgICBwcm9wZXJ0aWVzOiBbXCJhbnN3ZXJcIl1cbiAgICAgIH0pXG4gICAgICAud2l0aExpbWl0KDEpXG4gICAgICAuZG8oKTtcblxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCByZXNwb25zZSBmcm9tIFdlYXZpYXRlOicsIHJlc3VsdCk7XG5cbiAgICAvLyBGb3JtYXQgdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0ID0gcmVzdWx0LmRhdGEuR2V0LkZBUS5tYXAoaXRlbSA9PiAoe1xuICAgICAgcXVlc3Rpb246IHF1ZXJ5LFxuICAgICAgYW5zd2VyOiBpdGVtLl9hZGRpdGlvbmFsLmFuc3dlci5yZXN1bHRcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGZvcm1hdHRlZFJlc3VsdCksIHsgc3RhdHVzOiAyMDAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tIFdlYXZpYXRlOicsIGVycm9yKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdFcnJvciBmZXRjaGluZyBkYXRhIGZyb20gV2VhdmlhdGUnLCBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIH0pLCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsid2VhdmlhdGUiLCJQT1NUIiwicmVxIiwicXVlcnkiLCJqc29uIiwiY2xpZW50Iiwic2NoZW1lIiwicHJvY2VzcyIsImVudiIsIldFQVZJQVRFX0hPU1QiLCJzdGFydHNXaXRoIiwiaG9zdCIsInJlcGxhY2UiLCJhcGlLZXkiLCJBcGlLZXkiLCJXRUFWSUFURV9BUElfS0VZIiwiaGVhZGVycyIsIk9QRU5BSV9BUElfS0VZIiwicHJvcGVydGllcyIsInJlc3VsdCIsImdyYXBocWwiLCJnZXQiLCJ3aXRoQ2xhc3NOYW1lIiwid2l0aEZpZWxkcyIsIndpdGhBc2siLCJxdWVzdGlvbiIsIndpdGhMaW1pdCIsImRvIiwiY29uc29sZSIsImxvZyIsImZvcm1hdHRlZFJlc3VsdCIsImRhdGEiLCJHZXQiLCJGQVEiLCJtYXAiLCJpdGVtIiwiYW5zd2VyIiwiX2FkZGl0aW9uYWwiLCJSZXNwb25zZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJlcnJvciIsImRldGFpbHMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/search/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/graphql","vendor-chunks/asynckit","vendor-chunks/graphql-request","vendor-chunks/uuid","vendor-chunks/whatwg-url","vendor-chunks/extract-files","vendor-chunks/tr46","vendor-chunks/mime-db","vendor-chunks/form-data","vendor-chunks/weaviate-ts-client","vendor-chunks/node-fetch","vendor-chunks/webidl-conversions","vendor-chunks/mime-types","vendor-chunks/delayed-stream","vendor-chunks/cross-fetch","vendor-chunks/combined-stream"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsearch%2Froute&page=%2Fapi%2Fsearch%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsearch%2Froute.js&appDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fprathikpradeep%2Fweaviate-frontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();