<template>
 <aside class="menuSide" >
  <div class=" column">
        <header style class="modal-card-head">
          <p  class="modal-card-title">{{usuario}}:Deudas</p>
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
                <td @click="DeudaSeleccionada(item)">{{item.Productos}}</td>
                <td @click="DeudaSeleccionada(item)">{{MonedaLocal(item.Precio)}}</td>
                <td @click="DeudaSeleccionada(item)">{{MonedaLocal(totalAbono(item.Abono))}}</td>
                <td @click="DeudaSeleccionada(item)">{{MonedaLocal(item.Precio - totalAbono(item.Abono))}}</td>
                <td @click="DeudaSeleccionada(item)">{{item.Cantidad}}</td>
                <td @click="DeudaSeleccionada(item)">{{FechaLocal(item.Fecha)}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Total</th>
                <th>{{MonedaLocal(Total(Deuda))}}</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div class="column" v-if="MostrarDeudaElegida">
           <header class="modal-card-head">
             <p class="subtitle">Deuda elegida</p>
        </header>
        
          <table class="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>{{DeudaElegida.Productos}}</td>
                <td>{{DeudaElegida.Precio}}</td>
              </tr>
            </tbody >
            <tfoot>
              <th>Abono</th>
              <th>{{abono}}</th>
            </tfoot>
          </table>
       <footer class="modal-card-foot">
         <a
         @click="DeudaAceptada(DeudaElegida)"
         class="card-footer-item button is-info"
         >Aceptar</a>
         <a
         @click="closeSidebar()"
         class="card-footer-item button is-danger"
         >Cancelar</a>
       </footer>
        </div>
      
    </div>
</aside> 
</template>
<script>
import store from "../store/index";
import {mixins} from '@/mixins'
export default {
  
  name: "Modal_Abono",
  props: {
    usuario: String,
    abono:String,
  },
  data() {
    return {
      Datos: {},
      Deuda:{},
      DeudaElegida:[],
      MostrarDeudaElegida:false
      
    };
  },
  mixins:[mixins],

  created() {
   this.DeudaData()
  },
  computed: {
    Usuario(){
      return this.usuario;
    }
  },

  watch: {
    Datos:{
      handler(){
        this.filtro();
      }
    },
    Usuario(){
      this.DeudaData()
    }
  },

  methods: {
      
  closeSidebar(){
    this.$store.state.ModalAbono = false;
    },
    
    DeudaData() {
      
      this.axios.post("userDeuda",{Nombre:this.Usuario})
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

    DeudaSeleccionada(data){
      console.log(data);
      this.MostrarDeudaElegida = true;
      this.DeudaElegida = data;
    },

    DeudaAceptada(data){
      
      this.axios
      .post("/abono",
      { _id:data._id,
        Nombre:data.Nombre,
        Abono:this.abono})
      .then((result)=>{
        this.DeudaData();
      })
       
      
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