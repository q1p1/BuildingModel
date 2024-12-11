import{r as o,m as d,a as c,e as v,i as D,ac as E,as as u,fV as _,A as b}from"./index-pOkNMSkH.js";import{N as H}from"./DynamicLayerView3D-gUExgU8f.js";import{i as I}from"./timeSupport-BW-grnHU.js";import{p as P}from"./popupUtils-CaLqO6dx.js";import"./LayerView3D-ChJeke1e.js";import"./projectExtentUtils-Rp4_o5Ih.js";import"./geometryServiceUtils-Z6IeQ8Qp.js";import"./ImageMaterial.glsl-Dgb-Of6-.js";import"./DefaultLayouts-CaaewTNL.js";import"./TriangleMaterial-D90mHXW6.js";import"./LayerView-Da_1He01.js";import"./RefreshableLayerView-BYertE9D.js";import"./utils-D8r1N2BW.js";const F=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return I(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,a){const{layer:r}=this;if(!i)throw new v("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const{popupEnabled:s}=r,n=P(r,a);if(!s||n==null)return[];const g=await n.getRequiredFields();D(a);const l=new E;l.timeExtent=this.timeExtent,l.geometry=i,l.outFields=g,l.outSpatialReference=i.spatialReference;const{resolution:m,spatialReference:h}=this.view,y=this.view.type==="2d"?new u(m,m,h):new u(.5*m,.5*m,h),{returnTopmostRaster:w,showNoDataRecords:x}=n.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},f={returnDomainValues:!0,returnTopmostRaster:w,pixelSize:y,showNoDataRecords:x,signal:a==null?void 0:a.signal};return r.queryVisibleRasters(l,f).then(R=>R)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return o([d()],t.prototype,"layer",void 0),o([d()],t.prototype,"suspended",void 0),o([d({readOnly:!0})],t.prototype,"timeExtent",null),o([d()],t.prototype,"view",void 0),t=o([c("esri.views.layers.ImageryLayerView")],t),t};let p=class extends F(H){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=_(async e=>{this.redraw((t,i)=>this._redrawImage(t,i),e)},2e3)}initialize(){this.addHandles([b(()=>this.view.basemapTerrain.ready,()=>this._initializeMaximumDataResolution(),{once:!0,initial:!0}),this.layer.on("redraw",()=>this._updatingHandles.addPromise(this.redrawDebounced()))]),this._updatingHandles.add(()=>{var e,t;return(t=(e=this.layer)==null?void 0:e.exportImageServiceParameters)==null?void 0:t.version},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>{var e;return(e=this.layer)==null?void 0:e.renderer},()=>{this._updatingHandles.addPromise(this.refreshDebounced())}),this._updatingHandles.add(()=>this.timeExtent,()=>this._updatingHandles.addPromise(this.refreshDebounced()))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,i){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,i))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||e.pixelData==null)throw new Error;const i=e.image,a=i.getContext("2d"),r=await this.layer.applyRenderer(e.pixelData,{signal:t}),s=this.layer.applyFilter(r).pixelBlock;if(s==null)throw new Error;i.width=s.width,i.height=s.height;const n=a.createImageData(s.width,s.height);n.data.set(s.getAsRGBA()),a.putImageData(n,0,0)}};p=o([c("esri.views.3d.layers.ImageryLayerView3D")],p);const B=p;export{B as default};
