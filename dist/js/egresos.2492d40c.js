(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["egresos"],{"4b11":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal is-active"},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.closeModal()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.Modo))]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal()}}})]),a("section",{staticClass:"modal-card-body"},[t.notificacion?a("div",{staticClass:"notification is-info"},[a("button",{staticClass:"delete",on:{click:function(e){t.notificacion=!1}}}),t._v(" Nombre deben ser llenado, cierre en: "+t._s(t.notificacionTemp)+" ")]):t._e(),a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"}),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Nombre")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Nombre,expression:"Datos.Nombre"}],staticClass:"input",attrs:{name:"Nombre",type:"text",placeholder:"Nombre"},domProps:{value:t.Datos.Nombre},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Nombre",e.target.value)}}})])])])]),a("div",{staticClass:"field"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[t._v("Telefono")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Telefono,expression:"Datos.Telefono"}],staticClass:"input",attrs:{name:"Telefono",type:"text",placeholder:"Telefono"},domProps:{value:t.Datos.Telefono},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Telefono",e.target.value)}}})]),a("div",{staticClass:"column is-5"},[a("label",{staticClass:"label"},[t._v("Direccion")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Direccion,expression:"Datos.Direccion"}],staticClass:"input",attrs:{placeholder:"Direccion"},domProps:{value:t.Datos.Direccion},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Direccion",e.target.value)}}})])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Oficio")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Oficio,expression:"Datos.Oficio"}],staticClass:"input",attrs:{name:"Precio",type:"text",placeholder:"Oficio"},domProps:{value:t.Datos.Oficio},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Oficio",e.target.value)}}})])])])])])])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-info",on:{click:function(e){return t.SendData()}}},[t._v(t._s(t.Modo))]),a("button",{staticClass:"button",on:{click:function(e){return t.closeModal()}}},[t._v("Cancelar")])])])])},s=[],i=a("4360"),n={props:{Modo:String},data:function(){return{Datos:[],notificacion:!1,notificacionTemp:9}},computed:{},watch:{},methods:{closeNotificacion:function(){var t=this,e=setInterval((function(){t.notificacionTemp--,0==t.notificacionTemp&&(clearInterval(e),t.notificacion=!1)}),1e3);this.notificacionTemp=9},closeModal:function(){i["a"].state.ModalUsuario=!1},SendData:function(){var t=this;"Nuevo Usuario"==this.Modo&&(void 0==this.Datos.Nombre?(this.notificacion=!0,this.closeNotificacion()):this.axios.post("/newUser",{Nombre:this.Datos.Nombre,Telefono:this.Datos.Telefono,Cordenada:this.Datos.Cordenada,Direccion:this.Datos.Direccion,Oficio:this.Datos.Oficio,Sexo:this.Datos.Sexo}).then((function(e){console.log(e.data),t.$store.commit("loadDataBase"),t.Datos.Nombre="",t.Datos.Telefono="",t.Datos.Cordenada="",t.Datos.Direccion="",t.Datos.Oficio="",t.Datos.Sexo="",t.closeModal()})).catch((function(t){})))}}},r=n,c=a("2877"),l=Object(c["a"])(r,o,s,!1,null,null,null);e["a"]=l.exports},"5b6a":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("div",{staticClass:"column has-text-centered"},[a("button",{staticClass:"button is-info",staticStyle:{"border-color":"gray"},on:{click:function(e){return t.Modal()}}},[t._v("Añadir")])]),a("Table",{attrs:{usuarios:t.DataBase}}),a("fade-transition",[t.$store.state.ModalAñadir?a("Modal_AU",{attrs:{Modo:t.Modo,user:t.Ingresos}}):t._e()],1)],1)])},s=[],i=a("5530"),n=a("2f62"),r=a("7c76"),c=a("4360"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.sendQuerry()}}},[a("div",{staticClass:"field has-addons"},[a("div",{staticClass:"control"},[a("div",{staticClass:"select is-dark"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Productos,expression:"Datos.Productos"}],staticClass:"input",attrs:{id:"querryProductos",name:"querryProductos"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.Datos,"Productos",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Nombre"}},[t._v("Nombre")]),a("option",{attrs:{value:"Productos"}},[t._v("Producto")]),a("option",{attrs:{value:"Precio"}},[t._v("Precio")]),a("option",{attrs:{value:"Fecha"}},[t._v("Fecha")])])])]),a("div",{staticClass:"control",staticStyle:{width:"70%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Querry,expression:"Datos.Querry"}],staticClass:"input is-dark",attrs:{name:"querry",type:"text"},domProps:{value:t.Datos.Querry},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Querry",e.target.value)}}})]),t._m(0)]),a("div",{staticClass:"is-centered"},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.optionCheck,expression:"optionCheck"}],attrs:{type:"checkbox",value:"Ingresos"},domProps:{checked:Array.isArray(t.optionCheck)?t._i(t.optionCheck,"Ingresos")>-1:t.optionCheck},on:{change:function(e){var a=t.optionCheck,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i="Ingresos",n=t._i(a,i);o.checked?n<0&&(t.optionCheck=a.concat([i])):n>-1&&(t.optionCheck=a.slice(0,n).concat(a.slice(n+1)))}else t.optionCheck=s}}}),t._v(" Ingresos ")]),a("label",{staticClass:"checkbox",staticStyle:{"padding-left":"10px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.optionCheck,expression:"optionCheck"}],attrs:{type:"checkbox",value:"Egresos"},domProps:{checked:Array.isArray(t.optionCheck)?t._i(t.optionCheck,"Egresos")>-1:t.optionCheck},on:{change:function(e){var a=t.optionCheck,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i="Egresos",n=t._i(a,i);o.checked?n<0&&(t.optionCheck=a.concat([i])):n>-1&&(t.optionCheck=a.slice(0,n).concat(a.slice(n+1)))}else t.optionCheck=s}}}),t._v(" Egresos ")]),a("label",{staticClass:"checkbox",staticStyle:{"padding-left":"10px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.optionCheck,expression:"optionCheck"}],attrs:{type:"checkbox",value:"Deuda"},domProps:{checked:Array.isArray(t.optionCheck)?t._i(t.optionCheck,"Deuda")>-1:t.optionCheck},on:{change:function(e){var a=t.optionCheck,o=e.target,s=!!o.checked;if(Array.isArray(a)){var i="Deuda",n=t._i(a,i);o.checked?n<0&&(t.optionCheck=a.concat([i])):n>-1&&(t.optionCheck=a.slice(0,n).concat(a.slice(n+1)))}else t.optionCheck=s}}}),t._v(" Deudor ")])])]),a("table",{staticClass:"table is-fullwidth",attrs:{id:"RegistroTablas"}},[t._m(1),a("tbody",t._l(t.usuarios,(function(e){return a("tr",{key:e._id},[a("td",[t._v(t._s(e.Nombre))]),a("td",[t._v(t._s(e.Productos))]),a("td",[t._v(t._s(t.formatNumber(e.Precio)))]),a("td",[t._v(t._s(e.Cantidad))]),a("td",[t._v(t._s(t.formatDate(e.Fecha)))]),a("td",[a("div",{staticClass:"columns "},[a("div",{staticClass:"column is-3"},[a("a",{staticClass:"button is-white",attrs:{id:"editButton"},on:{click:function(a){return t.showModalUniversal(e._id,e.Nombre,e.Productos,e.Precio,e.Cantidad,e.Categoria,e.Fecha)}}},[t._m(2,!0)])]),a("div",{staticClass:"column is-3"},[a("a",{staticClass:"button is-white",on:{click:function(a){return t.showModalDetele(e.Nombre,e.Precio,e._id)}}},[t._m(3,!0)])])])])])})),0),a("tfoot",[a("tr",[a("th",[t._v("Total")]),a("th"),a("th",[t._v(t._s(t.formatNumber(t.total())))])])])]),a("fade-transition",[t.$store.state.ModalEditar?a("Modal_AU",{attrs:{Modo:t.Modo,user:t.DatosEdit}}):t._e()],1),a("modal",{attrs:{width:350,height:200,name:"delete"}},[a("div",{staticClass:"columns is-mobile"},[a("div",{staticClass:"column "},[a("div",{staticClass:"has-text-centered",staticStyle:{"margin-top":"30px"}},[a("h1",{staticClass:"title is-4"},[t._v("¿Desea eliminar este archivo?")]),a("p",[t._v("Una vez eliminados no se podran recuperar")]),a("p",[t._v(t._s(t.ModalId))]),a("div",{staticClass:"column"},[a("button",{staticClass:"button is-light",staticStyle:{"margin-right":"5px"},on:{click:function(e){return t.hideModalDelete()}}},[t._v("Cancelar")]),a("button",{staticClass:"button is-danger",on:{click:function(e){return t.deleteData(t.ModalId,t.ModalNombre)}}},[t._v("Eliminar")])])])])])])],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"is-dark"},[a("button",{staticClass:"submit button is-info",staticStyle:{"border-color":"gray"},attrs:{id:"busqueda"}},[a("i",{staticClass:"fas fa-search"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Nombre")]),a("th",[t._v("Producto")]),a("th",[t._v("Precio")]),a("th",[t._v("Cantidad")]),a("th",[t._v("Fecha")]),a("th",[t._v("Operacion")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-edit"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-small"},[a("i",{staticClass:"fas fa-trash-alt"})])}],u=(a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal is-active",attrs:{id:"mymodal"}},[a("div",{staticClass:"modal-background",on:{click:function(e){return t.closeModal()}}}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v(t._s(t.Modo))]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){return t.closeModal()}}})]),a("section",{staticClass:"modal-card-body"},[t.notificacion?a("div",{staticClass:"notification is-warning"},[a("button",{staticClass:"delete",on:{click:function(e){t.notificacion=!1}}}),t._v(" Categoria y nombre deben ser llenados cierre en: "+t._s(t.notificacionTemp)+" ")]):t._e(),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{staticClass:"label"},[t._v("Categoria")]),a("div",{staticClass:"select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Categoria,expression:"Datos.Categoria"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.Datos,"Categoria",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"Ingresos"}},[t._v("Ingresos")]),a("option",{attrs:{value:"Egresos"}},[t._v("Egresos")]),a("option",{attrs:{value:"Deuda"}},[t._v("Deuda")])])])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Nombre")]),a("div",{staticClass:"control",class:{"is-loading":t.loading}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Nombre,expression:"Datos.Nombre"}],staticClass:"input",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.Datos.Nombre},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Nombre",e.target.value)}}})]),t.showUserPartial?a("ul",{staticClass:"my-list"},t._l(t.UserPartial,(function(e){return a("li",{key:e._id,on:{click:function(a){return t.userSelected(e.Nombre)}}},[t._v(" "+t._s(e.Nombre))])})),0):t._e(),1==t.UserExist?a("p",{staticStyle:{color:"green"}},[t._m(0),t._v(" Este usuario existe ")]):t._e(),0==t.UserExist?a("p",{staticStyle:{color:"red"}},[t._m(1),t._v(" Este usuario no existe presione "),a("a",{on:{click:function(e){t.showModalUsuariosAñadir()}}},[t._v("aqui")]),t._v(" para añadirlo ")]):t._e(),null==t.UserExist?a("p",{staticStyle:{color:"#3298dc"}},[t._m(2),t._v(" En espera ")]):t._e()]),a("div",{staticClass:"field"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("label",{staticClass:"label"},[t._v("Producto")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Productos,expression:"Datos.Productos"}],staticClass:"input",attrs:{type:"text",list:"Productos"},domProps:{value:t.Datos.Productos},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Productos",e.target.value)}}}),t._m(3)])]),a("div",{staticClass:"column is-5"},[a("label",{staticClass:"label"},[t._v("Cantidad")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Cantidad,expression:"Datos.Cantidad"}],staticClass:"input",attrs:{type:"number",min:"1",max:"30"},domProps:{value:t.Datos.Cantidad},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Cantidad",e.target.value)}}})])])]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Precio")]),a("div",{staticClass:"control"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.Datos.Precio,expression:"Datos.Precio"}],staticClass:"input",attrs:{id:"Precio",name:"Precio",type:"text",placeholder:"Precio"},domProps:{value:t.Datos.Precio},on:{input:function(e){e.target.composing||t.$set(t.Datos,"Precio",e.target.value)}}})])])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button is-info",attrs:{disabled:0==t.button},on:{click:function(e){return t.SendData()}}},[t._v(t._s(t.Modo))]),a("button",{staticClass:"button",on:{click:function(e){return t.closeModal()}}},[t._v("Cancelar")])])]),t.$store.state.ModalUsuario?a("Modal_Usuarios",{attrs:{Modo:t.Nuevo_Usuario}}):t._e()],1)}),m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon has-text-success"},[a("i",{staticClass:"fas fa-check-square"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon has-text-danger"},[a("i",{staticClass:"fas fa-ban"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon has-text-info"},[a("i",{staticClass:"fas fa-user-clock"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("datalist",{attrs:{id:"Productos"}},[a("option",{attrs:{value:"Pollo"}},[t._v("Pollo")]),a("option",{attrs:{value:"Gallinita"}},[t._v("Gallinita")]),a("option",{attrs:{value:"Huevo"}},[t._v("Huevo")]),a("option",{attrs:{value:"Pescado"}},[t._v("Pescado")])])}],f=a("4b11"),p={components:{Modal_Usuarios:f["a"]},props:{Modo:String,user:Object},data:function(){return{Datos:[],notificacion:!1,notificacionTemp:9,realPrecio:0,loading:!1,UserExist:null,button:!1,UserPartial:[],showUserPartial:!1,userSelect:"",Nuevo_Usuario:"Nuevo Usuario"}},created:function(){this.Datos.Categoria="Ingresos","Actualizar"==this.Modo&&(this.button=!0)},computed:{count:function(){this.Datos=this.user}},watch:{count:function(){},"Datos.Categoria":{handler:function(){console.log(this.Datos)}},"Datos.Nombre":{handler:function(){""==this.userSelect?this.Buscar():this.userSelect=""}},"Datos.Precio":{handler:function(){}},UserExist:function(){1==this.UserExist&&(this.button=!0),0==this.UserExist&&(this.button=!1)}},methods:{closeNotificacion:function(){var t=this,e=setInterval((function(){t.notificacionTemp--,0==t.notificacionTemp&&(clearInterval(e),t.notificacion=!1)}),1e3);this.notificacionTemp=9},userSelected:function(t){this.showUserPartial=!1,this.UserExist=!0,this.Datos.Nombre=t,this.userSelect=t},Buscar:function(){var t=this;void 0==this.Datos.Nombre||""==this.Datos.Nombre||(this.loading=!0,this.axios.post("/userPartial",{Nombre:this.Datos.Nombre}).then((function(e){t.UserPartial=e.data})),this.showUserPartial=!0,this.axios.post("/userExist",{Nombre:this.Datos.Nombre}).then((function(e){t.UserExist=e.data,t.loading=!1})))},"showModalUsuariosAñadir":function(){c["a"].state.ModalUsuario=!0},closeModal:function(){"Añadir"==this.Modo&&(c["a"].state.ModalAñadir=!1),"Actualizar"==this.Modo&&(c["a"].state.ModalEditar=!1)},formatNumber:function(t){var e=0;if("string"==typeof t)return e=Intl.NumberFormat().format(t),e},SendData:function(){var t=this;"Añadir"==this.Modo&&(void 0==this.Datos.Categoria||void 0==this.Datos.Nombre?(this.notificacion=!0,this.closeNotificacion()):this.axios.post("/getData",{Nombre:this.Datos.Nombre,Productos:this.Datos.Productos,Precio:this.Datos.Precio,Cantidad:this.Datos.Cantidad,Categoria:this.Datos.Categoria,Telefono:"No datos"}).then((function(e){t.$store.commit("loadDataBase"),t.Datos.Nombre="",t.Datos.Productos="",t.Datos.Precio="",t.Datos.Cantidad="",t.Datos.Categoria="",t.closeModal()})).catch((function(t){}))),"Actualizar"==this.Modo&&this.axios.post("/getUpdate",{_id:this.Datos._id,Nombre:this.Datos.Nombre,Productos:this.Datos.Productos,Cantidad:this.Datos.Cantidad,Precio:this.Datos.Precio,Categoria:this.Datos.Categoria,Fecha:this.Datos.Fecha}).then((function(e){t.$store.commit("loadDataBase"),t.Datos._id="",t.Datos.Nombre="",t.Datos.Productos="",t.Datos.Precio="",t.Datos.Cantidad="",t.Datos.Categoria="",t.closeModal()})).catch((function(t){}))}}},h=p,v=a("2877"),y=Object(v["a"])(h,u,m,!1,null,null,null),g=y.exports,b={name:"Table",components:{Modal_AU:g,FadeTransition:r["b"]},props:{usuarios:Array},data:function(){return{Datos:{Productos:"Nombre",Querry:""},DatosEdit:{_id:"",Nombre:"",Productos:"",Precio:0,Cantidad:0,Categoria:""},ModalNombre:"",ModalPrecio:0,ModalId:"",optionCheck:[],usuariosReserva:[],Modo:"Actualizar",showModal:!1}},created:function(){},watch:{optionCheck:function(t){this.checkSelect(t)},usuarios:function(t){t.length},change:function(t){}},methods:{sendQuerry:function(){var t=this;this.axios.post("http://localhost:3000/getQuerry",{querryProductos:this.Datos.Productos,querry:this.Datos.Querry}).then((function(e){t.$store.querry=e.data,t.usuarios=t.$store.querry})).catch((function(t){}))},total:function(){for(var t=0,e=0;e<this.usuarios.length;e++)t+=this.usuarios[e].Precio;return t},checkSelect:function(t){if(this.usuariosReserva.length<=0&&(this.usuariosReserva=this.usuarios),1==t.length){var e=this.usuarios.filter((function(e){return e.Categoria==t}));this.usuarios=e}else this.usuarios=this.usuariosReserva,this.usuariosReserva=[]},formatDate:function(t){var e={weekday:"long",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"America/Bogota"};return new Intl.DateTimeFormat("es-Co",e).format(new Date(t))},formatNumber:function(t){var e=0;if("number"==typeof t)return e=Intl.NumberFormat("es-CO",{style:"currency",currency:"COP"}).format(t),e},showModalDetele:function(t,e,a){this.ModalNombre=t,this.ModalPrecio=e,this.ModalId=a,this.$modal.show("delete")},hideModalDelete:function(){this.$modal.hide("delete")},deleteData:function(t,e){var a=this;this.axios.post("/getDelete",{id:t,Nombre:e}).then((function(t){a.$store.commit("loadDataBase"),a.hideModalDelete(),console.log(t)})).catch(error)},showModalUniversal:function(t,e,a,o,s,i,n){this.DatosEdit._id=t,this.DatosEdit.Nombre=e,this.DatosEdit.Productos=a,this.DatosEdit.Precio=o,this.DatosEdit.Cantidad=s,this.DatosEdit.Categoria=i,this.DatosEdit.Fecha=n,c["a"].state.ModalEditar=!0}}},C=b,_=Object(v["a"])(C,l,d,!1,null,null,null),D=_.exports,x={name:"Tablas",components:{Table:D,Modal_AU:g,FadeTransition:r["b"]},data:function(){return{Ingresos:[],Modo:"Añadir"}},created:function(){c["a"].commit("loadDataBase")},computed:Object(i["a"])({},Object(n["b"])(["DataBase"])),watch:{},methods:{showModalUniversal:function(){this.$modal.show(this.Modo)},Modal:function(){c["a"].state.ModalAñadir=!0}}},k=x,N=Object(v["a"])(k,o,s,!1,null,null,null);e["default"]=N.exports},"7c76":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return c}));
/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
var o={inheritAttrs:!1,props:{duration:{type:[Number,Object],default:300},delay:{type:[Number,Object],default:0},group:Boolean,tag:{type:String,default:"span"},origin:{type:String,default:""},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"ease-out"}}}},computed:{componentType:function(){return this.group?"transition-group":"transition"},hooks:function(){return Object.assign({beforeEnter:this.beforeEnter,afterEnter:this.cleanUpStyles,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.cleanUpStyles},this.$listeners)}},methods:{beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.animationDuration=e+"ms";var a=this.delay.enter?this.delay.enter:this.delay;t.style.animationDelay=a+"ms",this.setStyles(t)},cleanUpStyles:function(t){var e=this;Object.keys(this.styles).forEach((function(a){var o=e.styles[a];o&&(t.style[a]="")})),t.style.animationDuration="",t.style.animationDelay=""},beforeLeave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;t.style.animationDuration=e+"ms";var a=this.delay.leave?this.delay.leave:this.delay;t.style.animationDelay=a+"ms",this.setStyles(t)},leave:function(t){this.setAbsolutePosition(t)},setStyles:function(t){var e=this;this.setTransformOrigin(t),Object.keys(this.styles).forEach((function(a){var o=e.styles[a];o&&(t.style[a]=o)}))},setAbsolutePosition:function(t){return this.group&&(t.style.position="absolute"),this},setTransformOrigin:function(t){return this.origin&&(t.style.transformOrigin=this.origin),this}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"fadeIn","move-class":"fade-move","leave-active-class":"fadeOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"fade-transition",mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomIn","move-class":"zoom-move","leave-active-class":"zoomOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-center-transition",mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInX","move-class":"zoom-move","leave-active-class":"zoomOutX"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-x-transition",props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}},mixins:[o]};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"zoomInY","move-class":"zoom-move","leave-active-class":"zoomOutY"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"zoom-y-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.55,0,.1,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=" .collapse-move { transition: transform .3s ease-in-out; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"move-class":"collapse-move"},on:{"before-enter":t.beforeEnter,"after-enter":t.afterEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)},staticRenderFns:[],name:"collapse-transition",mixins:[o],methods:{transitionStyle:function(t){void 0===t&&(t=300);var e=t/1e3,a=e+"s height ease-in-out, "+e+"s padding-top ease-in-out, "+e+"s padding-bottom ease-in-out";return a},beforeEnter:function(t){var e=this.duration.enter?this.duration.enter:this.duration;t.style.transition=this.transitionStyle(e),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0,this.setStyles(t)},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave:function(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden",this.setStyles(t)},leave:function(t){var e=this.duration.leave?this.duration.leave:this.duration;0!==t.scrollHeight&&(t.style.transition=this.transitionStyle(e),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0),this.setAbsolutePosition(t)},afterLeave:function(t){t.style.transition="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=" @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"scaleIn","move-class":"scale-move","leave-active-class":"scaleOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"scale-transition",mixins:[o],props:{origin:{type:String,default:"top left"},styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,type:"animation","enter-active-class":"slideYIn","move-class":"slide-move","leave-active-class":"slideYOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-up-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideYDownIn","leave-active-class":"slideYDownOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-y-down-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXLeftIn","move-class":"slide-move","leave-active-class":"slideXLeftOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-left-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}};(function(){if("undefined"!==typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),a=".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a)),t.appendChild(e)}})();var f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a(t.componentType,t._g(t._b({tag:"component",attrs:{tag:t.tag,"enter-active-class":"slideXRightIn","move-class":"slide-move","leave-active-class":"slideXRightOut"}},"component",t.$attrs,!1),t.hooks),[t._t("default")],2)},staticRenderFns:[],name:"slide-x-right-transition",mixins:[o],props:{styles:{type:Object,default:function(){return{animationFillMode:"both",animationTimingFunction:"cubic-bezier(.25,.8,.50,1)"}}}}},p={};function h(t,e){e&&e.components?e.components.forEach((function(e){return t.component(e.name,p[e.name])})):Object.keys(p).forEach((function(e){t.component(e,p[e])}))}p[s.name]=s,p[i.name]=i,p[n.name]=n,p[r.name]=r,p[c.name]=c,p[l.name]=l,p[d.name]=d,p[u.name]=u,p[m.name]=m,p[f.name]=f,"undefined"!==typeof window&&window.Vue&&window.Vue.use({install:h})}}]);
//# sourceMappingURL=egresos.2492d40c.js.map