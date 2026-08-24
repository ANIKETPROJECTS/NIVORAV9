function Ox(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Vx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var lm={exports:{}},Ts={},cm={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ki=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),_x=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Hx=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Yx=Symbol.for("react.forward_ref"),Kx=Symbol.for("react.suspense"),Gx=Symbol.for("react.memo"),Xx=Symbol.for("react.lazy"),td=Symbol.iterator;function qx(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var um={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},dm=Object.assign,pm={};function Tr(e,t,n){this.props=e,this.context=t,this.refs=pm,this.updater=n||um}Tr.prototype.isReactComponent={};Tr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Tr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fm(){}fm.prototype=Tr.prototype;function sc(e,t,n){this.props=e,this.context=t,this.refs=pm,this.updater=n||um}var ac=sc.prototype=new fm;ac.constructor=sc;dm(ac,Tr.prototype);ac.isPureReactComponent=!0;var nd=Array.isArray,mm=Object.prototype.hasOwnProperty,lc={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function gm(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)mm.call(t,r)&&!hm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ki,type:e,key:s,ref:a,props:i,_owner:lc.current}}function Jx(e,t){return{$$typeof:Ki,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function cc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ki}function Qx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rd=/\/+/g;function Zs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qx(""+e.key):t.toString(36)}function Ao(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ki:case Bx:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Zs(a,0):r,nd(i)?(n="",e!=null&&(n=e.replace(rd,"$&/")+"/"),Ao(i,t,n,"",function(u){return u})):i!=null&&(cc(i)&&(i=Jx(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(rd,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",nd(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Zs(s,l);a+=Ao(s,t,n,c,i)}else if(c=qx(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Zs(s,l++),a+=Ao(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ao(e,t,n){if(e==null)return e;var r=[],i=0;return Ao(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Zx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},zo={transition:null},ey={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:zo,ReactCurrentOwner:lc};function xm(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:ao,forEach:function(e,t,n){ao(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ao(e,function(){t++}),t},toArray:function(e){return ao(e,function(t){return t})||[]},only:function(e){if(!cc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Tr;K.Fragment=_x;K.Profiler=Hx;K.PureComponent=sc;K.StrictMode=Wx;K.Suspense=Kx;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;K.act=xm;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=dm({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=lc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)mm.call(t,c)&&!hm.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ki,type:e.type,key:i,ref:s,props:r,_owner:a}};K.createContext=function(e){return e={$$typeof:$x,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ux,_context:e},e.Consumer=e};K.createElement=gm;K.createFactory=function(e){var t=gm.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Yx,render:e}};K.isValidElement=cc;K.lazy=function(e){return{$$typeof:Xx,_payload:{_status:-1,_result:e},_init:Zx}};K.memo=function(e,t){return{$$typeof:Gx,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=zo.transition;zo.transition={};try{e()}finally{zo.transition=t}};K.unstable_act=xm;K.useCallback=function(e,t){return Me.current.useCallback(e,t)};K.useContext=function(e){return Me.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};K.useEffect=function(e,t){return Me.current.useEffect(e,t)};K.useId=function(){return Me.current.useId()};K.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Me.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};K.useRef=function(e){return Me.current.useRef(e)};K.useState=function(e){return Me.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Me.current.useTransition()};K.version="18.3.1";cm.exports=K;var h=cm.exports;const ty=Vx(h),ny=Ox({__proto__:null,default:ty},[h]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry=h,iy=Symbol.for("react.element"),oy=Symbol.for("react.fragment"),sy=Object.prototype.hasOwnProperty,ay=ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ly={key:!0,ref:!0,__self:!0,__source:!0};function ym(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)sy.call(t,r)&&!ly.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:iy,type:e,key:s,ref:a,props:i,_owner:ay.current}}Ts.Fragment=oy;Ts.jsx=ym;Ts.jsxs=ym;lm.exports=Ts;var o=lm.exports,vm={exports:{}},qe={},bm={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,M){var W=E.length;E.push(M);e:for(;0<W;){var G=W-1>>>1,ee=E[G];if(0<i(ee,M))E[G]=M,E[W]=ee,W=G;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var M=E[0],W=E.pop();if(W!==M){E[0]=W;e:for(var G=0,ee=E.length,Y=ee>>>1;G<Y;){var re=2*(G+1)-1,N=E[re],A=re+1,_=E[A];if(0>i(N,W))A<ee&&0>i(_,N)?(E[G]=_,E[A]=W,G=A):(E[G]=N,E[re]=W,G=re);else if(A<ee&&0>i(_,W))E[G]=_,E[A]=W,G=A;else break e}}return M}function i(E,M){var W=E.sortIndex-M.sortIndex;return W!==0?W:E.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,x=!1,v=!1,b=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(E){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=E)r(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=n(u)}}function S(E){if(b=!1,y(E),!v)if(n(c)!==null)v=!0,R(j);else{var M=n(u);M!==null&&z(S,M.startTime-E)}}function j(E,M){v=!1,b&&(b=!1,g(C),C=-1),x=!0;var W=f;try{for(y(M),p=n(c);p!==null&&(!(p.expirationTime>M)||E&&!O());){var G=p.callback;if(typeof G=="function"){p.callback=null,f=p.priorityLevel;var ee=G(p.expirationTime<=M);M=e.unstable_now(),typeof ee=="function"?p.callback=ee:p===n(c)&&r(c),y(M)}else r(c);p=n(c)}if(p!==null)var Y=!0;else{var re=n(u);re!==null&&z(S,re.startTime-M),Y=!1}return Y}finally{p=null,f=W,x=!1}}var k=!1,T=null,C=-1,V=5,D=-1;function O(){return!(e.unstable_now()-D<V)}function B(){if(T!==null){var E=e.unstable_now();D=E;var M=!0;try{M=T(!0,E)}finally{M?$():(k=!1,T=null)}}else k=!1}var $;if(typeof m=="function")$=function(){m(B)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,Q=F.port2;F.port1.onmessage=B,$=function(){Q.postMessage(null)}}else $=function(){w(B,0)};function R(E){T=E,k||(k=!0,$())}function z(E,M){C=w(function(){E(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,R(j))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var W=f;f=M;try{return E()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,M){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var W=f;f=E;try{return M()}finally{f=W}},e.unstable_scheduleCallback=function(E,M,W){var G=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?G+W:G):W=G,E){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=W+ee,E={id:d++,callback:M,priorityLevel:E,startTime:W,expirationTime:ee,sortIndex:-1},W>G?(E.sortIndex=W,t(u,E),n(c)===null&&E===n(u)&&(b?(g(C),C=-1):b=!0,z(S,W-G))):(E.sortIndex=ee,t(c,E),v||x||(v=!0,R(j))),E},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(E){var M=f;return function(){var W=f;f=M;try{return E.apply(this,arguments)}finally{f=W}}}})(wm);bm.exports=wm;var cy=bm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy=h,Ge=cy;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jm=new Set,ji={};function Un(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(ji[e]=t,e=0;e<t.length;e++)jm.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,id={},od={};function py(e){return Ka.call(od,e)?!0:Ka.call(id,e)?!1:dy.test(e)?od[e]=!0:(id[e]=!0,!1)}function fy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function my(e,t,n,r){if(t===null||typeof t>"u"||fy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var uc=/[\-:]([a-z])/g;function dc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uc,dc);Ce[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uc,dc);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uc,dc);Ce[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function pc(e,t,n,r){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(my(t,n,i,r)&&(n=null),r||i===null?py(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=uy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lo=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Xn=Symbol.for("react.fragment"),fc=Symbol.for("react.strict_mode"),Ga=Symbol.for("react.profiler"),Sm=Symbol.for("react.provider"),km=Symbol.for("react.context"),mc=Symbol.for("react.forward_ref"),Xa=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),hc=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),sd=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=sd&&e[sd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,ea;function Jr(e){if(ea===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ea=t&&t[1]||""}return`
`+ea+e}var ta=!1;function na(e,t){if(!e||ta)return"";ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{ta=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jr(e):""}function hy(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=na(e.type,!1),e;case 11:return e=na(e.type.render,!1),e;case 1:return e=na(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xn:return"Fragment";case Gn:return"Portal";case Ga:return"Profiler";case fc:return"StrictMode";case Xa:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case km:return(e.displayName||"Context")+".Consumer";case Sm:return(e._context.displayName||"Context")+".Provider";case mc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hc:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function gy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Em(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function xy(e){var t=Em(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=xy(e))}function Tm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Em(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qa(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nm(e,t){t=t.checked,t!=null&&pc(e,"checked",t,!1)}function Za(e,t){Nm(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?el(e,t.type,n):t.hasOwnProperty("defaultValue")&&el(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ld(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function el(e,t,n){(t!=="number"||Xo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qr=Array.isArray;function dr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Qr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function Pm(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ud(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Am(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Am(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var uo,zm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(uo=uo||document.createElement("div"),uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Si(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yy=["Webkit","ms","Moz","O"];Object.keys(si).forEach(function(e){yy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),si[t]=si[e]})});function Im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||si.hasOwnProperty(e)&&si[e]?(""+t).trim():t+"px"}function Rm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Im(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var vy=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rl(e,t){if(t){if(vy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function il(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ol=null;function gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sl=null,pr=null,fr=null;function dd(e){if(e=qi(e)){if(typeof sl!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Is(t),sl(e.stateNode,e.type,t))}}function Dm(e){pr?fr?fr.push(e):fr=[e]:pr=e}function Lm(){if(pr){var e=pr,t=fr;if(fr=pr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function Mm(e,t){return e(t)}function Fm(){}var ra=!1;function Om(e,t,n){if(ra)return e(t,n);ra=!0;try{return Mm(e,t,n)}finally{ra=!1,(pr!==null||fr!==null)&&(Fm(),Lm())}}function ki(e,t){var n=e.stateNode;if(n===null)return null;var r=Is(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var al=!1;if(Mt)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){al=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{al=!1}function by(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ai=!1,qo=null,Jo=!1,ll=null,wy={onError:function(e){ai=!0,qo=e}};function jy(e,t,n,r,i,s,a,l,c){ai=!1,qo=null,by.apply(wy,arguments)}function Sy(e,t,n,r,i,s,a,l,c){if(jy.apply(this,arguments),ai){if(ai){var u=qo;ai=!1,qo=null}else throw Error(I(198));Jo||(Jo=!0,ll=u)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pd(e){if($n(e)!==e)throw Error(I(188))}function ky(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pd(i),e;if(s===r)return pd(i),t;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Bm(e){return e=ky(e),e!==null?_m(e):null}function _m(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_m(e);if(t!==null)return t;e=e.sibling}return null}var Wm=Ge.unstable_scheduleCallback,fd=Ge.unstable_cancelCallback,Cy=Ge.unstable_shouldYield,Ey=Ge.unstable_requestPaint,fe=Ge.unstable_now,Ty=Ge.unstable_getCurrentPriorityLevel,xc=Ge.unstable_ImmediatePriority,Hm=Ge.unstable_UserBlockingPriority,Qo=Ge.unstable_NormalPriority,Ny=Ge.unstable_LowPriority,Um=Ge.unstable_IdlePriority,Ns=null,St=null;function Py(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Ns,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Iy,Ay=Math.log,zy=Math.LN2;function Iy(e){return e>>>=0,e===0?32:31-(Ay(e)/zy|0)|0}var po=64,fo=4194304;function Zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Zr(l):(s&=a,s!==0&&(r=Zr(s)))}else a=n&~i,a!==0?r=Zr(a):s!==0&&(r=Zr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),i=1<<n,r|=e[n],t&=~i;return r}function Ry(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-ft(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=Ry(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function $m(){var e=po;return po<<=1,!(po&4194240)&&(po=64),e}function ia(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Ly(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function yc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function Ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Km,vc,Gm,Xm,qm,ul=!1,mo=[],nn=null,rn=null,on=null,Ci=new Map,Ei=new Map,Jt=[],My="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function md(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function Br(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=qi(t),t!==null&&vc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return nn=Br(nn,e,t,n,r,i),!0;case"dragenter":return rn=Br(rn,e,t,n,r,i),!0;case"mouseover":return on=Br(on,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ci.set(s,Br(Ci.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ei.set(s,Br(Ei.get(s)||null,e,t,n,r,i)),!0}return!1}function Jm(e){var t=zn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=Vm(n),t!==null){e.blockedOn=t,qm(e.priority,function(){Gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ol=r,n.target.dispatchEvent(r),ol=null}else return t=qi(n),t!==null&&vc(t),e.blockedOn=n,!1;t.shift()}return!0}function hd(e,t,n){Io(e)&&n.delete(t)}function Oy(){ul=!1,nn!==null&&Io(nn)&&(nn=null),rn!==null&&Io(rn)&&(rn=null),on!==null&&Io(on)&&(on=null),Ci.forEach(hd),Ei.forEach(hd)}function _r(e,t){e.blockedOn===t&&(e.blockedOn=null,ul||(ul=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Oy)))}function Ti(e){function t(i){return _r(i,e)}if(0<mo.length){_r(mo[0],e);for(var n=1;n<mo.length;n++){var r=mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(nn!==null&&_r(nn,e),rn!==null&&_r(rn,e),on!==null&&_r(on,e),Ci.forEach(t),Ei.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)Jm(n),n.blockedOn===null&&Jt.shift()}var mr=Bt.ReactCurrentBatchConfig,es=!0;function Vy(e,t,n,r){var i=J,s=mr.transition;mr.transition=null;try{J=1,bc(e,t,n,r)}finally{J=i,mr.transition=s}}function By(e,t,n,r){var i=J,s=mr.transition;mr.transition=null;try{J=4,bc(e,t,n,r)}finally{J=i,mr.transition=s}}function bc(e,t,n,r){if(es){var i=dl(e,t,n,r);if(i===null)ma(e,t,r,ts,n),md(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(md(e,r),t&4&&-1<My.indexOf(e)){for(;i!==null;){var s=qi(i);if(s!==null&&Km(s),s=dl(e,t,n,r),s===null&&ma(e,t,r,ts,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ma(e,t,r,null,n)}}var ts=null;function dl(e,t,n,r){if(ts=null,e=gc(r),e=zn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ts=e,null}function Qm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ty()){case xc:return 1;case Hm:return 4;case Qo:case Ny:return 16;case Um:return 536870912;default:return 16}default:return 16}}var Zt=null,wc=null,Ro=null;function Zm(){if(Ro)return Ro;var e,t=wc,n=t.length,r,i="value"in Zt?Zt.value:Zt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Ro=i.slice(e,1<r?1-r:void 0)}function Do(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ho(){return!0}function gd(){return!1}function Je(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:gd,this.isPropagationStopped=gd,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=Je(Nr),Xi=ce({},Nr,{view:0,detail:0}),_y=Je(Xi),oa,sa,Wr,Ps=ce({},Xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wr&&(Wr&&e.type==="mousemove"?(oa=e.screenX-Wr.screenX,sa=e.screenY-Wr.screenY):sa=oa=0,Wr=e),oa)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),xd=Je(Ps),Wy=ce({},Ps,{dataTransfer:0}),Hy=Je(Wy),Uy=ce({},Xi,{relatedTarget:0}),aa=Je(Uy),$y=ce({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=Je($y),Ky=ce({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=Je(Ky),Xy=ce({},Nr,{data:0}),yd=Je(Xy),qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qy[e])?!!t[e]:!1}function Sc(){return Zy}var e1=ce({},Xi,{key:function(e){if(e.key){var t=qy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Do(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(e){return e.type==="keypress"?Do(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Do(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t1=Je(e1),n1=ce({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Je(n1),r1=ce({},Xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),i1=Je(r1),o1=ce({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),s1=Je(o1),a1=ce({},Ps,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l1=Je(a1),c1=[9,13,27,32],kc=Mt&&"CompositionEvent"in window,li=null;Mt&&"documentMode"in document&&(li=document.documentMode);var u1=Mt&&"TextEvent"in window&&!li,eh=Mt&&(!kc||li&&8<li&&11>=li),bd=" ",wd=!1;function th(e,t){switch(e){case"keyup":return c1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function d1(e,t){switch(e){case"compositionend":return nh(t);case"keypress":return t.which!==32?null:(wd=!0,bd);case"textInput":return e=t.data,e===bd&&wd?null:e;default:return null}}function p1(e,t){if(qn)return e==="compositionend"||!kc&&th(e,t)?(e=Zm(),Ro=wc=Zt=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return eh&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function rh(e,t,n,r){Dm(r),t=ns(t,"onChange"),0<t.length&&(n=new jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,Ni=null;function m1(e){mh(e,0)}function As(e){var t=Zn(e);if(Tm(t))return e}function h1(e,t){if(e==="change")return t}var ih=!1;if(Mt){var la;if(Mt){var ca="oninput"in document;if(!ca){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),ca=typeof Sd.oninput=="function"}la=ca}else la=!1;ih=la&&(!document.documentMode||9<document.documentMode)}function kd(){ci&&(ci.detachEvent("onpropertychange",oh),Ni=ci=null)}function oh(e){if(e.propertyName==="value"&&As(Ni)){var t=[];rh(t,Ni,e,gc(e)),Om(m1,t)}}function g1(e,t,n){e==="focusin"?(kd(),ci=t,Ni=n,ci.attachEvent("onpropertychange",oh)):e==="focusout"&&kd()}function x1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return As(Ni)}function y1(e,t){if(e==="click")return As(t)}function v1(e,t){if(e==="input"||e==="change")return As(t)}function b1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:b1;function Pi(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(t,i)||!ht(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function sh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w1(e){var t=ah(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sh(n.ownerDocument.documentElement,n)){if(r!==null&&Cc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Ed(n,s);var a=Ed(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j1=Mt&&"documentMode"in document&&11>=document.documentMode,Jn=null,pl=null,ui=null,fl=!1;function Td(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fl||Jn==null||Jn!==Xo(r)||(r=Jn,"selectionStart"in r&&Cc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&Pi(ui,r)||(ui=r,r=ns(pl,"onSelect"),0<r.length&&(t=new jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function go(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:go("Animation","AnimationEnd"),animationiteration:go("Animation","AnimationIteration"),animationstart:go("Animation","AnimationStart"),transitionend:go("Transition","TransitionEnd")},ua={},lh={};Mt&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function zs(e){if(ua[e])return ua[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lh)return ua[e]=t[n];return e}var ch=zs("animationend"),uh=zs("animationiteration"),dh=zs("animationstart"),ph=zs("transitionend"),fh=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,t){fh.set(e,t),Un(t,[e])}for(var da=0;da<Nd.length;da++){var pa=Nd[da],S1=pa.toLowerCase(),k1=pa[0].toUpperCase()+pa.slice(1);gn(S1,"on"+k1)}gn(ch,"onAnimationEnd");gn(uh,"onAnimationIteration");gn(dh,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(ph,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),C1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));function Pd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sy(r,t,void 0,e),e.currentTarget=null}function mh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;Pd(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;Pd(i,l,u),s=c}}}if(Jo)throw e=ll,Jo=!1,ll=null,e}function te(e,t){var n=t[yl];n===void 0&&(n=t[yl]=new Set);var r=e+"__bubble";n.has(r)||(hh(t,e,2,!1),n.add(r))}function fa(e,t,n){var r=0;t&&(r|=4),hh(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Ai(e){if(!e[xo]){e[xo]=!0,jm.forEach(function(n){n!=="selectionchange"&&(C1.has(n)||fa(n,!1,e),fa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,fa("selectionchange",!1,t))}}function hh(e,t,n,r){switch(Qm(t)){case 1:var i=Vy;break;case 4:i=By;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ma(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=zn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Om(function(){var u=s,d=gc(n),p=[];e:{var f=fh.get(e);if(f!==void 0){var x=jc,v=e;switch(e){case"keypress":if(Do(n)===0)break e;case"keydown":case"keyup":x=t1;break;case"focusin":v="focus",x=aa;break;case"focusout":v="blur",x=aa;break;case"beforeblur":case"afterblur":x=aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=i1;break;case ch:case uh:case dh:x=Yy;break;case ph:x=s1;break;case"scroll":x=_y;break;case"wheel":x=l1;break;case"copy":case"cut":case"paste":x=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=vd}var b=(t&4)!==0,w=!b&&e==="scroll",g=b?f!==null?f+"Capture":null:f;b=[];for(var m=u,y;m!==null;){y=m;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,g!==null&&(S=ki(m,g),S!=null&&b.push(zi(m,S,y)))),w)break;m=m.return}0<b.length&&(f=new x(f,v,null,n,d),p.push({event:f,listeners:b}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==ol&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Ft]))break e;if((x||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?zn(v):null,v!==null&&(w=$n(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(b=xd,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(b=vd,S="onPointerLeave",g="onPointerEnter",m="pointer"),w=x==null?f:Zn(x),y=v==null?f:Zn(v),f=new b(S,m+"leave",x,n,d),f.target=w,f.relatedTarget=y,S=null,zn(d)===u&&(b=new b(g,m+"enter",v,n,d),b.target=y,b.relatedTarget=w,S=b),w=S,x&&v)t:{for(b=x,g=v,m=0,y=b;y;y=Kn(y))m++;for(y=0,S=g;S;S=Kn(S))y++;for(;0<m-y;)b=Kn(b),m--;for(;0<y-m;)g=Kn(g),y--;for(;m--;){if(b===g||g!==null&&b===g.alternate)break t;b=Kn(b),g=Kn(g)}b=null}else b=null;x!==null&&Ad(p,f,x,b,!1),v!==null&&w!==null&&Ad(p,w,v,b,!0)}}e:{if(f=u?Zn(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var j=h1;else if(jd(f))if(ih)j=v1;else{j=x1;var k=g1}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=y1);if(j&&(j=j(e,u))){rh(p,j,n,d);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&el(f,"number",f.value)}switch(k=u?Zn(u):window,e){case"focusin":(jd(k)||k.contentEditable==="true")&&(Jn=k,pl=u,ui=null);break;case"focusout":ui=pl=Jn=null;break;case"mousedown":fl=!0;break;case"contextmenu":case"mouseup":case"dragend":fl=!1,Td(p,n,d);break;case"selectionchange":if(j1)break;case"keydown":case"keyup":Td(p,n,d)}var T;if(kc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else qn?th(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(eh&&n.locale!=="ko"&&(qn||C!=="onCompositionStart"?C==="onCompositionEnd"&&qn&&(T=Zm()):(Zt=d,wc="value"in Zt?Zt.value:Zt.textContent,qn=!0)),k=ns(u,C),0<k.length&&(C=new yd(C,e,null,n,d),p.push({event:C,listeners:k}),T?C.data=T:(T=nh(n),T!==null&&(C.data=T)))),(T=u1?d1(e,n):p1(e,n))&&(u=ns(u,"onBeforeInput"),0<u.length&&(d=new yd("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=T))}mh(p,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ns(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ki(e,n),s!=null&&r.unshift(zi(e,s,i)),s=ki(e,t),s!=null&&r.push(zi(e,s,i))),e=e.return}return r}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ad(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ki(n,s),c!=null&&a.unshift(zi(n,c,l))):i||(c=ki(n,s),c!=null&&a.push(zi(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(E1,`
`).replace(T1,"")}function yo(e,t,n){if(t=zd(t),zd(e)!==t&&n)throw Error(I(425))}function rs(){}var ml=null,hl=null;function gl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xl=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,P1=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(A1)}:xl;function A1(e){setTimeout(function(){throw e})}function ha(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ti(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ti(t)}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Pr,Ii="__reactProps$"+Pr,Ft="__reactContainer$"+Pr,yl="__reactEvents$"+Pr,z1="__reactListeners$"+Pr,I1="__reactHandles$"+Pr;function zn(e){var t=e[vt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Rd(e);e!==null;){if(n=e[vt])return n;e=Rd(e)}return t}e=n,n=e.parentNode}return null}function qi(e){return e=e[vt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Is(e){return e[Ii]||null}var vl=[],er=-1;function xn(e){return{current:e}}function ne(e){0>er||(e.current=vl[er],vl[er]=null,er--)}function Z(e,t){er++,vl[er]=e.current,e.current=t}var fn={},Ae=xn(fn),Be=xn(!1),On=fn;function yr(e,t){var n=e.type.contextTypes;if(!n)return fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function is(){ne(Be),ne(Ae)}function Dd(e,t,n){if(Ae.current!==fn)throw Error(I(168));Z(Ae,t),Z(Be,n)}function gh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,gy(e)||"Unknown",i));return ce({},n,r)}function os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||fn,On=Ae.current,Z(Ae,e),Z(Be,Be.current),!0}function Ld(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=gh(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,ne(Be),ne(Ae),Z(Ae,e)):ne(Be),Z(Be,n)}var At=null,Rs=!1,ga=!1;function xh(e){At===null?At=[e]:At.push(e)}function R1(e){Rs=!0,xh(e)}function yn(){if(!ga&&At!==null){ga=!0;var e=0,t=J;try{var n=At;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}At=null,Rs=!1}catch(i){throw At!==null&&(At=At.slice(e+1)),Wm(xc,yn),i}finally{J=t,ga=!1}}return null}var tr=[],nr=0,ss=null,as=0,tt=[],nt=0,Vn=null,zt=1,It="";function Tn(e,t){tr[nr++]=as,tr[nr++]=ss,ss=e,as=t}function yh(e,t,n){tt[nt++]=zt,tt[nt++]=It,tt[nt++]=Vn,Vn=e;var r=zt;e=It;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,zt=1<<32-ft(t)+i|n<<i|r,It=s+e}else zt=1<<s|n<<i|r,It=e}function Ec(e){e.return!==null&&(Tn(e,1),yh(e,1,0))}function Tc(e){for(;e===ss;)ss=tr[--nr],tr[nr]=null,as=tr[--nr],tr[nr]=null;for(;e===Vn;)Vn=tt[--nt],tt[nt]=null,It=tt[--nt],tt[nt]=null,zt=tt[--nt],tt[nt]=null}var Ke=null,$e=null,ie=!1,dt=null;function vh(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ke=e,$e=sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ke=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:zt,overflow:It}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ke=e,$e=null,!0):!1;default:return!1}}function bl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wl(e){if(ie){var t=$e;if(t){var n=t;if(!Md(e,t)){if(bl(e))throw Error(I(418));t=sn(n.nextSibling);var r=Ke;t&&Md(e,t)?vh(r,n):(e.flags=e.flags&-4097|2,ie=!1,Ke=e)}}else{if(bl(e))throw Error(I(418));e.flags=e.flags&-4097|2,ie=!1,Ke=e}}}function Fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ke=e}function vo(e){if(e!==Ke)return!1;if(!ie)return Fd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gl(e.type,e.memoizedProps)),t&&(t=$e)){if(bl(e))throw bh(),Error(I(418));for(;t;)vh(e,t),t=sn(t.nextSibling)}if(Fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Ke?sn(e.stateNode.nextSibling):null;return!0}function bh(){for(var e=$e;e;)e=sn(e.nextSibling)}function vr(){$e=Ke=null,ie=!1}function Nc(e){dt===null?dt=[e]:dt.push(e)}var D1=Bt.ReactCurrentBatchConfig;function Hr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function bo(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Od(e){var t=e._init;return t(e._payload)}function wh(e){function t(g,m){if(e){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=un(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,y,S){return m===null||m.tag!==6?(m=Sa(y,g.mode,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function c(g,m,y,S){var j=y.type;return j===Xn?d(g,m,y.props.children,S,y.key):m!==null&&(m.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xt&&Od(j)===m.type)?(S=i(m,y.props),S.ref=Hr(g,m,y),S.return=g,S):(S=_o(y.type,y.key,y.props,null,g.mode,S),S.ref=Hr(g,m,y),S.return=g,S)}function u(g,m,y,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=ka(y,g.mode,S),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function d(g,m,y,S,j){return m===null||m.tag!==7?(m=Mn(y,g.mode,S,j),m.return=g,m):(m=i(m,y),m.return=g,m)}function p(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Sa(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lo:return y=_o(m.type,m.key,m.props,null,g.mode,y),y.ref=Hr(g,null,m),y.return=g,y;case Gn:return m=ka(m,g.mode,y),m.return=g,m;case Xt:var S=m._init;return p(g,S(m._payload),y)}if(Qr(m)||Or(m))return m=Mn(m,g.mode,y,null),m.return=g,m;bo(g,m)}return null}function f(g,m,y,S){var j=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return j!==null?null:l(g,m,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:return y.key===j?c(g,m,y,S):null;case Gn:return y.key===j?u(g,m,y,S):null;case Xt:return j=y._init,f(g,m,j(y._payload),S)}if(Qr(y)||Or(y))return j!==null?null:d(g,m,y,S,null);bo(g,y)}return null}function x(g,m,y,S,j){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(y)||null,l(m,g,""+S,j);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case lo:return g=g.get(S.key===null?y:S.key)||null,c(m,g,S,j);case Gn:return g=g.get(S.key===null?y:S.key)||null,u(m,g,S,j);case Xt:var k=S._init;return x(g,m,y,k(S._payload),j)}if(Qr(S)||Or(S))return g=g.get(y)||null,d(m,g,S,j,null);bo(m,S)}return null}function v(g,m,y,S){for(var j=null,k=null,T=m,C=m=0,V=null;T!==null&&C<y.length;C++){T.index>C?(V=T,T=null):V=T.sibling;var D=f(g,T,y[C],S);if(D===null){T===null&&(T=V);break}e&&T&&D.alternate===null&&t(g,T),m=s(D,m,C),k===null?j=D:k.sibling=D,k=D,T=V}if(C===y.length)return n(g,T),ie&&Tn(g,C),j;if(T===null){for(;C<y.length;C++)T=p(g,y[C],S),T!==null&&(m=s(T,m,C),k===null?j=T:k.sibling=T,k=T);return ie&&Tn(g,C),j}for(T=r(g,T);C<y.length;C++)V=x(T,g,C,y[C],S),V!==null&&(e&&V.alternate!==null&&T.delete(V.key===null?C:V.key),m=s(V,m,C),k===null?j=V:k.sibling=V,k=V);return e&&T.forEach(function(O){return t(g,O)}),ie&&Tn(g,C),j}function b(g,m,y,S){var j=Or(y);if(typeof j!="function")throw Error(I(150));if(y=j.call(y),y==null)throw Error(I(151));for(var k=j=null,T=m,C=m=0,V=null,D=y.next();T!==null&&!D.done;C++,D=y.next()){T.index>C?(V=T,T=null):V=T.sibling;var O=f(g,T,D.value,S);if(O===null){T===null&&(T=V);break}e&&T&&O.alternate===null&&t(g,T),m=s(O,m,C),k===null?j=O:k.sibling=O,k=O,T=V}if(D.done)return n(g,T),ie&&Tn(g,C),j;if(T===null){for(;!D.done;C++,D=y.next())D=p(g,D.value,S),D!==null&&(m=s(D,m,C),k===null?j=D:k.sibling=D,k=D);return ie&&Tn(g,C),j}for(T=r(g,T);!D.done;C++,D=y.next())D=x(T,g,C,D.value,S),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?C:D.key),m=s(D,m,C),k===null?j=D:k.sibling=D,k=D);return e&&T.forEach(function(B){return t(g,B)}),ie&&Tn(g,C),j}function w(g,m,y,S){if(typeof y=="object"&&y!==null&&y.type===Xn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case lo:e:{for(var j=y.key,k=m;k!==null;){if(k.key===j){if(j=y.type,j===Xn){if(k.tag===7){n(g,k.sibling),m=i(k,y.props.children),m.return=g,g=m;break e}}else if(k.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Xt&&Od(j)===k.type){n(g,k.sibling),m=i(k,y.props),m.ref=Hr(g,k,y),m.return=g,g=m;break e}n(g,k);break}else t(g,k);k=k.sibling}y.type===Xn?(m=Mn(y.props.children,g.mode,S,y.key),m.return=g,g=m):(S=_o(y.type,y.key,y.props,null,g.mode,S),S.ref=Hr(g,m,y),S.return=g,g=S)}return a(g);case Gn:e:{for(k=y.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=ka(y,g.mode,S),m.return=g,g=m}return a(g);case Xt:return k=y._init,w(g,m,k(y._payload),S)}if(Qr(y))return v(g,m,y,S);if(Or(y))return b(g,m,y,S);bo(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=Sa(y,g.mode,S),m.return=g,g=m),a(g)):n(g,m)}return w}var br=wh(!0),jh=wh(!1),ls=xn(null),cs=null,rr=null,Pc=null;function Ac(){Pc=rr=cs=null}function zc(e){var t=ls.current;ne(ls),e._currentValue=t}function jl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hr(e,t){cs=e,Pc=rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(Pc!==e)if(e={context:e,memoizedValue:t,next:null},rr===null){if(cs===null)throw Error(I(308));rr=e,cs.dependencies={lanes:0,firstContext:e}}else rr=rr.next=e;return t}var In=null;function Ic(e){In===null?In=[e]:In.push(e)}function Sh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ic(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ot(e,r)}function Ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qt=!1;function Rc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function an(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ot(e,n)}return i=r.interleaved,i===null?(t.next=t,Ic(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ot(e,n)}function Lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function us(e,t,n,r){var i=e.updateQueue;qt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,x=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,b=l;switch(f=t,x=n,b.tag){case 1:if(v=b.payload,typeof v=="function"){p=v.call(x,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=b.payload,f=typeof v=="function"?v.call(x,p,f):v,f==null)break e;p=ce({},p,f);break e;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,c=p):d=d.next=x,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);_n|=a,e.lanes=a,e.memoizedState=p}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Ji={},kt=xn(Ji),Ri=xn(Ji),Di=xn(Ji);function Rn(e){if(e===Ji)throw Error(I(174));return e}function Dc(e,t){switch(Z(Di,t),Z(Ri,e),Z(kt,Ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nl(t,e)}ne(kt),Z(kt,t)}function wr(){ne(kt),ne(Ri),ne(Di)}function Ch(e){Rn(Di.current);var t=Rn(kt.current),n=nl(t,e.type);t!==n&&(Z(Ri,e),Z(kt,n))}function Lc(e){Ri.current===e&&(ne(kt),ne(Ri))}var oe=xn(0);function ds(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xa=[];function Mc(){for(var e=0;e<xa.length;e++)xa[e]._workInProgressVersionPrimary=null;xa.length=0}var Mo=Bt.ReactCurrentDispatcher,ya=Bt.ReactCurrentBatchConfig,Bn=0,le=null,ye=null,be=null,ps=!1,di=!1,Li=0,L1=0;function Ee(){throw Error(I(321))}function Fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Oc(e,t,n,r,i,s){if(Bn=s,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mo.current=e===null||e.memoizedState===null?V1:B1,e=n(r,i),di){s=0;do{if(di=!1,Li=0,25<=s)throw Error(I(301));s+=1,be=ye=null,t.updateQueue=null,Mo.current=_1,e=n(r,i)}while(di)}if(Mo.current=fs,t=ye!==null&&ye.next!==null,Bn=0,be=ye=le=null,ps=!1,t)throw Error(I(300));return e}function Vc(){var e=Li!==0;return Li=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?le.memoizedState=be=e:be=be.next=e,be}function st(){if(ye===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ye.next;var t=be===null?le.memoizedState:be.next;if(t!==null)be=t,ye=e;else{if(e===null)throw Error(I(310));ye=e,e={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},be===null?le.memoizedState=be=e:be=be.next=e}return be}function Mi(e,t){return typeof t=="function"?t(e):t}function va(e){var t=st(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Bn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,le.lanes|=d,_n|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,ht(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,le.lanes|=s,_n|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ba(e){var t=st(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);ht(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Eh(){}function Th(e,t){var n=le,r=st(),i=t(),s=!ht(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,Bc(Ah.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Fi(9,Ph.bind(null,n,r,i,t),void 0,null),je===null)throw Error(I(349));Bn&30||Nh(n,t,i)}return i}function Nh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ph(e,t,n,r){t.value=n,t.getSnapshot=r,zh(t)&&Ih(e)}function Ah(e,t,n){return n(function(){zh(t)&&Ih(e)})}function zh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Ih(e){var t=Ot(e,1);t!==null&&mt(t,e,1,-1)}function _d(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},t.queue=e,e=e.dispatch=O1.bind(null,le,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rh(){return st().memoizedState}function Fo(e,t,n,r){var i=yt();le.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function Ds(e,t,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(ye!==null){var a=ye.memoizedState;if(s=a.destroy,r!==null&&Fc(r,a.deps)){i.memoizedState=Fi(t,n,s,r);return}}le.flags|=e,i.memoizedState=Fi(1|t,n,s,r)}function Wd(e,t){return Fo(8390656,8,e,t)}function Bc(e,t){return Ds(2048,8,e,t)}function Dh(e,t){return Ds(4,2,e,t)}function Lh(e,t){return Ds(4,4,e,t)}function Mh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fh(e,t,n){return n=n!=null?n.concat([e]):null,Ds(4,4,Mh.bind(null,t,e),n)}function _c(){}function Oh(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vh(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bh(e,t,n){return Bn&21?(ht(n,t)||(n=$m(),le.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function M1(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ya.transition;ya.transition={};try{e(!1),t()}finally{J=n,ya.transition=r}}function _h(){return st().memoizedState}function F1(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wh(e))Hh(t,n);else if(n=Sh(e,t,n,r),n!==null){var i=De();mt(n,e,r,i),Uh(n,t,r)}}function O1(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wh(e))Hh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,ht(l,a)){var c=t.interleaved;c===null?(i.next=i,Ic(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Sh(e,t,i,r),n!==null&&(i=De(),mt(n,e,r,i),Uh(n,t,r))}}function Wh(e){var t=e.alternate;return e===le||t!==null&&t===le}function Hh(e,t){di=ps=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,yc(e,n)}}var fs={readContext:ot,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},V1={readContext:ot,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Wd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fo(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=F1.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:_d,useDebugValue:_c,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=_d(!1),t=e[0];return e=M1.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=yt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),je===null)throw Error(I(349));Bn&30||Nh(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Wd(Ah.bind(null,r,s,e),[e]),r.flags|=2048,Fi(9,Ph.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=yt(),t=je.identifierPrefix;if(ie){var n=It,r=zt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=L1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B1={readContext:ot,useCallback:Oh,useContext:ot,useEffect:Bc,useImperativeHandle:Fh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Vh,useReducer:va,useRef:Rh,useState:function(){return va(Mi)},useDebugValue:_c,useDeferredValue:function(e){var t=st();return Bh(t,ye.memoizedState,e)},useTransition:function(){var e=va(Mi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Th,useId:_h,unstable_isNewReconciler:!1},_1={readContext:ot,useCallback:Oh,useContext:ot,useEffect:Bc,useImperativeHandle:Fh,useInsertionEffect:Dh,useLayoutEffect:Lh,useMemo:Vh,useReducer:ba,useRef:Rh,useState:function(){return ba(Mi)},useDebugValue:_c,useDeferredValue:function(e){var t=st();return ye===null?t.memoizedState=e:Bh(t,ye.memoizedState,e)},useTransition:function(){var e=ba(Mi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eh,useSyncExternalStore:Th,useId:_h,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Sl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ls={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=De(),i=cn(e),s=Rt(r,i);s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(mt(t,e,i,r),Lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=De(),i=cn(e),s=Rt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=an(e,s,i),t!==null&&(mt(t,e,i,r),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=De(),r=cn(e),i=Rt(n,r);i.tag=2,t!=null&&(i.callback=t),t=an(e,i,r),t!==null&&(mt(t,e,r,n),Lo(t,e,r))}};function Hd(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!Pi(n,r)||!Pi(i,s):!0}function $h(e,t,n){var r=!1,i=fn,s=t.contextType;return typeof s=="object"&&s!==null?s=ot(s):(i=_e(t)?On:Ae.current,r=t.contextTypes,s=(r=r!=null)?yr(e,i):fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ls,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ls.enqueueReplaceState(t,t.state,null)}function kl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Rc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=ot(s):(s=_e(t)?On:Ae.current,i.context=yr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Sl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ls.enqueueReplaceState(i,i.state,null),us(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var n="",r=t;do n+=hy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W1=typeof WeakMap=="function"?WeakMap:Map;function Yh(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){hs||(hs=!0,Ll=r),Cl(e,t)},n}function Kh(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Cl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Cl(e,t),typeof r!="function"&&(ln===null?ln=new Set([this]):ln.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function $d(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=nv.bind(null,e,t,n),t.then(e,e))}function Yd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,an(n,t,1))),n.lanes|=1),e)}var H1=Bt.ReactCurrentOwner,Ve=!1;function ze(e,t,n,r){t.child=e===null?jh(t,null,n,r):br(t,e.child,n,r)}function Gd(e,t,n,r,i){n=n.render;var s=t.ref;return hr(t,i),r=Oc(e,t,n,r,s,i),n=Vc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(ie&&n&&Ec(t),t.flags|=1,ze(e,t,r,i),t.child)}function Xd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Xc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Gh(e,t,s,r,i)):(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pi,n(a,r)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=un(s,r),e.ref=t.ref,e.return=t,t.child=e}function Gh(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Pi(s,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return El(e,t,n,r,i)}function Xh(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(or,Ue),Ue|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(or,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(or,Ue),Ue|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Z(or,Ue),Ue|=r;return ze(e,t,i,n),t.child}function qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,i){var s=_e(n)?On:Ae.current;return s=yr(t,s),hr(t,i),n=Oc(e,t,n,r,s,i),r=Vc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vt(e,t,i)):(ie&&r&&Ec(t),t.flags|=1,ze(e,t,n,i),t.child)}function qd(e,t,n,r,i){if(_e(n)){var s=!0;os(t)}else s=!1;if(hr(t,i),t.stateNode===null)Oo(e,t),$h(t,n,r),kl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=ot(u):(u=_e(n)?On:Ae.current,u=yr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Ud(t,a,r,u),qt=!1;var f=t.memoizedState;a.state=f,us(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Be.current||qt?(typeof d=="function"&&(Sl(t,n,d,r),c=t.memoizedState),(l=qt||Hd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,kh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:ct(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=ot(c):(c=_e(n)?On:Ae.current,c=yr(t,c));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Ud(t,a,r,c),qt=!1,f=t.memoizedState,a.state=f,us(t,r,a,i);var v=t.memoizedState;l!==p||f!==v||Be.current||qt?(typeof x=="function"&&(Sl(t,n,x,r),v=t.memoizedState),(u=qt||Hd(t,n,u,r,f,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Tl(e,t,n,r,s,i)}function Tl(e,t,n,r,i,s){qh(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Ld(t,n,!1),Vt(e,t,s);r=t.stateNode,H1.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=br(t,e.child,null,s),t.child=br(t,null,l,s)):ze(e,t,l,s),t.memoizedState=r.state,i&&Ld(t,n,!0),t.child}function Jh(e){var t=e.stateNode;t.pendingContext?Dd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dd(e,t.context,!1),Dc(e,t.containerInfo)}function Jd(e,t,n,r,i){return vr(),Nc(i),t.flags|=256,ze(e,t,n,r),t.child}var Nl={dehydrated:null,treeContext:null,retryLane:0};function Pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qh(e,t,n){var r=t.pendingProps,i=oe.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Z(oe,i&1),e===null)return wl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Os(a,r,0,null),e=Mn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Pl(n),t.memoizedState=Nl,e):Wc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return U1(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=un(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=un(l,s):(s=Mn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?Pl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=Nl,r}return s=e.child,e=s.sibling,r=un(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Wc(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wo(e,t,n,r){return r!==null&&Nc(r),br(t,e.child,null,n),e=Wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function U1(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=wa(Error(I(422))),wo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Os({mode:"visible",children:r.children},i,0,null),s=Mn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&br(t,e.child,null,a),t.child.memoizedState=Pl(a),t.memoizedState=Nl,s);if(!(t.mode&1))return wo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=wa(s,r,void 0),wo(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ve||l){if(r=je,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ot(e,i),mt(r,e,i,-1))}return Gc(),r=wa(Error(I(421))),wo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=rv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,$e=sn(i.nextSibling),Ke=t,ie=!0,dt=null,e!==null&&(tt[nt++]=zt,tt[nt++]=It,tt[nt++]=Vn,zt=e.id,It=e.overflow,Vn=t),t=Wc(t,r.children),t.flags|=4096,t)}function Qd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),jl(e.return,t,n)}function ja(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zh(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ze(e,t,r.children,n),r=oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qd(e,n,t);else if(e.tag===19)Qd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ds(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ds(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,s);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $1(e,t,n){switch(t.tag){case 3:Jh(t),vr();break;case 5:Ch(t);break;case 1:_e(t.type)&&os(t);break;case 4:Dc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Z(ls,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):n&t.child.childLanes?Qh(e,t,n):(Z(oe,oe.current&1),e=Vt(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Zh(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Xh(e,t,n)}return Vt(e,t,n)}var e0,Al,t0,n0;e0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Al=function(){};t0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Rn(kt.current);var s=null;switch(n){case"input":i=Qa(e,i),r=Qa(e,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=tl(e,i),r=tl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rs)}rl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ji.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ji.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&te("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};n0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y1(e,t,n){var r=t.pendingProps;switch(Tc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return _e(t.type)&&is(),Te(t),null;case 3:return r=t.stateNode,wr(),ne(Be),ne(Ae),Mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,dt!==null&&(Ol(dt),dt=null))),Al(e,t),Te(t),null;case 5:Lc(t);var i=Rn(Di.current);if(n=t.type,e!==null&&t.stateNode!=null)t0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Te(t),null}if(e=Rn(kt.current),vo(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[vt]=t,r[Ii]=s,e=(t.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<ei.length;i++)te(ei[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":ad(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":cd(r,s),te("invalid",r)}rl(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yo(r.textContent,l,e),i=["children",""+l]):ji.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&te("scroll",r)}switch(n){case"input":co(r),ld(r,s,!0);break;case"textarea":co(r),ud(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Am(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[vt]=t,e[Ii]=r,e0(e,t,!1,!1),t.stateNode=e;e:{switch(a=il(n,r),n){case"dialog":te("cancel",e),te("close",e),i=r;break;case"iframe":case"object":case"embed":te("load",e),i=r;break;case"video":case"audio":for(i=0;i<ei.length;i++)te(ei[i],e);i=r;break;case"source":te("error",e),i=r;break;case"img":case"image":case"link":te("error",e),te("load",e),i=r;break;case"details":te("toggle",e),i=r;break;case"input":ad(e,r),i=Qa(e,r),te("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),te("invalid",e);break;case"textarea":cd(e,r),i=tl(e,r),te("invalid",e);break;default:i=r}rl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?Rm(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&zm(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Si(e,c):typeof c=="number"&&Si(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ji.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",e):c!=null&&pc(e,s,c,a))}switch(n){case"input":co(e),ld(e,r,!1);break;case"textarea":co(e),ud(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?dr(e,!!r.multiple,s,!1):r.defaultValue!=null&&dr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Te(t),null;case 6:if(e&&t.stateNode!=null)n0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=Rn(Di.current),Rn(kt.current),vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[vt]=t,(s=r.nodeValue!==n)&&(e=Ke,e!==null))switch(e.tag){case 3:yo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vt]=t,t.stateNode=r}return Te(t),null;case 13:if(ne(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&$e!==null&&t.mode&1&&!(t.flags&128))bh(),vr(),t.flags|=98560,s=!1;else if(s=vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(I(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[vt]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Te(t),s=!1}else dt!==null&&(Ol(dt),dt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?ve===0&&(ve=3):Gc())),t.updateQueue!==null&&(t.flags|=4),Te(t),null);case 4:return wr(),Al(e,t),e===null&&Ai(t.stateNode.containerInfo),Te(t),null;case 10:return zc(t.type._context),Te(t),null;case 17:return _e(t.type)&&is(),Te(t),null;case 19:if(ne(oe),s=t.memoizedState,s===null)return Te(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Ur(s,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=ds(e),a!==null){for(t.flags|=128,Ur(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}s.tail!==null&&fe()>Sr&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304)}else{if(!r)if(e=ds(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ie)return Te(t),null}else 2*fe()-s.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=fe(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(Te(t),null);case 22:case 23:return Kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ue&1073741824&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function K1(e,t){switch(Tc(t),t.tag){case 1:return _e(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return wr(),ne(Be),ne(Ae),Mc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lc(t),null;case 13:if(ne(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ne(oe),null;case 4:return wr(),null;case 10:return zc(t.type._context),null;case 22:case 23:return Kc(),null;case 24:return null;default:return null}}var jo=!1,Pe=!1,G1=typeof WeakSet=="function"?WeakSet:Set,L=null;function ir(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function zl(e,t,n){try{n()}catch(r){de(e,t,r)}}var Zd=!1;function X1(e,t){if(ml=es,e=ah(),Cc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hl={focusedElem:e,selectionRange:n},es=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var b=v.memoizedProps,w=v.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?b:ct(t.type,b),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){de(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=Zd,Zd=!1,v}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&zl(t,n,s)}i=i.next}while(i!==r)}}function Ms(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function r0(e){var t=e.alternate;t!==null&&(e.alternate=null,r0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Ii],delete t[yl],delete t[z1],delete t[I1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function i0(e){return e.tag===5||e.tag===3||e.tag===4}function ep(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||i0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rs));else if(r!==4&&(e=e.child,e!==null))for(Rl(e,t,n),e=e.sibling;e!==null;)Rl(e,t,n),e=e.sibling}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}var Se=null,ut=!1;function $t(e,t,n){for(n=n.child;n!==null;)o0(e,t,n),n=n.sibling}function o0(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Ns,n)}catch{}switch(n.tag){case 5:Pe||ir(n,t);case 6:var r=Se,i=ut;Se=null,$t(e,t,n),Se=r,ut=i,Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ut?(e=Se,n=n.stateNode,e.nodeType===8?ha(e.parentNode,n):e.nodeType===1&&ha(e,n),Ti(e)):ha(Se,n.stateNode));break;case 4:r=Se,i=ut,Se=n.stateNode.containerInfo,ut=!0,$t(e,t,n),Se=r,ut=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&zl(n,t,a),i=i.next}while(i!==r)}$t(e,t,n);break;case 1:if(!Pe&&(ir(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,t,l)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,$t(e,t,n),Pe=r):$t(e,t,n);break;default:$t(e,t,n)}}function tp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new G1),t.forEach(function(r){var i=iv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,ut=!1;break e;case 3:Se=l.stateNode.containerInfo,ut=!0;break e;case 4:Se=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(Se===null)throw Error(I(160));o0(s,a,i),Se=null,ut=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)s0(t,e),t=t.sibling}function s0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),xt(e),r&4){try{pi(3,e,e.return),Ms(3,e)}catch(b){de(e,e.return,b)}try{pi(5,e,e.return)}catch(b){de(e,e.return,b)}}break;case 1:at(t,e),xt(e),r&512&&n!==null&&ir(n,n.return);break;case 5:if(at(t,e),xt(e),r&512&&n!==null&&ir(n,n.return),e.flags&32){var i=e.stateNode;try{Si(i,"")}catch(b){de(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Nm(i,s),il(l,a);var u=il(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?Rm(i,p):d==="dangerouslySetInnerHTML"?zm(i,p):d==="children"?Si(i,p):pc(i,d,p,u)}switch(l){case"input":Za(i,s);break;case"textarea":Pm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?dr(i,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?dr(i,!!s.multiple,s.defaultValue,!0):dr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ii]=s}catch(b){de(e,e.return,b)}}break;case 6:if(at(t,e),xt(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){de(e,e.return,b)}}break;case 3:if(at(t,e),xt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(b){de(e,e.return,b)}break;case 4:at(t,e),xt(e);break;case 13:at(t,e),xt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($c=fe())),r&4&&tp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||d,at(t,e),Pe=u):at(t,e),xt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(L=e,d=e.child;d!==null;){for(p=L=d;L!==null;){switch(f=L,x=f.child,f.tag){case 0:case 11:case 14:case 15:pi(4,f,f.return);break;case 1:ir(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(b){de(r,n,b)}}break;case 5:ir(f,f.return);break;case 22:if(f.memoizedState!==null){rp(p);continue}}x!==null?(x.return=f,L=x):rp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Im("display",a))}catch(b){de(e,e.return,b)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){de(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:at(t,e),xt(e),r&4&&tp(e);break;case 21:break;default:at(t,e),xt(e)}}function xt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(i0(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Si(i,""),r.flags&=-33);var s=ep(e);Dl(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ep(e);Rl(e,l,a);break;default:throw Error(I(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q1(e,t,n){L=e,a0(e)}function a0(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||jo;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Pe;l=jo;var u=Pe;if(jo=a,(Pe=c)&&!u)for(L=i;L!==null;)a=L,c=a.child,a.tag===22&&a.memoizedState!==null?ip(i):c!==null?(c.return=a,L=c):ip(i);for(;s!==null;)L=s,a0(s),s=s.sibling;L=i,jo=l,Pe=u}np(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):np(e)}}function np(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Pe||Ms(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Bd(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ti(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Pe||t.flags&512&&Il(t)}catch(f){de(t,t.return,f)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function rp(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function ip(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ms(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){de(t,i,c)}}var s=t.return;try{Il(t)}catch(c){de(t,s,c)}break;case 5:var a=t.return;try{Il(t)}catch(c){de(t,a,c)}}}catch(c){de(t,t.return,c)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var J1=Math.ceil,ms=Bt.ReactCurrentDispatcher,Hc=Bt.ReactCurrentOwner,it=Bt.ReactCurrentBatchConfig,X=0,je=null,ge=null,ke=0,Ue=0,or=xn(0),ve=0,Oi=null,_n=0,Fs=0,Uc=0,fi=null,Oe=null,$c=0,Sr=1/0,Pt=null,hs=!1,Ll=null,ln=null,So=!1,en=null,gs=0,mi=0,Ml=null,Vo=-1,Bo=0;function De(){return X&6?fe():Vo!==-1?Vo:Vo=fe()}function cn(e){return e.mode&1?X&2&&ke!==0?ke&-ke:D1.transition!==null?(Bo===0&&(Bo=$m()),Bo):(e=J,e!==0||(e=window.event,e=e===void 0?16:Qm(e.type)),e):1}function mt(e,t,n,r){if(50<mi)throw mi=0,Ml=null,Error(I(185));Gi(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(Fs|=n),ve===4&&Qt(e,ke)),We(e,r),n===1&&X===0&&!(t.mode&1)&&(Sr=fe()+500,Rs&&yn()))}function We(e,t){var n=e.callbackNode;Dy(e,t);var r=Zo(e,e===je?ke:0);if(r===0)n!==null&&fd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&fd(n),t===1)e.tag===0?R1(op.bind(null,e)):xh(op.bind(null,e)),P1(function(){!(X&6)&&yn()}),n=null;else{switch(Ym(r)){case 1:n=xc;break;case 4:n=Hm;break;case 16:n=Qo;break;case 536870912:n=Um;break;default:n=Qo}n=h0(n,l0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function l0(e,t){if(Vo=-1,Bo=0,X&6)throw Error(I(327));var n=e.callbackNode;if(gr()&&e.callbackNode!==n)return null;var r=Zo(e,e===je?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xs(e,r);else{t=r;var i=X;X|=2;var s=u0();(je!==e||ke!==t)&&(Pt=null,Sr=fe()+500,Ln(e,t));do try{ev();break}catch(l){c0(e,l)}while(!0);Ac(),ms.current=s,X=i,ge!==null?t=0:(je=null,ke=0,t=ve)}if(t!==0){if(t===2&&(i=cl(e),i!==0&&(r=i,t=Fl(e,i))),t===1)throw n=Oi,Ln(e,0),Qt(e,r),We(e,fe()),n;if(t===6)Qt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Q1(i)&&(t=xs(e,r),t===2&&(s=cl(e),s!==0&&(r=s,t=Fl(e,s))),t===1))throw n=Oi,Ln(e,0),Qt(e,r),We(e,fe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Nn(e,Oe,Pt);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=$c+500-fe(),10<t)){if(Zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){De(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xl(Nn.bind(null,e,Oe,Pt),t);break}Nn(e,Oe,Pt);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-ft(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J1(r/1960))-r,10<r){e.timeoutHandle=xl(Nn.bind(null,e,Oe,Pt),r);break}Nn(e,Oe,Pt);break;case 5:Nn(e,Oe,Pt);break;default:throw Error(I(329))}}}return We(e,fe()),e.callbackNode===n?l0.bind(null,e):null}function Fl(e,t){var n=fi;return e.current.memoizedState.isDehydrated&&(Ln(e,t).flags|=256),e=xs(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ol(t)),e}function Ol(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Q1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ht(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~Uc,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function op(e){if(X&6)throw Error(I(327));gr();var t=Zo(e,0);if(!(t&1))return We(e,fe()),null;var n=xs(e,t);if(e.tag!==0&&n===2){var r=cl(e);r!==0&&(t=r,n=Fl(e,r))}if(n===1)throw n=Oi,Ln(e,0),Qt(e,t),We(e,fe()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,Oe,Pt),We(e,fe()),null}function Yc(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Sr=fe()+500,Rs&&yn())}}function Wn(e){en!==null&&en.tag===0&&!(X&6)&&gr();var t=X;X|=1;var n=it.transition,r=J;try{if(it.transition=null,J=1,e)return e()}finally{J=r,it.transition=n,X=t,!(X&6)&&yn()}}function Kc(){Ue=or.current,ne(or)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,N1(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&is();break;case 3:wr(),ne(Be),ne(Ae),Mc();break;case 5:Lc(r);break;case 4:wr();break;case 13:ne(oe);break;case 19:ne(oe);break;case 10:zc(r.type._context);break;case 22:case 23:Kc()}n=n.return}if(je=e,ge=e=un(e.current,null),ke=Ue=t,ve=0,Oi=null,Uc=Fs=_n=0,Oe=fi=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}In=null}return e}function c0(e,t){do{var n=ge;try{if(Ac(),Mo.current=fs,ps){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ps=!1}if(Bn=0,be=ye=le=null,di=!1,Li=0,Hc.current=null,n===null||n.return===null){ve=1,Oi=t,ge=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=ke,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Yd(a);if(x!==null){x.flags&=-257,Kd(x,a,l,s,t),x.mode&1&&$d(s,u,t),t=x,c=u;var v=t.updateQueue;if(v===null){var b=new Set;b.add(c),t.updateQueue=b}else v.add(c);break e}else{if(!(t&1)){$d(s,u,t),Gc();break e}c=Error(I(426))}}else if(ie&&l.mode&1){var w=Yd(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Kd(w,a,l,s,t),Nc(jr(c,l));break e}}s=c=jr(c,l),ve!==4&&(ve=2),fi===null?fi=[s]:fi.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=Yh(s,c,t);Vd(s,g);break e;case 1:l=c;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ln===null||!ln.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Kh(s,l,t);Vd(s,S);break e}}s=s.return}while(s!==null)}p0(n)}catch(j){t=j,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function u0(){var e=ms.current;return ms.current=fs,e===null?fs:e}function Gc(){(ve===0||ve===3||ve===2)&&(ve=4),je===null||!(_n&268435455)&&!(Fs&268435455)||Qt(je,ke)}function xs(e,t){var n=X;X|=2;var r=u0();(je!==e||ke!==t)&&(Pt=null,Ln(e,t));do try{Z1();break}catch(i){c0(e,i)}while(!0);if(Ac(),X=n,ms.current=r,ge!==null)throw Error(I(261));return je=null,ke=0,ve}function Z1(){for(;ge!==null;)d0(ge)}function ev(){for(;ge!==null&&!Cy();)d0(ge)}function d0(e){var t=m0(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?p0(e):ge=t,Hc.current=null}function p0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=K1(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,ge=null;return}}else if(n=Y1(n,t,Ue),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ve===0&&(ve=5)}function Nn(e,t,n){var r=J,i=it.transition;try{it.transition=null,J=1,tv(e,t,n,r)}finally{it.transition=i,J=r}return null}function tv(e,t,n,r){do gr();while(en!==null);if(X&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ly(e,s),e===je&&(ge=je=null,ke=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,h0(Qo,function(){return gr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=it.transition,it.transition=null;var a=J;J=1;var l=X;X|=4,Hc.current=null,X1(e,n),s0(n,e),w1(hl),es=!!ml,hl=ml=null,e.current=n,q1(n),Ey(),X=l,J=a,it.transition=s}else e.current=n;if(So&&(So=!1,en=e,gs=i),s=e.pendingLanes,s===0&&(ln=null),Py(n.stateNode),We(e,fe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hs)throw hs=!1,e=Ll,Ll=null,e;return gs&1&&e.tag!==0&&gr(),s=e.pendingLanes,s&1?e===Ml?mi++:(mi=0,Ml=e):mi=0,yn(),null}function gr(){if(en!==null){var e=Ym(gs),t=it.transition,n=J;try{if(it.transition=null,J=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,gs=0,X&6)throw Error(I(331));var i=X;for(X|=4,L=e.current;L!==null;){var s=L,a=s.child;if(L.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(L=u;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:pi(8,d,s)}var p=d.child;if(p!==null)p.return=d,L=p;else for(;L!==null;){d=L;var f=d.sibling,x=d.return;if(r0(d),d===u){L=null;break}if(f!==null){f.return=x,L=f;break}L=x}}}var v=s.alternate;if(v!==null){var b=v.child;if(b!==null){v.child=null;do{var w=b.sibling;b.sibling=null,b=w}while(b!==null)}}L=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,L=a;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var m=e.current;for(L=m;L!==null;){a=L;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,L=y;else e:for(a=m;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ms(9,l)}}catch(j){de(l,l.return,j)}if(l===a){L=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,L=S;break e}L=l.return}}if(X=i,yn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Ns,e)}catch{}r=!0}return r}finally{J=n,it.transition=t}}return!1}function sp(e,t,n){t=jr(n,t),t=Yh(e,t,1),e=an(e,t,1),t=De(),e!==null&&(Gi(e,1,t),We(e,t))}function de(e,t,n){if(e.tag===3)sp(e,e,n);else for(;t!==null;){if(t.tag===3){sp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ln===null||!ln.has(r))){e=jr(n,e),e=Kh(t,e,1),t=an(t,e,1),e=De(),t!==null&&(Gi(t,1,e),We(t,e));break}}t=t.return}}function nv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=De(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(ke&n)===n&&(ve===4||ve===3&&(ke&130023424)===ke&&500>fe()-$c?Ln(e,0):Uc|=n),We(e,t)}function f0(e,t){t===0&&(e.mode&1?(t=fo,fo<<=1,!(fo&130023424)&&(fo=4194304)):t=1);var n=De();e=Ot(e,t),e!==null&&(Gi(e,t,n),We(e,n))}function rv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),f0(e,n)}function iv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),f0(e,n)}var m0;m0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,$1(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&yh(t,as,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Oo(e,t),e=t.pendingProps;var i=yr(t,Ae.current);hr(t,n),i=Oc(null,t,r,e,i,n);var s=Vc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(s=!0,os(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Rc(t),i.updater=Ls,t.stateNode=i,i._reactInternals=t,kl(t,r,e,n),t=Tl(null,t,r,!0,s,n)):(t.tag=0,ie&&s&&Ec(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Oo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=sv(r),e=ct(r,e),i){case 0:t=El(null,t,r,e,n);break e;case 1:t=qd(null,t,r,e,n);break e;case 11:t=Gd(null,t,r,e,n);break e;case 14:t=Xd(null,t,r,ct(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),El(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),qd(e,t,r,i,n);case 3:e:{if(Jh(t),e===null)throw Error(I(387));r=t.pendingProps,s=t.memoizedState,i=s.element,kh(e,t),us(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=jr(Error(I(423)),t),t=Jd(e,t,r,n,i);break e}else if(r!==i){i=jr(Error(I(424)),t),t=Jd(e,t,r,n,i);break e}else for($e=sn(t.stateNode.containerInfo.firstChild),Ke=t,ie=!0,dt=null,n=jh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=Vt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Ch(t),e===null&&wl(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,gl(r,i)?a=null:s!==null&&gl(r,s)&&(t.flags|=32),qh(e,t),ze(e,t,a,n),t.child;case 6:return e===null&&wl(t),null;case 13:return Qh(e,t,n);case 4:return Dc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Gd(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,Z(ls,r._currentValue),r._currentValue=a,s!==null)if(ht(s.value,a)){if(s.children===i.children&&!Be.current){t=Vt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=Rt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),jl(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(I(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),jl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,hr(t,n),i=ot(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=ct(r,t.pendingProps),i=ct(r.type,i),Xd(e,t,r,i,n);case 15:return Gh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ct(r,i),Oo(e,t),t.tag=1,_e(r)?(e=!0,os(t)):e=!1,hr(t,n),$h(t,r,i),kl(t,r,i,n),Tl(null,t,r,!0,e,n);case 19:return Zh(e,t,n);case 22:return Xh(e,t,n)}throw Error(I(156,t.tag))};function h0(e,t){return Wm(e,t)}function ov(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new ov(e,t,n,r)}function Xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sv(e){if(typeof e=="function")return Xc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mc)return 11;if(e===hc)return 14}return 2}function un(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")Xc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Xn:return Mn(n.children,i,s,t);case fc:a=8,i|=8;break;case Ga:return e=rt(12,n,t,i|2),e.elementType=Ga,e.lanes=s,e;case Xa:return e=rt(13,n,t,i),e.elementType=Xa,e.lanes=s,e;case qa:return e=rt(19,n,t,i),e.elementType=qa,e.lanes=s,e;case Cm:return Os(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sm:a=10;break e;case km:a=9;break e;case mc:a=11;break e;case hc:a=14;break e;case Xt:a=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Mn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Os(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Cm,e.lanes=n,e.stateNode={isHidden:!1},e}function Sa(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function av(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qc(e,t,n,r,i,s,a,l,c){return e=new av(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rc(s),e}function lv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function g0(e){if(!e)return fn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(_e(n))return gh(e,n,t)}return t}function x0(e,t,n,r,i,s,a,l,c){return e=qc(n,r,!0,e,i,s,a,l,c),e.context=g0(null),n=e.current,r=De(),i=cn(n),s=Rt(r,i),s.callback=t??null,an(n,s,i),e.current.lanes=i,Gi(e,i,r),We(e,r),e}function Vs(e,t,n,r){var i=t.current,s=De(),a=cn(i);return n=g0(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=an(i,t,a),e!==null&&(mt(e,i,a,s),Lo(e,i,a)),a}function ys(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jc(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function cv(){return null}var y0=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}Bs.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Vs(e,t,null,null)};Bs.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wn(function(){Vs(null,e,null,null)}),t[Ft]=null}};function Bs(e){this._internalRoot=e}Bs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&Jm(e)}};function Zc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lp(){}function uv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ys(a);s.call(u)}}var a=x0(t,r,e,0,null,!1,!1,"",lp);return e._reactRootContainer=a,e[Ft]=a.current,Ai(e.nodeType===8?e.parentNode:e),Wn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ys(c);l.call(u)}}var c=qc(e,0,!1,null,null,!1,!1,"",lp);return e._reactRootContainer=c,e[Ft]=c.current,Ai(e.nodeType===8?e.parentNode:e),Wn(function(){Vs(t,c,n,r)}),c}function Ws(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=ys(a);l.call(c)}}Vs(t,a,e,i)}else a=uv(n,t,e,i,r);return ys(a)}Km=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Zr(t.pendingLanes);n!==0&&(yc(t,n|1),We(t,fe()),!(X&6)&&(Sr=fe()+500,yn()))}break;case 13:Wn(function(){var r=Ot(e,1);if(r!==null){var i=De();mt(r,e,1,i)}}),Jc(e,1)}};vc=function(e){if(e.tag===13){var t=Ot(e,134217728);if(t!==null){var n=De();mt(t,e,134217728,n)}Jc(e,134217728)}};Gm=function(e){if(e.tag===13){var t=cn(e),n=Ot(e,t);if(n!==null){var r=De();mt(n,e,t,r)}Jc(e,t)}};Xm=function(){return J};qm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};sl=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Is(r);if(!i)throw Error(I(90));Tm(r),Za(r,i)}}}break;case"textarea":Pm(e,n);break;case"select":t=n.value,t!=null&&dr(e,!!n.multiple,t,!1)}};Mm=Yc;Fm=Wn;var dv={usingClientEntryPoint:!1,Events:[qi,Zn,Is,Dm,Lm,Yc]},$r={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pv={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Bm(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ko.isDisabled&&ko.supportsFiber)try{Ns=ko.inject(pv),St=ko}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zc(t))throw Error(I(200));return lv(e,t,null,n)};qe.createRoot=function(e,t){if(!Zc(e))throw Error(I(299));var n=!1,r="",i=y0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=qc(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,Ai(e.nodeType===8?e.parentNode:e),new Qc(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Bm(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Wn(e)};qe.hydrate=function(e,t,n){if(!_s(t))throw Error(I(200));return Ws(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Zc(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=x0(t,null,e,1,n??null,i,!1,s,a),e[Ft]=t.current,Ai(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bs(t)};qe.render=function(e,t,n){if(!_s(t))throw Error(I(200));return Ws(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!_s(e))throw Error(I(40));return e._reactRootContainer?(Wn(function(){Ws(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};qe.unstable_batchedUpdates=Yc;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_s(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Ws(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function v0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v0)}catch(e){console.error(e)}}v0(),vm.exports=qe;var fv=vm.exports,b0,cp=fv;b0=cp.createRoot,cp.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vi(){return Vi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vi.apply(null,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const up="popstate";function mv(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Vl("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:vs(i)}return gv(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function w0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function hv(){return Math.random().toString(36).substr(2,8)}function dp(e,t){return{usr:e.state,key:e.key,idx:t}}function Vl(e,t,n,r){return n===void 0&&(n=null),Vi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:n,key:t&&t.key||r||hv()})}function vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=tn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(Vi({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=tn.Pop;let w=d(),g=w==null?null:w-u;u=w,c&&c({action:l,location:b.location,delta:g})}function f(w,g){l=tn.Push;let m=Vl(b.location,w,g);u=d()+1;let y=dp(m,u),S=b.createHref(m);try{a.pushState(y,"",S)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(S)}s&&c&&c({action:l,location:b.location,delta:1})}function x(w,g){l=tn.Replace;let m=Vl(b.location,w,g);u=d();let y=dp(m,u),S=b.createHref(m);a.replaceState(y,"",S),s&&c&&c({action:l,location:b.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:vs(w);return m=m.replace(/ $/,"%20"),me(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let b={get action(){return l},get location(){return e(i,a)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(up,p),c=w,()=>{i.removeEventListener(up,p),c=null}},createHref(w){return t(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:x,go(w){return a.go(w)}};return b}var pp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pp||(pp={}));function xv(e,t,n){return n===void 0&&(n="/"),yv(e,t,n)}function yv(e,t,n,r){let i=typeof t=="string"?Ar(t):t,s=eu(i.pathname||"/",n);if(s==null)return null;let a=j0(e);vv(a);let l=null,c=zv(s);for(let u=0;l==null&&u<a.length;++u)l=Nv(a[u],c);return l}function j0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(me(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=dn([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j0(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Ev(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of S0(s.path))i(s,a,c)}),t}function S0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=S0(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function vv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Tv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bv=/^:[\w-]+$/,wv=3,jv=2,Sv=1,kv=10,Cv=-2,fp=e=>e==="*";function Ev(e,t){let n=e.split("/"),r=n.length;return n.some(fp)&&(r+=Cv),t&&(r+=jv),n.filter(i=>!fp(i)).reduce((i,s)=>i+(bv.test(s)?wv:s===""?Sv:kv),r)}function Tv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Nv(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Pv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:dn([s,p.pathname]),pathnameBase:Dv(dn([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=dn([s,p.pathnameBase]))}return a}function Pv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Av(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:x}=d;if(f==="*"){let b=l[p]||"";a=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const v=l[p];return x&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Av(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return w0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function eu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Iv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ar(e):e,s;return n?(n=k0(n),n.startsWith("/")?s=mp(n.substring(1),"/"):s=mp(n,t)):s=t,{pathname:s,search:Lv(r),hash:Mv(i)}}function mp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ca(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function tu(e,t){let n=Rv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function nu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ar(e):(i=Vi({},e),me(!i.pathname||!i.pathname.includes("?"),Ca("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Ca("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Ca("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Iv(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const k0=e=>e.replace(/\/\/+/g,"/"),dn=e=>k0(e.join("/")),Dv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Lv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Mv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Fv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const C0=["post","put","patch","delete"];new Set(C0);const Ov=["get",...C0];new Set(Ov);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(null,arguments)}const ru=h.createContext(null),Vv=h.createContext(null),vn=h.createContext(null),Hs=h.createContext(null),_t=h.createContext({outlet:null,matches:[],isDataRoute:!1}),E0=h.createContext(null);function Bv(e,t){let{relative:n}=t===void 0?{}:t;zr()||me(!1);let{basename:r,navigator:i}=h.useContext(vn),{hash:s,pathname:a,search:l}=N0(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:dn([r,a])),i.createHref({pathname:c,search:l,hash:s})}function zr(){return h.useContext(Hs)!=null}function Wt(){return zr()||me(!1),h.useContext(Hs).location}function T0(e){h.useContext(vn).static||h.useLayoutEffect(e)}function Ht(){let{isDataRoute:e}=h.useContext(_t);return e?e2():_v()}function _v(){zr()||me(!1);let e=h.useContext(ru),{basename:t,future:n,navigator:r}=h.useContext(vn),{matches:i}=h.useContext(_t),{pathname:s}=Wt(),a=JSON.stringify(tu(i,n.v7_relativeSplatPath)),l=h.useRef(!1);return T0(()=>{l.current=!0}),h.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=nu(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:dn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function Wv(){let{matches:e}=h.useContext(_t),t=e[e.length-1];return t?t.params:{}}function N0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=h.useContext(vn),{matches:i}=h.useContext(_t),{pathname:s}=Wt(),a=JSON.stringify(tu(i,r.v7_relativeSplatPath));return h.useMemo(()=>nu(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Hv(e,t){return Uv(e,t)}function Uv(e,t,n,r){zr()||me(!1);let{navigator:i}=h.useContext(vn),{matches:s}=h.useContext(_t),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Wt(),d;if(t){var p;let w=typeof t=="string"?Ar(t):t;c==="/"||(p=w.pathname)!=null&&p.startsWith(c)||me(!1),d=w}else d=u;let f=d.pathname||"/",x=f;if(c!=="/"){let w=c.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=xv(e,{pathname:x}),b=Xv(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:dn([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:dn([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&b?h.createElement(Hs.Provider,{value:{location:Bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tn.Pop}},b):b}function $v(){let e=Zv(),t=Fv(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},t),n?h.createElement("pre",{style:i},n):null,null)}const Yv=h.createElement($v,null);class Kv extends h.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?h.createElement(_t.Provider,{value:this.props.routeContext},h.createElement(E0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gv(e){let{routeContext:t,match:n,children:r}=e,i=h.useContext(ru);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),h.createElement(_t.Provider,{value:t},r)}function Xv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||me(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:x}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||v){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let x,v=!1,b=null,w=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,b=p.route.errorElement||Yv,c&&(u<0&&f===0?(t2("route-fallback"),v=!0,w=null):u===f&&(v=!0,w=p.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,f+1)),m=()=>{let y;return x?y=b:v?y=w:p.route.Component?y=h.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=d,h.createElement(Gv,{match:p,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:y})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?h.createElement(Kv,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var P0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(P0||{}),A0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(A0||{});function qv(e){let t=h.useContext(ru);return t||me(!1),t}function Jv(e){let t=h.useContext(Vv);return t||me(!1),t}function Qv(e){let t=h.useContext(_t);return t||me(!1),t}function z0(e){let t=Qv(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Zv(){var e;let t=h.useContext(E0),n=Jv(),r=z0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function e2(){let{router:e}=qv(P0.UseNavigateStable),t=z0(A0.UseNavigateStable),n=h.useRef(!1);return T0(()=>{n.current=!0}),h.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Bi({fromRouteId:t},s)))},[e,t])}const hp={};function t2(e,t,n){hp[e]||(hp[e]=!0)}function n2(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function I0(e){let{to:t,replace:n,state:r,relative:i}=e;zr()||me(!1);let{future:s,static:a}=h.useContext(vn),{matches:l}=h.useContext(_t),{pathname:c}=Wt(),u=Ht(),d=nu(t,tu(l,s.v7_relativeSplatPath),c,i==="path"),p=JSON.stringify(d);return h.useEffect(()=>u(JSON.parse(p),{replace:n,state:r,relative:i}),[u,p,i,n,r]),null}function Ie(e){me(!1)}function r2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:s,static:a=!1,future:l}=e;zr()&&me(!1);let c=t.replace(/^\/*/,"/"),u=h.useMemo(()=>({basename:c,navigator:s,static:a,future:Bi({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=Ar(r));let{pathname:d="/",search:p="",hash:f="",state:x=null,key:v="default"}=r,b=h.useMemo(()=>{let w=eu(d,c);return w==null?null:{location:{pathname:w,search:p,hash:f,state:x,key:v},navigationType:i}},[c,d,p,f,x,v,i]);return b==null?null:h.createElement(vn.Provider,{value:u},h.createElement(Hs.Provider,{children:n,value:b}))}function R0(e){let{children:t,location:n}=e;return Hv(Bl(t),n)}new Promise(()=>{});function Bl(e,t){t===void 0&&(t=[]);let n=[];return h.Children.forEach(e,(r,i)=>{if(!h.isValidElement(r))return;let s=[...t,i];if(r.type===h.Fragment){n.push.apply(n,Bl(r.props.children,s));return}r.type!==Ie&&me(!1),!r.props.index||!r.props.children||me(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Bl(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _l(){return _l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_l.apply(null,arguments)}function i2(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function o2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s2(e,t){return e.button===0&&(!t||t==="_self")&&!o2(e)}const a2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],l2="6";try{window.__reactRouterVersion=l2}catch{}const c2="startTransition",gp=ny[c2];function u2(e){let{basename:t,children:n,future:r,window:i}=e,s=h.useRef();s.current==null&&(s.current=mv({window:i,v5Compat:!0}));let a=s.current,[l,c]=h.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=h.useCallback(p=>{u&&gp?gp(()=>c(p)):c(p)},[c,u]);return h.useLayoutEffect(()=>a.listen(d),[a,d]),h.useEffect(()=>n2(r),[r]),h.createElement(r2,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const d2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,he=h.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=t,f=i2(t,a2),{basename:x}=h.useContext(vn),v,b=!1;if(typeof u=="string"&&p2.test(u)&&(v=u,d2))try{let y=new URL(window.location.href),S=u.startsWith("//")?new URL(y.protocol+u):new URL(u),j=eu(S.pathname,x);S.origin===y.origin&&j!=null?u=j+S.search+S.hash:b=!0}catch{}let w=Bv(u,{relative:i}),g=f2(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:p});function m(y){r&&r(y),y.defaultPrevented||g(y)}return h.createElement("a",_l({},f,{href:v||w,onClick:b||s?r:m,ref:n,target:c}))});var xp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(xp||(xp={}));var yp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yp||(yp={}));function f2(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=Ht(),u=Wt(),d=N0(e,{relative:a});return h.useCallback(p=>{if(s2(p,n)){p.preventDefault();let f=r!==void 0?r:vs(u)===vs(d);c(e,{replace:f,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,s,a,l])}const iu=h.createContext({});function Ir(e){const t=h.useRef(null);return t.current===null&&(t.current=e()),t.current}const Us=h.createContext(null),Qi=h.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class m2 extends h.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function h2({children:e,isPresent:t}){const n=h.useId(),r=h.useRef(null),i=h.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=h.useContext(Qi);return h.useInsertionEffect(()=>{const{width:a,height:l,top:c,left:u}=i.current;if(t||!r.current||!a||!l)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),o.jsx(m2,{isPresent:t,childRef:r,sizeRef:i,children:h.cloneElement(e,{ref:r})})}const g2=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:a})=>{const l=Ir(x2),c=h.useId(),u=h.useCallback(p=>{l.set(p,!0);for(const f of l.values())if(!f)return;r&&r()},[l,r]),d=h.useMemo(()=>({id:c,initial:t,isPresent:n,custom:i,onExitComplete:u,register:p=>(l.set(p,!1),()=>l.delete(p))}),s?[Math.random(),u]:[n,u]);return h.useMemo(()=>{l.forEach((p,f)=>l.set(f,!1))},[n]),h.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),a==="popLayout"&&(e=o.jsx(h2,{isPresent:n,children:e})),o.jsx(Us.Provider,{value:d,children:e})};function x2(){return new Map}function D0(e=!0){const t=h.useContext(Us);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=h.useId();h.useEffect(()=>{e&&i(s)},[e]);const a=h.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const Co=e=>e.key||"";function vp(e){const t=[];return h.Children.forEach(e,n=>{h.isValidElement(n)&&t.push(n)}),t}const ou=typeof window<"u",Zi=ou?h.useLayoutEffect:h.useEffect,Wl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:a=!1})=>{const[l,c]=D0(a),u=h.useMemo(()=>vp(e),[e]),d=a&&!l?[]:u.map(Co),p=h.useRef(!0),f=h.useRef(u),x=Ir(()=>new Map),[v,b]=h.useState(u),[w,g]=h.useState(u);Zi(()=>{p.current=!1,f.current=u;for(let S=0;S<w.length;S++){const j=Co(w[S]);d.includes(j)?x.delete(j):x.get(j)!==!0&&x.set(j,!1)}},[w,d.length,d.join("-")]);const m=[];if(u!==v){let S=[...u];for(let j=0;j<w.length;j++){const k=w[j],T=Co(k);d.includes(T)||(S.splice(j,0,k),m.push(k))}s==="wait"&&m.length&&(S=m),g(vp(S)),b(u);return}const{forceRender:y}=h.useContext(iu);return o.jsx(o.Fragment,{children:w.map(S=>{const j=Co(S),k=a&&!l?!1:u===w||d.includes(j),T=()=>{if(x.has(j))x.set(j,!0);else return;let C=!0;x.forEach(V=>{V||(C=!1)}),C&&(y==null||y(),g(f.current),a&&(c==null||c()),r&&r())};return o.jsx(g2,{isPresent:k,initial:!p.current||n?void 0:!1,custom:k?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:k?void 0:T,children:S},j)})})},Le=e=>e;let y2=Le,L0=Le;function su(e){let t;return()=>(t===void 0&&(t=e()),t)}const Hn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Dt=e=>e*1e3,Lt=e=>e/1e3,v2={useManualTiming:!1};function b2(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,p=!1)=>{const x=p&&r?t:n;return d&&s.add(u),x.has(u)||x.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const Eo=["read","resolveKeyframes","update","preRender","render","postRender"],w2=40;function M0(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=Eo.reduce((g,m)=>(g[m]=b2(s),g),{}),{read:l,resolveKeyframes:c,update:u,preRender:d,render:p,postRender:f}=a,x=()=>{const g=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(g-i.timestamp,w2),1),i.timestamp=g,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(x))},v=()=>{n=!0,r=!0,i.isProcessing||e(x)};return{schedule:Eo.reduce((g,m)=>{const y=a[m];return g[m]=(S,j=!1,k=!1)=>(n||v(),y.schedule(S,j,k)),g},{}),cancel:g=>{for(let m=0;m<Eo.length;m++)a[Eo[m]].cancel(g)},state:i,steps:a}}const{schedule:q,cancel:gt,state:xe,steps:Ea}=M0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Le,!0),F0=h.createContext({strict:!1}),bp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},kr={};for(const e in bp)kr[e]={isEnabled:t=>bp[e].some(n=>!!t[n])};function j2(e){for(const t in e)kr[t]={...kr[t],...e[t]}}const S2=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function bs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||S2.has(e)}let O0=e=>!bs(e);function k2(e){e&&(O0=t=>t.startsWith("on")?!bs(t):e(t))}try{k2(require("@emotion/is-prop-valid").default)}catch{}function C2(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(O0(i)||n===!0&&bs(i)||!t&&!bs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function E2(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const $s=h.createContext({});function _i(e){return typeof e=="string"||Array.isArray(e)}function Ys(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const au=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lu=["initial",...au];function Ks(e){return Ys(e.animate)||lu.some(t=>_i(e[t]))}function V0(e){return!!(Ks(e)||e.variants)}function T2(e,t){if(Ks(e)){const{initial:n,animate:r}=e;return{initial:n===!1||_i(n)?n:void 0,animate:_i(r)?r:void 0}}return e.inherit!==!1?t:{}}function N2(e){const{initial:t,animate:n}=T2(e,h.useContext($s));return h.useMemo(()=>({initial:t,animate:n}),[wp(t),wp(n)])}function wp(e){return Array.isArray(e)?e.join(" "):e}const P2=Symbol.for("motionComponentSymbol");function sr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function A2(e,t,n){return h.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):sr(n)&&(n.current=r))},[t])}const cu=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),z2="framerAppearId",B0="data-"+cu(z2),{schedule:uu}=M0(queueMicrotask,!1),_0=h.createContext({});function I2(e,t,n,r,i){var s,a;const{visualElement:l}=h.useContext($s),c=h.useContext(F0),u=h.useContext(Us),d=h.useContext(Qi).reducedMotion,p=h.useRef(null);r=r||c.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:l,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,x=h.useContext(_0);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&R2(p.current,n,i,x);const v=h.useRef(!1);h.useInsertionEffect(()=>{f&&v.current&&f.update(n,u)});const b=n[B0],w=h.useRef(!!b&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,b))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,b)));return Zi(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),uu.render(f.render),w.current&&f.animationState&&f.animationState.animateChanges())}),h.useEffect(()=>{f&&(!w.current&&f.animationState&&f.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var g;(g=window.MotionHandoffMarkAsComplete)===null||g===void 0||g.call(window,b)}),w.current=!1))}),f}function R2(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:W0(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||l&&sr(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:c,layoutRoot:u})}function W0(e){if(e)return e.options.allowProjection!==!1?e.projection:W0(e.parent)}function D2({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&j2(e);function l(u,d){let p;const f={...h.useContext(Qi),...u,layoutId:L2(u)},{isStatic:x}=f,v=N2(u),b=r(u,x);if(!x&&ou){M2();const w=F2(f);p=w.MeasureLayout,v.visualElement=I2(i,b,f,t,w.ProjectionNode)}return o.jsxs($s.Provider,{value:v,children:[p&&v.visualElement?o.jsx(p,{visualElement:v.visualElement,...f}):null,n(i,u,A2(b,v.visualElement,d),b,x,v.visualElement)]})}l.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const c=h.forwardRef(l);return c[P2]=i,c}function L2({layoutId:e}){const t=h.useContext(iu).id;return t&&e!==void 0?t+"-"+e:e}function M2(e,t){h.useContext(F0).strict}function F2(e){const{drag:t,layout:n}=kr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const O2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function du(e){return typeof e!="string"||e.includes("-")?!1:!!(O2.indexOf(e)>-1||/[A-Z]/u.test(e))}function jp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function pu(e,t,n,r){if(typeof t=="function"){const[i,s]=jp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=jp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Hl=e=>Array.isArray(e),V2=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),B2=e=>Hl(e)?e[e.length-1]||0:e,we=e=>!!(e&&e.getVelocity);function Wo(e){const t=we(e)?e.get():e;return V2(t)?t.toValue():t}function _2({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:W2(r,i,s,e),renderState:t()};return n&&(a.onMount=l=>n({props:r,current:l,...a}),a.onUpdate=l=>n(l)),a}const H0=e=>(t,n)=>{const r=h.useContext($s),i=h.useContext(Us),s=()=>_2(e,t,r,i);return n?s():Ir(s)};function W2(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Wo(s[f]);let{initial:a,animate:l}=e;const c=Ks(e),u=V0(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?l:a;if(p&&typeof p!="boolean"&&!Ys(p)){const f=Array.isArray(p)?p:[p];for(let x=0;x<f.length;x++){const v=pu(e,f[x]);if(v){const{transitionEnd:b,transition:w,...g}=v;for(const m in g){let y=g[m];if(Array.isArray(y)){const S=d?y.length-1:0;y=y[S]}y!==null&&(i[m]=y)}for(const m in b)i[m]=b[m]}}}return i}const Rr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yn=new Set(Rr),U0=e=>t=>typeof t=="string"&&t.startsWith(e),$0=U0("--"),H2=U0("var(--"),fu=e=>H2(e)?U2.test(e.split("/*")[0].trim()):!1,U2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Y0=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Tt=(e,t,n)=>n>t?t:n<e?e:n,Dr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Wi={...Dr,transform:e=>Tt(0,1,e)},To={...Dr,default:1},eo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Kt=eo("deg"),Ct=eo("%"),U=eo("px"),$2=eo("vh"),Y2=eo("vw"),Sp={...Ct,parse:e=>Ct.parse(e)/100,transform:e=>Ct.transform(e*100)},K2={borderWidth:U,borderTopWidth:U,borderRightWidth:U,borderBottomWidth:U,borderLeftWidth:U,borderRadius:U,radius:U,borderTopLeftRadius:U,borderTopRightRadius:U,borderBottomRightRadius:U,borderBottomLeftRadius:U,width:U,maxWidth:U,height:U,maxHeight:U,top:U,right:U,bottom:U,left:U,padding:U,paddingTop:U,paddingRight:U,paddingBottom:U,paddingLeft:U,margin:U,marginTop:U,marginRight:U,marginBottom:U,marginLeft:U,backgroundPositionX:U,backgroundPositionY:U},G2={rotate:Kt,rotateX:Kt,rotateY:Kt,rotateZ:Kt,scale:To,scaleX:To,scaleY:To,scaleZ:To,skew:Kt,skewX:Kt,skewY:Kt,distance:U,translateX:U,translateY:U,translateZ:U,x:U,y:U,z:U,perspective:U,transformPerspective:U,opacity:Wi,originX:Sp,originY:Sp,originZ:U},kp={...Dr,transform:Math.round},mu={...K2,...G2,zIndex:kp,size:U,fillOpacity:Wi,strokeOpacity:Wi,numOctaves:kp},X2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},q2=Rr.length;function J2(e,t,n){let r="",i=!0;for(let s=0;s<q2;s++){const a=Rr[s],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number"?c=l===(a.startsWith("scale")?1:0):c=parseFloat(l)===0,!c||n){const u=Y0(l,mu[a]);if(!c){i=!1;const d=X2[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function hu(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(Yn.has(c)){a=!0;continue}else if($0(c)){i[c]=u;continue}else{const d=Y0(u,mu[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=J2(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}const Q2={offset:"stroke-dashoffset",array:"stroke-dasharray"},Z2={offset:"strokeDashoffset",array:"strokeDasharray"};function eb(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Q2:Z2;e[s.offset]=U.transform(-r);const a=U.transform(t),l=U.transform(n);e[s.array]=`${a} ${l}`}function Cp(e,t,n){return typeof e=="string"?e:U.transform(t+n*e)}function tb(e,t,n){const r=Cp(t,e.x,e.width),i=Cp(n,e.y,e.height);return`${r} ${i}`}function gu(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:l=1,pathOffset:c=0,...u},d,p){if(hu(e,u,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:x,dimensions:v}=e;f.transform&&(v&&(x.transform=f.transform),delete f.transform),v&&(i!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=tb(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),a!==void 0&&eb(f,a,l,c,!1)}const xu=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),K0=()=>({...xu(),attrs:{}}),yu=e=>typeof e=="string"&&e.toLowerCase()==="svg";function G0(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const X0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function q0(e,t,n,r){G0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(X0.has(i)?i:cu(i),t.attrs[i])}const ws={};function nb(e){Object.assign(ws,e)}function J0(e,{layout:t,layoutId:n}){return Yn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ws[e]||e==="opacity")}function vu(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(we(i[a])||t.style&&we(t.style[a])||J0(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Q0(e,t,n){const r=vu(e,t,n);for(const i in e)if(we(e[i])||we(t[i])){const s=Rr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function rb(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Ep=["x","y","width","height","cx","cy","r"],ib={useVisualState:H0({scrapeMotionValuesFromProps:Q0,createRenderState:K0,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const l in i)if(Yn.has(l)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let l=0;l<Ep.length;l++){const c=Ep[l];e[c]!==t[c]&&(a=!0)}a&&q.read(()=>{rb(n,r),q.render(()=>{gu(r,i,yu(n.tagName),e.transformTemplate),q0(n,r)})})}})},ob={useVisualState:H0({scrapeMotionValuesFromProps:vu,createRenderState:xu})};function Z0(e,t,n){for(const r in t)!we(t[r])&&!J0(r,n)&&(e[r]=t[r])}function sb({transformTemplate:e},t){return h.useMemo(()=>{const n=xu();return hu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function ab(e,t){const n=e.style||{},r={};return Z0(r,n,e),Object.assign(r,sb(e,t)),r}function lb(e,t){const n={},r=ab(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function cb(e,t,n,r){const i=h.useMemo(()=>{const s=K0();return gu(s,t,yu(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Z0(s,e.style,e),i.style={...s,...i.style}}return i}function ub(e=!1){return(n,r,i,{latestValues:s},a)=>{const c=(du(n)?cb:lb)(r,s,a,n),u=C2(r,typeof n=="string",e),d=n!==h.Fragment?{...u,...c,ref:i}:{},{children:p}=r,f=h.useMemo(()=>we(p)?p.get():p,[p]);return h.createElement(n,{...d,children:f})}}function db(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...du(r)?ib:ob,preloadedFeatures:e,useRender:ub(i),createVisualElement:t,Component:r};return D2(a)}}function eg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Gs(e,t,n){const r=e.getProps();return pu(r,t,n!==void 0?n:r.custom,e)}const tg=su(()=>window.ScrollTimeline!==void 0);class pb{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(tg()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class fb extends pb{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function bu(e,t){return e?e[t]||e.default||e:void 0}const Ul=2e4;function ng(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Ul;)t+=n,r=e.next(t);return t>=Ul?1/0:t}function wu(e){return typeof e=="function"}function Tp(e,t){e.timeline=t,e.onfinish=null}const ju=e=>Array.isArray(e)&&typeof e[0]=="number",mb={linearEasing:void 0};function hb(e,t){const n=su(e);return()=>{var r;return(r=mb[t])!==null&&r!==void 0?r:n()}}const js=hb(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),rg=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Hn(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function ig(e){return!!(typeof e=="function"&&js()||!e||typeof e=="string"&&(e in $l||js())||ju(e)||Array.isArray(e)&&e.every(ig))}const ti=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,$l={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ti([0,.65,.55,1]),circOut:ti([.55,0,1,.45]),backIn:ti([.31,.01,.66,-.59]),backOut:ti([.33,1.53,.69,.99])};function og(e,t){if(e)return typeof e=="function"&&js()?rg(e,t):ju(e)?ti(e):Array.isArray(e)?e.map(n=>og(n,t)||$l.easeOut):$l[e]}const lt={x:!1,y:!1};function sg(){return lt.x||lt.y}function Su(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function ag(e,t){const n=Su(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Np(e){return t=>{t.pointerType==="touch"||sg()||e(t)}}function gb(e,t,n={}){const[r,i,s]=ag(e,n),a=Np(l=>{const{target:c}=l,u=t(l);if(typeof u!="function"||!c)return;const d=Np(p=>{u(p),c.removeEventListener("pointerleave",d)});c.addEventListener("pointerleave",d,i)});return r.forEach(l=>{l.addEventListener("pointerenter",a,i)}),s}const lg=(e,t)=>t?e===t?!0:lg(e,t.parentElement):!1,ku=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,xb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function yb(e){return xb.has(e.tagName)||e.tabIndex!==-1}const ni=new WeakSet;function Pp(e){return t=>{t.key==="Enter"&&e(t)}}function Ta(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const vb=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Pp(()=>{if(ni.has(n))return;Ta(n,"down");const i=Pp(()=>{Ta(n,"up")}),s=()=>Ta(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Ap(e){return ku(e)&&!sg()}function bb(e,t,n={}){const[r,i,s]=ag(e,n),a=l=>{const c=l.currentTarget;if(!Ap(l)||ni.has(c))return;ni.add(c);const u=t(l),d=(x,v)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",f),!(!Ap(x)||!ni.has(c))&&(ni.delete(c),typeof u=="function"&&u(x,{success:v}))},p=x=>{d(x,n.useGlobalTarget||lg(c,x.target))},f=x=>{d(x,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",f,i)};return r.forEach(l=>{!yb(l)&&l.getAttribute("tabindex")===null&&(l.tabIndex=0),(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),l.addEventListener("focus",u=>vb(u,i),i)}),s}function wb(e){return e==="x"||e==="y"?lt[e]?null:(lt[e]=!0,()=>{lt[e]=!1}):lt.x||lt.y?null:(lt.x=lt.y=!0,()=>{lt.x=lt.y=!1})}const cg=new Set(["width","height","top","left","right","bottom",...Rr]);let Ho;function jb(){Ho=void 0}const Et={now:()=>(Ho===void 0&&Et.set(xe.isProcessing||v2.useManualTiming?xe.timestamp:performance.now()),Ho),set:e=>{Ho=e,queueMicrotask(jb)}};function Cu(e,t){e.indexOf(t)===-1&&e.push(t)}function Eu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Tu{constructor(){this.subscriptions=[]}add(t){return Cu(this.subscriptions,t),()=>Eu(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Nu(e,t){return t?e*(1e3/t):0}const zp=30,Sb=e=>!isNaN(parseFloat(e)),hi={current:void 0};class kb{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Et.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Et.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Sb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Tu);const r=this.events[t].add(n);return t==="change"?()=>{r(),q.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return hi.current&&hi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>zp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,zp);return Nu(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function wt(e,t){return new kb(e,t)}function Cb(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,wt(n))}function Eb(e,t){const n=Gs(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const l=B2(s[a]);Cb(e,a,l)}}function Tb(e){return!!(we(e)&&e.add)}function Yl(e,t){const n=e.getValue("willChange");if(Tb(n))return n.add(t)}function ug(e){return e.props[B0]}const dg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Nb=1e-7,Pb=12;function Ab(e,t,n,r,i){let s,a,l=0;do a=t+(n-t)/2,s=dg(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>Nb&&++l<Pb);return a}function to(e,t,n,r){if(e===t&&n===r)return Le;const i=s=>Ab(s,0,1,e,n);return s=>s===0||s===1?s:dg(i(s),t,r)}const pg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fg=e=>t=>1-e(1-t),mg=to(.33,1.53,.69,.99),Pu=fg(mg),hg=pg(Pu),gg=e=>(e*=2)<1?.5*Pu(e):.5*(2-Math.pow(2,-10*(e-1))),Au=e=>1-Math.sin(Math.acos(e)),xg=fg(Au),yg=pg(Au),vg=e=>/^0[^.\s]+$/u.test(e);function zb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||vg(e):!0}const gi=e=>Math.round(e*1e5)/1e5,zu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ib(e){return e==null}const Rb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Iu=(e,t)=>n=>!!(typeof n=="string"&&Rb.test(n)&&n.startsWith(e)||t&&!Ib(n)&&Object.prototype.hasOwnProperty.call(n,t)),bg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,l]=r.match(zu);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},Db=e=>Tt(0,255,e),Na={...Dr,transform:e=>Math.round(Db(e))},Dn={test:Iu("rgb","red"),parse:bg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Na.transform(e)+", "+Na.transform(t)+", "+Na.transform(n)+", "+gi(Wi.transform(r))+")"};function Lb(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Kl={test:Iu("#"),parse:Lb,transform:Dn.transform},ar={test:Iu("hsl","hue"),parse:bg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ct.transform(gi(t))+", "+Ct.transform(gi(n))+", "+gi(Wi.transform(r))+")"},Ne={test:e=>Dn.test(e)||Kl.test(e)||ar.test(e),parse:e=>Dn.test(e)?Dn.parse(e):ar.test(e)?ar.parse(e):Kl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Dn.transform(e):ar.transform(e)},Mb=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Fb(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(zu))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Mb))===null||n===void 0?void 0:n.length)||0)>0}const wg="number",jg="color",Ob="var",Vb="var(",Ip="${}",Bb=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Hi(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace(Bb,c=>(Ne.test(c)?(r.color.push(s),i.push(jg),n.push(Ne.parse(c))):c.startsWith(Vb)?(r.var.push(s),i.push(Ob),n.push(c)):(r.number.push(s),i.push(wg),n.push(parseFloat(c))),++s,Ip)).split(Ip);return{values:n,split:l,indexes:r,types:i}}function Sg(e){return Hi(e).values}function kg(e){const{split:t,types:n}=Hi(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const l=n[a];l===wg?s+=gi(i[a]):l===jg?s+=Ne.transform(i[a]):s+=i[a]}return s}}const _b=e=>typeof e=="number"?0:e;function Wb(e){const t=Sg(e);return kg(e)(t.map(_b))}const mn={test:Fb,parse:Sg,createTransformer:kg,getAnimatableNone:Wb},Hb=new Set(["brightness","contrast","saturate","opacity"]);function Ub(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(zu)||[];if(!r)return e;const i=n.replace(r,"");let s=Hb.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const $b=/\b([a-z-]*)\(.*?\)/gu,Gl={...mn,getAnimatableNone:e=>{const t=e.match($b);return t?t.map(Ub).join(" "):e}},Yb={...mu,color:Ne,backgroundColor:Ne,outlineColor:Ne,fill:Ne,stroke:Ne,borderColor:Ne,borderTopColor:Ne,borderRightColor:Ne,borderBottomColor:Ne,borderLeftColor:Ne,filter:Gl,WebkitFilter:Gl},Ru=e=>Yb[e];function Cg(e,t){let n=Ru(e);return n!==Gl&&(n=mn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Kb=new Set(["auto","none","0"]);function Gb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!Kb.has(s)&&Hi(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Cg(n,i)}const Rp=e=>e===Dr||e===U,Dp=(e,t)=>parseFloat(e.split(", ")[t]),Lp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Dp(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Dp(s[1],e):0}},Xb=new Set(["x","y","z"]),qb=Rr.filter(e=>!Xb.has(e));function Jb(e){const t=[];return qb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Cr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Lp(4,13),y:Lp(5,14)};Cr.translateX=Cr.x;Cr.translateY=Cr.y;const Fn=new Set;let Xl=!1,ql=!1;function Eg(){if(ql){const e=Array.from(Fn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Jb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var l;(l=r.getValue(s))===null||l===void 0||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ql=!1,Xl=!1,Fn.forEach(e=>e.complete()),Fn.clear()}function Tg(){Fn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ql=!0)})}function Qb(){Tg(),Eg()}class Du{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Fn.add(this),Xl||(Xl=!0,q.read(Tg),q.resolveKeyframes(Eg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),l=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(t[0]=c)}t[0]===void 0&&(t[0]=l),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Fn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Fn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ng=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Zb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ew(e){const t=Zb.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Pg(e,t,n=1){const[r,i]=ew(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return Ng(a)?parseFloat(a):a}return fu(i)?Pg(i,t,n+1):i}const Ag=e=>t=>t.test(e),tw={test:e=>e==="auto",parse:e=>e},zg=[Dr,U,Ct,Kt,Y2,$2,tw],Mp=e=>zg.find(Ag(e));class Ig extends Du{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),fu(u))){const d=Pg(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!cg.has(r)||t.length!==2)return;const[i,s]=t,a=Mp(i),l=Mp(s);if(a!==l)if(Rp(a)&&Rp(l))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)zb(t[i])&&r.push(i);r.length&&Gb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Cr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,l=i[a];i[a]=Cr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([c,u])=>{n.getValue(c).set(u)}),this.resolveNoneKeyframes()}}const Fp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(mn.test(e)||e==="0")&&!e.startsWith("url("));function nw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function rw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=Fp(i,t),l=Fp(s,t);return!a||!l?!1:nw(e)||(n==="spring"||wu(n))&&r}const iw=e=>e!==null;function Xs(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(iw),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const ow=40;class Rg{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...l}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Et.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...l},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ow?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Qb(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Et.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:l,onUpdate:c,isGenerator:u}=this.options;if(!u&&!rw(t,r,i,s))if(a)this.options.duration=0;else{c&&c(Xs(t,this.options,n)),l&&l(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const ae=(e,t,n)=>e+(t-e)*n;function Pa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sw({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=Pa(c,l,e+1/3),s=Pa(c,l,e),a=Pa(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Ss(e,t){return n=>n>0?t:e}const Aa=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},aw=[Kl,Dn,ar],lw=e=>aw.find(t=>t.test(e));function Op(e){const t=lw(e);if(!t)return!1;let n=t.parse(e);return t===ar&&(n=sw(n)),n}const Vp=(e,t)=>{const n=Op(e),r=Op(t);if(!n||!r)return Ss(e,t);const i={...n};return s=>(i.red=Aa(n.red,r.red,s),i.green=Aa(n.green,r.green,s),i.blue=Aa(n.blue,r.blue,s),i.alpha=ae(n.alpha,r.alpha,s),Dn.transform(i))},cw=(e,t)=>n=>t(e(n)),no=(...e)=>e.reduce(cw),Jl=new Set(["none","hidden"]);function uw(e,t){return Jl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function dw(e,t){return n=>ae(e,t,n)}function Lu(e){return typeof e=="number"?dw:typeof e=="string"?fu(e)?Ss:Ne.test(e)?Vp:mw:Array.isArray(e)?Dg:typeof e=="object"?Ne.test(e)?Vp:pw:Ss}function Dg(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Lu(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function pw(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Lu(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function fw(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],l=e.indexes[a][i[a]],c=(n=e.values[l])!==null&&n!==void 0?n:0;r[s]=c,i[a]++}return r}const mw=(e,t)=>{const n=mn.createTransformer(t),r=Hi(e),i=Hi(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Jl.has(e)&&!i.values.length||Jl.has(t)&&!r.values.length?uw(e,t):no(Dg(fw(r,i),i.values),n):Ss(e,t)};function Lg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ae(e,t,n):Lu(e)(e,t)}const hw=5;function Mg(e,t,n){const r=Math.max(t-hw,0);return Nu(n-e(r),t-r)}const ue={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},za=.001;function gw({duration:e=ue.duration,bounce:t=ue.bounce,velocity:n=ue.velocity,mass:r=ue.mass}){let i,s,a=1-t;a=Tt(ue.minDamping,ue.maxDamping,a),e=Tt(ue.minDuration,ue.maxDuration,Lt(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,x=Ql(u,a),v=Math.exp(-p);return za-f/x*v},s=u=>{const p=u*a*e,f=p*n+n,x=Math.pow(a,2)*Math.pow(u,2)*e,v=Math.exp(-p),b=Ql(Math.pow(u,2),a);return(-i(u)+za>0?-1:1)*((f-x)*v)/b}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-za+d*p},s=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const l=5/e,c=yw(i,s,l);if(e=Dt(e),isNaN(c))return{stiffness:ue.stiffness,damping:ue.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const xw=12;function yw(e,t,n){let r=n;for(let i=1;i<xw;i++)r=r-e(r)/t(r);return r}function Ql(e,t){return e*Math.sqrt(1-t*t)}const vw=["duration","bounce"],bw=["stiffness","damping","mass"];function Bp(e,t){return t.some(n=>e[n]!==void 0)}function ww(e){let t={velocity:ue.velocity,stiffness:ue.stiffness,damping:ue.damping,mass:ue.mass,isResolvedFromDuration:!1,...e};if(!Bp(e,bw)&&Bp(e,vw))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Tt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ue.mass,stiffness:i,damping:s}}else{const n=gw(e);t={...t,...n,mass:ue.mass},t.isResolvedFromDuration=!0}return t}function Fg(e=ue.visualDuration,t=ue.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:c,damping:u,mass:d,duration:p,velocity:f,isResolvedFromDuration:x}=ww({...n,velocity:-Lt(n.velocity||0)}),v=f||0,b=u/(2*Math.sqrt(c*d)),w=a-s,g=Lt(Math.sqrt(c/d)),m=Math.abs(w)<5;r||(r=m?ue.restSpeed.granular:ue.restSpeed.default),i||(i=m?ue.restDelta.granular:ue.restDelta.default);let y;if(b<1){const j=Ql(g,b);y=k=>{const T=Math.exp(-b*g*k);return a-T*((v+b*g*w)/j*Math.sin(j*k)+w*Math.cos(j*k))}}else if(b===1)y=j=>a-Math.exp(-g*j)*(w+(v+g*w)*j);else{const j=g*Math.sqrt(b*b-1);y=k=>{const T=Math.exp(-b*g*k),C=Math.min(j*k,300);return a-T*((v+b*g*w)*Math.sinh(C)+j*w*Math.cosh(C))/j}}const S={calculatedDuration:x&&p||null,next:j=>{const k=y(j);if(x)l.done=j>=p;else{let T=0;b<1&&(T=j===0?Dt(v):Mg(y,j,k));const C=Math.abs(T)<=r,V=Math.abs(a-k)<=i;l.done=C&&V}return l.value=l.done?a:k,l},toString:()=>{const j=Math.min(ng(S),Ul),k=rg(T=>S.next(j*T).value,j,30);return j+"ms "+k}};return S}function _p({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},x=C=>l!==void 0&&C<l||c!==void 0&&C>c,v=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let b=n*t;const w=p+b,g=a===void 0?w:a(w);g!==w&&(b=g-p);const m=C=>-b*Math.exp(-C/r),y=C=>g+m(C),S=C=>{const V=m(C),D=y(C);f.done=Math.abs(V)<=u,f.value=f.done?g:D};let j,k;const T=C=>{x(f.value)&&(j=C,k=Fg({keyframes:[f.value,v(f.value)],velocity:Mg(y,C,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:C=>{let V=!1;return!k&&j===void 0&&(V=!0,S(C),T(C)),j!==void 0&&C>=j?k.next(C-j):(!V&&S(C),f)}}}const jw=to(.42,0,1,1),Sw=to(0,0,.58,1),Og=to(.42,0,.58,1),kw=e=>Array.isArray(e)&&typeof e[0]!="number",Cw={linear:Le,easeIn:jw,easeInOut:Og,easeOut:Sw,circIn:Au,circInOut:yg,circOut:xg,backIn:Pu,backInOut:hg,backOut:mg,anticipate:gg},Wp=e=>{if(ju(e)){L0(e.length===4);const[t,n,r,i]=e;return to(t,n,r,i)}else if(typeof e=="string")return Cw[e];return e};function Ew(e,t,n){const r=[],i=n||Lg,s=e.length-1;for(let a=0;a<s;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||Le:t;l=no(c,l)}r.push(l)}return r}function Mu(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(L0(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=Ew(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let p=0;if(c>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const f=Hn(e[p],e[p+1],d);return l[p](f)};return n?d=>u(Tt(e[0],e[s-1],d)):u}function Tw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Hn(0,t,r);e.push(ae(n,1,i))}}function Vg(e){const t=[0];return Tw(t,e.length-1),t}function Nw(e,t){return e.map(n=>n*t)}function Pw(e,t){return e.map(()=>t||Og).splice(0,e.length-1)}function ks({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=kw(r)?r.map(Wp):Wp(r),s={done:!1,value:t[0]},a=Nw(n&&n.length===t.length?n:Vg(t),e),l=Mu(a,t,{ease:Array.isArray(i)?i:Pw(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const Aw=e=>{const t=({timestamp:n})=>e(n);return{start:()=>q.update(t,!0),stop:()=>gt(t),now:()=>xe.isProcessing?xe.timestamp:Et.now()}},zw={decay:_p,inertia:_p,tween:ks,keyframes:ks,spring:Fg},Iw=e=>e/100;class qs extends Rg{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:c}=this.options;c&&c()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Du,l=(c,u)=>this.onKeyframesResolved(c,u);this.resolver=new a(s,l,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,l=wu(n)?n:zw[n]||ks;let c,u;l!==ks&&typeof t[0]!="number"&&(c=no(Iw,Lg(t[0],t[1])),t=[0,100]);const d=l({...this.options,keyframes:t});s==="mirror"&&(u=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=ng(d));const{calculatedDuration:p}=d,f=p+i,x=f*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:c,calculatedDuration:p,resolvedDuration:f,totalDuration:x}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:C}=this.options;return{done:!0,value:C[C.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:l,keyframes:c,calculatedDuration:u,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:x,repeatType:v,repeatDelay:b,onUpdate:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const g=this.currentTime-f*(this.speed>=0?1:-1),m=this.speed>=0?g<0:g>d;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let y=this.currentTime,S=s;if(x){const C=Math.min(this.currentTime,d)/p;let V=Math.floor(C),D=C%1;!D&&C>=1&&(D=1),D===1&&V--,V=Math.min(V,x+1),!!(V%2)&&(v==="reverse"?(D=1-D,b&&(D-=b/p)):v==="mirror"&&(S=a)),y=Tt(0,1,D)*p}const j=m?{done:!1,value:c[0]}:S.next(y);l&&(j.value=l(j.value));let{done:k}=j;!m&&u!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return T&&i!==void 0&&(j.value=Xs(c,this.options,i)),w&&w(j.value),T&&this.finish(),j}get duration(){const{resolved:t}=this;return t?Lt(t.calculatedDuration):0}get time(){return Lt(this.currentTime)}set time(t){t=Dt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Lt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Aw,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}function Rw(e){return new qs(e)}const Dw=new Set(["opacity","clipPath","filter","transform"]);function Lw(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:l="easeInOut",times:c}={}){const u={[t]:n};c&&(u.offset=c);const d=og(l,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const Mw=su(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Cs=10,Fw=2e4;function Ow(e){return wu(e.type)||e.type==="spring"||!ig(e.ease)}function Vw(e,t){const n=new qs({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<Fw;)r=n.sample(s),i.push(r.value),s+=Cs;return{times:void 0,keyframes:i,duration:s-Cs,ease:"linear"}}const Bg={anticipate:gg,backInOut:hg,circInOut:yg};function Bw(e){return e in Bg}class Hp extends Rg{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Ig(s,(a,l)=>this.onKeyframesResolved(a,l),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!l.owner||!l.owner.current)return!1;if(typeof s=="string"&&js()&&Bw(s)&&(s=Bg[s]),Ow(this.options)){const{onComplete:p,onUpdate:f,motionValue:x,element:v,...b}=this.options,w=Vw(t,b);t=w.keyframes,t.length===1&&(t[1]=t[0]),r=w.duration,i=w.times,s=w.ease,a="keyframes"}const d=Lw(l.owner.current,c,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(Tp(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:p}=this.options;l.set(Xs(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Lt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Lt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Dt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Le;const{animation:r}=n;Tp(r,t)}return Le}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:l}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:p,element:f,...x}=this.options,v=new qs({...x,keyframes:r,duration:i,type:s,ease:a,times:l,isGenerator:!0}),b=Dt(this.time);u.setWithVelocity(v.sample(b-Cs).value,v.sample(b).value,Cs)}const{onStop:c}=this.options;c&&c(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:l}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=n.owner.getProps();return Mw()&&r&&Dw.has(r)&&!c&&!u&&!i&&s!=="mirror"&&a!==0&&l!=="inertia"}}const _w={type:"spring",stiffness:500,damping:25,restSpeed:10},Ww=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Hw={type:"keyframes",duration:.8},Uw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$w=(e,{keyframes:t})=>t.length>2?Hw:Yn.has(e)?e.startsWith("scale")?Ww(t[1]):_w:Uw;function Yw({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:l,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const Fu=(e,t,n,r={},i,s)=>a=>{const l=bu(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Dt(c);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};Yw(l)||(d={...d,...$w(e,d)}),d.duration&&(d.duration=Dt(d.duration)),d.repeatDelay&&(d.repeatDelay=Dt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!s&&t.get()!==void 0){const f=Xs(d.keyframes,l);if(f!==void 0)return q.update(()=>{d.onUpdate(f),d.onComplete()}),new fb([])}return!s&&Hp.supports(d)?new Hp(d):new qs(d)};function Kw({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function _g(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:l,...c}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in c){const f=e.getValue(p,(s=e.latestValues[p])!==null&&s!==void 0?s:null),x=c[p];if(x===void 0||d&&Kw(d,p))continue;const v={delay:n,...bu(a||{},p)};let b=!1;if(window.MotionHandoffAnimation){const g=ug(e);if(g){const m=window.MotionHandoffAnimation(g,p,q);m!==null&&(v.startTime=m,b=!0)}}Yl(e,p),f.start(Fu(p,f,x,e.shouldReduceMotion&&cg.has(p)?{type:!1}:v,e,b));const w=f.animation;w&&u.push(w)}return l&&Promise.all(u).then(()=>{q.update(()=>{l&&Eb(e,l)})}),u}function Zl(e,t,n={}){var r;const i=Gs(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(_g(e,i,n)):()=>Promise.resolve(),l=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=s;return Gw(e,t,d+u,p,f,n)}:()=>Promise.resolve(),{when:c}=s;if(c){const[u,d]=c==="beforeChildren"?[a,l]:[l,a];return u().then(()=>d())}else return Promise.all([a(),l(n.delay)])}function Gw(e,t,n=0,r=0,i=1,s){const a=[],l=(e.variantChildren.size-1)*r,c=i===1?(u=0)=>u*r:(u=0)=>l-u*r;return Array.from(e.variantChildren).sort(Xw).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Zl(u,t,{...s,delay:n+c(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function Xw(e,t){return e.sortNodePosition(t)}function qw(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Zl(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Zl(e,t,n);else{const i=typeof t=="function"?Gs(e,t,n.custom):t;r=Promise.all(_g(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Jw=lu.length;function Wg(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Wg(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Jw;n++){const r=lu[n],i=e.props[r];(_i(i)||i===!1)&&(t[r]=i)}return t}const Qw=[...au].reverse(),Zw=au.length;function ej(e){return t=>Promise.all(t.map(({animation:n,options:r})=>qw(e,n,r)))}function tj(e){let t=ej(e),n=Up(),r=!0;const i=c=>(u,d)=>{var p;const f=Gs(e,d,c==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:x,transitionEnd:v,...b}=f;u={...u,...b,...v}}return u};function s(c){t=c(e)}function a(c){const{props:u}=e,d=Wg(e.parent)||{},p=[],f=new Set;let x={},v=1/0;for(let w=0;w<Zw;w++){const g=Qw[w],m=n[g],y=u[g]!==void 0?u[g]:d[g],S=_i(y),j=g===c?m.isActive:null;j===!1&&(v=w);let k=y===d[g]&&y!==u[g]&&S;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),m.protectedKeys={...x},!m.isActive&&j===null||!y&&!m.prevProp||Ys(y)||typeof y=="boolean")continue;const T=nj(m.prevProp,y);let C=T||g===c&&m.isActive&&!k&&S||w>v&&S,V=!1;const D=Array.isArray(y)?y:[y];let O=D.reduce(i(g),{});j===!1&&(O={});const{prevResolvedValues:B={}}=m,$={...B,...O},F=z=>{C=!0,f.has(z)&&(V=!0,f.delete(z)),m.needsAnimating[z]=!0;const E=e.getValue(z);E&&(E.liveStyle=!1)};for(const z in $){const E=O[z],M=B[z];if(x.hasOwnProperty(z))continue;let W=!1;Hl(E)&&Hl(M)?W=!eg(E,M):W=E!==M,W?E!=null?F(z):f.add(z):E!==void 0&&f.has(z)?F(z):m.protectedKeys[z]=!0}m.prevProp=y,m.prevResolvedValues=O,m.isActive&&(x={...x,...O}),r&&e.blockInitialAnimation&&(C=!1),C&&(!(k&&T)||V)&&p.push(...D.map(z=>({animation:z,options:{type:g}})))}if(f.size){const w={};f.forEach(g=>{const m=e.getBaseTarget(g),y=e.getValue(g);y&&(y.liveStyle=!0),w[g]=m??null}),p.push({animation:w})}let b=!!p.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,b?t(p):Promise.resolve()}function l(c,u){var d;if(n[c].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var x;return(x=f.animationState)===null||x===void 0?void 0:x.setActive(c,u)}),n[c].isActive=u;const p=a(c);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:a,setActive:l,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Up(),r=!0}}}function nj(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!eg(t,e):!1}function Cn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Up(){return{animate:Cn(!0),whileInView:Cn(),whileHover:Cn(),whileTap:Cn(),whileDrag:Cn(),whileFocus:Cn(),exit:Cn()}}class bn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class rj extends bn{constructor(t){super(t),t.animationState||(t.animationState=tj(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ys(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let ij=0;class oj extends bn{constructor(){super(...arguments),this.id=ij++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const sj={animation:{Feature:rj},exit:{Feature:oj}};function Ui(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ro(e){return{point:{x:e.pageX,y:e.pageY}}}const aj=e=>t=>ku(t)&&e(t,ro(t));function xi(e,t,n,r){return Ui(e,t,aj(n),r)}const $p=(e,t)=>Math.abs(e-t);function lj(e,t){const n=$p(e.x,t.x),r=$p(e.y,t.y);return Math.sqrt(n**2+r**2)}class Hg{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Ra(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,x=lj(p.offset,{x:0,y:0})>=3;if(!f&&!x)return;const{point:v}=p,{timestamp:b}=xe;this.history.push({...v,timestamp:b});const{onStart:w,onMove:g}=this.handlers;f||(w&&w(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Ia(f,this.transformPagePoint),q.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:x,onSessionEnd:v,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Ra(p.type==="pointercancel"?this.lastMoveEventInfo:Ia(f,this.transformPagePoint),this.history);this.startEvent&&x&&x(p,w),v&&v(p,w)},!ku(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=ro(t),l=Ia(a,this.transformPagePoint),{point:c}=l,{timestamp:u}=xe;this.history=[{...c,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Ra(l,this.history)),this.removeListeners=no(xi(this.contextWindow,"pointermove",this.handlePointerMove),xi(this.contextWindow,"pointerup",this.handlePointerUp),xi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),gt(this.updatePoint)}}function Ia(e,t){return t?{point:t(e.point)}:e}function Yp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ra({point:e},t){return{point:e,delta:Yp(e,Ug(t)),offset:Yp(e,cj(t)),velocity:uj(t,.1)}}function cj(e){return e[0]}function Ug(e){return e[e.length-1]}function uj(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ug(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Dt(t)));)n--;if(!r)return{x:0,y:0};const s=Lt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const $g=1e-4,dj=1-$g,pj=1+$g,Yg=.01,fj=0-Yg,mj=0+Yg;function Xe(e){return e.max-e.min}function hj(e,t,n){return Math.abs(e-t)<=n}function Kp(e,t,n,r=.5){e.origin=r,e.originPoint=ae(t.min,t.max,e.origin),e.scale=Xe(n)/Xe(t),e.translate=ae(n.min,n.max,e.origin)-e.originPoint,(e.scale>=dj&&e.scale<=pj||isNaN(e.scale))&&(e.scale=1),(e.translate>=fj&&e.translate<=mj||isNaN(e.translate))&&(e.translate=0)}function yi(e,t,n,r){Kp(e.x,t.x,n.x,r?r.originX:void 0),Kp(e.y,t.y,n.y,r?r.originY:void 0)}function Gp(e,t,n){e.min=n.min+t.min,e.max=e.min+Xe(t)}function gj(e,t,n){Gp(e.x,t.x,n.x),Gp(e.y,t.y,n.y)}function Xp(e,t,n){e.min=t.min-n.min,e.max=e.min+Xe(t)}function vi(e,t,n){Xp(e.x,t.x,n.x),Xp(e.y,t.y,n.y)}function xj(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ae(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ae(n,e,r.max):Math.min(e,n)),e}function qp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function yj(e,{top:t,left:n,bottom:r,right:i}){return{x:qp(e.x,n,i),y:qp(e.y,t,r)}}function Jp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function vj(e,t){return{x:Jp(e.x,t.x),y:Jp(e.y,t.y)}}function bj(e,t){let n=.5;const r=Xe(e),i=Xe(t);return i>r?n=Hn(t.min,t.max-r,e.min):r>i&&(n=Hn(e.min,e.max-i,t.min)),Tt(0,1,n)}function wj(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ec=.35;function jj(e=ec){return e===!1?e=0:e===!0&&(e=ec),{x:Qp(e,"left","right"),y:Qp(e,"top","bottom")}}function Qp(e,t,n){return{min:Zp(e,t),max:Zp(e,n)}}function Zp(e,t){return typeof e=="number"?e:e[t]||0}const ef=()=>({translate:0,scale:1,origin:0,originPoint:0}),lr=()=>({x:ef(),y:ef()}),tf=()=>({min:0,max:0}),pe=()=>({x:tf(),y:tf()});function et(e){return[e("x"),e("y")]}function Kg({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Sj({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kj(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Da(e){return e===void 0||e===1}function tc({scale:e,scaleX:t,scaleY:n}){return!Da(e)||!Da(t)||!Da(n)}function Pn(e){return tc(e)||Gg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Gg(e){return nf(e.x)||nf(e.y)}function nf(e){return e&&e!=="0%"}function Es(e,t,n){const r=e-n,i=t*r;return n+i}function rf(e,t,n,r,i){return i!==void 0&&(e=Es(e,i,r)),Es(e,n,r)+t}function nc(e,t=0,n=1,r,i){e.min=rf(e.min,t,n,r,i),e.max=rf(e.max,t,n,r,i)}function Xg(e,{x:t,y:n}){nc(e.x,t.translate,t.scale,t.originPoint),nc(e.y,n.translate,n.scale,n.originPoint)}const of=.999999999999,sf=1.0000000000001;function Cj(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let l=0;l<i;l++){s=n[l],a=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ur(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Xg(e,a)),r&&Pn(s.latestValues)&&ur(e,s.latestValues))}t.x<sf&&t.x>of&&(t.x=1),t.y<sf&&t.y>of&&(t.y=1)}function cr(e,t){e.min=e.min+t,e.max=e.max+t}function af(e,t,n,r,i=.5){const s=ae(e.min,e.max,i);nc(e,t,n,s,r)}function ur(e,t){af(e.x,t.x,t.scaleX,t.scale,t.originX),af(e.y,t.y,t.scaleY,t.scale,t.originY)}function qg(e,t){return Kg(kj(e.getBoundingClientRect(),t))}function Ej(e,t,n){const r=qg(e,n),{scroll:i}=t;return i&&(cr(r.x,i.offset.x),cr(r.y,i.offset.y)),r}const Jg=({current:e})=>e?e.ownerDocument.defaultView:null,Tj=new WeakMap;class Nj{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pe(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ro(d).point)},s=(d,p)=>{const{drag:f,dragPropagation:x,onDragStart:v}=this.getProps();if(f&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wb(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),et(w=>{let g=this.getAxisMotionValue(w).get()||0;if(Ct.test(g)){const{projection:m}=this.visualElement;if(m&&m.layout){const y=m.layout.layoutBox[w];y&&(g=Xe(y)*(parseFloat(g)/100))}}this.originPoint[w]=g}),v&&q.postRender(()=>v(d,p)),Yl(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},a=(d,p)=>{const{dragPropagation:f,dragDirectionLock:x,onDirectionLock:v,onDrag:b}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:w}=p;if(x&&this.currentDirection===null){this.currentDirection=Pj(w),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,w),this.updateAxis("y",p.point,w),this.visualElement.render(),b&&b(d,p)},l=(d,p)=>this.stop(d,p),c=()=>et(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Hg(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Jg(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&q.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!No(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=xj(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&sr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=yj(i.layoutBox,n):this.constraints=!1,this.elastic=jj(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&et(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=wj(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!sr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=Ej(r,i.root,this.visualElement.getTransformPagePoint());let a=vj(i.layout.layoutBox,s);if(n){const l=n(Sj(a));this.hasMutatedConstraints=!!l,l&&(a=Kg(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=et(d=>{if(!No(d,n,this.currentDirection))return;let p=c&&c[d]||{};a&&(p={min:0,max:0});const f=i?200:1e6,x=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Yl(this.visualElement,t),r.start(Fu(t,r,0,n,this.visualElement,!1))}stopAnimation(){et(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){et(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){et(n=>{const{drag:r}=this.getProps();if(!No(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n];s.set(t[n]-ae(a,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!sr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};et(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=bj({min:c,max:c},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),et(a=>{if(!No(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(ae(c,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;Tj.set(this.visualElement,this);const t=this.visualElement.current,n=xi(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();sr(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),q.read(r);const a=Ui(window,"resize",()=>this.scalePositionWithinConstraints()),l=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(et(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=c[d].translate,p.set(p.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=ec,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function No(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Pj(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Aj extends bn{constructor(t){super(t),this.removeGroupControls=Le,this.removeListeners=Le,this.controls=new Nj(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Le}unmount(){this.removeGroupControls(),this.removeListeners()}}const lf=e=>(t,n)=>{e&&q.postRender(()=>e(t,n))};class zj extends bn{constructor(){super(...arguments),this.removePointerDownListener=Le}onPointerDown(t){this.session=new Hg(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jg(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:lf(t),onStart:lf(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&q.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=xi(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Uo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function cf(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Yr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(U.test(e))e=parseFloat(e);else return e;const n=cf(e,t.target.x),r=cf(e,t.target.y);return`${n}% ${r}%`}},Ij={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=mn.parse(e);if(i.length>5)return r;const s=mn.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=ae(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class Rj extends h.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;nb(Dj),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Uo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||q.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),uu.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Qg(e){const[t,n]=D0(),r=h.useContext(iu);return o.jsx(Rj,{...e,layoutGroup:r,switchLayoutGroup:h.useContext(_0),isPresent:t,safeToRemove:n})}const Dj={borderRadius:{...Yr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yr,borderTopRightRadius:Yr,borderBottomLeftRadius:Yr,borderBottomRightRadius:Yr,boxShadow:Ij};function Lj(e,t,n){const r=we(e)?e:wt(e);return r.start(Fu("",r,t,n)),r.animation}function Mj(e){return e instanceof SVGElement&&e.tagName!=="svg"}const Fj=(e,t)=>e.depth-t.depth;class Oj{constructor(){this.children=[],this.isDirty=!1}add(t){Cu(this.children,t),this.isDirty=!0}remove(t){Eu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Fj),this.isDirty=!1,this.children.forEach(t)}}function Vj(e,t){const n=Et.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(gt(r),e(s-t))};return q.read(r,!0),()=>gt(r)}const Zg=["TopLeft","TopRight","BottomLeft","BottomRight"],Bj=Zg.length,uf=e=>typeof e=="string"?parseFloat(e):e,df=e=>typeof e=="number"||U.test(e);function _j(e,t,n,r,i,s){i?(e.opacity=ae(0,n.opacity!==void 0?n.opacity:1,Wj(r)),e.opacityExit=ae(t.opacity!==void 0?t.opacity:1,0,Hj(r))):s&&(e.opacity=ae(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<Bj;a++){const l=`border${Zg[a]}Radius`;let c=pf(t,l),u=pf(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||df(c)===df(u)?(e[l]=Math.max(ae(uf(c),uf(u),r),0),(Ct.test(u)||Ct.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=ae(t.rotate||0,n.rotate||0,r))}function pf(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Wj=ex(0,.5,xg),Hj=ex(.5,.95,Le);function ex(e,t,n){return r=>r<e?0:r>t?1:n(Hn(e,t,r))}function ff(e,t){e.min=t.min,e.max=t.max}function Ze(e,t){ff(e.x,t.x),ff(e.y,t.y)}function mf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function hf(e,t,n,r,i){return e-=t,e=Es(e,1/n,r),i!==void 0&&(e=Es(e,1/i,r)),e}function Uj(e,t=0,n=1,r=.5,i,s=e,a=e){if(Ct.test(t)&&(t=parseFloat(t),t=ae(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=ae(s.min,s.max,r);e===s&&(l-=t),e.min=hf(e.min,t,n,l,i),e.max=hf(e.max,t,n,l,i)}function gf(e,t,[n,r,i],s,a){Uj(e,t[n],t[r],t[i],t.scale,s,a)}const $j=["x","scaleX","originX"],Yj=["y","scaleY","originY"];function xf(e,t,n,r){gf(e.x,t,$j,n?n.x:void 0,r?r.x:void 0),gf(e.y,t,Yj,n?n.y:void 0,r?r.y:void 0)}function yf(e){return e.translate===0&&e.scale===1}function tx(e){return yf(e.x)&&yf(e.y)}function vf(e,t){return e.min===t.min&&e.max===t.max}function Kj(e,t){return vf(e.x,t.x)&&vf(e.y,t.y)}function bf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function nx(e,t){return bf(e.x,t.x)&&bf(e.y,t.y)}function wf(e){return Xe(e.x)/Xe(e.y)}function jf(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Gj{constructor(){this.members=[]}add(t){Cu(this.members,t),t.scheduleRender()}remove(t){if(Eu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Xj(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:p,rotateY:f,skewX:x,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),x&&(r+=`skewX(${x}deg) `),v&&(r+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const An={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ri=typeof window<"u"&&window.MotionDebug!==void 0,La=["","X","Y","Z"],qj={visibility:"hidden"},Sf=1e3;let Jj=0;function Ma(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function rx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ug(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",q,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&rx(r)}function ix({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=Jj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ri&&(An.totalNodes=An.resolvedTargetDeltas=An.recalculatedProjection=0),this.nodes.forEach(eS),this.nodes.forEach(oS),this.nodes.forEach(sS),this.nodes.forEach(tS),ri&&window.MotionDebug.record(An)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Oj)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Tu),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Mj(a),this.instance=a;const{layoutId:c,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(u||c)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=Vj(f,250),Uo.hasAnimatedSinceResize&&(Uo.hasAnimatedSinceResize=!1,this.nodes.forEach(Cf))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&d&&(c||u)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:x,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||d.getDefaultTransition()||dS,{onLayoutAnimationStart:w,onLayoutAnimationComplete:g}=d.getProps(),m=!this.targetLayout||!nx(this.targetLayout,v)||x,y=!f&&x;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,y);const S={...bu(b,"layout"),onPlay:w,onComplete:g};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else f||Cf(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,gt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(aS),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&rx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(kf);return}this.isUpdating||this.nodes.forEach(rS),this.isUpdating=!1,this.nodes.forEach(iS),this.nodes.forEach(Qj),this.nodes.forEach(Zj),this.clearAllSnapshots();const l=Et.now();xe.delta=Tt(0,1e3/60,l-xe.timestamp),xe.timestamp=l,xe.isProcessing=!0,Ea.update.process(xe),Ea.preRender.process(xe),Ea.render.process(xe),xe.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nS),this.sharedNodes.forEach(lS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,q.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){q.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pe(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!tx(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(l||Pn(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),pS(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:l}=this.options;if(!l)return pe();const c=l.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(fS))){const{scroll:d}=this.root;d&&(cr(c.x,d.offset.x),cr(c.y,d.offset.y))}return c}removeElementScroll(a){var l;const c=pe();if(Ze(c,a),!((l=this.scroll)===null||l===void 0)&&l.wasRoot)return c;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&Ze(c,a),cr(c.x,p.offset.x),cr(c.y,p.offset.y))}return c}applyTransform(a,l=!1){const c=pe();Ze(c,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!l&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ur(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Pn(d.latestValues)&&ur(c,d.latestValues)}return Pn(this.latestValues)&&ur(c,this.latestValues),c}removeTransform(a){const l=pe();Ze(l,a);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Pn(u.latestValues))continue;tc(u.latestValues)&&u.updateSnapshot();const d=pe(),p=u.measurePageBox();Ze(d,p),xf(l,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Pn(this.latestValues)&&xf(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xe.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==c;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=xe.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),vi(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),Ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pe(),this.targetWithTransforms=pe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),gj(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ze(this.target,this.layout.layoutBox),Xg(this.target,this.targetDelta)):Ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pe(),this.relativeTargetOrigin=pe(),vi(this.relativeTargetOrigin,this.target,x.target),Ze(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ri&&An.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||tc(this.parent.latestValues)||Gg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===xe.timestamp&&(u=!1),u)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;Ze(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,x=this.treeScale.y;Cj(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=pe());const{target:v}=l;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(mf(this.prevProjectionDelta.x,this.projectionDelta.x),mf(this.prevProjectionDelta.y,this.projectionDelta.y)),yi(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==x||!jf(this.projectionDelta.x,this.prevProjectionDelta.x)||!jf(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),ri&&An.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)===null||l===void 0||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=lr(),this.projectionDelta=lr(),this.projectionDeltaWithTransform=lr()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},p=lr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=pe(),x=c?c.source:void 0,v=this.layout?this.layout.source:void 0,b=x!==v,w=this.getStack(),g=!w||w.members.length<=1,m=!!(b&&!g&&this.options.crossfade===!0&&!this.path.some(uS));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const j=S/1e3;Ef(p.x,a.x,j),Ef(p.y,a.y,j),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),cS(this.relativeTarget,this.relativeTargetOrigin,f,j),y&&Kj(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=pe()),Ze(y,this.relativeTarget)),b&&(this.animationValues=d,_j(d,u,this.latestValues,j,m,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=j},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(gt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=q.update(()=>{Uo.hasAnimatedSinceResize=!0,this.currentAnimation=Lj(0,Sf,{...a,onUpdate:l=>{this.mixTargetDelta(l),a.onUpdate&&a.onUpdate(l)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Sf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&ox(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||pe();const p=Xe(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+p;const f=Xe(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+f}Ze(l,c),ur(l,d),yi(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Gj),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:l}=this.options;return l?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:l}=this.options;return l?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&Ma("z",a,u,this.animationValues);for(let d=0;d<La.length;d++)Ma(`rotate${La[d]}`,a,u,this.animationValues),Ma(`skew${La[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return qj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Wo(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Wo(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Pn(this.latestValues)&&(b.transform=d?d({},""):"none",this.hasProjected=!1),b}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),u.transform=Xj(this.projectionDeltaWithTransform,this.treeScale,f),d&&(u.transform=d(f,u.transform));const{x,y:v}=this.projectionDelta;u.transformOrigin=`${x.origin*100}% ${v.origin*100}% 0`,p.animationValues?u.opacity=p===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const b in ws){if(f[b]===void 0)continue;const{correct:w,applyTo:g}=ws[b],m=u.transform==="none"?f[b]:w(f[b],p);if(g){const y=g.length;for(let S=0;S<y;S++)u[g[S]]=m}else u[b]=m}return this.options.layoutId&&(u.pointerEvents=p===this?Wo(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(kf),this.root.sharedNodes.clear()}}}function Qj(e){e.updateLayout()}function Zj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?et(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],x=Xe(f);f.min=r[p].min,f.max=f.min+x}):ox(s,n.layoutBox,r)&&et(p=>{const f=a?n.measuredBox[p]:n.layoutBox[p],x=Xe(r[p]);f.max=f.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+x)});const l=lr();yi(l,r,n.layoutBox);const c=lr();a?yi(c,e.applyTransform(i,!0),n.measuredBox):yi(c,r,n.layoutBox);const u=!tx(l);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:x}=p;if(f&&x){const v=pe();vi(v,n.layoutBox,f.layoutBox);const b=pe();vi(b,r,x.layoutBox),nx(v,b)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=v,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function eS(e){ri&&An.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function tS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function nS(e){e.clearSnapshot()}function kf(e){e.clearMeasurements()}function rS(e){e.isLayoutDirty=!1}function iS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Cf(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function oS(e){e.resolveTargetDelta()}function sS(e){e.calcProjection()}function aS(e){e.resetSkewAndRotation()}function lS(e){e.removeLeadSnapshot()}function Ef(e,t,n){e.translate=ae(t.translate,0,n),e.scale=ae(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tf(e,t,n,r){e.min=ae(t.min,n.min,r),e.max=ae(t.max,n.max,r)}function cS(e,t,n,r){Tf(e.x,t.x,n.x,r),Tf(e.y,t.y,n.y,r)}function uS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const dS={duration:.45,ease:[.4,0,.1,1]},Nf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Pf=Nf("applewebkit/")&&!Nf("chrome/")?Math.round:Le;function Af(e){e.min=Pf(e.min),e.max=Pf(e.max)}function pS(e){Af(e.x),Af(e.y)}function ox(e,t,n){return e==="position"||e==="preserve-aspect"&&!hj(wf(t),wf(n),.2)}function fS(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const mS=ix({attachResizeListener:(e,t)=>Ui(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fa={current:void 0},sx=ix({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fa.current){const e=new mS({});e.mount(window),e.setOptions({layoutScroll:!0}),Fa.current=e}return Fa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),hS={pan:{Feature:zj},drag:{Feature:Aj,ProjectionNode:sx,MeasureLayout:Qg}};function zf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&q.postRender(()=>s(t,ro(t)))}class gS extends bn{mount(){const{current:t}=this.node;t&&(this.unmount=gb(t,n=>(zf(this.node,n,"Start"),r=>zf(this.node,r,"End"))))}unmount(){}}class xS extends bn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=no(Ui(this.node.current,"focus",()=>this.onFocus()),Ui(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function If(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&q.postRender(()=>s(t,ro(t)))}class yS extends bn{mount(){const{current:t}=this.node;t&&(this.unmount=bb(t,n=>(If(this.node,n,"Start"),(r,{success:i})=>If(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const rc=new WeakMap,Oa=new WeakMap,vS=e=>{const t=rc.get(e.target);t&&t(e)},bS=e=>{e.forEach(vS)};function wS({root:e,...t}){const n=e||document;Oa.has(n)||Oa.set(n,{});const r=Oa.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(bS,{root:e,...t})),r[i]}function jS(e,t,n){const r=wS(t);return rc.set(e,n),r.observe(e),()=>{rc.delete(e),r.unobserve(e)}}const SS={some:0,all:1};class kS extends bn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:SS[i]},l=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=u?d:p;f&&f(c)};return jS(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(CS(t,n))&&this.startObserver()}unmount(){}}function CS({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const ES={inView:{Feature:kS},tap:{Feature:yS},focus:{Feature:xS},hover:{Feature:gS}},TS={layout:{ProjectionNode:sx,MeasureLayout:Qg}},ic={current:null},ax={current:!1};function NS(){if(ax.current=!0,!!ou)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ic.current=e.matches;e.addListener(t),t()}else ic.current=!1}const PS=[...zg,Ne,mn],AS=e=>PS.find(Ag(e)),Rf=new WeakMap;function zS(e,t,n){for(const r in t){const i=t[r],s=n[r];if(we(i))e.addValue(r,i);else if(we(s))e.addValue(r,wt(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,wt(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Df=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class IS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Du,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Et.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,q.render(this.render,!1,!0))};const{latestValues:c,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=l,this.blockInitialAnimation=!!s,this.isControllingVariants=Ks(n),this.isVariantNode=V0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in f){const v=f[x];c[x]!==void 0&&we(v)&&v.set(c[x],!1)}}mount(t){this.current=t,Rf.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),ax.current||NS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ic.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Rf.delete(this.current),this.projection&&this.projection.unmount(),gt(this.notifyUpdate),gt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Yn.has(t),i=n.on("change",l=>{this.latestValues[t]=l,this.props.onUpdate&&q.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in kr){const n=kr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Df.length;r++){const i=Df[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=zS(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=wt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Ng(i)||vg(i))?i=parseFloat(i):!AS(i)&&mn.test(n)&&(i=Cg(t,n)),this.setBaseTarget(t,we(i)?i.get():i)),we(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=pu(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!we(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Tu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class lx extends IS{constructor(){super(...arguments),this.KeyframeResolver=Ig}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;we(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function RS(e){return window.getComputedStyle(e)}class DS extends lx{constructor(){super(...arguments),this.type="html",this.renderInstance=G0}readValueFromInstance(t,n){if(Yn.has(n)){const r=Ru(n);return r&&r.default||0}else{const r=RS(t),i=($0(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return qg(t,n)}build(t,n,r){hu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return vu(t,n,r)}}class LS extends lx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Yn.has(n)){const r=Ru(n);return r&&r.default||0}return n=X0.has(n)?n:cu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Q0(t,n,r)}build(t,n,r){gu(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){q0(t,n,r,i)}mount(t){this.isSVGTag=yu(t.tagName),super.mount(t)}}const MS=(e,t)=>du(e)?new LS(t):new DS(t,{allowProjection:e!==h.Fragment}),FS=db({...sj,...ES,...hS,...TS},MS),P=E2(FS);function cx(e,t){let n;const r=()=>{const{currentTime:i}=t,a=(i===null?0:i.value)/100;n!==a&&e(a),n=a};return q.update(r,!0),()=>gt(r)}const $o=new WeakMap;let Gt;function OS(e,t){if(t){const{inlineSize:n,blockSize:r}=t[0];return{width:n,height:r}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function VS({target:e,contentRect:t,borderBoxSize:n}){var r;(r=$o.get(e))===null||r===void 0||r.forEach(i=>{i({target:e,contentSize:t,get size(){return OS(e,n)}})})}function BS(e){e.forEach(VS)}function _S(){typeof ResizeObserver>"u"||(Gt=new ResizeObserver(BS))}function WS(e,t){Gt||_S();const n=Su(e);return n.forEach(r=>{let i=$o.get(r);i||(i=new Set,$o.set(r,i)),i.add(t),Gt==null||Gt.observe(r)}),()=>{n.forEach(r=>{const i=$o.get(r);i==null||i.delete(t),i!=null&&i.size||Gt==null||Gt.unobserve(r)})}}const Yo=new Set;let bi;function HS(){bi=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};Yo.forEach(n=>n(t))},window.addEventListener("resize",bi)}function US(e){return Yo.add(e),bi||HS(),()=>{Yo.delete(e),!Yo.size&&bi&&(bi=void 0)}}function $S(e,t){return typeof e=="function"?US(e):WS(e,t)}const YS=50,Lf=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),KS=()=>({time:0,x:Lf(),y:Lf()}),GS={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Mf(e,t,n,r){const i=n[t],{length:s,position:a}=GS[t],l=i.current,c=n.time;i.current=e[`scroll${a}`],i.scrollLength=e[`scroll${s}`]-e[`client${s}`],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=Hn(0,i.scrollLength,i.current);const u=r-c;i.velocity=u>YS?0:Nu(i.current-l,u)}function XS(e,t,n){Mf(e,"x",t,n),Mf(e,"y",t,n),t.time=n}function qS(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const i=r.getBoundingClientRect();r=r.parentElement;const s=r.getBoundingClientRect();n.x+=i.left-s.left,n.y+=i.top-s.top}else if(r instanceof SVGGraphicsElement){const{x:i,y:s}=r.getBBox();n.x+=i,n.y+=s;let a=null,l=r.parentNode;for(;!a;)l.tagName==="svg"&&(a=l),l=r.parentNode;r=a}else break;return n}const oc={start:0,center:.5,end:1};function Ff(e,t,n=0){let r=0;if(e in oc&&(e=oc[e]),typeof e=="string"){const i=parseFloat(e);e.endsWith("px")?r=i:e.endsWith("%")?e=i/100:e.endsWith("vw")?r=i/100*document.documentElement.clientWidth:e.endsWith("vh")?r=i/100*document.documentElement.clientHeight:e=i}return typeof e=="number"&&(r=t*e),n+r}const JS=[0,0];function QS(e,t,n,r){let i=Array.isArray(e)?e:JS,s=0,a=0;return typeof e=="number"?i=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?i=e.split(" "):i=[e,oc[e]?e:"0"]),s=Ff(i[0],n,r),a=Ff(i[1],t),s-a}const ZS={All:[[0,0],[1,1]]},e4={x:0,y:0};function t4(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function n4(e,t,n){const{offset:r=ZS.All}=n,{target:i=e,axis:s="y"}=n,a=s==="y"?"height":"width",l=i!==e?qS(i,e):e4,c=i===e?{width:e.scrollWidth,height:e.scrollHeight}:t4(i),u={width:e.clientWidth,height:e.clientHeight};t[s].offset.length=0;let d=!t[s].interpolate;const p=r.length;for(let f=0;f<p;f++){const x=QS(r[f],u[a],c[a],l[s]);!d&&x!==t[s].interpolatorOffsets[f]&&(d=!0),t[s].offset[f]=x}d&&(t[s].interpolate=Mu(t[s].offset,Vg(r),{clamp:!1}),t[s].interpolatorOffsets=[...t[s].offset]),t[s].progress=Tt(0,1,t[s].interpolate(t[s].current))}function r4(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function i4(e,t,n,r={}){return{measure:()=>r4(e,r.target,n),update:i=>{XS(e,n,i),(r.offset||r.target)&&n4(e,n,r)},notify:()=>t(n)}}const Kr=new WeakMap,Of=new WeakMap,Va=new WeakMap,Vf=e=>e===document.documentElement?window:e;function Ou(e,{container:t=document.documentElement,...n}={}){let r=Va.get(t);r||(r=new Set,Va.set(t,r));const i=KS(),s=i4(t,e,i,n);if(r.add(s),!Kr.has(t)){const l=()=>{for(const f of r)f.measure()},c=()=>{for(const f of r)f.update(xe.timestamp)},u=()=>{for(const f of r)f.notify()},d=()=>{q.read(l,!1,!0),q.read(c,!1,!0),q.update(u,!1,!0)};Kr.set(t,d);const p=Vf(t);window.addEventListener("resize",d,{passive:!0}),t!==document.documentElement&&Of.set(t,$S(t,d)),p.addEventListener("scroll",d,{passive:!0})}const a=Kr.get(t);return q.read(a,!1,!0),()=>{var l;gt(a);const c=Va.get(t);if(!c||(c.delete(s),c.size))return;const u=Kr.get(t);Kr.delete(t),u&&(Vf(t).removeEventListener("scroll",u),(l=Of.get(t))===null||l===void 0||l(),window.removeEventListener("resize",u))}}function o4({source:e,container:t,axis:n="y"}){e&&(t=e);const r={value:0},i=Ou(s=>{r.value=s[n].progress*100},{container:t,axis:n});return{currentTime:r,cancel:i}}const Ba=new Map;function ux({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Ba.has(t)||Ba.set(t,{});const r=Ba.get(t);return r[n]||(r[n]=tg()?new ScrollTimeline({source:t,axis:n}):o4({source:t,axis:n})),r[n]}function s4(e){return e.length===2}function dx(e){return e&&(e.target||e.offset)}function a4(e,t){return s4(e)||dx(t)?Ou(n=>{e(n[t.axis].progress,n)},t):cx(e,ux(t))}function l4(e,t){if(e.flatten(),dx(t))return e.pause(),Ou(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=ux(t);return e.attachTimeline?e.attachTimeline(n,r=>(r.pause(),cx(i=>{r.time=r.duration*i},n))):Le}}function c4(e,{axis:t="y",...n}={}){const r={axis:t,...n};return typeof e=="function"?a4(e,r):l4(e,r)}function Bf(e,t){y2(!!(!t||t.current))}const u4=()=>({scrollX:wt(0),scrollY:wt(0),scrollXProgress:wt(0),scrollYProgress:wt(0)});function d4({container:e,target:t,layoutEffect:n=!0,...r}={}){const i=Ir(u4);return(n?Zi:h.useEffect)(()=>(Bf("target",t),Bf("container",e),c4((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...r,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(r.offset)]),i}function px(e){const t=Ir(()=>wt(e)),{isStatic:n}=h.useContext(Qi);if(n){const[,r]=h.useState(e);h.useEffect(()=>t.on("change",r),[])}return t}function fx(e,t){const n=px(t()),r=()=>n.set(t());return r(),Zi(()=>{const i=()=>q.preRender(r,!1,!0),s=e.map(a=>a.on("change",i));return()=>{s.forEach(a=>a()),gt(r)}}),n}function _f(e){return typeof e=="number"?e:parseFloat(e)}function p4(e,t={}){const{isStatic:n}=h.useContext(Qi),r=h.useRef(null),i=px(we(e)?_f(e.get()):e),s=h.useRef(i.get()),a=h.useRef(()=>{}),l=()=>{const u=r.current;u&&u.time===0&&u.sample(xe.delta),c(),r.current=Rw({keyframes:[i.get(),s.current],velocity:i.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:a.current})},c=()=>{r.current&&r.current.stop()};return h.useInsertionEffect(()=>i.attach((u,d)=>n?d(u):(s.current=u,a.current=d,q.update(l),i.get()),c),[JSON.stringify(t)]),Zi(()=>{if(we(e))return e.on("change",u=>i.set(_f(u)))},[i]),i}const f4=e=>e&&typeof e=="object"&&e.mix,m4=e=>f4(e)?e.mix:void 0;function h4(...e){const t=!Array.isArray(e[0]),n=t?0:-1,r=e[0+n],i=e[1+n],s=e[2+n],a=e[3+n],l=Mu(i,s,{mixer:m4(s[0]),...a});return t?l(r):l}function g4(e){hi.current=[],e();const t=fx(hi.current,e);return hi.current=void 0,t}function x4(e,t,n,r){if(typeof e=="function")return g4(e);const i=typeof t=="function"?t:h4(t,n,r);return Array.isArray(e)?Wf(e,i):Wf([e],([s])=>i(s))}function Wf(e,t){const n=Ir(()=>[]);return fx(e,()=>{n.length=0;const r=e.length;for(let i=0;i<r;i++)n[i]=e[i].get();return t(n)})}const y4={some:0,all:1};function v4(e,t,{root:n,margin:r,amount:i="some"}={}){const s=Su(e),a=new WeakMap,l=u=>{u.forEach(d=>{const p=a.get(d.target);if(d.isIntersecting!==!!p)if(d.isIntersecting){const f=t(d);typeof f=="function"?a.set(d.target,f):c.unobserve(d.target)}else typeof p=="function"&&(p(d),a.delete(d.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:y4[i]});return s.forEach(u=>c.observe(u)),()=>c.disconnect()}function wn(e,{root:t,margin:n,amount:r,once:i=!1}={}){const[s,a]=h.useState(!1);return h.useEffect(()=>{if(!e.current||i&&s)return;const l=()=>(a(!0),i?void 0:()=>a(!1)),c={root:t&&t.current||void 0,margin:n,amount:r};return v4(e.current,l,c)},[t,e,n,i,r]),s}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mx=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=h.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>h.createElement("svg",{ref:c,...w4,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:mx("lucide",i),...l},[...a.map(([u,d])=>h.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=h.forwardRef(({className:r,...i},s)=>h.createElement(j4,{ref:s,iconNode:t,className:mx(`lucide-${b4(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=H("AlignLeft",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=H("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=H("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=H("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=H("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=H("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=H("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=H("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=H("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=H("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=H("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=H("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=H("Columns2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=H("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=H("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=H("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=H("Gem",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=H("Grid2x2",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=H("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=H("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=H("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=H("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=H("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=H("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=H("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=H("LayoutTemplate",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=H("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=H("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=H("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=H("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=H("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=H("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=H("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=H("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=H("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=H("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=H("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=H("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=H("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=H("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=H("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=H("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=H("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=H("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=H("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=H("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=H("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=H("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);async function Px(e){const t=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok){const n=await t.json().catch(()=>({}));throw new Error(n.error||"Failed to send enquiry.")}}const jn="/api",Vu="nivora_admin_token";function Bu(){return sessionStorage.getItem(Vu)}function J4(e){sessionStorage.setItem(Vu,e),sessionStorage.setItem("nivora_admin","true")}function _u(){sessionStorage.removeItem(Vu),sessionStorage.removeItem("nivora_admin")}async function Wu(e,t){const n=await fetch(`${jn}${e}`,{headers:{"Content-Type":"application/json"},...t});if(!n.ok){const r=await n.json().catch(()=>({}));throw new Error(r.error||`Request failed: ${n.status}`)}return n.json()}async function io(e,t){const r={"Content-Type":"application/json","x-admin-token":Bu()||"",...t==null?void 0:t.headers},i=await fetch(`${jn}${e}`,{...t,headers:r});if(i.status===403)throw _u(),window.location.href="/adminpannel",new Error("Session expired. Please log in again.");if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||`Request failed: ${i.status}`)}return i.json()}async function Q4(e,t){const n=await fetch(`${jn}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.error||"Login failed")}const r=await n.json();J4(r.token)}function Ax(){return Wu("/projects")}function Z4(e){return io("/projects/reorder",{method:"PUT",body:JSON.stringify({order:e})})}function zx(e){return Wu(`/projects/${e}`)}function e5(e){return io("/projects",{method:"POST",body:JSON.stringify(e)})}function t5(e,t){return io(`/projects/${e}`,{method:"PUT",body:JSON.stringify(t)})}function n5(e){return io(`/projects/${e}`,{method:"DELETE"})}function Ix(e){if(e.status===403)throw _u(),window.location.href="/adminpannel",new Error("Session expired. Please log in again.")}async function _a(e){const t=Bu()||"",n=new FormData;e.forEach(s=>n.append("images",s));const r=await fetch(`${jn}/projects/upload-images`,{method:"POST",headers:{"x-admin-token":t},body:n});if(Ix(r),!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.error||"Upload failed")}return(await r.json()).urls}async function r5(e){const t=Bu()||"",n=new FormData;n.append("image",e);const r=await fetch(`${jn}/site-settings/upload-image`,{method:"POST",headers:{"x-admin-token":t},body:n});if(Ix(r),!r.ok){const s=await r.json().catch(()=>({}));throw new Error(s.error||"Upload failed")}return(await r.json()).url}function Rx(){return Wu("/site-settings")}function i5(e){return io("/site-settings",{method:"PUT",body:JSON.stringify(e)})}const Hu="nivora_excel_token";function Dx(){return sessionStorage.getItem(Hu)}function o5(e){sessionStorage.setItem(Hu,e),sessionStorage.setItem("nivora_excel_admin","true")}function Uu(){sessionStorage.removeItem(Hu),sessionStorage.removeItem("nivora_excel_admin")}async function s5(e,t){const n=await fetch(`${jn}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:t})});if(!n.ok){const i=await n.json().catch(()=>({}));throw new Error(i.error||"Login failed")}const r=await n.json();o5(r.token)}async function $u(e,t){const r={"Content-Type":"application/json","x-admin-token":Dx()||"",...t==null?void 0:t.headers},i=await fetch(`${jn}${e}`,{...t,headers:r});if(i.status===403)throw Uu(),window.location.href="/excelsheet",new Error("Session expired. Please log in again.");if(!i.ok){const s=await i.json().catch(()=>({}));throw new Error(s.error||`Request failed: ${i.status}`)}return i.json()}function a5(e){const t=new Date().getTimezoneOffset();return $u(`/enquiries?date=${encodeURIComponent(e)}&timezoneOffset=${t}`)}function l5(e,t){return $u(`/enquiries/${e}`,{method:"PUT",body:JSON.stringify(t)})}function c5(e){return $u(`/enquiries/${e}`,{method:"DELETE"})}async function u5(e){const t=Dx()||"",n=new Date().getTimezoneOffset(),r=await fetch(`${jn}/enquiries/export?date=${encodeURIComponent(e)}&timezoneOffset=${n}`,{headers:{"x-admin-token":t}});if(r.status===403)throw Uu(),window.location.href="/excelsheet",new Error("Session expired. Please log in again.");if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(l.error||"Failed to export enquiries")}const i=await r.blob(),s=window.URL.createObjectURL(i),a=document.createElement("a");a.href=s,a.download=`nivora-enquiries-${Date.now()}.xlsx`,document.body.appendChild(a),a.click(),a.remove(),window.URL.revokeObjectURL(s)}let ii=null;const Go=[];function d5(){Go.forEach(e=>e())}function p5(e){ii=e??null,d5()}function Sn(){const[e,t]=h.useState(ii),[n,r]=h.useState(!ii);return h.useEffect(()=>{let i=!1;const s=()=>{Rx().then(l=>{i||(ii=l,t(l),r(!1))}).catch(()=>{i||r(!1)})};ii||(r(!0),s());const a=()=>{document.hidden||s()};return document.addEventListener("visibilitychange",a),Go.push(s),()=>{i=!0,document.removeEventListener("visibilitychange",a);const l=Go.indexOf(s);l!==-1&&Go.splice(l,1)}},[]),{settings:e,loading:n}}const f5="/nivora-logo.png",Yf=[{to:"/",label:"Home"},{to:"/portfolio",label:"Portfolio"},{to:"/services",label:"Services"},{to:"/about",label:"About"},{to:"/testimonials",label:"Testimonials"},{to:"/contact",label:"Contact"}],m5="#21291a",Po="#21291a",Wa="#C8A46A",Kf="#D4C0A1";function h5(){const[e,t]=h.useState(!1),[n,r]=h.useState(!1),i=Wt(),s=Ht(),{settings:a}=Sn(),l=(a==null?void 0:a.logoUrl)||f5;h.useEffect(()=>{const d=()=>t(window.scrollY>60);return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),h.useEffect(()=>{r(!1)},[i]);const c=d=>d==="/"?i.pathname==="/":i.pathname.startsWith(d),u=d=>{d.preventDefault(),i.pathname==="/"?(window.scrollTo({top:0,behavior:"smooth"}),s("/",{state:{_t:Date.now()}})):s("/")};return o.jsxs(o.Fragment,{children:[o.jsx("header",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,transition:"background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",backgroundColor:e?Po:`${m5}E8`,borderBottom:`1px solid rgba(212,192,161,${e?"0.18":"0.10"})`,backdropFilter:e?"blur(10px)":"none"},children:o.jsxs("div",{className:"navbar-inner max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20",children:[o.jsx("a",{href:"/",className:"navbar-logo",onClick:u,style:{display:"flex",alignItems:"center",textDecoration:"none",cursor:"pointer"},children:o.jsx("img",{src:l,alt:"Nivora Interiors",style:{height:`${(a==null?void 0:a.logoSize)??38}px`,width:"auto",objectFit:"contain"}})}),o.jsx("nav",{className:"hidden lg:flex items-center gap-8",children:Yf.map(d=>o.jsxs("a",{href:d.to,onClick:d.to==="/"?u:void 0,className:"text-xs tracking-[0.2em] uppercase font-light transition-colors duration-300 relative pb-1",style:{color:c(d.to)?Wa:Kf+"B3",textDecoration:"none",cursor:"pointer"},children:[d.label,c(d.to)&&o.jsx("span",{style:{position:"absolute",bottom:0,left:0,right:0,height:"1.5px",backgroundColor:Wa,borderRadius:"1px"}})]},d.to))}),o.jsx(he,{to:"/contact",className:"hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300",style:{background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:Po,fontWeight:500,letterSpacing:"0.18em",boxShadow:"0 2px 14px rgba(168,133,79,0.28)",border:"none"},onMouseEnter:d=>{const p=d.currentTarget;p.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",p.style.boxShadow="0 4px 22px rgba(168,133,79,0.45)",p.style.transform="translateY(-1px)"},onMouseLeave:d=>{const p=d.currentTarget;p.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",p.style.boxShadow="0 2px 14px rgba(168,133,79,0.28)",p.style.transform="translateY(0)"},children:"Enquire Now"}),o.jsx("button",{className:"lg:hidden p-2 mobile-ham-btn",style:{color:Kf},onClick:()=>r(d=>!d),"aria-label":"Toggle menu",children:n?o.jsx(bt,{size:22}):o.jsx(_4,{size:22})})]})}),o.jsxs("div",{className:`fixed inset-0 z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ${n?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`,style:{backgroundColor:Po},children:[Yf.map(d=>o.jsx(he,{to:d.to,className:"font-serif text-3xl transition-colors duration-300",style:{color:c(d.to)?Wa:"#f5f0e8"},children:d.label},d.to)),o.jsx(he,{to:"/contact",className:"mt-4 text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300",style:{background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:Po,fontWeight:500},children:"Enquire Now"})]})]})}const g5="/nivora-footer-logo.png";function x5(e){const[t,n]=h.useState(null);return h.useEffect(()=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const s=i.getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,i.width,i.height),l=a.data;for(let c=0;c<l.length;c+=4){const u=l[c],d=l[c+1],p=l[c+2];Math.abs(u-d)<28&&Math.abs(d-p)<28&&u>170&&d>160&&p>150&&(l[c+3]=0)}s.putImageData(a,0,0),n(i.toDataURL("image/png"))},r.onerror=()=>n(e),r.src=e},[e]),t}const y5=[{to:"/",label:"Home"},{to:"/portfolio",label:"Portfolio"},{to:"/services",label:"Services"},{to:"/about",label:"About"},{to:"/testimonials",label:"Testimonials"},{to:"/contact",label:"Contact"}],v5=[{to:"/services",label:"Residential Interiors"},{to:"/services",label:"Commercial Interiors"},{to:"/services",label:"Hospitality Interiors"},{to:"/services",label:"Architecture & Space Planning"},{to:"/services",label:"2D & 3D Visualization"},{to:"/services",label:"Renovation & Makeovers"}];function Gf({to:e,label:t}){return o.jsx("li",{style:{listStyle:"none"},children:o.jsxs(he,{to:e,style:{fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"#ede8e0",textDecoration:"none",letterSpacing:"0.04em",display:"inline-block",position:"relative",paddingBottom:2,transition:"color 0.3s ease",touchAction:"manipulation",WebkitTapHighlightColor:"transparent"},onMouseEnter:n=>{const r=n.currentTarget;r.style.color="#a18661";const i=r.querySelector(".link-bar");i&&(i.style.width="100%")},onMouseLeave:n=>{const r=n.currentTarget;r.style.color="#ede8e0";const i=r.querySelector(".link-bar");i&&(i.style.width="0%")},onTouchStart:n=>{const i=n.currentTarget.querySelector(".link-bar");i&&(i.style.transition="width 0.3s ease",i.style.width="100%",setTimeout(()=>{i.style.width="0%"},1e3))},children:[t,o.jsx("span",{className:"link-bar",style:{position:"absolute",bottom:0,left:0,height:1,width:"0%",background:"#a18661",transition:"width 0.3s ease",display:"block"}})]})})}function b5(){const{settings:e}=Sn(),t=(e==null?void 0:e.footerLogoUrl)||g5,n=x5(t),r=h.useRef(null),i=wn(r,{once:!0,amount:.1}),s=(a,l)=>({hidden:{opacity:0,x:a,y:a===0?20:0},visible:{opacity:1,x:0,y:0,transition:{duration:a!==0?.7:.6,delay:l,ease:[.22,1,.36,1]}}});return o.jsxs("footer",{ref:r,style:{backgroundColor:"#21291a",borderTop:"1px solid rgba(255,255,255,0.05)"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"footer-inner max-w-7xl mx-auto px-6 lg:px-12",style:{paddingTop:56,paddingBottom:28},children:[o.jsxs("div",{className:"footer-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0",children:[o.jsxs(P.div,{variants:s(-20,0),initial:"hidden",animate:i?"visible":"hidden",className:"footer-brand-col pr-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)",display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[o.jsx("a",{href:"/",style:{display:"block",marginBottom:24,textDecoration:"none",flexShrink:0},children:n?o.jsx("img",{src:n,alt:"Nivora Interiors",style:{display:"block",width:(e==null?void 0:e.footerLogoSize)??200,height:"auto",objectFit:"contain",opacity:.95,transition:"filter 0.3s ease"},onMouseEnter:a=>{a.currentTarget.style.filter="brightness(1.25)"},onMouseLeave:a=>{a.currentTarget.style.filter="brightness(1)"}}):o.jsx("div",{style:{width:200,height:80}})}),o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",color:"rgba(245,242,237,0.72)",fontSize:13,lineHeight:1.8,fontWeight:300,marginBottom:24,maxWidth:210},children:["Thoughtful spaces designed",o.jsx("br",{}),"for refined living."]})]}),o.jsxs(P.div,{variants:s(0,.1),initial:"hidden",animate:i?"visible":"hidden",className:"footer-nav-col px-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)"},children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"Navigate"}),o.jsx("ul",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",gap:12},children:y5.map(a=>o.jsx(Gf,{to:a.to,label:a.label},a.to))})]}),o.jsxs(P.div,{variants:s(0,.2),initial:"hidden",animate:i?"visible":"hidden",className:"footer-services-col px-10 pb-12 lg:pb-0",style:{borderRight:"1px solid rgba(255,255,255,0.08)"},children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"What We Do"}),o.jsx("ul",{style:{padding:0,margin:0,display:"flex",flexDirection:"column",gap:12},children:v5.map(a=>o.jsx(Gf,{to:a.to,label:a.label},a.label))})]}),o.jsxs(P.div,{variants:s(20,.3),initial:"hidden",animate:i?"visible":"hidden",className:"footer-findus-col pl-10 pb-12 lg:pb-0",children:[o.jsx("h4",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",color:"#c4a87a",marginBottom:24,fontWeight:400},children:"Find Us"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:9},children:[o.jsx(kx,{size:16,color:"#c4a87a",style:{flexShrink:0,marginTop:2}}),o.jsxs("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",lineHeight:1.7,margin:0},children:["Shop No. 01, New Dhavalgiri Building,",o.jsx("br",{}),"above Hindustan Co-Op Bank,",o.jsx("br",{}),"Ambernath East, Maharashtra 421501"]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.jsxs("a",{href:"mailto:nivora.inbox@gmail.com",style:{display:"flex",alignItems:"center",gap:9,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"#c4a87a",textDecoration:"none",transition:"opacity 0.25s ease"},onMouseEnter:a=>{a.currentTarget.style.opacity="0.75"},onMouseLeave:a=>{a.currentTarget.style.opacity="1"},children:[o.jsx(Sx,{size:16,color:"#c4a87a",style:{flexShrink:0}}),"nivora.inbox@gmail.com"]}),o.jsxs("a",{href:"tel:+917276687805",style:{display:"flex",alignItems:"center",gap:9,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",textDecoration:"none",transition:"color 0.25s ease"},onMouseEnter:a=>{a.currentTarget.style.color="#c4a87a"},onMouseLeave:a=>{a.currentTarget.style.color="rgba(245,242,237,0.78)"},children:[o.jsx(Ex,{size:16,color:"#c4a87a",style:{flexShrink:0}}),"+91 72766 87805"]})]}),o.jsxs("a",{href:"https://www.instagram.com/nivora.interiors",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram",style:{display:"flex",alignItems:"center",gap:9,marginTop:4,fontFamily:"'Jost', sans-serif",fontSize:13,fontWeight:300,color:"rgba(245,242,237,0.78)",textDecoration:"none",opacity:1,transition:"opacity 0.3s ease, color 0.25s ease"},onMouseEnter:a=>{const l=a.currentTarget;l.style.color="#c4a87a",l.style.textDecoration="underline"},onMouseLeave:a=>{const l=a.currentTarget;l.style.color="rgba(245,242,237,0.78)",l.style.textDecoration="none"},children:[o.jsx(wx,{size:16,color:"#c4a87a",style:{flexShrink:0}}),o.jsx("span",{children:"nivora.interiors"})]})]})]})]}),o.jsx(P.div,{className:"footer-divider",initial:{scaleX:0},animate:i?{scaleX:1}:{scaleX:0},transition:{duration:.8,delay:.2,ease:"easeOut"},style:{height:1,background:"rgba(161,134,97,0.55)",margin:"48px 0 0",transformOrigin:"left center"}}),o.jsxs(P.div,{initial:{opacity:0},animate:i?{opacity:1}:{opacity:0},transition:{duration:.5,delay:.5,ease:"easeOut"},className:"footer-bottom-bar",style:{paddingTop:20,paddingBottom:8,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:8,flexWrap:"wrap"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,fontWeight:300,color:"rgba(245,242,237,0.48)",margin:0},children:"© 2025 Nivora Interiors. All rights reserved."}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,fontWeight:300,color:"rgba(245,242,237,0.48)",margin:0},children:"Designed with intention."})]})]})]})}function w5(){const[e,t]=h.useState(!1),[n,r]=h.useState(!1);h.useEffect(()=>{const s=()=>t(window.scrollY>300);return window.addEventListener("scroll",s,{passive:!0}),s(),()=>window.removeEventListener("scroll",s)},[]);const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsx("button",{onClick:i,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),"aria-label":"Back to top",style:{position:"fixed",bottom:24,right:24,zIndex:50,width:56,height:56,borderRadius:"50%",background:n?"linear-gradient(135deg, #EDD09A 0%, #D4B07A 50%, #B89260 100%)":"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",border:"1px solid rgba(168,133,79,0.5)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:"0 4px 16px rgba(0,0,0,0.25)",opacity:e?1:0,pointerEvents:e?"auto":"none",transition:"opacity 0.35s ease, background-color 0.25s ease, transform 0.25s ease",transform:n?"translateY(-3px)":"translateY(0)"},children:o.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",style:{display:"block",transition:"transform 0.25s ease",transform:n?"translateY(-2px)":"translateY(0)"},children:o.jsx("path",{d:"M10 15V5M10 5L5 10M10 5L15 10",stroke:"#2A3926",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})})}const j5="/assets/nivora-logo-DiQ_wEqZ.png";function S5(e){const[t,n]=h.useState(null);return h.useEffect(()=>{const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{const i=document.createElement("canvas");i.width=r.naturalWidth,i.height=r.naturalHeight;const s=i.getContext("2d");s.drawImage(r,0,0);const a=s.getImageData(0,0,i.width,i.height),l=a.data;for(let c=0;c<l.length;c+=4){const u=l[c],d=l[c+1],p=l[c+2],f=Math.abs(u-d)<28&&Math.abs(d-p)<28,x=u>170&&d>160&&p>150;f&&x&&(l[c+3]=0)}s.putImageData(a,0,0),n(i.toDataURL("image/png"))},r.src=e},[e]),t}function k5({onExitComplete:e}){const[t,n]=h.useState(!0),r=S5(j5);return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx(Wl,{onExitComplete:e,children:t&&o.jsx(P.div,{initial:{opacity:1},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:"easeOut"},className:"splash-screen",style:{position:"fixed",inset:0,zIndex:9999,backgroundColor:"#21291a",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(Wl,{children:r&&o.jsxs(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1.1,ease:[.22,1,.36,1]},onAnimationComplete:()=>{setTimeout(()=>n(!1),900)},className:"logo-container",style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx("div",{className:"logo-glow",style:{position:"absolute",top:"50%",left:"50%",width:"600px",height:"600px",borderRadius:"50%",background:"#21291a",pointerEvents:"none",zIndex:0,opacity:0,animation:"glowPulse 2000ms ease-in-out forwards",animationDelay:"600ms"}}),o.jsx("img",{src:r,alt:"Nivora Interiors",style:{width:"clamp(220px, 30vw, 320px)",height:"auto",display:"block",position:"relative",zIndex:1,filter:"drop-shadow(0 0 20px rgba(201,166,107,0.28))"}})]},"logo")})},"intro-overlay")})]})}const C5=["Ambernath","Kalyan","Pune","Mumbai","Other"];let Gr=1;const Xf={enter:e=>({x:e>0?"100%":"-100%",opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e>0?"-100%":"100%",opacity:0})};function E5({splashDone:e}){const[t,n]=h.useState(!1),[r,i]=h.useState(1),[s,a]=h.useState("idle"),[l,c]=h.useState(""),[u,d]=h.useState(""),[p,f]=h.useState(""),[x,v]=h.useState(""),[b,w]=h.useState(""),[g,m]=h.useState(""),[y,S]=h.useState(""),[j,k]=h.useState({}),[T,C]=h.useState(""),V=h.useRef(null);h.useEffect(()=>{if(!e||sessionStorage.getItem("popupShown"))return;const z=setTimeout(()=>n(!0),4e3);return()=>clearTimeout(z)},[e]),h.useEffect(()=>(s==="success"&&(V.current=setTimeout(D,3e3)),()=>{V.current&&clearTimeout(V.current)}),[s]);const D=()=>{sessionStorage.setItem("popupShown","true"),n(!1)},O=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,B=()=>{const z={};return(!l.trim()||l.trim().length<2)&&(z.fullName="Please enter your full name (min 2 characters)."),u.replace(/\D/g,"").length!==10&&(z.phone="Please enter a valid 10-digit phone number."),(!p.trim()||!O.test(p.trim()))&&(z.email="Please enter a valid email address."),k(z),Object.keys(z).length===0},$=()=>{B()&&(Gr=1,i(2),k({}))},F=()=>{Gr=-1,i(1),k({})},Q=async()=>{const z={};if(b||(z.budget="Please select an estimated budget."),g||(z.location="Please select your project location."),k(z),Object.keys(z).length>0)return;a("submitting"),C("");const E={fullName:l.trim(),phone:`+91 ${u.trim()}`,email:p.trim(),spaceType:x,location:g,projectType:"",budget:b,referral:"",requirements:y,source:"Popup Form"};console.log("[Popup] Submitting form data:",E);try{await Px(E),a("success")}catch(M){a("error"),C(M instanceof Error?M.message:"Something went wrong. Please try again.")}};if(!t)return null;const R=l.trim().split(" ")[0]||"there";return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"cpopup-overlay",onClick:z=>{z.target===z.currentTarget&&D()},children:o.jsxs("div",{className:"cpopup-card",children:[o.jsx("button",{className:"cpopup-close",onClick:D,"aria-label":"Close",children:o.jsx(bt,{size:18})}),o.jsx("p",{className:"cpopup-sub",children:"Get a Free 30-Min Design Consultation"}),o.jsx("h2",{className:"cpopup-heading",children:"Planning your dream home?"}),o.jsx(Wl,{mode:"wait",custom:Gr,children:s==="success"?o.jsxs(P.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.4,ease:"easeOut"},style:{textAlign:"center",padding:"8px 0 4px"},children:[o.jsx(gx,{size:44,style:{color:"#a18661",margin:"0 auto 16px",display:"block"},strokeWidth:1.5}),o.jsxs("p",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"1.25rem",color:"#21291a",margin:"0 0 8px"},children:["Thank you, ",R,"!"]}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"#6b6258",margin:"0 0 24px",lineHeight:1.6},children:"We'll reach out to you within 24 hours."}),o.jsx("button",{className:"cpopup-btn-outline",onClick:D,children:"Close"})]},"success"):r===1?o.jsxs(P.div,{custom:Gr,variants:Xf,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3,ease:[.22,1,.36,1]},children:[o.jsxs("div",{className:"cpf-field-wrap",children:[o.jsxs("label",{className:"cpf-label",children:["Full Name ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("input",{className:"cpf-input",type:"text",placeholder:"Your full name",value:l,onChange:z=>{c(z.target.value),k(E=>({...E,fullName:""}))},autoComplete:"name"}),j.fullName&&o.jsx("p",{className:"cpf-error",children:j.fullName})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Phone Number ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-field-wrap",style:{marginBottom:0},children:o.jsxs("div",{className:"cpf-phone-row",children:[o.jsx("span",{className:"cpf-phone-prefix",children:"+91"}),o.jsx("input",{className:"cpf-phone-input",type:"tel",placeholder:"98765 43210",value:u,maxLength:10,onChange:z=>{const E=z.target.value.replace(/\D/g,"").slice(0,10);d(E),k(M=>({...M,phone:""}))},autoComplete:"tel",inputMode:"numeric"})]})}),j.phone&&o.jsx("p",{className:"cpf-error",children:j.phone})]}),o.jsxs("div",{className:"cpf-field-wrap",children:[o.jsxs("label",{className:"cpf-label",children:["Email Address ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("input",{className:"cpf-input",type:"email",placeholder:"your@email.com",value:p,onChange:z=>{f(z.target.value),k(E=>({...E,email:""}))},autoComplete:"email"}),j.email&&o.jsx("p",{className:"cpf-error",children:j.email})]}),o.jsxs("button",{className:"cpopup-btn",onClick:$,children:["Next ",o.jsx(He,{size:13})]}),o.jsx("p",{className:"cpf-progress",children:"Step 1 of 2"})]},"step1"):o.jsxs(P.div,{custom:Gr,variants:Xf,initial:"enter",animate:"center",exit:"exit",transition:{duration:.3,ease:[.22,1,.36,1]},children:[o.jsx("button",{className:"cpf-back",onClick:F,children:"← Back"}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsx("label",{className:"cpf-label",children:"Type of Space"}),o.jsx("div",{className:"cpf-field-wrap",style:{marginBottom:0},children:o.jsxs("select",{className:"cpf-input cpf-select",value:x,onChange:z=>v(z.target.value),style:{color:x===""?"#aaa":"#21291a",cursor:"pointer"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select a space type"}),["Residential","Commercial","Office","Retail","Villa/Bungalow","Other"].map(z=>o.jsx("option",{value:z,style:{color:"#21291a"},children:z},z))]})})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Estimated Budget ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-chips",children:["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"].map(z=>o.jsx("button",{type:"button",className:`cpf-chip${b===z?" selected":""}`,onClick:()=>{w(E=>E===z?"":z),k(E=>({...E,budget:""}))},children:z},z))}),j.budget&&o.jsx("p",{className:"cpf-error",children:j.budget})]}),o.jsxs("div",{style:{marginBottom:18},children:[o.jsxs("label",{className:"cpf-label",children:["Project Location ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"cpf-chips",children:C5.map(z=>o.jsx("button",{type:"button",className:`cpf-chip${g===z?" selected":""}`,onClick:()=>{m(E=>E===z?"":z),k(E=>({...E,location:""}))},children:z},z))}),j.location&&o.jsx("p",{className:"cpf-error",children:j.location})]}),o.jsxs("div",{style:{marginBottom:20},children:[o.jsx("label",{className:"cpf-label",children:"Brief Requirements"}),o.jsx("textarea",{className:"cpf-textarea",placeholder:"Tell us about your project, style preferences, timeline...",value:y,onChange:z=>S(z.target.value)})]}),o.jsx("button",{className:"cpopup-btn",onClick:Q,disabled:s==="submitting",children:s==="submitting"?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:13,className:"cpf-spin"})," Sending..."]}):o.jsxs(o.Fragment,{children:["Book My Free Consultation ",o.jsx(He,{size:13})]})}),s==="error"&&o.jsx("p",{className:"cpf-error",style:{textAlign:"center",marginTop:10},children:T}),o.jsx("p",{className:"cpf-progress",children:"Step 2 of 2"})]},"step2")})]})})]})}function se({children:e,delay:t=0,className:n="",style:r,direction:i="up"}){const s=i==="up"?{opacity:0,y:40}:i==="down"?{opacity:0,y:-40}:i==="left"?{opacity:0,x:40}:i==="right"?{opacity:0,x:-40}:{opacity:0};return o.jsx(P.div,{initial:s,whileInView:{opacity:1,y:0,x:0},viewport:{once:!1,margin:"-60px"},transition:{duration:.8,delay:t,ease:[.25,.1,.25,1]},className:n,style:r,children:e})}const T5=3500,N5=4e3,P5="cubic-bezier(0.16, 1, 0.3, 1)",A5=520;function z5({cards:e}){const t=e.length,n=[e[t-1],...e,e[0]],r=n.length,[i,s]=h.useState(1),[a,l]=h.useState(!0),c=h.useRef(null),u=h.useRef(null),d=h.useRef(!1),p=i===0?t-1:i===r-1?0:i-1,f=h.useCallback(()=>{d.current||(s(m=>m+1),l(!0))},[]),x=h.useCallback(()=>{c.current&&clearInterval(c.current),c.current=setInterval(f,T5)},[f]),v=h.useCallback(()=>{c.current&&clearInterval(c.current),c.current=null},[]),b=h.useCallback(()=>{v(),u.current&&clearTimeout(u.current),u.current=setTimeout(x,N5)},[x,v]);h.useEffect(()=>(x(),()=>{v(),u.current&&clearTimeout(u.current)}),[x,v]);const w=h.useCallback(()=>{i===0?(d.current=!0,l(!1),s(t),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.current=!1})})):i===r-1&&(d.current=!0,l(!1),s(1),requestAnimationFrame(()=>{requestAnimationFrame(()=>{d.current=!1})}))},[i,t,r]),g=`${-(i/r)*100}%`;return o.jsxs("div",{style:{position:"relative",width:"100%",overflow:"hidden"},children:[o.jsx("div",{onTransitionEnd:w,style:{display:"flex",width:`${r*100}%`,transform:`translateX(${g})`,transition:a?`transform ${A5}ms ${P5}`:"none",willChange:"transform"},children:n.map((m,y)=>o.jsx("div",{style:{width:`${100/r}%`,flexShrink:0,padding:"0 1.25rem",boxSizing:"border-box"},onClick:b,children:o.jsxs("div",{className:"oe-card",style:{maxWidth:480,margin:"0 auto"},children:[o.jsx("div",{className:"oe-img-wrap",children:o.jsx("img",{src:m.img,alt:m.title,className:"oe-img",loading:"lazy",draggable:!1})}),o.jsxs("div",{className:"oe-body",children:[o.jsx("span",{className:"oe-divider"}),o.jsx("h3",{className:"oe-title",children:m.title}),o.jsx("p",{className:"oe-desc",children:m.desc})]})]})},y))}),o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",gap:7,marginTop:22},children:e.map((m,y)=>o.jsx("div",{style:{width:p===y?22:6,height:6,borderRadius:3,background:p===y?"#C9A96E":"rgba(26,22,18,0.18)",transition:"width 0.35s ease, background 0.35s ease",flexShrink:0}},y))})]})}const Yu="/assets/residential-interiors-cover-B8lpJ02G.jpg",Ku="/assets/commercial-interiors-cover-CAcNxrue.jpg",Gu="/assets/hospitality-interiors-cover-fSgMspCk.jpg",Xu="/assets/architecture-space-planning-cover-l_6P2NAl.jpg",qu="/assets/2d-3d-visualization-cover--MVjD5fC.jpg",Ju="/assets/developer-solutions-cover-ct06iqhG.jpg",Qu="/assets/renovation-makeovers-cover-C90qMlf_.jpg",I5="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85",qf=[{id:1,title:"Living Room Transformation",beforeLabel:"RAW SHELL",afterLabel:"NIVORA DESIGN",beforeImg:"/before-1.jpg",afterImg:"/after-1.jpg",beforeDesc:"A bare concrete shell with exposed pipes, unfinished walls and no sense of space or identity.",afterDesc:"An opulent living room with ornate carved furniture, crystal chandelier, marble floors and handcrafted wall art."},{id:2,title:"Living Area Revival",beforeLabel:"BASIC SPACE",afterLabel:"CURATED INTERIOR",beforeImg:"/before-2.jpg",afterImg:"/after-2.jpg",beforeDesc:"A plain living area with minimal décor, bare walls and a basic TV unit lacking character.",afterDesc:"A statement TV wall in marble-finish panels, warm ambient lighting, slatted wood accents and a floating media unit."},{id:3,title:"Office Reception Design",beforeLabel:"BARE SHELL",afterLabel:"PREMIUM WORKSPACE",beforeImg:"/before-3.jpg",afterImg:"/after-3.jpg",beforeDesc:"An unfinished commercial space with raw drywall, exposed wiring and construction debris throughout.",afterDesc:"A striking reception with a marble front desk, warm wood-slatted walls, statement chandelier and polished stone flooring."},{id:4,title:"Double-Height Hall & Balcony",beforeLabel:"RAW STRUCTURE",afterLabel:"GRAND LIVING",beforeImg:"/before-4.jpg",afterImg:"/after-4.jpg",beforeDesc:"A bare double-height shell with exposed concrete, raw brick balcony railing and no finishes in place.",afterDesc:"A grand open living hall with a cascading chandelier, glass balcony railing, velvet sofas and warm ambient lighting."}],R5=[{image:"/instagram/ig-post-1-bedroom-marble.png",url:"https://www.instagram.com/reel/DNWtK0ht1DO/"},{image:"https://res.cloudinary.com/tgmyheme/image/upload/q_auto:best,f_auto/nivora-instagram/ig-post-2-acetech.png",url:"https://www.instagram.com/p/DRAbqc_DSIC/?igsh=cG1kZGN0dGl6dGg5"},{image:"/instagram/ig-post-3-sandstone-wall.png",url:"https://www.instagram.com/reel/DPECwNBge6u/"},{image:"/instagram/ig-post-4-reception-lounge.png",url:"https://www.instagram.com/reel/DOivw8LjZVS/"},{image:"/instagram/ig-post-5-tv-unit.png",url:"https://www.instagram.com/reel/DO3Q44njbsU/"},{image:"https://res.cloudinary.com/tgmyheme/image/upload/q_auto:best,f_auto/nivora-instagram/ig-post-6-bedroom.png",url:"https://www.instagram.com/reel/DMlyCnWh6Ct/?igsh=eHd1ZHRuMHoyOGdo"}],D5=[],Lx=[{num:"01",title:"Residential Interiors",desc:"Thoughtfully designed homes that reflect personality, lifestyle and everyday comfort.",href:"/services/residential",img:Yu,icon:bx},{num:"02",title:"Commercial Interiors",desc:"Functional workspaces, offices and retail environments designed for performance.",href:"/services/commercial",img:Ku,icon:E4},{num:"03",title:"Hospitality Interiors",desc:"Hotels, cafés and guest experiences crafted to feel memorable and welcoming.",href:"/services/hospitality",img:Gu,icon:A4},{num:"04",title:"Architecture & Space Planning",desc:"Layouts, planning and built forms that connect aesthetics with purpose.",href:"/services/architecture",img:Xu,icon:F4},{num:"05",title:"2D & 3D Visualization",desc:"Concept drawings, renders and visual development before execution begins.",href:"/services/visualization",img:qu,icon:W4},{num:"06",title:"Developer Solutions",desc:"Sample flats, amenities and curated experiences that enhance property value.",href:"/services/developer",img:Ju,icon:yx},{num:"07",title:"Renovation & Makeovers",desc:"Transform existing spaces through upgrades, modernization and thoughtful redesign.",href:"/services/renovation",img:Qu,icon:Nx}],Jf=[{stars:5,text:"NIVORA transformed our vision into a home that perfectly reflects our family's lifestyle. The balance of warm wooden finishes, elegant detailing, and functional planning exceeded every expectation. Their professionalism, transparency, and craftsmanship made the entire journey enjoyable. Every guest who visits appreciates the timeless beauty of our home.",name:"Arvind Mohite",location:"Ambernath, Mumbai",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"AM"},{stars:5,text:"From the very first design discussion to the final handover, the NIVORA team understood exactly what we wanted. They created a home that is modern, practical, and incredibly welcoming. Their attention to detail and execution quality are simply outstanding.",name:"Tushar Shah",location:"Mumbai",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"TS"},{stars:5,text:"Designing a bungalow requires thoughtful planning, and NIVORA delivered beyond our expectations. Every room flows beautifully into the next, with a perfect blend of luxury and functionality. The quality of materials and finishing reflects true craftsmanship.",name:"Mayur Patil",location:"Casa Élan Bungalow",project:"RESIDENTIAL — BUNGALOW",initials:"MP"},{stars:5,text:"Our office now represents our brand perfectly. The layout has improved productivity, while the elegant interiors leave a lasting impression on every client who visits. NIVORA managed the entire project professionally and delivered exactly as promised.",name:"Parag Bari",location:"Mumbai",project:"COMMERCIAL — OFFICE",initials:"PB"},{stars:5,text:"We wanted a peaceful home that felt warm and timeless, and NIVORA achieved exactly that. The soft curves, lighting, and neutral palette create a calming atmosphere that our family enjoys every day. It truly feels like home.",name:"Tarun Raisinghania",location:"Shivganga",project:"RESIDENTIAL — APARTMENT",initials:"TR"},{stars:5,text:"NIVORA has an incredible ability to create elegance through simplicity. Every texture, finish, and lighting detail has been carefully planned. The final result is sophisticated, functional, and far more beautiful than we imagined.",name:"Samiksha Shetty",location:"Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"SS"},{stars:5,text:"The team designed every space with precision and purpose. The duplex feels spacious, luxurious, and incredibly comfortable. Their communication, project management, and commitment to quality made the entire experience completely stress-free.",name:"Kapil Arora",location:"Mumbai",project:"RESIDENTIAL — DUPLEX",initials:"KA"},{stars:5,text:"NIVORA beautifully balanced warmth, luxury, and functionality in our home. The custom furniture, lighting, and thoughtful detailing have completely transformed our everyday living experience. We highly recommend NIVORA to anyone looking for premium interiors.",name:"Rahul Patil",location:"Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"RP"},{stars:5,text:"Nivora took my vision and refined it into something I never thought possible. Their material selection is impeccable.",name:"Aditi R.",location:"Ambernath",project:"RESIDENTIAL — HOME INTERIOR",initials:"AR"}],L5=[{value:5,from:0,suffix:"+",label:"Years Experience",duration:1200},{value:25,from:0,suffix:"+",label:"Projects Completed",duration:1800},{value:50,from:0,suffix:"+",label:"Clients Served",duration:1600},{value:90,from:0,suffix:"%",label:"Client Satisfaction",duration:1400}];function M5(e){const t=e.match(/^(\d+(?:\.\d+)?)(.*)$/);return t?{numeric:Number(t[1]),suffix:t[2]}:{numeric:0,suffix:""}}function F5(){const{settings:e}=Sn(),t=h.useMemo(()=>{var d;return(d=e==null?void 0:e.homeStats)!=null&&d.length?e.homeStats.map(p=>{const{numeric:f,suffix:x}=M5(p.value);return{value:f,from:0,suffix:x,label:p.label,duration:1400}}):L5},[e==null?void 0:e.homeStats]),[n,r]=h.useState(()=>t.map(()=>0)),[i,s]=h.useState(()=>t.map(()=>!1));h.useEffect(()=>{r(t.map(()=>0)),s(t.map(()=>!1))},[t]);const[a,l]=h.useState(!1),c=h.useRef(null),u=h.useRef([]);return h.useEffect(()=>{const d=c.current;if(!d)return;const p=new IntersectionObserver(([x])=>l(x.isIntersecting),{threshold:.25});p.observe(d);const f=d.getBoundingClientRect();return f.top<window.innerHeight&&f.bottom>0&&l(!0),()=>p.disconnect()},[]),h.useEffect(()=>{if(u.current.forEach(d=>d()),u.current=[],!a){r(t.map(()=>0)),s(t.map(()=>!1));return}t.forEach((d,p)=>{const f=performance.now();let x=0;const v=b=>{const w=Math.min((b-f)/d.duration,1),g=1-Math.pow(1-w,4),m=Math.floor(d.from+(d.value-d.from)*g);if(r(y=>{const S=[...y];return S[p]=m,S}),w<1)x=requestAnimationFrame(v);else{r(S=>{const j=[...S];return j[p]=d.value,j});const y=setTimeout(()=>{s(j=>{const k=[...j];return k[p]=!0,k});const S=setTimeout(()=>{s(j=>{const k=[...j];return k[p]=!1,k})},900);u.current.push(()=>clearTimeout(S))},350+p*180);u.current.push(()=>clearTimeout(y))}};x=requestAnimationFrame(v),u.current.push(()=>cancelAnimationFrame(x))})},[a]),o.jsxs("div",{className:"stats-wrapper",style:{position:"relative",zIndex:10,marginTop:48,padding:"0 1.5rem 56px",display:"flex",justifyContent:"center",backgroundColor:"#F7F4EF"},children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{ref:c,className:"stat-float-card",children:t.map((d,p)=>o.jsxs("div",{className:"stat-float-item",children:[o.jsxs("div",{className:`stat-float-num${i[p]?" shimmer-active":""}`,children:[n[p],d.suffix]}),o.jsx("div",{className:"stat-float-label",children:d.label})]},d.label))})]})}function O5(){var w;const{settings:e}=Sn(),t=(w=e==null?void 0:e.homeStats)!=null&&w.length?e.homeStats.map(g=>({value:g.value,label:g.label})):[{value:"2+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],n=t.length,[r,i]=h.useState(0),[s,a]=h.useState(0),[l,c]=h.useState("right"),[u,d]=h.useState(!1),p=h.useRef(null),f=h.useRef(null),x=h.useCallback((g,m)=>{c(m),i(g),a(y=>y+1)},[]);h.useEffect(()=>{if(u)return;const g=setTimeout(()=>x((r+1)%n,"right"),2800);return()=>clearTimeout(g)},[r,u,x,n]);const v=g=>{p.current=g.touches[0].clientX,d(!0),f.current&&clearTimeout(f.current)},b=g=>{if(p.current===null)return;const m=g.changedTouches[0].clientX-p.current;Math.abs(m)>40&&x(m<0?(r+1)%n:(r-1+n)%n,m<0?"right":"left"),p.current=null,f.current=setTimeout(()=>d(!1),2e3)};return o.jsxs("div",{className:"mobile-stats-carousel",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{onTouchStart:v,onTouchEnd:b,style:{touchAction:"pan-y",userSelect:"none"},children:[o.jsxs("div",{className:l==="right"?"ms-card-right":"ms-card-left",style:{background:"linear-gradient(135deg, #384F2E 0%, #49613B 50%, #384F2E 100%)",borderRadius:16,padding:"44px 24px 40px",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(4rem, 19vw, 5.5rem)",fontWeight:300,color:"#f5f0e8",lineHeight:1,letterSpacing:"-0.03em",marginBottom:18},children:t[r].value}),o.jsx("div",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"3.5px",textTransform:"uppercase",color:"rgba(201,169,110,0.82)"},children:t[r].label})]},s),o.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:20},children:t.map((g,m)=>o.jsx("div",{className:`ms-dot${m===r?" ms-dot-active":""}`,onClick:()=>x(m,m>r?"right":"left")},m))})]})]})}function V5({beforeImg:e,afterImg:t,title:n,beforeLabel:r="Before",afterLabel:i="After",autoPlayKey:s=0,onDragChange:a}){const[l,c]=h.useState(50),[u,d]=h.useState(0),p=h.useRef(null),f=h.useRef(!1),x=h.useRef(null),v=h.useRef(!1),b=h.useRef(!0),w=h.useRef([]),g=h.useRef(a),[m,y]=h.useState(1),[S,j]=h.useState(!1),[k,T]=h.useState(!1);h.useEffect(()=>{g.current=a},[a]),h.useEffect(()=>(b.current=!0,()=>{b.current=!1,w.current.forEach(clearTimeout)}),[]);const C=()=>{w.current.forEach(clearTimeout),w.current=[]},V=()=>{C(),v.current=!1,b.current&&d(0)},D=Y=>new Promise(re=>{const N=setTimeout(re,Y);w.current.push(N)}),O=(Y,re)=>new Promise(N=>{if(!b.current)return N();d(re),c(Y);const A=setTimeout(N,re);w.current.push(A)}),B=async()=>{if(!(v.current||f.current)){if(v.current=!0,await O(98,900),f.current||!b.current){v.current=!1;return}if(await D(600),f.current||!b.current){v.current=!1;return}if(await O(2,900),f.current||!b.current){v.current=!1;return}if(await D(600),f.current||!b.current){v.current=!1;return}await O(50,600),b.current&&d(0),v.current=!1}},$=h.useRef(s);h.useEffect(()=>{if(s===$.current)return;$.current=s,V();const Y=setTimeout(()=>{b.current&&B()},30);w.current.push(Y)},[s]);const F=Y=>{if(!p.current)return;d(0);const re=p.current.getBoundingClientRect(),N=Math.max(2,Math.min(Y-re.left,re.width-2));c(N/re.width*100)},Q=Y=>{var re;f.current=!0,(re=g.current)==null||re.call(g,!0),V(),y(1.15),F(Y)},R=()=>{var Y;f.current=!1,x.current=null,(Y=g.current)==null||Y.call(g,!1),y(1)},z=Y=>{Y.pointerType==="mouse"&&Y.button!==0||(x.current=Y.pointerId,Y.currentTarget.setPointerCapture(Y.pointerId),Y.preventDefault(),Q(Y.clientX))},E=Y=>{!f.current||Y.pointerId!==x.current||(Y.preventDefault(),F(Y.clientX))},M=Y=>{Y.pointerId===x.current&&(Y.currentTarget.hasPointerCapture(Y.pointerId)&&Y.currentTarget.releasePointerCapture(Y.pointerId),R())},W=()=>{!v.current&&!f.current&&B()},G=u>0?`left ${u}ms ease-in-out`:"none",ee={position:"absolute",bottom:16,zIndex:6,fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.28em",textTransform:"uppercase",color:"#C8A56A",background:"rgba(250,248,244,0.92)",border:"1px solid rgba(200,165,106,0.55)",padding:"5px 12px",borderRadius:100,backdropFilter:"blur(4px)",pointerEvents:"auto",cursor:"default",transition:"opacity 0.2s ease, filter 0.2s ease"};return o.jsxs("div",{ref:p,className:"compare-slider-container",style:{position:"relative",width:"100%",overflow:"hidden",cursor:"ew-resize",userSelect:"none",WebkitUserSelect:"none",touchAction:"none"},onPointerDown:z,onPointerMove:E,onPointerUp:M,onPointerCancel:M,onLostPointerCapture:R,onMouseEnter:W,children:[o.jsx("img",{src:t,alt:`After — ${n}`,draggable:!1,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",inset:0,clipPath:`inset(0 ${100-l}% 0 0)`,pointerEvents:"none",transition:u>0?`clip-path ${u}ms ease-in-out`:"none"},children:o.jsx("img",{src:e,alt:`Before — ${n}`,draggable:!1,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, transparent 55%, rgba(10,8,6,0.38) 100%)",pointerEvents:"none",zIndex:3}}),o.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${l}%`,transform:"translateX(-50%)",width:2,background:"rgba(255,255,255,0.88)",pointerEvents:"none",zIndex:4,boxShadow:"0 0 8px rgba(0,0,0,0.25)",transition:G}}),o.jsx("style",{children:`
        .cs-handle { width: 46px; height: 46px; }
        @media (max-width: 768px) { .cs-handle { width: 48px; height: 48px; } }
      `}),o.jsx("div",{className:"cs-handle",style:{position:"absolute",top:"50%",left:`${l}%`,transform:`translate(-50%, -50%) scale(${m})`,borderRadius:"50%",background:"#fff",border:"2px solid rgba(200,165,106,0.85)",boxShadow:"0 2px 18px rgba(0,0,0,0.22)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"auto",cursor:"ew-resize",touchAction:"none",zIndex:5,transition:G?`left ${u}ms ease-in-out, transform 120ms ease`:"transform 120ms ease"},children:o.jsx("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"#C8A56A",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M8 5l-4 7 4 7M16 5l4 7-4 7"})})}),o.jsx("div",{style:{position:"absolute",top:"calc(50% - 38px)",left:`${l}%`,transform:"translateX(-50%)",transition:G,zIndex:6,pointerEvents:"none",whiteSpace:"nowrap",fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:8,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.75)",background:"rgba(0,0,0,0.32)",backdropFilter:"blur(4px)",padding:"3px 9px",borderRadius:100},children:"Slide to Compare"}),o.jsx("span",{style:{...ee,left:16,opacity:l>92?0:S?1:.72,filter:S?"brightness(1.18)":"brightness(1)",pointerEvents:l>92?"none":"auto"},onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),children:r}),o.jsx("span",{style:{...ee,right:16,opacity:l<8?0:k?1:.72,filter:k?"brightness(1.18)":"brightness(1)",pointerEvents:l<8?"none":"auto"},onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:i})]})}function B5(){const e=qf.length,t=3600,n=1200,r=1500,[i,s]=h.useState(2),[a,l]=h.useState(0),[c,u]=h.useState(()=>new Array(e).fill(0)),[d,p]=h.useState(!1),f=h.useRef(i),x=h.useRef(a),v=h.useRef(null),b=h.useRef(new Set),w=h.useRef(!0),g=h.useRef(null),m=h.useRef(!1);h.useEffect(()=>{f.current=i},[i]),h.useEffect(()=>{x.current=a},[a]),h.useEffect(()=>(w.current=!0,()=>{w.current=!1}),[]);const y=Math.ceil(e/i),S=()=>{v.current&&(clearTimeout(v.current),v.current=null)},j=h.useCallback((O,B)=>{S();const $=(B-1)*n+t+r;v.current=setTimeout(()=>{if(!w.current)return;if(b.current.size>0){j(O,B);return}const F=f.current,Q=Math.ceil(e/F),R=(O+1)%Q;p(!0),setTimeout(()=>{if(!w.current)return;l(R),x.current=R;const z=R*F,E=Math.min(z+F,e);u(M=>{const W=[...M];for(let G=z;G<E;G++)W[G]++;return W}),setTimeout(()=>{w.current&&p(!1),j(R,E-z)},520)},0)},$)},[]),k=h.useCallback(O=>{S();const B=f.current,$=Math.ceil(e/B),F=(O%$+$)%$;b.current.clear(),p(!0),setTimeout(()=>{if(!w.current)return;l(F),x.current=F;const Q=F*B,R=Math.min(Q+B,e);u(z=>{const E=[...z];for(let M=Q;M<R;M++)E[M]++;return E}),setTimeout(()=>{w.current&&p(!1),j(F,R-Q)},520)},0)},[j]);h.useEffect(()=>{const O=()=>{const B=window.innerWidth<641?1:2;B!==f.current&&(f.current=B,s(B),S(),l(0),x.current=0,u(new Array(e).fill(0)),b.current.clear(),p(!1))};return O(),window.addEventListener("resize",O),()=>window.removeEventListener("resize",O)},[]),h.useEffect(()=>{const O=g.current;if(!O)return;const B=new IntersectionObserver(([$])=>{if($.isIntersecting&&!m.current){m.current=!0,B.disconnect();const F=f.current,Q=Math.min(F,e);u(R=>{const z=[...R];for(let E=0;E<Q;E++)z[E]++;return z}),j(0,Q)}},{threshold:.25});return B.observe(O),()=>{B.disconnect(),S()}},[j]);const T=(O,B)=>{B?b.current.add(O):b.current.delete(O)},C=h.useRef(i);h.useEffect(()=>{if(!m.current||i===C.current){C.current=i;return}C.current=i;const O=Math.min(i,e);u(B=>{const $=[...B];for(let F=0;F<O;F++)$[F]++;return $}),j(0,O)},[i,j]);const V=72,D=(O,B=0)=>{const $=qf[O],F=i===2&&B===1?V:0;return o.jsxs("div",{className:"trf-card",style:{flex:i===1?"0 0 100%":"0 0 calc(50% - 12px)",marginTop:F},children:[o.jsx(V5,{beforeImg:$.beforeImg,afterImg:$.afterImg,title:$.title,beforeLabel:$.beforeLabel,afterLabel:$.afterLabel,autoPlayKey:c[O],onDragChange:Q=>T(O,Q)}),o.jsxs("div",{style:{padding:"1.5rem 1.75rem 1.75rem",borderTop:"1px solid #F5F1EA"},children:[o.jsx("h3",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.1rem, 1.8vw, 1.4rem)",color:"#262421",margin:"0 0 0.9rem",letterSpacing:"-0.01em"},children:$.title}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem 1.5rem"},children:[o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",color:"rgba(38,36,33,0.35)",margin:"0 0 0.4rem"},children:"Before"}),o.jsx("p",{style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.55)",lineHeight:1.75,margin:0},children:$.beforeDesc})]}),o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.25em",textTransform:"uppercase",color:"#C8A56A",margin:"0 0 0.4rem"},children:"After"}),o.jsx("p",{style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.72)",lineHeight:1.75,margin:0},children:$.afterDesc})]})]})]})]},$.id)};return o.jsxs("div",{ref:g,style:{maxWidth:1100,margin:"0 auto",padding:"0 20px"},children:[o.jsx("style",{children:`
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
      `}),o.jsx("div",{className:"trf-carousel-viewport",children:o.jsx("div",{className:"trf-carousel-track",style:{transform:`translateX(-${a*100}%)`},children:Array.from({length:y},(O,B)=>{const $=B*i,F=Math.min($+i,e),Q=Array.from({length:F-$},(R,z)=>$+z);return o.jsx("div",{className:"trf-carousel-page",children:Q.map((R,z)=>D(R,z))},B)})})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,marginTop:"2.25rem"},children:[o.jsx("button",{className:"trf-nav-btn",onClick:()=>k(a-1),"aria-label":"Previous page",style:{opacity:d?.45:1,pointerEvents:d?"none":"auto"},children:o.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#262421",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})})}),o.jsx("div",{style:{display:"flex",gap:10,alignItems:"center"},children:Array.from({length:y},(O,B)=>o.jsx("button",{className:`trf-dot${B===a?" active":""}`,onClick:()=>k(B),"aria-label":`Page ${B+1}`},B))}),o.jsx("button",{className:"trf-nav-btn",onClick:()=>k(a+1),"aria-label":"Next page",style:{opacity:d?.45:1,pointerEvents:d?"none":"auto"},children:o.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#262421",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),o.jsxs("p",{style:{textAlign:"center",marginTop:"1rem",fontFamily:"'Montserrat', sans-serif",fontWeight:300,fontSize:11,letterSpacing:"0.2em",color:"rgba(38,36,33,0.3)"},children:[String(a+1).padStart(2,"0")," / ",String(y).padStart(2,"0")]})]})}function _5({splashDone:e}){var v,b;const{settings:t}=Sn(),n=h.useRef(null),{scrollYProgress:r}=d4({target:n,offset:["start start","end start"]}),i=x4(r,[0,1],["0%","22%"]),s=p4(i,{stiffness:60,damping:20}),[a,l]=h.useState(!1),c=((v=t==null?void 0:t.homeHero)==null?void 0:v.backgroundImage)||I5,u=((b=t==null?void 0:t.homeHero)==null?void 0:b.subheadline)||"We design homes and workspaces that are beautiful, functional, and built for everyday living.";h.useEffect(()=>{const w=n.current;if(!w)return;const g=new IntersectionObserver(([m])=>l(m.isIntersecting),{threshold:.2});return g.observe(w),()=>g.disconnect()},[]);const d={hidden:{},visible:{transition:{delayChildren:0,staggerChildren:.38}}},p={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:1.1,ease:[.25,.1,.25,1]}}},f={hidden:{opacity:0,y:24,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:1.1,ease:[.25,.1,.25,1]}}},x={hidden:{opacity:0,y:-20},visible:{opacity:1,y:0,transition:{duration:.9,ease:[.25,.1,.25,1]}}};return o.jsxs("section",{ref:n,className:"hero-section",style:{position:"relative",height:"100vh",minHeight:700,overflow:"hidden",clipPath:"inset(0)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[o.jsx(P.div,{className:"hero-parallax-wrap",style:{y:s,position:"absolute",inset:"-12% 0",zIndex:0},children:o.jsx("img",{src:c,alt:"NIVORA Interiors",className:"hero-bg-img",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 30%",display:"block"},loading:"eager"})}),o.jsx("div",{className:"hero-gradient-overlay",style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to bottom, rgba(20,32,18,0.35) 0%, rgba(20,32,18,0.55) 40%, rgba(20,32,18,0.78) 75%, rgba(20,32,18,0.92) 100%)"}}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,background:"radial-gradient(ellipse at center, transparent 50%, rgba(10,18,9,0.45) 100%)",pointerEvents:"none"}}),o.jsx(P.div,{initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.9,delay:0},style:{position:"absolute",left:36,top:"50%",zIndex:10,transform:"translateY(-50%) rotate(-90deg)",transformOrigin:"center center",fontFamily:"'Cinzel', serif",fontSize:9,letterSpacing:"0.35em",color:"rgba(184,150,106,0.45)",textTransform:"uppercase",whiteSpace:"nowrap"},className:"hidden lg:block",children:"Boutique Interior Studio"}),o.jsx(P.div,{initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.9,delay:0},style:{position:"absolute",right:36,top:"50%",zIndex:10,transform:"translateY(-50%) rotate(90deg)",transformOrigin:"center center",fontFamily:"'Cinzel', serif",fontSize:9,letterSpacing:"0.35em",color:"rgba(184,150,106,0.45)",textTransform:"uppercase",whiteSpace:"nowrap"},className:"hidden lg:block",children:"Mumbai"}),o.jsxs(P.div,{variants:d,initial:"hidden",animate:e&&a?"visible":"hidden",style:{position:"relative",zIndex:10,textAlign:"center",padding:"0 24px",maxWidth:1040,margin:"0 auto",width:"100%"},className:"hero-content-wrap",children:[o.jsxs(P.div,{variants:x,className:"hero-city-tabs hero-location-tag",style:{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:32},children:[o.jsxs("svg",{className:"hero-location-pin",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#C9A96E",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[o.jsx("path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),o.jsx("span",{className:"hero-location-text",style:{fontFamily:"'Cinzel', serif",fontSize:11,letterSpacing:"0.35em",textTransform:"uppercase",color:"rgba(245,240,232,0.85)"},children:"Mumbai"})]}),o.jsx(P.h1,{variants:p,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,color:"#f5f0e8",letterSpacing:"-0.01em",marginBottom:8},children:"Thoughtfully Designed"}),o.jsx(P.h1,{variants:p,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,color:"#f5f0e8",letterSpacing:"-0.01em",marginBottom:10},children:"Interiors —"}),o.jsx(P.h1,{variants:f,className:"hero-h1",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(48px, 6.2vw, 88px)",lineHeight:1.05,letterSpacing:"-0.01em",marginBottom:32},children:o.jsx("em",{style:{color:"#b8966a",fontStyle:"italic"},children:"That Feel Effortless"})}),o.jsx(P.p,{variants:p,className:"hero-body",style:{fontFamily:"'DM Sans', sans-serif",fontWeight:300,fontSize:"clamp(15px, 1.6vw, 18px)",color:"rgba(245,240,232,0.58)",lineHeight:1.8,maxWidth:620,margin:"0 auto 56px"},children:u}),o.jsxs(P.div,{variants:p,className:"hero-cta-group",style:{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap"},children:[o.jsx(P.div,{whileHover:{y:-2},transition:{duration:.25},className:"hero-btn-wrap",children:o.jsx(he,{to:"/contact",className:"hero-btn-primary",style:{display:"inline-flex",alignItems:"center",gap:10,fontFamily:"'Cinzel', serif",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:"#2D3E29",fontWeight:600,padding:"17px 40px",textDecoration:"none",transition:"background 0.3s ease, box-shadow 0.3s ease, transform 0.25s ease",boxShadow:"0 4px 24px rgba(168,133,79,0.35)"},onMouseEnter:w=>{const g=w.currentTarget;g.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",g.style.boxShadow="0 8px 32px rgba(168,133,79,0.50)"},onMouseLeave:w=>{const g=w.currentTarget;g.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",g.style.boxShadow="0 4px 24px rgba(168,133,79,0.35)"},children:"Book Free Consultation"})}),o.jsx(P.div,{whileHover:{y:-2,scale:1.03},whileTap:{scale:1.03},transition:{duration:.25},className:"hero-btn-wrap",children:o.jsxs(he,{to:"/portfolio",className:"hero-btn-secondary hero-btn-sweep",style:{position:"relative",overflow:"hidden",zIndex:0,display:"inline-flex",alignItems:"center",gap:10,fontFamily:"'Cinzel', serif",fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",background:"transparent",color:"#D4C0A1",padding:"16px 40px",border:"1px solid rgba(245,240,232,0.55)",textDecoration:"none",transition:"border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease"},children:["View Projects ",o.jsx(He,{size:13,strokeWidth:1.5})]})})]})]}),o.jsx("style",{children:`
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
      `}),o.jsx(P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.9,delay:0},style:{position:"absolute",bottom:64,left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",gap:0,width:"100%",maxWidth:680,padding:"0 24px",justifyContent:"center"},className:"hero-stats",children:D5.map((w,g)=>o.jsxs("div",{style:{textAlign:"center",flex:"1 1 0",padding:"0 16px",borderLeft:g>0?"1px solid rgba(184,150,106,0.2)":"none"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:"#b8966a",lineHeight:1,marginBottom:6},children:w.value}),o.jsx("div",{style:{fontFamily:"'DM Sans', sans-serif",fontSize:10,fontWeight:300,letterSpacing:"0.12em",color:"rgba(245,240,232,0.38)",textTransform:"uppercase"},children:w.label})]},w.label))}),o.jsxs(P.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:0,duration:.72},className:"scroll-indicator-bounce",style:{position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",zIndex:10,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontFamily:"'Cinzel', serif",fontSize:8,letterSpacing:"0.4em",color:"rgba(184,150,106,0.5)",textTransform:"uppercase"},children:"Scroll"}),o.jsx("div",{style:{position:"relative",width:1,height:40,background:"rgba(184,150,106,0.15)",overflow:"hidden"},children:o.jsx(P.div,{animate:{y:["-100%","200%"]},transition:{duration:1.6,repeat:1/0,ease:"easeInOut",repeatDelay:.3},style:{position:"absolute",top:0,left:0,width:"100%",height:"50%",background:"rgba(184,150,106,0.7)"}})})]}),o.jsx("style",{children:`
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
      `})]})}const W5={hidden:{},visible:{transition:{staggerChildren:.09}}},H5={hidden:{opacity:0,scale:.4},visible:{opacity:1,scale:1,transition:{duration:.25,ease:[.22,1,.36,1]}}};function U5(){const[e,t]=h.useState(0),[n,r]=h.useState(0),[i,s]=h.useState("next"),[a,l]=h.useState(!1),c=h.useRef(null),u=Jf.length,d=5e3,p=()=>{s("next"),t(T=>(T+1)%u),r(T=>T+1)},f=()=>{s("prev"),t(T=>(T-1+u)%u),r(T=>T+1)},x=()=>{c.current&&clearInterval(c.current),c.current=setInterval(p,d)};h.useEffect(()=>(x(),()=>{c.current&&clearInterval(c.current)}),[]);const v=()=>{f(),x()},b=()=>{p(),x()},w=h.useRef(null),g=h.useRef(0),m=T=>{w.current=T.touches[0].clientX,g.current=0},y=T=>{w.current!==null&&(g.current=T.touches[0].clientX-w.current)},S=()=>{g.current>40?v():g.current<-40&&b(),w.current=null,g.current=0},j=Jf[e],k=i==="next"?"tCardInRight":"tCardInLeft";return o.jsxs(P.section,{initial:{opacity:.35},whileInView:{opacity:1},viewport:{once:!0,margin:"-60px"},transition:{duration:.3,ease:"easeOut"},className:"testimonials-section",style:{background:"#f5f2ed",padding:"80px 0"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"testimonials-container",style:{maxWidth:1100,margin:"0 auto",padding:"0 24px"},children:[o.jsxs(P.div,{initial:{opacity:.35,y:15},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,ease:[.22,1,.36,1]},className:"testimonials-heading",style:{textAlign:"center",marginBottom:56},children:[o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.42em",textTransform:"uppercase",color:"#a18661",margin:"0 0 16px"},children:"Client Stories"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.6rem)",color:"#21291a",lineHeight:1.15,margin:"0 0 18px",letterSpacing:"-0.01em"},children:"What Clients Say"}),o.jsx("p",{className:"testimonials-subtitle",style:{fontFamily:"'Lora', serif",fontWeight:300,fontStyle:"italic",fontSize:15,lineHeight:1.75,color:"rgba(33,41,26,0.55)",maxWidth:500,margin:"0 auto"},children:"Every project is a relationship. These are the words of people who trusted us with their spaces."})]}),o.jsxs("div",{className:"testimonials-arrow-row",style:{display:"flex",alignItems:"center",gap:20},onMouseEnter:()=>{l(!0),c.current&&clearInterval(c.current)},onMouseLeave:()=>{l(!1),x()},children:[o.jsx("button",{className:"t-nav-btn",onClick:v,"aria-label":"Previous testimonial",children:o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M19 12H5M11 6l-6 6 6 6"})})}),o.jsxs("div",{style:{flex:1,display:"flex",border:"1px solid #5f745e",borderRadius:12,overflow:"hidden",animation:`${k} 500ms cubic-bezier(0.22,1,0.36,1) both`,minHeight:280},className:"t-card-split",onTouchStart:m,onTouchMove:y,onTouchEnd:S,children:[o.jsxs("div",{className:"t-panel-left",style:{flex:"0 0 320px",background:"#21291a",padding:"44px 40px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative"},children:[o.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,background:"repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.012) 40px, rgba(255,255,255,0.012) 80px)",pointerEvents:"none"}}),o.jsx("p",{className:"t-panel-label",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:9,letterSpacing:"0.38em",textTransform:"uppercase",color:"#a18661",margin:"0 0 20px",position:"relative",zIndex:1,animation:"tPanelTextIn 500ms ease-out 200ms both"},children:"The Word on the Street"},`label-${n}`),o.jsx("h3",{className:"t-panel-heading",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.4rem, 2.4vw, 2rem)",color:"#f5f2ed",lineHeight:1.25,margin:"0 0 28px",letterSpacing:"-0.01em",position:"relative",zIndex:1,animation:"tPanelTextIn 500ms ease-out 280ms both"},children:"Hear what our clients have said about us!"},`heading-${n}`),o.jsx("div",{style:{height:1.5,background:"#a18661",position:"relative",zIndex:1,animation:"tDividerGrow 600ms ease-out 360ms both"}},`divider-${n}`)]}),o.jsxs("div",{className:"t-panel-right",style:{flex:1,background:"#ffffff",padding:"44px 44px 40px",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",overflow:"hidden"},children:[o.jsx(P.span,{className:"t-quote-icon","aria-hidden":"true",initial:{opacity:.1,scale:.8,rotate:-10},animate:{opacity:.25,scale:1,rotate:0},transition:{duration:.55,ease:[.22,1,.36,1]},style:{position:"absolute",top:8,right:24,fontFamily:"'Playfair Display', serif",fontSize:110,lineHeight:1,color:"#a18661",pointerEvents:"none",userSelect:"none",display:"block"},children:'"'},`quoteicon-${n}`),o.jsx(P.div,{className:"t-stars-row",variants:W5,initial:"hidden",animate:"visible",style:{display:"flex",gap:4,marginBottom:18,position:"relative",zIndex:1},children:Array.from({length:j.stars}).map((T,C)=>o.jsx(P.span,{variants:H5,style:{fontSize:16,color:"#a18661",lineHeight:1,display:"block"},children:"★"},C))},`stars-${n}`),o.jsxs("p",{className:"testimonial-quote-text",style:{fontFamily:"'Lora', serif",fontStyle:"italic",fontSize:16,lineHeight:1.8,color:"#2c2c2c",margin:"0 0 28px",position:"relative",zIndex:1,animation:"tQuoteFade 500ms ease-out 320ms both"},children:['"',j.text,'"']},`quote-${n}`),o.jsx("div",{style:{width:36,height:1,background:"#a18661",marginBottom:16,flexShrink:0}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx(P.div,{className:"t-avatar",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.35,delay:.44,ease:[.22,1,.36,1]},style:{width:38,height:38,borderRadius:"50%",background:"rgba(161,134,97,0.15)",border:"1.5px solid rgba(161,134,97,0.5)",color:"#7a6142",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Montserrat', sans-serif",fontWeight:700,fontSize:11,flexShrink:0,letterSpacing:"0.04em"},children:j.initials},`avatar-${n}`),o.jsxs("div",{children:[o.jsx("p",{className:"testimonial-author-name",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:500,fontSize:12,letterSpacing:"0.14em",textTransform:"uppercase",color:"#21291a",margin:"0 0 5px",animation:"tNameSlide 400ms ease-out 440ms both"},children:j.name},`name-${n}`),o.jsx("p",{className:"testimonial-author-location",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"#a18661",margin:0,animation:"tNameSlide 400ms ease-out 520ms both"},children:j.location},`loc-${n}`)]})]})]})]},n),o.jsx("button",{className:"t-nav-btn",onClick:b,"aria-label":"Next testimonial",children:o.jsx("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M5 12h14M13 6l6 6-6 6"})})})]}),o.jsx("div",{className:"testimonial-progress-bar-wrapper",style:{marginTop:24,display:"flex",justifyContent:"center"},children:o.jsx("div",{style:{width:"100%",height:3,background:"#e0d9cf",borderRadius:3,overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg, #a18661, #c8a97e)",borderRadius:3,animation:`tProgressFill ${d}ms linear forwards`,animationPlayState:a?"paused":"running"}},`bar-${n}`)})}),o.jsx(P.div,{initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.5,delay:.25,ease:[.22,1,.36,1]},style:{textAlign:"center",marginTop:28},children:o.jsx(he,{to:"/testimonials",className:"t-read-more",children:"Read All Client Stories →"})})]})]})}function $5(){const[e,t]=h.useState(!1),[n,r]=h.useState(0),[i,s]=h.useState(null),a=h.useRef(null),l=Ht();h.useEffect(()=>{const d=a.current;if(!d)return;const p=new IntersectionObserver(([f])=>{f.isIntersecting?(r(x=>x+1),t(!0)):t(!1)},{threshold:.05});return p.observe(d),()=>p.disconnect()},[]);const c=Lx.slice(0,4),u=d=>{s(d),setTimeout(()=>{s(null),l("/services")},350)};return o.jsxs("div",{ref:a,className:"mob-svc-root",children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:`mob-svc-heading${e?" msv-in":""}`,children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"0.75rem"},children:"Our Services"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.75rem, 7vw, 2.5rem)",color:"#262421",lineHeight:1.1,marginBottom:"0.75rem",letterSpacing:"-0.01em"},children:["Spaces Designed Across",o.jsx("br",{}),"Every Experience"]}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:13,color:"rgba(38,36,33,0.5)",lineHeight:1.8,margin:0},children:"From private residences to large-scale environments, we design spaces that balance beauty, function and identity."})]}),o.jsx("div",{className:"mob-svc-grid",children:c.map((d,p)=>{const f=d.icon,x=p*.1,v=x+.18;return o.jsxs("div",{className:`mob-svc-gcard${e?" msv-card-in":""}${i===p?" msv-pressed":""}`,style:{animationDelay:e?`${x}s`:"0s"},onClick:()=>u(p),children:[o.jsx("img",{src:d.img,alt:d.title,className:"mob-svc-img",loading:"lazy"}),o.jsx("div",{className:"mob-svc-overlay"}),o.jsx("div",{className:`mob-svc-shimmer${e?" msv-shimmer-run":""}`,style:{"--msv-shimmer-delay":`${v}s`}},`mgshim-${n}-${p}`),o.jsxs("div",{className:"mob-svc-bottom",children:[o.jsx("div",{className:"mob-svc-icon-wrap",children:o.jsx(f,{size:13,color:"#C8A56A",strokeWidth:1.4})}),o.jsx("h3",{className:"mob-svc-title",children:d.title}),o.jsxs("div",{className:"mob-svc-detail",children:[o.jsx("p",{className:"mob-svc-desc",children:d.desc}),o.jsxs("span",{className:"mob-svc-explore",children:["Explore ",o.jsx(He,{size:9,strokeWidth:1.5})]})]})]})]},`mgc-${n}-${p}`)})})]})}const Y5=[{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286193/nivora/home/our-expertise/living-room-design.jpg",title:"Living Room Design",desc:"Sophisticated and welcoming living spaces designed for comfort, conversation, and everyday luxury."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286195/nivora/home/our-expertise/modular-kitchen.jpg",title:"Modular Kitchen",desc:"Smart, elegant kitchens with seamless storage solutions, premium finishes, and functional layouts."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286197/nivora/home/our-expertise/bedroom-interiors.jpg",title:"Bedroom Interiors",desc:"Calm and luxurious retreats crafted with warm textures, custom furniture, and ambient lighting."},{img:"https://res.cloudinary.com/tgmyheme/image/upload/v1787286199/nivora/home/our-expertise/bathroom-interiors.jpg",title:"Bathroom Interiors",desc:"Serene, spa-inspired bathrooms designed with premium fittings, elegant tiling, and thoughtful layouts for everyday indulgence."}];function K5({posts:e}){const t=h.useRef(null),[n,r]=h.useState(!1);h.useEffect(()=>{const s=t.current;if(!s)return;const a=new IntersectionObserver(([l])=>r(l.isIntersecting),{threshold:.1});return a.observe(s),()=>a.disconnect()},[]);const i=["Follow","Our","Journey"];return o.jsxs("div",{ref:t,children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"text-center",style:{maxWidth:1200,margin:"0 auto 24px",padding:"0 24px"},children:[o.jsx("a",{href:"https://www.instagram.com/nivora.interiors",target:"_blank",rel:"noopener noreferrer",style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#a18661",marginBottom:14,display:"inline-block",textDecoration:"none"},children:"@NivoraInteriors"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 3rem)",color:"#262421",marginBottom:10,lineHeight:1.1},children:i.map((s,a)=>o.jsx("span",{className:"ig2-word-wrap",style:{marginRight:a<i.length-1?"0.28em":0},children:o.jsx("span",{className:`ig2-word${n?" ig2-in":""}`,style:{"--word-delay":`${a*.15}s`},children:s})},s))}),o.jsx("p",{className:`ig2-sub${n?" ig2-in":""}`,style:{fontFamily:"'Lora', serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",margin:0,"--sub-delay":`${i.length*.15+.1}s`},children:"Daily design inspiration and behind-the-scenes site visits"})]}),o.jsx("div",{className:"ig2-grid",children:e.map((s,a)=>o.jsxs("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",className:`ig2-thumb${n?" ig2-in ig2-shimmer":""}`,style:{"--thumb-delay":`${a*.1}s`,"--shimmer-delay":`${.5+a*.1}s`},children:[o.jsx("img",{src:s.image,alt:`@NivoraInteriors post ${a+1}`,loading:"lazy"}),o.jsx("div",{className:"ig2-overlay",children:o.jsx("svg",{width:"24",height:"24",fill:"white",viewBox:"0 0 24 24",style:{filter:"drop-shadow(0 1px 4px rgba(0,0,0,0.4))"},children:o.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})})]},a))}),o.jsx("div",{className:`ig2-cta-wrap${n?" ig2-in":""}`,style:{textAlign:"center",maxWidth:1200,marginTop:24,marginLeft:"auto",marginRight:"auto",padding:"0 24px","--cta-delay":`${e.length*.1+.35}s`,"--cta-ul-delay":`${e.length*.1+.55}s`},children:o.jsxs("a",{href:"https://www.instagram.com/nivora.interiors/",target:"_blank",rel:"noopener noreferrer",className:"ig2-cta",children:["SEE MORE ON INSTAGRAM ",o.jsx("span",{className:"ig2-cta-arrow",children:o.jsx(He,{size:12})})]})})]})}function G5({splashDone:e}){var w,g;const{settings:t}=Sn(),n=(w=t==null?void 0:t.serviceCards)!=null&&w.length?t.serviceCards:Y5,r=(g=t==null?void 0:t.instagramPosts)!=null&&g.length?t.instagramPosts:R5,i=Wt(),[s,a]=h.useState(0),l=h.useRef(null),c=h.useRef(null),u=h.useRef(null),[d,p]=h.useState(!1),[f,x]=h.useState(!1);h.useEffect(()=>{const m=()=>x(window.innerWidth<768);return m(),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]);const v=m=>({opacity:d?1:0,transform:d?"translateX(0)":"translateX(-40px)",transition:`opacity 600ms ease-out ${m}ms, transform 600ms ease-out ${m}ms`}),b=m=>({display:"inline-flex",alignItems:"center",gap:8,opacity:d?1:0,transform:d?"translateY(0)":"translateY(14px)",transition:`opacity 500ms ease-out ${700+m*150}ms, transform 500ms ease-out ${700+m*150}ms`});return h.useEffect(()=>{const m=l.current;if(!m)return;const y=new IntersectionObserver(([S])=>{p(S.isIntersecting)},{threshold:.15,rootMargin:"0px 0px -50px 0px"});return y.observe(m),()=>y.disconnect()},[]),h.useEffect(()=>{const m=l.current,y=c.current;if(!y||!m)return;const S=()=>{if(window.innerWidth<768){y.style.transform="none";return}const k=-m.getBoundingClientRect().top/window.innerHeight;y.style.transform=`translateY(${k*30}px)`};return window.addEventListener("scroll",S,{passive:!0}),()=>window.removeEventListener("scroll",S)},[]),h.useEffect(()=>{i.pathname==="/"&&(a(m=>m+1),window.scrollTo(0,0))},[i.key]),o.jsxs("div",{style:{backgroundColor:"#2D3E29"},children:[o.jsx(_5,{splashDone:e},s),o.jsxs("section",{ref:l,className:`philosophy-section${d?" philosophy-in-view":""}`,style:{backgroundColor:"#f7f4ef",padding:"60px 1.5rem 60px"},children:[o.jsxs("div",{className:"philosophy-flex",style:{maxWidth:1100,margin:"0 auto",display:"flex",gap:"4rem",alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("div",{className:"philosophy-text-block",style:{flex:"0 0 55%",minWidth:280,backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,backgroundRepeat:"repeat"},children:[o.jsxs("div",{className:"philosophy-mobile-fade philosophy-label-row",style:{display:"flex",alignItems:"center",gap:16,marginBottom:"2.5rem",...v(0)},children:[o.jsx("div",{className:"philosophy-label-rule",style:{height:"0.5px",backgroundColor:"#b8966a",width:60}}),o.jsx("span",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.35em",color:"#b8966a",textTransform:"uppercase",whiteSpace:"nowrap"},children:"Our Philosophy"}),o.jsx("div",{className:"philosophy-label-rule",style:{height:"0.5px",backgroundColor:"#b8966a",width:60}})]}),o.jsxs("p",{className:"philosophy-mobile-fade",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.8rem, 3.2vw, 2.75rem)",fontWeight:300,lineHeight:1.25,color:"#3b2f1e",marginBottom:"1.75rem",...v(200)},children:['"Design is not just seen —'," ",o.jsx("em",{style:{color:"#8b6914",fontStyle:"italic"},children:"it is experienced."}),'"']}),o.jsx("p",{className:"philosophy-mobile-fade",style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:"0.9375rem",lineHeight:1.85,color:"#6b5240",marginBottom:"2.5rem",...v(400)},children:"At NIVORA, every project begins with understanding — how you move through a space, what you need from it, and what makes it feel unmistakably yours. We work with refined materials, considered proportions, and timeless palettes to create interiors that hold their beauty for years, not seasons."}),o.jsxs("div",{className:"philosophy-mobile-fade",style:{...v(600)},children:[o.jsx("div",{style:{overflow:"hidden",marginBottom:"1.5rem"},children:o.jsx("div",{style:{height:"0.5px",backgroundColor:"#c9b99a",width:d?"100%":"0%",transition:"width 800ms ease-out 600ms"}})}),o.jsxs("div",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:11,letterSpacing:"3px",color:"#C9A96E",textAlign:"center",textTransform:"uppercase",display:"flex",alignItems:"center",justifyContent:"center",gap:8,margin:0},children:[o.jsxs("span",{style:b(0),children:[o.jsx(xx,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Timeless"]}),o.jsx("span",{style:{fontSize:8,opacity:.5},children:"◆"}),o.jsxs("span",{style:b(1),children:[o.jsx(U4,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Functional"]}),o.jsx("span",{style:{fontSize:8,opacity:.5},children:"◆"}),o.jsxs("span",{style:b(2),children:[o.jsx(vx,{size:14,color:"#C9A96E",strokeWidth:1.5}),"Personal"]})]})]}),o.jsx("div",{className:"philosophy-mobile-fade",style:{marginTop:28,opacity:d?1:0,transform:d?"translateX(0)":"translateX(-40px)",transition:"opacity 600ms ease-out 1150ms, transform 600ms ease-out 1150ms"},children:o.jsxs(he,{to:"/about",style:{position:"relative",fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:400,fontSize:"18px",color:"#C9A96E",textDecoration:"none",letterSpacing:"0.06em",display:"inline-block",paddingBottom:3,transition:"color 0.2s ease"},onMouseEnter:m=>{m.currentTarget.style.color="#A07840"},onMouseLeave:m=>{m.currentTarget.style.color="#C9A96E"},children:["Discover Our Story →",o.jsx("span",{style:{position:"absolute",left:0,bottom:0,height:1,backgroundColor:"currentColor",width:d?"100%":"0%",transition:"width 700ms ease-out 1550ms, background-color 0.2s ease"}})]})})]}),o.jsx("div",{className:"philosophy-image-col",style:{flex:1,minWidth:240,alignSelf:"stretch",opacity:d?1:0,transform:d?"translateX(0)":"translateX(60px)",transition:"opacity 900ms cubic-bezier(0.22,1,0.36,1) 150ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 150ms"},children:o.jsxs("div",{className:"philosophy-image-wrap",style:{position:"relative",display:f?"flex":"block",flexDirection:f?"column":void 0,width:"100%",height:f?"auto":"100%"},children:[!f&&o.jsx("div",{className:"philosophy-frame",style:{position:"absolute",top:8,left:8,right:-8,bottom:-8,border:"1px solid #C9A96E",pointerEvents:"none",zIndex:0}}),o.jsx("div",{className:"philosophy-photo-inner",style:{position:"relative",zIndex:1,overflow:"hidden",height:f?"auto":"100%",borderRadius:f?14:0,boxShadow:f?"0 8px 32px rgba(20,18,14,0.14)":"none"},children:o.jsx("img",{ref:c,src:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=85",alt:"NIVORA Studio — editorial",className:"philosophy-photo",style:{width:"100%",height:f?"auto":"100%",objectFit:"cover",display:"block"},loading:"lazy"})}),o.jsxs("div",{ref:u,className:"philosophy-quote-card","data-inview":d?"true":"false",style:f?{position:"static",marginTop:16,width:"100%",backgroundColor:"rgba(10,14,8,0.88)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",border:"1.5px solid #C9A96E",outline:"1px solid rgba(201,169,110,0.45)",outlineOffset:"6px",padding:"16px 18px",boxShadow:"0 18px 40px rgba(0,0,0,0.28)",opacity:d?1:0,transform:d?"translateY(0)":"translateY(14px)",transition:"opacity 500ms ease-out 300ms, transform 500ms ease-out 300ms"}:{position:"absolute",left:-32,bottom:-32,zIndex:2,width:"45%",maxWidth:"45%",backgroundColor:"rgba(0,0,0,0.45)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",border:"1.5px solid #C9A96E",padding:"16px",boxShadow:"0 18px 40px rgba(0,0,0,0.28)",opacity:d?1:0,transform:d?"scale(1)":"scale(0.4)",transition:"opacity 500ms ease-out 950ms, transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1) 950ms"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:28,lineHeight:.6,color:"#C9A96E",marginBottom:14,opacity:.9},className:"philosophy-quote-mark",children:'"'}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:400,fontSize:15,lineHeight:1.5,color:"#ffffff",margin:0},className:"philosophy-quote-text",children:"We don't just design spaces, we create legacies."}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:400,fontSize:12,letterSpacing:"0.15em",textTransform:"uppercase",color:"#C9A96E",marginTop:12,marginBottom:0},className:"philosophy-quote-author",children:"— Shweta, Founder"})]})]})})]}),o.jsx("style",{children:`
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
        `})]}),o.jsx(F5,{}),o.jsx(O5,{}),o.jsxs("section",{className:"services-section-home",style:{backgroundColor:"#F7F4EF",padding:"7rem 1.5rem"},children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{className:"hsvc-desktop-header",children:o.jsx(se,{children:o.jsxs("div",{style:{textAlign:"center",marginBottom:"4.5rem",maxWidth:640,margin:"0 auto 4.5rem"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"1rem"},children:"Our Services"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.25rem)",color:"#262421",lineHeight:1.1,marginBottom:"1.1rem",letterSpacing:"-0.01em"},children:["Spaces Designed Across",o.jsx("br",{}),"Every Experience"]}),o.jsx("p",{className:"svc-header-desc",style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",lineHeight:1.85,margin:0},children:"From private residences to large-scale environments, we design spaces that balance beauty, function and identity."})]})})}),o.jsx("div",{className:"hsvc-desktop-cards",style:{maxWidth:1200,margin:"0 auto"},children:o.jsx("div",{className:"hsvc-grid-r1",children:Lx.slice(0,4).map((m,y)=>{const S=m.icon;return o.jsx(se,{delay:y*.09,children:o.jsxs(he,{to:"/services",className:"hsvc-card",children:[o.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",borderRadius:24},children:o.jsx("img",{src:m.img,alt:m.title,className:"hsvc-img",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},loading:"lazy"})}),o.jsx("div",{className:"hsvc-overlay"}),o.jsx("p",{className:"hsvc-num",children:m.num}),o.jsxs("div",{className:"hsvc-mid-layer",children:[o.jsx("div",{className:"hsvc-icon-wrap",children:o.jsx(S,{size:18,color:"#C8A56A",strokeWidth:1.4})}),o.jsx("h3",{className:"hsvc-title",children:m.title})]}),o.jsxs("div",{className:"hsvc-detail-layer",children:[o.jsx("div",{className:"hsvc-gold-line"}),o.jsx("p",{className:"hsvc-desc",children:m.desc}),o.jsxs("span",{className:"hsvc-explore",children:["Explore ",o.jsx(He,{size:10,strokeWidth:1.5})]})]})]})},m.title)})})}),o.jsx($5,{})]}),o.jsxs("section",{style:{backgroundColor:"#FAF8F4",padding:"8px 1.5rem"},children:[o.jsx("style",{children:`
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
            `}),o.jsxs("div",{className:"trf-header-row",children:[o.jsxs("div",{className:"trf-header-left",children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.45em",textTransform:"uppercase",color:"#C8A56A",marginBottom:"1rem"},children:"Transformations"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.25rem)",color:"#262421",lineHeight:1.1,marginBottom:"1rem",letterSpacing:"-0.01em"},children:"Before & After"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(38,36,33,0.5)",lineHeight:1.85,margin:0},children:"See how thoughtful design transforms spaces into refined living experiences."})]}),o.jsx("div",{className:"trf-header-right",children:o.jsx("p",{style:{fontFamily:"'Montserrat', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(38,36,33,0.38)",lineHeight:1.9,margin:0},children:"Slide to discover how we transform raw spaces into refined living experiences."})})]})]}),o.jsx(se,{delay:.18,children:o.jsx(B5,{})})]})]}),o.jsxs("section",{style:{backgroundColor:"#F8F6F2",padding:"72px 0 80px"},children:[o.jsx("style",{children:`
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
        `}),o.jsx("div",{style:{maxWidth:1280,margin:"0 auto",padding:"0 2rem"},children:o.jsxs(P.div,{initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.8,ease:"easeOut"},style:{textAlign:"center",marginBottom:"48px"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.46em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"14px"},children:"Our Expertise"}),o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.6rem, 2.8vw, 2.6rem)",color:"#1a1612",lineHeight:1.1,margin:"0 0 18px",letterSpacing:"-0.015em"},children:["Spaces Designed for",o.jsx("br",{}),"Every Lifestyle"]}),o.jsx("div",{style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E 40%, transparent)",margin:"0 auto 16px"}}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:14,color:"rgba(26,22,18,0.44)",lineHeight:1.7,maxWidth:420,margin:"0 auto"},children:"Thoughtfully crafted interiors that blend beauty, functionality, and timeless elegance."})]})}),o.jsx("div",{className:"oe-grid",children:n.map((m,y)=>o.jsxs(P.div,{className:"oe-card",initial:{opacity:0,y:36},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.7,ease:"easeOut",delay:y*.1},children:[o.jsx("div",{className:"oe-img-wrap",children:o.jsx("img",{src:m.img,alt:m.title,className:"oe-img",loading:"lazy",draggable:!1})}),o.jsxs("div",{className:"oe-body",children:[o.jsx("span",{className:"oe-divider"}),o.jsx("h3",{className:"oe-title",children:m.title}),o.jsx("p",{className:"oe-desc",children:m.desc})]})]},m.title))}),o.jsx("div",{className:"oe-carousel-wrap",children:o.jsx(z5,{cards:n})})]}),o.jsx(U5,{}),o.jsx("section",{style:{background:"#FAF8F4",padding:"5rem 0"},children:o.jsx(K5,{posts:r})}),o.jsxs("section",{className:"relative overflow-hidden",style:{backgroundColor:"#33452F",paddingTop:70,paddingBottom:70},children:[o.jsx("div",{className:"absolute inset-0 opacity-5",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 30% 50%, #b8966a 0%, transparent 60%)"}})}),o.jsx("div",{className:"relative max-w-4xl mx-auto px-6 text-center",children:o.jsxs(se,{children:[o.jsx("div",{style:{width:80,height:1,backgroundColor:"#C9A96E",margin:"0 auto 24px"}}),o.jsx("p",{className:"text-[#b8966a] text-[10px] tracking-[0.4em] uppercase mb-6",children:"Currently Accepting Projects"}),o.jsxs("h2",{className:"font-serif text-4xl md:text-6xl text-[#f5f0e8] font-light leading-tight mb-6",style:{fontFamily:"'Playfair Display', serif",fontWeight:400},children:["Ready to Transform",o.jsx("br",{}),"Your Space?"]}),o.jsx("p",{className:"text-[#f5f0e8]/50 font-light mb-10 max-w-lg mx-auto leading-relaxed",children:"A complimentary consultation. No pressure, just possibilities."}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:12,background:"linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",color:"#2D3E29",fontFamily:"'Cinzel', serif",fontWeight:600,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",padding:"20px 52px",textDecoration:"none",transition:"background 0.3s ease, box-shadow 0.3s ease",boxShadow:"0 6px 30px rgba(168,133,79,0.40)"},onMouseEnter:m=>{m.currentTarget.style.background="linear-gradient(135deg, #EDD09A 0%, #D4B078 50%, #B8904E 100%)",m.currentTarget.style.boxShadow="0 10px 40px rgba(168,133,79,0.55)"},onMouseLeave:m=>{m.currentTarget.style.background="linear-gradient(135deg, #E0C38A 0%, #C8A46A 50%, #A8854F 100%)",m.currentTarget.style.boxShadow="0 6px 30px rgba(168,133,79,0.40)"},children:["Begin Your Project ",o.jsx(He,{size:14})]})]})})]})]})}function X5(){const e=h.useRef(null),[t,n]=h.useState(!1);return h.useEffect(()=>{const r=e.current;if(!r)return;const i=()=>n(!0),s=new IntersectionObserver(([l])=>{l.isIntersecting&&(i(),s.disconnect())},{threshold:.05,rootMargin:"0px 0px 60px 0px"});s.observe(r);const a=r.getBoundingClientRect();return a.top<window.innerHeight&&a.bottom>0&&(i(),s.disconnect()),()=>s.disconnect()},[]),{ref:e,visible:t}}function q5({project:e,index:t,delay:n}){const{ref:r,visible:i}=X5(),s=String(t+1).padStart(2,"0");return o.jsx("div",{ref:r,style:{opacity:i?1:0,transform:i?"translateY(0)":"translateY(36px)",transition:`opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${n}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${n}ms`},children:o.jsxs(he,{to:`/portfolio/${e.id}`,className:"ptf-card",style:{display:"block",position:"relative",overflow:"hidden",borderRadius:24,textDecoration:"none",cursor:"pointer",background:"#e4ddd4",aspectRatio:"16 / 10"},children:[o.jsx("img",{src:e.coverImage,alt:e.name,className:"ptf-img",loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:1,display:"block",transition:"transform 0.65s cubic-bezier(0.16,1,0.3,1)",zIndex:2}}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(6,10,6,0) 35%, rgba(6,10,6,0.80) 100%)",zIndex:3}}),o.jsx("div",{className:"ptf-hover-overlay",style:{position:"absolute",inset:0,background:"rgba(8,14,8,0.38)",opacity:0,transition:"opacity 0.45s ease",zIndex:4}}),o.jsx("div",{className:"ptf-accent-line",style:{position:"absolute",bottom:0,left:22,right:22,height:2,background:"linear-gradient(90deg, #C9A96E, #e8d5a3 50%, #C9A96E)",width:0,transition:"width 0.5s cubic-bezier(0.16,1,0.3,1)",zIndex:10}}),o.jsx("div",{style:{position:"absolute",top:20,left:22,zIndex:8,fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:11,color:"rgba(255,255,255,0.45)",letterSpacing:"0.2em"},children:s}),o.jsx("div",{style:{position:"absolute",top:16,right:18,zIndex:8,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:9,color:"rgba(255,255,255,0.55)",letterSpacing:"0.25em",textTransform:"uppercase",background:"rgba(0,0,0,0.28)",backdropFilter:"blur(6px)",padding:"5px 10px",borderRadius:20,border:"1px solid rgba(255,255,255,0.1)"},children:e.category}),o.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"0 22px 22px",zIndex:9},children:[o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:22,color:"#f5f0e8",margin:0,lineHeight:1.2,letterSpacing:"0.01em"},children:e.name}),o.jsxs("div",{className:"ptf-hover-content",style:{overflow:"hidden",maxHeight:0,opacity:0,transition:"max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease"},children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:12,color:"rgba(245,240,232,0.7)",margin:"8px 0 0",lineHeight:1.6,letterSpacing:"0.01em"},children:e.location}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:14,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:9,color:"#a18661",letterSpacing:"0.25em",textTransform:"uppercase"},children:["View Project ",o.jsx(He,{size:10,strokeWidth:1.5})]})]})]})]})})}function J5(){return o.jsx("div",{style:{borderRadius:24,background:"linear-gradient(90deg, #e4ddd4 25%, #ede6dc 50%, #e4ddd4 75%)",backgroundSize:"200% 100%",animation:"shimmer 1.4s infinite",aspectRatio:"16 / 10"}})}function Q5(){const[e,t]=h.useState([]),[n,r]=h.useState(!0),[i,s]=h.useState(null);h.useEffect(()=>{Ax().then(l=>{t(l.slice(0,8)),r(!1)}).catch(l=>{console.error("Portfolio fetch error:",l),s("Failed to load projects. Please try again."),r(!1)})},[]);const a=e;return o.jsxs("div",{style:{background:"#f5f2ed",minHeight:"100vh",paddingTop:80},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("section",{style:{textAlign:"center",padding:"80px 24px 60px"},children:[o.jsx(P.p,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,color:"#D4B483",letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:24},children:"Our Work"}),o.jsx(P.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.8rem, 7vw, 5.5rem)",color:"#262421",lineHeight:1.05,marginBottom:32,letterSpacing:"-0.01em"},children:"Spaces That Tell Your Story"}),o.jsx(P.div,{initial:{width:0},animate:{width:48},transition:{duration:.8,delay:.3},style:{height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 32px"}}),o.jsxs(P.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.4},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.55)",lineHeight:1.8,maxWidth:480,margin:"0 auto"},children:["Every project is a reflection of the people who live and work there.",o.jsx("br",{}),"See how thoughtful design transforms spaces into something truly special."]})]}),o.jsx("section",{style:{maxWidth:1100,margin:"0 auto",padding:"0 24px 80px"},children:i?o.jsx("div",{style:{textAlign:"center",padding:"60px 0",color:"#2E2A26",opacity:.6},children:o.jsx("p",{children:i})}):o.jsx("div",{className:"ptf-grid",children:n?Array.from({length:8}).map((l,c)=>o.jsx(J5,{},c)):a.map((l,c)=>o.jsx(q5,{project:l,index:c,delay:Math.min(c*80,400)},l.id))})}),!n&&!i&&o.jsxs("section",{style:{textAlign:"center",padding:"80px 24px",borderTop:"1px solid rgba(201,169,110,0.2)",background:"rgba(201,169,110,0.04)"},children:[o.jsx(P.p,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(28,40,24,0.38)",lineHeight:1.8,marginBottom:32},children:"Ready to create a space that tells your story?"}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:12,fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.26em",textTransform:"uppercase",color:"#1C2818",border:"1px solid rgba(28,40,24,0.3)",padding:"18px 52px",textDecoration:"none",borderRadius:2,transition:"all 0.4s ease"},onMouseEnter:l=>{const c=l.currentTarget;c.style.background="#2A3926",c.style.borderColor="#2A3926",c.style.color="#f5f0e8",c.style.transform="translateY(-2px)"},onMouseLeave:l=>{const c=l.currentTarget;c.style.background="transparent",c.style.borderColor="rgba(28,40,24,0.3)",c.style.color="#1C2818",c.style.transform="translateY(0)"},children:["Start Your Project ",o.jsx(He,{size:13,strokeWidth:1.5})]})]})]})}const Qf=[{num:"01",title:"Discover",text:"A free consultation to understand your lifestyle, vision, and budget — before anything is planned.",side:"left"},{num:"02",title:"Visualise",text:"3D renders and mood boards bring your space to life before a single item is moved or purchased.",side:"right"},{num:"03",title:"Execute",text:"Master craftsmen, transparent timelines, and on-site precision deliver your design flawlessly.",side:"left"},{num:"04",title:"Reveal",text:"A styled, ready-to-move-in space that exceeds every expectation and reflects your vision.",side:"right"},{num:"05",title:"Handover",text:"Your space, fully ready. A lasting relationship that continues well beyond the final delivery.",side:"left"}];function Z5({active:e}){return o.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",style:{display:"block"},children:o.jsx(P.path,{d:"M 3.5 9 L 7.5 13 L 14.5 5",stroke:"#C9A96E",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",initial:{pathLength:0,opacity:0},animate:e?{pathLength:1,opacity:1}:{pathLength:0,opacity:0},transition:{duration:.65,ease:"easeInOut",delay:.35}})})}function ek({active:e,mobile:t}){return o.jsxs(P.div,{className:"process-diamond-outer",initial:{scale:0,opacity:0},animate:e?{scale:1,opacity:1}:{scale:0,opacity:0},transition:t?{duration:.5,ease:"easeOut"}:{duration:.55,ease:[.16,1,.3,1]},style:{width:52,height:52,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:2,willChange:"transform, opacity"},children:[o.jsx(P.div,{animate:t?e?{opacity:[.4,1,.4],scale:[.9,1.25,.9]}:{opacity:0,scale:.8}:e?{opacity:1,scale:1}:{opacity:0,scale:.8},transition:t?e?{duration:2,repeat:1/0,ease:"easeInOut"}:{duration:.4}:{duration:.7,delay:.3},style:{position:"absolute",inset:0,borderRadius:2,background:"radial-gradient(ellipse at center, rgba(201,169,110,0.18) 0%, transparent 70%)",transform:"rotate(45deg)",willChange:"transform, opacity"}}),o.jsx(P.div,{className:"process-diamond-inner",animate:e?{background:"#2A3926",borderColor:"#C9A96E"}:{background:"#F5F2ED",borderColor:"rgba(201,169,110,0.4)"},transition:{duration:.45},style:{width:38,height:38,border:"1.5px solid rgba(201,169,110,0.4)",transform:"rotate(45deg)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:o.jsx("div",{style:{transform:"rotate(-45deg)"},children:o.jsx(Z5,{active:e})})}),t&&o.jsx(P.div,{initial:{scale:1,opacity:0},animate:e?{scale:2.6,opacity:[0,.65,0]}:{scale:1,opacity:0},transition:{duration:1,ease:"easeOut",delay:.5},style:{position:"absolute",inset:0,border:"1.5px solid #C9A96E",borderRadius:2,transform:"rotate(45deg)",pointerEvents:"none",willChange:"transform, opacity"}})]})}function tk({active:e}){return o.jsx("div",{className:"process-line-outer",style:{display:"flex",justifyContent:"center",position:"relative",zIndex:1},children:o.jsx("div",{className:"process-line-track",style:{width:1,height:90,background:"rgba(201,169,110,0.14)",position:"relative",overflow:"hidden"},children:o.jsx(P.div,{initial:{scaleY:0},animate:e?{scaleY:1}:{scaleY:0},transition:{duration:.7,ease:[.16,1,.3,1],delay:.15},style:{position:"absolute",inset:0,background:"linear-gradient(to bottom, #C9A96E 0%, rgba(201,169,110,0.45) 100%)",transformOrigin:"top",willChange:"transform"}})})})}function Zf({step:e,active:t,align:n,mobile:r,side:i}){const s=r?{opacity:0,y:18}:{opacity:0,y:14},a=t?{opacity:1,y:0}:s,l=r?{duration:.6,ease:"easeOut",delay:.2}:{duration:.6,ease:[.16,1,.3,1],delay:.15};return o.jsxs("div",{style:{textAlign:n},children:[o.jsxs(P.h3,{className:"process-title",initial:s,animate:a,transition:l,style:{fontFamily:"'Playfair Display', serif",fontStyle:"italic",fontWeight:400,fontSize:"clamp(1.6rem, 2.5vw, 2.1rem)",color:"#262421",margin:"0 0 12px",lineHeight:1.1,position:r?"relative":void 0,display:r?"inline-block":void 0,willChange:"transform, opacity"},children:[e.title,r&&o.jsx(P.span,{"aria-hidden":"true",initial:{backgroundPositionX:"-150%"},animate:t?{backgroundPositionX:"250%"}:{backgroundPositionX:"-150%"},transition:{duration:1,delay:.55,ease:"easeInOut"},style:{position:"absolute",inset:0,backgroundImage:"linear-gradient(100deg, transparent 35%, rgba(201,169,110,0.9) 50%, transparent 65%)",backgroundSize:"200% 100%",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",pointerEvents:"none"},children:e.title})]}),o.jsx(P.p,{className:"process-desc",initial:{opacity:0,y:r?20:10,filter:r?"blur(4px)":"blur(0px)"},animate:t?{opacity:1,y:0,filter:"blur(0px)"}:{opacity:0,y:r?20:10,filter:r?"blur(4px)":"blur(0px)"},transition:{duration:r?.4:.6,ease:"easeOut",delay:r?.4:.25},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(28,40,24,0.52)",lineHeight:1.8,margin:0,willChange:"transform, opacity"},children:e.text})]})}function nk({step:e,index:t,isMobile:n,onVisible:r}){const i=h.useRef(null),s=wn(i,{once:!1,margin:"0px 0px -80px 0px",amount:.4});h.useEffect(()=>{r(t,s)},[s,t,r]);const a=e.side==="left",l=u=>({hidden:{opacity:0,y:24},visible:{opacity:1,y:0}}),c=n?{duration:.5,ease:"easeOut"}:{duration:.65,ease:[.16,1,.3,1]};return o.jsxs("div",{ref:i,style:{display:"grid",gridTemplateColumns:"1fr 52px 1fr",alignItems:"center",gap:0},className:"timeline-step-row",children:[o.jsx("div",{style:{paddingRight:48,display:"flex",justifyContent:"flex-end"},className:"tl-left-cell",children:a?o.jsx(P.div,{className:"process-content-box",variants:l(),initial:"hidden",animate:s?"visible":"hidden",transition:c,style:{maxWidth:320,width:"100%",willChange:"transform, opacity"},children:o.jsx(Zf,{step:e,active:s,align:"right",mobile:n,side:"left"})}):o.jsx("div",{})}),o.jsx(ek,{active:s,mobile:n}),o.jsx("div",{style:{paddingLeft:48},className:"tl-right-cell",children:a?o.jsx("div",{}):o.jsx(P.div,{className:"process-content-box",variants:l(),initial:"hidden",animate:s?"visible":"hidden",transition:c,style:{maxWidth:320,width:"100%",willChange:"transform, opacity"},children:o.jsx(Zf,{step:e,active:s,align:"left",mobile:n,side:"right"})})})]})}function rk({isMobile:e}){const t=h.useRef(null),n=wn(t,{once:!e,amount:.5}),r="Our Process".split(" ");return o.jsxs("div",{style:{textAlign:"center",marginBottom:88,padding:"0 24px"},className:"process-header",children:[o.jsx(P.p,{initial:{opacity:0,y:10,scale:e?.8:1},whileInView:{opacity:1,y:0,scale:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.6},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",margin:"0 0 14px",willChange:"transform, opacity"},children:"How We Do It"}),o.jsxs("div",{ref:t,children:[o.jsx(P.h2,{className:"process-heading-desktop",initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.1},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 3.5vw, 3rem)",color:"#262421",lineHeight:1.04,margin:"0 0 18px",letterSpacing:"-0.01em"},children:"Our Process"}),o.jsx("h2",{className:"process-heading-mobile",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 3.5vw, 3rem)",color:"#262421",lineHeight:1.04,margin:"0 0 18px",letterSpacing:"-0.01em",justifyContent:"center",gap:"0.35em",perspective:500},children:r.map((i,s)=>o.jsx(P.span,{style:{display:"inline-block",transformStyle:"preserve-3d",willChange:"transform, opacity"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.55,delay:s*.15,ease:[.16,1,.3,1]},children:i},s))})]}),o.jsx(P.div,{initial:{scaleX:0},whileInView:{scaleX:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.7,delay:.25},style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 18px",transformOrigin:"center"}}),o.jsx(P.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:e?{once:!1,amount:.4}:{once:!0},transition:{duration:.6,delay:.3},style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.44)",lineHeight:1.8},children:"From first conversation to final reveal — a seamless, end-to-end journey."})]})}function ik(){const[e,t]=h.useState(new Set),[n,r]=h.useState(()=>typeof window<"u"?window.matchMedia("(max-width: 768px)").matches:!1),i=h.useRef(null),s=wn(i,{once:!1,amount:.2});h.useEffect(()=>{const l=window.matchMedia("(max-width: 768px)");r(l.matches);const c=u=>r(u.matches);return l.addEventListener("change",c),()=>l.removeEventListener("change",c)},[]);const a=h.useCallback((l,c)=>{t(u=>{const d=u.has(l);if(c&&!d)return new Set([...u,l]);if(!c&&d){const p=new Set(u);return p.delete(l),p}return u})},[n]);return o.jsxs("section",{style:{background:"#F5F2ED",padding:"120px 0"},children:[o.jsx(rk,{isMobile:n}),o.jsxs("div",{ref:i,style:{maxWidth:860,margin:"0 auto",padding:"0 24px",position:"relative"},className:"tl-container",children:[o.jsxs("div",{className:"process-mobile-line-outer",style:{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",width:1,height:"100%",background:"rgba(201,169,110,0.14)",overflow:"hidden",zIndex:3,pointerEvents:"none"},children:[o.jsx(P.div,{initial:{scaleY:0},animate:s?{scaleY:1}:{scaleY:0},transition:{duration:1.5,ease:"easeInOut"},style:{position:"absolute",inset:0,transformOrigin:"top",background:"linear-gradient(to bottom, #C9A96E 0%, rgba(201,169,110,0.45) 100%)",willChange:"transform"}}),o.jsx(P.div,{animate:s?{y:["-100%","110%"]}:{y:"-100%"},transition:s?{duration:2.5,ease:"linear",repeat:1/0,repeatDelay:.3}:{duration:0},style:{position:"absolute",top:0,left:0,right:0,height:"25%",background:"linear-gradient(to bottom, transparent 0%, rgba(201,169,110,0.7) 50%, transparent 100%)",pointerEvents:"none",willChange:"transform"}})]}),Qf.map((l,c)=>o.jsxs("div",{children:[o.jsx(nk,{step:l,index:c,isMobile:n,onVisible:a}),c<Qf.length-1&&o.jsx(tk,{active:e.has(c)})]},l.num))]}),o.jsxs(P.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:.1},style:{textAlign:"center",marginTop:80,padding:"0 24px"},children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.35em",color:"rgba(28,40,24,0.32)",textTransform:"uppercase",margin:"0 0 28px"},children:"End-to-End  ·  Transparent  ·  Hassle-Free"}),o.jsx(he,{to:"/contact",style:{display:"inline-block",fontFamily:"'Inter', sans-serif",fontWeight:400,fontSize:10,letterSpacing:"0.25em",textTransform:"uppercase",background:"#2A3926",color:"#ffffff",padding:"18px 52px",textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:l=>{const c=l.currentTarget;c.style.background="#3a5e3c",c.style.transform="translateY(-2px)"},onMouseLeave:l=>{const c=l.currentTarget;c.style.background="#2A3926",c.style.transform="translateY(0)"},children:"Book Free Consultation"})]}),o.jsx("style",{children:`
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
      `})]})}const ok=[{num:"01",title:"Residential Interiors",desc:"Designing elegant homes and living spaces that blend comfort, functionality, and timeless beauty.",img:Yu},{num:"02",title:"Commercial Interiors",desc:"Creating productive offices, clinics, retail stores, and professional workspaces.",img:Ku},{num:"03",title:"Hospitality Interiors",desc:"Crafting memorable guest experiences through hotels, cafés, restaurants, and hospitality environments.",img:Gu},{num:"04",title:"Architecture & Space Planning",desc:"Planning layouts, elevations, facades, and architectural concepts for optimized spaces.",img:Xu},{num:"05",title:"2D & 3D Visualization",desc:"Concept drawings, renders and visual development before execution begins.",img:qu},{num:"06",title:"Developer Solutions",desc:"Sample flats, amenities and curated experiences that enhance property value.",img:Ju},{num:"07",title:"Renovation & Makeovers",desc:"Transform existing spaces through upgrades, modernization and thoughtful redesign.",img:Qu}],em=[{num:"01",eyebrow:"01 — RESIDENTIAL INTERIORS",title:"Residential Interiors",intro:"Designing Homes That Feel Like You",desc:"Your home should be more than just a place to live—it should reflect your personality, lifestyle, and aspirations. Whether you’re moving into a new apartment, building your dream villa, renovating an existing home, or creating a weekend retreat, we design spaces that are functional, timeless, and uniquely yours.",expertise:["Apartments & Flats","Villas & Bungalows","Luxury Residences","Modular Kitchens","Bedrooms & Living Spaces","Custom Storage Solutions"],img:Yu},{num:"02",eyebrow:"02 — COMMERCIAL INTERIORS",title:"Commercial Interiors",intro:"Spaces Designed for Productivity & Impact",desc:"A well-designed workspace inspires creativity, improves efficiency, and leaves a lasting impression on clients and visitors. From corporate offices and co-working spaces to retail stores, clinics, and fitness studios, we create environments that balance functionality, comfort, and brand identity.",expertise:["Corporate Offices","Co-working Spaces","Retail Stores","Clinics & Healthcare Facilities","Fitness Studios & Gyms","Reception & Waiting Areas"],img:Ku},{num:"03",eyebrow:"03 — HOSPITALITY INTERIORS",title:"Hospitality Interiors",intro:"Creating Experiences Through Design",desc:"In hospitality, every detail contributes to the guest experience. We design inviting and memorable environments that combine aesthetics, comfort, and functionality, ensuring every visitor feels welcomed and inspired.",expertise:["Cafés & Restaurants","Hotels & Resorts","Lounges & Clubhouses","Spas & Wellness Centres","Banquet & Event Spaces","Guest Experience Design"],img:Gu},{num:"04",eyebrow:"04 — ARCHITECTURE & SPACE PLANNING",title:"Architecture & Space Planning",intro:"Building Strong Foundations for Exceptional Spaces",desc:"Great design begins with thoughtful planning. Our architectural and space planning services focus on creating efficient layouts, striking elevations, and well-balanced spaces that maximize both aesthetics and functionality.",expertise:["Architectural Planning","Floor Plans & Layouts","Elevation Design","Facade Design","Space Optimization","Design Development"],img:Xu},{num:"05",eyebrow:"05 — INTERIOR DESIGN & 3D VISUALIZATION",title:"Interior Design & 3D Visualization",intro:"Bringing Ideas to Life Before Execution",desc:"Visualize your future space with confidence through detailed drawings and realistic 3D renderings. Our design process helps you explore layouts, materials, finishes, and design concepts before construction begins.",expertise:["Space Planning","Concept Development","2D Drawings","3D Visualizations","Material Selection","Design Presentations"],img:qu},{num:"06",eyebrow:"06 — DEVELOPER & BUILDER SOLUTIONS",title:"Developer & Builder Solutions",intro:"Enhancing Properties to Maximize Market Appeal",desc:"We collaborate with developers and builders to create thoughtfully designed spaces that elevate property value and attract potential buyers. From show apartments to common amenities, every space is crafted to leave a lasting impression.",expertise:["Sample Flats","Sales Offices","Clubhouses","Entrance Lobbies","Amenity Spaces","Common Area Design"],img:Ju},{num:"07",eyebrow:"07 — RENOVATION & MAKEOVERS",title:"Renovation & Makeovers",intro:"Transforming Existing Spaces with Purpose",desc:"Whether you’re updating a home, refreshing a workplace, or modernizing an outdated interior, our renovation services breathe new life into existing spaces while preserving what matters most.",expertise:["Home Renovations","Office Refurbishments","Kitchen Upgrades","Space Reconfiguration","Interior Refreshes","Styling & Décor Enhancements"],img:Qu}];function sk({service:e,index:t,image:n}){const r=t%2===0;return o.jsxs("article",{className:`svc-detail ${t%2?"svc-detail-reverse":""}`,children:[o.jsx(Yt,{className:"svc-detail-image-reveal",direction:r?"left":"right",children:o.jsx("div",{className:"svc-detail-image-wrap",children:o.jsx("img",{src:n,alt:e.title,className:"svc-detail-image",loading:t===0?"eager":"lazy"})})}),o.jsx(Yt,{className:"svc-detail-content-reveal",direction:"up",delay:.12,children:o.jsxs("div",{className:"svc-detail-content",children:[o.jsx(Yt,{delay:0,children:o.jsx("p",{className:"svc-detail-eyebrow",children:e.eyebrow})}),o.jsx(Yt,{delay:.06,children:o.jsx("h2",{children:e.title})}),o.jsx(Yt,{delay:.12,children:o.jsx("h3",{children:e.intro})}),o.jsx(Yt,{delay:.18,children:o.jsx("p",{className:"svc-detail-description",children:e.desc})}),o.jsx(Yt,{delay:.24,children:o.jsx("p",{className:"svc-detail-expertise-label",children:"Our Expertise"})}),o.jsx("ul",{className:"svc-detail-expertise",children:e.expertise.map((i,s)=>o.jsx("li",{children:o.jsx(Yt,{delay:.3+s*.06,children:i})},i))})]})})]})}function Yt({children:e,delay:t=0,direction:n="up",className:r=""}){const i=h.useRef(null),s=wn(i,{once:!1,margin:"-60px"}),[a,l]=h.useState(()=>typeof window<"u"&&window.matchMedia("(max-width: 640px)").matches);h.useEffect(()=>{const d=window.matchMedia("(max-width: 640px)"),p=()=>l(d.matches);return p(),d.addEventListener("change",p),()=>d.removeEventListener("change",p)},[]);const u=a?{x:0,y:24}:n==="left"?{x:-36,y:0}:n==="right"?{x:36,y:0}:{x:0,y:24};return o.jsx(P.div,{ref:i,className:`svc-reveal ${r}`,initial:{opacity:0,...u},animate:s?{opacity:1,x:0,y:0}:{opacity:0,...u},transition:{duration:.7,delay:t,ease:[.25,.1,.25,1]},children:e})}function ak(){var s,a,l;const e=h.useRef(null),{settings:t}=Sn(),n=(s=t==null?void 0:t.servicesList)!=null&&s.length?t.servicesList.map((c,u)=>({num:String(u+1).padStart(2,"0"),title:c.title,desc:c.desc,img:c.img})):ok,r=((a=t==null?void 0:t.servicePageHero)==null?void 0:a.headline)||"Our Services",i=((l=t==null?void 0:t.servicePageHero)==null?void 0:l.subheadline)||"Complete interior design and architecture services — from first conversation to final reveal.";return o.jsxs("div",{style:{backgroundColor:"#f5f2ed",minHeight:"100vh"},children:[o.jsx("style",{children:`
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
      `}),o.jsx("section",{style:{paddingTop:96,paddingBottom:48,paddingLeft:"1.5rem",paddingRight:"1.5rem",textAlign:"center",maxWidth:620,margin:"0 auto"},children:o.jsxs(se,{children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"0.9rem"},children:"What We Offer"}),o.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 3.5vw, 3.25rem)",color:"#1C2818",lineHeight:1.06,marginBottom:"1rem",letterSpacing:"-0.01em"},children:r}),o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"rgba(28,40,24,0.48)",lineHeight:1.85},children:i})]})}),o.jsx(se,{children:o.jsx("div",{style:{width:44,height:1,background:"linear-gradient(90deg, transparent, #C9A96E, transparent)",margin:"0 auto 64px"}})}),o.jsx("section",{style:{maxWidth:1180,margin:"0 auto",padding:"0 2rem 80px"},children:o.jsx("div",{className:"svc-grid-pm",children:n.map((c,u)=>o.jsx(sk,{service:em[u],index:u,image:c.img||em[u].img},c.num))})}),o.jsx(ik,{}),o.jsx("section",{ref:e,style:{backgroundColor:"#21291a",padding:"88px 1.5rem",textAlign:"center"},children:o.jsxs(se,{children:[o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#9B7D4E",marginBottom:"1rem"},children:"Ready to Begin?"}),o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3.5rem)",color:"#f5f0e8",fontStyle:"italic",lineHeight:1.15,marginBottom:"1.4rem"},children:"Not sure where to start?"}),o.jsx("p",{style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:13,color:"rgba(245,240,232,0.42)",lineHeight:1.85,maxWidth:400,margin:"0 auto 2.75rem"},children:"Book a free consultation and we'll guide you through the best approach for your project."}),o.jsxs(he,{to:"/contact",style:{display:"inline-flex",alignItems:"center",gap:10,backgroundColor:"#a18661",color:"#1C2818",fontFamily:"'Inter', sans-serif",fontWeight:500,fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",padding:"18px 48px",textDecoration:"none",borderRadius:2,transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:c=>{const u=c.currentTarget;u.style.backgroundColor="#ddb97a",u.style.transform="translateY(-2px)"},onMouseLeave:c=>{const u=c.currentTarget;u.style.backgroundColor="#a18661",u.style.transform="translateY(0)"},children:["Book Free Consultation ",o.jsx(He,{size:13,strokeWidth:1.5})]})]})})]})}const lk="/assets/WhatsApp_Image_2026-07-08_at_20.50.13_1783534790416-DCZK0Ozg.jpeg";function Lr(){const[e,t]=h.useState(!1);return h.useEffect(()=>{const n=window.matchMedia("(max-width: 768px)");t(n.matches);const r=i=>t(i.matches);return n.addEventListener("change",r),()=>n.removeEventListener("change",r)},[]),e}const tm=[{title:"Thoughtful Design",desc:"Every decision is intentional. We never add without asking why.",Icon:V4},{title:"Timeless Elegance",desc:"We design for years, not seasons. Quality over trend.",Icon:yx},{title:"Personal Connection",desc:"We listen before we design. Your life shapes your space.",Icon:vx},{title:"Quality & Craftsmanship",desc:"Refined materials, skilled execution, no shortcuts.",Icon:Nx},{title:"Trust & Transparency",desc:"Clear timelines, honest communication, no surprises.",Icon:$4}],ck=[{value:25,suffix:"+",label:"Clients Served",duration:1800},{value:5,suffix:"+",label:"Years of Experience",duration:1200},{value:2,suffix:"",label:"Cities — Mumbai & Pune",duration:1200},{value:100,suffix:"%",label:"End-to-End Solutions",duration:1600}];function uk(e){const t=e.match(/^(\d+(?:\.\d+)?)(.*)$/);return t?{numeric:Number(t[1]),suffix:t[2]}:{numeric:0,suffix:""}}const dk=["Home interiors — 1BHK, 2BHK, 3BHK apartments & villas","Office and workspace design","Showrooms and retail spaces","Cafés and hospitality interiors"],pk=lk,fk="/images/about/about-who-we-are.png",jt={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#a18661",marginBottom:20},Yi={fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2rem, 3.5vw, 3.25rem)",letterSpacing:"-0.01em",color:"#262421",lineHeight:1.2,marginBottom:32},pt={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,lineHeight:1.78,color:"#5c5c5c"},mk={hidden:{},visible:{transition:{staggerChildren:.1}}},hk={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},gk={hidden:{},visible:{transition:{staggerChildren:.13}}},xk={hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.45,ease:[.22,1,.36,1]}}},yk={hidden:{},visible:{transition:{staggerChildren:.15}}},vk={hidden:{opacity:0,y:24},visible:{opacity:1,y:0,transition:{duration:.55,ease:[.22,1,.36,1]}}},En=[0,130,260,390,520,650,780];function bk({founderImg:e}){const t=h.useRef(null),n=Lr();return h.useEffect(()=>{const r=t.current;if(!r)return;const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting?(a.target.classList.add("in-view"),n||i.unobserve(a.target)):n&&a.target.classList.remove("in-view")})},{threshold:.15});return r.querySelectorAll(".founder-animate, .founder-image-wrap").forEach(s=>i.observe(s)),()=>i.disconnect()},[n]),o.jsx("section",{className:`py-24 about-section-pad${n?" founder-mobile":""}`,style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{ref:t,className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-stretch",children:[o.jsxs("div",{children:[o.jsx("p",{className:"founder-animate",style:{...jt,transitionDelay:`${En[0]}ms`},children:"The Founder"}),o.jsx("h2",{className:"founder-animate",style:{...Yi,transitionDelay:`${En[1]}ms`},children:"Shweta Mahadik"}),o.jsx("p",{className:"founder-animate",style:{...jt,letterSpacing:"0.2em",marginBottom:32,color:"rgba(33,41,26,0.45)",transitionDelay:`${En[2]}ms`},children:"Founder & Principal Designer"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18,marginBottom:40},children:[o.jsx("p",{className:"founder-animate",style:{...pt,transitionDelay:`${En[3]}ms`},children:"Shweta brings a rare combination of civil engineering precision and interior design sensibility to every project. Her background in construction gives her an instinctive understanding of how spaces are built — not just how they look — which translates into designs that are both beautiful and structurally sound."}),o.jsx("p",{className:"founder-animate",style:{...pt,transitionDelay:`${En[4]}ms`},children:"Her approach is hands-on and deeply personal. She visits every project site herself, works closely with craftspeople, and maintains direct communication with clients throughout the process."}),o.jsx("p",{className:"founder-animate",style:{...pt,transitionDelay:`${En[5]}ms`},children:"For Shweta, good design is not about decoration. It is about creating environments that make everyday life calmer, more considered, and more enjoyable."})]}),o.jsxs("blockquote",{className:"founder-animate",style:{borderLeft:"2px solid #a18661",background:"rgba(161,134,97,0.06)",borderRadius:"0 6px 6px 0",padding:"20px 24px",transitionDelay:`${En[6]}ms`},children:[o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontWeight:300,fontSize:"1.2rem",color:"#2c2c2c",lineHeight:1.65,marginBottom:12},children:'"For me, design is not about decoration. It is about creating spaces that feel calm, meaningful, and effortless to live in."'}),o.jsx("cite",{style:{...jt,fontStyle:"normal",marginBottom:0,display:"block",color:"#a18661"},children:"— Shweta Mahadik"})]})]}),o.jsx("div",{className:"founder-image-wrap overflow-hidden",style:{borderRadius:4,height:"100%"},children:o.jsx("img",{src:e,alt:"Shweta Mahadik — Founder, NIVORA Interiors",className:"w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-700",loading:"lazy"})})]})})}function wk(){const{settings:e}=Sn(),t=h.useMemo(()=>{var l;return(l=e==null?void 0:e.aboutStats)!=null&&l.length?e.aboutStats.map(c=>{const{numeric:u,suffix:d}=uk(c.value);return{value:u,suffix:d,label:c.label,duration:1400}}):ck},[e==null?void 0:e.aboutStats]),[n,r]=h.useState(()=>t.map(()=>0)),i=h.useRef(!1),s=h.useRef(null),a=Lr();return h.useEffect(()=>{r(t.map(()=>0)),i.current=!1},[t]),h.useEffect(()=>{const l=s.current;if(!l)return;let c=[];const u=()=>{c.forEach(x=>cancelAnimationFrame(x)),c=[]},d=()=>{!a&&i.current||(i.current=!0,u(),a&&r(t.map(()=>0)),t.forEach((x,v)=>{const b=performance.now(),w=g=>{const m=Math.min((g-b)/x.duration,1),y=1-Math.pow(1-m,4),S=Math.round(x.value*y);r(j=>{const k=[...j];return k[v]=S,k}),m<1?c[v]=requestAnimationFrame(w):r(j=>{const k=[...j];return k[v]=x.value,k})};c[v]=requestAnimationFrame(w)}))},p=new IntersectionObserver(([x])=>{x.isIntersecting?d():a&&(i.current=!1,u())},{threshold:.2});p.observe(l);const f=l.getBoundingClientRect();return f.top<window.innerHeight&&f.bottom>0&&d(),()=>{p.disconnect(),u()}},[a,t]),o.jsx("section",{ref:s,className:"about-stats-section",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.2)",borderBottom:"1px solid rgba(161,134,97,0.2)",padding:"72px 24px"},children:o.jsxs("div",{style:{maxWidth:900,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0},className:"about-stats-grid",children:[o.jsx("style",{children:`
          @media (max-width: 640px) {
            .about-stats-grid { grid-template-columns: repeat(2,1fr) !important; }
            .about-stats-item + .about-stats-item { border-left: none !important; border-top: 1px solid rgba(161,134,97,0.18) !important; }
          }
          .about-stats-item + .about-stats-item { border-left: 1px solid rgba(161,134,97,0.18); }
        `}),t.map((l,c)=>o.jsx(se,{delay:c*.1,className:"about-stats-item",direction:"up",children:o.jsxs("div",{style:{textAlign:"center",padding:"12px 24px"},children:[o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:"clamp(2.4rem, 4.5vw, 3.2rem)",lineHeight:1,color:"#a18661",margin:"0 0 10px"},children:[n[c],l.suffix]}),o.jsx("p",{style:{...jt,marginBottom:0},children:l.label})]})},c))]})})}function nm({type:e,text:t}){const[n,r]=h.useState(!1),i=e==="mission",s=i?G4:I4,a=i?"Mission":"Vision",l=i?"rgba(161,134,97,0.055)":"rgba(95,116,94,0.04)";return o.jsxs(P.div,{variants:vk,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{background:l,border:"1px solid rgba(161,134,97,0.22)",borderTop:`4px solid ${n?"#c8a97e":"#a18661"}`,borderRadius:6,padding:"32px 36px 36px",cursor:"default",transform:n?"translateY(-4px)":"translateY(0)",boxShadow:n?"0 16px 40px rgba(33,41,26,0.1)":"0 2px 8px rgba(33,41,26,0.04)",transition:"transform 0.28s ease, box-shadow 0.28s ease, border-top-color 0.28s ease"},children:[o.jsx("div",{style:{marginBottom:14},children:o.jsx(s,{size:24,color:"#a18661",strokeWidth:1.4})}),o.jsx("p",{style:{...jt,fontSize:11,letterSpacing:"0.5em",fontWeight:500},children:a.toUpperCase()}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:"clamp(1.25rem, 2.2vw, 1.5rem)",color:"#21291a",lineHeight:1.5,margin:0},children:t})]})}function rm({v:e,index:t,isTapped:n,onTap:r}){const[i,s]=h.useState(!1),a=Lr(),l=h.useRef(null);wn(l,{once:!0,amount:.2});const c=t*.12;return o.jsxs(P.div,{ref:l,variants:a?void 0:xk,onMouseEnter:()=>!a&&s(!0),onMouseLeave:()=>!a&&s(!1),onClick:()=>a&&(r==null?void 0:r()),className:a?`value-item-row value-item-mob${n?" vi-mob-active":""}`:"value-item-row",style:{display:"flex",gap:20,alignItems:"flex-start",paddingBottom:28,...a?{"--vi-delay":`${c}s`}:{}},children:[o.jsx("div",{className:"value-icon-col",style:{flexShrink:0,width:40,paddingTop:2},children:a?o.jsx("div",{className:`vi-mob-icon-wrap${n?" vi-tapped":""}`,children:o.jsx(e.Icon,{size:36,color:n?"#C4A35A":"#a18661",strokeWidth:1.5,style:{display:"block",transition:"color 0.3s ease"}})}):o.jsx(e.Icon,{size:36,color:"#a18661",strokeWidth:1.25,className:"value-icon-svg",style:{flexShrink:0,display:"block",opacity:i?1:.85,transition:"opacity 0.25s ease, transform 0.25s ease",transform:i?"scale(1.05)":"scale(1)"}})}),o.jsx("div",{style:{flex:1,minWidth:0},children:a?o.jsxs(o.Fragment,{children:[o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:600,fontSize:"1.2rem",letterSpacing:"0.01em",color:n?"#C4A35A":"#21291a",transition:"color 0.3s ease",margin:"0 0 8px",lineHeight:1.3},children:e.title}),o.jsx("p",{style:{...pt,fontSize:13,marginBottom:20},children:e.desc}),o.jsx("div",{style:{height:1,background:"#a18661",borderRadius:1,opacity:.35}})]}):o.jsxs(o.Fragment,{children:[o.jsx(P.h4,{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:600,fontSize:"1.2rem",letterSpacing:"0.01em",color:i?"#a18661":"#21291a",transition:"color 0.25s ease",margin:"0 0 8px",lineHeight:1.3},children:e.title}),o.jsx(P.p,{style:{...pt,fontSize:13,marginBottom:20},children:e.desc}),o.jsx("div",{style:{position:"relative",height:1,background:"rgba(161,134,97,0.18)",borderRadius:1,overflow:"hidden"},children:o.jsx(P.div,{style:{position:"absolute",inset:0,background:"#a18661",borderRadius:1,transformOrigin:"left center",transform:i?"scaleX(1)":"scaleX(0)",transition:"transform 0.3s ease"}})})]})}),o.jsx("style",{children:`
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
      `})]})}function jk(){const e=Lr(),t=h.useRef(null),n=wn(t,{once:!e,amount:.4}),r=["Design","With"];return o.jsxs("section",{className:"relative py-24 px-6 overflow-hidden about-hero",style:{background:"#f5f2ed"},children:[o.jsx("div",{className:"absolute inset-0 opacity-[0.07]",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 70% 50%, #a18661 0%, transparent 60%)"}})}),o.jsxs("div",{className:"max-w-4xl mx-auto text-center relative",children:[o.jsx(se,{direction:e?"down":"up",children:o.jsx("p",{style:jt,children:"Our Story"})}),o.jsxs("div",{ref:t,children:[o.jsxs("h1",{className:"about-hero-heading-desktop",style:{...Yi,color:"#2A3926",fontSize:"clamp(2.8rem, 6vw, 4.5rem)",marginBottom:24},children:["Design With",o.jsx("br",{}),o.jsx("em",{style:{color:"#a18661",fontStyle:"italic"},children:"Purpose & Craft"})]}),o.jsxs("h1",{className:"about-hero-heading-mobile",style:{...Yi,color:"#2A3926",fontSize:"clamp(2.8rem, 6vw, 4.5rem)",marginBottom:24,justifyContent:"center",flexWrap:"wrap",gap:"0.3em",perspective:500},children:[r.map((i,s)=>o.jsx(P.span,{style:{display:"inline-block",transformStyle:"preserve-3d"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.5,delay:s*.15,ease:[.16,1,.3,1]},children:i},s)),o.jsx(P.span,{style:{display:"block",width:"100%",color:"#a18661",fontStyle:"italic",transformStyle:"preserve-3d"},initial:{opacity:0,rotateX:90},animate:n?{opacity:1,rotateX:0}:{opacity:0,rotateX:90},transition:{duration:.5,delay:2*.15,ease:[.16,1,.3,1]},children:"Purpose & Craft"})]})]}),o.jsx(se,{direction:"up",delay:.15,children:o.jsx("p",{style:{...pt,color:"rgba(42,57,38,0.65)",maxWidth:560,margin:"0 auto",fontSize:15},children:"NIVORA is a boutique interior design studio creating thoughtful, refined spaces that balance elegance with everyday functionality."})})]}),o.jsx("style",{children:`
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
      `})]})}function Sk(){const e=Lr(),t=h.useRef(null),n=wn(t,{once:!1,amount:.4});return o.jsx("div",{ref:t,style:{position:"relative",display:"inline-block"},children:o.jsxs(he,{to:"/contact",className:"inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase px-12 py-5 hover:bg-[#d4b896] transition-all duration-300 font-medium",style:{background:"linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",color:"#21291a",position:"relative",overflow:"hidden",transition:"background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"},children:["Book Free Consultation ",o.jsx(He,{size:13}),e&&o.jsx(P.span,{"aria-hidden":"true",initial:{x:"-120%"},animate:n?{x:"120%"}:{x:"-120%"},transition:{duration:.9,delay:.3,ease:"easeInOut"},style:{position:"absolute",top:0,left:0,width:"40%",height:"100%",background:"linear-gradient(100deg, transparent, rgba(255,255,255,0.55), transparent)",pointerEvents:"none"}})]})})}function kk(){const e=Lr(),[t,n]=h.useState(null);return o.jsxs("div",{style:{background:"#f5f2ed"},className:"pt-20 about-page-root",children:[o.jsx(jk,{}),o.jsx("section",{className:"py-24 about-section-pad",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center",children:[o.jsx(se,{direction:"right",children:o.jsx("div",{className:"overflow-hidden",style:{borderRadius:4},children:o.jsx("img",{src:fk,alt:"NIVORA Studio",className:"w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700",loading:"lazy"})})}),o.jsxs(se,{delay:.2,direction:"left",children:[o.jsx("p",{style:jt,children:"Who We Are"}),o.jsx("h2",{style:Yi,children:"A Boutique Studio Built on Listening"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18},children:[o.jsx("p",{style:pt,children:"Over the last five years, we've completed 25+ residential and commercial interior projects across Mumbai and Pune — designing homes and workspaces that feel personal, practical, and built to last."}),o.jsx("p",{style:pt,children:"Every project begins with listening. We understand how clients live, work, and use their space before designing anything. We provide complete interior design and turnkey solutions with clear timelines and transparent communication."}),o.jsx("p",{style:pt,children:"We currently design and execute projects across Mumbai and Pune, partnering with homeowners and businesses who value quality, clarity, and a seamless process."})]})]})]})}),o.jsx(wk,{}),o.jsx("section",{className:"py-28 about-section-pad",style:{background:"#f5f2ed"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start",children:[o.jsxs("div",{children:[o.jsxs(se,{children:[o.jsx("p",{style:jt,children:"What We Design"}),o.jsx("h2",{style:Yi,children:"Spaces That Work for Real Life"})]}),o.jsx(P.ul,{variants:mk,initial:"hidden",whileInView:"visible",viewport:e?{once:!1,margin:"-40px"}:{once:!0,margin:"-60px"},style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:18},children:dk.map((r,i)=>o.jsxs(P.li,{variants:hk,style:{display:"flex",alignItems:"flex-start",gap:14,...pt},children:[o.jsx("svg",{width:"7",height:"7",viewBox:"0 0 8 8",style:{flexShrink:0,marginTop:7},fill:"#a18661",children:o.jsx("polygon",{points:"4,0 8,4 4,8 0,4"})}),r]},i))})]}),o.jsxs("div",{style:{position:"relative"},children:[o.jsxs("svg",{"aria-hidden":"true",style:{position:"absolute",top:"50%",right:-40,transform:"translateY(-50%)",width:320,height:320,opacity:.05,pointerEvents:"none",zIndex:0},viewBox:"0 0 320 320",children:[o.jsx("circle",{cx:"160",cy:"160",r:"150",fill:"none",stroke:"#a18661",strokeWidth:"1.5"}),o.jsx("circle",{cx:"160",cy:"160",r:"110",fill:"none",stroke:"#a18661",strokeWidth:"0.75"})]}),o.jsxs("div",{style:{position:"relative",zIndex:1},children:[o.jsx(se,{delay:.1,children:o.jsx("p",{style:jt,children:"Our Values"})}),e?o.jsx("div",{style:{display:"flex",flexDirection:"column"},children:tm.map((r,i)=>o.jsx(rm,{v:r,index:i,isTapped:t===i,onTap:()=>n(t===i?null:i)},i))}):o.jsx(P.div,{variants:gk,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},style:{display:"flex",flexDirection:"column"},children:tm.map((r,i)=>o.jsx(rm,{v:r,index:i},i))})]})]})]})}),o.jsx("section",{className:"py-24 about-section-pad",style:{background:"#f5f2ed",borderTop:"1px solid rgba(161,134,97,0.15)"},children:o.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[o.jsx(se,{children:o.jsx("p",{style:{...jt,textAlign:"center",marginBottom:48},children:"Our Purpose"})}),o.jsxs(P.div,{variants:yk,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:28},children:[o.jsx(nm,{type:"mission",text:"Create interiors that feel effortlessly luxurious and deeply personal."}),o.jsx(nm,{type:"vision",text:"Be a trusted design partner known for thoughtful luxury, timeless design, and interiors that enrich the way people live and work."})]})]})}),o.jsx(bk,{founderImg:pk}),o.jsx("section",{className:"py-20 px-6 text-center about-section-pad",style:{background:"#21291a"},children:o.jsxs(se,{children:[o.jsxs("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 2.8rem)",color:"#f5f0e8",marginBottom:20,letterSpacing:"-0.01em",lineHeight:1.2},children:["Let's design something",o.jsx("br",{}),o.jsx("em",{style:{color:"#C9A96E"},children:"meaningful together."})]}),o.jsx("p",{style:{...pt,color:"rgba(245,240,232,0.45)",marginBottom:40,maxWidth:360,margin:"0 auto 40px"},children:"Book a free consultation and let's start with a conversation."}),o.jsx(Sk,{})]})}),o.jsx("style",{children:`
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
      `})]})}const Ck=[{stars:5,text:"NIVORA transformed our vision into a home that perfectly reflects our family's lifestyle. The balance of warm wooden finishes, elegant detailing, and functional planning exceeded every expectation. Their professionalism, transparency, and craftsmanship made the entire journey enjoyable. Every guest who visits appreciates the timeless beauty of our home.",name:"Arvind Mohite",location:"Royal Living Redefined, Pune",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"AM"},{stars:5,text:"From the very first design discussion to the final handover, the NIVORA team understood exactly what we wanted. They created a home that is modern, practical, and incredibly welcoming. Their attention to detail and execution quality are simply outstanding.",name:"Tushar Shah",location:"Modern Elegance, Pune",project:"RESIDENTIAL — 4BHK RESIDENCE",initials:"TS"},{stars:5,text:"Designing a bungalow requires thoughtful planning, and NIVORA delivered beyond our expectations. Every room flows beautifully into the next, with a perfect blend of luxury and functionality. The quality of materials and finishing reflects true craftsmanship.",name:"Mayur Patil",location:"Casa Élan Bungalow, Mumbai",project:"RESIDENTIAL — BUNGALOW",initials:"MP"},{stars:5,text:"Our office now represents our brand perfectly. The layout has improved productivity, while the elegant interiors leave a lasting impression on every client who visits. NIVORA managed the entire project professionally and delivered exactly as promised.",name:"Parag Bari",location:"The Office Neutral Edit, Mumbai",project:"COMMERCIAL — OFFICE",initials:"PB"},{stars:5,text:"We wanted a peaceful home that felt warm and timeless, and NIVORA achieved exactly that. The soft curves, lighting, and neutral palette create a calming atmosphere that our family enjoys every day. It truly feels like home.",name:"Tarun Raisinghania",location:"The Quiet Curve, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"TR"},{stars:5,text:"NIVORA has an incredible ability to create elegance through simplicity. Every texture, finish, and lighting detail has been carefully planned. The final result is sophisticated, functional, and far more beautiful than we imagined.",name:"Samiksha Shetty",location:"The Soft Neutral Edit, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"SS"},{stars:5,text:"The team designed every space with precision and purpose. The duplex feels spacious, luxurious, and incredibly comfortable. Their communication, project management, and commitment to quality made the entire experience completely stress-free.",name:"Kapil Arora",location:"The Layered Calm, Pune",project:"RESIDENTIAL — DUPLEX",initials:"KA"},{stars:5,text:"NIVORA beautifully balanced warmth, luxury, and functionality in our home. The custom furniture, lighting, and thoughtful detailing have completely transformed our everyday living experience. We highly recommend NIVORA to anyone looking for premium interiors.",name:"Rahul Patil",location:"Blushwood Heaven, Mumbai",project:"RESIDENTIAL — APARTMENT",initials:"RP"},{stars:5,text:"Nivora took my vision and refined it into something I never thought possible. Their material selection is impeccable.",name:"Aditi R.",location:"Mumbai",project:"RESIDENTIAL — HOME INTERIOR",initials:"AR"}],Ek=[{value:"50+",label:"Projects Completed"},{value:"5+",label:"Years of Design Excellence"},{value:"100%",label:"On-Time Handover"}],oi=(e=0)=>({hidden:{opacity:0,y:25},visible:{opacity:1,y:0,transition:{duration:.65,delay:e,ease:[.22,1,.36,1]}}}),Tk=(e=0)=>({hidden:{opacity:0,y:-15},visible:{opacity:1,y:0,transition:{duration:.6,delay:e,ease:[.22,1,.36,1]}}});function Nk({project:e}){return o.jsx("span",{style:{display:"inline-block",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"0.12em",textTransform:"uppercase",padding:"3px 8px",borderRadius:6,lineHeight:1.6,background:"rgba(161,134,97,0.12)",color:"#a18661",border:"1px solid rgba(161,134,97,0.35)"},children:e})}function Pk({t:e,index:t}){const n=t%3*.15;return o.jsx(P.div,{variants:oi(n),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},children:o.jsxs("div",{className:"testimonial-card",style:{background:"#ffffff",border:"1px solid rgba(95,116,94,0.25)",borderRadius:16,padding:32,height:"100%",display:"flex",flexDirection:"column",position:"relative",transition:"transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease"},onMouseEnter:r=>{const i=r.currentTarget;i.style.borderColor="#5f745e",i.style.borderWidth="1.5px",i.style.transform="translateY(-5px)",i.style.background="#faf9f6",i.style.boxShadow="0 12px 36px rgba(33,41,26,0.10)"},onMouseLeave:r=>{const i=r.currentTarget;i.style.borderColor="rgba(95,116,94,0.35)",i.style.borderWidth="1px",i.style.transform="translateY(0)",i.style.background="#ffffff",i.style.boxShadow="none"},children:[o.jsx("span",{style:{position:"absolute",top:16,right:20,fontSize:64,lineHeight:1,color:"#a18661",fontFamily:"'Cormorant Garamond', serif",opacity:.22,pointerEvents:"none",userSelect:"none"},children:'"'}),o.jsx("div",{style:{fontSize:14,color:"#a18661",letterSpacing:2,marginBottom:16},children:"★".repeat(e.stars)}),o.jsxs("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:16,lineHeight:1.8,color:"#2c2c2c",flex:1,marginBottom:0},children:['"',e.text,'"']}),o.jsx("div",{style:{width:40,height:1,background:"#a18661",margin:"20px 0",flexShrink:0}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14},children:[o.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"#a18661",color:"#ffffff",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Jost', sans-serif",fontWeight:700,fontSize:12,flexShrink:0,letterSpacing:"0.5px"},children:e.initials}),o.jsxs("div",{children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:500,fontSize:14,color:"#21291a",margin:0},children:e.name}),o.jsx("span",{style:{display:"inline-block",fontFamily:"'Jost', sans-serif",fontSize:11,fontWeight:400,letterSpacing:"0.04em",color:"#4a4a4a",background:"rgba(33,41,26,0.06)",border:"1px solid rgba(33,41,26,0.12)",borderRadius:6,padding:"2px 8px",marginTop:4},children:e.location})]})]}),o.jsx(Nk,{project:e.project})]})})}function Ak(){return o.jsxs("div",{style:{background:"#f5f2ed",minHeight:"100vh"},children:[o.jsxs("section",{style:{paddingTop:140,paddingBottom:60,textAlign:"center",paddingLeft:24,paddingRight:24},children:[o.jsx(P.p,{variants:Tk(0),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#a18661",marginBottom:16},children:"Client Stories"}),o.jsx(P.h1,{variants:oi(.15),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.5rem, 6vw, 4.5rem)",color:"#262421",margin:"0 0 20px",lineHeight:1.1},children:"What Clients Say"}),o.jsx(P.p,{variants:oi(.3),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.5},style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:15,color:"rgba(33,41,26,0.55)",maxWidth:560,margin:"0 auto",lineHeight:1.75},children:"Every project is a relationship. These are the words of people who trusted us with their spaces."})]}),o.jsx("section",{style:{maxWidth:1200,margin:"0 auto",padding:"20px 24px 80px"},children:o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},className:"testi-grid",children:[o.jsx("style",{children:`
            @media (max-width: 1024px) {
              .testi-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (max-width: 640px) {
              .testi-grid { grid-template-columns: 1fr !important; }
            }
          `}),Ck.map((e,t)=>o.jsx(Pk,{t:e,index:t},t))]})}),o.jsx("section",{style:{background:"#ffffff",borderTop:"1px solid rgba(95,116,94,0.18)",borderBottom:"1px solid rgba(95,116,94,0.18)",padding:"64px 24px"},children:o.jsxs("div",{style:{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",gap:0,flexWrap:"wrap"},className:"stats-bar",children:[o.jsx("style",{children:`
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
          `}),Ek.map((e,t)=>o.jsxs(P.div,{className:"stats-bar-item",variants:oi(t*.12),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},style:{flex:1,textAlign:"center",padding:"16px 40px",minWidth:180},children:[o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:400,fontSize:"clamp(2rem, 4vw, 3rem)",color:"#21291a",margin:"0 0 8px",lineHeight:1},children:e.value}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:400,fontSize:11,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(33,41,26,0.5)",margin:0},children:e.label})]},t))]})}),o.jsx("section",{style:{background:"#f5f2ed",padding:"80px 24px",textAlign:"center"},children:o.jsxs(P.div,{variants:oi(0),initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.4},children:[o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.8rem, 4vw, 2.8rem)",color:"#262421",margin:"0 0 16px",letterSpacing:"-0.01em"},children:"Ready to transform your space?"}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontWeight:300,fontSize:15,color:"rgba(33,41,26,0.55)",maxWidth:480,margin:"0 auto 40px",lineHeight:1.75},children:"Claim your Free Layout Consultation today and let us start building your dream."}),o.jsx(he,{to:"/contact",style:{display:"inline-block",background:"#21291a",color:"#f5f2ed",fontFamily:"'Jost', sans-serif",fontWeight:500,fontSize:12,letterSpacing:"0.18em",textTransform:"uppercase",padding:"16px 40px",borderRadius:12,textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease"},onMouseEnter:e=>{const t=e.currentTarget;t.style.background="#5f745e",t.style.transform="translateY(-2px)"},onMouseLeave:e=>{const t=e.currentTarget;t.style.background="#21291a",t.style.transform="translateY(0)"},children:"Claim My Free Offer Now"})]})})]})}const zk=["Residential","Commercial","Office","Retail","Villa/Bungalow","Other"],Ik=["Instagram","Google","Word of Mouth","Facebook","Other"],Rk=["Ambernath","Kalyan","Pune","Mumbai","Other"],Dk=["2BHK","3BHK+","Villa/Bungalow","Office","Retail/Commercial"],Lk=["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"];function Mk(){const[e,t]=h.useState({fullName:"",phone:"+91 ",email:"",spaceType:"",location:"",projectType:"",budget:"",referral:"",requirements:""}),[n,r]=h.useState("idle"),[i,s]=h.useState(""),a=h.useRef(null),l=h.useRef(null),[c,u]=h.useState(!1),[d,p]=h.useState(!1);h.useEffect(()=>{const g=a.current;if(!g)return;const m=new IntersectionObserver(([y])=>u(y.isIntersecting),{threshold:.3});return m.observe(g),()=>m.disconnect()},[]),h.useEffect(()=>{const g=l.current;if(!g)return;const m=new IntersectionObserver(([y])=>p(y.isIntersecting),{threshold:.08,rootMargin:"0px 0px -40px 0px"});return m.observe(g),()=>m.disconnect()},[]);const f=g=>m=>t(y=>({...y,[g]:m.target.value})),x=g=>m=>t(y=>({...y,[g]:y[g]===m?"":m})),v=g=>({opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transition:`opacity 500ms ease-out ${g}ms, transform 500ms ease-out ${g}ms`}),b=g=>({display:"inline-block",opacity:d?1:0,transform:d?"translateX(0)":"translateX(-14px)",transition:`opacity 400ms ease-out ${g}ms, transform 400ms ease-out ${g}ms`}),w=g=>({opacity:d?1:0,transform:d?"scale(1)":"scale(0.35)",transition:`opacity 350ms ease-out ${280+g*150}ms, transform 450ms cubic-bezier(0.34,1.56,0.64,1) ${280+g*150}ms`});return o.jsxs("div",{style:{background:"#f5f2ed"},children:[o.jsx("style",{children:`
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
      `}),o.jsx("section",{ref:a,style:{padding:"104px 24px 48px",textAlign:"center",maxWidth:720,margin:"0 auto"},children:o.jsxs("div",{style:{opacity:c?1:0,transform:c?"translateY(0)":"translateY(-28px)",transition:"opacity 700ms ease-out, transform 700ms ease-out"},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",color:"#a18661",marginBottom:16},children:"Reach Out"}),o.jsx("h1",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(1.9rem, 4vw, 3.2rem)",color:"#262421",margin:"0 0 16px",lineHeight:1.1,letterSpacing:"-0.01em"},children:"Let's Talk"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontWeight:300,fontSize:15,color:"#7a7268",lineHeight:1.8,maxWidth:500,margin:"0 auto"},children:"Every great project begins with a conversation. Tell us about your space and let's explore what's possible."})]})}),o.jsx("section",{ref:l,style:{padding:"0 24px 96px"},children:o.jsxs("div",{className:"contact-two-col",style:{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 380px",gap:40,alignItems:"stretch"},children:[o.jsx("div",{style:{height:"100%"},children:o.jsxs("div",{className:"contact-form-card",children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:11,letterSpacing:"0.15em",textTransform:"uppercase",color:"#888880",marginBottom:32,...v(0)},children:"Enquiry Form"}),o.jsxs("form",{onSubmit:async g=>{if(g.preventDefault(),n!=="submitting"){if(!e.budget){s("Please select an estimated budget."),r("error");return}r("submitting"),s("");try{await Px(e),window.location.href="/thank-you"}catch(m){r("error"),s(m instanceof Error?m.message:"Something went wrong. Please try again.")}}},style:{display:"flex",flexDirection:"column",gap:0},children:[o.jsxs("div",{className:"form-grid",style:{marginBottom:36},children:[o.jsxs("div",{style:v(80),children:[o.jsxs("label",{className:"form-label",children:["Full Name ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"text",required:!0,placeholder:"Jane Doe",value:e.fullName,onChange:f("fullName")})})]}),o.jsxs("div",{style:v(180),children:[o.jsxs("label",{className:"form-label",children:["Phone Number ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"tel",required:!0,placeholder:"+91 98765 43210",value:e.phone,onChange:f("phone")})})]}),o.jsxs("div",{style:v(280),children:[o.jsxs("label",{className:"form-label",children:["Email Address ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsx("input",{className:"form-input",type:"email",required:!0,placeholder:"jane@example.com",value:e.email,onChange:f("email")})})]}),o.jsxs("div",{style:v(380),children:[o.jsxs("label",{className:"form-label",children:["Type of Space ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"form-field-wrap",children:o.jsxs("select",{className:"form-select",required:!0,value:e.spaceType,onChange:f("spaceType"),style:{color:e.spaceType===""?"#AAAAAA":"#2C2C2A"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select a space type"}),zk.map(g=>o.jsx("option",{value:g,children:g},g))]})})]}),o.jsxs("div",{className:"form-field-full",style:v(460),children:[o.jsx("label",{className:"form-label",style:{marginBottom:12},children:"Project Location"}),o.jsx("div",{className:"chip-group",children:Rk.map((g,m)=>o.jsx("span",{style:b(460+m*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.location===g?" selected":""}`,onClick:()=>x("location")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:v(560),children:[o.jsx("label",{className:"form-label",style:{marginBottom:12},children:"Project Type"}),o.jsx("div",{className:"chip-group",children:Dk.map((g,m)=>o.jsx("span",{style:b(560+m*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.projectType===g?" selected":""}`,onClick:()=>x("projectType")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:v(680),children:[o.jsxs("label",{className:"form-label",style:{marginBottom:12},children:["Estimated Budget ",o.jsx("span",{style:{color:"#a18661"},children:"*"})]}),o.jsx("div",{className:"chip-group",children:Lk.map((g,m)=>o.jsx("span",{style:b(680+m*70),children:o.jsx("button",{type:"button",className:`chip-btn${e.budget===g?" selected":""}`,onClick:()=>x("budget")(g),children:g})},g))})]}),o.jsxs("div",{className:"form-field-full",style:{maxWidth:340,...v(780)},children:[o.jsx("label",{className:"form-label",children:"How Did You Hear About Us?"}),o.jsx("div",{className:"form-field-wrap",children:o.jsxs("select",{className:"form-select",value:e.referral,onChange:f("referral"),style:{color:e.referral===""?"#AAAAAA":"#2C2C2A"},children:[o.jsx("option",{value:"",disabled:!0,children:"Select an option"}),Ik.map(g=>o.jsx("option",{value:g,children:g},g))]})})]}),o.jsxs("div",{className:"form-field-full",style:v(860),children:[o.jsx("label",{className:"form-label",children:"Brief Requirements"}),o.jsx("textarea",{className:"form-textarea",placeholder:"Tell us about your project, style preferences, timeline...",value:e.requirements,onChange:f("requirements")})]})]}),o.jsx("div",{style:v(1e3),children:o.jsx(P.button,{type:"submit",className:"contact-submit-btn",disabled:n==="submitting",whileHover:n==="submitting"?{}:{scale:1.02,boxShadow:"0 8px 28px rgba(45,59,45,0.22)"},whileTap:n==="submitting"?{}:{scale:.97},transition:{duration:.2,ease:"easeOut"},style:{width:"100%",background:"#21291a",color:"#a18661",fontFamily:"'Jost', sans-serif",fontSize:13,letterSpacing:"0.12em",textTransform:"uppercase",fontWeight:500,padding:"18px 24px",border:"none",cursor:n==="submitting"?"not-allowed":"pointer",opacity:n==="submitting"?.7:1,display:"flex",alignItems:"center",justifyContent:"center",gap:10,borderRadius:8},children:n==="submitting"?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:14,className:"contact-spin"})," Sending..."]}):o.jsxs(o.Fragment,{children:["Claim My Free Layout Design ",o.jsx(He,{size:14})]})})}),n==="error"&&o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12.5,color:"#B85A4A",textAlign:"center",marginTop:14,marginBottom:0},children:i}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:12,color:"#9a9186",textAlign:"center",marginTop:16,marginBottom:0,...v(1080)},children:"We respect your privacy. No spam, just great design."})]})]})}),o.jsx("div",{style:{height:"100%",opacity:d?1:0,transform:d?"translateX(0)":"translateX(52px)",transition:"opacity 800ms cubic-bezier(0.22,1,0.36,1) 200ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 200ms"},children:o.jsxs("div",{className:"contact-info-card",children:[o.jsxs("div",{children:[o.jsx("h2",{style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:26,color:"#262421",margin:"0 0 4px",letterSpacing:"-0.01em"},children:"Nivora Interiors"}),o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:14,color:"#a18661",margin:"0 0 32px"},children:"From Vision to Execution"}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[o.jsxs(Ha,{icon:o.jsx(kx,{size:13}),iconStyle:w(0),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Location"}),o.jsxs("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",margin:0,lineHeight:1.5},children:["Shop No. 01, New Dhavalgiri Building,",o.jsx("br",{}),"above Hindustan Co-Op Bank,",o.jsx("br",{}),"Ambernath East, Maharashtra 421501"]})]}),o.jsxs(Ha,{icon:o.jsx(Ex,{size:13}),iconStyle:w(1),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Phone"}),o.jsx("a",{href:"tel:+917276687805",style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",textDecoration:"none"},children:"+91 72766 87805"})]}),o.jsxs(Ha,{icon:o.jsx(Sx,{size:13}),iconStyle:w(2),children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:"0 0 4px"},children:"Email"}),o.jsx("a",{href:"mailto:nivora.inbox@gmail.com",style:{fontFamily:"'Jost', sans-serif",fontSize:14,color:"#2C2C2A",textDecoration:"none"},children:"nivora.inbox@gmail.com"})]})]})]}),o.jsx("div",{children:o.jsxs("div",{style:{borderTop:"1px solid #E8E0D0",paddingTop:28},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[o.jsx(xx,{size:13,style:{color:"#a18661",flexShrink:0}}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"0.12em",textTransform:"uppercase",color:"#888880",margin:0},children:"Studio Hours"})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,color:"#2C2C2A",margin:0},children:"Monday – Saturday: 10:00 AM – 7:00 PM"}),o.jsx("p",{style:{fontFamily:"'Jost', sans-serif",fontSize:13,color:"#888880",margin:0,fontStyle:"italic"},children:"Sunday: By appointment only"})]})]})}),o.jsx("div",{style:{padding:"14px 18px",border:"1px solid #E8E0D0",borderRadius:12,background:"rgba(245,240,232,0.5)"},children:o.jsx("p",{style:{fontFamily:"'Cormorant Garamond', serif",fontStyle:"italic",fontSize:13,color:"#888880",margin:0,lineHeight:1.6},children:'"We respect your privacy. No spam, just great design."'})}),o.jsx("div",{style:{flex:1,minHeight:220,borderRadius:12,overflow:"hidden",marginTop:8},children:o.jsx("iframe",{title:"Nivora Interiors Location",src:"https://maps.google.com/maps?q=New+Dhavalgiri+Building,+Ambernath+East,+Maharashtra+421501,+India&output=embed",width:"100%",height:"100%",style:{border:0,display:"block",minHeight:220},allowFullScreen:!0,loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})})]})})]})})]})}function Ha({icon:e,children:t,iconStyle:n}){return o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:14},children:[o.jsx(P.div,{whileHover:{rotate:[0,-8,8,-4,0],transition:{duration:.4,ease:"easeInOut"}},style:{width:36,height:36,border:"1px solid rgba(201,169,110,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,borderRadius:8,color:"#a18661",cursor:"default",...n},children:e}),o.jsx("div",{children:t})]})}const Fk=["Ambernath","Kalyan","Pune","Mumbai","Other"],Ok=["2BHK","3BHK+","Villa / Bungalow","Office","Retail / Commercial"],Vk=["₹10 Lakhs","₹20 Lakhs","₹30 Lakhs","₹30 Lakhs+"];function Bk(){const e=Ht(),[t,n]=h.useState({name:"",phone:"",location:"",projectType:"",budget:"",requirements:""}),r=(s,a)=>n(l=>({...l,[s]:a})),i=s=>{s.preventDefault(),e("/thank-you")};return o.jsxs("div",{className:"bg-[#3b4a35] pt-20 min-h-screen",children:[o.jsxs("section",{className:"relative py-28 px-6 overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 opacity-[0.12]",children:o.jsx("div",{className:"w-full h-full",style:{backgroundImage:"radial-gradient(circle at 50% 50%, #b8966a 0%, transparent 45%)"}})}),o.jsx("div",{className:"max-w-3xl mx-auto text-center relative",children:o.jsxs(se,{children:[o.jsx("p",{className:"text-[#b8966a] text-[10px] tracking-[0.4em] uppercase mb-4",children:"Free Consultation"}),o.jsxs("h1",{className:"font-serif text-5xl md:text-6xl text-[#f5f0e8] font-light leading-tight mb-6",style:{fontFamily:"'Playfair Display', serif",fontWeight:400},children:["Let's Design Your Space",o.jsx("br",{}),o.jsx("em",{className:"text-[#b8966a]",children:"— The Right Way"})]}),o.jsx("p",{className:"text-[#f5f0e8]/50 font-light leading-relaxed max-w-xl mx-auto",children:"Get a Free Layout Consultation (Worth ₹5,000) and understand how your space can be planned better — before you spend a single rupee."})]})})]}),o.jsx("section",{className:"max-w-3xl mx-auto px-6 pb-32",children:o.jsx(se,{children:o.jsxs("form",{onSubmit:i,className:"space-y-8",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Full Name *"}),o.jsx("input",{type:"text",required:!0,value:t.name,onChange:s=>r("name",s.target.value),placeholder:"Your full name",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Phone Number *"}),o.jsx("input",{type:"tel",required:!0,value:t.phone,onChange:s=>r("phone",s.target.value),placeholder:"+91 00000 00000",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Project Location *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Fk.map(s=>o.jsx("button",{type:"button",onClick:()=>r("location",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.location===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Project Type *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Ok.map(s=>o.jsx("button",{type:"button",onClick:()=>r("projectType",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.projectType===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-4",children:"Estimated Budget *"}),o.jsx("div",{className:"flex flex-wrap gap-3",children:Vk.map(s=>o.jsx("button",{type:"button",onClick:()=>r("budget",s),className:`text-xs tracking-[0.15em] uppercase px-6 py-3 transition-all duration-300 ${t.budget===s?"bg-[#b8966a] text-[#3b4a35]":"border border-[#f5f0e8]/15 text-[#f5f0e8]/40 hover:border-[#b8966a] hover:text-[#b8966a]"}`,children:s},s))})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-[#b8966a] text-[10px] tracking-[0.3em] uppercase block mb-3",children:"Brief Requirements"}),o.jsx("textarea",{rows:4,value:t.requirements,onChange:s=>r("requirements",s.target.value),placeholder:"Tell us a little about what you have in mind...",className:"w-full bg-transparent border-b border-[#b8966a]/20 text-[#f5f0e8] placeholder-[#f5f0e8]/20 py-3 text-base font-light focus:outline-none focus:border-[#b8966a] transition-colors duration-300 resize-none"})]}),o.jsxs("button",{type:"submit",className:"w-full bg-[#b8966a] text-[#3b4a35] text-sm tracking-[0.25em] uppercase py-5 hover:bg-[#d4b896] transition-all duration-300 font-medium flex items-center justify-center gap-3 mt-4",children:["Claim My Free Layout Design ",o.jsx(He,{size:15})]}),o.jsx("p",{className:"text-center text-[#f5f0e8]/25 text-xs font-light tracking-wider",children:"We respect your privacy. No spam, just great design."})]})})})]})}const Ua=(e=0)=>({initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.55,ease:[.22,1,.36,1],delay:e}}),Xr=(e=0)=>({initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,ease:"easeOut",delay:e}}),im={fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:10,letterSpacing:"0.44em",textTransform:"uppercase",color:"#a18661"},_k=["We review your enquiry and match you with the right design approach.","Shweta will personally reach out to schedule a free 30-minute consultation.","We begin understanding your space, lifestyle, and vision.","You receive a tailored design brief and next steps — at no cost."];function Wk(){return o.jsx("div",{className:"bg-[#f5f2ed] min-h-screen pt-20 flex items-center",children:o.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-24 text-center",children:[o.jsx(P.div,{initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.6,ease:[.34,1.56,.64,1]},className:"mb-10 flex justify-center",children:o.jsx("div",{className:"w-24 h-24 border border-[#a18661]/50 rounded-full flex items-center justify-center",children:o.jsx(gx,{size:40,className:"text-[#a18661]",strokeWidth:1.5})})}),o.jsx(P.p,{...Xr(.2),style:im,className:"mb-6",children:"Enquiry Received"}),o.jsxs("div",{className:"mb-6",children:[o.jsx(P.span,{...Ua(.5),className:"block",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.75rem)",color:"#21291a",lineHeight:1.15,letterSpacing:"-0.01em"},children:"Success! Your Vision"}),o.jsx(P.span,{...Ua(.7),className:"block italic",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.2rem, 5vw, 3.75rem)",color:"#a18661",lineHeight:1.15,letterSpacing:"-0.01em"},children:"Is in Good Hands."})]}),o.jsx(P.p,{...Xr(.85),className:"font-light leading-relaxed max-w-md mx-auto mb-10",style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"#5c5c5c"},children:"Thank you for reaching out to NIVORA. We've received your enquiry and will be in touch within 24 hours to schedule your free consultation."}),o.jsxs(P.div,{...Ua(1.05),className:"mb-10 text-left rounded-sm",style:{background:"#ffffff",border:"1px solid #e0d9ce",boxShadow:"0 4px 24px rgba(33,41,26,0.06)",padding:"clamp(1.5rem, 4vw, 2rem)"},children:[o.jsx("p",{style:{...im,marginBottom:20},children:"What Happens Next"}),o.jsx("ol",{className:"space-y-4",children:_k.map((e,t)=>o.jsxs(P.li,{...Xr(1.2+t*.1),className:"flex items-start gap-4 text-sm font-light",style:{fontFamily:"'Inter', sans-serif",fontWeight:300,fontSize:14,color:"#2c2c2c",lineHeight:1.7},children:[o.jsx("span",{className:"shrink-0",style:{fontFamily:"'Playfair Display', serif",color:"#a18661",fontSize:14,fontWeight:400},children:String(t+1).padStart(2,"0")}),e]},t))})]}),o.jsxs(P.div,{...Xr(1.65),className:"flex flex-col sm:flex-row gap-4 justify-center",children:[o.jsx(he,{to:"/",className:"inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-[#21291a] hover:text-[#f5f2ed]",style:{border:"1px solid #21291a",color:"#21291a",fontFamily:"'Inter', sans-serif",fontWeight:400},children:"Back to Home"}),o.jsxs(he,{to:"/portfolio",className:"inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase px-8 py-4 transition-all duration-300 hover:bg-[#8a7050]",style:{background:"#a18661",color:"#ffffff",fontFamily:"'Inter', sans-serif",fontWeight:400},children:["Explore Our Work ",o.jsx(He,{size:13})]})]}),o.jsx(P.div,{...Xr(1.8),className:"mt-12",children:o.jsx("a",{href:"https://wa.me/917276687805?text=Hi%20Shweta%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website%20and%20would%20love%20to%20chat.",target:"_blank",rel:"noopener noreferrer",className:"text-sm font-light transition-colors duration-300 hover:text-[#a18661]",style:{color:"#9c9c9c",fontFamily:"'Inter', sans-serif",fontWeight:300},children:"Prefer to chat right now? Message us on WhatsApp →"})})]})})}function Hk({images:e,startIndex:t,projectName:n,onClose:r}){const[i,s]=h.useState(t),[a,l]=h.useState(!1),[c,u]=h.useState(!1),d=h.useRef(0),p=h.useCallback(()=>{s(x=>(x-1+e.length)%e.length),l(!1),u(!1)},[e.length]),f=h.useCallback(()=>{s(x=>(x+1)%e.length),l(!1),u(!1)},[e.length]);return h.useEffect(()=>{const x=v=>{v.key==="ArrowLeft"?p():v.key==="ArrowRight"?f():v.key==="Escape"&&r()};return window.addEventListener("keydown",x),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",x),document.body.style.overflow=""}},[p,f,r]),o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.93)",display:"flex",alignItems:"center",justifyContent:"center"},onClick:x=>{x.target===x.currentTarget&&r()},onTouchStart:x=>{d.current=x.touches[0].clientX},onTouchEnd:x=>{const v=x.changedTouches[0].clientX-d.current;Math.abs(v)>50&&(v<0?f():p())},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{style:{position:"absolute",top:0,left:0,right:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px",background:"linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)"},children:[o.jsx("span",{style:{color:"rgba(255,255,255,0.45)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase"},children:n}),o.jsxs("span",{style:{color:"rgba(255,255,255,0.5)",fontSize:12,letterSpacing:"0.15em",position:"absolute",left:"50%",transform:"translateX(-50%)"},children:[i+1," / ",e.length]}),o.jsxs("div",{style:{display:"flex",gap:10},children:[o.jsx("button",{className:"lb-btn",style:{width:40,height:40},onClick:()=>u(x=>!x),title:c?"Zoom out":"Zoom in",children:c?o.jsx(q4,{size:17}):o.jsx(X4,{size:17})}),o.jsx("button",{className:"lb-btn",style:{width:40,height:40},onClick:r,title:"Close (Esc)",children:o.jsx(bt,{size:18})})]})]}),o.jsx("button",{className:"lb-btn",onClick:x=>{x.stopPropagation(),p()},style:{position:"absolute",left:16,width:48,height:48},title:"Previous",children:o.jsx(P4,{size:24})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",padding:"72px 80px",boxSizing:"border-box",overflow:"hidden"},children:[!a&&o.jsx("div",{style:{position:"absolute",width:40,height:40,borderRadius:"50%",border:"3px solid rgba(255,255,255,0.12)",borderTopColor:"#D4B483",animation:"lb-spin 0.75s linear infinite"}}),o.jsx("img",{src:e[i],alt:`${n} — image ${i+1}`,onLoad:()=>l(!0),onClick:x=>{x.stopPropagation(),u(v=>!v)},style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:6,opacity:a?1:0,transform:c?"scale(1.65)":"scale(1)",transition:"opacity 0.25s ease, transform 0.35s ease",cursor:c?"zoom-out":"zoom-in",userSelect:"none"}},e[i])]}),o.jsx("button",{className:"lb-btn",onClick:x=>{x.stopPropagation(),f()},style:{position:"absolute",right:16,width:48,height:48},title:"Next",children:o.jsx(hx,{size:24})}),e.length<=20&&o.jsx("div",{style:{position:"absolute",bottom:20,left:"50%",transform:"translateX(-50%)",display:"flex",gap:6,alignItems:"center"},children:e.map((x,v)=>o.jsx("button",{onClick:b=>{b.stopPropagation(),s(v),l(!1),u(!1)},style:{width:v===i?20:7,height:7,borderRadius:4,background:v===i?"#D4B483":"rgba(255,255,255,0.28)",border:"none",cursor:"pointer",padding:0,transition:"all 0.25s ease"}},v))})]})}function Uk(){return o.jsxs("div",{style:{background:"#FFFCF7"},className:"pt-20",children:[o.jsx("style",{children:`
        @keyframes sk-shimmer {
          0% { background-position: 200% 0 }
          100% { background-position: -200% 0 }
        }
        .sk { background: linear-gradient(90deg,#e4ddd4 25%,#ede6dc 50%,#e4ddd4 75%); background-size:200% 100%; animation: sk-shimmer 1.4s infinite; border-radius: 6px; }
      `}),o.jsx("div",{className:"sk",style:{height:"70vh"}}),o.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"60px 24px"},children:[o.jsx("div",{className:"sk",style:{height:16,width:120,marginBottom:24}}),o.jsx("div",{className:"sk",style:{height:40,width:"60%",marginBottom:16}}),o.jsx("div",{className:"sk",style:{height:16,width:"80%",marginBottom:8}}),o.jsx("div",{className:"sk",style:{height:16,width:"70%"}})]})]})}function $k(){const{id:e}=Wv(),[t,n]=h.useState(null),[r,i]=h.useState(!0),[s,a]=h.useState(!1),[l,c]=h.useState(null),[u,d]=h.useState(!1);h.useEffect(()=>{const v=()=>d(window.innerWidth<768);return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]);const p=h.useCallback(v=>c(v),[]),f=h.useCallback(()=>c(null),[]);if(h.useEffect(()=>{e&&(i(!0),a(!1),zx(e).then(v=>{n(v),i(!1)}).catch(v=>{var w,g;console.error("Project detail fetch error:",v);const b=((w=v.message)==null?void 0:w.includes("404"))||((g=v.message)==null?void 0:g.includes("not found"));a(b),i(!1)}))},[e]),r)return o.jsx(Uk,{});if(s||!t)return o.jsx("div",{className:"min-h-screen flex items-center justify-center",style:{background:"#FFFCF7"},children:o.jsxs("div",{className:"text-center",children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1rem"},children:"404"}),o.jsx("h1",{className:"font-serif text-4xl font-light mb-6",style:{color:"#2E2A26"},children:"Project Not Found"}),o.jsx(he,{to:"/portfolio",style:{color:"#D4B483",fontSize:12,letterSpacing:"0.2em",textTransform:"uppercase"},className:"hover:opacity-70 transition-opacity",children:"← Back to Portfolio"})]})});const x=t.images.filter(v=>v&&v.trim()!=="");return o.jsxs("div",{style:{background:"#FFFCF7"},className:"pt-20",children:[o.jsxs("div",{className:"relative overflow-hidden",style:{height:u?"auto":"70vh",background:!u&&t.id==="the-quite-curve"?"#2D3E29":void 0},children:[o.jsx("img",{src:t.heroImage||t.images[0]||t.coverImage,alt:t.name,className:u?"w-full block":"w-full h-full object-cover",style:{filter:"contrast(1.07) saturate(1.05)",...u?{height:"auto",objectFit:"contain"}:{},...!u&&t.id==="the-quite-curve"?{transform:"scale(0.92)",transformOrigin:"center center"}:{}}}),o.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.52) 100%)"}}),o.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-12",style:{maxWidth:"80rem",margin:"0 auto"},children:o.jsxs(se,{children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"0.75rem"},children:t.badge||`${t.category} · ${t.year}`}),o.jsx("h1",{className:"font-serif font-light mb-2",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"clamp(2.5rem, 6vw, 4.5rem)",color:"#f5f0e8",lineHeight:1.1,letterSpacing:"-0.01em"},children:t.name}),o.jsx("p",{style:{color:"rgba(245,240,232,0.7)",letterSpacing:"0.08em"},children:t.location})]})})]}),o.jsx("div",{style:{background:"#F7F2EA"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 py-6",children:o.jsxs(he,{to:"/portfolio",className:"inline-flex items-center gap-2 transition-opacity hover:opacity-70",style:{color:"#D4B483",fontSize:12,letterSpacing:"0.2em",textTransform:"uppercase"},children:[o.jsx(k4,{size:13})," Back to Portfolio"]})})}),o.jsx("div",{style:{background:"#FFFCF7"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6 py-20",children:u?o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem"},children:[o.jsx(P.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:0,ease:"easeOut"},style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:t.conceptLabel||"The Concept"}),o.jsx(P.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.15,ease:"easeOut"},className:"font-serif leading-snug",style:{fontFamily:"'Playfair Display', serif",fontWeight:700,fontSize:"1.5rem",color:"#262421",letterSpacing:"-0.01em",margin:0},children:t.concept}),o.jsx(P.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.3,ease:"easeOut"},style:{color:"#2E2A26",opacity:.6,lineHeight:1.7,fontWeight:300,fontSize:15,margin:0},children:t.description}),o.jsx(P.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.45,ease:"easeOut"},style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:t.designIntentLabel||"Design Intent"}),o.jsxs(P.p,{initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.7,delay:.55,ease:"easeOut"},className:"font-serif font-light italic",style:{fontSize:15,color:"#2E2A26",opacity:.75,lineHeight:1.7,margin:0},children:['"',t.designIntent,'"']}),t.materials.length>0&&o.jsxs(P.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.65,ease:"easeOut"},children:[o.jsx("div",{style:{borderTop:"1px solid #D4B483",marginBottom:"0.875rem"}}),o.jsx("p",{style:{color:"#D4B483",fontSize:11,letterSpacing:"0.4em",textTransform:"uppercase",margin:0},children:"Materials Used"})]}),o.jsx("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:"0.5rem"},children:t.materials.map((v,b)=>o.jsxs(P.li,{initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.75+b*.08,ease:"easeOut"},style:{display:"flex",alignItems:"center",gap:"0.75rem",color:"#2E2A26",opacity:.6,fontSize:14,fontWeight:300,lineHeight:1.8},children:[o.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#D4B483",flexShrink:0}}),v]},v))})]}):o.jsxs("div",{className:"grid lg:grid-cols-2 gap-20",children:[o.jsxs("div",{children:[o.jsx(P.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:0,ease:"easeOut"},style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.5rem"},children:t.conceptLabel||"The Concept"}),o.jsx(P.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.15,ease:"easeOut"},className:"font-serif font-light mb-6 leading-snug",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"1.875rem",color:"#262421",letterSpacing:"-0.01em"},children:t.concept}),o.jsx(P.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:.3,ease:"easeOut"},style:{color:"#2E2A26",opacity:.6,lineHeight:"1.9",fontWeight:300},children:t.description}),t.materials.length>0&&o.jsxs("div",{style:{marginTop:"2.5rem"},children:[o.jsxs(P.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.65,ease:"easeOut"},children:[o.jsx("div",{style:{borderTop:"1px solid #D4B483",marginBottom:"0.875rem"}}),o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.25rem"},children:"Materials Used"})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem 2rem"},children:t.materials.map((v,b)=>o.jsxs(P.div,{initial:{opacity:0,x:-16},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:.75+b*.08,ease:"easeOut"},style:{display:"flex",alignItems:"center",gap:"0.75rem",color:"#2E2A26",opacity:.6,fontSize:"0.875rem",fontWeight:300,lineHeight:1.8},children:[o.jsx("span",{style:{width:4,height:4,borderRadius:"50%",background:"#D4B483",flexShrink:0}}),v]},v))})]})]}),o.jsxs("div",{children:[o.jsx(P.p,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.5,delay:.45,ease:"easeOut"},style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1.5rem"},children:t.designIntentLabel||"Design Intent"}),o.jsxs(P.p,{initial:{opacity:0,y:20,scale:.97},whileInView:{opacity:1,y:0,scale:1},viewport:{once:!0},transition:{duration:.7,delay:.55,ease:"easeOut"},className:"font-serif font-light italic",style:{fontSize:"1.5rem",color:"#2E2A26",opacity:.75,lineHeight:"1.7"},children:['"',t.designIntent,'"']})]})]})})}),x.length>0&&o.jsxs("div",{style:{background:"#F7F2EA"},children:[o.jsx("style",{children:`
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
          `}),o.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-14",children:[o.jsx(se,{children:o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"2rem",textAlign:"center"},children:"The Gallery"})}),o.jsx("div",{className:"gallery-grid",children:x.map((v,b)=>o.jsx(se,{delay:Math.min(b*.07,.5),className:"gallery-item",children:o.jsx("div",{className:"gallery-thumb-wrap",onClick:()=>p(b),children:o.jsx("img",{src:v,alt:`${t.name} — view ${b+2}`,className:"gallery-thumb",loading:"lazy"})})},`${b}-${v}`))})]})]}),o.jsx("div",{style:{background:"#FFFCF7"},children:o.jsx("div",{className:"max-w-7xl mx-auto px-6",children:o.jsxs(se,{className:"text-center py-24",style:{borderTop:"1px solid #E9DED0"},children:[o.jsx("p",{style:{color:"#D4B483",fontSize:10,letterSpacing:"0.4em",textTransform:"uppercase",marginBottom:"1rem"},children:"Start Your Project"}),o.jsx("h2",{className:"font-serif font-light mb-8",style:{fontFamily:"'Playfair Display', serif",fontWeight:400,fontSize:"2.5rem",color:"#262421",letterSpacing:"-0.01em"},children:"Ready to design your space?"}),o.jsx(he,{to:"/contact",className:"inline-flex items-center gap-2 transition-all duration-300 font-medium text-xs tracking-[0.2em] uppercase px-10 py-4",style:{background:"linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",color:"#2E2A26",borderRadius:4,textDecoration:"none",transition:"background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease"},onMouseEnter:v=>{const b=v.currentTarget;b.style.background="linear-gradient(135deg, #E5C68A 0%, #D4AA73 50%, #C49B5E 100%)",b.style.transform="translateY(-2px)",b.style.boxShadow="0 10px 25px rgba(185,139,78,0.25)"},onMouseLeave:v=>{const b=v.currentTarget;b.style.background="linear-gradient(135deg, #D8B67A 0%, #C9A063 50%, #B98B4E 100%)",b.style.transform="translateY(0)",b.style.boxShadow="none"},children:"Book a Free Consultation"})]})})}),l!==null&&o.jsx(Hk,{images:x,startIndex:l,projectName:t.name,onClose:f})]})}function Yk(){const e=Ht(),[t,n]=h.useState(""),[r,i]=h.useState(""),[s,a]=h.useState(""),[l,c]=h.useState(!1),u=async d=>{d.preventDefault(),c(!0),a("");try{await Q4(t,r),e("/adminpannel/dashboard")}catch(p){a(p.message),c(!1)}};return o.jsxs("div",{className:"admin-login-root",children:[o.jsxs("div",{className:"admin-login-card",children:[o.jsxs("div",{className:"admin-login-logo",children:[o.jsx("span",{className:"admin-login-brand",children:"nivora"}),o.jsx("span",{className:"admin-login-sub",children:"ADMIN PANEL"})]}),o.jsxs("form",{onSubmit:u,className:"admin-login-form",children:[o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Username"}),o.jsx("input",{type:"text",value:t,onChange:d=>n(d.target.value),placeholder:"Enter username",autoFocus:!0,required:!0})]}),o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:r,onChange:d=>i(d.target.value),placeholder:"Enter password",required:!0})]}),s&&o.jsx("p",{className:"admin-login-error",children:s}),o.jsx("button",{type:"submit",className:"admin-btn-primary",disabled:l,children:l?"Signing in…":"Sign In"})]})]}),o.jsx("style",{children:`
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
      `})]})}function $a(e){return e.includes("/upload/")?e.replace("/upload/","/upload/w_300,h_225,c_fill,q_auto,f_auto/"):e}const Kk={id:"",name:"",location:"",category:"residential",year:new Date().getFullYear().toString(),conceptLabel:"The Concept",concept:"",description:"",designIntentLabel:"Design Intent",designIntent:"",materials:[],coverImage:"",heroImage:"",images:[]};function om({initial:e,onSave:t,onCancel:n,isEdit:r}){const[i,s]=h.useState({...Kk,...e}),[a,l]=h.useState(""),[c,u]=h.useState(!1),[d,p]=h.useState(""),[f,x]=h.useState(!1),[v,b]=h.useState(!1),[w,g]=h.useState(!1),m=h.useRef(null),y=h.useRef(null),S=h.useRef(null),[j,k]=h.useState(""),[T,C]=h.useState(""),[V,D]=h.useState(""),O=()=>{const N=j.trim();N&&(F("coverImage",N),k(""))},B=()=>{const N=T.trim();N&&(F("heroImage",N),C(""))},$=()=>{const N=V.trim();N&&(F("images",[...i.images||[],N]),D(""))},F=(N,A)=>s(_=>({..._,[N]:A})),Q=N=>N.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""),R=N=>{F("name",N),r||F("id",Q(N))},z=()=>{const N=a.trim();N&&(F("materials",[...i.materials||[],N]),l(""))},E=N=>F("materials",(i.materials||[]).filter((A,_)=>_!==N)),M=async N=>{const A=Array.from(N.target.files||[]);if(A.length){x(!0);try{const _=await _a([A[0]]);F("coverImage",_[0])}catch(_){p(_.message)}finally{x(!1),m.current&&(m.current.value="")}}},W=async N=>{const A=Array.from(N.target.files||[]);if(A.length){b(!0);try{const _=await _a([A[0]]);F("heroImage",_[0])}catch(_){p(_.message)}finally{b(!1),y.current&&(y.current.value="")}}},G=async N=>{const A=Array.from(N.target.files||[]);if(A.length){g(!0);try{const _=await _a(A);F("images",[...i.images||[],..._])}catch(_){p(_.message)}finally{g(!1),S.current&&(S.current.value="")}}},ee=N=>F("images",(i.images||[]).filter((A,_)=>_!==N)),Y=(N,A)=>{const _=[...i.images||[]],[Qe]=_.splice(N,1);_.splice(A,0,Qe),F("images",_)},re=async()=>{var N,A;if(p(""),!((N=i.name)!=null&&N.trim()))return p("Project name is required.");if(!((A=i.id)!=null&&A.trim()))return p("Project ID / slug is required.");if(!i.category)return p("Category is required.");u(!0);try{await t(i)}catch(_){p(_.message)}finally{u(!1)}};return o.jsxs("div",{className:"apf-overlay",children:[o.jsxs("div",{className:"apf-panel",children:[o.jsxs("div",{className:"apf-header",children:[o.jsx("h2",{className:"apf-title",children:r?"Edit Project":"Add New Project"}),o.jsx("button",{className:"apf-close",onClick:n,children:o.jsx(bt,{size:20})})]}),o.jsxs("div",{className:"apf-body",children:[d&&o.jsx("div",{className:"apf-error",children:d}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Basic Information"}),o.jsxs("div",{className:"apf-grid-2",children:[o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Project Name ",o.jsx("span",{className:"req",children:"*"})]}),o.jsx("input",{value:i.name||"",onChange:N=>R(N.target.value),placeholder:"e.g. Serenity Villa"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Slug / ID ",o.jsx("span",{className:"req",children:"*"})]}),o.jsx("input",{value:i.id||"",onChange:N=>F("id",Q(N.target.value)),placeholder:"e.g. serenity-villa-mumbai",readOnly:r,style:r?{opacity:.5}:{}})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Location"}),o.jsx("input",{value:i.location||"",onChange:N=>F("location",N.target.value),placeholder:"e.g. Juhu, Mumbai"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Year"}),o.jsx("input",{value:i.year||"",onChange:N=>F("year",N.target.value),placeholder:"e.g. 2024"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsxs("label",{children:["Category ",o.jsx("span",{className:"req",children:"*"})]}),o.jsxs("select",{value:i.category||"residential",onChange:N=>F("category",N.target.value),children:[o.jsx("option",{value:"residential",children:"Residential"}),o.jsx("option",{value:"commercial",children:"Commercial"}),o.jsx("option",{value:"architecture",children:"Architecture"})]})]})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Concept Section"}),o.jsxs("div",{className:"apf-grid-2",children:[o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Concept Label"}),o.jsx("input",{value:i.conceptLabel||"",onChange:N=>F("conceptLabel",N.target.value),placeholder:"The Concept"})]}),o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Concept Tagline"}),o.jsx("input",{value:i.concept||"",onChange:N=>F("concept",N.target.value),placeholder:"e.g. Calm monumentality with organic textures"})]})]}),o.jsxs("div",{className:"apf-field apf-field-full",children:[o.jsx("label",{children:"Description"}),o.jsx("textarea",{rows:4,value:i.description||"",onChange:N=>F("description",N.target.value),placeholder:"Long-form description of the project…"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Design Intent"}),o.jsx("div",{className:"apf-grid-2",children:o.jsxs("div",{className:"apf-field",children:[o.jsx("label",{children:"Design Intent Label"}),o.jsx("input",{value:i.designIntentLabel||"",onChange:N=>F("designIntentLabel",N.target.value),placeholder:"Design Intent"})]})}),o.jsxs("div",{className:"apf-field apf-field-full",children:[o.jsx("label",{children:"Design Intent Quote"}),o.jsx("textarea",{rows:3,value:i.designIntent||"",onChange:N=>F("designIntent",N.target.value),placeholder:"e.g. To create a home that breathes — where every surface tells a quiet story."})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Materials"}),o.jsxs("div",{className:"apf-materials-input",children:[o.jsx("input",{value:a,onChange:N=>l(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),z())},placeholder:"e.g. Lime-washed oak — press Enter or click Add"}),o.jsxs("button",{type:"button",className:"apf-add-btn",onClick:z,children:[o.jsx($i,{size:16})," Add"]})]}),(i.materials||[]).length>0&&o.jsx("div",{className:"apf-tags",children:(i.materials||[]).map((N,A)=>o.jsxs("span",{className:"apf-tag",children:[N,o.jsx("button",{onClick:()=>E(A),children:o.jsx(bt,{size:12})})]},A))})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Cover Image"}),o.jsx("p",{className:"apf-hint",children:"The thumbnail image shown on the Portfolio page card."}),i.coverImage?o.jsxs("div",{className:"apf-cover-preview",children:[o.jsx("img",{src:$a(i.coverImage),alt:"Cover",loading:"lazy",decoding:"async"}),o.jsxs("button",{className:"apf-cover-remove",onClick:()=>F("coverImage",""),children:[o.jsx(bt,{size:14})," Remove"]})]}):o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var N;return(N=m.current)==null?void 0:N.click()},children:f?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ko,{size:24})," Click to upload cover image"]})}),o.jsx("input",{ref:m,type:"file",accept:"image/*",style:{display:"none"},onChange:M}),!i.coverImage&&o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:j,onChange:N=>k(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),O())},placeholder:"https://example.com/cover.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:O,disabled:!j.trim(),children:"Use URL"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Hero Image"}),o.jsx("p",{className:"apf-hint",children:"The large banner image shown at the top of the project detail page."}),i.heroImage?o.jsxs("div",{className:"apf-cover-preview",children:[o.jsx("img",{src:$a(i.heroImage),alt:"Hero",loading:"lazy",decoding:"async"}),o.jsxs("button",{className:"apf-cover-remove",onClick:()=>F("heroImage",""),children:[o.jsx(bt,{size:14})," Remove"]})]}):o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var N;return(N=y.current)==null?void 0:N.click()},children:v?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ko,{size:24})," Click to upload hero image"]})}),o.jsx("input",{ref:y,type:"file",accept:"image/*",style:{display:"none"},onChange:W}),!i.heroImage&&o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:T,onChange:N=>C(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),B())},placeholder:"https://example.com/hero.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:B,disabled:!T.trim(),children:"Use URL"})]})]}),o.jsxs("section",{className:"apf-section",children:[o.jsx("h3",{className:"apf-section-title",children:"Gallery Images"}),o.jsx("p",{className:"apf-hint",children:"Shown on the project detail page. Reorder with ↑ ↓."}),o.jsx("div",{className:"apf-upload-zone",onClick:()=>{var N;return(N=S.current)==null?void 0:N.click()},children:w?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:24,className:"apf-spin"})," Uploading…"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ko,{size:24})," Click to upload gallery images (multiple allowed)"]})}),o.jsx("input",{ref:S,type:"file",accept:"image/*",multiple:!0,style:{display:"none"},onChange:G}),o.jsxs("div",{className:"apf-url-row",style:{marginTop:10},children:[o.jsx("span",{className:"apf-url-label",children:"Or paste URL:"}),o.jsx("input",{className:"apf-url-input",type:"url",value:V,onChange:N=>D(N.target.value),onKeyDown:N=>{N.key==="Enter"&&(N.preventDefault(),$())},placeholder:"https://example.com/image.jpg"}),o.jsx("button",{type:"button",className:"apf-url-btn",onClick:$,disabled:!V.trim(),children:"Add URL"})]}),(i.images||[]).length>0&&o.jsx("div",{className:"apf-gallery-grid",children:(i.images||[]).map((N,A)=>o.jsxs("div",{className:`apf-gallery-item${i.heroImage===N?" apf-gallery-item-hero":""}`,children:[o.jsx("img",{src:$a(N),alt:`Image ${A+1}`,loading:"lazy",decoding:"async"}),o.jsx("div",{className:"apf-gallery-overlay",children:o.jsx("button",{onClick:()=>ee(A),title:"Remove",className:"apf-gal-btn apf-gal-btn-del",children:o.jsx(bt,{size:12})})}),o.jsxs("div",{className:"apf-gallery-order",children:[A>0&&o.jsx("button",{onClick:()=>Y(A,A-1),className:"apf-ord-btn",children:"↑"}),A<(i.images||[]).length-1&&o.jsx("button",{onClick:()=>Y(A,A+1),className:"apf-ord-btn",children:"↓"})]}),o.jsxs("button",{onClick:()=>F("heroImage",i.heroImage===N?"":N),title:i.heroImage===N?"Unset as hero image":"Use as hero image",className:`apf-hero-toggle${i.heroImage===N?" apf-hero-toggle-active":""}`,children:[o.jsx(K4,{size:11,fill:i.heroImage===N?"currentColor":"none"}),i.heroImage===N?"Hero":"Set Hero"]}),o.jsxs("span",{className:"apf-gallery-num",children:["#",A+1]})]},A))})]})]}),o.jsxs("div",{className:"apf-footer",children:[o.jsx("button",{className:"apf-btn-ghost",onClick:n,children:"Cancel"}),o.jsx("button",{className:"apf-btn-save",onClick:re,disabled:c,children:c?o.jsxs(o.Fragment,{children:[o.jsx(Re,{size:15,className:"apf-spin"})," Saving…"]}):r?"Save Changes":"Create Project"})]})]}),o.jsx("style",{children:`
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
      `})]})}const hn="#7a6245";function Mr({label:e,hint:t,currentUrl:n,onUploaded:r}){const[i,s]=h.useState(!1),[a,l]=h.useState(""),[c,u]=h.useState(""),[d,p]=h.useState(!1),f=h.useRef(null),x=n==null?void 0:n.includes("cloudinary.com"),v=n&&!n.startsWith("http"),b=async m=>{var S;const y=(S=m.target.files)==null?void 0:S[0];if(y){s(!0),l("");try{const j=await r5(y);r(j)}catch(j){l(j.message)}finally{s(!1),f.current&&(f.current.value="")}}},w=()=>{const m=c.trim();m&&(r(m),u(""))},g=()=>{n&&navigator.clipboard.writeText(n).then(()=>{p(!0),setTimeout(()=>p(!1),2e3)})};return o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:Qs,children:e}),t&&o.jsx("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 10px"},children:t}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,flexWrap:"wrap"},children:[n?o.jsx("img",{src:n,alt:e,style:{height:64,width:"auto",maxWidth:200,objectFit:"contain",borderRadius:6,border:"1px solid #e2d9ce",background:"#f5f0e8",padding:6}}):o.jsx("div",{style:{height:64,width:140,borderRadius:6,border:"2px dashed #e2d9ce",background:"#faf8f5",display:"flex",alignItems:"center",justifyContent:"center",color:"#c0b5a8",fontSize:11},children:"No image"}),o.jsxs("div",{children:[o.jsx("input",{ref:f,type:"file",accept:"image/*",style:{display:"none"},onChange:b}),o.jsxs("button",{onClick:()=>{var m;return(m=f.current)==null?void 0:m.click()},disabled:i,style:wi,children:[i?o.jsx(Re,{size:13,style:{animation:"spin 1s linear infinite"}}):o.jsx(Ko,{size:13}),i?"Uploading…":n?"Replace Image":"Upload Image"]}),n&&o.jsx("p",{style:{fontSize:11,marginTop:5,color:x?"#7aab7a":"#c0b5a8"},children:x?"✓ Stored on Cloudinary CDN":v?"⚠ Local file path — upload to use CDN":"✓ External URL"})]})]}),n&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:8},children:[o.jsx("span",{style:{fontSize:11,color:"#b0a498",whiteSpace:"nowrap"},children:"Image URL:"}),o.jsx("input",{type:"text",readOnly:!0,value:n,style:{...Er,fontSize:11,padding:"4px 8px",flex:1,minWidth:0,color:"#7a6245",background:"#f5f0e8",cursor:"text"},onFocus:m=>m.target.select()}),o.jsx("button",{onClick:g,style:{...wi,padding:"4px 10px",fontSize:11,whiteSpace:"nowrap",color:d?"#3a7a3a":void 0},children:d?"✓ Copied":"Copy"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:8},children:[o.jsx("span",{style:{fontSize:11,color:"#c0b5a8",whiteSpace:"nowrap"},children:"Or paste URL:"}),o.jsx("input",{type:"url",value:c,onChange:m=>u(m.target.value),placeholder:"https://example.com/image.jpg",onKeyDown:m=>{m.key==="Enter"&&w()},style:{...Er,fontSize:12,padding:"5px 9px",flex:1,minWidth:0}}),o.jsx("button",{onClick:w,disabled:!c.trim(),style:{...wi,padding:"5px 12px",fontSize:11,opacity:c.trim()?1:.5,cursor:c.trim()?"pointer":"default",whiteSpace:"nowrap"},children:"Use URL"})]}),a&&o.jsx("p",{style:{color:"#b85a4a",fontSize:12,marginTop:6},children:a})]})}function Zu({children:e}){return o.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:12},children:e})}function Ye({label:e,value:t,onChange:n,multiline:r,placeholder:i}){return o.jsxs("div",{children:[o.jsx("label",{style:Qs,children:e}),r?o.jsx("textarea",{style:{...Er,height:72,resize:"vertical"},value:t,placeholder:i,onChange:s=>n(s.target.value)}):o.jsx("input",{style:Er,value:t,placeholder:i,onChange:s=>n(s.target.value)})]})}function Gk({saving:e,onSave:t,success:n,error:r,onClearError:i}){return o.jsxs("div",{style:{paddingTop:8,paddingBottom:48},children:[n&&o.jsx("div",{style:i6,children:n}),r&&o.jsxs("div",{style:o6,children:[r,o.jsx("button",{onClick:i,style:{background:"none",border:"none",color:"#b85a4a",cursor:"pointer",fontSize:18},children:"×"})]}),o.jsxs("button",{onClick:t,disabled:e,style:{display:"inline-flex",alignItems:"center",gap:8,background:hn,color:"#fff",border:"none",borderRadius:4,padding:"10px 28px",fontSize:13,letterSpacing:"0.08em",cursor:e?"not-allowed":"pointer",fontWeight:600,textTransform:"uppercase",opacity:e?.7:1,marginTop:n||r?12:0},children:[e?o.jsx(Re,{size:14,style:{animation:"spin 1s linear infinite"}}):o.jsx(H4,{size:14}),e?"Saving…":"Save Changes"]})]})}function Xk({settings:e,onChange:t}){const n=e.logoSize??38;return o.jsxs("div",{children:[o.jsx("p",{style:kn,children:"The logo shown in the top navigation bar across the entire website."}),o.jsx(Mr,{label:"Navbar Logo",hint:"Works best as a wide PNG with transparent background.",currentUrl:e.logoUrl,onUploaded:r=>t({...e,logoUrl:r})}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:Qs,children:"Logo Size (height in px)"}),o.jsxs("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 8px"},children:["Current: ",o.jsxs("strong",{children:[n,"px"]})," height. Drag or type to resize."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("input",{type:"range",min:20,max:100,step:1,value:n,onChange:r=>t({...e,logoSize:Number(r.target.value)}),style:{flex:1,accentColor:hn}}),o.jsx("input",{type:"number",min:20,max:100,value:n,onChange:r=>t({...e,logoSize:Number(r.target.value)}),style:{...Er,width:72,textAlign:"center"}})]})]})]})}function qk({settings:e,onChange:t}){const n=e.footerLogoSize??200;return o.jsxs("div",{children:[o.jsx("p",{style:kn,children:"The logo shown in the footer. A version with a light/transparent background works best on the dark footer."}),o.jsx(Mr,{label:"Footer Logo",hint:"Works best as a wide PNG with transparent or dark background.",currentUrl:e.footerLogoUrl,onUploaded:r=>t({...e,footerLogoUrl:r})}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("label",{style:Qs,children:"Logo Size (width in px)"}),o.jsxs("p",{style:{fontSize:12,color:"#b0a498",margin:"0 0 8px"},children:["Current: ",o.jsxs("strong",{children:[n,"px"]})," wide. Drag or type to resize."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("input",{type:"range",min:80,max:400,step:4,value:n,onChange:r=>t({...e,footerLogoSize:Number(r.target.value)}),style:{flex:1,accentColor:hn}}),o.jsx("input",{type:"number",min:80,max:400,value:n,onChange:r=>t({...e,footerLogoSize:Number(r.target.value)}),style:{...Er,width:72,textAlign:"center"}})]})]})]})}function Jk({settings:e,onChange:t}){const n=e.homeHero??{backgroundImage:"",headline:"",subheadline:"",ctaText:"",ctaLink:""},r=i=>t({...e,homeHero:{...n,...i}});return o.jsxs("div",{children:[o.jsx("p",{style:kn,children:"The full-screen hero shown at the top of the home page — background image, headline, subheadline, and call-to-action button."}),o.jsx(Mr,{label:"Background Image",hint:"Full-width image behind the hero text. Use a high-resolution landscape photo.",currentUrl:n.backgroundImage,onUploaded:i=>r({backgroundImage:i})}),o.jsx("div",{style:{marginBottom:12},children:o.jsx(Ye,{label:"Headline",value:n.headline,placeholder:"e.g. Thoughtful Spaces, Timeless Design",onChange:i=>r({headline:i})})}),o.jsx("div",{style:{marginBottom:12},children:o.jsx(Ye,{label:"Subheadline",value:n.subheadline,placeholder:"e.g. Interior design that transforms the way you live.",onChange:i=>r({subheadline:i}),multiline:!0})}),o.jsxs(Zu,{children:[o.jsx(Ye,{label:"CTA Button Text",value:n.ctaText,placeholder:"e.g. Explore Our Work",onChange:i=>r({ctaText:i})}),o.jsx(Ye,{label:"CTA Button Link",value:n.ctaLink,placeholder:"e.g. /portfolio",onChange:i=>r({ctaLink:i})})]})]})}function Qk({settings:e,onChange:t}){const n=(r,i)=>{const s=[...e.serviceCards];s[r]=i,t({...e,serviceCards:s})};return o.jsxs("div",{children:[o.jsxs("p",{style:kn,children:["The cards in the ",o.jsx("strong",{children:'"Spaces Designed for Every Lifestyle"'})," section on the homepage. Each card has an image, title, and description."]}),e.serviceCards.map((r,i)=>o.jsxs("div",{style:oo,children:[o.jsxs("p",{style:so,children:["Card ",i+1]}),o.jsx(Mr,{label:"Image",currentUrl:r.img,onUploaded:s=>n(i,{...r,img:s})}),o.jsx(Ye,{label:"Title",value:r.title,onChange:s=>n(i,{...r,title:s})}),o.jsx("div",{style:{marginTop:10},children:o.jsx(Ye,{label:"Description",value:r.desc,onChange:s=>n(i,{...r,desc:s}),multiline:!0})})]},i))]})}function Zk({settings:e,onChange:t}){const n=e.instagramPosts??[],r=(l,c)=>{const u=n.map((d,p)=>p===l?{...d,...c}:d);t({...e,instagramPosts:u})},i=()=>{t({...e,instagramPosts:[...n,{image:"",url:""}]})},s=l=>{t({...e,instagramPosts:n.filter((c,u)=>u!==l)})},a=(l,c)=>{const u=l+c;if(u<0||u>=n.length)return;const d=[...n];[d[l],d[u]]=[d[u],d[l]],t({...e,instagramPosts:d})};return o.jsxs("div",{children:[o.jsxs("p",{style:kn,children:["The ",o.jsx("strong",{children:'"Follow Our Journey"'})," Instagram grid on the homepage. For each card, paste the link to the Instagram post or reel and upload its cover image (Instagram doesn't allow pulling the image automatically, so upload a screenshot or save the post's photo/video thumbnail)."]}),n.length===0&&o.jsx("p",{style:{fontSize:12,color:"#c0b5a8",marginBottom:16},children:"No custom cards yet — the homepage is currently showing placeholder images. Add cards below to replace them."}),n.map((l,c)=>o.jsxs("div",{style:{...oo,position:"relative"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[o.jsxs("p",{style:{...so,margin:0},children:["Card ",c+1]}),o.jsxs("div",{style:{display:"flex",gap:6},children:[o.jsx("button",{onClick:()=>a(c,-1),disabled:c===0,style:{...wi,padding:"4px 9px",opacity:c===0?.4:1,cursor:c===0?"default":"pointer"},children:"↑"}),o.jsx("button",{onClick:()=>a(c,1),disabled:c===n.length-1,style:{...wi,padding:"4px 9px",opacity:c===n.length-1?.4:1,cursor:c===n.length-1?"default":"pointer"},children:"↓"}),o.jsxs("button",{onClick:()=>s(c),style:{background:"none",border:"1px solid #e2d9ce",color:"#b85a4a",borderRadius:4,padding:"4px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontSize:12},children:[o.jsx(Js,{size:12})," Remove"]})]})]}),o.jsx(Mr,{label:"Cover Image",hint:"Upload the post/reel's cover photo — a square image works best.",currentUrl:l.image,onUploaded:u=>r(c,{image:u})}),o.jsx(Ye,{label:"Instagram Post / Reel Link",value:l.url,placeholder:"e.g. https://www.instagram.com/p/XXXXXXXXXXX/",onChange:u=>r(c,{url:u})})]},c)),o.jsxs("button",{onClick:i,style:{display:"inline-flex",alignItems:"center",gap:8,background:"none",border:`1px dashed ${hn}`,color:hn,borderRadius:6,padding:"10px 20px",fontSize:13,cursor:"pointer",letterSpacing:"0.04em",marginBottom:24},children:[o.jsx($i,{size:14})," Add Instagram Card"]})]})}function e6({settings:e,onChange:t}){var i;const n=(i=e.homeStats)!=null&&i.length?e.homeStats:[{value:"5+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],r=(s,a)=>{const l=n.map((c,u)=>u===s?{...c,...a}:c);t({...e,homeStats:l})};return o.jsxs("div",{children:[o.jsxs("p",{style:kn,children:["The four numbers shown in the ",o.jsx("strong",{children:"stats strip"})," below the Philosophy section on the home page. Enter the full display value (e.g. ",o.jsx("code",{children:"25+"}),", ",o.jsx("code",{children:"90%"}),", ",o.jsx("code",{children:"2"}),")."]}),n.map((s,a)=>o.jsxs("div",{style:oo,children:[o.jsxs("p",{style:so,children:["Stat ",a+1]}),o.jsxs(Zu,{children:[o.jsx(Ye,{label:"Value (e.g. 25+, 90%)",value:s.value,placeholder:"e.g. 25+",onChange:l=>r(a,{value:l})}),o.jsx(Ye,{label:"Label",value:s.label,placeholder:"e.g. Projects Completed",onChange:l=>r(a,{label:l})})]})]},a))]})}function t6({settings:e,onChange:t}){var i;const n=(i=e.aboutStats)!=null&&i.length?e.aboutStats:[{value:"25+",label:"Clients Served"},{value:"5+",label:"Years of Experience"},{value:"2",label:"Cities — Mumbai & Pune"},{value:"100%",label:"End-to-End Solutions"}],r=(s,a)=>{const l=n.map((c,u)=>u===s?{...c,...a}:c);t({...e,aboutStats:l})};return o.jsxs("div",{children:[o.jsxs("p",{style:kn,children:["The four numbers shown in the ",o.jsx("strong",{children:"stats strip"})," on the About page. Enter the full display value (e.g. ",o.jsx("code",{children:"25+"}),", ",o.jsx("code",{children:"100%"}),", ",o.jsx("code",{children:"2"}),")."]}),n.map((s,a)=>o.jsxs("div",{style:oo,children:[o.jsxs("p",{style:so,children:["Stat ",a+1]}),o.jsxs(Zu,{children:[o.jsx(Ye,{label:"Value (e.g. 25+, 100%)",value:s.value,placeholder:"e.g. 100%",onChange:l=>r(a,{value:l})}),o.jsx(Ye,{label:"Label",value:s.label,placeholder:"e.g. Clients Served",onChange:l=>r(a,{label:l})})]})]},a))]})}function n6({settings:e,onChange:t}){const n=e.servicesList??[],r=(a,l)=>{const c=[...n];c[a]=l,t({...e,servicesList:c})},i=()=>{t({...e,servicesList:[...n,{img:"",title:"",desc:""}]})},s=a=>{const l=n.filter((c,u)=>u!==a);t({...e,servicesList:l})};return o.jsxs("div",{children:[o.jsx("p",{style:kn,children:"The individual services listed on the Services page. Each service has an image, title, and description."}),n.map((a,l)=>o.jsxs("div",{style:{...oo,position:"relative"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[o.jsxs("p",{style:{...so,margin:0},children:["Service ",l+1]}),o.jsxs("button",{onClick:()=>s(l),style:{background:"none",border:"1px solid #e2d9ce",color:"#b85a4a",borderRadius:4,padding:"4px 8px",cursor:"pointer",display:"flex",alignItems:"center",gap:4,fontSize:12},children:[o.jsx(Js,{size:12})," Remove"]})]}),o.jsx(Mr,{label:"Image",currentUrl:a.img,onUploaded:c=>r(l,{...a,img:c})}),o.jsx("div",{style:{marginBottom:10},children:o.jsx(Ye,{label:"Title",value:a.title,placeholder:"e.g. Residential Design",onChange:c=>r(l,{...a,title:c})})}),o.jsx(Ye,{label:"Description",value:a.desc,placeholder:"e.g. Full-service interior design for homes and apartments.",onChange:c=>r(l,{...a,desc:c}),multiline:!0})]},l)),o.jsxs("button",{onClick:i,style:{display:"inline-flex",alignItems:"center",gap:8,background:"none",border:`1px dashed ${hn}`,color:hn,borderRadius:6,padding:"10px 20px",fontSize:13,cursor:"pointer",letterSpacing:"0.04em",marginBottom:24},children:[o.jsx($i,{size:14})," Add Service"]})]})}const sm={logoUrl:"",logoSize:38,footerLogoUrl:"",footerLogoSize:200,homeHero:{backgroundImage:"",headline:"",subheadline:"",ctaText:"",ctaLink:""},serviceCards:[],homePortfolio:[],instagramPosts:[],servicePageHero:{backgroundImage:"",headline:"",subheadline:""},servicesList:[],homeStats:[{value:"5+",label:"Years Experience"},{value:"25+",label:"Projects Completed"},{value:"50+",label:"Clients Served"},{value:"90%",label:"Client Satisfaction"}],aboutStats:[{value:"25+",label:"Clients Served"},{value:"5+",label:"Years of Experience"},{value:"2",label:"Cities — Mumbai & Pune"},{value:"100%",label:"End-to-End Solutions"}]};function r6({section:e}){const[t,n]=h.useState(null),[r,i]=h.useState(!0),[s,a]=h.useState(!1),[l,c]=h.useState(""),[u,d]=h.useState("");h.useEffect(()=>{i(!0),Rx().then(f=>{n({...sm,...f}),i(!1)}).catch(()=>i(!1))},[]),h.useEffect(()=>{c(""),d("")},[e]);const p=async()=>{if(t){a(!0),d(""),c("");try{const f=await i5(t),x={...sm,...t,...f};p5(x),n(x),c("Changes saved successfully."),setTimeout(()=>c(""),4e3)}catch(f){d(f.message)}finally{a(!1)}}};return r?o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"80px 0",color:"#b0a498"},children:[o.jsx(Re,{size:22,style:{animation:"spin 1s linear infinite"}})," Loading…",o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]}):t?o.jsxs("div",{children:[o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),e==="header"&&o.jsx(Xk,{settings:t,onChange:n}),e==="hero"&&o.jsx(Jk,{settings:t,onChange:n}),e==="expertise"&&o.jsx(Qk,{settings:t,onChange:n}),e==="instagram"&&o.jsx(Zk,{settings:t,onChange:n}),e==="home-stats"&&o.jsx(e6,{settings:t,onChange:n}),e==="footer"&&o.jsx(qk,{settings:t,onChange:n}),e==="about-stats"&&o.jsx(t6,{settings:t,onChange:n}),e==="services"&&o.jsx(n6,{settings:t,onChange:n}),o.jsx(Gk,{saving:s,onSave:p,success:l,error:u,onClearError:()=>d("")})]}):o.jsx("div",{style:{padding:"40px 0",color:"#b85a4a"},children:"Failed to load settings. Please refresh."})}const Qs={display:"block",fontSize:10,letterSpacing:"0.15em",textTransform:"uppercase",color:"#9a8e82",fontWeight:600,marginBottom:6},Er={width:"100%",padding:"8px 11px",border:"1px solid #ddd7ce",borderRadius:4,fontSize:13,color:"#2a2218",fontFamily:"inherit",outline:"none",background:"#faf8f5",transition:"border-color 0.2s"},wi={display:"inline-flex",alignItems:"center",gap:6,background:"none",border:"1px solid #c8bfb2",color:hn,borderRadius:4,padding:"8px 14px",fontSize:12,cursor:"pointer",letterSpacing:"0.04em",transition:"all 0.2s",fontFamily:"inherit"},kn={fontSize:13,color:"#9a8e82",marginBottom:24,lineHeight:1.6},oo={border:"1px solid #e2d9ce",borderRadius:8,padding:"20px 24px",marginBottom:16,background:"#fff"},so={margin:"0 0 16px",fontSize:11,fontWeight:700,color:"#c0b5a8",letterSpacing:"0.18em",textTransform:"uppercase"},i6={marginBottom:12,background:"#f0f7f0",border:"1px solid #b5d9b5",color:"#3a7a3a",borderRadius:4,padding:"10px 16px",fontSize:13},o6={marginBottom:12,background:"#fdf0ee",border:"1px solid #e8b5ad",color:"#b85a4a",borderRadius:4,padding:"10px 16px",fontSize:13,display:"flex",justifyContent:"space-between",alignItems:"center"},ed=[{id:"home",label:"Home Page",icon:bx,items:[{tab:"settings/header",label:"Header",icon:S4,hint:"Navbar logo"},{tab:"settings/hero",label:"Hero Section",icon:Y4,hint:"Full-screen hero banner"},{tab:"settings/expertise",label:"Our Expertise",icon:D4,hint:"Service cards section"},{tab:"settings/instagram",label:"Instagram",icon:wx,hint:"Follow Our Journey grid"},{tab:"settings/home-stats",label:"Stats Numbers",icon:Hf,hint:"Years, Projects, Clients, Satisfaction"},{tab:"settings/footer",label:"Footer",icon:O4,hint:"Footer logo"}]},{id:"about",label:"About Page",icon:M4,items:[{tab:"settings/about-stats",label:"Stats Numbers",icon:Hf,hint:"Clients, Experience, Cities, Solutions"}]},{id:"portfolio",label:"Portfolio Page",icon:L4,items:[{tab:"projects",label:"Portfolio Projects",icon:z4,hint:"Manage all portfolio projects"}]},{id:"service",label:"Service Page",icon:C4,items:[{tab:"settings/services",label:"Services",icon:B4,hint:"Individual service listings"}]}];function s6(e){for(const t of ed)if(t.items.some(n=>n.tab===e))return t.id;return"home"}function a6(e){for(const t of ed){const n=t.items.find(r=>r.tab===e);if(n)return n.label}return"Admin"}function l6(){const e=Ht(),[t,n]=h.useState("projects"),[r,i]=h.useState(new Set(["portfolio"])),[s,a]=h.useState([]),[l,c]=h.useState(!0),[u,d]=h.useState(""),[p,f]=h.useState(!1),[x,v]=h.useState(null),[b,w]=h.useState(null),[g,m]=h.useState(null),[y,S]=h.useState(""),[j,k]=h.useState(null),[T,C]=h.useState(null),[V,D]=h.useState(!1),O=A=>{S(A),setTimeout(()=>S(""),3e3)},B=async()=>{c(!0),d("");try{a(await Ax())}catch(A){d(A.message)}finally{c(!1)}};h.useEffect(()=>{B()},[]);const $=()=>{_u(),e("/adminpannel")},F=async A=>{await e5(A),await B(),f(!1),O("Project created successfully.")},Q=async A=>{try{v(await zx(A))}catch(_){d(_.message)}},R=async A=>{x!=null&&x.id&&(await t5(x.id,A),await B(),v(null),O("Project updated successfully."))},z=async A=>{w(A);try{await n5(A),await B(),O("Project deleted.")}catch(_){d(_.message)}finally{w(null),m(null)}},E=A=>{k(A)},M=(A,_)=>{A.preventDefault(),_!==T&&C(_)},W=()=>{k(null),C(null)},G=async A=>{if(V||j===null||j===A){W();return}const _=[...s],[Qe]=_.splice(j,1);_.splice(A,0,Qe),a(_),W(),D(!0);try{await Z4(_.map(Fr=>Fr.id)),O("Portfolio order updated.")}catch(Fr){d(Fr.message),await B()}finally{D(!1)}},ee=A=>{n(A),i(_=>new Set([..._,s6(A)]))},Y=A=>{i(_=>{const Qe=new Set(_);return Qe.has(A)?Qe.delete(A):Qe.add(A),Qe})},re=t.startsWith("settings/"),N=re?t.replace("settings/",""):null;return o.jsxs("div",{className:"adm-root",children:[o.jsxs("aside",{className:"adm-sidebar",children:[o.jsxs("div",{className:"adm-sidebar-brand",children:[o.jsx("span",{className:"adm-brand-name",children:"nivora"}),o.jsx("span",{className:"adm-brand-sub",children:"admin"})]}),o.jsxs("nav",{className:"adm-nav",children:[o.jsx("div",{className:"adm-nav-group-label",children:"Pages"}),ed.map(A=>{const _=r.has(A.id),Qe=A.icon,Fr=_?N4:hx,Mx=A.items.some(Ut=>Ut.tab===t);return o.jsxs("div",{children:[o.jsxs("div",{className:`adm-page-row ${Mx?"adm-page-row-active":""}`,onClick:()=>Y(A.id),children:[o.jsx(Qe,{size:13,style:{flexShrink:0}}),o.jsx("span",{style:{flex:1},children:A.label}),o.jsx(Fr,{size:11,style:{flexShrink:0,opacity:.5}})]}),_&&o.jsx("div",{className:"adm-sub-items",children:A.items.map(Ut=>{const Fx=Ut.icon;return o.jsxs("div",{className:`adm-nav-item adm-nav-sub ${t===Ut.tab?"adm-nav-active":""}`,onClick:()=>ee(Ut.tab),title:Ut.hint,children:[o.jsx(Fx,{size:12,style:{flexShrink:0,opacity:.75}}),Ut.label]},Ut.tab)})})]},A.id)})]}),o.jsx("div",{className:"adm-sidebar-footer",children:o.jsxs("button",{className:"adm-logout",onClick:$,children:[o.jsx(jx,{size:15})," Sign Out"]})})]}),o.jsxs("main",{className:"adm-main",children:[o.jsxs("header",{className:"adm-topbar",children:[o.jsxs("div",{className:"adm-topbar-left",children:[o.jsx("h1",{className:"adm-page-title",children:a6(t)}),t==="projects"&&o.jsxs("span",{className:"adm-count",children:[s.length," ",s.length===1?"project":"projects"]})]}),o.jsx("div",{className:"adm-topbar-right",children:t==="projects"?o.jsxs(o.Fragment,{children:[o.jsx("button",{className:"adm-btn-ghost-sm",onClick:B,title:"Refresh",children:o.jsx(Tx,{size:15})}),o.jsx("a",{href:"/portfolio",target:"_blank",rel:"noreferrer",className:"adm-btn-ghost-sm",title:"View portfolio",children:o.jsx(Uf,{size:15})}),o.jsxs("button",{className:"adm-btn-add",onClick:()=>f(!0),children:[o.jsx($i,{size:16})," Add Project"]})]}):o.jsx("a",{href:"/",target:"_blank",rel:"noreferrer",className:"adm-btn-ghost-sm",title:"View site",children:o.jsx(Uf,{size:15})})})]}),t==="projects"&&y&&o.jsx("div",{className:"adm-success",children:y}),t==="projects"&&u&&o.jsxs("div",{className:"adm-error",children:[u,o.jsx("button",{onClick:()=>d(""),children:"×"})]}),o.jsx("div",{className:"adm-content",children:re&&N?o.jsx(r6,{section:N}):l?o.jsxs("div",{className:"adm-loading",children:[o.jsx(Re,{size:28,className:"adm-spin"})," Loading projects…"]}):s.length===0?o.jsxs("div",{className:"adm-empty",children:[o.jsx("p",{children:"No projects yet."}),o.jsxs("button",{className:"adm-btn-add",onClick:()=>f(!0),children:[o.jsx($i,{size:16})," Add Your First Project"]})]}):o.jsxs("div",{className:"adm-table-wrap",children:[o.jsxs("p",{className:"adm-drag-hint",children:["Drag rows by the ",o.jsx($f,{size:12,style:{verticalAlign:"-2px"}})," handle to change the order projects appear in on the website.",V&&o.jsx("span",{className:"adm-saving",children:" Saving…"})]}),o.jsxs("table",{className:"adm-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{style:{width:32}}),o.jsx("th",{children:"Cover"}),o.jsx("th",{children:"Name"}),o.jsx("th",{children:"Location"}),o.jsx("th",{children:"Category"}),o.jsx("th",{children:"Year"}),o.jsx("th",{children:"Badge"}),o.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),o.jsx("tbody",{children:s.map((A,_)=>o.jsxs("tr",{draggable:!V,onDragStart:()=>E(_),onDragOver:Qe=>M(Qe,_),onDrop:()=>G(_),onDragEnd:W,className:`adm-row-draggable ${j===_?"adm-row-dragging":""} ${T===_&&j!==_?"adm-row-over":""}`,children:[o.jsx("td",{className:"adm-drag-handle",title:"Drag to reorder",children:o.jsx($f,{size:16})}),o.jsx("td",{children:A.coverImage?o.jsx("img",{src:A.coverImage,alt:A.name,className:"adm-thumb"}):o.jsx("div",{className:"adm-thumb-placeholder",children:"—"})}),o.jsxs("td",{children:[o.jsx("div",{className:"adm-name",children:A.name}),o.jsx("div",{className:"adm-slug",children:A.id})]}),o.jsx("td",{className:"adm-cell-muted",children:A.location||"—"}),o.jsx("td",{children:o.jsx("span",{className:`adm-badge adm-badge-${A.category}`,children:A.category})}),o.jsx("td",{className:"adm-cell-muted",children:A.year||"—"}),o.jsx("td",{className:"adm-cell-muted",children:A.badge||"—"}),o.jsx("td",{children:o.jsxs("div",{className:"adm-actions",children:[o.jsx("button",{className:"adm-action-btn",onClick:()=>Q(A.id),title:"Edit",children:o.jsx(Cx,{size:14})}),g===A.id?o.jsxs("div",{className:"adm-confirm",children:[o.jsx("span",{children:"Delete?"}),o.jsx("button",{className:"adm-confirm-yes",onClick:()=>z(A.id),disabled:b===A.id,children:b===A.id?o.jsx(Re,{size:12,className:"adm-spin"}):"Yes"}),o.jsx("button",{className:"adm-confirm-no",onClick:()=>m(null),children:"No"})]}):o.jsx("button",{className:"adm-action-btn adm-action-del",onClick:()=>m(A.id),title:"Delete",children:o.jsx(Js,{size:14})})]})})]},A.id))})]})]})})]}),p&&o.jsx(om,{onSave:F,onCancel:()=>f(!1)}),x&&o.jsx(om,{initial:x,onSave:R,onCancel:()=>v(null),isEdit:!0}),o.jsx("style",{children:`
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
      `})]})}function c6({children:e}){return sessionStorage.getItem("nivora_admin")==="true"?o.jsx(o.Fragment,{children:e}):o.jsx(I0,{to:"/adminpannel",replace:!0})}function u6(){const e=Ht(),[t,n]=h.useState(""),[r,i]=h.useState(""),[s,a]=h.useState(""),[l,c]=h.useState(!1),u=async d=>{d.preventDefault(),c(!0),a("");try{await s5(t,r),e("/excelsheet/data")}catch(p){a(p.message),c(!1)}};return o.jsxs("div",{className:"admin-login-root",children:[o.jsxs("div",{className:"admin-login-card",children:[o.jsxs("div",{className:"admin-login-logo",children:[o.jsx("span",{className:"admin-login-brand",children:"nivora"}),o.jsx("span",{className:"admin-login-sub",children:"ENQUIRY RECORDS"})]}),o.jsxs("form",{onSubmit:u,className:"admin-login-form",children:[o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Username"}),o.jsx("input",{type:"text",value:t,onChange:d=>n(d.target.value),placeholder:"Enter username",autoFocus:!0,required:!0})]}),o.jsxs("div",{className:"admin-field",children:[o.jsx("label",{children:"Password"}),o.jsx("input",{type:"password",value:r,onChange:d=>i(d.target.value),placeholder:"Enter password",required:!0})]}),s&&o.jsx("p",{className:"admin-login-error",children:s}),o.jsx("button",{type:"submit",className:"admin-btn-primary",disabled:l,children:l?"Signing in…":"Sign In"})]})]}),o.jsx("style",{children:`
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
      `})]})}const d6=[{key:"fullName",label:"Full Name",type:"text"},{key:"phone",label:"Phone Number",type:"text"},{key:"email",label:"Email Address",type:"text"},{key:"spaceType",label:"Type of Space",type:"text"},{key:"location",label:"Project Location",type:"text"},{key:"projectType",label:"Project Type",type:"text"},{key:"budget",label:"Estimated Budget",type:"text"},{key:"referral",label:"How Did You Hear About Us",type:"text"},{key:"requirements",label:"Brief Requirements",type:"textarea"},{key:"notes",label:"Notes",type:"textarea"}];function qr(e=new Date){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${r}`}function Ya(e){return new Date(`${e}T00:00:00`).toLocaleDateString(void 0,{day:"numeric",month:"short",year:"numeric"})}function p6(){const e=Ht(),[t,n]=h.useState([]),[r,i]=h.useState(()=>qr()),[s,a]=h.useState(!0),[l,c]=h.useState(""),[u,d]=h.useState(""),[p,f]=h.useState(null),[x,v]=h.useState({}),[b,w]=h.useState(!1),[g,m]=h.useState(null),[y,S]=h.useState(null),[j,k]=h.useState(!1),T=R=>{d(R),setTimeout(()=>d(""),3e3)},C=async(R=r)=>{a(!0),c(""),n([]);try{n(await a5(R))}catch(z){c(z.message||"Failed to fetch enquiries")}finally{a(!1)}};h.useEffect(()=>{C(r)},[r]);const V=()=>{Uu(),e("/excelsheet")},D=R=>{f(R),v({...R})},O=async()=>{if(p){w(!0);try{await l5(p._id,x),await C(r),f(null),T("Record updated.")}catch(R){c(R.message)}finally{w(!1)}}},B=async R=>{S(R);try{await c5(R),await C(r),T("Record deleted.")}catch(z){c(z.message)}finally{S(null),m(null)}},$=async()=>{k(!0);try{await u5(r)}catch(R){c(R.message)}finally{k(!1)}},F=R=>{const z=new Date;z.setDate(z.getDate()+R),i(qr(z))},Q=r===qr()?`Today, ${Ya(r)}`:r===qr(new Date(Date.now()-24*60*60*1e3))?`Yesterday, ${Ya(r)}`:Ya(r);return o.jsxs("div",{className:"exc-root",children:[o.jsxs("aside",{className:"exc-sidebar",children:[o.jsxs("div",{className:"exc-sidebar-brand",children:[o.jsx("span",{className:"exc-brand-name",children:"nivora"}),o.jsx("span",{className:"exc-brand-sub",children:"enquiry records"})]}),o.jsx("div",{className:"exc-sidebar-footer",children:o.jsxs("button",{className:"exc-logout",onClick:V,children:[o.jsx(jx,{size:15})," Sign Out"]})})]}),o.jsxs("main",{className:"exc-main",children:[o.jsxs("header",{className:"exc-topbar",children:[o.jsxs("div",{className:"exc-topbar-left",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"exc-page-title",children:"Contact Form Records"}),o.jsxs("p",{className:"exc-date-status",children:["Showing enquiries for: ",Q]})]}),o.jsxs("span",{className:"exc-count",children:[t.length," ",t.length===1?"entry":"entries"]})]}),o.jsxs("div",{className:"exc-topbar-right",children:[o.jsxs("div",{className:"exc-date-controls",children:[o.jsx("button",{className:"exc-date-shortcut",onClick:()=>F(0),children:"Today"}),o.jsx("button",{className:"exc-date-shortcut",onClick:()=>F(-1),children:"Yesterday"}),o.jsxs("label",{className:"exc-date-picker",children:[o.jsx("span",{children:"Date"}),o.jsx("input",{type:"date",value:r,max:qr(),onChange:R=>R.target.value&&i(R.target.value),"aria-label":"Select enquiry date"})]})]}),o.jsx("button",{className:"exc-btn-ghost-sm",onClick:()=>C(r),title:"Refresh",children:o.jsx(Tx,{size:15})}),o.jsxs("button",{className:"exc-btn-add",onClick:$,disabled:j||t.length===0,children:[j?o.jsx(Re,{size:16,className:"exc-spin"}):o.jsx(R4,{size:16})," Download Excel"]})]})]}),u&&o.jsx("div",{className:"exc-success",children:u}),l&&o.jsxs("div",{className:"exc-error",children:[l,o.jsx("button",{onClick:()=>c(""),children:"×"})]}),o.jsx("div",{className:"exc-content",children:s?o.jsxs("div",{className:"exc-loading",children:[o.jsx(Re,{size:28,className:"exc-spin"})," Loading records…"]}):t.length===0?o.jsx("div",{className:"exc-empty",children:o.jsx("p",{children:"No enquiries found"})}):o.jsx("div",{className:"exc-table-wrap",children:o.jsxs("table",{className:"exc-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Submitted"}),o.jsx("th",{children:"Full Name"}),o.jsx("th",{children:"Phone"}),o.jsx("th",{children:"Email"}),o.jsx("th",{children:"Space Type"}),o.jsx("th",{children:"Location"}),o.jsx("th",{children:"Project Type"}),o.jsx("th",{children:"Budget"}),o.jsx("th",{children:"Email Sent"}),o.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),o.jsx("tbody",{children:t.map(R=>o.jsxs("tr",{children:[o.jsx("td",{className:"exc-cell-muted",children:new Date(R.createdAt).toLocaleString()}),o.jsx("td",{className:"exc-name",children:R.fullName}),o.jsx("td",{className:"exc-cell-muted",children:R.phone}),o.jsx("td",{className:"exc-cell-muted",children:R.email}),o.jsx("td",{className:"exc-cell-muted",children:R.spaceType||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.location||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.projectType||"—"}),o.jsx("td",{className:"exc-cell-muted",children:R.budget||"—"}),o.jsx("td",{children:o.jsx("span",{className:`exc-badge ${R.emailSent?"exc-badge-yes":"exc-badge-no"}`,children:R.emailSent?"Yes":"No"})}),o.jsx("td",{children:o.jsxs("div",{className:"exc-actions",children:[o.jsx("button",{className:"exc-action-btn",onClick:()=>D(R),title:"Edit",children:o.jsx(Cx,{size:14})}),g===R._id?o.jsxs("div",{className:"exc-confirm",children:[o.jsx("span",{children:"Delete?"}),o.jsx("button",{className:"exc-confirm-yes",onClick:()=>B(R._id),disabled:y===R._id,children:y===R._id?o.jsx(Re,{size:12,className:"exc-spin"}):o.jsx(T4,{size:12})}),o.jsx("button",{className:"exc-confirm-no",onClick:()=>m(null),children:o.jsx(bt,{size:12})})]}):o.jsx("button",{className:"exc-action-btn exc-action-del",onClick:()=>m(R._id),title:"Delete",children:o.jsx(Js,{size:14})})]})})]},R._id))})]})})})]}),p&&o.jsx("div",{className:"exc-modal-overlay",onClick:()=>!b&&f(null),children:o.jsxs("div",{className:"exc-modal",onClick:R=>R.stopPropagation(),children:[o.jsxs("div",{className:"exc-modal-header",children:[o.jsx("h2",{children:"Edit Record"}),o.jsx("button",{className:"exc-modal-close",onClick:()=>!b&&f(null),children:o.jsx(bt,{size:18})})]}),o.jsx("div",{className:"exc-modal-body",children:d6.map(R=>o.jsxs("div",{className:"exc-field",children:[o.jsx("label",{children:R.label}),R.type==="textarea"?o.jsx("textarea",{value:x[R.key]||"",onChange:z=>v(E=>({...E,[R.key]:z.target.value}))}):o.jsx("input",{type:"text",value:x[R.key]||"",onChange:z=>v(E=>({...E,[R.key]:z.target.value}))})]},R.key))}),o.jsxs("div",{className:"exc-modal-footer",children:[o.jsx("button",{className:"exc-btn-ghost",onClick:()=>f(null),disabled:b,children:"Cancel"}),o.jsxs("button",{className:"exc-btn-add",onClick:O,disabled:b,children:[b?o.jsx(Re,{size:16,className:"exc-spin"}):null," Save Changes"]})]})]})}),o.jsx("style",{children:`
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
      `})]})}function f6({children:e}){return sessionStorage.getItem("nivora_excel_admin")==="true"?o.jsx(o.Fragment,{children:e}):o.jsx(I0,{to:"/excelsheet",replace:!0})}const m6=(()=>{try{const e=performance.getEntriesByType("navigation");if(e.length>0){const t=e[0].type;return t==="navigate"||t==="reload"}}catch{}return!0})();let am=!1;function h6(){const{pathname:e}=Wt();return h.useEffect(()=>{window.scrollTo(0,0)},[e]),null}function Nt({children:e}){return o.jsxs(o.Fragment,{children:[o.jsx(h5,{}),o.jsx("main",{children:e}),o.jsx(b5,{}),o.jsx(w5,{})]})}function g6(){const e=Wt(),t=e.pathname==="/",n=()=>m6&&!am,[r,i]=h.useState(0),[s,a]=h.useState(!t||!n()),[l,c]=h.useState(t&&n());h.useEffect(()=>{e.pathname==="/"&&n()?(c(!0),a(!1),i(d=>d+1)):(c(!1),a(!0))},[e.key]);const u=()=>{am=!0,a(!0),c(!1)};return o.jsxs(o.Fragment,{children:[l&&o.jsx(k5,{onExitComplete:u},r),o.jsx(E5,{splashDone:s}),o.jsxs(P.div,{animate:{x:l?"100%":0},transition:{duration:.7,ease:[.65,0,.35,1]},style:{overflowX:"hidden",minHeight:"100vh"},children:[o.jsx(h6,{}),o.jsxs(R0,{children:[o.jsx(Ie,{path:"/",element:o.jsx(Nt,{children:o.jsx(G5,{splashDone:s})})}),o.jsx(Ie,{path:"/portfolio",element:o.jsx(Nt,{children:o.jsx(Q5,{})})}),o.jsx(Ie,{path:"/portfolio/:id",element:o.jsx(Nt,{children:o.jsx($k,{})})}),o.jsx(Ie,{path:"/services",element:o.jsx(Nt,{children:o.jsx(ak,{})})}),o.jsx(Ie,{path:"/about",element:o.jsx(Nt,{children:o.jsx(kk,{})})}),o.jsx(Ie,{path:"/testimonials",element:o.jsx(Nt,{children:o.jsx(Ak,{})})}),o.jsx(Ie,{path:"/contact",element:o.jsx(Nt,{children:o.jsx(Mk,{})})}),o.jsx(Ie,{path:"/quote",element:o.jsx(Nt,{children:o.jsx(Bk,{})})}),o.jsx(Ie,{path:"/thank-you",element:o.jsx(Nt,{children:o.jsx(Wk,{})})})]})]})]})}function x6(){return o.jsx(u2,{children:o.jsxs(R0,{children:[o.jsx(Ie,{path:"/adminpannel",element:o.jsx(Yk,{})}),o.jsx(Ie,{path:"/adminpannel/dashboard",element:o.jsx(c6,{children:o.jsx(l6,{})})}),o.jsx(Ie,{path:"/excelsheet",element:o.jsx(u6,{})}),o.jsx(Ie,{path:"/excelsheet/data",element:o.jsx(f6,{children:o.jsx(p6,{})})}),o.jsx(Ie,{path:"/*",element:o.jsx(g6,{})})]})})}b0(document.getElementById("root")).render(o.jsx(h.StrictMode,{children:o.jsx(x6,{})}));
//# sourceMappingURL=index-UTKjTgrH.js.map
