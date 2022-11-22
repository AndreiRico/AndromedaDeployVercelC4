import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare const M:any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  implements OnInit{

  fgValidador: FormGroup = this.fb.group({
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

  }
  

  GuardarUsuario(){
    let rol = "client"
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
      alert("Registro exitoso, contraseña enviada por correo y sms");
      this.router.navigate(["/seguridad/identificar"]);
    }, (error: any) => {
      alert("Error al registrar el usuario");
    })
  }
  
}
