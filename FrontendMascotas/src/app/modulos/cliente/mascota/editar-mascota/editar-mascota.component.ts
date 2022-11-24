import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascotaCliente } from 'src/app/modelos/mascotaCliente.modelo';
import { MascotaClienteService } from 'src/app/servicios/mascota-cliente.service';

declare const M: any;

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit{
  id:string = '';

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

  fgValidador: FormGroup = this.fb.group({
    'nombre': ['',[Validators.required]],
    'foto': ['',[Validators.required]],
    'especie': ['',[Validators.required]],
//FALTA    'plan': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioMascotaCliente: MascotaClienteService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascotaCliente();
    setTimeout(() => {
      const elems = document.querySelectorAll('select');
      const instances = M.FormSelect.init(elems);
    });
  }

  BuscarMascotaCliente(){
    this.servicioMascotaCliente.obtenerRegistrosPorId(this.id).subscribe((datos: ModeloMascotaCliente) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["foto"].setValue(datos.foto);
      this.fgValidador.controls["especie"].setValue(datos.especie);
    });
  }

  EditarMascotaCliente(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let especie = this.fgValidador.controls["especie"].value;
//FALTA  let planId = 
//FALTA  let usuarioId =
    let mc = new ModeloMascotaCliente();

    mc.nombre = nombre;
    mc.foto = foto;
    mc.especie = especie;
    mc.estado = "pendiente";
    mc.comentario = '';
    mc.id = this.id;
//FALTA   mc.planId = planId;
//FALTA   mc.usuarioId = usuarioId;

    this.servicioMascotaCliente.ActualizarMascotaCliente(mc).subscribe((datos: ModeloMascotaCliente) => {
      alert("Mascota actualizada correctamente");
      this.router.navigate(["/cliente/listar-mascotas"]);
    }, (error: any) => {
      alert("Error almacenado la mascota");
    })
  }

}

