import{b as E,gQ as F,E as h,P as d,b6 as V,i as s,r as o,m as a,a as C,gR as $}from"./index-DVfovSRj.js";import{t as D}from"./memoize-DsJmrG76.js";import{R as A,h as I}from"./SnappingManagerPool-NEIPHkuq.js";import{o as P,i as R}from"./queryEngineUtils-BJvXlDXC.js";import{i as m,r as G,n as v}from"./symbologySnappingCandidates-BwMUor8B.js";import"./keybindings-xTTIIDwH.js";import"./utils-60qN1-Jo.js";import"./viewUtils-enfmGsHP.js";import"./geometry2dUtils-C_Owqzeb.js";import"./VertexSnappingCandidate-sCkEZunH.js";import"./PointSnappingHint-rlylXcUV.js";let r=class extends E{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=e!=null&&e.type==="3d";if(!i||t.type==="subtype-group")return m();const n=async(l,p)=>(await $(e.whenLayerView(t),p)).elevationAlignPointsInFeatures(l,p);return m(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:n})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="subtype-group";return G(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return e!=null&&e.type==="3d"&&t.type!=="subtype-group"?v(this._symbologySnappingSupported,async(i,n)=>{const l=await e.whenLayerView(t);return s(n),l.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)}):v()}get _layerView3D(){const{view:e}=this;if(e==null||e.type==="2d")return null;const{layer:t}=this.layerSource;return e.allLayerViews.find(i=>i.layer===t)}get _symbologySnappingSupported(){return this._layerView3D!=null&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="subtype-group"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:n}=t;F(i,n)&&this._snappingElevationAligner.notifyElevationSourceChange()}),h(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),d),h(()=>{var i;return this._layerView3D!=null?(i=this._layerView3D.layer)==null?void 0:i.renderer:null},()=>this._symbologySnappingFetcher.notifySymbologyChange(),d),V(()=>{var i;return(i=this._layerView3D)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=D(R)}refresh(){}async fetchCandidates(e,t){var c;const{layer:i}=this.layerSource,n=i.source;if(!(n!=null&&n.querySnapping))return[];const l=A(i),p=I(e,((c=this.view)==null?void 0:c.type)??"2d",l),S=await n.querySnapping(p,{signal:t});s(t);const u=e.coordinateHelper.spatialReference,y=await this._snappingElevationAligner.alignCandidates(S.candidates,u,t);s(t);const g=await this._symbologySnappingFetcher.fetch(y,t);s(t);const w=g.length===0?y:[...y,...g],f=this._snappingElevationFilter.filter(p,w),_=this._memoizedMakeGetGroundElevation(this.view,u);return f.map(b=>P(b,_))}};o([a({constructOnly:!0})],r.prototype,"layerSource",void 0),o([a({constructOnly:!0})],r.prototype,"view",void 0),o([a()],r.prototype,"_snappingElevationAligner",null),o([a()],r.prototype,"_snappingElevationFilter",null),o([a()],r.prototype,"_symbologySnappingFetcher",null),o([a()],r.prototype,"_layerView3D",null),o([a()],r.prototype,"_symbologySnappingSupported",null),r=o([C("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],r);export{r as FeatureCollectionSnappingSource};
