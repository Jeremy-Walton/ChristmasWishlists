(this.webpackJsonpchristmas_wishlists=this.webpackJsonpchristmas_wishlists||[]).push([[0],{19:function(t,e,a){t.exports=a(38)},24:function(t,e,a){},37:function(t,e,a){},38:function(t,e,a){"use strict";a.r(e);var s=a(2),i=a.n(s),n=a(15),r=a.n(n),c=(a(24),a(12)),o=a(4),l=a(7),m=a(9),h=a(8),u=a(10),p=a(16),d=a.n(p),f=a(17),b=a.n(f).a.initializeApp({apiKey:"AIzaSyAP9f2_UiLvxBV-Gehe7ymphvWW6Q5w518",authDomain:"christmas-wishlists.firebaseapp.com",databaseURL:"https://christmas-wishlists.firebaseio.com",projectId:"christmas-wishlists",storageBucket:"christmas-wishlists.appspot.com",messagingSenderId:"692666356872",appId:"1:692666356872:web:4b863c40a4b77ac9b97b3d",measurementId:"G-F80YRR2RBJ"}),v=d.a.createClass(b.database()),w=(a(37),function t(e){Object(o.a)(this,t),this.id=e.id,this.term=e.term,this.items=e.items}),O=function(t){function e(){return Object(o.a)(this,e),Object(m.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props.list;return i.a.createElement("div",{className:"wishlist"},t.term)}}]),e}(i.a.Component);function y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?y(a,!0).forEach((function(e){Object(c.a)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g=function(t){function e(){var t,a;Object(o.a)(this,e);for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n];return(a=Object(m.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).state={term:"",lists:{}},a.updateTerm=function(t){a.setState({term:t.target.value})},a.addList=function(t){t.preventDefault();var e=a.state,s=e.lists,i=e.term,n=(new Date).getTime(),r=new w({id:n,term:i,items:[]});a.setState({term:"",lists:j({},s,Object(c.a)({},n,r))})},a}return Object(u.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("christmas-wishlists");if(t){var e=JSON.parse(t);this.setState({term:"",lists:e.lists})}this.ref=v.syncState("/",{context:this,state:"lists"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("christmas-wishlists",JSON.stringify(this.state))}},{key:"componentWillUnmount",value:function(){v.removeBinding(this.ref)}},{key:"render",value:function(){var t=this.state,e=t.term,a=t.lists;return i.a.createElement("div",{className:"App"},i.a.createElement("header",null,i.a.createElement("div",null,"Christmas Wishlists"),i.a.createElement("a",{href:"https://www.launchtabs.com/",className:"home-link"},"Other Cool Stuff")),i.a.createElement("div",{className:"header-fix"}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"wishlist-container"},Object.keys(a).map((function(t,e){return i.a.createElement(O,{key:e,list:a[t]})}))),i.a.createElement("form",{className:"add-list",onSubmit:this.addList},i.a.createElement("input",{id:"add-list",value:e,placeholder:"List name",onChange:this.updateTerm}),i.a.createElement("button",{className:"btn btn--primary"},"Add New List"))))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.e536ef64.chunk.js.map