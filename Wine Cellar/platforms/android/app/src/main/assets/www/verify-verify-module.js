(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-verify-module"],{

/***/ "JqDU":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.module.ts ***!
  \*****************************************/
/*! exports provided: VerifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageModule", function() { return VerifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-routing.module */ "qOy3");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify.page */ "ycC/");







let VerifyPageModule = class VerifyPageModule {
};
VerifyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyPageRoutingModule"]
        ],
        declarations: [_verify_page__WEBPACK_IMPORTED_MODULE_6__["VerifyPage"]]
    })
], VerifyPageModule);



/***/ }),

/***/ "SFz8":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify/verify.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n   <ion-row>\n     <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"10\">\n       <div>Registration</div>\n     </ion-col>\n   </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div>A 6 digit OTP has been sent to your email, enter the OTP to verify your account.</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\" style=\"text-align: center;\">\n        <ion-input #otp1 type=\"number\" [(ngModel)]=\"code1\" required maxlength=\"1\" (keyup)=\"otpController($event,otp2,'')\"></ion-input>\n        <ion-input #otp2 type=\"number\" [(ngModel)]=\"code2\" required maxlength=\"1\" (keyup)=\"otpController($event,otp3,otp1)\">\n        </ion-input>\n        <ion-input #otp3 type=\"number\" [(ngModel)]=\"code3\" required maxlength=\"1\" (keyup)=\"otpController($event,otp4,otp2)\">\n        </ion-input>\n        <ion-input #otp4 type=\"number\" [(ngModel)]=\"code4\" required maxlength=\"1\" (keyup)=\"otpController($event,otp5,otp3)\">\n        </ion-input>\n        <ion-input #otp5 type=\"number\" [(ngModel)]=\"code5\" required maxlength=\"1\" (keyup)=\"otpController($event,otp6,otp4)\">\n        </ion-input>\n        <ion-input #otp6 type=\"number\" [(ngModel)]=\"code6\" required maxlength=\"1\" (keyup)=\"otpController($event,'',otp5)\"></ion-input>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"verify()\">Verify</ion-button>\n      </ion-col>\n      <ion-col size=\"12\" (click)=\"resend()\">\n        <div class=\"extratxt\">Did not receive an OTP?</div>\n        <div class=\"extratxt\">Click here to resend</div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "qOy3":
/*!*************************************************!*\
  !*** ./src/app/verify/verify-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VerifyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPageRoutingModule", function() { return VerifyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _verify_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify.page */ "ycC/");




const routes = [
    {
        path: '',
        component: _verify_page__WEBPACK_IMPORTED_MODULE_3__["VerifyPage"]
    }
];
let VerifyPageRoutingModule = class VerifyPageRoutingModule {
};
VerifyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyPageRoutingModule);



/***/ }),

/***/ "rV9f":
/*!*****************************************!*\
  !*** ./src/app/verify/verify.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input {\n  display: inline-block;\n  width: 40px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 11px;\n  text-align: center;\n  --padding-start: 0px;\n  --padding-top: 12px;\n  --background:#f0f0f0;\n  color: black;\n}\n\n.extratxt {\n  color: #007be2;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZlcmlmeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7QUFFTiIsImZpbGUiOiJ2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAtLWJhY2tncm91bmQ6I2YwZjBmMDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gIH1cclxuICAuZXh0cmF0eHR7XHJcbiAgICAgIGNvbG9yOiMwMDdiZTI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9Il19 */");

/***/ }),

/***/ "ycC/":
/*!***************************************!*\
  !*** ./src/app/verify/verify.page.ts ***!
  \***************************************/
/*! exports provided: VerifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyPage", function() { return VerifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./verify.page.html */ "SFz8");
/* harmony import */ var _verify_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify.page.scss */ "rV9f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service.service */ "ibrm");









let VerifyPage = class VerifyPage {
    constructor(navctrl, alert, modalctrl, config, service, router) {
        this.navctrl = navctrl;
        this.alert = alert;
        this.modalctrl = modalctrl;
        this.config = config;
        this.service = service;
        this.router = router;
        this.showOTPInput = false;
        this.config.logindata();
        this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"));
        console.log(this.userdata);
        this.usertype = this.config.Usertype;
        console.log(this.usertype);
    }
    ngOnInit() {
        console.log('verfication page');
    }
    back() {
        this.navctrl.pop();
    }
    otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        }
        else if (next && event.target.value.length > 0) {
            next.setFocus();
        }
        else {
            return 0;
        }
    }
    resend() {
        this.alert.showAlert('RESEND OTP', 'The OTP has been sent to you', 'registered email address.');
    }
    verify() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navctrl.navigateForward('/login');
        });
    }
};
VerifyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
VerifyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify',
        template: _raw_loader_verify_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerifyPage);



/***/ })

}]);
//# sourceMappingURL=verify-verify-module.js.map