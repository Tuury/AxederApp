import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },  {
    path: 'credito-preaprobado',
    loadChildren: () => import('./credito-preaprobado/credito-preaprobado.module').then( m => m.CreditoPreaprobadoPageModule)
  },
  {
    path: 'codigo-confirmacion',
    loadChildren: () => import('./codigo-confirmacion/codigo-confirmacion.module').then( m => m.CodigoConfirmacionPageModule)
  },
  {
    path: 'confirmacion-credito',
    loadChildren: () => import('./confirmacion-credito/confirmacion-credito.module').then( m => m.ConfirmacionCreditoPageModule)
  },
  {
    path: 'solicitud-ingresada',
    loadChildren: () => import('./solicitud-ingresada/solicitud-ingresada.module').then( m => m.SolicitudIngresadaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
