import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AlertpopupPageModule } from './alertpopup/alertpopup.module';
//import { Facebook } from '@ionic-native/facebook/ngx';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MakeofferPageModule } from './makeoffer/makeoffer.module';
//import { OneSignal } from '@ionic-native/onesignal/ngx';


@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AlertpopupPageModule,
    MakeofferPageModule
  ],
  providers: [
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    FileTransfer,
    Calendar,
    Keyboard,
    //Facebook,
    //OneSignal,
    //GooglePlus
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
