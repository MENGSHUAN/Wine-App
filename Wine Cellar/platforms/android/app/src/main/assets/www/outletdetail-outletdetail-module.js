(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outletdetail-outletdetail-module"],{

/***/ "/pnl":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outletdetail/outletdetail.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\">\n        <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Central Outlet</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"color: gray;\">Outlet Name</div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">K29</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"color: gray;\">Outlet Address</div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">India</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"color: gray;\">Outlet Contact Number</div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">+91 9624767583</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"color: gray;\">Operating Hours</div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Mon:<span style=\"margin-left:17px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Tues:<span style=\"margin-left:15px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Wed:<span style=\"margin-left:17px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Thur:<span style=\"margin-left:15px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Fri:<span style=\"margin-left:30px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Sat:<span style=\"margin-left:25px;\">9:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Sun:<span style=\"margin-left:21px;\">10:00 AM - 11:00 PM </span></div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div style=\"color: gray;\">Other Information</div>\n        <div class=\"ht_5\"></div>\n        <div style=\"color: black;font-weight: bold;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n        </div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>");

/***/ }),

/***/ "5sSr":
/*!*****************************************************!*\
  !*** ./src/app/outletdetail/outletdetail.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdXRsZXRkZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "CHLW":
/*!*************************************************************!*\
  !*** ./src/app/outletdetail/outletdetail-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OutletdetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletdetailPageRoutingModule", function() { return OutletdetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _outletdetail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outletdetail.page */ "Iegz");




const routes = [
    {
        path: '',
        component: _outletdetail_page__WEBPACK_IMPORTED_MODULE_3__["OutletdetailPage"]
    }
];
let OutletdetailPageRoutingModule = class OutletdetailPageRoutingModule {
};
OutletdetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletdetailPageRoutingModule);



/***/ }),

/***/ "H2MV":
/*!*****************************************************!*\
  !*** ./src/app/outletdetail/outletdetail.module.ts ***!
  \*****************************************************/
/*! exports provided: OutletdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletdetailPageModule", function() { return OutletdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _outletdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outletdetail-routing.module */ "CHLW");
/* harmony import */ var _outletdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outletdetail.page */ "Iegz");







let OutletdetailPageModule = class OutletdetailPageModule {
};
OutletdetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outletdetail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletdetailPageRoutingModule"]
        ],
        declarations: [_outletdetail_page__WEBPACK_IMPORTED_MODULE_6__["OutletdetailPage"]]
    })
], OutletdetailPageModule);



/***/ }),

/***/ "Iegz":
/*!***************************************************!*\
  !*** ./src/app/outletdetail/outletdetail.page.ts ***!
  \***************************************************/
/*! exports provided: OutletdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletdetailPage", function() { return OutletdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_outletdetail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./outletdetail.page.html */ "/pnl");
/* harmony import */ var _outletdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outletdetail.page.scss */ "5sSr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let OutletdetailPage = class OutletdetailPage {
    constructor(navctrl, router) {
        this.navctrl = navctrl;
        this.router = router;
        this.outletdata = this.router.snapshot.params;
        console.log(this.outletdata);
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
};
OutletdetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
OutletdetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outletdetail',
        template: _raw_loader_outletdetail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outletdetail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OutletdetailPage);



/***/ })

}]);
//# sourceMappingURL=outletdetail-outletdetail-module.js.map