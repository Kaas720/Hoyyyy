import { ClienteInterface } from "../Interfaz-cliente/persona-usuario";

export class DataClienteServicio{
    cliente: ClienteInterface[]=[];
    agregarDataCliente(client : ClienteInterface){
        this.cliente.push(client);
       
    }
}