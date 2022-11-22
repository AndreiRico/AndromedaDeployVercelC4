import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

import { BuscarContactoComponent } from './contactenme/buscar-contacto/buscar-contacto.component';
import { CrearContactoComponent } from './contactenme/crear-contacto/crear-contacto.component';
import { EditarContactoComponent } from './contactenme/editar-contacto/editar-contacto.component';
import { EliminarContactoComponent } from './contactenme/eliminar-contacto/eliminar-contacto.component';



const routes: Routes = [
  //----------- Contáctenme ------------
  {
    path: 'listar-contactos',
    component: BuscarContactoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-contacto',
    component: CrearContactoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-contacto',
    component: BuscarContactoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-contacto/:id',
    component: EditarContactoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-contacto/:id',
    component: EliminarContactoComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManejoRoutingModule { }
