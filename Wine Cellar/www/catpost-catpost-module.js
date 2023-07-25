(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["catpost-catpost-module"],{

/***/ "7sU4":
/*!*******************************************!*\
  !*** ./src/app/catpost/catpost.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menuicn {\n  font-size: 25px;\n  margin-top: 9px;\n}\n\n.hartcls {\n  width: 36px;\n}\n\nion-searchbar {\n  --border-radius: 5px;\n  color: #000000;\n  --background: #ffffff;\n}\n\nion-slides {\n  padding-bottom: 10px;\n  --bullet-background-active:red;\n}\n\n.headinglabel {\n  color: #000000;\n  font-weight: bold;\n  margin-bottom: -5px;\n}\n\n.slidecard {\n  background-color: black;\n  padding-bottom: 10px;\n}\n\n.headingdiv {\n  color: white;\n  text-align: left;\n  margin-left: 8px;\n}\n\n.hearticn {\n  position: absolute;\n  top: 8px;\n  right: 10px;\n  color: #ffffff;\n  background-color: #000000;\n  width: 22px;\n  height: 20px;\n  padding: 3px;\n}\n\n.browsecard {\n  margin: 3px;\n  padding: 5px;\n  background-color: #ffffff;\n  color: #000000;\n}\n\n.selectbrowsecard {\n  margin: 3px;\n  padding: 5px;\n  background-color: #db152a;\n  color: #ffffff;\n}\n\n.recomanddiv {\n  border: 1px solid #c3c3c3;\n  position: relative;\n  width: 100%;\n  height: 168px;\n}\n\n.recommandtxt {\n  font-size: 10px;\n  color: black;\n  font-weight: bolder;\n}\n\n.flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNhdHBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFBSjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFDQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUE7RUFDRSxvQkFBQTtFQUVBLDhCQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxvQkFBQTtBQUdGOztBQURBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFJSjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFLRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQU1GOztBQUpBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUUY7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVFGIiwiZmlsZSI6ImNhdHBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tZW51aWNue1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcbi5oYXJ0Y2xze1xyXG4gIHdpZHRoOiAzNnB4O1xyXG59XHJcbmlvbi1zZWFyY2hiYXJ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuaW9uLXNsaWRlcyB7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuLy8gICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjOGY4ZjhmO1xyXG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOnJlZDtcclxuIFxyXG59XHJcbi5oZWFkaW5nbGFiZWx7XHJcbiAgY29sb3I6IzAwMDAwMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG59XHJcbi5zbGlkZWNhcmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uaGVhZGluZ2RpdntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OjhweDtcclxufVxyXG4uaGVhcnRpY257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgd2lkdGg6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmc6M3B4O1xyXG4gIC8vIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uYnJvd3NlY2FyZHtcclxuICBtYXJnaW46IDNweDtcclxuICBwYWRkaW5nOjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgY29sb3I6IzAwMDAwMDtcclxufVxyXG4uc2VsZWN0YnJvd3NlY2FyZHtcclxuICBtYXJnaW46IDNweDtcclxuICBwYWRkaW5nOjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNkYjE1MmE7XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG4ucmVjb21hbmRkaXZ7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTk1LCAxOTUsIDE5NSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTY4cHg7XHJcbn1cclxuLnJlY29tbWFuZHR4dHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmZsZXh7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "H73U":
/*!*******************************************!*\
  !*** ./src/app/catpost/catpost.module.ts ***!
  \*******************************************/
/*! exports provided: CatpostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatpostPageModule", function() { return CatpostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _catpost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catpost-routing.module */ "vkI6");
/* harmony import */ var _catpost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./catpost.page */ "cdGV");







let CatpostPageModule = class CatpostPageModule {
};
CatpostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _catpost_routing_module__WEBPACK_IMPORTED_MODULE_5__["CatpostPageRoutingModule"]
        ],
        declarations: [_catpost_page__WEBPACK_IMPORTED_MODULE_6__["CatpostPage"]]
    })
], CatpostPageModule);



/***/ }),

/***/ "cdGV":
/*!*****************************************!*\
  !*** ./src/app/catpost/catpost.page.ts ***!
  \*****************************************/
/*! exports provided: CatpostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatpostPage", function() { return CatpostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_catpost_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./catpost.page.html */ "nW+G");
/* harmony import */ var _catpost_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catpost.page.scss */ "7sU4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service.service */ "ibrm");







let CatpostPage = class CatpostPage {
    constructor(navCtrl, navctrl, service, alert) {
        this.navCtrl = navCtrl;
        this.navctrl = navctrl;
        this.service = service;
        this.alert = alert;
    }
    ngOnInit() {
    }
    gotodetail() {
        this.navCtrl.navigateForward(['/detail']);
    }
    back() {
        this.navctrl.pop();
    }
};
CatpostPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_6__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }
];
CatpostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-catpost',
        template: _raw_loader_catpost_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_catpost_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CatpostPage);



/***/ }),

/***/ "nW+G":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/catpost/catpost.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title> <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon> Category name</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"contentback\">\n  <div class=\"ht_15\"></div>\n  <div class=\"vertical-align-top-content\">\n  <ion-row>\n  <!-- row1 -->\n  <ion-col size=\"6\" >\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/DXqNhT6ESn-k-YiYG0D4hg_pb_x600.png\" style=\"height: 165px; width: auto;\" (click)=\"gotodetail(1)\">\n      </div>\n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\" (click)=\"gotodetail(1)\">Selección Especial 2016</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\" (click)=\"gotodetail(1)\">$1,196</div>\n  </ion-col>\n  <ion-col size=\"6\" (click)=\"gotodetail()\">\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/SmHEgH6iSvOv8IgSH5cdkw_pb_x600.png\" style=\"height: 165px; width: auto;\">\n      </div>\n      \n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\">Cabernet Sauvignon 2015</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\">$1,620</div>\n  </ion-col>\n\n  <!-- row2 -->\n  <ion-col size=\"6\" >\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/DXqNhT6ESn-k-YiYG0D4hg_pb_x600.png\" style=\"height: 165px; width: auto;\" (click)=\"gotodetail(1)\">\n      </div>\n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\" (click)=\"gotodetail(1)\">Selección Especial 2016</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\" (click)=\"gotodetail(1)\">$1,196</div>\n  </ion-col>\n  <ion-col size=\"6\" (click)=\"gotodetail()\">\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/SmHEgH6iSvOv8IgSH5cdkw_pb_x600.png\" style=\"height: 165px; width: auto;\">\n      </div>\n      \n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\">Cabernet Sauvignon 2015</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\">$1,620</div>\n  </ion-col> \n\n  \n  <!-- row3 -->\n  <ion-col size=\"6\" >\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/DXqNhT6ESn-k-YiYG0D4hg_pb_x600.png\" style=\"height: 165px; width: auto;\" (click)=\"gotodetail(1)\">\n      </div>\n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\" (click)=\"gotodetail(1)\">Selección Especial 2016</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\" (click)=\"gotodetail(1)\">$1,196</div>\n  </ion-col>\n  <ion-col size=\"6\" (click)=\"gotodetail()\">\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/SmHEgH6iSvOv8IgSH5cdkw_pb_x600.png\" style=\"height: 165px; width: auto;\">\n      </div>\n      \n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\">Cabernet Sauvignon 2015</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\">$1,620</div>\n  </ion-col> \n\n  <!-- row4 -->\n  <ion-col size=\"6\" >\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/DXqNhT6ESn-k-YiYG0D4hg_pb_x600.png\" style=\"height: 165px; width: auto;\" (click)=\"gotodetail(1)\">\n      </div>\n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\" (click)=\"gotodetail(1)\">Selección Especial 2016</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\" (click)=\"gotodetail(1)\">$1,196</div>\n  </ion-col>\n  <ion-col size=\"6\" (click)=\"gotodetail()\">\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/SmHEgH6iSvOv8IgSH5cdkw_pb_x600.png\" style=\"height: 165px; width: auto;\">\n      </div>\n      \n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\">Cabernet Sauvignon 2015</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\">$1,620</div>\n  </ion-col> \n\n  <!-- row5 -->\n  <ion-col size=\"6\" >\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/DXqNhT6ESn-k-YiYG0D4hg_pb_x600.png\" style=\"height: 165px; width: auto;\" (click)=\"gotodetail(1)\">\n      </div>\n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\" (click)=\"gotodetail(1)\">Selección Especial 2016</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\" (click)=\"gotodetail(1)\">$1,196</div>\n  </ion-col>\n  <ion-col size=\"6\" (click)=\"gotodetail()\">\n    <div class=\"recomanddiv\">\n      <div class=\"flex\">\n        <img src=\"https://images.vivino.com/thumbs/SmHEgH6iSvOv8IgSH5cdkw_pb_x600.png\" style=\"height: 165px; width: auto;\">\n      </div>\n      \n      <div class=\"hearticn\">\n        <ion-icon [name]=\"(1 == '1')?'heart':'heart-outline'\"></ion-icon>\n      </div>\n    </div>\n    <div class=\"ht_20\"></div>\n    <div class=\"recommandtxt\">Cabernet Sauvignon 2015</div>\n    <div class=\"ht_5\"></div>\n    <div style=\"font-size: 10px;\">$1,620</div>\n  </ion-col> \n\n</ion-row>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "vkI6":
/*!***************************************************!*\
  !*** ./src/app/catpost/catpost-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CatpostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatpostPageRoutingModule", function() { return CatpostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _catpost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catpost.page */ "cdGV");




const routes = [
    {
        path: '',
        component: _catpost_page__WEBPACK_IMPORTED_MODULE_3__["CatpostPage"]
    }
];
let CatpostPageRoutingModule = class CatpostPageRoutingModule {
};
CatpostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CatpostPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=catpost-catpost-module.js.map