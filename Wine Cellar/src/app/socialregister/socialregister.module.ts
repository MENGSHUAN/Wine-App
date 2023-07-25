import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialregisterPageRoutingModule } from './socialregister-routing.module';

import { SocialregisterPage } from './socialregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialregisterPageRoutingModule
  ],
  declarations: [SocialregisterPage]
})
export class SocialregisterPageModule {}
