import{gK as m,ef as p,U as F,bA as f,eY as E,ge as a}from"./index-DVfovSRj.js";import{R as x}from"./normalizeUtils-DF_jogMk.js";import{t as g}from"./query-DoOAVOVa.js";const c="Layer does not support extent calculation.";function j(o,e){var i,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=E(n),r.inSR=a(n.spatialReference)),(i=t.topFilter)!=null&&i.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=a(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:s,end:u}=l;s==null&&u==null||(r.time=s===u?s:`${s??"null"},${u??"null"}`),delete t.timeExtent}return r}async function I(o,e,n,t){const r=await d(o,e,"json",t);return m(e,n,r.data),r}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(c);if(r.hasOwnProperty("count"))throw new Error(c);return t})}function w(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const i=typeof o=="string"?p(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",x(y,null,t).then(l=>{const s=l==null?void 0:l[0];s!=null&&((e=e.clone()).geometry=s);const u=g({...i.query,f:n,...r,...j(e,r)});return F(f(i.path,"queryTopFeatures"),{...t,query:{...u,...t.query}})})}export{w as c,h as d,R as m,I as p};
