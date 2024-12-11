const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Feature3DPipeline-CYXJ8eDQ.js","assets/index-pOkNMSkH.js","assets/WorkerHandle-MabGnYVI.js","assets/highlightUtils-eA5M_joT.js","assets/languageUtils-CrGoFNJp.js","assets/TimeOnly-DtwEOrV3.js","assets/ImmutableArray-BPVd6ESQ.js","assets/shared-Ctlar3ob.js","assets/number-DY5_ZXb0.js","assets/HeatmapDensity.glsl-pc0eNxCV.js","assets/timeSupport-BW-grnHU.js","assets/utils-D8r1N2BW.js","assets/projectExtentUtils-Rp4_o5Ih.js","assets/geometryServiceUtils-Z6IeQ8Qp.js","assets/dehydratedFeatureComparison-YKxZDvqJ.js","assets/utils-BkgUDk1t.js","assets/queryForSymbologySnapping-DBANY1iM.js","assets/Graphics3DFeatureProcessor-DV46q6FW.js","assets/hash-CcEbRgUF.js","assets/renderingInfoUtils-pQN8g8I8.js","assets/ExtentSet-3acE0Xrf.js","assets/optimizedFeatureQueryEngineAdapter-BBnAuhfW.js","assets/centroid-DdLmOD72.js","assets/PooledRBush-BLgz4_xp.js","assets/quickselect-QQC62dOK.js","assets/popupUtils-CaLqO6dx.js","assets/Graphics3DObjectStates-BptP2_Fh.js","assets/attributeUtils-Dc8--CBJ.js","assets/floorFilterUtils-DZ5C6FQv.js","assets/QueryEngine-DKaKoETR.js","assets/normalizeUtils-Dnu7Ey1C.js","assets/normalizeUtilsCommon-Jj3J6NJQ.js","assets/WhereClause-CWSSxvZz.js","assets/queryUtils-DGHA95ZW.js","assets/json-Wa8cmqdu.js","assets/QueryEngineCapabilities-DjYb9CEb.js","assets/utils-AnXpMZLK.js","assets/utils-CIJIXLiF.js","assets/utils-BeFA6lRt.js","assets/ClassBreaksDefinition-BGtFgFmf.js","assets/SnappingCandidate-O5eRSE6e.js","assets/FeatureStore-2QpSYbMY.js","assets/BoundsStore-DW5IV0HP.js","assets/LayerView3D-ChJeke1e.js","assets/query-CdBmEMZ0.js","assets/pbfQueryUtils-ys2hKt_A.js","assets/pbf-CJQCrYi4.js","assets/EventedSet-1K-kSma-.js","assets/LayerView-Da_1He01.js","assets/RefreshableLayerView-BYertE9D.js"])))=>i.map(i=>d[i]);
import{B as z,av as N,an as k,j0 as J,jZ as $,r as n,m as p,a as w,b as I,nL as U,i as v,b2 as Y,oE as B,u as q,E as O,C as _,oF as K,P as T,N as S,A as W,oG as X,cR as ee,b6 as A,ah as D,cD as Q,z as M,ac as j,c1 as te,nn as H,oH as re,no as L,oI as se,oJ as ie,ng as x,oK as E,e as P,oL as oe,H as ae,_ as ne,oM as le,M as ue}from"./index-pOkNMSkH.js";import{C as pe,V as ce,h as de}from"./HeatmapDensity.glsl-pc0eNxCV.js";import{l as he}from"./LayerView3D-ChJeke1e.js";import{E as ye,c as me}from"./query-CdBmEMZ0.js";import{h as fe}from"./WorkerHandle-MabGnYVI.js";import{r as ge}from"./EventedSet-1K-kSma-.js";import{o as Z}from"./floorFilterUtils-DZ5C6FQv.js";import{p as C,n as Fe}from"./popupUtils-CaLqO6dx.js";import{y as we}from"./LayerView-Da_1He01.js";import{i as _e}from"./RefreshableLayerView-BYertE9D.js";class be extends z{constructor(t,e,r,i,l,a){super(t.usedMemory,t.displayedFeatures,t.totalFeatures,t.maximumFeatures,t.nodes,t.core),this.storedFeatures=e,this.totalVertices=r,this.partial=i,this.mode=l,this.symbolComplexity=a}}class xe{constructor(t){this._controller=t,this._handle=new Pe(e=>t.schedule(e))}destroy(){this._handle.destroy()}invoke(t,e){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof N&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,e).then(r=>{let i=0,l=0;const a=N.fromJSON(r.spatialReference);r.spatialReference=a;const c=async u=>{const o=r.fields;if(o){for(;i<o.length;)if(o[i]=k.fromJSON(o[i]),i++,u.madeProgress())return this._controller.reschedule(m=>c(m))}const h=r.features;for(;l<h.length;){const m=h[l];++l,m.uid=J();const d=m.geometry;if(d!=null&&(d.spatialReference=a,ve(d),u.madeProgress()))return this._controller.reschedule(g=>c(g))}return r};return this._controller.schedule(u=>c(u))})):Promise.resolve(null)}}function ve(s){switch(s.type){case"polyline":s.paths.reduce((t,e)=>t+e.length,0)<$&&(s.paths=s.hasZ||s.hasM?s.paths.map(t=>t.map(e=>[e[0],e[1],e[2]])):s.paths.map(t=>t.map(e=>[e[0],e[1]])));break;case"polygon":s.rings.reduce((t,e)=>t+e.length,0)<$&&(s.rings=s.hasZ||s.hasM?s.rings.map(t=>t.map(e=>[e[0],e[1],e[2]])):s.rings.map(t=>t.map(e=>[e[0],e[1]])))}}class Pe extends fe{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},t)}}let F=class extends I{constructor(s){super(s)}get implicitFields(){var r;if(!((r=this.layer.outFields)==null?void 0:r.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),e=new Set(this.layerView.availableFields);return U(e,t)}get queryFeaturesDehydrated(){var l;const{layer:s}=this,t=s.capabilities,e=t&&t.query,r=e&&e.supportsFormatPBF,i=s.parsedUrl;if(r){this._decoder==null&&(this._decoder=new xe(this.controller));const a={sourceSpatialReference:((l=s.spatialReference)==null?void 0:l.toJSON())??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:G};return(c,u)=>ye(i,c,"pbf",this._createRequestOptions(u)).then(o=>(v(u),this._decoder!=null?this._decoder.invoke({buffer:o.data,options:a},u.signal):Promise.reject(Y())))}return(a,c)=>me(i,a,s.spatialReference,this._createRequestOptions(c)).then(u=>B(u.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:G}))}queryFeatureCount(s,t){return this.layer.queryFeatureCount(s,t)}destroy(){this._decoder=q(this._decoder)}_createRequestOptions(s){return{...s,query:{...this.layer.customParameters,token:this.layer.apiKey,...s==null?void 0:s.query}}}};n([p({constructOnly:!0})],F.prototype,"layer",void 0),n([p({constructOnly:!0})],F.prototype,"layerView",void 0),n([p({constructOnly:!0})],F.prototype,"controller",void 0),n([p({readOnly:!0})],F.prototype,"implicitFields",null),n([p({readOnly:!0})],F.prototype,"queryFeaturesDehydrated",null),F=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],F);let R=class extends I{constructor(s){super(s)}queryFeaturesDehydrated(s,t){return this.layer.queryFeatures(s,t)}};n([p({constructOnly:!0})],R.prototype,"layer",void 0),R=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileOGCServiceQuery3D")],R);let b=class extends I{constructor(s){super(s)}queryFeaturesDehydrated(s,t){return this.source.queryFeaturesJSON(s,t).then(B,e=>{if(e&&e.name==="query-features-json:unsupported")return this.layer.queryFeatures(s,t);throw e})}queryFeatureCount(s,t){return this.layer.queryFeatureCount(s,t)}};function Re(s,t){const{layer:e}=s;return e.type==="feature"&&e.source.type==="feature-layer"||e.type==="catalog-footprint"?new F({layer:e,layerView:s,controller:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="oriented-imagery"||e.type==="wfs"?new b({layer:e,source:e.source}):e.type==="ogc-feature"?new R({layer:e}):null}n([p({constructOnly:!0})],b.prototype,"layer",void 0),n([p({constructOnly:!0})],b.prototype,"source",void 0),b=n([w("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],b);const G=1024;class Oe{constructor(t){this._memoryCache=null;const e=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=e.objectIdField,this.globalIdField="globalIdField"in e?e.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const r=this._layerView.view.resourceController;this.query=Re(this._layerView,r.normal),r&&this._memoryCacheEnabled&&(this._memoryCache=r.memoryController.newCache(`fl-${e.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"parquet":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=q(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){var t;return(t=this._layerView.view.resourceController)==null?void 0:t.scheduler}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get isDraped(){var t;return((t=this._layerView.layer.elevationInfo)==null?void 0:t.mode)==="on-the-ground"}get capabilities(){return this._capabilities??(this._capabilities=qe(this._layerView.layer)),this._capabilities}logFetchError(t,e){t.error("#fetchTile()",this._layerView.layer,(e==null?void 0:e.message)??e)}}function qe(s){const t=s.capabilities.query;return{supportsMultipleResolutions:Me(s),supportsPagination:!(!t||!t.supportsPagination),supportsResultType:!(!t||!t.supportsResultType),supportsCacheHint:!(!t||!t.supportsCacheHint),supportsQuantization:!(!t||!t.supportsQuantization),supportsQuantizationEditMode:!(!t||!t.supportsQuantizationEditMode),supportsMaxRecordCountFactor:!(!t||!t.supportsMaxRecordCountFactor),supportsFormatPBF:!(!t||!t.supportsFormatPBF)}}function Me(s){switch(s.geometryType){case"polyline":return!0;case"polygon":return s.capabilities&&s.capabilities.query&&s.capabilities.query.supportsQuantization;default:return!1}}let y=class extends pe{constructor(t){super(t),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles(O(()=>({controller:this.controller,suspended:this.suspended}),({controller:t,suspended:e})=>{t&&!e&&this._needsRefresh&&(t.refetch(),this._needsRefresh=!1)}))}destroy(){this._fetcherContext=q(this._fetcherContext)}get maximumNumberOfFeatures(){var t;return((t=this.controller)==null?void 0:t.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(t){this._set("maximumNumberOfFeatures",t),this.controller&&(this.controller.maximumNumberOfFeatures=t)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var r,i;let t=0;if((r=this.controller)!=null&&r.updating){const l=this.controller.updatingRemaining,a=Math.max(this.controller.updatingTotal,this._controllerTotal);a>0&&(t=(a-l)/a,this._controllerTotal=a)}let e=0;if((i=this.processor)!=null&&i.updating){const l=this.processor.updatingRemaining,a=Math.max(l,this._processorTotal);a>0&&(e=(a-l)/a,this._processorTotal=a)}return .5*(t+e)}get updatePolicy(){if(!this.controller)return _.ASYNC;switch(this.controller.mode){case"snapshot":{const t=Ee.get(this.layer.geometryType);return t==null||this.controller.serviceDataCount>t?_.ASYNC:_.SYNC}case"tiles":return _.ASYNC}}get usedMemory(){var t,e;return(((t=this.processor)==null?void 0:t.usedMemory)??0)+(((e=this.controller)==null?void 0:e.memoryForUnusedFeatures)??0)}get unloadedMemory(){var l,a,c,u;const t=((l=this.processor)==null?void 0:l.unprocessedMemoryEstimate)??0,e=((a=this.controller)==null?void 0:a.expectedFeatureDiff)??0,r=((c=this.processor)==null?void 0:c.loadedFeatures)??0,i=r+e>0?r/(r+e):1;return t+e*(((u=this.processor)==null?void 0:u.usedMemoryPerFeature)??0)*i}get ignoresMemoryFactor(){var t;return(t=this.controller)==null?void 0:t.hasMaximumNumberOfFeaturesOverride}get performanceInfo(){var i,l,a,c,u,o;const t=(i=this.controller)==null?void 0:i.displayFeatureLimit,e=t!=null?t.averageSymbolComplexity:void 0,r=e!=null?`f:${e.verticesPerFeature},v:${e.verticesPerCoordinate}`:"n/a";return new be(super.performanceInfo,((a=(l=this.controller)==null?void 0:l.performanceInfo)==null?void 0:a.storedFeatures)??0,((u=(c=this.controller)==null?void 0:c.performanceInfo)==null?void 0:u.totalVertices)??0,this.maximumNumberOfFeaturesExceeded,((o=this.controller)==null?void 0:o.mode)??"n/a",r)}async doRefresh(t){const{controller:e,processor:r,suspended:i}=this;t&&e&&(i?this._needsRefresh=!0:(e.refetch(),this._needsRefresh=!1)),r.refreshFilter()}setVisibility(t,e){var r;(r=this.processor)==null||r.setObjectIdVisibility(t,e)}getMissingAttributesForFeature(t){return this.controller.getMissingAttributesForFeature(t)}getHydratedGeometry(t){const e=this.graphics3DProcessor;if(e==null)return null;const r=e.graphics3DGraphicsByObjectID;if(r==null)return null;const i=r.get(t);return i==null?null:K(i.graphic.geometry)}createController(){this._fetcherContext=new Oe({layerView:this.layerView,returnZ:this.hasZ,returnM:this.hasM});const t=new ce({layerView:this.layerView,context:this._fetcherContext,graphics:new ge,extent:this.clippingExtent});return this.updatingHandles.add(()=>t.serviceDataExtent,e=>{this.processor&&(this.processor.dataExtent=e)},T),this.addHandles(O(()=>this.suspended&&this.layerView.updateSuspended,e=>{e?t.suspend():t.resume()},S)),this.updatingHandles.add(()=>{var e;return(e=this.processor)==null?void 0:e.displayFeatureLimit},e=>t.displayFeatureLimit=e,T),this.addHandles(W(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),t}beforeSetController(t){t.maximumNumberOfFeatures=this.maximumNumberOfFeatures}get test(){return{controller:this.controller,graphics3DProcessor:this.graphics3DProcessor,heatmapProcessor:this.heatmapProcessor,loadedGraphics:this.loadedGraphics}}};n([p()],y.prototype,"layerView",void 0),n([p()],y.prototype,"controller",void 0),n([p()],y.prototype,"_controllerTotal",void 0),n([p()],y.prototype,"_processorTotal",void 0),n([p()],y.prototype,"_needsRefresh",void 0),n([p()],y.prototype,"maximumNumberOfFeatures",null),n([p()],y.prototype,"maximumNumberOfFeaturesExceeded",null),n([p()],y.prototype,"updatingProgressValue",null),n([p()],y.prototype,"updatePolicy",null),n([p()],y.prototype,"suspendResumeExtentMode",void 0),y=n([w("esri.views.3d.layers.graphics.FeatureGraphics3DGraphicsPipeline")],y);const Ee=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),Ce=s=>{let t=class extends s{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([O(()=>{var r;const e=this.layer;return[e&&"elevationInfo"in e?(r=e.elevationInfo)==null?void 0:r.featureExpressionInfo:null,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),S),A(()=>{var e;return(e=this.view)==null?void 0:e.floors},"change",()=>this._handleRequiredFieldsChange()),A(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:r},requiredFields:i}=this;return"outFields"in e&&e.outFields?D(r,[...Q(r,e.outFields),...i]):D(r,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){M.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},r=this.filter!=null?this.filter.createQuery(e):new j(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const i=Z(this);i!=null&&(r.where=r.where?`(${r.where}) AND (${i})`:i)}return this.timeExtent!=null&&(r.timeExtent=r.timeExtent!=null?r.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),r}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new j(e)}queryFeatures(e,r){throw new Error("missing implementation")}queryObjectIds(e,r){throw new Error("missing implementation")}queryFeatureCount(e,r){throw new Error("missing implementation")}queryExtent(e,r){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,r){return this._validateFetchPopupFeatures(e,r),this._fetchPopupFeatures(e,r)}_loadArcadeModules(e){var r;return(r=e.expressionInfos)!=null&&r.length||Array.isArray(e.content)&&e.content.some(i=>i.type==="expression")?te():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:r,layer:{fieldsIndex:i,objectIdField:l}}=this,a="renderer"in r&&r.renderer,c="orderBy"in r&&r.orderBy,u="featureReduction"in r?r.featureReduction:null,o=new Set,h=await Promise.allSettled([a?a.collectRequiredFields(o,i):null,H(o,r),e&&"elevationInfo"in r?re(o,r):null,this.filter!=null?L(o,r,this.filter):null,e||this.featureEffect==null?null:L(o,r,this.featureEffect.filter),!e&&u?se(o,r,u):null,!e&&c?ie(o,r,c):null]);if("timeInfo"in r&&r.timeInfo&&this.timeExtent&&x(o,r.fieldsIndex,[r.timeInfo.startField,r.timeInfo.endField]),"floorInfo"in r&&r.floorInfo&&x(o,r.fieldsIndex,[r.floorInfo.floorField]),r.type==="feature"&&e&&r.infoFor3D!=null&&(r.globalIdField==null&&M.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),x(o,r.fieldsIndex,[r.globalIdField])),r.type==="subtype-group"){E(o,i,r.subtypeField);const d=r.sublayers.map(g=>{var V;return Promise.all([(V=g.renderer)==null?void 0:V.collectRequiredFields(o,i),H(o,g)])});await Promise.allSettled(d)}if(r.type==="catalog-footprint"&&r.parent){const d=r.parent;x(o,i,[d.itemNameField,d.itemSourceField,d.itemTypeField,d.maxScaleField,d.minScaleField])}for(const d of h)d.status==="rejected"&&M.getLogger(this).error(d.reason);E(o,i,l),e&&"displayField"in r&&r.displayField&&E(o,i,r.displayField);const m=Array.from(o).sort();this._set("requiredFields",m)}_validateFetchPopupFeatures(e,r){if(r!=null)for(const i of e){const l=i.origin&&"layer"in i.origin?i.origin.layer:i.layer;if("popupEnabled"in l&&!l.popupEnabled)throw new P("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:l});if(i.isAggregate){const a="featureReduction"in l?l.featureReduction:null;if(!(a&&"popupTemplate"in a&&a.popupEnabled&&a.popupTemplate))throw new P("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:l})}else if("popupTemplate"in l&&!C(l,r))throw new P("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:l})}}_popupFeatureHasRequiredFields(e,r){return oe(r,e)}async _fetchPopupFeatures(e,r){var c;const i=new Array(e.length),l=new Map,a=await this._createPopupQuery(e.map(u=>{var o;return((o=u.origin)==null?void 0:o.layer)??u.layer}),r);for(let u=0;u<e.length;u++){const o=e[u];if(o.isAggregate){i[u]=o;continue}const h=((c=o.origin)==null?void 0:c.layer)??o.layer;if(!h||!("popupEnabled"in h))continue;const m=Q(this.layer.fieldsIndex,a.outFields),d=C(h,r);if(d==null)continue;const g=await this._loadArcadeModules(d);v(r),g&&g.arcadeUtils.hasGeometryOperations(d)||!this._popupFeatureHasRequiredFields(o,m)?l.set(o.getObjectId(),{graphic:o,index:u}):i[u]=o}if(this.layer.type==="stream"||this.layer.type==="parquet"||l.size===0)return i.filter(Boolean);a.objectIds=Array.from(l.keys());try{const u=await this.layer.queryFeatures(a,r);for(const o of u.features){const{graphic:{geometry:h,origin:m},index:d}=l.get(o.getObjectId());o.geometry||(o.geometry=h),o.origin=m,i[d]=o}}catch{}return i.filter(Boolean)}async _createPopupQuery(e,r){const i=this.layer.createQuery(),l=new Set;let a=!1;const c=e??[this.layer];for(const u of c){if(!("popupEnabled"in u))continue;const o=C(u,r);if(o==null)continue;const h=await this._loadArcadeModules(o);v(r);const m=h&&h.arcadeUtils.hasGeometryOperations(o);a=!(this.layer.geometryType!=="point"&&!m);const d=await Fe(this.layer,o);v(r);for(const g of d)l.add(g)}if(i.returnGeometry=a,i.returnZ=a,i.returnM=a,i.outFields=Array.from(l),i.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const u=Z(this);u!=null&&(i.where=i.where?`(${i.where}) AND (${u})`:u)}return i}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}getTest(){}get test(){}};return n([p()],t.prototype,"_updatingRequiredFieldsPromise",void 0),n([p({readOnly:!0})],t.prototype,"availableFields",null),n([p({readOnly:!0})],t.prototype,"dataUpdating",void 0),n([p({type:X})],t.prototype,"featureEffect",null),n([p({type:ee})],t.prototype,"filter",void 0),n([p()],t.prototype,"layer",void 0),n([p({type:Number})],t.prototype,"maximumNumberOfFeatures",null),n([p({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),n([p({readOnly:!0})],t.prototype,"requiredFields",void 0),n([p()],t.prototype,"suspended",void 0),n([p()],t.prototype,"view",void 0),t=n([w("esri.views.layers.FeatureLayerView")],t),t};let f=class extends _e(de(Ce(he(we)))){constructor(s){super(s)}initialize(){this.addHandles(O(()=>this._updatingRequiredFieldsPromise,s=>this._updatingHandles.addPromise(s),S))}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=q(this._fetcherContext)}get maximumNumberOfFeatures(){return this.graphicsPipeline.maximumNumberOfFeatures}set maximumNumberOfFeatures(s){this.graphicsPipeline.maximumNumberOfFeatures=s}get maximumNumberOfFeaturesExceeded(){return this.graphicsPipeline!=null&&!this.suspended&&this.graphicsPipeline.maximumNumberOfFeaturesExceeded}get updatingProgressValue(){var s;return((s=this.graphicsPipeline)==null?void 0:s.updatingProgressValue)??0}get updatePolicy(){var s;return((s=this.graphicsPipeline)==null?void 0:s.updatePolicy)??_.ASYNC}get hasZ(){const s=this.layer,t=s.capabilities&&s.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in s&&s.returnZ!=null?s.returnZ:t.supportsZ)}get hasM(){const s=this.layer,t=s.capabilities&&s.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in s&&s.returnM!=null&&s.returnM}setVisibility(s,t){var e;(e=this.graphicsPipeline)==null||e.setVisibility(s,t)}createQuery(){return super.createQuery()}queryFeatures(s,t){const e=()=>super.queryFeatures(s,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(s),e):e()}async createGraphicsPipeline(){if(ae("feature-pipeline-3d-test")){const{Feature3DPipeline:s}=await ne(()=>import("./Feature3DPipeline-CYXJ8eDQ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]));return new s({layerView:this})}return new y({layerView:this})}async doRefresh(s){return await this.graphicsPipeline.doRefresh(s)}_popupFeatureHasRequiredFields(s,t){if(!super._popupFeatureHasRequiredFields(s,t))return!1;const e=le(s,this.layer.objectIdField);if(e==null)return!0;const r=this.graphicsPipeline.getMissingAttributesForFeature(e);if(r==null)return!0;for(const i of t)if(r.has(i))return!1;return!0}get usedMemory(){var s;return((s=this.graphicsPipeline)==null?void 0:s.usedMemory)??0}get unloadedMemory(){var s;return((s=this.graphicsPipeline)==null?void 0:s.unloadedMemory)??0}get ignoresMemoryFactor(){var s;return((s=this.graphicsPipeline)==null?void 0:s.ignoresMemoryFactor)??!1}async _queryFeaturesMesh(s,t){await this._validateQueryFeaturesMesh(s);const e=await t(),r=this.graphicsPipeline;if(s!=null&&s.outStatistics||r==null)return e;const i=this.layer.objectIdField,l=[];for(const a of e.features)if(a.geometry){const c=r.getHydratedGeometry(a.attributes[i]);c&&(a.geometry=c,l.push(a))}else l.push(a);return e.features=l,e}async _validateQueryFeaturesMesh(s){if(!s)return;const t=r=>{throw new P("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${r}'`)},e=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const r of e)s[r]!=null&&t(r);"returnM"in s&&s.returnM&&t("returnM"),"returnCentroid"in s&&s.returnCentroid&&t("returnCentroid"),s.outSpatialReference==null||s.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get test(){}};n([p()],f.prototype,"layer",void 0),n([p()],f.prototype,"graphicsPipeline",void 0),n([p()],f.prototype,"maximumNumberOfFeatures",null),n([p()],f.prototype,"maximumNumberOfFeaturesExceeded",null),n([p(ue)],f.prototype,"updatingProgress",void 0),n([p({readOnly:!0})],f.prototype,"updatingProgressValue",null),n([p({readOnly:!0})],f.prototype,"updatePolicy",null),n([p({readOnly:!0})],f.prototype,"hasZ",null),n([p({readOnly:!0})],f.prototype,"hasM",null),f=n([w("esri.views.3d.layers.FeatureLayerViewBase3D")],f);const Le=f;export{Le as g,be as t};
