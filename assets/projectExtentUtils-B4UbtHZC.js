import{b8 as a}from"./index-DVfovSRj.js";import{projectGeometry as o}from"./geometryServiceUtils-x0pcKXl-.js";async function s(l){const t=l.view.spatialReference,e=l.layer.fullExtent,n=e!=null&&e.spatialReference;if(e==null||!n)return null;if(n.equals(t))return e.clone();const r=a(e,t);if(r!=null)return r;if(l.view.state.isLocal)try{const u=await o(e,t,l.layer.portalItem);return l.destroyed||u==null?null:u}catch{return null}return null}export{s as r};
