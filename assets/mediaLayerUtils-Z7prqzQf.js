import{P as p,$ as y}from"./utils-Bqe7w4XP.js";import{gP as s,ep as f,ej as d,ek as v,el as x}from"./index-o1YlnJfN.js";const n="Media Layer",P="media-layer-save",E="media-layer-save-as",o=["media-layer:unsupported-source"];function i(e){return{isValid:e.type==="media",errorMessage:"Layer.type should be 'media'"}}function u(e){return f(e,"portal-item",!0)}function l(e){return Promise.resolve(e.layerJSON)}async function c(e,t){t.extent=e.fullExtent?await d(e.fullExtent):null}async function I(e,t){t.title||(t.title=e.title),await c(e,t),v(t,x.METADATA)}async function L(e,t){return p({layer:e,itemType:n,validateLayer:i,createJSONContext:r=>u(r),createItemData:l,errorNamePrefix:P,supplementalUnsupportedErrors:o,setItemProperties:c,saveResources:(r,a)=>s(e.resourceReferences,a)},t)}async function R(e,t,r){return y({layer:e,itemType:n,validateLayer:i,createJSONContext:a=>u(a),createItemData:l,errorNamePrefix:E,supplementalUnsupportedErrors:o,newItem:t,setItemProperties:I,saveResources:(a,m)=>s(e.resourceReferences,m)},r)}export{L as save,R as saveAs};