import{bG as d,H as m}from"./index-Dr8Kof1t.js";class h{constructor(r){this.data=r,this.type="encoded-mesh-texture",this.encoding=d.KTX2_ENCODING}}function v(e){return(e==null?void 0:e.type)==="encoded-mesh-texture"}async function w(e){const r=new Blob([e]),o=await r.text();return JSON.parse(o)}async function E(e,r){if(r===d.KTX2_ENCODING)return new h(e);const o=new Blob([e],{type:r}),n=URL.createObjectURL(o),t=new Image;if(m("esri-iPhone"))return new Promise((s,u)=>{const c=()=>{i(),s(t)},a=L=>{i(),u(L)},i=()=>{URL.revokeObjectURL(n),t.removeEventListener("load",c),t.removeEventListener("error",a)};t.addEventListener("load",c),t.addEventListener("error",a),t.src=n});try{t.src=n,await t.decode()}catch{console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(n),t}export{w as n,E as o,v as r,h as t};