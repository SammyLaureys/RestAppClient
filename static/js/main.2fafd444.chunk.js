(this.webpackJsonpbooksclient=this.webpackJsonpbooksclient||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(1),s=n.n(c),r=n(9),a=n.n(r),i=(n(16),n(4)),u=n(2),l=n.n(u),b=n(5),d=n(10),j=n(3);n(18);function p(e){var t=e.setIsLoading,n=e.setError,s=e.addBook,r=Object(c.useState)(""),a=Object(j.a)(r,2),i=a[0],u=a[1],d=Object(c.useState)(""),p=Object(j.a)(d,2),O=p[0],h=p[1];function f(){return(f=Object(b.a)(l.a.mark((function e(o){var c,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("async createBook"),t(!0),n(!1),c={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(o)},e.next=6,fetch("".concat("https://rest-app-server.herokuapp.com/books"),c);case 6:return r=e.sent,e.next=9,r.json();case 9:a=e.sent,r.ok?(console.log("   async createBook: received response ".concat(JSON.stringify(a))),s(a),console.log("   async createBook: done")):(console.log("   async createBook: ERROR: ".concat(r.status," - ").concat(a.error," - ").concat(a.message)),t(!1),n(!0)),t(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"editbox",children:[Object(o.jsxs)("div",{className:"editboxrow",children:[Object(o.jsx)("label",{children:"title: "}),Object(o.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)}})]}),Object(o.jsxs)("div",{className:"editboxrow",children:[Object(o.jsx)("label",{children:"author: "}),Object(o.jsx)("input",{value:O,onChange:function(e){return h(e.target.value)}})]}),Object(o.jsx)("div",{className:"editboxbuttonrow",children:Object(o.jsx)("button",{onClick:function(){return function(e){return f.apply(this,arguments)}({title:i,author:O})},children:"create"})})]})}function O(e){var t=e.selectedBook,n=e.setSelectedBook,c=e.setIsLoading,s=e.updateBook,r=e.setError;if(!t)return null;function a(){return(a=Object(b.a)(l.a.mark((function e(n){var o,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return console.log("async editBook"),c(!0),r(!1),o={method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)},e.next=8,fetch("".concat("https://rest-app-server.herokuapp.com/books","/").concat(n.id),o);case 8:return a=e.sent,e.next=11,a.json();case 11:i=e.sent,a.ok?(console.log("   async editBook: received response ".concat(JSON.stringify(i))),s(i),console.log("   async editBook: done")):(console.log("   async createBook: ERROR: ".concat(a.status," - ").concat(i.error," - ").concat(i.message)),c(!1),r(!0)),c(!1);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"overlay",onClick:function(){return n()}}),Object(o.jsxs)("div",{className:"editbox modal",children:[Object(o.jsxs)("div",{className:"editboxrow",children:[Object(o.jsx)("label",{children:"title: "}),Object(o.jsx)("input",{value:t.title,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{title:e.target.value}))}})]}),Object(o.jsxs)("div",{className:"editboxrow",children:[Object(o.jsx)("label",{children:"author: "}),Object(o.jsx)("input",{value:t.author,onChange:function(e){return n(Object(i.a)(Object(i.a)({},t),{},{author:e.target.value}))}})]}),Object(o.jsxs)("div",{className:"editboxbuttonrow",children:[Object(o.jsx)("button",{onClick:function(){return n()},children:"cancel"}),Object(o.jsx)("button",{onClick:function(){return function(e){return a.apply(this,arguments)}(t)},children:"save"})]})]})]})}var h=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(),a=Object(j.a)(r,2),u=a[0],h=a[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),k=g[0],x=g[1],v=Object(c.useState)(),y=Object(j.a)(v,2),m=y[0],B=y[1];return console.log("render App()"),Object(c.useEffect)((function(){function e(){return(e=Object(b.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("   async getBooks: start"),x(!0),e.next=4,fetch("".concat("https://rest-app-server.herokuapp.com/books"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,console.log("   async getBooks: received response ".concat(JSON.stringify(n))),s(n),console.log("   async getBooks: done"),x(!1);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}console.log("useEffect: start"),function(){e.apply(this,arguments)}(),console.log("useEffect: back after getBooks"),console.log("useEffect: done")}),[]),Object(o.jsxs)("div",{className:"App",children:[!!k&&Object(o.jsx)("p",{style:{background:"orange",color:"black"},children:"LOADING DATA!!!"}),!!m&&Object(o.jsx)("p",{style:{background:"orange",color:"black"},children:"SOMETHING WENT WRONG!!!"}),n.map((function(e){return Object(o.jsxs)("p",{onClick:function(){return h(Object(i.a)({},e))},children:[e.title," - ",e.author]},e.title)})),Object(o.jsx)(p,{selectedBook:u,setIsLoading:x,setError:B,addBook:function(e){s([].concat(Object(d.a)(n),[e]))}}),Object(o.jsx)(O,{selectedBook:u,setSelectedBook:h,setIsLoading:x,setError:B,updateBook:function(e){s(n.map((function(t){return t.id===e.id?e:t})))}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),s(e),r(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),f()}},[[19,1,2]]]);
//# sourceMappingURL=main.2fafd444.chunk.js.map