import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { CarritoProducto } from '../InterfazProducto/CarritoProducto';
import { ProductoEnviar } from '../InterfazProducto/claseProductoFinal';
import { CarritoServicio } from '../servicioCliente/agregarCarritoService';

@Component({
  selector: 'app-carrito-productos',
  templateUrl: './carrito-productos.component.html',
  styleUrls: ['./carrito-productos.component.css']
})
export class CarritoProductosComponent implements OnInit {

  constructor(private service: CarritoServicio, private prductoServicio : ProductoService, private router: Router) { }
  productosCarrito: CarritoProducto[] = [];
  producto: ProductoEnviar[] = [];
  ngOnInit(): void {
    this.productosCarrito = this.service.producto;
    this.verificarCarritoLLeno();
  }
  regresarPaginaAnterior(){
    window. history. back();
  }
  
  pagar(){
    this.llenarProductoFinal();
    this.prductoServicio.putProductoCliente(this.producto).subscribe(data=>{
      alert("Poducto comprado con exito");
      this.dirigirsePaginaPrincipal();
      this.vaciarCarito();
    },
    (errorData)=>{
      alert(errorData.error);
    }
    );
  }
  dirigirsePaginaPrincipal(){
    this.router.navigate(['/cliente']);
  }
  vaciarCarito(){
    this.service.vaciarCarrito();
  }
  llenarProductoFinal(){
    for(let product of this.productosCarrito){
      this.producto.push(new ProductoEnviar(product.idProducto,product.cantidad));
    }
  }
  eliminarProductoenCarrito(indice:number){
      this.productosCarrito.splice(indice,1);
      if(this.comprobarCarritoVacio()){
        alert("Carrito de compras vacio");
        this.dirigirsePaginaPrincipal();
      }
  }
  comprobarCarritoVacio(){
    if(this.productosCarrito.length==0)
    return true;
    else  
      return false;      
  }
  verificarCarritoLLeno(){
    if(this.service.producto.length==0){
      alert("Carrito vacio");
      this.router.navigate(['/cliente']);
    }
  }
}
