import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-eliminar-plan',
  templateUrl: './eliminar-plan.component.html',
  styleUrls: ['./eliminar-plan.component.css']
})
export class EliminarPlanComponent implements OnInit{

  id: string = '';

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanService,
    private router: Router,
    private route: ActivatedRoute) {
    }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  EliminarPlan(){
    this.servicioPlan.EliminarPlan(this.id).subscribe((datos: ModeloPlan) => {
      alert("Plan eliminado correctamente.");
      this.router.navigate(["/administracion/listar-planes"]);
    }, (error: any) => {
      alert("Error al eliminar el plan.");
    })
  }
}

