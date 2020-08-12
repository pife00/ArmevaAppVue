<template>
  <div>
    <div class="box">
      <div>
        <div class="has-text-right">
          <button @click="Cerrar" v class="delete is-large">Cerrar</button>
        </div>

        <div class="columns">
          <div class="column">
            <div class="card">
              <img src="@/assets/user_img.jpg" alt />
            </div>
          </div>
          <div class="column">
            <div class="columm">
              <div class="field">
                <p class="title">{{modo}}</p>
                <input v-model="Datos._id" class="input" style="border:none" type="text" />
                <p v-if="notificacion.Nombre == true" class="has-text-danger">Por lo menos nombre debe ser llenado</p>
                <label class="label">Nombre:</label>
                <input :class="VerificarNombre" v-model="Datos.Nombre" class="input" type="text" />
                <label class="label">Telefono:</label>
                <input v-model="Datos.Telefono" class="input" type="text" />
                <label class="label">Direccion:</label>
                <input v-model="Datos.Direccion" class="input" type="text" />
                <label class="label">Oficio:</label>
                <input v-model="Datos.Oficio" class="input" type="text" />
              </div>
              <div class="control">
                <button v-on:click="EnvioDatos()" class="button is-info">Guardar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{'is-active':tabActive == 1}" v-on:click="tabSeleccionada(1)">
          <a>Ingresos</a>
        </li>
        <li v-bind:class="{'is-active':tabActive == 2}" v-on:click="tabSeleccionada(2)">
          <a>Egresos</a>
        </li>
        <li v-bind:class="{'is-active':tabActive == 3}" v-on:click="tabSeleccionada(3)">
          <a>Deuda</a>
        </li>
      </ul>
    </div>

    <div v-show="tabActive == 1">
      <Tabla :datos="tabIngresos" modo="Tabs" :configuracion="configuracion_ingresos_egresos"></Tabla>
    </div>

    <div v-show="tabActive == 2">
      <Tabla :datos="tabEgresos" modo="Tabs" :configuracion="configuracion_ingresos_egresos"></Tabla>
    </div>

    <div v-show="tabActive == 3">
      <Tabla :datos="tabDeuda" modo="Tabs" :configuracion="configuracion_deuda"></Tabla>
    </div>
  </div>
</template>
<script>
import store from "../store/index";
import Tabla from "../components/Tabla";
export default {
  name: "Usuario_Perfil",
  components: {
    Tabla,
  },
  props: ["usuario", "modo"],
  data() {
    return {
      notificacion: { Nombre: null },
      configuracion_ingresos_egresos: [
        {
          clave: "Nombre",
          titulo: "Nombre",
        },
        {
          clave: "Productos",
          titulo: "Productos",
        },
        {
          clave: "Precio",
          titulo: "Precio",
        },
        {
          clave: "Cantidad",
          titulo: "#",
        },
        {
          clave: "Fecha",
          titulo: "Fecha",
        },
      ],
      configuracion_deuda: [
        {
          clave: "Nombre",
          titulo: "Nombre",
        },

        {
          clave: "Productos",
          titulo: "Productos",
        },
        {
          clave: "Precio",
          titulo: "Precio",
        },
        {
          clave: "Abono",
          titulo: "Abono",
        },
        {
          clave: "Cantidad",
          titulo: "#",
        },
        {
          clave: "Fecha",
          titulo: "Fecha",
        },
      ],
      DatosReactivos: [],
      tabActive: 1,
      tabData: [],
      tabIngresos: [],
      tabEgresos: [],
      tabDeuda: [],
    };
  },

  watch: {
    "Datos.Nombre"() {
      if (this.Datos.Nombre != "") {
        this.notificacion.Nombre = false;
      } else if (this.Datos.Nombre == "") {
        this.notificacion.Nombre = true;
      }
    },
  },

  computed: {
    VerificarNombre() {
      return {
        "is-danger":
          this.Datos.Precio == null && this.notificacion.Nombre == true,
        "is-primary":
          this.Datos.Nombre != "" && this.notificacion.Nombre == false,
      };
    },

    Datos() {
      return this.DatosReactivos;
    },

    TabsDatos() {
      this.axios
        .post("userDeuda", { Nombre: this.usuario.Nombre })
        .then((result) => {
          this.tabData = result.data;
          return this.tabData;
        });
    },
  },

  created() {
    if (this.modo == "Nuevo Usuario") {
    }
    if (this.modo == "Editar Usuario") {
      this.DatosReactivos = this.usuario;
      this.universalTabs();
    }
  },

  methods: {
    Cerrar() {
      store.state.UsuarioPerfil = null;
      store.state.ModoTabla = "usuarios";
    },

    tabSeleccionada(select) {
      this.tabActive = select;
      switch (select) {
      }
    },

    universalTabs() {
      var sum = 0;
      var AbonoFiltro = [];
      var filtroI = this.usuario.Actividad.filter((a) => {
        return a.Categoria == "Ingresos";
      });

      this.tabIngresos = filtroI;

      var filtroE = this.usuario.Actividad.filter((a) => {
        return a.Categoria == "Egresos";
      });
      this.tabEgresos = filtroE;

      var filtroD = this.usuario.Actividad.filter((a) => {
        return a.Categoria == "Deuda";
      });

      for (let i = 0; i < filtroD.length; i++) {
        for (let j = 0; j < filtroD[i].Abono.length; j++) {
          sum += filtroD[i].Abono[j];
        }
        filtroD[i].Abono = [];
        filtroD[i].Abono = sum;
        sum = 0;
      }

      this.tabDeuda = filtroD;
    },

    EnvioDatos() {
      if (this.notificacion.Nombre == false) {
        if (this.modo == "Nuevo Usuario") {
          this.axios
            .post("/newUser", {
              Nombre: this.Datos.Nombre,
              Telefono: this.Datos.Telefono,
              Direccion: this.Datos.Direccion,
              Oficio: this.Datos.Oficio,
            })
            .then((result) => {
              console.log(result.data);
              this.$store.commit("loadDataBaseUser");
              this.Datos.Nombre = "";
              this.Datos.Telefono = "";
              this.Datos.Direccion = "";
              this.Datos.Oficio = "";
              this.Cerrar();
            })
            .catch((err) => {});
        }
        if (this.modo == "Editar Usuario") {
          this.axios
            .post("/getUpdateUser", {
              _id: this.Datos._id,
              Nombre: this.Datos.Nombre,
              Telefono: this.Datos.Telefono,
              Direccion: this.Datos.Direccion,
              Oficio: this.Datos.Oficio,
            })
            .then((result) => {
              store.commit("loadDataBaseUser");
              this.Cerrar();
            });
        }
      } else {
        for (const prop in this.notificacion) {
          if (this.notificacion[prop] == null) {
            this.notificacion[prop] = true;
          }
        }
      }
    },
  },
};
</script>