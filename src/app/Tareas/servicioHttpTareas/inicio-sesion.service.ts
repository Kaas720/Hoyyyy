import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CredencialesTarea } from '../loginusuario-tarea/InterfacesYClases/credenciales';


@Injectable({
  providedIn: 'root'
})
export class InicioSesionTareas {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'api/Credencial/Login';
  getUsuario(credenciales : CredencialesTarea){
    return this.http.post(this.urlhost+this.urlApi,credenciales);
  }
}
