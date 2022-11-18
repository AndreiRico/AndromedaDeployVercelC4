import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';


@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioContrasenaComponent,
    RecuperarContrasenaComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
