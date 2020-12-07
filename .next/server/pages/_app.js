module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Assets/board_sample/board1.jpg":
/*!****************************************!*\
  !*** ./Assets/board_sample/board1.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/board1-1f98ecd82bc7421cef356a47201bbdcc.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvYm9hcmRfc2FtcGxlL2JvYXJkMS5qcGc/YmM0NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQxLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ib2FyZDEtMWY5OGVjZDgyYmM3NDIxY2VmMzU2YTQ3MjAxYmJkY2MuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/board_sample/board1.jpg\n");

/***/ }),

/***/ "./Assets/board_sample/board2.jpg":
/*!****************************************!*\
  !*** ./Assets/board_sample/board2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/board2-9cf28ad2c8302aa25c44f67f17d4c565.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvYm9hcmRfc2FtcGxlL2JvYXJkMi5qcGc/OWVjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQyLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ib2FyZDItOWNmMjhhZDJjODMwMmFhMjVjNDRmNjdmMTdkNGM1NjUuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/board_sample/board2.jpg\n");

/***/ }),

/***/ "./Assets/board_sample/board3.jpg":
/*!****************************************!*\
  !*** ./Assets/board_sample/board3.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/board3-611d2fab20e57b46a96fbad02a2f1dad.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvYm9hcmRfc2FtcGxlL2JvYXJkMy5qcGc/YzY0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQzLmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ib2FyZDMtNjExZDJmYWIyMGU1N2I0NmE5NmZiYWQwMmEyZjFkYWQuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/board_sample/board3.jpg\n");

/***/ }),

/***/ "./Assets/board_sample/board4.jpg":
/*!****************************************!*\
  !*** ./Assets/board_sample/board4.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/board4-35d1070649b863ebf980595d594aaeae.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvYm9hcmRfc2FtcGxlL2JvYXJkNC5qcGc/YWNhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQ0LmpwZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ib2FyZDQtMzVkMTA3MDY0OWI4NjNlYmY5ODA1OTVkNTk0YWFlYWUuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Assets/board_sample/board4.jpg\n");

/***/ }),

/***/ "./Assets/samples/sample1.jpg":
/*!************************************!*\
  !*** ./Assets/samples/sample1.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/sample1-be4d8c4521565be16fc2dea7235f4cbc.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvc2FtcGxlcy9zYW1wbGUxLmpwZz8xODVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vQXNzZXRzL3NhbXBsZXMvc2FtcGxlMS5qcGcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2FtcGxlMS1iZTRkOGM0NTIxNTY1YmUxNmZjMmRlYTcyMzVmNGNiYy5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Assets/samples/sample1.jpg\n");

/***/ }),

/***/ "./Assets/samples/sample2.jpg":
/*!************************************!*\
  !*** ./Assets/samples/sample2.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/_next/static/images/sample2-0493867f628c27060954e1c07d973556.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Bc3NldHMvc2FtcGxlcy9zYW1wbGUyLmpwZz8yM2RhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vQXNzZXRzL3NhbXBsZXMvc2FtcGxlMi5qcGcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc2FtcGxlMi0wNDkzODY3ZjYyOGMyNzA2MDk1NGUxYzA3ZDk3MzU1Ni5qcGdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Assets/samples/sample2.jpg\n");

/***/ }),

/***/ "./Context/AllBoardsContext.js":
/*!*************************************!*\
  !*** ./Context/AllBoardsContext.js ***!
  \*************************************/
