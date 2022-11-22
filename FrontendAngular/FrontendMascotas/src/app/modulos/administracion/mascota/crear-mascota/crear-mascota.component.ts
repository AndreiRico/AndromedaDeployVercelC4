import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

declare const M: any;

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})
export class CrearMascotaComponent implements OnInit {

  optionsEstado = [
    {name: 'Pendiente', value: 'pendiente'},
    {name: 'Aprobado', value: 'aprobado'},
    {name: 'Rechazado', value: 'rechazado'},
  ];

  optionsEspecie = [
    {name: 'Perro', value: 'perro'},
    {name: 'Gato', value: 'gato'}
  ];

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router) { }

  ngOnInit(): void {
    setTimeout(()=>{
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
    });

  }

  GuardarMascota(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let comentario = this.fgValidador.controls["comentario"].value;
    let m = new ModeloMascota();

    m.nombre = nombre;
    m.foto = foto;
    m.especie = especie;
    m.estado = estado;
    m.comentario = comentario;

    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota almacenada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    }, (error: any) => {
      alert("Error almacenando la mascota");
    })
  }
}
