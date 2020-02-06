import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigoConfirmacionPage } from './codigo-confirmacion.page';

const routes: Routes = [
  {
    path: '',
    component: CodigoConfirmacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigoConfirmacionPageRoutingModule {}
