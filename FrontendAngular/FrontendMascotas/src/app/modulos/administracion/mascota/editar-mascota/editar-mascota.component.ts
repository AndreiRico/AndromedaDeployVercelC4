import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

declare const M: any;

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
  id:string = '';

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
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });
  
  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
    setTimeout(()=>{
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
      //const instances = M.FormSelect.init(elems, 'options');
    });
  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascota) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["especie"].setValue(datos.especie);
      this.fgValidador.controls["estado"].setValue(datos.estado);
      this.fgValidador.controls["comentario"].setValue(datos.comentario);
    })
  }
  
  EditarMascota(){
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
    m.id = this.id;
  
    this.servicioMascota.ActualizarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota actualizada correctamente");
      this.router.navigate(["/administracion/listar-mascotas"]);
    }, (error: any) => {
      alert("Error actualizando la mascota");
    })
  }
    
}