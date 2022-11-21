import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.css']
})
export class CerrarSesionComponent implements OnInit {

  constructor(private servicioSeguridad: SeguridadService,
    private router: Router) { }
        //cuando se carga el componente va a ir al servicio de seguridad y en el método de EliminarInformacionSesion borra
        //lo del localStorage
  ngOnInit(): void {          
    this.servicioSeguridad.EliminarInformacionSesion();
    this.router.navigate(['/inicio'])
  }

}
