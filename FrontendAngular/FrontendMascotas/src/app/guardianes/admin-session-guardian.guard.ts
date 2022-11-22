import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadService } from '../servicios/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdminSessionGuardianGuard implements CanActivate {

  constructor(private servicioSeguridad: SeguridadService,
    private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let datos = this.servicioSeguridad.ObtenerInformacionSesion();
    if(datos){
      if(datos.datos.rol=='admin'){
        //alert("Rol: admin")
        return true;
      }
      return false;
    }else{
      this.router.navigate(['/inicio']);
      return false;
    }
  }
  
}