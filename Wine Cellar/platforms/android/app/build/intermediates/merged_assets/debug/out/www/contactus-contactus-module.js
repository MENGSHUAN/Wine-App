(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "7U2a":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus-routing.module */ "vRFT");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "d/vQ");







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"]
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "BY/O":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-select {\n  width: 100%;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKIiwiZmlsZSI6ImNvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjpncmF5O1xyXG59Il19 */");

/***/ }),

/***/ "KOp0":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Contact Us</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vertical-align-top-content\">\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Username</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"uname\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Email</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Enquiry Type</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select [(ngModel)]=\"enquiry_type\">\n            <ion-select-option>Feedback</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\"> </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Would you like us to contact you back? </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select [(ngModel)]=\"contact\">\n            <ion-select-option>No</ion-select-option>\n            <ion-select-option>Yes</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\"> </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Message</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n          <ion-textarea style=\"height: 120px;\" [(ngModel)]=\"message\"></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"vertical-align-top-content\">\n    <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "d/vQ":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./contactus.page.html */ "KOp0");
/* harmony import */ var _contactus_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus.page.scss */ "BY/O");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let ContactusPage = class ContactusPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
    }
    ngOnInit() {
        console.log('contactus page');
    }
    back() {
        this.navctrl.pop();
    }
    validate() {
        if (!this.message) {
            this.alert.showAlert("Error", "Please Enter Message", "");
            return false;
        }
        return true;
    }
    submit() {
        if (this.validate()) {
        }
    }
};
ContactusPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contactus',
        template: _raw_loader_contactus_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contactus_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ContactusPage);



/***/ }),

/***/ "vRFT":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function() { return ContactusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus.page */ "d/vQ");




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactusPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map