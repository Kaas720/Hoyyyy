import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteInterface } from '../Interfaz-cliente/persona-usuario';
import { CarritoServicio } from '../servicioCliente/agregarCarritoService';
import { DataClienteServicio } from '../servicioCliente/dataCliente';
@Component({
  selector: 'app-aceptar-compra',
  templateUrl: './aceptar-compra.component.html',
  styleUrls: ['./aceptar-compra.component.css']
})
export class AceptarCompraComponent implements OnInit {

  constructor(private servicioCarrito: CarritoServicio, private ruta: Router, private servicioDataCliente : DataClienteServicio) { }
  selected = 'default';
  operacionSeleccionada = '';
  ngOnInit(): void {
    this.verificarCarritoLLeno();
    this.obtenerCliente();
  }
  regresarPaginaAnterior(){
    window. history. back();
  }
  radioChange(event: any) {
    this.operacionSeleccionada = event.value;
  }
  verificarCarritoLLeno(){
    if(this.servicioCarrito.producto.length==0){
      alert("Carrito vacio");
      this.ruta.navigate(['/cliente']);
    }
  }
  datos_cliente : ClienteInterface[]=[];
  obtenerCliente(){
    this.datos_cliente = this.servicioDataCliente.cliente;
  }

}
