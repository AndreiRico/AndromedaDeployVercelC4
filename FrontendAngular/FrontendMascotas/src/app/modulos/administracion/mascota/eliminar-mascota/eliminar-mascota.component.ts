import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';


@Component({
  selector: 'app-eliminar-mascota',
  templateUrl: './eliminar-mascota.component.html',
  styleUrls: ['./eliminar-mascota.component.css']
})
export class EliminarMascotaComponent  implements OnInit {

  id: string = '';

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) {
    }
    
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }

  EliminarMascota(){
    this.servicioMascota.EliminarMascota(this.id).subscribe((datos: ModeloMascota) => {
      alert("Mascota eliminada correctamente.");
      this.router.navigate(["/administracion/listar-mascotas"]);
    }, (error: any) => {
      alert("Error al eliminar la mascota.");
    })
  }

}