import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabPgPage } from './fab-pg.page';

const routes: Routes = [
  {
    path: '',
    component: FabPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabPgPageRoutingModule {}
