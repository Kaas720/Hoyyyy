import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  
  constructor(private ServicioHttpProducto: ProductoService,private dialogRef: MatDialogRef<EditarProductoComponent>,@Inject(MAT_DIALOG_DATA) public data: ProductoInterface) { }
  dataProducto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio : new FormControl('',[Validators.required,Validators.min(1)]),
    cantidadDisponible : new FormControl('',[Validators.required,Validators.min(1), Validators.max(1000)]),
    url: new FormControl('',Validators.required)
  })
  productCopy!: ProductoInterface;
  ngOnInit(): void {
    this.productCopy = this.data;
  }
  limpiarFormProducto(){
    this.dataProducto.reset();
  }
  editarProducto(){
    this.ServicioHttpProducto.putProducto(this.productCopy).subscribe(data=>{
      alert("Producto actualizado con exito");
      this.limpiarFormProducto();
      this.dialogRef.close(this.productCopy);
    },
    (ErrorData)=>{
      alert("Error al editar el producto");
    });
  }
  cerrarDialogoEditar(){
    this.dialogRef.close();
  }
  comprobarIgualdad(){
    this.objectoClonar();
    if(JSON.stringify(this.productCopy) == JSON.stringify(this.data))
      return true;
    else
      return false;
  }
  objectoClonar(){
    this.productCopy = {
      idProducto : this.data.idProducto,
      descripcion : String(this.dataProducto.value.nombre),
      precio : Number(this.dataProducto.value.precio),
      cantidadDisponible : Number(this.dataProducto.value.cantidadDisponible),
      url : String(this.dataProducto.value.url)
    }
  }

}
