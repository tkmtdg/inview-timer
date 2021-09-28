eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__d'+
'efNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalPro'+
'p(t,i,e[i]);return t},__require="undefined"!=typeof require?require:t=>{throw new Error(\'Dynamic require of "\'+t+\'" is n'+
'ot supported\')},__publicField=(t,e,i)=>(__defNormalProp(t,"symbol"!=typeof e?e+"":e,i),i);!function(t,e){"object"==typeo'+
'f exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!'+
'=typeof globalThis?globalThis:t||self).InviewTimerModule=e()}(this,(function(){"use strict";var t=new class{constructor('+
'){this.debug=!1}get debug(){return this._debug}set debug(t){this._debug=t}log(...t){this._debug&&console.log(...t)}};cla'+
'ss e{static get TARGET_INVIEW(){return"target inview"}static get TARGET_OUTVIEW(){return"target outview"}static get TIME'+
'R_SET(){return"timer set"}static get TIMER_TIMEDOUT(){return"timer timedout"}static get TIMER_LOOP_LIMIT_REACHED(){retur'+
'n"timer loop limit reached"}static get TIMER_TERMINATED(){return"timer terminated"}static get TIMER_CANCELED(){return"ti'+
'mer canceled"}}class i{constructor(t=null){this.target=null,this.timerID=null,this.timeout=3e3,this.timerLoop=!1,this.ti'+
'merLoopLimit=null,t&&Object.assign(this,t),this.refreshId(),this._timerLoopCount=0}get id(){return this._id}get target()'+
'{return this._target}set target(t){this._target=t}get timerID(){return this._timerID}set timerID(t){this._timerID=t}get '+
'timeout(){return this._timeout}set timeout(t){this._timeout=t}get timerLoop(){return this._timerLoop}set timerLoop(t){th'+
'is._timerLoop=t}get timerLoopLimit(){return this._timerLoopLimit}set timerLoopLimit(t){this._timerLoopLimit=t}get timerL'+
'oopLimitReached(){return this.timerLoopLimit>0&&this.timerLoopCount>this.timerLoopLimit}get timerLoopCount(){return this'+
'._timerLoopCount}get describe(){return{eventTargetId:this.target.id,eventTarget:this.target,inviewTargetId:this.id,invie'+
'wTarget:this}}refreshId(){this._id=((t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let r=63&i['+
't];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e})(4)}log(...e){t.log("[InviewTarg'+
'et]",...e)}logEvent(...t){this.log(...t,this.describe)}makeEvent(t){return new CustomEvent(t,{detail:this.describe})}dis'+
'patch(t){this.target.dispatchEvent(this.makeEvent(t)),this.logEvent(t)}setTimer(){if(this.timerLoopLimitReached)return v'+
'oid this.logEvent("already timer loop limit reached");this.logEvent(e.TIMER_SET);const t=window.setTimeout((()=>{if(this'+
'.dispatch(e.TIMER_TIMEDOUT),this.timerID=null,this.timerLoop){if(this._timerLoopCount++,this.timerLoopLimitReached)retur'+
'n this.logEvent(e.TIMER_LOOP_LIMIT_REACHED),void this.dispatch(e.TIMER_LOOP_LIMIT_REACHED);this.logEvent(`timer loop try'+
'ing #${this.timerLoopCount}`),this.setTimer()}else this.logEvent(e.TIMER_TERMINATED),this.dispatch(e.TIMER_TERMINATED)})'+
',this.timeout);this.timerID=t}clearTimer(){this.timerID&&(window.clearTimeout(this.timerID),this.dispatch(e.TIMER_CANCEL'+
'ED))}}return class{constructor(t=null){__publicField(this,"avoidIdCollision",(t=>{this.inviewTargets.some((e=>t.id===e.i'+
'd))&&(this.log(`ID collision detected: "${t.id}"`),t.refreshId(),this.avoidIdCollision(t))})),this.debug=!1,this.observe'+
'Targets=[],this.inviewTargets=[],this.inviewTargetOptions=null,this.intersectionObserverOptions=null,t&&Object.assign(th'+
'is,t)}get debug(){return this._debug}set debug(e){this._debug=e,t.debug=this._debug}get observeTargets(){return this._ob'+
'serveTargets}set observeTargets(t){this._observeTargets=t}get inviewTargets(){return this._inviewTargets}set inviewTarge'+
'ts(t){this._inviewTargets=t}get inviewTargetOptions(){return this._inviewTargetOptions}set inviewTargetOptions(t){this._'+
'inviewTargetOptions=t}get intersectionObserverOptions(){return this._intersectionObserverOptions}set intersectionObserve'+
'rOptions(t){this._intersectionObserverOptions=t}log(...e){t.log("[InviewTimer]",...e)}observe(){const t=new Intersection'+
'Observer(((t,i)=>{for(const r of t)for(const t of this.inviewTargets)if(t.target===r.target){t.inview=r.isIntersecting;c'+
'onst i=t.inview?e.TARGET_INVIEW:e.TARGET_OUTVIEW;t.dispatch(i);break}}),this.intersectionObserverOptions);for(const r of'+
' this.observeTargets){const s=new i(__spreadValues({debug:this.debug,target:r},this.inviewTargetOptions));this.avoidIdCo'+
'llision(s),this.inviewTargets.push(s),s.target=r,r.addEventListener(e.TARGET_INVIEW,(t=>{s.setTimer()})),r.addEventListe'+
'ner(e.TARGET_OUTVIEW,(t=>{s.clearTimer()})),r.addEventListener(e.TIMER_TIMEDOUT,(t=>{})),r.addEventListener(e.TIMER_TERM'+
'INATED,(e=>{t.unobserve(r)})),r.addEventListener(e.TIMER_CANCELED,(t=>{})),r.addEventListener(e.TIMER_LOOP_LIMIT_REACHED'+
',(e=>{t.unobserve(r)})),t.observe(r)}}}}));');
