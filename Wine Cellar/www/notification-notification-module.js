(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"],{

/***/ "LcRc":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col size=\"1\" style=\"text-align: center;font-size: 23px;\">\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"11\">\n        <h1 style=\"margin-left: 20px;\">通知</h1>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 21</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 21</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 24</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 24</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 24</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  class=\"notifyrow\">\n      <ion-col class=\"ion-no-padding\" size=\"10\">\n        <div class=\"ht_5\"></div>\n        <div class=\"titletext\">Title</div>\n        <div class=\"ht_5\"></div>\n        <div class=\"msgtxt\">Message</div>\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"2\">\n        <div class=\"ht_5\"></div>\n        <div class=\"font10\">1 dec 23</div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer class=\"ion-no-border fotercls\">\n  <ion-row class=\"footerrow\">\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Home.png\" class=\"fottericon\" (click)=\"home()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n      <img src=\"assets/image/search.png\" class=\"fottericon2\" (click)=\"list()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <div class=\"rounddiv\">\n        </div>\n        <img src=\"assets/image/Bell.png\" class=\"fottericon\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n      <img src=\"assets/image/Profile.png\" class=\"fottericon\" (click)=\"profile()\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "TLzw":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.module.ts ***!
  \*****************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "mhdW");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "dOoZ");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "Z9r7":
/*!*****************************************************!*\
  !*** ./src/app/notification/notification.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifyrow {\n  background-color: #ffffff;\n  color: #000000;\n  box-shadow: -1px 4px 8px #bababa;\n  padding: 8px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n\n.titletext {\n  font-weight: bold;\n  color: #000000;\n  font-size: 13px;\n}\n\n.msgtxt {\n  color: gray;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdKIiwiZmlsZSI6Im5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZ5cm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBib3gtc2hhZG93Oi0xcHggNHB4IDhweCByZ2IoMTg2LCAxODYsIDE4Nik7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRpdGxldGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcbi5tc2d0eHR7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "dOoZ":
/*!***************************************************!*\
  !*** ./src/app/notification/notification.page.ts ***!
  \***************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notification.page.html */ "LcRc");
/* harmony import */ var _notification_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.page.scss */ "Z9r7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let NotificationPage = class NotificationPage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
        this.config.logindata();
    }
    ngOnInit() {
        console.log('notification page');
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    list() {
        this.navctrl.navigateForward('/listitem');
    }
    profile() {
        this.navctrl.navigateForward('/profile');
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotificationPage);



/***/ }),

/***/ "mhdW":
/*!*************************************************************!*\
  !*** ./src/app/notification/notification-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "dOoZ");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=notification-notification-module.js.map