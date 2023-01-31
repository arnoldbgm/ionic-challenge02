import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitePgPageRoutingModule } from './infinite-pg-routing.module';

import { InfinitePgPage } from './infinite-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitePgPageRoutingModule
  ],
  declarations: [InfinitePgPage]
})
export class InfinitePgPageModule {}
