eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,i)=>t in e?__defProp(e,t,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):e[t]=i,__spreadValues=(e,t)=>{for(var i in t||(t={}))__hasOwnProp.call(t,i)&&__d'+
'efNormalProp(e,i,t[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(t))__propIsEnum.call(t,i)&&__defNormalPro'+
'p(e,i,t[i]);return e},__require="undefined"!=typeof require?require:e=>{throw new Error(\'Dynamic require of "\'+e+\'" is n'+
'ot supported\')};!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define'+
'&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).InviewTimerModule={})}(this,('+
'function(e){"use strict";class t{constructor(e=null){this.debug=!1,this.target=null,this.timerID=null,this.timeout=3e3,t'+
'his.timerLoop=!1,e&&Object.assign(this,e)}get debug(){return this._debug}set debug(e){this._debug=e}get target(){return '+
'this._target}set target(e){this._target=e}get timerID(){return this._timerID}set timerID(e){this._timerID=e}get timeout('+
'){return this._timeout}set timeout(e){this._timeout=e}get timerLoop(){return this._timerLoop}set timerLoop(e){this._time'+
'rLoop=e}log(...e){this.debug&&console.log(this.constructor.name,...e)}makeEvent(e){return new CustomEvent(e,{detail:{inv'+
'iewTarget:this.target}})}dispatch(e){this.target.dispatchEvent(this.makeEvent(e))}setTimer(){this.log("timer set",{event'+
'Target:this.target});const e=window.setTimeout((()=>{this.timerID=null,this.log("timer timedout",{eventTarget:this.targe'+
't}),this.dispatch("timer timedout"),this.timerLoop&&(this.log("timer loop",{eventTarget:this.target}),this.setTimer())})'+
',this.timeout);this.timerID=e}clearTimer(){this.timerID&&(window.clearTimeout(this.timerID),this.log("timer canceled",{e'+
'ventTarget:this.target}),this.dispatch("timer canceled"))}}e.InviewTimer=class{constructor(e=null){this.debug=!1,this.ob'+
'serveTargets=[],this.inviewTargets=[],this.inviewTargetOptions=null,this.intersectionObserverOptions=null,e&&Object.assi'+
'gn(this,e)}get debug(){return this._debug}set debug(e){this._debug=e}get observeTargets(){return this._observeTargets}se'+
't observeTargets(e){this._observeTargets=e}get inviewTargets(){return this._inviewTargets}set inviewTargets(e){this._inv'+
'iewTargets=e}get inviewTargetOptions(){return this._inviewTargetOptions}set inviewTargetOptions(e){this._inviewTargetOpt'+
'ions=e}get intersectionObserverOptions(){return this._intersectionObserverOptions}set intersectionObserverOptions(e){thi'+
's._intersectionObserverOptions=e}log(...e){this.debug&&console.log(this.constructor.name,...e)}observe(){const e=new Int'+
'ersectionObserver(((e,t)=>{for(const i of e)for(const e of this.inviewTargets)if(e.target===i.target){e.inview=i.isInter'+
'secting;const t=this.inviewTargets.find(((e,t,r)=>e.target===i.target)),r=e.inview?"inview in":"inview out";t.dispatch(r'+
');break}}),this.intersectionObserverOptions);for(const i of this.observeTargets){const r=new t(__spreadValues({debug:thi'+
's.debug,target:i},this.inviewTargetOptions));this.inviewTargets.push(r),r.target=i,i.addEventListener("inview in",(e=>{t'+
'his.log(e.type,{eventTarget:e.target,inviewTarget:r}),r.setTimer()})),i.addEventListener("inview out",(e=>{this.log(e.ty'+
'pe,{eventTarget:e.target,inviewTarget:r}),r.clearTimer()})),i.addEventListener("timer timedout",(e=>{this.log(e.type,{ev'+
'entTarget:e.target,inviewTarget:r})})),i.addEventListener("timer canceled",(e=>{this.log(e.type,{eventTarget:e.target,in'+
'viewTarget:r})})),e.observe(i)}}},Object.defineProperty(e,"__esModule",{value:!0}),e[Symbol.toStringTag]="Module"}));');
