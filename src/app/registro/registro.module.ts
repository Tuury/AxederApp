import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RegistroPageRoutingModule} from './registro-routing.module';

import {RegistroPage} from './registro.page';
import {DniPageModule} from './dni/dni.module';
import {PhonePageModule} from './phone/phone.module';
import {RegistrarPageModule} from './registrar/registrar.module';
import {SmsCodePage} from './sms-code/sms-code.page';
import {DniFrentePage} from './dni-frente/dni-frente.page';
import {DniDorsoPage} from './dni-dorso/dni-dorso.page';
import {FotoPerfilPage} from './foto-perfil/foto-perfil.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegistroPageRoutingModule,
        DniPageModule,
        PhonePageModule,
        RegistrarPageModule,
    ],
    declarations: [RegistroPage, SmsCodePage, DniFrentePage, DniDorsoPage, FotoPerfilPage]
})
export class RegistroPageModule {
}
