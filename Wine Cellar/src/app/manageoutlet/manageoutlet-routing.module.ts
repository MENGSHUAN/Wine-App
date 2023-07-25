import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageoutletPage } from './manageoutlet.page';

const routes: Routes = [
  {
    path: '',
    component: ManageoutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageoutletPageRoutingModule {}
