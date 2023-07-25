(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-detail-module"],{

/***/ "BJgb":
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/*! exports provided: DetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPage", function() { return DetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail.page.html */ "rVzv");
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.page.scss */ "rMtB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service.service */ "ibrm");









let DetailPage = class DetailPage {
    constructor(navctrl, config, service, alert, router) {
        this.navctrl = navctrl;
        this.config = config;
        this.service = service;
        this.alert = alert;
        this.router = router;
    }
    ngOnInit() {
        console.log('detail page');
    }
    back() {
        this.navctrl.pop();
    }
    chat() {
        this.navctrl.navigateForward(['/chat']);
    }
    edit() {
        this.navctrl.navigateForward(['/editpost']);
    }
};
DetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
DetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailPage);



/***/ }),

/***/ "R/Z5":
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/*! exports provided: DetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageRoutingModule", function() { return DetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.page */ "BJgb");




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_3__["DetailPage"]
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ "lM0Z":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailPageModule", function() { return DetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-routing.module */ "R/Z5");
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail.page */ "BJgb");







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailPageRoutingModule"]
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_6__["DetailPage"]]
    })
], DetailPageModule);



/***/ }),

/***/ "rMtB":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background-active: red;\n  --bullet-background: #080808;\n}\n\n.headingdiv {\n  font-weight: bold;\n  color: #000000;\n}\n\n.headertxt {\n  font-size: 25px;\n  font-weight: 500;\n  margin: 5px;\n  color: #000000;\n}\n\n.btndiv {\n  color: #ffffff;\n  font-size: 16px;\n  width: 100%;\n  border-radius: 5px;\n  --border-radius: 10px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  background: #009cc3;\n  --background: #009cc3;\n  text-transform: none;\n  font-weight: bold;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n}\n\n.sellername {\n  color: #009cc3;\n  font-weight: bold;\n}\n\n.sellettxt {\n  color: gray;\n}\n\n.staricn {\n  color: #ffb259;\n}\n\n.reviewstaricn {\n  color: #ffb259;\n  font-size: 12px;\n}\n\n.hrdiv {\n  margin-top: 5px;\n  border-top: 1px solid #b0b0b0;\n}\n\n.seemore {\n  text-align: center;\n  text-decoration: underline;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.lbldiv2 {\n  font-size: 20px;\n  color: gray;\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.ionotherdiv {\n  position: absolute;\n  bottom: 6px;\n  right: 12px;\n  z-index: 111;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRywrQkFBQTtFQUNBLDRCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtBQU9KOztBQUxBO0VBQ0ksY0FBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtBQVdKOztBQVJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFXSjs7QUFSQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBV0o7O0FBUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFXSiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlc3tcclxuICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHJlZDtcclxuICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzA4MDgwODtcclxufVxyXG4uaGVhZGluZ2RpdntcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5oZWFkZXJ0eHR7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDljYzM7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDljYzM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlvbi1hdmF0YXJ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4uc2VsbGVybmFtZXtcclxuICAgIGNvbG9yOiMwMDljYzM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uc2VsbGV0dHh0e1xyXG4gICAgY29sb3I6Z3JheTtcclxufVxyXG4uc3RhcmljbntcclxuICAgIGNvbG9yOiNmZmIyNTk7XHJcbn1cclxuLnJldmlld3N0YXJpY257XHJcbiAgICBjb2xvcjojZmZiMjU5O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn1cclxuLmhyZGl2e1xyXG4gICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE3NiwgMTc2LCAxNzYpO1xyXG59XHJcbi5zZWVtb3Jle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubGJsZGl2MntcclxuICAgIGZvbnQtc2l6ZToyMHB4OyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG59XHJcblxyXG4uaW9ub3RoZXJkaXZ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgei1pbmRleDogMTExO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "rVzv":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"ht_20\"></div>\n  <ion-row class=\"row_90 font_25\">\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"share-social-outline\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <div class=\"flex\"> \n    <img src=\"https://images.vivino.com/thumbs/r87yUi-gTdeE0oy5uJYZiQ_pb_x600.png\" style=\"width: auto; height: 300px;\">\n  </div>\n  <div class=\"vertical-align-top-content\">\n    <ion-row >\n      <ion-col size=\"12\">\n        <div class=\"headertxt\">Cabernet Franc 2017</div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div style=\"color:#000000; margin-left:5px; font-size: 20px;\">$875<br><br></div>\n      </ion-col>\n      <!--\n      <ion-col size=\"4\">\n        <ion-button class=\"btndiv\" (click)=\"chat()\">Chat</ion-button>\n      </ion-col>\n      -->\n      <ion-col size=\"12\">\n        <div class=\"lbldiv2\">Country</div>\n        <div>France</div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv2\">Rigon</div>\n        <div>Bordeaux</div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv2\">Winery</div>\n        <div>\tChâteau Guadet</div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv2\">Grapes</div>\n        <div>\t\tCabernet Sauvignon, Cabernet Franc, Merlot</div>\n      </ion-col>\n\n      \n\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv2\">Description</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n          <ion-input style=\"height: 120px;\" placeholder=\"Add a short description here\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item>\n        \n      </ion-col>\n\n\n      \n      <!--\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Meet-Up</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>City Hall MRT</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Seller Information</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"sellername\">Jen Lim</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"sellettxt font10\">Very Responsive</div>\n        <div class=\"sellettxt font10\">Joined 2 years ago</div>\n      </ion-col>\n      -->\n      <!--Reviews-->\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\"><br><br>Reviews</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>5.0 <span class=\"font10\">(20 Reviews)</span></div>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n      </ion-col>\n      <!--1-->\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n       <div class=\"hrdiv\"></div>\n       <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px; height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Camille</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great buyer, will deal again:)</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n      <!--2-->\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"ht_15\"></div>\n       </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px;height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Lexi Jone</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great Products</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n      <!--3-->\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"ht_15\"></div>\n       </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px;height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Lexi Jone</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great Products</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n      <!--4-->\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"ht_15\"></div>\n       </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px;height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Lexi Jone</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great Products</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"ht_10\"></div>\n        <div class=\"seemore\">See More</div>\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map