/*! exports provided: AllBoardsContext, AllBoardContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllBoardsContext\", function() { return AllBoardsContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AllBoardContextProvider\", function() { return AllBoardContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_samples_sample1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/samples/sample1.jpg */ \"./Assets/samples/sample1.jpg\");\n/* harmony import */ var _Assets_samples_sample1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Assets_samples_sample1_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Assets_samples_sample2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/samples/sample2.jpg */ \"./Assets/samples/sample2.jpg\");\n/* harmony import */ var _Assets_samples_sample2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Assets_samples_sample2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/Context/AllBoardsContext.js\";\n\n\n\nconst AllBoardsContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst AllBoardContextProvider = ({\n  children\n}) => {\n  const {\n    0: boards,\n    1: setBoards\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([{\n    boardName: 'DevChallenges',\n    backgroundImage: _Assets_samples_sample1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a\n  }, {\n    boardName: 'Test Board',\n    backgroundImage: _Assets_samples_sample2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a\n  }]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AllBoardsContext.Provider, {\n    value: {\n      setBoards,\n      boards\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db250ZXh0L0FsbEJvYXJkc0NvbnRleHQuanM/NDljMCJdLCJuYW1lcyI6WyJBbGxCb2FyZHNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFsbEJvYXJkQ29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJib2FyZHMiLCJzZXRCb2FyZHMiLCJ1c2VTdGF0ZSIsImJvYXJkTmFtZSIsImJhY2tncm91bmRJbWFnZSIsInNhbXBsZTEiLCJzYW1wbGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsZ0JBQWdCLGdCQUFHQywyREFBYSxFQUF0QztBQUVBLE1BQU1DLHVCQUF1QixHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQ25ELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFxQkMsc0RBQVEsQ0FBQyxDQUNoQztBQUNJQyxhQUFTLEVBQUMsZUFEZDtBQUVJQyxtQkFBZSxFQUFDQyxrRUFBT0E7QUFGM0IsR0FEZ0MsRUFLaEM7QUFDSUYsYUFBUyxFQUFDLFlBRGQ7QUFFSUMsbUJBQWUsRUFBQ0Usa0VBQU9BO0FBRjNCLEdBTGdDLENBQUQsQ0FBbkM7QUFVQSxzQkFDSSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUU7QUFBQ0wsZUFBRDtBQUFXRDtBQUFYLEtBQWxDO0FBQUEsY0FDS0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxDQWhCTSIsImZpbGUiOiIuL0NvbnRleHQvQWxsQm9hcmRzQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Y3JlYXRlQ29udGV4dCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc2FtcGxlMSBmcm9tICcuLi9Bc3NldHMvc2FtcGxlcy9zYW1wbGUxLmpwZydcbmltcG9ydCBzYW1wbGUyIGZyb20gJy4uL0Fzc2V0cy9zYW1wbGVzL3NhbXBsZTIuanBnJ1xuXG5leHBvcnQgY29uc3QgQWxsQm9hcmRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IEFsbEJvYXJkQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCBbYm9hcmRzLHNldEJvYXJkc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvYXJkTmFtZTonRGV2Q2hhbGxlbmdlcycsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6c2FtcGxlMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgYm9hcmROYW1lOidUZXN0IEJvYXJkJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpzYW1wbGUyLFxuICAgICAgICB9XG4gICAgXSlcbiAgICByZXR1cm4oXG4gICAgICAgIDxBbGxCb2FyZHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7c2V0Qm9hcmRzLGJvYXJkc319PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0FsbEJvYXJkc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Context/AllBoardsContext.js\n");

/***/ }),

/***/ "./Context/BoardContext.js":
/*!*********************************!*\
  !*** ./Context/BoardContext.js ***!
  \*********************************/
