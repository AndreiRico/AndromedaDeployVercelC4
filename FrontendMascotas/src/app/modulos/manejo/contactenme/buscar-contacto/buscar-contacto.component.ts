import { Component, OnInit } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectosService } from 'src/app/servicios/prospectos.service';

@Component({
  selector: 'app-buscar-contacto',
  templateUrl: './buscar-contacto.component.html',
  styleUrls: ['./buscar-contacto.component.css']
})
export class BuscarContactoComponent implements OnInit {

listadoRegistrosPr: ModeloProspecto[] = [];

  constructor(private prospectoServicio: ProspectosService) { }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  }

  ObtenerListadoProspectos(){
    this.prospectoServicio.ObtenerRegistros().subscribe((datos: ModeloProspecto[]) => {
      this.listadoRegistrosPr = datos;
    })
  }

}
