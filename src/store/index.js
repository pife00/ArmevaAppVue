import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        DataBase: [],
        DataBaseUser: [],
        DataBaseUserSelect: [],
        querry: [],
        Fecha: [new Date().getMonth() + 1, new Date().getFullYear()],
        ModalAñadir:false,
        ModalEditar:false,
        ModalUsuario:false,

    },
    actions: {

    },
    mutations: {
        SET_POST(state, post) {
            state.DataBase = post;
        },

        changeFecha(state, value) {
           /* state.Fecha = value;
            var data = `{"Fecha":{"$gte":"${state.Fecha[1]}-${state.Fecha[0]}","$lte":"${state.Fecha[1]}-${state.Fecha[0]}-31"}}`;
            axios.post("getDate", {
                    data
                })
                .then((result) => {
                    state.DataBase = result;

                }).catch(error => {
                    console.log(error);
                });*/
        },

        loadDataBaseUser(state) {
            axios.get("user")
                .then((result) => {
                    state.DataBaseUser = result.data;
                });
        },

        modalUp(){
            state.ModalU = true;
        },


        loadDataBase(state) {

            if (state.Fecha[0] == 0) {
                
                axios.get("/")
                    .then((result) => {
                        state.DataBase = result.data;
                    });

            } else {
                var data = `{"Fecha":{"$gte":"${state.Fecha[1]}-${state.Fecha[0]}","$lte":"${state.Fecha[1]}-${state.Fecha[0]}-31"}}`;
                
                axios.post("getDate", {
                        data
                    })
                    .then((result) => {
                        state.DataBase = result.data;
                    }).catch(error => {

                    });
            }

        }

    },

});