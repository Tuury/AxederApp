import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditoPreaprobadoPageRoutingModule } from './credito-preaprobado-routing.module';

import { CreditoPreaprobadoPage } from './credito-preaprobado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditoPreaprobadoPageRoutingModule
  ],
  declarations: [CreditoPreaprobadoPage]
})
export class CreditoPreaprobadoPageModule {}
