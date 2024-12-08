import{r,m as i,a as l,b4 as M,b as O,u as g,fp as R,E as f,L as $,cR as G,C as U,e as k,ac as x}from"./index-DVfovSRj.js";import{o as T}from"./StreamFeatureManager-Cr33F_4j.js";import{createConnection as V}from"./createConnection-DYHgXBR6.js";import{r as E}from"./EventedSet-DfGIGARv.js";import{C as j,h as L}from"./HeatmapDensity.glsl-nI5TKew2.js";import{l as D}from"./LayerView3D-CGyMXz7m.js";import{y as F}from"./LayerView-Do2Sz7my.js";import"./query-DoOAVOVa.js";import"./normalizeUtils-DF_jogMk.js";import"./normalizeUtilsCommon-BiyL944r.js";import"./pbfQueryUtils-BMTOH95d.js";import"./pbf-B-7SxU3I.js";import"./timeSupport-BKQLxddX.js";import"./utils-60qN1-Jo.js";import"./projectExtentUtils-B4UbtHZC.js";import"./geometryServiceUtils-x0pcKXl-.js";import"./dehydratedFeatureComparison-nf3ahhMS.js";import"./utils-CtoAMy3a.js";import"./queryForSymbologySnapping-qhA8nbIh.js";import"./Graphics3DFeatureProcessor-Cn9_Ippn.js";import"./hash-CcEbRgUF.js";import"./renderingInfoUtils-DKXK8SlC.js";import"./ExtentSet-CF1z7fSg.js";import"./optimizedFeatureQueryEngineAdapter-CUHFVak8.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-9jWcEeT8.js";import"./quickselect-QQC62dOK.js";import"./popupUtils-BgFeWV_J.js";import"./Graphics3DObjectStates-BzzK-KTn.js";import"./attributeUtils-Dc8--CBJ.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./QueryEngine-DDNAdwwS.js";import"./WhereClause-CTNEkBB_.js";import"./TimeOnly-CaB2FMOl.js";import"./queryUtils-CPAwv2w3.js";import"./json-Wa8cmqdu.js";import"./QueryEngineCapabilities-DjYb9CEb.js";import"./utils-BwyCV35j.js";import"./utils-BP6rtoGb.js";import"./utils-BHjltxsG.js";import"./ClassBreaksDefinition-BvfmV7JG.js";import"./SnappingCandidate-O5eRSE6e.js";import"./highlightUtils-CILTp73w.js";import"./languageUtils-B3F47s5x.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-O4z3kOXb.js";import"./number-O-4AVrw4.js";import"./FeatureStore-Dx6l6pZs.js";import"./BoundsStore-C3hu8Q4r.js";const N=2500;let d=class extends ${constructor(e){super(e)}getObjectId(){return this.objectId}};r([i({type:Number,json:{read:!0}})],d.prototype,"objectId",void 0),d=r([l("esri.layers.graphics.controllers.StreamController.StreamGraphic")],d);class z{constructor(e){this.onUpdate=e,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(e){this._idToGraphic.set(e.objectId,e)}get(e){return this._idToGraphic.get(e)}forEach(e){this._idToGraphic.forEach(e)}removeById(e){const s=this._idToGraphic.get(e);return s?(s.sourceLayer=s.layer=null,this._idToGraphic.delete(e),s):null}update(e,s){this.onUpdate(e,s)}get size(){return this._idToGraphic.size}}let n=class extends M(O){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new E,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._shutdown(),this.graphics.clear()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_shutdown(){this._clearInterval(),this.connection=g(this.connection),this.store=g(this.store),this.removeAllHandles()}_startup(){const{layer:e,layerView:s}=this,{spatialReference:h,definitionExpression:p,geometryDefinition:u,objectIdField:m,timeInfo:v,purgeOptions:I,maxReconnectionAttempts:w,maxReconnectionInterval:S,customParameters:P}=e,b=e.geometryType?R.toJSON(e.geometryType):null,C=h,y=s.view.spatialReference;this.clear(),this._set("connection",V(e.parsedUrl,C,y,b,p,u,w,S,P??void 0)),this._outSpatialReference=y.toJSON(),this.store=new z(this._onUpdate.bind(this)),this.featuresManager=new T(this.store,m,v.toJSON(),I);const _="startup-watches";this.removeHandles(_),this.addHandles([e.on("send-message-to-socket",a=>this.connection.sendMessageToSocket(a)),e.on("send-message-to-client",a=>this.connection.sendMessageToClient(a)),this.connection.on("data-received",a=>this._onFeature(a)),this.connection.on("message-received",a=>this._onWebSocketMessage(a)),f(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],_),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const s of e.objectIds)this.featuresManager.removeById(s);if(e.trackIds)for(const s of e.trackIds)this.featuresManager.removeByTrackId(s);break;case"clear":this.store.forEach(s=>this.featuresManager.removeById(s.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const s=d.fromJSON(e);s.sourceLayer=s.layer=this.layer,this.featuresManager.add(s)}catch{}}_onUpdate(e,s){s!=null&&this.graphics.removeMany(s),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let s=performance.now();this._updateIntervalId=setInterval(()=>{const h=performance.now(),p=h-s;if(p>N){s=h;const u=Math.round(this._updateInfo.client/(p/1e3)),m=Math.round(this._updateInfo.websocket/(p/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:u,websocket:m})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}disconnect(){this._shutdown()}connect(){this.connection==null&&this._startup()}clearGraphics(){this.graphics.clear()}};r([i()],n.prototype,"isPaused",void 0),r([i({constructOnly:!0})],n.prototype,"layer",void 0),r([i({constructOnly:!0})],n.prototype,"layerView",void 0),r([i()],n.prototype,"connection",void 0),r([i({readOnly:!0})],n.prototype,"updating",null),n=r([l("esri.layers.graphics.controllers.StreamController")],n);let c=class extends j{constructor(t){super(t),this.suspendResumeExtentMode="computed"}get connection(){var t;return(t=this.controller)==null?void 0:t.connection}createController(){return new n({layer:this.layer,layerView:this.layerView})}beforeSetController(){}pause(){var t;(t=this.controller)==null||t.pauseStream()}resume(){var t;(t=this.controller)==null||t.resumeStream()}disconnect(){var t;(t=this.controller)==null||t.disconnect()}connect(){var t;(t=this.controller)==null||t.connect()}clear(){var t;(t=this.controller)==null||t.clearGraphics()}};r([i()],c.prototype,"controller",void 0),r([i()],c.prototype,"connection",null),r([i()],c.prototype,"suspendResumeExtentMode",void 0),c=r([l("esri.views.3d.layers.graphics.StreamGraphics3DGraphicsPipeline")],c);const B=t=>{let e=class extends t{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}disconnect(){this._doDisconnect()}connect(){this._doConnect()}clear(){this._doClear()}constructor(...s){super(...s),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return(this._isUserPaused||this.suspended)&&this._streamConnectionStatus==="connected"?"paused":this._streamConnectionStatus}_onSuspendedChange(s){s?this._doPause():this._isUserPaused||this._doResume()}};return r([i()],e.prototype,"_isUserPaused",void 0),r([i({readOnly:!0})],e.prototype,"connectionStatus",null),r([i({type:G})],e.prototype,"filter",void 0),e=r([l("esri.views.layers.StreamLayerView")],e),e};let o=class extends B(L(D(F))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=U.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.addHandles(f(()=>this.suspended,t=>{this.graphicsPipeline&&this._onSuspendedChange(t)}))}get connectionError(){var e,s;const t=(s=(e=this.graphicsPipeline)==null?void 0:e.connection)==null?void 0:s.errorString;return t?new k("stream-controller",t):null}createQuery(){return new x({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(t,e){return this.graphicsPipeline.graphicsQuery.executeQueryForLatestObservations(this._ensureQuery(t),e==null?void 0:e.signal)}get _streamConnectionStatus(){var t,e;return((e=(t=this.graphicsPipeline)==null?void 0:t.connection)==null?void 0:e.connectionStatus)??"disconnected"}async createGraphicsPipeline(){return new c({layerView:this})}createController(){return new n({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){var t;(t=this.graphicsPipeline)==null||t.pause()}_doResume(){var t;(t=this.graphicsPipeline)==null||t.resume()}_doDisconnect(){var t;(t=this.graphicsPipeline)==null||t.disconnect(),this._doPause()}_doConnect(){var t;(t=this.graphicsPipeline)==null||t.connect(),this.resume()}_doClear(){var t;(t=this.graphicsPipeline)==null||t.clear()}};r([i({readOnly:!0})],o.prototype,"updatePolicy",void 0),r([i({readOnly:!0})],o.prototype,"connectionError",null),r([i()],o.prototype,"graphicsPipeline",void 0),r([i({readOnly:!0})],o.prototype,"hasZ",void 0),r([i({readOnly:!0})],o.prototype,"hasM",void 0),r([i({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=r([l("esri.views.3d.layers.StreamLayerView3D")],o);const Ne=o;export{Ne as default};
