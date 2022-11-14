import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from '../../ServiciosHttp/producto.service';
import { EditarProductoComponent } from '../editar-producto/editar-producto.component';
import { ProductoInterface } from '../InterfazProducto/ProductoInterfaz';
import { ProductoServicioEmitter } from '../servicioCliente/ProductoServicioEmitter';

@Component({
  selector: 'app-tabla-listado-product',
  templateUrl: './tabla-listado-product.component.html',
  styleUrls: ['./tabla-listado-product.component.css']
})

export class TablaListadoProductComponent implements OnInit, AfterViewInit {
  constructor(private ServicioProducto : ProductoService,private dialog:MatDialog, private emitter : ProductoServicioEmitter) { 
    emitter.producto.subscribe(data=>{
      this.cargarNuevoProducto(data);
    })
  }
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'cantidadDisponible','opciones'];
  producto : ProductoInterface[] = [];
  dataSource:any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  productoEditar!: ProductoInterface;
  ngAfterViewInit() {
    this.cargarProducto();
  }
  ngOnInit(): void {
   
  }
  cargarProducto(){
    this.ServicioProducto.getProducto().subscribe(data=>{
      this.producto = data;
      this.actualizarDatosTabla();
    },
    (ErrorData)=>{
      alert("Error al cargar los productos");
    });
  }
  eliminarProducto(id:number){
    this.ServicioProducto.deleteProducto(id).subscribe(data=>{
        this.eliminarProductoAlmacenado(id);
        alert("Producto eliminado con exito");
    },
    (ErrorData)=>{
      alert("Fallo la eliminación del producto");
    }
    )
  }
  eliminarProductoAlmacenado(id:number){
    let index=0;
    for(let productAlmacenado of this.producto){
      if(productAlmacenado.idProducto == id){
        break;
      }
      index = index+1;
    }
    this.producto.splice(index,1);
    this.actualizarDatosTabla();
  }
  opendialogEditarProducto(id:number, descripcionP:string, precioP:number, cantidadD : number, urlP:string){
    const dialogoRef = this.dialog.open(EditarProductoComponent,  {disableClose: true, width: '550px',data: 
    {idProducto:id,
      descripcion:descripcionP,
      precio : precioP,
      cantidadDisponible: cantidadD,
      url: urlP
    }});
    dialogoRef.afterClosed().subscribe(result=>{
      let index = this.producto.findIndex((dta)=>{
        return dta.idProducto == result.idProducto;
      });
      this.producto[index] = result;
      this.actualizarDatosTabla();
    });
    
  }
  actualizarDatosTabla(){
    this.dataSource = new MatTableDataSource<ProductoInterface>(this.producto);
    this.dataSource.paginator = this.paginator;
  }
  cargarNuevoProducto(productos : ProductoInterface){
    this.producto.push(productos);
    //this.acomadarProductos();
    this.actualizarDatosTabla();
  }
  
}
