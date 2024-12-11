import{o as S,i as F,d as p,K as a,a as u,r as l}from"./languageUtils-CrGoFNJp.js";import{s as w}from"./TimeOnly-DtwEOrV3.js";import{u as c,f as h}from"./SpatialFilter-DannFsQR.js";import{gL as o}from"./index-pOkNMSkH.js";import{relate as I,crosses as A,touches as P,within as g,overlaps as C,contains as O,intersects as R}from"./geometryEngineAsync-DhwmBFIE.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-Ctlar3ob.js";import"./number-DY5_ZXb0.js";import"./arcadeUtils-B_3v5Fev.js";import"./hash-CcEbRgUF.js";import"./WhereClause-CWSSxvZz.js";function f(r){return r instanceof o}function i(r,t,s,d){return d(r,t,async(y,e,n)=>{if(n.length<2)throw new u(r,l.WrongNumberOfParameters,t);if((n=S(n))[0]===null&&n[1]===null)return!1;if(a(n[0])){if(n[1]instanceof o)return new h({parentfeatureset:n[0],relation:s,relationGeom:n[1]});if(n[1]===null)return new c({parentfeatureset:n[0]});throw new u(r,l.InvalidParameter,t)}if(f(n[0])){if(f(n[1])){switch(s){case"esriSpatialRelEnvelopeIntersects":return R(w(n[0]),w(n[1]));case"esriSpatialRelIntersects":return R(n[0],n[1]);case"esriSpatialRelContains":return O(n[0],n[1]);case"esriSpatialRelOverlaps":return C(n[0],n[1]);case"esriSpatialRelWithin":return g(n[0],n[1]);case"esriSpatialRelTouches":return P(n[0],n[1]);case"esriSpatialRelCrosses":return A(n[0],n[1])}throw new u(r,l.InvalidParameter,t)}if(a(n[1]))return new h({parentfeatureset:n[1],relation:s,relationGeom:n[0]});if(n[1]===null)return!1;throw new u(r,l.InvalidParameter,t)}if(n[0]===null){if(a(n[1]))return new c({parentfeatureset:n[1]});if(n[1]instanceof o||n[1]===null)return!1}throw new u(r,l.InvalidParameter,t)})}function k(r){r.mode==="async"&&(r.functions.intersects=function(t,s){return i(t,s,"esriSpatialRelIntersects",r.standardFunctionAsync)},r.functions.envelopeintersects=function(t,s){return i(t,s,"esriSpatialRelEnvelopeIntersects",r.standardFunctionAsync)},r.signatures.push({name:"envelopeintersects",min:2,max:2}),r.functions.contains=function(t,s){return i(t,s,"esriSpatialRelContains",r.standardFunctionAsync)},r.functions.overlaps=function(t,s){return i(t,s,"esriSpatialRelOverlaps",r.standardFunctionAsync)},r.functions.within=function(t,s){return i(t,s,"esriSpatialRelWithin",r.standardFunctionAsync)},r.functions.touches=function(t,s){return i(t,s,"esriSpatialRelTouches",r.standardFunctionAsync)},r.functions.crosses=function(t,s){return i(t,s,"esriSpatialRelCrosses",r.standardFunctionAsync)},r.functions.relate=function(t,s){return r.standardFunctionAsync(t,s,async(d,y,e)=>{if(e=S(e),F(e,3,3,t,s),f(e[0])&&f(e[1]))return I(e[0],e[1],p(e[2]));if(e[0]instanceof o&&e[1]===null||e[1]instanceof o&&e[0]===null)return!1;if(a(e[0])&&e[1]===null)return new c({parentfeatureset:e[0]});if(a(e[1])&&e[0]===null)return new c({parentfeatureset:e[1]});if(a(e[0])&&e[1]instanceof o)return e[0].relate(e[1],p(e[2]));if(a(e[1])&&e[0]instanceof o)return e[1].relate(e[0],p(e[2]));if(e[0]===null&&e[1]===null)return!1;throw new u(t,l.InvalidParameter,s)})})}export{k as registerFunctions};
