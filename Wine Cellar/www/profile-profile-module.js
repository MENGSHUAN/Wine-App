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
    gotodetail() {
        this.navctrl.navigateForward(['/detail']);
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row class=\"row_90\">\n      <ion-col class=\"ion-no-padding\" size=\"3\" style=\"text-align: center;font-size: 23px;\">\n        <ion-avatar style=\"width: 50px;height: 50px;margin-top:-10px;\">\n          <img src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"8\">\n        <div>Meng Shuan</div>\n        <div style=\"font-size:12px;color:rgba(255, 255, 255, 0.825);font-weight: 200;\">Mobile app development company</div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" size=\"1\" (click)=\"setting()\">\n        <ion-icon name=\"settings-outline\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n    <ion-row class=\"row_90\" style=\"font-weight: 200;\">\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('1')\">\n        <div [ngClass]=\"(option == '1')?'selectoptiondiv':'optiondiv'\">History</div>\n        <div *ngIf=\"option == '1'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('2')\">\n        <div [ngClass]=\"(option == '2')?'selectoptiondiv':'optiondiv'\">My Reviews</div>\n        <div *ngIf=\"option == '2'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"selectcategory('3')\">\n        <div [ngClass]=\"(option == '3')?'selectoptiondiv':'optiondiv'\">Favourites</div>\n        <div *ngIf=\"option == '3'\" class=\"borderdiv\"></div>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\" (click)=\"setting()\">\n        <div [ngClass]=\"(option == '4')?'selectoptiondiv':'optiondiv'\">Settings</div>\n        <div *ngIf=\"option == '4'\" class=\"borderdiv\"></div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div *ngIf=\"option == '1'\">\n      <ion-row>\n\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\" class=\"flex\" (click)=\"gotodetail()\">\n            <img src=\"https://images.vivino.com/thumbs/zn3ggvroQZuY1eb46GLKOw_pb_x600.png\" class=\"listimage\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"listtitle\">Garnacha 2016</div>\n          <div class=\"pricediv\">$1,369</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\" class=\"flex\" (click)=\"gotodetail()\">\n            <img src=\"https://images.vivino.com/thumbs/eCi930ihTUmwllpfxq_3JQ_pb_x600.png\" class=\"listimage\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"listtitle\">Saxa Calida Rosso 2016</div>\n          <div class=\"pricediv\">$1,351</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\" class=\"flex\" (click)=\"gotodetail()\">\n            <img src=\"https://images.vivino.com/thumbs/zn3ggvroQZuY1eb46GLKOw_pb_x600.png\" class=\"listimage\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"listtitle\">Garnacha 2016</div>\n          <div class=\"pricediv\">$1,369</div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"recomanddiv\" class=\"flex\" (click)=\"gotodetail()\">\n            <img src=\"https://images.vivino.com/thumbs/eCi930ihTUmwllpfxq_3JQ_pb_x600.png\" class=\"listimage\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"listtitle\">Saxa Calida Rosso 2016</div>\n          <div class=\"pricediv\">$1,351</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '2'\">\n      <ion-row class=\"reviewrow\">\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n            <img src=\"assets/image/profilepic.png\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"8\">\n          <div class=\"ht_5\"></div>\n          <div class=\"reviewname\">Camille</div>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <div class=\"reviewtxt\">Great buyer,Will deal again :)</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <div class=\"ht_5\"></div>\n          <div class=\"font5\">1 dec 21</div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"reviewrow\">\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <ion-avatar style=\"width:30px;height:30px;margin-top:5px;\">\n            <img src=\"assets/image/profilepic.png\">\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"8\">\n          <div class=\"ht_5\"></div>\n          <div class=\"reviewname\">Lexj Jone</div>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <ion-icon name=\"star\" class=\"reviewstaricn\"></ion-icon>\n          <div class=\"reviewtxt\">Great Product</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col class=\"ion-no-padding\" size=\"2\">\n          <div class=\"ht_5\"></div>\n          <div class=\"font5\">1 dec 21</div>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '3'\">\n      <ion-row>\n        <ion-col size=\"6\" (click)=\"gotodetail()\">\n          <div class=\"recomanddiv\" class=\"flex\">\n            <img src=\"https://images.vivino.com/thumbs/zn3ggvroQZuY1eb46GLKOw_pb_x600.png\" class=\"likeimg\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"ht_10\"></div>\n          <div class=\"listtitle\">Garnacha 2016</div>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div class=\"pricediv\">$1,369</div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <ion-icon name=\"heart\" class=\"hearticn\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\" (click)=\"gotodetail()\">\n          <div class=\"recomanddiv\" class=\"flex\">\n            <img src=\"https://images.vivino.com/thumbs/eCi930ihTUmwllpfxq_3JQ_pb_x600.png\" class=\"likeimg\" style=\"height: 160px; width: auto;\">\n          </div>\n          <div class=\"ht_10\"></div>\n          <div class=\"listtitle\">Saxa Calida Rosso 2016</div>\n          <ion-row>\n            <ion-col size=\"9\">\n              <div class=\"pricediv\">$1,351</div>\n            </ion-col>\n            <ion-col size=\"3\">\n                <ion-icon name=\"heart\" class=\"hearticn\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div *ngIf=\"option == '4'\">\n      <!--\n      <ion-row>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Name</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">K29solutions</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Registration Number</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">+91 9624767583</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Address</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">Surat,Gujarat,India</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Company Contact Number</div>\n          <div class=\"ht_5\"></div>\n          <div style=\"color: black;font-weight: bold;\">+91 9624767583</div>\n          <div class=\"ht_5\"></div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <div style=\"color: gray;\">Outlet (click to view outlet details)</div>\n          <div class=\"ht_5\"></div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 1\n          </div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 2\n          </div>\n          <div class=\"outletname\" (click)=\"outletdetail()\">\n            Outlet name 3\n          </div>\n        </ion-col>\n      </ion-row>\n    -->\n\n    \n    <ion-item>\n      <ion-label position=\"fixed\">Fixed Label</ion-label>\n      <ion-input placeholder=\"Enter text\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input placeholder=\"Enter text\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">版本</ion-label>\n      <ion-input placeholder=\"Enter text\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>通知</ion-label>\n      <ion-toggle slot=\"end\" checked></ion-toggle>\n    </ion-item>\n    \n    <ion-item>\n      <ion-checkbox slot=\"start\" checked></ion-checkbox>\n      <ion-label>Checkbox</ion-label>\n    </ion-item>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border fotercls\">\n  <ion-row class=\"footerrow\">\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Home.png\" class=\"fottericon\" (click)=\"home()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/search.png\" class=\"fottericon2\" (click)=\"list()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Bell.png\" class=\"fottericon\" (click)=\"notification()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <div class=\"rounddiv\">\n        </div>\n        <img src=\"assets/image/Profile.png\" class=\"fottericon\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = (".optiondiv {\n  color: rgba(255, 255, 255, 0.838);\n  font-weight: 100;\n  font-size: 15px;\n  text-align: center;\n}\n\n.selectoptiondiv {\n  color: #ffffff;\n  font-weight: bold;\n  font-size: 13px;\n  text-align: center;\n}\n\n.borderdiv {\n  border-bottom: 2px solid #ffffff;\n  height: 7px;\n  margin: 0px 13px;\n}\n\n.listimage {\n  border-radius: 15px;\n  width: 100%;\n}\n\n.listtitle {\n  font-weight: bold;\n  font-size: 12px;\n  margin-left: 5px;\n  color: #000000;\n}\n\n.pricediv {\n  color: gray;\n  font-size: 12px;\n}\n\n.reviewrow {\n  background-color: #ffffff;\n  color: #000000;\n  box-shadow: -1px 4px 8px #bababa;\n  padding: 8px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n}\n\n.reviewname {\n  font-weight: bold;\n  font-size: 12px;\n  /* margin-left: 1px; */\n  color: #000000;\n  margin-bottom: -6px;\n}\n\n.reviewstaricn {\n  color: #ffb259;\n  font-size: 8px;\n}\n\n.reviewtxt {\n  color: gray;\n  margin-left: 2px;\n  margin-top: -3px;\n  font-size: 10px;\n}\n\n.recomanddiv {\n  border: 1px solid #c3c3c3;\n  position: relative;\n  width: 100%;\n  border-radius: 15px;\n}\n\n.likeimg {\n  border-radius: 15px;\n  width: 100%;\n}\n\n.hearticn {\n  color: red;\n}\n\n.outletname {\n  color: black;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSkE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVFKOztBQU5BO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQVVKOztBQVJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBV0o7O0FBVEU7RUFDSSxVQUFBO0FBWU47O0FBVkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWFKOztBQVhFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFjSiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcHRpb25kaXZ7XHJcbiAgICBjb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM4KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc2VsZWN0b3B0aW9uZGl2e1xyXG4gICAgY29sb3I6I2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmJvcmRlcmRpdntcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBoZWlnaHQ6N3B4O1xyXG4gICAgbWFyZ2luOiAwcHggMTNweDtcclxufVxyXG4ubGlzdGltYWdle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saXN0dGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4ucHJpY2VkaXZ7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5yZXZpZXdyb3d7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6IzAwMDAwMDtcclxuICAgIGJveC1zaGFkb3c6LTFweCA0cHggOHB4IHJnYigxODYsIDE4NiwgMTg2KTtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ucmV2aWV3bmFtZXtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDFweDsgKi9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcclxufVxyXG4ucmV2aWV3c3RhcmljbntcclxuICAgIGNvbG9yOiNmZmIyNTk7XHJcbiAgICBmb250LXNpemU6OHB4O1xyXG59XHJcbi5yZXZpZXd0eHR7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5yZWNvbWFuZGRpdntcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDE5NSwgMTk1LCAxOTUpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5saWtlaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaGVhcnRpY257XHJcbiAgICAgIGNvbG9yOnJlZDtcclxuICB9XHJcbiAgLm91dGxldG5hbWV7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gIH1cclxuICAuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map