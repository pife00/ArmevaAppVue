<template>
  <section class="section">
    <div class="container">
      <div  class="column has-text-centered">
      <button v-on:click="Modal()" style="border-color:gray" class="button is-info">Añadir</button>
      </div>
      <Table :usuarios="DataBase"></Table>
      <fade-transition>
        <Modal_AU v-if="$store.state.ModalAñadir" :Modo="Modo" :user="Ingresos"></Modal_AU>
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

import Modal_AU from "../components/Modal_AU";
export default {
  name: "Tablas",
  components: {
    Table,
    
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