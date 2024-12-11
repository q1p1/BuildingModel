import{gV as R,gW as E,gX as W,gY as j,d7 as q,da as F,d2 as Y,ba as b,d4 as A,a7 as Z,C as k,fV as B,a9 as $,z as y,K,ab as X,gm as J,ce as P,ap as N,gZ as Q,g_ as ee,R as H,g$ as te,x as ae,b2 as ie,h0 as C,i as D,h1 as O,h2 as re,h3 as V,h4 as se,h5 as v,dM as ne,h6 as oe,aY as le,r as f,m as x,a as he}from"./index-pOkNMSkH.js";import{l as de}from"./LayerView3D-ChJeke1e.js";import{r as ue}from"./projectExtentUtils-Rp4_o5Ih.js";import{I as ce}from"./ImageMaterial.glsl-Dgb-Of6-.js";import{y as ge}from"./LayerView-Da_1He01.js";import{i as me}from"./RefreshableLayerView-BYertE9D.js";function pe(t,e,a){const r=R(t)/E(t),i={width:a,height:a};return r>1.0001?i.height=a/r:r<.9999&&(i.width=a*r),i.width=Math.round(i.width/(R(t)/R(e))),i.height=Math.round(i.height/(E(t)/E(e))),i}function z(t,e){return W(t,[[e[0],e[1],-1],[e[2],e[1],-1],[e[2],e[3],-1],[e[0],e[3],-1]])}function fe(t,e,a){if(!j(e,a))return z(t,a);const r=[e[1]-a[1],Math.min(e[3],a[3])-Math.max(e[1],a[1]),a[3]-e[3],123456],i=[e[0]-a[0],Math.min(e[2],a[2])-Math.max(e[0],a[0]),a[2]-e[2],123456],l=a[2]-a[0],n=a[3]-a[1],s=i[0]>0&&i[2]>0?3:2,h=r[0]>0&&r[2]>0?3:2,o=(h+1)*(s+1),u=q(3*o),c=F(2*o),d=new Array(6*(h*s-1));let S=0,I=0,G=0,m=0,p=0;for(let w=0;w<4;w++){const T=r[w];if(T<=0)continue;let M=0;for(let _=0;_<4;_++){const L=i[_];L<=0||(u[I++]=a[0]+M,u[I++]=a[1]+S,u[I++]=-1,c[G++]=M/l,c[G++]=S/n,_<3&&w<3&&(_!==1||w!==1)&&(d[p++]=m,d[p++]=m+1,d[p++]=m+s+1,d[p++]=m+1,d[p++]=m+s+2,d[p++]=m+s+1),m++,M+=L)}S+=T}const U=new Array(d.length);return new Y(t,[[b.POSITION,new A(u,d,3,!0)],[b.NORMAL,new A(we,U,3,!0)],[b.UV0,new A(c,d,2,!0)]])}const we=[0,0,1];let g=class extends me(de(ge)){constructor(){super(...arguments),this.drapeSourceType=Z.RasterImage,this.updatePolicy=k.SYNC,this.fullExtentInLocalViewSpatialReference=null,this.maximumDataResolution=null,this._images=new Array,this._extents=new Array,this._overlays=new Array,this.updateWhenStationary=!0,this._drapeSourceRenderer=null,this.refreshDebounced=B(async t=>{this.destroyed||await this._doRefresh(t).catch(e=>{$(e)||y.getLogger(this).error(e)})},2e3)}get visibleAtCurrentScale(){const t=this.layer,e="effectiveScaleRange"in t?t.effectiveScaleRange:null;return K(e,this.view.scale)}initialize(){this._drapeSourceRenderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this),this.addHandles(X(()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),this.addResolvingPromise(ue(this).then(t=>this._set("fullExtentInLocalViewSpatialReference",t))),this._updatingHandles.add(()=>this.suspended,()=>this._suspendedChangeHandler())}destroy(){this.clear()}setDrapingExtent(t,e){this._spatialReference=e,t.forEach((a,r)=>{this._overlays[r]=a,this._updateImageExtent(a,r)})}_updateImageExtent(t,e){const a=this._clippedExtent(t.extent,_e);if(a==null)return;const r=pe(t.extent,a,t.resolution);let i=t.pixelRatio*this.view.state.pixelRatio;const{layer:l}=this;if("imageMaxWidth"in l&&l.imageMaxWidth!=null||"imageMaxHeight"in l&&l.imageMaxHeight!=null){const s=l.imageMaxWidth,h=l.imageMaxHeight;if(r.width>s){const o=s/r.width;r.height=Math.floor(r.height*o),r.width=s,i*=o}if(r.height>h){const o=h/r.height;r.width=Math.floor(r.width*o),r.height=h,i*=o}}const n=this._extents[e];n&&J(n.extent,a)&&this._imageSizeEquals(a,n.imageSize,r)||(this._extents[e]={extent:P(a),imageSize:r,pixelRatio:i},this.suspended||this._fetch(e).catch(s=>{$(s)||y.getLogger(this).error(s)}))}clear(){for(let t=0;t<this._images.length;t++)this._clearImage(t)}async doRefresh(){return this._doRefresh()}async _doRefresh(t){if(this.suspended)return;const e=[];for(let a=0;a<this._extents.length;a++)this._extents[a]&&e.push(this._fetch(a,t));await Promise.allSettled(e)}async processResult(t,e,a){(e instanceof HTMLImageElement||e instanceof HTMLCanvasElement)&&(t.image=e)}findExtentInfoAt(t){for(const e of this._extents){const a=e.extent;if(new N(a[0],a[1],a[2],a[3],this._spatialReference).contains(t))return e}return null}getFetchOptions(){}async redraw(t,e){await Q(this._images,async(a,r)=>{a&&(await t(a,e),await this._createStageObjects(r,a.image,e))})}_imageSizeEquals(t,e,a){if(!this.maximumDataResolution)return!1;const r=R(t)/this.maximumDataResolution.x,i=E(t)/this.maximumDataResolution.y,l=r/e.width,n=i/e.height,s=r/a.width,h=i/a.height,o=Math.abs(l-s),u=Math.abs(n-h),c=ee.TESTS_DISABLE_OPTIMIZATIONS?0:1.5;return o<=c&&u<=c}async _fetch(t,e){if(this.suspended)return;const a=this._extents[t],r=a.extent;this._images[t]||(this._images[t]={texture:null,material:null,renderGeometry:null,loadingPromise:null,loadingAbortController:null,image:null,pixelData:null,renderExtent:P(r)});const i=this._images[t];i.loadingAbortController=H(i.loadingAbortController);const l=new N(r[0],r[1],r[2],r[3],this._spatialReference);if(l.width===0||l.height===0)return void this._clearImage(t);const n=new AbortController;i.loadingAbortController=n,te(e,()=>n.abort());const s=n.signal,h=this._waitFetchReady(s).then(async()=>{const o={requestAsImageElement:!0,pixelRatio:this._overlays[t].pixelRatio,...this.getFetchOptions(),signal:s},{height:u,width:c}=a.imageSize;return this.layer.fetchImage(l,c,u,o)}).then(o=>{if(ae(s))throw y.getLogger(this).warnOnce("A call to fetchImage resolved even though the request was aborted. fetchImage should not resolve if options.signal.aborted is true."),ie();return this.processResult(i,o)}).then(()=>{C(i.renderExtent,r)});i.loadingPromise=h,await this._updatingHandles.addPromise(h.then(async()=>{D(s),await this._createStageObjects(t,i.image,s)}).catch(o=>{throw o&&!$(o)&&y.getLogger(this).error(o),o}).finally(()=>{h===i.loadingPromise&&(i.loadingPromise=null,i.loadingAbortController=null)}))}_clearImage(t){const e=this._images[t];if(e){e.renderGeometry!=null&&(this._drapeSourceRenderer.removeGeometries([e.renderGeometry],O.UPDATE),e.renderGeometry=null);const a=this.view._stage,r=e.texture;r==null||r.unload(),a.remove(r),e.texture=null,a.remove(e.material),e.material=null,e.loadingAbortController=H(e.loadingAbortController),e.loadingPromise=null,e.image=null,e.pixelData=null}}async _createStageObjects(t,e,a){const r=this.view._stage,i=this._images[t],l=()=>{var n;(n=i.texture)==null||n.unload(),r.remove(i.texture),i.texture=null,i.renderGeometry&&(this._drapeSourceRenderer.removeGeometries([i.renderGeometry],O.UPDATE),i.renderGeometry=null)};if(e){const n=new re(e,{width:e.width,height:e.height,preMultiplyAlpha:!0,wrap:{s:V.CLAMP_TO_EDGE,t:V.CLAMP_TO_EDGE}});let s;if(await se(this._images[t===v.INNER?v.OUTER:v.INNER].loadingPromise),D(a),l(),await r.schedule(()=>n.load(r.renderView.renderingContext),a),r.add(n),i.texture=n,i.material==null?(i.material=new ce({textureId:n.id}),r.add(i.material)):i.material.setParameters({textureId:n.id}),t===v.INNER)s=z(i.material,i.renderExtent);else{const h=this._images[0].renderExtent;if(!h)return void l();s=fe(i.material,h,i.renderExtent)}i.renderGeometry=new ne(s),i.renderGeometry.localOrigin=this._overlays[t].renderLocalOrigin,this._drapeSourceRenderer.addGeometries([i.renderGeometry],O.UPDATE)}else l(),r.remove(i.material),i.material=null}_clippedExtent(t,e){if(this.view.viewingMode!=="local")return C(e,t);const a=this.view.basemapTerrain;return a.ready?oe(t,a.extent,e):C(e,t)}_suspendedChangeHandler(){this.suspended?this.clear():this.refreshDebounced()}async _waitFetchReady(t){await le(()=>this.view.stationary,t),D(t)}};f([x()],g.prototype,"layer",void 0),f([x()],g.prototype,"suspended",void 0),f([x({readOnly:!0})],g.prototype,"fullExtentInLocalViewSpatialReference",void 0),f([x({readOnly:!0})],g.prototype,"visibleAtCurrentScale",null),f([x()],g.prototype,"updating",void 0),g=f([he("esri.views.3d.layers.DynamicLayerView3D")],g);const Ie=g,_e=P();export{Ie as N};
