import{D as r}from"./tsparticles-engine-B56Pkamw.js";class d{draw(t,s,e){const a=s.sides,i=s.starInset??2;t.moveTo(0,0-e);for(let o=0;o<a;o++)t.rotate(Math.PI/a),t.lineTo(0,0-e*i),t.rotate(Math.PI/a),t.lineTo(0,0-e)}getSidesCount(t){const s=t.shapeData;return Math.round(r((s==null?void 0:s.sides)??(s==null?void 0:s.nb_sides)??5))}particleInit(t,s){const e=s.shapeData,a=r((e==null?void 0:e.inset)??2);s.starInset=a}}async function h(n,t=!0){await n.addShape("star",new d,t)}export{h as l};
