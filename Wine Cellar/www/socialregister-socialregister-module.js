(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["socialregister-socialregister-module"],{

/***/ "1fyO":
/*!*****************************************************************!*\
  !*** ./src/app/socialregister/socialregister-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SocialregisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialregisterPageRoutingModule", function() { return SocialregisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _socialregister_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./socialregister.page */ "Dka9");




const routes = [
    {
        path: '',
        component: _socialregister_page__WEBPACK_IMPORTED_MODULE_3__["SocialregisterPage"]
    }
];
let SocialregisterPageRoutingModule = class SocialregisterPageRoutingModule {
};
SocialregisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SocialregisterPageRoutingModule);



/***/ }),

/***/ "Dka9":
/*!*******************************************************!*\
  !*** ./src/app/socialregister/socialregister.page.ts ***!
  \*******************************************************/
/*! exports provided: SocialregisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialregisterPage", function() { return SocialregisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_socialregister_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./socialregister.page.html */ "TiRE");
/* harmony import */ var _socialregister_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socialregister.page.scss */ "nhYf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _alertpopup_alertpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alertpopup/alertpopup.page */ "HxTa");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service.service */ "ibrm");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");











let SocialregisterPage = class SocialregisterPage {
    constructor(navctrl, service, config, alert, router, platform, oneSignal, modalctrl) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
        this.router = router;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.modalctrl = modalctrl;
        this.gettype = this.router.snapshot.params.type;
        console.log(this.gettype);
        this.socialdata = this.router.snapshot.params;
        console.log(this.socialdata);
        this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"));
        console.log(this.userdata);
        if (this.socialdata) {
            this.uname = this.socialdata.name;
            this.email = this.socialdata.email;
            this.Myimage = this.socialdata.img;
        }
    }
    ngOnInit() {
        console.log('socialregister page');
        if (this.platform.is('cordova')) {
            console.log('cordova');
            this.oneSignal.getIds().then(ids => {
                var playerid = JSON.stringify(ids['userId']);
                var str = playerid.replace("\"", "");
                this.DevicesId = str.replace("\"", "");
                console.log("Device id is => " + this.DevicesId);
            });
        }
    }
    selecttype(ev) {
        console.log(ev);
        this.usertype = ev.detail.value;
        if (this.usertype == 'individual') {
            this.type = '1';
        }
        else {
            this.type = '2';
        }
    }
    register() {
        this.alert.showLoader();
        var params = {
            name: this.uname,
            email: this.email,
            authid: this.socialdata.authid,
            img: this.Myimage,
            device_id: this.DevicesId,
            mobile: this.mobile,
            type: this.type,
        };
        console.log(params);
        this.service.socialsignup(params)
            .then((results) => this.handleRegister(results));
    }
    handleRegister(result) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(result);
            this.alert.dissmissLoader();
            if (result.ResponseCode == '1') {
                localStorage.setItem("Riderr_Login", JSON.stringify(result.user_data));
                localStorage.setItem("Riderr_Usertype", JSON.stringify(this.usertype));
                this.config.logindata();
                const modal = yield this.modalctrl.create({
                    component: _alertpopup_alertpopup_page__WEBPACK_IMPORTED_MODULE_7__["AlertpopupPage"],
                    cssClass: 'backmodal',
                    componentProps: { 'type': this.usertype, 'popupname': 'startpopup', 'registertype': 'social' }
                });
                modal.present();
            }
            else {
                this.alert.showAlert("Error", result.ResponseMsg, '');
            }
        });
    }
    registercompany() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.alert.showLoader();
            var params = {
                user_id: this.userdata.id,
                company_name: this.c_name,
                company_address: this.c_address,
                company_registration_number: this.reg_no,
                company_contact_number: this.c_contact
            };
            console.log(params);
            this.service.UpdateCompany(params)
                .then((results) => this.handleCompany(results));
        });
    }
    handleCompany(results) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(results);
            this.alert.dissmissLoader();
            if (results.ResponseCode == '1') {
                // localStorage.setItem("Riderr_Login", JSON.stringify(result.user_id))
                // localStorage.setItem("Riderr_Usertype", JSON.stringify(this.usertype))
                const modal = yield this.modalctrl.create({
                    component: _alertpopup_alertpopup_page__WEBPACK_IMPORTED_MODULE_7__["AlertpopupPage"],
                    cssClass: 'backmodal',
                    componentProps: { 'type': this.usertype, 'popupname': 'outletpopup' }
                });
                modal.present();
            }
            else {
                this.alert.showAlert("Error", results.ResponseMsg, '');
            }
        });
    }
};
SocialregisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_9__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
SocialregisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-socialregister',
        template: _raw_loader_socialregister_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_socialregister_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SocialregisterPage);



/***/ }),

/***/ "Fh9G":
/*!*********************************************************!*\
  !*** ./src/app/socialregister/socialregister.module.ts ***!
  \*********************************************************/
/*! exports provided: SocialregisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialregisterPageModule", function() { return SocialregisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _socialregister_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socialregister-routing.module */ "1fyO");
/* harmony import */ var _socialregister_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./socialregister.page */ "Dka9");







let SocialregisterPageModule = class SocialregisterPageModule {
};
SocialregisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _socialregister_routing_module__WEBPACK_IMPORTED_MODULE_5__["SocialregisterPageRoutingModule"]
        ],
        declarations: [_socialregister_page__WEBPACK_IMPORTED_MODULE_6__["SocialregisterPage"]]
    })
], SocialregisterPageModule);



/***/ }),

/***/ "TiRE":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/socialregister/socialregister.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n   <ion-row>\n     <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"10\">\n       <div>Registration</div>\n     </ion-col>\n   </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div *ngIf=\"!gettype\" class=\"lbldiv\">Are you an individual or company?</div>\n    <div *ngIf=\"!gettype\" class=\"radiodiv\">\n      <ion-radio-group (ionChange)=\"selecttype($event)\">\n        <ion-item lines=\"none\" style=\"--background:white;color:black; --padding-start:0px;\">\n          <ion-radio value=\"individual\"></ion-radio>\n          <div class=\"userdiv\">Individual</div>\n\n          <ion-radio slot=\"end\" value=\"company\"></ion-radio>\n          <div slot=\"end\" class=\"vendordiv\">Company</div>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <ion-row *ngIf=\"!gettype\">\n      <ion-col size=\"12\">\n        <div class=\"profilediv\" (click)=\"opengallery()\">\n          <img *ngIf=\"!Myimage\" src=\"assets/image/profilepic.png\" class=\"profileimg\">\n          <img *ngIf=\"Myimage\" src=\"{{Myimage}}\" class=\"profileimg\">\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Username</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g.John\" [(ngModel)]=\"uname\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Email</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g.John@gmail.com\" [(ngModel)]=\"email\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Mobile Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. 91231234\" [(ngModel)]=\"mobile\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"register()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"gettype\">\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Name</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. Erzat Motor Pvt. Ltd.\" [(ngModel)]=\"c_name\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Registration Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. T2022123\" [(ngModel)]=\"reg_no\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Address</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input [(ngModel)]=\"c_address\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Contact Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. 91231234\" [(ngModel)]=\"c_contact\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"registercompany()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "nhYf":
/*!*********************************************************!*\
  !*** ./src/app/socialregister/socialregister.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radiodiv {\n  margin: auto;\n  width: 100%;\n}\n\nion-radio {\n  --color: gray;\n  --color-checked: #c30000;\n  --border: 1px solid gray;\n}\n\n.userdiv {\n  padding: 0px 5px;\n}\n\n.vendordiv {\n  margin-left: 0px;\n  padding: 0px 5px;\n}\n\n.profilediv {\n  width: 80px;\n  height: 80px;\n  margin: auto;\n  display: table;\n  border-radius: 50%;\n  border: 1px solid black;\n  padding: 4px;\n}\n\n.profileimg {\n  border-radius: 50%;\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  display: table;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNvY2lhbHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUlOOztBQUZDO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBS0YiLCJmaWxlIjoic29jaWFscmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvZGl2IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBpb24tcmFkaW8ge1xyXG4gICAgLS1jb2xvcjogZ3JheTtcclxuICAgIC0tY29sb3ItY2hlY2tlZDogI2MzMDAwMDtcclxuICAgIC0tYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICB9XHJcbiAgXHJcbiAgLnVzZXJkaXYge1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICB9XHJcbiAgLnZlbmRvcmRpdiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICB9XHJcbiAgLnByb2ZpbGVkaXZ7XHJcbiAgICAgIHdpZHRoOjgwcHg7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgfVxyXG4gLnByb2ZpbGVpbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiB9Il19 */");

/***/ }),

/***/ "wljF":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js ***!
  \************************************************************************/
/*! exports provided: OSLockScreenVisibility, OSDisplayType, OSActionType, OneSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSLockScreenVisibility", function() { return OSLockScreenVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSDisplayType", function() { return OSDisplayType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OSActionType", function() { return OSActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneSignal", function() { return OneSignal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "C6fG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




/**
 * **ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */

