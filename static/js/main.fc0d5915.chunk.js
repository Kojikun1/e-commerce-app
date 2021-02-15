(this["webpackJsonpe-commerce-app"]=this["webpackJsonpe-commerce-app"]||[]).push([[0],{22:function(e){e.exports=JSON.parse('[{"id":312,"name":"Super Mario Odyssey","price":197.88,"score":100,"image":"super-mario-odyssey.png"},{"id":201,"name":"Call Of Duty Infinite Warfare","price":49.99,"score":80,"image":"call-of-duty-infinite-warfare.png"},{"id":102,"name":"The Witcher III Wild Hunt","price":119.5,"score":250,"image":"the-witcher-iii-wild-hunt.png"},{"id":99,"name":"Call Of Duty WWII","price":249.99,"score":205,"image":"call-of-duty-wwii.png"},{"id":12,"name":"Mortal Kombat XL","price":69.99,"score":150,"image":"mortal-kombat-xl.png"},{"id":74,"name":"Shards of Darkness","price":71.94,"score":400,"image":"shards-of-darkness.png"},{"id":31,"name":"Terra M\xe9dia: Sombras de Mordor","price":79.99,"score":50,"image":"terra-media-sombras-de-mordor.png"},{"id":420,"name":"FIFA 18","price":195.39,"score":325,"image":"fifa-18.png"},{"id":501,"name":"Horizon Zero Dawn","price":115.8,"score":290,"image":"horizon-zero-dawn.png"}]')},27:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(20),o=c.n(i),a=(c(27),c(11)),s=c(2),u=(c(28),c(29),c(0));function j(){return Object(u.jsx)("header",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/Home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/checkout",children:"Cart"})})]})})}var l=c(7),d=c(9),m=Object(n.createContext)({}),b=function(e){var t=e.children,c=Object(n.useState)([]),r=Object(d.a)(c,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("cartData");e&&o(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("cartData",JSON.stringify(i))}),[i]),Object(u.jsx)(m.Provider,{value:{addToCart:function(e){console.log("is running");var t=!1;if(0!==i.length){var c=i.map((function(c){return c.id===e.id?(t=!0,c.amount++,c):c}));o(t?c:[].concat(Object(l.a)(c),[e]))}else o([e])},removeItem:function(e){var t=i.reduce((function(t,c){return c.id===e?(c.amount--,c.amount<=0?t:[].concat(Object(l.a)(t),[c])):[].concat(Object(l.a)(t),[c])}),[]);o(t)},removeById:function(e){var t=i.filter((function(t){return t.id!==e}));o(t)},getTotalAmount:function(){return i.reduce((function(e,t){return e+t.amount*t.price}),0).toFixed(2)},getTotalProducts:function(){return i.reduce((function(e,t){return e+t.amount}),0)},loadCartItems:function(){return Object(l.a)(i)}},children:t})};function f(){return Object(n.useContext)(m)}c(36);var O=c(18),h=(c(37),c.p+"static/media/cart-icon.f62597cd.svg"),p=function(e){var t=e.item,c=f(),n=c.addToCart,r=c.getTotalAmount;return console.log(r()),Object(u.jsxs)("div",{className:"product-card",children:[Object(u.jsx)("img",{src:"".concat("/e-commerce-app","/assets/").concat(t.image)}),Object(u.jsxs)("p",{children:["Title: ",t.name]}),Object(u.jsxs)("p",{children:["Price $",t.price]}),Object(u.jsx)("img",{src:h,alt:"",id:"cart-icon",onClick:function(e){return n(Object(O.a)(Object(O.a)({},t),{},{amount:1}))}})]})},x=c(22),g=(c(38),function(e){var t=e.filterByName,c=e.filterByPrice,r=e.filterByScore,i=e.searchByName,o=Object(n.useState)(""),a=Object(d.a)(o,2),s=a[0],j=a[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"search-container",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:s}),Object(u.jsx)("button",{onClick:function(){return i(s)},children:"Procurar"})]}),Object(u.jsx)("div",{className:"order-container",children:Object(u.jsxs)("div",{className:"sub-order-container",children:[Object(u.jsx)("label",{children:"Ordenar Por:"}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),c()},children:"Pre\xe7o"})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),r()},children:"Popularidade"})}),Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"",onClick:function(e){e.preventDefault(),t()},children:"Alfabetica"})})]})})]})});function v(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){r(x)}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{filterByName:function(){var e=c.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:e.name.toLowerCase()<t.name.toLowerCase()?-1:0}));r((function(t){return Object(l.a)(e)}))},filterByPrice:function(){var e=c.sort((function(e,t){return e.price>t.price?1:e.price<t.price?-1:0}));r((function(t){return Object(l.a)(e)}))},filterByScore:function(){var e=c.sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:0}));console.log(e),r((function(t){return Object(l.a)(e)}))},searchByName:function(e){var t=c.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));console.log(t),r(t)}}),Object(u.jsx)("div",{className:"products-container",children:c.map((function(e){return Object(u.jsx)(p,{item:e},e.id)}))})]})}c(39);function C(){var e=f(),t=e.loadCartItems,c=e.getTotalAmount,n=e.removeItem,r=e.removeById,i=t();return Object(u.jsxs)("div",{className:"checkout-container",children:[Object(u.jsx)("h2",{children:"Produtos no Carrinho"}),Object(u.jsx)("ul",{className:"products-container-checkout",children:i.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("p",{children:["Produto ",e.name," Pre\xe7o R$",e.price," X ",e.amount]}),Object(u.jsx)("button",{onClick:function(){return n(e.id)},children:"-"}),Object(u.jsx)("button",{onClick:function(){return r(e.id)},children:"X"})]})}))}),Object(u.jsxs)("p",{id:"total-output",children:["TOTAL: R$",c()]})]})}var y=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)(b,{children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(s.b,{exact:!0,path:"/e-commerce-app",children:Object(u.jsx)(s.a,{to:"/home"})}),Object(u.jsx)(s.b,{exact:!0,path:"/e-commerce-app/",children:Object(u.jsx)(s.a,{to:"/home"})}),Object(u.jsx)(s.b,{exact:!0,path:"/home",children:Object(u.jsx)(v,{})}),Object(u.jsx)(s.b,{exact:!0,path:"/checkout",children:Object(u.jsx)(C,{})})]})})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(y,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.fc0d5915.chunk.js.map