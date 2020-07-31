<template>
<aside class="menu" >
  <div class="">
     
        <header style class="modal-card-head">
          <p  class="modal-card-title">{{usuario}}</p>
          <button @click="closeSidebar()" class="delete" aria-label="close"></button>
        </header>
        
        <div v-if="Deuda.length > 0" class="content">
          <table class="table">
            <thead>
              <tr>
                <th>Productos</th>
                <th>Precio</th>
                <th>Abono</th>
                <th>Restante</th>
                <th>#</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              <tr 
              
              v-for="item in Deuda" :key="item._id">
                <td @click="DeudaSelect(item)">{{item.Productos}}</td>
                <td @click="DeudaSelect(item)">{{formatNumber(item.Precio)}}</td>
                <td @click="DeudaSelect(item)">{{formatNumber(totalAbono(item.Abono))}}</td>
                <td @click="DeudaSelect(item)">{{formatNumber(item.Precio - totalAbono(item.Abono))}}</td>
                <td @click="DeudaSelect(item)">{{item.Cantidad}}</td>
                <td @click="DeudaSelect(item)">{{formatDate(item.Fecha)}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th>{{formatNumber(Total(Deuda))}}</th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      
    </div>
</aside> 
</template>
<script>
import store from "../store/index";
export default {
  
  name: "SideBar",
  props: {
    usuario: String,
    abono:String,
  },
  data() {
    return {
      Datos: {},
      Deuda:{},
      refresh : 0
      
    };
  },

  

  created() {
   this.DeudaData()
  },

  watch: {
    Datos:{
      handler(){
        this.filtro();
      }
    }
  },
  methods: {

    autoRefresh(){
      this.refresh +=1;
    },
      
  closeSidebar(){
    this.$store.state.ModalAbono = false;
    },
    
    DeudaData() {
      
      this.axios.post("userDeuda",{Nombre:this.usuario})
      .then((result)=>{
        this.Datos = result.data;
      })
      

    },

    filtro(){
      var Abono = [];
      var _id = [];
      var filtro = this.Datos[0].Actividad.filter((a) => {
        return a.Categoria == "Deuda";
      });
      this.Deuda = filtro
      for (let i = 0; i < this.Deuda.length; i++) {
        Abono[i] = this.totalAbono(this.Deuda[i].Abono);
        _id[i] = this.Deuda[i]._id;
        if(Abono[i]>=this.Deuda[i].Precio){
          this.axios.post("userDeudaPagada",{
            _id:_id[i],
            Deuda:"Pagada",
            Categoria:"Ingresos"})
            .then((result)=>{
            
            this.DeudaData();
            })
        }else{
          
        }
        
      }

    },

    totalAbono(data){
      var sum = 0;
      for (let i = 0; i < data.length; i++) {
        sum += data[i];     
      }
      return sum;
    },

    DeudaSelect(data){
      
      this.axios
      .post("/abono",
      { _id:data._id,
        Nombre:data.Nombre,
        Abono:this.abono})
      .then((result)=>{
        this.DeudaData();
      })

      

      
    },

    formatNumber(data) {
      var format = [];
      var Number = 0;
      if (typeof data == "number") {
        Number = Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
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
        timeZone: "America/Bogota",
      };
      return (fecha = new Intl.DateTimeFormat("es-Co", options).format(
        new Date(data)
      ));
    },

    Total(data) {
      
      if (data.length > 0) {
        var sum = 0;
        for (let i = 0; i < data.length; i++) {
          sum += data[i].Precio;
        }
        return sum;
      }
      return "No datos";
      
    },
  },
};
</script>