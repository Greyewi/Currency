(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{175:function(e,t,n){e.exports=n(335)},180:function(e,t,n){},181:function(e,t,n){},335:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),u=n.n(c),s=(n(180),n(95)),i=n(58),o=n(59),l=n(65),p=n(60),b=n(66),y=(n(181),n(182),n(27)),O=n(49),v=n(338),E=n(339),f=n(342),C=n(115),d=function(e){var t=e.activeCurrencies,n=e.saveCurrencies;return a.a.createElement("header",{className:"App-header"},e.currencyList&&a.a.createElement(E.a,{ghost:!1,onBack:function(){return window.history.back()},title:t?t.base:"Currencies list",subTitle:e.currencyList.date||t.date,extra:[t&&a.a.createElement(f.a,{onClick:e.saveActiveCurrency,key:"3"},"Save current currency"),n.length>0&&a.a.createElement(C.a,{to:"/list",key:"1"},a.a.createElement(f.a,{type:"primary"},"To Saves list"))]}))},j=function(e){var t=e.currencyList,n=e.getCurrencyData;return a.a.createElement("main",null,t&&t.list&&t.list.map((function(e,t){return a.a.createElement("div",{onClick:function(){return n(e)},key:t},e)})))},m=n(62),h=function(e){var t=e.activeCurrencies,n=e.getCurrencyData,r=Object.entries(t.rates).map((function(e){return Object(m.a)({},e[0],e[1])}));return a.a.createElement("main",null,r&&r.map((function(e,t){return a.a.createElement("div",{onClick:n?function(){return n(Object.keys(e))}:function(){return!1},key:t},"".concat(Object.keys(e)," - ").concat(Object.values(e)))})))},x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.activeCurrencies,n=Object(s.a)(e,["activeCurrencies"]);return t?a.a.createElement(h,Object.assign({activeCurrencies:t},n)):a.a.createElement(j,n)}}]),t}(r.Component),S=n(341),k=n(14),g=S.a.Panel,_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.saveCurrencies,n=e.removeActiveCurrency,r=Object.entries(t).map((function(e){return Object(m.a)({},e[0],e[1])}));return a.a.createElement("main",null,r&&r.map((function(e,t){var r,c=JSON.parse(e[Object.keys(e)]);return a.a.createElement("div",{key:t},a.a.createElement(S.a,{accordion:!0},a.a.createElement(g,{header:c.base+" - "+c.date,key:"1",extra:(r=function(){return n(c.base)},a.a.createElement(k.a,{type:"delete",onClick:function(e){e.stopPropagation(),r()}}))},a.a.createElement(h,{activeCurrencies:c}))))})))}}]),t}(r.Component),T=n(22),L=n.n(T),R=n(167),N=n(79),w=n(12),U=n(120),I=n.n(U),A="".concat("currency","/").concat("currency"),V="".concat(A,"/INIT_CURRENCY_TITLE_LIST_REQUEST"),Y="".concat(A,"/INIT_CURRENCY_TITLE_LIST_SUCCESS"),D="".concat(A,"/FETCH_NEW_CURRENCY_LIST_REQUEST"),J="".concat(A,"/FETCH_NEW_CURRENCY_LIST_SUCCESS"),Q="".concat(A,"/SAVE_ACTIVE_CURRENCY_REQUEST"),B="".concat(A,"/SAVE_ACTIVE_CURRENCY_SUCCESS"),F="".concat(A,"/REMOVE_SAVED_CURRENCY_REQUEST"),H=("".concat(A,"/REMOVE_SAVED_CURRENCY_SUCCESS"),"".concat(A,"/LOADING_DATA_SUCCESS")),M=Object(R.a)({currencyList:null,activeCurrencies:null,saveCurrencies:[],isLoading:!1});var P=function(e){return e.currency},W=Object(N.a)(P,(function(e){return e.currencyList})),z=Object(N.a)(P,(function(e){return e.isLoading})),G=Object(N.a)(P,(function(e){return e.activeCurrencies})),q=Object(N.a)(P,(function(e){return e.saveCurrencies}));var K=L.a.mark((function e(){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(w.d)(F);case 3:return t=e.sent,n=t.payload,e.next=7,Object(w.b)({type:H,payload:!0});case 7:return localStorage.removeItem(n),e.next=10,Object(w.b)({type:F,payload:localStorage});case 10:return e.next=12,Object(w.b)({type:H,payload:!1});case 12:e.next=0;break;case 14:case"end":return e.stop()}}),e)})),X=L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(w.d)(Q);case 3:return e.next=5,Object(w.b)({type:H,payload:!0});case 5:return e.next=7,Object(w.c)(G);case 7:return t=e.sent,localStorage.setItem(t.base,JSON.stringify(t)),e.next=11,Object(w.b)({type:B,payload:localStorage});case 11:return e.next=13,Object(w.b)({type:H,payload:!1});case 13:e.next=0;break;case 15:case"end":return e.stop()}}),e)})),Z=L.a.mark((function e(){var t,n,r,a,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(w.d)(D);case 3:return t=e.sent,n=t.payload,r="https://api.exchangeratesapi.io/latest?base=".concat(n),e.next=8,Object(w.b)({type:H,payload:!0});case 8:return e.prev=8,e.next=11,I.a.get(r,JSON.stringify({headers:{"Content-Type":"text/html"}}));case 11:return a=e.sent,c=a.data,e.next=15,Object(w.b)({type:J,payload:c});case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.log(e.t0);case 20:return e.prev=20,e.next=23,Object(w.b)({type:H,payload:!1});case 23:return e.finish(20);case 24:e.next=0;break;case 26:case"end":return e.stop()}}),e,null,[[8,17,20,24]])})),$=L.a.mark((function e(){var t,n,r,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(w.d)(V);case 3:return t="https://api.exchangeratesapi.io/latest",e.next=6,Object(w.b)({type:H,payload:!0});case 6:return e.prev=6,e.next=9,I.a.get(t,JSON.stringify({headers:{"Content-Type":"text/html"}}));case 9:return n=e.sent,r=n.data,a=Object.keys(r.rates),e.next=14,Object(w.b)({type:Y,payload:{list:a,date:r.date}});case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6),console.log(e.t0);case 19:return e.prev=19,e.next=22,Object(w.b)({type:B,payload:localStorage});case 22:return e.next=24,Object(w.b)({type:H,payload:!1});case 24:return e.finish(19);case 25:e.next=0;break;case 27:case"end":return e.stop()}}),e,null,[[6,16,19,25]])})),ee=L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([K(),X(),$(),Z()]);case 2:case"end":return e.stop()}}),e)})),te=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e))).props.initCurrencyList(),n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isLoading,n=Object(s.a)(e,["isLoading"]);return a.a.createElement("div",{className:"App"},a.a.createElement(d,n),t?a.a.createElement(v.a,{size:"large"}):a.a.createElement(y.c,null,a.a.createElement(y.a,{path:"/list",render:function(){return a.a.createElement(_,n)}}),a.a.createElement(y.a,{path:"/",render:function(){return a.a.createElement(x,n)}})))}}]),t}(r.Component),ne=Object(O.c)((function(e){return{activeCurrencies:G(e),saveCurrencies:q(e),currencyList:W(e),isLoading:z(e)}}),{removeActiveCurrency:function(e){return{type:F,payload:e}},saveActiveCurrency:function(){return{type:Q}},initCurrencyList:function(){return{type:V}},getCurrencyData:function(e){return{type:D,payload:e}}})(te),re=n(74),ae=n(33),ce=n(154),ue=n(169),se=n.n(ue),ie=n(172),oe=n(340),le=n(21),pe=Object(le.a)(),be=Object(ae.c)(Object(m.a)({form:oe.a,router:Object(re.b)(pe)},"currency",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new M,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case Y:return e.set("currencyList",r);case J:return e.set("activeCurrencies",r);case B:return e.set("saveCurrencies",r);case H:return e.set("isLoading",r);default:return e}}))),ye=L.a.mark(Oe);function Oe(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([ee()]);case 2:case"end":return e.stop()}}),ye)}var ve=Object(ie.a)(),Ee=Object(ae.a)(ve,Object(ce.a)(pe),se.a),fe=Object(ae.e)(be,Ee);ve.run(Oe);var Ce=fe;u.a.render(a.a.createElement(O.a,{store:Ce},a.a.createElement(re.a,{history:pe},a.a.createElement(ne,null))),document.getElementById("root"))}},[[175,1,2]]]);
//# sourceMappingURL=main.9b318d0d.chunk.js.map