import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatpostPageRoutingModule } from './catpost-routing.module';

import { CatpostPage } from './catpost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatpostPageRoutingModule
  ],
  declarations: [CatpostPage]
})
export class CatpostPageModule {}
