import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ConfigService } from './config.service';
//import { OneSignal } from '@ionic-native/onesignal/ngx';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3cNoavvRNtwwImE4C-I5MFghjRVEp20Y",
  authDomain: "riderr-6efc4.firebaseapp.com",
  databaseURL: "https://riderr-6efc4-default-rtdb.firebaseio.com",
  projectId: "riderr-6efc4",
  storageBucket: "riderr-6efc4.appspot.com",
  messagingSenderId: "448709835257",
  appId: "1:448709835257:web:eeca62ac9d61ac11946528",
  measurementId: "G-S6YSR96SG0"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  view: any;
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    //private oneSignal: OneSignal,
    private config: ConfigService
  ) {
    this.config.logindata()
    this.initializeApp()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 300);
    });
    
    if (localStorage.getItem('Riderr_Login')) {
      this.navCtrl.navigateForward('/home')
    } else {
      this.navCtrl.navigateForward('/login')
    }
  }


}
