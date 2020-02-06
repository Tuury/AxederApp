import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigoConfirmacionPageRoutingModule } from './codigo-confirmacion-routing.module';

import { CodigoConfirmacionPage } from './codigo-confirmacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigoConfirmacionPageRoutingModule
  ],
  declarations: [CodigoConfirmacionPage]
})
export class CodigoConfirmacionPageModule {}