/*! exports provided: BoardContext, BoardContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardContext\", function() { return BoardContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoardContextProvider\", function() { return BoardContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Assets_board_sample_board1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Assets/board_sample/board1.jpg */ \"./Assets/board_sample/board1.jpg\");\n/* harmony import */ var _Assets_board_sample_board1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Assets_board_sample_board1_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Assets_board_sample_board2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/board_sample/board2.jpg */ \"./Assets/board_sample/board2.jpg\");\n/* harmony import */ var _Assets_board_sample_board2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Assets_board_sample_board2_jpg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Assets_board_sample_board3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Assets/board_sample/board3.jpg */ \"./Assets/board_sample/board3.jpg\");\n/* harmony import */ var _Assets_board_sample_board3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Assets_board_sample_board3_jpg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Assets_board_sample_board4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Assets/board_sample/board4.jpg */ \"./Assets/board_sample/board4.jpg\");\n/* harmony import */ var _Assets_board_sample_board4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Assets_board_sample_board4_jpg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-uuid */ \"react-uuid\");\n/* harmony import */ var react_uuid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_uuid__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/Context/BoardContext.js\";\n\n\n\n\n\n\nconst BoardContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst BoardContextProvider = ({\n  children\n}) => {\n  //* Mock board\n  const {\n    0: board,\n    1: setBoard\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    [react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()]: {\n      name: \"Backlog 🤔\",\n      id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()(),\n      items: [{\n        title: \"Add what you'd like to work on below.\",\n        image: null,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }, {\n        title: \"Git jobs challenge\",\n        image: _Assets_board_sample_board1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }]\n    },\n    [react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()]: {\n      name: \"In progress 📚\",\n      id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()(),\n      items: [{\n        title: \"Move anything 'ready' here.\",\n        image: _Assets_board_sample_board2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }, {\n        title: \"Unsplash challenges Back-End\",\n        image: _Assets_board_sample_board3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }]\n    },\n    [react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()]: {\n      name: \"In review ⚙️\",\n      id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()(),\n      items: [{\n        title: \"Add finishing touches for wind bnb solution\",\n        image: null,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }]\n    },\n    [react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()]: {\n      name: \"Completed 🙌🏻\",\n      id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()(),\n      items: [{\n        title: \"Move anything from doing to done here\",\n        image: _Assets_board_sample_board4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,\n        id: react_uuid__WEBPACK_IMPORTED_MODULE_6___default()()\n      }]\n    }\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BoardContext.Provider, {\n    value: {\n      board,\n      setBoard\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db250ZXh0L0JvYXJkQ29udGV4dC5qcz9iYmIzIl0sIm5hbWVzIjpbIkJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJCb2FyZENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiYm9hcmQiLCJzZXRCb2FyZCIsInVzZVN0YXRlIiwidXVpZCIsIm5hbWUiLCJpZCIsIml0ZW1zIiwidGl0bGUiLCJpbWFnZSIsImJTYW1wbGUxIiwiYlNhbXBsZTIiLCJiU2FtcGxlMyIsImJTYW1wbGU0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsRUFBbEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUNoRDtBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFtQkMsc0RBQVEsQ0FBQztBQUMxQixLQUFDQyxpREFBSSxFQUFMLEdBQVU7QUFDTkMsVUFBSSxFQUFFLFlBREE7QUFFTkMsUUFBRSxFQUFFRixpREFBSSxFQUZGO0FBR05HLFdBQUssRUFBRSxDQUNIO0FBQ0lDLGFBQUssRUFBRSx1Q0FEWDtBQUVJQyxhQUFLLEVBQUUsSUFGWDtBQUdJSCxVQUFFLEVBQUVGLGlEQUFJO0FBSFosT0FERyxFQU1IO0FBQ0lJLGFBQUssRUFBRSxvQkFEWDtBQUVJQyxhQUFLLEVBQUVDLHNFQUZYO0FBR0lKLFVBQUUsRUFBRUYsaURBQUk7QUFIWixPQU5HO0FBSEQsS0FEZ0I7QUFpQjFCLEtBQUNBLGlEQUFJLEVBQUwsR0FBVTtBQUNOQyxVQUFJLEVBQUUsZ0JBREE7QUFFTkMsUUFBRSxFQUFFRixpREFBSSxFQUZGO0FBR05HLFdBQUssRUFBRSxDQUNIO0FBQ0lDLGFBQUssRUFBRSw2QkFEWDtBQUVJQyxhQUFLLEVBQUVFLHNFQUZYO0FBR0lMLFVBQUUsRUFBRUYsaURBQUk7QUFIWixPQURHLEVBTUg7QUFDSUksYUFBSyxFQUFFLDhCQURYO0FBRUlDLGFBQUssRUFBRUcsc0VBRlg7QUFHSU4sVUFBRSxFQUFFRixpREFBSTtBQUhaLE9BTkc7QUFIRCxLQWpCZ0I7QUFrQzFCLEtBQUNBLGlEQUFJLEVBQUwsR0FBVTtBQUNOQyxVQUFJLEVBQUUsY0FEQTtBQUVOQyxRQUFFLEVBQUVGLGlEQUFJLEVBRkY7QUFHTkcsV0FBSyxFQUFFLENBQ0g7QUFDSUMsYUFBSyxFQUFFLDZDQURYO0FBRUlDLGFBQUssRUFBRSxJQUZYO0FBR0lILFVBQUUsRUFBRUYsaURBQUk7QUFIWixPQURHO0FBSEQsS0FsQ2dCO0FBNkMxQixLQUFDQSxpREFBSSxFQUFMLEdBQVU7QUFDTkMsVUFBSSxFQUFFLGdCQURBO0FBRU5DLFFBQUUsRUFBRUYsaURBQUksRUFGRjtBQUdORyxXQUFLLEVBQUUsQ0FDSDtBQUNJQyxhQUFLLEVBQUUsdUNBRFg7QUFFSUMsYUFBSyxFQUFFSSxzRUFGWDtBQUdJUCxVQUFFLEVBQUVGLGlEQUFJO0FBSFosT0FERztBQUhEO0FBN0NnQixHQUFELENBQWpDO0FBMERBLHNCQUNJLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFDSCxXQUFEO0FBQU9DO0FBQVAsS0FBOUI7QUFBQSxjQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBakVNIiwiZmlsZSI6Ii4vQ29udGV4dC9Cb2FyZENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGJTYW1wbGUxIGZyb20gJy4uL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQxLmpwZydcbmltcG9ydCBiU2FtcGxlMiBmcm9tICcuLi9Bc3NldHMvYm9hcmRfc2FtcGxlL2JvYXJkMi5qcGcnXG5pbXBvcnQgYlNhbXBsZTMgZnJvbSAnLi4vQXNzZXRzL2JvYXJkX3NhbXBsZS9ib2FyZDMuanBnJ1xuaW1wb3J0IGJTYW1wbGU0IGZyb20gJy4uL0Fzc2V0cy9ib2FyZF9zYW1wbGUvYm9hcmQ0LmpwZydcbmltcG9ydCB1dWlkIGZyb20gJ3JlYWN0LXV1aWQnXG5cbmV4cG9ydCBjb25zdCBCb2FyZENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGNvbnN0IEJvYXJkQ29udGV4dFByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICAvLyogTW9jayBib2FyZFxuICAgIGNvbnN0IFtib2FyZCxzZXRCb2FyZF0gPSB1c2VTdGF0ZSh7XG4gICAgICAgICAgICBbdXVpZCgpXToge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmFja2xvZyDwn6SUXCIsXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBZGQgd2hhdCB5b3UnZCBsaWtlIHRvIHdvcmsgb24gYmVsb3cuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdpdCBqb2JzIGNoYWxsZW5nZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGJTYW1wbGUxLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW3V1aWQoKV06IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluIHByb2dyZXNzIPCfk5pcIixcbiAgICAgICAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1vdmUgYW55dGhpbmcgJ3JlYWR5JyBoZXJlLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGJTYW1wbGUyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVW5zcGxhc2ggY2hhbGxlbmdlcyBCYWNrLUVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGJTYW1wbGUzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbdXVpZCgpXToge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW4gcmV2aWV3IOKame+4j1wiLFxuICAgICAgICAgICAgICAgIGlkOiB1dWlkKCksXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQWRkIGZpbmlzaGluZyB0b3VjaGVzIGZvciB3aW5kIGJuYiBzb2x1dGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbdXVpZCgpXToge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29tcGxldGVkIPCfmYzwn4+7XCIsXG4gICAgICAgICAgICAgICAgaWQ6IHV1aWQoKSxcbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNb3ZlIGFueXRoaW5nIGZyb20gZG9pbmcgdG8gZG9uZSBoZXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogYlNhbXBsZTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdXVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICApXG4gICAgcmV0dXJuKFxuICAgICAgICA8Qm9hcmRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Ym9hcmQsc2V0Qm9hcmR9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Cb2FyZENvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/BoardContext.js\n");

