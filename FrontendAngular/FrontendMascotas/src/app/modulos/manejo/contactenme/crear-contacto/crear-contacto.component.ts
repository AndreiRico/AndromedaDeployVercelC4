import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]    
  })

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectosService,
    private router: Router) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  GuardarProspecto(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let celular = this.fgValidador.controls["celular"].value;
    let comentario = this.fgValidador.controls["comentario"].value;

    let pr = new ModeloProspecto();
    pr.nombre = nombre;
    pr.apellido = apellido;
    pr.correo = correo;
    pr.celular = celular;
    pr.comentario = comentario;

    this.servicioProspecto.CrearProspecto(pr).subscribe((datos: ModeloProspecto) => {
      alert("Prospecto almacenando correctamente.");
      this.router.navigate(["manejo/listar-contactos"]);
    }, (error: any) => {
      alert("Error almacenando el prospecto.");
    })
  }
}
