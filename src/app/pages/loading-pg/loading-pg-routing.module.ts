import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingPgPage } from './loading-pg.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingPgPageRoutingModule {}
