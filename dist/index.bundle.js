/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss ***!
  \********************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-wrap: wrap;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-color: rgb(255, 239, 215);\n  font-family: monospace;\n}\nbody h1 {\n  width: 100vw;\n  text-align: center;\n  color: rgb(255, 29, 168);\n  padding: 4vw;\n  font-size: 3rem;\n}\n\n#all-projects {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 300px;\n  margin-right: 50px;\n  border-right: 5px solid rgba(255, 184, 184, 0.555);\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  padding-right: 20px;\n}\n#all-projects:hover {\n  border-color: rgb(250, 138, 138);\n}\n#all-projects > button {\n  padding: 10px;\n  width: max(15vw, 10rem);\n  margin: 10px;\n  background-color: rgb(148, 158, 250);\n  color: rgb(255, 255, 255);\n  font-weight: 700;\n  border: none;\n  border-radius: 10px;\n  font-size: 16px;\n  position: relative;\n}\n#all-projects > button:hover {\n  outline: 2px solid rgb(255, 255, 255);\n  filter: hue-rotate(15deg);\n}\n#all-projects > button span {\n  position: absolute;\n  right: -40px;\n  bottom: 4px;\n  font-size: 25px;\n  background-color: #e9bcbc;\n  border-radius: 50%;\n  aspect-ratio: 1/1;\n  height: 30px;\n  display: none;\n}\n#all-projects > button span:hover {\n  filter: brightness(150%);\n  color: black;\n}\n#all-projects > div {\n  font-size: 25px;\n  width: 100%;\n  height: 40px;\n  padding: 10px;\n  margin-left: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n#all-projects > div div {\n  display: inline-block;\n}\n#all-projects > div div span {\n  cursor: pointer;\n}\n#all-projects > div img {\n  height: 15px;\n}\n#all-projects #default-project {\n  background-color: rgb(255, 117, 141);\n  outline: 2px solid white;\n  box-shadow: 0 0 10px #ff06ff;\n}\n\n#all-todos {\n  width: 70vw;\n  background-color: rgb(177, 184, 248);\n  border-radius: 15px;\n}\n#all-todos form {\n  font-size: 1.1rem;\n  margin-bottom: 50px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n#all-todos form #task-input {\n  width: 50%;\n  font-size: 1.1rem;\n  padding: 5px 15px;\n  border-radius: 20px;\n  margin-bottom: 12px;\n  margin-top: 12px;\n  margin-left: 15px;\n  border: 1px solid rgb(182, 179, 179);\n}\n#all-todos form #task-input:focus {\n  outline: none;\n}\n#all-todos form #date-input {\n  font-size: 1.1rem;\n  border: none;\n  padding: 2px 5px;\n  color: grey;\n  border-radius: 5px;\n}\n#all-todos form #date-input:focus {\n  outline: 2px solid black;\n}\n#all-todos form #add-todo {\n  font-size: 21px;\n  aspect-ratio: 1;\n  position: relative;\n  top: 3px;\n  padding: 0 5px 2px;\n  margin-left: 5px;\n  border: none;\n  box-shadow: 0 0 2px rgb(190, 132, 132);\n  border-radius: 5px;\n  color: rgb(96, 163, 175);\n  background-color: rgb(255, 255, 255);\n}\n#all-todos form #add-todo:hover {\n  box-shadow: 0 0 4px rgb(236, 144, 144);\n}\n#all-todos form #priority-btn {\n  display: inline-block;\n  background-color: rgb(143, 140, 140);\n  padding: 4px 15px;\n  border-radius: 10px;\n  color: white;\n  border: 2px solid white;\n  cursor: pointer;\n  user-select: none;\n}\n#all-todos form #priority-btn:hover {\n  filter: brightness(110%);\n  outline: 1px solid rgb(196, 195, 195);\n}\n#all-todos .to-do-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1.3rem;\n  background-color: rgb(255, 208, 208);\n  border-radius: 10px;\n  padding: 15px;\n  margin: 20px auto;\n  width: max(20em, 800px);\n  transition: scale 0.1s ease;\n}\n#all-todos .to-do-item:hover {\n  scale: 1.02;\n  background-color: pink;\n}\n#all-todos .to-do-item div:first-child:not(.delete-task) {\n  display: flex;\n  justify-content: start;\n  align-items: baseline;\n}\n#all-todos .to-do-item .to-do {\n  width: 400px;\n}\n#all-todos .to-do-item .check-mark {\n  height: 15px;\n  aspect-ratio: 1;\n  margin-right: 10px;\n}\n#all-todos .to-do-item .date {\n  flex-basis: 115px;\n}\n#all-todos .to-do-item .trash-icon {\n  height: 35px;\n  padding: 5px;\n  background-color: rgb(250, 134, 134);\n  border: 1px solid white;\n  border-radius: 5px;\n}\n#all-todos .to-do-item .trash-icon:hover {\n  filter: saturate(150%);\n}\n#all-todos .to-do-item .delete-task {\n  display: inline-block;\n}\n\n.check .check-mark {\n  background-color: rgb(167, 167, 255);\n  border: 1px solid black;\n  border-radius: 2px;\n}\n.check .to-do {\n  text-decoration: line-through;\n  text-decoration-color: rgba(73, 71, 71, 0.582);\n  text-decoration-thickness: 2px;\n}", "",{"version":3,"sources":["webpack://./styles/style.scss"],"names":[],"mappings":"AASC;EACG,SAAA;EACA,UAAA;EACA,sBAAA;AARJ;;AAUA;EAEI,aAAA;EAEA,eAAA;EAEA,sBAAA;EACA,4BAAA;EACA,oCAAA;EACA,sBAAA;AAVJ;AAWI;EACI,YAAA;EACA,kBAAA;EACA,wBA3BC;EA4BD,YAAA;EACA,eAAA;AATR;;AAcA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,kDAAA;EACA,4BAAA;EACA,+BAAA;EACA,mBAAA;AAZJ;AAaI;EACI,gCAAA;AAXR;AAaI;EACI,aAAA;EACA,uBAAA;EACA,YAAA;EACA,oCAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,kBAAA;AAXR;AAYQ;EACI,qCAAA;EACA,yBAAA;AAVZ;AAYQ;EACI,kBAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,aAAA;AAVZ;AAWY;EACI,wBAAA;EACA,YAAA;AAThB;AAaM;EACE,eAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EAlFJ,aAAA;EACA,8BAkFkB;EAjFlB,qBAiFiC;AATrC;AAWQ;EACE,qBAAA;AATV;AAUU;EACE,eAAA;AARZ;AAWQ;EACE,YAAA;AATV;AAYI;EACI,oCAAA;EACA,wBAAA;EACA,4BAAA;AAVR;;AAaA;EAEI,WAAA;EACA,oCAAA;EACA,mBAAA;AAXJ;AAYI;EACI,iBAAA;EACA,mBAAA;EA5GJ,aAAA;EACA,6BA4GkB;EA3GlB,mBA2GgC;AARpC;AASQ;EACI,UAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oCAAA;AAPZ;AAQY;EACI,aAAA;AANhB;AASQ;EACI,iBAAA;EACA,YAAA;EACA,gBAAA;EACA,WAAA;EACA,kBAAA;AAPZ;AAQY;EACI,wBAAA;AANhB;AASQ;EACI,eAAA;EACA,eAAA;EACA,kBAAA;EACA,QAAA;EACA,kBAAA;EACA,gBAAA;EAEA,YAAA;EACA,sCAAA;EACA,kBAAA;EACA,wBAAA;EACA,oCAAA;AARZ;AASY;EAEI,sCAAA;AARhB;AAWQ;EACI,qBAAA;EACA,oCAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;AATZ;AAUY;EACI,wBAAA;EACA,qCAAA;AARhB;AAYI;EAtKA,aAAA;EACA,8BAuKkB;EAtKlB,mBAsKiC;EAC7B,iBAAA;EACA,oCAAA;EACA,mBAAA;EACA,aAAA;EACA,iBAAA;EACA,uBAAA;EACA,2BAAA;AATR;AAUQ;EACI,WAAA;EACA,sBAAA;AARZ;AAUQ;EApLJ,aAAA;EACA,sBAqLsB;EApLtB,qBAoL6B;AAPjC;AASQ;EACI,YAAA;AAPZ;AASQ;EACI,YAAA;EACA,eAAA;EACA,kBAAA;AAPZ;AASQ;EACI,iBAAA;AAPZ;AASQ;EACI,YAAA;EACA,YAAA;EACA,oCAAA;EACA,uBAAA;EACA,kBAAA;AAPZ;AAQY;EACI,sBAAA;AANhB;AASQ;EACI,qBAAA;AAPZ;;AAYI;EACI,oCAAA;EACA,uBAAA;EACA,kBAAA;AATR;AAWI;EACI,6BAAA;EACA,8CAAA;EACA,8BAAA;AATR","sourcesContent":["$h1font: rgb(255, 29, 168);\r\n@mixin flex($justify,$align) {\r\n    display: flex;\r\n    justify-content: $justify;\r\n    align-items: $align;\r\n}\r\n@mixin redBorder {\r\n    border: 1px solid red;\r\n}\r\n * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n }\r\nbody {\r\n\r\n    display: flex;\r\n    // justify-content: ;\r\n    flex-wrap: wrap;\r\n    // background-image: url('../images/background.svg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-color: rgb(255 239 215);\r\n    font-family: monospace;\r\n    h1 {\r\n        width: 100vw;\r\n        text-align: center;\r\n        color: $h1font;\r\n        padding: 4vw;\r\n        font-size: 3rem;\r\n    }\r\n}\r\n\r\n\r\n#all-projects {\r\n    // @include redBorder();\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 300px;\r\n    margin-right: 50px;\r\n    border-right: 5px solid rgba(255, 184, 184, 0.555);\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    padding-right: 20px;\r\n    &:hover {\r\n        border-color: rgb(250, 138, 138);\r\n    }\r\n    & > button {\r\n        padding: 10px;\r\n        width: max(15vw, 10rem);\r\n        margin: 10px;\r\n        background-color: rgb(148, 158, 250);\r\n        color: rgb(255, 255, 255);\r\n        font-weight: 700;\r\n        border: none;\r\n        border-radius: 10px;\r\n        font-size: 16px;\r\n        position: relative;\r\n        &:hover {\r\n            outline: 2px solid rgb(255, 255, 255);\r\n            filter: hue-rotate(15deg);\r\n        }\r\n        span {\r\n            position: absolute;\r\n            right: -40px;\r\n            bottom: 4px;\r\n            font-size: 25px;\r\n            background-color: #e9bcbc;\r\n            border-radius: 50%;\r\n            aspect-ratio: 1 / 1;\r\n            height: 30px;\r\n            display: none;\r\n            &:hover {\r\n                filter: brightness(150%);\r\n                color: black;\r\n            }\r\n        }\r\n      }\r\n      & > div {\r\n        font-size: 25px;\r\n        width: 100%;\r\n        height: 40px;\r\n        padding: 10px;\r\n        margin-left: 20px;\r\n        @include flex(space-between, baseline);\r\n        // @include redBorder();\r\n        div {\r\n          display: inline-block;\r\n          span {\r\n            cursor: pointer;\r\n          }\r\n        }\r\n        img {\r\n          height: 15px;\r\n        }\r\n      }\r\n    #default-project{\r\n        background-color: rgb(255 117 141); \r\n        outline: 2px solid white; \r\n        box-shadow: 0 0 10px #ff06ff;\r\n    }\r\n}\r\n#all-todos {\r\n    // @include redBorder();\r\n    width: 70vw;\r\n    background-color: rgb(177, 184, 248);\r\n    border-radius: 15px;\r\n    form {\r\n        font-size: 1.1rem;\r\n        margin-bottom: 50px;\r\n        @include flex(space-around, center);\r\n        #task-input {\r\n            width: 50%;\r\n            font-size: 1.1rem;\r\n            padding: 5px 15px;\r\n            border-radius: 20px;\r\n            margin-bottom: 12px;\r\n            margin-top: 12px;\r\n            margin-left: 15px;\r\n            border: 1px solid rgb(182, 179, 179);\r\n            &:focus {\r\n                outline: none;\r\n            }\r\n        }\r\n        #date-input{\r\n            font-size: 1.1rem;\r\n            border: none;\r\n            padding: 2px 5px;\r\n            color: grey;\r\n            border-radius: 5px;\r\n            &:focus {\r\n                outline: 2px solid black;\r\n            }\r\n        } \r\n        #add-todo {\r\n            font-size: 21px;\r\n            aspect-ratio: 1;\r\n            position: relative;\r\n            top: 3px;\r\n            padding: 0 5px 2px;\r\n            margin-left: 5px;\r\n            // border: 1px solid black;\r\n            border: none;\r\n            box-shadow: 0 0 2px rgb(190, 132, 132);\r\n            border-radius: 5px;\r\n            color: rgb(96, 163, 175);\r\n            background-color: rgb(255, 255, 255);\r\n            &:hover {\r\n                // color: rgb(206, 106, 122);\r\n                box-shadow: 0 0 4px rgb(236, 144, 144);\r\n            }\r\n        }\r\n        #priority-btn {\r\n            display: inline-block;\r\n            background-color: rgb(143, 140, 140);\r\n            padding: 4px 15px;\r\n            border-radius: 10px;\r\n            color: white;\r\n            border: 2px solid white;\r\n            cursor: pointer;\r\n            user-select: none;\r\n            &:hover{\r\n                filter: brightness(110%);\r\n                outline: 1px solid rgb(196, 195, 195);\r\n            }\r\n        }\r\n    }\r\n    .to-do-item {\r\n        // @include redBorder();\r\n        @include flex(space-between, center);\r\n        font-size: 1.3rem;\r\n        background-color: rgb(255, 208, 208);\r\n        border-radius: 10px;\r\n        padding: 15px;\r\n        margin: 20px auto;\r\n        width: max(20em, 800px);\r\n        transition: scale 0.1s ease;\r\n        &:hover {\r\n            scale: 1.02;\r\n            background-color: pink;\r\n        }\r\n        & div:first-child:not(.delete-task) {\r\n            // @include redBorder();\r\n            @include flex(start, baseline)\r\n        }\r\n        .to-do {\r\n            width: 400px;\r\n        }\r\n        .check-mark {\r\n            height: 15px;\r\n            aspect-ratio: 1;\r\n            margin-right: 10px;\r\n        }\r\n        .date {\r\n            flex-basis: 115px;\r\n        }\r\n        .trash-icon {\r\n            height: 35px;\r\n            padding: 5px;\r\n            background-color: rgb(250, 134, 134);\r\n            border: 1px solid white;\r\n            border-radius: 5px;\r\n            &:hover {\r\n                filter: saturate(150%);\r\n            }\r\n        }\r\n        .delete-task {\r\n            display: inline-block;\r\n        }       \r\n    }\r\n}\r\n.check {\r\n    .check-mark {\r\n        background-color: rgb(167, 167, 255);\r\n        border: 1px solid black;\r\n        border-radius: 2px;\r\n    }\r\n    .to-do {\r\n        text-decoration: line-through;\r\n        text-decoration-color: rgba(73, 71, 71, 0.582);\r\n        text-decoration-thickness: 2px;\r\n    }\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");


