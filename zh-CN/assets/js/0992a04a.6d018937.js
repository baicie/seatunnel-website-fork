"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14941],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),g=a,d=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return t?r.createElement(d,l(l({ref:n},p),{},{components:t})):r.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={},l="Sink Common Options",i={unversionedId:"connector-v2/sink/common-options",id:"version-2.3.2/connector-v2/sink/common-options",title:"Sink Common Options",description:"Common parameters of sink connectors",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/common-options.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/common-options",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/common-options.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Tablestore",permalink:"/zh-CN/docs/2.3.2/connector-v2/sink/Tablestore"},next:{title:"Error Quick Reference Manual",permalink:"/zh-CN/docs/2.3.2/connector-v2/Error-Quick-Reference-Manual"}},s={},c=[{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],p={toc:c},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sink-common-options"},"Sink Common Options"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Common parameters of sink connectors")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,a.yg)("inlineCode",{parentName:"p"},"dataset")," output by the previous plugin in the configuration file;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plug-in is processing the data set corresponding to this parameter."),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism")," is not specified, the ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism")," in env is used by default."),(0,a.yg)("p",null,"When parallelism is specified, it will override the parallelism in env."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      source_table_name = "fake"\n      fields = [name]\n      result_table_name = "fake_name"\n    }\n    Filter {\n      source_table_name = "fake"\n      fields = [age]\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      source_table_name = "fake_name"\n    }\n    Console {\n      source_table_name = "fake_age"\n    }\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If the job only have one source and one(or zero) transform and one sink, You do not need to specify ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," for connector.\nIf the number of any operator in source, transform and sink is greater than 1, you must specify the ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," for each connector in the job.")))}u.isMDXComponent=!0}}]);