import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitudIngresadaPageRoutingModule } from './solicitud-ingresada-routing.module';

import { SolicitudIngresadaPage } from './solicitud-ingresada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitudIngresadaPageRoutingModule
  ],
  declarations: [SolicitudIngresadaPage]
})
export class SolicitudIngresadaPageModule {}