const body = document.querySelector("body");
function htmlBody() {
  body.innerHTML = `
    <h1>ToDo List</h1>

        
    <div id="all-projects">
    <div>Projects
        <div>
            <span id="add-project">+</span>
            <span id="edit-projects"><img src="https://img.icons8.com/ios/50/000000/edit--v1.png"/></span>
        </div>
    </div>
    <button id="all" class="project">all</button>
    </div>
    <div id="all-todos">
        <form action="#">
            <input type="text" id="task-input" placeholder='Enter your task' autofocus required/>
            <input type="date" id="date-input"/>
            <div id="priority-btn">Low</div>
            <button id="add-todo">&#10004;</button>
        </form>
        <div id="display" class="default-project"></div>
    </div>

    `;
}
htmlBody();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zdHlsZXMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3N0eWxlcy9zdHlsZS5zY3NzPzdkZTIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMzksIDIxNSk7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5ib2R5IGgxIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyOSwgMTY4KTtcXG4gIHBhZGRpbmc6IDR2dztcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2FsbC1wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCByZ2JhKDI1NSwgMTg0LCAxODQsIDAuNTU1KTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG59XFxuI2FsbC1wcm9qZWN0czpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHJnYigyNTAsIDEzOCwgMTM4KTtcXG59XFxuI2FsbC1wcm9qZWN0cyA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IG1heCgxNXZ3LCAxMHJlbSk7XFxuICBtYXJnaW46IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAxNTgsIDI1MCk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbiNhbGwtcHJvamVjdHMgPiBidXR0b246aG92ZXIge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgxNWRlZyk7XFxufVxcbiNhbGwtcHJvamVjdHMgPiBidXR0b24gc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTQwcHg7XFxuICBib3R0b206IDRweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWJjYmM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiNhbGwtcHJvamVjdHMgPiBidXR0b24gc3Bhbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSk7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbiNhbGwtcHJvamVjdHMgPiBkaXYge1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4jYWxsLXByb2plY3RzID4gZGl2IGRpdiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbiNhbGwtcHJvamVjdHMgPiBkaXYgZGl2IHNwYW4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jYWxsLXByb2plY3RzID4gZGl2IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxufVxcbiNhbGwtcHJvamVjdHMgI2RlZmF1bHQtcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxMTcsIDE0MSk7XFxuICBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjZmYwNmZmO1xcbn1cXG5cXG4jYWxsLXRvZG9zIHtcXG4gIHdpZHRoOiA3MHZ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NywgMTg0LCAyNDgpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuI2FsbC10b2RvcyBmb3JtIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNhbGwtdG9kb3MgZm9ybSAjdGFzay1pbnB1dCB7XFxuICB3aWR0aDogNTAlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBwYWRkaW5nOiA1cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4MiwgMTc5LCAxNzkpO1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI3Rhc2staW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuI2FsbC10b2RvcyBmb3JtICNkYXRlLWlucHV0IHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMnB4IDVweDtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI2RhdGUtaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI2FkZC10b2RvIHtcXG4gIGZvbnQtc2l6ZTogMjFweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogM3B4O1xcbiAgcGFkZGluZzogMCA1cHggMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAycHggcmdiKDE5MCwgMTMyLCAxMzIpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IHJnYig5NiwgMTYzLCAxNzUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI2FkZC10b2RvOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiKDIzNiwgMTQ0LCAxNDQpO1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI3ByaW9yaXR5LWJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQzLCAxNDAsIDE0MCk7XFxuICBwYWRkaW5nOiA0cHggMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4jYWxsLXRvZG9zIGZvcm0gI3ByaW9yaXR5LWJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmdiKDE5NiwgMTk1LCAxOTUpO1xcbn1cXG4jYWxsLXRvZG9zIC50by1kby1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDgsIDIwOCk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgd2lkdGg6IG1heCgyMGVtLCA4MDBweCk7XFxuICB0cmFuc2l0aW9uOiBzY2FsZSAwLjFzIGVhc2U7XFxufVxcbiNhbGwtdG9kb3MgLnRvLWRvLWl0ZW06aG92ZXIge1xcbiAgc2NhbGU6IDEuMDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG4jYWxsLXRvZG9zIC50by1kby1pdGVtIGRpdjpmaXJzdC1jaGlsZDpub3QoLmRlbGV0ZS10YXNrKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuI2FsbC10b2RvcyAudG8tZG8taXRlbSAudG8tZG8ge1xcbiAgd2lkdGg6IDQwMHB4O1xcbn1cXG4jYWxsLXRvZG9zIC50by1kby1pdGVtIC5jaGVjay1tYXJrIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuI2FsbC10b2RvcyAudG8tZG8taXRlbSAuZGF0ZSB7XFxuICBmbGV4LWJhc2lzOiAxMTVweDtcXG59XFxuI2FsbC10b2RvcyAudG8tZG8taXRlbSAudHJhc2gtaWNvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxMzQsIDEzNCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI2FsbC10b2RvcyAudG8tZG8taXRlbSAudHJhc2gtaWNvbjpob3ZlciB7XFxuICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpO1xcbn1cXG4jYWxsLXRvZG9zIC50by1kby1pdGVtIC5kZWxldGUtdGFzayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5jaGVjayAuY2hlY2stbWFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjcsIDI1NSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuLmNoZWNrIC50by1kbyB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmdiYSg3MywgNzEsIDcxLCAwLjU4Mik7XFxuICB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiAycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3N0eWxlcy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVNDO0VBQ0csU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQVJKOztBQVVBO0VBRUksYUFBQTtFQUVBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQVZKO0FBV0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkEzQkM7RUE0QkQsWUFBQTtFQUNBLGVBQUE7QUFUUjs7QUFjQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFaSjtBQWFJO0VBQ0ksZ0NBQUE7QUFYUjtBQWFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVhSO0FBWVE7RUFDSSxxQ0FBQTtFQUNBLHlCQUFBO0FBVlo7QUFZUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFWWjtBQVdZO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FBVGhCO0FBYU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFsRkosYUFBQTtFQUNBLDhCQWtGa0I7RUFqRmxCLHFCQWlGaUM7QUFUckM7QUFXUTtFQUNFLHFCQUFBO0FBVFY7QUFVVTtFQUNFLGVBQUE7QUFSWjtBQVdRO0VBQ0UsWUFBQTtBQVRWO0FBWUk7RUFDSSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUFWUjs7QUFhQTtFQUVJLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBWEo7QUFZSTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUE1R0osYUFBQTtFQUNBLDZCQTRHa0I7RUEzR2xCLG1CQTJHZ0M7QUFScEM7QUFTUTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQVBaO0FBUVk7RUFDSSxhQUFBO0FBTmhCO0FBU1E7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVBaO0FBUVk7RUFDSSx3QkFBQTtBQU5oQjtBQVNRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBRUEsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0FBUlo7QUFTWTtFQUVJLHNDQUFBO0FBUmhCO0FBV1E7RUFDSSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVRaO0FBVVk7RUFDSSx3QkFBQTtFQUNBLHFDQUFBO0FBUmhCO0FBWUk7RUF0S0EsYUFBQTtFQUNBLDhCQXVLa0I7RUF0S2xCLG1CQXNLaUM7RUFDN0IsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQVRSO0FBVVE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7QUFSWjtBQVVRO0VBcExKLGFBQUE7RUFDQSxzQkFxTHNCO0VBcEx0QixxQkFvTDZCO0FBUGpDO0FBU1E7RUFDSSxZQUFBO0FBUFo7QUFTUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVNRO0VBQ0ksaUJBQUE7QUFQWjtBQVNRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFQWjtBQVFZO0VBQ0ksc0JBQUE7QUFOaEI7QUFTUTtFQUNJLHFCQUFBO0FBUFo7O0FBWUk7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFUUjtBQVdJO0VBQ0ksNkJBQUE7RUFDQSw4Q0FBQTtFQUNBLDhCQUFBO0FBVFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJGgxZm9udDogcmdiKDI1NSwgMjksIDE2OCk7XFxyXFxuQG1peGluIGZsZXgoJGp1c3RpZnksJGFsaWduKSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ247XFxyXFxufVxcclxcbkBtaXhpbiByZWRCb3JkZXIge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcbiAqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiB9XFxyXFxuYm9keSB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8vIGp1c3RpZnktY29udGVudDogO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQuc3ZnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjM5IDIxNSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGNvbG9yOiAkaDFmb250O1xcclxcbiAgICAgICAgcGFkZGluZzogNHZ3O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbiNhbGwtcHJvamVjdHMge1xcclxcbiAgICAvLyBAaW5jbHVkZSByZWRCb3JkZXIoKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHJnYmEoMjU1LCAxODQsIDE4NCwgMC41NTUpO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiKDI1MCwgMTM4LCAxMzgpO1xcclxcbiAgICB9XFxyXFxuICAgICYgPiBidXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiBtYXgoMTV2dywgMTByZW0pO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0OCwgMTU4LCAyNTApO1xcclxcbiAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTVkZWcpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcXHJcXG4gICAgICAgICAgICBib3R0b206IDRweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5YmNiYztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAmID4gZGl2IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuLCBiYXNlbGluZSk7XFxyXFxuICAgICAgICAvLyBAaW5jbHVkZSByZWRCb3JkZXIoKTtcXHJcXG4gICAgICAgIGRpdiB7XFxyXFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBpbWcge1xcclxcbiAgICAgICAgICBoZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICAjZGVmYXVsdC1wcm9qZWN0e1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAxMTcgMTQxKTsgXFxyXFxuICAgICAgICBvdXRsaW5lOiAycHggc29saWQgd2hpdGU7IFxcclxcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggI2ZmMDZmZjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4jYWxsLXRvZG9zIHtcXHJcXG4gICAgLy8gQGluY2x1ZGUgcmVkQm9yZGVyKCk7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc3LCAxODQsIDI0OCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGZvcm0ge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleChzcGFjZS1hcm91bmQsIGNlbnRlcik7XFxyXFxuICAgICAgICAjdGFzay1pbnB1dCB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTgyLCAxNzksIDE3OSk7XFxyXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxyXFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgI2RhdGUtaW5wdXR7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6IGdyZXk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfSBcXHJcXG4gICAgICAgICNhZGQtdG9kbyB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgdG9wOiAzcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCA1cHggMnB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgICAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiKDE5MCwgMTMyLCAxMzIpO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDk2LCAxNjMsIDE3NSk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICAvLyBjb2xvcjogcmdiKDIwNiwgMTA2LCAxMjIpO1xcclxcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYigyMzYsIDE0NCwgMTQ0KTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAjcHJpb3JpdHktYnRuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MywgMTQwLCAxNDApO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMTEwJSk7XFxyXFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2IoMTk2LCAxOTUsIDE5NSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIC50by1kby1pdGVtIHtcXHJcXG4gICAgICAgIC8vIEBpbmNsdWRlIHJlZEJvcmRlcigpO1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleChzcGFjZS1iZXR3ZWVuLCBjZW50ZXIpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDgsIDIwOCk7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcclxcbiAgICAgICAgd2lkdGg6IG1heCgyMGVtLCA4MDBweCk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjFzIGVhc2U7XFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBzY2FsZTogMS4wMjtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJiBkaXY6Zmlyc3QtY2hpbGQ6bm90KC5kZWxldGUtdGFzaykge1xcclxcbiAgICAgICAgICAgIC8vIEBpbmNsdWRlIHJlZEJvcmRlcigpO1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGZsZXgoc3RhcnQsIGJhc2VsaW5lKVxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgLnRvLWRvIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuY2hlY2stbWFyayB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAuZGF0ZSB7XFxyXFxuICAgICAgICAgICAgZmxleC1iYXNpczogMTE1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAudHJhc2gtaWNvbiB7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwLCAxMzQsIDEzNCk7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IHNhdHVyYXRlKDE1MCUpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIC5kZWxldGUtdGFzayB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICAgICAgfSAgICAgICBcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4uY2hlY2sge1xcclxcbiAgICAuY2hlY2stbWFyayB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY3LCAxNjcsIDI1NSk7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gICAgfVxcclxcbiAgICAudG8tZG8ge1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJnYmEoNzMsIDcxLCA3MSwgMC41ODIpO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogMnB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmZ1bmN0aW9uIGh0bWxCb2R5KCkge1xyXG4gIGJvZHkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgxPlRvRG8gTGlzdDwvaDE+XHJcblxyXG4gICAgICAgIFxyXG4gICAgPGRpdiBpZD1cImFsbC1wcm9qZWN0c1wiPlxyXG4gICAgPGRpdj5Qcm9qZWN0c1xyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiYWRkLXByb2plY3RcIj4rPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cImVkaXQtcHJvamVjdHNcIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwLzAwMDAwMC9lZGl0LS12MS5wbmdcIi8+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnV0dG9uIGlkPVwiYWxsXCIgY2xhc3M9XCJwcm9qZWN0XCI+YWxsPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJhbGwtdG9kb3NcIj5cclxuICAgICAgICA8Zm9ybSBhY3Rpb249XCIjXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGFzay1pbnB1dFwiIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHRhc2snIGF1dG9mb2N1cyByZXF1aXJlZC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZS1pbnB1dFwiLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInByaW9yaXR5LWJ0blwiPkxvdzwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRvZG9cIj4mIzEwMDA0OzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGlkPVwiZGlzcGxheVwiIGNsYXNzPVwiZGVmYXVsdC1wcm9qZWN0XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBgO1xyXG59XHJcbmh0bWxCb2R5KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==