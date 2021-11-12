(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{34:function(e,t,a){e.exports=a(57)},39:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),i=(a(39),a(2)),u=a(10),o=a(1),m=function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("h1",null,"Weather App"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",className:"navlink"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/favorites",className:"navlink"},"Favorites")))))},s=a(24),d="[ui] Start loading",E="[ui] End loading",f="[search] Result search",p="[favorites] Toggle city saved",h=localStorage,v=function(e){return{type:p,payload:{cities:e}}},b=function(){return function(e){if(h.getItem("cities")){var t=h.getItem("cities");e(v(JSON.parse(t)))}else{var a=[];h.setItem("cities",JSON.stringify(a)),e(v(a))}}},w=function(e){return function(t){var a=h.getItem("cities"),n=JSON.parse(a);if(n.find((function(t){return t===e}))){var r=n.filter((function(t){return t!==e}));t(v(r)),h.setItem("cities",JSON.stringify(r))}else{var l=[].concat(Object(s.a)(n),[e]);t(v(l)),h.setItem("cities",JSON.stringify(l))}}},g=a(4),y=a(17),O=a.n(y),_=a(22),N=a(8),j=a.n(N),S="https://api.openweathermap.org/data/2.5/",x=function(){var e=function(){var e=Object(_.a)(O.a.mark((function e(t){var a,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,n=null,e.prev=2,e.next=5,fetch(t);case 5:if((r=e.sent).ok){e.next=11;break}throw(n=new Error("Error fetching city")).status=r.status,n.statusText=r.statusText,n;case 11:return e.next=13,r.json();case 13:return a=e.sent,n=null,e.abrupt("return",{data:a,err:n});case 18:return e.prev=18,e.t0=e.catch(2),j.a.fire({icon:"error",title:"No city found",text:"Please try with a valid city name"}),a=null,n=e.t0,e.abrupt("return",{data:a,err:n});case 24:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}();return{current:function(t){var a="".concat(S,"weather?q=").concat(t,"&appid=").concat("a4091adafda6b36daf58b1d0213f12b8","&units=metric");return e(a)},citiesById:function(t){var a="".concat(S,"weather?id=").concat(t,"&appid=").concat("a4091adafda6b36daf58b1d0213f12b8","&units=metric");return e(a)}}},C=function(e){var t=e.handleFavorite;return r.a.createElement("button",{onClick:t,className:"btn btn-favorite"},r.a.createElement("i",{className:"far fa-star"}))},k=function(e){var t=e.handleFavorite;return r.a.createElement("button",{onClick:t,className:"btn btn-favorite"},r.a.createElement("i",{className:"fas fa-star"}))},F=a(14),T=function(e){var t=e.id,a=Object(n.useState)(null),l=Object(g.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(!1),m=Object(g.a)(o,2),s=m[0],d=m[1],E=Object(i.c)((function(e){return e.storage})),f=Object(i.b)(),p=Object(n.useRef)();if(Object(n.useEffect)((function(){x().citiesById(t).then((function(e){return u(e.data)}))}),[t]),Object(n.useEffect)((function(){c&&F.a.from(p.current,{y:50,duration:1,ease:"power1",opacity:0})}),[c]),!c)return null;var h=E.find((function(e){return e===t})),v=function(){j.a.fire({title:"Are you sure?",text:'You will delete "'.concat(b,'"'),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(e){e.isConfirmed&&f(w(t))}))},b=c.name,y=c.weather,O=c.main,_=c.sys,N=c.coord,S=new Date(1e3*_.sunrise).toLocaleTimeString(),T=new Date(1e3*_.sunset).toLocaleTimeString();return r.a.createElement("article",{className:"favcard",ref:p},r.a.createElement("section",{className:"favcard__header"},r.a.createElement("div",null,r.a.createElement("h3",null,b),r.a.createElement("p",null,_.country)),r.a.createElement("p",null,O.temp,"\xb0C"),h?r.a.createElement(k,{handleFavorite:v}):r.a.createElement(C,{handleFavorite:v})),r.a.createElement("button",{onClick:function(){d(!s)},className:"btn-details"},"Details"),r.a.createElement("div",{className:"favcard__details ".concat(s?"show-details":"hide-details"," ")},r.a.createElement("section",{className:"favcard__weather-desc"},r.a.createElement("hr",null),r.a.createElement("h3",null,y[0].main),r.a.createElement("p",null,y[0].description),r.a.createElement("img",{className:"favcard__weather-icon",src:"https://openweathermap.org/img/wn/".concat(y[0].icon,"@2x.png"),alt:"weather icon"})),r.a.createElement("section",{className:"favcard__weather-main"},r.a.createElement("h4",null,"Temperature"),r.a.createElement("div",null,r.a.createElement("p",null,"Max ",O.temp_max," \xb0C"),r.a.createElement("p",null,"Min ",O.temp_min," \xb0C"),r.a.createElement("p",null,"Feels like ",O.feels_like," \xb0C"))),r.a.createElement("section",{className:"favcard__weather-main"},r.a.createElement("h4",null,"Sun time"),r.a.createElement("div",null,r.a.createElement("p",null,"Sunrise ",S),r.a.createElement("p",null,"Sunset ",T))),r.a.createElement("section",{className:"favcard__weather-main"},r.a.createElement("h4",null,"Coords"),r.a.createElement("div",null,r.a.createElement("p",null,"Latitude ",N.lat,"\xb0"),r.a.createElement("p",null,"longitude ",N.lon,"\xb0"))),r.a.createElement("section",{className:"favcard__weather-main"},r.a.createElement("h4",null,"Advanced details"),r.a.createElement("div",null,O.sea_level&&r.a.createElement("p",null,"Sea level: ",O.sea_level," hPa"),O.grnd_level&&r.a.createElement("p",null,"Ground level: ",O.grnd_level," hPa"),O.humidity&&r.a.createElement("p",null,"Humidity: ",O.humidity,"%"),O.presure&&r.a.createElement("p",null,"Presure ",O.presure," hPa")))))},D=function(){var e=Object(i.c)((function(e){return e.storage})),t=Object(i.b)();return Object(n.useEffect)((function(){t(b())}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{color:"white",textAlign:"center"}},"Favorite Cities"),e.map((function(e){return r.a.createElement(T,{id:e,key:e})})))},I=function(e){var t=e.main,a=e.clouds,n=e.wind,l=e.coord,c=e.showDetails;return r.a.createElement("article",{className:"card__details ".concat(c?"show-details":"hide-details"," ")},r.a.createElement("section",null,r.a.createElement("h3",null,"Temperature"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Feels like: ",t.feels_like,"\xb0C"),r.a.createElement("p",null,"Minimun: ",t.temp_min,"\xb0C"),r.a.createElement("p",null,"Maximun: ",t.temp_max,"\xb0C"))),r.a.createElement("section",null,r.a.createElement("h3",null,"Wind"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Wind: ",n.speed," km/h"),r.a.createElement("p",null,"Wind direction: ",n.deg,"\xb0deg"),r.a.createElement("p",null,"clouds: ",a.all,"%"))),r.a.createElement("section",null,r.a.createElement("h3",null,"Location"),r.a.createElement("div",{className:"flex-row"},r.a.createElement("p",null,"Longitud: ",l.lon," \xb0"),r.a.createElement("p",null,"Latitud: ",l.lat," \xb0"))))},L=function(e){var t=e.city,a=Object(n.useState)(!1),l=Object(g.a)(a,2),c=l[0],u=l[1],o=Object(i.c)((function(e){return e.storage})),m=Object(i.b)(),s=Object(n.useRef)();Object(n.useEffect)((function(){t&&F.a.from(s.current,{y:-50,duration:.75,ease:"power1",opacity:0})}),[t]);var d=t.id,E=t.name,f=t.weather,p=t.wind,h=t.main,v=t.coord,b=t.clouds,y=t.sys,O=new Date(1e3*y.sunrise).toLocaleTimeString(),_=new Date(1e3*y.sunset).toLocaleTimeString(),N=o.find((function(e){return e===d})),j=function(){m(w(d))};return r.a.createElement("section",{className:"card",ref:s},r.a.createElement("header",{className:"card__header"},r.a.createElement("h2",null,E),r.a.createElement("p",null,"Country: ",y.country),N?r.a.createElement(k,{handleFavorite:j}):r.a.createElement(C,{handleFavorite:j})),r.a.createElement("hr",null),r.a.createElement("main",{className:"card__main"},r.a.createElement("section",{className:"card__main-top"},r.a.createElement("h3",null,f[0].main),r.a.createElement("p",null,f[0].description),r.a.createElement("img",{className:"card__weather-icon",src:"https://openweathermap.org/img/wn/".concat(f[0].icon,"@2x.png"),alt:"weather icon"})),r.a.createElement("article",{className:"card__main-temp"},h.temp,"\xb0C"),r.a.createElement("section",{className:"card__main-bot"},r.a.createElement("p",null,"Sunrise: ",r.a.createElement("wbr",null)," ",O),r.a.createElement("p",null,"Humidity: ",h.humidity,"%"),r.a.createElement("p",null,"Sunset: ",r.a.createElement("wbr",null),_)),r.a.createElement("button",{onClick:function(){u(!c)},className:"btn btn-details"},"Details")),r.a.createElement("hr",null),r.a.createElement(I,{wind:p,main:h,coord:v,clouds:b,showDetails:c}))},B=function(e){return function(t){t({type:d}),x().current(e).then((function(e){var a=e.data,n=e.err;t({type:f,payload:{city:a,error:n}}),t({type:E})}))}},J=a(13),P=a(6),M=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(g.a)(t,2),r=a[0],l=a[1],c=function(){l(e)},i=function(e){var t=e.target;l(Object(P.a)(Object(P.a)({},r),{},Object(J.a)({},t.name,t.value)))};return[r,i,c]}({name:""}),t=Object(g.a)(e,3),a=t[0],l=t[1],c=t[2],u=a.name,o=Object(i.b)();return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),u.length<3)return j.a.fire({icon:"error",title:"You need a city name",text:"You need more than 2 letters to search a city."});o(B(u)),c()}},r.a.createElement("input",{type:"text",placeholder:"Search city...",name:"name",value:u,onChange:l}),r.a.createElement("button",{type:"submit"},"Search "))},A=function(){return r.a.createElement("article",{className:"loader"},r.a.createElement("h2",null,"Loading"),r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},R=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.search})).city,a=Object(i.c)((function(e){return e.ui})).loading;return Object(n.useEffect)((function(){e(b())}),[e]),r.a.createElement("div",null,r.a.createElement(M,null),a&&r.a.createElement(A,null),t&&!a&&r.a.createElement(L,{city:t}))},W=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not Found"),r.a.createElement("p",null,"Error 404"))},Y=function(){return r.a.createElement(u.a,null,r.a.createElement(m,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",element:r.a.createElement(R,null)}),r.a.createElement(o.a,{path:"/favorites",element:r.a.createElement(D,null)}),r.a.createElement(o.a,{path:"*",element:r.a.createElement(W,null)})))},H=a(11),X=a(23),q=[],G={loading:!1},U="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.c,V=Object(H.b)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return{city:t.payload.city,error:t.payload.error};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case E:return Object(P.a)(Object(P.a)({},e),{},{loading:!1});default:return e}},storage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload.cities;default:return e}}}),z=Object(H.d)(V,U(Object(H.a)(X.a)));var K=function(){return r.a.createElement(i.a,{store:z},r.a.createElement(Y,null))};c.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.458c8e63.chunk.js.map