/***/ }),

/***/ "./Context/LoginContext.js":
/*!*********************************!*\
  !*** ./Context/LoginContext.js ***!
  \*********************************/
/*! exports provided: LoginContext, LoginContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginContext\", function() { return LoginContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoginContextProvider\", function() { return LoginContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/Context/LoginContext.js\";\n\nconst LoginContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst LoginContextProvider = ({\n  children\n}) => {\n  const {\n    0: fieldsData,\n    1: setFieldsData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: '',\n    password: ''\n  });\n  const Fields = [{\n    name: 'email',\n    placeholder: 'Email',\n    type: 'email',\n    value: fieldsData.email\n  }, {\n    name: 'password',\n    placeholder: 'Password',\n    type: 'password',\n    value: fieldsData.password\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LoginContext.Provider, {\n    value: {\n      Fields,\n      setFieldsData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db250ZXh0L0xvZ2luQ29udGV4dC5qcz9lNzk1Il0sIm5hbWVzIjpbIkxvZ2luQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2dpbkNvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiZmllbGRzRGF0YSIsInNldEZpZWxkc0RhdGEiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJGaWVsZHMiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsWUFBWSxnQkFBR0MsMkRBQWEsRUFBbEM7QUFFQSxNQUFNQyxvQkFBb0IsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUNoRCxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQVlDO0FBQVosTUFBNkJDLHNEQUFRLENBQUM7QUFDeENDLFNBQUssRUFBQyxFQURrQztBQUV4Q0MsWUFBUSxFQUFDO0FBRitCLEdBQUQsQ0FBM0M7QUFJQSxRQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUNJQyxRQUFJLEVBQUMsT0FEVDtBQUVJQyxlQUFXLEVBQUMsT0FGaEI7QUFHSUMsUUFBSSxFQUFFLE9BSFY7QUFJSUMsU0FBSyxFQUFDVCxVQUFVLENBQUNHO0FBSnJCLEdBRFcsRUFPWDtBQUNJRyxRQUFJLEVBQUMsVUFEVDtBQUVJQyxlQUFXLEVBQUMsVUFGaEI7QUFHSUMsUUFBSSxFQUFFLFVBSFY7QUFJSUMsU0FBSyxFQUFDVCxVQUFVLENBQUNJO0FBSnJCLEdBUFcsQ0FBZjtBQWNBLHNCQUNJLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRTtBQUFDQyxZQUFEO0FBQVFKO0FBQVIsS0FBOUI7QUFBQSxjQUNLRjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQUtILENBeEJNIiwiZmlsZSI6Ii4vQ29udGV4dC9Mb2dpbkNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgTG9naW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBMb2dpbkNvbnRleHRQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gICAgY29uc3QgW2ZpZWxkc0RhdGEsc2V0RmllbGRzRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOicnLFxuICAgICAgICBwYXNzd29yZDonJ1xuICAgIH0pXG4gICAgY29uc3QgRmllbGRzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOidlbWFpbCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjonRW1haWwnLFxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgICAgIHZhbHVlOmZpZWxkc0RhdGEuZW1haWxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZToncGFzc3dvcmQnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6J1Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICB2YWx1ZTpmaWVsZHNEYXRhLnBhc3N3b3JkXG4gICAgICAgIH1cbiAgICBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExvZ2luQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e0ZpZWxkcyxzZXRGaWVsZHNEYXRhfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTG9naW5Db250ZXh0LlByb3ZpZGVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Context/LoginContext.js\n");

/***/ }),

