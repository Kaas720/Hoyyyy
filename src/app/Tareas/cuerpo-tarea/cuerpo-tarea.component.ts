import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TareaInterfaz } from '../Interfaces/InterfazTarea';
import { tareaRetorno } from '../Interfaces/Retornotarea';
import { TareaEnviarDato } from '../Interfaces/TareaEnviar';
import { TipoTarea } from '../Interfaces/tipo_Tarea';
import { Usuario } from '../Interfaces/usuario';
import { TareasHttpService } from '../servicioHttpTareas/tareas-http.service';
import { UsuarioService } from '../servicioHttpTareas/usuario.service';

@Component({
  selector: 'app-cuerpo-tarea',
  templateUrl: './cuerpo-tarea.component.html',
  styleUrls: ['./cuerpo-tarea.component.css']
})
export class CuerpoTareaComponent implements OnInit,AfterViewInit  {
 
  constructor(private usuarioHttp : UsuarioService, private tareasHttp : TareasHttpService) { }
  dataTarea!: tareaRetorno;
  enviarTarea : TareaEnviarDato = {
    idTarea : 0,
    idUsuario : 0,
    idTipoTarea : 0,
    nombreTarea : "",
    descripcionTarea : "",
    codigoReferencia : "",
    estado : 'A'
  }
  selected="0"
  tareaList : TareaInterfaz[] = [];
  displayedColumns: string[] = ['idTarea', 'nombreTarea', 'descripcionTarea', 'tipoTarea','codeTarea','opciones'];
  dataSource = new MatTableDataSource<TareaInterfaz>(this.tareaList);
  nuevo = false;
  botonMensaje = "Guardar tarea"
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.obtenerIdusuario();
    this.obtenerTiposTareas();
  }
  DataTarea = new FormGroup({
    NombreTarea: new FormControl('',[Validators.required,Validators.maxLength(50)]),
    descripcionTarea: new FormControl('', [Validators.required,Validators.maxLength(500)]),
    codigoReferencia: new FormControl('',[Validators.required,Validators.maxLength(50)]),
    idTarea : new FormControl(0)
  })
  dataUsuario!: Usuario;
  tiposTareasList! : TipoTarea[];
  obtenerTiposTareas(){
    this.tareasHttp.getTiposTareas().subscribe(data=>{
      this.tiposTareasList = data;
    },
    error=>{
      alert("No existen tipos");
    })
  }
  idUsuraio = 0;
  obtenerIdusuario(){
    this.usuarioHttp.getUser().subscribe(data=>{
      this.dataUsuario = data;
      this.idUsuraio = data.idUsuario
      this.obtenerTareas(this.dataUsuario.idUsuario);
    },
    err=>{

    })
  }
  obtenerTareas(id:number){
    this.tareasHttp.getTareas(id).subscribe(data=>{
      this.dataTarea = data;
      this.tareaList = data.tarea;
      alert(this.dataTarea.codigo+"  "+this.dataTarea.mensaje)
      this.actualizarTabla();
    },
    err=>{
      alert(err.codigo+"  "+err.mensaje)
    })
  }
  actualizarTabla(){
    this.dataSource = new MatTableDataSource<TareaInterfaz>(this.tareaList);
    this.dataSource.paginator = this.paginator;
  }
  enviarInformacion(){

  }
   TipoTareaDescripcion = "";
  enviarInformacionForm(tarea : TareaInterfaz, formDirective: FormGroupDirective){
    this.TipoTareaDescripcion = tarea.nombreTipotarea;
    this.enviarTarea = {
      idTarea : tarea.idTarea,
      idUsuario : 0,
      idTipoTarea : 10,
      nombreTarea : tarea.nombreTarea,
      descripcionTarea : tarea.decripcionTarea,
      codigoReferencia : tarea.codigoreferencia,
      estado : 'A'
    }
    this.nuevo = true;
    this.DataTarea.setValue({
      NombreTarea: tarea.nombreTarea,
      descripcionTarea: tarea.decripcionTarea,
      codigoReferencia: tarea.codigoreferencia,
      idTarea : tarea.idTarea
    });
    this.selected="0"
    this.botonMensaje = "Editar tarea"
  }
  NuevaTarea(){
    this.DataTarea.reset();
    this.botonMensaje = "Guardar tarea"
    this.nuevo = false;
  }
  enviarDatos(){
    let numeroID = Number(this.selected);
    this.enviarTarea = {
      idTarea : Number(this.DataTarea.value.idTarea),
      idUsuario : this.idUsuraio,
      idTipoTarea : numeroID,
      nombreTarea : String(this.DataTarea.value.NombreTarea),
      descripcionTarea : String(this.DataTarea.value.descripcionTarea),
      codigoReferencia : String(this.DataTarea.value.codigoReferencia),
      estado : 'A'
    }
    this.tareasHttp.enviarDatos(this.enviarTarea).subscribe(data=>{
      alert(data.codigo+"   "+data.mensaje);
    },
    (ErrorData)=>{
      alert(ErrorData.error.mensaje);
    });
  }
  eliminarTarea(id : number){
    this.tareasHttp.delateTareas(id).subscribe(data=>{
      alert(data.codigo+"  "+data.mensaje)
    },
    err=>{
      alert(err.codigo+"  "+err.mensaje)
    })
  }
  //obtener
}
