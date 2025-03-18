"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[54868],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),g=a,y=m["".concat(c,".").concat(g)]||m[g]||u[g]||l;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},39127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const l={},o="Sink \u5e38\u7528\u9009\u9879",i={unversionedId:"connector-v2/sink/common-options",id:"version-2.3.6/connector-v2/sink/common-options",title:"Sink \u5e38\u7528\u9009\u9879",description:"Sink \u8fde\u63a5\u5668\u5e38\u7528\u53c2\u6570",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/common-options.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/common-options",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/common-options.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Vertica",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Vertica"},next:{title:"Error Quick Reference Manual",permalink:"/zh-CN/docs/2.3.6/connector-v2/Error-Quick-Reference-Manual"}},c={},s=[{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"parallelism int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],p={toc:s},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"sink-\u5e38\u7528\u9009\u9879"},"Sink \u5e38\u7528\u9009\u9879"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sink \u8fde\u63a5\u5668\u5e38\u7528\u53c2\u6570")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"\u5f53\u4e0d\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u65f6\uff0c\u5f53\u524d\u63d2\u4ef6\u5904\u7406\u914d\u7f6e\u6587\u4ef6\u4e2d\u4e0a\u4e00\u4e2a\u63d2\u4ef6\u8f93\u51fa\u7684\u6570\u636e\u96c6 ",(0,a.yg)("inlineCode",{parentName:"p"},"dataset")),(0,a.yg)("p",null,"\u5f53\u6307\u5b9a\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u65f6\uff0c\u5f53\u524d\u63d2\u4ef6\u6b63\u5728\u5904\u7406\u8be5\u53c2\u6570\u5bf9\u5e94\u7684\u6570\u636e\u96c6"),(0,a.yg)("h3",{id:"parallelism-int"},"parallelism ","[int]"),(0,a.yg)("p",null,"\u5f53\u6ca1\u6709\u6307\u5b9a",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u65f6\uff0c\u9ed8\u8ba4\u4f7f\u7528 env \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u3002"),(0,a.yg)("p",null,"\u5f53\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism")," \u65f6\uff0c\u5b83\u5c06\u8986\u76d6 env \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"parallelism"),"\u3002"),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      parallelism = 2\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    Filter {\n      source_table_name = "fake"\n      fields = [name]\n      result_table_name = "fake_name"\n    }\n    Filter {\n      source_table_name = "fake"\n      fields = [age]\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    Console {\n      source_table_name = "fake_name"\n    }\n    Console {\n      source_table_name = "fake_age"\n    }\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u4f5c\u4e1a\u53ea\u6709\u4e00\u4e2a source \u548c\u4e00\u4e2a\uff08\u6216\u96f6\u4e2a\uff09transform \u548c\u4e00\u4e2a sink \uff0c\u5219\u4e0d\u9700\u8981\u4e3a\u8fde\u63a5\u5668\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name"),"\u3002\n\u5982\u679c source \u3001transform \u548c sink \u4e2d\u4efb\u610f\u8fd0\u7b97\u7b26\u7684\u6570\u91cf\u5927\u4e8e 1\uff0c\u5219\u5fc5\u987b\u4e3a\u4f5c\u4e1a\u4e2d\u7684\u6bcf\u4e2a\u8fde\u63a5\u5668\u6307\u5b9a ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name"))))}u.isMDXComponent=!0}}]);