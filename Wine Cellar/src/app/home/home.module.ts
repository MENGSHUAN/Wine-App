import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 10,
      innerStrokeWidth: 5,
      outerStrokeColor: "#bbcefb",
      animationDuration: 300,
      innerStrokeColor: '#ffffff'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
