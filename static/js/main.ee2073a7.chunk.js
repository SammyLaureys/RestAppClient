(this.webpackJsonpbooksclient=this.webpackJsonpbooksclient||[]).push([[0],{23:function(t,n,e){},25:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e(0),a=e.n(c),i=e(13),o=e.n(i),s=(e(23),e(2)),u=e.n(s),j=e(6),b=e(17),p=e(5),f=e(3),l=(e(25),e(4));function d(){var t=Object(f.a)(["\n   width: 100%;\n   margin-top: 2%;\n   margin-left: 48%;\n"]);return d=function(){return t},t}function h(){var t=Object(f.a)(["\n   margin-left: 40%;\n"]);return h=function(){return t},t}function O(){var t=Object(f.a)(["\n  float: right;\n  margin-right: 25%;\n"]);return O=function(){return t},t}function v(){var t=Object(f.a)(["\n   float: left;\n   margin-left: 25%;\n"]);return v=function(){return t},t}var g=l.a.div(v()),x=l.a.div(O()),m=l.a.h2(h()),k=l.a.div(d());var y=function(t){var n=t.addBook,e=Object(c.useState)(""),a=Object(p.a)(e,2),i=a[0],o=a[1],s=Object(c.useState)(""),b=Object(p.a)(s,2),f=b[0],l=b[1];function d(){return(d=Object(j.a)(u.a.mark((function t(e){var r,c,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)},t.next=3,fetch("".concat("https://rest-app-server.herokuapp.com/books"),r);case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,n(a);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{children:"Create a new book"}),Object(r.jsxs)(g,{children:[Object(r.jsx)("label",{children:"title:"}),Object(r.jsx)("input",{value:i,onChange:function(t){return o(t.target.value)}})]}),Object(r.jsxs)(x,{children:[Object(r.jsx)("label",{children:"author:"}),Object(r.jsx)("input",{value:f,onChange:function(t){return l(t.target.value)}})]}),Object(r.jsx)("br",{}),Object(r.jsx)(k,{children:Object(r.jsx)("button",{onClick:function(){return function(t){return d.apply(this,arguments)}({title:i,author:f})},children:"add"})})]})};function w(){var t=Object(f.a)(["\n  width: 50%;\n  border: 1px solid black;\n  margin-top: 5%;\n  margin-left: 24%;\n  margin-right: 20%;\n  padding-top: 1%;\n  padding-bottom: 1%;\n  background-color: #08AEEA;\n  background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);\n\n"]);return w=function(){return t},t}var C=l.a.div(w());var A=function(){var t=Object(c.useState)([]),n=Object(p.a)(t,2),e=n[0],a=n[1],i=Object(c.useState)(!1),o=Object(p.a)(i,2),s=o[0],f=o[1],l="https://rest-app-server.herokuapp.com/books";function d(t){a(e.filter((function(n){return n.id!==t})))}function h(){return(h=Object(j.a)(u.a.mark((function t(n){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)},t.next=3,fetch("".concat("https://rest-app-server.herokuapp.com/books"),e);case 3:return r=t.sent,t.next=6,r.json();case 6:d(t.sent);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function t(){return(t=Object(j.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,fetch(l);case 3:return n=t.sent,t.next=6,n.json();case 6:e=t.sent,a(e),f(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(r.jsxs)("div",{className:"backGround",children:[Object(r.jsxs)("div",{className:"App",children:[!!s&&Object(r.jsx)("p",{children:"LOADING DATA!!!"}),e.map((function(t){return Object(r.jsxs)("p",{children:[t.title," - ",t.author," ",Object(r.jsx)("button",{onClick:function(){return function(t){return h.apply(this,arguments)}()},children:"delete"})]},t.title)}))]}),Object(r.jsx)(C,{children:Object(r.jsx)(y,{addBook:function(t){a([].concat(Object(b.a)(e),[t]))}})})]})},E=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.ee2073a7.chunk.js.map