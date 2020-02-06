import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudIngresadaPage } from './solicitud-ingresada.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudIngresadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudIngresadaPageRoutingModule {}
