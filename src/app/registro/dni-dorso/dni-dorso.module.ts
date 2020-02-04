import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DniDorsoPageRoutingModule } from './dni-dorso-routing.module';

import { DniDorsoPage } from './dni-dorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DniDorsoPageRoutingModule
  ],
  exports: [
    DniDorsoPage
  ],
  declarations: [DniDorsoPage]
})
export class DniDorsoPageModule {}
