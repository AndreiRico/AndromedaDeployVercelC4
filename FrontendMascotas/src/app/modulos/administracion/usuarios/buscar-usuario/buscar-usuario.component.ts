import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';
declare const M: any;

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
    setTimeout(()=>{
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });
  }

  ObtenerListaProductos(){
    this.usuarioServicio.UsuarioRegistros().subscribe((datos: ModeloUsuario[]) => {
      this.listadoRegistros = datos;
    })
  }

 

}