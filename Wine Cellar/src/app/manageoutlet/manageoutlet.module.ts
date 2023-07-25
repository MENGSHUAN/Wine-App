import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageoutletPageRoutingModule } from './manageoutlet-routing.module';

import { ManageoutletPage } from './manageoutlet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageoutletPageRoutingModule
  ],
  declarations: [ManageoutletPage]
})
export class ManageoutletPageModule {}
