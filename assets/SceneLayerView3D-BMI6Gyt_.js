import{K as g,P as h,u as m,z as _,ac as d,cQ as f,L as F,r as l,m as n,M as b,cR as v,a as I,c as w}from"./index-pOkNMSkH.js";import{s as E}from"./ReactiveSet-CksC07MN.js";import{Z as O}from"./WhereClause-CWSSxvZz.js";import{o as H}from"./floorFilterUtils-DZ5C6FQv.js";import{T as x,i as S,n as C}from"./I3SMeshView3D-1jEi2yVJ.js";import{l as j}from"./LayerView3D-ChJeke1e.js";import{a as Q,s as q,b as $,f as A,c as R,i as V,w as P}from"./SceneLayerView-BFeymmBo.js";import{P as p,d as D,h as G,o as L}from"./I3SQueryFeatureStore-ZRclT8Fr.js";import{o as c}from"./I3SNode-x77qoqkT.js";import{G as T}from"./I3SOverrides-DGPnI-xT.js";import{X as M,Z as U,W as u}from"./I3SUtil-BsLhCnbL.js";import{u as N,t as z}from"./TemporalSceneLayerView-BMHdp2l6.js";import{i as W}from"./PopupSceneLayerView-B3NDe5zo.js";import{u as Z}from"./popupUtils-CaLqO6dx.js";import"./TimeOnly-DtwEOrV3.js";import"./languageUtils-CrGoFNJp.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-Ctlar3ob.js";import"./number-DY5_ZXb0.js";import"./Transform-BF-P4iIM.js";import"./RenderTexture-Bs_I1eXQ.js";import"./SceneModification-C1LjB1We.js";import"./persistable-Bp6kWnge.js";import"./resourceExtension-CCRzBSLp.js";import"./ExtentSet-3acE0Xrf.js";import"./optimizedFeatureQueryEngineAdapter-BBnAuhfW.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-BLgz4_xp.js";import"./quickselect-QQC62dOK.js";import"./WorkerHandle-MabGnYVI.js";import"./SceneLayerWorker-D29HPjmS.js";import"./attributeUtils-Dc8--CBJ.js";import"./highlightUtils-eA5M_joT.js";import"./makeScheduleFunction-CggzEh3c.js";import"./LayerView-Da_1He01.js";import"./QueryEngine-DKaKoETR.js";import"./normalizeUtils-Dnu7Ey1C.js";import"./normalizeUtilsCommon-Jj3J6NJQ.js";import"./queryUtils-DGHA95ZW.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-AnXpMZLK.js";import"./utils-CIJIXLiF.js";import"./utils-BeFA6lRt.js";import"./ClassBreaksDefinition-BGtFgFmf.js";import"./SnappingCandidate-O5eRSE6e.js";import"./resourceUtils-BsADwHPp.js";import"./I3SBinaryReader-CW-GqQcq.js";import"./meshFeatureSet-CqOqqVDU.js";import"./Mesh-DSoG0q0b.js";import"./MeshComponent-DHZCrxGf.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshTransform-DT1t7Zdb.js";import"./MeshVertexAttributes-7ZqsXt9m.js";import"./triangulationUtils-SZGRFYHE.js";import"./earcut-Lltz9D9k.js";import"./deduplicate-CPn8S1hQ.js";import"./vertexSpaceConversion-BaHBu6NW.js";import"./vec4-B794kZFC.js";import"./External-BPHrEtHD.js";import"./infoFor3D-CxdEiWhp.js";import"./meshFeatureAttributes-CGtbUn9x.js";import"./timeSupport-BW-grnHU.js";import"./utils-D8r1N2BW.js";const y=V();let s=class extends x(N(z(W(j(P))))){constructor(){super(...arguments),this.type="scene-layer-3d",this._setVisibilityHiddenObjectIds=new E,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._pendingEditsQueue=Promise.resolve(),this._interactiveEditingSessions=new Map,this._queryEngine=null}get i3slayer(){return this.layer}tryRecycleWith(e,t){return e.url===this.layer.url&&this.i3sOverrides.isEmpty?e.load(t).then(()=>{var r;M(this.layer,e,this.i3sOverrides),this.layer=e,this.i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this.i3sOverrides=new T({view:this.view,layer:e,memoryController:i}),this.resetHighlights()}):null}get layerPopupEnabledAndHasTemplate(){var e;return this.layer.popupEnabled&&Z(this.layer,(e=this.view.popup)==null?void 0:e.defaultPopupTemplateEnabled)}get filter(){return this._get("filter")}set filter(e){this._set("filter",p.checkSupport(e)?e:null)}get viewFilter(){const e=this.mergedFilter,t=this.layerFilter;if(e==null&&t==null)return null;const i=this._get("viewFilter");return i==null?new p({layerFilter:t,viewFilter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:r=>this._loadAsyncModule(r),addSqlFilter:(r,o)=>this.addSqlFilter(r,o,this.logError),addTimeFilter:(r,o)=>this.addTimeFilter(r,o)}):(i.viewFilter=e,i.layerFilter=t,i)}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get _floorFilterClause(){const e=H(this);return e!=null?O.create(e,{fieldsIndex:this.layer.fieldsIndex}):null}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds.toArray();return e.length?e.sort((t,i)=>t-i):null}get _setVisibilityHiddenObjectIdsSorted(){return this._setVisibilityHiddenObjectIds.size?Array.from(this._setVisibilityHiddenObjectIds).sort((e,t)=>e-t):null}get lodFactor(){var e,t,i,r;return((r=(i=(t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.sceneService)==null?void 0:i.object)==null?void 0:r.lodFactor)??1}get lodCrossfadeUncoveredDuration(){var e,t;return((t=(e=this.view)==null?void 0:e.qualitySettings)==null?void 0:t.fadeDuration)??0}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??0}get visibleAtCurrentScale(){return g(this.i3slayer.effectiveScaleRange,this.view.scale)}initialize(){this._fieldsHelper=new Q({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,t=>this._rangeInfosChanged(t),h),this._updatingHandles.add(()=>this.layer.renderer,t=>this._updatingHandles.addPromise(this._rendererChange(t)),h);const e=()=>this._filterChange();this._updatingHandles.add(()=>this.parsedDefinitionExpression,e),this._updatingHandles.add(()=>this.mergedFilter,e),this._updatingHandles.add(()=>this._floorFilterClause,e),this._updatingHandles.add(()=>this._excludeObjectIdsSorted,e),this._updatingHandles.add(()=>this._setVisibilityHiddenObjectIdsSorted,e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.sortedObjectIds},e),this._updatingHandles.add(()=>{var t;return(t=this.viewFilter)==null?void 0:t.parsedWhereClause},e),this._updatingHandles.add(()=>this.getTimeFilterDependencies(),e),this._updatingHandles.add(()=>{var t,i,r;return[(t=this.viewFilter)==null?void 0:t.parsedGeometry,(i=this.mergedFilter)==null?void 0:i.spatialRelationship,(r=this.layer.filter)==null?void 0:r.spatialRelationship]},()=>this._geometryFilterChange()),this.i3sOverrides.is3DOFL&&this._updatingHandles.add(()=>this.i3sOverrides.sortedGeometryChangedObjectIds,e),this.addHandles(this.layer.on("apply-edits",t=>this._updatingHandles.addPromise(t.result))),this.addHandles(this.layer.on("edits",t=>{const i=this._pendingEditsQueue.then(()=>this._handleEdits(t)).then();this._pendingEditsQueue=i,this._updatingHandles.addPromise(i)}))}destroy(){this._fieldsHelper=m(this._fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&_.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){var t;const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return((t=this.mergedFilter)==null?void 0:t.createQuery(e))??new d(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(i=>{if(!(i!=null&&i.features))return i;const r=this.layer;for(const o of i.features)o.layer=r,o.sourceLayer=r;return i})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=S(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new D({layerView:this,priority:f.FEATURE_QUERY_ENGINE,spatialIndex:new G({featureAdapter:new L({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo??[],getFeatureExtent:e}),forAllFeatures:(t,i)=>this._forAllFeatures((r,o,a)=>t({id:r,index:o,meta:a}),i,C.QUERYABLE),getFeatureExtent:e,sourceSpatialReference:U(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e,t){const i=this._highlights;if(t??(t=w),e instanceof d){const{set:r,handle:o}=i.acquireSet(t);return this.queryObjectIds(e).then(a=>i.setFeatureIds(r,a,t)),o}return super.highlight(e,t)}createInteractiveEditSession(e){return q(this._attributeEditingContext,e)}_createLayerGraphic(e){return new F({attributes:e,layer:this.layer,sourceLayer:this.layer})}getFilters(){const e=super.getFilters();this.i3sOverrides.is3DOFL&&this.i3sOverrides.sortedGeometryChangedObjectIds.length>0&&e.push((r,o)=>{o.node.index>=0&&u(this.i3sOverrides.sortedGeometryChangedObjectIds,!1,r)});const t=this._setVisibilityHiddenObjectIdsSorted;t!=null&&e.push(r=>u(t,!1,r));const i=this._excludeObjectIdsSorted;return i!=null&&e.push(r=>u(i,!1,r)),this._floorFilterClause&&this.addSqlFilter(e,this._floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),this.viewFilter!=null&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}setVisibility(e,t){t?this._setVisibilityHiddenObjectIds.delete(e):this._setVisibilityHiddenObjectIds.add(e)}isUpdating(){return super.isUpdating()||this.layerFilterUpdating||this.viewFilter!=null&&this.viewFilter.updating||this.i3sOverrides!=null&&this.i3sOverrides.updating}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():d.from(e))}get _attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),globalIdField:this._getGlobalIdField(),forEachNode:e=>this._forAllNodes(t=>t!=null?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this.i3sOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}async _handleEdits(e){const t=this._attributeEditingContext,i=await $(t,e);A(t,i),R(t,i)}get hasGeometryFilter(){const e=this.viewFilter;return(e==null?void 0:e.parsedGeometry)!=null}computeNodeFiltering(e){const t=this.viewFilter;return t==null||!this.view.spatialReference||t.isMBSGeometryVisible(e,this.view.spatialReference,this._controller.crsIndex)?c.Unmodified:c.Culled}};l([n()],s.prototype,"i3slayer",null),l([n(b)],s.prototype,"updatingProgress",void 0),l([n({type:v})],s.prototype,"filter",null),l([n({readOnly:!0})],s.prototype,"viewFilter",null),l([n(y.requiredFields)],s.prototype,"requiredFields",null),l([n(y.availableFields)],s.prototype,"availableFields",void 0),l([n()],s.prototype,"_fieldsHelper",void 0),l([n()],s.prototype,"_floorFilterClause",null),l([n()],s.prototype,"_excludeObjectIdsSorted",null),l([n()],s.prototype,"_setVisibilityHiddenObjectIds",void 0),l([n()],s.prototype,"_setVisibilityHiddenObjectIdsSorted",null),l([n()],s.prototype,"lodFactor",null),l([n()],s.prototype,"updatingProgressValue",null),l([n({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),s=l([I("esri.views.3d.layers.SceneLayerView3D")],s);const st=s;export{st as default};
