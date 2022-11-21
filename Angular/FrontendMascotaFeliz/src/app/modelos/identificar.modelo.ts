import { ModeloDatos } from "./datos.modelo";

export class ModeloIdentificar{
    datos?: ModeloDatos;          //se debe llamar tal cual como está en el backend
    tk?: String;                  //se debe llamar tal cual como está en el backend
    estaIdentificado: boolean = false;
}