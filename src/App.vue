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


           <router-link to="/api/user">
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

<style>
@import "../node_modules/bulma/css/bulma.min.css";
.modal-wrap {
  background-color: white;
  margin-top: 2%;
  top: 20%;
}

.universal-modal{
    padding-left: 15px;
    padding-right: 20px;
}
.categoria {
  border-color: #dbdbdb;
}
.ingresos{
  color: #02AC1E;
}
.egresos{
  color: red;
}
.balance{
  color:cornflowerblue;
}

.breadcrumb a{
  color: black;
}

.breadcrumb a.router-link-exact-active{
  color: #02AC1E;
;
}
a{
  color: #038118;
  font-style: oblique;
}





</style>
