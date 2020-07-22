<template>
  <div id="app">
    <nav class="breadcrumb is-centered balance" aria-label="breadcrumb">
      <ul>
        <li>

          <router-link  to="/">
            <span class="icon is-small">
            <i class="fas fa-clipboard-list"></i>
            </span>
            Resumen
          </router-link>
          
          <router-link to="/Tablas">
            <span class="icon is-small">
            <i class="fas fa-table"></i>
            </span>
            Tablas
          </router-link>


           <router-link to="/usuarios">
            <span class="icon is-small">
            <i class="fas fa-users"></i>
            </span>
            Usuarios
          </router-link>
          
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "bulma";
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "@/sass/_media.scss";
@import "@/sass/_variables.scss";
@import "@/sass/_resumen.scss";
@import "@/sass/_modal.scss";


</style>
