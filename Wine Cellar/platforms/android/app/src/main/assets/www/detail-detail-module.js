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
/* harmony default export */ __webpack_exports__["default"] = ("ion-slides {\n  --bullet-background-active: red;\n  --bullet-background: #080808;\n}\n\n.headingdiv {\n  font-weight: bold;\n  color: #000000;\n}\n\n.btndiv {\n  color: #ffffff;\n  font-size: 16px;\n  width: 100%;\n  border-radius: 5px;\n  --border-radius: 10px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  background: #009cc3;\n  --background: #009cc3;\n  text-transform: none;\n  font-weight: bold;\n}\n\nion-avatar {\n  width: 50px;\n  height: 50px;\n}\n\n.sellername {\n  color: #009cc3;\n  font-weight: bold;\n}\n\n.sellettxt {\n  color: gray;\n}\n\n.staricn {\n  color: #ffb259;\n}\n\n.reviewstaricn {\n  color: #ffb259;\n  font-size: 12px;\n}\n\n.hrdiv {\n  margin-top: 5px;\n  border-top: 1px solid #b0b0b0;\n}\n\n.seemore {\n  text-align: center;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRywrQkFBQTtFQUNBLDRCQUFBO0FBQ0g7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUlKOztBQUZBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5BO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0FBU0o7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0FBVUoiLCJmaWxlIjoiZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXN7XHJcbiAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZWQ7XHJcbiAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICMwODA4MDg7XHJcbn1cclxuLmhlYWRpbmdkaXZ7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uYnRuZGl2e1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA5Y2MzO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA5Y2MzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pb24tYXZhdGFye1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLnNlbGxlcm5hbWV7XHJcbiAgICBjb2xvcjojMDA5Y2MzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNlbGxldHR4dHtcclxuICAgIGNvbG9yOmdyYXk7XHJcbn1cclxuLnN0YXJpY257XHJcbiAgICBjb2xvcjojZmZiMjU5O1xyXG59XHJcbi5yZXZpZXdzdGFyaWNue1xyXG4gICAgY29sb3I6I2ZmYjI1OTtcclxuICAgIGZvbnQtc2l6ZToxMnB4O1xyXG59XHJcbi5ocmRpdntcclxuICAgIG1hcmdpbi10b3A6NXB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigxNzYsIDE3NiwgMTc2KTtcclxufVxyXG4uc2VlbW9yZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59Il19 */");

/***/ }),

/***/ "rVzv":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"ht_20\"></div>\n  <ion-row class=\"row_90 font_25\">\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon>\n    </ion-col>\n    <ion-col></ion-col>\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"share-social-outline\"></ion-icon>\n    </ion-col>\n    <ion-col size=\"1.5\">\n      <ion-icon name=\"heart-outline\"></ion-icon>\n    </ion-col>\n  </ion-row>\n  <ion-slides pager>\n    <ion-slide>\n      <img src=\"assets/image/banner1.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/image/banner2.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/image/banner3.jpg\">\n    </ion-slide>\n  </ion-slides>\n  <div class=\"vertical-align-top-content\">\n    <ion-row >\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Title</div>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div style=\"color:#000000;margin-top:8px;\">$414</div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-button class=\"btndiv\" (click)=\"chat()\">Chat</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>\n          Product description text display here.\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Meet-Up</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>City Hall MRT</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Seller Information</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-avatar>\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"sellername\">Jen Lim</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"sellettxt font10\">Very Responsive</div>\n        <div class=\"sellettxt font10\">Joined 2 years ago</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"headingdiv\">Reviews</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div>5.0 <span class=\"font10\">(20 Reviews)</span></div>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"staricn\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n       <div class=\"hrdiv\"></div>\n       <div class=\"ht_15\"></div>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px;height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Camille</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great buyer, will deal again:)</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n      <ion-col size=\"12\" class=\"ion-no-padding\">\n        <div class=\"ht_15\"></div>\n       </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width:30px;height:30px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"7\">\n        <div style=\"font-weight: bold;color:#000000;font-size: 14px;\">Lexi Jone</div>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n        <div style=\"color:#707070;font-size:11px;\">Great Products</div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <div style=\"color:#707070;font-size:10px;\">1 Dec 21</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_10\"></div>\n        <div class=\"seemore\">See More</div>\n      </ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=detail-detail-module.js.map