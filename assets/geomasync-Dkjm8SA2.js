import{y as cn,c as fn,d as dn,N,x as un,Z as wn,t as W,g as hn,r as M}from"./arcadeUtils-CYuokdEn.js";import{o as d,i as h,k as H,g as K,t as X,d as E,a as i,r as s,E as v,X as g,A as U,K as Z,Y as w,a0 as Y,a1 as T,a2 as q,h as R,S as mn,z as B,B as S}from"./languageUtils-B3F47s5x.js";import{c as P,r as C,b as y}from"./TimeOnly-CaB2FMOl.js";import{l as G}from"./portalUtils-DIA3eSX7.js";import{Y as yn,U as Q,gL as u,ap as J,at as I,as as O,v as D,au as _,gw as x,X as $,cV as pn}from"./index-DVfovSRj.js";import{disjoint as vn,intersects as gn,touches as Pn,crosses as In,within as An,contains as Fn,overlaps as Rn,equals as bn,relate as Nn,intersect as Sn,union as On,difference as Dn,symmetricDifference as jn,clip as Ln,cut as Tn,planarArea as nn,geodesicArea as en,planarLength as k,geodesicLength as V,distance as Cn,densify as tn,geodesicDensify as rn,generalize as Jn,buffer as Mn,geodesicBuffer as Un,offset as Zn,rotate as an,simplify as sn,isSimple as kn,convexHull as zn,nearestCoordinate as En,nearestVertex as qn}from"./geometryEngineAsync-DTIQcfQZ.js";import"./ImmutableArray-BPVd6ESQ.js";import"./number-O-4AVrw4.js";import"./shared-O4z3kOXb.js";import"./hash-CcEbRgUF.js";async function ln(a,e,t){var r,l;if(!((r=yn)==null?void 0:r.findCredential(a.restUrl)))return null;if(a.loadStatus==="loaded"&&e===""&&((l=a.user)!=null&&l.sourceJSON)&&t===!1)return a.user.sourceJSON;const f={responseType:"json",query:{f:"json"}};if(t&&(f.query.returnUserLicenseTypeExtensions=!0),e===""){const c=await Q(a.restUrl+"/community/self",f);if(c.data){const m=c.data;if(m!=null&&m.username)return m}return null}const n=await Q(a.restUrl+"/community/users/"+e,f);if(n.data){const c=n.data;return c.error?null:c}return null}function A(a,e,t){if(h(a,2,2,e,t),!(a[0]instanceof u&&a[1]instanceof u)){if(!(a[0]instanceof u&&a[1]===null)){if(!(a[1]instanceof u&&a[0]===null)){if(a[0]!==null||a[1]!==null)throw new i(e,s.InvalidParameter,t)}}}}async function on(a,e){if(a.type!=="polygon"&&a.type!=="polyline"&&a.type!=="extent")return 0;let t=1;(a.spatialReference.vcsWkid||a.spatialReference.latestVcsWkid)&&(t=hn(a.spatialReference)/pn(a.spatialReference));let o=0;if(a.type==="polyline")for(const n of a.paths)for(let r=1;r<n.length;r++)o+=M(n[r],n[r-1],t);else if(a.type==="polygon")for(const n of a.rings){for(let r=1;r<n.length;r++)o+=M(n[r],n[r-1],t);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(o+=M(n[0],n[n.length-1],t))}else a.type==="extent"&&(o+=2*M([a.xmin,a.ymin,0],[a.xmax,a.ymin,0],t),o+=2*M([a.xmin,a.ymin,0],[a.xmin,a.ymax,0],t),o*=2,o+=4*Math.abs(w(a.zmax,0)*t-w(a.zmin,0)*t));const f=new I({hasZ:!1,hasM:!1,spatialReference:a.spatialReference,paths:[[[0,0],[0,o]]]});return k(f,e)}function xn(a){a.mode==="async"&&(a.functions.disjoint=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]===null||n[1]===null||vn(n[0],n[1])))},a.functions.intersects=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&gn(n[0],n[1])))},a.functions.touches=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&Pn(n[0],n[1])))},a.functions.crosses=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&In(n[0],n[1])))},a.functions.within=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&An(n[0],n[1])))},a.functions.contains=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&Fn(n[0],n[1])))},a.functions.overlaps=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]!==null&&n[1]!==null&&Rn(n[0],n[1])))},a.functions.equals=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(h(n,2,2,e,t),n[0]===n[1]||(n[0]instanceof u&&n[1]instanceof u?bn(n[0],n[1]):(H(n[0])&&H(n[1])||!!(K(n[0])&&K(n[1])||X(n[0])&&X(n[1])))&&n[0].equals(n[1]))))},a.functions.relate=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,3,3,e,t),n[0]instanceof u&&n[1]instanceof u)return Nn(n[0],n[1],E(n[2]));if(n[0]instanceof u&&n[1]===null||n[1]instanceof u&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new i(e,s.InvalidParameter,t)})},a.functions.intersection=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]===null||n[1]===null?null:Sn(n[0],n[1])))},a.functions.union=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{const r=[];if((n=d(n)).length===0)throw new i(e,s.WrongNumberOfParameters,t);if(n.length===1)if(v(n[0])){const l=d(n[0]);for(let c=0;c<l.length;c++)if(l[c]!==null){if(!(l[c]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(l[c])}}else{if(!g(n[0])){if(n[0]instanceof u)return U(P(n[0]),e.spatialReference);if(n[0]===null)return null;throw new i(e,s.InvalidParameter,t)}{const l=d(n[0].toArray());for(let c=0;c<l.length;c++)if(l[c]!==null){if(!(l[c]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(l[c])}}}else for(let l=0;l<n.length;l++)if(n[l]!==null){if(!(n[l]instanceof u))throw new i(e,s.InvalidParameter,t);r.push(n[l])}return r.length===0?null:On(r)})},a.functions.difference=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]===null?null:n[1]===null?P(n[0]):Dn(n[0],n[1])))},a.functions.symmetricdifference=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>(A(n=d(n),e,t),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):jn(n[0],n[1])))},a.functions.clip=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[1]instanceof J)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[1]===null?null:Ln(n[0],n[1])})},a.functions.cut=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[1]instanceof I)&&n[1]!==null)throw new i(e,s.InvalidParameter,t);if(n[0]===null)return[];if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[1]===null?[P(n[0])]:Tn(n[0],n[1])})},a.functions.area=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(Z(n[0])){const r=await n[0].sumArea(C(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(v(n[0])||g(n[0])){const r=Y(n[0],e.spatialReference);return r===null?0:nn(r,C(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return nn(n[0],C(w(n[1],-1)))})},a.functions.areageodetic=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(Z(n[0])){const r=await n[0].sumArea(C(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(v(n[0])||g(n[0])){const r=Y(n[0],e.spatialReference);return r===null?0:en(r,C(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return en(n[0],C(w(n[1],-1)))})},a.functions.length=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(Z(n[0])){const r=await n[0].sumLength(y(w(n[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(v(n[0])||g(n[0])){const r=T(n[0],e.spatialReference);return r===null?0:k(r,y(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return k(n[0],y(w(n[1],-1)))})},a.functions.length3d=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(v(n[0])||g(n[0])){const r=T(n[0],e.spatialReference);return r===null?0:r.hasZ===!0?on(r,y(w(n[1],-1))):k(r,y(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return n[0].hasZ===!0?on(n[0],y(w(n[1],-1))):k(n[0],y(w(n[1],-1)))})},a.functions.lengthgeodetic=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(h(n,1,2,e,t),(n=d(n))[0]===null)return 0;if(Z(n[0])){const r=await n[0].sumLength(y(w(n[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new i(e,s.Cancelled,t);return r}if(v(n[0])||g(n[0])){const r=T(n[0],e.spatialReference);return r===null?0:V(r,y(w(n[1],-1)))}if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return V(n[0],y(w(n[1],-1)))})},a.functions.distance=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{n=d(n),h(n,2,3,e,t);let r=n[0];(v(n[0])||g(n[0]))&&(r=q(n[0],e.spatialReference));let l=n[1];if((v(n[1])||g(n[1]))&&(l=q(n[1],e.spatialReference)),!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(l instanceof u))throw new i(e,s.InvalidParameter,t);return Cn(r,l,y(w(n[2],-1)))})},a.functions.distancegeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{n=d(n),h(n,2,3,e,t);const r=n[0],l=n[1];if(!(r instanceof O))throw new i(e,s.InvalidParameter,t);if(!(l instanceof O))throw new i(e,s.InvalidParameter,t);const c=new I({paths:[],spatialReference:r.spatialReference});return c.addPath([r,l]),V(c,y(w(n[2],-1)))})},a.functions.densify=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);if(r<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof D||n[0]instanceof I?tn(n[0],r,y(w(n[2],-1))):n[0]instanceof J?tn(D.fromExtent(n[0]),r,y(w(n[2],-1))):n[0]})},a.functions.densifygeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);if(r<=0)throw new i(e,s.InvalidParameter,t);return n[0]instanceof D||n[0]instanceof I?rn(n[0],r,y(w(n[2],-1))):n[0]instanceof J?rn(D.fromExtent(n[0]),r,y(w(n[2],-1))):n[0]})},a.functions.generalize=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,4,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return Jn(n[0],r,mn(w(n[2],!0)),y(w(n[3],-1)))})},a.functions.buffer=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return r===0?P(n[0]):Mn(n[0],r,y(w(n[2],-1)))})},a.functions.buffergeodetic=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);return r===0?P(n[0]):Un(n[0],r,y(w(n[2],-1)))})},a.functions.offset=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,6,e,t),n[0]===null)return null;if(!(n[0]instanceof D||n[0]instanceof I))throw new i(e,s.InvalidParameter,t);const r=R(n[1]);if(isNaN(r))throw new i(e,s.InvalidParameter,t);const l=R(w(n[4],10));if(isNaN(l))throw new i(e,s.InvalidParameter,t);const c=R(w(n[5],0));if(isNaN(c))throw new i(e,s.InvalidParameter,t);return Zn(n[0],r,y(w(n[2],-1)),E(w(n[3],"round")).toLowerCase(),l,c)})},a.functions.rotate=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,3,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);const r=n[0]instanceof J?D.fromExtent(n[0]):n[0],l=R(n[1]);if(isNaN(l))throw new i(e,s.InvalidParameter,t);const c=w(n[2],null);if(c===null)return an(r,l);if(c instanceof O)return an(r,l,c);throw new i(e,s.InvalidParameter,t)})},a.functions.centroid=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;let r=n[0];if((v(n[0])||g(n[0]))&&(r=q(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);return r instanceof O?U(P(r),e.spatialReference):r instanceof D?r.centroid:r instanceof I?cn(r):r instanceof _?fn(r):r instanceof J?r.center:null})},a.functions.measuretocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((v(n[0])||g(n[0]))&&(r=T(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof I))throw new i(e,s.InvalidParameter,t);if(B(n[1]===!1))throw new i(e,s.InvalidParameter,t);const l=dn(r,n[1]);return l?N.convertObjectToArcadeDictionary(l,S(e),!1,!0):null})},a.functions.pointtocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((v(n[0])||g(n[0]))&&(r=T(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof I))throw new i(e,s.InvalidParameter,t);const l=n[1];if(l===null)return null;if(!(l instanceof O))throw new i(e,s.InvalidParameter,t);if(B(n[1]===!1))throw new i(e,s.InvalidParameter,t);const c=un(r,l);return c?N.convertObjectToArcadeDictionary(c,S(e),!1,!0):null})},a.functions.distancetocoordinate=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),n[0]===null)return null;let r=n[0];if((v(n[0])||g(n[0]))&&(r=T(n[0],e.spatialReference)),r===null)return null;if(!(r instanceof u))throw new i(e,s.InvalidParameter,t);if(!(r instanceof I))throw new i(e,s.InvalidParameter,t);if(B(n[1]===!1))throw new i(e,s.InvalidParameter,t);const l=wn(r,n[1]);return l?N.convertObjectToArcadeDictionary(l,S(e),!1,!0):null})},a.functions.multiparttosinglepart=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);if(n[0]instanceof O)return[U(P(n[0]),e.spatialReference)];if(n[0]instanceof J)return[U(P(n[0]),e.spatialReference)];const r=await sn(n[0]);if(r instanceof D){const l=[],c=[];for(let m=0;m<r.rings.length;m++)if(r.isClockwise(r.rings[m])){const F=x({rings:[r.rings[m]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});l.push(F)}else c.push({ring:r.rings[m],pt:r.getPoint(m,0)});for(let m=0;m<c.length;m++)for(let F=0;F<l.length;F++)if(l[F].contains(c[m].pt)){l[F].addRing(c[m].ring);break}return l}if(r instanceof I){const l=[];for(let c=0;c<r.paths.length;c++){const m=x({paths:[r.paths[c]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});l.push(m)}return l}if(n[0]instanceof _){const l=[],c=U(P(n[0]),e.spatialReference);for(let m=0;m<c.points.length;m++)l.push(c.getPoint(m));return l}return null})},a.functions.issimple=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return!0;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return kn(n[0])})},a.functions.simplify=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return sn(n[0])})},a.functions.convexhull=function(e,t){return a.standardFunctionAsync(e,t,(o,f,n)=>{if(n=d(n),h(n,1,1,e,t),n[0]===null)return null;if(!(n[0]instanceof u))throw new i(e,s.InvalidParameter,t);return zn(n[0])})},a.functions.getuser=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{var m,F;h(n,0,2,e,t);let r=w(n[1],""),l=r===!0;if(r=r===!0||r===!1?"":E(r),n.length===0||n[0]instanceof W){let j;j=(m=e.services)!=null&&m.portal?e.services.portal:$.getDefault(),n.length>0&&(j=G(n[0],j));const L=await ln(j,r,l);if(L){const b=JSON.parse(JSON.stringify(L));for(const p of["lastLogin","created","modified"])b[p]!==void 0&&b[p]!==null&&(b[p]=new Date(b[p]));return N.convertObjectToArcadeDictionary(b,S(e))}return null}let c=null;if(Z(n[0])&&(c=n[0]),c){if(l=!1,r)return null;await c.load();const j=await c.getOwningSystemUrl();if(!j){if(!r){const p=await c.getIdentityUser();return p?N.convertObjectToArcadeDictionary({username:p},S(e)):null}return null}let L;L=(F=e.services)!=null&&F.portal?e.services.portal:$.getDefault(),L=G(new W(j),L);const b=await ln(L,r,l);if(b){const p=JSON.parse(JSON.stringify(b));for(const z of["lastLogin","created","modified"])p[z]!==void 0&&p[z]!==null&&(p[z]=new Date(p[z]));return N.convertObjectToArcadeDictionary(p,S(e))}return null}throw new i(e,s.InvalidParameter,t)})},a.functions.nearestcoordinate=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[0]instanceof u||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof O||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const r=await En(n[0],n[1]);return r===null?null:N.convertObjectToArcadeDictionary({coordinate:r.coordinate,distance:r.distance,sideOfLine:r.distance===0?"straddle":r.isRightSide?"right":"left"},S(e),!1,!0)})},a.functions.nearestvertex=function(e,t){return a.standardFunctionAsync(e,t,async(o,f,n)=>{if(n=d(n),h(n,2,2,e,t),!(n[0]instanceof u||n[0]===null))throw new i(e,s.InvalidParameter,t);if(!(n[1]instanceof O||n[1]===null))throw new i(e,s.InvalidParameter,t);if(n[0]===null||n[1]===null)return null;const r=await qn(n[0],n[1]);return r===null?null:N.convertObjectToArcadeDictionary({coordinate:r.coordinate,distance:r.distance,sideOfLine:r.distance===0?"straddle":r.isRightSide?"right":"left"},S(e),!1,!0)})})}export{xn as registerFunctions};
