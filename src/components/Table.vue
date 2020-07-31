<template>
  <div>
    <form v-on:submit.prevent="sendQuerry()">
      <div class="field has-addons">
        <div class="control">
          <div class="select is-dark">
            <select
              v-model="Datos.Productos"
              class="input"
              id="querryProductos"
              name="querryProductos"
            >
              <option value="Nombre">Nombre</option>
              <option value="Productos">Producto</option>
              <option value="Precio">Precio</option>
              <option value="Fecha">Fecha</option>
            </select>
          </div>
        </div>
        <div style="width: 70%;" class="control">
          <input v-model="Datos.Querry" name="querry" type="text" class="input is-dark" />
        </div>
        <div class="is-dark">
          <button style="border-color:gray" id="busqueda" class="submit button is-info">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div class="is-centered">
        <label class="checkbox">
          <input v-model="optionCheck" type="checkbox" value="Ingresos" />
          Ingresos
        </label>

        <label style="padding-left:10px" class="checkbox">
          <input v-model="optionCheck" type="checkbox" value="Egresos" />
          Egresos
        </label>

        <label style="padding-left:10px" class="checkbox">
          <input v-model="optionCheck" type="checkbox" value="Deuda" />
          Deudor
        </label>
      </div>
    </form>

    <table id="RegistroTablas" class="table is-fullwidth">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Fecha</th>
          <th>Operacion</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usuarios" :key="item._id">
          <td>{{item.Nombre}}</td>
          <td>{{item.Productos}}</td>
          <td>{{formatNumber(item.Precio)}}</td>
          <td>{{item.Cantidad}}</td>
          <td>{{formatDate(item.Fecha)}}</td>
          <td>
            <div class="columns ">
              <div class="column is-3">
                 <a
              @click="showModalUniversal(item)"
              id="editButton"
              class="button is-white"
            >
              <span class="icon is-small">
                <i class="fas fa-edit"></i>
              </span>
            </a>
              </div>
              <div class="column is-3">
                <a v-on:click="showModalDetele(item.Nombre,item.Precio,item._id)" class="button is-white">
              <span class="icon is-small">
                <i class="fas fa-trash-alt"></i>
              </span>
            </a>
              </div>
             
            </div>
          </td>

        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th></th>
          <th>{{formatNumber(total())}}</th>
        </tr>
      </tfoot>
    </table>

    
    <fade-transition><Modal_AU v-if="$store.state.ModalEditar"  :Modo="Modo" :user="DatosEdit"  ></Modal_AU></fade-transition>

    <modal :width="350" :height="200" name="delete">
      <div class="columns is-mobile">
        <div class="column ">    
          <div style="margin-top:30px" class="has-text-centered">
            <h1 class="title is-4">¿Desea eliminar este archivo?</h1>
            <p>Una vez eliminados no se podran recuperar</p>
            <p>{{ModalId}}</p>
            <div class="column">
              <button v-on:click="hideModalDelete()" 
              style="margin-right:5px" class="button is-light"
              >Cancelar</button>
              <button v-on:click="deleteData(ModalId,ModalNombre)" class="button is-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
  
</template>

<script>
import { mapState } from "vuex";
import { FadeTransition } from "vue2-transitions";
import Modal_AU from "./Modal_AU"
import store from "../store/index";
export default {
  name: "Table",
  components: {
    Modal_AU,
    FadeTransition,
  },
  props: {
    usuarios: Array
  },
  data() {
    return {
      Datos: {
        Productos: "Nombre",
        Querry: "",
      },

      DatosEdit: [],
      ModalNombre:"",
      ModalPrecio:0,
      ModalId:"",
      optionCheck: [],
      usuariosReserva: [],
      Modo: "Actualizar",
      
    };
  },
  
  created() {
    
  },
  watch: {

    optionCheck(value) {
      this.checkSelect(value);
    },

    usuarios(value){
      if(value.length > 0 ){
        
      }
    },

    change(value) {
      
    }
  },
  methods: {

    sendQuerry() {
      this.axios
        .post("http://localhost:3000/getQuerry", {
          querryProductos: this.Datos.Productos,
          querry: this.Datos.Querry
        })
        .then(result => {
          this.$store.querry = result.data;
          this.usuarios = this.$store.querry;
        })
        .catch(error => {});
    },

    total() {
      var total = 0;
      for (let i = 0; i < this.usuarios.length; i++) {
        total += this.usuarios[i].Precio;
      }
      return total;
    },

    checkSelect(value) {
      if (this.usuariosReserva.length <= 0) {
        this.usuariosReserva = this.usuarios;
      }
      if (value.length == 1) {
        var filtro = this.usuarios.filter(data => {
          return data.Categoria == value;
        });
        this.usuarios = filtro;
      } else {
        this.usuarios = this.usuariosReserva;
        this.usuariosReserva = [];
      }
    },

    formatDate(data) {
      var fecha = [{}];
      var options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Bogota"
      };
      return (fecha = new Intl.DateTimeFormat("es-Co", options).format(
        new Date(data)
      ));
    },

    formatNumber(data) {
      var format = [];
      var Number = 0;
      if (typeof data == "number") {
        Number = Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP"
        }).format(data);

        return Number;
      }
    },

    showModalDetele(Nombre,Precio,Id) {
      this.ModalNombre = Nombre;
      this.ModalPrecio = Precio;
      this.ModalId = Id;
      this.$modal.show("delete");
      
    },

    hideModalDelete(){
      this.$modal.hide("delete")
    },

    deleteData(id,Nombre){
      this.axios.post("/getDelete",{
        id:id,
        Nombre:Nombre

      }).then((result)=>{
        this.$store.commit("loadDataBase");
        this.hideModalDelete();
        console.log(result);
      }).catch(error)
    },

    showModalUniversal(item){
     this.DatosEdit = item;
     this.$store.state.ModalEditar = true;
    }
  }
};
</script>