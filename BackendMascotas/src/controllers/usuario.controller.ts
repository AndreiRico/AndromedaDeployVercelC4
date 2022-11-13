import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import { AutenticacionService } from '../services';
const fetch = require('node-fetch');

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) {}

    //---------------- Acceso Publico: Identificar Usuario --------------------

  @post('/identificarUsuario',{
    responses:{
      '200': {
        description: 'Identificacion de usuario'
      }
    }
  })
  async identificarUsuario(
    @requestBody() credenciales: Credenciales
  ){
    let u = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.contrasena);
    if(u){
      let token = this.servicioAutenticacion.GenerarTokenJWT(u);
      return{
        datos:{
          nombre: u.nombre,
          correo: u.correo,
          id: u.id,
          rol: u.rol
          //agregar atributos de los usaurios
        },
        tk: token
      }
    }else{
      throw new HttpErrors[401]('Datos invalidos');
    }

  }
  
  //--------------- Recuperar clave -----------------

  @post('/recuperarClave', {
    responses: {
      '200': {
        description: "Recuperación de clave de usuarios"
      }
    }
  })
  async recuperarClave(
    @requestBody() correo: string
  ): Promise<Boolean> {
    let usuario = await this.usuarioRepository.findOne({
      where: {
        correo: correo
      }
    });
    if (usuario) {
      let clave = this.servicioAutenticacion.GenerarContrasena();
      let claveCifrada = this.servicioAutenticacion.CifrarContrasena(clave);
      usuario.contrasena = claveCifrada;
      await this.usuarioRepository.updateById(usuario.id, usuario);

      //consumir el microservicio de notificaciones
      //Enviar la nueva clave por SMS
      return true;
    }
    return false;
  }  
  //--------------- Crear Usuarios ---------------------------

  //@authenticate("admin","assessor","client")

  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    let contrasena = this.servicioAutenticacion.GenerarContrasena();
    let contrasenaCifrada = this.servicioAutenticacion.CifrarContrasena(contrasena);
    usuario.contrasena = contrasenaCifrada;
    let u = await this.usuarioRepository.create(usuario);

    //notificar usuario por correo
    let destino = usuario.correo;
    let asunto = 'Datos de registro de la plataforma';
    let contenido = `Hola ${usuario.nombre} ${usuario.apellido} bienvenido a mascota feliz, su usuario es ${usuario.correo} y su contraseña es ${contrasena}`
    fetch(`http://127.0.0.1:5000/email?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data:any)=>{
        console.log(data);
      })
      //return u; 
    
    // notificar ususario por sms
    let destino_sms = usuario.telefono;
    let contenido_sms = `Hola ${usuario.nombre} ${usuario.apellido} bienvenido a mascota feliz, su usuario es ${usuario.correo} y su contraseña es ${contrasena}`
    fetch(`http://127.0.0.1:5000/mensajetxt?celular_destino=${destino_sms}&contenido=${contenido_sms}`)
      .then((data:any)=>{
        console.log(data);
      })
      return u; 
    
  }

  //----------------- Mostrar Cantidad de Usuarios -----------------------

  @authenticate("admin","assessor")

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  //------------------ Mostrar Todos los Usuarios --------------------------

  //@authenticate("admin","assessor")

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  //------------------- Actualizar Usuarios ---------------------------

  @authenticate("admin","assessor")

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  //-------------------- Mostrar el Usuario de ese ID --------------------

  @authenticate("admin","assessor")

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  //--------------- Actualizar solo los datos especificados, de ese {id} de Usuario -------------------

  @authenticate("admin","assessor")

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  //----- Actualizar reemplazando los datos especificados, de ese {id}} de Usuario. obliga a especificar todos los atributos------

  @authenticate("admin","assessor")

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  //--------------- Eliminar Indicando el ID del Usuario -------------------

  @authenticate("admin","assessor")

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}
