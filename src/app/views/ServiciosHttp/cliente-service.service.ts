import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MensajeInterface } from '../cliente/Interfaz-cliente/mensajesRespuestas';
import { ClienteInterface } from '../cliente/Interfaz-cliente/persona-usuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'BuscarUser';
  private urlPut: string = 'api/Personas/spEditar';
  getProducto(): Observable<ClienteInterface>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<ClienteInterface>(this.urlhost + this.urlApi,{headers: header});
  }
  putDataCliente(client : ClienteInterface): Observable<MensajeInterface>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.put<MensajeInterface>(this.urlhost + this.urlPut,client,{headers: header});
  }
}
