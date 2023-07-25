import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editoutlet',
  templateUrl: './editoutlet.page.html',
  styleUrls: ['./editoutlet.page.scss'],
})
export class EditoutletPage implements OnInit {

  name: any;
  address: any;
  contact: any;
  mon_start: any;
  mon_end: any;
  tue_start: any;
  tue_end: any;
  wed_start: any;
  wed_end: any;
  thu_start: any;
  thu_end: any;
  fri_start: any;
  fri_end: any;
  sat_start: any;
  sat_end: any;
  sun_start: any;
  sun_end: any;
  other_info: any;
  outletdata: any;
  otherinfolenth: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private alert: AlertService,
    public router: ActivatedRoute) {
      this.otherinfolenth = 0
    this.config.logindata()
    this.outletdata = this.router.snapshot.params
    console.log(this.outletdata)
    this.name = this.outletdata.outlet_name
    this.address = this.outletdata.outlet_address
    this.contact = this.outletdata.outlet_contact_number
    this.mon_start = this.outletdata.mon_start
    this.mon_end = this.outletdata.mon_end
    this.tue_start = this.outletdata.tues_start
    this.tue_end = this.outletdata.tues_end
    this.wed_start = this.outletdata.wed_start
    this.wed_end = this.outletdata.wed_end
    this.thu_start = this.outletdata.thur_start
    this.thu_end = this.outletdata.thur_end
    this.fri_start = this.outletdata.fri_start
    this.fri_end = this.outletdata.fri_end
    this.sat_start = this.outletdata.sat_start
    this.sat_end = this.outletdata.sat_end
    this.sun_start = this.outletdata.sun_start
    this.sun_end = this.outletdata.sun_end
    this.other_info = this.outletdata.other_infromation
  }

  ngOnInit() {
    console.log('editoutlet page')
  }

  back() {
    this.navctrl.pop()
  }

  edit() {
    this.alert.showLoader()
    var params = {
      id: this.outletdata.id,
      outlet_name: this.name,
      outlet_address: this.address,
      outlet_contact_number :this.contact ,
      mon_start: this.mon_start,
      mon_end: this.mon_end,
      tues_start: this.tue_start,
      tues_end: this.tue_end,
      wed_start: this.wed_start,
      wed_end: this.wed_end,
      thur_start: this.thu_start,
      thur_end: this.thu_end,
      fri_start: this.fri_start,
      fri_end: this.fri_end,
      sat_start: this.sat_start,
      sat_end: this.sat_end,
      sun_start: this.sun_start,
      sun_end: this.sun_end,
      other_infromation: this.outletdata.other_infromation
    }
    console.log(params)
    this.service.Editoutlet(params)
    .then((results) => this.handleOutlet(results))
  }

  handleOutlet(results){
    console.log(results)
    this.alert.dissmissLoader()
    if(results.ResponseCode == '1'){
      this.navctrl.navigateForward('/profile')
      this.alert.showAlert("",results.ResponseMsg,"")
    }else{
      this.alert.showAlert("Error",results.ResponseMsg,"")
    }
  }

  contrlenth() {
    this.otherinfolenth = this.other_info.length
  }
  
}
