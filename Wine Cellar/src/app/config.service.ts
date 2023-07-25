import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  url: string;
  imgurl: string;
  UserData: any;
  Usertype:any

  constructor() {
    this.url = ''
    this.imgurl = ''
  }

  logindata() {
    if (localStorage.getItem('Riderr_Login')) {
      this.UserData = JSON.parse(localStorage.getItem('Riderr_Login'))
      console.log(this.UserData)
    }
    this.Usertype = JSON.parse(localStorage.getItem('Riderr_Usertype'))
  }


}
