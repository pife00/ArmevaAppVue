import store from "./store";

export const mixins = {
  methods: {

    MonedaLocal(data) {
      var numero;
      if (typeof data == "number") {
        numero = new Intl.NumberFormat('en-Us').format(data);
        return numero;
      } else {
        numero = new Intl.NumberFormat().format(data);
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
      fecha = new Intl.DateTimeFormat("es-Co", options).format(new Date(data));
      //console.log(fecha);
      return fecha;
    },

    TablaFiltroUsuario(orden,array){
      var filtro = array;
      for (let i = 0; i < array.length; i++) {
        filtro[i][orden] = this.NumeroSinPuntos(array[i][orden]); 
      }
      
      filtro = filtro.sort(function(a,b){
        return b[orden]-a[orden];
      });
      for (let j = 0; j < array.length; j++) {
        filtro[j][orden] = this.MonedaLocal(filtro[j][orden]);
      }
      return filtro;
    },

    TablaFiltro(data, criterio, array) {
      var filtro = [];
      if(array.length > 0){
        if (array.length > 0) {
          filtro = array.filter(a => {
            return a[criterio] == data;
          });
          return filtro;
        }
      }else{
        filtro = this.datos.filter(a=>{
           return a[criterio] == data;
        });
      }
      return filtro;


    },

    TablaFiltroBusqueda(data, criterio) {
      if (criterio == "Total") {
        return data;
      } else {
        var filtro = data.filter(a => {
          return a.Categoria == criterio;
        });
        return filtro;
      }


    },

    Filtro(data, criterio) {

      var filtro = this.datos.filter(a => {
        return a[criterio] == data;
      });
      return filtro;

    },

    //Orden del Modo Registro Tabla
    TablaOrdenRegistro(orden, categoria, busqueda) {
     
      if (busqueda != '') {
        return this.BuscarRegistro(busqueda);
        //Si no hay criterio de Busqueda  
      } else {
        var Datos = [];
        var datos = [];
        if (orden == "Total") {
          datos = this.$store.state.DataBase;
          for (let i = 0; i < datos.length; i++) {
            Datos[i] = {
              _id: datos[i]._id,
              Nombre: datos[i].Nombre,
              Productos: datos[i].Productos,
              Precio: this.MonedaLocal(datos[i].Precio),
              Cantidad: datos[i].Cantidad,
              Categoria: datos[i].Categoria,
              Fecha: this.FechaLocal(datos[i].Fecha),
            };
          }
          return Datos;

        } else {
          datos = this.TablaFiltro(orden, categoria, '');
          for (let i = 0; i < datos.length; i++) {
            Datos[i] = {
              _id: datos[i]._id,
              Nombre: datos[i].Nombre,
              Productos: datos[i].Productos,
              Precio: this.MonedaLocal(datos[i].Precio),
              Cantidad: datos[i].Cantidad,
              Categoria: datos[i].Categoria,
              Fecha: this.FechaLocal(datos[i].Fecha),
            };
          }
          return Datos;
        }
      }
    },

    BuscarRegistro(busqueda) {
      var Nombre = this.SoloNombre(store.state.DataBase, 'Nombre');
      var Productos = this.SoloNombre(store.state.DataBase, 'Productos');
      var referencias = Nombre.concat(Productos);

      var Datos = [{}];
      var resultado = [];

      var BuscaNombre = store.state.DataBase.filter(a => {
        return a.Nombre == busqueda;
      });
      var BuscaProductos = store.state.DataBase.filter(a => {
        return a.Productos == busqueda;
      });

      var datos = BuscaNombre.concat(BuscaProductos);

      if (busqueda != "") {
        for (let i = 0; i < referencias.length; i++) {
          if (referencias[i].Nombre.match(busqueda)) {
            resultado.push(referencias[i]);
          }
        }
        this.RegistrosParciales = resultado;
        //  store.state.RegistroParcial = resultado ;
        this.MostrarListaRegistros = true;
      } else {
        this.MostrarListaRegistros = false;
        store.state.RegistroParcial = "";
      }

      if (datos.length > 0) {
        for (let i = 0; i < datos.length; i++) {
          Datos[i] = {
            _id: datos[i]._id,
            Nombre: datos[i].Nombre,
            Productos: datos[i].Productos,
            Precio: this.MonedaLocal(datos[i].Precio),
            Cantidad: datos[i].Cantidad,
            Categoria: datos[i].Categoria,
            Fecha: this.FechaLocal(datos[i].Fecha),
          };
        }
        this.MostrarListaRegistros = false;
        return this.RegistroConFiltro(this.Orden, 'Categoria', Datos);


      } else {
        var temp = [{
          Mensaje: "No encontrado"
        }];

        return temp;
      }

    },

    RegistroConFiltro(orden, categoria, array) {
      //console.log(orden, categoria, array);
      var Datos = [];
      var datos = [];
      if (orden == "Total") {
        datos = array;
        for (let i = 0; i < datos.length; i++) {
          Datos[i] = {
            _id: datos[i]._id,
            Nombre: datos[i].Nombre,
            Productos: datos[i].Productos,
            Precio: datos[i].Precio,
            Cantidad: datos[i].Cantidad,
            Categoria: datos[i].Categoria,
            Fecha: datos[i].Fecha,
          };
        }
        return Datos;

      } else {
        datos = this.TablaFiltro(orden, categoria, array);
        for (let i = 0; i < datos.length; i++) {
          Datos[i] = {
            _id: datos[i]._id,
            Nombre: datos[i].Nombre,
            Productos: datos[i].Productos,
            Precio: datos[i].Precio,
            Cantidad: datos[i].Cantidad,
            Categoria: datos[i].Categoria,
            Fecha: datos[i].Fecha,
          };
        }
        return Datos;
      }

    },

    TablaOrdenUsuario(orden,categoria,busqueda){
      if(busqueda !=''){
        return store.state.UsuarioParcial;
      }else{
        var Datos = this.TablaOrdenUsuarioFiltro();
        if(orden == 'A-Z'){
          return Datos;
        }
        if(orden == 'Ingresos' || orden == 'Deuda'){
        var FiltroI = this.TablaFiltroUsuario(orden,Datos);
          //console.log(FiltroI); 
          return FiltroI;
        }

      }
    },

    TablaOrdenUsuarioFiltro(){
      var Datos = [{}];
        var filtroI = [{}];
        var filtroD = [{}];
    
            for (let i = 0; i < this.datos.length; i++) {
              filtroI[i] = this.datos[i].Actividad.filter((a) => {
              return a.Categoria == "Ingresos";
              });
            }
  
           for (let i = 0; i < this.datos.length; i++) {
              filtroD[i] = this.datos[i].Actividad.filter((a) => {
              return a.Categoria == "Deuda";
              });
            }
            
  
            for (let i = 0; i < filtroI.length; i++) {
              filtroI[i] = this.MonedaLocal(this.SumaTotalSinPuntos(filtroI[i]));
            }
  
            for (let i = 0; i < filtroI.length; i++) {
               filtroD[i] = this.MonedaLocal(this.SumaTotalSinPuntos(filtroD[i]));
               if(filtroD[i] == '0'){
                 filtroD[i] = 'No';
               }
            }
  
            for (let i = 0; i < this.datos.length; i++) {
              Datos[i] = {
                _id: this.datos[i]._id,
                Nombre: this.datos[i].Nombre,
                Ingresos:filtroI[i],
                Deuda:filtroD[i],
                Telefono: this.datos[i].Telefono,
                Direccion: this.datos[i].Direccion,
                Oficio: this.datos[i].Oficio,
                Actividad: this.datos[i].Actividad,
              };
            }
            return Datos;
    },



    NumeroSinPuntos(data) {
      var numero = data.replace(/[,]/g, '');
      numero = parseInt(numero);
      if (Number.isNaN(numero)) {
        return 0;
      } else {
        return numero;
      }

    },

    SinPuntos(data) {
      return data.split(',').join('');
    },

    VerficarExistencia() {
      if (this.UsuarioExiste == true) {
        this.BotonActivo = true;

      }
      if (this.UsuarioExiste == false) {
        this.BotonActivo = false;
      }
    },

    BuscarUsuarioRegistro() {
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

    BuscarUsuario() {
      if (this.Datos.Nombre == undefined || this.Datos.Nombre == "") {} else {
        this.axios
          .post("/userPartial", {
            Nombre: this.Datos.Nombre
          })
          .then((result) => {
            this.UsuariosParciales = result.data;
            store.state.UsuarioParcial = result.data;
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

    SoloNombre(data, criterio) {
      var Nombre = [];
      var Data = [];
      for (let i = 0; i < data.length; i++) {
        Nombre[i] = {
          Nombre: data[i][criterio]
        };
      }
      Data = [...new Set(Nombre.map((a) => a.Nombre))];
      for (let i = 0; i < Data.length; i++) {
        Data[i] = {
          Nombre: Data[i]
        };
      }
      return Data;
    },

    UsuarioSeleccionado(data) {
      this.MostrarListaUsuarios = false;
      this.UsuarioExiste = true;
      this.Datos.Nombre = data.Nombre;
      this.UsuarioElegido = data.Nombre;
      store.state.UsuarioParcial = [data];
      
    },

    ModalUsuarioSeleccionado(data) {
      this.MostrarListaUsuarios = false;
      this.UsuarioExiste = true;
      this.Datos.Nombre = data.Nombre;
      this.UsuarioElegido = data.Nombre;
      this.UsuarioDeuda = data.Nombre;
      this.UsuarioAbono = this.Datos.Precio;
    },

    RegistroSeleccionado(data) {
      this.MostrarListaUsuarios = false;
      this.UsuarioExiste = true;
      this.Datos.Nombre = data.Nombre;
      this.UsuarioElegido = data.Nombre;
      store.state.RegistroParcial = data;
      //this.UsuarioDeuda = data.Nombre;
      //this.UsuarioAbono = this.Datos.Precio;
    },

    NoRepetidos(data) {
      var Datos = [];
      var noRepeat = [...new Set(data.map((a) => a.Nombre))];
      for (let i = 0; i < noRepeat.length; i++) {
        Datos[i] = {
          Nombre: noRepeat[i]
        };
      }
      return Datos;
    },

    SumaTotal(data,cantidad) {
      var total = 0;
      if(cantidad !=''){

        for (let i = 0; i < data.length; i++) {
          total += data[i].Cantidad;
        }
        return total;
      }else{
        
        for (let i = 0; i < data.length; i++) {
          total += this.NumeroSinPuntos(data[i].Precio);
        }
        return total;
      }
    },


    SumaTotalSinPuntos(data) {
      var total = 0;

      for (let i = 0; i < data.length; i++) {
        total += data[i].Precio;
      }

      return total;
    },

    SumaTotalDeuda(data) {
      var total = 0;
      for (let i = 0; i < data.length; i++) {
        total += data[i];
      }
      return total;
    }

  },
};