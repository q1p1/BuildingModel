import{yw as Se,ys as ye,wv as g,y1 as v,wu as q,wt as l,ds as Ve,e6 as B,wm as ce,yt as Le,xp as M,dt as he,cN as U,dq as X,dW as de,x5 as V,g3 as b,dr as E,zc as ue,db as pe,hi as Ce,dV as Ae,cM as Te,dz as fe,dv as Me,cz as ge,bH as d,ro as $e,j3 as Re,wy as _e,wz as me,_ as Pe,w$ as ze,bK as k,dE as H,x3 as Z,mr as Ue,ba as o,zd as K,bT as Ie,b9 as ve,d7 as Oe,cO as z,mi as qe,d6 as I,xe as je,eP as Ne,tD as We,tE as He,r as m,wN as S,ze as Be,m as $,a as Ge,dD as Fe,yD as Xe,yE as j,zf as ke,zg as Ze,mY as Ke,yF as c,zh as O,zi as Ye,yp as Y,dP as Je,nZ as Qe,dR as et,dS as tt,dT as it,zj as nt,bM as J,bm as Q,dI as ee,dJ as te,zk as st,zl as rt,zm as at,iv as lt,cK as ie,vi as ot,rt as ct,ih as ht,dY as ne,zn as dt,zo as ut}from"./index-DRz-hW7S.js";import{t as pt,b as ft}from"./LineVisualElement-FWLw_r33.js";function be(t,e){const i=t.fragment;i.include(Se),t.include(ye),i.uniforms.add(new g("globalAlpha",n=>n.globalAlpha),new v("glowColor",n=>n.glowColor),new g("glowWidth",(n,s)=>n.glowWidth*s.camera.pixelRatio),new g("glowFalloff",n=>n.glowFalloff),new v("innerColor",n=>n.innerColor),new g("innerWidth",(n,s)=>n.innerWidth*s.camera.pixelRatio),new q("depthMap",(n,s)=>{var r;return(r=s.depth)==null?void 0:r.attachment}),new q("normalMap",n=>n.normals)),i.code.add(l`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),i.code.add(l`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),i.code.add(l`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),i.code.add(l`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float angleCutoffAdjust, out float depthDiscontinuityAlpha) {
float depth = depthFromTexture(depthMap, uv);
if (depth == 1.0) {
return false;
}
float linearDepth = linearizeDepth(depth);
pos = reconstructPosition(gl_FragCoord.xy, linearDepth);
float minStep = 6e-8;
float depthStep = clamp(depth + minStep, 0.0, 1.0);
float linearDepthStep = linearizeDepth(depthStep);
float depthError = abs(linearDepthStep - linearDepth);
if (depthError > 0.2) {
normal = texture(normalMap, uv).xyz * 2.0 - 1.0;
angleCutoffAdjust = 0.004;
} else {
normal = normalize(cross(dFdx(pos), dFdy(pos)));
angleCutoffAdjust = 0.0;
}
float ddepth = fwidth(linearDepth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / linearDepth);
return true;
}`),e.contrastControlEnabled?(i.uniforms.add(new q("frameColor",(n,s)=>n.colors),new g("globalAlphaContrastBoost",n=>n.globalAlphaContrastBoost!=null?n.globalAlphaContrastBoost:1)),i.code.add(l`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):i.code.add(l`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}const G=B(6);function Ee(t){const e=new ce;e.include(Le),e.include(be,t);const i=e.fragment;if(t.lineVerticalPlaneEnabled||t.heightManifoldEnabled)if(i.uniforms.add(new g("maxPixelDistance",(n,s)=>t.heightManifoldEnabled?2*s.camera.computeScreenPixelSizeAt(n.heightManifoldTarget):2*s.camera.computeScreenPixelSizeAt(n.lineVerticalPlaneSegment.origin))),i.code.add(l`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),t.spherical){const n=(r,a,h)=>b(r,a.heightManifoldTarget,h.camera.viewMatrix),s=(r,a)=>b(r,[0,0,0],a.camera.viewMatrix);i.uniforms.add(new M("heightManifoldOrigin",(r,a)=>(n(_,r,a),s(x,a),he(x,x,_),U(f,x),f[3]=X(x),f)),new v("globalOrigin",(r,a)=>s(_,a)),new g("cosSphericalAngleThreshold",(r,a)=>1-Math.max(2,de(a.camera.eye,r.heightManifoldTarget)*a.camera.perRenderPixelRatio)/X(r.heightManifoldTarget))),i.code.add(l`float globeDistancePixels(float posInGlobalOriginLength) {
float dist = abs(posInGlobalOriginLength - heightManifoldOrigin.w);
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}
float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
vec3 posInGlobalOriginNorm = normalize(globalOrigin - pos);
float cosAngle = dot(posInGlobalOriginNorm, heightManifoldOrigin.xyz);
vec3 posInGlobalOrigin = globalOrigin - pos;
float posInGlobalOriginLength = length(posInGlobalOrigin);
float sphericalDistance = globeDistancePixels(posInGlobalOriginLength);
float planarDistance = planeDistancePixels(heightPlane, pos);
return cosAngle < cosSphericalAngleThreshold ? sphericalDistance : planarDistance;
}`)}else i.code.add(l`float heightManifoldDistancePixels(vec4 heightPlane, vec3 pos) {
return planeDistancePixels(heightPlane, pos);
}`);if(t.pointDistanceEnabled&&(i.uniforms.add(new g("maxPixelDistance",(n,s)=>2*s.camera.computeScreenPixelSizeAt(n.pointDistanceTarget))),i.code.add(l`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`)),t.intersectsLineEnabled&&(i.uniforms.add(new g("perScreenPixelRatio",(n,s)=>s.camera.perScreenPixelRatio)),i.code.add(l`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(t.lineVerticalPlaneEnabled||t.intersectsLineEnabled)&&i.code.add(l`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),i.main.add(l`vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
fragColor = vec4(0.0);
return;
}
vec4 color = vec4(0.0);`),t.heightManifoldEnabled){i.uniforms.add(new V("angleCutoff",s=>R(s)),new M("heightPlane",(s,r)=>we(s.heightManifoldTarget,s.renderCoordsHelper.worldUpAtPosition(s.heightManifoldTarget,_),r.camera.viewMatrix)));const n=t.spherical?l`normalize(globalOrigin - pos)`:l`heightPlane.xyz`;i.main.add(l`
      vec2 angleCutoffAdjusted = angleCutoff - angleCutoffAdjust;
      // Fade out laserlines on flat surfaces
      float heightManifoldAlpha = 1.0 - smoothstep(angleCutoffAdjusted.x, angleCutoffAdjusted.y, abs(dot(normal, ${n})));
      vec4 heightManifoldColor = laserlineProfile(heightManifoldDistancePixels(heightPlane, pos));
      color = max(color, heightManifoldColor * heightManifoldAlpha);`)}return t.pointDistanceEnabled&&(i.uniforms.add(new V("angleCutoff",n=>R(n)),new M("pointDistanceSphere",(n,s)=>gt(n,s))),i.main.add(l`float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);`)),t.lineVerticalPlaneEnabled&&(i.uniforms.add(new V("angleCutoff",n=>R(n)),new M("lineVerticalPlane",(n,s)=>_t(n,s)),new v("lineVerticalStart",(n,s)=>mt(n,s)),new v("lineVerticalEnd",(n,s)=>Pt(n,s))),i.main.add(l`if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}`)),t.intersectsLineEnabled&&(i.uniforms.add(new V("angleCutoff",n=>R(n)),new v("intersectsLineStart",(n,s)=>b(_,n.lineStartWorld,s.camera.viewMatrix)),new v("intersectsLineEnd",(n,s)=>b(_,n.lineEndWorld,s.camera.viewMatrix)),new v("intersectsLineDirection",(n,s)=>(E(f,n.intersectsLineSegment.vector),f[3]=0,U(_,ue(f,f,s.camera.viewMatrix)))),new g("intersectsLineRadius",n=>n.intersectsLineRadius)),i.main.add(l`if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}`)),i.main.add(l`fragColor = laserlineOutput(color * depthDiscontinuityAlpha);`),e}function R(t){return pe(vt,Math.cos(t.angleCutoff),Math.cos(Math.max(0,t.angleCutoff-B(2))))}function gt(t,e){return b(Ce(N),t.pointDistanceOrigin,e.camera.viewMatrix),N[3]=de(t.pointDistanceOrigin,t.pointDistanceTarget),N}function _t(t,e){const i=Ae(t.lineVerticalPlaneSegment,.5,_),n=t.renderCoordsHelper.worldUpAtPosition(i,bt),s=U(x,t.lineVerticalPlaneSegment.vector),r=Te(_,n,s);return U(r,r),we(t.lineVerticalPlaneSegment.origin,r,e.camera.viewMatrix)}function mt(t,e){const i=E(_,t.lineVerticalPlaneSegment.origin);return t.renderCoordsHelper.setAltitude(i,0),b(i,i,e.camera.viewMatrix)}function Pt(t,e){const i=fe(_,t.lineVerticalPlaneSegment.origin,t.lineVerticalPlaneSegment.vector);return t.renderCoordsHelper.setAltitude(i,0),b(i,i,e.camera.viewMatrix)}function we(t,e,i){return b(se,t,i),E(f,e),f[3]=0,ue(f,f,i),Me(se,f,Et)}const vt=ge(),_=d(),f=$e(),bt=d(),x=d(),se=d(),Et=Ve(),N=Re(),wt=Object.freeze(Object.defineProperty({__proto__:null,build:Ee,defaultAngleCutoff:G},Symbol.toStringTag,{value:"Module"}));let Dt=class extends ze{constructor(){super(...arguments),this.innerColor=k(1,1,1),this.innerWidth=1,this.glowColor=k(1,.5,0),this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=.75,this.globalAlphaContrastBoost=2,this.angleCutoff=B(6),this.pointDistanceOrigin=d(),this.pointDistanceTarget=d(),this.lineVerticalPlaneSegment=H(),this.intersectsLineSegment=H(),this.intersectsLineRadius=3,this.heightManifoldTarget=d(),this.lineStartWorld=d(),this.lineEndWorld=d()}};class xt extends _e{constructor(e,i,n){super(e,i,new me(wt,()=>Pe(()=>Promise.resolve().then(()=>Rt),void 0)),n)}}function De(t){const e=new ce;e.include(be,t);const{vertex:i,fragment:n}=e;i.uniforms.add(new Z("modelView",(r,{camera:a})=>Ue(yt,a.viewMatrix,r.origin)),new Z("proj",(r,{camera:a})=>a.projectionMatrix),new g("glowWidth",(r,{camera:a})=>r.glowWidth*a.pixelRatio),new V("pixelToNDC",(r,{camera:a})=>pe(St,2/a.fullViewport[2],2/a.fullViewport[3]))),e.attributes.add(o.START,"vec3"),e.attributes.add(o.END,"vec3"),t.spherical&&(e.attributes.add(o.START_UP,"vec3"),e.attributes.add(o.END_UP,"vec3")),e.attributes.add(o.EXTRUDE,"vec2"),e.varyings.add("uv","vec2"),e.varyings.add("vViewStart","vec3"),e.varyings.add("vViewEnd","vec3"),e.varyings.add("vViewSegmentNormal","vec3"),e.varyings.add("vViewStartNormal","vec3"),e.varyings.add("vViewEndNormal","vec3");const s=!t.spherical;return i.main.add(l`
    vec3 pos = mix(start, end, extrude.x);

    vec4 viewPos = modelView * vec4(pos, 1);
    vec4 projPos = proj * viewPos;
    vec2 ndcPos = projPos.xy / projPos.w;

    // in planar we hardcode the up vectors to be Z-up */
    ${K(s,l`vec3 startUp = vec3(0, 0, 1);`)}
    ${K(s,l`vec3 endUp = vec3(0, 0, 1);`)}

    // up vector corresponding to the location of the vertex, selecting either startUp or endUp */
    vec3 up = extrude.y * mix(startUp, endUp, extrude.x);
    vec3 viewUp = (modelView * vec4(up, 0)).xyz;

    vec4 projPosUp = proj * vec4(viewPos.xyz + viewUp, 1);
    vec2 projUp = normalize(projPosUp.xy / projPosUp.w - ndcPos);

    // extrude ndcPos along projUp to the edge of the screen
    vec2 lxy = abs(sign(projUp) - ndcPos);
    ndcPos += length(lxy) * projUp;

    vViewStart = (modelView * vec4(start, 1)).xyz;
    vViewEnd = (modelView * vec4(end, 1)).xyz;

    vec3 viewStartEndDir = vViewEnd - vViewStart;

    vec3 viewStartUp = (modelView * vec4(startUp, 0)).xyz;

    // the normal of the plane that aligns with the segment and the up vector
    vViewSegmentNormal = normalize(cross(viewStartUp, viewStartEndDir));

    // the normal orthogonal to the segment normal and the start up vector
    vViewStartNormal = -normalize(cross(vViewSegmentNormal, viewStartUp));

    // the normal orthogonal to the segment normal and the end up vector
    vec3 viewEndUp = (modelView * vec4(endUp, 0)).xyz;
    vViewEndNormal = normalize(cross(vViewSegmentNormal, viewEndUp));

    // Add enough padding in the X screen space direction for "glow"
    float xPaddingPixels = sign(dot(vViewSegmentNormal, viewPos.xyz)) * (extrude.x * 2.0 - 1.0) * glowWidth;
    ndcPos.x += xPaddingPixels * pixelToNDC.x;

    // uv is used to read back depth to reconstruct the position at the fragment
    uv = ndcPos * 0.5 + 0.5;

    gl_Position = vec4(ndcPos, 0, 1);
  `),n.uniforms.add(new g("perScreenPixelRatio",(r,a)=>a.camera.perScreenPixelRatio)),n.code.add(l`float planeDistance(vec3 planeNormal, vec3 planeOrigin, vec3 pos) {
return dot(planeNormal, pos - planeOrigin);
}
float segmentDistancePixels(vec3 segmentNormal, vec3 startNormal, vec3 endNormal, vec3 pos, vec3 start, vec3 end) {
float distSegmentPlane = planeDistance(segmentNormal, start, pos);
float distStartPlane = planeDistance(startNormal, start, pos);
float distEndPlane = planeDistance(endNormal, end, pos);
float dist = max(max(distStartPlane, distEndPlane), abs(distSegmentPlane));
float width = fwidth(distSegmentPlane);
float maxPixelDistance = length(pos) * perScreenPixelRatio * 2.0;
float pixelDist = dist / min(width, maxPixelDistance);
return abs(pixelDist);
}`),n.main.add(l`fragColor = vec4(0.0);
vec3 dEndStart = vViewEnd - vViewStart;
if (dot(dEndStart, dEndStart) < 1e-5) {
return;
}
vec3 pos;
vec3 normal;
float angleCutoffAdjust;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, angleCutoffAdjust, depthDiscontinuityAlpha)) {
return;
}
float distance = segmentDistancePixels(
vViewSegmentNormal,
vViewStartNormal,
vViewEndNormal,
pos,
vViewStart,
vViewEnd
);
vec4 color = laserlineProfile(distance);
float alpha = (1.0 - smoothstep(0.995 - angleCutoffAdjust, 0.999 - angleCutoffAdjust, abs(dot(normal, vViewSegmentNormal))));
fragColor = laserlineOutput(color * alpha * depthDiscontinuityAlpha);`),e}const St=ge(),yt=Ie(),Vt=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));class Lt extends Dt{constructor(){super(...arguments),this.origin=d()}}let W=class extends _e{constructor(e,i,n){super(e,i,new me(Vt,()=>Pe(()=>Promise.resolve().then(()=>zt),void 0)),n,xe)}};const xe=new Map([[o.START,0],[o.END,1],[o.EXTRUDE,2],[o.START_UP,3],[o.END_UP,4]]);let re=class{constructor(e){this._renderCoordsHelper=e,this._buffers=null,this._origin=d(),this._dirty=!1,this._count=0,this._vao=null}set vertices(e){const i=Oe(3*e.length);let n=0;for(const s of e)i[n++]=s[0],i[n++]=s[1],i[n++]=s[2];this.buffers=[i]}set buffers(e){if(this._buffers=e,this._buffers.length>0){const i=this._buffers[0],n=3*Math.floor(i.length/3/2);z(this._origin,i[n],i[n+1],i[n+2])}else z(this._origin,0,0,0);this._dirty=!0}get origin(){return this._origin}draw(e){const i=this._ensureVAO(e);i!=null&&(e.bindVAO(i),e.drawArrays(qe.TRIANGLES,0,this._count))}dispose(){this._vao!=null&&this._vao.dispose()}get _layout(){return this._renderCoordsHelper.viewingMode===I.Global?At:Tt}_ensureVAO(e){return this._buffers==null?null:(this._vao??(this._vao=this._createVAO(e,this._buffers)),this._ensureVertexData(this._vao,this._buffers),this._vao)}_createVAO(e,i){const n=this._createDataBuffer(i);return this._dirty=!1,new je(e,xe,new Map([["data",Ne(this._layout)]]),new Map([["data",We.createVertex(e,He.STATIC_DRAW,n)]]))}_ensureVertexData(e,i){var s;if(!this._dirty)return;const n=this._createDataBuffer(i);(s=e.vertexBuffers.get("data"))==null||s.setData(n),this._dirty=!1}_createDataBuffer(e){const i=e.reduce((u,p)=>u+ae(p),0);this._count=i;const n=this._layout.createBuffer(i),s=this._origin;let r=0,a=0;const h="startUp"in n?this._setUpVectors.bind(this,n):void 0;for(const u of e){for(let p=0;p<u.length;p+=3){const T=z(le,u[p],u[p+1],u[p+2]);p===0?a=this._renderCoordsHelper.getAltitude(T):this._renderCoordsHelper.setAltitude(T,a);const P=r+2*p;h==null||h(p,P,u,T);const F=he(le,T,s);if(p<u.length-3){for(let w=0;w<6;w++)n.start.setVec(P+w,F);n.extrude.setValues(P,0,-1),n.extrude.setValues(P+1,1,-1),n.extrude.setValues(P+2,1,1),n.extrude.setValues(P+3,0,-1),n.extrude.setValues(P+4,1,1),n.extrude.setValues(P+5,0,1)}if(p>0)for(let w=-6;w<0;w++)n.end.setVec(P+w,F)}r+=ae(u)}return n.buffer}_setUpVectors(e,i,n,s,r){const a=this._renderCoordsHelper.worldUpAtPosition(r,Ct);if(i<s.length-3)for(let h=0;h<6;h++)e.startUp.setVec(n+h,a);if(i>0)for(let h=-6;h<0;h++)e.endUp.setVec(n+h,a)}};function ae(t){return 3*(2*(t.length/3-1))}const Ct=d(),le=d(),At=ve().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE).vec3f(o.START_UP).vec3f(o.END_UP),Tt=ve().vec3f(o.START).vec3f(o.END).vec2f(o.EXTRUDE);class A extends Be{constructor(){super(...arguments),this.contrastControlEnabled=!1,this.spherical=!1}}m([S()],A.prototype,"contrastControlEnabled",void 0),m([S()],A.prototype,"spherical",void 0);class L extends A{constructor(){super(...arguments),this.heightManifoldEnabled=!1,this.pointDistanceEnabled=!1,this.lineVerticalPlaneEnabled=!1,this.intersectsLineEnabled=!1}}m([S()],L.prototype,"heightManifoldEnabled",void 0),m([S()],L.prototype,"pointDistanceEnabled",void 0),m([S()],L.prototype,"lineVerticalPlaneEnabled",void 0),m([S()],L.prototype,"intersectsLineEnabled",void 0);let D=class extends Xe{constructor(t){super(t),this.produces=j.LASERLINES,this.consumes={required:[j.LASERLINES,"normals"]},this.requireGeometryDepth=!0,this._configuration=new L,this._pathTechniqueConfiguration=new A,this._heightManifoldEnabled=!1,this._pointDistanceEnabled=!1,this._lineVerticalPlaneEnabled=!1,this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._pathVerticalPlaneEnabled=!1,this._passParameters=new Lt;const e=t.view._stage.renderView.techniques,i=new A;i.contrastControlEnabled=t.contrastControlEnabled,e.precompile(W,i)}initialize(){this._passParameters.renderCoordsHelper=this.view.renderCoordsHelper,this._pathTechniqueConfiguration.spherical=this.view.state.viewingMode===I.Global,this._pathTechniqueConfiguration.contrastControlEnabled=this.contrastControlEnabled,this._techniques.precompile(W,this._pathTechniqueConfiguration),this._blit=new ke(this._techniques,Ze.PremultipliedAlpha)}destroy(){this._pathVerticalPlaneData=Ke(this._pathVerticalPlaneData),this._blit=null}get _techniques(){return this.view._stage.renderView.techniques}get heightManifoldEnabled(){return this._heightManifoldEnabled}set heightManifoldEnabled(t){this._heightManifoldEnabled!==t&&(this._heightManifoldEnabled=t,this.requestRender(c.UPDATE))}get heightManifoldTarget(){return this._passParameters.heightManifoldTarget}set heightManifoldTarget(t){E(this._passParameters.heightManifoldTarget,t),this.requestRender(c.UPDATE)}get pointDistanceEnabled(){return this._pointDistanceEnabled}set pointDistanceEnabled(t){t!==this._pointDistanceEnabled&&(this._pointDistanceEnabled=t,this.requestRender(c.UPDATE))}get pointDistanceTarget(){return this._passParameters.pointDistanceTarget}set pointDistanceTarget(t){E(this._passParameters.pointDistanceTarget,t),this.requestRender(c.UPDATE)}get pointDistanceOrigin(){return this._passParameters.pointDistanceOrigin}set pointDistanceOrigin(t){E(this._passParameters.pointDistanceOrigin,t),this.requestRender(c.UPDATE)}get lineVerticalPlaneEnabled(){return this._lineVerticalPlaneEnabled}set lineVerticalPlaneEnabled(t){t!==this._lineVerticalPlaneEnabled&&(this._lineVerticalPlaneEnabled=t,this.requestRender(c.UPDATE))}get lineVerticalPlaneSegment(){return this._passParameters.lineVerticalPlaneSegment}set lineVerticalPlaneSegment(t){O(t,this._passParameters.lineVerticalPlaneSegment),this.requestRender(c.UPDATE)}get intersectsLineEnabled(){return this._intersectsLineEnabled}set intersectsLineEnabled(t){t!==this._intersectsLineEnabled&&(this._intersectsLineEnabled=t,this.requestRender(c.UPDATE))}get intersectsLineSegment(){return this._passParameters.intersectsLineSegment}set intersectsLineSegment(t){O(t,this._passParameters.intersectsLineSegment),this.requestRender(c.UPDATE)}get intersectsLineRadius(){return this._passParameters.intersectsLineRadius}set intersectsLineRadius(t){t!==this._passParameters.intersectsLineRadius&&(this._passParameters.intersectsLineRadius=t,this.requestRender(c.UPDATE))}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(t){t!==this._intersectsLineInfinite&&(this._intersectsLineInfinite=t,this.requestRender(c.UPDATE))}get pathVerticalPlaneEnabled(){return this._pathVerticalPlaneEnabled}set pathVerticalPlaneEnabled(t){t!==this._pathVerticalPlaneEnabled&&(this._pathVerticalPlaneEnabled=t,this._pathVerticalPlaneData!=null&&this.requestRender(c.UPDATE))}set pathVerticalPlaneVertices(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new re(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.vertices=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}set pathVerticalPlaneBuffers(t){this._pathVerticalPlaneData==null&&(this._pathVerticalPlaneData=new re(this._passParameters.renderCoordsHelper)),this._pathVerticalPlaneData.buffers=t,this.pathVerticalPlaneEnabled&&this.requestRender(c.UPDATE)}setParameters(t){Ye(this._passParameters,t)&&this.requestRender(c.UPDATE)}precompile(){this._acquireTechnique().release()}render(t){const e=t.find(({name:a})=>a===j.LASERLINES);if(!this.bindParameters.decorations||this._blit==null)return e;const i=this.renderingContext,n=t.find(({name:a})=>a==="normals");this._passParameters.normals=n==null?void 0:n.getTexture();const s=()=>{(this.heightManifoldEnabled||this.pointDistanceEnabled||this.lineVerticalPlaneSegment||this.intersectsLineEnabled)&&this._renderUnified(),this.pathVerticalPlaneEnabled&&this._renderPath()};if(!this.contrastControlEnabled)return i.bindFramebuffer(e.fbo),s(),e;this._passParameters.colors=e.getTexture();const r=this.fboCache.acquire(e.fbo.width,e.fbo.height,"laser lines");return i.bindFramebuffer(r.fbo),i.setClearColor(0,0,0,0),i.clear(Y.COLOR|Y.DEPTH),s(),i.unbindTexture(e.getTexture()),this._blit.blend(i,r,e,this.bindParameters)||this.requestRender(c.UPDATE),r.release(),e}_acquireTechnique(){return this._configuration.heightManifoldEnabled=this.heightManifoldEnabled,this._configuration.lineVerticalPlaneEnabled=this.lineVerticalPlaneEnabled,this._configuration.pointDistanceEnabled=this.pointDistanceEnabled,this._configuration.intersectsLineEnabled=this.intersectsLineEnabled,this._configuration.contrastControlEnabled=this.contrastControlEnabled,this._configuration.spherical=this.view.state.viewingMode===I.Global,this._techniques.acquire(xt,this._configuration)}_renderUnified(){if(!this._updatePassParameters())return;const t=this._acquireTechnique();if(t.compiled){const e=this.renderingContext;e.bindTechnique(t,this.bindParameters,this._passParameters),e.screen.draw()}else this.requestRender(c.UPDATE);t.release()}_renderPath(){if(this._pathVerticalPlaneData==null)return;const t=this._techniques.acquire(W,this._pathTechniqueConfiguration);if(t.compiled){const e=this.renderingContext;this._passParameters.origin=this._pathVerticalPlaneData.origin,e.bindTechnique(t,this.bindParameters,this._passParameters),this._pathVerticalPlaneData.draw(e)}else this.requestRender(c.UPDATE);t.release()}_updatePassParameters(){if(!this._intersectsLineEnabled)return!0;const t=this.bindParameters.camera,e=this._passParameters;if(this._intersectsLineInfinite){if(Je(Qe(e.intersectsLineSegment.origin,e.intersectsLineSegment.vector),y),y.c0=-Number.MAX_VALUE,!et(t.frustum,y))return!1;tt(y,e.lineStartWorld),it(y,e.lineEndWorld)}else E(e.lineStartWorld,e.intersectsLineSegment.origin),fe(e.lineEndWorld,e.intersectsLineSegment.origin,e.intersectsLineSegment.vector);return!0}get test(){}};m([$({constructOnly:!0})],D.prototype,"contrastControlEnabled",void 0),m([$({constructOnly:!0})],D.prototype,"isDecoration",void 0),m([$()],D.prototype,"produces",void 0),m([$()],D.prototype,"consumes",void 0),D=m([Ge("esri.views.3d.webgl-engine.effects.laserlines.LaserLineRenderer")],D);const y=Fe();class Nt extends pt{constructor(e){super(e),this._angleCutoff=G,this._style={},this._heightManifoldTarget=d(),this._heightManifoldEnabled=!1,this._intersectsLine=H(),this._intersectsLineEnabled=!1,this._intersectsLineInfinite=!1,this._lineVerticalPlaneSegment=null,this._pathVerticalPlaneBuffers=null,this._pointDistanceLine=null,this.applyProperties(e)}get testData(){}createResources(){this._ensureRenderer()}destroyResources(){this._disposeRenderer()}updateVisibility(){this._syncRenderer(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance()}get angleCutoff(){return this._angleCutoff}set angleCutoff(e){this._angleCutoff!==e&&(this._angleCutoff=e,this._syncAngleCutoff())}get style(){return this._style}set style(e){this._style=e,this._syncStyle()}get heightManifoldTarget(){return this._heightManifoldEnabled?this._heightManifoldTarget:null}set heightManifoldTarget(e){e!=null?(E(this._heightManifoldTarget,e),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1,this._syncRenderer(),this._syncHeightManifold()}set intersectsWorldUpAtLocation(e){if(e==null)return void(this.intersectsLine=null);const i=this.view.renderCoordsHelper.worldUpAtPosition(e,Mt);this.intersectsLine=nt(e,i),this.intersectsLineInfinite=!0}get intersectsLine(){return this._intersectsLineEnabled?this._intersectsLine:null}set intersectsLine(e){e!=null?(O(e,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1,this._syncIntersectsLine(),this._syncRenderer()}get intersectsLineInfinite(){return this._intersectsLineInfinite}set intersectsLineInfinite(e){this._intersectsLineInfinite=e,this._syncIntersectsLineInfinite()}get lineVerticalPlaneSegment(){return this._lineVerticalPlaneSegment}set lineVerticalPlaneSegment(e){this._lineVerticalPlaneSegment=e!=null?O(e):null,this._syncLineVerticalPlane(),this._syncRenderer()}get pathVerticalPlane(){return this._pathVerticalPlaneBuffers}set pathVerticalPlane(e){this._pathVerticalPlaneBuffers=e,this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncRenderer()}get pointDistanceLine(){return this._pointDistanceLine}set pointDistanceLine(e){this._pointDistanceLine=e!=null?{origin:J(e.origin),target:e.target?J(e.target):null}:null,this._syncPointDistance(),this._syncRenderer()}_syncRenderer(){this.attached&&this.visible&&(this._intersectsLineEnabled||this._heightManifoldEnabled||this._pointDistanceLine!=null||this._pathVerticalPlaneBuffers!=null)?this._ensureRenderer():this._disposeRenderer()}_ensureRenderer(){this._renderer==null&&(this._renderer=new D({view:this.view,contrastControlEnabled:!0,isDecoration:this.isDecoration}),this._syncStyle(),this._syncHeightManifold(),this._syncIntersectsLine(),this._syncIntersectsLineInfinite(),this._syncPathVerticalPlane(),this._syncLineVerticalPlane(),this._syncPointDistance(),this._syncAngleCutoff())}_syncStyle(){this._renderer!=null&&(this._renderer.setParameters(this._style),this._style.intersectsLineRadius!=null&&(this._renderer.intersectsLineRadius=this._style.intersectsLineRadius))}_syncAngleCutoff(){this._renderer!=null&&this._renderer.setParameters({angleCutoff:this._angleCutoff})}_syncHeightManifold(){this._renderer!=null&&(this._renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this._renderer.heightManifoldTarget=this._heightManifoldTarget))}_syncIntersectsLine(){this._renderer!=null&&(this._renderer.intersectsLineEnabled=this._intersectsLineEnabled&&this.visible,this._intersectsLineEnabled&&(this._renderer.intersectsLineSegment=this._intersectsLine))}_syncIntersectsLineInfinite(){this._renderer!=null&&(this._renderer.intersectsLineInfinite=this._intersectsLineInfinite)}_syncPathVerticalPlane(){this._renderer!=null&&(this._renderer.pathVerticalPlaneEnabled=this._pathVerticalPlaneBuffers!=null&&this.visible,this._pathVerticalPlaneBuffers!=null&&(this._renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))}_syncLineVerticalPlane(){this._renderer!=null&&(this._renderer.lineVerticalPlaneEnabled=this._lineVerticalPlaneSegment!=null&&this.visible,this._lineVerticalPlaneSegment!=null&&(this._renderer.lineVerticalPlaneSegment=this._lineVerticalPlaneSegment))}_syncPointDistance(){if(this._renderer==null)return;const e=this._pointDistanceLine,i=e!=null;this._renderer.pointDistanceEnabled=i&&e.target!=null&&this.visible,i&&(this._renderer.pointDistanceOrigin=e.origin,e.target!=null&&(this._renderer.pointDistanceTarget=e.target))}_disposeRenderer(){this._renderer!=null&&this.view._stage&&(this._renderer.destroy(),this._renderer=null)}}const Mt=d();let Wt=class extends ft{constructor(e){super(e),this._material=null,this._texture=null,this._geometry=null,this._size=3,this._color=Q(1,0,1,1),this._pixelSnappingEnabled=!0,this._primitive="square",this._outlineSize=1,this._outlineColor=Q(1,1,1,1),this._elevationInfo=null,this.applyProperties(e)}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get size(){return this._size}set size(e){if(e!==this._size){const i=this._preferredTextureSize;this._size=e,i<this._preferredTextureSize?this.recreate():this._updateSizeAttribute()}}get color(){return this._color}set color(e){ee(e,this._color)||(te(this._color,e),this._updateMaterial())}get pixelSnappingEnabled(){return this._pixelSnappingEnabled}set pixelSnappingEnabled(e){this._pixelSnappingEnabled!==e&&(this._pixelSnappingEnabled=e,this._updateMaterial())}get primitive(){return this._primitive}set primitive(e){this._primitive!==e&&(this._primitive=e,this.recreate())}get outlineSize(){return this._outlineSize}set outlineSize(e){e!==this._outlineSize&&(this._outlineSize=e,this._updateMaterial())}get outlineColor(){return this._outlineColor}set outlineColor(e){ee(e,this._outlineColor)||(te(this._outlineColor,e),this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}_updateMaterial(){var e;(e=this._material)==null||e.setParameters(this._materialParameters)}_updateSizeAttribute(){const e=this.object;if(e==null)return;const i=e.geometries[0];if(i==null)return;const n=i.getMutableAttribute(o.SIZE).data,s=this._geometrySize;n[0]=s,n[1]=s,e.geometryVertexAttributeUpdated(e.geometries[0],o.SIZE)}get _materialParameters(){var e;return{color:this._color,textureIsSignedDistanceField:!0,sampleSignedDistanceFieldTexelCenter:st(this._primitive),distanceFieldBoundingBox:$t,occlusionTest:!1,outlineColor:this._outlineColor,outlineSize:this._outlineSize,textureId:(e=this._texture)==null?void 0:e.id,polygonOffset:!1,shaderPolygonOffset:0,drawInSecondSlot:!0,depthEnabled:!1,pixelSnappingEnabled:this.pixelSnappingEnabled,isDecoration:this.isDecoration}}get _geometrySize(){return this._size/C}createExternalResources(){this._texture=rt(this._primitive,this._preferredTextureSize),this._material=new at(this._materialParameters,this.view.state.viewingMode===I.Global);const e=this.view._stage;this._texture.load(e.renderView.renderingContext),e.add(this._texture)}destroyExternalResources(){this._texture&&(this.view._stage.remove(this._texture),this._texture.dispose(),this._texture=null),this._material=null}createGeometries(e){const i=this._createRenderGeometry();i!=null&&e.addGeometry(i)}forEachExternalMaterial(e){this._material&&e(this._material)}get _preferredTextureSize(){return lt(2*this._geometrySize,16,128)}calculateMapBounds(e){var s;const i=(s=this.object)==null?void 0:s.geometries[0];if(!i)return!1;const n=i.attributes.get(o.POSITION).data;return ie(n,this.view.renderCoordsHelper.spatialReference,oe,this.view.spatialReference),ot(e,oe),!0}_createRenderGeometry(){const{geometry:e,_material:i}=this;if(e==null||i==null)return null;const{renderCoordsHelper:n,elevationProvider:s}=this.view,r=ct(e,s,ht.fromElevationInfo(this.elevationInfo),n),a=z(ne.get(),e.x,e.y,r),h=ne.get();ie(a,e.spatialReference,h,n.spatialReference);const u=this._geometrySize;return dt(i,null,h,null,null,[u,u],[0,0,0,1])}};const C=ut,$t=[C/2,C/2,1-C/2,1-C/2],oe=d(),Rt=Object.freeze(Object.defineProperty({__proto__:null,build:Ee,defaultAngleCutoff:G},Symbol.toStringTag,{value:"Module"})),zt=Object.freeze(Object.defineProperty({__proto__:null,build:De},Symbol.toStringTag,{value:"Module"}));export{Wt as S,Nt as c};
