import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
declare const M:any;
@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  seInicioSesion: boolean = false;
  sesion: boolean = false;
  datos: any;
  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService){}
  ngOnInit(): void{
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos: ModeloIdentificar) => {
      this.seInicioSesion = datos.estaIdentificado;
  })
  //segun roll
  this.datos = this.seguridadServicio.ObtenerInformacionSesion();
  if (this.datos) {
    if (this.datos.datos.rol == 'client') {
      this.sesion = false;
    }else if(this.datos.datos.rol == 'assesor'){
      this.sesion = true;
    }else if(this.datos.datos.rol == 'admin'){
      this.sesion = true;
    }
  }
  M.AutoInit();
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  }

}
