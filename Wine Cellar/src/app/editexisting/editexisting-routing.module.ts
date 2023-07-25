import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditexistingPage } from './editexisting.page';

const routes: Routes = [
  {
    path: '',
    component: EditexistingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditexistingPageRoutingModule {}
