import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSucursal } from '../modelos/sucursal.modelo';
import { SeguridadService } from './seguridad.service';


@Injectable({
  providedIn: 'root'
})
export class SucursalService {
url = `http://localhost:3000`;
token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable <ModeloSucursal[]> {
    return this.http.get<ModeloSucursal[]>(`${this.url}/sucursals`);
  }

  ObtenerRegistrosPorId(id: string): Observable <ModeloSucursal> {
    return this.http.get<ModeloSucursal>(`${this.url}/sucursals/${id}`);
  }

  CrearSucursal(sucursal: ModeloSucursal): Observable <ModeloSucursal>{
    return this.http.post<ModeloSucursal>(`${this.url}/sucursals`,sucursal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarSucursal(sucursal: ModeloSucursal): Observable <ModeloSucursal>{
    return this.http.put<ModeloSucursal>(`${this.url}/sucursals/${sucursal.id}`, sucursal, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarSucursal(id: string): Observable <any> {
    return this.http.delete (`${this.url}/sucursals/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

}
