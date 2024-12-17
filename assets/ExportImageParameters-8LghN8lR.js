import{r as i,m as a,a as m,b as c,ci as u,cj as p}from"./index-o1YlnJfN.js";import{n as h}from"./floorFilterUtils-DZ5C6FQv.js";import{n as b}from"./sublayerUtils-Dsmxeuu4.js";const d={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let r=class extends c{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map(s=>{const y=h(this.floors,s);return s.toExportImageJSON(y)});return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&b(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("sublayer-update",s=>this.notifyChange(d[s.propertyName]))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map(s=>s.id).join(","):"show:-1":null}get layerDefs(){var y;const e=!!((y=this.floors)!=null&&y.length),s=this.visibleSublayers.filter(l=>l.definitionExpression!=null||e&&l.floorInfo!=null);return s.length?JSON.stringify(s.reduce((l,n)=>{const t=h(this.floors,n),o=u(t,n.definitionExpression);return o!=null&&(l[n.id]=o),l},{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,y=this.scale,l=t=>{t.visible&&(y===0||p(y,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(l):e.unshift(t))};s&&s.forEach(l);const n=this._get("visibleSublayers");return!n||n.length!==e.length||n.some((t,o)=>e[o]!==t)?e:n}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};i([a({readOnly:!0})],r.prototype,"dynamicLayers",null),i([a()],r.prototype,"floors",void 0),i([a({readOnly:!0})],r.prototype,"hasDynamicLayers",null),i([a()],r.prototype,"layer",null),i([a({readOnly:!0})],r.prototype,"layers",null),i([a({readOnly:!0})],r.prototype,"layerDefs",null),i([a({type:Number})],r.prototype,"scale",void 0),i([a({readOnly:!0})],r.prototype,"version",null),i([a({readOnly:!0})],r.prototype,"visibleSublayers",null),r=i([m("esri.layers.support.ExportImageParameters")],r);export{r as y};