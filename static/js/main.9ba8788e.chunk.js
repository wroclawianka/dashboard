(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{56:function(e,t,a){e.exports=a(86)},66:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var n=a(0),i=a.n(n),c=a(22),r=a.n(c),o=a(8),l=a(15),s=a(44),u=(a(66),a(103)),d=a(111),m=a(107),p=a(104),f=a(106),h=a(18),v=a(21),E=a.n(v),b=a(30),g=a(45),w=a.n(g).a.create({baseURL:"https://api.openweathermap.org/data/2.5"}),O=function(e){return function(){var t=Object(b.a)(E.a.mark((function t(a){var n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.units="metric",e.appid="5ab21a7d11964ffa58b9f5966a91f6c6",t.next=4,w.get("/weather",{params:e});case 4:n=t.sent,a({type:"FETCH_WEATHER",payload:n.data});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=a(25),x=a(108),y=a(105),I=a(50),N=a.n(I),k=a(49),C=a.n(k),T=a(109),S=Object(u.a)((function(e){return Object(d.a)({root:{border:"1px solid #d1d1d1",borderRadius:"25px",paddingLeft:"14px"},iconButton:{padding:10}})})),_=function(e){var t=S(),a=Object(o.b)(),c=Object(n.useState)(""),r=Object(j.a)(c,2),l=r[0],s=r[1];return i.a.createElement("form",{className:t.root,onSubmit:function(t){var n;a(O({q:l})),s(""),t.preventDefault(),n=!1,e.setEditMode(n)}},i.a.createElement(T.a,{type:"text",placeholder:"Change location...",value:l,onChange:function(e){s(e.target.value)}}))},A=Object(u.a)((function(){return Object(d.a)({root:{maxWidth:"380px",margin:"0 auto",color:"#02005c"},title:{textAlign:"left",paddingBottom:"12px"},editIcon:{paddingLeft:"5px",color:"#a2a2a2",paddingTop:"7px","&:hover, &:focus":{color:"inherit"}},locationInput:{paddingBottom:"5px",display:"flex"},mainInfo:{textAlign:"left"},detailInfo:{textAlign:"center",margin:"auto"},verticallyCentered:{margin:"auto 0",textAlign:"center"},bold:{fontWeight:600}})})),L=function(){var e=A(),t=Object(o.c)((function(e){return e.weather})),a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],l=c[1],s=function(){return i.a.createElement(p.a,null,i.a.createElement("div",null,i.a.createElement("img",{src:"".concat("https://wroclawianka.github.io/dashboard","/assets/weather_icons/").concat(t.main.icon,".svg"),width:"100px",alt:"Weather"})))},u=function(){return i.a.createElement(p.a,{className:e.verticallyCentered},i.a.createElement(y.a,{variant:"h4"},"".concat(t.main.temp," \xb0C")),i.a.createElement(y.a,{variant:"subtitle2",display:"block",gutterBottom:!0},i.a.createElement("div",null,"Feels like:"),i.a.createElement("div",null,"".concat(t.temperature.feelsLike," \xb0C"))))};return t?i.a.createElement("div",null,i.a.createElement(x.a,{className:e.root},i.a.createElement(p.a,{container:!0,spacing:0,direction:"column"},i.a.createElement(p.a,{container:!0,justify:"space-between",direction:"row"},i.a.createElement(p.a,{className:e.title},i.a.createElement(y.a,{variant:"h5"},t.main.location)),i.a.createElement(p.a,null,r?i.a.createElement("div",{className:e.locationInput},i.a.createElement(_,{setEditMode:l}),i.a.createElement(C.a,{className:e.editIcon,fontSize:"small",onClick:function(){l(!1)}})):i.a.createElement(N.a,{className:e.editIcon,fontSize:"small",onClick:function(){l(!0)}}))),i.a.createElement(p.a,{container:!0,justify:"space-evenly",direction:"row",item:!0,xs:12},i.a.createElement(p.a,{className:e.mainInfo,item:!0,xs:7},i.a.createElement(p.a,null,i.a.createElement(y.a,{variant:"subtitle1"},t.main.description)),i.a.createElement(p.a,{container:!0,justify:"center",direction:"row"},s(),u())),i.a.createElement(p.a,{className:e.detailInfo,item:!0,xs:5},i.a.createElement(y.a,{variant:"subtitle2"},i.a.createElement("div",null,"Humidity:"),i.a.createElement("div",{className:e.bold},"".concat(t.details.humidity,"%")),i.a.createElement("div",null,"Cloudiness:"),i.a.createElement("div",{className:e.bold},"".concat(t.details.cloudiness,"%")),i.a.createElement("div",null,"Wind:"),i.a.createElement("div",{className:e.bold},"".concat(t.details.wind," m/sec")))))))):i.a.createElement("div",null,"Loading weather...")},W=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.position}));return Object(n.useEffect)((function(){return e(O(Object(h.a)({},t)))})),t?i.a.createElement(L,null):i.a.createElement("div",null,"Waiting for geolocation permission...")},B=Object(u.a)((function(e){return Object(d.a)({root:{position:"absolute",height:"100%",width:"100%",backgroundColor:"#f5f5f5"},container:{marginTop:"20px",flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}})}));function H(){var e=Object(o.c)((function(e){return e.position})),t=B(),a=Object(o.b)();return Object(n.useEffect)((function(){a(function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.navigator.geolocation.getCurrentPosition((function(e){t({type:"GET_POSITION",payload:e})}),(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),e?i.a.createElement("div",{className:t.root},i.a.createElement(f.a,{className:t.container},i.a.createElement(p.a,{container:!0,spacing:3},i.a.createElement(p.a,{item:!0,xs:5},i.a.createElement(m.a,{className:t.paper},i.a.createElement(W,null)))))):null}function R(e){return{lat:e.latitude,lon:e.longitude}}var F=a(13),G=function e(t,a,n){Object(F.a)(this,e),this.humidity=void 0,this.cloudiness=void 0,this.wind=void 0,this.humidity=t,this.cloudiness=a,this.wind=n},M=function e(t,a,n,i){Object(F.a)(this,e),this.location=void 0,this.description=void 0,this.temp=void 0,this.icon=void 0,this.location=t,this.description=a,this.temp=parseInt(n),this.icon=i},P=function e(t,a,n){Object(F.a)(this,e),this.min=void 0,this.max=void 0,this.feelsLike=void 0,this.min=parseInt(t),this.max=parseInt(a),this.feelsLike=parseInt(n)},z=function e(t,a,n){Object(F.a)(this,e),this.main=void 0,this.temperature=void 0,this.details=void 0,this.main=t,this.temperature=a,this.details=n};function J(e){var t,a=e.main,n=e.name,i=e.weather&&e.weather[0]?e.weather[0].main:"",c=(t=e.weather[0].id)>=200&&t<300?"200":t>=300&&t<400?"300":t>=500&&t<600?"500":t>=600&&t<700?"600":t>=700&&t<800?"700":800===t?"800":t>800?"801":"100",r=new M(n,i,a.temp,c),o=new P(a.temp_min,a.temp_min,a.feels_like),l=new G(a.humidity,e.clouds.all,e.wind.speed);return new z(r,o,l)}var q=Object(l.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_WEATHER":var a=J(t.payload);return Object(h.a)({},a);default:return e}},position:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_POSITION":var a=t.payload.coords?R(t.payload.coords):null;return Object(h.a)({},a);default:return e}}});function D(){return Object(l.d)(q,Object(l.a)(s.a))}r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(o.a,{store:D()},i.a.createElement(H,null)),","),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.9ba8788e.chunk.js.map