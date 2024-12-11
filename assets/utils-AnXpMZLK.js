import{bX as j,bY as G,as as z,bZ as O,b_ as V,b$ as E,c0 as Y,c1 as _,av as A,c2 as D,c3 as L}from"./index-pOkNMSkH.js";import{$ as P}from"./utils-CIJIXLiF.js";import{m as T,B as R}from"./utils-BeFA6lRt.js";let u=null;const U=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Z(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function q(t,e,o,s){const a=j(o)?G(o):null,c=a?Math.round((a.valid[1]-a.valid[0])/e.scale[0]):null;return t.map(i=>{const r=new z(i.geometry);return O(e,r,r),i.geometry=a?Z(r,c??0,s[0]):r,i})}function H(t,e=18,o,s,a){const c=new Float64Array(s*a);e=Math.round(D(e));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;const N=L(o);for(const{geometry:$,attributes:g}of t){const{x:p,y:m}=$,x=Math.max(0,p-e),M=Math.max(0,m-e),F=Math.min(a,m+e),w=Math.min(s,p+e),b=+N(g);for(let f=M;f<F;f++)for(let d=x;d<w;d++){const y=f*s+d,I=V(d-p,f-m,e)*b,l=c[y]+=I;i=Math.min(i,l),r=Math.max(r,l)}}return{min:i,max:r}}function B(t){const e=U.exec(t);if(!e)return null;const{hh:o,mm:s,ss:a,ms:c}=e.groups;return Number(o)*E.hours+Number(s)*E.minutes+Number(a)*E.seconds+Number(c||0)}async function J(t,e,o=!0){if(!e)return[];const{field:s,field2:a,field3:c,fieldDelimiter:i,fieldInfos:r,timeZone:N}=t,$=s&&(r==null?void 0:r.find(l=>l.name.toLowerCase()===s.toLowerCase())),g=!!$&&Y($),p=!!$&&P($),m=t.valueExpression,x=t.normalizationType,M=t.normalizationField,F=t.normalizationTotal,w=[],b=t.viewInfoParams;let f=null,d=null;if(m){if(!u){const{arcadeUtils:l}=await _();u=l}u.hasGeometryOperations(m)&&await u.enableGeometryOperations(),f=u.createFunction(m),d=b?u.getViewInfo({viewingMode:b.viewingMode,scale:b.scale,spatialReference:new A(b.spatialReference)}):null}const y=t.fieldInfos,I=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const h=l.attributes;let n;if(m){const v=I?{...l,layer:I}:l,C=u.createExecContext(v,d,N);n=u.executeFunction(f,C)}else h&&(n=h[s],a?(n=`${T(n)}${i}${T(h[a])}`,c&&(n=`${n}${i}${T(h[c])}`)):typeof n=="string"&&o&&(p?n=n?new Date(n).getTime():null:g&&(n=n?B(n):null)));if(x&&typeof n=="number"&&isFinite(n)){const v=h&&parseFloat(h[M]);n=R(n,x,v,F)}w.push(n)}),w}export{B as I,J as b,H as w,q as x};
