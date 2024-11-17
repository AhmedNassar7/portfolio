import{E as y,C as l,b as m,V as h,d as x,R as p,r as B,e as g,m as _,i as v,f as w,h as H}from"./tsparticles-engine-B56Pkamw.js";class M{constructor(){this.distance=200}load(t){t&&t.distance!==void 0&&(this.distance=t.distance)}}class D extends y{constructor(t){super(t),this._processBounce=(e,o,s)=>{const n=this.container.particles.quadTree.query(s,c=>this.isEnabled(c));for(const c of n)s instanceof l?m(x(c),{position:e,radius:o,mass:o**2*Math.PI/2,velocity:h.origin,factor:h.origin}):s instanceof p&&B(c,g(e,o))},this._processMouseBounce=()=>{const e=this.container,o=10*e.retina.pixelRatio,s=e.interactivity.mouse.position,n=e.retina.bounceModeDistance;!n||n<0||!s||this._processBounce(s,n,new l(s.x,s.y,n+o))},this._singleSelectorBounce=(e,o)=>{const s=this.container,n=document.querySelectorAll(e);n.length&&n.forEach(c=>{const i=c,a=s.retina.pixelRatio,f={x:(i.offsetLeft+i.offsetWidth/2)*a,y:(i.offsetTop+i.offsetHeight/2)*a},d=i.offsetWidth/2*a,r=10*a,b=o.type==="circle"?new l(f.x,f.y,d+r):new p(i.offsetLeft*a-r,i.offsetTop*a-r,i.offsetWidth*a+2*r,i.offsetHeight*a+2*r);this._processBounce(f,d,b)})}}clear(){}init(){const t=this.container,e=t.actualOptions.interactivity.modes.bounce;e&&(t.retina.bounceModeDistance=e.distance*t.retina.pixelRatio)}async interact(){const t=this.container,e=t.actualOptions.interactivity.events,o=t.interactivity.status===_,s=e.onHover.enable,n=e.onHover.mode,c=e.onDiv;o&&s&&v("bounce",n)?this._processMouseBounce():w("bounce",c,(i,a)=>this._singleSelectorBounce(i,a))}isEnabled(t){const e=this.container,o=e.actualOptions,s=e.interactivity.mouse,n=((t==null?void 0:t.interactivity)??o.interactivity).events,c=n.onDiv;return s.position&&n.onHover.enable&&v("bounce",n.onHover.mode)||H("bounce",c)}loadModeOptions(t,...e){t.bounce||(t.bounce=new M);for(const o of e)t.bounce.load(o==null?void 0:o.bounce)}reset(){}}async function O(u,t=!0){await u.addInteractor("externalBounce",e=>new D(e),t)}export{O as l};
