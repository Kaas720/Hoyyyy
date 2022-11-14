import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoTareaComponent } from './Tareas/cuerpo-tarea/cuerpo-tarea.component';
import { LoginusuarioTareaComponent } from './Tareas/loginusuario-tarea/loginusuario-tarea.component';
import { AceptarCompraComponent } from './views/cliente/aceptar-compra/aceptar-compra.component';
import { CarritoProductosComponent } from './views/cliente/carrito-productos/carrito-productos.component';
import { CrearProductoComponent } from './views/cliente/crear-producto/crear-producto.component';
import { CrudProductoCuerpoComponent } from './views/cliente/crud-producto-cuerpo/crud-producto-cuerpo.component';
import { CuerpoComponent } from './views/cliente/cuerpo/cuerpo.component';
import { InformacionUsuarioComponent } from './views/cliente/informacion-usuario/informacion-usuario.component';
import { InicioClienteComponent } from './views/cliente/inicio-cliente/inicio-cliente.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {path: 'LoginProducto', component: LoginComponent},
  {path: 'cliente', component: CuerpoComponent,
    children:[
      {path: '', component: InicioClienteComponent},
      {path: 'carrito', component: CarritoProductosComponent},
      {path: 'confirmar-entrega', component: AceptarCompraComponent},
      {path: 'datos-cliente', component: InformacionUsuarioComponent},
      {path: 'producto-crud', component: CrudProductoCuerpoComponent,
        children:[
          {path:'', component: CrearProductoComponent}
        ]
      }
    ]
  },
  {path: '',component: LoginusuarioTareaComponent},
  {path:'tarea', component: CuerpoTareaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
