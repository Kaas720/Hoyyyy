import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TareaInterfaz } from '../Interfaces/InterfazTarea';
import { Mensaje } from '../Interfaces/mensajeRespuesta';
import { tareaRetorno } from '../Interfaces/Retornotarea';
import { TareaEnviarDato } from '../Interfaces/TareaEnviar';
import { TipoTarea } from '../Interfaces/tipo_Tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasHttpService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'buscartareas';
  private urlTipoTareas: string = 'buscarTiposTareas';
  private enviarDatosUrl : string = 'enviarDatos';
  private delateTareasUrl : string = 'Eliminar';
  getTareas(id:number): Observable<tareaRetorno>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<tareaRetorno>(this.urlhost + this.urlApi+"/"+id,{headers: header});
  }
  getTiposTareas(): Observable<TipoTarea[]>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<TipoTarea[]>(this.urlhost + this.urlTipoTareas,{headers: header});
  }
  enviarDatos(tarea:TareaEnviarDato) : Observable<Mensaje>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.post<Mensaje>(this.urlhost + this.enviarDatosUrl,tarea,{headers: header});
  }
  delateTareas(id:number): Observable<tareaRetorno>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    alert(id);
    return this.http.delete<tareaRetorno>(this.urlhost + this.delateTareasUrl+"/"+id,{headers: header});
    
  }
}
