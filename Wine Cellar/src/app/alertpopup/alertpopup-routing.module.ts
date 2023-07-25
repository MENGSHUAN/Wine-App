import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertpopupPage } from './alertpopup.page';

const routes: Routes = [
  {
    path: '',
    component: AlertpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertpopupPageRoutingModule {}
