import { AuthenticationStrategy } from "@loopback/authentication";
import { service } from "@loopback/core";
import { Request, RedirectRoute, HttpErrors } from "@loopback/rest";
import { UserProfile } from "@loopback/security";
import { ParamsDictionary } from "express-serve-static-core";
import parseBearerToken from "parse-bearer-token";
import { AutenticacionService } from "../services";

export class EstrategiaAsesor implements AuthenticationStrategy{
    name: string = 'assessor';

    constructor(
        @service(AutenticacionService)
        public servicioAutenticacion : AutenticacionService
    ){}

    async authenticate(request: Request): Promise<UserProfile | undefined>{
        let token = parseBearerToken(request);
        if(token){
            let datos = this.servicioAutenticacion.ValidarTokenJWT(token)
            //Aqui se hace la validacion dependiendo el rol
            if(datos){
                if(datos.data.rol == "assessor"){
                    let generaData  = datos.data.nombre
                    return generaData;
                }else{
                    throw new HttpErrors[401]('No es asesor')
                }
                /*
                let perfil: UserProfile = Object.assign({
                    nombre: datos.data.nombre
                });
                return perfil;  
                */
            }else{
                throw new HttpErrors[401]('El token estaba malo')
            }
        }else{
            throw new HttpErrors[401]('No se incluyo el token')
        }
    }
}