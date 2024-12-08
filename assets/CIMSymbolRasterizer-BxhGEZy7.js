import{jV as j,jW as z,jX as F,jY as E}from"./index-DVfovSRj.js";import{e as S,s as k,$ as G}from"./CIMSymbolHelper-Ge4sS_r3.js";import"./BidiEngine-DNnuvc1i.js";import"./definitions-JMX6GcYm.js";import"./mat2d-CT4iAmsz.js";import"./mat2df32-orApM5a3.js";class V{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(t){return this._resourceMap.get(t)??null}async fetchResource(t,u){const n=this._resourceMap.get(t);if(n)return{width:n.width,height:n.height};let o=this._inFlightResourceMap.get(t);return o?o.then(s=>({width:s.width,height:s.height})):(o=j(t,u),this._inFlightResourceMap.set(t,o),o.then(s=>(this._inFlightResourceMap.delete(t),this._resourceMap.set(t,s),{width:s.width,height:s.height}),()=>({width:0,height:0})))}deleteResource(t){this._inFlightResourceMap.delete(t),this._resourceMap.delete(t)}loadFont(t){return z(t)}}const $=96/72;class X{constructor(t){this._spatialReference=t,this._imageDataCanvas=null,this._cimResourceManager=new V}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,u,n,o,s,r,c,l,_){if(!t)return null;const{data:d}=t;if(!d||d.type!=="CIMSymbolReference"||!d.symbol)return null;const{symbol:b}=d;r||(r=F(b));const a=await E.resolveSymbolOverrides(d,u,this._spatialReference,s,r,c,l),m=this._cimResourceManager,M=[];S.fetchResources(a,m,M),S.fetchFonts(a,m,M),M.length>0&&await Promise.all(M);const{width:i,height:h}=n,f=P(r,i,h,o),e=S.getEnvelope(a,f,m);if(!e)return null;e.x===1/0&&(e.x=i+2),e.y===1/0&&(e.y=-h/2),e.width===-1/0&&(e.width=i),e.height===-1/0&&(e.height=h);let g=1,v=0,C=0;switch(b.type){case"CIMPointSymbol":case"CIMTextSymbol":{let y=1;e.width>i&&(y=i/e.width);let p=1;e.height>h&&(p=h/e.height),o==="preview"&&(e.width<i&&(y=i/e.width),e.height<h&&(p=h/e.height)),g=Math.min(y,p),v=e.x+e.width/2,C=e.y+e.height/2}break;case"CIMLineSymbol":{(_||e.height>h)&&(g=h/e.height),C=e.y+e.height/2;const y=e.x*g+i/2,p=(e.x+e.width)*g+i/2,{paths:R}=f;R[0][0][0]-=y/g,R[0][2][0]-=(p-i)/g}break;case"CIMPolygonSymbol":{v=e.x+e.width/2,C=e.y+e.height/2;const y=e.x*g+i/2,p=(e.x+e.width)*g+i/2,R=e.y*g+h/2,I=(e.y+e.height)*g+h/2,{rings:w}=f;y<0&&(w[0][0][0]-=y,w[0][3][0]-=y,w[0][4][0]-=y),R<0&&(w[0][0][1]+=R,w[0][1][1]+=R,w[0][4][1]+=R),p>i&&(w[0][1][0]-=p-i,w[0][2][0]-=p-i),I>h&&(w[0][2][1]+=I-h,w[0][3][1]+=I-h)}}const D={type:"cim",data:{type:"CIMSymbolReference",symbol:a}};return this.rasterize(D,i,h,v,C,g,r,1,f)}rasterize(t,u,n,o,s,r,c,l=0,_=null){const{data:d}=t;if(!d||d.type!=="CIMSymbolReference"||!d.symbol)return null;const{symbol:b}=d,a=this._canvas,m=(window.devicePixelRatio||1)*$;a.width=u*m,a.height=n*m,c||(c=F(b)),_||(_=P(c,u,n,"legend")),a.width+=2*l,a.height+=2*l;const M=a.getContext("2d",{willReadFrequently:!0}),i=G.createIdentity();return i.translate(-o,-s),i.scale(r*m,-r*m),i.translate(u*m/2+l,n*m/2+l),M.clearRect(0,0,a.width,a.height),new k(M,this._cimResourceManager,i,!0).drawSymbol(b,_),M.getImageData(0,0,a.width,a.height)}}function P(x,t,u,n){const s=-t/2+1,r=t/2-1,c=u/2-1,l=-u/2+1;switch(x){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[s,0],[0,0],[r,0]]]};default:return n==="legend"?{rings:[[[s,c],[r,0],[r,l],[s,l],[s,c]]]}:{rings:[[[s,c],[r,c],[r,l],[s,l],[s,c]]]}}}export{X as CIMSymbolRasterizer};
