const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DimensionAnalysisView3D-DesPVxU-.js","assets/index-DVfovSRj.js","assets/AnalysisView3D-PtrfPMJo.js","assets/LengthDimension-BtY8HcFU.js","assets/TextOverlayItem-C-uAn6V_.js","assets/Segment-DjUdjE1G.js","assets/viewUtils-enfmGsHP.js","assets/LineVisualElement-RkMKYPiO.js","assets/line-CqIKf7Ry.js","assets/SnappingOperation-BYfpVoTL.js","assets/geodesicLengthMeasurementUtils-CaX_le6z.js","assets/geometryEngine-DIBGr4wh.js","assets/geometryEngineBase-yFIvKOkM.js","assets/_commonjsHelpers-DCkdB7M8.js","assets/hydrated-CZzecgLn.js","assets/ExtendedLineVisualElement-nq_C0n7C.js","assets/EngineVisualElement-CuVZkibf.js","assets/LaserlinePath.glsl-BAmmDtIn.js","assets/RightAngleQuadVisualElement-CGZLpSNL.js","assets/ColorMaterial.glsl-B44fDynn.js","assets/TriangleMaterial-Bvt1HVUI.js","assets/SnappingManagerPool-NEIPHkuq.js","assets/keybindings-xTTIIDwH.js","assets/utils-60qN1-Jo.js","assets/geometry2dUtils-C_Owqzeb.js","assets/PointSnappingHint-rlylXcUV.js","assets/ShadedColorMaterial.glsl-DxC3p0I9.js","assets/EditGeometryOperations-iL1FFeDH.js","assets/dehydratedFeatureComparison-nf3ahhMS.js","assets/dragEventPipeline3D-BiknhS-4.js","assets/ImageMaterial.glsl-C2zDYiEt.js","assets/DefaultLayouts-C4A6dE7k.js","assets/memoize-DsJmrG76.js","assets/Factory-BbJvjtKt.js","assets/lineStippleUtils-C89mzWlO.js","assets/analysisViewUtils-DO8WHACn.js","assets/ToolIntersector-B0Do7Whs.js","assets/LineMarker.glsl-Cw-y0OnT.js"])))=>i.map(i=>d[i]);
import{r as a,m as t,a as o,V as h,b2 as w,E as u,N as V,e as c,Q as d,u as p,R as _,x as m,_ as v}from"./index-DVfovSRj.js";import{l as A}from"./LayerView3D-CGyMXz7m.js";import{y as f}from"./LayerView-Do2Sz7my.js";const D=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),s=a([o("esri.views.layers.DimensionLayerView")],s),s},y="analysis-view-handles";let n=class extends A(D(f)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.addHandles(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},V),y)}destroy(){this.removeHandles(y),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new c("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-DesPVxU-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]))}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([o("esri.views.3d.layers.DimensionLayerView3D")],n);const $=n;export{$ as default};
