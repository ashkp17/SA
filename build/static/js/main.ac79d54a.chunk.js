(this["webpackJsonpconways-game-of-life"]=this["webpackJsonpconways-game-of-life"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(1),c=n(2),u=[[.1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]];var f=function(){var e=function(){for(var e=[],t=0;t<30;t++)e.push(Array.from(Array(30),(function(){return 0})));return e},t=Object(a.useState)((function(){return e()})),n=Object(l.a)(t,2),i=n[0],o=n[1],f=Object(a.useState)(!1),s=Object(l.a)(f,2),m=s[0],b=s[1],h=Object(a.useRef)(m);h.current=m;var v=Object(a.useCallback)((function(){h.current&&(o((function(e){return Object(c.a)(e,(function(t){for(var n=function(n){for(var a=function(a){var r=0;u.forEach((function(t){var i=Object(l.a)(t,2),o=i[0],c=i[1],u=n+o,f=a+c;u>=0&&f>=0&&u<30&&f<30&&(r+=e[u][f])})),r<2||r>3?t[n][a]=0:0===e[n][a]&&3===r&&(t[n][a]=1)},r=0;r<30;r++)a(r)},a=0;a<30;a++)n(a)}))})),setTimeout(v,100))}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){b(!m),m||(h.current=!0,v())}},m?"Stop":"start"," Simulation"),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},r.a.createElement("button",{onClick:function(){o(e())}},"Clear"),r.a.createElement("button",{onClick:function(){o(function(){for(var e=[],t=0;t<30;t++)e.push(Array.from(Array(30),(function(){return Math.random()>.5?1:0})));return e}())}},"Random Stuff")),r.a.createElement("div",{style:{display:"grid",justifyContent:"center",gridTemplateColumns:"repeat(".concat(30,", 20px)")}},i.map((function(e,t){return e.map((function(e,n){return r.a.createElement("div",{className:"table",onClick:function(){var e=Object(c.a)(i,(function(e){e[t][n]=i[t][n]?0:1}));o(e)},key:"".concat(t,"-").concat(n),style:{width:15,height:15,background:i[t][n]?"#000":void 0}})}))}))),r.a.createElement("div",{style:{justifyContent:"space-between",textAlign:"left"}},r.a.createElement("ul",{style:{textAlign:"left",marginLeft:"auto",marginRight:"auto",maxWidth:"800px",backgroundColor:"#000"}},r.a.createElement("h2",null,"Game Of Life Transitions"),r.a.createElement("li",null," ","Any live cell with fewer than two live neighbours dies, as if by underpopulation."),r.a.createElement("li",null," ","Any live cell with two or three live neighbours lives on to the next generation."),r.a.createElement("li",null," ","Any live cell with more than three live neighbours dies, as if by overpopulation."),r.a.createElement("li",null," ","Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction."))))};o.a.render(r.a.createElement(f,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.ac79d54a.chunk.js.map