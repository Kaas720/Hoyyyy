import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'BuscarUser';
  getUser(): Observable<Usuario>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<Usuario>(this.urlhost + this.urlApi,{headers: header});
  }
}
