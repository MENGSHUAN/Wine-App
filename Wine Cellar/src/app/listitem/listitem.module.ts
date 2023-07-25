import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListitemPageRoutingModule } from './listitem-routing.module';

import { ListitemPage } from './listitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListitemPageRoutingModule
  ],
  declarations: [ListitemPage]
})
export class ListitemPageModule {}
