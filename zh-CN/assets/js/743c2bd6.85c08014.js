"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[50266],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(t),p=r,y=g["".concat(c,".").concat(p)]||g[p]||u[p]||l;return t?a.createElement(y,o(o({ref:n},m),{},{components:t})):a.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},66015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="AmazonSqs",i={unversionedId:"connector-v2/source/AmazonSqs",id:"connector-v2/source/AmazonSqs",title:"AmazonSqs",description:"AmazonSqs \u6e90\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/AmazonSqs.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/AmazonSqs",permalink:"/zh-CN/docs/connector-v2/source/AmazonSqs",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/source/AmazonSqs.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"AmazonDynamoDB",permalink:"/zh-CN/docs/connector-v2/source/AmazonDynamoDB"},next:{title:"Cassandra",permalink:"/zh-CN/docs/connector-v2/source/Cassandra"}},c={},s=[{value:"\u652f\u6301\u4e00\u4e0b\u5f15\u64ce",id:"\u652f\u6301\u4e00\u4e0b\u5f15\u64ce",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u6e90\u9009\u9879",id:"\u6e90\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u4e0b\u4e00\u4e2a\u7248\u672c",id:"\u4e0b\u4e00\u4e2a\u7248\u672c",level:3}],m={toc:s},g="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"amazonsqs"},"AmazonSqs"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"AmazonSqs \u6e90\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301\u4e00\u4e0b\u5f15\u64ce"},"\u652f\u6301\u4e00\u4e0b\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6d41\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5217\u6295\u5f71")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u5e76\u884c\u5ea6")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u5206\u7247"))),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u4ece Amazon SQS \u8bfb\u53d6\u6570\u636e."),(0,r.yg)("h2",{id:"\u6e90\u9009\u9879"},"\u6e90\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4ece Amazon SQ S\u8bfb\u53d6\u7684\u961f\u5217 URL.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"region"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"SQS \u670d\u52a1\u7684 AWS \u5206\u533a")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u7684\u7ed3\u6784\uff0c\u5305\u62ec\u5b57\u6bb5\u540d\u548c\u5b57\u6bb5\u7c7b\u578b.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'\u6570\u636e\u683c\u5f0f\u3002\u9ed8\u8ba4\u683c\u5f0f\u4e3ajson\u3002\u53ef\u9009\u6587\u672c\u683c\u5f0f\uff0ccanal-json\u548cdebezium-json\u3002\u5982\u679c\u4f60\u4f7f\u7528json\u6216text\u683c\u5f0f\u3002\u9ed8\u8ba4\u5b57\u6bb5\u5206\u9694\u7b26\u4e3a ", ". \u5982\u679c\u81ea\u5b9a\u4e49\u5206\u9694\u7b26\uff0c\u8bf7\u6dfb\u52a0"field_delimiter"\u9009\u9879\u3002\u5982\u679c\u4f7f\u7528 canal \u683c\u5f0f,\u8be6\u89c1',(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/formats/canal-json"},"canal-json"),".\u5982\u679c\u4f7f\u7528 debezium \u683c\u5f0f,\u8be6\u89c1",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/formats/debezium-json"},"debezium-json"),"..")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u683c\u5f0f\u9519\u8bef\u7684\u5904\u7406\u65b9\u6cd5. \u9ed8\u8ba4\u503c\u4e3afail\uff0c\u53ef\u9009\u503c\u4e3a\uff08fail\uff0cskip\uff09. \u5f53\u9009\u62e9\u5931\u8d25\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u5c06\u88ab\u963b\u6b62\uff0c\u5e76\u5f15\u53d1\u5f02\u5e38. \u5f53\u9009\u62e9\u8df3\u8fc7\u65f6\uff0c\u6570\u636e\u683c\u5f0f\u9519\u8bef\u5c06\u8df3\u8fc7\u6b64\u884c\u6570\u636e.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u6570\u636e\u683c\u5f0f\u7684\u5b57\u6bb5\u5206\u9694\u7b26.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570, \u8be6\u89c1 ",(0,r.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source-common-options"},"\u6e90\u901a\u7528\u9009\u9879"))))),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n  AmazonSqs {\n    url = "http://127.0.0.1:4566"\n    region = "us-east-1"\n    format = text\n    field_delimiter = "#"\n    schema = {\n      fields {\n        artist = string\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\ntransform {\n    # \u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u8f6c\u6362\u63d2\u4ef6\u7684\u5b8c\u6574\u5217\u8868,\n    # \u8bf7\u524d\u5f80 https://seatunnel.apache.org/docs/transform-v2/sql\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)("h3",{id:"\u4e0b\u4e00\u4e2a\u7248\u672c"},"\u4e0b\u4e00\u4e2a\u7248\u672c"))}u.isMDXComponent=!0}}]);