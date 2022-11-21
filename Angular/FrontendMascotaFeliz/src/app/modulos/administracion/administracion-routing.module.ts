import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';

import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';

import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';

import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  //----------- Plan ------------
  {   
    path: 'crear-plan',
    component: CrearPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'buscar-plan',
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-plan',
    component: EliminarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //------------ Producto -----------
  {
    path: 'buscar-producto',
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
  {
    path: 'eliminar-producto',
    component: EliminarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    //canActivate: [ValidadorSesionGuard]
  },
  //------------ Sucursal ------------
  {
    path: 'buscar-sucursal',
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
  },
  //------------- Usuario ------------
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
