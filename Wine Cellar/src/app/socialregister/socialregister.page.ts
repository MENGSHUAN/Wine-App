import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { AlertpopupPage } from '../alertpopup/alertpopup.page';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-socialregister',
  templateUrl: './socialregister.page.html',
  styleUrls: ['./socialregister.page.scss'],
})
export class SocialregisterPage implements OnInit {
  socialdata: any;
  uname: any;
  email: any;
  bio: any;
  mobile: any;
  type: any;
  usertype: any;
  Myimage: any;
  c_name: any;
  reg_no: any;
  c_address: any;
  c_contact: any;
  gettype: any;
  userdata: any;
  DevicesId:any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService,
    public router: ActivatedRoute,
    private platform: Platform,
    private oneSignal: OneSignal,
    public modalctrl: ModalController) {
    this.gettype = this.router.snapshot.params.type
    console.log(this.gettype)
    this.socialdata = this.router.snapshot.params
    console.log(this.socialdata)
    this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"))
    console.log(this.userdata)
    if (this.socialdata) {
      this.uname = this.socialdata.name
      this.email = this.socialdata.email
      this.Myimage = this.socialdata.img
    }
  }

  ngOnInit() {
    console.log('socialregister page')
    if (this.platform.is('cordova')) {
      console.log('cordova')
      this.oneSignal.getIds().then(ids => {
        var playerid = JSON.stringify(ids['userId'])
        var str = playerid.replace("\"", "");
        this.DevicesId = str.replace("\"", "");
        console.log("Device id is => " + this.DevicesId)
      });
    }
  }

  selecttype(ev: any) {
    console.log(ev)
    this.usertype = ev.detail.value
    if (this.usertype == 'individual') {
      this.type = '1'
    } else {
      this.type = '2'
    }
  }

  register() {
    this.alert.showLoader()
    var params = {
      name: this.uname,
      email: this.email,
      authid: this.socialdata.authid,
      img: this.Myimage,
      device_id: this.DevicesId,
      mobile: this.mobile,
      type: this.type,
    }
    console.log(params)
    this.service.socialsignup(params)
      .then((results) => this.handleRegister(results))
  }

  async handleRegister(result) {
    console.log(result)
    this.alert.dissmissLoader()
    if (result.ResponseCode == '1') {
      localStorage.setItem("Riderr_Login", JSON.stringify(result.user_data))
      localStorage.setItem("Riderr_Usertype", JSON.stringify(this.usertype))
      this.config.logindata()
      const modal = await this.modalctrl.create({
        component: AlertpopupPage,
        cssClass: 'backmodal',
        componentProps: { 'type': this.usertype, 'popupname': 'startpopup', 'registertype': 'social' }
      })
      modal.present()
    } else {
      this.alert.showAlert("Error", result.ResponseMsg, '')
    }
  }

  async registercompany() {
    this.alert.showLoader()
    var params = {
      user_id: this.userdata.id,
      company_name: this.c_name,
      company_address: this.c_address,
      company_registration_number: this.reg_no,
      company_contact_number: this.c_contact
    }
    console.log(params)
    this.service.UpdateCompany(params)
      .then((results) => this.handleCompany(results))
  }

  async handleCompany(results) {
    console.log(results)
    this.alert.dissmissLoader()
    if (results.ResponseCode == '1') {
      // localStorage.setItem("Riderr_Login", JSON.stringify(result.user_id))
      // localStorage.setItem("Riderr_Usertype", JSON.stringify(this.usertype))
      const modal = await this.modalctrl.create({
        component: AlertpopupPage,
        cssClass: 'backmodal',
        componentProps: { 'type': this.usertype, 'popupname': 'outletpopup' }
      })
      modal.present()
    } else {
      this.alert.showAlert("Error", results.ResponseMsg, '')
    }
  }


}
