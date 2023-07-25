(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listitem-listitem-module"],{

/***/ "0qPJ":
/*!*********************************************!*\
  !*** ./src/app/listitem/listitem.module.ts ***!
  \*********************************************/
/*! exports provided: ListitemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListitemPageModule", function() { return ListitemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _listitem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listitem-routing.module */ "yn99");
/* harmony import */ var _listitem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listitem.page */ "XhIm");







let ListitemPageModule = class ListitemPageModule {
};
ListitemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listitem_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListitemPageRoutingModule"]
        ],
        declarations: [_listitem_page__WEBPACK_IMPORTED_MODULE_6__["ListitemPage"]]
    })
], ListitemPageModule);



/***/ }),

/***/ "LZUP":
/*!*********************************************!*\
  !*** ./src/app/listitem/listitem.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addimagediv {\n  border: 1px solid gray;\n  width: 100%;\n  height: 90px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.addicn {\n  color: #007be2;\n  font-size: 28px;\n  margin-top: 28px;\n}\n\n.lbldiv {\n  font-size: 16px;\n  color: gray;\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.inputdiv {\n  --background:#f0f0f0;\n  height: 40px;\n  border-radius: 5px;\n  --min-height: 40px;\n}\n\n.arricn {\n  font-size: 15px;\n}\n\nion-select {\n  width: 100%;\n}\n\n.listimg {\n  border: 1px solid gray;\n  width: 100%;\n  height: 88px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxpc3RpdGVtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0FBRUg7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksb0JBQUE7RUFDRCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlIOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBT0oiLCJmaWxlIjoibGlzdGl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGltYWdlZGl2e1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hZGRpY257XHJcbiAgICBjb2xvcjojMDA3YmUyO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICBtYXJnaW4tdG9wOjI4cHg7XHJcbn1cclxuLmxibGRpdntcclxuICAgIGZvbnQtc2l6ZToxNnB4OyBcclxuICAgIGNvbG9yOmdyYXk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6OHB4O1xyXG59XHJcbi5pbnB1dGRpdntcclxuICAgIC0tYmFja2dyb3VuZDojZjBmMGYwO1xyXG4gICBoZWlnaHQ6IDQwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgLS1taW4taGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5hcnJpY257XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLXNlbGVjdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saXN0aW1ne1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "XhIm":
/*!*******************************************!*\
  !*** ./src/app/listitem/listitem.page.ts ***!
  \*******************************************/
/*! exports provided: ListitemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListitemPage", function() { return ListitemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_listitem_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./listitem.page.html */ "fiwM");
/* harmony import */ var _listitem_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listitem.page.scss */ "LZUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service.service */ "ibrm");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "a/9d");










let ListitemPage = class ListitemPage {
    constructor(navctrl, service, alert, camera, actionSheetController, filetransfer, config) {
        this.navctrl = navctrl;
        this.service = service;
        this.alert = alert;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.filetransfer = filetransfer;
        this.config = config;
        this.images = [];
    }
    ngOnInit() {
        console.log("Listitem Page");
    }
    opengallery(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Gallery',
                        icon: 'image-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, id);
                        }
                    },
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA, id);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType, id) {
        const options = {
            quality: 100,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            targetHeight: 500,
            targetWidth: 500,
        };
        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/png;base64,' + imageData;
            console.log(base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    validatelist() {
        if (!this.category) {
            this.alert.showAlert("Error", "Please Select Category", "");
            return false;
        }
        if (!this.title) {
            this.alert.showAlert("Error", "Please Enter Title", "");
            return false;
        }
        if (!this.condition) {
            this.alert.showAlert("Error", "Please Select Condition", "");
            return false;
        }
        if (!this.price) {
            this.alert.showAlert("Error", "Please Enter Price", "");
            return false;
        }
        if (!this.description) {
            this.alert.showAlert("Error", "Please Enter Description", "");
            return false;
        }
        if (!this.collection_type) {
            this.alert.showAlert("Error", "Please Enter Collection", "");
            return false;
        }
        if (!this.location) {
            this.alert.showAlert("Error", "Please Enter Location", "");
            return false;
        }
        return true;
    }
    submit() {
        /*
        if (this.validatelist()) {
          this.navctrl.navigateForward('/home')
          this.alert.showAlert("CONGRATS!","Post has been successfully listed!","")
        }
        */
        this.navctrl.navigateForward(['/catpost']);
    }
    home() {
        this.navctrl.navigateForward('/home');
    }
    notification() {
        this.navctrl.navigateForward('/notification');
    }
    profile() {
        this.navctrl.navigateForward('/profile');
    }
};
ListitemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_7__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }
];
ListitemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-listitem',
        template: _raw_loader_listitem_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_listitem_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListitemPage);



