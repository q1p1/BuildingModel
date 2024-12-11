import{s as m,b as v,a7 as b,C as y,kN as p,r as d,m as h,a as G,h1 as l,d3 as t,kO as g,kr as w,E as D,P as x}from"./index-pOkNMSkH.js";import{t as F}from"./LineVisualElement-l4ZBIfdA.js";class j{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=p.Outline}destroy(){this._destroyResources()}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){var r;this._renderGroup=e;const s=(r=this._resources)==null?void 0:r.layerView;s&&(s.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?this._resources!=null&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?this._resources==null&&this._createResources():this._destroyResources()}_createResources(){var i;this._destroyResources();const e=this._resourceFactory.createResources(),s=new o({view:this._resourceFactory.view,renderGroup:this._renderGroup}),r=(i=this._resourceFactory.view.basemapTerrain)==null?void 0:i.overlayManager;this._resources={layerView:new o({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},r&&(this._resources.drapeSourceRenderer=r.registerGeometryDrapeSource(s)),this._syncGeometriesToRenderer()}_destroyResources(){var s;if(this._resources==null)return;this._ensureRenderGeometriesRemoved();const e=(s=this._resourceFactory.view.basemapTerrain)==null?void 0:s.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,l.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){var e;((e=this._resources)==null?void 0:e.drapeSourceRenderer)!=null&&(this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,l.UPDATE),this._resources.geometriesAdded=!0))}}let o=class extends m(v){constructor(a){super(a),this.drapeSourceType=b.Features,this.updatePolicy=y.SYNC,this.renderGroup=p.Outline}};d([h({constructOnly:!0})],o.prototype,"view",void 0),d([h({readOnly:!0})],o.prototype,"drapeSourceType",void 0),d([h()],o.prototype,"renderGroup",void 0),o=d([G("esri.views.3d.interactive.visualElements.DrapedVisualElementResources")],o);class f{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1}destroy(){this._destroyResources()}get object(){return this._resources!=null?this._resources.object:null}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncVisible())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}recreate(){this.attached&&this._createResources()}recreateGeometry(){if(!this._resourceFactory.recreateGeometry)return void this.recreate();const e=this._resourceFactory.view._stage;if(this._resources==null||!e)return;const s=this._resources.object;this._resources.external.forEach(r=>{r.type!==t.Mesh&&r.type!==t.Line&&r.type!==t.Point||e.remove(r)}),s.removeAllGeometries(),this._resourceFactory.recreateGeometry(this._resources.external,s,this._resources.layer),this._resources.external.forEach(r=>{r.type!==t.Mesh&&r.type!==t.Line&&r.type!==t.Point||e.add(r)})}_createOrDestroyResources(){this._attached?this._resources||this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory,s=e.view,r=s._stage;if(!r)return;const i=new g(r,{pickable:!1,updatePolicy:y.SYNC}),u=new w({castShadow:!1}),n=e.createResources(u,i);n.forEach(c=>{r.add(c),c.type===t.Texture&&c.load(r.renderView.renderingContext)}),r.add(u),i.add(u);const _=e.cameraChanged,R=_?D(()=>s.state.camera,c=>_(c),x):null;this._resources={layer:i,object:u,external:n,cameraHandle:R},this._syncVisible()}_destroyResources(){var s;if(this._resources==null)return;const e=this._resourceFactory.view._stage;e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this._resources.external.forEach(r=>{e.remove(r),r.type===t.Texture&&r.unload()})),this._resources.object.dispose(),(s=this._resources.cameraHandle)==null||s.remove(),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncVisible(){this._resources!=null&&(this._resources.object.visible=this._visible)}}class A extends F{constructor(e){super(e),this._isDraped=!1,this.object3dResources=new f(this.createObject3DResourceFactory(e.view)),this.drapedResources=new j(this.createDrapedResourceFactory(e.view)),this.isDraped=e.isDraped??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}export{A as t};
