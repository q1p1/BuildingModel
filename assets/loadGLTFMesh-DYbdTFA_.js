import{n6 as P,l9 as L,n7 as B,e as D,U as z,bE as _,$ as C,n8 as G,hP as N,hZ as E,n9 as U,hR as R,na as K,nb as q,hT as Q,lh as F,li as j,lj as V,ll as S,hN as I,nc as A,nd as Z,ln as k,h3 as h,bm as H,bK as J,hO as W,mB as X,g2 as Y}from"./index-DVfovSRj.js";import{w as ee,m as te,f as ne,c as re}from"./MeshComponent-B15DCYE8.js";import{p as oe}from"./MeshVertexAttributes-CLKeeZ0j.js";import{f as se,o as ae,u as M}from"./vec4-DWHsN37y.js";import{loadGLTF as le}from"./loader-PlrgwcVJ.js";import{a as ue,f as b,b as ie,l as ce,e as fe,o as me}from"./DefaultMaterial_COLOR_GAMMA-DloQH7WJ.js";import{B as pe}from"./vertexSpaceConversion-DYW9YSDj.js";import{r as de}from"./resourceUtils-COywhXb3.js";import"./meshProperties-C4iW0Ukm.js";function xe(e,n,t){const i=e.typedBuffer,o=e.typedBufferStride,a=n.typedBuffer,c=n.typedBufferStride,u=t?t.count:n.count;let s=((t==null?void 0:t.dstIndex)??0)*o,m=((t==null?void 0:t.srcIndex)??0)*c;for(let l=0;l<u;++l){for(let r=0;r<9;++r)i[s+r]=a[m+r];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function ge(e,n,t){const i=e.typedBuffer,o=e.typedBufferStride,a=n.typedBuffer,c=n.typedBufferStride,u=t?t.count:n.count;let s=((t==null?void 0:t.dstIndex)??0)*o,m=((t==null?void 0:t.srcIndex)??0)*c;for(let l=0;l<u;++l){for(let r=0;r<16;++r)i[s+r]=a[m+r];s+=o,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function $(e,n){return new e(new ArrayBuffer(n*e.ElementCount*P(e.ElementType)))}async function Le(e,n,t){const i=new L($e(t)),o=(await le(i,n,t,!0)).model,a=o.lods.shift(),c=new Map,u=new Map;o.textures.forEach((g,T)=>c.set(T,he(g))),o.materials.forEach((g,T)=>u.set(T,be(g,c)));const s=Te(a);for(const g of s.parts)we(s,g,u);const{position:m,normal:l,tangent:r,color:f,texCoord0:p}=s.vertexAttributes,d=B(e,t),w=e.spatialReference.isGeographic?B(e):d,v=pe({vertexAttributes:{position:m.typedBuffer,normal:l==null?void 0:l.typedBuffer,tangent:r==null?void 0:r.typedBuffer},vertexSpace:w,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:t!=null&&t.unitConversionDisabled?void 0:"meters"});if(!v)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${w.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new oe({...v,color:f==null?void 0:f.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function $e(e){const n=e==null?void 0:e.resolveFile;return n?{busy:!1,request:async(t,i,o)=>{const a=(n==null?void 0:n(t))??t;return(await z(a,{responseType:i==="image"?"image":i==="binary"||i==="image+type"?"array-buffer":"json",signal:o==null?void 0:o.signal,timeout:0})).data}}:null}function y(e,n){if(e==null)return"-";const t=e.typedBuffer;return`${_(n,t.buffer,()=>n.size)}/${t.byteOffset}/${t.byteLength}`}function ye(e){return e!=null?e.toString():"-"}function Te(e){let n=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,o=new Map,a=[];for(const c of e.parts){const{attributes:{position:u,normal:s,color:m,tangent:l,texCoord0:r}}=c,f=`
      ${y(u,i)}/
      ${y(s,i)}/
      ${y(m,i)}/
      ${y(l,i)}/
      ${y(r,i)}/
      ${ye(c.transform)}
    `;let p=!1;const d=_(o,f,()=>(p=!0,{start:n,length:u.count}));p&&(n+=u.count),s&&(t.normal=!0),m&&(t.color=!0),l&&(t.tangent=!0),r&&(t.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:d})}return{vertexAttributes:{position:$(W,n),normal:t.normal?$(I,n):null,tangent:t.tangent?$(F,n):null,color:t.color?$(j,n):null,texCoord0:t.texCoord0?$(X,n):null},parts:a,components:[]}}function he(e){return new ee({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function be(e,n){const t=new C(Ee(e.color,e.opacity)),i=e.emissiveFactor?new C(Re(e.emissiveFactor)):null,o=a=>a?new re({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:Y(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new te({color:t,colorTexture:n.get(e.textureColor),normalTexture:n.get(e.textureNormal),emissiveColor:i,emissiveTexture:n.get(e.textureEmissive),occlusionTexture:n.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:n.get(e.textureMetallicRoughness),colorTextureTransform:o(e.colorTextureTransform),normalTextureTransform:o(e.normalTextureTransform),occlusionTextureTransform:o(e.occlusionTextureTransform),emissiveTextureTransform:o(e.emissiveTextureTransform),metallicRoughnessTextureTransform:o(e.metallicRoughnessTextureTransform)})}function we(e,n,t){n.writeVertices&&ve(e,n);const{indices:i,attributes:o,primitiveType:a,material:c}=n.gltf;let u=ue(i||o.position.count,a);const s=n.region.start;if(s){const m=new Uint32Array(u);for(let l=0;l<u.length;l++)m[l]+=s;u=m}e.components.push(new ne({name:n.gltf.name,faces:u,material:t.get(c),shading:o.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,n){const{position:t,normal:i,tangent:o,color:a,texCoord0:c}=e.vertexAttributes,u=n.region.start,{attributes:s,transform:m}=n.gltf,l=s.position.count;if(G(t.slice(u,l),s.position,m),s.normal!=null&&i!=null){const r=N(E(),m),f=i.slice(u,l);U(f,s.normal,r),R(r)&&K(f,f)}else i!=null&&q(i,0,0,1,{dstIndex:u,count:l});if(s.tangent!=null&&o!=null){const r=Q(E(),m),f=o.slice(u,l);se(f,s.tangent,r),R(r)&&ae(f,f)}else o!=null&&b(o,0,0,1,1,{dstIndex:u,count:l});if(s.texCoord0!=null&&c!=null?ie(c.slice(u,l),s.texCoord0):c!=null&&ce(c,0,0,{dstIndex:u,count:l}),s.color!=null&&a!=null){const r=s.color,f=a.slice(u,l);if(r.elementCount===4)r instanceof F?M(f,r,255):r instanceof j?fe(f,r):r instanceof V&&M(f,r,1/256);else{b(f,255,255,255,255);const p=S.fromTypedArray(f.typedBuffer,f.typedBufferStride);r instanceof I?A(p,r,255):r instanceof S?Z(p,r):r instanceof k&&A(p,r,1/256)}}else a!=null&&b(a.slice(u,l),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:O(e.s),vertical:O(e.t)}}function O(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function x(e){return e**(1/me)*255}function Ee(e,n){return H(x(e[0]),x(e[1]),x(e[2]),n)}function Re(e){return J(x(e[0]),x(e[1]),x(e[2]))}export{Le as loadGLTFMesh};
