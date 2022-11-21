import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { EditarAfiliacionComponent } from './aprobarAfiliacion/editar-afiliacion/editar-afiliacion.component';
import { BuscarAfiliacionComponent } from './aprobarAfiliacion/buscar-afiliacion/buscar-afiliacion.component';
import { CrearAfiliacionComponent } from './aprobarAfiliacion/crear-afiliacion/crear-afiliacion.component';
import { EliminarAfiliacionComponent } from './aprobarAfiliacion/eliminar-afiliacion/eliminar-afiliacion.component';


@NgModule({
  declarations: [
    EditarAfiliacionComponent,
    BuscarAfiliacionComponent,
    CrearAfiliacionComponent,
    EliminarAfiliacionComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
