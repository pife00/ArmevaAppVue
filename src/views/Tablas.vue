<template>
  <section class="section">
    <div class="container">
      <div  class="column has-text-centered">
      <button v-on:click="Modal()" style="border-color:gray" class="button is-info">Añadir</button>
      </div>
      <Table v-if="Test" :usuarios="DataBase"></Table>
      <Tabla :datos = "DataBase" :configuracion="configuracion" :modo="modo" ></Tabla>
      <fade-transition>
      </fade-transition>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex";
import { FadeTransition } from "vue2-transitions";
import store from "../store/index";
import Table from "../components/Table";
import Tabla from '../components/Tabla.vue';

export default {
  name: "Tablas",
  components: {
    Table,
    Tabla,
    FadeTransition,
  },

  data() {
    return {
      Ingresos: [],
      Modo: "Añadir",
      modo:"Registro",
      Test:false,
      configuracion:[
        {
          clave:"Nombre",
          titulo:"Nombre"
        },{
          clave:"Productos",
          titulo:"Productos"
        },{
          clave:"Precio",
          titulo:"Precio"
        },{
          clave:"Cantidad",
          titulo:"#"
        },{
          clave:"Fecha",
          titulo:"Fecha"
        }
      ]
    };
  },
  created() {
    store.commit("loadDataBase");
  },
  computed: {
    ...mapState(["DataBase"]),
  },
  watch: {},
  methods: {
    showModalUniversal() {
      this.$modal.show(this.Modo);
    },
    Modal() {
      store.state.ModalAñadir = true;
    },
  },
};
</script>