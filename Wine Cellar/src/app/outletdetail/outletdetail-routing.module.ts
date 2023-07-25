import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletdetailPage } from './outletdetail.page';

const routes: Routes = [
  {
    path: '',
    component: OutletdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OutletdetailPageRoutingModule {}
