(this.webpackJsonpbibou=this.webpackJsonpbibou||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(2),c=n.n(a),r=(n(19),n(4)),s=n(1);n(21);var l=function(e){var t=e.onFail,n=e.onSuccess,o=Object(i.useState)(""),a=Object(r.a)(o,2),c=a[0],l=a[1],b=Object(i.useState)(!0),u=Object(r.a)(b,2),d=u[0],p=u[1],j=function(e){console.log({value:c}),p(!1),d&&("cl\xe9a"!==c.toLowerCase().normalize("NFD")?t():n(),setTimeout((function(){return p(!0)}),500)),e.preventDefault()};return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:j,children:[Object(s.jsx)("div",{children:Object(s.jsx)("h2",{children:"Pr\xe9nom: "})}),Object(s.jsx)("input",{maxLength:4,value:c,onChange:function(e){l(e.target.value),e.preventDefault()}}),Object(s.jsx)("div",{className:"button_cont",align:"center",children:Object(s.jsx)("a",{onClick:j,className:"example_b",children:"TEST"})})]})})};var b=function(e){var t=e.hints;return Object(s.jsx)("div",{children:t.map((function(e,t){return Object(s.jsx)("div",{children:e.hint},t)}))})},u=function(e){var t=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(0!==e.step){var n=t.current.getContext("2d");switch(e.step%9){case 1:n.strokeStyle="#444",n.lineWidth=10,n.beginPath(),n.moveTo(175,225),n.lineTo(5,225),n.moveTo(40,225),n.lineTo(25,5),n.lineTo(100,5),n.lineTo(100,25),n.stroke();break;case 2:n.lineWidth=5,n.beginPath(),n.arc(100,50,25,0,2*Math.PI,!0),n.closePath(),n.stroke();break;case 3:n.beginPath(),n.moveTo(100,75),n.lineTo(100,140),n.stroke();break;case 4:n.beginPath(),n.moveTo(100,85),n.lineTo(60,100),n.stroke();break;case 5:n.beginPath(),n.moveTo(100,85),n.lineTo(140,100),n.stroke();break;case 6:n.beginPath(),n.moveTo(100,140),n.lineTo(80,190),n.stroke();break;case 7:n.beginPath(),n.moveTo(82,190),n.lineTo(70,185),n.stroke();break;case 8:n.beginPath(),n.moveTo(100,140),n.lineTo(125,190),n.stroke();break;case 0:n.beginPath(),n.moveTo(122,190),n.lineTo(135,185),n.stroke()}}}),[e.step]),Object(i.useEffect)((function(){if(!0===e.reset){var n=t.current,i=n.getContext("2d");i.fillStyle="white",i.fillRect(0,0,n.width,n.height)}}),[e.reset]),Object(s.jsx)("canvas",{height:250,width:250,ref:t})},d=n(30);var p=function(e){var t=e.popupHelpNo,n=e.popupHelpYes,i=e.showModal;return Object(s.jsx)(d.a,{open:i,onClose:function(){},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:Object(s.jsxs)("div",{style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute",width:400,padding:"40px 10px",outline:0,textAlign:"center",backgroundColor:"white",border:"2px solid #000"},children:[Object(s.jsx)("span",{children:"Veux tu un indice?"}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"row",textAlign:"center",marginTop:"10px"},children:[Object(s.jsx)("div",{style:{flex:1},children:Object(s.jsx)("div",{className:"button_cont",align:"center",children:Object(s.jsx)("a",{onClick:t,className:"example_b",children:"NO"})})}),Object(s.jsx)("div",{style:{flex:1},children:Object(s.jsx)("div",{className:"button_cont",align:"center",children:Object(s.jsx)("a",{onClick:n,className:"example_b",children:"Oui"})})})]})]})})},j=n(13);n(24);var h=function(){var e=Object(i.useState)(parseInt(localStorage.getItem("failCount")||0)),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)(!1),c=Object(r.a)(a,2),d=c[0],h=c[1],x=Object(i.useState)(!1),f=Object(r.a)(x,2),O=f[0],m=f[1],v=Object(i.useRef)(null);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{style:{flex:1,minHeight:"100px",fontSize:"22px",padding:"10px 0px 10px 0"},children:Object(s.jsx)(b,{hints:[{hint:"407 filles portant ce pr\xe9nom sont n\xe9es en 2019",breakpoint:9},{hint:"La 3\xe8 lettre est un E",breakpoint:18},{hint:"Ce pr\xe9nom est c\xe9l\xe9br\xe9 le 13 juillet dans la culture chr\xe9tienne",breakpoint:27},{hint:"La 1\xe8 lettre est un C",breakpoint:36},{hint:"La 2\xe8 lettre est un L",breakpoint:45},{hint:"La 4\xe8 lettre est un A",breakpoint:54}].filter((function(e){return e.breakpoint<=n}))})}),Object(s.jsx)("div",{style:{flex:1,padding:"0px 0px 30px 0"},children:Object(s.jsx)(l,{onFail:function(){0!==n&&(n+1)%9===0?m(!0):(o(n+1),localStorage.setItem("failCount",n+1))},onSuccess:function(){var e=v.current,t=j.a.create(e,{resize:!0,useWorker:!0}),n=["#ebdb34","#eb9c34"];!function e(){t({particleCount:2,angle:60,spread:55,origin:{x:0},colors:n}),t({particleCount:2,angle:120,spread:55,origin:{x:1},colors:n}),Date.now()<Date.now()+15e3&&requestAnimationFrame(e)}()}})}),Object(s.jsx)("div",{style:{flex:1,padding:"10px 0px 10px 0"},children:Object(s.jsx)(u,{step:n,reset:d})}),Object(s.jsx)("canvas",{style:{position:"absolute",top:0,left:0,zIndex:-1},height:window.innerHeight,width:window.innerWidth,ref:v}),Object(s.jsx)(p,{popupHelpNo:function(){h(!0),setTimeout((function(){return h(!1)}),50),m(!1),o(n-8),localStorage.setItem("failCount",n-8)},popupHelpYes:function(){h(!0),setTimeout((function(){return h(!1)}),50),m(!1),o(n+1),localStorage.setItem("failCount",n+1)},showModal:O})]})};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.701cea5b.chunk.js.map