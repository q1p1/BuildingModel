const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/I3STreeDebugger-C8G2oXd_.js","assets/index-G3D84UsQ.js","assets/TileTreeDebugger-_LelAL7l.js"])))=>i.map(i=>d[i]);
import{b5 as V,kz as j,kA as H,u as y,P as N,E as Q,_ as q,g_ as C,C as k,iX as T,aa as U,c as z,z as w,fe as F,kB as B,hh as K,cK as W,d7 as S,dX as Z,hL as X,cO as Y,kC as J,kD as ee,j0 as A,d$ as te,kE as re,j_ as ie,kF as se,hb as oe,ac as G,cQ as ae,B as ne,r as p,m as g,cR as de,M as le,a as he,bH as ue,kG as ce}from"./index-G3D84UsQ.js";import{G as P,K as pe}from"./I3SOverrides-piMlb3HZ.js";import{h as ge}from"./WorkerHandle-BCXIus3K.js";import{l as me}from"./LayerView3D-BFtp54c8.js";import{D as _e,l as fe}from"./Graphics3DFeatureProcessor-Dq3UqUeR.js";import{a as ye,s as be,b as ve,c as Ie,i as xe,w as Ee}from"./SceneLayerView-Cm39_WpR.js";import{X as we,e as Ne,k as Ce,A as Oe,Q as M}from"./I3SUtil-3OPo8XKB.js";import{u as De,t as Fe}from"./TemporalSceneLayerView-CPwU98wT.js";import{i as Se}from"./PopupSceneLayerView-YorDxchx.js";import{u as Ae}from"./popupUtils-BXynMqud.js";import"./RenderTexture-DAQisrCW.js";import"./resourceUtils-zNFEKXhb.js";import"./I3SNode-C8QFn2ZZ.js";import"./I3SBinaryReader-BdpIzS8q.js";import"./ReactiveSet-DD_c_NOy.js";import"./meshFeatureSet-BfjKeEcU.js";import"./Mesh-CDbnlyGp.js";import"./MeshComponent-DDjRZZYL.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshTransform-BWto7ow4.js";import"./MeshVertexAttributes-CqsqcgTd.js";import"./triangulationUtils-K7-jUd2H.js";import"./earcut-Lltz9D9k.js";import"./deduplicate-DHvum9bH.js";import"./vertexSpaceConversion-DUoTonOO.js";import"./vec4-DdXe5Z-g.js";import"./External-DGo3uqKY.js";import"./infoFor3D-CxdEiWhp.js";import"./meshFeatureAttributes-B9QlpBs1.js";import"./hash-CcEbRgUF.js";import"./renderingInfoUtils-yGppO6wP.js";import"./ExtentSet-BXE_VPj7.js";import"./optimizedFeatureQueryEngineAdapter-CCotpAy-.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-D-ATxIjD.js";import"./quickselect-QQC62dOK.js";import"./Graphics3DObjectStates-B6Au6HIq.js";import"./attributeUtils-Dc8--CBJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-BWw9lcmx.js";import"./normalizeUtils-CN02gkhR.js";import"./normalizeUtilsCommon-BW6deybX.js";import"./WhereClause-6APA9kTi.js";import"./TimeOnly-BmNOX0Ud.js";import"./queryUtils-yFtMknTG.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-DeZ-9AUB.js";import"./utils-DEu-2ora.js";import"./utils-DSAD0UQ2.js";import"./ClassBreaksDefinition-CnnxbvLA.js";import"./SnappingCandidate-O5eRSE6e.js";import"./highlightUtils-C4VWpjnI.js";import"./languageUtils-Be0ZelXh.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-CYrZUHks.js";import"./number-8SXt1cc6.js";import"./LayerView-CZktMiNm.js";import"./timeSupport-4DS_bJ4N.js";import"./utils-CbNh88eX.js";class $ extends ge{constructor(t){super("SceneLayerWorker","dracoDecompressPointCloudData",{dracoDecompressPointCloudData:i=>[i.geometryBuffer]},t,{hasInitialize:!0})}}class Ge extends V{constructor(t,i){super(),this._updateAndCompare=t,this._notifyUpdated=i,this._nodes=new Map,this._graphics=new Map,this._duplicates=new Map}clear(){if(this._graphics.size>0){const t=this.toArray();this._graphics.clear(),this.emit("change",{added:[],removed:t})}this._nodes.clear()}get length(){return this._graphics.size}get(t){return this._graphics.get(t)}getNode(t){return this._nodes.get(t)}hasNode(t){return this._nodes.has(t)}nodes(){return this._nodes.values()}addNode(t,i){this._nodes.set(t,i);const r=i.graphics;if(r.length===0)return;const s=new Set;for(let a=0;a<r.length;a++){const n=r[a],d=n.objectId,u=this._graphics.get(d);if(u){s.add(d),n!==u&&(r[a]=u);const h=this._duplicates.get(d);h?h.push(t):this._duplicates.set(d,[u.nodeIndex,t])}else n.nodeIndex=t,this._graphics.set(d,n)}s.size&&this._updateForeignGraphics(i);const o=s.size>0?r.filter(a=>!s.has(a.objectId)):r;o.length>0&&this.emit("change",{added:o,removed:[]})}removeNode(t){const i=this._nodes.get(t);if(!i)return;this._nodes.delete(t);const r=new Set,s=[];for(const o of i.graphics){const a=o.objectId,n=this._graphics.get(a);if(!n)continue;const d=this._duplicates.get(a);if(d){const u=d.indexOf(t);if(u===-1)continue;if(d.splice(u,1),n.nodeIndex===t){let h=this.getNode(d[0]);for(let l=1;l<d.length;l++){const m=this.getNode(d[l]);(h==null||m!=null&&m.node.level>h.node.level)&&(h=m)}h!=null&&r.add(h)}d.length===1&&this._duplicates.delete(a)}else this._graphics.delete(a),s.push(o)}s.length>0&&this.emit("change",{added:[],removed:s}),r.forEach(o=>this._updateForeignGraphics(o))}_updateForeignGraphics(t){const i=[],r=t.node.index,s=t.node.level;let o=0;for(;o<t.graphics.length;){const a=t.graphics[o].nodeIndex;if(a===r){o++;continue}let n=1;for(;o+n<t.graphics.length&&t.graphics[o+n].nodeIndex===a;)n++;const d=this.getNode(a);if(d!=null&&d.node.level>s)o+=n;else{for(let u=o;u<o+n;u++){const h=t.graphics[u];h.nodeIndex=r,this._updateAndCompare(h,t,u)&&i.push(h)}o+=n}}i.length>0&&this._notifyUpdated(i)}toArray(){return Array.from(this._graphics.values())}find(t){return j(this._graphics,t)}some(t){return H(this._graphics,t)}forEach(t){this._graphics.forEach(i=>t(i))}forEachNode(t){this._nodes.forEach((i,r)=>t(i,r))}get nodeCount(){return this._nodes.size}_checkInvariants(){const t=new Map;this._nodes.forEach((i,r)=>{i.graphics.forEach(s=>{t.set(s.objectId,1+(t.get(s.objectId)??0)),this._duplicates.get(s.objectId)})}),t.forEach((i,r)=>{const s=this._graphics.get(r);if(!s||!this._nodes.get(s.nodeIndex))return;const o=this._duplicates.get(r);o&&o.forEach(a=>{this._nodes.get(a)})})}}const R=xe();class Pe{constructor(t,i,r,s){this.graphics=t,this.featureIds=i,this.attributeInfo=r,this.node=s}}let c=class extends De(Fe(Se(me(Ee)))){constructor(){super(...arguments),this.type="scene-layer-graphics-3d",this._queryEngine=null,this._memCache=null,this._interactiveEditingSessions=new Map,this._pendingEditsQueue=Promise.resolve(),this.loadedGraphics=new Ge((e,t,i)=>Re(e,t,i),e=>this.processor.graphicsCore.recreateGraphics(e)),this.holeFilling="always",this.progressiveLoadFactor=1,this.supportsHeightUnitConversion=!0,this._coordinatesOutsideExtentErrors=0,this._maxCoordinatesOutsideExtentErrors=20}tryRecycleWith(e,t){return e.url===this.layer.url&&this._i3sOverrides.isEmpty?e.load(t).then(()=>{var r;we(this.layer,e,this._i3sOverrides),this.layer=e,this._i3sOverrides.destroy();const i=(r=this.view.resourceController)==null?void 0:r.memoryController;this._i3sOverrides=new P({view:this.view,layer:e,memoryController:i}),y(this._queryEngine),this._setupQueryEngine(),this.processor.resetObjectStates()}):null}initialize(){var t,i;this.addResolvingPromise(this.layer.indexInfo);const e=(t=this.view.resourceController)==null?void 0:t.memoryController;this._i3sOverrides=new P({view:this.view,layer:this.layer,memoryController:e}),Ne(this.layer,this.view.spatialReference,this.view.viewingMode),this._fieldsHelper=new ye({layerView:this}),this._updatingHandles.add(()=>this.layer.rangeInfos,r=>this._rangeInfosChanged(r),N),this._updatingHandles.add(()=>this.layer.renderer,(r,s)=>this._rendererChange(r,s)),this._updatingHandles.add(()=>[this.parsedDefinitionExpression,this._excludeObjectIdsSorted],()=>this._filterChange()),this.addHandles(Q(()=>C.I3S_TREE_SHOW_TILES,r=>{if(r&&!this._treeDebugger){const s=this._controller.crsIndex;q(()=>import("./I3STreeDebugger-C8G2oXd_.js"),__vite__mapDeps([0,1,2])).then(({I3STreeDebugger:o})=>{!this._treeDebugger&&C.I3S_TREE_SHOW_TILES&&(this._treeDebugger=new o({lv:this,view:this.view,nodeSR:s}))})}else r||!this._treeDebugger||C.I3S_TREE_SHOW_TILES||(this._treeDebugger.destroy(),this._treeDebugger=null)},N)),this._set("processor",new _e({owner:this,preferredUpdatePolicy:k.ASYNC,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,setUidToIdOnAdd:!1,dataExtent:this.layer.fullExtent,updateClippingExtent:r=>this._updateClippingExtent(r)})),(i=this.processor.elevationAlignment)==null||i.events.on("invalidate-elevation",({extent:r,spatialReference:s})=>this._controller.updateElevationChanged(r,s)),this.supportsHeightUnitConversion&&(this._verticalScale=T("point",this.layer.spatialReference,this.view.spatialReference)),this.addResolvingPromise(this.processor.when()),this._memCache=this.view.resourceController.memoryController.newCache(`psl-${this.uid}`),this._controller=new pe({layerView:this}),Ce(this.layer.geometryDefinitions)&&(this._worker=new $(r=>this.view.resourceController.immediate.schedule(r))),this.addHandles(this.layer.on("apply-edits",r=>this._updatingHandles.addPromise(r.result))),this.addHandles(this.layer.on("edits",r=>{const s=this._pendingEditsQueue.then(()=>this._handleEdits(r)).then();this._pendingEditsQueue=s,this._updatingHandles.addPromise(s)})),this.when(()=>{this._setupQueryEngine(),this._updatingHandles.add(()=>this.maximumNumberOfFeatures,r=>this._controller.featureTarget=r,N),this._updatingHandles.add(()=>this.suspended,r=>{r&&this._removeAllNodeData()})})}destroy(){this._treeDebugger=y(this._treeDebugger),this._i3sOverrides=y(this._i3sOverrides),this._set("processor",y(this.processor)),this._controller=y(this._controller),this._queryEngine=y(this._queryEngine),this._worker=y(this._worker),this._memCache=y(this._memCache),this.loadedGraphics.clear(),this._fieldsHelper=y(this._fieldsHelper)}get i3slayer(){return this.layer}get updatingProgressValue(){var e;return((e=this._controller)==null?void 0:e.updatingProgress)??1}get requiredFields(){var e;return((e=this._fieldsHelper)==null?void 0:e.requiredFields)??[]}get maximumNumberOfFeatures(){var t,i;const e=(i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.displayFeatureLimit;return(e==null?void 0:e.maximumNumberOfFeatures)??0}set maximumNumberOfFeatures(e){e!=null?(this._override("maximumNumberOfFeatures",e),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)}get maximumNumberOfFeaturesExceeded(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.useMaximumNumberOfFeatures)&&!this._controller.leavesReached}get _excludeObjectIdsSorted(){const e=this.layer.excludeObjectIds;return e.length?e.toArray().sort((t,i)=>t-i):null}get lodFactor(){return this.layer.semantic==="Labels"?1:this.view.qualitySettings.sceneService.point.lodFactor}get hasM(){return!1}get hasZ(){return!0}get contentVisible(){var e;return!this.suspended&&!!((e=this._controller)!=null&&e.rootNodeVisible)}get legendEnabled(){var e;return this.contentVisible&&((e=this.i3slayer)==null?void 0:e.legendEnabled)===!0}async whenGraphicAttributes(e,t){return Oe(this.layer,e,this._getObjectIdField(),t,()=>[...this.loadedGraphics.nodes()])}getHit(e){var r;if(!this.loadedGraphics)return null;const t=U(this.loadedGraphics.find(s=>s.uid===e),this.layer),i=this._getObjectIdField();return(r=t==null?void 0:t.attributes)!=null&&r[i]?(t.layer=this.layer,t.sourceLayer=this.layer,{type:"graphic",graphic:t,layer:t.layer}):null}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){return this.processor.computeAttachmentOrigin(e,t)}isUpdating(){var e,t,i;return!!((e=this._controller)!=null&&e.updating||(t=this.processor)!=null&&t.updating||(i=this._fieldsHelper)!=null&&i.updating||this.layerFilterUpdating)}highlight(e,t){return this.processor.highlight(e,this.layer.objectIdField,t??z)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}createInteractiveEditSession(e){return be(this._attributeEditingContext,e)}async _decompressBinaryPointData(e,t){const i={geometryBuffer:e.geometryBuffer};this._worker==null&&(this._worker=new $(s=>this.view.resourceController.immediate.schedule(s)));const r=await this._worker.invoke(i,t);if(r==null)throw new Error("Failed to decompress Draco point data");return{positionData:r.positions,featureIds:r.featureIds}}async addNode(e,t,i){var f;if(!O(t)&&!$e(t))throw new Error;if(this.loadedGraphics.hasNode(e.index))return void w.getLogger(this).error("I3S node "+e.id+" already added");const r=this.layer.fullExtent!=null?Me(this.layer.fullExtent.clone(),.5):null,{featureIds:s,pointPositions:o}=O(t)?await this._extractBinaryPointPositions(e,t,i):this._extractLegacyPointPositions(t),a=new Array;this._validatePositions(e,s,o,r,a);const n=this._controller.crsVertex,d=this.view.spatialReference;F(o,n,0,o,d,0,s.length);const u=O(t)?e.level:0,h=this._createGraphics(s,o,e.index,u),l=new Pe(h,s,t.attributeDataInfo,e);if(await this._i3sOverrides.applyAttributeOverrides(l.featureIds,t.attributeDataInfo,i),e.numFeatures=l.graphics.length,this._updateNodeMemory(e),D(l),a.length>0&&(this._computeObb(e,a,n),this._controller.updateVisibility(e.index)),!this._controller.isGeometryVisible(e))return void this._cacheNodeData(l);if(this._verticalScale!=null)for(const b of l.graphics)this._verticalScale(b.geometry);const m=this.view._stage.renderView.olidRenderHelper;if(m){const b=B(this.view.map,this.layer.uid);for(let x=0;x<l.featureIds.length;x++){const E=l.featureIds[x];m.setUidToObjectAndLayerId(E,l.graphics[x].uid,this.layer.id,this.layer.uid,this.layer.popupEnabled&&!b&&Ae(this.layer,(f=this.view.popup)==null?void 0:f.defaultPopupTemplateEnabled),l.node.resources.attributes,x)}}this.loadedGraphics.addNode(e.index,l),this._controller.updateLoadStatus(e.index,!0),this._filterNode(l),this._treeDebugger&&this._treeDebugger.update()}_computeObb(e,t,i){const r=this._controller.crsIndex,s=r.isGeographic?this.view.renderSpatialReference:r;F(t,i,0,t,s,0),e.serviceObbInIndexSR=K(new ce(t,3)),r.isGeographic&&(W(e.serviceObbInIndexSR.center,s,I,r),e.serviceObbInIndexSR.center=I)}isNodeLoaded(e){return this.loadedGraphics.hasNode(e)}isNodeReloading(){return!1}updateNodeState(){}async _extractBinaryPointPositions(e,t,i){const r=await this._decompressBinaryPointData(t,i),s=r.positionData,o=3,a=s.length/o,n=S(3*a),d=e.serviceObbInIndexSR!=null?e.serviceObbInIndexSR.center:Z,u=Math.abs(d[2])*2**-20;for(let h=0;h<a;h++){const l=h*o;n[l]=s[l]+d[0],n[l+1]=s[l+1]+d[1],n[l+2]=s[l+2]+d[2],Math.abs(n[l+2])<u&&(n[l+2]=0)}return{featureIds:r.featureIds?X(r.featureIds):[],pointPositions:n}}_extractLegacyPointPositions(e){var s,o;const t=e.pointData.length,i=S(3*t),r=new Array;for(let a=0;a<t;a++){const n=e.pointData[a],d=n.featureDataPosition,u=d.length,h=((s=n.geometries)==null?void 0:s[0])??Le[u],l=n.featureIds[0];if(h.type!=="Embedded"||h.params.type!=="points"||u<2||u>3)continue;const m=((o=h.params.vertexAttributes)==null?void 0:o.position)??[0,0,0],f=3*r.length;i[f]=d[0]+m[0],i[f+1]=d[1]+m[1],i[f+2]=u===3?d[2]+m[2]:NaN,r.push(l)}return{featureIds:r,pointPositions:i}}_validatePositions(e,t,i,r,s){if(r==null&&e.serviceObbInIndexSR)return;const o=t.length,a=3;for(let n=0;n<o;n++){const d=n*a;Y(I,i[d],i[d+1],i[d+2]);const u=!Number.isNaN(i[2]);r==null||(u?J(r,I):ee(r,I))||(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&w.getLogger(this).error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++),e.serviceObbInIndexSR||s.push(I[0],I[1],I[2])}}_createGraphics(e,t,i,r){const s=e.length,o=3,a=this._getObjectIdField(),n=this.processor.graphicsCore,d=new Array,u=this.view.spatialReference;for(let h=0;h<s;h++){const l=e[h],m={};l!=null&&(m[a]=l);const f=l??A(),b=h*o,x=isNaN(t[b+2])?void 0:t[b+2],E=te(t[b],t[b+1],x,u),v=this.loadedGraphics.get(f);if(v!=null)(v.level==null||v.level<r)&&(_.property="geometry",_.graphic=v,_.oldValue=v.geometry,_.newValue=E,v.geometry=E,v.level=r,n.graphicUpdateHandler(_)),d.push(v);else{const L=A();d.push({objectId:f,uid:L,geometry:E,attributes:m,visible:!0,nodeIndex:i,level:r})}}return d}_updateNodeMemory(e){e.memory=4096+(e.numFeatures!=null?e.numFeatures*this.processor.graphicsCore.usedMemoryPerGraphic:0)}_cacheNodeData(e){const t=e.graphics.reduce((i,r)=>re(r)+i,ie(e.featureIds)+1024);this._memCache.put(this._getMemCacheKey(e.node),e,t)}_getMemCacheKey(e){return`${e.index}`}_removeAllNodeData(){this.loadedGraphics.forEachNode((e,t)=>{if(e){const i=e.node;this._updateNodeMemory(i),this._cacheNodeData(e)}this._controller.updateLoadStatus(t,!1)}),this._treeDebugger&&this._treeDebugger.update(),this.loadedGraphics.clear()}removeNode(e){const t=this._removeNodeStageData(e);t&&(this._updateNodeMemory(t.node),this._cacheNodeData(t))}_removeNodeStageData(e){const t=this.loadedGraphics.getNode(e);return t==null?null:(this._controller.updateLoadStatus(e,!1),this.loadedGraphics.removeNode(e),this._treeDebugger&&this._treeDebugger.update(),t)}async loadCachedNodeData(e){var t;return(t=this._memCache)==null?void 0:t.pop(this._getMemCacheKey(e))}async addCachedNodeData(e,t,i,r){this.loadedGraphics.hasNode(e.index)?w.getLogger(this).error("I3S node "+e.id+" already added"):(await this._i3sOverrides.applyAttributeOverrides(t.featureIds,i,r),t.attributeInfo=i,this.loadedGraphics.addNode(e.index,t),this._controller.updateLoadStatus(e.index,!0),this._updateNodeMemory(e),D(t),this._filterNode(t),this._treeDebugger&&this._treeDebugger.update())}getLoadedNodeIds(){const e=[];return this.loadedGraphics.forEachNode(t=>e.push(t.node.id)),e.sort()}getVisibleNodes(){const e=new Array;return this.loadedGraphics.forEachNode(t=>e.push(t.node)),e}getLoadedNodeIndices(e){this.loadedGraphics.forEachNode((t,i)=>e.push(i))}getLoadedAttributes(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.loadedAttributes}getAttributeData(e){const t=this.loadedGraphics.getNode(e);if((t==null?void 0:t.attributeInfo)!=null)return t.attributeInfo.attributeData}_setAttributeData(e,t){const i=this.loadedGraphics.getNode(e);(i==null?void 0:i.attributeInfo)!=null&&(i.attributeInfo.attributeData=t,this._attributeValuesChanged(i))}async updateAttributes(e,t,i){const r=this.loadedGraphics.getNode(e);r!=null&&(await this._i3sOverrides.applyAttributeOverrides(r.featureIds,t,i),r.attributeInfo=t,this._attributeValuesChanged(r))}_attributeValuesChanged(e){D(e),this._filterNode(e);const{processor:t}=this,{graphicsCore:i}=t;if(i.labelsEnabled){const r=e.node.index,s=new Array;e.graphics.forEach(o=>o.nodeIndex===r&&s.push(o.uid)),i.updateLabelingInfo(s)}t.refreshFilter()}_updateClippingExtent(e){return this._controller&&this._controller.updateClippingArea(e),!1}_getObjectIdField(){return this.layer.objectIdField||se}_getGlobalIdField(){var e;return(e=this.layer.associatedLayer)==null?void 0:e.globalIdField}async _rendererChange(e,t){const{layer:{fieldsIndex:i}}=this,r=new Set;let s,o;e?(await e.collectRequiredFields(r,i),s=Array.from(r).sort()):s=[],r.clear(),t?(await t.collectRequiredFields(r,i),o=Array.from(r).sort()):o=[],s.length===o.length&&s.every((a,n)=>s[n]===o[n])||this._reloadAllNodes()}_rangeInfosChanged(e){e!=null&&e.length>0&&w.getLogger(this).warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}_filterChange(){this.loadedGraphics.forEachNode(e=>this._filterNode(e))}_reloadAllNodes(){this._removeAllNodeData(),this._controller&&this._controller.restartNodeLoading()}_filterNode(e){const t=this.parsedDefinitionExpression,i=this._excludeObjectIdsSorted,r=this._getObjectIdField();for(const s of e.graphics){const o=s.visible,a=!t||this._evaluateClause(t,s),n=i==null||oe(i,s.attributes[r])<0;s.visible=a&&n,o!==s.visible&&(_.graphic=s,_.property="visible",_.oldValue=o,_.newValue=s.visible,this.processor.graphicsCore.graphicUpdateHandler(_))}}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return this.filter!=null?this.filter.createQuery(e):new G(e)}queryFeatures(e,t){return this._queryEngine.executeQuery(this._ensureQuery(e),t==null?void 0:t.signal)}queryObjectIds(e,t){return this._queryEngine.executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._queryEngine.executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryExtent(e,t){return this._queryEngine.executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQuery(e){return this._addDefinitionExpressionToQuery(e==null?this.createQuery():G.from(e))}_setupQueryEngine(){const e=()=>this.processor.featureStore;this._queryEngine=new fe({context:{spatialReference:this.view.spatialReference,layer:this.layer,scheduler:this.view.resourceController.scheduler,get featureStore(){return e()},hasZ:this.hasZ,hasM:this.hasM},priority:ae.FEATURE_QUERY_ENGINE})}get usedMemory(){var e,t;return((t=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:t.usedMemory)??0}get unloadedMemory(){var e,t,i;return .8*((((e=this._controller)==null?void 0:e.unloadedMemoryEstimate)??0)+(((i=(t=this.processor)==null?void 0:t.graphicsCore)==null?void 0:i.unprocessedMemoryEstimate)??0))}get ignoresMemoryFactor(){return this._controller&&this._controller.fixedFeatureTarget}async _handleEdits(e){const t=this._attributeEditingContext,i=await ve(t,e);Ie(t,i)}get _attributeEditingContext(){const e=this._getObjectIdField(),t=this._getGlobalIdField();return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:e,globalIdField:t,forEachNode:i=>this.loadedGraphics.forEachNode(r=>i(r.node,r.featureIds)),attributeStorageInfo:this.i3slayer.attributeStorageInfo??[],i3sOverrides:this._i3sOverrides,getAttributeData:i=>this.getAttributeData(i),setAttributeData:(i,r,s)=>{this._setAttributeData(i,r);const o=this.loadedGraphics.getNode(i);if(s!=null){const a=this.loadedGraphics.get(s.attributes[e]);a!=null&&this.processor.graphicsCore.recreateGraphics([a])}else o!=null&&this.processor.graphicsCore.recreateGraphics(o.graphics)},clearMemCache:()=>{}}}get performanceInfo(){return new ne(this.usedMemory,this.loadedGraphics.length,-1,this.maximumNumberOfFeatures,this.loadedGraphics.nodeCount,this.processor.graphicsCore.performanceInfo)}get test(){}};p([g()],c.prototype,"processor",void 0),p([g({type:de})],c.prototype,"filter",void 0),p([g()],c.prototype,"loadedGraphics",void 0),p([g()],c.prototype,"i3slayer",null),p([g()],c.prototype,"_controller",void 0),p([g()],c.prototype,"updating",void 0),p([g()],c.prototype,"suspended",void 0),p([g()],c.prototype,"holeFilling",void 0),p([g(le)],c.prototype,"updatingProgress",void 0),p([g()],c.prototype,"updatingProgressValue",null),p([g(R.requiredFields)],c.prototype,"requiredFields",null),p([g(R.availableFields)],c.prototype,"availableFields",void 0),p([g()],c.prototype,"_fieldsHelper",void 0),p([g({type:Number})],c.prototype,"maximumNumberOfFeatures",null),p([g({readOnly:!0})],c.prototype,"maximumNumberOfFeaturesExceeded",null),p([g()],c.prototype,"_excludeObjectIdsSorted",null),p([g({readOnly:!0})],c.prototype,"lodFactor",null),p([g({readOnly:!0})],c.prototype,"hasM",null),p([g({readOnly:!0})],c.prototype,"hasZ",null),p([g()],c.prototype,"contentVisible",null),p([g({readOnly:!0})],c.prototype,"legendEnabled",null),c=p([he("esri.views.3d.layers.SceneLayerGraphicsView3D")],c);const Tt=c;function $e(e){return"pointData"in e}function O(e){return"geometryBuffer"in e&&e.geometryBuffer!==null}function Re(e,t,i){const r=t.attributeInfo;if((r==null?void 0:r.loadedAttributes)==null||r.attributeData==null)return!1;let s=!1;for(const{name:o}of r.loadedAttributes)if(r.attributeData[o]){const a=M(r.attributeData[o],i);a!==e.attributes[o]&&(e.attributes[o]=a,s=!0)}return s}function D(e){const t=e.attributeInfo,i=e.node.index;if((t==null?void 0:t.loadedAttributes)!=null&&t.attributeData!=null)for(let r=0;r<e.graphics.length;r++){const s=e.graphics[r];if(s.nodeIndex===i){s.attributes||(s.attributes={});for(const{name:o}of t.loadedAttributes)t.attributeData[o]&&(s.attributes[o]=M(t.attributeData[o],r))}}}function Me(e,t){return e.xmin-=t,e.ymin-=t,e.xmax+=t,e.ymax+=t,e.zmin!=null&&e.zmax!=null&&(e.zmin-=t,e.zmax+=t),e.mmin!=null&&e.mmax!=null&&(e.mmin-=t,e.mmax+=t),e}const Le={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},I=ue(),_={graphic:null,property:null,oldValue:null,newValue:null};export{Tt as default};