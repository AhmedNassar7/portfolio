import{E as t}from"./tsparticles-engine.CajW4cSt.js";class e extends t{constructor(t){super(t),this.handleClickMode=t=>{if("pause"!==t)return;const e=this.container;e.getAnimationStatus()?e.pause():e.play()}}clear(){}init(){}async interact(){}isEnabled(){return!0}reset(){}}async function a(t,a=!0){await t.addInteractor("externalPause",(t=>new e(t)),a)}export{a as l};