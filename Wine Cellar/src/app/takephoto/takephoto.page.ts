import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-takephoto',
  templateUrl: './takephoto.page.html',
  styleUrls: ['./takephoto.page.scss'],
})
export class TakephotoPage implements OnInit {

  constructor(public navCtrl: NavController,
    public navctrl: NavController,
    private service: ServiceService,
    private alert: AlertService) {
  }

  ngOnInit() {
  }

  back() {
    this.navctrl.pop()
  }

}
