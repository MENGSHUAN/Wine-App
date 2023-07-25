(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"],{

/***/ "/6n6":
/*!***********************************!*\
  !*** ./src/app/faq/faq.module.ts ***!
  \***********************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "h79p");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "LRt8");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "2NHs":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"10\">\n        <div>FAQs</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vertical-align-top-content\">\n    <div class=\"ht_15\"></div>\n    <ion-row (click)=\"opendiv('1')\" style=\"border-bottom: 1px solid rgb(110, 110, 110);\">\n      <ion-col class=\"ion-no-padding\" size=\"11\">\n        <div class=\"titlediv\">1. How do i make payment?</div>\n        <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\">\n        <ion-icon name=\"chevron-down-outline\" class=\"arricn\" *ngIf=\"active == 0\"></ion-icon>\n        <ion-icon name=\"chevron-up-outline\" class=\"arricn\" *ngIf=\"active == '1'\"></ion-icon>\n      </ion-col>\n      <div *ngIf=\"active == 1\" class=\"descriptdiv\">Payment will be transactional between the buyer and seller. We do not manage the funds on\n        our platform.</div>\n        <div class=\"ht_15\"></div>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <ion-row (click)=\"opendiv('2')\" style=\"border-bottom: 1px solid rgb(110, 110, 110);\">\n      <ion-col class=\"ion-no-padding\" size=\"11\">\n        <div class=\"titlediv\">2. How do i get a refund?</div>\n        <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\">\n        <ion-icon name=\"chevron-down-outline\" class=\"arricn\" *ngIf=\"active < 2\"></ion-icon>\n        <ion-icon name=\"chevron-up-outline\" class=\"arricn\" *ngIf=\"active == '2'\"></ion-icon>\n      </ion-col>\n      <div *ngIf=\"active == '2'\" class=\"descriptdiv\">Our platform facilities the communication between the seller and the buyer. we are not\n        responsible for refund. However, if you face an issue,\n        do report the user and we will look into it.</div>\n        <div class=\"ht_15\"></div>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <ion-row (click)=\"opendiv('3')\" style=\"border-bottom: 1px solid rgb(110, 110, 110);\">\n      <ion-col class=\"ion-no-padding\" size=\"11\">\n        <div class=\"titlediv\">3. Faulty Products</div>\n        <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\">\n        <ion-icon name=\"chevron-down-outline\" class=\"arricn\" *ngIf=\"active < 3\"></ion-icon>\n        <ion-icon name=\"chevron-up-outline\" class=\"arricn\" *ngIf=\"active == '3'\"></ion-icon>\n      </ion-col>\n      <div *ngIf=\"active == '3'\" class=\"descriptdiv\">Our platform facilities the communication between the seller and the buyer. we are not\n        responsible for refund. However, if you face an issue,\n        do report the user and we will look into it.</div>\n        <div class=\"ht_15\"></div>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <ion-row (click)=\"opendiv('4')\" style=\"border-bottom: 1px solid rgb(110, 110, 110);\">\n      <ion-col class=\"ion-no-padding\" size=\"11\">\n        <div class=\"titlediv\">4. Scammed</div>\n        <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\">\n        <ion-icon name=\"chevron-down-outline\" class=\"arricn\" *ngIf=\"active < 4\"></ion-icon>\n        <ion-icon name=\"chevron-up-outline\" class=\"arricn\" *ngIf=\"active == '4'\"></ion-icon>\n      </ion-col>\n      <div *ngIf=\"active == '4'\" class=\"descriptdiv\">Our platform facilities the communication between the seller and the buyer. we are not\n        responsible for refund. However, if you face an issue,\n        do report the user and we will look into it.</div>\n        <div class=\"ht_15\"></div>\n    </ion-row>\n    <div class=\"ht_15\"></div>\n    <ion-row (click)=\"opendiv('5')\" style=\"border-bottom: 1px solid rgb(110, 110, 110);\">\n      <ion-col class=\"ion-no-padding\" size=\"11\">\n        <div class=\"titlediv\">5. Report</div>\n        <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\">\n        <ion-icon name=\"chevron-down-outline\" class=\"arricn\" *ngIf=\"active < 5\"></ion-icon>\n        <ion-icon name=\"chevron-up-outline\" class=\"arricn\" *ngIf=\"active == '5'\"></ion-icon>\n      </ion-col>\n      <div *ngIf=\"active == '5'\" class=\"descriptdiv\">Our platform facilities the communication between the seller and the buyer. we are not\n        responsible for refund. However, if you face an issue,\n        do report the user and we will look into it.</div>\n        <div class=\"ht_15\"></div>\n    </ion-row>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "LRt8":
/*!*********************************!*\
  !*** ./src/app/faq/faq.page.ts ***!
  \*********************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.page.html */ "2NHs");
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.page.scss */ "x1ky");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let FaqPage = class FaqPage {
    constructor(navctrl) {
        this.navctrl = navctrl;
        this.active = '1';
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
    opendiv(id) {
        if (this.active == 0) {
            this.active = id;
        }
        else {
            this.active = 0;
        }
    }
};
FaqPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqPage);



/***/ }),

/***/ "h79p":
/*!*******************************************!*\
  !*** ./src/app/faq/faq-routing.module.ts ***!
  \*******************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "LRt8");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "x1ky":
/*!***********************************!*\
  !*** ./src/app/faq/faq.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".titlediv {\n  font-size: 15px;\n  color: gray;\n  font-weight: bold;\n}\n\n.descriptdiv {\n  color: #a39e9e;\n  font-size: 14px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoiZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGl0bGVkaXZ7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kZXNjcmlwdGRpdntcclxuICAgIGNvbG9yOiAjYTM5ZTllO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=faq-faq-module.js.map