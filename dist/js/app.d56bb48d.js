(function(t){function e(e){for(var s,i,n=e[0],c=e[1],u=e[2],l=0,f=[];l<n.length;l++)i=n[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},o=[];function i(t){return n.p+"js/"+({tablas:"tablas"}[t]||t)+"."+{tablas:"4334b24a"}[t]+".js"}function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=i(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4360:function(t,e,a){"use strict";a("99af");var s=a("2b0e"),r=a("2f62"),o=a("bc3a"),i=a.n(o);s["a"].use(r["a"]),e["a"]=new r["a"].Store({state:{DataBase:[],DataBaseUser:[],UsuarioNuevo:!1,UsuarioElegido:[],RegistroElegido:[],RegistroNuevo:!1,ModoTabla:"usuarios",ModalEliminar:!1,Fecha:[(new Date).getMonth()+1,(new Date).getFullYear()],"ModalAñadir":!1,ModalEditar:!1,ModalUsuario:!1,ModalAbono:!1,UsuarioPerfil:!1,Registro_Actividad:!1,OrdenRegistro:"Total",OrdenUsuario:"A-Z",UsuarioParcial:"",RegistroParcial:"",RegistroBusqueda:"",UsuarioBusqueda:""},actions:{},mutations:{SET_POST:function(t,e){t.DataBase=e},changeFecha:function(t,e){},loadDataBaseUser:function(t){var e;i.a.get("user").then((function(a){t.DataBaseUser=a.data,e=t.DataBaseUser.sort((function(t,e){return t.Nombre<e.Nombre?-1:t.Nombre>e.Nombre?1:0})),t.DataBaseUser=e}))},modalUp:function(){state.ModalU=!0},loadDataBase:function(t){if(0==t.Fecha[0])i.a.get("/").then((function(e){t.DataBase=e.data}));else{t.Fecha[0]=parseInt(t.Fecha[0]);var e='{"Fecha":{"$gte":"'.concat(t.Fecha[1],"-").concat(t.Fecha[0],'","$lte":"').concat(t.Fecha[1],"-").concat(t.Fecha[0]+1,'-1"}}');i.a.post("getDate",{data:e}).then((function(e){t.DataBase=e.data})).catch((function(t){}))}}}})},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"navbar is-info",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a("d092"),width:"90",height:"28",alt:""}})]),s("a",{staticClass:"navbar-burger burger",class:{"is-active":t.show},attrs:{role:"button","arial-label":"menu","aria-expanded":"false","data-target":"Menu"},on:{click:function(e){return t.showMenu()}}},[s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}}),s("span",{attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"navbar-menu",class:{"is-active":t.menu},attrs:{id:"Menu"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Resumen")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/tablas"}},[t._v("Tablas")]),s("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[t._v("Comida")])],1)])]),s("router-view")],1)},o=[],i={data:function(){return{show:!1,menu:!1}},methods:{showMenu:function(){0==this.show&&0==this.menu?(this.show=!0,this.menu=!0):(this.show=!1,this.menu=!1)}}},n=i,c=(a("5c0b"),a("2877")),u=Object(c["a"])(n,r,o,!1,null,null,null),l=u.exports,d=(a("d3b7"),a("8c4f"));a("bb51");s["a"].use(d["a"]);var f=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(a.bind(null,"bb51"))}},{path:"/Tablas",name:"tablas",component:function(){return a.e("tablas").then(a.bind(null,"5b6a"))}}],h=new d["a"]({mode:"history",base:"/",routes:f}),b=h,v=a("bc3a"),m=a.n(v),g=a("a7fe"),j=a.n(g),C=a("4360"),p=(a("15f5"),a("7051"),a("d842")),P=a("30ef"),_=a.n(P),D=a("bf15");s["a"].use(D["a"]),s["a"].use(p["a"].use(_.a)),s["a"].use(j.a,m.a),m.a.defaults.baseURL="http://ec2-3-17-172-61.us-east-2.compute.amazonaws.com:3000/api",s["a"].config.productionTip=!1,new s["a"]({router:b,store:C["a"],render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),r=a.n(s);r.a},"9c0c":function(t,e,a){},"9c9e":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("99af"),a("4de4"),a("a15b"),a("d81d"),a("a9e3"),a("9129"),a("d3b7"),a("ac1f"),a("6062"),a("3ca3"),a("466d"),a("5319"),a("1276"),a("ddb0");var s=a("2909"),r=a("4360"),o={methods:{MonedaLocal:function(t){var e;return"number"==typeof t?(e=new Intl.NumberFormat("en-Us").format(t),e):(e=(new Intl.NumberFormat).format(t),e)},FechaLocal:function(t){var e=[{}],a={weekday:"long",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1,timeZone:"America/Bogota"};return e=new Intl.DateTimeFormat("es-Co",a).format(new Date(t)),console.log(e),e},TablaFiltroUsuario:function(t,e){for(var a=e,s=0;s<e.length;s++)a[s][t]=this.NumeroSinPuntos(e[s][t]);a=a.sort((function(e,a){return a[t]-e[t]}));for(var r=0;r<e.length;r++)a[r][t]=this.MonedaLocal(a[r][t]);return a},TablaFiltro:function(t,e,a){var s=[];if(a.length>0){if(a.length>0)return s=a.filter((function(a){return a[e]==t})),s}else s=this.datos.filter((function(a){return a[e]==t}));return s},TablaFiltroBusqueda:function(t,e){if("Total"==e)return t;var a=t.filter((function(t){return t.Categoria==e}));return a},Filtro:function(t,e){var a=this.datos.filter((function(a){return a[e]==t}));return a},TablaOrdenRegistro:function(t,e,a){if(""!=a)return this.BuscarRegistro(a);var s=[],r=[];if("Total"==t){r=this.$store.state.DataBase;for(var o=0;o<r.length;o++)s[o]={_id:r[o]._id,Nombre:r[o].Nombre,Productos:r[o].Productos,Precio:this.MonedaLocal(r[o].Precio),Cantidad:r[o].Cantidad,Categoria:r[o].Categoria,Fecha:this.FechaLocal(r[o].Fecha)};return s}r=this.TablaFiltro(t,e,"");for(var i=0;i<r.length;i++)s[i]={_id:r[i]._id,Nombre:r[i].Nombre,Productos:r[i].Productos,Precio:this.MonedaLocal(r[i].Precio),Cantidad:r[i].Cantidad,Categoria:r[i].Categoria,Fecha:this.FechaLocal(r[i].Fecha)};return s},BuscarRegistro:function(t){var e=this.SoloNombre(r["a"].state.DataBase,"Nombre"),a=this.SoloNombre(r["a"].state.DataBase,"Productos"),s=e.concat(a),o=[{}],i=[],n=r["a"].state.DataBase.filter((function(e){return e.Nombre==t})),c=r["a"].state.DataBase.filter((function(e){return e.Productos==t})),u=n.concat(c);if(""!=t){for(var l=0;l<s.length;l++)s[l].Nombre.match(t)&&i.push(s[l]);this.RegistrosParciales=i,this.MostrarListaRegistros=!0}else this.MostrarListaRegistros=!1,r["a"].state.RegistroParcial="";if(u.length>0){for(var d=0;d<u.length;d++)o[d]={_id:u[d]._id,Nombre:u[d].Nombre,Productos:u[d].Productos,Precio:this.MonedaLocal(u[d].Precio),Cantidad:u[d].Cantidad,Categoria:u[d].Categoria,Fecha:this.FechaLocal(u[d].Fecha)};return this.MostrarListaRegistros=!1,this.RegistroConFiltro(this.Orden,"Categoria",o)}var f=[{Mensaje:"No encontrado"}];return f},RegistroConFiltro:function(t,e,a){var s=[],r=[];if("Total"==t){r=a;for(var o=0;o<r.length;o++)s[o]={_id:r[o]._id,Nombre:r[o].Nombre,Productos:r[o].Productos,Precio:r[o].Precio,Cantidad:r[o].Cantidad,Categoria:r[o].Categoria,Fecha:r[o].Fecha};return s}r=this.TablaFiltro(t,e,a);for(var i=0;i<r.length;i++)s[i]={_id:r[i]._id,Nombre:r[i].Nombre,Productos:r[i].Productos,Precio:r[i].Precio,Cantidad:r[i].Cantidad,Categoria:r[i].Categoria,Fecha:r[i].Fecha};return s},TablaOrdenUsuario:function(t,e,a){if(""!=a)return r["a"].state.UsuarioParcial;var s=this.TablaOrdenUsuarioFiltro();if("A-Z"==t)return s;if("Ingresos"==t||"Deuda"==t){var o=this.TablaFiltroUsuario(t,s);return o}},TablaOrdenUsuarioFiltro:function(){for(var t=[{}],e=[{}],a=[{}],s=0;s<this.datos.length;s++)e[s]=this.datos[s].Actividad.filter((function(t){return"Ingresos"==t.Categoria}));for(var r=0;r<this.datos.length;r++)a[r]=this.datos[r].Actividad.filter((function(t){return"Deuda"==t.Categoria}));for(var o=0;o<e.length;o++)e[o]=this.MonedaLocal(this.SumaTotalSinPuntos(e[o]));for(var i=0;i<e.length;i++)a[i]=this.MonedaLocal(this.SumaTotalSinPuntos(a[i])),"0"==a[i]&&(a[i]="No");for(var n=0;n<this.datos.length;n++)t[n]={_id:this.datos[n]._id,Nombre:this.datos[n].Nombre,Ingresos:e[n],Deuda:a[n],Telefono:this.datos[n].Telefono,Direccion:this.datos[n].Direccion,Oficio:this.datos[n].Oficio,Actividad:this.datos[n].Actividad};return t},NumeroSinPuntos:function(t){var e=t.replace(/[,]/g,"");return e=parseInt(e),Number.isNaN(e)?0:e},SinPuntos:function(t){return t.split(",").join("")},VerficarExistencia:function(){1==this.UsuarioExiste&&(this.BotonActivo=!0),0==this.UsuarioExiste&&(this.BotonActivo=!1)},BuscarUsuarioRegistro:function(){var t=this;void 0==this.Datos.Nombre||""==this.Datos.Nombre||(this.axios.post("/userPartial",{Nombre:this.Datos.Nombre}).then((function(e){t.UsuariosParciales=e.data})),this.MostrarListaUsuarios=!0,this.axios.post("/userExist",{Nombre:this.Datos.Nombre}).then((function(e){t.UsuarioExiste=e.data})))},BuscarUsuario:function(){var t=this;void 0==this.Datos.Nombre||""==this.Datos.Nombre||(this.axios.post("/userPartial",{Nombre:this.Datos.Nombre}).then((function(e){t.UsuariosParciales=e.data,r["a"].state.UsuarioParcial=e.data})),this.MostrarListaUsuarios=!0,this.axios.post("/userExist",{Nombre:this.Datos.Nombre}).then((function(e){t.UsuarioExiste=e.data})))},SoloNombre:function(t,e){for(var a=[],r=[],o=0;o<t.length;o++)a[o]={Nombre:t[o][e]};r=Object(s["a"])(new Set(a.map((function(t){return t.Nombre}))));for(var i=0;i<r.length;i++)r[i]={Nombre:r[i]};return r},UsuarioSeleccionado:function(t){this.MostrarListaUsuarios=!1,this.UsuarioExiste=!0,this.Datos.Nombre=t.Nombre,this.UsuarioElegido=t.Nombre,r["a"].state.UsuarioParcial=[t]},ModalUsuarioSeleccionado:function(t){this.MostrarListaUsuarios=!1,this.UsuarioExiste=!0,this.Datos.Nombre=t.Nombre,this.UsuarioElegido=t.Nombre,this.UsuarioDeuda=t.Nombre,this.UsuarioAbono=this.Datos.Precio},RegistroSeleccionado:function(t){this.MostrarListaUsuarios=!1,this.UsuarioExiste=!0,this.Datos.Nombre=t.Nombre,this.UsuarioElegido=t.Nombre,r["a"].state.RegistroParcial=t},NoRepetidos:function(t){for(var e=[],a=Object(s["a"])(new Set(t.map((function(t){return t.Nombre})))),r=0;r<a.length;r++)e[r]={Nombre:a[r]};return e},SumaTotal:function(t,e){var a=0;if(""!=e){for(var s=0;s<t.length;s++)a+=t[s].Cantidad;return a}for(var r=0;r<t.length;r++)a+=this.NumeroSinPuntos(t[r].Precio);return a},SumaTotalSinPuntos:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a].Precio;return e},SumaTotalDeuda:function(t){for(var e=0,a=0;a<t.length;a++)e+=t[a];return e}}}},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[a("Resumen",{attrs:{user:t.DataBaseUser,balance:t.DataBase}})],1)])},r=[],o=a("5530"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"columns"},[t._m(0),a("div",{staticClass:"column"},[a("p",{staticClass:"subtitle"},[t._v("Fecha")]),a("div",{staticClass:"select is-dark"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.Fecha[0],expression:"Fecha[0]"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.Fecha,0,e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"0"}},[t._v("Total")]),a("option",{attrs:{value:"1"}},[t._v("Enero")]),a("option",{attrs:{value:"2"}},[t._v("Febrero")]),a("option",{attrs:{value:"3"}},[t._v("Marzo")]),a("option",{attrs:{value:"4"}},[t._v("Abril")]),a("option",{attrs:{value:"5"}},[t._v("Mayo")]),a("option",{attrs:{value:"6"}},[t._v("Junio")]),a("option",{attrs:{value:"7"}},[t._v("Julio")]),a("option",{attrs:{value:"8"}},[t._v("Agosto")]),a("option",{attrs:{value:"9"}},[t._v("Septiembre")]),a("option",{attrs:{value:"10"}},[t._v("Octubre")]),a("option",{attrs:{value:"11"}},[t._v("Noviembre")]),a("option",{attrs:{value:"12"}},[t._v("Diciembre")])])]),a("div",{staticClass:"select is-dark Año"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.Fecha[1],expression:"Fecha[1]"}],staticClass:"input",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.Fecha,1,e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"2020"}},[t._v("2020")]),a("option",{attrs:{value:"2021"}},[t._v("2021")]),a("option",{attrs:{value:"2022"}},[t._v("2022")]),a("option",{attrs:{value:"2023"}},[t._v("2023")])])])])]),a("div",[a("div",{staticClass:"divider is-info"},[a("a",{on:{click:function(e){t.showPorcentajes=!t.showPorcentajes}}},[t._v("Porcentajes")])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[t._v("Ingresos")]),a("p",{staticClass:"title ingresos"},[t._v(t._s(t.MonedaLocal(t.resumen(this.balance,"Ingresos"))))])]),a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[t._v("Egresos")]),a("p",{staticClass:"title egresos"},[t._v(t._s(t.MonedaLocal(t.resumen(this.balance,"Egresos"))))])])]),a("div",{staticClass:"column"},[a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[t._v("Balance")]),a("p",{staticClass:"title balance"},[t._v(t._s(t.MonedaLocal(t.resumen(this.balance,"Ingresos")-t.resumen(this.balance,"Egresos"))))])]),a("div",{staticClass:"box"},[a("p",{staticClass:"heading"},[t._v("Deuda")]),a("p",{staticClass:"title",staticStyle:{color:"slategray"}},[t._v(t._s(t.MonedaLocal(t.resumen(this.balance,"Deuda"))))])])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[t._v("Cantidad")]),a("pie-chart",{attrs:{data:[[t.filtro_universal(0,"Cantidad","Productos","Ingresos")[0],t.filtro_universal(0,"Cantidad","Productos","Ingresos")[1]],[t.filtro_universal(1,"Cantidad","Productos","Ingresos")[0],t.filtro_universal(1,"Cantidad","Productos","Ingresos")[1]],[t.filtro_universal(2,"Cantidad","Productos","Ingresos")[0],t.filtro_universal(2,"Cantidad","Productos","Ingresos")[1]],[t.filtro_universal(3,"Cantidad","Productos","Ingresos")[0],t.filtro_universal(3,"Cantidad","Productos","Ingresos")[1]],[t.filtro_universal(4,"Cantidad","Productos","Ingresos")[0],t.filtro_universal(4,"Cantidad","Productos","Ingresos")[1]]]}})],1)]),t.balance.length>0?a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[t._v("Ingresos")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:t.descargas("","","Ingresos")[0],worksheet:"Datos",name:t.descargas("","","Ingresos")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("br"),a("column-chart",{directives:[{name:"show",rawName:"v-show",value:0==t.showPorcentajes,expression:"showPorcentajes == false"}],attrs:{colors:["#02AC1E"],data:[[t.filtro_universal(0,"Precio","Productos","Ingresos")[0],t.filtro_universal(0,"Precio","Productos","Ingresos")[1]],[t.filtro_universal(1,"Precio","Productos","Ingresos")[0],t.filtro_universal(1,"Precio","Productos","Ingresos")[1]],[t.filtro_universal(2,"Precio","Productos","Ingresos")[0],t.filtro_universal(2,"Precio","Productos","Ingresos")[1]],[t.filtro_universal(3,"Precio","Productos","Ingresos")[0],t.filtro_universal(3,"Precio","Productos","Ingresos")[1]],[t.filtro_universal(4,"Precio","Productos","Ingresos")[0],t.filtro_universal(4,"Precio","Productos","Ingresos")[1]]],thousands:","}}),t.balance.length>0?a("div",{directives:[{name:"show",rawName:"v-show",value:t.showPorcentajes,expression:"showPorcentajes"}],staticClass:"column"},[a("pie-chart",{attrs:{suffix:"%",data:t.filtro_porcentaje("Precio","Ingresos","Productos")}})],1):t._e()],1)]):t._e(),a("br"),t.balance.length>0?a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[t._v("Egresos")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:t.descargas("","","Egresos")[0],worksheet:"Datos",name:t.descargas("","","Egresos")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("column-chart",{attrs:{colors:["#B00B1E"],data:[[t.filtro_universal(0,"Precio","Nombre","Egresos")[0],t.filtro_universal(0,"Precio","Nombre","Egresos")[1]],[t.filtro_universal(1,"Precio","Nombre","Egresos")[0],t.filtro_universal(1,"Precio","Nombre","Egresos")[1]],[t.filtro_universal(2,"Precio","Nombre","Egresos")[0],t.filtro_universal(2,"Precio","Nombre","Egresos")[1]],[t.filtro_universal(3,"Precio","Nombre","Egresos")[0],t.filtro_universal(3,"Precio","Nombre","Egresos")[1]],[t.filtro_universal(4,"Precio","Nombre","Egresos")[0],t.filtro_universal(4,"Precio","Nombre","Egresos")[1]]],thousands:","}})],1)]):t._e(),t.balance.length>0?a("div",{staticClass:"columns"},[a("div",{staticClass:"column box"},[a("h1",{staticClass:"title"},[t._v("Lo que mas Deben")]),a("div",{staticClass:"has-text-right"}),a("column-chart",{attrs:{colors:["#AB5"],data:[[t.filtro_universal(0,"Precio","Productos","Deuda")[0],t.filtro_universal(0,"Precio","Productos","Deuda")[1]],[t.filtro_universal(1,"Precio","Productos","Deuda")[0],t.filtro_universal(1,"Precio","Productos","Deuda")[1]],[t.filtro_universal(2,"Precio","Productos","Deuda")[0],t.filtro_universal(2,"Precio","Productos","Deuda")[1]],[t.filtro_universal(3,"Precio","Productos","Deuda")[0],t.filtro_universal(3,"Precio","Productos","Deuda")[1]],[t.filtro_universal(4,"Precio","Productos","Deuda")[0],t.filtro_universal(4,"Precio","Productos","Deuda")[1]]],thousands:","}})],1),a("div",{staticClass:"column"},[a("h1",{staticClass:"title"},[t._v("Deudores")]),a("div",{staticClass:"has-text-right"},[a("export-excel",{staticClass:"button",attrs:{data:t.descargasDeuda("Deuda")[0],worksheet:"Datos",name:t.descargasDeuda("Deuda")[1]}},[a("i",{staticClass:"fas fa-file-download"})])],1),a("column-chart",{attrs:{colors:["#C0D1CE"],data:[[t.filtro_universal(0,"Precio","Nombre","Deuda")[0],t.filtro_universal(0,"Precio","Nombre","Deuda")[1]],[t.filtro_universal(1,"Precio","Nombre","Deuda")[0],t.filtro_universal(1,"Precio","Nombre","Deuda")[1]],[t.filtro_universal(2,"Precio","Nombre","Deuda")[0],t.filtro_universal(2,"Precio","Nombre","Deuda")[1]],[t.filtro_universal(3,"Precio","Nombre","Deuda")[0],t.filtro_universal(3,"Precio","Nombre","Deuda")[1]],[t.filtro_universal(4,"Precio","Nombre","Deuda")[0],t.filtro_universal(4,"Precio","Nombre","Deuda")[1]]],thousands:","}})],1)]):t._e(),t.chartTotal?a("div",{staticClass:"columns"},[a("div",{staticClass:"column"},[t._m(1),a("div",[a("p",{staticClass:"subtitle"},[t._v("Ingresos")]),a("column-chart",{attrs:{data:t.TotalIngresos,colors:[["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"]["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"],["#4CC355"]],thousands:","}})],1),a("div",[a("p",{staticClass:"subtitle"},[t._v("Egresos")]),a("column-chart",{attrs:{data:t.TotalEgresos,colors:[["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"],["#F24153"]["#F24153"],["#F24153"],["#F24153"],["#F24153"]],thousands:","}})],1),a("div",[a("p",{staticClass:"subtitle"},[t._v("Deudas")]),a("column-chart",{attrs:{data:t.TotalDeudas,colors:[["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"],["#C0D1CE"]],thousands:","}})],1)])]):t._e()])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("h1",{staticClass:"title 3"},[t._v("Resumen")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-text-centered"},[a("h1",{staticClass:"title"},[t._v("Meses")])])}],c=(a("4de4"),a("d81d"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("ade3")),u=a("2909"),l=a("4360"),d=a("9c9e"),f={name:"Resumen",store:l["a"],components:{},props:{balance:Array,user:Array},data:function(){return{fields:[{title:"#",name:"id"},{title:"Nombre",name:"name"},{title:"Ciudad",name:"city"},{title:"País",name:"country"},{title:"birthdate",name:"F. Nacimiento",type:"Date",format:"DD/MM/YYYY"}],Fecha:l["a"].state.Fecha,chartTotal:!1,TotalIngresos:[],TotalEgresos:[],TotalDeudas:[],TotalUltimate:[],showPorcentajes:!1}},mixins:[d["a"]],watch:{Fecha:function(t){this.changeFecha(t)}},computed:{datos:function(){return this.balance},usuarios:function(){return this.user}},methods:{Porcentaje:function(){},descargas:function(t,e,a){if(this.balance.length>0){var s=this.balance.filter((function(t){return t.Categoria==a}));if("Deuda"==a)for(var r=0;r<s.length;r++)for(var o=0;o<this.user.length;o++)s[r].Nombre==this.user[o].Nombre&&(s[r].Telefono=this.user[o].Telefono);var i=new Date;return[s,a+" "+(new Intl.DateTimeFormat).format(i)]}},E:function(t,e){return t._id==e},descargasDeuda:function(t){var e=[];if(this.datos.length>0){e=this.datos.filter((function(e){return e.Categoria==t}));for(var a=0;a<e.length;a++){var s=this.FechaLocal(e[a].Fecha);e[a].Fechas=s}for(var r=0;r<e.length;r++)for(var o=0;o<this.user.length;o++)e[r].Nombre==this.user[o].Nombre&&(e[r].Telefono=this.user[o].Telefono);for(var i=0;i<e.length;i++)for(var n=0;n<this.user.length;n++)if(e[i].Nombre==this.user[n].Nombre)for(var c=0;c<this.user[n].Actividad.length;c++)e[i]._id==this.user[n].Actividad[c]._id&&this.user[n].Actividad[c].Abono.length>0&&"Activa"==this.user[n].Actividad[c].Deuda&&(e[i].Abono=this.SumaTotalDeuda(this.user[n].Actividad[c].Abono));var u=e.map((function(t){return{Nombre:t.Nombre,Productos:t.Productos,Precio:t.Precio,Abono:t.Abono,"#":t.Cantidad,Telefono:t.Telefono,Fecha:t.Fechas}})),l=new Date;return[u,t+" "+(new Intl.DateTimeFormat).format(l)]}},resumen:function(t,e){var a="No Data";if(t.length>0){for(var s=0,r=t.filter((function(t){return t.Categoria==e})),o=0;o<r.length;o++)s+=r[o].Precio;return s}return a},filtro_porcentaje:function(t,e,a){for(var s=[],r=[],o=this.balance.filter((function(t){return t.Categoria==e})),i=Object(u["a"])(new Set(o.map((function(t){return t[a]})))),n=0;n<i.length;n++)for(var l=0;l<o.length;l++)if(i[n]==o[l][a]){var d=this.unique(o,t,i[n],a);s[n]=Object(c["a"])({Nombre:d[0]},t,d[1])}for(var f=0;f<s.length;f++)r[f]=[s[f].Nombre,Math.round(s[f].Precio/this.resumen(this.balance,"Ingresos")*100)];return r},filtro_universal:function(t,e,a,s){var r=[],o=[];if(o=this.balance.filter((function(t){return t.Categoria==s})),!(o.length>0))return["0",0];for(var i=Object(u["a"])(new Set(o.map((function(t){return t[a]})))),n=0;n<i.length;n++)if(""!=i[n])for(var l=0;l<o.length;l++)if(i[n]==o[l][a]){var d=this.unique(o,e,i[n],a);r[n]=Object(c["a"])({Nombre:d[0]},e,d[1])}return r=r.sort((function(t,a){return a[e]-t[e]})),r.length>0?void 0==r[t]?["Espera",0]:[r[t].Nombre,r[t][e]]:void 0},unique:function(t,e,a,s){for(var r=[],o=0,i=0;i<t.length;i++)t[i][s]==a&&(o+=t[i][e],r[0]=Object(c["a"])({Nombre:a},e,o));return[r[0].Nombre,r[0][e]]},uniqueFecha:function(t,e){for(var a=[],s=0,r=0;r<t.length;r++)new Date(t[r].Fecha).getMonth()==e&&(s+=t[r].Precio,a[0]={Nombre:e,Precio:s});return[this.getMes(e),s]},getMes:function(t){switch(t){case 0:return"Enero";case 1:return"Febrero";case 2:return"Marzo";case 3:return"Abril";case 4:return"Mayo";case 5:return"Junio";case 6:return"Julio";case 7:return"Agosto";case 8:return"Septiembre";case 9:return"Octubre";case 10:return"Noviembre";case 11:return"Diciembre"}},changeFecha:function(t){if(this.$store.commit("changeFecha",t),l["a"].commit("loadDataBase"),0==this.Fecha[0]){var e=["Ingresos","Egresos","Deuda"];this.chartTotal=!0,this.totalChart(this.Fecha[1],e)}else this.chartTotal=!1},totalChart:function(t,e){var a=this,s=[],r=[],o=[];this.axios.get("/").then((function(t){s=t.data;for(var i=function(t){u=s.filter((function(a){return a.Categoria==e[t]}));for(var i=0;i<u.length;i++)for(var n=0;n<12;n++)n==new Date(u[i].Fecha).getMonth()&&(l=a.uniqueFecha(u,n),r[n]={name:[l[0]],data:Object(c["a"])({},e[t],l[1])}),o=r.filter((function(t){return null!=t}));switch(t){case 0:a.TotalIngresos=o;break;case 1:a.TotalEgresos=o;break;case 2:a.TotalDeudas=o;break}},n=0;n<=2;n++){var u,l;i(n)}}))}}},h=f,b=a("2877"),v=Object(b["a"])(h,i,n,!1,null,null,null),m=v.exports,g=a("2f62"),j={name:"Home",store:l["a"],components:{Resumen:m},data:function(){return{}},created:function(){l["a"].commit("loadDataBase"),l["a"].commit("loadDataBaseUser")},computed:Object(o["a"])({},Object(g["b"])(["DataBase","DataBaseUser"])),methods:{}},C=j,p=Object(b["a"])(C,s,r,!1,null,null,null);e["default"]=p.exports},d092:function(t,e,a){t.exports=a.p+"img/logo3.d0715c96.png"}});
//# sourceMappingURL=app.d56bb48d.js.map