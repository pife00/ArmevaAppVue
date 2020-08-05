<template>
  <div>
    <table
      :id="modo"
      v-if="datos.length>0"
      class="table is-bordered table is-hoverable is-fullwidth"
    >
      <thead>
        <tr>
          <th v-for="columna in configuracion" :key="columna.clave">{{columna.titulo}}</th>
          <th>Operacion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="objetos in Datos_de_Tabla" :key="objetos._id">
          <td
            @click="EditarDatos(objetos)"
            v-for="columna in configuracion"
            :key="columna.clave"
          >{{objetos[columna.clave]}}</td>
          <td>
            <a v-on:click="ModalEliminar(objetos)">
              <span class="icon is-small has-text-danger">
                <i class="fas fa-trash-alt"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="modo != 'Usuarios'">
        <tr>
          <th>Total</th>
          <th></th>
          <th>{{MonedaLocal(SumaTotal(Datos_de_Tabla))}}</th>
        </tr>
      </tfoot>
    </table>
    <Modal_Eliminar
      modo="usuario"
      :datos="DatosModalEliminar"
      v-if="$store.state.ModalEliminar == 'usuario'"
    ></Modal_Eliminar>
    <Modal_Eliminar
      modo="registro"
      :datos="DatosModalEliminar"
      v-if="$store.state.ModalEliminar == 'registro'"
    ></Modal_Eliminar>
    <Modal_Eliminar
      modo="tabs"
      :datos="DatosModalEliminar"
      v-if="$store.state.ModalEliminar == 'tabs'"
    ></Modal_Eliminar>
  </div>
</template>
<script>
import Modal_Eliminar from "../components/Modal_Eliminar";
import store from "../store/index.js";
import Tabs from "../components/Tabs";
import { mixins } from "../mixins.js";
export default {
  name: "Tabla",
  components: {
    Modal_Eliminar,
  },
  props: {
    datos: Array,
    configuracion: Array,
    modo: String,
  },
  data() {
    return {
      DatosModalEliminar: [],
      UsuarioElegido:[],
    };
  },
  mixins: [mixins],

  created() {},
  watch: {
    Datos_de_Tabla(){
      if(store.state.UsuarioElegido == []){
        
      }else{
        
      }
      
    },

    OrdenBusquedaParcial(){

    },

  },
  computed: {
    Datos_de_Tabla: {
      get: function (value) {
        if (this.modo == "Registro") {
           return this.TablaOrdenRegistro(this.Orden,'Categoria');
        }

        if (this.modo == "Usuarios") {
          var Datos = [{}];
          for (let i = 0; i < this.datos.length; i++) {
            Datos[i] = {
              _id: this.datos[i]._id,
              Nombre: this.datos[i].Nombre,
              Telefono: this.datos[i].Telefono,
              Direccion: this.datos[i].Direccion,
              Oficio: this.datos[i].Oficio,
              Actividad: this.datos[i].Actividad,
            };
          }
          return Datos;
        }

        if(this.modo == "Tabs"){
          var Datos = [{}];
          for (let i = 0; i < this.datos.length; i++) {
            Datos[i] = {
              _id: this.datos[i]._id,
              Nombre: this.datos[i].Nombre,
              Productos: this.datos[i].Productos,
              Precio:this.MonedaLocal(this.datos[i].Precio),
              Abono:this.MonedaLocal(this.datos[i].Abono),
              Categoria:this.datos[i].Categoria,
              Cantidad:this.datos[i].Cantidad,
              Fecha:this.FechaLocal(this.datos[i].Fecha),
            };
          }
          return Datos;
        }
      },
      set: function () {},
    },

    Orden() {
      return store.state.OrdenRegistro;
    },

    OrdenBusquedaParcial(){
     return store.state.OrdenBusquedaParcial;
    }
  },
  methods: {
    ModalEliminar(data) {
      if (this.modo == "Usuarios") {
        this.DatosModalEliminar = data;
        store.state.ModalEliminar = "usuario";
      }
      if (this.modo == "Registro") {
        this.DatosModalEliminar = data;
        store.state.ModalEliminar = "registro";
      }

      if (this.modo == "Tabs") {
        this.DatosModalEliminar = data;
        store.state.ModalEliminar = "tabs";
      }
    },

    EditarDatos(data) {
      if (this.modo == "Usuarios") {
        store.state.UsuarioElegido = data;
        this.UsuarioElegido =  data;
        store.state.ModoTabla = "";
        store.state.UsuarioPerfil = "editar_usuario";
      }
      if (this.modo == "Registro") {
        store.state.RegistroElegido = data;
        store.state.Registro_Actividad = true;
      }
      if (this.modo == "Tabs") {
        store.state.RegistroElegido = data;
        store.state.Registro_Actividad = true;
      }
    },
  },
};
</script>