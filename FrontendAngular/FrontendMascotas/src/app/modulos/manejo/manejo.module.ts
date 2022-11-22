import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManejoRoutingModule } from './manejo-routing.module';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrearContactoComponent } from './contactenme/crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './contactenme/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './contactenme/eliminar-contacto/eliminar-contacto.component';
import { BuscarContactoComponent } from './contactenme/buscar-contacto/buscar-contacto.component';


@NgModule({
  declarations: [
    AsignarPlanComponent,
    CrearContactoComponent,
    EditarContactoComponent,
    EliminarContactoComponent,
    BuscarContactoComponent
  ],
  imports: [
    CommonModule,
    ManejoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManejoModule { }
