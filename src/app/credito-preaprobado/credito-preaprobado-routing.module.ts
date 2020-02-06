import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditoPreaprobadoPage } from './credito-preaprobado.page';

const routes: Routes = [
  {
    path: '',
    component: CreditoPreaprobadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditoPreaprobadoPageRoutingModule {}
