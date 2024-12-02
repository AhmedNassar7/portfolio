import{g as e}from"./aos.BzuNLWYB.js";var t={},n={},r={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r;"undefined"!=typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(r=window).gtag.apply(r,t))};e.default=t}(r);var o={};!function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=e||"";r&&(a=e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,n,r){return n>0&&n+e.length!==r.length&&e.search(t)>-1&&":"!==r.charAt(n-2)&&("-"!==r.charAt(n+e.length)||"-"===r.charAt(n-1))&&r.charAt(n-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})));o&&(a=function(e){if(function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e))return n;return e}(a));return a};var t=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var n="REDACTED (Potential Email Address)"}(o),function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.GA4=void 0;var t=c(r),n=c(o),a=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],u=["page","hitType"];function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function g(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,i,u=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t);else for(;!(c=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(f){l=!0,o=f}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t,n){return t&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===f(t)?t:String(t)}var h=function(){function e(){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"reset",(function(){r.isInitialized=!1,r._testMode=!1,r._currentMeasurementId,r._hasLoadedGA=!1,r._isQueuing=!1,r._queueGtag=[]})),_(this,"_gtag",(function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];r._testMode||r._isQueuing?r._queueGtag.push(n):t.default.apply(void 0,n)})),_(this,"_loadGA",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!=typeof window&&"undefined"!=typeof document&&!r._hasLoadedGA){var o=document.createElement("script");o.async=!0,o.src="".concat(n,"?id=").concat(e),t&&o.setAttribute("nonce",t),document.body.appendChild(o),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},r._hasLoadedGA=!0}})),_(this,"_toGtagOptions",(function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce((function(e,n){var r=d(n,2),o=r[0],a=r[1];return t[o]?e[t[o]]=a:e[o]=a,e}),{})}})),_(this,"initialize",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Require GA_MEASUREMENT_ID");var n="string"==typeof e?[{trackingId:e}]:e;r._currentMeasurementId=n[0].trackingId;var o=t.gaOptions,a=t.gtagOptions,i=t.nonce,u=t.testMode,c=void 0!==u&&u,l=t.gtagUrl;if(r._testMode=c,c||r._loadGA(r._currentMeasurementId,i,l),r.isInitialized||(r._gtag("js",new Date),n.forEach((function(e){var t=p(p(p({},r._toGtagOptions(p(p({},o),e.gaOptions))),a),e.gtagOptions);Object.keys(t).length?r._gtag("config",e.trackingId,t):r._gtag("config",e.trackingId)}))),r.isInitialized=!0,!c){var f=g(r._queueGtag);for(r._queueGtag=[],r._isQueuing=!1;f.length;){var s=f.shift();r._gtag.apply(r,g(s)),"get"===s[0]&&(r._isQueuing=!0)}}})),_(this,"set",(function(e){e&&"object"===f(e)&&(Object.keys(e).length,r._gaCommand("set",e))})),_(this,"_gaCommandSendEvent",(function(e,t,n,o,a){r._gtag("event",t,p(p({event_category:e,event_label:n,value:o},a&&{non_interaction:a.nonInteraction}),r._toGtagOptions(a)))})),_(this,"_gaCommandSendEventParameters",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if("string"==typeof t[0])r._gaCommandSendEvent.apply(r,g(t.slice(1)));else{var o=t[0],i=o.eventCategory,u=o.eventAction,c=o.eventLabel,f=o.eventValue;o.hitType;var s=l(o,a);r._gaCommandSendEvent(i,u,c,f,s)}})),_(this,"_gaCommandSendTiming",(function(e,t,n,o){r._gtag("event","timing_complete",{name:t,value:n,event_category:e,event_label:o})})),_(this,"_gaCommandSendPageview",(function(e,t){if(t&&Object.keys(t).length){var n=r._toGtagOptions(t),o=n.title,a=n.location,u=l(n,i);r._gtag("event","page_view",p(p(p(p({},e&&{page_path:e}),o&&{page_title:o}),a&&{page_location:a}),u))}else e?r._gtag("event","page_view",{page_path:e}):r._gtag("event","page_view")})),_(this,"_gaCommandSendPageviewParameters",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if("string"==typeof t[0])r._gaCommandSendPageview.apply(r,g(t.slice(1)));else{var o=t[0],a=o.page;o.hitType;var i=l(o,u);r._gaCommandSendPageview(a,i)}})),_(this,"_gaCommandSend",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];switch("string"==typeof t[0]?t[0]:t[0].hitType){case"event":r._gaCommandSendEventParameters.apply(r,t);break;case"pageview":r._gaCommandSendPageviewParameters.apply(r,t);break;case"timing":r._gaCommandSendTiming.apply(r,g(t.slice(1)))}})),_(this,"_gaCommandSet",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&(t[0]=_({},t[0],t[1])),r._gtag("set",r._toGtagOptions(t[0]))})),_(this,"_gaCommand",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];switch(e){case"send":r._gaCommandSend.apply(r,n);break;case"set":r._gaCommandSet.apply(r,n)}})),_(this,"ga",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if("string"==typeof t[0])r._gaCommand.apply(r,t);else{var o=t[0];r._gtag("get",r._currentMeasurementId,"client_id",(function(e){r._isQueuing=!1;var t=r._queueGtag;for(o({get:function(t){return"clientId"===t?e:"trackingId"===t?r._currentMeasurementId:"apiVersion"===t?"1":void 0}});t.length;){var n=t.shift();r._gtag.apply(r,g(n))}})),r._isQueuing=!0}return r.ga})),_(this,"event",(function(e,t){if("string"==typeof e)r._gtag("event",e,r._toGtagOptions(t));else{var o=e.action,a=e.category,i=e.label,u=e.value,c=e.nonInteraction,l=e.transport;if(!a||!o)return;var f={hitType:"event",eventCategory:(0,n.default)(a),eventAction:(0,n.default)(o)};i&&(f.eventLabel=(0,n.default)(i)),void 0!==u&&("number"!=typeof u||(f.eventValue=u)),void 0!==c&&("boolean"!=typeof c||(f.nonInteraction=c)),void 0!==l&&("string"!=typeof l||(["beacon","xhr","image"].indexOf(l),f.transport=l)),r._gaCommand("send",f)}})),_(this,"send",(function(e){r._gaCommand("send",e)})),this.reset()}return m(e,[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}]),e}();e.GA4=h;var w=new h;e.default=w}(n),function(e){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.ReactGAImplementation=void 0;var r=function(e,n){if(e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var r=o(n);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var c=i?Object.getOwnPropertyDescriptor(e,u):null;c&&(c.get||c.set)?Object.defineProperty(a,u,c):a[u]=e[u]}a.default=e,r&&r.set(e,a);return a}(n);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}var a=r.GA4;e.ReactGAImplementation=a;var i=r.default;e.default=i}(t);const a=e(t);export{a as R};