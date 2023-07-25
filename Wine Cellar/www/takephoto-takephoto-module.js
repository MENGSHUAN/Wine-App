(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["takephoto-takephoto-module"],{

/***/ "Lx9i":
/*!***********************************************!*\
  !*** ./src/app/takephoto/takephoto.module.ts ***!
  \***********************************************/
/*! exports provided: TakephotoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakephotoPageModule", function() { return TakephotoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _takephoto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./takephoto-routing.module */ "e+qN");
/* harmony import */ var _takephoto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./takephoto.page */ "q0iE");







let TakephotoPageModule = class TakephotoPageModule {
};
TakephotoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _takephoto_routing_module__WEBPACK_IMPORTED_MODULE_5__["TakephotoPageRoutingModule"]
        ],
        declarations: [_takephoto_page__WEBPACK_IMPORTED_MODULE_6__["TakephotoPage"]]
    })
], TakephotoPageModule);



/***/ }),

/***/ "XqiD":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/takephoto/takephoto.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon> takephoto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <div class=\"left-half\">\n      <ion-button>\n         <p>新增</p>\n      </ion-button>\n    </div>\n    <div class=\"right-half\">\n      <ion-button>\n          <p>刪除</p>\n      </ion-button>\n    </div>\n  </div>\n\n  <div class=\"pic\">\n    <img src=\"https://www.shutterstock.com/image-vector/document-scanner-icon-digital-scanning-600w-2272317571.jpg\">\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "e+qN":
/*!*******************************************************!*\
  !*** ./src/app/takephoto/takephoto-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TakephotoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakephotoPageRoutingModule", function() { return TakephotoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _takephoto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./takephoto.page */ "q0iE");




const routes = [
    {
        path: '',
        component: _takephoto_page__WEBPACK_IMPORTED_MODULE_3__["TakephotoPage"]
    }
];
let TakephotoPageRoutingModule = class TakephotoPageRoutingModule {
};
TakephotoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TakephotoPageRoutingModule);



/***/ }),

/***/ "q0iE":
/*!*********************************************!*\
  !*** ./src/app/takephoto/takephoto.page.ts ***!
  \*********************************************/
/*! exports provided: TakephotoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakephotoPage", function() { return TakephotoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_takephoto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./takephoto.page.html */ "XqiD");
/* harmony import */ var _takephoto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./takephoto.page.scss */ "qJXJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service.service */ "ibrm");







let TakephotoPage = class TakephotoPage {
    constructor(navCtrl, navctrl, service, alert) {
        this.navCtrl = navCtrl;
        this.navctrl = navctrl;
        this.service = service;
        this.alert = alert;
    }
    ngOnInit() {
    }
    back() {
        this.navctrl.pop();
    }
};
TakephotoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
TakephotoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-takephoto',
        template: _raw_loader_takephoto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_takephoto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TakephotoPage);



/***/ }),

/***/ "qJXJ":
/*!***********************************************!*\
  !*** ./src/app/takephoto/takephoto.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  display: flex;\n  height: 15%;\n}\n\n.left-half, .right-half {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\np {\n  font-size: large;\n}\n\nion-button {\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRha2VwaG90by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0U7RUFDRSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsVUFBQTtBQUVKIiwiZmlsZSI6InRha2VwaG90by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxuICB9XHJcbiAgLmxlZnQtaGFsZiwgLnJpZ2h0LWhhbGYge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=takephoto-takephoto-module.js.map