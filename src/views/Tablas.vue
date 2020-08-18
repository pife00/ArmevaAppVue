<template>
<div>
  <section class="section">
    <div class="container">
    
    <div class="column">
      <Panel_de_Control 
    :usuarios ="DataBaseUser"
    :registro ="DataBase"
    ></Panel_de_Control>
    </div>

    <div class="column">
    <Tabla v-if="$store.state.ModoTabla == 'Usuarios'"
    :datos="DataBaseUser" 
    :configuracion="configuracion_usuarios" 
    Modo="Usuarios"></Tabla>

    <Tabla v-if="$store.state.ModoTabla == 'Registros'"
    :datos="DataBase" 
    :configuracion="configuracion_registros" 
    Modo="Registros"></Tabla>
    </div>

    <Usuario_Perfil v-if="$store.state.UsuarioPerfil == 'Nuevo_Usuario'" 
    Modo="Nuevo Usuario" 
    :usuario="$store.state.UsuarioElegido">
    </Usuario_Perfil>

    <Usuario_Perfil v-if="$store.state.UsuarioPerfil == 'Editar_Usuario'" 
     Modo="Editar Usuario" 
    :usuario="$store.state.UsuarioElegido">
    </Usuario_Perfil>

    <Registro_Actividad v-if="$store.state.Registro_Actividad"></Registro_Actividad>

    </div>

  </section>
  
    

 
</div>

</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";
import Tabla from '../components/Tabla'
import Panel_de_Control from "../components/Panel_de_Control";
import Usuario_Perfil from '../components/Usuario_Perfil';
import Registro_Actividad from '../components/Registro_Actividad';

export default {
  components: {
    Panel_de_Control,
    Usuario_Perfil,
    Tabla,
    Registro_Actividad,
  },
  data() {
    return {
       configuracion_usuarios: [
        {
          clave: "Nombre",
          titulo: "Nombre",
        },
        {
          clave: 'Ingresos',
          titulo:'Ingresos',
        },
        {
          clave:'Deuda',
          titulo:'Deuda',
        },
        {
          clave: "Telefono",
          titulo: "Telefono",
        },
        {
          clave: "Direccion",
          titulo: "Direccion",
        },
        {
          clave: "Oficio",
          titulo: "Oficio",
        },
      ],
      configuracion_registros:[
        {
          clave:"Nombre",
          titulo:"Nombre"
        },{
          clave:"Productos",
          titulo:"Productos"
        },{
          clave:"Precio",
          titulo:"Precio"
        },{
          clave:"Cantidad",
          titulo:"#"
        },{
          clave:"Categoria",
          titulo:"Categoria",
        },{
          clave:"Fecha",
          titulo:"Fecha"
        }
      ]
    }
  },
  

  created() {
      store.commit("loadDataBase");
      store.commit("loadDataBaseUser");
  },
  computed: {
    ...mapState(["DataBase","DataBaseUser"])  
  }
};
</script>