(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editcompany-editcompany-module"],{

/***/ "8PwL":
/*!***********************************************************!*\
  !*** ./src/app/editcompany/editcompany-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditcompanyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcompanyPageRoutingModule", function() { return EditcompanyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editcompany_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editcompany.page */ "AjS+");




const routes = [
    {
        path: '',
        component: _editcompany_page__WEBPACK_IMPORTED_MODULE_3__["EditcompanyPage"]
    }
];
let EditcompanyPageRoutingModule = class EditcompanyPageRoutingModule {
};
EditcompanyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditcompanyPageRoutingModule);



/***/ }),

/***/ "AjS+":
/*!*************************************************!*\
  !*** ./src/app/editcompany/editcompany.page.ts ***!
  \*************************************************/
/*! exports provided: EditcompanyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcompanyPage", function() { return EditcompanyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editcompany_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editcompany.page.html */ "QfG7");
/* harmony import */ var _editcompany_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editcompany.page.scss */ "TUqv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let EditcompanyPage = class EditcompanyPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
        this.cname = 'K29solutions';
        this.reg_no = '+91 9624767583';
        this.caddress = 'India';
        this.contact = '+91 9624767583';
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    update() {
    }
};
EditcompanyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
EditcompanyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editcompany',
        template: _raw_loader_editcompany_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editcompany_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditcompanyPage);



/***/ }),

/***/ "LB3m":
/*!***************************************************!*\
  !*** ./src/app/editcompany/editcompany.module.ts ***!
  \***************************************************/
/*! exports provided: EditcompanyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcompanyPageModule", function() { return EditcompanyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editcompany_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editcompany-routing.module */ "8PwL");
/* harmony import */ var _editcompany_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editcompany.page */ "AjS+");







let EditcompanyPageModule = class EditcompanyPageModule {
};
EditcompanyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editcompany_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditcompanyPageRoutingModule"]
        ],
        declarations: [_editcompany_page__WEBPACK_IMPORTED_MODULE_6__["EditcompanyPage"]]
    })
], EditcompanyPageModule);



/***/ }),

/***/ "QfG7":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editcompany/editcompany.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Edit Company Details</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<div class=\"ht_20\"></div>\n<div class=\"vertical-align-top-content\">\n  <ion-row>\n    <ion-col size=\"12\">\n      <div class=\"lbldiv\">Company Name</div>\n    </ion-col>\n    <ion-col size=\"12\">\n     <ion-item class=\"inputdiv\" lines=\"none\">\n       <ion-input [(ngModel)]=\"cname\"></ion-input>\n     </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"lbldiv\">Company Registration Number</div>\n    </ion-col>\n    <ion-col size=\"12\">\n     <ion-item class=\"inputdiv\" lines=\"none\">\n       <ion-input [(ngModel)]=\"reg_no\"></ion-input>\n     </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"lbldiv\">Company Address</div>\n    </ion-col>\n    <ion-col size=\"12\">\n     <ion-item class=\"inputdiv\" lines=\"none\">\n       <ion-input [(ngModel)]=\"caddress\"></ion-input>\n     </ion-item>\n    </ion-col>\n    <ion-col size=\"12\">\n    </ion-col>\n    <ion-col size=\"12\">\n      <div class=\"lbldiv\">Company Contact Number</div>\n    </ion-col>\n    <ion-col size=\"12\">\n     <ion-item class=\"inputdiv\" lines=\"none\">\n       <ion-input [(ngModel)]=\"contact\"></ion-input>\n     </ion-item>\n    </ion-col>\n  </ion-row>\n</div>\n\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <div class=\"vertical-align-top-content\">\n    <ion-button class=\"btnclass\" (click)=\"update()\">Update</ion-button>\n  </div>\n</ion-footer>\n\n");

/***/ }),

/***/ "TUqv":
/*!***************************************************!*\
  !*** ./src/app/editcompany/editcompany.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y29tcGFueS5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=editcompany-editcompany-module.js.map