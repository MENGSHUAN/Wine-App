(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["changepwd-changepwd-module"],{

/***/ "PBrA":
/*!***********************************************!*\
  !*** ./src/app/changepwd/changepwd.module.ts ***!
  \***********************************************/
/*! exports provided: ChangepwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepwdPageModule", function() { return ChangepwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _changepwd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepwd-routing.module */ "ggJZ");
/* harmony import */ var _changepwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepwd.page */ "hFhM");







let ChangepwdPageModule = class ChangepwdPageModule {
};
ChangepwdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _changepwd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangepwdPageRoutingModule"]
        ],
        declarations: [_changepwd_page__WEBPACK_IMPORTED_MODULE_6__["ChangepwdPage"]]
    })
], ChangepwdPageModule);



/***/ }),

/***/ "ggJZ":
/*!*******************************************************!*\
  !*** ./src/app/changepwd/changepwd-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChangepwdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepwdPageRoutingModule", function() { return ChangepwdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _changepwd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepwd.page */ "hFhM");




const routes = [
    {
        path: '',
        component: _changepwd_page__WEBPACK_IMPORTED_MODULE_3__["ChangepwdPage"]
    }
];
let ChangepwdPageRoutingModule = class ChangepwdPageRoutingModule {
};
ChangepwdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangepwdPageRoutingModule);



/***/ }),

/***/ "hFhM":
/*!*********************************************!*\
  !*** ./src/app/changepwd/changepwd.page.ts ***!
  \*********************************************/
/*! exports provided: ChangepwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepwdPage", function() { return ChangepwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_changepwd_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./changepwd.page.html */ "jmSS");
/* harmony import */ var _changepwd_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changepwd.page.scss */ "iSqU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let ChangepwdPage = class ChangepwdPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
    }
    ngOnInit() {
        console.log('changepwd page');
    }
    back() {
        this.navctrl.pop();
    }
    validate() {
        if (!this.oldpwd) {
            this.alert.showAlert("Error", "Please Enter Old Password", "");
            return false;
        }
        if (!this.newpwd) {
            this.alert.showAlert("Error", "Please Enter New Password", "");
            return false;
        }
        if (!this.repwd) {
            this.alert.showAlert("Error", "Please Enter Confirm Password", "");
            return false;
        }
        if (this.newpwd != this.repwd) {
            this.alert.showAlert("Error", "Please Enter Valid Confirm Password", "");
            return false;
        }
        return true;
    }
    update() {
        if (this.validate()) {
        }
    }
};
ChangepwdPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ChangepwdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-changepwd',
        template: _raw_loader_changepwd_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_changepwd_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangepwdPage);



/***/ }),

/***/ "iSqU":
/*!***********************************************!*\
  !*** ./src/app/changepwd/changepwd.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2Vwd2QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "jmSS":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/changepwd/changepwd.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Change Password</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ht_20\"></div>\n\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Enter Old Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"oldpwd\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Enter New Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"newpwd\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Confirm New Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"repwd\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"vertical-align-top-content\">\n    <ion-button class=\"btnclass\" (click)=\"update()\">Update</ion-button>\n  </div>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=changepwd-changepwd-module.js.map