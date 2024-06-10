"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extract-files";
exports.ids = ["vendor-chunks/extract-files"];
exports.modules = {

/***/ "(rsc)/../node_modules/extract-files/public/ReactNativeFile.js":
/*!***************************************************************!*\
  !*** ../node_modules/extract-files/public/ReactNativeFile.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function ReactNativeFile(_ref) {\n  var uri = _ref.uri,\n    name = _ref.name,\n    type = _ref.type;\n  this.uri = uri;\n  this.name = name;\n  this.type = type;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtZmlsZXMvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdmlhdGUtZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtZmlsZXMvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcz8yZjY2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBSZWFjdE5hdGl2ZUZpbGUoX3JlZikge1xuICB2YXIgdXJpID0gX3JlZi51cmksXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0eXBlID0gX3JlZi50eXBlO1xuICB0aGlzLnVyaSA9IHVyaTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/extract-files/public/ReactNativeFile.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/extract-files/public/extractFiles.js":
/*!************************************************************!*\
  !*** ../node_modules/extract-files/public/extractFiles.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile */ \"(rsc)/../node_modules/extract-files/public/isExtractableFile.js\");\n\nmodule.exports = function extractFiles(value, path, isExtractableFile) {\n  if (path === void 0) {\n    path = '';\n  }\n\n  if (isExtractableFile === void 0) {\n    isExtractableFile = defaultIsExtractableFile;\n  }\n\n  var clone;\n  var files = new Map();\n\n  function addFile(paths, file) {\n    var storedPaths = files.get(file);\n    if (storedPaths) storedPaths.push.apply(storedPaths, paths);\n    else files.set(file, paths);\n  }\n\n  if (isExtractableFile(value)) {\n    clone = null;\n    addFile([path], value);\n  } else {\n    var prefix = path ? path + '.' : '';\n    if (typeof FileList !== 'undefined' && value instanceof FileList)\n      clone = Array.prototype.map.call(value, function (file, i) {\n        addFile(['' + prefix + i], file);\n        return null;\n      });\n    else if (Array.isArray(value))\n      clone = value.map(function (child, i) {\n        var result = extractFiles(child, '' + prefix + i, isExtractableFile);\n        result.files.forEach(addFile);\n        return result.clone;\n      });\n    else if (value && value.constructor === Object) {\n      clone = {};\n\n      for (var i in value) {\n        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);\n        result.files.forEach(addFile);\n        clone[i] = result.clone;\n      }\n    } else clone = value;\n  }\n\n  return {\n    clone: clone,\n    files: files,\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtZmlsZXMvcHVibGljL2V4dHJhY3RGaWxlcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiwrQkFBK0IsbUJBQU8sQ0FBQyw0RkFBcUI7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXZpYXRlLWZyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMuanM/ODk5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0SXNFeHRyYWN0YWJsZUZpbGUgPSByZXF1aXJlKCcuL2lzRXh0cmFjdGFibGVGaWxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0cmFjdEZpbGVzKHZhbHVlLCBwYXRoLCBpc0V4dHJhY3RhYmxlRmlsZSkge1xuICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGlzRXh0cmFjdGFibGVGaWxlID09PSB2b2lkIDApIHtcbiAgICBpc0V4dHJhY3RhYmxlRmlsZSA9IGRlZmF1bHRJc0V4dHJhY3RhYmxlRmlsZTtcbiAgfVxuXG4gIHZhciBjbG9uZTtcbiAgdmFyIGZpbGVzID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGFkZEZpbGUocGF0aHMsIGZpbGUpIHtcbiAgICB2YXIgc3RvcmVkUGF0aHMgPSBmaWxlcy5nZXQoZmlsZSk7XG4gICAgaWYgKHN0b3JlZFBhdGhzKSBzdG9yZWRQYXRocy5wdXNoLmFwcGx5KHN0b3JlZFBhdGhzLCBwYXRocyk7XG4gICAgZWxzZSBmaWxlcy5zZXQoZmlsZSwgcGF0aHMpO1xuICB9XG5cbiAgaWYgKGlzRXh0cmFjdGFibGVGaWxlKHZhbHVlKSkge1xuICAgIGNsb25lID0gbnVsbDtcbiAgICBhZGRGaWxlKFtwYXRoXSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwcmVmaXggPSBwYXRoID8gcGF0aCArICcuJyA6ICcnO1xuICAgIGlmICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpXG4gICAgICBjbG9uZSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKGZpbGUsIGkpIHtcbiAgICAgICAgYWRkRmlsZShbJycgKyBwcmVmaXggKyBpXSwgZmlsZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICBjbG9uZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3RGaWxlcyhjaGlsZCwgJycgKyBwcmVmaXggKyBpLCBpc0V4dHJhY3RhYmxlRmlsZSk7XG4gICAgICAgIHJlc3VsdC5maWxlcy5mb3JFYWNoKGFkZEZpbGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNsb25lO1xuICAgICAgfSk7XG4gICAgZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgY2xvbmUgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdEZpbGVzKHZhbHVlW2ldLCAnJyArIHByZWZpeCArIGksIGlzRXh0cmFjdGFibGVGaWxlKTtcbiAgICAgICAgcmVzdWx0LmZpbGVzLmZvckVhY2goYWRkRmlsZSk7XG4gICAgICAgIGNsb25lW2ldID0gcmVzdWx0LmNsb25lO1xuICAgICAgfVxuICAgIH0gZWxzZSBjbG9uZSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgZmlsZXM6IGZpbGVzLFxuICB9O1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/extract-files/public/extractFiles.js\n");

/***/ }),

/***/ "(rsc)/../node_modules/extract-files/public/isExtractableFile.js":
/*!*****************************************************************!*\
  !*** ../node_modules/extract-files/public/isExtractableFile.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ \"(rsc)/../node_modules/extract-files/public/ReactNativeFile.js\");\n\nmodule.exports = function isExtractableFile(value) {\n  return (\n    (typeof File !== 'undefined' && value instanceof File) ||\n    (typeof Blob !== 'undefined' && value instanceof Blob) ||\n    value instanceof ReactNativeFile\n  );\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL2V4dHJhY3QtZmlsZXMvcHVibGljL2lzRXh0cmFjdGFibGVGaWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLHNCQUFzQixtQkFBTyxDQUFDLHdGQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF2aWF0ZS1mcm9udGVuZC8uLi9ub2RlX21vZHVsZXMvZXh0cmFjdC1maWxlcy9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUuanM/ODdlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdE5hdGl2ZUZpbGUgPSByZXF1aXJlKCcuL1JlYWN0TmF0aXZlRmlsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzRXh0cmFjdGFibGVGaWxlKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgKHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpIHx8XG4gICAgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgdmFsdWUgaW5zdGFuY2VvZiBSZWFjdE5hdGl2ZUZpbGVcbiAgKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/extract-files/public/isExtractableFile.js\n");

/***/ })

};
;