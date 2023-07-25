import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {

  uname: any;
  email: any;
  mobile: any;
  bio: any;
  Myimage: any;

  constructor(public navctrl: NavController,
    private service: ServiceService,
    private config: ConfigService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private filetransfer: FileTransfer,
    private alert: AlertService) {

    this.uname = 'Meng Shuan'
    this.email = 'Shuan@gmail.com'
    this.mobile = '+86 0970605002'
    this.bio = 'Hi ~~~~'
  }

  ngOnInit() {
    console.log('Editprofile Page')
  }

  back() {
    this.navctrl.pop()
  }

  update() {
    
  }

  async opengallery(){
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA);
        }
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType) {
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
      //this.alert.showLoader();
      //this.upload(base64Image);
    },
      (err) => {
        console.log(err);
      });
  }
}
