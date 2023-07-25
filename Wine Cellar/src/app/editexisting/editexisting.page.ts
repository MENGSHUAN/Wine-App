import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editexisting',
  templateUrl: './editexisting.page.html',
  styleUrls: ['./editexisting.page.scss'],
})
export class EditexistingPage implements OnInit {
  alloutlet: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService) { 
      
    }

  ngOnInit() {
    
  }

  back() {
    this.navctrl.pop()
  }

  editoutlet(){
    this.navctrl.navigateForward(['editoutlet'])
  }

}
