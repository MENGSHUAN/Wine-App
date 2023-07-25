(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ionic\Wine Cellar\src\main.ts */"zUnb");


/***/ }),

/***/ "2wbD":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/makeoffer/makeoffer.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"maindiv\">\n    <ion-row class=\"row_95\">\n      <ion-col size=\"7\">\n        <div class=\"productname\">{{name}}</div>\n        <div class=\"pricetxt\">${{showprice}}</div>\n      </ion-col>\n      <!-- <ion-col size=\"1\" class=\"ion-no-padding qtydiv\">Qty</ion-col>\n      <ion-col size=\"4\">\n        <ion-row class=\"qtyrow\">\n          <ion-col>\n            <ion-icon name=\"remove-outline\" (click)=\"increament('2')\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <div>{{qty}}</div>\n          </ion-col>\n          <ion-col>\n            <ion-icon name=\"add-outline\" (click)=\"increament('1')\"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-col> -->\n    </ion-row>\n    <div class=\"ht_5\"></div>\n    <div class=\"pricelbl\">Price</div>\n    <div class=\"ht_5\"></div>\n    <ion-input type=\"number\"  [(ngModel)]=\"price1\" (keypress)=\"enterprice($event)\" (keypress)=\"decimalvalidate($event)\"></ion-input>\n \n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btndiv\" (click)=\"cancel()\">Cancel</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button class=\"btnclass\" (click)=\"makeoffer()\">Make Offer</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ "6KW9":
/*!*********************************************************!*\
  !*** ./src/app/alertpopup/alertpopup-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AlertpopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertpopupPageRoutingModule", function() { return AlertpopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _alertpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alertpopup.page */ "HxTa");




const routes = [
    {
        path: '',
        component: _alertpopup_page__WEBPACK_IMPORTED_MODULE_3__["AlertpopupPage"]
    }
];
let AlertpopupPageRoutingModule = class AlertpopupPageRoutingModule {
};
AlertpopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AlertpopupPageRoutingModule);



/***/ }),

/***/ "AQDV":
/*!*********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.page.ts ***!
  \*********************************************/
/*! exports provided: MakeofferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeofferPage", function() { return MakeofferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_makeoffer_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./makeoffer.page.html */ "2wbD");
/* harmony import */ var _makeoffer_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeoffer.page.scss */ "vnDE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service.service */ "ibrm");







let MakeofferPage = class MakeofferPage {
    constructor(modalctrl, navparams, alert, service) {
        this.modalctrl = modalctrl;
        this.navparams = navparams;
        this.alert = alert;
        this.service = service;
        this.name = this.navparams.get('name');
        this.showprice = this.navparams.get('price');
        this.userid = this.navparams.get('user_id');
        this.listid = this.navparams.get('list_id');
        this.qty = 1;
    }
    ngOnInit() {
    }
    increament(id) {
        if (id == '1') {
            this.qty++;
        }
        if (id == '2') {
            if (this.qty > 1) {
                this.qty--;
            }
        }
    }
    enterprice(ev) {
        const pattern = /[0-9.,]/;
        let inputchar = String.fromCharCode(ev.charCode);
        if (!pattern.test(inputchar)) {
            ev.preventDEfault();
        }
        console.log(this.price1);
    }
    decimalvalidate(ev) {
        var regexp = /^\d+\.\d{2}$/;
        regexp.test(this.price1);
        console.log(regexp.test(this.price1));
        if (regexp.test(this.price1) == true) {
            ev.preventDefault();
        }
    }
    makeoffer() {
        this.alert.showLoader();
        var params = {
            user_id: this.userid,
            post_id: this.listid,
            offer_made: this.price1
        };
        console.log(params);
        this.service.Makeoffer(params)
            .then((results) => this.handleOffer(results));
    }
    handleOffer(results) {
        console.log(results);
        this.alert.dissmissLoader();
        if (results.ResponseCode == '1') {
            this.alert.showAlert("", results.ResponseMsg, "");
            var data = {
                user_id: this.userid,
                post_id: this.listid,
                offer_made: this.price1,
                offerid: results.offer_id,
                message: 'offer',
            };
            //   data['offerid'] = results.id
            console.log(data);
            this.modalctrl.dismiss(data);
        }
    }
    cancel() {
        this.modalctrl.dismiss();
    }
};
MakeofferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"] }
];
MakeofferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-makeoffer',
        template: _raw_loader_makeoffer_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_makeoffer_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MakeofferPage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BpHm":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alertpopup/alertpopup.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div *ngIf=\"popupname == 'startpopup'\" class=\"maindiv\">\n    <div class=\"ht_10\"></div>\n    <div class=\"titlediv\">Congrats!</div>\n    <div class=\"ht_10\"></div>\n    <div class=\"msgdiv\">Your account has been <br> successfully created</div>\n    <div class=\"ht_15\"></div>\n    <ion-button *ngIf=\"usertype == 'individual'\" (click)=\"startbrowse()\">Start Browsing</ion-button>\n    <ion-button *ngIf=\"usertype == 'company'\"(click)=\"setupprofile()\">Set Up Profile Details</ion-button>\n  </div>\n\n  <div *ngIf=\"popupname == 'outletpopup'\" class=\"maindiv\">\n    <div class=\"ht_10\"></div>\n    <div class=\"titlediv\">Outlet Setup!</div>\n    <div class=\"ht_10\"></div>\n    <div class=\"msgdiv\">Do you wish to set up your <br> outlet information?</div>\n    <div class=\"ht_15\"></div>\n    <ion-row class=\"btnrow\">\n      <ion-col class=\"ion-no-padding\">\n        <div class=\"nobtn\" (click)=\"startbrowse()\">No</div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\">\n        <div class=\"yesbtn\" (click)=\"yes()\">Yes</div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf=\"popupname == 'outletfinish'\" class=\"maindiv\">\n    <div class=\"ht_10\"></div>\n    <div class=\"titlediv\">Outlet Setup</div>\n    <div class=\"ht_10\"></div>\n    <div class=\"msgdiv\">Outlet information has been <br> successfully updated.</div>\n    <div class=\"ht_15\"></div>\n    <ion-button (click)=\"startbrowse()\">Start Browsing</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "C+Pi":
