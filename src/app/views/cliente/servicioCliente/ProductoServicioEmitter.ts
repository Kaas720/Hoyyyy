import { EventEmitter } from "@angular/core";
import { ProductoInterface } from "../InterfazProducto/ProductoInterfaz";

export class ProductoServicioEmitter{
    producto = new EventEmitter<ProductoInterface>();
}