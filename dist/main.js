/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: none;
}

:root {
  --main-color: #ffffff;
  --main-text-color: #d04848;
  --nav-bg-color: #f5f5f5;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

html {
  font-family: "Roboto", sans-serif;
  /* color-scheme: dark light; */
}

body {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  position: relative;
}

img,
picture,
svg,
video {
  display: block;
  max-width: 100%;
}

img {
  vertical-align: middle;
  height: auto;
  font-style: italic;
  background-repeat: no-repeat;
  background-size: cover;
  shape-margin: 0.75rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p {
  max-width: 75ch;
  text-wrap: pretty;
  font-size: 2rem;
}

input {
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  padding: 2px 4px;
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  outline: none;
}

@media (prefers-reduced-motion: no-preference) {
  :has(:target) {
    scroll-behavior: smooth;
  }
}

.project-btn-wrapper,
.del-project-popup-btn-wrapper {
  display: flex;
  gap: 32px;
}
.del-project-popup-header {
  text-align: center;
  margin-bottom: 16px;
}

.del-project-popup-btn-wrapper {
  justify-content: center;
  align-items: center;
}
.show-task-form-btn,
#add-project-btn,
#cancel-project-btn,
#add-task-btn,
#cancel-task-btn,
.del-project-popup-btn-wrapper > button,
.edit-project-popup-btn-wrapper > button,
#edit-task-submit-btn,
#edit-task-cancel-btn {
  width: 100px;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
  padding: 4px 8px;
}

#add-project-btn:hover,
#cancel-project-btn:hover,
#add-task-btn:hover,
#cancel-task-btn:hover,
.del-project-popup-btn-wrapper > button:hover,
.edit-project-popup-btn-wrapper > button:hover {
  background-color: rgb(194, 194, 194);
}

.project-form-btn {
  width: 125px;
  background-color: rgb(245, 245, 245);
  border-radius: 10px;
  padding: 4px 8px;
}

.project-form-btn:hover {
  background-color: rgb(194, 194, 194);
}

/* header section */

.header-wrapper {
  background-color: var(--main-color);
  color: var(--main-text-color);
  padding: 16px;
}

.header-container {
  max-width: 1920px;
  display: flex;
  gap: 16px;
  font-size: 1.25rem;
}

.wrapper {
  display: flex;
  flex: 1;
}

/* nav */

.navbar-wrapper {
  background-color: var(--nav-bg-color);
  padding: 16px;
}

.navbar-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}

.project-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  margin-bottom: 8px;
  border-bottom: 1px solid rgb(196, 196, 196);
}

#show-project-form-btn,
#task-popup-close-btn {
  width: auto;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.project-list-container {
  gap: 16px;
}

.project-nav-item,
.navbar-container > div {
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
}

.project-nav-item:hover,
.navbar-container > div:hover {
  background-color: rgb(196, 196, 196);
}

/* content */
.content-container {
  border: 1px solid #dbdbdb;
  padding: 1rem;
  flex: 1;
}

.project-header-name {
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.task-container {
  margin-top: 16px;
}

.task-content {
  display: grid;
  grid-template-columns: 1fr 5fr 5fr 3fr 2fr 1fr 1fr 1fr;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid gray;
  padding: 4px 8px;
  border-radius: 10px;
  cursor: pointer;
}
.task-content:hover {
  background-color: aliceblue;
}

.task-content > div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.task-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.high-priority {
  border-left: 15px solid #d04848;
}
.medium-priority {
  border-left: 15px solid #ffe25f;
}
.low-priority {
  border-left: 15px solid #95fd92;
}

.task-status-true {
  text-decoration-line: line-through;
  background-color: var(--nav-bg-color);
}

/* footer */
footer {
  margin-top: auto;
}

/* project form */
.project-form-container {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 1rem;
  width: 300px;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
}

#project-form > div,
#project-form > div.project-form-text > label {
  display: block;
  margin-bottom: 16px;
}

/* task form */
#edit-task-form,
/* .edit-task-form, */
#task-form,
.del-project-popup {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  padding: 1rem;
  width: 300px;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
}
#task-form > div,
#edit-task-form > div {
  margin-bottom: 16px;
}

.task-btn-container,
.edit-task-btn-container {
  display: flex;
  justify-content: space-around;
}

.task-input-name > label,
.task-input-description > label,
.task-input-duedate > label,
.edit-task-input-name > label,
.edit-task-input-description > label,
.edit-task-input-duedate > label {
  display: block;
  margin-bottom: 16px;
}

#task-popup-detail-container,
.edit-project-popup {
  display: none;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 16px;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
}

.edit-project-input-wrapper {
  margin-bottom: 16px;
}
label[for="edit_project_name"] {
  font-size: 1.25rem;
  display: block;
  margin-bottom: 16px;
}

.edit-project-popup-btn-wrapper {
  display: flex;
  justify-content: space-around;
}
#task-popup-detail-header-text {
  font-size: 1.25rem;
}

.task-popup-header-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

#task-popup-close-btn {
  background-color: white;
}

.task-popup-detail-wrapper {
  display: grid;
  grid-template-columns: 75px 1fr;
  margin-bottom: 8px;
}

/* footer */

footer {
  padding: 16px;
}

.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}
.footer-github-logo {
  width: 25px;
}
@media screen and (max-width: 500px) {
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n.material-symbols-outlined {\n  font-variation-settings: \"FILL\" 0, \"wght\" 400, \"GRAD\" 0, \"opsz\" 24;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n}\n\n:root {\n  --main-color: #ffffff;\n  --main-text-color: #d04848;\n  --nav-bg-color: #f5f5f5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml {\n  font-family: \"Roboto\", sans-serif;\n  /* color-scheme: dark light; */\n}\n\nbody {\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  vertical-align: middle;\n  height: auto;\n  font-style: italic;\n  background-repeat: no-repeat;\n  background-size: cover;\n  shape-margin: 0.75rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n  font-size: 2rem;\n}\n\ninput {\n  outline: none;\n  border: 1px solid black;\n  border-radius: 10px;\n  width: 100%;\n  padding: 2px 4px;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n  }\n}\n\n.project-btn-wrapper,\n.del-project-popup-btn-wrapper {\n  display: flex;\n  gap: 32px;\n}\n.del-project-popup-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.del-project-popup-btn-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n.show-task-form-btn,\n#add-project-btn,\n#cancel-project-btn,\n#add-task-btn,\n#cancel-task-btn,\n.del-project-popup-btn-wrapper > button,\n.edit-project-popup-btn-wrapper > button,\n#edit-task-submit-btn,\n#edit-task-cancel-btn {\n  width: 100px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n#add-project-btn:hover,\n#cancel-project-btn:hover,\n#add-task-btn:hover,\n#cancel-task-btn:hover,\n.del-project-popup-btn-wrapper > button:hover,\n.edit-project-popup-btn-wrapper > button:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n.project-form-btn {\n  width: 125px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n.project-form-btn:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n/* header section */\n\n.header-wrapper {\n  background-color: var(--main-color);\n  color: var(--main-text-color);\n  padding: 16px;\n}\n\n.header-container {\n  max-width: 1920px;\n  display: flex;\n  gap: 16px;\n  font-size: 1.25rem;\n}\n\n.wrapper {\n  display: flex;\n  flex: 1;\n}\n\n/* nav */\n\n.navbar-wrapper {\n  background-color: var(--nav-bg-color);\n  padding: 16px;\n}\n\n.navbar-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n\n.project-nav-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgb(196, 196, 196);\n}\n\n#show-project-form-btn,\n#task-popup-close-btn {\n  width: auto;\n  padding: 0;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.project-list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.project-list-container {\n  gap: 16px;\n}\n\n.project-nav-item,\n.navbar-container > div {\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.project-nav-item:hover,\n.navbar-container > div:hover {\n  background-color: rgb(196, 196, 196);\n}\n\n/* content */\n.content-container {\n  border: 1px solid #dbdbdb;\n  padding: 1rem;\n  flex: 1;\n}\n\n.project-header-name {\n  font-size: 1.25rem;\n  margin-bottom: 16px;\n}\n\n.task-container {\n  margin-top: 16px;\n}\n\n.task-content {\n  display: grid;\n  grid-template-columns: 1fr 5fr 5fr 3fr 2fr 1fr 1fr 1fr;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n  border: 1px solid gray;\n  padding: 4px 8px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.task-content:hover {\n  background-color: aliceblue;\n}\n\n.task-content > div {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.high-priority {\n  border-left: 15px solid #d04848;\n}\n.medium-priority {\n  border-left: 15px solid #ffe25f;\n}\n.low-priority {\n  border-left: 15px solid #95fd92;\n}\n\n.task-status-true {\n  text-decoration-line: line-through;\n  background-color: var(--nav-bg-color);\n}\n\n/* footer */\nfooter {\n  margin-top: auto;\n}\n\n/* project form */\n.project-form-container {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n\n#project-form > div,\n#project-form > div.project-form-text > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n/* task form */\n#edit-task-form,\n/* .edit-task-form, */\n#task-form,\n.del-project-popup {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n#task-form > div,\n#edit-task-form > div {\n  margin-bottom: 16px;\n}\n\n.task-btn-container,\n.edit-task-btn-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.task-input-name > label,\n.task-input-description > label,\n.task-input-duedate > label,\n.edit-task-input-name > label,\n.edit-task-input-description > label,\n.edit-task-input-duedate > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n#task-popup-detail-container,\n.edit-project-popup {\n  display: none;\n  width: 500px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 16px;\n  border: 1px solid #b1b1b1;\n  border-radius: 10px;\n}\n\n.edit-project-input-wrapper {\n  margin-bottom: 16px;\n}\nlabel[for=\"edit_project_name\"] {\n  font-size: 1.25rem;\n  display: block;\n  margin-bottom: 16px;\n}\n\n.edit-project-popup-btn-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n#task-popup-detail-header-text {\n  font-size: 1.25rem;\n}\n\n.task-popup-header-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n#task-popup-close-btn {\n  background-color: white;\n}\n\n.task-popup-detail-wrapper {\n  display: grid;\n  grid-template-columns: 75px 1fr;\n  margin-bottom: 8px;\n}\n\n/* footer */\n\nfooter {\n  padding: 16px;\n}\n\n.footer-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.footer-github-logo {\n  width: 25px;\n}\n@media screen and (max-width: 500px) {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formattingDate: () => (/* binding */ formattingDate),
/* harmony export */   formattingDateForEditPopup: () => (/* binding */ formattingDateForEditPopup)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


function getMonthName(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[date.getMonth()];
}

function formattingDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = getMonthName(date);
  const day = date.getDate();
  return `${month} ${day}, ${year}`;
}

function formattingDateForEditPopup(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  console.log(`${year}-${month}-${day}`);
  return `${year}-${month}-${day}`;
}




/***/ }),

/***/ "./src/modules/editProjectName.js":
/*!****************************************!*\
  !*** ./src/modules/editProjectName.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEditProjectBtn: () => (/* binding */ createEditProjectBtn),
/* harmony export */   findProjectIndexFromProjectHeaderName: () => (/* binding */ findProjectIndexFromProjectHeaderName)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


function createEditProjectBtn() {
  const editProjectFormBtn = document.createElement("button");

  editProjectFormBtn.setAttribute("type", "submit");
  editProjectFormBtn.id = "edit-project-form-btn";
  editProjectFormBtn.classList.add("project-form-btn");
  editProjectFormBtn.textContent = "Edit Project";
  editProjectFormBtn.addEventListener("click", (e) => {
    toggleEditProjectForm();
    assignEditProjectInputValue();
  });
  return editProjectFormBtn;
}

