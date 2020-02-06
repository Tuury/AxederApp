import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionCreditoPageRoutingModule } from './confirmacion-credito-routing.module';

import { ConfirmacionCreditoPage } from './confirmacion-credito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionCreditoPageRoutingModule
  ],
  declarations: [ConfirmacionCreditoPage]
})
export class ConfirmacionCreditoPageModule {}
