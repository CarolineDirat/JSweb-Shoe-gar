/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blog.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blog.js":
/*!*********************!*\
  !*** ./src/blog.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar api = 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site';\nvar loadButton = document.getElementById('load-button');\nloadButton.addEventListener('click', function () {\n  console.log(\"l'adresse de l'api 'https://master-7rqtwti-fus3tltfddn7w.eu-2.platformsh.site' ne fonctionne plus (erreur 404)\");\n});\n\nfunction getRequest(url) {\n  return new Promise(function (resolve, reject) {\n    var request = new XMLHttpRequest();\n    request.open('GET', url);\n\n    request.onreadystatechange = function () {\n      if (request.readyState === 4) {\n        if (request.status !== 200) {\n          reject(JSON.parse(request.response));\n        }\n\n        resolve(JSON.parse(request.response));\n      }\n    };\n\n    request.send();\n  });\n}\n\nfunction getBlogPost() {\n  var titlePromise, loremPromise, _ref, _ref2, titleResponse, loremResponse;\n\n  return regeneratorRuntime.async(function getBlogPost$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          titlePromise = getRequest(api + '/generate-title');\n          loremPromise = getRequest(api + '/generate-lorem');\n          _context.prev = 2;\n          _context.next = 5;\n          return regeneratorRuntime.awrap(Promise.all([titlePromise, loremPromise]));\n\n        case 5:\n          _ref = _context.sent;\n          _ref2 = _slicedToArray(_ref, 2);\n          titleResponse = _ref2[0];\n          loremResponse = _ref2[1];\n          document.querySelector('main').appendChild(buildPostElement(titleResponse.title, loremResponse.lorem));\n          _context.next = 15;\n          break;\n\n        case 12:\n          _context.prev = 12;\n          _context.t0 = _context[\"catch\"](2);\n          document.querySelector('main').appendChild(buildPostElement('Une erreur est survenue !', _context.t0));\n\n        case 15:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[2, 12]]);\n}\n\nloadButton.addEventListener('click', function _callee() {\n  return regeneratorRuntime.async(function _callee$(_context2) {\n    while (1) {\n      switch (_context2.prev = _context2.next) {\n        case 0:\n          getBlogPost();\n\n        case 1:\n        case \"end\":\n          return _context2.stop();\n      }\n    }\n  });\n});\n\nfunction buildPostElement(title, content) {\n  var card = document.createElement('div');\n  var cardBody = document.createElement('div');\n  var cardTitle = document.createElement('h2');\n  var cardContent = document.createElement('p');\n  card.classList.add('card');\n  cardBody.classList.add('card-body');\n  cardTitle.classList.add('card-title');\n  cardContent.classList.add('card-text');\n  cardTitle.textContent = title;\n  cardContent.textContent = content;\n  cardBody.appendChild(cardTitle);\n  cardBody.appendChild(cardContent);\n  card.appendChild(cardBody);\n  return card;\n}\n\n//# sourceURL=webpack:///./src/blog.js?");

/***/ })

/******/ });