const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loadGLTFMesh-D60x07a0.js","assets/index-o1YlnJfN.js","assets/index-C7r0H98r.css","assets/MeshComponent-DaZJg_iE.js","assets/meshProperties-C4iW0Ukm.js","assets/MeshVertexAttributes-BIqIOKC9.js","assets/vec4-zybdZipl.js","assets/loader-Ca1VOi4u.js","assets/resourceUtils-BMIWMlu6.js","assets/DefaultMaterial_COLOR_GAMMA-7sySe7Jf.js","assets/vertexSpaceConversion-CYcQyigP.js","assets/gltfexport-C_boxSaS.js"])))=>i.map(i=>d[i]);
import{e as q,pJ as lt,h_ as K,i7 as _,dt as ct,dz as ut,bH as w,bK as ie,kc as le,eQ as Z,z as re,d7 as pt,pK as ft,i4 as xe,i2 as ht,ju as ve,ko as ce,i8 as de,J as mt,ap as dt,h7 as Oe,fe as gt,bT as se,gR as Le,_ as ue,i as oe,as as M,fu as xt,pL as vt,gS as yt,x as wt,b2 as $t,r as d,m as g,a as Ee,eb as bt,V as At,b6 as Rt,n7 as X,hU as pe,cN as St,hZ as ze,pM as Pe,pN as Ce,cO as fe,bP as Mt,bQ as De,bN as Y,pO as Te,k7 as Ft,dX as ae,i3 as Ue,pP as Be,d_ as ke,pQ as Ie,pR as je,ms as Ge,hT as _t,nz as Ot,g3 as Lt,bV as Et,pS as zt,dy as Pt,hl as Ct,b4 as Dt,E as Tt,ca as Ut,pT as Bt,pU as kt,pV as It,v as jt,pW as Gt,gL as Vt}from"./index-o1YlnJfN.js";import{f as V}from"./MeshComponent-DaZJg_iE.js";import{N as H}from"./MeshTransform-CytCReOQ.js";import{p as ee}from"./MeshVertexAttributes-BIqIOKC9.js";import{f as Nt}from"./triangulationUtils-DBLj8VTU.js";import{F as v,B as he,O as E,n as Wt,k as Ve,g as Ne,E as We,w as qe,h as He,R as Je,G as Ke}from"./vertexSpaceConversion-CYcQyigP.js";import{o as ye,h as qt,m as Ht}from"./External-BG7Vb2aQ.js";const Jt="Mesh must be loaded before applying operations",Kt="Provided component is not part of the list of components",Qt="Expected polygon to be a Polygon instance",W="Expected location to be a Point instance";class we extends q{constructor(){super("invalid-input:location",W)}}function ge(e,t,n,r){if(r!==void 0){lt(e(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const s=t.type==="local";if(!K(t)||r===s)return n.isGeographic||n.isWebMercator&&r;e().warnOnce(`Specifying the 'geographic' parameter (${r}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return n.isGeographic;case"local":return n.isGeographic||n.isWebMercator}}const J=()=>re.getLogger("esri.geometry.support.meshUtils.centerAt");function Zt(e,t,n){var a;if(!((a=e.vertexAttributes)!=null&&a.position))return;const{vertexSpace:r}=e,s=(n==null?void 0:n.origin)??e.origin,o=ge(J,r,s.spatialReference,n==null?void 0:n.geographic);K(r)?Xt(e,t,s):o?Yt(e,t,s):en(e,t,s)}function Xt(e,t,n){const{vertexSpace:r}=e;if(!K(r))return;const s=Ze,o=Qe;if(!_(t,o,e.spatialReference))return void v(J(),t.spatialReference,e.spatialReference,E);if(!_(n,s,e.spatialReference)){const i=e.origin;return s[0]=i.x,s[1]=i.y,s[2]=i.z,void v(J(),n.spatialReference,e.spatialReference,E)}const a=ct(nn,o,s);r.origin=ut(w(),r.origin,a)}function Yt(e,t,n){const r=ie(n.x,n.y,n.z??0),s=he(e,new le({origin:r}));if(!s)return;const o=ie(t.x,t.y,t.z??0),a=he({vertexAttributes:s,spatialReference:e.spatialReference,vertexSpace:new le({origin:o})},Z.absolute);if(!a)return;const{position:i,normal:l,tangent:u}=a;e.vertexAttributes.position=i,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=u,e.vertexAttributesChanged()}function en(e,t,n){const r=Ze,s=Qe;if(_(t,s,e.spatialReference)){if(!_(n,r,e.spatialReference)){const o=e.origin;return r[0]=o.x,r[1]=o.y,r[2]=o.z,void v(J(),n.spatialReference,e.spatialReference,E)}tn(e.vertexAttributes.position,s,r),e.vertexAttributesChanged()}else v(J(),t.spatialReference,e.spatialReference,E)}function tn(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let s=0;s<3;s++)e[r+s]+=t[s]-n[s]}const Qe=w(),Ze=w(),nn=w();function rn(e){const{spatialReference:t,vertexSpace:n,untransformedBounds:r}=e,s=ft(r,sn);if(K(n)&&e.transform&&xe(s,s,e.transform.localMatrix),n.type==="georeferenced"){const i=n.origin;return i&&ht(s,s,i),ve(ce(s),t)}const o=de(t),a=n.origin;if(!mt(o,t)){const[i,l,u]=a;return new dt({xmin:i,ymin:l,zmin:u,xmax:i,ymax:l,zmax:u,spatialReference:t})}return Oe(t,a,$e,o),xe(s,s,$e),gt(s,o,0,s,t,0),ve(ce(s),t)}const $e=se(),sn=pt(24);async function on(e,t,n){const{source:r}=t,{loadGLTFMesh:s}=await Le(ue(()=>import("./loadGLTFMesh-D60x07a0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),n),o=await ln(r,n);oe(n);const a=s(new M({x:0,y:0,z:0,spatialReference:e.spatialReference}),o.url,{resolveFile:an(o),signal:n==null?void 0:n.signal,expectedType:o.type,unitConversionDisabled:t.unitConversionDisabled});a.then(()=>o.dispose(),()=>o.dispose());const{vertexAttributes:i,components:l}=await a;e.vertexAttributes=i,e.components=l}function an(e){const t=xt(e.url);return n=>{const r=vt(n,t,t),s=r?r.replace(/^ *\.\//,""):null;return(s?e.files.get(s):null)??n}}async function ln(e,t){if(Array.isArray(e)){if(!e.length)throw new q("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?un(e):pn(e,t)}return Xe(e)}async function cn(e,t){const{parts:n,assetMimeType:r,assetName:s}=e;if(n.length===1)return new te(n[0].partUrl);const o=await e.toBlob(t);return oe(t),te.fromBlob(o,rt(s,r))}function Xe(e){return te.fromBlob(e,rt(e.name,e.type))}function un(e){return tt(e.map(t=>({name:t.name,mimeType:t.type,source:Xe(t)})))}async function pn(e,t){const n=await yt(e.map(async r=>{const s=await cn(r);return oe(t),{name:r.assetName,mimeType:r.assetMimeType,source:s}}));if(wt(t))throw n.forEach(r=>r.source.dispose()),$t();return tt(n)}const Ye=/^model\/gltf\+json$/,et=/^model\/gltf-binary$/,me=/\.gltf$/i,fn=/\.glb$/i;function be({mimeType:e,source:t,name:n}){return Ye.test(e)||me.test(n)?{url:t.url,type:"gltf"}:et.test(e)||fn.test(n)?{url:t.url,type:"glb"}:null}function tt(e){const t=new Map;let n=null,r=null;for(const o of e){const{source:a,name:i}=o;n??(n=be(o)),i==="ESRI3DO_NORM.glb"&&(r=be(o)),t.set(i,a.url),a.files.forEach((l,u)=>t.set(u,l))}const s=r??n;if(s==null)throw new q("mesh-load-external:missing-files","Missing files to load external mesh source");return new te(s.url,()=>e.forEach(({source:o})=>o.dispose()),t,s.type)}let te=class nt{constructor(t,n=()=>{},r=new Map,s){this.url=t,this.dispose=n,this.files=r,this.type=s}static fromBlob(t,n){const r=URL.createObjectURL(t);return new nt(r,()=>URL.revokeObjectURL(r),void 0,n)}};function rt(e,t){return Ye.test(t)||me.test(e)?"gltf":et.test(t)||me.test(e)?"glb":void 0}let F=class extends bt{constructor(e){super(e),this.externalSources=new At,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles(Rt(()=>this.externalSources,"after-remove",({item:t})=>{t===this._explicitDisplaySource&&(this._explicitDisplaySource=null)},{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(e!=null&&!ye(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every(t=>!qt(t,e))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter(t=>Ht(t,e))}get _implicitDisplaySource(){return this.externalSources.find(ye)}};d([g()],F.prototype,"externalSources",void 0),d([g()],F.prototype,"displaySource",null),d([g()],F.prototype,"_implicitDisplaySource",null),d([g()],F.prototype,"_explicitDisplaySource",void 0),d([g()],F.prototype,"georeferenced",void 0),F=d([Ee("esri.geometry.support.meshUtils.Metadata")],F);function hn(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=bn,r=4*e.length,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*e.length*3);let l=0,u=0,c=0,f=0;for(let h=0;h<e.length;h++){const p=e[h],x=l/3;for(const b of t)i[f++]=x+b;const z=p.corners;for(let b=0;b<4;b++){const P=z[b];let $=0;a[c++]=.25*n[b][0]+p.uvOrigin[0],a[c++]=p.uvOrigin[1]-.25*n[b][1];for(let R=0;R<3;R++)p.axis[R]!==0?(s[l++]=.5*p.axis[R],o[u++]=p.axis[R]):(s[l++]=.5*P[$++],o[u++]=0)}}return{position:s,normal:o,uv:a,faces:i}}function mn(e,t){const n=e.components[0],r=n.faces,s=An[t],o=6*s,a=new Array(6),i=new Array(r.length-6);let l=0,u=0;for(let c=0;c<r.length;c++)c>=o&&c<o+6?a[l++]=r[c]:i[u++]=r[c];if(e.vertexAttributes.uv!=null){const c=new Float32Array(e.vertexAttributes.uv),f=4*s*2,h=[0,1,1,1,1,0,0,0];for(let p=0;p<h.length;p++)c[f+p]=h[p];e.vertexAttributes.uv=c}return e.components=[new V({faces:a,material:n.material}),new V({faces:i})],e}function dn(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((t-1)*n*2));let l=0,u=0,c=0,f=0;for(let h=0;h<=t;h++){const p=h/t*Math.PI+.5*Math.PI,x=Math.cos(p),z=Math.sin(p);m[2]=z;const b=h===0||h===t,P=b?n-1:n;for(let $=0;$<=P;$++){const R=$/P*2*Math.PI;m[0]=-Math.sin(R)*x,m[1]=Math.cos(R)*x;for(let O=0;O<3;O++)s[l]=.5*m[O],o[l]=m[O],++l;a[u++]=($+(b?.5:0))/n,a[u++]=h/t,h!==0&&$!==n&&(h!==t&&(i[c++]=f,i[c++]=f+1,i[c++]=f-n),h!==1&&(i[c++]=f,i[c++]=f-n,i[c++]=f-n-1)),f++}}return{position:s,normal:o,uv:a,faces:i}}function gn(e=0){const n=Math.round(16*2**e),r=4*(n+1)+2*n,s=new Float64Array(3*r),o=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,u=0,c=0,f=0,h=0;for(let p=0;p<=5;p++){const x=p===0||p===5,z=p<=1||p>=4,b=p===2||p===4,P=x?n-1:n;for(let $=0;$<=P;$++){const R=$/P*2*Math.PI,O=x?0:.5;m[0]=O*Math.sin(R),m[1]=O*-Math.cos(R),m[2]=p<=2?.5:-.5;for(let T=0;T<3;T++)s[l++]=m[T],o[u++]=z?T===2?p<=1?1:-1:0:T===2?0:m[T]/O;a[c++]=($+(x?.5:0))/n,a[c++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,b||p===0||$===n||(p!==5&&(i[f++]=h,i[f++]=h+1,i[f++]=h-n),p!==1&&(i[f++]=h,i[f++]=h-n,i[f++]=h-n-1)),h++}}return{position:s,normal:o,uv:a,faces:i}}function xn(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function vn(e){const t=N.facingAxisOrderSwap[e],n=N.position,r=N.normal,s=new Float64Array(n.length),o=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const l=a;for(let u=0;u<3;u++){const c=t[u],f=Math.abs(c)-1,h=c>=0?1:-1;s[a]=n[l+f]*h,o[a]=r[l+f]*h,a++}}return{position:s,normal:o,uv:new Float32Array(N.uv),faces:new Uint32Array(N.faces),isPlane:!0}}const U=1,B=2,k=3,N={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[k,U,B],west:[-k,-U,B],north:[-U,k,B],south:[U,-k,B],up:[U,B,k],down:[U,-B,-k]}};function Q(e,t,n){e.isPlane||yn(e),$n(e,wn(n==null?void 0:n.size,n==null?void 0:n.unit,t.spatialReference));const r=X(t,n),s=t.spatialReference.isGeographic?X(t):r,o=he({vertexAttributes:e,vertexSpace:s,spatialReference:t.spatialReference},r,{allowBufferReuse:!0});return{vertexAttributes:new ee({...o,uv:e.uv}),vertexSpace:r,components:[new V({faces:e.faces,material:(n==null?void 0:n.material)||null})],spatialReference:t.spatialReference}}function yn(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function wn(e,t,n){const r=Wt(t,n);if(e==null&&r===1)return null;if(e==null)return[r,r,r];if(typeof e=="number"){const s=e*r;return[s,s,s]}return[e.width!=null?e.width*r:r,e.depth!=null?e.depth*r:r,e.height!=null?e.height*r:r]}function $n(e,t){if(t!=null){L[0]=t[0],L[4]=t[1],L[8]=t[2];for(let n=0;n<e.position.length;n+=3){for(let r=0;r<3;r++)m[r]=e.position[n+r];pe(m,m,L);for(let r=0;r<3;r++)e.position[n+r]=m[r]}if(t[0]!==t[1]||t[1]!==t[2]){L[0]=1/t[0],L[4]=1/t[1],L[8]=1/t[2];for(let n=0;n<e.normal.length;n+=3){for(let r=0;r<3;r++)m[r]=e.normal[n+r];pe(m,m,L),St(m,m);for(let r=0;r<3;r++)e.normal[n+r]=m[r]}}}}const bn={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},An={south:0,east:1,north:2,west:3,up:4,down:5},m=w(),L=ze(),C=()=>re.getLogger("esri.geometry.support.meshUtils.rotate");function Rn(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position)||t[3]===0)return;const{spatialReference:r,vertexSpace:s}=e,o=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=ge(C,s,r,a);Ce(e)?Sn(e,t,o):i?Mn(e,t,o):Fn(e,t,o)}function Sn(e,t,n){e.transform??(e.transform=new H);const{vertexSpace:r,transform:s,spatialReference:o}=e,[a,i,l]=r.origin,u=new M({x:a,y:i,z:l,spatialReference:o}),c=I;if(u.equals(n))fe(c,0,0,0);else if(!Ve(c,n,e))return void v(C(),n.spatialReference,o,E);Mt(Me,Y(t),De(t));const f=Te(Ae,Me,ae,Ft,c),{localMatrix:h}=s,p=Ue(Ae,f,h);s.scale=Be(w(),p),ke(p,p,Ie(I,s.scale));const x=s.rotationAxis;s.rotation=je(p),s.rotationAngle===0&&(s.rotationAxis=x),s.translation=Ge(w(),p)}function Mn(e,t,n){const r=e.spatialReference,s=de(r),o=st;if(!_(n,o,s)&&(v(C(),n.spatialReference,s,"Falling back to mesh origin"),!_(e.origin,o,s)))return void v(C(),e.origin.spatialReference,s);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),c=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;Oe(s,o,ne,s),_t(Se,ne);const h=Re;pe(Y(Re),Y(t),Se),h[3]=t[3],Ne(a,r,u,s)&&(i==null||c==null||We(i,a,r,u,s,c))&&(l==null||f==null||qe(l,a,r,u,s,f))?(G(u,h,3,o),He(u,s,a,r)&&(i==null||c==null||(G(c,h,3),Je(c,a,r,u,s,i)))&&(l==null||f==null||(G(f,h,4),Ke(f,a,r,u,s,l)))?e.vertexAttributesChanged():v(C(),s,r)):v(C(),r,s)}function Fn(e,t,n){const r=st;if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void v(C(),n.spatialReference,e.spatialReference,E)}G(e.vertexAttributes.position,t,3,r),G(e.vertexAttributes.normal,t,3),G(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function G(e,t,n,r=ae){if(e!=null){Ot(ne,De(t),Y(t));for(let s=0;s<e.length;s+=n){for(let o=0;o<3;o++)I[o]=e[s+o]-r[o];Lt(I,I,ne);for(let o=0;o<3;o++)e[s+o]=I[o]+r[o]}}}const I=w(),Ae=se(),Re=Pe(),ne=se(),Se=ze(),st=w(),Me=Et(),D=()=>re.getLogger("esri.geometry.support.meshUtils.scale");function _n(e,t,n){var l;if(!((l=e.vertexAttributes)!=null&&l.position))return;const{vertexSpace:r,spatialReference:s}=e,o=(n==null?void 0:n.origin)??e.origin,a=n==null?void 0:n.geographic,i=ge(D,r,s,a);Ce(e)?On(e,t,o):i?Ln(e,t,o):En(e,t,o)}function On(e,t,n){e.transform??(e.transform=new H);const{vertexSpace:r,transform:s,spatialReference:o}=e,[a,i,l]=r.origin,u=new M({x:a,y:i,z:l,spatialReference:o}),c=j;if(u.equals(n))fe(c,0,0,0);else if(!Ve(c,n,e))return void v(D(),n.spatialReference,o,E);const f=fe(zn,t,t,t),h=Te(Fe,zt,ae,f,c),{localMatrix:p}=s,x=Ue(Fe,h,p);s.scale=Be(w(),x),ke(x,x,Ie(j,s.scale));const z=s.rotationAxis;s.rotation=je(x),s.rotationAngle===0&&(s.rotationAxis=z),s.translation=Ge(w(),x)}function Ln(e,t,n){const r=e.spatialReference,s=de(r),o=at;if(!_(n,o,s)&&(v(D(),n.spatialReference,s,"Falling back to mesh origin"),!_(e.origin,o,s)))return void v(D(),e.origin.spatialReference,s);const a=e.vertexAttributes.position,i=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,u=new Float64Array(a.length),c=i!=null?new Float32Array(i.length):null,f=l!=null?new Float32Array(l.length):null;Ne(a,r,u,s)&&(i==null||c==null||We(i,a,r,u,s,c))&&(l==null||f==null||qe(l,a,r,u,s,f))?(ot(u,t,o),He(u,s,a,r)&&(i==null||c==null||Je(c,a,r,u,s,i))&&(l==null||f==null||Ke(f,a,r,u,s,l))?e.vertexAttributesChanged():v(D(),s,r)):v(D(),r,s)}function En(e,t,n){const r=at;if(!_(n,r,e.spatialReference)){const s=e.origin;return r[0]=s.x,r[1]=s.y,r[2]=s.z,void v(D(),n.spatialReference,e.spatialReference,E)}ot(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function ot(e,t,n=ae){if(e)for(let r=0;r<e.length;r+=3){for(let s=0;s<3;s++)j[s]=e[r+s]-n[s];Pt(j,j,t);for(let s=0;s<3;s++)e[r+s]=j[s]+n[s]}}const j=w(),zn=w(),Fe=se(),at=w();var A;const it="esri.geometry.Mesh";function S(){return re.getLogger(it)}const Pn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:Z,local:le}};let y=A=class extends Ct.LoadableMixin(Dt(Vt)){constructor(e){super(e),this.components=null,this.vertexSpace=new Z,this.transform=null,this.metadata=new F,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new ee,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.addHandles(Tt(()=>{var e;return{vertexAttributes:this.vertexAttributes,components:(e=this.components)==null?void 0:e.map(t=>t.clone())}},()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){var e;return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):((e=this.metadata.displaySource)==null?void 0:e.extent)!=null}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,n=this;return rn({get transform(){return n.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return e.length===0||(t==null?void 0:t.length)===0?Ut(Bt):ce(e)}get origin(){const e=kt(this.vertexSpace,this.spatialReference);if(e!=null)return e;const{center:t,zmin:n}=this._transformedExtent;return new M({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get extent(){var e,t;return this.loaded||((t=(e=this.metadata)==null?void 0:e.displaySource)==null?void 0:t.extent)==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(V.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}S().error("removeComponent()",Kt)}}rotate(e,t,n,r){return It(e,t,n,_e),Rn(this,_e,r),this}offset(e,t,n){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:r,vertexAttributes:s}=this,o=s==null?void 0:s.position;if(!o)return this;if(K(r)){const[a,i,l]=r.origin;r.origin=ie(a+e,i+t,l+n)}else{for(let a=0;a<o.length;a+=3)o[a]+=e,o[a+1]+=t,o[a+2]+=n;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(_n(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Zt(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(on(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,n){var o;let r=null;if(this.components){const a=new Map,i=new Map;r=this.components.map(l=>l.cloneWithDeduplication(a,i))}const s={components:r,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:((o=this.transform)==null?void 0:o.clone())??null,metadata:n!=null&&n.preserveMetadata?this.metadata.clone():new F};return new A(s)}cloneShallow(){return new A({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([ue(()=>import("./gltfexport-C_boxSaS.js"),__vite__mapDeps([11,1,2,3,4,10,6,8])),this.load(e)]);return oe(e),await t(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(S().error(e,Jt),!1)}static createBox(e,t){if(!(e instanceof M))return S().error(".createBox()",W),null;const n=new A(Q(hn(),e,t));return t!=null&&t.imageFace&&t.imageFace!=="all"?mn(n,t.imageFace):n}static createSphere(e,t){return e instanceof M?new A(Q(dn((t==null?void 0:t.densificationFactor)||0),e,t)):(S().error(".createSphere()",W),null)}static createCylinder(e,t){return e instanceof M?new A(Q(gn((t==null?void 0:t.densificationFactor)||0),e,t)):(S().error(".createCylinder()",W),null)}static createPlane(e,t){if(!(e instanceof M))return S().error(".createPlane()",W),null;const n=(t==null?void 0:t.facing)??"up",r=xn(n,t==null?void 0:t.size);return new A(Q(vn(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof jt))return S().error(".createFromPolygon()",Qt),null;const n=Nt(e);return new A({vertexAttributes:new ee({position:n.position}),components:[new V({faces:n.faces,shading:"flat",material:(t==null?void 0:t.material)??null})],spatialReference:e.spatialReference,vertexSpace:new Z})}static async createFromGLTF(e,t,n){if(!(e instanceof M)){const s=new we;throw S().error(".createfromGLTF()",s.message),s}const{loadGLTFMesh:r}=await Le(ue(()=>import("./loadGLTFMesh-D60x07a0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10])),n);return new A(await r(e,t,n))}static async createFromFiles(e,t,n){Gt(S(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"});const r=s=>S().error(".createFromFiles()",s.message);if(!(e instanceof M)){const s=new we;throw r(s),s}if(!(n!=null&&n.layer))throw new q("invalid:no-layer","SceneLayer required for file to mesh conversion.");return n.layer.convertMesh(t,{location:e,...n})}static createWithExternalSource(e,t,n){var c;const r=(n==null?void 0:n.extent)??null,{spatialReference:s}=e,o=((c=n==null?void 0:n.transform)==null?void 0:c.clone())??new H,a=X(e,n),i=n==null?void 0:n.unitConversionDisabled,l={source:t,extent:r,unitConversionDisabled:i},u=new F;return u.externalSources.push(l),new A({metadata:u,transform:o,vertexSpace:a,spatialReference:s})}static createIncomplete(e,t){var a;const{spatialReference:n}=e,r=((a=t==null?void 0:t.transform)==null?void 0:a.clone())??new H,s=X(e,t),o=new A({transform:r,vertexSpace:s,spatialReference:n});return o.addResolvingPromise(Promise.reject(new q("mesh-incomplete","Mesh resources are not complete"))),o}};d([g({type:[V],json:{write:!0}})],y.prototype,"components",void 0),d([g({nonNullable:!0,types:Pn,constructOnly:!0,json:{write:!0}})],y.prototype,"vertexSpace",void 0),d([g({type:H,json:{write:!0}})],y.prototype,"transform",void 0),d([g({constructOnly:!0})],y.prototype,"metadata",void 0),d([g()],y.prototype,"hasExtent",null),d([g()],y.prototype,"_transformedExtent",null),d([g()],y.prototype,"_untransformedBounds",null),d([g()],y.prototype,"origin",null),d([g({readOnly:!0,json:{read:!1}})],y.prototype,"extent",null),d([g({readOnly:!0,json:{read:!1,write:!0,default:!0}})],y.prototype,"hasZ",void 0),d([g({readOnly:!0,json:{read:!1,write:!0,default:!1}})],y.prototype,"hasM",void 0),d([g({type:ee,nonNullable:!0,json:{write:!0}})],y.prototype,"vertexAttributes",void 0),y=A=d([Ee(it)],y);const _e=Pe(),jn=y;export{jn as $};
