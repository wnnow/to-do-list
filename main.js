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
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
  font-family: 'Roboto', sans-serif;
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

.task-input-error-text {
  position: absolute;
  color: #d04848;
  font-size: 0.75rem;
  visibility: hidden;
}

input:focus:valid {
  border-color: green;
}

input:focus:invalid {
  border-color: red;
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
label[for='edit_project_name'] {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n}\n\n:root {\n  --main-color: #ffffff;\n  --main-text-color: #d04848;\n  --nav-bg-color: #f5f5f5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  /* color-scheme: dark light; */\n}\n\nbody {\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  vertical-align: middle;\n  height: auto;\n  font-style: italic;\n  background-repeat: no-repeat;\n  background-size: cover;\n  shape-margin: 0.75rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n  font-size: 2rem;\n}\n\ninput {\n  outline: none;\n  border: 1px solid black;\n  border-radius: 10px;\n  width: 100%;\n  padding: 2px 4px;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n  }\n}\n\n.project-btn-wrapper,\n.del-project-popup-btn-wrapper {\n  display: flex;\n  gap: 32px;\n}\n.del-project-popup-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.del-project-popup-btn-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n.show-task-form-btn,\n#add-project-btn,\n#cancel-project-btn,\n#add-task-btn,\n#cancel-task-btn,\n.del-project-popup-btn-wrapper > button,\n.edit-project-popup-btn-wrapper > button,\n#edit-task-submit-btn,\n#edit-task-cancel-btn {\n  width: 100px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n#add-project-btn:hover,\n#cancel-project-btn:hover,\n#add-task-btn:hover,\n#cancel-task-btn:hover,\n.del-project-popup-btn-wrapper > button:hover,\n.edit-project-popup-btn-wrapper > button:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n.project-form-btn {\n  width: 125px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n.project-form-btn:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n/* header section */\n\n.header-wrapper {\n  background-color: var(--main-color);\n  color: var(--main-text-color);\n  padding: 16px;\n}\n\n.header-container {\n  max-width: 1920px;\n  display: flex;\n  gap: 16px;\n  font-size: 1.25rem;\n}\n\n.wrapper {\n  display: flex;\n  flex: 1;\n}\n\n/* nav */\n\n.navbar-wrapper {\n  background-color: var(--nav-bg-color);\n  padding: 16px;\n}\n\n.navbar-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n\n.project-nav-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgb(196, 196, 196);\n}\n\n#show-project-form-btn,\n#task-popup-close-btn {\n  width: auto;\n  padding: 0;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.project-list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.project-list-container {\n  gap: 16px;\n}\n\n.project-nav-item,\n.navbar-container > div {\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.project-nav-item:hover,\n.navbar-container > div:hover {\n  background-color: rgb(196, 196, 196);\n}\n\n/* content */\n.content-container {\n  border: 1px solid #dbdbdb;\n  padding: 1rem;\n  flex: 1;\n}\n\n.project-header-name {\n  font-size: 1.25rem;\n  margin-bottom: 16px;\n}\n\n.task-container {\n  margin-top: 16px;\n}\n\n.task-content {\n  display: grid;\n  grid-template-columns: 1fr 5fr 5fr 3fr 2fr 1fr 1fr 1fr;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n  border: 1px solid gray;\n  padding: 4px 8px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.task-content:hover {\n  background-color: aliceblue;\n}\n\n.task-content > div {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.high-priority {\n  border-left: 15px solid #d04848;\n}\n.medium-priority {\n  border-left: 15px solid #ffe25f;\n}\n.low-priority {\n  border-left: 15px solid #95fd92;\n}\n\n.task-status-true {\n  text-decoration-line: line-through;\n  background-color: var(--nav-bg-color);\n}\n\n/* footer */\nfooter {\n  margin-top: auto;\n}\n\n/* project form */\n.project-form-container {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n\n#project-form > div,\n#project-form > div.project-form-text > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n/* task form */\n#edit-task-form,\n/* .edit-task-form, */\n#task-form,\n.del-project-popup {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n#task-form > div,\n#edit-task-form > div {\n  margin-bottom: 16px;\n}\n\n.task-btn-container,\n.edit-task-btn-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.task-input-name > label,\n.task-input-description > label,\n.task-input-duedate > label,\n.edit-task-input-name > label,\n.edit-task-input-description > label,\n.edit-task-input-duedate > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n.task-input-error-text {\n  position: absolute;\n  color: #d04848;\n  font-size: 0.75rem;\n  visibility: hidden;\n}\n\ninput:focus:valid {\n  border-color: green;\n}\n\ninput:focus:invalid {\n  border-color: red;\n}\n\n#task-popup-detail-container,\n.edit-project-popup {\n  display: none;\n  width: 500px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 16px;\n  border: 1px solid #b1b1b1;\n  border-radius: 10px;\n}\n\n.edit-project-input-wrapper {\n  margin-bottom: 16px;\n}\nlabel[for='edit_project_name'] {\n  font-size: 1.25rem;\n  display: block;\n  margin-bottom: 16px;\n}\n\n.edit-project-popup-btn-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n#task-popup-detail-header-text {\n  font-size: 1.25rem;\n}\n\n.task-popup-header-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n#task-popup-close-btn {\n  background-color: white;\n}\n\n.task-popup-detail-wrapper {\n  display: grid;\n  grid-template-columns: 75px 1fr;\n  margin-bottom: 8px;\n}\n\n/* footer */\n\nfooter {\n  padding: 16px;\n}\n\n.footer-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.footer-github-logo {\n  width: 25px;\n}\n@media screen and (max-width: 500px) {\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _taskValidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskValidate.js */ "./src/modules/taskValidate.js");





const editTaskNameInput = document.querySelector('#edit_task_name');
const editTaskNameInputErrorText = document.querySelector(
  '#edit-task-input-name-error-text'
);
const editTaskDesInput = document.querySelector('#edit_task_description');
const editTaskDesInputErrorText = document.querySelector(
  '#edit-task-input-des-error-text'
);
const editTaskDateInput = document.querySelector('#edit_task_due_date');
const editTaskDateInputErrorText = document.querySelector(
  '#edit-task-input-date-error-text'
);

(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_3__.addEventListenerTaskInputError)(
  editTaskNameInput,
  editTaskNameInputErrorText,
  'Please fill this field'
);
(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_3__.addEventListenerTaskInputError)(
  editTaskDesInput,
  editTaskDesInputErrorText,
  'Please fill this field'
);
(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_3__.addEventListenerTaskInputError)(
  editTaskDateInput,
  editTaskDateInputErrorText,
  'Please fill this field'
);
function toggleEditTaskForm() {
  const editTaskForm = document.querySelector('#edit-task-form');

  if (
    editTaskForm.style.display === 'none' ||
    editTaskForm.style.display === ''
  ) {
    editTaskForm.style.display = 'block';
  } else if (editTaskForm.style.display === 'block') {
    editTaskForm.style.display = 'none';
  }
}

function addEventListenerToggleEditTaskForm(button) {
  button.addEventListener('click', (e) => {
    toggleEditTaskForm();
    assignEditTaskFormValueToInput(e);
  });
}

function assignEditTaskFormValueToInput(e) {
  const taskContent = e.target.parentElement.parentElement;
  const taskId = taskContent.dataset.taskIndex;
  const projectId = taskContent.dataset.projectIndex;
  const taskLabelName = document.querySelector('label[for="edit_task_name"]');
  const editTaskNameInput = document.querySelector('#edit_task_name');
  const editTaskDesInput = document.querySelector('#edit_task_description');
  const editTaskDueDateInput = document.querySelector('#edit_task_due_date');
  const editTaskPriorityInput = document.querySelector('#edit_task_priority');
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
  const editCancelBtn = document.querySelector('#edit-task-cancel-btn');
  editCancelBtn.addEventListener('click', (e) => {
    toggleEditTaskForm();
  });
}
addEventListenerEditCancelBtn();

function updateTaskInfo() {
  const editTaskNameInputValue =
    document.querySelector('#edit_task_name').value;
  const editTaskDesInputValue = document.querySelector(
    '#edit_task_description'
  ).value;
  const editTaskDueDateInputValue = document.querySelector(
    '#edit_task_due_date'
  ).value;
  const editTaskPriorityInputValue = document.querySelector(
    '#edit_task_priority'
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
}
const editTaskForm = document.querySelector('#edit-task-form');
function addEventListenerEditSubmitBtn() {
  const editSubmitBtn = document.querySelector('#edit-task-submit-btn');
  editSubmitBtn.addEventListener('click', (e) => {
    if (!editTaskForm.checkValidity()) {
      if (!editTaskDateInput.validity.valid) {
        editTaskDateInput.focus();
        editTaskDateInputErrorText.textContent = 'Please Fill out this field';
        editTaskDateInputErrorText.style.visibility = 'visible';
      }
      if (!editTaskDesInput.validity.valid) {
        editTaskDesInput.focus();
        editTaskDesInputErrorText.textContent = 'Please Fill out this field';
        editTaskDesInputErrorText.style.visibility = 'visible';
      }
      if (!editTaskNameInput.validity.valid) {
        editTaskNameInput.focus();
        editTaskNameInputErrorText.textContent = 'Please Fill out this field';
        editTaskNameInputErrorText.style.visibility = 'visible';
      }
      return;
    }
    updateTaskInfo();
    updateTaskContentDOM();
    toggleEditTaskForm();
  });
}

function updateTaskContentDOM() {
  const taskContainer = document.querySelector('.task-container');
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

  targetTask.querySelector('#task-status').checked =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].status;
  targetTask.querySelector('.task-name').textContent =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].name;
  targetTask.querySelector('.task-description').textContent =
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].description;
  targetTask.querySelector('.task-duedate').textContent = (0,_date_js__WEBPACK_IMPORTED_MODULE_2__.formattingDate)(
    _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].duedate
  );
  // targetTask.querySelector(".task-duedate").textContent =
  //   projects[projectIndex].tasks[taskIndex].duedate;

  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === '1') {
    targetTask.querySelector('.task-priority').textContent = 'Low';
    targetTask.className = '';
    targetTask.classList.add('task-content');
    targetTask.classList.add('low-priority');
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === '2') {
    targetTask.querySelector('.task-priority').textContent = 'Medium';
    targetTask.className = '';
    targetTask.classList.add('task-content');
    targetTask.classList.add('medium-priority');
  }
  if (_project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].tasks[taskIndex].priority === '3') {
    targetTask.querySelector('.task-priority').textContent = 'High';
    targetTask.className = '';
    targetTask.classList.add('task-content');
    targetTask.classList.add('high-priority');
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
/* harmony import */ var _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskValidate.js */ "./src/modules/taskValidate.js");
// this is task.js










