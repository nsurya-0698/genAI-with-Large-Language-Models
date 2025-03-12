"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["global-copilot-menu"],{50045:(e,t,n)=>{n.d(t,{I:()=>i});let i=(0,n(96540).createContext)(null)},91618:(e,t,n)=>{n.d(t,{HS:()=>r,Oc:()=>o,Tv:()=>c,Xr:()=>SymbolChangedEvent,f7:()=>s,fD:()=>a,qR:()=>i});let OpenCopilotChatEvent=class OpenCopilotChatEvent extends Event{constructor(e){super("open-copilot-chat",{bubbles:!1,cancelable:!0}),this.payload=e}};let AddCopilotChatReferenceEvent=class AddCopilotChatReferenceEvent extends Event{constructor(e,t=!1,n){super("add-copilot-chat-reference",{bubbles:!1,cancelable:!0}),this.reference=e,this.openPanel=t,this.id=n}};let SymbolChangedEvent=class SymbolChangedEvent extends Event{constructor(e){super("symbol-changed",{bubbles:!1,cancelable:!0}),this.context=e}};function i(e){window.dispatchEvent(new OpenCopilotChatEvent(e))}function o(e,t=!1,n){window.dispatchEvent(new AddCopilotChatReferenceEvent(e,t,n))}function r(e){return window.addEventListener("open-copilot-chat",e),()=>{window.removeEventListener("open-copilot-chat",e)}}function s(e){return window.addEventListener("add-copilot-chat-reference",e),()=>{window.removeEventListener("add-copilot-chat-reference",e)}}function a(e){return window.addEventListener("search-copilot-chat",e),()=>{window.removeEventListener("search-copilot-chat",e)}}function c(e){return window.addEventListener("symbol-changed",e),()=>{window.removeEventListener("symbol-changed",e)}}},77342:(e,t,n)=>{n.d(t,{C6:()=>o,hs:()=>s,mF:()=>a,wh:()=>i,xP:()=>r});let i={explain:"explain",conversation:"conversation",suggest:"suggest",discussFileDiff:"discuss-file-diff",explainFileDiff:"explain-file-diff",reviewPr:"review-pull-request",actionsAgent:"actions-agent"},o=["exception","filtered","publicCode","contentTooLarge","rateLimit","agentUnauthorized","agentRequest","networkError","multipleAgentsAttempt"],r=["bing-search","codesearch","semanticsearch","lexicalsearch","kb-search","pathsearch","show-symbol-definition","getissue","getprcommits","getcommit","getrelease","getrepo","getdiff","get-diff-by-range","getfile","getfilechanges","getdiscussion","get-actions-job-logs","getpullrequest","getalert","planskill","get-github-data","support-search","get-figma"],s={Experiments:"experiements",Prompt:"prompt",None:"none"},a={Unlicensed:"unlicensed",LicensedFull:"licensed_full",LicensedLimited:"licensed_limited"}},2622:(e,t,n)=>{n.d(t,{W:()=>o});var i=n(75632);let o=new class CopilotFeatureFlags{get unstickyReferences(){return(0,i.G7)("copilot_conversational_ux_history_refs")}get customInstructions(){return(0,i.G7)("copilot_chat_custom_instructions")}get immersiveFigmaIntegration(){return(0,i.G7)("copilot_immersive_figma_integration")}get immersiveIssuePreview(){return(0,i.G7)("copilot_immersive_issue_preview")}get copilotChatInterviewSurvey(){return(0,i.G7)("copilot_chat_interview_survey")}get newImmersiveReferencesUI(){return(0,i.G7)("copilot_new_immersive_references_ui")}get repoCustomInstructions(){return(0,i.G7)("copilot_chat_repo_custom_instructions")}get repoCustomInstructionsPreview(){return(0,i.G7)("copilot_chat_repo_custom_instructions_preview")}get attachImagesImmersive(){return(0,i.G7)("copilot_chat_attach_images")}get immersiveSubthreading(){return(0,i.G7)("copilot_chat_immersive_subthreading")}get customCopilots(){return(0,i.G7)("copilot_custom_copilots")}get shareConversation(){return(0,i.G7)("copilot_share_conversation")}get clientDOMSkills(){return(0,i.G7)("copilot_client_dom_skills")}get dotcomChatClientSideSkills(){return(0,i.G7)("dotcom_chat_client_side_skills")}get ambientErrorBanner(){return(0,i.G7)("copilot_chat_ambient_error_banner")}get taskOrientedAssistive(){return(0,i.G7)("copilot_task_oriented_assistive")}get plugins(){return(0,i.G7)("copilot_immersive_plugin_system")}get pipesPlugin(){return(0,i.G7)("copilot_pipes")}get workbenchPlugin(){return(0,i.G7)("copilot_workbench")}get copilotChatOpeningThreadSwitch(){return(0,i.G7)("copilot_chat_opening_thread_switch")}get copilotReadSharedConversation(){return(0,i.G7)("copilot_read_shared_conversation")}get copilotDuplicateThread(){return(0,i.G7)("copilot_duplicate_thread")}get copilotUIRefs(){return(0,i.G7)("copilot_ui_refs")}get dotcomChatFileUpload(){return(0,i.G7)("copilot_dotcom_chat_file_upload")}get bufferStreamingContent(){return(0,i.G7)("copilot_buffered_streaming")}get copilotChatO1Tools(){return(0,i.G7)("copilot_api_tools_for_non_streaming_models")}get copilotSpacesInitialForm(){return(0,i.G7)("copilot_spaces_initial_form")}get copilotSpacesEditExperience(){return(0,i.G7)("copilot_spaces_edit_experience")}get topicsAsReferences(){return(0,i.G7)("copilot_topics_as_references")}}},39483:(e,t,n)=>{n.d(t,{A:()=>s});let i=n.p+"azure-91ef97089dff.png",o=n.p+"jetbrains-e16495e63a33.png",r=n.p+"neovim-3301f23c4307.png",s={vscode:{url:"https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",icon:n.p+"vscode-380056900de8.png",name:"Visual Studio Code",eventName:"VSCODE"},visualstudio:{url:"https://visualstudio.microsoft.com/github-copilot/",icon:n.p+"vsstudio-806c4b726938.png",name:"Visual Studio",eventName:"VS"},xcode:{url:"https://github.com/github/CopilotForXcode",icon:n.p+"xcode-a6c2735aa7ac.png",name:"Xcode",eventName:"XCODE"},jetbrains:{url:"https://plugins.jetbrains.com/plugin/17718-github-copilot",icon:o,name:"JetBrains",eventName:"JETBRAINS"},neovim:{url:"https://github.com/github/copilot.vim",icon:r,name:"Neovim",eventName:"NEOVIM"},datastudio:{url:"https://learn.microsoft.com/en-us/azure-data-studio/extensions/github-copilot-extension-overview",icon:i,name:"Azure Data Studio",eventName:"AZURE_DATA"}}},22994:(e,t,n)=>{var i=n(11110),o=n(74848),r=n(46988),s=n(89323),a=n(8338),c=n(47139),l=n(38621),d=n(97074),u=n(96540),p=n(64633),m=n(91618),h=n(77342),g=n(2622);function _(e){let{ref:t,open:n,setOpen:i}=(0,d.Mm)(e.reactPartialAnchor);return(0,o.jsx)(s.W,{anchorRef:t,open:n,onOpenChange:i,children:(0,o.jsx)(x,{})})}function v(){let[e,t]=(0,u.useState)(!1);return(0,o.jsxs)(s.W,{open:e,onOpenChange:t,children:[(0,o.jsx)(s.W.Button,{leadingVisual:l.CopilotIcon,"aria-label":"Open Copilot\u2026",children:""}),(0,o.jsx)(x,{})]})}function f(e){return e.reactPartialAnchor?(0,o.jsx)(_,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,o.jsx)(v,{})}function x(){let e=e=>{(0,r.BI)("dotcom_chat.activate",{target:`GLOBAL_COPILOT_MENU_${e.toUpperCase()}`,mode:"global_nav"})};return(0,o.jsx)(s.W.Overlay,{align:"end",children:(0,o.jsxs)(a.l,{children:[(0,o.jsxs)(a.l.Group,{children:[(0,o.jsx)(a.l.GroupHeading,{children:"New conversation"}),(0,o.jsxs)(a.l.LinkItem,{href:"/copilot",onClick:()=>e("FULLSCREEN"),children:[(0,o.jsx)(a.l.LeadingVisual,{children:(0,o.jsx)(l.ScreenFullIcon,{})}),"Immersive"]}),g.W.taskOrientedAssistive&&(0,o.jsxs)(a.l.Item,{onSelect:()=>{e("TASK_ORIENTED_ASSISTIVE"),(0,m.qR)({id:"copilot-task-oriented-assistive",intent:h.wh.conversation,newThread:!0,references:[]})},children:[(0,o.jsx)(a.l.LeadingVisual,{children:(0,o.jsx)(l.CommandPaletteIcon,{})}),"Task",(0,o.jsx)(a.l.TrailingVisual,{children:(0,o.jsx)(c.A,{variant:"accent",children:"Staff"})})]})]}),(0,o.jsx)(a.l.Divider,{}),(0,o.jsxs)(s.W,{children:[(0,o.jsx)(s.W.Anchor,{children:(0,o.jsxs)(a.l.Item,{onSelect:()=>e("OPEN_WITH"),children:[(0,o.jsx)(a.l.LeadingVisual,{children:(0,o.jsx)(l.CopilotIcon,{})}),"Open with"]})}),(0,o.jsx)(s.W.Overlay,{children:(0,o.jsxs)(a.l,{children:[(0,o.jsx)(p.t,{onClick:t=>e(t)}),(0,o.jsx)(a.l.Divider,{}),(0,o.jsxs)(a.l.LinkItem,{href:"https://docs.github.com/en/copilot/managing-copilot/configure-personal-settings/installing-github-copilot-in-the-cli",onClick:()=>e("CLI"),children:["CLI",(0,o.jsx)(a.l.LeadingVisual,{children:(0,o.jsx)(l.TerminalIcon,{})})]})]})})]}),(0,o.jsxs)(a.l.LinkItem,{href:"/settings/copilot",onClick:()=>e("SETTINGS"),children:["Settings",(0,o.jsx)(a.l.LeadingVisual,{children:(0,o.jsx)(l.GearIcon,{})})]})]})})}try{_.displayName||(_.displayName="ExternallyAnchoredGlobalCopilotMenu")}catch{}try{v.displayName||(v.displayName="GlobalCopilotMenuWithAnchor")}catch{}try{f.displayName||(f.displayName="GlobalCopilotMenu")}catch{}try{x.displayName||(x.displayName="GlobalCopilotMenuOverlay")}catch{}(0,i.k)("global-copilot-menu",{Component:f})},46988:(e,t,n)=>{let i;n.d(t,{BI:()=>m,Ti:()=>h,lA:()=>p});var o=n(70837),r=n(18679),s=n(80688),a=n(57516);let{getItem:c}=(0,s.A)("localStorage"),l="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.O)("octolytics");delete e.baseContext,i=new r.s(e)}catch{}function u(e){let t=(0,o.O)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(l)&&(t[e.replace(l,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,i]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=i);return t.staff=(0,a.X)().toString(),Object.assign(t,e)}function p(e){i?.sendPageView(u(e))}function m(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);i&&(u(o),i.sendEvent(e||"unknown",u(o)))}function h(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},73218:(e,t,n)=>{n.d(t,{l:()=>i});let i=()=>void 0},64128:(e,t,n)=>{n.d(t,{Y:()=>i});function i(){let e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}},74753:(e,t,n)=>{n.d(t,{A:()=>a});let{getItem:i,setItem:o,removeItem:r}=(0,n(80688).A)("localStorage"),s="REACT_PROFILING_ENABLED",a={enable:()=>o(s,"true"),disable:()=>r(s),isEnabled:()=>!!i(s)}},45996:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(38568),o=n(96540);function r(){let e=(0,o.useRef)(!1),t=(0,o.useCallback)(()=>e.current,[]);return(0,i.N)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},38568:(e,t,n)=>{n.d(t,{N:()=>r});var i=n(47584),o=n(96540);let r=void 0!==i.cg?.document?.createElement?o.useLayoutEffect:o.useEffect},82060:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(45996),o=n(96540);let r=function(e){let t=(0,i.A)(),[n,r]=(0,o.useState)(e);return[n,(0,o.useCallback)(e=>{t()&&r(e)},[t])]}},59418:(e,t,n)=>{n.d(t,{y:()=>s});var i=n(74848),o=n(21728),r=n(50045);function s(e){let t,n,s;let a=(0,o.c)(7),{children:c,appName:l,category:d,metadata:u}=e;return a[0]!==l||a[1]!==d||a[2]!==u?(n={appName:l,category:d,metadata:u},a[0]=l,a[1]=d,a[2]=u,a[3]=n):n=a[3],t=n,a[4]!==c||a[5]!==t?(s=(0,i.jsx)(r.I.Provider,{value:t,children:c}),a[4]=c,a[5]=t,a[6]=s):s=a[6],s}try{s.displayName||(s.displayName="AnalyticsProvider")}catch{}},64633:(e,t,n)=>{n.d(t,{t:()=>s});var i=n(74848),o=n(8338),r=n(39483);function s({onClick:e}){return Object.entries(r.A).map(([t,{name:n,url:r,icon:s}])=>(0,i.jsxs)(o.l.LinkItem,{href:r,onClick:()=>e?.(t),children:[n,(0,i.jsx)(o.l.LeadingVisual,{children:(0,i.jsx)("img",{src:s,alt:"",height:"20",width:"20"})})]},t))}try{s.displayName||(s.displayName="EditorMenuItems")}catch{}},18347:(e,t,n)=>{n.d(t,{BP:()=>u,D3:()=>d,O8:()=>c});var i=n(74848),o=n(21728),r=n(96540),s=n(47584),a=n(38568);let c={ServerRender:"ServerRender",ClientHydrate:"ClientHydrate",ClientRender:"ClientRender"},l=(0,r.createContext)(c.ClientRender);function d(e){let t,n,d,u;let p=(0,o.c)(8),{wasServerRendered:m,children:h}=e;p[0]!==m?(t=()=>s.X3?c.ServerRender:m?c.ClientHydrate:c.ClientRender,p[0]=m,p[1]=t):t=p[1];let[g,_]=(0,r.useState)(t);return p[2]!==g?(n=()=>{g!==c.ClientRender&&_(c.ClientRender)},d=[g],p[2]=g,p[3]=n,p[4]=d):(n=p[3],d=p[4]),(0,a.N)(n,d),p[5]!==h||p[6]!==g?(u=(0,i.jsx)(l.Provider,{value:g,children:h}),p[5]=h,p[6]=g,p[7]=u):u=p[7],u}function u(){return(0,r.useContext)(l)}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{d.displayName||(d.displayName="RenderPhaseProvider")}catch{}},67136:(e,t,n)=>{n.d(t,{Qn:()=>c,T8:()=>d,Y6:()=>p,k6:()=>u});var i=n(74848),o=n(65556),r=n(96540),s=n(73218),a=n(82060);let c=5e3,l=(0,r.createContext)({addToast:s.l,addPersistedToast:s.l,clearPersistedToast:s.l}),d=(0,r.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,n]=(0,a.A)([]),[s,u]=(0,r.useState)(null),{safeSetTimeout:p}=(0,o.A)(),m=(0,r.useCallback)(function(e){n([...t,e]),p(()=>n(t.slice(1)),c)},[t,p,n]),h=(0,r.useCallback)(function(e){u(e)},[u]),g=(0,r.useCallback)(function(){u(null)},[u]),_=(0,r.useMemo)(()=>({addToast:m,addPersistedToast:h,clearPersistedToast:g}),[h,m,g]),v=(0,r.useMemo)(()=>({toasts:t,persistedToast:s}),[t,s]);return(0,i.jsx)(l.Provider,{value:_,children:(0,i.jsx)(d.Provider,{value:v,children:e})})}function p(){return(0,r.useContext)(l)}try{l.displayName||(l.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},91958:(e,t,n)=>{n.d(t,{V:()=>p});var i=n(74848),o=n(96540),r=n(67136),s=n(38621),a=n(65556),c=n(16255);let l={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,i.jsx)(s.InfoIcon,{}),success:(0,i.jsx)(s.CheckIcon,{}),error:(0,i.jsx)(s.StopIcon,{})},u=({message:e,timeToLive:t,icon:n,type:r="info",role:s="log"})=>{let[u,p]=o.useState(!0),{safeSetTimeout:m}=(0,a.A)();return(0,o.useEffect)(()=>{t&&m(()=>p(!1),t-300)},[m,t]),(0,i.jsx)(c.Z,{children:(0,i.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,i.jsxs)("div",{className:`Toast ${l[r]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${r}`,role:s,children:[(0,i.jsx)("span",{className:"Toast-icon",children:n||d[r]}),(0,i.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function p(){let{toasts:e,persistedToast:t}=(0,o.useContext)(r.T8);return(0,i.jsxs)(i.Fragment,{children:[e.map((e,t)=>(0,i.jsx)(u,{message:e.message,icon:e.icon,timeToLive:r.Qn,type:e.type,role:e.role},t)),t&&(0,i.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{p.displayName||(p.displayName="Toasts")}catch{}},18679:(e,t,n)=>{n.d(t,{s:()=>AnalyticsClient});let i=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];var o=n(36301);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,o.y)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...function(){let e={};try{for(let[t,n]of new URLSearchParams(window.location.search)){let o=t.toLowerCase();i.includes(o)&&(e[o]=n)}return e}catch(e){return{}}}(),...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let n={...this.createEvent(t),type:e};this.send({events:[n]})}send({page_views:e,events:t}){let n=JSON.stringify({client_id:this.clientId,page_views:e,events:t,request_context:{referrer:function(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}(),user_agent:navigator.userAgent,screen_resolution:function(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}(),browser_resolution:function(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}(),browser_languages:navigator.languages?navigator.languages.join(","):navigator.language||"",pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}});try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,n);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:n,keepalive:!1})}}},70837:(e,t,n)=>{n.d(t,{O:()=>i});function i(e="ha"){let t;let n={};for(let i of Array.from(document.head.querySelectorAll(`meta[name^="${e}-"]`))){let{name:o,content:r}=i,s=o.replace(`${e}-`,"").replace(/-/g,"_");"url"===s?t=r:n[s]=r}if(!t)throw Error(`AnalyticsClient ${e}-url meta tag not found`);return{collectorUrl:t,...Object.keys(n).length>0?{baseContext:n}:{}}}}},e=>{var t=t=>e(e.s=t);e.O(0,["primer-react","react-core","react-lib","octicons-react","vendors-node_modules_primer_behaviors_dist_esm_index_mjs","vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd","vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js","ui_packages_failbot_failbot_ts"],()=>t(22994)),e.O()}]);
//# sourceMappingURL=global-copilot-menu-5256087db5bf.js.map