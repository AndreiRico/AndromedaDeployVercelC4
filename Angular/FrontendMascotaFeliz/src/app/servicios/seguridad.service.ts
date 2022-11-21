import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';

    //BehaviorSubject permite revisar el comportamiento de una variable específica
  datosUsuarioEnSesion = new BehaviorSubject <ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }

  //Método que verifique la sesión actual
VerificarSesionActual(){
  let datos = this.ObtenerInformacionSesion();
  if(datos){
    this.RefrescarDatosSesion(datos);
  }
}

RefrescarDatosSesion(datos: ModeloIdentificar){
  this.datosUsuarioEnSesion.next(datos);
}

ObtenerDatosUsuarioEnSesion(){
  return this.datosUsuarioEnSesion.asObservable();
}

Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
  return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`, {
    usuario: usuario,
    contrasena: clave
  },{
    headers: new HttpHeaders({

    })
  })
}

AlmacenarSesion(datos: ModeloIdentificar){
  datos.estaIdentificado = true;
  let stringDatos = JSON.stringify(datos);
    //almacenamiento en localStorage es almacenar en una BD del navegador
  localStorage.setItem("datosSesion", stringDatos);
  this.RefrescarDatosSesion(datos);
}

ObtenerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos
  }else {
    return null;
  }
}
  // cerrar sesion: eliminar el registro en el localStorage
EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.RefrescarDatosSesion(new ModeloIdentificar());
}

SeHaIniciadoSesion(){
  let datosString = localStorage.getItem("datosSesion");
  return datosString;
}

ObtenerToken(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos.tk;
  }else{
    return '';
  }
}

}
