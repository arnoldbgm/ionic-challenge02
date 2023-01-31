import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPgPageRoutingModule } from './grid-pg-routing.module';

import { GridPgPage } from './grid-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPgPageRoutingModule
  ],
  declarations: [GridPgPage]
})
export class GridPgPageModule {}
