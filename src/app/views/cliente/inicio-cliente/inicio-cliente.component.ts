import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { CarritoProducto } from '../InterfazProducto/CarritoProducto';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';
import { CarritoServicio } from '../servicioCliente/agregarCarritoService';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent implements OnInit {

  constructor(private service: CarritoServicio, private servicioProducto : ProductoService) { }
  productosCarritos : CarritoProducto[] = this.service.producto;
  producto: ProductoInterface[] = [];
  productoSeleccionado = this.service.producto.length;
  ngOnInit(): void {
   this.obtenerProductos();
  }
  agrgarAccarito(id:number,nombreProducto: string, cantidad: number, precio: number,idCantidad: number , cantidaddisponible: number) {
    this.disminuirCantidad(idCantidad, cantidaddisponible,cantidad);
    let person = new CarritoProducto(id,nombreProducto, cantidad, precio);
    this.service.agregar_producto_carrito(person);
    this.actualizarCarritosButton(); 
  } 
  obtenerProductos(){
    this.servicioProducto.getProducto().subscribe(data=>{
      this.producto = data;
      this.disminuirProductosInicio();
    });
  }
  disminuirCantidad(idCantidad: number , cantidaddisponible: number, cantidadComprada: number){
    this.producto[idCantidad].cantidadDisponible = cantidaddisponible-cantidadComprada;
  }
  disminuirProductosInicio(){
    if(this.productosCarritos.length!=0)
      for(let productosCarritos of this.productosCarritos){
        for(let productos of this.producto){
          if(productos.idProducto == productosCarritos.idProducto)
            productos.cantidadDisponible = productos.cantidadDisponible - productosCarritos.cantidad
        }
      }
  }
  actualizarCarritosButton(){
    this.productoSeleccionado = this.service.producto.length;
  }
}
