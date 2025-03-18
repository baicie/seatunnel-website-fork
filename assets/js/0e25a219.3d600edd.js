"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13358],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,y=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return t?r.createElement(y,s(s({ref:n},p),{},{components:t})):r.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={sidebar_position:3},s="SeaTunnel Engine(Zeta) Deployment",l={unversionedId:"seatunnel-engine/deployment",id:"version-2.3.8/seatunnel-engine/deployment",title:"SeaTunnel Engine(Zeta) Deployment",description:"SeaTunnel Engine(Zeta) supports three different deployment modes: local mode, hybrid cluster mode, and separated cluster mode.",source:"@site/versioned_docs/version-2.3.8/seatunnel-engine/deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/deployment",permalink:"/docs/2.3.8/seatunnel-engine/deployment",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.8/seatunnel-engine/deployment.md",tags:[],version:"2.3.8",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Download And Make Installation Packages",permalink:"/docs/2.3.8/seatunnel-engine/download-seatunnel"},next:{title:"Run Jobs In Local Mode",permalink:"/docs/2.3.8/seatunnel-engine/local-mode-deployment"}},i={},d=[],p={toc:d},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"seatunnel-enginezeta-deployment"},"SeaTunnel Engine(Zeta) Deployment"),(0,a.yg)("p",null,"SeaTunnel Engine(Zeta) supports three different deployment modes: local mode, hybrid cluster mode, and separated cluster mode."),(0,a.yg)("p",null,"Each deployment mode has different usage scenarios, advantages, and disadvantages. You should choose a deployment mode according to your needs and environment."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Local mode:")," Only used for testing, each task will start an independent process, and the process will exit after the task is completed."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Hybrid cluster mode:")," The Master service and Worker service of SeaTunnel Engine are mixed in the same process. All nodes can run jobs and participate in the election to become the master, that is, the master node is also running synchronous tasks simultaneously. In this mode, Imap (saving the state information of the task to provide support for the fault tolerance of the task) data will be distributed among all nodes."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Separated cluster mode(experimental feature):")," The Master service and Worker service of SeaTunnel Engine are separated, and each service is a single process. The Master node is only responsible for job scheduling, rest api, task submission, etc., and Imap data is only stored in the Master node. The Worker node is only responsible for the execution of the task, does not participate in the election to become the master, and does not store Imap data."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage suggestion:")," Although ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.8/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode")," is an experimental feature, the first recommended usage will be made in the future. In the hybrid cluster mode, the Master node needs to run tasks synchronously. When the task scale is large, it will affect the stability of the Master node. Once the Master node crashes or the heartbeat times out, it will lead to the switch of the Master node, and the switch of the Master node will cause fault tolerance of all running tasks, which will further increase the load of the cluster. Therefore, we recommend using the separated mode more."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.8/seatunnel-engine/local-mode-deployment"},"Local Mode Deployment")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.8/seatunnel-engine/hybrid-cluster-deployment"},"Hybrid Cluster Mode Deployment")),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/docs/2.3.8/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode Deployment")))}u.isMDXComponent=!0}}]);