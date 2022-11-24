import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascotaCliente } from 'src/app/modelos/mascotaCliente.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaClienteService } from 'src/app/servicios/mascota-cliente.service';
import { PlanService } from 'src/app/servicios/plan.service';

declare const M: any;

@Component({
  selector: 'app-crear-mascota',
  templateUrl: './crear-mascota.component.html',
  styleUrls: ['./crear-mascota.component.css']
})

export class CrearMascotaComponent implements OnInit {

  optionsEstado = [
    {name: 'Pendiente', value: 'pendiente'},
    {name: 'Aprobado', value: 'aprobado'},
    {name: 'Rechazado', value: 'rechazado'},
  ];

  optionsEspecie = [
    {name: 'Perro', value: 'perro'},
    {name: 'Gato', value: 'gato'}
  ];

  optionsPlan = [
    {name: 'Basico', value: '63699b5ee32ba919c8cb0b84'},
    {name: 'Clásico', value: '63699c69e32ba919c8cb0b85'},
    {name: 'Global', value: '636dcafedabeef535819febb'},
    {name: 'Platinum', value: '636dce1ff289c148806fa6b9'},
    {name: 'Plan Oro', value: '636eac03fb4a38563cc011e7'},
    {name: 'Diamante', value: '636ebc93fb4a38563cc011e8'},
  ];

  //listadoRegistrosPl : ModeloPlan[];
  //----------------------------------------------
  
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'especie': ['',[Validators.required]],
    'plan': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioMascotaCliente: MascotaClienteService,
    private router: Router,
    private servicioPlan : PlanService) { }

  ngOnInit(): void {
    this.ObtenerListaPlanes();
    setTimeout(() => {
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
    });

  }

  ObtenerListaPlanes(){
    this.servicioPlan.ObtenerRegistros().subscribe((datos: ModeloPlan[]) => {
      //this.listadoRegistrosPl = datos;
    });
    //console.log(this.listadoRegistrosPl)
  }

  GuardarMascotaCliente(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let especie = this.fgValidador.controls["especie"].value;
    let planId = this.fgValidador.controls["plan"].value;
//FALTA  let usuarioId =
    let mc = new ModeloMascotaCliente();

    mc.nombre = nombre;
    mc.foto = foto;
    mc.especie = especie;
    mc.estado = "pendiente";
    mc.comentario = '';
    mc.planId = planId;
//FALTA   mc.usuarioId = usuarioId;

    this.servicioMascotaCliente.CrearMascotaCliente(mc).subscribe((datos: ModeloMascotaCliente) => {
      alert("Mascota almacenada correctamente");
      this.router.navigate(["/cliente/listar-mascotas"]);
    }, (error: any) => {
      alert("Error almacenando la mascota");
    })
  }
}

