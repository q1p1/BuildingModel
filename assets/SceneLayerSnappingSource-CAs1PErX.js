import{r as i,m as o,a as y,b as g,bl as m,bH as S,h as b,iE as k,R as C,jQ as _,x as H,i as L,cb as E}from"./index-DVfovSRj.js";import{a as $}from"./EdgeWorkerHandle-CfgiPZzU.js";import{h as O}from"./WorkerHandle-B4cGkC4V.js";import{p as w,a as I,u as V}from"./SnappingManagerPool-NEIPHkuq.js";import{r as R}from"./VertexSnappingCandidate-sCkEZunH.js";import"./workerHelper-Cc27Pr5K.js";import"./edgeProcessing-GK6vULJW.js";import"./deduplicate-D2lCzC6A.js";import"./bufferLayouts-DAxaP39Q.js";import"./keybindings-xTTIIDwH.js";import"./utils-60qN1-Jo.js";import"./viewUtils-enfmGsHP.js";import"./geometry2dUtils-C_Owqzeb.js";import"./PointSnappingHint-rlylXcUV.js";let d=class extends g{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new x(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:s}=e,n=j;this.renderCoordsHelper.toRenderCoords(s,r.spatialReference,n);const h=e.distance,c=typeof h=="number"?h:h.distance,p=await this._workerHandle.invoke({bounds:m(n[0],n[1],n[2],c),returnEdge:e.returnEdge,returnVertex:e.vertexMode!=="none"},t);return p.candidates.sort((u,f)=>u.distance-f.distance),p.candidates.map(u=>this._convertCandidate(r,u))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new I({objectId:t.objectId,targetPoint:w(this._convertRenderCoordinate(e,t.target)),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new R({objectId:t.objectId,targetPoint:w(this._convertRenderCoordinate(e,t.target)),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=S();return this.renderCoordsHelper.fromRenderCoords(t,r,e),V(r)}async _fetchAllEdgeLocations(e,t){const r=[],s=[];for(const{id:n,uid:h}of e.components)this._ids.has(n)&&r.push((async()=>{const c=await this.fetchEdgeLocations(n,t.signal),p=c.locations.buffer;return s.push(p),{id:n,uid:h,objectIds:c.objectIds,locations:p,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(r)).filter(({id:n})=>this._ids.has(n))},transferList:s}}};i([o({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([o({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([o({constructOnly:!0})],d.prototype,"schedule",void 0),i([o({readOnly:!0})],d.prototype,"availability",void 0),d=i([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")],d);let x=class extends O{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}};const j=S();let a=class extends g{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new b,this._abortController=new AbortController}destroy(){this._tracker=k(this._tracker),this._abortController=C(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new $(v(t)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:v(t),fetchEdgeLocations:async(r,s)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,s)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([_(this._workerHandle),_(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){var r;if(this.destroyed)return;const e=(r=this._abortController)==null?void 0:r.signal,t=await this.getLayerView();t==null||H(e)||(this._tracker=t.trackSnappingSources({add:(s,n)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:s,bounds:n},e))},remove:s=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:s},e))}}))}};function v(e){return t=>e.immediate.schedule(t)}i([o({constructOnly:!0})],a.prototype,"getLayerView",void 0),i([o({constructOnly:!0})],a.prototype,"view",void 0),i([o({readOnly:!0})],a.prototype,"updating",null),i([o({readOnly:!0})],a.prototype,"availability",void 0),a=i([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],a);let l=class extends g{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map(s=>s.fetchCandidates(e,t)));return L(t),r.flat()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new a({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null).filter(E)}_getSceneLayerI3SSource(e,t){return new a({getLayerView:async()=>{const r=await e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r},view:e})}};i([o({constructOnly:!0})],l.prototype,"layerSource",void 0),i([o({constructOnly:!0})],l.prototype,"view",void 0),i([o({readOnly:!0})],l.prototype,"updating",null),i([o({readOnly:!0})],l.prototype,"availability",void 0),l=i([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],l);export{l as SceneLayerSnappingSource};
