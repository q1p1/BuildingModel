import{nS as De,eD as v,eH as pe,eI as ve,gv as L,eF as Oe,eJ as Be,nT as Ae}from"./index-Dr8Kof1t.js";import{l as me,n as Ie,o as U,p as Ne,r as Le,u as C,v as I,t as $,f as Re,q as Me,x as He}from"./dom-BZzhahQO.js";import{g as be}from"./guid-BxSjQh8J.js";import{i as ge}from"./key-D63ExP77.js";import{s as Ee,a as ye,c as we}from"./loadable-BR6ZyhEV.js";import{d as ke}from"./action-ChQCFBWk.js";import{d as Pe}from"./icon-BIORp8Qk.js";import{d as xe}from"./loader-blQHwTz1.js";import{f as Se,c as Ke,a as ze,b as Ue,r as je,F as ee}from"./floating-ui-DGtW4-aA.js";import{o as te}from"./openCloseComponent-GEOxCy6K.js";import{c as $e,d as _e}from"./locale-B9PcpyBg.js";import{u as qe,c as Ge,s as Ye,d as We}from"./t9n-DXBTJhIQ.js";import{c as Je}from"./observers-ButT9p0Q.js";import{F as Xe}from"./FloatingArrow-CNzwTbgz.js";import{g as Qe}from"./component-6CIDVndn.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 *//*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function Ze(s,e,t){return(e=et(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}function ne(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(s,c).enumerable})),t.push.apply(t,n)}return t}function ie(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ne(Object(t),!0).forEach(function(n){Ze(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}function Ve(s,e){if(typeof s!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function et(s){var e=Ve(s,"string");return typeof e=="symbol"?e:e+""}var ae={activateTrap:function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var c=e.indexOf(t);c===-1||e.splice(c,1),e.push(t)},deactivateTrap:function(e,t){var n=e.indexOf(t);n!==-1&&e.splice(n,1),e.length>0&&e[e.length-1].unpause()}},tt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},nt=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},R=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},it=function(e){return R(e)&&!e.shiftKey},at=function(e){return R(e)&&e.shiftKey},oe=function(e){return setTimeout(e,0)},re=function(e,t){var n=-1;return e.every(function(c,r){return t(c)?(n=r,!1):!0}),n},N=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return typeof e=="function"?e.apply(void 0,n):e},H=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},ot=[],rt=function(e,t){var n=(t==null?void 0:t.document)||document,c=(t==null?void 0:t.trapStack)||ot,r=ie({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:it,isKeyBackward:at},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,m=function(i,a,l){return i&&i[a]!==void 0?i[a]:r[l||a]},y=function(i,a){var l=typeof(a==null?void 0:a.composedPath)=="function"?a.composedPath():void 0;return o.containerGroups.findIndex(function(d){var u=d.container,h=d.tabbableNodes;return u.contains(i)||(l==null?void 0:l.includes(u))||h.find(function(p){return p===i})})},w=function(i){var a=r[i];if(typeof a=="function"){for(var l=arguments.length,d=new Array(l>1?l-1:0),u=1;u<l;u++)d[u-1]=arguments[u];a=a.apply(void 0,d)}if(a===!0&&(a=void 0),!a){if(a===void 0||a===!1)return a;throw new Error("`".concat(i,"` was specified but was not a node, or did not return a node"))}var h=a;if(typeof a=="string"&&(h=n.querySelector(a),!h))throw new Error("`".concat(i,"` as selector refers to no known node"));return h},T=function(){var i=w("initialFocus");if(i===!1)return!1;if(i===void 0||!U(i,r.tabbableOptions))if(y(n.activeElement)>=0)i=n.activeElement;else{var a=o.tabbableGroups[0],l=a&&a.firstTabbableNode;i=l||w("fallbackFocus")}if(!i)throw new Error("Your focus-trap needs to have at least one focusable element");return i},D=function(){if(o.containerGroups=o.containers.map(function(i){var a=Ne(i,r.tabbableOptions),l=Le(i,r.tabbableOptions),d=a.length>0?a[0]:void 0,u=a.length>0?a[a.length-1]:void 0,h=l.find(function(g){return C(g)}),p=l.slice().reverse().find(function(g){return C(g)}),E=!!a.find(function(g){return I(g)>0});return{container:i,tabbableNodes:a,focusableNodes:l,posTabIndexesFound:E,firstTabbableNode:d,lastTabbableNode:u,firstDomTabbableNode:h,lastDomTabbableNode:p,nextTabbableNode:function(F){var B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,x=a.indexOf(F);return x<0?B?l.slice(l.indexOf(F)+1).find(function(A){return C(A)}):l.slice(0,l.indexOf(F)).reverse().find(function(A){return C(A)}):a[x+(B?1:-1)]}}}),o.tabbableGroups=o.containerGroups.filter(function(i){return i.tabbableNodes.length>0}),o.tabbableGroups.length<=0&&!w("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(o.containerGroups.find(function(i){return i.posTabIndexesFound})&&o.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},_=function(i){var a=i.activeElement;if(a)return a.shadowRoot&&a.shadowRoot.activeElement!==null?_(a.shadowRoot):a},P=function(i){if(i!==!1&&i!==_(document)){if(!i||!i.focus){P(T());return}i.focus({preventScroll:!!r.preventScroll}),o.mostRecentlyFocusedNode=i,tt(i)&&i.select()}},q=function(i){var a=w("setReturnFocus",i);return a||(a===!1?!1:i)},G=function(i){var a=i.target,l=i.event,d=i.isBackward,u=d===void 0?!1:d;a=a||H(l),D();var h=null;if(o.tabbableGroups.length>0){var p=y(a,l),E=p>=0?o.containerGroups[p]:void 0;if(p<0)u?h=o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:h=o.tabbableGroups[0].firstTabbableNode;else if(u){var g=re(o.tabbableGroups,function(K){var z=K.firstTabbableNode;return a===z});if(g<0&&(E.container===a||U(a,r.tabbableOptions)&&!C(a,r.tabbableOptions)&&!E.nextTabbableNode(a,!1))&&(g=p),g>=0){var F=g===0?o.tabbableGroups.length-1:g-1,B=o.tabbableGroups[F];h=I(a)>=0?B.lastTabbableNode:B.lastDomTabbableNode}else R(l)||(h=E.nextTabbableNode(a,!1))}else{var x=re(o.tabbableGroups,function(K){var z=K.lastTabbableNode;return a===z});if(x<0&&(E.container===a||U(a,r.tabbableOptions)&&!C(a,r.tabbableOptions)&&!E.nextTabbableNode(a))&&(x=p),x>=0){var A=x===o.tabbableGroups.length-1?0:x+1,V=o.tabbableGroups[A];h=I(a)>=0?V.firstTabbableNode:V.firstDomTabbableNode}else R(l)||(h=E.nextTabbableNode(a))}}else h=w("fallbackFocus");return h},M=function(i){var a=H(i);if(!(y(a,i)>=0)){if(N(r.clickOutsideDeactivates,i)){b.deactivate({returnFocus:r.returnFocusOnDeactivate});return}N(r.allowOutsideClick,i)||i.preventDefault()}},Y=function(i){var a=H(i),l=y(a,i)>=0;if(l||a instanceof Document)l&&(o.mostRecentlyFocusedNode=a);else{i.stopImmediatePropagation();var d,u=!0;if(o.mostRecentlyFocusedNode)if(I(o.mostRecentlyFocusedNode)>0){var h=y(o.mostRecentlyFocusedNode),p=o.containerGroups[h].tabbableNodes;if(p.length>0){var E=p.findIndex(function(g){return g===o.mostRecentlyFocusedNode});E>=0&&(r.isKeyForward(o.recentNavEvent)?E+1<p.length&&(d=p[E+1],u=!1):E-1>=0&&(d=p[E-1],u=!1))}}else o.containerGroups.some(function(g){return g.tabbableNodes.some(function(F){return I(F)>0})})||(u=!1);else u=!1;u&&(d=G({target:o.mostRecentlyFocusedNode,isBackward:r.isKeyBackward(o.recentNavEvent)})),P(d||o.mostRecentlyFocusedNode||T())}o.recentNavEvent=void 0},Fe=function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;o.recentNavEvent=i;var l=G({event:i,isBackward:a});l&&(R(i)&&i.preventDefault(),P(l))},W=function(i){(r.isKeyForward(i)||r.isKeyBackward(i))&&Fe(i,r.isKeyBackward(i))},J=function(i){nt(i)&&N(r.escapeDeactivates,i)!==!1&&(i.preventDefault(),b.deactivate())},X=function(i){var a=H(i);y(a,i)>=0||N(r.clickOutsideDeactivates,i)||N(r.allowOutsideClick,i)||(i.preventDefault(),i.stopImmediatePropagation())},Q=function(){if(o.active)return ae.activateTrap(c,b),o.delayInitialFocusTimer=r.delayInitialFocus?oe(function(){P(T())}):P(T()),n.addEventListener("focusin",Y,!0),n.addEventListener("mousedown",M,{capture:!0,passive:!1}),n.addEventListener("touchstart",M,{capture:!0,passive:!1}),n.addEventListener("click",X,{capture:!0,passive:!1}),n.addEventListener("keydown",W,{capture:!0,passive:!1}),n.addEventListener("keydown",J),b},Z=function(){if(o.active)return n.removeEventListener("focusin",Y,!0),n.removeEventListener("mousedown",M,!0),n.removeEventListener("touchstart",M,!0),n.removeEventListener("click",X,!0),n.removeEventListener("keydown",W,!0),n.removeEventListener("keydown",J),b},Ce=function(i){var a=i.some(function(l){var d=Array.from(l.removedNodes);return d.some(function(u){return u===o.mostRecentlyFocusedNode})});a&&P(T())},S=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Ce):void 0,O=function(){S&&(S.disconnect(),o.active&&!o.paused&&o.containers.map(function(i){S.observe(i,{subtree:!0,childList:!0})}))};return b={get active(){return o.active},get paused(){return o.paused},activate:function(i){if(o.active)return this;var a=m(i,"onActivate"),l=m(i,"onPostActivate"),d=m(i,"checkCanFocusTrap");d||D(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,a==null||a();var u=function(){d&&D(),Q(),O(),l==null||l()};return d?(d(o.containers.concat()).then(u,u),this):(u(),this)},deactivate:function(i){if(!o.active)return this;var a=ie({onDeactivate:r.onDeactivate,onPostDeactivate:r.onPostDeactivate,checkCanReturnFocus:r.checkCanReturnFocus},i);clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,Z(),o.active=!1,o.paused=!1,O(),ae.deactivateTrap(c,b);var l=m(a,"onDeactivate"),d=m(a,"onPostDeactivate"),u=m(a,"checkCanReturnFocus"),h=m(a,"returnFocus","returnFocusOnDeactivate");l==null||l();var p=function(){oe(function(){h&&P(q(o.nodeFocusedBeforeActivation)),d==null||d()})};return h&&u?(u(q(o.nodeFocusedBeforeActivation)).then(p,p),this):(p(),this)},pause:function(i){if(o.paused||!o.active)return this;var a=m(i,"onPause"),l=m(i,"onPostPause");return o.paused=!0,a==null||a(),Z(),O(),l==null||l(),this},unpause:function(i){if(!o.paused||!o.active)return this;var a=m(i,"onUnpause"),l=m(i,"onPostUnpause");return o.paused=!1,a==null||a(),D(),Q(),O(),l==null||l(),this},updateContainerElements:function(i){var a=[].concat(i).filter(Boolean);return o.containers=a.map(function(l){return typeof l=="string"?n.querySelector(l):l}),o.active&&D(),O(),this}},b.updateContainerElements(e),b};function st(s,e){const{el:t}=s,n=t;if(!n)return;const c={clickOutsideDeactivates:!0,escapeDeactivates:!1,fallbackFocus:n,setReturnFocus:r=>(me(r),!1),...e==null?void 0:e.focusTrapOptions,document:t.ownerDocument,tabbableOptions:Ie,trapStack:De};s.focusTrap=rt(n,c)}function se(s,e){var t;s.focusTrapDisabled||(t=s.focusTrap)==null||t.activate(e)}function j(s,e){var t;(t=s.focusTrap)==null||t.deactivate(e)}function ct(s){var e;(e=s.focusTrap)==null||e.updateContainerElements(s.el)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function ce(s,e){return(s+e)%e}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const lt=(s,e)=>{const t=s.level?`h${s.level}`:"div";return delete s.level,v(t,{class:s.class,key:s.key},e)};/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */class dt{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,n=e.find(c=>t.has(c));return t.get(n)},this.togglePopovers=e=>{const t=e.composedPath(),n=this.queryPopover(t);n&&!n.triggerDisabled&&(n.open=!n.open),Array.from(this.registeredElements.values()).filter(c=>c!==n&&c.autoClose&&c.open&&!t.includes(c)).forEach(c=>c.open=!1)},this.keyDownHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():ge(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{He(e)||this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){window.addEventListener("click",this.clickHandler),window.addEventListener("keydown",this.keyDownHandler)}removeListeners(){window.removeEventListener("click",this.clickHandler),window.removeEventListener("keydown",this.keyDownHandler)}}const k={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContainer:"headerContainer",headerContent:"header-content",heading:"heading"},ut="auto",le="aria-controls",de="aria-expanded",ft=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset, left, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{inset-block-start:-5px}:host([data-placement^=top]) .calcite-floating-ui-anim{inset-block-start:5px}:host([data-placement^=left]) .calcite-floating-ui-anim{left:5px}:host([data-placement^=right]) .calcite-floating-ui-anim{left:-5px}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;inset-block:0;left:0}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",ht=ft,ue=new dt,pt=pe(class extends ve{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=L(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=L(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=L(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=L(this,"calcitePopoverOpen",6),this.mutationObserver=Je("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${be()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?Se(t,e):null},this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),Ke(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:n,effectiveReferenceElement:c}=this;e&&n&&!c&&console.warn(`${t.tagName}: reference-element id "${n}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(de,$(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(le,t),ue.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(le),e.removeAttribute(de)),ue.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=ze,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=ut,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?j(this):se(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){te(this),this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){qe(this,this.effectiveLocale)}connectedCallback(){var e;(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),$e(this),Ge(this),st(this),requestAnimationFrame(()=>this.setUpReferenceElement(this.hasLoaded))}async componentWillLoad(){await Ye(this),Ee(this)}componentDidLoad(){ye(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.open&&te(this),this.hasLoaded=!0}disconnectedCallback(){var e;(e=this.mutationObserver)==null||e.disconnect(),this.removeReferences(),_e(this),We(this),Ue(this,this.effectiveReferenceElement,this.el),j(this)}async reposition(e=!1){const{el:t,effectiveReferenceElement:n,placement:c,overlayPositioning:r,flipDisabled:o,filteredFlipPlacements:b,offsetDistance:m,offsetSkidding:y,arrowEl:w}=this;return je(this,{floatingEl:t,referenceEl:n,overlayPositioning:r,placement:c,flipDisabled:o,flipPlacements:b,offsetDistance:m,offsetSkidding:y,arrowEl:w,type:"popover"},e)}async setFocus(){await we(this),Oe(this.el),Re(this.el)}async updateFocusTrapElements(){ct(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return(typeof e=="string"?Me(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),se(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),j(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?v("div",{class:k.closeButtonContainer,key:k.closeButtonContainer},v("calcite-action",{appearance:"transparent",class:k.closeButton,onClick:this.hide,ref:n=>this.closeButtonEl=n,scale:this.scale,text:e.close},v("calcite-icon",{icon:"x",scale:Qe(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,n=e?v(lt,{class:k.heading,level:t},e):null;return n?v("div",{class:k.header,key:k.header},n,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:n,open:c,pointerDisabled:r,floatingLayout:o}=this,b=e&&c,m=!b,y=r?null:v(Xe,{floatingLayout:o,key:"floating-arrow",ref:this.storeArrowEl});return v(Be,{key:"a563d48090d6e6c0c138023e169667834f657c4c","aria-hidden":$(m),"aria-label":n,"aria-live":"polite","calcite-hydrated-hidden":m,id:this.getId(),role:"dialog"},v("div",{key:"73053dbdce2cfc68fcd42667089d611e81010955",class:{[k.container]:!0,[ee.animation]:!0,[ee.animationActive]:b},ref:this.setTransitionEl},y,v("div",{key:"1fbcd45ee42b10a67881ced74db2db051231c94d",class:{[k.hasHeader]:!!t,[k.headerContainer]:!0}},this.renderHeader(),v("div",{key:"522abe801b98787863aac14d990b948d2d286156",class:k.content},v("slot",{key:"022a8f690288acdbac4ec1b3eccf807ffe382d5d"})),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ht}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]},void 0,{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}]);function Te(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,pt);break;case"calcite-action":customElements.get(e)||ke();break;case"calcite-icon":customElements.get(e)||Pe();break;case"calcite-loader":customElements.get(e)||xe();break}})}Te();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const fe={menu:"menu",defaultTrigger:"default-trigger"},he={tooltip:"tooltip",trigger:"trigger"},vt={menu:"ellipsis"},mt="data-active",bt=":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}",gt=bt,Et=["ArrowUp","ArrowDown","End","Home"],yt=pe(class extends ve{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=L(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid=`calcite-action-menu-${be()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:c}=this,r=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==r&&(this.disconnectMenuButtonEl(),this.menuButtonEl=r,this.setTooltipReferenceElement(),r&&(r.active=n,r.setAttribute("aria-controls",t),r.setAttribute("aria-expanded",$(n)),r.setAttribute("aria-haspopup","true"),r.id||(r.id=e),r.label||(r.label=c),r.text||(r.text=c),r.addEventListener("click",this.menuButtonClick),r.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("click",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-action"));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=()=>{this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter(n=>n==null?void 0:n.matches("calcite-tooltip"));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:c}=this;e&&(e.referenceElement=!t&&!c?n:null)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:c}=this,r=`${n}-action-${t}`;e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=r),e.toggleAttribute(mt,t===c)},this.updateActions=e=>{e==null||e.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).reduce((n,c)=>c!=null&&c.matches("calcite-action")?(n.push(c),n):c!=null&&c.matches("calcite-action-group")?n.concat(Array.from(c.querySelectorAll("calcite-action"))):n,[]);this.actionElements=t.filter(n=>!n.disabled&&!n.hidden)},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:c,open:r}=this;if(n.length){if(ge(t)){if(e.preventDefault(),!r){this.toggleOpen();return}const o=n[c];o?o.click():this.toggleOpen(!1)}if(t==="Tab"){this.open=!1;return}if(t==="Escape"){this.toggleOpen(!1),e.preventDefault();return}this.handleActionNavigation(e,t,n)}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,Et))return;if(e.preventDefault(),!this.open){this.toggleOpen(),(t==="Home"||t==="ArrowDown")&&(this.activeMenuItemIndex=0),(t==="End"||t==="ArrowUp")&&(this.activeMenuItemIndex=n.length-1);return}t==="Home"&&(this.activeMenuItemIndex=0),t==="End"&&(this.activeMenuItemIndex=n.length-1);const c=this.activeMenuItemIndex;t==="ArrowUp"&&(this.activeMenuItemIndex=ce(Math.max(c-1,-1),n.length)),t==="ArrowDown"&&(this.activeMenuItemIndex=ce(c+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=(e=!this.open)=>{this.el.addEventListener("calcitePopoverOpen",this.toggleOpenEnd),this.open=e},this.handlePopoverOpen=()=>{this.open=!0},this.handlePopoverClose=()=>{this.open=!1},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}connectedCallback(){this.connectMenuButtonEl()}componentWillLoad(){Ee(this)}componentDidLoad(){ye(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await we(this),me(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:c}=this;return v("slot",{name:he.trigger,onSlotchange:this.setMenuButtonEl},v("calcite-action",{appearance:e,class:fe.defaultTrigger,icon:vt.menu,ref:this.setDefaultMenuButtonEl,scale:n,text:t,textEnabled:c}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:c,menuButtonEl:r,label:o,placement:b,overlayPositioning:m,flipPlacements:y}=this,w=e[t],T=(w==null?void 0:w.id)||null;return v("calcite-popover",{autoClose:!0,flipPlacements:y,focusTrapDisabled:!0,label:o,offsetDistance:0,onCalcitePopoverClose:this.handlePopoverClose,onCalcitePopoverOpen:this.handlePopoverOpen,open:n,overlayPositioning:m,placement:b,pointerDisabled:!0,referenceElement:r},v("div",{"aria-activedescendant":T,"aria-labelledby":r==null?void 0:r.id,class:fe.menu,id:c,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},v("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return v(Ae,{key:"d13aa4f3d43fb5651c0487ccfa456813f69955d2"},this.renderMenuButton(),this.renderMenuItems(),v("slot",{key:"b63d187516c766db6a1b1db3df34050fdec9e6ce",name:he.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find(n=>n===e)}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return gt}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}]);function wt(){if(typeof customElements>"u")return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,yt);break;case"calcite-action":customElements.get(e)||ke();break;case"calcite-icon":customElements.get(e)||Pe();break;case"calcite-loader":customElements.get(e)||xe();break;case"calcite-popover":customElements.get(e)||Te();break}})}wt();export{lt as H,he as S,wt as a,j as b,st as c,Te as d,se as e,ct as u};