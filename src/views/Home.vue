<template>
  <div class="home">
    <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">  
        <Resumen :balance="DataBase"></Resumen>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Resumen from '../components/Resumen'
import {mapState} from 'vuex'
import store from "../store/index"

export default {
  name: "Home",
  store,
  components: {
    Resumen,
  },
  data() {
    return {
     // DataBase:store.state.DataBase
    }
  },

   created() {
     store.commit("loadDataBase");
   },
  computed: {
    ...mapState(["DataBase"])
  },
  methods: {
  },
};
</script>
