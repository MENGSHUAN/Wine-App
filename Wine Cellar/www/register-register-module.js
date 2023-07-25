(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "2t07":
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "b0Bx");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_20\"></div>\n   <ion-row>\n     <ion-col size=\"2\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n     </ion-col>\n     <ion-col size=\"10\">\n       <div>Registration</div>\n     </ion-col>\n   </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ht_20\"></div>\n  <div class=\"vertical-align-top-content\">\n    <div *ngIf=\"!gettype\" class=\"lbldiv\">Are you an individual or company?</div>\n    <div *ngIf=\"!gettype\" class=\"radiodiv\">\n      <ion-radio-group (ionChange)=\"selecttype($event)\">\n        <ion-item lines=\"none\" style=\"--background:white;color:black; --padding-start:0px;\">\n          <ion-radio value=\"individual\"></ion-radio>\n          <div class=\"userdiv\">Individual</div>\n\n          <ion-radio slot=\"end\" value=\"company\"></ion-radio>\n          <div slot=\"end\" class=\"vendordiv\">Company</div>\n        </ion-item>\n      </ion-radio-group>\n    </div>\n    <ion-row *ngIf=\"!gettype\">\n      <ion-col size=\"12\">\n        <div class=\"profilediv\" (click)=\"opengallery()\">\n          <img *ngIf=\"!Myimage\" src=\"assets/image/profilepic.png\" class=\"profileimg\">\n          <img *ngIf=\"Myimage\" src=\"{{config.url}}{{Myimage}}\" class=\"profileimg\">\n        </div>\n        <div class=\"profileTxt\">Profile image</div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Username</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g.John\" [(ngModel)]=\"uname\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Email</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g.John@gmail.com\" [(ngModel)]=\"email\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Mobile Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. 0912-312-340\" [(ngModel)]=\"mobile\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input [type]=\"passwordType\" [(ngModel)]=\"pwd\"></ion-input>\n         <ion-icon item-end [name]=\"passwordIcon\" (click)='hideShowPassword()' style=\"color:gray;\"></ion-icon>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Confirm Password</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n        <ion-input [type]=\"passwordType1\" [(ngModel)]=\"repwd\"></ion-input>\n        <ion-icon item-end [name]=\"passwordIcon1\" (click)='hideShowPassword1()' style=\"color:gray;\"></ion-icon>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <!-- 0723 -->\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Cellar Size</div>\n      </ion-col>\n      <div style=\"width: 40%;\">\n        <ion-col size=\"12\">\n          <div class=\"lbldiv\" style=\"font-size: 10px;\">Column</div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item class=\"inputdiv\" lines=\"none\">\n            <ion-input placeholder=\"Column\" [(ngModel)]=\"uname\"></ion-input>\n          </ion-item>\n         </ion-col>\n      </div>\n      <div style=\"width: 10%;\"></div>\n      <div style=\"width: 40%;\">\n        <ion-col size=\"12\">\n          <div class=\"lbldiv\" style=\"font-size: 10px;\">Row</div>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item class=\"inputdiv\" lines=\"none\">\n            <ion-input placeholder=\"Row\" [(ngModel)]=\"uname\"></ion-input>\n          </ion-item>\n         </ion-col>\n      </div>\n      <!-- 0723 -->\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Bio (Optional)</div>\n      </ion-col>\n      <!-- <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n         <ion-textarea placeholder=\"Add a short description here\"  [(ngModel)]=\"bio\" style=\"height: 120px;\"></ion-textarea>\n       </ion-item>\n      </ion-col> -->\n      <ion-col size=\"12\" style=\"position: relative !important;\">\n        <ion-item class=\"inputdiv\" lines=\"none\" style=\"height: 120px;\">\n          <ion-textarea style=\"height: 120px;\" [rows]=\"4\" maxlength=\"180\" placeholder=\"Add a short description here\" [(ngModel)]=\"bio\" (ionChange)=\"contrlenth()\"></ion-textarea>\n        </ion-item>\n        <div class=\"ionotherdiv\">{{otherinfolenth}}/180</div>\n       </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"register()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"gettype\">\n      <ion-col size=\"12\">\n        <div class=\"ht_5\"></div>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Name</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. Erzat Motor Pvt. Ltd.\" [(ngModel)]=\"c_name\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Registration Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. T2022123\" [(ngModel)]=\"reg_no\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Address</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input [(ngModel)]=\"c_address\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <div class=\"lbldiv\">Company Contact Number</div>\n      </ion-col>\n      <ion-col size=\"12\">\n       <ion-item class=\"inputdiv\" lines=\"none\">\n         <ion-input placeholder=\"E.g. 91231234\" [(ngModel)]=\"c_contact\"></ion-input>\n       </ion-item>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-button class=\"btnclass\" (click)=\"registercompany()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service.service */ "ibrm");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "B7Rs");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "a/9d");











let RegisterPage = class RegisterPage {
    constructor(navctrl, modalctrl, service, alert, config, camera, actionSheetController, filetransfer, router) {
        this.navctrl = navctrl;
        this.modalctrl = modalctrl;
        this.service = service;
        this.alert = alert;
        this.config = config;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.filetransfer = filetransfer;
        this.router = router;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off-outline';
        this.passwordType1 = 'password';
        this.passwordIcon1 = 'eye-off-outline';
        this.usertype = 'individual';
        this.gettype = this.router.snapshot.params.type;
        console.log(this.gettype);
        this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"));
        console.log(this.userdata);
        this.otherinfolenth = 0;
    }
    ngOnInit() {
    }
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    hideShowPassword1() {
        this.passwordType1 = this.passwordType1 === 'text' ? 'password' : 'text';
        this.passwordIcon1 = this.passwordIcon1 === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
    }
    selecttype(ev) {
        console.log(ev);
        this.usertype = ev.detail.value;
        if (this.usertype == 'individual') {
            this.type = '1';
        }
        else {
            this.type = '2';
        }
    }
    validateuser() {
        if (!this.usertype) {
            this.alert.showAlert('Error!', "Please Select Type", '');
            return false;
        }
        if (!this.uname) {
            this.alert.showAlert('Error!', "Please Enter User Name", '');
            return false;
        }
        if (!this.mobile) {
            this.alert.showAlert('Error!', "Please Enter Mobile Number", '');
            return false;
        }
        if (!this.pwd) {
            this.alert.showAlert('Error!', "Please Enter Password", '');
            return false;
        }
        if (!this.repwd) {
            this.alert.showAlert('Error!', "Please Enter Confirm Password", '');
            return false;
        }
        if (this.pwd != this.repwd) {
            this.alert.showAlert('Error!', "Please Enter Valid Confirm Password", '');
            return false;
        }
        if (!this.email) {
            this.alert.showAlert('Error!', "Please Enter Email", '');
            return false;
        }
        // if(!this.uname){
        //   this.alert.showAlert('Error!',"Please Enter Uesrname",'')
        //   return false;
        // }
        return true;
    }
    register() {
        if (this.validateuser()) {
            this.navctrl.navigateForward('/verify');
        }
    }
    validate_company() {
        if (!this.c_name) {
            this.alert.showAlert("Error!", "Please Enter Company Name", '');
            return false;
        }
        if (!this.c_address) {
            this.alert.showAlert("Error!", "Please Enter Company Address", '');
            return false;
        }
        if (!this.reg_no) {
            this.alert.showAlert("Error!", "Please Enter Company ", 'Registration Number');
            return false;
        }
        if (!this.c_contact) {
            this.alert.showAlert("Error!", "Please Enter Company Contact", '');
            return false;
        }
        return true;
    }
    back() {
        this.navctrl.pop();
    }
    opengallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Gallery',
                        icon: 'image-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Camera',
                        icon: 'camera-outline',
                        handler: () => {
                            this.pickImage(this.camera.PictureSourceType.CAMERA);
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    pickImage(sourceType) {
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
            this.alert.showLoader();
            //this.upload(base64Image);
        }, (err) => {
            console.log(err);
        });
    }
    upload(image) {
        var d = new Date();
        var n = d.getTime();
        let options = {
            fileKey: "image",
            fileName: "image_" + n.toString() + ".png",
            chunkedMode: false,
            mimeType: "image/png"
        };
        console.log(options);
        const fileTransfer = this.filetransfer.create();
        fileTransfer.upload(image, this.config.url + 'imageupload.php', options)
            .then((data) => {
            this.alert.dissmissLoader();
            console.log("data:", data.response);
            var imgdata = JSON.parse(data.response);
            console.log(imgdata);
            if (imgdata.ResponseCode == 1) {
                console.log(imgdata.image_url);
                this.userpic = imgdata.image_url;
                this.Myimage = this.userpic;
                console.log(this.Myimage);
                this.alert.showToast('Profile Photo Uploaded');
            }
        });
    }
    contrlenth() {
        this.otherinfolenth = this.bio.length;
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_8__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_10__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_9__["FileTransfer"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".radiodiv {\n  margin: auto;\n  width: 100%;\n}\n\nion-radio {\n  --color: gray;\n  --color-checked: #c30000;\n  --border: 1px solid gray;\n}\n\n.userdiv {\n  padding: 0px 5px;\n}\n\n.vendordiv {\n  margin-left: 0px;\n  padding: 0px 5px;\n}\n\n.profilediv {\n  width: 80px;\n  height: 80px;\n  margin: auto;\n  display: table;\n  border-radius: 50%;\n  border: 3px solid #f0f0f0;\n  padding: 4px;\n}\n\n.profileimg {\n  border-radius: 25%;\n  margin: auto;\n  display: table;\n  margin-top: 5%;\n}\n\n.profileTxt {\n  margin: auto;\n  display: table;\n}\n\n.ionotherdiv {\n  position: absolute;\n  bottom: 6px;\n  right: 12px;\n  z-index: 111;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx3QkFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUlOOztBQUZDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQztFQUNFLFlBQUE7RUFDQSxjQUFBO0FBTUg7O0FBSkM7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFPRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmFkaW9kaXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIGlvbi1yYWRpbyB7XHJcbiAgICAtLWNvbG9yOiBncmF5O1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjYzMwMDAwO1xyXG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIH1cclxuICBcclxuICAudXNlcmRpdiB7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIH1cclxuICAudmVuZG9yZGl2IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIH1cclxuICAucHJvZmlsZWRpdntcclxuICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICBtYXJnaW46YXV0bztcclxuICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YwZjBmMDtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxuIC5wcm9maWxlaW1ne1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiB9XHJcbiAucHJvZmlsZVR4dHtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBkaXNwbGF5OiB0YWJsZTtcclxuIH1cclxuIC5pb25vdGhlcmRpdntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA2cHg7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgei1pbmRleDogMTExO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufSJdfQ== */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "2t07");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map