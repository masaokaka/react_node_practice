(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(t,n,e){},23:function(t,n,e){},43:function(t,n,e){"use strict";e.r(n);var o=e(2),c=e.n(o),a=e(17),d=e.n(a),i=(e(22),e(7)),u=e(6),s=(e(23),e(0)),r=function(t){var n=t.todos,e=t.deleteTodo,o=t.changeTodoStatus;return Object(s.jsx)("ul",{style:{listStyle:"none"},children:void 0!==n&&0!==n.length?n.map((function(t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",checked:t.done,onChange:function(){return o(t._id)}}),Object(s.jsx)("span",{children:t.name}),Object(s.jsx)("button",{onClick:function(){return e(t._id)},children:"\u524a\u9664"})]},t._id)})):Object(s.jsx)("div",{children:"Todo\u304c\u3042\u308a\u307e\u305b\u3093"})})},j=function(t){var n=t.addNewTodo,e=Object(o.useState)(""),c=Object(u.a)(e,2),a=c[0],d=c[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){return d(t.target.value)}}),Object(s.jsx)("button",{onClick:function(){return n(a),void d("")},children:"\u8ffd\u52a0"})]})},l=e(4),f=e.n(l),h="https://test-lb-995685607.ap-northeast-1.elb.amazonaws.com";var b=function(){var t=Object(o.useState)([]),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(o.useEffect)((function(){f.a.get("".concat(h,"/todos")).then((function(t){c(t.data.todos)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"todoList"}),Object(s.jsx)(r,{todos:e,deleteTodo:function(t){f.a.post("".concat(h,"/todos/delete"),{_id:t}).then((function(t){var n=e.filter((function(n){return n._id!==t.data._id}));c(Object(i.a)(n))})).catch((function(t){console.log(t)}))},changeTodoStatus:function(t){var n;e.forEach((function(e){e._id===t&&(e.done=!e.done,n=e)})),f.a.post("".concat(h,"/todos/update"),{newTodo:n}).then((function(t){var n=e.map((function(n){return t.data._id===n._id?t.data:n}));c(Object(i.a)(n))})).catch((function(t){console.log(t)}))}}),Object(s.jsx)(j,{addNewTodo:function(t){var n={name:t,done:!1};f.a.post("".concat(h,"/todos/add"),{todo:n}).then((function(t){c([].concat(Object(i.a)(e),[t.data.todo]))})).catch((function(t){console.log(t)}))}})]})},O=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,44)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,a=n.getLCP,d=n.getTTFB;e(t),o(t),c(t),a(t),d(t)}))};d.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root")),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.5f0d00ba.chunk.js.map