/***/ "./Context/SignupContext.js":
/*!**********************************!*\
  !*** ./Context/SignupContext.js ***!
  \**********************************/
/*! exports provided: SignupContext, SignupContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupContext\", function() { return SignupContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupContextProvider\", function() { return SignupContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/Context/SignupContext.js\";\n\nconst SignupContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nconst SignupContextProvider = ({\n  children\n}) => {\n  const {\n    0: fieldsData,\n    1: setFieldsData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    name: '',\n    email: '',\n    password: '',\n    confirmPassword: ''\n  });\n  const Fields = [{\n    name: 'name',\n    placeholder: 'Full Name',\n    type: 'name',\n    value: fieldsData.name\n  }, {\n    name: 'email',\n    placeholder: 'Email',\n    type: 'email',\n    value: fieldsData.email\n  }, {\n    name: 'password',\n    placeholder: 'Password',\n    type: 'password',\n    value: fieldsData.password\n  }, {\n    name: 'confirm_password',\n    placeholder: 'ConOfirm Password',\n    type: 'password',\n    value: fieldsData.confirmPassword\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SignupContext.Provider, {\n    value: {\n      Fields,\n      setFieldsData\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db250ZXh0L1NpZ251cENvbnRleHQuanM/YjAyOSJdLCJuYW1lcyI6WyJTaWdudXBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNpZ251cENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiZmllbGRzRGF0YSIsInNldEZpZWxkc0RhdGEiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiRmllbGRzIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sTUFBTUEsYUFBYSxnQkFBR0MsMkRBQWEsRUFBbkM7QUFFQSxNQUFNQyxxQkFBcUIsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUNqRCxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQ3hDO0FBQ0lDLFFBQUksRUFBRSxFQURWO0FBRUlDLFNBQUssRUFBQyxFQUZWO0FBR0lDLFlBQVEsRUFBQyxFQUhiO0FBSUlDLG1CQUFlLEVBQUM7QUFKcEIsR0FEd0MsQ0FBNUM7QUFRQSxRQUFNQyxNQUFNLEdBQUcsQ0FDWDtBQUNJSixRQUFJLEVBQUMsTUFEVDtBQUVJSyxlQUFXLEVBQUMsV0FGaEI7QUFHSUMsUUFBSSxFQUFDLE1BSFQ7QUFJSUMsU0FBSyxFQUFDVixVQUFVLENBQUNHO0FBSnJCLEdBRFcsRUFPWDtBQUNJQSxRQUFJLEVBQUMsT0FEVDtBQUVJSyxlQUFXLEVBQUMsT0FGaEI7QUFHSUMsUUFBSSxFQUFDLE9BSFQ7QUFJSUMsU0FBSyxFQUFDVixVQUFVLENBQUNJO0FBSnJCLEdBUFcsRUFhWDtBQUNJRCxRQUFJLEVBQUMsVUFEVDtBQUVJSyxlQUFXLEVBQUMsVUFGaEI7QUFHSUMsUUFBSSxFQUFDLFVBSFQ7QUFJSUMsU0FBSyxFQUFDVixVQUFVLENBQUNLO0FBSnJCLEdBYlcsRUFtQlg7QUFDSUYsUUFBSSxFQUFDLGtCQURUO0FBRUlLLGVBQVcsRUFBQyxtQkFGaEI7QUFHSUMsUUFBSSxFQUFDLFVBSFQ7QUFJSUMsU0FBSyxFQUFDVixVQUFVLENBQUNNO0FBSnJCLEdBbkJXLENBQWY7QUEwQkEsc0JBQ0kscUVBQUMsYUFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUNDLFlBQUQ7QUFBUU47QUFBUixLQUEvQjtBQUFBLGNBQ0tGO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBS0gsQ0F4Q00iLCJmaWxlIjoiLi9Db250ZXh0L1NpZ251cENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse2NyZWF0ZUNvbnRleHQsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBTaWdudXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmV4cG9ydCBjb25zdCBTaWdudXBDb250ZXh0UHJvdmlkZXIgPSAoe2NoaWxkcmVufSkgPT4ge1xuICAgIGNvbnN0IFtmaWVsZHNEYXRhLCBzZXRGaWVsZHNEYXRhXSA9IHVzZVN0YXRlKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOicnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6JycsXG4gICAgICAgICAgICBjb25maXJtUGFzc3dvcmQ6JycsXG4gICAgICAgIH1cbiAgICApO1xuICAgIGNvbnN0IEZpZWxkcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTonbmFtZScsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjonRnVsbCBOYW1lJyxcbiAgICAgICAgICAgIHR5cGU6J25hbWUnLFxuICAgICAgICAgICAgdmFsdWU6ZmllbGRzRGF0YS5uYW1lLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOidlbWFpbCcsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjonRW1haWwnLFxuICAgICAgICAgICAgdHlwZTonZW1haWwnLFxuICAgICAgICAgICAgdmFsdWU6ZmllbGRzRGF0YS5lbWFpbCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZToncGFzc3dvcmQnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6J1Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHR5cGU6J3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHZhbHVlOmZpZWxkc0RhdGEucGFzc3dvcmQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6J2NvbmZpcm1fcGFzc3dvcmQnLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6J0Nvbk9maXJtIFBhc3N3b3JkJyxcbiAgICAgICAgICAgIHR5cGU6J3Bhc3N3b3JkJyxcbiAgICAgICAgICAgIHZhbHVlOmZpZWxkc0RhdGEuY29uZmlybVBhc3N3b3JkLFxuICAgICAgICB9LFxuICAgIF1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2lnbnVwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e0ZpZWxkcyxzZXRGaWVsZHNEYXRhfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvU2lnbnVwQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Context/SignupContext.js\n");

/***/ }),

