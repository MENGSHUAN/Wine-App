(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editpost-editpost-module"],{

/***/ "/oGi":
/*!*****************************************************!*\
  !*** ./src/app/editpost/editpost-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EditpostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostPageRoutingModule", function() { return EditpostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _editpost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editpost.page */ "1N52");




const routes = [
    {
        path: '',
        component: _editpost_page__WEBPACK_IMPORTED_MODULE_3__["EditpostPage"]
    }
];
let EditpostPageRoutingModule = class EditpostPageRoutingModule {
};
EditpostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditpostPageRoutingModule);



/***/ }),

/***/ "1N52":
/*!*******************************************!*\
  !*** ./src/app/editpost/editpost.page.ts ***!
  \*******************************************/
/*! exports provided: EditpostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostPage", function() { return EditpostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_editpost_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./editpost.page.html */ "GFXc");
/* harmony import */ var _editpost_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editpost.page.scss */ "9Z4Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "a/9d");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service.service */ "ibrm");











let EditpostPage = class EditpostPage {
    constructor(navctrl, config, alert, service, camera, actionSheetController, filetransfer, router) {
        this.navctrl = navctrl;
        this.config = config;
        this.alert = alert;
        this.service = service;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.filetransfer = filetransfer;
        this.router = router;
    }
    ngOnInit() {
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
    back() {
        this.navctrl.pop();
    }
};
EditpostPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_6__["FileTransfer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditpostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editpost',
        template: _raw_loader_editpost_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editpost_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditpostPage);



/***/ }),

/***/ "9Z4Y":
/*!*********************************************!*\
  !*** ./src/app/editpost/editpost.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addimagediv {\n  border: 1px solid gray;\n  width: 100%;\n  height: 90px;\n  border-radius: 10px;\n  text-align: center;\n}\n\n.addicn {\n  color: #fa001b;\n  font-size: 28px;\n  margin-top: 28px;\n}\n\n.lbldiv {\n  font-size: 16px;\n  color: gray;\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.inputdiv {\n  --background:#f0f0f0;\n  height: 40px;\n  border-radius: 5px;\n  --min-height: 40px;\n}\n\n.arricn {\n  font-size: 15px;\n}\n\nion-select {\n  width: 100%;\n}\n\n.listimg {\n  border: 1px solid gray;\n  width: 100%;\n  height: 88px;\n  border-radius: 10px;\n}\n\n.btndiv {\n  color: #c30000;\n  font-size: 14px;\n  font-weight: bold;\n  width: 100%;\n  border-radius: 5px;\n  --border-radius: 5px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  border: 1px solid #c30000;\n  background: #ffffff;\n  --background: #ffffff;\n  margin: -20px auto 20px;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVkaXRwb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNELGdCQUFBO0FBRUg7O0FBQUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksb0JBQUE7RUFDRCxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlIOztBQUZBO0VBQ0ksZUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFRSiIsImZpbGUiOiJlZGl0cG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkaW1hZ2VkaXZ7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFkZGljbntcclxuICAgIGNvbG9yOiNmYTAwMWI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgIG1hcmdpbi10b3A6MjhweDtcclxufVxyXG4ubGJsZGl2e1xyXG4gICAgZm9udC1zaXplOjE2cHg7IFxyXG4gICAgY29sb3I6Z3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDo4cHg7XHJcbn1cclxuLmlucHV0ZGl2e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNmMGYwZjA7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAtLW1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuLmFycmljbntcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pb24tc2VsZWN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmxpc3RpbWd7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5idG5kaXZ7XHJcbiAgICBjb2xvcjogI2MzMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjMzAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiAtMjBweCBhdXRvIDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufSJdfQ== */");

/***/ }),

/***/ "GFXc":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editpost/editpost.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"1\" style=\"text-align: center;font-size: 23px;\">\n        <!-- <ion-icon name=\"arrow-back-outline\"></ion-icon> -->\n      </ion-col>\n      <ion-col size=\"11\">\n        <div>List Your Item</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('1')\">\n          <img *ngIf=\"Myimage || Myimage2 || Myimage3\" src=\"{{config.url}}{{Myimage}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('2')\">\n          <img *ngIf=\"Myimage2\" src=\"{{config.url}}{{Myimage2}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage2\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"addimagediv\" (click)=\"opengallery('3')\">\n          <img *ngIf=\"Myimage3\" src=\"{{config.url}}{{Myimage3}}\" class=\"listimg\">\n          <ion-icon *ngIf=\"!Myimage3\" name=\"add-circle\" class=\"addicn\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_10\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Category</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select [(ngModel)]=\"category\">\n            <ion-select-option *ngFor=\"let cat of allcategory\" value=\"{{cat.id}}\">{{cat.name}}</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Title</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"title\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Condition</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-select placeholder=\"New\" [(ngModel)]=\"condition\">\n            <ion-select-option>New</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Price</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"price\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Description</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n          <ion-input style=\"height: 120px;\" [(ngModel)]=\"description\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Collection Type</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"collection_type\"></ion-input>\n          <ion-icon slot=\"end\" name=\"chevron-down-outline\" class=\"arricn\"></ion-icon>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Location</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-item class=\"inputdiv\" lines=\"none\">\n          <ion-input [(ngModel)]=\"location\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"submit()\">Submit</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btndiv\" (click)=\"delete()\">Remove Listing</ion-button>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btndiv\" (click)=\"sold()\">Mark As Sold</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"ht_25\"></div>\n</ion-content>\n");

/***/ }),

/***/ "soZw":
/*!*********************************************!*\
  !*** ./src/app/editpost/editpost.module.ts ***!
  \*********************************************/
/*! exports provided: EditpostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostPageModule", function() { return EditpostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _editpost_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editpost-routing.module */ "/oGi");
/* harmony import */ var _editpost_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editpost.page */ "1N52");







let EditpostPageModule = class EditpostPageModule {
};
EditpostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _editpost_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditpostPageRoutingModule"]
        ],
        declarations: [_editpost_page__WEBPACK_IMPORTED_MODULE_6__["EditpostPage"]]
    })
], EditpostPageModule);



/***/ })

}]);
//# sourceMappingURL=editpost-editpost-module.js.map