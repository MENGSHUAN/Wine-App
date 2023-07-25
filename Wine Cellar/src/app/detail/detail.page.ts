import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  data: any;
  image: any;
  productdetail: any;
  description: any;

  constructor(public navctrl: NavController,
    private config: ConfigService,
    private service: ServiceService,
    private alert: AlertService,
    public router: ActivatedRoute) {

    
  }

  ngOnInit() {
    console.log('detail page')
   
  }

  
  back() {
    this.navctrl.pop()
  }

  chat() {
    this.navctrl.navigateForward(['/chat'])
  }

  edit(){
    this.navctrl.navigateForward(['/editpost'])
  }

}
