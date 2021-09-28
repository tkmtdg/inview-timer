eval('var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOw'+
'nProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,i)=>e in t?__defProp(t,e,{enumerable:!'+
'0,configurable:!0,writable:!0,value:i}):t[e]=i,__spreadValues=(t,e)=>{for(var i in e||(e={}))__hasOwnProp.call(e,i)&&__d'+
'efNormalProp(t,i,e[i]);if(__getOwnPropSymbols)for(var i of __getOwnPropSymbols(e))__propIsEnum.call(e,i)&&__defNormalPro'+
'p(t,i,e[i]);return t},__require="undefined"!=typeof require?require:t=>{throw new Error(\'Dynamic require of "\'+t+\'" is n'+
'ot supported\')};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeo'+
'f define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Lalo=e()}(this,(function(){"use str'+
'ict";var t=new class{constructor(){this.debug=!1}get debug(){return this._debug}set debug(t){this._debug=t}log(...t){thi'+
's._debug&&console.log("[lalo]",...t)}};class e{static get TARGET_INVIEW(){return"target inview"}static get TARGET_OUTVIE'+
'W(){return"target outview"}static get TIMER_SET(){return"timer set"}static get TIMER_TIMEDOUT(){return"timer timedout"}s'+
'tatic get TIMER_LOOP_LIMIT_REACHED(){return"timer loop limit reached"}static get TIMER_TERMINATED(){return"timer termina'+
'ted"}static get TIMER_CANCELED(){return"timer canceled"}}class i{constructor(t=null){this.target=null,this.timerID=null,'+
'this.timeout=3e3,this.timerLoop=!1,this.timerLoopLimit=null,t&&Object.assign(this,t),this.refreshId(),this._timerLoopCou'+
'nt=0}get id(){return this._id}get target(){return this._target}set target(t){this._target=t}get timerID(){return this._t'+
'imerID}set timerID(t){this._timerID=t}get timeout(){return this._timeout}set timeout(t){this._timeout=t}get timerLoop(){'+
'return this._timerLoop}set timerLoop(t){this._timerLoop=t}get timerLoopLimit(){return this._timerLoopLimit}set timerLoop'+
'Limit(t){this._timerLoopLimit=t}get timerLoopLimitReached(){return this.timerLoopLimit>0&&this.timerLoopCount>this.timer'+
'LoopLimit}get timerLoopCount(){return this._timerLoopCount}get describe(){return{eventTargetId:this.target.id,eventTarge'+
't:this.target,inviewTargetId:this.id,inviewTarget:this}}refreshId(){this._id=((t=21)=>{let e="",i=crypto.getRandomValues'+
'(new Uint8Array(t));for(;t--;){let r=63&i[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}'+
'return e})(4)}logEvent(...e){t.log(...e,this.describe)}makeEvent(t){return new CustomEvent(t,{detail:this.describe})}dis'+
'patch(t){this.target.dispatchEvent(this.makeEvent(t)),this.logEvent(t)}setTimer(){if(this.timerLoopLimitReached)return v'+
'oid this.logEvent("already timer loop limit reached");this.logEvent(e.TIMER_SET);const t=window.setTimeout((()=>{if(this'+
'.dispatch(e.TIMER_TIMEDOUT),this.timerID=null,this.timerLoop){if(this._timerLoopCount++,this.timerLoopLimitReached)retur'+
'n this.logEvent(e.TIMER_LOOP_LIMIT_REACHED),void this.dispatch(e.TIMER_LOOP_LIMIT_REACHED);this.logEvent(`timer loop try'+
'ing #${this.timerLoopCount}`),this.setTimer()}else this.logEvent(e.TIMER_TERMINATED),this.dispatch(e.TIMER_TERMINATED)})'+
',this.timeout);this.timerID=t}clearTimer(){this.timerID&&(window.clearTimeout(this.timerID),this.dispatch(e.TIMER_CANCEL'+
'ED))}}return class{constructor(t=null){this.debug=!1,this.observeTargets=[],this.inviewTargets=[],this.inviewTargetOptio'+
'ns=null,this.intersectionObserverOptions=null,t&&Object.assign(this,t)}get debug(){return this._debug}set debug(e){this.'+
'_debug=e,t.debug=this._debug}get observeTargets(){return this._observeTargets}set observeTargets(t){this._observeTargets'+
'=t}get inviewTargets(){return this._inviewTargets}set inviewTargets(t){this._inviewTargets=t}get inviewTargetOptions(){r'+
'eturn this._inviewTargetOptions}set inviewTargetOptions(t){this._inviewTargetOptions=t}get intersectionObserverOptions()'+
'{return this._intersectionObserverOptions}set intersectionObserverOptions(t){this._intersectionObserverOptions=t}avoidId'+
'Collision(e){this.inviewTargets.some((t=>e.id===t.id))&&(t.log(`ID collision detected: "${e.id}"`),e.refreshId(),this.av'+
'oidIdCollision(e))}observe(){const t=new IntersectionObserver((t=>{for(const i of t)for(const t of this.inviewTargets)if'+
'(t.target===i.target){t.inview=i.isIntersecting;const r=t.inview?e.TARGET_INVIEW:e.TARGET_OUTVIEW;t.dispatch(r);break}})'+
',this.intersectionObserverOptions);for(const r of this.observeTargets){const s=new i(__spreadValues({debug:this.debug,ta'+
'rget:r},this.inviewTargetOptions));this.avoidIdCollision(s),this.inviewTargets.push(s),s.target=r,r.addEventListener(e.T'+
'ARGET_INVIEW,(()=>{s.setTimer()})),r.addEventListener(e.TARGET_OUTVIEW,(()=>{s.clearTimer()})),r.addEventListener(e.TIME'+
'R_TIMEDOUT,(()=>{})),r.addEventListener(e.TIMER_TERMINATED,(()=>{t.unobserve(r)})),r.addEventListener(e.TIMER_CANCELED,('+
'()=>{})),r.addEventListener(e.TIMER_LOOP_LIMIT_REACHED,(()=>{t.unobserve(r)})),t.observe(r)}}}}));');
