"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[20064],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={},a="Speed Control",l={unversionedId:"concept/speed-limit",id:"version-2.3.6/concept/speed-limit",title:"Speed Control",description:"Introduction",source:"@site/versioned_docs/version-2.3.6/concept/speed-limit.md",sourceDirName:"concept",slug:"/concept/speed-limit",permalink:"/docs/2.3.6/concept/speed-limit",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/concept/speed-limit.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"SQL Configuration File",permalink:"/docs/2.3.6/concept/sql-config"},next:{title:"Event Listener",permalink:"/docs/2.3.6/concept/event-listener"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Configuration",id:"configuration",level:2}],p={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"speed-control"},"Speed Control"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"The SeaTunnel provides a powerful speed control feature that allows you to manage the rate at which data is synchronized.\nThis functionality is essential when you need to ensure efficient and controlled data transfer between systems.\nThe speed control is primarily governed by two key parameters: ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second"),".\nThis document will guide you through the usage of these parameters and how to leverage them effectively."),(0,o.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,o.yg)("br",null),"\nFlink",(0,o.yg)("br",null),"\nSpark",(0,o.yg)("br",null))),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"To use the speed control feature, you need to configure the ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second")," parameters in your job config."),(0,o.yg)("p",null,"Example env config in your config file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},"env {\n    job.mode=STREAMING\n    job.name=SeaTunnel_Job\n    read_limit.bytes_per_second=7000000\n    read_limit.rows_per_second=400\n}\nsource {\n    MySQL-CDC {\n      // ignore...\n    }\n}\ntransform {\n}\nsink {\n    Console {\n    }\n}\n")),(0,o.yg)("p",null,"We have placed ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.bytes_per_second")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"read_limit.rows_per_second")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"env")," parameters to finish the speed control configuration.\nYou can configure both of these parameters simultaneously or choose to configure only one of them. The value of each ",(0,o.yg)("inlineCode",{parentName:"p"},"value")," represents the maximum rate at which each thread is restricted.\nTherefore, when configuring the respective values, please take into account the parallelism of your tasks."))}d.isMDXComponent=!0}}]);