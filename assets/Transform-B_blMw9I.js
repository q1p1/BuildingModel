import{mM as y,mN as $,mO as H,hv as a,cf as w,dq as z,hy as b,mP as _,b5 as A,b as F,mQ as j,de as L,df as P,cO as B,z as G,bk as C,ch as S,gB as T,g3 as W,gk as q,r as d,m as v,a as I,bT as k,bl as D,bH as R}from"./index-DVfovSRj.js";import{a as K}from"./RenderTexture-C5fgNyHb.js";function J(e,n,t,r){if(n==null||r==null)return!1;const i=y(n,$),s=y(r,H);if(i===s&&i!==a.UNKNOWN||w(n,r))return t[0]=1,t[1]=1,t[2]=1,!0;if(i===a.SPHERICAL_ECEF){const c=z(e),u=c/Math.sqrt(e[0]*e[0]+e[1]*e[1]),h=c/b.radius;if(s===a.WEB_MERCATOR)return t[0]=u*h,t[1]=u*h,t[2]=1,!0;if(s===a.WGS84||s===a.CGCS2000){const o=_;return t[0]=o*u*h,t[1]=o*h,t[2]=1,!0}}else if(i===a.PLATE_CARREE){if(s===a.WGS84||s===a.CGCS2000)return t[0]=_,t[1]=_,t[2]=1,!0;if(s===a.WEB_MERCATOR){const c=e[1]/b.radius;return t[0]=1,t[1]=1/Math.cos(c),t[2]=1,!0}}return!1}let p=class extends A.EventedMixin(F){constructor(e){super(e),this._tmpEvent=new j,this._renderCoordsHelper=e.view.renderCoordsHelper,this._renderSR=this._renderCoordsHelper.spatialReference,this._layerElevationSource=e.layerElevationSource}initialize(){this._intersector=L(this.view.state.viewingMode),this._intersector.options.store=P.MIN,this._intersector.options.normalRequired=!1,this._tmpEvent.context=this.intersectionHandler.isGround?"ground":"scene"}get spatialReference(){var e,n;return(n=(e=this.view)==null?void 0:e.elevationProvider)==null?void 0:n.spatialReference}getElevation(e,n,t,r){const i=this._renderCoordsHelper,s=B(l,e,n,t);if(!i.toRenderCoords(s,r,s))return G.getLogger(this).error("could not project point to compute elevation"),null;const{layerElevationSource:c,_intersector:u,intersectionHandler:h}=this,o=c.fullExtent,f=o!=null&&Number.isFinite(o.xmin)&&Number.isFinite(o.xmax)&&Number.isFinite(o.ymin)&&Number.isFinite(o.ymax)&&Number.isFinite(o.zmin)&&Number.isFinite(o.zmax)?new C(o.zmin,o.zmax):c.elevationRange;if(f==null)return null;const x=c.elevationOffset,M=f.elevationRangeMin+x,O=f.elevationRangeMax+x,E=i.setAltitude(Q,O,s),g=i.setAltitude(U,M,s);return u.reset(E,g,null),h.intersect(u,null,E,g,null,!0),u.results.min.getIntersectionPoint(s)?i.getAltitude(s):null}getSphereElevationBounds(e,n){return K(e,n,N,this._renderSR),this._layerElevationSource.getElevationRange(N)}getRootElevationBounds(){const e=this.layerElevationSource.fullExtent;return e!=null&&e.hasZ?new C(e.zmin,e.zmax):null}objectsChanged(e){this.spatialReference&&(this._computeLayerExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}objectChanged(e){this.spatialReference&&(this._computeObjectExtent(e,this._tmpEvent.extent),this._tmpEvent.spatialReference=this.spatialReference,this.emit("elevation-change",this._tmpEvent))}_computeObjectExtent(e,n){S(n),this._expandExtent(e,n)}_computeLayerExtent(e,n){S(n);for(const t of e)this._expandExtent(t,n)}_expandExtent(e,n){const t=this.spatialReference;if(t==null||e==null)return;T(m,e.quaternion),m[12]=e.center[0],m[13]=e.center[1],m[14]=e.center[2];const r=e.halfSize;for(let i=0;i<8;++i)l[0]=1&i?r[0]:-r[0],l[1]=2&i?r[1]:-r[1],l[2]=4&i?r[2]:-r[2],W(l,l,m),this._renderCoordsHelper.fromRenderCoords(l,l,t),q(n,l,n)}};d([v({constructOnly:!0})],p.prototype,"layerElevationSource",void 0),d([v({constructOnly:!0})],p.prototype,"intersectionHandler",void 0),d([v({constructOnly:!0})],p.prototype,"view",void 0),d([v()],p.prototype,"spatialReference",null),p=d([I("esri.views.3d.layers.i3s.LayerElevationProvider")],p);const m=k(),N=D(0,0,0,0),l=R(),Q=R(),U=R();class X{constructor(n,t,r,i){this.toMapSpace=n,this.transform=t,this.obb=r,this.geometry=i}}class Y{constructor(n,t){this.position=n,this.rotationScale=t,this.origin=void 0}}export{J as f,Y as i,X as t,p as x};
