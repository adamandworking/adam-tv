(this["webpackJsonpadam-tv"]=this["webpackJsonpadam-tv"]||[]).push([[0],{41:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(34),l=c.n(a),r=(c(41),c(35)),i=c.n(r),o=(c(73),c(0)),j=function(){return Object(o.jsx)("div",{className:" h-16 bg-gray-900 flex justify-center items-center",children:Object(o.jsx)("div",{className:" text-center text-white text-2xl font-mono italic font-bold",children:"Adam's TV"})})},u=c(36),b=c(11),d=function(e){var t=e.socket,c=Object(n.useState)("Guest"),s=Object(b.a)(c,2),a=s[0],l=s[1],r=Object(n.useState)([]),i=Object(b.a)(r,2),j=i[0],d=i[1],f=Object(n.useState)([]),x=Object(b.a)(f,2),h=x[0],m=x[1],O=Object(n.useState)(""),g=Object(b.a)(O,2),v=g[0],p=g[1];Object(n.useEffect)((function(){t.on("connect",(function(){t.on("Chat:NewMessage",(function(e){var t=e.name,c=e.message;d((function(e){var n=[].concat(Object(u.a)(e),[t+": "+c]);return n.length>14&&n.shift(),n}))})),t.on("Chat:UsersChange",(function(e){m(e)})),t.emit("Chat:NewUserRegister",{id:t.id,userName:t.id})}))}),[]);var N=h.map((function(e){return Object(o.jsx)("li",{children:e},e)}));return Object(o.jsx)("div",{className:"h-full w-4/12 bg-gray-800 text-white p-8",children:Object(o.jsxs)("div",{className:"h-full flex flex-col justify-around",children:[Object(o.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[Object(o.jsx)("div",{className:"border-8 rounded-full py-3 px-6 flex items-center justify-center text-2xl font-mono italic font-bold",children:"Chatroom"}),Object(o.jsxs)("div",{className:"text-xl font-mono pt-4",children:["There ",1==N.length?"is":"are"," ",N.length," ",1==N.length?"person":"people"," in the room"]}),Object(o.jsx)("div",{className:"overscroll-contain rounded-3xl w-11/12 border h-96 m-8 p-4 overflow-x-auto",children:j.map((function(e){return Object(o.jsx)("div",{className:"whitespace-pre-line",children:e})}))})]}),Object(o.jsxs)("form",{onSubmit:function(e){t.emit("Chat:NewMessage",{name:a,message:v}),p(""),e.preventDefault()},className:"flex flex-col justify-center",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("label",{children:["Name:",Object(o.jsx)("br",{}),Object(o.jsx)("input",{className:"bg-gray-800 border",onChange:function(e){l(e.target.value)}})]})}),Object(o.jsxs)("label",{children:["Message:",Object(o.jsx)("textarea",{className:" h-36 w-full bg-gray-800 border",value:v,onChange:function(e){p(e.target.value)}})]}),Object(o.jsx)("button",{className:"border w-14 rounded-xl",type:"submit",value:"Submit",children:"Send"})]})]})})},f=c.p+"static/media/sample-mp4-file.1f058b06.mp4",x=function(){return Object(o.jsx)("div",{className:"h-full flex-grow bg-gray-800",children:Object(o.jsx)("div",{className:"h-full flex justify-center items-center bg-gray-800",children:Object(o.jsx)("video",{className:" w-full ",controls:!0,children:Object(o.jsx)("source",{src:f,type:"video/mp4"})})})})},h=function(e){var t=e.socket;return Object(o.jsxs)("div",{className:" h-full flex",children:[Object(o.jsx)(x,{}),Object(o.jsx)(d,{socket:t})]})},m=i()("http://34.210.176.75:4000");var O=function(){return Object(o.jsxs)("div",{className:"h-screen flex flex-col",children:[Object(o.jsx)(j,{}),Object(o.jsx)(h,{socket:m})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,76)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),g()}},[[75,1,2]]]);
//# sourceMappingURL=main.7ddb1e68.chunk.js.map