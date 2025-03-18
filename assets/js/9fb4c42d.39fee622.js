"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16427],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,c=s["".concat(u,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(c,l(l({ref:t},g),{},{components:n})):r.createElement(c,l({ref:t},g))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const i={},l=void 0,o={unversionedId:"configuration/output-plugins/Stdout",id:"version-1.x/configuration/output-plugins/Stdout",title:"Stdout",description:"Output plugin : Stdout",source:"@site/versioned_docs/version-1.x/configuration/output-plugins/Stdout.md",sourceDirName:"configuration/output-plugins",slug:"/configuration/output-plugins/Stdout",permalink:"/docs/1.x/configuration/output-plugins/Stdout",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugins/Stdout.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"S3",permalink:"/docs/1.x/configuration/output-plugins/S3"},next:{title:"Deploy and run",permalink:"/docs/1.x/deployment"}},u={},p=[{value:"Output plugin : Stdout",id:"output-plugin--stdout",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"limit number",id:"limit-number",level:5},{value:"format string",id:"format-string",level:5},{value:"Example",id:"example",level:3}],g={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"output-plugin--stdout"},"Output plugin : Stdout"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.0.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Output Rows to console, it is always used for debugging."),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"),(0,a.yg)("th",{parentName:"tr",align:null},"engine"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#limit-number"},"limit")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"100"),(0,a.yg)("td",{parentName:"tr",align:null},"batch/spark streaming")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#format-string"},"format")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"plain"),(0,a.yg)("td",{parentName:"tr",align:null},"batch/spark streaming")))),(0,a.yg)("h5",{id:"limit-number"},"limit ","[number]"),(0,a.yg)("p",null,"Limit number of output. ",(0,a.yg)("inlineCode",{parentName:"p"},"-1")," means no limit."),(0,a.yg)("h5",{id:"format-string"},"format ","[string]"),(0,a.yg)("p",null,"The format used for output, the allowed formats are ",(0,a.yg)("inlineCode",{parentName:"p"},"json"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"plain")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"schema")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'stdout {\n    limit = 10\n    format = "json"\n}\n')))}m.isMDXComponent=!0}}]);