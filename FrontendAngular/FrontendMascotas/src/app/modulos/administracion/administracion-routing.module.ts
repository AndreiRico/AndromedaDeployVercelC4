import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';

import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';

import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';

import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-usuario',
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-usuarios',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //---------- Productos ------------
  {
    path: 'productos',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //------------ Planes --------------
  {
    path: 'planes',
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-planes',
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-plan',
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
   //------------ Sucursales --------------
   {
    path: 'sucursales',
    component: CrearSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-sucursales',
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
