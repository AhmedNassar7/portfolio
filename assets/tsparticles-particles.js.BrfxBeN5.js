import{t as e}from"./tsparticles-engine.CajW4cSt.js";class o{static init(n){const t=new o,s=n.selector;if(!s)throw new Error("No selector provided");const i=document.querySelector(s);if(!i)throw new Error("No element found for selector");return e.set(s.replace(".","").replace("!",""),i,{fullScreen:{enable:!1},particles:{color:{value:n.color??"!000000"},links:{color:"random",distance:n.minDistance??120,enable:n.connectParticles??!1},move:{enable:!0,speed:n.speed??.5},number:{value:n.maxParticles??100},size:{value:{min:1,max:n.sizeVariations??3}}},responsive:n.responsive?.map((e=>({maxWidth:e.breakpoint,options:{particles:{color:{value:e.options?.color},links:{distance:e.options?.minDistance,enable:e.options?.connectParticles},number:{value:n.maxParticles},move:{enable:!0,speed:e.options?.speed},size:{value:e.options?.sizeVariations}}}})))}).then((e=>{t._container=e})),t}destroy(){const e=this._container;e&&e.destroy()}pauseAnimation(){const e=this._container;e&&e.pause()}resumeAnimation(){const e=this._container;e&&e.play()}}const n=e=>{const{particlesJS:n,pJSDom:t}=(e=>{const o=(o,n)=>e.load(o,n);return o.load=(o,n,t)=>{e.loadJSON(o,n).then((e=>{e&&t(e)})).catch((()=>{t(void 0)}))},o.setOnClickHandler=o=>{e.setOnClickHandler(o)},{particlesJS:o,pJSDom:e.dom()}})(e);return window.particlesJS=n,window.pJSDom=t,window.Particles=o,{particlesJS:n,pJSDom:t,Particles:o}};export{n as i};