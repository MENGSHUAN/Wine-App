import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.page.html',
  styleUrls: ['./changepwd.page.scss'],
})
export class ChangepwdPage implements OnInit {

  oldpwd: any;
  newpwd: any;
  repwd: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) {
   
  }

  ngOnInit() {
    console.log('changepwd page')
  }

  back() {
    this.navctrl.pop()
  }

  validate(){
    if(!this.oldpwd){
      this.alert.showAlert("Error","Please Enter Old Password","")
      return false
    }
    if(!this.newpwd){
      this.alert.showAlert("Error","Please Enter New Password","")
      return false
    }
    if(!this.repwd){
      this.alert.showAlert("Error","Please Enter Confirm Password","")
      return false
    }
    if(this.newpwd != this.repwd){
      this.alert.showAlert("Error","Please Enter Valid Confirm Password","")
      return false
    }
    return true
  }

  update() {
    if(this.validate()){
    
    }
  }

  

}
