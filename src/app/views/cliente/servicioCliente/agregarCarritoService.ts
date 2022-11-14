import { CarritoProducto } from "../InterfazProducto/CarritoProducto";

export class CarritoServicio{
    producto : CarritoProducto[] = [];

    mostrarCarrito(){
        
    }
    agregar_producto_carrito(producto : CarritoProducto){
        if(!this.verificar_producto_igual(producto)){
            this.producto.push(producto);
        }
        
    }
    verificar_producto_igual(producto : CarritoProducto){
        for(let i = 0; i < this.producto.length; i++){
            if(producto.nombre == this.producto[i].nombre){
                this.producto[i].cantidad = this.producto[i].cantidad+producto.cantidad;
                return true;
            }
        }
        return false;
    }
    vaciarCarrito(){
        this.producto.splice(0, this.producto.length);
    }
}