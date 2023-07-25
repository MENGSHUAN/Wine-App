import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-outletdetail',
  templateUrl: './outletdetail.page.html',
  styleUrls: ['./outletdetail.page.scss'],
})
export class OutletdetailPage implements OnInit {
  outletdata: any;

  constructor(public navctrl: NavController,
    public router: ActivatedRoute) {
    this.outletdata = this.router.snapshot.params
    console.log(this.outletdata)
  }

  ngOnInit() {
  }

  back() {
    this.navctrl.pop()
  }

}
