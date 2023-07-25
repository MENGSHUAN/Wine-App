import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.page.html',
  styleUrls: ['./listitem.page.scss'],
})
export class ListitemPage implements OnInit {

  category: any;
  title: any;
  condition: any;
  price: any;
  description: any;
  collection_type: ['Self-pickup','Call'];
  location: any;
  allcategory: any;
  Myimage1: any;
  Myimage2: any;
  Myimage3: any;
  images: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private alert: AlertService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private filetransfer: FileTransfer,
    private config: ConfigService) {
      this.images = []
     }

  ngOnInit() {
    console.log("Listitem Page")
   
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

    validatelist() {
    if (!this.category) {
      this.alert.showAlert("Error", "Please Select Category", "")
      return false;
    }
    if (!this.title) {
      this.alert.showAlert("Error", "Please Enter Title", "")
      return false;
    }
    if (!this.condition) {
      this.alert.showAlert("Error", "Please Select Condition", "")
      return false;
    }
    if (!this.price) {
      this.alert.showAlert("Error", "Please Enter Price", "")
      return false;
    }
    if (!this.description) {
      this.alert.showAlert("Error", "Please Enter Description", "")
      return false;
    }
    if (!this.collection_type) {
      this.alert.showAlert("Error", "Please Enter Collection", "")
      return false;
    }
    if (!this.location) {
      this.alert.showAlert("Error", "Please Enter Location", "")
      return false;
    }
    return true;
  }

  submit() {
    /*
    if (this.validatelist()) {
      this.navctrl.navigateForward('/home')
      this.alert.showAlert("CONGRATS!","Post has been successfully listed!","")
    }
    */
    this.navctrl.navigateForward(['/catpost'])
  }


  home() {
    this.navctrl.navigateForward('/home')
  }

  notification() {
    this.navctrl.navigateForward('/notification')
  }

  profile() {
    this.navctrl.navigateForward('/profile')
  }

}
