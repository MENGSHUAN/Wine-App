import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-catpost',
  templateUrl: './catpost.page.html',
  styleUrls: ['./catpost.page.scss'],
})
export class CatpostPage implements OnInit {

  constructor(public navCtrl: NavController,
    public navctrl: NavController,
    private service: ServiceService,
    private alert: AlertService) {
  }

  ngOnInit() {
  }
  gotodetail() {
    this.navCtrl.navigateForward(['/detail'])
  }
  
  back() {
    this.navctrl.pop()
  }

}