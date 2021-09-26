eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__d'+
'efNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalPro'+
'p(t,i,e[i]);return t},__require="undefined"!=typeof require?require:t=>{throw new Error(\'Dynamic require of "\'+t+\'" is n'+
'ot supported\')},__publicField=(t,e,i)=>(__defNormalProp(t,"symbol"!=typeof e?e+"":e,i),i);!function(t,e){"object"==typeo'+
'f exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!'+
'=typeof globalThis?globalThis:t||self).InviewTimerModule=e()}(this,(function(){"use strict";var t=new class{constructor('+
'){this.debug=!1}get debug(){return this._debug}set debug(t){this._debug=t}log(...t){this._debug&&console.log(...t)}};cla'+
'ss e{constructor(t=null){this.target=null,this.timerID=null,this.timeout=3e3,this.timerLoop=!1,this.timerLoopLimit=null,'+
't&&Object.assign(this,t),this.refreshId(),this._timerLoopCount=0}get id(){return this._id}get target(){return this._targ'+
'et}set target(t){this._target=t}get timerID(){return this._timerID}set timerID(t){this._timerID=t}get timeout(){return t'+
'his._timeout}set timeout(t){this._timeout=t}get timerLoop(){return this._timerLoop}set timerLoop(t){this._timerLoop=t}ge'+
't timerLoopLimit(){return this._timerLoopLimit}set timerLoopLimit(t){this._timerLoopLimit=t}get timerLoopCount(){return '+
'this._timerLoopCount}get describe(){return{eventTargetId:this.target.id,eventTarget:this.target,inviewTargetId:this.id,i'+
'nviewTarget:this}}refreshId(){this._id=((t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=6'+
'3&i[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})(4)}log(...e){t.log(this.con'+
'structor.name,...e)}logEvent(...t){this.log(...t,this.describe)}makeEvent(t){return new CustomEvent(t,{detail:this.descr'+
'ibe})}dispatch(t){this.target.dispatchEvent(this.makeEvent(t)),this.logEvent(t)}setTimer(){this.logEvent("timer set");co'+
'nst t=window.setTimeout((()=>{if(this.dispatch("timer timedout"),this.timerID=null,this.timerLoop){if(this.timerLoopLimi'+
't>0&&this.timerLoopCount>=this.timerLoopLimit)return void this.logEvent("timer loop limit reached");this._timerLoopCount'+
'++,this.logEvent(`timer loop trying #${this.timerLoopCount}`),this.setTimer()}}),this.timeout);this.timerID=t}clearTimer'+
'(){this.timerID&&(window.clearTimeout(this.timerID),this.dispatch("timer canceled"))}}return class{constructor(t=null){_'+
'_publicField(this,"avoidIdCollision",(t=>{this.inviewTargets.some((e=>t.id===e.id))&&(this.log(`ID collision detected: "'+
'${t.id}"`),t.refreshId(),this.avoidIdCollision(t))})),this.debug=!1,this.observeTargets=[],this.inviewTargets=[],this.in'+
'viewTargetOptions=null,this.intersectionObserverOptions=null,t&&Object.assign(this,t)}get debug(){return this._debug}set'+
' debug(e){this._debug=e,t.debug=this._debug}get observeTargets(){return this._observeTargets}set observeTargets(t){this.'+
'_observeTargets=t}get inviewTargets(){return this._inviewTargets}set inviewTargets(t){this._inviewTargets=t}get inviewTa'+
'rgetOptions(){return this._inviewTargetOptions}set inviewTargetOptions(t){this._inviewTargetOptions=t}get intersectionOb'+
'serverOptions(){return this._intersectionObserverOptions}set intersectionObserverOptions(t){this._intersectionObserverOp'+
'tions=t}log(...e){t.log(this.constructor.name,...e)}observe(){const t=new IntersectionObserver(((t,e)=>{for(const i of t'+
')for(const t of this.inviewTargets)if(t.target===i.target){t.inview=i.isIntersecting;const e=this.inviewTargets.find(((t'+
',e,r)=>t.target===i.target)),r=t.inview?"inview in":"inview out";e.dispatch(r);break}}),this.intersectionObserverOptions'+
');for(const i of this.observeTargets){const r=new e(__spreadValues({debug:this.debug,target:i},this.inviewTargetOptions)'+
');this.avoidIdCollision(r),this.inviewTargets.push(r),r.target=i,i.addEventListener("inview in",(t=>{this.log(t.type,r.d'+
'escribe),r.setTimer()})),i.addEventListener("inview out",(t=>{this.log(t.type,r.describe),r.clearTimer()})),i.addEventLi'+
'stener("timer timedout",(t=>{this.log(t.type,r.describe)})),i.addEventListener("timer canceled",(t=>{this.log(t.type,r.d'+
'escribe)})),t.observe(i)}}}}));');
