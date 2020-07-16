<template>
  <modal :width="500" :height="510" :name="Modo">
    <form class="universal-modal" id="registerForm" v-on:submit.prevent="SendData()">
      <h1 style="margin-top:15px" class="title">{{Modo}}</h1>
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

          <div class="column">
            <div class="field">
              <label class="label">Cordenada</label>
              <div class="control">
                <input
                  v-model="Datos.Cordenada"
                  name="Precio"
                  class="input"
                  type="text"
                  placeholder="Cordenada"
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

          <div class="column">
            <div class="field">
              <label class="label">Sexo</label>
              <div class="control">
                <input
                  v-model="Datos.Sexo"
                  name="Precio"
                  class="input"
                  type="text"
                  placeholder="Sexo"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="control">
          <button type="submit" class="button is-primary">{{Modo}}</button>
        </div>
      </div>
    </form>
  </modal>
</template>
<script>
export default {
  props: {
    Modo: String
  },
  data() {
    return {
      Datos: []
    };
  },
  computed: {},
  watch: {},

  methods: {
    closeModal() {
      document.getElementById(this.Modo).style.display = "none";
    },

    SendData(){
      if(this.Modo == "Nuevo Usuario"){
         this.axios.post("/newUser", {
            Nombre: this.Datos.Nombre,
            Telefono: this.Datos.Telefono,
            Cordenada: this.Datos.Cordenada,
            Direccion: this.Datos.Direccion,
            Oficio: this.Datos.Oficio,
            Sexo:this.Datos.Sexo
          }) .then(result => {
            console.log(result.data);
            this.$store.commit("loadDataBase");
            this.Datos.Nombre = "";
            this.Datos.Telefono = "";
            this.Datos.Cordenada = "";
            this.Datos.Direccion = "";
            this.Datos.Oficio = "";
            this.Datos.Sexo = "";
            this.$modal.hide(this.Modo)
          })
          .catch(err => {});  
      }
     
    },
  }

};
</script>