(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "cRhG":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "v+7O");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "ncJE");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "ncJE":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "tXh8");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "zxxS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");








let ProfilePage = class ProfilePage {
    constructor(navctrl, service, config, alert) {
        this.navctrl = navctrl;
        this.service = service;
        this.config = config;
        this.alert = alert;
        this.config.logindata();
        this.option = '1';
    }
    ngOnInit() {
        console.log('Profile page');
    }
    selectcategory(id) {
        this.option = id;
    }
    outletdetail() {
        this.navctrl.navigateForward(['outletdetail']);
    }
    setting() {
        this.navctrl.navigateForward('settings');
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    notification() {
        this.navctrl.navigateForward('/notification');
    }
    list() {
        this.navctrl.navigateForward('/listitem');
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "tXh8":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row class=\"row_90\">\n      <ion-col class=\"ion-no-padding\" size=\"3\" style=\"text-align: center;font-size: 23px;\">\n        <ion-avatar style=\"width: 50px;height: 50px;margin-top:-10px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"8\">\n        <div>K29solutions</div>\n        <div style=\"font-size:12px;color:rgba(255, 255, 255, 0.825);font-weight: 200;\">Mobile app development company</div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\" (click)=\"setting()\">\n        <ion-icon name=\"settings-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <ion-row class=\"row_90\" style=\"font-weight: 200;\">\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('1')\">\n        <div [ngClass]=\"(option == '1')?'selectoptiondiv':'optiondiv'\">My Listing</div>\n        <div *ngIf=\"option == '1'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('2')\">\n        <div [ngClass]=\"(option == '2')?'selectoptiondiv':'optiondiv'\">Reviews</div>\n        <div *ngIf=\"option == '2'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('3')\">\n        <div [ngClass]=\"(option == '3')?'selectoptiondiv':'optiondiv'\">Favourites</div>\n        <div *ngIf=\"option == '3'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col *ngIf=\"2 == '2'\" class=\"ion-no-padding\" (click)=\"selectcategory('4')\">\n        <div [ngClass]=\"(option == '4')?'selectoptiondiv':'optiondiv'\">Company</div>\n        <div *ngIf=\"option == '4'\" class=\"borderdiv\"></div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div *ngIf=\"option == '1'\">\n      <ion-row>\n\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\">\n            <img src=\"assets/image/iphone.jpg\" class=\"listimage\">\n          </div>\n          <div class=\"listtitle\">Title</div>\n          <div class=\"pricediv\">$55</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\">\n            <img src=\"assets/image/helmet.jpg\" class=\"listimage\">\n          </div>\n          <div class=\"listtitle\">Yamaha Motorbike</div>\n          <div class=\"pricediv\">$139.00</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\">\n              <img src=\"assets/image/iphone.jpg\" class=\"listimage\">\n          </div>\n          <div class=\"listtitle\">Title</div>\n          <div class=\"pricediv\">$55</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\">\n            <img src=\"assets/image/helmet.jpg\" class=\"listimage\">\n          </div>\n          <div class=\"listtitle\">Yamaha Motorbike</div>\n          <div class=\"pricediv\">$139.00</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '2'\">\n      <ion-row class=\"reviewrow\">\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n            <img src=\"assets/image/profilepic.png\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"8\">\n          <div class=\"ht_5\"></div>\n          <div class=\"reviewname\">Camille</div>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <div class=\"reviewtxt\">Great buyer,Will deal again :)</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <div class=\"ht_5\"></div>\n          <div class=\"font5\">1 dec 21</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"reviewrow\">\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n            <img src=\"assets/image/profilepic.png\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"8\">\n          <div class=\"ht_5\"></div>\n          <div class=\"reviewname\">Lexj Jone</div>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <div class=\"reviewtxt\">Great Product</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <div class=\"ht_5\"></div>\n          <div class=\"font5\">1 dec 21</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '3'\">\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"gotodetail()\">\n          <div class=\"recomanddiv\">\n            <img src=\"assets/image/slip.jpg\" class=\"likeimg\">\n          </div>\n          <div class=\"ht_10\"></div>\n          <div class=\"listtitle\">Saddlemen GP-V1 Seat</div>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div class=\"pricediv\">$139.00</div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <ion-icon name=\"heart\" class=\"hearticn\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"gotodetail()\">\n          <div class=\"recomanddiv\">\n            <img src=\"assets/image/slip.jpg\" class=\"likeimg\">\n          </div>\n          <div class=\"ht_10\"></div>\n          <div class=\"listtitle\">Saddlemen GP-V1 Seat</div>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div class=\"pricediv\">$139.00</div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <ion-icon name=\"heart\" class=\"hearticn\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '4'\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Name</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">K29solutions</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Registration Number</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">+91 9624767583</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Address</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">Surat,Gujarat,India</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Contact Number</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">+91 9624767583</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Outlet (click to view outlet details)</div>\n          <div class=\"ht_5\"></div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 1\n          </div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 2\n          </div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 3\n          </div>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border fotercls\">\n  <ion-row class=\"footerrow\">\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Home.png\" class=\"fottericon\" (click)=\"home()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Add.png\" class=\"fottericon\" (click)=\"list()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Bell.png\" class=\"fottericon\" (click)=\"notification()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <div class=\"rounddiv\">\n        </div>\n        <img src=\"assets/image/Profile.png\" class=\"fottericon\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "v+7O":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "ncJE");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "zxxS":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".optiondiv {\n  color: rgba(255, 255, 255, 0.838);\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n}\n\n.selectoptiondiv {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n\n.borderdiv {\n  border-bottom: 2px solid #ffffff;\n  height: 7px;\n  margin: 0px 13px;\n}\n\n.listimage {\n  border-radius: 15px;\n  width: 100%;\n}\n\n.listtitle {\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: 5px;\n  color: #000000;\n}\n\n.pricediv {\n  color: gray;\n  font-size: 12px;\n}\n\n.reviewrow {\n  background-color: #ffffff;\n  color: #000000;\n  box-shadow: -1px 4px 8px #bababa;\n  padding: 8px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n\n.reviewname {\n  font-weight: bold;\n  font-size: 12px;\n  /* margin-left: 1px; */\n  color: #000000;\n  margin-bottom: -6px;\n}\n\n.reviewstaricn {\n  color: #ffb259;\n  font-size: 8px;\n}\n\n.reviewtxt {\n  color: gray;\n  margin-left: 2px;\n  margin-top: -3px;\n  font-size: 10px;\n}\n\n.recomanddiv {\n  border: 1px solid #c3c3c3;\n  position: relative;\n  width: 100%;\n  border-radius: 15px;\n}\n\n.likeimg {\n  border-radius: 15px;\n  width: 100%;\n}\n\n.hearticn {\n  color: red;\n}\n\n.outletname {\n  color: black;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBV0o7O0FBVEU7RUFDSSxVQUFBO0FBWU47O0FBVkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWFKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbmRpdntcclxuICAgIGNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zZWxlY3RvcHRpb25kaXZ7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MTNweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm9yZGVyZGl2e1xyXG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGhlaWdodDo3cHg7XHJcbiAgICBtYXJnaW46IDBweCAxM3B4O1xyXG59XHJcbi5saXN0aW1hZ2V7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpc3R0aXRsZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5wcmljZWRpdntcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnJldmlld3Jvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgYm94LXNoYWRvdzotMXB4IDRweCA4cHggcmdiKDE4NiwgMTg2LCAxODYpO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5yZXZpZXduYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMXB4OyAqL1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG59XHJcbi5yZXZpZXdzdGFyaWNue1xyXG4gICAgY29sb3I6I2ZmYjI1OTtcclxuICAgIGZvbnQtc2l6ZTo4cHg7XHJcbn1cclxuLnJldmlld3R4dHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuLnJlY29tYW5kZGl2e1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLmxpa2VpbWd7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5oZWFydGljbntcclxuICAgICAgY29sb3I6cmVkO1xyXG4gIH1cclxuICAub3V0bGV0bmFtZXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map