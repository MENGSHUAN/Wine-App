import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeofferPageRoutingModule } from './makeoffer-routing.module';

import { MakeofferPage } from './makeoffer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeofferPageRoutingModule
  ],
  declarations: [MakeofferPage]
})
export class MakeofferPageModule {}
