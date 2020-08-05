<template>
  <div>
    <div class="columns"></div>

    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <div class="control">
              <input
                v-model="Datos.Nombre"
                class="input"
                type="text"
                placeholder="Encontrar"
              />
              <ul v-if="MostrarListaUsuarios" class="my-list">
                <li v-for="item in UsuariosParciales"
                @click="Seleccion(item)"
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
          <div v-if="$store.state.ModoTabla == 'usuarios'" class="select is-info">
            <select >
              <option value="A-Z">A-Z</option>
            </select>
          </div>

          <div  v-if="$store.state.ModoTabla == 'registros'" class="select is-info">
            <select v-model="Orden" >
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
            <select v-model="Modo">
              <option  value="usuarios">Usuarios</option>
              <option value="registros">Registros</option>
            </select>
          </div>
        </div>
        <div class="level-item">

          <button @click="AñadirUsuario()" v-if="$store.state.ModoTabla == 'usuarios'" class="button is-info">
            <span class="icon">
              <i class="fas fa-user-plus"></i>
            </span>
            <span>Añadir</span>
          </button>

          <button @click="AñadirRegistro()" v-if="$store.state.ModoTabla == 'registros'" class="button is-info">
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
      Datos:[],
      UsuarioExiste: null,
      UsuarioElegido:"",
      MostrarListaUsuarios: false,
      UsuariosParciales: [],
      Modo: "",
      Orden:"Total",
      configuracion_usuarios: [
        {
          clave: "Nombre",
          titulo: "Nombre",
        },
        {
          clave: "Telefono",
          titulo: "Telefono",
        },
        {
          clave: "Direccion",
          titulo: "Direccion",
        },
        {
          clave: "Oficio",
          titulo: "Oficio",
        },
      ],

      configuracion_registro: [
        {
          clave: "Nombre",
          titulo: "Nombre",
        },
        {
          clave: "Productos",
          titulo: "Productos",
        },
        {
          clave: "Precio",
          titulo: "Precio",
        },
        {
          clave: "Cantidad",
          titulo: "#",
        },
        {
          clave: "Fecha",
          titulo: "Fecha",
        },
      ],


    };
  },

  mixins:[mixins],
  created() {
      this.Modo = "usuarios"
  },
  watch: {

    'Datos.Nombre'(){
      
      
    },

    Orden(){
      store.state.OrdenRegistro = this.Orden
    },

    Modo(){
      if(this.Modo == "usuarios"){
        store.state.ModoTabla = 'usuarios'
      }
      if(this.Modo == "registros"){
        store.state.ModoTabla = 'registros'
      }
    }
  },
  methods: {
    
    AñadirRegistro(){
     
        store.state.RegistroNuevo = true,
        store.state.Registro_Actividad = true;
    },

    AñadirUsuario(){
        store.state.ModoTabla = "";
        store.state.UsuarioNuevo = true,
        store.state.UsuarioPerfil = 'nuevo_usuario';
    }
  },
  
};
</script>
<style >
</style>