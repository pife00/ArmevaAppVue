<template>
  <div id="app">
    <div class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a :href="'/'" >
            <img src="@/assets/logo3.png" width="90" height="28" alt />
        </a>

        <a role="button" class="navbar-burger burger"
       arial-label="menu"
       aria-expanded="false" data-target="Menu"
       :class="{'is-active':show}"
       @click="showMenu()"
        >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
      </div>
      
      <div :class="{'is-active':menu}" id="Menu" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Resumen</router-link>

          <router-link class="navbar-item" to="/tablas">Tablas</router-link>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      show:false,
      menu:false
    };
  },
  methods: {
    showMenu(){
      if(this.show == false && this.menu == false){
        
        this.show = true
        this.menu = true
      }else{
        this.show = false
        this.menu = false
      }
    }
  },
};
</script>

<style lang="scss">
@import "bulma";
@import "../node_modules/@creativebulma/bulma-divider/dist/bulma-divider.css";
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "@/sass/_media.scss";
@import "@/sass/_variables.scss";
@import "@/sass/_resumen.scss";
@import "@/sass/_userList.scss";
@import "@/sass/_sidebar.scss";
@import "@/sass/_select.scss";
@import "@/sass/_table.scss";


</style>
