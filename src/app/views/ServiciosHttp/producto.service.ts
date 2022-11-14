import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductoEnviar } from '../cliente/InterfazProducto/claseProductoFinal';
import { ProductoInterface } from '../cliente/InterfazProducto/ProductoInterfaz';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http : HttpClient) { }
  private urlhost: string = environment.point;
  private urlApi: string = 'api/Productoes';
  private urlPut: string = 'editar';
  getProducto(): Observable<ProductoInterface[]>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.get<ProductoInterface[]>(this.urlhost + this.urlApi,{headers: header});
  }
  putProductoCliente( product : ProductoEnviar[]){
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.put(this.urlhost + this.urlPut,product,{headers: header});
  }
  putProducto(producto:ProductoInterface){
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.put(this.urlhost + this.urlApi,producto,{headers: header});
  }
  deleteProducto(id:number){
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.delete(this.urlhost + this.urlApi+"/"+id,{headers: header});
  }
  postProducto(producto:ProductoInterface): Observable<ProductoInterface>{
    let token = localStorage.getItem('token_value');
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+token
    })
    return this.http.post<ProductoInterface>(this.urlhost + this.urlApi+"/",producto,{headers: header});
  }
}
