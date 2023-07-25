import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditoutletPageRoutingModule } from './editoutlet-routing.module';

import { EditoutletPage } from './editoutlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditoutletPageRoutingModule
  ],
  declarations: [EditoutletPage]
})
export class EditoutletPageModule {}
