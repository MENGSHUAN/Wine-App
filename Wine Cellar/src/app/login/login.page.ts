import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';
//import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  pwd: any;
  //fbresponce: { accessToken: string; data_access_expiration_time: string; expiresIn: number; userID: string; };
  //FacebokData: { email: any; first_name: any; picture: any; username: any; };
  googledata: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';
  DevicesId: any;

  // @ViewChild('content') private content: any;
  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    //private googlePlus: GooglePlus,
   // private facebook: Facebook,
    private platform: Platform,
   // private oneSignal: OneSignal,
    private alert: AlertService) { }

  ngOnInit() {
    console.log('Login page')
    if (this.platform.is('cordova')) {
      console.log('cordova')
      
    }
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  validateuser() {
    if (!this.email) {
      this.alert.showAlert("Error", "Please Enter Your Email", "")
      return false;
    }
    if (!this.pwd) {
      this.alert.showAlert("Error", "Please Enter Your Password", "")
      return false;
    }
    return true;
  }

  login() {
    if (this.validateuser()) {
      this.navctrl.navigateRoot('/home')
    }
  }
  
  fblogin() {
   
  }

  googlelogin() {
   
  }

    register() {
      this.navctrl.navigateForward('/registration')
    }

    forgotpwd() {
      this.navctrl.navigateForward('/forgetpwd')
    }

  }
