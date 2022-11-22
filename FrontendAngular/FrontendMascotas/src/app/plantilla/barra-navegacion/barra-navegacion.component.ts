import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  seInicioSesion: boolean = false;
  sesion: string = '';
  
  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService){}
  ngOnInit(): void{
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.seInicioSesion = datos.estaIdentificado;
  })
  //segun roll
  let datos = this.seguridadServicio.ObtenerInformacionSesion();
  if (datos) {
    if (datos.datos.rol == 'client') {
      this.sesion = 'client'
    }else if(datos.datos.rol == 'assesor'){
      this.sesion = 'assessor'
    }else if(datos.datos.rol == 'admin'){
      this.sesion = 'admin'
    }
  }
  }

}
