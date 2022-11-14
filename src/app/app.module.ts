import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {LoginComponent } from './views/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './views/cliente/header/header.component';
import { FooterComponent } from './views/cliente/footer/footer.component';
import { CuerpoComponent } from './views/cliente/cuerpo/cuerpo.component';
import { InicioClienteComponent } from './views/cliente/inicio-cliente/inicio-cliente.component';
import { CarritoProductosComponent } from './views/cliente/carrito-productos/carrito-productos.component';
import { CarritoServicio } from './views/cliente/servicioCliente/agregarCarritoService';
import { AceptarCompraComponent } from './views/cliente/aceptar-compra/aceptar-compra.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InformacionUsuarioComponent } from './views/cliente/informacion-usuario/informacion-usuario.component';
import { DataClienteServicio } from './views/cliente/servicioCliente/dataCliente';
import { CrudProductoCuerpoComponent } from './views/cliente/crud-producto-cuerpo/crud-producto-cuerpo.component';
import { TablaListadoProductComponent } from './views/cliente/tabla-listado-product/tabla-listado-product.component';
import { CrearProductoComponent } from './views/cliente/crear-producto/crear-producto.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EditarProductoComponent } from './views/cliente/editar-producto/editar-producto.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductoServicioEmitter } from './views/cliente/servicioCliente/ProductoServicioEmitter';
import { LoginusuarioTareaComponent } from './Tareas/loginusuario-tarea/loginusuario-tarea.component';
import { CuerpoTareaComponent } from './Tareas/cuerpo-tarea/cuerpo-tarea.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CuerpoComponent,
    InicioClienteComponent,
    CarritoProductosComponent,
    AceptarCompraComponent,
    InformacionUsuarioComponent,
    CrudProductoCuerpoComponent,
    TablaListadoProductComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    LoginusuarioTareaComponent,
    CuerpoTareaComponent
    
  ],
  imports: [
    MatFormFieldModule,
    AppRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule
    
  ],
  providers: [CarritoServicio,DataClienteServicio,ProductoServicioEmitter],
  bootstrap: [AppComponent]
})
export class AppModule { }
