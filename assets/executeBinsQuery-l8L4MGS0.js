import{ef as m,U as f,bA as c,ge as s,eY as y,cf as S,aT as l,aS as p}from"./index-DVfovSRj.js";import{R}from"./normalizeUtils-DF_jogMk.js";import{t as g}from"./query-DoOAVOVa.js";import J from"./BinsQuery-BRBSSSwV.js";import"./normalizeUtilsCommon-BiyL944r.js";import"./pbfQueryUtils-BMTOH95d.js";import"./pbf-B-7SxU3I.js";import"./queryUtils-CPAwv2w3.js";import"./json-Wa8cmqdu.js";function N(r){const e=r.geometry,n=r.toJSON(),t=n;let a,o,i;return e!=null&&(o=e.spatialReference,i=s(o),t.geometryType=y(e),t.geometry=JSON.stringify(e),t.inSR=i),n.outSR?(t.outSR=s(n.outSR),a=r.outSpatialReference):e&&(t.outSR=t.inSR,a=o),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),r.defaultSpatialReference&&S(o,a)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function O(r,e,n){return d(r,e,n)}async function d(r,e,n={}){const t=typeof r=="string"?m(r):r,a=e.geometry?[e.geometry]:[],o=await R(a,null,{signal:n.signal}),i=o==null?void 0:o[0];i!=null&&((e=e.clone()).geometry=i);const u=g({...t.query,f:"json",...N(e)});return f(c(t.path,"queryBins"),{...n,query:{...u,...n.query}})}async function h(r,e,n){const{data:t}=await O(l(r),J.from(e),n);return p.fromJSON(t)}export{h as executeBinsQuery};
