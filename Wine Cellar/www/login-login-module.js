(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import { OneSignal } from '@ionic-native/onesignal/ngx';
let LoginPage = class LoginPage {
    // @ViewChild('content') private content: any;
    constructor(navctrl, service, config, 
    //private googlePlus: GooglePlus,
    // private facebook: Facebook,
    platform, 
    // private oneSignal: OneSignal,
    alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.platform = platform;
        this.alert = alert;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
    }
    ngOnInit() {
        console.log('Login page');
        if (this.platform.is('cordova')) {
            console.log('cordova');
        }
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    validateuser() {
        if (!this.email) {
            this.alert.showAlert("Error", "Please Enter Your Email", "");
            return false;
        }
        if (!this.pwd) {
            this.alert.showAlert("Error", "Please Enter Your Password", "");
            return false;
        }
        return true;
    }
    login() {
        if (this.validateuser()) {
            this.navctrl.navigateRoot('/home');
        }
    }
    fblogin() {
    }
    googlelogin() {
    }
    register() {
        this.navctrl.navigateForward('/registration');
    }
    forgotpwd() {
        this.navctrl.navigateForward('/forgetpwd');
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"logincontent\">\n  <div class=\"vertical-align-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"riderdiv\">Wine Cellar</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"riderdiv1\">Sign in to continue</div>\n      </ion-col>\n     <ion-col size=\"12\"></ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Email</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n       </ion-item>\n      </ion-col>\n      \n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input [type]=\"passwordType\" [(ngModel)]=\"pwd\"></ion-input>\n         <ion-icon item-end [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"forgerpwd\" (click)=\"forgotpwd()\">Forget Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"login()\">Login</ion-button>\n      </ion-col>\n     \n      <ion-col size=\"12\">\n        <div class=\"center\">or login with</div>\n      </ion-col>\n      <ion-col size=\"12\" >\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"6\" style=\"text-align: right;\">\n        <img src=\"assets/image/facebook.png\" (click)=\"fblogin()\">\n      </ion-col>\n      <ion-col size=\"6\">\n        <img src=\"assets/image/googleplus.png\" (click)=\"googlelogin()\">\n      </ion-col>\n      <ion-col size=\"12\" >\n        <div class=\"ht_10\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <ion-footer>\n    <div class=\"footertxt\" (click)=\"register()\">New to our app? <span style=\"color:#ffffff;\">Register here!</span> </div>\n  </ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logincontent {\n  --background: url(/assets/image/bg.jpg) 0 0/100% 100% no-repeat;\n}\n\n.vertical-align-content {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 100%;\n  padding: 0px 20px;\n  color: #ffffff;\n}\n\n.riderdiv {\n  font-size: 30px;\n  font-weight: bold;\n  text-align: left;\n  width: 90%;\n}\n\n.lbldiv {\n  font-size: 18px;\n}\n\n.inputdiv {\n  --background:#ffffff;\n  height: 40px;\n  border-radius: 5px;\n}\n\nion-input {\n  --padding-top: 5px;\n}\n\n.forgerpwd {\n  text-align: right;\n  color: rgba(255, 255, 255, 0.869);\n  font-size: 14px;\n}\n\n.footertxt {\n  color: #ffffffab;\n  position: absolute;\n  bottom: 70px;\n  left: 17%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtEQUFBO0FBQ0o7O0FBQ0E7RUFDSSx3QkFBQTtFQUNBLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG9CQUFBO0VBQ0QsWUFBQTtFQUNBLGtCQUFBO0FBSUg7O0FBRkE7RUFDSSxrQkFBQTtBQUtKOztBQUhBO0VBQ0ksaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQU1KIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbmNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ltYWdlL2JnLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbn1cclxuLnZlcnRpY2FsLWFsaWduLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbi5yaWRlcmRpdntcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4ubGJsZGl2e1xyXG4gICAgZm9udC1zaXplOjE4cHg7IFxyXG59XHJcbi5pbnB1dGRpdntcclxuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xyXG4gICBoZWlnaHQ6IDQwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5pb24taW5wdXR7XHJcbiAgICAtLXBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmZvcmdlcnB3ZHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6cmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2OSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5mb290ZXJ0eHR7XHJcbiAgICBjb2xvcjogI2ZmZmZmZmFiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA3MHB4O1xyXG4gICAgbGVmdDogMTclO1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map