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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGFBQWEsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxRQUFRLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxzR0FBc0csTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxxQkFBcUIsZ0NBQWdDLHVFQUF1RSxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IscUJBQXFCLEdBQUcsV0FBVywwQkFBMEIsK0JBQStCLDRCQUE0QixHQUFHLDhCQUE4QiwyQkFBMkIsR0FBRyxPQUFPLGNBQWMsZUFBZSxrQkFBa0IsR0FBRyxVQUFVLHNDQUFzQyxpQ0FBaUMsS0FBSyxVQUFVLHVCQUF1QixrQkFBa0IsMkJBQTJCLHVCQUF1QixHQUFHLGlDQUFpQyxtQkFBbUIsb0JBQW9CLEdBQUcsU0FBUywyQkFBMkIsaUJBQWlCLHVCQUF1QixpQ0FBaUMsMkJBQTJCLDBCQUEwQixHQUFHLGlDQUFpQyx1QkFBdUIsR0FBRyxPQUFPLG9CQUFvQixzQkFBc0Isb0JBQW9CLEdBQUcsV0FBVyxrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IscUJBQXFCLEdBQUcsWUFBWSxrQkFBa0IsaUJBQWlCLGtDQUFrQyxpQ0FBaUMsb0JBQW9CLHFCQUFxQixrQkFBa0IsR0FBRyxvREFBb0QsbUJBQW1CLDhCQUE4QixLQUFLLEdBQUcsMkRBQTJELGtCQUFrQixjQUFjLEdBQUcsNkJBQTZCLHVCQUF1Qix3QkFBd0IsR0FBRyxvQ0FBb0MsNEJBQTRCLHdCQUF3QixHQUFHLHdPQUF3TyxpQkFBaUIseUNBQXlDLHdCQUF3QixxQkFBcUIsR0FBRyx3TUFBd00seUNBQXlDLEdBQUcsdUJBQXVCLGlCQUFpQix5Q0FBeUMsd0JBQXdCLHFCQUFxQixHQUFHLDZCQUE2Qix5Q0FBeUMsR0FBRyw2Q0FBNkMsd0NBQXdDLGtDQUFrQyxrQkFBa0IsR0FBRyx1QkFBdUIsc0JBQXNCLGtCQUFrQixjQUFjLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLFlBQVksR0FBRyxrQ0FBa0MsMENBQTBDLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsMkJBQTJCLGNBQWMsd0JBQXdCLEdBQUcseUJBQXlCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3Qix1QkFBdUIsZ0RBQWdELEdBQUcsb0RBQW9ELGdCQUFnQixlQUFlLGNBQWMsaUJBQWlCLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDJCQUEyQixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyw2QkFBNkIsY0FBYyxHQUFHLGlEQUFpRCxzQkFBc0Isd0JBQXdCLG9CQUFvQixHQUFHLDZEQUE2RCx5Q0FBeUMsR0FBRyx1Q0FBdUMsOEJBQThCLGtCQUFrQixZQUFZLEdBQUcsMEJBQTBCLHVCQUF1Qix3QkFBd0IsR0FBRyxxQkFBcUIscUJBQXFCLEdBQUcsbUJBQW1CLGtCQUFrQiwyREFBMkQsY0FBYyx3QkFBd0Isd0JBQXdCLDJCQUEyQixxQkFBcUIsd0JBQXdCLG9CQUFvQixHQUFHLHVCQUF1QixnQ0FBZ0MsR0FBRyx5QkFBeUIscUJBQXFCLHdCQUF3Qiw0QkFBNEIsR0FBRyxrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxvQkFBb0Isb0NBQW9DLEdBQUcsb0JBQW9CLG9DQUFvQyxHQUFHLGlCQUFpQixvQ0FBb0MsR0FBRyx1QkFBdUIsdUNBQXVDLDBDQUEwQyxHQUFHLDBCQUEwQixxQkFBcUIsR0FBRyxpREFBaUQsa0JBQWtCLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLDRCQUE0QixrQkFBa0IsaUJBQWlCLGVBQWUsNEJBQTRCLHdCQUF3QixHQUFHLHlFQUF5RSxtQkFBbUIsd0JBQXdCLEdBQUcsZ0dBQWdHLGtCQUFrQixvQkFBb0IsYUFBYSxjQUFjLHFDQUFxQyw0QkFBNEIsa0JBQWtCLGlCQUFpQixlQUFlLDRCQUE0Qix3QkFBd0IsR0FBRyw0Q0FBNEMsd0JBQXdCLEdBQUcsb0RBQW9ELGtCQUFrQixrQ0FBa0MsR0FBRyx3TUFBd00sbUJBQW1CLHdCQUF3QixHQUFHLDRCQUE0Qix1QkFBdUIsbUJBQW1CLHVCQUF1Qix1QkFBdUIsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLHNCQUFzQixHQUFHLHdEQUF3RCxrQkFBa0IsaUJBQWlCLG9CQUFvQixhQUFhLGNBQWMscUNBQXFDLDRCQUE0QixrQkFBa0IsOEJBQThCLHdCQUF3QixHQUFHLGlDQUFpQyx3QkFBd0IsR0FBRyxrQ0FBa0MsdUJBQXVCLG1CQUFtQix3QkFBd0IsR0FBRyxxQ0FBcUMsa0JBQWtCLGtDQUFrQyxHQUFHLGtDQUFrQyx1QkFBdUIsR0FBRyxnQ0FBZ0Msa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRywyQkFBMkIsNEJBQTRCLEdBQUcsZ0NBQWdDLGtCQUFrQixvQ0FBb0MsdUJBQXVCLEdBQUcsNEJBQTRCLGtCQUFrQixHQUFHLHFCQUFxQixrQkFBa0IsNEJBQTRCLHdCQUF3QixjQUFjLEdBQUcsdUJBQXVCLGdCQUFnQixHQUFHLHdDQUF3QyxHQUFHLHFCQUFxQjtBQUN4MlU7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM1YTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDYndDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsSUFBSSxJQUFJLEtBQUs7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQ3RDLFlBQVksS0FBSyxHQUFHLE1BQU0sR0FBRyxJQUFJO0FBQ2pDOztBQUVzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0M7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixpREFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLGlEQUFRO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1YsY0FBYyxpREFBUTtBQUN0QjtBQUNBO0FBQ0EsRUFBRSwwREFBYTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsaURBQVE7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFdUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GL0I7QUFDcUM7QUFDTjs7QUFFdkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQVE7QUFDcEMsMkJBQTJCLGlEQUFRO0FBQ25DLCtCQUErQixvRUFBMEI7QUFDekQsSUFBSSxpREFBUTtBQUNaOztBQUVBO0FBQ0EsSUFBSSxpREFBUTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBLHVCQUF1QixpREFBUTtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpREFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlEQUFRO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0EsSUFBSSxpREFBUTtBQUNaO0FBQ0EsSUFBSSxpREFBUTtBQUNaLDBEQUEwRCx3REFBYztBQUN4RSxJQUFJLGlEQUFRO0FBQ1o7QUFDQTtBQUNBOztBQUVBLE1BQU0saURBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBUTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFRO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxS2E7O0FBRUU7O0FBRUQ7O0FBRVM7O0FBRVQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSwwQ0FBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrRkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixtQ0FBbUM7QUFDOUQsNkJBQTZCLG9CQUFvQjtBQUNqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdDQUFnQyxhQUFhO0FBQzdDLGtDQUFrQyxXQUFXO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MseUVBQW9CO0FBQ3BELGdDQUFnQyx5RUFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDLDRCQUE0QjtBQUNqRSx1Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQWM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksb0RBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQVlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelRvQjs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBUTs7QUFFN0IsRUFBRSxpREFBUTtBQUNWLEVBQUUsMERBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0VBQXlCO0FBQzdCLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRnlEOztBQUUzRDtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFRO0FBQy9CO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVE7QUFDNUI7QUFDQTtBQUNBLGlCQUFpQixpREFBUTtBQUN6QixFQUFFLGlEQUFRO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXNDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0JXO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZELGlEQUFRO0FBQ3JFLElBQUksZ0RBQU87QUFDWCxJQUFJLGdEQUFPO0FBQ1gsSUFBSTtBQUNKO0FBQ0EsSUFBSSxnREFBTztBQUNYO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnREFBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpREFBUTtBQUNaLEdBQUc7QUFDSDs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ2xDOztBQUV3QztBQUNxQztBQUNKO0FBQ1o7QUFDVTtBQUM1Qjs7QUFXaEI7O0FBRTNCLGdGQUE4QjtBQUM5QixFQUFFLDJEQUFhO0FBQ2YsRUFBRSxvRUFBc0I7QUFDeEI7QUFDQTs7QUFFQSxnRkFBOEI7QUFDOUIsRUFBRSwwREFBWTtBQUNkLEVBQUUsbUVBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSxnRkFBOEI7QUFDOUIsRUFBRSwyREFBYTtBQUNmLEVBQUUsb0VBQXNCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHNEQUFRO0FBQ2pCLFdBQVcsMkRBQWE7QUFDeEIsUUFBUSwyREFBYTtBQUNyQixRQUFRLG9FQUFzQjtBQUM5QixRQUFRLG9FQUFzQjtBQUM5QjtBQUNBLFdBQVcsMERBQVk7QUFDdkIsUUFBUSwwREFBWTtBQUNwQixRQUFRLG1FQUFxQjtBQUM3QixRQUFRLG1FQUFxQjtBQUM3QjtBQUNBLFdBQVcsMkRBQWE7QUFDeEIsUUFBUSwyREFBYTtBQUNyQixRQUFRLG9FQUFzQjtBQUM5QixRQUFRLG9FQUFzQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsaURBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdEQUFjO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxzRkFBZ0M7QUFDbEMsRUFBRSwwRkFBcUM7QUFDdkMsRUFBRSwwRUFBMEI7QUFDNUIsRUFBRSxvRkFBa0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpREFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBUSxxQkFBcUIsaURBQVE7QUFDekM7QUFDQTs7QUFFZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6T3hCO0FBQ0c7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxvQkFBb0IsaURBQVE7QUFDNUI7QUFDQTs7QUFFQSxpQkFBaUIsaURBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaURBQVEsK0JBQStCO0FBQ3BGLDhDQUE4QyxpREFBUSxpQkFBaUI7QUFDdkUsTUFBTSxpREFBUTtBQUNkO0FBQ0E7QUFDQSxNQUFNLGlEQUFRO0FBQ2Q7QUFDQTtBQUNBLE1BQU0saURBQVE7QUFDZDtBQUNBOztBQUVBLDBDQUEwQyx3REFBYztBQUN4RCxJQUFJLGlEQUFRO0FBQ1osSUFBSTs7QUFFSiw2Q0FBNkMsMENBQTBDO0FBQ3ZGLDhDQUE4QyxpREFBUSxzQ0FBc0M7QUFDNUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFLRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RWtDO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNzQztBQUtsQjtBQUNpQjs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsaURBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUksb0RBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQXFCO0FBQ3pCLElBQUksNkRBQWdCO0FBQ3BCO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGtCOztBQUV2RDtBQUNBOztBQUVBLG9CQUFvQixpREFBUTtBQUM1QjtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFRO0FBQ3pCO0FBQ0E7O0FBRUEsRUFBRSxpREFBUTtBQUNWLEVBQUUsMERBQWE7QUFDZixNQUFNLGlEQUFRO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUM4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQjlEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3NDO0FBQ3VCO0FBQ2hDO0FBQ2xELHdFQUFtQjtBQUNuQiwrRkFBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9kYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0UHJvamVjdE5hbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2VkaXRUYXNrSW5mby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvcmVtb3ZlVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc2V0UHJvamVjdExvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza0RldGFpbFBvcHVwLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrVmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZGF5VGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9nZ2xlVGFza1N0YXR1cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDI0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG46cm9vdCB7XG4gIC0tbWFpbi1jb2xvcjogI2ZmZmZmZjtcbiAgLS1tYWluLXRleHQtY29sb3I6ICNkMDQ4NDg7XG4gIC0tbmF2LWJnLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250OiBpbmhlcml0O1xufVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAvKiBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7ICovXG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDBzdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW1nLFxucGljdHVyZSxcbnN2ZyxcbnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHNoYXBlLW1hcmdpbjogMC43NXJlbTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xufVxuXG5wIHtcbiAgbWF4LXdpZHRoOiA3NWNoO1xuICB0ZXh0LXdyYXA6IHByZXR0eTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDRweDtcbn1cblxuYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcbiAgOmhhcyg6dGFyZ2V0KSB7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gIH1cbn1cblxuLnByb2plY3QtYnRuLXdyYXBwZXIsXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDMycHg7XG59XG4uZGVsLXByb2plY3QtcG9wdXAtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaG93LXRhc2stZm9ybS1idG4sXG4jYWRkLXByb2plY3QtYnRuLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bixcbiNhZGQtdGFzay1idG4sXG4jY2FuY2VsLXRhc2stYnRuLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcbiNlZGl0LXRhc2stc3VibWl0LWJ0bixcbiNlZGl0LXRhc2stY2FuY2VsLWJ0biB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xufVxuXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyLFxuI2NhbmNlbC1wcm9qZWN0LWJ0bjpob3ZlcixcbiNhZGQtdGFzay1idG46aG92ZXIsXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyLFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcbn1cblxuLnByb2plY3QtZm9ybS1idG4ge1xuICB3aWR0aDogMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLnByb2plY3QtZm9ybS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG59XG5cbi8qIGhlYWRlciBzZWN0aW9uICovXG5cbi5oZWFkZXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmhlYWRlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE5MjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cblxuLyogbmF2ICovXG5cbi5uYXZiYXItd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5uYXZiYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ucHJvamVjdC1uYXYtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XG59XG5cbiNzaG93LXByb2plY3QtZm9ybS1idG4sXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xuICB3aWR0aDogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcm9qZWN0LW5hdi1pdGVtLFxuLm5hdmJhci1jb250YWluZXIgPiBkaXYge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvamVjdC1uYXYtaXRlbTpob3Zlcixcbi5uYXZiYXItY29udGFpbmVyID4gZGl2OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xufVxuXG4vKiBjb250ZW50ICovXG4uY29udGVudC1jb250YWluZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmbGV4OiAxO1xufVxuXG4ucHJvamVjdC1oZWFkZXItbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhc2stY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRhc2stY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciA1ZnIgM2ZyIDJmciAxZnIgMWZyIDFmcjtcbiAgZ2FwOiAxNnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFzay1jb250ZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4udGFzay1jb250ZW50ID4gZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGFzay1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlnaC1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNkMDQ4NDg7XG59XG4ubWVkaXVtLXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZTI1Zjtcbn1cbi5sb3ctcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTVmZDkyO1xufVxuXG4udGFzay1zdGF0dXMtdHJ1ZSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBsaW5lLXRocm91Z2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XG59XG5cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLyogcHJvamVjdCBmb3JtICovXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jcHJvamVjdC1mb3JtID4gZGl2LFxuI3Byb2plY3QtZm9ybSA+IGRpdi5wcm9qZWN0LWZvcm0tdGV4dCA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi8qIHRhc2sgZm9ybSAqL1xuI2VkaXQtdGFzay1mb3JtLFxuLyogLmVkaXQtdGFzay1mb3JtLCAqL1xuI3Rhc2stZm9ybSxcbi5kZWwtcHJvamVjdC1wb3B1cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcmVtO1xuICB3aWR0aDogMzAwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuI3Rhc2stZm9ybSA+IGRpdixcbiNlZGl0LXRhc2stZm9ybSA+IGRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50YXNrLWJ0bi1jb250YWluZXIsXG4uZWRpdC10YXNrLWJ0bi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLnRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcbi50YXNrLWlucHV0LWR1ZWRhdGUgPiBsYWJlbCxcbi5lZGl0LXRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxuLmVkaXQtdGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRhc2staW5wdXQtZXJyb3ItdGV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNkMDQ4NDg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5pbnB1dDpmb2N1czp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG5cbmlucHV0OmZvY3VzOmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcbi5lZGl0LXByb2plY3QtcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxubGFiZWxbZm9yPSdlZGl0X3Byb2plY3RfbmFtZSddIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGFzay1wb3B1cC1oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLXBvcHVwLWRldGFpbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vKiBmb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cbi5mb290ZXItZ2l0aHViLWxvZ28ge1xuICB3aWR0aDogMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrRUFBa0U7RUFDbEUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7Ozs7RUFNRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ys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O0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBOzs7Ozs7RUFNRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczogJ0ZJTEwnIDAsICd3Z2h0JyA0MDAsICdHUkFEJyAwLCAnb3BzeicgMjQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1tYWluLWNvbG9yOiAjZmZmZmZmO1xcbiAgLS1tYWluLXRleHQtY29sb3I6ICNkMDQ4NDg7XFxuICAtLW5hdi1iZy1jb2xvcjogI2Y1ZjVmNTtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAvKiBjb2xvci1zY2hlbWU6IGRhcmsgbGlnaHQ7ICovXFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwc3ZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmltZyxcXG5waWN0dXJlLFxcbnN2ZyxcXG52aWRlbyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuaW1nIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHNoYXBlLW1hcmdpbjogMC43NXJlbTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcbn1cXG5cXG5wIHtcXG4gIG1heC13aWR0aDogNzVjaDtcXG4gIHRleHQtd3JhcDogcHJldHR5O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAycHggNHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IG5vLXByZWZlcmVuY2UpIHtcXG4gIDpoYXMoOnRhcmdldCkge1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIH1cXG59XFxuXFxuLnByb2plY3QtYnRuLXdyYXBwZXIsXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDMycHg7XFxufVxcbi5kZWwtcHJvamVjdC1wb3B1cC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnNob3ctdGFzay1mb3JtLWJ0bixcXG4jYWRkLXByb2plY3QtYnRuLFxcbiNjYW5jZWwtcHJvamVjdC1idG4sXFxuI2FkZC10YXNrLWJ0bixcXG4jY2FuY2VsLXRhc2stYnRuLFxcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uLFxcbiNlZGl0LXRhc2stc3VibWl0LWJ0bixcXG4jZWRpdC10YXNrLWNhbmNlbC1idG4ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1idG46aG92ZXIsXFxuI2NhbmNlbC1wcm9qZWN0LWJ0bjpob3ZlcixcXG4jYWRkLXRhc2stYnRuOmhvdmVyLFxcbiNjYW5jZWwtdGFzay1idG46aG92ZXIsXFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyLFxcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbn1cXG5cXG4ucHJvamVjdC1mb3JtLWJ0biB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xcbn1cXG5cXG4vKiBoZWFkZXIgc2VjdGlvbiAqL1xcblxcbi5oZWFkZXItd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG59XFxuXFxuLyogbmF2ICovXFxuXFxuLm5hdmJhci13cmFwcGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4ubmF2YmFyLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxufVxcblxcbi5wcm9qZWN0LW5hdi1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTYsIDE5NiwgMTk2KTtcXG59XFxuXFxuI3Nob3ctcHJvamVjdC1mb3JtLWJ0bixcXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnByb2plY3QtbmF2LWl0ZW0sXFxuLm5hdmJhci1jb250YWluZXIgPiBkaXYge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC1uYXYtaXRlbTpob3ZlcixcXG4ubmF2YmFyLWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbi8qIGNvbnRlbnQgKi9cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDVmciAzZnIgMmZyIDFmciAxZnIgMWZyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi50YXNrLWNvbnRlbnQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4udGFzay1jb250ZW50ID4gZGl2IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi50YXNrLWNoZWNrYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNkMDQ4NDg7XFxufVxcbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgI2ZmZTI1ZjtcXG59XFxuLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjOTVmZDkyO1xcbn1cXG5cXG4udGFzay1zdGF0dXMtdHJ1ZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJnLWNvbG9yKTtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi8qIHByb2plY3QgZm9ybSAqL1xcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSA+IGRpdixcXG4jcHJvamVjdC1mb3JtID4gZGl2LnByb2plY3QtZm9ybS10ZXh0ID4gbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4vKiB0YXNrIGZvcm0gKi9cXG4jZWRpdC10YXNrLWZvcm0sXFxuLyogLmVkaXQtdGFzay1mb3JtLCAqL1xcbiN0YXNrLWZvcm0sXFxuLmRlbC1wcm9qZWN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI3Rhc2stZm9ybSA+IGRpdixcXG4jZWRpdC10YXNrLWZvcm0gPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2stYnRuLWNvbnRhaW5lcixcXG4uZWRpdC10YXNrLWJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGFzay1pbnB1dC1uYW1lID4gbGFiZWwsXFxuLnRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcXG4udGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwsXFxuLmVkaXQtdGFzay1pbnB1dC1uYW1lID4gbGFiZWwsXFxuLmVkaXQtdGFzay1pbnB1dC1kZXNjcmlwdGlvbiA+IGxhYmVsLFxcbi5lZGl0LXRhc2staW5wdXQtZHVlZGF0ZSA+IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2staW5wdXQtZXJyb3ItdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogI2QwNDg0ODtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6dmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXM6aW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG59XFxuXFxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcXG4uZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2IxYjFiMTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtaW5wdXQtd3JhcHBlciB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5sYWJlbFtmb3I9J2VkaXRfcHJvamVjdF9uYW1lJ10ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLnRhc2stcG9wdXAtaGVhZGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbiN0YXNrLXBvcHVwLWNsb3NlLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRhc2stcG9wdXAtZGV0YWlsLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxZnI7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG5cXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuLmZvb3Rlci1naXRodWItbG9nbyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiBnZXRNb250aE5hbWUoZGF0ZSkge1xuICBjb25zdCBtb250aHMgPSBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF07XG4gIHJldHVybiBtb250aHNbZGF0ZS5nZXRNb250aCgpXTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0dGluZ0RhdGUoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH1cbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBnZXRNb250aE5hbWUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF5fSwgJHt5ZWFyfWA7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwKGRhdGUpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICB9XG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gU3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIGNvbnNvbGUubG9nKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbn1cblxuZXhwb3J0IHsgZm9ybWF0dGluZ0RhdGUsIGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgdXBkYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWRpdFByb2plY3RCdG4oKSB7XG4gIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZWRpdFByb2plY3RGb3JtQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIGVkaXRQcm9qZWN0Rm9ybUJ0bi5pZCA9IFwiZWRpdC1wcm9qZWN0LWZvcm0tYnRuXCI7XG4gIGVkaXRQcm9qZWN0Rm9ybUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgZWRpdFByb2plY3RGb3JtQnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFByb2plY3RcIjtcbiAgZWRpdFByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICAgIGFzc2lnbkVkaXRQcm9qZWN0SW5wdXRWYWx1ZSgpO1xuICB9KTtcbiAgcmV0dXJuIGVkaXRQcm9qZWN0Rm9ybUJ0bjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRWRpdFByb2plY3RGb3JtKCkge1xuICBjb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1wb3B1cFwiKTtcbiAgaWYgKFxuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiXG4gICkge1xuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SGVhZGVyTmFtZS5kYXRhc2V0LmluZGV4XG4gICk7XG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkVkaXRQcm9qZWN0SW5wdXRWYWx1ZSgpIHtcbiAgY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF9wcm9qZWN0X25hbWVcIik7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKTtcblxuICBlZGl0UHJvamVjdElucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQ2FuY2VsRWRpdFByb2plY3RGb3JtKCkge1xuICBjb25zdCBjYW5jZWxQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjZWRpdC1wcm9qZWN0LWNhbmNlbC1idG5cIlxuICApO1xuXG4gIGNhbmNlbFByb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJTdWJtaXRFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0LXByb2plY3Qtc3VibWl0LWJ0blwiXG4gICk7XG5cbiAgc3VibWl0UHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVkaXRQcm9qZWN0TmFtZSgpO1xuICAgIHRvZ2dsZUVkaXRQcm9qZWN0Rm9ybSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lKCk7XG4gIGNvbnN0IHByb2plY3RFZGl0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF9wcm9qZWN0X25hbWVcIikudmFsdWU7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZSA9IHByb2plY3RFZGl0TmFtZTtcbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCk7XG4gIHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkZXItbmFtZVwiKTtcbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KSB7XG4gIGNvbnNvbGUubG9nKFxuICAgIFwi8J+agCB+IHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQgfiBwcm9qZWN0SW5kZXg6XCIsXG4gICAgcHJvamVjdEluZGV4XG4gICk7XG4gIGNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCJcbiAgKTtcbiAgcHJvamVjdExpc3RDb250YWluZXIuY2hpbGROb2Rlc1twcm9qZWN0SW5kZXhdLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWU7XG59XG5hZGRFdmVudExpc3RlbmVyQ2FuY2VsRWRpdFByb2plY3RGb3JtKCk7XG5hZGRFdmVudExpc3RlbmVyU3VibWl0RWRpdFByb2plY3RGb3JtKCk7XG5cbmV4cG9ydCB7IGNyZWF0ZUVkaXRQcm9qZWN0QnRuLCBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUgfSBmcm9tIFwiLi9lZGl0UHJvamVjdE5hbWUuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwLCBmb3JtYXR0aW5nRGF0ZSB9IGZyb20gXCIuL2RhdGUuanNcIjtcblxuZnVuY3Rpb24gdG9nZ2xlRWRpdFRhc2tGb3JtKCkge1xuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1mb3JtXCIpO1xuXG4gIGlmIChcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIlxuICApIHtcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSBlbHNlIGlmIChlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWRpdFRhc2tGb3JtKCk7XG4gICAgYXNzaWduRWRpdFRhc2tGb3JtVmFsdWVUb0lucHV0KGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYXNzaWduRWRpdFRhc2tGb3JtVmFsdWVUb0lucHV0KGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHRhc2tJZCA9IHRhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4O1xuICBjb25zdCBwcm9qZWN0SWQgPSB0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleDtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IGVkaXRUYXNrTmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Rhc2tfbmFtZVwiKTtcbiAgY29uc3QgZWRpdFRhc2tEZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF90YXNrX2Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdF90YXNrX2R1ZV9kYXRlXCIpO1xuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXRfdGFza19wcmlvcml0eVwiKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4RnJvbVRhc2tEYXRhc2V0KGUpLnByb2plY3RJbmRleDtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4RnJvbVRhc2tEYXRhc2V0KGUpLnRhc2tJbmRleDtcblxuICB0YXNrTGFiZWxOYW1lLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdElkO1xuICB0YXNrTGFiZWxOYW1lLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBlZGl0VGFza05hbWVJbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5uYW1lO1xuICBlZGl0VGFza0Rlc0lucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICBlZGl0VGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwKFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kdWVkYXRlXG4gICk7XG5cbiAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnZhbHVlID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleEZyb21UYXNrRGF0YXNldChlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrRGF0YXNldEluZGV4ID0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4O1xuICBjb25zdCBwcm9qZWN0RGF0YXNldEluZGV4ID0gK3Rhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3REYXRhc2V0SW5kZXgpO1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kVGFza0luZGV4KHByb2plY3REYXRhc2V0SW5kZXgsIHRhc2tEYXRhc2V0SW5kZXgpO1xuICByZXR1cm4geyBwcm9qZWN0SW5kZXg6IHByb2plY3RJbmRleCwgdGFza0luZGV4OiB0YXNrSW5kZXggfTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RJbmRleChwcm9qZWN0RGF0YXNldEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdERhdGFzZXRJbmRleFxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrSW5kZXgocHJvamVjdERhdGFzZXRJbmRleCwgdGFza0RhdGFzZXRJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3REYXRhc2V0SW5kZXgpO1xuICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0RhdGFzZXRJbmRleFxuICApO1xuXG4gIHJldHVybiB0YXNrSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJFZGl0Q2FuY2VsQnRuKCkge1xuICBjb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stY2FuY2VsLWJ0blwiKTtcbiAgZWRpdENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVFZGl0VGFza0Zvcm0oKTtcbiAgfSk7XG59XG5hZGRFdmVudExpc3RlbmVyRWRpdENhbmNlbEJ0bigpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrSW5mbygpIHtcbiAgY29uc3QgZWRpdFRhc2tOYW1lSW5wdXRWYWx1ZSA9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0X3Rhc2tfbmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgZWRpdFRhc2tEZXNJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0X3Rhc2tfZGVzY3JpcHRpb25cIlxuICApLnZhbHVlO1xuICBjb25zdCBlZGl0VGFza0R1ZURhdGVJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNlZGl0X3Rhc2tfZHVlX2RhdGVcIlxuICApLnZhbHVlO1xuICBjb25zdCBlZGl0VGFza1ByaW9yaXR5SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjZWRpdF90YXNrX3ByaW9yaXR5XCJcbiAgKS52YWx1ZTtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9ICt0YXNrTGFiZWxOYW1lLmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCB0YXNrSWQgPSArdGFza0xhYmVsTmFtZS5kYXRhc2V0LnRhc2tJZDtcbiAgcHJvamVjdHNbcHJvamVjdElkXS51cGRhdGVUYXNrKFxuICAgIHRhc2tJZCxcbiAgICBlZGl0VGFza05hbWVJbnB1dFZhbHVlLFxuICAgIGVkaXRUYXNrRGVzSW5wdXRWYWx1ZSxcbiAgICBuZXcgRGF0ZShlZGl0VGFza0R1ZURhdGVJbnB1dFZhbHVlKSxcbiAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXRWYWx1ZVxuICApO1xuICAvLyBwcm9qZWN0c1twcm9qZWN0SWRdLnVwZGF0ZVRhc2soXG4gIC8vICAgdGFza0lkLFxuICAvLyAgIGVkaXRUYXNrTmFtZUlucHV0VmFsdWUsXG4gIC8vICAgZWRpdFRhc2tEZXNJbnB1dFZhbHVlLFxuICAvLyAgIGVkaXRUYXNrRHVlRGF0ZUlucHV0VmFsdWUsXG4gIC8vICAgZWRpdFRhc2tQcmlvcml0eUlucHV0VmFsdWVcbiAgLy8gKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckVkaXRTdWJtaXRCdG4oKSB7XG4gIGNvbnN0IGVkaXRTdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1zdWJtaXQtYnRuXCIpO1xuICBlZGl0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHVwZGF0ZVRhc2tJbmZvKCk7XG4gICAgdXBkYXRlVGFza0NvbnRlbnRET00oKTtcbiAgICB0b2dnbGVFZGl0VGFza0Zvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb250ZW50RE9NKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9IHRhc2tMYWJlbE5hbWUuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IHRhc2tJZCA9IHRhc2tMYWJlbE5hbWUuZGF0YXNldC50YXNrSWQ7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXgoK3Byb2plY3RJZCk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IGZpbmRUYXNrSW5kZXgoK3Byb2plY3RJZCwgK3Rhc2tJZCk7XG4gIGNvbnN0IHRhc2tDb250YWluZXJDaGlsZEluZGV4ID0gQXJyYXkuZnJvbShcbiAgICB0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXNcbiAgKS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LmRhdGFzZXQucHJvamVjdEluZGV4ID09PSBwcm9qZWN0SWQgJiZcbiAgICAgIGVsZW1lbnQuZGF0YXNldC50YXNrSW5kZXggPT09IHRhc2tJZFxuICApO1xuICBjb25zdCB0YXJnZXRUYXNrID0gdGFza0NvbnRhaW5lci5jaGlsZE5vZGVzW3Rhc2tDb250YWluZXJDaGlsZEluZGV4XTtcblxuICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1zdGF0dXNcIikuY2hlY2tlZCA9XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnN0YXR1cztcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbmFtZVwiKS50ZXh0Q29udGVudCA9XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLm5hbWU7XG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLWRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLWR1ZWRhdGVcIikudGV4dENvbnRlbnQgPSBmb3JtYXR0aW5nRGF0ZShcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZVxuICApO1xuICAvLyB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVkYXRlXCIpLnRleHRDb250ZW50ID1cbiAgLy8gICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZTtcblxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZChcImxvdy1wcmlvcml0eVwiKTtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZChcIm1lZGl1bS1wcmlvcml0eVwiKTtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSBcIjNcIikge1xuICAgIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgdGFyZ2V0VGFzay5jbGFzc05hbWUgPSBcIlwiO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZChcInRhc2stY29udGVudFwiKTtcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoXCJoaWdoLXByaW9yaXR5XCIpO1xuICB9XG59XG5hZGRFdmVudExpc3RlbmVyRWRpdFN1Ym1pdEJ0bigpO1xuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZUVkaXRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzayB9IGZyb20gXCIuL3RvZGF5VGFzay5qc1wiO1xuXG5pbXBvcnQgeyBUYXNrLCB0b2dnbGVUYXNrRm9ybSwgcmVuZGVyVGFzayB9IGZyb20gXCIuL3Rhc2suanNcIjtcblxuaW1wb3J0IHsgY3JlYXRlRGVsZXRlUHJvamVjdEJ0biB9IGZyb20gXCIuL3JlbW92ZVByb2plY3QuanNcIjtcblxuaW1wb3J0IHsgc2V0UHJvamVjdExvY2FsU3RvcmFnZSB9IGZyb20gXCIuL3NldFByb2plY3RMb2NhbFN0b3JhZ2UuanNcIjtcblxuaW1wb3J0IHsgY3JlYXRlRWRpdFByb2plY3RCdG4gfSBmcm9tIFwiLi9lZGl0UHJvamVjdE5hbWUuanNcIjtcblxubGV0IHByb2plY3RzID0gW107XG5jbGFzcyBQcm9qZWN0IHtcbiAgc3RhdGljICNpZCA9IDA7XG4gIHRhc2tJZCA9IDA7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB0aGlzLmlkID0gUHJvamVjdC5uZXh0SWQoKTtcbiAgfVxuXG4gIHN0YXRpYyBuZXh0SWQoKSB7XG4gICAgcmV0dXJuIFByb2plY3QuI2lkKys7XG4gIH1cblxuICBzdGF0aWMgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIFByb2plY3QuI2lkO1xuICB9XG5cbiAgc3RhdGljIGdldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKSB7XG4gICAgUHJvamVjdC4jaWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNJZFwiKSk7XG4gIH1cbiAgc3RhdGljIHNldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c0lkXCIsIEpTT04uc3RyaW5naWZ5KFByb2plY3QuZ2V0SWQoKSkpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyUHJvamVjdHNJZCgpIHtcbiAgICBQcm9qZWN0LiNpZCA9IDA7XG4gIH1cblxuICBnZXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pZDtcbiAgfVxuXG4gIG5leHRUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0lkKys7XG4gIH1cblxuICBnZXRUYXNrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFza0lkO1xuICB9XG5cbiAgc2V0TG9jYWxTdG9yYWdlUHJvamVjdElkKCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdElkXCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuZ2V0SWQoKSkpO1xuICB9XG5cbiAgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdElkKCkge1xuICAgIHRoaXMudGFza0lkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RJZFwiKSk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2goXG4gICAgICBuZXcgVGFzayhcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5uZXh0VGFza0lkKCksXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tEdWVkYXRlLFxuICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgIGZhbHNlXG4gICAgICApXG4gICAgKTtcbiAgICB1cGRhdGVQcm9qZWN0KCk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICB9XG5cbiAgdXBkYXRlVGFzayh0YXNrSWQsIHRhc2tOYW1lLCB0YXNrRGVzLCB0YXNrRHVlZGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLm5hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSB0YXNrRGVzO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5kdWVkYXRlID0gdGFza0R1ZWRhdGU7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgfVxufVxuXG5zZXRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuLy8gYWRkIHByb2plY3RcblxuY29uc3Qgc2hvd1Byb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXByb2plY3QtZm9ybS1idG5cIik7XG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNhbmNlbEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGlucHV0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RfbmFtZVwiKTtcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKTtcblxuc2hvd1Byb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY2FuY2VsRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGlucHV0UHJvamVjdE5hbWUudmFsdWUgPT09IFwiXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgUHJvamVjdC5nZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIGNyZWF0ZVByb2plY3QoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIFByb2plY3Quc2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICBpbnB1dFByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGFkZE5ld1Byb2plY3ROYXZiYXIoKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3ROYXZiYXIoKSB7XG4gIGNvbnN0IHByb2plY3ROYXZMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcHJvamVjdC50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdLm5hbWV9YDtcbiAgcHJvamVjdC5kYXRhc2V0LmluZGV4ID0gYCR7UHJvamVjdC5nZXRJZCgpIC0gMX1gO1xuICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hdi1pdGVtXCIpO1xuXG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdENvbnRlbnQoZSk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2soZSk7XG4gIH0pO1xuXG4gIHByb2plY3ROYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TmF2YmFyKCkge1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiKSk7XG4gIGNvbnN0IHByb2plY3ROYXZMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5wcm9qZWN0LWxpc3QtY29udGFpbmVyXCJcbiAgKTtcblxuICBwcm9qZWN0RGF0YS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWA7XG4gICAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gYCR7cHJvamVjdC5pZH1gO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbmF2LWl0ZW1cIik7XG5cbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgcmVuZGVyUHJvamVjdENvbnRlbnQoZSk7XG4gICAgICByZW5kZXJQcm9qZWN0VGFzayhlKTtcbiAgICB9KTtcblxuICAgIHByb2plY3ROYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REaXYpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdENvbnRlbnQoZSkge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0QnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICBwcm9qZWN0QnRuV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idG4td3JhcHBlclwiKTtcblxuICBwcm9qZWN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVTaG93VGFza0Zvcm1CdG4oKSk7XG4gIHByb2plY3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRQcm9qZWN0QnRuKCkpO1xuICBwcm9qZWN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVQcm9qZWN0QnRuKCkpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250ZW50LWNvbnRhaW5lclwiKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEhlYWRlckNvbnRlbnQoZSkpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0QnRuV3JhcHBlcik7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tDb250YWluZXIoKSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRlbnRDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0SGVhZGVyQ29udGVudChlKSB7XG4gIGNvbnN0IHByb2plY3RIZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICApO1xuXG4gIHByb2plY3RIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lfWA7XG4gIHByb2plY3RIZWFkZXJOYW1lLmRhdGFzZXQuaW5kZXggPSBgJHtlLnRhcmdldC5kYXRhc2V0LmluZGV4fWA7XG4gIHByb2plY3RIZWFkZXJOYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWhlYWRlci1uYW1lXCIpO1xuICByZXR1cm4gcHJvamVjdEhlYWRlck5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICByZXR1cm4gdGFza0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2hvd1Rhc2tGb3JtQnRuKCkge1xuICBjb25zdCBzaG93VGFza0Zvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzaG93VGFza0Zvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgc2hvd1Rhc2tGb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm0tYnRuXCIpO1xuICBzaG93VGFza0Zvcm1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gIHNob3dUYXNrRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICB9KTtcbiAgcmV0dXJuIHNob3dUYXNrRm9ybUJ0bjtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50Q29udGFpbmVyKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50LWNvbnRhaW5lclwiKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2soZSkge1xuICBsZXQgcHJvamVjdEluZGV4O1xuICBpZiAodHlwZW9mIGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGUpO1xuICB9IGVsc2Uge1xuICAgIHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArZS50YXJnZXQuZGF0YXNldC5pbmRleFxuICAgICk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XTtcblxuICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICByZW5kZXJUYXNrKHRhc2spO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyRGVmYXVsdEFsbFRhc2tDb250ZW50KCkge1xuICAvLyBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gIC8vICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gIC8vICAgICByZW5kZXJUYXNrKHRhc2spO1xuICAvLyAgIH0pO1xuICAvLyB9KTtcbiAgY29uc3QgdGFza3MgPSBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydGVkVGFza3MgPSB0YXNrcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgaWYgKCEoYS5kdWVkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIGEuZHVlZGF0ZSA9IG5ldyBEYXRlKGEuZHVlZGF0ZSk7XG4gICAgfVxuICAgIGlmICghKGIuZHVlZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICBiLmR1ZWRhdGUgPSBuZXcgRGF0ZShiLmR1ZWRhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gYS5kdWVkYXRlIC0gYi5kdWVkYXRlO1xuICB9KTtcbiAgY29uc29sZS5sb2coc29ydGVkVGFza3MpO1xuICBzb3J0ZWRUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgfSk7XG59XG5cbnJlbmRlckRlZmF1bHRBbGxUYXNrQ29udGVudCgpO1xuXG5mdW5jdGlvbiBjbGVhclRhc2tDb250YWluZXIoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyTmFtZShuYW1lKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICBwcm9qZWN0SGVhZGVyTmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1oZWFkZXItbmFtZVwiKTtcbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXJOYW1lKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbn1cblxuY29uc3QgYWxsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWxsLXRhc2tcIik7XG5cbmZ1bmN0aW9uIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUobmFtZSkge1xuICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgY3JlYXRlSGVhZGVyTmFtZShuYW1lKTtcbiAgcmVuZGVyRGVmYXVsdEFsbFRhc2tDb250ZW50KCk7XG59XG5hbGxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lKFwiQWxsIFRhc2tcIik7XG59KTtcblxuZXhwb3J0IHtcbiAgUHJvamVjdCxcbiAgY3JlYXRlUHJvamVjdCxcbiAgdXBkYXRlUHJvamVjdCxcbiAgcHJvamVjdHMsXG4gIHJlbmRlclByb2plY3ROYXZiYXIsXG4gIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUsXG4gIHJlbmRlclByb2plY3RUYXNrLFxuICBjbGVhckNvbnRlbnRDb250YWluZXIsXG4gIGNyZWF0ZUhlYWRlck5hbWUsXG59O1xuIiwiaW1wb3J0IHtcbiAgcHJvamVjdHMsXG4gIHVwZGF0ZVByb2plY3QsXG4gIHJlUmVuZGVyUHJvamVjdEhlYWRlck5hbWUsXG59IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlUHJvamVjdEJ0bigpIHtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi5pZCA9IFwiZGVsZXRlLXByb2plY3QtZm9ybS1idG5cIjtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybS1idG5cIik7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGUgUHJvamVjdFwiO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRGVsUHJvamVjdFBvcHVwKTtcbiAgLy8gYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVByb2plY3QoZGVsZXRlUHJvamVjdEZvcm1CdG4pO1xuICByZXR1cm4gZGVsZXRlUHJvamVjdEZvcm1CdG47XG59XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZCkge1xuICBsZXQgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuXG4gIHByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbGV0ZS1wcm9qZWN0LWZvcm0tYnRuXCIpO1xuICBjb25zdCBwcm9qZWN0QnRuV3JhcHBlciA9IGRlbGV0ZVByb2plY3RCdG4ucGFyZW50Tm9kZTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBwcm9qZWN0QnRuV3JhcHBlci5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0SWQgPSArcHJvamVjdENvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZC5kYXRhc2V0LmluZGV4O1xuXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVByb2plY3QoYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoaXNEZWxQcm9qZWN0KSB7XG4gICAgICByZW1vdmVQcm9qZWN0KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGVsUHJvamVjdFBvcHVwKCkge1xuICBjb25zdCBkZWxQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWwtcHJvamVjdC1wb3B1cFwiKTtcblxuICBpZiAoXG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuICAgIGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJcIlxuICApIHtcbiAgICBkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0gZWxzZSBpZiAoZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyRGVsUHJvamVjdFllc0J0bigpIHtcbiAgY29uc3QgZGVsUHJvamVjdFllc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVsLXByb2plY3QteWVzLWJ0blwiKTtcbiAgZGVsUHJvamVjdFllc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlRGVsUHJvamVjdFBvcHVwKCk7XG5cbiAgICByZW1vdmVQcm9qZWN0KCk7XG4gICAgcmVtb3ZlUHJvamVjdEZyb21ET00oKTtcbiAgICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lKFwiQWxsIFRhc2tcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyRGVsUHJvamVjdE5vQnRuKCkge1xuICBjb25zdCBkZWxQcm9qZWN0Tm9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbC1wcm9qZWN0LW5vLWJ0blwiKTtcbiAgZGVsUHJvamVjdE5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVEZWxQcm9qZWN0UG9wdXAoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVByb2plY3RGcm9tRE9NKCkge1xuICBjb25zdCBwcm9qZWN0TGlzdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1saXN0LWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcHJvamVjdERhdGFzZXRJbmRleCA9ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaGVhZGVyLW5hbWVcIilcbiAgICAuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gQXJyYXkuZnJvbShwcm9qZWN0TGlzdE5hdi5jaGlsZE5vZGVzKS5maW5kSW5kZXgoXG4gICAgKGVsZW1lbnQpID0+ICtlbGVtZW50LmRhdGFzZXQuaW5kZXggPT09IHByb2plY3REYXRhc2V0SW5kZXhcbiAgKTtcbiAgcHJvamVjdExpc3ROYXYucmVtb3ZlQ2hpbGQocHJvamVjdExpc3ROYXYuY2hpbGROb2Rlc1twcm9qZWN0SW5kZXhdKTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJEZWxQcm9qZWN0WWVzQnRuKCk7XG5hZGRFdmVudExpc3RlbmVyRGVsUHJvamVjdE5vQnRuKCk7XG5cbmV4cG9ydCB7XG4gIHJlbW92ZVByb2plY3QsXG4gIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVQcm9qZWN0LFxuICB0b2dnbGVEZWxQcm9qZWN0UG9wdXAsXG4gIGNyZWF0ZURlbGV0ZVByb2plY3RCdG4sXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMsIHJlbmRlclByb2plY3RUYXNrIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSArdGFza0NvbnRlbnQuZGF0YXNldC50YXNrSW5kZXhcbiAgKTtcbiAgY29uc3QgdGFza0lkID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmlkO1xuICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLmRlbGV0ZVRhc2sodGFza0lkKTtcbiAgcmVtb3ZlVGFza0Zyb21ET00odGFza0lkKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFza0Zyb21ET00odGFza0lkKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuICBjb25zdCB0YXNrSWRJbmRleCA9IEFycmF5LmZyb20odGFza0NvbnRhaW5lci5jaGlsZE5vZGVzKS5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+ICt0YXNrLmRhdGFzZXQudGFza0luZGV4ID09PSB0YXNrSWRcbiAgKTtcbiAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXNbdGFza0lkSW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVRhc2soYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW1vdmVUYXNrKGUpO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVRhc2sgfTtcbiIsImltcG9ydCB7IFByb2plY3QsIHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VQcm9qZWN0c0VtcHR5KCkge1xuICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIpID09PSBudWxsKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2V0UHJvamVjdExvY2FsU3RvcmFnZSgpIHtcbiAgaWYgKGlzTG9jYWxTdG9yYWdlUHJvamVjdHNFbXB0eSgpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgIFByb2plY3QuY2xlYXJQcm9qZWN0c0lkKCk7XG4gICAgUHJvamVjdC5zZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIH0gZWxzZSB7XG4gICAgbG9hZFByb2plY3RzRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIFByb2plY3QuZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHN0b3JlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIikpO1xuXG4gIHN0b3JlUHJvamVjdHMuZm9yRWFjaCgoc3RvcmVQcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChzdG9yZVByb2plY3QubmFtZSk7XG4gICAgcHJvamVjdC5pZCA9IHN0b3JlUHJvamVjdC5pZDtcbiAgICBwcm9qZWN0LnRhc2tzID0gc3RvcmVQcm9qZWN0LnRhc2tzO1xuICAgIHByb2plY3QudGFza0lkID0gc3RvcmVQcm9qZWN0LnRhc2tJZDtcblxuICAgIHByb2plY3RzW2luZGV4XSA9IHByb2plY3Q7XG4gIH0pO1xufVxuXG5leHBvcnQgeyBzZXRQcm9qZWN0TG9jYWxTdG9yYWdlIH07XG4iLCIvLyB0aGlzIGlzIHRhc2suanNcblxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclJlbmRlclRhc2tEZXRhaWxQb3B1cCB9IGZyb20gJy4vdGFza0RldGFpbFBvcHVwLmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzIH0gZnJvbSAnLi90b2dnbGVUYXNrU3RhdHVzLmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrIH0gZnJvbSAnLi9yZW1vdmVUYXNrLmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0gfSBmcm9tICcuL2VkaXRUYXNrSW5mby5qcyc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nRGF0ZSB9IGZyb20gJy4vZGF0ZS5qcyc7XG5cbmltcG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcixcbiAgdGFza0lucHV0TmFtZSxcbiAgdGFza0lucHV0TmFtZUVycm9yVGV4dCxcbiAgdGFza0lucHV0RGVzLFxuICB0YXNrSW5wdXREZXNFcnJvclRleHQsXG4gIHRhc2tJbnB1dERhdGUsXG4gIHRhc2tJbnB1dERhdGVFcnJvclRleHQsXG4gIHRhc2tGb3JtLFxufSBmcm9tICcuL3Rhc2tWYWxpZGF0ZS5qcyc7XG5cbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgdGFza0lucHV0TmFtZSxcbiAgdGFza0lucHV0TmFtZUVycm9yVGV4dCxcbiAgYFlvdSBjYW4ndCBza2lwIHRoaXMgcGFydGBcbik7XG5cbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgdGFza0lucHV0RGVzLFxuICB0YXNrSW5wdXREZXNFcnJvclRleHQsXG4gIGBZb3UgY2FuJ3Qgc2tpcCB0aGlzIHBhcnRgXG4pO1xuYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yKFxuICB0YXNrSW5wdXREYXRlLFxuICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LFxuICBgWW91IGNhbid0IHNraXAgdGhpcyBwYXJ0YFxuKTtcblxuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHByb2plY3RJZCwgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSwgc3RhdHVzKSB7XG4gICAgdGhpcy5wcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tGb3JtKCkge1xuICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbiAgaWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICcnIHx8IHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2UgaWYgKHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0Zvcm1WYWx1ZShlKSB7XG4gIGNvbnN0IHRhc2tJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19uYW1lJyk7XG4gIGNvbnN0IHRhc2tJbnB1dERlc2NpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19kZXNjcmlwdGlvbicpO1xuICBjb25zdCB0YXNrSW5wdXREdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZHVlX2RhdGUnKTtcbiAgY29uc3QgdGFza0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19wcmlvcml0eScpO1xuXG4gIHRhc2tJbnB1dE5hbWUudmFsdWUgPSAnJztcbiAgdGFza0lucHV0RGVzY2lwdGlvbi52YWx1ZSA9ICcnO1xuICB0YXNrSW5wdXREdWVkYXRlLnZhbHVlID0gJyc7XG4gIHRhc2tJbnB1dFByaW9yaXR5LnZhbHVlID0gJzEnO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQWRkVGFza0J0bihidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXRhc2tGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaWYgKCF0YXNrSW5wdXREYXRlLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHRhc2tJbnB1dERhdGUuZm9jdXMoKTtcbiAgICAgICAgdGFza0lucHV0RGF0ZUVycm9yVGV4dC50ZXh0Q29udGVudCA9ICdQbGVhc2UgRmlsbCBvdXQgdGhpcyBmaWVsZCc7XG4gICAgICAgIHRhc2tJbnB1dERhdGVFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIGlmICghdGFza0lucHV0RGVzLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIHRhc2tJbnB1dERlcy5mb2N1cygpO1xuICAgICAgICB0YXNrSW5wdXREZXNFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICB0YXNrSW5wdXREZXNFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIGlmICghdGFza0lucHV0TmFtZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0YXNrSW5wdXROYW1lLmZvY3VzKCk7XG4gICAgICAgIHRhc2tJbnB1dE5hbWVFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICB0YXNrSW5wdXROYW1lRXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdydW4nKTtcbiAgICBjcmVhdGVUYXNrKCk7XG4gICAgdG9nZ2xlVGFza0Zvcm0oKTtcbiAgICBjbGVhclRhc2tGb3JtVmFsdWUoKTtcbiAgICByZW5kZXJOZXdUYXNrKCk7XG4gIH0pO1xufVxuXG5hZGRFdmVudExpc3RlbmVyQWRkVGFza0J0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2stYnRuJykpO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyQ2FuY2VsVGFza0Zvcm0oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdG9nZ2xlVGFza0Zvcm0oKTtcbiAgICBjbGVhclRhc2tGb3JtVmFsdWUoKTtcbiAgfSk7XG59XG5hZGRFdmVudExpc3RlbmVyQ2FuY2VsVGFza0Zvcm0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC10YXNrLWJ0bicpKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayhlKSB7XG4gIGNvbnN0IHRhc2tJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19uYW1lJyk7XG4gIGNvbnN0IHRhc2tJbnB1dERlc2NpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19kZXNjcmlwdGlvbicpO1xuICBjb25zdCB0YXNrSW5wdXREdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZHVlX2RhdGUnKTtcbiAgY29uc3QgdGFza0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19wcmlvcml0eScpO1xuXG4gIGNvbnN0IHByb2plY3RUYXJnZXRJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT5cbiAgICAgIHByb2plY3QuaWQgPT09XG4gICAgICArZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaGVhZGVyLW5hbWUnKS5kYXRhc2V0LmluZGV4XG4gICk7XG5cbiAgY29uc3QgdGFza0lucHV0RGF0ZVZhbHVlID0gbmV3IERhdGUodGFza0lucHV0RHVlZGF0ZS52YWx1ZSk7XG5cbiAgaWYgKFxuICAgIHRhc2tJbnB1dE5hbWUudmFsdWUgPT09ICcnIHx8XG4gICAgdGFza0lucHV0RGVzY2lwdGlvbi52YWx1ZSA9PT0gJycgfHxcbiAgICB0YXNrSW5wdXREdWVkYXRlLnZhbHVlID09PSAnJyB8fFxuICAgIHRhc2tJbnB1dFByaW9yaXR5LnZhbHVlID09PSAnJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcHJvamVjdHNbcHJvamVjdFRhcmdldEluZGV4XS5hZGRUYXNrKFxuICAgIHRhc2tJbnB1dE5hbWUudmFsdWUsXG4gICAgdGFza0lucHV0RGVzY2lwdGlvbi52YWx1ZSxcbiAgICB0YXNrSW5wdXREYXRlVmFsdWUsXG4gICAgdGFza0lucHV0UHJpb3JpdHkudmFsdWUsXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayh0YXNrKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jb250YWluZXInKTtcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCB0YXNrQ2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1N0YXR1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tEZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0R1ZWRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRhc2tTaG93RGV0YWlsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRhc2tTaG93RGV0YWlsQnRuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3QgdGFza0VkaXREZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGFza0VkaXREZXRhaWxCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB0YXNrRGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdjbGljaycpO1xuICB0YXNrRWRpdERldGFpbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2xpY2snKTtcbiAgdGFza0RlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2xpY2snKTtcblxuICB0YXNrU2hvd0RldGFpbEJ0blNwYW4udGV4dENvbnRlbnQgPSAnaW5mbyc7XG4gIHRhc2tFZGl0RGV0YWlsQnRuU3Bhbi50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgdGFza0RlbGV0ZUJ0blNwYW4udGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gIHRhc2tFZGl0RGV0YWlsQnRuU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gIHRhc2tEZWxldGVCdG5TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcblxuICB0YXNrU2hvd0RldGFpbEJ0bi5hcHBlbmRDaGlsZCh0YXNrU2hvd0RldGFpbEJ0blNwYW4pO1xuICB0YXNrRWRpdERldGFpbEJ0bi5hcHBlbmRDaGlsZCh0YXNrRWRpdERldGFpbEJ0blNwYW4pO1xuICB0YXNrRGVsZXRlQnRuLmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG5TcGFuKTtcblxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICB0YXNrTGlzdC5kYXRhc2V0LnByb2plY3RJbmRleCA9IHRhc2sucHJvamVjdElkO1xuICB0YXNrTGlzdC5kYXRhc2V0LnRhc2tJbmRleCA9IHRhc2suaWQ7XG4gIHRhc2tDaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNoZWNrYm94Jyk7XG4gIHRhc2tTdGF0dXMuaWQgPSAndGFzay1zdGF0dXMnO1xuICB0YXNrU3RhdHVzLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuXG4gIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICB0YXNrRGVzLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKTtcbiAgdGFza0R1ZWRhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kdWVkYXRlJyk7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5Jyk7XG4gIGlmICh0YXNrLnN0YXR1cyA9PT0gdHJ1ZSkge1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzLXRydWUnKTtcbiAgfVxuICB0YXNrU3RhdHVzLmNoZWNrZWQgPSB0YXNrLnN0YXR1cztcbiAgdGFza05hbWUudGV4dENvbnRlbnQgPSB0YXNrLm5hbWU7XG4gIHRhc2tEZXMudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRHVlZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRpbmdEYXRlKHRhc2suZHVlZGF0ZSk7XG4gIC8vIHRhc2tEdWVkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVkYXRlO1xuXG4gIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMScpIHtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgfVxuICBpZiAodGFzay5wcmlvcml0eSA9PT0gJzInKSB7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgnbWVkaXVtLXByaW9yaXR5Jyk7XG4gIH1cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdoaWdoLXByaW9yaXR5Jyk7XG4gIH1cblxuICB0YXNrQ2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1N0YXR1cyk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tDaGVja0JveENvbnRhaW5lcik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0Rlcyk7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tEdWVkYXRlKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza1Nob3dEZXRhaWxCdG4pO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRWRpdERldGFpbEJ0bik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tEZWxldGVCdG4pO1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzKHRhc2tTdGF0dXMpO1xuICBhZGRFdmVudExpc3RlbmVyUmVuZGVyVGFza0RldGFpbFBvcHVwKHRhc2tTaG93RGV0YWlsQnRuKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbW92ZVRhc2sodGFza0RlbGV0ZUJ0bik7XG4gIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVFZGl0VGFza0Zvcm0odGFza0VkaXREZXRhaWxCdG4pO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMaXN0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTmV3VGFzaygpIHtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PlxuICAgICAgcHJvamVjdC5pZCA9PT1cbiAgICAgICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXItbmFtZScpLmRhdGFzZXQuaW5kZXhcbiAgKTtcbiAgcmVuZGVyVGFzayhcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Byb2plY3RzW3Byb2plY3RJbmRleF0udGFza3MubGVuZ3RoIC0gMV1cbiAgKTtcbn1cblxuZXhwb3J0IHsgVGFzaywgdG9nZ2xlVGFza0Zvcm0sIGNsZWFyVGFza0Zvcm1WYWx1ZSwgcmVuZGVyVGFzayB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBmb3JtYXR0aW5nRGF0ZSB9IGZyb20gXCIuL2RhdGUuanNcIjtcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4oKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lclwiXG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1wb3B1cC1jbG9zZS1idG5cIik7XG4gIHRhc2tEZXRhaWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0YXNrRGV0YWlsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2tEZXRhaWxQb3B1cChlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4XG4gICk7XG5cbiAgY29uc3QgdGFza0lkID0gcHJvamVjdHNbcHJvamVjdElkXS50YXNrcy5maW5kSW5kZXgoXG4gICAgKHRhc2spID0+IHRhc2suaWQgPT09ICt0YXNrQ29udGVudC5kYXRhc2V0LnRhc2tJbmRleFxuICApO1xuICBjb25zdCB0YXNrRGV0YWlsUG9wdXBIZWFkZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWRldGFpbC1oZWFkZXItdGV4dFwiXG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLXByb2plY3QtbmFtZS12YWx1ZVwiXG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLXByaW9yaXR5LXZhbHVlXCJcbiAgKTtcblxuICBjb25zdCB0YXNrRGV0YWlsUG9wdXBEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWR1ZWRhdGUtdmFsdWVcIlxuICApO1xuICBjb25zdCB0YXNrRGV0YWlsUG9wdXBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kZXNjcmlwdGlvbi12YWx1ZVwiXG4gICk7XG4gIHRhc2tEZXRhaWxQb3B1cEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0ubmFtZX1gO1xuICB0YXNrRGV0YWlsUG9wdXBQcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0ubmFtZX1gO1xuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID09PSBcIjNcIikge1xuICAgIHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIH1cbiAgaWYgKHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5wcmlvcml0eSA9PT0gXCIyXCIpIHtcbiAgICB0YXNrRGV0YWlsUG9wdXBQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gIH1cbiAgaWYgKHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5wcmlvcml0eSA9PT0gXCIxXCIpIHtcbiAgICB0YXNrRGV0YWlsUG9wdXBQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gIH1cblxuICB0YXNrRGV0YWlsUG9wdXBEdWVEYXRlLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGluZ0RhdGUoXG4gICAgcHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmR1ZWRhdGVcbiAgKX1gO1xuXG4gIC8vIHRhc2tEZXRhaWxQb3B1cER1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uZHVlZGF0ZX1gO1xuICB0YXNrRGV0YWlsUG9wdXBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5kZXNjcmlwdGlvbn1gO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyUmVuZGVyVGFza0RldGFpbFBvcHVwKGJ1dHRvbikge1xuICBjb25zdCB0YXNrRGV0YWlsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWRldGFpbC1jb250YWluZXJcIlxuICApO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVuZGVyVGFza0RldGFpbFBvcHVwKGUpO1xuICAgIHRhc2tEZXRhaWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG59XG5leHBvcnQge1xuICBhZGRFdmVudExpc3RlbmVyQ2xvc2VUYXNrRGV0YWlsQnRuLFxuICByZW5kZXJUYXNrRGV0YWlsUG9wdXAsXG4gIGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAsXG59O1xuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWZvcm0nKTtcbmNvbnN0IHRhc2tJbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19uYW1lJyk7XG5jb25zdCB0YXNrSW5wdXROYW1lRXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyN0YXNrX25hbWUrLnRhc2staW5wdXQtZXJyb3ItdGV4dCdcbik7XG5jb25zdCB0YXNrSW5wdXREZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19kZXNjcmlwdGlvbicpO1xuY29uc3QgdGFza0lucHV0RGVzRXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyN0YXNrX2Rlc2NyaXB0aW9uKy50YXNrLWlucHV0LWVycm9yLXRleHQnXG4pO1xuY29uc3QgdGFza0lucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2R1ZV9kYXRlJyk7XG5jb25zdCB0YXNrSW5wdXREYXRlRXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyN0YXNrX2R1ZV9kYXRlKy50YXNrLWlucHV0LWVycm9yLXRleHQnXG4pO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIGlucHV0RWxlbWVudCxcbiAgZXJyb3JTaG93RWxlbWVudCxcbiAgZXJyb3JUZXh0XG4pIHtcbiAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVycm9yU2hvd0VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIGVycm9yU2hvd0VsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvclRleHQ7XG4gICAgfVxuICAgIGlmIChpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIGVycm9yU2hvd0VsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cbiAgfSk7XG59XG5cbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgdGFza0lucHV0TmFtZSxcbiAgdGFza0lucHV0TmFtZUVycm9yVGV4dCxcbiAgYFlvdSBjYW4ndCBza2lwIHRoaXMgcGFydGBcbik7XG5cbmV4cG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcixcbiAgdGFza0lucHV0TmFtZSxcbiAgdGFza0lucHV0TmFtZUVycm9yVGV4dCxcbiAgdGFza0lucHV0RGVzLFxuICB0YXNrSW5wdXREZXNFcnJvclRleHQsXG4gIHRhc2tJbnB1dERhdGUsXG4gIHRhc2tJbnB1dERhdGVFcnJvclRleHQsXG4gIHRhc2tGb3JtLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHtcbiAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZSxcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyLFxuICBjcmVhdGVIZWFkZXJOYW1lLFxufSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4vdGFzay5qc1wiO1xuXG5mdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICB9XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXREYXRlKCk7XG4gIGlmICh0b2RheSA9PT0gZGF0ZS5nZXREYXRlKCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvZGF5VGFzaygpIHtcbiAgY29uc3QgdG9kYXkgPSBbXTtcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKGlzVG9kYXkodGFzay5kdWVkYXRlKSkge1xuICAgICAgICB0b2RheS5wdXNoKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgY29uc3Qgc29ydGVkVG9kYXlQcmlvcml0eVRhc2sgPSBzb3J0VGFza1ByaW9yaXR5SGlnaFRvTG93KHRvZGF5KTtcbiAgc29ydGVkVG9kYXlQcmlvcml0eVRhc2suZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzb3J0VGFza1ByaW9yaXR5SGlnaFRvTG93KGFycikge1xuICBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBOdW1iZXIoYS5wcmlvcml0eSkgLSBOdW1iZXIoYi5wcmlvcml0eSk7XG4gIH0pO1xuICBhcnIucmV2ZXJzZSgpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9kYXlUYXNrKCkge1xuICBjb25zdCB0b2RheVRhc2tOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXRhc2tcIik7XG4gIHRvZGF5VGFza05hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhleVwiKTtcbiAgICBjbGVhckNvbnRlbnRDb250YWluZXIoKTtcbiAgICBjcmVhdGVIZWFkZXJOYW1lKFwiVG9kYXkgVGFza1wiKTtcbiAgICByZW5kZXJUb2RheVRhc2soKTtcbiAgfSk7XG59XG5cbmFkZEV2ZW50TGlzdGVuZXJUb2RheVRhc2soKTtcblxuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzayB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMsIHVwZGF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2tTdGF0dXMoZSkge1xuICBjb25zdCB0YXNrQ29udGVudENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcblxuICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICt0YXNrQ29udGVudENvbnRhaW5lci5kYXRhc2V0LnByb2plY3RJbmRleFxuICApO1xuICBjb25zdCB0YXNrSWQgPSBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gK3Rhc2tDb250ZW50Q29udGFpbmVyLmRhdGFzZXQudGFza0luZGV4XG4gICk7XG5cbiAgcHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnN0YXR1cyA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gIHVwZGF0ZVByb2plY3QoKTtcbiAgaWYgKHByb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgdGFza0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInRhc2stc3RhdHVzLXRydWVcIik7XG4gIH0gZWxzZSB7XG4gICAgdGFza0NvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stc3RhdHVzLXRydWVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZVRhc2tTdGF0dXMoYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB0b2dnbGVUYXNrU3RhdHVzKGUpO1xuICB9KTtcbn1cbmV4cG9ydCB7IHRvZ2dsZVRhc2tTdGF0dXMsIGFkZEV2ZW50TGlzdGVuZXJUb2dnbGVUYXNrU3RhdHVzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0TmF2YmFyIH0gZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyQ2xvc2VUYXNrRGV0YWlsQnRuIH0gZnJvbSBcIi4vbW9kdWxlcy90YXNrRGV0YWlsUG9wdXAuanNcIjtcbmltcG9ydCBHaXRIdWJMb2dvIGZyb20gXCIuL2ltYWdlcy9naXRodWItbWFyay5zdmdcIjtcbnJlbmRlclByb2plY3ROYXZiYXIoKTtcbmFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4oKTtcbmZ1bmN0aW9uIGFkZEZvb3RlckxvZ28oKSB7XG4gIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3Rlci1saW5rXCIpO1xuICBjb25zdCBsb2dvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY29uc3QgZ2l0SHViTG9nbyA9IG5ldyBJbWFnZSgpO1xuICBnaXRIdWJMb2dvLnNyYyA9IEdpdEh1YkxvZ287XG4gIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZvb3Rlci1naXRodWItbG9nb1wiKTtcbiAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChnaXRIdWJMb2dvKTtcbn1cbmFkZEZvb3RlckxvZ28oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==