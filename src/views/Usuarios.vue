<template>
  <div>
    <usuariosTabla :usuarios="DataBaseUser"></usuariosTabla>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";
import usuariosTabla from "../components/usuariosTabla";

export default {
  components: {
    usuariosTabla
  },
  created() {
    store.commit("loadDataBaseUser");
  },
  computed: {
    ...mapState(["DataBaseUser"])
  }
};
</script>