<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li v-bind:class="{'is-active':tabActive == 1}"  
        v-on:click="tabSeleccionada(1)">
          <a>Ingresos</a>
        </li>
        <li  v-bind:class="{'is-active':tabActive == 2}" 
         v-on:click="tabSeleccionada(2)">
          <a>Egresos</a>
        </li>
        <li  v-bind:class="{'is-active':tabActive == 3}" 
         v-on:click="tabSeleccionada(3)">
          <a>Deuda</a>
        </li>
      </ul>
    </div>

    <div v-show="tabActive == 1">
      <Tabla :datos = "tabIngresos" modo="Registro" :configuracion="configuracion_ingresos_egresos"></Tabla> 
    </div>

    <div v-show="tabActive == 2">
       <Tabla :datos = "tabEgresos" modo="Registro" :configuracion="configuracion_ingresos_egresos"></Tabla> 
    </div>

    <div v-show="tabActive == 3">
       <Tabla :datos = "tabDeuda" modo="Registro" :configuracion="configuracion_deuda"></Tabla> 
    </div>
  </div>
</template>
<script>
import Tabla from '../components/Tabla.vue';
import store from "../store/index";

export default {
  name: "Tabs",
  components: {
    
    Tabla,
  },

  props: [
    "usuario",
    "configuracion_ingresos_egresos",
    "configuracion_deuda"
  ],

  data() {
      return {
          tabActive:1,
          tabData : this.usuario,
          tabIngresos:[],
          tabEgresos:[],
          tabDeuda:[],
      }
  },

 

  created() {
    
  },
  watch: {
    usuario(){
      this.universalTabs()
    }
  },

  methods: {
      tabSeleccionada(select){
          this.tabActive = select
          switch(select){        
          }
      },

      Abono(){
         var filtroD = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Deuda"
          }) 

      },

      universalTabs(){
        var sum = 0;
        var AbonoFiltro = [];
          var filtroI = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Ingresos"
          })
         
          this.tabIngresos = filtroI;
          
          var filtroE = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Egresos"
          })
          this.tabEgresos = filtroE;

          var filtroD = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Deuda"
          })

         for (let i = 0; i < filtroD.length; i++) {  
            for (let j = 0; j < filtroD[i].Abono.length; j++) {
              sum +=  filtroD[i].Abono[j]
            }
            filtroD[i].Abono = [];
            filtroD[i].Abono = sum;
            sum = 0;
          }
          
          
          this.tabDeuda = filtroD;
      },

      formatNumber(data) {
      var format = [];
      var Number = 0;
      if (typeof data == "number") {
        Number = Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP"
        }).format(data);

        return Number;
      }
    },

    formatDate(data) {
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
        timeZone: "America/Bogota"
      };
      return (fecha = new Intl.DateTimeFormat("es-Co", options).format(
        new Date(data)
      ));
    },

    Total(data){
        if(data.length > 0){
            var sum = 0
        for (let i = 0; i < data.length; i++) {
            sum += data[i].Precio;
        }
        return sum
        }
        return "No datos"
        
    }
  },
};
</script>