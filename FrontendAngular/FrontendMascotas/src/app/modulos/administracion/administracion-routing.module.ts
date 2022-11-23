import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSessionGuardianGuard } from 'src/app/guardianes/admin-session-guardian.guard';
import { AssessorSessionGuardianGuard } from 'src/app/guardianes/assessor-session-guardian.guard';
import { ClientSessionGuardianGuard } from 'src/app/guardianes/client-session-guardian.guard';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';

import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';

import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';

import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

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
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'eliminar-usuario/:id',
    component: EliminarUsuarioComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'listar-usuarios',
    component: BuscarUsuarioComponent,
    canActivate: [ValidadorSesionGuard]
  },
  //---------- Productos ------------
  {
    path: 'listar-productos',
    component: BuscarProductoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-producto',
    component: CrearProductoComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'editar-producto/:id',
    component: EditarProductoComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'eliminar-producto/:id',
    component: EliminarProductoComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  //------------ Planes --------------
  {
    path: 'listar-planes',
    component: BuscarPlanComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-plan',
    component: CrearPlanComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'editar-plan/:id',
    component: EditarPlanComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'eliminar-plan/:id',
    component: EliminarPlanComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  //------------ Sucursales --------------
  {
    path: 'sucursales',
    component: CrearSucursalComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'listar-sucursales',
    component: BuscarSucursalComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'editar-sucursal/:id',
    component: EditarSucursalComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  {
    path: 'eliminar-sucursal/:id',
    component: EliminarSucursalComponent,
    canActivate: [AdminSessionGuardianGuard]
  },
  //------------ Mascotas --------------
  {
    path: 'listar-mascotas',
    component: BuscarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-mascota/:id',
    component: EliminarMascotaComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
