import{b5 as i,c8 as r,c9 as s}from"./index-CXNGdYBO.js";class o extends i{constructor(){super(...arguments),this._set=new Set,this._length=r(0)}clear(){if(this._set.size>0){const e=this.toArray();this._set.clear(),this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:e})}}get length(){return this._length.value}addMany(e){if(e.length!==0){for(const t of e)this._set.add(t);this._length.value=this._set.size,this.emit("after-changes",{type:s.ADD}),this.emit("change",{added:e,removed:[]})}}remove(e){this._set.delete(e)&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:[e]}))}removeMany(e){const t=[];for(const h of e)this._set.delete(h)&&t.push(h);t.length>0&&(this._length.value=this._set.size,this.emit("after-changes",{type:s.REMOVE}),this.emit("change",{added:[],removed:t}))}toArray(){return Array.from(this._set.values())}find(e){for(const t of this._set.values())if(e(t))return t}some(e){for(const t of this._set.values())if(e(t))return!0;return!1}forEach(e){this._set.forEach(t=>e(t))}}export{o as r};