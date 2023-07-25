import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-makeoffer',
  templateUrl: './makeoffer.page.html',
  styleUrls: ['./makeoffer.page.scss'],
})
export class MakeofferPage implements OnInit {
  showprice: any;
  name: any;
  userid: any;
  qty: number;
  price1: any;
  listid: any;
  date: any;

  constructor(public modalctrl: ModalController,
    public navparams: NavParams,
    private alert: AlertService,
    private service: ServiceService) {
    this.name = this.navparams.get('name')
    this.showprice = this.navparams.get('price')
    this.userid = this.navparams.get('user_id')
    this.listid = this.navparams.get('list_id')
    this.qty = 1
  }

  ngOnInit() {
  }

 

  increament(id) {
    if (id == '1') {
      this.qty++;
    }
    if (id == '2') {
      if (this.qty > 1) {
        this.qty--;
      }
    }
  }

  enterprice(ev:any) {
    const pattern = /[0-9.,]/;
    let inputchar = String.fromCharCode(ev.charCode);

    if(!pattern.test(inputchar)){
      ev.preventDEfault();
    }
    console.log(this.price1)
  }

  decimalvalidate(ev:any){
    var regexp = /^\d+\.\d{2}$/;
    regexp.test(this.price1)
    console.log(regexp.test(this.price1))
    if(regexp.test(this.price1) == true){
      ev.preventDefault();
    }
  }

  makeoffer() {
    this.alert.showLoader()
    var params = {
      user_id: this.userid,
      post_id: this.listid,
      offer_made: this.price1
    }
    console.log(params)
    this.service.Makeoffer(params)
    .then((results) => this.handleOffer(results))
  }

  handleOffer(results){
    console.log(results)
    this.alert.dissmissLoader()
    if(results.ResponseCode == '1'){
      this.alert.showAlert("",results.ResponseMsg,"")
      var data = {
        user_id: this.userid,
        post_id: this.listid,
        offer_made: this.price1,
        offerid:results.offer_id,
        message: 'offer',
      }
    //   data['offerid'] = results.id
      console.log(data)
      this.modalctrl.dismiss(data)
    }
  }


  cancel() {
    this.modalctrl.dismiss()
  }
}
