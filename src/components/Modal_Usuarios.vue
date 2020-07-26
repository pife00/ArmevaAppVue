
<template>
  <div class="modal is-active">
    <div @click="closeModal()" class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{Modo}}</p>
        <button @click="closeModal()" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <div v-if="notificacion" class="notification is-info">
          <button @click="notificacion = false" class="delete"></button>
          Nombre deben ser llenado, cierre en: {{notificacionTemp}}
        </div>

        <div class="column">
          <div class="field">
            <div class="control"></div>

            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Nombre</label>
                  <div class="control">
                    <input
                      v-model="Datos.Nombre"
                      name="Nombre"
                      class="input"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="field">
              <div class="columns">
                <div class="column">
                  <label class="label">Telefono</label>
                  <input
                    v-model="Datos.Telefono"
                    name="Telefono"
                    class="input"
                    type="text"
                    placeholder="Telefono"
                  />
                </div>
                <div class="column is-5">
                  <label class="label">Direccion</label>
                  <input v-model="Datos.Direccion" class="input" placeholder="Direccion" />
                </div>
              </div>
            </div>

            <div class="columns">
              <div class="column">
                <div class="field">
                  <label class="label">Oficio</label>
                  <div class="control">
                    <input
                      v-model="Datos.Oficio"
                      name="Precio"
                      class="input"
                      type="text"
                      placeholder="Oficio"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button @click="SendData()" class="button is-info">{{Modo}}</button>
        <button @click="closeModal()" class="button">Cancelar</button>
      </footer>
    </div>
  </div>
</template>
<script>
import store from "../store/index";
export default {
  
  props: {
    Modo: String
  },
  data() {
    return {
      Datos: [],
      notificacion:false,
      notificacionTemp:9
    };
  },
  computed: {},
  watch: {},

  methods: {

     closeNotificacion() {
      var time = setInterval(() => {
        this.notificacionTemp--;
        if (this.notificacionTemp == 0) {
          clearInterval(time);
          this.notificacion = false;
        }
      }, 1000);

      this.notificacionTemp = 9;
    },
    closeModal() {
      store.state.ModalUsuario = false;
    },

    SendData() {
      if (this.Modo == "Nuevo Usuario") {
        if (
          this.Datos.Nombre == undefined
        ) {
          this.notificacion = true;
          this.closeNotificacion();
        }else{ 
          this.axios
            .post("/newUser", {
              Nombre: this.Datos.Nombre,
              Telefono: this.Datos.Telefono,
              Cordenada: this.Datos.Cordenada,
              Direccion: this.Datos.Direccion,
              Oficio: this.Datos.Oficio,
              Sexo: this.Datos.Sexo
            })
            .then(result => {
              console.log(result.data);
              this.$store.commit("loadDataBase");
              this.Datos.Nombre = "";
              this.Datos.Telefono = "";
              this.Datos.Cordenada = "";
              this.Datos.Direccion = "";
              this.Datos.Oficio = "";
              this.Datos.Sexo = "";
              this.closeModal();
            })
            .catch(err => {});
        }
        }
    }
  }
};
</script>