/***/ "./components/Contexts.jsx":
/*!*********************************!*\
  !*** ./components/Contexts.jsx ***!
  \*********************************/
/*! exports provided: Contexts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contexts\", function() { return Contexts; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context_SignupContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/SignupContext */ \"./Context/SignupContext.js\");\n/* harmony import */ var _Context_LoginContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/LoginContext */ \"./Context/LoginContext.js\");\n/* harmony import */ var _Context_AllBoardsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Context/AllBoardsContext */ \"./Context/AllBoardsContext.js\");\n/* harmony import */ var _Context_BoardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/BoardContext */ \"./Context/BoardContext.js\");\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/components/Contexts.jsx\";\n\n\n\n\n\nconst Contexts = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Context_SignupContext__WEBPACK_IMPORTED_MODULE_2__[\"SignupContextProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Context_LoginContext__WEBPACK_IMPORTED_MODULE_3__[\"LoginContextProvider\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Context_AllBoardsContext__WEBPACK_IMPORTED_MODULE_4__[\"AllBoardContextProvider\"], {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Context_BoardContext__WEBPACK_IMPORTED_MODULE_5__[\"BoardContextProvider\"], {\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRleHRzLmpzeD8wY2JmIl0sIm5hbWVzIjpbIkNvbnRleHRzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDcEMsc0JBQ0kscUVBQUMsNEVBQUQ7QUFBQSwyQkFDSSxxRUFBQywwRUFBRDtBQUFBLDZCQUNJLHFFQUFDLGlGQUFEO0FBQUEsK0JBQ0kscUVBQUMsMEVBQUQ7QUFBQSxvQkFDS0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFXSCxDQVpNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Db250ZXh0cy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpZ251cENvbnRleHRQcm92aWRlcn0gZnJvbSBcIi4uL0NvbnRleHQvU2lnbnVwQ29udGV4dFwiO1xuaW1wb3J0IHtMb2dpbkNvbnRleHRQcm92aWRlcn0gZnJvbSBcIi4uL0NvbnRleHQvTG9naW5Db250ZXh0XCI7XG5pbXBvcnQge0FsbEJvYXJkQ29udGV4dFByb3ZpZGVyfSBmcm9tIFwiLi4vQ29udGV4dC9BbGxCb2FyZHNDb250ZXh0XCI7XG5pbXBvcnQge0JvYXJkQ29udGV4dFByb3ZpZGVyfSBmcm9tIFwiLi4vQ29udGV4dC9Cb2FyZENvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRleHRzID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxTaWdudXBDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8TG9naW5Db250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPEFsbEJvYXJkQ29udGV4dFByb3ZpZGVyPlxuICAgICAgICAgICAgICAgICAgICA8Qm9hcmRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgIDwvQm9hcmRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPC9BbGxCb2FyZENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgICAgIDwvTG9naW5Db250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDwvU2lnbnVwQ29udGV4dFByb3ZpZGVyPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contexts.jsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Contexts */ \"./components/Contexts.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/AllBoardsPage/AllBoardsPage.scss */ \"./styles/AllBoardsPage/AllBoardsPage.scss\");\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_AllBoardsPage_AllBoardsPage_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsGridItem_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/AllBoardsPage/AllBoardsGridItem.scss */ \"./styles/AllBoardsPage/AllBoardsGridItem.scss\");\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsGridItem_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_AllBoardsPage_AllBoardsGridItem_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsPageGrid_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AllBoardsPage/AllBoardsPageGrid.scss */ \"./styles/AllBoardsPage/AllBoardsPageGrid.scss\");\n/* harmony import */ var _styles_AllBoardsPage_AllBoardsPageGrid_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AllBoardsPage_AllBoardsPageGrid_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_AllBoardsPage_BoardsPageHeader_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/AllBoardsPage/BoardsPageHeader.scss */ \"./styles/AllBoardsPage/BoardsPageHeader.scss\");\n/* harmony import */ var _styles_AllBoardsPage_BoardsPageHeader_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_AllBoardsPage_BoardsPageHeader_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_BoardPage_AddCardButton_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/BoardPage/AddCardButton.scss */ \"./styles/BoardPage/AddCardButton.scss\");\n/* harmony import */ var _styles_BoardPage_AddCardButton_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_AddCardButton_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _styles_BoardPage_BoardColumn_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/BoardPage/BoardColumn.scss */ \"./styles/BoardPage/BoardColumn.scss\");\n/* harmony import */ var _styles_BoardPage_BoardColumn_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_BoardColumn_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_BoardPage_BoardColumnHeader_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/BoardPage/BoardColumnHeader.scss */ \"./styles/BoardPage/BoardColumnHeader.scss\");\n/* harmony import */ var _styles_BoardPage_BoardColumnHeader_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_BoardColumnHeader_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _styles_BoardPage_BoardHeader_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/BoardPage/BoardHeader.scss */ \"./styles/BoardPage/BoardHeader.scss\");\n/* harmony import */ var _styles_BoardPage_BoardHeader_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_BoardHeader_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_BoardPage_BoardItem_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/BoardPage/BoardItem.scss */ \"./styles/BoardPage/BoardItem.scss\");\n/* harmony import */ var _styles_BoardPage_BoardItem_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_BoardItem_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _styles_BoardPage_BoardPage_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/BoardPage/BoardPage.scss */ \"./styles/BoardPage/BoardPage.scss\");\n/* harmony import */ var _styles_BoardPage_BoardPage_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_BoardPage_BoardPage_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _styles_Header_Header_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Header/Header.scss */ \"./styles/Header/Header.scss\");\n/* harmony import */ var _styles_Header_Header_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_Header_scss__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _styles_Header_ProfileDropdown_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/Header/ProfileDropdown.scss */ \"./styles/Header/ProfileDropdown.scss\");\n/* harmony import */ var _styles_Header_ProfileDropdown_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_ProfileDropdown_scss__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _styles_Header_Searchbar_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/Header/Searchbar.scss */ \"./styles/Header/Searchbar.scss\");\n/* harmony import */ var _styles_Header_Searchbar_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_Searchbar_scss__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _styles_Auth_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/Auth.scss */ \"./styles/Auth.scss\");\n/* harmony import */ var _styles_Auth_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_Auth_scss__WEBPACK_IMPORTED_MODULE_17__);\n\nvar _jsxFileName = \"/Users/tejasbaid/Desktop/Projects/Web Projects/thullo/thullo-client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Contexts__WEBPACK_IMPORTED_MODULE_2__[\"Contexts\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 10\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUFPLHFFQUFDLDZEQUFEO0FBQUEsMkJBQ0wscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREs7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBR0Q7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuc2NzcydcbmltcG9ydCB7Q29udGV4dHN9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRleHRzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgJy4uL3N0eWxlcy9BbGxCb2FyZHNQYWdlL0FsbEJvYXJkc1BhZ2Uuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0FsbEJvYXJkc1BhZ2UvQWxsQm9hcmRzR3JpZEl0ZW0uc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0FsbEJvYXJkc1BhZ2UvQWxsQm9hcmRzUGFnZUdyaWQuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0FsbEJvYXJkc1BhZ2UvQm9hcmRzUGFnZUhlYWRlci5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvQm9hcmRQYWdlL0FkZENhcmRCdXR0b24uc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0JvYXJkUGFnZS9Cb2FyZENvbHVtbi5zY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvQm9hcmRQYWdlL0JvYXJkQ29sdW1uSGVhZGVyLnNjc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRIZWFkZXIuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0JvYXJkUGFnZS9Cb2FyZEl0ZW0uc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0JvYXJkUGFnZS9Cb2FyZFBhZ2Uuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0hlYWRlci9IZWFkZXIuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0hlYWRlci9Qcm9maWxlRHJvcGRvd24uc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0hlYWRlci9TZWFyY2hiYXIuc2NzcydcbmltcG9ydCAnLi4vc3R5bGVzL0F1dGguc2NzcydcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPENvbnRleHRzPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9Db250ZXh0cz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/AllBoardsPage/AllBoardsGridItem.scss":
/*!*****************************************************!*\
  !*** ./styles/AllBoardsPage/AllBoardsGridItem.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9BbGxCb2FyZHNQYWdlL0FsbEJvYXJkc0dyaWRJdGVtLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/AllBoardsPage/AllBoardsGridItem.scss\n");

/***/ }),

