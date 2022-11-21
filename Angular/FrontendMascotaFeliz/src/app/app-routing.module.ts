import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",              //ruta hacia el inicio
    component: InicioComponent
  },
  {
    path:"",                   //ruta vacia que lo lleve hacia el servidor
    pathMatch:'full',
    redirectTo: '/inicio'
  },
    //estrategia de lazyloading
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: 'afiliacion',
    loadChildren: () => import("./modulos/afiliacion/afiliacion.module").then(x => x.AfiliacionModule)
  },
  {
    path: 'asesor',
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
