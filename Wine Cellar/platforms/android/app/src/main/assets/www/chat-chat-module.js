(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "2yxt":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "cC0O");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "laW7");







let ChatPageModule = class ChatPageModule {
};
ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
        ],
        declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
    })
], ChatPageModule);



/***/ }),

/***/ "SyIY":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".productimg {\n  border: 1px solid #c6c6c6;\n  border-radius: 8px;\n  height: 65px;\n}\n\n.productname {\n  font-weight: bold;\n  color: black;\n  font-size: 14px;\n}\n\n.pricetxt {\n  font-size: 13px;\n  color: #c1c1c1;\n}\n\n.cameraicn {\n  color: #007be2;\n  font-size: 30px;\n  margin-top: 5px;\n}\n\n.mediv {\n  float: right;\n  width: 80%;\n  margin-bottom: 10px;\n}\n\n.youdiv {\n  float: left;\n  width: 80%;\n  margin-bottom: 10px;\n}\n\n.profileimg {\n  width: 40px;\n  height: 40px;\n  margin: auto;\n}\n\n.msgdiv {\n  width: 100%;\n  color: black;\n  background-color: #f0f0f0;\n  border-radius: 8px;\n  padding: 12px;\n  text-align: left;\n  font-weight: 400;\n  font-size: 14px;\n}\n\n.btndiv {\n  color: #ffffff;\n  font-size: 16px;\n  width: 80%;\n  border-radius: 5px;\n  --border-radius: 5px;\n  box-shadow: none !important;\n  --box-shadow: none !important;\n  margin: 0px;\n  background: #007be2;\n  --background: #007be2;\n  text-transform: none;\n}\n\n.statustxt {\n  color: #007be2;\n  font-weight: bold;\n  margin: 5px 0px;\n}\n\n.btn {\n  --background: green;\n  --border-radius: 22px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n\n.cancelbtn {\n  --background: #007be2;\n  --border-radius: 0px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n\n.btn1 {\n  --background:green;\n  --border-radius: 0px;\n  text-transform: none;\n  --box-shadow: none;\n  color: rgba(255, 255, 255, 0.836);\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNoYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBT0o7O0FBTEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFOQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFQQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUkE7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7QUFZSiIsImZpbGUiOiJjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0aW1ne1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCByZ2IoMTk4LCAxOTgsIDE5OCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbn1cclxuLnByb2R1Y3RuYW1le1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnByaWNldHh0e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6cmdiKDE5MywgMTkzLCAxOTMpO1xyXG59XHJcbi5jYW1lcmFpY257XHJcbiAgICBjb2xvcjojMDA3YmUyO1xyXG4gICAgZm9udC1zaXplOjMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxufVxyXG4ubWVkaXZ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ueW91ZGl2e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ucHJvZmlsZWltZ3tcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbn1cclxuLm1zZ2RpdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzoxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLmJ0bmRpdntcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZTI7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDdiZTI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxufVxyXG4uc3RhdHVzdHh0e1xyXG4gICAgY29sb3I6IzAwN2JlMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiA1cHggMHB4O1xyXG59XHJcbi5idG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYW5jZWxidG4ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA3YmUyO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM2KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYnRuMSB7XHJcbiAgICAtLWJhY2tncm91bmQ6Z3JlZW47XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzYpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59Il19 */");

/***/ }),

/***/ "cC0O":
/*!*********************************************!*\
  !*** ./src/app/chat/chat-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "laW7");




const routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
let ChatPageRoutingModule = class ChatPageRoutingModule {
};
ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChatPageRoutingModule);



/***/ }),

/***/ "laW7":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: snapshotToArray, ConversationToArray, ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapshotToArray", function() { return snapshotToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationToArray", function() { return ConversationToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chat.page.html */ "n54z");
/* harmony import */ var _chat_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.page.scss */ "SyIY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "YdJ5");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config.service */ "wxHw");
/* harmony import */ var _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../makeoffer/makeoffer.page */ "AQDV");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../service.service */ "ibrm");











const snapshotToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
    return returnArr;
};
const ConversationToArray = snapshot => {
    let returnArr = [];
    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        returnArr.push(item);
    });
    return returnArr;
};
let ChatPage = class ChatPage {
    constructor(navctrl, config, service, alert, router, modalctrl) {
        this.navctrl = navctrl;
        this.config = config;
        this.service = service;
        this.alert = alert;
        this.router = router;
        this.modalctrl = modalctrl;
        this.offStatus = false;
        this.Chat_Data = { nickname: '', message: '', id: '' };
    }
    ngOnInit() {
        this.userName = 'K29solutions';
        this.Chat_Data.nickname = (this.userName);
    }
    back() {
        this.navctrl.pop();
    }
    makeoffer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.UserChat) {
                console.log('open');
                for (var i = 0; i < this.UserChat.length; i++) {
                    const found = this.UserChat.some(el => el.status == '0' && el.list_id == this.product_id);
                    console.log(found);
                    if (found == true) {
                        this.alert.showAlert("", 'cancel previous offer before making new offer', "");
                        break;
                    }
                    else {
                        console.log('entrer open modal');
                        const modal = yield this.modalctrl.create({
                            component: _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_9__["MakeofferPage"],
                            cssClass: "backmodal",
                            componentProps: { 'name': this.productname, 'price': this.productprice, 'user_id': this.UserId, 'list_id': this.product_id }
                        });
                        modal.onDidDismiss().then((data) => {
                            console.log(data);
                            this.offerdata = data.data;
                            // this.date = data.data.date
                            this.Chat_Data.message = this.productname;
                            this.text = "Offer";
                        });
                        modal.present();
                        break;
                    }
                }
            }
            else {
                console.log('open modal');
                const modal = yield this.modalctrl.create({
                    component: _makeoffer_makeoffer_page__WEBPACK_IMPORTED_MODULE_9__["MakeofferPage"],
                    cssClass: "backmodal",
                    componentProps: { 'name': this.productname, 'price': this.productprice, 'user_id': this.UserId, 'list_id': this.product_id }
                });
                modal.onDidDismiss().then((data) => {
                    console.log(data);
                    this.offerdata = data.data;
                    // this.date = data.data.date
                    this.Chat_Data.message = this.productname;
                    this.text = "Offer";
                    this.Conversa(this.text);
                });
                modal.present();
            }
        });
    }
    getConver() {
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Conversation/' + this.UserId + '_' + this.ServiceID);
        starCountRef.on('value', Conver => {
            console.log(Conver.val());
            if (Conver.val() != null) {
                this.ConversationID = ConversationToArray(Conver);
                console.log(this.ConversationID);
                this.CheckLoop();
            }
            else {
                this.getotherConver();
            }
        });
    }
    getotherConver() {
        var starCountRef = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Conversation/' + this.ServiceID + '_' + this.UserId);
        starCountRef.on('value', Conver => {
            console.log(Conver.val());
            if (Conver.val() != null) {
                this.ConversationID = ConversationToArray(Conver);
                console.log(this.ConversationID);
                this.CheckLoop();
            }
            else {
                // this.getConver()
            }
        });
    }
    CheckLoop() {
        this.ChatCreateID = '';
        this.chatIDCheck = '';
        var MyUserID = this.UserId;
        var NewUesrID = this.ServiceID;
        this.ChatCreateID = MyUserID + '_' + NewUesrID;
        this.chatIDCheck = NewUesrID + '_' + MyUserID;
        console.log('1 =>', this.ChatCreateID);
        console.log('2 =>', this.chatIDCheck);
        // if (this.ChatCreateID == this.chatIDCheck) {
        //   // this.ServiceID = this.User_con_ID
        //   this.CheckLoop()
        // } else {
        console.log(this.ConversationID);
        for (var i = 0; i < this.ConversationID.length; i++) {
            console.log(this.ConversationID[i].ConverID);
            if (this.ConversationID[i].ConverID == this.ChatCreateID) {
                console.log(this.ChatCreateID + ">> is available 1");
                var N_E_W = this.ChatCreateID;
                this.ChatsID = '';
                this.GetOldChat(N_E_W);
                break;
            }
            else if (this.ConversationID[i].ConverID == this.chatIDCheck) {
                console.log(this.chatIDCheck + ">> is available 2");
                var T_H_I_S = this.chatIDCheck;
                this.ChatsID = '';
                this.GetOldChat(T_H_I_S);
                break;
            }
            else {
                if (i == this.ConversationID.length - 1) {
                    console.log(" no conversation match, create new");
                }
            }
        }
        // }
    }
    GetOldChat(Chat_i) {
        console.log('Old =>', Chat_i);
        this.OldChatId = Chat_i;
        firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Chats/' + Chat_i + '/chat').on('value', resp => {
            this.UserChat = [];
            this.UserChat = snapshotToArray(resp);
            console.log(this.UserChat);
            setTimeout(() => {
                if (this.offStatus === false) {
                    this.content.scrollToBottom(300);
                }
            }, 1000);
        });
    }
    msgvalidate() {
        if (!this.Chat_Data.message) {
            this.alert.showAlert("Error", "please Enter Message", "");
            return false;
        }
        return true;
    }
    Conversa(type) {
        if (this.msgvalidate()) {
            console.log(this.OldChatId);
            console.log(this.ConversationID);
            // if (this.ConversationID) {
            //   for (var i = 0; i < this.ConversationID.length; i++) {
            //     if (this.OldChatId == this.ConversationID[i].ConverID) {
            //       this.showstatus = this.ConversationID[i].usrstatus
            //       this.block_user = this.ConversationID[i].block_user
            //       this.chat_user = this.ConversationID[i].chat_user
            //       this.send_user = this.ConversationID[i].UsrID
            //       this.receive_user = this.ConversationID[i].ServicesID
            //       this.sender_counter = this.ConversationID[i].sender_counter
            //       this.receiver_counter = this.ConversationID[i].receiver_counter
            //       var otherprofile = this.ConversationID[i].ServiceProfile
            //       var profile = this.ConversationID[i].Usrprofile
            //     }
            //   }
            // }
            console.log(this.OldChatId);
            if (this.OldChatId) {
                this.ChatData(type);
                const found = this.ConversationID.some(el => el.ProductID === this.product_id);
                if (!found) {
                    console.log('push');
                    var MyUserID = this.UserId;
                    var NewUesrID = this.ServiceID;
                    this.ChatCreateID = MyUserID + '_' + NewUesrID;
                    this.chatIDCheck = NewUesrID + '_' + MyUserID;
                    console.log('3 =>', this.ChatCreateID);
                    console.log('3 =>', this.chatIDCheck);
                    if (this.OldChatId == this.ChatCreateID) {
                        firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Conversation/' + this.ChatCreateID + '/' + this.product_id).set({
                            ConverID: this.ChatCreateID,
                            ServicesID: this.ServiceID,
                            ServicesName: this.SeviceName,
                            UsrID: this.UserId,
                            UsrName: this.userName,
                            Usrprofile: this.Userprofile,
                            ServiceProfile: this.ServiceProfile,
                            ProductID: this.product_id,
                            ProductImage: this.productimage,
                            ProductName: this.productname,
                            ProductPrice: this.productprice,
                            lastmsg: this.Chat_Data.message,
                            sender_counter: 0,
                            receiver_counter: 0,
                            chat_user: this.ServiceID,
                            block_user: '',
                            ServicesDate: Date()
                        });
                    }
                    if (this.OldChatId == this.chatIDCheck) {
                        firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Conversation/' + this.chatIDCheck + '/' + this.product_id).set({
                            ConverID: this.chatIDCheck,
                            ServicesID: this.ServiceID,
                            ServicesName: this.SeviceName,
                            UsrID: this.UserId,
                            UsrName: this.userName,
                            Usrprofile: this.Userprofile,
                            ServiceProfile: this.ServiceProfile,
                            ProductID: this.product_id,
                            ProductImage: this.productimage,
                            ProductName: this.productname,
                            ProductPrice: this.productprice,
                            lastmsg: this.Chat_Data.message,
                            sender_counter: 0,
                            receiver_counter: 0,
                            chat_user: this.ServiceID,
                            block_user: '',
                            ServicesDate: Date()
                        });
                    }
                }
                else {
                    console.log('dont push');
                }
            }
            else {
                var MyUserID = this.UserId;
                var NewUesrID = this.ServiceID;
                this.ConversID = MyUserID + '_' + NewUesrID;
                console.log('3 =>', this.ConversID);
                console.log('3 =>', this.SeviceName);
                firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Conversation/' + this.ConversID + '/' + this.product_id).set({
                    ConverID: this.ConversID,
                    ServicesID: this.ServiceID,
                    ServicesName: this.SeviceName,
                    UsrID: this.UserId,
                    UsrName: this.userName,
                    Usrprofile: this.Userprofile,
                    ServiceProfile: this.ServiceProfile,
                    ProductID: this.product_id,
                    ProductImage: this.productimage,
                    ProductName: this.productname,
                    ProductPrice: this.productprice,
                    lastmsg: this.Chat_Data.message,
                    sender_counter: 0,
                    receiver_counter: 0,
                    chat_user: this.ServiceID,
                    block_user: '',
                    ServicesDate: Date()
                });
                this.ChatsID = '';
                this.ChatData(type);
            }
            // }
        }
    }
    ChatData(type) {
        if (this.OldChatId) {
            this.ChatsID = this.OldChatId;
            console.log('Old =>', this.ChatsID);
        }
        else if (this.ConversID) {
            this.ChatsID = this.ConversID;
            console.log('3 =>', this.ChatsID);
        }
        console.log(this.ChatsID);
        let newData = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('Chats/' + this.ChatsID + '/chat').push();
        // console.log('offerdata =>', this.offerdata)
        console.log('message =>', this.Chat_Data.message);
        console.log('type =>', type);
        if (type == 'Offer') {
            if (this.offerdata) {
                newData.set({
                    user: this.Chat_Data.nickname,
                    message: this.Chat_Data.message,
                    id: this.Chat_Data.id,
                    type: type,
                    list_id: this.product_id,
                    offer: this.offerdata,
                    status: '0',
                    sendDate: Date()
                });
                // if (this.UserId != this.receive_user) {
                //   this.receiver_counter = this.receiver_counter + 1
                // } else {
                //   this.sender_counter = this.sender_counter + 1
                // }
                // firebase.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: this.Chat_Data.message, ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
                if (type != 'Offer') {
                    this.sendnotification();
                }
                this.Chat_Data.message = '';
            }
        }
        else {
            newData.set({
                user: this.Chat_Data.nickname,
                message: this.Chat_Data.message,
                id: this.Chat_Data.id,
                list_id: this.product_id,
                type: type,
                sendDate: Date()
            });
            // if (this.UserId != this.receive_user) {
            //   this.receiver_counter = this.receiver_counter + 1
            // } else {
            //   this.sender_counter = this.sender_counter + 1
            // }
            // if (type == '2') {
            //   firebase.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: 'photo', ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
            // } else {
            //   firebase.database().ref('Conversation/' + this.OldChatId + '/' + this.product_id).update({ lastmsg: this.Chat_Data.message, ServicesDate: date, sender_counter: this.sender_counter, receiver_counter: this.receiver_counter });
            // }
            if (type != 'Offer') {
                this.sendnotification();
            }
            this.Chat_Data.message = '';
        }
    }
    sendnotification() {
        var params = {
            user_id: this.ServiceID,
            // sender_id: this.UserId,
            // list_id: this.product_id,
            title: this.userName,
            message: this.Chat_Data.message
        };
        console.log(params);
        this.service.SendNotification(params)
            .then((results) => this.handleNotification(results));
    }
    handleNotification(results) {
        console.log(results);
    }
    action(action, id, key) {
        this.alert.showLoader();
        console.log(key);
        var params = {
            offer_id: id,
            status: action
        };
        console.log(params);
        this.service.Offerstatus(params)
            .then((results) => this.handleAction(action, results, key));
    }
    handleAction(action, results, key) {
        console.log(results);
        this.alert.dissmissLoader();
        console.log(this.ChatsID);
        if (results.ResponseCode == 1) {
            if (this.OldChatId) {
                this.ChatsID = this.OldChatId;
                console.log('Old =>', this.ChatsID);
            }
            else if (this.ConversID) {
                this.ChatsID = this.ConversID;
                console.log('3 =>', this.ChatsID);
            }
            if (this.Chat_Data.id === this.UserId && action == '3') {
                this.alert.showToast("you have cancelled the offer");
            }
            let newData = firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('/Chats/' + this.ChatsID + '/chat' + '/' + key).update({ status: action });
            console.log(newData);
        }
    }
};
ChatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] },
    { type: _service_service__WEBPACK_IMPORTED_MODULE_10__["ServiceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
ChatPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"],] }]
};
ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chat',
        template: _raw_loader_chat_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChatPage);



