const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/meshFeatureSet-CqOqqVDU.js","assets/index-pOkNMSkH.js","assets/Mesh-DSoG0q0b.js","assets/MeshComponent-DHZCrxGf.js","assets/meshProperties-C4iW0Ukm.js","assets/MeshTransform-DT1t7Zdb.js","assets/MeshVertexAttributes-7ZqsXt9m.js","assets/triangulationUtils-SZGRFYHE.js","assets/earcut-Lltz9D9k.js","assets/deduplicate-CPn8S1hQ.js","assets/vertexSpaceConversion-BaHBu6NW.js","assets/vec4-B794kZFC.js","assets/External-BPHrEtHD.js","assets/infoFor3D-CxdEiWhp.js","assets/meshFeatureAttributes-CGtbUn9x.js","assets/executeRelationshipQuery-DREKNxBD.js","assets/query-CdBmEMZ0.js","assets/normalizeUtils-Dnu7Ey1C.js","assets/normalizeUtilsCommon-Jj3J6NJQ.js","assets/pbfQueryUtils-ys2hKt_A.js","assets/pbf-CJQCrYi4.js","assets/queryAttachments-BscGvUhC.js","assets/AttachmentInfo-SR2wpy0O.js","assets/executeBinsQuery-B4o7xIao.js","assets/BinsQuery-CoThjiDm.js","assets/queryUtils-DGHA95ZW.js","assets/json-Wa8cmqdu.js","assets/executeTopFeaturesQuery-D1PiVpPp.js","assets/queryTopFeatures-CgZ8IpsZ.js","assets/TopFeaturesQuery-atnnts8s.js","assets/executeForTopIds-CiLtMNoS.js","assets/executeForTopExtents-CpJ9-gW_.js","assets/executeForTopCount-BfBLEQ52.js"])))=>i.map(i=>d[i]);
import{aT as m,ac as _,ap as V,iX as I,iT as w,iZ as A,eX as G,r as c,m as l,lP as x,a as E,b as L,ef as Q,H as $,aS as q,gR as h,_ as n,e as g,cf as N}from"./index-pOkNMSkH.js";import{a as M,d as Z}from"./infoFor3D-CxdEiWhp.js";import{s as B,a as j}from"./executeForIds-BvPvQbj7.js";import{x as k,f as z}from"./query-CdBmEMZ0.js";import{a as J}from"./executeQueryJSON-CZOZAHyU.js";async function U(r,t,e){const o=m(r),s=await k(o,_.from(t),{...e}),i=s.data.extent;return!i||isNaN(i.xmin)||isNaN(i.ymin)||isNaN(i.xmax)||isNaN(i.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:V.fromJSON(i)}}function X(r,t){return t}function y(r,t,e,o){switch(e){case 0:return p(r,t+o,0);case 1:return r.originPosition==="lowerLeft"?p(r,t+o,1):K(r,t+o,1)}}function D(r,t,e,o){return e===2?p(r,t,2):y(r,t,e,o)}function Y(r,t,e,o){return e===2?t===0?0:p(r,t,3):y(r,t,e,o)}function H(r,t,e,o){return e===3?t===0?0:p(r,t,3):D(r,t,e,o)}function p({translate:r,scale:t},e,o){return r[o]+e*t[o]}function K({translate:r,scale:t},e,o){return r[o]-e*t[o]}class W{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=X,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(t){if(this._options.applyTransform&&(t.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!t.hasZ)return;const e=I(t.geometryType,this._options.sourceSpatialReference,t.spatialReference);if(e!=null)for(const o of t.features)e(o.geometry)}createSpatialReference(){return{}}addField(t,e){const o=t.fields;w(o),o.push(e);const s=o.map(i=>i.name);this._attributesConstructor=function(){for(const i of s)this[i]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._mValueOffset=null,this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),t.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,o,s)=>this.addCoordinatePoint(e,o,s),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,o,s)=>this._addCoordinatePolygon(e,o,s),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,o,s)=>this._addCoordinatePolyline(e,o,s),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,o,s)=>this._addCoordinateMultipoint(e,o,s),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,o){this._lengths.length===0&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:o,queryGeometryType:s}=e,i=A(o.clone(),o,!1,!1,this._transform),u=G(i,s,!1,!1);t.queryGeometryType=s,t.queryGeometry={...u}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,o){const s=this._transform;switch(e=this._applyTransform(s,e,o,0),o){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let o=0;e<=1&&(o=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const s=this._transform;return this._mValueOffset!==null&&t===0&&e>0&&!(e%this._mValueOffset)?0:this._applyTransform(s,t,e,o)}_addCoordinatePolyline(t,e,o){this._dehydratedAddPointsCoordinate(t.paths,e,o)}_addCoordinatePolygon(t,e,o){this._dehydratedAddPointsCoordinate(t.rings,e,o)}_addCoordinateMultipoint(t,e,o){o===0&&t.points.push([]);const s=this._transformPathLikeValue(e,o);t.points[t.points.length-1].push(s)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,o){o===0&&this._toAddInCurrentPath--==0&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(e,o),i=t[t.length-1];o===0&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),i.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(t){const{hasZ:e,hasM:o}=t;return e&&o?H:e?D:o?Y:y}}async function tt(r,t,e){const o=m(r),s={...e},i=_.from(t),u=!i.quantizationParameters,{data:d}=await z(o,i,new W({sourceSpatialReference:i.sourceSpatialReference,applyTransform:u}),s);return d}let a=class extends L{constructor(r){super(r),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return Q(this.url)}async execute(r,t){const e=await this.executeJSON(r,t);return this.featureSetFromJSON(r,e,t)}async executeJSON(r,t){var d;const e=this._normalizeQuery(r),o=((d=r.outStatistics)==null?void 0:d[0])!=null,s=$("featurelayer-pbf-statistics"),i=!o||s;let u;if(this.pbfSupported&&i)try{u=await tt(this.url,e,t)}catch(f){if(f.name!=="query:parsing-pbf")throw f;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await J(this.url,e,t)),this._normalizeFields(u.fields),u}async featureSetFromJSON(r,t,e){if(!this._queryIs3DObjectFormat(r)||this.infoFor3D==null||!t.features)return q.fromJSON(t);const{meshFeatureSetFromJSON:o}=await h(n(()=>import("./meshFeatureSet-CqOqqVDU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])),e);return o(r,this.infoFor3D,t)}executeForCount(r,t){return B(this.url,this._normalizeQuery(r),t)}executeForExtent(r,t){return U(this.url,this._normalizeQuery(r),t)}executeForIds(r,t){return j(this.url,this._normalizeQuery(r),t)}async executeRelationshipQuery(r,t){const[{default:e},{executeRelationshipQuery:o}]=await h(Promise.all([n(()=>import("./index-pOkNMSkH.js").then(s=>s.Ba),[]),n(()=>import("./executeRelationshipQuery-DREKNxBD.js"),__vite__mapDeps([15,1,16,17,18,19,20]))]),t);return r=e.from(r),(this.gdbVersion||this.dynamicDataSource)&&((r=r.clone()).gdbVersion=r.gdbVersion||this.gdbVersion,r.dynamicDataSource=r.dynamicDataSource||this.dynamicDataSource),o(this.url,r,t)}async executeRelationshipQueryForCount(r,t){const[{default:e},{executeRelationshipQueryForCount:o}]=await h(Promise.all([n(()=>import("./index-pOkNMSkH.js").then(s=>s.Ba),[]),n(()=>import("./executeRelationshipQuery-DREKNxBD.js"),__vite__mapDeps([15,1,16,17,18,19,20]))]),t);return r=e.from(r),(this.gdbVersion||this.dynamicDataSource)&&((r=r.clone()).gdbVersion=r.gdbVersion||this.gdbVersion,r.dynamicDataSource=r.dynamicDataSource||this.dynamicDataSource),o(this.url,r,t)}async executeAttachmentQuery(r,t){const{executeAttachmentQuery:e,fetchAttachments:o,processAttachmentQueryResult:s}=await h(n(()=>import("./queryAttachments-BscGvUhC.js"),__vite__mapDeps([21,1,16,17,18,19,20,22])),t),i=m(this.url);return s(i,await(this.queryAttachmentsSupported?e(i,r,t):o(i,r,t)))}async executeBinsQuery(r,t){const{executeBinsQuery:e}=await h(n(()=>import("./executeBinsQuery-B4o7xIao.js"),__vite__mapDeps([23,1,17,18,16,19,20,24,25,26])),t);return e(this.parsedUrl,r,t)}async executeTopFeaturesQuery(r,t){const{executeTopFeaturesQuery:e}=await h(n(()=>import("./executeTopFeaturesQuery-D1PiVpPp.js"),__vite__mapDeps([27,1,28,17,18,16,19,20,29])),t);return e(this.parsedUrl,r,this.sourceSpatialReference,t)}async executeForTopIds(r,t){const{executeForTopIds:e}=await h(n(()=>import("./executeForTopIds-CiLtMNoS.js"),__vite__mapDeps([30,1,28,17,18,16,19,20,29])),t);return e(this.parsedUrl,r,t)}async executeForTopExtents(r,t){const{executeForTopExtents:e}=await h(n(()=>import("./executeForTopExtents-CpJ9-gW_.js"),__vite__mapDeps([31,1,28,17,18,16,19,20,29])),t);return e(this.parsedUrl,r,t)}async executeForTopCount(r,t){const{executeForTopCount:e}=await h(n(()=>import("./executeForTopCount-BfBLEQ52.js"),__vite__mapDeps([32,1,28,17,18,16,19,20,29])),t);return e(this.parsedUrl,r,t)}_normalizeQuery(r){let t=_.from(r);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===r?t.clone():t,t.gdbVersion=r.gdbVersion||this.gdbVersion,t.dynamicDataSource=r.dynamicDataSource?x.from(r.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:e}=this;if(e!=null&&this._queryIs3DObjectFormat(r)){t=t===r?t.clone():t,t.formatOf3DObjects=null;const o=M(e),s=Z(e);for(const i of e.queryFormats){if(i===o){t.formatOf3DObjects=i;break}i!==s||t.formatOf3DObjects||(t.formatOf3DObjects=i)}if(!t.formatOf3DObjects)throw new g("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!N(t.outSpatialReference,this.sourceSpatialReference))throw new g("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(t.outFields==null||!t.outFields.includes("*")){t=t===r?t.clone():t,t.outFields==null&&(t.outFields=[]);const{originX:i,originY:u,originZ:d,translationX:f,translationY:S,translationZ:P,scaleX:b,scaleY:F,scaleZ:R,rotationX:O,rotationY:C,rotationZ:v,rotationDeg:T}=e.transformFieldRoles;t.outFields.push(i,u,d,f,S,P,b,F,R,O,C,v,T)}}return t}_normalizeFields(r){if(this.fieldsIndex!=null&&r!=null)for(const t of r){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(r){return this.infoFor3D!=null&&r.returnGeometry===!0&&r.multipatchOption!=="xyFootprint"&&!r.outStatistics}};c([l({type:x})],a.prototype,"dynamicDataSource",void 0),c([l()],a.prototype,"fieldsIndex",void 0),c([l()],a.prototype,"gdbVersion",void 0),c([l()],a.prototype,"infoFor3D",void 0),c([l({readOnly:!0})],a.prototype,"parsedUrl",null),c([l()],a.prototype,"pbfSupported",void 0),c([l()],a.prototype,"queryAttachmentsSupported",void 0),c([l()],a.prototype,"sourceSpatialReference",void 0),c([l({type:String})],a.prototype,"url",void 0),a=c([E("esri.layers.graphics.sources.support.QueryTask")],a);const at=a;export{at as j};