/*!*************************************************!*\
  !*** ./src/app/alertpopup/alertpopup.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: relative;\n  width: 90%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin: auto;\n  overflow: hidden;\n  margin-top: 180px;\n  padding-top: 10px;\n  background-color: #f2f2f3 !important;\n  z-index: 99999;\n}\n\n.titlediv {\n  color: #c71212;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n\n.msgdiv {\n  text-align: center;\n  color: gray;\n  font-size: 15px;\n}\n\nion-button {\n  color: #ffffff;\n  font-size: 16px;\n  width: 100%;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  background: #c30000;\n  --background: #c30000;\n  margin: 0px auto 0px;\n  text-transform: none;\n}\n\n.btnrow {\n  border: 1px solid #c30000;\n  height: 35px;\n}\n\n.nobtn {\n  background-color: #ffffff;\n  text-align: center;\n  color: #c30000;\n  height: 35px;\n  padding-top: 8px;\n}\n\n.yesbtn {\n  background-color: #c30000;\n  text-align: center;\n  color: white;\n  height: 35px;\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFsZXJ0cG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUUoiLCJmaWxlIjoiYWxlcnRwb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCA4IDggLyAzNCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0LCAyNCwgMjQsIDAuMDc1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbi5tYWluZGl2e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICAgIGhlaWdodDogLW1vei1maXQtY29udGVudDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLXRvcDogMTgwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMyAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbn1cclxuLnRpdGxlZGl2e1xyXG4gICAgY29sb3I6I2M3MTIxMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubXNnZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNjMzAwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNjMzAwMDA7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvIDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcbi5idG5yb3d7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMzAwMDA7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuLm5vYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjYzMwMDAwO1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4ueWVzYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MzMDAwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "DaTt":
/*!***********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.module.ts ***!
  \***********************************************/
/*! exports provided: MakeofferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeofferPageModule", function() { return MakeofferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _makeoffer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./makeoffer-routing.module */ "XF46");
/* harmony import */ var _makeoffer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./makeoffer.page */ "AQDV");







let MakeofferPageModule = class MakeofferPageModule {
};
MakeofferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _makeoffer_routing_module__WEBPACK_IMPORTED_MODULE_5__["MakeofferPageRoutingModule"]
        ],
        declarations: [_makeoffer_page__WEBPACK_IMPORTED_MODULE_6__["MakeofferPage"]]
    })
], MakeofferPageModule);



/***/ }),

/***/ "HO3Z":
/*!*************************************************!*\
  !*** ./src/app/alertpopup/alertpopup.module.ts ***!
  \*************************************************/
