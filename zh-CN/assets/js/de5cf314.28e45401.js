"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[30768],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),d=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(g.Provider,{value:n},e.children)},o="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=d(t),m=l,s=o["".concat(g,".").concat(m)]||o[m]||y[m]||r;return t?a.createElement(s,u(u({ref:n},p),{},{components:t})):a.createElement(s,u({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,u=new Array(r);u[0]=m;var i={};for(var g in n)hasOwnProperty.call(n,g)&&(i[g]=n[g]);i.originalType=e,i[o]="string"==typeof e?e:l,u[1]=i;for(var d=2;d<r;d++)u[d]=t[d];return a.createElement.apply(null,u)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(58168),l=(t(96540),t(15680));const r={},u="Kudu",i={unversionedId:"connector-v2/sink/Kudu",id:"connector-v2/sink/Kudu",title:"Kudu",description:"Kudu\u6570\u636e\u63a5\u6536\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Kudu.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Kudu",permalink:"/zh-CN/docs/connector-v2/sink/Kudu",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Kudu.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kingbase",permalink:"/zh-CN/docs/connector-v2/sink/Kingbase"},next:{title:"LocalFile",permalink:"/zh-CN/docs/connector-v2/sink/LocalFile"}},g={},d=[{value:"\u652f\u6301Kudu\u7248\u672c",id:"\u652f\u6301kudu\u7248\u672c",level:2},{value:"\u652f\u6301\u5f15\u64ce",id:"\u652f\u6301\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"\u591a\u8868",id:"\u591a\u8868",level:3},{value:"\u793a\u4f8b1",id:"\u793a\u4f8b1",level:4},{value:"\u793a\u4f8b2",id:"\u793a\u4f8b2",level:4},{value:"\u66f4\u6539\u65e5\u5fd7",id:"\u66f4\u6539\u65e5\u5fd7",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"\u4e0b\u4e2a\u7248\u672c",id:"\u4e0b\u4e2a\u7248\u672c",level:3}],p={toc:d},o="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(o,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"kudu"},"Kudu"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Kudu\u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301kudu\u7248\u672c"},"\u652f\u6301Kudu\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"1.11.1/1.12.0/1.13.0/1.14.0/1.15.0")),(0,l.yg)("h2",{id:"\u652f\u6301\u5f15\u64ce"},"\u652f\u6301\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"support multiple table write"))),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"Kudu \u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT8",(0,l.yg)("br",null),"INT16",(0,l.yg)("br",null),"INT32")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT64")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"UNIXTIME_MICROS")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,l.yg)("td",{parentName:"tr",align:null},"BINARY")))),(0,l.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kudu_masters"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u4e3b\u5730\u5740\u3002\u7528\u201c\uff0c\u201d\u5206\u9694\uff0c\u4f8b\u5982\u201c192.168.88.110:7051\u201d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u8868\u7684\u540d\u5b57\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_worker_count"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"2 * Runtime.getRuntime().availableProcessors()"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u5de5\u4eba\u6570\u3002\u9ed8\u8ba4\u503c\u662f\u5f53\u524dcpu\u6838\u6570\u7684\u4e24\u500d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_default_operation_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u6b63\u5e38\u8fd0\u884c\u8d85\u65f6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"client_default_admin_operation_timeout_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Long"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u7ba1\u7406\u5458\u64cd\u4f5c\u8d85\u65f6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_kerberos"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u542f\u7528Kerberos\u4e3b\u4f53\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_principal"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos\u4e3b\u4f53\u3002\u8bf7\u6ce8\u610f\uff0c\u6240\u6709zeta\u8282\u70b9\u90fd\u9700\u8981\u6b64\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_keytab"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos\u5bc6\u94a5\u8868\u3002\u8bf7\u6ce8\u610f\uff0c\u6240\u6709zeta\u8282\u70b9\u90fd\u9700\u8981\u6b64\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"kerberos_krb5conf"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Kerberos krb5 conf.\u8bf7\u6ce8\u610f\uff0c\u6240\u6709zeta\u8282\u70b9\u90fd\u9700\u8981\u6b64\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u6a21\u5f0f\uff0c\u652f\u6301 ",(0,l.yg)("inlineCode",{parentName:"td"},"overwrite")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"append"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"session_flush_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"AUTO_FLUSH_SYNC"),(0,l.yg)("td",{parentName:"tr",align:null},"Kudu\u5237\u65b0\u6a21\u5f0f\u3002\u9ed8\u8ba4AUTO_FLUSH_SYNC\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8d85\u8fc7\u6b64\u8bb0\u5f55\u6570\u7684\u5237\u65b0\u6700\u5927\u5927\u5c0f\uff08\u5305\u62ec\u6240\u6709\u8ffd\u52a0\u3001\u8ffd\u52a0\u548c\u5220\u9664\u8bb0\u5f55\uff09\u5c06\u5237\u65b0\u6570\u636e\u3002\u9ed8\u8ba4\u503c\u4e3a100")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"buffer_flush_interval"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5237\u65b0\u95f4\u9694\u671f\u95f4\uff0c\u5f02\u6b65\u7ebf\u7a0b\u5c06\u5237\u65b0\u6570\u636e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ignore_not_found"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3atrue\uff0c\u5219\u5ffd\u7565\u6240\u6709\u672a\u627e\u5230\u7684\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ignore_not_duplicate"),(0,l.yg)("td",{parentName:"tr",align:null},"Bool"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5982\u679c\u4e3atrue\uff0c\u5219\u5ffd\u7565\u6240\u6709dulicate\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6e90\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8be6\u89c1","[Source common Options]","\uff08../sink common-Options.md\uff09\u3002")))),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4ee5\u4e0b\u793a\u4f8b\u5f15\u7528\u4e86FakeSource kudu\u5199\u5165\u8868kudu_sink_table")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n    source {\n      FakeSource {\n       plugin_output = "kudu"\n        schema = {\n          fields {\n                    id = int\n                    val_bool = boolean\n                    val_int8 = tinyint\n                    val_int16 = smallint\n                    val_int32 = int\n                    val_int64 = bigint\n                    val_float = float\n                    val_double = double\n                    val_decimal = "decimal(16, 1)"\n                    val_string = string\n                    val_unixtime_micros = timestamp\n          }\n        }\n        rows = [\n          {\n            kind = INSERT\n            fields = [1, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = INSERT\n            fields = [2, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = INSERT\n            fields = [3, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = UPDATE_BEFORE\n            fields = [1, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = UPDATE_AFTER\n           fields = [1, true, 2, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          },\n          {\n            kind = DELETE\n            fields = [2, true, 1, 2, 3, 4, 4.3,5.3,6.3, "NEW", "2020-02-02T02:02:02"]\n          }\n        ]\n      }\n    }\n\nsink {\n   kudu{\n    plugin_input = "kudu"\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "kudu_sink_table"\n    enable_kerberos = true\n    kerberos_principal = "xx@xx.COM"\n    kerberos_keytab = "xx.keytab"\n }\n}\n')),(0,l.yg)("h3",{id:"\u591a\u8868"},"\u591a\u8868"),(0,l.yg)("h4",{id:"\u793a\u4f8b1"},"\u793a\u4f8b1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  kudu{\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "${database_name}_${table_name}_test"\n  }\n}\n')),(0,l.yg)("h4",{id:"\u793a\u4f8b2"},"\u793a\u4f8b2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  kudu{\n    kudu_masters = "kudu-master-cdc:7051"\n    table_name = "${schema_name}_${table_name}_test"\n  }\n}\n')),(0,l.yg)("h2",{id:"\u66f4\u6539\u65e5\u5fd7"},"\u66f4\u6539\u65e5\u5fd7"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0Kudu\u6570\u636e\u63a5\u6536\u5668")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[\u6539\u8fdb]","Kudu Sink\u8fde\u63a5\u5668\u652f\u6301\u8ffd\u52a0\u9500\u552e\u884c\uff08",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2881"},"2881"),")")),(0,l.yg)("h3",{id:"\u4e0b\u4e2a\u7248\u672c"},"\u4e0b\u4e2a\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},'\u5c06\u63d2\u4ef6\u540d\u79f0\u4ece"KuduSink"\u66f4\u6539\u4e3a"Kudu"',(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3432"},"3432"))))}y.isMDXComponent=!0}}]);