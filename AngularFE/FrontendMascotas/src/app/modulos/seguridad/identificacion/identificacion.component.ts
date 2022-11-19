import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
const cryptoJS = require("crypto-js")
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'contrasena': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada = cryptoJS.MD5(contrasena);
    alert(usuario)
    alert(`${contrasena}\n${contrasenaCifrada}`)
  }
}

