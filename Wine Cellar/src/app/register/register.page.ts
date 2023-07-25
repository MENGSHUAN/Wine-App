import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../alert.service';
import { AlertpopupPage } from '../alertpopup/alertpopup.page';
import { ConfigService } from '../config.service';
import { ServiceService } from '../service.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usertype: any;
  gettype: any;
  uname: any;
  email: any;
  mobile: any;
  pwd: any;
  repwd: any;
  bio: any;
  type: any;
  c_name: any;
  reg_no: any;
  c_address: any;
  c_contact: any;
  userdata: any;
  otherinfolenth: any;

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off-outline';

  passwordType1: string = 'password';
  passwordIcon1: string = 'eye-off-outline';
  userpic: any;
  Myimage: any;

  constructor(public navctrl: NavController,
    public modalctrl: ModalController,
    private service: ServiceService,
    private alert: AlertService,
    private config: ConfigService,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private filetransfer: FileTransfer,
    public router: ActivatedRoute) {
      
    this.usertype = 'individual'
    this.gettype = this.router.snapshot.params.type
    console.log(this.gettype)
    this.userdata = JSON.parse(localStorage.getItem("Riderr_Login"))
    console.log(this.userdata)
    this.otherinfolenth = 0
  }

  ngOnInit() {
  }

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  hideShowPassword1() {
    this.passwordType1 = this.passwordType1 === 'text' ? 'password' : 'text';
    this.passwordIcon1 = this.passwordIcon1 === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';
  }

  selecttype(ev: any) {
    console.log(ev)
    this.usertype = ev.detail.value
    if (this.usertype == 'individual') {
      this.type = '1'
    } else {
      this.type = '2'
    }
  }

  validateuser() {
    if (!this.usertype) {
      this.alert.showAlert('Error!', "Please Select Type", '')
      return false;
    }
    if (!this.uname) {
      this.alert.showAlert('Error!', "Please Enter User Name", '')
      return false;
    }
    if (!this.mobile) {
      this.alert.showAlert('Error!', "Please Enter Mobile Number", '')
      return false;
    }
    if (!this.pwd) {
      this.alert.showAlert('Error!', "Please Enter Password", '')
      return false;
    }
    if (!this.repwd) {
      this.alert.showAlert('Error!', "Please Enter Confirm Password", '')
      return false;
    }
    if (this.pwd != this.repwd) {
      this.alert.showAlert('Error!', "Please Enter Valid Confirm Password", '')
      return false;
    }
    if (!this.email) {
      this.alert.showAlert('Error!', "Please Enter Email", '')
      return false;
    }
    // if(!this.uname){
    //   this.alert.showAlert('Error!',"Please Enter Uesrname",'')
    //   return false;
    // }
    return true;
  }

  register() {
    if (this.validateuser()) {
      this.navctrl.navigateForward('/verify')
    }
  }

  validate_company() {
    if (!this.c_name) {
      this.alert.showAlert("Error!", "Please Enter Company Name", '')
      return false;
    }
    if (!this.c_address) {
      this.alert.showAlert("Error!", "Please Enter Company Address", '')
      return false;
    }
    if (!this.reg_no) {
      this.alert.showAlert("Error!", "Please Enter Company ", 'Registration Number')
      return false;
    }
    if (!this.c_contact) {
      this.alert.showAlert("Error!", "Please Enter Company Contact", '')
      return false;
    }
    return true;
  }

    back() {
    this.navctrl.pop()
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
      this.alert.showLoader();
      //this.upload(base64Image);
    },
      (err) => {
        console.log(err);
      });
  }

  upload(image) {
    var d = new Date();
    var n = d.getTime();
    let options: FileUploadOptions = {
      fileKey: "image",
      fileName: "image_" + n.toString() + ".png",
      chunkedMode: false,
      mimeType: "image/png"
    }; console.log(options)
    const fileTransfer: FileTransferObject = this.filetransfer.create();
    fileTransfer.upload(image, this.config.url + 'imageupload.php', options)
      .then((data) => {
        this.alert.dissmissLoader()
        console.log("data:", data.response)
        var imgdata = JSON.parse(data.response)
        console.log(imgdata)
        if (imgdata.ResponseCode == 1) {
          console.log(imgdata.image_url)
          this.userpic = imgdata.image_url
          this.Myimage = this.userpic
          console.log(this.Myimage)
          this.alert.showToast('Profile Photo Uploaded')
        }
      })
  }

  contrlenth() {
    this.otherinfolenth = this.bio.length
  }
}