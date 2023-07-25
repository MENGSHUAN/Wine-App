import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  allnotification: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) {
    this.config.logindata()
  }

  ngOnInit() {
    console.log('notification page')
  }

   home() {
    this.navctrl.navigateForward('/home')
  }

  list() {
    this.navctrl.navigateForward('/listitem')
  }

  profile() {
    this.navctrl.navigateForward('/profile')
  }

}
