import{aA as c,aB as g,e as l,aC as s,X as u}from"./index-DVfovSRj.js";async function f(e=null,o){var n,a;if(s.geometryServiceUrl)return s.geometryServiceUrl;if(!e)throw new l("internal:geometry-service-url-not-configured");let r;r="portal"in e?e.portal||u.getDefault():e,await r.load({signal:o});const t=(a=(n=r.helperServices)==null?void 0:n.geometry)==null?void 0:a.url;if(!t)throw new l("internal:geometry-service-url-not-configured");return t}async function y(e,o,r=null,t){const n=await f(r,t),a=new c({geometries:[e],outSpatialReference:o}),i=await g(n,a,{signal:t});if(i&&Array.isArray(i)&&i.length===1)return i[0];throw new l("internal:geometry-service-projection-failed")}export{f as getGeometryServiceURL,y as projectGeometry};
