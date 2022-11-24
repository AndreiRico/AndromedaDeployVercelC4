import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})
export class BuscarMascotaComponent implements OnInit{

  listadoRegistrosM: ModeloMascota[] = [];

  constructor(private productoMascota: MascotaService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.productoMascota.ObtenerRegistros().subscribe((datos: ModeloMascota[])=>{
      this.listadoRegistrosM = datos;
    })

  }

}
