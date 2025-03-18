"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56468],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={},i="Webhook",l={unversionedId:"connector/source/Webhook",id:"version-2.1.1/connector/source/Webhook",title:"Webhook",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Webhook.md",sourceDirName:"connector/source",slug:"/connector/source/Webhook",permalink:"/zh-CN/docs/2.1.1/connector/source/Webhook",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Webhook.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Tidb",permalink:"/zh-CN/docs/2.1.1/connector/source/Tidb"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.1/connector/source/common-options"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"portint",id:"portint",level:3},{value:"pathstring",id:"pathstring",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"webhook"},"Webhook"),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Provide http interface to push data\uff0conly supports post requests."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,o.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Webhook"),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"name"),(0,o.yg)("th",{parentName:"tr",align:null},"type"),(0,o.yg)("th",{parentName:"tr",align:null},"required"),(0,o.yg)("th",{parentName:"tr",align:null},"default value"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"port"),(0,o.yg)("td",{parentName:"tr",align:null},"int"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"9999")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"path"),(0,o.yg)("td",{parentName:"tr",align:null},"string"),(0,o.yg)("td",{parentName:"tr",align:null},"no"),(0,o.yg)("td",{parentName:"tr",align:null},"/")))),(0,o.yg)("h3",{id:"portint"},"port","[int]"),(0,o.yg)("p",null,"Port for push requests, default 9999."),(0,o.yg)("h3",{id:"pathstring"},"path","[string]"),(0,o.yg)("p",null,'Push request path, default "/".'),(0,o.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.yg)("p",null,"Source plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.1/connector/source/common-options"},"Source Plugin")," for details."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'Webhook {\n      result_table_name = "request_body"\n   }\n')))}m.isMDXComponent=!0}}]);