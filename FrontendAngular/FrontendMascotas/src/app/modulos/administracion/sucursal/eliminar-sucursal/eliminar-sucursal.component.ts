import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.css']
})
export class EliminarSucursalComponent implements OnInit {

  id: string = '';

  constructor(private fb: FormBuilder, 
    private servicioSucursal: SucursalService,
    private router: Router,
    private route: ActivatedRoute) {
    }

    ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
    }
  
  EliminarSucursal(){
    this.servicioSucursal.EliminarSucursal(this.id).subscribe((datos: ModeloSucursal) => {
      alert("Sucursal eliminada correctamente");
      this.router.navigate(["/administracion/listar-sucursales"]);
    }, (error: any) => {
      alert("Error al eliminar la sucursal");
    })
  }

}