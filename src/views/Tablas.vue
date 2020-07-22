<template>
  <div class="column">
     <fade-transition >
       <Modal_AU v-if="$store.state.ModalAñadir" :Modo="Modo" :user="Ingresos" ></Modal_AU>
    </fade-transition>
    <div class="column has-text-centered">
      

      <button
        v-on:click="Modal()"
        style="border-color:gray"
        class="button is-primary"
      >Añadir</button>
    </div>

    
    <Table :usuarios="DataBase"></Table>

    
   
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex";
import { FadeTransition } from "vue2-transitions";
import store from "../store/index";
import Table from "../components/Table";
import Modal_Universal from "../components/Modal_Universal";
import Modal_AU from '../components/Modal_AU';
export default {
  name: "Tablas",
  components: {
    Table,
    Modal_Universal,
    Modal_AU,
    FadeTransition,
  },

  data() {
    return {
      Ingresos: [],
      Modo: "Añadir",
    };
  },
  created() {
    store.commit("loadDataBase");
  },
  computed: {
    ...mapState(["DataBase"])
  },
  watch: {},
  methods: {
    showModalUniversal() {
      this.$modal.show(this.Modo);  
    },
     Modal(){
       store.state.ModalAñadir = true;
       
     }
  }

  
};
</script>