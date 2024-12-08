import{u as a}from"./workerHelper-Cc27Pr5K.js";import{EdgeInputBufferLayout as l}from"./bufferLayouts-DAxaP39Q.js";import{f as d,u as c,p as u,d as f,m as p}from"./edgeProcessing-GK6vULJW.js";import"./index-DVfovSRj.js";import"./deduplicate-D2lCzC6A.js";class b{async extract(e){const t=o(e),n=d(t),i=[t.data.buffer];return{result:g(n,i),transferList:i}}async extractComponentsEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=u(n,y),r=[];return{result:a(i.regular.instancesData,r),transferList:r}}async extractEdgeLocations(e){const t=o(e),n=c(t.data,t.skipDeduplicate,t.indices,t.indicesLength),i=u(n,L),r=[];return{result:a(i.regular.instancesData,r),transferList:r}}}function o(s){return{data:l.createView(s.dataBuffer),indices:s.indicesType==="Uint32Array"?new Uint32Array(s.indices):s.indicesType==="Uint16Array"?new Uint16Array(s.indices):s.indices,indicesLength:s.indicesLength,writerSettings:s.writerSettings,skipDeduplicate:s.skipDeduplicate}}function g(s,e){return e.push(s.regular.lodInfo.lengths.buffer),e.push(s.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(s.regular.instancesData,e),lodInfo:{lengths:s.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(s.silhouette.instancesData,e),lodInfo:{lengths:s.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:s.averageEdgeLength}}class h{allocate(e){return f.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}}class m{allocate(e){return p.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}}const L=new h,y=new m;export{b as default};
