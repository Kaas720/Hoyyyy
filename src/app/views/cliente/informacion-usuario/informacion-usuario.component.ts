import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteServiceService } from '../../ServiciosHttp/cliente-service.service';
import { ClienteInterface } from '../Interfaz-cliente/persona-usuario';
import { DataClienteServicio } from '../servicioCliente/dataCliente';
import { MensajeInterface} from '../Interfaz-cliente/mensajesRespuestas'

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.css']
})
export class InformacionUsuarioComponent implements OnInit {

  constructor(private servicioDataCliente : DataClienteServicio, private servicioHttpCliente: ClienteServiceService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }
  datos_cliente : ClienteInterface[] = []
  dataUser = new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellido: new FormControl('',Validators.required),
    telefono: new FormControl('',[Validators.required,Validators.pattern(/^[0-9]{10}$/g)]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    dDomicilio: new FormControl('',Validators.required),
    dTrabajo: new FormControl('',Validators.required)
  })
  RegresarPaginaAnterior(){
    if(this.verificarSiexisteCambios()){
      window. history. back();
    }
    else{
      let respuesta = confirm("Seguro que desea salir sus cambios se perderan");
      if(respuesta)
        window. history. back();
    }
    
  }
  verificarSiexisteCambios(){
    if(JSON.stringify(this.datos_cliente) === JSON.stringify(this.servicioDataCliente.cliente))
      return true;
    else
     return false;
  }
  
  obtenerCliente(){
    this.datos_cliente = this.servicioDataCliente.cliente.map(object => ({ ...object }));
  }
  mensajeRespuesta!: MensajeInterface;
  EnviarDatos(){
    this.servicioHttpCliente.putDataCliente(this.datos_cliente[0]).subscribe((data) : void=>{
        alert(data.mensajeRetorno);
        this.guardarServicioCliente();
    },
    err=>{
      this.mensajeRespuesta = err.error;
      alert(this.mensajeRespuesta.mensajeRetorno);
    })
  }
  guardarServicioCliente(){
    this.servicioDataCliente.cliente = this.datos_cliente.map(object => ({ ...object }));
  }
}
