import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardPgPage } from './card-pg.page';

const routes: Routes = [
  {
    path: '',
    component: CardPgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardPgPageRoutingModule {}
