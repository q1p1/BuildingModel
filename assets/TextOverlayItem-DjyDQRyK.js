import{X as O,o4 as F,i9 as N,eC as U,cl as W,hW as E,o5 as J,ia as K,i8 as L,cf as S,iD as p,o6 as M,cK as C,dW as R,cO as X,bH as g,o7 as q,o8 as G,o9 as k,oa as Q,ob as Y,oc as tt,od as et,oe as it,e9 as rt,of as ot,og as nt,oh as st,oi as at,oj as lt,ok as ut,ol as ct,r as u,m as c,a as ht,b as dt,$ as B}from"./index-Dr8Kof1t.js";function Bt(t){var o,n;const e="metric";if(t==null)return e;const i=t.map,r=(i&&"portalItem"in i?(o=i.portalItem)==null?void 0:o.portal:null)??O.getDefault();switch(((n=r.user)==null?void 0:n.units)??r.units){case e:return e;case"english":return"imperial"}return F(t.spatialReference)??e}function H(t){return N(t)?U(t)||W(t)||E(t)||J(t)?K:t:L(t)}var d;function Zt(t){return ft(t,d.Horizontal)}function ft(t,e){const{hasZ:i,spatialReference:r}=t,o=H(r);let n=0;const h=M(o);if(h==null)return null;const f=e===d.Direct?I:P;for(const x of t.paths){if(x.length<2)continue;const z=x.length-1;for(let b=0;b<z;++b){const y=x[b];s[0]=y[0],s[1]=y[1],s[2]=i?y[2]:0;const v=x[b+1];a[0]=v[0],a[1]=v[1],a[2]=i?v[2]:0;const D=f(s,a,r);if(D==null)return null;n+=D.value}}return p(n,h)}function Mt(t,e){const{spatialReference:i}=t;return S(i,e.spatialReference)?(s[0]=t.x,s[1]=t.y,s[2]=t.hasZ?t.z:0,a[0]=e.x,a[1]=e.y,a[2]=e.hasZ?e.z:0,pt(s,a,i)):null}function kt(t,e){const{spatialReference:i}=t;return S(i,e.spatialReference)?(s[0]=t.x,s[1]=t.y,s[2]=t.hasZ?t.z:0,a[0]=e.x,a[1]=e.y,a[2]=e.hasZ?e.z:0,I(s,a,i)):null}function Ht(t,e){const{spatialReference:i}=t;return S(i,e.spatialReference)?(s[0]=t.x,s[1]=t.y,s[2]=t.hasZ?t.z:0,a[0]=e.x,a[1]=e.y,a[2]=e.hasZ?e.z:0,P(s,a,i)):null}function It(t,e){const{spatialReference:i}=t;return S(i,e.spatialReference)?(s[0]=t.x,s[1]=t.y,s[2]=t.hasZ?t.z:0,a[0]=e.x,a[1]=e.y,a[2]=e.hasZ?e.z:0,bt(s,a,i)):null}function Pt(t){return t!=null?xt(t.hasZ?t.z:0,t.spatialReference):null}function xt(t,e){const i=q(e);return i!=null?p(t??0,i):null}function pt(t,e,i){const r=w(t,e,i);return r!=null?{direct:p(r.direct,r.unit),horizontal:p(r.horizontal,r.unit),vertical:p(r.vertical,r.unit)}:null}function I(t,e,i){const r=w(t,e,i,d.Direct);return r!=null?p(r.direct,r.unit):null}function P(t,e,i){const r=w(t,e,i,d.Horizontal);return r!=null?p(r.horizontal,r.unit):null}function bt(t,e,i){const r=w(t,e,i,d.Vertical);return r!=null?p(r.verticalSigned,r.unit):null}function w(t,e,i,r){const o=H(i),n=M(o);if(n==null)return null;const h=e[2]-t[2];if(r===d.Vertical)return{verticalSigned:h,unit:n};if(!C(t,i,_,o)||!C(e,i,m,o))return null;if(r===d.Direct)return{direct:R(m,_),unit:n};if(X($,t[0],t[1],e[2]),!C($,i,$,o))return null;const f=R($,m);return r===d.Horizontal?{horizontal:f,unit:n}:{direct:R(m,_),horizontal:f,vertical:Math.abs(h),unit:n}}(function(t){t[t.Direct=0]="Direct",t[t.Horizontal=1]="Horizontal",t[t.Vertical=2]="Vertical"})(d||(d={}));const s=g(),a=g(),_=g(),m=g(),$=g();function T(t,e,i,r=2,o="abbr"){return G(t,k(e,i).value,i,r,o)}function V(t,e,i,r=2,o="abbr"){return ot(t,k(e,i).value,i,r,o)}function yt(t,e,i=2,r="abbr"){return Q(t,e.value,e.unit,i,r)}function vt(t,e,i=2,r="abbr"){return nt(t,e.value,e.unit,i,r)}function gt(t,e,i=2,r="abbr"){return Y(t,e.value,e.unit,i,r)}function mt(t,e,i=2,r="abbr"){return st(t,e.value,e.unit,i,r)}function $t(t,e,i=2,r="abbr"){return at(t,e.value,e.unit,i,r)}function St(t,e,i=2,r="abbr"){return tt(t,e.value,e.unit,i,r)}function wt(t,e,i=2,r="abbr"){return lt(t,e.value,e.unit,i,r)}function zt(t,e,i=2,r="abbr"){return et(t,e.value,e.unit,i,r)}function Ct(t,e,i=2,r="abbr"){return ut(t,e.value,e.unit,i,r)}function Rt(t,e,i=2,r="abbr"){return ct(t,e.value,e.unit,i,r)}function Vt(t,e,i,r=rt,o=!0){return it(t.value,t.unit,t.rotationType,e,i,r,o)}function jt(t,e,i,r,o="abbr"){switch(r=r??2,i){case"imperial":return St(t,e,r,o);case"metric":return yt(t,e,r,o);default:return T(t,e,i,r,o)}}function Ot(t,e,i,r=2,o="abbr"){switch(i){case"imperial":return wt(t,e,r,o);case"metric":return vt(t,e,r,o);default:return V(t,e,i,r,o)}}function Ft(t,e,i,r=2,o="abbr"){switch(i){case"imperial":return zt(t,e,r,o);case"metric":return gt(t,e,r,o);default:return T(t,e,i,r,o)}}function Nt(t,e,i,r=2,o="abbr"){switch(i){case"imperial":return Ct(t,e,r,o);case"metric":return mt(t,e,r,o);default:return V(t,e,i,r,o)}}function Ut(t,e,i,r=2,o="abbr"){switch(i){case"imperial":return Rt(t,e,r,o);case"metric":return $t(t,e,r,o);default:return T(t,e,i,r,o)}}let _t=t=>({vnodeSelector:"",properties:void 0,children:void 0,text:t.toString(),domNode:null}),j=(t,e,i)=>{for(let r=0,o=e.length;r<o;r++){let n=e[r];Array.isArray(n)?j(t,n,i):n!=null&&n!==!1&&(typeof n=="string"&&(n=_t(n)),i.push(n))}};function At(t,e,i){if(Array.isArray(e))i=e,e=void 0;else if(e&&(typeof e=="string"||e.hasOwnProperty("vnodeSelector"))||i&&(typeof i=="string"||i.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let r,o;return i&&i.length===1&&typeof i[0]=="string"?r=i[0]:i&&(o=[],j(t,i,o),o.length===0&&(o=void 0)),{vnodeSelector:t,properties:e,children:o,text:r===""?void 0:r,domNode:null}}const Z={bottom:"esri-text-overlay-item-anchor-bottom","bottom-right":"esri-text-overlay-item-anchor-bottom-right","bottom-left":"esri-text-overlay-item-anchor-bottom-left",top:"esri-text-overlay-item-anchor-top","top-right":"esri-text-overlay-item-anchor-top-right","top-left":"esri-text-overlay-item-anchor-top-left",center:"esri-text-overlay-item-anchor-center",right:"esri-text-overlay-item-anchor-right",left:"esri-text-overlay-item-anchor-left"};let l=class extends dt{get position(){return[this.x,this.y]}set position(t){this._set("x",t[0]),this._set("y",t[1])}get _textShadowColor(){const{textColor:t,backgroundColor:e}=this,i=e.clone();return i.a*=t.a,i}get _textShadow(){const t=this._textShadowColor.toCss(!0);return`0 0 ${this._textShadowSize}px ${t}`}get padding(){return .5*this.fontSize}get borderRadius(){return this.padding}set borderRadius(t){this._overrideIfSome("borderRadius",t)}constructor(t){super(t),this.x=0,this.y=0,this.text="-",this.fontSize=14,this.anchor="center",this.visible=!0,this.isDecoration=!0,this.backgroundColor=new B([0,0,0,.6]),this.textColor=new B([255,255,255]),this._textShadowSize=1}render(){return At("div",{classes:this._cssClasses(),styles:{left:Math.floor(this.x)+"px",top:Math.floor(this.y)+"px",visibility:this.visible?"visible":"hidden",fontSize:this.fontSize+"px",lineHeight:this.fontSize+"px",backgroundColor:this.backgroundColor.toCss(!0),color:this.textColor.toCss(!0),padding:this.padding+"px",borderRadius:this.borderRadius+"px",textShadow:this._textShadow}},[this.text])}renderCanvas(t){if(!this.visible)return;const e=t.font.replace(/^(.*?)px/,"");t.font=`${this.fontSize}px ${e}`;const{padding:i,borderRadius:r}=this,o=t.measureText(this.text).width,n=this.text!==""?this.fontSize:0,h=Tt[this.anchor];t.textAlign="center",t.textBaseline="middle";const f=o+2*i,x=n+2*i,z=this.x+h.x*f,b=this.y+h.y*x;this._roundedRect(t,z,b,f,x,r),t.fillStyle=this.backgroundColor.toCss(!0),t.fill();const y=this.x+(h.x+.5)*f,v=this.y+(h.y+.5)*x;this._renderTextShadow(t,this.text,y,v),t.fillStyle=this.textColor.toCss(!0),t.fillText(this.text,y,v)}_renderTextShadow(t,e,i,r){t.lineJoin="miter",t.fillStyle=`rgba(${this._textShadowColor.r}, ${this._textShadowColor.g}, ${this._textShadowColor.b}, ${1/A.length})`;const o=this._textShadowSize;for(const[n,h]of A)t.fillText(e,i+o*n,r+o*h)}_roundedRect(t,e,i,r,o,n){n=Math.min(n,o/2,r/2),t.beginPath(),t.moveTo(e,i+n),t.arcTo(e,i,e+n,i,n),t.lineTo(e+r-n,i),t.arcTo(e+r,i,e+r,i+n,n),t.lineTo(e+r,i+o-n),t.arcTo(e+r,i+o,e+r-n,i+o,n),t.lineTo(e+n,i+o),t.arcTo(e,i+o,e,i+o-n,n),t.closePath()}_cssClasses(){const t={"esri-text-overlay-item":!0};let e;for(e in Z)t[Z[e]]=this.anchor===e;return t}};u([c()],l.prototype,"x",void 0),u([c()],l.prototype,"y",void 0),u([c()],l.prototype,"position",null),u([c()],l.prototype,"text",void 0),u([c()],l.prototype,"fontSize",void 0),u([c()],l.prototype,"anchor",void 0),u([c()],l.prototype,"visible",void 0),u([c()],l.prototype,"isDecoration",void 0),u([c()],l.prototype,"backgroundColor",void 0),u([c()],l.prototype,"textColor",void 0),u([c()],l.prototype,"_textShadowSize",void 0),u([c()],l.prototype,"_textShadowColor",null),u([c()],l.prototype,"_textShadow",null),u([c()],l.prototype,"padding",null),u([c()],l.prototype,"borderRadius",null),l=u([ht("esri.views.overlay.TextOverlayItem")],l);const Tt={bottom:{x:-.5,y:-1,textAlign:"center",textBaseline:"bottom"},"bottom-left":{x:0,y:-1,textAlign:"left",textBaseline:"bottom"},"bottom-right":{x:-1,y:-1,textAlign:"right",textBaseline:"bottom"},center:{x:-.5,y:-.5,textAlign:"center",textBaseline:"middle"},left:{x:0,y:-.5,textAlign:"left",textBaseline:"middle"},right:{x:-1,y:-.5,textAlign:"right",textBaseline:"middle"},top:{x:-.5,y:0,textAlign:"center",textBaseline:"top"},"top-left":{x:0,y:0,textAlign:"left",textBaseline:"top"},"top-right":{x:-1,y:0,textAlign:"right",textBaseline:"top"}},A=[];for(let e=0;e<360;e+=360/16)A.push([Math.cos(Math.PI*e/180),Math.sin(Math.PI*e/180)]);const Wt=l;export{Ot as C,Ft as F,Pt as R,Nt as S,Vt as U,P as Z,I as a,jt as b,bt as c,St as d,Bt as e,Zt as f,T as g,Mt as h,zt as i,xt as j,Ut as k,H as l,kt as m,yt as n,At as t,gt as w,Wt as x,It as y,Ht as z};