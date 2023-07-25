import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertpopupPageRoutingModule } from './alertpopup-routing.module';

import { AlertpopupPage } from './alertpopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertpopupPageRoutingModule
  ],
  declarations: [AlertpopupPage]
})
export class AlertpopupPageModule {}
