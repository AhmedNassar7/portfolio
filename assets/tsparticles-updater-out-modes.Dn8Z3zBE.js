import{X as z,e as w,g as b,Y as x,V as d,I as m,S as g}from"./tsparticles-engine.DLgpyJd2.js";function M(i){if(i.outMode!=="bounce"&&i.outMode!=="bounce-horizontal"&&i.outMode!=="bounceHorizontal"&&i.outMode!=="split"||i.direction!=="left"&&i.direction!=="right")return;i.bounds.right<0&&i.direction==="left"?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&i.direction==="right"&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);const o=i.particle.velocity.x;let s=!1;if(i.direction==="right"&&i.bounds.right>=i.canvasSize.width&&o>0||i.direction==="left"&&i.bounds.left<=0&&o<0){const h=z(i.particle.options.bounce.horizontal);i.particle.velocity.x*=-h,s=!0}if(!s)return;const u=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width&&i.direction==="right"?i.particle.position.x=i.canvasSize.width-u:i.bounds.left<=0&&i.direction==="left"&&(i.particle.position.x=u),i.outMode==="split"&&i.particle.destroy()}function l(i){if(i.outMode!=="bounce"&&i.outMode!=="bounce-vertical"&&i.outMode!=="bounceVertical"&&i.outMode!=="split"||i.direction!=="bottom"&&i.direction!=="top")return;i.bounds.bottom<0&&i.direction==="top"?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&i.direction==="bottom"&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);const o=i.particle.velocity.y;let s=!1;if(i.direction==="bottom"&&i.bounds.bottom>=i.canvasSize.height&&o>0||i.direction==="top"&&i.bounds.top<=0&&o<0){const h=z(i.particle.options.bounce.vertical);i.particle.velocity.y*=-h,s=!0}if(!s)return;const u=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height&&i.direction==="bottom"?i.particle.position.y=i.canvasSize.height-u:i.bounds.top<=0&&i.direction==="top"&&(i.particle.position.y=u),i.outMode==="split"&&i.particle.destroy()}class p{constructor(o){this.container=o,this.modes=["bounce","bounce-vertical","bounce-horizontal","bounceVertical","bounceHorizontal","split"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;let e=!1;for(const[,c]of f.plugins)if(c.particleBounce!==void 0&&(e=c.particleBounce(o,u,s)),e)break;if(e)return;const t=o.getPosition(),n=o.offset,r=o.getRadius(),v=w(t,r),y=f.canvas.size;M({particle:o,outMode:h,direction:s,bounds:v,canvasSize:y,offset:n,size:r}),l({particle:o,outMode:h,direction:s,bounds:v,canvasSize:y,offset:n,size:r})}}class C{constructor(o){this.container=o,this.modes=["destroy"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;switch(o.outType){case"normal":case"outside":if(x(o.position,f.canvas.size,d.origin,o.getRadius(),s))return;break;case"inside":{const{dx:e,dy:t}=b(o.position,o.moveCenter),{x:n,y:r}=o.velocity;if(n<0&&e>o.moveCenter.radius||r<0&&t>o.moveCenter.radius||n>=0&&e<-o.moveCenter.radius||r>=0&&t<-o.moveCenter.radius)return;break}}f.particles.remove(o,void 0,!0)}}class P{constructor(o){this.container=o,this.modes=["none"]}update(o,s,u,h){if(!this.modes.includes(h)||o.options.move.distance.horizontal&&(s==="left"||s==="right")||o.options.move.distance.vertical&&(s==="top"||s==="bottom"))return;const f=o.options.move.gravity,e=this.container,t=e.canvas.size,n=o.getRadius();if(f.enable){const r=o.position;(!f.inverse&&r.y>t.height+n&&s==="bottom"||f.inverse&&r.y<-n&&s==="top")&&e.particles.remove(o)}else{if(o.velocity.y>0&&o.position.y<=t.height+n||o.velocity.y<0&&o.position.y>=-n||o.velocity.x>0&&o.position.x<=t.width+n||o.velocity.x<0&&o.position.x>=-n)return;x(o.position,e.canvas.size,d.origin,n,s)||e.particles.remove(o)}}}class O{constructor(o){this.container=o,this.modes=["out"]}update(o,s,u,h){if(!this.modes.includes(h))return;const f=this.container;switch(o.outType){case"inside":{const{x:e,y:t}=o.velocity,n=d.origin;n.length=o.moveCenter.radius,n.angle=o.velocity.angle+Math.PI,n.addTo(d.create(o.moveCenter));const{dx:r,dy:v}=b(o.position,n);if(e<=0&&r>=0||t<=0&&v>=0||e>=0&&r<=0||t>=0&&v<=0)return;o.position.x=Math.floor(g({min:0,max:f.canvas.size.width})),o.position.y=Math.floor(g({min:0,max:f.canvas.size.height}));const{dx:y,dy:c}=b(o.position,o.moveCenter);o.direction=Math.atan2(-c,-y),o.velocity.angle=o.direction;break}default:{if(x(o.position,f.canvas.size,d.origin,o.getRadius(),s))return;switch(o.outType){case"outside":{o.position.x=Math.floor(g({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.x,o.position.y=Math.floor(g({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.y;const{dx:e,dy:t}=b(o.position,o.moveCenter);o.moveCenter.radius&&(o.direction=Math.atan2(t,e),o.velocity.angle=o.direction);break}case"normal":{const e=o.options.move.warp,t=f.canvas.size,n={bottom:t.height+o.getRadius()+o.offset.y,left:-o.getRadius()-o.offset.x,right:t.width+o.getRadius()+o.offset.x,top:-o.getRadius()-o.offset.y},r=o.getRadius(),v=w(o.position,r);s==="right"&&v.left>t.width+o.offset.x?(o.position.x=n.left,o.initialPosition.x=o.position.x,e||(o.position.y=m()*t.height,o.initialPosition.y=o.position.y)):s==="left"&&v.right<-o.offset.x&&(o.position.x=n.right,o.initialPosition.x=o.position.x,e||(o.position.y=m()*t.height,o.initialPosition.y=o.position.y)),s==="bottom"&&v.top>t.height+o.offset.y?(e||(o.position.x=m()*t.width,o.initialPosition.x=o.position.x),o.position.y=n.top,o.initialPosition.y=o.position.y):s==="top"&&v.bottom<-o.offset.y&&(e||(o.position.x=m()*t.width,o.initialPosition.x=o.position.x),o.position.y=n.bottom,o.initialPosition.y=o.position.y);break}}break}}}}class S{constructor(o){this.container=o,this._updateOutMode=(s,u,h,f)=>{for(const e of this.updaters)e.update(s,f,u,h)},this.updaters=[new p(o),new C(o),new O(o),new P(o)]}init(){}isEnabled(o){return!o.destroyed&&!o.spawning}update(o,s){const u=o.options.move.outModes;this._updateOutMode(o,s,u.bottom??u.default,"bottom"),this._updateOutMode(o,s,u.left??u.default,"left"),this._updateOutMode(o,s,u.right??u.default,"right"),this._updateOutMode(o,s,u.top??u.default,"top")}}async function V(i,o=!0){await i.addParticleUpdater("outModes",s=>new S(s),o)}export{V as l};