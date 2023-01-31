import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPgPageRoutingModule } from './alert-pg-routing.module';

import { AlertPgPage } from './alert-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPgPageRoutingModule
  ],
  declarations: [AlertPgPage]
})
export class AlertPgPageModule {}
