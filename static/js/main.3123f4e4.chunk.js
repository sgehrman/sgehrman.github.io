(this["webpackJsonpreact-example"]=this["webpackJsonpreact-example"]||[]).push([[0],{10:function(e,t,a){e.exports={layoutBox:"Shared_layoutBox__2CWhp",centerColumn:"Shared_centerColumn__zOGfU",controlBox:"Shared_controlBox__3UuXr",controlMenuItem:"Shared_controlMenuItem__1A3Xz",controlMenuValue:"Shared_controlMenuValue__1mrod"}},39:function(e,t,a){e.exports={todoBox:"TodoPage_todoBox__33AXS",spacer:"TodoPage_spacer__3wUHe",todoItemBox:"TodoPage_todoItemBox__VKuke"}},50:function(e,t,a){e.exports={gridContainer:"GridPage_gridContainer__3M_AO",gridCard:"GridPage_gridCard__qUDXA"}},52:function(e,t,a){e.exports={linkBar:"Header_linkBar__2kMrb",spacer:"Header_spacer__3B963"}},68:function(e,t,a){e.exports={box:"NumberBox_box__Nqe0O"}},79:function(e,t,a){e.exports=a(90)},84:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(84),a(21)),i=a.n(c),s=a(33),u=a(70),d=a(16),m=a(135),p=a(56),f=a.n(p),v=a(34),x=a(11),E=a(59),b=a(127),g=a(123),h=a(52),y=a.n(h);var k={position:"relative",display:"flex",alignItems:"center",color:"white",backgroundColor:"#111",padding:"8px",flexDirection:"column"},_={display:"flex",flexDirection:"column",alignItems:"center",a:{textDecoration:"none"}},C={fontSize:"calc(10px + 1.1vmin)",fontWeight:"bold"},N={position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",right:"12px",top:"0px",bottom:"0px",width:"24px"},S={fontSize:"calc(10px + .6vmin)",fontWeight:"bold",color:"#555"},w=Object(E.a)(Object(E.a)({},S),{},{color:"steelblue"}),M=function(){return o.a.createElement("header",{style:k},o.a.createElement("div",{style:_},o.a.createElement("div",{style:C},"React Playground"),o.a.createElement("div",{className:y.a.linkBar},o.a.createElement(v.b,{exact:!0,to:"/",style:S,activeStyle:w},"Flexbox"),o.a.createElement("div",{className:y.a.spacer},"|"),o.a.createElement(v.b,{exact:!0,to:"/grid",style:S,activeStyle:w},"Grid"),o.a.createElement("div",{className:y.a.spacer},"|"),o.a.createElement(v.b,{exact:!0,to:"/todo",style:S,activeStyle:w},"Todo"))),o.a.createElement("div",{style:N},o.a.createElement(g.a,{href:"https://github.com/sgehrman/react-example",target:"_blank",color:"inherit"},o.a.createElement(b.a,null))))},j=a(10),O=a.n(j),B=a(128),I=a(69),T=a(137),V=a(129);function P(e){var t=o.a.useState(null),a=Object(d.a)(t,2),n=a[0],r=a[1],l=e.title,c=e.options,i=e.onMenuSelect,s=e.morePopup,u=e.dark,m=function(e){r(e.currentTarget)},p=function(){r(null)},f={color:u?"black":"white",textTransform:"lowercase",border:u?"1px solid #555":"none",padding:"0px",margin:u?"4px 0px":"0px"},v=[];c.forEach((function(e){v.push(o.a.createElement(T.a,{key:e,onClick:function(){return function(e){i(l,e),p()}(e)}},e))}));var x=o.a.createElement(B.a,{style:f,onClick:m},"".concat(l,":"));return s&&(x=o.a.createElement(g.a,{onClick:m},o.a.createElement(V.a,null))),o.a.createElement("div",null,x,o.a.createElement(I.a,{anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:p},v))}P.defaultProps={morePopup:!1,dark:!1};var W=P,D=a(68),z=a.n(D);var A=function(e){return o.a.createElement("div",{className:z.a.box},e.title)};var G=function(e){return o.a.createElement("div",{style:{textAlign:"center",color:"steelblue",fontSize:"1.5em",fontWeight:"bold",padding:"14px"}},e.title)};var H=function(){for(var e=o.a.useState("center"),t=Object(d.a)(e,2),a=t[0],n=t[1],r=o.a.useState("flex-start"),l=Object(d.a)(r,2),c=l[0],i=l[1],s=o.a.useState("flex-start"),u=Object(d.a)(s,2),m=u[0],p=u[1],f=o.a.useState("row"),v=Object(d.a)(f,2),x=v[0],E=v[1],b=o.a.useState("wrap"),g=Object(d.a)(b,2),h=g[0],y=g[1],k=[],_=0;_<16;_++)k.push(o.a.createElement(A,{key:_,title:_.toString()}));var C=function(e,t){switch(e){case"align-items":n(t);break;case"align-content":i(t);break;case"justify-content":p(t);break;case"flex-direction":E(t);break;case"flex-wrap":y(t);break;default:console.log("onMenuSelect: default case hit.")}},N={overflow:"auto",border:"6px solid black",padding:"10px",display:"flex",flexWrap:h,height:"40vh",width:"60vw",maxHeight:"400px",maxWidth:"600px",backgroundColor:"#eee",alignItems:a,alignContent:c,justifyContent:m,flexDirection:x};return o.a.createElement("div",null,o.a.createElement(G,{title:"Flexbox Layout"}),o.a.createElement("div",{className:O.a.layoutBox},o.a.createElement("div",{style:N},k)),o.a.createElement("div",{className:O.a.centerColumn},o.a.createElement("div",null,o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{title:"flex-direction",options:["row","column"],onMenuSelect:C}),o.a.createElement("div",{className:O.a.controlMenuValue},x)),o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{title:"align-items",options:["stretch","center","flex-start","flex-end"],onMenuSelect:C}),o.a.createElement("div",{className:O.a.controlMenuValue},a)),o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{title:"justify-content",options:["stretch","center","flex-start","flex-end","space-between","space-around","space-evenly"],onMenuSelect:C}),o.a.createElement("div",{className:O.a.controlMenuValue},m)),o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{title:"align-content",options:["stretch","center","flex-start","flex-end","space-between","space-around"],onMenuSelect:C}),o.a.createElement("div",{className:O.a.controlMenuValue},c)),o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{title:"flex-wrap",options:["wrap","nowrap"],onMenuSelect:C}),o.a.createElement("div",{className:O.a.controlMenuValue},h)))))},L=a(50),U=a.n(L);var X=function(e){var t,a;switch(e.className){case"box0":t="1/3",a="1/3";break;case"box1":t=" 3",a="1/3";break;case"box2":t="2/4",a="3";break;case"box3":t="1 ",a="2/4";break;default:console.log("className invalid")}for(var n=o.a.useState(a),r=Object(d.a)(n,2),l=r[0],c=r[1],i=o.a.useState(t),s=Object(d.a)(i,2),u=s[0],m=s[1],p=[],f=0;f<16;f++)p.push(o.a.createElement(A,{key:f,title:f.toString()}));var v=["1","2","3","4","1/3","1/4","1/5","2/4","3/5"],x={gridColumn:u,gridRow:l};return o.a.createElement("div",{className:U.a.gridCard,style:x},o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{dark:!0,title:"Row",options:v,onMenuSelect:function(e,t){c(t)}}),o.a.createElement("div",{className:O.a.controlMenuValue},l)),o.a.createElement("div",{className:O.a.controlMenuItem},o.a.createElement(W,{dark:!0,title:"Column",options:v,onMenuSelect:function(e,t){m(t)}}),o.a.createElement("div",{className:O.a.controlMenuValue},u)))};var F=function(){for(var e=[],t=0;t<4;t++)e.push(o.a.createElement(X,{key:t,className:"box".concat(t)}));return o.a.createElement("div",null,o.a.createElement(G,{title:"Grid Layout"}),o.a.createElement("div",{className:O.a.layoutBox},o.a.createElement("div",{className:U.a.gridContainer},e)))},R=a(39),q=a.n(R),J=a(130),K=a(138),Q=a(136),Y=a(131),Z=o.a.createContext({todos:[],addTodo:function(e){},loadTodos:function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),deleteTodo:function(e){},toggleComplete:function(e){}});var $=function(e){var t=o.a.useContext(Z),a=t.deleteTodo,n=t.toggleComplete,r=e.todo,l={textDecoration:r.completed?"line-through":"none"};return o.a.createElement("div",{className:q.a.todoItemBox},o.a.createElement(J.a,{row:!0},o.a.createElement(K.a,{checked:r.completed,control:o.a.createElement(Q.a,{checked:r.isCompleted,onChange:function(){n(r.id)}}),label:o.a.createElement("div",{style:l},r.title)})),o.a.createElement("div",{className:q.a.spacer}),o.a.createElement(g.a,{size:"small",style:{color:"rgba(255,0,0,.5)"},onClick:function(){a(r.id)}},o.a.createElement(Y.a,null)))},ee=a(132),te=a(4),ae=a(134),ne=a(133),oe=Object(ee.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)}}})),re=Object(te.a)({root:{"& input:valid + fieldset":{borderColor:"black",borderWidth:2},"& input:invalid + fieldset":{borderColor:"red",borderWidth:2},"& input:valid:focus + fieldset":{borderLeftWidth:6,padding:"4px !important"}}})(ae.a),le={display:"flex",justifyContent:"center",paddingBottom:"10px"};var ce=function(){var e=o.a.useState(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=o.a.useContext(Z).addTodo,l=oe(),c=function(e){e.preventDefault(),a.length>0&&(r(a),n(""))};return o.a.createElement("div",{style:le},o.a.createElement("form",{className:l.root,noValidate:!0,onSubmit:c},o.a.createElement(re,{className:l.margin,autoFocus:!0,label:"New Todo",variant:"outlined",onChange:function(e){n(e.target.value)},value:a})),o.a.createElement(g.a,{onClick:c,target:"_blank",color:"inherit"},o.a.createElement(ne.a,null)))};var ie=function(){var e=o.a.useContext(Z),t=e.todos,a=e.loadTodos;o.a.useEffect((function(){a()}),[]);var n=t.map((function(e){return o.a.createElement($,{todo:e,key:e.id})}));return o.a.createElement("div",null,o.a.createElement(G,{title:"Todo List"}),o.a.createElement("div",{className:O.a.layoutBox},o.a.createElement("div",{className:q.a.todoBox},o.a.createElement(ce,null),o.a.createElement("div",{className:q.a.centerColumn},n))))};var se={backgroundColor:"#282c34",minHeight:"100vh"},ue=function(){var e=o.a.useState([]),t=Object(d.a)(e,2),a=t[0],n=t[1],r=function(e){p("todos",e),n(e)},l={todos:a,addTodo:function(e){var t={id:Object(m.a)(),title:e,userId:1,completed:!1};r([].concat(Object(u.a)(a),[t]))},toggleComplete:function(e){var t=a.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));r(t)},deleteTodo:function(e){var t=a.filter((function(t){return t.id!==e}));r(t)},loadTodos:function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("todos");case 2:void 0!==(t=e.sent)&&null!==t&&r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},c=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getItem(t);case 3:a=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{f.a.setItem(t,a)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return o.a.createElement(Z.Provider,{value:l},o.a.createElement("div",{style:se},o.a.createElement(v.a,null,o.a.createElement(M,null),o.a.createElement(x.a,{exact:!0,path:"/",component:H}),o.a.createElement(x.a,{path:"/grid",component:F}),o.a.createElement(x.a,{path:"/todo",component:ie}))))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ue,null)),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.3123f4e4.chunk.js.map