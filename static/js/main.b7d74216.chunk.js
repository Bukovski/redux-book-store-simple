(this["webpackJsonpredux-book-store-simple"]=this["webpackJsonpredux-book-store-simple"]||[]).push([[0],{19:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(11),i=a.n(r),s=a(4),l=(a(29),a(30),a(18)),c=a(2),u=a(3),d=a(8),m=a(7),b=a(9),p=(a(31),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){var e=this.props,t=e.show,a=e.children,o=e.handleClose;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"modal-custom__overlay",style:{opacity:t?".5":"0",visibility:t?"visible":"hidden"},onClick:o}),n.a.createElement("div",{className:"modal-custom",style:{opacity:t?"1":"0",visibility:t?"visible":"hidden"}},n.a.createElement("span",{className:"modal-custom__close",onClick:o},n.a.createElement("i",{className:"modal-custom__img fa fa-close"})),n.a.createElement("div",{className:"modal-custom__dialog"},a)))}}]),t}(o.Component)),h=a(5),E=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},f=function(e){return function(){return function(t){t({type:"FETCH_BOOKS_REQUEST"}),e.getBooks().then((function(e){return t({type:"FETCH_BOOKS_SUCCESS",payload:e})})).catch((function(e){return t({type:"FETCH_BOOKS_FAILURE",payload:e})}))}}},k=n.a.createContext(null),g=k.Provider,_=k.Consumer,O=function(e){return function(t){return n.a.createElement(_,null,(function(a){return n.a.createElement(e,Object.assign({},t,{bookstoreService:a}))}))}},v=(a(32),function(e){var t=e.title,a=void 0===t?"game over":t,o=e.text,r=void 0===o?"Please reload page":o;return n.a.createElement("div",{className:"error-indicator"},n.a.createElement("h1",{className:"error-indicator__title"},a),n.a.createElement("span",{className:"error-indicator__text"},r))}),y=(a(33),function(){return n.a.createElement("div",{className:"cssload-loader"},n.a.createElement("div",{className:"cssload-inner cssload-one"}),n.a.createElement("div",{className:"cssload-inner cssload-two"}),n.a.createElement("div",{className:"cssload-inner cssload-three"}))}),C=(a(34),function(e){var t=e.book,a=t.title,o=t.subtitle,r=t.price,i=t.image,s=e.handleAddedToCart;return n.a.createElement("div",{className:"book-list__item"},n.a.createElement("div",{className:"book-list__img-wrap"},n.a.createElement("img",{className:"book-list__img",src:i,alt:a})),n.a.createElement("div",{className:"book-list__detail"},n.a.createElement("div",{className:"book-list__content"},n.a.createElement("h3",{className:"book-list__title"},a),n.a.createElement("p",{className:"book-list__text"},o),n.a.createElement("span",{className:"book-list__price"},r)),n.a.createElement("button",{onClick:s,className:"book-list__to-cart btn btn-info"},"Add to cart")))}),N=(a(35),function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooks()}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,o=e.error,r=e.handleAddedToCart;return a?n.a.createElement(y,null):o?n.a.createElement(v,{title:"Sorry!",text:"We have lost book data. But soon they will be found"}):n.a.createElement(w,{books:t,handleAddedToCart:r})}}]),t}(o.Component)),w=function(e){var t=e.books,a=e.handleAddedToCart;return n.a.createElement("ul",{className:"book-list"},t.map((function(e){return n.a.createElement("li",{key:e.isbn13,className:"book-list__card"},n.a.createElement(C,{book:e,handleAddedToCart:function(){return a(e.isbn13)}}))})))},S=O(Object(s.b)((function(e){var t=e.bookList;return{books:t.books,loading:t.loading,error:t.error}}),(function(e,t){var a=t.bookstoreService;return Object(h.b)({fetchBooks:f(a),handleAddedToCart:E},e)}))(N)),T=(a(36),Object(s.b)((function(e){var t=e.shoppingCart;return{orderTotal:t.orderTotal,orderQuantity:t.orderQuantity}}))((function(e){var t=e.orderTotal,a=e.orderQuantity,o=e.handleClick;return n.a.createElement("header",{className:"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"},n.a.createElement("a",{className:"header-shop__logo mr-md-auto",href:"/#"},"Itbook store"),n.a.createElement("a",{className:"header-shop__cart",href:"/#",onClick:o},n.a.createElement("i",{className:"header-shop__cart-icon fa fa-shopping-cart"}),a," items $",t))}))),A=(a(37),{handleIncrease:E,handleDecrease:function(e){return{type:"BOOK_REMOVED_FROM_CART",payload:e}},handleDelete:function(e){return{type:"ALL_BOOKS_REMOVED_FROM_CART",payload:e}}}),j=Object(s.b)((function(e){var t=e.shoppingCart;return{items:t.cartItems,totalCart:t.orderTotal}}),A)((function(e){var t=e.items,a=e.totalCart,o=e.handleIncrease,r=e.handleDecrease,i=e.handleDelete;return n.a.createElement("div",{className:"modal__content"},n.a.createElement("table",{className:"table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"#"),n.a.createElement("th",{scope:"col"},"Item"),n.a.createElement("th",{scope:"col"},"Count"),n.a.createElement("th",{scope:"col"},"Price"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,t.map((function(e,t){var a=e.id,s=e.title,l=e.count,c=e.total;return n.a.createElement("tr",{key:a},n.a.createElement("td",{scope:"row"},t+1),n.a.createElement("td",null,s),n.a.createElement("td",null,l),n.a.createElement("td",null,"$",c),n.a.createElement("td",{className:"modal__wrap-btn"},n.a.createElement("button",{className:"btn btn-outline-danger btn-sm float-right",onClick:function(){return i(a)}},n.a.createElement("i",{className:"fa fa-trash-o"})),n.a.createElement("button",{className:"btn btn-outline-success btn-sm float-right",onClick:function(){return o(a)}},n.a.createElement("i",{className:"fa fa-plus-circle"})),n.a.createElement("button",{className:"btn btn-outline-warning btn-sm float-right",onClick:function(){return r(a)}},n.a.createElement("i",{className:"fa fa-minus-circle"}))))})))),n.a.createElement("div",{className:"modal__total"},"Total: $",a))}));a(38);var B=function(){var e=n.a.useState(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],r=function(){return o(!a)};return n.a.createElement("main",{role:"main",className:"container"},n.a.createElement(T,{handleClick:r}),n.a.createElement(S,null),n.a.createElement(p,{show:a,handleClose:r},n.a.createElement(j,null)))},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={hasError:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement(v,null):this.props.children}}]),t}(o.Component),R=function(){function e(){Object(c.a)(this,e),this.data=[{title:"AI Blueprints",subtitle:"How to build and deploy AI business projects",isbn13:"9781788992879",price:"$31.99",image:"https://itbook.store/img/books/9781788992879.png",url:"https://itbook.store/books/9781788992879"},{title:"Data Analysis with Python",subtitle:"A Modern Approach",isbn13:"9781789950069",price:"$31.99",image:"https://itbook.store/img/books/9781789950069.png",url:"https://itbook.store/books/9781789950069"},{title:"Build Reactive Websites with RxJS",subtitle:"Master Observables and Wrangle Events",isbn13:"9781680502954",price:"$28.98",image:"https://itbook.store/img/books/9781680502954.png",url:"https://itbook.store/books/9781680502954"},{title:"Forge Your Future with Open Source",subtitle:"Build Your Skills. Build Your Network. Build the Future of Technology",isbn13:"9781680503012",price:"$26.18",image:"https://itbook.store/img/books/9781680503012.png",url:"https://itbook.store/books/9781680503012"},{title:"Xcode Treasures",subtitle:"Master the Tools to Design, Build, and Distribute Great Apps",isbn13:"9781680505863",price:"$22.03",image:"https://itbook.store/img/books/9781680505863.png",url:"https://itbook.store/books/9781680505863"},{title:"Learning C++ by Building Games with Unreal Engine 4, 2nd Edition",subtitle:"A beginner's guide to learning 3D game development with C++ and UE4",isbn13:"9781788476249",price:"$44.99",image:"https://itbook.store/img/books/9781788476249.png",url:"https://itbook.store/books/9781788476249"},{title:"Apache Kafka Quick Start Guide",subtitle:"Leverage Apache Kafka 2.0 to simplify real-time data processing for distributed applications",isbn13:"9781788997829",price:"$23.99",image:"https://itbook.store/img/books/9781788997829.png",url:"https://itbook.store/books/9781788997829"},{title:"Hands-On Dark Web Analysis",subtitle:"Learn what goes on in the Dark Web, and how to work with it",isbn13:"9781789133363",price:"$29.99",image:"https://itbook.store/img/books/9781789133363.png",url:"https://itbook.store/books/9781789133363"},{title:"CentOS Quick Start Guide",subtitle:"Get up and running with CentOS server administration",isbn13:"9781789344875",price:"$31.99",image:"https://itbook.store/img/books/9781789344875.png",url:"https://itbook.store/books/9781789344875"},{title:"Machine Learning with Apache Spark Quick Start Guide",subtitle:"Uncover patterns, derive actionable insights, and learn from big data using MLlib",isbn13:"9781789346565",price:"$29.99",image:"https://itbook.store/img/books/9781789346565.png",url:"https://itbook.store/books/9781789346565"}]}return Object(u.a)(e,[{key:"getBooks",value:function(){var e=this;return new Promise((function(t,a){setTimeout((function(){Math.random()>.75?a(new Error("Something bad happened")):t(e.data)}),1e3)}))}}]),e}(),F=a(17),I=function(e,t){if(void 0===e)return{books:[],loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],loading:!1,error:t.payload};default:return e.bookList}},L=a(10),M=function(e){return parseFloat(e.replace(/\$/,""))},x=function(e,t,a){var o=e.bookList.books,n=e.shoppingCart.cartItems,r=o.find((function(e){return e.isbn13===t})),i=n.findIndex((function(e){return e.id===t})),s=function(e,t,a){return 0===t.count?[].concat(Object(L.a)(e.slice(0,a)),Object(L.a)(e.slice(a+1))):-1===a?[].concat(Object(L.a)(e),[t]):[].concat(Object(L.a)(e.slice(0,a)),[t],Object(L.a)(e.slice(a+1)))}(n,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,o=t.id,n=void 0===o?e.isbn13:o,r=t.count,i=void 0===r?0:r,s=t.title,l=void 0===s?e.title:s,c=t.total,u=void 0===c?0:c,d=parseFloat(u)+a*M(e.price);return{id:n,title:l,count:i+a,total:d.toFixed(2)}}(r,n[i],a),i),l=function(e){var t=0,a=0;return e.forEach((function(e){var o=e.total,n=e.count;t+=parseFloat(o),a+=n})),{orders:t,quantities:a}}(s),c=l.orders,u=l.quantities;return{cartItems:s,orderTotal:c.toFixed(2),orderQuantity:u}},K=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0,orderQuantity:0};switch(t.type){case"BOOK_ADDED_TO_CART":return x(e,t.payload,1);case"BOOK_REMOVED_FROM_CART":return x(e,t.payload,-1);case"ALL_BOOKS_REMOVED_FROM_CART":var a=e.shoppingCart.cartItems.find((function(e){return e.id===t.payload}));return x(e,t.payload,-a.count);default:return e.shoppingCart}},$=function(e,t){return{bookList:I(e,t),shoppingCart:K(e,t)}},U="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):h.c,Q=[function(e){return function(t){return function(a){console.group(a.type),console.log("Before",e.getState());var o=t(a);return console.log("After",e.getState()),console.groupEnd(),o}}},F.a],H=U(h.a.apply(void 0,Q)),P=Object(h.d)($,H),G=new R,V=n.a.createElement(s.a,{store:P},n.a.createElement(D,null,n.a.createElement(g,{value:G},n.a.createElement(B,null))));i.a.render(V,document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b7d74216.chunk.js.map