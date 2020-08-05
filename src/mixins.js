export const mixins = {
  methods: {
    MonedaLocal(data) {
      if (typeof data == "number") {
        var numero = new Intl.NumberFormat().format(data);
        return numero;
      } else {
        var numero = new Intl.NumberFormat().format(data);
        return numero;
      }
    },

    FechaLocal(data) {
      var fecha = [{}];
      var options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "America/Bogota",
      };
      return (fecha = new Intl.DateTimeFormat("es-Co", options).format(
        new Date(data)
      ));
    },

    TablaFiltro(data,criterio) {

      var filtro = this.datos.filter(a => {
        return a[criterio] == data;
      });
      return filtro;

    },

    Filtro(data,criterio) {

      var filtro = this.datos.filter(a => {
        return a[criterio] == data;
      });
      return filtro;
      

    },

    OdenParcial(data){

    },

    TablaOrdenRegistro(data,criterio){
      var Datos = [];
      var datos=[];
      if(data == "Total"){
        datos = this.$store.state.DataBase;
        for (let i = 0; i < datos.length; i++) {
          Datos[i]= {
            _id:datos[i]._id,
            Nombre:datos[i].Nombre,
            Productos:datos[i].Productos,
            Precio:this.MonedaLocal(datos[i].Precio),
            Cantidad:datos[i].Cantidad,
            Categoria:datos[i].Categoria,
            Fecha:this.FechaLocal(datos[i].Fecha),
          };
        }
        return Datos;

      }else{
        datos = this.TablaFiltro(data,criterio);
        for (let i = 0; i < datos.length; i++) {
          Datos[i]= {
            _id:datos[i]._id,
            Nombre:datos[i].Nombre,
            Productos:datos[i].Productos,
            Precio:this.MonedaLocal(datos[i].Precio),
            Cantidad:datos[i].Cantidad,
            Categoria:datos[i].Categoria,
            Fecha:this.FechaLocal(datos[i].Fecha),
          };
        }
        return Datos;
      }
          
    },

    TablaOrdenRegistroParcial(){
      var Datos=[{}];
          var datos = this.$store.state.OrdenBusquedaParcial;
          for (let i = 0; i < datos.length; i++) {
          Datos[i]= {
            _id:datos[i]._id,
            Nombre:datos[i].Nombre,
            Productos:datos[i].Productos,
            Precio:this.MonedaLocal(datos[i].Precio),
            Cantidad:datos[i].Cantidad,
            Categoria:datos[i].Categoria,
            Fecha:this.FechaLocal(datos[i].Fecha),
          };
        }
        return Datos;
    },

    NumeroSinPuntos(data) {
      var numero = data.replace(/[.]/g, '');
      numero = parseInt(numero);
      return Number.isNaN(numero) ? 0 : numero;
    },

    VerficarExistencia() {
      if (this.UsuarioExiste == true) {
        this.BotonActivo = true;

      }
      if (this.UsuarioExiste == false) {
        this.BotonActivo = false;
      }
      if (this.ModoAbono == true) {
        this.BotonActivo = true;
        document.getElementById("Abono").textContent = "Abono";
      }
    },

    BuscarUsuario() {
      if (this.Datos.Nombre == undefined || this.Datos.Nombre == "") {} else {
        this.axios
          .post("/userPartial", {
            Nombre: this.Datos.Nombre
          })
          .then((result) => {
            this.UsuariosParciales = result.data;
          });
        this.MostrarListaUsuarios = true;


        this.axios
          .post("/userExist", {
            Nombre: this.Datos.Nombre
          })
          .then((result) => {
            this.UsuarioExiste = result.data;
          });
      }
    },

    BuscarRegistro() {
      if (this.Datos.Nombre == undefined || this.Datos.Nombre == "") {} else {
        this.axios
          .post("/registroPartial", {
            Nombre: this.Datos.Nombre
          })
          .then((result) => {
            this.UsuariosParciales = this.NoRepetidos(result.data);
            this.$store.state.OrdenBusquedaParcial = result.data;
          });
        this.MostrarListaUsuarios = true;


        this.axios
          .post("/userExist", {
            Nombre: this.Datos.Nombre
          })
          .then((result) => {
            this.UsuarioExiste = result.data;
          });
      }
    },

    UsuarioSeleccionado(data) {
      this.MostrarListaUsuarios = false;
      this.UsuarioExiste = true;
      this.Datos.Nombre = data.Nombre;
      this.UsuarioElegido = data.Nombre;
      //this.UsuarioDeuda = data.Nombre;
      //this.UsuarioAbono = this.Datos.Precio;
    },

    Seleccion(data) {
      this.MostrarListaUsuarios = false;
      this.UsuarioExiste = true;
      this.Datos.Nombre = data.Nombre;
      this.UsuarioElegido = data.Nombre;
      this.$store.state.OrdenBusquedaParcial = data.Nombre;
      
      //this.UsuarioDeuda = data.Nombre;
      //this.UsuarioAbono = this.Datos.Precio;
    },

    NoRepetidos(data){
      var Datos=[];
      var noRepeat = [...new Set(data.map((a) => a.Nombre))];
      for (let i = 0; i < noRepeat.length; i++) {
        Datos[i]={Nombre:noRepeat[i]}
      }
      return Datos;
    },

    SumaTotal(data) {
      var total = 0;
      for (let i = 0; i < data.length; i++) {
        total += this.NumeroSinPuntos( data[i].Precio);
      }

      return total;
    },


  },
};