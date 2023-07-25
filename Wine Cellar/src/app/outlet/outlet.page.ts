import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { AlertpopupPage } from '../alertpopup/alertpopup.page';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.page.html',
  styleUrls: ['./outlet.page.scss'],
})
export class OutletPage implements OnInit {
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
  userdata: any;
  otherinfolenth: any;
  constructor(public navctrl: NavController,
    private alert: AlertService,
    private config: ConfigService,
    public modalctrl: ModalController,
    private service: ServiceService) {
    this.otherinfolenth = 0
  }

  ngOnInit() {
    console.log('Outlet Page')
    
  }

  back() {
    this.navctrl.pop()
  }

  validate() {
    if (!this.name) {
      this.alert.showAlert("Error!", "Please Enter Outlet Name", "")
      return false;
    }
    if (!this.address) {
      this.alert.showAlert("Error!", "Please Enter Outlet Address", "")
      return false;
    }
    if (!this.contact) {
      this.alert.showAlert("Error!", "Please Enter Outlet Contact Number", "")
      return false;
    }
    if (!this.mon_start) {
      this.alert.showAlert("Error!", "Please Enter Monday Start Time", "")
      return false;
    }
    if (!this.mon_end) {
      this.alert.showAlert("Error!", "Please Enter Monday End Time", "")
      return false;
    }
    if (!this.tue_start) {
      this.alert.showAlert("Error!", "Please Enter Tuesday Start Time", "")
      return false;
    }
    if (!this.tue_end) {
      this.alert.showAlert("Error!", "Please Enter Tuesday End Time", "")
      return false;
    }
    if (!this.wed_start) {
      this.alert.showAlert("Error!", "Please Enter Wednesday Start Time", "")
      return false;
    }
    if (!this.wed_end) {
      this.alert.showAlert("Error!", "Please Enter Wednesday End Time", "")
      return false;
    }
    if (!this.thu_start) {
      this.alert.showAlert("Error!", "Please Enter Thursday Start Time", "")
      return false;
    }
    if (!this.thu_end) {
      this.alert.showAlert("Error!", "Please Enter Thursday End Time", "")
      return false;
    }
    if (!this.fri_start) {
      this.alert.showAlert("Error!", "Please Enter Friday Start Time", "")
      return false;
    }
    if (!this.fri_end) {
      this.alert.showAlert("Error!", "Please Enter Friday End Time", "")
      return false;
    }
    if (!this.sat_start) {
      this.alert.showAlert("Error!", "Please Enter Saturday Start Time", "")
      return false;
    }
    if (!this.sat_end) {
      this.alert.showAlert("Error!", "Please Enter Saturday End Time", "")
      return false;
    }
    if (!this.sun_start) {
      this.alert.showAlert("Error!", "Please Enter Sunday Start Time", "")
      return false;
    }
    if (!this.sun_end) {
      this.alert.showAlert("Error!", "Please Enter Sunday End Time", "")
      return false;
    }
    return true;
  }

  save() {
    if (this.validate()) {
     
    }
  }

  

  contrlenth() {
    this.otherinfolenth = this.other_info.length
  }

}
