import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manageoutlet',
  templateUrl: './manageoutlet.page.html',
  styleUrls: ['./manageoutlet.page.scss'],
})
export class ManageoutletPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }

  back(){
    this.navctrl.pop()
  }

  editoutlet(){
    this.navctrl.navigateForward('/editexisting')
  }

  newoutlet(){
    this.navctrl.navigateForward('/outlet')
  }

}
