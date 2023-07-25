(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgetpwd-forgetpwd-module"],{

/***/ "PwxJ":
/*!***********************************************!*\
  !*** ./src/app/forgetpwd/forgetpwd.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vertical-align-content {\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 20px;\n  color: #616161;\n}\n\n.lbldiv {\n  font-size: 18px;\n  color: gray;\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.inputdiv {\n  --background:#f0f0f0;\n  height: 40px;\n  border-radius: 5px;\n}\n\nion-input {\n  --padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvcmdldHB3ZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLG9CQUFBO0VBQ0QsWUFBQTtFQUNBLGtCQUFBO0FBR0g7O0FBREE7RUFDSSxrQkFBQTtBQUlKIiwiZmlsZSI6ImZvcmdldHB3ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmVydGljYWwtYWxpZ24tY29udGVudHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgIGNvbG9yOiM2MTYxNjE7XHJcbn1cclxuLmxibGRpdntcclxuICAgIGZvbnQtc2l6ZToxOHB4OyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG59XHJcbi5pbnB1dGRpdntcclxuICAgIC0tYmFja2dyb3VuZDojZjBmMGYwO1xyXG4gICBoZWlnaHQ6IDQwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "eq5a":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgetpwd/forgetpwd.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_20\"></div>\n   <ion-row>\n     <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"10\">\n       <div>Forget Password</div>\n     </ion-col>\n   </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_10\"></div>\n  <div class=\"vertical-align-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>Please enter your registered email below and a reset password link will be sent to your email address.</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Registered Email</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "jHVo":
/*!*******************************************************!*\
  !*** ./src/app/forgetpwd/forgetpwd-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgetpwdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpwdPageRoutingModule", function() { return ForgetpwdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _forgetpwd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgetpwd.page */ "zqQU");




const routes = [
    {
        path: '',
        component: _forgetpwd_page__WEBPACK_IMPORTED_MODULE_3__["ForgetpwdPage"]
    }
];
let ForgetpwdPageRoutingModule = class ForgetpwdPageRoutingModule {
};
ForgetpwdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetpwdPageRoutingModule);



/***/ }),

/***/ "yeYn":
/*!***********************************************!*\
  !*** ./src/app/forgetpwd/forgetpwd.module.ts ***!
  \***********************************************/
/*! exports provided: ForgetpwdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpwdPageModule", function() { return ForgetpwdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _forgetpwd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpwd-routing.module */ "jHVo");
/* harmony import */ var _forgetpwd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgetpwd.page */ "zqQU");







let ForgetpwdPageModule = class ForgetpwdPageModule {
};
ForgetpwdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgetpwd_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetpwdPageRoutingModule"]
        ],
        declarations: [_forgetpwd_page__WEBPACK_IMPORTED_MODULE_6__["ForgetpwdPage"]]
    })
], ForgetpwdPageModule);



/***/ }),

/***/ "zqQU":
/*!*********************************************!*\
  !*** ./src/app/forgetpwd/forgetpwd.page.ts ***!
  \*********************************************/
/*! exports provided: ForgetpwdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpwdPage", function() { return ForgetpwdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgetpwd_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgetpwd.page.html */ "eq5a");
/* harmony import */ var _forgetpwd_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgetpwd.page.scss */ "PwxJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let ForgetpwdPage = class ForgetpwdPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
        this.config.logindata();
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    submit() {
        if (!this.email) {
            this.alert.showAlert("Error", "Please enter email address", "");
        }
        else {
            this.alert.showAlert("Success", "Successfully sent", "");
        }
    }
};
ForgetpwdPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ForgetpwdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgetpwd',
        template: _raw_loader_forgetpwd_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgetpwd_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgetpwdPage);



/***/ })

}]);
//# sourceMappingURL=forgetpwd-forgetpwd-module.js.map