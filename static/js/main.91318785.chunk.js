(this["webpackJsonpe-commerce-app"]=this["webpackJsonpe-commerce-app"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":312,"name":"Super Mario Odyssey","price":197.88,"score":100,"image":"super-mario-odyssey.png"},{"id":201,"name":"Call Of Duty Infinite Warfare","price":49.99,"score":80,"image":"call-of-duty-infinite-warfare.png"},{"id":102,"name":"The Witcher III Wild Hunt","price":119.5,"score":250,"image":"the-witcher-iii-wild-hunt.png"},{"id":99,"name":"Call Of Duty WWII","price":249.99,"score":205,"image":"call-of-duty-wwii.png"},{"id":12,"name":"Mortal Kombat XL","price":69.99,"score":150,"image":"mortal-kombat-xl.png"},{"id":74,"name":"Shards of Darkness","price":71.94,"score":400,"image":"shards-of-darkness.png"},{"id":31,"name":"Terra M\xe9dia: Sombras de Mordor","price":79.99,"score":50,"image":"terra-media-sombras-de-mordor.png"},{"id":420,"name":"FIFA 18","price":195.39,"score":325,"image":"fifa-18.png"},{"id":501,"name":"Horizon Zero Dawn","price":115.8,"score":290,"image":"horizon-zero-dawn.png"}]')},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(20),o=c.n(i),a=(c(27),c(12)),s=c(2),j=(c(28),c(29),c.p+"static/media/cart-icon.f62597cd.svg"),d=c(7),u=c(8),l=c(0),b=Object(n.createContext)({}),m=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(u.a)(c,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("cartData");e&&o(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("cartData",JSON.stringify(i))}),[i]),Object(l.jsx)(b.Provider,{value:{addToCart:function(e){console.log("is running");var t=!1;if(0!==i.length){var c=i.map((function(c){return c.id===e.id?(t=!0,c.amount++,c):c}));o(t?c:[].concat(Object(d.a)(c),[e]))}else o([e])},removeItem:function(e){var t=i.reduce((function(t,c){return c.id===e?(c.amount--,c.amount<=0?t:[].concat(Object(d.a)(t),[c])):[].concat(Object(d.a)(t),[c])}),[]);o(t)},removeById:function(e){var t=i.filter((function(t){return t.id!==e}));o(t)},getTotalAmount:function(){return i.reduce((function(e,t){return e+t.amount*t.price}),0).toFixed(2)},getTotalProducts:function(){return i.reduce((function(e,t){return e+t.amount}),0)},loadCartItems:function(){return Object(d.a)(i)}},children:t})};function h(){return Object(n.useContext)(b)}function O(){var e=h().getTotalProducts;return Object(l.jsx)("header",{children:Object(l.jsxs)("ul",{className:"header-ul",children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/Home",children:"Home"})}),Object(l.jsxs)("li",{children:[Object(l.jsx)(a.b,{to:"/checkout",children:Object(l.jsx)("img",{src:j,alt:"cart-icon",id:"icon-cart"})}),Object(l.jsx)("span",{id:"total-items",children:e()})]})]})})}c(36),c(37);var f=function(e){var t=e.name,c=e.visible,n=document.querySelector(".modal-container");return c&&(n.classList.add("run-animate"),setTimeout((function(){n.classList.contains("run-animate")&&n.classList.remove("run-animate")}),1400)),Object(l.jsx)("div",{className:"modal-container",children:Object(l.jsxs)("p",{id:"modal-text",children:[t," foi adiconado ao Carrinho"]})})},x=c(18),p=(c(38),function(e){var t=e.item,c=e.onClick,n=h(),r=n.addToCart,i=n.getTotalAmount;return console.log(i()),Object(l.jsxs)("div",{className:"product-card",children:[Object(l.jsx)("img",{src:"".concat("/e-commerce-app","/assets/").concat(t.image)}),Object(l.jsxs)("p",{children:["Title: ",t.name]}),Object(l.jsxs)("p",{children:["Price $",t.price]}),Object(l.jsx)("img",{src:j,alt:"cart-icon",id:"cart-icon",onClick:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){c(),r(Object(x.a)(Object(x.a)({},t),{},{amount:1}))}))})]})}),g=c(22),v=(c(39),function(e){var t=e.filterByName,c=e.filterByPrice,r=e.filterByScore,i=e.searchByName,o=Object(n.useState)(""),a=Object(u.a)(o,2),s=a[0],j=a[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:s}),Object(l.jsx)("button",{onClick:function(){return i(s)},children:"Procurar"})]}),Object(l.jsx)("div",{className:"order-container",children:Object(l.jsxs)("div",{className:"sub-order-container",children:[Object(l.jsx)("label",{children:"Ordenar Por:"}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),c()},children:"Pre\xe7o"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),r()},children:"Popularidade"})}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),t()},children:"Alfabetica"})})]})})]})});function C(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(u.a)(i,2),a=o[0],s=o[1];function j(){s(!0),setTimeout((function(){s(!1)}),1e3)}return Object(n.useEffect)((function(){r(g)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v,{filterByName:function(){var e=c.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}));r((function(t){return Object(d.a)(e)}))},filterByPrice:function(){var e=c.sort((function(e,t){return e.price>t.price?1:e.price<t.price?-1:0}));r((function(t){return Object(d.a)(e)}))},filterByScore:function(){var e=c.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0}));console.log(e),r((function(t){return Object(d.a)(e)}))},searchByName:function(e){var t=c.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));console.log(t),r(t)}}),Object(l.jsxs)("div",{className:"products-container",children:[Object(l.jsx)(f,{name:"Produto",visible:a}),c.map((function(e){return Object(l.jsx)(p,{item:e,onClick:j},e.id)}))]})]})}c(40);function y(){var e=h(),t=e.loadCartItems,c=e.getTotalAmount,n=e.removeItem,r=e.removeById,i=e.getTotalProducts,o=t();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"Produtos no Carrinho"}),Object(l.jsx)("div",{className:"checkout-container",children:0==o.length?Object(l.jsx)("p",{id:"empty-cart-message",children:"Carrinho Vazinho"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{className:"products-container-checkout",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Produto"}),Object(l.jsx)("th",{children:"Valor"}),Object(l.jsx)("th",{children:"Qtd"}),Object(l.jsx)("th",{children:"Total"}),Object(l.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(l.jsx)("tbody",{children:o.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsxs)("p",{children:["Produto ",e.name]})}),Object(l.jsx)("td",{children:Object(l.jsxs)("p",{children:["R$",e.price.toFixed(2)]})}),Object(l.jsx)("td",{className:"amount-td",children:e.amount}),Object(l.jsxs)("td",{children:["R$",(e.amount*e.price).toFixed(2)]}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{onClick:function(){return n(e.id)},children:"-"}),Object(l.jsx)("button",{onClick:function(){return r(e.id)},children:"X"})]})]},e.id)}))})]}),Object(l.jsxs)("div",{id:"total-output",children:[Object(l.jsxs)("p",{children:["Produtos:  R$",c()]}),Object(l.jsxs)("p",{children:["Frete:  R$",10*i()]}),Object(l.jsxs)("p",{children:["Total + Frete:  R$",(Number(c())+10*i()).toFixed(2)]}),Object(l.jsx)("button",{className:"finalize-button",children:"Finalizar Compra"})]})]})})]})}var N=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(m,{children:[Object(l.jsx)(O,{}),Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(s.d,{children:[Object(l.jsx)(s.b,{exact:!0,path:"/e-commerce-app",children:Object(l.jsx)(s.a,{to:"/home"})}),Object(l.jsx)(s.b,{exact:!0,path:"/e-commerce-app/",children:Object(l.jsx)(s.a,{to:"/home"})}),Object(l.jsx)(s.b,{exact:!0,path:"/home",children:Object(l.jsx)(C,{})}),Object(l.jsx)(s.b,{exact:!0,path:"/checkout",children:Object(l.jsx)(y,{})})]})})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),S()}},[[41,1,2]]]);
//# sourceMappingURL=main.91318785.chunk.js.map