import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardPgPageRoutingModule } from './card-pg-routing.module';

import { CardPgPage } from './card-pg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPgPageRoutingModule
  ],
  declarations: [CardPgPage]
})
export class CardPgPageModule {}
