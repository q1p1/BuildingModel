import{aU as x}from"./index-DVfovSRj.js";function y(r,u){return r[0]=u[0],r[1]=u[1],r[2]=u[2],r[3]=u[3],r[4]=u[4],r[5]=u[5],r}function S(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=0,r[5]=0,r}function _(r,u,o,e,s,a,i){return r[0]=u,r[1]=o,r[2]=e,r[3]=s,r[4]=a,r[5]=i,r}function g(r,u){const o=u[0],e=u[1],s=u[2],a=u[3],i=u[4],f=u[5];let c=o*a-e*s;return c?(c=1/c,r[0]=a*c,r[1]=-e*c,r[2]=-s*c,r[3]=o*c,r[4]=(s*f-a*i)*c,r[5]=(e*i-o*f)*c,r):null}function q(r){return r[0]*r[3]-r[1]*r[2]}function d(r,u,o){const e=u[0],s=u[1],a=u[2],i=u[3],f=u[4],c=u[5],M=o[0],h=o[1],l=o[2],n=o[3],m=o[4],b=o[5];return r[0]=e*M+a*h,r[1]=s*M+i*h,r[2]=e*l+a*n,r[3]=s*l+i*n,r[4]=e*m+a*b+f,r[5]=s*m+i*b+c,r}function j(r,u,o){const e=u[0],s=u[1],a=u[2],i=u[3],f=u[4],c=u[5],M=Math.sin(o),h=Math.cos(o);return r[0]=e*h+a*M,r[1]=s*h+i*M,r[2]=e*-M+a*h,r[3]=s*-M+i*h,r[4]=f,r[5]=c,r}function v(r,u,o){const e=u[0],s=u[1],a=u[2],i=u[3],f=u[4],c=u[5],M=o[0],h=o[1];return r[0]=e*M,r[1]=s*M,r[2]=a*h,r[3]=i*h,r[4]=f,r[5]=c,r}function A(r,u,o){const e=u[0],s=u[1],a=u[2],i=u[3],f=u[4],c=u[5],M=o[0],h=o[1];return r[0]=e,r[1]=s,r[2]=a,r[3]=i,r[4]=e*M+a*h+f,r[5]=s*M+i*h+c,r}function O(r,u){const o=Math.sin(u),e=Math.cos(u);return r[0]=e,r[1]=o,r[2]=-o,r[3]=e,r[4]=0,r[5]=0,r}function T(r,u){return r[0]=u[0],r[1]=0,r[2]=0,r[3]=u[1],r[4]=0,r[5]=0,r}function z(r,u){return r[0]=1,r[1]=0,r[2]=0,r[3]=1,r[4]=u[0],r[5]=u[1],r}function E(r){return"mat2d("+r[0]+", "+r[1]+", "+r[2]+", "+r[3]+", "+r[4]+", "+r[5]+")"}function P(r){return Math.sqrt(r[0]**2+r[1]**2+r[2]**2+r[3]**2+r[4]**2+r[5]**2+1)}function R(r,u,o){return r[0]=u[0]+o[0],r[1]=u[1]+o[1],r[2]=u[2]+o[2],r[3]=u[3]+o[3],r[4]=u[4]+o[4],r[5]=u[5]+o[5],r}function p(r,u,o){return r[0]=u[0]-o[0],r[1]=u[1]-o[1],r[2]=u[2]-o[2],r[3]=u[3]-o[3],r[4]=u[4]-o[4],r[5]=u[5]-o[5],r}function U(r,u,o){return r[0]=u[0]*o,r[1]=u[1]*o,r[2]=u[2]*o,r[3]=u[3]*o,r[4]=u[4]*o,r[5]=u[5]*o,r}function $(r,u,o,e){return r[0]=u[0]+o[0]*e,r[1]=u[1]+o[1]*e,r[2]=u[2]+o[2]*e,r[3]=u[3]+o[3]*e,r[4]=u[4]+o[4]*e,r[5]=u[5]+o[5]*e,r}function k(r,u){return r[0]===u[0]&&r[1]===u[1]&&r[2]===u[2]&&r[3]===u[3]&&r[4]===u[4]&&r[5]===u[5]}function t(r,u){const o=r[0],e=r[1],s=r[2],a=r[3],i=r[4],f=r[5],c=u[0],M=u[1],h=u[2],l=u[3],n=u[4],m=u[5],b=x();return Math.abs(o-c)<=b*Math.max(1,Math.abs(o),Math.abs(c))&&Math.abs(e-M)<=b*Math.max(1,Math.abs(e),Math.abs(M))&&Math.abs(s-h)<=b*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(a-l)<=b*Math.max(1,Math.abs(a),Math.abs(l))&&Math.abs(i-n)<=b*Math.max(1,Math.abs(i),Math.abs(n))&&Math.abs(f-m)<=b*Math.max(1,Math.abs(f),Math.abs(m))}const w=d,B=p;Object.freeze(Object.defineProperty({__proto__:null,add:R,copy:y,determinant:q,equals:t,exactEquals:k,frob:P,fromRotation:O,fromScaling:T,fromTranslation:z,identity:S,invert:g,mul:w,multiply:d,multiplyScalar:U,multiplyScalarAndAdd:$,rotate:j,scale:v,set:_,str:E,sub:B,subtract:p,translate:A},Symbol.toStringTag,{value:"Module"}));export{O as M,S as a,d as e,A as i,j as s,g as u};
