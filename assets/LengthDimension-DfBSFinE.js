import{e7 as n,r as o,m as i,as as s,bW as a,e9 as l,ea as p,a as u,eb as y}from"./index-o1YlnJfN.js";var r;(function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct"})(r||(r={}));const d=[r.Horizontal,r.Vertical,r.Direct];let e=class extends n(y){constructor(t){super(t),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=r.Direct,this.offset=0,this.orientation=0}};o([i({type:["length"],json:{write:{isRequired:!0}}})],e.prototype,"type",void 0),o([i({type:s,json:{write:!0}})],e.prototype,"startPoint",void 0),o([i({type:s,json:{write:!0}})],e.prototype,"endPoint",void 0),o([i({type:d,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"measureType",void 0),o([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"offset",void 0),o([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),a(t=>l.normalize(p(t),0,!0))],e.prototype,"orientation",void 0),e=o([u("esri.analysis.LengthDimension")],e);const h=e;export{d as r,r as t,h as u};