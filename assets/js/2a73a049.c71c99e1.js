"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[56360],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g=r.createContext({}),c=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,g=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,y=p["".concat(g,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var g in t)hasOwnProperty.call(t,g)&&(l[g]=t[g]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),i=(n(96540),n(15680));const a={},o="MongoDB",l={unversionedId:"connector/sink/MongoDB",id:"version-2.1.3/connector/sink/MongoDB",title:"MongoDB",description:"Description",source:"@site/versioned_docs/version-2.1.3/connector/sink/MongoDB.md",sourceDirName:"connector/sink",slug:"/connector/sink/MongoDB",permalink:"/docs/2.1.3/connector/sink/MongoDB",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/sink/MongoDB.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/docs/2.1.3/connector/sink/Kudu"},next:{title:"Phoenix",permalink:"/docs/2.1.3/connector/sink/Phoenix"}},g={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"writeconfig.uri string",id:"writeconfiguri-string",level:3},{value:"writeconfig.database string",id:"writeconfigdatabase-string",level:3},{value:"writeconfig.collection string",id:"writeconfigcollection-string",level:3},{value:"writeconfig.* string",id:"writeconfig-string",level:3},{value:"Examples",id:"examples",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"mongodb"},"MongoDB"),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("p",null,"Write data to ",(0,i.yg)("inlineCode",{parentName:"p"},"MongoDB")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,i.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: MongoDB"),(0,i.yg)("li",{parentName:"ul",className:"task-list-item"},(0,i.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,i.yg)("h2",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"name"),(0,i.yg)("th",{parentName:"tr",align:null},"type"),(0,i.yg)("th",{parentName:"tr",align:null},"required"),(0,i.yg)("th",{parentName:"tr",align:null},"default value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"writeconfig.uri"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"writeconfig.database"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"writeconfig.collection"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"yes"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"writeconfig.*"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"no"),(0,i.yg)("td",{parentName:"tr",align:null},"-")))),(0,i.yg)("h3",{id:"writeconfiguri-string"},"writeconfig.uri ","[string]"),(0,i.yg)("p",null,"uri to write to mongoDB"),(0,i.yg)("h3",{id:"writeconfigdatabase-string"},"writeconfig.database ","[string]"),(0,i.yg)("p",null,"database to write to mongoDB"),(0,i.yg)("h3",{id:"writeconfigcollection-string"},"writeconfig.collection ","[string]"),(0,i.yg)("p",null,"collection to write to mongoDB"),(0,i.yg)("h3",{id:"writeconfig-string"},"writeconfig.* ","[string]"),(0,i.yg)("p",null,"More other parameters can be configured here, see ",(0,i.yg)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Output Configuration section. The way to specify parameters is to add a prefix to the original parameter name ",(0,i.yg)("inlineCode",{parentName:"p"},"writeconfig.")," For example, the way to set ",(0,i.yg)("inlineCode",{parentName:"p"},"localThreshold")," is ",(0,i.yg)("inlineCode",{parentName:"p"},"writeconfig.localThreshold=20")," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    writeconfig.uri = "mongodb://username:password@127.0.0.1:27017/test_db"\n    writeconfig.database = "test_db"\n    writeconfig.collection = "test_collection"\n}\n')))}u.isMDXComponent=!0}}]);