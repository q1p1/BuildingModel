import{eQ as s,cf as n,fe as i}from"./index-G3D84UsQ.js";import{B as a}from"./vertexSpaceConversion-DUoTonOO.js";import"./vec4-DdXe5Z-g.js";function c(t,r){const e=a(t,s.absolute);if(!e)return null;let o=e.position;return n(t.spatialReference,r)||(o=new Float64Array(e.position.length),i(e.position,t.spatialReference,0,o,r,0))?o:null}export{c as projectMeshVertexPositions};