/*! exports provided: AlertpopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertpopupPageModule", function() { return AlertpopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alertpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alertpopup-routing.module */ "6KW9");
/* harmony import */ var _alertpopup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alertpopup.page */ "HxTa");







let AlertpopupPageModule = class AlertpopupPageModule {
};
AlertpopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _alertpopup_routing_module__WEBPACK_IMPORTED_MODULE_5__["AlertpopupPageRoutingModule"]
        ],
        declarations: [_alertpopup_page__WEBPACK_IMPORTED_MODULE_6__["AlertpopupPage"]]
    })
], AlertpopupPageModule);



/***/ }),

/***/ "HxTa":
/*!***********************************************!*\
  !*** ./src/app/alertpopup/alertpopup.page.ts ***!
  \***********************************************/
/*! exports provided: AlertpopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertpopupPage", function() { return AlertpopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alertpopup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alertpopup.page.html */ "BpHm");
/* harmony import */ var _alertpopup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertpopup.page.scss */ "C+Pi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let AlertpopupPage = class AlertpopupPage {
    constructor(navparms, modalctrl, navctrl) {
        this.navparms = navparms;
        this.modalctrl = modalctrl;
        this.navctrl = navctrl;
        this.popupname = this.navparms.get('popupname');
        console.log(this.popupname);
        this.usertype = this.navparms.get('type');
        console.log(this.usertype);
        this.registertype = this.navparms.get('registertype');
        console.log(this.registertype);
    }
    ngOnInit() {
    }
    startbrowse() {
        this.modalctrl.dismiss();
        this.navctrl.navigateForward('/home');
    }
    setupprofile() {
        if (this.registertype == 'signup') {
            this.modalctrl.dismiss();
            this.navctrl.navigateForward(['/register', { type: this.usertype }]);
        }
        if (this.registertype == 'social') {
            this.modalctrl.dismiss();
            this.navctrl.navigateForward(['/socialregister', { type: this.usertype }]);
        }
    }
    yes() {
        this.modalctrl.dismiss();
        this.navctrl.navigateForward('/outlet');
    }
};
AlertpopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
AlertpopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-alertpopup',
        template: _raw_loader_alertpopup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_alertpopup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AlertpopupPage);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.service */ "wxHw");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "JZFu");







//import { OneSignal } from '@ionic-native/onesignal/ngx';

const firebaseConfig = {
    apiKey: "AIzaSyA3cNoavvRNtwwImE4C-I5MFghjRVEp20Y",
    authDomain: "riderr-6efc4.firebaseapp.com",
    databaseURL: "https://riderr-6efc4-default-rtdb.firebaseio.com",
    projectId: "riderr-6efc4",
    storageBucket: "riderr-6efc4.appspot.com",
    messagingSenderId: "448709835257",
    appId: "1:448709835257:web:eeca62ac9d61ac11946528",
    measurementId: "G-S6YSR96SG0"
};
firebase__WEBPACK_IMPORTED_MODULE_7__["default"].initializeApp(firebaseConfig);
firebase__WEBPACK_IMPORTED_MODULE_7__["default"].analytics();
let AppComponent = class AppComponent {
    constructor(navCtrl, platform, splashScreen, 
    //private oneSignal: OneSignal,
    config) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.config = config;
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.config.logindata();
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            setTimeout(() => {
                this.splashScreen.hide();
            }, 300);
        });
        if (localStorage.getItem('Riderr_Login')) {
            this.navCtrl.navigateForward('/home');
        }
        else {
            this.navCtrl.navigateForward('/login');
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ "XF46":
/*!*******************************************************!*\
  !*** ./src/app/makeoffer/makeoffer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MakeofferPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeofferPageRoutingModule", function() { return MakeofferPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _makeoffer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./makeoffer.page */ "AQDV");




const routes = [
    {
        path: '',
        component: _makeoffer_page__WEBPACK_IMPORTED_MODULE_3__["MakeofferPage"]
    }
];
let MakeofferPageRoutingModule = class MakeofferPageRoutingModule {
};
MakeofferPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MakeofferPageRoutingModule);



/***/ }),

