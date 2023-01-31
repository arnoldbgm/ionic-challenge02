import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabPgPageRoutingModule } from './fab-pg-routing.module';

import { FabPgPage } from './fab-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabPgPageRoutingModule
  ],
  declarations: [FabPgPage]
})
export class FabPgPageModule {}