/***/ }),

/***/ "fiwM":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/listitem/listitem.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col size=\"1\" style=\"text-align: center;font-size: 23px;\">\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"11\">\n        <h1 style=\"margin-left: 20px;\">搜尋</h1>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <!--\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('1')\">\n          <img *ngIf=\"Myimage1 || Myimage2 || Myimage3\" src=\"{{config.url}}{{Myimage1}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage1\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('2')\">\n          <img *ngIf=\"Myimage2\" src=\"{{config.url}}{{Myimage2}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage2\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('3')\">\n          <img *ngIf=\"Myimage3\" src=\"{{config.url}}{{Myimage3}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage3\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      -->\n\n      <!--\n      <ion-col size=\"12\">\n        <div class=\"ht_10\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Category</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select [(ngModel)]=\"category\">\n            <ion-select-option value=\"4\">Cars</ion-select-option>\n            <ion-select-option value=\"4\">Mobile</ion-select-option>\n            <ion-select-option value=\"4\">Jobs</ion-select-option>\n            <ion-select-option value=\"4\">Home</ion-select-option>\n          </ion-select>\n          <ion-input placeholder=\"Tyres\"></ion-input>\n          <ion-icon slot=\"end\" name=\"chevron-down-outline\" class=\"arricn\"></ion-icon> \n        </ion-item>\n      </ion-col>\n      -->\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Name</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Brand(Winery)</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Country</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">France</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Italy</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Spain</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">US</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Australia</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Argentina</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Germany</ion-button>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Region</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Bordeaux</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Bourgogne</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Napa Valley</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Piemonte</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Rhone Valley</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Toscana</ion-button> \n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Category(Varietal)</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Red</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">White</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Sparkling</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Rose</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Dessert</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Fortified</ion-button>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Grape</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Merlot</ion-button> \n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Pinot Noir</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Cabernet</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Chardonnay</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Syrah</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Tempranillo</ion-button>\n      <ion-button shape=\"round\" fill=\"outline\" size=\"small\">Riesling</ion-button>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Price</div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-range [dualKnobs]=\"true\" [value]=\"{ lower: 40, upper: 60 }\"></ion-range>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Year(Vintage)</div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-range [dualKnobs]=\"true\" [value]=\"{ lower: 40, upper: 60 }\"></ion-range>\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">進入時間</div>\n      </ion-col>\n      <ion-col size=\"12\">\n          <ion-range [dualKnobs]=\"true\" [value]=\"{ lower: 40, upper: 60 }\"></ion-range>\n      </ion-col>\n\n    \n\n      <!--\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Condition</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select placeholder=\"New\" [(ngModel)]=\"condition\">\n            <ion-select-option>New</ion-select-option>\n            <ion-select-option>Used</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      -->\n\n      <!--\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Price</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"price\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Description</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n          <ion-input style=\"height: 120px;\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Collection Type</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"collection_type\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Location</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"location\"></ion-input>\n        </ion-item>\n      </ion-col>\n      -->\n\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"submit()\">Search</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"ht_25\"></div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border fotercls\">\n  <ion-row class=\"footerrow\">\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Home.png\" class=\"fottericon\" (click)=\"home()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <div class=\"rounddiv\">\n        </div>\n        <img src=\"assets/image/search.png\" class=\"fottericon2\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Bell.png\" class=\"fottericon\" (click)=\"notification()\">\n      </div>\n    </ion-col>\n    <ion-col size=\"3\" style=\"position: relative !important;\" class=\"vertical_centr\">\n      <div class=\"underdivnl\">\n        <img src=\"assets/image/Profile.png\" class=\"fottericon\" (click)=\"profile()\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ }),

/***/ "yn99":
/*!*****************************************************!*\
  !*** ./src/app/listitem/listitem-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ListitemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListitemPageRoutingModule", function() { return ListitemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _listitem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listitem.page */ "XhIm");




const routes = [
    {
        path: '',
        component: _listitem_page__WEBPACK_IMPORTED_MODULE_3__["ListitemPage"]
    }
];
let ListitemPageRoutingModule = class ListitemPageRoutingModule {
};
ListitemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListitemPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=listitem-listitem-module.js.map