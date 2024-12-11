import{e as H}from"./earcut-Lltz9D9k.js";import{ds as W,du as Z,e6 as N,hH as g,cV as S,hI as X,hJ as Y,cO as v,hK as $,c7 as M,hL as z,d7 as b,hM as m}from"./index-pOkNMSkH.js";import{e as x}from"./deduplicate-CPn8S1hQ.js";function F(n,o,l){const s=J(E,n,o,l)?Z(E):[0,0,1];return Math.abs(s[2])>Math.cos(N(80))?g.Z:Math.abs(s[1])>Math.abs(s[0])?g.Y:g.X}function J(n,o,l,s){const e=(a=>!Array.isArray(a[0]))(o)?(a,t)=>o[3*a+t]:(a,t)=>o[a][t],r=s?S(s)/X(s):1;return Y(n,(a,t)=>v(a,e(t,0)*r,e(t,1)*r,e(t,2)),l)}const E=W();function B(n){const o=R(n.rings,n.hasZ,L.CCW_IS_HOLE,n.spatialReference),l=new Array;let s=0,e=0;for(const t of o.polygons){const f=t.count,c=t.index,y=$(o.position,3*c,3*f),A=t.holeIndices.map(h=>h-c),d=M(H(y,A,3));l.push({position:y,faces:d}),s+=y.length,e+=d.length}const r=K(l,s,e),a=Array.isArray(r.position)?x(r.position,3,{originalIndices:r.faces}):x(r.position.buffer,6,{originalIndices:r.faces});return r.position=z(new Float64Array(a.buffer)),r.faces=a.indices,r}function K(n,o,l){if(n.length===1)return n[0];const s=b(o),e=new Array(l);let r=0,a=0,t=0;for(const f of n){for(let c=0;c<f.position.length;c++)s[r++]=f.position[c];for(const c of f.faces)e[a++]=c+t;t=r/3}return{position:s,faces:M(e)}}function R(n,o,l,s){const e=n.length,r=new Array(e),a=new Array(e),t=new Array(e);let f=0;for(let u=0;u<e;++u)f+=n[u].length;let c=0,y=0,A=0;const d=b(3*f);let h=0;for(let u=e-1;u>=0;u--){const i=n[u],O=l===L.CCW_IS_HOLE&&V(i,o,s);if(O&&e!==1)r[c++]=i;else{let _=i.length;for(let p=0;p<c;++p)_+=r[p].length;const I={index:h,pathLengths:new Array(c+1),count:_,holeIndices:new Array(c)};I.pathLengths[0]=i.length,i.length>0&&(t[A++]={index:h,count:i.length}),h=O?C(i,i.length-1,-1,d,h,i.length,o):C(i,0,1,d,h,i.length,o);for(let p=0;p<c;++p){const w=r[p];I.holeIndices[p]=h,I.pathLengths[p+1]=w.length,w.length>0&&(t[A++]={index:h,count:w.length}),h=C(w,0,1,d,h,w.length,o)}c=0,I.count>0&&(a[y++]=I)}}for(let u=0;u<c;++u){const i=r[u];i.length>0&&(t[A++]={index:h,count:i.length}),h=C(i,0,1,d,h,i.length,o)}return a.length=y,t.length=A,{position:d,polygons:a,outlines:t}}function C(n,o,l,s,e,r,a){e*=3;for(let t=0;t<r;++t){const f=n[o];s[e++]=f[0],s[e++]=f[1],s[e++]=a&&f[2]?f[2]:0,o+=l}return e/3}function V(n,o,l){if(!o)return!m(n);const s=n.length-1;switch(F(n,s,l)){case g.X:return!m(n,g.Y,g.Z);case g.Y:return!m(n,g.X,g.Z);case g.Z:return!m(n,g.X,g.Y)}}var L;(function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"})(L||(L={}));export{R as a,F as c,B as f,L as p};