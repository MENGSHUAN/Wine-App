import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {

  uname: any;
  email: any;
  enquiry_type: any;
  contact: any;
  message: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) {
  }

  ngOnInit() {
    console.log('contactus page')
  }

  back() {
    this.navctrl.pop()
  }

  validate() {
    if (!this.message) {
      this.alert.showAlert("Error", "Please Enter Message", "")
      return false
    }
    return true
  }

  submit() {
    if (this.validate()) {
    }
  }
}