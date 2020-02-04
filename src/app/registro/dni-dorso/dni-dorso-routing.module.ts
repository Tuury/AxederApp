import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DniDorsoPage } from './dni-dorso.page';

const routes: Routes = [
  {
    path: '',
    component: DniDorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DniDorsoPageRoutingModule {}