var OSLockScreenVisibility;
(function (OSLockScreenVisibility) {
    /**
     * Fully visible (default)
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Public"] = 1] = "Public";
    /**
     * Contents are hidden
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Private"] = 0] = "Private";
    /**
     * Not shown
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Secret"] = -1] = "Secret";
})(OSLockScreenVisibility || (OSLockScreenVisibility = {}));
/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
var OSDisplayType;
(function (OSDisplayType) {
    /**
     * notification is silent, or inFocusDisplaying is disabled.
     */
    OSDisplayType[OSDisplayType["None"] = 0] = "None";
    /**
     * (**DEFAULT**) - native alert dialog display.
     */
    OSDisplayType[OSDisplayType["InAppAlert"] = 1] = "InAppAlert";
    /**
     * native notification display.
     */
    OSDisplayType[OSDisplayType["Notification"] = 2] = "Notification";
})(OSDisplayType || (OSDisplayType = {}));
var OSActionType;
(function (OSActionType) {
    OSActionType[OSActionType["Opened"] = 0] = "Opened";
    OSActionType[OSActionType["ActionTake"] = 1] = "ActionTake";
})(OSActionType || (OSActionType = {}));
var OneSignal = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OneSignal, _super);
    function OneSignal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * constants to use in inFocusDisplaying()
         * @hidden
         */
        _this.OSInFocusDisplayOption = {
            None: 0,
            InAppAlert: 1,
            Notification: 2,
        };
        return _this;
    }
    OneSignal.prototype.startInit = function (appId, googleProjectNumber) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "startInit", { "sync": true }, arguments); };
    OneSignal.prototype.handleNotificationReceived = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleNotificationReceived", { "observable": true }, arguments); };
    OneSignal.prototype.handleNotificationOpened = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleNotificationOpened", { "observable": true }, arguments); };
    OneSignal.prototype.handleInAppMessageClicked = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "handleInAppMessageClicked", { "observable": true }, arguments); };
    OneSignal.prototype.iOSSettings = function (settings) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "iOSSettings", { "sync": true, "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.endInit = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "endInit", { "sync": true }, arguments); };
    OneSignal.prototype.promptForPushNotificationsWithUserResponse = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "promptForPushNotificationsWithUserResponse", { "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.getTags = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTags", {}, arguments); };
    OneSignal.prototype.getIds = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getIds", {}, arguments); };
    OneSignal.prototype.sendTag = function (key, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendTag", { "sync": true }, arguments); };
    OneSignal.prototype.sendTags = function (json) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "sendTags", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTag = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteTag", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTags = function (keys) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "deleteTags", { "sync": true }, arguments); };
    OneSignal.prototype.registerForPushNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "registerForPushNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.enableVibrate = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enableVibrate", { "sync": true }, arguments); };
    OneSignal.prototype.enableSound = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "enableSound", { "sync": true }, arguments); };
    OneSignal.prototype.inFocusDisplaying = function (displayOption) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "inFocusDisplaying", { "sync": true }, arguments); };
    OneSignal.prototype.setSubscription = function (enable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setSubscription", { "sync": true }, arguments); };
    OneSignal.prototype.getPermissionSubscriptionState = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPermissionSubscriptionState", {}, arguments); };
    OneSignal.prototype.postNotification = function (notificationObj) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "postNotification", {}, arguments); };
    OneSignal.prototype.cancelNotification = function (notificationId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "cancelNotification", { "sync": true }, arguments); };
    OneSignal.prototype.promptLocation = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "promptLocation", { "sync": true }, arguments); };
    OneSignal.prototype.syncHashedEmail = function (email) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "syncHashedEmail", { "sync": true }, arguments); };
    OneSignal.prototype.setLogLevel = function (logLevel) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setLogLevel", { "sync": true }, arguments); };
    OneSignal.prototype.setLocationShared = function (shared) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setLocationShared", { "sync": true }, arguments); };
    OneSignal.prototype.addPermissionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addPermissionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.addSubscriptionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.setEmail = function (email, emailAuthToken) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setEmail", {}, arguments); };
    OneSignal.prototype.logoutEmail = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logoutEmail", {}, arguments); };
    OneSignal.prototype.addEmailSubscriptionObserver = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addEmailSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.clearOneSignalNotifications = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "clearOneSignalNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.setRequiresUserPrivacyConsent = function (required) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setRequiresUserPrivacyConsent", {}, arguments); };
    OneSignal.prototype.provideUserConsent = function (granted) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "provideUserConsent", {}, arguments); };
    OneSignal.prototype.userProvidedPrivacyConsent = function (callback) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "userProvidedPrivacyConsent", {}, arguments); };
    OneSignal.prototype.setExternalUserId = function (externalId) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setExternalUserId", {}, arguments); };
    OneSignal.prototype.removeExternalUserId = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeExternalUserId", {}, arguments); };
    OneSignal.prototype.addTrigger = function (key, value) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addTrigger", { "sync": true }, arguments); };
    OneSignal.prototype.addTriggers = function (triggers) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "addTriggers", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggerForKey = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeTriggerForKey", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggersForKeys = function (keys) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "removeTriggersForKeys", { "sync": true }, arguments); };
    OneSignal.prototype.getTriggerValueForKey = function (key) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getTriggerValueForKey", {}, arguments); };
    OneSignal.prototype.pauseInAppMessages = function (pause) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "pauseInAppMessages", { "sync": true }, arguments); };
    OneSignal.pluginName = "OneSignal";
    OneSignal.plugin = "onesignal-cordova-plugin";
    OneSignal.pluginRef = "plugins.OneSignal";
    OneSignal.repo = "https://github.com/OneSignal/OneSignal-Cordova-SDK";
    OneSignal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
OneSignal.ɵfac = function OneSignal_Factory(t) { return ɵOneSignal_BaseFactory(t || OneSignal); };
OneSignal.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OneSignal, factory: function (t) { return OneSignal.ɵfac(t); } });
var ɵOneSignal_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](OneSignal);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OneSignal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return OneSignal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvb25lc2lnbmFsL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUEwRmxDO0FBQ0E7QUFDQSxHQUFHOztBQUNILE1BQU0sQ0FBTixJQUFZLHNCQWFYO0FBYkQsV0FBWSxzQkFBc0I7QUFDakMsSUFBQztBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsdUVBQVUsQ0FBQTtBQUFDLElBQ1g7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLHlFQUFXLENBQUE7QUFBQyxJQUNaO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSx3RUFBVyxDQUFBO0FBQ2IsQ0FBQyxFQWJXLHNCQUFzQixLQUF0QixzQkFBc0IsUUFhakM7QUFFRDtBQUNBO0FBQ0EsR0FBRztBQUNILE1BQU0sQ0FBTixJQUFZLGFBYVg7QUFiRCxXQUFZLGFBQWE7QUFDeEIsSUFBQztBQUNGO0FBQ0UsT0FBRztBQUNMLElBQUUsaURBQVEsQ0FBQTtBQUFDLElBQ1Q7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFFLDZEQUFjLENBQUE7QUFBQyxJQUNmO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBRSxpRUFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBYlcsYUFBYSxLQUFiLGFBQWEsUUFheEI7QUE4S0QsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtBQUN2QixJQUFDLG1EQUFVLENBQUE7QUFBQyxJQUNYLDJEQUFjLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBQ0Q7QUFFOEMsSUFzSWYsNkJBQWlCO0FBQUM7QUFFOUI7QUFJZixRQUxGO0FBQ0Y7QUFDTTtBQUVBLFdBREQ7QUFDTCxRQUFFLDRCQUFzQixHQUFHO0FBQzNCLFlBQUksSUFBSSxFQUFFLENBQUM7QUFDWCxZQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2pCLFlBQUksWUFBWSxFQUFFLENBQUM7QUFDbkIsU0FBRyxDQUFDO0FBQ0o7QUFFZTtBQUFNLElBT25CLDZCQUFTLGFBQUMsS0FBYSxFQUFFLG1CQUE0QjtBQUtoQixJQU9yQyw4Q0FBMEI7QUFLdUIsSUFTakQsNENBQXdCO0FBS1csSUFPbkMsNkNBQXlCO0FBT3pCLElBWUEsK0JBQVcsYUFBQyxRQUFzRjtBQUtyQyxJQUs3RCwyQkFBTztBQUt3QyxJQU0vQyw4REFBMEM7QUFLbUMsSUFPN0UsMkJBQU87QUFLaUIsSUFVeEIsMEJBQU07QUFFTixJQVVBLDJCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQWE7QUFHZSxJQU1qRCw0QkFBUSxhQUFDLElBQVM7QUFHZ0MsSUFLbEQsNkJBQVMsYUFBQyxHQUFXO0FBRzhCLElBS25ELDhCQUFVLGFBQUMsSUFBYztBQUcyQixJQUlwRCxnREFBNEI7QUFJd0MsSUFRcEUsaUNBQWEsYUFBQyxNQUFlO0FBSVksSUFRekMsK0JBQVcsYUFBQyxNQUFlO0FBSXFCLElBTWhELHFDQUFpQixhQUFDLGFBQTRCO0FBS0QsSUFNN0MsbUNBQWUsYUFBQyxNQUFlO0FBRzBCLElBS3pELGtEQUE4QjtBQU1kLElBSWhCLG9DQUFnQixhQUFDLGVBQStCO0FBSzNCLElBSXJCLHNDQUFrQixhQUFDLGNBQXNCO0FBR21CLElBRzVELGtDQUFjO0FBT1gsSUFBSCxtQ0FBZSxhQUFDLEtBQWE7QUFHNEIsSUFRekQsK0JBQVcsYUFBQyxRQUFtRDtBQUdWLElBSXJELHFDQUFpQixhQUFDLE1BQWU7QUFHMEIsSUFVM0QseUNBQXFCO0FBS2tDLElBV3ZELDJDQUF1QjtBQVF6QixJQUFFLDRCQUFRLGFBQUMsS0FBYSxFQUFFLGNBQXVCO0FBS2xDLElBR2IsK0JBQVc7QUFLaUIsSUFXNUIsZ0RBQTRCO0FBT1osSUFDaEIsK0NBQTJCO0FBR3NELElBS2pGLGlEQUE2QixhQUFDLFFBQWlCO0FBR1UsSUFLekQsc0NBQWtCLGFBQUMsT0FBZ0I7QUFHVyxJQUk5Qyw4Q0FBMEIsYUFBQyxRQUFrQjtBQUdTLElBS3RELHFDQUFpQixhQUFDLFVBQWtCO0FBR1MsSUFHN0Msd0NBQW9CO0FBR3dDLElBUTVELDhCQUFVLGFBQUMsR0FBVyxFQUFFLEtBQStCO0FBR0gsSUFPcEQsK0JBQVcsYUFBQyxRQUFnQjtBQUd5QixJQU9yRCx1Q0FBbUIsYUFBQyxHQUFXO0FBRzhCLElBTzdELHlDQUFxQixhQUFDLElBQWM7QUFLaEMsSUFJSix5Q0FBcUIsYUFBQyxHQUFXO0FBSzVCLElBUUwsc0NBQWtCLGFBQUMsS0FBYztBQUVnQztBQUF3QztBQUFtRDtBQUErQztBQUEyRTs2Q0EzYnZSLFVBQVU7Ozs7OzBCQUNMO0FBQUMsb0JBeGJQO0FBQUUsRUF3YjZCLGlCQUFpQjtBQUMvQyxTQURZLFNBQVM7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9TTm90aWZpY2F0aW9uIHtcbiAgLyoqXG4gICAqIFdhcyBhcHAgaW4gZm9jdXMuXG4gICAqL1xuICBpc0FwcEluRm9jdXM/OiBib29sZWFuO1xuICAvKipcbiAgICogV2FzIG5vdGlmaWNhdGlvbiBzaG93biB0byB0aGUgdXNlci4gV2lsbCBiZSBmYWxzZSBmb3Igc2lsZW50IG5vdGlmaWNhdGlvbnMuXG4gICAqL1xuICBzaG93bj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIEFuZHJvaWQgTm90aWZpY2F0aW9uIGFzc2lnbmVkIHRvIHRoZSBub3RpZmljYXRpb24uIENhbiBiZSB1c2VkIHRvIGNhbmNlbCBvciByZXBsYWNlIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBhbmRyb2lkTm90aWZpY2F0aW9uSWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBQYXlsb2FkIHJlY2VpdmVkIGZyb20gT25lU2lnbmFsLlxuICAgKi9cbiAgcGF5bG9hZD86IE9TTm90aWZpY2F0aW9uUGF5bG9hZDtcbiAgLyoqXG4gICAqIEhvdyB0aGUgbm90aWZpY2F0aW9uIHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuIENhbiBiZSBzZXQgdG8gYE5vdGlmaWNhdGlvbmAsIGBJbkFwcEFsZXJ0YCwgb3IgYE5vbmVgIGlmIGl0IHdhcyBub3QgZGlzcGxheWVkLlxuICAgKi9cbiAgZGlzcGxheVR5cGU/OiBPU0Rpc3BsYXlUeXBlO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBOb3RpZmljYXRpb24gaXMgYSBzdW1tYXJ5IG5vdGlmaWNhdGlvbiBmb3IgYSBncm91cCB0aGlzIHdpbGwgY29udGFpbiBhbGwgbm90aWZpY2F0aW9uIHBheWxvYWRzIGl0IHdhcyBjcmVhdGVkIGZyb20uXG4gICAqL1xuICBncm91cGVkTm90aWZpY2F0aW9ucz86IE9TTm90aWZpY2F0aW9uUGF5bG9hZFtdO1xuICBhcHBfaWQ/OiBzdHJpbmc7XG4gIGNvbnRlbnRzPzogYW55O1xuICBoZWFkaW5ncz86IGFueTtcbiAgaXNJb3M/OiBib29sZWFuO1xuICBpc0FuZHJvaWQ/OiBib29sZWFuO1xuICBpc1dQPzogYm9vbGVhbjtcbiAgaXNXUF9XTlM/OiBib29sZWFuO1xuICBpc0FkbT86IGJvb2xlYW47XG4gIGlzQ2hyb21lPzogYm9vbGVhbjtcbiAgaXNDaHJvbWVXZWI/OiBib29sZWFuO1xuICBpc1NhZmFyaT86IGJvb2xlYW47XG4gIGlzQW55V2ViPzogYm9vbGVhbjtcbiAgaW5jbHVkZWRfc2VnbWVudHM/OiBzdHJpbmdbXTtcbiAgZXhjbHVkZWRfc2VnbWVudHM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9wbGF5ZXJfaWRzPzogc3RyaW5nW107XG4gIGluY2x1ZGVfaW9zX3Rva2Vucz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX2FuZHJvaWRfcmVnX2lkcz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX3dwX3VyaXM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV93cF93bnNfdXJpcz86IHN0cmluZ1tdO1xuICBpbmNsdWRlX2FtYXpvbl9yZWdfaWRzPzogc3RyaW5nW107XG4gIGluY2x1ZGVfY2hyb21lX3JlZ19pZHM/OiBzdHJpbmdbXTtcbiAgaW5jbHVkZV9jaHJvbWVfd2ViX3JlZ19pZHM/OiBzdHJpbmdbXTtcbiAgYXBwX2lkcz86IHN0cmluZ1tdO1xuICB0YWdzPzogYW55W107XG4gIGlvc19iYWRnZVR5cGU/OiBzdHJpbmc7XG4gIGlvc19iYWRnZUNvdW50PzogbnVtYmVyO1xuICBpb3Nfc291bmQ/OiBzdHJpbmc7XG4gIGFuZHJvaWRfc291bmQ/OiBzdHJpbmc7XG4gIGFkbV9zb3VuZD86IHN0cmluZztcbiAgd3Bfc291bmQ/OiBzdHJpbmc7XG4gIHdwX3duc19zb3VuZD86IHN0cmluZztcbiAgZGF0YT86IGFueTtcbiAgYnV0dG9ucz86IGFueTtcbiAgY29sbGFwc2VfaWQ/OiBzdHJpbmc7XG4gIHNtYWxsX2ljb24/OiBzdHJpbmc7XG4gIGxhcmdlX2ljb24/OiBzdHJpbmc7XG4gIGJpZ19waWN0dXJlPzogc3RyaW5nO1xuICBhZG1fc21hbGxfaWNvbj86IHN0cmluZztcbiAgYWRtX2xhcmdlX2ljb24/OiBzdHJpbmc7XG4gIGFkbV9iaWdfcGljdHVyZT86IHN0cmluZztcbiAgY2hyb21lX2ljb24/OiBzdHJpbmc7XG4gIGNocm9tZV9iaWdfcGljdHVyZT86IHN0cmluZztcbiAgY2hyb21lX3dlYl9pY29uPzogc3RyaW5nO1xuICBmaXJlZm94X2ljb24/OiBzdHJpbmc7XG4gIHVybD86IHN0cmluZztcbiAgc2VuZF9hZnRlcj86IHN0cmluZztcbiAgZGVsYXllZF9vcHRpb24/OiBzdHJpbmc7XG4gIGRlbGl2ZXJ5X3RpbWVfb2ZfZGF5Pzogc3RyaW5nO1xuICBhbmRyb2lkX2xlZF9jb2xvcj86IHN0cmluZztcbiAgYW5kcm9pZF9hY2NlbnRfY29sb3I/OiBzdHJpbmc7XG4gIGFuZHJvaWRfdmlzaWJpbGl0eT86IG51bWJlcjtcbiAgY29udGVudF9hdmFpbGFibGU/OiBib29sZWFuO1xuICBhbWF6b25fYmFja2dyb3VuZF9kYXRhPzogYm9vbGVhbjtcbiAgdGVtcGxhdGVfaWQ/OiBzdHJpbmc7XG4gIGFuZHJvaWRfZ3JvdXA/OiBzdHJpbmc7XG4gIGFuZHJvaWRfZ3JvdXBfbWVzc2FnZT86IGFueTtcbiAgYWRtX2dyb3VwPzogc3RyaW5nO1xuICBhZG1fZ3JvdXBfbWVzc2FnZT86IGFueTtcbiAgdHRsPzogbnVtYmVyO1xuICBwcmlvcml0eT86IG51bWJlcjtcbiAgaW9zX2NhdGVnb3J5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqICoqQU5EUk9JRCoqIC0gUHJpdmFjeSBzZXR0aW5nIGZvciBob3cgdGhlIG5vdGlmaWNhdGlvbiBzaG91bGQgYmUgc2hvd24gb24gdGhlIGxvY2tzY3JlZW4gb2YgQW5kcm9pZCA1KyBkZXZpY2VzLlxuICovXG5leHBvcnQgZW51bSBPU0xvY2tTY3JlZW5WaXNpYmlsaXR5IHtcbiAgLyoqXG4gICAqIEZ1bGx5IHZpc2libGUgKGRlZmF1bHQpXG4gICAqL1xuICBQdWJsaWMgPSAxLFxuICAvKipcbiAgICogQ29udGVudHMgYXJlIGhpZGRlblxuICAgKi9cbiAgUHJpdmF0ZSA9IDAsXG4gIC8qKlxuICAgKiBOb3Qgc2hvd25cbiAgICovXG4gIFNlY3JldCA9IC0xLFxufVxuXG4vKipcbiAqIEhvdyB0aGUgbm90aWZpY2F0aW9uIHdhcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIuIFBhcnQgb2YgT1NOb3RpZmljYXRpb24uIFNlZSBpbkZvY3VzRGlzcGxheWluZyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBob3cgdGhpcyBpcyB1c2VkLlxuICovXG5leHBvcnQgZW51bSBPU0Rpc3BsYXlUeXBlIHtcbiAgLyoqXG4gICAqIG5vdGlmaWNhdGlvbiBpcyBzaWxlbnQsIG9yIGluRm9jdXNEaXNwbGF5aW5nIGlzIGRpc2FibGVkLlxuICAgKi9cbiAgTm9uZSA9IDAsXG4gIC8qKlxuICAgKiAoKipERUZBVUxUKiopIC0gbmF0aXZlIGFsZXJ0IGRpYWxvZyBkaXNwbGF5LlxuICAgKi9cbiAgSW5BcHBBbGVydCA9IDEsXG4gIC8qKlxuICAgKiBuYXRpdmUgbm90aWZpY2F0aW9uIGRpc3BsYXkuXG4gICAqL1xuICBOb3RpZmljYXRpb24gPSAyLFxufVxuXG4vKipcbiAqIENvbnRlbnRzIGFuZCBzZXR0aW5ncyBvZiB0aGUgbm90aWZpY2F0aW9uIHRoZSB1c2VyIHJlY2VpdmVkLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9TTm90aWZpY2F0aW9uUGF5bG9hZCB7XG4gIC8qKlxuICAgKiBPbmVTaWduYWwgbm90aWZpY2F0aW9uIFVVSUQuXG4gICAqL1xuICBub3RpZmljYXRpb25JRDogc3RyaW5nO1xuICAvKipcbiAgICogVGl0bGUgb2YgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHRpdGxlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCb2R5IG9mIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBib2R5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDdXN0b20gYWRkaXRpb25hbCBkYXRhIHRoYXQgd2FzIHNlbnQgd2l0aCB0aGUgbm90aWZpY2F0aW9uLiBTZXQgb24gdGhlIGRhc2hib2FyZCB1bmRlciBPcHRpb25zID4gQWRkaXRpb25hbCBEYXRhXG4gICAqIG9yIHdpdGggdGhlICdkYXRhJyBmaWVsZCBvbiB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICBhZGRpdGlvbmFsRGF0YT86IGFueTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gU21hbGwgaWNvbiByZXNvdXJjZSBuYW1lIHNldCBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgc21hbGxJY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBMYXJnZSBpY29uIHNldCBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgbGFyZ2VJY29uPzogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBCaWcgcGljdHVyZSBpbWFnZSBzZXQgb24gdGhlIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIGJpZ1BpY3R1cmU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIEFjY2VudCBjb2xvciBzaG93biBhcm91bmQgc21hbGwgbm90aWZpY2F0aW9uIGljb24gb24gQW5kcm9pZCA1KyBkZXZpY2VzLiBBUkdCIGZvcm1hdC5cbiAgICovXG4gIHNtYWxsSWNvbkFjY2VudENvbG9yPzogc3RyaW5nO1xuICAvKipcbiAgICogVVJMIHRvIG9wZW4gd2hlbiBvcGVuaW5nIHRoZSBub3RpZmljYXRpb24uXG4gICAqL1xuICBsYXVuY2hVUkw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTb3VuZCByZXNvdXJjZSB0byBwbGF5IHdoZW4gdGhlIG5vdGlmaWNhdGlvbiBpcyBzaG93bi5cbiAgICovXG4gIHNvdW5kOiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIERldmljZXMgdGhhdCBoYXZlIGEgbm90aWZpY2F0aW9uIExFRCB3aWxsIGJsaW5rIGluIHRoaXMgY29sb3IuIEFSR0IgZm9ybWF0LlxuICAgKi9cbiAgbGVkQ29sb3I/OiBzdHJpbmc7XG4gIGxvY2tTY3JlZW5WaXNpYmlsaXR5PzogT1NMb2NrU2NyZWVuVmlzaWJpbGl0eTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gTm90aWZpY2F0aW9ucyB3aXRoIHRoaXMgc2FtZSBrZXkgd2lsbCBiZSBncm91cGVkIHRvZ2V0aGVyIGFzIGEgc2luZ2xlIHN1bW1hcnkgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgZ3JvdXBLZXk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIFN1bW1hcnkgdGV4dCBkaXNwbGF5ZWQgaW4gdGhlIHN1bW1hcnkgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgZ3JvdXBNZXNzYWdlPzogc3RyaW5nO1xuICAvKipcbiAgICogTGlzdCBvZiBhY3Rpb24gYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgYWN0aW9uQnV0dG9uczogT1NBY3Rpb25CdXR0b25bXTtcbiAgLyoqXG4gICAqICoqQU5EUk9JRCoqIC0gVGhlIEdvb2dsZSBwcm9qZWN0IG51bWJlciB0aGUgbm90aWZpY2F0aW9uIHdhcyBzZW50IHVuZGVyLlxuICAgKi9cbiAgZnJvbVByb2plY3ROdW1iZXI/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiAqKkFORFJPSUQqKiAtIElmIGEgYmFja2dyb3VuZCBpbWFnZSB3YXMgc2V0IHRoaXMgb2JqZWN0IHdpbGwgYmUgYXZhaWxhYmxlLlxuICAgKi9cbiAgYmFja2dyb3VuZEltYWdlTGF5b3V0PzogT1NCYWNrZ3JvdW5kSW1hZ2VMYXlvdXQ7XG4gIHByaW9yaXR5PzogbnVtYmVyO1xuICAvKipcbiAgICogTGlzdCBvZiBhY3Rpb24gYnV0dG9ucyBvbiB0aGUgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgcmF3UGF5bG9hZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWN0aW9uIGJ1dHRvbnMgb24gdGhlIG5vdGlmaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU0FjdGlvbkJ1dHRvbiB7XG4gIC8qKlxuICAgKiBJZCBhc3NpZ25lZCB0byB0aGUgYnV0dG9uLlxuICAgKi9cbiAgaWQ6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgc2hvdyBvbiB0aGUgYnV0dG9uIHRvIHRoZSB1c2VyLlxuICAgKi9cbiAgdGV4dDogc3RyaW5nO1xuICAvKipcbiAgICogKipBTkRST0lEKiogLSBJY29uIHNob3duIG9uIHRoZSBidXR0b24uXG4gICAqL1xuICBpY29uOiBzdHJpbmc7XG59XG5cbi8qKlxuICogT1NQZXJtaXNzaW9uU3RhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU1Blcm1pc3Npb25TdGF0ZSB7XG4gIC8qKlxuICAgKiBVc2VyIHdhcyBwcm9tcHRlZC5cbiAgICovXG4gIGhhc1Byb21wdGVkOiBib29sZWFuO1xuICAvKipcbiAgICogUGVybWlzc2lvbnMgU3RhdHVzIChpT1MgT25seSlcbiAgICovXG4gIHN0YXR1czogYW55O1xuICAvKipcbiAgICogUGVybWlzc2lvbnMgU3RhdGUgKEFuZHJvaWQgT25seSlcbiAgICovXG4gIHN0YXRlOiBhbnk7XG59XG5cbi8qKlxuICogT1NTdWJzY3JpcHRpb25TdGF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE9TU3Vic2NyaXB0aW9uU3RhdGUge1xuICBzdWJzY3JpYmVkOiBib29sZWFuO1xuICB1c2VyU3Vic2NyaXB0aW9uU2V0dGluZzogYW55O1xuICB1c2VySWQ6IGFueTtcbiAgcHVzaFRva2VuOiBhbnk7XG59XG5cbi8qKlxuICogU3Vic2NyaXB0aW9uIGFuZCBwZXJtaXNzaW9ucyBzdGF0dXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU1Blcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZSB7XG4gIC8qKlxuICAgKiBJZCBhc3NpZ25lZCB0byB0aGUgYnV0dG9uLlxuICAgKi9cbiAgcGVybWlzc2lvblN0YXR1czogT1NQZXJtaXNzaW9uU3RhdGU7XG4gIC8qKlxuICAgKiBUZXh0IHNob3cgb24gdGhlIGJ1dHRvbiB0byB0aGUgdXNlci5cbiAgICovXG4gIHN1YnNjcmlwdGlvblN0YXR1czogT1NTdWJzY3JpcHRpb25TdGF0ZTtcbn1cblxuLyoqXG4gKiAqKkFORFJPSUQqKiAtIElmIGEgYmFja2dyb3VuZCBpbWFnZSB3YXMgc2V0LCB0aGlzIG9iamVjdCB3aWxsIGJlIGF2YWlsYWJsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPU0JhY2tncm91bmRJbWFnZUxheW91dCB7XG4gIC8qKlxuICAgKiBJbWFnZSBVUkwgb3IgbmFtZSB1c2VkIGFzIHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxuICAgKi9cbiAgaW1hZ2U6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgY29sb3Igb2YgdGhlIHRpdGxlIG9uIHRoZSBub3RpZmljYXRpb24uIEFSR0IgRm9ybWF0LlxuICAgKi9cbiAgdGl0bGVUZXh0Q29sb3I6IHN0cmluZztcbiAgLyoqXG4gICAqIFRleHQgY29sb3Igb2YgdGhlIGJvZHkgb24gdGhlIG5vdGlmaWNhdGlvbi4gQVJHQiBGb3JtYXQuXG4gICAqL1xuICBib2R5VGV4dENvbG9yOiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhlIGluZm9ybWF0aW9uIHJldHVybmVkIGZyb20gYSBub3RpZmljYXRpb24gdGhlIHVzZXIgcmVjZWl2ZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT1NOb3RpZmljYXRpb25PcGVuZWRSZXN1bHQge1xuICBhY3Rpb246IHtcbiAgICAvKipcbiAgICAgKiBXYXMgdGhlIG5vdGlmaWNhdGlvbiBvcGVuZWQgbm9ybWFsbHkgKGBPcGVuZWRgKSBvciB3YXMgYSBidXR0b24gcHJlc3NlZCBvbiB0aGUgbm90aWZpY2F0aW9uIChgQWN0aW9uVGFrZW5gKS5cbiAgICAgKi9cbiAgICB0eXBlOiBPU0FjdGlvblR5cGU7XG4gICAgLyoqXG4gICAgICogSWYgYHR5cGVgID09IGBBY3Rpb25UYWtlbmAgdGhlbiB0aGlzIHdpbGwgY29udGFpbiB0aGUgaWQgb2YgdGhlIGJ1dHRvbiBwcmVzc2VkLlxuICAgICAqL1xuICAgIGFjdGlvbklEPzogc3RyaW5nO1xuICB9O1xuICBub3RpZmljYXRpb246IE9TTm90aWZpY2F0aW9uO1xufVxuXG5leHBvcnQgZW51bSBPU0FjdGlvblR5cGUge1xuICBPcGVuZWQgPSAwLFxuICBBY3Rpb25UYWtlID0gMSxcbn1cblxuLyoqXG4gKiBEZXRhaWxzIGFib3V0IHRoZSBJbi1BcHAgTWVzc2FnZSBhY3Rpb24gZWxlbWVudCAoYnV0dG9uIG9yIGltYWdlKSB0aGF0IHdhcyB0YXBwZWQgb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT1NJbkFwcE1lc3NhZ2VBY3Rpb24ge1xuICAvKipcbiAgICogQW4gb3B0aW9uYWwgY2xpY2sgbmFtZSBkZWZpbmVkIGZvciB0aGUgYWN0aW9uIGVsZW1lbnQuIG51bGwgb3IgbmlsIChpT1MpIGlmIG5vdCBzZXQuXG4gICAqL1xuICBjbGlja19uYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBbiBvcHRpb25hbCBVUkwgdGhhdCBvcGVucyB3aGVuIHRoZSBhY3Rpb24gdGFrZXMgcGxhY2UuIG51bGwgb3IgbmlsIChpT1MpIGlmIG5vdCBzZXQuXG4gICAqL1xuICBjbGlja191cmw6IHN0cmluZztcbiAgLyoqXG4gICAqIGB0cnVlYCBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHRoZSB1c2VyIGhhcyBwcmVzc2VkIGFueSBhY3Rpb24gb24gdGhlIEluLUFwcCBNZXNzYWdlLlxuICAgKi9cbiAgZmlyc3RfY2xpY2s6IGJvb2xlYW47XG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBJbi1BcHAgTWVzc2FnZSB3aWxsIGFuaW1hdGUgb2ZmIHRoZSBzY3JlZW4uIElmIGBmYWxzZWAsIHRoZSBJbi1BcHAgTWVzc2FnZSB3aWxsIHN0YXkgb24gc2NyZWVuIHVudGlsIHRoZSB1c2VyIGRpc21pc3NlcyBpdC5cbiAgICovXG4gIGNsb3Nlc19tZXNzYWdlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIE9uZVNpZ25hbFxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgT25lU2lnbmFsIHBsdWdpbiBpcyBhbiBjbGllbnQgaW1wbGVtZW50YXRpb24gZm9yIHVzaW5nIHRoZSBbT25lU2lnbmFsXShodHRwczovL29uZXNpZ25hbC5jb20vKSBTZXJ2aWNlLlxuICogT25lU2lnbmFsIGlzIGEgc2ltcGxlIGltcGxlbWVudGF0aW9uIGZvciBkZWxpdmVyaW5nIHB1c2ggbm90aWZpY2F0aW9ucy5cbiAqXG4gKiBQbGVhc2UgdmlldyB0aGUgb2ZmaWNpYWwgW09uZVNpZ25hbCBJb25pYyBTREsgSW5zdGFsbGF0aW9uXShodHRwczovL2RvY3VtZW50YXRpb24ub25lc2lnbmFsLmNvbS9kb2NzL2lvbmljLXNkay1zZXR1cCkgZ3VpZGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICpcbiAqICMjIyMgSWNvbnNcbiAqIElmIHlvdSB3YW50IHRvIHVzZSBnZW5lcmF0ZWQgaWNvbnMgd2l0aCBjb21tYW5kIGBpb25pYyBjb3Jkb3ZhIHJlc291cmNlc2A6XG4gKlxuICogMS4gQWRkIGEgZmlsZSB0byB5b3VyIGBob29rc2AgZGlyZWN0b3J5IGNhbGxlZCBgY29weV9hbmRyb2lkX25vdGlmaWNhdGlvbl9pY29ucy5qc2BcbiAqXG4gKiAyLiBDb25maWd1cmUgdGhlIGhvb2sgaW4geW91ciBjb25maWcueG1sXG4gKiBgYGBcbiAqICAgICA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cbiAqICAgICAgICAgPGhvb2sgdHlwZT1cImFmdGVyX3ByZXBhcmVcIiBzcmM9XCJob29rcy9jb3B5X2FuZHJvaWRfbm90aWZpY2F0aW9uX2ljb25zLmpzXCIgLz5cbiAqICAgICA8L3BsYXRmb3JtPlxuICogYGBgXG4gKlxuICogMy4gUHV0IHRoZSBmb2xsb3dpbmcgY29kZSBpbiBpdDpcbiAqXG4gKiBgYGBcbiAqICMhL3Vzci9iaW4vZW52IG5vZGVcbiAqXG4gKiB2YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuICogdmFyIHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gKlxuICogdmFyIGZpbGVzdG9jb3B5ID0gW3tcbiAqICAgICBcInJlc291cmNlcy9hbmRyb2lkL2ljb24vZHJhd2FibGUtaGRwaS1pY29uLnBuZ1wiOlxuICogICAgICAgICBcInBsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUtaGRwaS9pY19zdGF0X29uZXNpZ25hbF9kZWZhdWx0LnBuZ1wiXG4gKiB9LCB7XG4gKiAgICAgXCJyZXNvdXJjZXMvYW5kcm9pZC9pY29uL2RyYXdhYmxlLW1kcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLW1kcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSwge1xuICogICAgIFwicmVzb3VyY2VzL2FuZHJvaWQvaWNvbi9kcmF3YWJsZS14aGRwaS1pY29uLnBuZ1wiOlxuICogICAgICAgICBcInBsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvZHJhd2FibGUteGhkcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSwge1xuICogICAgIFwicmVzb3VyY2VzL2FuZHJvaWQvaWNvbi9kcmF3YWJsZS14eGhkcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLXh4aGRwaS9pY19zdGF0X29uZXNpZ25hbF9kZWZhdWx0LnBuZ1wiXG4gKiB9LCB7XG4gKiAgICAgXCJyZXNvdXJjZXMvYW5kcm9pZC9pY29uL2RyYXdhYmxlLXh4eGhkcGktaWNvbi5wbmdcIjpcbiAqICAgICAgICAgXCJwbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL2RyYXdhYmxlLXh4eGhkcGkvaWNfc3RhdF9vbmVzaWduYWxfZGVmYXVsdC5wbmdcIlxuICogfSBdO1xuICpcbiAqIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29udGV4dCkge1xuICpcbiAqICAgICAvLyBubyBuZWVkIHRvIGNvbmZpZ3VyZSBiZWxvd1xuICogICAgIHZhciByb290ZGlyID0gY29udGV4dC5vcHRzLnByb2plY3RSb290O1xuICpcbiAqICAgICBmaWxlc3RvY29weS5mb3JFYWNoKGZ1bmN0aW9uKG9iaikge1xuICogICAgICAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gKiAgICAgICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG4gKiAgICAgICAgICAgICB2YXIgc3JjZmlsZSA9IHBhdGguam9pbihyb290ZGlyLCBrZXkpO1xuICogICAgICAgICAgICAgdmFyIGRlc3RmaWxlID0gcGF0aC5qb2luKHJvb3RkaXIsIHZhbCk7XG4gKiAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvcHlpbmcgXCIrc3JjZmlsZStcIiB0byBcIitkZXN0ZmlsZSk7XG4gKiAgICAgICAgICAgICB2YXIgZGVzdGRpciA9IHBhdGguZGlybmFtZShkZXN0ZmlsZSk7XG4gKiAgICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhzcmNmaWxlKSAmJiBmcy5leGlzdHNTeW5jKGRlc3RkaXIpKSB7XG4gKiAgICAgICAgICAgICAgICAgZnMuY3JlYXRlUmVhZFN0cmVhbShzcmNmaWxlKS5waXBlKFxuICogICAgICAgICAgICAgICAgICAgICBmcy5jcmVhdGVXcml0ZVN0cmVhbShkZXN0ZmlsZSkpO1xuICogICAgICAgICAgICAgfVxuICogICAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqXG4gKiB9O1xuICogYGBgXG4gKlxuICogMy4gRnJvbSB0aGUgcm9vdCBvZiB5b3VyIHByb2plY3QgbWFrZSB0aGUgZmlsZSBleGVjdXRhYmxlOlxuICogYCQgY2htb2QgK3ggaG9va3MvY29weV9hbmRyb2lkX25vdGlmaWNhdGlvbl9pY29ucy5qc2BcbiAqXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBPbmVTaWduYWwgfSBmcm9tICdAaW9uaWMtbmF0aXZlL29uZXNpZ25hbC9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgb25lU2lnbmFsOiBPbmVTaWduYWwpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMub25lU2lnbmFsLnN0YXJ0SW5pdCgnYjJmN2Y5NjYtZDhjYy0xMWU0LWJlZDEtZGY4ZjA1YmU1NWJhJywgJzcwMzMyMjc0NDI2MScpO1xuICpcbiAqIHRoaXMub25lU2lnbmFsLmluRm9jdXNEaXNwbGF5aW5nKHRoaXMub25lU2lnbmFsLk9TSW5Gb2N1c0Rpc3BsYXlPcHRpb24uSW5BcHBBbGVydCk7XG4gKlxuICogdGhpcy5vbmVTaWduYWwuaGFuZGxlTm90aWZpY2F0aW9uUmVjZWl2ZWQoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICogIC8vIGRvIHNvbWV0aGluZyB3aGVuIG5vdGlmaWNhdGlvbiBpcyByZWNlaXZlZFxuICogfSk7XG4gKlxuICogdGhpcy5vbmVTaWduYWwuaGFuZGxlTm90aWZpY2F0aW9uT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAqICAgLy8gZG8gc29tZXRoaW5nIHdoZW4gYSBub3RpZmljYXRpb24gaXMgb3BlbmVkXG4gKiB9KTtcbiAqXG4gKiB0aGlzLm9uZVNpZ25hbC5lbmRJbml0KCk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBPU05vdGlmaWNhdGlvblxuICogT1NMb2NrU2NyZWVuVmlzaWJpbGl0eVxuICogT1NEaXNwbGF5VHlwZVxuICogT1NOb3RpZmljYXRpb25QYXlsb2FkXG4gKiBPU0FjdGlvbkJ1dHRvblxuICogT1NCYWNrZ3JvdW5kSW1hZ2VMYXlvdXRcbiAqIE9TTm90aWZpY2F0aW9uT3BlbmVkUmVzdWx0XG4gKiBPU0FjdGlvblR5cGVcbiAqIE9TSW5BcHBNZXNzYWdlQWN0aW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnT25lU2lnbmFsJyxcbiAgcGx1Z2luOiAnb25lc2lnbmFsLWNvcmRvdmEtcGx1Z2luJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5PbmVTaWduYWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL09uZVNpZ25hbC9PbmVTaWduYWwtQ29yZG92YS1TREsnLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPbmVTaWduYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBjb25zdGFudHMgdG8gdXNlIGluIGluRm9jdXNEaXNwbGF5aW5nKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgT1NJbkZvY3VzRGlzcGxheU9wdGlvbiA9IHtcbiAgICBOb25lOiAwLFxuICAgIEluQXBwQWxlcnQ6IDEsXG4gICAgTm90aWZpY2F0aW9uOiAyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy4gT25jZSB5b3UgYXJlIGRvbmUgY29uZmlndXJpbmcgT25lU2lnbmFsLCBjYWxsIHRoZSBgZW5kSW5pdGAgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhcHBJZCBZb3VyIE9uZVNpZ25hbCBhcHAgaWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGdvb2dsZVByb2plY3ROdW1iZXIgKipBTkRST0lEKiogLSB5b3VyIEdvb2dsZSBwcm9qZWN0IG51bWJlcjsgb25seSByZXF1aXJlZCBmb3IgQW5kcm9pZCBHQ00vRkNNIHB1c2hlcy5cbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydEluaXQoYXBwSWQ6IHN0cmluZywgZ29vZ2xlUHJvamVjdE51bWJlcj86IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHJ1biB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIHJlY2VpdmVkLCB3aGV0aGVyIGl0IHdhcyBkaXNwbGF5ZWQgb3Igbm90LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9uZVNpZ25hbFJlY2VpdmVkTm90aWZpY2F0aW9uPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBoYW5kbGVOb3RpZmljYXRpb25SZWNlaXZlZCgpOiBPYnNlcnZhYmxlPE9TTm90aWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIHJ1biB3aGVuIGEgbm90aWZpY2F0aW9uIGlzIHRhcHBlZCBvbiBmcm9tIHRoZSBub3RpZmljYXRpb24gc2hhZGUgKCoqQU5EUk9JRCoqKSBvciBub3RpZmljYXRpb25cbiAgICogY2VudGVyICgqKmlPUyoqKSwgb3Igd2hlbiBjbG9zaW5nIGFuIEFsZXJ0IG5vdGlmaWNhdGlvbiBzaG93biBpbiB0aGUgYXBwIChpZiBJbkFwcEFsZXJ0IGlzIGVuYWJsZWQgaW5cbiAgICogaW5Gb2N1c0Rpc3BsYXlpbmcpLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPE9uZVNpZ25hbE9wZW5lZE5vdGlmaWNhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgfSlcbiAgaGFuZGxlTm90aWZpY2F0aW9uT3BlbmVkKCk6IE9ic2VydmFibGU8T1NOb3RpZmljYXRpb25PcGVuZWRSZXN1bHQ+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRvIHByb2Nlc3MgYW4gSW4tQXBwIE1lc3NhZ2UgdGhlIHVzZXIganVzdCB0YXBwZWQgb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8T1NJbkFwcE1lc3NhZ2VBY3Rpb24+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIGhhbmRsZUluQXBwTWVzc2FnZUNsaWNrZWQoKTogT2JzZXJ2YWJsZTxPU0luQXBwTWVzc2FnZUFjdGlvbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiAqKmlPUyoqIC0gU2V0dGluZ3MgZm9yIGlPUyBhcHBzXG4gICAqXG4gICAqIEBwYXJhbSBzZXR0aW5nc1xuICAgKiAga09TU2V0dGluZ3NLZXlBdXRvUHJvbXB0OiBib29sZWFuID0gdHJ1ZVxuICAgKiAgQXV0byBwcm9tcHQgdXNlciBmb3Igbm90aWZpY2F0aW9uIHBlcm1pc3Npb25zLlxuICAgKlxuICAgKiAga09TU2V0dGluZ3NLZXlJbkFwcExhdW5jaFVSTDogYm9vbGVhbiA9IGZhbHNlXG4gICAqICBMYXVuY2ggbm90aWZpY2F0aW9ucyB3aXRoIGEgbGF1bmNoIFVSTCBhcyBhbiBpbiBhcHAgd2Vidmlldy5cbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgaU9TU2V0dGluZ3Moc2V0dGluZ3M6IHsga09TU2V0dGluZ3NLZXlBdXRvUHJvbXB0OiBib29sZWFuOyBrT1NTZXR0aW5nc0tleUluQXBwTGF1bmNoVVJMOiBib29sZWFuIH0pOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNdXN0IGJlIGNhbGxlZCBhZnRlciBgc3RhcnRJbml0YCB0byBjb21wbGV0ZSBpbml0aWFsaXphdGlvbiBvZiBPbmVTaWduYWwuXG4gICAqXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5kSW5pdCgpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tcHQgdGhlIHVzZXIgZm9yIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9ucy4gQ2FsbGJhY2sgZmlyZXMgYXMgc29vbiBhcyB0aGUgdXNlciBhY2NlcHRzIG9yIGRlY2xpbmVzIG5vdGlmaWNhdGlvbnMuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXSxcbiAgfSlcbiAgcHJvbXB0Rm9yUHVzaE5vdGlmaWNhdGlvbnNXaXRoVXNlclJlc3BvbnNlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIGxpc3Qgb2YgdGFncyB0aGF0IGhhdmUgYmVlbiBzZXQgb24gdGhlIHVzZXIgZnJvbSB0aGUgT25lU2lnbmFsIHNlcnZlci5cbiAgICpcbiAgICogKipRdWlyayoqOiBZb3UgbXVzdCB3YWl0IGZvciBgZ2V0VGFnc2AgdG8gcmVzb2x2ZSBiZWZvcmUgY2FsbGluZyBpdCBhZ2FpbiwgYXMgdGhlIHBsdWdpbiB3aWxsIG9ubHkgcHJvY2VzcyB0aGUgbGFzdCBtZXRob2QgY2FsbCBhbmQgZGlzY2FyZCBhbnkgcHJldmlvdXMgb25lcy5cbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRhZ3MgYXJlIHJlY2lldmVkLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRUYWdzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExldHMgeW91IHJldHJpZXZlIHRoZSBPbmVTaWduYWwgdXNlciBpZCBhbmQgZGV2aWNlIHRva2VuLlxuICAgKiBZb3VyIGhhbmRsZXIgaXMgY2FsbGVkIGFmdGVyIHRoZSBkZXZpY2UgaXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQgd2l0aCBPbmVTaWduYWwuXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE9iamVjdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGRldmljZSB3YXMgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWQuXG4gICAqXG4gICAqICB1c2VySWQge3N0cmluZ30gT25lU2lnbmFsIHVzZXJJZCBpcyBhIFVVSUQgZm9ybWF0dGVkIHN0cmluZy4gKHVuaXF1ZSBwZXIgZGV2aWNlIHBlciBhcHApXG4gICAqXG4gICAqICBwdXNoVG9rZW4ge3N0cmluZ30gQSBwdXNoIHRva2VuIGlzIGEgR29vZ2xlL0FwcGxlIGFzc2lnbmVkIGlkZW50aWZpZXIodW5pcXVlIHBlciBkZXZpY2UgcGVyIGFwcCkuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldElkcygpOiBQcm9taXNlPHsgdXNlcklkOiBzdHJpbmc7IHB1c2hUb2tlbjogc3RyaW5nIH0+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGFnIGEgdXNlciBiYXNlZCBvbiBhbiBhcHAgZXZlbnQgb2YgeW91ciBjaG9vc2luZyBzbyBsYXRlciB5b3UgY2FuIGNyZWF0ZSBzZWdtZW50cyBvbiBbb25lc2lnbmFsLmNvbV0oaHR0cHM6Ly9vbmVzaWduYWwuY29tLykgdG8gdGFyZ2V0IHRoZXNlIHVzZXJzLlxuICAgKiBSZWNvbW1lbmQgdXNpbmcgc2VuZFRhZ3Mgb3ZlciBzZW5kVGFnIGlmIHlvdSBuZWVkIHRvIHNldCBtb3JlIHRoYW4gb25lIHRhZyBvbiBhIHVzZXIgYXQgYSB0aW1lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gS2V5IG9mIHlvdXIgY2hvb3NpbmcgdG8gY3JlYXRlIG9yIHVwZGF0ZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFZhbHVlIHRvIHNldCBvbiB0aGUga2V5LiBOT1RFOiBQYXNzaW5nIGluIGEgYmxhbmsgU3RyaW5nIGRlbGV0ZXMgdGhlIGtleSwgeW91IGNhbiBhbHNvIGNhbGwgZGVsZXRlVGFnLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNlbmRUYWcoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRhZyBhIHVzZXIgYmFzZWQgb24gYW4gYXBwIGV2ZW50IG9mIHlvdXIgY2hvb3Npbmcgc28gbGF0ZXIgeW91IGNhbiBjcmVhdGUgc2VnbWVudHMgb24gW29uZXNpZ25hbC5jb21dKGh0dHBzOi8vb25lc2lnbmFsLmNvbS8pIHRvIHRhcmdldCB0aGVzZSB1c2Vycy5cbiAgICogUmVjb21tZW5kIHVzaW5nIHNlbmRUYWdzIG92ZXIgc2VuZFRhZyBpZiB5b3UgbmVlZCB0byBzZXQgbW9yZSB0aGFuIG9uZSB0YWcgb24gYSB1c2VyIGF0IGEgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFBhc3MgYSBqc29uIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBsaWtlOiB7a2V5OiBcInZhbHVlXCIsIGtleTI6IFwidmFsdWUyXCJ9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2VuZFRhZ3MoanNvbjogYW55KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgdGFnIHRoYXQgd2FzIHByZXZpb3VzbHkgc2V0IG9uIGEgdXNlciB3aXRoIGBzZW5kVGFnYCBvciBgc2VuZFRhZ3NgLiBVc2UgYGRlbGV0ZVRhZ3NgIGlmIHlvdSBuZWVkIHRvIGRlbGV0ZSBtb3JlIHRoYW4gb25lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gS2V5IHRvIHJlbW92ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBkZWxldGVUYWcoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgdGFncyB0aGF0IHdlcmUgcHJldmlvdXNseSBzZXQgb24gYSB1c2VyIHdpdGggYHNlbmRUYWdgIG9yIGBzZW5kVGFnc2AuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IEtleXMgdG8gcmVtb3ZlLlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlbGV0ZVRhZ3Moa2V5czogc3RyaW5nW10pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENhbGwgdGhpcyB3aGVuIHlvdSB3b3VsZCBsaWtlIHRvIHByb21wdCBhbiBpT1MgdXNlciB0byBhY2NlcHQgcHVzaCBub3RpZmljYXRpb25zIHdpdGggdGhlIGRlZmF1bHQgc3lzdGVtIHByb21wdC5cbiAgICogT25seSB3b3JrcyBpZiB5b3Ugc2V0IGBrT1NTZXR0aW5nc0F1dG9Qcm9tcHRgIHRvIGBmYWxzZWAgaW4gYGlPU1NldHRpbmdzYFxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHJlZ2lzdGVyRm9yUHVzaE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBXYXJuaW5nOlxuICAgKiBPbmx5IGFwcGxpZXMgdG8gQW5kcm9pZCBhbmQgQW1hem9uLiBZb3UgY2FuIGNhbGwgdGhpcyBmcm9tIHlvdXIgVUkgZnJvbSBhIGJ1dHRvbiBwcmVzcyBmb3IgZXhhbXBsZSB0byBnaXZlIHlvdXIgdXNlcidzIG9wdGlvbnMgZm9yIHlvdXIgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCBPbmVTaWduYWwgYWx3YXlzIHZpYnJhdGVzIHRoZSBkZXZpY2Ugd2hlbiBhIG5vdGlmaWNhdGlvbiBpcyBkaXNwbGF5ZWQgdW5sZXNzIHRoZSBkZXZpY2UgaXMgaW4gYSB0b3RhbCBzaWxlbnQgbW9kZS5cbiAgICogUGFzc2luZyBmYWxzZSBtZWFucyB0aGF0IHRoZSBkZXZpY2Ugd2lsbCBvbmx5IHZpYnJhdGUgbGlnaHRseSB3aGVuIHRoZSBkZXZpY2UgaXMgaW4gaXQncyB2aWJyYXRlIG9ubHkgbW9kZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBmYWxzZSB0byBkaXNhYmxlIHZpYnJhdGUsIHRydWUgdG8gcmUtZW5hYmxlIGl0LlxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuYWJsZVZpYnJhdGUoZW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBXYXJuaW5nOlxuICAgKiBPbmx5IGFwcGxpZXMgdG8gQW5kcm9pZCBhbmQgQW1hem9uLiBZb3UgY2FuIGNhbGwgdGhpcyBmcm9tIHlvdXIgVUkgZnJvbSBhIGJ1dHRvbiBwcmVzcyBmb3IgZXhhbXBsZSB0byBnaXZlIHlvdXIgdXNlcidzIG9wdGlvbnMgZm9yIHlvdXIgbm90aWZpY2F0aW9ucy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCBPbmVTaWduYWwgcGxheXMgdGhlIHN5c3RlbSdzIGRlZmF1bHQgbm90aWZpY2F0aW9uIHNvdW5kIHdoZW4gdGhlIGRldmljZSdzIG5vdGlmaWNhdGlvbiBzeXN0ZW0gdm9sdW1lIGlzIHR1cm5lZCBvbi5cbiAgICogUGFzc2luZyBmYWxzZSBtZWFucyB0aGF0IHRoZSBkZXZpY2Ugd2lsbCBvbmx5IHZpYnJhdGUgdW5sZXNzIHRoZSBkZXZpY2UgaXMgc2V0IHRvIGEgdG90YWwgc2lsZW50IG1vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZmFsc2UgdG8gZGlzYWJsZSBzb3VuZCwgdHJ1ZSB0byByZS1lbmFibGUgaXQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5hYmxlU291bmQoZW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBTZXR0aW5nIHRvIGNvbnRyb2wgaG93IE9uZVNpZ25hbCBub3RpZmljYXRpb25zIHdpbGwgYmUgc2hvd24gd2hlbiBvbmUgaXMgcmVjZWl2ZWQgd2hpbGUgeW91ciBhcHAgaXMgaW4gZm9jdXMuIEJ5IGRlZmF1bHQgdGhpcyBpcyBzZXQgdG8gaW5BcHBBbGVydCwgd2hpY2ggY2FuIGJlIGhlbHBmdWwgZHVyaW5nIGRldmVsb3BtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0Rpc3BsYXlUeXBlfSBkaXNwbGF5T3B0aW9uXG4gICAqIEByZXR1cm5zIHthbnl9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaW5Gb2N1c0Rpc3BsYXlpbmcoZGlzcGxheU9wdGlvbjogT1NEaXNwbGF5VHlwZSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZCB3aXRoIGZhbHNlIHRvIG9wdCB1c2VycyBvdXQgb2YgcmVjZWl2aW5nIGFsbCBub3RpZmljYXRpb25zIHRocm91Z2ggT25lU2lnbmFsLlxuICAgKiBZb3UgY2FuIHBhc3MgdHJ1ZSBsYXRlciB0byBvcHQgdXNlcnMgYmFjayBpbnRvIG5vdGlmaWNhdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Vic2NyaXB0aW9uKGVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IG5vdGlmaWNhdGlvbiBhbmQgcGVybWlzc2lvbiBzdGF0ZS4gUmV0dXJucyBhIE9TUGVybWlzc2lvblN1YnNjcmlwdGlvblN0YXRlIHR5cGUgZGVzY3JpYmVkIGJlbG93LlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPU1Blcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFBlcm1pc3Npb25TdWJzY3JpcHRpb25TdGF0ZSgpOiBQcm9taXNlPE9TUGVybWlzc2lvblN1YnNjcmlwdGlvblN0YXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7bm90aWZpY2F0aW9uT2JqfSBQYXJhbWV0ZXJzIHNlZSBQT1NUIFtkb2N1bWVudGF0aW9uXShodHRwczovL2RvY3VtZW50YXRpb24ub25lc2lnbmFsLmNvbS92Mi4wL2RvY3Mvbm90aWZpY2F0aW9ucy1jcmVhdGUtbm90aWZpY2F0aW9uKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBub3RpZmljYXRpb24gd2FzIHNlbmQgc3VjY2Vzc2Z1bGx5LlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBwb3N0Tm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbk9iajogT1NOb3RpZmljYXRpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYW5jZWxzIGEgc2luZ2xlIE9uZVNpZ25hbCBub3RpZmljYXRpb24gYmFzZWQgb24gaXRzIEFuZHJvaWQgbm90aWZpY2F0aW9uIGludGVnZXIgaWQuIFVzZSBpbnN0ZWFkIG9mIE5vdGlmaWNhdGlvbk1hbmFnZXIuY2FuY2VsKGlkKTsgb3RoZXJ3aXNlIHRoZSBub3RpZmljYXRpb24gd2lsbCBiZSByZXN0b3JlZCB3aGVuIHlvdXIgYXBwIGlzIHJlc3RhcnRlZC5cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbklkIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2FuY2VsTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbklkOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFByb21wdHMgdGhlIHVzZXIgZm9yIGxvY2F0aW9uIHBlcm1pc3Npb24gdG8gYWxsb3cgZ2VvdGFnZ2luZyBiYXNlZCBvbiB0aGUgXCJMb2NhdGlvbiByYWRpdXNcIiBmaWx0ZXIgb24gdGhlIE9uZVNpZ25hbCBkYXNoYm9hcmQuXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcHJvbXB0TG9jYXRpb24oKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZW1haWwge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzeW5jSGFzaGVkRW1haWwoZW1haWw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogRW5hYmxlIGxvZ2dpbmcgdG8gaGVscCBkZWJ1ZyBpZiB5b3UgcnVuIGludG8gYW4gaXNzdWUgc2V0dGluZyB1cCBPbmVTaWduYWwuXG4gICAqIFRoZSBsb2dnaW5nIGxldmVscyBhcmUgYXMgZm9sbG93czogMCA9IE5vbmUsIDE9IEZhdGFsLCAyID0gRXJyb3JzLCAzID0gV2FybmluZ3MsIDQgPSBJbmZvLCA1ID0gRGVidWcsIDYgPSBWZXJib3NlXG4gICAqXG4gICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlIHRoZSBtb3JlIGluZm9ybWF0aW9uIGlzIHNob3duLlxuICAgKlxuICAgKiBAcGFyYW0ge2xvZ2xldmVsfSBjb250YWlucyB0d28gcHJvcGVydGllczogbG9nTGV2ZWwgKGZvciBjb25zb2xlIGxvZ2dpbmcpIGFuZCB2aXN1YWxMZXZlbCAoZm9yIGRpYWxvZyBtZXNzYWdlcylcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRMb2dMZXZlbChsb2dMZXZlbDogeyBsb2dMZXZlbDogbnVtYmVyOyB2aXN1YWxMZXZlbDogbnVtYmVyIH0pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgb3IgZW5hYmxlIGxvY2F0aW9uIGNvbGxlY3Rpb24gKERlZmF1bHRzIHRvIGVuYWJsZWQpIGlmIHlvdXIgYXBwIGhhcyBsb2NhdGlvbiBwZXJtaXNzaW9uLlxuICAgKiBAcGFyYW0gc2hhcmVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNldExvY2F0aW9uU2hhcmVkKHNoYXJlZDogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogVGhlIHBhc3NlZCBpbiBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gYSBub3RpZmljYXRpb24gcGVybWlzc2lvbiBzZXR0aW5nIGNoYW5nZXMuXG4gICAqIFRoaXMgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBldmVudHM6XG4gICAqIC0gTm90aWZpY2F0aW9uIHBlcm1pc3Npb24gcHJvbXB0IHNob3duXG4gICAqIC0gVGhlIHVzZXIgYWNjZXB0aW5nIG9yIGRlY2xpbmluZyB0aGUgcGVybWlzc2lvbiBwcm9tcHRcbiAgICogLSBFbmFibGluZy9kaXNhYmxpbmcgbm90aWZpY2F0aW9ucyBmb3IgeW91ciBhcHAgaW4gdGhlIGRldmljZSBTZXR0aW5ncyBhZnRlciByZXR1cm5pbmcgdG8geW91ciBhcHAuXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBhZGRQZXJtaXNzaW9uT2JzZXJ2ZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhc3NlZCBpbiBmdW5jdGlvbiB3aWxsIGJlIGZpcmVkIHdoZW4gYSBub3RpZmljYXRpb24gc3Vic2NyaXB0aW9uIHByb3BlcnR5IGNoYW5nZXMuXG4gICAqIFRoaXMgaW5jbHVkZXMgdGhlIGZvbGxvd2luZyBldmVudHM6XG4gICAqIC0gR2V0dGluZyBhIHB1c2ggdG9rZW4gZnJvbSBBcHBsZSAvIEdvb2dsZS5cbiAgICogLSBHZXR0aW5nIGEgcGxheWVyIC8gdXNlciBpZCBmcm9tIE9uZVNpZ25hbFxuICAgKiAtIE9uZVNpZ25hbC5zZXRTdWJzY3JpcHRpb24gaXMgY2FsbGVkXG4gICAqIC0gVXNlciBkaXNhYmxlcyBvciBlbmFibGVzIG5vdGlmaWNhdGlvbnNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gIH0pXG4gIGFkZFN1YnNjcmlwdGlvbk9ic2VydmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgT25lU2lnbmFsIG5vdGlmaWNhdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RW1haWwoZW1haWw6IHN0cmluZywgZW1haWxBdXRoVG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3VyIGFwcCBpbXBsZW1lbnRzIGxvZ291dCBmdW5jdGlvbmFsaXR5LCB5b3UgY2FuIGNhbGwgbG9nb3V0RW1haWwgdG8gZGlzc29jaWF0ZSB0aGUgZW1haWwgZnJvbSB0aGUgZGV2aWNlXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dEVtYWlsKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXNzZWQgaW4gZnVuY3Rpb24gd2lsbCBiZSBmaXJlZCB3aGVuIGEgbm90aWZpY2F0aW9uIHN1YnNjcmlwdGlvbiBwcm9wZXJ0eSBjaGFuZ2VzLlxuICAgKiBUaGlzIGluY2x1ZGVzIHRoZSBmb2xsb3dpbmcgZXZlbnRzOlxuICAgKiAtIEdldHRpbmcgYSBwdXNoIHRva2VuIGZyb20gQXBwbGUgLyBHb29nbGUuXG4gICAqIC0gR2V0dGluZyBhIHBsYXllciAvIHVzZXIgaWQgZnJvbSBPbmVTaWduYWxcbiAgICogLSBPbmVTaWduYWwuc2V0U3Vic2NyaXB0aW9uIGlzIGNhbGxlZFxuICAgKiAtIFVzZXIgZGlzYWJsZXMgb3IgZW5hYmxlcyBub3RpZmljYXRpb25zXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxuICB9KVxuICBhZGRFbWFpbFN1YnNjcmlwdGlvbk9ic2VydmVyKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgT25lU2lnbmFsIG5vdGlmaWNhdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjbGVhck9uZVNpZ25hbE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgeW91IHRvIGRlbGF5IHRoZSBpbml0aWFsaXphdGlvbiBvZiB0aGUgU0RLIHVudGlsIHRoZSB1c2VyIHByb3ZpZGVzIHByaXZhY3kgY29uc2VudC5cbiAgICogVGhlIFNESyB3aWxsIG5vdCBiZSBmdWxseSBpbml0aWFsaXplZCB1bnRpbCB0aGUgcHJvdmlkZVVzZXJDb25zZW50KHRydWUpIG1ldGhvZCBpcyBjYWxsZWQuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVxdWlyZWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UmVxdWlyZXNVc2VyUHJpdmFjeUNvbnNlbnQocmVxdWlyZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIElmIHlvdXIgYXBwbGljYXRpb24gaXMgc2V0IHRvIHJlcXVpcmUgdGhlIHVzZXIncyBwcml2YWN5IGNvbnNlbnQsIHlvdSBjYW4gcHJvdmlkZSB0aGlzIGNvbnNlbnQgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqIFVudGlsIHlvdSBjYWxsIHByb3ZpZGVVc2VyQ29uc2VudCh0cnVlKSwgdGhlIFNESyB3aWxsIG5vdCBmdWxseSBpbml0aWFsaXplIGFuZCB3aWxsIG5vdCBzZW5kIGFueSBkYXRhIHRvIE9uZVNpZ25hbC5cbiAgICogQHBhcmFtIHtib29sZWFufSBncmFudGVkXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHByb3ZpZGVVc2VyQ29uc2VudChncmFudGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBY2NlcHRzIGEgY2FsbGJhY2ssIHdoaWNoIHJldHVybnMgYSBib29sZWFuIHZhcmlhYmxlIGluZGljYXRpbmcgaWYgdGhlIHVzZXIgaGFzIGdpdmVuIHByaXZhY3kgY29uc2VudCB5ZXQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHVzZXJQcm92aWRlZFByaXZhY3lDb25zZW50KGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogQWxsb3dzIHlvdSB0byB1c2UgeW91ciBvd24gc3lzdGVtJ3MgdXNlciBJRCdzIHRvIHNlbmQgcHVzaCBub3RpZmljYXRpb25zIHRvIHlvdXIgdXNlcnMuXG4gICAqIFRvIHRpZSBhIHVzZXIgdG8gYSBnaXZlbiB1c2VyIElELCB5b3UgY2FuIHVzZSB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGV4dGVybmFsSWRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0RXh0ZXJuYWxVc2VySWQoZXh0ZXJuYWxJZDogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHdoYXRldmVyIHdhcyBzZXQgYXMgdGhlIGN1cnJlbnQgdXNlcidzIGV4dGVybmFsIHVzZXIgSUQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlbW92ZUV4dGVybmFsVXNlcklkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogQWRkIGEgdHJpZ2dlci4gTWF5IHNob3cgYW4gSW4tQXBwIE1lc3NhZ2UgaWYgaXRzIHRyaWdnZXIgY29uZGl0aW9ucyB3ZXJlIG1ldC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgZm9yIHRoZSB0cmlnZ2VyLlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bWJlciB8IE9iamVjdH0gdmFsdWUgVmFsdWUgZm9yIHRoZSB0cmlnZ2VyLiBTdHJpbmcgb3IgbnVtYmVyIHJlY29tbWVuZGVkLiBPYmplY3QgcGFzc2VkIGluIHdpbGwgYmUgY29udmVydGVkIHRvIGEgc3RyaW5nLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gIH0pXG4gIGFkZFRyaWdnZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBPYmplY3QpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1hcCBvZiB0cmlnZ2Vycy4gTWF5IHNob3cgYW4gSW4tQXBwIE1lc3NhZ2UgaWYgaXRzIHRyaWdnZXIgY29uZGl0aW9ucyB3ZXJlIG1ldC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QuPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgT2JqZWN0Pn0gdHJpZ2dlcnMgQWxsb3dzIHlvdSB0byBzZXQgbXVsdGlwbGUgdHJpZ2dlciBrZXkvdmFsdWUgcGFpcnMgc2ltdWx0YW5lb3VzbHkuIFBhc3MgYSBqc29uIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBsaWtlOiBge1wia2V5XCI6IFwidmFsdWVcIiwgXCJrZXkyXCI6IFwidmFsdWUyXCJ9YC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBhZGRUcmlnZ2Vycyh0cmlnZ2VyczogT2JqZWN0KTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHRyaWdnZXIgZm9yIHRoZSBnaXZlbiBrZXkuIE1heSBzaG93IGFuIEluLUFwcCBNZXNzYWdlIGlmIGl0cyB0cmlnZ2VyIGNvbmRpdGlvbnMgd2VyZSBtZXQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IGZvciB0cmlnZ2VyIHRvIHJlbW92ZS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICByZW1vdmVUcmlnZ2VyRm9yS2V5KGtleTogc3RyaW5nKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdCBvZiB0cmlnZ2VycyBiYXNlZCBvbiBhIGNvbGxlY3Rpb24gKGFycmF5KSBvZiBrZXlzLiBNYXkgc2hvdyBhbiBJbi1BcHAgTWVzc2FnZSBpZiBpdHMgdHJpZ2dlciBjb25kaXRpb25zIHdlcmUgbWV0LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBrZXlzIFJlbW92ZXMgYSBjb2xsZWN0aW9uIG9mIHRyaWdnZXJzIGZyb20gdGhlaXIga2V5cy4gUGFzcyBhbiBhcnJheSBvZiB0cmlnZ2VyIGtleXMgbGlrZTogYFtcImtleTFcIiwgXCJrZXkyXCIsIFwia2V5M1wiXWAuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgfSlcbiAgcmVtb3ZlVHJpZ2dlcnNGb3JLZXlzKGtleXM6IHN0cmluZ1tdKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdHJpZ2dlciB2YWx1ZSBmb3IgYSBwcm92aWRlZCB0cmlnZ2VyIGtleS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBLZXkgZm9yIHRyaWdnZXIgdG8gZ2V0IHZhbHVlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCBudW1iZXIgfCBPYmplY3Q+fSBSZXR1cm4gdmFsdWUgc2V0IHdpdGggYGFkZFRyaWdnZXJgLCBvciBgbnVsbGAvYG5pbGAgKGlPUykgaWYgbmV2ZXIgc2V0IG9yIHJlbW92ZWQuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFRyaWdnZXJWYWx1ZUZvcktleShrZXk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyIHwgT2JqZWN0PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB5b3UgdG8gdGVtcG9yYXJpbHkgcGF1c2UgYWxsIEluLUFwcCBNZXNzYWdlcy4gWW91IG1heSB3YW50IHRvIGRvIHRoaXMgd2hpbGUgdGhlIHVzZXIgaXMgZW5nYWdlZCBpbiBhbiBhY3Rpdml0eSB0aGF0IHlvdSBkb24ndCB3YW50IGEgbWVzc2FnZSB0byBpbnRlcnJ1cHQgKHN1Y2ggYXMgd2F0Y2hpbmcgYSB2aWRlbykuXG4gICAqIEFuIEluLUFwcCBNZXNzYWdlIHRoYXQgd291bGQgZGlzcGxheSBpZiBub3QgcGF1c2VkIHdpbGwgZGlzcGxheSByaWdodCBhZnRlciByZXN1bWUgaWYgaXRzIGNvbmRpdGlvbnMgdG8gZGlzcGxheSByZW1haW5zIHNhdGlzZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBwYXVzZSBUbyBwYXVzZSwgc2V0IGB0cnVlYC4gVG8gcmVzdW1lLCBzZXQgYGZhbHNlYC5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlLFxuICB9KVxuICBwYXVzZUluQXBwTWVzc2FnZXMocGF1c2U6IGJvb2xlYW4pOiB2b2lkIHt9XG59XG4iXX0=

/***/ })

}]);
//# sourceMappingURL=socialregister-socialregister-module.js.map