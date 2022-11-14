import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InicioSesionTareas } from '../servicioHttpTareas/inicio-sesion.service';
import { CredencialesTarea } from './InterfacesYClases/credenciales';

@Component({
  selector: 'app-loginusuario-tarea',
  templateUrl: './loginusuario-tarea.component.html',
  styleUrls: ['./loginusuario-tarea.component.css']
})
export class LoginusuarioTareaComponent implements OnInit {

  
  constructor(private router: Router, private servicio:InicioSesionTareas) { }

  ngOnInit() {
  }
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })
  onSubmit(){
    let usuario = String(this.usuarioLogin.value.usuario);
    let password = String(this.usuarioLogin.value.password);
    if(this.validarEntradas(usuario,password)){
      this.inicioSession();
    }
    else{
      alert("Campos invalidos!!");
    }
  }
  inicioSession(){
    this.servicio.getUsuario(this.usuarioLogin.value as CredencialesTarea).subscribe((data : any)=>{
      localStorage.setItem('token_value',data)
      this.router.navigate(['/tarea']);
    },
    (errorData)=>{
      alert("Usuario no registrado");
    });
    
  }
  validarEntradas(correo:string , password:string){
    if(correo == null  || password == null)
      return false;
    else
      return true;
  }
}

