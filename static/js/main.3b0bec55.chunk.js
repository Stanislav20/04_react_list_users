(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(25)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),l=n.n(r),i=(n(15),n(5)),s=n(1);n(17),n(19);var o=function(e){var t=e.count;return c.a.createElement("div",{class:"success-block"},c.a.createElement("img",{src:"/assets/success.svg",alt:"Success"}),c.a.createElement("h3",null,"\u0423\u0441\u043f\u0435\u0448\u043d\u043e!"),c.a.createElement("p",null,"".concat(t>1?"\u0412\u0441\u0435\u043c ".concat(t," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435."):"\u041e\u0434\u043d\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435.")),c.a.createElement("button",{onClick:function(){return window.location.reload()},className:"send-invite-btn"},"\u041d\u0430\u0437\u0430\u0434"))},u=n(4),m=function(){return c.a.createElement(u.a,{speed:2,width:320,height:50,viewBox:"0 0 320 50",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},c.a.createElement("circle",{cx:"25",cy:"25",r:"25"}),c.a.createElement("rect",{x:"64",y:"0",rx:"6",ry:"6",width:"137",height:"25"}),c.a.createElement("rect",{x:"64",y:"32",rx:"6",ry:"6",width:"183",height:"15"}),c.a.createElement("rect",{x:"290",y:"12",rx:"6",ry:"6",width:"26",height:"26"}))};n(21);var v=function(e){var t=e.obj,n=e.onClickInvite,a=e.isInvited;return c.a.createElement("li",null,c.a.createElement("div",null,c.a.createElement("img",{className:"avatar",src:t.avatar,alt:"User"}),c.a.createElement("div",null,c.a.createElement("h3",null,t.first_name," ",t.last_name),c.a.createElement("p",null,c.a.createElement("svg",{viewBox:"0 0 96 96",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M48,0a48,48,0,0,0,0,96,6,6,0,0,0,0-12A36,36,0,1,1,84,48V66a6,6,0,0,1-12,0V48A24,24,0,1,0,48,72a23.7365,23.7365,0,0,0,12.2549-3.4783A17.9586,17.9586,0,0,0,96,66V48A48.0474,48.0474,0,0,0,48,0Zm0,60A12,12,0,1,1,60,48,12.0081,12.0081,0,0,1,48,60Z"})),t.email))),c.a.createElement("img",{onClick:function(){return n(t.id)},className:"action",src:"../img/".concat(a?"minus.svg":"plus.svg"),alt:"Action"}))};n(23);var f=function(e){var t=e.users,n=e.isLoading,a=e.searchValue,r=e.onChangeSearchValue,l=e.invites,i=e.onClickInvite,s=e.onClickSendInvites;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"search"},c.a.createElement("svg",{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"})),c.a.createElement("input",{onChange:r,value:a,type:"text",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f..."})),n?c.a.createElement("div",{className:"skeleton-list"},c.a.createElement(m,null),c.a.createElement(m,null),c.a.createElement(m,null),c.a.createElement(m,null),c.a.createElement(m,null)):c.a.createElement("ul",{className:"users-list"},t.filter(function(e){if((e.first_name+" "+e.last_name).toLowerCase().includes(a.toLowerCase())||e.email.toLowerCase().includes(a.toLowerCase()))return!0}).map(function(e,t){return c.a.createElement(v,{key:t,obj:e,onClickInvite:i,isInvited:l.includes(e.id)})})),l.length>0&&c.a.createElement("button",{className:"send-invite-btn",onClick:s},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"))};var E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(!0),u=Object(s.a)(l,2),m=u[0],v=u[1],E=Object(a.useState)(""),d=Object(s.a)(E,2),h=d[0],g=d[1],w=Object(a.useState)([]),b=Object(s.a)(w,2),p=b[0],C=b[1],j=Object(a.useState)(!1),k=Object(s.a)(j,2),x=k[0],O=k[1];return Object(a.useEffect)(function(){fetch("https://reqres.in/api/users").then(function(e){return e.json()}).then(function(e){return r(e.data)}).catch(function(e){return console.log(e.message)}).finally(function(){return v(!1)})},[]),c.a.createElement("div",{className:"App"},x?c.a.createElement(o,{count:p.length}):c.a.createElement(f,{users:n,isLoading:m,searchValue:h,onChangeSearchValue:function(e){g(e.target.value),console.log(e.target.value)},invites:p,onClickInvite:function(e){p.includes(e)?C(function(t){return t.filter(function(t){return t!==e})}):C(function(t){return[].concat(Object(i.a)(t),[e])})},onClickSendInvites:function(){O(!0)}}))};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(E,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.3b0bec55.chunk.js.map