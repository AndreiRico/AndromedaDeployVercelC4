import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManejoRoutingModule } from './manejo-routing.module';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';


@NgModule({
  declarations: [
    AsignarPlanComponent
  ],
  imports: [
    CommonModule,
    ManejoRoutingModule
  ]
})
export class ManejoModule { }
