import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public navctrl: NavController,
    private config: ConfigService) {
    //this.config.logindata()
  }

  ngOnInit() {
  }

  back() {
    this.navctrl.pop()
  }

  editprofile() {
    this.navctrl.navigateForward('/editprofile')
  }

  editcompany() {
    this.navctrl.navigateForward('/editcompany')
  }

  chane() {
    this.navctrl.navigateForward('/changepwd')
  }

  faq() {
    this.navctrl.navigateForward('/faq')
  }

  contact() {
    this.navctrl.navigateForward('/contactus')
  }

  terms() {
    this.navctrl.navigateForward('/terms')
  }

  manage() {
    this.navctrl.navigateForward('/manageoutlet')
  }

  logout() {
    this.navctrl.navigateForward('/login')
  }
}
