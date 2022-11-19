import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacionComponent
  },
  {
    path: 'cambio-contrasena',
    component: CambioContrasenaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
