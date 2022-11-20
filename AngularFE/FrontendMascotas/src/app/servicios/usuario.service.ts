import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:3000';
  token = '';

  constructor(private http: HttpClient, private seguridaServicio: SeguridadService) {
    this.token = this.seguridaServicio.ObtenerToken();
  }

  UsuarioRegistros(): Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`)
  }
}
