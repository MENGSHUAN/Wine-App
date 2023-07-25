import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  active: any;

  constructor(public navctrl:NavController) {
    this.active = '1'
   }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

  opendiv(id) {
    if (this.active == 0) {
      this.active = id
    } else {
      this.active = 0
    }
  }

}
