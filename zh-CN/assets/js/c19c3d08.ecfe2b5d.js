"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[6434],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=a,d=g["".concat(s,".").concat(m)]||g[m]||c[m]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={},l="UUID",o={unversionedId:"transform/uuid",id:"version-2.3.0-beta/transform/uuid",title:"UUID",description:"UUID transform plugin",source:"@site/versioned_docs/version-2.3.0-beta/transform/uuid.md",sourceDirName:"transform",slug:"/transform/uuid",permalink:"/zh-CN/docs/2.3.0-beta/transform/uuid",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0-beta/transform/uuid.md",tags:[],version:"2.3.0-beta",frontMatter:{},sidebar:"docs",previous:{title:"udf",permalink:"/zh-CN/docs/2.3.0-beta/transform/udf"},next:{title:"Command usage",permalink:"/zh-CN/docs/2.3.0-beta/command/usage"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"field string",id:"field-string",level:3},{value:"prefix string",id:"prefix-string",level:3},{value:"secure boolean",id:"secure-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"uuid"},"UUID"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"UUID transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Generate a universally unique identifier on a specified field."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"This transform ",(0,a.yg)("strong",{parentName:"p"},"ONLY")," supported by Spark.")),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"fields"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"prefix"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"secure"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")))),(0,a.yg)("h3",{id:"field-string"},"field ","[string]"),(0,a.yg)("p",null,"The name of the field to generate."),(0,a.yg)("h3",{id:"prefix-string"},"prefix ","[string]"),(0,a.yg)("p",null,"The prefix string constant to prepend to each generated UUID."),(0,a.yg)("h3",{id:"secure-boolean"},"secure ","[boolean]"),(0,a.yg)("p",null,"the cryptographically secure algorithm can be comparatively slow\nThe nonSecure algorithm uses a secure random seed but is otherwise deterministic"),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.0-beta/transform/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  UUID {\n    fields = "u"\n    prefix = "uuid-"\n    secure = true\n  }\n}\n')),(0,a.yg)("p",null,"Use ",(0,a.yg)("inlineCode",{parentName:"p"},"UUID")," as udf in sql."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'  UUID {\n    fields = "u"\n    prefix = "uuid-"\n    secure = true\n  }\n\n  # Use the uuid function (confirm that the fake table exists)\n  sql {\n    sql = "select * from (select raw_message, UUID() as info_row from fake) t1"\n  }\n')))}c.isMDXComponent=!0}}]);