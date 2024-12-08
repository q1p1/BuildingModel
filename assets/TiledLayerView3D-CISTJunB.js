import{r,m as s,M as u,a_ as g,a as d,a$ as v,b0 as y,B as f,e as o,aY as w,b1 as S}from"./index-DVfovSRj.js";const b=m=>{let i=class extends m{constructor(){super(...arguments),this.hasMixedImageFormats=!0}get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get visibleAtCurrentScale(){if(!v(this.layer.minScale,this.layer.maxScale)||!this.view.scale)return!0;const e=Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.scale));return e>=this.displayLevelRange.minLevel&&e<=this.displayLevelRange.maxLevel}get dataScaleRange(){const e=this.tileInfo.lods;let a=e[0].scale,t=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:l,effectiveMaxLOD:n}=this.layer.tilemapCache;a=this.tileInfo.lodAt(l).scale,t=this.tileInfo.lodAt(n).scale}return{minScale:a,maxScale:t}}canResume(){var a,t,l;const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&((a=this.layer)==null?void 0:a.loaded)&&!((t=this.parent)!=null&&t.suspended)&&((l=this.view)==null?void 0:l.ready)&&y(e)&&this.visibleAtCurrentTimeExtent||!1}get dataLevelRange(){const{minScale:e,maxScale:a}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,a)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,a=this.layer.maxScale||this.dataScaleRange.maxScale,t=this.levelRangeFromScaleRange(e,a);return this.layer.maxScale&&t.maxLevel++,t}get performanceInfo(){return new f(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e){return this.layer.getTileUrl(e[0],e[1],e[2])}_addTilingSchemeMatchPromise(){if(this.fullExtent==null)return this.addResolvingPromise(Promise.reject(new o("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));this.addResolvingPromise(w(()=>{var a,t;return(t=(a=this.view)==null?void 0:a.basemapTerrain)==null?void 0:t.tilingSchemeLocked}).then(()=>{var n;const a=this.view.basemapTerrain.tilingScheme,t="tilemapCache"in this.layer?(n=this.layer.tilemapCache)==null?void 0:n.effectiveMaxLOD:void 0,l=this._getTileInfoCompatibilityError(this.tileInfo,a,t);if(l)throw l}))}_getTileInfoSupportError(e,a){var n;const t=S(e,a,this.view.spatialReference,this.view.state.viewingMode,"tilemapCache"in this.layer?(n=this.layer.tilemapCache)==null?void 0:n.effectiveMaxLOD:void 0);if(!t)return;const l={layer:this.layer,error:t};switch(t.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":return new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",l);default:return new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",l)}}_getTileInfoCompatibilityError(e,a,t){return e!=null&&a.compatibleWith(e,t)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,a){const t={minLevel:0,maxLevel:1/0},l=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!l)return t;const n=l.levels[0],c=p=>{const h=Math.log(n.scale/p)/Math.LN2;return .5-Math.abs(.5-h%1)<1e-9?Math.round(h):Math.ceil(h)};return e!=null&&e>0&&(t.minLevel=Math.max(0,c(e))),a!=null&&a>0&&(t.maxLevel=Math.max(0,c(a))),t}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return r([s({readOnly:!0})],i.prototype,"imageFormatIsOpaque",null),r([s({readOnly:!0})],i.prototype,"updating",void 0),r([s(u)],i.prototype,"updatingProgress",void 0),r([s(g)],i.prototype,"updatingProgressValue",void 0),r([s()],i.prototype,"hasMixedImageFormats",void 0),r([s()],i.prototype,"fullExtent",null),r([s({readOnly:!0})],i.prototype,"isOpaque",null),r([s({readOnly:!0})],i.prototype,"visibleAtCurrentScale",null),r([s()],i.prototype,"dataScaleRange",null),r([s({readOnly:!0})],i.prototype,"dataLevelRange",null),r([s({readOnly:!0})],i.prototype,"displayLevelRange",null),r([s()],i.prototype,"layer",void 0),i=r([d("esri.views.3d.layers.TiledLayerView3D")],i),i};export{b as p};
