import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { AlertpopupPage } from '../alertpopup/alertpopup.page';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {
  code: any;
  code1: any;
  code2: any;
  code3: any;
  code4: any;
  code5: any;
  code6: any;
  type: any;
  showOTPInput: boolean = false;
  OTPmessage: string;
  usertype: any;
  userdata: any;

  constructor(public navctrl: NavController,
    private alert: AlertService,
    public modalctrl: ModalController,
    private config: ConfigService,
    private service: ServiceService,
    public router: ActivatedRoute) {
    this.config.logindata()
    this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"))
    console.log(this.userdata)
    this.usertype = this.config.Usertype
    console.log(this.usertype)
  }

  ngOnInit() {
    console.log('verfication page')
  }

  back() {
    this.navctrl.pop()
  }

  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    } else {
      return 0;
    }
  }

  resend() {
    this.alert.showAlert('RESEND OTP', 'The OTP has been sent to you', 'registered email address.')
  }

  async verify() {
    this.navctrl.navigateForward('/login')
  }

  

 
}
