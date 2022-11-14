import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from '../../ServiciosHttp/cliente-service.service';
import { DataClienteServicio } from '../servicioCliente/dataCliente';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  constructor(private rutas : Router, private dataClienteServicio : DataClienteServicio, private clienteServiceService : ClienteServiceService) { }

  ngOnInit(): void {
    this.comprobarClienteregistrado();
    this.llenarDataCliente();
  }
  comprobarClienteregistrado(){
    if(localStorage.getItem('token_value')== null){
      alert("Cliente no inicio Sesion");
      this.rutas.navigate(['']);
    }
  }
  llenarDataCliente(){
    this.clienteServiceService.getProducto().subscribe(data=>{
      this.dataClienteServicio.agregarDataCliente(data);
    },
    (ErrorData)=>{
      alert("Problemas al obtener los datos del cliente");
    })
    
  }
  

}
