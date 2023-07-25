(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manageoutlet-manageoutlet-module"],{

/***/ "AVMh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manageoutlet/manageoutlet.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>Manage Outlet</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div class=\"optiondiv\" (click)=\"editoutlet()\">Edit Existing Outlet</div>\n    <div class=\"optiondiv\" (click)=\"newoutlet()\">Create New Outlet</div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "OnTl":
/*!*****************************************************!*\
  !*** ./src/app/manageoutlet/manageoutlet.module.ts ***!
  \*****************************************************/
/*! exports provided: ManageoutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageoutletPageModule", function() { return ManageoutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _manageoutlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manageoutlet-routing.module */ "S4Hc");
/* harmony import */ var _manageoutlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manageoutlet.page */ "Yvgr");







let ManageoutletPageModule = class ManageoutletPageModule {
};
ManageoutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manageoutlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageoutletPageRoutingModule"]
        ],
        declarations: [_manageoutlet_page__WEBPACK_IMPORTED_MODULE_6__["ManageoutletPage"]]
    })
], ManageoutletPageModule);



/***/ }),

/***/ "S4Hc":
/*!*************************************************************!*\
  !*** ./src/app/manageoutlet/manageoutlet-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ManageoutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageoutletPageRoutingModule", function() { return ManageoutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _manageoutlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manageoutlet.page */ "Yvgr");




const routes = [
    {
        path: '',
        component: _manageoutlet_page__WEBPACK_IMPORTED_MODULE_3__["ManageoutletPage"]
    }
];
let ManageoutletPageRoutingModule = class ManageoutletPageRoutingModule {
};
ManageoutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageoutletPageRoutingModule);



/***/ }),

/***/ "Yvgr":
/*!***************************************************!*\
  !*** ./src/app/manageoutlet/manageoutlet.page.ts ***!
  \***************************************************/
/*! exports provided: ManageoutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageoutletPage", function() { return ManageoutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_manageoutlet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./manageoutlet.page.html */ "AVMh");
/* harmony import */ var _manageoutlet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manageoutlet.page.scss */ "sqkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ManageoutletPage = class ManageoutletPage {
    constructor(navctrl) {
        this.navctrl = navctrl;
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    editoutlet() {
        this.navctrl.navigateForward('/editexisting');
    }
    newoutlet() {
        this.navctrl.navigateForward('/outlet');
    }
};
ManageoutletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ManageoutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-manageoutlet',
        template: _raw_loader_manageoutlet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manageoutlet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManageoutletPage);



/***/ }),

/***/ "sqkG":
/*!*****************************************************!*\
  !*** ./src/app/manageoutlet/manageoutlet.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".optiondiv {\n  border-bottom: 1px solid #d4d4d4;\n  height: 50px;\n  padding-top: 16px;\n  color: #000000;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1hbmFnZW91dGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNKIiwiZmlsZSI6Im1hbmFnZW91dGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uZGl2e1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=manageoutlet-manageoutlet-module.js.map