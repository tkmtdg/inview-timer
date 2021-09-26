eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__d'+
'efNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalPro'+
'p(t,i,e[i]);return t},__require="undefined"!=typeof require?require:t=>{throw new Error(\'Dynamic require of "\'+t+\'" is n'+
'ot supported\')};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define'+
'&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).InviewTimerModule={})}(this,('+
'function(t){"use strict";class e{constructor(t=null){this.debug=!1,this.target=null,this.timerID=null,this.timeout=3e3,t'+
'his.timerLoop=!1,this.timerLoopLimit=null,t&&Object.assign(this,t),this._timerLoopCount=0}get debug(){return this._debug'+
'}set debug(t){this._debug=t}get target(){return this._target}set target(t){this._target=t}get timerID(){return this._tim'+
'erID}set timerID(t){this._timerID=t}get timeout(){return this._timeout}set timeout(t){this._timeout=t}get timerLoop(){re'+
'turn this._timerLoop}set timerLoop(t){this._timerLoop=t}get timerLoopLimit(){return this._timerLoopLimit}set timerLoopLi'+
'mit(t){this._timerLoopLimit=t}get timerLoopCount(){return this._timerLoopCount}get describe(){return{eventTarget:this.ta'+
'rget,inviewTarget:this}}log(...t){this.debug&&console.log(this.constructor.name,...t)}logEvent(...t){this.log(...t,this.'+
'describe)}makeEvent(t){return new CustomEvent(t,{detail:this.describe})}dispatch(t){this.target.dispatchEvent(this.makeE'+
'vent(t)),this.logEvent(t)}setTimer(){this.logEvent("timer set");const t=window.setTimeout((()=>{if(this.dispatch("timer '+
'timedout"),this.timerID=null,this.timerLoop){if(this.timerLoopLimit>0&&this.timerLoopCount>=this.timerLoopLimit)return v'+
'oid this.logEvent("timer loop limit reached");this._timerLoopCount++,this.logEvent("timer loop trying #"+this.timerLoopC'+
'ount),this.setTimer()}}),this.timeout);this.timerID=t}clearTimer(){this.timerID&&(window.clearTimeout(this.timerID),this'+
'.dispatch("timer canceled"))}}t.InviewTimer=class{constructor(t=null){this.debug=!1,this.observeTargets=[],this.inviewTa'+
'rgets=[],this.inviewTargetOptions=null,this.intersectionObserverOptions=null,t&&Object.assign(this,t)}get debug(){return'+
' this._debug}set debug(t){this._debug=t}get observeTargets(){return this._observeTargets}set observeTargets(t){this._obs'+
'erveTargets=t}get inviewTargets(){return this._inviewTargets}set inviewTargets(t){this._inviewTargets=t}get inviewTarget'+
'Options(){return this._inviewTargetOptions}set inviewTargetOptions(t){this._inviewTargetOptions=t}get intersectionObserv'+
'erOptions(){return this._intersectionObserverOptions}set intersectionObserverOptions(t){this._intersectionObserverOption'+
's=t}log(...t){this.debug&&console.log(this.constructor.name,...t)}observe(){const t=new IntersectionObserver(((t,e)=>{fo'+
'r(const i of t)for(const t of this.inviewTargets)if(t.target===i.target){t.inview=i.isIntersecting;const e=this.inviewTa'+
'rgets.find(((t,e,r)=>t.target===i.target)),r=t.inview?"inview in":"inview out";e.dispatch(r);break}}),this.intersectionO'+
'bserverOptions);for(const i of this.observeTargets){const r=new e(__spreadValues({debug:this.debug,target:i},this.inview'+
'TargetOptions));this.inviewTargets.push(r),r.target=i,i.addEventListener("inview in",(t=>{this.log(t.type,{eventTarget:t'+
'.target,inviewTarget:r}),r.setTimer()})),i.addEventListener("inview out",(t=>{this.log(t.type,{eventTarget:t.target,invi'+
'ewTarget:r}),r.clearTimer()})),i.addEventListener("timer timedout",(t=>{this.log(t.type,{eventTarget:t.target,inviewTarg'+
'et:r})})),i.addEventListener("timer canceled",(t=>{this.log(t.type,{eventTarget:t.target,inviewTarget:r})})),t.observe(i'+
')}}},Object.defineProperty(t,"__esModule",{value:!0}),t[Symbol.toStringTag]="Module"}));');
