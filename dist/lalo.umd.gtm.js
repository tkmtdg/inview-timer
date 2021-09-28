eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__d'+
'efNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalPro'+
'p(t,i,e[i]);return t},__require="undefined"!=typeof require?require:t=>{throw new Error(\'Dynamic require of "\'+t+\'" is n'+
'ot supported\')},__publicField=(t,e,i)=>(__defNormalProp(t,"symbol"!=typeof e?e+"":e,i),i);!function(t,e){"object"==typeo'+
'f exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!'+
'=typeof globalThis?globalThis:t||self).Lalo=e()}(this,(function(){"use strict";var t=new class{constructor(){this.debug='+
'!1}get debug(){return this._debug}set debug(t){this._debug=t}log(...t){this._debug&&console.log("[lalo]",...t)}};class e'+
'{static get TARGET_INVIEW(){return"target inview"}static get TARGET_OUTVIEW(){return"target outview"}static get TIMER_SE'+
'T(){return"timer set"}static get TIMER_TIMEDOUT(){return"timer timedout"}static get TIMER_LOOP_LIMIT_REACHED(){return"ti'+
'mer loop limit reached"}static get TIMER_TERMINATED(){return"timer terminated"}static get TIMER_CANCELED(){return"timer '+
'canceled"}}class i{constructor(t=null){this.target=null,this.timerID=null,this.timeout=3e3,this.timerLoop=!1,this.timerL'+
'oopLimit=null,t&&Object.assign(this,t),this.refreshId(),this._timerLoopCount=0}get id(){return this._id}get target(){ret'+
'urn this._target}set target(t){this._target=t}get timerID(){return this._timerID}set timerID(t){this._timerID=t}get time'+
'out(){return this._timeout}set timeout(t){this._timeout=t}get timerLoop(){return this._timerLoop}set timerLoop(t){this._'+
'timerLoop=t}get timerLoopLimit(){return this._timerLoopLimit}set timerLoopLimit(t){this._timerLoopLimit=t}get timerLoopL'+
'imitReached(){return this.timerLoopLimit>0&&this.timerLoopCount>this.timerLoopLimit}get timerLoopCount(){return this._ti'+
'merLoopCount}get describe(){return{eventTargetId:this.target.id,eventTarget:this.target,inviewTargetId:this.id,inviewTar'+
'get:this}}refreshId(){this._id=((t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&i[t];e'+
'+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})(4)}logEvent(...e){t.log(...e,this.d'+
'escribe)}makeEvent(t){return new CustomEvent(t,{detail:this.describe})}dispatch(t){this.target.dispatchEvent(this.makeEv'+
'ent(t)),this.logEvent(t)}setTimer(){if(this.timerLoopLimitReached)return void this.logEvent("already timer loop limit re'+
'ached");this.logEvent(e.TIMER_SET);const t=window.setTimeout((()=>{if(this.dispatch(e.TIMER_TIMEDOUT),this.timerID=null,'+
'this.timerLoop){if(this._timerLoopCount++,this.timerLoopLimitReached)return this.logEvent(e.TIMER_LOOP_LIMIT_REACHED),vo'+
'id this.dispatch(e.TIMER_LOOP_LIMIT_REACHED);this.logEvent(`timer loop trying #${this.timerLoopCount}`),this.setTimer()}'+
'else this.logEvent(e.TIMER_TERMINATED),this.dispatch(e.TIMER_TERMINATED)}),this.timeout);this.timerID=t}clearTimer(){thi'+
's.timerID&&(window.clearTimeout(this.timerID),this.dispatch(e.TIMER_CANCELED))}}return class{constructor(e=null){__publi'+
'cField(this,"avoidIdCollision",(e=>{this.inviewTargets.some((t=>e.id===t.id))&&(t.log(`ID collision detected: "${e.id}"`'+
'),e.refreshId(),this.avoidIdCollision(e))})),this.debug=!1,this.observeTargets=[],this.inviewTargets=[],this.inviewTarge'+
'tOptions=null,this.intersectionObserverOptions=null,e&&Object.assign(this,e)}get debug(){return this._debug}set debug(e)'+
'{this._debug=e,t.debug=this._debug}get observeTargets(){return this._observeTargets}set observeTargets(t){this._observeT'+
'argets=t}get inviewTargets(){return this._inviewTargets}set inviewTargets(t){this._inviewTargets=t}get inviewTargetOptio'+
'ns(){return this._inviewTargetOptions}set inviewTargetOptions(t){this._inviewTargetOptions=t}get intersectionObserverOpt'+
'ions(){return this._intersectionObserverOptions}set intersectionObserverOptions(t){this._intersectionObserverOptions=t}o'+
'bserve(){const t=new IntersectionObserver(((t,i)=>{for(const r of t)for(const t of this.inviewTargets)if(t.target===r.ta'+
'rget){t.inview=r.isIntersecting;const i=t.inview?e.TARGET_INVIEW:e.TARGET_OUTVIEW;t.dispatch(i);break}}),this.intersecti'+
'onObserverOptions);for(const r of this.observeTargets){const s=new i(__spreadValues({debug:this.debug,target:r},this.inv'+
'iewTargetOptions));this.avoidIdCollision(s),this.inviewTargets.push(s),s.target=r,r.addEventListener(e.TARGET_INVIEW,(t='+
'>{s.setTimer()})),r.addEventListener(e.TARGET_OUTVIEW,(t=>{s.clearTimer()})),r.addEventListener(e.TIMER_TIMEDOUT,(t=>{})'+
'),r.addEventListener(e.TIMER_TERMINATED,(e=>{t.unobserve(r)})),r.addEventListener(e.TIMER_CANCELED,(t=>{})),r.addEventLi'+
'stener(e.TIMER_LOOP_LIMIT_REACHED,(e=>{t.unobserve(r)})),t.observe(r)}}}}));');
