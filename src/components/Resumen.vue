<template>
  <div>
    <div class="columns">
      <div class="column">
        <h1 class="title 3">Resumen</h1>
      </div>

      <div class="column">
        <p class="subtitle">Fecha</p>
        <div class="select is-dark">
          <select v-model="Fecha[0]" class="input">
            <option value="0">Total</option>
            <option value="1">Enero</option>
            <option value="2">Febrero</option>
            <option value="3">Marzo</option>
            <option value="4">Abril</option>
            <option value="5">Mayo</option>
            <option value="6">Junio</option>
            <option value="7">Julio</option>
            <option value="8">Agosto</option>
            <option value="9">Septiembre</option>
            <option value="10">Octubre</option>
            <option value="11">Noviembre</option>
            <option value="12">Diciembre</option>
          </select>
        </div>
        <div class="select is-dark Año">
          <select v-model="Fecha[1]" class="input">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <div class="divider is-info">
        <a @click="showPorcentajes =!showPorcentajes">Porcentajes</a>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <p class="heading">Ingresos</p>
          <p v-if="MonedaLocal(resumen(this.balance,'Ingresos')) != 0"  
          class="title ingresos">{{MonedaLocal(resumen(this.balance,'Ingresos'))}}</p>

          <p v-else class="title ingresos">Esperando</p>
        </div>
        <div class="box">
          <p class="heading">Egresos</p>
          <p class="title egresos">{{MonedaLocal(resumen(this.balance,'Egresos'))}}</p>
        </div>
      </div>

      <div class="column">
        <div class="box">
          <p class="heading">Balance</p>
          <p
            class="title balance"
          >{{MonedaLocal( resumen(this.balance,'Ingresos')- resumen(this.balance,'Egresos'))}}</p>
        </div>
        <div class="box">
          <p class="heading">Deuda</p>
          <p class="title" style="color:slategray">{{MonedaLocal( resumen(this.balance,'Deuda') )}}</p>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <h1 class="title">Cantidad</h1>
        <pie-chart
          :data="
        [
         [filtro_universal(0,'Cantidad','Productos','Ingresos')[0],filtro_universal(0,'Cantidad','Productos','Ingresos')[1]],
         [filtro_universal(1,'Cantidad','Productos','Ingresos')[0],filtro_universal(1,'Cantidad','Productos','Ingresos')[1]],
         [filtro_universal(2,'Cantidad','Productos','Ingresos')[0],filtro_universal(2,'Cantidad','Productos','Ingresos')[1]],
         [filtro_universal(3,'Cantidad','Productos','Ingresos')[0],filtro_universal(3,'Cantidad','Productos','Ingresos')[1]],
         [filtro_universal(4,'Cantidad','Productos','Ingresos')[0],filtro_universal(4,'Cantidad','Productos','Ingresos')[1]],
         
        ]"
        ></pie-chart>
      </div>
    </div>

    <div v-if="balance.length > 0" class="columns">
      <div class="column box">
        <h1 class="title">Ingresos</h1>
        <div class="has-text-right">
          <export-excel
            class="button"
            :data="descargas('','','Ingresos')[0]"
            worksheet="Datos"
            :name="descargas('','','Ingresos')[1]"
          >
            <i class="fas fa-file-download"></i>
          </export-excel>
        </div>
        <br />
        <column-chart
          v-show="showPorcentajes == false"
          :colors="['#02AC1E']"
          :data="
        [
        [filtro_universal(0,'Precio','Productos','Ingresos')[0],filtro_universal(0,'Precio','Productos','Ingresos')[1]],
        [filtro_universal(1,'Precio','Productos','Ingresos')[0],filtro_universal(1,'Precio','Productos','Ingresos')[1]],
        [filtro_universal(2,'Precio','Productos','Ingresos')[0],filtro_universal(2,'Precio','Productos','Ingresos')[1]],
        [filtro_universal(3,'Precio','Productos','Ingresos')[0],filtro_universal(3,'Precio','Productos','Ingresos')[1]],
        [filtro_universal(4,'Precio','Productos','Ingresos')[0],filtro_universal(4,'Precio','Productos','Ingresos')[1]],
        
        ]"
          thousands=","
        ></column-chart>

        <div v-show="showPorcentajes" v-if="balance.length > 0" class="column">
          <pie-chart suffix="%" :data="filtro_porcentaje('Precio','Ingresos','Productos')"></pie-chart>
        </div>
      </div>
    </div>
    <br />

    <div v-if="balance.length > 0" class="columns">
      <div class="column box">
        <h1 class="title">Egresos</h1>
        <div class="has-text-right">
          <export-excel
            class="button"
            :data="descargas('','','Egresos')[0]"
            worksheet="Datos"
            :name="descargas('','','Egresos')[1]"
          >
            <i class="fas fa-file-download"></i>
          </export-excel>
        </div>
        <column-chart
          :colors="['#B00B1E']"
          :data="
          [
           [filtro_universal(0,'Precio','Nombre','Egresos')[0],filtro_universal(0,'Precio','Nombre','Egresos')[1]],
           [filtro_universal(1,'Precio','Nombre','Egresos')[0],filtro_universal(1,'Precio','Nombre','Egresos')[1]],
           [filtro_universal(2,'Precio','Nombre','Egresos')[0],filtro_universal(2,'Precio','Nombre','Egresos')[1]],
           [filtro_universal(3,'Precio','Nombre','Egresos')[0],filtro_universal(3,'Precio','Nombre','Egresos')[1]],
           [filtro_universal(4,'Precio','Nombre','Egresos')[0],filtro_universal(4,'Precio','Nombre','Egresos')[1]],
          ]"
          thousands=","
        ></column-chart>
      </div>
    </div>

    <div v-if="balance.length > 0" class="columns">
      <div class="column box">
        <h1 class="title">Lo que mas Deben</h1>
        <div class="has-text-right"></div>
        <column-chart
          :colors="['#AB5']"
          :data="
          [
          [filtro_universal(0,'Precio','Productos','Deuda')[0],filtro_universal(0,'Precio','Productos','Deuda')[1]],
          [filtro_universal(1,'Precio','Productos','Deuda')[0],filtro_universal(1,'Precio','Productos','Deuda')[1]],
          [filtro_universal(2,'Precio','Productos','Deuda')[0],filtro_universal(2,'Precio','Productos','Deuda')[1]],
          [filtro_universal(3,'Precio','Productos','Deuda')[0],filtro_universal(3,'Precio','Productos','Deuda')[1]],
          [filtro_universal(4,'Precio','Productos','Deuda')[0],filtro_universal(4,'Precio','Productos','Deuda')[1]],
          ]"
          thousands=","
        ></column-chart>
      </div>

      <div class="column">
        <h1 class="title">Deudores</h1>
        <div class="has-text-right">
          <export-excel
            class="button"
            :data="descargasDeuda('Deuda')[0]"
            worksheet="Datos"
            :name="descargasDeuda('Deuda')[1]"
          >
            <i class="fas fa-file-download"></i>
          </export-excel>
        </div>
        <column-chart
          :colors="['#C0D1CE']"
          :data="
          [
           [filtro_universal(0,'Precio','Nombre','Deuda')[0],filtro_universal(0,'Precio','Nombre','Deuda')[1]],
           [filtro_universal(1,'Precio','Nombre','Deuda')[0],filtro_universal(1,'Precio','Nombre','Deuda')[1]],
           [filtro_universal(2,'Precio','Nombre','Deuda')[0],filtro_universal(2,'Precio','Nombre','Deuda')[1]],
           [filtro_universal(3,'Precio','Nombre','Deuda')[0],filtro_universal(3,'Precio','Nombre','Deuda')[1]],
           [filtro_universal(4,'Precio','Nombre','Deuda')[0],filtro_universal(4,'Precio','Nombre','Deuda')[1]],
           
          ]"
          thousands=","
        ></column-chart>
      </div>
    </div>

    <div v-if="chartTotal" class="columns">
      <div class="column">
        <div class="has-text-centered">
          <h1 class="title">Meses</h1>
        </div>
        <div>
          <p class="subtitle">Ingresos</p>
          <column-chart
            :data="TotalIngresos"
            :colors="[
           ['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355']
           ['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355'],['#4CC355']
         ]"
            thousands=","
          ></column-chart>
        </div>

        <div>
          <p class="subtitle">Egresos</p>
          <column-chart
            :data="TotalEgresos"
            :colors="[
            ['#F24153'],['#F24153'],['#F24153'],['#F24153'],['#F24153'],['#F24153'],['#F24153']
            ['#F24153'],['#F24153'],['#F24153'],['#F24153']
         ]"
            thousands=","
          ></column-chart>
        </div>

        <div>
          <p class="subtitle">Deudas</p>
          <column-chart
            :data="TotalDeudas"
            :colors="[
            ['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],
            ['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE'],['#C0D1CE']         
         ]"
            thousands=","
          ></column-chart>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import store from "../store/index";
