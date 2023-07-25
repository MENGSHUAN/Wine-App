import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  user: any;
  url: string;
  constructor(
    public http: HttpClient,
    private config: ConfigService,
  ) { }


  signup(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'signup.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  socialsignup(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'socialsignup.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Verifyotp(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'verifyotp.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Resendotp(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'resendotp.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  UpdateCompany(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'updatecompanyinfo.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  AddOutlet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'addoutlet.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  login(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'login.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Userprofile(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getuserprofile.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  HomeData(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'gethomedata.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Search(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'search.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  AddList(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'addpost.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Listdetail(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'postdetail.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  AddRemoveFavourite(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'addremovefavorite.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

Favourite(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getfavorite.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  // SendNotification(params) {
  //   return new Promise(resolve => {
  //     this.http.post(this.config.url + 'sendnotification.php', params).pipe(map(res => res))
  //       .subscribe(data => {
  //         this.user = data;
  //         resolve(this.user);
  //       });
  //   });
  // }

  Notification(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'getnotification.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Mypost(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'mypost.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Myreview(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'myreview.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  UpdateProfile(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'updateprofile.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }


  ChangePwd(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'changepassword.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  ContactUs(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'contact_us.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  ForgotPwd(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'forgotpassword.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Myoutlet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'myoutlet.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Editoutlet(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'editoutlet.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  MarkasSold(params) {
    return new Promise(resolve => {
      this.http.post(this.config.url + 'markassold.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  EditList(params){
    return new Promise(resolve => {
      this.http.post(this.config.url + 'editpost.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  DeleteList(params){
    return new Promise(resolve => {
      this.http.post(this.config.url + 'deletepost.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Makeoffer(params){
    return new Promise(resolve => {
      this.http.post(this.config.url + 'makeoffer.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  SendNotification(params){
    return new Promise(resolve => {
      this.http.post(this.config.url + 'sendnotification.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Offerstatus(params){
    return new Promise(resolve => {
      this.http.post(this.config.url + 'offerstatuschange.php', params).pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }


  // CatPost(params) {
  //   return new Promise(resolve => {
  //     this.http.post(this.config.url + 'getcatpost.php', params).pipe(map(res => res))
  //       .subscribe(data => {
  //         this.user = data;
  //         resolve(this.user);
  //       });
  //   });
  // }

// ************************************************************************************************************************************************

  Slider() {
    return new Promise(resolve => {
      this.http.get(this.config.url + 'getslider.php').pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

  Category() {
    return new Promise(resolve => {
      this.http.get(this.config.url + 'getcategory.php').pipe(map(res => res))
        .subscribe(data => {
          this.user = data;
          resolve(this.user);
        });
    });
  }

 }
