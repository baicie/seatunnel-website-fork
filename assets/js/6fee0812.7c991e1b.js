"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[80992],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const o={},i="Transform Common Options",s={unversionedId:"transform-v2/common-options",id:"version-2.3.7/transform-v2/common-options",title:"Transform Common Options",description:"This is a process of intermediate conversion between the source and sink terminals,You can use sql statements to smoothly complete the conversion process",source:"@site/versioned_docs/version-2.3.7/transform-v2/common-options.md",sourceDirName:"transform-v2",slug:"/transform-v2/common-options",permalink:"/docs/2.3.7/transform-v2/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.7/transform-v2/common-options.md",tags:[],version:"2.3.7",frontMatter:{},sidebar:"docs",previous:{title:"Transform-V2",permalink:"/docs/2.3.7/category/transform-v2"},next:{title:"Copy",permalink:"/docs/2.3.7/transform-v2/copy"}},l={},c=[{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3}],m={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"transform-common-options"},"Transform Common Options"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is a process of intermediate conversion between the source and sink terminals,You can use sql statements to smoothly complete the conversion process")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"result_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"When ",(0,a.yg)("inlineCode",{parentName:"td"},"source_table_name")," is not specified, the current plugin processes the data set ",(0,a.yg)("inlineCode",{parentName:"td"},"(dataset)")," output by the previous plugin in the configuration file; ",(0,a.yg)("br",null),"When ",(0,a.yg)("inlineCode",{parentName:"td"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-"),(0,a.yg)("td",{parentName:"tr",align:null},"When ",(0,a.yg)("inlineCode",{parentName:"td"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"td"},"(table)"),"; ",(0,a.yg)("br",null),"When ",(0,a.yg)("inlineCode",{parentName:"td"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,a.yg)("inlineCode",{parentName:"td"},"(dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"td"},"(table)")," . The dataset registered here can be directly accessed by other plugins by specifying ",(0,a.yg)("inlineCode",{parentName:"td"},"source_table_name")," .")))),(0,a.yg)("h2",{id:"task-example"},"Task Example"),(0,a.yg)("h3",{id:"simple"},"Simple:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"This is the process of converting the data source to fake and write it to two different sinks, Detailed reference ",(0,a.yg)("inlineCode",{parentName:"p"},"transform"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n        age = "int"\n        c_timestamp = "timestamp"\n        c_date = "date"\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_decimal = "decimal(30, 8)"\n        c_row = {\n          c_row = {\n            c_int = int\n          }\n        }\n      }\n    }\n  }\n}\n\ntransform {\n  Sql {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    # the query table name must same as field \'source_table_name\'\n    query = "select id, regexp_replace(name, \'.+\', \'b\') as name, age+1 as age, pi() as pi, c_timestamp, c_date, c_map, c_array, c_decimal, c_row from fake"\n  }\n  # The SQL transform support base function and criteria operation\n  # But the complex SQL unsupported yet, include: multi source table/rows JOIN and AGGREGATE operation and the like\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n   Console {\n    source_table_name = "fake"\n  }\n}\n')))}u.isMDXComponent=!0}}]);