/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nfunction initInteractive(data) {\n    return __awaiter(this, void 0, void 0, function () {\n        function createEmittors(emittor) {\n            data.initial(emittor);\n            emittor.addEventListener(\"click\", function (e) { return data.onClick(e, emittor); });\n            emittor.addEventListener(\"mouseenter\", function (e) {\n                return delay(function () { return data.onHover(true, e, emittor); });\n            });\n            emittor.addEventListener(\"mouseleave\", function (e) {\n                return delay(function () { return data.onHover(false, e, emittor); });\n            });\n        }\n        var img, svg;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    img = createBackplate(data.backplateUrl);\n                    return [4 /*yield*/, createSvg(data.svgUrl)];\n                case 1:\n                    svg = _a.sent();\n                    data.containerElement.append(svg, img);\n                    svg.querySelectorAll(\"g\").forEach(createEmittors);\n                    setStyleTo(data.containerElement, {\n                        paddingBottom: \"\".concat((svg.clientHeight / svg.clientWidth) * 100, \"%\"),\n                    });\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nfunction delay(cb) {\n    setTimeout(cb, 150);\n}\nfunction createBackplate(src) {\n    var img = document.createElement(\"img\");\n    img.setAttribute(\"src\", src);\n    return img;\n}\nfunction createSvg(url) {\n    return __awaiter(this, void 0, void 0, function () {\n        var apiUrl, res, svgString, parser, svgElement;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    apiUrl = window.location.origin + \"/\" + url;\n                    return [4 /*yield*/, fetch(apiUrl)];\n                case 1:\n                    res = _a.sent();\n                    return [4 /*yield*/, res.text()];\n                case 2:\n                    svgString = _a.sent();\n                    parser = new DOMParser();\n                    svgElement = parser.parseFromString(svgString, \"text/html\");\n                    return [2 /*return*/, svgElement.querySelector(\"svg\")];\n            }\n        });\n    });\n}\nfunction setStyleTo(el, style) {\n    Object.assign(el.style, style);\n}\nwindow.setStyleTo = setStyleTo;\nwindow.initInteractive = initInteractive;\n\n\n//# sourceURL=webpack://rezidence_horovice/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;