!function(R,w){"object"==typeof exports&&"object"==typeof module?module.exports=w():"function"==typeof define&&define.amd?define([],w):"object"==typeof exports?exports.Pushy=w():R.Pushy=w()}(this,function(){return function(R){function w(v){if(b[v])return b[v].exports;var I=b[v]={exports:{},id:v,loaded:!1};return R[v].call(I.exports,I,I.exports,w),I.loaded=!0,I.exports}var b={};return w.m=R,w.c=b,w.p="build/",w(0)}([function(R,w,b){"use strict";function v(o){return o&&o.__esModule?o:{default:o}}var I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},l=v(b(2)),u=v(b(1)),k=v(b(3)),h=v(b(5)),P={register:function(o){var t=this;return new h.default(function(i,r){var s,y,A,d,c,m,T,e,n,g,j,x,E;return regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:if(o&&"object"===(void 0===o?"undefined":I(o))||(o={}),"serviceWorker"in navigator&&"PushManager"in window){a.next=3;break}return a.abrupt("return",r(new Error("Web push is not supported by this browser.")));case 3:if("undefined"!=typeof localStorage){a.next=5;break}return a.abrupt("return",r(new Error("Local storage is not supported by this browser.")));case 5:return s=o.serviceWorkerFile||u.default.serviceWorker.fileName,y={scope:o.serviceWorkerScope||"./"},A=void 0,a.prev=8,a.next=11,regeneratorRuntime.awrap(navigator.serviceWorker.register("/"+s,y));case 11:A=a.sent,a.next=17;break;case 14:return a.prev=14,a.t0=a.catch(8),a.abrupt("return",r(new Error("Failed to load '"+window.location.origin+"/"+s+"': "+a.t0.message,a.t0)));case 17:return a.next=19,regeneratorRuntime.awrap(navigator.serviceWorker.ready);case 19:return a.next=21,regeneratorRuntime.awrap(A.pushManager.getSubscription());case 21:if(d=a.sent){a.next=37;break}return c=t.isEnterpriseConfigured()?u.default.vapidDetails.enterprisePublicKey:u.default.vapidDetails.publicKey,a.prev=24,a.next=27,regeneratorRuntime.awrap(A.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:k.default.urlB64ToUint8Array(c)}));case 27:d=a.sent,a.next=35;break;case 30:if(a.prev=30,a.t1=a.catch(24),!navigator.brave||-1===a.t1.message.indexOf("push service error")){a.next=34;break}return a.abrupt("return",r(new Error('Please enable "Use Google Services for Push Messaging" in Brave settings to use this feature',a.t1)));case 34:return a.abrupt("return",r(new Error("Failed to subscribe the device: "+a.t1.message,a.t1)));case 35:a.next=50;break;case 37:if(m=localStorage.getItem(u.default.localStorageKeys.token),T=localStorage.getItem(u.default.localStorageKeys.tokenAuth),e=localStorage.getItem(u.default.localStorageKeys.tokenAppId),m&&e&&o.appId&&"string"==typeof e&&e!==o.appId&&(m=void 0),!m||!T){a.next=50;break}return a.prev=42,a.next=45,regeneratorRuntime.awrap(t.validateDeviceCredentials());case 45:return a.abrupt("return",i(m));case 48:a.prev=48,a.t2=a.catch(42);case 50:if(d=JSON.parse(JSON.stringify(d)),n=d.keys.auth,j=d.endpoint,(g=d.keys.p256dh)&&n&&j){a.next=56;break}return a.abrupt("return",r(new Error("The push subscription is missing a required field.")));case 56:return x={sdk:u.default.version,platform:u.default.platform,subscription:{endpoint:j,key:g,auth:n}},o.appId?x.appId=o.appId:x.app=window.location.hostname,E=void 0,a.prev=59,a.next=62,regeneratorRuntime.awrap(l.default.post("/register",x));case 62:E=a.sent,a.next=68;break;case 65:return a.prev=65,a.t3=a.catch(59),a.abrupt("return",r(new Error("The API request failed: "+a.t3.message,a.t3)));case 68:if(E.token&&E.auth){a.next=70;break}return a.abrupt("return",r(new Error("An unexpected response was received from the Pushy API.")));case 70:localStorage.setItem(u.default.localStorageKeys.token,E.token),localStorage.setItem(u.default.localStorageKeys.tokenAuth,E.auth),o.appId&&localStorage.setItem(u.default.localStorageKeys.tokenAppId,o.appId),i(E.token);case 74:case"end":return a.stop()}},null,t,[[8,14],[24,30],[42,48],[59,65]])})},setNotificationListener:function(o){navigator.serviceWorker.addEventListener("message",function(t){t.data&&t.data._pushy&&o(t.data)})},isRegistered:function(){var o=localStorage.getItem(u.default.localStorageKeys.token),t=localStorage.getItem(u.default.localStorageKeys.tokenAuth);return o&&t},subscribe:function(o){var t=this;return new h.default(function(i,r){var s,y,A,d;return regeneratorRuntime.async(function(c){for(;;)switch(c.prev=c.next){case 0:if("undefined"!=typeof localStorage){c.next=2;break}return c.abrupt("return",r(new Error("Local storage is not supported by this browser.")));case 2:if(s=localStorage.getItem(u.default.localStorageKeys.token),y=localStorage.getItem(u.default.localStorageKeys.tokenAuth),s&&y){c.next=6;break}return c.abrupt("return",r(new Error("This device is not registered to receive push notifications.")));case 6:return"string"==typeof o&&(o=[o]),A={token:s,auth:y,topics:o},d=void 0,c.prev=9,c.next=12,regeneratorRuntime.awrap(l.default.post("/devices/subscribe",A));case 12:d=c.sent,c.next=18;break;case 15:return c.prev=15,c.t0=c.catch(9),c.abrupt("return",r(new Error("The API request failed: "+c.t0.message,c.t0)));case 18:if(d.success){c.next=20;break}return c.abrupt("return",r(new Error("An unexpected response was received from the Pushy API.")));case 20:i();case 21:case"end":return c.stop()}},null,t,[[9,15]])})},unsubscribe:function(o){var t=this;return new h.default(function(i,r){var s,y,A,d;return regeneratorRuntime.async(function(c){for(;;)switch(c.prev=c.next){case 0:if("undefined"!=typeof localStorage){c.next=2;break}return c.abrupt("return",r(new Error("Local storage is not supported by this browser.")));case 2:if(s=localStorage.getItem(u.default.localStorageKeys.token),y=localStorage.getItem(u.default.localStorageKeys.tokenAuth),s&&y){c.next=6;break}return c.abrupt("return",r(new Error("This device is not registered to receive push notifications.")));case 6:return"string"==typeof o&&(o=[o]),A={token:s,auth:y,topics:o},d=void 0,c.prev=9,c.next=12,regeneratorRuntime.awrap(l.default.post("/devices/unsubscribe",A));case 12:d=c.sent,c.next=18;break;case 15:return c.prev=15,c.t0=c.catch(9),c.abrupt("return",r(new Error("The API request failed: "+c.t0.message,c.t0)));case 18:if(d.success){c.next=20;break}return c.abrupt("return",r(new Error("An unexpected response was received from the Pushy API.")));case 20:i();case 21:case"end":return c.stop()}},null,t,[[9,15]])})},validateDeviceCredentials:function(){var o=this;return new h.default(function(t,i){var r,s,y,A;return regeneratorRuntime.async(function(d){for(;;)switch(d.prev=d.next){case 0:if(o.attemptedValidation=!0,"undefined"!=typeof localStorage){d.next=3;break}return d.abrupt("return",i(new Error("Local storage is not supported by this browser.")));case 3:if(r=localStorage.getItem(u.default.localStorageKeys.token),s=localStorage.getItem(u.default.localStorageKeys.tokenAuth),r&&s){d.next=7;break}return d.abrupt("return",i(new Error("The device is not registered to receive push notifications.")));case 7:return y={sdk:u.default.version,token:r,auth:s},A=void 0,d.prev=9,d.next=12,regeneratorRuntime.awrap(l.default.post("/devices/auth",y));case 12:A=d.sent,d.next=18;break;case 15:return d.prev=15,d.t0=d.catch(9),d.abrupt("return",i(new Error("The API request failed: "+d.t0.message,d.t0)));case 18:if(A.success){d.next=20;break}return d.abrupt("return",i(new Error("An unexpected response was received from the Pushy API.")));case 20:t();case 21:case"end":return d.stop()}},null,o,[[9,15]])})},isEnterpriseConfigured:function(){return null!=localStorage.getItem(u.default.localStorageKeys.enterpriseEndpoint)},setEnterpriseConfig:function(o){"string"==typeof o&&"/"===o.substr(-1)&&(o=o.substr(0,o.length-1)),o!=localStorage.getItem(u.default.localStorageKeys.enterpriseEndpoint)&&(localStorage.removeItem(u.default.localStorageKeys.token),localStorage.removeItem(u.default.localStorageKeys.tokenAuth),localStorage.removeItem(u.default.localStorageKeys.tokenAppId),localStorage.setItem(u.default.localStorageKeys.enterpriseEndpoint,o))}};setTimeout(function(){P.isRegistered()&&(P.attemptedValidation||P.validateDeviceCredentials().catch(function(o){console.error("Device validation failed",o)}))},u.default.logic.deviceValidationDelay),R.exports=P},function(R,w){"use strict";R.exports={version:1008,platform:"web",api:{endpoint:"https://api.pushy.me",devEndpoint:"http://localhost:3001"},vapidDetails:{publicKey:"BMHDCTp0zHPUj9snbHxwQZh2ppoypdOpuAQtBjf2Gj9KKwCHCcN_f2GFzwmzohRWYUPVcR0psb5VQTnGy-gY8iE",enterprisePublicKey:"BDZ1EQHwxF3dFQ5LccxKD5rdOPlO5iLLIAbxxm-1fIuMLQQcXa_UUD8CRja_iBmlmlQZsookpGnHaSTsbb-Rglo"},localStorageKeys:{token:"pushyToken",tokenAuth:"pushyTokenAuth",tokenAppId:"pushyTokenAppId",enterpriseEndpoint:"pushyEnterpriseEndpoint"},serviceWorker:{fileName:"service-worker.js"},logic:{deviceValidationDelay:5e3}}},function(R,w,b){"use strict";Object.defineProperty(w,"__esModule",{value:!0}),b(8);var f=function v(l){return l&&l.__esModule?l:{default:l}}(b(1));w.default={get:function(l,p){return regeneratorRuntime.async(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,regeneratorRuntime.awrap(this.execute(l,p||{}));case 2:return u.abrupt("return",u.sent);case 3:case"end":return u.stop()}},null,this)},post:function(l,p,u){return regeneratorRuntime.async(function(_){for(;;)switch(_.prev=_.next){case 0:return(u=u||{}).method="POST",u.body=JSON.stringify(p),u.headers={"Content-Type":"application/json"},_.next=6,regeneratorRuntime.awrap(this.execute(l,u));case 6:return _.abrupt("return",_.sent);case 7:case"end":return _.stop()}},null,this)},execute:function(l,p){var u,_;return regeneratorRuntime.async(function(h){for(;;)switch(h.prev=h.next){case 0:return u=this.getApiHost()+l,h.next=3,regeneratorRuntime.awrap(fetch(u,p));case 3:if(!((_=h.sent).status<200||_.status>299)){h.next=10;break}return h.next=7,regeneratorRuntime.awrap(_.json());case 7:throw{status:_.status,message:h.sent.error||"An unknown error occurred"};case 10:return h.next=12,regeneratorRuntime.awrap(_.json());case 12:return h.abrupt("return",h.sent);case 13:case"end":return h.stop()}},null,this)},getApiHost:function(){return localStorage.getItem(f.default.localStorageKeys.enterpriseEndpoint)||f.default.api.endpoint}}},function(R,w){"use strict";Object.defineProperty(w,"__esModule",{value:!0}),w.default={urlB64ToUint8Array:function(b){for(var I=(b+"=".repeat((4-b.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),f=window.atob(I),l=new Uint8Array(f.length),p=0;p<f.length;++p)l[p]=f.charCodeAt(p);return l}}},function(R,w){function b(){throw new Error("setTimeout has not been defined")}function v(){throw new Error("clearTimeout has not been defined")}function I(r){if(k===setTimeout)return setTimeout(r,0);if((k===b||!k)&&setTimeout)return k=setTimeout,setTimeout(r,0);try{return k(r,0)}catch(s){try{return k.call(null,r,0)}catch(y){return k.call(this,r,0)}}}function l(){t&&P&&(t=!1,P.length?o=P.concat(o):i=-1,o.length&&p())}function p(){if(!t){var r=I(l);t=!0;for(var s=o.length;s;){for(P=o,o=[];++i<s;)P&&P[i].run();i=-1,s=o.length}P=null,t=!1,function f(r){if(S===clearTimeout)return clearTimeout(r);if((S===v||!S)&&clearTimeout)return S=clearTimeout,clearTimeout(r);try{S(r)}catch(s){try{return S.call(null,r)}catch(y){return S.call(this,r)}}}(r)}}function u(r,s){this.fun=r,this.array=s}function _(){}var k,S,h=R.exports={};!function(){try{k="function"==typeof setTimeout?setTimeout:b}catch(r){k=b}try{S="function"==typeof clearTimeout?clearTimeout:v}catch(r){S=v}}();var P,o=[],t=!1,i=-1;h.nextTick=function(r){var s=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)s[y-1]=arguments[y];o.push(new u(r,s)),1!==o.length||t||I(p)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=_,h.addListener=_,h.once=_,h.off=_,h.removeListener=_,h.removeAllListeners=_,h.emit=_,h.prependListener=_,h.prependOnceListener=_,h.listeners=function(r){return[]},h.binding=function(r){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(r){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(R,w,b){(function(v){!function(I){function f(){}function p(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],P(t,this)}function u(t,i){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(i):(t._handled=!0,void p._immediateFn(function(){var r=1===t._state?i.onFulfilled:i.onRejected;if(null!==r){var s;try{s=r(t._value)}catch(y){return void k(i.promise,y)}_(i.promise,s)}else(1===t._state?_:k)(i.promise,t._value)}))}function _(t,i){try{if(i===t)throw new TypeError("A promise cannot be resolved with itself.");if(i&&("object"==typeof i||"function"==typeof i)){var r=i.then;if(i instanceof p)return t._state=3,t._value=i,void S(t);if("function"==typeof r)return void P(function l(t,i){return function(){t.apply(i,arguments)}}(r,i),t)}t._state=1,t._value=i,S(t)}catch(s){k(t,s)}}function k(t,i){t._state=2,t._value=i,S(t)}function S(t){2===t._state&&0===t._deferreds.length&&p._immediateFn(function(){t._handled||p._unhandledRejectionFn(t._value)});for(var i=0,r=t._deferreds.length;i<r;i++)u(t,t._deferreds[i]);t._deferreds=null}function h(t,i,r){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof i?i:null,this.promise=r}function P(t,i){var r=!1;try{t(function(s){r||(r=!0,_(i,s))},function(s){r||(r=!0,k(i,s))})}catch(s){if(r)return;r=!0,k(i,s)}}var o=setTimeout;p.prototype.catch=function(t){return this.then(null,t)},p.prototype.then=function(t,i){var r=new this.constructor(f);return u(this,new h(t,i,r)),r},p.all=function(t){var i=Array.prototype.slice.call(t);return new p(function(r,s){function y(c,m){try{if(m&&("object"==typeof m||"function"==typeof m)){var T=m.then;if("function"==typeof T)return void T.call(m,function(e){y(c,e)},s)}i[c]=m,0==--A&&r(i)}catch(e){s(e)}}if(0===i.length)return r([]);for(var A=i.length,d=0;d<i.length;d++)y(d,i[d])})},p.resolve=function(t){return t&&"object"==typeof t&&t.constructor===p?t:new p(function(i){i(t)})},p.reject=function(t){return new p(function(i,r){r(t)})},p.race=function(t){return new p(function(i,r){for(var s=0,y=t.length;s<y;s++)t[s].then(i,r)})},p._immediateFn="function"==typeof v&&function(t){v(t)}||function(t){o(t,0)},p._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},p._setImmediateFn=function(t){p._immediateFn=t},p._setUnhandledRejectionFn=function(t){p._unhandledRejectionFn=t},void 0!==R&&R.exports?R.exports=p:I.Promise||(I.Promise=p)}(this)}).call(w,b(7).setImmediate)},function(R,w,b){(function(v,I){!function(f,l){"use strict";function u(m){delete y[m]}function k(m){if(A)setTimeout(k,0,m);else{var T=y[m];if(T){A=!0;try{!function _(m){var T=m.callback,e=m.args;switch(e.length){case 0:T();break;case 1:T(e[0]);break;case 2:T(e[0],e[1]);break;case 3:T(e[0],e[1],e[2]);break;default:T.apply(void 0,e)}}(T)}finally{u(m),A=!1}}}}if(!f.setImmediate){var r,s=1,y={},A=!1,d=f.document,c=Object.getPrototypeOf&&Object.getPrototypeOf(f);c=c&&c.setTimeout?c:f,"[object process]"==={}.toString.call(f.process)?function S(){r=function(m){I.nextTick(function(){k(m)})}}():function h(){if(f.postMessage&&!f.importScripts){var m=!0,T=f.onmessage;return f.onmessage=function(){m=!1},f.postMessage("","*"),f.onmessage=T,m}}()?function P(){var m="setImmediate$"+Math.random()+"$",T=function(e){e.source===f&&"string"==typeof e.data&&0===e.data.indexOf(m)&&k(+e.data.slice(m.length))};f.addEventListener?f.addEventListener("message",T,!1):f.attachEvent("onmessage",T),r=function(e){f.postMessage(m+e,"*")}}():f.MessageChannel?function o(){var m=new MessageChannel;m.port1.onmessage=function(T){k(T.data)},r=function(T){m.port2.postMessage(T)}}():d&&"onreadystatechange"in d.createElement("script")?function t(){var m=d.documentElement;r=function(T){var e=d.createElement("script");e.onreadystatechange=function(){k(T),e.onreadystatechange=null,m.removeChild(e),e=null},m.appendChild(e)}}():function i(){r=function(m){setTimeout(k,0,m)}}(),c.setImmediate=function p(m){"function"!=typeof m&&(m=new Function(""+m));for(var T=new Array(arguments.length-1),e=0;e<T.length;e++)T[e]=arguments[e+1];return y[s]={callback:m,args:T},r(s),s++},c.clearImmediate=u}}("undefined"==typeof self?void 0===v?this:v:self)}).call(w,function(){return this}(),b(4))},function(R,w,b){function v(f,l){this._id=f,this._clearFn=l}var I=Function.prototype.apply;w.setTimeout=function(){return new v(I.call(setTimeout,window,arguments),clearTimeout)},w.setInterval=function(){return new v(I.call(setInterval,window,arguments),clearInterval)},w.clearTimeout=w.clearInterval=function(f){f&&f.close()},v.prototype.unref=v.prototype.ref=function(){},v.prototype.close=function(){this._clearFn.call(window,this._id)},w.enroll=function(f,l){clearTimeout(f._idleTimeoutId),f._idleTimeout=l},w.unenroll=function(f){clearTimeout(f._idleTimeoutId),f._idleTimeout=-1},w._unrefActive=w.active=function(f){clearTimeout(f._idleTimeoutId);var l=f._idleTimeout;l>=0&&(f._idleTimeoutId=setTimeout(function(){f._onTimeout&&f._onTimeout()},l))},b(6),w.setImmediate=setImmediate,w.clearImmediate=clearImmediate},function(R,w){!function(b){"use strict";function v(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function I(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var n={next:function(){var g=e.shift();return{done:void 0===g,value:g}}};return y.iterable&&(n[Symbol.iterator]=function(){return n}),n}function l(e){this.map={},e instanceof l?e.forEach(function(n,g){this.append(g,n)},this):e&&Object.getOwnPropertyNames(e).forEach(function(n){this.append(n,e[n])},this)}function p(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function u(e){return new Promise(function(n,g){e.onload=function(){n(e.result)},e.onerror=function(){g(e.error)}})}function _(e){var n=new FileReader,g=u(n);return n.readAsArrayBuffer(e),g}function h(e){if(e.slice)return e.slice(0);var n=new Uint8Array(e.byteLength);return n.set(new Uint8Array(e)),n.buffer}function P(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(y.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(y.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(y.arrayBuffer&&y.blob&&d(e))this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!y.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!c(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=h(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},y.blob&&(this.blob=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?p(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(_)}),this.text=function(){var e=p(this);if(e)return e;if(this._bodyBlob)return function k(e){var n=new FileReader,g=u(n);return n.readAsText(e),g}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function S(e){for(var n=new Uint8Array(e),g=new Array(n.length),j=0;j<n.length;j++)g[j]=String.fromCharCode(n[j]);return g.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},y.formData&&(this.formData=function(){return this.text().then(i)}),this.json=function(){return this.text().then(JSON.parse)},this}function t(e,n){var g=(n=n||{}).body;if("string"==typeof e)this.url=e;else{if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,n.headers||(this.headers=new l(e.headers)),this.method=e.method,this.mode=e.mode,g||null==e._bodyInit||(g=e._bodyInit,e.bodyUsed=!0)}if(this.credentials=n.credentials||this.credentials||"omit",!n.headers&&this.headers||(this.headers=new l(n.headers)),this.method=function o(e){var n=e.toUpperCase();return m.indexOf(n)>-1?n:e}(n.method||this.method||"GET"),this.mode=n.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&g)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(g)}function i(e){var n=new FormData;return e.trim().split("&").forEach(function(g){if(g){var j=g.split("="),x=j.shift().replace(/\+/g," "),E=j.join("=").replace(/\+/g," ");n.append(decodeURIComponent(x),decodeURIComponent(E))}}),n}function r(e){var n=new l;return e.split("\r\n").forEach(function(g){var j=g.split(":"),x=j.shift().trim();if(x){var E=j.join(":").trim();n.append(x,E)}}),n}function s(e,n){n||(n={}),this.type="default",this.status="status"in n?n.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in n?n.statusText:"OK",this.headers=new l(n.headers),this.url=n.url||"",this._initBody(e)}if(!b.fetch){var y={searchParams:"URLSearchParams"in b,iterable:"Symbol"in b&&"iterator"in Symbol,blob:"FileReader"in b&&"Blob"in b&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in b,arrayBuffer:"ArrayBuffer"in b};if(y.arrayBuffer)var A=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=function(e){return e&&DataView.prototype.isPrototypeOf(e)},c=ArrayBuffer.isView||function(e){return e&&A.indexOf(Object.prototype.toString.call(e))>-1};l.prototype.append=function(e,n){e=v(e),n=I(n);var g=this.map[e];g||(this.map[e]=g=[]),g.push(n)},l.prototype.delete=function(e){delete this.map[v(e)]},l.prototype.get=function(e){var n=this.map[v(e)];return n?n[0]:null},l.prototype.getAll=function(e){return this.map[v(e)]||[]},l.prototype.has=function(e){return this.map.hasOwnProperty(v(e))},l.prototype.set=function(e,n){this.map[v(e)]=[I(n)]},l.prototype.forEach=function(e,n){Object.getOwnPropertyNames(this.map).forEach(function(g){this.map[g].forEach(function(j){e.call(n,j,g,this)},this)},this)},l.prototype.keys=function(){var e=[];return this.forEach(function(n,g){e.push(g)}),f(e)},l.prototype.values=function(){var e=[];return this.forEach(function(n){e.push(n)}),f(e)},l.prototype.entries=function(){var e=[];return this.forEach(function(n,g){e.push([g,n])}),f(e)},y.iterable&&(l.prototype[Symbol.iterator]=l.prototype.entries);var m=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];t.prototype.clone=function(){return new t(this,{body:this._bodyInit})},P.call(t.prototype),P.call(s.prototype),s.prototype.clone=function(){return new s(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},s.error=function(){var e=new s(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];s.redirect=function(e,n){if(-1===T.indexOf(n))throw new RangeError("Invalid status code");return new s(null,{status:n,headers:{location:e}})},b.Headers=l,b.Request=t,b.Response=s,b.fetch=function(e,n){return new Promise(function(g,j){var x=new t(e,n),E=new XMLHttpRequest;E.onload=function(){var a={status:E.status,statusText:E.statusText,headers:r(E.getAllResponseHeaders()||"")};a.url="responseURL"in E?E.responseURL:a.headers.get("X-Request-URL"),g(new s("response"in E?E.response:E.responseText,a))},E.onerror=function(){j(new TypeError("Network request failed"))},E.ontimeout=function(){j(new TypeError("Network request failed"))},E.open(x.method,x.url,!0),"include"===x.credentials&&(E.withCredentials=!0),"responseType"in E&&y.blob&&(E.responseType="blob"),x.headers.forEach(function(a,B){E.setRequestHeader(B,a)}),E.send(void 0===x._bodyInit?null:x._bodyInit)})},b.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)}])});