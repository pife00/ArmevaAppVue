<template>
  <modal width="60%" height="80%"   :name="Modo">
    <div class="column Modal">
      <h1 style="margin-top:15px" class="title">{{Modo}}</h1>
      <div class="field">
          
        <div class="control">
          <input
            v-model="Datos.Categoria"
            name="Categoria"
            class="input categoria"
            type="text"
            value="Ingresos"
          />
        </div>

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

        <div class="field">
          <div class="columns">
            <div class="column">
              <label class="label">Producto</label>
              <div class="control">
                <input class="input" v-model="Datos.Productos" type="text" list="Productos" />
                <datalist id="Productos">
                  <option value="Pollo">Pollo</option>
                  <option value="Gallinita">Gallinita</option>
                  <option value="Huevo">Huevo</option>
                  <option value="Pescado">Pescado</option>
                </datalist>
              </div>
            </div>
            <div class="column is-5">
              <label class="label">Cantidad</label>
              <input v-model="Datos.Cantidad" class="input" type="number" min="1" max="30">
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Precio</label>
          <div class="control">
            <input
              v-model="Datos.Precio"
              name="Precio"
              class="input"
              type="text"
              placeholder="Precio"
            />
          </div>
        </div>

        <div class="control">
          <button @click="SendData()" type="submit" class="button is-primary">{{Modo}}</button>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
  props: {
    Modo: String,
    user: Object
  },
  data() {
    return {
      Datos: []
    };
  },
  computed: {
    count() {
      this.Datos = this.user;
    }
  },
  watch: {
    count(value) {}
  },

  methods: {
    closeModal() {
      document.getElementById(this.Modo).style.display = "none";
    },

    SendData() {
      if (this.Modo == "Añadir") {
        this.axios
          .post("/getData", {
            Nombre: this.Datos.Nombre,
            Productos: this.Datos.Productos,
            Precio: this.Datos.Precio,
            Cantidad: this.Datos.Cantidad,
            Categoria: this.Datos.Categoria,
            Telefono:"0"
          })
          .then(result => {
            console.log(result.data);
            this.$store.commit("loadDataBase");
            this.Datos.Nombre = "";
            this.Datos.Productos = "";
            this.Datos.Precio = "";
            this.Datos.Cantidad = "";
            this.Datos.Categoria = "";
            this.$modal.hide("Añadir")
          })
          .catch(err => {});
      }
      if (this.Modo == "Actualizar") {
        this.axios
          .post("/getUpdate", {
            _id: this.Datos._id,
            Nombre: this.Datos.Nombre,
            Productos: this.Datos.Productos,
            Cantidad: this.Datos.Cantidad,
            Precio: this.Datos.Precio,
            Categoria: this.Datos.Categoria,
            Fecha:this.Datos.Fecha
          })
          .then(result => {
            this.$store.commit("loadDataBase");
            (this.Datos._id = ""), (this.Datos.Nombre = "");
            this.Datos.Productos = "";
            this.Datos.Precio = "";
            this.Datos.Cantidad = ""
            this.Datos.Categoria = "";
            this.$modal.hide("Actualizar")
          })
          .catch(err => {});
      }
    }
  }
};
</script>