import{c as R,b as P,d as r,D as m,P as x,l as h}from"./tsparticles-engine.DLgpyJd2.js";function u(e,i,n,t,s,o){const d=R(e.options.collisions.absorb.speed*s.factor/10,0,t);e.size.value+=d/2,n.size.value-=d,t<=o&&(n.size.value=0,n.destroy())}function M(e,i,n,t){const s=e.getRadius(),o=i.getRadius();s===void 0&&o!==void 0?e.destroy():s!==void 0&&o===void 0?i.destroy():s!==void 0&&o!==void 0&&(s>=o?u(e,s,i,o,n,t):u(i,o,e,s,n,t))}const f=e=>{e.collisionMaxSpeed===void 0&&(e.collisionMaxSpeed=m(e.options.collisions.maxSpeed)),e.velocity.length>e.collisionMaxSpeed&&(e.velocity.length=e.collisionMaxSpeed)};function b(e,i){P(r(e),r(i)),f(e),f(i)}function v(e,i){!e.unbreakable&&!i.unbreakable&&b(e,i),e.getRadius()===void 0&&i.getRadius()!==void 0?e.destroy():e.getRadius()!==void 0&&i.getRadius()===void 0?i.destroy():e.getRadius()!==void 0&&i.getRadius()!==void 0&&(e.getRadius()>=i.getRadius()?i:e).destroy()}function S(e,i,n,t){switch(e.options.collisions.mode){case"absorb":{M(e,i,n,t);break}case"bounce":{b(e,i);break}case"destroy":{v(e,i);break}}}class k extends x{constructor(i){super(i)}clear(){}init(){}async interact(i,n){if(i.destroyed||i.spawning)return;const t=this.container,s=i.getPosition(),o=i.getRadius(),d=t.particles.quadTree.queryCircle(s,o*2);for(const a of d){if(i===a||!a.options.collisions.enable||i.options.collisions.mode!==a.options.collisions.mode||a.destroyed||a.spawning)continue;const c=a.getPosition(),l=a.getRadius();if(Math.abs(Math.round(s.z)-Math.round(c.z))>o+l)continue;const g=h(s,c),y=o+l;g>y||S(i,a,n,t.retina.pixelRatio)}}isEnabled(i){return i.options.collisions.enable}reset(){}}async function z(e,i=!0){await e.addInteractor("particlesCollisions",n=>new k(n),i)}export{z as l};