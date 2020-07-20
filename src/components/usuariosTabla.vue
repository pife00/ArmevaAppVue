<template>
  <div>
    <div class="box">
      <p class="title">
        Clientes
        <button
          v-on:click="showModalUsuariosAñadir()"
          class="button is-primary"
          style="margin-left: 20px;"
        >Añadir</button>
      </p>
    </div>
    <fade-transition>
      <div class="box" v-show="showTable">
        
        <table id="usuariosTabla" class="table is-bordered is-striped is-fullwidth">
      <thead style="$orange">
        <tr>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Direccion</th>
          <th>Oficio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usuarios" :key="item._id">
          <td>
            <a
              v-on:click="usuarioActivo
             (item._id,item.Nombre,item.Telefono,item.Direccion,
             item.Oficio,item.Actividad)"
            >{{item.Nombre}}</a>
          </td>
          <td>{{item.Telefono}}</td>
          <td>{{item.Direccion}}</td>
          <td>{{item.Oficio}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr></tr>
      </tfoot>
    </table>


      </div>
    </fade-transition>
    
    <Modal_Usuarios :Modo="Modo"></Modal_Usuarios>

    <fade-transition>
      <div class="box" v-show="showUser">
        <div>
          <div class="has-text-right">
            <button v-on:click="usuarioDesactivado()" class="delete is-large">Cerrar</button>
          </div>

          <div class="columns">
            <div class="column">
              <div class="card">
                <img src="@/assets/user_img.jpg" alt />
              </div>
            </div>
            <div class="column">
              <div class="columm">
                <div class="field">
                  <input v-model="selectedUser[0]._id" class="input" style="border:none" type="text">
                  <label class="label">Nombre:</label>
                  <input v-model="selectedUser[0].Nombre" class="input" type="text" />
                  <label class="label">Telefono:</label>
                  <input v-model="selectedUser[0].Telefono" class="input" type="text" />
                  <label class="label">Direccion:</label>
                  <input v-model="selectedUser[0].Direccion" class="input" type="text" />
                  <label class="label">Oficio:</label>
                  <input v-model="selectedUser[0].Oficio" class="input" type="text" />
                </div>
                <div class="control">
                  <button v-on:click="SendData()" class="button is-primary">Guardar</button>
                </div>
              </div>
            </div>
            
          </div>
          <Tabs v-if="showTabs" :usuario="selectedUser[0]"></Tabs>
        </div>
      </div>

      
    </fade-transition>
  </div>
</template>

<script>
import store from "../store/index";
import Modal_Usuarios from "./Modal_Usuarios";
import { FadeTransition } from "vue2-transitions";
import Tabs from './Tabs';
export default {
  name: "usuariosTabla",
  components: {
    Modal_Usuarios,
    FadeTransition,
    Tabs
  },
  data() {
    return {
      Modo: "Nuevo Usuario",
      UserActive: false,
      selectedUser:[{}],
      showUser: false,
      showTable:true,
      showTabs:false,
      user:[],
    };
  },

  
  props: {
    usuarios: Array
  },
  methods: {
    showModalUsuariosAñadir() {
      this.$modal.show(this.Modo);
    },

    usuarioActivo(_id, Nombre, Telefono, Direccion, Oficio,Actividad) {
      this.showTable = false;
      this.showUser = true;
      this.selectedUser[0]._id = _id;
      this.selectedUser[0].Nombre = Nombre;
      this.selectedUser[0].Telefono = Telefono;
      this.selectedUser[0].Direccion = Direccion;
      this.selectedUser[0].Oficio = Oficio;
      this.selectedUser[0].Actividad = Actividad
      this.showTabs = true
      
    },

    usuarioDesactivado() {

      this.showTable =  true;
      this.showUser = false;
      this.selectedUser = [{}];
      this.showTabs = false
      
    },

    SendData() {
      console.log(this.selectedUser);
      this.axios
        .post("/getUpdateUser", {
          _id: this.selectedUser[0]._id,
          Nombre: this.selectedUser[0].Nombre,
          Telefono: this.selectedUser[0].Telefono,
          Direccion: this.selectedUser[0].Direccion,
          Oficio: this.selectedUser[0].Oficio
        })
        .then(result => {
          console.log(result);
          store.commit("loadDataBaseUser");
          this.usuarioDesactivado();
        });
    }
  }
};
</script>