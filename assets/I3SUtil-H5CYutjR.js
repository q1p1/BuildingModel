import{bM as z,h7 as B,d8 as H,bT as A,bH as b,ce as D,h8 as Y,fd as Z,U as Q,h9 as V,ha as X,H as ee,hb as te,e as S,hc as ne,ac as re,av as G,J as oe,cF as O,hd as ae,he as W,hf as se,bS as ie,ch as _,cO as le,cK as F,g3 as I,hg as N,gY as ce,hh as ue,hi as fe,dr as he}from"./index-DVfovSRj.js";import{I as de}from"./I3SBinaryReader-DEHIFloP.js";function pe(e,t,n,r,o){const a=n==="east-north-up"?z(e):ye(e,t,r),s=A();return B(r,a,s,o),s}const P=1,L=5-P;function ye(e,t,n){const r=b(),o=e[3],a=2**(Math.ceil(Math.log(o)*Math.LOG2E/L)*L+P);if(n.isGeographic){const c=a/H(n).radius*180/Math.PI,l=Math.round(e[1]/c),p=Math.max(-90,Math.min(90,l*c)),f=c/Math.cos((Math.abs(p)-c/2)/180*Math.PI),y=Math.round(e[0]/f)*f;r[0]=y,r[1]=p}else{const c=Math.round(e[0]/a),l=Math.round(e[1]/a);r[0]=c*a,r[1]=l*a}const s=e[2]+t,i=Math.round(s/a);return r[2]=i*a,r}function J(e){return e?parseInt(e.slice(e.lastIndexOf("/")+1),10):void 0}function Fe(e){var t;if(ee("disable-feature:i3s-draco")||!e)return!1;for(const n of e)for(const r of n.geometryBuffers)if(((t=r.compressedAttributes)==null?void 0:t.encoding)==="draco")return!0;return!1}function Le(e,t,n,r){n.traverse(t,o=>{const a=o.serviceMbsInIndexSR;return(a!=null&&me(e,a))!==w.OUTSIDE&&(r(o),!0)})}function Ke(e,t,n){let r=0,o=0;for(let a=0;a<t.length&&r<e.length;a++)e[r]===t[a]&&(n(a)&&(e[o]=e[r],o++),r++);e.length=o}function qe(e,t,n){let r=0,o=0;for(;r<n.length;)te(e,n[r])>=0===t&&(n[o]=n[r],o++),r++;n.length=o}const T=D();function Ae(e,t){if(t.rotationScale[1]===0&&t.rotationScale[2]===0&&t.rotationScale[3]===0&&t.rotationScale[5]===0&&t.rotationScale[6]===0&&t.rotationScale[7]===0)return T[0]=(e[0]-t.position[0])/t.rotationScale[0],T[1]=(e[1]-t.position[1])/t.rotationScale[4],T[2]=(e[2]-t.position[0])/t.rotationScale[0],T[3]=(e[3]-t.position[1])/t.rotationScale[4],T}var w;function me(e,t){const n=t[0],r=t[1],o=t[3],a=e[0]-n,s=n-e[2],i=e[1]-r,c=r-e[3],l=Math.max(a,s,0),p=Math.max(i,c,0),f=l*l+p*p;return f>o*o?w.OUTSIDE:f>0?w.INTERSECTS_CENTER_OUTSIDE:-Math.max(a,s,i,c)>o?w.INSIDE:w.INTERSECTS_CENTER_INSIDE}function ge(e,t,n){const r=[],o=n==null?void 0:n.missingFields,a=n==null?void 0:n.originalFields;for(const s of e){const i=s.toLowerCase();let c=!1;for(const l of t)if(i===l.name.toLowerCase()){r.push(l.name),c=!0,a&&a.push(s);break}!c&&o&&o.push(s)}return r}async function Ge(e,t,n,r,o,a){if(t.length===0)return[];const s=e.attributeStorageInfo;if(e.associatedLayer!=null)try{return await Se(e.associatedLayer,t,n,r,a)}catch(i){if(e.associatedLayer.loaded)throw i}if(s){const i=be(t,n,o);if(i==null)throw new S("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const c=e.parsedUrl.path;return(await Promise.all(i.map(l=>we(c,s,l.node,l.indices,r,e.apiKey,e.customParameters,a).then(p=>{for(let f=0;f<l.graphics.length;f++){const y=l.graphics[f],m=p[f];if(y.attributes)for(const u in y.attributes)u in m||(m[u]=y.attributes[u]);y.attributes=m}return l.graphics})))).flat()}throw new S("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function be(e,t,n){const r=new Map,o=[],a=n();for(const s of e){const i=s.attributes[t];for(let c=0;c<a.length;c++){const l=a[c],p=l.featureIds.indexOf(i);if(p>=0){let f=r.get(l.node);f||(f={node:l.node,indices:[],graphics:[]},o.push(f),r.set(l.node,f)),f.indices.push(p),f.graphics.push(s);for(let y=c;y>0;y--)a[y]=a[y-1];a[0]=l;break}}}return o}async function Se(e,t,n,r,o){t.sort((l,p)=>l.attributes[n]-p.attributes[n]);const a=t.map(l=>l.attributes[n]),s=[],i=ge(r,e.fields,{originalFields:s}),c=await j(e,a,i,o);for(let l=0;l<t.length;l++){const p=t[l],f=c[l],y={};if(p.attributes)for(const m in p.attributes)y[m]=p.attributes[m];for(let m=0;m<s.length;m++)y[s[m]]=f[i[m]];p.attributes=y}return t}function j(e,t,n,r){const o=e.capabilities.query.maxRecordCount;if(o!=null&&t.length>o){const s=ne(t,o);return Promise.all(s.map(i=>j(e,i,n,r))).then(i=>i.flat())}const a=new re({objectIds:t,outFields:n,orderByFields:[e.objectIdField]});return e.queryFeatures(a,r).then(s=>{if(s&&s.features&&s.features.length===t.length)return s.features.map(i=>i.attributes);throw new S("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")})}function we(e,t,n,r,o,a,s,i){return Ie(e,t,n.resources.attributes,r,o,a,s,i)}async function Ie(e,t,n,r,o,a,s,i){const c=[];for(const f of t)if(f&&o.includes(f.name)){const y=`${e}/nodes/${n}/attributes/${f.key}/0`;c.push({url:y,storageInfo:f})}const l=await Promise.allSettled(c.map(f=>Q(f.url,{responseType:"array-buffer",query:{...s,token:a},signal:i==null?void 0:i.signal}).then(y=>de(f.storageInfo,y.data)))),p=[];for(const f of r){const y={};for(let m=0;m<l.length;m++){const u=l[m];if(u.status==="fulfilled"){const h=u.value;y[c[m].storageInfo.name]=Ee(h,f)}}p.push(y)}return p}(function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"})(w||(w={}));const Te=-32768,Me=-(2**31);function Ee(e,t){if(!e)return null;const n=e[t];return V(e)?n===Te?null:n:X(e)?n===Me?null:n:n!=n?null:n}function ve(e){const t=e.store,n=t.indexCRS||t.geographicCRS,r=n===void 0?t.indexWKT:void 0;if(r){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new G(J(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function Re(e){const t=e.store,n=t.vertexCRS||t.projectedCRS,r=n===void 0?t.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new S("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new S("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const o=n?new G(J(n)):e.spatialReference;return o.equals(e.spatialReference)?e.spatialReference:o}function U(e,t,n){if(!oe(e,t))throw O("scene layer",e==null?void 0:e.wkid,t==null?void 0:t.wkid);if(n==="local"&&!xe(e,t))throw O("scene layer",e==null?void 0:e.wkid,t==null?void 0:t.wkid)}function Pe(e,t,n){var r,o,a,s;if(((r=e.serviceUpdateTimeStamp)==null?void 0:r.lastUpdate)!==((o=t.serviceUpdateTimeStamp)==null?void 0:o.lastUpdate)||!n.isEmpty||((a=e.associatedLayer)==null?void 0:a.url)!==((s=t.associatedLayer)==null?void 0:s.url))throw new S("layerview:recycle-failed")}function xe(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function $e(e,t,n){const r=ve(e),o=Re(e);U(r,t,n),U(o,t,n)}function Ce(e){var t;return(e.geometryType==null||e.geometryType==="triangles")&&(e.topology==null||e.topology==="PerAttributeArray")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function Je(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ce(e.store.defaultGeometrySchema))throw new S("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function je(e,t){$e(e,t.spatialReference,t.viewingMode)}function Ne(e){var t;return e.geometryType!=null&&e.geometryType==="points"&&(e.topology==null||e.topology==="PerAttributeArray")&&(e.encoding==null||e.encoding===""||e.encoding==="lepcc-xyz")&&((t=e.vertexAttributes)==null?void 0:t.position)!=null}function ze(e){var t;if(((t=e.store)==null?void 0:t.defaultGeometrySchema)==null||!Ne(e.store.defaultGeometrySchema))throw new S("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function Be(e,t){U(e.spatialReference,t.spatialReference,t.viewingMode)}function ke(e){return e.type==="simple"||e.type==="class-breaks"||e.type==="unique-value"}function Ue(e){return e.type==="mesh-3d"}function He(e){var n;if(e==null||!ke(e)||(e.type==="unique-value"||e.type==="class-breaks")&&e.defaultSymbol==null)return!0;const t=e.getSymbols();if(t.length===0)return!0;for(const r of t){if(!Ue(r)||r.symbolLayers.length===0)return!0;for(const o of r.symbolLayers.items)if(o.type!=="fill"||((n=o.material)==null?void 0:n.color)==null||o.material.colorMixMode!=="replace")return!0}return!1}const Ye=Y({color:[0,0,0,0],opacity:0});class De{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function Ze(e){const t=new De;let n=!1,r=!1;for(const o of e.symbolLayers.items)if(o.type==="fill"&&o.enabled){const a=o.material,s=o.edges;if(a!=null&&!n){const i=a.color,c=ae(a.colorMixMode);t.material=i!=null?{color:[i.r/255,i.g/255,i.b/255],alpha:i.a,colorMixMode:c}:{color:[1,1,1],alpha:1,colorMixMode:W.Multiply},t.castShadows=o.castShadows,n=!0}s==null||r||(t.edgeMaterial=se(s,{}),r=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:W.Multiply}),t}function Qe(e,t){return(0|e)+(0|t)|0}function Ve(e,t,n,r,o,a,s){if(!a||a.length===0||t==null||!e.serviceMbsInIndexSR)return null;const i=pe(e.serviceMbsInIndexSR,o,"none",n,t);ie(R,i);let c=null;const l=()=>{if(!c)if(c=Oe,_(v),e.serviceObbInIndexSR!=null){e.serviceObbInIndexSR.transform(K,n,t,o,s),K.getCorners(c);for(const u of c)I(u,u,R),N(v,u)}else{const u=e.serviceMbsInIndexSR;if(!u)return;const h=u[3];F(fe(u),n,d,t),I(d,d,R),d[2]+=o;for(let g=0;g<8;++g){const M=1&g?h:-h,x=2&g?h:-h,$=4&g?h:-h,E=c[g];he(E,[d[0]+M,d[1]+x,d[2]+$]),N(v,E)}}};let p=1/0,f=-1/0;const y=u=>{if(u.type!=="replace")return;const h=u.geometry;if(!(h!=null&&h.hasZ))return;_(k);const g=h.spatialReference||r,M=h.rings.reduce((x,$)=>$.reduce((E,C)=>(le(d,C[0],C[1],C[2]),F(d,g,d,t),I(d,d,R),N(k,d),Math.min(d[2],E)),x),1/0);l(),ce(v,k)&&(p=Math.min(p,M),f=Math.max(f,M))};if(a.forEach(u=>y(u)),p===1/0)return null;const m=(u,h,g)=>{I(d,g,i),u[h]=d[0],u[h+1]=d[1],u[h+2]=d[2],h+=24,g[2]=p,I(d,g,i),u[h]=d[0],u[h+1]=d[1],u[h+2]=d[2],h+=24,g[2]=f,I(d,g,i),u[h]=d[0],u[h+1]=d[1],u[h+2]=d[2]};for(let u=0;u<8;++u)m(q.data,3*u,c[u]);return ue(q)}function Xe(e){return e[3]>=0}function et(e){e!=null&&(e[3]=-1)}const Oe=[b(),b(),b(),b(),b(),b(),b(),b()],k=D(),v=D(),K=new Z,d=b(),q={data:new Array(72),size:3,exclusive:!0,stride:3},R=A();export{Ge as A,Ke as D,me as F,Re as H,U as J,ge as L,Le as N,Ae as O,Ee as Q,Ie as V,qe as W,Pe as X,ve as Z,He as c,Ve as d,$e as e,et as h,ze as i,Fe as k,Qe as m,pe as n,je as o,Ze as p,w as q,Je as r,Be as s,Ye as u,Xe as y};
