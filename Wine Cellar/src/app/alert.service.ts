import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  confirm: any;
  loader: any;
  loaderproces: any;
  trans: any;
  isLoading = false;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingController: LoadingController
  ) { }


  async showAlert(title,msg, text) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader:msg,
      message: text,
    });
    await alert.present();
  }

  async showAlertwithbtn(title,msg, text,btn) {
    const alert = await this.alertCtrl.create({
      header: title,
      subHeader:msg,
      message: text,
      buttons: [btn]
    });
    await alert.present();
  }

  async showLoader() {
    this.isLoading = true;
    return await this.loadingController.create({
      // duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then();
        }
      });
    });
  }

  async showFixtimeLoader(text, time) {
    this.loader = await this.loadingController.create({
      // spinner: 'dots',
      // content: '',
      duration: time
    });
    await this.loader.present();
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }

  async dissmissLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then();
  }

}
