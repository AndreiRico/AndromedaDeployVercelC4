import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit{

  listadoRegistros: ModeloUsuario[] = [];

  constructor(private usuarioServicio: UsuarioService){}
  ngOnInit(): void {
    this.ObtenerListaProductos();
  }

  ObtenerListaProductos(){
    this.usuarioServicio.UsuarioRegistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadoRegistros = datos;
    })
  }

}