(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.addEventListenerTaskInputError)(
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputName,
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputNameErrorText,
  `You can't skip this part`
);

(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.addEventListenerTaskInputError)(
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDes,
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDesErrorText,
  `You can't skip this part`
);
(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.addEventListenerTaskInputError)(
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDate,
  _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDateErrorText,
  `You can't skip this part`
);

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
  const taskForm = document.querySelector('#task-form');
  if (taskForm.style.display === '' || taskForm.style.display === 'none') {
    taskForm.style.display = 'block';
  } else if (taskForm.style.display === 'block') {
    taskForm.style.display = 'none';
  }
}

function clearTaskFormValue(e) {
  const taskInputName = document.querySelector('#task_name');
  const taskInputDesciption = document.querySelector('#task_description');
  const taskInputDuedate = document.querySelector('#task_due_date');
  const taskInputPriority = document.querySelector('#task_priority');

  taskInputName.value = '';
  taskInputDesciption.value = '';
  taskInputDuedate.value = '';
  taskInputPriority.value = '1';
}

function addEventListenerAddTaskBtn(button) {
  button.addEventListener('click', (e) => {
    if (!_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskForm.checkValidity()) {
      if (!_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDate.validity.valid) {
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDate.focus();
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDateErrorText.textContent = 'Please Fill out this field';
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDateErrorText.style.visibility = 'visible';
      }
      if (!_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDes.validity.valid) {
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDes.focus();
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDesErrorText.textContent = 'Please Fill out this field';
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputDesErrorText.style.visibility = 'visible';
      }
      if (!_taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputName.validity.valid) {
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputName.focus();
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputNameErrorText.textContent = 'Please Fill out this field';
        _taskValidate_js__WEBPACK_IMPORTED_MODULE_6__.taskInputNameErrorText.style.visibility = 'visible';
      }
      return;
    }
    console.log('run');
    createTask();
    toggleTaskForm();
    clearTaskFormValue();
    renderNewTask();
  });
}

addEventListenerAddTaskBtn(document.querySelector('#add-task-btn'));

function addEventListenerCancelTaskForm(button) {
  button.addEventListener('click', (e) => {
    toggleTaskForm();
    clearTaskFormValue();
  });
}
addEventListenerCancelTaskForm(document.querySelector('#cancel-task-btn'));

function createTask(e) {
  const taskInputName = document.querySelector('#task_name');
  const taskInputDesciption = document.querySelector('#task_description');
  const taskInputDuedate = document.querySelector('#task_due_date');
  const taskInputPriority = document.querySelector('#task_priority');

  const projectTargetIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) =>
      project.id ===
      +document.querySelector('.project-header-name').dataset.index
  );

  const taskInputDateValue = new Date(taskInputDuedate.value);

  if (
    taskInputName.value === '' ||
    taskInputDesciption.value === '' ||
    taskInputDuedate.value === '' ||
    taskInputPriority.value === ''
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
  const taskContainer = document.querySelector('.task-container');
  const taskList = document.createElement('li');
  const taskCheckBoxContainer = document.createElement('div');
  const taskStatus = document.createElement('input');
  const taskName = document.createElement('div');
  const taskDes = document.createElement('div');
  const taskDuedate = document.createElement('div');
  const taskPriority = document.createElement('div');
  const taskShowDetailBtn = document.createElement('button');
  const taskShowDetailBtnSpan = document.createElement('span');
  const taskEditDetailBtn = document.createElement('button');
  const taskEditDetailBtnSpan = document.createElement('span');
  const taskDeleteBtn = document.createElement('button');
  const taskDeleteBtnSpan = document.createElement('span');

  taskShowDetailBtn.setAttribute('type', 'click');
  taskEditDetailBtn.setAttribute('type', 'click');
  taskDeleteBtn.setAttribute('type', 'click');

  taskShowDetailBtnSpan.textContent = 'info';
  taskEditDetailBtnSpan.textContent = 'edit';
  taskDeleteBtnSpan.textContent = 'close';

  taskShowDetailBtnSpan.classList.add('material-symbols-outlined');
  taskEditDetailBtnSpan.classList.add('material-symbols-outlined');
  taskDeleteBtnSpan.classList.add('material-symbols-outlined');

  taskShowDetailBtn.appendChild(taskShowDetailBtnSpan);
  taskEditDetailBtn.appendChild(taskEditDetailBtnSpan);
  taskDeleteBtn.appendChild(taskDeleteBtnSpan);

  taskContainer.classList.add('task-container');
  taskList.classList.add('task-content');
  taskList.dataset.projectIndex = task.projectId;
  taskList.dataset.taskIndex = task.id;
  taskCheckBoxContainer.classList.add('task-checkbox');
  taskStatus.id = 'task-status';
  taskStatus.setAttribute('type', 'checkbox');

  taskName.classList.add('task-name');
  taskDes.classList.add('task-description');
  taskDuedate.classList.add('task-duedate');
  taskPriority.classList.add('task-priority');
  if (task.status === true) {
    taskList.classList.add('task-status-true');
  }
  taskStatus.checked = task.status;
  taskName.textContent = task.name;
  taskDes.textContent = task.description;
  taskDuedate.textContent = (0,_date_js__WEBPACK_IMPORTED_MODULE_5__.formattingDate)(task.duedate);
  // taskDuedate.textContent = task.duedate;

  if (task.priority === '1') {
    taskPriority.textContent = 'Low';
    taskList.classList.add('low-priority');
  }
  if (task.priority === '2') {
    taskPriority.textContent = 'Medium';
    taskList.classList.add('medium-priority');
  }
  if (task.priority === '3') {
    taskPriority.textContent = 'High';
    taskList.classList.add('high-priority');
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
      +document.querySelector('.project-header-name').dataset.index
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

/***/ "./src/modules/taskValidate.js":
/*!*************************************!*\
  !*** ./src/modules/taskValidate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListenerTaskInputError: () => (/* binding */ addEventListenerTaskInputError),
/* harmony export */   taskForm: () => (/* binding */ taskForm),
/* harmony export */   taskInputDate: () => (/* binding */ taskInputDate),
/* harmony export */   taskInputDateErrorText: () => (/* binding */ taskInputDateErrorText),
/* harmony export */   taskInputDes: () => (/* binding */ taskInputDes),
/* harmony export */   taskInputDesErrorText: () => (/* binding */ taskInputDesErrorText),
/* harmony export */   taskInputName: () => (/* binding */ taskInputName),
/* harmony export */   taskInputNameErrorText: () => (/* binding */ taskInputNameErrorText)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");

const taskForm = document.querySelector('#task-form');
const taskInputName = document.querySelector('#task_name');
const taskInputNameErrorText = document.querySelector(
  '#task_name+.task-input-error-text'
);
const taskInputDes = document.querySelector('#task_description');
const taskInputDesErrorText = document.querySelector(
  '#task_description+.task-input-error-text'
);
const taskInputDate = document.querySelector('#task_due_date');
const taskInputDateErrorText = document.querySelector(
  '#task_due_date+.task-input-error-text'
);

function addEventListenerTaskInputError(
  inputElement,
  errorShowElement,
  errorText
) {
  inputElement.addEventListener('input', (event) => {
    if (!inputElement.validity.valid) {
      errorShowElement.style.visibility = 'visible';
      errorShowElement.textContent = errorText;
    }
    if (inputElement.validity.valid) {
      errorShowElement.style.visibility = 'hidden';
    }
  });
}

addEventListenerTaskInputError(
  taskInputName,
  taskInputNameErrorText,
  `You can't skip this part`
);




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



/***/ }),

/***/ "./src/images/github-mark.svg":
/*!************************************!*\
  !*** ./src/images/github-mark.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fa18895f6e6c7772cab.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/github-mark.svg */ "./src/images/github-mark.svg");




(0,_modules_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectNavbar)();
(0,_modules_taskDetailPopup_js__WEBPACK_IMPORTED_MODULE_2__.addEventListenerCloseTaskDetailBtn)();
function addFooterLogo() {
  const footerLink = document.querySelector(".footer-link");
  const logoImg = document.createElement("img");
  const gitHubLogo = new Image();
  gitHubLogo.src = _images_github_mark_svg__WEBPACK_IMPORTED_MODULE_3__;
  gitHubLogo.classList.add("footer-github-logo");
  footerLink.appendChild(gitHubLogo);
}
addFooterLogo();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxh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Q0EsaUJBQWlCLGlEQUFRO0FBQ3pCO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWLEVBQUUsMERBQWE7QUFDZixNQUFNLGlEQUFRO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQjlEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3NDO0FBQ3VCO0FBQ2hDO0FBQ2xELHdFQUFtQjtBQUNuQiwrRkFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0UHJvamVjdE5hbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VkaXRUYXNrSW5mby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc2V0UHJvamVjdExvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0RldGFpbFBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZGF5VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9nZ2xlVGFza1N0YXR1cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDI0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG46cm9vdCB7XG4gIC0tbWFpbi1jb2xvcjogI2ZmZmZmZjtcbiAgLS1tYWluLXRleHQtY29sb3I6ICNkMDQ4NDg7XG4gIC0tbmF2LWJnLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAvKiBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7ICovXG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDBzdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHNoYXBlLW1hcmdpbjogMC43NXJlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG5wIHtcbiAgbWF4LXdpZHRoOiA3NWNoO1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcbiAgOmhhcyg6dGFyZ2V0KSB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbn1cblxuLnByb2plY3QtYnRuLXdyYXBwZXIsXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMycHg7XG59XG4uZGVsLXByb2plY3QtcG9wdXAtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaG93LXRhc2stZm9ybS1idG4sXG4jYWRkLXByb2plY3QtYnRuLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcbiNhZGQtdGFzay1idG4sXG4jY2FuY2VsLXRhc2stYnRuLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcbiNlZGl0LXRhc2stc3VibWl0LWJ0bixcbiNlZGl0LXRhc2stY2FuY2VsLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bjpob3ZlcixcbiNhZGQtdGFzay1idG46aG92ZXIsXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbn1cblxuLnByb2plY3QtZm9ybS1idG4ge1xuICB3aWR0aDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLnByb2plY3QtZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG59XG5cbi8qIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLyogbmF2ICovXG5cbi5uYXZiYXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucHJvamVjdC1uYXYtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XG59XG5cbiNzaG93LXByb2plY3QtZm9ybS1idG4sXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcm9qZWN0LW5hdi1pdGVtLFxuLm5hdmJhci1jb250YWluZXIgPiBkaXYge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1uYXYtaXRlbTpob3Zlcixcbi5uYXZiYXItY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xufVxuXG4vKiBjb250ZW50ICovXG4uY29udGVudC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4OiAxO1xufVxuXG4ucHJvamVjdC1oZWFkZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciA1ZnIgM2ZyIDJmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzay1jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4udGFzay1jb250ZW50ID4gZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGFzay1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlnaC1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNkMDQ4NDg7XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZTI1Zjtcbn1cbi5sb3ctcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTVmZDkyO1xufVxuXG4udGFzay1zdGF0dXMtdHJ1ZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG59XG5cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLyogcHJvamVjdCBmb3JtICovXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcHJvamVjdC1mb3JtID4gZGl2LFxuI3Byb2plY3QtZm9ybSA+IGRpdi5wcm9qZWN0LWZvcm0tdGV4dCA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi8qIHRhc2sgZm9ybSAqL1xuI2VkaXQtdGFzay1mb3JtLFxuLyogLmVkaXQtdGFzay1mb3JtLCAqL1xuI3Rhc2stZm9ybSxcbi5kZWwtcHJvamVjdC1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3Rhc2stZm9ybSA+IGRpdixcbiNlZGl0LXRhc2stZm9ybSA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50YXNrLWJ0bi1jb250YWluZXIsXG4uZWRpdC10YXNrLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLnRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcbi50YXNrLWlucHV0LWR1ZWRhdGUgPiBsYWJlbCxcbi5lZGl0LXRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhc2staW5wdXQtZXJyb3ItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNkMDQ4NDg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5pbnB1dDpmb2N1czp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG5cbmlucHV0OmZvY3VzOmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcbi5lZGl0LXByb2plY3QtcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxubGFiZWxbZm9yPSdlZGl0X3Byb2plY3RfbmFtZSddIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGFzay1wb3B1cC1oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLXBvcHVwLWRldGFpbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vKiBmb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cbi5mb290ZXItZ2l0aHViLWxvZ28ge1xuICB3aWR0aDogMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrRUFBa0U7RUFDbEUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7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QUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyA0MDAsICdHUkFEJyAwLCAnb3BzeicgMjQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1tYWluLXRleHQtY29sb3I6ICNkMDQ4NDg7XFxuICAtLW5hdi1iZy1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAvKiBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHNoYXBlLW1hcmdpbjogMC43NXJlbTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG5wIHtcXG4gIG1heC13aWR0aDogNzVjaDtcXG4gIHRleHQtd3JhcDogcHJldHR5O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDpoYXMoOnRhcmdldCkge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtYnRuLXdyYXBwZXIsXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxufVxcbi5kZWwtcHJvamVjdC1wb3B1cC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNob3ctdGFzay1mb3JtLWJ0bixcXG4jYWRkLXByb2plY3QtYnRuLFxcbiNjYW5jZWwtcHJvamVjdC1idG4sXFxuI2FkZC10YXNrLWJ0bixcXG4jY2FuY2VsLXRhc2stYnRuLFxcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxcbiNlZGl0LXRhc2stc3VibWl0LWJ0bixcXG4jZWRpdC10YXNrLWNhbmNlbC1idG4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIsXFxuI2NhbmNlbC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4jYWRkLXRhc2stYnRuOmhvdmVyLFxcbiNjYW5jZWwtdGFzay1idG46aG92ZXIsXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyLFxcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0biB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbn1cXG5cXG4vKiBoZWFkZXIgc2VjdGlvbiAqL1xcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxuLm5hdmJhci13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ubmF2YmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LW5hdi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuI3Nob3ctcHJvamVjdC1mb3JtLWJ0bixcXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnByb2plY3QtbmF2LWl0ZW0sXFxuLm5hdmJhci1jb250YWluZXIgPiBkaXYge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYXYtaXRlbTpob3ZlcixcXG4ubmF2YmFyLWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi8qIGNvbnRlbnQgKi9cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDVmciAzZnIgMmZyIDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNvbnRlbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4udGFzay1jb250ZW50ID4gZGl2IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi50YXNrLWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNkMDQ4NDg7XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZTI1ZjtcXG59XFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTVmZDkyO1xcbn1cXG5cXG4udGFzay1zdGF0dXMtdHJ1ZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi8qIHByb2plY3QgZm9ybSAqL1xcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSA+IGRpdixcXG4jcHJvamVjdC1mb3JtID4gZGl2LnByb2plY3QtZm9ybS10ZXh0ID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4vKiB0YXNrIGZvcm0gKi9cXG4jZWRpdC10YXNrLWZvcm0sXFxuLyogLmVkaXQtdGFzay1mb3JtLCAqL1xcbiN0YXNrLWZvcm0sXFxuLmRlbC1wcm9qZWN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3Rhc2stZm9ybSA+IGRpdixcXG4jZWRpdC10YXNrLWZvcm0gPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lcixcXG4uZWRpdC10YXNrLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFzay1pbnB1dC1uYW1lID4gbGFiZWwsXFxuLnRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcXG4udGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwsXFxuLmVkaXQtdGFzay1pbnB1dC1uYW1lID4gbGFiZWwsXFxuLmVkaXQtdGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxcbi5lZGl0LXRhc2staW5wdXQtZHVlZGF0ZSA+IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2staW5wdXQtZXJyb3ItdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2QwNDg0ODtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6dmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcXG4uZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjFiMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtaW5wdXQtd3JhcHBlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5sYWJlbFtmb3I9J2VkaXRfcHJvamVjdF9uYW1lJ10ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhc2stcG9wdXAtaGVhZGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiN0YXNrLXBvcHVwLWNsb3NlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stcG9wdXAtZGV0YWlsLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuLmZvb3Rlci1naXRodWItbG9nbyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRNb250aE5hbWUoZGF0ZSkge1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG4gIHJldHVybiBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0dGluZ0RhdGUoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH1cbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aE5hbWUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwKGRhdGUpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICB9XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnNvbGUubG9nKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn1cblxuZXhwb3J0IHsgZm9ybWF0dGluZ0RhdGUsIGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgdXBkYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWRpdFByb2plY3RCdG4oKSB7XG4gIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZWRpdFByb2plY3RGb3JtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGVkaXRQcm9qZWN0Rm9ybUJ0bi5pZCA9IFwiZWRpdC1wcm9qZWN0LWZvcm0tYnRuXCI7XG4gIGVkaXRQcm9qZWN0Rm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgZWRpdFByb2plY3RGb3JtQnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcbiAgZWRpdFByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIGFzc2lnbkVkaXRQcm9qZWN0SW5wdXRWYWx1ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGVkaXRQcm9qZWN0Rm9ybUJ0bjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRWRpdFByb2plY3RGb3JtKCkge1xuICBjb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbiAgaWYgKFxuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiXG4gICkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SGVhZGVyTmFtZS5kYXRhc2V0LmluZGV4XG4gICk7XG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkVkaXRQcm9qZWN0SW5wdXRWYWx1ZSgpIHtcbiAgY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF9wcm9qZWN0X25hbWVcIik7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKTtcblxuICBlZGl0UHJvamVjdElucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQ2FuY2VsRWRpdFByb2plY3RGb3JtKCkge1xuICBjb25zdCBjYW5jZWxQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjZWRpdC1wcm9qZWN0LWNhbmNlbC1idG5cIlxuICApO1xuXG4gIGNhbmNlbFByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJTdWJtaXRFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXByb2plY3Qtc3VibWl0LWJ0blwiXG4gICk7XG5cbiAgc3VibWl0UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRQcm9qZWN0TmFtZSgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lKCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF9wcm9qZWN0X25hbWVcIikudmFsdWU7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZSA9IHByb2plY3RFZGl0TmFtZTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCk7XG4gIHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItbmFtZVwiKTtcbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KSB7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwi8J+agCB+IHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQgfiBwcm9qZWN0SW5kZXg6XCIsXG4gICAgcHJvamVjdEluZGV4XG4gICk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCJcbiAgKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuY2hpbGROb2Rlc1twcm9qZWN0SW5kZXhdLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG59XG5hZGRFdmVudExpc3RlbmVyQ2FuY2VsRWRpdFByb2plY3RGb3JtKCk7XG5hZGRFdmVudExpc3RlbmVyU3VibWl0RWRpdFByb2plY3RGb3JtKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZUVkaXRQcm9qZWN0QnRuLCBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lIH0gZnJvbSAnLi9lZGl0UHJvamVjdE5hbWUuanMnO1xuaW1wb3J0IHsgZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAsIGZvcm1hdHRpbmdEYXRlIH0gZnJvbSAnLi9kYXRlLmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvciB9IGZyb20gJy4vdGFza1ZhbGlkYXRlLmpzJztcblxuY29uc3QgZWRpdFRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX25hbWUnKTtcbmNvbnN0IGVkaXRUYXNrTmFtZUlucHV0RXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNlZGl0LXRhc2staW5wdXQtbmFtZS1lcnJvci10ZXh0J1xuKTtcbmNvbnN0IGVkaXRUYXNrRGVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX2Rlc2NyaXB0aW9uJyk7XG5jb25zdCBlZGl0VGFza0Rlc0lucHV0RXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNlZGl0LXRhc2staW5wdXQtZGVzLWVycm9yLXRleHQnXG4pO1xuY29uc3QgZWRpdFRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX2R1ZV9kYXRlJyk7XG5jb25zdCBlZGl0VGFza0RhdGVJbnB1dEVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjZWRpdC10YXNrLWlucHV0LWRhdGUtZXJyb3ItdGV4dCdcbik7XG5cbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgZWRpdFRhc2tOYW1lSW5wdXQsXG4gIGVkaXRUYXNrTmFtZUlucHV0RXJyb3JUZXh0LFxuICAnUGxlYXNlIGZpbGwgdGhpcyBmaWVsZCdcbik7XG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIGVkaXRUYXNrRGVzSW5wdXQsXG4gIGVkaXRUYXNrRGVzSW5wdXRFcnJvclRleHQsXG4gICdQbGVhc2UgZmlsbCB0aGlzIGZpZWxkJ1xuKTtcbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgZWRpdFRhc2tEYXRlSW5wdXQsXG4gIGVkaXRUYXNrRGF0ZUlucHV0RXJyb3JUZXh0LFxuICAnUGxlYXNlIGZpbGwgdGhpcyBmaWVsZCdcbik7XG5mdW5jdGlvbiB0b2dnbGVFZGl0VGFza0Zvcm0oKSB7XG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZm9ybScpO1xuXG4gIGlmIChcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICcnXG4gICkge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIGlmIChlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWRpdFRhc2tGb3JtKCk7XG4gICAgYXNzaWduRWRpdFRhc2tGb3JtVmFsdWVUb0lucHV0KGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduRWRpdFRhc2tGb3JtVmFsdWVUb0lucHV0KGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHRhc2tJZCA9IHRhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4O1xuICBjb25zdCBwcm9qZWN0SWQgPSB0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IGVkaXRUYXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRfdGFza19uYW1lJyk7XG4gIGNvbnN0IGVkaXRUYXNrRGVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRfdGFza19kdWVfZGF0ZScpO1xuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX3ByaW9yaXR5Jyk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRJbmRleEZyb21UYXNrRGF0YXNldChlKS5wcm9qZWN0SW5kZXg7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRJbmRleEZyb21UYXNrRGF0YXNldChlKS50YXNrSW5kZXg7XG5cbiAgdGFza0xhYmVsTmFtZS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3RJZDtcbiAgdGFza0xhYmVsTmFtZS5kYXRhc2V0LnRhc2tJZCA9IHRhc2tJZDtcbiAgZWRpdFRhc2tOYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ubmFtZTtcbiAgZWRpdFRhc2tEZXNJbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgZWRpdFRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBmb3JtYXR0aW5nRGF0ZUZvckVkaXRQb3B1cChcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZVxuICApO1xuXG4gIGVkaXRUYXNrUHJpb3JpdHlJbnB1dC52YWx1ZSA9XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXhGcm9tVGFza0RhdGFzZXQoZSkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0RhdGFzZXRJbmRleCA9ICt0YXNrQ29udGVudC5kYXRhc2V0LnRhc2tJbmRleDtcbiAgY29uc3QgcHJvamVjdERhdGFzZXRJbmRleCA9ICt0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0RGF0YXNldEluZGV4KTtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleChwcm9qZWN0RGF0YXNldEluZGV4LCB0YXNrRGF0YXNldEluZGV4KTtcbiAgcmV0dXJuIHsgcHJvamVjdEluZGV4OiBwcm9qZWN0SW5kZXgsIHRhc2tJbmRleDogdGFza0luZGV4IH07XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5kZXgocHJvamVjdERhdGFzZXRJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3REYXRhc2V0SW5kZXhcbiAgKTtcblxuICByZXR1cm4gcHJvamVjdEluZGV4O1xufVxuXG5mdW5jdGlvbiBmaW5kVGFza0luZGV4KHByb2plY3REYXRhc2V0SW5kZXgsIHRhc2tEYXRhc2V0SW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleChwcm9qZWN0RGF0YXNldEluZGV4KTtcbiAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tEYXRhc2V0SW5kZXhcbiAgKTtcblxuICByZXR1cm4gdGFza0luZGV4O1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyRWRpdENhbmNlbEJ0bigpIHtcbiAgY29uc3QgZWRpdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stY2FuY2VsLWJ0bicpO1xuICBlZGl0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVFZGl0VGFza0Zvcm0oKTtcbiAgfSk7XG59XG5hZGRFdmVudExpc3RlbmVyRWRpdENhbmNlbEJ0bigpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrSW5mbygpIHtcbiAgY29uc3QgZWRpdFRhc2tOYW1lSW5wdXRWYWx1ZSA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRfdGFza19uYW1lJykudmFsdWU7XG4gIGNvbnN0IGVkaXRUYXNrRGVzSW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNlZGl0X3Rhc2tfZGVzY3JpcHRpb24nXG4gICkudmFsdWU7XG4gIGNvbnN0IGVkaXRUYXNrRHVlRGF0ZUlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjZWRpdF90YXNrX2R1ZV9kYXRlJ1xuICApLnZhbHVlO1xuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNlZGl0X3Rhc2tfcHJpb3JpdHknXG4gICkudmFsdWU7XG4gIGNvbnN0IHRhc2tMYWJlbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJlZGl0X3Rhc2tfbmFtZVwiXScpO1xuICBjb25zdCBwcm9qZWN0SWQgPSArdGFza0xhYmVsTmFtZS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgdGFza0lkID0gK3Rhc2tMYWJlbE5hbWUuZGF0YXNldC50YXNrSWQ7XG4gIHByb2plY3RzW3Byb2plY3RJZF0udXBkYXRlVGFzayhcbiAgICB0YXNrSWQsXG4gICAgZWRpdFRhc2tOYW1lSW5wdXRWYWx1ZSxcbiAgICBlZGl0VGFza0Rlc0lucHV0VmFsdWUsXG4gICAgbmV3IERhdGUoZWRpdFRhc2tEdWVEYXRlSW5wdXRWYWx1ZSksXG4gICAgZWRpdFRhc2tQcmlvcml0eUlucHV0VmFsdWVcbiAgKTtcbn1cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stZm9ybScpO1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckVkaXRTdWJtaXRCdG4oKSB7XG4gIGNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC10YXNrLXN1Ym1pdC1idG4nKTtcbiAgZWRpdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFlZGl0VGFza0Zvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBpZiAoIWVkaXRUYXNrRGF0ZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIGVkaXRUYXNrRGF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIGVkaXRUYXNrRGF0ZUlucHV0RXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgZWRpdFRhc2tEYXRlSW5wdXRFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIGlmICghZWRpdFRhc2tEZXNJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBlZGl0VGFza0Rlc0lucHV0LmZvY3VzKCk7XG4gICAgICAgIGVkaXRUYXNrRGVzSW5wdXRFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICBlZGl0VGFza0Rlc0lucHV0RXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoIWVkaXRUYXNrTmFtZUlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIGVkaXRUYXNrTmFtZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIGVkaXRUYXNrTmFtZUlucHV0RXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgZWRpdFRhc2tOYW1lSW5wdXRFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdXBkYXRlVGFza0luZm8oKTtcbiAgICB1cGRhdGVUYXNrQ29udGVudERPTSgpO1xuICAgIHRvZ2dsZUVkaXRUYXNrRm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbnRlbnRET00oKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9IHRhc2tMYWJlbE5hbWUuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHRhc2tJZCA9IHRhc2tMYWJlbE5hbWUuZGF0YXNldC50YXNrSWQ7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgoK3Byb2plY3RJZCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRUYXNrSW5kZXgoK3Byb2plY3RJZCwgK3Rhc2tJZCk7XG4gIGNvbnN0IHRhc2tDb250YWluZXJDaGlsZEluZGV4ID0gQXJyYXkuZnJvbShcbiAgICB0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXNcbiAgKS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdEluZGV4ID09PSBwcm9qZWN0SWQgJiZcbiAgICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSW5kZXggPT09IHRhc2tJZFxuICApO1xuICBjb25zdCB0YXJnZXRUYXNrID0gdGFza0NvbnRhaW5lci5jaGlsZE5vZGVzW3Rhc2tDb250YWluZXJDaGlsZEluZGV4XTtcblxuICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXN0YXR1cycpLmNoZWNrZWQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5zdGF0dXM7XG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stbmFtZScpLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ubmFtZTtcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1kZXNjcmlwdGlvbicpLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcignLnRhc2stZHVlZGF0ZScpLnRleHRDb250ZW50ID0gZm9ybWF0dGluZ0RhdGUoXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmR1ZWRhdGVcbiAgKTtcbiAgLy8gdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZHVlZGF0ZVwiKS50ZXh0Q29udGVudCA9XG4gIC8vICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmR1ZWRhdGU7XG5cbiAgaWYgKHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9PT0gJzEnKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpLnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgdGFyZ2V0VGFzay5jbGFzc05hbWUgPSAnJztcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG4gIH1cbiAgaWYgKHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgdGFyZ2V0VGFzay5jbGFzc05hbWUgPSAnJztcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gIH1cbiAgaWYgKHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9PT0gJzMnKSB7XG4gICAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1wcmlvcml0eScpLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIHRhcmdldFRhc2suY2xhc3NOYW1lID0gJyc7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgfVxufVxuYWRkRXZlbnRMaXN0ZW5lckVkaXRTdWJtaXRCdG4oKTtcbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0gfTtcbiIsImltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2RheVRhc2sgfSBmcm9tIFwiLi90b2RheVRhc2suanNcIjtcblxuaW1wb3J0IHsgVGFzaywgdG9nZ2xlVGFza0Zvcm0sIHJlbmRlclRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZURlbGV0ZVByb2plY3RCdG4gfSBmcm9tIFwiLi9yZW1vdmVQcm9qZWN0LmpzXCI7XG5cbmltcG9ydCB7IHNldFByb2plY3RMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9zZXRQcm9qZWN0TG9jYWxTdG9yYWdlLmpzXCI7XG5cbmltcG9ydCB7IGNyZWF0ZUVkaXRQcm9qZWN0QnRuIH0gZnJvbSBcIi4vZWRpdFByb2plY3ROYW1lLmpzXCI7XG5cbmxldCBwcm9qZWN0cyA9IFtdO1xuY2xhc3MgUHJvamVjdCB7XG4gIHN0YXRpYyAjaWQgPSAwO1xuICB0YXNrSWQgPSAwO1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gICAgdGhpcy5pZCA9IFByb2plY3QubmV4dElkKCk7XG4gIH1cblxuICBzdGF0aWMgbmV4dElkKCkge1xuICAgIHJldHVybiBQcm9qZWN0LiNpZCsrO1xuICB9XG5cbiAgc3RhdGljIGdldElkKCkge1xuICAgIHJldHVybiBQcm9qZWN0LiNpZDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCkge1xuICAgIFByb2plY3QuI2lkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzSWRcIikpO1xuICB9XG4gIHN0YXRpYyBzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNJZFwiLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0LmdldElkKCkpKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclByb2plY3RzSWQoKSB7XG4gICAgUHJvamVjdC4jaWQgPSAwO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBuZXh0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJZCsrO1xuICB9XG5cbiAgZ2V0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJZDtcbiAgfVxuXG4gIHNldExvY2FsU3RvcmFnZVByb2plY3RJZCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RJZFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmdldElkKCkpKTtcbiAgfVxuXG4gIGdldExvY2FsU3RvcmFnZVByb2plY3RJZCgpIHtcbiAgICB0aGlzLnRhc2tJZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0SWRcIikpO1xuICB9XG5cbiAgYWRkVGFzayh0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlZGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgdGhpcy50YXNrcy5wdXNoKFxuICAgICAgbmV3IFRhc2soXG4gICAgICAgIHRoaXMuaWQsXG4gICAgICAgIHRoaXMubmV4dFRhc2tJZCgpLFxuICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLFxuICAgICAgICB0YXNrRHVlZGF0ZSxcbiAgICAgICAgdGFza1ByaW9yaXR5LFxuICAgICAgICBmYWxzZVxuICAgICAgKVxuICAgICk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICB9XG5cbiAgZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBsZXQgdGFza0luZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICB0aGlzLnRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZVRhc2sodGFza0lkLCB0YXNrTmFtZSwgdGFza0RlcywgdGFza0R1ZWRhdGUsIHRhc2tQcmlvcml0eSkge1xuICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5uYW1lID0gdGFza05hbWU7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uID0gdGFza0RlcztcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZSA9IHRhc2tEdWVkYXRlO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5wcmlvcml0eSA9IHRhc2tQcmlvcml0eTtcbiAgICB1cGRhdGVQcm9qZWN0KCk7XG4gIH1cbn1cblxuc2V0UHJvamVjdExvY2FsU3RvcmFnZSgpO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChuYW1lKTtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0KCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbi8vIGFkZCBwcm9qZWN0XG5cbmNvbnN0IHNob3dQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvdy1wcm9qZWN0LWZvcm0tYnRuXCIpO1xuY29uc3QgcHJvamVjdEZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybS1jb250YWluZXJcIik7XG5jb25zdCBjYW5jZWxGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtcHJvamVjdC1idG5cIik7XG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0X25hbWVcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIik7XG5cbnNob3dQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNhbmNlbEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChpbnB1dFByb2plY3ROYW1lLnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFByb2plY3QuZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICBjcmVhdGVQcm9qZWN0KGlucHV0UHJvamVjdE5hbWUudmFsdWUpO1xuICBQcm9qZWN0LnNldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBhZGROZXdQcm9qZWN0TmF2YmFyKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0TmF2YmFyKCkge1xuICBjb25zdCBwcm9qZWN0TmF2TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdC1saXN0LWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHByb2plY3QudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5uYW1lfWA7XG4gIHByb2plY3QuZGF0YXNldC5pbmRleCA9IGAke1Byb2plY3QuZ2V0SWQoKSAtIDF9YDtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYXYtaXRlbVwiKTtcblxuICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbmRlclByb2plY3RDb250ZW50KGUpO1xuICAgIHJlbmRlclByb2plY3RUYXNrKGUpO1xuICB9KTtcblxuICBwcm9qZWN0TmF2TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdE5hdmJhcigpIHtcbiAgY29uc3QgcHJvamVjdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIikpO1xuICBjb25zdCBwcm9qZWN0TmF2TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIucHJvamVjdC1saXN0LWNvbnRhaW5lclwiXG4gICk7XG5cbiAgcHJvamVjdERhdGEuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgcHJvamVjdERpdi50ZXh0Q29udGVudCA9IGAke3Byb2plY3QubmFtZX1gO1xuICAgIHByb2plY3REaXYuZGF0YXNldC5pbmRleCA9IGAke3Byb2plY3QuaWR9YDtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hdi1pdGVtXCIpO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbmRlclByb2plY3RDb250ZW50KGUpO1xuICAgICAgcmVuZGVyUHJvamVjdFRhc2soZSk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0TmF2TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RDb250ZW50KGUpIHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdEJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgcHJvamVjdEJ0bldyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnRuLXdyYXBwZXJcIik7XG5cbiAgcHJvamVjdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlU2hvd1Rhc2tGb3JtQnRuKCkpO1xuICBwcm9qZWN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFZGl0UHJvamVjdEJ0bigpKTtcbiAgcHJvamVjdEJ0bldyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRGVsZXRlUHJvamVjdEJ0bigpKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGVudC1jb250YWluZXJcIik7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RIZWFkZXJDb250ZW50KGUpKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bldyYXBwZXIpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ29udGFpbmVyKCkpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhlYWRlckNvbnRlbnQoZSkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgKTtcblxuICBwcm9qZWN0SGVhZGVyTmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZX1gO1xuICBwcm9qZWN0SGVhZGVyTmFtZS5kYXRhc2V0LmluZGV4ID0gYCR7ZS50YXJnZXQuZGF0YXNldC5pbmRleH1gO1xuICBwcm9qZWN0SGVhZGVyTmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItbmFtZVwiKTtcbiAgcmV0dXJuIHByb2plY3RIZWFkZXJOYW1lO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIHRhc2tDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dUYXNrRm9ybUJ0bigpIHtcbiAgY29uc3Qgc2hvd1Rhc2tGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2hvd1Rhc2tGb3JtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHNob3dUYXNrRm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgc2hvd1Rhc2tGb3JtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBzaG93VGFza0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlVGFza0Zvcm0oKTtcbiAgfSk7XG4gIHJldHVybiBzaG93VGFza0Zvcm1CdG47XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1jb250YWluZXJcIik7XG5cbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUYXNrKGUpIHtcbiAgbGV0IHByb2plY3RJbmRleDtcbiAgaWYgKHR5cGVvZiBlID09PSBcIm51bWJlclwiKSB7XG4gICAgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBlKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICApO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlZmF1bHRBbGxUYXNrQ29udGVudCgpIHtcbiAgLy8gcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAvLyAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAvLyAgICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRlZFRhc2tzID0gdGFza3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmICghKGEuZHVlZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICBhLmR1ZWRhdGUgPSBuZXcgRGF0ZShhLmR1ZWRhdGUpO1xuICAgIH1cbiAgICBpZiAoIShiLmR1ZWRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgYi5kdWVkYXRlID0gbmV3IERhdGUoYi5kdWVkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGEuZHVlZGF0ZSAtIGIuZHVlZGF0ZTtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKHNvcnRlZFRhc2tzKTtcbiAgc29ydGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gIH0pO1xufVxuXG5yZW5kZXJEZWZhdWx0QWxsVGFza0NvbnRlbnQoKTtcblxuZnVuY3Rpb24gY2xlYXJUYXNrQ29udGFpbmVyKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgd2hpbGUgKHRhc2tDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICB0YXNrQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRhc2tDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlck5hbWUobmFtZSkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdEhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaGVhZGVyLW5hbWVcIik7XG4gIHByb2plY3RIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyTmFtZSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG59XG5cbmNvbnN0IGFsbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrXCIpO1xuXG5mdW5jdGlvbiByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lKG5hbWUpIHtcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gIGNyZWF0ZUhlYWRlck5hbWUobmFtZSk7XG4gIHJlbmRlckRlZmF1bHRBbGxUYXNrQ29udGVudCgpO1xufVxuYWxsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZShcIkFsbCBUYXNrXCIpO1xufSk7XG5cbmV4cG9ydCB7XG4gIFByb2plY3QsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIHByb2plY3RzLFxuICByZW5kZXJQcm9qZWN0TmF2YmFyLFxuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lLFxuICByZW5kZXJQcm9qZWN0VGFzayxcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyLFxuICBjcmVhdGVIZWFkZXJOYW1lLFxufTtcbiIsImltcG9ydCB7XG4gIHByb2plY3RzLFxuICB1cGRhdGVQcm9qZWN0LFxuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lLFxufSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uaWQgPSBcImRlbGV0ZS1wcm9qZWN0LWZvcm0tYnRuXCI7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm0tYnRuXCIpO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURlbFByb2plY3RQb3B1cCk7XG4gIC8vIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVQcm9qZWN0KGRlbGV0ZVByb2plY3RGb3JtQnRuKTtcbiAgcmV0dXJuIGRlbGV0ZVByb2plY3RGb3JtQnRuO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcblxuICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtcHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgY29uc3QgcHJvamVjdEJ0bldyYXBwZXIgPSBkZWxldGVQcm9qZWN0QnRuLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gcHJvamVjdEJ0bldyYXBwZXIucGFyZW50Tm9kZTtcbiAgY29uc3QgcHJvamVjdElkID0gK3Byb2plY3RDb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleDtcblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVQcm9qZWN0KGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGlzRGVsUHJvamVjdCkge1xuICAgICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURlbFByb2plY3RQb3B1cCgpIHtcbiAgY29uc3QgZGVsUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLXByb2plY3QtcG9wdXBcIik7XG5cbiAgaWYgKFxuICAgIGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcbiAgICBkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwiXCJcbiAgKSB7XG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3RZZXNCdG4oKSB7XG4gIGNvbnN0IGRlbFByb2plY3RZZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbC1wcm9qZWN0LXllcy1idG5cIik7XG4gIGRlbFByb2plY3RZZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZURlbFByb2plY3RQb3B1cCgpO1xuXG4gICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgIHJlbW92ZVByb2plY3RGcm9tRE9NKCk7XG4gICAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZShcIkFsbCBUYXNrXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3ROb0J0bigpIHtcbiAgY29uc3QgZGVsUHJvamVjdE5vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWwtcHJvamVjdC1uby1idG5cIik7XG4gIGRlbFByb2plY3ROb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlRGVsUHJvamVjdFBvcHVwKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURPTSgpIHtcbiAgY29uc3QgcHJvamVjdExpc3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3REYXRhc2V0SW5kZXggPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpXG4gICAgLmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IEFycmF5LmZyb20ocHJvamVjdExpc3ROYXYuY2hpbGROb2RlcykuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiArZWxlbWVudC5kYXRhc2V0LmluZGV4ID09PSBwcm9qZWN0RGF0YXNldEluZGV4XG4gICk7XG4gIHByb2plY3RMaXN0TmF2LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0TmF2LmNoaWxkTm9kZXNbcHJvamVjdEluZGV4XSk7XG59XG5hZGRFdmVudExpc3RlbmVyRGVsUHJvamVjdFllc0J0bigpO1xuYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3ROb0J0bigpO1xuXG5leHBvcnQge1xuICByZW1vdmVQcm9qZWN0LFxuICBhZGRFdmVudExpc3RlbmVyUmVtb3ZlUHJvamVjdCxcbiAgdG9nZ2xlRGVsUHJvamVjdFBvcHVwLFxuICBjcmVhdGVEZWxldGVQcm9qZWN0QnRuLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzLCByZW5kZXJQcm9qZWN0VGFzayB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICt0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICApO1xuICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tJZCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5pZDtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5kZWxldGVUYXNrKHRhc2tJZCk7XG4gIHJlbW92ZVRhc2tGcm9tRE9NKHRhc2tJZCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKHRhc2tJZCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0lkSW5kZXggPSBBcnJheS5mcm9tKHRhc2tDb250YWluZXIuY2hpbGROb2RlcykuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiArdGFzay5kYXRhc2V0LnRhc2tJbmRleCA9PT0gdGFza0lkXG4gICk7XG4gIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5jaGlsZE5vZGVzW3Rhc2tJZEluZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlVGFzayhlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlUHJvamVjdHNFbXB0eSgpIHtcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiKSA9PT0gbnVsbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RMb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZVByb2plY3RzRW1wdHkoKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICBQcm9qZWN0LmNsZWFyUHJvamVjdHNJZCgpO1xuICAgIFByb2plY3Quc2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBQcm9qZWN0LmdldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBzdG9yZVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIpKTtcblxuICBzdG9yZVByb2plY3RzLmZvckVhY2goKHN0b3JlUHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoc3RvcmVQcm9qZWN0Lm5hbWUpO1xuICAgIHByb2plY3QuaWQgPSBzdG9yZVByb2plY3QuaWQ7XG4gICAgcHJvamVjdC50YXNrcyA9IHN0b3JlUHJvamVjdC50YXNrcztcbiAgICBwcm9qZWN0LnRhc2tJZCA9IHN0b3JlUHJvamVjdC50YXNrSWQ7XG5cbiAgICBwcm9qZWN0c1tpbmRleF0gPSBwcm9qZWN0O1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc2V0UHJvamVjdExvY2FsU3RvcmFnZSB9O1xuIiwiLy8gdGhpcyBpcyB0YXNrLmpzXG5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAgfSBmcm9tICcuL3Rhc2tEZXRhaWxQb3B1cC5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyB9IGZyb20gJy4vdG9nZ2xlVGFza1N0YXR1cy5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyUmVtb3ZlVGFzayB9IGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtIH0gZnJvbSAnLi9lZGl0VGFza0luZm8uanMnO1xuaW1wb3J0IHsgZm9ybWF0dGluZ0RhdGUgfSBmcm9tICcuL2RhdGUuanMnO1xuXG5pbXBvcnQge1xuICBhZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IsXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIHRhc2tJbnB1dERlcyxcbiAgdGFza0lucHV0RGVzRXJyb3JUZXh0LFxuICB0YXNrSW5wdXREYXRlLFxuICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LFxuICB0YXNrRm9ybSxcbn0gZnJvbSAnLi90YXNrVmFsaWRhdGUuanMnO1xuXG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIGBZb3UgY2FuJ3Qgc2tpcCB0aGlzIHBhcnRgXG4pO1xuXG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIHRhc2tJbnB1dERlcyxcbiAgdGFza0lucHV0RGVzRXJyb3JUZXh0LFxuICBgWW91IGNhbid0IHNraXAgdGhpcyBwYXJ0YFxuKTtcbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgdGFza0lucHV0RGF0ZSxcbiAgdGFza0lucHV0RGF0ZUVycm9yVGV4dCxcbiAgYFlvdSBjYW4ndCBza2lwIHRoaXMgcGFydGBcbik7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQsIGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gIGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJyB8fCB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtVmFsdWUoZSkge1xuICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfbmFtZScpO1xuICBjb25zdCB0YXNrSW5wdXREZXNjaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0lucHV0RHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2R1ZV9kYXRlJyk7XG4gIGNvbnN0IHRhc2tJbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfcHJpb3JpdHknKTtcblxuICB0YXNrSW5wdXROYW1lLnZhbHVlID0gJyc7XG4gIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUgPSAnJztcbiAgdGFza0lucHV0RHVlZGF0ZS52YWx1ZSA9ICcnO1xuICB0YXNrSW5wdXRQcmlvcml0eS52YWx1ZSA9ICcxJztcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckFkZFRhc2tCdG4oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCF0YXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGlmICghdGFza0lucHV0RGF0ZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0YXNrSW5wdXREYXRlLmZvY3VzKCk7XG4gICAgICAgIHRhc2tJbnB1dERhdGVFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tJbnB1dERlcy52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0YXNrSW5wdXREZXMuZm9jdXMoKTtcbiAgICAgICAgdGFza0lucHV0RGVzRXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgdGFza0lucHV0RGVzRXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tJbnB1dE5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgdGFza0lucHV0TmFtZS5mb2N1cygpO1xuICAgICAgICB0YXNrSW5wdXROYW1lRXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgdGFza0lucHV0TmFtZUVycm9yVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygncnVuJyk7XG4gICAgY3JlYXRlVGFzaygpO1xuICAgIHRvZ2dsZVRhc2tGb3JtKCk7XG4gICAgY2xlYXJUYXNrRm9ybVZhbHVlKCk7XG4gICAgcmVuZGVyTmV3VGFzaygpO1xuICB9KTtcbn1cblxuYWRkRXZlbnRMaXN0ZW5lckFkZFRhc2tCdG4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrLWJ0bicpKTtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckNhbmNlbFRhc2tGb3JtKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZVRhc2tGb3JtKCk7XG4gICAgY2xlYXJUYXNrRm9ybVZhbHVlKCk7XG4gIH0pO1xufVxuYWRkRXZlbnRMaXN0ZW5lckNhbmNlbFRhc2tGb3JtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW5jZWwtdGFzay1idG4nKSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soZSkge1xuICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfbmFtZScpO1xuICBjb25zdCB0YXNrSW5wdXREZXNjaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0lucHV0RHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2R1ZV9kYXRlJyk7XG4gIGNvbnN0IHRhc2tJbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfcHJpb3JpdHknKTtcblxuICBjb25zdCBwcm9qZWN0VGFyZ2V0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+XG4gICAgICBwcm9qZWN0LmlkID09PVxuICAgICAgK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlci1uYW1lJykuZGF0YXNldC5pbmRleFxuICApO1xuXG4gIGNvbnN0IHRhc2tJbnB1dERhdGVWYWx1ZSA9IG5ldyBEYXRlKHRhc2tJbnB1dER1ZWRhdGUudmFsdWUpO1xuXG4gIGlmIChcbiAgICB0YXNrSW5wdXROYW1lLnZhbHVlID09PSAnJyB8fFxuICAgIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUgPT09ICcnIHx8XG4gICAgdGFza0lucHV0RHVlZGF0ZS52YWx1ZSA9PT0gJycgfHxcbiAgICB0YXNrSW5wdXRQcmlvcml0eS52YWx1ZSA9PT0gJydcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHByb2plY3RzW3Byb2plY3RUYXJnZXRJbmRleF0uYWRkVGFzayhcbiAgICB0YXNrSW5wdXROYW1lLnZhbHVlLFxuICAgIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUsXG4gICAgdGFza0lucHV0RGF0ZVZhbHVlLFxuICAgIHRhc2tJbnB1dFByaW9yaXR5LnZhbHVlLFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2sodGFzaykge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29uc3QgdGFza0NoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tTdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrRGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tEdWVkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrU2hvd0RldGFpbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCB0YXNrU2hvd0RldGFpbEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHRhc2tFZGl0RGV0YWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRhc2tFZGl0RGV0YWlsQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgdGFza0RlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCB0YXNrRGVsZXRlQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICB0YXNrU2hvd0RldGFpbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2xpY2snKTtcbiAgdGFza0VkaXREZXRhaWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NsaWNrJyk7XG4gIHRhc2tEZWxldGVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NsaWNrJyk7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG5TcGFuLnRleHRDb250ZW50ID0gJ2luZm8nO1xuICB0YXNrRWRpdERldGFpbEJ0blNwYW4udGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gIHRhc2tEZWxldGVCdG5TcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcblxuICB0YXNrU2hvd0RldGFpbEJ0blNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICB0YXNrRWRpdERldGFpbEJ0blNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICB0YXNrRGVsZXRlQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG4uYXBwZW5kQ2hpbGQodGFza1Nob3dEZXRhaWxCdG5TcGFuKTtcbiAgdGFza0VkaXREZXRhaWxCdG4uYXBwZW5kQ2hpbGQodGFza0VkaXREZXRhaWxCdG5TcGFuKTtcbiAgdGFza0RlbGV0ZUJ0bi5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuU3Bhbik7XG5cbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRlbnQnKTtcbiAgdGFza0xpc3QuZGF0YXNldC5wcm9qZWN0SW5kZXggPSB0YXNrLnByb2plY3RJZDtcbiAgdGFza0xpc3QuZGF0YXNldC50YXNrSW5kZXggPSB0YXNrLmlkO1xuICB0YXNrQ2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jaGVja2JveCcpO1xuICB0YXNrU3RhdHVzLmlkID0gJ3Rhc2stc3RhdHVzJztcbiAgdGFza1N0YXR1cy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcblxuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgdGFza0Rlcy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2NyaXB0aW9uJyk7XG4gIHRhc2tEdWVkYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZHVlZGF0ZScpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFzay1wcmlvcml0eScpO1xuICBpZiAodGFzay5zdGF0dXMgPT09IHRydWUpIHtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLXN0YXR1cy10cnVlJyk7XG4gIH1cbiAgdGFza1N0YXR1cy5jaGVja2VkID0gdGFzay5zdGF0dXM7XG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay5uYW1lO1xuICB0YXNrRGVzLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0R1ZWRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0aW5nRGF0ZSh0YXNrLmR1ZWRhdGUpO1xuICAvLyB0YXNrRHVlZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlZGF0ZTtcblxuICBpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0xvdyc7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbG93LXByaW9yaXR5Jyk7XG4gIH1cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcyJykge1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ21lZGl1bS1wcmlvcml0eScpO1xuICB9XG4gIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMycpIHtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICB9XG5cbiAgdGFza0NoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tTdGF0dXMpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrQ2hlY2tCb3hDb250YWluZXIpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tEZXMpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRHVlZGF0ZSk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tTaG93RGV0YWlsQnRuKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VkaXREZXRhaWxCdG4pO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlQnRuKTtcblxuICBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyh0YXNrU3RhdHVzKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbmRlclRhc2tEZXRhaWxQb3B1cCh0YXNrU2hvd0RldGFpbEJ0bik7XG4gIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrKHRhc2tEZWxldGVCdG4pO1xuICBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtKHRhc2tFZGl0RGV0YWlsQnRuKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGlzdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5ld1Rhc2soKSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT5cbiAgICAgIHByb2plY3QuaWQgPT09XG4gICAgICArZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyLW5hbWUnKS5kYXRhc2V0LmluZGV4XG4gICk7XG4gIHJlbmRlclRhc2soXG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1twcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmxlbmd0aCAtIDFdXG4gICk7XG59XG5cbmV4cG9ydCB7IFRhc2ssIHRvZ2dsZVRhc2tGb3JtLCBjbGVhclRhc2tGb3JtVmFsdWUsIHJlbmRlclRhc2sgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGluZ0RhdGUgfSBmcm9tIFwiLi9kYXRlLmpzXCI7XG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQ2xvc2VUYXNrRGV0YWlsQnRuKCkge1xuICBjb25zdCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWRldGFpbC1jb250YWluZXJcIlxuICApO1xuICBjb25zdCB0YXNrRGV0YWlsQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stcG9wdXAtY2xvc2UtYnRuXCIpO1xuICB0YXNrRGV0YWlsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdGFza0RldGFpbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrRGV0YWlsUG9wdXAoZSkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICt0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICApO1xuXG4gIGNvbnN0IHRhc2tJZCA9IHByb2plY3RzW3Byb2plY3RJZF0udGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSArdGFza0NvbnRlbnQuZGF0YXNldC50YXNrSW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwSGVhZGVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kZXRhaWwtaGVhZGVyLXRleHRcIlxuICApO1xuICBjb25zdCB0YXNrRGV0YWlsUG9wdXBQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1wcm9qZWN0LW5hbWUtdmFsdWVcIlxuICApO1xuICBjb25zdCB0YXNrRGV0YWlsUG9wdXBQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1wcmlvcml0eS12YWx1ZVwiXG4gICk7XG5cbiAgY29uc3QgdGFza0RldGFpbFBvcHVwRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kdWVkYXRlLXZhbHVlXCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGVzY3JpcHRpb24tdmFsdWVcIlxuICApO1xuICB0YXNrRGV0YWlsUG9wdXBIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLm5hbWV9YDtcbiAgdGFza0RldGFpbFBvcHVwUHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SWRdLm5hbWV9YDtcbiAgaWYgKHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5wcmlvcml0eSA9PT0gXCIzXCIpIHtcbiAgICB0YXNrRGV0YWlsUG9wdXBQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICB9XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0ucHJpb3JpdHkgPT09IFwiMlwiKSB7XG4gICAgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICB9XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0ucHJpb3JpdHkgPT09IFwiMVwiKSB7XG4gICAgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICB9XG5cbiAgdGFza0RldGFpbFBvcHVwRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRpbmdEYXRlKFxuICAgIHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5kdWVkYXRlXG4gICl9YDtcblxuICAvLyB0YXNrRGV0YWlsUG9wdXBEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmR1ZWRhdGV9YDtcbiAgdGFza0RldGFpbFBvcHVwRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uZGVzY3JpcHRpb259YDtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclJlbmRlclRhc2tEZXRhaWxQb3B1cChidXR0b24pIHtcbiAgY29uc3QgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kZXRhaWwtY29udGFpbmVyXCJcbiAgKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbmRlclRhc2tEZXRhaWxQb3B1cChlKTtcbiAgICB0YXNrRGV0YWlsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0pO1xufVxuZXhwb3J0IHtcbiAgYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0bixcbiAgcmVuZGVyVGFza0RldGFpbFBvcHVwLFxuICBhZGRFdmVudExpc3RlbmVyUmVuZGVyVGFza0RldGFpbFBvcHVwLFxufTtcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG5jb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfbmFtZScpO1xuY29uc3QgdGFza0lucHV0TmFtZUVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjdGFza19uYW1lKy50YXNrLWlucHV0LWVycm9yLXRleHQnXG4pO1xuY29uc3QgdGFza0lucHV0RGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZGVzY3JpcHRpb24nKTtcbmNvbnN0IHRhc2tJbnB1dERlc0Vycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjdGFza19kZXNjcmlwdGlvbisudGFzay1pbnB1dC1lcnJvci10ZXh0J1xuKTtcbmNvbnN0IHRhc2tJbnB1dERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19kdWVfZGF0ZScpO1xuY29uc3QgdGFza0lucHV0RGF0ZUVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICcjdGFza19kdWVfZGF0ZSsudGFzay1pbnB1dC1lcnJvci10ZXh0J1xuKTtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yKFxuICBpbnB1dEVsZW1lbnQsXG4gIGVycm9yU2hvd0VsZW1lbnQsXG4gIGVycm9yVGV4dFxuKSB7XG4gIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBlcnJvclNob3dFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICBlcnJvclNob3dFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JUZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICBlcnJvclNob3dFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9XG4gIH0pO1xufVxuXG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIGBZb3UgY2FuJ3Qgc2tpcCB0aGlzIHBhcnRgXG4pO1xuXG5leHBvcnQge1xuICBhZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IsXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIHRhc2tJbnB1dERlcyxcbiAgdGFza0lucHV0RGVzRXJyb3JUZXh0LFxuICB0YXNrSW5wdXREYXRlLFxuICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LFxuICB0YXNrRm9ybSxcbn07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7XG4gIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUsXG4gIGNsZWFyQ29udGVudENvbnRhaW5lcixcbiAgY3JlYXRlSGVhZGVyTmFtZSxcbn0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfVxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICBpZiAodG9kYXkgPT09IGRhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2RheVRhc2soKSB7XG4gIGNvbnN0IHRvZGF5ID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmIChpc1RvZGF5KHRhc2suZHVlZGF0ZSkpIHtcbiAgICAgICAgdG9kYXkucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIGNvbnN0IHNvcnRlZFRvZGF5UHJpb3JpdHlUYXNrID0gc29ydFRhc2tQcmlvcml0eUhpZ2hUb0xvdyh0b2RheSk7XG4gIHNvcnRlZFRvZGF5UHJpb3JpdHlUYXNrLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc29ydFRhc2tQcmlvcml0eUhpZ2hUb0xvdyhhcnIpIHtcbiAgYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTnVtYmVyKGEucHJpb3JpdHkpIC0gTnVtYmVyKGIucHJpb3JpdHkpO1xuICB9KTtcbiAgYXJyLnJldmVyc2UoKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzaygpIHtcbiAgY29uc3QgdG9kYXlUYXNrTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS10YXNrXCIpO1xuICB0b2RheVRhc2tOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJoZXlcIik7XG4gICAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gICAgY3JlYXRlSGVhZGVyTmFtZShcIlRvZGF5IFRhc2tcIik7XG4gICAgcmVuZGVyVG9kYXlUYXNrKCk7XG4gIH0pO1xufVxuXG5hZGRFdmVudExpc3RlbmVyVG9kYXlUYXNrKCk7XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2RheVRhc2sgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiB0b2dnbGVUYXNrU3RhdHVzKGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnRDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArdGFza0NvbnRlbnRDb250YWluZXIuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0lkID0gcHJvamVjdHNbcHJvamVjdElkXS50YXNrcy5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+IHRhc2suaWQgPT09ICt0YXNrQ29udGVudENvbnRhaW5lci5kYXRhc2V0LnRhc2tJbmRleFxuICApO1xuXG4gIHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5zdGF0dXMgPSBlLnRhcmdldC5jaGVja2VkO1xuICB1cGRhdGVQcm9qZWN0KCk7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uc3RhdHVzID09PSBmYWxzZSkge1xuICAgIHRhc2tDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YXNrLXN0YXR1cy10cnVlXCIpO1xuICB9IGVsc2Uge1xuICAgIHRhc2tDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXN0YXR1cy10cnVlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlVGFza1N0YXR1cyhlKTtcbiAgfSk7XG59XG5leHBvcnQgeyB0b2dnbGVUYXNrU3RhdHVzLCBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdE5hdmJhciB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0biB9IGZyb20gXCIuL21vZHVsZXMvdGFza0RldGFpbFBvcHVwLmpzXCI7XG5pbXBvcnQgR2l0SHViTG9nbyBmcm9tIFwiLi9pbWFnZXMvZ2l0aHViLW1hcmsuc3ZnXCI7XG5yZW5kZXJQcm9qZWN0TmF2YmFyKCk7XG5hZGRFdmVudExpc3RlbmVyQ2xvc2VUYXNrRGV0YWlsQnRuKCk7XG5mdW5jdGlvbiBhZGRGb290ZXJMb2dvKCkge1xuICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXItbGlua1wiKTtcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNvbnN0IGdpdEh1YkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgZ2l0SHViTG9nby5zcmMgPSBHaXRIdWJMb2dvO1xuICBnaXRIdWJMb2dvLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItZ2l0aHViLWxvZ29cIik7XG4gIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XG59XG5hZGRGb290ZXJMb2dvKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=