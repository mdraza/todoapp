(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),l=(a(14),a(15),a(4)),i=a(1),d=a(17),m=a(7),s=function(e){var t=e.todoText,a=e.changeText,n=e.addTodo;return c.a.createElement("div",{className:"input-group "},c.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter your todo",value:t,onChange:a}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-primary",onClick:n,disabled:""==t},"Add Todo")))},u=function(e){var t=e.item,a=e.changeCheckBox,n=e.deleteTodo;return c.a.createElement("li",{className:"list-group-item ml-3 d-flex justify-content-between",key:t.id},c.a.createElement("div",null,c.a.createElement("input",{className:"form-check-input",type:"radio",checked:t.isComplected,onChange:function(){return a(t.id)}}),c.a.createElement("span",{className:t.isComplected?"complectedTodo":null},t.text)),c.a.createElement("a",{href:"#",onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"far fa-trash-alt"})))},p=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([{id:1,text:"Website design for client",isComplected:!1},{id:2,text:"Create design flow for xyz app",isComplected:!1},{id:3,text:"Play cricket with xyz team",isComplected:!1},{id:4,text:"Google meet meeting with client",isComplected:!0}]),p=Object(i.a)(r,2),f=p[0],E=p[1],h=function(e){var t=f.map((function(t){return t.id==e?(t.isComplected=!0,t):t}));E(t)},x=function(e){var t=f.filter((function(t){return t.id!=e}));E(t)};return c.a.createElement("div",{className:"my-todo mt-5"},c.a.createElement("h4",{className:"text-center p-2 text-primary"},"TODO APP"),c.a.createElement("div",{className:"card shadow"},c.a.createElement("div",{className:"card-header bg-default"},c.a.createElement(s,Object(m.a)({todoText:a,changeText:function(e){o(e.target.value)},addTodo:function(){var e={id:Object(d.a)(),text:a,isComplected:!1};E([e].concat(Object(l.a)(f))),o("")}},"todoText",a))),c.a.createElement("ul",{className:"list-group list-group-flush"},f.map((function(e){return c.a.createElement(u,{key:e.key,item:e,changeCheckBox:h,deleteTodo:x})})))))},f=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p,null))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.2e12419b.chunk.js.map