import{cb as d,gB as S,dr as a,fe as r,g3 as p,v as b,r as o,m as c,a as g,bT as v,bH as m}from"./index-pOkNMSkH.js";import{d as z}from"./TileTreeDebugger-BwyvZXlS.js";let h=class extends z{constructor(u){super(u)}getTiles(){const u=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,i=this.nodeSR;return u.map(l=>j(l,t,i)).filter(d).sort((l,s)=>l.lij[0]===s.lij[0]?l.label>s.label?-1:1:l.lij[0]-s.lij[0])}};function j(u,t,i){const l=u.serviceObbInIndexSR;if(l==null||t==null)return null;S(n,l.quaternion),a(e,l.center),r(e,i,0,e,t,0),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];p(e,l.halfSize,n),r(e,t,0,e,i,0),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],p(e,e,n),r(e,t,0,e,i,0),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[0]=-e[0],e[1]=-e[1],p(e,e,n),r(e,t,0,e,i,0),s[0].push([e[0],e[1]]),a(e,l.halfSize),e[1]=-e[1],p(e,e,n),r(e,t,0,e,i,0),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),a(e,l.halfSize),e[0]=-e[0],e[2]=-e[2],p(e,e,n),r(e,t,0,e,i,0),s[1].push([e[0],e[1]]),a(e,l.halfSize),e[2]=-e[2],p(e,e,n),r(e,t,0,e,i,0),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),a(e,l.halfSize),e[1]=-e[1],e[2]=-e[2],p(e,e,n),r(e,t,0,e,i,0),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const f=new b({rings:s,spatialReference:i});return{lij:[u.level,u.childCount,0],label:u.id,geometry:f}}o([c({constructOnly:!0})],h.prototype,"lv",void 0),o([c({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([g("esri.views.3d.layers.support.I3STreeDebugger")],h);const n=v(),e=m();export{h as I3STreeDebugger};
