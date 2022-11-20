import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManejoRoutingModule } from './manejo-routing.module';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AsignarPlanComponent
  ],
  imports: [
    CommonModule,
    ManejoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManejoModule { }
