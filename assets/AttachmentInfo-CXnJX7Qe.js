import{r as o,m as e,gi as s,a as u,bg as f}from"./index-DVfovSRj.js";function y(n){const{exifInfo:r,exifName:a,tagName:i}=n;if(!r||!a||!i)return null;const l=r.find(p=>p.name===a);return l?m({tagName:i,tags:l.tags}):null}function m(n){const{tagName:r,tags:a}=n;if(!a||!r)return null;const i=a.find(l=>l.name===r);return(i==null?void 0:i.value)||null}var d;const I={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let t=d=class extends f{constructor(n){super(n),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:n}=this,r=y({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:n});return I[r]||null}clone(){return new d({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};o([e({type:String})],t.prototype,"contentType",void 0),o([e()],t.prototype,"exifInfo",void 0),o([e({readOnly:!0})],t.prototype,"orientationInfo",null),o([e({type:s})],t.prototype,"id",void 0),o([e({type:String})],t.prototype,"globalId",void 0),o([e({type:String})],t.prototype,"keywords",void 0),o([e({type:String})],t.prototype,"name",void 0),o([e({json:{read:!1}})],t.prototype,"parentGlobalId",void 0),o([e({json:{read:!1}})],t.prototype,"parentObjectId",void 0),o([e({type:s})],t.prototype,"size",void 0),o([e({json:{read:!1}})],t.prototype,"url",void 0),t=d=o([u("esri.rest.query.support.AttachmentInfo")],t);const h=t;export{h as a};
