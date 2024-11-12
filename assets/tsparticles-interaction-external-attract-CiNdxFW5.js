import{E as k,C as v,g as x,c as g,a as b,V as A,m as _,i as l}from"./tsparticles-engine-B56Pkamw.js";class C{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(t.distance!==void 0&&(this.distance=t.distance),t.duration!==void 0&&(this.duration=t.duration),t.easing!==void 0&&(this.easing=t.easing),t.factor!==void 0&&(this.factor=t.factor),t.maxSpeed!==void 0&&(this.maxSpeed=t.maxSpeed),t.speed!==void 0&&(this.speed=t.speed))}}class O extends k{constructor(t,i){super(i),this._clickAttract=()=>{const c=this.container;c.attract||(c.attract={particles:[]});const{attract:a}=c;if(a.finish||(a.count||(a.count=0),a.count++,a.count===c.particles.count&&(a.finish=!0)),a.clicking){const e=c.interactivity.mouse.clickPosition,s=c.retina.attractModeDistance;if(!s||s<0||!e)return;this._processAttract(e,s,new v(e.x,e.y,s))}else a.clicking===!1&&(a.particles=[])},this._hoverAttract=()=>{const c=this.container,a=c.interactivity.mouse.position,e=c.retina.attractModeDistance;!e||e<0||!a||this._processAttract(a,e,new v(a.x,a.y,e))},this._processAttract=(c,a,e)=>{const s=this.container,o=s.actualOptions.interactivity.modes.attract;if(!o)return;const h=s.particles.quadTree.query(e,d=>this.isEnabled(d));for(const d of h){const{dx:f,dy:m,distance:r}=x(d.position,c),p=o.speed*o.factor,u=g(b(o.easing)(1-r/a)*p,0,o.maxSpeed),y=A.create(r===0?p:f/r*u,r===0?p:m/r*u);d.position.subFrom(y)}},this._engine=t,i.attract||(i.attract={particles:[]}),this.handleClickMode=c=>{const a=this.container.actualOptions.interactivity.modes.attract;if(a&&c==="attract"){i.attract||(i.attract={particles:[]}),i.attract.clicking=!0,i.attract.count=0;for(const e of i.attract.particles)this.isEnabled(e)&&e.velocity.setTo(e.initialVelocity);i.attract.particles=[],i.attract.finish=!1,setTimeout(()=>{i.destroyed||(i.attract||(i.attract={particles:[]}),i.attract.clicking=!1)},1e3*a.duration)}}}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.attract;i&&(t.retina.attractModeDistance=i.distance*t.retina.pixelRatio)}async interact(){const t=this.container,i=t.actualOptions,c=t.interactivity.status===_,a=i.interactivity.events,e=a.onHover.enable,s=a.onHover.mode,o=a.onClick.enable,h=a.onClick.mode;c&&e&&l("attract",s)?this._hoverAttract():o&&l("attract",h)&&this._clickAttract()}isEnabled(t){const i=this.container,c=i.actualOptions,a=i.interactivity.mouse,e=((t==null?void 0:t.interactivity)??c.interactivity).events;if(!(a.position&&e.onHover.enable||a.clickPosition&&e.onClick.enable))return!1;const s=e.onHover.mode,o=e.onClick.mode;return l("attract",s)||l("attract",o)}loadModeOptions(t,...i){t.attract||(t.attract=new C);for(const c of i)t.attract.load(c==null?void 0:c.attract)}reset(){}}async function M(n,t=!0){await n.addInteractor("externalAttract",i=>new O(n,i),t)}export{M as l};