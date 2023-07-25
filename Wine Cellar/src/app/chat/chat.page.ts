import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import firebase from 'firebase';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { MakeofferPage } from '../makeoffer/makeoffer.page';
import { ServiceService } from '../service.service';

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};
export const ConversationToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    returnArr.push(item);
  });
  return returnArr;
};

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  offStatus: boolean = false;

  SigninData: any;
  UserId: any;
  userName: any;
  Chat_Data = { nickname: '', message: '', id: '' }
  UserChat: any;
  Userprofile: any;
  ServiceID: any;
  SeviceName: any;
  ServiceProfile: any;
  ConversationID: any;
  ChatCreateID: string;
  chatIDCheck: string;
  ConversID: string;
  ChatsID: string;
  OldChatId: any;
  productdetail: any;
  productimage: any;
  productname: any;
  productprice:any;
  product_id: any;
  offerdata: any;
  text: string;

  constructor(public navctrl: NavController,
    private config: ConfigService,
    private service: ServiceService,
    private alert:AlertService,
    public router: ActivatedRoute,
    public modalctrl:ModalController) {
  }

  ngOnInit() {

    this.userName = 'K29solutions'
    this.Chat_Data.nickname = (this.userName) as string;
  }

  back() {
    this.navctrl.pop()
  }

  async makeoffer(){
    if (this.UserChat) {
      console.log('open')
      for (var i = 0; i < this.UserChat.length; i++) {
        const found = this.UserChat.some(el => el.status == '0' && el.list_id == this.product_id);
        console.log(found)
        if (found == true) {
          this.alert.showAlert("", 'cancel previous offer before making new offer',"")
          break
        } else {
          console.log('entrer open modal')
          const modal = await this.modalctrl.create({
            component: MakeofferPage,
            cssClass: "backmodal",
            componentProps: { 'name': this.productname, 'price': this.productprice, 'user_id': this.UserId, 'list_id': this.product_id }
          })
          modal.onDidDismiss().then((data) => {
            console.log(data)
            this.offerdata = data.data
            // this.date = data.data.date
            this.Chat_Data.message = this.productname
            this.text = "Offer"
            
          })
          modal.present()
          break
        }
      }
    } else {
      console.log('open modal')
      const modal = await this.modalctrl.create({
        component: MakeofferPage,
        cssClass: "backmodal",
        componentProps: { 'name': this.productname, 'price': this.productprice, 'user_id': this.UserId, 'list_id': this.product_id }
      })
      modal.onDidDismiss().then((data) => {
        console.log(data)
        this.offerdata = data.data
        // this.date = data.data.date
        this.Chat_Data.message = this.productname
        this.text = "Offer"
        this.Conversa(this.text)
      })
      modal.present()
    }
   
  }

  getConver() {
    var starCountRef = firebase.database().ref('Conversation/' + this.UserId + '_' + this.ServiceID);
    starCountRef.on('value', Conver => {
      console.log(Conver.val())
      if (Conver.val() != null) {
        this.ConversationID = ConversationToArray(Conver);
        console.log(this.ConversationID)
        this.CheckLoop()
      } else {
        this.getotherConver()
      }
    })
  }

  getotherConver() {
    var starCountRef = firebase.database().ref('Conversation/' + this.ServiceID + '_' + this.UserId);
    starCountRef.on('value', Conver => {
      console.log(Conver.val())
      if (Conver.val() != null) {
        this.ConversationID = ConversationToArray(Conver);
        console.log(this.ConversationID)
        this.CheckLoop()
      } else {
        // this.getConver()
      }
    })
  }

  CheckLoop() {
    this.ChatCreateID = ''
    this.chatIDCheck = ''
    var MyUserID = this.UserId
    var NewUesrID = this.ServiceID
    this.ChatCreateID = MyUserID + '_' + NewUesrID
    this.chatIDCheck = NewUesrID + '_' + MyUserID
    console.log('1 =>', this.ChatCreateID)
    console.log('2 =>', this.chatIDCheck)

    // if (this.ChatCreateID == this.chatIDCheck) {
    //   // this.ServiceID = this.User_con_ID
    //   this.CheckLoop()
    // } else {
    console.log(this.ConversationID)
    for (var i = 0; i < this.ConversationID.length; i++) {
      console.log(this.ConversationID[i].ConverID)
      if (this.ConversationID[i].ConverID == this.ChatCreateID) {
        console.log(this.ChatCreateID + ">> is available 1")
        var N_E_W = this.ChatCreateID
        this.ChatsID = ''
        this.GetOldChat(N_E_W)
        break;
      } else if (this.ConversationID[i].ConverID == this.chatIDCheck) {
        console.log(this.chatIDCheck + ">> is available 2")
        var T_H_I_S = this.chatIDCheck
        this.ChatsID = ''
        this.GetOldChat(T_H_I_S)
        break;
      } else {
        if (i == this.ConversationID.length - 1) {
          console.log(" no conversation match, create new")
        }
      }
    }
    // }
  }

  GetOldChat(Chat_i) {
    console.log('Old =>', Chat_i)
    this.OldChatId = Chat_i

    firebase.database().ref('Chats/' + Chat_i + '/chat').on('value', resp => {
      this.UserChat = [];
      this.UserChat = snapshotToArray(resp);
      console.log(this.UserChat)
      setTimeout(() => {
        if (this.offStatus === false) {
          this.content.scrollToBottom(300);
        }
      }, 1000);
    });
  }

  msgvalidate() {
    if (!this.Chat_Data.message) {
      this.alert.showAlert("Error", "please Enter Message","")
      return false
    }
    return true
  }

  Conversa(type) {
    if (this.msgvalidate()) {
      console.log(this.OldChatId)
      console.log(this.ConversationID)
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
      console.log(this.OldChatId)
      if (this.OldChatId) {
        this.ChatData(type)
        const found = this.ConversationID.some(el => el.ProductID === this.product_id);
        if (!found) {
          console.log('push')
          var MyUserID = this.UserId
          var NewUesrID = this.ServiceID
          this.ChatCreateID = MyUserID + '_' + NewUesrID
          this.chatIDCheck = NewUesrID + '_' + MyUserID

          console.log('3 =>', this.ChatCreateID)
          console.log('3 =>', this.chatIDCheck)
          if (this.OldChatId == this.ChatCreateID) {
            firebase.database().ref('Conversation/' + this.ChatCreateID + '/' + this.product_id).set({
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
            firebase.database().ref('Conversation/' + this.chatIDCheck + '/' + this.product_id).set({
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

        } else {
          console.log('dont push')
        }
      } else {
        var MyUserID = this.UserId
        var NewUesrID = this.ServiceID
        this.ConversID = MyUserID + '_' + NewUesrID
        console.log('3 =>', this.ConversID)
        console.log('3 =>', this.SeviceName)
        firebase.database().ref('Conversation/' + this.ConversID + '/' + this.product_id).set({
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
        this.ChatsID = ''
        this.ChatData(type)
      }

      // }
    }
  }

  ChatData(type) {
    if (this.OldChatId) {
      this.ChatsID = this.OldChatId
      console.log('Old =>', this.ChatsID)
    } else if (this.ConversID) {
      this.ChatsID = this.ConversID
      console.log('3 =>', this.ChatsID)
    }

    console.log(this.ChatsID)
    let newData = firebase.database().ref('Chats/' + this.ChatsID + '/chat').push();
    // console.log('offerdata =>', this.offerdata)
    console.log('message =>', this.Chat_Data.message)
    console.log('type =>', type)
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
          this.sendnotification()
        }
        this.Chat_Data.message = '';
      }
    } else {
      newData.set({
        user: this.Chat_Data.nickname,
        message: this.Chat_Data.message,
        id: this.Chat_Data.id,
        list_id:this.product_id,
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
        this.sendnotification()
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
    }
    console.log(params)
    this.service.SendNotification(params)
      .then((results) => this.handleNotification(results))
  }

  handleNotification(results) {
    console.log(results)
  }

  action(action, id, key) {
    this.alert.showLoader()
    console.log(key)
    var params = {
      offer_id: id,
      status : action
    }
    console.log(params)
    this.service.Offerstatus(params)
      .then((results) => this.handleAction(action, results, key))
  }

  handleAction(action, results, key) {
    console.log(results)
    this.alert.dissmissLoader()
    console.log(this.ChatsID)
    if (results.ResponseCode == 1) {
      if (this.OldChatId) {
        this.ChatsID = this.OldChatId
        console.log('Old =>', this.ChatsID)
      } else if (this.ConversID) {
        this.ChatsID = this.ConversID
        console.log('3 =>', this.ChatsID)
      }
      if (this.Chat_Data.id === this.UserId && action == '3') {
        this.alert.showToast("you have cancelled the offer")
      }
      let newData = firebase.database().ref('/Chats/' + this.ChatsID + '/chat' + '/' + key).update({ status: action });
      console.log(newData)
    }
  }


}
