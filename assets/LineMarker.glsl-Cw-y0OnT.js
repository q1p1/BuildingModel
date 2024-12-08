import{wm as Y,wx as _,xx as T,xy as K,xz as Q,x7 as X,wn as ee,ba as r,x5 as te,xp as D,wt as l,xA as re,rR as G,x3 as ae,wv as ie,xB as se,wp as ne,wq as oe,ws as ce,wu as le,ww as pe,xC as k,xD as de,xE as he,x8 as ve,wy as ue,wz as me,_ as fe,wB as A,xq as Te,wF as Se,wG as ge,xa as Pe,wH as _e,wI as y,wJ as M,wK as U,wL as we,xF as W,xG as F,xH as xe,xI as Oe,xJ as Ae,xK as Ee,kT as f,bb as ye,xL as Re,wR as R,dF as E,xb as Le,xM as B,xN as q,mz as ze,b9 as Ie,wT as Ne,xO as Ce,cO as V,q0 as $e,g3 as H,bH as Z}from"./index-DVfovSRj.js";function j(a){const e=new Y,t=a.terrainDepthTest&&a.output===_.Color,i=a.space===T.World;e.include(K,a),e.include(Q,a);const{vertex:s,fragment:u}=e;return u.include(X),ee(s,a),e.attributes.add(r.POSITION,"vec3"),e.attributes.add(r.PREVPOSITION,"vec3"),e.attributes.add(r.UV0,"vec2"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),e.varyings.add("vUV","vec2"),e.varyings.add("vSize","float"),t&&e.varyings.add("depth","float"),a.hasTip&&e.varyings.add("vLineWidth","float"),s.uniforms.add(new te("nearFar",(d,p)=>p.camera.nearFar),new D("viewport",(d,p)=>p.camera.fullViewport)),s.code.add(l`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),s.code.add(l`void clip(vec4 pos, inout vec4 prev) {
float vnp = nearFar[0] * 0.99;
if (prev.z > -nearFar[0]) {
float interpolation = (-vnp - pos.z) / (prev.z - pos.z);
prev = mix(pos, prev, interpolation);
}
}`),i?(e.attributes.add(r.NORMAL,"vec3"),re(s),s.constants.add("tiltThreshold","float",.7),s.code.add(l`vec3 perpendicular(vec3 v) {
vec3 n = (viewNormal * vec4(normal.xyz, 1.0)).xyz;
vec3 n2 = cross(v, n);
vec3 forward = vec3(0.0, 0.0, 1.0);
float tiltDot = dot(forward, n);
return abs(tiltDot) < tiltThreshold ? n : n2;
}`)):s.code.add(l`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}`),s.code.add(l`
      #define vecN ${i?"vec3":"vec2"}

      vecN normalizedSegment(vecN pos, vecN prev) {
        vecN segment = pos - prev;
        float segmentLen = length(segment);

        // normalize or zero if too short
        return (segmentLen > 0.001) ? segment / segmentLen : ${i?"vec3(0.0, 0.0, 0.0)":"vec2(0.0, 0.0)"};
      }

      vecN displace(vecN pos, vecN prev, float displacementLen) {
        vecN segment = normalizedSegment(pos, prev);

        vecN displacementDirU = perpendicular(segment);
        vecN displacementDirV = segment;

        ${a.anchor===G.Tip?"pos -= 0.5 * displacementLen * displacementDirV;":""}

        return pos + displacementLen * (uv0.x * displacementDirU + uv0.y * displacementDirV);
      }
    `),a.space===T.Screen&&(s.uniforms.add(new ae("inverseProjectionMatrix",(d,p)=>p.camera.inverseProjectionMatrix)),s.code.add(l`vec3 inverseProject(vec4 posScreen) {
posScreen.xy = (posScreen.xy / viewport.zw) * posScreen.w;
return (inverseProjectionMatrix * posScreen).xyz;
}`),s.code.add(l`bool rayIntersectPlane(vec3 rayDir, vec3 planeOrigin, vec3 planeNormal, out vec3 intersection) {
float cos = dot(rayDir, planeNormal);
float t = dot(planeOrigin, planeNormal) / cos;
intersection = t * rayDir;
return abs(cos) > 0.001 && t > 0.0;
}`),s.uniforms.add(new ie("perScreenPixelRatio",(d,p)=>p.camera.perScreenPixelRatio)),s.code.add(l`
      vec4 toFront(vec4 displacedPosScreen, vec3 posLeft, vec3 posRight, vec3 prev, float lineWidth) {
        // Project displaced position back to camera space
        vec3 displacedPos = inverseProject(displacedPosScreen);

        // Calculate the plane that we want the marker to lie in. Note that this will always be an approximation since ribbon lines are generally
        // not planar and we do not know the actual position of the displaced prev vertices (they are offset in screen space, too).
        vec3 planeNormal = normalize(cross(posLeft - posRight, posLeft - prev));
        vec3 planeOrigin = posLeft;

        ${a.hasCap?`
                if(prev.z > posLeft.z) {
                  vec2 diff = posLeft.xy - posRight.xy;
                  planeOrigin.xy += perpendicular(diff) / 2.0;
                }
              `:""};

        // Move the plane towards the camera by a margin dependent on the line width (approximated in world space). This tolerance corrects for the
        // non-planarity in most cases, but sharp joins can place the prev vertices at arbitrary positions so markers can still clip.
        float offset = lineWidth * perScreenPixelRatio;
        planeOrigin *= (1.0 - offset);

        // Intersect camera ray with the plane and make sure it is within clip space
        vec3 rayDir = normalize(displacedPos);
        vec3 intersection;
        if (rayIntersectPlane(rayDir, planeOrigin, planeNormal, intersection) && intersection.z < -nearFar[0] && intersection.z > -nearFar[1]) {
          return vec4(intersection.xyz, 1.0);
        }

        // Fallback: use depth of pos or prev, whichever is closer to the camera
        float minDepth = planeOrigin.z > prev.z ? length(planeOrigin) : length(prev);
        displacedPos *= minDepth / length(displacedPos);
        return vec4(displacedPos.xyz, 1.0);
      }
  `)),se(s),s.main.add(l`
    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      float lineWidth = getLineWidth();
      float screenMarkerSize = getScreenMarkerSize();

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      clip(pos, prev);

      ${i?l`${a.hideOnShortSegments?l`
                  if (areWorldMarkersHidden(pos, prev)) {
                    // Project out of clip space
                    gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
                    return;
                  }`:""}
            pos.xyz = displace(pos.xyz, prev.xyz, getWorldMarkerSize(pos));
            vec4 displacedPosScreen = projectAndScale(pos);`:l`
            vec4 posScreen = projectAndScale(pos);
            vec4 prevScreen = projectAndScale(prev);
            vec4 displacedPosScreen = posScreen;

            displacedPosScreen.xy = displace(posScreen.xy, prevScreen.xy, screenMarkerSize);
            ${a.space===T.Screen?l`
                vec2 displacementDirU = perpendicular(normalizedSegment(posScreen.xy, prevScreen.xy));

                // We need three points of the ribbon line in camera space to calculate the plane it lies in
                // Note that we approximate the third point, since we have no information about the join around prev
                vec3 lineRight = inverseProject(posScreen + lineWidth * vec4(displacementDirU.xy, 0.0, 0.0));
                vec3 lineLeft = pos.xyz + (pos.xyz - lineRight);

                pos = toFront(displacedPosScreen, lineLeft, lineRight, prev.xyz, lineWidth);
                displacedPosScreen = projectAndScale(pos);`:""}`}

      ${t?"depth = pos.z;":""}

      // Convert back into NDC
      displacedPosScreen.xy = (displacedPosScreen.xy / viewport.zw) * displacedPosScreen.w;

      // Convert texture coordinate into [0,1]
      vUV = (uv0 + 1.0) / 2.0;
      ${i?"":"vUV *= displacedPosScreen.w;"}
      ${a.hasTip?"vLineWidth = lineWidth;":""}

      vSize = screenMarkerSize;
      vColor = getColor();

      // Use camera space for slicing
      vpos = pos.xyz;

      gl_Position = displacedPosScreen;
    }`),t&&e.include(ne,a),e.include(oe,a),e.include(ce,a),u.uniforms.add(new D("intrinsicColor",d=>d.color),new le("tex",d=>d.markerTexture)),u.include(pe),u.constants.add("texelSize","float",1/k),u.code.add(l`float markerAlpha(vec2 samplePos) {
samplePos += vec2(0.5, -0.5) * texelSize;
float sdf = rgba2float(texture(tex, samplePos)) - 0.5;
float distance = sdf * vSize;
distance -= 0.5;
return clamp(0.5 - distance, 0.0, 1.0);
}`),a.hasTip&&u.constants.add("relativeMarkerSize","float",de/k).constants.add("relativeTipLineWidth","float",he).code.add(l`
    float tipAlpha(vec2 samplePos) {
      // Convert coordinates s.t. they are in pixels and relative to the tip of an arrow marker
      samplePos -= vec2(0.5, 0.5 + 0.5 * relativeMarkerSize);
      samplePos *= vSize;

      float halfMarkerSize = 0.5 * relativeMarkerSize * vSize;
      float halfTipLineWidth = 0.5 * max(1.0, relativeTipLineWidth * vLineWidth);

      ${i?"halfTipLineWidth *= fwidth(samplePos.y);":""}

      float distance = max(abs(samplePos.x) - halfMarkerSize, abs(samplePos.y) - halfTipLineWidth);
      return clamp(0.5 - distance, 0.0, 1.0);
    }
  `),e.include(ve,a),u.main.add(l`
    discardBySlice(vpos);
    ${t?"terrainDepthTest(depth);":""}

    vec4 finalColor = intrinsicColor * vColor;
    ${i?"vec2 samplePos = vUV;":"vec2 samplePos = vUV * gl_FragCoord.w;"}
    ${a.hasTip?"finalColor.a *= max(markerAlpha(samplePos), tipAlpha(samplePos));":"finalColor.a *= markerAlpha(samplePos);"}
    outputColorHighlightOID(finalColor, vpos);`),e}const be=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));class De extends ue{constructor(e,t,i){super(e,t,new me(be,()=>fe(()=>Promise.resolve().then(()=>Be),void 0)),i,J)}_makePipelineState(e,t){const{output:i,oitPass:s,space:u,hasOccludees:d}=e;return A({blending:i===_.Color?Te(s):null,depthTest:u===T.Draped?null:{func:Se(s)},depthWrite:ge(e),drawBuffers:i===_.Depth?{buffers:[Pe.NONE]}:_e(s,i),colorWrite:y,stencilWrite:d?M:null,stencilTest:d?t?U:we:null,polygonOffset:{factor:0,units:-10}})}initializePipeline(e){return e.occluder?(this._occluderPipelineTransparent=A({blending:W,depthTest:F,depthWrite:null,colorWrite:y,stencilWrite:null,stencilTest:xe}),this._occluderPipelineOpaque=A({blending:W,depthTest:F,depthWrite:null,colorWrite:y,stencilWrite:Oe,stencilTest:Ae}),this._occluderPipelineMaskWrite=A({blending:null,depthTest:Ee,depthWrite:null,colorWrite:null,stencilWrite:M,stencilTest:U})):this._occluderPipelineTransparent=this._occluderPipelineOpaque=this._occluderPipelineMaskWrite=null,this._occludeePipelineState=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t){return e?this._occludeePipelineState:t===f.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent??super.getPipeline():t===f.OCCLUDER_MATERIAL?this._occluderPipelineOpaque??super.getPipeline():this._occluderPipelineMaskWrite??super.getPipeline()}}const J=new Map([[r.POSITION,0],[r.PREVPOSITION,1],[r.UV0,2],[r.NORMAL,3],[r.COLOR,4],[r.COLORFEATUREATTRIBUTE,4],[r.SIZE,5],[r.SIZEFEATUREATTRIBUTE,5],[r.OPACITYFEATUREATTRIBUTE,6]]);class He extends ye{constructor(e){super(e,Me),this._configuration=new Re,this.vertexAttributeLocations=J,this.produces=new Map([[f.OPAQUE_MATERIAL,t=>t===_.Highlight||R(t)&&this.parameters.renderOccluded===E.OccludeAndTransparentStencil],[f.OPAQUE_MATERIAL_WITHOUT_NORMALS,t=>Le(t)],[f.OCCLUDER_MATERIAL,t=>B(t)&&this.parameters.renderOccluded===E.OccludeAndTransparentStencil],[f.TRANSPARENT_OCCLUDER_MATERIAL,t=>B(t)&&this.parameters.renderOccluded===E.OccludeAndTransparentStencil],[f.TRANSPARENT_MATERIAL,t=>R(t)&&this.parameters.writeDepth],[f.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,t=>R(t)&&!this.parameters.writeDepth],[f.DRAPED_MATERIAL,t=>t===_.Color||t===_.Highlight]]),this._layout=this.createLayout()}getConfiguration(e,t){return this._configuration.output=e,this._configuration.space=t.slot===f.DRAPED_MATERIAL?T.Draped:this.parameters.worldSpace?T.World:T.Screen,this._configuration.hideOnShortSegments=this.parameters.hideOnShortSegments,this._configuration.hasCap=this.parameters.cap!==q.BUTT,this._configuration.anchor=this.parameters.anchor,this._configuration.hasTip=this.parameters.hasTip,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=t.hasOccludees,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.occluder=this.parameters.renderOccluded===E.OccludeAndTransparentStencil,this._configuration.oitPass=t.oitPass,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration}get visible(){return this.parameters.color[3]>=ze}intersect(){}createLayout(){const e=Ie().vec3f(r.POSITION).vec3f(r.PREVPOSITION).vec2f(r.UV0);return this.parameters.worldSpace&&e.vec3f(r.NORMAL),this.parameters.vvSize?e.f32(r.SIZEFEATUREATTRIBUTE):e.f32(r.SIZE),this.parameters.vvColor?e.f32(r.COLORFEATUREATTRIBUTE):e.vec4f(r.COLOR),this.parameters.vvOpacity&&e.f32(r.OPACITYFEATUREATTRIBUTE),e}createBufferWriter(){return new Ue(this._layout,this.parameters)}createGLMaterial(e){return new ke(e)}}class ke extends Ne{constructor(){super(...arguments),this._markerPrimitive=null}dispose(){super.dispose(),this._markerTextures.release(this._markerPrimitive),this._markerPrimitive=null}beginSlot(e){const t=this._material.parameters.markerPrimitive;return t!==this._markerPrimitive&&(this._material.setParameters({markerTexture:this._markerTextures.swap(t,this._markerPrimitive)}),this._markerPrimitive=t),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(De,e)}}class Me extends Ce{constructor(){super(...arguments),this.width=0,this.color=[1,1,1,1],this.markerPrimitive="arrow",this.placement="end",this.cap=q.BUTT,this.anchor=G.Center,this.hasTip=!1,this.worldSpace=!1,this.hideOnShortSegments=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.markerTexture=null}}class Ue{constructor(e,t){this.vertexBufferLayout=e,this._parameters=t}elementCount(){return this._parameters.placement==="begin-end"?12:6}write(e,t,i,s,u,d){const p=i.get(r.POSITION).data,L=p.length/3;let w=[1,0,0];const z=i.get(r.NORMAL);this._parameters.worldSpace&&z!=null&&(w=z.data);let I=1,N=0;this._parameters.vvSize?N=i.get(r.SIZEFEATUREATTRIBUTE).data[0]:i.has(r.SIZE)&&(I=i.get(r.SIZE).data[0]);let S=[1,1,1,1],C=0;this._parameters.vvColor?C=i.get(r.COLORFEATUREATTRIBUTE).data[0]:i.has(r.COLOR)&&(S=i.get(r.COLOR).data);let $=0;this._parameters.vvOpacity&&($=i.get(r.OPACITYFEATUREATTRIBUTE).data[0]);const n=new Float32Array(u.buffer);let o=d*(this.vertexBufferLayout.stride/4);const g=(c,P,h,v)=>{if(n[o++]=c[0],n[o++]=c[1],n[o++]=c[2],n[o++]=P[0],n[o++]=P[1],n[o++]=P[2],n[o++]=h[0],n[o++]=h[1],this._parameters.worldSpace&&(n[o++]=w[0],n[o++]=w[1],n[o++]=w[2]),this._parameters.vvSize?n[o++]=N:n[o++]=I,this._parameters.vvColor)n[o++]=C;else{const m=Math.min(4*v,S.length-4);n[o++]=S[m],n[o++]=S[m+1],n[o++]=S[m+2],n[o++]=S[m+3]}this._parameters.vvOpacity&&(n[o++]=$)};let x;(function(c){c[c.ASCENDING=1]="ASCENDING",c[c.DESCENDING=-1]="DESCENDING"})(x||(x={}));const b=(c,P)=>{const h=V(We,p[3*c],p[3*c+1],p[3*c+2]),v=Fe;let m=c+P;do V(v,p[3*m],p[3*m+1],p[3*m+2]),m+=P;while($e(h,v)&&m>=0&&m<L);e&&(H(h,h,e),H(v,v,e)),g(h,v,[-1,-1],c),g(h,v,[1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,-1],c),g(h,v,[1,1],c),g(h,v,[-1,1],c)},O=this._parameters.placement;O!=="begin"&&O!=="begin-end"||b(0,x.ASCENDING),O!=="end"&&O!=="begin-end"||b(L-1,x.DESCENDING)}}const We=Z(),Fe=Z(),Be=Object.freeze(Object.defineProperty({__proto__:null,build:j},Symbol.toStringTag,{value:"Module"}));export{He as g};
