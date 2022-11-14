import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Credenciales_cliente } from '../cliente/Interfaz-cliente/credenciales';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'api/Credencial/Login';
  getUsuario(credenciales : Credenciales_cliente){
    return this.http.post(this.urlhost+this.urlApi,credenciales);
  }
}
