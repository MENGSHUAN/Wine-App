(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["conversation-conversation-module"],{

/***/ "/0L9":
/*!***************************************************!*\
  !*** ./src/app/conversation/conversation.page.ts ***!
  \***************************************************/
/*! exports provided: ConversationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPage", function() { return ConversationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_conversation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./conversation.page.html */ "3qWv");
/* harmony import */ var _conversation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conversation.page.scss */ "76Jk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let ConversationPage = class ConversationPage {
    constructor(navctrl, config, service, alert) {
        this.navctrl = navctrl;
        this.config = config;
        this.service = service;
        this.alert = alert;
    }
    ngOnInit() {
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    list() {
        this.navctrl.navigateForward('/listitem');
    }
    notification() {
        this.navctrl.navigateForward('/notification');
    }
    profile() {
        this.navctrl.navigateForward('/profile');
    }
    chat() {
        this.navctrl.navigateForward('/chat');
    }
};
ConversationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ConversationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-conversation',
        template: _raw_loader_conversation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_conversation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ConversationPage);



/***/ }),

/***/ "3qWv":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/conversation/conversation.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"1\" style=\"text-align: center;font-size: 23px;\">\n      </ion-col>\n      <ion-col size=\"11\">\n        <div>My Chats </div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n\n    <ion-row (click)=\"chat()\">\n      <ion-col class=\"ion-no-padding\" size=\"11.5\">\n        <ion-row class=\"notifyrow\">\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n              <img src=\"assets/image/profilepic.png\" style=\"border-radius: 50%;\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"8\">\n            <div class=\"ht_5\"></div>\n            <div class=\"titletext\">Iphone</div>\n            <div class=\"ht_5\"></div>\n            <div class=\"msgtxt\">I want to buy</div>\n            <div class=\"ht_5\"></div>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <div class=\"ht_5\"></div>\n            <div class=\"font5\">1 dec 24</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"0.5\">\n      </ion-col>\n    </ion-row>\n\n     <ion-row (click)=\"chat()\">\n      <ion-col class=\"ion-no-padding\" size=\"11.5\">\n        <ion-row class=\"notifyrow\">\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n              <img src=\"assets/image/profilepic.png\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"8\">\n            <div class=\"ht_5\"></div>\n            <div class=\"titletext\">Danny</div>\n            <div class=\"ht_5\"></div>\n            <div class=\"msgtxt\">Hi! I am interested, it is still available?</div>\n            <div class=\"ht_5\"></div>\n          </ion-col>\n          <ion-col class=\"ion-no-padding\" size=\"2\">\n            <div class=\"ht_5\"></div>\n            <div class=\"font5\">1 dec 21</div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"0.5\">\n        <div class=\"circlediv\"></div>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border fotercls\">\n  <ion-row class=\"footerrow\">\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Home.png\" class=\"fottericon\" (click)=\"home()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Add.png\" class=\"fottericon\" (click)=\"list()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <div class=\"rounddiv\">\n        </div>\n        <img src=\"assets/image/Bell.png\" class=\"fottericon\" (click)=\"notification()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Profile.png\" class=\"fottericon\" (click)=\"profile()\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "76Jk":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifyrow {\n  background-color: #ffffff;\n  color: #000000;\n  box-shadow: -1px 4px 8px #bababa;\n  padding: 8px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n\n.titletext {\n  font-weight: bold;\n  color: #000000;\n  font-size: 13px;\n}\n\n.msgtxt {\n  color: gray;\n  font-size: 10px;\n}\n\n.circlediv {\n  width: 10px;\n  height: 10px;\n  background-color: #fa001b;\n  border-radius: 50%;\n  margin-left: 10px;\n  margin-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlKIiwiZmlsZSI6ImNvbnZlcnNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZ5cm93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICBib3gtc2hhZG93Oi0xcHggNHB4IDhweCByZ2IoMTg2LCAxODYsIDE4Nik7XHJcbiAgICBwYWRkaW5nOjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnRpdGxldGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcbi5tc2d0eHR7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbn1cclxuLmNpcmNsZWRpdntcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhMDAxYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufSJdfQ== */");

/***/ }),

/***/ "DldP":
/*!*****************************************************!*\
  !*** ./src/app/conversation/conversation.module.ts ***!
  \*****************************************************/
/*! exports provided: ConversationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageModule", function() { return ConversationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conversation-routing.module */ "I3Be");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversation.page */ "/0L9");







let ConversationPageModule = class ConversationPageModule {
};
ConversationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _conversation_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConversationPageRoutingModule"]
        ],
        declarations: [_conversation_page__WEBPACK_IMPORTED_MODULE_6__["ConversationPage"]]
    })
], ConversationPageModule);



/***/ }),

/***/ "I3Be":
/*!*************************************************************!*\
  !*** ./src/app/conversation/conversation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ConversationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationPageRoutingModule", function() { return ConversationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _conversation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversation.page */ "/0L9");




const routes = [
    {
        path: '',
        component: _conversation_page__WEBPACK_IMPORTED_MODULE_3__["ConversationPage"]
    }
];
let ConversationPageRoutingModule = class ConversationPageRoutingModule {
};
ConversationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConversationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=conversation-conversation-module.js.map