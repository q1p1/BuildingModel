import{eQ as s,cf as n,fe as i}from"./index-o1YlnJfN.js";import{B as a}from"./vertexSpaceConversion-CYcQyigP.js";import"./vec4-zybdZipl.js";function c(t,r){const e=a(t,s.absolute);if(!e)return null;let o=e.position;return n(t.spatialReference,r)||(o=new Float64Array(e.position.length),i(e.position,t.spatialReference,0,o,r,0))?o:null}export{c as projectMeshVertexPositions};
