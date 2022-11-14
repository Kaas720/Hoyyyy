import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';
import { ProductoServicioEmitter } from '../servicioCliente/ProductoServicioEmitter';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  constructor(private ServicioHttpProducto: ProductoService, private emitter : ProductoServicioEmitter) { }
  dataProducto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio : new FormControl('',[Validators.required,Validators.min(1)]),
    cantidadDisponible : new FormControl('',[Validators.required,Validators.min(1), Validators.max(1000)]),
    url: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }
  limpiarFormProducto(){
    this.dataProducto.reset();
  }
  guardarProducto(){
    const producto : ProductoInterface = {
      idProducto : 0,
      descripcion : String(this.dataProducto.value.nombre),
      precio : Number(this.dataProducto.value.precio),
      cantidadDisponible : Number(this.dataProducto.value.cantidadDisponible),
      url : String(this.dataProducto.value.url)
    
    };
    this.ServicioHttpProducto.postProducto(producto).subscribe((data)=>{
      alert("Producto agregado con exito");
      this.emitter.producto.emit(data);
      this.limpiarFormProducto();
    },
    (ErrorData)=>{
      alert("Error al agregar producto");
    })
  }
}

