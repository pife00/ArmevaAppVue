<template>
 
      <div class="column">  
        <Resumen :balance="DataBase"></Resumen>
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
