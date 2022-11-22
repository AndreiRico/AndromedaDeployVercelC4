import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-eliminar-contacto',
  templateUrl: './eliminar-contacto.component.html',
  styleUrls: ['./eliminar-contacto.component.css']
})
export class EliminarContactoComponent implements OnInit {

  id:string = '';

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectosService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  EliminarProspecto(){
    this.servicioProspecto.EliminarProspecto(this.id).subscribe((datos: ModeloProspecto) => {
      alert("Prospecto eliminado correctamente");
      this.router.navigate(["/manejo/listar-contactos"]);
    }, (error: any) => {
      alert("Error al eliminar el prospecto");
    })
  }

}

//import { FormGroup, Validators, FormBuilder } from '@angular/forms';
