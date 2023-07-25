import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditoutletPage } from './editoutlet.page';

const routes: Routes = [
  {
    path: '',
    component: EditoutletPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditoutletPageRoutingModule {}
