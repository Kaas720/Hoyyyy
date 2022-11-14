import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';

@Component({
  selector: 'app-crud-producto-cuerpo',
  templateUrl: './crud-producto-cuerpo.component.html',
  styleUrls: ['./crud-producto-cuerpo.component.css']
})
export class CrudProductoCuerpoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agregarProducto(event : Event){
    alert("LOAA");
  }
}
