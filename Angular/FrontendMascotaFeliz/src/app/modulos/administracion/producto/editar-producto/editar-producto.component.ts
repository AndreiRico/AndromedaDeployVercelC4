import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

id: string = '';

  fgValidador: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){           //el id que le pasamos es el que ya hemos leido desde la url
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloProducto) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["tipo"].setValue(datos.tipo);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidador.controls["precio"].setValue(datos.precio);
    }); 
  }

  EditarProducto(){
    let tipo = this.fgValidador.controls["tipo"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let precio = parseInt(this.fgValidador.controls["precio"].value);

    let p = new ModeloProducto();
    p.id = this.id;
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;

    this.servicioProducto.ActualizarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto actualizado correctamente");
      this.router.navigate(["/administracion/listar-productos"]);
    }, (error: any) => {
      alert("Error actualizando el producto");
    })
  }

}


