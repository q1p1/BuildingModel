const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/loader-CjvuzNKg.js","assets/index-pOkNMSkH.js","assets/resourceUtils-BsADwHPp.js"])))=>i.map(i=>d[i]);
import{l4 as te,l5 as re,l6 as _,ik as k,hZ as K,l7 as se,l8 as oe,_ as ne,l9 as ae,la as ie,lb as le,cJ as ue,kk as L,cL as j,lc as S,ld as ce,le as de,lf as fe,ki as V,kj as q,lg as me,da as O,i4 as he,ba as v,d4 as B,hP as xe,hQ as pe,hR as U,hS as D,hT as ge,lh as be,li as Q,lj as Te,hN as J,lk as G,ll as ye,lm as Re,ln as $e,d2 as we,bS as ve,bT as Be,g3 as H,dt as Me,lo as W,dq as Se,cN as Ae,kK as Ee,h2 as Oe,bH as C}from"./index-pOkNMSkH.js";import{a as Fe}from"./devEnvironmentUtils-CnNDiFMM.js";import{n as _e,s as z}from"./vec4-B794kZFC.js";import{o as R,a as Ce,n as Ie,t as Le}from"./DefaultMaterial_COLOR_GAMMA-1fuB7OQO.js";import{r as I}from"./resourceUtils-BsADwHPp.js";function M(t){if(t==null)return null;const r=t.offset!=null?t.offset:te,n=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:re,c=_(1,0,0,0,1,0,r[0],r[1],1),d=_(Math.cos(n),-Math.sin(n),0,Math.sin(n),Math.cos(n),0,0,0,1),i=_(o[0],0,0,0,o[1],0,0,0,1),l=K();return k(l,d,i),k(l,c,l),l}class Ne{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Pe{constructor(r,n,o){this.name=r,this.lodThreshold=n,this.pivotOffset=o,this.stageResources=new Ne,this.numberOfVertices=0}}async function ke(t,r){var u;const n=Z(Fe(t));if(n.fileType==="wosr"){const f=await(r.cache?r.cache.loadWOSR(n.url,r):se(n.url,r)),{engineResources:x,referenceBoundingBox:h}=oe(f,r);return{lods:x,referenceBoundingBox:h,isEsriSymbolResource:!1,isWosr:!0}}let o;if(r.cache)o=await r.cache.loadGLTF(n.url,r,!!r.usePBR);else{const{loadGLTF:f}=await ne(()=>import("./loader-CjvuzNKg.js"),__vite__mapDeps([0,1,2]));o=await f(new ae(r.streamDataRequester),n.url,r,r.usePBR)}const c=(u=o.model.meta)==null?void 0:u.ESRI_proxyEllipsoid,d=o.meta.isEsriSymbolResource&&c!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";d&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,De(o,c));const i=!!r.usePBR,l=o.meta.isEsriSymbolResource?{usePBR:i,isSchematic:!1,treeRendering:d,mrrFactors:ie}:{usePBR:i,isSchematic:!1,treeRendering:!1,mrrFactors:le},a={...r.materialParameters,treeRendering:d},{engineResources:e,referenceBoundingBox:s}=je(o,l,a,r,n.specifiedLodIndex);return{lods:e,referenceBoundingBox:s,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Z(t){const r=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return r?{fileType:"gltf",url:r[1],specifiedLodIndex:r[4]!=null?Number(r[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function je(t,r,n,o,c){const d=t.model,i=new Array,l=new Map,a=new Map,e=d.lods.length,s=ue();return d.lods.forEach((u,f)=>{const x=o.skipHighLods===!0&&(e>1&&f===0||e>3&&f===1)||o.skipHighLods===!1&&c!=null&&f!==c;if(x&&f!==0)return;const h=new Pe(u.name,u.lodThreshold,[0,0,0]);u.parts.forEach(p=>{const m=x?new L({},o):Ve(d,p,h,r,n,l,a,o),{geometry:g,vertexCount:T}=qe(p,m??new L({},o)),b=g.boundingInfo;b!=null&&f===0&&(j(s,b.bbMin),j(s,b.bbMax)),m!=null&&(h.stageResources.geometries.push(g),h.numberOfVertices+=T)}),x||i.push(h)}),{engineResources:i,referenceBoundingBox:s}}function Ve(t,r,n,o,c,d,i,l){var h,p;const a=r.material+(r.attributes.normal?"_normal":"")+(r.attributes.color?"_color":"")+(r.attributes.texCoord0?"_texCoord0":"")+(r.attributes.tangent?"_tangent":""),e=t.materials.get(r.material),s=r.attributes.texCoord0!=null,u=r.attributes.normal!=null;if(e==null)return null;const f=Ue(e.alphaMode);if(!d.has(a)){if(s){const w=(E,ee=!1)=>{if(E!=null&&!i.has(E)){const F=t.textures.get(E);if(F!=null){const y=F.data;i.set(E,new Oe(I(y)?y.data:y,{...F.parameters,preMultiplyAlpha:!I(y)&&ee,encoding:I(y)&&y.encoding!=null?y.encoding:void 0}))}}};w(e.textureColor,f!==S.Opaque),w(e.textureNormal),w(e.textureOcclusion),w(e.textureEmissive),w(e.textureMetallicRoughness)}const m=e.color[0]**(1/R),g=e.color[1]**(1/R),T=e.color[2]**(1/R),b=e.emissiveFactor[0]**(1/R),X=e.emissiveFactor[1]**(1/R),Y=e.emissiveFactor[2]**(1/R),A=e.textureColor!=null&&s?i.get(e.textureColor):null,N=ce({normalTexture:e.textureNormal,metallicRoughnessTexture:e.textureMetallicRoughness,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,emissiveTexture:e.textureEmissive,emissiveFactor:e.emissiveFactor,occlusionTexture:e.textureOcclusion}),P=((h=e.normalTextureTransform)==null?void 0:h.scale)!=null?(p=e.normalTextureTransform)==null?void 0:p.scale:de;d.set(a,new L({...o,transparent:f===S.Blend,customDepthTest:fe.Lequal,textureAlphaMode:f,textureAlphaCutoff:e.alphaCutoff,diffuse:[m,g,T],ambient:[m,g,T],opacity:e.opacity,doubleSided:e.doubleSided,doubleSidedType:"winding-order",cullFace:e.doubleSided?V.None:V.Back,hasVertexColors:!!r.attributes.color,hasVertexTangents:!!r.attributes.tangent,normalType:u?q.Attribute:q.ScreenDerivative,castShadows:!0,receiveShadows:e.receiveShadows,receiveAmbientOcclusion:e.receiveAmbientOcclustion,textureId:A!=null?A.id:void 0,colorMixMode:e.colorMixMode,normalTextureId:e.textureNormal!=null&&s?i.get(e.textureNormal).id:void 0,textureAlphaPremultiplied:A!=null&&!!A.parameters.preMultiplyAlpha,occlusionTextureId:e.textureOcclusion!=null&&s?i.get(e.textureOcclusion).id:void 0,emissiveTextureId:e.textureEmissive!=null&&s?i.get(e.textureEmissive).id:void 0,metallicRoughnessTextureId:e.textureMetallicRoughness!=null&&s?i.get(e.textureMetallicRoughness).id:void 0,emissiveFactor:[b,X,Y],mrrFactors:N?me:[e.metallicFactor,e.roughnessFactor,o.mrrFactors[2]],isSchematic:N,colorTextureTransformMatrix:M(e.colorTextureTransform),normalTextureTransformMatrix:M(e.normalTextureTransform),scale:[P[0],P[1]],occlusionTextureTransformMatrix:M(e.occlusionTextureTransform),emissiveTextureTransformMatrix:M(e.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:M(e.metallicRoughnessTextureTransform),...c},l))}const x=d.get(a);if(n.stageResources.materials.push(x),s){const m=g=>{g!=null&&n.stageResources.textures.push(i.get(g))};m(e.textureColor),m(e.textureNormal),m(e.textureOcclusion),m(e.textureEmissive),m(e.textureMetallicRoughness)}return x}function qe(t,r){const n=t.attributes.position.count,o=Ce(t.indices||n,t.primitiveType),c=O(3*n),{typedBuffer:d,typedBufferStride:i}=t.attributes.position;he(c,d,t.transform,3,i);const l=[[v.POSITION,new B(c,o,3,!0)]];if(t.attributes.normal!=null){const e=O(3*n),{typedBuffer:s,typedBufferStride:u}=t.attributes.normal;xe($,t.transform),pe(e,s,$,3,u),U($)&&D(e,e),l.push([v.NORMAL,new B(e,o,3,!0)])}if(t.attributes.tangent!=null){const e=O(4*n),{typedBuffer:s,typedBufferStride:u}=t.attributes.tangent;ge($,t.transform),_e(e,s,$,4,u),U($)&&D(e,e,4),l.push([v.TANGENT,new B(e,o,4,!0)])}if(t.attributes.texCoord0!=null){const e=O(2*n),{typedBuffer:s,typedBufferStride:u}=t.attributes.texCoord0;Ie(e,s,2,u),l.push([v.UV0,new B(e,o,2,!0)])}const a=t.attributes.color;if(a!=null){const e=new Uint8Array(4*n);a.elementCount===4?a instanceof be?z(e,a,255):a instanceof Q?Le(e,a):a instanceof Te&&z(e,a,1/256):(e.fill(255),a instanceof J?G(e,a.typedBuffer,255,4,a.typedBufferStride):t.attributes.color instanceof ye?Re(e,a.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof $e&&G(e,a.typedBuffer,1/256,4,a.typedBufferStride)),l.push([v.COLOR,new B(e,o,4,!0)])}return{geometry:new we(r,l),vertexCount:n}}const $=K();function Ue(t){switch(t){case"BLEND":return S.Blend;case"MASK":return S.Mask;case"OPAQUE":case null:case void 0:return S.Opaque}}function De(t,r){for(let n=0;n<t.model.lods.length;++n){const o=t.model.lods[n];for(const c of o.parts){const d=c.attributes.normal;if(d==null)return;const i=c.attributes.position,l=i.count,a=C(),e=C(),s=C(),u=new Uint8Array(4*l),f=new Float64Array(3*l),x=ve(Be(),c.transform);let h=0,p=0;for(let m=0;m<l;m++){i.getVec(m,e),d.getVec(m,a),H(e,e,c.transform),Me(s,e,r.center),W(s,s,r.radius);const g=s[2],T=Se(s),b=Math.min(.45+.55*T*T,1);W(s,s,r.radius),x!==null&&H(s,s,x),Ae(s,s),n+1!==t.model.lods.length&&t.model.lods.length>1&&Ee(s,s,a,g>-1?.2:Math.min(-4*g-3.8,1)),f[h]=s[0],f[h+1]=s[1],f[h+2]=s[2],h+=3,u[p]=255*b,u[p+1]=255*b,u[p+2]=255*b,u[p+3]=255,p+=4}c.attributes.normal=new J(f),c.attributes.color=new Q(u)}}}const Qe=Object.freeze(Object.defineProperty({__proto__:null,fetch:ke,parseUrl:Z},Symbol.toStringTag,{value:"Module"}));export{ke as e,Qe as o,M as s};
