import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DniFrentePageRoutingModule } from './dni-frente-routing.module';

import { DniFrentePage } from './dni-frente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DniFrentePageRoutingModule
  ],
  exports: [
    DniFrentePage
  ],
  declarations: [DniFrentePage]
})
export class DniFrentePageModule {}
