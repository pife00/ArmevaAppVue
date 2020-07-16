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
        <table class="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Ingreso</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tabIngresos" :key="item._id" >
                    <td>{{item.Productos}}</td>
                    <td>{{formatNumber(item.Precio)}}</td>
                    <td>{{formatDate(item.Fecha)}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{{formatNumber(Total(tabIngresos))}}</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>

    <div v-show="tabActive == 2">
       <table class="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Egreso</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tabEgresos" :key="item._id" >
                    <td>{{item.Productos}}</td>
                    <td>{{formatNumber(item.Precio)}}</td>
                    <td>{{formatDate(item.Fecha)}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{{formatNumber(Total(tabEgresos))}}</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>

    <div v-show="tabActive == 3">
       <table class="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Deuda</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in tabDeuda" :key="item._id" >
                    <td>{{item.Productos}}</td>
                    <td>{{formatNumber(item.Precio)}}</td>
                    <td>{{formatDate(item.Fecha)}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>Total</th>
                    <th>{{formatNumber(Total(tabDeuda))}}</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    </div>
    

  </div>
</template>
<script>
import store from "../store/index";
export default {
  
  name: "Tabs",

  props: {
    usuario: Array
  },

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
    this.universalTabs()
  },

  methods: {
      tabSeleccionada(select){
          this.tabActive = select
          switch(select){
            
          }
      },

      universalTabs(){ 
          var filtroI = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Ingresos"
          })
         
          console.log(filtroI);
          this.tabIngresos = filtroI;
          
          var filtroE = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Egresos"
          })
          this.tabEgresos = filtroE;

          var filtroD = this.usuario.Actividad.filter(a=>{
            return a.Categoria == "Deuda"
          })
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