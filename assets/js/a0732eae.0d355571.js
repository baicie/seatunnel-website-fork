"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[98971],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(t),v=o,y=c["".concat(p,".").concat(v)]||c[v]||d[v]||a;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=v;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},42603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={sidebar_position:5},i=void 0,s={unversionedId:"seatunnel-engine/savepoint",id:"version-2.3.2/seatunnel-engine/savepoint",title:"savepoint",description:"----------------",source:"@site/versioned_docs/version-2.3.2/seatunnel-engine/savepoint.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/savepoint",permalink:"/docs/2.3.2/seatunnel-engine/savepoint",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/seatunnel-engine/savepoint.md",tags:[],version:"2.3.2",sidebarPosition:5,frontMatter:{sidebar_position:5}},p={},l=[{value:"use savepoint",id:"use-savepoint",level:2},{value:"use restore with savepoint",id:"use-restore-with-savepoint",level:2}],u={toc:l},c="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"savepoint-and-restore-with-savepoint"},"savepoint and restore with savepoint"),(0,o.yg)("p",null,"savepoint is created using the checkpoint. a global mirror of job execution status, which can be used for job or seatunnel stop and recovery, upgrade, etc."),(0,o.yg)("h2",{id:"use-savepoint"},"use savepoint"),(0,o.yg)("p",null,"To use savepoint, you need to ensure that the connector used by the job supports checkpoint, otherwise data may be lost or duplicated."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Make sure the job is running")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use the following command to trigger savepoint:",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -s {jobId}")))),(0,o.yg)("p",null,"After successful execution, the checkpoint data will be saved and the task will end."),(0,o.yg)("h2",{id:"use-restore-with-savepoint"},"use restore with savepoint"),(0,o.yg)("p",null,"Resume from savepoint using jobId",(0,o.yg)("br",{parentName:"p"}),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"./bin/seatunnel.sh -c {jobConfig} -r {jobId}")))}d.isMDXComponent=!0}}]);