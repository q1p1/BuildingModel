import{e7 as s,e8 as a,r as t,m as r,as as o,bW as l,e9 as n,ea as d,a as u,eb as p}from"./index-DVfovSRj.js";import{c as h,b as f}from"./featureReferenceUtils-5syO34J9.js";let i=class extends s(p){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return a(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&h(this.feature,e.feature)}};t([r({type:o,json:{write:!0}})],i.prototype,"observer",void 0),t([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],i.prototype,"farDistance",void 0),t([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),l(e=>n.normalize(d(e),void 0,!0))],i.prototype,"heading",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],i.prototype,"tilt",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],i.prototype,"horizontalFieldOfView",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],i.prototype,"verticalFieldOfView",void 0),t([r(f)],i.prototype,"feature",void 0),t([r({json:{read:!1}})],i.prototype,"isValid",null),i=t([u("esri.analysis.Viewshed")],i);const v=i;export{v as d};
