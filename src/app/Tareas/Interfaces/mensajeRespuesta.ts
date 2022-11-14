import { TareaInterfaz } from "./InterfazTarea";
import { TareaEnviarDato } from "./TareaEnviar";

export interface Mensaje{
    codigo:string,
    mensaje:string,
    tarea: TareaEnviarDato
}