/***/ "YdJ5":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let AlertService = class AlertService {
    constructor(alertCtrl, toastCtrl, loadingController) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingController = loadingController;
        this.isLoading = false;
    }
    showAlert(title, msg, text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: msg,
                message: text,
            });
            yield alert.present();
        });
    }
    showAlertwithbtn(title, msg, text, btn) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                subHeader: msg,
                message: text,
                buttons: [btn]
            });
            yield alert.present();
        });
    }
    showLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingController.create({
            // duration: 5000,
            }).then(a => {
                a.present().then(() => {
                    if (!this.isLoading) {
                        a.dismiss().then();
                    }
                });
            });
        });
    }
    showFixtimeLoader(text, time) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                // spinner: 'dots',
                // content: '',
                duration: time
            });
            yield this.loader.present();
        });
    }
    showToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom'
            });
            yield toast.present();
        });
    }
    dissmissLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingController.dismiss().then();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
AlertService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "8P2a");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "PLH8");
/* harmony import */ var _alertpopup_alertpopup_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./alertpopup/alertpopup.module */ "HO3Z");
/* harmony import */ var _makeoffer_makeoffer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./makeoffer/makeoffer.module */ "DaTt");














//import { Facebook } from '@ionic-native/facebook/ngx';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';

//import { OneSignal } from '@ionic-native/onesignal/ngx';
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _alertpopup_alertpopup_module__WEBPACK_IMPORTED_MODULE_13__["AlertpopupPageModule"],
            _makeoffer_makeoffer_module__WEBPACK_IMPORTED_MODULE_14__["MakeofferPageModule"]
        ],
        providers: [
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransfer"],
            _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__["Calendar"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Keyboard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ibrm":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "wxHw");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ServiceService = class ServiceService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    signup(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'signup.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    socialsignup(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'socialsignup.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Verifyotp(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'verifyotp.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Resendotp(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'resendotp.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    UpdateCompany(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'updatecompanyinfo.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    AddOutlet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'addoutlet.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    login(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'login.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Userprofile(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'getuserprofile.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    HomeData(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'gethomedata.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Search(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'search.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    AddList(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'addpost.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Listdetail(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'postdetail.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    AddRemoveFavourite(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'addremovefavorite.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Favourite(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'getfavorite.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // SendNotification(params) {
    //   return new Promise(resolve => {
    //     this.http.post(this.config.url + 'sendnotification.php', params).pipe(map(res => res))
    //       .subscribe(data => {
    //         this.user = data;
    //         resolve(this.user);
    //       });
    //   });
    // }
    Notification(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'getnotification.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Mypost(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'mypost.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Myreview(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'myreview.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    UpdateProfile(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'updateprofile.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    ChangePwd(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'changepassword.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    ContactUs(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'contact_us.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    ForgotPwd(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'forgotpassword.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Myoutlet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'myoutlet.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Editoutlet(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'editoutlet.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    MarkasSold(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'markassold.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    EditList(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'editpost.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    DeleteList(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'deletepost.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Makeoffer(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'makeoffer.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    SendNotification(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'sendnotification.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Offerstatus(params) {
        return new Promise(resolve => {
            this.http.post(this.config.url + 'offerstatuschange.php', params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    // CatPost(params) {
    //   return new Promise(resolve => {
    //     this.http.post(this.config.url + 'getcatpost.php', params).pipe(map(res => res))
    //       .subscribe(data => {
    //         this.user = data;
    //         resolve(this.user);
    //       });
    //   });
    // }
    // ************************************************************************************************************************************************
    Slider() {
        return new Promise(resolve => {
            this.http.get(this.config.url + 'getslider.php').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
    Category() {
        return new Promise(resolve => {
            this.http.get(this.config.url + 'getcategory.php').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res))
                .subscribe(data => {
                this.user = data;
                resolve(this.user);
            });
        });
    }
};
ServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }
];
ServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "ct+p")).then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'forgetpwd',
        loadChildren: () => __webpack_require__.e(/*! import() | forgetpwd-forgetpwd-module */ "forgetpwd-forgetpwd-module").then(__webpack_require__.bind(null, /*! ./forgetpwd/forgetpwd.module */ "yeYn")).then(m => m.ForgetpwdPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "DNuw")).then(m => m.RegistrationPageModule)
    },
    {
        path: 'outlet',
        loadChildren: () => __webpack_require__.e(/*! import() | outlet-outlet-module */ "outlet-outlet-module").then(__webpack_require__.bind(null, /*! ./outlet/outlet.module */ "/4ph")).then(m => m.OutletPageModule)
    },
    {
        path: 'verify',
        loadChildren: () => __webpack_require__.e(/*! import() | verify-verify-module */ "verify-verify-module").then(__webpack_require__.bind(null, /*! ./verify/verify.module */ "JqDU")).then(m => m.VerifyPageModule)
    },
    {
        path: 'detail',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-detail-module */ "detail-detail-module").then(__webpack_require__.bind(null, /*! ./detail/detail.module */ "lM0Z")).then(m => m.DetailPageModule)
    },
    {
        path: 'listitem',
        loadChildren: () => __webpack_require__.e(/*! import() | listitem-listitem-module */ "listitem-listitem-module").then(__webpack_require__.bind(null, /*! ./listitem/listitem.module */ "0qPJ")).then(m => m.ListitemPageModule)
    },
    {
        path: 'notification',
        loadChildren: () => __webpack_require__.e(/*! import() | notification-notification-module */ "notification-notification-module").then(__webpack_require__.bind(null, /*! ./notification/notification.module */ "TLzw")).then(m => m.NotificationPageModule)
    },
    {
        path: 'conversation',
        loadChildren: () => __webpack_require__.e(/*! import() | conversation-conversation-module */ "conversation-conversation-module").then(__webpack_require__.bind(null, /*! ./conversation/conversation.module */ "DldP")).then(m => m.ConversationPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | chat-chat-module */ "chat-chat-module").then(__webpack_require__.bind(null, /*! ./chat/chat.module */ "2yxt")).then(m => m.ChatPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'editprofile',
        loadChildren: () => __webpack_require__.e(/*! import() | editprofile-editprofile-module */ "editprofile-editprofile-module").then(__webpack_require__.bind(null, /*! ./editprofile/editprofile.module */ "AFqN")).then(m => m.EditprofilePageModule)
    },
    {
        path: 'changepwd',
        loadChildren: () => __webpack_require__.e(/*! import() | changepwd-changepwd-module */ "changepwd-changepwd-module").then(__webpack_require__.bind(null, /*! ./changepwd/changepwd.module */ "PBrA")).then(m => m.ChangepwdPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => __webpack_require__.e(/*! import() | faq-faq-module */ "faq-faq-module").then(__webpack_require__.bind(null, /*! ./faq/faq.module */ "/6n6")).then(m => m.FaqPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => __webpack_require__.e(/*! import() | contactus-contactus-module */ "contactus-contactus-module").then(__webpack_require__.bind(null, /*! ./contactus/contactus.module */ "7U2a")).then(m => m.ContactusPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "eNqe")).then(m => m.TermsPageModule)
    },
    {
        path: 'editcompany',
        loadChildren: () => __webpack_require__.e(/*! import() | editcompany-editcompany-module */ "editcompany-editcompany-module").then(__webpack_require__.bind(null, /*! ./editcompany/editcompany.module */ "LB3m")).then(m => m.EditcompanyPageModule)
    },
    {
        path: 'manageoutlet',
        loadChildren: () => __webpack_require__.e(/*! import() | manageoutlet-manageoutlet-module */ "manageoutlet-manageoutlet-module").then(__webpack_require__.bind(null, /*! ./manageoutlet/manageoutlet.module */ "OnTl")).then(m => m.ManageoutletPageModule)
    },
    {
        path: 'editexisting',
        loadChildren: () => __webpack_require__.e(/*! import() | editexisting-editexisting-module */ "editexisting-editexisting-module").then(__webpack_require__.bind(null, /*! ./editexisting/editexisting.module */ "cT1B")).then(m => m.EditexistingPageModule)
    },
    {
        path: 'editoutlet',
        loadChildren: () => __webpack_require__.e(/*! import() | editoutlet-editoutlet-module */ "editoutlet-editoutlet-module").then(__webpack_require__.bind(null, /*! ./editoutlet/editoutlet.module */ "MMlt")).then(m => m.EditoutletPageModule)
    },
    {
        path: 'editpost',
        loadChildren: () => __webpack_require__.e(/*! import() | editpost-editpost-module */ "editpost-editpost-module").then(__webpack_require__.bind(null, /*! ./editpost/editpost.module */ "soZw")).then(m => m.EditpostPageModule)
    },
    {
        path: 'alertpopup',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./alertpopup/alertpopup.module */ "HO3Z")).then(m => m.AlertpopupPageModule)
    },
    {
        path: 'outletdetail',
        loadChildren: () => __webpack_require__.e(/*! import() | outletdetail-outletdetail-module */ "outletdetail-outletdetail-module").then(__webpack_require__.bind(null, /*! ./outletdetail/outletdetail.module */ "H2MV")).then(m => m.OutletdetailPageModule)
    },
    {
        path: 'socialregister',
        loadChildren: () => __webpack_require__.e(/*! import() | socialregister-socialregister-module */ "socialregister-socialregister-module").then(__webpack_require__.bind(null, /*! ./socialregister/socialregister.module */ "Fh9G")).then(m => m.SocialregisterPageModule)
    },
    {
        path: 'makeoffer',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./makeoffer/makeoffer.module */ "DaTt")).then(m => m.MakeofferPageModule)
    },
    {
        path: 'catpost',
        loadChildren: () => __webpack_require__.e(/*! import() | catpost-catpost-module */ "catpost-catpost-module").then(__webpack_require__.bind(null, /*! ./catpost/catpost.module */ "H73U")).then(m => m.CatpostPageModule)
    },
    {
        path: 'takephoto',
        loadChildren: () => __webpack_require__.e(/*! import() | takephoto-takephoto-module */ "takephoto-takephoto-module").then(__webpack_require__.bind(null, /*! ./takephoto/takephoto.module */ "Lx9i")).then(m => m.TakephotoPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vnDE":
/*!***********************************************!*\
  !*** ./src/app/makeoffer/makeoffer.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background: rgba(8, 8, 8, 0.34);\n  --background: rgba(24, 24, 24, 0.075);\n  height: 100%;\n}\n\n.maindiv {\n  position: absolute;\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 1px solid gray;\n  border-radius: 20px 20px 0 0;\n  overflow: hidden;\n  bottom: 0;\n  padding: 10px 5px;\n  background-color: white !important;\n  z-index: 99999;\n}\n\n.productname {\n  font-weight: bold;\n  color: black;\n  font-size: 14px;\n}\n\n.pricetxt {\n  font-size: 13px;\n  color: #c1c1c1;\n}\n\n.qtydiv {\n  font-size: 14px;\n  color: black;\n  margin-top: 13px;\n}\n\n.qtyrow {\n  border: 1px solid #bebebe;\n  text-align: center;\n  padding: 3px;\n}\n\n.pricelbl {\n  text-align: center;\n  font-weight: bold;\n}\n\nion-input {\n  border: 1px solid #dadada;\n  text-align: center;\n  width: 90%;\n  margin: auto;\n  font-weight: bold;\n  font-size: 18px;\n  --padding-start:0px;\n  --padding-end:0px;\n}\n\n.btndiv {\n  color: #c30000;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  border-radius: 5px;\n  --border-radius: 5px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  border: 1px solid #c30000;\n  background: #ffffff;\n  --background: #ffffff;\n  margin: 20px auto 20px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1ha2VvZmZlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUtKOztBQUhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFMQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQURKIiwiZmlsZSI6Im1ha2VvZmZlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCA4IDggLyAzNCUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI0LCAyNCwgMjQsIDAuMDc1KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWFpbmRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiA5OTk5OTtcclxufVxyXG4ucHJvZHVjdG5hbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucHJpY2V0eHR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjpyZ2IoMTkzLCAxOTMsIDE5Myk7XHJcbn1cclxuLnF0eWRpdntcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOjEzcHg7XHJcbn1cclxuLnF0eXJvd3tcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzozcHg7XHJcbn1cclxuLnByaWNlbGJse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMjE4LCAyMTgsIDIxOCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6MHB4O1xyXG59XHJcbi8vIC5idG5jbGFzcyB7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjZWM2ZDRjLCNmOThlNDYpO1xyXG4vLyAgICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDQxcHg7XHJcbi8vICAgICBtYXJnaW46YXV0bztcclxuLy8gICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4vLyAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbi8vICAgICAtLWJveC1zaGFkb3c6bm9uZTtcclxuLy8gfVxyXG4uYnRuZGl2e1xyXG4gICAgY29sb3I6ICNjMzAwMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjYzMwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "wxHw":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let ConfigService = class ConfigService {
    constructor() {
        this.url = '';
        this.imgurl = '';
    }
    logindata() {
        if (localStorage.getItem('Riderr_Login')) {
            this.UserData = JSON.parse(localStorage.getItem('Riderr_Login'));
            console.log(this.UserData);
        }
        this.Usertype = JSON.parse(localStorage.getItem('Riderr_Usertype'));
    }
};
ConfigService.ctorParameters = () => [];
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ConfigService);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map