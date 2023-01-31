import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPgPageRoutingModule } from './loading-pg-routing.module';

import { LoadingPgPage } from './loading-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPgPageRoutingModule,
  ],
  declarations: [LoadingPgPage]
})
export class LoadingPgPageModule {}
