import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';
import { ConfigService } from '../config.service';
import { AlertService } from '../alert.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.page.html',
  styleUrls: ['./editpost.page.scss'],
})
export class EditpostPage implements OnInit {
  detail: any;
  image: any;
  Myimage: any;
  Myimage2: any;
  Myimage3: any;
  Myimage4: any;
  Myimage5: any;
  category: any;
  title: any;
  condition: any;
  price: any;
  description: any;
  collection_type: any;
  location: any;
  allcategory: any;
  displaycategory: any;

  constructor(public navctrl: NavController,
    private config: ConfigService,
    private alert: AlertService,
    private service: ServiceService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private filetransfer: FileTransfer,
    public router: ActivatedRoute) {
    
  }

  ngOnInit() {
    
  }

  async opengallery(id) {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Gallery',
        icon: 'image-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, id);
        }
      },
      {
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, id);
        }
      }
      ]
    });
    await actionSheet.present();
  }

  pickImage(sourceType, id) {
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

  

  back() {
    this.navctrl.pop()
  }


}
