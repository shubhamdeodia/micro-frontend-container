(()=>{var e,r,t,n,a={2352:(e,r,t)=>{Promise.all([t.e(800),t.e(271),t.e(454)]).then(t.bind(t,4454))},2552:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof marketing)return e();t.l("https://victorious-beach-0a62b9910.azurestaticapps.net/remoteEntry.js",(t=>{if("undefined"!=typeof marketing)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"marketing")})).then((()=>marketing))}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,i),t.exports}i.m=a,i.c=o,i.amdO={},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>e+"."+{271:"65b041b681c35172e497",294:"15a231e7eb82261a6d27",299:"01a2b4aabf55f8215054",338:"c1f953d69cafca8925bf",385:"8d7fbcaa25724f16e6e3",454:"73f37233083f097e2550",800:"9f932c56ab5d094cc3c7",935:"55dbfe6a91a23c5b1d20"}[e]+".js",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="container:",i.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var u,f;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var c=s[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+a){u=c;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.setAttribute("data-webpack",r+a),u.src=t),e[t]=[n];var d=(r,n)=>{u.onerror=u.onload=null,clearTimeout(p);var a=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),f&&document.head.appendChild(u)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={454:[4688]},n={4688:["default","./MarketingApp",2552]},i.f.remotes=(e,r)=>{i.o(t,e)&&t[e].forEach((e=>{var t=i.R;t||(t=[]);var o=n[e];if(!(t.indexOf(o)>=0)){if(t.push(o),o.p)return r.push(o.p);var u=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),a[e]=()=>{throw r},o.p=0},f=(e,t,n,a,i,f)=>{try{var s=e(t,n);if(!s||!s.then)return i(s,a,f);var l=s.then((e=>i(e,a)),u);if(!f)return l;r.push(o.p=l)}catch(e){u(e)}},s=(e,r,n)=>f(r.get,o[1],t,0,l,n),l=r=>{o.p=1,a[e]=e=>{e.exports=r()}};f(i,o[2],0,0,((e,r,t)=>e?f(i.I,o[0],0,e,s,t):u()),1)}}))},(()=>{i.S={};var e={},r={};i.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];i.o(i.S,t)||(i.S[t]={});var o=i.S[t],u="container",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:u>i.from))&&(a[r]={get:t,from:u,eager:!!n})},s=[];return"default"===t&&(f("keycloak-js","9.0.3",(()=>i.e(385).then((()=>()=>i(2385))))),f("react-dom","17.0.1",(()=>Promise.all([i.e(935),i.e(271)]).then((()=>()=>i(3935))))),f("react-router-dom","5.2.0",(()=>Promise.all([i.e(338),i.e(271),i.e(299)]).then((()=>()=>i(3338))))),f("react","17.0.1",(()=>i.e(294).then((()=>()=>i(7294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=i(2552);if(!a)return;var o=e=>e&&e.init&&e.init(i.S[t],n);if(a.then)return s.push(a.then(o,r));var u=o(a);u&&u.then&&s.push(u.catch(r))}catch(e){r(e)}})()),s.length?e[t]=Promise.all(s).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,f=!0;;u++,i++){var s,l,c=u<t.length?(typeof t[u])[0]:"";if(i>=n.length||"o"==(l=(typeof(s=n[i]))[0]))return!f||("u"==c?u>a&&!o:""==c!=o);if("u"==l){if(!f||"u"!=c)return!1}else if(f)if(c==l)if(u<=a){if(s!=t[u])return!1}else{if(o?s>t[u]:s<t[u])return!1;s!=t[u]&&(f=!1)}else if("s"!=c&&"n"!=c){if(o||u<=a)return!1;f=!1,u--}else{if(u<=a||l<c!=o)return!1;f=!1}else"s"!=c&&"n"!=c&&(f=!1,u--)}}var d=[],p=d.pop.bind(d);for(i=1;i<t.length;i++){var h=t[i];d.push(1==h?p()|p():2==h?p()&p():h?r(h,n):!p())}return!!p()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=i.I(r);return o&&o.then?o.then(e.bind(e,r,i.S[r],t,n,a)):e(r,i.S[r],t,n,a)})(((e,r,n,a,o)=>{var u=r&&i.o(r,n)&&t(r,n,a);return u?(e=>(e.loaded=1,e.get()))(u):o()})),a={},o={7271:()=>n("default","react",[1,17,0,1],(()=>i.e(294).then((()=>()=>i(7294))))),334:()=>n("default","react-router-dom",[1,5,2,0],(()=>i.e(338).then((()=>()=>i(3338))))),7650:()=>n("default","react-dom",[1,17,0,1],(()=>i.e(935).then((()=>()=>i(3935))))),8e3:()=>n("default","keycloak-js",[1,9,0,3],(()=>i.e(385).then((()=>()=>i(2385)))))},u={271:[7271],454:[334,7650,8e3]};i.f.consumes=(e,r)=>{i.o(u,e)&&u[e].forEach((e=>{if(i.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,i.m[e]=t=>{delete i.c[e],t.exports=r()}},n=r=>{delete a[e],i.m[e]=t=>{throw delete i.c[e],r}};try{var u=o[e]();u.then?r.push(a[e]=u.then(t).catch(n)):t(u)}catch(e){n(e)}}))}})(),(()=>{var e={179:0};i.f.j=(r,t)=>{var n=i.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=i.p+i.u(r),u=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",u.name="ChunkLoadError",u.type=a,u.request=o,n[1](u)}}),"chunk-"+r,r)}else e[r]=0};var r=(r,t)=>{var n,a,[o,u,f]=t,s=0;if(o.some((r=>0!==e[r]))){for(n in u)i.o(u,n)&&(i.m[n]=u[n]);f&&f(i)}for(r&&r(t);s<o.length;s++)a=o[s],i.o(e,a)&&e[a]&&e[a][0](),e[o[s]]=0},t=self.webpackChunkcontainer=self.webpackChunkcontainer||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i(2352)})();