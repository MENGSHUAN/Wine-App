(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editexisting-editexisting-module"],{

/***/ "H/+K":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editexisting/editexisting.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Edit Existing Outlet</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div class=\"optiondiv\" (click)=\"editoutlet()\">Outlet name 1</div>\n    <div class=\"optiondiv\" (click)=\"editoutlet()\">Outlet name 2</div>\n    <div class=\"optiondiv\" (click)=\"editoutlet()\">Outlet name 3</div>\n    <div class=\"optiondiv\" (click)=\"editoutlet()\">Outlet name 4</div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "KiEr":
/*!*****************************************************!*\
  !*** ./src/app/editexisting/editexisting.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".optiondiv {\n  border-bottom: 1px solid #d4d4d4;\n  height: 50px;\n  padding-top: 16px;\n  color: #000000;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRleGlzdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6ImVkaXRleGlzdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uZGl2e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "aU7R":
/*!*************************************************************!*\
  !*** ./src/app/editexisting/editexisting-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditexistingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditexistingPageRoutingModule", function() { return EditexistingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editexisting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editexisting.page */ "zKK8");




const routes = [
    {
        path: '',
        component: _editexisting_page__WEBPACK_IMPORTED_MODULE_3__["EditexistingPage"]
    }
];
let EditexistingPageRoutingModule = class EditexistingPageRoutingModule {
};
EditexistingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditexistingPageRoutingModule);



/***/ }),

/***/ "cT1B":
/*!*****************************************************!*\
  !*** ./src/app/editexisting/editexisting.module.ts ***!
  \*****************************************************/
/*! exports provided: EditexistingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditexistingPageModule", function() { return EditexistingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editexisting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editexisting-routing.module */ "aU7R");
/* harmony import */ var _editexisting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editexisting.page */ "zKK8");







let EditexistingPageModule = class EditexistingPageModule {
};
EditexistingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editexisting_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditexistingPageRoutingModule"]
        ],
        declarations: [_editexisting_page__WEBPACK_IMPORTED_MODULE_6__["EditexistingPage"]]
    })
], EditexistingPageModule);



/***/ }),

/***/ "zKK8":
/*!***************************************************!*\
  !*** ./src/app/editexisting/editexisting.page.ts ***!
  \***************************************************/
/*! exports provided: EditexistingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditexistingPage", function() { return EditexistingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editexisting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editexisting.page.html */ "H/+K");
/* harmony import */ var _editexisting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editexisting.page.scss */ "KiEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let EditexistingPage = class EditexistingPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    editoutlet() {
        this.navctrl.navigateForward(['editoutlet']);
    }
};
EditexistingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
EditexistingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editexisting',
        template: _raw_loader_editexisting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editexisting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditexistingPage);



/***/ })

}]);
//# sourceMappingURL=editexisting-editexisting-module.js.map