import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeofferPage } from './makeoffer.page';

const routes: Routes = [
  {
    path: '',
    component: MakeofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeofferPageRoutingModule {}
