(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Oh={exports:{}},va={},Lh={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function z0(){if(wm)return Ce;wm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function x(O){return O===null||typeof O!="object"?null:(O=C&&O[C]||O["@@iterator"],typeof O=="function"?O:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,X={};function q(O,H,ae){this.props=O,this.context=H,this.refs=X,this.updater=ae||B}q.prototype.isReactComponent={},q.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function me(){}me.prototype=q.prototype;function ce(O,H,ae){this.props=O,this.context=H,this.refs=X,this.updater=ae||B}var pe=ce.prototype=new me;pe.constructor=ce,z(pe,q.prototype),pe.isPureReactComponent=!0;var we=Array.isArray,ze=Object.prototype.hasOwnProperty,Te={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function S(O,H,ae){var Ie,Ae={},xe=null,Oe=null;if(H!=null)for(Ie in H.ref!==void 0&&(Oe=H.ref),H.key!==void 0&&(xe=""+H.key),H)ze.call(H,Ie)&&!V.hasOwnProperty(Ie)&&(Ae[Ie]=H[Ie]);var Le=arguments.length-2;if(Le===1)Ae.children=ae;else if(1<Le){for(var $e=Array(Le),gt=0;gt<Le;gt++)$e[gt]=arguments[gt+2];Ae.children=$e}if(O&&O.defaultProps)for(Ie in Le=O.defaultProps,Le)Ae[Ie]===void 0&&(Ae[Ie]=Le[Ie]);return{$$typeof:i,type:O,key:xe,ref:Oe,props:Ae,_owner:Te.current}}function T(O,H){return{$$typeof:i,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function N(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return H[ae]})}var b=/\/+/g;function A(O,H){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):H.toString(36)}function Ge(O,H,ae,Ie,Ae){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var Oe=!1;if(O===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(O.$$typeof){case i:case e:Oe=!0}}if(Oe)return Oe=O,Ae=Ae(Oe),O=Ie===""?"."+A(Oe,0):Ie,we(Ae)?(ae="",O!=null&&(ae=O.replace(b,"$&/")+"/"),Ge(Ae,H,ae,"",function(gt){return gt})):Ae!=null&&(R(Ae)&&(Ae=T(Ae,ae+(!Ae.key||Oe&&Oe.key===Ae.key?"":(""+Ae.key).replace(b,"$&/")+"/")+O)),H.push(Ae)),1;if(Oe=0,Ie=Ie===""?".":Ie+":",we(O))for(var Le=0;Le<O.length;Le++){xe=O[Le];var $e=Ie+A(xe,Le);Oe+=Ge(xe,H,ae,$e,Ae)}else if($e=x(O),typeof $e=="function")for(O=$e.call(O),Le=0;!(xe=O.next()).done;)xe=xe.value,$e=Ie+A(xe,Le++),Oe+=Ge(xe,H,ae,$e,Ae);else if(xe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Pt(O,H,ae){if(O==null)return O;var Ie=[],Ae=0;return Ge(O,Ie,"","",function(xe){return H.call(ae,xe,Ae++)}),Ie}function xt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Ue={current:null},Z={transition:null},le={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:Z,ReactCurrentOwner:Te};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Pt,forEach:function(O,H,ae){Pt(O,function(){H.apply(this,arguments)},ae)},count:function(O){var H=0;return Pt(O,function(){H++}),H},toArray:function(O){return Pt(O,function(H){return H})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ce.Component=q,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=ce,Ce.StrictMode=s,Ce.Suspense=g,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ce.act=te,Ce.cloneElement=function(O,H,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ie=z({},O.props),Ae=O.key,xe=O.ref,Oe=O._owner;if(H!=null){if(H.ref!==void 0&&(xe=H.ref,Oe=Te.current),H.key!==void 0&&(Ae=""+H.key),O.type&&O.type.defaultProps)var Le=O.type.defaultProps;for($e in H)ze.call(H,$e)&&!V.hasOwnProperty($e)&&(Ie[$e]=H[$e]===void 0&&Le!==void 0?Le[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Ie.children=ae;else if(1<$e){Le=Array($e);for(var gt=0;gt<$e;gt++)Le[gt]=arguments[gt+2];Ie.children=Le}return{$$typeof:i,type:O.type,key:Ae,ref:xe,props:Ie,_owner:Oe}},Ce.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Ce.createElement=S,Ce.createFactory=function(O){var H=S.bind(null,O);return H.type=O,H},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(O){return{$$typeof:m,render:O}},Ce.isValidElement=R,Ce.lazy=function(O){return{$$typeof:w,_payload:{_status:-1,_result:O},_init:xt}},Ce.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},Ce.startTransition=function(O){var H=Z.transition;Z.transition={};try{O()}finally{Z.transition=H}},Ce.unstable_act=te,Ce.useCallback=function(O,H){return Ue.current.useCallback(O,H)},Ce.useContext=function(O){return Ue.current.useContext(O)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(O){return Ue.current.useDeferredValue(O)},Ce.useEffect=function(O,H){return Ue.current.useEffect(O,H)},Ce.useId=function(){return Ue.current.useId()},Ce.useImperativeHandle=function(O,H,ae){return Ue.current.useImperativeHandle(O,H,ae)},Ce.useInsertionEffect=function(O,H){return Ue.current.useInsertionEffect(O,H)},Ce.useLayoutEffect=function(O,H){return Ue.current.useLayoutEffect(O,H)},Ce.useMemo=function(O,H){return Ue.current.useMemo(O,H)},Ce.useReducer=function(O,H,ae){return Ue.current.useReducer(O,H,ae)},Ce.useRef=function(O){return Ue.current.useRef(O)},Ce.useState=function(O){return Ue.current.useState(O)},Ce.useSyncExternalStore=function(O,H,ae){return Ue.current.useSyncExternalStore(O,H,ae)},Ce.useTransition=function(){return Ue.current.useTransition()},Ce.version="18.3.1",Ce}var Tm;function Id(){return Tm||(Tm=1,Lh.exports=z0()),Lh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function B0(){if(Im)return va;Im=1;var i=Id(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,g,_){var w,C={},x=null,B=null;_!==void 0&&(x=""+_),g.key!==void 0&&(x=""+g.key),g.ref!==void 0&&(B=g.ref);for(w in g)s.call(g,w)&&!u.hasOwnProperty(w)&&(C[w]=g[w]);if(m&&m.defaultProps)for(w in g=m.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:e,type:m,key:x,ref:B,props:C,_owner:o.current}}return va.Fragment=t,va.jsx=h,va.jsxs=h,va}var Sm;function $0(){return Sm||(Sm=1,Oh.exports=B0()),Oh.exports}var k=$0(),uu={},Mh={exports:{}},Xt={},Fh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function H0(){return Am||(Am=1,(function(i){function e(Z,le){var te=Z.length;Z.push(le);e:for(;0<te;){var O=te-1>>>1,H=Z[O];if(0<o(H,le))Z[O]=le,Z[te]=H,te=O;else break e}}function t(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var le=Z[0],te=Z.pop();if(te!==le){Z[0]=te;e:for(var O=0,H=Z.length,ae=H>>>1;O<ae;){var Ie=2*(O+1)-1,Ae=Z[Ie],xe=Ie+1,Oe=Z[xe];if(0>o(Ae,te))xe<H&&0>o(Oe,Ae)?(Z[O]=Oe,Z[xe]=te,O=xe):(Z[O]=Ae,Z[Ie]=te,O=Ie);else if(xe<H&&0>o(Oe,te))Z[O]=Oe,Z[xe]=te,O=xe;else break e}}return le}function o(Z,le){var te=Z.sortIndex-le.sortIndex;return te!==0?te:Z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;i.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],_=[],w=1,C=null,x=3,B=!1,z=!1,X=!1,q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function pe(Z){for(var le=t(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=Z)s(_),le.sortIndex=le.expirationTime,e(g,le);else break;le=t(_)}}function we(Z){if(X=!1,pe(Z),!z)if(t(g)!==null)z=!0,xt(ze);else{var le=t(_);le!==null&&Ue(we,le.startTime-Z)}}function ze(Z,le){z=!1,X&&(X=!1,me(S),S=-1),B=!0;var te=x;try{for(pe(le),C=t(g);C!==null&&(!(C.expirationTime>le)||Z&&!N());){var O=C.callback;if(typeof O=="function"){C.callback=null,x=C.priorityLevel;var H=O(C.expirationTime<=le);le=i.unstable_now(),typeof H=="function"?C.callback=H:C===t(g)&&s(g),pe(le)}else s(g);C=t(g)}if(C!==null)var ae=!0;else{var Ie=t(_);Ie!==null&&Ue(we,Ie.startTime-le),ae=!1}return ae}finally{C=null,x=te,B=!1}}var Te=!1,V=null,S=-1,T=5,R=-1;function N(){return!(i.unstable_now()-R<T)}function b(){if(V!==null){var Z=i.unstable_now();R=Z;var le=!0;try{le=V(!0,Z)}finally{le?A():(Te=!1,V=null)}}else Te=!1}var A;if(typeof ce=="function")A=function(){ce(b)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,Pt=Ge.port2;Ge.port1.onmessage=b,A=function(){Pt.postMessage(null)}}else A=function(){q(b,0)};function xt(Z){V=Z,Te||(Te=!0,A())}function Ue(Z,le){S=q(function(){Z(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Z){Z.callback=null},i.unstable_continueExecution=function(){z||B||(z=!0,xt(ze))},i.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<Z?Math.floor(1e3/Z):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(g)},i.unstable_next=function(Z){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var te=x;x=le;try{return Z()}finally{x=te}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Z,le){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var te=x;x=Z;try{return le()}finally{x=te}},i.unstable_scheduleCallback=function(Z,le,te){var O=i.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,Z){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=te+H,Z={id:w++,callback:le,priorityLevel:Z,startTime:te,expirationTime:H,sortIndex:-1},te>O?(Z.sortIndex=te,e(_,Z),t(g)===null&&Z===t(_)&&(X?(me(S),S=-1):X=!0,Ue(we,te-O))):(Z.sortIndex=H,e(g,Z),z||B||(z=!0,xt(ze))),Z},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(Z){var le=x;return function(){var te=x;x=le;try{return Z.apply(this,arguments)}finally{x=te}}}})(jh)),jh}var Cm;function q0(){return Cm||(Cm=1,Fh.exports=H0()),Fh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function W0(){if(Rm)return Xt;Rm=1;var i=Id(),e=q0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,r){h(n,r),h(n+"Capture",r)}function h(n,r){for(o[n]=r,n=0;n<r.length;n++)s.add(r[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function x(n){return g.call(C,n)?!0:g.call(w,n)?!1:_.test(n)?C[n]=!0:(w[n]=!0,!1)}function B(n,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,r,a,c){if(r===null||typeof r>"u"||B(n,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(n,r,a,c,d,p,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=r,this.sanitizeURL=p,this.removeEmptyString=v}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){q[n]=new X(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];q[r]=new X(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){q[n]=new X(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){q[n]=new X(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){q[n]=new X(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){q[n]=new X(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){q[n]=new X(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){q[n]=new X(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){q[n]=new X(n,5,!1,n.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(me,ce);q[r]=new X(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(me,ce);q[r]=new X(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(me,ce);q[r]=new X(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){q[n]=new X(n,1,!1,n.toLowerCase(),null,!1,!1)}),q.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){q[n]=new X(n,1,!1,n.toLowerCase(),null,!0,!0)});function pe(n,r,a,c){var d=q.hasOwnProperty(r)?q[r]:null;(d!==null?d.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(z(r,a,d,c)&&(a=null),c||d===null?x(r)&&(a===null?n.removeAttribute(r):n.setAttribute(r,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(r=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(r):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,r,a):n.setAttribute(r,a))))}var we=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ze=Symbol.for("react.element"),Te=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),N=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),Z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ae=!1;function Ie(n,r){if(!n||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(j){var c=j}Reflect.construct(n,[],r)}else{try{r.call()}catch(j){c=j}n.call(r.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),p=c.stack.split(`
`),v=d.length-1,I=p.length-1;1<=v&&0<=I&&d[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==p[I]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=I);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Ie(n.type,!1),n;case 11:return n=Ie(n.type.render,!1),n;case 1:return n=Ie(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case Te:return"Portal";case T:return"Profiler";case S:return"StrictMode";case A:return"Suspense";case Ge:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case N:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case b:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case xt:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function Oe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Le(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function gt(n){var r=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rr(n){n._valueTracker||(n._valueTracker=gt(n))}function ss(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(r.setValue(n),!0):!1}function Pr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vi(n,r){var a=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function os(n,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=Le(r.value!=null?r.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function So(n,r){r=r.checked,r!=null&&pe(n,"checked",r,!1)}function Ao(n,r){So(n,r);var a=Le(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?as(n,r.type,a):r.hasOwnProperty("defaultValue")&&as(n,r.type,Le(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ga(n,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,a||r===n.value||(n.value=r),n.defaultValue=r}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function as(n,r,a){(r!=="number"||Pr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ir=Array.isArray;function sr(n,r,a,c){if(n=n.options,r){r={};for(var d=0;d<a.length;d++)r["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=r.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Le(a),r=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function Co(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ls(n,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(t(92));if(ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}r=a}r==null&&(r=""),a=r}n._wrapperState={initialValue:Le(a)}}function us(n,r){var a=Le(r.value),c=Le(r.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),r.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ro(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var or,ko=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(r,a,c,d)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(or=or||document.createElement("div"),or.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=or.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function xr(n,r){if(r){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=r;return}}n.textContent=r}var _i={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ei=["Webkit","ms","Moz","O"];Object.keys(_i).forEach(function(n){Ei.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),_i[r]=_i[n]})});function Po(n,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||_i.hasOwnProperty(n)&&_i[n]?(""+r).trim():r+"px"}function xo(n,r){n=n.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Po(a,r[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var No=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(n,r){if(r){if(No[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Vo(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wi=null;function cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hs=null,ln=null,Fn=null;function ds(n){if(n=ra(n)){if(typeof hs!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Sl(r),hs(n.stateNode,n.type,r))}}function jn(n){ln?Fn?Fn.push(n):Fn=[n]:ln=n}function bo(){if(ln){var n=ln,r=Fn;if(Fn=ln=null,ds(n),r)for(n=0;n<r.length;n++)ds(r[n])}}function Ti(n,r){return n(r)}function Oo(){}var ar=!1;function Lo(n,r,a){if(ar)return n(r,a);ar=!0;try{return Ti(n,r,a)}finally{ar=!1,(ln!==null||Fn!==null)&&(Oo(),bo())}}function nt(n,r){var a=n.stateNode;if(a===null)return null;var c=Sl(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,r,typeof a));return a}var fs=!1;if(m)try{var En={};Object.defineProperty(En,"passive",{get:function(){fs=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{fs=!1}function Ii(n,r,a,c,d,p,v,I,P){var j=Array.prototype.slice.call(arguments,3);try{r.apply(a,j)}catch(K){this.onError(K)}}var Si=!1,ps=null,wn=!1,Mo=null,uc={onError:function(n){Si=!0,ps=n}};function ms(n,r,a,c,d,p,v,I,P){Si=!1,ps=null,Ii.apply(uc,arguments)}function Qa(n,r,a,c,d,p,v,I,P){if(ms.apply(this,arguments),Si){if(Si){var j=ps;Si=!1,ps=null}else throw Error(t(198));wn||(wn=!0,Mo=j)}}function Tn(n){var r=n,a=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(a=r.return),n=r.return;while(n)}return r.tag===3?a:null}function Ai(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function Xa(n){var r=n.alternate;if(!r){if(r=Tn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var a=n,c=r;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return In(d),n;if(p===c)return In(d),r;p=p.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=p;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=p;break}if(I===c){v=!0,c=d,a=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===a){v=!0,a=p,c=d;break}if(I===c){v=!0,c=p,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:r}function Fo(n){return n=Xa(n),n!==null?gs(n):null}function gs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gs(n);if(r!==null)return r;n=n.sibling}return null}var ys=e.unstable_scheduleCallback,jo=e.unstable_cancelCallback,Ya=e.unstable_shouldYield,cc=e.unstable_requestPaint,He=e.unstable_now,Ja=e.unstable_getCurrentPriorityLevel,Ci=e.unstable_ImmediatePriority,Nr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Uo=e.unstable_LowPriority,Za=e.unstable_IdlePriority,Ri=null,Zt=null;function el(n){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Ri,n,void 0,(n.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:nl,zo=Math.log,tl=Math.LN2;function nl(n){return n>>>=0,n===0?32:31-(zo(n)/tl|0)|0}var vs=64,_s=4194304;function Dr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ki(n,r){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=Dr(I):(p&=v,p!==0&&(c=Dr(p)))}else v=a&~d,v!==0?c=Dr(v):p!==0&&(c=Dr(p));if(c===0)return 0;if(r!==0&&r!==c&&(r&d)===0&&(d=c&-c,p=r&-r,d>=p||d===16&&(p&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)a=31-jt(r),d=1<<a,c|=n[a],r&=~d;return c}function hc(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lr(n,r){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var v=31-jt(p),I=1<<v,P=d[v];P===-1?((I&a)===0||(I&c)!==0)&&(d[v]=hc(I,r)):P<=r&&(n.expiredLanes|=I),p&=~I}}function en(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pi(){var n=vs;return vs<<=1,(vs&4194240)===0&&(vs=64),n}function Vr(n){for(var r=[],a=0;31>a;a++)r.push(n);return r}function br(n,r,a){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-jt(r),n[r]=a}function Be(n,r){var a=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-jt(a),p=1<<d;r[d]=0,c[d]=-1,n[d]=-1,a&=~p}}function Or(n,r){var a=n.entangledLanes|=r;for(n=n.entanglements;a;){var c=31-jt(a),d=1<<c;d&r|n[c]&r&&(n[c]|=r),a&=~d}}var Pe=0;function Lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var rl,Es,il,sl,ol,Bo=!1,Un=[],Tt=null,Sn=null,An=null,Mr=new Map,cn=new Map,zn=[],dc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(n,r){switch(n){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Mr.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(r.pointerId)}}function $t(n,r,a,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},r!==null&&(r=ra(r),r!==null&&Es(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function fc(n,r,a,c,d){switch(r){case"focusin":return Tt=$t(Tt,n,r,a,c,d),!0;case"dragenter":return Sn=$t(Sn,n,r,a,c,d),!0;case"mouseover":return An=$t(An,n,r,a,c,d),!0;case"pointerover":var p=d.pointerId;return Mr.set(p,$t(Mr.get(p)||null,n,r,a,c,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,$t(cn.get(p)||null,n,r,a,c,d)),!0}return!1}function ll(n){var r=bi(n.target);if(r!==null){var a=Tn(r);if(a!==null){if(r=a.tag,r===13){if(r=Ai(a),r!==null){n.blockedOn=r,ol(n.priority,function(){il(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ur(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var a=ws(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);wi=c,a.target.dispatchEvent(c),wi=null}else return r=ra(a),r!==null&&Es(r),n.blockedOn=a,!1;r.shift()}return!0}function xi(n,r,a){ur(n)&&a.delete(r)}function ul(){Bo=!1,Tt!==null&&ur(Tt)&&(Tt=null),Sn!==null&&ur(Sn)&&(Sn=null),An!==null&&ur(An)&&(An=null),Mr.forEach(xi),cn.forEach(xi)}function Cn(n,r){n.blockedOn===r&&(n.blockedOn=null,Bo||(Bo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ul)))}function Rn(n){function r(d){return Cn(d,n)}if(0<Un.length){Cn(Un[0],n);for(var a=1;a<Un.length;a++){var c=Un[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Tt!==null&&Cn(Tt,n),Sn!==null&&Cn(Sn,n),An!==null&&Cn(An,n),Mr.forEach(r),cn.forEach(r),a=0;a<zn.length;a++)c=zn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<zn.length&&(a=zn[0],a.blockedOn===null);)ll(a),a.blockedOn===null&&zn.shift()}var cr=we.ReactCurrentBatchConfig,Fr=!0;function Qe(n,r,a,c){var d=Pe,p=cr.transition;cr.transition=null;try{Pe=1,$o(n,r,a,c)}finally{Pe=d,cr.transition=p}}function pc(n,r,a,c){var d=Pe,p=cr.transition;cr.transition=null;try{Pe=4,$o(n,r,a,c)}finally{Pe=d,cr.transition=p}}function $o(n,r,a,c){if(Fr){var d=ws(n,r,a,c);if(d===null)Ac(n,r,c,Ni,a),al(n,c);else if(fc(d,n,r,a,c))c.stopPropagation();else if(al(n,c),r&4&&-1<dc.indexOf(n)){for(;d!==null;){var p=ra(d);if(p!==null&&rl(p),p=ws(n,r,a,c),p===null&&Ac(n,r,c,Ni,a),p===d)break;d=p}d!==null&&c.stopPropagation()}else Ac(n,r,c,null,a)}}var Ni=null;function ws(n,r,a,c){if(Ni=null,n=cs(c),n=bi(n),n!==null)if(r=Tn(n),r===null)n=null;else if(a=r.tag,a===13){if(n=Ai(r),n!==null)return n;n=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ni=n,null}function Ho(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ja()){case Ci:return 1;case Nr:return 4;case un:case Uo:return 16;case Za:return 536870912;default:return 16}default:return 16}}var tn=null,Ts=null,Ht=null;function qo(){if(Ht)return Ht;var n,r=Ts,a=r.length,c,d="value"in tn?tn.value:tn.textContent,p=d.length;for(n=0;n<a&&r[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&r[a-c]===d[p-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Is(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Bn(){return!0}function Wo(){return!1}function It(n){function r(a,c,d,p,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Bn:Wo,this.isPropagationStopped=Wo,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Bn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Bn)},persist:function(){},isPersistent:Bn}),r}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=It(kn),$n=te({},kn,{view:0,detail:0}),mc=It($n),As,hr,jr,Di=te({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jr&&(jr&&n.type==="mousemove"?(As=n.screenX-jr.screenX,hr=n.screenY-jr.screenY):hr=As=0,jr=n),As)},movementY:function(n){return"movementY"in n?n.movementY:hr}}),Cs=It(Di),Ko=te({},Di,{dataTransfer:0}),cl=It(Ko),Rs=te({},$n,{relatedTarget:0}),ks=It(Rs),hl=te({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),dr=It(hl),dl=te({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),fl=It(dl),pl=te({},kn,{data:0}),Go=It(pl),Ps={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ut={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=ml[n])?!!r[n]:!1}function Hn(){return gl}var l=te({},$n,{key:function(n){if(n.key){var r=Ps[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Is(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ut[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?Is(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Is(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=It(l),y=te({},Di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=It(y),L=te({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),U=It(L),J=te({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=It(J),ct=te({},Di,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=It(ct),yt=[9,13,27,32],st=m&&"CompositionEvent"in window,hn=null;m&&"documentMode"in document&&(hn=document.documentMode);var nn=m&&"TextEvent"in window&&!hn,Vi=m&&(!st||hn&&8<hn&&11>=hn),xs=" ",mf=!1;function gf(n,r){switch(n){case"keyup":return yt.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function F_(n,r){switch(n){case"compositionend":return yf(r);case"keypress":return r.which!==32?null:(mf=!0,xs);case"textInput":return n=r.data,n===xs&&mf?null:n;default:return null}}function j_(n,r){if(Ns)return n==="compositionend"||!st&&gf(n,r)?(n=qo(),Ht=Ts=tn=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Vi&&r.locale!=="ko"?null:r.data;default:return null}}var U_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vf(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!U_[n.type]:r==="textarea"}function _f(n,r,a,c){jn(c),r=wl(r,"onChange"),0<r.length&&(a=new Ss("onChange","change",null,a,c),n.push({event:a,listeners:r}))}var Qo=null,Xo=null;function z_(n){Mf(n,0)}function yl(n){var r=Ls(n);if(ss(r))return n}function B_(n,r){if(n==="change")return r}var Ef=!1;if(m){var gc;if(m){var yc="oninput"in document;if(!yc){var wf=document.createElement("div");wf.setAttribute("oninput","return;"),yc=typeof wf.oninput=="function"}gc=yc}else gc=!1;Ef=gc&&(!document.documentMode||9<document.documentMode)}function Tf(){Qo&&(Qo.detachEvent("onpropertychange",If),Xo=Qo=null)}function If(n){if(n.propertyName==="value"&&yl(Xo)){var r=[];_f(r,Xo,n,cs(n)),Lo(z_,r)}}function $_(n,r,a){n==="focusin"?(Tf(),Qo=r,Xo=a,Qo.attachEvent("onpropertychange",If)):n==="focusout"&&Tf()}function H_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return yl(Xo)}function q_(n,r){if(n==="click")return yl(r)}function W_(n,r){if(n==="input"||n==="change")return yl(r)}function K_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pn=typeof Object.is=="function"?Object.is:K_;function Yo(n,r){if(Pn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var a=Object.keys(n),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(r,d)||!Pn(n[d],r[d]))return!1}return!0}function Sf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Af(n,r){var a=Sf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=r&&c>=r)return{node:a,offset:r-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sf(a)}}function Cf(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Cf(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Rf(){for(var n=window,r=Pr();r instanceof n.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)n=r.contentWindow;else break;r=Pr(n.document)}return r}function vc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function G_(n){var r=Rf(),a=n.focusedElem,c=n.selectionRange;if(r!==a&&a&&a.ownerDocument&&Cf(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(n,a.value.length);else if(n=(r=a.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Af(a,p);var v=Af(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(r),n.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),n.addRange(r)))}}for(r=[],n=a;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)n=r[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Q_=m&&"documentMode"in document&&11>=document.documentMode,Ds=null,_c=null,Jo=null,Ec=!1;function kf(n,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ds==null||Ds!==Pr(c)||(c=Ds,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jo&&Yo(Jo,c)||(Jo=c,c=wl(_c,"onSelect"),0<c.length&&(r=new Ss("onSelect","select",null,r,a),n.push({event:r,listeners:c}),r.target=Ds)))}function vl(n,r){var a={};return a[n.toLowerCase()]=r.toLowerCase(),a["Webkit"+n]="webkit"+r,a["Moz"+n]="moz"+r,a}var Vs={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},wc={},Pf={};m&&(Pf=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function _l(n){if(wc[n])return wc[n];if(!Vs[n])return n;var r=Vs[n],a;for(a in r)if(r.hasOwnProperty(a)&&a in Pf)return wc[n]=r[a];return n}var xf=_l("animationend"),Nf=_l("animationiteration"),Df=_l("animationstart"),Vf=_l("transitionend"),bf=new Map,Of="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){bf.set(n,r),u(r,[n])}for(var Tc=0;Tc<Of.length;Tc++){var Ic=Of[Tc],X_=Ic.toLowerCase(),Y_=Ic[0].toUpperCase()+Ic.slice(1);Ur(X_,"on"+Y_)}Ur(xf,"onAnimationEnd"),Ur(Nf,"onAnimationIteration"),Ur(Df,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Vf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function Lf(n,r,a){var c=n.type||"unknown-event";n.currentTarget=a,Qa(c,r,void 0,n),n.currentTarget=null}function Mf(n,r){r=(r&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var p=void 0;if(r)for(var v=c.length-1;0<=v;v--){var I=c[v],P=I.instance,j=I.currentTarget;if(I=I.listener,P!==p&&d.isPropagationStopped())break e;Lf(d,I,j),p=P}else for(v=0;v<c.length;v++){if(I=c[v],P=I.instance,j=I.currentTarget,I=I.listener,P!==p&&d.isPropagationStopped())break e;Lf(d,I,j),p=P}}}if(wn)throw n=Mo,wn=!1,Mo=null,n}function We(n,r){var a=r[Nc];a===void 0&&(a=r[Nc]=new Set);var c=n+"__bubble";a.has(c)||(Ff(r,n,2,!1),a.add(c))}function Sc(n,r,a){var c=0;r&&(c|=4),Ff(a,n,c,r)}var El="_reactListening"+Math.random().toString(36).slice(2);function ea(n){if(!n[El]){n[El]=!0,s.forEach(function(a){a!=="selectionchange"&&(J_.has(a)||Sc(a,!1,n),Sc(a,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[El]||(r[El]=!0,Sc("selectionchange",!1,r))}}function Ff(n,r,a,c){switch(Ho(r)){case 1:var d=Qe;break;case 4:d=pc;break;default:d=$o}a=d.bind(null,r,a,n),d=void 0,!fs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(r,a,{capture:!0,passive:d}):n.addEventListener(r,a,!0):d!==void 0?n.addEventListener(r,a,{passive:d}):n.addEventListener(r,a,!1)}function Ac(n,r,a,c,d){var p=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;I!==null;){if(v=bi(I),v===null)return;if(P=v.tag,P===5||P===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Lo(function(){var j=p,K=cs(a),Q=[];e:{var W=bf.get(n);if(W!==void 0){var ee=Ss,ie=n;switch(n){case"keypress":if(Is(a)===0)break e;case"keydown":case"keyup":ee=f;break;case"focusin":ie="focus",ee=ks;break;case"focusout":ie="blur",ee=ks;break;case"beforeblur":case"afterblur":ee=ks;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=U;break;case xf:case Nf:case Df:ee=dr;break;case Vf:ee=je;break;case"scroll":ee=mc;break;case"wheel":ee=Ne;break;case"copy":case"cut":case"paste":ee=fl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=E}var se=(r&4)!==0,rt=!se&&n==="scroll",M=se?W!==null?W+"Capture":null:W;se=[];for(var D=j,F;D!==null;){F=D;var Y=F.stateNode;if(F.tag===5&&Y!==null&&(F=Y,M!==null&&(Y=nt(D,M),Y!=null&&se.push(ta(D,Y,F)))),rt)break;D=D.return}0<se.length&&(W=new ee(W,ie,null,a,K),Q.push({event:W,listeners:se}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ee=n==="mouseout"||n==="pointerout",W&&a!==wi&&(ie=a.relatedTarget||a.fromElement)&&(bi(ie)||ie[fr]))break e;if((ee||W)&&(W=K.window===K?K:(W=K.ownerDocument)?W.defaultView||W.parentWindow:window,ee?(ie=a.relatedTarget||a.toElement,ee=j,ie=ie?bi(ie):null,ie!==null&&(rt=Tn(ie),ie!==rt||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=j),ee!==ie)){if(se=Cs,Y="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(se=E,Y="onPointerLeave",M="onPointerEnter",D="pointer"),rt=ee==null?W:Ls(ee),F=ie==null?W:Ls(ie),W=new se(Y,D+"leave",ee,a,K),W.target=rt,W.relatedTarget=F,Y=null,bi(K)===j&&(se=new se(M,D+"enter",ie,a,K),se.target=F,se.relatedTarget=rt,Y=se),rt=Y,ee&&ie)t:{for(se=ee,M=ie,D=0,F=se;F;F=bs(F))D++;for(F=0,Y=M;Y;Y=bs(Y))F++;for(;0<D-F;)se=bs(se),D--;for(;0<F-D;)M=bs(M),F--;for(;D--;){if(se===M||M!==null&&se===M.alternate)break t;se=bs(se),M=bs(M)}se=null}else se=null;ee!==null&&jf(Q,W,ee,se,!1),ie!==null&&rt!==null&&jf(Q,rt,ie,se,!0)}}e:{if(W=j?Ls(j):window,ee=W.nodeName&&W.nodeName.toLowerCase(),ee==="select"||ee==="input"&&W.type==="file")var oe=B_;else if(vf(W))if(Ef)oe=W_;else{oe=H_;var he=$_}else(ee=W.nodeName)&&ee.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(oe=q_);if(oe&&(oe=oe(n,j))){_f(Q,oe,a,K);break e}he&&he(n,W,j),n==="focusout"&&(he=W._wrapperState)&&he.controlled&&W.type==="number"&&as(W,"number",W.value)}switch(he=j?Ls(j):window,n){case"focusin":(vf(he)||he.contentEditable==="true")&&(Ds=he,_c=j,Jo=null);break;case"focusout":Jo=_c=Ds=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,kf(Q,a,K);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":kf(Q,a,K)}var de;if(st)e:{switch(n){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ns?gf(n,a)&&(ye="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(Vi&&a.locale!=="ko"&&(Ns||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ns&&(de=qo()):(tn=K,Ts="value"in tn?tn.value:tn.textContent,Ns=!0)),he=wl(j,ye),0<he.length&&(ye=new Go(ye,n,null,a,K),Q.push({event:ye,listeners:he}),de?ye.data=de:(de=yf(a),de!==null&&(ye.data=de)))),(de=nn?F_(n,a):j_(n,a))&&(j=wl(j,"onBeforeInput"),0<j.length&&(K=new Go("onBeforeInput","beforeinput",null,a,K),Q.push({event:K,listeners:j}),K.data=de))}Mf(Q,r)})}function ta(n,r,a){return{instance:n,listener:r,currentTarget:a}}function wl(n,r){for(var a=r+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=nt(n,a),p!=null&&c.unshift(ta(n,p,d)),p=nt(n,r),p!=null&&c.push(ta(n,p,d))),n=n.return}return c}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function jf(n,r,a,c,d){for(var p=r._reactName,v=[];a!==null&&a!==c;){var I=a,P=I.alternate,j=I.stateNode;if(P!==null&&P===c)break;I.tag===5&&j!==null&&(I=j,d?(P=nt(a,p),P!=null&&v.unshift(ta(a,P,I))):d||(P=nt(a,p),P!=null&&v.push(ta(a,P,I)))),a=a.return}v.length!==0&&n.push({event:r,listeners:v})}var Z_=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Uf(n){return(typeof n=="string"?n:""+n).replace(Z_,`
`).replace(e0,"")}function Tl(n,r,a){if(r=Uf(r),Uf(n)!==r&&a)throw Error(t(425))}function Il(){}var Cc=null,Rc=null;function kc(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,t0=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,n0=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(n){return zf.resolve(null).then(n).catch(r0)}:Pc;function r0(n){setTimeout(function(){throw n})}function xc(n,r){var a=r,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Rn(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Rn(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Bf(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return n;r--}else a==="/$"&&r++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),qn="__reactFiber$"+Os,na="__reactProps$"+Os,fr="__reactContainer$"+Os,Nc="__reactEvents$"+Os,i0="__reactListeners$"+Os,s0="__reactHandles$"+Os;function bi(n){var r=n[qn];if(r)return r;for(var a=n.parentNode;a;){if(r=a[fr]||a[qn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(n=Bf(n);n!==null;){if(a=n[qn])return a;n=Bf(n)}return r}n=a,a=n.parentNode}return null}function ra(n){return n=n[qn]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sl(n){return n[na]||null}var Dc=[],Ms=-1;function Br(n){return{current:n}}function Ke(n){0>Ms||(n.current=Dc[Ms],Dc[Ms]=null,Ms--)}function qe(n,r){Ms++,Dc[Ms]=n.current,n.current=r}var $r={},Nt=Br($r),qt=Br(!1),Oi=$r;function Fs(n,r){var a=n.type.contextTypes;if(!a)return $r;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=r[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wt(n){return n=n.childContextTypes,n!=null}function Al(){Ke(qt),Ke(Nt)}function $f(n,r,a){if(Nt.current!==$r)throw Error(t(168));qe(Nt,r),qe(qt,a)}function Hf(n,r,a){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in r))throw Error(t(108,Oe(n)||"Unknown",d));return te({},a,c)}function Cl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,Oi=Nt.current,qe(Nt,n),qe(qt,qt.current),!0}function qf(n,r,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Hf(n,r,Oi),c.__reactInternalMemoizedMergedChildContext=n,Ke(qt),Ke(Nt),qe(Nt,n)):Ke(qt),qe(qt,a)}var pr=null,Rl=!1,Vc=!1;function Wf(n){pr===null?pr=[n]:pr.push(n)}function o0(n){Rl=!0,Wf(n)}function Hr(){if(!Vc&&pr!==null){Vc=!0;var n=0,r=Pe;try{var a=pr;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}pr=null,Rl=!1}catch(d){throw pr!==null&&(pr=pr.slice(n+1)),ys(Ci,Hr),d}finally{Pe=r,Vc=!1}}return null}var js=[],Us=0,kl=null,Pl=0,dn=[],fn=0,Li=null,mr=1,gr="";function Mi(n,r){js[Us++]=Pl,js[Us++]=kl,kl=n,Pl=r}function Kf(n,r,a){dn[fn++]=mr,dn[fn++]=gr,dn[fn++]=Li,Li=n;var c=mr;n=gr;var d=32-jt(c)-1;c&=~(1<<d),a+=1;var p=32-jt(r)+d;if(30<p){var v=d-d%5;p=(c&(1<<v)-1).toString(32),c>>=v,d-=v,mr=1<<32-jt(r)+d|a<<d|c,gr=p+n}else mr=1<<p|a<<d|c,gr=n}function bc(n){n.return!==null&&(Mi(n,1),Kf(n,1,0))}function Oc(n){for(;n===kl;)kl=js[--Us],js[Us]=null,Pl=js[--Us],js[Us]=null;for(;n===Li;)Li=dn[--fn],dn[fn]=null,gr=dn[--fn],dn[fn]=null,mr=dn[--fn],dn[fn]=null}var rn=null,sn=null,Xe=!1,xn=null;function Gf(n,r){var a=yn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=n,r=n.deletions,r===null?(n.deletions=[a],n.flags|=16):r.push(a)}function Qf(n,r){switch(n.tag){case 5:var a=n.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,rn=n,sn=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,rn=n,sn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=Li!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=yn(18,null,null,0),a.stateNode=r,a.return=n,n.child=a,rn=n,sn=null,!0):!1;default:return!1}}function Lc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mc(n){if(Xe){var r=sn;if(r){var a=r;if(!Qf(n,r)){if(Lc(n))throw Error(t(418));r=zr(a.nextSibling);var c=rn;r&&Qf(n,r)?Gf(c,a):(n.flags=n.flags&-4097|2,Xe=!1,rn=n)}}else{if(Lc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Xe=!1,rn=n}}}function Xf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function xl(n){if(n!==rn)return!1;if(!Xe)return Xf(n),Xe=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!kc(n.type,n.memoizedProps)),r&&(r=sn)){if(Lc(n))throw Yf(),Error(t(418));for(;r;)Gf(n,r),r=zr(r.nextSibling)}if(Xf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(r===0){sn=zr(n.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}n=n.nextSibling}sn=null}}else sn=rn?zr(n.stateNode.nextSibling):null;return!0}function Yf(){for(var n=sn;n;)n=zr(n.nextSibling)}function zs(){sn=rn=null,Xe=!1}function Fc(n){xn===null?xn=[n]:xn.push(n)}var a0=we.ReactCurrentBatchConfig;function ia(n,r,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===p?r.ref:(r=function(v){var I=d.refs;v===null?delete I[p]:I[p]=v},r._stringRef=p,r)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Nl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Jf(n){var r=n._init;return r(n._payload)}function Zf(n){function r(M,D){if(n){var F=M.deletions;F===null?(M.deletions=[D],M.flags|=16):F.push(D)}}function a(M,D){if(!n)return null;for(;D!==null;)r(M,D),D=D.sibling;return null}function c(M,D){for(M=new Map;D!==null;)D.key!==null?M.set(D.key,D):M.set(D.index,D),D=D.sibling;return M}function d(M,D){return M=Jr(M,D),M.index=0,M.sibling=null,M}function p(M,D,F){return M.index=F,n?(F=M.alternate,F!==null?(F=F.index,F<D?(M.flags|=2,D):F):(M.flags|=2,D)):(M.flags|=1048576,D)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function I(M,D,F,Y){return D===null||D.tag!==6?(D=Ph(F,M.mode,Y),D.return=M,D):(D=d(D,F),D.return=M,D)}function P(M,D,F,Y){var oe=F.type;return oe===V?K(M,D,F.props.children,Y,F.key):D!==null&&(D.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===xt&&Jf(oe)===D.type)?(Y=d(D,F.props),Y.ref=ia(M,D,F),Y.return=M,Y):(Y=tu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ia(M,D,F),Y.return=M,Y)}function j(M,D,F,Y){return D===null||D.tag!==4||D.stateNode.containerInfo!==F.containerInfo||D.stateNode.implementation!==F.implementation?(D=xh(F,M.mode,Y),D.return=M,D):(D=d(D,F.children||[]),D.return=M,D)}function K(M,D,F,Y,oe){return D===null||D.tag!==7?(D=qi(F,M.mode,Y,oe),D.return=M,D):(D=d(D,F),D.return=M,D)}function Q(M,D,F){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Ph(""+D,M.mode,F),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ze:return F=tu(D.type,D.key,D.props,null,M.mode,F),F.ref=ia(M,null,D),F.return=M,F;case Te:return D=xh(D,M.mode,F),D.return=M,D;case xt:var Y=D._init;return Q(M,Y(D._payload),F)}if(ir(D)||le(D))return D=qi(D,M.mode,F,null),D.return=M,D;Nl(M,D)}return null}function W(M,D,F,Y){var oe=D!==null?D.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return oe!==null?null:I(M,D,""+F,Y);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:return F.key===oe?P(M,D,F,Y):null;case Te:return F.key===oe?j(M,D,F,Y):null;case xt:return oe=F._init,W(M,D,oe(F._payload),Y)}if(ir(F)||le(F))return oe!==null?null:K(M,D,F,Y,null);Nl(M,F)}return null}function ee(M,D,F,Y,oe){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(F)||null,I(D,M,""+Y,oe);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case ze:return M=M.get(Y.key===null?F:Y.key)||null,P(D,M,Y,oe);case Te:return M=M.get(Y.key===null?F:Y.key)||null,j(D,M,Y,oe);case xt:var he=Y._init;return ee(M,D,F,he(Y._payload),oe)}if(ir(Y)||le(Y))return M=M.get(F)||null,K(D,M,Y,oe,null);Nl(D,Y)}return null}function ie(M,D,F,Y){for(var oe=null,he=null,de=D,ye=D=0,Et=null;de!==null&&ye<F.length;ye++){de.index>ye?(Et=de,de=null):Et=de.sibling;var be=W(M,de,F[ye],Y);if(be===null){de===null&&(de=Et);break}n&&de&&be.alternate===null&&r(M,de),D=p(be,D,ye),he===null?oe=be:he.sibling=be,he=be,de=Et}if(ye===F.length)return a(M,de),Xe&&Mi(M,ye),oe;if(de===null){for(;ye<F.length;ye++)de=Q(M,F[ye],Y),de!==null&&(D=p(de,D,ye),he===null?oe=de:he.sibling=de,he=de);return Xe&&Mi(M,ye),oe}for(de=c(M,de);ye<F.length;ye++)Et=ee(de,M,ye,F[ye],Y),Et!==null&&(n&&Et.alternate!==null&&de.delete(Et.key===null?ye:Et.key),D=p(Et,D,ye),he===null?oe=Et:he.sibling=Et,he=Et);return n&&de.forEach(function(Zr){return r(M,Zr)}),Xe&&Mi(M,ye),oe}function se(M,D,F,Y){var oe=le(F);if(typeof oe!="function")throw Error(t(150));if(F=oe.call(F),F==null)throw Error(t(151));for(var he=oe=null,de=D,ye=D=0,Et=null,be=F.next();de!==null&&!be.done;ye++,be=F.next()){de.index>ye?(Et=de,de=null):Et=de.sibling;var Zr=W(M,de,be.value,Y);if(Zr===null){de===null&&(de=Et);break}n&&de&&Zr.alternate===null&&r(M,de),D=p(Zr,D,ye),he===null?oe=Zr:he.sibling=Zr,he=Zr,de=Et}if(be.done)return a(M,de),Xe&&Mi(M,ye),oe;if(de===null){for(;!be.done;ye++,be=F.next())be=Q(M,be.value,Y),be!==null&&(D=p(be,D,ye),he===null?oe=be:he.sibling=be,he=be);return Xe&&Mi(M,ye),oe}for(de=c(M,de);!be.done;ye++,be=F.next())be=ee(de,M,ye,be.value,Y),be!==null&&(n&&be.alternate!==null&&de.delete(be.key===null?ye:be.key),D=p(be,D,ye),he===null?oe=be:he.sibling=be,he=be);return n&&de.forEach(function(U0){return r(M,U0)}),Xe&&Mi(M,ye),oe}function rt(M,D,F,Y){if(typeof F=="object"&&F!==null&&F.type===V&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ze:e:{for(var oe=F.key,he=D;he!==null;){if(he.key===oe){if(oe=F.type,oe===V){if(he.tag===7){a(M,he.sibling),D=d(he,F.props.children),D.return=M,M=D;break e}}else if(he.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===xt&&Jf(oe)===he.type){a(M,he.sibling),D=d(he,F.props),D.ref=ia(M,he,F),D.return=M,M=D;break e}a(M,he);break}else r(M,he);he=he.sibling}F.type===V?(D=qi(F.props.children,M.mode,Y,F.key),D.return=M,M=D):(Y=tu(F.type,F.key,F.props,null,M.mode,Y),Y.ref=ia(M,D,F),Y.return=M,M=Y)}return v(M);case Te:e:{for(he=F.key;D!==null;){if(D.key===he)if(D.tag===4&&D.stateNode.containerInfo===F.containerInfo&&D.stateNode.implementation===F.implementation){a(M,D.sibling),D=d(D,F.children||[]),D.return=M,M=D;break e}else{a(M,D);break}else r(M,D);D=D.sibling}D=xh(F,M.mode,Y),D.return=M,M=D}return v(M);case xt:return he=F._init,rt(M,D,he(F._payload),Y)}if(ir(F))return ie(M,D,F,Y);if(le(F))return se(M,D,F,Y);Nl(M,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,D!==null&&D.tag===6?(a(M,D.sibling),D=d(D,F),D.return=M,M=D):(a(M,D),D=Ph(F,M.mode,Y),D.return=M,M=D),v(M)):a(M,D)}return rt}var Bs=Zf(!0),ep=Zf(!1),Dl=Br(null),Vl=null,$s=null,jc=null;function Uc(){jc=$s=Vl=null}function zc(n){var r=Dl.current;Ke(Dl),n._currentValue=r}function Bc(n,r,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===a)break;n=n.return}}function Hs(n,r){Vl=n,jc=$s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kt=!0),n.firstContext=null)}function pn(n){var r=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:r,next:null},$s===null){if(Vl===null)throw Error(t(308));$s=n,Vl.dependencies={lanes:0,firstContext:n}}else $s=$s.next=n;return r}var Fi=null;function $c(n){Fi===null?Fi=[n]:Fi.push(n)}function tp(n,r,a,c){var d=r.interleaved;return d===null?(a.next=a,$c(r)):(a.next=d.next,d.next=a),r.interleaved=a,yr(n,c)}function yr(n,r){n.lanes|=r;var a=n.alternate;for(a!==null&&(a.lanes|=r),a=n,n=n.return;n!==null;)n.childLanes|=r,a=n.alternate,a!==null&&(a.childLanes|=r),a=n,n=n.return;return a.tag===3?a.stateNode:null}var qr=!1;function Hc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function np(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Wr(n,r,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ve&2)!==0){var d=c.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),c.pending=r,yr(n,a)}return d=c.interleaved,d===null?(r.next=r,$c(c)):(r.next=d.next,d.next=r),c.interleaved=r,yr(n,a)}function bl(n,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}function rp(n,r){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=r:p=p.next=r}else d=p=r;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=r:n.next=r,a.lastBaseUpdate=r}function Ol(n,r,a,c){var d=n.updateQueue;qr=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var P=I,j=P.next;P.next=null,v===null?p=j:v.next=j,v=P;var K=n.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=j:I.next=j,K.lastBaseUpdate=P))}if(p!==null){var Q=d.baseState;v=0,K=j=P=null,I=p;do{var W=I.lane,ee=I.eventTime;if((c&W)===W){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ie=n,se=I;switch(W=r,ee=a,se.tag){case 1:if(ie=se.payload,typeof ie=="function"){Q=ie.call(ee,Q,W);break e}Q=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=se.payload,W=typeof ie=="function"?ie.call(ee,Q,W):ie,W==null)break e;Q=te({},Q,W);break e;case 2:qr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,W=d.effects,W===null?d.effects=[I]:W.push(I))}else ee={eventTime:ee,lane:W,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?(j=K=ee,P=Q):K=K.next=ee,v|=W;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;W=I,I=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);if(K===null&&(P=Q),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=K,r=d.shared.interleaved,r!==null){d=r;do v|=d.lane,d=d.next;while(d!==r)}else p===null&&(d.shared.lanes=0);zi|=v,n.lanes=v,n.memoizedState=Q}}function ip(n,r,a){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var sa={},Wn=Br(sa),oa=Br(sa),aa=Br(sa);function ji(n){if(n===sa)throw Error(t(174));return n}function qc(n,r){switch(qe(aa,r),qe(oa,n),qe(Wn,sa),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ut(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ut(r,n)}Ke(Wn),qe(Wn,r)}function qs(){Ke(Wn),Ke(oa),Ke(aa)}function sp(n){ji(aa.current);var r=ji(Wn.current),a=ut(r,n.type);r!==a&&(qe(oa,n),qe(Wn,a))}function Wc(n){oa.current===n&&(Ke(Wn),Ke(oa))}var Je=Br(0);function Ll(n){for(var r=n;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Kc=[];function Gc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Ml=we.ReactCurrentDispatcher,Qc=we.ReactCurrentBatchConfig,Ui=0,Ze=null,ht=null,vt=null,Fl=!1,la=!1,ua=0,l0=0;function Dt(){throw Error(t(321))}function Xc(n,r){if(r===null)return!1;for(var a=0;a<r.length&&a<n.length;a++)if(!Pn(n[a],r[a]))return!1;return!0}function Yc(n,r,a,c,d,p){if(Ui=p,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ml.current=n===null||n.memoizedState===null?d0:f0,n=a(c,d),la){p=0;do{if(la=!1,ua=0,25<=p)throw Error(t(301));p+=1,vt=ht=null,r.updateQueue=null,Ml.current=p0,n=a(c,d)}while(la)}if(Ml.current=zl,r=ht!==null&&ht.next!==null,Ui=0,vt=ht=Ze=null,Fl=!1,r)throw Error(t(300));return n}function Jc(){var n=ua!==0;return ua=0,n}function Kn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ze.memoizedState=vt=n:vt=vt.next=n,vt}function mn(){if(ht===null){var n=Ze.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var r=vt===null?Ze.memoizedState:vt.next;if(r!==null)vt=r,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},vt===null?Ze.memoizedState=vt=n:vt=vt.next=n}return vt}function ca(n,r){return typeof r=="function"?r(n):r}function Zc(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}c.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,c=c.baseState;var I=v=null,P=null,j=p;do{var K=j.lane;if((Ui&K)===K)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Q={lane:K,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(I=P=Q,v=c):P=P.next=Q,Ze.lanes|=K,zi|=K}j=j.next}while(j!==null&&j!==p);P===null?v=c:P.next=I,Pn(c,r.memoizedState)||(Kt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ze.lanes|=p,zi|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function eh(n){var r=mn(),a=r.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,p=r.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=n(p,v.action),v=v.next;while(v!==d);Pn(p,r.memoizedState)||(Kt=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,c]}function op(){}function ap(n,r){var a=Ze,c=mn(),d=r(),p=!Pn(c.memoizedState,d);if(p&&(c.memoizedState=d,Kt=!0),c=c.queue,th(cp.bind(null,a,c,n),[n]),c.getSnapshot!==r||p||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,ha(9,up.bind(null,a,c,d,r),void 0,null),_t===null)throw Error(t(349));(Ui&30)!==0||lp(a,r,d)}return d}function lp(n,r,a){n.flags|=16384,n={getSnapshot:r,value:a},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[n]):(a=r.stores,a===null?r.stores=[n]:a.push(n))}function up(n,r,a,c){r.value=a,r.getSnapshot=c,hp(r)&&dp(n)}function cp(n,r,a){return a(function(){hp(r)&&dp(n)})}function hp(n){var r=n.getSnapshot;n=n.value;try{var a=r();return!Pn(n,a)}catch{return!0}}function dp(n){var r=yr(n,1);r!==null&&bn(r,n,1,-1)}function fp(n){var r=Kn();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},r.queue=n,n=n.dispatch=h0.bind(null,Ze,n),[r.memoizedState,n]}function ha(n,r,a,c){return n={tag:n,create:r,destroy:a,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=n.next=n):(a=r.lastEffect,a===null?r.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,r.lastEffect=n)),n}function pp(){return mn().memoizedState}function jl(n,r,a,c){var d=Kn();Ze.flags|=n,d.memoizedState=ha(1|r,a,void 0,c===void 0?null:c)}function Ul(n,r,a,c){var d=mn();c=c===void 0?null:c;var p=void 0;if(ht!==null){var v=ht.memoizedState;if(p=v.destroy,c!==null&&Xc(c,v.deps)){d.memoizedState=ha(r,a,p,c);return}}Ze.flags|=n,d.memoizedState=ha(1|r,a,p,c)}function mp(n,r){return jl(8390656,8,n,r)}function th(n,r){return Ul(2048,8,n,r)}function gp(n,r){return Ul(4,2,n,r)}function yp(n,r){return Ul(4,4,n,r)}function vp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function _p(n,r,a){return a=a!=null?a.concat([n]):null,Ul(4,4,vp.bind(null,r,n),a)}function nh(){}function Ep(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(a.memoizedState=[n,r],n)}function wp(n,r){var a=mn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Xc(r,c[1])?c[0]:(n=n(),a.memoizedState=[n,r],n)}function Tp(n,r,a){return(Ui&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Pn(a,r)||(a=Pi(),Ze.lanes|=a,zi|=a,n.baseState=!0),r)}function u0(n,r){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),r()}finally{Pe=a,Qc.transition=c}}function Ip(){return mn().memoizedState}function c0(n,r,a){var c=Xr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Sp(n))Ap(r,a);else if(a=tp(n,r,a,c),a!==null){var d=Bt();bn(a,n,c,d),Cp(a,r,c)}}function h0(n,r,a){var c=Xr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sp(n))Ap(r,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,I=p(v,a);if(d.hasEagerState=!0,d.eagerState=I,Pn(I,v)){var P=r.interleaved;P===null?(d.next=d,$c(r)):(d.next=P.next,P.next=d),r.interleaved=d;return}}catch{}finally{}a=tp(n,r,d,c),a!==null&&(d=Bt(),bn(a,n,c,d),Cp(a,r,c))}}function Sp(n){var r=n.alternate;return n===Ze||r!==null&&r===Ze}function Ap(n,r){la=Fl=!0;var a=n.pending;a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r}function Cp(n,r,a){if((a&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,a|=c,r.lanes=a,Or(n,a)}}var zl={readContext:pn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},d0={readContext:pn,useCallback:function(n,r){return Kn().memoizedState=[n,r===void 0?null:r],n},useContext:pn,useEffect:mp,useImperativeHandle:function(n,r,a){return a=a!=null?a.concat([n]):null,jl(4194308,4,vp.bind(null,r,n),a)},useLayoutEffect:function(n,r){return jl(4194308,4,n,r)},useInsertionEffect:function(n,r){return jl(4,2,n,r)},useMemo:function(n,r){var a=Kn();return r=r===void 0?null:r,n=n(),a.memoizedState=[n,r],n},useReducer:function(n,r,a){var c=Kn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=c0.bind(null,Ze,n),[c.memoizedState,n]},useRef:function(n){var r=Kn();return n={current:n},r.memoizedState=n},useState:fp,useDebugValue:nh,useDeferredValue:function(n){return Kn().memoizedState=n},useTransition:function(){var n=fp(!1),r=n[0];return n=u0.bind(null,n[1]),Kn().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,a){var c=Ze,d=Kn();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=r(),_t===null)throw Error(t(349));(Ui&30)!==0||lp(c,r,a)}d.memoizedState=a;var p={value:a,getSnapshot:r};return d.queue=p,mp(cp.bind(null,c,p,n),[n]),c.flags|=2048,ha(9,up.bind(null,c,p,a,r),void 0,null),a},useId:function(){var n=Kn(),r=_t.identifierPrefix;if(Xe){var a=gr,c=mr;a=(c&~(1<<32-jt(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=ua++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=l0++,r=":"+r+"r"+a.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},f0={readContext:pn,useCallback:Ep,useContext:pn,useEffect:th,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:wp,useReducer:Zc,useRef:pp,useState:function(){return Zc(ca)},useDebugValue:nh,useDeferredValue:function(n){var r=mn();return Tp(r,ht.memoizedState,n)},useTransition:function(){var n=Zc(ca)[0],r=mn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ip,unstable_isNewReconciler:!1},p0={readContext:pn,useCallback:Ep,useContext:pn,useEffect:th,useImperativeHandle:_p,useInsertionEffect:gp,useLayoutEffect:yp,useMemo:wp,useReducer:eh,useRef:pp,useState:function(){return eh(ca)},useDebugValue:nh,useDeferredValue:function(n){var r=mn();return ht===null?r.memoizedState=n:Tp(r,ht.memoizedState,n)},useTransition:function(){var n=eh(ca)[0],r=mn().memoizedState;return[n,r]},useMutableSource:op,useSyncExternalStore:ap,useId:Ip,unstable_isNewReconciler:!1};function Nn(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var a in n)r[a]===void 0&&(r[a]=n[a]);return r}return r}function rh(n,r,a,c){r=n.memoizedState,a=a(c,r),a=a==null?r:te({},r,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Bl={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Xr(n),p=vr(c,d);p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(bn(r,n,d,c),bl(r,n,d))},enqueueReplaceState:function(n,r,a){n=n._reactInternals;var c=Bt(),d=Xr(n),p=vr(c,d);p.tag=1,p.payload=r,a!=null&&(p.callback=a),r=Wr(n,p,d),r!==null&&(bn(r,n,d,c),bl(r,n,d))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var a=Bt(),c=Xr(n),d=vr(a,c);d.tag=2,r!=null&&(d.callback=r),r=Wr(n,d,c),r!==null&&(bn(r,n,c,a),bl(r,n,c))}};function Rp(n,r,a,c,d,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,v):r.prototype&&r.prototype.isPureReactComponent?!Yo(a,c)||!Yo(d,p):!0}function kp(n,r,a){var c=!1,d=$r,p=r.contextType;return typeof p=="object"&&p!==null?p=pn(p):(d=Wt(r)?Oi:Nt.current,c=r.contextTypes,p=(c=c!=null)?Fs(n,d):$r),r=new r(a,p),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Bl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),r}function Pp(n,r,a,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==n&&Bl.enqueueReplaceState(r,r.state,null)}function ih(n,r,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Hc(n);var p=r.contextType;typeof p=="object"&&p!==null?d.context=pn(p):(p=Wt(r)?Oi:Nt.current,d.context=Fs(n,p)),d.state=n.memoizedState,p=r.getDerivedStateFromProps,typeof p=="function"&&(rh(n,r,p,a),d.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(r=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),r!==d.state&&Bl.enqueueReplaceState(d,d.state,null),Ol(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,r){try{var a="",c=r;do a+=Ae(c),c=c.return;while(c);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:r,stack:d,digest:null}}function sh(n,r,a){return{value:n,source:null,stack:a??null,digest:r??null}}function oh(n,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var m0=typeof WeakMap=="function"?WeakMap:Map;function xp(n,r,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ql||(Ql=!0,wh=c),oh(n,r)},a}function Np(n,r,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;a.payload=function(){return c(d)},a.callback=function(){oh(n,r)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){oh(n,r),typeof c!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),a}function Dp(n,r,a){var c=n.pingCache;if(c===null){c=n.pingCache=new m0;var d=new Set;c.set(r,d)}else d=c.get(r),d===void 0&&(d=new Set,c.set(r,d));d.has(a)||(d.add(a),n=P0.bind(null,n,r,a),r.then(n,n))}function Vp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function bp(n,r,a,c,d){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=vr(-1,1),r.tag=2,Wr(a,r,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var g0=we.ReactCurrentOwner,Kt=!1;function zt(n,r,a,c){r.child=n===null?ep(r,null,a,c):Bs(r,n.child,a,c)}function Op(n,r,a,c,d){a=a.render;var p=r.ref;return Hs(r,d),c=Yc(n,r,a,c,p,d),a=Jc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Xe&&a&&bc(r),r.flags|=1,zt(n,r,c,d),r.child)}function Lp(n,r,a,c,d){if(n===null){var p=a.type;return typeof p=="function"&&!kh(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=p,Mp(n,r,p,c,d)):(n=tu(a.type,null,c,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,(n.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(v,c)&&n.ref===r.ref)return _r(n,r,d)}return r.flags|=1,n=Jr(p,c),n.ref=r.ref,n.return=r,r.child=n}function Mp(n,r,a,c,d){if(n!==null){var p=n.memoizedProps;if(Yo(p,c)&&n.ref===r.ref)if(Kt=!1,r.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return r.lanes=n.lanes,_r(n,r,d)}return ah(n,r,a,c,d)}function Fp(n,r,a){var c=r.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qe(Gs,on),on|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qe(Gs,on),on|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:a,qe(Gs,on),on|=c}else p!==null?(c=p.baseLanes|a,r.memoizedState=null):c=a,qe(Gs,on),on|=c;return zt(n,r,d,a),r.child}function jp(n,r){var a=r.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function ah(n,r,a,c,d){var p=Wt(a)?Oi:Nt.current;return p=Fs(r,p),Hs(r,d),a=Yc(n,r,a,c,p,d),c=Jc(),n!==null&&!Kt?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~d,_r(n,r,d)):(Xe&&c&&bc(r),r.flags|=1,zt(n,r,a,d),r.child)}function Up(n,r,a,c,d){if(Wt(a)){var p=!0;Cl(r)}else p=!1;if(Hs(r,d),r.stateNode===null)Hl(n,r),kp(r,a,c),ih(r,a,c,d),c=!0;else if(n===null){var v=r.stateNode,I=r.memoizedProps;v.props=I;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=pn(j):(j=Wt(a)?Oi:Nt.current,j=Fs(r,j));var K=a.getDerivedStateFromProps,Q=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";Q||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||P!==j)&&Pp(r,v,c,j),qr=!1;var W=r.memoizedState;v.state=W,Ol(r,c,v,d),P=r.memoizedState,I!==c||W!==P||qt.current||qr?(typeof K=="function"&&(rh(r,a,K,c),P=r.memoizedState),(I=qr||Rp(r,a,I,c,W,P,j))?(Q||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=P),v.props=c,v.state=P,v.context=j,c=I):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,np(n,r),I=r.memoizedProps,j=r.type===r.elementType?I:Nn(r.type,I),v.props=j,Q=r.pendingProps,W=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=pn(P):(P=Wt(a)?Oi:Nt.current,P=Fs(r,P));var ee=a.getDerivedStateFromProps;(K=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Q||W!==P)&&Pp(r,v,c,P),qr=!1,W=r.memoizedState,v.state=W,Ol(r,c,v,d);var ie=r.memoizedState;I!==Q||W!==ie||qt.current||qr?(typeof ee=="function"&&(rh(r,a,ee,c),ie=r.memoizedState),(j=qr||Rp(r,a,j,c,W,ie,P)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ie,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ie,P)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ie),v.props=c,v.state=ie,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),c=!1)}return lh(n,r,a,c,p,d)}function lh(n,r,a,c,d,p){jp(n,r);var v=(r.flags&128)!==0;if(!c&&!v)return d&&qf(r,a,!1),_r(n,r,p);c=r.stateNode,g0.current=r;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&v?(r.child=Bs(r,n.child,null,p),r.child=Bs(r,null,I,p)):zt(n,r,I,p),r.memoizedState=c.state,d&&qf(r,a,!0),r.child}function zp(n){var r=n.stateNode;r.pendingContext?$f(n,r.pendingContext,r.pendingContext!==r.context):r.context&&$f(n,r.context,!1),qc(n,r.containerInfo)}function Bp(n,r,a,c,d){return zs(),Fc(d),r.flags|=256,zt(n,r,a,c),r.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(n){return{baseLanes:n,cachePool:null,transitions:null}}function $p(n,r,a){var c=r.pendingProps,d=Je.current,p=!1,v=(r.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),qe(Je,d&1),n===null)return Mc(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(v=c.children,n=c.fallback,p?(c=r.mode,p=r.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=nu(v,c,0,null),n=qi(n,c,a,null),p.return=r,n.return=r,p.sibling=n,r.child=p,r.child.memoizedState=ch(a),r.memoizedState=uh,n):hh(r,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return y0(n,r,v,c,I,d,a);if(p){p=c.fallback,v=r.mode,d=n.child,I=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&r.child!==d?(c=r.child,c.childLanes=0,c.pendingProps=P,r.deletions=null):(c=Jr(d,P),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=Jr(I,p):(p=qi(p,v,a,null),p.flags|=2),p.return=r,c.return=r,c.sibling=p,r.child=c,c=p,p=r.child,v=n.child.memoizedState,v=v===null?ch(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=n.childLanes&~a,r.memoizedState=uh,c}return p=n.child,n=p.sibling,c=Jr(p,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,n!==null&&(a=r.deletions,a===null?(r.deletions=[n],r.flags|=16):a.push(n)),r.child=c,r.memoizedState=null,c}function hh(n,r){return r=nu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function $l(n,r,a,c){return c!==null&&Fc(c),Bs(r,n.child,null,a),n=hh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function y0(n,r,a,c,d,p,v){if(a)return r.flags&256?(r.flags&=-257,c=sh(Error(t(422))),$l(n,r,v,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(p=c.fallback,d=r.mode,c=nu({mode:"visible",children:c.children},d,0,null),p=qi(p,d,v,null),p.flags|=2,c.return=r,p.return=r,c.sibling=p,r.child=c,(r.mode&1)!==0&&Bs(r,n.child,null,v),r.child.memoizedState=ch(v),r.memoizedState=uh,p);if((r.mode&1)===0)return $l(n,r,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(t(419)),c=sh(p,c,void 0),$l(n,r,v,c)}if(I=(v&n.childLanes)!==0,Kt||I){if(c=_t,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,yr(n,d),bn(c,n,d,-1))}return Rh(),c=sh(Error(t(421))),$l(n,r,v,c)}return d.data==="$?"?(r.flags|=128,r.child=n.child,r=x0.bind(null,n),d._reactRetry=r,null):(n=p.treeContext,sn=zr(d.nextSibling),rn=r,Xe=!0,xn=null,n!==null&&(dn[fn++]=mr,dn[fn++]=gr,dn[fn++]=Li,mr=n.id,gr=n.overflow,Li=r),r=hh(r,c.children),r.flags|=4096,r)}function Hp(n,r,a){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Bc(n.return,r,a)}function dh(n,r,a,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=a,p.tailMode=d)}function qp(n,r,a){var c=r.pendingProps,d=c.revealOrder,p=c.tail;if(zt(n,r,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hp(n,a,r);else if(n.tag===19)Hp(n,a,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qe(Je,c),(r.mode&1)===0)r.memoizedState=null;else switch(d){case"forwards":for(a=r.child,d=null;a!==null;)n=a.alternate,n!==null&&Ll(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=r.child,r.child=null):(d=a.sibling,a.sibling=null),dh(r,!1,d,a,p);break;case"backwards":for(a=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&Ll(n)===null){r.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}dh(r,!0,a,null,p);break;case"together":dh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,a){if(n!==null&&(r.dependencies=n.dependencies),zi|=r.lanes,(a&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,a=Jr(n,n.pendingProps),r.child=a,a.return=r;n.sibling!==null;)n=n.sibling,a=a.sibling=Jr(n,n.pendingProps),a.return=r;a.sibling=null}return r.child}function v0(n,r,a){switch(r.tag){case 3:zp(r),zs();break;case 5:sp(r);break;case 1:Wt(r.type)&&Cl(r);break;case 4:qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,d=r.memoizedProps.value;qe(Dl,c._currentValue),c._currentValue=d;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(qe(Je,Je.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?$p(n,r,a):(qe(Je,Je.current&1),n=_r(n,r,a),n!==null?n.sibling:null);qe(Je,Je.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,r,a);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),qe(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,Fp(n,r,a)}return _r(n,r,a)}var Wp,fh,Kp,Gp;Wp=function(n,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},fh=function(){},Kp=function(n,r,a,c){var d=n.memoizedProps;if(d!==c){n=r.stateNode,ji(Wn.current);var p=null;switch(a){case"input":d=vi(n,d),c=vi(n,c),p=[];break;case"select":d=te({},d,{value:void 0}),c=te({},c,{value:void 0}),p=[];break;case"textarea":d=Co(n,d),c=Co(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Il)}Do(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?p||(p=[]):(p=p||[]).push(j,null));for(j in c){var P=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==I&&(P!=null||I!=null))if(j==="style")if(I){for(v in I)!I.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&I[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(p||(p=[]),p.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,I=I?I.__html:void 0,P!=null&&I!==P&&(p=p||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(p=p||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&We("scroll",n),p||I===P||(p=[])):(p=p||[]).push(j,P))}a&&(p=p||[]).push("style",a);var j=p;(r.updateQueue=j)&&(r.flags|=4)}},Gp=function(n,r,a,c){a!==c&&(r.flags|=4)};function da(n,r){if(!Xe)switch(n.tailMode){case"hidden":r=n.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var r=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(r)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,r}function _0(n,r,a){var c=r.pendingProps;switch(Oc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Wt(r.type)&&Al(),Vt(r),null;case 3:return c=r.stateNode,qs(),Ke(qt),Ke(Nt),Gc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(xl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,xn!==null&&(Sh(xn),xn=null))),fh(n,r),Vt(r),null;case 5:Wc(r);var d=ji(aa.current);if(a=r.type,n!==null&&r.stateNode!=null)Kp(n,r,a,c,d),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Vt(r),null}if(n=ji(Wn.current),xl(r)){c=r.stateNode,a=r.type;var p=r.memoizedProps;switch(c[qn]=r,c[na]=p,n=(r.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Zo.length;d++)We(Zo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":os(c,p),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},We("invalid",c);break;case"textarea":ls(c,p),We("invalid",c)}Do(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Tl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Tl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":rr(c),Ga(c,p,!0);break;case"textarea":rr(c),Ro(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Il)}c=d,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[qn]=r,n[na]=c,Wp(n,r,!1,!1),r.stateNode=n;e:{switch(v=Vo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Zo.length;d++)We(Zo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":os(n,c),d=vi(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=te({},c,{value:void 0}),We("invalid",n);break;case"textarea":ls(n,c),d=Co(n,c),We("invalid",n);break;default:d=c}Do(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var P=I[p];p==="style"?xo(n,P):p==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&ko(n,P)):p==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&xr(n,P):typeof P=="number"&&xr(n,""+P):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?P!=null&&p==="onScroll"&&We("scroll",n):P!=null&&pe(n,p,P,v))}switch(a){case"input":rr(n),Ga(n,c,!1);break;case"textarea":rr(n),Ro(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Le(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?sr(n,!!c.multiple,p,!1):c.defaultValue!=null&&sr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Il)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(n&&r.stateNode!=null)Gp(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(a=ji(aa.current),ji(Wn.current),xl(r)){if(c=r.stateNode,a=r.memoizedProps,c[qn]=r,(p=c.nodeValue!==a)&&(n=rn,n!==null))switch(n.tag){case 3:Tl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Tl(c.nodeValue,a,(n.mode&1)!==0)}p&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qn]=r,r.stateNode=c}return Vt(r),null;case 13:if(Ke(Je),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Xe&&sn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Yf(),zs(),r.flags|=98560,p=!1;else if(p=xl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[qn]=r}else zs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),p=!1}else xn!==null&&(Sh(xn),xn=null),p=!0;if(!p)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Je.current&1)!==0?dt===0&&(dt=3):Rh())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return qs(),fh(n,r),n===null&&ea(r.stateNode.containerInfo),Vt(r),null;case 10:return zc(r.type._context),Vt(r),null;case 17:return Wt(r.type)&&Al(),Vt(r),null;case 19:if(Ke(Je),p=r.memoizedState,p===null)return Vt(r),null;if(c=(r.flags&128)!==0,v=p.rendering,v===null)if(c)da(p,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(v=Ll(n),v!==null){for(r.flags|=128,da(p,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)p=a,n=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,n=v.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qe(Je,Je.current&1|2),r.child}n=n.sibling}p.tail!==null&&He()>Qs&&(r.flags|=128,c=!0,da(p,!1),r.lanes=4194304)}else{if(!c)if(n=Ll(v),n!==null){if(r.flags|=128,c=!0,a=n.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),da(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return Vt(r),null}else 2*He()-p.renderingStartTime>Qs&&a!==1073741824&&(r.flags|=128,c=!0,da(p,!1),r.lanes=4194304);p.isBackwards?(v.sibling=r.child,r.child=v):(a=p.last,a!==null?a.sibling=v:r.child=v,p.last=v)}return p.tail!==null?(r=p.tail,p.rendering=r,p.tail=r.sibling,p.renderingStartTime=He(),r.sibling=null,a=Je.current,qe(Je,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Ch(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(on&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function E0(n,r){switch(Oc(r),r.tag){case 1:return Wt(r.type)&&Al(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return qs(),Ke(qt),Ke(Nt),Gc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Wc(r),null;case 13:if(Ke(Je),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));zs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Ke(Je),null;case 4:return qs(),null;case 10:return zc(r.type._context),null;case 22:case 23:return Ch(),null;case 24:return null;default:return null}}var ql=!1,bt=!1,w0=typeof WeakSet=="function"?WeakSet:Set,re=null;function Ks(n,r){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,r,c)}else a.current=null}function ph(n,r,a){try{a()}catch(c){tt(n,r,c)}}var Qp=!1;function T0(n,r){if(Cc=Fr,n=Rf(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,I=-1,P=-1,j=0,K=0,Q=n,W=null;t:for(;;){for(var ee;Q!==a||d!==0&&Q.nodeType!==3||(I=v+d),Q!==p||c!==0&&Q.nodeType!==3||(P=v+c),Q.nodeType===3&&(v+=Q.nodeValue.length),(ee=Q.firstChild)!==null;)W=Q,Q=ee;for(;;){if(Q===n)break t;if(W===a&&++j===d&&(I=v),W===p&&++K===c&&(P=v),(ee=Q.nextSibling)!==null)break;Q=W,W=Q.parentNode}Q=ee}a=I===-1||P===-1?null:{start:I,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},Fr=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var ie=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var se=ie.memoizedProps,rt=ie.memoizedState,M=r.stateNode,D=M.getSnapshotBeforeUpdate(r.elementType===r.type?se:Nn(r.type,se),rt);M.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var F=r.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Y){tt(r,r.return,Y)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return ie=Qp,Qp=!1,ie}function fa(n,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ph(r,a,p)}d=d.next}while(d!==c)}}function Wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function mh(n){var r=n.ref;if(r!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof r=="function"?r(n):r.current=n}}function Xp(n){var r=n.alternate;r!==null&&(n.alternate=null,Xp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qn],delete r[na],delete r[Nc],delete r[i0],delete r[s0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Yp(n){return n.tag===5||n.tag===3||n.tag===4}function Jp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Yp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(n,r):a.insertBefore(n,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(n,a)):(r=a,r.appendChild(n)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Il));else if(c!==4&&(n=n.child,n!==null))for(gh(n,r,a),n=n.sibling;n!==null;)gh(n,r,a),n=n.sibling}function yh(n,r,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?a.insertBefore(n,r):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yh(n,r,a),n=n.sibling;n!==null;)yh(n,r,a),n=n.sibling}var St=null,Dn=!1;function Kr(n,r,a){for(a=a.child;a!==null;)Zp(n,r,a),a=a.sibling}function Zp(n,r,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Ri,a)}catch{}switch(a.tag){case 5:bt||Ks(a,r);case 6:var c=St,d=Dn;St=null,Kr(n,r,a),St=c,Dn=d,St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):St.removeChild(a.stateNode));break;case 18:St!==null&&(Dn?(n=St,a=a.stateNode,n.nodeType===8?xc(n.parentNode,a):n.nodeType===1&&xc(n,a),Rn(n)):xc(St,a.stateNode));break;case 4:c=St,d=Dn,St=a.stateNode.containerInfo,Dn=!0,Kr(n,r,a),St=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&ph(a,r,v),d=d.next}while(d!==c)}Kr(n,r,a);break;case 1:if(!bt&&(Ks(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){tt(a,r,I)}Kr(n,r,a);break;case 21:Kr(n,r,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,Kr(n,r,a),bt=c):Kr(n,r,a);break;default:Kr(n,r,a)}}function em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w0),r.forEach(function(c){var d=N0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var p=n,v=r,I=v;e:for(;I!==null;){switch(I.tag){case 5:St=I.stateNode,Dn=!1;break e;case 3:St=I.stateNode.containerInfo,Dn=!0;break e;case 4:St=I.stateNode.containerInfo,Dn=!0;break e}I=I.return}if(St===null)throw Error(t(160));Zp(p,v,d),St=null,Dn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){tt(d,r,j)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)tm(r,n),r=r.sibling}function tm(n,r){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(r,n),Gn(n),c&4){try{fa(3,n,n.return),Wl(3,n)}catch(se){tt(n,n.return,se)}try{fa(5,n,n.return)}catch(se){tt(n,n.return,se)}}break;case 1:Vn(r,n),Gn(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Vn(r,n),Gn(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{xr(d,"")}catch(se){tt(n,n.return,se)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,v=a!==null?a.memoizedProps:p,I=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&So(d,p),Vo(I,v);var j=Vo(I,p);for(v=0;v<P.length;v+=2){var K=P[v],Q=P[v+1];K==="style"?xo(d,Q):K==="dangerouslySetInnerHTML"?ko(d,Q):K==="children"?xr(d,Q):pe(d,K,Q,j)}switch(I){case"input":Ao(d,p);break;case"textarea":us(d,p);break;case"select":var W=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?sr(d,!!p.multiple,ee,!1):W!==!!p.multiple&&(p.defaultValue!=null?sr(d,!!p.multiple,p.defaultValue,!0):sr(d,!!p.multiple,p.multiple?[]:"",!1))}d[na]=p}catch(se){tt(n,n.return,se)}}break;case 6:if(Vn(r,n),Gn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(se){tt(n,n.return,se)}}break;case 3:if(Vn(r,n),Gn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Rn(r.containerInfo)}catch(se){tt(n,n.return,se)}break;case 4:Vn(r,n),Gn(n);break;case 13:Vn(r,n),Gn(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Eh=He())),c&4&&em(n);break;case 22:if(K=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(j=bt)||K,Vn(r,n),bt=j):Vn(r,n),Gn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!K&&(n.mode&1)!==0)for(re=n,K=n.child;K!==null;){for(Q=re=K;re!==null;){switch(W=re,ee=W.child,W.tag){case 0:case 11:case 14:case 15:fa(4,W,W.return);break;case 1:Ks(W,W.return);var ie=W.stateNode;if(typeof ie.componentWillUnmount=="function"){c=W,a=W.return;try{r=c,ie.props=r.memoizedProps,ie.state=r.memoizedState,ie.componentWillUnmount()}catch(se){tt(c,a,se)}}break;case 5:Ks(W,W.return);break;case 22:if(W.memoizedState!==null){im(Q);continue}}ee!==null?(ee.return=W,re=ee):im(Q)}K=K.sibling}e:for(K=null,Q=n;;){if(Q.tag===5){if(K===null){K=Q;try{d=Q.stateNode,j?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Q.stateNode,P=Q.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,I.style.display=Po("display",v))}catch(se){tt(n,n.return,se)}}}else if(Q.tag===6){if(K===null)try{Q.stateNode.nodeValue=j?"":Q.memoizedProps}catch(se){tt(n,n.return,se)}}else if((Q.tag!==22&&Q.tag!==23||Q.memoizedState===null||Q===n)&&Q.child!==null){Q.child.return=Q,Q=Q.child;continue}if(Q===n)break e;for(;Q.sibling===null;){if(Q.return===null||Q.return===n)break e;K===Q&&(K=null),Q=Q.return}K===Q&&(K=null),Q.sibling.return=Q.return,Q=Q.sibling}}break;case 19:Vn(r,n),Gn(n),c&4&&em(n);break;case 21:break;default:Vn(r,n),Gn(n)}}function Gn(n){var r=n.flags;if(r&2){try{e:{for(var a=n.return;a!==null;){if(Yp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(xr(d,""),c.flags&=-33);var p=Jp(n);yh(n,p,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Jp(n);gh(n,I,v);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function I0(n,r,a){re=n,nm(n)}function nm(n,r,a){for(var c=(n.mode&1)!==0;re!==null;){var d=re,p=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||ql;if(!v){var I=d.alternate,P=I!==null&&I.memoizedState!==null||bt;I=ql;var j=bt;if(ql=v,(bt=P)&&!j)for(re=d;re!==null;)v=re,P=v.child,v.tag===22&&v.memoizedState!==null?sm(d):P!==null?(P.return=v,re=P):sm(d);for(;p!==null;)re=p,nm(p),p=p.sibling;re=d,ql=I,bt=j}rm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,re=p):rm(n)}}function rm(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:bt||Wl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=r.elementType===r.type?a.memoizedProps:Nn(r.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=r.updateQueue;p!==null&&ip(r,p,c);break;case 3:var v=r.updateQueue;if(v!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}ip(r,v,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var P=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var j=r.alternate;if(j!==null){var K=j.memoizedState;if(K!==null){var Q=K.dehydrated;Q!==null&&Rn(Q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||r.flags&512&&mh(r)}catch(W){tt(r,r.return,W)}}if(r===n){re=null;break}if(a=r.sibling,a!==null){a.return=r.return,re=a;break}re=r.return}}function im(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var a=r.sibling;if(a!==null){a.return=r.return,re=a;break}re=r.return}}function sm(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Wl(4,r)}catch(P){tt(r,a,P)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var d=r.return;try{c.componentDidMount()}catch(P){tt(r,d,P)}}var p=r.return;try{mh(r)}catch(P){tt(r,p,P)}break;case 5:var v=r.return;try{mh(r)}catch(P){tt(r,v,P)}}}catch(P){tt(r,r.return,P)}if(r===n){re=null;break}var I=r.sibling;if(I!==null){I.return=r.return,re=I;break}re=r.return}}var S0=Math.ceil,Kl=we.ReactCurrentDispatcher,vh=we.ReactCurrentOwner,gn=we.ReactCurrentBatchConfig,Ve=0,_t=null,ot=null,At=0,on=0,Gs=Br(0),dt=0,pa=null,zi=0,Gl=0,_h=0,ma=null,Gt=null,Eh=0,Qs=1/0,Er=null,Ql=!1,wh=null,Gr=null,Xl=!1,Qr=null,Yl=0,ga=0,Th=null,Jl=-1,Zl=0;function Bt(){return(Ve&6)!==0?He():Jl!==-1?Jl:Jl=He()}function Xr(n){return(n.mode&1)===0?1:(Ve&2)!==0&&At!==0?At&-At:a0.transition!==null?(Zl===0&&(Zl=Pi()),Zl):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Ho(n.type)),n)}function bn(n,r,a,c){if(50<ga)throw ga=0,Th=null,Error(t(185));br(n,a,c),((Ve&2)===0||n!==_t)&&(n===_t&&((Ve&2)===0&&(Gl|=a),dt===4&&Yr(n,At)),Qt(n,c),a===1&&Ve===0&&(r.mode&1)===0&&(Qs=He()+500,Rl&&Hr()))}function Qt(n,r){var a=n.callbackNode;lr(n,r);var c=ki(n,n===_t?At:0);if(c===0)a!==null&&jo(a),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(a!=null&&jo(a),r===1)n.tag===0?o0(am.bind(null,n)):Wf(am.bind(null,n)),n0(function(){(Ve&6)===0&&Hr()}),a=null;else{switch(Lr(c)){case 1:a=Ci;break;case 4:a=Nr;break;case 16:a=un;break;case 536870912:a=Za;break;default:a=un}a=mm(a,om.bind(null,n))}n.callbackPriority=r,n.callbackNode=a}}function om(n,r){if(Jl=-1,Zl=0,(Ve&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var c=ki(n,n===_t?At:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=eu(n,c);else{r=c;var d=Ve;Ve|=2;var p=um();(_t!==n||At!==r)&&(Er=null,Qs=He()+500,$i(n,r));do try{R0();break}catch(I){lm(n,I)}while(!0);Uc(),Kl.current=p,Ve=d,ot!==null?r=0:(_t=null,At=0,r=dt)}if(r!==0){if(r===2&&(d=en(n),d!==0&&(c=d,r=Ih(n,d))),r===1)throw a=pa,$i(n,0),Yr(n,c),Qt(n,He()),a;if(r===6)Yr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!A0(d)&&(r=eu(n,c),r===2&&(p=en(n),p!==0&&(c=p,r=Ih(n,p))),r===1))throw a=pa,$i(n,0),Yr(n,c),Qt(n,He()),a;switch(n.finishedWork=d,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Hi(n,Gt,Er);break;case 3:if(Yr(n,c),(c&130023424)===c&&(r=Eh+500-He(),10<r)){if(ki(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Bt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pc(Hi.bind(null,n,Gt,Er),r);break}Hi(n,Gt,Er);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,d=-1;0<c;){var v=31-jt(c);p=1<<v,v=r[v],v>d&&(d=v),c&=~p}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*S0(c/1960))-c,10<c){n.timeoutHandle=Pc(Hi.bind(null,n,Gt,Er),c);break}Hi(n,Gt,Er);break;case 5:Hi(n,Gt,Er);break;default:throw Error(t(329))}}}return Qt(n,He()),n.callbackNode===a?om.bind(null,n):null}function Ih(n,r){var a=ma;return n.current.memoizedState.isDehydrated&&($i(n,r).flags|=256),n=eu(n,r),n!==2&&(r=Gt,Gt=a,r!==null&&Sh(r)),n}function Sh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function A0(n){for(var r=n;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],p=d.getSnapshot;d=d.value;try{if(!Pn(p(),d))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~_h,r&=~Gl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var a=31-jt(r),c=1<<a;n[a]=-1,r&=~c}}function am(n){if((Ve&6)!==0)throw Error(t(327));Xs();var r=ki(n,0);if((r&1)===0)return Qt(n,He()),null;var a=eu(n,r);if(n.tag!==0&&a===2){var c=en(n);c!==0&&(r=c,a=Ih(n,c))}if(a===1)throw a=pa,$i(n,0),Yr(n,r),Qt(n,He()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Hi(n,Gt,Er),Qt(n,He()),null}function Ah(n,r){var a=Ve;Ve|=1;try{return n(r)}finally{Ve=a,Ve===0&&(Qs=He()+500,Rl&&Hr())}}function Bi(n){Qr!==null&&Qr.tag===0&&(Ve&6)===0&&Xs();var r=Ve;Ve|=1;var a=gn.transition,c=Pe;try{if(gn.transition=null,Pe=1,n)return n()}finally{Pe=c,gn.transition=a,Ve=r,(Ve&6)===0&&Hr()}}function Ch(){on=Gs.current,Ke(Gs)}function $i(n,r){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,t0(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Oc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Al();break;case 3:qs(),Ke(qt),Ke(Nt),Gc();break;case 5:Wc(c);break;case 4:qs();break;case 13:Ke(Je);break;case 19:Ke(Je);break;case 10:zc(c.type._context);break;case 22:case 23:Ch()}a=a.return}if(_t=n,ot=n=Jr(n.current,null),At=on=r,dt=0,pa=null,_h=Gl=zi=0,Gt=ma=null,Fi!==null){for(r=0;r<Fi.length;r++)if(a=Fi[r],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,c.next=v}a.pending=c}Fi=null}return n}function lm(n,r){do{var a=ot;try{if(Uc(),Ml.current=zl,Fl){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Fl=!1}if(Ui=0,vt=ht=Ze=null,la=!1,ua=0,vh.current=null,a===null||a.return===null){dt=1,pa=r,ot=null;break}e:{var p=n,v=a.return,I=a,P=r;if(r=At,I.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,K=I,Q=K.tag;if((K.mode&1)===0&&(Q===0||Q===11||Q===15)){var W=K.alternate;W?(K.updateQueue=W.updateQueue,K.memoizedState=W.memoizedState,K.lanes=W.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=Vp(v);if(ee!==null){ee.flags&=-257,bp(ee,v,I,p,r),ee.mode&1&&Dp(p,j,r),r=ee,P=j;var ie=r.updateQueue;if(ie===null){var se=new Set;se.add(P),r.updateQueue=se}else ie.add(P);break e}else{if((r&1)===0){Dp(p,j,r),Rh();break e}P=Error(t(426))}}else if(Xe&&I.mode&1){var rt=Vp(v);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),bp(rt,v,I,p,r),Fc(Ws(P,I));break e}}p=P=Ws(P,I),dt!==4&&(dt=2),ma===null?ma=[p]:ma.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,r&=-r,p.lanes|=r;var M=xp(p,P,r);rp(p,M);break e;case 1:I=P;var D=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(Gr===null||!Gr.has(F)))){p.flags|=65536,r&=-r,p.lanes|=r;var Y=Np(p,I,r);rp(p,Y);break e}}p=p.return}while(p!==null)}hm(a)}catch(oe){r=oe,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function um(){var n=Kl.current;return Kl.current=zl,n===null?zl:n}function Rh(){(dt===0||dt===3||dt===2)&&(dt=4),_t===null||(zi&268435455)===0&&(Gl&268435455)===0||Yr(_t,At)}function eu(n,r){var a=Ve;Ve|=2;var c=um();(_t!==n||At!==r)&&(Er=null,$i(n,r));do try{C0();break}catch(d){lm(n,d)}while(!0);if(Uc(),Ve=a,Kl.current=c,ot!==null)throw Error(t(261));return _t=null,At=0,dt}function C0(){for(;ot!==null;)cm(ot)}function R0(){for(;ot!==null&&!Ya();)cm(ot)}function cm(n){var r=pm(n.alternate,n,on);n.memoizedProps=n.pendingProps,r===null?hm(n):ot=r,vh.current=null}function hm(n){var r=n;do{var a=r.alternate;if(n=r.return,(r.flags&32768)===0){if(a=_0(a,r,on),a!==null){ot=a;return}}else{if(a=E0(a,r),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ot=null;return}}if(r=r.sibling,r!==null){ot=r;return}ot=r=n}while(r!==null);dt===0&&(dt=5)}function Hi(n,r,a){var c=Pe,d=gn.transition;try{gn.transition=null,Pe=1,k0(n,r,a,c)}finally{gn.transition=d,Pe=c}return null}function k0(n,r,a,c){do Xs();while(Qr!==null);if((Ve&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Be(n,p),n===_t&&(ot=_t=null,At=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Xl||(Xl=!0,mm(un,function(){return Xs(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=gn.transition,gn.transition=null;var v=Pe;Pe=1;var I=Ve;Ve|=4,vh.current=null,T0(n,a),tm(a,n),G_(Rc),Fr=!!Cc,Rc=Cc=null,n.current=a,I0(a),cc(),Ve=I,Pe=v,gn.transition=p}else n.current=a;if(Xl&&(Xl=!1,Qr=n,Yl=d),p=n.pendingLanes,p===0&&(Gr=null),el(a.stateNode),Qt(n,He()),r!==null)for(c=n.onRecoverableError,a=0;a<r.length;a++)d=r[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Ql)throw Ql=!1,n=wh,wh=null,n;return(Yl&1)!==0&&n.tag!==0&&Xs(),p=n.pendingLanes,(p&1)!==0?n===Th?ga++:(ga=0,Th=n):ga=0,Hr(),null}function Xs(){if(Qr!==null){var n=Lr(Yl),r=gn.transition,a=Pe;try{if(gn.transition=null,Pe=16>n?16:n,Qr===null)var c=!1;else{if(n=Qr,Qr=null,Yl=0,(Ve&6)!==0)throw Error(t(331));var d=Ve;for(Ve|=4,re=n.current;re!==null;){var p=re,v=p.child;if((re.flags&16)!==0){var I=p.deletions;if(I!==null){for(var P=0;P<I.length;P++){var j=I[P];for(re=j;re!==null;){var K=re;switch(K.tag){case 0:case 11:case 15:fa(8,K,p)}var Q=K.child;if(Q!==null)Q.return=K,re=Q;else for(;re!==null;){K=re;var W=K.sibling,ee=K.return;if(Xp(K),K===j){re=null;break}if(W!==null){W.return=ee,re=W;break}re=ee}}}var ie=p.alternate;if(ie!==null){var se=ie.child;if(se!==null){ie.child=null;do{var rt=se.sibling;se.sibling=null,se=rt}while(se!==null)}}re=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,re=v;else e:for(;re!==null;){if(p=re,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:fa(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,re=M;break e}re=p.return}}var D=n.current;for(re=D;re!==null;){v=re;var F=v.child;if((v.subtreeFlags&2064)!==0&&F!==null)F.return=v,re=F;else e:for(v=D;re!==null;){if(I=re,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Wl(9,I)}}catch(oe){tt(I,I.return,oe)}if(I===v){re=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,re=Y;break e}re=I.return}}if(Ve=d,Hr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Ri,n)}catch{}c=!0}return c}finally{Pe=a,gn.transition=r}}return!1}function dm(n,r,a){r=Ws(a,r),r=xp(n,r,1),n=Wr(n,r,1),r=Bt(),n!==null&&(br(n,1,r),Qt(n,r))}function tt(n,r,a){if(n.tag===3)dm(n,n,a);else for(;r!==null;){if(r.tag===3){dm(r,n,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Gr===null||!Gr.has(c))){n=Ws(a,n),n=Np(r,n,1),r=Wr(r,n,1),n=Bt(),r!==null&&(br(r,1,n),Qt(r,n));break}}r=r.return}}function P0(n,r,a){var c=n.pingCache;c!==null&&c.delete(r),r=Bt(),n.pingedLanes|=n.suspendedLanes&a,_t===n&&(At&a)===a&&(dt===4||dt===3&&(At&130023424)===At&&500>He()-Eh?$i(n,0):_h|=a),Qt(n,r)}function fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=_s,_s<<=1,(_s&130023424)===0&&(_s=4194304)));var a=Bt();n=yr(n,r),n!==null&&(br(n,r,a),Qt(n,a))}function x0(n){var r=n.memoizedState,a=0;r!==null&&(a=r.retryLane),fm(n,a)}function N0(n,r){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),fm(n,a)}var pm;pm=function(n,r,a){if(n!==null)if(n.memoizedProps!==r.pendingProps||qt.current)Kt=!0;else{if((n.lanes&a)===0&&(r.flags&128)===0)return Kt=!1,v0(n,r,a);Kt=(n.flags&131072)!==0}else Kt=!1,Xe&&(r.flags&1048576)!==0&&Kf(r,Pl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Hl(n,r),n=r.pendingProps;var d=Fs(r,Nt.current);Hs(r,a),d=Yc(null,r,c,n,d,a);var p=Jc();return r.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(p=!0,Cl(r)):p=!1,r.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Hc(r),d.updater=Bl,r.stateNode=d,d._reactInternals=r,ih(r,c,n,a),r=lh(null,r,c,!0,p,a)):(r.tag=0,Xe&&p&&bc(r),zt(null,r,d,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Hl(n,r),n=r.pendingProps,d=c._init,c=d(c._payload),r.type=c,d=r.tag=V0(c),n=Nn(c,n),d){case 0:r=ah(null,r,c,n,a);break e;case 1:r=Up(null,r,c,n,a);break e;case 11:r=Op(null,r,c,n,a);break e;case 14:r=Lp(null,r,c,Nn(c.type,n),a);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),ah(n,r,c,d,a);case 1:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Up(n,r,c,d,a);case 3:e:{if(zp(r),n===null)throw Error(t(387));c=r.pendingProps,p=r.memoizedState,d=p.element,np(n,r),Ol(r,c,null,a);var v=r.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){d=Ws(Error(t(423)),r),r=Bp(n,r,c,a,d);break e}else if(c!==d){d=Ws(Error(t(424)),r),r=Bp(n,r,c,a,d);break e}else for(sn=zr(r.stateNode.containerInfo.firstChild),rn=r,Xe=!0,xn=null,a=ep(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){r=_r(n,r,a);break e}zt(n,r,c,a)}r=r.child}return r;case 5:return sp(r),n===null&&Mc(r),c=r.type,d=r.pendingProps,p=n!==null?n.memoizedProps:null,v=d.children,kc(c,d)?v=null:p!==null&&kc(c,p)&&(r.flags|=32),jp(n,r),zt(n,r,v,a),r.child;case 6:return n===null&&Mc(r),null;case 13:return $p(n,r,a);case 4:return qc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Bs(r,null,c,a):zt(n,r,c,a),r.child;case 11:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Op(n,r,c,d,a);case 7:return zt(n,r,r.pendingProps,a),r.child;case 8:return zt(n,r,r.pendingProps.children,a),r.child;case 12:return zt(n,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,d=r.pendingProps,p=r.memoizedProps,v=d.value,qe(Dl,c._currentValue),c._currentValue=v,p!==null)if(Pn(p.value,v)){if(p.children===d.children&&!qt.current){r=_r(n,r,a);break e}}else for(p=r.child,p!==null&&(p.return=r);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var P=I.firstContext;P!==null;){if(P.context===c){if(p.tag===1){P=vr(-1,a&-a),P.tag=2;var j=p.updateQueue;if(j!==null){j=j.shared;var K=j.pending;K===null?P.next=P:(P.next=K.next,K.next=P),j.pending=P}}p.lanes|=a,P=p.alternate,P!==null&&(P.lanes|=a),Bc(p.return,a,r),I.lanes|=a;break}P=P.next}}else if(p.tag===10)v=p.type===r.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Bc(v,a,r),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===r){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}zt(n,r,d.children,a),r=r.child}return r;case 9:return d=r.type,c=r.pendingProps.children,Hs(r,a),d=pn(d),c=c(d),r.flags|=1,zt(n,r,c,a),r.child;case 14:return c=r.type,d=Nn(c,r.pendingProps),d=Nn(c.type,d),Lp(n,r,c,d,a);case 15:return Mp(n,r,r.type,r.pendingProps,a);case 17:return c=r.type,d=r.pendingProps,d=r.elementType===c?d:Nn(c,d),Hl(n,r),r.tag=1,Wt(c)?(n=!0,Cl(r)):n=!1,Hs(r,a),kp(r,c,d),ih(r,c,d,a),lh(null,r,c,!0,n,a);case 19:return qp(n,r,a);case 22:return Fp(n,r,a)}throw Error(t(156,r.tag))};function mm(n,r){return ys(n,r)}function D0(n,r,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(n,r,a,c){return new D0(n,r,a,c)}function kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function V0(n){if(typeof n=="function")return kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===b)return 11;if(n===Pt)return 14}return 2}function Jr(n,r){var a=n.alternate;return a===null?(a=yn(n.tag,r,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=r,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,r=n.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tu(n,r,a,c,d,p){var v=2;if(c=n,typeof n=="function")kh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case V:return qi(a.children,d,p,r);case S:v=8,d|=8;break;case T:return n=yn(12,a,r,d|2),n.elementType=T,n.lanes=p,n;case A:return n=yn(13,a,r,d),n.elementType=A,n.lanes=p,n;case Ge:return n=yn(19,a,r,d),n.elementType=Ge,n.lanes=p,n;case Ue:return nu(a,d,p,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:v=10;break e;case N:v=9;break e;case b:v=11;break e;case Pt:v=14;break e;case xt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=yn(v,a,r,d),r.elementType=n,r.type=c,r.lanes=p,r}function qi(n,r,a,c){return n=yn(7,n,c,r),n.lanes=a,n}function nu(n,r,a,c){return n=yn(22,n,c,r),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Ph(n,r,a){return n=yn(6,n,null,r),n.lanes=a,n}function xh(n,r,a){return r=yn(4,n.children!==null?n.children:[],n.key,r),r.lanes=a,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function b0(n,r,a,c,d){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vr(0),this.expirationTimes=Vr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Nh(n,r,a,c,d,p,v,I,P){return n=new b0(n,r,a,I,P),r===1?(r=1,p===!0&&(r|=8)):r=0,p=yn(3,null,null,r),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hc(p),n}function O0(n,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:r,implementation:a}}function gm(n){if(!n)return $r;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wt(a))return Hf(n,a,r)}return r}function ym(n,r,a,c,d,p,v,I,P){return n=Nh(a,c,!0,n,d,p,v,I,P),n.context=gm(null),a=n.current,c=Bt(),d=Xr(a),p=vr(c,d),p.callback=r??null,Wr(a,p,d),n.current.lanes=d,br(n,d,c),Qt(n,c),n}function ru(n,r,a,c){var d=r.current,p=Bt(),v=Xr(d);return a=gm(a),r.context===null?r.context=a:r.pendingContext=a,r=vr(p,v),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Wr(d,r,v),n!==null&&(bn(n,d,v,p),bl(n,d,v)),v}function iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function vm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<r?a:r}}function Dh(n,r){vm(n,r),(n=n.alternate)&&vm(n,r)}function L0(){return null}var _m=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vh(n){this._internalRoot=n}su.prototype.render=Vh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ru(n,r,null,null)},su.prototype.unmount=Vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Bi(function(){ru(null,n,null,null)}),r[fr]=null}};function su(n){this._internalRoot=n}su.prototype.unstable_scheduleHydration=function(n){if(n){var r=sl();n={blockedOn:null,target:n,priority:r};for(var a=0;a<zn.length&&r!==0&&r<zn[a].priority;a++);zn.splice(a,0,n),a===0&&ll(n)}};function bh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ou(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function M0(n,r,a,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var j=iu(v);p.call(j)}}var v=ym(r,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=v,n[fr]=v.current,ea(n.nodeType===8?n.parentNode:n),Bi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=iu(P);I.call(j)}}var P=Nh(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=P,n[fr]=P.current,ea(n.nodeType===8?n.parentNode:n),Bi(function(){ru(r,P,a,c)}),P}function au(n,r,a,c,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var I=d;d=function(){var P=iu(v);I.call(P)}}ru(r,v,n,d)}else v=M0(a,r,n,d,c);return iu(v)}rl=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var a=Dr(r.pendingLanes);a!==0&&(Or(r,a|1),Qt(r,He()),(Ve&6)===0&&(Qs=He()+500,Hr()))}break;case 13:Bi(function(){var c=yr(n,1);if(c!==null){var d=Bt();bn(c,n,1,d)}}),Dh(n,1)}},Es=function(n){if(n.tag===13){var r=yr(n,134217728);if(r!==null){var a=Bt();bn(r,n,134217728,a)}Dh(n,134217728)}},il=function(n){if(n.tag===13){var r=Xr(n),a=yr(n,r);if(a!==null){var c=Bt();bn(a,n,r,c)}Dh(n,r)}},sl=function(){return Pe},ol=function(n,r){var a=Pe;try{return Pe=n,r()}finally{Pe=a}},hs=function(n,r,a){switch(r){case"input":if(Ao(n,a),r=a.name,a.type==="radio"&&r!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==n&&c.form===n.form){var d=Sl(c);if(!d)throw Error(t(90));ss(c),Ao(c,d)}}}break;case"textarea":us(n,a);break;case"select":r=a.value,r!=null&&sr(n,!!a.multiple,r,!1)}},Ti=Ah,Oo=Bi;var F0={usingClientEntryPoint:!1,Events:[ra,Ls,Sl,jn,bo,Ah]},ya={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:we.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fo(n),n===null?null:n.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{Ri=lu.inject(j0),Zt=lu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0,Xt.createPortal=function(n,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(r))throw Error(t(200));return O0(n,r,null,a)},Xt.createRoot=function(n,r){if(!bh(n))throw Error(t(299));var a=!1,c="",d=_m;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),r=Nh(n,1,!1,null,null,a,!1,c,d),n[fr]=r.current,ea(n.nodeType===8?n.parentNode:n),new Vh(r)},Xt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fo(r),n=n===null?null:n.stateNode,n},Xt.flushSync=function(n){return Bi(n)},Xt.hydrate=function(n,r,a){if(!ou(r))throw Error(t(200));return au(null,n,r,!0,a)},Xt.hydrateRoot=function(n,r,a){if(!bh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,p="",v=_m;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),r=ym(r,null,n,1,a??null,d,!1,p,v),n[fr]=r.current,ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,d]:r.mutableSourceEagerHydrationData.push(a,d);return new su(r)},Xt.render=function(n,r,a){if(!ou(r))throw Error(t(200));return au(null,n,r,!1,a)},Xt.unmountComponentAtNode=function(n){if(!ou(n))throw Error(t(40));return n._reactRootContainer?(Bi(function(){au(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Ah,Xt.unstable_renderSubtreeIntoContainer=function(n,r,a,c){if(!ou(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return au(n,r,a,!1,c)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var km;function K0(){if(km)return Mh.exports;km=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Mh.exports=W0(),Mh.exports}var Pm;function G0(){if(Pm)return uu;Pm=1;var i=K0();return uu.createRoot=i.createRoot,uu.hydrateRoot=i.hydrateRoot,uu}var Q0=G0(),Me=Id();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Y0=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),xm=i=>{const e=Y0(i);return e.charAt(0).toUpperCase()+e.slice(1)},ay=(...i)=>i.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=Me.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:u,iconNode:h,...m},g)=>Me.createElement("svg",{ref:g,...J0,width:e,height:e,stroke:i,strokeWidth:s?Number(t)*24/Number(e):t,className:ay("lucide",o),...m},[...h.map(([_,w])=>Me.createElement(_,w)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=(i,e)=>{const t=Me.forwardRef(({className:s,...o},u)=>Me.createElement(Z0,{ref:u,iconNode:e,className:ay(`lucide-${X0(xm(i))}`,`lucide-${i}`,s),...o}));return t.displayName=xm(i),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],tE=Jt("house",eE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],rE=Jt("mail",nE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],sE=Jt("map-pin",iE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],aE=Jt("menu",oE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M5 12h14",key:"1ays0h"}]],uE=Jt("minus",lE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],hE=Jt("pen",cE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],fE=Jt("phone",dE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ly=Jt("plus",pE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],gE=Jt("save",mE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uy=Jt("settings",yE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Jh=Jt("shopping-cart",vE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],EE=Jt("star",_E);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],cy=Jt("trash-2",wE);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],IE=Jt("x",TE);/**
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
 */const SE=()=>{};var Nm={};/**
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
 */const hy=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},AE=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const o=i[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=i[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=i[t++],h=i[t++],m=i[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=i[t++],h=i[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},dy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const u=i[o],h=o+1<i.length,m=h?i[o+1]:0,g=o+2<i.length,_=g?i[o+2]:0,w=u>>2,C=(u&3)<<4|m>>4;let x=(m&15)<<2|_>>6,B=_&63;g||(B=64,h||(x=64)),s.push(t[w],t[C],t[x],t[B])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(hy(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):AE(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const u=t[i.charAt(o++)],m=o<i.length?t[i.charAt(o)]:0;++o;const _=o<i.length?t[i.charAt(o)]:64;++o;const C=o<i.length?t[i.charAt(o)]:64;if(++o,u==null||m==null||_==null||C==null)throw new CE;const x=u<<2|m>>4;if(s.push(x),_!==64){const B=m<<4&240|_>>2;if(s.push(B),C!==64){const z=_<<6&192|C;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RE=function(i){const e=hy(i);return dy.encodeByteArray(e,!0)},Cu=function(i){return RE(i).replace(/\./g,"")},fy=function(i){try{return dy.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PE=()=>kE().__FIREBASE_DEFAULTS__,xE=()=>{if(typeof process>"u"||typeof Nm>"u")return;const i=Nm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},NE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&fy(i[1]);return e&&JSON.parse(e)},Wu=()=>{try{return SE()||PE()||xE()||NE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},py=i=>{var e,t;return(t=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},DE=i=>{const e=py(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},my=()=>{var i;return(i=Wu())===null||i===void 0?void 0:i.config},gy=i=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class VE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Fa(i){return i.endsWith(".cloudworkstations.dev")}async function yy(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function bE(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=i.iat||0,u=i.sub||i.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Cu(JSON.stringify(t)),Cu(JSON.stringify(h)),""].join(".")}const Ia={};function OE(){const i={prod:[],emulator:[]};for(const e of Object.keys(Ia))Ia[e]?i.emulator.push(e):i.prod.push(e);return i}function LE(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let Dm=!1;function vy(i,e){if(typeof window>"u"||typeof document>"u"||!Fa(window.location.host)||Ia[i]===e||Ia[i]||Dm)return;Ia[i]=e;function t(x){return`__firebase__banner__${x}`}const s="__firebase__banner",u=OE().prod.length>0;function h(){const x=document.getElementById(s);x&&x.remove()}function m(x){x.style.display="flex",x.style.background="#7faaf0",x.style.position="fixed",x.style.bottom="5px",x.style.left="5px",x.style.padding=".5em",x.style.borderRadius="5px",x.style.alignItems="center"}function g(x,B){x.setAttribute("width","24"),x.setAttribute("id",B),x.setAttribute("height","24"),x.setAttribute("viewBox","0 0 24 24"),x.setAttribute("fill","none"),x.style.marginLeft="-6px"}function _(){const x=document.createElement("span");return x.style.cursor="pointer",x.style.marginLeft="16px",x.style.fontSize="24px",x.innerHTML=" &times;",x.onclick=()=>{Dm=!0,h()},x}function w(x,B){x.setAttribute("id",B),x.innerText="Learn more",x.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",x.setAttribute("target","__blank"),x.style.paddingLeft="5px",x.style.textDecoration="underline"}function C(){const x=LE(s),B=t("text"),z=document.getElementById(B)||document.createElement("span"),X=t("learnmore"),q=document.getElementById(X)||document.createElement("a"),me=t("preprendIcon"),ce=document.getElementById(me)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(x.created){const pe=x.element;m(pe),w(q,X);const we=_();g(ce,me),pe.append(ce,z,q,we),document.body.appendChild(pe)}u?(z.innerText="Preview backend disconnected.",ce.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ce.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
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
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ME(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function FE(){var i;const e=(i=Wu())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function zE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BE(){const i=Ft();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function $E(){return!FE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HE(){try{return typeof indexedDB=="object"}catch{return!1}}function qE(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}/**
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
 */const WE="FirebaseError";class kr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=WE,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ja.prototype.create)}}class ja{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?KE(u,s):"Error",m=`${this.serviceName}: ${h} (${o}).`;return new kr(o,m,s)}}function KE(i,e){return i.replace(GE,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const GE=/\{\$([^}]+)}/g;function QE(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Xi(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=i[o],h=e[o];if(Vm(u)&&Vm(h)){if(!Xi(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Vm(i){return i!==null&&typeof i=="object"}/**
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
 */function Ua(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function XE(i,e){const t=new YE(i,e);return t.subscribe.bind(t)}class YE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");JE(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Uh),o.error===void 0&&(o.error=Uh),o.complete===void 0&&(o.complete=Uh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JE(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Uh(){}/**
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
 */function _n(i){return i&&i._delegate?i._delegate:i}class Yi{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wi="[DEFAULT]";/**
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
 */class ZE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new VE;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tw(e))try{this.getOrInitializeService({instanceIdentifier:Wi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Wi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wi){return this.instances.has(e)}getOptions(e=Wi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ew(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wi){return this.component?this.component.multipleInstances?e:Wi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ew(i){return i===Wi?void 0:i}function tw(i){return i.instantiationMode==="EAGER"}/**
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
 */class nw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ZE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Re||(Re={}));const rw={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},iw=Re.INFO,sw={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},ow=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),o=sw[e];if(o)console[o](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sd{constructor(e){this.name=e,this._logLevel=iw,this._logHandler=ow,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const aw=(i,e)=>e.some(t=>i instanceof t);let bm,Om;function lw(){return bm||(bm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uw(){return Om||(Om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _y=new WeakMap,Zh=new WeakMap,Ey=new WeakMap,zh=new WeakMap,Ad=new WeakMap;function cw(i){const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("success",u),i.removeEventListener("error",h)},u=()=>{t(oi(i.result)),o()},h=()=>{s(i.error),o()};i.addEventListener("success",u),i.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&_y.set(t,i)}).catch(()=>{}),Ad.set(e,i),e}function hw(i){if(Zh.has(i))return;const e=new Promise((t,s)=>{const o=()=>{i.removeEventListener("complete",u),i.removeEventListener("error",h),i.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",u),i.addEventListener("error",h),i.addEventListener("abort",h)});Zh.set(i,e)}let ed={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Zh.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Ey.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function dw(i){ed=i(ed)}function fw(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Bh(this),e,...t);return Ey.set(s,e.sort?e.sort():[e]),oi(s)}:uw().includes(i)?function(...e){return i.apply(Bh(this),e),oi(_y.get(this))}:function(...e){return oi(i.apply(Bh(this),e))}}function pw(i){return typeof i=="function"?fw(i):(i instanceof IDBTransaction&&hw(i),aw(i,lw())?new Proxy(i,ed):i)}function oi(i){if(i instanceof IDBRequest)return cw(i);if(zh.has(i))return zh.get(i);const e=pw(i);return e!==i&&(zh.set(i,e),Ad.set(e,i)),e}const Bh=i=>Ad.get(i);function mw(i,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(i,e),m=oi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(oi(h.result),g.oldVersion,g.newVersion,oi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),m.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const gw=["get","getKey","getAll","getAllKeys","count"],yw=["put","add","delete","clear"],$h=new Map;function Lm(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=yw.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||gw.includes(t)))return;const u=async function(h,...m){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[t](...m),o&&g.done]))[0]};return $h.set(e,u),u}dw(i=>({...i,get:(e,t,s)=>Lm(e,t)||i.get(e,t,s),has:(e,t)=>!!Lm(e,t)||i.has(e,t)}));/**
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
 */class vw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_w(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function _w(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const td="@firebase/app",Mm="0.13.1";/**
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
 */const Ir=new Sd("@firebase/app"),Ew="@firebase/app-compat",ww="@firebase/analytics-compat",Tw="@firebase/analytics",Iw="@firebase/app-check-compat",Sw="@firebase/app-check",Aw="@firebase/auth",Cw="@firebase/auth-compat",Rw="@firebase/database",kw="@firebase/data-connect",Pw="@firebase/database-compat",xw="@firebase/functions",Nw="@firebase/functions-compat",Dw="@firebase/installations",Vw="@firebase/installations-compat",bw="@firebase/messaging",Ow="@firebase/messaging-compat",Lw="@firebase/performance",Mw="@firebase/performance-compat",Fw="@firebase/remote-config",jw="@firebase/remote-config-compat",Uw="@firebase/storage",zw="@firebase/storage-compat",Bw="@firebase/firestore",$w="@firebase/ai",Hw="@firebase/firestore-compat",qw="firebase",Ww="11.9.0";/**
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
 */const nd="[DEFAULT]",Kw={[td]:"fire-core",[Ew]:"fire-core-compat",[Tw]:"fire-analytics",[ww]:"fire-analytics-compat",[Sw]:"fire-app-check",[Iw]:"fire-app-check-compat",[Aw]:"fire-auth",[Cw]:"fire-auth-compat",[Rw]:"fire-rtdb",[kw]:"fire-data-connect",[Pw]:"fire-rtdb-compat",[xw]:"fire-fn",[Nw]:"fire-fn-compat",[Dw]:"fire-iid",[Vw]:"fire-iid-compat",[bw]:"fire-fcm",[Ow]:"fire-fcm-compat",[Lw]:"fire-perf",[Mw]:"fire-perf-compat",[Fw]:"fire-rc",[jw]:"fire-rc-compat",[Uw]:"fire-gcs",[zw]:"fire-gcs-compat",[Bw]:"fire-fst",[Hw]:"fire-fst-compat",[$w]:"fire-vertex","fire-js":"fire-js",[qw]:"fire-js-all"};/**
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
 */const Ru=new Map,Gw=new Map,rd=new Map;function Fm(i,e){try{i.container.addComponent(e)}catch(t){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function ao(i){const e=i.name;if(rd.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;rd.set(e,i);for(const t of Ru.values())Fm(t,i);for(const t of Gw.values())Fm(t,i);return!0}function Cd(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Xn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const Qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new ja("app","Firebase",Qw);/**
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
 */class Xw{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const vo=Ww;function wy(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:nd,automaticDataCollectionEnabled:!0},e),o=s.name;if(typeof o!="string"||!o)throw ai.create("bad-app-name",{appName:String(o)});if(t||(t=my()),!t)throw ai.create("no-options");const u=Ru.get(o);if(u){if(Xi(t,u.options)&&Xi(s,u.config))return u;throw ai.create("duplicate-app",{appName:o})}const h=new nw(o);for(const g of rd.values())h.addComponent(g);const m=new Xw(t,s,h);return Ru.set(o,m),m}function Ty(i=nd){const e=Ru.get(i);if(!e&&i===nd&&my())return wy();if(!e)throw ai.create("no-app",{appName:i});return e}function li(i,e,t){var s;let o=(s=Kw[i])!==null&&s!==void 0?s:i;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${o}" with version "${e}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(m.join(" "));return}ao(new Yi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Yw="firebase-heartbeat-database",Jw=1,xa="firebase-heartbeat-store";let Hh=null;function Iy(){return Hh||(Hh=mw(Yw,Jw,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(xa)}catch(t){console.warn(t)}}}}).catch(i=>{throw ai.create("idb-open",{originalErrorMessage:i.message})})),Hh}async function Zw(i){try{const t=(await Iy()).transaction(xa),s=await t.objectStore(xa).get(Sy(i));return await t.done,s}catch(e){if(e instanceof kr)Ir.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(t.message)}}}async function jm(i,e){try{const s=(await Iy()).transaction(xa,"readwrite");await s.objectStore(xa).put(e,Sy(i)),await s.done}catch(t){if(t instanceof kr)Ir.warn(t.message);else{const s=ai.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ir.warn(s.message)}}}function Sy(i){return`${i.name}!${i.options.appId}`}/**
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
 */const eT=1024,tT=30;class nT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iT(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Um();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>tT){const h=sT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ir.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Um(),{heartbeatsToSend:s,unsentEntries:o}=rT(this._heartbeatsCache.heartbeats),u=Cu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Ir.warn(t),""}}}function Um(){return new Date().toISOString().substring(0,10)}function rT(i,e=eT){const t=[];let s=i.slice();for(const o of i){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),zm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),zm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class iT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HE()?qE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return jm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function zm(i){return Cu(JSON.stringify({version:2,heartbeats:i})).length}function sT(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function oT(i){ao(new Yi("platform-logger",e=>new vw(e),"PRIVATE")),ao(new Yi("heartbeat",e=>new nT(e),"PRIVATE")),li(td,Mm,i),li(td,Mm,"esm2017"),li("fire-js","")}oT("");var Bm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ui,Ay;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(V,S){function T(){}T.prototype=S.prototype,V.D=S.prototype,V.prototype=new T,V.prototype.constructor=V,V.C=function(R,N,b){for(var A=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)A[Ge-2]=arguments[Ge];return S.prototype[N].apply(R,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(V,S,T){T||(T=0);var R=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)R[N]=S.charCodeAt(T++)|S.charCodeAt(T++)<<8|S.charCodeAt(T++)<<16|S.charCodeAt(T++)<<24;else for(N=0;16>N;++N)R[N]=S[T++]|S[T++]<<8|S[T++]<<16|S[T++]<<24;S=V.g[0],T=V.g[1],N=V.g[2];var b=V.g[3],A=S+(b^T&(N^b))+R[0]+3614090360&4294967295;S=T+(A<<7&4294967295|A>>>25),A=b+(N^S&(T^N))+R[1]+3905402710&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(T^b&(S^T))+R[2]+606105819&4294967295,N=b+(A<<17&4294967295|A>>>15),A=T+(S^N&(b^S))+R[3]+3250441966&4294967295,T=N+(A<<22&4294967295|A>>>10),A=S+(b^T&(N^b))+R[4]+4118548399&4294967295,S=T+(A<<7&4294967295|A>>>25),A=b+(N^S&(T^N))+R[5]+1200080426&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(T^b&(S^T))+R[6]+2821735955&4294967295,N=b+(A<<17&4294967295|A>>>15),A=T+(S^N&(b^S))+R[7]+4249261313&4294967295,T=N+(A<<22&4294967295|A>>>10),A=S+(b^T&(N^b))+R[8]+1770035416&4294967295,S=T+(A<<7&4294967295|A>>>25),A=b+(N^S&(T^N))+R[9]+2336552879&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(T^b&(S^T))+R[10]+4294925233&4294967295,N=b+(A<<17&4294967295|A>>>15),A=T+(S^N&(b^S))+R[11]+2304563134&4294967295,T=N+(A<<22&4294967295|A>>>10),A=S+(b^T&(N^b))+R[12]+1804603682&4294967295,S=T+(A<<7&4294967295|A>>>25),A=b+(N^S&(T^N))+R[13]+4254626195&4294967295,b=S+(A<<12&4294967295|A>>>20),A=N+(T^b&(S^T))+R[14]+2792965006&4294967295,N=b+(A<<17&4294967295|A>>>15),A=T+(S^N&(b^S))+R[15]+1236535329&4294967295,T=N+(A<<22&4294967295|A>>>10),A=S+(N^b&(T^N))+R[1]+4129170786&4294967295,S=T+(A<<5&4294967295|A>>>27),A=b+(T^N&(S^T))+R[6]+3225465664&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^T&(b^S))+R[11]+643717713&4294967295,N=b+(A<<14&4294967295|A>>>18),A=T+(b^S&(N^b))+R[0]+3921069994&4294967295,T=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(T^N))+R[5]+3593408605&4294967295,S=T+(A<<5&4294967295|A>>>27),A=b+(T^N&(S^T))+R[10]+38016083&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^T&(b^S))+R[15]+3634488961&4294967295,N=b+(A<<14&4294967295|A>>>18),A=T+(b^S&(N^b))+R[4]+3889429448&4294967295,T=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(T^N))+R[9]+568446438&4294967295,S=T+(A<<5&4294967295|A>>>27),A=b+(T^N&(S^T))+R[14]+3275163606&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^T&(b^S))+R[3]+4107603335&4294967295,N=b+(A<<14&4294967295|A>>>18),A=T+(b^S&(N^b))+R[8]+1163531501&4294967295,T=N+(A<<20&4294967295|A>>>12),A=S+(N^b&(T^N))+R[13]+2850285829&4294967295,S=T+(A<<5&4294967295|A>>>27),A=b+(T^N&(S^T))+R[2]+4243563512&4294967295,b=S+(A<<9&4294967295|A>>>23),A=N+(S^T&(b^S))+R[7]+1735328473&4294967295,N=b+(A<<14&4294967295|A>>>18),A=T+(b^S&(N^b))+R[12]+2368359562&4294967295,T=N+(A<<20&4294967295|A>>>12),A=S+(T^N^b)+R[5]+4294588738&4294967295,S=T+(A<<4&4294967295|A>>>28),A=b+(S^T^N)+R[8]+2272392833&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^T)+R[11]+1839030562&4294967295,N=b+(A<<16&4294967295|A>>>16),A=T+(N^b^S)+R[14]+4259657740&4294967295,T=N+(A<<23&4294967295|A>>>9),A=S+(T^N^b)+R[1]+2763975236&4294967295,S=T+(A<<4&4294967295|A>>>28),A=b+(S^T^N)+R[4]+1272893353&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^T)+R[7]+4139469664&4294967295,N=b+(A<<16&4294967295|A>>>16),A=T+(N^b^S)+R[10]+3200236656&4294967295,T=N+(A<<23&4294967295|A>>>9),A=S+(T^N^b)+R[13]+681279174&4294967295,S=T+(A<<4&4294967295|A>>>28),A=b+(S^T^N)+R[0]+3936430074&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^T)+R[3]+3572445317&4294967295,N=b+(A<<16&4294967295|A>>>16),A=T+(N^b^S)+R[6]+76029189&4294967295,T=N+(A<<23&4294967295|A>>>9),A=S+(T^N^b)+R[9]+3654602809&4294967295,S=T+(A<<4&4294967295|A>>>28),A=b+(S^T^N)+R[12]+3873151461&4294967295,b=S+(A<<11&4294967295|A>>>21),A=N+(b^S^T)+R[15]+530742520&4294967295,N=b+(A<<16&4294967295|A>>>16),A=T+(N^b^S)+R[2]+3299628645&4294967295,T=N+(A<<23&4294967295|A>>>9),A=S+(N^(T|~b))+R[0]+4096336452&4294967295,S=T+(A<<6&4294967295|A>>>26),A=b+(T^(S|~N))+R[7]+1126891415&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~T))+R[14]+2878612391&4294967295,N=b+(A<<15&4294967295|A>>>17),A=T+(b^(N|~S))+R[5]+4237533241&4294967295,T=N+(A<<21&4294967295|A>>>11),A=S+(N^(T|~b))+R[12]+1700485571&4294967295,S=T+(A<<6&4294967295|A>>>26),A=b+(T^(S|~N))+R[3]+2399980690&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~T))+R[10]+4293915773&4294967295,N=b+(A<<15&4294967295|A>>>17),A=T+(b^(N|~S))+R[1]+2240044497&4294967295,T=N+(A<<21&4294967295|A>>>11),A=S+(N^(T|~b))+R[8]+1873313359&4294967295,S=T+(A<<6&4294967295|A>>>26),A=b+(T^(S|~N))+R[15]+4264355552&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~T))+R[6]+2734768916&4294967295,N=b+(A<<15&4294967295|A>>>17),A=T+(b^(N|~S))+R[13]+1309151649&4294967295,T=N+(A<<21&4294967295|A>>>11),A=S+(N^(T|~b))+R[4]+4149444226&4294967295,S=T+(A<<6&4294967295|A>>>26),A=b+(T^(S|~N))+R[11]+3174756917&4294967295,b=S+(A<<10&4294967295|A>>>22),A=N+(S^(b|~T))+R[2]+718787259&4294967295,N=b+(A<<15&4294967295|A>>>17),A=T+(b^(N|~S))+R[9]+3951481745&4294967295,V.g[0]=V.g[0]+S&4294967295,V.g[1]=V.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,V.g[2]=V.g[2]+N&4294967295,V.g[3]=V.g[3]+b&4294967295}s.prototype.u=function(V,S){S===void 0&&(S=V.length);for(var T=S-this.blockSize,R=this.B,N=this.h,b=0;b<S;){if(N==0)for(;b<=T;)o(this,V,b),b+=this.blockSize;if(typeof V=="string"){for(;b<S;)if(R[N++]=V.charCodeAt(b++),N==this.blockSize){o(this,R),N=0;break}}else for(;b<S;)if(R[N++]=V[b++],N==this.blockSize){o(this,R),N=0;break}}this.h=N,this.o+=S},s.prototype.v=function(){var V=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);V[0]=128;for(var S=1;S<V.length-8;++S)V[S]=0;var T=8*this.o;for(S=V.length-8;S<V.length;++S)V[S]=T&255,T/=256;for(this.u(V),V=Array(16),S=T=0;4>S;++S)for(var R=0;32>R;R+=8)V[T++]=this.g[S]>>>R&255;return V};function u(V,S){var T=m;return Object.prototype.hasOwnProperty.call(T,V)?T[V]:T[V]=S(V)}function h(V,S){this.h=S;for(var T=[],R=!0,N=V.length-1;0<=N;N--){var b=V[N]|0;R&&b==S||(T[N]=b,R=!1)}this.g=T}var m={};function g(V){return-128<=V&&128>V?u(V,function(S){return new h([S|0],0>S?-1:0)}):new h([V|0],0>V?-1:0)}function _(V){if(isNaN(V)||!isFinite(V))return C;if(0>V)return q(_(-V));for(var S=[],T=1,R=0;V>=T;R++)S[R]=V/T|0,T*=4294967296;return new h(S,0)}function w(V,S){if(V.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(V.charAt(0)=="-")return q(w(V.substring(1),S));if(0<=V.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=_(Math.pow(S,8)),R=C,N=0;N<V.length;N+=8){var b=Math.min(8,V.length-N),A=parseInt(V.substring(N,N+b),S);8>b?(b=_(Math.pow(S,b)),R=R.j(b).add(_(A))):(R=R.j(T),R=R.add(_(A)))}return R}var C=g(0),x=g(1),B=g(16777216);i=h.prototype,i.m=function(){if(X(this))return-q(this).m();for(var V=0,S=1,T=0;T<this.g.length;T++){var R=this.i(T);V+=(0<=R?R:4294967296+R)*S,S*=4294967296}return V},i.toString=function(V){if(V=V||10,2>V||36<V)throw Error("radix out of range: "+V);if(z(this))return"0";if(X(this))return"-"+q(this).toString(V);for(var S=_(Math.pow(V,6)),T=this,R="";;){var N=we(T,S).g;T=me(T,N.j(S));var b=((0<T.g.length?T.g[0]:T.h)>>>0).toString(V);if(T=N,z(T))return b+R;for(;6>b.length;)b="0"+b;R=b+R}},i.i=function(V){return 0>V?0:V<this.g.length?this.g[V]:this.h};function z(V){if(V.h!=0)return!1;for(var S=0;S<V.g.length;S++)if(V.g[S]!=0)return!1;return!0}function X(V){return V.h==-1}i.l=function(V){return V=me(this,V),X(V)?-1:z(V)?0:1};function q(V){for(var S=V.g.length,T=[],R=0;R<S;R++)T[R]=~V.g[R];return new h(T,~V.h).add(x)}i.abs=function(){return X(this)?q(this):this},i.add=function(V){for(var S=Math.max(this.g.length,V.g.length),T=[],R=0,N=0;N<=S;N++){var b=R+(this.i(N)&65535)+(V.i(N)&65535),A=(b>>>16)+(this.i(N)>>>16)+(V.i(N)>>>16);R=A>>>16,b&=65535,A&=65535,T[N]=A<<16|b}return new h(T,T[T.length-1]&-2147483648?-1:0)};function me(V,S){return V.add(q(S))}i.j=function(V){if(z(this)||z(V))return C;if(X(this))return X(V)?q(this).j(q(V)):q(q(this).j(V));if(X(V))return q(this.j(q(V)));if(0>this.l(B)&&0>V.l(B))return _(this.m()*V.m());for(var S=this.g.length+V.g.length,T=[],R=0;R<2*S;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<V.g.length;N++){var b=this.i(R)>>>16,A=this.i(R)&65535,Ge=V.i(N)>>>16,Pt=V.i(N)&65535;T[2*R+2*N]+=A*Pt,ce(T,2*R+2*N),T[2*R+2*N+1]+=b*Pt,ce(T,2*R+2*N+1),T[2*R+2*N+1]+=A*Ge,ce(T,2*R+2*N+1),T[2*R+2*N+2]+=b*Ge,ce(T,2*R+2*N+2)}for(R=0;R<S;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=S;R<2*S;R++)T[R]=0;return new h(T,0)};function ce(V,S){for(;(V[S]&65535)!=V[S];)V[S+1]+=V[S]>>>16,V[S]&=65535,S++}function pe(V,S){this.g=V,this.h=S}function we(V,S){if(z(S))throw Error("division by zero");if(z(V))return new pe(C,C);if(X(V))return S=we(q(V),S),new pe(q(S.g),q(S.h));if(X(S))return S=we(V,q(S)),new pe(q(S.g),S.h);if(30<V.g.length){if(X(V)||X(S))throw Error("slowDivide_ only works with positive integers.");for(var T=x,R=S;0>=R.l(V);)T=ze(T),R=ze(R);var N=Te(T,1),b=Te(R,1);for(R=Te(R,2),T=Te(T,2);!z(R);){var A=b.add(R);0>=A.l(V)&&(N=N.add(T),b=A),R=Te(R,1),T=Te(T,1)}return S=me(V,N.j(S)),new pe(N,S)}for(N=C;0<=V.l(S);){for(T=Math.max(1,Math.floor(V.m()/S.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),b=_(T),A=b.j(S);X(A)||0<A.l(V);)T-=R,b=_(T),A=b.j(S);z(b)&&(b=x),N=N.add(b),V=me(V,A)}return new pe(N,V)}i.A=function(V){return we(this,V).h},i.and=function(V){for(var S=Math.max(this.g.length,V.g.length),T=[],R=0;R<S;R++)T[R]=this.i(R)&V.i(R);return new h(T,this.h&V.h)},i.or=function(V){for(var S=Math.max(this.g.length,V.g.length),T=[],R=0;R<S;R++)T[R]=this.i(R)|V.i(R);return new h(T,this.h|V.h)},i.xor=function(V){for(var S=Math.max(this.g.length,V.g.length),T=[],R=0;R<S;R++)T[R]=this.i(R)^V.i(R);return new h(T,this.h^V.h)};function ze(V){for(var S=V.g.length+1,T=[],R=0;R<S;R++)T[R]=V.i(R)<<1|V.i(R-1)>>>31;return new h(T,V.h)}function Te(V,S){var T=S>>5;S%=32;for(var R=V.g.length-T,N=[],b=0;b<R;b++)N[b]=0<S?V.i(b+T)>>>S|V.i(b+T+1)<<32-S:V.i(b+T);return new h(N,V.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ay=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=w,ui=h}).apply(typeof Bm<"u"?Bm:typeof self<"u"?self:typeof window<"u"?window:{});var cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cy,_a,Ry,gu,id,ky,Py,xy;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof cu=="object"&&cu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var E=0;E<l.length-1;E++){var L=l[E];if(!(L in y))break e;y=y[L]}l=l[l.length-1],E=y[l],f=f(E),f!=E&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,E=!1,L={next:function(){if(!E&&y<l.length){var U=y++;return{value:f(U,l[U]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function w(l,f,y){return l.call.apply(l.bind,arguments)}function C(l,f,y){if(!l)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),l.apply(f,L)}}return function(){return l.apply(f,arguments)}}function x(l,f,y){return x=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:C,x.apply(null,arguments)}function B(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var E=y.slice();return E.push.apply(E,arguments),l.apply(this,E)}}function z(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(E,L,U){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return f.prototype[L].apply(E,J)}}function X(l){const f=l.length;if(0<f){const y=Array(f);for(let E=0;E<f;E++)y[E]=l[E];return y}return[]}function q(l,f){for(let y=1;y<arguments.length;y++){const E=arguments[y];if(g(E)){const L=l.length||0,U=E.length||0;l.length=L+U;for(let J=0;J<U;J++)l[L+J]=E[J]}else l.push(E)}}class me{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function ce(l){return/^[\s\xa0]*$/.test(l)}function pe(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function we(l){return we[" "](l),l}we[" "]=function(){};var ze=pe().indexOf("Gecko")!=-1&&!(pe().toLowerCase().indexOf("webkit")!=-1&&pe().indexOf("Edge")==-1)&&!(pe().indexOf("Trident")!=-1||pe().indexOf("MSIE")!=-1)&&pe().indexOf("Edge")==-1;function Te(l,f,y){for(const E in l)f.call(y,l[E],E,l)}function V(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function S(l){const f={};for(const y in l)f[y]=l[y];return f}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(l,f){let y,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(y in E)l[y]=E[y];for(let U=0;U<T.length;U++)y=T[U],Object.prototype.hasOwnProperty.call(E,y)&&(l[y]=E[y])}}function N(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function b(l){m.setTimeout(()=>{throw l},0)}function A(){var l=le;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class Ge{constructor(){this.h=this.g=null}add(f,y){const E=Pt.get();E.set(f,y),this.h?this.h.next=E:this.g=E,this.h=E}}var Pt=new me(()=>new xt,l=>l.reset());class xt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Z=!1,le=new Ge,te=()=>{const l=m.Promise.resolve(void 0);Ue=()=>{l.then(O)}};var O=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){b(y)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Z=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ie=(function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};m.addEventListener("test",y,f),m.removeEventListener("test",y,f)}catch{}return l})();function Ae(l,f){if(ae.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,E=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(ze){e:{try{we(f.nodeName);var L=!0;break e}catch{}L=!1}L||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ae.aa.h.call(this)}}z(Ae,ae);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function $e(l,f,y,E,L){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!E,this.ha=L,this.key=++Le,this.da=this.fa=!1}function gt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function rr(l){this.src=l,this.g={},this.h=0}rr.prototype.add=function(l,f,y,E,L){var U=l.toString();l=this.g[U],l||(l=this.g[U]=[],this.h++);var J=Pr(l,f,E,L);return-1<J?(f=l[J],y||(f.fa=!1)):(f=new $e(f,this.src,U,!!E,L),f.fa=y,l.push(f)),f};function ss(l,f){var y=f.type;if(y in l.g){var E=l.g[y],L=Array.prototype.indexOf.call(E,f,void 0),U;(U=0<=L)&&Array.prototype.splice.call(E,L,1),U&&(gt(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Pr(l,f,y,E){for(var L=0;L<l.length;++L){var U=l[L];if(!U.da&&U.listener==f&&U.capture==!!y&&U.ha==E)return L}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),os={};function So(l,f,y,E,L){if(Array.isArray(f)){for(var U=0;U<f.length;U++)So(l,f[U],y,E,L);return null}return y=Ro(y),l&&l[Oe]?l.K(f,y,_(E)?!!E.capture:!1,L):Ao(l,f,y,!1,E,L)}function Ao(l,f,y,E,L,U){if(!f)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,je=ls(l);if(je||(l[vi]=je=new rr(l)),y=je.add(f,y,E,J,U),y.proxy)return y;if(E=Ga(),y.proxy=E,E.src=l,E.listener=y,l.addEventListener)Ie||(L=J),L===void 0&&(L=!1),l.addEventListener(f.toString(),E,L);else if(l.attachEvent)l.attachEvent(sr(f.toString()),E);else if(l.addListener&&l.removeListener)l.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ga(){function l(y){return f.call(l.src,l.listener,y)}const f=Co;return l}function as(l,f,y,E,L){if(Array.isArray(f))for(var U=0;U<f.length;U++)as(l,f[U],y,E,L);else E=_(E)?!!E.capture:!!E,y=Ro(y),l&&l[Oe]?(l=l.i,f=String(f).toString(),f in l.g&&(U=l.g[f],y=Pr(U,y,E,L),-1<y&&(gt(U[y]),Array.prototype.splice.call(U,y,1),U.length==0&&(delete l.g[f],l.h--)))):l&&(l=ls(l))&&(f=l.g[f.toString()],l=-1,f&&(l=Pr(f,y,E,L)),(y=-1<l?f[l]:null)&&ir(y))}function ir(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Oe])ss(f.i,l);else{var y=l.type,E=l.proxy;f.removeEventListener?f.removeEventListener(y,E,l.capture):f.detachEvent?f.detachEvent(sr(y),E):f.addListener&&f.removeListener&&f.removeListener(E),(y=ls(f))?(ss(y,l),y.h==0&&(y.src=null,f[vi]=null)):gt(l)}}}function sr(l){return l in os?os[l]:os[l]="on"+l}function Co(l,f){if(l.da)l=!0;else{f=new Ae(f,this);var y=l.listener,E=l.ha||l.src;l.fa&&ir(l),l=y.call(E,f)}return l}function ls(l){return l=l[vi],l instanceof rr?l:null}var us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(l){return typeof l=="function"?l:(l[us]||(l[us]=function(f){return l.handleEvent(f)}),l[us])}function lt(){H.call(this),this.i=new rr(this),this.M=this,this.F=null}z(lt,H),lt.prototype[Oe]=!0,lt.prototype.removeEventListener=function(l,f,y,E){as(this,l,f,y,E)};function ut(l,f){var y,E=l.F;if(E)for(y=[];E;E=E.F)y.push(E);if(l=l.M,E=f.type||f,typeof f=="string")f=new ae(f,l);else if(f instanceof ae)f.target=f.target||l;else{var L=f;f=new ae(E,l),R(f,L)}if(L=!0,y)for(var U=y.length-1;0<=U;U--){var J=f.g=y[U];L=or(J,E,!0,f)&&L}if(J=f.g=l,L=or(J,E,!0,f)&&L,L=or(J,E,!1,f)&&L,y)for(U=0;U<y.length;U++)J=f.g=y[U],L=or(J,E,!1,f)&&L}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],E=0;E<y.length;E++)gt(y[E]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,E){return this.i.add(String(l),f,!1,y,E)},lt.prototype.L=function(l,f,y,E){return this.i.add(String(l),f,!0,y,E)};function or(l,f,y,E){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var L=!0,U=0;U<f.length;++U){var J=f[U];if(J&&!J.da&&J.capture==y){var je=J.listener,ct=J.ha||J.src;J.fa&&ss(l.i,J),L=je.call(ct,E)!==!1&&L}}return L&&!E.defaultPrevented}function ko(l,f,y){if(typeof l=="function")y&&(l=x(l,y));else if(l&&typeof l.handleEvent=="function")l=x(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(l,f||0)}function xr(l){l.g=ko(()=>{l.g=null,l.i&&(l.i=!1,xr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class _i extends H{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:xr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ei(l){H.call(this),this.h=l,this.g={}}z(Ei,H);var Po=[];function xo(l){Te(l.g,function(f,y){this.g.hasOwnProperty(y)&&ir(f)},l),l.g={}}Ei.prototype.N=function(){Ei.aa.N.call(this),xo(this)},Ei.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var No=m.JSON.stringify,Do=m.JSON.parse,Vo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function wi(){}wi.prototype.h=null;function cs(l){return l.h||(l.h=l.i())}function hs(){}var ln={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fn(){ae.call(this,"d")}z(Fn,ae);function ds(){ae.call(this,"c")}z(ds,ae);var jn={},bo=null;function Ti(){return bo=bo||new lt}jn.La="serverreachability";function Oo(l){ae.call(this,jn.La,l)}z(Oo,ae);function ar(l){const f=Ti();ut(f,new Oo(f))}jn.STAT_EVENT="statevent";function Lo(l,f){ae.call(this,jn.STAT_EVENT,l),this.stat=f}z(Lo,ae);function nt(l){const f=Ti();ut(f,new Lo(f,l))}jn.Ma="timingevent";function fs(l,f){ae.call(this,jn.Ma,l),this.size=f}z(fs,ae);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},f)}function Ii(){this.g=!0}Ii.prototype.xa=function(){this.g=!1};function Si(l,f,y,E,L,U){l.info(function(){if(l.g)if(U)for(var J="",je=U.split("&"),ct=0;ct<je.length;ct++){var Ne=je[ct].split("=");if(1<Ne.length){var yt=Ne[0];Ne=Ne[1];var st=yt.split("_");J=2<=st.length&&st[1]=="type"?J+(yt+"="+Ne+"&"):J+(yt+"=redacted&")}}else J=null;else J=U;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+y+`
`+J})}function ps(l,f,y,E,L,U,J){l.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+y+`
`+U+" "+J})}function wn(l,f,y,E){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+uc(l,y)+(E?" "+E:"")})}function Mo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ii.prototype.info=function(){};function uc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var E=y[l];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var U=L[0];if(U!="noop"&&U!="stop"&&U!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return No(y)}catch{return f}}var ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Qa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ai(){}z(Ai,wi),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},Tn=new Ai;function In(l,f,y,E){this.j=l,this.i=f,this.l=y,this.R=E||1,this.U=new Ei(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var Fo={},gs={};function ys(l,f,y){l.L=1,l.v=Or(en(f)),l.m=y,l.P=!0,jo(l,null)}function jo(l,f){l.F=Date.now(),He(l),l.A=en(l.v);var y=l.A,E=l.R;Array.isArray(E)||(E=[String(E)]),Mr(y.i,"t",E),l.C=0,y=l.j.J,l.h=new Xa,l.g=pl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new _i(x(l.Y,l,l.g),l.O)),f=l.U,y=l.g,E=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Po[0]=L.toString()),L=Po);for(var U=0;U<L.length;U++){var J=So(y,L[U],E||f.handleEvent,!1,f.h||f);if(!J)break;f.g[J.key]=J}f=l.H?S(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),ar(),Si(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const f=this.M;f&&Ht(l)==3?f.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const st=Ht(this.g);var f=this.g.Ba();const hn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||st!=4||f==7||(f==8||0>=hn?ar(3):ar(2)),Ci(this);var y=this.g.Z();this.X=y;t:if(Ya(this)){var E=qo(this.g);l="";var L=E.length,U=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Nr(this);var J="";break t}this.h.i=new m.TextDecoder}for(f=0;f<L;f++)this.h.h=!0,l+=this.h.i.decode(E[f],{stream:!(U&&f==L-1)});E.length=0,this.h.g+=l,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,ps(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ct=this.g;if((je=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(je)){var Ne=je;break t}}Ne=null}if(y=Ne)wn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Uo(this,y);else{this.o=!1,this.s=3,nt(12),un(this),Nr(this);break e}}if(this.P){y=!0;let nn;for(;!this.J&&this.C<J.length;)if(nn=cc(this,J),nn==gs){st==4&&(this.s=4,nt(14),y=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Fo){this.s=4,nt(15),wn(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else wn(this.i,this.l,nn,null),Uo(this,nn);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||J.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)wn(this.i,this.l,J,"[Invalid Chunked Response]"),un(this),Nr(this);else if(0<J.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),Ko(yt),yt.M=!0,nt(11))}}else wn(this.i,this.l,J,null),Uo(this,J);st==4&&un(this),this.o&&!this.J&&(st==4?ks(this.j,this):(this.o=!1,He(this)))}else Is(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),un(this),Nr(this)}}}catch{}finally{}};function Ya(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function cc(l,f){var y=l.C,E=f.indexOf(`
`,y);return E==-1?gs:(y=Number(f.substring(y,E)),isNaN(y)?Fo:(E+=1,E+y>f.length?gs:(f=f.slice(E,E+y),l.C=E+y,f)))}In.prototype.cancel=function(){this.J=!0,un(this)};function He(l){l.S=Date.now()+l.I,Ja(l,l.I)}function Ja(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(x(l.ba,l),f)}function Ci(l){l.B&&(m.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Mo(this.i,this.A),this.L!=2&&(ar(),nt(17)),un(this),this.s=2,Nr(this)):Ja(this,this.S-l)};function Nr(l){l.j.G==0||l.J||ks(l.j,l)}function un(l){Ci(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,xo(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Uo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||jt(y.h,l))){if(!l.K&&jt(y.h,l)&&y.G==3){try{var E=y.Da.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Rs(y),kn(y);else break e;Cs(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(x(y.Za,y),6e3));if(1>=el(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else dr(y,11)}else if((l.K||y.g==l)&&Rs(y),!ce(f))for(L=y.Da.g.parse(f),f=0;f<L.length;f++){let Ne=L[f];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const yt=Ne[3];yt!=null&&(y.la=yt,y.j.info("VER="+y.la));const st=Ne[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const hn=Ne[5];hn!=null&&typeof hn=="number"&&0<hn&&(E=1.5*hn,y.L=E,y.j.info("backChannelRequestTimeoutMs_="+E)),E=y;const nn=l.g;if(nn){const Vi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var U=E.h;U.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(zo(U,U.h),U.h=null))}if(E.D){const xs=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;xs&&(E.ya=xs,Be(E.I,E.D,xs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),E=y;var J=l;if(E.qa=fl(E,E.J?E.ia:null,E.W),J.K){tl(E.h,J);var je=J,ct=E.L;ct&&(je.I=ct),je.B&&(Ci(je),He(je)),E.g=J}else Di(E);0<y.i.length&&$n(y)}else Ne[0]!="stop"&&Ne[0]!="close"||dr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?dr(y,7):It(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}ar(4)}catch{}}var Za=class{constructor(l,f){this.g=l,this.map=f}};function Ri(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function el(l){return l.h?1:l.g?l.g.size:0}function jt(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function zo(l,f){l.g?l.g.add(f):l.h=f}function tl(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ri.prototype.cancel=function(){if(this.i=nl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function nl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return X(l.i)}function vs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,E=0;E<y;E++)f.push(l[E]);return f}f=[],y=0;for(E in l)f[y++]=l[E];return f}function _s(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const E in l)f[y++]=E;return f}}}function Dr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=_s(l),E=vs(l),L=E.length,U=0;U<L;U++)f.call(void 0,E[U],y&&y[U],l)}var ki=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hc(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var E=l[y].indexOf("="),L=null;if(0<=E){var U=l[y].substring(0,E);L=l[y].substring(E+1)}else U=l[y];f(U,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function lr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof lr){this.h=l.h,Pi(this,l.j),this.o=l.o,this.g=l.g,Vr(this,l.s),this.l=l.l;var f=l.i,y=new Un;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),br(this,y),this.m=l.m}else l&&(f=String(l).match(ki))?(this.h=!1,Pi(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Vr(this,f[4]),this.l=Pe(f[5]||"",!0),br(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Un(null,this.h))}lr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Lr(f,Es,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Lr(f,Es,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Lr(y,y.charAt(0)=="/"?sl:il,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Lr(y,Bo)),l.join("")};function en(l){return new lr(l)}function Pi(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Vr(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function br(l,f,y){f instanceof Un?(l.i=f,zn(l.i,l.h)):(y||(f=Lr(f,ol)),l.i=new Un(f,l.h))}function Be(l,f,y){l.i.set(f,y)}function Or(l){return Be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Lr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,rl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function rl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Es=/[#\/\?@]/g,il=/[#\?:]/g,sl=/[#\?]/g,ol=/[#\?@]/g,Bo=/#/g;function Un(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Tt(l){l.g||(l.g=new Map,l.h=0,l.i&&hc(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}i=Un.prototype,i.add=function(l,f){Tt(this),this.i=null,l=cn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Sn(l,f){Tt(l),f=cn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Tt(l),f=cn(l,f),l.g.has(f)}i.forEach=function(l,f){Tt(this),this.g.forEach(function(y,E){y.forEach(function(L){l.call(f,L,E,this)},this)},this)},i.na=function(){Tt(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let E=0;E<f.length;E++){const L=l[E];for(let U=0;U<L.length;U++)y.push(f[E])}return y},i.V=function(l){Tt(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(cn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},i.set=function(l,f){return Tt(this),this.i=null,l=cn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},i.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Mr(l,f,y){Sn(l,f),0<y.length&&(l.i=null,l.g.set(cn(l,f),X(y)),l.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var E=f[y];const U=encodeURIComponent(String(E)),J=this.V(E);for(E=0;E<J.length;E++){var L=U;J[E]!==""&&(L+="="+encodeURIComponent(String(J[E]))),l.push(L)}}return this.i=l.join("&")};function cn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function zn(l,f){f&&!l.j&&(Tt(l),l.i=null,l.g.forEach(function(y,E){var L=E.toLowerCase();E!=L&&(Sn(this,E),Mr(this,L,y))},l)),l.j=f}function dc(l,f){const y=new Ii;if(m.Image){const E=new Image;E.onload=B($t,y,"TestLoadImage: loaded",!0,f,E),E.onerror=B($t,y,"TestLoadImage: error",!1,f,E),E.onabort=B($t,y,"TestLoadImage: abort",!1,f,E),E.ontimeout=B($t,y,"TestLoadImage: timeout",!1,f,E),m.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=l}else f(!1)}function al(l,f){const y=new Ii,E=new AbortController,L=setTimeout(()=>{E.abort(),$t(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:E.signal}).then(U=>{clearTimeout(L),U.ok?$t(y,"TestPingServer: ok",!0,f):$t(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),$t(y,"TestPingServer: error",!1,f)})}function $t(l,f,y,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(y)}catch{}}function fc(){this.g=new Vo}function ll(l,f,y){const E=y||"";try{Dr(l,function(L,U){let J=L;_(L)&&(J=No(L)),f.push(E+U+"="+encodeURIComponent(J))})}catch(L){throw f.push(E+"type="+encodeURIComponent("_badmap")),L}}function ur(l){this.l=l.Ub||null,this.j=l.eb||!1}z(ur,wi),ur.prototype.g=function(){return new xi(this.l,this.j)},ur.prototype.i=(function(l){return function(){return l}})({});function xi(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(xi,lt),i=xi.prototype,i.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Rn(this)},i.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},i.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ul(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ul(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}i.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Cn(this):Rn(this),this.readyState==3&&ul(this)}},i.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},i.Qa=function(l){this.g&&(this.response=l,Cn(this))},i.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Rn(l)}i.setRequestHeader=function(l,f){this.u.append(l,f)},i.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function Rn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function cr(l){let f="";return Te(l,function(y,E){f+=E,f+=":",f+=y,f+=`\r
`}),f}function Fr(l,f,y){e:{for(E in y){var E=!1;break e}E=!0}E||(y=cr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Be(l,f,y))}function Qe(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Qe,lt);var pc=/^https?$/i,$o=["POST","PUT"];i=Qe.prototype,i.Ha=function(l){this.J=l},i.ea=function(l,f,y,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?cs(this.o):cs(Tn),this.g.onreadystatechange=x(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(U){Ni(this,U);return}if(l=y||"",y=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)y.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const U of E.keys())y.set(U,E.get(U));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(y.keys()).find(U=>U.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call($o,f,void 0))||E||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,J]of y)this.g.setRequestHeader(U,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ts(this),this.u=!0,this.g.send(l),this.u=!1}catch(U){Ni(this,U)}};function Ni(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,ws(l),tn(l)}function ws(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}i.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),tn(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ho(this):this.bb())},i.bb=function(){Ho(this)};function Ho(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)ko(l.Ea,0,l);else if(ut(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const J=l.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var E;if(E=J===0){var L=String(l.D).match(ki)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),E=!pc.test(L?L.toLowerCase():"")}y=E}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var U=2<Ht(l)?l.g.statusText:""}catch{U=""}l.l=U+" ["+l.Z()+"]",ws(l)}}finally{tn(l)}}}}function tn(l,f){if(l.g){Ts(l);const y=l.g,E=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=E}catch{}}}function Ts(l){l.I&&(m.clearTimeout(l.I),l.I=null)}i.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}i.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Do(f)}};function qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Is(l){const f={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<l.length;E++){if(ce(l[E]))continue;var y=N(l[E]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const U=f[L]||[];f[L]=U,U.push(y)}V(f,function(E){return E.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function Wo(l){this.Aa=0,this.i=[],this.j=new Ii,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bn("baseRetryDelayMs",5e3,l),this.cb=Bn("retryDelaySeedMs",1e4,l),this.Wa=Bn("forwardChannelMaxRetries",2,l),this.wa=Bn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ri(l&&l.concurrentRequestLimit),this.Da=new fc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Wo.prototype,i.la=8,i.G=1,i.connect=function(l,f,y,E){nt(0),this.W=l,this.H=f||{},y&&E!==void 0&&(this.H.OSID=y,this.H.OAID=E),this.F=this.X,this.I=fl(this,null,this.W),$n(this)};function It(l){if(Ss(l),l.G==3){var f=l.U++,y=en(l.I);if(Be(y,"SID",l.K),Be(y,"RID",f),Be(y,"TYPE","terminate"),hr(l,y),f=new In(l,l.j,f),f.L=2,f.v=Or(en(y)),y=!1,m.navigator&&m.navigator.sendBeacon)try{y=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&m.Image&&(new Image().src=f.v,y=!0),y||(f.g=pl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),He(f)}dl(l)}function kn(l){l.g&&(Ko(l),l.g.cancel(),l.g=null)}function Ss(l){kn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Rs(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function $n(l){if(!Zt(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||te(),Z||(Ue(),Z=!0),le.add(f,l),l.B=0}}function mc(l,f){return el(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(x(l.Ga,l,f),hl(l,l.B)),l.B++,!0)}i.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new In(this,this.j,l);let U=this.o;if(this.S&&(U?(U=S(U),R(U,this.S)):U=this.S),this.m!==null||this.O||(L.H=U,U=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var E=this.i[y];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=jr(this,L,f),y=en(this.I),Be(y,"RID",l),Be(y,"CVER",22),this.D&&Be(y,"X-HTTP-Session-Id",this.D),hr(this,y),U&&(this.O?f="headers="+encodeURIComponent(String(cr(U)))+"&"+f:this.m&&Fr(y,this.m,U)),zo(this.h,L),this.Ua&&Be(y,"TYPE","init"),this.P?(Be(y,"$req",f),Be(y,"SID","null"),L.T=!0,ys(L,y,null)):ys(L,y,f),this.G=2}}else this.G==3&&(l?As(this,l):this.i.length==0||Zt(this.h)||As(this))};function As(l,f){var y;f?y=f.l:y=l.U++;const E=en(l.I);Be(E,"SID",l.K),Be(E,"RID",y),Be(E,"AID",l.T),hr(l,E),l.m&&l.o&&Fr(E,l.m,l.o),y=new In(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=jr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zo(l.h,y),ys(y,E,f)}function hr(l,f){l.H&&Te(l.H,function(y,E){Be(f,E,y)}),l.l&&Dr({},function(y,E){Be(f,E,y)})}function jr(l,f,y){y=Math.min(l.i.length,y);var E=l.l?x(l.l.Na,l.l,l):null;e:{var L=l.i;let U=-1;for(;;){const J=["count="+y];U==-1?0<y?(U=L[0].g,J.push("ofs="+U)):U=0:J.push("ofs="+U);let je=!0;for(let ct=0;ct<y;ct++){let Ne=L[ct].g;const yt=L[ct].map;if(Ne-=U,0>Ne)U=Math.max(0,L[ct].g-100),je=!1;else try{ll(yt,J,"req"+Ne+"_")}catch{E&&E(yt)}}if(je){E=J.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,E}function Di(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||te(),Z||(Ue(),Z=!0),le.add(f,l),l.v=0}}function Cs(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(x(l.Fa,l),hl(l,l.v)),l.v++,!0)}i.Fa=function(){if(this.u=null,cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(x(this.ab,this),l)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),kn(this),cl(this))};function Ko(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function cl(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=en(l.qa);Be(f,"RID","rpc"),Be(f,"SID",l.K),Be(f,"AID",l.T),Be(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&Be(f,"TO",l.ja),Be(f,"TYPE","xmlhttp"),hr(l,f),l.m&&l.o&&Fr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=Or(en(f)),y.m=null,y.P=!0,jo(y,l)}i.Za=function(){this.C!=null&&(this.C=null,kn(this),Cs(this),nt(19))};function Rs(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function ks(l,f){var y=null;if(l.g==f){Rs(l),Ko(l),l.g=null;var E=2}else if(jt(l.h,f))y=f.D,tl(l.h,f),E=1;else return;if(l.G!=0){if(f.o)if(E==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var L=l.B;E=Ti(),ut(E,new fs(E,y)),$n(l)}else Di(l);else if(L=f.s,L==3||L==0&&0<f.X||!(E==1&&mc(l,f)||E==2&&Cs(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),L){case 1:dr(l,5);break;case 4:dr(l,10);break;case 3:dr(l,6);break;default:dr(l,2)}}}function hl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function dr(l,f){if(l.j.info("Error code "+f),f==2){var y=x(l.fb,l),E=l.Xa;const L=!E;E=new lr(E||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Pi(E,"https"),Or(E),L?dc(E.toString(),y):al(E.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(f),dl(l),Ss(l)}i.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function dl(l){if(l.G=0,l.ka=[],l.l){const f=nl(l.h);(f.length!=0||l.i.length!=0)&&(q(l.ka,f),q(l.ka,l.i),l.h.i.length=0,X(l.i),l.i.length=0),l.l.ra()}}function fl(l,f,y){var E=y instanceof lr?en(y):new lr(y);if(E.g!="")f&&(E.g=f+"."+E.g),Vr(E,E.s);else{var L=m.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;var U=new lr(null);E&&Pi(U,E),f&&(U.g=f),L&&Vr(U,L),y&&(U.l=y),E=U}return y=l.D,f=l.ya,y&&f&&Be(E,y,f),Be(E,"VER",l.la),hr(l,E),E}function pl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Qe(new ur({eb:y})):new Qe(l.pa),f.Ha(l.J),f}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}i=Go.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ps(){}Ps.prototype.g=function(l,f){return new Ut(l,f)};function Ut(l,f){lt.call(this),this.g=new Wo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!ce(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!ce(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Hn(this)}z(Ut,lt),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){It(this.g)},Ut.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=No(l),l=y);f.i.push(new Za(f.Ya++,l)),f.G==3&&$n(f)},Ut.prototype.N=function(){this.g.l=null,delete this.j,It(this.g),delete this.g,Ut.aa.N.call(this)};function ml(l){Fn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}z(ml,Fn);function gl(){ds.call(this),this.status=1}z(gl,ds);function Hn(l){this.g=l}z(Hn,Go),Hn.prototype.ua=function(){ut(this.g,"a")},Hn.prototype.ta=function(l){ut(this.g,new ml(l))},Hn.prototype.sa=function(l){ut(this.g,new gl)},Hn.prototype.ra=function(){ut(this.g,"b")},Ps.prototype.createWebChannel=Ps.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,xy=function(){return new Ps},Py=function(){return Ti()},ky=jn,id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ms.NO_ERROR=0,ms.TIMEOUT=8,ms.HTTP_ERROR=6,gu=ms,Qa.COMPLETE="complete",Ry=Qa,hs.EventType=ln,ln.OPEN="a",ln.CLOSE="b",ln.ERROR="c",ln.MESSAGE="d",lt.prototype.listen=lt.prototype.K,_a=hs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Cy=Qe}).apply(typeof cu<"u"?cu:typeof self<"u"?self:typeof window<"u"?window:{});const $m="@firebase/firestore",Hm="4.7.17";/**
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
 */class Lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let _o="11.9.0";/**
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
 */const Ji=new Sd("@firebase/firestore");function Ys(){return Ji.logLevel}function ne(i,...e){if(Ji.logLevel<=Re.DEBUG){const t=e.map(Rd);Ji.debug(`Firestore (${_o}): ${i}`,...t)}}function Sr(i,...e){if(Ji.logLevel<=Re.ERROR){const t=e.map(Rd);Ji.error(`Firestore (${_o}): ${i}`,...t)}}function lo(i,...e){if(Ji.logLevel<=Re.WARN){const t=e.map(Rd);Ji.warn(`Firestore (${_o}): ${i}`,...t)}}function Rd(i){if(typeof i=="string")return i;try{/**
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
*/return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
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
 */function ge(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Ny(i,s,t)}function Ny(i,e,t){let s=`FIRESTORE (${_o}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Sr(s),new Error(s)}function Fe(i,e,t,s){let o="Unexpected state";typeof t=="string"?o=t:s=t,i||Ny(e,o,s)}function Ee(i,e){return i}/**
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
 */const G={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends kr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Dy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Lt.UNAUTHENTICATED)))}shutdown(){}}class lT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class uT{constructor(e){this.t=e,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Gi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Gi,e.enqueueRetryable((()=>o(this.currentUser)))};const h=()=>{const g=u;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},m=g=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((g=>m(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?m(g):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Gi)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new Dy(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Lt(e)}}class cT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new cT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Lt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.m;return this.m=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const o=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function fT(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function Vy(){return new TextEncoder}/**
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
 */class by{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=fT(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%62))}return s}}function Se(i,e){return i<e?-1:i>e?1:0}function sd(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),o=e.codePointAt(t);if(s!==o){if(s<128&&o<128)return Se(s,o);{const u=Vy(),h=pT(u.encode(Wm(i,t)),u.encode(Wm(e,t)));return h!==0?h:Se(s,o)}}t+=s>65535?2:1}return Se(i.length,e.length)}function Wm(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function pT(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Se(i[t],e[t]);return Se(i.length,e.length)}function uo(i,e,t){return i.length===e.length&&i.every(((s,o)=>t(s,e[o])))}/**
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
 */const Km=-62135596800,Gm=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Gm);return new pt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ue(G.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Km)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(G.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Gm}_compareTo(e){return this.seconds===e.seconds?Se(this.nanoseconds,e.nanoseconds):Se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Km;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new pt(0,0))}static max(){return new _e(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qm="__name__";class Qn{constructor(e,t,s){t===void 0?t=0:t>e.length&&ge(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ge(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Qn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qn?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=Qn.compareSegments(e.get(o),t.get(o));if(u!==0)return u}return Se(e.length,t.length)}static compareSegments(e,t){const s=Qn.isNumericId(e),o=Qn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Qn.extractNumericId(e).compare(Qn.extractNumericId(t)):sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ui.fromString(e.substring(4,e.length-2))}}class Ye extends Qn{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ue(G.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Ye(t)}static emptyPath(){return new Ye([])}}const mT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Qn{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return mT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qm}static keyField(){return new Rt([Qm])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ue(G.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const m=e[o];if(m==="\\"){if(o+1===e.length)throw new ue(G.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ue(G.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else m==="`"?(h=!h,o++):m!=="."||h?(s+=m,o++):(u(),o++)}if(u(),h)throw new ue(G.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
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
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(Ye.fromString(e))}static fromName(e){return new fe(Ye.fromString(e).popFirst(5))}static empty(){return new fe(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new Ye(e.slice()))}}/**
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
 */const Na=-1;function gT(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,o=_e.fromTimestamp(s===1e9?new pt(t+1,0):new pt(t,s));return new di(o,fe.empty(),e)}function yT(i){return new di(i.readTime,i.key,Na)}class di{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new di(_e.min(),fe.empty(),Na)}static max(){return new di(_e.max(),fe.empty(),Na)}}function vT(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=fe.comparator(i.documentKey,e.documentKey),t!==0?t:Se(i.largestBatchId,e.largestBatchId))}/**
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
 */const _T="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ET{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Eo(i){if(i.code!==G.FAILED_PRECONDITION||i.message!==_T)throw i;ne("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,s)=>{t(e)}))}static reject(e){return new $(((t,s)=>{s(e)}))}static waitFor(e){return new $(((t,s)=>{let o=0,u=0,h=!1;e.forEach((m=>{++o,m.next((()=>{++u,h&&u===o&&t()}),(g=>s(g)))})),h=!0,u===o&&t()}))}static or(e){let t=$.resolve(!1);for(const s of e)t=t.next((o=>o?$.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,u)=>{s.push(t.call(this,o,u))})),this.waitFor(s)}static mapArray(e,t){return new $(((s,o)=>{const u=e.length,h=new Array(u);let m=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next((w=>{h[_]=w,++m,m===u&&s(h)}),(w=>o(w)))}}))}static doWhile(e,t){return new $(((s,o)=>{const u=()=>{e()===!0?t().next((()=>{u()}),o):s()};u()}))}}function wT(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function wo(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class Ku{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>t.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ku.le=-1;/**
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
 */const kd=-1;function Gu(i){return i==null}function ku(i){return i===0&&1/i==-1/0}function TT(i){return typeof i=="number"&&Number.isInteger(i)&&!ku(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Oy="";function IT(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Xm(e)),e=ST(i.get(t),e);return Xm(e)}function ST(i,e){let t=e;const s=i.length;for(let o=0;o<s;o++){const u=i.charAt(o);switch(u){case"\0":t+="";break;case Oy:t+="";break;default:t+=u}}return t}function Xm(i){return i+Oy+""}/**
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
 */function Ym(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function ts(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Ly(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hu(this.root,e,this.comparator,!1)}getReverseIterator(){return new hu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hu(this.root,e,this.comparator,!0)}}class hu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Jm(this.data.getIterator())}getIteratorFrom(e){return new Jm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new mt(this.comparator);return t.data=e,t}}class Jm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class On{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new On([])}unionWith(e){let t=new mt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new On(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class My extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class kt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new My("Invalid base64 string: "+u):u}})(e);return new kt(t)}static fromUint8Array(e){const t=(function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u})(e);return new kt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kt.EMPTY_BYTE_STRING=new kt("");const AT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(i){if(Fe(!!i,39018),typeof i=="string"){let e=0;const t=AT.exec(i);if(Fe(!!t,46558,{timestamp:i}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(i.seconds),nanos:it(i.nanos)}}function it(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function pi(i){return typeof i=="string"?kt.fromBase64String(i):kt.fromUint8Array(i)}/**
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
 */const Fy="server_timestamp",jy="__type__",Uy="__previous_value__",zy="__local_write_time__";function Pd(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[jy])===null||t===void 0?void 0:t.stringValue)===Fy}function Qu(i){const e=i.mapValue.fields[Uy];return Pd(e)?Qu(e):e}function Da(i){const e=fi(i.mapValue.fields[zy].timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class CT{constructor(e,t,s,o,u,h,m,g,_,w){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=w}}const Pu="(default)";class Va{constructor(e,t){this.projectId=e,this.database=t||Pu}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database===Pu}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const By="__type__",RT="__max__",du={mapValue:{}},$y="__vector__",xu="value";function mi(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Pd(i)?4:PT(i)?9007199254740991:kT(i)?10:11:ge(28295,{value:i})}function tr(i,e){if(i===e)return!0;const t=mi(i);if(t!==mi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Da(i).isEqual(Da(e));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=fi(o.timestampValue),m=fi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(o,u){return pi(o.bytesValue).isEqual(pi(u.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(o,u){return it(o.geoPointValue.latitude)===it(u.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(u.geoPointValue.longitude)})(i,e);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return it(o.integerValue)===it(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=it(o.doubleValue),m=it(u.doubleValue);return h===m?ku(h)===ku(m):isNaN(h)&&isNaN(m)}return!1})(i,e);case 9:return uo(i.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:case 11:return(function(o,u){const h=o.mapValue.fields||{},m=u.mapValue.fields||{};if(Ym(h)!==Ym(m))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(m[g]===void 0||!tr(h[g],m[g])))return!1;return!0})(i,e);default:return ge(52216,{left:i})}}function ba(i,e){return(i.values||[]).find((t=>tr(t,e)))!==void 0}function co(i,e){if(i===e)return 0;const t=mi(i),s=mi(e);if(t!==s)return Se(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Se(i.booleanValue,e.booleanValue);case 2:return(function(u,h){const m=it(u.integerValue||u.doubleValue),g=it(h.integerValue||h.doubleValue);return m<g?-1:m>g?1:m===g?0:isNaN(m)?isNaN(g)?0:-1:1})(i,e);case 3:return Zm(i.timestampValue,e.timestampValue);case 4:return Zm(Da(i),Da(e));case 5:return sd(i.stringValue,e.stringValue);case 6:return(function(u,h){const m=pi(u),g=pi(h);return m.compareTo(g)})(i.bytesValue,e.bytesValue);case 7:return(function(u,h){const m=u.split("/"),g=h.split("/");for(let _=0;_<m.length&&_<g.length;_++){const w=Se(m[_],g[_]);if(w!==0)return w}return Se(m.length,g.length)})(i.referenceValue,e.referenceValue);case 8:return(function(u,h){const m=Se(it(u.latitude),it(h.latitude));return m!==0?m:Se(it(u.longitude),it(h.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return eg(i.arrayValue,e.arrayValue);case 10:return(function(u,h){var m,g,_,w;const C=u.fields||{},x=h.fields||{},B=(m=C[xu])===null||m===void 0?void 0:m.arrayValue,z=(g=x[xu])===null||g===void 0?void 0:g.arrayValue,X=Se(((_=B==null?void 0:B.values)===null||_===void 0?void 0:_.length)||0,((w=z==null?void 0:z.values)===null||w===void 0?void 0:w.length)||0);return X!==0?X:eg(B,z)})(i.mapValue,e.mapValue);case 11:return(function(u,h){if(u===du.mapValue&&h===du.mapValue)return 0;if(u===du.mapValue)return 1;if(h===du.mapValue)return-1;const m=u.fields||{},g=Object.keys(m),_=h.fields||{},w=Object.keys(_);g.sort(),w.sort();for(let C=0;C<g.length&&C<w.length;++C){const x=sd(g[C],w[C]);if(x!==0)return x;const B=co(m[g[C]],_[w[C]]);if(B!==0)return B}return Se(g.length,w.length)})(i.mapValue,e.mapValue);default:throw ge(23264,{Pe:t})}}function Zm(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Se(i,e);const t=fi(i),s=fi(e),o=Se(t.seconds,s.seconds);return o!==0?o:Se(t.nanos,s.nanos)}function eg(i,e){const t=i.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=co(t[o],s[o]);if(u)return u}return Se(t.length,s.length)}function ho(i){return od(i)}function od(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const s=fi(t);return`time(${s.seconds},${s.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return pi(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return fe.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=od(u);return s+"]"})(i.arrayValue):"mapValue"in i?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${od(t.fields[h])}`;return o+"}"})(i.mapValue):ge(61005,{value:i})}function yu(i){switch(mi(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qu(i);return e?16+yu(e):16;case 5:return 2*i.stringValue.length;case 6:return pi(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,u)=>o+yu(u)),0)})(i.arrayValue);case 10:case 11:return(function(s){let o=0;return ts(s.fields,((u,h)=>{o+=u.length+yu(h)})),o})(i.mapValue);default:throw ge(13486,{value:i})}}function ad(i){return!!i&&"integerValue"in i}function xd(i){return!!i&&"arrayValue"in i}function tg(i){return!!i&&"nullValue"in i}function ng(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function vu(i){return!!i&&"mapValue"in i}function kT(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[By])===null||t===void 0?void 0:t.stringValue)===$y}function Sa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return ts(i.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Sa(s))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Sa(i.arrayValue.values[t]);return e}return Object.assign({},i)}function PT(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===RT}/**
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
 */class vn{constructor(e){this.value=e}static empty(){return new vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!vu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Sa(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach(((h,m)=>{if(!t.isImmediateParentOf(m)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=m.popLast()}h?s[m.lastSegment()]=Sa(h):o.push(m.lastSegment())}));const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());vu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];vu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ts(t,((o,u)=>e[o]=u));for(const o of s)delete e[o]}clone(){return new vn(Sa(this.value))}}function Hy(i){const e=[];return ts(i.fields,((t,s)=>{const o=new Rt([t]);if(vu(s)){const u=Hy(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)})),new On(e)}/**
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
 */class Mt{constructor(e,t,s,o,u,h,m){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Mt(e,0,_e.min(),_e.min(),_e.min(),vn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mt(e,1,t,_e.min(),s,o,0)}static newNoDocument(e,t){return new Mt(e,2,t,_e.min(),_e.min(),vn.empty(),0)}static newUnknownDocument(e,t){return new Mt(e,3,t,_e.min(),_e.min(),vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nu{constructor(e,t){this.position=e,this.inclusive=t}}function rg(i,e,t){let s=0;for(let o=0;o<i.position.length;o++){const u=e[o],h=i.position[o];if(u.field.isKeyField()?s=fe.comparator(fe.fromName(h.referenceValue),t.key):s=co(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function ig(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!tr(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class Du{constructor(e,t="asc"){this.field=e,this.dir=t}}function xT(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class qy{}class ft extends qy{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new DT(e,t,s):t==="array-contains"?new OT(e,s):t==="in"?new LT(e,s):t==="not-in"?new MT(e,s):t==="array-contains-any"?new FT(e,s):new ft(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new VT(e,s):new bT(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(co(t,this.value)):t!==null&&mi(this.value)===mi(t)&&this.matchesComparison(co(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nr extends qy{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new nr(e,t)}matches(e){return Wy(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Wy(i){return i.op==="and"}function Ky(i){return NT(i)&&Wy(i)}function NT(i){for(const e of i.filters)if(e instanceof nr)return!1;return!0}function ld(i){if(i instanceof ft)return i.field.canonicalString()+i.op.toString()+ho(i.value);if(Ky(i))return i.filters.map((e=>ld(e))).join(",");{const e=i.filters.map((t=>ld(t))).join(",");return`${i.op}(${e})`}}function Gy(i,e){return i instanceof ft?(function(s,o){return o instanceof ft&&s.op===o.op&&s.field.isEqual(o.field)&&tr(s.value,o.value)})(i,e):i instanceof nr?(function(s,o){return o instanceof nr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((u,h,m)=>u&&Gy(h,o.filters[m])),!0):!1})(i,e):void ge(19439)}function Qy(i){return i instanceof ft?(function(t){return`${t.field.canonicalString()} ${t.op} ${ho(t.value)}`})(i):i instanceof nr?(function(t){return t.op.toString()+" {"+t.getFilters().map(Qy).join(" ,")+"}"})(i):"Filter"}class DT extends ft{constructor(e,t,s){super(e,t,s),this.key=fe.fromName(s.referenceValue)}matches(e){const t=fe.comparator(e.key,this.key);return this.matchesComparison(t)}}class VT extends ft{constructor(e,t){super(e,"in",t),this.keys=Xy("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bT extends ft{constructor(e,t){super(e,"not-in",t),this.keys=Xy("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Xy(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>fe.fromName(s.referenceValue)))}class OT extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return xd(t)&&ba(t.arrayValue,this.value)}}class LT extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class MT extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ba(this.value.arrayValue,t)}}class FT extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!xd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>ba(this.value.arrayValue,s)))}}/**
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
 */class jT{constructor(e,t=null,s=[],o=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=m,this.Ie=null}}function sg(i,e=null,t=[],s=[],o=null,u=null,h=null){return new jT(i,e,t,s,o,u,h)}function Nd(i){const e=Ee(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>ld(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Gu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ho(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ho(s))).join(",")),e.Ie=t}return e.Ie}function Dd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!xT(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!Gy(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!ig(i.startAt,e.startAt)&&ig(i.endAt,e.endAt)}function ud(i){return fe.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class Xu{constructor(e,t=null,s=[],o=[],u=null,h="F",m=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=g,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function UT(i,e,t,s,o,u,h,m){return new Xu(i,e,t,s,o,u,h,m)}function Vd(i){return new Xu(i)}function og(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function zT(i){return i.collectionGroup!==null}function Aa(i){const e=Ee(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const u of e.explicitOrderBy)e.Ee.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new mt(Rt.comparator);return h.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(m=m.add(_.field))}))})),m})(e).forEach((u=>{t.has(u.canonicalString())||u.isKeyField()||e.Ee.push(new Du(u,s))})),t.has(Rt.keyField().canonicalString())||e.Ee.push(new Du(Rt.keyField(),s))}return e.Ee}function Yn(i){const e=Ee(i);return e.de||(e.de=BT(e,Aa(i))),e.de}function BT(i,e){if(i.limitType==="F")return sg(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new Du(o.field,u)}));const t=i.endAt?new Nu(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new Nu(i.startAt.position,i.startAt.inclusive):null;return sg(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function cd(i,e,t){return new Xu(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Yu(i,e){return Dd(Yn(i),Yn(e))&&i.limitType===e.limitType}function Yy(i){return`${Nd(Yn(i))}|lt:${i.limitType}`}function Js(i){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>Qy(o))).join(", ")}]`),Gu(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(h){return`${h.field.canonicalString()} (${h.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>ho(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>ho(o))).join(",")),`Target(${s})`})(Yn(i))}; limitType=${i.limitType})`}function Ju(i,e){return e.isFoundDocument()&&(function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):fe.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(i,e)&&(function(s,o){for(const u of Aa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(i,e)&&(function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0})(i,e)&&(function(s,o){return!(s.startAt&&!(function(h,m,g){const _=rg(h,m,g);return h.inclusive?_<=0:_<0})(s.startAt,Aa(s),o)||s.endAt&&!(function(h,m,g){const _=rg(h,m,g);return h.inclusive?_>=0:_>0})(s.endAt,Aa(s),o))})(i,e)}function $T(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function Jy(i){return(e,t)=>{let s=!1;for(const o of Aa(i)){const u=HT(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function HT(i,e,t){const s=i.field.isKeyField()?fe.comparator(e.key,t.key):(function(u,h,m){const g=h.data.field(u),_=m.data.field(u);return g!==null&&_!==null?co(g,_):ge(42886)})(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return ge(19790,{direction:i.dir})}}/**
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
 */class ns{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,((t,s)=>{for(const[o,u]of s)e(o,u)}))}isEmpty(){return Ly(this.inner)}size(){return this.innerSize}}/**
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
 */const qT=new et(fe.comparator);function Ar(){return qT}const Zy=new et(fe.comparator);function Ea(...i){let e=Zy;for(const t of i)e=e.insert(t.key,t);return e}function ev(i){let e=Zy;return i.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ki(){return Ca()}function tv(){return Ca()}function Ca(){return new ns((i=>i.toString()),((i,e)=>i.isEqual(e)))}const WT=new et(fe.comparator),KT=new mt(fe.comparator);function ke(...i){let e=KT;for(const t of i)e=e.add(t);return e}const GT=new mt(Se);function QT(){return GT}/**
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
 */function bd(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ku(e)?"-0":e}}function nv(i){return{integerValue:""+i}}function XT(i,e){return TT(e)?nv(e):bd(i,e)}/**
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
 */class Zu{constructor(){this._=void 0}}function YT(i,e,t){return i instanceof Vu?(function(o,u){const h={fields:{[jy]:{stringValue:Fy},[zy]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Pd(u)&&(u=Qu(u)),u&&(h.fields[Uy]=u),{mapValue:h}})(t,e):i instanceof Oa?iv(i,e):i instanceof La?sv(i,e):(function(o,u){const h=rv(o,u),m=ag(h)+ag(o.Re);return ad(h)&&ad(o.Re)?nv(m):bd(o.serializer,m)})(i,e)}function JT(i,e,t){return i instanceof Oa?iv(i,e):i instanceof La?sv(i,e):t}function rv(i,e){return i instanceof bu?(function(s){return ad(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Vu extends Zu{}class Oa extends Zu{constructor(e){super(),this.elements=e}}function iv(i,e){const t=ov(e);for(const s of i.elements)t.some((o=>tr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class La extends Zu{constructor(e){super(),this.elements=e}}function sv(i,e){let t=ov(e);for(const s of i.elements)t=t.filter((o=>!tr(o,s)));return{arrayValue:{values:t}}}class bu extends Zu{constructor(e,t){super(),this.serializer=e,this.Re=t}}function ag(i){return it(i.integerValue||i.doubleValue)}function ov(i){return xd(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function ZT(i,e){return i.field.isEqual(e.field)&&(function(s,o){return s instanceof Oa&&o instanceof Oa||s instanceof La&&o instanceof La?uo(s.elements,o.elements,tr):s instanceof bu&&o instanceof bu?tr(s.Re,o.Re):s instanceof Vu&&o instanceof Vu})(i.transform,e.transform)}class e1{constructor(e,t){this.version=e,this.transformResults=t}}class Mn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Mn}static exists(e){return new Mn(void 0,e)}static updateTime(e){return new Mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ec{}function av(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Od(i.key,Mn.none()):new za(i.key,i.data,Mn.none());{const t=i.data,s=vn.empty();let o=new mt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new rs(i.key,s,new On(o.toArray()),Mn.none())}}function t1(i,e,t){i instanceof za?(function(o,u,h){const m=o.value.clone(),g=ug(o.fieldTransforms,u,h.transformResults);m.setAll(g),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()})(i,e,t):i instanceof rs?(function(o,u,h){if(!_u(o.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ug(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(lv(o)),g.setAll(m),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()})(i,e,t):(function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()})(0,e,t)}function Ra(i,e,t,s){return i instanceof za?(function(u,h,m,g){if(!_u(u.precondition,h))return m;const _=u.value.clone(),w=cg(u.fieldTransforms,g,h);return _.setAll(w),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null})(i,e,t,s):i instanceof rs?(function(u,h,m,g){if(!_u(u.precondition,h))return m;const _=cg(u.fieldTransforms,g,h),w=h.data;return w.setAll(lv(u)),w.setAll(_),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((C=>C.field)))})(i,e,t,s):(function(u,h,m){return _u(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m})(i,e,t)}function n1(i,e){let t=null;for(const s of i.fieldTransforms){const o=e.data.field(s.field),u=rv(s.transform,o||null);u!=null&&(t===null&&(t=vn.empty()),t.set(s.field,u))}return t||null}function lg(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&uo(s,o,((u,h)=>ZT(u,h)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class za extends ec{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class rs extends ec{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function lv(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}})),e}function ug(i,e,t){const s=new Map;Fe(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let o=0;o<t.length;o++){const u=i[o],h=u.transform,m=e.data.field(u.field);s.set(u.field,JT(h,m,t[o]))}return s}function cg(i,e,t){const s=new Map;for(const o of i){const u=o.transform,h=t.data.field(o.field);s.set(o.field,YT(u,h,e))}return s}class Od extends ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r1 extends ec{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class i1{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&t1(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ra(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=tv();return this.mutations.forEach((o=>{const u=e.get(o.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=t.has(o.key)?null:m;const g=av(h,m);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(_e.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ke())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,((t,s)=>lg(t,s)))&&uo(this.baseMutations,e.baseMutations,((t,s)=>lg(t,s)))}}class Ld{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let o=(function(){return WT})();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new Ld(e,t,s,o)}}/**
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
 */class s1{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class o1{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var at,De;function a1(i){switch(i){case G.OK:return ge(64938);case G.CANCELLED:case G.UNKNOWN:case G.DEADLINE_EXCEEDED:case G.RESOURCE_EXHAUSTED:case G.INTERNAL:case G.UNAVAILABLE:case G.UNAUTHENTICATED:return!1;case G.INVALID_ARGUMENT:case G.NOT_FOUND:case G.ALREADY_EXISTS:case G.PERMISSION_DENIED:case G.FAILED_PRECONDITION:case G.ABORTED:case G.OUT_OF_RANGE:case G.UNIMPLEMENTED:case G.DATA_LOSS:return!0;default:return ge(15467,{code:i})}}function uv(i){if(i===void 0)return Sr("GRPC error has no .code"),G.UNKNOWN;switch(i){case at.OK:return G.OK;case at.CANCELLED:return G.CANCELLED;case at.UNKNOWN:return G.UNKNOWN;case at.DEADLINE_EXCEEDED:return G.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return G.RESOURCE_EXHAUSTED;case at.INTERNAL:return G.INTERNAL;case at.UNAVAILABLE:return G.UNAVAILABLE;case at.UNAUTHENTICATED:return G.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return G.INVALID_ARGUMENT;case at.NOT_FOUND:return G.NOT_FOUND;case at.ALREADY_EXISTS:return G.ALREADY_EXISTS;case at.PERMISSION_DENIED:return G.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return G.FAILED_PRECONDITION;case at.ABORTED:return G.ABORTED;case at.OUT_OF_RANGE:return G.OUT_OF_RANGE;case at.UNIMPLEMENTED:return G.UNIMPLEMENTED;case at.DATA_LOSS:return G.DATA_LOSS;default:return ge(39323,{code:i})}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const l1=new ui([4294967295,4294967295],0);function hg(i){const e=Vy().encode(i),t=new Ay;return t.update(e),new Uint8Array(t.digest())}function dg(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ui([t,s],0),new ui([o,u],0)]}class Md{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new wa(`Invalid padding: ${t}`);if(s<0)throw new wa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new wa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new wa(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=ui.fromNumber(this.pe)}we(e,t,s){let o=e.add(t.multiply(ui.fromNumber(s)));return o.compare(l1)===1&&(o=new ui([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=hg(e),[s,o]=dg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);if(!this.be(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new Md(u,o,t);return s.forEach((m=>h.insert(m))),h}insert(e){if(this.pe===0)return;const t=hg(e),[s,o]=dg(t);for(let u=0;u<this.hashCount;u++){const h=this.we(s,o,u);this.Se(h)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class wa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,t,s,o,u){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new tc(_e.min(),o,new et(Se),Ar(),ke())}}class Ba{constructor(e,t,s,o,u){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ba(s,t,ke(),ke(),ke())}}/**
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
 */class Eu{constructor(e,t,s,o){this.De=e,this.removedTargetIds=t,this.key=s,this.ve=o}}class cv{constructor(e,t){this.targetId=e,this.Ce=t}}class hv{constructor(e,t,s=kt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class fg{constructor(){this.Fe=0,this.Me=pg(),this.xe=kt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=ke(),t=ke(),s=ke();return this.Me.forEach(((o,u)=>{switch(u){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:ge(38017,{changeType:u})}})),new Ba(this.xe,this.Oe,e,t,s)}Qe(){this.Ne=!1,this.Me=pg()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Fe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class u1{constructor(e){this.ze=e,this.je=new Map,this.He=Ar(),this.Je=fu(),this.Ye=fu(),this.Ze=new et(Se)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,(t=>{const s=this.rt(t);switch(e.state){case 0:this.it(t)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(t);break;case 3:this.it(t)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),s.ke(e.resumeToken));break;default:ge(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((s,o)=>{this.it(o)&&t(o)}))}ot(e){const t=e.targetId,s=e.Ce.count,o=this._t(t);if(o){const u=o.target;if(ud(u))if(s===0){const h=new fe(u.path);this.tt(t,h,Mt.newNoDocument(h,_e.min()))}else Fe(s===1,20013,{expectedCount:s});else{const h=this.ut(t);if(h!==s){const m=this.ct(e),g=m?this.lt(m,e,h):1;if(g!==0){this.st(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,_)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=t;let h,m;try{h=pi(s).toUint8Array()}catch(g){if(g instanceof My)return lo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{m=new Md(h,o,u)}catch(g){return lo(g instanceof wa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return m.pe===0?null:m}lt(e,t,s){return t.Ce.count===s-this.Tt(e,t.targetId)?0:2}Tt(e,t){const s=this.ze.getRemoteKeysForTarget(t);let o=0;return s.forEach((u=>{const h=this.ze.Pt(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.tt(t,u,null),o++)})),o}It(e){const t=new Map;this.je.forEach(((u,h)=>{const m=this._t(h);if(m){if(u.current&&ud(m.target)){const g=new fe(m.target.path);this.Et(g).has(h)||this.dt(h,g)||this.tt(h,g,Mt.newNoDocument(g,e))}u.Le&&(t.set(h,u.qe()),u.Qe())}}));let s=ke();this.Ye.forEach(((u,h)=>{let m=!0;h.forEachWhile((g=>{const _=this._t(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)})),m&&(s=s.add(u))})),this.He.forEach(((u,h)=>h.setReadTime(e)));const o=new tc(e,t,this.Ze,this.He,s);return this.He=Ar(),this.Je=fu(),this.Ye=fu(),this.Ze=new et(Se),o}et(e,t){if(!this.it(e))return;const s=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,s),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,s){if(!this.it(e))return;const o=this.rt(e);this.dt(e,t)?o.$e(t,1):o.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),s&&(this.He=this.He.insert(t,s))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new fg,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new mt(Se),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new mt(Se),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new fg),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.tt(e,t,null)}))}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function fu(){return new et(fe.comparator)}function pg(){return new et(fe.comparator)}const c1={asc:"ASCENDING",desc:"DESCENDING"},h1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d1={and:"AND",or:"OR"};class f1{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hd(i,e){return i.useProto3Json||Gu(e)?e:{value:e}}function Ou(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dv(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function p1(i,e){return Ou(i,e.toTimestamp())}function Jn(i){return Fe(!!i,49232),_e.fromTimestamp((function(t){const s=fi(t);return new pt(s.seconds,s.nanos)})(i))}function Fd(i,e){return dd(i,e).canonicalString()}function dd(i,e){const t=(function(o){return new Ye(["projects",o.projectId,"databases",o.database])})(i).child("documents");return e===void 0?t:t.child(e)}function fv(i){const e=Ye.fromString(i);return Fe(vv(e),10190,{key:e.toString()}),e}function fd(i,e){return Fd(i.databaseId,e.path)}function qh(i,e){const t=fv(e);if(t.get(1)!==i.databaseId.projectId)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new ue(G.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new fe(mv(t))}function pv(i,e){return Fd(i.databaseId,e)}function m1(i){const e=fv(i);return e.length===4?Ye.emptyPath():mv(e)}function pd(i){return new Ye(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function mv(i){return Fe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function mg(i,e,t){return{name:fd(i,e),fields:t.value.mapValue.fields}}function g1(i,e){let t;if("targetChange"in e){e.targetChange;const s=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:ge(39313,{state:_})})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],u=(function(_,w){return _.useProto3Json?(Fe(w===void 0||typeof w=="string",58123),kt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array,16193),kt.fromUint8Array(w||new Uint8Array))})(i,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&(function(_){const w=_.code===void 0?G.UNKNOWN:uv(_.code);return new ue(w,_.message||"")})(h);t=new hv(s,o,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=qh(i,s.document.name),u=Jn(s.document.updateTime),h=s.document.createTime?Jn(s.document.createTime):_e.min(),m=new vn({mapValue:{fields:s.document.fields}}),g=Mt.newFoundDocument(o,u,h,m),_=s.targetIds||[],w=s.removedTargetIds||[];t=new Eu(_,w,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=qh(i,s.document),u=s.readTime?Jn(s.readTime):_e.min(),h=Mt.newNoDocument(o,u),m=s.removedTargetIds||[];t=new Eu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=qh(i,s.document),u=s.removedTargetIds||[];t=new Eu([],u,o,null)}else{if(!("filter"in e))return ge(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,h=new o1(o,u),m=s.targetId;t=new cv(m,h)}}return t}function y1(i,e){let t;if(e instanceof za)t={update:mg(i,e.key,e.value)};else if(e instanceof Od)t={delete:fd(i,e.key)};else if(e instanceof rs)t={update:mg(i,e.key,e.data),updateMask:C1(e.fieldMask)};else{if(!(e instanceof r1))return ge(16599,{ft:e.type});t={verify:fd(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(u,h){const m=h.transform;if(m instanceof Vu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Oa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof La)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof bu)return{fieldPath:h.field.canonicalString(),increment:m.Re};throw ge(20930,{transform:h.transform})})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:p1(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ge(27497)})(i,e.precondition)),t}function v1(i,e){return i&&i.length>0?(Fe(e!==void 0,14353),i.map((t=>(function(o,u){let h=o.updateTime?Jn(o.updateTime):Jn(u);return h.isEqual(_e.min())&&(h=Jn(u)),new e1(h,o.transformResults||[])})(t,e)))):[]}function _1(i,e){return{documents:[pv(i,e.path)]}}function E1(i,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=pv(i,o);const u=(function(_){if(_.length!==0)return yv(nr.create(_,"and"))})(e.filters);u&&(t.structuredQuery.where=u);const h=(function(_){if(_.length!==0)return _.map((w=>(function(x){return{field:Zs(x.field),direction:I1(x.dir)}})(w)))})(e.orderBy);h&&(t.structuredQuery.orderBy=h);const m=hd(i,e.limit);return m!==null&&(t.structuredQuery.limit=m),e.startAt&&(t.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(e.endAt)),{gt:t,parent:o}}function w1(i){let e=m1(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1,65062);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let u=[];t.where&&(u=(function(C){const x=gv(C);return x instanceof nr&&Ky(x)?x.getFilters():[x]})(t.where));let h=[];t.orderBy&&(h=(function(C){return C.map((x=>(function(z){return new Du(eo(z.field),(function(q){switch(q){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(z.direction))})(x)))})(t.orderBy));let m=null;t.limit&&(m=(function(C){let x;return x=typeof C=="object"?C.value:C,Gu(x)?null:x})(t.limit));let g=null;t.startAt&&(g=(function(C){const x=!!C.before,B=C.values||[];return new Nu(B,x)})(t.startAt));let _=null;return t.endAt&&(_=(function(C){const x=!C.before,B=C.values||[];return new Nu(B,x)})(t.endAt)),UT(e,o,h,u,m,"F",g,_)}function T1(i,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge(28987,{purpose:o})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function gv(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=eo(t.unaryFilter.field);return ft.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=eo(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=eo(t.unaryFilter.field);return ft.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=eo(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}})(i):i.fieldFilter!==void 0?(function(t){return ft.create(eo(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return nr.create(t.compositeFilter.filters.map((s=>gv(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ge(1026)}})(t.compositeFilter.op))})(i):ge(30097,{filter:i})}function I1(i){return c1[i]}function S1(i){return h1[i]}function A1(i){return d1[i]}function Zs(i){return{fieldPath:i.canonicalString()}}function eo(i){return Rt.fromServerFormat(i.fieldPath)}function yv(i){return i instanceof ft?(function(t){if(t.op==="=="){if(ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NAN"}};if(tg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ng(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NAN"}};if(tg(t.value))return{unaryFilter:{field:Zs(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(t.field),op:S1(t.op),value:t.value}}})(i):i instanceof nr?(function(t){const s=t.getFilters().map((o=>yv(o)));return s.length===1?s[0]:{compositeFilter:{op:A1(t.op),filters:s}}})(i):ge(54877,{filter:i})}function C1(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function vv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class si{constructor(e,t,s,o,u=_e.min(),h=_e.min(),m=kt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=g}withSequenceNumber(e){return new si(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new si(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class R1{constructor(e){this.wt=e}}function k1(i){const e=w1({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?cd(e,e.limit,"L"):e}/**
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
 */class P1{constructor(){this.Cn=new x1}addToCollectionParentIndex(e,t){return this.Cn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(di.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(di.min())}updateCollectionGroup(e,t,s){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class x1{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new mt(Ye.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new mt(Ye.comparator)).toArray()}}/**
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
 */const gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_v=41943040;class Yt{static withCacheSize(e){return new Yt(e,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Yt.DEFAULT_COLLECTION_PERCENTILE=10,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yt.DEFAULT=new Yt(_v,Yt.DEFAULT_COLLECTION_PERCENTILE,Yt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yt.DISABLED=new Yt(-1,0,0);/**
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
 */class fo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new fo(0)}static lr(){return new fo(-1)}}/**
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
 */const yg="LruGarbageCollector",N1=1048576;function vg([i,e],[t,s]){const o=Se(i,t);return o===0?Se(e,s):o}class D1{constructor(e){this.Er=e,this.buffer=new mt(vg),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();vg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class V1{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ne(yg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){wo(t)?ne(yg,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.mr(3e5)}))}}class b1{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(Ku.le);const s=new D1(t);return this.gr.forEachTarget(e,(o=>s.Rr(o.sequenceNumber))).next((()=>this.gr.yr(e,(o=>s.Rr(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.gr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(gg)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gg):this.wr(e,t)))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let s,o,u,h,m,g,_;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((C=>(C>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),o=this.params.maximumSequenceNumbersToCollect):o=C,h=Date.now(),this.nthSequenceNumber(e,o)))).next((C=>(s=C,m=Date.now(),this.removeTargets(e,s,t)))).next((C=>(u=C,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((C=>(_=Date.now(),Ys()<=Re.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(m-h)+`ms
	Removed ${u} targets in `+(g-m)+`ms
	Removed ${C} documents in `+(_-g)+`ms
Total Duration: ${_-w}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:C}))))}}function O1(i,e){return new b1(i,e)}/**
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
 */class L1{constructor(){this.changes=new ns((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?$.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class M1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class F1{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&Ra(s.mutation,o,On.empty(),pt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ke()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ke()){const o=Ki();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((u=>{let h=Ea();return u.forEach(((m,g)=>{h=h.insert(m,g.overlayedDocument)})),h}))))}getOverlayedDocuments(e,t){const s=Ki();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ke())))}populateOverlays(e,t,s){const o=[];return s.forEach((u=>{t.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(e,o).next((u=>{u.forEach(((h,m)=>{t.set(h,m)}))}))}computeViews(e,t,s,o){let u=Ar();const h=Ca(),m=(function(){return Ca()})();return t.forEach(((g,_)=>{const w=s.get(_.key);o.has(_.key)&&(w===void 0||w.mutation instanceof rs)?u=u.insert(_.key,_):w!==void 0?(h.set(_.key,w.mutation.getFieldMask()),Ra(w.mutation,_,w.mutation.getFieldMask(),pt.now())):h.set(_.key,On.empty())})),this.recalculateAndSaveOverlays(e,u).next((g=>(g.forEach(((_,w)=>h.set(_,w))),t.forEach(((_,w)=>{var C;return m.set(_,new M1(w,(C=h.get(_))!==null&&C!==void 0?C:null))})),m)))}recalculateAndSaveOverlays(e,t){const s=Ca();let o=new et(((h,m)=>h-m)),u=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((h=>{for(const m of h)m.keys().forEach((g=>{const _=t.get(g);if(_===null)return;let w=s.get(g)||On.empty();w=m.applyToLocalView(_,w),s.set(g,w);const C=(o.get(m.batchId)||ke()).add(g);o=o.insert(m.batchId,C)}))})).next((()=>{const h=[],m=o.getReverseIterator();for(;m.hasNext();){const g=m.getNext(),_=g.key,w=g.value,C=tv();w.forEach((x=>{if(!u.has(x)){const B=av(t.get(x),s.get(x));B!==null&&C.set(x,B),u=u.add(x)}})),h.push(this.documentOverlayCache.saveOverlays(e,_,C))}return $.waitFor(h)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(h){return fe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):$.resolve(Ki());let m=Na,g=u;return h.next((_=>$.forEach(_,((w,C)=>(m<C.largestBatchId&&(m=C.largestBatchId),u.get(w)?$.resolve():this.remoteDocumentCache.getEntry(e,w).next((x=>{g=g.insert(w,x)}))))).next((()=>this.populateOverlays(e,_,u))).next((()=>this.computeViews(e,g,_,ke()))).next((w=>({batchId:m,changes:ev(w)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new fe(t)).next((s=>{let o=Ea();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Ea();return this.indexManager.getCollectionParents(e,u).next((m=>$.forEach(m,(g=>{const _=(function(C,x){return new Xu(x,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)})(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next((w=>{w.forEach(((C,x)=>{h=h.insert(C,x)}))}))})).next((()=>h))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o)))).next((h=>{u.forEach(((g,_)=>{const w=_.getKey();h.get(w)===null&&(h=h.insert(w,Mt.newInvalidDocument(w)))}));let m=Ea();return h.forEach(((g,_)=>{const w=u.get(g);w!==void 0&&Ra(w.mutation,_,On.empty(),pt.now()),Ju(t,_)&&(m=m.insert(g,_))})),m}))}}/**
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
 */class j1{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return $.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:Jn(o.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,(function(o){return{name:o.name,query:k1(o.bundledQuery),readTime:Jn(o.readTime)}})(t)),$.resolve()}}/**
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
 */class U1{constructor(){this.overlays=new et(fe.comparator),this.Qr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ki();return $.forEach(t,(o=>this.getOverlay(e,o).next((u=>{u!==null&&s.set(o,u)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,u)=>{this.St(e,t,u)})),$.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Qr.get(s);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.Qr.delete(s)),$.resolve()}getOverlaysForCollection(e,t,s){const o=Ki(),u=t.length+1,h=new fe(t.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const g=m.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new et(((_,w)=>_-w));const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let w=u.get(_.largestBatchId);w===null&&(w=Ki(),u=u.insert(_.largestBatchId,w)),w.set(_.getKey(),_)}}const m=Ki(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,w)=>m.set(_,w))),!(m.size()>=o)););return $.resolve(m)}St(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Qr.get(o.largestBatchId).delete(s.key);this.Qr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new s1(t,s));let u=this.Qr.get(t);u===void 0&&(u=ke(),this.Qr.set(t,u)),this.Qr.set(t,u.add(s.key))}}/**
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
 */class z1{constructor(){this.sessionToken=kt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
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
 */class jd{constructor(){this.$r=new mt(wt.Ur),this.Kr=new mt(wt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const s=new wt(e,t);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.zr(new wt(e,t))}jr(e,t){e.forEach((s=>this.removeReference(s,t)))}Hr(e){const t=new fe(new Ye([])),s=new wt(t,e),o=new wt(t,e+1),u=[];return this.Kr.forEachInRange([s,o],(h=>{this.zr(h),u.push(h.key)})),u}Jr(){this.$r.forEach((e=>this.zr(e)))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new fe(new Ye([])),s=new wt(t,e),o=new wt(t,e+1);let u=ke();return this.Kr.forEachInRange([s,o],(h=>{u=u.add(h.key)})),u}containsKey(e){const t=new wt(e,0),s=this.$r.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class wt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return fe.comparator(e.key,t.key)||Se(e.Zr,t.Zr)}static Wr(e,t){return Se(e.Zr,t.Zr)||fe.comparator(e.key,t.key)}}/**
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
 */class B1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new mt(wt.Ur)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new i1(u,t,s,o);this.mutationQueue.push(h);for(const m of o)this.Xr=this.Xr.add(new wt(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return $.resolve(h)}lookupMutationBatch(e,t){return $.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.ti(s),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?kd:this.nr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new wt(t,0),o=new wt(t,Number.POSITIVE_INFINITY),u=[];return this.Xr.forEachInRange([s,o],(h=>{const m=this.ei(h.Zr);u.push(m)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new mt(Se);return t.forEach((o=>{const u=new wt(o,0),h=new wt(o,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([u,h],(m=>{s=s.add(m.Zr)}))})),$.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;fe.isDocumentKey(u)||(u=u.child(""));const h=new wt(new fe(u),0);let m=new mt(Se);return this.Xr.forEachWhile((g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(m=m.add(g.Zr)),!0)}),h),$.resolve(this.ni(m))}ni(e){const t=[];return e.forEach((s=>{const o=this.ei(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Fe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return $.forEach(t.mutations,(o=>{const u=new wt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Xr=s}))}sr(e){}containsKey(e,t){const s=new wt(t,0),o=this.Xr.firstAfterOrEqual(s);return $.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class $1{constructor(e){this.ii=e,this.docs=(function(){return new et(fe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.ii(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return $.resolve(s?s.document.mutableCopy():Mt.newInvalidDocument(t))}getEntries(e,t){let s=Ar();return t.forEach((o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mt.newInvalidDocument(o))})),$.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Ar();const h=t.path,m=new fe(h.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(m);for(;g.hasNext();){const{key:_,value:{document:w}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||vT(yT(w),s)<=0||(o.has(w.key)||Ju(t,w))&&(u=u.insert(w.key,w.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ge(9500)}si(e,t){return $.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new H1(this)}getSize(e){return $.resolve(this.size)}}class H1 extends L1{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Br.addEntry(e,o)):this.Br.removeEntry(s)})),$.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class q1{constructor(e){this.persistence=e,this.oi=new ns((t=>Nd(t)),Dd),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this._i=0,this.ai=new jd,this.targetCount=0,this.ui=fo.cr()}forEachTarget(e,t){return this.oi.forEach(((s,o)=>t(o))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this._i&&(this._i=t),$.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new fo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.Tr(t),$.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.oi.forEach(((h,m)=>{m.sequenceNumber<=t&&s.get(m.targetId)===null&&(this.oi.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const s=this.oi.get(t)||null;return $.resolve(s)}addMatchingKeys(e,t,s){return this.ai.Gr(t,s),$.resolve()}removeMatchingKeys(e,t,s){this.ai.jr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach((h=>{u.push(o.markPotentiallyOrphaned(e,h))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ai.Yr(t);return $.resolve(s)}containsKey(e,t){return $.resolve(this.ai.containsKey(t))}}/**
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
 */class Ev{constructor(e,t){this.ci={},this.overlays={},this.li=new Ku(0),this.hi=!1,this.hi=!0,this.Pi=new z1,this.referenceDelegate=e(this),this.Ti=new q1(this),this.indexManager=new P1,this.remoteDocumentCache=(function(o){return new $1(o)})((s=>this.referenceDelegate.Ii(s))),this.serializer=new R1(t),this.Ei=new j1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new U1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ci[e.toKey()];return s||(s=new B1(t,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,s){ne("MemoryPersistence","Starting transaction:",e);const o=new W1(this.li.next());return this.referenceDelegate.di(),s(o).next((u=>this.referenceDelegate.Ai(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ri(e,t){return $.or(Object.values(this.ci).map((s=>()=>s.containsKey(e,t))))}}class W1 extends ET{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Vi=new jd,this.mi=null}static fi(e){return new Ud(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,t,s){return this.Vi.addReference(s,t),this.gi.delete(s.toString()),$.resolve()}removeReference(e,t,s){return this.Vi.removeReference(s,t),this.gi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),$.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach((o=>this.gi.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((u=>this.gi.add(u.toString())))})).next((()=>s.removeTargetData(e,t)))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,(s=>{const o=fe.fromPath(s);return this.pi(e,o).next((u=>{u||t.removeEntry(o,_e.min())}))})).next((()=>(this.mi=null,t.apply(e))))}updateLimboDocument(e,t){return this.pi(e,t).next((s=>{s?this.gi.delete(t.toString()):this.gi.add(t.toString())}))}Ii(e){return 0}pi(e,t){return $.or([()=>$.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class Lu{constructor(e,t){this.persistence=e,this.yi=new ns((s=>IT(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=O1(this,t)}static fi(e,t){return new Lu(e,t)}di(){}Ai(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}br(e){let t=0;return this.yr(e,(s=>{t++})).next((()=>t))}yr(e,t){return $.forEach(this.yi,((s,o)=>this.Dr(e,s,o).next((u=>u?$.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.si(e,(h=>this.Dr(e,h,t).next((m=>{m||(s++,u.removeEntry(h,_e.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,t,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),$.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=yu(e.data.value)),t}Dr(e,t,s){return $.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.yi.get(t);return $.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zd{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.ds=s,this.As=o}static Rs(e,t){let s=ke(),o=ke();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new zd(e,t.fromCache,s,o)}}/**
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
 */class K1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class G1{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=(function(){return $E()?8:wT(Ft())>0?6:4})()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.ws(e,t).next((h=>{u.result=h})).next((()=>{if(!u.result)return this.bs(e,t,o,s).next((h=>{u.result=h}))})).next((()=>{if(u.result)return;const h=new K1;return this.Ss(e,t,h).next((m=>{if(u.result=m,this.fs)return this.Ds(e,t,h,m.size)}))})).next((()=>u.result))}Ds(e,t,s,o){return s.documentReadCount<this.gs?(Ys()<=Re.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",Js(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(Ys()<=Re.DEBUG&&ne("QueryEngine","Query:",Js(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ps*o?(Ys()<=Re.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",Js(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(t))):$.resolve())}ws(e,t){if(og(t))return $.resolve(null);let s=Yn(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=cd(t,null,"F"),s=Yn(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const h=ke(...u);return this.ys.getDocuments(e,h).next((m=>this.indexManager.getMinOffset(e,s).next((g=>{const _=this.vs(t,m);return this.Cs(t,_,h,g.readTime)?this.ws(e,cd(t,null,"F")):this.Fs(e,_,t,g)}))))})))))}bs(e,t,s,o){return og(t)||o.isEqual(_e.min())?$.resolve(null):this.ys.getDocuments(e,s).next((u=>{const h=this.vs(t,u);return this.Cs(t,h,s,o)?$.resolve(null):(Ys()<=Re.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Js(t)),this.Fs(e,h,t,gT(o,Na)).next((m=>m)))}))}vs(e,t){let s=new mt(Jy(e));return t.forEach(((o,u)=>{Ju(e,u)&&(s=s.add(u))})),s}Cs(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(e,t,s){return Ys()<=Re.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",Js(t)),this.ys.getDocumentsMatchingQuery(e,t,di.min(),s)}Fs(e,t,s,o){return this.ys.getDocumentsMatchingQuery(e,s,o).next((u=>(t.forEach((h=>{u=u.insert(h.key,h)})),u)))}}/**
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
 */const Bd="LocalStore",Q1=3e8;class X1{constructor(e,t,s,o){this.persistence=e,this.Ms=t,this.serializer=o,this.xs=new et(Se),this.Os=new ns((u=>Nd(u)),Dd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F1(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.xs)))}}function Y1(i,e,t,s){return new X1(i,e,t,s)}async function wv(i,e){const t=Ee(i);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((u=>(o=u,t.Ls(e),t.mutationQueue.getAllMutationBatches(s)))).next((u=>{const h=[],m=[];let g=ke();for(const _ of o){h.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}for(const _ of u){m.push(_.batchId);for(const w of _.mutations)g=g.add(w.key)}return t.localDocuments.getDocuments(s,g).next((_=>({ks:_,removedBatchIds:h,addedBatchIds:m})))}))}))}function J1(i,e){const t=Ee(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const o=e.batch.keys(),u=t.Bs.newChangeBuffer({trackRemovals:!0});return(function(m,g,_,w){const C=_.batch,x=C.keys();let B=$.resolve();return x.forEach((z=>{B=B.next((()=>w.getEntry(g,z))).next((X=>{const q=_.docVersions.get(z);Fe(q!==null,48541),X.version.compareTo(q)<0&&(C.applyToRemoteDocument(X,_),X.isValidDocument()&&(X.setReadTime(_.commitVersion),w.addEntry(X)))}))})),B.next((()=>m.mutationQueue.removeMutationBatch(g,C)))})(t,s,e,u).next((()=>u.apply(s))).next((()=>t.mutationQueue.performConsistencyCheck(s))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(m){let g=ke();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(g=g.add(m.batch.mutations[_].key));return g})(e)))).next((()=>t.localDocuments.getDocuments(s,o)))}))}function Tv(i){const e=Ee(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ti.getLastRemoteSnapshotVersion(t)))}function Z1(i,e){const t=Ee(i),s=e.snapshotVersion;let o=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const h=t.Bs.newChangeBuffer({trackRemovals:!0});o=t.xs;const m=[];e.targetChanges.forEach(((w,C)=>{const x=o.get(C);if(!x)return;m.push(t.Ti.removeMatchingKeys(u,w.removedDocuments,C).next((()=>t.Ti.addMatchingKeys(u,w.addedDocuments,C))));let B=x.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(C)!==null?B=B.withResumeToken(kt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):w.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(w.resumeToken,s)),o=o.insert(C,B),(function(X,q,me){return X.resumeToken.approximateByteSize()===0||q.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=Q1?!0:me.addedDocuments.size+me.modifiedDocuments.size+me.removedDocuments.size>0})(x,B,w)&&m.push(t.Ti.updateTargetData(u,B))}));let g=Ar(),_=ke();if(e.documentUpdates.forEach((w=>{e.resolvedLimboDocuments.has(w)&&m.push(t.persistence.referenceDelegate.updateLimboDocument(u,w))})),m.push(eI(u,h,e.documentUpdates).next((w=>{g=w.qs,_=w.Qs}))),!s.isEqual(_e.min())){const w=t.Ti.getLastRemoteSnapshotVersion(u).next((C=>t.Ti.setTargetsMetadata(u,u.currentSequenceNumber,s)));m.push(w)}return $.waitFor(m).next((()=>h.apply(u))).next((()=>t.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(t.xs=o,u)))}function eI(i,e,t){let s=ke(),o=ke();return t.forEach((u=>s=s.add(u))),e.getEntries(i,s).next((u=>{let h=Ar();return t.forEach(((m,g)=>{const _=u.get(m);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(m)),g.isNoDocument()&&g.version.isEqual(_e.min())?(e.removeEntry(m,g.readTime),h=h.insert(m,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(m,g)):ne(Bd,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",g.version)})),{qs:h,Qs:o}}))}function tI(i,e){const t=Ee(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=kd),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function nI(i,e){const t=Ee(i);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Ti.getTargetData(s,e).next((u=>u?(o=u,$.resolve(o)):t.Ti.allocateTargetId(s).next((h=>(o=new si(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Ti.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.xs.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.xs=t.xs.insert(s.targetId,s),t.Os.set(e,s.targetId)),s}))}async function md(i,e,t){const s=Ee(i),o=s.xs.get(e),u=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",u,(h=>s.persistence.referenceDelegate.removeTarget(h,o)))}catch(h){if(!wo(h))throw h;ne(Bd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.xs=s.xs.remove(e),s.Os.delete(o.target)}function _g(i,e,t){const s=Ee(i);let o=_e.min(),u=ke();return s.persistence.runTransaction("Execute query","readwrite",(h=>(function(g,_,w){const C=Ee(g),x=C.Os.get(w);return x!==void 0?$.resolve(C.xs.get(x)):C.Ti.getTargetData(_,w)})(s,h,Yn(e)).next((m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(h,m.targetId).next((g=>{u=g}))})).next((()=>s.Ms.getDocumentsMatchingQuery(h,e,t?o:_e.min(),t?u:ke()))).next((m=>(rI(s,$T(e),m),{documents:m,$s:u})))))}function rI(i,e,t){let s=i.Ns.get(e)||_e.min();t.forEach(((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),i.Ns.set(e,s)}class Eg{constructor(){this.activeTargetIds=QT()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iI{constructor(){this.xo=new Eg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,s){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Eg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sI{No(e){}shutdown(){}}/**
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
 */const wg="ConnectivityMonitor";class Tg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ne(wg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ne(wg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pu=null;function gd(){return pu===null?pu=(function(){return 268435456+Math.round(2147483648*Math.random())})():pu++,"0x"+pu.toString(16)}/**
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
 */const Wh="RestConnection",oI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aI{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${s}/databases/${o}`,this.Go=this.databaseId.database===Pu?`project_id=${s}`:`project_id=${s}&database_id=${o}`}zo(e,t,s,o,u){const h=gd(),m=this.jo(e,t.toUriEncodedString());ne(Wh,`Sending RPC '${e}' ${h}:`,m,s);const g={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(g,o,u);const{host:_}=new URL(m),w=Fa(_);return this.Jo(e,m,g,s,w).then((C=>(ne(Wh,`Received RPC '${e}' ${h}: `,C),C)),(C=>{throw lo(Wh,`RPC '${e}' ${h} failed with error: `,C,"url: ",m,"request:",s),C}))}Yo(e,t,s,o,u,h){return this.zo(e,t,s,o,u)}Ho(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_o})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,u)=>e[u]=o)),s&&s.headers.forEach(((o,u)=>e[u]=o))}jo(e,t){const s=oI[e];return`${this.Ko}/v1/${t}:${s}`}terminate(){}}/**
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
 */class lI{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ot="WebChannelConnection";class uI extends aI{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,s,o,u){const h=gd();return new Promise(((m,g)=>{const _=new Cy;_.setWithCredentials(!0),_.listenOnce(Ry.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case gu.NO_ERROR:const C=_.getResponseJson();ne(Ot,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(C)),m(C);break;case gu.TIMEOUT:ne(Ot,`RPC '${e}' ${h} timed out`),g(new ue(G.DEADLINE_EXCEEDED,"Request time out"));break;case gu.HTTP_ERROR:const x=_.getStatus();if(ne(Ot,`RPC '${e}' ${h} failed with status:`,x,"response text:",_.getResponseText()),x>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const z=B==null?void 0:B.error;if(z&&z.status&&z.message){const X=(function(me){const ce=me.toLowerCase().replace(/_/g,"-");return Object.values(G).indexOf(ce)>=0?ce:G.UNKNOWN})(z.status);g(new ue(X,z.message))}else g(new ue(G.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new ue(G.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{h_:e,streamId:h,P_:_.getLastErrorCode(),T_:_.getLastError()})}}finally{ne(Ot,`RPC '${e}' ${h} completed.`)}}));const w=JSON.stringify(o);ne(Ot,`RPC '${e}' ${h} sending request:`,o),_.send(t,"POST",w,s,15)}))}I_(e,t,s){const o=gd(),u=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=xy(),m=Py(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Ho(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const w=u.join("");ne(Ot,`Creating RPC '${e}' stream ${o}: ${w}`,g);const C=h.createWebChannel(w,g);this.E_(C);let x=!1,B=!1;const z=new lI({Zo:q=>{B?ne(Ot,`Not sending because RPC '${e}' stream ${o} is closed:`,q):(x||(ne(Ot,`Opening RPC '${e}' stream ${o} transport.`),C.open(),x=!0),ne(Ot,`RPC '${e}' stream ${o} sending:`,q),C.send(q))},Xo:()=>C.close()}),X=(q,me,ce)=>{q.listen(me,(pe=>{try{ce(pe)}catch(we){setTimeout((()=>{throw we}),0)}}))};return X(C,_a.EventType.OPEN,(()=>{B||(ne(Ot,`RPC '${e}' stream ${o} transport opened.`),z.__())})),X(C,_a.EventType.CLOSE,(()=>{B||(B=!0,ne(Ot,`RPC '${e}' stream ${o} transport closed`),z.u_(),this.d_(C))})),X(C,_a.EventType.ERROR,(q=>{B||(B=!0,lo(Ot,`RPC '${e}' stream ${o} transport errored. Name:`,q.name,"Message:",q.message),z.u_(new ue(G.UNAVAILABLE,"The operation could not be completed")))})),X(C,_a.EventType.MESSAGE,(q=>{var me;if(!B){const ce=q.data[0];Fe(!!ce,16349);const pe=ce,we=(pe==null?void 0:pe.error)||((me=pe[0])===null||me===void 0?void 0:me.error);if(we){ne(Ot,`RPC '${e}' stream ${o} received error:`,we);const ze=we.status;let Te=(function(T){const R=at[T];if(R!==void 0)return uv(R)})(ze),V=we.message;Te===void 0&&(Te=G.INTERNAL,V="Unknown error status: "+ze+" with message "+we.message),B=!0,z.u_(new ue(Te,V)),C.close()}else ne(Ot,`RPC '${e}' stream ${o} received:`,ce),z.c_(ce)}})),X(m,ky.STAT_EVENT,(q=>{q.stat===id.PROXY?ne(Ot,`RPC '${e}' stream ${o} detected buffering proxy`):q.stat===id.NOPROXY&&ne(Ot,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{z.a_()}),0),z}terminate(){this.l_.forEach((e=>e.close())),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter((t=>t===e))}}function Kh(){return typeof document<"u"?document:null}/**
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
 */function nc(i){return new f1(i,!0)}/**
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
 */class Iv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.xi=e,this.timerId=t,this.A_=s,this.R_=o,this.V_=u,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),o=Math.max(0,t-s);o>0&&ne("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,o,(()=>(this.g_=Date.now(),e()))),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Ig="PersistentStream";class Sv{constructor(e,t,s,o,u,h,m,g){this.xi=e,this.S_=s,this.D_=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=g,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Iv(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,(()=>this.q_())))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===G.RESOURCE_EXHAUSTED?(Sr(t.toString()),Sr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===G.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.v_===t&&this.z_(s,o)}),(s=>{e((()=>{const o=new ue(G.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(o)}))}))}z_(e,t){const s=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_((()=>{s((()=>this.listener.e_()))})),this.stream.n_((()=>{s((()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,(()=>(this.N_()&&(this.state=3),Promise.resolve()))),this.listener.n_())))})),this.stream.i_((o=>{s((()=>this.j_(o)))})),this.stream.onMessage((o=>{s((()=>++this.M_==1?this.J_(o):this.onNext(o)))}))}B_(){this.state=5,this.x_.y_((async()=>{this.state=0,this.start()}))}j_(e){return ne(Ig,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget((()=>this.v_===e?t():(ne(Ig,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cI extends Sv{constructor(e,t,s,o,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=g1(this.serializer,e),s=(function(u){if(!("targetChange"in u))return _e.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?_e.min():h.readTime?Jn(h.readTime):_e.min()})(e);return this.listener.Y_(t,s)}Z_(e){const t={};t.database=pd(this.serializer),t.addTarget=(function(u,h){let m;const g=h.target;if(m=ud(g)?{documents:_1(u,g)}:{query:E1(u,g).gt},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=dv(u,h.resumeToken);const _=hd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(_e.min())>0){m.readTime=Ou(u,h.snapshotVersion.toTimestamp());const _=hd(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m})(this.serializer,e);const s=T1(this.serializer,e);s&&(t.labels=s),this.Q_(t)}X_(e){const t={};t.database=pd(this.serializer),t.removeTarget=e,this.Q_(t)}}class hI extends Sv{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=v1(e.writeResults,e.commitTime),s=Jn(e.commitTime);return this.listener.ra(s,t)}ia(){const e={};e.database=pd(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map((s=>y1(this.serializer,s)))};this.Q_(t)}}/**
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
 */class dI{}class fI extends dI{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.sa=!1}oa(){if(this.sa)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,s,o){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.zo(e,dd(t,s),o,u,h))).catch((u=>{throw u.name==="FirebaseError"?(u.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ue(G.UNKNOWN,u.toString())}))}Yo(e,t,s,o,u){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([h,m])=>this.connection.Yo(e,dd(t,s),o,h,m,u))).catch((h=>{throw h.name==="FirebaseError"?(h.code===G.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ue(G.UNKNOWN,h.toString())}))}terminate(){this.sa=!0,this.connection.terminate()}}class pI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve()))))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Sr(t),this.ua=!1):ne("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Zi="RemoteStore";class mI{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=u,this.Ra.No((h=>{s.enqueueAndForget((async()=>{is(this)&&(ne(Zi,"Restarting streams for network reachability change."),await(async function(g){const _=Ee(g);_.da.add(4),await $a(_),_.Va.set("Unknown"),_.da.delete(4),await rc(_)})(this))}))})),this.Va=new pI(s,o)}}async function rc(i){if(is(i))for(const e of i.Aa)await e(!0)}async function $a(i){for(const e of i.Aa)await e(!1)}function Av(i,e){const t=Ee(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Wd(t)?qd(t):To(t).N_()&&Hd(t,e))}function $d(i,e){const t=Ee(i),s=To(t);t.Ea.delete(e),s.N_()&&Cv(t,e),t.Ea.size===0&&(s.N_()?s.k_():is(t)&&t.Va.set("Unknown"))}function Hd(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}To(i).Z_(e)}function Cv(i,e){i.ma.Ke(e),To(i).X_(e)}function qd(i){i.ma=new u1({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),To(i).start(),i.Va.ca()}function Wd(i){return is(i)&&!To(i).O_()&&i.Ea.size>0}function is(i){return Ee(i).da.size===0}function Rv(i){i.ma=void 0}async function gI(i){i.Va.set("Online")}async function yI(i){i.Ea.forEach(((e,t)=>{Hd(i,e)}))}async function vI(i,e){Rv(i),Wd(i)?(i.Va.Pa(e),qd(i)):i.Va.set("Unknown")}async function _I(i,e,t){if(i.Va.set("Online"),e instanceof hv&&e.state===2&&e.cause)try{await(async function(o,u){const h=u.cause;for(const m of u.targetIds)o.Ea.has(m)&&(await o.remoteSyncer.rejectListen(m,h),o.Ea.delete(m),o.ma.removeTarget(m))})(i,e)}catch(s){ne(Zi,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Mu(i,s)}else if(e instanceof Eu?i.ma.Xe(e):e instanceof cv?i.ma.ot(e):i.ma.nt(e),!t.isEqual(_e.min()))try{const s=await Tv(i.localStore);t.compareTo(s)>=0&&await(function(u,h){const m=u.ma.It(h);return m.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const w=u.Ea.get(_);w&&u.Ea.set(_,w.withResumeToken(g.resumeToken,h))}})),m.targetMismatches.forEach(((g,_)=>{const w=u.Ea.get(g);if(!w)return;u.Ea.set(g,w.withResumeToken(kt.EMPTY_BYTE_STRING,w.snapshotVersion)),Cv(u,g);const C=new si(w.target,g,_,w.sequenceNumber);Hd(u,C)})),u.remoteSyncer.applyRemoteEvent(m)})(i,t)}catch(s){ne(Zi,"Failed to raise snapshot:",s),await Mu(i,s)}}async function Mu(i,e,t){if(!wo(e))throw e;i.da.add(1),await $a(i),i.Va.set("Offline"),t||(t=()=>Tv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{ne(Zi,"Retrying IndexedDB access"),await t(),i.da.delete(1),await rc(i)}))}function kv(i,e){return e().catch((t=>Mu(i,t,e)))}async function ic(i){const e=Ee(i),t=gi(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:kd;for(;EI(e);)try{const o=await tI(e.localStore,s);if(o===null){e.Ia.length===0&&t.k_();break}s=o.batchId,wI(e,o)}catch(o){await Mu(e,o)}Pv(e)&&xv(e)}function EI(i){return is(i)&&i.Ia.length<10}function wI(i,e){i.Ia.push(e);const t=gi(i);t.N_()&&t.ea&&t.ta(e.mutations)}function Pv(i){return is(i)&&!gi(i).O_()&&i.Ia.length>0}function xv(i){gi(i).start()}async function TI(i){gi(i).ia()}async function II(i){const e=gi(i);for(const t of i.Ia)e.ta(t.mutations)}async function SI(i,e,t){const s=i.Ia.shift(),o=Ld.from(s,e,t);await kv(i,(()=>i.remoteSyncer.applySuccessfulWrite(o))),await ic(i)}async function AI(i,e){e&&gi(i).ea&&await(async function(s,o){if((function(h){return a1(h)&&h!==G.ABORTED})(o.code)){const u=s.Ia.shift();gi(s).L_(),await kv(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o))),await ic(s)}})(i,e),Pv(i)&&xv(i)}async function Sg(i,e){const t=Ee(i);t.asyncQueue.verifyOperationInProgress(),ne(Zi,"RemoteStore received new credentials");const s=is(t);t.da.add(3),await $a(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await rc(t)}async function CI(i,e){const t=Ee(i);e?(t.da.delete(2),await rc(t)):e||(t.da.add(2),await $a(t),t.Va.set("Unknown"))}function To(i){return i.fa||(i.fa=(function(t,s,o){const u=Ee(t);return u.oa(),new cI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{e_:gI.bind(null,i),n_:yI.bind(null,i),i_:vI.bind(null,i),Y_:_I.bind(null,i)}),i.Aa.push((async e=>{e?(i.fa.L_(),Wd(i)?qd(i):i.Va.set("Unknown")):(await i.fa.stop(),Rv(i))}))),i.fa}function gi(i){return i.ga||(i.ga=(function(t,s,o){const u=Ee(t);return u.oa(),new hI(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:TI.bind(null,i),i_:AI.bind(null,i),na:II.bind(null,i),ra:SI.bind(null,i)}),i.Aa.push((async e=>{e?(i.ga.L_(),await ic(i)):(await i.ga.stop(),i.Ia.length>0&&(ne(Zi,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))}))),i.ga}/**
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
 */class Kd{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Gi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,m=new Kd(e,t,h,o,u);return m.start(s),m}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(G.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gd(i,e){if(Sr("AsyncQueue",`${e}: ${i}`),wo(i))return new ue(G.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class ro{static emptySet(e){return new ro(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||fe.comparator(t.key,s.key):(t,s)=>fe.comparator(t.key,s.key),this.keyedMap=Ea(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ro)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ro;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class Ag{constructor(){this.pa=new et(fe.comparator)}track(e){const t=e.doc.key,s=this.pa.get(t);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(t,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(t):e.type===1&&s.type===2?this.pa=this.pa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):ge(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal(((t,s)=>{e.push(s)})),e}}class po{constructor(e,t,s,o,u,h,m,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,u){const h=[];return t.forEach((m=>{h.push({type:0,doc:m})})),new po(e,t,ro.emptySet(t),h,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
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
 */class RI{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some((e=>e.va()))}}class kI{constructor(){this.queries=Cg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const o=Ee(t),u=o.queries;o.queries=Cg(),u.forEach(((h,m)=>{for(const g of m.Sa)g.onError(s)}))})(this,new ue(G.ABORTED,"Firestore shutting down"))}}function Cg(){return new ns((i=>Yy(i)),Yu)}async function PI(i,e){const t=Ee(i);let s=3;const o=e.query;let u=t.queries.get(o);u?!u.Da()&&e.va()&&(s=2):(u=new RI,s=e.va()?0:1);try{switch(s){case 0:u.ba=await t.onListen(o,!0);break;case 1:u.ba=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const m=Gd(h,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(m)}t.queries.set(o,u),u.Sa.push(e),e.Fa(t.onlineState),u.ba&&e.Ma(u.ba)&&Qd(t)}async function xI(i,e){const t=Ee(i),s=e.query;let o=3;const u=t.queries.get(s);if(u){const h=u.Sa.indexOf(e);h>=0&&(u.Sa.splice(h,1),u.Sa.length===0?o=e.va()?0:1:!u.Da()&&e.va()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NI(i,e){const t=Ee(i);let s=!1;for(const o of e){const u=o.query,h=t.queries.get(u);if(h){for(const m of h.Sa)m.Ma(o)&&(s=!0);h.ba=o}}s&&Qd(t)}function DI(i,e,t){const s=Ee(i),o=s.queries.get(e);if(o)for(const u of o.Sa)u.onError(t);s.queries.delete(e)}function Qd(i){i.Ca.forEach((e=>{e.next()}))}var yd,Rg;(Rg=yd||(yd={})).xa="default",Rg.Cache="cache";class VI{constructor(e,t,s){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new po(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const s=t!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=po.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==yd.Cache}}/**
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
 */class Nv{constructor(e){this.key=e}}class Dv{constructor(e){this.key=e}}class bI{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ke(),this.mutatedKeys=ke(),this.Za=Jy(e),this.Xa=new ro(this.Za)}get eu(){return this.Ha}tu(e,t){const s=t?t.nu:new Ag,o=t?t.Xa:this.Xa;let u=t?t.mutatedKeys:this.mutatedKeys,h=o,m=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((w,C)=>{const x=o.get(w),B=Ju(this.query,C)?C:null,z=!!x&&this.mutatedKeys.has(x.key),X=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let q=!1;x&&B?x.data.isEqual(B.data)?z!==X&&(s.track({type:3,doc:B}),q=!0):this.ru(x,B)||(s.track({type:2,doc:B}),q=!0,(g&&this.Za(B,g)>0||_&&this.Za(B,_)<0)&&(m=!0)):!x&&B?(s.track({type:0,doc:B}),q=!0):x&&!B&&(s.track({type:1,doc:x}),q=!0,(g||_)&&(m=!0)),q&&(B?(h=h.add(B),u=X?u.add(w):u.delete(w)):(h=h.delete(w),u=u.delete(w)))})),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),u=u.delete(w.key),s.track({type:1,doc:w})}return{Xa:h,nu:s,Cs:m,mutatedKeys:u}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const u=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const h=e.nu.wa();h.sort(((w,C)=>(function(B,z){const X=q=>{switch(q){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge(20277,{Vt:q})}};return X(B)-X(z)})(w.type,C.type)||this.Za(w.doc,C.doc))),this.iu(s),o=o!=null&&o;const m=t&&!o?this.su():[],g=this.Ya.size===0&&this.current&&!o?1:0,_=g!==this.Ja;return this.Ja=g,h.length!==0||_?{snapshot:new po(this.query,e.Xa,u,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:m}:{ou:m}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Ag,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=ke(),this.Xa.forEach((s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Dv(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new Nv(s))})),t}au(e){this.Ha=e.$s,this.Ya=ke();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return po.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Xd="SyncEngine";class OI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class LI{constructor(e){this.key=e,this.cu=!1}}class MI{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.lu={},this.hu=new ns((m=>Yy(m)),Yu),this.Pu=new Map,this.Tu=new Set,this.Iu=new et(fe.comparator),this.Eu=new Map,this.du=new jd,this.Au={},this.Ru=new Map,this.Vu=fo.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function FI(i,e,t=!0){const s=Fv(i);let o;const u=s.hu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.uu()):o=await Vv(s,e,t,!0),o}async function jI(i,e){const t=Fv(i);await Vv(t,e,!0,!1)}async function Vv(i,e,t,s){const o=await nI(i.localStore,Yn(e)),u=o.targetId,h=i.sharedClientState.addLocalQueryTarget(u,t);let m;return s&&(m=await UI(i,e,u,h==="current",o.resumeToken)),i.isPrimaryClient&&t&&Av(i.remoteStore,o),m}async function UI(i,e,t,s,o){i.fu=(C,x,B)=>(async function(X,q,me,ce){let pe=q.view.tu(me);pe.Cs&&(pe=await _g(X.localStore,q.query,!1).then((({documents:V})=>q.view.tu(V,pe))));const we=ce&&ce.targetChanges.get(q.targetId),ze=ce&&ce.targetMismatches.get(q.targetId)!=null,Te=q.view.applyChanges(pe,X.isPrimaryClient,we,ze);return Pg(X,q.targetId,Te.ou),Te.snapshot})(i,C,x,B);const u=await _g(i.localStore,e,!0),h=new bI(e,u.$s),m=h.tu(u.documents),g=Ba.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",o),_=h.applyChanges(m,i.isPrimaryClient,g);Pg(i,t,_.ou);const w=new OI(e,t,h);return i.hu.set(e,w),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),_.snapshot}async function zI(i,e,t){const s=Ee(i),o=s.hu.get(e),u=s.Pu.get(o.targetId);if(u.length>1)return s.Pu.set(o.targetId,u.filter((h=>!Yu(h,e)))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await md(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&$d(s.remoteStore,o.targetId),vd(s,o.targetId)})).catch(Eo)):(vd(s,o.targetId),await md(s.localStore,o.targetId,!0))}async function BI(i,e){const t=Ee(i),s=t.hu.get(e),o=t.Pu.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),$d(t.remoteStore,s.targetId))}async function $I(i,e,t){const s=XI(i);try{const o=await(function(h,m){const g=Ee(h),_=pt.now(),w=m.reduce(((B,z)=>B.add(z.key)),ke());let C,x;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let z=Ar(),X=ke();return g.Bs.getEntries(B,w).next((q=>{z=q,z.forEach(((me,ce)=>{ce.isValidDocument()||(X=X.add(me))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,z))).next((q=>{C=q;const me=[];for(const ce of m){const pe=n1(ce,C.get(ce.key).overlayedDocument);pe!=null&&me.push(new rs(ce.key,pe,Hy(pe.value.mapValue),Mn.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,me,m)})).next((q=>{x=q;const me=q.applyToLocalDocumentSet(C,X);return g.documentOverlayCache.saveOverlays(B,q.batchId,me)}))})).then((()=>({batchId:x.batchId,changes:ev(C)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),(function(h,m,g){let _=h.Au[h.currentUser.toKey()];_||(_=new et(Se)),_=_.insert(m,g),h.Au[h.currentUser.toKey()]=_})(s,o.batchId,t),await Ha(s,o.changes),await ic(s.remoteStore)}catch(o){const u=Gd(o,"Failed to persist write");t.reject(u)}}async function bv(i,e){const t=Ee(i);try{const s=await Z1(t.localStore,e);e.targetChanges.forEach(((o,u)=>{const h=t.Eu.get(u);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.cu=!0:o.modifiedDocuments.size>0?Fe(h.cu,14607):o.removedDocuments.size>0&&(Fe(h.cu,42227),h.cu=!1))})),await Ha(t,s,e)}catch(s){await Eo(s)}}function kg(i,e,t){const s=Ee(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.hu.forEach(((u,h)=>{const m=h.view.Fa(e);m.snapshot&&o.push(m.snapshot)})),(function(h,m){const g=Ee(h);g.onlineState=m;let _=!1;g.queries.forEach(((w,C)=>{for(const x of C.Sa)x.Fa(m)&&(_=!0)})),_&&Qd(g)})(s.eventManager,e),o.length&&s.lu.Y_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function HI(i,e,t){const s=Ee(i);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Eu.get(e),u=o&&o.key;if(u){let h=new et(fe.comparator);h=h.insert(u,Mt.newNoDocument(u,_e.min()));const m=ke().add(u),g=new tc(_e.min(),new Map,new et(Se),h,m);await bv(s,g),s.Iu=s.Iu.remove(u),s.Eu.delete(e),Yd(s)}else await md(s.localStore,e,!1).then((()=>vd(s,e,t))).catch(Eo)}async function qI(i,e){const t=Ee(i),s=e.batch.batchId;try{const o=await J1(t.localStore,e);Lv(t,s,null),Ov(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ha(t,o)}catch(o){await Eo(o)}}async function WI(i,e,t){const s=Ee(i);try{const o=await(function(h,m){const g=Ee(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let w;return g.mutationQueue.lookupMutationBatch(_,m).next((C=>(Fe(C!==null,37113),w=C.keys(),g.mutationQueue.removeMutationBatch(_,C)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,w,m))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,w))).next((()=>g.localDocuments.getDocuments(_,w)))}))})(s.localStore,e);Lv(s,e,t),Ov(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ha(s,o)}catch(o){await Eo(o)}}function Ov(i,e){(i.Ru.get(e)||[]).forEach((t=>{t.resolve()})),i.Ru.delete(e)}function Lv(i,e,t){const s=Ee(i);let o=s.Au[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.Au[s.currentUser.toKey()]=o}}function vd(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Pu.get(e))i.hu.delete(s),t&&i.lu.gu(s,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach((s=>{i.du.containsKey(s)||Mv(i,s)}))}function Mv(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&($d(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),Yd(i))}function Pg(i,e,t){for(const s of t)s instanceof Nv?(i.du.addReference(s.key,e),KI(i,s)):s instanceof Dv?(ne(Xd,"Document no longer in limbo: "+s.key),i.du.removeReference(s.key,e),i.du.containsKey(s.key)||Mv(i,s.key)):ge(19791,{pu:s})}function KI(i,e){const t=e.key,s=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(s)||(ne(Xd,"New document in limbo: "+t),i.Tu.add(s),Yd(i))}function Yd(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new fe(Ye.fromString(e)),s=i.Vu.next();i.Eu.set(s,new LI(t)),i.Iu=i.Iu.insert(t,s),Av(i.remoteStore,new si(Yn(Vd(t.path)),s,"TargetPurposeLimboResolution",Ku.le))}}async function Ha(i,e,t){const s=Ee(i),o=[],u=[],h=[];s.hu.isEmpty()||(s.hu.forEach(((m,g)=>{h.push(s.fu(g,e,t).then((_=>{var w;if((_||t)&&s.isPrimaryClient){const C=_?!_.fromCache:(w=t==null?void 0:t.targetChanges.get(g.targetId))===null||w===void 0?void 0:w.current;s.sharedClientState.updateQueryState(g.targetId,C?"current":"not-current")}if(_){o.push(_);const C=zd.Rs(g.targetId,_);u.push(C)}})))})),await Promise.all(h),s.lu.Y_(o),await(async function(g,_){const w=Ee(g);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",(C=>$.forEach(_,(x=>$.forEach(x.ds,(B=>w.persistence.referenceDelegate.addReference(C,x.targetId,B))).next((()=>$.forEach(x.As,(B=>w.persistence.referenceDelegate.removeReference(C,x.targetId,B)))))))))}catch(C){if(!wo(C))throw C;ne(Bd,"Failed to update sequence numbers: "+C)}for(const C of _){const x=C.targetId;if(!C.fromCache){const B=w.xs.get(x),z=B.snapshotVersion,X=B.withLastLimboFreeSnapshotVersion(z);w.xs=w.xs.insert(x,X)}}})(s.localStore,u))}async function GI(i,e){const t=Ee(i);if(!t.currentUser.isEqual(e)){ne(Xd,"User change. New user:",e.toKey());const s=await wv(t.localStore,e);t.currentUser=e,(function(u,h){u.Ru.forEach((m=>{m.forEach((g=>{g.reject(new ue(G.CANCELLED,h))}))})),u.Ru.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ha(t,s.ks)}}function QI(i,e){const t=Ee(i),s=t.Eu.get(e);if(s&&s.cu)return ke().add(s.key);{let o=ke();const u=t.Pu.get(e);if(!u)return o;for(const h of u){const m=t.hu.get(h);o=o.unionWith(m.view.eu)}return o}}function Fv(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=bv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=HI.bind(null,e),e.lu.Y_=NI.bind(null,e.eventManager),e.lu.gu=DI.bind(null,e.eventManager),e}function XI(i){const e=Ee(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WI.bind(null,e),e}class Fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Y1(this.persistence,new G1,e.initialUser,this.serializer)}Su(e){return new Ev(Ud.fi,this.serializer)}bu(e){return new iI}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fu.provider={build:()=>new Fu};class YI extends Fu{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Fe(this.persistence.referenceDelegate instanceof Lu,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new V1(s,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?Yt.withCacheSize(this.cacheSizeBytes):Yt.DEFAULT;return new Ev((s=>Lu.fi(s,t)),this.serializer)}}class _d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>kg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GI.bind(null,this.syncEngine),await CI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kI})()}createDatastore(e){const t=nc(e.databaseInfo.databaseId),s=(function(u){return new uI(u)})(e.databaseInfo);return(function(u,h,m,g){return new fI(u,h,m,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,u,h,m){return new mI(s,o,u,h,m)})(this.localStore,this.datastore,e.asyncQueue,(t=>kg(this.syncEngine,t,0)),(function(){return Tg.C()?new Tg:new sI})())}createSyncEngine(e,t){return(function(o,u,h,m,g,_,w){const C=new MI(o,u,h,m,g,_);return w&&(C.mu=!0),C})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const u=Ee(o);ne(Zi,"RemoteStore shutting down."),u.da.add(5),await $a(u),u.Ra.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_d.provider={build:()=>new _d};/**
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
 *//**
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
 */class JI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Sr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const yi="FirestoreClient";class ZI{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Lt.UNAUTHENTICATED,this.clientId=by.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async h=>{ne(yi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h})),this.appCheckCredentials.start(s,(h=>(ne(yi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Gi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Gd(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Gh(i,e){i.asyncQueue.verifyOperationInProgress(),ne(yi,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener((async o=>{s.isEqual(o)||(await wv(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function xg(i,e){i.asyncQueue.verifyOperationInProgress();const t=await eS(i);ne(yi,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((s=>Sg(e.remoteStore,s))),i.setAppCheckTokenChangeListener(((s,o)=>Sg(e.remoteStore,o))),i._onlineComponents=e}async function eS(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ne(yi,"Using user provided OfflineComponentProvider");try{await Gh(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===G.FAILED_PRECONDITION||o.code===G.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;lo("Error using user provided cache. Falling back to memory cache: "+t),await Gh(i,new Fu)}}else ne(yi,"Using default OfflineComponentProvider"),await Gh(i,new YI(void 0));return i._offlineComponents}async function jv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ne(yi,"Using user provided OnlineComponentProvider"),await xg(i,i._uninitializedComponentsProvider._online)):(ne(yi,"Using default OnlineComponentProvider"),await xg(i,new _d))),i._onlineComponents}function tS(i){return jv(i).then((e=>e.syncEngine))}async function Ng(i){const e=await jv(i),t=e.eventManager;return t.onListen=FI.bind(null,e.syncEngine),t.onUnlisten=zI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=jI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=BI.bind(null,e.syncEngine),t}/**
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
 */function Uv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const Dg=new Map;/**
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
 */function zv(i,e,t){if(!t)throw new ue(G.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function nS(i,e,t,s){if(e===!0&&s===!0)throw new ue(G.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Vg(i){if(!fe.isDocumentKey(i))throw new ue(G.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function bg(i){if(fe.isDocumentKey(i))throw new ue(G.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Jd(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ge(12329,{type:typeof i})}function ci(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new ue(G.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jd(i);throw new ue(G.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */const Bv="firestore.googleapis.com",Og=!0;class Lg{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(G.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bv,this.ssl=Og}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Og;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_v;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<N1)throw new ue(G.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ue(G.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class sc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(G.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(G.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new aT;switch(s.type){case"firstParty":return new hT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ue(G.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Dg.get(t);s&&(ne("ComponentProvider","Removing Datastore"),Dg.delete(t),s.terminate())})(this),Promise.resolve()}}function rS(i,e,t,s={}){var o;i=ci(i,sc);const u=Fa(e),h=i._getSettings(),m=Object.assign(Object.assign({},h),{emulatorOptions:i._getEmulatorOptions()}),g=`${e}:${t}`;u&&(yy(`https://${g}`),vy("Firestore",!0)),h.host!==Bv&&h.host!==g&&lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _=Object.assign(Object.assign({},h),{host:g,ssl:u,emulatorOptions:s});if(!Xi(_,m)&&(i._setSettings(_),s.mockUserToken)){let w,C;if(typeof s.mockUserToken=="string")w=s.mockUserToken,C=Lt.MOCK_USER;else{w=bE(s.mockUserToken,(o=i._app)===null||o===void 0?void 0:o.options.projectId);const x=s.mockUserToken.sub||s.mockUserToken.user_id;if(!x)throw new ue(G.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");C=new Lt(x)}i._authCredentials=new lT(new Dy(w,C))}}/**
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
 */class oc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new oc(this.firestore,e,this._query)}}class an{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new an(this.firestore,e,this._key)}}class hi extends oc{constructor(e,t,s){super(e,t,Vd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new an(this.firestore,null,new fe(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function $v(i,e,...t){if(i=_n(i),zv("collection","path",e),i instanceof sc){const s=Ye.fromString(e,...t);return bg(s),new hi(i,null,s)}{if(!(i instanceof an||i instanceof hi))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return bg(s),new hi(i.firestore,null,s)}}function ka(i,e,...t){if(i=_n(i),arguments.length===1&&(e=by.newId()),zv("doc","path",e),i instanceof sc){const s=Ye.fromString(e,...t);return Vg(s),new an(i,null,new fe(s))}{if(!(i instanceof an||i instanceof hi))throw new ue(G.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(Ye.fromString(e,...t));return Vg(s),new an(i.firestore,i instanceof hi?i.converter:null,new fe(s))}}/**
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
 */const Mg="AsyncQueue";class Fg{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Iv(this,"async_queue_retry"),this.rc=()=>{const s=Kh();s&&ne(Mg,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const t=Kh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Kh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise((()=>{}));const t=new Gi;return this._c((()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ju.push(e),this.ac())))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!wo(e))throw e;ne(Mg,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_((()=>this.ac()))}}_c(e){const t=this.sc.then((()=>(this.ec=!0,e().catch((s=>{throw this.Xu=s,this.ec=!1,Sr("INTERNAL UNHANDLED ERROR: ",jg(s)),s})).then((s=>(this.ec=!1,s))))));return this.sc=t,t}enqueueAfterDelay(e,t,s){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const o=Kd.createAndSchedule(this,e,t,s,(u=>this.uc(u)));return this.Zu.push(o),o}oc(){this.Xu&&ge(47125,{cc:jg(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then((()=>{this.Zu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()}))}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function jg(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function Ug(i){return(function(t,s){if(typeof t!="object"||t===null)return!1;const o=t;for(const u of s)if(u in o&&typeof o[u]=="function")return!0;return!1})(i,["next","error","complete"])}class mo extends sc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Fg,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Fg(e),this._firestoreClient=void 0,await e}}}function iS(i,e){const t=typeof i=="object"?i:Ty(),s=typeof i=="string"?i:Pu,o=Cd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=DE("firestore");u&&rS(o,...u)}return o}function Hv(i){if(i._terminated)throw new ue(G.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||sS(i),i._firestoreClient}function sS(i){var e,t,s;const o=i._freezeSettings(),u=(function(m,g,_,w){return new CT(m,g,_,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,Uv(w.experimentalLongPollingOptions),w.useFetchStreams,w.isUsingEmulator)})(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,o);i._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),i._firestoreClient=new ZI(i._authCredentials,i._appCheckCredentials,i._queue,u,i._componentsProvider&&(function(m){const g=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(g),_online:g}})(i._componentsProvider))}/**
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
 */class go{constructor(e){this._byteString=e}static fromBase64String(e){try{return new go(kt.fromBase64String(e))}catch(t){throw new ue(G.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new go(kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ue(G.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class qv{constructor(e){this._methodName=e}}/**
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
 */class ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ue(G.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ue(G.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Se(this._lat,e._lat)||Se(this._long,e._long)}}/**
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
 */class tf{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0})(this._values,e._values)}}/**
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
 */const oS=/^__.*__$/;class aS{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,t,this.fieldTransforms):new za(e,this.data,t,this.fieldTransforms)}}function Wv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{Ic:i})}}class nf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Ec(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new nf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Vc(e),o}mc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.dc({path:s,Rc:!1});return o.Ec(),o}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return ju(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(Wv(this.Ic)&&oS.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class lS{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||nc(e)}bc(e,t,s,o=!1){return new nf({Ic:e,methodName:t,wc:s,path:Rt.emptyPath(),Rc:!1,yc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kv(i){const e=i._freezeSettings(),t=nc(i._databaseId);return new lS(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Gv(i,e,t,s,o,u={}){const h=i.bc(u.merge||u.mergeFields?2:0,e,t,o);Jv("Data must be an object, but it was:",h,s);const m=Xv(s,h);let g,_;if(u.merge)g=new On(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const w=[];for(const C of u.mergeFields){const x=uS(e,C,t);if(!h.contains(x))throw new ue(G.INVALID_ARGUMENT,`Field '${x}' is specified in your field mask but missing from your input data.`);hS(w,x)||w.push(x)}g=new On(w),_=h.fieldTransforms.filter((C=>g.covers(C.field)))}else g=null,_=h.fieldTransforms;return new aS(new vn(m),g,_)}function Qv(i,e){if(Yv(i=_n(i)))return Jv("Unsupported field value:",e,i),Xv(i,e);if(i instanceof qv)return(function(s,o){if(!Wv(o.Ic))throw o.gc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.gc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return(function(s,o){const u=[];let h=0;for(const m of s){let g=Qv(m,o.fc(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}})(i,e)}return(function(s,o){if((s=_n(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return XT(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=pt.fromDate(s);return{timestampValue:Ou(o.serializer,u)}}if(s instanceof pt){const u=new pt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ou(o.serializer,u)}}if(s instanceof ef)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof go)return{bytesValue:dv(o.serializer,s._byteString)};if(s instanceof an){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.gc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Fd(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof tf)return(function(h,m){return{mapValue:{fields:{[By]:{stringValue:$y},[xu]:{arrayValue:{values:h.toArray().map((_=>{if(typeof _!="number")throw m.gc("VectorValues must only contain numeric values.");return bd(m.serializer,_)}))}}}}}})(s,o);throw o.gc(`Unsupported field value: ${Jd(s)}`)})(i,e)}function Xv(i,e){const t={};return Ly(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(i,((s,o)=>{const u=Qv(o,e.Ac(s));u!=null&&(t[s]=u)})),{mapValue:{fields:t}}}function Yv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof pt||i instanceof ef||i instanceof go||i instanceof an||i instanceof qv||i instanceof tf)}function Jv(i,e,t){if(!Yv(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Jd(t);throw s==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+s)}}function uS(i,e,t){if((e=_n(e))instanceof Zd)return e._internalPath;if(typeof e=="string")return Zv(i,e);throw ju("Field path arguments must be of type string or ",i,!1,void 0,t)}const cS=new RegExp("[~\\*/\\[\\]]");function Zv(i,e,t){if(e.search(cS)>=0)throw ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new Zd(...e.split("."))._internalPath}catch{throw ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function ju(i,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let m=`Function ${e}() called with invalid data`;t&&(m+=" (via `toFirestore()`)"),m+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ue(G.INVALID_ARGUMENT,m+i+g)}function hS(i,e){return i.some((t=>t.isEqual(e)))}/**
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
 */class e_{constructor(e,t,s,o,u){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new an(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(t_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dS extends e_{data(){return super.data()}}function t_(i,e){return typeof e=="string"?Zv(i,e):e instanceof Zd?e._internalPath:e._delegate._internalPath}/**
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
 */function fS(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new ue(G.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pS{convertValue(e,t="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ge(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ts(e,((o,u)=>{s[o]=this.convertValue(u,t)})),s}convertVectorValue(e){var t,s,o;const u=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[xu].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((h=>it(h.doubleValue)));return new tf(u)}convertGeoPoint(e){return new ef(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Qu(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Da(e));default:return null}}convertTimestamp(e){const t=fi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Fe(vv(s),9688,{name:e});const o=new Va(s.get(1),s.get(3)),u=new fe(s.popFirst(5));return o.isEqual(t)||Sr(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),u}}/**
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
 */function n_(i,e,t){let s;return s=i?i.toFirestore(e):e,s}/**
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
 */class Ta{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class r_ extends e_{constructor(e,t,s,o,u,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(t_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class wu extends r_{data(e={}){return super.data(e)}}class mS{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Ta(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new wu(this._firestore,this._userDataWriter,s.key,s,new Ta(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ue(G.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map((m=>{const g=new wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ta(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}}))}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((m=>u||m.type!==3)).map((m=>{const g=new wu(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Ta(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,w=-1;return m.type!==0&&(_=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),w=h.indexOf(m.doc.key)),{type:gS(m.type),doc:g,oldIndex:_,newIndex:w}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gS(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge(61501,{type:i})}}class i_ extends pS{constructor(e){super(),this.firestore=e}convertBytes(e){return new go(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new an(this.firestore,null,t)}}function zg(i,e,t){i=ci(i,an);const s=ci(i.firestore,mo),o=n_(i.converter,e);return rf(s,[Gv(Kv(s),"setDoc",i._key,o,i.converter!==null,t).toMutation(i._key,Mn.none())])}function yS(i){return rf(ci(i.firestore,mo),[new Od(i._key,Mn.none())])}function vS(i,e){const t=ci(i.firestore,mo),s=ka(i),o=n_(i.converter,e);return rf(t,[Gv(Kv(i.firestore),"addDoc",s._key,o,i.converter!==null,{}).toMutation(s._key,Mn.exists(!1))]).then((()=>s))}function s_(i,...e){var t,s,o;i=_n(i);let u={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||Ug(e[h])||(u=e[h],h++);const m={includeMetadataChanges:u.includeMetadataChanges,source:u.source};if(Ug(e[h])){const C=e[h];e[h]=(t=C.next)===null||t===void 0?void 0:t.bind(C),e[h+1]=(s=C.error)===null||s===void 0?void 0:s.bind(C),e[h+2]=(o=C.complete)===null||o===void 0?void 0:o.bind(C)}let g,_,w;if(i instanceof an)_=ci(i.firestore,mo),w=Vd(i._key.path),g={next:C=>{e[h]&&e[h](_S(_,i,C))},error:e[h+1],complete:e[h+2]};else{const C=ci(i,oc);_=ci(C.firestore,mo),w=C._query;const x=new i_(_);g={next:B=>{e[h]&&e[h](new mS(_,x,C,B))},error:e[h+1],complete:e[h+2]},fS(i._query)}return(function(x,B,z,X){const q=new JI(X),me=new VI(B,q,z);return x.asyncQueue.enqueueAndForget((async()=>PI(await Ng(x),me))),()=>{q.xu(),x.asyncQueue.enqueueAndForget((async()=>xI(await Ng(x),me)))}})(Hv(_),w,m,g)}function rf(i,e){return(function(s,o){const u=new Gi;return s.asyncQueue.enqueueAndForget((async()=>$I(await tS(s),o,u))),u.promise})(Hv(i),e)}function _S(i,e,t){const s=t.docs.get(e._key),o=new i_(i);return new r_(i,o,e._key,s,new Ta(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){_o=o})(vo),ao(new Yi("firestore",((s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new mo(new uT(s.getProvider("auth-internal")),new dT(h,s.getProvider("app-check-internal")),(function(_,w){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ue(G.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(_.options.projectId,w)})(h,o),h);return u=Object.assign({useFetchStreams:t},u),m._setSettings(u),m}),"PUBLIC").setMultipleInstances(!0)),li($m,Hm,e),li($m,Hm,"esm2017")})();var ES="firebase",wS="11.9.0";/**
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
 */li(ES,wS,"app");function sf(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(i);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(i,s[o])&&(t[s[o]]=i[s[o]]);return t}function o_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TS=o_,a_=new ja("auth","Firebase",o_());/**
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
 */const Uu=new Sd("@firebase/auth");function IS(i,...e){Uu.logLevel<=Re.WARN&&Uu.warn(`Auth (${vo}): ${i}`,...e)}function Tu(i,...e){Uu.logLevel<=Re.ERROR&&Uu.error(`Auth (${vo}): ${i}`,...e)}/**
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
 */function Cr(i,...e){throw of(i,...e)}function Zn(i,...e){return of(i,...e)}function l_(i,e,t){const s=Object.assign(Object.assign({},TS()),{[e]:t});return new ja("auth","Firebase",s).create(e,{appName:i.name})}function Qi(i){return l_(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function of(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return a_.create(i,...e)}function ve(i,e,...t){if(!i)throw of(e,...t)}function wr(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Tu(e),new Error(e)}function Rr(i,e){i||wr(e)}/**
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
 */function Ed(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function SS(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||UE()||"connection"in navigator)?navigator.onLine:!0}function CS(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class qa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rr(t>e,"Short delay should be less than long delay!"),this.isMobile=ME()||zE()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function af(i,e){Rr(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class u_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PS=new qa(3e4,6e4);function lf(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Io(i,e,t,s,o={}){return c_(i,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const m=Ua(Object.assign({key:i.config.apiKey},h)).slice(1),g=await i._getAdditionalHeaders();g["Content-Type"]="application/json",i.languageCode&&(g["X-Firebase-Locale"]=i.languageCode);const _=Object.assign({method:e,headers:g},u);return jE()||(_.referrerPolicy="no-referrer"),i.emulatorConfig&&Fa(i.emulatorConfig.host)&&(_.credentials="include"),u_.fetch()(await h_(i,i.config.apiHost,t,m),_)})}async function c_(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},RS),e);try{const o=new NS(i),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw mu(i,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const m=u.ok?h.errorMessage:h.error.message,[g,_]=m.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw mu(i,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw mu(i,"email-already-in-use",h);if(g==="USER_DISABLED")throw mu(i,"user-disabled",h);const w=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw l_(i,w,_);Cr(i,w)}}catch(o){if(o instanceof kr)throw o;Cr(i,"network-request-failed",{message:String(o)})}}async function xS(i,e,t,s,o={}){const u=await Io(i,e,t,s,o);return"mfaPendingCredential"in u&&Cr(i,"multi-factor-auth-required",{_serverResponse:u}),u}async function h_(i,e,t,s){const o=`${e}${t}?${s}`,u=i,h=u.config.emulator?af(i.config,o):`${i.config.apiScheme}://${o}`;return kS.includes(t)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(h).toString():h}class NS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),PS.get())})}}function mu(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(i,e,s);return o.customData._tokenResponse=t,o}/**
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
 */async function DS(i,e){return Io(i,"POST","/v1/accounts:delete",e)}async function zu(i,e){return Io(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pa(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VS(i,e=!1){const t=_n(i),s=await t.getIdToken(e),o=uf(s);ve(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Pa(Qh(o.auth_time)),issuedAtTime:Pa(Qh(o.iat)),expirationTime:Pa(Qh(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Qh(i){return Number(i)*1e3}function uf(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Tu("JWT malformed, contained fewer than 3 sections"),null;try{const o=fy(t);return o?JSON.parse(o):(Tu("Failed to decode base64 JWT payload"),null)}catch(o){return Tu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function $g(i){const e=uf(i);return ve(e,"internal-error"),ve(typeof e.exp<"u","internal-error"),ve(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ma(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof kr&&bS(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function bS({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class OS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pa(this.lastLoginAt),this.creationTime=Pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bu(i){var e;const t=i.auth,s=await i.getIdToken(),o=await Ma(i,zu(t,{idToken:s}));ve(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];i._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?d_(u.providerUserInfo):[],m=MS(i.providerData,h),g=i.isAnonymous,_=!(i.email&&u.passwordHash)&&!(m!=null&&m.length),w=g?_:!1,C={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new wd(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(i,C)}async function LS(i){const e=_n(i);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MS(i,e){return[...i.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function d_(i){return i.map(e=>{var{providerId:t}=e,s=sf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function FS(i,e){const t=await c_(i,{},async()=>{const s=Ua({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=i.config,h=await h_(i,o,"/v1/token",`key=${u}`),m=await i._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",u_.fetch()(h,{method:"POST",headers:m,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jS(i,e){return Io(i,"POST","/v2/accounts:revokeToken",lf(i,e))}/**
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
 */class io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ve(e.idToken,"internal-error"),ve(typeof e.idToken<"u","internal-error"),ve(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$g(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ve(e.length!==0,"internal-error");const t=$g(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ve(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await FS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new io;return s&&(ve(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ve(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ve(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new io,this.toJSON())}_performRefresh(){return wr("not implemented")}}/**
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
 */function ei(i,e){ve(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=sf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new wd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return ve(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VS(this,e)}reload(){return LS(this)}_assign(e){this!==e&&(ve(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ve(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xn(this.auth.app))return Promise.reject(Qi(this.auth));const e=await this.getIdToken();return await Ma(this,DS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,m,g,_,w;const C=(s=t.displayName)!==null&&s!==void 0?s:void 0,x=(o=t.email)!==null&&o!==void 0?o:void 0,B=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,X=(m=t.tenantId)!==null&&m!==void 0?m:void 0,q=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,me=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:pe,emailVerified:we,isAnonymous:ze,providerData:Te,stsTokenManager:V}=t;ve(pe&&V,e,"internal-error");const S=io.fromJSON(this.name,V);ve(typeof pe=="string",e,"internal-error"),ei(C,e.name),ei(x,e.name),ve(typeof we=="boolean",e,"internal-error"),ve(typeof ze=="boolean",e,"internal-error"),ei(B,e.name),ei(z,e.name),ei(X,e.name),ei(q,e.name),ei(me,e.name),ei(ce,e.name);const T=new Ln({uid:pe,auth:e,email:x,emailVerified:we,displayName:C,isAnonymous:ze,photoURL:z,phoneNumber:B,tenantId:X,stsTokenManager:S,createdAt:me,lastLoginAt:ce});return Te&&Array.isArray(Te)&&(T.providerData=Te.map(R=>Object.assign({},R))),q&&(T._redirectEventId=q),T}static async _fromIdTokenResponse(e,t,s=!1){const o=new io;o.updateFromServerResponse(t);const u=new Ln({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ve(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?d_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new io;m.updateFromIdToken(s);const g=new Ln({uid:o.localId,auth:e,stsTokenManager:m,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new wd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
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
 */const Hg=new Map;function Tr(i){Rr(i instanceof Function,"Expected a class definition");let e=Hg.get(i);return e?(Rr(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Hg.set(i,e),e)}/**
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
 */class f_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f_.type="NONE";const qg=f_;/**
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
 */function Iu(i,e,t){return`firebase:${i}:${e}:${t}`}class so{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Iu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Iu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zu(this.auth,{idToken:e}).catch(()=>{});return t?Ln._fromGetAccountInfoResponse(this.auth,t,e):null}return Ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new so(Tr(qg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Tr(qg);const h=Iu(s,e.config.apiKey,e.name);let m=null;for(const _ of t)try{const w=await _._get(h);if(w){let C;if(typeof w=="string"){const x=await zu(e,{idToken:w}).catch(()=>{});if(!x)break;C=await Ln._fromGetAccountInfoResponse(e,x,w)}else C=Ln._fromJSON(e,w);_!==u&&(m=C),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new so(u,e,s):(u=g[0],m&&await u._set(h,m.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new so(u,e,s))}}/**
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
 */function Wg(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(__(e))return"Blackberry";if(E_(e))return"Webos";if(m_(e))return"Safari";if((e.includes("chrome/")||g_(e))&&!e.includes("edge/"))return"Chrome";if(v_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function p_(i=Ft()){return/firefox\//i.test(i)}function m_(i=Ft()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g_(i=Ft()){return/crios\//i.test(i)}function y_(i=Ft()){return/iemobile/i.test(i)}function v_(i=Ft()){return/android/i.test(i)}function __(i=Ft()){return/blackberry/i.test(i)}function E_(i=Ft()){return/webos/i.test(i)}function cf(i=Ft()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function US(i=Ft()){var e;return cf(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zS(){return BE()&&document.documentMode===10}function w_(i=Ft()){return cf(i)||v_(i)||E_(i)||__(i)||/windows phone/i.test(i)||y_(i)}/**
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
 */function T_(i,e=[]){let t;switch(i){case"Browser":t=Wg(Ft());break;case"Worker":t=`${Wg(Ft())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${vo}/${s}`}/**
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
 */class BS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,m)=>{try{const g=e(u);h(g)}catch(g){m(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function $S(i,e={}){return Io(i,"GET","/v2/passwordPolicy",lf(i,e))}/**
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
 */const HS=6;class qS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:HS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,m;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(m=g.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class WS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kg(this),this.idTokenSubscription=new Kg(this),this.beforeStateQueue=new BS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=a_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zu(this,{idToken:e}),s=await Ln._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,m=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===m)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ve(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xn(this.app))return Promise.reject(Qi(this));const t=e?_n(e):null;return t&&ve(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ve(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xn(this.app)?Promise.reject(Qi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xn(this.app)?Promise.reject(Qi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $S(this),t=new qS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ja("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;ve(t,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(ve(m,this,"internal-error"),m.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ve(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(Xn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&IS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hf(i){return _n(i)}class Kg{constructor(e){this.auth=e,this.observer=null,this.addObserver=XE(t=>this.observer=t)}get next(){return ve(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let df={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function KS(i){df=i}function GS(i){return df.loadJS(i)}function QS(){return df.gapiScript}function XS(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */function YS(i,e){const t=Cd(i,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Xi(u,e??{}))return o;Cr(o,"already-initialized")}return t.initialize({options:e})}function JS(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Tr);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ZS(i,e,t){const s=hf(i);ve(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=I_(e),{host:h,port:m}=eA(e),g=m===null?"":`:${m}`,_={url:`${u}//${h}${g}/`},w=Object.freeze({host:h,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){ve(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ve(Xi(_,s.config.emulator)&&Xi(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=_,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Fa(h)?(yy(`${u}//${h}${g}`),vy("Auth",!0)):tA()}function I_(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function eA(i){const e=I_(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Gg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Gg(h)}}}function Gg(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function tA(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class S_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wr("not implemented")}_getIdTokenResponse(e){return wr("not implemented")}_linkToIdToken(e,t){return wr("not implemented")}_getReauthenticationResolver(e){return wr("not implemented")}}/**
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
 */async function oo(i,e){return xS(i,"POST","/v1/accounts:signInWithIdp",lf(i,e))}/**
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
 */const nA="http://localhost";class es extends S_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=sf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new es(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return oo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,oo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oo(e,t)}buildRequest(){const e={requestUri:nA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ua(t)}return e}}/**
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
 */class A_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wa extends A_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ti extends Wa{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ti.credential(e.oauthAccessToken)}catch{return null}}}ti.FACEBOOK_SIGN_IN_METHOD="facebook.com";ti.PROVIDER_ID="facebook.com";/**
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
 */class ni extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return es._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ni.credential(t,s)}catch{return null}}}ni.GOOGLE_SIGN_IN_METHOD="google.com";ni.PROVIDER_ID="google.com";/**
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
 */class ri extends Wa{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.GITHUB_SIGN_IN_METHOD="github.com";ri.PROVIDER_ID="github.com";/**
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
 */class ii extends Wa{constructor(){super("twitter.com")}static credential(e,t){return es._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ii.credential(t,s)}catch{return null}}}ii.TWITTER_SIGN_IN_METHOD="twitter.com";ii.PROVIDER_ID="twitter.com";/**
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
 */class yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ln._fromIdTokenResponse(e,s,o),h=Qg(s);return new yo({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Qg(s);return new yo({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Qg(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class $u extends kr{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,$u.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new $u(e,t,s,o)}}function C_(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$u._fromErrorAndOperation(i,u,e,s):u})}async function rA(i,e,t=!1){const s=await Ma(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return yo._forOperation(i,"link",s)}/**
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
 */async function iA(i,e,t=!1){const{auth:s}=i;if(Xn(s.app))return Promise.reject(Qi(s));const o="reauthenticate";try{const u=await Ma(i,C_(s,o,e,i),t);ve(u.idToken,s,"internal-error");const h=uf(u.idToken);ve(h,s,"internal-error");const{sub:m}=h;return ve(i.uid===m,s,"user-mismatch"),yo._forOperation(i,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Cr(s,"user-mismatch"),u}}/**
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
 */async function sA(i,e,t=!1){if(Xn(i.app))return Promise.reject(Qi(i));const s="signIn",o=await C_(i,s,e),u=await yo._fromIdTokenResponse(i,s,o);return t||await i._updateCurrentUser(u.user),u}function oA(i,e,t,s){return _n(i).onIdTokenChanged(e,t,s)}function aA(i,e,t){return _n(i).beforeAuthStateChanged(e,t)}const Hu="__sak";/**
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
 */class R_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const lA=1e3,uA=10;class k_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);zS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,uA):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const cA=k_;/**
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
 */class P_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}P_.type="SESSION";const x_=P_;/**
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
 */function hA(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new ac(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(h).map(async _=>_(t.origin,u)),g=await hA(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function ff(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((m,g)=>{const _=ff("",20);o.port1.start();const w=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(C){const x=C;if(x.data.eventId===_)switch(x.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(x.data.response);break;default:clearTimeout(w),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function fA(i){er().location.href=i}/**
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
 */function N_(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function pA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mA(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function gA(){return N_()?self:null}/**
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
 */const D_="firebaseLocalStorageDb",yA=1,qu="firebaseLocalStorage",V_="fbase_key";class Ka{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lc(i,e){return i.transaction([qu],e?"readwrite":"readonly").objectStore(qu)}function vA(){const i=indexedDB.deleteDatabase(D_);return new Ka(i).toPromise()}function Td(){const i=indexedDB.open(D_,yA);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(qu,{keyPath:V_})}catch(o){t(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(qu)?e(s):(s.close(),await vA(),e(await Td()))})})}async function Xg(i,e,t){const s=lc(i,!0).put({[V_]:e,value:t});return new Ka(s).toPromise()}async function _A(i,e){const t=lc(i,!1).get(e),s=await new Ka(t).toPromise();return s===void 0?null:s.value}function Yg(i,e){const t=lc(i,!0).delete(e);return new Ka(t).toPromise()}const EA=800,wA=3;class b_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return N_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(gA()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await Xg(e,Hu,"1"),await Yg(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Xg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>_A(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=lc(o,!1).getAll();return new Ka(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}b_.type="LOCAL";const TA=b_;new qa(3e4,6e4);/**
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
 */function IA(i,e){return e?Tr(e):(ve(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class pf extends S_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function SA(i){return sA(i.auth,new pf(i),i.bypassAuthState)}function AA(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),iA(t,new pf(i),i.bypassAuthState)}async function CA(i){const{auth:e,user:t}=i;return ve(t,e,"internal-error"),rA(t,new pf(i),i.bypassAuthState)}/**
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
 */class O_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:m}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SA;case"linkViaPopup":case"linkViaRedirect":return CA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:Cr(this.auth,"internal-error")}}resolve(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RA=new qa(2e3,1e4);class to extends O_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,to.currentPopupAction&&to.currentPopupAction.cancel(),to.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ve(e,this.auth,"internal-error"),e}async onExecution(){Rr(this.filter.length===1,"Popup operations only handle one event");const e=ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,to.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}to.currentPopupAction=null;/**
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
 */const kA="pendingRedirect",Su=new Map;class PA extends O_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Su.get(this.auth._key());if(!e){try{const s=await xA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Su.set(this.auth._key(),e)}return this.bypassAuthState||Su.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xA(i,e){const t=VA(e),s=DA(i);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function NA(i,e){Su.set(i._key(),e)}function DA(i){return Tr(i._redirectPersistence)}function VA(i){return Iu(kA,i.config.apiKey,i.name)}async function bA(i,e,t=!1){if(Xn(i.app))return Promise.reject(Qi(i));const s=hf(i),o=IA(s,e),h=await new PA(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const OA=600*1e3;class LA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!L_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jg(e))}saveEventToCache(e){this.cachedEventUids.add(Jg(e)),this.lastProcessedEventTime=Date.now()}}function Jg(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function L_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L_(i);default:return!1}}/**
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
 */async function FA(i,e={}){return Io(i,"GET","/v1/projects",e)}/**
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
 */const jA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UA=/^https?/;async function zA(i){if(i.config.emulator)return;const{authorizedDomains:e}=await FA(i);for(const t of e)try{if(BA(t))return}catch{}Cr(i,"unauthorized-domain")}function BA(i){const e=Ed(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const h=new URL(i);return h.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!UA.test(t))return!1;if(jA.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const $A=new qa(3e4,6e4);function Zg(){const i=er().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function HA(i){return new Promise((e,t)=>{var s,o,u;function h(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),t(Zn(i,"network-request-failed"))},timeout:$A.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const m=XS("iframefcb");return er()[m]=()=>{gapi.load?h():t(Zn(i,"network-request-failed"))},GS(`${QS()}?onload=${m}`).catch(g=>t(g))}}).catch(e=>{throw Au=null,e})}let Au=null;function qA(i){return Au=Au||HA(i),Au}/**
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
 */const WA=new qa(5e3,15e3),KA="__/auth/iframe",GA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(i){const e=i.config;ve(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?af(e,GA):`https://${i.config.authDomain}/${KA}`,s={apiKey:e.apiKey,appName:i.name,v:vo},o=XA.get(i.config.apiHost);o&&(s.eid=o);const u=i._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ua(s).slice(1)}`}async function JA(i){const e=await qA(i),t=er().gapi;return ve(t,i,"internal-error"),e.open({where:document.body,url:YA(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(i,"network-request-failed"),m=er().setTimeout(()=>{u(h)},WA.get());function g(){er().clearTimeout(m),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eC=500,tC=600,nC="_blank",rC="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iC(i,e,t,s=eC,o=tC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const g=Object.assign(Object.assign({},ZA),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ft().toLowerCase();t&&(m=g_(_)?nC:t),p_(_)&&(e=e||rC,g.scrollbars="yes");const w=Object.entries(g).reduce((x,[B,z])=>`${x}${B}=${z},`,"");if(US(_)&&m!=="_self")return sC(e||"",m),new ey(null);const C=window.open(e||"",m,w);ve(C,i,"popup-blocked");try{C.focus()}catch{}return new ey(C)}function sC(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const oC="__/auth/handler",aC="emulator/auth/handler",lC=encodeURIComponent("fac");async function ty(i,e,t,s,o,u){ve(i.config.authDomain,i,"auth-domain-config-required"),ve(i.config.apiKey,i,"invalid-api-key");const h={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:vo,eventId:o};if(e instanceof A_){e.setDefaultLanguage(i.languageCode),h.providerId=e.providerId||"",QE(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,C]of Object.entries({}))h[w]=C}if(e instanceof Wa){const w=e.getScopes().filter(C=>C!=="");w.length>0&&(h.scopes=w.join(","))}i.tenantId&&(h.tid=i.tenantId);const m=h;for(const w of Object.keys(m))m[w]===void 0&&delete m[w];const g=await i._getAppCheckToken(),_=g?`#${lC}=${encodeURIComponent(g)}`:"";return`${uC(i)}?${Ua(m).slice(1)}${_}`}function uC({config:i}){return i.emulator?af(i,aC):`https://${i.authDomain}/${oC}`}/**
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
 */const Xh="webStorageSupport";class cC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=x_,this._completeRedirectFn=bA,this._overrideRedirectResult=NA}async _openPopup(e,t,s,o){var u;Rr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await ty(e,t,s,Ed(),o);return iC(e,h,ff())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await ty(e,t,s,Ed(),o);return fA(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Rr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await JA(e),s=new LA(e);return t.register("authEvent",o=>(ve(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Xh,{type:Xh},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Xh];h!==void 0&&t(!!h),Cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return w_()||m_()||cf()}}const hC=cC;var ny="@firebase/auth",ry="1.10.6";/**
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
 */class dC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ve(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fC(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pC(i){ao(new Yi("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;ve(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:m,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T_(i)},_=new WS(s,o,u,g);return JS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),ao(new Yi("auth-internal",e=>{const t=hf(e.getProvider("auth").getImmediate());return(s=>new dC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),li(ny,ry,fC(i)),li(ny,ry,"esm2017")}/**
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
 */const mC=300,gC=gy("authIdTokenMaxAge")||mC;let iy=null;const yC=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>gC)return;const o=t==null?void 0:t.token;iy!==o&&(iy=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function vC(i=Ty()){const e=Cd(i,"auth");if(e.isInitialized())return e.getImmediate();const t=YS(i,{popupRedirectResolver:hC,persistence:[TA,cA,x_]}),s=gy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=yC(u.toString());aA(t,h,()=>h(t.currentUser)),oA(t,m=>h(m))}}const o=py("auth");return o&&ZS(t,`http://${o}`),t}function _C(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}KS({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",_C().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pC("Browser");const EC={apiKey:"AIzaSyC7B5Xm6uY07VZiZXTQ4ztAqpSE3n_8A3E",authDomain:"alnisrine-e531d.firebaseapp.com",projectId:"alnisrine-e531d",storageBucket:"alnisrine-e531d.firebasestorage.app",messagingSenderId:"81259688625",appId:"1:81259688625:web:7200c310c4b4957d58e890",measurementId:"G-8098ZTHSCV"},M_=wy(EC),no=iS(M_);vC(M_);function wC(){const[i,e]=Me.useState([]),[t,s]=Me.useState(!0),[o,u]=Me.useState(null);return Me.useEffect(()=>{const h=s_($v(no,"products"),m=>{try{const g=m.docs.map(_=>({id:_.id,..._.data()}));e(g),u(null)}catch(g){u(g instanceof Error?g.message:"خطأ في جلب المنتجات")}finally{s(!1)}},m=>{u(m.message),s(!1)});return()=>h()},[]),{products:i,loading:t,error:o}}function TC(){const[i,e]=Me.useState(null),[t,s]=Me.useState(!0),[o,u]=Me.useState(null);return Me.useEffect(()=>{const h=s_(ka(no,"settings","siteSettings"),m=>{try{m.exists()&&(e(m.data()),u(null))}catch(g){u(g instanceof Error?g.message:"خطأ في جلب الإعدادات")}finally{s(!1)}},m=>{u(m.message),s(!1)});return()=>h()},[]),{settings:i,loading:t,error:o}}function sy({product:i,onAdd:e,onView:t}){const[s,o]=Me.useState(i.sizes[0]),[u,h]=Me.useState(i.colors.length>0?i.colors[0]:void 0),m=s.price+((u==null?void 0:u.price)||0);return k.jsxs("div",{className:"bg-white border border-border rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-lg",children:[k.jsxs("div",{className:"relative aspect-square bg-secondary overflow-hidden",children:[k.jsx("img",{src:i.image,alt:i.name,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"}),i.featured&&k.jsx("span",{className:"absolute top-2 end-2 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-full",children:"الأكثر مبيعاً"}),!i.inStock&&k.jsx("div",{className:"absolute inset-0 bg-white/75 flex items-center justify-center",children:k.jsx("span",{className:"text-sm font-semibold text-destructive",children:"غير متوفر"})})]}),k.jsxs("div",{className:"p-4",children:[k.jsx("h3",{className:"font-semibold text-sm mb-1 line-clamp-2",children:i.name}),k.jsx("p",{className:"text-xs text-muted-foreground mb-3 line-clamp-2",children:i.description}),k.jsxs("div",{className:"flex items-center gap-1 mb-3",children:[k.jsx("div",{className:"flex",children:[1,2,3,4,5].map(g=>k.jsx(EE,{size:12,className:g<=Math.round(i.rating)?"fill-amber-400 text-amber-400":"fill-gray-200 text-gray-200"},g))}),k.jsxs("span",{className:"text-xs text-muted-foreground",children:["(",i.reviews,")"]})]}),k.jsxs("div",{className:"mb-3",children:[k.jsx("label",{className:"text-xs font-semibold mb-1 block",children:"الحجم:"}),k.jsx("select",{value:i.sizes.indexOf(s),onChange:g=>o(i.sizes[parseInt(g.target.value)]),className:"w-full px-2 py-1 text-xs border border-border rounded",children:i.sizes.map((g,_)=>k.jsxs("option",{value:_,children:[g.size," (",g.unit,")"]},_))})]}),i.colors.length>0&&k.jsxs("div",{className:"mb-3",children:[k.jsx("label",{className:"text-xs font-semibold mb-1 block",children:"اللون:"}),k.jsx("div",{className:"flex flex-wrap gap-2",children:i.colors.map((g,_)=>k.jsx("button",{onClick:()=>h(g),className:`w-8 h-8 rounded-full border-2 transition-all ${(u==null?void 0:u.color)===g.color?"border-primary":"border-gray-300"}`,style:{backgroundColor:g.color},title:g.name},_))})]}),k.jsxs("div",{className:"flex items-center justify-between",children:[k.jsxs("div",{children:[k.jsx("span",{className:"text-lg font-bold text-primary",children:m.toFixed(2)}),k.jsx("span",{className:"text-xs text-muted-foreground mr-1",children:"ر.ع"})]}),k.jsx("button",{onClick:()=>e(i,s,u),disabled:!i.inStock,className:"bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:k.jsx(Jh,{size:16})})]}),k.jsx("button",{onClick:()=>t(i),className:"w-full mt-2 text-xs text-primary hover:underline",children:"عرض التفاصيل"})]})]})}function IC({settings:i,products:e,onClose:t}){const[s,o]=Me.useState("settings"),[u,h]=Me.useState(i||{logo:"",companyName:"النسرين",aboutTitle:"",aboutDescription:"",storyTitle:"",storyDescription:"",storyImage:"",heroImage:"",contactPhone:"",contactEmail:"",contactAddress:""}),[m,g]=Me.useState(null),[_,w]=Me.useState(!1),C=async()=>{w(!0);try{await zg(ka(no,"settings","siteSettings"),u),alert("تم حفظ الإعدادات بنجاح!")}catch(z){alert("خطأ في حفظ الإعدادات: "+(z instanceof Error?z.message:""))}finally{w(!1)}},x=async()=>{if(m){w(!0);try{m.id?await zg(ka(no,"products",m.id),m):await vS($v(no,"products"),m),alert("تم حفظ المنتج بنجاح!"),g(null)}catch(z){alert("خطأ في حفظ المنتج: "+(z instanceof Error?z.message:""))}finally{w(!1)}}},B=async z=>{if(confirm("هل أنت متأكد من حذف هذا المنتج؟")){w(!0);try{await yS(ka(no,"products",z)),alert("تم حذف المنتج بنجاح!")}catch(X){alert("خطأ في حذف المنتج: "+(X instanceof Error?X.message:""))}finally{w(!1)}}};return k.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:k.jsxs("div",{className:"bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto",children:[k.jsxs("div",{className:"flex items-center justify-between p-6 border-b",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(uy,{size:24}),k.jsx("h2",{className:"text-2xl font-bold",children:"لوحة التحكم"})]}),k.jsx("button",{onClick:t,className:"text-muted-foreground hover:text-foreground",children:k.jsx(IE,{size:24})})]}),k.jsxs("div",{className:"flex border-b",children:[k.jsx("button",{onClick:()=>o("settings"),className:`px-6 py-3 font-semibold ${s==="settings"?"border-b-2 border-primary text-primary":"text-muted-foreground"}`,children:"إعدادات الموقع"}),k.jsx("button",{onClick:()=>o("products"),className:`px-6 py-3 font-semibold ${s==="products"?"border-b-2 border-primary text-primary":"text-muted-foreground"}`,children:"المنتجات"})]}),k.jsxs("div",{className:"p-6",children:[s==="settings"&&k.jsxs("div",{className:"space-y-4",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:"اسم الشركة"}),k.jsx("input",{type:"text",value:u.companyName,onChange:z=>h({...u,companyName:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:"الشعار (URL)"}),k.jsx("input",{type:"text",value:u.logo,onChange:z=>h({...u,logo:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:'عنوان "قصتنا"'}),k.jsx("input",{type:"text",value:u.storyTitle,onChange:z=>h({...u,storyTitle:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:'وصف "قصتنا"'}),k.jsx("textarea",{value:u.storyDescription,onChange:z=>h({...u,storyDescription:z.target.value}),className:"w-full px-3 py-2 border border-border rounded h-24"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:'عنوان "عن الشركة"'}),k.jsx("input",{type:"text",value:u.aboutTitle,onChange:z=>h({...u,aboutTitle:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:'وصف "عن الشركة"'}),k.jsx("textarea",{value:u.aboutDescription,onChange:z=>h({...u,aboutDescription:z.target.value}),className:"w-full px-3 py-2 border border-border rounded h-24"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:"رقم الهاتف"}),k.jsx("input",{type:"text",value:u.contactPhone,onChange:z=>h({...u,contactPhone:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:"البريد الإلكتروني"}),k.jsx("input",{type:"email",value:u.contactEmail,onChange:z=>h({...u,contactEmail:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-semibold mb-2",children:"العنوان"}),k.jsx("input",{type:"text",value:u.contactAddress,onChange:z=>h({...u,contactAddress:z.target.value}),className:"w-full px-3 py-2 border border-border rounded"})]}),k.jsxs("button",{onClick:C,disabled:_,className:"w-full bg-primary text-primary-foreground py-2 rounded font-semibold hover:bg-primary/90 disabled:opacity-50 flex items-center justify-center gap-2",children:[k.jsx(gE,{size:18}),"حفظ الإعدادات"]})]}),s==="products"&&k.jsxs("div",{className:"space-y-4",children:[k.jsxs("button",{onClick:()=>g({id:"",name:"",description:"",image:"",category:"interior",subcategory:"",sizes:[{size:"",price:0,unit:""}],colors:[],inStock:!0,featured:!1,rating:0,reviews:0}),className:"bg-primary text-primary-foreground px-4 py-2 rounded font-semibold hover:bg-primary/90 flex items-center gap-2",children:[k.jsx(ly,{size:18}),"إضافة منتج جديد"]}),m&&k.jsxs("div",{className:"border border-border rounded p-4 space-y-3",children:[k.jsx("h3",{className:"font-semibold",children:"تحرير المنتج"}),k.jsx("input",{type:"text",placeholder:"اسم المنتج",value:m.name,onChange:z=>g({...m,name:z.target.value}),className:"w-full px-3 py-2 border border-border rounded text-sm"}),k.jsx("textarea",{placeholder:"وصف المنتج",value:m.description,onChange:z=>g({...m,description:z.target.value}),className:"w-full px-3 py-2 border border-border rounded text-sm h-20"}),k.jsx("input",{type:"text",placeholder:"رابط الصورة",value:m.image,onChange:z=>g({...m,image:z.target.value}),className:"w-full px-3 py-2 border border-border rounded text-sm"}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{onClick:x,disabled:_,className:"flex-1 bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 disabled:opacity-50",children:"حفظ"}),k.jsx("button",{onClick:()=>g(null),className:"flex-1 bg-gray-300 text-gray-800 py-2 rounded font-semibold hover:bg-gray-400",children:"إلغاء"})]})]}),k.jsx("div",{className:"space-y-2",children:e.map(z=>k.jsxs("div",{className:"flex items-center justify-between p-3 border border-border rounded",children:[k.jsxs("div",{children:[k.jsx("p",{className:"font-semibold text-sm",children:z.name}),k.jsx("p",{className:"text-xs text-muted-foreground",children:z.category})]}),k.jsxs("div",{className:"flex gap-2",children:[k.jsx("button",{onClick:()=>g(z),className:"text-blue-600 hover:text-blue-800",children:k.jsx(hE,{size:16})}),k.jsx("button",{onClick:()=>B(z.id),className:"text-red-600 hover:text-red-800",children:k.jsx(cy,{size:16})})]})]},z.id))})]})]})]})})}const Yh={interior:"أصباغ داخلية",exterior:"أصباغ خارجية",materials:"مواد بناء"},oy={interior:"طلاء داخلي فاخر لكل غرفة",exterior:"حماية متكاملة للواجهات",materials:"أدوات ومواد بناء متنوعة"};function SC(){const{products:i,loading:e}=wC(),{settings:t,loading:s}=TC(),[o,u]=Me.useState("home"),[h,m]=Me.useState([]),[g,_]=Me.useState(""),[w,C]=Me.useState("all"),[x,B]=Me.useState(!1),[z,X]=Me.useState(""),[q,me]=Me.useState(!1),[ce,pe]=Me.useState(null),we=Me.useMemo(()=>{let T=i;return w!=="all"&&(T=T.filter(R=>R.category===w)),g&&(T=T.filter(R=>R.name.includes(g)||R.description.includes(g))),T},[i,w,g]),ze=Me.useMemo(()=>i.filter(T=>T.featured).slice(0,8),[i]),Te=Me.useMemo(()=>h.reduce((T,R)=>{var b;const N=R.selectedSize.price+(((b=R.selectedColor)==null?void 0:b.price)||0);return T+N*R.quantity},0),[h]),V=(T,R,N)=>{const b=h.find(A=>{var Ge;return A.product.id===T.id&&A.selectedSize.size===R.size&&((Ge=A.selectedColor)==null?void 0:Ge.color)===(N==null?void 0:N.color)});m(b?h.map(A=>A===b?{...A,quantity:A.quantity+1}:A):[...h,{product:T,quantity:1,selectedSize:R,selectedColor:N}])},S=T=>{m(h.filter((R,N)=>N!==T))};return e||s?k.jsx("div",{className:"flex items-center justify-center min-h-screen",children:k.jsxs("div",{className:"text-center",children:[k.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"}),k.jsx("p",{className:"text-muted-foreground",children:"جاري التحميل..."})]})}):k.jsxs("div",{className:"min-h-screen bg-background",dir:"rtl",children:[k.jsxs("header",{className:"sticky top-0 z-40 bg-white border-b border-border",children:[k.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:[k.jsxs("div",{className:"flex items-center justify-between gap-4",children:[k.jsxs("button",{onClick:()=>u("home"),className:"flex items-center gap-2 hover:opacity-80",children:[k.jsx(tE,{size:24,className:"text-primary"}),k.jsx("span",{className:"font-bold text-lg hidden sm:inline",children:(t==null?void 0:t.companyName)||"النسرين"})]}),k.jsx("div",{className:"hidden md:flex flex-1 max-w-md",children:k.jsx("input",{type:"text",placeholder:"ابحث عن منتج...",value:g,onChange:T=>_(T.target.value),className:"w-full px-4 py-2 border border-border rounded-lg text-sm"})}),k.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[k.jsxs("button",{onClick:()=>u("cart"),className:"relative p-2 hover:bg-secondary rounded-lg transition-colors",children:[k.jsx(Jh,{size:20}),h.length>0&&k.jsx("span",{className:"absolute top-0 right-0 bg-destructive text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:h.length})]}),k.jsx("button",{onClick:()=>B(!x),className:"md:hidden p-2 hover:bg-secondary rounded-lg",children:k.jsx(aE,{size:20})}),k.jsx("button",{onClick:()=>{const T=prompt("أدخل كلمة المرور:");T==="nasreen2024"?me(!0):T&&alert("كلمة المرور غير صحيحة")},className:"p-2 hover:bg-secondary rounded-lg text-muted-foreground",children:k.jsx(uy,{size:20})})]})]}),k.jsx("div",{className:"md:hidden mt-4",children:k.jsx("input",{type:"text",placeholder:"ابحث عن منتج...",value:g,onChange:T=>_(T.target.value),className:"w-full px-4 py-2 border border-border rounded-lg text-sm"})})]}),x&&k.jsx("div",{className:"md:hidden border-t border-border",children:k.jsxs("nav",{className:"flex flex-col p-4 gap-2",children:[k.jsx("button",{onClick:()=>{u("home"),B(!1)},className:"text-right px-4 py-2 hover:bg-secondary rounded",children:"الرئيسية"}),["interior","exterior","materials"].map(T=>k.jsx("button",{onClick:()=>{u(T),C(T),B(!1)},className:"text-right px-4 py-2 hover:bg-secondary rounded",children:Yh[T]},T)),k.jsx("button",{onClick:()=>{u("about"),B(!1)},className:"text-right px-4 py-2 hover:bg-secondary rounded",children:"عن الشركة"}),k.jsx("button",{onClick:()=>{u("contact"),B(!1)},className:"text-right px-4 py-2 hover:bg-secondary rounded",children:"اتصل بنا"})]})})]}),k.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o==="home"&&k.jsxs("div",{className:"space-y-12",children:[k.jsx("section",{className:"rounded-lg overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 p-8 md:p-12",children:k.jsxs("div",{className:"max-w-2xl",children:[k.jsxs("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:["مرحباً بك في ",(t==null?void 0:t.companyName)||"النسرين"]}),k.jsx("p",{className:"text-lg text-muted-foreground mb-6",children:(t==null?void 0:t.storyDescription)||"أفضل الأصباغ والمواد للبناء"}),k.jsx("button",{onClick:()=>{u("interior"),C("interior")},className:"bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90",children:"تسوق الآن"})]})}),ze.length>0&&k.jsxs("section",{children:[k.jsx("h2",{className:"text-3xl font-bold mb-8",children:"المنتجات المميزة"}),k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:ze.map(T=>k.jsx(sy,{product:T,onAdd:V,onView:R=>{pe(R),u("home")}},T.id))})]}),k.jsxs("section",{children:[k.jsx("h2",{className:"text-3xl font-bold mb-8",children:"الفئات"}),k.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:["interior","exterior","materials"].map(T=>k.jsxs("button",{onClick:()=>{u(T),C(T)},className:"group relative rounded-lg overflow-hidden h-48 md:h-64",children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"}),k.jsx("div",{className:"absolute inset-0 bg-secondary group-hover:scale-110 transition-transform duration-300"}),k.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-20 text-white",children:[k.jsx("h3",{className:"text-2xl font-bold mb-2",children:Yh[T]}),k.jsx("p",{className:"text-sm opacity-90",children:oy[T]})]})]},T))})]})]}),["interior","exterior","materials"].includes(o)&&k.jsxs("div",{className:"space-y-8",children:[k.jsxs("div",{children:[k.jsx("h1",{className:"text-3xl font-bold mb-4",children:Yh[o]}),k.jsx("p",{className:"text-muted-foreground mb-8",children:oy[o]})]}),k.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:we.map(T=>k.jsx(sy,{product:T,onAdd:V,onView:pe},T.id))}),we.length===0&&k.jsx("div",{className:"text-center py-12",children:k.jsx("p",{className:"text-muted-foreground",children:"لا توجد منتجات في هذه الفئة"})})]}),o==="cart"&&k.jsxs("div",{className:"max-w-4xl mx-auto",children:[k.jsx("h1",{className:"text-3xl font-bold mb-8",children:"سلة التسوق"}),h.length===0?k.jsxs("div",{className:"text-center py-12",children:[k.jsx(Jh,{size:48,className:"mx-auto mb-4 text-muted-foreground"}),k.jsx("p",{className:"text-muted-foreground mb-4",children:"سلتك فارغة"}),k.jsx("button",{onClick:()=>u("home"),className:"bg-primary text-primary-foreground px-6 py-2 rounded-lg",children:"العودة للتسوق"})]}):k.jsxs("div",{className:"space-y-6",children:[k.jsx("div",{className:"space-y-4",children:h.map((T,R)=>{var N;return k.jsxs("div",{className:"flex gap-4 p-4 border border-border rounded-lg",children:[k.jsx("img",{src:T.product.image,alt:T.product.name,className:"w-20 h-20 object-cover rounded"}),k.jsxs("div",{className:"flex-1",children:[k.jsx("h3",{className:"font-semibold",children:T.product.name}),k.jsx("p",{className:"text-sm text-muted-foreground",children:T.selectedSize.size}),T.selectedColor&&k.jsx("p",{className:"text-sm text-muted-foreground",children:T.selectedColor.name}),k.jsxs("p",{className:"font-semibold mt-2",children:[(T.selectedSize.price+(((N=T.selectedColor)==null?void 0:N.price)||0)).toFixed(2)," ر.ع"]})]}),k.jsxs("div",{className:"flex flex-col items-end gap-2",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx("button",{onClick:()=>m(h.map((b,A)=>A===R?{...b,quantity:Math.max(1,b.quantity-1)}:b)),className:"p-1 hover:bg-secondary rounded",children:k.jsx(uE,{size:16})}),k.jsx("span",{className:"w-8 text-center",children:T.quantity}),k.jsx("button",{onClick:()=>m(h.map((b,A)=>A===R?{...b,quantity:b.quantity+1}:b)),className:"p-1 hover:bg-secondary rounded",children:k.jsx(ly,{size:16})})]}),k.jsx("button",{onClick:()=>S(R),className:"text-destructive hover:bg-destructive/10 p-1 rounded",children:k.jsx(cy,{size:16})})]})]},R)})}),k.jsxs("div",{className:"border-t border-border pt-6",children:[k.jsxs("div",{className:"flex justify-between items-center mb-4",children:[k.jsx("span",{className:"text-lg font-semibold",children:"الإجمالي:"}),k.jsxs("span",{className:"text-2xl font-bold text-primary",children:[Te.toFixed(2)," ر.ع"]})]}),k.jsx("button",{onClick:()=>{alert("شكراً لطلبك! سيتم التواصل معك قريباً."),m([]),u("home")},className:"w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90",children:"إتمام الطلب"})]})]})]}),o==="about"&&k.jsxs("div",{className:"max-w-4xl mx-auto space-y-12",children:[k.jsxs("section",{children:[k.jsx("h1",{className:"text-4xl font-bold mb-6",children:(t==null?void 0:t.aboutTitle)||"عن الشركة"}),k.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:(t==null?void 0:t.aboutDescription)||"نحن نقدم أفضل المنتجات والخدمات"})]}),k.jsxs("section",{children:[k.jsx("h2",{className:"text-3xl font-bold mb-6",children:(t==null?void 0:t.storyTitle)||"قصتنا"}),k.jsx("p",{className:"text-lg text-muted-foreground leading-relaxed",children:(t==null?void 0:t.storyDescription)||"بدأنا رحلتنا بحلم واحد..."})]})]}),o==="contact"&&k.jsxs("div",{className:"max-w-4xl mx-auto space-y-8",children:[k.jsx("h1",{className:"text-4xl font-bold mb-8",children:"اتصل بنا"}),k.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[k.jsxs("div",{className:"p-6 border border-border rounded-lg text-center",children:[k.jsx(fE,{size:32,className:"mx-auto mb-4 text-primary"}),k.jsx("h3",{className:"font-semibold mb-2",children:"الهاتف"}),k.jsx("a",{href:`tel:${t==null?void 0:t.contactPhone}`,className:"text-primary hover:underline",children:t==null?void 0:t.contactPhone})]}),k.jsxs("div",{className:"p-6 border border-border rounded-lg text-center",children:[k.jsx(rE,{size:32,className:"mx-auto mb-4 text-primary"}),k.jsx("h3",{className:"font-semibold mb-2",children:"البريد الإلكتروني"}),k.jsx("a",{href:`mailto:${t==null?void 0:t.contactEmail}`,className:"text-primary hover:underline",children:t==null?void 0:t.contactEmail})]}),k.jsxs("div",{className:"p-6 border border-border rounded-lg text-center",children:[k.jsx(sE,{size:32,className:"mx-auto mb-4 text-primary"}),k.jsx("h3",{className:"font-semibold mb-2",children:"العنوان"}),k.jsx("p",{className:"text-muted-foreground",children:t==null?void 0:t.contactAddress})]})]}),k.jsxs("div",{className:"p-6 border border-border rounded-lg",children:[k.jsx("h3",{className:"font-semibold mb-4",children:"أرسل لنا رسالة"}),k.jsxs("form",{className:"space-y-4",children:[k.jsx("input",{type:"text",placeholder:"اسمك",className:"w-full px-4 py-2 border border-border rounded-lg"}),k.jsx("input",{type:"email",placeholder:"بريدك الإلكتروني",className:"w-full px-4 py-2 border border-border rounded-lg"}),k.jsx("textarea",{placeholder:"رسالتك",rows:5,className:"w-full px-4 py-2 border border-border rounded-lg"}),k.jsx("button",{type:"submit",className:"w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:bg-primary/90",children:"إرسال"})]})]})]})]}),q&&k.jsx(IC,{settings:t,products:i,onClose:()=>me(!1)}),k.jsx("footer",{className:"bg-secondary border-t border-border mt-12",children:k.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:k.jsx("div",{className:"text-center text-muted-foreground",children:k.jsxs("p",{children:["© 2024 ",(t==null?void 0:t.companyName)||"النسرين",". جميع الحقوق محفوظة."]})})})})]})}Q0.createRoot(document.getElementById("root")).render(k.jsx(SC,{}));
