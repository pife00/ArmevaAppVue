<template>
  <div class="column">
    <div class="column has-text-centered">
      <button
        v-on:click="showModalUniversal()"
        style="border-color:gray"
        class="button is-primary"
      >Añadir</button>
    </div>
    <Table :usuarios="DataBase"></Table>

    <Modal_Universal :Modo="Modo" :user="Ingresos"></Modal_Universal>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from "vuex";
import store from "../store/index";
import Table from "../components/Table";
import Modal_Universal from "../components/Modal_Universal";
export default {
  name: "Tablas",
  components: {
    Table,
    Modal_Universal
  },

  data() {
    return {
      Ingresos: [],
      Modo: "Añadir"
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
    }
  }
};
</script>