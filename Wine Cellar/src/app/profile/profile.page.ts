import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  option: any;
  allpost: any;
  allreview: any;
  allfavourite: any;
  image: any;
  alloutlet: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) {
    this.config.logindata()
    this.option = '1'
  }

  ngOnInit() {
    console.log('Profile page')
  }

  selectcategory(id) {
    this.option = id;
  }



  outletdetail(){
    this.navctrl.navigateForward(['outletdetail'])
  }

  setting() {
    this.navctrl.navigateForward('settings')
  }

  home() {
    this.navctrl.navigateForward('/home')
  }

  notification() {
    this.navctrl.navigateForward('/notification')
  }

  list() {
    this.navctrl.navigateForward('/listitem')
  }

  gotodetail() {
    this.navctrl.navigateForward(['/detail'])
  }

}
