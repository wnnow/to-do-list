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

.task-input-error-text,
.edit-project-err {
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
  margin-bottom: 24px;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n.material-symbols-outlined {\n  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  background: none;\n}\n\n:root {\n  --main-color: #ffffff;\n  --main-text-color: #d04848;\n  --nav-bg-color: #f5f5f5;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font: inherit;\n}\n\nhtml {\n  font-family: 'Roboto', sans-serif;\n  /* color-scheme: dark light; */\n}\n\nbody {\n  min-height: 100svh;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\nimg,\npicture,\nsvg,\nvideo {\n  display: block;\n  max-width: 100%;\n}\n\nimg {\n  vertical-align: middle;\n  height: auto;\n  font-style: italic;\n  background-repeat: no-repeat;\n  background-size: cover;\n  shape-margin: 0.75rem;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n}\n\np {\n  max-width: 75ch;\n  text-wrap: pretty;\n  font-size: 2rem;\n}\n\ninput {\n  outline: none;\n  border: 1px solid black;\n  border-radius: 10px;\n  width: 100%;\n  padding: 2px 4px;\n}\n\nbutton {\n  outline: none;\n  border: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  :has(:target) {\n    scroll-behavior: smooth;\n  }\n}\n\n.project-btn-wrapper,\n.del-project-popup-btn-wrapper {\n  display: flex;\n  gap: 32px;\n}\n.del-project-popup-header {\n  text-align: center;\n  margin-bottom: 16px;\n}\n\n.del-project-popup-btn-wrapper {\n  justify-content: center;\n  align-items: center;\n}\n.show-task-form-btn,\n#add-project-btn,\n#cancel-project-btn,\n#add-task-btn,\n#cancel-task-btn,\n.del-project-popup-btn-wrapper > button,\n.edit-project-popup-btn-wrapper > button,\n#edit-task-submit-btn,\n#edit-task-cancel-btn {\n  width: 100px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n#add-project-btn:hover,\n#cancel-project-btn:hover,\n#add-task-btn:hover,\n#cancel-task-btn:hover,\n.del-project-popup-btn-wrapper > button:hover,\n.edit-project-popup-btn-wrapper > button:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n.project-form-btn {\n  width: 125px;\n  background-color: rgb(245, 245, 245);\n  border-radius: 10px;\n  padding: 4px 8px;\n}\n\n.project-form-btn:hover {\n  background-color: rgb(194, 194, 194);\n}\n\n/* header section */\n\n.header-wrapper {\n  background-color: var(--main-color);\n  color: var(--main-text-color);\n  padding: 16px;\n}\n\n.header-container {\n  max-width: 1920px;\n  display: flex;\n  gap: 16px;\n  font-size: 1.25rem;\n}\n\n.wrapper {\n  display: flex;\n  flex: 1;\n}\n\n/* nav */\n\n.navbar-wrapper {\n  background-color: var(--nav-bg-color);\n  padding: 16px;\n}\n\n.navbar-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n\n.project-nav-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 8px;\n  margin-bottom: 8px;\n  border-bottom: 1px solid rgb(196, 196, 196);\n}\n\n#show-project-form-btn,\n#task-popup-close-btn {\n  width: auto;\n  padding: 0;\n  margin: 0;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.project-list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.project-list-container {\n  gap: 16px;\n}\n\n.project-nav-item,\n.navbar-container > div {\n  padding: 8px 16px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.project-nav-item:hover,\n.navbar-container > div:hover {\n  background-color: rgb(196, 196, 196);\n}\n\n/* content */\n.content-container {\n  border: 1px solid #dbdbdb;\n  padding: 1rem;\n  flex: 1;\n}\n\n.project-header-name {\n  font-size: 1.25rem;\n  margin-bottom: 16px;\n}\n\n.task-container {\n  margin-top: 16px;\n}\n\n.task-content {\n  display: grid;\n  grid-template-columns: 1fr 5fr 5fr 3fr 2fr 1fr 1fr 1fr;\n  gap: 16px;\n  align-items: center;\n  margin-bottom: 16px;\n  border: 1px solid gray;\n  padding: 4px 8px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.task-content:hover {\n  background-color: aliceblue;\n}\n\n.task-content > div {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.task-checkbox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.high-priority {\n  border-left: 15px solid #d04848;\n}\n.medium-priority {\n  border-left: 15px solid #ffe25f;\n}\n.low-priority {\n  border-left: 15px solid #95fd92;\n}\n\n.task-status-true {\n  text-decoration-line: line-through;\n  background-color: var(--nav-bg-color);\n}\n\n/* footer */\nfooter {\n  margin-top: auto;\n}\n\n/* project form */\n.project-form-container {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n\n#project-form > div,\n#project-form > div.project-form-text > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n/* task form */\n#edit-task-form,\n/* .edit-task-form, */\n#task-form,\n.del-project-popup {\n  display: none;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid black;\n  padding: 1rem;\n  width: 300px;\n  z-index: 1;\n  background-color: white;\n  border-radius: 10px;\n}\n#task-form > div,\n#edit-task-form > div {\n  margin-bottom: 16px;\n}\n\n.task-btn-container,\n.edit-task-btn-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.task-input-name > label,\n.task-input-description > label,\n.task-input-duedate > label,\n.edit-task-input-name > label,\n.edit-task-input-description > label,\n.edit-task-input-duedate > label {\n  display: block;\n  margin-bottom: 16px;\n}\n\n.task-input-error-text,\n.edit-project-err {\n  position: absolute;\n  color: #d04848;\n  font-size: 0.75rem;\n  visibility: hidden;\n}\n\ninput:focus:valid {\n  border-color: green;\n}\n\ninput:focus:invalid {\n  border-color: red;\n}\n\n#task-popup-detail-container,\n.edit-project-popup {\n  display: none;\n  width: 500px;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: white;\n  padding: 16px;\n  border: 1px solid #b1b1b1;\n  border-radius: 10px;\n}\n\n.edit-project-input-wrapper {\n  margin-bottom: 24px;\n}\nlabel[for='edit_project_name'] {\n  font-size: 1.25rem;\n  display: block;\n  margin-bottom: 16px;\n}\n\n.edit-project-popup-btn-wrapper {\n  display: flex;\n  justify-content: space-around;\n}\n#task-popup-detail-header-text {\n  font-size: 1.25rem;\n}\n\n.task-popup-header-wrapper {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n#task-popup-close-btn {\n  background-color: white;\n}\n\n.task-popup-detail-wrapper {\n  display: grid;\n  grid-template-columns: 75px 1fr;\n  margin-bottom: 8px;\n}\n\n/* footer */\n\nfooter {\n  padding: 16px;\n}\n\n.footer-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 16px;\n}\n.footer-github-logo {\n  width: 25px;\n}\n@media screen and (max-width: 500px) {\n}\n"],"sourceRoot":""}]);
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
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
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
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

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
/* harmony import */ var _taskValidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskValidate.js */ "./src/modules/taskValidate.js");



const editProjectNameInput = document.querySelector('#edit_project_name');
const editProjectErrorText = document.querySelector('#edit-project-error-text');

(0,_taskValidate_js__WEBPACK_IMPORTED_MODULE_1__.addEventListenerTaskInputError)(
  editProjectNameInput,
  editProjectErrorText,
  'Please fill this field'
);

function createEditProjectBtn() {
  const editProjectFormBtn = document.createElement('button');

  editProjectFormBtn.setAttribute('type', 'submit');
  editProjectFormBtn.id = 'edit-project-form-btn';
  editProjectFormBtn.classList.add('project-form-btn');
  editProjectFormBtn.textContent = 'Edit Project';
  editProjectFormBtn.addEventListener('click', (e) => {
    toggleEditProjectForm();
    assignEditProjectInputValue();
  });
  return editProjectFormBtn;
}

function toggleEditProjectForm() {
  const editProjectForm = document.querySelector('.edit-project-popup');
  if (
    editProjectForm.style.display === 'none' ||
    editProjectForm.style.display === ''
  ) {
    editProjectForm.style.display = 'block';
  } else if (editProjectForm.style.display === 'block') {
    editProjectForm.style.display = 'none';
  }
}

function findProjectIndexFromProjectHeaderName() {
  const projectHeaderName = document.querySelector('.project-header-name');
  const projectIndex = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects.findIndex(
    (project) => project.id === +projectHeaderName.dataset.index
  );
  return projectIndex;
}

function assignEditProjectInputValue() {
  const editProjectInput = document.querySelector('#edit_project_name');
  const projectIndex = findProjectIndexFromProjectHeaderName();

  editProjectInput.value = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name;
}

function addEventListenerCancelEditProjectForm() {
  const cancelProjectFormBtn = document.querySelector(
    '#edit-project-cancel-btn'
  );

  cancelProjectFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleEditProjectForm();
  });
}

function addEventListenerSubmitEditProjectForm() {
  const submitProjectFormBtn = document.querySelector(
    '#edit-project-submit-btn'
  );
  const editProjectForm = document.querySelector(' form.edit-project-popup');

  submitProjectFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!editProjectForm.checkValidity()) {
      if (!editProjectNameInput.validity.valid) {
        editProjectNameInput.focus();
        // editProjectNameInput.setCustomValidity('Please fill this field');
        editProjectErrorText.textContent = 'Please fill this field';
        editProjectErrorText.style.visibility = 'visible';
      }
      return;
    }
    editProjectName();
    toggleEditProjectForm();
  });
}

function editProjectName() {
  const projectIndex = findProjectIndexFromProjectHeaderName();
  const projectEditName = document.querySelector('#edit_project_name').value;
  _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name = projectEditName;

  updateProjectHeaderNameTextContent(projectIndex);
  updateProjectNavbarNameTextContent(projectIndex);
  (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.updateProject)();
}

function updateProjectHeaderNameTextContent(projectIndex) {
  const projectHeaderName = document.querySelector('.project-header-name');
  projectHeaderName.textContent = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[projectIndex].name;
}

function updateProjectNavbarNameTextContent(projectIndex) {
  const projectListContainer = document.querySelector(
    '.project-list-container'
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
    Project.#id = JSON.parse(localStorage.getItem('projectsId'));
  }
  static setLocalStorageProjectsId() {
    localStorage.setItem('projectsId', JSON.stringify(Project.getId()));
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
    localStorage.setItem('projectId', JSON.stringify(this.getId()));
  }

  getLocalStorageProjectId() {
    this.taskId = JSON.parse(localStorage.getItem('projectId'));
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
  localStorage.setItem('projectCollection', JSON.stringify(projects));
}

// add project

const showProjectFormBtn = document.querySelector('#show-project-form-btn');
const projectFormContainer = document.querySelector('.project-form-container');
const cancelFormBtn = document.querySelector('#cancel-project-btn');
const inputProjectName = document.querySelector('#project_name');
const addProjectBtn = document.querySelector('#add-project-btn');

showProjectFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projectFormContainer.style.display = 'block';
});

cancelFormBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projectFormContainer.style.display = 'none';
});

