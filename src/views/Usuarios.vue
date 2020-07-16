<template>
    <div>
        <div class="columns is-mobile">
      <div class="column is-three-fifths is-offset-one-fifth">  
        <usuariosTabla :usuarios="DataBaseUser"></usuariosTabla>
      </div>
    </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import store from '../store/index'
import usuariosTabla from '../components/usuariosTabla'

export default {
    components:{
        usuariosTabla
    },
    created() {
      store.commit("loadDataBaseUser");
    },
    computed: {
      ...mapState(["DataBaseUser"])
    },
}
</script>