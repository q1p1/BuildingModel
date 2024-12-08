const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/geometryEngine-DIBGr4wh.js","assets/index-DVfovSRj.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-CZzecgLn.js"])))=>i.map(i=>d[i]);
import{bj as q,nk as V,nl as z,nm as C,ah as j,cD as G,r as p,a as $,m as y,E as K,P as B,b as P,fV as J,z as A,nn as H,no as Q,cU as W,cb as Y,J as X,aY as T,f as M,_ as Z,np as D,cS as ee,cT as te,R as re}from"./index-DVfovSRj.js";import{a as ne,n as ie,b as oe}from"./TemporalSceneLayerView-CLaWE3cK.js";import{y as se}from"./LayerView-Do2Sz7my.js";const le={setAttribute(){},rollback(){},commit(){}};var E;function be(e,t){const r=t.attributes[e.objectIdField];if(r==null)return le;const n=e.sessions.get(r);if(n)return n;const o=q(t.attributes),i=new Set,d=e.i3sOverrides.createInteractiveEditSession(r),u=new Map,s=(c,g)=>{const f=u.get(c);if(f==null){const m=g.indexOf(r);return u.set(c,m),m}return f};let a=E.EDITING;const l={setAttribute(c,g){if(a!==E.EDITING)return;const f=e.fieldsIndex.get(c);if(!f)return;const m=e.attributeStorageInfo.findIndex(F=>F.name===f.name);if(m<0)return;if(!(c in o))throw new Error(`Attribute "${c}" is not an attribute of the edited feature.`);d.setAttribute(m,g);const I=e.attributeStorageInfo[m];let b=!1;i.add(c),e.forEachNode((F,x)=>{const _=s(F,x);if(_===-1)return;const v=e.getAttributeData(F.index);if(v){const O=v[I.name];O&&(O[_]=g,e.setAttributeData(F.index,v,t),b=!0)}}),b&&e.clearMemCache()},rollback(){if(a===E.EDITING){for(const c of i)this.setAttribute(c,o[c]);d.remove(),a=E.ROLLED_BACK,e.sessions.delete(r)}},commit(){a===E.EDITING&&(d.remove(),a=E.COMMITTED,e.sessions.delete(r))}};return e.sessions.set(r,l),l}function ae(e,t,r){const{gidToFeatureInfo:n,oidToFeatureInfo:o,fieldsIndex:i,objectIdField:d,globalIdField:u,featureOrIdentifierList:s}=r;if(!r.featuresResolved&&s!=null){for(const a of s){const l={feature:null,oid:-1,gid:null};if("attributes"in a){l.feature=a;const c=a.attributes;if(c!=null)for(const g in c){if(l.oid!==-1&&l.gid!=null)break;const f=i.normalizeFieldName(g);f===d&&(l.oid=c[g]??-1),f===u&&(l.gid=c[g])}}else l.oid=a.objectId??-1,l.gid=a.globalId;l.gid!=null&&n.set(l.gid,l),l.oid!==-1&&o.set(l.oid,l)}r.featuresResolved=!0}return(e!==-1?o.get(e):null)??(t!=null?n.get(t):null)}function N(e,t,r,n,o=null,i=!0){const d=[],u={gidToFeatureInfo:new Map,oidToFeatureInfo:new Map,featuresResolved:r==null,fieldsIndex:e.fieldsIndex,objectIdField:e.objectIdField,globalIdField:e.globalIdField,featureOrIdentifierList:r};for(const s of t){if(s.error!=null)continue;const a=s.objectId??-1,l=s.globalId,c=(a===-1||i?ae(a,l,u):null)??{feature:null,oid:a,gid:l},g={oid:a===-1?c.oid:a,gid:l??c.gid,feature:c.feature,result:s};d.push(g);const f=g.gid?C(g.gid):null;if(g.oid===-1&&f!=null&&o!=null&&(g.oid=o.get(f)??-1),g.oid===-1&&f!=null){let m=n.get(f);m==null&&(m={gid:g.gid,edits:[]},n.set(f,m)),m.edits.push(g)}}return d}async function Fe(e,t){var d,u,s;const r=new Map,n=N(e,t.addedFeatures,(d=t.edits)==null?void 0:d.addFeatures,r),o=N(e,t.updatedFeatures,(u=t.edits)==null?void 0:u.updateFeatures,r),i=N(e,t.deletedFeatures,(s=t.edits)==null?void 0:s.deleteFeatures,r,t.globalIdToObjectId,!1);return r.size>0&&await de(e,r),{adds:n.filter(a=>a.oid!==-1),updates:o.filter(a=>a.oid!==-1),deletes:i.filter(a=>a.oid!==-1)}}async function de(e,t){const r=e.i3sOverrides.layer.associatedLayer;if((r==null?void 0:r.globalIdField)==null)return;const n=r.createQuery(),{objectIdField:o,globalIdField:i}=r;n.where=Array.from(t.values()).map(({gid:s})=>`${i}='${s}'`).join(" OR "),n.returnGeometry=!1,n.outFields=[o,i],n.cacheHint=!1;const d=await V(z(r,n));if(!d.ok)return;const u=d.value.features;for(const s of u){const a=s.attributes[i],l=s.attributes[o];if(a==null||l==null||l===-1)continue;const c=t.get(C(a));if(c!=null)for(const g of c.edits)g.oid=l}}function Ie(e,t){const r=new Map,n=o=>{for(const{oid:i,feature:d}of o){const u=d==null?void 0:d.geometry;(u==null?void 0:u.type)==="mesh"&&r.set(i,u)}};n(t.adds),n(t.updates);for(const o of t.deletes)r.set(o.oid,null);for(const[o,i]of r)e.i3sOverrides.updateGeometry(o,i)}function we(e,t){var g;const r=ce(e,t),n=ue(e,t);if(r.size===0&&n.size===0)return;const o=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)o.set(e.attributeStorageInfo[f].name,f);let i=!1;r.forEach((f,m)=>{const I=e.getAttributeData(m);let b=!1;f.forEach((F,x)=>{const _=I!=null?I[x]:null,v=o.get(x);for(const{featureIndex:O,value:L,featureId:k}of F)_&&(_[O]=L,b=!0,i=!0),e.i3sOverrides.updateAttributeValue(k,v,L)}),b&&e.setAttributeData(m,I,null)}),i&&e.clearMemCache();const{fieldsIndex:d,i3sOverrides:u,objectIdField:s,globalIdField:a}=e,l=(g=u.layer.associatedLayer)==null?void 0:g.infoFor3D,c=new Set(l?[...Object.values(l.assetMapFieldRoles),...Object.values(l.transformFieldRoles)]:[]);for(const[f,m]of n){u.featureAdded(f);const{attributes:I}=m;for(const b in I){if(b!==s&&b!==a&&c.has(b))continue;const F=d.normalizeFieldName(b),x=F!=null?o.get(F):null;if(x==null)continue;const _=I[b];u.updateAttributeValue(f,x,_)}}}function ue(e,t){var o;const r=new Map,n=t.adds;if(!n||n.length===0||e.globalIdField==null)return r;for(const i of n){const d=i.oid,u=i.feature;((o=u==null?void 0:u.geometry)==null?void 0:o.type)==="mesh"&&r.set(d,u)}return r}function ce(e,t){const r=t.updates;if(!r||r.length===0)return new R;const n=new R,o=new Map;for(let i=0;i<e.attributeStorageInfo.length;i++)o.set(e.attributeStorageInfo[i].name,i);return e.forEachNode((i,d)=>{for(const u of r){if(u.feature==null)continue;const s=u.feature,a=u.oid,l=d.indexOf(a);for(const c in s.attributes){const g=e.fieldsIndex.normalizeFieldName(c),f=fe(n,i.index,g),m=s.attributes[c];f.push({featureIndex:l,featureId:a,value:m})}}}),n}function fe(e,t,r){const n=ge(e,t),o=r!=null&&n.get(r);if(o)return o;const i=new Array;return n.set(r,i),i}function ge(e,t){const r=e.get(t);if(r)return r;const n=new pe;return e.set(t,n),n}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(E||(E={}));const pe=Map,R=Map;function Ee(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:t},requiredFields:r}=this;return e.outFields?j(t,[...G(t,e.outFields),...r]):j(t,r)}}}}const U=e=>{let t=class extends e{constructor(){super(...arguments),this._numUpdating=0}get updating(){return this._numUpdating>0}autoUpdateAsync(r,n){const o=J(async i=>{++this._numUpdating;try{const d=await i;this.destroyed||this._set(r,d)}catch{A.getLogger(this).warn(`Async update of "${String(r)}" failed. Async update functions should not throw exceptions.`)}--this._numUpdating});return K(n,o,B)}};return p([y({readOnly:!0})],t.prototype,"updating",null),p([y()],t.prototype,"_numUpdating",void 0),t=p([$("esri.core.AsyncUpdate")],t),t};let S=class extends U(P){};S=p([$("esri.core.AsyncUpdate")],S);let w=class extends U(P){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:t},rendererFields:r,labelingFields:n,viewFilterFields:o}=this;return j(e,[...t??[],...r??[],...n??[],...o??[]])}constructor(e){super(e)}initialize(){this.addHandles([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:t}=this.layer;return t?this._getFieldsAsync(r=>t.collectRequiredFields(r,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?this._getFieldsAsync(t=>H(t,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,mergedFilter:t}=this.layerView;return this._getFieldsAsync(r=>Q(r,e,t))})])}async _getFieldsAsync(e){const t=new Set;try{return await e(t),Array.from(t).sort()}catch(r){return A.getLogger(this).error(r),null}}};p([y()],w.prototype,"layerView",void 0),p([y()],w.prototype,"layer",null),p([y()],w.prototype,"requiredFields",null),p([y()],w.prototype,"rendererFields",void 0),p([y()],w.prototype,"labelingFields",void 0),p([y()],w.prototype,"viewFilterFields",void 0),w=p([$("esri.views.3d.layers.support.SceneLayerViewRequiredFields")],w);let h=class extends se{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return ne(this._layerFilter)}get _layerFilter(){var u;const e=(u=this.layer)==null?void 0:u.filter;if(e==null||e.geometries.length<1)return null;const t=this._geometryEngine;if(t==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return ie;const r=e.geometries.at(0).spatialReference,n=e.geometries.toArray().map(s=>{try{s=t.simplify(s)}catch{return A.getLogger(this).warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(s==null)return null;if(s.spatialReference.equals(r))return s;try{return W(s,r)}catch{return A.getLogger(this).warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(Y).sort((s,a)=>s.extent.xmin-a.extent.xmin),o=new Set,i=new Array,d=new Array;for(let s of n){const a=s.extent.xmin;if(i.length=0,o.forEach(l=>{if(a>=l.extent.xmax)return d.push(l),void o.delete(l);s.extent.ymin<=l.extent.ymax&&s.extent.ymax>=l.extent.ymin&&t.intersects(s,l)&&i.push(l)}),i.length>0){i.push(s);try{s=t.union(i)}catch{A.getLogger(this).warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}i.pop(),i.forEach(l=>o.delete(l))}o.add(s)}return o.forEach(s=>d.push(s)),d.length>0?{spatialRelationship:e.spatialRelationship,geometries:d}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const t=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:r})=>!r.equals(t)&&!X(r,t))}get layerFilterUpdating(){return oe(this._layerFilter)}initialize(){const{signal:e}=this._abortController;T(()=>{var t,r,n;return this.destroyed||!this._geometryEngine&&((n=(r=(t=this.layer)==null?void 0:t.filter)==null?void 0:r.geometries)==null?void 0:n.length)},e).then(async()=>{M(e),this._geometryEngine=await Z(()=>import("./geometryEngine-DIBGr4wh.js"),__vite__mapDeps([0,1,2,3,4]))}).catch(D),this._projectionEngineLoaded=ee(),T(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{M(e),await te(),this._projectionEngineLoaded=!0}).catch(D)}destroy(){this._abortController=re(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,t){throw new Error("Not implemented")}queryObjectIds(e,t){throw new Error("Not implemented")}queryFeatureCount(e,t){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,t){throw new Error("Not implemented")}};p([y()],h.prototype,"layer",void 0),p([y()],h.prototype,"availableFields",null),p([y()],h.prototype,"maximumNumberOfFeatures",null),p([y({readOnly:!0})],h.prototype,"maximumNumberOfFeaturesExceeded",null),p([y()],h.prototype,"filter",void 0),p([y({readOnly:!0})],h.prototype,"layerFilter",null),p([y({readOnly:!0})],h.prototype,"_layerFilter",null),p([y()],h.prototype,"_geometryEngine",void 0),p([y()],h.prototype,"_projectionEngineLoaded",void 0),p([y()],h.prototype,"_filterNeedsProjectionEngine",null),p([y()],h.prototype,"layerFilterUpdating",null),h=p([$("esri.views.layers.SceneLayerView")],h);const _e=h;export{w as a,Fe as b,we as c,Ie as f,Ee as i,be as s,_e as w};
