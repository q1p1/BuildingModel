import{e7 as l,fI as y,e8 as r,r as t,m as s,as as p,hn as u,a as f,b as c,eb as d}from"./index-pOkNMSkH.js";import{c as h,b as v}from"./featureReferenceUtils-3_Af5m2c.js";import{j as a}from"./persistable-Bp6kWnge.js";let o=class extends l(y(c)){constructor(n){super(n),this.position=null,this.elevationInfo=null,this.feature=null}equals(n){return r(this.position,n.position)&&r(this.elevationInfo,n.elevationInfo)&&h(this.feature,n.feature)}};t([s({type:p,json:{write:{isRequired:!0}}})],o.prototype,"position",void 0),t([s({type:u}),a()],o.prototype,"elevationInfo",void 0),t([s(v)],o.prototype,"feature",void 0),o=t([f("esri.analysis.LineOfSightAnalysisObserver")],o);const g=o;let i=class extends l(d){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return r(this.position,e.position)&&r(this.elevationInfo,e.elevationInfo)&&h(this.feature,e.feature)}};t([s({type:p}),a()],i.prototype,"position",void 0),t([s({type:u}),a()],i.prototype,"elevationInfo",void 0),t([s(v)],i.prototype,"feature",void 0),i=t([f("esri.analysis.LineOfSightAnalysisTarget")],i);const q=i;export{q as f,g as u};
