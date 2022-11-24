import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare const M: any;

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  options = [
    {name: 'Cliente', value: 'client'},
    {name: 'Asesor', value: 'assessor'},
    {name: 'Admin', value: 'admin'},
  ];

  id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'rol':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'telefono':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
    setTimeout(() => {
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems, 'options');
    });
  }

  BuscarUsuario() {
    this.servicioUsuario.UsuarioRegistrosPorId(this.id).subscribe((datos: ModeloUsuario) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["rol"].setValue(datos.rol);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["cedula"].setValue(datos.cedula);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
    })
  }

  EditarUsuario(){
    let rol = this.fgValidador.controls["rol"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let cedula = this.fgValidador.controls["cedula"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let p = new ModeloUsuario();
    p.rol = rol;
    p.nombre = nombre;
    p.apellido = apellido;
    p.cedula = cedula;
    p.correo = correo;
    p.telefono = telefono;
    p.id = this.id;
    this.servicioUsuario.ActualizarUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario editado correctamente");
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error: any) => {
      alert("Error al editar el usuario");
    })
  }
}
