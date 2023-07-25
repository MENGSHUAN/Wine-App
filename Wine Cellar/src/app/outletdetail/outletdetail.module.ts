import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OutletdetailPageRoutingModule } from './outletdetail-routing.module';

import { OutletdetailPage } from './outletdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OutletdetailPageRoutingModule
  ],
  declarations: [OutletdetailPage]
})
export class OutletdetailPageModule {}
