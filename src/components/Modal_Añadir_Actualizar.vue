<template>
  <div id="mymodal" class="modal is-active">
    <div @click="closeModal()" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ModoReactivo}}</p>
        <button @click="closeModal()" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div v-if="notificacion" class="notification is-warning">
          <button @click="notificacion = false" class="delete"></button>
          Categoria y nombre deben ser llenados cierre en: {{notificacionTemp}}
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Categoria</label>
            <div class="select">
              <select v-model="Datos.Categoria">
                <option value="Ingresos">Ingresos</option>
                <option value="Egresos">Egresos</option>
                <option value="Deuda">Deuda</option>
                <option value="Abono">Abono</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Nombre</label>
          <div class="control" v-bind:class="{ 'is-loading': loading}">
            <input v-model="Datos.Nombre" class="input" type="text" placeholder="Nombre" />
          </div>
          <ul v-if="showUserPartial" class="my-list">
            <li
              @click="userSelected(item)"
              v-for="item in UserPartial"
              :key="item._id"
            >{{item.Nombre}}</li>
          </ul>
          <p v-if="UserExist == true" style="color:green">
            <span class="icon has-text-success">
              <i class="fas fa-check-square"></i>
            </span>
            Este usuario existe
          </p>

          <p v-if="UserExist == false" style="color:red">
            <span class="icon has-text-danger">
              <i class="fas fa-ban"></i>
            </span>
            Este usuario no existe presione
            <a @click="showModalUsuariosAñadir()">aqui</a> para añadirlo
          </p>

          <p v-if="UserExist == null" style="color:#3298dc">
            <span class="icon has-text-info">
              <i class="fas fa-user-clock"></i>
            </span>
            En espera
          </p>
        </div>

        <div v-if="ModoReactivo != 'Abono'" class="field">
          <div class="columns">
            <div class="column">
              <label class="label">Producto</label>
              <div class="control">
                <input class="input" v-model="Datos.Productos" type="text" list="Productos" />
                <datalist id="Productos">
                  <option value="Pollo">Pollo</option>
                  <option value="Gallinita">Gallinita</option>
                  <option value="Huevo">Huevo</option>
                  <option value="Pescado">Pescado</option>
                </datalist>
              </div>
            </div>
            <div class="column is-5">
              <label class="label">Cantidad</label>
              <input v-model="Datos.Cantidad" class="input" type="number" min="1" max="30" />
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Precio</label>
          <div class="control">
            <input
              v-model="Datos.Precio"
              id="Precio"
              name="Precio"
              class="input"
              type="text"
              placeholder="Precio"
            />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button id="Abono" :disabled="button == false" @click="SendData()" class="button is-info">{{ModoReactivo}}</button>
        <button @click="closeModal()" class="button">Cancelar</button>
      </footer>
    </div>

    <Modal_Usuarios v-if="$store.state.ModalUsuario" :Modo="Nuevo_Usuario"></Modal_Usuarios>
    

    <slide-x-right-transition >
     <SideBarAbono  v-if="$store.state.ModalAbono" :usuario="userDeuda" :abono ="userAbono"></SideBarAbono>
  </slide-x-right-transition>
   
   
  </div>
</template>
<script>
import store from "../store/index";
import Modal_Usuarios from "../components/Modal_Usuarios";
import {SlideXRightTransition} from "vue2-transitions";
import { CollapseTransition } from "vue2-transitions";
import { FadeTransition } from "vue2-transitions";
import SideBarAbono from "../components/SideBarAbono";
export default {
  components: {
    Modal_Usuarios,
    SideBarAbono,
    SlideXRightTransition,
     CollapseTransition,
     FadeTransition
  },
  props: {
    Modo: String,
    user: {},
  },
  data() {
    return {
      SideBar: false,
      ModoAbono:false,
      Datos: [],
      notificacion: false,
      notificacionTemp: 9,
      ModoReactivo:this.Modo,

      loading: false,
      UserExist: null,
      button: false,
      
      UserPartial: [],
      showUserPartial: false,
      userSelect: "",
      userDeuda: "",
      userAbono:0,
      
    };
  },

  created() {
    
    if (this.ModoReactivo == "Actualizar") {
      this.Datos = this.user;
      this.button = true;
    }
  },

  computed: {
    Actualizar: {
      get:function(){
        return this.user;
      }
    },

    ModalModo:{
      get:function(){
        return this.Modo
      }
    }
  },
  watch: {
    count() {},

    "Datos.Categoria":{
      handler(){
        if(this.Datos.Categoria == "Abono"){
          this.ModoReactivo = "Abono";
          this.button =  false;
        }
        else{
         this.ModoReactivo = this.ModalModo;
        }
      }
    },

    "Datos.Nombre": {
      handler() {
        if (this.userSelect == "") {
          this.Buscar();
        } else {
          this.userSelect = "";
        }
      },
    },

    "Datos.Precio": {
      handler() {
        if(this.ModoReactivo == "Abono" && this.Datos.Precio != ""){
          this.userAbono = this.Datos.Precio
        }
        
      },
    },

   
    
  },

  methods: {
    closeNotificacion() {
      var time = setInterval(() => {
        this.notificacionTemp--;
        if (this.notificacionTemp == 0) {
          clearInterval(time);
          this.notificacion = false;
        }
      }, 1000);

      this.notificacionTemp = 9;
    },

    userSelected(data) {
      this.showUserPartial = false;
      this.UserExist = true;
      this.Datos.Nombre = data.Nombre;
      this.userSelect = data.Nombre;
      this.userDeuda = data.Nombre;
      this.userAbono = this.Datos.Precio;
    },

    Buscar() {
      if (this.Datos.Nombre == undefined || this.Datos.Nombre == "") {
      } else {
        this.loading = true;

        this.axios
          .post("/userPartial", { Nombre: this.Datos.Nombre })
          .then((result) => {
            this.UserPartial = result.data;
          });
        this.showUserPartial = true;
        

        this.axios
          .post("/userExist", { Nombre: this.Datos.Nombre })
          .then((result) => {
            this.UserExist = result.data;
            this.loading = false;
            
          });
      }

      
    },

    showModalUsuariosAñadir() {
      store.state.ModalUsuario = true;
    },

    closeModal() {
      if (this.ModoReactivo == "Añadir") {
        store.state.ModalAñadir = false;
      }
      if (this.ModoReactivo == "Actualizar") {
        store.state.ModalEditar = false;
      }
    },

    formatNumber(data) {
      var format = [];
      var numero = 0;
      if (typeof data == "string") {
        numero = Intl.NumberFormat().format(data);

        return numero;
      }
    },

    SendData() {
      if(this.ModoReactivo == "Abono"){
        this.$store.state.ModalAbono = true
      }

      if (this.ModoReactivo == "Añadir") {
        if (
          this.Datos.Categoria == undefined ||
          this.Datos.Nombre == undefined
        ) {
          this.notificacion = true;
          this.closeNotificacion();
        } else {
          this.axios
            .post("/getData", {
              Nombre: this.Datos.Nombre,
              Productos: this.Datos.Productos,
              Precio: this.Datos.Precio,
              Cantidad: this.Datos.Cantidad,
              Categoria: this.Datos.Categoria,
              Telefono: "No datos",
            })
            .then((result) => {
              this.$store.commit("loadDataBase");
              this.Datos.Nombre = "";
              this.Datos.Productos = "";
              this.Datos.Precio = "";
              this.Datos.Cantidad = "";
              this.Datos.Categoria = "";
              this.closeModal();
            })
            .catch((err) => {});
        }
      }
      if (this.ModoReactivo == "Actualizar") {
        this.axios
          .post("/getUpdate", {
            _id: this.Datos._id,
            Nombre: this.Datos.Nombre,
            Productos: this.Datos.Productos,
            Cantidad: this.Datos.Cantidad,
            Precio: this.Datos.Precio,
            Categoria: this.Datos.Categoria,
            Fecha: this.Datos.Fecha,
          })
          .then((result) => {
            this.$store.commit("loadDataBase");
            (this.Datos._id = ""), (this.Datos.Nombre = "");
            this.Datos.Productos = "";
            this.Datos.Precio = "";
            this.Datos.Cantidad = "";
            this.Datos.Categoria = "";
            this.closeModal();
          })
          .catch((err) => {});
      }
    },
  },
};
</script>