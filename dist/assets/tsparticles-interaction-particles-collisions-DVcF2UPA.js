import{c as v,b,d as r,D as y,P as f,l as R}from"./tsparticles-engine-B56Pkamw.js";function u(e,s,n,c,i,t){const l=v(e.options.collisions.absorb.speed*i.factor/10,0,c);e.size.value+=l/2,n.size.value-=l,c<=t&&(n.size.value=0,n.destroy())}const p=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=y(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function g(e,s){b(r(e),r(s)),p(e),p(s)}function x(e,s,n,c){switch(e.options.collisions.mode){case"absorb":(function(i,t,l,o){const a=i.getRadius(),d=t.getRadius();a===void 0&&d!==void 0?i.destroy():a!==void 0&&d===void 0?t.destroy():a!==void 0&&d!==void 0&&(a>=d?u(i,0,t,d,l,o):u(t,0,i,a,l,o))})(e,s,n,c);break;case"bounce":g(e,s);break;case"destroy":(function(i,t){i.unbreakable||t.unbreakable||g(i,t),i.getRadius()===void 0&&t.getRadius()!==void 0?i.destroy():i.getRadius()!==void 0&&t.getRadius()===void 0?t.destroy():i.getRadius()!==void 0&&t.getRadius()!==void 0&&(i.getRadius()>=t.getRadius()?t:i).destroy()})(e,s)}}class h extends f{constructor(s){super(s)}clear(){}init(){}async interact(s,n){if(s.destroyed||s.spawning)return;const c=this.container,i=s.getPosition(),t=s.getRadius(),l=c.particles.quadTree.queryCircle(i,2*t);for(const o of l){if(s===o||!o.options.collisions.enable||s.options.collisions.mode!==o.options.collisions.mode||o.destroyed||o.spawning)continue;const a=o.getPosition(),d=o.getRadius();Math.abs(Math.round(i.z)-Math.round(a.z))>t+d||R(i,a)>t+d||x(s,o,n,c.retina.pixelRatio)}}isEnabled(s){return s.options.collisions.enable}reset(){}}async function m(e,s=!0){await e.addInteractor("particlesCollisions",n=>new h(n),s)}export{m as l};
