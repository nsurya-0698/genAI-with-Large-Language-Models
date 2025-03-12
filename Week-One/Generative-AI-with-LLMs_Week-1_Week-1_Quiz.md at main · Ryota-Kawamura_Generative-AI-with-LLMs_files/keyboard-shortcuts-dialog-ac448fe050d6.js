"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["keyboard-shortcuts-dialog"],{50045:(e,t,n)=>{n.d(t,{I:()=>r});let r=(0,n(96540).createContext)(null)},15498:(e,t,n)=>{var r=n(11110),i=n(74848),s=n(96540),a=n(11499),o=n(75177),l=n(63867),c=n(55847),d=n(91246),u=n(30871);function h({group:{service:{name:e},commands:t}}){let n=(0,s.useId)();return(0,i.jsxs)(o.A,{sx:{borderRadius:2,border:"1px solid",borderColor:"border.default",overflow:"hidden"},children:[(0,i.jsx)(o.A,{as:"h3",id:n,sx:{bg:"canvas.subtle",fontWeight:"bold",py:2,px:3,fontSize:1},children:e}),(0,i.jsx)(o.A,{as:"ul",role:"list","aria-labelledby":n,sx:{listStyleType:"none"},children:t.map(({id:e,name:t,keybinding:n})=>(0,i.jsxs)(o.A,{as:"li",sx:{borderTop:"1px solid",borderColor:"border.default",py:2,px:3,display:"flex",gap:2,justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)("div",{children:t}),(0,i.jsx)(o.A,{sx:{textAlign:"right"},children:(Array.isArray(n)?n:[n]).map((e,t)=>(0,i.jsxs)(s.Fragment,{children:[t>0&&" or ",(0,i.jsx)(u.U,{keys:e})]},e))})]},e))})]})}try{h.displayName||(h.displayName="ShortcutsGroupList")}catch{}let m={keyboardShortcuts:"Keyboard shortcuts",siteWideShortcuts:"Site-wide shortcuts",loading:"Loading"};n(74295);var p=n(47397),f=n(57572),y=n(50210);let g=()=>(0,i.jsxs)(o.A,{role:"status",sx:{display:"flex",height:"100%",justifyContent:"center",alignItems:"center"},children:[(0,i.jsx)(l.A,{size:"large"}),(0,i.jsx)("span",{className:"sr-only",children:m.loading})]}),x=(e,t)=>Array.isArray(e)?t?e.map(e=>(0,y.rd)(e)):e.map(e=>(0,y.rd)(e.replace(/ctrl/,"Mod+"))):t?(0,y.rd)(e??""):(0,y.rd)(e?.replace(/ctrl/,"Mod+")??""),v=({children:e})=>(0,i.jsx)(o.A,{sx:{display:"flex",flexDirection:"row",gap:2,flexWrap:"wrap"},children:e}),b=({children:e})=>(0,i.jsx)(o.A,{sx:{flex:"250px",display:"flex",flexDirection:"column",gap:2},children:e}),w=({visible:e,onVisibleChange:t,docsUrl:n})=>{let[r,a]=(0,s.useState)({service:{id:"global",name:"Global"},commands:[]}),[o,l]=(0,s.useState)([]),[u,y]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{let t=(0,p.c)(),n=async()=>{y(!0);let e=document.querySelector("meta[name=github-keyboard-shortcuts]");if(!e)throw Error('The "github-keyboard-shortcuts" meta tag must be present');let n={contexts:e.content.replace(/-/g,"_")},r=`/site/keyboard_shortcuts?${new URLSearchParams(n).toString()}`,i=await (0,f.lS)(r,{method:"GET"});if(i.ok){let{global:e,...n}=(await i.json()).commands;a({service:{id:"global",name:m.siteWideShortcuts},commands:[...e.commands,...t.find(e=>"global"===e.service.id)?.commands??[]].map(e=>({...e,keybinding:x(e.keybinding,e.alwaysCtrl)}))}),l([...Object.values(n),...t].map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:x(e.keybinding,e.alwaysCtrl)}))})))}else l(t.map(e=>({...e,commands:e.commands.map(e=>({...e,keybinding:x(e.keybinding,e.alwaysCtrl)}))})));y(!1)};e&&n()},[e]),e)?(0,i.jsx)(d.l,{title:m.keyboardShortcuts,"aria-modal":"true",width:"xlarge",height:"large",onClose:()=>t(!1),sx:{color:"fg.default"},children:u?(0,i.jsx)(g,{}):(0,i.jsxs)(v,{children:[(0,i.jsx)(b,{children:o.map(e=>(0,i.jsx)(h,{group:e},e.service.id))}),(0,i.jsxs)(b,{children:[(0,i.jsx)(h,{group:r},r.service.id),(0,i.jsx)(c.Q,{as:"a",href:n,sx:{width:"100%"},children:"View all keyboard shortcuts"})]})]})}):null};try{g.displayName||(g.displayName="LoadingState")}catch{}try{v.displayName||(v.displayName="Columns")}catch{}try{b.displayName||(b.displayName="Column")}catch{}try{w.displayName||(w.displayName="ShortcutsDialog")}catch{}function _({docsUrl:e}){let[t,n]=(0,s.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.ak,{commands:{"keyboard-shortcuts-dialog:show-dialog":()=>n(!0)}}),(0,i.jsx)(w,{visible:t,onVisibleChange:n,docsUrl:e})]})}try{_.displayName||(_.displayName="KeyboardShortcutsDialog")}catch{}(0,r.k)("keyboard-shortcuts-dialog",{Component:_})},73218:(e,t,n)=>{n.d(t,{l:()=>r});let r=()=>void 0},64128:(e,t,n)=>{n.d(t,{Y:()=>r});function r(){let e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}},74753:(e,t,n)=>{n.d(t,{A:()=>o});let{getItem:r,setItem:i,removeItem:s}=(0,n(80688).A)("localStorage"),a="REACT_PROFILING_ENABLED",o={enable:()=>i(a,"true"),disable:()=>s(a),isEnabled:()=>!!r(a)}},45996:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(38568),i=n(96540);function s(){let e=(0,i.useRef)(!1),t=(0,i.useCallback)(()=>e.current,[]);return(0,r.N)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},38568:(e,t,n)=>{n.d(t,{N:()=>s});var r=n(47584),i=n(96540);let s=void 0!==r.cg?.document?.createElement?i.useLayoutEffect:i.useEffect},82060:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(45996),i=n(96540);let s=function(e){let t=(0,r.A)(),[n,s]=(0,i.useState)(e);return[n,(0,i.useCallback)(e=>{t()&&s(e)},[t])]}},57572:(e,t,n)=>{function r(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function i(e,t){let n={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},i=t?.body?JSON.stringify(t.body):void 0;return r(e,{...t,body:i,headers:n})}function s(e,t={}){let n={...t.headers,"GitHub-Is-React":"true"};return r(e,{...t,headers:n})}function a(e,t){let n={...t?.headers??{},"GitHub-Is-React":"true"};return i(e,{...t,headers:n})}n.d(t,{DI:()=>r,QJ:()=>s,Sr:()=>a,lS:()=>i})},59418:(e,t,n)=>{n.d(t,{y:()=>a});var r=n(74848),i=n(21728),s=n(50045);function a(e){let t,n,a;let o=(0,i.c)(7),{children:l,appName:c,category:d,metadata:u}=e;return o[0]!==c||o[1]!==d||o[2]!==u?(n={appName:c,category:d,metadata:u},o[0]=c,o[1]=d,o[2]=u,o[3]=n):n=o[3],t=n,o[4]!==l||o[5]!==t?(a=(0,r.jsx)(s.I.Provider,{value:t,children:l}),o[4]=l,o[5]=t,o[6]=a):a=o[6],a}try{a.displayName||(a.displayName="AnalyticsProvider")}catch{}},18347:(e,t,n)=>{n.d(t,{BP:()=>u,D3:()=>d,O8:()=>l});var r=n(74848),i=n(21728),s=n(96540),a=n(47584),o=n(38568);let l={ServerRender:"ServerRender",ClientHydrate:"ClientHydrate",ClientRender:"ClientRender"},c=(0,s.createContext)(l.ClientRender);function d(e){let t,n,d,u;let h=(0,i.c)(8),{wasServerRendered:m,children:p}=e;h[0]!==m?(t=()=>a.X3?l.ServerRender:m?l.ClientHydrate:l.ClientRender,h[0]=m,h[1]=t):t=h[1];let[f,y]=(0,s.useState)(t);return h[2]!==f?(n=()=>{f!==l.ClientRender&&y(l.ClientRender)},d=[f],h[2]=f,h[3]=n,h[4]=d):(n=h[3],d=h[4]),(0,o.N)(n,d),h[5]!==p||h[6]!==f?(u=(0,r.jsx)(c.Provider,{value:f,children:p}),h[5]=p,h[6]=f,h[7]=u):u=h[7],u}function u(){return(0,s.useContext)(c)}try{c.displayName||(c.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},67136:(e,t,n)=>{n.d(t,{Qn:()=>l,T8:()=>d,Y6:()=>h,k6:()=>u});var r=n(74848),i=n(65556),s=n(96540),a=n(73218),o=n(82060);let l=5e3,c=(0,s.createContext)({addToast:a.l,addPersistedToast:a.l,clearPersistedToast:a.l}),d=(0,s.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,n]=(0,o.A)([]),[a,u]=(0,s.useState)(null),{safeSetTimeout:h}=(0,i.A)(),m=(0,s.useCallback)(function(e){n([...t,e]),h(()=>n(t.slice(1)),l)},[t,h,n]),p=(0,s.useCallback)(function(e){u(e)},[u]),f=(0,s.useCallback)(function(){u(null)},[u]),y=(0,s.useMemo)(()=>({addToast:m,addPersistedToast:p,clearPersistedToast:f}),[p,m,f]),g=(0,s.useMemo)(()=>({toasts:t,persistedToast:a}),[t,a]);return(0,r.jsx)(c.Provider,{value:y,children:(0,r.jsx)(d.Provider,{value:g,children:e})})}function h(){return(0,s.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},91958:(e,t,n)=>{n.d(t,{V:()=>h});var r=n(74848),i=n(96540),s=n(67136),a=n(38621),o=n(65556),l=n(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,r.jsx)(a.InfoIcon,{}),success:(0,r.jsx)(a.CheckIcon,{}),error:(0,r.jsx)(a.StopIcon,{})},u=({message:e,timeToLive:t,icon:n,type:s="info",role:a="log"})=>{let[u,h]=i.useState(!0),{safeSetTimeout:m}=(0,o.A)();return(0,i.useEffect)(()=>{t&&m(()=>h(!1),t-300)},[m,t]),(0,r.jsx)(l.Z,{children:(0,r.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,r.jsxs)("div",{className:`Toast ${c[s]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${s}`,role:a,children:[(0,r.jsx)("span",{className:"Toast-icon",children:n||d[s]}),(0,r.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,i.useContext)(s.T8);return(0,r.jsxs)(r.Fragment,{children:[e.map((e,t)=>(0,r.jsx)(u,{message:e.message,icon:e.icon,timeToLive:s.Qn,type:e.type,role:e.role},t)),t&&(0,r.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}},50515:(e,t,n)=>{n.d(t,{JC:()=>x,KK:()=>SequenceTracker,Vy:()=>a,ai:()=>g,oc:()=>l,rd:()=>d});let Leaf=class Leaf{constructor(e){this.children=[],this.parent=e}delete(e){let t=this.children.indexOf(e);return -1!==t&&(this.children=this.children.slice(0,t).concat(this.children.slice(t+1)),0===this.children.length&&this.parent.delete(this),!0)}add(e){return this.children.push(e),this}};let RadixTrie=class RadixTrie{constructor(e){this.parent=null,this.children={},this.parent=e||null}get(e){return this.children[e]}insert(e){let t=this;for(let n=0;n<e.length;n+=1){let r=e[n],i=t.get(r);if(n===e.length-1)return i instanceof RadixTrie&&(t.delete(i),i=null),i||(i=new Leaf(t),t.children[r]=i),i;i instanceof Leaf&&(i=null),i||(i=new RadixTrie(t),t.children[r]=i),t=i}return t}delete(e){for(let t in this.children)if(this.children[t]===e){let e=delete this.children[t];return 0===Object.keys(this.children).length&&this.parent&&this.parent.delete(this),e}return!1}};let r={"\xa1":"1","\u2122":"2","\xa3":"3","\xa2":"4","\u221E":"5","\xa7":"6","\xb6":"7","\u2022":"8","\xaa":"9","\xba":"0","\u2013":"-","\u2260":"=","\u2044":"!","\u20AC":"@","\u2039":"#","\u203A":"$",\uFB01:"%",\uFB02:"^","\u2021":"&","\xb0":"*","\xb7":"(","\u201A":")","\u2014":"_","\xb1":"+",\u0153:"q","\u2211":"w","\xae":"r","\u2020":"t","\xa5":"y","\xf8":"o",\u03C0:"p","\u201C":"[","\u2018":"]","\xab":"\\",\u0152:"Q","\u201E":"W","\xb4":"E","\u2030":"R",\u02C7:"T","\xc1":"Y","\xa8":"U",\u02C6:"I","\xd8":"O","\u220F":"P","\u201D":"{","\u2019":"}","\xbb":"|","\xe5":"a","\xdf":"s","\u2202":"d",\u0192:"f","\xa9":"g","\u02D9":"h","\u2206":"j","\u02DA":"k","\xac":"l","\u2026":";","\xe6":"'","\xc5":"A","\xcd":"S","\xce":"D","\xcf":"F","\u02DD":"G","\xd3":"H","\xd4":"J","\uF8FF":"K","\xd2":"L","\xda":":","\xc6":'"',\u03A9:"z","\u2248":"x","\xe7":"c","\u221A":"v","\u222B":"b","\xb5":"m","\u2264":",","\u2265":".","\xf7":"/","\xb8":"Z","\u02DB":"X","\xc7":"C","\u25CA":"V",\u0131:"B","\u02DC":"N","\xc2":"M","\xaf":"<","\u02D8":">","\xbf":"?"},i={"`":"~",1:"!",2:"@",3:"#",4:"$",5:"%",6:"^",7:"&",8:"*",9:"(",0:")","-":"_","=":"+","[":"{","]":"}","\\":"|",";":":","'":'"',",":"<",".":">","/":"?",q:"Q",w:"W",e:"E",r:"R",t:"T",y:"Y",u:"U",i:"I",o:"O",p:"P",a:"A",s:"S",d:"D",f:"F",g:"G",h:"H",j:"J",k:"K",l:"L",z:"Z",x:"X",c:"C",v:"V",b:"B",n:"N",m:"M"},s={" ":"Space","+":"Plus"};function a(e,t=navigator.platform){var n,l,d;let{ctrlKey:u,altKey:h,metaKey:m,shiftKey:p,key:f}=e,y=[];for(let[e,t]of[u,h,m,p].entries())t&&y.push(o[e]);if(!o.includes(f)){let e=y.includes("Alt")&&c.test(t)&&null!==(n=r[f])&&void 0!==n?n:f,a=y.includes("Shift")&&c.test(t)&&null!==(l=i[e])&&void 0!==l?l:e,o=null!==(d=s[a])&&void 0!==d?d:a;y.push(o)}return y.join("+")}let o=["Control","Alt","Meta","Shift"];function l(e,t){return function(e){let t=e.split("+").pop(),n=[];for(let t of["Control","Alt","Meta","Shift"])e.includes(t)&&n.push(t);return t&&n.push(t),n.join("+")}(function(e,t){var n;let r="undefined"==typeof window?void 0:window,i=c.test(null!==(n=null!=t?t:null==r?void 0:r.navigator.platform)&&void 0!==n?n:"")?"Meta":"Control";return e.replace("Mod",i)}(e,t))}let c=/Mac|iPod|iPhone|iPad/i;let SequenceTracker=class SequenceTracker{constructor({onReset:e}={}){this._path=[],this.timer=null,this.onReset=e}get path(){return this._path}get sequence(){return this._path.join(" ")}registerKeypress(e){this._path=[...this._path,a(e)],this.startTimer()}reset(){var e;this.killTimer(),this._path=[],null===(e=this.onReset)||void 0===e||e.call(this)}killTimer(){null!=this.timer&&window.clearTimeout(this.timer),this.timer=null}startTimer(){this.killTimer(),this.timer=window.setTimeout(()=>this.reset(),SequenceTracker.CHORD_TIMEOUT)}};function d(e){return e.split(" ").map(e=>l(e)).join(" ")}function u(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n&&"checkbox"!==n&&"radio"!==n&&"file"!==n||e.isContentEditable}SequenceTracker.CHORD_TIMEOUT=1500;let h=new RadixTrie,m=new WeakMap,p=h,f=new SequenceTracker({onReset(){p=h}});function y(e){if(e.defaultPrevented||!(e.target instanceof Node))return;if(u(e.target)){let t=e.target;if(!t.id||!t.ownerDocument.querySelector(`[data-hotkey-scope="${t.id}"]`))return}let t=p.get(a(e));if(!t){f.reset();return}if(f.registerKeypress(e),p=t,t instanceof Leaf){let n;let r=e.target,i=!1,s=u(r);for(let e=t.children.length-1;e>=0;e-=1){let a=(n=t.children[e]).getAttribute("data-hotkey-scope");if(!s&&!a||s&&r.id===a){i=!0;break}}n&&i&&(function(e,t){let n=new CustomEvent("hotkey-fire",{cancelable:!0,detail:{path:t}});e.dispatchEvent(n)&&(u(e)?e.focus():e.click())}(n,f.path),e.preventDefault()),f.reset()}}function g(e,t){0===Object.keys(h.children).length&&document.addEventListener("keydown",y);let n=(function(e){let t=[],n=[""],r=!1;for(let i=0;i<e.length;i++){if(r&&","===e[i]){t.push(n),n=[""],r=!1;continue}if(" "===e[i]){n.push(""),r=!1;continue}r="+"!==e[i],n[n.length-1]+=e[i]}return t.push(n),t.map(e=>e.map(e=>l(e)).filter(e=>""!==e)).filter(e=>e.length>0)})(t||e.getAttribute("data-hotkey")||"").map(t=>h.insert(t).add(e));m.set(e,n)}function x(e){let t=m.get(e);if(t&&t.length)for(let n of t)n&&n.delete(e);0===Object.keys(h.children).length&&document.removeEventListener("keydown",y)}},18679:(e,t,n)=>{n.d(t,{s:()=>AnalyticsClient});let r=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];var i=n(36301);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,i.y)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...function(){let e={};try{for(let[t,n]of new URLSearchParams(window.location.search)){let i=t.toLowerCase();r.includes(i)&&(e[i]=n)}return e}catch(e){return{}}}(),...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let n={...this.createEvent(t),type:e};this.send({events:[n]})}send({page_views:e,events:t}){let n=JSON.stringify({client_id:this.clientId,page_views:e,events:t,request_context:{referrer:function(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}(),user_agent:navigator.userAgent,screen_resolution:function(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}(),browser_resolution:function(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}(),browser_languages:navigator.languages?navigator.languages.join(","):navigator.language||"",pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}});try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,n);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:n,keepalive:!1})}}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts","ui_packages_ui-commands_ui-commands_ts"],()=>t(15498)),e.O()}]);
//# sourceMappingURL=keyboard-shortcuts-dialog-d7407936555f.js.map