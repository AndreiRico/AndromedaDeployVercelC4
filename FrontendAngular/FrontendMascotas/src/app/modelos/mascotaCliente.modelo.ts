export class ModeloMascotaCliente{
    id?: string;
    nombre?: string;
    foto?: string;
    estado?: string;
    especie?: string;
    comentario?: string;
    usuarioId?: string;
    planId?: string;
    plan?: {
        nombre?:string;
    };
    usuario?: {
        nombre?:string;
    }
}