(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-outlet-module"],{

/***/ "/4ph":
/*!*****************************************!*\
  !*** ./src/app/outlet/outlet.module.ts ***!
  \*****************************************/
/*! exports provided: OutletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageModule", function() { return OutletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-routing.module */ "d6CE");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet.page */ "o235");







let OutletPageModule = class OutletPageModule {
};
OutletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletPageRoutingModule"]
        ],
        declarations: [_outlet_page__WEBPACK_IMPORTED_MODULE_6__["OutletPage"]]
    })
], OutletPageModule);



/***/ }),

/***/ "YJo/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet/outlet.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n   <ion-row>\n     <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"10\">\n       <div>Outlet Information</div>\n     </ion-col>\n   </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Outlet Name</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input type=\"text\" [(ngModel)]=\"name\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Outlet Address</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input type=\"text\" [(ngModel)]=\"address\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Outlet Contact Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input type=\"number\" [(ngModel)]=\"contact\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Operating Hours</div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Mon</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"mon_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"mon_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Tues</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"tue_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"tue_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Wed</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"wed_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"wed_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Thur</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"thu_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"thu_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Fri</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"fri_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"fri_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Sat</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"sat_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"sat_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div class=\"hoursdiv\">Sun</div>\n      </ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"sun_start\"></ion-input>\n      </ion-col>\n      <ion-col size=\"1\">_</ion-col>\n      <ion-col size=\"4.5\">\n        <ion-input class=\"inputdiv\" [(ngModel)]=\"sun_end\"></ion-input>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Other Information</div>\n      </ion-col>\n      <ion-col size=\"12\" style=\"position: relative !important;\">\n       <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n         <ion-textarea style=\"height: 120px;\" [rows]=\"4\" maxlength=\"180\" [(ngModel)]=\"other_info\" (ionChange)=\"contrlenth()\"></ion-textarea>\n       </ion-item>\n       <div class=\"ionotherdiv\">{{otherinfolenth}}/180</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"save()\">Save</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btndiv\">Create More</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n\n    </ion-row>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "d6CE":
/*!*************************************************!*\
  !*** ./src/app/outlet/outlet-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OutletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPageRoutingModule", function() { return OutletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _outlet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet.page */ "o235");




const routes = [
    {
        path: '',
        component: _outlet_page__WEBPACK_IMPORTED_MODULE_3__["OutletPage"]
    }
];
let OutletPageRoutingModule = class OutletPageRoutingModule {
};
OutletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletPageRoutingModule);



/***/ }),

/***/ "o235":
/*!***************************************!*\
  !*** ./src/app/outlet/outlet.page.ts ***!
  \***************************************/
/*! exports provided: OutletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletPage", function() { return OutletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_outlet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./outlet.page.html */ "YJo/");
/* harmony import */ var _outlet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlet.page.scss */ "sZAI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let OutletPage = class OutletPage {
    constructor(navctrl, alert, config, modalctrl, service) {
        this.navctrl = navctrl;
        this.alert = alert;
        this.config = config;
        this.modalctrl = modalctrl;
        this.service = service;
        this.otherinfolenth = 0;
    }
    ngOnInit() {
        console.log('Outlet Page');
    }
    back() {
        this.navctrl.pop();
    }
    validate() {
        if (!this.name) {
            this.alert.showAlert("Error!", "Please Enter Outlet Name", "");
            return false;
        }
        if (!this.address) {
            this.alert.showAlert("Error!", "Please Enter Outlet Address", "");
            return false;
        }
        if (!this.contact) {
            this.alert.showAlert("Error!", "Please Enter Outlet Contact Number", "");
            return false;
        }
        if (!this.mon_start) {
            this.alert.showAlert("Error!", "Please Enter Monday Start Time", "");
            return false;
        }
        if (!this.mon_end) {
            this.alert.showAlert("Error!", "Please Enter Monday End Time", "");
            return false;
        }
        if (!this.tue_start) {
            this.alert.showAlert("Error!", "Please Enter Tuesday Start Time", "");
            return false;
        }
        if (!this.tue_end) {
            this.alert.showAlert("Error!", "Please Enter Tuesday End Time", "");
            return false;
        }
        if (!this.wed_start) {
            this.alert.showAlert("Error!", "Please Enter Wednesday Start Time", "");
            return false;
        }
        if (!this.wed_end) {
            this.alert.showAlert("Error!", "Please Enter Wednesday End Time", "");
            return false;
        }
        if (!this.thu_start) {
            this.alert.showAlert("Error!", "Please Enter Thursday Start Time", "");
            return false;
        }
        if (!this.thu_end) {
            this.alert.showAlert("Error!", "Please Enter Thursday End Time", "");
            return false;
        }
        if (!this.fri_start) {
            this.alert.showAlert("Error!", "Please Enter Friday Start Time", "");
            return false;
        }
        if (!this.fri_end) {
            this.alert.showAlert("Error!", "Please Enter Friday End Time", "");
            return false;
        }
        if (!this.sat_start) {
            this.alert.showAlert("Error!", "Please Enter Saturday Start Time", "");
            return false;
        }
        if (!this.sat_end) {
            this.alert.showAlert("Error!", "Please Enter Saturday End Time", "");
            return false;
        }
        if (!this.sun_start) {
            this.alert.showAlert("Error!", "Please Enter Sunday Start Time", "");
            return false;
        }
        if (!this.sun_end) {
            this.alert.showAlert("Error!", "Please Enter Sunday End Time", "");
            return false;
        }
        return true;
    }
    save() {
        if (this.validate()) {
        }
    }
    contrlenth() {
        this.otherinfolenth = this.other_info.length;
    }
};
OutletPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] }
];
OutletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-outlet',
        template: _raw_loader_outlet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_outlet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OutletPage);



/***/ }),

/***/ "sZAI":
/*!*****************************************!*\
  !*** ./src/app/outlet/outlet.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputdiv {\n  --background:#f0f0f0;\n  height: 40px;\n  border-radius: 5px;\n}\n\n.hoursdiv {\n  margin-top: 9px;\n}\n\n.btndiv {\n  color: #c30000;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  border-radius: 5px;\n  --border-radius: 5px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  border: 1px solid #c30000;\n  background: #ffffff;\n  --background: #ffffff;\n  margin: -20px auto 20px;\n  text-transform: none;\n}\n\n.ionotherdiv {\n  position: absolute;\n  bottom: 6px;\n  right: 12px;\n  z-index: 111;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG91dGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNELFlBQUE7RUFDQSxrQkFBQTtBQUNIOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFJSiIsImZpbGUiOiJvdXRsZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0ZGl2e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5ob3Vyc2RpdntcclxuICAgIG1hcmdpbi10b3A6OXB4O1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgICBjb2xvcjogI2MzMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMzAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAtMjBweCBhdXRvIDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uaW9ub3RoZXJkaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgei1pbmRleDogMTExO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=outlet-outlet-module.js.map