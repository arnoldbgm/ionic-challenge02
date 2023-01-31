import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPgPage } from './alert-pg.page';

const routes: Routes = [
  {
    path: '',
    component: AlertPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertPgPageRoutingModule {}