/***/ }),

/***/ "n54z":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"ht_40\"></div>\n    <ion-row>\n      <ion-col size=\"1\" style=\"text-align: center;font-size: 23px;\" (click)=\"back()\">\n        <ion-icon name=\"arrow-back-outline\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-avatar style=\"width: 40px;height: 40px;margin-top:-10px;\">\n          <img  src=\"assets/image/profilepic.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div>BMW</div>\n      </ion-col>\n    </ion-row>\n    <div class=\"ht_20\"></div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"vertical-align-top-content\">\n    <div class=\"ht_20\"></div>\n    <ion-row>\n      <ion-col size=\"3\">\n        <div class=\"productimg\">\n          <img src=\"assets/image/helmet.jpg\" style=\"border-radius: 8px;height: 65px;width:100%;\">\n        </div>\n      </ion-col>\n      <ion-col size=\"9\">\n        <div class=\"ht_10\"></div>\n        <div class=\"productname\">Helmet</div>\n        <ion-row>\n          <ion-col>\n            <div class=\"ht_5\"></div>\n            <div class=\"pricetxt\">$180</div>\n          </ion-col>\n          <ion-col>\n            <ion-button class=\"btndiv\" (click)=\"makeoffer()\">Make Offer</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <div style=\"border-bottom: 1px solid rgb(198, 198, 198);height: 10px;\"></div>\n    <div class=\"ht_10\"></div>\n    <div >\n      <div  class=\"youdiv\">\n        <ion-row>\n          <ion-col size=\"9.5\">\n            \n            <div class=\"msgdiv\">\n              <div><b>Made An Offer</b></div>\n              <div>Chat message </div>\n              <div>Price : <b>$100</b></div>\n              <div >\n                <ion-row>\n                  <ion-col class=\"ion-no-padding\">\n                    <ion-button class=\"btndiv\" \n                      (click)=\"action()\">Accept</ion-button>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding\">\n                    <ion-button class=\"btndiv\" \n                      (click)=\"action()\">Reject</ion-button>\n                  </ion-col>\n                  <ion-col class=\"ion-no-padding\">\n                  </ion-col>\n                </ion-row>\n              </div>\n            </div>\n          </ion-col>\n          <ion-col size=\"2.5\">\n            <ion-avatar class=\"profileimg\">\n              <img src=\"assets/image/profilepic.png\">\n            </ion-avatar>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div  class=\"mediv\">\n        <ion-row>\n          <ion-col size=\"2.5\">\n            <ion-avatar class=\"profileimg\">\n              <img src=\"assets/image/profilepic.png\">\n            </ion-avatar>\n          </ion-col>\n          <ion-col size=\"9.5\">\n            <div class=\"msgdiv\">Chat message</div>\n            \n            <div class=\"msgdiv\">\n              <div><b>Made An Offer</b></div>\n              <div>Chat.message</div>\n              <div>Price : <b>$8555</b></div>\n              <div class=\"statustxt\">Pending</div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-row class=\"row_90\">\n    <ion-col size=\"10\">\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-input class=\"inputdiv\" placeholder=\"Type Here...\" [(ngModel)]=\"Chat_Data.message\"></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-icon name=\"navigate-outline\" class=\"cameraicn\" ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n    <ion-col size=\"2\">\n      <ion-icon name=\"camera-outline\" class=\"cameraicn\"></ion-icon>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map