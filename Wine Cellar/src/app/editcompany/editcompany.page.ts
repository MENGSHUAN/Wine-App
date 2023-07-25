import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.page.html',
  styleUrls: ['./editcompany.page.scss'],
})
export class EditcompanyPage implements OnInit {

  cname:any;
  reg_no:any;
  caddress:any;
  contact:any;

  constructor(public navctrl:NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) { 
      
      this.cname = 'K29solutions'
      this.reg_no = '+91 9624767583'
      this.caddress = 'India'
      this.contact = '+91 9624767583'
    }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

  update() {
   
  }
 
}
