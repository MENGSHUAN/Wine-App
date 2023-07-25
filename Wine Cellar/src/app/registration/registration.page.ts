import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  fbresponce: { accessToken: string; data_access_expiration_time: string; expiresIn: number; userID: string; };
  FacebokData: { email: any; first_name: any; picture: any; username: any; };
  googledata: any;

  constructor(public navctrl:NavController,
    //private googlePlus: GooglePlus,
    //private facebook: Facebook
    ) { }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

  registerwithemail(){
    this.navctrl.navigateForward('/register')
  }

  // ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="1104423786783773" --variable APP_NAME="Riderr"

  registerwithfb(){
  }
 
  // 211216542889-t6b5u54aqs5od650jjp190im4ku2q8sb.apps.googleusercontent.com  -- ios

  // ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=com.googleusercontent.apps.211216542889-6gmlifdj953dlibhodfmtmpdo9rpm66k --variable WEB_APPLICATION_CLIENT_ID=211216542889-6gmlifdj953dlibhodfmtmpdo9rpm66k.apps.googleusercontent.com

  registerwithgoogle() {
    
  }
}
