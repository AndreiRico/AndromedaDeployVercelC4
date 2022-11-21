import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
/*import { PlanesComponent } from './planes/planes.component';
import { ProductosComponent } from './productos/productos.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { UsuariosComponent } from './usuarios/usuarios.component';*/
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './producto/eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    /*PlanesComponent,
    ProductosComponent,
    SucursalesComponent,
    UsuariosComponent,*/
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent,
    CrearSucursalComponent,
    EditarSucursalComponent,
    EliminarSucursalComponent,
    BuscarSucursalComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
