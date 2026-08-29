function Vx(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Bx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var um={exports:{}},Ps={},dm={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),_x=Symbol.for("react.portal"),Wx=Symbol.for("react.fragment"),Hx=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),$x=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Xx=Symbol.for("react.memo"),qx=Symbol.for("react.lazy"),rd=Symbol.iterator;function Jx(e){return e===null||typeof e!="object"?null:(e=rd&&e[rd]||e["@@iterator"],typeof e=="function"?e:null)}var pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,mm={};function Ar(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||pm}Ar.prototype.isReactComponent={};Ar.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ar.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function hm(){}hm.prototype=Ar.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=mm,this.updater=n||pm}var cc=lc.prototype=new hm;cc.constructor=lc;fm(cc,Ar.prototype);cc.isPureReactComponent=!0;var id=Array.isArray,gm=Object.prototype.hasOwnProperty,uc={current:null},xm={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)gm.call(t,r)&&!xm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xi,type:e,key:s,ref:a,props:i,_owner:uc.current}}function Qx(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function Zx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var od=/\/+/g;function ta(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zx(""+e.key):t.toString(36)}function Io(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xi:case _x:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ta(a,0):r,id(i)?(n="",e!=null&&(n=e.replace(od,"$&/")+"/"),Io(i,t,n,"",function(u){return u})):i!=null&&(dc(i)&&(i=Qx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(od,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",id(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+ta(s,l);a+=Io(s,t,n,c,i)}else if(c=Jx(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+ta(s,l++),a+=Io(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function co(e,t,n){if(e==null)return e;var r=[],i=0;return Io(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ey(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Fe={current:null},Ro={transition:null},ty={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:uc};function vm(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Ar;K.Fragment=Wx;K.Profiler=Ux;K.PureComponent=lc;K.StrictMode=Hx;K.Suspense=Gx;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ty;K.act=vm;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=fm({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)gm.call(t,c)&&!xm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Xi,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:Yx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:$x,_context:e},e.Consumer=e};K.createElement=ym;K.createFactory=function(e){var t=ym.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Kx,render:e}};K.isValidElement=dc;K.lazy=function(e){return{$$typeof:qx,_payload:{_status:-1,_result:e},_init:ey}};K.memo=function(e,t){return{$$typeof:Xx,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};K.unstable_act=vm;K.useCallback=function(e,t){return Fe.current.useCallback(e,t)};K.useContext=function(e){return Fe.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Fe.current.useDeferredValue(e)};K.useEffect=function(e,t){return Fe.current.useEffect(e,t)};K.useId=function(){return Fe.current.useId()};K.useImperativeHandle=function(e,t,n){return Fe.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Fe.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Fe.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Fe.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Fe.current.useReducer(e,t,n)};K.useRef=function(e){return Fe.current.useRef(e)};K.useState=function(e){return Fe.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Fe.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Fe.current.useTransition()};K.version="18.3.1";dm.exports=K;var m=dm.exports;const ny=Bx(m),ry=Vx({__proto__:null,default:ny},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=m,oy=Symbol.for("react.element"),sy=Symbol.for("react.fragment"),ay=Object.prototype.hasOwnProperty,ly=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cy={key:!0,ref:!0,__self:!0,__source:!0};function bm(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)ay.call(t,r)&&!cy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:oy,type:e,key:s,ref:a,props:i,_owner:ly.current}}Ps.Fragment=sy;Ps.jsx=bm;Ps.jsxs=bm;um.exports=Ps;var o=um.exports,wm={exports:{}},Qe={},jm={exports:{}},Sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var W=T.length;T.push(M);e:for(;0<W;){var q=W-1>>>1,ee=T[q];if(0<i(ee,M))T[q]=M,T[W]=ee,W=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var M=T[0],W=T.pop();if(W!==M){T[0]=W;e:for(var q=0,ee=T.length,lt=ee>>>1;q<lt;){var Ve=2*(q+1)-1,P=T[Ve],z=Ve+1,B=T[z];if(0>i(P,W))z<ee&&0>i(B,P)?(T[q]=B,T[z]=W,q=z):(T[q]=P,T[Ve]=W,q=Ve);else if(z<ee&&0>i(B,W))T[q]=B,T[z]=W,q=z;else break e}}return M}function i(T,M){var W=T.sortIndex-M.sortIndex;return W!==0?W:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,x=!1,v=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(T){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=T)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function S(T){if(b=!1,y(T),!v)if(n(c)!==null)v=!0,R(j);else{var M=n(u);M!==null&&A(S,M.startTime-T)}}function j(T,M){v=!1,b&&(b=!1,g(C),C=-1),x=!0;var W=f;try{for(y(M),p=n(c);p!==null&&(!(p.expirationTime>M)||T&&!V());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var ee=q(p.expirationTime<=M);M=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(c)&&r(c),y(M)}else r(c);p=n(c)}if(p!==null)var lt=!0;else{var Ve=n(u);Ve!==null&&A(S,Ve.startTime-M),lt=!1}return lt}finally{p=null,f=W,x=!1}}var k=!1,E=null,C=-1,O=5,D=-1;function V(){return!(e.unstable_now()-D<O)}function _(){if(E!==null){var T=e.unstable_now();D=T;var M=!0;try{M=E(!0,T)}finally{M?$():(k=!1,E=null)}}else k=!1}var $;if(typeof h=="function")$=function(){h(_)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Q=F.port2;F.port1.onmessage=_,$=function(){Q.postMessage(null)}}else $=function(){w(_,0)};function R(T){E=T,k||(k=!0,$())}function A(T,M){C=w(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,R(j))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var W=f;f=M;try{return T()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var W=f;f=T;try{return M()}finally{f=W}},e.unstable_scheduleCallback=function(T,M,W){var q=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?q+W:q):W=q,T){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=W+ee,T={id:d++,callback:M,priorityLevel:T,startTime:W,expirationTime:ee,sortIndex:-1},W>q?(T.sortIndex=W,t(u,T),n(c)===null&&T===n(u)&&(b?(g(C),C=-1):b=!0,A(S,W-q))):(T.sortIndex=ee,t(c,T),v||x||(v=!0,R(j))),T},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(T){var M=f;return function(){var W=f;f=M;try{return T.apply(this,arguments)}finally{f=W}}}})(Sm);jm.exports=Sm;var uy=jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy=m,qe=uy;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var km=new Set,ki={};function Kn(e,t){br(e,t),br(e+"Capture",t)}function br(e,t){for(ki[e]=t,e=0;e<t.length;e++)km.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=Object.prototype.hasOwnProperty,py=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sd={},ad={};function fy(e){return Xa.call(ad,e)?!0:Xa.call(sd,e)?!1:py.test(e)?ad[e]=!0:(sd[e]=!0,!1)}function my(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hy(e,t,n,r){if(t===null||typeof t>"u"||my(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Oe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,fc);Ce[t]=new Oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,fc);Ce[t]=new Oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,fc);Ce[t]=new Oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function mc(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hy(t,n,i,r)&&(n=null),r||i===null?fy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wt=dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),Jn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),hc=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),Ja=Symbol.for("react.suspense"),Qa=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Tm=Symbol.for("react.offscreen"),ld=Symbol.iterator;function Br(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,na;function Zr(e){if(na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);na=t&&t[1]||""}return`
`+na+e}var ra=!1;function ia(e,t){if(!e||ra)return"";ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function gy(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=ia(e.type,!1),e;case 11:return e=ia(e.type.render,!1),e;case 1:return e=ia(e.type,!0),e;default:return""}}function Za(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Jn:return"Portal";case qa:return"Profiler";case hc:return"StrictMode";case Ja:return"Suspense";case Qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Em:return(e.displayName||"Context")+".Consumer";case Cm:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:Za(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Za(e(t))}catch{}}return null}function xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Za(t);case 8:return t===hc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yy(e){var t=Nm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=yy(e))}function Pm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function el(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Am(e,t){t=t.checked,t!=null&&mc(e,"checked",t,!1)}function tl(e,t){Am(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?nl(e,t.type,n):t.hasOwnProperty("defaultValue")&&nl(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ud(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function nl(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ei=Array.isArray;function mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(ei(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function zm(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Im(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function il(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Im(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fo,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=fo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vy=["Webkit","ms","Moz","O"];Object.keys(li).forEach(function(e){vy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),li[t]=li[e]})});function Dm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||li.hasOwnProperty(e)&&li[e]?(""+t).trim():t+"px"}function Lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Dm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var by=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(by[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var al=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,hr=null,gr=null;function fd(e){if(e=Qi(e)){if(typeof ll!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Ds(t),ll(e.stateNode,e.type,t))}}function Mm(e){hr?gr?gr.push(e):gr=[e]:hr=e}function Fm(){if(hr){var e=hr,t=gr;if(gr=hr=null,fd(e),t)for(e=0;e<t.length;e++)fd(t[e])}}function Om(e,t){return e(t)}function Vm(){}var oa=!1;function Bm(e,t,n){if(oa)return e(t,n);oa=!0;try{return Om(e,t,n)}finally{oa=!1,(hr!==null||gr!==null)&&(Vm(),Fm())}}function Ei(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var cl=!1;if(Ot)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){cl=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{cl=!1}function wy(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ci=!1,Qo=null,Zo=!1,ul=null,jy={onError:function(e){ci=!0,Qo=e}};function Sy(e,t,n,r,i,s,a,l,c){ci=!1,Qo=null,wy.apply(jy,arguments)}function ky(e,t,n,r,i,s,a,l,c){if(Sy.apply(this,arguments),ci){if(ci){var u=Qo;ci=!1,Qo=null}else throw Error(I(198));Zo||(Zo=!0,ul=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function md(e){if(Gn(e)!==e)throw Error(I(188))}function Cy(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return md(i),e;if(s===r)return md(i),t;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Wm(e){return e=Cy(e),e!==null?Hm(e):null}function Hm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Hm(e);if(t!==null)return t;e=e.sibling}return null}var Um=qe.unstable_scheduleCallback,hd=qe.unstable_cancelCallback,Ey=qe.unstable_shouldYield,Ty=qe.unstable_requestPaint,fe=qe.unstable_now,Ny=qe.unstable_getCurrentPriorityLevel,vc=qe.unstable_ImmediatePriority,$m=qe.unstable_UserBlockingPriority,es=qe.unstable_NormalPriority,Py=qe.unstable_LowPriority,Ym=qe.unstable_IdlePriority,As=null,Ct=null;function Ay(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(As,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Ry,zy=Math.log,Iy=Math.LN2;function Ry(e){return e>>>=0,e===0?32:31-(zy(e)/Iy|0)|0}var mo=64,ho=4194304;function ti(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=ti(l):(s&=a,s!==0&&(r=ti(s)))}else a=n&~i,a!==0?r=ti(a):s!==0&&(r=ti(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),i=1<<n,r|=e[n],t&=~i;return r}function Dy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ly(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ht(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Dy(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function dl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Km(){var e=mo;return mo<<=1,!(mo&4194240)&&(mo=64),e}function sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function My(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function bc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Gm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Xm,wc,qm,Jm,Qm,pl=!1,go=[],sn=null,an=null,ln=null,Ti=new Map,Ni=new Map,en=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":ln=null;break;case"pointerover":case"pointerout":Ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Wr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qi(t),t!==null&&wc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Oy(e,t,n,r,i){switch(t){case"focusin":return sn=Wr(sn,e,t,n,r,i),!0;case"dragenter":return an=Wr(an,e,t,n,r,i),!0;case"mouseover":return ln=Wr(ln,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ti.set(s,Wr(Ti.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ni.set(s,Wr(Ni.get(s)||null,e,t,n,r,i)),!0}return!1}function Zm(e){var t=Dn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=_m(n),t!==null){e.blockedOn=t,Qm(e.priority,function(){qm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);al=r,n.target.dispatchEvent(r),al=null}else return t=Qi(n),t!==null&&wc(t),e.blockedOn=n,!1;t.shift()}return!0}function xd(e,t,n){Do(e)&&n.delete(t)}function Vy(){pl=!1,sn!==null&&Do(sn)&&(sn=null),an!==null&&Do(an)&&(an=null),ln!==null&&Do(ln)&&(ln=null),Ti.forEach(xd),Ni.forEach(xd)}function Hr(e,t){e.blockedOn===t&&(e.blockedOn=null,pl||(pl=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Vy)))}function Pi(e){function t(i){return Hr(i,e)}if(0<go.length){Hr(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(sn!==null&&Hr(sn,e),an!==null&&Hr(an,e),ln!==null&&Hr(ln,e),Ti.forEach(t),Ni.forEach(t),n=0;n<en.length;n++)r=en[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)Zm(n),n.blockedOn===null&&en.shift()}var xr=Wt.ReactCurrentBatchConfig,ns=!0;function By(e,t,n,r){var i=J,s=xr.transition;xr.transition=null;try{J=1,jc(e,t,n,r)}finally{J=i,xr.transition=s}}function _y(e,t,n,r){var i=J,s=xr.transition;xr.transition=null;try{J=4,jc(e,t,n,r)}finally{J=i,xr.transition=s}}function jc(e,t,n,r){if(ns){var i=fl(e,t,n,r);if(i===null)ga(e,t,r,rs,n),gd(e,r);else if(Oy(i,e,t,n,r))r.stopPropagation();else if(gd(e,r),t&4&&-1<Fy.indexOf(e)){for(;i!==null;){var s=Qi(i);if(s!==null&&Xm(s),s=fl(e,t,n,r),s===null&&ga(e,t,r,rs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ga(e,t,r,null,n)}}var rs=null;function fl(e,t,n,r){if(rs=null,e=yc(r),e=Dn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function eh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case vc:return 1;case $m:return 4;case es:case Py:return 16;case Ym:return 536870912;default:return 16}default:return 16}}var nn=null,Sc=null,Lo=null;function th(){if(Lo)return Lo;var e,t=Sc,n=t.length,r,i="value"in nn?nn.value:nn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Lo=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function yd(){return!1}function Ze(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xo:yd,this.isPropagationStopped=yd,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Ze(zr),Ji=ce({},zr,{view:0,detail:0}),Wy=Ze(Ji),aa,la,Ur,zs=ce({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ur&&(Ur&&e.type==="mousemove"?(aa=e.screenX-Ur.screenX,la=e.screenY-Ur.screenY):la=aa=0,Ur=e),aa)},movementY:function(e){return"movementY"in e?e.movementY:la}}),vd=Ze(zs),Hy=ce({},zs,{dataTransfer:0}),Uy=Ze(Hy),$y=ce({},Ji,{relatedTarget:0}),ca=Ze($y),Yy=ce({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=Ze(Yy),Gy=ce({},zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xy=Ze(Gy),qy=ce({},zr,{data:0}),bd=Ze(qy),Jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zy[e])?!!t[e]:!1}function Cc(){return e1}var t1=ce({},Ji,{key:function(e){if(e.key){var t=Jy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n1=Ze(t1),r1=ce({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=Ze(r1),i1=ce({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),o1=Ze(i1),s1=ce({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),a1=Ze(s1),l1=ce({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c1=Ze(l1),u1=[9,13,27,32],Ec=Ot&&"CompositionEvent"in window,ui=null;Ot&&"documentMode"in document&&(ui=document.documentMode);var d1=Ot&&"TextEvent"in window&&!ui,nh=Ot&&(!Ec||ui&&8<ui&&11>=ui),jd=" ",Sd=!1;function rh(e,t){switch(e){case"keyup":return u1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zn=!1;function p1(e,t){switch(e){case"compositionend":return ih(t);case"keypress":return t.which!==32?null:(Sd=!0,jd);case"textInput":return e=t.data,e===jd&&Sd?null:e;default:return null}}function f1(e,t){if(Zn)return e==="compositionend"||!Ec&&rh(e,t)?(e=th(),Lo=Sc=nn=null,Zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return nh&&t.locale!=="ko"?null:t.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!m1[e.type]:t==="textarea"}function oh(e,t,n,r){Mm(r),t=is(t,"onChange"),0<t.length&&(n=new kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var di=null,Ai=null;function h1(e){gh(e,0)}function Is(e){var t=nr(e);if(Pm(t))return e}function g1(e,t){if(e==="change")return t}var sh=!1;if(Ot){var ua;if(Ot){var da="oninput"in document;if(!da){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),da=typeof Cd.oninput=="function"}ua=da}else ua=!1;sh=ua&&(!document.documentMode||9<document.documentMode)}function Ed(){di&&(di.detachEvent("onpropertychange",ah),Ai=di=null)}function ah(e){if(e.propertyName==="value"&&Is(Ai)){var t=[];oh(t,Ai,e,yc(e)),Bm(h1,t)}}function x1(e,t,n){e==="focusin"?(Ed(),di=t,Ai=n,di.attachEvent("onpropertychange",ah)):e==="focusout"&&Ed()}function y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Is(Ai)}function v1(e,t){if(e==="click")return Is(t)}function b1(e,t){if(e==="input"||e==="change")return Is(t)}function w1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:w1;function zi(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xa.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Td(n)}}function lh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ch(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function Tc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function j1(e){var t=ch(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lh(n.ownerDocument.documentElement,n)){if(r!==null&&Tc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Nd(n,s);var a=Nd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S1=Ot&&"documentMode"in document&&11>=document.documentMode,er=null,ml=null,pi=null,hl=!1;function Pd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hl||er==null||er!==Jo(r)||(r=er,"selectionStart"in r&&Tc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pi&&zi(pi,r)||(pi=r,r=is(ml,"onSelect"),0<r.length&&(t=new kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=er)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var tr={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},pa={},uh={};Ot&&(uh=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function Rs(e){if(pa[e])return pa[e];if(!tr[e])return e;var t=tr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uh)return pa[e]=t[n];return e}var dh=Rs("animationend"),ph=Rs("animationiteration"),fh=Rs("animationstart"),mh=Rs("transitionend"),hh=new Map,Ad="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){hh.set(e,t),Kn(t,[e])}for(var fa=0;fa<Ad.length;fa++){var ma=Ad[fa],k1=ma.toLowerCase(),C1=ma[0].toUpperCase()+ma.slice(1);vn(k1,"on"+C1)}vn(dh,"onAnimationEnd");vn(ph,"onAnimationIteration");vn(fh,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(mh,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));function zd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ky(r,t,void 0,e),e.currentTarget=null}function gh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;zd(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;zd(i,l,u),s=c}}}if(Zo)throw e=ul,Zo=!1,ul=null,e}function te(e,t){var n=t[bl];n===void 0&&(n=t[bl]=new Set);var r=e+"__bubble";n.has(r)||(xh(t,e,2,!1),n.add(r))}function ha(e,t,n){var r=0;t&&(r|=4),xh(n,e,r,t)}var vo="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[vo]){e[vo]=!0,km.forEach(function(n){n!=="selectionchange"&&(E1.has(n)||ha(n,!1,e),ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[vo]||(t[vo]=!0,ha("selectionchange",!1,t))}}function xh(e,t,n,r){switch(eh(t)){case 1:var i=By;break;case 4:i=_y;break;default:i=jc}n=i.bind(null,t,n,e),i=void 0,!cl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ga(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Dn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Bm(function(){var u=s,d=yc(n),p=[];e:{var f=hh.get(e);if(f!==void 0){var x=kc,v=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":x=n1;break;case"focusin":v="focus",x=ca;break;case"focusout":v="blur",x=ca;break;case"beforeblur":case"afterblur":x=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=o1;break;case dh:case ph:case fh:x=Ky;break;case mh:x=a1;break;case"scroll":x=Wy;break;case"wheel":x=c1;break;case"copy":case"cut":case"paste":x=Xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wd}var b=(t&4)!==0,w=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var h=u,y;h!==null;){y=h;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=Ei(h,g),S!=null&&b.push(Ri(h,S,y)))),w)break;h=h.return}0<b.length&&(f=new x(f,v,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==al&&(v=n.relatedTarget||n.fromElement)&&(Dn(v)||v[Vt]))break e;if((x||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?Dn(v):null,v!==null&&(w=Gn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(b=vd,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=wd,S="onPointerLeave",g="onPointerEnter",h="pointer"),w=x==null?f:nr(x),y=v==null?f:nr(v),f=new b(S,h+"leave",x,n,d),f.target=w,f.relatedTarget=y,S=null,Dn(d)===u&&(b=new b(g,h+"enter",v,n,d),b.target=y,b.relatedTarget=w,S=b),w=S,x&&v)t:{for(b=x,g=v,h=0,y=b;y;y=qn(y))h++;for(y=0,S=g;S;S=qn(S))y++;for(;0<h-y;)b=qn(b),h--;for(;0<y-h;)g=qn(g),y--;for(;h--;){if(b===g||g!==null&&b===g.alternate)break t;b=qn(b),g=qn(g)}b=null}else b=null;x!==null&&Id(p,f,x,b,!1),v!==null&&w!==null&&Id(p,w,v,b,!0)}}e:{if(f=u?nr(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var j=g1;else if(kd(f))if(sh)j=b1;else{j=y1;var k=x1}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=v1);if(j&&(j=j(e,u))){oh(p,j,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&nl(f,"number",f.value)}switch(k=u?nr(u):window,e){case"focusin":(kd(k)||k.contentEditable==="true")&&(er=k,ml=u,pi=null);break;case"focusout":pi=ml=er=null;break;case"mousedown":hl=!0;break;case"contextmenu":case"mouseup":case"dragend":hl=!1,Pd(p,n,d);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":Pd(p,n,d)}var E;if(Ec)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Zn?rh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(nh&&n.locale!=="ko"&&(Zn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Zn&&(E=th()):(nn=d,Sc="value"in nn?nn.value:nn.textContent,Zn=!0)),k=is(u,C),0<k.length&&(C=new bd(C,e,null,n,d),p.push({event:C,listeners:k}),E?C.data=E:(E=ih(n),E!==null&&(C.data=E)))),(E=d1?p1(e,n):f1(e,n))&&(u=is(u,"onBeforeInput"),0<u.length&&(d=new bd("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=E))}gh(p,t)})}function Ri(e,t,n){return{instance:e,listener:t,currentTarget:n}}function is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ei(e,n),s!=null&&r.unshift(Ri(e,s,i)),s=Ei(e,t),s!=null&&r.push(Ri(e,s,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Id(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Ei(n,s),c!=null&&a.unshift(Ri(n,c,l))):i||(c=Ei(n,s),c!=null&&a.push(Ri(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var T1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function Rd(e){return(typeof e=="string"?e:""+e).replace(T1,`
`).replace(N1,"")}function bo(e,t,n){if(t=Rd(t),Rd(e)!==t&&n)throw Error(I(425))}function os(){}var gl=null,xl=null;function yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var vl=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(z1)}:vl;function z1(e){setTimeout(function(){throw e})}function xa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pi(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ld(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ir,Di="__reactProps$"+Ir,Vt="__reactContainer$"+Ir,bl="__reactEvents$"+Ir,I1="__reactListeners$"+Ir,R1="__reactHandles$"+Ir;function Dn(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ld(e);e!==null;){if(n=e[wt])return n;e=Ld(e)}return t}e=n,n=e.parentNode}return null}function Qi(e){return e=e[wt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Ds(e){return e[Di]||null}var wl=[],rr=-1;function bn(e){return{current:e}}function ne(e){0>rr||(e.current=wl[rr],wl[rr]=null,rr--)}function Z(e,t){rr++,wl[rr]=e.current,e.current=t}var gn={},ze=bn(gn),We=bn(!1),_n=gn;function wr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function ss(){ne(We),ne(ze)}function Md(e,t,n){if(ze.current!==gn)throw Error(I(168));Z(ze,t),Z(We,n)}function yh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,xy(e)||"Unknown",i));return ce({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,_n=ze.current,Z(ze,e),Z(We,We.current),!0}function Fd(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=yh(e,t,_n),r.__reactInternalMemoizedMergedChildContext=e,ne(We),ne(ze),Z(ze,e)):ne(We),Z(We,n)}var It=null,Ls=!1,ya=!1;function vh(e){It===null?It=[e]:It.push(e)}function D1(e){Ls=!0,vh(e)}function wn(){if(!ya&&It!==null){ya=!0;var e=0,t=J;try{var n=It;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}It=null,Ls=!1}catch(i){throw It!==null&&(It=It.slice(e+1)),Um(vc,wn),i}finally{J=t,ya=!1}}return null}var ir=[],or=0,ls=null,cs=0,nt=[],rt=0,Wn=null,Rt=1,Dt="";function An(e,t){ir[or++]=cs,ir[or++]=ls,ls=e,cs=t}function bh(e,t,n){nt[rt++]=Rt,nt[rt++]=Dt,nt[rt++]=Wn,Wn=e;var r=Rt;e=Dt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Rt=1<<32-ht(t)+i|n<<i|r,Dt=s+e}else Rt=1<<s|n<<i|r,Dt=e}function Nc(e){e.return!==null&&(An(e,1),bh(e,1,0))}function Pc(e){for(;e===ls;)ls=ir[--or],ir[or]=null,cs=ir[--or],ir[or]=null;for(;e===Wn;)Wn=nt[--rt],nt[rt]=null,Dt=nt[--rt],nt[rt]=null,Rt=nt[--rt],nt[rt]=null}var Xe=null,Ke=null,re=!1,ft=null;function wh(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Od(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ke=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:Rt,overflow:Dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ke=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(re){var t=Ke;if(t){var n=t;if(!Od(e,t)){if(jl(e))throw Error(I(418));t=cn(n.nextSibling);var r=Xe;t&&Od(e,t)?wh(r,n):(e.flags=e.flags&-4097|2,re=!1,Xe=e)}}else{if(jl(e))throw Error(I(418));e.flags=e.flags&-4097|2,re=!1,Xe=e}}}function Vd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function wo(e){if(e!==Xe)return!1;if(!re)return Vd(e),re=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yl(e.type,e.memoizedProps)),t&&(t=Ke)){if(jl(e))throw jh(),Error(I(418));for(;t;)wh(e,t),t=cn(t.nextSibling)}if(Vd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Xe?cn(e.stateNode.nextSibling):null;return!0}function jh(){for(var e=Ke;e;)e=cn(e.nextSibling)}function jr(){Ke=Xe=null,re=!1}function Ac(e){ft===null?ft=[e]:ft.push(e)}var L1=Wt.ReactCurrentBatchConfig;function $r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function jo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bd(e){var t=e._init;return t(e._payload)}function Sh(e){function t(g,h){if(e){var y=g.deletions;y===null?(g.deletions=[h],g.flags|=16):y.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=fn(g,h),g.index=0,g.sibling=null,g}function s(g,h,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<h?(g.flags|=2,h):y):(g.flags|=2,h)):(g.flags|=1048576,h)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,y,S){return h===null||h.tag!==6?(h=Ca(y,g.mode,S),h.return=g,h):(h=i(h,y),h.return=g,h)}function c(g,h,y,S){var j=y.type;return j===Qn?d(g,h,y.props.children,S,y.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qt&&Bd(j)===h.type)?(S=i(h,y.props),S.ref=$r(g,h,y),S.return=g,S):(S=Ho(y.type,y.key,y.props,null,g.mode,S),S.ref=$r(g,h,y),S.return=g,S)}function u(g,h,y,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Ea(y,g.mode,S),h.return=g,h):(h=i(h,y.children||[]),h.return=g,h)}function d(g,h,y,S,j){return h===null||h.tag!==7?(h=Vn(y,g.mode,S,j),h.return=g,h):(h=i(h,y),h.return=g,h)}function p(g,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ca(""+h,g.mode,y),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case uo:return y=Ho(h.type,h.key,h.props,null,g.mode,y),y.ref=$r(g,null,h),y.return=g,y;case Jn:return h=Ea(h,g.mode,y),h.return=g,h;case Qt:var S=h._init;return p(g,S(h._payload),y)}if(ei(h)||Br(h))return h=Vn(h,g.mode,y,null),h.return=g,h;jo(g,h)}return null}function f(g,h,y,S){var j=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(g,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case uo:return y.key===j?c(g,h,y,S):null;case Jn:return y.key===j?u(g,h,y,S):null;case Qt:return j=y._init,f(g,h,j(y._payload),S)}if(ei(y)||Br(y))return j!==null?null:d(g,h,y,S,null);jo(g,y)}return null}function x(g,h,y,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,l(h,g,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case uo:return g=g.get(S.key===null?y:S.key)||null,c(h,g,S,j);case Jn:return g=g.get(S.key===null?y:S.key)||null,u(h,g,S,j);case Qt:var k=S._init;return x(g,h,y,k(S._payload),j)}if(ei(S)||Br(S))return g=g.get(y)||null,d(h,g,S,j,null);jo(h,S)}return null}function v(g,h,y,S){for(var j=null,k=null,E=h,C=h=0,O=null;E!==null&&C<y.length;C++){E.index>C?(O=E,E=null):O=E.sibling;var D=f(g,E,y[C],S);if(D===null){E===null&&(E=O);break}e&&E&&D.alternate===null&&t(g,E),h=s(D,h,C),k===null?j=D:k.sibling=D,k=D,E=O}if(C===y.length)return n(g,E),re&&An(g,C),j;if(E===null){for(;C<y.length;C++)E=p(g,y[C],S),E!==null&&(h=s(E,h,C),k===null?j=E:k.sibling=E,k=E);return re&&An(g,C),j}for(E=r(g,E);C<y.length;C++)O=x(E,g,C,y[C],S),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?C:O.key),h=s(O,h,C),k===null?j=O:k.sibling=O,k=O);return e&&E.forEach(function(V){return t(g,V)}),re&&An(g,C),j}function b(g,h,y,S){var j=Br(y);if(typeof j!="function")throw Error(I(150));if(y=j.call(y),y==null)throw Error(I(151));for(var k=j=null,E=h,C=h=0,O=null,D=y.next();E!==null&&!D.done;C++,D=y.next()){E.index>C?(O=E,E=null):O=E.sibling;var V=f(g,E,D.value,S);if(V===null){E===null&&(E=O);break}e&&E&&V.alternate===null&&t(g,E),h=s(V,h,C),k===null?j=V:k.sibling=V,k=V,E=O}if(D.done)return n(g,E),re&&An(g,C),j;if(E===null){for(;!D.done;C++,D=y.next())D=p(g,D.value,S),D!==null&&(h=s(D,h,C),k===null?j=D:k.sibling=D,k=D);return re&&An(g,C),j}for(E=r(g,E);!D.done;C++,D=y.next())D=x(E,g,C,D.value,S),D!==null&&(e&&D.alternate!==null&&E.delete(D.key===null?C:D.key),h=s(D,h,C),k===null?j=D:k.sibling=D,k=D);return e&&E.forEach(function(_){return t(g,_)}),re&&An(g,C),j}function w(g,h,y,S){if(typeof y=="object"&&y!==null&&y.type===Qn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case uo:e:{for(var j=y.key,k=h;k!==null;){if(k.key===j){if(j=y.type,j===Qn){if(k.tag===7){n(g,k.sibling),h=i(k,y.props.children),h.return=g,g=h;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qt&&Bd(j)===k.type){n(g,k.sibling),h=i(k,y.props),h.ref=$r(g,k,y),h.return=g,g=h;break e}n(g,k);break}else t(g,k);k=k.sibling}y.type===Qn?(h=Vn(y.props.children,g.mode,S,y.key),h.return=g,g=h):(S=Ho(y.type,y.key,y.props,null,g.mode,S),S.ref=$r(g,h,y),S.return=g,g=S)}return a(g);case Jn:e:{for(k=y.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(g,h.sibling),h=i(h,y.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=Ea(y,g.mode,S),h.return=g,g=h}return a(g);case Qt:return k=y._init,w(g,h,k(y._payload),S)}if(ei(y))return v(g,h,y,S);if(Br(y))return b(g,h,y,S);jo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,y),h.return=g,g=h):(n(g,h),h=Ca(y,g.mode,S),h.return=g,g=h),a(g)):n(g,h)}return w}var Sr=Sh(!0),kh=Sh(!1),us=bn(null),ds=null,sr=null,zc=null;function Ic(){zc=sr=ds=null}function Rc(e){var t=us.current;ne(us),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function yr(e,t){ds=e,zc=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(_e=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(zc!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(ds===null)throw Error(I(308));sr=e,ds.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Ln=null;function Dc(e){Ln===null?Ln=[e]:Ln.push(e)}function Ch(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Eh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Bt(e,n)}return i=r.interleaved,i===null?(t.next=t,Dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Bt(e,n)}function Fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}function _d(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var i=e.updateQueue;Zt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,x=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(f=t,x=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(x,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(x,p,f):v,f==null)break e;p=ce({},p,f);break e;case 2:Zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,c=p):d=d.next=x,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Un|=a,e.lanes=a,e.memoizedState=p}}function Wd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Zi={},Et=bn(Zi),Li=bn(Zi),Mi=bn(Zi);function Mn(e){if(e===Zi)throw Error(I(174));return e}function Mc(e,t){switch(Z(Mi,t),Z(Li,e),Z(Et,Zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:il(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=il(t,e)}ne(Et),Z(Et,t)}function kr(){ne(Et),ne(Li),ne(Mi)}function Th(e){Mn(Mi.current);var t=Mn(Et.current),n=il(t,e.type);t!==n&&(Z(Li,e),Z(Et,n))}function Fc(e){Li.current===e&&(ne(Et),ne(Li))}var oe=bn(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function Oc(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Oo=Wt.ReactCurrentDispatcher,ba=Wt.ReactCurrentBatchConfig,Hn=0,le=null,ye=null,be=null,ms=!1,fi=!1,Fi=0,M1=0;function Te(){throw Error(I(321))}function Vc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Bc(e,t,n,r,i,s){if(Hn=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?B1:_1,e=n(r,i),fi){s=0;do{if(fi=!1,Fi=0,25<=s)throw Error(I(301));s+=1,be=ye=null,t.updateQueue=null,Oo.current=W1,e=n(r,i)}while(fi)}if(Oo.current=hs,t=ye!==null&&ye.next!==null,Hn=0,be=ye=le=null,ms=!1,t)throw Error(I(300));return e}function _c(){var e=Fi!==0;return Fi=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?le.memoizedState=be=e:be=be.next=e,be}function at(){if(ye===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=be===null?le.memoizedState:be.next;if(t!==null)be=t,ye=e;else{if(e===null)throw Error(I(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?le.memoizedState=be=e:be=be.next=e}return be}function Oi(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=at(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Hn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,le.lanes|=d,Un|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,xt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,le.lanes|=s,Un|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=at(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);xt(s,t.memoizedState)||(_e=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Nh(){}function Ph(e,t){var n=le,r=at(),i=t(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,_e=!0),r=r.queue,Wc(Ih.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Vi(9,zh.bind(null,n,r,i,t),void 0,null),je===null)throw Error(I(349));Hn&30||Ah(n,t,i)}return i}function Ah(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function zh(e,t,n,r){t.value=n,t.getSnapshot=r,Rh(t)&&Dh(e)}function Ih(e,t,n){return n(function(){Rh(t)&&Dh(e)})}function Rh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function Dh(e){var t=Bt(e,1);t!==null&&gt(t,e,1,-1)}function Hd(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=V1.bind(null,le,e),[t.memoizedState,e]}function Vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Lh(){return at().memoizedState}function Vo(e,t,n,r){var i=bt();le.flags|=e,i.memoizedState=Vi(1|t,n,void 0,r===void 0?null:r)}function Ms(e,t,n,r){var i=at();r=r===void 0?null:r;var s=void 0;if(ye!==null){var a=ye.memoizedState;if(s=a.destroy,r!==null&&Vc(r,a.deps)){i.memoizedState=Vi(t,n,s,r);return}}le.flags|=e,i.memoizedState=Vi(1|t,n,s,r)}function Ud(e,t){return Vo(8390656,8,e,t)}function Wc(e,t){return Ms(2048,8,e,t)}function Mh(e,t){return Ms(4,2,e,t)}function Fh(e,t){return Ms(4,4,e,t)}function Oh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vh(e,t,n){return n=n!=null?n.concat([e]):null,Ms(4,4,Oh.bind(null,t,e),n)}function Hc(){}function Bh(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function _h(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Vc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wh(e,t,n){return Hn&21?(xt(n,t)||(n=Km(),le.lanes|=n,Un|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=n)}function F1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ba.transition;ba.transition={};try{e(!1),t()}finally{J=n,ba.transition=r}}function Hh(){return at().memoizedState}function O1(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uh(e))$h(t,n);else if(n=Ch(e,t,n,r),n!==null){var i=Le();gt(n,e,r,i),Yh(n,t,r)}}function V1(e,t,n){var r=pn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uh(e))$h(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,xt(l,a)){var c=t.interleaved;c===null?(i.next=i,Dc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Ch(e,t,i,r),n!==null&&(i=Le(),gt(n,e,r,i),Yh(n,t,r))}}function Uh(e){var t=e.alternate;return e===le||t!==null&&t===le}function $h(e,t){fi=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bc(e,n)}}var hs={readContext:st,useCallback:Te,useContext:Te,useEffect:Te,useImperativeHandle:Te,useInsertionEffect:Te,useLayoutEffect:Te,useMemo:Te,useReducer:Te,useRef:Te,useState:Te,useDebugValue:Te,useDeferredValue:Te,useTransition:Te,useMutableSource:Te,useSyncExternalStore:Te,useId:Te,unstable_isNewReconciler:!1},B1={readContext:st,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Ud,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Vo(4194308,4,Oh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Vo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Vo(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O1.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:Hd,useDebugValue:Hc,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=Hd(!1),t=e[0];return e=F1.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=bt();if(re){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),je===null)throw Error(I(349));Hn&30||Ah(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Ud(Ih.bind(null,r,s,e),[e]),r.flags|=2048,Vi(9,zh.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=bt(),t=je.identifierPrefix;if(re){var n=Dt,r=Rt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Fi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=M1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_1={readContext:st,useCallback:Bh,useContext:st,useEffect:Wc,useImperativeHandle:Vh,useInsertionEffect:Mh,useLayoutEffect:Fh,useMemo:_h,useReducer:wa,useRef:Lh,useState:function(){return wa(Oi)},useDebugValue:Hc,useDeferredValue:function(e){var t=at();return Wh(t,ye.memoizedState,e)},useTransition:function(){var e=wa(Oi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Ph,useId:Hh,unstable_isNewReconciler:!1},W1={readContext:st,useCallback:Bh,useContext:st,useEffect:Wc,useImperativeHandle:Vh,useInsertionEffect:Mh,useLayoutEffect:Fh,useMemo:_h,useReducer:ja,useRef:Lh,useState:function(){return ja(Oi)},useDebugValue:Hc,useDeferredValue:function(e){var t=at();return ye===null?t.memoizedState=e:Wh(t,ye.memoizedState,e)},useTransition:function(){var e=ja(Oi)[0],t=at().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Ph,useId:Hh,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=pn(e),s=Lt(r,i);s.payload=t,n!=null&&(s.callback=n),t=un(e,s,i),t!==null&&(gt(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=pn(e),s=Lt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=un(e,s,i),t!==null&&(gt(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=pn(e),i=Lt(n,r);i.tag=2,t!=null&&(i.callback=t),t=un(e,i,r),t!==null&&(gt(t,e,r,n),Fo(t,e,r))}};function $d(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!zi(n,r)||!zi(i,s):!0}function Kh(e,t,n){var r=!1,i=gn,s=t.contextType;return typeof s=="object"&&s!==null?s=st(s):(i=He(t)?_n:ze.current,r=t.contextTypes,s=(r=r!=null)?wr(e,i):gn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Yd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function El(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Lc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=st(s):(s=He(t)?_n:ze.current,i.context=wr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Cl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fs.enqueueReplaceState(i,i.state,null),ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=gy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Sa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Tl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function Gh(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,Fl=r),Tl(e,t)},n}function Xh(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Tl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Tl(e,t),typeof r!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new H1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rv.bind(null,e,t,n),t.then(e,e))}function Gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var U1=Wt.ReactCurrentOwner,_e=!1;function Ie(e,t,n,r){t.child=e===null?kh(t,null,n,r):Sr(t,e.child,n,r)}function qd(e,t,n,r,i){n=n.render;var s=t.ref;return yr(t,i),r=Bc(e,t,n,r,s,i),n=_c(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(re&&n&&Nc(t),t.flags|=1,Ie(e,t,r,i),t.child)}function Jd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Jc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,qh(e,t,s,r,i)):(e=Ho(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:zi,n(a,r)&&e.ref===t.ref)return _t(e,t,i)}return t.flags|=1,e=fn(s,r),e.ref=t.ref,e.return=t,t.child=e}function qh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(zi(s,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(_e=!0);else return t.lanes=e.lanes,_t(e,t,i)}return Nl(e,t,n,r,i)}function Jh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(lr,Ye),Ye|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(lr,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(lr,Ye),Ye|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(lr,Ye),Ye|=r;return Ie(e,t,i,n),t.child}function Qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Nl(e,t,n,r,i){var s=He(n)?_n:ze.current;return s=wr(t,s),yr(t,i),n=Bc(e,t,n,r,s,i),r=_c(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,_t(e,t,i)):(re&&r&&Nc(t),t.flags|=1,Ie(e,t,n,i),t.child)}function Qd(e,t,n,r,i){if(He(n)){var s=!0;as(t)}else s=!1;if(yr(t,i),t.stateNode===null)Bo(e,t),Kh(t,n,r),El(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=st(u):(u=He(n)?_n:ze.current,u=wr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Yd(t,a,r,u),Zt=!1;var f=t.memoizedState;a.state=f,ps(t,r,a,i),c=t.memoizedState,l!==r||f!==c||We.current||Zt?(typeof d=="function"&&(Cl(t,n,d,r),c=t.memoizedState),(l=Zt||$d(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Eh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:dt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=st(c):(c=He(n)?_n:ze.current,c=wr(t,c));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Yd(t,a,r,c),Zt=!1,f=t.memoizedState,a.state=f,ps(t,r,a,i);var v=t.memoizedState;l!==p||f!==v||We.current||Zt?(typeof x=="function"&&(Cl(t,n,x,r),v=t.memoizedState),(u=Zt||$d(t,n,u,r,f,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,s,i)}function Pl(e,t,n,r,i,s){Qh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Fd(t,n,!1),_t(e,t,s);r=t.stateNode,U1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Sr(t,e.child,null,s),t.child=Sr(t,null,l,s)):Ie(e,t,l,s),t.memoizedState=r.state,i&&Fd(t,n,!0),t.child}function Zh(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),Mc(e,t.containerInfo)}function Zd(e,t,n,r,i){return jr(),Ac(i),t.flags|=256,Ie(e,t,n,r),t.child}var Al={dehydrated:null,treeContext:null,retryLane:0};function zl(e){return{baseLanes:e,cachePool:null,transitions:null}}function e0(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(oe,i&1),e===null)return Sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Bs(a,r,0,null),e=Vn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=zl(n),t.memoizedState=Al,e):Uc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $1(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=fn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=fn(l,s):(s=Vn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?zl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Al,r}return s=e.child,e=s.sibling,r=fn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uc(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function So(e,t,n,r){return r!==null&&Ac(r),Sr(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $1(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=Sa(Error(I(422))),So(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Bs({mode:"visible",children:r.children},i,0,null),s=Vn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Sr(t,e.child,null,a),t.child.memoizedState=zl(a),t.memoizedState=Al,s);if(!(t.mode&1))return So(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Sa(s,r,void 0),So(e,t,a,r)}if(l=(a&e.childLanes)!==0,_e||l){if(r=je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bt(e,i),gt(r,e,i,-1))}return qc(),r=Sa(Error(I(421))),So(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Ke=cn(i.nextSibling),Xe=t,re=!0,ft=null,e!==null&&(nt[rt++]=Rt,nt[rt++]=Dt,nt[rt++]=Wn,Rt=e.id,Dt=e.overflow,Wn=t),t=Uc(t,r.children),t.flags|=4096,t)}function ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function ka(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function t0(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,n,t);else if(e.tag===19)ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ka(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ka(t,!0,n,null,s);break;case"together":ka(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Un|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Y1(e,t,n){switch(t.tag){case 3:Zh(t),jr();break;case 5:Th(t);break;case 1:He(t.type)&&as(t);break;case 4:Mc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?e0(e,t,n):(Z(oe,oe.current&1),e=_t(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return t0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n)}return _t(e,t,n)}var n0,Il,r0,i0;n0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Il=function(){};r0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Mn(Et.current);var s=null;switch(n){case"input":i=el(e,i),r=el(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=rl(e,i),r=rl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}ol(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ki.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ki.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&te("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};i0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Yr(e,t){if(!re)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function K1(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(t),null;case 1:return He(t.type)&&ss(),Ne(t),null;case 3:return r=t.stateNode,kr(),ne(We),ne(ze),Oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ft!==null&&(Bl(ft),ft=null))),Il(e,t),Ne(t),null;case 5:Fc(t);var i=Mn(Mi.current);if(n=t.type,e!==null&&t.stateNode!=null)r0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ne(t),null}if(e=Mn(Et.current),wo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[wt]=t,r[Di]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ni.length;i++)te(ni[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":cd(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":dd(r,s),te("invalid",r)}ol(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bo(r.textContent,l,e),i=["children",""+l]):ki.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":po(r),ud(r,s,!0);break;case"textarea":po(r),pd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Im(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[wt]=t,e[Di]=r,n0(e,t,!1,!1),t.stateNode=e;e:{switch(a=sl(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<ni.length;i++)te(ni[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":cd(e,r),i=el(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),te("invalid",e);break;case"textarea":dd(e,r),i=rl(e,r),te("invalid",e);break;default:i=r}ol(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Lm(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rm(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ci(e,c):typeof c=="number"&&Ci(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ki.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&mc(e,s,c,a))}switch(n){case"input":po(e),ud(e,r,!1);break;case"textarea":po(e),pd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?mr(e,!!r.multiple,s,!1):r.defaultValue!=null&&mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ne(t),null;case 6:if(e&&t.stateNode!=null)i0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Mn(Mi.current),Mn(Et.current),wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(s=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ne(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(re&&Ke!==null&&t.mode&1&&!(t.flags&128))jh(),jr(),t.flags|=98560,s=!1;else if(s=wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(I(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[wt]=t}else jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ne(t),s=!1}else ft!==null&&(Bl(ft),ft=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):qc())),t.updateQueue!==null&&(t.flags|=4),Ne(t),null);case 4:return kr(),Il(e,t),e===null&&Ii(t.stateNode.containerInfo),Ne(t),null;case 10:return Rc(t.type._context),Ne(t),null;case 17:return He(t.type)&&ss(),Ne(t),null;case 19:if(ne(oe),s=t.memoizedState,s===null)return Ne(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Yr(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=fs(e),a!==null){for(t.flags|=128,Yr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Er&&(t.flags|=128,r=!0,Yr(s,!1),t.lanes=4194304)}else{if(!r)if(e=fs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Yr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!re)return Ne(t),null}else 2*fe()-s.renderingStartTime>Er&&n!==1073741824&&(t.flags|=128,r=!0,Yr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(Ne(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ne(t),t.subtreeFlags&6&&(t.flags|=8192)):Ne(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function G1(e,t){switch(Pc(t),t.tag){case 1:return He(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kr(),ne(We),ne(ze),Oc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fc(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return kr(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var ko=!1,Ae=!1,X1=typeof WeakSet=="function"?WeakSet:Set,L=null;function ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){de(e,t,r)}}var tp=!1;function q1(e,t){if(gl=ns,e=ch(),Tc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},ns=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,w=v.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:dt(t.type,b),w);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){de(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=tp,tp=!1,v}function mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rl(t,n,s)}i=i.next}while(i!==r)}}function Os(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function o0(e){var t=e.alternate;t!==null&&(e.alternate=null,o0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[Di],delete t[bl],delete t[I1],delete t[R1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function s0(e){return e.tag===5||e.tag===3||e.tag===4}function np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function Ml(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ml(e,t,n),e=e.sibling;e!==null;)Ml(e,t,n),e=e.sibling}var Se=null,pt=!1;function Gt(e,t,n){for(n=n.child;n!==null;)a0(e,t,n),n=n.sibling}function a0(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(As,n)}catch{}switch(n.tag){case 5:Ae||ar(n,t);case 6:var r=Se,i=pt;Se=null,Gt(e,t,n),Se=r,pt=i,Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(pt?(e=Se,n=n.stateNode,e.nodeType===8?xa(e.parentNode,n):e.nodeType===1&&xa(e,n),Pi(e)):xa(Se,n.stateNode));break;case 4:r=Se,i=pt,Se=n.stateNode.containerInfo,pt=!0,Gt(e,t,n),Se=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Ae&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Rl(n,t,a),i=i.next}while(i!==r)}Gt(e,t,n);break;case 1:if(!Ae&&(ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,t,l)}Gt(e,t,n);break;case 21:Gt(e,t,n);break;case 22:n.mode&1?(Ae=(r=Ae)||n.memoizedState!==null,Gt(e,t,n),Ae=r):Gt(e,t,n);break;default:Gt(e,t,n)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new X1),t.forEach(function(r){var i=ov.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,pt=!1;break e;case 3:Se=l.stateNode.containerInfo,pt=!0;break e;case 4:Se=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Se===null)throw Error(I(160));a0(s,a,i),Se=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)l0(t,e),t=t.sibling}function l0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),vt(e),r&4){try{mi(3,e,e.return),Os(3,e)}catch(b){de(e,e.return,b)}try{mi(5,e,e.return)}catch(b){de(e,e.return,b)}}break;case 1:ct(t,e),vt(e),r&512&&n!==null&&ar(n,n.return);break;case 5:if(ct(t,e),vt(e),r&512&&n!==null&&ar(n,n.return),e.flags&32){var i=e.stateNode;try{Ci(i,"")}catch(b){de(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Am(i,s),sl(l,a);var u=sl(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Lm(i,p):d==="dangerouslySetInnerHTML"?Rm(i,p):d==="children"?Ci(i,p):mc(i,d,p,u)}switch(l){case"input":tl(i,s);break;case"textarea":zm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?mr(i,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?mr(i,!!s.multiple,s.defaultValue,!0):mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Di]=s}catch(b){de(e,e.return,b)}}break;case 6:if(ct(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){de(e,e.return,b)}}break;case 3:if(ct(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pi(t.containerInfo)}catch(b){de(e,e.return,b)}break;case 4:ct(t,e),vt(e);break;case 13:ct(t,e),vt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kc=fe())),r&4&&rp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ae=(u=Ae)||d,ct(t,e),Ae=u):ct(t,e),vt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(p=L=d;L!==null;){switch(f=L,x=f.child,f.tag){case 0:case 11:case 14:case 15:mi(4,f,f.return);break;case 1:ar(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){de(r,n,b)}}break;case 5:ar(f,f.return);break;case 22:if(f.memoizedState!==null){op(p);continue}}x!==null?(x.return=f,L=x):op(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Dm("display",a))}catch(b){de(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){de(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),vt(e),r&4&&rp(e);break;case 21:break;default:ct(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(s0(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ci(i,""),r.flags&=-33);var s=np(e);Ml(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=np(e);Ll(e,l,a);break;default:throw Error(I(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function J1(e,t,n){L=e,c0(e)}function c0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ko;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ae;l=ko;var u=Ae;if(ko=a,(Ae=c)&&!u)for(L=i;L!==null;)a=L,c=a.child,a.tag===22&&a.memoizedState!==null?sp(i):c!==null?(c.return=a,L=c):sp(i);for(;s!==null;)L=s,c0(s),s=s.sibling;L=i,ko=l,Ae=u}ip(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):ip(e)}}function ip(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ae||Os(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ae)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Wd(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ae||t.flags&512&&Dl(t)}catch(f){de(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function op(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function sp(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Os(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){de(t,i,c)}}var s=t.return;try{Dl(t)}catch(c){de(t,s,c)}break;case 5:var a=t.return;try{Dl(t)}catch(c){de(t,a,c)}}}catch(c){de(t,t.return,c)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Q1=Math.ceil,gs=Wt.ReactCurrentDispatcher,$c=Wt.ReactCurrentOwner,ot=Wt.ReactCurrentBatchConfig,G=0,je=null,ge=null,ke=0,Ye=0,lr=bn(0),ve=0,Bi=null,Un=0,Vs=0,Yc=0,hi=null,Be=null,Kc=0,Er=1/0,zt=null,xs=!1,Fl=null,dn=null,Co=!1,rn=null,ys=0,gi=0,Ol=null,_o=-1,Wo=0;function Le(){return G&6?fe():_o!==-1?_o:_o=fe()}function pn(e){return e.mode&1?G&2&&ke!==0?ke&-ke:L1.transition!==null?(Wo===0&&(Wo=Km()),Wo):(e=J,e!==0||(e=window.event,e=e===void 0?16:eh(e.type)),e):1}function gt(e,t,n,r){if(50<gi)throw gi=0,Ol=null,Error(I(185));qi(e,n,r),(!(G&2)||e!==je)&&(e===je&&(!(G&2)&&(Vs|=n),ve===4&&tn(e,ke)),Ue(e,r),n===1&&G===0&&!(t.mode&1)&&(Er=fe()+500,Ls&&wn()))}function Ue(e,t){var n=e.callbackNode;Ly(e,t);var r=ts(e,e===je?ke:0);if(r===0)n!==null&&hd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hd(n),t===1)e.tag===0?D1(ap.bind(null,e)):vh(ap.bind(null,e)),A1(function(){!(G&6)&&wn()}),n=null;else{switch(Gm(r)){case 1:n=vc;break;case 4:n=$m;break;case 16:n=es;break;case 536870912:n=Ym;break;default:n=es}n=x0(n,u0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function u0(e,t){if(_o=-1,Wo=0,G&6)throw Error(I(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=ts(e,e===je?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vs(e,r);else{t=r;var i=G;G|=2;var s=p0();(je!==e||ke!==t)&&(zt=null,Er=fe()+500,On(e,t));do try{tv();break}catch(l){d0(e,l)}while(!0);Ic(),gs.current=s,G=i,ge!==null?t=0:(je=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=dl(e),i!==0&&(r=i,t=Vl(e,i))),t===1)throw n=Bi,On(e,0),tn(e,r),Ue(e,fe()),n;if(t===6)tn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z1(i)&&(t=vs(e,r),t===2&&(s=dl(e),s!==0&&(r=s,t=Vl(e,s))),t===1))throw n=Bi,On(e,0),tn(e,r),Ue(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:zn(e,Be,zt);break;case 3:if(tn(e,r),(r&130023424)===r&&(t=Kc+500-fe(),10<t)){if(ts(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=vl(zn.bind(null,e,Be,zt),t);break}zn(e,Be,zt);break;case 4:if(tn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ht(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Q1(r/1960))-r,10<r){e.timeoutHandle=vl(zn.bind(null,e,Be,zt),r);break}zn(e,Be,zt);break;case 5:zn(e,Be,zt);break;default:throw Error(I(329))}}}return Ue(e,fe()),e.callbackNode===n?u0.bind(null,e):null}function Vl(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=vs(e,t),e!==2&&(t=Be,Be=n,t!==null&&Bl(t)),e}function Bl(e){Be===null?Be=e:Be.push.apply(Be,e)}function Z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tn(e,t){for(t&=~Yc,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function ap(e){if(G&6)throw Error(I(327));vr();var t=ts(e,0);if(!(t&1))return Ue(e,fe()),null;var n=vs(e,t);if(e.tag!==0&&n===2){var r=dl(e);r!==0&&(t=r,n=Vl(e,r))}if(n===1)throw n=Bi,On(e,0),tn(e,t),Ue(e,fe()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,Be,zt),Ue(e,fe()),null}function Gc(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(Er=fe()+500,Ls&&wn())}}function $n(e){rn!==null&&rn.tag===0&&!(G&6)&&vr();var t=G;G|=1;var n=ot.transition,r=J;try{if(ot.transition=null,J=1,e)return e()}finally{J=r,ot.transition=n,G=t,!(G&6)&&wn()}}function Xc(){Ye=lr.current,ne(lr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,P1(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ss();break;case 3:kr(),ne(We),ne(ze),Oc();break;case 5:Fc(r);break;case 4:kr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:Rc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(je=e,ge=e=fn(e.current,null),ke=Ye=t,ve=0,Bi=null,Yc=Vs=Un=0,Be=hi=null,Ln!==null){for(t=0;t<Ln.length;t++)if(n=Ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Ln=null}return e}function d0(e,t){do{var n=ge;try{if(Ic(),Oo.current=hs,ms){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ms=!1}if(Hn=0,be=ye=le=null,fi=!1,Fi=0,$c.current=null,n===null||n.return===null){ve=1,Bi=t,ge=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Gd(a);if(x!==null){x.flags&=-257,Xd(x,a,l,s,t),x.mode&1&&Kd(s,u,t),t=x,c=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){Kd(s,u,t),qc();break e}c=Error(I(426))}}else if(re&&l.mode&1){var w=Gd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Xd(w,a,l,s,t),Ac(Cr(c,l));break e}}s=c=Cr(c,l),ve!==4&&(ve=2),hi===null?hi=[s]:hi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Gh(s,c,t);_d(s,g);break e;case 1:l=c;var h=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(dn===null||!dn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Xh(s,l,t);_d(s,S);break e}}s=s.return}while(s!==null)}m0(n)}catch(j){t=j,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function p0(){var e=gs.current;return gs.current=hs,e===null?hs:e}function qc(){(ve===0||ve===3||ve===2)&&(ve=4),je===null||!(Un&268435455)&&!(Vs&268435455)||tn(je,ke)}function vs(e,t){var n=G;G|=2;var r=p0();(je!==e||ke!==t)&&(zt=null,On(e,t));do try{ev();break}catch(i){d0(e,i)}while(!0);if(Ic(),G=n,gs.current=r,ge!==null)throw Error(I(261));return je=null,ke=0,ve}function ev(){for(;ge!==null;)f0(ge)}function tv(){for(;ge!==null&&!Ey();)f0(ge)}function f0(e){var t=g0(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?m0(e):ge=t,$c.current=null}function m0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=G1(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,ge=null;return}}else if(n=K1(n,t,Ye),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ve===0&&(ve=5)}function zn(e,t,n){var r=J,i=ot.transition;try{ot.transition=null,J=1,nv(e,t,n,r)}finally{ot.transition=i,J=r}return null}function nv(e,t,n,r){do vr();while(rn!==null);if(G&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(My(e,s),e===je&&(ge=je=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,x0(es,function(){return vr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ot.transition,ot.transition=null;var a=J;J=1;var l=G;G|=4,$c.current=null,q1(e,n),l0(n,e),j1(xl),ns=!!gl,xl=gl=null,e.current=n,J1(n),Ty(),G=l,J=a,ot.transition=s}else e.current=n;if(Co&&(Co=!1,rn=e,ys=i),s=e.pendingLanes,s===0&&(dn=null),Ay(n.stateNode),Ue(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xs)throw xs=!1,e=Fl,Fl=null,e;return ys&1&&e.tag!==0&&vr(),s=e.pendingLanes,s&1?e===Ol?gi++:(gi=0,Ol=e):gi=0,wn(),null}function vr(){if(rn!==null){var e=Gm(ys),t=ot.transition,n=J;try{if(ot.transition=null,J=16>e?16:e,rn===null)var r=!1;else{if(e=rn,rn=null,ys=0,G&6)throw Error(I(331));var i=G;for(G|=4,L=e.current;L!==null;){var s=L,a=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:mi(8,d,s)}var p=d.child;if(p!==null)p.return=d,L=p;else for(;L!==null;){d=L;var f=d.sibling,x=d.return;if(o0(d),d===u){L=null;break}if(f!==null){f.return=x,L=f;break}L=x}}}var v=s.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}L=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,L=a;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var h=e.current;for(L=h;L!==null;){a=L;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,L=y;else e:for(a=h;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Os(9,l)}}catch(j){de(l,l.return,j)}if(l===a){L=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,L=S;break e}L=l.return}}if(G=i,wn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(As,e)}catch{}r=!0}return r}finally{J=n,ot.transition=t}}return!1}function lp(e,t,n){t=Cr(n,t),t=Gh(e,t,1),e=un(e,t,1),t=Le(),e!==null&&(qi(e,1,t),Ue(e,t))}function de(e,t,n){if(e.tag===3)lp(e,e,n);else for(;t!==null;){if(t.tag===3){lp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dn===null||!dn.has(r))){e=Cr(n,e),e=Xh(t,e,1),t=un(t,e,1),e=Le(),t!==null&&(qi(t,1,e),Ue(t,e));break}}t=t.return}}function rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>fe()-Kc?On(e,0):Yc|=n),Ue(e,t)}function h0(e,t){t===0&&(e.mode&1?(t=ho,ho<<=1,!(ho&130023424)&&(ho=4194304)):t=1);var n=Le();e=Bt(e,t),e!==null&&(qi(e,t,n),Ue(e,n))}function iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),h0(e,n)}function ov(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),h0(e,n)}var g0;g0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)_e=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return _e=!1,Y1(e,t,n);_e=!!(e.flags&131072)}else _e=!1,re&&t.flags&1048576&&bh(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=wr(t,ze.current);yr(t,n),i=Bc(null,t,r,e,i,n);var s=_c();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(s=!0,as(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Lc(t),i.updater=Fs,t.stateNode=i,i._reactInternals=t,El(t,r,e,n),t=Pl(null,t,r,!0,s,n)):(t.tag=0,re&&s&&Nc(t),Ie(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=av(r),e=dt(r,e),i){case 0:t=Nl(null,t,r,e,n);break e;case 1:t=Qd(null,t,r,e,n);break e;case 11:t=qd(null,t,r,e,n);break e;case 14:t=Jd(null,t,r,dt(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Nl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Qd(e,t,r,i,n);case 3:e:{if(Zh(t),e===null)throw Error(I(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Eh(e,t),ps(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Cr(Error(I(423)),t),t=Zd(e,t,r,n,i);break e}else if(r!==i){i=Cr(Error(I(424)),t),t=Zd(e,t,r,n,i);break e}else for(Ke=cn(t.stateNode.containerInfo.firstChild),Xe=t,re=!0,ft=null,n=kh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){t=_t(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return Th(t),e===null&&Sl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,yl(r,i)?a=null:s!==null&&yl(r,s)&&(t.flags|=32),Qh(e,t),Ie(e,t,a,n),t.child;case 6:return e===null&&Sl(t),null;case 13:return e0(e,t,n);case 4:return Mc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sr(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),qd(e,t,r,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(us,r._currentValue),r._currentValue=a,s!==null)if(xt(s.value,a)){if(s.children===i.children&&!We.current){t=_t(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Lt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),kl(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),kl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,yr(t,n),i=st(i),r=r(i),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),Jd(e,t,r,i,n);case 15:return qh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Bo(e,t),t.tag=1,He(r)?(e=!0,as(t)):e=!1,yr(t,n),Kh(t,r,i),El(t,r,i,n),Pl(null,t,r,!0,e,n);case 19:return t0(e,t,n);case 22:return Jh(e,t,n)}throw Error(I(156,t.tag))};function x0(e,t){return Um(e,t)}function sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new sv(e,t,n,r)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function av(e){if(typeof e=="function")return Jc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===xc)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Jc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Qn:return Vn(n.children,i,s,t);case hc:a=8,i|=8;break;case qa:return e=it(12,n,t,i|2),e.elementType=qa,e.lanes=s,e;case Ja:return e=it(13,n,t,i),e.elementType=Ja,e.lanes=s,e;case Qa:return e=it(19,n,t,i),e.elementType=Qa,e.lanes=s,e;case Tm:return Bs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Cm:a=10;break e;case Em:a=9;break e;case gc:a=11;break e;case xc:a=14;break e;case Qt:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=it(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Vn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Bs(e,t,n,r){return e=it(22,e,r,t),e.elementType=Tm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ca(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sa(0),this.expirationTimes=sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qc(e,t,n,r,i,s,a,l,c){return e=new lv(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=it(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lc(s),e}function cv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function y0(e){if(!e)return gn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(He(n))return yh(e,n,t)}return t}function v0(e,t,n,r,i,s,a,l,c){return e=Qc(n,r,!0,e,i,s,a,l,c),e.context=y0(null),n=e.current,r=Le(),i=pn(n),s=Lt(r,i),s.callback=t??null,un(n,s,i),e.current.lanes=i,qi(e,i,r),Ue(e,r),e}function _s(e,t,n,r){var i=t.current,s=Le(),a=pn(i);return n=y0(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(i,t,a),e!==null&&(gt(e,i,a,s),Fo(e,i,a)),a}function bs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zc(e,t){cp(e,t),(e=e.alternate)&&cp(e,t)}function uv(){return null}var b0=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}Ws.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));_s(e,t,null,null)};Ws.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){_s(null,e,null,null)}),t[Vt]=null}};function Ws(e){this._internalRoot=e}Ws.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<en.length&&t!==0&&t<en[n].priority;n++);en.splice(n,0,e),n===0&&Zm(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function up(){}function dv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=bs(a);s.call(u)}}var a=v0(t,r,e,0,null,!1,!1,"",up);return e._reactRootContainer=a,e[Vt]=a.current,Ii(e.nodeType===8?e.parentNode:e),$n(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=bs(c);l.call(u)}}var c=Qc(e,0,!1,null,null,!1,!1,"",up);return e._reactRootContainer=c,e[Vt]=c.current,Ii(e.nodeType===8?e.parentNode:e),$n(function(){_s(t,c,n,r)}),c}function Us(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=bs(a);l.call(c)}}_s(t,a,e,i)}else a=dv(n,t,e,i,r);return bs(a)}Xm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ti(t.pendingLanes);n!==0&&(bc(t,n|1),Ue(t,fe()),!(G&6)&&(Er=fe()+500,wn()))}break;case 13:$n(function(){var r=Bt(e,1);if(r!==null){var i=Le();gt(r,e,1,i)}}),Zc(e,1)}};wc=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Le();gt(t,e,134217728,n)}Zc(e,134217728)}};qm=function(e){if(e.tag===13){var t=pn(e),n=Bt(e,t);if(n!==null){var r=Le();gt(n,e,t,r)}Zc(e,t)}};Jm=function(){return J};Qm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ll=function(e,t,n){switch(t){case"input":if(tl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ds(r);if(!i)throw Error(I(90));Pm(r),tl(r,i)}}}break;case"textarea":zm(e,n);break;case"select":t=n.value,t!=null&&mr(e,!!n.multiple,t,!1)}};Om=Gc;Vm=$n;var pv={usingClientEntryPoint:!1,Events:[Qi,nr,Ds,Mm,Fm,Gc]},Kr={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fv={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wm(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{As=Eo.inject(fv),Ct=Eo}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pv;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(I(200));return cv(e,t,null,n)};Qe.createRoot=function(e,t){if(!tu(e))throw Error(I(299));var n=!1,r="",i=b0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Qc(e,1,!1,null,null,n,!1,r,i),e[Vt]=t.current,Ii(e.nodeType===8?e.parentNode:e),new eu(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Wm(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return $n(e)};Qe.hydrate=function(e,t,n){if(!Hs(t))throw Error(I(200));return Us(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=b0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=v0(t,null,e,1,n??null,i,!1,s,a),e[Vt]=t.current,Ii(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ws(t)};Qe.render=function(e,t,n){if(!Hs(t))throw Error(I(200));return Us(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(I(40));return e._reactRootContainer?($n(function(){Us(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Gc;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hs(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Us(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function w0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w0)}catch(e){console.error(e)}}w0(),wm.exports=Qe;var mv=wm.exports,j0,dp=mv;j0=dp.createRoot,dp.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _i(){return _i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_i.apply(null,arguments)}var on;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(on||(on={}));const pp="popstate";function hv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return _l("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ws(i)}return xv(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function S0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gv(){return Math.random().toString(36).substr(2,8)}function fp(e,t){return{usr:e.state,key:e.key,idx:t}}function _l(e,t,n,r){return n===void 0&&(n=null),_i({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rr(t):t,{state:n,key:t&&t.key||r||gv()})}function ws(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=on.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(_i({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=on.Pop;let w=d(),g=w==null?null:w-u;u=w,c&&c({action:l,location:b.location,delta:g})}function f(w,g){l=on.Push;let h=_l(b.location,w,g);u=d()+1;let y=fp(h,u),S=b.createHref(h);try{a.pushState(y,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(S)}s&&c&&c({action:l,location:b.location,delta:1})}function x(w,g){l=on.Replace;let h=_l(b.location,w,g);u=d();let y=fp(h,u),S=b.createHref(h);a.replaceState(y,"",S),s&&c&&c({action:l,location:b.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof w=="string"?w:ws(w);return h=h.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let b={get action(){return l},get location(){return e(i,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(pp,p),c=w,()=>{i.removeEventListener(pp,p),c=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:x,go(w){return a.go(w)}};return b}var mp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mp||(mp={}));function yv(e,t,n){return n===void 0&&(n="/"),vv(e,t,n)}function vv(e,t,n,r){let i=typeof t=="string"?Rr(t):t,s=nu(i.pathname||"/",n);if(s==null)return null;let a=k0(e);bv(a);let l=null,c=Iv(s);for(let u=0;l==null&&u<a.length;++u)l=Pv(a[u],c);return l}function k0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=mn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),k0(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Tv(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of C0(s.path))i(s,a,c)}),t}function C0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=C0(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Nv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const wv=/^:[\w-]+$/,jv=3,Sv=2,kv=1,Cv=10,Ev=-2,hp=e=>e==="*";function Tv(e,t){let n=e.split("/"),r=n.length;return n.some(hp)&&(r+=Ev),t&&(r+=Sv),n.filter(i=>!hp(i)).reduce((i,s)=>i+(wv.test(s)?jv:s===""?kv:Cv),r)}function Nv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Pv(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Av({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:mn([s,p.pathname]),pathnameBase:Lv(mn([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=mn([s,p.pathnameBase]))}return a}function Av(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:x}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const v=l[p];return x&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function zv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),S0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Iv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return S0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function nu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Rv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Rr(e):e,s;return n?(n=E0(n),n.startsWith("/")?s=gp(n.substring(1),"/"):s=gp(n,t)):s=t,{pathname:s,search:Mv(r),hash:Fv(i)}}function gp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ta(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ru(e,t){let n=Dv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function iu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Rr(e):(i=_i({},e),me(!i.pathname||!i.pathname.includes("?"),Ta("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Ta("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Ta("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Rv(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const E0=e=>e.replace(/\/\/+/g,"/"),mn=e=>E0(e.join("/")),Lv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Mv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Fv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const T0=["post","put","patch","delete"];new Set(T0);const Vv=["get",...T0];new Set(Vv);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Wi.apply(null,arguments)}const ou=m.createContext(null),Bv=m.createContext(null),jn=m.createContext(null),$s=m.createContext(null),Ht=m.createContext({outlet:null,matches:[],isDataRoute:!1}),N0=m.createContext(null);function _v(e,t){let{relative:n}=t===void 0?{}:t;Dr()||me(!1);let{basename:r,navigator:i}=m.useContext(jn),{hash:s,pathname:a,search:l}=A0(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:mn([r,a])),i.createHref({pathname:c,search:l,hash:s})}function Dr(){return m.useContext($s)!=null}function Ut(){return Dr()||me(!1),m.useContext($s).location}function P0(e){m.useContext(jn).static||m.useLayoutEffect(e)}function $t(){let{isDataRoute:e}=m.useContext(Ht);return e?t2():Wv()}function Wv(){Dr()||me(!1);let e=m.useContext(ou),{basename:t,future:n,navigator:r}=m.useContext(jn),{matches:i}=m.useContext(Ht),{pathname:s}=Ut(),a=JSON.stringify(ru(i,n.v7_relativeSplatPath)),l=m.useRef(!1);return P0(()=>{l.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=iu(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:mn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Hv(){let{matches:e}=m.useContext(Ht),t=e[e.length-1];return t?t.params:{}}function A0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(jn),{matches:i}=m.useContext(Ht),{pathname:s}=Ut(),a=JSON.stringify(ru(i,r.v7_relativeSplatPath));return m.useMemo(()=>iu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Uv(e,t){return $v(e,t)}function $v(e,t,n,r){Dr()||me(!1);let{navigator:i}=m.useContext(jn),{matches:s}=m.useContext(Ht),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ut(),d;if(t){var p;let w=typeof t=="string"?Rr(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||me(!1),d=w}else d=u;let f=d.pathname||"/",x=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=yv(e,{pathname:x}),b=qv(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:mn([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:mn([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&b?m.createElement($s.Provider,{value:{location:Wi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:on.Pop}},b):b}function Yv(){let e=e2(),t=Ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const Kv=m.createElement(Yv,null);class Gv extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Ht.Provider,{value:this.props.routeContext},m.createElement(N0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xv(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(ou);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Ht.Provider,{value:t},r)}function qv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||me(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:x}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let x,v=!1,b=null,w=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||Kv,c&&(u<0&&f===0?(n2("route-fallback"),v=!0,w=null):u===f&&(v=!0,w=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),h=()=>{let y;return x?y=b:v?y=w:p.route.Component?y=m.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,m.createElement(Xv,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?m.createElement(Gv,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var z0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(z0||{}),I0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(I0||{});function Jv(e){let t=m.useContext(ou);return t||me(!1),t}function Qv(e){let t=m.useContext(Bv);return t||me(!1),t}function Zv(e){let t=m.useContext(Ht);return t||me(!1),t}function R0(e){let t=Zv(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function e2(){var e;let t=m.useContext(N0),n=Qv(),r=R0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function t2(){let{router:e}=Jv(z0.UseNavigateStable),t=R0(I0.UseNavigateStable),n=m.useRef(!1);return P0(()=>{n.current=!0}),m.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Wi({fromRouteId:t},s)))},[e,t])}const xp={};function n2(e,t,n){xp[e]||(xp[e]=!0)}function r2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function D0(e){let{to:t,replace:n,state:r,relative:i}=e;Dr()||me(!1);let{future:s,static:a}=m.useContext(jn),{matches:l}=m.useContext(Ht),{pathname:c}=Ut(),u=$t(),d=iu(t,ru(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return m.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Re(e){me(!1)}function i2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:s,static:a=!1,future:l}=e;Dr()&&me(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:s,static:a,future:Wi({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Rr(r));let{pathname:d="/",search:p="",hash:f="",state:x=null,key:v="default"}=r,b=m.useMemo(()=>{let w=nu(d,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:x,key:v},navigationType:i}},[c,d,p,f,x,v,i]);return b==null?null:m.createElement(jn.Provider,{value:u},m.createElement($s.Provider,{children:n,value:b}))}function L0(e){let{children:t,location:n}=e;return Uv(Wl(t),n)}new Promise(()=>{});function Wl(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let s=[...t,i];if(r.type===m.Fragment){n.push.apply(n,Wl(r.props.children,s));return}r.type!==Re&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wl(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Hl.apply(null,arguments)}function o2(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function s2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function a2(e,t){return e.button===0&&(!t||t==="_self")&&!s2(e)}const l2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],c2="6";try{window.__reactRouterVersion=c2}catch{}const u2="startTransition",yp=ry[u2];function d2(e){let{basename:t,children:n,future:r,window:i}=e,s=m.useRef();s.current==null&&(s.current=hv({window:i,v5Compat:!0}));let a=s.current,[l,c]=m.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=m.useCallback(p=>{u&&yp?yp(()=>c(p)):c(p)},[c,u]);return m.useLayoutEffect(()=>a.listen(d),[a,d]),m.useEffect(()=>r2(r),[r]),m.createElement(i2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const p2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=t,f=o2(t,l2),{basename:x}=m.useContext(jn),v,b=!1;if(typeof u=="string"&&f2.test(u)&&(v=u,p2))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=nu(S.pathname,x);S.origin===y.origin&&j!=null?u=j+S.search+S.hash:b=!0}catch{}let w=_v(u,{relative:i}),g=m2(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:p});function h(y){r&&r(y),y.defaultPrevented||g(y)}return m.createElement("a",Hl({},f,{href:v||w,onClick:b||s?r:h,ref:n,target:c}))});var vp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vp||(vp={}));var bp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bp||(bp={}));function m2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=$t(),u=Ut(),d=A0(e,{relative:a});return m.useCallback(p=>{if(a2(p,n)){p.preventDefault();let f=r!==void 0?r:ws(u)===ws(d);c(e,{replace:f,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,s,a,l])}const su=m.createContext({});function Lr(e){const t=m.useRef(null);return t.current===null&&(t.current=e()),t.current}const Ys=m.createContext(null),eo=m.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class h2 extends m.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function g2({children:e,isPresent:t}){const n=m.useId(),r=m.useRef(null),i=m.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=m.useContext(eo);return m.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),o.jsx(h2,{isPresent:t,childRef:r,sizeRef:i,children:m.cloneElement(e,{ref:r})})}const x2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:a})=>{const l=Lr(y2),c=m.useId(),u=m.useCallback(p=>{l.set(p,!0);for(const f of l.values())if(!f)return;r&&r()},[l,r]),d=m.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(l.set(p,!1),()=>l.delete(p))}),s?[Math.random(),u]:[n,u]);return m.useMemo(()=>{l.forEach((p,f)=>l.set(f,!1))},[n]),m.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=o.jsx(g2,{isPresent:n,children:e})),o.jsx(Ys.Provider,{value:d,children:e})};function y2(){return new Map}function M0(e=!0){const t=m.useContext(Ys);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=m.useId();m.useEffect(()=>{e&&i(s)},[e]);const a=m.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const To=e=>e.key||"";function wp(e){const t=[];return m.Children.forEach(e,n=>{m.isValidElement(n)&&t.push(n)}),t}const au=typeof window<"u",to=au?m.useLayoutEffect:m.useEffect,Ul=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:a=!1})=>{const[l,c]=M0(a),u=m.useMemo(()=>wp(e),[e]),d=a&&!l?[]:u.map(To),p=m.useRef(!0),f=m.useRef(u),x=Lr(()=>new Map),[v,b]=m.useState(u),[w,g]=m.useState(u);to(()=>{p.current=!1,f.current=u;for(let S=0;S<w.length;S++){const j=To(w[S]);d.includes(j)?x.delete(j):x.get(j)!==!0&&x.set(j,!1)}},[w,d.length,d.join("-")]);const h=[];if(u!==v){let S=[...u];for(let j=0;j<w.length;j++){const k=w[j],E=To(k);d.includes(E)||(S.splice(j,0,k),h.push(k))}s==="wait"&&h.length&&(S=h),g(wp(S)),b(u);return}const{forceRender:y}=m.useContext(su);return o.jsx(o.Fragment,{children:w.map(S=>{const j=To(S),k=a&&!l?!1:u===w||d.includes(j),E=()=>{if(x.has(j))x.set(j,!0);else return;let C=!0;x.forEach(O=>{O||(C=!1)}),C&&(y==null||y(),g(f.current),a&&(c==null||c()),r&&r())};return o.jsx(x2,{isPresent:k,initial:!p.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:k?void 0:E,children:S},j)})})},Me=e=>e;let v2=Me,F0=Me;function lu(e){let t;return()=>(t===void 0&&(t=e()),t)}const Yn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Mt=e=>e*1e3,Ft=e=>e/1e3,b2={useManualTiming:!1};function w2(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,p=!1)=>{const x=p&&r?t:n;return d&&s.add(u),x.has(u)||x.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const No=["read","resolveKeyframes","update","preRender","render","postRender"],j2=40;function O0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=No.reduce((g,h)=>(g[h]=w2(s),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:p,postRender:f}=a,x=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,j2),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},v=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:No.reduce((g,h)=>{const y=a[h];return g[h]=(S,j=!1,k=!1)=>(n||v(),y.schedule(S,j,k)),g},{}),cancel:g=>{for(let h=0;h<No.length;h++)a[No[h]].cancel(g)},state:i,steps:a}}const{schedule:X,cancel:yt,state:xe,steps:Na}=O0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Me,!0),V0=m.createContext({strict:!1}),jp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Tr={};for(const e in jp)Tr[e]={isEnabled:t=>jp[e].some(n=>!!t[n])};function S2(e){for(const t in e)Tr[t]={...Tr[t],...e[t]}}const k2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||k2.has(e)}let B0=e=>!js(e);function C2(e){e&&(B0=t=>t.startsWith("on")?!js(t):e(t))}try{C2(require("@emotion/is-prop-valid").default)}catch{}function E2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(B0(i)||n===!0&&js(i)||!t&&!js(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function T2(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Ks=m.createContext({});function Hi(e){return typeof e=="string"||Array.isArray(e)}function Gs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const cu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],uu=["initial",...cu];function Xs(e){return Gs(e.animate)||uu.some(t=>Hi(e[t]))}function _0(e){return!!(Xs(e)||e.variants)}function N2(e,t){if(Xs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Hi(n)?n:void 0,animate:Hi(r)?r:void 0}}return e.inherit!==!1?t:{}}function P2(e){const{initial:t,animate:n}=N2(e,m.useContext(Ks));return m.useMemo(()=>({initial:t,animate:n}),[Sp(t),Sp(n)])}function Sp(e){return Array.isArray(e)?e.join(" "):e}const A2=Symbol.for("motionComponentSymbol");function cr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function z2(e,t,n){return m.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):cr(n)&&(n.current=r))},[t])}const du=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),I2="framerAppearId",W0="data-"+du(I2),{schedule:pu}=O0(queueMicrotask,!1),H0=m.createContext({});function R2(e,t,n,r,i){var s,a;const{visualElement:l}=m.useContext(Ks),c=m.useContext(V0),u=m.useContext(Ys),d=m.useContext(eo).reducedMotion,p=m.useRef(null);r=r||c.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,x=m.useContext(H0);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&D2(p.current,n,i,x);const v=m.useRef(!1);m.useInsertionEffect(()=>{f&&v.current&&f.update(n,u)});const b=n[W0],w=m.useRef(!!b&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,b))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,b)));return to(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),pu.render(f.render),w.current&&f.animationState&&f.animationState.animateChanges())}),m.useEffect(()=>{f&&(!w.current&&f.animationState&&f.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,b)}),w.current=!1))}),f}function D2(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:U0(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||l&&cr(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function U0(e){if(e)return e.options.allowProjection!==!1?e.projection:U0(e.parent)}function L2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&S2(e);function l(u,d){let p;const f={...m.useContext(eo),...u,layoutId:M2(u)},{isStatic:x}=f,v=P2(u),b=r(u,x);if(!x&&au){F2();const w=O2(f);p=w.MeasureLayout,v.visualElement=R2(i,b,f,t,w.ProjectionNode)}return o.jsxs(Ks.Provider,{value:v,children:[p&&v.visualElement?o.jsx(p,{visualElement:v.visualElement,...f}):null,n(i,u,z2(b,v.visualElement,d),b,x,v.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const c=m.forwardRef(l);return c[A2]=i,c}function M2({layoutId:e}){const t=m.useContext(su).id;return t&&e!==void 0?t+"-"+e:e}function F2(e,t){m.useContext(V0).strict}function O2(e){const{drag:t,layout:n}=Tr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const V2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function fu(e){return typeof e!="string"||e.includes("-")?!1:!!(V2.indexOf(e)>-1||/[A-Z]/u.test(e))}function kp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function mu(e,t,n,r){if(typeof t=="function"){const[i,s]=kp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=kp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const $l=e=>Array.isArray(e),B2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),_2=e=>$l(e)?e[e.length-1]||0:e,we=e=>!!(e&&e.getVelocity);function Uo(e){const t=we(e)?e.get():e;return B2(t)?t.toValue():t}function W2({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:H2(r,i,s,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const $0=e=>(t,n)=>{const r=m.useContext(Ks),i=m.useContext(Ys),s=()=>W2(e,t,r,i);return n?s():Lr(s)};function H2(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Uo(s[f]);let{initial:a,animate:l}=e;const c=Xs(e),u=_0(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?l:a;if(p&&typeof p!="boolean"&&!Gs(p)){const f=Array.isArray(p)?p:[p];for(let x=0;x<f.length;x++){const v=mu(e,f[x]);if(v){const{transitionEnd:b,transition:w,...g}=v;for(const h in g){let y=g[h];if(Array.isArray(y)){const S=d?y.length-1:0;y=y[S]}y!==null&&(i[h]=y)}for(const h in b)i[h]=b[h]}}}return i}const Mr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xn=new Set(Mr),Y0=e=>t=>typeof t=="string"&&t.startsWith(e),K0=Y0("--"),U2=Y0("var(--"),hu=e=>U2(e)?$2.test(e.split("/*")[0].trim()):!1,$2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,G0=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Pt=(e,t,n)=>n>t?t:n<e?e:n,Fr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ui={...Fr,transform:e=>Pt(0,1,e)},Po={...Fr,default:1},no=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qt=no("deg"),Tt=no("%"),U=no("px"),Y2=no("vh"),K2=no("vw"),Cp={...Tt,parse:e=>Tt.parse(e)/100,transform:e=>Tt.transform(e*100)},G2={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,backgroundPositionX:U,backgroundPositionY:U},X2={rotate:qt,rotateX:qt,rotateY:qt,rotateZ:qt,scale:Po,scaleX:Po,scaleY:Po,scaleZ:Po,skew:qt,skewX:qt,skewY:qt,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Ui,originX:Cp,originY:Cp,originZ:U},Ep={...Fr,transform:Math.round},gu={...G2,...X2,zIndex:Ep,size:U,fillOpacity:Ui,strokeOpacity:Ui,numOctaves:Ep},q2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},J2=Mr.length;function Q2(e,t,n){let r="",i=!0;for(let s=0;s<J2;s++){const a=Mr[s],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=G0(l,gu[a]);if(!c){i=!1;const d=q2[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function xu(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(Xn.has(c)){a=!0;continue}else if(K0(c)){i[c]=u;continue}else{const d=G0(u,gu[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=Q2(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}const Z2={offset:"stroke-dashoffset",array:"stroke-dasharray"},eb={offset:"strokeDashoffset",array:"strokeDasharray"};function tb(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Z2:eb;e[s.offset]=U.transform(-r);const a=U.transform(t),l=U.transform(n);e[s.array]=`${a} ${l}`}function Tp(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function nb(e,t,n){const r=Tp(t,e.x,e.width),i=Tp(n,e.y,e.height);return`${r} ${i}`}function yu(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,p){if(xu(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:x,dimensions:v}=e;f.transform&&(v&&(x.transform=f.transform),delete f.transform),v&&(i!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=nb(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&tb(f,a,l,c,!1)}const vu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),X0=()=>({...vu(),attrs:{}}),bu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function q0(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const J0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Q0(e,t,n,r){q0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(J0.has(i)?i:du(i),t.attrs[i])}const Ss={};function rb(e){Object.assign(Ss,e)}function Z0(e,{layout:t,layoutId:n}){return Xn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ss[e]||e==="opacity")}function wu(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(we(i[a])||t.style&&we(t.style[a])||Z0(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function eg(e,t,n){const r=wu(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const s=Mr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function ib(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Np=["x","y","width","height","cx","cy","r"],ob={useVisualState:$0({scrapeMotionValuesFromProps:eg,createRenderState:X0,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const l in i)if(Xn.has(l)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let l=0;l<Np.length;l++){const c=Np[l];e[c]!==t[c]&&(a=!0)}a&&X.read(()=>{ib(n,r),X.render(()=>{yu(r,i,bu(n.tagName),e.transformTemplate),Q0(n,r)})})}})},sb={useVisualState:$0({scrapeMotionValuesFromProps:wu,createRenderState:vu})};function tg(e,t,n){for(const r in t)!we(t[r])&&!Z0(r,n)&&(e[r]=t[r])}function ab({transformTemplate:e},t){return m.useMemo(()=>{const n=vu();return xu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function lb(e,t){const n=e.style||{},r={};return tg(r,n,e),Object.assign(r,ab(e,t)),r}function cb(e,t){const n={},r=lb(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function ub(e,t,n,r){const i=m.useMemo(()=>{const s=X0();return yu(s,t,bu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};tg(s,e.style,e),i.style={...s,...i.style}}return i}function db(e=!1){return(n,r,i,{latestValues:s},a)=>{const c=(fu(n)?ub:cb)(r,s,a,n),u=E2(r,typeof n=="string",e),d=n!==m.Fragment?{...u,...c,ref:i}:{},{children:p}=r,f=m.useMemo(()=>we(p)?p.get():p,[p]);return m.createElement(n,{...d,children:f})}}function pb(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...fu(r)?ob:sb,preloadedFeatures:e,useRender:db(i),createVisualElement:t,Component:r};return L2(a)}}function ng(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function qs(e,t,n){const r=e.getProps();return mu(r,t,n!==void 0?n:r.custom,e)}const rg=lu(()=>window.ScrollTimeline!==void 0);class fb{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(rg()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class mb extends fb{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function ju(e,t){return e?e[t]||e.default||e:void 0}const Yl=2e4;function ig(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Yl;)t+=n,r=e.next(t);return t>=Yl?1/0:t}function Su(e){return typeof e=="function"}function Pp(e,t){e.timeline=t,e.onfinish=null}const ku=e=>Array.isArray(e)&&typeof e[0]=="number",hb={linearEasing:void 0};function gb(e,t){const n=lu(e);return()=>{var r;return(r=hb[t])!==null&&r!==void 0?r:n()}}const ks=gb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),og=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Yn(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function sg(e){return!!(typeof e=="function"&&ks()||!e||typeof e=="string"&&(e in Kl||ks())||ku(e)||Array.isArray(e)&&e.every(sg))}const ri=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Kl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ri([0,.65,.55,1]),circOut:ri([.55,0,1,.45]),backIn:ri([.31,.01,.66,-.59]),backOut:ri([.33,1.53,.69,.99])};function ag(e,t){if(e)return typeof e=="function"&&ks()?og(e,t):ku(e)?ri(e):Array.isArray(e)?e.map(n=>ag(n,t)||Kl.easeOut):Kl[e]}const ut={x:!1,y:!1};function lg(){return ut.x||ut.y}function Cu(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function cg(e,t){const n=Cu(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Ap(e){return t=>{t.pointerType==="touch"||lg()||e(t)}}function xb(e,t,n={}){const[r,i,s]=cg(e,n),a=Ap(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=Ap(p=>{u(p),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),s}const ug=(e,t)=>t?e===t?!0:ug(e,t.parentElement):!1,Eu=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,yb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function vb(e){return yb.has(e.tagName)||e.tabIndex!==-1}const ii=new WeakSet;function zp(e){return t=>{t.key==="Enter"&&e(t)}}function Pa(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const bb=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=zp(()=>{if(ii.has(n))return;Pa(n,"down");const i=zp(()=>{Pa(n,"up")}),s=()=>Pa(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Ip(e){return Eu(e)&&!lg()}function wb(e,t,n={}){const[r,i,s]=cg(e,n),a=l=>{const c=l.currentTarget;if(!Ip(l)||ii.has(c))return;ii.add(c);const u=t(l),d=(x,v)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",f),!(!Ip(x)||!ii.has(c))&&(ii.delete(c),typeof u=="function"&&u(x,{success:v}))},p=x=>{d(x,n.useGlobalTarget||ug(c,x.target))},f=x=>{d(x,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{!vb(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>bb(u,i),i)}),s}function jb(e){return e==="x"||e==="y"?ut[e]?null:(ut[e]=!0,()=>{ut[e]=!1}):ut.x||ut.y?null:(ut.x=ut.y=!0,()=>{ut.x=ut.y=!1})}const dg=new Set(["width","height","top","left","right","bottom",...Mr]);let $o;function Sb(){$o=void 0}const Nt={now:()=>($o===void 0&&Nt.set(xe.isProcessing||b2.useManualTiming?xe.timestamp:performance.now()),$o),set:e=>{$o=e,queueMicrotask(Sb)}};function Tu(e,t){e.indexOf(t)===-1&&e.push(t)}function Nu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Pu{constructor(){this.subscriptions=[]}add(t){return Tu(this.subscriptions,t),()=>Nu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Au(e,t){return t?e*(1e3/t):0}const Rp=30,kb=e=>!isNaN(parseFloat(e)),xi={current:void 0};class Cb{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Nt.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Nt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=kb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Pu);const r=this.events[t].add(n);return t==="change"?()=>{r(),X.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return xi.current&&xi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Nt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Rp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Rp);return Au(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function St(e,t){return new Cb(e,t)}function Eb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,St(n))}function Tb(e,t){const n=qs(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const l=_2(s[a]);Eb(e,a,l)}}function Nb(e){return!!(we(e)&&e.add)}function Gl(e,t){const n=e.getValue("willChange");if(Nb(n))return n.add(t)}function pg(e){return e.props[W0]}const fg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Pb=1e-7,Ab=12;function zb(e,t,n,r,i){let s,a,l=0;do a=t+(n-t)/2,s=fg(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>Pb&&++l<Ab);return a}function ro(e,t,n,r){if(e===t&&n===r)return Me;const i=s=>zb(s,0,1,e,n);return s=>s===0||s===1?s:fg(i(s),t,r)}const mg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hg=e=>t=>1-e(1-t),gg=ro(.33,1.53,.69,.99),zu=hg(gg),xg=mg(zu),yg=e=>(e*=2)<1?.5*zu(e):.5*(2-Math.pow(2,-10*(e-1))),Iu=e=>1-Math.sin(Math.acos(e)),vg=hg(Iu),bg=mg(Iu),wg=e=>/^0[^.\s]+$/u.test(e);function Ib(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||wg(e):!0}const yi=e=>Math.round(e*1e5)/1e5,Ru=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Rb(e){return e==null}const Db=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Du=(e,t)=>n=>!!(typeof n=="string"&&Db.test(n)&&n.startsWith(e)||t&&!Rb(n)&&Object.prototype.hasOwnProperty.call(n,t)),jg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,l]=r.match(Ru);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},Lb=e=>Pt(0,255,e),Aa={...Fr,transform:e=>Math.round(Lb(e))},Fn={test:Du("rgb","red"),parse:jg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Aa.transform(e)+", "+Aa.transform(t)+", "+Aa.transform(n)+", "+yi(Ui.transform(r))+")"};function Mb(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Xl={test:Du("#"),parse:Mb,transform:Fn.transform},ur={test:Du("hsl","hue"),parse:jg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Tt.transform(yi(t))+", "+Tt.transform(yi(n))+", "+yi(Ui.transform(r))+")"},Pe={test:e=>Fn.test(e)||Xl.test(e)||ur.test(e),parse:e=>Fn.test(e)?Fn.parse(e):ur.test(e)?ur.parse(e):Xl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Fn.transform(e):ur.transform(e)},Fb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Ob(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ru))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Fb))===null||n===void 0?void 0:n.length)||0)>0}const Sg="number",kg="color",Vb="var",Bb="var(",Dp="${}",_b=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $i(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(_b,c=>(Pe.test(c)?(r.color.push(s),i.push(kg),n.push(Pe.parse(c))):c.startsWith(Bb)?(r.var.push(s),i.push(Vb),n.push(c)):(r.number.push(s),i.push(Sg),n.push(parseFloat(c))),++s,Dp)).split(Dp);return{values:n,split:l,indexes:r,types:i}}function Cg(e){return $i(e).values}function Eg(e){const{split:t,types:n}=$i(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const l=n[a];l===Sg?s+=yi(i[a]):l===kg?s+=Pe.transform(i[a]):s+=i[a]}return s}}const Wb=e=>typeof e=="number"?0:e;function Hb(e){const t=Cg(e);return Eg(e)(t.map(Wb))}const xn={test:Ob,parse:Cg,createTransformer:Eg,getAnimatableNone:Hb},Ub=new Set(["brightness","contrast","saturate","opacity"]);function $b(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Ru)||[];if(!r)return e;const i=n.replace(r,"");let s=Ub.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const Yb=/\b([a-z-]*)\(.*?\)/gu,ql={...xn,getAnimatableNone:e=>{const t=e.match(Yb);return t?t.map($b).join(" "):e}},Kb={...gu,color:Pe,backgroundColor:Pe,outlineColor:Pe,fill:Pe,stroke:Pe,borderColor:Pe,borderTopColor:Pe,borderRightColor:Pe,borderBottomColor:Pe,borderLeftColor:Pe,filter:ql,WebkitFilter:ql},Lu=e=>Kb[e];function Tg(e,t){let n=Lu(e);return n!==ql&&(n=xn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Gb=new Set(["auto","none","0"]);function Xb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Gb.has(s)&&$i(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Tg(n,i)}const Lp=e=>e===Fr||e===U,Mp=(e,t)=>parseFloat(e.split(", ")[t]),Fp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Mp(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Mp(s[1],e):0}},qb=new Set(["x","y","z"]),Jb=Mr.filter(e=>!qb.has(e));function Qb(e){const t=[];return Jb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Nr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Fp(4,13),y:Fp(5,14)};Nr.translateX=Nr.x;Nr.translateY=Nr.y;const Bn=new Set;let Jl=!1,Ql=!1;function Ng(){if(Ql){const e=Array.from(Bn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Qb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ql=!1,Jl=!1,Bn.forEach(e=>e.complete()),Bn.clear()}function Pg(){Bn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ql=!0)})}function Zb(){Pg(),Ng()}class Mu{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Bn.add(this),Jl||(Jl=!0,X.read(Pg),X.resolveKeyframes(Ng))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Bn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Bn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ag=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ew=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function tw(e){const t=ew.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function zg(e,t,n=1){const[r,i]=tw(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return Ag(a)?parseFloat(a):a}return hu(i)?zg(i,t,n+1):i}const Ig=e=>t=>t.test(e),nw={test:e=>e==="auto",parse:e=>e},Rg=[Fr,U,Tt,qt,K2,Y2,nw],Op=e=>Rg.find(Ig(e));class Dg extends Mu{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),hu(u))){const d=zg(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!dg.has(r)||t.length!==2)return;const[i,s]=t,a=Op(i),l=Op(s);if(a!==l)if(Lp(a)&&Lp(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)Ib(t[i])&&r.push(i);r.length&&Xb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Nr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=Nr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Vp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(xn.test(e)||e==="0")&&!e.startsWith("url("));function rw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function iw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=Vp(i,t),l=Vp(s,t);return!a||!l?!1:rw(e)||(n==="spring"||Su(n))&&r}const ow=e=>e!==null;function Js(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(ow),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const sw=40;class Lg{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Nt.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>sw?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Zb(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Nt.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!iw(t,r,i,s))if(a)this.options.duration=0;else{c&&c(Js(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ae=(e,t,n)=>e+(t-e)*n;function za(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function aw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=za(c,l,e+1/3),s=za(c,l,e),a=za(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Cs(e,t){return n=>n>0?t:e}const Ia=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},lw=[Xl,Fn,ur],cw=e=>lw.find(t=>t.test(e));function Bp(e){const t=cw(e);if(!t)return!1;let n=t.parse(e);return t===ur&&(n=aw(n)),n}const _p=(e,t)=>{const n=Bp(e),r=Bp(t);if(!n||!r)return Cs(e,t);const i={...n};return s=>(i.red=Ia(n.red,r.red,s),i.green=Ia(n.green,r.green,s),i.blue=Ia(n.blue,r.blue,s),i.alpha=ae(n.alpha,r.alpha,s),Fn.transform(i))},uw=(e,t)=>n=>t(e(n)),io=(...e)=>e.reduce(uw),Zl=new Set(["none","hidden"]);function dw(e,t){return Zl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function pw(e,t){return n=>ae(e,t,n)}function Fu(e){return typeof e=="number"?pw:typeof e=="string"?hu(e)?Cs:Pe.test(e)?_p:hw:Array.isArray(e)?Mg:typeof e=="object"?Pe.test(e)?_p:fw:Cs}function Mg(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Fu(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function fw(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Fu(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function mw(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=c,i[a]++}return r}const hw=(e,t)=>{const n=xn.createTransformer(t),r=$i(e),i=$i(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Zl.has(e)&&!i.values.length||Zl.has(t)&&!r.values.length?dw(e,t):io(Mg(mw(r,i),i.values),n):Cs(e,t)};function Fg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ae(e,t,n):Fu(e)(e,t)}const gw=5;function Og(e,t,n){const r=Math.max(t-gw,0);return Au(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ra=.001;function xw({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s,a=1-t;a=Pt(ue.minDamping,ue.maxDamping,a),e=Pt(ue.minDuration,ue.maxDuration,Ft(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,x=ec(u,a),v=Math.exp(-p);return Ra-f/x*v},s=u=>{const p=u*a*e,f=p*n+n,x=Math.pow(a,2)*Math.pow(u,2)*e,v=Math.exp(-p),b=ec(Math.pow(u,2),a);return(-i(u)+Ra>0?-1:1)*((f-x)*v)/b}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-Ra+d*p},s=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const l=5/e,c=vw(i,s,l);if(e=Mt(e),isNaN(c))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const yw=12;function vw(e,t,n){let r=n;for(let i=1;i<yw;i++)r=r-e(r)/t(r);return r}function ec(e,t){return e*Math.sqrt(1-t*t)}const bw=["duration","bounce"],ww=["stiffness","damping","mass"];function Wp(e,t){return t.some(n=>e[n]!==void 0)}function jw(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Wp(e,ww)&&Wp(e,bw))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Pt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=xw(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Vg(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:c,damping:u,mass:d,duration:p,velocity:f,isResolvedFromDuration:x}=jw({...n,velocity:-Ft(n.velocity||0)}),v=f||0,b=u/(2*Math.sqrt(c*d)),w=a-s,g=Ft(Math.sqrt(c/d)),h=Math.abs(w)<5;r||(r=h?ue.restSpeed.granular:ue.restSpeed.default),i||(i=h?ue.restDelta.granular:ue.restDelta.default);let y;if(b<1){const j=ec(g,b);y=k=>{const E=Math.exp(-b*g*k);return a-E*((v+b*g*w)/j*Math.sin(j*k)+w*Math.cos(j*k))}}else if(b===1)y=j=>a-Math.exp(-g*j)*(w+(v+g*w)*j);else{const j=g*Math.sqrt(b*b-1);y=k=>{const E=Math.exp(-b*g*k),C=Math.min(j*k,300);return a-E*((v+b*g*w)*Math.sinh(C)+j*w*Math.cosh(C))/j}}const S={calculatedDuration:x&&p||null,next:j=>{const k=y(j);if(x)l.done=j>=p;else{let E=0;b<1&&(E=j===0?Mt(v):Og(y,j,k));const C=Math.abs(E)<=r,O=Math.abs(a-k)<=i;l.done=C&&O}return l.value=l.done?a:k,l},toString:()=>{const j=Math.min(ig(S),Yl),k=og(E=>S.next(j*E).value,j,30);return j+"ms "+k}};return S}function Hp({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},x=C=>l!==void 0&&C<l||c!==void 0&&C>c,v=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let b=n*t;const w=p+b,g=a===void 0?w:a(w);g!==w&&(b=g-p);const h=C=>-b*Math.exp(-C/r),y=C=>g+h(C),S=C=>{const O=h(C),D=y(C);f.done=Math.abs(O)<=u,f.value=f.done?g:D};let j,k;const E=C=>{x(f.value)&&(j=C,k=Vg({keyframes:[f.value,v(f.value)],velocity:Og(y,C,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return E(0),{calculatedDuration:null,next:C=>{let O=!1;return!k&&j===void 0&&(O=!0,S(C),E(C)),j!==void 0&&C>=j?k.next(C-j):(!O&&S(C),f)}}}const Sw=ro(.42,0,1,1),kw=ro(0,0,.58,1),Bg=ro(.42,0,.58,1),Cw=e=>Array.isArray(e)&&typeof e[0]!="number",Ew={linear:Me,easeIn:Sw,easeInOut:Bg,easeOut:kw,circIn:Iu,circInOut:bg,circOut:vg,backIn:zu,backInOut:xg,backOut:gg,anticipate:yg},Up=e=>{if(ku(e)){F0(e.length===4);const[t,n,r,i]=e;return ro(t,n,r,i)}else if(typeof e=="string")return Ew[e];return e};function Tw(e,t,n){const r=[],i=n||Fg,s=e.length-1;for(let a=0;a<s;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||Me:t;l=io(c,l)}r.push(l)}return r}function Ou(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(F0(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Tw(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let p=0;if(c>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const f=Yn(e[p],e[p+1],d);return l[p](f)};return n?d=>u(Pt(e[0],e[s-1],d)):u}function Nw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Yn(0,t,r);e.push(ae(n,1,i))}}function _g(e){const t=[0];return Nw(t,e.length-1),t}function Pw(e,t){return e.map(n=>n*t)}function Aw(e,t){return e.map(()=>t||Bg).splice(0,e.length-1)}function Es({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Cw(r)?r.map(Up):Up(r),s={done:!1,value:t[0]},a=Pw(n&&n.length===t.length?n:_g(t),e),l=Ou(a,t,{ease:Array.isArray(i)?i:Aw(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const zw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>X.update(t,!0),stop:()=>yt(t),now:()=>xe.isProcessing?xe.timestamp:Nt.now()}},Iw={decay:Hp,inertia:Hp,tween:Es,keyframes:Es,spring:Vg},Rw=e=>e/100;class Qs extends Lg{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Mu,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(s,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,l=Su(n)?n:Iw[n]||Es;let c,u;l!==Es&&typeof t[0]!="number"&&(c=io(Rw,Fg(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=ig(d));const{calculatedDuration:p}=d,f=p+i,x=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:p,resolvedDuration:f,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:x,repeatType:v,repeatDelay:b,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,S=s;if(x){const C=Math.min(this.currentTime,d)/p;let O=Math.floor(C),D=C%1;!D&&C>=1&&(D=1),D===1&&O--,O=Math.min(O,x+1),!!(O%2)&&(v==="reverse"?(D=1-D,b&&(D-=b/p)):v==="mirror"&&(S=a)),y=Pt(0,1,D)*p}const j=h?{done:!1,value:c[0]}:S.next(y);l&&(j.value=l(j.value));let{done:k}=j;!h&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return E&&i!==void 0&&(j.value=Js(c,this.options,i)),w&&w(j.value),E&&this.finish(),j}get duration(){const{resolved:t}=this;return t?Ft(t.calculatedDuration):0}get time(){return Ft(this.currentTime)}set time(t){t=Mt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ft(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=zw,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function Dw(e){return new Qs(e)}const Lw=new Set(["opacity","clipPath","filter","transform"]);function Mw(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=ag(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const Fw=lu(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ts=10,Ow=2e4;function Vw(e){return Su(e.type)||e.type==="spring"||!sg(e.ease)}function Bw(e,t){const n=new Qs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Ow;)r=n.sample(s),i.push(r.value),s+=Ts;return{times:void 0,keyframes:i,duration:s-Ts,ease:"linear"}}const Wg={anticipate:yg,backInOut:xg,circInOut:bg};function _w(e){return e in Wg}class $p extends Lg{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Dg(s,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof s=="string"&&ks()&&_w(s)&&(s=Wg[s]),Vw(this.options)){const{onComplete:p,onUpdate:f,motionValue:x,element:v,...b}=this.options,w=Bw(t,b);t=w.keyframes,t.length===1&&(t[1]=t[0]),r=w.duration,i=w.times,s=w.ease,a="keyframes"}const d=Mw(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(Pp(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:p}=this.options;l.set(Js(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Ft(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Ft(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Mt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Me;const{animation:r}=n;Pp(r,t)}return Me}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...x}=this.options,v=new Qs({...x,keyframes:r,duration:i,type:s,ease:a,times:l,isGenerator:!0}),b=Mt(this.time);u.setWithVelocity(v.sample(b-Ts).value,v.sample(b).value,Ts)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return Fw()&&r&&Lw.has(r)&&!c&&!u&&!i&&s!=="mirror"&&a!==0&&l!=="inertia"}}const Ww={type:"spring",stiffness:500,damping:25,restSpeed:10},Hw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Uw={type:"keyframes",duration:.8},$w={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Yw=(e,{keyframes:t})=>t.length>2?Uw:Xn.has(e)?e.startsWith("scale")?Hw(t[1]):Ww:$w;function Kw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Vu=(e,t,n,r={},i,s)=>a=>{const l=ju(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Mt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};Kw(l)||(d={...d,...Yw(e,d)}),d.duration&&(d.duration=Mt(d.duration)),d.repeatDelay&&(d.repeatDelay=Mt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!s&&t.get()!==void 0){const f=Js(d.keyframes,l);if(f!==void 0)return X.update(()=>{d.onUpdate(f),d.onComplete()}),new mb([])}return!s&&$p.supports(d)?new $p(d):new Qs(d)};function Gw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Hg(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in c){const f=e.getValue(p,(s=e.latestValues[p])!==null&&s!==void 0?s:null),x=c[p];if(x===void 0||d&&Gw(d,p))continue;const v={delay:n,...ju(a||{},p)};let b=!1;if(window.MotionHandoffAnimation){const g=pg(e);if(g){const h=window.MotionHandoffAnimation(g,p,X);h!==null&&(v.startTime=h,b=!0)}}Gl(e,p),f.start(Vu(p,f,x,e.shouldReduceMotion&&dg.has(p)?{type:!1}:v,e,b));const w=f.animation;w&&u.push(w)}return l&&Promise.all(u).then(()=>{X.update(()=>{l&&Tb(e,l)})}),u}function tc(e,t,n={}){var r;const i=qs(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(Hg(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=s;return Xw(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function Xw(e,t,n=0,r=0,i=1,s){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(qw).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(tc(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function qw(e,t){return e.sortNodePosition(t)}function Jw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>tc(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=tc(e,t,n);else{const i=typeof t=="function"?qs(e,t,n.custom):t;r=Promise.all(Hg(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Qw=uu.length;function Ug(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ug(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Qw;n++){const r=uu[n],i=e.props[r];(Hi(i)||i===!1)&&(t[r]=i)}return t}const Zw=[...cu].reverse(),ej=cu.length;function tj(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Jw(e,n,r)))}function nj(e){let t=tj(e),n=Yp(),r=!0;const i=c=>(u,d)=>{var p;const f=qs(e,d,c==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:x,transitionEnd:v,...b}=f;u={...u,...b,...v}}return u};function s(c){t=c(e)}function a(c){const{props:u}=e,d=Ug(e.parent)||{},p=[],f=new Set;let x={},v=1/0;for(let w=0;w<ej;w++){const g=Zw[w],h=n[g],y=u[g]!==void 0?u[g]:d[g],S=Hi(y),j=g===c?h.isActive:null;j===!1&&(v=w);let k=y===d[g]&&y!==u[g]&&S;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),h.protectedKeys={...x},!h.isActive&&j===null||!y&&!h.prevProp||Gs(y)||typeof y=="boolean")continue;const E=rj(h.prevProp,y);let C=E||g===c&&h.isActive&&!k&&S||w>v&&S,O=!1;const D=Array.isArray(y)?y:[y];let V=D.reduce(i(g),{});j===!1&&(V={});const{prevResolvedValues:_={}}=h,$={..._,...V},F=A=>{C=!0,f.has(A)&&(O=!0,f.delete(A)),h.needsAnimating[A]=!0;const T=e.getValue(A);T&&(T.liveStyle=!1)};for(const A in $){const T=V[A],M=_[A];if(x.hasOwnProperty(A))continue;let W=!1;$l(T)&&$l(M)?W=!ng(T,M):W=T!==M,W?T!=null?F(A):f.add(A):T!==void 0&&f.has(A)?F(A):h.protectedKeys[A]=!0}h.prevProp=y,h.prevResolvedValues=V,h.isActive&&(x={...x,...V}),r&&e.blockInitialAnimation&&(C=!1),C&&(!(k&&E)||O)&&p.push(...D.map(A=>({animation:A,options:{type:g}})))}if(f.size){const w={};f.forEach(g=>{const h=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),w[g]=h??null}),p.push({animation:w})}let b=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(p):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var x;return(x=f.animationState)===null||x===void 0?void 0:x.setActive(c,u)}),n[c].isActive=u;const p=a(c);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Yp(),r=!0}}}function rj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ng(t,e):!1}function Nn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Yp(){return{animate:Nn(!0),whileInView:Nn(),whileHover:Nn(),whileTap:Nn(),whileDrag:Nn(),whileFocus:Nn(),exit:Nn()}}class Sn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ij extends Sn{constructor(t){super(t),t.animationState||(t.animationState=nj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Gs(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let oj=0;class sj extends Sn{constructor(){super(...arguments),this.id=oj++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const aj={animation:{Feature:ij},exit:{Feature:sj}};function Yi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function oo(e){return{point:{x:e.pageX,y:e.pageY}}}const lj=e=>t=>Eu(t)&&e(t,oo(t));function vi(e,t,n,r){return Yi(e,t,lj(n),r)}const Kp=(e,t)=>Math.abs(e-t);function cj(e,t){const n=Kp(e.x,t.x),r=Kp(e.y,t.y);return Math.sqrt(n**2+r**2)}class $g{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=La(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,x=cj(p.offset,{x:0,y:0})>=3;if(!f&&!x)return;const{point:v}=p,{timestamp:b}=xe;this.history.push({...v,timestamp:b});const{onStart:w,onMove:g}=this.handlers;f||(w&&w(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Da(f,this.transformPagePoint),X.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:x,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=La(p.type==="pointercancel"?this.lastMoveEventInfo:Da(f,this.transformPagePoint),this.history);this.startEvent&&x&&x(p,w),v&&v(p,w)},!Eu(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=oo(t),l=Da(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=xe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,La(l,this.history)),this.removeListeners=io(vi(this.contextWindow,"pointermove",this.handlePointerMove),vi(this.contextWindow,"pointerup",this.handlePointerUp),vi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),yt(this.updatePoint)}}function Da(e,t){return t?{point:t(e.point)}:e}function Gp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function La({point:e},t){return{point:e,delta:Gp(e,Yg(t)),offset:Gp(e,uj(t)),velocity:dj(t,.1)}}function uj(e){return e[0]}function Yg(e){return e[e.length-1]}function dj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Yg(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Mt(t)));)n--;if(!r)return{x:0,y:0};const s=Ft(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const Kg=1e-4,pj=1-Kg,fj=1+Kg,Gg=.01,mj=0-Gg,hj=0+Gg;function Je(e){return e.max-e.min}function gj(e,t,n){return Math.abs(e-t)<=n}function Xp(e,t,n,r=.5){e.origin=r,e.originPoint=ae(t.min,t.max,e.origin),e.scale=Je(n)/Je(t),e.translate=ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=pj&&e.scale<=fj||isNaN(e.scale))&&(e.scale=1),(e.translate>=mj&&e.translate<=hj||isNaN(e.translate))&&(e.translate=0)}function bi(e,t,n,r){Xp(e.x,t.x,n.x,r?r.originX:void 0),Xp(e.y,t.y,n.y,r?r.originY:void 0)}function qp(e,t,n){e.min=n.min+t.min,e.max=e.min+Je(t)}function xj(e,t,n){qp(e.x,t.x,n.x),qp(e.y,t.y,n.y)}function Jp(e,t,n){e.min=t.min-n.min,e.max=e.min+Je(t)}function wi(e,t,n){Jp(e.x,t.x,n.x),Jp(e.y,t.y,n.y)}function yj(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ae(n,e,r.max):Math.min(e,n)),e}function Qp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function vj(e,{top:t,left:n,bottom:r,right:i}){return{x:Qp(e.x,n,i),y:Qp(e.y,t,r)}}function Zp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function bj(e,t){return{x:Zp(e.x,t.x),y:Zp(e.y,t.y)}}function wj(e,t){let n=.5;const r=Je(e),i=Je(t);return i>r?n=Yn(t.min,t.max-r,e.min):r>i&&(n=Yn(e.min,e.max-i,t.min)),Pt(0,1,n)}function jj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const nc=.35;function Sj(e=nc){return e===!1?e=0:e===!0&&(e=nc),{x:ef(e,"left","right"),y:ef(e,"top","bottom")}}function ef(e,t,n){return{min:tf(e,t),max:tf(e,n)}}function tf(e,t){return typeof e=="number"?e:e[t]||0}const nf=()=>({translate:0,scale:1,origin:0,originPoint:0}),dr=()=>({x:nf(),y:nf()}),rf=()=>({min:0,max:0}),pe=()=>({x:rf(),y:rf()});function tt(e){return[e("x"),e("y")]}function Xg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function kj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Cj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ma(e){return e===void 0||e===1}function rc({scale:e,scaleX:t,scaleY:n}){return!Ma(e)||!Ma(t)||!Ma(n)}function In(e){return rc(e)||qg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function qg(e){return of(e.x)||of(e.y)}function of(e){return e&&e!=="0%"}function Ns(e,t,n){const r=e-n,i=t*r;return n+i}function sf(e,t,n,r,i){return i!==void 0&&(e=Ns(e,i,r)),Ns(e,n,r)+t}function ic(e,t=0,n=1,r,i){e.min=sf(e.min,t,n,r,i),e.max=sf(e.max,t,n,r,i)}function Jg(e,{x:t,y:n}){ic(e.x,t.translate,t.scale,t.originPoint),ic(e.y,n.translate,n.scale,n.originPoint)}const af=.999999999999,lf=1.0000000000001;function Ej(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let l=0;l<i;l++){s=n[l],a=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&fr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Jg(e,a)),r&&In(s.latestValues)&&fr(e,s.latestValues))}t.x<lf&&t.x>af&&(t.x=1),t.y<lf&&t.y>af&&(t.y=1)}function pr(e,t){e.min=e.min+t,e.max=e.max+t}function cf(e,t,n,r,i=.5){const s=ae(e.min,e.max,i);ic(e,t,n,s,r)}function fr(e,t){cf(e.x,t.x,t.scaleX,t.scale,t.originX),cf(e.y,t.y,t.scaleY,t.scale,t.originY)}function Qg(e,t){return Xg(Cj(e.getBoundingClientRect(),t))}function Tj(e,t,n){const r=Qg(e,n),{scroll:i}=t;return i&&(pr(r.x,i.offset.x),pr(r.y,i.offset.y)),r}const Zg=({current:e})=>e?e.ownerDocument.defaultView:null,Nj=new WeakMap;class Pj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(oo(d).point)},s=(d,p)=>{const{drag:f,dragPropagation:x,onDragStart:v}=this.getProps();if(f&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=jb(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tt(w=>{let g=this.getAxisMotionValue(w).get()||0;if(Tt.test(g)){const{projection:h}=this.visualElement;if(h&&h.layout){const y=h.layout.layoutBox[w];y&&(g=Je(y)*(parseFloat(g)/100))}}this.originPoint[w]=g}),v&&X.postRender(()=>v(d,p)),Gl(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:x,onDirectionLock:v,onDrag:b}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=p;if(x&&this.currentDirection===null){this.currentDirection=Aj(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,w),this.updateAxis("y",p.point,w),this.visualElement.render(),b&&b(d,p)},l=(d,p)=>this.stop(d,p),c=()=>tt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new $g(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Zg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&X.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ao(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=yj(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&cr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=vj(i.layoutBox,n):this.constraints=!1,this.elastic=Sj(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&tt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=jj(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!cr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Tj(r,i.root,this.visualElement.getTransformPagePoint());let a=bj(i.layout.layoutBox,s);if(n){const l=n(kj(a));this.hasMutatedConstraints=!!l,l&&(a=Xg(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=tt(d=>{if(!Ao(d,n,this.currentDirection))return;let p=c&&c[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,x=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Gl(this.visualElement,t),r.start(Vu(t,r,0,n,this.visualElement,!1))}stopAnimation(){tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){tt(n=>{const{drag:r}=this.getProps();if(!Ao(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];s.set(t[n]-ae(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!cr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};tt(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=wj({min:c,max:c},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),tt(a=>{if(!Ao(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(ae(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;Nj.set(this.visualElement,this);const t=this.visualElement.current,n=vi(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();cr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),X.read(r);const a=Yi(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(tt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=c[d].translate,p.set(p.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=nc,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function Ao(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Aj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class zj extends Sn{constructor(t){super(t),this.removeGroupControls=Me,this.removeListeners=Me,this.controls=new Pj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Me}unmount(){this.removeGroupControls(),this.removeListeners()}}const uf=e=>(t,n)=>{e&&X.postRender(()=>e(t,n))};class Ij extends Sn{constructor(){super(...arguments),this.removePointerDownListener=Me}onPointerDown(t){this.session=new $g(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:uf(t),onStart:uf(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&X.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=vi(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function df(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Gr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=df(e,t.target.x),r=df(e,t.target.y);return`${n}% ${r}%`}},Rj={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=xn.parse(e);if(i.length>5)return r;const s=xn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=ae(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class Dj extends m.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;rb(Lj),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Yo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||X.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),pu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ex(e){const[t,n]=M0(),r=m.useContext(su);return o.jsx(Dj,{...e,layoutGroup:r,switchLayoutGroup:m.useContext(H0),isPresent:t,safeToRemove:n})}const Lj={borderRadius:{...Gr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Gr,borderTopRightRadius:Gr,borderBottomLeftRadius:Gr,borderBottomRightRadius:Gr,boxShadow:Rj};function Mj(e,t,n){const r=we(e)?e:St(e);return r.start(Vu("",r,t,n)),r.animation}function Fj(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Oj=(e,t)=>e.depth-t.depth;class Vj{constructor(){this.children=[],this.isDirty=!1}add(t){Tu(this.children,t),this.isDirty=!0}remove(t){Nu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Oj),this.isDirty=!1,this.children.forEach(t)}}function Bj(e,t){const n=Nt.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(yt(r),e(s-t))};return X.read(r,!0),()=>yt(r)}const tx=["TopLeft","TopRight","BottomLeft","BottomRight"],_j=tx.length,pf=e=>typeof e=="string"?parseFloat(e):e,ff=e=>typeof e=="number"||U.test(e);function Wj(e,t,n,r,i,s){i?(e.opacity=ae(0,n.opacity!==void 0?n.opacity:1,Hj(r)),e.opacityExit=ae(t.opacity!==void 0?t.opacity:1,0,Uj(r))):s&&(e.opacity=ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<_j;a++){const l=`border${tx[a]}Radius`;let c=mf(t,l),u=mf(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||ff(c)===ff(u)?(e[l]=Math.max(ae(pf(c),pf(u),r),0),(Tt.test(u)||Tt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=ae(t.rotate||0,n.rotate||0,r))}function mf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Hj=nx(0,.5,vg),Uj=nx(.5,.95,Me);function nx(e,t,n){return r=>r<e?0:r>t?1:n(Yn(e,t,r))}function hf(e,t){e.min=t.min,e.max=t.max}function et(e,t){hf(e.x,t.x),hf(e.y,t.y)}function gf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xf(e,t,n,r,i){return e-=t,e=Ns(e,1/n,r),i!==void 0&&(e=Ns(e,1/i,r)),e}function $j(e,t=0,n=1,r=.5,i,s=e,a=e){if(Tt.test(t)&&(t=parseFloat(t),t=ae(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=ae(s.min,s.max,r);e===s&&(l-=t),e.min=xf(e.min,t,n,l,i),e.max=xf(e.max,t,n,l,i)}function yf(e,t,[n,r,i],s,a){$j(e,t[n],t[r],t[i],t.scale,s,a)}const Yj=["x","scaleX","originX"],Kj=["y","scaleY","originY"];function vf(e,t,n,r){yf(e.x,t,Yj,n?n.x:void 0,r?r.x:void 0),yf(e.y,t,Kj,n?n.y:void 0,r?r.y:void 0)}function bf(e){return e.translate===0&&e.scale===1}function rx(e){return bf(e.x)&&bf(e.y)}function wf(e,t){return e.min===t.min&&e.max===t.max}function Gj(e,t){return wf(e.x,t.x)&&wf(e.y,t.y)}function jf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function ix(e,t){return jf(e.x,t.x)&&jf(e.y,t.y)}function Sf(e){return Je(e.x)/Je(e.y)}function kf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Xj{constructor(){this.members=[]}add(t){Tu(this.members,t),t.scheduleRender()}remove(t){if(Nu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function qj(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:x,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),x&&(r+=`skewX(${x}deg) `),v&&(r+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Rn={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},oi=typeof window<"u"&&window.MotionDebug!==void 0,Fa=["","X","Y","Z"],Jj={visibility:"hidden"},Cf=1e3;let Qj=0;function Oa(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ox(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=pg(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",X,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ox(r)}function sx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=Qj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,oi&&(Rn.totalNodes=Rn.resolvedTargetDeltas=Rn.recalculatedProjection=0),this.nodes.forEach(t4),this.nodes.forEach(s4),this.nodes.forEach(a4),this.nodes.forEach(n4),oi&&window.MotionDebug.record(Rn)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Vj)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Pu),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Fj(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=Bj(f,250),Yo.hasAnimatedSinceResize&&(Yo.hasAnimatedSinceResize=!1,this.nodes.forEach(Tf))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:x,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||p4,{onLayoutAnimationStart:w,onLayoutAnimationComplete:g}=d.getProps(),h=!this.targetLayout||!ix(this.targetLayout,v)||x,y=!f&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,y);const S={...ju(b,"layout"),onPlay:w,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Tf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,yt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(l4),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ox(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Ef);return}this.isUpdating||this.nodes.forEach(i4),this.isUpdating=!1,this.nodes.forEach(o4),this.nodes.forEach(Zj),this.nodes.forEach(e4),this.clearAllSnapshots();const l=Nt.now();xe.delta=Pt(0,1e3/60,l-xe.timestamp),xe.timestamp=l,xe.isProcessing=!0,Na.update.process(xe),Na.preRender.process(xe),Na.render.process(xe),xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(r4),this.sharedNodes.forEach(c4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,X.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){X.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!rx(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||In(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),f4(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return pe();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(m4))){const{scroll:d}=this.root;d&&(pr(c.x,d.offset.x),pr(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=pe();if(et(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&et(c,a),pr(c.x,p.offset.x),pr(c.y,p.offset.y))}return c}applyTransform(a,l=!1){const c=pe();et(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&fr(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),In(d.latestValues)&&fr(c,d.latestValues)}return In(this.latestValues)&&fr(c,this.latestValues),c}removeTransform(a){const l=pe();et(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!In(u.latestValues))continue;rc(u.latestValues)&&u.updateSnapshot();const d=pe(),p=u.measurePageBox();et(d,p),vf(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return In(this.latestValues)&&vf(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=xe.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),wi(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),xj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):et(this.target,this.layout.layoutBox),Jg(this.target,this.targetDelta)):et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),wi(this.relativeTargetOrigin,this.target,x.target),et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}oi&&Rn.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||rc(this.parent.latestValues)||qg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===xe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;et(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,x=this.treeScale.y;Ej(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=pe());const{target:v}=l;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gf(this.prevProjectionDelta.x,this.projectionDelta.x),gf(this.prevProjectionDelta.y,this.projectionDelta.y)),bi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==x||!kf(this.projectionDelta.x,this.prevProjectionDelta.x)||!kf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),oi&&Rn.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=dr(),this.projectionDelta=dr(),this.projectionDeltaWithTransform=dr()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},p=dr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=pe(),x=c?c.source:void 0,v=this.layout?this.layout.source:void 0,b=x!==v,w=this.getStack(),g=!w||w.members.length<=1,h=!!(b&&!g&&this.options.crossfade===!0&&!this.path.some(d4));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const j=S/1e3;Nf(p.x,a.x,j),Nf(p.y,a.y,j),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),u4(this.relativeTarget,this.relativeTargetOrigin,f,j),y&&Gj(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=pe()),et(y,this.relativeTarget)),b&&(this.animationValues=d,Wj(d,u,this.latestValues,j,h,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(yt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=X.update(()=>{Yo.hasAnimatedSinceResize=!0,this.currentAnimation=Mj(0,Cf,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Cf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&ax(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||pe();const p=Je(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+p;const f=Je(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+f}et(l,c),fr(l,d),bi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Xj),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Oa("z",a,u,this.animationValues);for(let d=0;d<Fa.length;d++)Oa(`rotate${Fa[d]}`,a,u,this.animationValues),Oa(`skew${Fa[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Jj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Uo(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Uo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!In(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=qj(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x,y:v}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${v.origin*100}% 0`,p.animationValues?u.opacity=p===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in Ss){if(f[b]===void 0)continue;const{correct:w,applyTo:g}=Ss[b],h=u.transform==="none"?f[b]:w(f[b],p);if(g){const y=g.length;for(let S=0;S<y;S++)u[g[S]]=h}else u[b]=h}return this.options.layoutId&&(u.pointerEvents=p===this?Uo(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Ef),this.root.sharedNodes.clear()}}}function Zj(e){e.updateLayout()}function e4(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?tt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],x=Je(f);f.min=r[p].min,f.max=f.min+x}):ax(s,n.layoutBox,r)&&tt(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],x=Je(r[p]);f.max=f.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+x)});const l=dr();bi(l,r,n.layoutBox);const c=dr();a?bi(c,e.applyTransform(i,!0),n.measuredBox):bi(c,r,n.layoutBox);const u=!rx(l);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:x}=p;if(f&&x){const v=pe();wi(v,n.layoutBox,f.layoutBox);const b=pe();wi(b,r,x.layoutBox),ix(v,b)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=v,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function t4(e){oi&&Rn.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function n4(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function r4(e){e.clearSnapshot()}function Ef(e){e.clearMeasurements()}function i4(e){e.isLayoutDirty=!1}function o4(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Tf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function s4(e){e.resolveTargetDelta()}function a4(e){e.calcProjection()}function l4(e){e.resetSkewAndRotation()}function c4(e){e.removeLeadSnapshot()}function Nf(e,t,n){e.translate=ae(t.translate,0,n),e.scale=ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Pf(e,t,n,r){e.min=ae(t.min,n.min,r),e.max=ae(t.max,n.max,r)}function u4(e,t,n,r){Pf(e.x,t.x,n.x,r),Pf(e.y,t.y,n.y,r)}function d4(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const p4={duration:.45,ease:[.4,0,.1,1]},Af=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),zf=Af("applewebkit/")&&!Af("chrome/")?Math.round:Me;function If(e){e.min=zf(e.min),e.max=zf(e.max)}function f4(e){If(e.x),If(e.y)}function ax(e,t,n){return e==="position"||e==="preserve-aspect"&&!gj(Sf(t),Sf(n),.2)}function m4(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const h4=sx({attachResizeListener:(e,t)=>Yi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Va={current:void 0},lx=sx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Va.current){const e=new h4({});e.mount(window),e.setOptions({layoutScroll:!0}),Va.current=e}return Va.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),g4={pan:{Feature:Ij},drag:{Feature:zj,ProjectionNode:lx,MeasureLayout:ex}};function Rf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&X.postRender(()=>s(t,oo(t)))}class x4 extends Sn{mount(){const{current:t}=this.node;t&&(this.unmount=xb(t,n=>(Rf(this.node,n,"Start"),r=>Rf(this.node,r,"End"))))}unmount(){}}class y4 extends Sn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=io(Yi(this.node.current,"focus",()=>this.onFocus()),Yi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Df(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&X.postRender(()=>s(t,oo(t)))}class v4 extends Sn{mount(){const{current:t}=this.node;t&&(this.unmount=wb(t,n=>(Df(this.node,n,"Start"),(r,{success:i})=>Df(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const oc=new WeakMap,Ba=new WeakMap,b4=e=>{const t=oc.get(e.target);t&&t(e)},w4=e=>{e.forEach(b4)};function j4({root:e,...t}){const n=e||document;Ba.has(n)||Ba.set(n,{});const r=Ba.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(w4,{root:e,...t})),r[i]}function S4(e,t,n){const r=j4(t);return oc.set(e,n),r.observe(e),()=>{oc.delete(e),r.unobserve(e)}}const k4={some:0,all:1};class C4 extends Sn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:k4[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(c)};return S4(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(E4(t,n))&&this.startObserver()}unmount(){}}function E4({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const T4={inView:{Feature:C4},tap:{Feature:v4},focus:{Feature:y4},hover:{Feature:x4}},N4={layout:{ProjectionNode:lx,MeasureLayout:ex}},sc={current:null},cx={current:!1};function P4(){if(cx.current=!0,!!au)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>sc.current=e.matches;e.addListener(t),t()}else sc.current=!1}const A4=[...Rg,Pe,xn],z4=e=>A4.find(Ig(e)),Lf=new WeakMap;function I4(e,t,n){for(const r in t){const i=t[r],s=n[r];if(we(i))e.addValue(r,i);else if(we(s))e.addValue(r,St(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,St(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Mf=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class R4{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Nt.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,X.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=Xs(n),this.isVariantNode=_0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in f){const v=f[x];c[x]!==void 0&&we(v)&&v.set(c[x],!1)}}mount(t){this.current=t,Lf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),cx.current||P4(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:sc.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Lf.delete(this.current),this.projection&&this.projection.unmount(),yt(this.notifyUpdate),yt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Xn.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&X.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Tr){const n=Tr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Mf.length;r++){const i=Mf[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=I4(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=St(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Ag(i)||wg(i))?i=parseFloat(i):!z4(i)&&xn.test(n)&&(i=Tg(t,n)),this.setBaseTarget(t,we(i)?i.get():i)),we(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=mu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!we(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Pu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ux extends R4{constructor(){super(...arguments),this.KeyframeResolver=Dg}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function D4(e){return window.getComputedStyle(e)}class L4 extends ux{constructor(){super(...arguments),this.type="html",this.renderInstance=q0}readValueFromInstance(t,n){if(Xn.has(n)){const r=Lu(n);return r&&r.default||0}else{const r=D4(t),i=(K0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Qg(t,n)}build(t,n,r){xu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return wu(t,n,r)}}class M4 extends ux{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Xn.has(n)){const r=Lu(n);return r&&r.default||0}return n=J0.has(n)?n:du(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return eg(t,n,r)}build(t,n,r){yu(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Q0(t,n,r,i)}mount(t){this.isSVGTag=bu(t.tagName),super.mount(t)}}const F4=(e,t)=>fu(e)?new M4(t):new L4(t,{allowProjection:e!==m.Fragment}),O4=pb({...aj,...T4,...g4,...N4},F4),N=T2(O4);function dx(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return X.update(r,!0),()=>yt(r)}const Ko=new WeakMap;let Jt;function V4(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function B4({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Ko.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return V4(e,n)}})})}function _4(e){e.forEach(B4)}function W4(){typeof ResizeObserver>"u"||(Jt=new ResizeObserver(_4))}function H4(e,t){Jt||W4();const n=Cu(e);return n.forEach(r=>{let i=Ko.get(r);i||(i=new Set,Ko.set(r,i)),i.add(t),Jt==null||Jt.observe(r)}),()=>{n.forEach(r=>{const i=Ko.get(r);i==null||i.delete(t),i!=null&&i.size||Jt==null||Jt.unobserve(r)})}}const Go=new Set;let ji;function U4(){ji=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Go.forEach(n=>n(t))},window.addEventListener("resize",ji)}function $4(e){return Go.add(e),ji||U4(),()=>{Go.delete(e),!Go.size&&ji&&(ji=void 0)}}function Y4(e,t){return typeof e=="function"?$4(e):H4(e,t)}const K4=50,Ff=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),G4=()=>({time:0,x:Ff(),y:Ff()}),X4={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Of(e,t,n,r){const i=n[t],{length:s,position:a}=X4[t],l=i.current,c=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Yn(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>K4?0:Au(i.current-l,u)}function q4(e,t,n){Of(e,"x",t,n),Of(e,"y",t,n),t.time=n}function J4(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=i.left-s.left,n.y+=i.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:s}=r.getBBox();n.x+=i,n.y+=s;let a=null,l=r.parentNode;for(;!a;)l.tagName==="svg"&&(a=l),l=r.parentNode;r=a}else break;return n}const ac={start:0,center:.5,end:1};function Vf(e,t,n=0){let r=0;if(e in ac&&(e=ac[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const Q4=[0,0];function Z4(e,t,n,r){let i=Array.isArray(e)?e:Q4,s=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,ac[e]?e:"0"]),s=Vf(i[0],n,r),a=Vf(i[1],t),s-a}const eS={All:[[0,0],[1,1]]},tS={x:0,y:0};function nS(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function rS(e,t,n){const{offset:r=eS.All}=n,{target:i=e,axis:s="y"}=n,a=s==="y"?"height":"width",l=i!==e?J4(i,e):tS,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:nS(i),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let d=!t[s].interpolate;const p=r.length;for(let f=0;f<p;f++){const x=Z4(r[f],u[a],c[a],l[s]);!d&&x!==t[s].interpolatorOffsets[f]&&(d=!0),t[s].offset[f]=x}d&&(t[s].interpolate=Ou(t[s].offset,_g(r),{clamp:!1}),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=Pt(0,1,t[s].interpolate(t[s].current))}function iS(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function oS(e,t,n,r={}){return{measure:()=>iS(e,r.target,n),update:i=>{q4(e,n,i),(r.offset||r.target)&&rS(e,n,r)},notify:()=>t(n)}}const Xr=new WeakMap,Bf=new WeakMap,_a=new WeakMap,_f=e=>e===document.documentElement?window:e;function Bu(e,{container:t=document.documentElement,...n}={}){let r=_a.get(t);r||(r=new Set,_a.set(t,r));const i=G4(),s=oS(t,e,i,n);if(r.add(s),!Xr.has(t)){const l=()=>{for(const f of r)f.measure()},c=()=>{for(const f of r)f.update(xe.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{X.read(l,!1,!0),X.read(c,!1,!0),X.update(u,!1,!0)};Xr.set(t,d);const p=_f(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Bf.set(t,Y4(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=Xr.get(t);return X.read(a,!1,!0),()=>{var l;yt(a);const c=_a.get(t);if(!c||(c.delete(s),c.size))return;const u=Xr.get(t);Xr.delete(t),u&&(_f(t).removeEventListener("scroll",u),(l=Bf.get(t))===null||l===void 0||l(),window.removeEventListener("resize",u))}}function sS({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Bu(s=>{r.value=s[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Wa=new Map;function px({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Wa.has(t)||Wa.set(t,{});const r=Wa.get(t);return r[n]||(r[n]=rg()?new ScrollTimeline({source:t,axis:n}):sS({source:t,axis:n})),r[n]}function aS(e){return e.length===2}function fx(e){return e&&(e.target||e.offset)}function lS(e,t){return aS(e)||fx(t)?Bu(n=>{e(n[t.axis].progress,n)},t):dx(e,px(t))}function cS(e,t){if(e.flatten(),fx(t))return e.pause(),Bu(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=px(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),dx(i=>{r.time=r.duration*i},n))):Me}}function uS(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?lS(e,r):cS(e,r)}function Wf(e,t){v2(!!(!t||t.current))}const dS=()=>({scrollX:St(0),scrollY:St(0),scrollXProgress:St(0),scrollYProgress:St(0)});function pS({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Lr(dS);return(n?to:m.useEffect)(()=>(Wf("target",t),Wf("container",e),uS((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function mx(e){const t=Lr(()=>St(e)),{isStatic:n}=m.useContext(eo);if(n){const[,r]=m.useState(e);m.useEffect(()=>t.on("change",r),[])}return t}function hx(e,t){const n=mx(t()),r=()=>n.set(t());return r(),to(()=>{const i=()=>X.preRender(r,!1,!0),s=e.map(a=>a.on("change",i));return()=>{s.forEach(a=>a()),yt(r)}}),n}function Hf(e){return typeof e=="number"?e:parseFloat(e)}function fS(e,t={}){const{isStatic:n}=m.useContext(eo),r=m.useRef(null),i=mx(we(e)?Hf(e.get()):e),s=m.useRef(i.get()),a=m.useRef(()=>{}),l=()=>{const u=r.current;u&&u.time===0&&u.sample(xe.delta),c(),r.current=Dw({keyframes:[i.get(),s.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a.current})},c=()=>{r.current&&r.current.stop()};return m.useInsertionEffect(()=>i.attach((u,d)=>n?d(u):(s.current=u,a.current=d,X.update(l),i.get()),c),[JSON.stringify(t)]),to(()=>{if(we(e))return e.on("change",u=>i.set(Hf(u)))},[i]),i}const mS=e=>e&&typeof e=="object"&&e.mix,hS=e=>mS(e)?e.mix:void 0;function gS(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],a=e[3+n],l=Ou(i,s,{mixer:hS(s[0]),...a});return t?l(r):l}function xS(e){xi.current=[],e();const t=hx(xi.current,e);return xi.current=void 0,t}function yS(e,t,n,r){if(typeof e=="function")return xS(e);const i=typeof t=="function"?t:gS(t,n,r);return Array.isArray(e)?Uf(e,i):Uf([e],([s])=>i(s))}function Uf(e,t){const n=Lr(()=>[]);return hx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const vS={some:0,all:1};function bS(e,t,{root:n,margin:r,amount:i="some"}={}){const s=Cu(e),a=new WeakMap,l=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):c.unobserve(d.target)}else typeof p=="function"&&(p(d),a.delete(d.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:vS[i]});return s.forEach(u=>c.observe(u)),()=>c.disconnect()}function kn(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[s,a]=m.useState(!1);return m.useEffect(()=>{if(!e.current||i&&s)return;const l=()=>(a(!0),i?void 0:()=>a(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return bS(e.current,l,c)},[t,e,n,i,r]),s}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gx=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>m.createElement("svg",{ref:c,...jS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gx("lucide",i),...l},[...a.map(([u,d])=>m.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=m.forwardRef(({className:r,...i},s)=>m.createElement(SS,{ref:s,iconNode:t,className:gx(`lucide-${wS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=H("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=H("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=H("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=H("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=H("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=H("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=H("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=H("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=H("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=H("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=H("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=H("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=H("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=H("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=H("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=H("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=H("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=H("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=H("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=H("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=H("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=H("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=H("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=H("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=H("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=H("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=H("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=H("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=H("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=H("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=H("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=H("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=H("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=H("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=H("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=H("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=H("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=H("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=H("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);async function zx(e){const t=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const n=await t.json().catch(()=>({}));throw new Error(n.error||"Failed to send enquiry.")}}const Cn="/api",_u="nivora_admin_token";function Wu(){return sessionStorage.getItem(_u)}function QS(e){sessionStorage.setItem(_u,e),sessionStorage.setItem("nivora_admin","true")}function Hu(){sessionStorage.removeItem(_u),sessionStorage.removeItem("nivora_admin")}async function Uu(e,t){const n=await fetch(`${Cn}${e}`,{headers:{"Content-Type":"application/json"},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw new Error(r.error||`Request failed: ${n.status}`)}return n.json()}async function so(e,t){const r={"Content-Type":"application/json","x-admin-token":Wu()||"",...t==null?void 0:t.headers},i=await fetch(`${Cn}${e}`,{...t,headers:r});if(i.status===403)throw Hu(),window.location.href="/adminpannel",new Error("Session expired. Please log in again.");if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||`Request failed: ${i.status}`)}return i.json()}async function ZS(e,t){const n=await fetch(`${Cn}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.error||"Login failed")}const r=await n.json();QS(r.token)}function Ix(){return Uu("/projects")}function e5(e){return so("/projects/reorder",{method:"PUT",body:JSON.stringify({order:e})})}function Rx(e){return Uu(`/projects/${e}`)}function t5(e){return so("/projects",{method:"POST",body:JSON.stringify(e)})}function n5(e,t){return so(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})}function r5(e){return so(`/projects/${e}`,{method:"DELETE"})}function Dx(e){if(e.status===403)throw Hu(),window.location.href="/adminpannel",new Error("Session expired. Please log in again.")}async function Ha(e){const t=Wu()||"",n=new FormData;e.forEach(s=>n.append("images",s));const r=await fetch(`${Cn}/projects/upload-images`,{method:"POST",headers:{"x-admin-token":t},body:n});if(Dx(r),!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.error||"Upload failed")}return(await r.json()).urls}async function i5(e){const t=Wu()||"",n=new FormData;n.append("image",e);const r=await fetch(`${Cn}/site-settings/upload-image`,{method:"POST",headers:{"x-admin-token":t},body:n});if(Dx(r),!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.error||"Upload failed")}return(await r.json()).url}function Lx(){return Uu("/site-settings")}function o5(e){return so("/site-settings",{method:"PUT",body:JSON.stringify(e)})}const $u="nivora_excel_token";function Mx(){return sessionStorage.getItem($u)}function s5(e){sessionStorage.setItem($u,e),sessionStorage.setItem("nivora_excel_admin","true")}function Yu(){sessionStorage.removeItem($u),sessionStorage.removeItem("nivora_excel_admin")}async function a5(e,t){const n=await fetch(`${Cn}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.error||"Login failed")}const r=await n.json();s5(r.token)}async function Ku(e,t){const r={"Content-Type":"application/json","x-admin-token":Mx()||"",...t==null?void 0:t.headers},i=await fetch(`${Cn}${e}`,{...t,headers:r});if(i.status===403)throw Yu(),window.location.href="/excelsheet",new Error("Session expired. Please log in again.");if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||`Request failed: ${i.status}`)}return i.json()}function l5(e){const t=new Date().getTimezoneOffset();return Ku(`/enquiries?date=${encodeURIComponent(e)}&timezoneOffset=${t}`)}function c5(e,t){return Ku(`/enquiries/${e}`,{method:"PUT",body:JSON.stringify(t)})}function u5(e){return Ku(`/enquiries/${e}`,{method:"DELETE"})}async function d5(e){const t=Mx()||"",n=new Date().getTimezoneOffset(),r=await fetch(`${Cn}/enquiries/export?date=${encodeURIComponent(e)}&timezoneOffset=${n}`,{headers:{"x-admin-token":t}});if(r.status===403)throw Yu(),window.location.href="/excelsheet",new Error("Session expired. Please log in again.");if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.error||"Failed to export enquiries")}const i=await r.blob(),s=window.URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`nivora-enquiries-${Date.now()}.xlsx`,document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(s)}let si=null;const qo=[];function p5(){qo.forEach(e=>e())}function f5(e){si=e??null,p5()}function En(){const[e,t]=m.useState(si),[n,r]=m.useState(!si);return m.useEffect(()=>{let i=!1;const s=()=>{Lx().then(l=>{i||(si=l,t(l),r(!1))}).catch(()=>{i||r(!1)})};si||(r(!0),s());const a=()=>{document.hidden||s()};return document.addEventListener("visibilitychange",a),qo.push(s),()=>{i=!0,document.removeEventListener("visibilitychange",a);const l=qo.indexOf(s);l!==-1&&qo.splice(l,1)}},[]),{settings:e,loading:n}}const m5="/nivora-logo.png",Gf=[{to:"/",label:"Home"},{to:"/portfolio",label:"Portfolio"},{to:"/services",label:"Services"},{to:"/about",label:"About"},{to:"/testimonials",label:"Testimonials"},{to:"/contact",label:"Contact"}],h5="#21291a",zo="#21291a",Ua="#C8A46A",Xf="#D4C0A1";function g5(){const[e,t]=m.useState(!1),[n,r]=m.useState(!1),i=Ut(),s=$t(),{settings:a}=En(),l=(a==null?void 0:a.logoUrl)||m5;m.useEffect(()=>{const d=()=>t(window.scrollY>60);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),m.useEffect(()=>{r(!1)},[i]);const c=d=>d==="/"?i.pathname==="/":i.pathname.startsWith(d),u=d=>{d.preventDefault(),i.pathname==="/"?(window.scrollTo({top:0,behavior:"smooth"}),s("/",{state:{_t:Date.now()}})):s("/")};return o.jsxs(o.Fragment,{children:[o.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,transition:"background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",backgroundColor:e?zo:`${h5}E8`,borderBottom:`1px solid rgba(212,192,161,${e?"0.18":"0.10"})`,backdropFilter:e?"blur(10px)":"none"},children:o.jsxs("div",{className:"navbar-inner max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20",children:[o.jsx("a",{href:"/",className:"navbar-logo",onClick:u,style:{display:"flex",alignItems:"center",textDecoration:"none",cursor:"pointer"},children:o.jsx("img",{src:l,alt:"Nivora Interiors",style:{height:`${(a==null?void 0:a.logoSize)??38}px`,width:"auto",objectFit:"contain"}})}),o.jsx("nav",{className:"hidden lg:flex items-center gap-8",children:Gf.map(d=>o.jsxs("a",{href:d.to,onClick:d.to==="/"?u:void 0,className:"text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 relative pb-1",style:{color:c(d.to)?Ua:Xf+"B3",textDecoration:"none",cursor:"pointer"},children:[d.label,c(d.to)&&o.jsx("span",{style:{position:"absolute",bottom:0,left:0,right:0,height:"1.5px",backgroundColor:Ua,borderRadius:"1px"}})]},d.to))}),o.jsx(he,{to:"/contact",className:"hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300",style:{background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:zo,fontWeight:500,letterSpacing:"0.18em",boxShadow:"0 2px 14px rgba(168,133,79,0.28)",border:"none"},onMouseEnter:d=>{const p=d.currentTarget;p.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",p.style.boxShadow="0 4px 22px rgba(168,133,79,0.45)",p.style.transform="translateY(-1px)"},onMouseLeave:d=>{const p=d.currentTarget;p.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",p.style.boxShadow="0 2px 14px rgba(168,133,79,0.28)",p.style.transform="translateY(0)"},children:"Enquire Now"}),o.jsx("button",{className:"lg:hidden p-2 mobile-ham-btn",style:{color:Xf},onClick:()=>r(d=>!d),"aria-label":"Toggle menu",children:n?o.jsx(jt,{size:22}):o.jsx(WS,{size:22})})]})}),o.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${n?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,style:{backgroundColor:zo},children:[Gf.map(d=>o.jsx(he,{to:d.to,className:"font-serif text-3xl transition-colors duration-300",style:{color:c(d.to)?Ua:"#f5f0e8"},children:d.label},d.to)),o.jsx(he,{to:"/contact",className:"mt-4 text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300",style:{background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:zo,fontWeight:500},children:"Enquire Now"})]})]})}const x5="/nivora-footer-logo.png";function y5(e){const[t,n]=m.useState(null);return m.useEffect(()=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const s=i.getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,i.width,i.height),l=a.data;for(let c=0;c<l.length;c+=4){const u=l[c],d=l[c+1],p=l[c+2];Math.abs(u-d)<28&&Math.abs(d-p)<28&&u>170&&d>160&&p>150&&(l[c+3]=0)}s.putImageData(a,0,0),n(i.toDataURL("image/png"))},r.onerror=()=>n(e),r.src=e},[e]),t}const v5=[{to:"/",label:"Home"},{to:"/portfolio",label:"Portfolio"},{to:"/services",label:"Services"},{to:"/about",label:"About"},{to:"/testimonials",label:"Testimonials"},{to:"/contact",label:"Contact"}],b5=[{to:"/services",label:"Residential Interiors"},{to:"/services",label:"Commercial Interiors"},{to:"/services",label:"Hospitality Interiors"},{to:"/services",label:"Architecture & Space Planning"},{to:"/services",label:"2D & 3D Visualization"},{to:"/services",label:"Renovation & Makeovers"}];function qf({to:e,label:t}){return o.jsx("li",{style:{listStyle:"none"},children:o.jsxs(he,{to:e,style:{fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"#ede8e0",textDecoration:"none",letterSpacing:"0.04em",display:"inline-block",position:"relative",paddingBottom:2,transition:"color 0.3s ease",touchAction:"manipulation",WebkitTapHighlightColor:"transparent"},onMouseEnter:n=>{const r=n.currentTarget;r.style.color="#a18661";const i=r.querySelector(".link-bar");i&&(i.style.width="100%")},onMouseLeave:n=>{const r=n.currentTarget;r.style.color="#ede8e0";const i=r.querySelector(".link-bar");i&&(i.style.width="0%")},onTouchStart:n=>{const i=n.currentTarget.querySelector(".link-bar");i&&(i.style.transition="width 0.3s ease",i.style.width="100%",setTimeout(()=>{i.style.width="0%"},1e3))},children:[t,o.jsx("span",{className:"link-bar",style:{position:"absolute",bottom:0,left:0,height:1,width:"0%",background:"#a18661",transition:"width 0.3s ease",display:"block"}})]})})}function w5(){const{settings:e}=En(),t=(e==null?void 0:e.footerLogoUrl)||x5,n=y5(t),r=m.useRef(null),i=kn(r,{once:!0,amount:.1}),s=(a,l)=>({hidden:{opacity:0,x:a,y:a===0?20:0},visible:{opacity:1,x:0,y:0,transition:{duration:a!==0?.7:.6,delay:l,ease:[.22,1,.36,1]}}});return o.jsxs("footer",{ref:r,style:{backgroundColor:"#21291a",borderTop:"1px solid rgba(255,255,255,0.05)"},children:[o.jsx("style",{children:`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0;   }
        }
        .wa-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50px;
          background: rgba(37, 211, 102, 0.4);
          animation: wa-pulse 1.8s ease-out infinite;
          pointer-events: none;
        }

        /* ─────────────────────────────────────────────────────────
           MOBILE FOOTER  (≤ 768 px)
           Row 1 : logo (70px) + tagline  — same line
           Row 2 : Navigate (left) | What We Do (right)
           Row 3 : Find Us heading full-width,
                   address (left) | email+phone+instagram (right)
           Row 4 : © left  |  Designed with intention right
        ───────────────────────────────────────────────────────── */
        @media (max-width: 768px) {

          /* Tight outer padding */
          .footer-inner {
            padding-top: 20px !important;
            padding-bottom: 10px !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }

          /* 2-col grid; rows driven by explicit grid-column/row on children */
          .footer-main-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            row-gap: 16px !important;
            column-gap: 0 !important;
          }

          /* ── ROW 1 : brand (full width, flex row) ── */
          .footer-brand-col {
            grid-column: 1 / -1 !important;
            grid-row: 1 !important;
            flex-direction: row !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 0 !important;
            border: none !important;
          }
          /* logo */
          .footer-brand-col > a {
            flex-shrink: 0 !important;
            margin-bottom: 0 !important;
          }
          .footer-brand-col > a img,
          .footer-brand-col > a > div {
            width: 100px !important;
            max-width: 100px !important;
            height: auto !important;
          }
          /* tagline */
          .footer-brand-col > p {
            margin-bottom: 0 !important;
            max-width: none !important;
            font-size: 13px !important;
            line-height: 1.5 !important;
          }

          /* ── ROW 2 : Navigate left, What We Do right ── */
          .footer-nav-col {
            grid-column: 1 !important;
            grid-row: 2 !important;
            padding: 0 !important;
            border: none !important;
          }
          .footer-services-col {
            grid-column: 2 !important;
            grid-row: 2 !important;
            padding: 0 0 0 12px !important;
            border-right: none !important;
            border-left: 1px solid rgba(255,255,255,0.06) !important;
          }
          .footer-nav-col h4,
          .footer-services-col h4 {
            font-size: 13px !important;
            letter-spacing: 0.18em !important;
            margin-bottom: 10px !important;
          }
          .footer-nav-col ul,
          .footer-services-col ul {
            gap: 7px !important;
          }
          .footer-nav-col li a,
          .footer-services-col li a {
            font-size: 14px !important;
            letter-spacing: 0.03em !important;
            line-height: 1.8 !important;
          }

          /* ── ROW 3 : Find Us (full width) ── */
          .footer-findus-col {
            grid-column: 1 / -1 !important;
            grid-row: 3 !important;
            padding: 0 !important;
            border: none !important;
          }
          .footer-findus-col h4 {
            font-size: 13px !important;
            letter-spacing: 0.18em !important;
            margin-bottom: 10px !important;
          }
          /* Split inner content: address left | email+phone+instagram right */
          .footer-findus-col > div {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0 12px !important;
            align-items: start !important;
          }
          /* address — spans all right-column rows so it doesn't push instagram down */
          .footer-findus-col > div > *:first-child {
            grid-column: 1 !important;
            grid-row: 1 / 3 !important;
          }
          /* email + phone block */
          .footer-findus-col > div > *:nth-child(2) {
            grid-column: 2 !important;
            grid-row: 1 !important;
          }
          /* instagram link */
          .footer-findus-col > div > *:nth-child(3) {
            grid-column: 2 !important;
            grid-row: 2 !important;
            margin-top: 8px !important;
          }
          .footer-findus-col p {
            font-size: 13px !important;
            line-height: 1.7 !important;
          }
          .footer-findus-col a {
            font-size: 13px !important;
          }

          /* ── Divider ── */
          .footer-divider {
            margin: 12px 0 0 !important;
          }

          /* ── ROW 4 : © left | Designed right ── */
          .footer-bottom-bar {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
            padding-top: 10px !important;
            text-align: left !important;
            gap: 4px !important;
          }
          .footer-bottom-bar p {
            font-size: 12px !important;
          }
        }
      `}),o.jsxs("div",{className:"footer-inner max-w-7xl mx-auto px-6 lg:px-12",style:{paddingTop:56,paddingBottom:28},children:[o.jsxs("div",{className:"footer-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0",children:[o.jsxs(N.div,{variants:s(-20,0),initial:"hidden",animate:i?"visible":"hidden",className:"footer-brand-col pr-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[o.jsx("a",{href:"/",style:{display:"block",marginBottom:24,textDecoration:"none",flexShrink:0},children:n?o.jsx("img",{src:n,alt:"Nivora Interiors",style:{display:"block",width:(e==null?void 0:e.footerLogoSize)??200,height:"auto",objectFit:"contain",opacity:.95,transition:"filter 0.3s ease"},onMouseEnter:a=>{a.currentTarget.style.filter="brightness(1.25)"},onMouseLeave:a=>{a.currentTarget.style.filter="brightness(1)"}}):o.jsx("div",{style:{width:200,height:80}})}),o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",color:"rgba(245,242,237,0.72)",fontSize:13,lineHeight:1.8,fontWeight:300,marginBottom:24,maxWidth:210},children:["Thoughtful spaces designed",o.jsx("br",{}),"for refined living."]})]}),o.jsxs(N.div,{variants:s(0,.1),initial:"hidden",animate:i?"visible":"hidden",className:"footer-nav-col px-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)"},children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"Navigate"}),o.jsx("ul",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",gap:12},children:v5.map(a=>o.jsx(qf,{to:a.to,label:a.label},a.to))})]}),o.jsxs(N.div,{variants:s(0,.2),initial:"hidden",animate:i?"visible":"hidden",className:"footer-services-col px-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)"},children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"What We Do"}),o.jsx("ul",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",gap:12},children:b5.map(a=>o.jsx(qf,{to:a.to,label:a.label},a.label))})]}),o.jsxs(N.div,{variants:s(20,.3),initial:"hidden",animate:i?"visible":"hidden",className:"footer-findus-col pl-10 pb-12 lg:pb-0",children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"Find Us"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:9},children:[o.jsx(Ex,{size:16,color:"#c4a87a",style:{flexShrink:0,marginTop:2}}),o.jsxs("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",lineHeight:1.7,margin:0},children:["Shop No. 01, New Dhavalgiri Building,",o.jsx("br",{}),"above Hindustan Co-Op Bank,",o.jsx("br",{}),"Ambernath East, Maharashtra 421501"]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.jsxs("a",{href:"mailto:nivora.inbox@gmail.com",style:{display:"flex",alignItems:"center",gap:9,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"#c4a87a",textDecoration:"none",transition:"opacity 0.25s ease"},onMouseEnter:a=>{a.currentTarget.style.opacity="0.75"},onMouseLeave:a=>{a.currentTarget.style.opacity="1"},children:[o.jsx(Cx,{size:16,color:"#c4a87a",style:{flexShrink:0}}),"nivora.inbox@gmail.com"]}),o.jsxs("a",{href:"tel:+917276687805",style:{display:"flex",alignItems:"center",gap:9,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",textDecoration:"none",transition:"color 0.25s ease"},onMouseEnter:a=>{a.currentTarget.style.color="#c4a87a"},onMouseLeave:a=>{a.currentTarget.style.color="rgba(245,242,237,0.78)"},children:[o.jsx(Nx,{size:16,color:"#c4a87a",style:{flexShrink:0}}),"+91 72766 87805"]})]}),o.jsxs("a",{href:"https://www.instagram.com/nivora.interiors",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{display:"flex",alignItems:"center",gap:9,marginTop:4,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",textDecoration:"none",opacity:1,transition:"opacity 0.3s ease, color 0.25s ease"},onMouseEnter:a=>{const l=a.currentTarget;l.style.color="#c4a87a",l.style.textDecoration="underline"},onMouseLeave:a=>{const l=a.currentTarget;l.style.color="rgba(245,242,237,0.78)",l.style.textDecoration="none"},children:[o.jsx(Sx,{size:16,color:"#c4a87a",style:{flexShrink:0}}),o.jsx("span",{children:"nivora.interiors"})]})]})]})]}),o.jsx(N.div,{className:"footer-divider",initial:{scaleX:0},animate:i?{scaleX:1}:{scaleX:0},transition:{duration:.8,delay:.2,ease:"easeOut"},style:{height:1,background:"rgba(161,134,97,0.55)",margin:"48px 0 0",transformOrigin:"left center"}}),o.jsxs(N.div,{initial:{opacity:0},animate:i?{opacity:1}:{opacity:0},transition:{duration:.5,delay:.5,ease:"easeOut"},className:"footer-bottom-bar",style:{paddingTop:20,paddingBottom:8,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:8,flexWrap:"wrap"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,fontWeight:300,color:"rgba(245,242,237,0.48)",margin:0},children:"© 2026 Nivora Interiors. All rights reserved."}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,fontWeight:300,color:"rgba(245,242,237,0.48)",margin:0},children:"Designed with intention."})]})]})]})}function j5(){const[e,t]=m.useState(!1),[n,r]=m.useState(!1);m.useEffect(()=>{const s=()=>t(window.scrollY>300);return window.addEventListener("scroll",s,{passive:!0}),s(),()=>window.removeEventListener("scroll",s)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("button",{onClick:i,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),"aria-label":"Back to top",className:"back-to-top-button",style:{position:"fixed",bottom:24,right:96,zIndex:50,width:56,height:56,borderRadius:"50%",background:n?"linear-gradient(135deg, #EDD09A 0%, #D4B07A 50%, #B89260 100%)":"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",border:"1px solid rgba(168,133,79,0.5)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",opacity:e?1:0,pointerEvents:e?"auto":"none",transition:"opacity 0.35s ease, background-color 0.25s ease, transform 0.25s ease",transform:n?"translateY(-3px)":"translateY(0)"},children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",style:{display:"block",transition:"transform 0.25s ease",transform:n?"translateY(-2px)":"translateY(0)"},children:o.jsx("path",{d:"M10 15V5M10 5L5 10M10 5L15 10",stroke:"#2A3926",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})}const S5="917276687805",k5=`Hi NIVORA Interiors! 👋

I’m interested in your interior design services and would like to discuss my project.

📍 Project Location:
🏠 Property Type:
📐 Approx. Area:
💰 Budget:
📅 Expected Start Date:

I came across NIVORA Interiors through your website and would love to know more about your services.`,C5=`https://wa.me/${S5}?text=${encodeURIComponent(k5)}`;function E5(){return o.jsx("a",{href:C5,target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 whatsapp-pulse","aria-label":"Chat on WhatsApp",children:o.jsx("svg",{viewBox:"0 0 24 24",className:"w-7 h-7 fill-white",children:o.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})}const T5="/assets/nivora-logo-DiQ_wEqZ.png";function N5(e){const[t,n]=m.useState(null);return m.useEffect(()=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const s=i.getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,i.width,i.height),l=a.data;for(let c=0;c<l.length;c+=4){const u=l[c],d=l[c+1],p=l[c+2],f=Math.abs(u-d)<28&&Math.abs(d-p)<28,x=u>170&&d>160&&p>150;f&&x&&(l[c+3]=0)}s.putImageData(a,0,0),n(i.toDataURL("image/png"))},r.src=e},[e]),t}function P5({onExitComplete:e}){const[t,n]=m.useState(!0),r=N5(T5);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        @keyframes glowPulse {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
          40%  { opacity: 1; transform: translate(-50%, -50%) scale(1);   }
          70%  { opacity: 1; transform: translate(-50%, -50%) scale(1.05);}
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1.1); }
        }

        /* Keep the splash screen and logo perfectly centered on all screen sizes */
        .splash-screen {
          position: fixed !important;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .logo-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          left: auto;
          text-align: center;
        }
        .logo-glow {
          top: 50%;
          left: 50%;
        }

        @media (max-width: 768px) {
          .splash-screen {
            width: 100vw;
            height: 100vh;
            padding: 0;
            margin: 0;
          }
          .logo-container {
            width: auto;
            max-width: 80vw;
            margin: 0 auto;
            left: 0;
            right: 0;
          }
        }
      `}),o.jsx(Ul,{onExitComplete:e,children:t&&o.jsx(N.div,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:"easeOut"},className:"splash-screen",style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"#21291a",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(Ul,{children:r&&o.jsxs(N.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1.1,ease:[.22,1,.36,1]},onAnimationComplete:()=>{setTimeout(()=>n(!1),900)},className:"logo-container",style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx("div",{className:"logo-glow",style:{position:"absolute",top:"50%",left:"50%",width:"600px",height:"600px",borderRadius:"50%",background:"#21291a",pointerEvents:"none",zIndex:0,opacity:0,animation:"glowPulse 2000ms ease-in-out forwards",animationDelay:"600ms"}}),o.jsx("img",{src:r,alt:"Nivora Interiors",style:{width:"clamp(220px, 30vw, 320px)",height:"auto",display:"block",position:"relative",zIndex:1,filter:"drop-shadow(0 0 20px rgba(201,166,107,0.28))"}})]},"logo")})},"intro-overlay")})]})}const A5=["Ambernath","Kalyan","Pune","Mumbai","Other"];let qr=1;const Jf={enter:e=>({x:e>0?"100%":"-100%",opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?"-100%":"100%",opacity:0})};function z5({splashDone:e}){const[t,n]=m.useState(!1),[r,i]=m.useState(1),[s,a]=m.useState("idle"),[l,c]=m.useState(""),[u,d]=m.useState(""),[p,f]=m.useState(""),[x,v]=m.useState(""),[b,w]=m.useState(""),[g,h]=m.useState(""),[y,S]=m.useState(""),[j,k]=m.useState({}),[E,C]=m.useState(""),O=m.useRef(null);m.useEffect(()=>{if(!e||sessionStorage.getItem("popupShown"))return;const A=setTimeout(()=>n(!0),4e3);return()=>clearTimeout(A)},[e]),m.useEffect(()=>(s==="success"&&(O.current=setTimeout(D,3e3)),()=>{O.current&&clearTimeout(O.current)}),[s]);const D=()=>{sessionStorage.setItem("popupShown","true"),n(!1)},V=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,_=()=>{const A={};return(!l.trim()||l.trim().length<2)&&(A.fullName="Please enter your full name (min 2 characters)."),u.replace(/\D/g,"").length!==10&&(A.phone="Please enter a valid 10-digit phone number."),(!p.trim()||!V.test(p.trim()))&&(A.email="Please enter a valid email address."),k(A),Object.keys(A).length===0},$=()=>{_()&&(qr=1,i(2),k({}))},F=()=>{qr=-1,i(1),k({})},Q=async()=>{const A={};if(b||(A.budget="Please select an estimated budget."),g||(A.location="Please select your project location."),k(A),Object.keys(A).length>0)return;a("submitting"),C("");const T={fullName:l.trim(),phone:`+91 ${u.trim()}`,email:p.trim(),spaceType:x,location:g,projectType:"",budget:b,referral:"",requirements:y,source:"Popup Form"};console.log("[Popup] Submitting form data:",T);try{await zx(T),a("success")}catch(M){a("error"),C(M instanceof Error?M.message:"Something went wrong. Please try again.")}};if(!t)return null;const R=l.trim().split(" ")[0]||"there";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
        .cpopup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.55);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: cpopup-fade-in 0.3s ease;
        }
        @keyframes cpopup-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .cpopup-card {
          background: #f5f0e8;
          border-radius: 4px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35), 0 4px 20px rgba(0,0,0,0.15);
          width: 100%;
          max-width: 460px;
          padding: 40px 36px 36px;
          position: relative;
          animation: cpopup-slide-up 0.35s cubic-bezier(0.22,1,0.36,1);
          overflow: hidden;
        }
        @keyframes cpopup-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cpopup-close {
          position: absolute;
          top: 14px; right: 14px;
          background: none; border: none; cursor: pointer;
          color: #5a5a5a; padding: 4px;
          display: flex; align-items: center; justify-content: center;
          transition: color 0.2s ease;
        }
        .cpopup-close:hover { color: #21291a; }
        .cpopup-sub {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #a18661; text-align: center; margin: 0 0 10px;
        }
        .cpopup-heading {
          font-family: 'Playfair Display', serif;
          font-weight: 400; font-size: clamp(1.3rem, 4vw, 1.7rem);
          color: #21291a; text-align: center;
          margin: 0 0 24px; line-height: 1.25;
        }

        /* ── Form inputs ── */
        .cpf-label {
          display: block;
          font-family: 'Jost', sans-serif; font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #888; font-weight: 400; margin-bottom: 6px;
        }
        .cpf-field-wrap { position: relative; margin-bottom: 18px; }
        .cpf-field-wrap::after {
          content: '';
          position: absolute; bottom: 0; left: 50%;
          width: 0; height: 1.5px;
          background: #a18661;
          transition: width 0.25s ease, left 0.25s ease;
        }
        .cpf-field-wrap:focus-within::after { left: 0; width: 100%; }
        .cpf-input {
          border: none; border-bottom: 1px solid rgba(161,134,97,0.35);
          background: transparent; padding: 7px 0;
          font-family: 'Jost', sans-serif; font-size: 14px;
          color: #21291a; width: 100%; outline: none;
        }
        .cpf-input::placeholder { color: #aaa; }
        .cpf-textarea {
          border: 1px solid rgba(161,134,97,0.35);
          border-radius: 6px; background: transparent;
          padding: 10px 12px; font-family: 'Jost', sans-serif;
          font-size: 14px; color: #21291a; width: 100%;
          min-height: 72px; outline: none; resize: none;
          transition: border-color 0.25s ease;
          box-sizing: border-box;
        }
        .cpf-textarea:focus { border-color: #a18661; }
        .cpf-textarea::placeholder { color: #aaa; }
        .cpf-phone-row {
          display: flex; align-items: center;
          border-bottom: 1px solid rgba(161,134,97,0.35);
          position: relative;
        }
        .cpf-phone-prefix {
          font-family: 'Jost', sans-serif; font-size: 14px;
          color: #21291a; padding: 7px 8px 7px 0; white-space: nowrap;
          user-select: none; pointer-events: none;
        }
        .cpf-phone-input {
          border: none; background: transparent; padding: 7px 0;
          font-family: 'Jost', sans-serif; font-size: 14px;
          color: #21291a; flex: 1; outline: none;
        }
        .cpf-phone-input::placeholder { color: #aaa; }

        /* ── Chip pills ── */
        .cpf-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 4px; }
        .cpf-chip {
          font-family: 'Jost', sans-serif; font-size: 12px;
          color: #6b6258; background: rgba(255,255,255,0.7);
          border: 1px solid rgba(161,134,97,0.35); border-radius: 999px;
          padding: 7px 16px; cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
        }
        .cpf-chip:hover { border-color: #a18661; color: #21291a; }
        .cpf-chip.selected {
          background: #a18661; border-color: #a18661; color: #fff;
        }

        /* ── Primary button ── */
        .cpopup-btn {
          width: 100%; background: #a18661; color: #f5f0e8;
          border: none; padding: 14px 24px;
          font-family: 'Montserrat', sans-serif; font-weight: 600;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          cursor: pointer; border-radius: 2px;
          transition: background 0.25s ease, transform 0.2s ease;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .cpopup-btn:hover:not(:disabled) { background: #8d7250; transform: translateY(-1px); }
        .cpopup-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .cpopup-btn-outline {
          width: 100%; background: transparent; color: #21291a;
          border: 1px solid rgba(33,41,26,0.35); padding: 13px 24px;
          font-family: 'Montserrat', sans-serif; font-weight: 600;
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          cursor: pointer; border-radius: 2px;
          transition: border-color 0.2s ease, background 0.2s ease;
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .cpopup-btn-outline:hover { border-color: #21291a; background: rgba(33,41,26,0.05); }

        /* ── Select dropdown ── */
        .cpf-select {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23AAAAAA' stroke-width='1.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2px center;
          padding-right: 20px;
        }

        /* ── Error text ── */
        .cpf-error { font-family: 'Jost',sans-serif; font-size: 11px; color: #b85a4a; margin-top: 4px; margin-bottom: 2px; }

        /* ── Progress ── */
        .cpf-progress {
          font-family: 'Jost', sans-serif; font-size: 11px; letter-spacing: 0.06em;
          color: rgba(33,41,26,0.4); text-align: center; margin-top: 12px;
        }

        /* ── Back link ── */
        .cpf-back {
          font-family: 'Jost', sans-serif; font-size: 12px; color: #a18661;
          background: none; border: none; cursor: pointer; padding: 0;
          display: inline-flex; align-items: center; gap: 4px;
          margin-bottom: 16px; transition: color 0.2s ease;
          text-decoration: none;
        }
        .cpf-back:hover { color: #6f5c3e; }

        /* ── Spin animation ── */
        .cpf-spin { animation: cpfSpin 0.9s linear infinite; }
        @keyframes cpfSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ── Mobile ── */
        @media (max-width: 480px) {
          .cpopup-overlay { padding: 16px; }
          .cpopup-card { padding: 32px 24px 28px; }
        }
      `}),o.jsx("div",{className:"cpopup-overlay",onClick:A=>{A.target===A.currentTarget&&D()},children:o.jsxs("div",{className:"cpopup-card",children:[o.jsx("button",{className:"cpopup-close",onClick:D,"aria-label":"Close",children:o.jsx(jt,{size:18})}),o.jsx("p",{className:"cpopup-sub",children:"Get a Free 30-Min Design Consultation"}),o.jsx("h2",{className:"cpopup-heading",children:"Planning your dream home?"}),o.jsx(Ul,{mode:"wait",custom:qr,children:s==="success"?o.jsxs(N.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeOut"},style:{textAlign:"center",padding:"8px 0 4px"},children:[o.jsx(yx,{size:44,style:{color:"#a18661",margin:"0 auto 16px",display:"block"},strokeWidth:1.5}),o.jsxs("p",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"1.25rem",color:"#21291a",margin:"0 0 8px"},children:["Thank you, ",R,"!"]}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"#6b6258",margin:"0 0 24px",lineHeight:1.6},children:"We'll reach out to you within 24 hours."}),o.jsx("button",{className:"cpopup-btn-outline",onClick:D,children:"Close"})]},"success"):r===1?o.jsxs(N.div,{custom:qr,variants:Jf,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3,ease:[.22,1,.36,1]},children:[o.jsxs("div",{className:"cpf-field-wrap",children:[o.jsxs("label",{className:"cpf-label",children:["Full Name ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("input",{className:"cpf-input",type:"text",placeholder:"Your full name",value:l,onChange:A=>{c(A.target.value),k(T=>({...T,fullName:""}))},autoComplete:"name"}),j.fullName&&o.jsx("p",{className:"cpf-error",children:j.fullName})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Phone Number ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-field-wrap",style:{marginBottom:0},children:o.jsxs("div",{className:"cpf-phone-row",children:[o.jsx("span",{className:"cpf-phone-prefix",children:"+91"}),o.jsx("input",{className:"cpf-phone-input",type:"tel",placeholder:"98765 43210",value:u,maxLength:10,onChange:A=>{const T=A.target.value.replace(/\D/g,"").slice(0,10);d(T),k(M=>({...M,phone:""}))},autoComplete:"tel",inputMode:"numeric"})]})}),j.phone&&o.jsx("p",{className:"cpf-error",children:j.phone})]}),o.jsxs("div",{className:"cpf-field-wrap",children:[o.jsxs("label",{className:"cpf-label",children:["Email Address ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("input",{className:"cpf-input",type:"email",placeholder:"your@email.com",value:p,onChange:A=>{f(A.target.value),k(T=>({...T,email:""}))},autoComplete:"email"}),j.email&&o.jsx("p",{className:"cpf-error",children:j.email})]}),o.jsxs("button",{className:"cpopup-btn",onClick:$,children:["Next ",o.jsx($e,{size:13})]}),o.jsx("p",{className:"cpf-progress",children:"Step 1 of 2"})]},"step1"):o.jsxs(N.div,{custom:qr,variants:Jf,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3,ease:[.22,1,.36,1]},children:[o.jsx("button",{className:"cpf-back",onClick:F,children:"← Back"}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsx("label",{className:"cpf-label",children:"Type of Space"}),o.jsx("div",{className:"cpf-field-wrap",style:{marginBottom:0},children:o.jsxs("select",{className:"cpf-input cpf-select",value:x,onChange:A=>v(A.target.value),style:{color:x===""?"#aaa":"#21291a",cursor:"pointer"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select a space type"}),["Residential","Commercial","Office","Retail","Villa/Bungalow","Other"].map(A=>o.jsx("option",{value:A,style:{color:"#21291a"},children:A},A))]})})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Estimated Budget ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-chips",children:["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"].map(A=>o.jsx("button",{type:"button",className:`cpf-chip${b===A?" selected":""}`,onClick:()=>{w(T=>T===A?"":A),k(T=>({...T,budget:""}))},children:A},A))}),j.budget&&o.jsx("p",{className:"cpf-error",children:j.budget})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Project Location ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-chips",children:A5.map(A=>o.jsx("button",{type:"button",className:`cpf-chip${g===A?" selected":""}`,onClick:()=>{h(T=>T===A?"":A),k(T=>({...T,location:""}))},children:A},A))}),j.location&&o.jsx("p",{className:"cpf-error",children:j.location})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{className:"cpf-label",children:"Brief Requirements"}),o.jsx("textarea",{className:"cpf-textarea",placeholder:"Tell us about your project, style preferences, timeline...",value:y,onChange:A=>S(A.target.value)})]}),o.jsx("button",{className:"cpopup-btn",onClick:Q,disabled:s==="submitting",children:s==="submitting"?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:13,className:"cpf-spin"})," Sending..."]}):o.jsxs(o.Fragment,{children:["Book My Free Consultation ",o.jsx($e,{size:13})]})}),s==="error"&&o.jsx("p",{className:"cpf-error",style:{textAlign:"center",marginTop:10},children:E}),o.jsx("p",{className:"cpf-progress",children:"Step 2 of 2"})]},"step2")})]})})]})}function se({children:e,delay:t=0,className:n="",style:r,direction:i="up"}){const s=i==="up"?{opacity:0,y:40}:i==="down"?{opacity:0,y:-40}:i==="left"?{opacity:0,x:40}:i==="right"?{opacity:0,x:-40}:{opacity:0};return o.jsx(N.div,{initial:s,whileInView:{opacity:1,y:0,x:0},viewport:{once:!1,margin:"-60px"},transition:{duration:.8,delay:t,ease:[.25,.1,.25,1]},className:n,style:r,children:e})}const I5=3500,R5=4e3,D5="cubic-bezier(0.16, 1, 0.3, 1)",L5=520;function M5({cards:e}){const t=e.length,n=[e[t-1],...e,e[0]],r=n.length,[i,s]=m.useState(1),[a,l]=m.useState(!0),c=m.useRef(null),u=m.useRef(null),d=m.useRef(!1),p=i===0?t-1:i===r-1?0:i-1,f=m.useCallback(()=>{d.current||(s(h=>h+1),l(!0))},[]),x=m.useCallback(()=>{c.current&&clearInterval(c.current),c.current=setInterval(f,I5)},[f]),v=m.useCallback(()=>{c.current&&clearInterval(c.current),c.current=null},[]),b=m.useCallback(()=>{v(),u.current&&clearTimeout(u.current),u.current=setTimeout(x,R5)},[x,v]);m.useEffect(()=>(x(),()=>{v(),u.current&&clearTimeout(u.current)}),[x,v]);const w=m.useCallback(()=>{i===0?(d.current=!0,l(!1),s(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.current=!1})})):i===r-1&&(d.current=!0,l(!1),s(1),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.current=!1})}))},[i,t,r]),g=`${-(i/r)*100}%`;return o.jsxs("div",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[o.jsx("div",{onTransitionEnd:w,style:{display:"flex",width:`${r*100}%`,transform:`translateX(${g})`,transition:a?`transform ${L5}ms ${D5}`:"none",willChange:"transform"},children:n.map((h,y)=>o.jsx("div",{style:{width:`${100/r}%`,flexShrink:0,padding:"0 1.25rem",boxSizing:"border-box"},onClick:b,children:o.jsxs("div",{className:"oe-card",style:{maxWidth:480,margin:"0 auto"},children:[o.jsx("div",{className:"oe-img-wrap",children:o.jsx("img",{src:h.img,alt:h.title,className:"oe-img",loading:"lazy",draggable:!1})}),o.jsxs("div",{className:"oe-body",children:[o.jsx("span",{className:"oe-divider"}),o.jsx("h3",{className:"oe-title",children:h.title}),o.jsx("p",{className:"oe-desc",children:h.desc})]})]})},y))}),o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:7,marginTop:22},children:e.map((h,y)=>o.jsx("div",{style:{width:p===y?22:6,height:6,borderRadius:3,background:p===y?"#C9A96E":"rgba(26,22,18,0.18)",transition:"width 0.35s ease, background 0.35s ease",flexShrink:0}},y))})]})}const Gu="/assets/residential-interiors-cover-B8lpJ02G.jpg",Xu="/assets/commercial-interiors-cover-CAcNxrue.jpg",qu="/assets/hospitality-interiors-cover-fSgMspCk.jpg",Ju="/assets/architecture-space-planning-cover-l_6P2NAl.jpg",Qu="/assets/2d-3d-visualization-cover--MVjD5fC.jpg",Zu="/assets/developer-solutions-cover-ct06iqhG.jpg",ed="/assets/renovation-makeovers-cover-C90qMlf_.jpg",F5="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85",Qf=[{id:1,title:"Living Room Transformation",beforeLabel:"RAW SHELL",afterLabel:"NIVORA DESIGN",beforeImg:"/before-1.jpg",afterImg:"/after-1.jpg",beforeDesc:"A bare concrete shell with exposed pipes, unfinished walls and no sense of space or identity.",afterDesc:"An opulent living room with ornate carved furniture, crystal chandelier, marble floors and handcrafted wall art."},{id:2,title:"Living Area Revival",beforeLabel:"BASIC SPACE",afterLabel:"CURATED INTERIOR",beforeImg:"/before-2.jpg",afterImg:"/after-2.jpg",beforeDesc:"A plain living area with minimal décor, bare walls and a basic TV unit lacking character.",afterDesc:"A statement TV wall in marble-finish panels, warm ambient lighting, slatted wood accents and a floating media unit."},{id:3,title:"Office Reception Design",beforeLabel:"BARE SHELL",afterLabel:"PREMIUM WORKSPACE",beforeImg:"/before-3.jpg",afterImg:"/after-3.jpg",beforeDesc:"An unfinished commercial space with raw drywall, exposed wiring and construction debris throughout.",afterDesc:"A striking reception with a marble front desk, warm wood-slatted walls, statement chandelier and polished stone flooring."},{id:4,title:"Double-Height Hall & Balcony",beforeLabel:"RAW STRUCTURE",afterLabel:"GRAND LIVING",beforeImg:"/before-4.jpg",afterImg:"/after-4.jpg",beforeDesc:"A bare double-height shell with exposed concrete, raw brick balcony railing and no finishes in place.",afterDesc:"A grand open living hall with a cascading chandelier, glass balcony railing, velvet sofas and warm ambient lighting."}],O5=[{image:"/instagram/ig-post-1-bedroom-marble.png",url:"https://www.instagram.com/reel/DNWtK0ht1DO/"},{image:"https://res.cloudinary.com/tgmyheme/image/upload/q_auto:best,f_auto/nivora-instagram/ig-post-2-acetech.png",url:"https://www.instagram.com/p/DRAbqc_DSIC/?igsh=cG1kZGN0dGl6dGg5"},{image:"/instagram/ig-post-3-sandstone-wall.png",url:"https://www.instagram.com/reel/DPECwNBge6u/"},{image:"/instagram/ig-post-4-reception-lounge.png",url:"https://www.instagram.com/reel/DOivw8LjZVS/"},{image:"/instagram/ig-post-5-tv-unit.png",url:"https://www.instagram.com/reel/DO3Q44njbsU/"},{image:"https://res.cloudinary.com/tgmyheme/image/upload/q_auto:best,f_auto/nivora-instagram/ig-post-6-bedroom.png",url:"https://www.instagram.com/reel/DMlyCnWh6Ct/?igsh=eHd1ZHRuMHoyOGdo"}],V5=[],Fx=[{num:"01",title:"Residential Interiors",desc:"Thoughtfully designed homes that reflect personality, lifestyle and everyday comfort.",href:"/services/residential",img:Gu,icon:jx},{num:"02",title:"Commercial Interiors",desc:"Functional workspaces, offices and retail environments designed for performance.",href:"/services/commercial",img:Xu,icon:TS},{num:"03",title:"Hospitality Interiors",desc:"Hotels, cafés and guest experiences crafted to feel memorable and welcoming.",href:"/services/hospitality",img:qu,icon:zS},{num:"04",title:"Architecture & Space Planning",desc:"Layouts, planning and built forms that connect aesthetics with purpose.",href:"/services/architecture",img:Ju,icon:OS},{num:"05",title:"2D & 3D Visualization",desc:"Concept drawings, renders and visual development before execution begins.",href:"/services/visualization",img:Qu,icon:HS},{num:"06",title:"Developer Solutions",desc:"Sample flats, amenities and curated experiences that enhance property value.",href:"/services/developer",img:Zu,icon:bx},{num:"07",title:"Renovation & Makeovers",desc:"Transform existing spaces through upgrades, modernization and thoughtful redesign.",href:"/services/renovation",img:ed,icon:Ax}],Zf=[{stars:5,text:"NIVORA transformed our vision into a home that perfectly reflects our family's lifestyle. The balance of warm wooden finishes, elegant detailing, and functional planning exceeded every expectation. Their professionalism, transparency, and craftsmanship made the entire journey enjoyable. Every guest who visits appreciates the timeless beauty of our home.",name:"Arvind Mohite",location:"Ambernath, Mumbai",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"AM"},{stars:5,text:"From the very first design discussion to the final handover, the NIVORA team understood exactly what we wanted. They created a home that is modern, practical, and incredibly welcoming. Their attention to detail and execution quality are simply outstanding.",name:"Tushar Shah",location:"Mumbai",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"TS"},{stars:5,text:"Designing a bungalow requires thoughtful planning, and NIVORA delivered beyond our expectations. Every room flows beautifully into the next, with a perfect blend of luxury and functionality. The quality of materials and finishing reflects true craftsmanship.",name:"Mayur Patil",location:"Casa Élan Bungalow",project:"RESIDENTIAL — BUNGALOW",initials:"MP"},{stars:5,text:"Our office now represents our brand perfectly. The layout has improved productivity, while the elegant interiors leave a lasting impression on every client who visits. NIVORA managed the entire project professionally and delivered exactly as promised.",name:"Parag Bari",location:"Mumbai",project:"COMMERCIAL — OFFICE",initials:"PB"},{stars:5,text:"We wanted a peaceful home that felt warm and timeless, and NIVORA achieved exactly that. The soft curves, lighting, and neutral palette create a calming atmosphere that our family enjoys every day. It truly feels like home.",name:"Tarun Raisinghania",location:"Shivganga",project:"RESIDENTIAL — APARTMENT",initials:"TR"},{stars:5,text:"NIVORA has an incredible ability to create elegance through simplicity. Every texture, finish, and lighting detail has been carefully planned. The final result is sophisticated, functional, and far more beautiful than we imagined.",name:"Samiksha Shetty",location:"Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"SS"},{stars:5,text:"The team designed every space with precision and purpose. The duplex feels spacious, luxurious, and incredibly comfortable. Their communication, project management, and commitment to quality made the entire experience completely stress-free.",name:"Kapil Arora",location:"Mumbai",project:"RESIDENTIAL — DUPLEX",initials:"KA"},{stars:5,text:"NIVORA beautifully balanced warmth, luxury, and functionality in our home. The custom furniture, lighting, and thoughtful detailing have completely transformed our everyday living experience. We highly recommend NIVORA to anyone looking for premium interiors.",name:"Rahul Patil",location:"Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"RP"},{stars:5,text:"Nivora took my vision and refined it into something I never thought possible. Their material selection is impeccable.",name:"Aditi R.",location:"Ambernath",project:"RESIDENTIAL — HOME INTERIOR",initials:"AR"}],B5=[{value:5,from:0,suffix:"+",label:"Years Experience",duration:1200},{value:25,from:0,suffix:"+",label:"Projects Completed",duration:1800},{value:50,from:0,suffix:"+",label:"Clients Served",duration:1600},{value:90,from:0,suffix:"%",label:"Client Satisfaction",duration:1400}];function _5(e){const t=e.match(/^(\d+(?:\.\d+)?)(.*)$/);return t?{numeric:Number(t[1]),suffix:t[2]}:{numeric:0,suffix:""}}function W5(){const{settings:e}=En(),t=m.useMemo(()=>{var d;return(d=e==null?void 0:e.homeStats)!=null&&d.length?e.homeStats.map(p=>{const{numeric:f,suffix:x}=_5(p.value);return{value:f,from:0,suffix:x,label:p.label,duration:1400}}):B5},[e==null?void 0:e.homeStats]),[n,r]=m.useState(()=>t.map(()=>0)),[i,s]=m.useState(()=>t.map(()=>!1));m.useEffect(()=>{r(t.map(()=>0)),s(t.map(()=>!1))},[t]);const[a,l]=m.useState(!1),c=m.useRef(null),u=m.useRef([]);return m.useEffect(()=>{const d=c.current;if(!d)return;const p=new IntersectionObserver(([x])=>l(x.isIntersecting),{threshold:.25});p.observe(d);const f=d.getBoundingClientRect();return f.top<window.innerHeight&&f.bottom>0&&l(!0),()=>p.disconnect()},[]),m.useEffect(()=>{if(u.current.forEach(d=>d()),u.current=[],!a){r(t.map(()=>0)),s(t.map(()=>!1));return}t.forEach((d,p)=>{const f=performance.now();let x=0;const v=b=>{const w=Math.min((b-f)/d.duration,1),g=1-Math.pow(1-w,4),h=Math.floor(d.from+(d.value-d.from)*g);if(r(y=>{const S=[...y];return S[p]=h,S}),w<1)x=requestAnimationFrame(v);else{r(S=>{const j=[...S];return j[p]=d.value,j});const y=setTimeout(()=>{s(j=>{const k=[...j];return k[p]=!0,k});const S=setTimeout(()=>{s(j=>{const k=[...j];return k[p]=!1,k})},900);u.current.push(()=>clearTimeout(S))},350+p*180);u.current.push(()=>clearTimeout(y))}};x=requestAnimationFrame(v),u.current.push(()=>cancelAnimationFrame(x))})},[a]),o.jsxs("div",{className:"stats-wrapper",style:{position:"relative",zIndex:10,marginTop:48,padding:"0 1.5rem 56px",display:"flex",justifyContent:"center",backgroundColor:"#F7F4EF"},children:[o.jsx("style",{children:`
        .stat-float-card {
          max-width: 1100px;
          width: 100%;
          background: linear-gradient(135deg, #384F2E 0%, #49613B 50%, #384F2E 100%);
          border-radius: 24px;
          box-shadow: 0 28px 80px rgba(0,0,0,0.30), 0 6px 22px rgba(0,0,0,0.14);
          display: flex;
          align-items: stretch;
          overflow: hidden;
        }
        .stat-float-item {
          flex: 1;
          text-align: center;
          padding: 48px 28px 44px;
          position: relative;
          cursor: default;
          transition: background 0.35s ease;
        }
        .stat-float-item + .stat-float-item {
          border-left: 1px solid rgba(201,169,110,0.13);
        }
        .stat-float-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A96E 50%, transparent);
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
          border-radius: 2px;
        }
        .stat-float-item:hover {
          background: rgba(255,255,255,0.04);
        }
        .stat-float-item:hover::after {
          width: 52%;
        }
        @keyframes stat-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .stat-float-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.75rem, 4.2vw, 4.25rem);
          font-weight: 300;
          color: #f5f0e8;
          line-height: 1;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          transition: color 0.25s ease;
          position: relative;
          display: inline-block;
        }
        .stat-float-num.shimmer-active {
          background: linear-gradient(
            105deg,
            #f5f0e8 0%,
            #f5f0e8 35%,
            rgba(255,255,255,0.92) 48%,
            #e8d5b0 52%,
            #f5f0e8 65%,
            #f5f0e8 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: stat-shimmer 0.85s ease-in-out forwards;
        }
        .stat-float-item:hover .stat-float-num {
          color: #ffffff;
        }
        .stat-float-label {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 9px;
          letter-spacing: 4.5px;
          text-transform: uppercase;
          color: rgba(201,169,110,0.60);
          transition: color 0.25s ease;
        }
        .stat-float-item:hover .stat-float-label {
          color: rgba(201,169,110,0.90);
        }
        @media (max-width: 640px) {
          .stat-float-card {
            flex-wrap: wrap;
            border-radius: 18px;
          }
          .stat-float-item {
            flex: 0 0 50%;
            padding: 36px 16px 32px;
          }
          .stat-float-item + .stat-float-item {
            border-left: none;
          }
          .stat-float-item:nth-child(2n) {
            border-left: 1px solid rgba(201,169,110,0.13);
          }
          .stat-float-item:nth-child(n+3) {
            border-top: 1px solid rgba(201,169,110,0.13);
          }
        }
      `}),o.jsx("div",{ref:c,className:"stat-float-card",children:t.map((d,p)=>o.jsxs("div",{className:"stat-float-item",children:[o.jsxs("div",{className:`stat-float-num${i[p]?" shimmer-active":""}`,children:[n[p],d.suffix]}),o.jsx("div",{className:"stat-float-label",children:d.label})]},d.label))})]})}function H5(){var w;const{settings:e}=En(),t=(w=e==null?void 0:e.homeStats)!=null&&w.length?e.homeStats.map(g=>({value:g.value,label:g.label})):[{value:"2+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],n=t.length,[r,i]=m.useState(0),[s,a]=m.useState(0),[l,c]=m.useState("right"),[u,d]=m.useState(!1),p=m.useRef(null),f=m.useRef(null),x=m.useCallback((g,h)=>{c(h),i(g),a(y=>y+1)},[]);m.useEffect(()=>{if(u)return;const g=setTimeout(()=>x((r+1)%n,"right"),2800);return()=>clearTimeout(g)},[r,u,x,n]);const v=g=>{p.current=g.touches[0].clientX,d(!0),f.current&&clearTimeout(f.current)},b=g=>{if(p.current===null)return;const h=g.changedTouches[0].clientX-p.current;Math.abs(h)>40&&x(h<0?(r+1)%n:(r-1+n)%n,h<0?"right":"left"),p.current=null,f.current=setTimeout(()=>d(!1),2e3)};return o.jsxs("div",{className:"mobile-stats-carousel",children:[o.jsx("style",{children:`
        /* Hidden on desktop — responsive-mobile.css reveals it on mobile */
        @media (min-width: 768px) { .mobile-stats-carousel { display: none !important; } }

        @keyframes msSlideInRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes msSlideInLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        .ms-card-right { animation: msSlideInRight 0.45s cubic-bezier(0.22,1,0.36,1) both; }
        .ms-card-left  { animation: msSlideInLeft  0.45s cubic-bezier(0.22,1,0.36,1) both; }

        .ms-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(201,169,110,0.28);
          transition: background 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .ms-dot-active { background: #C9A96E !important; transform: scale(1.4) !important; }
      `}),o.jsxs("div",{onTouchStart:v,onTouchEnd:b,style:{touchAction:"pan-y",userSelect:"none"},children:[o.jsxs("div",{className:l==="right"?"ms-card-right":"ms-card-left",style:{background:"linear-gradient(135deg, #384F2E 0%, #49613B 50%, #384F2E 100%)",borderRadius:16,padding:"44px 24px 40px",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(4rem, 19vw, 5.5rem)",fontWeight:300,color:"#f5f0e8",lineHeight:1,letterSpacing:"-0.03em",marginBottom:18},children:t[r].value}),o.jsx("div",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"3.5px",textTransform:"uppercase",color:"rgba(201,169,110,0.82)"},children:t[r].label})]},s),o.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:20},children:t.map((g,h)=>o.jsx("div",{className:`ms-dot${h===r?" ms-dot-active":""}`,onClick:()=>x(h,h>r?"right":"left")},h))})]})]})}function U5({beforeImg:e,afterImg:t,title:n,beforeLabel:r="Before",afterLabel:i="After",autoPlayKey:s=0,onDragChange:a}){const[l,c]=m.useState(50),[u,d]=m.useState(0),p=m.useRef(null),f=m.useRef(!1),x=m.useRef(null),v=m.useRef(!1),b=m.useRef(!0),w=m.useRef([]),g=m.useRef(a),[h,y]=m.useState(1),[S,j]=m.useState(!1),k=m.useRef(null),E=m.useRef(null),[C,O]=m.useState(!1),[D,V]=m.useState(!1);m.useEffect(()=>{g.current=a},[a]),m.useEffect(()=>(b.current=!0,()=>{b.current=!1,w.current.forEach(clearTimeout),E.current!==null&&cancelAnimationFrame(E.current)}),[]);const _=()=>{w.current.forEach(clearTimeout),w.current=[]},$=()=>{_(),v.current=!1,b.current&&d(0)},F=Y=>new Promise(ie=>{const Kt=setTimeout(ie,Y);w.current.push(Kt)}),Q=(Y,ie)=>new Promise(Kt=>{if(!b.current)return Kt();d(ie),c(Y);const Ox=setTimeout(Kt,ie);w.current.push(Ox)}),R=async()=>{if(!(v.current||f.current)){if(v.current=!0,await Q(98,900),f.current||!b.current){v.current=!1;return}if(await F(600),f.current||!b.current){v.current=!1;return}if(await Q(2,900),f.current||!b.current){v.current=!1;return}if(await F(600),f.current||!b.current){v.current=!1;return}await Q(50,600),b.current&&d(0),v.current=!1}},A=m.useRef(s);m.useEffect(()=>{if(s===A.current)return;A.current=s,$();const Y=setTimeout(()=>{b.current&&R()},30);w.current.push(Y)},[s]);const T=Y=>{if(!p.current)return;d(0);const ie=p.current.getBoundingClientRect(),Kt=Math.max(0,Math.min(Y-ie.left,ie.width));c(Kt/ie.width*100)},M=()=>{E.current!==null&&(cancelAnimationFrame(E.current),E.current=null);const Y=k.current;k.current=null,Y!==null&&T(Y)},W=Y=>{k.current=Y,E.current===null&&(E.current=requestAnimationFrame(()=>{E.current=null;const ie=k.current;k.current=null,f.current&&ie!==null&&T(ie)}))},q=Y=>{var ie;f.current=!0,(ie=g.current)==null||ie.call(g,!0),$(),y(1.15),j(!0),T(Y)},ee=()=>{var Y;k.current=null,f.current=!1,x.current=null,(Y=g.current)==null||Y.call(g,!1),y(1),j(!1)},lt=Y=>{Y.pointerType==="mouse"&&Y.button!==0||(x.current=Y.pointerId,Y.currentTarget.setPointerCapture(Y.pointerId),Y.preventDefault(),q(Y.clientX))},Ve=Y=>{!f.current||Y.pointerId!==x.current||(Y.preventDefault(),W(Y.clientX))},P=Y=>{Y.pointerId===x.current&&(M(),Y.currentTarget.hasPointerCapture(Y.pointerId)&&Y.currentTarget.releasePointerCapture(Y.pointerId),ee())},z=Y=>{Y.pointerId===x.current&&(M(),ee())},B=()=>{!v.current&&!f.current&&R()},Ee=u>0?`left ${u}ms ease-in-out`:"none",Yt={position:"absolute",bottom:16,zIndex:6,fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",color:"#C8A56A",background:"rgba(250,248,244,0.92)",border:"1px solid rgba(200,165,106,0.55)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)",pointerEvents:"auto",cursor:"default",transition:"opacity 0.2s ease, filter 0.2s ease"};return o.jsxs("div",{ref:p,className:"compare-slider-container",style:{position:"relative",width:"100%",overflow:"hidden",cursor:"ew-resize",userSelect:"none",WebkitUserSelect:"none",touchAction:S?"none":"pan-y"},onPointerDown:lt,onPointerMove:Ve,onPointerUp:P,onPointerCancel:P,onLostPointerCapture:z,onMouseEnter:B,children:[o.jsx("img",{src:t,alt:`After — ${n}`,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",inset:0,clipPath:`inset(0 ${100-l}% 0 0)`,pointerEvents:"none",transition:u>0?`clip-path ${u}ms ease-in-out`:"none"},children:o.jsx("img",{src:e,alt:`Before — ${n}`,draggable:!1,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 55%, rgba(10,8,6,0.38) 100%)",pointerEvents:"none",zIndex:3}}),o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l}%`,transform:"translateX(-50%)",width:2,background:"rgba(255,255,255,0.88)",pointerEvents:"none",zIndex:4,boxShadow:"0 0 8px rgba(0,0,0,0.25)",transition:Ee}}),o.jsx("style",{children:`
        .cs-handle { width: 46px; height: 46px; }
        @media (max-width: 768px) { .cs-handle { width: 48px; height: 48px; } }
      `}),o.jsx("div",{className:"cs-handle",style:{position:"absolute",top:"50%",left:`${l}%`,transform:`translate(-50%, -50%) scale(${h})`,borderRadius:"50%",background:"#fff",border:"2px solid rgba(200,165,106,0.85)",boxShadow:"0 2px 18px rgba(0,0,0,0.22)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",cursor:"ew-resize",touchAction:S?"none":"pan-y",userSelect:"none",WebkitUserSelect:"none",zIndex:5,transition:Ee?`left ${u}ms ease-in-out, transform 120ms ease`:"transform 120ms ease"},children:o.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"#C8A56A",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M8 5l-4 7 4 7M16 5l4 7-4 7"})})}),o.jsx("div",{style:{position:"absolute",top:"calc(50% - 38px)",left:`${l}%`,transform:"translateX(-50%)",transition:Ee,zIndex:6,pointerEvents:"none",whiteSpace:"nowrap",fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:8,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.75)",background:"rgba(0,0,0,0.32)",backdropFilter:"blur(4px)",padding:"3px 9px",borderRadius:100},children:"Slide to Compare"}),o.jsx("span",{style:{...Yt,left:16,opacity:l>92?0:C?1:.72,filter:C?"brightness(1.18)":"brightness(1)",pointerEvents:l>92?"none":"auto"},onMouseEnter:()=>O(!0),onMouseLeave:()=>O(!1),children:r}),o.jsx("span",{style:{...Yt,right:16,opacity:l<8?0:D?1:.72,filter:D?"brightness(1.18)":"brightness(1)",pointerEvents:l<8?"none":"auto"},onMouseEnter:()=>V(!0),onMouseLeave:()=>V(!1),children:i})]})}function $5(){const e=Qf.length,t=3600,n=1200,r=1500,[i,s]=m.useState(2),[a,l]=m.useState(0),[c,u]=m.useState(()=>new Array(e).fill(0)),[d,p]=m.useState(!1),f=m.useRef(i),x=m.useRef(a),v=m.useRef(null),b=m.useRef(new Set),w=m.useRef(!0),g=m.useRef(null),h=m.useRef(!1);m.useEffect(()=>{f.current=i},[i]),m.useEffect(()=>{x.current=a},[a]),m.useEffect(()=>(w.current=!0,()=>{w.current=!1}),[]);const y=Math.ceil(e/i),S=()=>{v.current&&(clearTimeout(v.current),v.current=null)},j=m.useCallback((V,_)=>{S();const $=(_-1)*n+t+r;v.current=setTimeout(()=>{if(!w.current)return;if(b.current.size>0){j(V,_);return}const F=f.current,Q=Math.ceil(e/F),R=(V+1)%Q;p(!0),setTimeout(()=>{if(!w.current)return;l(R),x.current=R;const A=R*F,T=Math.min(A+F,e);u(M=>{const W=[...M];for(let q=A;q<T;q++)W[q]++;return W}),setTimeout(()=>{w.current&&p(!1),j(R,T-A)},520)},0)},$)},[]),k=m.useCallback(V=>{S();const _=f.current,$=Math.ceil(e/_),F=(V%$+$)%$;b.current.clear(),p(!0),setTimeout(()=>{if(!w.current)return;l(F),x.current=F;const Q=F*_,R=Math.min(Q+_,e);u(A=>{const T=[...A];for(let M=Q;M<R;M++)T[M]++;return T}),setTimeout(()=>{w.current&&p(!1),j(F,R-Q)},520)},0)},[j]);m.useEffect(()=>{const V=()=>{const _=window.innerWidth<641?1:2;_!==f.current&&(f.current=_,s(_),S(),l(0),x.current=0,u(new Array(e).fill(0)),b.current.clear(),p(!1))};return V(),window.addEventListener("resize",V),()=>window.removeEventListener("resize",V)},[]),m.useEffect(()=>{const V=g.current;if(!V)return;const _=new IntersectionObserver(([$])=>{if($.isIntersecting&&!h.current){h.current=!0,_.disconnect();const F=f.current,Q=Math.min(F,e);u(R=>{const A=[...R];for(let T=0;T<Q;T++)A[T]++;return A}),j(0,Q)}},{threshold:.25});return _.observe(V),()=>{_.disconnect(),S()}},[j]);const E=(V,_)=>{_?b.current.add(V):b.current.delete(V)},C=m.useRef(i);m.useEffect(()=>{if(!h.current||i===C.current){C.current=i;return}C.current=i;const V=Math.min(i,e);u(_=>{const $=[..._];for(let F=0;F<V;F++)$[F]++;return $}),j(0,V)},[i,j]);const O=72,D=(V,_=0)=>{const $=Qf[V],F=i===2&&_===1?O:0;return o.jsxs("div",{className:"trf-card",style:{flex:i===1?"0 0 100%":"0 0 calc(50% - 12px)",marginTop:F},children:[o.jsx(U5,{beforeImg:$.beforeImg,afterImg:$.afterImg,title:$.title,beforeLabel:$.beforeLabel,afterLabel:$.afterLabel,autoPlayKey:c[V],onDragChange:Q=>E(V,Q)}),o.jsxs("div",{style:{padding:"1.5rem 1.75rem 1.75rem",borderTop:"1px solid #F5F1EA"},children:[o.jsx("h3",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.1rem, 1.8vw, 1.4rem)",color:"#262421",margin:"0 0 0.9rem",letterSpacing:"-0.01em"},children:$.title}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 1.5rem"},children:[o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(38,36,33,0.35)",margin:"0 0 0.4rem"},children:"Before"}),o.jsx("p",{style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.55)",lineHeight:1.75,margin:0},children:$.beforeDesc})]}),o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",color:"#C8A56A",margin:"0 0 0.4rem"},children:"After"}),o.jsx("p",{style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.72)",lineHeight:1.75,margin:0},children:$.afterDesc})]})]})]})]},$.id)};return o.jsxs("div",{ref:g,style:{maxWidth:1100,margin:"0 auto",padding:"0 20px"},children:[o.jsx("style",{children:`
        .trf-card {
          border-radius: 20px;
          background: #fff;
          box-shadow: 0 8px 48px rgba(38,36,33,0.09), 0 2px 12px rgba(38,36,33,0.05);
          overflow: hidden;
        }
        .trf-carousel-viewport { overflow: hidden; }
        .trf-carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        .trf-carousel-page {
          flex: 0 0 100%;
          display: flex;
          gap: 24px;
          align-items: flex-start;
        }
        .trf-nav-btn {
          width: 46px; height: 46px; border-radius: 50%;
          border: 1px solid #E8DED1; background: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 250ms ease, background 250ms ease, opacity 250ms ease;
          flex-shrink: 0;
        }
        .trf-nav-btn:hover { border-color: #C8A56A; background: #FAF8F4; }
        .trf-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #E8DED1; border: none; cursor: pointer; padding: 0;
          transition: background 300ms ease, transform 300ms ease;
        }
        .trf-dot.active { background: #C8A56A; transform: scale(1.35); }
      `}),o.jsx("div",{className:"trf-carousel-viewport",children:o.jsx("div",{className:"trf-carousel-track",style:{transform:`translateX(-${a*100}%)`},children:Array.from({length:y},(V,_)=>{const $=_*i,F=Math.min($+i,e),Q=Array.from({length:F-$},(R,A)=>$+A);return o.jsx("div",{className:"trf-carousel-page",children:Q.map((R,A)=>D(R,A))},_)})})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,marginTop:"2.25rem"},children:[o.jsx("button",{className:"trf-nav-btn",onClick:()=>k(a-1),"aria-label":"Previous page",style:{opacity:d?.45:1,pointerEvents:d?"none":"auto"},children:o.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#262421",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})})}),o.jsx("div",{style:{display:"flex",gap:10,alignItems:"center"},children:Array.from({length:y},(V,_)=>o.jsx("button",{className:`trf-dot${_===a?" active":""}`,onClick:()=>k(_),"aria-label":`Page ${_+1}`},_))}),o.jsx("button",{className:"trf-nav-btn",onClick:()=>k(a+1),"aria-label":"Next page",style:{opacity:d?.45:1,pointerEvents:d?"none":"auto"},children:o.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#262421",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),o.jsxs("p",{style:{textAlign:"center",marginTop:"1rem",fontFamily:"'Montserrat', sans-serif",fontWeight:300,fontSize:11,letterSpacing:"0.2em",color:"rgba(38,36,33,0.3)"},children:[String(a+1).padStart(2,"0")," / ",String(y).padStart(2,"0")]})]})}function Y5({splashDone:e}){var v,b;const{settings:t}=En(),n=m.useRef(null),{scrollYProgress:r}=pS({target:n,offset:["start start","end start"]}),i=yS(r,[0,1],["0%","22%"]),s=fS(i,{stiffness:60,damping:20}),[a,l]=m.useState(!1),c=((v=t==null?void 0:t.homeHero)==null?void 0:v.backgroundImage)||F5,u=((b=t==null?void 0:t.homeHero)==null?void 0:b.subheadline)||"We design homes and workspaces that are beautiful, functional, and built for everyday living.";m.useEffect(()=>{const w=n.current;if(!w)return;const g=new IntersectionObserver(([h])=>l(h.isIntersecting),{threshold:.2});return g.observe(w),()=>g.disconnect()},[]);const d={hidden:{},visible:{transition:{delayChildren:0,staggerChildren:.38}}},p={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:1.1,ease:[.25,.1,.25,1]}}},f={hidden:{opacity:0,y:24,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:1.1,ease:[.25,.1,.25,1]}}},x={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.9,ease:[.25,.1,.25,1]}}};return o.jsxs("section",{ref:n,className:"hero-section",style:{position:"relative",height:"100vh",minHeight:700,overflow:"hidden",clipPath:"inset(0)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[o.jsx(N.div,{className:"hero-parallax-wrap",style:{y:s,position:"absolute",inset:"-12% 0",zIndex:0},children:o.jsx("img",{src:c,alt:"NIVORA Interiors",className:"hero-bg-img",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%",display:"block"},loading:"eager"})}),o.jsx("div",{className:"hero-gradient-overlay",style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to bottom, rgba(20,32,18,0.35) 0%, rgba(20,32,18,0.55) 40%, rgba(20,32,18,0.78) 75%, rgba(20,32,18,0.92) 100%)"}}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,background:"radial-gradient(ellipse at center, transparent 50%, rgba(10,18,9,0.45) 100%)",pointerEvents:"none"}}),o.jsx(N.div,{initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.9,delay:0},style:{position:"absolute",left:36,top:"50%",zIndex:10,transform:"translateY(-50%) rotate(-90deg)",transformOrigin:"center center",fontFamily:"'Cinzel', serif",fontSize:9,letterSpacing:"0.35em",color:"rgba(184,150,106,0.45)",textTransform:"uppercase",whiteSpace:"nowrap"},className:"hidden lg:block",children:"Boutique Interior Studio"}),o.jsx(N.div,{initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.9,delay:0},style:{position:"absolute",right:36,top:"50%",zIndex:10,transform:"translateY(-50%) rotate(90deg)",transformOrigin:"center center",fontFamily:"'Cinzel', serif",fontSize:9,letterSpacing:"0.35em",color:"rgba(184,150,106,0.45)",textTransform:"uppercase",whiteSpace:"nowrap"},className:"hidden lg:block",children:"Mumbai"}),o.jsxs(N.div,{variants:d,initial:"hidden",animate:e&&a?"visible":"hidden",style:{position:"relative",zIndex:10,textAlign:"center",padding:"0 24px",maxWidth:1040,margin:"0 auto",width:"100%"},className:"hero-content-wrap",children:[o.jsxs(N.div,{variants:x,className:"hero-city-tabs hero-location-tag",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:32},children:[o.jsxs("svg",{className:"hero-location-pin",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A96E",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[o.jsx("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),o.jsx("span",{className:"hero-location-text",style:{fontFamily:"'Cinzel', serif",fontSize:11,letterSpacing:"0.35em",textTransform:"uppercase",color:"rgba(245,240,232,0.85)"},children:"Mumbai"})]}),o.jsx(N.h1,{variants:p,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,color:"#f5f0e8",letterSpacing:"-0.01em",marginBottom:8},children:"Thoughtfully Designed"}),o.jsx(N.h1,{variants:p,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,color:"#f5f0e8",letterSpacing:"-0.01em",marginBottom:10},children:"Interiors —"}),o.jsx(N.h1,{variants:f,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,letterSpacing:"-0.01em",marginBottom:32},children:o.jsx("em",{style:{color:"#b8966a",fontStyle:"italic"},children:"That Feel Effortless"})}),o.jsx(N.p,{variants:p,className:"hero-body",style:{fontFamily:"'DM Sans', sans-serif",fontWeight:300,fontSize:"clamp(15px, 1.6vw, 18px)",color:"rgba(245,240,232,0.58)",lineHeight:1.8,maxWidth:620,margin:"0 auto 56px"},children:u}),o.jsxs(N.div,{variants:p,className:"hero-cta-group",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"},children:[o.jsx(N.div,{whileHover:{y:-2},transition:{duration:.25},className:"hero-btn-wrap",children:o.jsx(he,{to:"/contact",className:"hero-btn-primary",style:{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"'Cinzel', serif",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:"#2D3E29",fontWeight:600,padding:"17px 40px",textDecoration:"none",transition:"background 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease",boxShadow:"0 4px 24px rgba(168,133,79,0.35)"},onMouseEnter:w=>{const g=w.currentTarget;g.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",g.style.boxShadow="0 8px 32px rgba(168,133,79,0.50)"},onMouseLeave:w=>{const g=w.currentTarget;g.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",g.style.boxShadow="0 4px 24px rgba(168,133,79,0.35)"},children:"Book Free Consultation"})}),o.jsx(N.div,{whileHover:{y:-2,scale:1.03},whileTap:{scale:1.03},transition:{duration:.25},className:"hero-btn-wrap",children:o.jsxs(he,{to:"/portfolio",className:"hero-btn-secondary hero-btn-sweep",style:{position:"relative",overflow:"hidden",zIndex:0,display:"inline-flex",alignItems:"center",gap:10,fontFamily:"'Cinzel', serif",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",background:"transparent",color:"#D4C0A1",padding:"16px 40px",border:"1px solid rgba(245,240,232,0.55)",textDecoration:"none",transition:"border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease"},children:["View Projects ",o.jsx($e,{size:13,strokeWidth:1.5})]})})]})]}),o.jsx("style",{children:`
        .hero-btn-sweep::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s ease;
          z-index: -1;
        }
        .hero-btn-sweep:hover,
        .hero-btn-sweep:active {
          border-color: #C8A46A !important;
          color: #2D3E29 !important;
          box-shadow: 0 8px 24px rgba(168,133,79,0.35);
        }
        .hero-btn-sweep:hover::before,
        .hero-btn-sweep:active::before {
          transform: scaleX(1);
        }
      `}),o.jsx(N.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.9,delay:0},style:{position:"absolute",bottom:64,left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:0,width:"100%",maxWidth:680,padding:"0 24px",justifyContent:"center"},className:"hero-stats",children:V5.map((w,g)=>o.jsxs("div",{style:{textAlign:"center",flex:"1 1 0",padding:"0 16px",borderLeft:g>0?"1px solid rgba(184,150,106,0.2)":"none"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:"#b8966a",lineHeight:1,marginBottom:6},children:w.value}),o.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:300,letterSpacing:"0.12em",color:"rgba(245,240,232,0.38)",textTransform:"uppercase"},children:w.label})]},w.label))}),o.jsxs(N.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:0,duration:.72},className:"scroll-indicator-bounce",style:{position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontFamily:"'Cinzel', serif",fontSize:8,letterSpacing:"0.4em",color:"rgba(184,150,106,0.5)",textTransform:"uppercase"},children:"Scroll"}),o.jsx("div",{style:{position:"relative",width:1,height:40,background:"rgba(184,150,106,0.15)",overflow:"hidden"},children:o.jsx(N.div,{animate:{y:["-100%","200%"]},transition:{duration:1.6,repeat:1/0,ease:"easeInOut",repeatDelay:.3},style:{position:"absolute",top:0,left:0,width:"100%",height:"50%",background:"rgba(184,150,106,0.7)"}})})]}),o.jsx("style",{children:`
        @media (max-width: 640px) {
          .hero-stats { display: none !important; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(6px); }
        }
        .scroll-indicator-bounce {
          animation: scrollBounce 2s ease-in-out infinite;
        }

        /* ── Hero mobile fixes (below 768px) ── */
        @media (max-width: 767px) {
          /* 1. Compact height + vertically centred content */
          .hero-section {
            height: 100dvh !important;
            min-height: unset !important;
            justify-content: center !important;
            padding-top: 20px !important;
          }

          /* 2. Parallax container — keep slight buffer for the effect */
          .hero-parallax-wrap {
            inset: -8% 0 !important;
          }

          /* 3. Show the interesting mid-section of the building, not the dark tree tops */
          .hero-parallax-wrap img {
            object-position: center 30% !important;
          }

          /* 4. Stronger dark overlay for readability in sunlight */
          .hero-gradient-overlay {
            background: linear-gradient(
              to bottom,
              rgba(10,18,9,0.45) 0%,
              rgba(10,18,9,0.62) 35%,
              rgba(10,18,9,0.82) 68%,
              rgba(10,18,9,0.95) 100%
            ) !important;
          }

          /* 5. Content wrapper — tighter horizontal padding */
          .hero-content-wrap {
            padding: 0 20px !important;
          }

          /* 6. City tabs — compact margin */
          .hero-city-tabs {
            margin-bottom: 20px !important;
          }
          .hero-location-text {
            font-size: 10px !important;
          }
          .hero-location-pin {
            width: 11px !important;
            height: 11px !important;
          }

          /* 7. Heading lines — tighter vertical spacing */
          .hero-h1 {
            margin-bottom: 4px !important;
          }

          /* 8. Body copy — reduce bottom gap */
          .hero-body {
            margin-bottom: 28px !important;
            font-size: 13px !important;
          }

          /* 9. CTA group — vertical stack, full width */
          .hero-cta-group {
            flex-direction: column !important;
            gap: 10px !important;
            align-items: center !important;
            width: 100% !important;
          }

          /* 10. Button wrappers — auto width, centered */
          .hero-btn-wrap {
            width: auto !important;
          }

          /* 11. Primary button — auto width, readable size */
          .hero-btn-primary {
            width: auto !important;
            justify-content: center !important;
            padding: 14px 32px !important;
            font-size: 12px !important;
          }

          /* 12. Secondary button — auto width, readable size */
          .hero-btn-secondary {
            width: auto !important;
            justify-content: center !important;
            padding: 14px 32px !important;
            font-size: 12px !important;
          }
        }
      `})]})}const K5={hidden:{},visible:{transition:{staggerChildren:.09}}},G5={hidden:{opacity:0,scale:.4},visible:{opacity:1,scale:1,transition:{duration:.25,ease:[.22,1,.36,1]}}};function X5(){const[e,t]=m.useState(0),[n,r]=m.useState(0),[i,s]=m.useState("next"),[a,l]=m.useState(!1),c=m.useRef(null),u=Zf.length,d=5e3,p=()=>{s("next"),t(E=>(E+1)%u),r(E=>E+1)},f=()=>{s("prev"),t(E=>(E-1+u)%u),r(E=>E+1)},x=()=>{c.current&&clearInterval(c.current),c.current=setInterval(p,d)};m.useEffect(()=>(x(),()=>{c.current&&clearInterval(c.current)}),[]);const v=()=>{f(),x()},b=()=>{p(),x()},w=m.useRef(null),g=m.useRef(0),h=E=>{w.current=E.touches[0].clientX,g.current=0},y=E=>{w.current!==null&&(g.current=E.touches[0].clientX-w.current)},S=()=>{g.current>40?v():g.current<-40&&b(),w.current=null,g.current=0},j=Zf[e],k=i==="next"?"tCardInRight":"tCardInLeft";return o.jsxs(N.section,{initial:{opacity:.35},whileInView:{opacity:1},viewport:{once:!0,margin:"-60px"},transition:{duration:.3,ease:"easeOut"},className:"testimonials-section",style:{background:"#f5f2ed",padding:"80px 0"},children:[o.jsx("style",{children:`
        @keyframes tCardInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tCardInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes tPanelTextIn {
          from { opacity: 0; transform: translateY(15px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tDividerGrow {
          from { width: 0; }
          to   { width: 48px; }
        }
        @keyframes tQuoteFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tNameSlide {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tProgressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .t-nav-btn {
          flex-shrink: 0;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(33,41,26,0.25);
          background: transparent;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #21291a;
          transition: border-color 0.2s ease, background 0.2s ease,
                      color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .t-nav-btn:hover {
          background: #2e3a24;
          border-color: #2e3a24;
          color: #f5f2ed;
          transform: scale(1.1);
          box-shadow: 0 4px 14px rgba(33,41,26,0.18);
        }
        .t-split-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .t-split-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(33,41,26,0.13);
        }
        .t-read-more {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #a18661;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .t-read-more::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        .t-read-more:hover { color: #21291a; }
        .t-read-more:hover::after { width: 100%; }
        @media (max-width: 768px) {
          /* Keep the two-tone split layout — just shrink it to fit mobile */
          .testimonials-container { padding: 0 16px !important; }
          .t-card-split {
            flex-direction: row !important;
            min-height: unset !important;
            border-radius: 16px !important;
          }

          /* Left panel — dark olive/green, 40% width */
          .t-panel-left {
            display: flex !important;
            flex: 0 0 40% !important;
            max-width: 40% !important;
            padding: 20px 14px !important;
          }
          .t-panel-label { font-size: 7.5px !important; letter-spacing: 0.16em !important; margin-bottom: 10px !important; }
          .t-panel-heading { font-size: 15px !important; line-height: 1.3 !important; margin-bottom: 16px !important; }

          /* Right panel — cream, 60% width */
          .t-panel-right {
            flex: 0 0 60% !important;
            max-width: 60% !important;
            width: auto !important;
            padding: 20px 16px !important;
            border-radius: 0 !important;
          }
          .testimonials-arrow-row {
            width: 100% !important;
            gap: 0 !important;
            position: relative !important;
          }
          .testimonials-arrow-row .t-nav-btn {
            position: absolute !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 5 !important;
            background: rgba(245,242,237,0.9) !important;
            box-shadow: 0 2px 10px rgba(33,41,26,0.18) !important;
          }
          .testimonials-arrow-row .t-nav-btn:first-child { left: -6px !important; }
          .testimonials-arrow-row .t-nav-btn:last-child { right: -6px !important; }
          .t-card-split { width: 100% !important; }

          /* Section padding + heading sizing on mobile */
          .testimonials-section { padding: 40px 0 !important; }
          .testimonials-heading h2 { font-size: 32px !important; text-align: center !important; }
          .testimonials-subtitle { font-size: 14px !important; text-align: center !important; padding: 0 8px !important; }

          /* Review text sizing on mobile */
          .testimonial-quote-text { font-size: 13px !important; line-height: 1.65 !important; margin-bottom: 16px !important; }
          .testimonial-author-name { font-size: 11px !important; }
          .testimonial-author-location { font-size: 10px !important; }

          /* Smaller nav arrows, closer to the card */
          .t-nav-btn { width: 32px !important; height: 32px !important; }

          /* Right panel decorative + meta elements sized down for mobile */
          .t-quote-icon { font-size: 60px !important; top: 2px !important; right: 10px !important; }
          .t-stars-row { margin-bottom: 10px !important; }
          .t-stars-row span { font-size: 12px !important; }
          .t-avatar { width: 30px !important; height: 30px !important; font-size: 9px !important; }

          /* Progress bar full-ish width, centered */
          .testimonial-progress-bar-wrapper { width: 90% !important; margin: 16px auto 0 !important; }
        }
      `}),o.jsxs("div",{className:"testimonials-container",style:{maxWidth:1100,margin:"0 auto",padding:"0 24px"},children:[o.jsxs(N.div,{initial:{opacity:.35,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,ease:[.22,1,.36,1]},className:"testimonials-heading",style:{textAlign:"center",marginBottom:56},children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.42em",textTransform:"uppercase",color:"#a18661",margin:"0 0 16px"},children:"Client Stories"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.6rem)",color:"#21291a",lineHeight:1.15,margin:"0 0 18px",letterSpacing:"-0.01em"},children:"What Clients Say"}),o.jsx("p",{className:"testimonials-subtitle",style:{fontFamily:"'Lora', serif",fontWeight:300,fontStyle:"italic",fontSize:15,lineHeight:1.75,color:"rgba(33,41,26,0.55)",maxWidth:500,margin:"0 auto"},children:"Every project is a relationship. These are the words of people who trusted us with their spaces."})]}),o.jsxs("div",{className:"testimonials-arrow-row",style:{display:"flex",alignItems:"center",gap:20},onMouseEnter:()=>{l(!0),c.current&&clearInterval(c.current)},onMouseLeave:()=>{l(!1),x()},children:[o.jsx("button",{className:"t-nav-btn",onClick:v,"aria-label":"Previous testimonial",children:o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})})}),o.jsxs("div",{style:{flex:1,display:"flex",border:"1px solid #5f745e",borderRadius:12,overflow:"hidden",animation:`${k} 500ms cubic-bezier(0.22,1,0.36,1) both`,minHeight:280},className:"t-card-split",onTouchStart:h,onTouchMove:y,onTouchEnd:S,children:[o.jsxs("div",{className:"t-panel-left",style:{flex:"0 0 320px",background:"#21291a",padding:"44px 40px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"},children:[o.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)",pointerEvents:"none"}}),o.jsx("p",{className:"t-panel-label",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.38em",textTransform:"uppercase",color:"#a18661",margin:"0 0 20px",position:"relative",zIndex:1,animation:"tPanelTextIn 500ms ease-out 200ms both"},children:"The Word on the Street"},`label-${n}`),o.jsx("h3",{className:"t-panel-heading",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.4rem, 2.4vw, 2rem)",color:"#f5f2ed",lineHeight:1.25,margin:"0 0 28px",letterSpacing:"-0.01em",position:"relative",zIndex:1,animation:"tPanelTextIn 500ms ease-out 280ms both"},children:"Hear what our clients have said about us!"},`heading-${n}`),o.jsx("div",{style:{height:1.5,background:"#a18661",position:"relative",zIndex:1,animation:"tDividerGrow 600ms ease-out 360ms both"}},`divider-${n}`)]}),o.jsxs("div",{className:"t-panel-right",style:{flex:1,background:"#ffffff",padding:"44px 44px 40px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden"},children:[o.jsx(N.span,{className:"t-quote-icon","aria-hidden":"true",initial:{opacity:.1,scale:.8,rotate:-10},animate:{opacity:.25,scale:1,rotate:0},transition:{duration:.55,ease:[.22,1,.36,1]},style:{position:"absolute",top:8,right:24,fontFamily:"'Playfair Display', serif",fontSize:110,lineHeight:1,color:"#a18661",pointerEvents:"none",userSelect:"none",display:"block"},children:'"'},`quoteicon-${n}`),o.jsx(N.div,{className:"t-stars-row",variants:K5,initial:"hidden",animate:"visible",style:{display:"flex",gap:4,marginBottom:18,position:"relative",zIndex:1},children:Array.from({length:j.stars}).map((E,C)=>o.jsx(N.span,{variants:G5,style:{fontSize:16,color:"#a18661",lineHeight:1,display:"block"},children:"★"},C))},`stars-${n}`),o.jsxs("p",{className:"testimonial-quote-text",style:{fontFamily:"'Lora', serif",fontStyle:"italic",fontSize:16,lineHeight:1.8,color:"#2c2c2c",margin:"0 0 28px",position:"relative",zIndex:1,animation:"tQuoteFade 500ms ease-out 320ms both"},children:['"',j.text,'"']},`quote-${n}`),o.jsx("div",{style:{width:36,height:1,background:"#a18661",marginBottom:16,flexShrink:0}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx(N.div,{className:"t-avatar",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.35,delay:.44,ease:[.22,1,.36,1]},style:{width:38,height:38,borderRadius:"50%",background:"rgba(161,134,97,0.15)",border:"1.5px solid rgba(161,134,97,0.5)",color:"#7a6142",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Montserrat', sans-serif",fontWeight:700,fontSize:11,flexShrink:0,letterSpacing:"0.04em"},children:j.initials},`avatar-${n}`),o.jsxs("div",{children:[o.jsx("p",{className:"testimonial-author-name",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:500,fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",color:"#21291a",margin:"0 0 5px",animation:"tNameSlide 400ms ease-out 440ms both"},children:j.name},`name-${n}`),o.jsx("p",{className:"testimonial-author-location",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"#a18661",margin:0,animation:"tNameSlide 400ms ease-out 520ms both"},children:j.location},`loc-${n}`)]})]})]})]},n),o.jsx("button",{className:"t-nav-btn",onClick:b,"aria-label":"Next testimonial",children:o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),o.jsx("div",{className:"testimonial-progress-bar-wrapper",style:{marginTop:24,display:"flex",justifyContent:"center"},children:o.jsx("div",{style:{width:"100%",height:3,background:"#e0d9cf",borderRadius:3,overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg, #a18661, #c8a97e)",borderRadius:3,animation:`tProgressFill ${d}ms linear forwards`,animationPlayState:a?"paused":"running"}},`bar-${n}`)})}),o.jsx(N.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:.25,ease:[.22,1,.36,1]},style:{textAlign:"center",marginTop:28},children:o.jsx(he,{to:"/testimonials",className:"t-read-more",children:"Read All Client Stories →"})})]})]})}function q5(){const[e,t]=m.useState(!1),[n,r]=m.useState(0),[i,s]=m.useState(null),a=m.useRef(null),l=$t();m.useEffect(()=>{const d=a.current;if(!d)return;const p=new IntersectionObserver(([f])=>{f.isIntersecting?(r(x=>x+1),t(!0)):t(!1)},{threshold:.05});return p.observe(d),()=>p.disconnect()},[]);const c=Fx.slice(0,4),u=d=>{s(d),setTimeout(()=>{s(null),l("/services")},350)};return o.jsxs("div",{ref:a,className:"mob-svc-root",children:[o.jsx("style",{children:`
        .mob-svc-root { display: none; }

        @media (max-width: 767px) {
          /* Hide desktop layout */
          .hsvc-desktop-header,
          .hsvc-desktop-cards { display: none !important; }

          .mob-svc-root { display: block; }

          /* ── Heading ── */
          .mob-svc-heading {
            text-align: center;
            margin-bottom: 1.75rem;
            opacity: 0;
            transform: translateY(-28px);
            transition: opacity 0.55s ease-out 0s, transform 0.55s ease-out 0s;
          }
          .mob-svc-heading.msv-in {
            opacity: 1;
            transform: translateY(0);
          }

          /* ── Press feedback (scale + brief description reveal, no expand) ── */
          .mob-svc-gcard.msv-pressed {
            animation-name: none !important;
            transform: scale(1.02) !important;
            filter: brightness(1.14);
            transition: transform 120ms ease, filter 120ms ease;
          }

          /* ── 2x2 grid — 4 cards, equal size ── */
          .mob-svc-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          /* ── Grid card ── */
          .mob-svc-gcard {
            position: relative;
            height: 190px;
            border-radius: 16px;
            overflow: hidden;
            cursor: pointer;
            opacity: 0;
            transform: translateY(24px);
          }
          .mob-svc-gcard.msv-card-in {
            animation: msvCardIn 0.45s cubic-bezier(0.22,1,0.36,1) forwards;
          }

          /* ── Description — hidden by default, briefly revealed on press ── */
          .mob-svc-detail {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: opacity 150ms ease, max-height 150ms ease;
            margin-top: 4px;
          }
          .mob-svc-gcard.msv-pressed .mob-svc-detail {
            opacity: 1;
            max-height: 70px;
          }
          .mob-svc-desc {
            font-family: 'Jost', sans-serif;
            font-weight: 300;
            font-size: 10.5px;
            line-height: 1.4;
            color: rgba(245,240,232,0.85);
            margin: 0 0 4px 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .mob-svc-explore {
            display: inline-flex; align-items: center; gap: 4px;
            font-family: 'Jost', sans-serif; font-weight: 300;
            font-size: 9px; letter-spacing: 0.18em;
            text-transform: uppercase; color: #C8A56A;
          }

          /* ── Image ── */
          .mob-svc-img {
            width: 100%; height: 100%; object-fit: cover; display: block;
          }

          /* ── Dark overlay ── */
          .mob-svc-overlay {
            position: absolute; inset: 0; pointer-events: none;
            background: linear-gradient(
              to bottom,
              rgba(0,0,0,0.06) 0%,
              rgba(0,0,0,0.52) 52%,
              rgba(0,0,0,0.90) 100%
            );
          }

          /* ── Bottom-left: icon + title — always visible, never moves ── */
          .mob-svc-bottom {
            position: absolute;
            left: 14px; bottom: 14px; right: 14px;
            z-index: 3;
          }
          .mob-svc-featured .mob-svc-bottom { left: 16px; bottom: 16px; right: 16px; }

          .mob-svc-icon-wrap {
            width: 28px; height: 28px; border-radius: 7px;
            background: rgba(200,165,106,0.18);
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 5px;
          }
          .mob-svc-featured .mob-svc-icon-wrap {
            width: 36px; height: 36px; border-radius: 10px;
          }

          .mob-svc-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 300;
            font-size: 0.875rem;
            color: #f5f0e8;
            line-height: 1.2;
            margin: 0;
          }
          .mob-svc-featured .mob-svc-title { font-size: 1.2rem; }

          /* ── Shimmer sweep ── */
          .mob-svc-shimmer {
            position: absolute; inset: 0; z-index: 5; pointer-events: none;
            overflow: hidden; border-radius: 16px;
          }
          .mob-svc-shimmer::after {
            content: '';
            position: absolute; top: 0; left: -100%;
            width: 55%; height: 100%;
            background: linear-gradient(
              105deg,
              transparent 20%,
              rgba(255,255,255,0.11) 50%,
              transparent 80%
            );
            animation-fill-mode: forwards;
            animation-timing-function: ease-out;
            animation-duration: 0.75s;
            animation-delay: var(--msv-shimmer-delay, 0.2s);
          }
          .mob-svc-shimmer.msv-shimmer-run::after {
            animation-name: msvShimmer;
          }

          /* ── Keyframes ── */
          @keyframes msvFeatIn {
            from { opacity: 0; transform: scale(0.9); }
            to   { opacity: 1; transform: scale(1); }
          }
          @keyframes msvCardIn {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes msvShimmer {
            0%   { left: -100%; }
            100% { left: 200%; }
          }
        }
      `}),o.jsxs("div",{className:`mob-svc-heading${e?" msv-in":""}`,children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"0.75rem"},children:"Our Services"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.75rem, 7vw, 2.5rem)",color:"#262421",lineHeight:1.1,marginBottom:"0.75rem",letterSpacing:"-0.01em"},children:["Spaces Designed Across",o.jsx("br",{}),"Every Experience"]}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:13,color:"rgba(38,36,33,0.5)",lineHeight:1.8,margin:0},children:"From private residences to large-scale environments, we design spaces that balance beauty, function and identity."})]}),o.jsx("div",{className:"mob-svc-grid",children:c.map((d,p)=>{const f=d.icon,x=p*.1,v=x+.18;return o.jsxs("div",{className:`mob-svc-gcard${e?" msv-card-in":""}${i===p?" msv-pressed":""}`,style:{animationDelay:e?`${x}s`:"0s"},onClick:()=>u(p),children:[o.jsx("img",{src:d.img,alt:d.title,className:"mob-svc-img",loading:"lazy"}),o.jsx("div",{className:"mob-svc-overlay"}),o.jsx("div",{className:`mob-svc-shimmer${e?" msv-shimmer-run":""}`,style:{"--msv-shimmer-delay":`${v}s`}},`mgshim-${n}-${p}`),o.jsxs("div",{className:"mob-svc-bottom",children:[o.jsx("div",{className:"mob-svc-icon-wrap",children:o.jsx(f,{size:13,color:"#C8A56A",strokeWidth:1.4})}),o.jsx("h3",{className:"mob-svc-title",children:d.title}),o.jsxs("div",{className:"mob-svc-detail",children:[o.jsx("p",{className:"mob-svc-desc",children:d.desc}),o.jsxs("span",{className:"mob-svc-explore",children:["Explore ",o.jsx($e,{size:9,strokeWidth:1.5})]})]})]})]},`mgc-${n}-${p}`)})})]})}const J5=[{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286193/nivora/home/our-expertise/living-room-design.jpg",title:"Living Room Design",desc:"Sophisticated and welcoming living spaces designed for comfort, conversation, and everyday luxury."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286195/nivora/home/our-expertise/modular-kitchen.jpg",title:"Modular Kitchen",desc:"Smart, elegant kitchens with seamless storage solutions, premium finishes, and functional layouts."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286197/nivora/home/our-expertise/bedroom-interiors.jpg",title:"Bedroom Interiors",desc:"Calm and luxurious retreats crafted with warm textures, custom furniture, and ambient lighting."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286199/nivora/home/our-expertise/bathroom-interiors.jpg",title:"Bathroom Interiors",desc:"Serene, spa-inspired bathrooms designed with premium fittings, elegant tiling, and thoughtful layouts for everyday indulgence."}];function Q5({posts:e}){const t=m.useRef(null),[n,r]=m.useState(!1);m.useEffect(()=>{const s=t.current;if(!s)return;const a=new IntersectionObserver(([l])=>r(l.isIntersecting),{threshold:.1});return a.observe(s),()=>a.disconnect()},[]);const i=["Follow","Our","Journey"];return o.jsxs("div",{ref:t,children:[o.jsx("style",{children:`
        @keyframes ig2-word-drop {
          from { transform: translateY(-110%); opacity: 0; }
          to   { transform: translateY(0);     opacity: 1; }
        }
        @keyframes ig2-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes ig2-thumb-in {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1);    }
        }
        @keyframes ig2-shimmer {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(220%)  skewX(-12deg); }
        }
        @keyframes ig2-underline {
          from { width: 0;    }
          to   { width: 100%; }
        }

        .ig2-grid {
          display: flex;
          width: 100%;
          gap: 0;
          padding: 0;
          margin: 0;
        }
        @media (max-width: 768px) {
          .ig2-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3px; padding: 0; }
        }

        .ig2-thumb {
          flex: 1;
          display: block;
          position: relative;
          overflow: hidden;
          height: 300px;
          cursor: pointer;
          opacity: 0;
          border: 2px solid transparent;
          box-sizing: border-box;
          border-radius: 0;
          transition: border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        @media (max-width: 768px) {
          .ig2-thumb { flex: none; height: auto; aspect-ratio: 1 / 1; }
        }
        .ig2-thumb.ig2-in {
          animation: ig2-thumb-in 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: var(--thumb-delay, 0s);
        }
        .ig2-thumb::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.22) 50%, transparent 65%);
          transform: translateX(-120%) skewX(-12deg);
          pointer-events: none;
          z-index: 3;
        }
        .ig2-thumb.ig2-shimmer::after {
          animation: ig2-shimmer 0.75s ease forwards;
          animation-delay: var(--shimmer-delay, 0.5s);
        }
        .ig2-thumb:hover {
          transform: scale(1.02);
          border-color: rgba(200,165,106,0.75);
          box-shadow: 0 4px 24px rgba(0,0,0,0.18);
          z-index: 2;
        }
        .ig2-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: filter 0.3s ease;
          pointer-events: none;
        }
        .ig2-overlay {
          position: absolute; inset: 0; z-index: 2;
          background: rgba(0,0,0,0);
          display: flex; align-items: center; justify-content: center;
          transition: background 0.3s ease;
        }
        .ig2-overlay svg { opacity: 0; transition: opacity 0.3s ease; }
        .ig2-thumb:hover .ig2-overlay { background: rgba(0,0,0,0.3); }
        .ig2-thumb:hover .ig2-overlay svg { opacity: 1; }

        .ig2-word-wrap { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .ig2-word { display: inline-block; transform: translateY(-110%); opacity: 0; }
        .ig2-word.ig2-in {
          animation: ig2-word-drop 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
          animation-delay: var(--word-delay, 0s);
        }

        .ig2-sub { opacity: 0; }
        .ig2-sub.ig2-in { animation: ig2-fade-up 0.5s ease forwards; animation-delay: var(--sub-delay, 0s); }

        .ig2-cta-wrap { opacity: 0; }
        .ig2-cta-wrap.ig2-in { animation: ig2-fade-up 0.5s ease forwards; animation-delay: var(--cta-delay, 0s); }

        .ig2-cta {
          position: relative;
          display: inline-flex; align-items: center; gap: 8px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 400; font-size: 11px;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: #a18661; text-decoration: none;
        }
        .ig2-cta::after {
          content: '';
          position: absolute; bottom: -2px; left: 0;
          width: 0; height: 1px; background: #a18661;
        }
        .ig2-cta-wrap.ig2-in .ig2-cta::after {
          animation: ig2-underline 0.5s ease forwards;
          animation-delay: var(--cta-ul-delay, 0s);
        }
        .ig2-cta-arrow { display: inline-flex; align-items: center; transition: transform 0.25s ease; }
        .ig2-cta:hover .ig2-cta-arrow { transform: translateX(4px); }
      `}),o.jsxs("div",{className:"text-center",style:{maxWidth:1200,margin:"0 auto 24px",padding:"0 24px"},children:[o.jsx("a",{href:"https://www.instagram.com/nivora.interiors",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#a18661",marginBottom:14,display:"inline-block",textDecoration:"none"},children:"@NivoraInteriors"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#262421",marginBottom:10,lineHeight:1.1},children:i.map((s,a)=>o.jsx("span",{className:"ig2-word-wrap",style:{marginRight:a<i.length-1?"0.28em":0},children:o.jsx("span",{className:`ig2-word${n?" ig2-in":""}`,style:{"--word-delay":`${a*.15}s`},children:s})},s))}),o.jsx("p",{className:`ig2-sub${n?" ig2-in":""}`,style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",margin:0,"--sub-delay":`${i.length*.15+.1}s`},children:"Daily design inspiration and behind-the-scenes site visits"})]}),o.jsx("div",{className:"ig2-grid",children:e.map((s,a)=>o.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:`ig2-thumb${n?" ig2-in ig2-shimmer":""}`,style:{"--thumb-delay":`${a*.1}s`,"--shimmer-delay":`${.5+a*.1}s`},children:[o.jsx("img",{src:s.image,alt:`@NivoraInteriors post ${a+1}`,loading:"lazy"}),o.jsx("div",{className:"ig2-overlay",children:o.jsx("svg",{width:"24",height:"24",fill:"white",viewBox:"0 0 24 24",style:{filter:"drop-shadow(0 1px 4px rgba(0,0,0,0.4))"},children:o.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})})]},a))}),o.jsx("div",{className:`ig2-cta-wrap${n?" ig2-in":""}`,style:{textAlign:"center",maxWidth:1200,marginTop:24,marginLeft:"auto",marginRight:"auto",padding:"0 24px","--cta-delay":`${e.length*.1+.35}s`,"--cta-ul-delay":`${e.length*.1+.55}s`},children:o.jsxs("a",{href:"https://www.instagram.com/nivora.interiors/",target:"_blank",rel:"noopener noreferrer",className:"ig2-cta",children:["SEE MORE ON INSTAGRAM ",o.jsx("span",{className:"ig2-cta-arrow",children:o.jsx($e,{size:12})})]})})]})}function Z5({splashDone:e}){var w,g;const{settings:t}=En(),n=(w=t==null?void 0:t.serviceCards)!=null&&w.length?t.serviceCards:J5,r=(g=t==null?void 0:t.instagramPosts)!=null&&g.length?t.instagramPosts:O5,i=Ut(),[s,a]=m.useState(0),l=m.useRef(null),c=m.useRef(null),u=m.useRef(null),[d,p]=m.useState(!1),[f,x]=m.useState(!1);m.useEffect(()=>{const h=()=>x(window.innerWidth<768);return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]);const v=h=>({opacity:d?1:0,transform:d?"translateX(0)":"translateX(-40px)",transition:`opacity 600ms ease-out ${h}ms, transform 600ms ease-out ${h}ms`}),b=h=>({display:"inline-flex",alignItems:"center",gap:8,opacity:d?1:0,transform:d?"translateY(0)":"translateY(14px)",transition:`opacity 500ms ease-out ${700+h*150}ms, transform 500ms ease-out ${700+h*150}ms`});return m.useEffect(()=>{const h=l.current;if(!h)return;const y=new IntersectionObserver(([S])=>{p(S.isIntersecting)},{threshold:.15,rootMargin:"0px 0px -50px 0px"});return y.observe(h),()=>y.disconnect()},[]),m.useEffect(()=>{const h=l.current,y=c.current;if(!y||!h)return;const S=()=>{if(window.innerWidth<768){y.style.transform="none";return}const k=-h.getBoundingClientRect().top/window.innerHeight;y.style.transform=`translateY(${k*30}px)`};return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]),m.useEffect(()=>{i.pathname==="/"&&(a(h=>h+1),window.scrollTo(0,0))},[i.key]),o.jsxs("div",{style:{backgroundColor:"#2D3E29"},children:[o.jsx(Y5,{splashDone:e},s),o.jsxs("section",{ref:l,className:`philosophy-section${d?" philosophy-in-view":""}`,style:{backgroundColor:"#f7f4ef",padding:"60px 1.5rem 60px"},children:[o.jsxs("div",{className:"philosophy-flex",style:{maxWidth:1100,margin:"0 auto",display:"flex",gap:"4rem",alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("div",{className:"philosophy-text-block",style:{flex:"0 0 55%",minWidth:280,backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,backgroundRepeat:"repeat"},children:[o.jsxs("div",{className:"philosophy-mobile-fade philosophy-label-row",style:{display:"flex",alignItems:"center",gap:16,marginBottom:"2.5rem",...v(0)},children:[o.jsx("div",{className:"philosophy-label-rule",style:{height:"0.5px",backgroundColor:"#b8966a",width:60}}),o.jsx("span",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.35em",color:"#b8966a",textTransform:"uppercase",whiteSpace:"nowrap"},children:"Our Philosophy"}),o.jsx("div",{className:"philosophy-label-rule",style:{height:"0.5px",backgroundColor:"#b8966a",width:60}})]}),o.jsxs("p",{className:"philosophy-mobile-fade",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem, 3.2vw, 2.75rem)",fontWeight:300,lineHeight:1.25,color:"#3b2f1e",marginBottom:"1.75rem",...v(200)},children:['"Design is not just seen —'," ",o.jsx("em",{style:{color:"#8b6914",fontStyle:"italic"},children:"it is experienced."}),'"']}),o.jsx("p",{className:"philosophy-mobile-fade",style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:"0.9375rem",lineHeight:1.85,color:"#6b5240",marginBottom:"2.5rem",...v(400)},children:"At NIVORA, every project begins with understanding — how you move through a space, what you need from it, and what makes it feel unmistakably yours. We work with refined materials, considered proportions, and timeless palettes to create interiors that hold their beauty for years, not seasons."}),o.jsxs("div",{className:"philosophy-mobile-fade",style:{...v(600)},children:[o.jsx("div",{style:{overflow:"hidden",marginBottom:"1.5rem"},children:o.jsx("div",{style:{height:"0.5px",backgroundColor:"#c9b99a",width:d?"100%":"0%",transition:"width 800ms ease-out 600ms"}})}),o.jsxs("div",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:11,letterSpacing:"3px",color:"#C9A96E",textAlign:"center",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:8,margin:0},children:[o.jsxs("span",{style:b(0),children:[o.jsx(vx,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Timeless"]}),o.jsx("span",{style:{fontSize:8,opacity:.5},children:"◆"}),o.jsxs("span",{style:b(1),children:[o.jsx($S,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Functional"]}),o.jsx("span",{style:{fontSize:8,opacity:.5},children:"◆"}),o.jsxs("span",{style:b(2),children:[o.jsx(wx,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Personal"]})]})]}),o.jsx("div",{className:"philosophy-mobile-fade",style:{marginTop:28,opacity:d?1:0,transform:d?"translateX(0)":"translateX(-40px)",transition:"opacity 600ms ease-out 1150ms, transform 600ms ease-out 1150ms"},children:o.jsxs(he,{to:"/about",style:{position:"relative",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:400,fontSize:"18px",color:"#C9A96E",textDecoration:"none",letterSpacing:"0.06em",display:"inline-block",paddingBottom:3,transition:"color 0.2s ease"},onMouseEnter:h=>{h.currentTarget.style.color="#A07840"},onMouseLeave:h=>{h.currentTarget.style.color="#C9A96E"},children:["Discover Our Story →",o.jsx("span",{style:{position:"absolute",left:0,bottom:0,height:1,backgroundColor:"currentColor",width:d?"100%":"0%",transition:"width 700ms ease-out 1550ms, background-color 0.2s ease"}})]})})]}),o.jsx("div",{className:"philosophy-image-col",style:{flex:1,minWidth:240,alignSelf:"stretch",opacity:d?1:0,transform:d?"translateX(0)":"translateX(60px)",transition:"opacity 900ms cubic-bezier(0.22,1,0.36,1) 150ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 150ms"},children:o.jsxs("div",{className:"philosophy-image-wrap",style:{position:"relative",display:f?"flex":"block",flexDirection:f?"column":void 0,width:"100%",height:f?"auto":"100%"},children:[!f&&o.jsx("div",{className:"philosophy-frame",style:{position:"absolute",top:8,left:8,right:-8,bottom:-8,border:"1px solid #C9A96E",pointerEvents:"none",zIndex:0}}),o.jsx("div",{className:"philosophy-photo-inner",style:{position:"relative",zIndex:1,overflow:"hidden",height:f?"auto":"100%",borderRadius:f?14:0,boxShadow:f?"0 8px 32px rgba(20,18,14,0.14)":"none"},children:o.jsx("img",{ref:c,src:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85",alt:"NIVORA Studio — editorial",className:"philosophy-photo",style:{width:"100%",height:f?"auto":"100%",objectFit:"cover",display:"block"},loading:"lazy"})}),o.jsxs("div",{ref:u,className:"philosophy-quote-card","data-inview":d?"true":"false",style:f?{position:"static",marginTop:16,width:"100%",backgroundColor:"rgba(10,14,8,0.88)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",border:"1.5px solid #C9A96E",outline:"1px solid rgba(201,169,110,0.45)",outlineOffset:"6px",padding:"16px 18px",boxShadow:"0 18px 40px rgba(0,0,0,0.28)",opacity:d?1:0,transform:d?"translateY(0)":"translateY(14px)",transition:"opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms"}:{position:"absolute",left:-32,bottom:-32,zIndex:2,width:"45%",maxWidth:"45%",backgroundColor:"rgba(0,0,0,0.45)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",border:"1.5px solid #C9A96E",padding:"16px",boxShadow:"0 18px 40px rgba(0,0,0,0.28)",opacity:d?1:0,transform:d?"scale(1)":"scale(0.4)",transition:"opacity 500ms ease-out 950ms, transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1) 950ms"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:28,lineHeight:.6,color:"#C9A96E",marginBottom:14,opacity:.9},className:"philosophy-quote-mark",children:'"'}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:400,fontSize:15,lineHeight:1.5,color:"#ffffff",margin:0},className:"philosophy-quote-text",children:"We don't just design spaces, we create legacies."}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:400,fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",color:"#C9A96E",marginTop:12,marginBottom:0},className:"philosophy-quote-author",children:"— Shweta, Founder"})]})]})})]}),o.jsx("style",{children:`
          @media (max-width: 767px) {

            /* ── Section horizontal padding ──────────────────────────── */
            .philosophy-section {
              padding-left: 20px !important;
              padding-right: 20px !important;
              box-sizing: border-box !important;
              overflow: hidden !important;
            }

            /* ── Layout: column, text first then image ───────────────── */
            .philosophy-flex {
              flex-direction: column !important;
              gap: 0 !important;
            }
            .philosophy-text-block {
              flex: none !important;
              min-width: 0 !important;
              width: 100% !important;
              box-sizing: border-box !important;
              order: 1 !important;
              margin-bottom: 28px !important;
            }
            .philosophy-image-col {
              flex: none !important;
              min-width: 0 !important;
              width: 100% !important;
              height: auto !important;
              order: 2 !important;
              align-self: stretch !important;
              margin: 0 !important;
            }

            /* ── Heading — responsive clamp, comfortable line-height ─── */
            .philosophy-text-block > p:first-of-type {
              font-size: clamp(1.4rem, 5.5vw, 1.8rem) !important;
              line-height: 1.45 !important;
            }

            /* ── Label flanking rules — shorter on narrow screens ─────── */
            .philosophy-label-row {
              gap: 10px !important;
            }
            .philosophy-label-rule {
              width: 36px !important;
              flex-shrink: 0 !important;
            }

            /* ── Image wrap — column stack, image on top, card below ─── */
            .philosophy-image-wrap {
              display: flex !important;
              flex-direction: column !important;
              align-items: stretch !important;
              position: relative !important;
              width: 100% !important;
              height: auto !important;
              min-height: 0 !important;
              overflow: visible !important;
              border-radius: 0 !important;
              margin: 0 !important;
            }
            .philosophy-frame {
              display: none !important;
            }

            /* ── Photo inner — full width, natural height ────────────── */
            .philosophy-photo-inner {
              width: 100% !important;
              flex-shrink: 1 !important;
              height: auto !important;
              min-height: 0 !important;
              overflow: hidden !important;
              border-radius: 14px !important;
              position: relative !important;
              box-shadow: 0 8px 32px rgba(20,18,14,0.14) !important;
            }

            /* ── Photo — static flow so photo-inner gets natural height ─ */
            .philosophy-photo-inner .philosophy-photo {
              position: static !important;
              inset: auto !important;
              width: 100% !important;
              height: auto !important;
              max-width: 100% !important;
              object-fit: unset !important;
              object-position: unset !important;
              display: block !important;
              transform: none !important;
            }

            /* ── Quote card — full-width block below image ───────────── */
            .philosophy-quote-card {
              position: static !important;
              top: auto !important; left: auto !important;
              right: auto !important; bottom: auto !important;
              width: 100% !important;
              flex-shrink: 1 !important;
              max-width: 100% !important;
              margin: 16px 0 0 0 !important;
              background-color: rgba(10,14,8,0.88) !important;
              background: rgba(10,14,8,0.88) !important;
              backdrop-filter: blur(6px) !important;
              -webkit-backdrop-filter: blur(6px) !important;
              border: 1.5px solid #C9A96E !important;
              outline: 1px solid rgba(201,169,110,0.45) !important;
              outline-offset: 6px !important;
              border-radius: 0px !important;
              padding: 16px 18px !important;
              box-shadow: 0 18px 40px rgba(0,0,0,0.28) !important;
              display: block !important;
              justify-content: unset !important;
              z-index: auto !important;
              transform: translateY(14px) !important;
              opacity: 0 !important;
              transition: opacity 500ms ease-out 300ms,
                          transform 500ms ease-out 300ms !important;
            }
            .philosophy-in-view .philosophy-quote-card {
              transform: translateY(0) !important;
              opacity: 1 !important;
            }

            /* ── Quote card typography ───────────────────────────────── */
            .philosophy-quote-mark {
              font-size: 22px !important;
              line-height: 0.8 !important;
              margin-bottom: 10px !important;
            }
            .philosophy-quote-text {
              font-size: 12.5px !important;
              line-height: 1.55 !important;
              margin: 0 !important;
            }
            .philosophy-quote-author {
              font-size: 10px !important;
              letter-spacing: 1.5px !important;
              margin-top: 10px !important;
              margin-bottom: 0 !important;
            }

            /* ── Text block entrance animations (slide up) ───────────── */
            .philosophy-mobile-fade {
              transform: translateY(20px) !important;
            }
            .philosophy-in-view .philosophy-mobile-fade {
              transform: translateY(0) !important;
            }
          }
        `})]}),o.jsx(W5,{}),o.jsx(H5,{}),o.jsxs("section",{className:"services-section-home",style:{backgroundColor:"#F7F4EF",padding:"7rem 1.5rem"},children:[o.jsx("style",{children:`
          /* ── Service card shell ── */
          .hsvc-card {
            position: relative;
            border-radius: 24px;
            overflow: hidden;
            height: 380px;
            border: 1px solid #E8DED1;
            text-decoration: none;
            display: block;
            cursor: pointer;
            background: #F3EEE7;
            transition: transform 500ms cubic-bezier(0.22,1,0.36,1),
                        box-shadow 500ms cubic-bezier(0.22,1,0.36,1);
          }
          .hsvc-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 28px 64px rgba(38,36,33,0.13), 0 4px 16px rgba(38,36,33,0.07);
          }

          /* Image zoom */
          .hsvc-img {
            transition: transform 700ms cubic-bezier(0.22,1,0.36,1);
          }
          .hsvc-card:hover .hsvc-img { transform: scale(1.08); }

          /* Gradient overlay */
          .hsvc-overlay {
            position: absolute; inset: 0; pointer-events: none;
            background: linear-gradient(
              to bottom,
              rgba(15,12,10,0.16) 0%,
              rgba(10,8,6,0.60) 52%,
              rgba(6,5,4,0.92) 100%
            );
            transition: background 500ms ease;
          }
          .hsvc-card:hover .hsvc-overlay {
            background: linear-gradient(
              to bottom,
              rgba(15,12,10,0.30) 0%,
              rgba(10,8,6,0.80) 42%,
              rgba(6,5,4,0.97) 100%
            );
          }

          /* ── TOP LAYER: number badge ── */
          .hsvc-num {
            position: absolute; top: 1.5rem; left: 1.6rem; z-index: 4;
            font-family: 'Jost', sans-serif; font-weight: 300;
            font-size: 10px; letter-spacing: 0.3em;
            color: rgba(200,165,106,0.7); margin: 0;
          }

          /* ── MIDDLE LAYER: icon + title — always visible, never moves into detail area ── */
          .hsvc-mid-layer {
            position: absolute;
            left: 1.6rem; right: 1.6rem; bottom: 168px;
            z-index: 3;
            transition: transform 500ms cubic-bezier(0.22,1,0.36,1);
          }
          .hsvc-card:hover .hsvc-mid-layer { transform: translateY(-16px); }

          .hsvc-icon-wrap {
            width: 40px; height: 40px; border-radius: 10px;
            background: rgba(200,165,106,0.15);
            display: flex; align-items: center; justify-content: center;
            margin-bottom: 0.6rem;
            transition: background 400ms ease;
          }
          .hsvc-card:hover .hsvc-icon-wrap { background: rgba(200,165,106,0.28); }

          .hsvc-title {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 300;
            font-size: clamp(1.25rem, 1.8vw, 1.55rem);
            color: #f5f0e8;
            line-height: 1.2;
            margin: 0;
            letter-spacing: -0.005em;
          }

          /* ── BOTTOM LAYER: gold line + desc + explore — hidden at rest ── */
          /* Occupies bottom 25px → ~165px. Never overlaps mid-layer (bottom: 168px). */
          .hsvc-detail-layer {
            position: absolute;
            left: 1.6rem; right: 1.6rem; bottom: 1.5rem;
            z-index: 3;
            opacity: 0;
            transform: translateY(18px);
            pointer-events: none;
            transition: opacity 420ms cubic-bezier(0.22,1,0.36,1) 55ms,
                        transform 420ms cubic-bezier(0.22,1,0.36,1) 55ms;
          }
          .hsvc-card:hover .hsvc-detail-layer {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
          }

          /* Gold accent line */
          .hsvc-gold-line {
            width: 0; height: 1.5px;
            background: #C8A56A; border-radius: 2px;
            transition: width 500ms cubic-bezier(0.22,1,0.36,1);
            margin: 0 0 0.75rem;
          }
          .hsvc-card:hover .hsvc-gold-line { width: 36px; }

          /* Description — capped at 3 lines to guarantee no overflow */
          .hsvc-desc {
            font-family: 'Jost', sans-serif; font-weight: 300;
            font-size: 12.5px; color: rgba(245,240,232,0.78);
            line-height: 1.72; margin: 0;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Explore CTA */
          .hsvc-explore {
            display: inline-flex; align-items: center; gap: 6px;
            margin-top: 0.85rem;
            font-family: 'Jost', sans-serif; font-weight: 300;
            font-size: 10px; letter-spacing: 0.22em;
            text-transform: uppercase; color: #C8A56A;
          }

          /* Grids */
          .hsvc-grid-r1 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .hsvc-grid-r2 {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
            margin: 20px auto 0; max-width: 895px;
          }

          @media (max-width: 1100px) {
            .hsvc-grid-r1 { grid-template-columns: repeat(2, 1fr) !important; }
            .hsvc-grid-r2 { grid-template-columns: repeat(2, 1fr) !important; max-width: 100% !important; }
            .hsvc-card { height: 360px !important; }
            .hsvc-mid-layer { bottom: 160px !important; }
          }
          @media (max-width: 767px) {
            .hsvc-grid-r1, .hsvc-grid-r2 { display: none !important; }
          }
        `}),o.jsx("div",{className:"hsvc-desktop-header",children:o.jsx(se,{children:o.jsxs("div",{style:{textAlign:"center",marginBottom:"4.5rem",maxWidth:640,margin:"0 auto 4.5rem"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"1rem"},children:"Our Services"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.25rem)",color:"#262421",lineHeight:1.1,marginBottom:"1.1rem",letterSpacing:"-0.01em"},children:["Spaces Designed Across",o.jsx("br",{}),"Every Experience"]}),o.jsx("p",{className:"svc-header-desc",style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",lineHeight:1.85,margin:0},children:"From private residences to large-scale environments, we design spaces that balance beauty, function and identity."})]})})}),o.jsx("div",{className:"hsvc-desktop-cards",style:{maxWidth:1200,margin:"0 auto"},children:o.jsx("div",{className:"hsvc-grid-r1",children:Fx.slice(0,4).map((h,y)=>{const S=h.icon;return o.jsx(se,{delay:y*.09,children:o.jsxs(he,{to:"/services",className:"hsvc-card",children:[o.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",borderRadius:24},children:o.jsx("img",{src:h.img,alt:h.title,className:"hsvc-img",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},loading:"lazy"})}),o.jsx("div",{className:"hsvc-overlay"}),o.jsx("p",{className:"hsvc-num",children:h.num}),o.jsxs("div",{className:"hsvc-mid-layer",children:[o.jsx("div",{className:"hsvc-icon-wrap",children:o.jsx(S,{size:18,color:"#C8A56A",strokeWidth:1.4})}),o.jsx("h3",{className:"hsvc-title",children:h.title})]}),o.jsxs("div",{className:"hsvc-detail-layer",children:[o.jsx("div",{className:"hsvc-gold-line"}),o.jsx("p",{className:"hsvc-desc",children:h.desc}),o.jsxs("span",{className:"hsvc-explore",children:["Explore ",o.jsx($e,{size:10,strokeWidth:1.5})]})]})]})},h.title)})})}),o.jsx(q5,{})]}),o.jsxs("section",{style:{backgroundColor:"#FAF8F4",padding:"8px 1.5rem"},children:[o.jsx("style",{children:`
          .compare-slider-container {
            aspect-ratio: 16 / 10;
          }
          @media (max-width: 640px) {
            .compare-slider-container {
              aspect-ratio: 16 / 10;
            }
          }
        `}),o.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[o.jsxs(se,{children:[o.jsx("style",{children:`
              .trf-header-row {
                position: relative;
                display: flex;
                align-items: flex-start;
                justify-content: center;
                margin-bottom: 4rem;
              }
              .trf-header-left {
                text-align: center;
              }
              .trf-header-right {
                position: absolute;
                top: 0;
                right: 0;
                width: 320px;
                padding-top: 0.35rem;
                text-align: right;
              }
              @media (max-width: 700px) {
                .trf-header-row { flex-direction: column; align-items: center; }
                .trf-header-left { text-align: center; }
                .trf-header-right { position: static; width: auto; text-align: center; padding-top: 0; }
              }
            `}),o.jsxs("div",{className:"trf-header-row",children:[o.jsxs("div",{className:"trf-header-left",children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"1rem"},children:"Transformations"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.25rem)",color:"#262421",lineHeight:1.1,marginBottom:"1rem",letterSpacing:"-0.01em"},children:"Before & After"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",lineHeight:1.85,margin:0},children:"See how thoughtful design transforms spaces into refined living experiences."})]}),o.jsx("div",{className:"trf-header-right",children:o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(38,36,33,0.38)",lineHeight:1.9,margin:0},children:"Slide to discover how we transform raw spaces into refined living experiences."})})]})]}),o.jsx(se,{delay:.18,children:o.jsx($5,{})})]})]}),o.jsxs("section",{style:{backgroundColor:"#F8F6F2",padding:"72px 0 80px"},children:[o.jsx("style",{children:`
          .oe-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
          }
          .oe-card {
            background: #fff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 2px 16px rgba(20,18,14,0.06);
            transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s ease;
            display: flex;
            flex-direction: column;
          }
          .oe-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 48px rgba(20,18,14,0.13);
          }
          .oe-img-wrap {
            width: 100%;
            height: 240px;
            overflow: hidden;
            flex-shrink: 0;
          }
          .oe-img {
            width: 100%; height: 100%;
            object-fit: cover; display: block;
            transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
          }
          .oe-card:hover .oe-img { transform: scale(1.06); }
          .oe-body {
            padding: 24px 24px 28px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .oe-divider {
            width: 28px; height: 1px;
            background: #C9A96E;
            margin: 0 0 14px;
            display: block;
          }
          .oe-title {
            font-family: 'Playfair Display', serif;
            font-weight: 400;
            font-size: 1.18rem;
            color: #1a1612;
            line-height: 1.2;
            margin: 0 0 10px;
            letter-spacing: -0.01em;
          }
          .oe-desc {
            font-family: 'Jost', sans-serif;
            font-weight: 300;
            font-size: 13px;
            color: rgba(26,22,18,0.50);
            line-height: 1.75;
            margin: 0;
            flex: 1;
          }
          @media (max-width: 1023px) {
            .oe-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 0 1.5rem; }
          }
          @media (max-width: 767px) {
            .oe-grid { display: none !important; }
            .oe-carousel-wrap { display: block !important; }
            .oe-img-wrap { height: 220px; }
          }
          .oe-carousel-wrap { display: none; }
        `}),o.jsx("div",{style:{maxWidth:1280,margin:"0 auto",padding:"0 2rem"},children:o.jsxs(N.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.8,ease:"easeOut"},style:{textAlign:"center",marginBottom:"48px"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.46em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"14px"},children:"Our Expertise"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.6rem, 2.8vw, 2.6rem)",color:"#1a1612",lineHeight:1.1,margin:"0 0 18px",letterSpacing:"-0.015em"},children:["Spaces Designed for",o.jsx("br",{}),"Every Lifestyle"]}),o.jsx("div",{style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E 40%, transparent)",margin:"0 auto 16px"}}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(26,22,18,0.44)",lineHeight:1.7,maxWidth:420,margin:"0 auto"},children:"Thoughtfully crafted interiors that blend beauty, functionality, and timeless elegance."})]})}),o.jsx("div",{className:"oe-grid",children:n.map((h,y)=>o.jsxs(N.div,{className:"oe-card",initial:{opacity:0,y:36},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7,ease:"easeOut",delay:y*.1},children:[o.jsx("div",{className:"oe-img-wrap",children:o.jsx("img",{src:h.img,alt:h.title,className:"oe-img",loading:"lazy",draggable:!1})}),o.jsxs("div",{className:"oe-body",children:[o.jsx("span",{className:"oe-divider"}),o.jsx("h3",{className:"oe-title",children:h.title}),o.jsx("p",{className:"oe-desc",children:h.desc})]})]},h.title))}),o.jsx("div",{className:"oe-carousel-wrap",children:o.jsx(M5,{cards:n})})]}),o.jsx(X5,{}),o.jsx("section",{style:{background:"#FAF8F4",padding:"5rem 0"},children:o.jsx(Q5,{posts:r})}),o.jsxs("section",{className:"relative overflow-hidden",style:{backgroundColor:"#33452F",paddingTop:70,paddingBottom:70},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 30% 50%, #b8966a 0%, transparent 60%)"}})}),o.jsx("div",{className:"relative max-w-4xl mx-auto px-6 text-center",children:o.jsxs(se,{children:[o.jsx("div",{style:{width:80,height:1,backgroundColor:"#C9A96E",margin:"0 auto 24px"}}),o.jsx("p",{className:"text-[#b8966a] text-[10px] tracking-[0.4em] uppercase mb-6",children:"Currently Accepting Projects"}),o.jsxs("h2",{className:"font-serif text-4xl md:text-6xl text-[#f5f0e8] font-light leading-tight mb-6",style:{fontFamily:"'Playfair Display', serif",fontWeight:400},children:["Ready to Transform",o.jsx("br",{}),"Your Space?"]}),o.jsx("p",{className:"text-[#f5f0e8]/50 font-light mb-10 max-w-lg mx-auto leading-relaxed",children:"A complimentary consultation. No pressure, just possibilities."}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:12,background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:"#2D3E29",fontFamily:"'Cinzel', serif",fontWeight:600,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",padding:"20px 52px",textDecoration:"none",transition:"background 0.3s ease, box-shadow 0.3s ease",boxShadow:"0 6px 30px rgba(168,133,79,0.40)"},onMouseEnter:h=>{h.currentTarget.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",h.currentTarget.style.boxShadow="0 10px 40px rgba(168,133,79,0.55)"},onMouseLeave:h=>{h.currentTarget.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",h.currentTarget.style.boxShadow="0 6px 30px rgba(168,133,79,0.40)"},children:["Begin Your Project ",o.jsx($e,{size:14})]})]})})]})]})}function ek(){const e=m.useRef(null),[t,n]=m.useState(!1);return m.useEffect(()=>{const r=e.current;if(!r)return;const i=()=>n(!0),s=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(),s.disconnect())},{threshold:.05,rootMargin:"0px 0px 60px 0px"});s.observe(r);const a=r.getBoundingClientRect();return a.top<window.innerHeight&&a.bottom>0&&(i(),s.disconnect()),()=>s.disconnect()},[]),{ref:e,visible:t}}function tk({project:e,index:t,delay:n}){const{ref:r,visible:i}=ek(),s=String(t+1).padStart(2,"0");return o.jsx("div",{ref:r,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(36px)",transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${n}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${n}ms`},children:o.jsxs(he,{to:`/portfolio/${e.id}`,className:"ptf-card",style:{display:"block",position:"relative",overflow:"hidden",borderRadius:24,textDecoration:"none",cursor:"pointer",background:"#e4ddd4",aspectRatio:"16 / 10"},children:[o.jsx("img",{src:e.coverImage,alt:e.name,className:"ptf-img",loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:1,display:"block",transition:"transform 0.65s cubic-bezier(0.16,1,0.3,1)",zIndex:2}}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(6,10,6,0) 35%, rgba(6,10,6,0.80) 100%)",zIndex:3}}),o.jsx("div",{className:"ptf-hover-overlay",style:{position:"absolute",inset:0,background:"rgba(8,14,8,0.38)",opacity:0,transition:"opacity 0.45s ease",zIndex:4}}),o.jsx("div",{className:"ptf-accent-line",style:{position:"absolute",bottom:0,left:22,right:22,height:2,background:"linear-gradient(90deg, #C9A96E, #e8d5a3 50%, #C9A96E)",width:0,transition:"width 0.5s cubic-bezier(0.16,1,0.3,1)",zIndex:10}}),o.jsx("div",{style:{position:"absolute",top:20,left:22,zIndex:8,fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,0.45)",letterSpacing:"0.2em"},children:s}),o.jsx("div",{style:{position:"absolute",top:16,right:18,zIndex:8,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:9,color:"rgba(255,255,255,0.55)",letterSpacing:"0.25em",textTransform:"uppercase",background:"rgba(0,0,0,0.28)",backdropFilter:"blur(6px)",padding:"5px 10px",borderRadius:20,border:"1px solid rgba(255,255,255,0.1)"},children:e.category}),o.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"0 22px 22px",zIndex:9},children:[o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:22,color:"#f5f0e8",margin:0,lineHeight:1.2,letterSpacing:"0.01em"},children:e.name}),o.jsxs("div",{className:"ptf-hover-content",style:{overflow:"hidden",maxHeight:0,opacity:0,transition:"max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease"},children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:12,color:"rgba(245,240,232,0.7)",margin:"8px 0 0",lineHeight:1.6,letterSpacing:"0.01em"},children:e.location}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:14,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:9,color:"#a18661",letterSpacing:"0.25em",textTransform:"uppercase"},children:["View Project ",o.jsx($e,{size:10,strokeWidth:1.5})]})]})]})]})})}function nk(){return o.jsx("div",{style:{borderRadius:24,background:"linear-gradient(90deg, #e4ddd4 25%, #ede6dc 50%, #e4ddd4 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.4s infinite",aspectRatio:"16 / 10"}})}function rk(){const[e,t]=m.useState([]),[n,r]=m.useState(!0),[i,s]=m.useState(null);m.useEffect(()=>{Ix().then(l=>{t(l.slice(0,8)),r(!1)}).catch(l=>{console.error("Portfolio fetch error:",l),s("Failed to load projects. Please try again."),r(!1)})},[]);const a=e;return o.jsxs("div",{style:{background:"#f5f2ed",minHeight:"100vh",paddingTop:80},children:[o.jsx("style",{children:`
        @keyframes shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
        .ptf-card:hover .ptf-img { transform: scale(1.06) !important; }
        .ptf-card:hover .ptf-hover-overlay { opacity: 1 !important; }
        .ptf-card:hover .ptf-hover-content { max-height: 80px !important; opacity: 1 !important; }
        .ptf-card:hover .ptf-accent-line { width: calc(100% - 44px) !important; }
        .ptf-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (max-width: 640px) {
          .ptf-grid { grid-template-columns: 1fr; }
        }
      `}),o.jsxs("section",{style:{textAlign:"center",padding:"80px 24px 60px"},children:[o.jsx(N.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,color:"#D4B483",letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:24},children:"Our Work"}),o.jsx(N.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.8rem, 7vw, 5.5rem)",color:"#262421",lineHeight:1.05,marginBottom:32,letterSpacing:"-0.01em"},children:"Spaces That Tell Your Story"}),o.jsx(N.div,{initial:{width:0},animate:{width:48},transition:{duration:.8,delay:.3},style:{height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 32px"}}),o.jsxs(N.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.4},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.55)",lineHeight:1.8,maxWidth:480,margin:"0 auto"},children:["Every project is a reflection of the people who live and work there.",o.jsx("br",{}),"See how thoughtful design transforms spaces into something truly special."]})]}),o.jsx("section",{style:{maxWidth:1100,margin:"0 auto",padding:"0 24px 80px"},children:i?o.jsx("div",{style:{textAlign:"center",padding:"60px 0",color:"#2E2A26",opacity:.6},children:o.jsx("p",{children:i})}):o.jsx("div",{className:"ptf-grid",children:n?Array.from({length:8}).map((l,c)=>o.jsx(nk,{},c)):a.map((l,c)=>o.jsx(tk,{project:l,index:c,delay:Math.min(c*80,400)},l.id))})}),!n&&!i&&o.jsxs("section",{style:{textAlign:"center",padding:"80px 24px",borderTop:"1px solid rgba(201,169,110,0.2)",background:"rgba(201,169,110,0.04)"},children:[o.jsx(N.p,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(28,40,24,0.38)",lineHeight:1.8,marginBottom:32},children:"Ready to create a space that tells your story?"}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:12,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.26em",textTransform:"uppercase",color:"#1C2818",border:"1px solid rgba(28,40,24,0.3)",padding:"18px 52px",textDecoration:"none",borderRadius:2,transition:"all 0.4s ease"},onMouseEnter:l=>{const c=l.currentTarget;c.style.background="#2A3926",c.style.borderColor="#2A3926",c.style.color="#f5f0e8",c.style.transform="translateY(-2px)"},onMouseLeave:l=>{const c=l.currentTarget;c.style.background="transparent",c.style.borderColor="rgba(28,40,24,0.3)",c.style.color="#1C2818",c.style.transform="translateY(0)"},children:["Start Your Project ",o.jsx($e,{size:13,strokeWidth:1.5})]})]})]})}const em=[{num:"01",title:"Discover",text:"A free consultation to understand your lifestyle, vision, and budget — before anything is planned.",side:"left"},{num:"02",title:"Visualise",text:"3D renders and mood boards bring your space to life before a single item is moved or purchased.",side:"right"},{num:"03",title:"Execute",text:"Master craftsmen, transparent timelines, and on-site precision deliver your design flawlessly.",side:"left"},{num:"04",title:"Reveal",text:"A styled, ready-to-move-in space that exceeds every expectation and reflects your vision.",side:"right"},{num:"05",title:"Handover",text:"Your space, fully ready. A lasting relationship that continues well beyond the final delivery.",side:"left"}];function ik({active:e}){return o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{display:"block"},children:o.jsx(N.path,{d:"M 3.5 9 L 7.5 13 L 14.5 5",stroke:"#C9A96E",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",initial:{pathLength:0,opacity:0},animate:e?{pathLength:1,opacity:1}:{pathLength:0,opacity:0},transition:{duration:.65,ease:"easeInOut",delay:.35}})})}function ok({active:e,mobile:t}){return o.jsxs(N.div,{className:"process-diamond-outer",initial:{scale:0,opacity:0},animate:e?{scale:1,opacity:1}:{scale:0,opacity:0},transition:t?{duration:.5,ease:"easeOut"}:{duration:.55,ease:[.16,1,.3,1]},style:{width:52,height:52,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,willChange:"transform, opacity"},children:[o.jsx(N.div,{animate:t?e?{opacity:[.4,1,.4],scale:[.9,1.25,.9]}:{opacity:0,scale:.8}:e?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:t?e?{duration:2,repeat:1/0,ease:"easeInOut"}:{duration:.4}:{duration:.7,delay:.3},style:{position:"absolute",inset:0,borderRadius:2,background:"radial-gradient(ellipse at center, rgba(201,169,110,0.18) 0%, transparent 70%)",transform:"rotate(45deg)",willChange:"transform, opacity"}}),o.jsx(N.div,{className:"process-diamond-inner",animate:e?{background:"#2A3926",borderColor:"#C9A96E"}:{background:"#F5F2ED",borderColor:"rgba(201,169,110,0.4)"},transition:{duration:.45},style:{width:38,height:38,border:"1.5px solid rgba(201,169,110,0.4)",transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:o.jsx("div",{style:{transform:"rotate(-45deg)"},children:o.jsx(ik,{active:e})})}),t&&o.jsx(N.div,{initial:{scale:1,opacity:0},animate:e?{scale:2.6,opacity:[0,.65,0]}:{scale:1,opacity:0},transition:{duration:1,ease:"easeOut",delay:.5},style:{position:"absolute",inset:0,border:"1.5px solid #C9A96E",borderRadius:2,transform:"rotate(45deg)",pointerEvents:"none",willChange:"transform, opacity"}})]})}function sk({active:e}){return o.jsx("div",{className:"process-line-outer",style:{display:"flex",justifyContent:"center",position:"relative",zIndex:1},children:o.jsx("div",{className:"process-line-track",style:{width:1,height:90,background:"rgba(201,169,110,0.14)",position:"relative",overflow:"hidden"},children:o.jsx(N.div,{initial:{scaleY:0},animate:e?{scaleY:1}:{scaleY:0},transition:{duration:.7,ease:[.16,1,.3,1],delay:.15},style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, #C9A96E 0%, rgba(201,169,110,0.45) 100%)",transformOrigin:"top",willChange:"transform"}})})})}function tm({step:e,active:t,align:n,mobile:r,side:i}){const s=r?{opacity:0,y:18}:{opacity:0,y:14},a=t?{opacity:1,y:0}:s,l=r?{duration:.6,ease:"easeOut",delay:.2}:{duration:.6,ease:[.16,1,.3,1],delay:.15};return o.jsxs("div",{style:{textAlign:n},children:[o.jsxs(N.h3,{className:"process-title",initial:s,animate:a,transition:l,style:{fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontWeight:400,fontSize:"clamp(1.6rem, 2.5vw, 2.1rem)",color:"#262421",margin:"0 0 12px",lineHeight:1.1,position:r?"relative":void 0,display:r?"inline-block":void 0,willChange:"transform, opacity"},children:[e.title,r&&o.jsx(N.span,{"aria-hidden":"true",initial:{backgroundPositionX:"-150%"},animate:t?{backgroundPositionX:"250%"}:{backgroundPositionX:"-150%"},transition:{duration:1,delay:.55,ease:"easeInOut"},style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(100deg, transparent 35%, rgba(201,169,110,0.9) 50%, transparent 65%)",backgroundSize:"200% 100%",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",pointerEvents:"none"},children:e.title})]}),o.jsx(N.p,{className:"process-desc",initial:{opacity:0,y:r?20:10,filter:r?"blur(4px)":"blur(0px)"},animate:t?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:r?20:10,filter:r?"blur(4px)":"blur(0px)"},transition:{duration:r?.4:.6,ease:"easeOut",delay:r?.4:.25},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(28,40,24,0.52)",lineHeight:1.8,margin:0,willChange:"transform, opacity"},children:e.text})]})}function ak({step:e,index:t,isMobile:n,onVisible:r}){const i=m.useRef(null),s=kn(i,{once:!1,margin:"0px 0px -80px 0px",amount:.4});m.useEffect(()=>{r(t,s)},[s,t,r]);const a=e.side==="left",l=u=>({hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}),c=n?{duration:.5,ease:"easeOut"}:{duration:.65,ease:[.16,1,.3,1]};return o.jsxs("div",{ref:i,style:{display:"grid",gridTemplateColumns:"1fr 52px 1fr",alignItems:"center",gap:0},className:"timeline-step-row",children:[o.jsx("div",{style:{paddingRight:48,display:"flex",justifyContent:"flex-end"},className:"tl-left-cell",children:a?o.jsx(N.div,{className:"process-content-box",variants:l(),initial:"hidden",animate:s?"visible":"hidden",transition:c,style:{maxWidth:320,width:"100%",willChange:"transform, opacity"},children:o.jsx(tm,{step:e,active:s,align:"right",mobile:n,side:"left"})}):o.jsx("div",{})}),o.jsx(ok,{active:s,mobile:n}),o.jsx("div",{style:{paddingLeft:48},className:"tl-right-cell",children:a?o.jsx("div",{}):o.jsx(N.div,{className:"process-content-box",variants:l(),initial:"hidden",animate:s?"visible":"hidden",transition:c,style:{maxWidth:320,width:"100%",willChange:"transform, opacity"},children:o.jsx(tm,{step:e,active:s,align:"left",mobile:n,side:"right"})})})]})}function lk({isMobile:e}){const t=m.useRef(null),n=kn(t,{once:!e,amount:.5}),r="Our Process".split(" ");return o.jsxs("div",{style:{textAlign:"center",marginBottom:88,padding:"0 24px"},className:"process-header",children:[o.jsx(N.p,{initial:{opacity:0,y:10,scale:e?.8:1},whileInView:{opacity:1,y:0,scale:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",margin:"0 0 14px",willChange:"transform, opacity"},children:"How We Do It"}),o.jsxs("div",{ref:t,children:[o.jsx(N.h2,{className:"process-heading-desktop",initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.1},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 3.5vw, 3rem)",color:"#262421",lineHeight:1.04,margin:"0 0 18px",letterSpacing:"-0.01em"},children:"Our Process"}),o.jsx("h2",{className:"process-heading-mobile",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 3.5vw, 3rem)",color:"#262421",lineHeight:1.04,margin:"0 0 18px",letterSpacing:"-0.01em",justifyContent:"center",gap:"0.35em",perspective:500},children:r.map((i,s)=>o.jsx(N.span,{style:{display:"inline-block",transformStyle:"preserve-3d",willChange:"transform, opacity"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.55,delay:s*.15,ease:[.16,1,.3,1]},children:i},s))})]}),o.jsx(N.div,{initial:{scaleX:0},whileInView:{scaleX:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.7,delay:.25},style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 18px",transformOrigin:"center"}}),o.jsx(N.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.6,delay:.3},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.44)",lineHeight:1.8},children:"From first conversation to final reveal — a seamless, end-to-end journey."})]})}function ck(){const[e,t]=m.useState(new Set),[n,r]=m.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 768px)").matches:!1),i=m.useRef(null),s=kn(i,{once:!1,amount:.2});m.useEffect(()=>{const l=window.matchMedia("(max-width: 768px)");r(l.matches);const c=u=>r(u.matches);return l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[]);const a=m.useCallback((l,c)=>{t(u=>{const d=u.has(l);if(c&&!d)return new Set([...u,l]);if(!c&&d){const p=new Set(u);return p.delete(l),p}return u})},[n]);return o.jsxs("section",{style:{background:"#F5F2ED",padding:"120px 0"},children:[o.jsx(lk,{isMobile:n}),o.jsxs("div",{ref:i,style:{maxWidth:860,margin:"0 auto",padding:"0 24px",position:"relative"},className:"tl-container",children:[o.jsxs("div",{className:"process-mobile-line-outer",style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:1,height:"100%",background:"rgba(201,169,110,0.14)",overflow:"hidden",zIndex:3,pointerEvents:"none"},children:[o.jsx(N.div,{initial:{scaleY:0},animate:s?{scaleY:1}:{scaleY:0},transition:{duration:1.5,ease:"easeInOut"},style:{position:"absolute",inset:0,transformOrigin:"top",background:"linear-gradient(to bottom, #C9A96E 0%, rgba(201,169,110,0.45) 100%)",willChange:"transform"}}),o.jsx(N.div,{animate:s?{y:["-100%","110%"]}:{y:"-100%"},transition:s?{duration:2.5,ease:"linear",repeat:1/0,repeatDelay:.3}:{duration:0},style:{position:"absolute",top:0,left:0,right:0,height:"25%",background:"linear-gradient(to bottom, transparent 0%, rgba(201,169,110,0.7) 50%, transparent 100%)",pointerEvents:"none",willChange:"transform"}})]}),em.map((l,c)=>o.jsxs("div",{children:[o.jsx(ak,{step:l,index:c,isMobile:n,onVisible:a}),c<em.length-1&&o.jsx(sk,{active:e.has(c)})]},l.num))]}),o.jsxs(N.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},style:{textAlign:"center",marginTop:80,padding:"0 24px"},children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.35em",color:"rgba(28,40,24,0.32)",textTransform:"uppercase",margin:"0 0 28px"},children:"End-to-End  ·  Transparent  ·  Hassle-Free"}),o.jsx(he,{to:"/contact",style:{display:"inline-block",fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",background:"#2A3926",color:"#ffffff",padding:"18px 52px",textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:l=>{const c=l.currentTarget;c.style.background="#3a5e3c",c.style.transform="translateY(-2px)"},onMouseLeave:l=>{const c=l.currentTarget;c.style.background="#2A3926",c.style.transform="translateY(0)"},children:"Book Free Consultation"})]}),o.jsx("style",{children:`
        .process-heading-mobile { display: none; }

        /* Mobile: keep the zig-zag layout, scaled down — center gold line, alternating sides */
        @media (max-width: 768px) {
          .process-header {
            margin-bottom: 40px !important;
            padding: 32px 24px 0 !important;
          }
          .process-heading-desktop {
            display: none !important;
          }
          .process-heading-mobile {
            display: flex !important;
          }
          .tl-container {
            padding: 0 !important;
          }
          .timeline-step-row {
            grid-template-columns: 1fr 36px 1fr !important;
            gap: 0 !important;
          }
          .tl-left-cell {
            padding-left: 12px !important;
            padding-right: 8px !important;
            display: flex !important;
          }
          .tl-right-cell {
            padding-right: 12px !important;
            padding-left: 8px !important;
            display: block !important;
          }
          .process-content-box {
            max-width: 100% !important;
            width: 100% !important;
            padding: 12px !important;
          }
          .process-diamond-outer {
            width: 36px !important;
            height: 36px !important;
          }
          .process-diamond-inner {
            width: 26px !important;
            height: 26px !important;
          }
          .process-title {
            font-size: 18px !important;
            margin: 0 0 12px !important;
          }
          .process-desc {
            font-size: 12px !important;
            line-height: 1.6 !important;
          }
          .process-line-outer .process-line-track {
            width: 1px !important;
            height: 48px !important;
          }
          .process-mobile-line-outer {
            display: block !important;
          }
          .process-line-outer {
            display: none !important;
          }
        }

        /* Desktop/tablet: hide the mobile-only continuous scroll line */
        .process-mobile-line-outer {
          display: none;
        }

        /* Tablet: tighten padding */
        @media (max-width: 1024px) and (min-width: 769px) {
          .timeline-step-row {
            grid-template-columns: 1fr 52px 1fr !important;
          }
          .tl-left-cell {
            padding-right: 28px !important;
          }
          .tl-right-cell {
            padding-left: 28px !important;
          }
        }
      `})]})}const uk=[{num:"01",title:"Residential Interiors",desc:"Designing elegant homes and living spaces that blend comfort, functionality, and timeless beauty.",img:Gu},{num:"02",title:"Commercial Interiors",desc:"Creating productive offices, clinics, retail stores, and professional workspaces.",img:Xu},{num:"03",title:"Hospitality Interiors",desc:"Crafting memorable guest experiences through hotels, cafés, restaurants, and hospitality environments.",img:qu},{num:"04",title:"Architecture & Space Planning",desc:"Planning layouts, elevations, facades, and architectural concepts for optimized spaces.",img:Ju},{num:"05",title:"2D & 3D Visualization",desc:"Concept drawings, renders and visual development before execution begins.",img:Qu},{num:"06",title:"Developer Solutions",desc:"Sample flats, amenities and curated experiences that enhance property value.",img:Zu},{num:"07",title:"Renovation & Makeovers",desc:"Transform existing spaces through upgrades, modernization and thoughtful redesign.",img:ed}],nm=[{num:"01",eyebrow:"01 — RESIDENTIAL INTERIORS",title:"Residential Interiors",intro:"Designing Homes That Feel Like You",desc:"Your home should be more than just a place to live—it should reflect your personality, lifestyle, and aspirations. Whether you’re moving into a new apartment, building your dream villa, renovating an existing home, or creating a weekend retreat, we design spaces that are functional, timeless, and uniquely yours.",expertise:["Apartments & Flats","Villas & Bungalows","Luxury Residences","Modular Kitchens","Bedrooms & Living Spaces","Custom Storage Solutions"],img:Gu},{num:"02",eyebrow:"02 — COMMERCIAL INTERIORS",title:"Commercial Interiors",intro:"Spaces Designed for Productivity & Impact",desc:"A well-designed workspace inspires creativity, improves efficiency, and leaves a lasting impression on clients and visitors. From corporate offices and co-working spaces to retail stores, clinics, and fitness studios, we create environments that balance functionality, comfort, and brand identity.",expertise:["Corporate Offices","Co-working Spaces","Retail Stores","Clinics & Healthcare Facilities","Fitness Studios & Gyms","Reception & Waiting Areas"],img:Xu},{num:"03",eyebrow:"03 — HOSPITALITY INTERIORS",title:"Hospitality Interiors",intro:"Creating Experiences Through Design",desc:"In hospitality, every detail contributes to the guest experience. We design inviting and memorable environments that combine aesthetics, comfort, and functionality, ensuring every visitor feels welcomed and inspired.",expertise:["Cafés & Restaurants","Hotels & Resorts","Lounges & Clubhouses","Spas & Wellness Centres","Banquet & Event Spaces","Guest Experience Design"],img:qu},{num:"04",eyebrow:"04 — ARCHITECTURE & SPACE PLANNING",title:"Architecture & Space Planning",intro:"Building Strong Foundations for Exceptional Spaces",desc:"Great design begins with thoughtful planning. Our architectural and space planning services focus on creating efficient layouts, striking elevations, and well-balanced spaces that maximize both aesthetics and functionality.",expertise:["Architectural Planning","Floor Plans & Layouts","Elevation Design","Facade Design","Space Optimization","Design Development"],img:Ju},{num:"05",eyebrow:"05 — INTERIOR DESIGN & 3D VISUALIZATION",title:"Interior Design & 3D Visualization",intro:"Bringing Ideas to Life Before Execution",desc:"Visualize your future space with confidence through detailed drawings and realistic 3D renderings. Our design process helps you explore layouts, materials, finishes, and design concepts before construction begins.",expertise:["Space Planning","Concept Development","2D Drawings","3D Visualizations","Material Selection","Design Presentations"],img:Qu},{num:"06",eyebrow:"06 — DEVELOPER & BUILDER SOLUTIONS",title:"Developer & Builder Solutions",intro:"Enhancing Properties to Maximize Market Appeal",desc:"We collaborate with developers and builders to create thoughtfully designed spaces that elevate property value and attract potential buyers. From show apartments to common amenities, every space is crafted to leave a lasting impression.",expertise:["Sample Flats","Sales Offices","Clubhouses","Entrance Lobbies","Amenity Spaces","Common Area Design"],img:Zu},{num:"07",eyebrow:"07 — RENOVATION & MAKEOVERS",title:"Renovation & Makeovers",intro:"Transforming Existing Spaces with Purpose",desc:"Whether you’re updating a home, refreshing a workplace, or modernizing an outdated interior, our renovation services breathe new life into existing spaces while preserving what matters most.",expertise:["Home Renovations","Office Refurbishments","Kitchen Upgrades","Space Reconfiguration","Interior Refreshes","Styling & Décor Enhancements"],img:ed}];function dk({service:e,index:t,image:n}){const r=t%2===0;return o.jsxs("article",{className:`svc-detail ${t%2?"svc-detail-reverse":""}`,children:[o.jsx(Xt,{className:"svc-detail-image-reveal",direction:r?"left":"right",children:o.jsx("div",{className:"svc-detail-image-wrap",children:o.jsx("img",{src:n,alt:e.title,className:"svc-detail-image",loading:t===0?"eager":"lazy"})})}),o.jsx(Xt,{className:"svc-detail-content-reveal",direction:"up",delay:.12,children:o.jsxs("div",{className:"svc-detail-content",children:[o.jsx(Xt,{delay:0,children:o.jsx("p",{className:"svc-detail-eyebrow",children:e.eyebrow})}),o.jsx(Xt,{delay:.06,children:o.jsx("h2",{children:e.title})}),o.jsx(Xt,{delay:.12,children:o.jsx("h3",{children:e.intro})}),o.jsx(Xt,{delay:.18,children:o.jsx("p",{className:"svc-detail-description",children:e.desc})}),o.jsx(Xt,{delay:.24,children:o.jsx("p",{className:"svc-detail-expertise-label",children:"Our Expertise"})}),o.jsx("ul",{className:"svc-detail-expertise",children:e.expertise.map((i,s)=>o.jsx("li",{children:o.jsx(Xt,{delay:.3+s*.06,children:i})},i))})]})})]})}function Xt({children:e,delay:t=0,direction:n="up",className:r=""}){const i=m.useRef(null),s=kn(i,{once:!1,margin:"-60px"}),[a,l]=m.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 640px)").matches);m.useEffect(()=>{const d=window.matchMedia("(max-width: 640px)"),p=()=>l(d.matches);return p(),d.addEventListener("change",p),()=>d.removeEventListener("change",p)},[]);const u=a?{x:0,y:24}:n==="left"?{x:-36,y:0}:n==="right"?{x:36,y:0}:{x:0,y:24};return o.jsx(N.div,{ref:i,className:`svc-reveal ${r}`,initial:{opacity:0,...u},animate:s?{opacity:1,x:0,y:0}:{opacity:0,...u},transition:{duration:.7,delay:t,ease:[.25,.1,.25,1]},children:e})}function pk(){var s,a,l;const e=m.useRef(null),{settings:t}=En(),n=(s=t==null?void 0:t.servicesList)!=null&&s.length?t.servicesList.map((c,u)=>({num:String(u+1).padStart(2,"0"),title:c.title,desc:c.desc,img:c.img})):uk,r=((a=t==null?void 0:t.servicePageHero)==null?void 0:a.headline)||"Our Services",i=((l=t==null?void 0:t.servicePageHero)==null?void 0:l.subheadline)||"Complete interior design and architecture services — from first conversation to final reveal.";return o.jsxs("div",{style:{backgroundColor:"#f5f2ed",minHeight:"100vh"},children:[o.jsx("style",{children:`
        :root {
          --card-h: 460px;
          --svc-col-gap: 24px;
          --svc-row-gap: 28px;
        }
        @media (max-width: 1024px) {
          :root { --card-h: 380px; --svc-col-gap: 20px; --svc-row-gap: 24px; }
        }
        @media (max-width: 640px) {
          :root { --card-h: 300px; --svc-col-gap: 0px; --svc-row-gap: 20px; }
        }

        @keyframes skeletonPulse {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .svc-card-pm {
          box-shadow: 0 6px 28px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06);
          transition:
            box-shadow 0.5s cubic-bezier(0.16,1,0.3,1),
            transform 0.5s cubic-bezier(0.16,1,0.3,1) !important;
        }
        .svc-card-pm:hover {
          box-shadow: 0 20px 64px rgba(0,0,0,0.22), 0 6px 20px rgba(0,0,0,0.12) !important;
          transform: translateY(-10px) !important;
        }
        .svc-card-pm:hover .svc-img-pm {
          transform: scale(1.08) !important;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1) !important;
        }
        .svc-card-pm:hover .svc-hover-overlay-pm {
          opacity: 1 !important;
        }
        .svc-card-pm:hover .svc-title-pm {
          transform: translateY(-4px);
        }
        .svc-card-pm:hover .svc-desc-pm {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .svc-card-pm:hover .svc-accent-pm {
          width: calc(100% - 36px) !important;
        }

        .svc-grid-pm {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          column-gap: var(--svc-col-gap);
          row-gap: var(--svc-row-gap);
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (max-width: 640px) {
          .svc-grid-pm {
            grid-template-columns: 1fr !important;
          }
          .svc-desc-pm {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        }

        /* Residential service editorial layout — intentionally local to this page. */
        .svc-residential-detail {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: center;
          gap: clamp(2.5rem, 6vw, 7rem);
          padding: 2rem 0 3.5rem;
        }
        .svc-residential-detail .svc-residential-image-wrap {
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(20,18,14,0.12);
        }
        .svc-residential-detail .svc-residential-image {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1.08;
          object-fit: cover;
        }
        .svc-residential-detail .svc-residential-content {
          padding: 1rem 0;
        }
        .svc-residential-detail .svc-residential-eyebrow,
        .svc-residential-detail .svc-residential-label {
          color: #C9A96E;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.26em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .svc-residential-detail .svc-residential-eyebrow {
          margin-bottom: 1.2rem;
        }
        .svc-residential-detail h2 {
          color: #1C2818;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.15rem, 4vw, 3.5rem);
          font-weight: 400;
          line-height: 1.05;
          margin-bottom: 1.35rem;
        }
        .svc-residential-detail h3 {
          color: #33452F;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.45rem, 2.4vw, 2.1rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .svc-residential-detail .svc-residential-description {
          color: rgba(28,40,24,0.62);
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.85;
          margin-bottom: 2rem;
          max-width: 520px;
        }
        .svc-residential-detail .svc-residential-label {
          margin-bottom: 1rem;
        }
        .svc-residential-detail .svc-residential-expertise {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.8rem 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .svc-residential-detail .svc-residential-expertise li {
          color: rgba(28,40,24,0.7);
          font-family: 'Jost', sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.45;
          padding-left: 1rem;
          position: relative;
        }
        .svc-residential-detail .svc-residential-expertise li::before {
          background: #C9A96E;
          border-radius: 50%;
          content: '';
          height: 4px;
          left: 0;
          position: absolute;
          top: 0.55em;
          width: 4px;
        }
        @media (max-width: 640px) {
          .svc-residential-detail {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;
            padding: 0 0 2rem;
          }
          .svc-residential-detail .svc-residential-content {
            padding: 0 0.25rem;
          }
          .svc-residential-detail .svc-residential-image {
            aspect-ratio: 1.18 / 1;
          }
          .svc-commercial-detail {
            flex-direction: column-reverse;
          }
        }
        @media (max-width: 460px) {
          .svc-residential-detail .svc-residential-expertise {
            grid-template-columns: 1fr;
          }
        }
        .svc-readable-detail .svc-residential-description {
          font-size: 17px;
        }
        .svc-readable-detail .svc-residential-label {
          font-size: 12px;
        }
        .svc-readable-detail .svc-residential-expertise li {
          font-size: 17px;
        }

        /* Shared seven-section editorial layout. The grid row is sized by the
           content column; the image fills that row and crops with object-fit. */
        .svc-detail {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: stretch;
          gap: clamp(2.5rem, 6vw, 7rem);
          padding: 2rem 0 3.5rem;
        }
        .svc-detail > .svc-detail-image-reveal {
          grid-column: 1;
          grid-row: 1;
          min-width: 0;
        }
        .svc-detail > .svc-detail-content-reveal {
          grid-column: 2;
          grid-row: 1;
          min-width: 0;
        }
        .svc-detail-reverse > .svc-detail-image-reveal {
          grid-column: 2;
        }
        .svc-detail-reverse > .svc-detail-content-reveal {
          grid-column: 1;
        }
        .svc-detail-image-reveal,
        .svc-detail-content-reveal,
        .svc-detail-image-wrap,
        .svc-detail-content {
          height: 100%;
        }
        .svc-detail-image-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 14px 40px rgba(20,18,14,0.12);
          min-height: 0;
        }
        .svc-detail-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .svc-detail-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1rem 0;
        }
        .svc-detail-eyebrow,
        .svc-detail-expertise-label {
          color: #C9A96E;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.26em;
          line-height: 1.5;
          text-transform: uppercase;
        }
        .svc-detail-eyebrow {
          margin-bottom: 1.2rem;
        }
        .svc-detail h2 {
          color: #1C2818;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.15rem, 4vw, 3.5rem);
          font-weight: 400;
          line-height: 1.05;
          margin-bottom: 1.35rem;
        }
        .svc-detail h3 {
          color: #33452F;
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.45rem, 2.4vw, 2.1rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .svc-detail-description {
          color: rgba(28,40,24,0.62);
          font-family: 'Jost', sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.85;
          margin-bottom: 2rem;
          max-width: 520px;
        }
        .svc-detail-expertise-label {
          font-size: 12px;
          margin-bottom: 1rem;
        }
        .svc-detail-expertise {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.8rem 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .svc-detail-expertise li {
          color: rgba(28,40,24,0.7);
          font-family: 'Jost', sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.45;
          padding-left: 1rem;
          position: relative;
        }
        .svc-detail-expertise li::before {
          background: #C9A96E;
          border-radius: 50%;
          content: '';
          height: 5px;
          left: 0;
          position: absolute;
          top: 0.55em;
          width: 5px;
        }
        @media (max-width: 640px) {
          .svc-detail,
          .svc-detail-reverse {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            gap: 2rem;
            padding: 0 0 2rem;
          }
          .svc-detail > .svc-detail-image-reveal,
          .svc-detail > .svc-detail-content-reveal {
            order: initial;
            height: auto;
          }
          .svc-detail-image-wrap {
            position: relative;
            height: auto;
            aspect-ratio: 1.18 / 1;
          }
          .svc-detail-image {
            position: static;
            inset: auto;
            height: 100%;
            min-height: 0;
          }
          .svc-detail-content {
            height: auto;
            padding: 0 0.25rem;
          }
        }
        @media (max-width: 460px) {
          .svc-detail-expertise {
            grid-template-columns: 1fr;
          }
        }
      `}),o.jsx("section",{style:{paddingTop:96,paddingBottom:48,paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center",maxWidth:620,margin:"0 auto"},children:o.jsxs(se,{children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"0.9rem"},children:"What We Offer"}),o.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 3.5vw, 3.25rem)",color:"#1C2818",lineHeight:1.06,marginBottom:"1rem",letterSpacing:"-0.01em"},children:r}),o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.48)",lineHeight:1.85},children:i})]})}),o.jsx(se,{children:o.jsx("div",{style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 64px"}})}),o.jsx("section",{style:{maxWidth:1180,margin:"0 auto",padding:"0 2rem 80px"},children:o.jsx("div",{className:"svc-grid-pm",children:n.map((c,u)=>o.jsx(dk,{service:nm[u],index:u,image:c.img||nm[u].img},c.num))})}),o.jsx(ck,{}),o.jsx("section",{ref:e,style:{backgroundColor:"#21291a",padding:"88px 1.5rem",textAlign:"center"},children:o.jsxs(se,{children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"1rem"},children:"Ready to Begin?"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.5rem)",color:"#f5f0e8",fontStyle:"italic",lineHeight:1.15,marginBottom:"1.4rem"},children:"Not sure where to start?"}),o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(245,240,232,0.42)",lineHeight:1.85,maxWidth:400,margin:"0 auto 2.75rem"},children:"Book a free consultation and we'll guide you through the best approach for your project."}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:10,backgroundColor:"#a18661",color:"#1C2818",fontFamily:"'Inter', sans-serif",fontWeight:500,fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",padding:"18px 48px",textDecoration:"none",borderRadius:2,transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:c=>{const u=c.currentTarget;u.style.backgroundColor="#ddb97a",u.style.transform="translateY(-2px)"},onMouseLeave:c=>{const u=c.currentTarget;u.style.backgroundColor="#a18661",u.style.transform="translateY(0)"},children:["Book Free Consultation ",o.jsx($e,{size:13,strokeWidth:1.5})]})]})})]})}const fk="/assets/WhatsApp_Image_2026-07-08_at_20.50.13_1783534790416-DCZK0Ozg.jpeg";function Or(){const[e,t]=m.useState(!1);return m.useEffect(()=>{const n=window.matchMedia("(max-width: 768px)");t(n.matches);const r=i=>t(i.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const rm=[{title:"Thoughtful Design",desc:"Every decision is intentional. We never add without asking why.",Icon:BS},{title:"Timeless Elegance",desc:"We design for years, not seasons. Quality over trend.",Icon:bx},{title:"Personal Connection",desc:"We listen before we design. Your life shapes your space.",Icon:wx},{title:"Quality & Craftsmanship",desc:"Refined materials, skilled execution, no shortcuts.",Icon:Ax},{title:"Trust & Transparency",desc:"Clear timelines, honest communication, no surprises.",Icon:YS}],mk=[{value:25,suffix:"+",label:"Clients Served",duration:1800},{value:5,suffix:"+",label:"Years of Experience",duration:1200},{value:2,suffix:"",label:"Cities — Mumbai & Pune",duration:1200},{value:100,suffix:"%",label:"End-to-End Solutions",duration:1600}];function hk(e){const t=e.match(/^(\d+(?:\.\d+)?)(.*)$/);return t?{numeric:Number(t[1]),suffix:t[2]}:{numeric:0,suffix:""}}const gk=["Home interiors — 1BHK, 2BHK, 3BHK apartments & villas","Office and workspace design","Showrooms and retail spaces","Cafés and hospitality interiors"],xk=fk,yk="/images/about/about-who-we-are.png",kt={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#a18661",marginBottom:20},Gi={fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 3.5vw, 3.25rem)",letterSpacing:"-0.01em",color:"#262421",lineHeight:1.2,marginBottom:32},mt={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,lineHeight:1.78,color:"#5c5c5c"},vk={hidden:{},visible:{transition:{staggerChildren:.1}}},bk={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},wk={hidden:{},visible:{transition:{staggerChildren:.13}}},jk={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},Sk={hidden:{},visible:{transition:{staggerChildren:.15}}},kk={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}},Pn=[0,130,260,390,520,650,780];function Ck({founderImg:e}){const t=m.useRef(null),n=Or();return m.useEffect(()=>{const r=t.current;if(!r)return;const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting?(a.target.classList.add("in-view"),n||i.unobserve(a.target)):n&&a.target.classList.remove("in-view")})},{threshold:.15});return r.querySelectorAll(".founder-animate, .founder-image-wrap").forEach(s=>i.observe(s)),()=>i.disconnect()},[n]),o.jsx("section",{className:`py-24 about-section-pad${n?" founder-mobile":""}`,style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{ref:t,className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-stretch",children:[o.jsxs("div",{children:[o.jsx("p",{className:"founder-animate",style:{...kt,transitionDelay:`${Pn[0]}ms`},children:"The Founder"}),o.jsx("h2",{className:"founder-animate",style:{...Gi,transitionDelay:`${Pn[1]}ms`},children:"Shweta Mahadik"}),o.jsx("p",{className:"founder-animate",style:{...kt,letterSpacing:"0.2em",marginBottom:32,color:"rgba(33,41,26,0.45)",transitionDelay:`${Pn[2]}ms`},children:"Founder & Principal Designer"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18,marginBottom:40},children:[o.jsx("p",{className:"founder-animate",style:{...mt,transitionDelay:`${Pn[3]}ms`},children:"Shweta brings a rare combination of civil engineering precision and interior design sensibility to every project. Her background in construction gives her an instinctive understanding of how spaces are built — not just how they look — which translates into designs that are both beautiful and structurally sound."}),o.jsx("p",{className:"founder-animate",style:{...mt,transitionDelay:`${Pn[4]}ms`},children:"Her approach is hands-on and deeply personal. She visits every project site herself, works closely with craftspeople, and maintains direct communication with clients throughout the process."}),o.jsx("p",{className:"founder-animate",style:{...mt,transitionDelay:`${Pn[5]}ms`},children:"For Shweta, good design is not about decoration. It is about creating environments that make everyday life calmer, more considered, and more enjoyable."})]}),o.jsxs("blockquote",{className:"founder-animate",style:{borderLeft:"2px solid #a18661",background:"rgba(161,134,97,0.06)",borderRadius:"0 6px 6px 0",padding:"20px 24px",transitionDelay:`${Pn[6]}ms`},children:[o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:300,fontSize:"1.2rem",color:"#2c2c2c",lineHeight:1.65,marginBottom:12},children:'"For me, design is not about decoration. It is about creating spaces that feel calm, meaningful, and effortless to live in."'}),o.jsx("cite",{style:{...kt,fontStyle:"normal",marginBottom:0,display:"block",color:"#a18661"},children:"— Shweta Mahadik"})]})]}),o.jsx("div",{className:"founder-image-wrap overflow-hidden",style:{borderRadius:4,height:"100%"},children:o.jsx("img",{src:e,alt:"Shweta Mahadik — Founder, NIVORA Interiors",className:"w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700",loading:"lazy"})})]})})}function Ek(){const{settings:e}=En(),t=m.useMemo(()=>{var l;return(l=e==null?void 0:e.aboutStats)!=null&&l.length?e.aboutStats.map(c=>{const{numeric:u,suffix:d}=hk(c.value);return{value:u,suffix:d,label:c.label,duration:1400}}):mk},[e==null?void 0:e.aboutStats]),[n,r]=m.useState(()=>t.map(()=>0)),i=m.useRef(!1),s=m.useRef(null),a=Or();return m.useEffect(()=>{r(t.map(()=>0)),i.current=!1},[t]),m.useEffect(()=>{const l=s.current;if(!l)return;let c=[];const u=()=>{c.forEach(x=>cancelAnimationFrame(x)),c=[]},d=()=>{!a&&i.current||(i.current=!0,u(),a&&r(t.map(()=>0)),t.forEach((x,v)=>{const b=performance.now(),w=g=>{const h=Math.min((g-b)/x.duration,1),y=1-Math.pow(1-h,4),S=Math.round(x.value*y);r(j=>{const k=[...j];return k[v]=S,k}),h<1?c[v]=requestAnimationFrame(w):r(j=>{const k=[...j];return k[v]=x.value,k})};c[v]=requestAnimationFrame(w)}))},p=new IntersectionObserver(([x])=>{x.isIntersecting?d():a&&(i.current=!1,u())},{threshold:.2});p.observe(l);const f=l.getBoundingClientRect();return f.top<window.innerHeight&&f.bottom>0&&d(),()=>{p.disconnect(),u()}},[a,t]),o.jsx("section",{ref:s,className:"about-stats-section",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.2)",borderBottom:"1px solid rgba(161,134,97,0.2)",padding:"72px 24px"},children:o.jsxs("div",{style:{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0},className:"about-stats-grid",children:[o.jsx("style",{children:`
          @media (max-width: 640px) {
            .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            .about-stats-item + .about-stats-item { border-left: none !important; border-top: 1px solid rgba(161,134,97,0.18) !important; }
          }
          .about-stats-item + .about-stats-item { border-left: 1px solid rgba(161,134,97,0.18); }
        `}),t.map((l,c)=>o.jsx(se,{delay:c*.1,className:"about-stats-item",direction:"up",children:o.jsxs("div",{style:{textAlign:"center",padding:"12px 24px"},children:[o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:"clamp(2.4rem, 4.5vw, 3.2rem)",lineHeight:1,color:"#a18661",margin:"0 0 10px"},children:[n[c],l.suffix]}),o.jsx("p",{style:{...kt,marginBottom:0},children:l.label})]})},c))]})})}function im({type:e,text:t}){const[n,r]=m.useState(!1),i=e==="mission",s=i?XS:RS,a=i?"Mission":"Vision",l=i?"rgba(161,134,97,0.055)":"rgba(95,116,94,0.04)";return o.jsxs(N.div,{variants:kk,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{background:l,border:"1px solid rgba(161,134,97,0.22)",borderTop:`4px solid ${n?"#c8a97e":"#a18661"}`,borderRadius:6,padding:"32px 36px 36px",cursor:"default",transform:n?"translateY(-4px)":"translateY(0)",boxShadow:n?"0 16px 40px rgba(33,41,26,0.1)":"0 2px 8px rgba(33,41,26,0.04)",transition:"transform 0.28s ease, box-shadow 0.28s ease, border-top-color 0.28s ease"},children:[o.jsx("div",{style:{marginBottom:14},children:o.jsx(s,{size:24,color:"#a18661",strokeWidth:1.4})}),o.jsx("p",{style:{...kt,fontSize:11,letterSpacing:"0.5em",fontWeight:500},children:a.toUpperCase()}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:"clamp(1.25rem, 2.2vw, 1.5rem)",color:"#21291a",lineHeight:1.5,margin:0},children:t})]})}function om({v:e,index:t,isTapped:n,onTap:r}){const[i,s]=m.useState(!1),a=Or(),l=m.useRef(null);kn(l,{once:!0,amount:.2});const c=t*.12;return o.jsxs(N.div,{ref:l,variants:a?void 0:jk,onMouseEnter:()=>!a&&s(!0),onMouseLeave:()=>!a&&s(!1),onClick:()=>a&&(r==null?void 0:r()),className:a?`value-item-row value-item-mob${n?" vi-mob-active":""}`:"value-item-row",style:{display:"flex",gap:20,alignItems:"flex-start",paddingBottom:28,...a?{"--vi-delay":`${c}s`}:{}},children:[o.jsx("div",{className:"value-icon-col",style:{flexShrink:0,width:40,paddingTop:2},children:a?o.jsx("div",{className:`vi-mob-icon-wrap${n?" vi-tapped":""}`,children:o.jsx(e.Icon,{size:36,color:n?"#C4A35A":"#a18661",strokeWidth:1.5,style:{display:"block",transition:"color 0.3s ease"}})}):o.jsx(e.Icon,{size:36,color:"#a18661",strokeWidth:1.25,className:"value-icon-svg",style:{flexShrink:0,display:"block",opacity:i?1:.85,transition:"opacity 0.25s ease, transform 0.25s ease",transform:i?"scale(1.05)":"scale(1)"}})}),o.jsx("div",{style:{flex:1,minWidth:0},children:a?o.jsxs(o.Fragment,{children:[o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:600,fontSize:"1.2rem",letterSpacing:"0.01em",color:n?"#C4A35A":"#21291a",transition:"color 0.3s ease",margin:"0 0 8px",lineHeight:1.3},children:e.title}),o.jsx("p",{style:{...mt,fontSize:13,marginBottom:20},children:e.desc}),o.jsx("div",{style:{height:1,background:"#a18661",borderRadius:1,opacity:.35}})]}):o.jsxs(o.Fragment,{children:[o.jsx(N.h4,{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:600,fontSize:"1.2rem",letterSpacing:"0.01em",color:i?"#a18661":"#21291a",transition:"color 0.25s ease",margin:"0 0 8px",lineHeight:1.3},children:e.title}),o.jsx(N.p,{style:{...mt,fontSize:13,marginBottom:20},children:e.desc}),o.jsx("div",{style:{position:"relative",height:1,background:"rgba(161,134,97,0.18)",borderRadius:1,overflow:"hidden"},children:o.jsx(N.div,{style:{position:"absolute",inset:0,background:"#a18661",borderRadius:1,transformOrigin:"left center",transform:i?"scaleX(1)":"scaleX(0)",transition:"transform 0.3s ease"}})})]})}),o.jsx("style",{children:`
        /* ── Entrance animation ── */
        @keyframes vi-fade-up {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }

        /* ── Icon gentle pulse (mobile idle) ── */
        @keyframes vi-icon-pulse {
          0%, 100% { transform: scale(1.0); }
          50%       { transform: scale(1.05); }
        }

        .value-icon-col { width: 40px; }

        @media (max-width: 768px) {
          .value-item-row {
            gap: 14px !important;
            padding-top: 20px !important;
            padding-bottom: 20px !important;
          }
          .value-icon-col { width: 36px !important; }
          .value-icon-col svg,
          .value-item-mob svg {
            width: 36px !important;
            height: 36px !important;
          }

          /* Entrance animation */
          .value-item-mob {
            animation: vi-fade-up 0.5s ease-out calc(var(--vi-delay, 0s)) both;
            /* Tap feel */
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            /* Reserve border-left space always so layout never shifts on tap */
            border-left: 3px solid transparent;
            padding-left: 8px !important;
            border-radius: 4px;
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }

          /* Tapped state */
          .value-item-mob.vi-mob-active {
            background-color: rgba(196, 163, 90, 0.1);
            border-left-color: #C4A35A;
          }

          /* Icon pulse wrapper — slow idle pulse, starts after entrance */
          .vi-mob-icon-wrap {
            display: inline-block;
            animation: vi-icon-pulse 3s ease-in-out infinite;
            animation-delay: calc(var(--vi-delay, 0s) + 0.6s);
            transition: transform 0.3s ease;
          }

          /* Tapped: freeze pulse, hold at scale 1.2 */
          .vi-mob-icon-wrap.vi-tapped {
            animation: none;
            transform: scale(1.2);
          }
        }
      `})]})}function Tk(){const e=Or(),t=m.useRef(null),n=kn(t,{once:!e,amount:.4}),r=["Design","With"];return o.jsxs("section",{className:"relative py-24 px-6 overflow-hidden about-hero",style:{background:"#f5f2ed"},children:[o.jsx("div",{className:"absolute inset-0 opacity-[0.07]",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 70% 50%, #a18661 0%, transparent 60%)"}})}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[o.jsx(se,{direction:e?"down":"up",children:o.jsx("p",{style:kt,children:"Our Story"})}),o.jsxs("div",{ref:t,children:[o.jsxs("h1",{className:"about-hero-heading-desktop",style:{...Gi,color:"#2A3926",fontSize:"clamp(2.8rem, 6vw, 4.5rem)",marginBottom:24},children:["Design With",o.jsx("br",{}),o.jsx("em",{style:{color:"#a18661",fontStyle:"italic"},children:"Purpose & Craft"})]}),o.jsxs("h1",{className:"about-hero-heading-mobile",style:{...Gi,color:"#2A3926",fontSize:"clamp(2.8rem, 6vw, 4.5rem)",marginBottom:24,justifyContent:"center",flexWrap:"wrap",gap:"0.3em",perspective:500},children:[r.map((i,s)=>o.jsx(N.span,{style:{display:"inline-block",transformStyle:"preserve-3d"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.5,delay:s*.15,ease:[.16,1,.3,1]},children:i},s)),o.jsx(N.span,{style:{display:"block",width:"100%",color:"#a18661",fontStyle:"italic",transformStyle:"preserve-3d"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.5,delay:2*.15,ease:[.16,1,.3,1]},children:"Purpose & Craft"})]})]}),o.jsx(se,{direction:"up",delay:.15,children:o.jsx("p",{style:{...mt,color:"rgba(42,57,38,0.65)",maxWidth:560,margin:"0 auto",fontSize:15},children:"NIVORA is a boutique interior design studio creating thoughtful, refined spaces that balance elegance with everyday functionality."})})]}),o.jsx("style",{children:`
        .about-hero-heading-mobile { display: none; }
        /* Mobile: force the same dark olive background/text, tighter padding, word-flip heading */
        @media (max-width: 768px) {
          .about-hero {
            background: #f5f2ed !important;
            padding-top: 48px !important;
            padding-bottom: 48px !important;
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .about-hero-heading-desktop { display: none !important; }
          .about-hero-heading-mobile { display: flex !important; }
        }
      `})]})}function Nk(){const e=Or(),t=m.useRef(null),n=kn(t,{once:!1,amount:.4});return o.jsx("div",{ref:t,style:{position:"relative",display:"inline-block"},children:o.jsxs(he,{to:"/contact",className:"inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-12 py-5 hover:bg-[#d4b896] transition-all duration-300 font-medium",style:{background:"linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",color:"#21291a",position:"relative",overflow:"hidden",transition:"background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"},children:["Book Free Consultation ",o.jsx($e,{size:13}),e&&o.jsx(N.span,{"aria-hidden":"true",initial:{x:"-120%"},animate:n?{x:"120%"}:{x:"-120%"},transition:{duration:.9,delay:.3,ease:"easeInOut"},style:{position:"absolute",top:0,left:0,width:"40%",height:"100%",background:"linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)",pointerEvents:"none"}})]})})}function Pk(){const e=Or(),[t,n]=m.useState(null);return o.jsxs("div",{style:{background:"#f5f2ed"},className:"pt-20 about-page-root",children:[o.jsx(Tk,{}),o.jsx("section",{className:"py-24 about-section-pad",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center",children:[o.jsx(se,{direction:"right",children:o.jsx("div",{className:"overflow-hidden",style:{borderRadius:4},children:o.jsx("img",{src:yk,alt:"NIVORA Studio",className:"w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700",loading:"lazy"})})}),o.jsxs(se,{delay:.2,direction:"left",children:[o.jsx("p",{style:kt,children:"Who We Are"}),o.jsx("h2",{style:Gi,children:"A Boutique Studio Built on Listening"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[o.jsx("p",{style:mt,children:"Over the last five years, we've completed 25+ residential and commercial interior projects across Mumbai and Pune — designing homes and workspaces that feel personal, practical, and built to last."}),o.jsx("p",{style:mt,children:"Every project begins with listening. We understand how clients live, work, and use their space before designing anything. We provide complete interior design and turnkey solutions with clear timelines and transparent communication."}),o.jsx("p",{style:mt,children:"We currently design and execute projects across Mumbai and Pune, partnering with homeowners and businesses who value quality, clarity, and a seamless process."})]})]})]})}),o.jsx(Ek,{}),o.jsx("section",{className:"py-28 about-section-pad",style:{background:"#f5f2ed"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start",children:[o.jsxs("div",{children:[o.jsxs(se,{children:[o.jsx("p",{style:kt,children:"What We Design"}),o.jsx("h2",{style:Gi,children:"Spaces That Work for Real Life"})]}),o.jsx(N.ul,{variants:vk,initial:"hidden",whileInView:"visible",viewport:e?{once:!1,margin:"-40px"}:{once:!0,margin:"-60px"},style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:18},children:gk.map((r,i)=>o.jsxs(N.li,{variants:bk,style:{display:"flex",alignItems:"flex-start",gap:14,...mt},children:[o.jsx("svg",{width:"7",height:"7",viewBox:"0 0 8 8",style:{flexShrink:0,marginTop:7},fill:"#a18661",children:o.jsx("polygon",{points:"4,0 8,4 4,8 0,4"})}),r]},i))})]}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("svg",{"aria-hidden":"true",style:{position:"absolute",top:"50%",right:-40,transform:"translateY(-50%)",width:320,height:320,opacity:.05,pointerEvents:"none",zIndex:0},viewBox:"0 0 320 320",children:[o.jsx("circle",{cx:"160",cy:"160",r:"150",fill:"none",stroke:"#a18661",strokeWidth:"1.5"}),o.jsx("circle",{cx:"160",cy:"160",r:"110",fill:"none",stroke:"#a18661",strokeWidth:"0.75"})]}),o.jsxs("div",{style:{position:"relative",zIndex:1},children:[o.jsx(se,{delay:.1,children:o.jsx("p",{style:kt,children:"Our Values"})}),e?o.jsx("div",{style:{display:"flex",flexDirection:"column"},children:rm.map((r,i)=>o.jsx(om,{v:r,index:i,isTapped:t===i,onTap:()=>n(t===i?null:i)},i))}):o.jsx(N.div,{variants:wk,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},style:{display:"flex",flexDirection:"column"},children:rm.map((r,i)=>o.jsx(om,{v:r,index:i},i))})]})]})]})}),o.jsx("section",{className:"py-24 about-section-pad",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[o.jsx(se,{children:o.jsx("p",{style:{...kt,textAlign:"center",marginBottom:48},children:"Our Purpose"})}),o.jsxs(N.div,{variants:Sk,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:28},children:[o.jsx(im,{type:"mission",text:"Create interiors that feel effortlessly luxurious and deeply personal."}),o.jsx(im,{type:"vision",text:"Be a trusted design partner known for thoughtful luxury, timeless design, and interiors that enrich the way people live and work."})]})]})}),o.jsx(Ck,{founderImg:xk}),o.jsx("section",{className:"py-20 px-6 text-center about-section-pad",style:{background:"#21291a"},children:o.jsxs(se,{children:[o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 2.8rem)",color:"#f5f0e8",marginBottom:20,letterSpacing:"-0.01em",lineHeight:1.2},children:["Let's design something",o.jsx("br",{}),o.jsx("em",{style:{color:"#C9A96E"},children:"meaningful together."})]}),o.jsx("p",{style:{...mt,color:"rgba(245,240,232,0.45)",marginBottom:40,maxWidth:360,margin:"0 auto 40px"},children:"Book a free consultation and let's start with a conversation."}),o.jsx(Nk,{})]})}),o.jsx("style",{children:`
        /* Mobile: tighten section padding — max 40px top/bottom, adjacent sections total ~48px */
        @media (max-width: 768px) {
          .about-section-pad {
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }
          .about-stats-section {
            padding-top: 24px !important;
            padding-bottom: 24px !important;
          }
        }
      `})]})}const Ak=[{stars:5,text:"NIVORA transformed our vision into a home that perfectly reflects our family's lifestyle. The balance of warm wooden finishes, elegant detailing, and functional planning exceeded every expectation. Their professionalism, transparency, and craftsmanship made the entire journey enjoyable. Every guest who visits appreciates the timeless beauty of our home.",name:"Arvind Mohite",location:"Royal Living Redefined, Pune",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"AM"},{stars:5,text:"From the very first design discussion to the final handover, the NIVORA team understood exactly what we wanted. They created a home that is modern, practical, and incredibly welcoming. Their attention to detail and execution quality are simply outstanding.",name:"Tushar Shah",location:"Modern Elegance, Pune",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"TS"},{stars:5,text:"Designing a bungalow requires thoughtful planning, and NIVORA delivered beyond our expectations. Every room flows beautifully into the next, with a perfect blend of luxury and functionality. The quality of materials and finishing reflects true craftsmanship.",name:"Mayur Patil",location:"Casa Élan Bungalow, Mumbai",project:"RESIDENTIAL — BUNGALOW",initials:"MP"},{stars:5,text:"Our office now represents our brand perfectly. The layout has improved productivity, while the elegant interiors leave a lasting impression on every client who visits. NIVORA managed the entire project professionally and delivered exactly as promised.",name:"Parag Bari",location:"The Office Neutral Edit, Mumbai",project:"COMMERCIAL — OFFICE",initials:"PB"},{stars:5,text:"We wanted a peaceful home that felt warm and timeless, and NIVORA achieved exactly that. The soft curves, lighting, and neutral palette create a calming atmosphere that our family enjoys every day. It truly feels like home.",name:"Tarun Raisinghania",location:"The Quiet Curve, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"TR"},{stars:5,text:"NIVORA has an incredible ability to create elegance through simplicity. Every texture, finish, and lighting detail has been carefully planned. The final result is sophisticated, functional, and far more beautiful than we imagined.",name:"Samiksha Shetty",location:"The Soft Neutral Edit, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"SS"},{stars:5,text:"The team designed every space with precision and purpose. The duplex feels spacious, luxurious, and incredibly comfortable. Their communication, project management, and commitment to quality made the entire experience completely stress-free.",name:"Kapil Arora",location:"The Layered Calm, Pune",project:"RESIDENTIAL — DUPLEX",initials:"KA"},{stars:5,text:"NIVORA beautifully balanced warmth, luxury, and functionality in our home. The custom furniture, lighting, and thoughtful detailing have completely transformed our everyday living experience. We highly recommend NIVORA to anyone looking for premium interiors.",name:"Rahul Patil",location:"Blushwood Heaven, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"RP"},{stars:5,text:"Nivora took my vision and refined it into something I never thought possible. Their material selection is impeccable.",name:"Aditi R.",location:"Mumbai",project:"RESIDENTIAL — HOME INTERIOR",initials:"AR"}],zk=[{value:"50+",label:"Projects Completed"},{value:"5+",label:"Years of Design Excellence"},{value:"100%",label:"On-Time Handover"}],ai=(e=0)=>({hidden:{opacity:0,y:25},visible:{opacity:1,y:0,transition:{duration:.65,delay:e,ease:[.22,1,.36,1]}}}),Ik=(e=0)=>({hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{duration:.6,delay:e,ease:[.22,1,.36,1]}}});function Rk({project:e}){return o.jsx("span",{style:{display:"inline-block",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",padding:"3px 8px",borderRadius:6,lineHeight:1.6,background:"rgba(161,134,97,0.12)",color:"#a18661",border:"1px solid rgba(161,134,97,0.35)"},children:e})}function Dk({t:e,index:t}){const n=t%3*.15;return o.jsx(N.div,{variants:ai(n),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},children:o.jsxs("div",{className:"testimonial-card",style:{background:"#ffffff",border:"1px solid rgba(95,116,94,0.25)",borderRadius:16,padding:32,height:"100%",display:"flex",flexDirection:"column",position:"relative",transition:"transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease"},onMouseEnter:r=>{const i=r.currentTarget;i.style.borderColor="#5f745e",i.style.borderWidth="1.5px",i.style.transform="translateY(-5px)",i.style.background="#faf9f6",i.style.boxShadow="0 12px 36px rgba(33,41,26,0.10)"},onMouseLeave:r=>{const i=r.currentTarget;i.style.borderColor="rgba(95,116,94,0.35)",i.style.borderWidth="1px",i.style.transform="translateY(0)",i.style.background="#ffffff",i.style.boxShadow="none"},children:[o.jsx("span",{style:{position:"absolute",top:16,right:20,fontSize:64,lineHeight:1,color:"#a18661",fontFamily:"'Cormorant Garamond', serif",opacity:.22,pointerEvents:"none",userSelect:"none"},children:'"'}),o.jsx("div",{style:{fontSize:14,color:"#a18661",letterSpacing:2,marginBottom:16},children:"★".repeat(e.stars)}),o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:16,lineHeight:1.8,color:"#2c2c2c",flex:1,marginBottom:0},children:['"',e.text,'"']}),o.jsx("div",{style:{width:40,height:1,background:"#a18661",margin:"20px 0",flexShrink:0}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14},children:[o.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#a18661",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Jost', sans-serif",fontWeight:700,fontSize:12,flexShrink:0,letterSpacing:"0.5px"},children:e.initials}),o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:500,fontSize:14,color:"#21291a",margin:0},children:e.name}),o.jsx("span",{style:{display:"inline-block",fontFamily:"'Jost', sans-serif",fontSize:11,fontWeight:400,letterSpacing:"0.04em",color:"#4a4a4a",background:"rgba(33,41,26,0.06)",border:"1px solid rgba(33,41,26,0.12)",borderRadius:6,padding:"2px 8px",marginTop:4},children:e.location})]})]}),o.jsx(Rk,{project:e.project})]})})}function Lk(){return o.jsxs("div",{style:{background:"#f5f2ed",minHeight:"100vh"},children:[o.jsxs("section",{style:{paddingTop:140,paddingBottom:60,textAlign:"center",paddingLeft:24,paddingRight:24},children:[o.jsx(N.p,{variants:Ik(0),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#a18661",marginBottom:16},children:"Client Stories"}),o.jsx(N.h1,{variants:ai(.15),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.5rem, 6vw, 4.5rem)",color:"#262421",margin:"0 0 20px",lineHeight:1.1},children:"What Clients Say"}),o.jsx(N.p,{variants:ai(.3),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:15,color:"rgba(33,41,26,0.55)",maxWidth:560,margin:"0 auto",lineHeight:1.75},children:"Every project is a relationship. These are the words of people who trusted us with their spaces."})]}),o.jsx("section",{style:{maxWidth:1200,margin:"0 auto",padding:"20px 24px 80px"},children:o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},className:"testi-grid",children:[o.jsx("style",{children:`
            @media (max-width: 1024px) {
              .testi-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .testi-grid { grid-template-columns: 1fr !important; }
            }
          `}),Ak.map((e,t)=>o.jsx(Dk,{t:e,index:t},t))]})}),o.jsx("section",{style:{background:"#ffffff",borderTop:"1px solid rgba(95,116,94,0.18)",borderBottom:"1px solid rgba(95,116,94,0.18)",padding:"64px 24px"},children:o.jsxs("div",{style:{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",gap:0,flexWrap:"wrap"},className:"stats-bar",children:[o.jsx("style",{children:`
            .stats-bar-item + .stats-bar-item {
              border-left: 1px solid rgba(95,116,94,0.22);
            }
            @media (max-width: 640px) {
              .stats-bar { flex-direction: column !important; }
              .stats-bar-item + .stats-bar-item {
                border-left: none !important;
                border-top: 1px solid rgba(95,116,94,0.22);
              }
            }
          `}),zk.map((e,t)=>o.jsxs(N.div,{className:"stats-bar-item",variants:ai(t*.12),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},style:{flex:1,textAlign:"center",padding:"16px 40px",minWidth:180},children:[o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3rem)",color:"#21291a",margin:"0 0 8px",lineHeight:1},children:e.value}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:400,fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(33,41,26,0.5)",margin:0},children:e.label})]},t))]})}),o.jsx("section",{style:{background:"#f5f2ed",padding:"80px 24px",textAlign:"center"},children:o.jsxs(N.div,{variants:ai(0),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},children:[o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 2.8rem)",color:"#262421",margin:"0 0 16px",letterSpacing:"-0.01em"},children:"Ready to transform your space?"}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:15,color:"rgba(33,41,26,0.55)",maxWidth:480,margin:"0 auto 40px",lineHeight:1.75},children:"Claim your Free Layout Consultation today and let us start building your dream."}),o.jsx(he,{to:"/contact",style:{display:"inline-block",background:"#21291a",color:"#f5f2ed",fontFamily:"'Jost', sans-serif",fontWeight:500,fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",padding:"16px 40px",borderRadius:12,textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:e=>{const t=e.currentTarget;t.style.background="#5f745e",t.style.transform="translateY(-2px)"},onMouseLeave:e=>{const t=e.currentTarget;t.style.background="#21291a",t.style.transform="translateY(0)"},children:"Claim My Free Offer Now"})]})})]})}const Mk=["Residential","Commercial","Office","Retail","Villa/Bungalow","Other"],Fk=["Instagram","Google","Word of Mouth","Facebook","Other"],Ok=["Ambernath","Kalyan","Pune","Mumbai","Other"],Vk=["2BHK","3BHK+","Villa/Bungalow","Office","Retail/Commercial"],Bk=["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"];function _k(){const[e,t]=m.useState({fullName:"",phone:"+91 ",email:"",spaceType:"",location:"",projectType:"",budget:"",referral:"",requirements:""}),[n,r]=m.useState("idle"),[i,s]=m.useState(""),a=m.useRef(null),l=m.useRef(null),[c,u]=m.useState(!1),[d,p]=m.useState(!1);m.useEffect(()=>{const g=a.current;if(!g)return;const h=new IntersectionObserver(([y])=>u(y.isIntersecting),{threshold:.3});return h.observe(g),()=>h.disconnect()},[]),m.useEffect(()=>{const g=l.current;if(!g)return;const h=new IntersectionObserver(([y])=>p(y.isIntersecting),{threshold:.08,rootMargin:"0px 0px -40px 0px"});return h.observe(g),()=>h.disconnect()},[]);const f=g=>h=>t(y=>({...y,[g]:h.target.value})),x=g=>h=>t(y=>({...y,[g]:y[g]===h?"":h})),v=g=>({opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transition:`opacity 500ms ease-out ${g}ms, transform 500ms ease-out ${g}ms`}),b=g=>({display:"inline-block",opacity:d?1:0,transform:d?"translateX(0)":"translateX(-14px)",transition:`opacity 400ms ease-out ${g}ms, transform 400ms ease-out ${g}ms`}),w=g=>({opacity:d?1:0,transform:d?"scale(1)":"scale(0.35)",transition:`opacity 350ms ease-out ${280+g*150}ms, transform 450ms cubic-bezier(0.34,1.56,0.64,1) ${280+g*150}ms`});return o.jsxs("div",{style:{background:"#f5f2ed"},children:[o.jsx("style",{children:`
        /* ── cards ── */
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid #E8E0D0;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 24px rgba(60,50,30,0.05);
          height: 100%;
          box-sizing: border-box;
        }
        .contact-info-card {
          background: #FFFFFF;
          border: 1px solid #E8E0D0;
          border-radius: 16px;
          box-shadow: 0 4px 24px rgba(60,50,30,0.05);
          padding: 36px 32px;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        /* ── form labels ── */
        .form-label {
          display: block;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #888880;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 8px;
        }

        /* ── inputs ── */
        .form-input, .form-select {
          border: none;
          border-bottom: 1px solid #C8C0B0;
          border-radius: 0;
          background: transparent;
          padding: 8px 0;
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          color: #2C2C2A;
          width: 100%;
          outline: none;
          appearance: none;
          -webkit-appearance: none;
        }
        .form-input::placeholder { color: #AAAAAA; }
        .form-select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23AAAAAA' stroke-width='1.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 2px center;
          padding-right: 20px;
        }
        .form-select option[value=''] { color: #AAAAAA; }

        /* ── animated focus underline ── */
        .form-field-wrap { position: relative; }
        .form-field-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          width: 0; height: 1.5px;
          background: #a18661;
          transition: width 0.28s ease, left 0.28s ease;
        }
        .form-field-wrap:focus-within::after { left: 0; width: 100%; }

        /* ── textarea ── */
        .form-textarea {
          border: 1px solid #C8C0B0;
          border-radius: 8px;
          padding: 12px;
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          color: #2C2C2A;
          width: 100%;
          min-height: 120px;
          outline: none;
          background: transparent;
          resize: vertical;
          transition: border-color 0.28s ease;
          box-sizing: border-box;
        }
        .form-textarea:focus { border-color: #a18661; }
        .form-textarea::placeholder { color: #AAAAAA; }

        /* ── form grid ── */
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 40px;
        }
        .form-field-full { grid-column: 1 / -1; }

        /* ── chip buttons ── */
        .chip-group { display: flex; flex-wrap: wrap; gap: 10px; }
        .chip-btn {
          font-family: 'Jost', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.03em;
          color: #6b6258;
          background: #FBF9F5;
          border: 1px solid #DDD3C0;
          border-radius: 999px;
          padding: 9px 18px;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
        }
        .chip-btn:hover { border-color: #a18661; color: #2C2C2A; }
        .chip-btn.selected {
          background: #a18661;
          border-color: #a18661;
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        /* ── submit button shimmer ── */
        .contact-submit-btn {
          position: relative;
          overflow: hidden;
        }
        .contact-submit-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -80%;
          width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(201,169,110,0.18) 50%, transparent 100%);
          transform: skewX(-15deg);
          pointer-events: none;
        }
        .contact-submit-btn:hover::after {
          animation: submitShimmer 0.75s ease-in-out;
        }
        @keyframes submitShimmer {
          0%   { left: -80%; }
          100% { left: 120%; }
        }
        .contact-spin { animation: contactSpin 0.9s linear infinite; }
        @keyframes contactSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── WhatsApp button pulse glow ── */
        .contact-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid #25D366;
          color: #25D366;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 11px 20px;
          text-decoration: none;
          border-radius: 8px;
          position: relative;
          transition: background 0.25s ease, color 0.25s ease;
          animation: waGlow 3s ease-in-out infinite;
        }
        .contact-wa-btn:hover { background: #25D366; color: #fff; }
        @keyframes waGlow {
          0%, 60%, 100% { box-shadow: none; }
          30% { box-shadow: 0 0 14px rgba(37,211,102,0.55), 0 0 32px rgba(37,211,102,0.25); }
        }
        .contact-wa-btn::before {
          content: '';
          position: absolute;
          inset: -4px;
          border: 1.5px solid #25D366;
          border-radius: 10px;
          opacity: 0;
          animation: waPulse 3s ease-out infinite;
        }
        @keyframes waPulse {
          0%   { inset: -2px; opacity: 0.5; }
          40%  { inset: -10px; opacity: 0; }
          100% { inset: -10px; opacity: 0; }
        }

        /* ── responsive ── */
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr; }
          .form-field-full { grid-column: 1; }
          .contact-form-card { padding: 24px; }
        }
        @media (max-width: 900px) {
          .contact-two-col { grid-template-columns: 1fr !important; }
          .contact-form-card, .contact-info-card { height: auto !important; }
        }
      `}),o.jsx("section",{ref:a,style:{padding:"104px 24px 48px",textAlign:"center",maxWidth:720,margin:"0 auto"},children:o.jsxs("div",{style:{opacity:c?1:0,transform:c?"translateY(0)":"translateY(-28px)",transition:"opacity 700ms ease-out, transform 700ms ease-out"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",color:"#a18661",marginBottom:16},children:"Reach Out"}),o.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 4vw, 3.2rem)",color:"#262421",margin:"0 0 16px",lineHeight:1.1,letterSpacing:"-0.01em"},children:"Let's Talk"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:15,color:"#7a7268",lineHeight:1.8,maxWidth:500,margin:"0 auto"},children:"Every great project begins with a conversation. Tell us about your space and let's explore what's possible."})]})}),o.jsx("section",{ref:l,style:{padding:"0 24px 96px"},children:o.jsxs("div",{className:"contact-two-col",style:{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 380px",gap:40,alignItems:"stretch"},children:[o.jsx("div",{style:{height:"100%"},children:o.jsxs("div",{className:"contact-form-card",children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#888880",marginBottom:32,...v(0)},children:"Enquiry Form"}),o.jsxs("form",{onSubmit:async g=>{if(g.preventDefault(),n!=="submitting"){if(!e.budget){s("Please select an estimated budget."),r("error");return}r("submitting"),s("");try{await zx(e),window.location.href="/thank-you"}catch(h){r("error"),s(h instanceof Error?h.message:"Something went wrong. Please try again.")}}},style:{display:"flex",flexDirection:"column",gap:0},children:[o.jsxs("div",{className:"form-grid",style:{marginBottom:36},children:[o.jsxs("div",{style:v(80),children:[o.jsxs("label",{className:"form-label",children:["Full Name ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"text",required:!0,placeholder:"Jane Doe",value:e.fullName,onChange:f("fullName")})})]}),o.jsxs("div",{style:v(180),children:[o.jsxs("label",{className:"form-label",children:["Phone Number ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"tel",required:!0,placeholder:"+91 98765 43210",value:e.phone,onChange:f("phone")})})]}),o.jsxs("div",{style:v(280),children:[o.jsxs("label",{className:"form-label",children:["Email Address ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"email",required:!0,placeholder:"jane@example.com",value:e.email,onChange:f("email")})})]}),o.jsxs("div",{style:v(380),children:[o.jsxs("label",{className:"form-label",children:["Type of Space ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsxs("select",{className:"form-select",required:!0,value:e.spaceType,onChange:f("spaceType"),style:{color:e.spaceType===""?"#AAAAAA":"#2C2C2A"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select a space type"}),Mk.map(g=>o.jsx("option",{value:g,children:g},g))]})})]}),o.jsxs("div",{className:"form-field-full",style:v(460),children:[o.jsx("label",{className:"form-label",style:{marginBottom:12},children:"Project Location"}),o.jsx("div",{className:"chip-group",children:Ok.map((g,h)=>o.jsx("span",{style:b(460+h*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.location===g?" selected":""}`,onClick:()=>x("location")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:v(560),children:[o.jsx("label",{className:"form-label",style:{marginBottom:12},children:"Project Type"}),o.jsx("div",{className:"chip-group",children:Vk.map((g,h)=>o.jsx("span",{style:b(560+h*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.projectType===g?" selected":""}`,onClick:()=>x("projectType")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:v(680),children:[o.jsxs("label",{className:"form-label",style:{marginBottom:12},children:["Estimated Budget ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"chip-group",children:Bk.map((g,h)=>o.jsx("span",{style:b(680+h*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.budget===g?" selected":""}`,onClick:()=>x("budget")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:{maxWidth:340,...v(780)},children:[o.jsx("label",{className:"form-label",children:"How Did You Hear About Us?"}),o.jsx("div",{className:"form-field-wrap",children:o.jsxs("select",{className:"form-select",value:e.referral,onChange:f("referral"),style:{color:e.referral===""?"#AAAAAA":"#2C2C2A"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select an option"}),Fk.map(g=>o.jsx("option",{value:g,children:g},g))]})})]}),o.jsxs("div",{className:"form-field-full",style:v(860),children:[o.jsx("label",{className:"form-label",children:"Brief Requirements"}),o.jsx("textarea",{className:"form-textarea",placeholder:"Tell us about your project, style preferences, timeline...",value:e.requirements,onChange:f("requirements")})]})]}),o.jsx("div",{style:v(1e3),children:o.jsx(N.button,{type:"submit",className:"contact-submit-btn",disabled:n==="submitting",whileHover:n==="submitting"?{}:{scale:1.02,boxShadow:"0 8px 28px rgba(45,59,45,0.22)"},whileTap:n==="submitting"?{}:{scale:.97},transition:{duration:.2,ease:"easeOut"},style:{width:"100%",background:"#21291a",color:"#a18661",fontFamily:"'Jost', sans-serif",fontSize:13,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,padding:"18px 24px",border:"none",cursor:n==="submitting"?"not-allowed":"pointer",opacity:n==="submitting"?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:10,borderRadius:8},children:n==="submitting"?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:14,className:"contact-spin"})," Sending..."]}):o.jsxs(o.Fragment,{children:["We’ll get back to you within 24 hours ",o.jsx($e,{size:14})]})})}),n==="error"&&o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12.5,color:"#B85A4A",textAlign:"center",marginTop:14,marginBottom:0},children:i}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,color:"#9a9186",textAlign:"center",marginTop:16,marginBottom:0,...v(1080)},children:"We respect your privacy. No spam, just great design."})]})]})}),o.jsx("div",{style:{height:"100%",opacity:d?1:0,transform:d?"translateX(0)":"translateX(52px)",transition:"opacity 800ms cubic-bezier(0.22,1,0.36,1) 200ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 200ms"},children:o.jsxs("div",{className:"contact-info-card",children:[o.jsxs("div",{children:[o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:26,color:"#262421",margin:"0 0 4px",letterSpacing:"-0.01em"},children:"Nivora Interiors"}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:14,color:"#a18661",margin:"0 0 32px"},children:"From Vision to Execution"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[o.jsxs($a,{icon:o.jsx(Ex,{size:13}),iconStyle:w(0),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Location"}),o.jsxs("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",margin:0,lineHeight:1.5},children:["Shop No. 01, New Dhavalgiri Building,",o.jsx("br",{}),"above Hindustan Co-Op Bank,",o.jsx("br",{}),"Ambernath East, Maharashtra 421501"]})]}),o.jsxs($a,{icon:o.jsx(Nx,{size:13}),iconStyle:w(1),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Phone"}),o.jsx("a",{href:"tel:+917276687805",style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",textDecoration:"none"},children:"+91 72766 87805"})]}),o.jsxs($a,{icon:o.jsx(Cx,{size:13}),iconStyle:w(2),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Email"}),o.jsx("a",{href:"mailto:nivora.inbox@gmail.com",style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",textDecoration:"none"},children:"nivora.inbox@gmail.com"})]})]})]}),o.jsx("div",{children:o.jsxs("div",{style:{borderTop:"1px solid #E8E0D0",paddingTop:28},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[o.jsx(vx,{size:13,style:{color:"#a18661",flexShrink:0}}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:0},children:"Studio Hours"})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,color:"#2C2C2A",margin:0},children:"Monday – Saturday: 10:00 AM – 7:00 PM"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,color:"#888880",margin:0,fontStyle:"italic"},children:"Sunday: By appointment only"})]})]})}),o.jsx("div",{style:{padding:"14px 18px",border:"1px solid #E8E0D0",borderRadius:12,background:"rgba(245,240,232,0.5)"},children:o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:13,color:"#888880",margin:0,lineHeight:1.6},children:'"We respect your privacy. No spam, just great design."'})}),o.jsx("div",{style:{flex:1,minHeight:220,borderRadius:12,overflow:"hidden",marginTop:8},children:o.jsx("iframe",{title:"Nivora Interiors Location",src:"https://maps.google.com/maps?q=New+Dhavalgiri+Building,+Ambernath+East,+Maharashtra+421501,+India&output=embed",width:"100%",height:"100%",style:{border:0,display:"block",minHeight:220},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})]})})]})}function $a({icon:e,children:t,iconStyle:n}){return o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14},children:[o.jsx(N.div,{whileHover:{rotate:[0,-8,8,-4,0],transition:{duration:.4,ease:"easeInOut"}},style:{width:36,height:36,border:"1px solid rgba(201,169,110,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,borderRadius:8,color:"#a18661",cursor:"default",...n},children:e}),o.jsx("div",{children:t})]})}const Wk=["Ambernath","Kalyan","Pune","Mumbai","Other"],Hk=["2BHK","3BHK+","Villa / Bungalow","Office","Retail / Commercial"],Uk=["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"];function $k(){const e=$t(),[t,n]=m.useState({name:"",phone:"",location:"",projectType:"",budget:"",requirements:""}),r=(s,a)=>n(l=>({...l,[s]:a})),i=s=>{s.preventDefault(),e("/thank-you")};return o.jsxs("div",{className:"bg-[#3b4a35] pt-20 min-h-screen",children:[o.jsxs("section",{className:"relative py-28 px-6 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-[0.12]",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 50% 50%, #b8966a 0%, transparent 45%)"}})}),o.jsx("div",{className:"max-w-3xl mx-auto text-center relative",children:o.jsxs(se,{children:[o.jsx("p",{className:"text-[#b8966a] text-[10px] tracking-[0.4em] uppercase mb-4",children:"Free Consultation"}),o.jsxs("h1",{className:"font-serif text-5xl md:text-6xl text-[#f5f0e8] font-light leading-tight mb-6",style:{fontFamily:"'Playfair Display', serif",fontWeight:400},children:["Let's Design Your Space",o.jsx("br",{}),o.jsx("em",{className:"text-[#b8966a]",children:"— The Right Way"})]}),o.jsx("p",{className:"text-[#f5f0e8]/50 font-light leading-relaxed max-w-xl mx-auto",children:"Get a Free Layout Consultation (Worth ₹5,000) and understand how your space can be planned better — before you spend a single rupee."})]})})]}),o.jsx("section",{className:"max-w-3xl mx-auto px-6 pb-32",children:o.jsx(se,{children:o.jsxs("form",{onSubmit:i,className:"space-y-8",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Full Name *"}),o.jsx("input",{type:"text",required:!0,value:t.name,onChange:s=>r("name",s.target.value),placeholder:"Your full name",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Phone Number *"}),o.jsx("input",{type:"tel",required:!0,value:t.phone,onChange:s=>r("phone",s.target.value),placeholder:"+91 00000 00000",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Project Location *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Wk.map(s=>o.jsx("button",{type:"button",onClick:()=>r("location",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.location===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Project Type *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Hk.map(s=>o.jsx("button",{type:"button",onClick:()=>r("projectType",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.projectType===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Estimated Budget *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Uk.map(s=>o.jsx("button",{type:"button",onClick:()=>r("budget",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.budget===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Brief Requirements"}),o.jsx("textarea",{rows:4,value:t.requirements,onChange:s=>r("requirements",s.target.value),placeholder:"Tell us a little about what you have in mind...",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300 resize-none"})]}),o.jsxs("button",{type:"submit",className:"w-full bg-[#b8966a] text-[#3b4a35] text-sm tracking-[0.25em] uppercase py-5 hover:bg-[#d4b896] transition-all duration-300 font-medium flex items-center justify-center gap-3 mt-4",children:["Claim My Free Layout Design ",o.jsx($e,{size:15})]}),o.jsx("p",{className:"text-center text-[#f5f0e8]/25 text-xs font-light tracking-wider",children:"We respect your privacy. No spam, just great design."})]})})})]})}const Ya=(e=0)=>({initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.55,ease:[.22,1,.36,1],delay:e}}),Jr=(e=0)=>({initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,ease:"easeOut",delay:e}}),sm={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#a18661"},Yk="917276687805",Kk=`Hi NIVORA Interiors!

I’d love to discuss my interior project with your team. I’ve just submitted an enquiry through your website and would like to know more about how we can work together.

Looking forward to connecting!`,Gk=`https://wa.me/${Yk}?text=${encodeURIComponent(Kk)}`,Xk=["We review your enquiry and match you with the right design approach.","Our Designer will personally reach out to understand your vision and requirements.","We begin understanding your space, lifestyle, and vision.","You receive a tailored design brief and next steps."];function qk(){return o.jsx("div",{className:"bg-[#f5f2ed] min-h-screen pt-20 flex items-center",children:o.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-24 text-center",children:[o.jsx(N.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.6,ease:[.34,1.56,.64,1]},className:"mb-10 flex justify-center",children:o.jsx("div",{className:"w-24 h-24 border border-[#a18661]/50 rounded-full flex items-center justify-center",children:o.jsx(yx,{size:40,className:"text-[#a18661]",strokeWidth:1.5})})}),o.jsx(N.p,{...Jr(.2),style:sm,className:"mb-6",children:"Enquiry Received"}),o.jsxs("div",{className:"mb-6",children:[o.jsx(N.span,{...Ya(.5),className:"block",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.75rem)",color:"#21291a",lineHeight:1.15,letterSpacing:"-0.01em"},children:"Success! Your Vision"}),o.jsx(N.span,{...Ya(.7),className:"block italic",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.75rem)",color:"#a18661",lineHeight:1.15,letterSpacing:"-0.01em"},children:"Is in Good Hands."})]}),o.jsx(N.p,{...Jr(.85),className:"font-light leading-relaxed max-w-md mx-auto mb-10",style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"#5c5c5c"},children:"Thank you for reaching out to NIVORA. We've received your enquiry and will be in touch within 24 hours to discuss your requirements."}),o.jsxs(N.div,{...Ya(1.05),className:"mb-10 text-left rounded-sm",style:{background:"#ffffff",border:"1px solid #e0d9ce",boxShadow:"0 4px 24px rgba(33,41,26,0.06)",padding:"clamp(1.5rem, 4vw, 2rem)"},children:[o.jsx("p",{style:{...sm,marginBottom:20},children:"What Happens Next"}),o.jsx("ol",{className:"space-y-4",children:Xk.map((e,t)=>o.jsxs(N.li,{...Jr(1.2+t*.1),className:"flex items-start gap-4 text-sm font-light",style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"#2c2c2c",lineHeight:1.7},children:[o.jsx("span",{className:"shrink-0",style:{fontFamily:"'Playfair Display', serif",color:"#a18661",fontSize:14,fontWeight:400},children:String(t+1).padStart(2,"0")}),e]},t))})]}),o.jsxs(N.div,{...Jr(1.65),className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(he,{to:"/",className:"inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-[#21291a] hover:text-[#f5f2ed]",style:{border:"1px solid #21291a",color:"#21291a",fontFamily:"'Inter', sans-serif",fontWeight:400},children:"Back to Home"}),o.jsxs(he,{to:"/portfolio",className:"inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-[#8a7050]",style:{background:"#a18661",color:"#ffffff",fontFamily:"'Inter', sans-serif",fontWeight:400},children:["Explore Our Work ",o.jsx($e,{size:13})]})]}),o.jsx(N.div,{...Jr(1.8),className:"mt-12",children:o.jsx("a",{href:Gk,target:"_blank",rel:"noopener noreferrer",className:"text-sm font-light transition-colors duration-300 hover:text-[#a18661]",style:{color:"#9c9c9c",fontFamily:"'Inter', sans-serif",fontWeight:300},children:"Prefer to chat right now? Message us on WhatsApp →"})})]})})}function Jk({images:e,startIndex:t,projectName:n,onClose:r}){const[i,s]=m.useState(t),[a,l]=m.useState(!1),[c,u]=m.useState(!1),d=m.useRef(0),p=m.useCallback(()=>{s(x=>(x-1+e.length)%e.length),l(!1),u(!1)},[e.length]),f=m.useCallback(()=>{s(x=>(x+1)%e.length),l(!1),u(!1)},[e.length]);return m.useEffect(()=>{const x=v=>{v.key==="ArrowLeft"?p():v.key==="ArrowRight"?f():v.key==="Escape"&&r()};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow=""}},[p,f,r]),o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.93)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:x=>{x.target===x.currentTarget&&r()},onTouchStart:x=>{d.current=x.touches[0].clientX},onTouchEnd:x=>{const v=x.changedTouches[0].clientX-d.current;Math.abs(v)>50&&(v<0?f():p())},children:[o.jsx("style",{children:`
        @keyframes lb-spin { to { transform: rotate(360deg) } }
        .lb-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: background 0.2s;
        }
        .lb-btn:hover { background: rgba(255,255,255,0.18); }
      `}),o.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",background:"linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:[o.jsx("span",{style:{color:"rgba(255,255,255,0.45)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase"},children:n}),o.jsxs("span",{style:{color:"rgba(255,255,255,0.5)",fontSize:12,letterSpacing:"0.15em",position:"absolute",left:"50%",transform:"translateX(-50%)"},children:[i+1," / ",e.length]}),o.jsxs("div",{style:{display:"flex",gap:10},children:[o.jsx("button",{className:"lb-btn",style:{width:40,height:40},onClick:()=>u(x=>!x),title:c?"Zoom out":"Zoom in",children:c?o.jsx(JS,{size:17}):o.jsx(qS,{size:17})}),o.jsx("button",{className:"lb-btn",style:{width:40,height:40},onClick:r,title:"Close (Esc)",children:o.jsx(jt,{size:18})})]})]}),o.jsx("button",{className:"lb-btn",onClick:x=>{x.stopPropagation(),p()},style:{position:"absolute",left:16,width:48,height:48},title:"Previous",children:o.jsx(AS,{size:24})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",padding:"72px 80px",boxSizing:"border-box",overflow:"hidden"},children:[!a&&o.jsx("div",{style:{position:"absolute",width:40,height:40,borderRadius:"50%",border:"3px solid rgba(255,255,255,0.12)",borderTopColor:"#D4B483",animation:"lb-spin 0.75s linear infinite"}}),o.jsx("img",{src:e[i],alt:`${n} — image ${i+1}`,onLoad:()=>l(!0),onClick:x=>{x.stopPropagation(),u(v=>!v)},style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:6,opacity:a?1:0,transform:c?"scale(1.65)":"scale(1)",transition:"opacity 0.25s ease, transform 0.35s ease",cursor:c?"zoom-out":"zoom-in",userSelect:"none"}},e[i])]}),o.jsx("button",{className:"lb-btn",onClick:x=>{x.stopPropagation(),f()},style:{position:"absolute",right:16,width:48,height:48},title:"Next",children:o.jsx(xx,{size:24})}),e.length<=20&&o.jsx("div",{style:{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",gap:6,alignItems:"center"},children:e.map((x,v)=>o.jsx("button",{onClick:b=>{b.stopPropagation(),s(v),l(!1),u(!1)},style:{width:v===i?20:7,height:7,borderRadius:4,background:v===i?"#D4B483":"rgba(255,255,255,0.28)",border:"none",cursor:"pointer",padding:0,transition:"all 0.25s ease"}},v))})]})}function Qk(){return o.jsxs("div",{style:{background:"#FFFCF7"},className:"pt-20",children:[o.jsx("style",{children:`
        @keyframes sk-shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
        .sk { background: linear-gradient(90deg,#e4ddd4 25%,#ede6dc 50%,#e4ddd4 75%); background-size:200% 100%; animation: sk-shimmer 1.4s infinite; border-radius: 6px; }
      `}),o.jsx("div",{className:"sk",style:{height:"70vh"}}),o.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"60px 24px"},children:[o.jsx("div",{className:"sk",style:{height:16,width:120,marginBottom:24}}),o.jsx("div",{className:"sk",style:{height:40,width:"60%",marginBottom:16}}),o.jsx("div",{className:"sk",style:{height:16,width:"80%",marginBottom:8}}),o.jsx("div",{className:"sk",style:{height:16,width:"70%"}})]})]})}function Zk(){const{id:e}=Hv(),[t,n]=m.useState(null),[r,i]=m.useState(!0),[s,a]=m.useState(!1),[l,c]=m.useState(null),[u,d]=m.useState(!1);m.useEffect(()=>{const v=()=>d(window.innerWidth<768);return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const p=m.useCallback(v=>c(v),[]),f=m.useCallback(()=>c(null),[]);if(m.useEffect(()=>{e&&(i(!0),a(!1),Rx(e).then(v=>{n(v),i(!1)}).catch(v=>{var w,g;console.error("Project detail fetch error:",v);const b=((w=v.message)==null?void 0:w.includes("404"))||((g=v.message)==null?void 0:g.includes("not found"));a(b),i(!1)}))},[e]),r)return o.jsx(Qk,{});if(s||!t)return o.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:"#FFFCF7"},children:o.jsxs("div",{className:"text-center",children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1rem"},children:"404"}),o.jsx("h1",{className:"font-serif text-4xl font-light mb-6",style:{color:"#2E2A26"},children:"Project Not Found"}),o.jsx(he,{to:"/portfolio",style:{color:"#D4B483",fontSize:12,letterSpacing:"0.2em",textTransform:"uppercase"},className:"hover:opacity-70 transition-opacity",children:"← Back to Portfolio"})]})});const x=t.images.filter(v=>v&&v.trim()!=="");return o.jsxs("div",{style:{background:"#FFFCF7"},className:"pt-20",children:[o.jsxs("div",{className:"relative overflow-hidden",style:{height:u?"auto":"70vh",background:!u&&t.id==="the-quite-curve"?"#2D3E29":void 0},children:[o.jsx("img",{src:t.heroImage||t.images[0]||t.coverImage,alt:t.name,className:u?"w-full block":"w-full h-full object-cover",style:{filter:"contrast(1.07) saturate(1.05)",...u?{height:"auto",objectFit:"contain"}:{},...!u&&t.id==="the-quite-curve"?{transform:"scale(0.92)",transformOrigin:"center center"}:{}}}),o.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.52) 100%)"}}),o.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-12",style:{maxWidth:"80rem",margin:"0 auto"},children:o.jsxs(se,{children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"0.75rem"},children:t.badge||`${t.category} · ${t.year}`}),o.jsx("h1",{className:"font-serif font-light mb-2",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.5rem, 6vw, 4.5rem)",color:"#f5f0e8",lineHeight:1.1,letterSpacing:"-0.01em"},children:t.name}),o.jsx("p",{style:{color:"rgba(245,240,232,0.7)",letterSpacing:"0.08em"},children:t.location})]})})]}),o.jsx("div",{style:{background:"#F7F2EA"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 py-6",children:o.jsxs(he,{to:"/portfolio",className:"inline-flex items-center gap-2 transition-opacity hover:opacity-70",style:{color:"#D4B483",fontSize:12,letterSpacing:"0.2em",textTransform:"uppercase"},children:[o.jsx(CS,{size:13})," Back to Portfolio"]})})}),o.jsx("div",{style:{background:"#FFFCF7"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 py-20",children:u?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem"},children:[o.jsx(N.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:0,ease:"easeOut"},style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:t.conceptLabel||"The Concept"}),o.jsx(N.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.15,ease:"easeOut"},className:"font-serif leading-snug",style:{fontFamily:"'Playfair Display', serif",fontWeight:700,fontSize:"1.5rem",color:"#262421",letterSpacing:"-0.01em",margin:0},children:t.concept}),o.jsx(N.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.3,ease:"easeOut"},style:{color:"#2E2A26",opacity:.6,lineHeight:1.7,fontWeight:300,fontSize:15,margin:0},children:t.description}),o.jsx(N.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.45,ease:"easeOut"},style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:t.designIntentLabel||"Design Intent"}),o.jsxs(N.p,{initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.7,delay:.55,ease:"easeOut"},className:"font-serif font-light italic",style:{fontSize:15,color:"#2E2A26",opacity:.75,lineHeight:1.7,margin:0},children:['"',t.designIntent,'"']}),t.materials.length>0&&o.jsxs(N.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.65,ease:"easeOut"},children:[o.jsx("div",{style:{borderTop:"1px solid #D4B483",marginBottom:"0.875rem"}}),o.jsx("p",{style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:"Materials Used"})]}),o.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:t.materials.map((v,b)=>o.jsxs(N.li,{initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.75+b*.08,ease:"easeOut"},style:{display:"flex",alignItems:"center",gap:"0.75rem",color:"#2E2A26",opacity:.6,fontSize:14,fontWeight:300,lineHeight:1.8},children:[o.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#D4B483",flexShrink:0}}),v]},v))})]}):o.jsxs("div",{className:"grid lg:grid-cols-2 gap-20",children:[o.jsxs("div",{children:[o.jsx(N.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:0,ease:"easeOut"},style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.5rem"},children:t.conceptLabel||"The Concept"}),o.jsx(N.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.15,ease:"easeOut"},className:"font-serif font-light mb-6 leading-snug",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"1.875rem",color:"#262421",letterSpacing:"-0.01em"},children:t.concept}),o.jsx(N.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.3,ease:"easeOut"},style:{color:"#2E2A26",opacity:.6,lineHeight:"1.9",fontWeight:300},children:t.description}),t.materials.length>0&&o.jsxs("div",{style:{marginTop:"2.5rem"},children:[o.jsxs(N.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.65,ease:"easeOut"},children:[o.jsx("div",{style:{borderTop:"1px solid #D4B483",marginBottom:"0.875rem"}}),o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.25rem"},children:"Materials Used"})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem 2rem"},children:t.materials.map((v,b)=>o.jsxs(N.div,{initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.75+b*.08,ease:"easeOut"},style:{display:"flex",alignItems:"center",gap:"0.75rem",color:"#2E2A26",opacity:.6,fontSize:"0.875rem",fontWeight:300,lineHeight:1.8},children:[o.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#D4B483",flexShrink:0}}),v]},v))})]})]}),o.jsxs("div",{children:[o.jsx(N.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.45,ease:"easeOut"},style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.5rem"},children:t.designIntentLabel||"Design Intent"}),o.jsxs(N.p,{initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.7,delay:.55,ease:"easeOut"},className:"font-serif font-light italic",style:{fontSize:"1.5rem",color:"#2E2A26",opacity:.75,lineHeight:"1.7"},children:['"',t.designIntent,'"']})]})]})})}),x.length>0&&o.jsxs("div",{style:{background:"#F7F2EA"},children:[o.jsx("style",{children:`
            .gallery-grid {
              column-count: 3;
              column-gap: 10px;
            }
            .gallery-item {
              break-inside: avoid;
              margin-bottom: 10px;
            }
            .gallery-thumb-wrap {
              border-radius: 12px;
              overflow: hidden;
              border: 1px solid #E9DED0;
              box-shadow: 0 2px 12px rgba(46,42,38,0.06);
              cursor: pointer;
              line-height: 0;
            }
            .gallery-thumb {
              display: block;
              width: 100%;
              height: auto;
              transition: transform 0.4s ease, opacity 0.3s ease;
            }
            .gallery-thumb:hover { transform: scale(1.03); opacity: 0.88; }
            @media (max-width: 767px) {
              .gallery-grid { column-count: 2; column-gap: 7px; }
              .gallery-item { margin-bottom: 7px; }
            }
            @media (max-width: 480px) {
              .gallery-grid { column-count: 1; }
            }
          `}),o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-14",children:[o.jsx(se,{children:o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"2rem",textAlign:"center"},children:"The Gallery"})}),o.jsx("div",{className:"gallery-grid",children:x.map((v,b)=>o.jsx(se,{delay:Math.min(b*.07,.5),className:"gallery-item",children:o.jsx("div",{className:"gallery-thumb-wrap",onClick:()=>p(b),children:o.jsx("img",{src:v,alt:`${t.name} — view ${b+2}`,className:"gallery-thumb",loading:"lazy"})})},`${b}-${v}`))})]})]}),o.jsx("div",{style:{background:"#FFFCF7"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6",children:o.jsxs(se,{className:"text-center py-24",style:{borderTop:"1px solid #E9DED0"},children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1rem"},children:"Start Your Project"}),o.jsx("h2",{className:"font-serif font-light mb-8",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"2.5rem",color:"#262421",letterSpacing:"-0.01em"},children:"Ready to design your space?"}),o.jsx(he,{to:"/contact",className:"inline-flex items-center gap-2 transition-all duration-300 font-medium text-xs tracking-[0.2em] uppercase px-10 py-4",style:{background:"linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",color:"#2E2A26",borderRadius:4,textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"},onMouseEnter:v=>{const b=v.currentTarget;b.style.background="linear-gradient(135deg, #E5C68A 0%, #D4AA73 50%, #C49B5E 100%)",b.style.transform="translateY(-2px)",b.style.boxShadow="0 10px 25px rgba(185,139,78,0.25)"},onMouseLeave:v=>{const b=v.currentTarget;b.style.background="linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",b.style.transform="translateY(0)",b.style.boxShadow="none"},children:"Book a Free Consultation"})]})})}),l!==null&&o.jsx(Jk,{images:x,startIndex:l,projectName:t.name,onClose:f})]})}function e6(){const e=$t(),[t,n]=m.useState(""),[r,i]=m.useState(""),[s,a]=m.useState(""),[l,c]=m.useState(!1),u=async d=>{d.preventDefault(),c(!0),a("");try{await ZS(t,r),e("/adminpannel/dashboard")}catch(p){a(p.message),c(!1)}};return o.jsxs("div",{className:"admin-login-root",children:[o.jsxs("div",{className:"admin-login-card",children:[o.jsxs("div",{className:"admin-login-logo",children:[o.jsx("span",{className:"admin-login-brand",children:"nivora"}),o.jsx("span",{className:"admin-login-sub",children:"ADMIN PANEL"})]}),o.jsxs("form",{onSubmit:u,className:"admin-login-form",children:[o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Username"}),o.jsx("input",{type:"text",value:t,onChange:d=>n(d.target.value),placeholder:"Enter username",autoFocus:!0,required:!0})]}),o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:r,onChange:d=>i(d.target.value),placeholder:"Enter password",required:!0})]}),s&&o.jsx("p",{className:"admin-login-error",children:s}),o.jsx("button",{type:"submit",className:"admin-btn-primary",disabled:l,children:l?"Signing in…":"Sign In"})]})]}),o.jsx("style",{children:`
        .admin-login-root {
          min-height: 100vh;
          background: #f0ebe3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Georgia', serif;
        }
        .admin-login-card {
          background: #ffffff;
          border: 1px solid #e2d9ce;
          border-radius: 6px;
          padding: 48px 40px;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 8px 40px rgba(100,80,60,0.10);
        }
        .admin-login-logo {
          text-align: center;
          margin-bottom: 36px;
        }
        .admin-login-brand {
          display: block;
          font-size: 32px;
          letter-spacing: 0.12em;
          color: #7a6245;
          font-style: italic;
        }
        .admin-login-sub {
          display: block;
          font-size: 10px;
          letter-spacing: 0.35em;
          color: #b5a99a;
          margin-top: 4px;
          font-family: 'Arial', sans-serif;
        }
        .admin-login-form { display: flex; flex-direction: column; gap: 20px; }
        .admin-field { display: flex; flex-direction: column; gap: 6px; }
        .admin-field label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #9a8e82;
          font-family: 'Arial', sans-serif;
          text-transform: uppercase;
        }
        .admin-field input {
          background: #faf8f5;
          border: 1px solid #ddd7ce;
          border-radius: 4px;
          color: #1a1612;
          font-size: 14px;
          padding: 11px 14px;
          outline: none;
          font-family: 'Arial', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .admin-field input:focus { border-color: #7a6245; box-shadow: 0 0 0 3px rgba(122,98,69,0.08); }
        .admin-field input::placeholder { color: #c8c0b5; }
        .admin-login-error {
          color: #b85a4a;
          font-size: 13px;
          font-family: 'Arial', sans-serif;
          margin: 0;
        }
        .admin-btn-primary {
          background: #7a6245;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 13px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'Arial', sans-serif;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s, opacity 0.2s;
          margin-top: 4px;
        }
        .admin-btn-primary:hover:not(:disabled) { background: #6a5438; }
        .admin-btn-primary:disabled { opacity: 0.5; cursor: default; }
      `})]})}function Ka(e){return e.includes("/upload/")?e.replace("/upload/","/upload/w_300,h_225,c_fill,q_auto,f_auto/"):e}const t6={id:"",name:"",location:"",category:"residential",year:new Date().getFullYear().toString(),conceptLabel:"The Concept",concept:"",description:"",designIntentLabel:"Design Intent",designIntent:"",materials:[],coverImage:"",heroImage:"",images:[]};function am({initial:e,onSave:t,onCancel:n,isEdit:r}){const[i,s]=m.useState({...t6,...e}),[a,l]=m.useState(""),[c,u]=m.useState(!1),[d,p]=m.useState(""),[f,x]=m.useState(!1),[v,b]=m.useState(!1),[w,g]=m.useState(!1),h=m.useRef(null),y=m.useRef(null),S=m.useRef(null),[j,k]=m.useState(""),[E,C]=m.useState(""),[O,D]=m.useState(""),V=()=>{const P=j.trim();P&&(F("coverImage",P),k(""))},_=()=>{const P=E.trim();P&&(F("heroImage",P),C(""))},$=()=>{const P=O.trim();P&&(F("images",[...i.images||[],P]),D(""))},F=(P,z)=>s(B=>({...B,[P]:z})),Q=P=>P.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),R=P=>{F("name",P),r||F("id",Q(P))},A=()=>{const P=a.trim();P&&(F("materials",[...i.materials||[],P]),l(""))},T=P=>F("materials",(i.materials||[]).filter((z,B)=>B!==P)),M=async P=>{const z=Array.from(P.target.files||[]);if(z.length){x(!0);try{const B=await Ha([z[0]]);F("coverImage",B[0])}catch(B){p(B.message)}finally{x(!1),h.current&&(h.current.value="")}}},W=async P=>{const z=Array.from(P.target.files||[]);if(z.length){b(!0);try{const B=await Ha([z[0]]);F("heroImage",B[0])}catch(B){p(B.message)}finally{b(!1),y.current&&(y.current.value="")}}},q=async P=>{const z=Array.from(P.target.files||[]);if(z.length){g(!0);try{const B=await Ha(z);F("images",[...i.images||[],...B])}catch(B){p(B.message)}finally{g(!1),S.current&&(S.current.value="")}}},ee=P=>F("images",(i.images||[]).filter((z,B)=>B!==P)),lt=(P,z)=>{const B=[...i.images||[]],[Ee]=B.splice(P,1);B.splice(z,0,Ee),F("images",B)},Ve=async()=>{var P,z;if(p(""),!((P=i.name)!=null&&P.trim()))return p("Project name is required.");if(!((z=i.id)!=null&&z.trim()))return p("Project ID / slug is required.");if(!i.category)return p("Category is required.");u(!0);try{await t(i)}catch(B){p(B.message)}finally{u(!1)}};return o.jsxs("div",{className:"apf-overlay",children:[o.jsxs("div",{className:"apf-panel",children:[o.jsxs("div",{className:"apf-header",children:[o.jsx("h2",{className:"apf-title",children:r?"Edit Project":"Add New Project"}),o.jsx("button",{className:"apf-close",onClick:n,children:o.jsx(jt,{size:20})})]}),o.jsxs("div",{className:"apf-body",children:[d&&o.jsx("div",{className:"apf-error",children:d}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Basic Information"}),o.jsxs("div",{className:"apf-grid-2",children:[o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Project Name ",o.jsx("span",{className:"req",children:"*"})]}),o.jsx("input",{value:i.name||"",onChange:P=>R(P.target.value),placeholder:"e.g. Serenity Villa"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Slug / ID ",o.jsx("span",{className:"req",children:"*"})]}),o.jsx("input",{value:i.id||"",onChange:P=>F("id",Q(P.target.value)),placeholder:"e.g. serenity-villa-mumbai",readOnly:r,style:r?{opacity:.5}:{}})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Location"}),o.jsx("input",{value:i.location||"",onChange:P=>F("location",P.target.value),placeholder:"e.g. Juhu, Mumbai"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Year"}),o.jsx("input",{value:i.year||"",onChange:P=>F("year",P.target.value),placeholder:"e.g. 2024"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Category ",o.jsx("span",{className:"req",children:"*"})]}),o.jsxs("select",{value:i.category||"residential",onChange:P=>F("category",P.target.value),children:[o.jsx("option",{value:"residential",children:"Residential"}),o.jsx("option",{value:"commercial",children:"Commercial"}),o.jsx("option",{value:"architecture",children:"Architecture"})]})]})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Concept Section"}),o.jsxs("div",{className:"apf-grid-2",children:[o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Concept Label"}),o.jsx("input",{value:i.conceptLabel||"",onChange:P=>F("conceptLabel",P.target.value),placeholder:"The Concept"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Concept Tagline"}),o.jsx("input",{value:i.concept||"",onChange:P=>F("concept",P.target.value),placeholder:"e.g. Calm monumentality with organic textures"})]})]}),o.jsxs("div",{className:"apf-field apf-field-full",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{rows:4,value:i.description||"",onChange:P=>F("description",P.target.value),placeholder:"Long-form description of the project…"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Design Intent"}),o.jsx("div",{className:"apf-grid-2",children:o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Design Intent Label"}),o.jsx("input",{value:i.designIntentLabel||"",onChange:P=>F("designIntentLabel",P.target.value),placeholder:"Design Intent"})]})}),o.jsxs("div",{className:"apf-field apf-field-full",children:[o.jsx("label",{children:"Design Intent Quote"}),o.jsx("textarea",{rows:3,value:i.designIntent||"",onChange:P=>F("designIntent",P.target.value),placeholder:"e.g. To create a home that breathes — where every surface tells a quiet story."})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Materials"}),o.jsxs("div",{className:"apf-materials-input",children:[o.jsx("input",{value:a,onChange:P=>l(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(P.preventDefault(),A())},placeholder:"e.g. Lime-washed oak — press Enter or click Add"}),o.jsxs("button",{type:"button",className:"apf-add-btn",onClick:A,children:[o.jsx(Ki,{size:16})," Add"]})]}),(i.materials||[]).length>0&&o.jsx("div",{className:"apf-tags",children:(i.materials||[]).map((P,z)=>o.jsxs("span",{className:"apf-tag",children:[P,o.jsx("button",{onClick:()=>T(z),children:o.jsx(jt,{size:12})})]},z))})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Cover Image"}),o.jsx("p",{className:"apf-hint",children:"The thumbnail image shown on the Portfolio page card."}),i.coverImage?o.jsxs("div",{className:"apf-cover-preview",children:[o.jsx("img",{src:Ka(i.coverImage),alt:"Cover",loading:"lazy",decoding:"async"}),o.jsxs("button",{className:"apf-cover-remove",onClick:()=>F("coverImage",""),children:[o.jsx(jt,{size:14})," Remove"]})]}):o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var P;return(P=h.current)==null?void 0:P.click()},children:f?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Xo,{size:24})," Click to upload cover image"]})}),o.jsx("input",{ref:h,type:"file",accept:"image/*",style:{display:"none"},onChange:M}),!i.coverImage&&o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:j,onChange:P=>k(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(P.preventDefault(),V())},placeholder:"https://example.com/cover.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:V,disabled:!j.trim(),children:"Use URL"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Hero Image"}),o.jsx("p",{className:"apf-hint",children:"The large banner image shown at the top of the project detail page."}),i.heroImage?o.jsxs("div",{className:"apf-cover-preview",children:[o.jsx("img",{src:Ka(i.heroImage),alt:"Hero",loading:"lazy",decoding:"async"}),o.jsxs("button",{className:"apf-cover-remove",onClick:()=>F("heroImage",""),children:[o.jsx(jt,{size:14})," Remove"]})]}):o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var P;return(P=y.current)==null?void 0:P.click()},children:v?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Xo,{size:24})," Click to upload hero image"]})}),o.jsx("input",{ref:y,type:"file",accept:"image/*",style:{display:"none"},onChange:W}),!i.heroImage&&o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:E,onChange:P=>C(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(P.preventDefault(),_())},placeholder:"https://example.com/hero.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:_,disabled:!E.trim(),children:"Use URL"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Gallery Images"}),o.jsx("p",{className:"apf-hint",children:"Shown on the project detail page. Reorder with ↑ ↓."}),o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var P;return(P=S.current)==null?void 0:P.click()},children:w?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Xo,{size:24})," Click to upload gallery images (multiple allowed)"]})}),o.jsx("input",{ref:S,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:q}),o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:O,onChange:P=>D(P.target.value),onKeyDown:P=>{P.key==="Enter"&&(P.preventDefault(),$())},placeholder:"https://example.com/image.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:$,disabled:!O.trim(),children:"Add URL"})]}),(i.images||[]).length>0&&o.jsx("div",{className:"apf-gallery-grid",children:(i.images||[]).map((P,z)=>o.jsxs("div",{className:`apf-gallery-item${i.heroImage===P?" apf-gallery-item-hero":""}`,children:[o.jsx("img",{src:Ka(P),alt:`Image ${z+1}`,loading:"lazy",decoding:"async"}),o.jsx("div",{className:"apf-gallery-overlay",children:o.jsx("button",{onClick:()=>ee(z),title:"Remove",className:"apf-gal-btn apf-gal-btn-del",children:o.jsx(jt,{size:12})})}),o.jsxs("div",{className:"apf-gallery-order",children:[z>0&&o.jsx("button",{onClick:()=>lt(z,z-1),className:"apf-ord-btn",children:"↑"}),z<(i.images||[]).length-1&&o.jsx("button",{onClick:()=>lt(z,z+1),className:"apf-ord-btn",children:"↓"})]}),o.jsxs("button",{onClick:()=>F("heroImage",i.heroImage===P?"":P),title:i.heroImage===P?"Unset as hero image":"Use as hero image",className:`apf-hero-toggle${i.heroImage===P?" apf-hero-toggle-active":""}`,children:[o.jsx(GS,{size:11,fill:i.heroImage===P?"currentColor":"none"}),i.heroImage===P?"Hero":"Set Hero"]}),o.jsxs("span",{className:"apf-gallery-num",children:["#",z+1]})]},z))})]})]}),o.jsxs("div",{className:"apf-footer",children:[o.jsx("button",{className:"apf-btn-ghost",onClick:n,children:"Cancel"}),o.jsx("button",{className:"apf-btn-save",onClick:Ve,disabled:c,children:c?o.jsxs(o.Fragment,{children:[o.jsx(De,{size:15,className:"apf-spin"})," Saving…"]}):r?"Save Changes":"Create Project"})]})]}),o.jsx("style",{children:`
        .apf-overlay {
          position: fixed; inset: 0; z-index: 1000;
          background: rgba(60,40,20,0.45);
          display: flex; align-items: flex-start; justify-content: center;
          overflow-y: auto; padding: 32px 16px;
        }
        .apf-panel {
          background: #ffffff;
          border: 1px solid #e2d9ce;
          border-radius: 8px;
          width: 100%; max-width: 1200px;
          display: flex; flex-direction: column;
          box-shadow: 0 16px 60px rgba(100,70,40,0.18);
        }
        .apf-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 24px 32px;
          border-bottom: 1px solid #ede8e1;
        }
        .apf-title { margin: 0; font-size: 20px; color: #1a1612; font-weight: normal; letter-spacing: 0.03em; }
        .apf-close {
          background: none; border: none; color: #b0a498; cursor: pointer; padding: 4px;
          border-radius: 4px; transition: color 0.2s;
          display: flex; align-items: center;
        }
        .apf-close:hover { color: #7a6245; }
        .apf-body { padding: 24px 32px; display: flex; flex-direction: column; gap: 0; overflow-y: auto; }
        .apf-section { margin-bottom: 32px; }
        .apf-section-title {
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          color: #b0a498; font-family: Arial, sans-serif; margin: 0 0 16px 0;
          padding-bottom: 8px; border-bottom: 1px solid #ede8e1; font-weight: 600;
        }
        .apf-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
        @media (max-width: 600px) { .apf-grid-2 { grid-template-columns: 1fr; } }
        .apf-field { display: flex; flex-direction: column; gap: 6px; }
        .apf-field-full { width: 100%; }
        .apf-field label {
          font-size: 11px; letter-spacing: 0.15em; color: #9a8e82;
          font-family: Arial, sans-serif; text-transform: uppercase;
        }
        .req { color: #b85a4a; }
        .apf-field input, .apf-field select, .apf-field textarea {
          background: #faf8f5; border: 1px solid #ddd7ce;
          border-radius: 4px; color: #1a1612; font-size: 14px;
          padding: 10px 12px; outline: none; font-family: Arial, sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s; resize: vertical;
        }
        .apf-field input:focus, .apf-field select:focus, .apf-field textarea:focus {
          border-color: #7a6245; box-shadow: 0 0 0 3px rgba(122,98,69,0.08);
        }
        .apf-field input::placeholder, .apf-field textarea::placeholder { color: #c8c0b5; }
        .apf-field select option { background: #ffffff; color: #1a1612; }
        .apf-hint { font-size: 12px; color: #b0a498; font-family: Arial, sans-serif; margin: 0 0 12px 0; }
        .apf-error {
          background: #fdf0ee; border: 1px solid #e8b5ad; border-radius: 4px;
          color: #b85a4a; font-size: 13px; font-family: Arial, sans-serif;
          padding: 10px 14px; margin-bottom: 16px;
        }
        .apf-materials-input { display: flex; gap: 8px; }
        .apf-materials-input input {
          flex: 1; background: #faf8f5; border: 1px solid #ddd7ce;
          border-radius: 4px; color: #1a1612; font-size: 14px;
          padding: 10px 12px; outline: none; font-family: Arial, sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .apf-materials-input input:focus { border-color: #7a6245; box-shadow: 0 0 0 3px rgba(122,98,69,0.08); }
        .apf-add-btn {
          display: flex; align-items: center; gap: 6px;
          background: #f0ebe3; border: 1px solid #ddd7ce;
          color: #7a6245; border-radius: 4px; padding: 0 16px;
          font-size: 13px; font-family: Arial, sans-serif; cursor: pointer;
          white-space: nowrap; transition: background 0.2s;
        }
        .apf-add-btn:hover { background: #e8e0d5; }
        .apf-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
        .apf-tag {
          display: flex; align-items: center; gap: 6px;
          background: #f0ebe3; border: 1px solid #ddd7ce;
          color: #7a6245; border-radius: 20px;
          padding: 4px 12px 4px 14px; font-size: 13px;
          font-family: Arial, sans-serif;
        }
        .apf-tag button {
          background: none; border: none; color: #b0a498;
          cursor: pointer; padding: 0; display: flex; align-items: center;
          transition: color 0.2s;
        }
        .apf-tag button:hover { color: #b85a4a; }
        .apf-upload-zone {
          border: 2px dashed #ddd7ce; border-radius: 6px;
          padding: 32px; text-align: center;
          color: #b0a498; font-family: Arial, sans-serif; font-size: 14px;
          cursor: pointer; transition: border-color 0.2s, color 0.2s, background 0.2s;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          background: #faf8f5;
        }
        .apf-upload-zone:hover { border-color: #7a6245; color: #7a6245; background: #f5f0e8; }
        .apf-spin { animation: spin 1s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .apf-cover-preview { position: relative; display: inline-block; margin-top: 0; }
        .apf-cover-preview img {
          width: 100%; max-width: 320px; border-radius: 6px;
          border: 1px solid #e2d9ce; display: block; object-fit: cover; height: 180px;
        }
        .apf-cover-remove {
          position: absolute; top: 8px; right: 8px;
          background: rgba(255,255,255,0.9); border: 1px solid #e2d9ce; color: #b85a4a;
          border-radius: 4px; padding: 4px 10px; font-size: 12px;
          cursor: pointer; display: flex; align-items: center; gap: 4px;
          font-family: Arial, sans-serif;
        }
        .apf-gallery-grid {
          display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 12px; margin-top: 16px;
        }
        .apf-gallery-item {
          position: relative; border-radius: 6px; overflow: hidden;
          border: 1px solid #e2d9ce; aspect-ratio: 4/3;
          box-sizing: border-box;
        }
        .apf-gallery-item-hero { border-color: #C9A96E; box-shadow: inset 0 0 0 1px #C9A96E, 0 0 0 2px rgba(201,169,110,0.25); }
        .apf-gallery-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .apf-gallery-overlay {
          position: absolute; top: 4px; right: 4px;
          display: flex; align-items: center; justify-content: flex-end; gap: 8px;
          opacity: 0; transition: opacity 0.2s;
        }
        .apf-gallery-item:hover .apf-gallery-overlay { opacity: 1; }
        .apf-gal-btn {
          background: rgba(255,255,255,0.92); color: #7a6245;
          border: none; border-radius: 4px; padding: 4px 6px;
          font-size: 11px; font-family: Arial, sans-serif; cursor: pointer;
          font-weight: 600; transition: background 0.2s;
          display: flex; align-items: center; gap: 4px;
        }
        .apf-gal-btn:hover { background: #ffffff; }
        .apf-gal-btn-del { background: rgba(184,90,74,0.9); color: #fff; }
        .apf-gal-btn-del:hover { background: rgba(184,90,74,1); }
        .apf-hero-toggle {
          position: absolute; bottom: 4px; right: 4px; z-index: 2;
          display: flex; align-items: center; gap: 4px;
          background: rgba(26,22,18,0.72); color: #f0ebe3;
          border: none; border-radius: 20px; padding: 4px 9px;
          font-size: 10px; font-family: Arial, sans-serif; cursor: pointer;
          letter-spacing: 0.02em; transition: background 0.2s, color 0.2s;
          opacity: 0;
        }
        .apf-gallery-item:hover .apf-hero-toggle, .apf-hero-toggle-active { opacity: 1; }
        .apf-hero-toggle:hover { background: rgba(26,22,18,0.9); }
        .apf-hero-toggle-active {
          background: #C9A96E; color: #2a2218;
        }
        .apf-gallery-order {
          position: absolute; bottom: 4px; left: 4px; display: flex; gap: 4px;
        }
        .apf-ord-btn {
          background: rgba(255,255,255,0.85); color: #7a6245;
          border: none; border-radius: 2px; padding: 2px 6px;
          font-size: 12px; cursor: pointer; transition: background 0.2s;
        }
        .apf-ord-btn:hover { background: rgba(255,255,255,1); }
        .apf-gallery-num {
          position: absolute; top: 6px; left: 6px;
          background: rgba(26,22,18,0.6); color: #f5f0e8;
          font-size: 10px; font-family: Arial, sans-serif;
          padding: 2px 7px; border-radius: 10px; letter-spacing: 0.05em;
        }
        .apf-footer {
          display: flex; justify-content: flex-end; gap: 12px;
          padding: 20px 32px; border-top: 1px solid #ede8e1;
          background: #faf8f5; border-radius: 0 0 8px 8px;
        }
        .apf-btn-ghost {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 10px 24px; font-size: 13px;
          font-family: Arial, sans-serif; cursor: pointer; transition: all 0.2s;
        }
        .apf-btn-ghost:hover { border-color: #9a8e82; color: #1a1612; }
        .apf-btn-save {
          background: #7a6245; color: #ffffff; border: none;
          border-radius: 4px; padding: 10px 28px; font-size: 13px;
          letter-spacing: 0.1em; font-family: Arial, sans-serif; cursor: pointer;
          font-weight: 600; transition: background 0.2s; text-transform: uppercase;
          display: flex; align-items: center; gap: 8px;
        }
        .apf-btn-save:hover:not(:disabled) { background: #6a5438; }
        .apf-btn-save:disabled { opacity: 0.5; cursor: default; }
        .apf-url-row {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }
        .apf-url-label {
          font-size: 11px; color: #b0a498; font-family: Arial, sans-serif;
          white-space: nowrap;
        }
        .apf-url-input {
          flex: 1; min-width: 160px;
          background: #faf8f5; border: 1px solid #ddd7ce;
          border-radius: 4px; color: #1a1612; font-size: 12px;
          padding: 6px 10px; outline: none; font-family: Arial, sans-serif;
          transition: border-color 0.2s;
        }
        .apf-url-input:focus { border-color: #7a6245; }
        .apf-url-input::placeholder { color: #c8c0b5; }
        .apf-url-btn {
          background: none; border: 1px solid #c8bfb2; color: #7a6245;
          border-radius: 4px; padding: 6px 14px; font-size: 11px;
          font-family: Arial, sans-serif; cursor: pointer; white-space: nowrap;
          letter-spacing: 0.04em; transition: all 0.2s;
        }
        .apf-url-btn:hover:not(:disabled) { border-color: #7a6245; background: #f5f0e8; }
        .apf-url-btn:disabled { opacity: 0.4; cursor: default; }
      `})]})}const yn="#7a6245";function Vr({label:e,hint:t,currentUrl:n,onUploaded:r}){const[i,s]=m.useState(!1),[a,l]=m.useState(""),[c,u]=m.useState(""),[d,p]=m.useState(!1),f=m.useRef(null),x=n==null?void 0:n.includes("cloudinary.com"),v=n&&!n.startsWith("http"),b=async h=>{var S;const y=(S=h.target.files)==null?void 0:S[0];if(y){s(!0),l("");try{const j=await i5(y);r(j)}catch(j){l(j.message)}finally{s(!1),f.current&&(f.current.value="")}}},w=()=>{const h=c.trim();h&&(r(h),u(""))},g=()=>{n&&navigator.clipboard.writeText(n).then(()=>{p(!0),setTimeout(()=>p(!1),2e3)})};return o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:ea,children:e}),t&&o.jsx("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 10px"},children:t}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"},children:[n?o.jsx("img",{src:n,alt:e,style:{height:64,width:"auto",maxWidth:200,objectFit:"contain",borderRadius:6,border:"1px solid #e2d9ce",background:"#f5f0e8",padding:6}}):o.jsx("div",{style:{height:64,width:140,borderRadius:6,border:"2px dashed #e2d9ce",background:"#faf8f5",display:"flex",alignItems:"center",justifyContent:"center",color:"#c0b5a8",fontSize:11},children:"No image"}),o.jsxs("div",{children:[o.jsx("input",{ref:f,type:"file",accept:"image/*",style:{display:"none"},onChange:b}),o.jsxs("button",{onClick:()=>{var h;return(h=f.current)==null?void 0:h.click()},disabled:i,style:Si,children:[i?o.jsx(De,{size:13,style:{animation:"spin 1s linear infinite"}}):o.jsx(Xo,{size:13}),i?"Uploading…":n?"Replace Image":"Upload Image"]}),n&&o.jsx("p",{style:{fontSize:11,marginTop:5,color:x?"#7aab7a":"#c0b5a8"},children:x?"✓ Stored on Cloudinary CDN":v?"⚠ Local file path — upload to use CDN":"✓ External URL"})]})]}),n&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:8},children:[o.jsx("span",{style:{fontSize:11,color:"#b0a498",whiteSpace:"nowrap"},children:"Image URL:"}),o.jsx("input",{type:"text",readOnly:!0,value:n,style:{...Pr,fontSize:11,padding:"4px 8px",flex:1,minWidth:0,color:"#7a6245",background:"#f5f0e8",cursor:"text"},onFocus:h=>h.target.select()}),o.jsx("button",{onClick:g,style:{...Si,padding:"4px 10px",fontSize:11,whiteSpace:"nowrap",color:d?"#3a7a3a":void 0},children:d?"✓ Copied":"Copy"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:8},children:[o.jsx("span",{style:{fontSize:11,color:"#c0b5a8",whiteSpace:"nowrap"},children:"Or paste URL:"}),o.jsx("input",{type:"url",value:c,onChange:h=>u(h.target.value),placeholder:"https://example.com/image.jpg",onKeyDown:h=>{h.key==="Enter"&&w()},style:{...Pr,fontSize:12,padding:"5px 9px",flex:1,minWidth:0}}),o.jsx("button",{onClick:w,disabled:!c.trim(),style:{...Si,padding:"5px 12px",fontSize:11,opacity:c.trim()?1:.5,cursor:c.trim()?"pointer":"default",whiteSpace:"nowrap"},children:"Use URL"})]}),a&&o.jsx("p",{style:{color:"#b85a4a",fontSize:12,marginTop:6},children:a})]})}function td({children:e}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12},children:e})}function Ge({label:e,value:t,onChange:n,multiline:r,placeholder:i}){return o.jsxs("div",{children:[o.jsx("label",{style:ea,children:e}),r?o.jsx("textarea",{style:{...Pr,height:72,resize:"vertical"},value:t,placeholder:i,onChange:s=>n(s.target.value)}):o.jsx("input",{style:Pr,value:t,placeholder:i,onChange:s=>n(s.target.value)})]})}function n6({saving:e,onSave:t,success:n,error:r,onClearError:i}){return o.jsxs("div",{style:{paddingTop:8,paddingBottom:48},children:[n&&o.jsx("div",{style:p6,children:n}),r&&o.jsxs("div",{style:f6,children:[r,o.jsx("button",{onClick:i,style:{background:"none",border:"none",color:"#b85a4a",cursor:"pointer",fontSize:18},children:"×"})]}),o.jsxs("button",{onClick:t,disabled:e,style:{display:"inline-flex",alignItems:"center",gap:8,background:yn,color:"#fff",border:"none",borderRadius:4,padding:"10px 28px",fontSize:13,letterSpacing:"0.08em",cursor:e?"not-allowed":"pointer",fontWeight:600,textTransform:"uppercase",opacity:e?.7:1,marginTop:n||r?12:0},children:[e?o.jsx(De,{size:14,style:{animation:"spin 1s linear infinite"}}):o.jsx(US,{size:14}),e?"Saving…":"Save Changes"]})]})}function r6({settings:e,onChange:t}){const n=e.logoSize??38;return o.jsxs("div",{children:[o.jsx("p",{style:Tn,children:"The logo shown in the top navigation bar across the entire website."}),o.jsx(Vr,{label:"Navbar Logo",hint:"Works best as a wide PNG with transparent background.",currentUrl:e.logoUrl,onUploaded:r=>t({...e,logoUrl:r})}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:ea,children:"Logo Size (height in px)"}),o.jsxs("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 8px"},children:["Current: ",o.jsxs("strong",{children:[n,"px"]})," height. Drag or type to resize."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("input",{type:"range",min:20,max:100,step:1,value:n,onChange:r=>t({...e,logoSize:Number(r.target.value)}),style:{flex:1,accentColor:yn}}),o.jsx("input",{type:"number",min:20,max:100,value:n,onChange:r=>t({...e,logoSize:Number(r.target.value)}),style:{...Pr,width:72,textAlign:"center"}})]})]})]})}function i6({settings:e,onChange:t}){const n=e.footerLogoSize??200;return o.jsxs("div",{children:[o.jsx("p",{style:Tn,children:"The logo shown in the footer. A version with a light/transparent background works best on the dark footer."}),o.jsx(Vr,{label:"Footer Logo",hint:"Works best as a wide PNG with transparent or dark background.",currentUrl:e.footerLogoUrl,onUploaded:r=>t({...e,footerLogoUrl:r})}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:ea,children:"Logo Size (width in px)"}),o.jsxs("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 8px"},children:["Current: ",o.jsxs("strong",{children:[n,"px"]})," wide. Drag or type to resize."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("input",{type:"range",min:80,max:400,step:4,value:n,onChange:r=>t({...e,footerLogoSize:Number(r.target.value)}),style:{flex:1,accentColor:yn}}),o.jsx("input",{type:"number",min:80,max:400,value:n,onChange:r=>t({...e,footerLogoSize:Number(r.target.value)}),style:{...Pr,width:72,textAlign:"center"}})]})]})]})}function o6({settings:e,onChange:t}){const n=e.homeHero??{backgroundImage:"",headline:"",subheadline:"",ctaText:"",ctaLink:""},r=i=>t({...e,homeHero:{...n,...i}});return o.jsxs("div",{children:[o.jsx("p",{style:Tn,children:"The full-screen hero shown at the top of the home page — background image, headline, subheadline, and call-to-action button."}),o.jsx(Vr,{label:"Background Image",hint:"Full-width image behind the hero text. Use a high-resolution landscape photo.",currentUrl:n.backgroundImage,onUploaded:i=>r({backgroundImage:i})}),o.jsx("div",{style:{marginBottom:12},children:o.jsx(Ge,{label:"Headline",value:n.headline,placeholder:"e.g. Thoughtful Spaces, Timeless Design",onChange:i=>r({headline:i})})}),o.jsx("div",{style:{marginBottom:12},children:o.jsx(Ge,{label:"Subheadline",value:n.subheadline,placeholder:"e.g. Interior design that transforms the way you live.",onChange:i=>r({subheadline:i}),multiline:!0})}),o.jsxs(td,{children:[o.jsx(Ge,{label:"CTA Button Text",value:n.ctaText,placeholder:"e.g. Explore Our Work",onChange:i=>r({ctaText:i})}),o.jsx(Ge,{label:"CTA Button Link",value:n.ctaLink,placeholder:"e.g. /portfolio",onChange:i=>r({ctaLink:i})})]})]})}function s6({settings:e,onChange:t}){const n=(r,i)=>{const s=[...e.serviceCards];s[r]=i,t({...e,serviceCards:s})};return o.jsxs("div",{children:[o.jsxs("p",{style:Tn,children:["The cards in the ",o.jsx("strong",{children:'"Spaces Designed for Every Lifestyle"'})," section on the homepage. Each card has an image, title, and description."]}),e.serviceCards.map((r,i)=>o.jsxs("div",{style:ao,children:[o.jsxs("p",{style:lo,children:["Card ",i+1]}),o.jsx(Vr,{label:"Image",currentUrl:r.img,onUploaded:s=>n(i,{...r,img:s})}),o.jsx(Ge,{label:"Title",value:r.title,onChange:s=>n(i,{...r,title:s})}),o.jsx("div",{style:{marginTop:10},children:o.jsx(Ge,{label:"Description",value:r.desc,onChange:s=>n(i,{...r,desc:s}),multiline:!0})})]},i))]})}function a6({settings:e,onChange:t}){const n=e.instagramPosts??[],r=(l,c)=>{const u=n.map((d,p)=>p===l?{...d,...c}:d);t({...e,instagramPosts:u})},i=()=>{t({...e,instagramPosts:[...n,{image:"",url:""}]})},s=l=>{t({...e,instagramPosts:n.filter((c,u)=>u!==l)})},a=(l,c)=>{const u=l+c;if(u<0||u>=n.length)return;const d=[...n];[d[l],d[u]]=[d[u],d[l]],t({...e,instagramPosts:d})};return o.jsxs("div",{children:[o.jsxs("p",{style:Tn,children:["The ",o.jsx("strong",{children:'"Follow Our Journey"'})," Instagram grid on the homepage. For each card, paste the link to the Instagram post or reel and upload its cover image (Instagram doesn't allow pulling the image automatically, so upload a screenshot or save the post's photo/video thumbnail)."]}),n.length===0&&o.jsx("p",{style:{fontSize:12,color:"#c0b5a8",marginBottom:16},children:"No custom cards yet — the homepage is currently showing placeholder images. Add cards below to replace them."}),n.map((l,c)=>o.jsxs("div",{style:{...ao,position:"relative"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[o.jsxs("p",{style:{...lo,margin:0},children:["Card ",c+1]}),o.jsxs("div",{style:{display:"flex",gap:6},children:[o.jsx("button",{onClick:()=>a(c,-1),disabled:c===0,style:{...Si,padding:"4px 9px",opacity:c===0?.4:1,cursor:c===0?"default":"pointer"},children:"↑"}),o.jsx("button",{onClick:()=>a(c,1),disabled:c===n.length-1,style:{...Si,padding:"4px 9px",opacity:c===n.length-1?.4:1,cursor:c===n.length-1?"default":"pointer"},children:"↓"}),o.jsxs("button",{onClick:()=>s(c),style:{background:"none",border:"1px solid #e2d9ce",color:"#b85a4a",borderRadius:4,padding:"4px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontSize:12},children:[o.jsx(Zs,{size:12})," Remove"]})]})]}),o.jsx(Vr,{label:"Cover Image",hint:"Upload the post/reel's cover photo — a square image works best.",currentUrl:l.image,onUploaded:u=>r(c,{image:u})}),o.jsx(Ge,{label:"Instagram Post / Reel Link",value:l.url,placeholder:"e.g. https://www.instagram.com/p/XXXXXXXXXXX/",onChange:u=>r(c,{url:u})})]},c)),o.jsxs("button",{onClick:i,style:{display:"inline-flex",alignItems:"center",gap:8,background:"none",border:`1px dashed ${yn}`,color:yn,borderRadius:6,padding:"10px 20px",fontSize:13,cursor:"pointer",letterSpacing:"0.04em",marginBottom:24},children:[o.jsx(Ki,{size:14})," Add Instagram Card"]})]})}function l6({settings:e,onChange:t}){var i;const n=(i=e.homeStats)!=null&&i.length?e.homeStats:[{value:"5+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],r=(s,a)=>{const l=n.map((c,u)=>u===s?{...c,...a}:c);t({...e,homeStats:l})};return o.jsxs("div",{children:[o.jsxs("p",{style:Tn,children:["The four numbers shown in the ",o.jsx("strong",{children:"stats strip"})," below the Philosophy section on the home page. Enter the full display value (e.g. ",o.jsx("code",{children:"25+"}),", ",o.jsx("code",{children:"90%"}),", ",o.jsx("code",{children:"2"}),")."]}),n.map((s,a)=>o.jsxs("div",{style:ao,children:[o.jsxs("p",{style:lo,children:["Stat ",a+1]}),o.jsxs(td,{children:[o.jsx(Ge,{label:"Value (e.g. 25+, 90%)",value:s.value,placeholder:"e.g. 25+",onChange:l=>r(a,{value:l})}),o.jsx(Ge,{label:"Label",value:s.label,placeholder:"e.g. Projects Completed",onChange:l=>r(a,{label:l})})]})]},a))]})}function c6({settings:e,onChange:t}){var i;const n=(i=e.aboutStats)!=null&&i.length?e.aboutStats:[{value:"25+",label:"Clients Served"},{value:"5+",label:"Years of Experience"},{value:"2",label:"Cities — Mumbai & Pune"},{value:"100%",label:"End-to-End Solutions"}],r=(s,a)=>{const l=n.map((c,u)=>u===s?{...c,...a}:c);t({...e,aboutStats:l})};return o.jsxs("div",{children:[o.jsxs("p",{style:Tn,children:["The four numbers shown in the ",o.jsx("strong",{children:"stats strip"})," on the About page. Enter the full display value (e.g. ",o.jsx("code",{children:"25+"}),", ",o.jsx("code",{children:"100%"}),", ",o.jsx("code",{children:"2"}),")."]}),n.map((s,a)=>o.jsxs("div",{style:ao,children:[o.jsxs("p",{style:lo,children:["Stat ",a+1]}),o.jsxs(td,{children:[o.jsx(Ge,{label:"Value (e.g. 25+, 100%)",value:s.value,placeholder:"e.g. 100%",onChange:l=>r(a,{value:l})}),o.jsx(Ge,{label:"Label",value:s.label,placeholder:"e.g. Clients Served",onChange:l=>r(a,{label:l})})]})]},a))]})}function u6({settings:e,onChange:t}){const n=e.servicesList??[],r=(a,l)=>{const c=[...n];c[a]=l,t({...e,servicesList:c})},i=()=>{t({...e,servicesList:[...n,{img:"",title:"",desc:""}]})},s=a=>{const l=n.filter((c,u)=>u!==a);t({...e,servicesList:l})};return o.jsxs("div",{children:[o.jsx("p",{style:Tn,children:"The individual services listed on the Services page. Each service has an image, title, and description."}),n.map((a,l)=>o.jsxs("div",{style:{...ao,position:"relative"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[o.jsxs("p",{style:{...lo,margin:0},children:["Service ",l+1]}),o.jsxs("button",{onClick:()=>s(l),style:{background:"none",border:"1px solid #e2d9ce",color:"#b85a4a",borderRadius:4,padding:"4px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontSize:12},children:[o.jsx(Zs,{size:12})," Remove"]})]}),o.jsx(Vr,{label:"Image",currentUrl:a.img,onUploaded:c=>r(l,{...a,img:c})}),o.jsx("div",{style:{marginBottom:10},children:o.jsx(Ge,{label:"Title",value:a.title,placeholder:"e.g. Residential Design",onChange:c=>r(l,{...a,title:c})})}),o.jsx(Ge,{label:"Description",value:a.desc,placeholder:"e.g. Full-service interior design for homes and apartments.",onChange:c=>r(l,{...a,desc:c}),multiline:!0})]},l)),o.jsxs("button",{onClick:i,style:{display:"inline-flex",alignItems:"center",gap:8,background:"none",border:`1px dashed ${yn}`,color:yn,borderRadius:6,padding:"10px 20px",fontSize:13,cursor:"pointer",letterSpacing:"0.04em",marginBottom:24},children:[o.jsx(Ki,{size:14})," Add Service"]})]})}const lm={logoUrl:"",logoSize:38,footerLogoUrl:"",footerLogoSize:200,homeHero:{backgroundImage:"",headline:"",subheadline:"",ctaText:"",ctaLink:""},serviceCards:[],homePortfolio:[],instagramPosts:[],servicePageHero:{backgroundImage:"",headline:"",subheadline:""},servicesList:[],homeStats:[{value:"5+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],aboutStats:[{value:"25+",label:"Clients Served"},{value:"5+",label:"Years of Experience"},{value:"2",label:"Cities — Mumbai & Pune"},{value:"100%",label:"End-to-End Solutions"}]};function d6({section:e}){const[t,n]=m.useState(null),[r,i]=m.useState(!0),[s,a]=m.useState(!1),[l,c]=m.useState(""),[u,d]=m.useState("");m.useEffect(()=>{i(!0),Lx().then(f=>{n({...lm,...f}),i(!1)}).catch(()=>i(!1))},[]),m.useEffect(()=>{c(""),d("")},[e]);const p=async()=>{if(t){a(!0),d(""),c("");try{const f=await o5(t),x={...lm,...t,...f};f5(x),n(x),c("Changes saved successfully."),setTimeout(()=>c(""),4e3)}catch(f){d(f.message)}finally{a(!1)}}};return r?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"80px 0",color:"#b0a498"},children:[o.jsx(De,{size:22,style:{animation:"spin 1s linear infinite"}})," Loading…",o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):t?o.jsxs("div",{children:[o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),e==="header"&&o.jsx(r6,{settings:t,onChange:n}),e==="hero"&&o.jsx(o6,{settings:t,onChange:n}),e==="expertise"&&o.jsx(s6,{settings:t,onChange:n}),e==="instagram"&&o.jsx(a6,{settings:t,onChange:n}),e==="home-stats"&&o.jsx(l6,{settings:t,onChange:n}),e==="footer"&&o.jsx(i6,{settings:t,onChange:n}),e==="about-stats"&&o.jsx(c6,{settings:t,onChange:n}),e==="services"&&o.jsx(u6,{settings:t,onChange:n}),o.jsx(n6,{saving:s,onSave:p,success:l,error:u,onClearError:()=>d("")})]}):o.jsx("div",{style:{padding:"40px 0",color:"#b85a4a"},children:"Failed to load settings. Please refresh."})}const ea={display:"block",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",color:"#9a8e82",fontWeight:600,marginBottom:6},Pr={width:"100%",padding:"8px 11px",border:"1px solid #ddd7ce",borderRadius:4,fontSize:13,color:"#2a2218",fontFamily:"inherit",outline:"none",background:"#faf8f5",transition:"border-color 0.2s"},Si={display:"inline-flex",alignItems:"center",gap:6,background:"none",border:"1px solid #c8bfb2",color:yn,borderRadius:4,padding:"8px 14px",fontSize:12,cursor:"pointer",letterSpacing:"0.04em",transition:"all 0.2s",fontFamily:"inherit"},Tn={fontSize:13,color:"#9a8e82",marginBottom:24,lineHeight:1.6},ao={border:"1px solid #e2d9ce",borderRadius:8,padding:"20px 24px",marginBottom:16,background:"#fff"},lo={margin:"0 0 16px",fontSize:11,fontWeight:700,color:"#c0b5a8",letterSpacing:"0.18em",textTransform:"uppercase"},p6={marginBottom:12,background:"#f0f7f0",border:"1px solid #b5d9b5",color:"#3a7a3a",borderRadius:4,padding:"10px 16px",fontSize:13},f6={marginBottom:12,background:"#fdf0ee",border:"1px solid #e8b5ad",color:"#b85a4a",borderRadius:4,padding:"10px 16px",fontSize:13,display:"flex",justifyContent:"space-between",alignItems:"center"},nd=[{id:"home",label:"Home Page",icon:jx,items:[{tab:"settings/header",label:"Header",icon:kS,hint:"Navbar logo"},{tab:"settings/hero",label:"Hero Section",icon:KS,hint:"Full-screen hero banner"},{tab:"settings/expertise",label:"Our Expertise",icon:LS,hint:"Service cards section"},{tab:"settings/instagram",label:"Instagram",icon:Sx,hint:"Follow Our Journey grid"},{tab:"settings/home-stats",label:"Stats Numbers",icon:$f,hint:"Years, Projects, Clients, Satisfaction"},{tab:"settings/footer",label:"Footer",icon:VS,hint:"Footer logo"}]},{id:"about",label:"About Page",icon:FS,items:[{tab:"settings/about-stats",label:"Stats Numbers",icon:$f,hint:"Clients, Experience, Cities, Solutions"}]},{id:"portfolio",label:"Portfolio Page",icon:MS,items:[{tab:"projects",label:"Portfolio Projects",icon:IS,hint:"Manage all portfolio projects"}]},{id:"service",label:"Service Page",icon:ES,items:[{tab:"settings/services",label:"Services",icon:_S,hint:"Individual service listings"}]}];function m6(e){for(const t of nd)if(t.items.some(n=>n.tab===e))return t.id;return"home"}function h6(e){for(const t of nd){const n=t.items.find(r=>r.tab===e);if(n)return n.label}return"Admin"}function g6(){const e=$t(),[t,n]=m.useState("projects"),[r,i]=m.useState(new Set(["portfolio"])),[s,a]=m.useState([]),[l,c]=m.useState(!0),[u,d]=m.useState(""),[p,f]=m.useState(!1),[x,v]=m.useState(null),[b,w]=m.useState(null),[g,h]=m.useState(null),[y,S]=m.useState(""),[j,k]=m.useState(null),[E,C]=m.useState(null),[O,D]=m.useState(!1),V=z=>{S(z),setTimeout(()=>S(""),3e3)},_=async()=>{c(!0),d("");try{a(await Ix())}catch(z){d(z.message)}finally{c(!1)}};m.useEffect(()=>{_()},[]);const $=()=>{Hu(),e("/adminpannel")},F=async z=>{await t5(z),await _(),f(!1),V("Project created successfully.")},Q=async z=>{try{v(await Rx(z))}catch(B){d(B.message)}},R=async z=>{x!=null&&x.id&&(await n5(x.id,z),await _(),v(null),V("Project updated successfully."))},A=async z=>{w(z);try{await r5(z),await _(),V("Project deleted.")}catch(B){d(B.message)}finally{w(null),h(null)}},T=z=>{k(z)},M=(z,B)=>{z.preventDefault(),B!==E&&C(B)},W=()=>{k(null),C(null)},q=async z=>{if(O||j===null||j===z){W();return}const B=[...s],[Ee]=B.splice(j,1);B.splice(z,0,Ee),a(B),W(),D(!0);try{await e5(B.map(Yt=>Yt.id)),V("Portfolio order updated.")}catch(Yt){d(Yt.message),await _()}finally{D(!1)}},ee=z=>{n(z),i(B=>new Set([...B,m6(z)]))},lt=z=>{i(B=>{const Ee=new Set(B);return Ee.has(z)?Ee.delete(z):Ee.add(z),Ee})},Ve=t.startsWith("settings/"),P=Ve?t.replace("settings/",""):null;return o.jsxs("div",{className:"adm-root",children:[o.jsxs("aside",{className:"adm-sidebar",children:[o.jsxs("div",{className:"adm-sidebar-brand",children:[o.jsx("span",{className:"adm-brand-name",children:"nivora"}),o.jsx("span",{className:"adm-brand-sub",children:"admin"})]}),o.jsxs("nav",{className:"adm-nav",children:[o.jsx("div",{className:"adm-nav-group-label",children:"Pages"}),nd.map(z=>{const B=r.has(z.id),Ee=z.icon,Yt=B?PS:xx,Y=z.items.some(ie=>ie.tab===t);return o.jsxs("div",{children:[o.jsxs("div",{className:`adm-page-row ${Y?"adm-page-row-active":""}`,onClick:()=>lt(z.id),children:[o.jsx(Ee,{size:13,style:{flexShrink:0}}),o.jsx("span",{style:{flex:1},children:z.label}),o.jsx(Yt,{size:11,style:{flexShrink:0,opacity:.5}})]}),B&&o.jsx("div",{className:"adm-sub-items",children:z.items.map(ie=>{const Kt=ie.icon;return o.jsxs("div",{className:`adm-nav-item adm-nav-sub ${t===ie.tab?"adm-nav-active":""}`,onClick:()=>ee(ie.tab),title:ie.hint,children:[o.jsx(Kt,{size:12,style:{flexShrink:0,opacity:.75}}),ie.label]},ie.tab)})})]},z.id)})]}),o.jsx("div",{className:"adm-sidebar-footer",children:o.jsxs("button",{className:"adm-logout",onClick:$,children:[o.jsx(kx,{size:15})," Sign Out"]})})]}),o.jsxs("main",{className:"adm-main",children:[o.jsxs("header",{className:"adm-topbar",children:[o.jsxs("div",{className:"adm-topbar-left",children:[o.jsx("h1",{className:"adm-page-title",children:h6(t)}),t==="projects"&&o.jsxs("span",{className:"adm-count",children:[s.length," ",s.length===1?"project":"projects"]})]}),o.jsx("div",{className:"adm-topbar-right",children:t==="projects"?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"adm-btn-ghost-sm",onClick:_,title:"Refresh",children:o.jsx(Px,{size:15})}),o.jsx("a",{href:"/portfolio",target:"_blank",rel:"noreferrer",className:"adm-btn-ghost-sm",title:"View portfolio",children:o.jsx(Yf,{size:15})}),o.jsxs("button",{className:"adm-btn-add",onClick:()=>f(!0),children:[o.jsx(Ki,{size:16})," Add Project"]})]}):o.jsx("a",{href:"/",target:"_blank",rel:"noreferrer",className:"adm-btn-ghost-sm",title:"View site",children:o.jsx(Yf,{size:15})})})]}),t==="projects"&&y&&o.jsx("div",{className:"adm-success",children:y}),t==="projects"&&u&&o.jsxs("div",{className:"adm-error",children:[u,o.jsx("button",{onClick:()=>d(""),children:"×"})]}),o.jsx("div",{className:"adm-content",children:Ve&&P?o.jsx(d6,{section:P}):l?o.jsxs("div",{className:"adm-loading",children:[o.jsx(De,{size:28,className:"adm-spin"})," Loading projects…"]}):s.length===0?o.jsxs("div",{className:"adm-empty",children:[o.jsx("p",{children:"No projects yet."}),o.jsxs("button",{className:"adm-btn-add",onClick:()=>f(!0),children:[o.jsx(Ki,{size:16})," Add Your First Project"]})]}):o.jsxs("div",{className:"adm-table-wrap",children:[o.jsxs("p",{className:"adm-drag-hint",children:["Drag rows by the ",o.jsx(Kf,{size:12,style:{verticalAlign:"-2px"}})," handle to change the order projects appear in on the website.",O&&o.jsx("span",{className:"adm-saving",children:" Saving…"})]}),o.jsxs("table",{className:"adm-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:32}}),o.jsx("th",{children:"Cover"}),o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Location"}),o.jsx("th",{children:"Category"}),o.jsx("th",{children:"Year"}),o.jsx("th",{children:"Badge"}),o.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),o.jsx("tbody",{children:s.map((z,B)=>o.jsxs("tr",{draggable:!O,onDragStart:()=>T(B),onDragOver:Ee=>M(Ee,B),onDrop:()=>q(B),onDragEnd:W,className:`adm-row-draggable ${j===B?"adm-row-dragging":""} ${E===B&&j!==B?"adm-row-over":""}`,children:[o.jsx("td",{className:"adm-drag-handle",title:"Drag to reorder",children:o.jsx(Kf,{size:16})}),o.jsx("td",{children:z.coverImage?o.jsx("img",{src:z.coverImage,alt:z.name,className:"adm-thumb"}):o.jsx("div",{className:"adm-thumb-placeholder",children:"—"})}),o.jsxs("td",{children:[o.jsx("div",{className:"adm-name",children:z.name}),o.jsx("div",{className:"adm-slug",children:z.id})]}),o.jsx("td",{className:"adm-cell-muted",children:z.location||"—"}),o.jsx("td",{children:o.jsx("span",{className:`adm-badge adm-badge-${z.category}`,children:z.category})}),o.jsx("td",{className:"adm-cell-muted",children:z.year||"—"}),o.jsx("td",{className:"adm-cell-muted",children:z.badge||"—"}),o.jsx("td",{children:o.jsxs("div",{className:"adm-actions",children:[o.jsx("button",{className:"adm-action-btn",onClick:()=>Q(z.id),title:"Edit",children:o.jsx(Tx,{size:14})}),g===z.id?o.jsxs("div",{className:"adm-confirm",children:[o.jsx("span",{children:"Delete?"}),o.jsx("button",{className:"adm-confirm-yes",onClick:()=>A(z.id),disabled:b===z.id,children:b===z.id?o.jsx(De,{size:12,className:"adm-spin"}):"Yes"}),o.jsx("button",{className:"adm-confirm-no",onClick:()=>h(null),children:"No"})]}):o.jsx("button",{className:"adm-action-btn adm-action-del",onClick:()=>h(z.id),title:"Delete",children:o.jsx(Zs,{size:14})})]})})]},z.id))})]})]})})]}),p&&o.jsx(am,{onSave:F,onCancel:()=>f(!1)}),x&&o.jsx(am,{initial:x,onSave:R,onCancel:()=>v(null),isEdit:!0}),o.jsx("style",{children:`
        * { box-sizing: border-box; }
        .adm-root {
          min-height: 100vh; display: flex;
          background: #f0ebe3; font-family: Arial, sans-serif;
        }
        .adm-sidebar {
          width: 230px; min-height: 100vh; flex-shrink: 0;
          background: #ffffff; border-right: 1px solid #e2d9ce;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh;
        }
        .adm-sidebar-brand { padding: 28px 24px 20px; border-bottom: 1px solid #ede8e1; }
        .adm-brand-name {
          display: block; font-size: 24px; color: #7a6245;
          font-family: Georgia, serif; font-style: italic; letter-spacing: 0.1em;
        }
        .adm-brand-sub {
          display: block; font-size: 9px; letter-spacing: 0.35em;
          color: #c0b5a8; text-transform: uppercase; margin-top: 2px;
        }
        .adm-nav { flex: 1; padding: 12px 0; overflow-y: auto; }
        .adm-nav-group-label {
          padding: 8px 24px 4px;
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          color: #c0b5a8; font-weight: 600; user-select: none;
        }
        /* Page header row */
        .adm-page-row {
          padding: 10px 20px 10px 24px; font-size: 13px; color: #6b5d4f;
          cursor: pointer; transition: all 0.15s;
          display: flex; align-items: center; gap: 8px;
          font-weight: 500; user-select: none;
          border-left: 2px solid transparent;
        }
        .adm-page-row:hover { background: rgba(122,98,69,0.04); color: #3d2e1e; }
        .adm-page-row-active { color: #7a6245; }
        /* Sub-items container */
        .adm-sub-items { background: #faf8f5; border-bottom: 1px solid #f0ebe3; }
        /* Nav items (sub-level) */
        .adm-nav-item {
          padding: 8px 20px; font-size: 12.5px; color: #9a8e82;
          cursor: pointer; transition: all 0.15s;
          border-left: 2px solid transparent;
          display: flex; align-items: center; gap: 8px;
        }
        .adm-nav-sub { padding-left: 36px; }
        .adm-nav-item:hover { color: #5a4730; background: rgba(122,98,69,0.05); }
        .adm-nav-active {
          color: #7a6245; border-left-color: #7a6245;
          background: rgba(122,98,69,0.08); font-weight: 500;
        }
        .adm-sidebar-footer { padding: 20px 24px; border-top: 1px solid #ede8e1; }
        .adm-logout {
          display: flex; align-items: center; gap: 8px;
          background: none; border: none; color: #9a8e82;
          cursor: pointer; font-size: 13px; padding: 0; transition: color 0.2s;
        }
        .adm-logout:hover { color: #b85a4a; }
        .adm-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .adm-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 32px; border-bottom: 1px solid #e2d9ce;
          background: #ffffff; position: sticky; top: 0; z-index: 10;
          box-shadow: 0 1px 0 #e2d9ce;
        }
        .adm-topbar-left { display: flex; align-items: baseline; gap: 12px; }
        .adm-page-title { margin: 0; font-size: 18px; color: #1a1612; font-weight: normal; letter-spacing: 0.03em; }
        .adm-count { font-size: 12px; color: #c0b5a8; }
        .adm-topbar-right { display: flex; align-items: center; gap: 10px; }
        .adm-btn-ghost-sm {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 7px 9px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
          text-decoration: none;
        }
        .adm-btn-ghost-sm:hover { border-color: #7a6245; color: #7a6245; }
        .adm-btn-add {
          display: flex; align-items: center; gap: 8px;
          background: #7a6245; color: #ffffff; border: none;
          border-radius: 4px; padding: 9px 18px; font-size: 13px;
          letter-spacing: 0.08em; cursor: pointer; font-weight: 600;
          transition: background 0.2s; text-transform: uppercase;
        }
        .adm-btn-add:hover { background: #6a5438; }
        .adm-success {
          margin: 16px 32px 0; background: #f0f7f0; border: 1px solid #b5d9b5;
          color: #3a7a3a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
        }
        .adm-error {
          margin: 16px 32px 0; background: #fdf0ee; border: 1px solid #e8b5ad;
          color: #b85a4a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .adm-error button { background: none; border: none; color: #b85a4a; cursor: pointer; font-size: 18px; }
        .adm-content { padding: 28px 32px; flex: 1; max-width: 1320px; }
        .adm-loading, .adm-empty {
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 16px; color: #b0a498;
          font-size: 14px; padding: 80px 0;
        }
        .adm-spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .adm-drag-hint {
          margin: 0 0 12px; font-size: 12px; color: #9a8e82;
          display: flex; align-items: center; gap: 4px;
        }
        .adm-saving { color: #7a6245; font-weight: 500; }
        .adm-table-wrap { overflow-x: auto; border-radius: 6px; border: 1px solid #e2d9ce; background: #fff; }
        .adm-row-draggable { cursor: grab; }
        .adm-row-dragging { opacity: 0.4; }
        .adm-row-over td { border-top: 2px solid #7a6245; }
        .adm-drag-handle { color: #c0b5a8; cursor: grab; width: 32px; text-align: center; }
        .adm-drag-handle:hover { color: #7a6245; }
        .adm-table { width: 100%; border-collapse: collapse; }
        .adm-table thead tr { background: #faf8f5; }
        .adm-table th {
          padding: 12px 16px; font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: #b0a498; font-weight: 600;
          text-align: left; border-bottom: 1px solid #ede8e1; white-space: nowrap;
        }
        .adm-table td {
          padding: 14px 16px; font-size: 13px; color: #2a2218;
          border-bottom: 1px solid #f0ebe3; vertical-align: middle;
        }
        .adm-table tbody tr:last-child td { border-bottom: none; }
        .adm-table tbody tr:hover td { background: #faf8f5; }
        .adm-thumb {
          width: 56px; height: 38px; object-fit: cover;
          border-radius: 4px; border: 1px solid #e2d9ce; display: block;
        }
        .adm-thumb-placeholder {
          width: 56px; height: 38px; background: #f0ebe3;
          border-radius: 4px; display: flex; align-items: center; justify-content: center;
          color: #c0b5a8; font-size: 12px;
        }
        .adm-name { color: #1a1612; font-size: 14px; font-weight: 500; }
        .adm-slug { color: #c0b5a8; font-size: 11px; margin-top: 2px; font-family: monospace; }
        .adm-cell-muted { color: #9a8e82; }
        .adm-badge {
          display: inline-block; padding: 3px 10px; border-radius: 20px;
          font-size: 11px; text-transform: capitalize; letter-spacing: 0.05em; font-weight: 500;
        }
        .adm-badge-residential { background: #eaf4ea; color: #3a7a3a; }
        .adm-badge-commercial   { background: #eaf0f8; color: #2a5a8a; }
        .adm-badge-architecture { background: #f8f0ea; color: #8a4a2a; }
        .adm-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
        .adm-action-btn {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 6px 8px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
        }
        .adm-action-btn:hover { border-color: #7a6245; color: #7a6245; }
        .adm-action-del:hover { border-color: #b85a4a; color: #b85a4a; }
        .adm-confirm { display: flex; align-items: center; gap: 6px; }
        .adm-confirm span { font-size: 12px; color: #b85a4a; }
        .adm-confirm-yes {
          background: #b85a4a; color: #fff; border: none; border-radius: 4px;
          padding: 4px 10px; font-size: 12px; cursor: pointer;
          display: flex; align-items: center; gap: 4px;
        }
        .adm-confirm-no {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 4px 10px; font-size: 12px; cursor: pointer;
        }
        .adm-confirm-no:hover { color: #7a6245; border-color: #7a6245; }
      `})]})}function x6({children:e}){return sessionStorage.getItem("nivora_admin")==="true"?o.jsx(o.Fragment,{children:e}):o.jsx(D0,{to:"/adminpannel",replace:!0})}function y6(){const e=$t(),[t,n]=m.useState(""),[r,i]=m.useState(""),[s,a]=m.useState(""),[l,c]=m.useState(!1),u=async d=>{d.preventDefault(),c(!0),a("");try{await a5(t,r),e("/excelsheet/data")}catch(p){a(p.message),c(!1)}};return o.jsxs("div",{className:"admin-login-root",children:[o.jsxs("div",{className:"admin-login-card",children:[o.jsxs("div",{className:"admin-login-logo",children:[o.jsx("span",{className:"admin-login-brand",children:"nivora"}),o.jsx("span",{className:"admin-login-sub",children:"ENQUIRY RECORDS"})]}),o.jsxs("form",{onSubmit:u,className:"admin-login-form",children:[o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Username"}),o.jsx("input",{type:"text",value:t,onChange:d=>n(d.target.value),placeholder:"Enter username",autoFocus:!0,required:!0})]}),o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:r,onChange:d=>i(d.target.value),placeholder:"Enter password",required:!0})]}),s&&o.jsx("p",{className:"admin-login-error",children:s}),o.jsx("button",{type:"submit",className:"admin-btn-primary",disabled:l,children:l?"Signing in…":"Sign In"})]})]}),o.jsx("style",{children:`
        .admin-login-root {
          min-height: 100vh;
          background: #f0ebe3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Georgia', serif;
        }
        .admin-login-card {
          background: #ffffff;
          border: 1px solid #e2d9ce;
          border-radius: 6px;
          padding: 48px 40px;
          width: 100%;
          max-width: 380px;
          box-shadow: 0 8px 40px rgba(100,80,60,0.10);
        }
        .admin-login-logo {
          text-align: center;
          margin-bottom: 36px;
        }
        .admin-login-brand {
          display: block;
          font-size: 32px;
          letter-spacing: 0.12em;
          color: #7a6245;
          font-style: italic;
        }
        .admin-login-sub {
          display: block;
          font-size: 10px;
          letter-spacing: 0.35em;
          color: #b5a99a;
          margin-top: 4px;
          font-family: 'Arial', sans-serif;
        }
        .admin-login-form { display: flex; flex-direction: column; gap: 20px; }
        .admin-field { display: flex; flex-direction: column; gap: 6px; }
        .admin-field label {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #9a8e82;
          font-family: 'Arial', sans-serif;
          text-transform: uppercase;
        }
        .admin-field input {
          background: #faf8f5;
          border: 1px solid #ddd7ce;
          border-radius: 4px;
          color: #1a1612;
          font-size: 14px;
          padding: 11px 14px;
          outline: none;
          font-family: 'Arial', sans-serif;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .admin-field input:focus { border-color: #7a6245; box-shadow: 0 0 0 3px rgba(122,98,69,0.08); }
        .admin-field input::placeholder { color: #c8c0b5; }
        .admin-login-error {
          color: #b85a4a;
          font-size: 13px;
          font-family: 'Arial', sans-serif;
          margin: 0;
        }
        .admin-btn-primary {
          background: #7a6245;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          padding: 13px;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-family: 'Arial', sans-serif;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.2s, opacity 0.2s;
          margin-top: 4px;
        }
        .admin-btn-primary:hover:not(:disabled) { background: #6a5438; }
        .admin-btn-primary:disabled { opacity: 0.5; cursor: default; }
      `})]})}const v6=[{key:"fullName",label:"Full Name",type:"text"},{key:"phone",label:"Phone Number",type:"text"},{key:"email",label:"Email Address",type:"text"},{key:"spaceType",label:"Type of Space",type:"text"},{key:"location",label:"Project Location",type:"text"},{key:"projectType",label:"Project Type",type:"text"},{key:"budget",label:"Estimated Budget",type:"text"},{key:"referral",label:"How Did You Hear About Us",type:"text"},{key:"requirements",label:"Brief Requirements",type:"textarea"},{key:"notes",label:"Notes",type:"textarea"}];function Qr(e=new Date){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Ga(e){return new Date(`${e}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function b6(){const e=$t(),[t,n]=m.useState([]),[r,i]=m.useState(()=>Qr()),[s,a]=m.useState(!0),[l,c]=m.useState(""),[u,d]=m.useState(""),[p,f]=m.useState(null),[x,v]=m.useState({}),[b,w]=m.useState(!1),[g,h]=m.useState(null),[y,S]=m.useState(null),[j,k]=m.useState(!1),E=R=>{d(R),setTimeout(()=>d(""),3e3)},C=async(R=r)=>{a(!0),c(""),n([]);try{n(await l5(R))}catch(A){c(A.message||"Failed to fetch enquiries")}finally{a(!1)}};m.useEffect(()=>{C(r)},[r]);const O=()=>{Yu(),e("/excelsheet")},D=R=>{f(R),v({...R})},V=async()=>{if(p){w(!0);try{await c5(p._id,x),await C(r),f(null),E("Record updated.")}catch(R){c(R.message)}finally{w(!1)}}},_=async R=>{S(R);try{await u5(R),await C(r),E("Record deleted.")}catch(A){c(A.message)}finally{S(null),h(null)}},$=async()=>{k(!0);try{await d5(r)}catch(R){c(R.message)}finally{k(!1)}},F=R=>{const A=new Date;A.setDate(A.getDate()+R),i(Qr(A))},Q=r===Qr()?`Today, ${Ga(r)}`:r===Qr(new Date(Date.now()-24*60*60*1e3))?`Yesterday, ${Ga(r)}`:Ga(r);return o.jsxs("div",{className:"exc-root",children:[o.jsxs("aside",{className:"exc-sidebar",children:[o.jsxs("div",{className:"exc-sidebar-brand",children:[o.jsx("span",{className:"exc-brand-name",children:"nivora"}),o.jsx("span",{className:"exc-brand-sub",children:"enquiry records"})]}),o.jsx("div",{className:"exc-sidebar-footer",children:o.jsxs("button",{className:"exc-logout",onClick:O,children:[o.jsx(kx,{size:15})," Sign Out"]})})]}),o.jsxs("main",{className:"exc-main",children:[o.jsxs("header",{className:"exc-topbar",children:[o.jsxs("div",{className:"exc-topbar-left",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"exc-page-title",children:"Contact Form Records"}),o.jsxs("p",{className:"exc-date-status",children:["Showing enquiries for: ",Q]})]}),o.jsxs("span",{className:"exc-count",children:[t.length," ",t.length===1?"entry":"entries"]})]}),o.jsxs("div",{className:"exc-topbar-right",children:[o.jsxs("div",{className:"exc-date-controls",children:[o.jsx("button",{className:"exc-date-shortcut",onClick:()=>F(0),children:"Today"}),o.jsx("button",{className:"exc-date-shortcut",onClick:()=>F(-1),children:"Yesterday"}),o.jsxs("label",{className:"exc-date-picker",children:[o.jsx("span",{children:"Date"}),o.jsx("input",{type:"date",value:r,max:Qr(),onChange:R=>R.target.value&&i(R.target.value),"aria-label":"Select enquiry date"})]})]}),o.jsx("button",{className:"exc-btn-ghost-sm",onClick:()=>C(r),title:"Refresh",children:o.jsx(Px,{size:15})}),o.jsxs("button",{className:"exc-btn-add",onClick:$,disabled:j||t.length===0,children:[j?o.jsx(De,{size:16,className:"exc-spin"}):o.jsx(DS,{size:16})," Download Excel"]})]})]}),u&&o.jsx("div",{className:"exc-success",children:u}),l&&o.jsxs("div",{className:"exc-error",children:[l,o.jsx("button",{onClick:()=>c(""),children:"×"})]}),o.jsx("div",{className:"exc-content",children:s?o.jsxs("div",{className:"exc-loading",children:[o.jsx(De,{size:28,className:"exc-spin"})," Loading records…"]}):t.length===0?o.jsx("div",{className:"exc-empty",children:o.jsx("p",{children:"No enquiries found"})}):o.jsx("div",{className:"exc-table-wrap",children:o.jsxs("table",{className:"exc-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Submitted"}),o.jsx("th",{children:"Full Name"}),o.jsx("th",{children:"Phone"}),o.jsx("th",{children:"Email"}),o.jsx("th",{children:"Space Type"}),o.jsx("th",{children:"Location"}),o.jsx("th",{children:"Project Type"}),o.jsx("th",{children:"Budget"}),o.jsx("th",{children:"Email Sent"}),o.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),o.jsx("tbody",{children:t.map(R=>o.jsxs("tr",{children:[o.jsx("td",{className:"exc-cell-muted",children:new Date(R.createdAt).toLocaleString()}),o.jsx("td",{className:"exc-name",children:R.fullName}),o.jsx("td",{className:"exc-cell-muted",children:R.phone}),o.jsx("td",{className:"exc-cell-muted",children:R.email}),o.jsx("td",{className:"exc-cell-muted",children:R.spaceType||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.location||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.projectType||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.budget||"—"}),o.jsx("td",{children:o.jsx("span",{className:`exc-badge ${R.emailSent?"exc-badge-yes":"exc-badge-no"}`,children:R.emailSent?"Yes":"No"})}),o.jsx("td",{children:o.jsxs("div",{className:"exc-actions",children:[o.jsx("button",{className:"exc-action-btn",onClick:()=>D(R),title:"Edit",children:o.jsx(Tx,{size:14})}),g===R._id?o.jsxs("div",{className:"exc-confirm",children:[o.jsx("span",{children:"Delete?"}),o.jsx("button",{className:"exc-confirm-yes",onClick:()=>_(R._id),disabled:y===R._id,children:y===R._id?o.jsx(De,{size:12,className:"exc-spin"}):o.jsx(NS,{size:12})}),o.jsx("button",{className:"exc-confirm-no",onClick:()=>h(null),children:o.jsx(jt,{size:12})})]}):o.jsx("button",{className:"exc-action-btn exc-action-del",onClick:()=>h(R._id),title:"Delete",children:o.jsx(Zs,{size:14})})]})})]},R._id))})]})})})]}),p&&o.jsx("div",{className:"exc-modal-overlay",onClick:()=>!b&&f(null),children:o.jsxs("div",{className:"exc-modal",onClick:R=>R.stopPropagation(),children:[o.jsxs("div",{className:"exc-modal-header",children:[o.jsx("h2",{children:"Edit Record"}),o.jsx("button",{className:"exc-modal-close",onClick:()=>!b&&f(null),children:o.jsx(jt,{size:18})})]}),o.jsx("div",{className:"exc-modal-body",children:v6.map(R=>o.jsxs("div",{className:"exc-field",children:[o.jsx("label",{children:R.label}),R.type==="textarea"?o.jsx("textarea",{value:x[R.key]||"",onChange:A=>v(T=>({...T,[R.key]:A.target.value}))}):o.jsx("input",{type:"text",value:x[R.key]||"",onChange:A=>v(T=>({...T,[R.key]:A.target.value}))})]},R.key))}),o.jsxs("div",{className:"exc-modal-footer",children:[o.jsx("button",{className:"exc-btn-ghost",onClick:()=>f(null),disabled:b,children:"Cancel"}),o.jsxs("button",{className:"exc-btn-add",onClick:V,disabled:b,children:[b?o.jsx(De,{size:16,className:"exc-spin"}):null," Save Changes"]})]})]})}),o.jsx("style",{children:`
        * { box-sizing: border-box; }
        .exc-root { min-height: 100vh; display: flex; background: #f0ebe3; font-family: Arial, sans-serif; }
        .exc-sidebar {
          width: 230px; min-height: 100vh; flex-shrink: 0;
          background: #ffffff; border-right: 1px solid #e2d9ce;
          display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh;
        }
        .exc-sidebar-brand { padding: 28px 24px 20px; border-bottom: 1px solid #ede8e1; }
        .exc-brand-name { display: block; font-size: 24px; color: #7a6245; font-family: Georgia, serif; font-style: italic; letter-spacing: 0.1em; }
        .exc-brand-sub { display: block; font-size: 9px; letter-spacing: 0.25em; color: #c0b5a8; text-transform: uppercase; margin-top: 2px; }
        .exc-sidebar-footer { margin-top: auto; padding: 20px 24px; border-top: 1px solid #ede8e1; }
        .exc-logout { display: flex; align-items: center; gap: 8px; background: none; border: none; color: #9a8e82; cursor: pointer; font-size: 13px; padding: 0; transition: color 0.2s; }
        .exc-logout:hover { color: #b85a4a; }
        .exc-main { flex: 1; display: flex; flex-direction: column; min-width: 0; }
        .exc-topbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 32px; border-bottom: 1px solid #e2d9ce;
          background: #ffffff; position: sticky; top: 0; z-index: 10;
          box-shadow: 0 1px 0 #e2d9ce;
        }
        .exc-topbar-left { display: flex; align-items: baseline; gap: 12px; }
         .exc-topbar-left > div { display: flex; flex-direction: column; gap: 4px; }
        .exc-page-title { margin: 0; font-size: 18px; color: #1a1612; font-weight: normal; letter-spacing: 0.03em; }
         .exc-date-status { margin: 0; font-size: 11px; color: #9a8e82; }
        .exc-count { font-size: 12px; color: #c0b5a8; }
         .exc-topbar-right { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; justify-content: flex-end; }
         .exc-date-controls { display: flex; align-items: center; gap: 6px; }
         .exc-date-shortcut {
           background: #faf8f5; border: 1px solid #ddd7ce; color: #7a6245;
           border-radius: 4px; padding: 8px 10px; cursor: pointer; font-size: 11px;
         }
         .exc-date-shortcut:hover { border-color: #7a6245; background: #f4eee6; }
         .exc-date-picker {
           display: flex; align-items: center; gap: 7px; border: 1px solid #ddd7ce;
           border-radius: 4px; padding: 5px 8px; background: #fff; color: #9a8e82;
           font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em;
         }
         .exc-date-picker input { border: none; outline: none; color: #2a2218; font: 12px Arial, sans-serif; cursor: pointer; }
        .exc-btn-ghost-sm {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 7px 9px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
        }
        .exc-btn-ghost-sm:hover { border-color: #7a6245; color: #7a6245; }
        .exc-btn-ghost {
          background: none; border: 1px solid #ddd7ce; color: #6b5d4f;
          border-radius: 4px; padding: 9px 18px; font-size: 13px; cursor: pointer;
        }
        .exc-btn-ghost:hover { border-color: #7a6245; color: #7a6245; }
        .exc-btn-add {
          display: flex; align-items: center; gap: 8px;
          background: #7a6245; color: #ffffff; border: none;
          border-radius: 4px; padding: 9px 18px; font-size: 13px;
          letter-spacing: 0.04em; cursor: pointer; font-weight: 600;
          transition: background 0.2s;
        }
        .exc-btn-add:hover:not(:disabled) { background: #6a5438; }
        .exc-btn-add:disabled { opacity: 0.5; cursor: default; }
        .exc-success {
          margin: 16px 32px 0; background: #f0f7f0; border: 1px solid #b5d9b5;
          color: #3a7a3a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
        }
        .exc-error {
          margin: 16px 32px 0; background: #fdf0ee; border: 1px solid #e8b5ad;
          color: #b85a4a; border-radius: 4px; padding: 10px 16px; font-size: 13px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .exc-error button { background: none; border: none; color: #b85a4a; cursor: pointer; font-size: 18px; }
        .exc-content { padding: 28px 32px; flex: 1; }
        .exc-loading, .exc-empty {
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 16px; color: #b0a498;
          font-size: 14px; padding: 80px 0;
        }
        .exc-spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .exc-table-wrap { overflow-x: auto; border-radius: 6px; border: 1px solid #e2d9ce; background: #fff; }
        .exc-table { width: 100%; border-collapse: collapse; }
        .exc-table thead tr { background: #faf8f5; }
        .exc-table th {
          padding: 12px 16px; font-size: 10px; letter-spacing: 0.15em;
          text-transform: uppercase; color: #b0a498; font-weight: 600;
          text-align: left; border-bottom: 1px solid #ede8e1; white-space: nowrap;
        }
        .exc-table td {
          padding: 14px 16px; font-size: 13px; color: #2a2218;
          border-bottom: 1px solid #f0ebe3; vertical-align: middle; white-space: nowrap;
        }
        .exc-table tbody tr:last-child td { border-bottom: none; }
        .exc-table tbody tr:hover td { background: #faf8f5; }
        .exc-name { color: #1a1612; font-size: 14px; font-weight: 500; }
        .exc-cell-muted { color: #9a8e82; }
        .exc-badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
        .exc-badge-yes { background: #eaf4ea; color: #3a7a3a; }
        .exc-badge-no { background: #fdf0ee; color: #b85a4a; }
        .exc-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; }
        .exc-action-btn {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 6px 8px; cursor: pointer;
          display: flex; align-items: center; transition: all 0.2s;
        }
        .exc-action-btn:hover { border-color: #7a6245; color: #7a6245; }
        .exc-action-del:hover { border-color: #b85a4a; color: #b85a4a; }
        .exc-confirm { display: flex; align-items: center; gap: 6px; }
        .exc-confirm span { font-size: 12px; color: #b85a4a; }
        .exc-confirm-yes {
          background: #b85a4a; color: #fff; border: none; border-radius: 4px;
          padding: 4px 8px; cursor: pointer; display: flex; align-items: center;
        }
        .exc-confirm-no {
          background: none; border: 1px solid #ddd7ce; color: #9a8e82;
          border-radius: 4px; padding: 4px 8px; cursor: pointer; display: flex; align-items: center;
        }
        .exc-confirm-no:hover { color: #7a6245; border-color: #7a6245; }

        .exc-modal-overlay {
          position: fixed; inset: 0; background: rgba(30,25,20,0.4);
          display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px;
        }
        .exc-modal {
          background: #fff; border-radius: 8px; width: 100%; max-width: 560px;
          max-height: 88vh; display: flex; flex-direction: column; overflow: hidden;
        }
        .exc-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px; border-bottom: 1px solid #ede8e1;
        }
        .exc-modal-header h2 { margin: 0; font-size: 16px; color: #1a1612; font-weight: 600; }
        .exc-modal-close { background: none; border: none; color: #9a8e82; cursor: pointer; display: flex; }
        .exc-modal-close:hover { color: #1a1612; }
        .exc-modal-body { padding: 20px 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
        .exc-field { display: flex; flex-direction: column; gap: 6px; }
        .exc-field label { font-size: 11px; letter-spacing: 0.1em; color: #9a8e82; text-transform: uppercase; }
        .exc-field input, .exc-field textarea {
          border: 1px solid #ddd7ce; border-radius: 4px; padding: 9px 12px;
          font-size: 13px; color: #1a1612; font-family: Arial, sans-serif; outline: none;
        }
        .exc-field input:focus, .exc-field textarea:focus { border-color: #7a6245; }
        .exc-field textarea { min-height: 70px; resize: vertical; }
        .exc-modal-footer {
          display: flex; justify-content: flex-end; gap: 10px;
          padding: 16px 24px; border-top: 1px solid #ede8e1;
        }
         @media (max-width: 900px) {
           .exc-topbar { align-items: flex-start; flex-direction: column; gap: 14px; }
           .exc-topbar-right { width: 100%; justify-content: space-between; }
           .exc-date-controls { flex-wrap: wrap; }
         }
         @media (max-width: 560px) {
           .exc-sidebar { width: 170px; }
           .exc-topbar, .exc-content { padding-left: 16px; padding-right: 16px; }
           .exc-topbar-left { align-items: flex-start; flex-direction: column; gap: 4px; }
           .exc-topbar-right { align-items: stretch; }
           .exc-date-controls { width: 100%; }
           .exc-date-picker { flex: 1; justify-content: space-between; }
           .exc-date-picker input { min-width: 0; width: 100%; }
           .exc-btn-add { padding-left: 12px; padding-right: 12px; }
         }
      `})]})}function w6({children:e}){return sessionStorage.getItem("nivora_excel_admin")==="true"?o.jsx(o.Fragment,{children:e}):o.jsx(D0,{to:"/excelsheet",replace:!0})}const j6=(()=>{try{const e=performance.getEntriesByType("navigation");if(e.length>0){const t=e[0].type;return t==="navigate"||t==="reload"}}catch{}return!0})();let cm=!1;function S6(){const{pathname:e}=Ut();return m.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function At({children:e}){return o.jsxs(o.Fragment,{children:[o.jsx(g5,{}),o.jsx("main",{children:e}),o.jsx(w5,{}),o.jsx(j5,{}),o.jsx(E5,{})]})}function k6(){const e=Ut(),t=e.pathname==="/",n=()=>j6&&!cm,[r,i]=m.useState(0),[s,a]=m.useState(!t||!n()),[l,c]=m.useState(t&&n());m.useEffect(()=>{e.pathname==="/"&&n()?(c(!0),a(!1),i(d=>d+1)):(c(!1),a(!0))},[e.key]);const u=()=>{cm=!0,a(!0),c(!1)};return o.jsxs(o.Fragment,{children:[l&&o.jsx(P5,{onExitComplete:u},r),o.jsx(z5,{splashDone:s}),o.jsxs(N.div,{animate:{x:l?"100%":0},transition:{duration:.7,ease:[.65,0,.35,1]},style:{overflowX:"hidden",minHeight:"100vh"},children:[o.jsx(S6,{}),o.jsxs(L0,{children:[o.jsx(Re,{path:"/",element:o.jsx(At,{children:o.jsx(Z5,{splashDone:s})})}),o.jsx(Re,{path:"/portfolio",element:o.jsx(At,{children:o.jsx(rk,{})})}),o.jsx(Re,{path:"/portfolio/:id",element:o.jsx(At,{children:o.jsx(Zk,{})})}),o.jsx(Re,{path:"/services",element:o.jsx(At,{children:o.jsx(pk,{})})}),o.jsx(Re,{path:"/about",element:o.jsx(At,{children:o.jsx(Pk,{})})}),o.jsx(Re,{path:"/testimonials",element:o.jsx(At,{children:o.jsx(Lk,{})})}),o.jsx(Re,{path:"/contact",element:o.jsx(At,{children:o.jsx(_k,{})})}),o.jsx(Re,{path:"/quote",element:o.jsx(At,{children:o.jsx($k,{})})}),o.jsx(Re,{path:"/thank-you",element:o.jsx(At,{children:o.jsx(qk,{})})})]})]})]})}function C6(){return o.jsx(d2,{children:o.jsxs(L0,{children:[o.jsx(Re,{path:"/adminpannel",element:o.jsx(e6,{})}),o.jsx(Re,{path:"/adminpannel/dashboard",element:o.jsx(x6,{children:o.jsx(g6,{})})}),o.jsx(Re,{path:"/excelsheet",element:o.jsx(y6,{})}),o.jsx(Re,{path:"/excelsheet/data",element:o.jsx(w6,{children:o.jsx(b6,{})})}),o.jsx(Re,{path:"/*",element:o.jsx(k6,{})})]})})}j0(document.getElementById("root")).render(o.jsx(m.StrictMode,{children:o.jsx(C6,{})}));
//# sourceMappingURL=index-B0vmhMCw.js.map
