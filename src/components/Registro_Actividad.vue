<template>
  <div>
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{Modo}}</p>
          <button @click="Cerrar" class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <label class="label">Categoria</label>
              <div class="select">
                <select v-model="Datos.Categoria">
                  <option value="Ingresos">Ingresos</option>
                  <option value="Egresos">Egresos</option>
                  <option value="Deuda">Deuda</option>
                  <option value="Abono">Abono</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
              <input v-model="Datos.Nombre" class="input" type="text" placeholder="Nombre" />
              <ol v-if="MostrarListaUsuarios" class="my-list">
                <li
                  @click="ModalUsuarioSeleccionado(item)"
                  v-for="item in UsuariosParciales"
                  :key="item._id"
                >{{item.Nombre}}</li>
              </ol>
            </div>

            <p v-if="UsuarioExiste == true" style="color:green">
              <span class="icon has-text-success">
                <i class="fas fa-check-square"></i>
              </span>
              Este usuario existe
            </p>

            <p v-if="UsuarioExiste == false" style="color:red">
              <span class="icon has-text-danger">
                <i class="fas fa-ban"></i>
              </span>
              Este usuario no existe presione
              <a>aqui</a> para añadirlo
            </p>

            <p v-if="UsuarioExiste == null" style="color:#3298dc">
              <span class="icon has-text-info">
                <i class="fas fa-user-clock"></i>
              </span>
              En espera
            </p>
          </div>

          <div v-if="ModoAbono == false" class="field">
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
                <input v-model="Datos.Cantidad" class="input" type="number" min="1" max="100" />
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Precio</label>
            <div class="control">
              <input
                v-model="Datos.Precio"
                id="Precio"
                name="Precio"
                class="input"
                type="text"
                placeholder="Precio"
              />
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <a
          v-if="ModoAbono == false"
            :disabled="BotonActivo == false"
            @click="EnviarDatos()"
            class="card-footer-item button is-info"
          >{{Modo}}</a>
          <a
          v-if="ModoAbono"
            :disabled="BotonActivo == false"
            @click="Abono()"
            class="card-footer-item button is-info"
          >Abono</a>
          <a @click="Cerrar" class="card-footer-item button">Cancelar</a>
        </footer>
      </div>
      <Modal_Abono v-if="$store.state.ModalAbono == true" 
    :usuario = "UsuarioDeuda"
    :abono = "Datos.Precio"
    ></Modal_Abono>
  </div>
    </div>
    

</template>
<script>
import store from "../store/index";
import Modal_Abono from '../components/Modal_Abono';
import { mixins } from "@/mixins";

export default {
  name: "Registro_Actividad",
  components:{
    Modal_Abono,
  },
  data() {
    return {
      Datos: [],
      UsuariosParciales: [],
      UsuarioElegido: "",
      UsuarioDeuda:[],
      UsuarioAbono:"",
      MostrarListaUsuarios: false,
      UsuarioExiste: null,
      BotonActivo: false,
      PrecioReal: 0,
      Modo: "",
      ModoAbono : false,
    };
  },
  created() {
    if (store.state.RegistroElegido != []) {
      
      this.Datos = store.state.RegistroElegido;
      this.Modo = "Editar";
    }
    if (store.state.RegistroNuevo == true) {
      this.Datos = [];
      this.Modo = "Añadir";
    }
  },
  watch: {
    UsuarioExiste() {
      this.VerficarExistencia();
    },

    "Datos.Nombre"() {
      if (this.UsuarioElegido == "") {
        this.BuscarUsuarioRegistro();
      } else {
        this.UsuarioElegido = "";
      }
    },
    "Datos.Precio"() {
      //this.PrecioReal = this.NumeroReal(this.Datos.Precio);
     // this.Datos.Precio = this.NumeroFalso;
    },

    'Datos.Categoria'(){
      if(this.Datos.Categoria == 'Abono'){
        this.ModoAbono = true;
      }else{
        this.ModoAbono = false;
      }
    }
  },
  mixins: [mixins],

  computed: {
   /* NumeroFalso() {
      var numero = this.NumeroSinPuntos(this.Datos.Precio);
      return this.MonedaLocal(numero);
    },
    NumeroReal() {
      return this.NumeroSinPuntos(this.NumeroFalso);
    },*/
  },
  methods: {
    Cerrar() {
      store.state.RegistroNuevo =  false;
      store.state.Registro_Actividad = false;
    },
    Abono(){
      store.state.ModalAbono = true
    },

    EnviarDatos() {
      if (this.Modo == "Añadir") {
        if (
          this.Datos.Categoria == undefined ||
          this.Datos.Nombre == undefined
        ) {
          this.notificacion = true;
          this.closeNotificacion();
        } else {
          this.axios
            .post("/getData", {
              Nombre: this.Datos.Nombre,
              Productos: this.Datos.Productos,
              Precio: this.Datos.Precio,
              Cantidad: this.Datos.Cantidad,
              Categoria: this.Datos.Categoria,
              Telefono: "No datos",
            })
            .then((result) => {
              this.$store.commit("loadDataBase");
              this.$store.commit("loadDataBaseUser");
              this.Datos.Nombre = "";
              this.Datos.Productos = "";
              this.Datos.Precio = "";
              this.Datos.Cantidad = "";
              this.Datos.Categoria = "";
              this.Cerrar();
            })
            .catch((err) => {});
        }
      }

      if (this.Modo == "Editar") {
        this.axios
          .post("/getUpdate", {
            _id: this.Datos._id,
            Nombre: this.Datos.Nombre,
            Productos: this.Datos.Productos,
            Cantidad: this.Datos.Cantidad,
            Precio: this.Datos.Precio,
            Categoria: this.Datos.Categoria,
            
          })
          .then((result) => {
            if(store.state.UsuarioPerfil == 'editar_usuario'){
              store.state.UsuarioPerfil = null;
              store.state.ModoTabla = "usuarios";
            }
            this.$store.commit("loadDataBase");
            this.$store.commit("loadDataBaseUser");
            
            (this.Datos._id = ""), (this.Datos.Nombre = "");
            this.Datos.Productos = "";
            this.Datos.Precio = "";
            this.Datos.Cantidad = "";
            this.Datos.Categoria = "";
            this.Cerrar();
          })
          .catch((err) => {});
      }
    },
  },
};
</script>
