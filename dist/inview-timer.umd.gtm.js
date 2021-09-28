eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,t,i)=>t in e?__defProp(e,t,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):e[t]=i,__spreadValues=(e,t)=>{for(var i in t||(t={}))__hasOwnProp.call(t,i)&&__d'+
'efNormalProp(e,i,t[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(t))__propIsEnum.call(t,i)&&__defNormalPro'+
'p(e,i,t[i]);return e},__require="undefined"!=typeof require?require:e=>{throw new Error(\'Dynamic require of "\'+e+\'" is n'+
'ot supported\')},__publicField=(e,t,i)=>(__defNormalProp(e,"symbol"!=typeof t?t+"":t,i),i);!function(e,t){"object"==typeo'+
'f exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!'+
'=typeof globalThis?globalThis:e||self).InviewTimerModule=t()}(this,(function(){"use strict";var e=new class{constructor('+
'){this.debug=!1}get debug(){return this._debug}set debug(e){this._debug=e}log(...e){this._debug&&console.log(...e)}};cla'+
'ss t{constructor(e=null){this.target=null,this.timerID=null,this.timeout=3e3,this.timerLoop=!1,this.timerLoopLimit=null,'+
'e&&Object.assign(this,e),this.refreshId(),this._timerLoopCount=0}get id(){return this._id}get target(){return this._targ'+
'et}set target(e){this._target=e}get timerID(){return this._timerID}set timerID(e){this._timerID=e}get timeout(){return t'+
'his._timeout}set timeout(e){this._timeout=e}get timerLoop(){return this._timerLoop}set timerLoop(e){this._timerLoop=e}ge'+
't timerLoopLimit(){return this._timerLoopLimit}set timerLoopLimit(e){this._timerLoopLimit=e}get timerLoopLimitReached(){'+
'return this.timerLoopLimit>0&&this.timerLoopCount>this.timerLoopLimit}get timerLoopCount(){return this._timerLoopCount}g'+
'et describe(){return{eventTargetId:this.target.id,eventTarget:this.target,inviewTargetId:this.id,inviewTarget:this}}refr'+
'eshId(){this._id=((e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let r=63&i[e];t+=r<36?r.toStr'+
'ing(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return t})(4)}log(...t){e.log("[InviewTarget]",...t)}logEven'+
't(...e){this.log(...e,this.describe)}makeEvent(e){return new CustomEvent(e,{detail:this.describe})}dispatch(e){this.targ'+
'et.dispatchEvent(this.makeEvent(e)),this.logEvent(e)}setTimer(){if(this.timerLoopLimitReached)return void this.logEvent('+
'"already timer loop limit reached");this.logEvent("timer set");const e=window.setTimeout((()=>{if(this.dispatch("timer t'+
'imedout"),this.timerID=null,this.timerLoop){if(this._timerLoopCount++,this.timerLoopLimitReached)return this.logEvent("t'+
'imer loop limit reached"),void this.dispatch("timer loop limit reached");this.logEvent(`timer loop trying #${this.timerL'+
'oopCount}`),this.setTimer()}else this.logEvent("timer terminated"),this.dispatch("timer terminated")}),this.timeout);thi'+
's.timerID=e}clearTimer(){this.timerID&&(window.clearTimeout(this.timerID),this.dispatch("timer canceled"))}}return class'+
'{constructor(e=null){__publicField(this,"avoidIdCollision",(e=>{this.inviewTargets.some((t=>e.id===t.id))&&(this.log(`ID'+
' collision detected: "${e.id}"`),e.refreshId(),this.avoidIdCollision(e))})),this.debug=!1,this.observeTargets=[],this.in'+
'viewTargets=[],this.inviewTargetOptions=null,this.intersectionObserverOptions=null,e&&Object.assign(this,e)}get debug(){'+
'return this._debug}set debug(t){this._debug=t,e.debug=this._debug}get observeTargets(){return this._observeTargets}set o'+
'bserveTargets(e){this._observeTargets=e}get inviewTargets(){return this._inviewTargets}set inviewTargets(e){this._inview'+
'Targets=e}get inviewTargetOptions(){return this._inviewTargetOptions}set inviewTargetOptions(e){this._inviewTargetOption'+
's=e}get intersectionObserverOptions(){return this._intersectionObserverOptions}set intersectionObserverOptions(e){this._'+
'intersectionObserverOptions=e}log(...t){e.log("[InviewTimer]",...t)}observe(){const e=new IntersectionObserver(((e,t)=>{'+
'for(const i of e)for(const e of this.inviewTargets)if(e.target===i.target){e.inview=i.isIntersecting;const t=this.inview'+
'Targets.find(((e,t,r)=>e.target===i.target)),r=e.inview?"inview in":"inview out";t.dispatch(r);break}}),this.intersectio'+
'nObserverOptions);for(const i of this.observeTargets){const r=new t(__spreadValues({debug:this.debug,target:i},this.invi'+
'ewTargetOptions));this.avoidIdCollision(r),this.inviewTargets.push(r),r.target=i,i.addEventListener("inview in",(e=>{thi'+
's.log(e.type,r.describe),r.setTimer()})),i.addEventListener("inview out",(e=>{this.log(e.type,r.describe),r.clearTimer()'+
'})),i.addEventListener("timer timedout",(e=>{this.log(e.type,r.describe)})),i.addEventListener("timer terminated",(t=>{t'+
'his.log(t.type,r.describe),e.unobserve(i)})),i.addEventListener("timer canceled",(e=>{this.log(e.type,r.describe)})),i.a'+
'ddEventListener("timer loop limit reached",(t=>{this.log(t.type,r.describe),e.unobserve(i)})),e.observe(i)}}}}));');
