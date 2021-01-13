module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/notes/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const notes = new Array(10).fill(1).map((_, index) => ({
  id: Date.now() + index,
  title: `Hello note ${index}`
}));
module.exports = notes; // using es6 exports will make the data clear on reload

/***/ }),

/***/ "./src/pages/api/notes/[id].js":
/*!*************************************!*\
  !*** ./src/pages/api/notes/[id].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_data__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const getNote = id => _data_data__WEBPACK_IMPORTED_MODULE_1___default.a.find(note => note.id == parseInt(id));

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().get((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.statusCode(404);
    res.end();
  }

  res.json({
    data: note
  });
}).patch((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.statusCode(404);
    res.end();
  }

  const noteIndex = _data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));

  const updated = _objectSpread(_objectSpread({}, note), req.body);

  _data_data__WEBPACK_IMPORTED_MODULE_1___default.a[noteIndex] = updated;
  res.json({
    data: updated
  });
}).delete((req, res) => {
  const note = getNote(req.query.id);

  if (!note) {
    res.statusCode(404);
    res.end();
  }

  const noteIndex = _data_data__WEBPACK_IMPORTED_MODULE_1___default.a.findIndex(n => n.id === parseInt(req.query.id));
  _data_data__WEBPACK_IMPORTED_MODULE_1___default.a.splice(noteIndex, 1);
  res.json({
    data: req.query.id
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL25vdGVzLy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiJdLCJuYW1lcyI6WyJub3RlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpbmRleCIsImlkIiwiRGF0ZSIsIm5vdyIsInRpdGxlIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldE5vdGUiLCJmaW5kIiwibm90ZSIsInBhcnNlSW50IiwiaGFuZGxlciIsIm5jIiwiZ2V0IiwicmVxIiwicmVzIiwicXVlcnkiLCJzdGF0dXNDb2RlIiwiZW5kIiwianNvbiIsImRhdGEiLCJwYXRjaCIsIm5vdGVJbmRleCIsImZpbmRJbmRleCIsIm4iLCJ1cGRhdGVkIiwiYm9keSIsImRlbGV0ZSIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVB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dGVzL1tpZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9hcGkvbm90ZXMvW2lkXS5qc1wiKTtcbiIsImNvbnN0IG5vdGVzID0gbmV3IEFycmF5KDEwKS5maWxsKDEpLm1hcCgoXywgaW5kZXgpID0+ICh7XHJcbiAgaWQ6IERhdGUubm93KCkgKyBpbmRleCxcclxuICB0aXRsZTogYEhlbGxvIG5vdGUgJHtpbmRleH1gLFxyXG59KSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG5vdGVzOyAvLyB1c2luZyBlczYgZXhwb3J0cyB3aWxsIG1ha2UgdGhlIGRhdGEgY2xlYXIgb24gcmVsb2FkXHJcbiIsImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXHJcbmltcG9ydCBub3RlcyBmcm9tICcuLi8uLi8uLi9kYXRhL2RhdGEnXHJcblxyXG5jb25zdCBnZXROb3RlID0gaWQgPT4gbm90ZXMuZmluZChub3RlID0+IG5vdGUuaWQgPT0gcGFyc2VJbnQoaWQpKVxyXG5cclxuY29uc3QgaGFuZGxlciA9IG5jKClcclxuICAuZ2V0KChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKVxyXG5cclxuICAgIGlmKCFub3RlKSB7XHJcbiAgICAgIHJlcy5zdGF0dXNDb2RlKDQwNCk7XHJcbiAgICAgIHJlcy5lbmQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJlcy5qc29uKHtkYXRhOiBub3RlfSlcclxuICB9KVxyXG4gIC5wYXRjaCgocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IG5vdGUgPSBnZXROb3RlKHJlcS5xdWVyeS5pZClcclxuXHJcbiAgICBpZighbm90ZSkge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSg0MDQpO1xyXG4gICAgICByZXMuZW5kKClcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgICBjb25zdCBub3RlSW5kZXggPSBub3Rlcy5maW5kSW5kZXgobiA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKTtcclxuICAgIGNvbnN0IHVwZGF0ZWQgPSB7Li4ubm90ZSwgLi4ucmVxLmJvZHl9XHJcblxyXG4gICAgbm90ZXNbbm90ZUluZGV4XSA9IHVwZGF0ZWQ7XHJcbiAgICByZXMuanNvbih7ZGF0YTogdXBkYXRlZH0pXHJcbiAgfSlcclxuICAuZGVsZXRlKChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qgbm90ZSA9IGdldE5vdGUocmVxLnF1ZXJ5LmlkKTtcclxuXHJcbiAgICBpZighbm90ZSkge1xyXG4gICAgICByZXMuc3RhdHVzQ29kZSg0MDQpO1xyXG4gICAgICByZXMuZW5kKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBub3RlSW5kZXggPSBub3Rlcy5maW5kSW5kZXgobiA9PiBuLmlkID09PSBwYXJzZUludChyZXEucXVlcnkuaWQpKTtcclxuXHJcbiAgICBub3Rlcy5zcGxpY2Uobm90ZUluZGV4LCAxKTtcclxuXHJcbiAgICByZXMuanNvbih7ZGF0YTogcmVxLnF1ZXJ5LmlkfSlcclxuICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlciIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9