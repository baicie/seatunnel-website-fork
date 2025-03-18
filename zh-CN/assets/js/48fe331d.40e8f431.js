"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[97],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>c});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),g=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=g(e.components);return l.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},y=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(t),y=a,c=d["".concat(o,".").concat(y)]||d[y]||u[y]||r;return t?l.createElement(c,i(i({ref:n},p),{},{components:t})):l.createElement(c,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=y;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var g=2;g<r;g++)i[g]=t[g];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}y.displayName="MDXCreateElement"},45212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var l=t(58168),a=(t(96540),t(15680));const r={},i="ClickhouseFile",s={unversionedId:"connector-v2/sink/ClickhouseFile",id:"version-2.3.6/connector-v2/sink/ClickhouseFile",title:"ClickhouseFile",description:"Clickhouse\u6587\u4ef6\u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/ClickhouseFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/ClickhouseFile",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/ClickhouseFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.6/connector-v2/sink/ClickhouseFile.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Clickhouse",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Clickhouse"},next:{title:"Console",permalink:"/zh-CN/docs/2.3.6/connector-v2/sink/Console"}},o={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63a5\u6536\u5668\u9009\u9879",id:"\u63a5\u6536\u5668\u9009\u9879",level:2},{value:"host string",id:"host-string",level:3},{value:"database string",id:"database-string",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"clickhouse_local_path string",id:"clickhouse_local_path-string",level:3},{value:"copy_method string",id:"copy_method-string",level:3},{value:"node_free_password boolean",id:"node_free_password-boolean",level:3},{value:"node_pass list",id:"node_pass-list",level:3},{value:"node_pass.node_address string",id:"node_passnode_address-string",level:3},{value:"node_pass.username string",id:"node_passusername-string",level:3},{value:"node_pass.password string",id:"node_passpassword-string",level:3},{value:"compatible_mode boolean",id:"compatible_mode-boolean",level:3},{value:"file_fields_delimiter string",id:"file_fields_delimiter-string",level:3},{value:"file_temp_path string",id:"file_temp_path-string",level:3},{value:"common options",id:"common-options",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"\u968f\u540e\u7248\u672c",id:"\u968f\u540e\u7248\u672c",level:3}],p={toc:g},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"clickhousefile"},"ClickhouseFile"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Clickhouse\u6587\u4ef6\u6570\u636e\u63a5\u6536\u5668")),(0,a.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.yg)("p",null,"\u8be5\u63a5\u6536\u5668\u4f7f\u7528clickhouse-local\u7a0b\u5e8f\u751f\u6210clickhouse\u6570\u636e\u6587\u4ef6\uff0c\u968f\u540e\u5c06\u5176\u53d1\u9001\u81f3clickhouse\u670d\u52a1\u5668\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u79f0\u4e3abulkload\u3002\u8be5\u63a5\u6536\u5668\u4ec5\u652f\u6301\u8868\u5f15\u64ce\u4e3a 'Distributed'\u7684\u8868\uff0c\u4e14",(0,a.yg)("inlineCode",{parentName:"p"},"internal_replication"),"\u9009\u9879\u9700\u8981\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"true"),"\u3002\u652f\u6301\u6279\u548c\u6d41\u4e24\u79cd\u6a21\u5f0f\u3002"),(0,a.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.6/concept/connector-v2-features"},"\u7cbe\u51c6\u4e00\u6b21"))),(0,a.yg)("p",null,":::\u5c0f\u63d0\u793a"),(0,a.yg)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u91c7\u7528JDBC\u7684\u65b9\u5f0f\u5c06\u6570\u636e\u5199\u5165Clickhouse\u3002"),(0,a.yg)("p",null,":::"),(0,a.yg)("h2",{id:"\u63a5\u6536\u5668\u9009\u9879"},"\u63a5\u6536\u5668\u9009\u9879"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,a.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"table"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"clickhouse_local_path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"sharding_key"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"copy_method"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"scp")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"node_free_password"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"node_pass"),(0,a.yg)("td",{parentName:"tr",align:null},"list"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"node_pass.node_address"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"node_pass.username"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},'"root"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"node_pass.password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"compatible_mode"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"false")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"file_fields_delimiter"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},'"\\t"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"file_temp_path"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},'"/tmp/seatunnel/clickhouse-local/file"')),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ClickHouse"),"\u96c6\u7fa4\u5730\u5740\uff0c\u683c\u5f0f\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"host:port"),"\uff0c\u5141\u8bb8\u540c\u65f6\u6307\u5b9a\u591a\u4e2a",(0,a.yg)("inlineCode",{parentName:"p"},"hosts"),"\u3002\u4f8b\u5982",(0,a.yg)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"'),"\u3002"),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ClickHouse"),"\u6570\u636e\u5e93\u540d\u3002"),(0,a.yg)("h3",{id:"table-string"},"table ","[string]"),(0,a.yg)("p",null,"\u8868\u540d\u79f0\u3002"),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"\u8fde\u63a5",(0,a.yg)("inlineCode",{parentName:"p"},"ClickHouse"),"\u7684\u7528\u6237\u540d\u3002"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"\u8fde\u63a5",(0,a.yg)("inlineCode",{parentName:"p"},"ClickHouse"),"\u7684\u7528\u6237\u5bc6\u7801\u3002"),(0,a.yg)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,a.yg)("p",null,"\u5f53ClickhouseFile\u9700\u8981\u62c6\u5206\u6570\u636e\u65f6\uff0c\u9700\u8981\u8003\u8651\u7684\u95ee\u9898\u662f\u5f53\u524d\u6570\u636e\u9700\u8981\u53d1\u5f80\u54ea\u4e2a\u8282\u70b9\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u91c7\u7528\u7684\u662f\u968f\u673a\u7b97\u6cd5\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528'sharding_key'\u53c2\u6570\u4e3a\u67d0\u5b57\u6bb5\u6307\u5b9a\u5bf9\u5e94\u7684\u5206\u7247\u7b97\u6cd5\u3002"),(0,a.yg)("h3",{id:"clickhouse_local_path-string"},"clickhouse_local_path ","[string]"),(0,a.yg)("p",null,"\u5728spark\u8282\u70b9\u4e0a\u7684clickhouse-local\u7a0b\u5e8f\u8def\u5f84\u3002\u7531\u4e8e\u6bcf\u4e2a\u4efb\u52a1\u90fd\u4f1a\u88ab\u8c03\u7528\uff0c\u6240\u4ee5\u6bcf\u4e2aspark\u8282\u70b9\u4e0a\u7684clickhouse-local\u7a0b\u5e8f\u8def\u5f84\u5fc5\u987b\u76f8\u540c\u3002"),(0,a.yg)("h3",{id:"copy_method-string"},"copy_method ","[string]"),(0,a.yg)("p",null,"\u4e3a\u6587\u4ef6\u4f20\u8f93\u6307\u5b9a\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u4e3ascp\uff0c\u53ef\u9009\u503c\u4e3ascp\u548crsync\u3002"),(0,a.yg)("h3",{id:"node_free_password-boolean"},"node_free_password ","[boolean]"),(0,a.yg)("p",null,"\u7531\u4e8eseatunnel\u9700\u8981\u4f7f\u7528scp\u6216\u8005rsync\u8fdb\u884c\u6587\u4ef6\u4f20\u8f93\uff0c\u56e0\u6b64seatunnel\u9700\u8981clickhouse\u670d\u52a1\u7aef\u8bbf\u95ee\u6743\u9650\u3002\u5982\u679c\u6bcf\u4e2aspark\u8282\u70b9\u4e0eclickhouse\u670d\u52a1\u7aef\u90fd\u914d\u7f6e\u4e86\u514d\u5bc6\u767b\u5f55\uff0c\u5219\u53ef\u4ee5\u5c06\u6b64\u9009\u9879\u914d\u7f6e\u4e3atrue\uff0c\u5426\u5219\u9700\u8981\u5728node_pass\u53c2\u6570\u4e2d\u914d\u7f6e\u5bf9\u5e94\u8282\u70b9\u7684\u5bc6\u7801\u3002"),(0,a.yg)("h3",{id:"node_pass-list"},"node_pass ","[list]"),(0,a.yg)("p",null,"\u7528\u6765\u4fdd\u5b58\u6240\u6709clickhouse\u670d\u52a1\u5668\u5730\u5740\u53ca\u5176\u5bf9\u5e94\u7684\u8bbf\u95ee\u5bc6\u7801\u3002"),(0,a.yg)("h3",{id:"node_passnode_address-string"},"node_pass.node_address ","[string]"),(0,a.yg)("p",null,"clickhouse\u670d\u52a1\u5668\u8282\u70b9\u5730\u5740\u3002"),(0,a.yg)("h3",{id:"node_passusername-string"},"node_pass.username ","[string]"),(0,a.yg)("p",null,"clickhouse\u670d\u52a1\u5668\u8282\u70b9\u7528\u6237\u540d\uff0c\u9ed8\u8ba4\u4e3aroot\u3002"),(0,a.yg)("h3",{id:"node_passpassword-string"},"node_pass.password ","[string]"),(0,a.yg)("p",null,"clickhouse\u670d\u52a1\u5668\u8282\u70b9\u7684\u8bbf\u95ee\u5bc6\u7801\u3002"),(0,a.yg)("h3",{id:"compatible_mode-boolean"},"compatible_mode ","[boolean]"),(0,a.yg)("p",null,"\u5728\u4f4e\u7248\u672c\u7684Clickhouse\u4e2d\uff0cclickhouse-local\u7a0b\u5e8f\u4e0d\u652f\u6301",(0,a.yg)("inlineCode",{parentName:"p"},"--path"),"\u53c2\u6570\uff0c\u9700\u8981\u8bbe\u7f6e\u8be5\u53c2\u6570\u6765\u91c7\u7528\u5176\u4ed6\u65b9\u5f0f\u5b9e\u73b0",(0,a.yg)("inlineCode",{parentName:"p"},"--path"),"\u53c2\u6570\u529f\u80fd\u3002"),(0,a.yg)("h3",{id:"file_fields_delimiter-string"},"file_fields_delimiter ","[string]"),(0,a.yg)("p",null,"ClickHouseFile\u4f7f\u7528CSV\u683c\u5f0f\u6765\u4e34\u65f6\u4fdd\u5b58\u6570\u636e\u3002\u4f46\u5982\u679c\u6570\u636e\u4e2d\u5305\u542bCSV\u7684\u5206\u9694\u7b26\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7a0b\u5e8f\u5f02\u5e38\u3002\u4f7f\u7528\u6b64\u914d\u7f6e\u53ef\u4ee5\u907f\u514d\u8be5\u60c5\u51b5\u3002\u914d\u7f6e\u7684\u503c\u5fc5\u987b\u6b63\u597d\u4e3a\u4e00\u4e2a\u5b57\u7b26\u7684\u957f\u5ea6\u3002"),(0,a.yg)("h3",{id:"file_temp_path-string"},"file_temp_path ","[string]"),(0,a.yg)("p",null,"ClickhouseFile\u672c\u5730\u5b58\u50a8\u4e34\u65f6\u6587\u4ef6\u7684\u76ee\u5f55\u3002"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.6/connector-v2/sink/common-options"},"Sink\u5e38\u7528\u9009\u9879"),"\u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'ClickhouseFile {\n  host = "192.168.0.1:8123"\n  database = "default"\n  table = "fake_all"\n  username = "default"\n  password = ""\n  clickhouse_local_path = "/Users/seatunnel/Tool/clickhouse local"\n  sharding_key = "age"\n  node_free_password = false\n  node_pass = [{\n    node_address = "192.168.0.1"\n    password = "seatunnel"\n  }]\n}\n')),(0,a.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u652f\u6301\u5c06\u6570\u636e\u5199\u5165ClickHouse\u6587\u4ef6\u5e76\u8fc1\u79fb\u5230ClickHouse\u6570\u636e\u76ee\u5f55")),(0,a.yg)("h3",{id:"\u968f\u540e\u7248\u672c"},"\u968f\u540e\u7248\u672c"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[BugFix]"," \u4fee\u590d\u751f\u6210\u7684\u6570\u636e\u90e8\u5206\u540d\u79f0\u51b2\u7a81BUG\u5e76\u6539\u8fdb\u6587\u4ef6\u63d0\u4ea4\u903b\u8f91  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3416"},"3416")),(0,a.yg)("li",{parentName:"ul"},"[Feature]"," \u652f\u6301compatible_mode\u6765\u517c\u5bb9\u4f4e\u7248\u672c\u7684Clickhouse  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3416"},"3416"))))}u.isMDXComponent=!0}}]);