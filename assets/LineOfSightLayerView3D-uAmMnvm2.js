const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LineOfSightAnalysisView3D-BOgZ_F4u.js","assets/index-CXNGdYBO.js","assets/index-C7r0H98r.css","assets/AnalysisView3D-CaP2iomc.js","assets/featureReferenceUtils-Cp5ESf5a.js","assets/LineVisualElement-BIInXZzW.js","assets/line-DdPs59U-.js","assets/LineOfSightAnalysisTarget-4rSFZog2.js","assets/persistable-Bs4_2vIU.js","assets/resourceExtension-SzBjmr0o.js","assets/ShadedColorMaterial.glsl-DCOJMWL7.js","assets/ColorMaterial.glsl-DagExn_j.js","assets/TriangleMaterial-DI2Ep85g.js","assets/EditGeometryOperations-BPBIAtGv.js","assets/geometry2dUtils-DN5mL532.js","assets/manipulatorUtils-B3ZxJq6X.js","assets/LaserlinePath.glsl-CEKHjdRP.js","assets/analysisViewUtils-DJbfGepc.js"])))=>i.map(i=>d[i]);
import{E as h,N as w,e as r,Q as d,u as _,R as V,x as c,_ as u,r as a,m as n,a as p}from"./index-CXNGdYBO.js";import{l as A}from"./LayerView3D-DT6k0xna.js";import{y as f}from"./LayerView-CO8qpCkY.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.removeHandles(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new r("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async e=>(this.analysisView=await this._createAnalysisViewPromise(s,e),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=V(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let e=this._analysisModule;if(e==null){const y=await this._loadAnalysisModule();this._analysisModule=y,e=y}const l=new e.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new r("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-BOgZ_F4u.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]))}};a([n()],i.prototype,"type",void 0),a([n()],i.prototype,"layer",void 0),a([n()],i.prototype,"analysisView",void 0),a([n()],i.prototype,"_createAnalysisViewTask",void 0),i=a([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};