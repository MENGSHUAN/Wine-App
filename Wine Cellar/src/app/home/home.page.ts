import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, MenuController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ServiceService } from '../service.service';
import { ConfigService } from '../config.service';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5,
    // spaceBetween: 10,
  }
  slideOpts1 = {
    initialSlide: 0,
    slidesPerView: 4,
  }
  browsetype: any;
  slider: any;
  category: any;
  feature: any;
  recommend: any;
  image: any;
  searchtxt: any;
  featureimage: any;

  constructor(public navCtrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private alert: AlertService) {
    //this.config.logindata()
  }

  ngOnInit() {
    console.log("HomePage")
  }

  selectbrowse() {
    this.navCtrl.navigateForward(['/catpost'])
  }



  gotodetail() {
    this.navCtrl.navigateForward(['/detail'])
  }

  // favourite(){
  //   this.navCtrl.navigateForward('/listitem')
  // }

  list() {
    this.navCtrl.navigateForward('/listitem')
  }

  chat() {
    this.navCtrl.navigateForward('/conversation')
  }

  notification() {
    this.navCtrl.navigateForward('/notification')
  }

  profile() {
    this.navCtrl.navigateForward('/profile')
  }

  takePhoto() {
    this.navCtrl.navigateForward('/takephoto')
  }

  

  async opengallery(id){
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY,id);
        }
      },
      {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA,id);
        }
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType,id) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      targetHeight: 500,
      targetWidth: 500,
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/png;base64,' + imageData;
      console.log(base64Image)
      
    },
      (err) => {
        console.log(err);
      });
  }
  

}

