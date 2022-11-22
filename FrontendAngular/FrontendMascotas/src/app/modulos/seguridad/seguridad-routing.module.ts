import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacionComponent
  },
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent
  },
  {
    path: 'cambio-contrasena',
    component: CambioContrasenaComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
