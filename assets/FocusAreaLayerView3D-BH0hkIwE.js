import{w$ as W,wm as K,yt as ne,wu as k,yA as ce,wt as x,wy as U,wz as Q,_ as X,wB as Y,wI as J,dX as le,ba as ue,x3 as q,mr as de,bT as S,kU as R,r as p,m,a as Z,yD as he,yn as pe,yp as L,kV as V,kW as w,mi as j,xe as fe,xf as _e,zb as me,tD as ge,tE as Ae,ih as we,E as C,N,u as B,d6 as ve,kn as Ee,h7 as ye,cN as be,c6 as G,d7 as T,i4 as Pe,bH as ee}from"./index-DVfovSRj.js";import{e as Te}from"./earcut-Lltz9D9k.js";import{l as Ce}from"./LayerView3D-CGyMXz7m.js";import{p as Ne,n as $e}from"./Graphics3DExtrudeSymbolLayer-Dt1ngEes.js";import{y as xe}from"./LayerView-Do2Sz7my.js";import"./SnappingCandidate-O5eRSE6e.js";import"./renderingInfoUtils-DKXK8SlC.js";import"./triangulationUtils-BfBtjUFf.js";import"./deduplicate-D2lCzC6A.js";class O extends W{}function te(){const t=new K;return t.include(ne),t.outputs.add("fragColor","vec4",0),t.fragment.uniforms.add(new k("colorTexture",e=>e.color),new k("focusArea",e=>e.focusArea),new ce("focusAreaEffectMode",e=>e.effect??1)).main.add(x`float mask = texture( focusArea, uv, 0.0 ).r;
vec4 color = texture( colorTexture, uv, 0.0 );
vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
if (focusAreaEffectMode == 1) {
fragColor = mask > 0.0 ? color : 0.55 * colorDeSaturate + 0.45;
} else {
fragColor = mask > 0.0 ? color : 0.33 * mix(color, colorDeSaturate, 0.);
}`),t}const Se=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:O,build:te},Symbol.toStringTag,{value:"Module"}));class H extends U{constructor(e,o,r){super(e,o,new Q(Se,()=>X(()=>Promise.resolve().then(()=>De),void 0)),r)}initializePipeline(){return Y({colorWrite:J})}}class F extends W{constructor(){super(...arguments),this.origin=le}}function se(){const t=new K;return t.attributes.add(ue.POSITION,"vec3"),t.outputs.add("fragColor","vec4",0),t.vertex.uniforms.add(new q("proj",(e,o)=>o.camera.projectionMatrix),new q("view",(e,o)=>de(Re,o.camera.viewMatrix,e.origin))).main.add(x`gl_Position = proj * view * vec4(position, 1.0);`),t.fragment.main.add(x`fragColor = vec4(1., 0., 0., 1.);`),t}const Re=S(),Oe=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaMaskPassParameters:F,build:se},Symbol.toStringTag,{value:"Module"}));class z extends U{constructor(e,o,r){super(e,o,new Q(Oe,()=>X(()=>Promise.resolve().then(()=>ke),void 0)),r)}initializePipeline(){return Y({colorWrite:J,depthTest:{func:R.LEQUAL}})}}let h=class extends he{constructor(e){super(e),this.consumes={required:["final-color"]},this.produces="final-color",this.focusAreaGeometries=new Array,this._vaos=Array(),this._count=new Array,this._origins=new Array,this._colorParameters=new O,this._maskParameters=new F,e.techniques.precompile(z),e.techniques.precompile(H)}initialize(){this.setExtrudedVolume()}destroy(){this._vaos.forEach(e=>e.dispose()),this._vaos=[],this._count=[],this._origins=[]}render(e){const o=this.techniques.acquire(z),r=this.techniques.acquire(H),i=this.bindParameters,a=e.find(({name:l})=>l==="final-color"),u=a==null?void 0:a.getTexture(),c=i.camera,d=c.fullViewport[2],f=c.fullViewport[3],n=this.fboCache.acquire(d,f,"focusArea",pe.RGBA),g=this.fboCache.acquire(d,f,this.produces);if(!o.compiled||!r.compiled||!this._vaos||this.effect===v.NONE)return this.requestRender(),o.release(),r.release(),g.release(),n.release(),a;const s=this.renderingContext;n.attachDepth(a.getAttachment(this.gl.DEPTH_STENCIL_ATTACHMENT)),s.bindFramebuffer(n.fbo),s.clear(L.COLOR|L.STENCIL),s.setViewport(0,0,d,f),s.gl.clearStencil(0),s.gl.clear(s.gl.STENCIL_BUFFER_BIT),s.setClearStencil(0);for(let l=0;l<this._vaos.length;l++){const b=this._vaos[l],A=this._count[l];b&&(this._maskParameters.origin=this._origins[l],s.bindTechnique(o,i,this._maskParameters),s.setFaceCullingEnabled(!1),s.setStencilTestEnabled(!0),s.setStencilWriteMask(255),s.setStencilFunction(R.ALWAYS,0,255),s.setStencilOpSeparate(V.FRONT,w.KEEP,w.INCR_WRAP,w.KEEP),s.setStencilOpSeparate(V.BACK,w.KEEP,w.DECR_WRAP,w.KEEP),s.setDepthWriteEnabled(!1),s.setColorMask(!1,!1,!1,!1),s.bindVAO(b),s.drawArrays(j.TRIANGLES,0,A),s.setFaceCullingEnabled(!1),s.setDepthTestEnabled(!1),s.setStencilFunction(R.NOTEQUAL,0,255),s.setStencilWriteMask(0),s.setColorMask(!0,!0,!0,!0),s.drawArrays(j.TRIANGLES,0,A))}return o.release(),s.gl.clear(s.gl.STENCIL_BUFFER_BIT),s.bindFramebuffer(g.fbo),this._colorParameters.color=u,this._colorParameters.focusArea=n.getTexture(),this._colorParameters.effect=this.effect,s.bindTechnique(r,i,this._colorParameters),s.screen.draw(),n.release(),r.release(),g.attachDepth(a.getAttachment(this.gl.DEPTH_STENCIL_ATTACHMENT)),g}setExtrudedVolume(){var o;const e=this.focusAreaGeometries;this._vaos=[],this._count=[],this._origins=[];for(let r=0;r<e.length;r++){const i=e[r],a=new Array,u=i.indicesBottom;this._origins.push(i.origin);for(let n=0;n<u.length;n++)a.push(i.positions[3*(u[n]-1)]),a.push(i.positions[3*(u[n]-1)+1]),a.push(i.positions[3*(u[n]-1)+2]);const c=i.indicesExtruded;for(let n=0;n<c.length;n++)a.push(i.positions[3*c[n]]),a.push(i.positions[3*c[n]+1]),a.push(i.positions[3*c[n]+2]);const d=new Float32Array(a),f=new fe(this.renderingContext,_e,new Map([["geometry",me]]),new Map([["geometry",ge.createVertex(this.renderingContext,Ae.STATIC_DRAW,d)]]));(o=this._vaos)==null||o.push(f),this._count.push(u.length+c.length)}}};p([m()],h.prototype,"consumes",void 0),p([m()],h.prototype,"produces",void 0),p([m({constructOnly:!0})],h.prototype,"techniques",void 0),p([m()],h.prototype,"focusAreaGeometries",void 0),p([m()],h.prototype,"effect",void 0),h=p([Z("esri.views.3d.webgl-engine.effects.focusArea.FocusAreaRenderNode")],h);class Fe{constructor(e,o,r,i,a){this.positions=e,this.indicesBottom=o,this.indicesExtruded=r,this.height=i,this.origin=a}}var v;(function(t){t[t.NONE=0]="NONE",t[t.BRIGHT=1]="BRIGHT",t[t.DARK=2]="DARK"})(v||(v={}));const $={none:v.NONE,bright:v.BRIGHT,dark:v.DARK},_=0,Ie=1e4;let y=class extends Ce(xe){constructor(){super(...arguments),this.type="focusArea-3d",this._elevationContext=new we,this._geometries=new Array}initialize(){this.addHandles([C(()=>this.layer.geometries,(t,e)=>{e=t,this._extrudePolygons(e),this._setFocusAreaRenderNode()},N),C(()=>this.layer.tmpEffect,(t,e)=>{e=t,this._renderNode&&e&&(this._renderNode.effect=$[e])},N),C(()=>this.layer.visible,(t,e)=>{t?this._renderNode??(this._renderNode=new h({view:this.view,techniques:this.view._stage.renderView.techniques,focusAreaGeometries:this._geometries,effect:$[this.layer.tmpEffect??"none"]})):this._renderNode=B(this._renderNode)},N)])}destroy(){this._renderNode=B(this._renderNode),this._geometries=[]}_extrudePolygons(t){this._geometries=[];const e=Ie-_;for(const o of t){const r=S(),i=ee(),a=this.view.renderCoordsHelper.viewingMode===ve.Global;a||this.view.renderCoordsHelper.worldUpAtPosition(null,i);const u=Ee(o);if(u==null)return;ye(o.spatialReference,[u.x,u.y,0],r,this.view.renderCoordsHelper.spatialReference);const c=be(Me,[r[12]-_*i[0],r[13]-_*i[1],r[14]-_*i[2]]),d=S();d[12]=-r[12],d[13]=-r[13],d[14]=-r[14];const f=Ne(o,this.view.elevationProvider,this.view.renderCoordsHelper,this._elevationContext),{polygons:n,mapPositions:g,position:s}=f;for(const l of n){const b=l.count,A=Te(l.mapPositions,l.holeIndices,3);if(A.length===0)continue;const I=A.length,E=6*b,M=G(E+I),D=G(I),P=T(3*E),re=T(3*E),oe=T(3*E),ie=T(E);$e(s,g,A,l,P,oe,re,ie,M,D,e,i,a),Pe(P,P,d);const ae=new Fe(P,D,M,e,[r[12]+_*c[0],r[13]+_*c[1],r[14]+_*c[2]]);this._geometries.push(ae)}}}_setFocusAreaRenderNode(){this._renderNode?(this._renderNode.focusAreaGeometries=this._geometries,this._renderNode.setExtrudedVolume()):this._renderNode=new h({view:this.view,techniques:this.view._stage.renderView.techniques,focusAreaGeometries:this._geometries,effect:$[this.layer.tmpEffect??"none"]})}};p([m()],y.prototype,"type",void 0),p([m()],y.prototype,"layer",void 0),y=p([Z("esri.views.3d.layers.FocusAreaLayerView3D")],y);const Me=ee(),Ue=y,De=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:O,build:te},Symbol.toStringTag,{value:"Module"})),ke=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaMaskPassParameters:F,build:se},Symbol.toStringTag,{value:"Module"}));export{Ue as default};
