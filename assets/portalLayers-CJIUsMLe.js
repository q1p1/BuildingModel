import{W as g,e as T,eg as f,eM as p}from"./index-DVfovSRj.js";import{s as b}from"./associatedFeatureServiceUtils-JRg5DWgg.js";import{t as C,i as I,b as G}from"./fetchService-DjqdSo8q.js";class F{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(t,a){const r=this._serviceMetadatas.get(t);if(r)return r;const s=await C(t,a);return this._serviceMetadatas.set(t,s),s}async fetchItemData(t){const{id:a}=t;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await t.fetchData();return r.set(a,s),s}async fetchCustomParameters(t,a){const r=await this.fetchItemData(t);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function m(e){const t={id:e.id,name:e.name},a=I(e.type);return a!=="FeatureLayer"&&(t.layerType=a),t}async function D(e,t,a){var r,s,n;if((e==null?void 0:e.layers)==null||(e==null?void 0:e.tables)==null){const c=await a.fetchServiceMetadata(t,{customParameters:(r=y(e))==null?void 0:r.customParameters});(e=e||{}).layers=e.layers||((s=c==null?void 0:c.layers)==null?void 0:s.map(m)),e.tables=e.tables||((n=c==null?void 0:c.tables)==null?void 0:n.map(m))}return e}function y(e){if(!e)return null;const{layers:t,tables:a}=e;return t!=null&&t.length?t[0]:a!=null&&a.length?a[0]:null}function j(e,t){return t==null?null:[...e.layers||[],...e.tables||[]].find(a=>a.id===t)}function ce(e,t){return[...e.layers||[],...e.tables||[]].filter(({layerType:a})=>a?a===t:t==="ArcGISFeatureLayer")}function L(e){var t,a;return(((t=e==null?void 0:e.layers)==null?void 0:t.length)??0)+(((a=e==null?void 0:e.tables)==null?void 0:a.length)??0)}function ue(e){switch(e){case"catalog":return"CatalogLayer";case"feature":return"ArcGISFeatureLayer";case"oriented-imagery":return"OrientedImageryLayer";case"subtype-group":return"SubtypeGroupLayer"}return null}function O(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":return"SubtypeGroupLayer"}return"FeatureLayer"}async function _(e,t,a){var n,c,l,i;if(!(e!=null&&e.url))return t??{};if(t??(t={}),!t.layers){const u=await a.fetchServiceMetadata(e.url);t.layers=(n=u.layers)==null?void 0:n.map(m)}const{serverUrl:r,portalItem:s}=await b(e.url,{sceneLayerItem:e,customParameters:(c=y(t))==null?void 0:c.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return t.tables=[],t;if(!t.tables&&s){const u=await s.fetchData().catch(()=>null);if(u!=null&&u.tables)t.tables=u.tables.map(m);else{const o=await a.fetchServiceMetadata(r,{customParameters:(l=y(u))==null?void 0:l.customParameters}).catch(()=>null);t.tables=(i=o==null?void 0:o.tables)==null?void 0:i.map(m)}}if(t.tables)for(const u of t.tables)u.url=`${r}/${u.id}`;return t}async function $(e){let{portalItem:t}=e;!t||t instanceof g||(t=new g(t));const a=await K(t);return new a.constructor({portalItem:t,...a.properties})}async function K(e){await e.load();const t=new F;return W(await M(e,t))}async function M(e,t){switch(e.type){case"3DTiles Service":return E();case"CSV":return q();case"Feature Collection":return U(e);case"Feature Service":return J(e,t);case"Feed":return Z();case"GeoJson":return z();case"Group Layer":return ee();case"Image Service":return k(e,t);case"KML":return B();case"Knowledge Graph Layer":return H();case"Map Service":return V(e,t);case"Media Layer":return te();case"Scene Service":return x(e,t);case"Stream Service":return A();case"Vector Tile Service":return R();case"WFS":return Q();case"WMS":return X();case"WMTS":return Y();default:throw new T("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function W(e){const t=e.className,a=G[t];return{constructor:await a(),properties:e.properties}}async function V(e,t){return await ae(e,t)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function J(e,t){const a=await v(e,t);if(typeof a=="object"){const{sourceJSON:r,className:s}=a,n={sourceJSON:r};return a.id!=null&&(n.layerId=a.id),{className:s||"FeatureLayer",properties:n}}return{className:"GroupLayer"}}async function x(e,t){var r;const a=await v(e,t,async()=>{try{if(!e.url)return[];const{serverUrl:s}=await b(e.url,{sceneLayerItem:e}),n=await t.fetchServiceMetadata(s);return(n==null?void 0:n.tables)??[]}catch{return[]}});if(typeof a=="object"){const s={};let n;if(a.id!=null?(s.layerId=a.id,n=`${e.url}/layers/${a.id}`):n=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const l of Object.keys(f))if(e.typeKeywords.includes(l))return{className:f[l]}}const c=await t.fetchServiceMetadata(n,{customParameters:await t.fetchCustomParameters(e,l=>{var i;return(i=y(l))==null?void 0:i.customParameters})});return{className:f[c==null?void 0:c.layerType]||"SceneLayer",properties:s}}if(a===!1){const s=await t.fetchServiceMetadata(e.url);if((s==null?void 0:s.layerType)==="Voxel")return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function U(e){await e.load();const t=p(e,"Map Notes"),a=p(e,"Markup");if(t||a)return{className:"MapNotesLayer"};if(p(e,"Route Layer"))return{className:"RouteLayer"};const r=await e.fetchData();return L(r)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function k(e,t){var o,w,S,h,N;await e.load();const a=((o=e.typeKeywords)==null?void 0:o.map(P=>P.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=await t.fetchItemData(e),s=r==null?void 0:r.layerType;if(s==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(s==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const n=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)}),c=(w=n.cacheType)==null?void 0:w.toLowerCase(),l=(S=n.capabilities)==null?void 0:S.toLowerCase().includes("tilesonly"),i=((N=(h=n.tileInfo)==null?void 0:h.format)==null?void 0:N.toLowerCase())??"",u=c==null&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return c==="map"||u||l?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function A(){return{className:"StreamLayer"}}function R(){return{className:"VectorTileLayer"}}function z(){return{className:"GeoJSONLayer"}}function E(){return{className:"IntegratedMesh3DTilesLayer"}}function q(){return{className:"CSVLayer"}}function B(){return{className:"KMLLayer"}}function H(){return{className:"KnowledgeGraphLayer"}}function Q(){return{className:"WFSLayer"}}function X(){return{className:"WMSLayer"}}function Y(){return{className:"WMTSLayer"}}function Z(){return{className:"StreamLayer"}}function ee(){return{className:"GroupLayer"}}function te(){return{className:"MediaLayer"}}async function ae(e,t){const{tileInfo:a}=await t.fetchServiceMetadata(e.url,{customParameters:await t.fetchCustomParameters(e)});return a}async function v(e,t,a){const{url:r,type:s}=e,n=s==="Feature Service";if(!r)return{};if(/\/\d+$/.test(r)){if(n){const i=await t.fetchServiceMetadata(r,{customParameters:await t.fetchCustomParameters(e,u=>{var o;return(o=y(u))==null?void 0:o.customParameters})});return{id:i.id,className:I(i.type),sourceJSON:i}}return{}}await e.load();let c=await t.fetchItemData(e);if(n){const i=await D(c,r,t),u=d(i);if(typeof u=="object"){const o=j(i,u.id);u.className=O(o==null?void 0:o.layerType)}return u}if(s==="Scene Service"&&(c=await _(e,c,t)),L(c)>0)return d(c);const l=await t.fetchServiceMetadata(r);return a&&(l.tables=await a()),d(l)}function d(e){var t;return L(e)===1&&{id:(t=y(e))==null?void 0:t.id}}const ie=Object.freeze(Object.defineProperty({__proto__:null,fromItem:$,selectLayerClassPath:M},Symbol.toStringTag,{value:"Module"}));export{M as L,D as a,ue as c,F as e,O as i,y as l,ce as n,_ as o,ie as p,m as t,L as u};