addProjectBtn.addEventListener('click', (e) => {
  if (inputProjectName.value === '') {
    return;
  }
  Project.getLocalStorageProjectsId();
  createProject(inputProjectName.value);
  Project.setLocalStorageProjectsId();
  inputProjectName.value = '';
  projectFormContainer.style.display = 'none';

  addNewProjectNavbar();
  e.preventDefault();
});

function addNewProjectNavbar() {
  const projectNavListContainer = document.querySelector(
    '.project-list-container'
  );
  const project = document.createElement('div');

  project.textContent = `${projects[projects.length - 1].name}`;
  project.dataset.index = `${Project.getId() - 1}`;
  project.classList.add('project-nav-item');

  project.addEventListener('click', (e) => {
    renderProjectContent(e);
    renderProjectTask(e);
  });

  projectNavListContainer.appendChild(project);
}

function renderProjectNavbar() {
  const projectData = JSON.parse(localStorage.getItem('projectCollection'));
  const projectNavListContainer = document.querySelector(
    '.project-list-container'
  );

  projectData.forEach((project) => {
    const projectDiv = document.createElement('div');

    projectDiv.textContent = `${project.name}`;
    projectDiv.dataset.index = `${project.id}`;
    projectDiv.classList.add('project-nav-item');

    projectDiv.addEventListener('click', (e) => {
      renderProjectContent(e);
      renderProjectTask(e);
    });

    projectNavListContainer.appendChild(projectDiv);
  });
}

function renderProjectContent(e) {
  e.stopPropagation();
  const contentContainer = document.querySelector('.content-container');
  const projectContentContainer = document.createElement('div');
  const projectBtnWrapper = document.createElement('div');
  clearContentContainer();
  projectBtnWrapper.classList.add('project-btn-wrapper');

  projectBtnWrapper.appendChild(createShowTaskFormBtn());
  projectBtnWrapper.appendChild((0,_editProjectName_js__WEBPACK_IMPORTED_MODULE_4__.createEditProjectBtn)());
  projectBtnWrapper.appendChild((0,_removeProject_js__WEBPACK_IMPORTED_MODULE_2__.createDeleteProjectBtn)());
  projectContentContainer.classList.add('project-content-container');
  projectContentContainer.appendChild(createProjectHeaderContent(e));
  projectContentContainer.appendChild(projectBtnWrapper);
  projectContentContainer.appendChild(createTaskContainer());
  contentContainer.appendChild(projectContentContainer);
}

function createProjectHeaderContent(e) {
  const projectHeaderName = document.createElement('div');
  const projectIndex = projects.findIndex(
    (project) => project.id === +e.target.dataset.index
  );

  projectHeaderName.textContent = `${projects[projectIndex].name}`;
  projectHeaderName.dataset.index = `${e.target.dataset.index}`;
  projectHeaderName.classList.add('project-header-name');
  return projectHeaderName;
}

function createTaskContainer() {
  const taskContainer = document.createElement('ul');
  taskContainer.classList.add('task-container');
  return taskContainer;
}

function createShowTaskFormBtn() {
  const showTaskFormBtn = document.createElement('button');
  showTaskFormBtn.setAttribute('type', 'submit');
  showTaskFormBtn.classList.add('project-form-btn');
  showTaskFormBtn.textContent = 'Add Task';
  showTaskFormBtn.addEventListener('click', (e) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.toggleTaskForm)();
  });
  return showTaskFormBtn;
}

function clearContentContainer() {
  const contentContainer = document.querySelector('.content-container');

  while (contentContainer.firstElementChild) {
    contentContainer.removeChild(contentContainer.firstElementChild);
  }
}

