import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-alertpopup',
  templateUrl: './alertpopup.page.html',
  styleUrls: ['./alertpopup.page.scss'],
})
export class AlertpopupPage implements OnInit {
  usertype: any;
  popupname: any;
  registertype: any;

  constructor(public navparms: NavParams,
    public modalctrl: ModalController,
    public navctrl: NavController) {
    this.popupname = this.navparms.get('popupname')
    console.log(this.popupname)
    this.usertype = this.navparms.get('type')
    console.log(this.usertype)
    this.registertype = this.navparms.get('registertype')
    console.log(this.registertype)
  }

  ngOnInit() {
  }

  startbrowse() {
    this.modalctrl.dismiss()
    this.navctrl.navigateForward('/home')
  }

  setupprofile() {
    if(this.registertype == 'signup'){
      this.modalctrl.dismiss()
      this.navctrl.navigateForward(['/register', { type: this.usertype }])
    }
    if(this.registertype == 'social'){
      this.modalctrl.dismiss()
      this.navctrl.navigateForward(['/socialregister', { type: this.usertype }])
    }
  }

  yes(){
    this.modalctrl.dismiss()
    this.navctrl.navigateForward('/outlet')
  }

}
