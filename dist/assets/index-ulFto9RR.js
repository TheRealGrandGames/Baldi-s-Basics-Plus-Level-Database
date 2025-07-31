(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=r(a);fetch(a.href,u)}})();var A={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),uo=Symbol.for("react.profiler"),lo=Symbol.for("react.provider"),co=Symbol.for("react.context"),fo=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),go=Symbol.for("react.memo"),mo=Symbol.for("react.lazy"),Zr=Symbol.iterator;function yo(n){return n===null||typeof n!="object"?null:(n=Zr&&n[Zr]||n["@@iterator"],typeof n=="function"?n:null)}var ji={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bi=Object.assign,$i={};function zt(n,t,r){this.props=n,this.context=t,this.refs=$i,this.updater=r||ji}zt.prototype.isReactComponent={};zt.prototype.setState=function(n,t){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,t,"setState")};zt.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Hi(){}Hi.prototype=zt.prototype;function Hn(n,t,r){this.props=n,this.context=t,this.refs=$i,this.updater=r||ji}var Gn=Hn.prototype=new Hi;Gn.constructor=Hn;Bi(Gn,zt.prototype);Gn.isPureReactComponent=!0;var ti=Array.isArray,Gi=Object.prototype.hasOwnProperty,Wn={current:null},Wi={key:!0,ref:!0,__self:!0,__source:!0};function zi(n,t,r){var s,a={},u=null,d=null;if(t!=null)for(s in t.ref!==void 0&&(d=t.ref),t.key!==void 0&&(u=""+t.key),t)Gi.call(t,s)&&!Wi.hasOwnProperty(s)&&(a[s]=t[s]);var _=arguments.length-2;if(_===1)a.children=r;else if(1<_){for(var w=Array(_),I=0;I<_;I++)w[I]=arguments[I+2];a.children=w}if(n&&n.defaultProps)for(s in _=n.defaultProps,_)a[s]===void 0&&(a[s]=_[s]);return{$$typeof:me,type:n,key:u,ref:d,props:a,_owner:Wn.current}}function _o(n,t){return{$$typeof:me,type:n.type,key:t,ref:n.ref,props:n.props,_owner:n._owner}}function zn(n){return typeof n=="object"&&n!==null&&n.$$typeof===me}function vo(n){var t={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(r){return t[r]})}var ei=/\/+/g;function Rn(n,t){return typeof n=="object"&&n!==null&&n.key!=null?vo(""+n.key):t.toString(36)}function je(n,t,r,s,a){var u=typeof n;(u==="undefined"||u==="boolean")&&(n=null);var d=!1;if(n===null)d=!0;else switch(u){case"string":case"number":d=!0;break;case"object":switch(n.$$typeof){case me:case oo:d=!0}}if(d)return d=n,a=a(d),n=s===""?"."+Rn(d,0):s,ti(a)?(r="",n!=null&&(r=n.replace(ei,"$&/")+"/"),je(a,t,r,"",function(I){return I})):a!=null&&(zn(a)&&(a=_o(a,r+(!a.key||d&&d.key===a.key?"":(""+a.key).replace(ei,"$&/")+"/")+n)),t.push(a)),1;if(d=0,s=s===""?".":s+":",ti(n))for(var _=0;_<n.length;_++){u=n[_];var w=s+Rn(u,_);d+=je(u,t,r,w,a)}else if(w=yo(n),typeof w=="function")for(n=w.call(n),_=0;!(u=n.next()).done;)u=u.value,w=s+Rn(u,_++),d+=je(u,t,r,w,a);else if(u==="object")throw t=String(n),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return d}function Ue(n,t,r){if(n==null)return n;var s=[],a=0;return je(n,s,"","",function(u){return t.call(r,u,a++)}),s}function wo(n){if(n._status===-1){var t=n._result;t=t(),t.then(function(r){(n._status===0||n._status===-1)&&(n._status=1,n._result=r)},function(r){(n._status===0||n._status===-1)&&(n._status=2,n._result=r)}),n._status===-1&&(n._status=0,n._result=t)}if(n._status===1)return n._result.default;throw n._result}var J={current:null},Be={transition:null},Eo={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:Be,ReactCurrentOwner:Wn};function qi(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:Ue,forEach:function(n,t,r){Ue(n,function(){t.apply(this,arguments)},r)},count:function(n){var t=0;return Ue(n,function(){t++}),t},toArray:function(n){return Ue(n,function(t){return t})||[]},only:function(n){if(!zn(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};A.Component=zt;A.Fragment=ao;A.Profiler=uo;A.PureComponent=Hn;A.StrictMode=ho;A.Suspense=po;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eo;A.act=qi;A.cloneElement=function(n,t,r){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var s=Bi({},n.props),a=n.key,u=n.ref,d=n._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,d=Wn.current),t.key!==void 0&&(a=""+t.key),n.type&&n.type.defaultProps)var _=n.type.defaultProps;for(w in t)Gi.call(t,w)&&!Wi.hasOwnProperty(w)&&(s[w]=t[w]===void 0&&_!==void 0?_[w]:t[w])}var w=arguments.length-2;if(w===1)s.children=r;else if(1<w){_=Array(w);for(var I=0;I<w;I++)_[I]=arguments[I+2];s.children=_}return{$$typeof:me,type:n.type,key:a,ref:u,props:s,_owner:d}};A.createContext=function(n){return n={$$typeof:co,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:lo,_context:n},n.Consumer=n};A.createElement=zi;A.createFactory=function(n){var t=zi.bind(null,n);return t.type=n,t};A.createRef=function(){return{current:null}};A.forwardRef=function(n){return{$$typeof:fo,render:n}};A.isValidElement=zn;A.lazy=function(n){return{$$typeof:mo,_payload:{_status:-1,_result:n},_init:wo}};A.memo=function(n,t){return{$$typeof:go,type:n,compare:t===void 0?null:t}};A.startTransition=function(n){var t=Be.transition;Be.transition={};try{n()}finally{Be.transition=t}};A.unstable_act=qi;A.useCallback=function(n,t){return J.current.useCallback(n,t)};A.useContext=function(n){return J.current.useContext(n)};A.useDebugValue=function(){};A.useDeferredValue=function(n){return J.current.useDeferredValue(n)};A.useEffect=function(n,t){return J.current.useEffect(n,t)};A.useId=function(){return J.current.useId()};A.useImperativeHandle=function(n,t,r){return J.current.useImperativeHandle(n,t,r)};A.useInsertionEffect=function(n,t){return J.current.useInsertionEffect(n,t)};A.useLayoutEffect=function(n,t){return J.current.useLayoutEffect(n,t)};A.useMemo=function(n,t){return J.current.useMemo(n,t)};A.useReducer=function(n,t,r){return J.current.useReducer(n,t,r)};A.useRef=function(n){return J.current.useRef(n)};A.useState=function(n){return J.current.useState(n)};A.useSyncExternalStore=function(n,t,r){return J.current.useSyncExternalStore(n,t,r)};A.useTransition=function(){return J.current.useTransition()};A.version="18.3.1";const Io=()=>{};var ni={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=function(n){const t=[];let r=0;for(let s=0;s<n.length;s++){let a=n.charCodeAt(s);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=a&63|128):(a&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++s)&1023),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=a&63|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=a&63|128)}return t},So=function(n){const t=[];let r=0,s=0;for(;r<n.length;){const a=n[r++];if(a<128)t[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=n[r++];t[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=n[r++],d=n[r++],_=n[r++],w=((a&7)<<18|(u&63)<<12|(d&63)<<6|_&63)-65536;t[s++]=String.fromCharCode(55296+(w>>10)),t[s++]=String.fromCharCode(56320+(w&1023))}else{const u=n[r++],d=n[r++];t[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|d&63)}}return t.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<n.length;a+=3){const u=n[a],d=a+1<n.length,_=d?n[a+1]:0,w=a+2<n.length,I=w?n[a+2]:0,k=u>>2,x=(u&3)<<4|_>>4;let D=(_&15)<<2|I>>6,q=I&63;w||(q=64,d||(D=64)),s.push(r[k],r[x],r[D],r[q])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Ki(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):So(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<n.length;){const u=r[n.charAt(a++)],_=a<n.length?r[n.charAt(a)]:0;++a;const I=a<n.length?r[n.charAt(a)]:64;++a;const x=a<n.length?r[n.charAt(a)]:64;if(++a,u==null||_==null||I==null||x==null)throw new Ao;const D=u<<2|_>>4;if(s.push(D),I!==64){const q=_<<4&240|I>>2;if(s.push(q),x!==64){const C=I<<6&192|x;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ao extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const To=function(n){const t=Ki(n);return Xi.encodeByteArray(t,!0)},Ji=function(n){return To(n).replace(/\./g,"")},Yi=function(n){try{return Xi.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=()=>bo().__FIREBASE_DEFAULTS__,Po=()=>{if(typeof process>"u"||typeof ni>"u")return;const n=ni.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ro=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Yi(n[1]);return t&&JSON.parse(t)},No=()=>{try{return Io()||Co()||Po()||Ro()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ko=n=>{var t;return(t=No())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Oo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function Do(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uo(){try{return typeof indexedDB=="object"}catch{return!1}}function xo(){return new Promise((n,t)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(s),n(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var u;t(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="FirebaseError";class At extends Error{constructor(t,r,s){super(r),this.code=t,this.customData=s,this.name=Vo,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ye.prototype.create)}}class ye{constructor(t,r,s){this.service=t,this.serviceName=r,this.errors=s}create(t,...r){const s=r[0]||{},a=`${this.service}/${t}`,u=this.errors[t],d=u?Fo(u,s):"Error",_=`${this.serviceName}: ${d} (${a}).`;return new At(a,_,s)}}function Fo(n,t){return n.replace(jo,(r,s)=>{const a=t[s];return a!=null?String(a):`<${s}?>`})}const jo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n){const t=[];for(const[r,s]of Object.entries(n))Array.isArray(s)?s.forEach(a=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(a))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Bo(n,t){const r=new $o(n,t);return r.subscribe.bind(r)}class $o{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,s){let a;if(t===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");Ho(t,["next","error","complete"])?a=t:a={next:t,error:r,complete:s},a.next===void 0&&(a.next=Nn),a.error===void 0&&(a.error=Nn),a.complete===void 0&&(a.complete=Nn);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ho(n,t){if(typeof n!="object"||n===null)return!1;for(const r of t)if(r in n&&typeof n[r]=="function")return!0;return!1}function Nn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n){return n&&n._delegate?n._delegate:n}class Gt{constructor(t,r,s){this.name=t,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const Go={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Wo=O.INFO,zo={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},qo=(n,t,...r)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),a=zo[t];if(a)console[a](`[${s}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class qn{constructor(t){this.name=t,this._logLevel=Wo,this._logHandler=qo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in O))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Go[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...t),this._logHandler(this,O.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...t),this._logHandler(this,O.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,O.INFO,...t),this._logHandler(this,O.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,O.WARN,...t),this._logHandler(this,O.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...t),this._logHandler(this,O.ERROR,...t)}}const Ko=(n,t)=>t.some(r=>n instanceof r);let ri,ii;function Xo(){return ri||(ri=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jo(){return ii||(ii=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ts=new WeakMap,Vn=new WeakMap,es=new WeakMap,kn=new WeakMap,Kn=new WeakMap;function Yo(n){const t=new Promise((r,s)=>{const a=()=>{n.removeEventListener("success",u),n.removeEventListener("error",d)},u=()=>{r(It(n.result)),a()},d=()=>{s(n.error),a()};n.addEventListener("success",u),n.addEventListener("error",d)});return t.then(r=>{r instanceof IDBCursor&&ts.set(r,n)}).catch(()=>{}),Kn.set(t,n),t}function Qo(n){if(Vn.has(n))return;const t=new Promise((r,s)=>{const a=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",d),n.removeEventListener("abort",d)},u=()=>{r(),a()},d=()=>{s(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",u),n.addEventListener("error",d),n.addEventListener("abort",d)});Vn.set(n,t)}let Fn={get(n,t,r){if(n instanceof IDBTransaction){if(t==="done")return Vn.get(n);if(t==="objectStoreNames")return n.objectStoreNames||es.get(n);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return It(n[t])},set(n,t,r){return n[t]=r,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zo(n){Fn=n(Fn)}function ta(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const s=n.call(On(this),t,...r);return es.set(s,t.sort?t.sort():[t]),It(s)}:Jo().includes(n)?function(...t){return n.apply(On(this),t),It(ts.get(this))}:function(...t){return It(n.apply(On(this),t))}}function ea(n){return typeof n=="function"?ta(n):(n instanceof IDBTransaction&&Qo(n),Ko(n,Xo())?new Proxy(n,Fn):n)}function It(n){if(n instanceof IDBRequest)return Yo(n);if(kn.has(n))return kn.get(n);const t=ea(n);return t!==n&&(kn.set(n,t),Kn.set(t,n)),t}const On=n=>Kn.get(n);function na(n,t,{blocked:r,upgrade:s,blocking:a,terminated:u}={}){const d=indexedDB.open(n,t),_=It(d);return s&&d.addEventListener("upgradeneeded",w=>{s(It(d.result),w.oldVersion,w.newVersion,It(d.transaction),w)}),r&&d.addEventListener("blocked",w=>r(w.oldVersion,w.newVersion,w)),_.then(w=>{u&&w.addEventListener("close",()=>u()),a&&w.addEventListener("versionchange",I=>a(I.oldVersion,I.newVersion,I))}).catch(()=>{}),_}const ra=["get","getKey","getAll","getAllKeys","count"],ia=["put","add","delete","clear"],Dn=new Map;function si(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Dn.get(t))return Dn.get(t);const r=t.replace(/FromIndex$/,""),s=t!==r,a=ia.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(a||ra.includes(r)))return;const u=async function(d,..._){const w=this.transaction(d,a?"readwrite":"readonly");let I=w.store;return s&&(I=I.index(_.shift())),(await Promise.all([I[r](..._),a&&w.done]))[0]};return Dn.set(t,u),u}Zo(n=>({...n,get:(t,r,s)=>si(t,r)||n.get(t,r,s),has:(t,r)=>!!si(t,r)||n.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(oa(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function oa(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const jn="@firebase/app",oi="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new qn("@firebase/app"),aa="@firebase/app-compat",ha="@firebase/analytics-compat",ua="@firebase/analytics",la="@firebase/app-check-compat",ca="@firebase/app-check",fa="@firebase/auth",da="@firebase/auth-compat",pa="@firebase/database",ga="@firebase/data-connect",ma="@firebase/database-compat",ya="@firebase/functions",_a="@firebase/functions-compat",va="@firebase/installations",wa="@firebase/installations-compat",Ea="@firebase/messaging",Ia="@firebase/messaging-compat",Sa="@firebase/performance",Aa="@firebase/performance-compat",Ta="@firebase/remote-config",ba="@firebase/remote-config-compat",Ca="@firebase/storage",Pa="@firebase/storage-compat",Ra="@firebase/firestore",Na="@firebase/ai",ka="@firebase/firestore-compat",Oa="firebase",Da="11.10.0",La={[jn]:"fire-core",[aa]:"fire-core-compat",[ua]:"fire-analytics",[ha]:"fire-analytics-compat",[ca]:"fire-app-check",[la]:"fire-app-check-compat",[fa]:"fire-auth",[da]:"fire-auth-compat",[pa]:"fire-rtdb",[ga]:"fire-data-connect",[ma]:"fire-rtdb-compat",[ya]:"fire-fn",[_a]:"fire-fn-compat",[va]:"fire-iid",[wa]:"fire-iid-compat",[Ea]:"fire-fcm",[Ia]:"fire-fcm-compat",[Sa]:"fire-perf",[Aa]:"fire-perf-compat",[Ta]:"fire-rc",[ba]:"fire-rc-compat",[Ca]:"fire-gcs",[Pa]:"fire-gcs-compat",[Ra]:"fire-fst",[ka]:"fire-fst-compat",[Na]:"fire-vertex","fire-js":"fire-js",[Oa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map,Ua=new Map,ai=new Map;function hi(n,t){try{n.container.addComponent(t)}catch(r){mt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,r)}}function Wt(n){const t=n.name;if(ai.has(t))return mt.debug(`There were multiple attempts to register component ${t}.`),!1;ai.set(t,n);for(const r of Ma.values())hi(r,n);for(const r of Ua.values())hi(r,n);return!0}function Rt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xn=new ye("app","Firebase",xa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=Da;function St(n,t,r){var s;let a=(s=La[n])!==null&&s!==void 0?s:n;r&&(a+=`-${r}`);const u=a.match(/\s|\//),d=t.match(/\s|\//);if(u||d){const _=[`Unable to register library "${a}" with version "${t}":`];u&&_.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&d&&_.push("and"),d&&_.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mt.warn(_.join(" "));return}Wt(new Gt(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="firebase-heartbeat-database",Fa=1,ge="firebase-heartbeat-store";let Ln=null;function ns(){return Ln||(Ln=na(Va,Fa,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ge)}catch(r){console.warn(r)}}}}).catch(n=>{throw Xn.create("idb-open",{originalErrorMessage:n.message})})),Ln}async function ja(n){try{const r=(await ns()).transaction(ge),s=await r.objectStore(ge).get(rs(n));return await r.done,s}catch(t){if(t instanceof At)mt.warn(t.message);else{const r=Xn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mt.warn(r.message)}}}async function ui(n,t){try{const s=(await ns()).transaction(ge,"readwrite");await s.objectStore(ge).put(t,rs(n)),await s.done}catch(r){if(r instanceof At)mt.warn(r.message);else{const s=Xn.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});mt.warn(s.message)}}}function rs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=1024,$a=30;class Ha{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Wa(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,r;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=li();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>$a){const d=za(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){mt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=li(),{heartbeatsToSend:s,unsentEntries:a}=Ga(this._heartbeatsCache.heartbeats),u=Ji(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=r,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(r){return mt.warn(r),""}}}function li(){return new Date().toISOString().substring(0,10)}function Ga(n,t=Ba){const r=[];let s=n.slice();for(const a of n){const u=r.find(d=>d.agent===a.agent);if(u){if(u.dates.push(a.date),ci(r)>t){u.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),ci(r)>t){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class Wa{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Uo()?xo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await ja(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const a=await this.read();return ui(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const a=await this.read();return ui(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function ci(n){return Ji(JSON.stringify({version:2,heartbeats:n})).length}function za(n){if(n.length===0)return-1;let t=0,r=n[0].date;for(let s=1;s<n.length;s++)n[s].date<r&&(r=n[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(n){Wt(new Gt("platform-logger",t=>new sa(t),"PRIVATE")),Wt(new Gt("heartbeat",t=>new Ha(t),"PRIVATE")),St(jn,oi,n),St(jn,oi,"esm2017"),St("fire-js","")}qa("");var Ka="firebase",Xa="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St(Ka,Xa,"app");function is(n,t){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(n);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(n,s[a])&&(r[s[a]]=n[s[a]]);return r}function ss(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ja=ss,os=new ye("auth","Firebase",ss());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new qn("@firebase/auth");function Ya(n,...t){We.logLevel<=O.WARN&&We.warn(`Auth (${Ze}): ${n}`,...t)}function $e(n,...t){We.logLevel<=O.ERROR&&We.error(`Auth (${Ze}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n,...t){throw Jn(n,...t)}function as(n,...t){return Jn(n,...t)}function hs(n,t,r){const s=Object.assign(Object.assign({},Ja()),{[t]:r});return new ye("auth","Firebase",s).create(t,{appName:n.name})}function He(n){return hs(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jn(n,...t){if(typeof n!="string"){const r=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(r,...s)}return os.create(n,...t)}function P(n,t,...r){if(!n)throw Jn(t,...r)}function le(n){const t="INTERNAL ASSERTION FAILED: "+n;throw $e(t),new Error(t)}function ze(n,t){n||le(t)}function Qa(){return di()==="http:"||di()==="https:"}function di(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qa()||Lo()||"connection"in navigator)?navigator.onLine:!0}function th(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,r){this.shortDelay=t,this.longDelay=r,ze(r>t,"Short delay should be less than long delay!"),this.isMobile=Oo()||Mo()}get(){return Za()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(n,t){ze(n.emulator,"Emulator should always be set here");const{url:r}=n.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{static initialize(t,r,s){this.fetchImpl=t,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ih=new _e(3e4,6e4);function ls(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function tn(n,t,r,s,a={}){return cs(n,a,async()=>{let u={},d={};s&&(t==="GET"?d=s:u={body:JSON.stringify(s)});const _=Zi(Object.assign({key:n.config.apiKey},d)).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const I=Object.assign({method:t,headers:w},u);return Do()||(I.referrerPolicy="no-referrer"),n.emulatorConfig&&Qi(n.emulatorConfig.host)&&(I.credentials="include"),us.fetch()(await fs(n,n.config.apiHost,r,_),I)})}async function cs(n,t,r){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},nh),t);try{const a=new sh(n),u=await Promise.race([r(),a.promise]);a.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw xe(n,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const _=u.ok?d.errorMessage:d.error.message,[w,I]=_.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw xe(n,"credential-already-in-use",d);if(w==="EMAIL_EXISTS")throw xe(n,"email-already-in-use",d);if(w==="USER_DISABLED")throw xe(n,"user-disabled",d);const k=s[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(I)throw hs(n,k,I);fi(n,k)}}catch(a){if(a instanceof At)throw a;fi(n,"network-request-failed",{message:String(a)})}}async function fs(n,t,r,s){const a=`${t}${r}?${s}`,u=n,d=u.config.emulator?eh(n.config,a):`${n.config.apiScheme}://${a}`;return rh.includes(r)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}class sh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(as(this.auth,"network-request-failed")),ih.get())})}}function xe(n,t,r){const s={appName:n.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const a=as(n,t,s);return a.customData._tokenResponse=r,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oh(n,t){return tn(n,"POST","/v1/accounts:delete",t)}async function qe(n,t){return tn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ah(n,t=!1){const r=Qe(n),s=await r.getIdToken(t),a=ds(s);P(a&&a.exp&&a.auth_time&&a.iat,r.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:a,token:s,authTime:ce(Mn(a.auth_time)),issuedAtTime:ce(Mn(a.iat)),expirationTime:ce(Mn(a.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Mn(n){return Number(n)*1e3}function ds(n){const[t,r,s]=n.split(".");if(t===void 0||r===void 0||s===void 0)return $e("JWT malformed, contained fewer than 3 sections"),null;try{const a=Yi(r);return a?JSON.parse(a):($e("Failed to decode base64 JWT payload"),null)}catch(a){return $e("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function pi(n){const t=ds(n);return P(t,"internal-error"),P(typeof t.exp<"u","internal-error"),P(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,t,r=!1){if(r)return t;try{return await t}catch(s){throw s instanceof At&&hh(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function hh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=ce(this.lastLoginAt),this.creationTime=ce(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(n){var t;const r=n.auth,s=await n.getIdToken(),a=await Bn(n,qe(r,{idToken:s}));P(a==null?void 0:a.users.length,r,"internal-error");const u=a.users[0];n._notifyReloadListener(u);const d=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?ps(u.providerUserInfo):[],_=ch(n.providerData,d),w=n.isAnonymous,I=!(n.email&&u.passwordHash)&&!(_!=null&&_.length),k=w?I:!1,x={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:_,metadata:new $n(u.createdAt,u.lastLoginAt),isAnonymous:k};Object.assign(n,x)}async function lh(n){const t=Qe(n);await Ke(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ch(n,t){return[...n.filter(s=>!t.some(a=>a.providerId===s.providerId)),...t]}function ps(n){return n.map(t=>{var{providerId:r}=t,s=is(t,["providerId"]);return{providerId:r,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fh(n,t){const r=await cs(n,{},async()=>{const s=Zi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:a,apiKey:u}=n.config,d=await fs(n,a,"/v1/token",`key=${u}`),_=await n._getAdditionalHeaders();_["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:_,body:s};return n.emulatorConfig&&Qi(n.emulatorConfig.host)&&(w.credentials="include"),us.fetch()(d,w)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function dh(n,t){return tn(n,"POST","/v2/accounts:revokeToken",ls(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){P(t.idToken,"internal-error"),P(typeof t.idToken<"u","internal-error"),P(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pi(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){P(t.length!==0,"internal-error");const r=pi(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:s,refreshToken:a,expiresIn:u}=await fh(t,r);this.updateTokensAndExpiration(s,a,Number(u))}updateTokensAndExpiration(t,r,s){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,r){const{refreshToken:s,accessToken:a,expirationTime:u}=r,d=new Bt;return s&&(P(typeof s=="string","internal-error",{appName:t}),d.refreshToken=s),a&&(P(typeof a=="string","internal-error",{appName:t}),d.accessToken=a),u&&(P(typeof u=="number","internal-error",{appName:t}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bt,this.toJSON())}_performRefresh(){return le("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n,t){P(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class ht{constructor(t){var{uid:r,auth:s,stsTokenManager:a}=t,u=is(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new $n(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const r=await Bn(this,this.stsTokenManager.getToken(this.auth,t));return P(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return ah(this,t)}reload(){return lh(this)}_assign(t){this!==t&&(P(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new ht(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),r&&await Ke(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(He(this.auth));const t=await this.getIdToken();return await Bn(this,oh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var s,a,u,d,_,w,I,k;const x=(s=r.displayName)!==null&&s!==void 0?s:void 0,D=(a=r.email)!==null&&a!==void 0?a:void 0,q=(u=r.phoneNumber)!==null&&u!==void 0?u:void 0,C=(d=r.photoURL)!==null&&d!==void 0?d:void 0,j=(_=r.tenantId)!==null&&_!==void 0?_:void 0,U=(w=r._redirectEventId)!==null&&w!==void 0?w:void 0,ct=(I=r.createdAt)!==null&&I!==void 0?I:void 0,Q=(k=r.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:$,emailVerified:et,isAnonymous:Tt,providerData:Y,stsTokenManager:m}=r;P($&&m,t,"internal-error");const l=Bt.fromJSON(this.name,m);P(typeof $=="string",t,"internal-error"),Et(x,t.name),Et(D,t.name),P(typeof et=="boolean",t,"internal-error"),P(typeof Tt=="boolean",t,"internal-error"),Et(q,t.name),Et(C,t.name),Et(j,t.name),Et(U,t.name),Et(ct,t.name),Et(Q,t.name);const f=new ht({uid:$,auth:t,email:D,emailVerified:et,displayName:x,isAnonymous:Tt,photoURL:C,phoneNumber:q,tenantId:j,stsTokenManager:l,createdAt:ct,lastLoginAt:Q});return Y&&Array.isArray(Y)&&(f.providerData=Y.map(p=>Object.assign({},p))),U&&(f._redirectEventId=U),f}static async _fromIdTokenResponse(t,r,s=!1){const a=new Bt;a.updateFromServerResponse(r);const u=new ht({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:s});return await Ke(u),u}static async _fromGetAccountInfoResponse(t,r,s){const a=r.users[0];P(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?ps(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),_=new Bt;_.updateFromIdToken(s);const w=new ht({uid:a.localId,auth:t,stsTokenManager:_,isAnonymous:d}),I={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new $n(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(w,I),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map;function kt(n){ze(n instanceof Function,"Expected a class definition");let t=gi.get(n);return t?(ze(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,gi.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}gs.type="NONE";const mi=gs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(n,t,r){return`firebase:${n}:${t}:${r}`}class $t{constructor(t,r,s){this.persistence=t,this.auth=r,this.userKey=s;const{config:a,name:u}=this.auth;this.fullUserKey=Un(this.userKey,a.apiKey,u),this.fullPersistenceKey=Un("persistence",a.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const r=await qe(this.auth,{idToken:t}).catch(()=>{});return r?ht._fromGetAccountInfoResponse(this.auth,r,t):null}return ht._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,s="authUser"){if(!r.length)return new $t(kt(mi),t,s);const a=(await Promise.all(r.map(async I=>{if(await I._isAvailable())return I}))).filter(I=>I);let u=a[0]||kt(mi);const d=Un(s,t.config.apiKey,t.name);let _=null;for(const I of r)try{const k=await I._get(d);if(k){let x;if(typeof k=="string"){const D=await qe(t,{idToken:k}).catch(()=>{});if(!D)break;x=await ht._fromGetAccountInfoResponse(t,D,k)}else x=ht._fromJSON(t,k);I!==u&&(_=x),u=I;break}}catch{}const w=a.filter(I=>I._shouldAllowMigration);return!u._shouldAllowMigration||!w.length?new $t(u,t,s):(u=w[0],_&&await u._set(d,_.toJSON()),await Promise.all(r.map(async I=>{if(I!==u)try{await I._remove(d)}catch{}})),new $t(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ph(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(vh(t))return"Blackberry";if(wh(t))return"Webos";if(gh(t))return"Safari";if((t.includes("chrome/")||mh(t))&&!t.includes("edge/"))return"Chrome";if(_h(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(r);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ph(n=lt()){return/firefox\//i.test(n)}function gh(n=lt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mh(n=lt()){return/crios\//i.test(n)}function yh(n=lt()){return/iemobile/i.test(n)}function _h(n=lt()){return/android/i.test(n)}function vh(n=lt()){return/blackberry/i.test(n)}function wh(n=lt()){return/webos/i.test(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,t=[]){let r;switch(n){case"Browser":r=yi(lt());break;case"Worker":r=`${yi(lt())}-${n}`;break;default:r=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${Ze}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const s=u=>new Promise((d,_)=>{try{const w=t(u);d(w)}catch(w){_(w)}});s.onAbort=r,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const s of this.queue)await s(t),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const a of r)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(n,t={}){return tn(n,"GET","/v2/passwordPolicy",ls(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=6;class Ah{constructor(t){var r,s,a,u;const d=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=d.minPasswordLength)!==null&&r!==void 0?r:Sh,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,s,a,u,d,_;const w={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,w),this.validatePasswordCharacterOptions(t,w),w.isValid&&(w.isValid=(r=w.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),w.isValid&&(w.isValid=(s=w.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),w.isValid&&(w.isValid=(a=w.containsLowercaseLetter)!==null&&a!==void 0?a:!0),w.isValid&&(w.isValid=(u=w.containsUppercaseLetter)!==null&&u!==void 0?u:!0),w.isValid&&(w.isValid=(d=w.containsNumericCharacter)!==null&&d!==void 0?d:!0),w.isValid&&(w.isValid=(_=w.containsNonAlphanumericCharacter)!==null&&_!==void 0?_:!0),w}validatePasswordLengthOptions(t,r){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=t.length>=s),a&&(r.meetsMaxPasswordLength=t.length<=a)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let a=0;a<t.length;a++)s=t.charAt(a),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,r,s,a,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,r,s,a){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _i(this),this.idTokenSubscription=new _i(this),this.beforeStateQueue=new Eh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=os,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=kt(r)),this._initializationPromise=this.queue(async()=>{var s,a,u;if(!this._deleted&&(this.persistenceManager=await $t.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await qe(this,{idToken:t}),s=await ht._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(Rt(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(_=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(_,_))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,_=a==null?void 0:a._redirectEventId,w=await this.tryRedirectSignIn(t);(!d||d===_)&&(w!=null&&w.user)&&(a=w.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await Ke(t)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=th()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Rt(this.app))return Promise.reject(He(this));const r=t?Qe(t):null;return r&&P(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&P(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(He(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Rt(this.app)?Promise.reject(He(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ih(this),r=new Ah(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ye("auth","Firebase",t())}onAuthStateChanged(t,r,s){return this.registerStateListener(this.authStateSubscription,t,r,s)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,s){return this.registerStateListener(this.idTokenSubscription,t,r,s)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await dh(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const s=await this.getOrInitRedirectPersistenceManager(r);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&kt(t)||this._popupRedirectResolver;P(r,this,"argument-error"),this.redirectPersistenceManager=await $t.create(this,[kt(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,s;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,s,a){if(this._deleted)return()=>{};const u=typeof r=="function"?r:r.next.bind(r);let d=!1;const _=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(_,this,"internal-error"),_.then(()=>{d||u(this.currentUser)}),typeof r=="function"){const w=t.addObserver(r,s,a);return()=>{d=!0,w()}}else{const w=t.addObserver(r);return()=>{d=!0,w()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ms(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(r["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(r["X-Firebase-AppCheck"]=a),r}async _getAppCheckToken(){var t;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r!=null&&r.error&&Ya(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function bh(n){return Qe(n)}class _i{constructor(t){this.auth=t,this.observer=null,this.addObserver=Bo(r=>this.observer=r)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ch(n,t){const r=(t==null?void 0:t.persistence)||[],s=(Array.isArray(r)?r:[r]).map(kt);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}new _e(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new _e(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new _e(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new _e(5e3,15e3);var vi="@firebase/auth",wi="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Nh(n){Wt(new Gt("auth",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),a=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:d,authDomain:_}=s.options;P(d&&!d.includes(":"),"invalid-api-key",{appName:s.name});const w={apiKey:d,authDomain:_,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ms(n)},I=new Th(s,a,u,w);return Ch(I,r),I},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,s)=>{t.getProvider("auth-internal").initialize()})),Wt(new Gt("auth-internal",t=>{const r=bh(t.getProvider("auth").getImmediate());return(s=>new Ph(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),St(vi,wi,Rh(n)),St(vi,wi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh=5*60;ko("authIdTokenMaxAge");Nh("Browser");var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(m,l){function f(){}f.prototype=l.prototype,m.D=l.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,v){for(var c=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)c[ft-2]=arguments[ft];return l.prototype[g].apply(p,c)}}function r(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,r),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(m,l,f){f||(f=0);var p=Array(16);if(typeof l=="string")for(var g=0;16>g;++g)p[g]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=m.g[0],f=m.g[1],g=m.g[2];var v=m.g[3],c=l+(v^f&(g^v))+p[0]+3614090360&4294967295;l=f+(c<<7&4294967295|c>>>25),c=v+(g^l&(f^g))+p[1]+3905402710&4294967295,v=l+(c<<12&4294967295|c>>>20),c=g+(f^v&(l^f))+p[2]+606105819&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(l^g&(v^l))+p[3]+3250441966&4294967295,f=g+(c<<22&4294967295|c>>>10),c=l+(v^f&(g^v))+p[4]+4118548399&4294967295,l=f+(c<<7&4294967295|c>>>25),c=v+(g^l&(f^g))+p[5]+1200080426&4294967295,v=l+(c<<12&4294967295|c>>>20),c=g+(f^v&(l^f))+p[6]+2821735955&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(l^g&(v^l))+p[7]+4249261313&4294967295,f=g+(c<<22&4294967295|c>>>10),c=l+(v^f&(g^v))+p[8]+1770035416&4294967295,l=f+(c<<7&4294967295|c>>>25),c=v+(g^l&(f^g))+p[9]+2336552879&4294967295,v=l+(c<<12&4294967295|c>>>20),c=g+(f^v&(l^f))+p[10]+4294925233&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(l^g&(v^l))+p[11]+2304563134&4294967295,f=g+(c<<22&4294967295|c>>>10),c=l+(v^f&(g^v))+p[12]+1804603682&4294967295,l=f+(c<<7&4294967295|c>>>25),c=v+(g^l&(f^g))+p[13]+4254626195&4294967295,v=l+(c<<12&4294967295|c>>>20),c=g+(f^v&(l^f))+p[14]+2792965006&4294967295,g=v+(c<<17&4294967295|c>>>15),c=f+(l^g&(v^l))+p[15]+1236535329&4294967295,f=g+(c<<22&4294967295|c>>>10),c=l+(g^v&(f^g))+p[1]+4129170786&4294967295,l=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(l^f))+p[6]+3225465664&4294967295,v=l+(c<<9&4294967295|c>>>23),c=g+(l^f&(v^l))+p[11]+643717713&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^l&(g^v))+p[0]+3921069994&4294967295,f=g+(c<<20&4294967295|c>>>12),c=l+(g^v&(f^g))+p[5]+3593408605&4294967295,l=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(l^f))+p[10]+38016083&4294967295,v=l+(c<<9&4294967295|c>>>23),c=g+(l^f&(v^l))+p[15]+3634488961&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^l&(g^v))+p[4]+3889429448&4294967295,f=g+(c<<20&4294967295|c>>>12),c=l+(g^v&(f^g))+p[9]+568446438&4294967295,l=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(l^f))+p[14]+3275163606&4294967295,v=l+(c<<9&4294967295|c>>>23),c=g+(l^f&(v^l))+p[3]+4107603335&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^l&(g^v))+p[8]+1163531501&4294967295,f=g+(c<<20&4294967295|c>>>12),c=l+(g^v&(f^g))+p[13]+2850285829&4294967295,l=f+(c<<5&4294967295|c>>>27),c=v+(f^g&(l^f))+p[2]+4243563512&4294967295,v=l+(c<<9&4294967295|c>>>23),c=g+(l^f&(v^l))+p[7]+1735328473&4294967295,g=v+(c<<14&4294967295|c>>>18),c=f+(v^l&(g^v))+p[12]+2368359562&4294967295,f=g+(c<<20&4294967295|c>>>12),c=l+(f^g^v)+p[5]+4294588738&4294967295,l=f+(c<<4&4294967295|c>>>28),c=v+(l^f^g)+p[8]+2272392833&4294967295,v=l+(c<<11&4294967295|c>>>21),c=g+(v^l^f)+p[11]+1839030562&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^l)+p[14]+4259657740&4294967295,f=g+(c<<23&4294967295|c>>>9),c=l+(f^g^v)+p[1]+2763975236&4294967295,l=f+(c<<4&4294967295|c>>>28),c=v+(l^f^g)+p[4]+1272893353&4294967295,v=l+(c<<11&4294967295|c>>>21),c=g+(v^l^f)+p[7]+4139469664&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^l)+p[10]+3200236656&4294967295,f=g+(c<<23&4294967295|c>>>9),c=l+(f^g^v)+p[13]+681279174&4294967295,l=f+(c<<4&4294967295|c>>>28),c=v+(l^f^g)+p[0]+3936430074&4294967295,v=l+(c<<11&4294967295|c>>>21),c=g+(v^l^f)+p[3]+3572445317&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^l)+p[6]+76029189&4294967295,f=g+(c<<23&4294967295|c>>>9),c=l+(f^g^v)+p[9]+3654602809&4294967295,l=f+(c<<4&4294967295|c>>>28),c=v+(l^f^g)+p[12]+3873151461&4294967295,v=l+(c<<11&4294967295|c>>>21),c=g+(v^l^f)+p[15]+530742520&4294967295,g=v+(c<<16&4294967295|c>>>16),c=f+(g^v^l)+p[2]+3299628645&4294967295,f=g+(c<<23&4294967295|c>>>9),c=l+(g^(f|~v))+p[0]+4096336452&4294967295,l=f+(c<<6&4294967295|c>>>26),c=v+(f^(l|~g))+p[7]+1126891415&4294967295,v=l+(c<<10&4294967295|c>>>22),c=g+(l^(v|~f))+p[14]+2878612391&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~l))+p[5]+4237533241&4294967295,f=g+(c<<21&4294967295|c>>>11),c=l+(g^(f|~v))+p[12]+1700485571&4294967295,l=f+(c<<6&4294967295|c>>>26),c=v+(f^(l|~g))+p[3]+2399980690&4294967295,v=l+(c<<10&4294967295|c>>>22),c=g+(l^(v|~f))+p[10]+4293915773&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~l))+p[1]+2240044497&4294967295,f=g+(c<<21&4294967295|c>>>11),c=l+(g^(f|~v))+p[8]+1873313359&4294967295,l=f+(c<<6&4294967295|c>>>26),c=v+(f^(l|~g))+p[15]+4264355552&4294967295,v=l+(c<<10&4294967295|c>>>22),c=g+(l^(v|~f))+p[6]+2734768916&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~l))+p[13]+1309151649&4294967295,f=g+(c<<21&4294967295|c>>>11),c=l+(g^(f|~v))+p[4]+4149444226&4294967295,l=f+(c<<6&4294967295|c>>>26),c=v+(f^(l|~g))+p[11]+3174756917&4294967295,v=l+(c<<10&4294967295|c>>>22),c=g+(l^(v|~f))+p[2]+718787259&4294967295,g=v+(c<<15&4294967295|c>>>17),c=f+(v^(g|~l))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(g+(c<<21&4294967295|c>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+v&4294967295}s.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var f=l-this.blockSize,p=this.B,g=this.h,v=0;v<l;){if(g==0)for(;v<=f;)a(this,m,v),v+=this.blockSize;if(typeof m=="string"){for(;v<l;)if(p[g++]=m.charCodeAt(v++),g==this.blockSize){a(this,p),g=0;break}}else for(;v<l;)if(p[g++]=m[v++],g==this.blockSize){a(this,p),g=0;break}}this.h=g,this.o+=l},s.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var f=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=f&255,f/=256;for(this.u(m),m=Array(16),l=f=0;4>l;++l)for(var p=0;32>p;p+=8)m[f++]=this.g[l]>>>p&255;return m};function u(m,l){var f=_;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=l(m)}function d(m,l){this.h=l;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var v=m[g]|0;p&&v==l||(f[g]=v,p=!1)}this.g=f}var _={};function w(m){return-128<=m&&128>m?u(m,function(l){return new d([l|0],0>l?-1:0)}):new d([m|0],0>m?-1:0)}function I(m){if(isNaN(m)||!isFinite(m))return x;if(0>m)return U(I(-m));for(var l=[],f=1,p=0;m>=f;p++)l[p]=m/f|0,f*=4294967296;return new d(l,0)}function k(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return U(k(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=I(Math.pow(l,8)),p=x,g=0;g<m.length;g+=8){var v=Math.min(8,m.length-g),c=parseInt(m.substring(g,g+v),l);8>v?(v=I(Math.pow(l,v)),p=p.j(v).add(I(c))):(p=p.j(f),p=p.add(I(c)))}return p}var x=w(0),D=w(1),q=w(16777216);n=d.prototype,n.m=function(){if(j(this))return-U(this).m();for(var m=0,l=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*l,l*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(C(this))return"0";if(j(this))return"-"+U(this).toString(m);for(var l=I(Math.pow(m,6)),f=this,p="";;){var g=et(f,l).g;f=ct(f,g.j(l));var v=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,C(f))return v+p;for(;6>v.length;)v="0"+v;p=v+p}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function C(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function j(m){return m.h==-1}n.l=function(m){return m=ct(this,m),j(m)?-1:C(m)?0:1};function U(m){for(var l=m.g.length,f=[],p=0;p<l;p++)f[p]=~m.g[p];return new d(f,~m.h).add(D)}n.abs=function(){return j(this)?U(this):this},n.add=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=l;g++){var v=p+(this.i(g)&65535)+(m.i(g)&65535),c=(v>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=c>>>16,v&=65535,c&=65535,f[g]=c<<16|v}return new d(f,f[f.length-1]&-2147483648?-1:0)};function ct(m,l){return m.add(U(l))}n.j=function(m){if(C(this)||C(m))return x;if(j(this))return j(m)?U(this).j(U(m)):U(U(this).j(m));if(j(m))return U(this.j(U(m)));if(0>this.l(q)&&0>m.l(q))return I(this.m()*m.m());for(var l=this.g.length+m.g.length,f=[],p=0;p<2*l;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var v=this.i(p)>>>16,c=this.i(p)&65535,ft=m.i(g)>>>16,qt=m.i(g)&65535;f[2*p+2*g]+=c*qt,Q(f,2*p+2*g),f[2*p+2*g+1]+=v*qt,Q(f,2*p+2*g+1),f[2*p+2*g+1]+=c*ft,Q(f,2*p+2*g+1),f[2*p+2*g+2]+=v*ft,Q(f,2*p+2*g+2)}for(p=0;p<l;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=l;p<2*l;p++)f[p]=0;return new d(f,0)};function Q(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function $(m,l){this.g=m,this.h=l}function et(m,l){if(C(l))throw Error("division by zero");if(C(m))return new $(x,x);if(j(m))return l=et(U(m),l),new $(U(l.g),U(l.h));if(j(l))return l=et(m,U(l)),new $(U(l.g),l.h);if(30<m.g.length){if(j(m)||j(l))throw Error("slowDivide_ only works with positive integers.");for(var f=D,p=l;0>=p.l(m);)f=Tt(f),p=Tt(p);var g=Y(f,1),v=Y(p,1);for(p=Y(p,2),f=Y(f,2);!C(p);){var c=v.add(p);0>=c.l(m)&&(g=g.add(f),v=c),p=Y(p,1),f=Y(f,1)}return l=ct(m,g.j(l)),new $(g,l)}for(g=x;0<=m.l(l);){for(f=Math.max(1,Math.floor(m.m()/l.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),v=I(f),c=v.j(l);j(c)||0<c.l(m);)f-=p,v=I(f),c=v.j(l);C(v)&&(v=D),g=g.add(v),m=ct(m,c)}return new $(g,m)}n.A=function(m){return et(this,m).h},n.and=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)&m.i(p);return new d(f,this.h&m.h)},n.or=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)|m.i(p);return new d(f,this.h|m.h)},n.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)^m.i(p);return new d(f,this.h^m.h)};function Tt(m){for(var l=m.g.length+1,f=[],p=0;p<l;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new d(f,m.h)}function Y(m,l){var f=l>>5;l%=32;for(var p=m.g.length-f,g=[],v=0;v<p;v++)g[v]=0<l?m.i(v+f)>>>l|m.i(v+f+1)<<32-l:m.i(v+f);return new d(g,m.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=I,d.fromString=k,Yn=d}).apply(typeof Ei<"u"?Ei:typeof self<"u"?self:typeof window<"u"?window:{});var Ve=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(e,i,o){return e==Array.prototype||e==Object.prototype||(e[i]=o.value),e};function r(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ve=="object"&&Ve];for(var i=0;i<e.length;++i){var o=e[i];if(o&&o.Math==Math)return o}throw Error("Cannot find global object")}var s=r(this);function a(e,i){if(i)t:{var o=s;e=e.split(".");for(var h=0;h<e.length-1;h++){var y=e[h];if(!(y in o))break t;o=o[y]}e=e[e.length-1],h=o[e],i=i(h),i!=h&&i!=null&&t(o,e,{configurable:!0,writable:!0,value:i})}}function u(e,i){e instanceof String&&(e+="");var o=0,h=!1,y={next:function(){if(!h&&o<e.length){var E=o++;return{value:i(E,e[E]),done:!1}}return h=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}a("Array.prototype.values",function(e){return e||function(){return u(this,function(i,o){return o})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},_=this||self;function w(e){var i=typeof e;return i=i!="object"?i:e?Array.isArray(e)?"array":i:"null",i=="array"||i=="object"&&typeof e.length=="number"}function I(e){var i=typeof e;return i=="object"&&e!=null||i=="function"}function k(e,i,o){return e.call.apply(e.bind,arguments)}function x(e,i,o){if(!e)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,h),e.apply(i,y)}}return function(){return e.apply(i,arguments)}}function D(e,i,o){return D=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:x,D.apply(null,arguments)}function q(e,i){var o=Array.prototype.slice.call(arguments,1);return function(){var h=o.slice();return h.push.apply(h,arguments),e.apply(this,h)}}function C(e,i){function o(){}o.prototype=i.prototype,e.aa=i.prototype,e.prototype=new o,e.prototype.constructor=e,e.Qb=function(h,y,E){for(var S=Array(arguments.length-2),L=2;L<arguments.length;L++)S[L-2]=arguments[L];return i.prototype[y].apply(h,S)}}function j(e){const i=e.length;if(0<i){const o=Array(i);for(let h=0;h<i;h++)o[h]=e[h];return o}return[]}function U(e,i){for(let o=1;o<arguments.length;o++){const h=arguments[o];if(w(h)){const y=e.length||0,E=h.length||0;e.length=y+E;for(let S=0;S<E;S++)e[y+S]=h[S]}else e.push(h)}}class ct{constructor(i,o){this.i=i,this.j=o,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Q(e){return/^[\s\xa0]*$/.test(e)}function $(){var e=_.navigator;return e&&(e=e.userAgent)?e:""}function et(e){return et[" "](e),e}et[" "]=function(){};var Tt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Y(e,i,o){for(const h in e)i.call(o,e[h],h,e)}function m(e,i){for(const o in e)i.call(void 0,e[o],o,e)}function l(e){const i={};for(const o in e)i[o]=e[o];return i}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(e,i){let o,h;for(let y=1;y<arguments.length;y++){h=arguments[y];for(o in h)e[o]=h[o];for(let E=0;E<f.length;E++)o=f[E],Object.prototype.hasOwnProperty.call(h,o)&&(e[o]=h[o])}}function g(e){var i=1;e=e.split(":");const o=[];for(;0<i&&e.length;)o.push(e.shift()),i--;return e.length&&o.push(e.join(":")),o}function v(e){_.setTimeout(()=>{throw e},0)}function c(){var e=nn;let i=null;return e.g&&(i=e.g,e.g=e.g.next,e.g||(e.h=null),i.next=null),i}class ft{constructor(){this.h=this.g=null}add(i,o){const h=qt.get();h.set(i,o),this.h?this.h.next=h:this.g=h,this.h=h}}var qt=new ct(()=>new Ss,e=>e.reset());class Ss{constructor(){this.next=this.g=this.h=null}set(i,o){this.h=i,this.g=o,this.next=null}reset(){this.next=this.g=this.h=null}}let Kt,Xt=!1,nn=new ft,er=()=>{const e=_.Promise.resolve(void 0);Kt=()=>{e.then(As)}};var As=()=>{for(var e;e=c();){try{e.h.call(e.g)}catch(o){v(o)}var i=qt;i.j(e),100>i.h&&(i.h++,e.next=i.g,i.g=e)}Xt=!1};function yt(){this.s=this.s,this.C=this.C}yt.prototype.s=!1,yt.prototype.ma=function(){this.s||(this.s=!0,this.N())},yt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function H(e,i){this.type=e,this.g=this.target=i,this.defaultPrevented=!1}H.prototype.h=function(){this.defaultPrevented=!0};var Ts=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var e=!1,i=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const o=()=>{};_.addEventListener("test",o,i),_.removeEventListener("test",o,i)}catch{}return e}();function Jt(e,i){if(H.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var o=this.type=e.type,h=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=i,i=e.relatedTarget){if(Tt){t:{try{et(i.nodeName);var y=!0;break t}catch{}y=!1}y||(i=null)}}else o=="mouseover"?i=e.fromElement:o=="mouseout"&&(i=e.toElement);this.relatedTarget=i,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:bs[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Jt.aa.h.call(this)}}C(Jt,H);var bs={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var we="closure_listenable_"+(1e6*Math.random()|0),Cs=0;function Ps(e,i,o,h,y){this.listener=e,this.proxy=null,this.src=i,this.type=o,this.capture=!!h,this.ha=y,this.key=++Cs,this.da=this.fa=!1}function Ee(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Ie(e){this.src=e,this.g={},this.h=0}Ie.prototype.add=function(e,i,o,h,y){var E=e.toString();e=this.g[E],e||(e=this.g[E]=[],this.h++);var S=sn(e,i,h,y);return-1<S?(i=e[S],o||(i.fa=!1)):(i=new Ps(i,this.src,E,!!h,y),i.fa=o,e.push(i)),i};function rn(e,i){var o=i.type;if(o in e.g){var h=e.g[o],y=Array.prototype.indexOf.call(h,i,void 0),E;(E=0<=y)&&Array.prototype.splice.call(h,y,1),E&&(Ee(i),e.g[o].length==0&&(delete e.g[o],e.h--))}}function sn(e,i,o,h){for(var y=0;y<e.length;++y){var E=e[y];if(!E.da&&E.listener==i&&E.capture==!!o&&E.ha==h)return y}return-1}var on="closure_lm_"+(1e6*Math.random()|0),an={};function nr(e,i,o,h,y){if(Array.isArray(i)){for(var E=0;E<i.length;E++)nr(e,i[E],o,h,y);return null}return o=sr(o),e&&e[we]?e.K(i,o,I(h)?!!h.capture:!1,y):Rs(e,i,o,!1,h,y)}function Rs(e,i,o,h,y,E){if(!i)throw Error("Invalid event type");var S=I(y)?!!y.capture:!!y,L=un(e);if(L||(e[on]=L=new Ie(e)),o=L.add(i,o,h,S,E),o.proxy)return o;if(h=Ns(),o.proxy=h,h.src=e,h.listener=o,e.addEventListener)Ts||(y=S),y===void 0&&(y=!1),e.addEventListener(i.toString(),h,y);else if(e.attachEvent)e.attachEvent(ir(i.toString()),h);else if(e.addListener&&e.removeListener)e.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return o}function Ns(){function e(o){return i.call(e.src,e.listener,o)}const i=ks;return e}function rr(e,i,o,h,y){if(Array.isArray(i))for(var E=0;E<i.length;E++)rr(e,i[E],o,h,y);else h=I(h)?!!h.capture:!!h,o=sr(o),e&&e[we]?(e=e.i,i=String(i).toString(),i in e.g&&(E=e.g[i],o=sn(E,o,h,y),-1<o&&(Ee(E[o]),Array.prototype.splice.call(E,o,1),E.length==0&&(delete e.g[i],e.h--)))):e&&(e=un(e))&&(i=e.g[i.toString()],e=-1,i&&(e=sn(i,o,h,y)),(o=-1<e?i[e]:null)&&hn(o))}function hn(e){if(typeof e!="number"&&e&&!e.da){var i=e.src;if(i&&i[we])rn(i.i,e);else{var o=e.type,h=e.proxy;i.removeEventListener?i.removeEventListener(o,h,e.capture):i.detachEvent?i.detachEvent(ir(o),h):i.addListener&&i.removeListener&&i.removeListener(h),(o=un(i))?(rn(o,e),o.h==0&&(o.src=null,i[on]=null)):Ee(e)}}}function ir(e){return e in an?an[e]:an[e]="on"+e}function ks(e,i){if(e.da)e=!0;else{i=new Jt(i,this);var o=e.listener,h=e.ha||e.src;e.fa&&hn(e),e=o.call(h,i)}return e}function un(e){return e=e[on],e instanceof Ie?e:null}var ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function sr(e){return typeof e=="function"?e:(e[ln]||(e[ln]=function(i){return e.handleEvent(i)}),e[ln])}function G(){yt.call(this),this.i=new Ie(this),this.M=this,this.F=null}C(G,yt),G.prototype[we]=!0,G.prototype.removeEventListener=function(e,i,o,h){rr(this,e,i,o,h)};function K(e,i){var o,h=e.F;if(h)for(o=[];h;h=h.F)o.push(h);if(e=e.M,h=i.type||i,typeof i=="string")i=new H(i,e);else if(i instanceof H)i.target=i.target||e;else{var y=i;i=new H(h,e),p(i,y)}if(y=!0,o)for(var E=o.length-1;0<=E;E--){var S=i.g=o[E];y=Se(S,h,!0,i)&&y}if(S=i.g=e,y=Se(S,h,!0,i)&&y,y=Se(S,h,!1,i)&&y,o)for(E=0;E<o.length;E++)S=i.g=o[E],y=Se(S,h,!1,i)&&y}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var e=this.i,i;for(i in e.g){for(var o=e.g[i],h=0;h<o.length;h++)Ee(o[h]);delete e.g[i],e.h--}}this.F=null},G.prototype.K=function(e,i,o,h){return this.i.add(String(e),i,!1,o,h)},G.prototype.L=function(e,i,o,h){return this.i.add(String(e),i,!0,o,h)};function Se(e,i,o,h){if(i=e.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,E=0;E<i.length;++E){var S=i[E];if(S&&!S.da&&S.capture==o){var L=S.listener,B=S.ha||S.src;S.fa&&rn(e.i,S),y=L.call(B,h)!==!1&&y}}return y&&!h.defaultPrevented}function or(e,i,o){if(typeof e=="function")o&&(e=D(e,o));else if(e&&typeof e.handleEvent=="function")e=D(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:_.setTimeout(e,i||0)}function ar(e){e.g=or(()=>{e.g=null,e.i&&(e.i=!1,ar(e))},e.l);const i=e.h;e.h=null,e.m.apply(null,i)}class Os extends yt{constructor(i,o){super(),this.m=i,this.l=o,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:ar(this)}N(){super.N(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yt(e){yt.call(this),this.h=e,this.g={}}C(Yt,yt);var hr=[];function ur(e){Y(e.g,function(i,o){this.g.hasOwnProperty(o)&&hn(i)},e),e.g={}}Yt.prototype.N=function(){Yt.aa.N.call(this),ur(this)},Yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cn=_.JSON.stringify,Ds=_.JSON.parse,Ls=class{stringify(e){return _.JSON.stringify(e,void 0)}parse(e){return _.JSON.parse(e,void 0)}};function fn(){}fn.prototype.h=null;function lr(e){return e.h||(e.h=e.i())}function Ms(){}var Qt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dn(){H.call(this,"d")}C(dn,H);function pn(){H.call(this,"c")}C(pn,H);var Ut={},cr=null;function gn(){return cr=cr||new G}Ut.La="serverreachability";function fr(e){H.call(this,Ut.La,e)}C(fr,H);function Zt(e){const i=gn();K(i,new fr(i))}Ut.STAT_EVENT="statevent";function dr(e,i){H.call(this,Ut.STAT_EVENT,e),this.stat=i}C(dr,H);function X(e){const i=gn();K(i,new dr(i,e))}Ut.Ma="timingevent";function pr(e,i){H.call(this,Ut.Ma,e),this.size=i}C(pr,H);function te(e,i){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){e()},i)}function ee(){this.g=!0}ee.prototype.xa=function(){this.g=!1};function Us(e,i,o,h,y,E){e.info(function(){if(e.g)if(E)for(var S="",L=E.split("&"),B=0;B<L.length;B++){var b=L[B].split("=");if(1<b.length){var W=b[0];b=b[1];var z=W.split("_");S=2<=z.length&&z[1]=="type"?S+(W+"="+b+"&"):S+(W+"=redacted&")}}else S=null;else S=E;return"XMLHTTP REQ ("+h+") [attempt "+y+"]: "+i+`
`+o+`
`+S})}function xs(e,i,o,h,y,E,S){e.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+y+"]: "+i+`
`+o+`
`+E+" "+S})}function xt(e,i,o,h){e.info(function(){return"XMLHTTP TEXT ("+i+"): "+Fs(e,o)+(h?" "+h:"")})}function Vs(e,i){e.info(function(){return"TIMEOUT: "+i})}ee.prototype.info=function(){};function Fs(e,i){if(!e.g)return i;if(!i)return null;try{var o=JSON.parse(i);if(o){for(e=0;e<o.length;e++)if(Array.isArray(o[e])){var h=o[e];if(!(2>h.length)){var y=h[1];if(Array.isArray(y)&&!(1>y.length)){var E=y[0];if(E!="noop"&&E!="stop"&&E!="close")for(var S=1;S<y.length;S++)y[S]=""}}}}return cn(o)}catch{return i}}var mn={NO_ERROR:0,TIMEOUT:8},js={},yn;function Ae(){}C(Ae,fn),Ae.prototype.g=function(){return new XMLHttpRequest},Ae.prototype.i=function(){return{}},yn=new Ae;function _t(e,i,o,h){this.j=e,this.i=i,this.l=o,this.R=h||1,this.U=new Yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gr}function gr(){this.i=null,this.g="",this.h=!1}var mr={},_n={};function vn(e,i,o){e.L=1,e.v=Pe(dt(i)),e.m=o,e.P=!0,yr(e,null)}function yr(e,i){e.F=Date.now(),Te(e),e.A=dt(e.v);var o=e.A,h=e.R;Array.isArray(h)||(h=[String(h)]),kr(o.i,"t",h),e.C=0,o=e.j.J,e.h=new gr,e.g=Xr(e.j,o?i:null,!e.m),0<e.O&&(e.M=new Os(D(e.Y,e,e.g),e.O)),i=e.U,o=e.g,h=e.ca;var y="readystatechange";Array.isArray(y)||(y&&(hr[0]=y.toString()),y=hr);for(var E=0;E<y.length;E++){var S=nr(o,y[E],h||i.handleEvent,!1,i.h||i);if(!S)break;i.g[S.key]=S}i=e.H?l(e.H):{},e.m?(e.u||(e.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,i)):(e.u="GET",e.g.ea(e.A,e.u,null,i)),Zt(),Us(e.i,e.u,e.A,e.l,e.R,e.m)}_t.prototype.ca=function(e){e=e.target;const i=this.M;i&&pt(e)==3?i.j():this.Y(e)},_t.prototype.Y=function(e){try{if(e==this.g)t:{const z=pt(this.g);var i=this.g.Ba();const jt=this.g.Z();if(!(3>z)&&(z!=3||this.g&&(this.h.h||this.g.oa()||Vr(this.g)))){this.J||z!=4||i==7||(i==8||0>=jt?Zt(3):Zt(2)),wn(this);var o=this.g.Z();this.X=o;e:if(_r(this)){var h=Vr(this.g);e="";var y=h.length,E=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bt(this),ne(this);var S="";break e}this.h.i=new _.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,e+=this.h.i.decode(h[i],{stream:!(E&&i==y-1)});h.length=0,this.h.g+=e,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=o==200,xs(this.i,this.u,this.A,this.l,this.R,z,o),this.o){if(this.T&&!this.K){e:{if(this.g){var L,B=this.g;if((L=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(L)){var b=L;break e}}b=null}if(o=b)xt(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,En(this,o);else{this.o=!1,this.s=3,X(12),bt(this),ne(this);break t}}if(this.P){o=!0;let nt;for(;!this.J&&this.C<S.length;)if(nt=Bs(this,S),nt==_n){z==4&&(this.s=4,X(14),o=!1),xt(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==mr){this.s=4,X(15),xt(this.i,this.l,S,"[Invalid Chunk]"),o=!1;break}else xt(this.i,this.l,nt,null),En(this,nt);if(_r(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||S.length!=0||this.h.h||(this.s=1,X(16),o=!1),this.o=this.o&&o,!o)xt(this.i,this.l,S,"[Invalid Chunked Response]"),bt(this),ne(this);else if(0<S.length&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.ba&&!W.M&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Cn(W),W.M=!0,X(11))}}else xt(this.i,this.l,S,null),En(this,S);z==4&&bt(this),this.o&&!this.J&&(z==4?Wr(this.j,this):(this.o=!1,Te(this)))}else io(this.g),o==400&&0<S.indexOf("Unknown SID")?(this.s=3,X(12)):(this.s=0,X(13)),bt(this),ne(this)}}}catch{}finally{}};function _r(e){return e.g?e.u=="GET"&&e.L!=2&&e.j.Ca:!1}function Bs(e,i){var o=e.C,h=i.indexOf(`
`,o);return h==-1?_n:(o=Number(i.substring(o,h)),isNaN(o)?mr:(h+=1,h+o>i.length?_n:(i=i.slice(h,h+o),e.C=h+o,i)))}_t.prototype.cancel=function(){this.J=!0,bt(this)};function Te(e){e.S=Date.now()+e.I,vr(e,e.I)}function vr(e,i){if(e.B!=null)throw Error("WatchDog timer not null");e.B=te(D(e.ba,e),i)}function wn(e){e.B&&(_.clearTimeout(e.B),e.B=null)}_t.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(Vs(this.i,this.A),this.L!=2&&(Zt(),X(17)),bt(this),this.s=2,ne(this)):vr(this,this.S-e)};function ne(e){e.j.G==0||e.J||Wr(e.j,e)}function bt(e){wn(e);var i=e.M;i&&typeof i.ma=="function"&&i.ma(),e.M=null,ur(e.U),e.g&&(i=e.g,e.g=null,i.abort(),i.ma())}function En(e,i){try{var o=e.j;if(o.G!=0&&(o.g==e||In(o.h,e))){if(!e.K&&In(o.h,e)&&o.G==3){try{var h=o.Da.g.parse(i)}catch{h=null}if(Array.isArray(h)&&h.length==3){var y=h;if(y[0]==0){t:if(!o.u){if(o.g)if(o.g.F+3e3<e.F)Le(o),Oe(o);else break t;bn(o),X(18)}}else o.za=y[1],0<o.za-o.T&&37500>y[2]&&o.F&&o.v==0&&!o.C&&(o.C=te(D(o.Za,o),6e3));if(1>=Ir(o.h)&&o.ca){try{o.ca()}catch{}o.ca=void 0}}else Pt(o,11)}else if((e.K||o.g==e)&&Le(o),!Q(i))for(y=o.Da.g.parse(i),i=0;i<y.length;i++){let b=y[i];if(o.T=b[0],b=b[1],o.G==2)if(b[0]=="c"){o.K=b[1],o.ia=b[2];const W=b[3];W!=null&&(o.la=W,o.j.info("VER="+o.la));const z=b[4];z!=null&&(o.Aa=z,o.j.info("SVER="+o.Aa));const jt=b[5];jt!=null&&typeof jt=="number"&&0<jt&&(h=1.5*jt,o.L=h,o.j.info("backChannelRequestTimeoutMs_="+h)),h=o;const nt=e.g;if(nt){const Me=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Me){var E=h.h;E.g||Me.indexOf("spdy")==-1&&Me.indexOf("quic")==-1&&Me.indexOf("h2")==-1||(E.j=E.l,E.g=new Set,E.h&&(Sn(E,E.h),E.h=null))}if(h.D){const Pn=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pn&&(h.ya=Pn,M(h.I,h.D,Pn))}}o.G=3,o.l&&o.l.ua(),o.ba&&(o.R=Date.now()-e.F,o.j.info("Handshake RTT: "+o.R+"ms")),h=o;var S=e;if(h.qa=Kr(h,h.J?h.ia:null,h.W),S.K){Sr(h.h,S);var L=S,B=h.L;B&&(L.I=B),L.B&&(wn(L),Te(L)),h.g=S}else Hr(h);0<o.i.length&&De(o)}else b[0]!="stop"&&b[0]!="close"||Pt(o,7);else o.G==3&&(b[0]=="stop"||b[0]=="close"?b[0]=="stop"?Pt(o,7):Tn(o):b[0]!="noop"&&o.l&&o.l.ta(b),o.v=0)}}Zt(4)}catch{}}var $s=class{constructor(e,i){this.g=e,this.map=i}};function wr(e){this.l=e||10,_.PerformanceNavigationTiming?(e=_.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(_.chrome&&_.chrome.loadTimes&&_.chrome.loadTimes()&&_.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Er(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ir(e){return e.h?1:e.g?e.g.size:0}function In(e,i){return e.h?e.h==i:e.g?e.g.has(i):!1}function Sn(e,i){e.g?e.g.add(i):e.h=i}function Sr(e,i){e.h&&e.h==i?e.h=null:e.g&&e.g.has(i)&&e.g.delete(i)}wr.prototype.cancel=function(){if(this.i=Ar(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ar(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let i=e.i;for(const o of e.g.values())i=i.concat(o.D);return i}return j(e.i)}function Hs(e){if(e.V&&typeof e.V=="function")return e.V();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(w(e)){for(var i=[],o=e.length,h=0;h<o;h++)i.push(e[h]);return i}i=[],o=0;for(h in e)i[o++]=e[h];return i}function Gs(e){if(e.na&&typeof e.na=="function")return e.na();if(!e.V||typeof e.V!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(w(e)||typeof e=="string"){var i=[];e=e.length;for(var o=0;o<e;o++)i.push(o);return i}i=[],o=0;for(const h in e)i[o++]=h;return i}}}function Tr(e,i){if(e.forEach&&typeof e.forEach=="function")e.forEach(i,void 0);else if(w(e)||typeof e=="string")Array.prototype.forEach.call(e,i,void 0);else for(var o=Gs(e),h=Hs(e),y=h.length,E=0;E<y;E++)i.call(void 0,h[E],o&&o[E],e)}var br=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ws(e,i){if(e){e=e.split("&");for(var o=0;o<e.length;o++){var h=e[o].indexOf("="),y=null;if(0<=h){var E=e[o].substring(0,h);y=e[o].substring(h+1)}else E=e[o];i(E,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Ct(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof Ct){this.h=e.h,be(this,e.j),this.o=e.o,this.g=e.g,Ce(this,e.s),this.l=e.l;var i=e.i,o=new se;o.i=i.i,i.g&&(o.g=new Map(i.g),o.h=i.h),Cr(this,o),this.m=e.m}else e&&(i=String(e).match(br))?(this.h=!1,be(this,i[1]||"",!0),this.o=re(i[2]||""),this.g=re(i[3]||"",!0),Ce(this,i[4]),this.l=re(i[5]||"",!0),Cr(this,i[6]||"",!0),this.m=re(i[7]||"")):(this.h=!1,this.i=new se(null,this.h))}Ct.prototype.toString=function(){var e=[],i=this.j;i&&e.push(ie(i,Pr,!0),":");var o=this.g;return(o||i=="file")&&(e.push("//"),(i=this.o)&&e.push(ie(i,Pr,!0),"@"),e.push(encodeURIComponent(String(o)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o=this.s,o!=null&&e.push(":",String(o))),(o=this.l)&&(this.g&&o.charAt(0)!="/"&&e.push("/"),e.push(ie(o,o.charAt(0)=="/"?Ks:qs,!0))),(o=this.i.toString())&&e.push("?",o),(o=this.m)&&e.push("#",ie(o,Js)),e.join("")};function dt(e){return new Ct(e)}function be(e,i,o){e.j=o?re(i,!0):i,e.j&&(e.j=e.j.replace(/:$/,""))}function Ce(e,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);e.s=i}else e.s=null}function Cr(e,i,o){i instanceof se?(e.i=i,Ys(e.i,e.h)):(o||(i=ie(i,Xs)),e.i=new se(i,e.h))}function M(e,i,o){e.i.set(i,o)}function Pe(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function re(e,i){return e?i?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ie(e,i,o){return typeof e=="string"?(e=encodeURI(e).replace(i,zs),o&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function zs(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Pr=/[#\/\?@]/g,qs=/[#\?:]/g,Ks=/[#\?]/g,Xs=/[#\?@]/g,Js=/#/g;function se(e,i){this.h=this.g=null,this.i=e||null,this.j=!!i}function vt(e){e.g||(e.g=new Map,e.h=0,e.i&&Ws(e.i,function(i,o){e.add(decodeURIComponent(i.replace(/\+/g," ")),o)}))}n=se.prototype,n.add=function(e,i){vt(this),this.i=null,e=Vt(this,e);var o=this.g.get(e);return o||this.g.set(e,o=[]),o.push(i),this.h+=1,this};function Rr(e,i){vt(e),i=Vt(e,i),e.g.has(i)&&(e.i=null,e.h-=e.g.get(i).length,e.g.delete(i))}function Nr(e,i){return vt(e),i=Vt(e,i),e.g.has(i)}n.forEach=function(e,i){vt(this),this.g.forEach(function(o,h){o.forEach(function(y){e.call(i,y,h,this)},this)},this)},n.na=function(){vt(this);const e=Array.from(this.g.values()),i=Array.from(this.g.keys()),o=[];for(let h=0;h<i.length;h++){const y=e[h];for(let E=0;E<y.length;E++)o.push(i[h])}return o},n.V=function(e){vt(this);let i=[];if(typeof e=="string")Nr(this,e)&&(i=i.concat(this.g.get(Vt(this,e))));else{e=Array.from(this.g.values());for(let o=0;o<e.length;o++)i=i.concat(e[o])}return i},n.set=function(e,i){return vt(this),this.i=null,e=Vt(this,e),Nr(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[i]),this.h+=1,this},n.get=function(e,i){return e?(e=this.V(e),0<e.length?String(e[0]):i):i};function kr(e,i,o){Rr(e,i),0<o.length&&(e.i=null,e.g.set(Vt(e,i),j(o)),e.h+=o.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],i=Array.from(this.g.keys());for(var o=0;o<i.length;o++){var h=i[o];const E=encodeURIComponent(String(h)),S=this.V(h);for(h=0;h<S.length;h++){var y=E;S[h]!==""&&(y+="="+encodeURIComponent(String(S[h]))),e.push(y)}}return this.i=e.join("&")};function Vt(e,i){return i=String(i),e.j&&(i=i.toLowerCase()),i}function Ys(e,i){i&&!e.j&&(vt(e),e.i=null,e.g.forEach(function(o,h){var y=h.toLowerCase();h!=y&&(Rr(this,h),kr(this,y,o))},e)),e.j=i}function Qs(e,i){const o=new ee;if(_.Image){const h=new Image;h.onload=q(wt,o,"TestLoadImage: loaded",!0,i,h),h.onerror=q(wt,o,"TestLoadImage: error",!1,i,h),h.onabort=q(wt,o,"TestLoadImage: abort",!1,i,h),h.ontimeout=q(wt,o,"TestLoadImage: timeout",!1,i,h),_.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=e}else i(!1)}function Zs(e,i){const o=new ee,h=new AbortController,y=setTimeout(()=>{h.abort(),wt(o,"TestPingServer: timeout",!1,i)},1e4);fetch(e,{signal:h.signal}).then(E=>{clearTimeout(y),E.ok?wt(o,"TestPingServer: ok",!0,i):wt(o,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),wt(o,"TestPingServer: error",!1,i)})}function wt(e,i,o,h,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),h(o)}catch{}}function to(){this.g=new Ls}function eo(e,i,o){const h=o||"";try{Tr(e,function(y,E){let S=y;I(y)&&(S=cn(y)),i.push(h+E+"="+encodeURIComponent(S))})}catch(y){throw i.push(h+"type="+encodeURIComponent("_badmap")),y}}function Re(e){this.l=e.Ub||null,this.j=e.eb||!1}C(Re,fn),Re.prototype.g=function(){return new Ne(this.l,this.j)},Re.prototype.i=function(e){return function(){return e}}({});function Ne(e,i){G.call(this),this.D=e,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ne,G),n=Ne.prototype,n.open=function(e,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=i,this.readyState=1,ae(this)},n.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(i.body=e),(this.D||_).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oe(this)),this.readyState=0},n.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ae(this)),this.g&&(this.readyState=3,ae(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Or(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))};function Or(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}n.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var i=e.value?e.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!e.done}))&&(this.response=this.responseText+=i)}e.done?oe(this):ae(this),this.readyState==3&&Or(this)}},n.Ra=function(e){this.g&&(this.response=this.responseText=e,oe(this))},n.Qa=function(e){this.g&&(this.response=e,oe(this))},n.ga=function(){this.g&&oe(this)};function oe(e){e.readyState=4,e.l=null,e.j=null,e.v=null,ae(e)}n.setRequestHeader=function(e,i){this.u.append(e,i)},n.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],i=this.h.entries();for(var o=i.next();!o.done;)o=o.value,e.push(o[0]+": "+o[1]),o=i.next();return e.join(`\r
`)};function ae(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ne.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});function Dr(e){let i="";return Y(e,function(o,h){i+=h,i+=":",i+=o,i+=`\r
`}),i}function An(e,i,o){t:{for(h in o){var h=!1;break t}h=!0}h||(o=Dr(o),typeof e=="string"?o!=null&&encodeURIComponent(String(o)):M(e,i,o))}function V(e){G.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(V,G);var no=/^https?$/i,ro=["POST","PUT"];n=V.prototype,n.Ha=function(e){this.J=e},n.ea=function(e,i,o,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);i=i?i.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yn.g(),this.v=this.o?lr(this.o):lr(yn),this.g.onreadystatechange=D(this.Ea,this);try{this.B=!0,this.g.open(i,String(e),!0),this.B=!1}catch(E){Lr(this,E);return}if(e=o||"",o=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var y in h)o.set(y,h[y]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const E of h.keys())o.set(E,h.get(E));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(o.keys()).find(E=>E.toLowerCase()=="content-type"),y=_.FormData&&e instanceof _.FormData,!(0<=Array.prototype.indexOf.call(ro,i,void 0))||h||y||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[E,S]of o)this.g.setRequestHeader(E,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xr(this),this.u=!0,this.g.send(e),this.u=!1}catch(E){Lr(this,E)}};function Lr(e,i){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=i,e.m=5,Mr(e),ke(e)}function Mr(e){e.A||(e.A=!0,K(e,"complete"),K(e,"error"))}n.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,K(this,"complete"),K(this,"abort"),ke(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ke(this,!0)),V.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ur(this):this.bb())},n.bb=function(){Ur(this)};function Ur(e){if(e.h&&typeof d<"u"&&(!e.v[1]||pt(e)!=4||e.Z()!=2)){if(e.u&&pt(e)==4)or(e.Ea,0,e);else if(K(e,"readystatechange"),pt(e)==4){e.h=!1;try{const S=e.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var o;if(!(o=i)){var h;if(h=S===0){var y=String(e.D).match(br)[1]||null;!y&&_.self&&_.self.location&&(y=_.self.location.protocol.slice(0,-1)),h=!no.test(y?y.toLowerCase():"")}o=h}if(o)K(e,"complete"),K(e,"success");else{e.m=6;try{var E=2<pt(e)?e.g.statusText:""}catch{E=""}e.l=E+" ["+e.Z()+"]",Mr(e)}}finally{ke(e)}}}}function ke(e,i){if(e.g){xr(e);const o=e.g,h=e.v[0]?()=>{}:null;e.g=null,e.v=null,i||K(e,"ready");try{o.onreadystatechange=h}catch{}}}function xr(e){e.I&&(_.clearTimeout(e.I),e.I=null)}n.isActive=function(){return!!this.g};function pt(e){return e.g?e.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(e){if(this.g){var i=this.g.responseText;return e&&i.indexOf(e)==0&&(i=i.substring(e.length)),Ds(i)}};function Vr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function io(e){const i={};e=(e.g&&2<=pt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<e.length;h++){if(Q(e[h]))continue;var o=g(e[h]);const y=o[0];if(o=o[1],typeof o!="string")continue;o=o.trim();const E=i[y]||[];i[y]=E,E.push(o)}m(i,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function he(e,i,o){return o&&o.internalChannelParams&&o.internalChannelParams[e]||i}function Fr(e){this.Aa=0,this.i=[],this.j=new ee,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=he("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=he("baseRetryDelayMs",5e3,e),this.cb=he("retryDelaySeedMs",1e4,e),this.Wa=he("forwardChannelMaxRetries",2,e),this.wa=he("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new wr(e&&e.concurrentRequestLimit),this.Da=new to,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Fr.prototype,n.la=8,n.G=1,n.connect=function(e,i,o,h){X(0),this.W=e,this.H=i||{},o&&h!==void 0&&(this.H.OSID=o,this.H.OAID=h),this.F=this.X,this.I=Kr(this,null,this.W),De(this)};function Tn(e){if(jr(e),e.G==3){var i=e.U++,o=dt(e.I);if(M(o,"SID",e.K),M(o,"RID",i),M(o,"TYPE","terminate"),ue(e,o),i=new _t(e,e.j,i),i.L=2,i.v=Pe(dt(o)),o=!1,_.navigator&&_.navigator.sendBeacon)try{o=_.navigator.sendBeacon(i.v.toString(),"")}catch{}!o&&_.Image&&(new Image().src=i.v,o=!0),o||(i.g=Xr(i.j,null),i.g.ea(i.v)),i.F=Date.now(),Te(i)}qr(e)}function Oe(e){e.g&&(Cn(e),e.g.cancel(),e.g=null)}function jr(e){Oe(e),e.u&&(_.clearTimeout(e.u),e.u=null),Le(e),e.h.cancel(),e.s&&(typeof e.s=="number"&&_.clearTimeout(e.s),e.s=null)}function De(e){if(!Er(e.h)&&!e.s){e.s=!0;var i=e.Ga;Kt||er(),Xt||(Kt(),Xt=!0),nn.add(i,e),e.B=0}}function so(e,i){return Ir(e.h)>=e.h.j-(e.s?1:0)?!1:e.s?(e.i=i.D.concat(e.i),!0):e.G==1||e.G==2||e.B>=(e.Va?0:e.Wa)?!1:(e.s=te(D(e.Ga,e,i),zr(e,e.B)),e.B++,!0)}n.Ga=function(e){if(this.s)if(this.s=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const y=new _t(this,this.j,e);let E=this.o;if(this.S&&(E?(E=l(E),p(E,this.S)):E=this.S),this.m!==null||this.O||(y.H=E,E=null),this.P)t:{for(var i=0,o=0;o<this.i.length;o++){e:{var h=this.i[o];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(i+=h,4096<i){i=o;break t}if(i===4096||o===this.i.length-1){i=o+1;break t}}i=1e3}else i=1e3;i=$r(this,y,i),o=dt(this.I),M(o,"RID",e),M(o,"CVER",22),this.D&&M(o,"X-HTTP-Session-Id",this.D),ue(this,o),E&&(this.O?i="headers="+encodeURIComponent(String(Dr(E)))+"&"+i:this.m&&An(o,this.m,E)),Sn(this.h,y),this.Ua&&M(o,"TYPE","init"),this.P?(M(o,"$req",i),M(o,"SID","null"),y.T=!0,vn(y,o,null)):vn(y,o,i),this.G=2}}else this.G==3&&(e?Br(this,e):this.i.length==0||Er(this.h)||Br(this))};function Br(e,i){var o;i?o=i.l:o=e.U++;const h=dt(e.I);M(h,"SID",e.K),M(h,"RID",o),M(h,"AID",e.T),ue(e,h),e.m&&e.o&&An(h,e.m,e.o),o=new _t(e,e.j,o,e.B+1),e.m===null&&(o.H=e.o),i&&(e.i=i.D.concat(e.i)),i=$r(e,o,1e3),o.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Sn(e.h,o),vn(o,h,i)}function ue(e,i){e.H&&Y(e.H,function(o,h){M(i,h,o)}),e.l&&Tr({},function(o,h){M(i,h,o)})}function $r(e,i,o){o=Math.min(e.i.length,o);var h=e.l?D(e.l.Na,e.l,e):null;t:{var y=e.i;let E=-1;for(;;){const S=["count="+o];E==-1?0<o?(E=y[0].g,S.push("ofs="+E)):E=0:S.push("ofs="+E);let L=!0;for(let B=0;B<o;B++){let b=y[B].g;const W=y[B].map;if(b-=E,0>b)E=Math.max(0,y[B].g-100),L=!1;else try{eo(W,S,"req"+b+"_")}catch{h&&h(W)}}if(L){h=S.join("&");break t}}}return e=e.i.splice(0,o),i.D=e,h}function Hr(e){if(!e.g&&!e.u){e.Y=1;var i=e.Fa;Kt||er(),Xt||(Kt(),Xt=!0),nn.add(i,e),e.v=0}}function bn(e){return e.g||e.u||3<=e.v?!1:(e.Y++,e.u=te(D(e.Fa,e),zr(e,e.v)),e.v++,!0)}n.Fa=function(){if(this.u=null,Gr(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=te(D(this.ab,this),e)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,X(10),Oe(this),Gr(this))};function Cn(e){e.A!=null&&(_.clearTimeout(e.A),e.A=null)}function Gr(e){e.g=new _t(e,e.j,"rpc",e.Y),e.m===null&&(e.g.H=e.o),e.g.O=0;var i=dt(e.qa);M(i,"RID","rpc"),M(i,"SID",e.K),M(i,"AID",e.T),M(i,"CI",e.F?"0":"1"),!e.F&&e.ja&&M(i,"TO",e.ja),M(i,"TYPE","xmlhttp"),ue(e,i),e.m&&e.o&&An(i,e.m,e.o),e.L&&(e.g.I=e.L);var o=e.g;e=e.ia,o.L=1,o.v=Pe(dt(i)),o.m=null,o.P=!0,yr(o,e)}n.Za=function(){this.C!=null&&(this.C=null,Oe(this),bn(this),X(19))};function Le(e){e.C!=null&&(_.clearTimeout(e.C),e.C=null)}function Wr(e,i){var o=null;if(e.g==i){Le(e),Cn(e),e.g=null;var h=2}else if(In(e.h,i))o=i.D,Sr(e.h,i),h=1;else return;if(e.G!=0){if(i.o)if(h==1){o=i.m?i.m.length:0,i=Date.now()-i.F;var y=e.B;h=gn(),K(h,new pr(h,o)),De(e)}else Hr(e);else if(y=i.s,y==3||y==0&&0<i.X||!(h==1&&so(e,i)||h==2&&bn(e)))switch(o&&0<o.length&&(i=e.h,i.i=i.i.concat(o)),y){case 1:Pt(e,5);break;case 4:Pt(e,10);break;case 3:Pt(e,6);break;default:Pt(e,2)}}}function zr(e,i){let o=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(o*=2),o*i}function Pt(e,i){if(e.j.info("Error code "+i),i==2){var o=D(e.fb,e),h=e.Xa;const y=!h;h=new Ct(h||"//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||be(h,"https"),Pe(h),y?Qs(h.toString(),o):Zs(h.toString(),o)}else X(2);e.G=0,e.l&&e.l.sa(i),qr(e),jr(e)}n.fb=function(e){e?(this.j.info("Successfully pinged google.com"),X(2)):(this.j.info("Failed to ping google.com"),X(1))};function qr(e){if(e.G=0,e.ka=[],e.l){const i=Ar(e.h);(i.length!=0||e.i.length!=0)&&(U(e.ka,i),U(e.ka,e.i),e.h.i.length=0,j(e.i),e.i.length=0),e.l.ra()}}function Kr(e,i,o){var h=o instanceof Ct?dt(o):new Ct(o);if(h.g!="")i&&(h.g=i+"."+h.g),Ce(h,h.s);else{var y=_.location;h=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var E=new Ct(null);h&&be(E,h),i&&(E.g=i),y&&Ce(E,y),o&&(E.l=o),h=E}return o=e.D,i=e.ya,o&&i&&M(h,o,i),M(h,"VER",e.la),ue(e,h),h}function Xr(e,i,o){if(i&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=e.Ca&&!e.pa?new V(new Re({eb:o})):new V(e.pa),i.Ha(e.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jr(){}n=Jr.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function tt(e,i){G.call(this),this.g=new Fr(i),this.l=e,this.h=i&&i.messageUrlParams||null,e=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(e?e["X-WebChannel-Content-Type"]=i.messageContentType:e={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(e?e["X-WebChannel-Client-Profile"]=i.va:e={"X-WebChannel-Client-Profile":i.va}),this.g.S=e,(e=i&&i.Sb)&&!Q(e)&&(this.g.m=e),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Q(i)&&(this.g.D=i,e=this.h,e!==null&&i in e&&(e=this.h,i in e&&delete e[i])),this.j=new Ft(this)}C(tt,G),tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Tn(this.g)},tt.prototype.o=function(e){var i=this.g;if(typeof e=="string"){var o={};o.__data__=e,e=o}else this.u&&(o={},o.__data__=cn(e),e=o);i.i.push(new $s(i.Ya++,e)),i.G==3&&De(i)},tt.prototype.N=function(){this.g.l=null,delete this.j,Tn(this.g),delete this.g,tt.aa.N.call(this)};function Yr(e){dn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var i=e.__sm__;if(i){t:{for(const o in i){e=o;break t}e=void 0}(this.i=e)&&(e=this.i,i=i!==null&&e in i?i[e]:void 0),this.data=i}else this.data=e}C(Yr,dn);function Qr(){pn.call(this),this.status=1}C(Qr,pn);function Ft(e){this.g=e}C(Ft,Jr),Ft.prototype.ua=function(){K(this.g,"a")},Ft.prototype.ta=function(e){K(this.g,new Yr(e))},Ft.prototype.sa=function(e){K(this.g,new Qr)},Ft.prototype.ra=function(){K(this.g,"b")},tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,mn.NO_ERROR=0,mn.TIMEOUT=8,mn.HTTP_ERROR=6,js.COMPLETE="complete",Ms.EventType=Qt,Qt.OPEN="a",Qt.CLOSE="b",Qt.ERROR="c",Qt.MESSAGE="d",G.prototype.listen=G.prototype.K,V.prototype.listenOnce=V.prototype.L,V.prototype.getLastError=V.prototype.Ka,V.prototype.getLastErrorCode=V.prototype.Ba,V.prototype.getStatus=V.prototype.Z,V.prototype.getResponseJson=V.prototype.Oa,V.prototype.getResponseText=V.prototype.oa,V.prototype.send=V.prototype.ea,V.prototype.setWithCredentials=V.prototype.Ha}).apply(typeof Ve<"u"?Ve:typeof self<"u"?self:typeof window<"u"?window:{});const Ii="@firebase/firestore",Si="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new qn("@firebase/firestore");function it(n,...t){if(Xe.logLevel<=O.DEBUG){const r=t.map(_s);Xe.debug(`Firestore (${en}): ${n}`,...r)}}function ys(n,...t){if(Xe.logLevel<=O.ERROR){const r=t.map(_s);Xe.error(`Firestore (${en}): ${n}`,...r)}}function _s(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(r){return JSON.stringify(r)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,vs(n,s,r)}function vs(n,t,r){let s=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(r!==void 0)try{s+=" CONTEXT: "+JSON.stringify(r)}catch{s+=" CONTEXT: "+r}throw ys(s),new Error(s)}function fe(n,t,r,s){let a="Unexpected state";typeof r=="string"?a=r:s=r,n||vs(t,a,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class N extends At{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable(()=>r(Z.UNAUTHENTICATED))}shutdown(){}}class Lh{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,r){fe(this.o===void 0,42304);let s=this.i;const a=w=>this.i!==s?(s=this.i,r(w)):Promise.resolve();let u=new de;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new de,t.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const w=u;t.enqueueRetryable(async()=>{await w.promise,await a(this.currentUser)})},_=w=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(w=>_(w)),setTimeout(()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?_(w):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new de)}},0),d()}getToken(){const t=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fe(typeof s.accessToken=="string",31837,{l:s}),new Oh(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return fe(t===null||typeof t=="string",2055,{h:t}),new Z(t)}}class Mh{constructor(t,r,s){this.P=t,this.T=r,this.I=s,this.type="FirstParty",this.user=Z.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Uh{constructor(t,r,s){this.P=t,this.T=r,this.I=s}getToken(){return Promise.resolve(new Mh(this.P,this.T,this.I))}start(t,r){t.enqueueRetryable(()=>r(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ai{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xh{constructor(t,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,r){fe(this.o===void 0,3512);const s=u=>{u.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,it("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?r(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const a=u=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?a(u):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ai(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(r=>r?(fe(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new Ai(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let s=0;s<n;s++)r[s]=Math.floor(256*Math.random());return r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=Vh(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<r&&(s+=t.charAt(a[u]%62))}return s}}function st(n,t){return n<t?-1:n>t?1:0}function Bh(n,t){let r=0;for(;r<n.length&&r<t.length;){const s=n.codePointAt(r),a=t.codePointAt(r);if(s!==a){if(s<128&&a<128)return st(s,a);{const u=Fh(),d=$h(u.encode(Ti(n,r)),u.encode(Ti(t,r)));return d!==0?d:st(s,a)}}r+=s>65535?2:1}return st(n.length,t.length)}function Ti(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function $h(n,t){for(let r=0;r<n.length&&r<t.length;++r)if(n[r]!==t[r])return st(n[r],t[r]);return st(n.length,t.length)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="__name__";class ot{constructor(t,r,s){r===void 0?r=0:r>t.length&&Je(637,{offset:r,range:t.length}),s===void 0?s=t.length-r:s>t.length-r&&Je(1746,{length:s,range:t.length-r}),this.segments=t,this.offset=r,this.len=s}get length(){return this.len}isEqual(t){return ot.comparator(this,t)===0}child(t){const r=this.segments.slice(this.offset,this.limit());return t instanceof ot?t.forEach(s=>{r.push(s)}):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,s=this.limit();r<s;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){const s=Math.min(t.length,r.length);for(let a=0;a<s;a++){const u=ot.compareSegments(t.get(a),r.get(a));if(u!==0)return u}return st(t.length,r.length)}static compareSegments(t,r){const s=ot.isNumericId(t),a=ot.isNumericId(r);return s&&!a?-1:!s&&a?1:s&&a?ot.extractNumericId(t).compare(ot.extractNumericId(r)):Bh(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yn.fromString(t.substring(4,t.length-2))}}class rt extends ot{construct(t,r,s){return new rt(t,r,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const r=[];for(const s of t){if(s.indexOf("//")>=0)throw new N(R.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);r.push(...s.split("/").filter(a=>a.length>0))}return new rt(r)}static emptyPath(){return new rt([])}}const Hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nt extends ot{construct(t,r,s){return new Nt(t,r,s)}static isValidIdentifier(t){return Hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bi}static keyField(){return new Nt([bi])}static fromServerFormat(t){const r=[];let s="",a=0;const u=()=>{if(s.length===0)throw new N(R.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(s),s=""};let d=!1;for(;a<t.length;){const _=t[a];if(_==="\\"){if(a+1===t.length)throw new N(R.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const w=t[a+1];if(w!=="\\"&&w!=="."&&w!=="`")throw new N(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=w,a+=2}else _==="`"?(d=!d,a++):_!=="."||d?(s+=_,a++):(u(),a++)}if(u(),d)throw new N(R.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Nt(r)}static emptyPath(){return new Nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.path=t}static fromPath(t){return new Ot(rt.fromString(t))}static fromName(t){return new Ot(rt.fromString(t).popFirst(5))}static empty(){return new Ot(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&rt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return rt.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Ot(new rt(t.slice()))}}function Gh(n,t,r,s){if(t===!0&&s===!0)throw new N(R.INVALID_ARGUMENT,`${n} and ${r} cannot be used together.`)}function Wh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,t){const r={typeString:n};return t&&(r.value=t),r}function ve(n,t){if(!Wh(n))throw new N(R.INVALID_ARGUMENT,"JSON must be an object");let r;for(const s in t)if(t[s]){const a=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){r=`JSON missing required field: '${s}'`;break}const d=n[s];if(a&&typeof d!==a){r=`JSON field '${s}' must be a ${a}.`;break}if(u!==void 0&&d!==u.value){r=`Expected '${s}' field to equal '${u.value}'`;break}}if(r)throw new N(R.INVALID_ARGUMENT,r);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=-62135596800,Pi=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(t){return at.fromMillis(t.getTime())}static fromMillis(t){const r=Math.floor(t/1e3),s=Math.floor((t-1e3*r)*Pi);return new at(r,s)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new N(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<Ci)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pi}_compareTo(t){return this.seconds===t.seconds?st(this.nanoseconds,t.nanoseconds):st(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ve(t,at._jsonSchema))return new at(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ci;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:F("string",at._jsonSchemaVersion),seconds:F("number"),nanoseconds:F("number")};function zh(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.binaryString=t}static fromBase64String(t){const r=function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new qh("Invalid base64 string: "+u):u}}(t);return new Mt(r)}static fromUint8Array(t){const r=function(a){let u="";for(let d=0;d<a.length;++d)u+=String.fromCharCode(a[d]);return u}(t);return new Mt(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const s=new Uint8Array(r.length);for(let a=0;a<r.length;a++)s[a]=r.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return st(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const Ri="(default)";class Ye{constructor(t,r){this.projectId=t,this.database=r||Ri}static empty(){return new Ye("","")}get isDefaultDatabase(){return this.database===Ri}isEqual(t){return t instanceof Ye&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,r=null,s=[],a=[],u=null,d="F",_=null,w=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=d,this.startAt=_,this.endAt=w,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Xh(n){return new Kh(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni,T;(T=Ni||(Ni={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Yn([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=1048576;function xn(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,r,s=1e3,a=1.5,u=6e4){this.Fi=t,this.timerId=r,this.d_=s,this.E_=a,this.A_=u,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const r=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,r-s);a>0&&it("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${r} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,r,s,a,u){this.asyncQueue=t,this.timerId=r,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,r,s,a,u){const d=Date.now()+s,_=new Qn(t,r,d,a,u);return _.start(s),_}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(R.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var ki,Oi;(Oi=ki||(ki={})).Fa="default",Oi.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="firestore.googleapis.com",Li=!0;class Mi{constructor(t){var r,s;if(t.host===void 0){if(t.ssl!==void 0)throw new N(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tu,this.ssl=Li}else this.host=t.host,this.ssl=(r=t.ssl)!==null&&r!==void 0?r:Li;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Jh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Yh)throw new N(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Gh("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zh((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new N(R.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class eu{constructor(t,r,s,a){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mi({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mi(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Dh;switch(s.type){case"firstParty":return new Uh(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new N(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const s=Di.get(r);s&&(it("ComponentProvider","Removing Datastore"),Di.delete(r),s.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(t,r,s){this.converter=r,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Zn(this.firestore,t,this._query)}}class ut{constructor(t,r,s){this.converter=r,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,s){if(ve(r,ut._jsonSchema))return new ut(t,s||null,new Ot(rt.fromString(r.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:F("string",ut._jsonSchemaVersion),referencePath:F("string")};class tr extends Zn{constructor(t,r,s){super(t,r,Xh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new Ot(t))}withConverter(t){return new tr(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="AsyncQueue";class xi{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qh(this,"async_queue_retry"),this.oc=()=>{const s=xn();s&&it(Ui,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=t;const r=xn();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const r=xn();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});const r=new de;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!zh(t))throw t;it(Ui,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){const r=this._c.then(()=>(this.nc=!0,t().catch(s=>{throw this.tc=s,this.nc=!1,ys("INTERNAL UNHANDLED ERROR: ",Vi(s)),s}).then(s=>(this.nc=!1,s))));return this._c=r,r}enqueueAfterDelay(t,r,s){this.ac(),this.sc.indexOf(t)>-1&&(r=0);const a=Qn.createAndSchedule(this,t,r,s,u=>this.lc(u));return this.ec.push(a),a}ac(){this.tc&&Je(47125,{hc:Vi(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const r of this.ec)if(r.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((r,s)=>r.targetTimeMs-s.targetTimeMs);for(const r of this.ec)if(r.skipDelay(),t!=="all"&&r.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){const r=this.ec.indexOf(t);this.ec.splice(r,1)}}function Vi(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class nu extends eu{constructor(t,r,s,a){super(t,r,s,a),this.type="firestore",this._queue=new xi,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new xi(t),this._firestoreClient=void 0,await t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new gt(Mt.fromBase64String(t))}catch(r){throw new N(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new gt(Mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ve(t,gt._jsonSchema))return gt.fromBase64String(t.bytes)}}gt._jsonSchemaVersion="firestore/bytes/1.0",gt._jsonSchema={type:F("string",gt._jsonSchemaVersion),bytes:F("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new N(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new N(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new N(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return st(this._lat,t._lat)||st(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dt._jsonSchemaVersion}}static fromJSON(t){if(ve(t,Dt._jsonSchema))return new Dt(t.latitude,t.longitude)}}Dt._jsonSchemaVersion="firestore/geoPoint/1.0",Dt._jsonSchema={type:F("string",Dt._jsonSchemaVersion),latitude:F("number"),longitude:F("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this._values=(t||[]).map(r=>r)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Lt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ve(t,Lt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(r=>typeof r=="number"))return new Lt(t.vectorValues);throw new N(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Lt._jsonSchemaVersion="firestore/vectorValue/1.0",Lt._jsonSchema={type:F("string",Lt._jsonSchemaVersion),vectorValues:F("object")};const ru=new RegExp("[~\\*/\\[\\]]");function iu(n,t,r){if(t.search(ru)>=0)throw Fi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new ws(...t.split("."))._internalPath}catch{throw Fi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Fi(n,t,r,s,a){let u=`Function ${t}() called with invalid data`;u+=". ";let d="";return new N(R.INVALID_ARGUMENT,u+n+d)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,r,s,a,u){this._firestore=t,this._userDataWriter=r,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const r=this._document.data.field(Is("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}}class su extends Es{data(){return super.data()}}function Is(n,t){return typeof t=="string"?iu(n,t):t instanceof ws?t._internalPath:t._delegate._internalPath}class Fe{constructor(t,r){this.hasPendingWrites=t,this.fromCache=r}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ht extends Es{constructor(t,r,s,a,u,d){super(t,r,s,a,d),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const r=new Ge(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,r={}){if(this._document){const s=this._document.data.field(Is("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,r.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,r={};return r.type=Ht._jsonSchemaVersion,r.bundle="",r.bundleSource="DocumentSnapshot",r.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?r:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),r.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),r)}}Ht._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ht._jsonSchema={type:F("string",Ht._jsonSchemaVersion),bundleSource:F("string","DocumentSnapshot"),bundleName:F("string"),bundle:F("string")};class Ge extends Ht{data(t={}){return super.data(t)}}class pe{constructor(t,r,s,a){this._firestore=t,this._userDataWriter=r,this._snapshot=a,this.metadata=new Fe(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const t=[];return this.forEach(r=>t.push(r)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,r){this._snapshot.docs.forEach(s=>{t.call(r,new Ge(this._firestore,this._userDataWriter,s.key,s,new Fe(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const r=!!t.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new N(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(a,u){if(a._snapshot.oldDocs.isEmpty()){let d=0;return a._snapshot.docChanges.map(_=>{const w=new Ge(a._firestore,a._userDataWriter,_.doc.key,_.doc,new Fe(a._snapshot.mutatedKeys.has(_.doc.key),a._snapshot.fromCache),a.query.converter);return _.doc,{type:"added",doc:w,oldIndex:-1,newIndex:d++}})}{let d=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(_=>u||_.type!==3).map(_=>{const w=new Ge(a._firestore,a._userDataWriter,_.doc.key,_.doc,new Fe(a._snapshot.mutatedKeys.has(_.doc.key),a._snapshot.fromCache),a.query.converter);let I=-1,k=-1;return _.type!==0&&(I=d.indexOf(_.doc.key),d=d.delete(_.doc.key)),_.type!==1&&(d=d.add(_.doc),k=d.indexOf(_.doc.key)),{type:ou(_.type),doc:w,oldIndex:I,newIndex:k}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=pe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=jh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const r=[],s=[],a=[];return this.docs.forEach(u=>{u._document!==null&&(r.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),a.push(u.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ou(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Je(61501,{type:n})}}pe._jsonSchemaVersion="firestore/querySnapshot/1.0",pe._jsonSchema={type:F("string",pe._jsonSchemaVersion),bundleSource:F("string","QuerySnapshot"),bundleName:F("string"),bundle:F("string")};(function(t,r=!0){(function(a){en=a})(Ze),Wt(new Gt("firestore",(s,{instanceIdentifier:a,options:u})=>{const d=s.getProvider("app").getImmediate(),_=new nu(new Lh(s.getProvider("auth-internal")),new xh(d,s.getProvider("app-check-internal")),function(I,k){if(!Object.prototype.hasOwnProperty.apply(I.options,["projectId"]))throw new N(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ye(I.options.projectId,k)}(d,a),d);return u=Object.assign({useFetchStreams:r},u),_._setSettings(u),_},"PUBLIC").setMultipleInstances(!0)),St(Ii,Si,t),St(Ii,Si,"esm2017")})();
