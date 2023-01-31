import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinitePgPage } from './infinite-pg.page';

const routes: Routes = [
  {
    path: '',
    component: InfinitePgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinitePgPageRoutingModule {}
