import { Component, OnInit } from '@angular/core';
import { ModeloMascotaCliente } from 'src/app/modelos/mascotaCliente.modelo';
import { MascotaClienteService } from 'src/app/servicios/mascota-cliente.service';

@Component({
  selector: 'app-buscar-mascota',
  templateUrl: './buscar-mascota.component.html',
  styleUrls: ['./buscar-mascota.component.css']
})

export class BuscarMascotaComponent implements OnInit {
  
  Id: string = '637d3d803e04ac4ab0d89db1';
  
  listadoRegistros: ModeloMascotaCliente[] = [];

  constructor(private mascotaCliente: MascotaClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaCliente.obtenerRegistrosPorUsuarioId(this.Id).subscribe((datos: ModeloMascotaCliente[]) => {
      this.listadoRegistros = datos;
    })
  }

/*
  listadoRegistros: ModeloMascotaCliente[] = [];

  constructor(private mascotaCliente: MascotaClienteService) { }

  ngOnInit(): void {
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas(){
    this.mascotaCliente.obtenerRegistros().subscribe((datos: ModeloMascotaCliente[]) => {
      this.listadoRegistros = datos;
    })
  }
  */
}


