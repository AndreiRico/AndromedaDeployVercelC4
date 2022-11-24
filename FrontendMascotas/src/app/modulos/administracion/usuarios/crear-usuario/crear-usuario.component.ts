import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare const M: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit{
  options = [
    {name: 'Cliente', value: 'client'},
    {name: 'Asesor', value: 'assessor'},
    {name: 'Admin', value: 'admin'},
  ];

  fgValidador: FormGroup = this.fb.group({
    'rol':['', [Validators.required]],
    'nombre':['', [Validators.required]],
    'apellido':['', [Validators.required]],
    'cedula':['', [Validators.required]],
    'correo':['', [Validators.required]],
    'telefono':['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router){
    }

  ngOnInit(): void {
    setTimeout(()=>{
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems, 'options');
    });
  }
  

  GuardarUsuario(){
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
    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario creado correctamente");
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error: any) => {
      alert("Error creando el usuario");
    })
  }
  
}