function renderProjectTask(e) {
  let projectIndex;
  if (typeof e === 'number') {
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

  sortedTasks.forEach((task) => {
    (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTask)(task);
  });
}

renderDefaultAllTaskContent();

function clearTaskContainer() {
  const taskContainer = document.querySelector('.task-container');
  while (taskContainer.firstElementChild) {
    taskContainer.removeChild(taskContainer.firstElementChild);
  }
}

function createHeaderName(name) {
  const contentContainer = document.querySelector('.content-container');
  const taskContainer = document.createElement('ul');
  const projectHeaderName = document.createElement('div');
  taskContainer.classList.add('task-container');
  projectHeaderName.classList.add('project-header-name');
  projectHeaderName.textContent = name;
  contentContainer.appendChild(projectHeaderName);
  contentContainer.appendChild(taskContainer);
}

const allTaskBtn = document.querySelector('.all-task');

function reRenderProjectHeaderName(name) {
  clearContentContainer();
  createHeaderName(name);
  renderDefaultAllTaskContent();
}
allTaskBtn.addEventListener('click', (e) => {
  reRenderProjectHeaderName('All Task');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHNIQUFzSCxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN0TTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxRQUFRLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sYUFBYSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxVQUFVLFFBQVEsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZ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QkFBb0IsaURBQVE7QUFDNUI7QUFDQTtBQUNBLGlCQUFpQixpREFBUTtBQUN6QjtBQUNBOztBQUVBLEVBQUUsaURBQVE7QUFDVixFQUFFLDBEQUFhO0FBQ2YsTUFBTSxpREFBUTtBQUNkO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDOEQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUI5RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNzQztBQUN1QjtBQUNoQztBQUNsRCx3RUFBbUI7QUFDbkIsK0ZBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZGF0ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvZWRpdFByb2plY3ROYW1lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9lZGl0VGFza0luZm8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbW92ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3JlbW92ZVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3NldFByb2plY3RMb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tEZXRhaWxQb3B1cC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza1ZhbGlkYXRlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RheVRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZ2dsZVRhc2tTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiAnRklMTCcgMCwgJ3dnaHQnIDQwMCwgJ0dSQUQnIDAsICdvcHN6JyAyNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuOnJvb3Qge1xuICAtLW1haW4tY29sb3I6ICNmZmZmZmY7XG4gIC0tbWFpbi10ZXh0LWNvbG9yOiAjZDA0ODQ4O1xuICAtLW5hdi1iZy1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgLyogY29sb3Itc2NoZW1lOiBkYXJrIGxpZ2h0OyAqL1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwc3ZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmltZyxcbnBpY3R1cmUsXG5zdmcsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBzaGFwZS1tYXJnaW46IDAuNzVyZW07XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIHRleHQtd3JhcDogYmFsYW5jZTtcbn1cblxucCB7XG4gIG1heC13aWR0aDogNzVjaDtcbiAgdGV4dC13cmFwOiBwcmV0dHk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJweCA0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XG4gIDpoYXMoOnRhcmdldCkge1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB9XG59XG5cbi5wcm9qZWN0LWJ0bi13cmFwcGVyLFxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAzMnB4O1xufVxuLmRlbC1wcm9qZWN0LXBvcHVwLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmRlbC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2hvdy10YXNrLWZvcm0tYnRuLFxuI2FkZC1wcm9qZWN0LWJ0bixcbiNjYW5jZWwtcHJvamVjdC1idG4sXG4jYWRkLXRhc2stYnRuLFxuI2NhbmNlbC10YXNrLWJ0bixcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b24sXG4jZWRpdC10YXNrLXN1Ym1pdC1idG4sXG4jZWRpdC10YXNrLWNhbmNlbC1idG4ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlcixcbiNjYW5jZWwtcHJvamVjdC1idG46aG92ZXIsXG4jYWRkLXRhc2stYnRuOmhvdmVyLFxuI2NhbmNlbC10YXNrLWJ0bjpob3Zlcixcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3Zlcixcbi5lZGl0LXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XG59XG5cbi5wcm9qZWN0LWZvcm0tYnRuIHtcbiAgd2lkdGg6IDEyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5wcm9qZWN0LWZvcm0tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xufVxuXG4vKiBoZWFkZXIgc2VjdGlvbiAqL1xuXG4uaGVhZGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG5cbi8qIG5hdiAqL1xuXG4ubmF2YmFyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ubmF2YmFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cblxuLnByb2plY3QtbmF2LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5NiwgMTk2LCAxOTYpO1xufVxuXG4jc2hvdy1wcm9qZWN0LWZvcm0tYnRuLFxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2plY3QtbGlzdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDE2cHg7XG59XG5cbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ucHJvamVjdC1uYXYtaXRlbSxcbi5uYXZiYXItY29udGFpbmVyID4gZGl2IHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2plY3QtbmF2LWl0ZW06aG92ZXIsXG4ubmF2YmFyLWNvbnRhaW5lciA+IGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcbn1cblxuLyogY29udGVudCAqL1xuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcbiAgcGFkZGluZzogMXJlbTtcbiAgZmxleDogMTtcbn1cblxuLnByb2plY3QtaGVhZGVyLW5hbWUge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50YXNrLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgNWZyIDNmciAyZnIgMWZyIDFmciAxZnI7XG4gIGdhcDogMTZweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhc2stY29udGVudDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cblxuLnRhc2stY29udGVudCA+IGRpdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRhc2stY2hlY2tib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpZ2gtcHJpb3JpdHkge1xuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZDA0ODQ4O1xufVxuLm1lZGl1bS1wcmlvcml0eSB7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmUyNWY7XG59XG4ubG93LXByaW9yaXR5IHtcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzk1ZmQ5Mjtcbn1cblxuLnRhc2stc3RhdHVzLXRydWUge1xuICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xufVxuXG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG5cbi8qIHByb2plY3QgZm9ybSAqL1xuLnByb2plY3QtZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3Byb2plY3QtZm9ybSA+IGRpdixcbiNwcm9qZWN0LWZvcm0gPiBkaXYucHJvamVjdC1mb3JtLXRleHQgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4vKiB0YXNrIGZvcm0gKi9cbiNlZGl0LXRhc2stZm9ybSxcbi8qIC5lZGl0LXRhc2stZm9ybSwgKi9cbiN0YXNrLWZvcm0sXG4uZGVsLXByb2plY3QtcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbiN0YXNrLWZvcm0gPiBkaXYsXG4jZWRpdC10YXNrLWZvcm0gPiBkaXYge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udGFzay1idG4tY29udGFpbmVyLFxuLmVkaXQtdGFzay1idG4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi50YXNrLWlucHV0LW5hbWUgPiBsYWJlbCxcbi50YXNrLWlucHV0LWRlc2NyaXB0aW9uID4gbGFiZWwsXG4udGFzay1pbnB1dC1kdWVkYXRlID4gbGFiZWwsXG4uZWRpdC10YXNrLWlucHV0LW5hbWUgPiBsYWJlbCxcbi5lZGl0LXRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcbi5lZGl0LXRhc2staW5wdXQtZHVlZGF0ZSA+IGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50YXNrLWlucHV0LWVycm9yLXRleHQsXG4uZWRpdC1wcm9qZWN0LWVyciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNkMDQ4NDg7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG5pbnB1dDpmb2N1czp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59XG5cbmlucHV0OmZvY3VzOmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lcixcbi5lZGl0LXByb2plY3QtcG9wdXAge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjFiMWIxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZWRpdC1wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxubGFiZWxbZm9yPSdlZGl0X3Byb2plY3RfbmFtZSddIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4udGFzay1wb3B1cC1oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi50YXNrLXBvcHVwLWRldGFpbC13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDFmcjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4vKiBmb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbn1cbi5mb290ZXItZ2l0aHViLWxvZ28ge1xuICB3aWR0aDogMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxrRUFBa0U7RUFDbEUsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBOzs7Ozs7RUFNRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOzs7Ozs7Ozs7RUFTRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7OztFQU1FLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsT0FBTztBQUNUOztBQUVBLFFBQVE7O0FBRVI7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQSxZQUFZO0FBQ1o7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0RBQXNEO0VBQ3RELFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUNBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUNBQXFDO0FBQ3ZDOztBQUVBLFdBQVc7QUFDWDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUEsY0FBYztBQUNkOzs7O0VBSUUsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBOzs7Ozs7RUFNRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICdGSUxMJyAwLCAnd2dodCcgNDAwLCAnR1JBRCcgMCwgJ29wc3onIDI0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbWFpbi1jb2xvcjogI2ZmZmZmZjtcXG4gIC0tbWFpbi10ZXh0LWNvbG9yOiAjZDA0ODQ4O1xcbiAgLS1uYXYtYmctY29sb3I6ICNmNWY1ZjU7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgLyogY29sb3Itc2NoZW1lOiBkYXJrIGxpZ2h0OyAqL1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSxcXG5zdmcsXFxudmlkZW8ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmltZyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBzaGFwZS1tYXJnaW46IDAuNzVyZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIHRleHQtd3JhcDogYmFsYW5jZTtcXG59XFxuXFxucCB7XFxuICBtYXgtd2lkdGg6IDc1Y2g7XFxuICB0ZXh0LXdyYXA6IHByZXR0eTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMnB4IDRweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiBuby1wcmVmZXJlbmNlKSB7XFxuICA6aGFzKDp0YXJnZXQpIHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxuICB9XFxufVxcblxcbi5wcm9qZWN0LWJ0bi13cmFwcGVyLFxcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG4uZGVsLXByb2plY3QtcG9wdXAtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaG93LXRhc2stZm9ybS1idG4sXFxuI2FkZC1wcm9qZWN0LWJ0bixcXG4jY2FuY2VsLXByb2plY3QtYnRuLFxcbiNhZGQtdGFzay1idG4sXFxuI2NhbmNlbC10YXNrLWJ0bixcXG4uZGVsLXByb2plY3QtcG9wdXAtYnRuLXdyYXBwZXIgPiBidXR0b24sXFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbixcXG4jZWRpdC10YXNrLXN1Ym1pdC1idG4sXFxuI2VkaXQtdGFzay1jYW5jZWwtYnRuIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyLFxcbiNjYW5jZWwtcHJvamVjdC1idG46aG92ZXIsXFxuI2FkZC10YXNrLWJ0bjpob3ZlcixcXG4jY2FuY2VsLXRhc2stYnRuOmhvdmVyLFxcbi5kZWwtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciA+IGJ1dHRvbjpob3ZlcixcXG4uZWRpdC1wcm9qZWN0LXBvcHVwLWJ0bi13cmFwcGVyID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG59XFxuXFxuLnByb2plY3QtZm9ybS1idG4ge1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbi5wcm9qZWN0LWZvcm0tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG59XFxuXFxuLyogaGVhZGVyIHNlY3Rpb24gKi9cXG5cXG4uaGVhZGVyLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTkyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTZweDtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi8qIG5hdiAqL1xcblxcbi5uYXZiYXItd3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmctY29sb3IpO1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLm5hdmJhci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ucHJvamVjdC1uYXYtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTk2LCAxOTYsIDE5Nik7XFxufVxcblxcbiNzaG93LXByb2plY3QtZm9ybS1idG4sXFxuI3Rhc2stcG9wdXAtY2xvc2UtYnRuIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxNnB4O1xcbn1cXG5cXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lciB7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5wcm9qZWN0LW5hdi1pdGVtLFxcbi5uYXZiYXItY29udGFpbmVyID4gZGl2IHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtbmF2LWl0ZW06aG92ZXIsXFxuLm5hdmJhci1jb250YWluZXIgPiBkaXY6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NiwgMTk2LCAxOTYpO1xcbn1cXG5cXG4vKiBjb250ZW50ICovXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZmxleDogMTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciA1ZnIgM2ZyIDJmciAxZnIgMWZyIDFmcjtcXG4gIGdhcDogMTZweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udGFzay1jb250ZW50OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcXG59XFxuXFxuLnRhc2stY29udGVudCA+IGRpdiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4udGFzay1jaGVja2JveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXItbGVmdDogMTVweCBzb2xpZCAjZDA0ODQ4O1xcbn1cXG4ubWVkaXVtLXByaW9yaXR5IHtcXG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNmZmUyNWY7XFxufVxcbi5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgIzk1ZmQ5MjtcXG59XFxuXFxuLnRhc2stc3RhdHVzLXRydWUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iZy1jb2xvcik7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4vKiBwcm9qZWN0IGZvcm0gKi9cXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0gPiBkaXYsXFxuI3Byb2plY3QtZm9ybSA+IGRpdi5wcm9qZWN0LWZvcm0tdGV4dCA+IGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLyogdGFzayBmb3JtICovXFxuI2VkaXQtdGFzay1mb3JtLFxcbi8qIC5lZGl0LXRhc2stZm9ybSwgKi9cXG4jdGFzay1mb3JtLFxcbi5kZWwtcHJvamVjdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiN0YXNrLWZvcm0gPiBkaXYsXFxuI2VkaXQtdGFzay1mb3JtID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi50YXNrLWJ0bi1jb250YWluZXIsXFxuLmVkaXQtdGFzay1idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxcbi50YXNrLWlucHV0LWRlc2NyaXB0aW9uID4gbGFiZWwsXFxuLnRhc2staW5wdXQtZHVlZGF0ZSA+IGxhYmVsLFxcbi5lZGl0LXRhc2staW5wdXQtbmFtZSA+IGxhYmVsLFxcbi5lZGl0LXRhc2staW5wdXQtZGVzY3JpcHRpb24gPiBsYWJlbCxcXG4uZWRpdC10YXNrLWlucHV0LWR1ZWRhdGUgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi50YXNrLWlucHV0LWVycm9yLXRleHQsXFxuLmVkaXQtcHJvamVjdC1lcnIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29sb3I6ICNkMDQ4NDg7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbmlucHV0OmZvY3VzOnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcblxcbmlucHV0OmZvY3VzOmludmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbiN0YXNrLXBvcHVwLWRldGFpbC1jb250YWluZXIsXFxuLmVkaXQtcHJvamVjdC1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiMWIxYjE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWlucHV0LXdyYXBwZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxubGFiZWxbZm9yPSdlZGl0X3Byb2plY3RfbmFtZSddIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1wb3B1cC1idG4td3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbiN0YXNrLXBvcHVwLWRldGFpbC1oZWFkZXItdGV4dCB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi50YXNrLXBvcHVwLWhlYWRlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4jdGFzay1wb3B1cC1jbG9zZS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50YXNrLXBvcHVwLWRldGFpbC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMWZyO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuXFxuLmZvb3Rlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDE2cHg7XFxufVxcbi5mb290ZXItZ2l0aHViLWxvZ28ge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5cbmZ1bmN0aW9uIGdldE1vbnRoTmFtZShkYXRlKSB7XG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICAnSmFuJyxcbiAgICAnRmViJyxcbiAgICAnTWFyJyxcbiAgICAnQXByJyxcbiAgICAnTWF5JyxcbiAgICAnSnVuJyxcbiAgICAnSnVsJyxcbiAgICAnQXVnJyxcbiAgICAnU2VwJyxcbiAgICAnT2N0JyxcbiAgICAnTm92JyxcbiAgICAnRGVjJyxcbiAgXTtcbiAgcmV0dXJuIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldO1xufVxuXG5mdW5jdGlvbiBmb3JtYXR0aW5nRGF0ZShkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgfVxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IGdldE1vbnRoTmFtZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XG4gIHJldHVybiBgJHttb250aH0gJHtkYXl9LCAke3llYXJ9YDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH1cbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgY29uc3QgZGF5ID0gU3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xufVxuXG5leHBvcnQgeyBmb3JtYXR0aW5nRGF0ZSwgZm9ybWF0dGluZ0RhdGVGb3JFZGl0UG9wdXAgfTtcbiIsImltcG9ydCB7IHByb2plY3RzLCB1cGRhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvciB9IGZyb20gJy4vdGFza1ZhbGlkYXRlLmpzJztcblxuY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF9wcm9qZWN0X25hbWUnKTtcbmNvbnN0IGVkaXRQcm9qZWN0RXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1lcnJvci10ZXh0Jyk7XG5cbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgZWRpdFByb2plY3ROYW1lSW5wdXQsXG4gIGVkaXRQcm9qZWN0RXJyb3JUZXh0LFxuICAnUGxlYXNlIGZpbGwgdGhpcyBmaWVsZCdcbik7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVkaXRQcm9qZWN0QnRuKCkge1xuICBjb25zdCBlZGl0UHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBlZGl0UHJvamVjdEZvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBlZGl0UHJvamVjdEZvcm1CdG4uaWQgPSAnZWRpdC1wcm9qZWN0LWZvcm0tYnRuJztcbiAgZWRpdFByb2plY3RGb3JtQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1idG4nKTtcbiAgZWRpdFByb2plY3RGb3JtQnRuLnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gIGVkaXRQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgdG9nZ2xlRWRpdFByb2plY3RGb3JtKCk7XG4gICAgYXNzaWduRWRpdFByb2plY3RJbnB1dFZhbHVlKCk7XG4gIH0pO1xuICByZXR1cm4gZWRpdFByb2plY3RGb3JtQnRuO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtcG9wdXAnKTtcbiAgaWYgKFxuICAgIGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHxcbiAgICBlZGl0UHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJydcbiAgKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2UgaWYgKGVkaXRQcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgZWRpdFByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RJbmRleEZyb21Qcm9qZWN0SGVhZGVyTmFtZSgpIHtcbiAgY29uc3QgcHJvamVjdEhlYWRlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXItbmFtZScpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtwcm9qZWN0SGVhZGVyTmFtZS5kYXRhc2V0LmluZGV4XG4gICk7XG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkVkaXRQcm9qZWN0SW5wdXRWYWx1ZSgpIHtcbiAgY29uc3QgZWRpdFByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Byb2plY3RfbmFtZScpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4RnJvbVByb2plY3RIZWFkZXJOYW1lKCk7XG5cbiAgZWRpdFByb2plY3RJbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckNhbmNlbEVkaXRQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3QgY2FuY2VsUHJvamVjdEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcjZWRpdC1wcm9qZWN0LWNhbmNlbC1idG4nXG4gICk7XG5cbiAgY2FuY2VsUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVFZGl0UHJvamVjdEZvcm0oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJTdWJtaXRFZGl0UHJvamVjdEZvcm0oKSB7XG4gIGNvbnN0IHN1Ym1pdFByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2VkaXQtcHJvamVjdC1zdWJtaXQtYnRuJ1xuICApO1xuICBjb25zdCBlZGl0UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcgZm9ybS5lZGl0LXByb2plY3QtcG9wdXAnKTtcblxuICBzdWJtaXRQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghZWRpdFByb2plY3RGb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaWYgKCFlZGl0UHJvamVjdE5hbWVJbnB1dC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICBlZGl0UHJvamVjdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgICAgICAvLyBlZGl0UHJvamVjdE5hbWVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnUGxlYXNlIGZpbGwgdGhpcyBmaWVsZCcpO1xuICAgICAgICBlZGl0UHJvamVjdEVycm9yVGV4dC50ZXh0Q29udGVudCA9ICdQbGVhc2UgZmlsbCB0aGlzIGZpZWxkJztcbiAgICAgICAgZWRpdFByb2plY3RFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWRpdFByb2plY3ROYW1lKCk7XG4gICAgdG9nZ2xlRWRpdFByb2plY3RGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoKSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUoKTtcbiAgY29uc3QgcHJvamVjdEVkaXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXRfcHJvamVjdF9uYW1lJykudmFsdWU7XG4gIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZSA9IHByb2plY3RFZGl0TmFtZTtcblxuICB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCk7XG4gIHVwZGF0ZVByb2plY3ROYXZiYXJOYW1lVGV4dENvbnRlbnQocHJvamVjdEluZGV4KTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0SGVhZGVyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlci1uYW1lJyk7XG4gIHByb2plY3RIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS5uYW1lO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TmF2YmFyTmFtZVRleHRDb250ZW50KHByb2plY3RJbmRleCkge1xuICBjb25zdCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJ1xuICApO1xuICBwcm9qZWN0TGlzdENvbnRhaW5lci5jaGlsZE5vZGVzW3Byb2plY3RJbmRleF0udGV4dENvbnRlbnQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0ubmFtZTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJDYW5jZWxFZGl0UHJvamVjdEZvcm0oKTtcbmFkZEV2ZW50TGlzdGVuZXJTdWJtaXRFZGl0UHJvamVjdEZvcm0oKTtcblxuZXhwb3J0IHsgY3JlYXRlRWRpdFByb2plY3RCdG4sIGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGZpbmRQcm9qZWN0SW5kZXhGcm9tUHJvamVjdEhlYWRlck5hbWUgfSBmcm9tICcuL2VkaXRQcm9qZWN0TmFtZS5qcyc7XG5pbXBvcnQgeyBmb3JtYXR0aW5nRGF0ZUZvckVkaXRQb3B1cCwgZm9ybWF0dGluZ0RhdGUgfSBmcm9tICcuL2RhdGUuanMnO1xuaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yIH0gZnJvbSAnLi90YXNrVmFsaWRhdGUuanMnO1xuXG5jb25zdCBlZGl0VGFza05hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Rhc2tfbmFtZScpO1xuY29uc3QgZWRpdFRhc2tOYW1lSW5wdXRFcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI2VkaXQtdGFzay1pbnB1dC1uYW1lLWVycm9yLXRleHQnXG4pO1xuY29uc3QgZWRpdFRhc2tEZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Rhc2tfZGVzY3JpcHRpb24nKTtcbmNvbnN0IGVkaXRUYXNrRGVzSW5wdXRFcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI2VkaXQtdGFzay1pbnB1dC1kZXMtZXJyb3ItdGV4dCdcbik7XG5jb25zdCBlZGl0VGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Rhc2tfZHVlX2RhdGUnKTtcbmNvbnN0IGVkaXRUYXNrRGF0ZUlucHV0RXJyb3JUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgJyNlZGl0LXRhc2staW5wdXQtZGF0ZS1lcnJvci10ZXh0J1xuKTtcblxuYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yKFxuICBlZGl0VGFza05hbWVJbnB1dCxcbiAgZWRpdFRhc2tOYW1lSW5wdXRFcnJvclRleHQsXG4gICdQbGVhc2UgZmlsbCB0aGlzIGZpZWxkJ1xuKTtcbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgZWRpdFRhc2tEZXNJbnB1dCxcbiAgZWRpdFRhc2tEZXNJbnB1dEVycm9yVGV4dCxcbiAgJ1BsZWFzZSBmaWxsIHRoaXMgZmllbGQnXG4pO1xuYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yKFxuICBlZGl0VGFza0RhdGVJbnB1dCxcbiAgZWRpdFRhc2tEYXRlSW5wdXRFcnJvclRleHQsXG4gICdQbGVhc2UgZmlsbCB0aGlzIGZpZWxkJ1xuKTtcbmZ1bmN0aW9uIHRvZ2dsZUVkaXRUYXNrRm9ybSgpIHtcbiAgY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG5cbiAgaWYgKFxuICAgIGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHxcbiAgICBlZGl0VGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9PT0gJydcbiAgKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9IGVsc2UgaWYgKGVkaXRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgZWRpdFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZUVkaXRUYXNrRm9ybShidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVFZGl0VGFza0Zvcm0oKTtcbiAgICBhc3NpZ25FZGl0VGFza0Zvcm1WYWx1ZVRvSW5wdXQoZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25FZGl0VGFza0Zvcm1WYWx1ZVRvSW5wdXQoZSkge1xuICBjb25zdCB0YXNrQ29udGVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgdGFza0lkID0gdGFza0NvbnRlbnQuZGF0YXNldC50YXNrSW5kZXg7XG4gIGNvbnN0IHByb2plY3RJZCA9IHRhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCB0YXNrTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZWRpdF90YXNrX25hbWVcIl0nKTtcbiAgY29uc3QgZWRpdFRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX25hbWUnKTtcbiAgY29uc3QgZWRpdFRhc2tEZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Rhc2tfZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgZWRpdFRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX2R1ZV9kYXRlJyk7XG4gIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0X3Rhc2tfcHJpb3JpdHknKTtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZEluZGV4RnJvbVRhc2tEYXRhc2V0KGUpLnByb2plY3RJbmRleDtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZEluZGV4RnJvbVRhc2tEYXRhc2V0KGUpLnRhc2tJbmRleDtcblxuICB0YXNrTGFiZWxOYW1lLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdElkO1xuICB0YXNrTGFiZWxOYW1lLmRhdGFzZXQudGFza0lkID0gdGFza0lkO1xuICBlZGl0VGFza05hbWVJbnB1dC52YWx1ZSA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5uYW1lO1xuICBlZGl0VGFza0Rlc0lucHV0LnZhbHVlID0gcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICBlZGl0VGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IGZvcm1hdHRpbmdEYXRlRm9yRWRpdFBvcHVwKFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kdWVkYXRlXG4gICk7XG5cbiAgZWRpdFRhc2tQcmlvcml0eUlucHV0LnZhbHVlID1cbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0ucHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleEZyb21UYXNrRGF0YXNldChlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCB0YXNrRGF0YXNldEluZGV4ID0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4O1xuICBjb25zdCBwcm9qZWN0RGF0YXNldEluZGV4ID0gK3Rhc2tDb250ZW50LmRhdGFzZXQucHJvamVjdEluZGV4O1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3REYXRhc2V0SW5kZXgpO1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kVGFza0luZGV4KHByb2plY3REYXRhc2V0SW5kZXgsIHRhc2tEYXRhc2V0SW5kZXgpO1xuICByZXR1cm4geyBwcm9qZWN0SW5kZXg6IHByb2plY3RJbmRleCwgdGFza0luZGV4OiB0YXNrSW5kZXggfTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3RJbmRleChwcm9qZWN0RGF0YXNldEluZGV4KSB7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdERhdGFzZXRJbmRleFxuICApO1xuXG4gIHJldHVybiBwcm9qZWN0SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmRUYXNrSW5kZXgocHJvamVjdERhdGFzZXRJbmRleCwgdGFza0RhdGFzZXRJbmRleCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBmaW5kUHJvamVjdEluZGV4KHByb2plY3REYXRhc2V0SW5kZXgpO1xuICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0RhdGFzZXRJbmRleFxuICApO1xuXG4gIHJldHVybiB0YXNrSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJFZGl0Q2FuY2VsQnRuKCkge1xuICBjb25zdCBlZGl0Q2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1jYW5jZWwtYnRuJyk7XG4gIGVkaXRDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZUVkaXRUYXNrRm9ybSgpO1xuICB9KTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJFZGl0Q2FuY2VsQnRuKCk7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tJbmZvKCkge1xuICBjb25zdCBlZGl0VGFza05hbWVJbnB1dFZhbHVlID1cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdF90YXNrX25hbWUnKS52YWx1ZTtcbiAgY29uc3QgZWRpdFRhc2tEZXNJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2VkaXRfdGFza19kZXNjcmlwdGlvbidcbiAgKS52YWx1ZTtcbiAgY29uc3QgZWRpdFRhc2tEdWVEYXRlSW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJyNlZGl0X3Rhc2tfZHVlX2RhdGUnXG4gICkudmFsdWU7XG4gIGNvbnN0IGVkaXRUYXNrUHJpb3JpdHlJbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnI2VkaXRfdGFza19wcmlvcml0eSdcbiAgKS52YWx1ZTtcbiAgY29uc3QgdGFza0xhYmVsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsW2Zvcj1cImVkaXRfdGFza19uYW1lXCJdJyk7XG4gIGNvbnN0IHByb2plY3RJZCA9ICt0YXNrTGFiZWxOYW1lLmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCB0YXNrSWQgPSArdGFza0xhYmVsTmFtZS5kYXRhc2V0LnRhc2tJZDtcbiAgcHJvamVjdHNbcHJvamVjdElkXS51cGRhdGVUYXNrKFxuICAgIHRhc2tJZCxcbiAgICBlZGl0VGFza05hbWVJbnB1dFZhbHVlLFxuICAgIGVkaXRUYXNrRGVzSW5wdXRWYWx1ZSxcbiAgICBuZXcgRGF0ZShlZGl0VGFza0R1ZURhdGVJbnB1dFZhbHVlKSxcbiAgICBlZGl0VGFza1ByaW9yaXR5SW5wdXRWYWx1ZVxuICApO1xufVxuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtdGFzay1mb3JtJyk7XG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyRWRpdFN1Ym1pdEJ0bigpIHtcbiAgY29uc3QgZWRpdFN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LXRhc2stc3VibWl0LWJ0bicpO1xuICBlZGl0U3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWVkaXRUYXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGlmICghZWRpdFRhc2tEYXRlSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgZWRpdFRhc2tEYXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZWRpdFRhc2tEYXRlSW5wdXRFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICBlZGl0VGFza0RhdGVJbnB1dEVycm9yVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgaWYgKCFlZGl0VGFza0Rlc0lucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgIGVkaXRUYXNrRGVzSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZWRpdFRhc2tEZXNJbnB1dEVycm9yVGV4dC50ZXh0Q29udGVudCA9ICdQbGVhc2UgRmlsbCBvdXQgdGhpcyBmaWVsZCc7XG4gICAgICAgIGVkaXRUYXNrRGVzSW5wdXRFcnJvclRleHQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgIH1cbiAgICAgIGlmICghZWRpdFRhc2tOYW1lSW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgZWRpdFRhc2tOYW1lSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZWRpdFRhc2tOYW1lSW5wdXRFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICBlZGl0VGFza05hbWVJbnB1dEVycm9yVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB1cGRhdGVUYXNrSW5mbygpO1xuICAgIHVwZGF0ZVRhc2tDb250ZW50RE9NKCk7XG4gICAgdG9nZ2xlRWRpdFRhc2tGb3JtKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29udGVudERPTSgpIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCB0YXNrTGFiZWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGFiZWxbZm9yPVwiZWRpdF90YXNrX25hbWVcIl0nKTtcbiAgY29uc3QgcHJvamVjdElkID0gdGFza0xhYmVsTmFtZS5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgdGFza0lkID0gdGFza0xhYmVsTmFtZS5kYXRhc2V0LnRhc2tJZDtcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gZmluZFByb2plY3RJbmRleCgrcHJvamVjdElkKTtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZFRhc2tJbmRleCgrcHJvamVjdElkLCArdGFza0lkKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lckNoaWxkSW5kZXggPSBBcnJheS5mcm9tKFxuICAgIHRhc2tDb250YWluZXIuY2hpbGROb2Rlc1xuICApLmZpbmRJbmRleChcbiAgICAoZWxlbWVudCkgPT5cbiAgICAgIGVsZW1lbnQuZGF0YXNldC5wcm9qZWN0SW5kZXggPT09IHByb2plY3RJZCAmJlxuICAgICAgZWxlbWVudC5kYXRhc2V0LnRhc2tJbmRleCA9PT0gdGFza0lkXG4gICk7XG4gIGNvbnN0IHRhcmdldFRhc2sgPSB0YXNrQ29udGFpbmVyLmNoaWxkTm9kZXNbdGFza0NvbnRhaW5lckNoaWxkSW5kZXhdO1xuXG4gIHRhcmdldFRhc2sucXVlcnlTZWxlY3RvcignI3Rhc2stc3RhdHVzJykuY2hlY2tlZCA9XG4gICAgcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnN0YXR1cztcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1uYW1lJykudGV4dENvbnRlbnQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5uYW1lO1xuICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlc2NyaXB0aW9uJykudGV4dENvbnRlbnQgPVxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5kZXNjcmlwdGlvbjtcbiAgdGFyZ2V0VGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1kdWVkYXRlJykudGV4dENvbnRlbnQgPSBmb3JtYXR0aW5nRGF0ZShcbiAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZVxuICApO1xuICAvLyB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kdWVkYXRlXCIpLnRleHRDb250ZW50ID1cbiAgLy8gICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzW3Rhc2tJbmRleF0uZHVlZGF0ZTtcblxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSAnMScpIHtcbiAgICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5JykudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICB0YXJnZXRUYXNrLmNsYXNzTmFtZSA9ICcnO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKCdsb3ctcHJpb3JpdHknKTtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSAnMicpIHtcbiAgICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5JykudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICB0YXJnZXRUYXNrLmNsYXNzTmFtZSA9ICcnO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gICAgdGFyZ2V0VGFzay5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID09PSAnMycpIHtcbiAgICB0YXJnZXRUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLXByaW9yaXR5JykudGV4dENvbnRlbnQgPSAnSGlnaCc7XG4gICAgdGFyZ2V0VGFzay5jbGFzc05hbWUgPSAnJztcbiAgICB0YXJnZXRUYXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpO1xuICAgIHRhcmdldFRhc2suY2xhc3NMaXN0LmFkZCgnaGlnaC1wcmlvcml0eScpO1xuICB9XG59XG5hZGRFdmVudExpc3RlbmVyRWRpdFN1Ym1pdEJ0bigpO1xuZXhwb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZUVkaXRUYXNrRm9ybSB9O1xuIiwiaW1wb3J0IHsgYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzayB9IGZyb20gJy4vdG9kYXlUYXNrLmpzJztcblxuaW1wb3J0IHsgVGFzaywgdG9nZ2xlVGFza0Zvcm0sIHJlbmRlclRhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xuXG5pbXBvcnQgeyBjcmVhdGVEZWxldGVQcm9qZWN0QnRuIH0gZnJvbSAnLi9yZW1vdmVQcm9qZWN0LmpzJztcblxuaW1wb3J0IHsgc2V0UHJvamVjdExvY2FsU3RvcmFnZSB9IGZyb20gJy4vc2V0UHJvamVjdExvY2FsU3RvcmFnZS5qcyc7XG5cbmltcG9ydCB7IGNyZWF0ZUVkaXRQcm9qZWN0QnRuIH0gZnJvbSAnLi9lZGl0UHJvamVjdE5hbWUuanMnO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmNsYXNzIFByb2plY3Qge1xuICBzdGF0aWMgI2lkID0gMDtcbiAgdGFza0lkID0gMDtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIHRoaXMuaWQgPSBQcm9qZWN0Lm5leHRJZCgpO1xuICB9XG5cbiAgc3RhdGljIG5leHRJZCgpIHtcbiAgICByZXR1cm4gUHJvamVjdC4jaWQrKztcbiAgfVxuXG4gIHN0YXRpYyBnZXRJZCgpIHtcbiAgICByZXR1cm4gUHJvamVjdC4jaWQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpIHtcbiAgICBQcm9qZWN0LiNpZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzSWQnKSk7XG4gIH1cbiAgc3RhdGljIHNldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzSWQnLCBKU09OLnN0cmluZ2lmeShQcm9qZWN0LmdldElkKCkpKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhclByb2plY3RzSWQoKSB7XG4gICAgUHJvamVjdC4jaWQgPSAwO1xuICB9XG5cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQ7XG4gIH1cblxuICBuZXh0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJZCsrO1xuICB9XG5cbiAgZ2V0VGFza0lkKCkge1xuICAgIHJldHVybiB0aGlzLnRhc2tJZDtcbiAgfVxuXG4gIHNldExvY2FsU3RvcmFnZVByb2plY3RJZCgpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdElkJywgSlNPTi5zdHJpbmdpZnkodGhpcy5nZXRJZCgpKSk7XG4gIH1cblxuICBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0SWQoKSB7XG4gICAgdGhpcy50YXNrSWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0SWQnKSk7XG4gIH1cblxuICBhZGRUYXNrKHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVkYXRlLCB0YXNrUHJpb3JpdHkpIHtcbiAgICB0aGlzLnRhc2tzLnB1c2goXG4gICAgICBuZXcgVGFzayhcbiAgICAgICAgdGhpcy5pZCxcbiAgICAgICAgdGhpcy5uZXh0VGFza0lkKCksXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb24sXG4gICAgICAgIHRhc2tEdWVkYXRlLFxuICAgICAgICB0YXNrUHJpb3JpdHksXG4gICAgICAgIGZhbHNlXG4gICAgICApXG4gICAgKTtcbiAgICB1cGRhdGVQcm9qZWN0KCk7XG4gIH1cblxuICBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGxldCB0YXNrSW5kZXggPSB0aGlzLnRhc2tzLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIHRoaXMudGFza3Muc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgdXBkYXRlUHJvamVjdCgpO1xuICB9XG5cbiAgdXBkYXRlVGFzayh0YXNrSWQsIHRhc2tOYW1lLCB0YXNrRGVzLCB0YXNrRHVlZGF0ZSwgdGFza1ByaW9yaXR5KSB7XG4gICAgbGV0IHRhc2tJbmRleCA9IHRoaXMudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLm5hbWUgPSB0YXNrTmFtZTtcbiAgICB0aGlzLnRhc2tzW3Rhc2tJbmRleF0uZGVzY3JpcHRpb24gPSB0YXNrRGVzO1xuICAgIHRoaXMudGFza3NbdGFza0luZGV4XS5kdWVkYXRlID0gdGFza0R1ZWRhdGU7XG4gICAgdGhpcy50YXNrc1t0YXNrSW5kZXhdLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5O1xuICAgIHVwZGF0ZVByb2plY3QoKTtcbiAgfVxufVxuXG5zZXRQcm9qZWN0TG9jYWxTdG9yYWdlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICB1cGRhdGVQcm9qZWN0KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0Q29sbGVjdGlvbicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbi8vIGFkZCBwcm9qZWN0XG5cbmNvbnN0IHNob3dQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXByb2plY3QtZm9ybS1idG4nKTtcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1jb250YWluZXInKTtcbmNvbnN0IGNhbmNlbEZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXByb2plY3QtYnRuJyk7XG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RfbmFtZScpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdC1idG4nKTtcblxuc2hvd1Byb2plY3RGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5jYW5jZWxGb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgUHJvamVjdC5nZXRMb2NhbFN0b3JhZ2VQcm9qZWN0c0lkKCk7XG4gIGNyZWF0ZVByb2plY3QoaW5wdXRQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIFByb2plY3Quc2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICBpbnB1dFByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgYWRkTmV3UHJvamVjdE5hdmJhcigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdE5hdmJhcigpIHtcbiAgY29uc3QgcHJvamVjdE5hdkxpc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICcucHJvamVjdC1saXN0LWNvbnRhaW5lcidcbiAgKTtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHByb2plY3QudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0cy5sZW5ndGggLSAxXS5uYW1lfWA7XG4gIHByb2plY3QuZGF0YXNldC5pbmRleCA9IGAke1Byb2plY3QuZ2V0SWQoKSAtIDF9YDtcbiAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hdi1pdGVtJyk7XG5cbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgcmVuZGVyUHJvamVjdENvbnRlbnQoZSk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2soZSk7XG4gIH0pO1xuXG4gIHByb2plY3ROYXZMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0TmF2YmFyKCkge1xuICBjb25zdCBwcm9qZWN0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RDb2xsZWN0aW9uJykpO1xuICBjb25zdCBwcm9qZWN0TmF2TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJ1xuICApO1xuXG4gIHByb2plY3REYXRhLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBwcm9qZWN0RGl2LnRleHRDb250ZW50ID0gYCR7cHJvamVjdC5uYW1lfWA7XG4gICAgcHJvamVjdERpdi5kYXRhc2V0LmluZGV4ID0gYCR7cHJvamVjdC5pZH1gO1xuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYXYtaXRlbScpO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICByZW5kZXJQcm9qZWN0Q29udGVudChlKTtcbiAgICAgIHJlbmRlclByb2plY3RUYXNrKGUpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdE5hdkxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0Q29udGVudChlKSB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcbiAgY29uc3QgcHJvamVjdENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcHJvamVjdEJ0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyKCk7XG4gIHByb2plY3RCdG5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuLXdyYXBwZXInKTtcblxuICBwcm9qZWN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVTaG93VGFza0Zvcm1CdG4oKSk7XG4gIHByb2plY3RCdG5XcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRQcm9qZWN0QnRuKCkpO1xuICBwcm9qZWN0QnRuV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVQcm9qZWN0QnRuKCkpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRlbnQtY29udGFpbmVyJyk7XG4gIHByb2plY3RDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RIZWFkZXJDb250ZW50KGUpKTtcbiAgcHJvamVjdENvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bldyYXBwZXIpO1xuICBwcm9qZWN0Q29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrQ29udGFpbmVyKCkpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250ZW50Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEhlYWRlckNvbnRlbnQoZSkge1xuICBjb25zdCBwcm9qZWN0SGVhZGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4XG4gICk7XG5cbiAgcHJvamVjdEhlYWRlck5hbWUudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0c1twcm9qZWN0SW5kZXhdLm5hbWV9YDtcbiAgcHJvamVjdEhlYWRlck5hbWUuZGF0YXNldC5pbmRleCA9IGAke2UudGFyZ2V0LmRhdGFzZXQuaW5kZXh9YDtcbiAgcHJvamVjdEhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1oZWFkZXItbmFtZScpO1xuICByZXR1cm4gcHJvamVjdEhlYWRlck5hbWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDb250YWluZXIoKSB7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGFpbmVyJyk7XG4gIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93VGFza0Zvcm1CdG4oKSB7XG4gIGNvbnN0IHNob3dUYXNrRm9ybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzaG93VGFza0Zvcm1CdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICBzaG93VGFza0Zvcm1CdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWJ0bicpO1xuICBzaG93VGFza0Zvcm1CdG4udGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICBzaG93VGFza0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHRvZ2dsZVRhc2tGb3JtKCk7XG4gIH0pO1xuICByZXR1cm4gc2hvd1Rhc2tGb3JtQnRuO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRDb250YWluZXIoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1jb250YWluZXInKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2soZSkge1xuICBsZXQgcHJvamVjdEluZGV4O1xuICBpZiAodHlwZW9mIGUgPT09ICdudW1iZXInKSB7XG4gICAgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBlKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICApO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJbmRleF07XG5cbiAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckRlZmF1bHRBbGxUYXNrQ29udGVudCgpIHtcbiAgLy8gcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAvLyAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAvLyAgICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgLy8gICB9KTtcbiAgLy8gfSk7XG4gIGNvbnN0IHRhc2tzID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRlZFRhc2tzID0gdGFza3Muc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmICghKGEuZHVlZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICBhLmR1ZWRhdGUgPSBuZXcgRGF0ZShhLmR1ZWRhdGUpO1xuICAgIH1cbiAgICBpZiAoIShiLmR1ZWRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgYi5kdWVkYXRlID0gbmV3IERhdGUoYi5kdWVkYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGEuZHVlZGF0ZSAtIGIuZHVlZGF0ZTtcbiAgfSk7XG5cbiAgc29ydGVkVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIHJlbmRlclRhc2sodGFzayk7XG4gIH0pO1xufVxuXG5yZW5kZXJEZWZhdWx0QWxsVGFza0NvbnRlbnQoKTtcblxuZnVuY3Rpb24gY2xlYXJUYXNrQ29udGFpbmVyKCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stY29udGFpbmVyJyk7XG4gIHdoaWxlICh0YXNrQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgdGFza0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0YXNrQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJOYW1lKG5hbWUpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LWNvbnRhaW5lcicpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29uc3QgcHJvamVjdEhlYWRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbnRhaW5lcicpO1xuICBwcm9qZWN0SGVhZGVyTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWhlYWRlci1uYW1lJyk7XG4gIHByb2plY3RIZWFkZXJOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyTmFtZSk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG59XG5cbmNvbnN0IGFsbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLXRhc2snKTtcblxuZnVuY3Rpb24gcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZShuYW1lKSB7XG4gIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICBjcmVhdGVIZWFkZXJOYW1lKG5hbWUpO1xuICByZW5kZXJEZWZhdWx0QWxsVGFza0NvbnRlbnQoKTtcbn1cbmFsbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lKCdBbGwgVGFzaycpO1xufSk7XG5cbmV4cG9ydCB7XG4gIFByb2plY3QsXG4gIGNyZWF0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIHByb2plY3RzLFxuICByZW5kZXJQcm9qZWN0TmF2YmFyLFxuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lLFxuICByZW5kZXJQcm9qZWN0VGFzayxcbiAgY2xlYXJDb250ZW50Q29udGFpbmVyLFxuICBjcmVhdGVIZWFkZXJOYW1lLFxufTtcbiIsImltcG9ydCB7XG4gIHByb2plY3RzLFxuICB1cGRhdGVQcm9qZWN0LFxuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lLFxufSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZVByb2plY3RCdG4oKSB7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RGb3JtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uaWQgPSBcImRlbGV0ZS1wcm9qZWN0LWZvcm0tYnRuXCI7XG4gIGRlbGV0ZVByb2plY3RGb3JtQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm0tYnRuXCIpO1xuICBkZWxldGVQcm9qZWN0Rm9ybUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFByb2plY3RcIjtcbiAgZGVsZXRlUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURlbFByb2plY3RQb3B1cCk7XG4gIC8vIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVQcm9qZWN0KGRlbGV0ZVByb2plY3RGb3JtQnRuKTtcbiAgcmV0dXJuIGRlbGV0ZVByb2plY3RGb3JtQnRuO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgbGV0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmZpbmRJbmRleCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcblxuICBwcm9qZWN0cy5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgdXBkYXRlUHJvamVjdCgpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KCkge1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWxldGUtcHJvamVjdC1mb3JtLWJ0blwiKTtcbiAgY29uc3QgcHJvamVjdEJ0bldyYXBwZXIgPSBkZWxldGVQcm9qZWN0QnRuLnBhcmVudE5vZGU7XG4gIGNvbnN0IHByb2plY3RDb250ZW50Q29udGFpbmVyID0gcHJvamVjdEJ0bldyYXBwZXIucGFyZW50Tm9kZTtcbiAgY29uc3QgcHJvamVjdElkID0gK3Byb2plY3RDb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQuZGF0YXNldC5pbmRleDtcblxuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVQcm9qZWN0KGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGlzRGVsUHJvamVjdCkge1xuICAgICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURlbFByb2plY3RQb3B1cCgpIHtcbiAgY29uc3QgZGVsUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLXByb2plY3QtcG9wdXBcIik7XG5cbiAgaWYgKFxuICAgIGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcbiAgICBkZWxQcm9qZWN0Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwiXCJcbiAgKSB7XG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9IGVsc2UgaWYgKGRlbFByb2plY3RDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZGVsUHJvamVjdENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3RZZXNCdG4oKSB7XG4gIGNvbnN0IGRlbFByb2plY3RZZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlbC1wcm9qZWN0LXllcy1idG5cIik7XG4gIGRlbFByb2plY3RZZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRvZ2dsZURlbFByb2plY3RQb3B1cCgpO1xuXG4gICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgIHJlbW92ZVByb2plY3RGcm9tRE9NKCk7XG4gICAgcmVSZW5kZXJQcm9qZWN0SGVhZGVyTmFtZShcIkFsbCBUYXNrXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3ROb0J0bigpIHtcbiAgY29uc3QgZGVsUHJvamVjdE5vQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZWwtcHJvamVjdC1uby1idG5cIik7XG4gIGRlbFByb2plY3ROb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlRGVsUHJvamVjdFBvcHVwKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0RnJvbURPTSgpIHtcbiAgY29uc3QgcHJvamVjdExpc3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbGlzdC1jb250YWluZXJcIik7XG4gIGNvbnN0IHByb2plY3REYXRhc2V0SW5kZXggPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWhlYWRlci1uYW1lXCIpXG4gICAgLmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9IEFycmF5LmZyb20ocHJvamVjdExpc3ROYXYuY2hpbGROb2RlcykuZmluZEluZGV4KFxuICAgIChlbGVtZW50KSA9PiArZWxlbWVudC5kYXRhc2V0LmluZGV4ID09PSBwcm9qZWN0RGF0YXNldEluZGV4XG4gICk7XG4gIHByb2plY3RMaXN0TmF2LnJlbW92ZUNoaWxkKHByb2plY3RMaXN0TmF2LmNoaWxkTm9kZXNbcHJvamVjdEluZGV4XSk7XG59XG5hZGRFdmVudExpc3RlbmVyRGVsUHJvamVjdFllc0J0bigpO1xuYWRkRXZlbnRMaXN0ZW5lckRlbFByb2plY3ROb0J0bigpO1xuXG5leHBvcnQge1xuICByZW1vdmVQcm9qZWN0LFxuICBhZGRFdmVudExpc3RlbmVyUmVtb3ZlUHJvamVjdCxcbiAgdG9nZ2xlRGVsUHJvamVjdFBvcHVwLFxuICBjcmVhdGVEZWxldGVQcm9qZWN0QnRuLFxufTtcbiIsImltcG9ydCB7IHByb2plY3RzLCByZW5kZXJQcm9qZWN0VGFzayB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09ICt0YXNrQ29udGVudC5kYXRhc2V0LnByb2plY3RJbmRleFxuICApO1xuICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tJZCA9IHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbdGFza0luZGV4XS5pZDtcbiAgcHJvamVjdHNbcHJvamVjdEluZGV4XS5kZWxldGVUYXNrKHRhc2tJZCk7XG4gIHJlbW92ZVRhc2tGcm9tRE9NKHRhc2tJZCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2tGcm9tRE9NKHRhc2tJZCkge1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgdGFza0lkSW5kZXggPSBBcnJheS5mcm9tKHRhc2tDb250YWluZXIuY2hpbGROb2RlcykuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiArdGFzay5kYXRhc2V0LnRhc2tJbmRleCA9PT0gdGFza0lkXG4gICk7XG4gIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5jaGlsZE5vZGVzW3Rhc2tJZEluZGV4XSk7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrKGJ1dHRvbikge1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlVGFzayhlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW1vdmVUYXNrIH07XG4iLCJpbXBvcnQgeyBQcm9qZWN0LCBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmZ1bmN0aW9uIGlzTG9jYWxTdG9yYWdlUHJvamVjdHNFbXB0eSgpIHtcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0Q29sbGVjdGlvblwiKSA9PT0gbnVsbCkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3RMb2NhbFN0b3JhZ2UoKSB7XG4gIGlmIChpc0xvY2FsU3RvcmFnZVByb2plY3RzRW1wdHkoKSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdENvbGxlY3Rpb25cIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgICBQcm9qZWN0LmNsZWFyUHJvamVjdHNJZCgpO1xuICAgIFByb2plY3Quc2V0TG9jYWxTdG9yYWdlUHJvamVjdHNJZCgpO1xuICB9IGVsc2Uge1xuICAgIGxvYWRQcm9qZWN0c0Zyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICBQcm9qZWN0LmdldExvY2FsU3RvcmFnZVByb2plY3RzSWQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICBjb25zdCBzdG9yZVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RDb2xsZWN0aW9uXCIpKTtcblxuICBzdG9yZVByb2plY3RzLmZvckVhY2goKHN0b3JlUHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3Qoc3RvcmVQcm9qZWN0Lm5hbWUpO1xuICAgIHByb2plY3QuaWQgPSBzdG9yZVByb2plY3QuaWQ7XG4gICAgcHJvamVjdC50YXNrcyA9IHN0b3JlUHJvamVjdC50YXNrcztcbiAgICBwcm9qZWN0LnRhc2tJZCA9IHN0b3JlUHJvamVjdC50YXNrSWQ7XG5cbiAgICBwcm9qZWN0c1tpbmRleF0gPSBwcm9qZWN0O1xuICB9KTtcbn1cblxuZXhwb3J0IHsgc2V0UHJvamVjdExvY2FsU3RvcmFnZSB9O1xuIiwiLy8gdGhpcyBpcyB0YXNrLmpzXG5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAgfSBmcm9tICcuL3Rhc2tEZXRhaWxQb3B1cC5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyB9IGZyb20gJy4vdG9nZ2xlVGFza1N0YXR1cy5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyUmVtb3ZlVGFzayB9IGZyb20gJy4vcmVtb3ZlVGFzay5qcyc7XG5pbXBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9nZ2xlRWRpdFRhc2tGb3JtIH0gZnJvbSAnLi9lZGl0VGFza0luZm8uanMnO1xuaW1wb3J0IHsgZm9ybWF0dGluZ0RhdGUgfSBmcm9tICcuL2RhdGUuanMnO1xuXG5pbXBvcnQge1xuICBhZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IsXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIHRhc2tJbnB1dERlcyxcbiAgdGFza0lucHV0RGVzRXJyb3JUZXh0LFxuICB0YXNrSW5wdXREYXRlLFxuICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LFxuICB0YXNrRm9ybSxcbn0gZnJvbSAnLi90YXNrVmFsaWRhdGUuanMnO1xuXG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIHRhc2tJbnB1dE5hbWUsXG4gIHRhc2tJbnB1dE5hbWVFcnJvclRleHQsXG4gIGBZb3UgY2FuJ3Qgc2tpcCB0aGlzIHBhcnRgXG4pO1xuXG5hZGRFdmVudExpc3RlbmVyVGFza0lucHV0RXJyb3IoXG4gIHRhc2tJbnB1dERlcyxcbiAgdGFza0lucHV0RGVzRXJyb3JUZXh0LFxuICBgWW91IGNhbid0IHNraXAgdGhpcyBwYXJ0YFxuKTtcbmFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgdGFza0lucHV0RGF0ZSxcbiAgdGFza0lucHV0RGF0ZUVycm9yVGV4dCxcbiAgYFlvdSBjYW4ndCBza2lwIHRoaXMgcGFydGBcbik7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0SWQsIGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHksIHN0YXR1cykge1xuICAgIHRoaXMucHJvamVjdElkID0gcHJvamVjdElkO1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRm9ybSgpIHtcbiAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1mb3JtJyk7XG4gIGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJyB8fCB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIGlmICh0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgdGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tGb3JtVmFsdWUoZSkge1xuICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfbmFtZScpO1xuICBjb25zdCB0YXNrSW5wdXREZXNjaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZGVzY3JpcHRpb24nKTtcbiAgY29uc3QgdGFza0lucHV0RHVlZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2R1ZV9kYXRlJyk7XG4gIGNvbnN0IHRhc2tJbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfcHJpb3JpdHknKTtcblxuICB0YXNrSW5wdXROYW1lLnZhbHVlID0gJyc7XG4gIHRhc2tJbnB1dERlc2NpcHRpb24udmFsdWUgPSAnJztcbiAgdGFza0lucHV0RHVlZGF0ZS52YWx1ZSA9ICcnO1xuICB0YXNrSW5wdXRQcmlvcml0eS52YWx1ZSA9ICcxJztcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckFkZFRhc2tCdG4oYnV0dG9uKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCF0YXNrRm9ybS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIGlmICghdGFza0lucHV0RGF0ZS52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0YXNrSW5wdXREYXRlLmZvY3VzKCk7XG4gICAgICAgIHRhc2tJbnB1dERhdGVFcnJvclRleHQudGV4dENvbnRlbnQgPSAnUGxlYXNlIEZpbGwgb3V0IHRoaXMgZmllbGQnO1xuICAgICAgICB0YXNrSW5wdXREYXRlRXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tJbnB1dERlcy52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0YXNrSW5wdXREZXMuZm9jdXMoKTtcbiAgICAgICAgdGFza0lucHV0RGVzRXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgdGFza0lucHV0RGVzRXJyb3JUZXh0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRhc2tJbnB1dE5hbWUudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgdGFza0lucHV0TmFtZS5mb2N1cygpO1xuICAgICAgICB0YXNrSW5wdXROYW1lRXJyb3JUZXh0LnRleHRDb250ZW50ID0gJ1BsZWFzZSBGaWxsIG91dCB0aGlzIGZpZWxkJztcbiAgICAgICAgdGFza0lucHV0TmFtZUVycm9yVGV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNyZWF0ZVRhc2soKTtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICAgIGNsZWFyVGFza0Zvcm1WYWx1ZSgpO1xuICAgIHJlbmRlck5ld1Rhc2soKTtcbiAgfSk7XG59XG5cbmFkZEV2ZW50TGlzdGVuZXJBZGRUYXNrQnRuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzay1idG4nKSk7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJDYW5jZWxUYXNrRm9ybShidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB0b2dnbGVUYXNrRm9ybSgpO1xuICAgIGNsZWFyVGFza0Zvcm1WYWx1ZSgpO1xuICB9KTtcbn1cbmFkZEV2ZW50TGlzdGVuZXJDYW5jZWxUYXNrRm9ybShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLXRhc2stYnRuJykpO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGUpIHtcbiAgY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX25hbWUnKTtcbiAgY29uc3QgdGFza0lucHV0RGVzY2lwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHRhc2tJbnB1dER1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza19kdWVfZGF0ZScpO1xuICBjb25zdCB0YXNrSW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX3ByaW9yaXR5Jyk7XG5cbiAgY29uc3QgcHJvamVjdFRhcmdldEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PlxuICAgICAgcHJvamVjdC5pZCA9PT1cbiAgICAgICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXItbmFtZScpLmRhdGFzZXQuaW5kZXhcbiAgKTtcblxuICBjb25zdCB0YXNrSW5wdXREYXRlVmFsdWUgPSBuZXcgRGF0ZSh0YXNrSW5wdXREdWVkYXRlLnZhbHVlKTtcblxuICBpZiAoXG4gICAgdGFza0lucHV0TmFtZS52YWx1ZSA9PT0gJycgfHxcbiAgICB0YXNrSW5wdXREZXNjaXB0aW9uLnZhbHVlID09PSAnJyB8fFxuICAgIHRhc2tJbnB1dER1ZWRhdGUudmFsdWUgPT09ICcnIHx8XG4gICAgdGFza0lucHV0UHJpb3JpdHkudmFsdWUgPT09ICcnXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9qZWN0c1twcm9qZWN0VGFyZ2V0SW5kZXhdLmFkZFRhc2soXG4gICAgdGFza0lucHV0TmFtZS52YWx1ZSxcbiAgICB0YXNrSW5wdXREZXNjaXB0aW9uLnZhbHVlLFxuICAgIHRhc2tJbnB1dERhdGVWYWx1ZSxcbiAgICB0YXNrSW5wdXRQcmlvcml0eS52YWx1ZSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKHRhc2spIHtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNvbnRhaW5lcicpO1xuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IHRhc2tDaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrU3RhdHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza0RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrRHVlZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGFza1Nob3dEZXRhaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGFza1Nob3dEZXRhaWxCdG5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCB0YXNrRWRpdERldGFpbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCB0YXNrRWRpdERldGFpbEJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHRhc2tEZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgdGFza0RlbGV0ZUJ0blNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NsaWNrJyk7XG4gIHRhc2tFZGl0RGV0YWlsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdjbGljaycpO1xuICB0YXNrRGVsZXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdjbGljaycpO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuU3Bhbi50ZXh0Q29udGVudCA9ICdpbmZvJztcbiAgdGFza0VkaXREZXRhaWxCdG5TcGFuLnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICB0YXNrRGVsZXRlQnRuU3Bhbi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG5cbiAgdGFza1Nob3dEZXRhaWxCdG5TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgdGFza0VkaXREZXRhaWxCdG5TcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgdGFza0RlbGV0ZUJ0blNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuXG4gIHRhc2tTaG93RGV0YWlsQnRuLmFwcGVuZENoaWxkKHRhc2tTaG93RGV0YWlsQnRuU3Bhbik7XG4gIHRhc2tFZGl0RGV0YWlsQnRuLmFwcGVuZENoaWxkKHRhc2tFZGl0RGV0YWlsQnRuU3Bhbik7XG4gIHRhc2tEZWxldGVCdG4uYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0blNwYW4pO1xuXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1jb250YWluZXInKTtcbiAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50Jyk7XG4gIHRhc2tMaXN0LmRhdGFzZXQucHJvamVjdEluZGV4ID0gdGFzay5wcm9qZWN0SWQ7XG4gIHRhc2tMaXN0LmRhdGFzZXQudGFza0luZGV4ID0gdGFzay5pZDtcbiAgdGFza0NoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2hlY2tib3gnKTtcbiAgdGFza1N0YXR1cy5pZCA9ICd0YXNrLXN0YXR1cyc7XG4gIHRhc2tTdGF0dXMuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG5cbiAgdGFza05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gIHRhc2tEZXMuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjcmlwdGlvbicpO1xuICB0YXNrRHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZWRhdGUnKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3Rhc2stcHJpb3JpdHknKTtcbiAgaWYgKHRhc2suc3RhdHVzID09PSB0cnVlKSB7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1zdGF0dXMtdHJ1ZScpO1xuICB9XG4gIHRhc2tTdGF0dXMuY2hlY2tlZCA9IHRhc2suc3RhdHVzO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2submFtZTtcbiAgdGFza0Rlcy50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEdWVkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0dGluZ0RhdGUodGFzay5kdWVkYXRlKTtcbiAgLy8gdGFza0R1ZWRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZWRhdGU7XG5cbiAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9ICdMb3cnO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2xvdy1wcmlvcml0eScpO1xuICB9XG4gIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcbiAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdtZWRpdW0tcHJpb3JpdHknKTtcbiAgfVxuICBpZiAodGFzay5wcmlvcml0eSA9PT0gJzMnKSB7XG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ2hpZ2gtcHJpb3JpdHknKTtcbiAgfVxuXG4gIHRhc2tDaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0NoZWNrQm94Q29udGFpbmVyKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrRGVzKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0R1ZWRhdGUpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrU2hvd0RldGFpbEJ0bik7XG4gIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFZGl0RGV0YWlsQnRuKTtcbiAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZUJ0bik7XG5cbiAgYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZVRhc2tTdGF0dXModGFza1N0YXR1cyk7XG4gIGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAodGFza1Nob3dEZXRhaWxCdG4pO1xuICBhZGRFdmVudExpc3RlbmVyUmVtb3ZlVGFzayh0YXNrRGVsZXRlQnRuKTtcbiAgYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZUVkaXRUYXNrRm9ybSh0YXNrRWRpdERldGFpbEJ0bik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJOZXdUYXNrKCkge1xuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXG4gICAgKHByb2plY3QpID0+XG4gICAgICBwcm9qZWN0LmlkID09PVxuICAgICAgK2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlci1uYW1lJykuZGF0YXNldC5pbmRleFxuICApO1xuICByZW5kZXJUYXNrKFxuICAgIHByb2plY3RzW3Byb2plY3RJbmRleF0udGFza3NbcHJvamVjdHNbcHJvamVjdEluZGV4XS50YXNrcy5sZW5ndGggLSAxXVxuICApO1xufVxuXG5leHBvcnQgeyBUYXNrLCB0b2dnbGVUYXNrRm9ybSwgY2xlYXJUYXNrRm9ybVZhbHVlLCByZW5kZXJUYXNrIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGZvcm1hdHRpbmdEYXRlIH0gZnJvbSBcIi4vZGF0ZS5qc1wiO1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0bigpIHtcbiAgY29uc3QgdGFza0RldGFpbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjdGFzay1wb3B1cC1kZXRhaWwtY29udGFpbmVyXCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXBvcHVwLWNsb3NlLWJ0blwiKTtcbiAgdGFza0RldGFpbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRhc2tEZXRhaWxDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbFBvcHVwKGUpIHtcbiAgY29uc3QgdGFza0NvbnRlbnQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG5cbiAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdHMuZmluZEluZGV4KFxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSArdGFza0NvbnRlbnQuZGF0YXNldC5wcm9qZWN0SW5kZXhcbiAgKTtcblxuICBjb25zdCB0YXNrSWQgPSBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzLmZpbmRJbmRleChcbiAgICAodGFzaykgPT4gdGFzay5pZCA9PT0gK3Rhc2tDb250ZW50LmRhdGFzZXQudGFza0luZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cEhlYWRlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGV0YWlsLWhlYWRlci10ZXh0XCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtcHJvamVjdC1uYW1lLXZhbHVlXCJcbiAgKTtcbiAgY29uc3QgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtcHJpb3JpdHktdmFsdWVcIlxuICApO1xuXG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZHVlZGF0ZS12YWx1ZVwiXG4gICk7XG4gIGNvbnN0IHRhc2tEZXRhaWxQb3B1cERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiN0YXNrLXBvcHVwLWRlc2NyaXB0aW9uLXZhbHVlXCJcbiAgKTtcbiAgdGFza0RldGFpbFBvcHVwSGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5uYW1lfWA7XG4gIHRhc2tEZXRhaWxQb3B1cFByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS5uYW1lfWA7XG4gIGlmIChwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0ucHJpb3JpdHkgPT09IFwiM1wiKSB7XG4gICAgdGFza0RldGFpbFBvcHVwUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID09PSBcIjJcIikge1xuICAgIHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgfVxuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnByaW9yaXR5ID09PSBcIjFcIikge1xuICAgIHRhc2tEZXRhaWxQb3B1cFByaW9yaXR5LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgfVxuXG4gIHRhc2tEZXRhaWxQb3B1cER1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0aW5nRGF0ZShcbiAgICBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uZHVlZGF0ZVxuICApfWA7XG5cbiAgLy8gdGFza0RldGFpbFBvcHVwRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3Byb2plY3RzW3Byb2plY3RJZF0udGFza3NbdGFza0lkXS5kdWVkYXRlfWA7XG4gIHRhc2tEZXRhaWxQb3B1cERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7cHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLmRlc2NyaXB0aW9ufWA7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJSZW5kZXJUYXNrRGV0YWlsUG9wdXAoYnV0dG9uKSB7XG4gIGNvbnN0IHRhc2tEZXRhaWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI3Rhc2stcG9wdXAtZGV0YWlsLWNvbnRhaW5lclwiXG4gICk7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICByZW5kZXJUYXNrRGV0YWlsUG9wdXAoZSk7XG4gICAgdGFza0RldGFpbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbn1cbmV4cG9ydCB7XG4gIGFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4sXG4gIHJlbmRlclRhc2tEZXRhaWxQb3B1cCxcbiAgYWRkRXZlbnRMaXN0ZW5lclJlbmRlclRhc2tEZXRhaWxQb3B1cCxcbn07XG4iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0JztcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZm9ybScpO1xuY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX25hbWUnKTtcbmNvbnN0IHRhc2tJbnB1dE5hbWVFcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3Rhc2tfbmFtZSsudGFzay1pbnB1dC1lcnJvci10ZXh0J1xuKTtcbmNvbnN0IHRhc2tJbnB1dERlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrX2Rlc2NyaXB0aW9uJyk7XG5jb25zdCB0YXNrSW5wdXREZXNFcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3Rhc2tfZGVzY3JpcHRpb24rLnRhc2staW5wdXQtZXJyb3ItdGV4dCdcbik7XG5jb25zdCB0YXNrSW5wdXREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tfZHVlX2RhdGUnKTtcbmNvbnN0IHRhc2tJbnB1dERhdGVFcnJvclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAnI3Rhc2tfZHVlX2RhdGUrLnRhc2staW5wdXQtZXJyb3ItdGV4dCdcbik7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUYXNrSW5wdXRFcnJvcihcbiAgaW5wdXRFbGVtZW50LFxuICBlcnJvclNob3dFbGVtZW50LFxuICBlcnJvclRleHRcbikge1xuICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZXJyb3JTaG93RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgZXJyb3JTaG93RWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yVGV4dDtcbiAgICB9XG4gICAgaWYgKGlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgZXJyb3JTaG93RWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuICB9KTtcbn1cblxuYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yKFxuICB0YXNrSW5wdXROYW1lLFxuICB0YXNrSW5wdXROYW1lRXJyb3JUZXh0LFxuICBgWW91IGNhbid0IHNraXAgdGhpcyBwYXJ0YFxuKTtcblxuZXhwb3J0IHtcbiAgYWRkRXZlbnRMaXN0ZW5lclRhc2tJbnB1dEVycm9yLFxuICB0YXNrSW5wdXROYW1lLFxuICB0YXNrSW5wdXROYW1lRXJyb3JUZXh0LFxuICB0YXNrSW5wdXREZXMsXG4gIHRhc2tJbnB1dERlc0Vycm9yVGV4dCxcbiAgdGFza0lucHV0RGF0ZSxcbiAgdGFza0lucHV0RGF0ZUVycm9yVGV4dCxcbiAgdGFza0Zvcm0sXG59O1xuIiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQge1xuICByZVJlbmRlclByb2plY3RIZWFkZXJOYW1lLFxuICBjbGVhckNvbnRlbnRDb250YWluZXIsXG4gIGNyZWF0ZUhlYWRlck5hbWUsXG59IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IHJlbmRlclRhc2sgfSBmcm9tIFwiLi90YXNrLmpzXCI7XG5cbmZ1bmN0aW9uIGlzVG9kYXkoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIH1cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldERhdGUoKTtcbiAgaWYgKHRvZGF5ID09PSBkYXRlLmdldERhdGUoKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9kYXlUYXNrKCkge1xuICBjb25zdCB0b2RheSA9IFtdO1xuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAoaXNUb2RheSh0YXNrLmR1ZWRhdGUpKSB7XG4gICAgICAgIHRvZGF5LnB1c2godGFzayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICBjb25zdCBzb3J0ZWRUb2RheVByaW9yaXR5VGFzayA9IHNvcnRUYXNrUHJpb3JpdHlIaWdoVG9Mb3codG9kYXkpO1xuICBzb3J0ZWRUb2RheVByaW9yaXR5VGFzay5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgcmVuZGVyVGFzayh0YXNrKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRUYXNrUHJpb3JpdHlIaWdoVG9Mb3coYXJyKSB7XG4gIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE51bWJlcihhLnByaW9yaXR5KSAtIE51bWJlcihiLnByaW9yaXR5KTtcbiAgfSk7XG4gIGFyci5yZXZlcnNlKCk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJUb2RheVRhc2soKSB7XG4gIGNvbnN0IHRvZGF5VGFza05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktdGFza1wiKTtcbiAgdG9kYXlUYXNrTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaGV5XCIpO1xuICAgIGNsZWFyQ29udGVudENvbnRhaW5lcigpO1xuICAgIGNyZWF0ZUhlYWRlck5hbWUoXCJUb2RheSBUYXNrXCIpO1xuICAgIHJlbmRlclRvZGF5VGFzaygpO1xuICB9KTtcbn1cblxuYWRkRXZlbnRMaXN0ZW5lclRvZGF5VGFzaygpO1xuXG5leHBvcnQgeyBhZGRFdmVudExpc3RlbmVyVG9kYXlUYXNrIH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0cywgdXBkYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcblxuZnVuY3Rpb24gdG9nZ2xlVGFza1N0YXR1cyhlKSB7XG4gIGNvbnN0IHRhc2tDb250ZW50Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuXG4gIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RzLmZpbmRJbmRleChcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gK3Rhc2tDb250ZW50Q29udGFpbmVyLmRhdGFzZXQucHJvamVjdEluZGV4XG4gICk7XG4gIGNvbnN0IHRhc2tJZCA9IHByb2plY3RzW3Byb2plY3RJZF0udGFza3MuZmluZEluZGV4KFxuICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSArdGFza0NvbnRlbnRDb250YWluZXIuZGF0YXNldC50YXNrSW5kZXhcbiAgKTtcblxuICBwcm9qZWN0c1twcm9qZWN0SWRdLnRhc2tzW3Rhc2tJZF0uc3RhdHVzID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgdXBkYXRlUHJvamVjdCgpO1xuICBpZiAocHJvamVjdHNbcHJvamVjdElkXS50YXNrc1t0YXNrSWRdLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICB0YXNrQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwidGFzay1zdGF0dXMtdHJ1ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICB0YXNrQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1zdGF0dXMtdHJ1ZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9nZ2xlVGFza1N0YXR1cyhidXR0b24pIHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHRvZ2dsZVRhc2tTdGF0dXMoZSk7XG4gIH0pO1xufVxuZXhwb3J0IHsgdG9nZ2xlVGFza1N0YXR1cywgYWRkRXZlbnRMaXN0ZW5lclRvZ2dsZVRhc2tTdGF0dXMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3ROYXZiYXIgfSBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3QuanNcIjtcbmltcG9ydCB7IGFkZEV2ZW50TGlzdGVuZXJDbG9zZVRhc2tEZXRhaWxCdG4gfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tEZXRhaWxQb3B1cC5qc1wiO1xuaW1wb3J0IEdpdEh1YkxvZ28gZnJvbSBcIi4vaW1hZ2VzL2dpdGh1Yi1tYXJrLnN2Z1wiO1xucmVuZGVyUHJvamVjdE5hdmJhcigpO1xuYWRkRXZlbnRMaXN0ZW5lckNsb3NlVGFza0RldGFpbEJ0bigpO1xuZnVuY3Rpb24gYWRkRm9vdGVyTG9nbygpIHtcbiAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyLWxpbmtcIik7XG4gIGNvbnN0IGxvZ29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjb25zdCBnaXRIdWJMb2dvID0gbmV3IEltYWdlKCk7XG4gIGdpdEh1YkxvZ28uc3JjID0gR2l0SHViTG9nbztcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyLWdpdGh1Yi1sb2dvXCIpO1xuICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xufVxuYWRkRm9vdGVyTG9nbygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9