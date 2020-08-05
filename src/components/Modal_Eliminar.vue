<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">¿Desea eliminar este registro?</p>
          <button @click="Cerrar" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="has-text-centered">
            <span class="icon has-text-danger">
              <i class="fas fa-trash-alt fa-2x"></i>
            </span>
          </div>
          <div class="column has-text-centered">
            <p class="subtitle">Una vez eliminado no se podran recuperar</p>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button @click="Eliminar" class="button is-danger">Eliminar</button>
          <button @click="Cerrar" class="button">Cancelar</button>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import store from '../store/index'
export default {
  name: "Modal_Eliminar",
  props: ["datos", "modo"],
  methods: {
    Eliminar() {
      if (this.modo == "usuario") {
        console.log(this.datos);
        this.axios
          .post("/getDeleteUser", {
            id: this.datos._id,
            Nombre: this.datos.Nombre,
          })
          .then((result) => {
            this.$store.commit("loadDataBaseUser");
            this.Cerrar();
          });
      }
      if (this.modo == "registro") {
        this.axios
          .post("/getDelete", {
            id: this.datos._id,
            Nombre: this.datos.Nombre,
          })
          .then((result) => {
            this.$store.commit("loadDataBase");
            this.$store.commit("loadDataBaseUser");
            this.Cerrar();
          });
      }
      if (this.modo == "tabs") {
        this.axios
          .post("/getDelete", {
            id: this.datos._id,
            Nombre: this.datos.Nombre,
          })
          .then((result) => {
           
              store.state.UsuarioPerfil = null;
              store.state.ModoTabla = "usuarios";
            

            this.$store.commit("loadDataBase");
            this.$store.commit("loadDataBaseUser");
            this.Cerrar();
          });
      }
    },
    Cerrar() {
      this.$store.state.ModalEliminar = false;
    },
  },
};
</script>