import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascotaCliente } from '../modelos/mascotaCliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaClienteService {

  url = `http://localhost:3000`;
  token: string = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  obtenerRegistros(): Observable <ModeloMascotaCliente[]> {
    //return this.http.get<ModeloMascotaCliente[]>(`${this.url}/mascotas`);
    return this.http.get<ModeloMascotaCliente[]>(`${this.url}/mascotas?filter[include][]=plan&filter[include][]=usuario`)
  }
  
  obtenerRegistrosPorId(id: string): Observable <ModeloMascotaCliente> {
    return this.http.get<ModeloMascotaCliente>(`${this.url}/mascotas/${id}`);
  }

  CrearMascotaCliente(mascota: ModeloMascotaCliente): Observable<ModeloMascotaCliente>{
    return this.http.post<ModeloMascotaCliente>(`${this.url}/mascotas`, mascota, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarMascotaCliente(mascotaCliente: ModeloMascotaCliente): Observable <ModeloMascotaCliente>{
    return this.http.patch<ModeloMascotaCliente>(`${this.url}/mascotas/${mascotaCliente.id}`, mascotaCliente, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarMascotaCliente(id: string): Observable <any>{
    return this.http.delete(`${this.url}/mascotas/${id}`, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ${this.token}'
      })
    })
  }

}
