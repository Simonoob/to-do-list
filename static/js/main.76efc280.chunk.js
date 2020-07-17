(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{32:function(t,e,a){t.exports=a(60)},42:function(t,e,a){},60:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(29),l=a.n(r),c=a(18),i=a(7),s=a(8),d=a(10),u=a(9),m=a(13),p=a(1);function h(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"Todo List"),o.a.createElement(m.b,{to:"/home",className:"white-text"},"Home")," ","|"," ",o.a.createElement(m.b,{to:"/about",className:"white-text"},"About"))}var f={background:"#333",color:"#fff",textAlign:"center",padding:"1rem"},b=a(31),g=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.modify=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.submit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{style:{display:"flex",justifyContent:"flex-start",padding:"1rem",paddingLeft:"1.5rem",marginBottom:"1.7rem"},onSubmit:this.submit},o.a.createElement("input",{type:"text",name:"title",placeholder:"add Todo ...",style:{marginRight:"1rem"},value:this.state.title,onChange:this.modify}),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-large green",style:{marginRight:".5rem"}}))}}]),a}(n.Component),v=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none",opacity:t.props.todo.completed||t.props.todo.deleted?"0.3":"1",transition:".2s all ease-in-out"}},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.props.todo,e=t.id,a=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",{className:"flow-text",style:y},o.a.createElement("button",{className:"btn green white-text waves-effect waves-light",style:E,onClick:this.props.markComplete.bind(this,e)},"COMPLETED")," ",a,o.a.createElement("button",{className:"btn red waves-effect waves-light",style:j,onClick:this.props.delTodo.bind(this,e)},"x")))}}]),a}(n.Component),y={padding:"1rem"},E={border:"none",outline:"none",marginRight:"1rem"},j={float:"right"},O=v,k=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).markComplete=function(){console.log("got it")},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return o.a.createElement(O,{todo:e,key:e.id,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),a}(n.Component);function C(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is the Todo List app v1.0.0. and it is the result of a React crash course."))}a(42);var T=a(14),w=a.n(T),x=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){w.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(a){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.deleted=!t.deleted),t}))}),setTimeout((function(){t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})}),200)}))},t.addTodo=function(e){w.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1,deleted:!1}).then((function(e){return t.setState({todos:[].concat(Object(c.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;w.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(p.a,{exact:!0,path:"/home",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{addTodo:t.addTodo}),o.a.createElement(k,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(p.a,{path:"/about",component:C}))))}}]),a}(n.Component);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.76efc280.chunk.js.map