import { mixins } from "../mixins";

export default {
  name: "Resumen",
  store,
  components: {},
  props: {
    balance: Array,
    user: Array,
  },
  data() {
    return {
      fields: [
            {
              'title': '#',
              'name': 'id', 
            },
            {
              'title': 'Nombre',
              'name': 'name', 
            },
            {
              'title': 'Ciudad',
              'name': 'city', 
            },
            {
              'title': 'País',
              'name': 'country', 
            },
            {
              'title': 'birthdate',
              'name': 'F. Nacimiento',
              'type': 'Date',
              'format': 'DD/MM/YYYY'
            }
        ],

      Fecha: store.state.Fecha,
      chartTotal: false,
      TotalIngresos: [],
      TotalEgresos: [],
      TotalDeudas: [],
      TotalUltimate: [],
      showPorcentajes: false,
    };
  },
  mixins: [mixins],

  watch: {
    Fecha(value) {
      this.changeFecha(value);
    },
  },

  computed: {
    datos() {
      return this.balance;
    },
    usuarios() {
      return this.user;
    },
  },

  methods: {
    Porcentaje() {},
    descargas(valor, criterio, categoria) {
      var p = 0;
      var ultimateFilter = [];

      if (this.balance.length > 0) {
        var filtro = this.balance.filter((data) => {
          return data.Categoria == categoria;
        });

        if (categoria == "Deuda") {
          for (let i = 0; i < filtro.length; i++) {
            for (let j = 0; j < this.user.length; j++) {
              if (filtro[i].Nombre == this.user[j].Nombre) {
                filtro[i].Telefono = this.user[j].Telefono;
              }
            }
          }
        }

        var fecha = new Date();

        return [
          filtro,
          categoria + " " + new Intl.DateTimeFormat().format(fecha),
        ];
      }
    },

    E(data,id){
      return data._id == id;
    },

    descargasDeuda(categoria) {
      var filtro = [];
      var ultimateFilter = [];
      

      if (this.datos.length > 0) {
        filtro = this.datos.filter((data) => {
          return data.Categoria == categoria;
        });

        for (let i = 0; i < filtro.length; i++) {
           var temporal = this.FechaLocal(filtro[i].Fecha); 
           
           filtro[i].Fechas = temporal;
        }
       

        for (let i = 0; i < filtro.length; i++) {
          for (let j = 0; j < this.user.length; j++) {
            if (filtro[i].Nombre == this.user[j].Nombre) {
              filtro[i].Telefono = this.user[j].Telefono;   
            }         
          }
        }

        for (let i = 0; i < filtro.length; i++) {
          for (let j = 0; j < this.user.length; j++) {
            if(filtro[i].Nombre == this.user[j].Nombre){
               for (let k = 0; k < this.user[j].Actividad.length; k++) {
                if(filtro[i]._id == this.user[j].Actividad[k]._id){
                  if(this.user[j].Actividad[k].Abono.length >0
                  && this.user[j].Actividad[k].Deuda == "Activa"
                  ){
                    filtro[i].Abono =
                    this.SumaTotalDeuda(this.user[j].Actividad[k].Abono);
                  }
                }
              }    
            }
          }
          
        }
        

        var FiltroDefinitivo = filtro.map(function (x) {
          return {
            Nombre: x.Nombre,
            Productos: x.Productos,
            Precio: x.Precio,
            Abono:x.Abono,
            "#": x.Cantidad,
            Telefono: x.Telefono,
            Fecha: x.Fechas,
          };
        });

        var fecha = new Date();
        return [
          FiltroDefinitivo,
          categoria + " " + new Intl.DateTimeFormat().format(fecha),
        ];
      }
    },

    resumen(data, value) {
      var msg = "No Data";
      if (data.length > 0) {
        var element = 0;
        var filtro = data.filter((fil) => {
          return fil.Categoria == value;
        });
        for (let i = 0; i < filtro.length; i++) {
          element += filtro[i].Precio;
        }
        return element;
      } else {
        return false;
      }
    },

    filtro_porcentaje(valor, categoria, criterio) {
      var ultimateFilter = [];
      var Porcentaje = [];
      var filtro = this.balance.filter((data) => {
        return data.Categoria == categoria;
      });
      var noRepeat = [...new Set(filtro.map((a) => a[criterio]))];

      for (let i = 0; i < noRepeat.length; i++) {
        for (let j = 0; j < filtro.length; j++) {
          if (noRepeat[i] == filtro[j][criterio]) {
            var values = this.unique(filtro, valor, noRepeat[i], criterio);
            ultimateFilter[i] = { Nombre: values[0], [valor]: values[1] };
          }
        }
      }

      for (let i = 0; i < ultimateFilter.length; i++) {
        Porcentaje[i] = [
          ultimateFilter[i].Nombre,
          Math.round(
            (ultimateFilter[i].Precio /
              this.resumen(this.balance, "Ingresos")) *
              100
          ),
        ];
      }
      return Porcentaje;
    },

    filtro_universal(indice, valor, criterio, categoria) {
      var sum = 0;
      var ultimateFilter = [];
      var filtro = [];

      filtro = this.balance.filter((data) => {
        return data.Categoria == categoria;
      });

      if (filtro.length > 0) {
        var noRepeat = [...new Set(filtro.map((a) => a[criterio]))];

        for (let i = 0; i < noRepeat.length; i++) {
          if (noRepeat[i] != "") {
            for (let j = 0; j < filtro.length; j++) {
              if (noRepeat[i] == filtro[j][criterio]) {
                var values = this.unique(filtro, valor, noRepeat[i], criterio);
                ultimateFilter[i] = { Nombre: values[0], [valor]: values[1] };
              }
            }
          }
        }

        ultimateFilter = ultimateFilter.sort(function (a, b) {
          return b[valor] - a[valor];
        });

        if (ultimateFilter.length > 0) {
          if (ultimateFilter[indice] == undefined) {
            return ["Espera", 0];
          } else {
            return [
              ultimateFilter[indice].Nombre,
              ultimateFilter[indice][valor],
            ];
          }
        }
      } else {
        return ["0", 0];
      }
    },

    unique(array, valor, name, criterio) {
      var a = [];
      var sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i][criterio] == name) {
          sum += array[i][valor];
          a[0] = { Nombre: name, [valor]: sum };
        }
      }
      return [a[0].Nombre, a[0][valor]];
    },

    uniqueFecha(array, name) {
      var a = [];
      var sum = 0;
      for (let i = 0; i < array.length; i++) {
        if (new Date(array[i].Fecha).getMonth() == name) {
          sum += array[i].Precio;
          a[0] = { Nombre: name, Precio: sum };
        }
      }
      return [this.getMes(name), sum];
    },

    getMes(name) {
      switch (name) {
        case 0:
          return "Enero";
          break;
        case 1:
          return "Febrero";
          break;
        case 2:
          return "Marzo";
          break;
        case 3:
          return "Abril";
          break;
        case 4:
          return "Mayo";
          break;
        case 5:
          return "Junio";
          break;
        case 6:
          return "Julio";
          break;
        case 7:
          return "Agosto";
          break;
        case 8:
          return "Septiembre";
          break;
        case 9:
          return "Octubre";
          break;
        case 10:
          return "Noviembre";
          break;
        case 11:
          return "Diciembre";
          break;
      }
    },

    changeFecha(value) {
      this.$store.commit("changeFecha", value);
      store.commit("loadDataBase");
      if (this.Fecha[0] == 0) {
        var Criterio = ["Ingresos", "Egresos", "Deuda"];
        this.chartTotal = true;
        this.totalChart(this.Fecha[1], Criterio);
      } else {
        this.chartTotal = false;
      }
    },

    totalChart(Año, Criterio) {
      var data = [];
      var temp = [];
      var ultimate = [];

      var sum = 0;
      this.axios.get("/").then((result) => {
        data = result.data;

        for (let i = 0; i <= 2; i++) {
          var filtro = data.filter((data) => {
            return data.Categoria == Criterio[i];
          });

          for (let j = 0; j < filtro.length; j++) {
            for (let k = 0; k < 12; k++) {
              if (k == new Date(filtro[j].Fecha).getMonth()) {
                var values = this.uniqueFecha(filtro, k);
                temp[k] = {
                  name: [values[0]],
                  data: { [Criterio[i]]: values[1] },
                };
              } else {
              }
              ultimate = temp.filter((data) => {
                return data != null;
              });
            }
          }
          switch (i) {
            case 0:
              this.TotalIngresos = ultimate;
              break;
            case 1:
              this.TotalEgresos = ultimate;
              break;
            case 2:
              this.TotalDeudas = ultimate;
              break;
          }
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>