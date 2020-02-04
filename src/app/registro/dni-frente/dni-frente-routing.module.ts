import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DniFrentePage } from './dni-frente.page';

const routes: Routes = [
  {
    path: '',
    component: DniFrentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DniFrentePageRoutingModule {}
