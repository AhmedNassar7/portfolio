var bn="-ms-",kn="-moz-",hn="-webkit-",j="comm",q="rule",x="decl",S="@keyframes",nn=Math.abs,Z=String.fromCharCode,rn=Object.assign;function vn(n,r){return 45^d(n,0)?(((r<<2^d(n,0))<<2^d(n,1))<<2^d(n,2))<<2^d(n,3):0}function z(n){return n.trim()}function dn(n,r){return(n=r.exec(n))?n[0]:n}function L(n,r,a){return n.replace(r,a)}function en(n,r){return n.indexOf(r)}function d(n,r){return 0|n.charCodeAt(r)}function G(n,r,a){return n.slice(r,a)}function y(n){return n.length}function O(n){return n.length}function J(n,r){return r.push(n),n}function mn(n,r){return n.map(r).join("")}var Q=1,B=1,C=0,l=0,t=0,E="";function T(n,r,a,c,u,h,m){return{value:n,root:r,parent:a,type:c,props:u,children:h,line:Q,column:B,length:m,return:""}}function pn(n,r){return rn(T("",null,null,"",null,null,0),n,{length:-n.length},r)}function an(){return t=l>0?d(E,--l):0,B--,t===10&&(B=1,Q--),t}function k(){return t=l<C?d(E,l++):0,B++,t===10&&(B=1,Q++),t}function K(){return d(E,l)}function N(){return l}function U(n,r){return G(E,n,r)}function X(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cn(n){return Q=B=1,C=y(E=n),l=0,[]}function tn(n){return E="",n}function V(n){return z(U(l-1,Y(n===91?n+2:n===40?n+1:n)))}function un(n){for(;(t=K())&&t<33;)k();return X(n)>2||X(t)>3?"":" "}function sn(n,r){for(;--r&&k()&&!(t<48||t>102||t>57&&t<65||t>70&&t<97););return U(n,N()+(r<6&&K()==32&&k()==32))}function Y(n){for(;k();)switch(t){case n:return l;case 34:case 39:n!==34&&n!==39&&Y(t);break;case 40:n===41&&Y(n);break;case 92:k()}return l}function fn(n,r){for(;k()&&n+t!==57&&(n+t!==84||K()!==47););return"/*"+U(r,l-1)+"*"+Z(n===47?n:k())}function on(n){for(;!X(K());)k();return U(n,l)}function gn(n){return tn(P("",null,null,null,[""],n=cn(n),0,[0],n))}function P(n,r,a,c,u,h,m,f,F){for(var R=0,g=0,s=m,A=0,W=0,p=0,b=1,H=1,o=1,i=0,w="",I=u,D=h,v=c,e=w;H;)switch(p=i,i=k()){case 40:if(p!=108&&d(e,s-1)==58){en(e+=L(V(i),"&","&\f"),"&\f")!=-1&&(o=-1);break}case 34:case 39:case 91:e+=V(i);break;case 9:case 10:case 13:case 32:e+=un(p);break;case 92:e+=sn(N()-1,7);continue;case 47:switch(K()){case 42:case 47:J(ln(fn(k(),N()),r,a),F);break;default:e+="/"}break;case 123*b:f[R++]=y(e)*o;case 125*b:case 59:case 0:switch(i){case 0:case 125:H=0;case 59+g:o==-1&&(e=L(e,/\f/g,"")),W>0&&y(e)-s&&J(W>32?$(e+";",c,a,s-1):$(L(e," ","")+";",c,a,s-2),F);break;case 59:e+=";";default:if(J(v=_(e,r,a,R,g,u,f,w,I=[],D=[],s),h),i===123)if(g===0)P(e,r,v,v,I,h,s,f,D);else switch(A===99&&d(e,3)===110?100:A){case 100:case 108:case 109:case 115:P(n,v,v,c&&J(_(n,v,v,0,0,u,f,w,u,I=[],s),D),u,D,s,f,c?I:D);break;default:P(e,v,v,v,[""],D,0,f,D)}}R=g=W=0,b=o=1,w=e="",s=m;break;case 58:s=1+y(e),W=p;default:if(b<1){if(i==123)--b;else if(i==125&&b++==0&&an()==125)continue}switch(e+=Z(i),i*b){case 38:o=g>0?1:(e+="\f",-1);break;case 44:f[R++]=(y(e)-1)*o,o=1;break;case 64:K()===45&&(e+=V(k())),A=K(),g=s=y(w=e+=on(N())),i++;break;case 45:p===45&&y(e)==2&&(b=0)}}return h}function _(n,r,a,c,u,h,m,f,F,R,g){for(var s=u-1,A=u===0?h:[""],W=O(A),p=0,b=0,H=0;p<c;++p)for(var o=0,i=G(n,s+1,s=nn(b=m[p])),w=n;o<W;++o)(w=z(b>0?A[o]+" "+i:L(i,/&\f/g,A[o])))&&(F[H++]=w);return T(n,r,a,u===0?q:f,F,R,g)}function ln(n,r,a){return T(n,r,a,j,Z(t),G(n,2,-2),0)}function $(n,r,a,c){return T(n,r,a,x,G(n,0,c),G(n,c+1,-1),c)}function M(n,r){for(var a="",c=O(n),u=0;u<c;u++)a+=r(n[u],u,n,r)||"";return a}function wn(n,r,a,c){switch(n.type){case"@layer":if(n.children.length)break;case"@import":case x:return n.return=n.return||n.value;case j:return"";case S:return n.return=n.value+"{"+M(n.children,c)+"}";case q:n.value=n.props.join(",")}return y(a=M(n.children,c))?n.return=n.value+"{"+a+"}":""}function yn(n){var r=O(n);return function(a,c,u,h){for(var m="",f=0;f<r;f++)m+=n[f](a,c,u,h)||"";return m}}function An(n){return function(r){r.root||(r=r.return)&&n(r)}}export{x as D,S as K,bn as M,q as R,hn as W,wn as a,cn as b,gn as c,tn as d,mn as e,pn as f,L as g,Z as h,V as i,vn as j,d as k,y as l,yn as m,k as n,en as o,K as p,kn as q,An as r,M as s,X as t,dn as u,U as v,l as w};