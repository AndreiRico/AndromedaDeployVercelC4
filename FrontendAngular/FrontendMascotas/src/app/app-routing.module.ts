  import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { VisionEmpresarialComponent } from './plantilla/vision-empresarial/vision-empresarial.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "about",
    component: VisionEmpresarialComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: 'manejo',
    loadChildren: () => import("./modulos/manejo/manejo.module").then(x => x.ManejoModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
