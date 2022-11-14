import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { min } from 'rxjs';
import { Credenciales_cliente } from '../cliente/Interfaz-cliente/credenciales';
import { InicioSesionService } from '../ServiciosHttp/inicio-sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private servicio:InicioSesionService) { }

  ngOnInit() {
  }
  usuarioLogin = new FormGroup({
    usuario: new FormControl('',[Validators.required,Validators.minLength(3
      )]),
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
    this.servicio.getUsuario(this.usuarioLogin.value as Credenciales_cliente).subscribe((data : any)=>{
      localStorage.setItem('token_value',data)
      this.router.navigate(['/cliente']);
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
