import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  ConversationID: any;
  logindata: any;
  chatlist: any;
  servicename: any;
  serviceid: any;
  chatlist1: any;
  ServicesID: any;
  threads: any;
  allconverse: any;
  getlist_productid: any;

  constructor(public navctrl: NavController,
    private config: ConfigService,
    private service: ServiceService,
    private alert: AlertService) {
  }

  ngOnInit() {
    
  }



  home() {
    this.navctrl.navigateForward('/home')
  }

  list() {
    this.navctrl.navigateForward('/listitem')
  }

  notification() {
    this.navctrl.navigateForward('/notification')
  }

  profile() {
    this.navctrl.navigateForward('/profile')
  }
  chat() {
    this.navctrl.navigateForward('/chat')
  }

  


}
