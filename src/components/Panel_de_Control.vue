<template>
  <div>
    <div class="columns"></div>

    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <div class="control">
              <p v-if="usuarios.length>0 && Modo == 'usuarios' " 
                ><strong style="font-size:1.1em;">Usuarios:</strong> {{usuarios.length}}</p>
                <p v-if="registro.length>0 && Modo == 'registros'" 
                ><strong style="font-size:1.1em;">Registros:</strong> {{registro.length}}</p>
              <input
                v-model="Datos.Nombre"
                class="input"
                type="text"
                placeholder="Encontrar"
              />
              <ul v-if="MostrarListaUsuarios" class="my-list">
                <li v-for="item in UsuariosParciales"
                @click="UsuarioSeleccionado(item)"
                 :key="item._id">{{item.Nombre}}</li>
              </ul>

              <ul v-if="MostrarListaRegistros" class="my-list">
                <li v-for="item in RegistrosParciales"
                @click="RegistroSeleccionado(item)"
                 :key="item._id">{{item.Nombre}}</li>
              </ul>

              <p v-if="UsuarioExiste == false" style="color:red">
                <span class="icon has-text-danger">
                  <i class="fas fa-ban"></i>
                </span>
                Este usuario no existe
              </p>

              <p v-if="UsuarioExiste == true" style="color:green">
                <span class="icon has-text-success">
                  <i class="fas fa-check-square"></i>
                </span>
                Usuario encontrado
              </p>
            </div>
          </div>
        </div>
        <div class="level-item">
          <p>Orden</p>
        </div>
        <div class="level-item">
          <div v-if="$store.state.ModoTabla == 'Usuarios'" class="select is-info">
            <select v-model="$store.state.OrdenUsuario" >
              <option value="A-Z">A-Z</option>
              <option value="Ingresos">Ingresos</option>
              <option value="Deuda">Deuda</option>
            </select>
          </div>

          <div  v-if="$store.state.ModoTabla == 'Registros'" class="select is-info">
            <select v-model="$store.state.OrdenRegistro"  >
              <option value="Total">Total</option>
              <option value="Ingresos">Ingresos</option>
              <option value="Egresos">Egresos</option>
              <option value="Deuda">Deuda</option>
            </select>
          </div>
        </div>
       
      </div>
      <div class="level-right">
        <div class="level-item">
          <div class="select is-medium">
            <select @click="BorrarNombre()" v-model="Modo">
              <option value="usuarios">Usuarios</option>
              <option value="registros">Registros</option>
            </select>
          </div>
        </div>
        <div class="level-item">

          <button @click="AñadirUsuario()" v-if="$store.state.ModoTabla == 'Usuarios'" class="button is-info">
            <span class="icon">
              <i class="fas fa-user-plus"></i>
            </span>
            <span>Añadir</span>
          </button>

          <button @click="AñadirRegistro()" v-if="$store.state.ModoTabla == 'Registros'" class="button is-info">
            <span class="icon">
              <i class="far fa-address-book"></i>
            </span>
            <span>Añadir</span>
          </button>
        </div>
      </div>
    </nav>

    
  </div>
</template>
<script>
import Tabla from "../components/Tabla";
import {mixins} from "../mixins.js";
import store from '../store/index'

export default {
  name: "Panel_de_Control",
  components: {
    Tabla,
  },
  props: {
    usuarios: Array,
    registro: Array,
  },
  
  data() {
    return {
      Datos:{Nombre:''},
      UsuarioExiste: null,
      UsuarioElegido:"",
      RegistroElegido:"",
      MostrarListaUsuarios: false,
      MostrarListaRegistros:false,
      RegistrosParciales:[],
      UsuariosParciales: [],
      Modo: "",
    };
  },

  mixins:[mixins],
  created() {
      this.Modo = "usuarios"
  },
  watch: {

    'Datos.Nombre'(){
      
      if(store.state.ModoTabla == 'Usuarios'){  
        store.state.UsuarioBusqueda = this.Datos.Nombre    
          if(this.UsuarioElegido == "" ){
            this.BuscarUsuario(); 
          }else{
            this.UsuarioElegido = ""
            //store.state.RegistroParcial = "";
          }
      }

      if(store.state.ModoTabla == 'Registros'){
        store.state.RegistroBusqueda = this.Datos.Nombre;
        if(this.RegistroElegido == ""){
          //this.BuscarRegistro(this.Datos.Nombre);
        }
        
      }else{
        this.RegistroElegido = ""
      }

    },

    Orden(){
      if(this.Modo == 'Registros'){
        store.state.OrdenRegistro = this.Orden
      }
      if(this.Modo == 'Usuarios'){
        store.state.OrdenUsuario = this.Orden
      }
      
    },

    Modo(){
     
      if(this.Modo == "usuarios"){
        store.state.ModoTabla = 'Usuarios'
        
      }
      if(this.Modo == "registros"){
        store.state.ModoTabla = 'Registros'
        
      }
    }
  },
  methods: {

    BorrarNombre(){
      this.Datos.Nombre = '';
      this.MostrarListaUsuarios = false
      this.UsuarioExiste = null
      this.UsuarioElegido = '';
      store.state.UsuarioParcial = ""
      store.state.RegistroParcial = ""
    },

    AñadirRegistro(){
     
        store.state.RegistroNuevo = true,
        store.state.Registro_Actividad = true;
    },

    AñadirUsuario(){
        store.state.ModoTabla = "";
        store.state.UsuarioNuevo = true,
        store.state.UsuarioPerfil = 'Nuevo_Usuario';
    }
  },
  
};
</script>
<style >
</style>