import{r as o,m as r,a as E,b as D,bH as _,bj as B,bM as ot,e8 as Ft,q0 as jt,bF as Nt,q1 as Ut,dg as Rt,de as Bt,df as at,dh as qt,dj as Wt,dk as Jt,jS as Zt,as as St,q2 as Qt,dC as X,q3 as ct,e2 as rt,oM as Kt,dr as C,cN as lt,dy as G,dz as F,dG as $t,b5 as Ht,h as dt,pk as ht,kH as Y,cQ as q,dt as U,q4 as k,z as tt,q5 as pt,ct as W,gl as J,P,R as gt,Q as Xt,gU as Yt,ab as Et,e0 as vt,ch as te,o0 as ee,q6 as _t,q7 as ie,$ as g,q8 as ne,q9 as se,pj as At,E as Mt,qa as z,dE as oe,N as ae,u as R,dO as re,qb as et,nt as mt,hn as yt,qc as le,qd as ue,bI as S,bT as de,V as ce}from"./index-DVfovSRj.js";import{s as he}from"./AnalysisView3D-PtrfPMJo.js";import{m as pe,d as bt}from"./featureReferenceUtils-5syO34J9.js";import{a as ft,d as it}from"./LineVisualElement-RkMKYPiO.js";import{u as Ct,f as wt}from"./LineOfSightAnalysisTarget-CoZoclFO.js";import{e as Dt,f as kt,c as xt,p as Ot}from"./ShadedColorMaterial.glsl-DxC3p0I9.js";import{r as zt}from"./manipulatorUtils-BD6nGR_C.js";import{c as ge,S as Tt}from"./LaserlinePath.glsl-BAmmDtIn.js";import{o as ve,a as _e,v as me}from"./analysisViewUtils-DO8WHACn.js";import"./line-CqIKf7Ry.js";import"./persistable-DMWhMfBx.js";import"./resourceExtension-JNK7rLM8.js";import"./ColorMaterial.glsl-B44fDynn.js";import"./TriangleMaterial-Bvt1HVUI.js";import"./EditGeometryOperations-iL1FFeDH.js";import"./geometry2dUtils-C_Owqzeb.js";let $=class extends D{constructor(t){super(t),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null,this.visible=void 0}};o([r()],$.prototype,"target",void 0),o([r()],$.prototype,"intersectedGraphic",void 0),o([r()],$.prototype,"intersectedLocation",void 0),o([r()],$.prototype,"elevationAlignedTargetLocation",void 0),o([r({type:Boolean})],$.prototype,"visible",void 0),$=o([E("esri.views.3d.analysis.LineOfSightAnalysisResult")],$);const ye=$;let H=class extends D{constructor(t){super(t),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:_(),observerSurfaceNormal:null,observerFeatureId:null,target:_(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:_(),targetAdjusted:_()},this.computationResult={start:_(),end:_(),intersection:_(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};o([r()],H.prototype,"target",void 0),o([r()],H.prototype,"elevationAlignedTargetLocation",void 0),o([r()],H.prototype,"inputPoints",void 0),o([r()],H.prototype,"computationResult",void 0),o([r()],H.prototype,"result",void 0),H=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],H);var ut;let I=ut=class extends D{constructor(e){super(e)}clone(){return new ut({type:this.type,id:B(this.id),mapPoint:B(this.mapPoint),renderPoint:ot(this.renderPoint),normal:B(this.normal),ray:B(this.ray),graphic:this.graphic})}equals(e){return this.type===e.type&&this.id===e.id&&Ft(this.mapPoint,e.mapPoint)&&jt(this.renderPoint,e.renderPoint)&&Nt(this.normal,e.normal)&&Ut(this.ray,e.ray)&&this.graphic===e.graphic}};o([r()],I.prototype,"type",void 0),o([r({constructOnly:!0})],I.prototype,"id",void 0),o([r({constructOnly:!0})],I.prototype,"mapPoint",void 0),o([r({constructOnly:!0})],I.prototype,"renderPoint",void 0),o([r({constructOnly:!0})],I.prototype,"normal",void 0),o([r({constructOnly:!0})],I.prototype,"graphic",void 0),o([r({constructOnly:!0})],I.prototype,"ray",void 0),I=ut=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],I);let x=class extends D{constructor(e){super(e),this._terrainIntersectionOptionsLayerUids=new Set(["terrain"])}initialize(){this.intersector=Bt(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=at.MIN}getScreenPointIntersection(e){const t=qt(e,Wt.get()),i=Jt(this.view.state.camera,t,nt);return this._getRayIntersection(i)}_getRayIntersection(e,t){const{view:i,intersector:n}=this;if(e==null||i.sceneIntersectionHelper==null)return null;n.options.store=at.MIN,i.sceneIntersectionHelper.intersectToolIntersectorRay(e,n,t);const s=n.results.min;if(s.target==null)return null;const a=_();if(!s.getIntersectionPoint(a)||(t==null?void 0:t.maxDistance)!=null&&Zt(a,e.origin)>t.maxDistance**2)return null;const l=i.renderCoordsHelper.fromRenderCoords(a,new St({spatialReference:i.spatialReference})),d=ot(s.normal);if(Qt(s))return new I({type:X.TERRAIN,id:s.target.lij.slice(),mapPoint:l,renderPoint:a,normal:d,ray:ct(e),graphic:null});const h=rt(s,i);if(h==null)return null;const{layer:c,sourceLayer:u}=h,p=(u==null?void 0:u.type)==="scene"?Kt(h,u.objectIdField):h.uid;return new I({type:X.OBJECT,id:`${c==null?void 0:c.uid}/${p}`,mapPoint:l,renderPoint:a,normal:d,ray:ct(e),graphic:h})}updateFromGroundIntersection(e,t,i){const n=be,s=fe,a=Ce,l=It;C(s,e),this.view.renderCoordsHelper.worldUpAtPosition(s,a),lt(a,a);const d=this.view.basemapTerrain.visibleElevationBounds,h=(t>=0?1:-1)*((d?Math.abs(d.max-d.min):100)+Math.abs(t));G(l,a,h),F(n,s,l),$t(n,s,nt);const c=this._getRayIntersection(nt,{include:this._terrainIntersectionOptionsLayerUids,maxDistance:h});if(c!=null){const u=It;return G(u,a,t),F(i,c.renderPoint,u),ot(c.normal)}return C(i,e),null}};o([r()],x.prototype,"view",void 0),o([r()],x.prototype,"intersector",void 0),x=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],x);const be=_(),fe=_(),Ce=_(),It=_(),nt=Rt();let m=class extends Ht.EventedMixin(D){constructor(e){super(e),this.updateOnCameraChange=!0,this._observerGroundOffsetRenderSpace=0,this._effectiveObserverElevationMode="absolute-height",this._observerFeatureId=null,this._updatingHandles=new dt,this._frameTask=ht,this._computationHandles=new Y,this._externalObserverUpdate=!0}initialize(){var t;const e=(t=this.view.resourceController)==null?void 0:t.scheduler;this._frameTask=e?e.registerTask(q.LINE_OF_SIGHT_TOOL):ht,this._intersector=new x({view:this.view}),this.addHandles([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(e){this._frameTask.priority=e}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(e){this.analysisViewData.observerEngineLocation=e}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}_computeResult(e){const t=e.computation,{inputPoints:i,computationResult:n}=t,{observerAdjusted:s,targetAdjusted:a}=i,{start:l,end:d}=n;C(l,s),C(d,a),this._canCompute(t)?this._computeIntersection(e):we(e),t.notifyResultChanged(),this.emit("result-changed",{target:e.computation.target,result:t.result})}_adjustStartEndPositions(e){const{view:t}=this,{inputPoints:i}=e,{observer:n,target:s,observerAdjusted:a,targetAdjusted:l}=i;C(a,n),C(l,s),pe(t,this._intersector.intersector,i);const{observerSurfaceNormal:d,targetSurfaceNormal:h}=i,c=this._screenPixelSize,u=K;d!=null?C(u,d):U(u,l,a);const p=c;lt(u,u),G(u,u,Math.min(p,1)),F(a,a,u),h!=null?C(u,h):U(u,a,l);const v=t.state.camera.computeScreenPixelSizeAt(l);lt(u,u),G(u,u,Math.min(v,1)),F(l,l,u)}_computeIntersection({computation:e,interpolationInfo:t}){const{view:i}=this,{sceneIntersectionHelper:n,renderCoordsHelper:s}=i;if(n==null)return;const a=this._intersector.intersector,{computationResult:l,inputPoints:d}=e,{observer:h,target:c}=d,{start:u,end:p}=l,v=$t(u,p,Te);a.options.store=at.MIN,n.intersectToolIntersectorRay(v,a);const L=a.results.min,O=l.intersection,j=K;let y=!0;if(L!=null&&L.getIntersectionPoint(O)){C(t.originalIntersection,O),C(t.originalObserver,u),C(t.originalTarget,p),s.fromRenderCoords(O,j,i.spatialReference);const w=1-k(p,c)/k(u,c);y=k(h,O)>=w*k(h,c)}const A=new St(j,i.spatialReference);{const{result:w,target:V}=e;w!=null?(w.target=V,w.intersectedGraphic=y?null:rt(L,i),w.intersectedLocation=y?null:A,w.visible=y):e.result=new ye({target:V,elevationAlignedTargetLocation:e.elevationAlignedTargetLocation,intersectedGraphic:y?null:rt(L,i),intersectedLocation:y?null:A,visible:y})}l.isValid=d.isValid=!0,l.isTargetVisible=y}_canCompute(e){const t=this.analysisViewData.elevationAlignedObserver,i=this.view.frustum;if(t==null||e.elevationAlignedTargetLocation==null||i==null)return!1;const{observerAdjusted:n,targetAdjusted:s}=e.inputPoints,a=i.intersectsPoint(n),l=i.intersectsPoint(s);return a&&l}_onObserverPositionChange(e,t,i,n,s){if(this._externalObserverUpdate=s,e==null)return this.analysisViewData.elevationAlignedObserver=null,void(this._observerFeatureId=null);if(t==null)return ft(this.analysis,e.spatialReference,tt.getLogger(this)),void(this.analysisViewData.elevationAlignedObserver=null);const a=Pt(t,i),{absoluteZ:l,elevation:d}=pt(t.x,t.y,t.z,this.view.spatialReference,this.view,a),h=t.clone();h.z=l,this._effectiveObserverElevationMode=a.mode,this.analysisViewData.elevationAlignedObserver=h;const c=_();this.view.renderCoordsHelper.toRenderCoords(h,c),this._elevationAlignedObserverPositionRenderSpace=c,this._observerGroundOffsetRenderSpace=l-d,this._observerFeatureId=bt(n),this.priority=q.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onObserverRenderSpacePositionChangeForComputation(e,t,i,n,s){const{inputPoints:a}=e;switch(C(a.observer,t),a.observerFeatureId=s,a.observerSurfaceNormal=null,n){case"on-the-ground":case"relative-to-ground":{const l=this._intersector.updateFromGroundIntersection(a.observer,i,a.observer);a.observerFeatureId==null&&(a.observerSurfaceNormal=l)}}this._adjustStartEndPositions(e),e.notifyInputPointsChanged(),this.priority=q.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(e,t,i,n,s,a=!0){const l=e.inputPoints;if(a&&(l.isValid=!1),i==null)return t!=null&&ft(this.analysis,t.spatialReference,tt.getLogger(this)),e.elevationAlignedTargetLocation=null,void e.notifyInputPointsChanged();const d=Pt(i,n),{absoluteZ:h,elevation:c}=pt(i.x,i.y,i.z,this.view.spatialReference,this.view,d),u=i.clone();switch(u.z=h,e.elevationAlignedTargetLocation=u,this.view.renderCoordsHelper.toRenderCoords(e.elevationAlignedTargetLocation,l.target),l.targetFeatureId=bt(s),l.targetSurfaceNormal=null,d.mode){case"on-the-ground":case"relative-to-ground":{const p=this._intersector.updateFromGroundIntersection(l.target,h-c,l.target);l.targetFeatureId==null&&(l.targetSurfaceNormal=p)}}this._adjustStartEndPositions(e),e.notifyInputPointsChanged(),this.priority=q.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(e){return W([this._updatingHandles.add(()=>({computation:e,targetPosition:e.target.position,targetElevationInfo:e.target.elevationInfo,targetFeatureInfo:e.target.feature,projectedTargetPosition:J(e.target.position,this.view.spatialReference)}),({computation:t,targetPosition:i,targetElevationInfo:n,targetFeatureInfo:s,projectedTargetPosition:a})=>{a.pending==null?this._onTargetPositionChange(t,i,a.geometry,n,s):this._updatingHandles.addPromise(a.pending)},P)])}_connectComputationToObserver(e){return this._updatingHandles.add(()=>({computation:e,observer:this.analysisViewData.elevationAlignedObserver}),({computation:t})=>{this._externalObserverUpdate&&(t.inputPoints.isValid=!1,t.notifyInputPointsChanged())},P)}_connectComputationToRenderSpaceObserver(e){return this._updatingHandles.add(()=>({computation:e,observer:this._elevationAlignedObserverPositionRenderSpace,observerGroundOffset:this._observerGroundOffsetRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),({computation:t,observer:i,observerGroundOffset:n,observerElevationMode:s,observerFeatureId:a})=>{this._onObserverRenderSpacePositionChangeForComputation(t,i,n,s,a)},P)}_connectComputationToCamera(e){return this._updatingHandles.add(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:t})=>{!this.updateOnCameraChange||e.inputPoints.isValid&&!t||e.notifyInputPointsChanged()})}_connectComputationToSlicePlane(e){return this._updatingHandles.add(()=>this.view.slicePlane,()=>{e.inputPoints.isValid=!1,e.notifyInputPointsChanged()})}_connectComputationToElevation(e){const t=(i,n)=>{const s=this.analysis.observer,a=e.target;let l=null,d=null,h=null,c=null,u=null,p=null;if((s==null?void 0:s.position)!=null){const v=J(s.position,this.view.spatialReference);if(v.pending!=null)return this._updatingHandles.addPromise(v.pending),void v.pending.finally(()=>t(i,n));l=v.geometry,d=s.elevationInfo,h=s.feature}if(a.position!=null){const v=J(a.position,this.view.spatialReference);if(v.pending!=null)return this._updatingHandles.addPromise(v.pending),void v.pending.finally(()=>t(i,n));c=v.geometry,u=a.elevationInfo,p=a.feature}l==null&&c==null||(ee(i,n,Z,this.view.spatialReference),l!=null&&_t(Z,l)&&this._onObserverPositionChange(s!=null?s.position:null,l,d,h,!1),c!=null&&_t(Z,c)&&this._onTargetPositionChange(e,a.position,c,u,p,!1),l!=null&&c!=null&&ie(Z,l,c)&&e.notifyInputPointsChanged())};return this.view.elevationProvider.on("elevation-change",({extent:i,spatialReference:n})=>t(i,n))}_connectComputationToTask(e){let t=null;const i={computation:e,interpolationInfo:{originalIntersection:_(),originalObserver:_(),originalTarget:_()}};return W([this._updatingHandles.add(()=>e.inputPoints,()=>{t=gt(t),t=Xt(async n=>{await Yt(this._frameTask.schedule(()=>this._computeResult(i),n))})},{initial:!0,equals:()=>!1}),Et(()=>t=gt(t))])}_connectComputation(e){const t=this._computationHandles;t.has(e)||t.add([this._connectComputationToTarget(e),this._connectComputationToObserver(e),this._connectComputationToRenderSpaceObserver(e),this._connectComputationToCamera(e),this._connectComputationToSlicePlane(e),this._connectComputationToElevation(e),this._connectComputationToTask(e)],e)}_disconnectComputation(e){this._computationHandles.remove(e)}_onComputationCollectionChange({added:e,removed:t}){for(const i of t)this._disconnectComputation(i);for(const i of e)this._connectComputation(i)}_onTargetCollectionChange({added:e,removed:t}){for(const i of t)this._removeTarget(i);for(const i of e)this._addTarget(i)}_onCursorTargetChange(e,t){t!=null&&this._removeTarget(t),e!=null&&this._addTarget(e)}_addTarget(e){this._computations.some(t=>t.target===e)||this._computations.add(new H({target:e}))}_removeTarget(e){const t=this._computations.findIndex(i=>i.target===e);this._computations.removeAt(t)}_connectObserver(){return W([this._updatingHandles.add(()=>({observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,projectedObserverPosition:J(this.analysis.observer!=null?this.analysis.observer.position:null,this.view.spatialReference),observerElevationInfo:this.analysis.observer!=null?this.analysis.observer.elevationInfo:null,observerFeatureInfo:this.analysis.observer!=null?this.analysis.observer.feature:null}),({observerPosition:e,projectedObserverPosition:t,observerElevationInfo:i,observerFeatureInfo:n})=>{t.pending==null?this._onObserverPositionChange(e,t.geometry,i,n,!0):this._updatingHandles.addPromise(t.pending)},P)])}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this._computations,e=>this._onComputationCollectionChange(e),{initial:!0,final:!0})}_connectTargets(){return W([this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,e=>this._onTargetCollectionChange(e),{initial:!0,final:!0}),this._updatingHandles.add(()=>this.analysisViewData.cursorTarget,(e,t)=>{this._onCursorTargetChange(e,t)})])}get _isCameraDirty(){const e=this.analysisViewData.elevationAlignedObserver,{view:t}=this,{renderCoordsHelper:i}=t;if(e==null||i==null)return!1;const n=K;i.toRenderCoords(e,n);const s=t.state.camera.computeScreenPixelSizeAt(n);return Math.abs((s-this._screenPixelSize)/this._screenPixelSize)>Oe}};function Pt(e,t){return e.hasZ?t??{mode:"absolute-height",offset:0}:{mode:"on-the-ground",offset:0}}function we({computation:e,interpolationInfo:t}){const{computationResult:i,inputPoints:n}=e,{start:s,end:a,intersection:l}=i,{originalIntersection:d,originalObserver:h,originalTarget:c}=t;if(C(l,d),n.isValid){const u=K,p=k(h,d)/k(h,c);vt(u,s,h),G(u,u,1-p),F(l,l,u),vt(u,a,c),G(u,u,p),F(l,l,u),i.isValid=!0}else e.result=null,i.isValid=!1,i.isTargetVisible=!1}o([r({constructOnly:!0})],m.prototype,"analysis",void 0),o([r({constructOnly:!0})],m.prototype,"analysisViewData",void 0),o([r({constructOnly:!0})],m.prototype,"view",void 0),o([r()],m.prototype,"updating",null),o([r()],m.prototype,"priority",null),o([r()],m.prototype,"updateOnCameraChange",void 0),o([r()],m.prototype,"_computations",null),o([r()],m.prototype,"_elevationAlignedObserverPositionRenderSpace",null),o([r()],m.prototype,"_observerGroundOffsetRenderSpace",void 0),o([r()],m.prototype,"_effectiveObserverElevationMode",void 0),o([r()],m.prototype,"_observerFeatureId",void 0),o([r()],m.prototype,"_screenPixelSize",null),o([r({readOnly:!0})],m.prototype,"_updatingHandles",void 0),o([r()],m.prototype,"_frameTask",void 0),o([r()],m.prototype,"_isCameraDirty",null),m=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightController")],m);const Oe=.1,K=_(),Te=Rt(),Z=te();let Ie=class{constructor(){this.glowWidth=8,this.innerWidth=.75}};const Pe=new Ie;function Le(e){const t=e.accentColor;return{glowColor:t,innerColor:ne(t),globalAlpha:.75*t.a}}class Ve{constructor(){this.size=.5}}const Re=new Ve;function Lt(e){return se(e.accentColor,.75)}class Se{constructor(){this.size=.5,this.visibleColor=new g([3,252,111,.75]),this.occludedColor=new g([252,3,69,.75]),this.undefinedColor=new g([127,127,127,.75])}}const $e=new Se;let He=class{constructor(){this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new g([3,252,111,1]),this.visibleOuterColor=new g([3,252,111,.15]),this.occludedInnerColor=new g([252,3,69,1]),this.occludedOuterColor=new g([252,3,69,.1]),this.undefinedInnerColor=new g([255,255,255,1]),this.undefinedOuterColor=new g([127,127,127,.2])}};const Q=new He;class Ee extends Dt{constructor(t,i){const n=kt(Lt(t.effectiveTheme)),s=At(n,Re.size,32,32),a=new xt(s);super({view:t,renderObjects:[a],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),zt(this),this.themeHandle=Mt(()=>({color:Lt(t.effectiveTheme)}),l=>{n.setParameters(l)})}destroy(){this.themeHandle.remove(),super.destroy()}}let Ae=class extends Dt{constructor(t,i){const{size:n,visibleColor:s,occludedColor:a,undefinedColor:l}=$e;super({view:t,renderObjects:[st(n,s,z.Custom1),st(n,a,z.Custom2),st(n,l,z.Custom3)],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),zt(this)}};function st(e,t,i){return new xt(At(kt(g.toUnitRGBA(t)),e,32,32),i)}var M;(function(e){e.Ready="ready",e.Creating="creating",e.Created="created"})(M||(M={}));let b=class extends ve{constructor(t){super(t),this._creationMode=!1,this.removeIncompleteOnCancel=!1,this.analysisViewData=null,this._latestPointerMovePointerType=null,this._laserlineVisualElement=null,this._grabbedManipulator=null,this._analysisHandles=new Y,this._updatingHandles=new dt,this._manipulatorHandles=new Y,this._targetTrackerManipulator=null}initialize(){this._intersector=new x({view:this.view}),this.addHandles(Mt(()=>this.state,t=>{t===M.Created&&this.finishToolCreation()},ae)),this._observerManipulator=this._createObserverManipulator(),this._createLaserLine(),this.addHandles([this._updatingHandles.add(()=>{var t;return(t=this.analysisViewData)==null?void 0:t.elevationAlignedObserver},t=>this._onObserverLocationChange(t),P),this._updatingHandles.add(()=>Le(this.view.effectiveTheme),({glowColor:t,innerColor:i,globalAlpha:n})=>this._updateLaserLineStyle(t,i,n),P),this._updatingHandles.add(()=>this._laserLineRendererDependencies(),t=>this._updateLaserLineRenderer(t)),this._connectComputations(),this._updatingHandles.addWhen(()=>!this._shouldRenderTracker,()=>this._clearCursorTracker(),P),this._updatingHandles.add(()=>({active:this.active,hasGrabbedManipulators:this.hasGrabbedManipulators}),({active:t,hasGrabbedManipulators:i})=>{this._creationMode=!!t&&(this._creationMode||!i)},P)])}destroy(){this._updatingHandles=R(this._updatingHandles),this._manipulatorHandles=R(this._manipulatorHandles),this._analysisHandles=R(this._analysisHandles),this._observerManipulator=null,this._clearCursorTracker(),this._removeLaserLine(),this._intersector=null,this._set("analysis",null)}get state(){var t;return this.active?!this.hasGrabbedManipulators||this._creationMode?M.Creating:M.Created:((t=this.analysis.observer)==null?void 0:t.position)!=null?M.Created:M.Ready}get cursor(){return this.active&&this._showTracker?"crosshair":null}get updating(){return this.analysisViewData!=null&&this.analysisViewData.updating||this._updatingHandles.updating}get _showTracker(){return this.active&&this._latestPointerMovePointerType==="mouse"}get _shouldRenderTracker(){var t;return this._showTracker&&((t=this.analysis.observer)==null?void 0:t.position)!=null&&!this.hasGrabbedManipulators}continue(){this.view.activeTool=this}stop(){this.view.activeTool=null}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}onInputEvent(t){switch(t.type){case"immediate-double-click":this._doubleClickHandler(t);break;case"key-down":this._keyDownHandler(t);break;case"pointer-move":this._pointerMoveHandler(t)}}onInputEventAfter(t){t.type==="immediate-click"&&this._clickHandler(t)}onShow(){}onHide(){}onDeactivate(){this._clearCursorTracker()}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,t=>this._onComputationsCollectionChange(t),{initial:!0,final:!0})}_onComputationsCollectionChange({added:t,removed:i}){for(const n of i)this._disconnectComputation(n);for(const n of t)this._connectComputation(n)}_connectComputation(t){if(this.destroyed)return void tt.getLogger(this).warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");const i=this._analysisHandles;if(i.has(t))return;const n=this._createTargetManipulator(t.target);this._targetTrackerManipulator==null&&n.metadata.target===this.analysisViewData.cursorTarget&&(this._targetTrackerManipulator=n,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=!1,this._updateLaserLineRenderer()),i.add([this._updatingHandles.add(()=>ke(t),()=>De(n,t),P),this._updatingHandles.add(()=>t.elevationAlignedTargetLocation,s=>this._onTargetLocationChange(s,n),P)],t)}_disconnectComputation(t){if(this.destroyed)return void tt.getLogger(this).warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring.");this._analysisHandles.remove(t);const i=this._getTargetManipulator(t.target);i!=null&&(this.manipulators.remove(i),this._manipulatorHandles.remove(i),this._targetTrackerManipulator!=null&&this._targetTrackerManipulator===i&&(this._targetTrackerManipulator=null))}_clearCursorTracker(){this.analysisViewData.cursorTarget=R(this.analysisViewData.cursorTarget)}_createTargetManipulator(t){const i={target:t,type:"target"},n=new Ae(this.view,i);return this._manipulatorHandles.add([this._createTargetManipulatorDragPipeline(n),n.events.on("grab-changed",s=>this._manipulatorGrabChanged(n,s)),n.events.on("immediate-click",s=>this._manipulatorClick(n,s))],n),this.manipulators.add(n),t.position!=null?n.elevationAlignedLocation=t.position:n.available=!1,n}_getTargetManipulator(t){let i=null;return this.manipulators.forEach(n=>{const s=n.manipulator;i==null&&s.metadata.type==="target"&&s.metadata.target===t&&(i=s)}),i}_createObserverManipulator(){const t=new Ee(this.view,{type:"observer",intersection:null});return this._manipulatorHandles.add([this._createObserverManipulatorDragPipeline(t),t.events.on("grab-changed",i=>this._manipulatorGrabChanged(t,i)),t.events.on("immediate-click",i=>this._manipulatorClick(t,i))],t),this.manipulators.add(t),t}_screenToIntersection(){return t=>{const i=this._intersector.getScreenPointIntersection(t.screenEnd);return i==null?null:{...t,intersection:i}}}_createTargetManipulatorDragPipeline(t){return Ot(t,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateTargetDragStep(t)).next(()=>this._updateLaserLineRenderer()),s.next(Me(t.metadata.target)).next(()=>this._updateLaserLineRenderer())})}_createObserverManipulatorDragPipeline(t){return Ot(t,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})}_updateObserverDragStep(){return t=>(t.intersection.mapPoint!=null?(this.analysis.observer==null&&(this.analysis.observer=new Ct),this._updateFromIntersection(this.analysis.observer,t.intersection)):this.analysis.observer=null,t)}_cancelObserverDragStep(){var i;const t=((i=this.analysis.observer)==null?void 0:i.position)!=null?this.analysis.observer.clone():null;return n=>(this.analysis.observer=t,n)}_updateTargetDragStep(t){return i=>{this._updateFromIntersection(t.metadata.target,i.intersection);const n=i.intersection.mapPoint;return n!=null&&(t.elevationAlignedLocation=n),i}}_manipulatorGrabChanged(t,i){switch(i.action){case"start":this._grabbedManipulator=t;break;case"end":this._grabbedManipulator===t&&(this._grabbedManipulator=null)}}_laserLineRendererDependencies(){return{laserlineVisualElement:this._laserlineVisualElement,grabbedManipulator:this._grabbedManipulator,shouldRenderTracker:this._shouldRenderTracker,observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,visible:this.visible}}_updateLaserLineRenderer(t=this._laserLineRendererDependencies()){const{laserlineVisualElement:i,grabbedManipulator:n,shouldRenderTracker:s,observerPosition:a,visible:l}=t;if(i==null)return;const d=n??(s&&a!=null?this._targetTrackerManipulator:null);d!=null&&l?(i.visible=!0,i.heightManifoldTarget=d.renderLocation,d!==this._observerManipulator?i.lineVerticalPlaneSegment=re(this._observerManipulator.renderLocation,d.renderLocation,xe):i.lineVerticalPlaneSegment=null):(i.visible=!1,i.heightManifoldTarget=null,i.lineVerticalPlaneSegment=null)}_createLaserLine(){this._removeLaserLine();const{glowWidth:t,innerWidth:i}=Pe;this._laserlineVisualElement=new ge({view:this.view,attached:!0,visible:this.visible,style:{glowWidth:t,innerWidth:i},isDecoration:!0})}_removeLaserLine(){this._laserlineVisualElement!=null&&(this._laserlineVisualElement.destroy(),this._laserlineVisualElement=null)}_updateLaserLineStyle(t,i,n){const s=this._laserlineVisualElement;if(s==null)return;const a=s.style;s.style={...a,glowColor:g.toUnitRGB(t),innerColor:g.toUnitRGB(i),globalAlpha:n}}_onObserverLocationChange(t){t!=null?(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=t):this._observerManipulator.available=!1}_onTargetLocationChange(t,i){t!=null?(i.elevationAlignedLocation=t,i!==this._targetTrackerManipulator&&(i.available=!0)):i.available=!1}_addPointFromClickEvent(t){var n;const i=this._intersector.getScreenPointIntersection(t);if((i==null?void 0:i.mapPoint)!=null)if(((n=this.analysis.observer)==null?void 0:n.position)!=null){this._clearCursorTracker();const s=new wt;this._updateFromIntersection(s,i),this.analysis.targets.add(s)}else{const s=new Ct;this._updateFromIntersection(s,i),this.analysis.observer=s}}_clickHandler(t){this.active&&t.button!==et.Right&&(this._addPointFromClickEvent(mt(t)),t.stopPropagation())}_doubleClickHandler(t){this.active&&t.button!==et.Right&&(this.stop(),t.stopPropagation())}_keyDownHandler(t){this.active&&t.key==="Escape"&&(this.stop(),t.stopPropagation())}_pointerMoveHandler(t){var s;if(this.hasGrabbedManipulators||(this._latestPointerMovePointerType=t.pointerType,this._updateLaserLineRenderer(),!this._showTracker||((s=this.analysis.observer)==null?void 0:s.position)==null))return;const i=mt(t),n=this._intersector.getScreenPointIntersection(i);(n==null?void 0:n.mapPoint)!=null&&(this.analysisViewData.cursorTarget==null&&(this.analysisViewData.cursorTarget=new wt),this._updateFromIntersection(this.analysisViewData.cursorTarget,n),this._updateLaserLineRenderer())}_updateFromIntersection(t,i){if(i.mapPoint==null)return t.position=null,t.elevationInfo=null,void(t.feature=null);switch(i.type){case X.OBJECT:if(i.graphic!=null){const s=i.graphic,a=le(s);a.mode==="on-the-ground"&&(a.mode="relative-to-ground",a.offset=0),t.elevationInfo=new yt(a),t.feature=s}else t.elevationInfo=null,t.feature=null;break;case X.TERRAIN:t.elevationInfo=new yt({mode:"on-the-ground"}),t.feature=null;break;default:t.elevationInfo=null,t.feature=null}const n=i.mapPoint.clone();n.z=ue(this.view,n,{mode:"absolute-height",offset:0},t.elevationInfo),t.position=n}_manipulatorClick(t,i){if(t.metadata.type==="observer"||t.grabbing||t.dragging||i.button!==et.Right||this.analysis.targets.length<=1)return;const{target:n}=t.metadata;this.analysis.targets.remove(n),i.stopPropagation()}get testInfo(){}};function Me(e){var i;const t=(i=e.position)==null?void 0:i.clone();return n=>(e.position=t,n)}function De(e,t){const{isValid:i,isTargetVisible:n}=t.computationResult;e.state=i?n?z.Custom1:z.Custom2:z.Custom3}function ke(e){const{isValid:t,isTargetVisible:i}=e.computationResult;return{isValid:t,isTargetVisible:i}}o([r({constructOnly:!0})],b.prototype,"view",void 0),o([r({constructOnly:!0})],b.prototype,"analysis",void 0),o([r()],b.prototype,"_creationMode",void 0),o([r({readOnly:!0})],b.prototype,"state",null),o([r({readOnly:!0})],b.prototype,"cursor",null),o([r()],b.prototype,"removeIncompleteOnCancel",void 0),o([r({readOnly:!0})],b.prototype,"updating",null),o([r({constructOnly:!0})],b.prototype,"analysisViewData",void 0),o([r({readOnly:!0})],b.prototype,"_showTracker",null),o([r()],b.prototype,"_latestPointerMovePointerType",void 0),o([r()],b.prototype,"_shouldRenderTracker",null),o([r()],b.prototype,"_laserlineVisualElement",void 0),o([r()],b.prototype,"_grabbedManipulator",void 0),b=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightTool")],b);const xe=oe();class ze{constructor(t,i,n,s){this.visibleLineVisualElement=t,this.occludedLineVisualElement=i,this.undefinedLineVisualElement=n,this.targetVisualElement=s}destroy(){this.visibleLineVisualElement.destroy(),this.occludedLineVisualElement.destroy(),this.undefinedLineVisualElement.destroy(),this.targetVisualElement.destroy()}}let T=class extends D{constructor(e){super(e),this._lineOfSightVisualElements=new Array,this._computationHandles=new Y,this._updatingHandles=new dt}initialize(){this.addHandles(this._connectComputations()),this._createObserverVisualization()}destroy(){this._updatingHandles=R(this._updatingHandles),this._computationHandles=R(this._computationHandles),this._observerVisualElement=R(this._observerVisualElement)}get visible(){return this.analysisViewData.visible}get updating(){return this._updatingHandles.updating}get interactiveAndEditable(){return this.analysisViewData.interactive&&this.analysisViewData.editable}get test(){}_createLineOfSightVisualization(){const e=Q,t=this.view,i=this.isDecoration,n={view:t,attached:!0,width:e.outerWidth,innerWidth:e.innerWidth,isDecoration:i},s=g.toUnitRGBA(e.visibleOuterColor),a=g.toUnitRGBA(e.visibleInnerColor),l=g.toUnitRGBA(e.occludedOuterColor),d=g.toUnitRGBA(e.occludedInnerColor),h=g.toUnitRGBA(e.undefinedOuterColor),c=g.toUnitRGBA(e.undefinedInnerColor),u=new it({...n,color:s,innerColor:a}),p=new it({...n,color:l,innerColor:d}),v=new it({...n,color:h,innerColor:c}),L=new Tt({view:t,attached:!0,...Vt,size:8,isDecoration:i}),O=new ze(u,p,v,L);return this._lineOfSightVisualElements.push(O),O}_destroyLineOfSightVisualization(e){e.destroy(),this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(e),1)}_updateLineOfSightVisualization(e,t,i){const n=Q,{computationResult:s,inputPoints:a}=e,{start:l,end:d,intersection:h,isValid:c,isTargetVisible:u}=s,{observer:p}=a,v=Ne;v[12]=p[0],v[13]=p[1],v[14]=p[2];const L=U(Ge,l,p),O=U(Fe,d,p),j=U(je,h,p),{visibleLineVisualElement:y,occludedLineVisualElement:A,undefinedLineVisualElement:w,targetVisualElement:V}=t,Gt=this.analysisViewData.elevationAlignedObserver==null||e.elevationAlignedTargetLocation==null,N=this.visible&&!Gt;y.visible=N,A.visible=N,w.visible=N,V.visible=N,V.attached=!i.interactiveAndEditable,N&&(y.geometry=null,A.geometry=null,w.geometry=null,V.geometry=e.elevationAlignedTargetLocation,c?u?(y.geometry=[[S(L),S(O)]],y.transform=v,y.color=g.toUnitRGBA(n.visibleOuterColor),V.color=g.toUnitRGBA(n.visibleInnerColor)):(y.geometry=[[S(L),S(j)]],y.transform=v,y.color=g.toUnitRGBA(n.occludedOuterColor),A.geometry=[[S(j),S(O)]],A.transform=v,V.color=g.toUnitRGBA(n.occludedInnerColor)):(w.geometry=[[S(L),S(O)]],w.transform=v,V.color=g.toUnitRGBA(n.undefinedInnerColor)))}_getLineOfSightVisualizationDependencies(e){const{computationResult:t}=e,{occludedOuterColor:i,visibleOuterColor:n}=Q;return{computationResult:t,occludedOuterColor:i,visibleOuterColor:n,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}}_connectComputation(e){const t=this._computationHandles;if(t.has(e))return;const i=this._createLineOfSightVisualization();t.add([this._updatingHandles.add(()=>this._getLineOfSightVisualizationDependencies(e),n=>this._updateLineOfSightVisualization(e,i,n),{initial:!0,equals:()=>!1}),Et(()=>this._destroyLineOfSightVisualization(i))],e)}_disconnectComputation(e){this._computationHandles.remove(e)}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,e=>this._onComputationsCollectionChange(e),{initial:!0,final:!0})}_onComputationsCollectionChange({added:e,removed:t}){for(const i of t)this._disconnectComputation(i);for(const i of e)this._connectComputation(i)}_createObserverVisualization(){const e=g.toUnitRGBA(Q.visibleInnerColor),t=new Tt({view:this.view,color:e,...Vt,isDecoration:this.isDecoration});this._observerVisualElement=t,this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:i,interactiveAndEditable:n,visible:s})=>{i!=null&&!n&&s?(t.geometry=i,this._observerVisualElement.attached=!0):t.attached=!1},P))}};o([r({constructOnly:!0})],T.prototype,"analysis",void 0),o([r({constructOnly:!0})],T.prototype,"analysisViewData",void 0),o([r({constructOnly:!0})],T.prototype,"view",void 0),o([r({readOnly:!0})],T.prototype,"visible",null),o([r({constructOnly:!0})],T.prototype,"isDecoration",void 0),o([r()],T.prototype,"updating",null),o([r()],T.prototype,"interactiveAndEditable",null),o([r()],T.prototype,"test",null),T=o([E("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],T);const Vt={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},Ge=_(),Fe=_(),je=_(),Ne=de();let f=class extends he(Ht.EventedMixin(D)){constructor(e){super(e),this.type="line-of-sight-view-3d",this.analysis=null,this.tool=null,this.computations=new ce,this.elevationAlignedObserver=null,this.observerEngineLocation=_(),this.cursorTarget=null,this.editable=!0}initialize(){const e=this.view,t=this.analysis;this._analysisController=new m({analysis:t,analysisViewData:this,view:e}),this._analysisVisualization=new T({analysis:t,analysisViewData:this,view:e,isDecoration:!this.parent}),this.addHandles([this._analysisController.on("result-changed",i=>{i.target!==this.cursorTarget&&this.emit("result-changed",i)}),_e(this,b)])}destroy(){me(this),this._analysisController=R(this._analysisController),this._analysisVisualization=R(this._analysisVisualization)}get results(){return this.computations.map(e=>e.result)}get priority(){return this._analysisController.priority}set priority(e){this._analysisController.priority=e}get updating(){return this._analysisController!=null&&this._analysisController.updating||this._analysisVisualization!=null&&this._analysisVisualization.updating}getResultForTarget(e){var t;return(t=this.computations.find(i=>i.target===e))==null?void 0:t.result}get testInfo(){}};o([r({readOnly:!0})],f.prototype,"type",void 0),o([r({constructOnly:!0,nonNullable:!0})],f.prototype,"analysis",void 0),o([r()],f.prototype,"tool",void 0),o([r({readOnly:!0})],f.prototype,"results",null),o([r()],f.prototype,"priority",null),o([r()],f.prototype,"computations",void 0),o([r()],f.prototype,"elevationAlignedObserver",void 0),o([r()],f.prototype,"observerEngineLocation",void 0),o([r()],f.prototype,"cursorTarget",void 0),o([r()],f.prototype,"updating",null),o([r()],f.prototype,"editable",void 0),o([r()],f.prototype,"_analysisController",void 0),o([r()],f.prototype,"_analysisVisualization",void 0),f=o([E("esri.views.3d.analysis.LineOfSightAnalysisView3D")],f);const hi=f;export{hi as default};
