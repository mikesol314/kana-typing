(this["webpackJsonpkana-typing"]=this["webpackJsonpkana-typing"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(17)},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},,,,function(e,a,t){"use strict";t.r(a);t(9);var n=t(1),l=(t(10),t(0)),c=t.n(l),o=(t(12),t(6)),r=function(e){return console.log("props: ".concat(JSON.stringify(e))),c.a.createElement("div",{className:"KanaDisplay"},c.a.createElement(o.a,null,c.a.createElement("h1",null,e.content)))},s=(t(13),function(e){return c.a.createElement("div",{className:"TypingBar"},c.a.createElement("input",{type:"text",className:e.class,autoFocus:!0,value:e.value,onChange:e.onChange}),c.a.createElement("br",null),c.a.createElement("div",{className:"alert alert-primary"},"You entered ",e.value.length," amount of characters. ",c.a.createElement("br",null),"You entered ",e.value," characters."))}),u=t(7),i=Object(u.a)({},{"\u3042":["a"],"\u3044":["i"],"\u3046":["u"],"\u3048":["e"],"\u304a":["o"]},{},{"\u304b":["ka"],"\u304d":["ki"],"\u304f":["ku"],"\u3051":["ke"],"\u3053":["ko"]},{},{"\u304c":["ga"],"\u304e":["gi"],"\u3050":["gu"],"\u3052":["ge"],"\u3054":["go"]},{},{"\u304d\u3083":["kya"],"\u304d\u3085":["kyu"],"\u304d\u3087":["kyo"]},{},{"\u304e\u3083":["gya"],"\u304e\u3085":["gyu"],"\u304e\u3087":["gyo"]},{},{"\u3055":["sa"],"\u3057":["shi"],"\u3059":["su"],"\u305b":["se"],"\u305d":["so"]},{},{"\u3056":["za"],"\u3058":["ji"],"\u305a":["zu"],"\u305c":["ze"],"\u305e":["zo"]},{},{"\u3057\u3083":["sha"],"\u3057\u3085":["shu"],"\u3057\u3087":["sho"]},{},{"\u3058\u3083":["ja"],"\u3058\u3085":["ju"],"\u3058\u3087":["jo"]},{},{"\u305f":["ta"],"\u3061":["chi"],"\u3064":["tsu"],"\u3066":["te"],"\u3068":["to"]},{},{"\u3060":["da"],"\u3062":["ji","dji","jyi"],"\u3065":["dzu","zu"],"\u3067":["de"],"\u3069":["do"]},{},{"\u3061\u3083":["cha"],"\u3061\u3085":["chu"],"\u3061\u3087":["cho"]});var g=function(){var e=function(){var e=Object.keys(i).length-1,a=Math.floor(Math.random()*(e-0+1)+0),t=Object.keys(i)[a];return{displayedKana:t,possibleAnswers:i[t]}},a=Object(l.useState)(""),t=Object(n.a)(a,2),o=t[0],u=t[1],g=Object(l.useState)(e()),m=Object(n.a)(g,2),h=m[0],p=m[1],d=Object(l.useState)("form-control"),f=Object(n.a)(d,2),y=f[0],v=f[1];return c.a.createElement("div",{className:"Game"},c.a.createElement(r,{content:h.displayedKana}),c.a.createElement(s,{class:y,value:o,onChange:function(a){u(a.target.value),h.possibleAnswers.includes(a.target.value)?(console.log("OMG THIS WORKED?!!"),u(""),p(e()),v("form-control")):function(e){var a=!1,t=h.possibleAnswers.reduce((function(e,a){return e.length>=a.length?e:a}));return console.log("userInput: ".concat(e)),console.log("userInput length: ".concat(e.length)),console.log("kana: ".concat(t)),console.log("kana length: ".concat(t.length)),(e.includes(" ")||e.length>=t.length)&&(a=!0),a}(a.target.value)&&(console.log("wrong!"),v("wrong form-control "))}}))};var m=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"Kana Typing")),c.a.createElement(g,null))},h=t(5);t.n(h).a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.88eaf1a3.chunk.js.map