(this.webpackJsonpchristmas_wishlists=this.webpackJsonpchristmas_wishlists||[]).push([[0],{20:function(e,t,s){e.exports=s(39)},25:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(2),r=s.n(a),n=s(16),i=s.n(n),c=(s(25),s(7)),o=s(4),m=s(8),l=s(9),u=s(11),h=s(10),d=s(12),p=s(17),f=s.n(p),v=s(18),b=s.n(v).a.initializeApp({apiKey:"AIzaSyAP9f2_UiLvxBV-Gehe7ymphvWW6Q5w518",authDomain:"christmas-wishlists.firebaseapp.com",databaseURL:"https://christmas-wishlists.firebaseio.com",projectId:"christmas-wishlists",storageBucket:"christmas-wishlists.appspot.com",messagingSenderId:"692666356872",appId:"1:692666356872:web:4b863c40a4b77ac9b97b3d",measurementId:"G-F80YRR2RBJ"}),y=f.a.createClass(b.database());s(38);function O(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function w(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?O(s,!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):O(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var g=function(e){function t(e){var s;Object(m.a)(this,t),(s=Object(u.a)(this,Object(h.a)(t).call(this,e))).updateTerm=function(e){s.setState({term:e.target.value})},s.addItem=function(e){e.preventDefault();var t=s.props.list;s.state.term&&s.setState((function(e){var s=e.items,a=e.term,r=(new Date).getTime(),n={id:r,list_id:t.id,text:a};return{term:"",items:w({},s,Object(o.a)({},r,n))}}))},s.removeItem=function(e){var t=Object(c.a)({},s.state.items);window.confirm("Are you sure you want to delete ".concat(t[e].text))&&(t[e]=null,s.setState({items:t}))};var a=localStorage.getItem("christmas-wishlists-items"),r=a?JSON.parse(a):{items:{}};return s.state={term:"",items:r.items},s}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ref=y.syncState("/items",{context:this,state:"items"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("christmas-wishlists-items",JSON.stringify(this.state))}},{key:"componentWillUnmount",value:function(){y.removeBinding(this.ref)}},{key:"removeList",value:function(){var e=this.props,t=e.list,s=e.removeList;window.confirm("Are you sure you want to delete ".concat(t.term))&&s(t.id)}},{key:"stringBetween",value:function(e,t,s){return e.substring(e.lastIndexOf(t)+1,e.lastIndexOf(s))}},{key:"renderItems",value:function(){var e=this,t=this.state.items,s=this.props.list,a={};return Object.keys(t).forEach((function(e){var r=t[e];r.list_id===s.id&&(a[r.id]=r)})),Object.keys(a).map((function(s,a){return e.renderItem({id:s,text:t[s].text},a)}))}},{key:"renderItem",value:function(e,t){var s=e.text,a=e.id;return r.a.createElement("div",{key:t,className:"item"},s.startsWith("[")&&s.endsWith(")")?this.renderLink(s):r.a.createElement("div",{className:"item__text"},s),r.a.createElement("div",{className:"item__close",onClick:this.removeItem.bind(this,a)},"X"))}},{key:"renderLink",value:function(e){var t=this.stringBetween(e,"[","]"),s=this.stringBetween(e,"(",")");return r.a.createElement("a",{href:s,className:"item__text"},t)}},{key:"render",value:function(){var e=this.state.term,t=this.props.list;return r.a.createElement("div",{className:"wishlist"},r.a.createElement("div",{className:"wishlist__header"},r.a.createElement("h1",{className:"mt-0"},t.term),r.a.createElement("h1",{className:"wishlist__close",onClick:this.removeList.bind(this)},"X")),r.a.createElement("div",{className:"item-container"},this.renderItems()),r.a.createElement("form",{className:"add-form",onSubmit:this.addItem},r.a.createElement("input",{value:e,placeholder:"Item",onChange:this.updateTerm}),r.a.createElement("button",{type:"submit",className:"btn btn--primary"},"Add")))}}]),t}(r.a.Component);function j(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?j(s,!0).forEach((function(t){Object(o.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):j(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var E=function(e){function t(){var e;Object(m.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={term:"",lists:{}},e.updateTerm=function(t){e.setState({term:t.target.value})},e.addList=function(t){t.preventDefault(),e.state.term&&e.setState((function(e){var t=e.lists,s=e.term,a=(new Date).getTime(),r={id:a,term:s,items:[]};return{term:"",lists:k({},t,Object(o.a)({},a,r))}}))},e.removeList=function(t){var s=Object(c.a)({},e.state.lists);s[t]=null,e.setState({lists:s})};var s=localStorage.getItem("christmas-wishlists"),a=s?JSON.parse(s):{lists:{}};return e.state={term:"",lists:a.lists},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.ref=y.syncState("/lists",{context:this,state:"lists"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("christmas-wishlists",JSON.stringify(this.state))}},{key:"componentWillUnmount",value:function(){y.removeBinding(this.ref)}},{key:"render",value:function(){var e=this,t=this.state,s=t.term,a=t.lists;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",null,"Christmas Wishlists"),r.a.createElement("a",{href:"https://www.launchtabs.com/",className:"home-link"},"Other Cool Stuff")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"wishlist-container"},Object.keys(a).map((function(t,s){return r.a.createElement(g,{key:s,removeList:e.removeList,list:a[t]})})))),r.a.createElement("form",{className:"add-form add-list",onSubmit:this.addList},r.a.createElement("input",{value:s,placeholder:"List name",onChange:this.updateTerm}),r.a.createElement("button",{type:"submit",className:"btn btn--primary"},"Add New List")))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.5e4d2b4f.chunk.js.map