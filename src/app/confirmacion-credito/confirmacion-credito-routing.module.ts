import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionCreditoPage } from './confirmacion-credito.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionCreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionCreditoPageRoutingModule {}
