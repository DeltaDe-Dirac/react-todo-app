(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(11),r=n.n(a),o=(n(33),n(34),n(22)),s=n(9),l=(n(35),n(48)),d=n(50),j=(n(36),n(51)),u=n(52),b=n(1);function h(e){var t=e.addNewTodo,n=Object(c.createRef)();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"Todo-title text-center",children:"My List of ToDos"}),Object(b.jsxs)(j.a,{className:"Todo-input",size:"lg",children:[Object(b.jsx)(j.a.Prepend,{children:Object(b.jsx)(j.a.Text,{id:"inputGroup-sizing-lg",children:"New ToDo"})}),Object(b.jsx)(u.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm",placeholder:"What's Next?",ref:n,onKeyPress:function(e){return function(e){e.target.value&&13===e.charCode&&(t(e.target.value),Object(a.findDOMNode)(n.current).value="")}(e)}})]})]})}n(41);var f=n(53),O=n(24),p=n(25);function m(e){var t=e.todoList,n=e.toggleTodo,i=e.filter,a=e.removeTodo,r=Object(c.useState)(null),o=Object(s.a)(r,2),l=o[0],j=o[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(f.a,{variant:"flush",className:"Todo-list",children:t.filter((function(e){return"all"===i||("active"===i?!e.isCompleted:e.isCompleted)})).map((function(e){return Object(b.jsx)(f.a.Item,{variant:"dark",children:Object(b.jsxs)("div",{className:"form-check form-switch",onMouseEnter:function(e){return j(e.target.children.length?e.target.children[0].id:null)},onMouseLeave:function(){return j(null)},children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",id:e.id,onChange:function(e){return n(e.target.id)},checked:e.isCompleted}),Object(b.jsx)("label",{className:"form-check-label ".concat(e.isCompleted?"completed":""),htmlFor:e.id,children:e.text}),Object(b.jsx)("span",{className:"deleteToDo",children:l===e.id?Object(b.jsx)(O.a,{icon:p.a,onClick:function(){return a(l)}}):null})]})},Object(d.a)())}))})})}n(45);var x=n(49),v=n(47);function g(e){var t=e.todoList,n=e.applyFilter;return Object(b.jsx)("div",{className:"Todo-tabs",children:Object(b.jsxs)(x.a,{variant:"tabs",defaultActiveKey:"all",onSelect:function(e){return n(e)},children:[Object(b.jsx)(x.a.Item,{children:Object(b.jsxs)(x.a.Link,{eventKey:"all",children:["All ",Object(b.jsx)(v.a,{variant:"info",children:t.length})]})}),Object(b.jsx)(x.a.Item,{children:Object(b.jsxs)(x.a.Link,{eventKey:"active",children:["Active ",Object(b.jsx)(v.a,{variant:"danger",children:t.filter((function(e){return!e.isCompleted})).length})]})}),Object(b.jsx)(x.a.Item,{children:Object(b.jsxs)(x.a.Link,{eventKey:"completed",children:["Completed ",Object(b.jsx)(v.a,{variant:"warning",children:t.filter((function(e){return e.isCompleted})).length})]})})]})})}var T=n(26),N=function e(t,n,c){Object(T.a)(this,e),this.id=t,this.text=n,this.isCompleted=c};function C(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)("all"),r=Object(s.a)(a,2),j=r[0],u=r[1];function f(e){var t=0;for(t=0;t<n.length;t++)if(n[t].id===e)return t;return console.error("can't find ToDo by ID: ",e),-1}return Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("todos"));e&&i(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(b.jsx)("div",{className:"Todo-page",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)("div",{className:"Todo-page-input",children:Object(b.jsx)(h,{addNewTodo:function(e){i(n.concat(new N(Object(d.a)(),e,!1)))}})}),Object(b.jsx)("div",{className:"Todo-page-tabs",children:Object(b.jsx)(g,{todoList:n,applyFilter:u})}),Object(b.jsx)("div",{className:"Todo-page-list",children:Object(b.jsx)(m,{todoList:n,toggleTodo:function(e){var t=f(e);-1!==t&&(n[t].isCompleted=!n[t].isCompleted,i(Object(o.a)(n)))},filter:j,removeTodo:function(e){var t=f(e);-1!==t&&(n.splice(t,1),i(Object(o.a)(n)))}})})]})})}function y(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(C,{})})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.4bad1d93.chunk.js.map