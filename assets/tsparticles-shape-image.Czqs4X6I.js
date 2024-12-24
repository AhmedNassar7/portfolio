import{M as e,N as t,x as a}from"./tsparticles-engine.CajW4cSt.js";const o=[0,4,2,1],i=[8,8,4,2];class r{constructor(e){this.pos=0,this.data=new Uint8ClampedArray(e)}getString(e){const t=this.data.slice(this.pos,this.pos+e);return this.pos+=t.length,t.reduce(((e,t)=>e+String.fromCharCode(t)),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let e="",t=0;do{t=this.data[this.pos++];for(let a=t;--a>=0;e+=String.fromCharCode(this.data[this.pos++]));}while(0!==t);return e}readSubBlocksBin(){let e=0,t=0;for(let o=0;0!==(e=this.data[this.pos+o]);o+=e+1)t+=e;const a=new Uint8Array(t);for(let o=0;0!==(e=this.data[this.pos++]);)for(let t=e;--t>=0;a[o++]=this.data[this.pos++]);return a}skipSubBlocks(){for(;0!==this.data[this.pos];this.pos+=this.data[this.pos]+1);this.pos++}}function n(e,t){const a=[];for(let o=0;o<t;o++)a.push({r:e.data[e.pos],g:e.data[e.pos+1],b:e.data[e.pos+2]}),e.pos+=3;return a}async function s(e,t,a,r,s,l){switch(e.nextByte()){case 59:return!0;case 44:await async function(e,t,a,r,s){const l=t.frames[r(!0)];l.left=e.nextTwoBytes(),l.top=e.nextTwoBytes(),l.width=e.nextTwoBytes(),l.height=e.nextTwoBytes();const c=e.nextByte(),g=!(128&~c),h=!(64&~c);l.sortFlag=!(32&~c),l.reserved=(24&c)>>>3;const d=1<<1+(7&c);g&&(l.localColorTable=n(e,d));const f=e=>{const{r:o,g:i,b:r}=(g?l.localColorTable:t.globalColorTable)[e];return{r:o,g:i,b:r,a:e===s(null)?a?~~((o+i+r)/3):0:255}},p=(()=>{try{return new ImageData(l.width,l.height,{colorSpace:"srgb"})}catch(e){if(e instanceof DOMException&&"IndexSizeError"===e.name)return null;throw e}})();if(null==p)throw new EvalError("GIF frame size is to large");const m=e.nextByte(),u=e.readSubBlocksBin(),w=1<<m,y=(e,t)=>{const a=e>>>3,o=7&e;return(u[a]+(u[a+1]<<8)+(u[a+2]<<16)&(1<<t)-1<<o)>>>o};if(h){for(let e=0,t=m+1,a=0,r=[[0]],n=0;n<4;n++)if(o[n]<l.height)for(let s=0,c=0;;){const g=e;if(e=y(a,t),a+=t+1,e===w){t=m+1,r.length=w+2;for(let e=0;e<r.length;e++)r[e]=e<w?[e]:[]}else{e>=r.length?r.push(r[g].concat(r[g][0])):g!==w&&r.push(r[g].concat(r[e][0]));for(let t=0;t<r[e].length;t++){const{r:a,g:g,b:h,a:d}=f(r[e][t]);p.data.set([a,g,h,d],o[n]*l.width+i[n]*c+s%(4*l.width)),s+=4}r.length===1<<t&&t<12&&t++}if(s===4*l.width*(c+1)&&(c++,o[n]+i[n]*c>=l.height))break}l.image=p,l.bitmap=await createImageBitmap(p)}else{for(let e=0,t=m+1,a=0,o=[[0]],i=-4;;){const r=e;if(e=y(a,t),a+=t,e===w){t=m+1,o.length=w+2;for(let e=0;e<o.length;e++)o[e]=e<w?[e]:[]}else{if(e===w+1)break;e>=o.length?o.push(o[r].concat(o[r][0])):r!==w&&o.push(o[r].concat(o[e][0]));for(let t=0;t<o[e].length;t++){const{r:a,g:r,b:n,a:s}=f(o[e][t]);p.data.set([a,r,n,s],i+=4)}o.length>=1<<t&&t<12&&t++}}l.image=p,l.bitmap=await createImageBitmap(p)}}(e,t,a,r,s);break;case 33:await async function(e,t,a,o){switch(e.nextByte()){case 249:{const i=t.frames[a(!1)];e.pos++;const r=e.nextByte();i.GCreserved=(224&r)>>>5,i.disposalMethod=(28&r)>>>2,i.userInputDelayFlag=!(2&~r);const n=!(1&~r);i.delayTime=10*e.nextTwoBytes();const s=e.nextByte();n&&o(s),e.pos++;break}case 255:{e.pos++;const a={identifier:e.getString(8),authenticationCode:e.getString(3),data:e.readSubBlocksBin()};t.applicationExtensions.push(a);break}case 254:t.comments.push([a(!1),e.readSubBlocks()]);break;case 1:if(0===t.globalColorTable.length)throw new EvalError("plain text extension without global color table");e.pos++,t.frames[a(!1)].plainTextData={left:e.nextTwoBytes(),top:e.nextTwoBytes(),width:e.nextTwoBytes(),height:e.nextTwoBytes(),charSize:{width:e.nextTwoBytes(),height:e.nextTwoBytes()},foregroundColor:e.nextByte(),backgroundColor:e.nextByte(),text:e.readSubBlocks()};break;default:e.skipSubBlocks()}}(e,t,r,s);break;default:throw new EvalError("undefined block found")}return!1}const l=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;async function c(a){return new Promise((o=>{a.loading=!0;const i=new Image;a.element=i,i.addEventListener("load",(()=>{a.loading=!1,o()})),i.addEventListener("error",(()=>{a.element=void 0,a.error=!0,a.loading=!1,e().error(`${t} loading image: ${a.source}`),o()})),i.src=a.source}))}async function g(e){if("gif"===e.type){e.loading=!0;try{e.gifData=await async function(e,t,a){a||(a=!1);const o=await fetch(e);if(!o.ok&&404===o.status)throw new EvalError("file not found");const i=await o.arrayBuffer(),l={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},c=new r(new Uint8ClampedArray(i));if("GIF89a"!==c.getString(6))throw new Error("not a supported GIF file");l.width=c.nextTwoBytes(),l.height=c.nextTwoBytes();const g=c.nextByte(),h=!(128&~g);l.colorRes=(112&g)>>>4,l.sortFlag=!(8&~g);const d=1<<1+(7&g),f=c.nextByte();l.pixelAspectRatio=c.nextByte(),0!==l.pixelAspectRatio&&(l.pixelAspectRatio=(l.pixelAspectRatio+15)/64),h&&(l.globalColorTable=n(c,d));const p=(()=>{try{return new ImageData(l.width,l.height,{colorSpace:"srgb"})}catch(e){if(e instanceof DOMException&&"IndexSizeError"===e.name)return null;throw e}})();if(null==p)throw new Error("GIF frame size is to large");const{r:m,g:u,b:w}=l.globalColorTable[f];p.data.set(h?[m,u,w,255]:[0,0,0,0]);for(let r=4;r<p.data.length;r*=2)p.data.copyWithin(r,0,r);l.backgroundImage=p;let y=-1,b=!0,x=-1;const C=e=>(e&&(b=!0),y),I=e=>(null!=e&&(x=e),x);try{do{b&&(l.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),y++,x=-1,b=!1)}while(!(await s(c,l,a,C,I)));l.frames.length--;for(const e of l.frames){if(e.userInputDelayFlag&&0===e.delayTime){l.totalTime=1/0;break}l.totalTime+=e.delayTime}return l}catch(B){if(B instanceof EvalError)throw new Error(`error while parsing frame ${y} "${B.message}"`);throw B}}(e.source),e.gifLoopCount=function(e){for(const t of e.applicationExtensions)if(t.identifier+t.authenticationCode==="NETSCAPE2.0")return t.data[1]+(t.data[2]<<8);return NaN}(e.gifData)??0,0===e.gifLoopCount&&(e.gifLoopCount=1/0)}catch{e.error=!0}e.loading=!1}else await c(e)}async function h(a){if("svg"!==a.type)return void(await c(a));a.loading=!0;const o=await fetch(a.source);o.ok?a.svgData=await o.text():(e().error(`${t} Image not found`),a.error=!0),a.loading=!1}function d(e,t,o,i){const r=function(e,t,o){const{svgData:i}=e;if(!i)return"";const r=a(t,o);if(i.includes("fill"))return i.replace(l,(()=>r));const n=i.indexOf(">");return`${i.substring(0,n)} fill="${r}"${i.substring(n)}`}(e,o,i.opacity?.value??1),n={color:o,gif:t.gif,data:{...e,svgData:r},loaded:!1,ratio:t.width/t.height,replaceColor:t.replaceColor??t.replace_color,source:t.src};return new Promise((t=>{const a=new Blob([r],{type:"image/svg+xml"}),o=URL||window.URL||window.webkitURL||window,i=o.createObjectURL(a),s=new Image;s.addEventListener("load",(()=>{n.loaded=!0,n.element=s,t(n),o.revokeObjectURL(i)})),s.addEventListener("error",(async()=>{o.revokeObjectURL(i);const a={...e,error:!1,loading:!0};await c(a),n.loaded=!0,n.element=a.element,t(n)})),s.src=i}))}class f{constructor(e){this.loadImageShape=async e=>{if(!this._engine.loadImage)throw new Error(`${t} image shape not initialized`);await this._engine.loadImage({gif:e.gif,name:e.name,replaceColor:e.replaceColor??e.replace_color??!1,src:e.src})},this._engine=e}addImage(e){this._engine.images||(this._engine.images=[]),this._engine.images.push(e)}draw(e,t,a,o,i){const r=t.image,n=r?.element;if(r){if(e.globalAlpha=o,r.gif&&r.gifData){const o=new OffscreenCanvas(r.gifData.width,r.gifData.height),n=o.getContext("2d");if(!n)throw new Error("could not create offscreen canvas context");n.imageSmoothingQuality="low",n.imageSmoothingEnabled=!1,n.clearRect(0,0,o.width,o.height),void 0===t.gifLoopCount&&(t.gifLoopCount=r.gifLoopCount??0);let s=t.gifFrame??0;const l={x:.5*-r.gifData.width,y:.5*-r.gifData.height},c=r.gifData.frames[s];if(void 0===t.gifTime&&(t.gifTime=0),!c.bitmap)return;switch(e.scale(a/r.gifData.width,a/r.gifData.height),c.disposalMethod){case 4:case 5:case 6:case 7:case 0:n.drawImage(c.bitmap,c.left,c.top),e.drawImage(o,l.x,l.y),n.clearRect(0,0,o.width,o.height);break;case 1:n.drawImage(c.bitmap,c.left,c.top),e.drawImage(o,l.x,l.y);break;case 2:n.drawImage(c.bitmap,c.left,c.top),e.drawImage(o,l.x,l.y),n.clearRect(0,0,o.width,o.height),0===r.gifData.globalColorTable.length?n.putImageData(r.gifData.frames[0].image,l.x+c.left,l.y+c.top):n.putImageData(r.gifData.backgroundImage,l.x,l.y);break;case 3:{const t=n.getImageData(0,0,o.width,o.height);n.drawImage(c.bitmap,c.left,c.top),e.drawImage(o,l.x,l.y),n.clearRect(0,0,o.width,o.height),n.putImageData(t,0,0)}}if(t.gifTime+=i.value,t.gifTime>c.delayTime){if(t.gifTime-=c.delayTime,++s>=r.gifData.frames.length){if(--t.gifLoopCount<=0)return;s=0,n.clearRect(0,0,o.width,o.height)}t.gifFrame=s}e.scale(r.gifData.width/a,r.gifData.height/a)}else if(n){const t=r.ratio,o={x:-a,y:-a};e.drawImage(n,o.x,o.y,2*a,2*a/t)}e.globalAlpha=1}}getSidesCount(){return 12}async init(e){const t=e.actualOptions;if(t.preload&&this._engine.loadImage)for(const a of t.preload)await this._engine.loadImage(a)}loadShape(e){if("image"!==e.shape&&"images"!==e.shape)return;this._engine.images||(this._engine.images=[]);const t=e.shapeData;this._engine.images.find((e=>e.name===t.name||e.source===t.src))||this.loadImageShape(t).then((()=>{this.loadShape(e)}))}particleInit(e,t){if("image"!==t.shape&&"images"!==t.shape)return;this._engine.images||(this._engine.images=[]);const a=this._engine.images,o=t.shapeData,i=t.getFillColor(),r=a.find((e=>e.name===o.name||e.source===o.src));if(!r)return;const n=o.replaceColor??o.replace_color??r.replaceColor;r.loading?setTimeout((()=>{this.particleInit(e,t)})):(async()=>{let e;e=r.svgData&&i?await d(r,o,i,t):{color:i,data:r,element:r.element,gif:r.gif,gifData:r.gifData,gifLoopCount:r.gifLoopCount,loaded:!0,ratio:o.width&&o.height?o.width/o.height:r.ratio??1,replaceColor:n,source:o.src},e.ratio||(e.ratio=1);const a={image:e,fill:o.fill??t.fill,close:o.close??t.close};t.image=a.image,t.fill=a.fill,t.close=a.close})()}}class p{constructor(){this.src="",this.gif=!1}load(e){e&&(void 0!==e.gif&&(this.gif=e.gif),void 0!==e.height&&(this.height=e.height),void 0!==e.name&&(this.name=e.name),void 0!==e.replaceColor&&(this.replaceColor=e.replaceColor),void 0!==e.src&&(this.src=e.src),void 0!==e.width&&(this.width=e.width))}}class m{constructor(e){this.id="imagePreloader",this._engine=e}getPlugin(){return{}}loadOptions(e,t){if(!t||!t.preload)return;e.preload||(e.preload=[]);const a=e.preload;for(const o of t.preload){const e=a.find((e=>e.name===o.name||e.src===o.src));if(e)e.load(o);else{const e=new p;e.load(o),a.push(e)}}}needsPlugin(){return!0}}async function u(e,a=!0){!function(e){e.loadImage||(e.loadImage=async a=>{if(!a.name&&!a.src)throw new Error(`${t} no image source provided`);if(e.images||(e.images=[]),!e.images.find((e=>e.name===a.name||e.source===a.src)))try{const t={gif:a.gif??!1,name:a.name??a.src,source:a.src,type:a.src.substring(a.src.length-3),error:!1,loading:!0,replaceColor:a.replaceColor,ratio:a.width&&a.height?a.width/a.height:void 0};e.images.push(t);const o=a.gif?g:a.replaceColor?h:c;await o(t)}catch{throw new Error(`${t} ${a.name??a.src} not found`)}})}(e);const o=new m(e);await e.addPlugin(o,a),await e.addShape(["image","images"],new f(e),a)}export{u as l};