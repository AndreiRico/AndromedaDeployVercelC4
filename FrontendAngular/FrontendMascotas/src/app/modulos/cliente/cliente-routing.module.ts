import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';

const routes: Routes = [
  //------------ Mascota ------------
  {
    path: 'listar-mascotas',
    component: BuscarMascotaComponent
  },
  {
    path: 'crear-mascota',
    component: CrearMascotaComponent
  },
  {
    path: 'buscar-mascota',
    component: BuscarMascotaComponent
  },
  {
    path: 'editar-mascota/:id',
    component: EditarMascotaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