function toggleEditProjectForm() {
  const editProjectForm = document.querySelector(".edit-project-popup");
  if (
    editProjectForm.style.display === "none" ||
    editProjectForm.style.display === ""
  ) {
    editProjectForm.style.display = "block";
  } else if (editProjectForm.style.display === "block") {
    editProjectForm.style.display = "none";
  }
}

function findProjectIndexFromProjectHeaderName() {
  const projectHeaderName = document.querySelector(".project-header-name");
  const projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === +projectHeaderName.dataset.index
  );
  return projectIndex;
}

function assignEditProjectInputValue() {
  const editProjectInput = document.querySelector("#edit_project_name");
  const projectIndex = findProjectIndexFromProjectHeaderName();

  editProjectInput.value = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name;
}

function addEventListenerCancelEditProjectForm() {
  const cancelProjectFormBtn = document.querySelector(
    "#edit-project-cancel-btn"
  );

  cancelProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleEditProjectForm();
  });
}

function addEventListenerSubmitEditProjectForm() {
  const submitProjectFormBtn = document.querySelector(
    "#edit-project-submit-btn"
  );

  submitProjectFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editProjectName();
    toggleEditProjectForm();
  });
}

function editProjectName() {
  const projectIndex = findProjectIndexFromProjectHeaderName();
  const projectEditName = document.querySelector("#edit_project_name").value;
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name = projectEditName;
  console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects);
  updateProjectHeaderNameTextContent(projectIndex);
  updateProjectNavbarNameTextContent(projectIndex);
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
}

function updateProjectHeaderNameTextContent(projectIndex) {
  const projectHeaderName = document.querySelector(".project-header-name");
  projectHeaderName.textContent = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name;
}

function updateProjectNavbarNameTextContent(projectIndex) {
  console.log(
    "🚀 ~ updateProjectNavbarNameTextContent ~ projectIndex:",
    projectIndex
  );
  const projectListContainer = document.querySelector(
    ".project-list-container"
  );
  projectListContainer.childNodes[projectIndex].textContent =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name;
}
addEventListenerCancelEditProjectForm();
addEventListenerSubmitEditProjectForm();




/***/ }),

/***/ "./src/modules/editTaskInfo.js":
/*!*************************************!*\
  !*** ./src/modules/editTaskInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToggleEditTaskForm: () => (/* binding */ addEventListenerToggleEditTaskForm)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _editProjectName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editProjectName.js */ "./src/modules/editProjectName.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date.js */ "./src/modules/date.js");




function toggleEditTaskForm() {
  const editTaskForm = document.querySelector("#edit-task-form");

  if (
    editTaskForm.style.display === "none" ||
    editTaskForm.style.display === ""
  ) {
    editTaskForm.style.display = "block";
  } else if (editTaskForm.style.display === "block") {
    editTaskForm.style.display = "none";
  }
}

function addEventListenerToggleEditTaskForm(button) {
  button.addEventListener("click", (e) => {
    toggleEditTaskForm();
    assignEditTaskFormValueToInput(e);
  });
}

function assignEditTaskFormValueToInput(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskId = taskContent.dataset.taskIndex;
  const projectId = taskContent.dataset.projectIndex;
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const editTaskNameInput = document.querySelector("#edit_task_name");
  const editTaskDesInput = document.querySelector("#edit_task_description");
  const editTaskDueDateInput = document.querySelector("#edit_task_due_date");
  const editTaskPriorityInput = document.querySelector("#edit_task_priority");
  const projectIndex = findIndexFromTaskDataset(e).projectIndex;
  const taskIndex = findIndexFromTaskDataset(e).taskIndex;

  taskLabelName.dataset.projectId = projectId;
  taskLabelName.dataset.taskId = taskId;
  editTaskNameInput.value = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].name;
  editTaskDesInput.value = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].description;
  editTaskDueDateInput.value = (0,_date_js__WEBPACK_IMPORTED_MODULE_2__.formattingDateForEditPopup)(
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].duedate
  );

  editTaskPriorityInput.value =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority;
}

function findIndexFromTaskDataset(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskDatasetIndex = +taskContent.dataset.taskIndex;
  const projectDatasetIndex = +taskContent.dataset.projectIndex;
  const projectIndex = findProjectIndex(projectDatasetIndex);
  const taskIndex = findTaskIndex(projectDatasetIndex, taskDatasetIndex);
  return { projectIndex: projectIndex, taskIndex: taskIndex };
}

function findProjectIndex(projectDatasetIndex) {
  const projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === projectDatasetIndex
  );

  return projectIndex;
}

function findTaskIndex(projectDatasetIndex, taskDatasetIndex) {
  const projectIndex = findProjectIndex(projectDatasetIndex);
  const taskIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks.findIndex(
    (task) => task.id === taskDatasetIndex
  );

  return taskIndex;
}

function addEventListenerEditCancelBtn() {
  const editCancelBtn = document.querySelector("#edit-task-cancel-btn");
  editCancelBtn.addEventListener("click", (e) => {
    toggleEditTaskForm();
  });
}
addEventListenerEditCancelBtn();

function updateTaskInfo() {
  const editTaskNameInputValue =
    document.querySelector("#edit_task_name").value;
  const editTaskDesInputValue = document.querySelector(
    "#edit_task_description"
  ).value;
  const editTaskDueDateInputValue = document.querySelector(
    "#edit_task_due_date"
  ).value;
  const editTaskPriorityInputValue = document.querySelector(
    "#edit_task_priority"
  ).value;
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const projectId = +taskLabelName.dataset.projectId;
  const taskId = +taskLabelName.dataset.taskId;
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].updateTask(
    taskId,
    editTaskNameInputValue,
    editTaskDesInputValue,
    new Date(editTaskDueDateInputValue),
    editTaskPriorityInputValue
  );
  // projects[projectId].updateTask(
  //   taskId,
  //   editTaskNameInputValue,
  //   editTaskDesInputValue,
  //   editTaskDueDateInputValue,
  //   editTaskPriorityInputValue
  // );
}

function addEventListenerEditSubmitBtn() {
  const editSubmitBtn = document.querySelector("#edit-task-submit-btn");
  editSubmitBtn.addEventListener("click", (e) => {
    updateTaskInfo();
    updateTaskContentDOM();
    toggleEditTaskForm();
  });
}

function updateTaskContentDOM() {
  const taskContainer = document.querySelector(".task-container");
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const projectId = taskLabelName.dataset.projectId;
  const taskId = taskLabelName.dataset.taskId;
  const projectIndex = findProjectIndex(+projectId);
  const taskIndex = findTaskIndex(+projectId, +taskId);
  const taskContainerChildIndex = Array.from(
    taskContainer.childNodes
  ).findIndex(
    (element) =>
      element.dataset.projectIndex === projectId &&
      element.dataset.taskIndex === taskId
  );
  const targetTask = taskContainer.childNodes[taskContainerChildIndex];

  targetTask.querySelector("#task-status").checked =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].status;
  targetTask.querySelector(".task-name").textContent =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].name;
  targetTask.querySelector(".task-description").textContent =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].description;
  targetTask.querySelector(".task-duedate").textContent = (0,_date_js__WEBPACK_IMPORTED_MODULE_2__.formattingDate)(
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].duedate
  );
  // targetTask.querySelector(".task-duedate").textContent =
  //   projects[projectIndex].tasks[taskIndex].duedate;

  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === "1") {
    targetTask.querySelector(".task-priority").textContent = "Low";
    targetTask.className = "";
    targetTask.classList.add("task-content");
    targetTask.classList.add("low-priority");
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === "2") {
    targetTask.querySelector(".task-priority").textContent = "Medium";
    targetTask.className = "";
    targetTask.classList.add("task-content");
    targetTask.classList.add("medium-priority");
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === "3") {
    targetTask.querySelector(".task-priority").textContent = "High";
    targetTask.className = "";
    targetTask.classList.add("task-content");
    targetTask.classList.add("high-priority");
  }
}
addEventListenerEditSubmitBtn();



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   clearContentContainer: () => (/* binding */ clearContentContainer),
/* harmony export */   createHeaderName: () => (/* binding */ createHeaderName),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   reRenderProjectHeaderName: () => (/* binding */ reRenderProjectHeaderName),
/* harmony export */   renderProjectNavbar: () => (/* binding */ renderProjectNavbar),
/* harmony export */   renderProjectTask: () => (/* binding */ renderProjectTask),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _todayTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todayTask.js */ "./src/modules/todayTask.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");
/* harmony import */ var _removeProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeProject.js */ "./src/modules/removeProject.js");
/* harmony import */ var _setProjectLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setProjectLocalStorage.js */ "./src/modules/setProjectLocalStorage.js");
/* harmony import */ var _editProjectName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editProjectName.js */ "./src/modules/editProjectName.js");










let projects = [];
class Project {
  static #id = 0;
  taskId = 0;
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.id = Project.nextId();
  }

  static nextId() {
    return Project.#id++;
  }

  static getId() {
    return Project.#id;
  }

  static getLocalStorageProjectsId() {
    Project.#id = JSON.parse(localStorage.getItem("projectsId"));
  }
  static setLocalStorageProjectsId() {
    localStorage.setItem("projectsId", JSON.stringify(Project.getId()));
  }

  static clearProjectsId() {
    Project.#id = 0;
  }

  getId() {
    return this.id;
  }

  nextTaskId() {
    return this.taskId++;
  }

  getTaskId() {
    return this.taskId;
  }

  setLocalStorageProjectId() {
    localStorage.setItem("projectId", JSON.stringify(this.getId()));
  }

  getLocalStorageProjectId() {
    this.taskId = JSON.parse(localStorage.getItem("projectId"));
  }

  addTask(taskName, taskDescription, taskDuedate, taskPriority) {
    this.tasks.push(
      new _task_js__WEBPACK_IMPORTED_MODULE_1__.Task(
        this.id,
        this.nextTaskId(),
        taskName,
        taskDescription,
        taskDuedate,
        taskPriority,
        false
      )
    );
    updateProject();
  }

  deleteTask(taskId) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    this.tasks.splice(taskIndex, 1);
    updateProject();
  }

  updateTask(taskId, taskName, taskDes, taskDuedate, taskPriority) {
    let taskIndex = this.tasks.findIndex((task) => task.id === taskId);

    this.tasks[taskIndex].name = taskName;
    this.tasks[taskIndex].description = taskDes;
    this.tasks[taskIndex].duedate = taskDuedate;
    this.tasks[taskIndex].priority = taskPriority;
    updateProject();
  }
}

(0,_setProjectLocalStorage_js__WEBPACK_IMPORTED_MODULE_3__.setProjectLocalStorage)();

function createProject(name) {
  let project = new Project(name);
  projects.push(project);
  updateProject();
}

function updateProject() {
  localStorage.setItem("projectCollection", JSON.stringify(projects));
}

// add project

const showProjectFormBtn = document.querySelector("#show-project-form-btn");
const projectFormContainer = document.querySelector(".project-form-container");
const cancelFormBtn = document.querySelector("#cancel-project-btn");
const inputProjectName = document.querySelector("#project_name");
const addProjectBtn = document.querySelector("#add-project-btn");

showProjectFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "block";
});

cancelFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectFormContainer.style.display = "none";
});

addProjectBtn.addEventListener("click", (e) => {
  if (inputProjectName.value === "") {
    return;
  }
  Project.getLocalStorageProjectsId();
  createProject(inputProjectName.value);
  Project.setLocalStorageProjectsId();
  inputProjectName.value = "";
  projectFormContainer.style.display = "none";

  addNewProjectNavbar();
  e.preventDefault();
});

function addNewProjectNavbar() {
  const projectNavListContainer = document.querySelector(
    ".project-list-container"
  );
  const project = document.createElement("div");

  project.textContent = `${projects[projects.length - 1].name}`;
  project.dataset.index = `${Project.getId() - 1}`;
  project.classList.add("project-nav-item");

  project.addEventListener("click", (e) => {
    renderProjectContent(e);
    renderProjectTask(e);
  });

  projectNavListContainer.appendChild(project);
}

function renderProjectNavbar() {
  const projectData = JSON.parse(localStorage.getItem("projectCollection"));
  const projectNavListContainer = document.querySelector(
    ".project-list-container"
  );

  projectData.forEach((project) => {
    const projectDiv = document.createElement("div");

    projectDiv.textContent = `${project.name}`;
    projectDiv.dataset.index = `${project.id}`;
    projectDiv.classList.add("project-nav-item");

    projectDiv.addEventListener("click", (e) => {
      renderProjectContent(e);
      renderProjectTask(e);
    });

    projectNavListContainer.appendChild(projectDiv);
  });
}

function renderProjectContent(e) {
  e.stopPropagation();
  const contentContainer = document.querySelector(".content-container");
  const projectContentContainer = document.createElement("div");
  const projectBtnWrapper = document.createElement("div");
  clearContentContainer();
  projectBtnWrapper.classList.add("project-btn-wrapper");

  projectBtnWrapper.appendChild(createShowTaskFormBtn());
  projectBtnWrapper.appendChild((0,_editProjectName_js__WEBPACK_IMPORTED_MODULE_4__.createEditProjectBtn)());
  projectBtnWrapper.appendChild((0,_removeProject_js__WEBPACK_IMPORTED_MODULE_2__.createDeleteProjectBtn)());
  projectContentContainer.classList.add("project-content-container");
  projectContentContainer.appendChild(createProjectHeaderContent(e));
  projectContentContainer.appendChild(projectBtnWrapper);
  projectContentContainer.appendChild(createTaskContainer());
  contentContainer.appendChild(projectContentContainer);
}

function createProjectHeaderContent(e) {
  const projectHeaderName = document.createElement("div");
  const projectIndex = projects.findIndex(
    (project) => project.id === +e.target.dataset.index
  );

  projectHeaderName.textContent = `${projects[projectIndex].name}`;
  projectHeaderName.dataset.index = `${e.target.dataset.index}`;
  projectHeaderName.classList.add("project-header-name");
  return projectHeaderName;
}

function createTaskContainer() {
  const taskContainer = document.createElement("ul");
  taskContainer.classList.add("task-container");
  return taskContainer;
}

function createShowTaskFormBtn() {
  const showTaskFormBtn = document.createElement("button");
  showTaskFormBtn.setAttribute("type", "submit");
  showTaskFormBtn.classList.add("project-form-btn");
  showTaskFormBtn.textContent = "Add Task";
  showTaskFormBtn.addEventListener("click", (e) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toggleTaskForm)();
  });
  return showTaskFormBtn;
}

function clearContentContainer() {
  const contentContainer = document.querySelector(".content-container");

  while (contentContainer.firstElementChild) {
    contentContainer.removeChild(contentContainer.firstElementChild);
  }
}

function renderProjectTask(e) {
  let projectIndex;
  if (typeof e === "number") {
    projectIndex = projects.findIndex((project) => project.id === e);
  } else {
    projectIndex = projects.findIndex(
      (project) => project.id === +e.target.dataset.index
    );
  }

  const project = projects[projectIndex];

  project.tasks.forEach((task) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task);
  });
}

function renderDefaultAllTaskContent() {
  // projects.forEach((project) => {
  //   project.tasks.forEach((task) => {
  //     renderTask(task);
  //   });
  // });
  const tasks = [];
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      tasks.push(task);
    });
  });

  const sortedTasks = tasks.sort(function (a, b) {
    if (!(a.duedate instanceof Date)) {
      a.duedate = new Date(a.duedate);
    }
    if (!(b.duedate instanceof Date)) {
      b.duedate = new Date(b.duedate);
    }
    return a.duedate - b.duedate;
  });
  console.log(sortedTasks);
  sortedTasks.forEach((task) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task);
  });
}

renderDefaultAllTaskContent();

function clearTaskContainer() {
  const taskContainer = document.querySelector(".task-container");
  while (taskContainer.firstElementChild) {
    taskContainer.removeChild(taskContainer.firstElementChild);
  }
}

function createHeaderName(name) {
  const contentContainer = document.querySelector(".content-container");
  const taskContainer = document.createElement("ul");
  const projectHeaderName = document.createElement("div");
  taskContainer.classList.add("task-container");
  projectHeaderName.classList.add("project-header-name");
  projectHeaderName.textContent = name;
  contentContainer.appendChild(projectHeaderName);
  contentContainer.appendChild(taskContainer);
}

const allTaskBtn = document.querySelector(".all-task");

function reRenderProjectHeaderName(name) {
  clearContentContainer();
  createHeaderName(name);
  renderDefaultAllTaskContent();
}
allTaskBtn.addEventListener("click", (e) => {
  reRenderProjectHeaderName("All Task");
});




/***/ }),

/***/ "./src/modules/removeProject.js":
/*!**************************************!*\
  !*** ./src/modules/removeProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerRemoveProject: () => (/* binding */ addEventListenerRemoveProject),
/* harmony export */   createDeleteProjectBtn: () => (/* binding */ createDeleteProjectBtn),
/* harmony export */   removeProject: () => (/* binding */ removeProject),
/* harmony export */   toggleDelProjectPopup: () => (/* binding */ toggleDelProjectPopup)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


function createDeleteProjectBtn() {
  const deleteProjectFormBtn = document.createElement("button");
  deleteProjectFormBtn.setAttribute("type", "submit");
  deleteProjectFormBtn.id = "delete-project-form-btn";
  deleteProjectFormBtn.classList.add("project-form-btn");
  deleteProjectFormBtn.textContent = "Delete Project";
  deleteProjectFormBtn.addEventListener("click", toggleDelProjectPopup);
  // addEventListenerRemoveProject(deleteProjectFormBtn);
  return deleteProjectFormBtn;
}
function deleteProject(projectId) {
  let projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex((project) => project.id === projectId);

  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.splice(projectIndex, 1);
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
}

function removeProject() {
  const deleteProjectBtn = document.querySelector("#delete-project-form-btn");
  const projectBtnWrapper = deleteProjectBtn.parentNode;
  const projectContentContainer = projectBtnWrapper.parentNode;
  const projectId = +projectContentContainer.firstChild.dataset.index;

  deleteProject(projectId);
}

function addEventListenerRemoveProject(button) {
  button.addEventListener("click", (e) => {
    if (isDelProject) {
      removeProject();
    }
  });
}

function toggleDelProjectPopup() {
  const delProjectContainer = document.querySelector(".del-project-popup");

  if (
    delProjectContainer.style.display === "none" ||
    delProjectContainer.style.display === ""
  ) {
    delProjectContainer.style.display = "block";
  } else if (delProjectContainer.style.display === "block") {
    delProjectContainer.style.display = "none";
  }
}

function addEventListenerDelProjectYesBtn() {
  const delProjectYesBtn = document.querySelector("#del-project-yes-btn");
  delProjectYesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDelProjectPopup();

    removeProject();
    removeProjectFromDOM();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.reRenderProjectHeaderName)("All Task");
  });
}

function addEventListenerDelProjectNoBtn() {
  const delProjectNoBtn = document.querySelector("#del-project-no-btn");
  delProjectNoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleDelProjectPopup();
  });
}

function removeProjectFromDOM() {
  const projectListNav = document.querySelector(".project-list-container");
  const projectDatasetIndex = +document.querySelector(".project-header-name")
    .dataset.index;
  const projectIndex = Array.from(projectListNav.childNodes).findIndex(
    (element) => +element.dataset.index === projectDatasetIndex
  );
  projectListNav.removeChild(projectListNav.childNodes[projectIndex]);
}
addEventListenerDelProjectYesBtn();
addEventListenerDelProjectNoBtn();




/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerRemoveTask: () => (/* binding */ addEventListenerRemoveTask)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


function removeTask(e) {
  const taskContent = e.target.parentNode.parentNode;
  const projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === +taskContent.dataset.projectIndex
  );
  const taskIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks.findIndex(
    (task) => task.id === +taskContent.dataset.taskIndex
  );
  const taskId = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].id;
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].deleteTask(taskId);
  removeTaskFromDOM(taskId);
}

function removeTaskFromDOM(taskId) {
  const taskContainer = document.querySelector(".task-container");
  const taskIdIndex = Array.from(taskContainer.childNodes).findIndex(
    (task) => +task.dataset.taskIndex === taskId
  );
  taskContainer.removeChild(taskContainer.childNodes[taskIdIndex]);
}

function addEventListenerRemoveTask(button) {
  button.addEventListener("click", (e) => {
    removeTask(e);
  });
}




/***/ }),

/***/ "./src/modules/setProjectLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/modules/setProjectLocalStorage.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setProjectLocalStorage: () => (/* binding */ setProjectLocalStorage)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");

function isLocalStorageProjectsEmpty() {
  if (JSON.parse(localStorage.getItem("projectCollection") === null)) {
    return true;
  }
  return false;
}

function setProjectLocalStorage() {
  if (isLocalStorageProjectsEmpty()) {
    localStorage.setItem("projectCollection", JSON.stringify(_project_js__WEBPACK_IMPORTED_MODULE_0__.projects));
    _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.clearProjectsId();
    _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.setLocalStorageProjectsId();
  } else {
    loadProjectsFromLocalStorage();
    _project_js__WEBPACK_IMPORTED_MODULE_0__.Project.getLocalStorageProjectsId();
  }
}

function loadProjectsFromLocalStorage() {
  const storeProjects = JSON.parse(localStorage.getItem("projectCollection"));

  storeProjects.forEach((storeProject, index) => {
    const project = new _project_js__WEBPACK_IMPORTED_MODULE_0__.Project(storeProject.name);
    project.id = storeProject.id;
    project.tasks = storeProject.tasks;
    project.taskId = storeProject.taskId;

    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[index] = project;
  });
}




/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task),
/* harmony export */   clearTaskFormValue: () => (/* binding */ clearTaskFormValue),
/* harmony export */   renderTask: () => (/* binding */ renderTask),
/* harmony export */   toggleTaskForm: () => (/* binding */ toggleTaskForm)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _taskDetailPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDetailPopup.js */ "./src/modules/taskDetailPopup.js");
/* harmony import */ var _toggleTaskStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleTaskStatus.js */ "./src/modules/toggleTaskStatus.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask.js */ "./src/modules/removeTask.js");
/* harmony import */ var _editTaskInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editTaskInfo.js */ "./src/modules/editTaskInfo.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./date.js */ "./src/modules/date.js");
// this is task.js







class Task {
  constructor(projectId, id, name, description, duedate, priority, status) {
    this.projectId = projectId;
    this.id = id;
    this.name = name;
    this.description = description;
    this.duedate = duedate;
    this.priority = priority;
    this.status = status;
  }
}

function toggleTaskForm() {
  const taskForm = document.querySelector("#task-form");
  if (taskForm.style.display === "" || taskForm.style.display === "none") {
    taskForm.style.display = "block";
  } else if (taskForm.style.display === "block") {
    taskForm.style.display = "none";
  }
}

function clearTaskFormValue(e) {
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  taskInputName.value = "";
  taskInputDesciption.value = "";
  taskInputDuedate.value = "";
  taskInputPriority.value = "1";
}

function addEventListenerAddTaskBtn(button) {
  button.addEventListener("click", (e) => {
    createTask();
    toggleTaskForm();
    clearTaskFormValue();
    renderNewTask();
  });
}

addEventListenerAddTaskBtn(document.querySelector("#add-task-btn"));

function addEventListenerCancelTaskForm(button) {
  button.addEventListener("click", (e) => {
    toggleTaskForm();
    clearTaskFormValue();
  });
}
addEventListenerCancelTaskForm(document.querySelector("#cancel-task-btn"));

function createTask(e) {
  const taskInputName = document.querySelector("#task_name");
  const taskInputDesciption = document.querySelector("#task_description");
  const taskInputDuedate = document.querySelector("#task_due_date");
  const taskInputPriority = document.querySelector("#task_priority");

  const projectTargetIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) =>
      project.id ===
      +document.querySelector(".project-header-name").dataset.index
  );

  const taskInputDateValue = new Date(taskInputDuedate.value);

  if (
    taskInputName.value === "" ||
    taskInputDesciption.value === "" ||
    taskInputDuedate.value === "" ||
    taskInputPriority.value === ""
  ) {
    return;
  }
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectTargetIndex].addTask(
    taskInputName.value,
    taskInputDesciption.value,
    taskInputDateValue,
    taskInputPriority.value,
    false
  );
}

function renderTask(task) {
  const taskContainer = document.querySelector(".task-container");
  const taskList = document.createElement("li");
  const taskCheckBoxContainer = document.createElement("div");
  const taskStatus = document.createElement("input");
  const taskName = document.createElement("div");
  const taskDes = document.createElement("div");
  const taskDuedate = document.createElement("div");
  const taskPriority = document.createElement("div");
  const taskShowDetailBtn = document.createElement("button");
  const taskShowDetailBtnSpan = document.createElement("span");
  const taskEditDetailBtn = document.createElement("button");
  const taskEditDetailBtnSpan = document.createElement("span");
  const taskDeleteBtn = document.createElement("button");
  const taskDeleteBtnSpan = document.createElement("span");

  taskShowDetailBtn.setAttribute("type", "click");
  taskEditDetailBtn.setAttribute("type", "click");
  taskDeleteBtn.setAttribute("type", "click");

  taskShowDetailBtnSpan.textContent = "info";
  taskEditDetailBtnSpan.textContent = "edit";
  taskDeleteBtnSpan.textContent = "close";

  taskShowDetailBtnSpan.classList.add("material-symbols-outlined");
  taskEditDetailBtnSpan.classList.add("material-symbols-outlined");
  taskDeleteBtnSpan.classList.add("material-symbols-outlined");

  taskShowDetailBtn.appendChild(taskShowDetailBtnSpan);
  taskEditDetailBtn.appendChild(taskEditDetailBtnSpan);
  taskDeleteBtn.appendChild(taskDeleteBtnSpan);

  taskContainer.classList.add("task-container");
  taskList.classList.add("task-content");
  taskList.dataset.projectIndex = task.projectId;
  taskList.dataset.taskIndex = task.id;
  taskCheckBoxContainer.classList.add("task-checkbox");
  taskStatus.id = "task-status";
  taskStatus.setAttribute("type", "checkbox");

  taskName.classList.add("task-name");
  taskDes.classList.add("task-description");
  taskDuedate.classList.add("task-duedate");
  taskPriority.classList.add("task-priority");
  if (task.status === true) {
    taskList.classList.add("task-status-true");
  }
  taskStatus.checked = task.status;
  taskName.textContent = task.name;
  taskDes.textContent = task.description;
  taskDuedate.textContent = (0,_date_js__WEBPACK_IMPORTED_MODULE_5__.formattingDate)(task.duedate);
  // taskDuedate.textContent = task.duedate;

  if (task.priority === "1") {
    taskPriority.textContent = "Low";
    taskList.classList.add("low-priority");
  }
  if (task.priority === "2") {
    taskPriority.textContent = "Medium";
    taskList.classList.add("medium-priority");
  }
  if (task.priority === "3") {
    taskPriority.textContent = "High";
    taskList.classList.add("high-priority");
  }

  taskCheckBoxContainer.appendChild(taskStatus);
  taskList.appendChild(taskCheckBoxContainer);
  taskList.appendChild(taskName);
  taskList.appendChild(taskDes);
  taskList.appendChild(taskDuedate);
  taskList.appendChild(taskPriority);
  taskList.appendChild(taskShowDetailBtn);
  taskList.appendChild(taskEditDetailBtn);
  taskList.appendChild(taskDeleteBtn);

  (0,_toggleTaskStatus_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerToggleTaskStatus)(taskStatus);
  (0,_taskDetailPopup_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerRenderTaskDetailPopup)(taskShowDetailBtn);
  (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_3__.addEventListenerRemoveTask)(taskDeleteBtn);
  (0,_editTaskInfo_js__WEBPACK_IMPORTED_MODULE_4__.addEventListenerToggleEditTaskForm)(taskEditDetailBtn);
  taskContainer.appendChild(taskList);
}

function renderNewTask() {
  const projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) =>
      project.id ===
      +document.querySelector(".project-header-name").dataset.index
  );
  renderTask(
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks.length - 1]
  );
}




/***/ }),

/***/ "./src/modules/taskDetailPopup.js":
/*!****************************************!*\
  !*** ./src/modules/taskDetailPopup.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerCloseTaskDetailBtn: () => (/* binding */ addEventListenerCloseTaskDetailBtn),
/* harmony export */   addEventListenerRenderTaskDetailPopup: () => (/* binding */ addEventListenerRenderTaskDetailPopup),
/* harmony export */   renderTaskDetailPopup: () => (/* binding */ renderTaskDetailPopup)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ "./src/modules/date.js");


function addEventListenerCloseTaskDetailBtn() {
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  const taskDetailCloseBtn = document.querySelector("#task-popup-close-btn");
  taskDetailCloseBtn.addEventListener("click", (e) => {
    taskDetailContainer.style.display = "none";
  });
}

function renderTaskDetailPopup(e) {
  const taskContent = e.target.parentNode.parentNode;

  const projectId = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === +taskContent.dataset.projectIndex
  );

  const taskId = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks.findIndex(
    (task) => task.id === +taskContent.dataset.taskIndex
  );
  const taskDetailPopupHeaderText = document.querySelector(
    "#task-popup-detail-header-text"
  );
  const taskDetailPopupProjectName = document.querySelector(
    "#task-popup-project-name-value"
  );
  const taskDetailPopupPriority = document.querySelector(
    "#task-popup-priority-value"
  );

  const taskDetailPopupDueDate = document.querySelector(
    "#task-popup-duedate-value"
  );
  const taskDetailPopupDescription = document.querySelector(
    "#task-popup-description-value"
  );
  taskDetailPopupHeaderText.textContent = `${_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].name}`;
  taskDetailPopupProjectName.textContent = `${_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].name}`;
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].priority === "3") {
    taskDetailPopupPriority.textContent = "High";
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].priority === "2") {
    taskDetailPopupPriority.textContent = "Medium";
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].priority === "1") {
    taskDetailPopupPriority.textContent = "Low";
  }

  taskDetailPopupDueDate.textContent = `${(0,_date_js__WEBPACK_IMPORTED_MODULE_1__.formattingDate)(
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].duedate
  )}`;

  // taskDetailPopupDueDate.textContent = `${projects[projectId].tasks[taskId].duedate}`;
  taskDetailPopupDescription.textContent = `${_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].description}`;
}

function addEventListenerRenderTaskDetailPopup(button) {
  const taskDetailContainer = document.querySelector(
    "#task-popup-detail-container"
  );
  button.addEventListener("click", (e) => {
    renderTaskDetailPopup(e);
    taskDetailContainer.style.display = "block";
  });
}



/***/ }),

/***/ "./src/modules/todayTask.js":
/*!**********************************!*\
  !*** ./src/modules/todayTask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerTodayTask: () => (/* binding */ addEventListenerTodayTask)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/modules/task.js");




function isToday(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const today = new Date().getDate();
  if (today === date.getDate()) {
    return true;
  }
  return false;
}

function renderTodayTask() {
  const today = [];
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (isToday(task.duedate)) {
        today.push(task);
      }
    });
  });
  const sortedTodayPriorityTask = sortTaskPriorityHighToLow(today);
  sortedTodayPriorityTask.forEach((task) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task);
  });
}

function sortTaskPriorityHighToLow(arr) {
  arr.sort(function (a, b) {
    return Number(a.priority) - Number(b.priority);
  });
  arr.reverse();
  return arr;
}

function addEventListenerTodayTask() {
  const todayTaskNav = document.querySelector(".today-task");
  todayTaskNav.addEventListener("click", (e) => {
    console.log("hey");
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.clearContentContainer)();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createHeaderName)("Today Task");
    renderTodayTask();
  });
}

addEventListenerTodayTask();




/***/ }),

/***/ "./src/modules/toggleTaskStatus.js":
/*!*****************************************!*\
  !*** ./src/modules/toggleTaskStatus.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerToggleTaskStatus: () => (/* binding */ addEventListenerToggleTaskStatus),
/* harmony export */   toggleTaskStatus: () => (/* binding */ toggleTaskStatus)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/modules/project.js");


function toggleTaskStatus(e) {
  const taskContentContainer = e.target.parentNode.parentNode;

  const projectId = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === +taskContentContainer.dataset.projectIndex
  );
  const taskId = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks.findIndex(
    (task) => task.id === +taskContentContainer.dataset.taskIndex
  );

  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].status = e.target.checked;
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectId].tasks[taskId].status === false) {
    taskContentContainer.classList.remove("task-status-true");
  } else {
    taskContentContainer.classList.add("task-status-true");
  }
}

function addEventListenerToggleTaskStatus(button) {
  button.addEventListener("click", (e) => {
    toggleTaskStatus(e);
  });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project.js */ "./src/modules/project.js");
/* harmony import */ var _modules_taskDetailPopup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/taskDetailPopup.js */ "./src/modules/taskDetailPopup.js");