/***/ "./styles/AllBoardsPage/AllBoardsPage.scss":
/*!*************************************************!*\
  !*** ./styles/AllBoardsPage/AllBoardsPage.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9BbGxCb2FyZHNQYWdlL0FsbEJvYXJkc1BhZ2Uuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/AllBoardsPage/AllBoardsPage.scss\n");

/***/ }),

/***/ "./styles/AllBoardsPage/AllBoardsPageGrid.scss":
/*!*****************************************************!*\
  !*** ./styles/AllBoardsPage/AllBoardsPageGrid.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9BbGxCb2FyZHNQYWdlL0FsbEJvYXJkc1BhZ2VHcmlkLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/AllBoardsPage/AllBoardsPageGrid.scss\n");

/***/ }),

/***/ "./styles/AllBoardsPage/BoardsPageHeader.scss":
/*!****************************************************!*\
  !*** ./styles/AllBoardsPage/BoardsPageHeader.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9BbGxCb2FyZHNQYWdlL0JvYXJkc1BhZ2VIZWFkZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/AllBoardsPage/BoardsPageHeader.scss\n");

/***/ }),

/***/ "./styles/Auth.scss":
/*!**************************!*\
  !*** ./styles/Auth.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9BdXRoLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Auth.scss\n");

/***/ }),

