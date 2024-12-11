const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngine-BqrDvODV.js","assets/index-pOkNMSkH.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-DoSLH1OJ.js"])))=>i.map(i=>d[i]);
import{r as u,m as p,cR as ye,a as q,ca as J,b as U,aY as he,_ as ge,hL as fe,hF as me,b8 as Z,av as z,cT as Ee,cU as H,mJ as we,mK as Se,gk as _e,al as be,d8 as Ie,bl as ie,eC as ve,cl as Fe,iv as Re,hy as xe,z as Oe,am as $e,bK as T,hU as N,dz as D,cK as k,cO as L,ac as Qe,u as je,ap as Me,e as Y,aS as Ce,kF as Te,eS as Ne,aj as W,ce as De,b5 as ke,gY as Ge,mL as Ae}from"./index-pOkNMSkH.js";import{a as Q,n as X,b as ee}from"./TemporalSceneLayerView-BMHdp2l6.js";import{Z as Je}from"./WhereClause-CWSSxvZz.js";import{a as A}from"./RenderTexture-Bs_I1eXQ.js";import{W as Ve,D as Ke,Q as te}from"./I3SUtil-BsLhCnbL.js";import{V as Pe}from"./QueryEngine-DKaKoETR.js";import{n as Le}from"./centroid-DdLmOD72.js";import{o as C}from"./I3SMeshView3D-1jEi2yVJ.js";const oe="esri.views.3d.layers.i3s.I3SMeshViewFilter",j=()=>Oe.getLogger(oe);let g=class extends U{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){he(()=>{var t;return((t=this.viewFilter)==null?void 0:t.geometry)||this.layerFilter!=null}).then(()=>this.loadAsyncModule(ge(()=>import("./geometryEngine-BqrDvODV.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){var e;if(((e=this.viewFilter)==null?void 0:e.objectIds)==null)return null;const t=fe(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){var e;const t=(e=this.viewFilter)==null?void 0:e.where;if(t==null||!t)return null;try{return Je.create(t,{fieldsIndex:this.layerFieldsIndex})}catch(r){j().error(`Failed to parse filter where clause: ${r}`)}return null}addFilters(t,e,r,s){var l;const n=this.sortedObjectIds;n!=null&&t.push(c=>Ve(n,!0,c)),this.addSqlFilter(t,this.parsedWhereClause),this.addTimeFilter(t,(l=this.viewFilter)==null?void 0:l.timeExtent);const i=Q(this._layerMaskGeometries),o=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&o!=null){const c=this.layerFilter.spatialRelationship;t.push((h,d)=>ne(o,h,d,s,e,r,i,c))}const a=Q(this._viewMaskGeometries);if(a!=null&&this.viewFilter!=null&&o!=null){const c=this.viewFilter.spatialRelationship;t.push((h,d)=>ne(o,h,d,s,e,r,a,c))}}isMBSGeometryVisible(t,e,r){const s=Q(this._layerMaskGeometries),n=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&n!=null){const o=this.layerFilter.spatialRelationship,a=s[0].spatialReference||e;return A(t,r,M,a)?re(n,M,s,a,o):(j().warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const i=Q(this._viewMaskGeometries);if(i!=null&&this.viewFilter!=null&&n!=null){const o=this.viewFilter.spatialRelationship,a=i[0].spatialReference||e;return A(t,r,M,a)?re(n,M,i,a,o):(j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=Q(this._viewMaskGeometries),e=Q(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?X:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return X;const{distance:e,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return G(this._geometryEngine,n,s);const i=r||me(n.spatialReference);if(n.spatialReference.isWGS84){const l=this._geometryEngine.geodesicBuffer(n,e,i);return G(this._geometryEngine,l,s)}const o=Z(n,z.WGS84);if(o!=null){const l=Z(this._geometryEngine.geodesicBuffer(o,e,i),n.spatialReference);return G(this._geometryEngine,l,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Ee().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let a=null;try{a=H(n,z.WGS84)}catch{}if(a)try{a=H(this._geometryEngine.geodesicBuffer(a,e,i),n.spatialReference)}catch{a=null}return a||j().error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),G(this._geometryEngine,a,s)}get updating(){return ee(this._layerMaskGeometries)||ee(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(!!We(t.spatialRelationship)||(j().warn(`Filters with spatialRelationship other than ${ae.join(", ")} are not supported for mesh scene layers`),!1))}};u([p()],g.prototype,"layerFilter",void 0),u([p({type:ye})],g.prototype,"viewFilter",void 0),u([p()],g.prototype,"layerFieldsIndex",void 0),u([p()],g.prototype,"loadAsyncModule",void 0),u([p()],g.prototype,"addSqlFilter",void 0),u([p()],g.prototype,"addTimeFilter",void 0),u([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),u([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),u([p({readOnly:!0})],g.prototype,"parsedGeometry",null),u([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),u([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),u([p()],g.prototype,"updating",null),u([p()],g.prototype,"_projectionEngineLoaded",void 0),u([p()],g.prototype,"_geometryEngine",void 0),g=u([q(oe)],g);const ae=(t=>t)(["contains","intersects","disjoint"]);function We(t){return t!=null&&ae.includes(t)}var y;function G(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const s=e.rings.length,n=e.spatialReference,i=new Array(s);for(let l=0;l<s;++l){const c=we(1/0,1/0,-1/0,-1/0);Se(c,e.rings[l]),i[l]={type:"polygon",rings:[e.rings[l]],spatialReference:n,cache:{},aabr:c}}i.sort((l,c)=>l.aabr[0]-c.aabr[0]);const o=new Set,a=new $e;for(let l=0;l<i.length;++l){const c=i[l],h=c.aabr[0];o.forEach(d=>{if(h>=d.aabr[2])return void o.delete(d);if(c.aabr[1]>d.aabr[3]||c.aabr[3]<d.aabr[1]||!t.intersects(c,d))return;c.rings=c.rings.concat(d.rings),_e(c.aabr,d.aabr,c.aabr),c.cache={},o.delete(d);const m=be(i,d,i.length,a);i.splice(m,1)}),o.add(c)}for(const l of i)l.aabr=void 0;return i}return[e]}function re(t,e,r,s,n){if(e[3]>=.5*(e[2]+Ie(s).radius))return!0;const i=le(t,e,s);return r.every(o=>ce(t,o,i,n)!==y.DISCARD)}function ne(t,e,r,s,n,i,o,a){const l=o[0].spatialReference||n.spatialReference;if(!A(r.node.serviceMbsInIndexSR,i,M,l))return void j().warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const c=le(t,M,l),h=Be(a,n,l,s,r.objectHandle);for(const d of o){if(e.length===0)return;switch(ce(t,d,c,a)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}Ke(e,r.featureIds,m=>qe(t,d,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const M=ie(0,0,0,0);function Be(t,e,r,s,n){const i=e.renderSpatialReference,o=new Map,a={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};a.rings[0][3]=a.rings[0][0];const l={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let c,h;switch(t){case"intersects":c=(d,m,b)=>d.intersects(m,b)?y.KEEP:y.TEST,h=B;break;case"contains":c=(d,m,b)=>d.contains(m,b)?y.TEST:y.DISCARD,h=B;break;default:c=(d,m,b)=>d.disjoint(m,b)?y.TEST:y.DISCARD,h=ue}return{collection:s,object:n,type:t,maskSR:r,renderSR:i,aabbCache:o,triangle:a,positions:l,triangleTest:c,geometryTest:h}}function le(t,e,r){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!ve(r)&&!Fe(r),i=Number.isNaN(e[3])?0:Re(e[3],0,2*xe.radius),o=n?t.buffer(s,i,1):t.geodesicBuffer(s,i,1);return o.type="polygon",o}function ce(t,e,r,s){switch(s){case"intersects":case"contains":return B(t,e,r);case"disjoint":return ue(t,e,r)}}function B(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ue(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function qe(t,e,r,s){const{collection:n,object:i,renderSR:o,maskSR:a,geometryTest:l,aabbCache:c}=s;let h=c.get(r);if(!h){const I=n.getObjectTransform(i);n.getComponentAabb(i,r,_);const E=[T(_[0],_[1],0),T(_[0],_[4],0),T(_[3],_[4],0),T(_[3],_[1],0)];for(let f=0;f<4;++f)N(E[f],E[f],I.rotationScale),D(E[f],E[f],I.position),k(E[f],o,E[f],a);h={type:"polygon",rings:[E],spatialReference:a,cache:{}},h.rings[0][4]=h.rings[0][0],c.set(r,h)}switch(l(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:d,triangleTest:m,positions:b}=s,F=d.rings[0][0],R=d.rings[0][1],x=d.rings[0][2],$=n.getObjectTransform(i);n.getComponentPositions(i,r,b);const{indices:V,data:S,stride:K,startIndex:de,endIndex:pe}=b;for(let I=de;I<pe;I+=3){const E=K*V[I],f=K*V[I+1],P=K*V[I+2];switch(L(F,S[E],S[E+1],S[E+2]),L(R,S[f],S[f+1],S[f+2]),L(x,S[P],S[P+1],S[P+2]),N(F,F,$.rotationScale),N(R,R,$.rotationScale),N(x,x,$.rotationScale),D(F,F,$.position),D(R,R,$.position),D(x,x,$.position),k(F,o,F,a),k(R,o,R,a),k(x,o,x,a),m(t,e,d)){case y.DISCARD:return!1;case y.KEEP:return!0}}return s.type!=="intersects"}const _=J(),Ue=Pe;let v=class extends U{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Qe({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e)}initialize(){this.addHandles(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=je(this._dataQueryEngineInstance),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:s,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:s,extent:Me.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new Y("unsupported-query","returnGeometry is not supported when querying a mesh scene layer view, it is only supported when directly querying a scene layer");if(s.returnCentroid)throw new Y("unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(s,r),i=Ce.fromJSON(n);return i.features.forEach(o=>o.geometry=null),i}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var l;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||Te,r="esriGeometryPolygon",s=((l=this.layer.fieldsIndex)==null?void 0:l.toJSON())||new Ne([]),n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),o=this.priority,a=this.spatialIndex;return this._dataQueryEngineInstance=new Ue({hasZ:!0,hasM:!1,geometryType:r,fieldsIndex:s,timeInfo:null,spatialReference:i,objectIdField:e,featureStore:a,scheduler:n,priority:o}),this._dataQueryEngineInstance}};u([p({constructOnly:!0})],v.prototype,"layerView",void 0),u([p({constructOnly:!0})],v.prototype,"priority",void 0),u([p({constructOnly:!0})],v.prototype,"spatialIndex",void 0),u([p()],v.prototype,"spatialReference",null),u([p()],v.prototype,"layer",null),u([p()],v.prototype,"defaultQueryJSON",null),v=u([q("esri.views.3d.layers.i3s.I3SQueryEngine")],v);class at{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){var o;const{meta:r,index:s}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=(o=r.attributeInfo)==null?void 0:o.attributeData;if(i!=null)for(const a of Object.keys(i))n[a]=te(i[a],s);return n}getAttribute(e,r){var o;if(r===this._objectIdField)return e.id;const{meta:s,index:n}=e,i=(o=s.attributeInfo)==null?void 0:o.attributeData;return i!=null?te(i[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,s,n,i,o]=this._getFeatureExtent(e,se);return new W([5],[r,s,n,i,s,n,i,o,n,r,o,n,r,s,n])}getCentroid(e,r){if(e.geometry)return Le(new W,e.geometry,r.hasZ,r.hasM);const[s,n,i,o,a,l]=this._getFeatureExtent(e,se);return new W([0],[(s+o)/2,(n+a)/2,(i+l)/2])}cloneWithGeometry(e,r){const{id:s,index:n,meta:i}=e;return{id:s,index:n,meta:i,geometry:r}}}const se=J(),Ze=J();let O=class extends U{constructor(t){super(t),this.events=new ke}forEach(t){this.forAllFeatures(e=>(t(e),C.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const s of t)e(r(s,Ze))}forEachInBounds(t,e){this.forAllFeatures(r=>{const s=this.getFeatureExtent(r,ze);return Ge(t,Ae(s,He))&&e(r),C.CONTINUE},r=>{if(A(r.node.serviceMbsInIndexSR,this.sourceSpatialReference,w,this.viewSpatialReference),w[0]>=t[0]&&w[2]<=t[2]&&w[1]>=t[1]&&w[3]<=t[3])return C.CONTINUE;const s=Math.max(t[0],Math.min(w[0],t[2])),n=Math.max(t[1],Math.min(w[1],t[3])),i=w[0]-s,o=w[1]-n;return i*i+o*o<=w[3]*w[3]?C.CONTINUE:C.SKIP})}};u([p({constructOnly:!0})],O.prototype,"featureAdapter",void 0),u([p({constructOnly:!0})],O.prototype,"forAllFeatures",void 0),u([p({constructOnly:!0})],O.prototype,"getFeatureExtent",void 0),u([p({constructOnly:!0})],O.prototype,"sourceSpatialReference",void 0),u([p({constructOnly:!0})],O.prototype,"viewSpatialReference",void 0),O=u([q("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],O);const w=ie(0,0,0,0),ze=J(),He=De();export{g as P,v as d,O as h,at as o};
