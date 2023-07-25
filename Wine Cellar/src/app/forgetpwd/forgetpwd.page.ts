import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-forgetpwd',
  templateUrl: './forgetpwd.page.html',
  styleUrls: ['./forgetpwd.page.scss'],
})
export class ForgetpwdPage implements OnInit {

  email: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) {
    this.config.logindata()
  }

  ngOnInit() {
  }

  back() {
    this.navctrl.pop()
  }

  submit() {
    if(!this.email){
      this.alert.showAlert("Error","Please enter email address", "")
    }else{
      this.alert.showAlert("Success","Successfully sent", "")
    }
  }
}