(0,_modules_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectNavbar)();
(0,_modules_taskDetailPopup_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerCloseTaskDetailBtn)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyx1R0FB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQztBQUN1QjtBQUNsRix3RUFBbUI7QUFDbkIsK0ZBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdFByb2plY3ROYW1lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0VGFza0luZm8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NldFByb2plY3RMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tEZXRhaWxQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kYXlUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2dnbGVUYXNrU3RhdHVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogXCJGSUxMXCIgMCwgXCJ3Z2h0XCIgNDAwLCBcIkdSQURcIiAwLCBcIm9wc3pcIiAyNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAtLW1haW4tY29sb3I6ICNmZmZmZmY7XG4gIC0tbWFpbi10ZXh0LWNvbG9yOiAjZDA0ODQ4O1xuICAtLW5hdi1iZy1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAvKiBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7ICovXG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDBzdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHNoYXBlLW1hcmdpbjogMC43NXJlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG5wIHtcbiAgbWF4LXdpZHRoOiA3NWNoO1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcbiAgOmhhcyg6dGFyZ2V0KSB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbn1cblxuLnByb2plY3QtYnRuLXdyYXBwZXIsXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMycHg7XG59XG4uZGVsLXByb2plY3QtcG9wdXAtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaG93LXRhc2stZm9ybS1idG4sXG4jYWRkLXByb2plY3QtYnRuLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcbiNhZGQtdGFzay1idG4sXG4jY2FuY2VsLXRhc2stYnRuLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcbiNlZGl0LXRhc2stc3VibWl0LWJ0bixcbiNlZGl0LXRhc2stY2FuY2VsLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bjpob3ZlcixcbiNhZGQtdGFzay1idG46aG92ZXIsXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbn1cblxuLnByb2plY3QtZm9ybS1idG4ge1xuICB3aWR0aDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLnByb2plY3QtZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG59XG5cbi8qIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLyogbmF2ICovXG5cbi5uYXZiYXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucHJvamVjdC1uYXYtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XG59XG5cbiNzaG93LXByb2plY3QtZm9ybS1idG4sXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcm9qZWN0LW5hdi1pdGVtLFxuLm5hdmJhci1jb250YWluZXIgPiBkaXYge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1uYXYtaXRlbTpob3Zlcixcbi5uYXZiYXItY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xufVxuXG4vKiBjb250ZW50ICovXG4uY29udGVudC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4OiAxO1xufVxuXG4ucHJvamVjdC1oZWFkZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciA1ZnIgM2ZyIDJmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzay1jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4udGFzay1jb250ZW50ID4gZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGFzay1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlnaC1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNkMDQ4NDg7XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZTI1Zjtcbn1cbi5sb3ctcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTVmZDkyO1xufVxuXG4udGFzay1zdGF0dXMtdHJ1ZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG59XG5cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLyogcHJvamVjdCBmb3JtICovXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcHJvamVjdC1mb3JtID4gZGl2LFxuI3Byb2plY3QtZm9ybSA+IGRpdi5wcm9qZWN0LWZvcm0tdGV4dCA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi8qIHRhc2sgZm9ybSAqL1xuI2VkaXQtdGFzay1mb3JtLFxuLyogLmVkaXQtdGFzay1mb3JtLCAqL1xuI3Rhc2stZm9ybSxcbi5kZWwtcHJvamVjdC1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3Rhc2stZm9ybSA+IGRpdixcbiNlZGl0LXRhc2stZm9ybSA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50YXNrLWJ0bi1jb250YWluZXIsXG4uZWRpdC10YXNrLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLnRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcbi50YXNrLWlucHV0LWR1ZWRhdGUgPiBsYWJlbCxcbi5lZGl0LXRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcbi5lZGl0LXByb2plY3QtcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxubGFiZWxbZm9yPVwiZWRpdF9wcm9qZWN0X25hbWVcIl0ge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4jdGFzay1wb3B1cC1kZXRhaWwtaGVhZGVyLXRleHQge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi50YXNrLXBvcHVwLWhlYWRlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhc2stcG9wdXAtZGV0YWlsLXdyYXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMWZyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi8qIGZvb3RlciAqL1xuXG5mb290ZXIge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZm9vdGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xufVxuLmZvb3Rlci1naXRodWItbG9nbyB7XG4gIHdpZHRoOiAyNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtFQUFrRTtFQUNsRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VB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QUNiLCtCQUErQjtFQUMvQixrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBcXFwiRklMTFxcXCIgMCwgXFxcIndnaHRcXFwiIDQwMCwgXFxcIkdSQURcXFwiIDAsIFxcXCJvcHN6XFxcIiAyNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLW1haW4tY29sb3I6ICNmZmZmZmY7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2QwNDg0ODtcXG4gIC0tbmF2LWJnLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC8qIGNvbG9yLXNjaGVtZTogZGFyayBsaWdodDsgKi9cXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDBzdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW1nLFxcbnBpY3R1cmUsXFxuc3ZnLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbWcge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgc2hhcGUtbWFyZ2luOiAwLjc1cmVtO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XFxufVxcblxcbnAge1xcbiAgbWF4LXdpZHRoOiA3NWNoO1xcbiAgdGV4dC13cmFwOiBwcmV0dHk7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmlucHV0IHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJweCA0cHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogbm8tcHJlZmVyZW5jZSkge1xcbiAgOmhhcyg6dGFyZ2V0KSB7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbiAgfVxcbn1cXG5cXG4ucHJvamVjdC1idG4td3JhcHBlcixcXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMzJweDtcXG59XFxuLmRlbC1wcm9qZWN0LXBvcHVwLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uc2hvdy10YXNrLWZvcm0tYnRuLFxcbiNhZGQtcHJvamVjdC1idG4sXFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcXG4jYWRkLXRhc2stYnRuLFxcbiNjYW5jZWwtdGFzay1idG4sXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b24sXFxuI2VkaXQtdGFzay1zdWJtaXQtYnRuLFxcbiNlZGl0LXRhc2stY2FuY2VsLWJ0biB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4jY2FuY2VsLXByb2plY3QtYnRuOmhvdmVyLFxcbiNhZGQtdGFzay1idG46aG92ZXIsXFxuI2NhbmNlbC10YXNrLWJ0bjpob3ZlcixcXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b246aG92ZXIsXFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRuIHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XFxufVxcblxcbi8qIGhlYWRlciBzZWN0aW9uICovXFxuXFxuLmhlYWRlci13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE5MjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4vKiBuYXYgKi9cXG5cXG4ubmF2YmFyLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5uYXZiYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG59XFxuXFxuLnByb2plY3QtbmF2LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5NiwgMTk2LCAxOTYpO1xcbn1cXG5cXG4jc2hvdy1wcm9qZWN0LWZvcm0tYnRuLFxcbiN0YXNrLXBvcHVwLWNsb3NlLWJ0biB7XFxuICB3aWR0aDogYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYXYtaXRlbSxcXG4ubmF2YmFyLWNvbnRhaW5lciA+IGRpdiB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LW5hdi1pdGVtOmhvdmVyLFxcbi5uYXZiYXItY29udGFpbmVyID4gZGl2OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuLyogY29udGVudCAqL1xcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlci1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgNWZyIDNmciAyZnIgMWZyIDFmciAxZnI7XFxuICBnYXA6IDE2cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnRhc2stY29udGVudDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbi50YXNrLWNvbnRlbnQgPiBkaXYge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnRhc2stY2hlY2tib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2QwNDg0ODtcXG59XFxuLm1lZGl1bS1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZmZlMjVmO1xcbn1cXG4ubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICM5NWZkOTI7XFxufVxcblxcbi50YXNrLXN0YXR1cy10cnVlIHtcXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLyogcHJvamVjdCBmb3JtICovXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtID4gZGl2LFxcbiNwcm9qZWN0LWZvcm0gPiBkaXYucHJvamVjdC1mb3JtLXRleHQgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi8qIHRhc2sgZm9ybSAqL1xcbiNlZGl0LXRhc2stZm9ybSxcXG4vKiAuZWRpdC10YXNrLWZvcm0sICovXFxuI3Rhc2stZm9ybSxcXG4uZGVsLXByb2plY3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jdGFzay1mb3JtID4gZGl2LFxcbiNlZGl0LXRhc2stZm9ybSA+IGRpdiB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4udGFzay1idG4tY29udGFpbmVyLFxcbi5lZGl0LXRhc2stYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50YXNrLWlucHV0LW5hbWUgPiBsYWJlbCxcXG4udGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxcbi50YXNrLWlucHV0LWR1ZWRhdGUgPiBsYWJlbCxcXG4uZWRpdC10YXNrLWlucHV0LW5hbWUgPiBsYWJlbCxcXG4uZWRpdC10YXNrLWlucHV0LWRlc2NyaXB0aW9uID4gbGFiZWwsXFxuLmVkaXQtdGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jdGFzay1wb3B1cC1kZXRhaWwtY29udGFpbmVyLFxcbi5lZGl0LXByb2plY3QtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1pbnB1dC13cmFwcGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbmxhYmVsW2Zvcj1cXFwiZWRpdF9wcm9qZWN0X25hbWVcXFwiXSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4jdGFzay1wb3B1cC1kZXRhaWwtaGVhZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4udGFzay1wb3B1cC1oZWFkZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFzay1wb3B1cC1kZXRhaWwtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5mb290ZXItd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG4uZm9vdGVyLWdpdGh1Yi1sb2dvIHtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGdldE1vbnRoTmFtZShkYXRlKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICBcIkphblwiLFxuICAgIFwiRmViXCIsXG4gICAgXCJNYXJcIixcbiAgICBcIkFwclwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5cIixcbiAgICBcIkp1bFwiLFxuICAgIFwiQXVnXCIsXG4gICAgXCJTZXBcIixcbiAgICBcIk9jdFwiLFxuICAgIFwiTm92XCIsXG4gICAgXCJEZWNcIixcbiAgXTtcbiAgcmV0dXJuIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBmb3JtYXR0aW5nRGF0ZShkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfVxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGdldE1vbnRoTmFtZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH1cbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc29sZS5sb2coYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YCk7XG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG5leHBvcnQgeyBmb3JtYXR0aW5nRGF0ZSwgZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFZGl0UHJvamVjdEJ0bigpIHtcbiAgY29uc3QgZWRpdFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBlZGl0UHJvamVjdEZvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgZWRpdFByb2plY3RGb3JtQnRuLmlkID0gXCJlZGl0LXByb2plY3QtZm9ybS1idG5cIjtcbiAgZWRpdFByb2plY3RGb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm0tYnRuXCIpO1xuICBlZGl0UHJvamVjdEZvcm1CdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgUHJvamVjdFwiO1xuICBlZGl0UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWRpdFByb2plY3RGb3JtKCk7XG4gICAgYXNzaWduRWRpdFByb2plY3RJbnB1dFZhbHVlKCk7XG4gIH0pO1xuICByZXR1cm4gZWRpdFByb2plY3RGb3JtQnRuO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LXBvcHVwXCIpO1xuICBpZiAoXG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCJcbiAgKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSBpZiAoZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RJbmRleEZyb21Qcm9qZWN0SGVhZGVyTmFtZSgpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLW5hbWVcIik7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Byb2plY3RIZWFkZXJOYW1lLmRhdGFzZXQuaW5kZXhcbiAgKTtcbiAgcmV0dXJuIHByb2plY3RJbmRleDtcbn1cblxuZnVuY3Rpb24gYXNzaWduRWRpdFByb2plY3RJbnB1dFZhbHVlKCkge1xuICBjb25zdCBlZGl0UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Byb2plY3RfbmFtZVwiKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleEZyb21Qcm9qZWN0SGVhZGVyTmFtZSgpO1xuXG4gIGVkaXRQcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJDYW5jZWxFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGNhbmNlbFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXByb2plY3QtY2FuY2VsLWJ0blwiXG4gICk7XG5cbiAgY2FuY2VsUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclN1Ym1pdEVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3Qgc3VibWl0UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtcHJvamVjdC1zdWJtaXQtYnRuXCJcbiAgKTtcblxuICBzdWJtaXRQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZWRpdFByb2plY3ROYW1lKCk7XG4gICAgdG9nZ2xlRWRpdFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoKSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKTtcbiAgY29uc3QgcHJvamVjdEVkaXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Byb2plY3RfbmFtZVwiKS52YWx1ZTtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lID0gcHJvamVjdEVkaXROYW1lO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gIHVwZGF0ZVByb2plY3RIZWFkZXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KTtcbiAgdXBkYXRlUHJvamVjdE5hdmJhck5hbWVUZXh0Q29udGVudChwcm9qZWN0SW5kZXgpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RIZWFkZXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICBwcm9qZWN0SGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdE5hdmJhck5hbWVUZXh0Q29udGVudChwcm9qZWN0SW5kZXgpIHtcbiAgY29uc29sZS5sb2coXG4gICAgXCLwn5qAIH4gdXBkYXRlUHJvamVjdE5hdmJhck5hbWVUZXh0Q29udGVudCB+IHByb2plY3RJbmRleDpcIixcbiAgICBwcm9qZWN0SW5kZXhcbiAgKTtcbiAgY29uc3QgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIlxuICApO1xuICBwcm9qZWN0TGlzdENvbnRhaW5lci5jaGlsZE5vZGVzW3Byb2plY3RJbmRleF0udGV4dENvbnRlbnQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJDYW5jZWxFZGl0UHJvamVjdEZvcm0oKTtcbmFkZEV2ZW50TGlzdGVuZXJTdWJtaXRFZGl0UHJvamVjdEZvcm0oKTtcblxuZXhwb3J0IHsgY3JlYXRlRWRpdFByb2plY3RCdG4sIGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZmluZFByb2plY3RJbmRleEZyb21Qcm9qZWN0SGVhZGVyTmFtZSB9IGZyb20gXCIuL2VkaXRQcm9qZWN0TmFtZS5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAsIGZvcm1hdHRpbmdEYXRlIH0gZnJvbSBcIi4vZGF0ZS5qc1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVFZGl0VGFza0Zvcm0oKSB7XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgaWYgKFxuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiXG4gICkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVFZGl0VGFza0Zvcm0oKTtcbiAgICBhc3NpZ25FZGl0VGFza0Zvcm1WYWx1ZVRvSW5wdXQoZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25FZGl0VGFza0Zvcm1WYWx1ZVRvSW5wdXQoZSkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0lkID0gdGFza0NvbnRlbnQuZGF0YXNldC50YXNrSW5kZXg7XG4gIGNvbnN0IHByb2plY3RJZCA9IHRhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZWRpdF90YXNrX25hbWVcIl0nKTtcbiAgY29uc3QgZWRpdFRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRfdGFza19uYW1lXCIpO1xuICBjb25zdCBlZGl0VGFza0Rlc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Rhc2tfZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Rhc2tfZHVlX2RhdGVcIik7XG4gIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF90YXNrX3ByaW9yaXR5XCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kSW5kZXhGcm9tVGFza0RhdGFzZXQoZSkucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kSW5kZXhGcm9tVGFza0RhdGFzZXQoZSkudGFza0luZGV4O1xuXG4gIHRhc2tMYWJlbE5hbWUuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gIHRhc2tMYWJlbE5hbWUuZGF0YXNldC50YXNrSWQgPSB0YXNrSWQ7XG4gIGVkaXRUYXNrTmFtZUlucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5hbWU7XG4gIGVkaXRUYXNrRGVzSW5wdXQudmFsdWUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gIGVkaXRUYXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAoXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmR1ZWRhdGVcbiAgKTtcblxuICBlZGl0VGFza1ByaW9yaXR5SW5wdXQudmFsdWUgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4RnJvbVRhc2tEYXRhc2V0KGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHRhc2tEYXRhc2V0SW5kZXggPSArdGFza0NvbnRlbnQuZGF0YXNldC50YXNrSW5kZXg7XG4gIGNvbnN0IHByb2plY3REYXRhc2V0SW5kZXggPSArdGFza0NvbnRlbnQuZGF0YXNldC5wcm9qZWN0SW5kZXg7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdERhdGFzZXRJbmRleCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRUYXNrSW5kZXgocHJvamVjdERhdGFzZXRJbmRleCwgdGFza0RhdGFzZXRJbmRleCk7XG4gIHJldHVybiB7IHByb2plY3RJbmRleDogcHJvamVjdEluZGV4LCB0YXNrSW5kZXg6IHRhc2tJbmRleCB9O1xufVxuXG5mdW5jdGlvbiBmaW5kUHJvamVjdEluZGV4KHByb2plY3REYXRhc2V0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0RGF0YXNldEluZGV4XG4gICk7XG5cbiAgcmV0dXJuIHByb2plY3RJbmRleDtcbn1cblxuZnVuY3Rpb24gZmluZFRhc2tJbmRleChwcm9qZWN0RGF0YXNldEluZGV4LCB0YXNrRGF0YXNldEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdERhdGFzZXRJbmRleCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrRGF0YXNldEluZGV4XG4gICk7XG5cbiAgcmV0dXJuIHRhc2tJbmRleDtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckVkaXRDYW5jZWxCdG4oKSB7XG4gIGNvbnN0IGVkaXRDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1jYW5jZWwtYnRuXCIpO1xuICBlZGl0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUVkaXRUYXNrRm9ybSgpO1xuICB9KTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJFZGl0Q2FuY2VsQnRuKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJbmZvKCkge1xuICBjb25zdCBlZGl0VGFza05hbWVJbnB1dFZhbHVlID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRfdGFza19uYW1lXCIpLnZhbHVlO1xuICBjb25zdCBlZGl0VGFza0Rlc0lucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXRfdGFza19kZXNjcmlwdGlvblwiXG4gICkudmFsdWU7XG4gIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXRfdGFza19kdWVfZGF0ZVwiXG4gICkudmFsdWU7XG4gIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0X3Rhc2tfcHJpb3JpdHlcIlxuICApLnZhbHVlO1xuICBjb25zdCB0YXNrTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZWRpdF90YXNrX25hbWVcIl0nKTtcbiAgY29uc3QgcHJvamVjdElkID0gK3Rhc2tMYWJlbE5hbWUuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHRhc2tJZCA9ICt0YXNrTGFiZWxOYW1lLmRhdGFzZXQudGFza0lkO1xuICBwcm9qZWN0c1twcm9qZWN0SWRdLnVwZGF0ZVRhc2soXG4gICAgdGFza0lkLFxuICAgIGVkaXRUYXNrTmFtZUlucHV0VmFsdWUsXG4gICAgZWRpdFRhc2tEZXNJbnB1dFZhbHVlLFxuICAgIG5ldyBEYXRlKGVkaXRUYXNrRHVlRGF0ZUlucHV0VmFsdWUpLFxuICAgIGVkaXRUYXNrUHJpb3JpdHlJbnB1dFZhbHVlXG4gICk7XG4gIC8vIHByb2plY3RzW3Byb2plY3RJZF0udXBkYXRlVGFzayhcbiAgLy8gICB0YXNrSWQsXG4gIC8vICAgZWRpdFRhc2tOYW1lSW5wdXRWYWx1ZSxcbiAgLy8gICBlZGl0VGFza0Rlc0lucHV0VmFsdWUsXG4gIC8vICAgZWRpdFRhc2tEdWVEYXRlSW5wdXRWYWx1ZSxcbiAgLy8gICBlZGl0VGFza1ByaW9yaXR5SW5wdXRWYWx1ZVxuICAvLyApO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyRWRpdFN1Ym1pdEJ0bigpIHtcbiAgY29uc3QgZWRpdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXN1Ym1pdC1idG5cIik7XG4gIGVkaXRTdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlVGFza0luZm8oKTtcbiAgICB1cGRhdGVUYXNrQ29udGVudERPTSgpO1xuICAgIHRvZ2dsZUVkaXRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbnRlbnRET00oKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZWRpdF90YXNrX25hbWVcIl0nKTtcbiAgY29uc3QgcHJvamVjdElkID0gdGFza0xhYmVsTmFtZS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgdGFza0lkID0gdGFza0xhYmVsTmFtZS5kYXRhc2V0LnRhc2tJZDtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleCgrcHJvamVjdElkKTtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleCgrcHJvamVjdElkLCArdGFza0lkKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lckNoaWxkSW5kZXggPSBBcnJheS5mcm9tKFxuICAgIHRhc2tDb250YWluZXIuY2hpbGROb2Rlc1xuICApLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT5cbiAgICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXggPT09IHByb2plY3RJZCAmJlxuICAgICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJbmRleCA9PT0gdGFza0lkXG4gICk7XG4gIGNvbnN0IHRhcmdldFRhc2sgPSB0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXNbdGFza0NvbnRhaW5lckNoaWxkSW5kZXhdO1xuXG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIiN0YXNrLXN0YXR1c1wiKS5jaGVja2VkID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uc3RhdHVzO1xuICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1uYW1lXCIpLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ubmFtZTtcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVzY3JpcHRpb25cIikudGV4dENvbnRlbnQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlZGF0ZVwiKS50ZXh0Q29udGVudCA9IGZvcm1hdHRpbmdEYXRlKFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kdWVkYXRlXG4gICk7XG4gIC8vIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLWR1ZWRhdGVcIikudGV4dENvbnRlbnQgPVxuICAvLyAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kdWVkYXRlO1xuXG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPT09IFwiMVwiKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIHRhcmdldFRhc2suY2xhc3NOYW1lID0gXCJcIjtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKFwibG93LXByaW9yaXR5XCIpO1xuICB9XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPT09IFwiMlwiKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHRhcmdldFRhc2suY2xhc3NOYW1lID0gXCJcIjtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKFwibWVkaXVtLXByaW9yaXR5XCIpO1xuICB9XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPT09IFwiM1wiKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIikudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH1cbn1cbmFkZEV2ZW50TGlzdGVuZXJFZGl0U3VibWl0QnRuKCk7XG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtIH07XG4iLCJpbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9kYXlUYXNrIH0gZnJvbSBcIi4vdG9kYXlUYXNrLmpzXCI7XG5cbmltcG9ydCB7IFRhc2ssIHRvZ2dsZVRhc2tGb3JtLCByZW5kZXJUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVEZWxldGVQcm9qZWN0QnRuIH0gZnJvbSBcIi4vcmVtb3ZlUHJvamVjdC5qc1wiO1xuXG5pbXBvcnQgeyBzZXRQcm9qZWN0TG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vc2V0UHJvamVjdExvY2FsU3RvcmFnZS5qc1wiO1xuXG5pbXBvcnQgeyBjcmVhdGVFZGl0UHJvamVjdEJ0biB9IGZyb20gXCIuL2VkaXRQcm9qZWN0TmFtZS5qc1wiO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgI2lkID0gMDtcbiAgdGFza0lkID0gMDtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuaWQgPSBQcm9qZWN0Lm5leHRJZCgpO1xuICB9XG5cbiAgc3RhdGljIG5leHRJZCgpIHtcbiAgICByZXR1cm4gUHJvamVjdC4jaWQrKztcbiAgfVxuXG4gIHN0YXRpYyBnZXRJZCgpIHtcbiAgICByZXR1cm4gUHJvamVjdC4jaWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpIHtcbiAgICBQcm9qZWN0LiNpZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c0lkXCIpKTtcbiAgfVxuICBzdGF0aWMgc2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzSWRcIiwgSlNPTi5zdHJpbmdpZnkoUHJvamVjdC5nZXRJZCgpKSk7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJQcm9qZWN0c0lkKCkge1xuICAgIFByb2plY3QuI2lkID0gMDtcbiAgfVxuXG4gIGdldElkKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgbmV4dFRhc2tJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrSWQrKztcbiAgfVxuXG4gIGdldFRhc2tJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXNrSWQ7XG4gIH1cblxuICBzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0SWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0SWRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRJZCgpKSk7XG4gIH1cblxuICBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0SWQoKSB7XG4gICAgdGhpcy50YXNrSWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdElkXCIpKTtcbiAgfVxuXG4gIGFkZFRhc2sodGFza05hbWUsIHRhc2tEZXNjcmlwdGlvbiwgdGFza0R1ZWRhdGUsIHRhc2tQcmlvcml0eSkge1xuICAgIHRoaXMudGFza3MucHVzaChcbiAgICAgIG5ldyBUYXNrKFxuICAgICAgICB0aGlzLmlkLFxuICAgICAgICB0aGlzLm5leHRUYXNrSWQoKSxcbiAgICAgICAgdGFza05hbWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgdGFza0R1ZWRhdGUsXG4gICAgICAgIHRhc2tQcmlvcml0eSxcbiAgICAgICAgZmFsc2VcbiAgICAgIClcbiAgICApO1xuICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgfVxuXG4gIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB1cGRhdGVQcm9qZWN0KCk7XG4gIH1cblxuICB1cGRhdGVUYXNrKHRhc2tJZCwgdGFza05hbWUsIHRhc2tEZXMsIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0ubmFtZSA9IHRhc2tOYW1lO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbiA9IHRhc2tEZXM7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLmR1ZWRhdGUgPSB0YXNrRHVlZGF0ZTtcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICB9XG59XG5cbnNldFByb2plY3RMb2NhbFN0b3JhZ2UoKTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gIHVwZGF0ZVByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdCgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG4vLyBhZGQgcHJvamVjdFxuXG5jb25zdCBzaG93UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Nob3ctcHJvamVjdC1mb3JtLWJ0blwiKTtcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgY2FuY2VsRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLXByb2plY3QtYnRuXCIpO1xuY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdF9uYW1lXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnRuXCIpO1xuXG5zaG93UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuXG5jYW5jZWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBQcm9qZWN0LmdldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgY3JlYXRlUHJvamVjdChpbnB1dFByb2plY3ROYW1lLnZhbHVlKTtcbiAgUHJvamVjdC5zZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIGlucHV0UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgYWRkTmV3UHJvamVjdE5hdmJhcigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdE5hdmJhcigpIHtcbiAgY29uc3QgcHJvamVjdE5hdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIlxuICApO1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0ubmFtZX1gO1xuICBwcm9qZWN0LmRhdGFzZXQuaW5kZXggPSBgJHtQcm9qZWN0LmdldElkKCkgLSAxfWA7XG4gIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmF2LWl0ZW1cIik7XG5cbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW5kZXJQcm9qZWN0Q29udGVudChlKTtcbiAgICByZW5kZXJQcm9qZWN0VGFzayhlKTtcbiAgfSk7XG5cbiAgcHJvamVjdE5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3ROYXZiYXIoKSB7XG4gIGNvbnN0IHByb2plY3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIpKTtcbiAgY29uc3QgcHJvamVjdE5hdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIlxuICApO1xuXG4gIHByb2plY3REYXRhLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICBwcm9qZWN0RGl2LmRhdGFzZXQuaW5kZXggPSBgJHtwcm9qZWN0LmlkfWA7XG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYXYtaXRlbVwiKTtcblxuICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0Q29udGVudChlKTtcbiAgICAgIHJlbmRlclByb2plY3RUYXNrKGUpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdE5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGVudChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RCdG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gIHByb2plY3RCdG5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ0bi13cmFwcGVyXCIpO1xuXG4gIHByb2plY3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZVNob3dUYXNrRm9ybUJ0bigpKTtcbiAgcHJvamVjdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdFByb2plY3RCdG4oKSk7XG4gIHByb2plY3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oKSk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0SGVhZGVyQ29udGVudChlKSk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdG5XcmFwcGVyKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0NvbnRhaW5lcigpKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGVudENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RIZWFkZXJDb250ZW50KGUpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICk7XG5cbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWV9YDtcbiAgcHJvamVjdEhlYWRlck5hbWUuZGF0YXNldC5pbmRleCA9IGAke2UudGFyZ2V0LmRhdGFzZXQuaW5kZXh9YDtcbiAgcHJvamVjdEhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLW5hbWVcIik7XG4gIHJldHVybiBwcm9qZWN0SGVhZGVyTmFtZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza0NvbnRhaW5lcigpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93VGFza0Zvcm1CdG4oKSB7XG4gIGNvbnN0IHNob3dUYXNrRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNob3dUYXNrRm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBzaG93VGFza0Zvcm1CdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybS1idG5cIik7XG4gIHNob3dUYXNrRm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgc2hvd1Rhc2tGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZVRhc2tGb3JtKCk7XG4gIH0pO1xuICByZXR1cm4gc2hvd1Rhc2tGb3JtQnRuO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuXG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFzayhlKSB7XG4gIGxldCBwcm9qZWN0SW5kZXg7XG4gIGlmICh0eXBlb2YgZSA9PT0gXCJudW1iZXJcIikge1xuICAgIHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gZSk7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdO1xuXG4gIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJEZWZhdWx0QWxsVGFza0NvbnRlbnQoKSB7XG4gIC8vIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgLy8gICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgLy8gICAgIHJlbmRlclRhc2sodGFzayk7XG4gIC8vICAgfSk7XG4gIC8vIH0pO1xuICBjb25zdCB0YXNrcyA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBzb3J0ZWRUYXNrcyA9IHRhc2tzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoIShhLmR1ZWRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgYS5kdWVkYXRlID0gbmV3IERhdGUoYS5kdWVkYXRlKTtcbiAgICB9XG4gICAgaWYgKCEoYi5kdWVkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIGIuZHVlZGF0ZSA9IG5ldyBEYXRlKGIuZHVlZGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBhLmR1ZWRhdGUgLSBiLmR1ZWRhdGU7XG4gIH0pO1xuICBjb25zb2xlLmxvZyhzb3J0ZWRUYXNrcyk7XG4gIHNvcnRlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuICB9KTtcbn1cblxucmVuZGVyRGVmYXVsdEFsbFRhc2tDb250ZW50KCk7XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0NvbnRhaW5lcigpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gIHByb2plY3RIZWFkZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICBwcm9qZWN0SGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlck5hbWUpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xufVxuXG5jb25zdCBhbGxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbGwtdGFza1wiKTtcblxuZnVuY3Rpb24gcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZShuYW1lKSB7XG4gIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVIZWFkZXJOYW1lKG5hbWUpO1xuICByZW5kZXJEZWZhdWx0QWxsVGFza0NvbnRlbnQoKTtcbn1cbmFsbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUoXCJBbGwgVGFza1wiKTtcbn0pO1xuXG5leHBvcnQge1xuICBQcm9qZWN0LFxuICBjcmVhdGVQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICBwcm9qZWN0cyxcbiAgcmVuZGVyUHJvamVjdE5hdmJhcixcbiAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZSxcbiAgcmVuZGVyUHJvamVjdFRhc2ssXG4gIGNsZWFyQ29udGVudENvbnRhaW5lcixcbiAgY3JlYXRlSGVhZGVyTmFtZSxcbn07XG4iLCJpbXBvcnQge1xuICBwcm9qZWN0cyxcbiAgdXBkYXRlUHJvamVjdCxcbiAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZSxcbn0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVQcm9qZWN0QnRuKCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLmlkID0gXCJkZWxldGUtcHJvamVjdC1mb3JtLWJ0blwiO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEZWxQcm9qZWN0UG9wdXApO1xuICAvLyBhZGRFdmVudExpc3RlbmVyUmVtb3ZlUHJvamVjdChkZWxldGVQcm9qZWN0Rm9ybUJ0bik7XG4gIHJldHVybiBkZWxldGVQcm9qZWN0Rm9ybUJ0bjtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKSB7XG4gIGxldCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG5cbiAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gIHVwZGF0ZVByb2plY3QoKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdCgpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsZXRlLXByb2plY3QtZm9ybS1idG5cIik7XG4gIGNvbnN0IHByb2plY3RCdG5XcmFwcGVyID0gZGVsZXRlUHJvamVjdEJ0bi5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0Q29udGVudENvbnRhaW5lciA9IHByb2plY3RCdG5XcmFwcGVyLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3RJZCA9ICtwcm9qZWN0Q29udGVudENvbnRhaW5lci5maXJzdENoaWxkLmRhdGFzZXQuaW5kZXg7XG5cbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyUmVtb3ZlUHJvamVjdChidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChpc0RlbFByb2plY3QpIHtcbiAgICAgIHJlbW92ZVByb2plY3QoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZWxQcm9qZWN0UG9wdXAoKSB7XG4gIGNvbnN0IGRlbFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1wcm9qZWN0LXBvcHVwXCIpO1xuXG4gIGlmIChcbiAgICBkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8XG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcIlwiXG4gICkge1xuICAgIGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSBlbHNlIGlmIChkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJEZWxQcm9qZWN0WWVzQnRuKCkge1xuICBjb25zdCBkZWxQcm9qZWN0WWVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWwtcHJvamVjdC15ZXMtYnRuXCIpO1xuICBkZWxQcm9qZWN0WWVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVEZWxQcm9qZWN0UG9wdXAoKTtcblxuICAgIHJlbW92ZVByb2plY3QoKTtcbiAgICByZW1vdmVQcm9qZWN0RnJvbURPTSgpO1xuICAgIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUoXCJBbGwgVGFza1wiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJEZWxQcm9qZWN0Tm9CdG4oKSB7XG4gIGNvbnN0IGRlbFByb2plY3ROb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsLXByb2plY3Qtbm8tYnRuXCIpO1xuICBkZWxQcm9qZWN0Tm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZURlbFByb2plY3RQb3B1cCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlUHJvamVjdEZyb21ET00oKSB7XG4gIGNvbnN0IHByb2plY3RMaXN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCIpO1xuICBjb25zdCBwcm9qZWN0RGF0YXNldEluZGV4ID0gK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItbmFtZVwiKVxuICAgIC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RMaXN0TmF2LmNoaWxkTm9kZXMpLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT4gK2VsZW1lbnQuZGF0YXNldC5pbmRleCA9PT0gcHJvamVjdERhdGFzZXRJbmRleFxuICApO1xuICBwcm9qZWN0TGlzdE5hdi5yZW1vdmVDaGlsZChwcm9qZWN0TGlzdE5hdi5jaGlsZE5vZGVzW3Byb2plY3RJbmRleF0pO1xufVxuYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3RZZXNCdG4oKTtcbmFkZEV2ZW50TGlzdGVuZXJEZWxQcm9qZWN0Tm9CdG4oKTtcblxuZXhwb3J0IHtcbiAgcmVtb3ZlUHJvamVjdCxcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVByb2plY3QsXG4gIHRvZ2dsZURlbFByb2plY3RQb3B1cCxcbiAgY3JlYXRlRGVsZXRlUHJvamVjdEJ0bixcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgcmVuZGVyUHJvamVjdFRhc2sgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soZSkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArdGFza0NvbnRlbnQuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+IHRhc2suaWQgPT09ICt0YXNrQ29udGVudC5kYXRhc2V0LnRhc2tJbmRleFxuICApO1xuICBjb25zdCB0YXNrSWQgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uaWQ7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0uZGVsZXRlVGFzayh0YXNrSWQpO1xuICByZW1vdmVUYXNrRnJvbURPTSh0YXNrSWQpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrRnJvbURPTSh0YXNrSWQpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG4gIGNvbnN0IHRhc2tJZEluZGV4ID0gQXJyYXkuZnJvbSh0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXMpLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gK3Rhc2suZGF0YXNldC50YXNrSW5kZXggPT09IHRhc2tJZFxuICApO1xuICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIuY2hpbGROb2Rlc1t0YXNrSWRJbmRleF0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyUmVtb3ZlVGFzayhidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbW92ZVRhc2soZSk7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyUmVtb3ZlVGFzayB9O1xuIiwiaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5mdW5jdGlvbiBpc0xvY2FsU3RvcmFnZVByb2plY3RzRW1wdHkoKSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIikgPT09IG51bGwpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0TG9jYWxTdG9yYWdlKCkge1xuICBpZiAoaXNMb2NhbFN0b3JhZ2VQcm9qZWN0c0VtcHR5KCkpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgUHJvamVjdC5jbGVhclByb2plY3RzSWQoKTtcbiAgICBQcm9qZWN0LnNldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgfSBlbHNlIHtcbiAgICBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgUHJvamVjdC5nZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpIHtcbiAgY29uc3Qgc3RvcmVQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiKSk7XG5cbiAgc3RvcmVQcm9qZWN0cy5mb3JFYWNoKChzdG9yZVByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHN0b3JlUHJvamVjdC5uYW1lKTtcbiAgICBwcm9qZWN0LmlkID0gc3RvcmVQcm9qZWN0LmlkO1xuICAgIHByb2plY3QudGFza3MgPSBzdG9yZVByb2plY3QudGFza3M7XG4gICAgcHJvamVjdC50YXNrSWQgPSBzdG9yZVByb2plY3QudGFza0lkO1xuXG4gICAgcHJvamVjdHNbaW5kZXhdID0gcHJvamVjdDtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHNldFByb2plY3RMb2NhbFN0b3JhZ2UgfTtcbiIsIi8vIHRoaXMgaXMgdGFzay5qc1xuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAgfSBmcm9tIFwiLi90YXNrRGV0YWlsUG9wdXAuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzIH0gZnJvbSBcIi4vdG9nZ2xlVGFza1N0YXR1cy5qc1wiO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVRhc2sgfSBmcm9tIFwiLi9yZW1vdmVUYXNrLmpzXCI7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtIH0gZnJvbSBcIi4vZWRpdFRhc2tJbmZvLmpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0aW5nRGF0ZSB9IGZyb20gXCIuL2RhdGUuanNcIjtcbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQsIGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybVwiKTtcbiAgaWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgfHwgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtVmFsdWUoZSkge1xuICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX25hbWVcIik7XG4gIGNvbnN0IHRhc2tJbnB1dERlc2NpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tJbnB1dER1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfZHVlX2RhdGVcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3ByaW9yaXR5XCIpO1xuXG4gIHRhc2tJbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICB0YXNrSW5wdXREZXNjaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgdGFza0lucHV0RHVlZGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tJbnB1dFByaW9yaXR5LnZhbHVlID0gXCIxXCI7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJBZGRUYXNrQnRuKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY3JlYXRlVGFzaygpO1xuICAgIHRvZ2dsZVRhc2tGb3JtKCk7XG4gICAgY2xlYXJUYXNrRm9ybVZhbHVlKCk7XG4gICAgcmVuZGVyTmV3VGFzaygpO1xuICB9KTtcbn1cblxuYWRkRXZlbnRMaXN0ZW5lckFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idG5cIikpO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQ2FuY2VsVGFza0Zvcm0oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICAgIGNsZWFyVGFza0Zvcm1WYWx1ZSgpO1xuICB9KTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJDYW5jZWxUYXNrRm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC10YXNrLWJ0blwiKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZSkge1xuICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX25hbWVcIik7XG4gIGNvbnN0IHRhc2tJbnB1dERlc2NpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IHRhc2tJbnB1dER1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tfZHVlX2RhdGVcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX3ByaW9yaXR5XCIpO1xuXG4gIGNvbnN0IHByb2plY3RUYXJnZXRJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT5cbiAgICAgIHByb2plY3QuaWQgPT09XG4gICAgICArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpLmRhdGFzZXQuaW5kZXhcbiAgKTtcblxuICBjb25zdCB0YXNrSW5wdXREYXRlVmFsdWUgPSBuZXcgRGF0ZSh0YXNrSW5wdXREdWVkYXRlLnZhbHVlKTtcblxuICBpZiAoXG4gICAgdGFza0lucHV0TmFtZS52YWx1ZSA9PT0gXCJcIiB8fFxuICAgIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUgPT09IFwiXCIgfHxcbiAgICB0YXNrSW5wdXREdWVkYXRlLnZhbHVlID09PSBcIlwiIHx8XG4gICAgdGFza0lucHV0UHJpb3JpdHkudmFsdWUgPT09IFwiXCJcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb2plY3RzW3Byb2plY3RUYXJnZXRJbmRleF0uYWRkVGFzayhcbiAgICB0YXNrSW5wdXROYW1lLnZhbHVlLFxuICAgIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUsXG4gICAgdGFza0lucHV0RGF0ZVZhbHVlLFxuICAgIHRhc2tJbnB1dFByaW9yaXR5LnZhbHVlLFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGNvbnN0IHRhc2tDaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1Nob3dEZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrU2hvd0RldGFpbEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGFza0VkaXREZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0YXNrRWRpdERldGFpbEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNsaWNrXCIpO1xuICB0YXNrRWRpdERldGFpbEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2xpY2tcIik7XG4gIHRhc2tEZWxldGVCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNsaWNrXCIpO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuU3Bhbi50ZXh0Q29udGVudCA9IFwiaW5mb1wiO1xuICB0YXNrRWRpdERldGFpbEJ0blNwYW4udGV4dENvbnRlbnQgPSBcImVkaXRcIjtcbiAgdGFza0RlbGV0ZUJ0blNwYW4udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICB0YXNrRWRpdERldGFpbEJ0blNwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIHRhc2tEZWxldGVCdG5TcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuLmFwcGVuZENoaWxkKHRhc2tTaG93RGV0YWlsQnRuU3Bhbik7XG4gIHRhc2tFZGl0RGV0YWlsQnRuLmFwcGVuZENoaWxkKHRhc2tFZGl0RGV0YWlsQnRuU3Bhbik7XG4gIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0blNwYW4pO1xuXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICB0YXNrTGlzdC5kYXRhc2V0LnByb2plY3RJbmRleCA9IHRhc2sucHJvamVjdElkO1xuICB0YXNrTGlzdC5kYXRhc2V0LnRhc2tJbmRleCA9IHRhc2suaWQ7XG4gIHRhc2tDaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jaGVja2JveFwiKTtcbiAgdGFza1N0YXR1cy5pZCA9IFwidGFzay1zdGF0dXNcIjtcbiAgdGFza1N0YXR1cy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stbmFtZVwiKTtcbiAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKFwidGFzay1kZXNjcmlwdGlvblwiKTtcbiAgdGFza0R1ZWRhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZHVlZGF0ZVwiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXByaW9yaXR5XCIpO1xuICBpZiAodGFzay5zdGF0dXMgPT09IHRydWUpIHtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKFwidGFzay1zdGF0dXMtdHJ1ZVwiKTtcbiAgfVxuICB0YXNrU3RhdHVzLmNoZWNrZWQgPSB0YXNrLnN0YXR1cztcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHRhc2tEZXMudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRHVlZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRpbmdEYXRlKHRhc2suZHVlZGF0ZSk7XG4gIC8vIHRhc2tEdWVkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVkYXRlO1xuXG4gIGlmICh0YXNrLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcbiAgfVxuICBpZiAodGFzay5wcmlvcml0eSA9PT0gXCIyXCIpIHtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0tcHJpb3JpdHlcIik7XG4gIH1cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT09IFwiM1wiKSB7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZChcImhpZ2gtcHJpb3JpdHlcIik7XG4gIH1cblxuICB0YXNrQ2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tDaGVja0JveENvbnRhaW5lcik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0Rlcyk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza1Nob3dEZXRhaWxCdG4pO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWRpdERldGFpbEJ0bik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzKHRhc2tTdGF0dXMpO1xuICBhZGRFdmVudExpc3RlbmVyUmVuZGVyVGFza0RldGFpbFBvcHVwKHRhc2tTaG93RGV0YWlsQnRuKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVRhc2sodGFza0RlbGV0ZUJ0bik7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0odGFza0VkaXREZXRhaWxCdG4pO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3VGFzaygpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PlxuICAgICAgcHJvamVjdC5pZCA9PT1cbiAgICAgICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLW5hbWVcIikuZGF0YXNldC5pbmRleFxuICApO1xuICByZW5kZXJUYXNrKFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5sZW5ndGggLSAxXVxuICApO1xufVxuXG5leHBvcnQgeyBUYXNrLCB0b2dnbGVUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybVZhbHVlLCByZW5kZXJUYXNrIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRpbmdEYXRlIH0gZnJvbSBcIi4vZGF0ZS5qc1wiO1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0bigpIHtcbiAgY29uc3QgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kZXRhaWwtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXBvcHVwLWNsb3NlLWJ0blwiKTtcbiAgdGFza0RldGFpbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRhc2tEZXRhaWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbFBvcHVwKGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArdGFza0NvbnRlbnQuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgKTtcblxuICBjb25zdCB0YXNrSWQgPSBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cEhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0XCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtcHJvamVjdC1uYW1lLXZhbHVlXCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtcHJpb3JpdHktdmFsdWVcIlxuICApO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZHVlZGF0ZS12YWx1ZVwiXG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWRlc2NyaXB0aW9uLXZhbHVlXCJcbiAgKTtcbiAgdGFza0RldGFpbFBvcHVwSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5uYW1lfWA7XG4gIHRhc2tEZXRhaWxQb3B1cFByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS5uYW1lfWA7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0ucHJpb3JpdHkgPT09IFwiM1wiKSB7XG4gICAgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgIHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgIHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgfVxuXG4gIHRhc2tEZXRhaWxQb3B1cER1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0aW5nRGF0ZShcbiAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uZHVlZGF0ZVxuICApfWA7XG5cbiAgLy8gdGFza0RldGFpbFBvcHVwRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5kdWVkYXRlfWA7XG4gIHRhc2tEZXRhaWxQb3B1cERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmRlc2NyaXB0aW9ufWA7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAoYnV0dG9uKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lclwiXG4gICk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW5kZXJUYXNrRGV0YWlsUG9wdXAoZSk7XG4gICAgdGFza0RldGFpbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbn1cbmV4cG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4sXG4gIHJlbmRlclRhc2tEZXRhaWxQb3B1cCxcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbmRlclRhc2tEZXRhaWxQb3B1cCxcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7XG4gIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUsXG4gIGNsZWFyQ29udGVudENvbnRhaW5lcixcbiAgY3JlYXRlSGVhZGVyTmFtZSxcbn0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfVxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICBpZiAodG9kYXkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RheVRhc2soKSB7XG4gIGNvbnN0IHRvZGF5ID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmIChpc1RvZGF5KHRhc2suZHVlZGF0ZSkpIHtcbiAgICAgICAgdG9kYXkucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHNvcnRlZFRvZGF5UHJpb3JpdHlUYXNrID0gc29ydFRhc2tQcmlvcml0eUhpZ2hUb0xvdyh0b2RheSk7XG4gIHNvcnRlZFRvZGF5UHJpb3JpdHlUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc29ydFRhc2tQcmlvcml0eUhpZ2hUb0xvdyhhcnIpIHtcbiAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGEucHJpb3JpdHkpIC0gTnVtYmVyKGIucHJpb3JpdHkpO1xuICB9KTtcbiAgYXJyLnJldmVyc2UoKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzaygpIHtcbiAgY29uc3QgdG9kYXlUYXNrTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YXNrXCIpO1xuICB0b2RheVRhc2tOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZXlcIik7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgY3JlYXRlSGVhZGVyTmFtZShcIlRvZGF5IFRhc2tcIik7XG4gICAgcmVuZGVyVG9kYXlUYXNrKCk7XG4gIH0pO1xufVxuXG5hZGRFdmVudExpc3RlbmVyVG9kYXlUYXNrKCk7XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2RheVRhc2sgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnRDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArdGFza0NvbnRlbnRDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0lkID0gcHJvamVjdHNbcHJvamVjdElkXS50YXNrcy5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+IHRhc2suaWQgPT09ICt0YXNrQ29udGVudENvbnRhaW5lci5kYXRhc2V0LnRhc2tJbmRleFxuICApO1xuXG4gIHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5zdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICB1cGRhdGVQcm9qZWN0KCk7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uc3RhdHVzID09PSBmYWxzZSkge1xuICAgIHRhc2tDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXN0YXR1cy10cnVlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXN0YXR1cy10cnVlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlVGFza1N0YXR1cyhlKTtcbiAgfSk7XG59XG5leHBvcnQgeyB0b2dnbGVUYXNrU3RhdHVzLCBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3ROYXZiYXIgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4gfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tEZXRhaWxQb3B1cC5qc1wiO1xucmVuZGVyUHJvamVjdE5hdmJhcigpO1xuYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0bigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9