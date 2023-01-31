import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPgPage } from './grid-pg.page';

const routes: Routes = [
  {
    path: '',
    component: GridPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridPgPageRoutingModule {}
