import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliacionRoutingModule } from './afiliacion-routing.module';
/*import { RegistroMascotasComponent } from './registro-mascotas/registro-mascotas.component';
import { AprobarRechazarComponent } from './aprobar-rechazar/aprobar-rechazar.component';
import { ContactenmeComponent } from './contactenme/contactenme.component';*/
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearContactoComponent } from './contáctenme/crear-contacto/crear-contacto.component';
import { EliminarContactoComponent } from './contáctenme/eliminar-contacto/eliminar-contacto.component';
import { BuscarContactoComponent } from './contáctenme/buscar-contacto/buscar-contacto.component';


@NgModule({
  declarations: [
    /*RegistroMascotasComponent,
    AprobarRechazarComponent,
    ContactenmeComponent,*/
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearContactoComponent,
    EliminarContactoComponent,
    BuscarContactoComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule
  ]
})
export class AfiliacionModule { }
