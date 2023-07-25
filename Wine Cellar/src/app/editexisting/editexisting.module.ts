import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditexistingPageRoutingModule } from './editexisting-routing.module';

import { EditexistingPage } from './editexisting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditexistingPageRoutingModule
  ],
  declarations: [EditexistingPage]
})
export class EditexistingPageModule {}
