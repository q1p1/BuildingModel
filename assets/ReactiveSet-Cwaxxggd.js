import{aH as a,aI as s}from"./index-o1YlnJfN.js";class b{constructor(e){this._observable=new a,this._set=new Set(e)}get size(){return s(this._observable),this._set.size}add(e){const t=this._set.size;return this._set.add(e),this._set.size!==t&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(e){const t=this._set.delete(e);return t&&this._observable.notify(),t}entries(){return s(this._observable),this._set.entries()}forEach(e,t){s(this._observable),this._set.forEach((r,i)=>e.call(t,r,i,this),t)}has(e){return s(this._observable),this._set.has(e)}keys(){return s(this._observable),this._set.keys()}values(){return s(this._observable),this._set.values()}[Symbol.iterator](){return s(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{b as s};