import{A as l,u as h,c,e as d,C as u,B as m,r as t,m as o,a as y}from"./index-pOkNMSkH.js";import{l as g}from"./LayerView3D-ChJeke1e.js";import{m as b,r as f}from"./queryForSymbologySnapping-DBANY1iM.js";import{x as v}from"./GraphicsProcessor-BKnhNs_x.js";import{r as S}from"./projectExtentUtils-Rp4_o5Ih.js";import{y as w}from"./LayerView-Da_1He01.js";import"./renderingInfoUtils-pQN8g8I8.js";import"./ExtentSet-3acE0Xrf.js";import"./optimizedFeatureQueryEngineAdapter-BBnAuhfW.js";import"./centroid-DdLmOD72.js";import"./PooledRBush-BLgz4_xp.js";import"./quickselect-QQC62dOK.js";import"./popupUtils-CaLqO6dx.js";import"./Graphics3DObjectStates-BptP2_Fh.js";import"./highlightUtils-eA5M_joT.js";import"./languageUtils-CrGoFNJp.js";import"./TimeOnly-DtwEOrV3.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-Ctlar3ob.js";import"./number-DY5_ZXb0.js";import"./geometryServiceUtils-Z6IeQ8Qp.js";let s=class extends g(w){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new v({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",e=>this.processor.graphicsCore.graphicUpdateHandler(e))),this.addResolvingPromise(S(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.layer.internal?this.notifyChange("updating"):this.addHandles(l(()=>{var e,r;return(r=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:r.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",h(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}get visibleAtCurrentScale(){var e;return!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var r;const e=super.getSuspendInfo();return e.outsideOfView=((r=this.processor)==null?void 0:r.frustumVisibilitySuspended)??!1,e}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,r){return this.processor.whenGraphicBounds(e,r)}computeAttachmentOrigin(e,r){var i;return(i=this.processor)==null?void 0:i.computeAttachmentOrigin(e,r)}getSymbolLayerSize(e,r){return this.processor.getSymbolLayerSize(e,r)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e,r){return this.processor.highlight(e,r??c)}async elevationAlignPointsInFeatures(e,r){const{processor:i}=this;if((i==null?void 0:i.graphics3DGraphics)==null)throw new d("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:n}=i,p=a=>typeof a=="number"?n.get(a):void 0;return b(this.view,this.layer,p,e,r)}async queryForSymbologySnapping(e,r){return f(this.processor,e,r)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||u.SYNC}isUpdating(){var e,r;return this.view&&this.layer&&!(!((e=this.processor)!=null&&e.updating)&&(this.layer.internal||(r=this.view.basemapTerrain)!=null&&r.ready))}get performanceInfo(){return new m(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,r;return((r=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:r.usedMemory)??0}get unloadedMemory(){var e,r;return(r=(e=this.processor)==null?void 0:e.graphicsCore)==null?void 0:r.unprocessedMemoryEstimate}get test(){return{graphics3DProcessor:this.processor,loadedGraphics:this.loadedGraphics}}};t([o()],s.prototype,"loadedGraphics",null),t([o({readOnly:!0})],s.prototype,"legendEnabled",null),t([o()],s.prototype,"layer",void 0),t([o({readOnly:!0})],s.prototype,"processor",void 0),t([o({readOnly:!0})],s.prototype,"visibleAtCurrentScale",null),t([o()],s.prototype,"_slicePlaneEnabled",void 0),t([o({type:Boolean})],s.prototype,"slicePlaneEnabled",null),s=t([y("esri.views.3d.layers.GraphicsLayerView3D")],s);const q=s;export{q as default};
