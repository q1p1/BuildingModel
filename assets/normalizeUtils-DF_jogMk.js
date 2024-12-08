import{aT as D,ge as U,eY as k,U as C,gw as W,ef as _,k9 as B,ka as E,aC as G,bY as J,at as v,gO as S,v as F,z as H,e as K,gN as Q}from"./index-DVfovSRj.js";import{r as A,o as I,i as b,s as X}from"./normalizeUtilsCommon-BiyL944r.js";async function V(e,s,l,n){const t=D(e),r=s[0].spatialReference,i={...n,responseType:"json",query:{...t.query,f:"json",sr:U(r),target:JSON.stringify({geometryType:k(s[0]),geometries:s}),cutter:JSON.stringify(l)}},o=await C(t.path+"/cut",i),{cutIndexes:a,geometries:u=[]}=o.data;return{cutIndexes:a,geometries:u.map(p=>{const x=W(p);return x.spatialReference=r,x})}}async function Z(e,s,l){const n=typeof e=="string"?_(e):e,t=s[0].spatialReference,r=k(s[0]),i={...l,query:{...n.query,f:"json",sr:U(t),geometries:JSON.stringify(B(s))}},{data:o}=await C(n.path+"/simplify",i);return E(o.geometries,r,t)}const Y=()=>H.getLogger("esri.geometry.support.normalizeUtils");function ee(e){return e.type==="polygon"}function te(e){return e[0].type==="polygon"}function se(e){return e[0].type==="polyline"}function ne(e,s){if(!(e instanceof v||e instanceof F)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw Y().error(t),new K(t)}const l=I(e),n=[];for(const t of l){const r=[];n.push(r),r.push([t[0][0],t[0][1]]);for(let i=0;i<t.length-1;i++){const o=t[i][0],a=t[i][1],u=t[i+1][0],p=t[i+1][1],x=Math.sqrt((u-o)*(u-o)+(p-a)*(p-a)),h=(p-a)/x,d=(u-o)/x,g=x/s;if(g>1){for(let R=1;R<=g-1;R++){const N=R*s,c=d*N+o,f=h*N+a;r.push([c,f])}const $=(x+Math.floor(g-1)*s)/2,j=d*$+o,L=h*$+a;r.push([j,L])}r.push([u,p])}}return ee(e)?new F({rings:n,spatialReference:e.spatialReference}):new v({paths:n,spatialReference:e.spatialReference})}function O(e,s,l){if(s){const n=ne(e,1e6);e=Q(n,!0)}return l&&(e=X(e,l)),e}function T(e,s,l){if(Array.isArray(e)){const n=e[0];if(n>s){const t=b(n,s);e[0]=n+t*(-2*s)}else if(n<l){const t=b(n,l);e[0]=n+t*(-2*l)}}else{const n=e.x;if(n>s){const t=b(n,s);e=e.clone().offset(t*(-2*s),0)}else if(n<l){const t=b(n,l);e=e.clone().offset(t*(-2*l),0)}}return e}function oe(e,s){let l=-1;for(let n=0;n<s.cutIndexes.length;n++){const t=s.cutIndexes[n],r=s.geometries[n],i=I(r);for(let o=0;o<i.length;o++){const a=i[o];a.some(u=>{if(u[0]<180)return!0;{let p=0;for(let h=0;h<a.length;h++){const d=a[h][0];p=d>p?d:p}p=Number(p.toFixed(9));const x=-360*b(p,180);for(let h=0;h<a.length;h++){const d=r.getPoint(o,h);r.setPoint(o,h,d.clone().offset(x,0))}return!0}})}if(t===l){if(te(e))for(const o of I(r))e[t]=e[t].addRing(o);else if(se(e))for(const o of I(r))e[t]=e[t].addPath(o)}else l=t,e[t]=r}return e}async function ie(e,s,l){if(!Array.isArray(e))return ie([e],s);s&&typeof s!="string"&&Y().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n=typeof s=="string"?s:(s==null?void 0:s.url)??G.geometryServiceUrl;let t,r,i,o,a,u,p,x,h=0;const d=[],g=[];for(const c of e)if(c!=null)if(t||(t=c.spatialReference,r=J(t),i=t.isWebMercator,u=i?102100:4326,o=A[u].maxX,a=A[u].minX,p=A[u].plus180Line,x=A[u].minus180Line),r)if(c.type==="mesh")g.push(c);else if(c.type==="point")g.push(T(c.clone(),o,a));else if(c.type==="multipoint"){const f=c.clone();f.points=f.points.map(m=>T(m,o,a)),g.push(f)}else if(c.type==="extent"){const f=c.clone()._normalize(!1,!1,r);g.push(f.rings?new F(f):f)}else if(c.extent){const f=c.extent,m=b(f.xmin,a)*(2*o);let M=m===0?c.clone():X(c.clone(),m);f.offset(m,0);let{xmin:w,xmax:y}=f;w=Number(w.toFixed(9)),y=Number(y.toFixed(9)),f.intersects(p)&&y!==o?(h=y>h?y:h,M=O(M,i),d.push(M),g.push("cut")):f.intersects(x)&&w!==a?(h=y*(2*o)>h?y*(2*o):h,M=O(M,i,360),d.push(M),g.push("cut")):g.push(M)}else g.push(c.clone());else g.push(c);else g.push(c);let $=b(h,o),j=-90;const L=$,R=new v;for(;$>0;){const c=360*$-180;R.addPath([[c,j],[c,-1*j]]),j*=-1,$--}if(d.length>0&&L>0){const c=oe(d,await V(n,d,R,l)),f=[],m=[];for(let y=0;y<g.length;y++){const P=g[y];if(P!=="cut")m.push(P);else{const z=c.shift(),q=e[y];q!=null&&q.type==="polygon"&&q.rings&&q.rings.length>1&&z.rings.length>=q.rings.length?(f.push(z),m.push("simplify")):m.push(i?S(z):z)}}if(!f.length)return m;const M=await Z(n,f,l),w=[];for(let y=0;y<m.length;y++){const P=m[y];P!=="simplify"?w.push(P):w.push(i?S(M.shift()):M.shift())}return w}const N=[];for(let c=0;c<g.length;c++){const f=g[c];if(f!=="cut")N.push(f);else{const m=d.shift();N.push(i===!0?S(m):m)}}return N}function le(e,s,l){const n=J(l);if(n==null)return e;const[t,r]=n.valid,i=2*r;let o=0,a=0;s>r?o=Math.ceil(Math.abs(s-r)/i):s<t&&(o=-Math.ceil(Math.abs(s-t)/i)),e>r?a=Math.ceil(Math.abs(e-r)/i):e<t&&(a=-Math.ceil(Math.abs(e-t)/i));let u=e+(o-a)*i;const p=u-s;return p>r?u-=i:p<t&&(u+=i),u}export{ne as M,le as P,ie as R};
