<template>
<div id="mymodal" class="modal is-active">
  <div @click="closeModal()" class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">{{Modo}}</p>
      <button @click="closeModal()" class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">

        <div class="field">

        <div class="control">
             <label class="label">Categoria</label>
          <input
            v-model="Datos.Categoria"
            name="Categoria"
            class="input categoria"
            type="text"
            value="Ingresos"
          />
        </div>
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

    </section>
    <footer class="modal-card-foot">
      <button @click="SendData()" class="button is-success">{{Modo}}</button>
      <button  @click="closeModal()" class="button">Cancelar</button>
    </footer>
  </div>
</div>
</template>
<script>
import store from "../store/index";
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
      if(this.Modo == "Añadir"){
        store.state.ModalAñadir = false; 
      }
      if(this.Modo == "Actualizar"){
        store.state.ModalEditar = false;   
      }
     
      
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
            Telefono:"No datos"
          })
          .then(result => {
            console.log(result.data);
            this.$store.commit("loadDataBase");
            this.Datos.Nombre = "";
            this.Datos.Productos = "";
            this.Datos.Precio = "";
            this.Datos.Cantidad = "";
            this.Datos.Categoria = "";
            this.closeModal()
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
            this.closeModal()
          })
          .catch(err => {});
      }
    }
  }
};
</script>