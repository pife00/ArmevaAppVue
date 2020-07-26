<template>
<section class="section">
      <div class="container">  
        <Resumen :user="DataBaseUser" :balance="DataBase"></Resumen>
      </div>
</section>
    
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
     store.commit("loadDataBaseUser");
   },
  computed: {
    ...mapState(["DataBase","DataBaseUser"])
    
  },
  methods: {
  },
};
</script>