/***/ "./styles/BoardPage/AddCardButton.scss":
/*!*********************************************!*\
  !*** ./styles/BoardPage/AddCardButton.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQWRkQ2FyZEJ1dHRvbi5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/BoardPage/AddCardButton.scss\n");

/***/ }),

/***/ "./styles/BoardPage/BoardColumn.scss":
/*!*******************************************!*\
  !*** ./styles/BoardPage/BoardColumn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRDb2x1bW4uc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/BoardPage/BoardColumn.scss\n");

/***/ }),

/***/ "./styles/BoardPage/BoardColumnHeader.scss":
/*!*************************************************!*\
  !*** ./styles/BoardPage/BoardColumnHeader.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRDb2x1bW5IZWFkZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/BoardPage/BoardColumnHeader.scss\n");

/***/ }),

/***/ "./styles/BoardPage/BoardHeader.scss":
/*!*******************************************!*\
  !*** ./styles/BoardPage/BoardHeader.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRIZWFkZXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/BoardPage/BoardHeader.scss\n");

/***/ }),

/***/ "./styles/BoardPage/BoardItem.scss":
/*!*****************************************!*\
  !*** ./styles/BoardPage/BoardItem.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRJdGVtLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/BoardPage/BoardItem.scss\n");

/***/ }),

/***/ "./styles/BoardPage/BoardPage.scss":
/*!*****************************************!*\
  !*** ./styles/BoardPage/BoardPage.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9Cb2FyZFBhZ2UvQm9hcmRQYWdlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/BoardPage/BoardPage.scss\n");

/***/ }),

/***/ "./styles/Header/Header.scss":
/*!***********************************!*\
  !*** ./styles/Header/Header.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9IZWFkZXIvSGVhZGVyLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Header/Header.scss\n");

/***/ }),

/***/ "./styles/Header/ProfileDropdown.scss":
/*!********************************************!*\
  !*** ./styles/Header/ProfileDropdown.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9IZWFkZXIvUHJvZmlsZURyb3Bkb3duLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Header/ProfileDropdown.scss\n");

/***/ }),

/***/ "./styles/Header/Searchbar.scss":
/*!**************************************!*\
  !*** ./styles/Header/Searchbar.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9IZWFkZXIvU2VhcmNoYmFyLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Header/Searchbar.scss\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/globals.scss\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-uuid":
/*!*****************************!*\
  !*** external "react-uuid" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-uuid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11dWlkXCI/YTA4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC11dWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdXVpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-uuid\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });