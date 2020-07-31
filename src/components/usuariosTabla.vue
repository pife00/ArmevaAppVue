<template>
  <div>
    <div class="column">
      <p display='inline' class="title">Usuarios</p>
      <p v-if="usuarios.length > 0">{{usuarios.length}} Total</p>
    </div>
  
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <div class="field has-addons">
            <div class="control">
              <input v-model="Datos" class="input" type="text" placeholder="Encontrar usuario" />
            <ul v-if="showUserPartial" class="my-list"><li
          @click="userSelected(item)"
          v-for="item in UserPartial" :key="item._id">
          {{item.Nombre}}</li></ul>
          <p v-if="UserExist == false" style="color:red">
            <span class="icon has-text-danger">
              <i class="fas fa-ban"></i>
            </span>
            Este usuario no existe 
          </p>

          <p v-if="UserExist == true" style="color:green">
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
        <div class="level-item ">
           <div class="select is-info">
            <select>
            <option value="A-Z">A-Z</option>

            </select>
          </div>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
         
          <button
            v-on:click="showModalUsuariosAñadir()"
            class="button is-info" 
          >
          <span class="icon">
            <i class="fas fa-user-plus"></i>
          </span>
          <span>Añadir</span>
        </button>
        </div>
      </div>
    </nav>

    <fade-transition>
      <Modal_Usuarios v-if="$store.state.ModalUsuario" :Modo="Modo"></Modal_Usuarios>
    </fade-transition>

    <collapse-transition :duration="500" v-show="showTable" >
      <div class="box" >
        <table v-if="Lista.length > 0" id="usuariosTabla" class="table is-bordered is-striped is-fullwidth">
          <thead style="$orange">
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Direccion</th>
              <th>Oficio</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="item in Lista" :key="item._id">
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
   

    </collapse-transition >

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
                  <input
                    v-model="selectedUser[0]._id"
                    class="input"
                    style="border:none"
                    type="text"
                  />
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
                  <button v-on:click="SendData()" class="button is-info">Guardar</button>
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
import { CollapseTransition } from "vue2-transitions";
import Tabs from "./Tabs";
export default {
  name: "usuariosTabla",
  components: {
    Modal_Usuarios,
    FadeTransition,
    CollapseTransition,
    Tabs,
  },
   props: {
    usuarios: Array,
  },
  data() {
    return {
      Datos:"",
      UserPartial:[],
      showUserPartial:false,
      userSelect:"",
      userEncontrar:"",
     

      Modo: "Nuevo Usuario",
      UserActive: false,
      UserExist: null,
      selectedUser: [{}],
      showUser: false,
      showTable: false,
      showTabs: false,
      ListUser: this.usuarios,
      Orden: [],
      button: false,
    };
  },

  computed: {
    Lista:{
      get:function(){
        return this.ListUser;
      },
      set:function(){
        
      }
    }
  },

  watch: {
    
    Datos(){
      
       if(this.userSelect == ""){
          this.Buscar();
            
        }if(this.Datos == ""){
          this.ListUser = this.usuarios;
          this.UserExist = null;
          this.userSelect = "";
        }
       
    }
  },

  created() {
   setTimeout(() => this.showTable = true, 500);
  },
  methods: {
    showModalUsuariosAñadir() {
      store.state.ModalUsuario = true;
    },

     userSelected(data){
      this.showUserPartial=false
      this.UserExist = true
      this.Datos = data.Nombre;
      this.userSelect = data.Nombre;
      this.ListUser = [data];
      this.showTable = true;
    },

    Buscar() {
      if (this.Datos == undefined 
      ||this.Datos == ""
      ) {
        this.showTable = true;
        this.UserExist = null;
      } 
      else  {
         this.showTable = false;
          this.axios
            .post("/userPartial",{Nombre:this.Datos})
            .then((result)=>{
              this.UserPartial = result.data;
             
            });
           this.showUserPartial = true;
           if(this.UserPartial.length >0){
             this.ListUser = this.UserPartial;
             this.showTable = true;
           }
           
        this.axios
          .post("/userExist", { Nombre: this.Datos })
          .then((result) => {
            this.UserExist = result.data;
           
          });
      }
      
    },

 
    
    

    usuarioActivo(_id, Nombre, Telefono, Direccion, Oficio, Actividad) {
      this.showTable = false;
      this.showUser = true;
      this.selectedUser[0]._id = _id;
      this.selectedUser[0].Nombre = Nombre;
      this.selectedUser[0].Telefono = Telefono;
      this.selectedUser[0].Direccion = Direccion;
      this.selectedUser[0].Oficio = Oficio;
      this.selectedUser[0].Actividad = Actividad;
      this.showTabs = true;
    },

    usuarioDesactivado() {
      this.showTable = true;
      this.showUser = false;
      this.selectedUser = [{}];
      this.showTabs = false;
    },

    SendData() {
      console.log(this.selectedUser);
      this.axios
        .post("/getUpdateUser", {
          _id: this.selectedUser[0]._id,
          Nombre: this.selectedUser[0].Nombre,
          Telefono: this.selectedUser[0].Telefono,
          Direccion: this.selectedUser[0].Direccion,
          Oficio: this.selectedUser[0].Oficio,
        })
        .then((result) => {
          console.log(result);
          store.commit("loadDataBaseUser");
          this.usuarioDesactivado();
        });
    },
  },
};
</script>