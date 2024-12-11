import{hN as d,hO as F,fe as X,hP as L,hQ as b,hR as Z,hS as J,hT as K,hU as q,hV as cn,cN as fn,hW as An,hX as pn,hY as gn,bH as V,hZ as nn,h7 as O,bS as S,bT as x,hy as Tn,e6 as yn,h_ as mn,h$ as Rn,bU as hn,i0 as tn,i1 as En,i2 as P,dQ as rn,i3 as U,d_ as en,i4 as B,i5 as Nn,i6 as dn,gC as Fn,z as On,i7 as Q,dt as $n,i8 as on,g3 as _n,i9 as Pn,ia as wn}from"./index-pOkNMSkH.js";import{n as Cn}from"./vec4-B794kZFC.js";const Zn="Projection may be possible after calling projection.load().";function h(n,t,r,o){n.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${o?" ":""}${o}`)}function Mn(n,t,r,o,e,l){return v(N.TO_PCPF,d.fromTypedArray(n),g.NORMAL,F.fromTypedArray(t),r,F.fromTypedArray(o),e,d.fromTypedArray(l))?l:null}function Sn(n,t,r,o,e,l){return v(N.FROM_PCPF,d.fromTypedArray(n),g.NORMAL,F.fromTypedArray(t),r,F.fromTypedArray(o),e,d.fromTypedArray(l))?l:null}function xn(n,t,r,o){return X(n,t,0,r,o,0)?r:null}function vn(n,t,r,o){return X(n,t,0,r,o,0)?r:null}function an(n,t,r){return L(A,r),b(t,n,A),Z(A)&&J(t,t),t}function ln(n,t,r){return K(A,r),Cn(t,n,A),Z(A)&&J(t,t,4),t}function Jn(n,t,r,o){const e=t===g.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cos(yn(l));a[0]=e?i:1/i,a[1]=1},o)}function Kn(n,t,r,o){const e=t===g.NORMAL;return sn(n,t,r,(l,a)=>{const i=Math.cosh(-l/Tn.radius);a[0]=1,a[1]=e?i:1/i},o)}function sn(n,t,r,o,e){const l=t===g.NORMAL?3:4,a=[0,0];for(let i=0,c=1;i<n.length;i+=l,c+=3){o(r[c],a);const s=n[i]*a[0],f=n[i+1]*a[1],u=n[i+2],y=1/Math.sqrt(s*s+f*f+u*u);e[i]=s*y,e[i+1]=f*y,e[i+2]=u*y,l===4&&(e[i+3]=n[i+3])}return e}function Gn(n,t,r,o,e,l){if(!v(N.TO_PCPF,d.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),g.TANGENT,F.fromTypedArray(t),r,F.fromTypedArray(o),e,d.fromTypedArray(l,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}function Un(n,t,r,o,e,l){if(!v(N.FROM_PCPF,d.fromTypedArray(n,16),g.TANGENT,F.fromTypedArray(t),r,F.fromTypedArray(o),e,d.fromTypedArray(l,16)))return null;for(let a=3;a<n.length;a+=4)l[a]=n[a];return l}var g,N;function z(n,t,r,o,e){switch(O(o,r,$,o),n===N.FROM_PCPF&&S($,$),t){case g.NORMAL:return L(e,$);case g.TANGENT:return K(e,$)}}function v(n,t,r,o,e,l,a,i){if(!t)return;const c=o.count;if(Ln(e))for(let s=0;s<c;s++)l.getVec(s,M),t.getVec(s,R),q(R,R,z(n,r,M,a,A)),i.setVec(s,R);else for(let s=0;s<c;s++){l.getVec(s,M),t.getVec(s,R);const f=cn(o.get(s,1));let u=Math.cos(f);r===g.TANGENT!=(n===N.TO_PCPF)&&(u=1/u),z(n,r,M,a,A),n===N.TO_PCPF?(A[0]*=u,A[1]*=u,A[2]*=u,A[3]*=u,A[4]*=u,A[5]*=u):(A[0]*=u,A[3]*=u,A[6]*=u,A[1]*=u,A[4]*=u,A[7]*=u),q(R,R,A),fn(R,R),i.setVec(s,R)}return i}function Ln(n){return n.isWGS84||An(n)||pn(n)||gn(n)}(function(n){n[n.NORMAL=0]="NORMAL",n[n.TANGENT=1]="TANGENT"})(g||(g={})),function(n){n[n.TO_PCPF=0]="TO_PCPF",n[n.FROM_PCPF=1]="FROM_PCPF"}(N||(N={}));const M=V(),R=V(),$=x(),A=nn(),T=()=>On.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function nt(n,t,{vertexSpace:r,spatialReference:o}){if(r.type==="georeferenced"){const s=n;if(!Q(t,s,o))return!1;const{origin:f}=r;return $n(n,s,f),!0}const e=on(o),l=n;if(!Q(t,l,e))return!1;const{origin:a}=r,i=I;if(!O(o,a,i,e))return!1;const c=S(I,i);return c!=null&&(_n(n,l,c),!0)}function tt(n,t,r){const{vertexSpace:o,transform:e,vertexAttributes:l}=n,a=mn(o)?e:null,i=G(n.spatialReference,r,E.SOURCE_AND_TARGET);if(Rn(o,t)&&(!a||hn(a.localMatrix,tn))&&w(i)){const{position:c,normal:s,tangent:f}=l,u=r==null?void 0:r.allowBufferReuse;return{position:u?c:c.slice(),normal:u?s:s==null?void 0:s.slice(),tangent:u?f:f==null?void 0:f.slice()}}switch(n.vertexSpace.type){case"local":return t.type==="local"?kn(n,n.vertexSpace,t.origin,r):Vn(n,n.vertexSpace,t.origin,r);case"georeferenced":return t.type==="local"?Bn(n,n.vertexSpace,t.origin,r):bn(n,n.vertexSpace,t.origin,r)}}function bn({vertexAttributes:n,transform:t,spatialReference:r},{origin:o},e,l){const a=G(r,l,E.SOURCE_AND_TARGET),i=o||!w(a)?En(p,(t==null?void 0:t.localMatrix)??tn):null;i&&Y(i,r,l,E.SOURCE_AND_TARGET);const{position:c,normal:s,tangent:f}=i?k(n,i):n,u=l==null?void 0:l.allowBufferReuse,y=u?c:new Float64Array(c.length);let m=c;if(o&&(m=P(y,m,o)),e){const C=rn(un,e);m=P(y,m,C)}return{position:m!==n.position||u?m:m.slice(),normal:s!==n.normal||u?s:s==null?void 0:s.slice(),tangent:f!==n.tangent||u?f:f==null?void 0:f.slice()}}function D(n,t){return t!=null&&t.useEllipsoid&&Pn(n)?wn:on(n)}function Vn({spatialReference:n,vertexAttributes:t,transform:r},{origin:o},e,l){const a=D(n,l);if(!O(n,o,p,a))return h(T(),n,a),null;r&&U(p,p,r.localMatrix),Y(p,n,l,E.SOURCE);const i=new Float64Array(t.position.length),c=Yn(t.position,p,n,i,a);if(!c)return null;const s=jn(c,n,i,a,t.normal,p);if(t.normal&&!s)return null;const f=Wn(c,n,i,a,t.tangent,p);if(t.tangent&&!f)return null;if(e){const u=rn(un,e);P(c,c,u)}return{position:c,normal:s,tangent:f}}function Bn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!O(t,e,p,a))return h(T(),t,a),null;const i=1/G(t,l,E.TARGET);en(p,p,[i,i,i]);const c=S(_,p),{position:s,normal:f,tangent:u}=Dn(n,o,r),y=new Float64Array(s.length),m=qn(s,t,c,y,a);if(!m)return null;const C=L(Hn,c),j=Qn(f,s,t,y,a,C,f!==n.normal?f:void 0);if(!j&&f)return null;const W=zn(u,s,t,y,a,C,u!==n.tangent?u:void 0);return!W&&u?null:{position:m,normal:j,tangent:W}}function Dn(n,t,r){if(!t)return n;if(!r){const{position:e,normal:l,tangent:a}=n;return{position:P(new Float64Array(e.length),e,t),tangent:a,normal:l}}const o=k(n,r.localMatrix);return P(o.position,o.position,t),o}function kn({vertexAttributes:n,spatialReference:t,transform:r},{origin:o},e,l){const a=D(t,l);if(!O(t,o,p,a))return h(T(),t,a),null;if(r&&U(p,p,r.localMatrix),!O(t,e,_,a))return h(T(),a,t),null;S(_,_);const i=U(p,_,p);return Y(i,t,l,E.SOURCE_AND_TARGET),k(n,i)}function k(n,t){const r=new Float64Array(n.position.length);B(r,n.position,t);const o=n.normal?new Float32Array(n.normal.length):null,e=n.tangent?new Float32Array(n.tangent.length):null;return o&&n.normal&&an(n.normal,o,t),e&&n.tangent&&ln(n.tangent,e,t),{position:r,normal:o,tangent:e}}function Yn(n,t,r,o,e){B(o,n,t);const l=new Float64Array(n.length);return vn(o,e,l,r)?l:(h(T(),e,r),null)}function jn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return an(e,a,l),Sn(a,n,t,r,o,a)?a:(h(T(),o,t),null)}function Wn(n,t,r,o,e,l){if(e==null)return null;const a=new Float32Array(e.length);return ln(e,a,l),Un(a,n,t,r,o,a)?a:(h(T(),o,t),null)}function Y(n,t,r,o){const e=G(t,r,o);w(e)||en(n,n,[e,e,e])}function G(n,t,r){const o=!!(r&E.SOURCE),e=!!(r&E.TARGET),l=t==null?void 0:t.sourceUnit,a=t==null?void 0:t.targetUnit;if(!l&&!a)return 1;let i=H(l,n);o||!l||w(i)||(T().warn("source unit conversion not supported"),i=1);let c=1/H(a,n);return e||!a||w(c)||(T().warn("target unit conversion not supported"),c=1),i*c}function w(n){return Nn(n,1)}function qn(n,t,r,o,e){const l=xn(n,t,o,e);if(!l)return h(T(),t,e),null;const a=new Float64Array(l.length);return B(a,l,r),a}function Qn(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Mn(n,t,r,o,e,i)?(b(i,i,l),i):(h(T(),r,e),null)}function zn(n,t,r,o,e,l,a){if(n==null)return null;const i=a??new Float32Array(n.length);return Gn(n,t,r,o,e,i)?(b(i,i,l,4),i):(h(T(),r,e),null)}function H(n,t){if(n==null)return 1;const r=dn(t);return 1/Fn(r,"meters",n)}const p=x(),_=x(),Hn=nn(),un=V(),I=x();var E;(function(n){n[n.NONE=0]="NONE",n[n.SOURCE=1]="SOURCE",n[n.TARGET=2]="TARGET",n[n.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"})(E||(E={}));export{tt as B,ln as C,Mn as E,h as F,Un as G,Kn as L,Zn as O,Sn as R,g as V,an as _,Jn as b,xn as g,vn as h,nt as k,H as n,Gn as w};
