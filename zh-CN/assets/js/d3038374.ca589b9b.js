"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[78137],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>s});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=g(e,["components","mdxType","originalType","parentName"]),y=o(t),u=l,s=y["".concat(p,".").concat(u)]||y[u]||m[u]||r;return t?a.createElement(s,i(i({ref:n},d),{},{components:t})):a.createElement(s,i({ref:n},d))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=u;var g={};for(var p in n)hasOwnProperty.call(n,p)&&(g[p]=n[p]);g.originalType=e,g[y]="string"==typeof e?e:l,i[1]=g;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77789:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={},i="Doris",g={unversionedId:"connector-v2/sink/Doris",id:"version-2.3.9/connector-v2/sink/Doris",title:"Doris",description:"Doris sink \u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/sink/Doris.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Doris",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/Doris",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/connector-v2/sink/Doris.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"\u9489\u9489",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/DingTalk"},next:{title:"Druid",permalink:"/zh-CN/docs/2.3.9/connector-v2/sink/Druid"}},p={},o=[{value:"\u652f\u6301\u7684doris\u7248\u672c",id:"\u652f\u6301\u7684doris\u7248\u672c",level:2},{value:"\u5f15\u64ce\u652f\u6301",id:"\u5f15\u64ce\u652f\u6301",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4f9d\u8d56",id:"\u4f9d\u8d56",level:2},{value:"\u5bf9\u4e8e Spark/Flink",id:"\u5bf9\u4e8e-sparkflink",level:3},{value:"\u5bf9\u4e8e SeaTunnel Zeta",id:"\u5bf9\u4e8e-seatunnel-zeta",level:3},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"schema_save_modeEnum",id:"schema_save_modeenum",level:3},{value:"data_save_modeEnum",id:"data_save_modeenum",level:3},{value:"save_mode_create_template",id:"save_mode_create_template",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u652f\u6301\u7684\u5bfc\u5165\u6570\u636e\u683c\u5f0f",id:"\u652f\u6301\u7684\u5bfc\u5165\u6570\u636e\u683c\u5f0f",level:4},{value:"\u8c03\u4f18\u6307\u5357",id:"\u8c03\u4f18\u6307\u5357",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"CDC\uff08\u76d1\u542c\u6570\u636e\u53d8\u66f4\u6355\u83b7\uff09\u4e8b\u4ef6\uff1a",id:"cdc\u76d1\u542c\u6570\u636e\u53d8\u66f4\u6355\u83b7\u4e8b\u4ef6",level:3},{value:"\u4f7f\u7528JSON\u683c\u5f0f\u5bfc\u5165\u6570\u636e",id:"\u4f7f\u7528json\u683c\u5f0f\u5bfc\u5165\u6570\u636e",level:3},{value:"\u4f7f\u7528CSV\u683c\u5f0f\u5bfc\u5165\u6570\u636e",id:"\u4f7f\u7528csv\u683c\u5f0f\u5bfc\u5165\u6570\u636e",level:3},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],d={toc:o},y="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(y,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"doris"},"Doris"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Doris sink \u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684doris\u7248\u672c"},"\u652f\u6301\u7684doris\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"exactly-once & cdc \u652f\u6301  ",(0,l.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.1.x")),(0,l.yg)("li",{parentName:"ul"},"\u652f\u6301\u6570\u7ec4\u6570\u636e\u7c7b\u578b ",(0,l.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.2.x")),(0,l.yg)("li",{parentName:"ul"},"\u5c06\u652f\u6301Map\u6570\u636e\u7c7b\u578b ",(0,l.yg)("inlineCode",{parentName:"li"},"Doris version is 2.x"))),(0,l.yg)("h2",{id:"\u5f15\u64ce\u652f\u6301"},"\u5f15\u64ce\u652f\u6301"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.9/concept/connector-v2-features"},"cdc"))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u7528\u4e8e\u53d1\u9001\u6570\u636e\u5230doris. \u540c\u65f6\u652f\u6301\u6d41\u6a21\u5f0f\u548c\u6279\u6a21\u5f0f\u5904\u7406.\nDoris Sink\u8fde\u63a5\u5668\u7684\u5185\u90e8\u5b9e\u73b0\u662f\u901a\u8fc7stream load\u6279\u91cf\u7f13\u5b58\u548c\u5bfc\u5165\u7684\u3002"),(0,l.yg)("h2",{id:"\u4f9d\u8d56"},"\u4f9d\u8d56"),(0,l.yg)("h3",{id:"\u5bf9\u4e8e-sparkflink"},"\u5bf9\u4e8e Spark/Flink"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u4e0b\u8f7d ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," \u5e76\u6dfb\u52a0\u5230\u76ee\u5f55 ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.yg)("h3",{id:"\u5bf9\u4e8e-seatunnel-zeta"},"\u5bf9\u4e8e SeaTunnel Zeta"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"\u4f60\u9700\u8981\u4e0b\u8f7d ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," \u5e76\u6dfb\u52a0\u5230\u76ee\u5f55 ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," \u96c6\u7fa4 fenodes \u5730\u5740, \u683c\u5f0f\u662f ",(0,l.yg)("inlineCode",{parentName:"td"},'"fe_ip:fe_http_port, ..."'))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query-port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"9030"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," Fenodes mysql\u534f\u8bae\u67e5\u8be2\u7aef\u53e3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"username"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," \u7528\u6237\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," \u5bc6\u7801")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris"),"\u6570\u636e\u5e93\u540d\u79f0 , \u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"${database_name}")," \u8868\u793a\u4e0a\u6e38\u6570\u636e\u5e93\u540d\u79f0\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," \u8868\u540d,  \u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"${table_name}"),"  \u8868\u793a\u4e0a\u6e38\u8868\u540d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("inlineCode",{parentName:"td"},"Doris")," \u8868\u7684\u540d\u79f0\uff0c2.3.5 \u7248\u672c\u540e\u5c06\u5f03\u7528\uff0c\u8bf7\u4f7f\u7528 ",(0,l.yg)("inlineCode",{parentName:"td"},"database")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"table")," \u4ee3\u66ff\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"Yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"stream load\u5bfc\u5165\u4f7f\u7528\u7684\u6807\u7b7e\u524d\u7f00\u3002 \u57282pc\u573a\u666f\u4e0b\uff0c\u9700\u8981\u5168\u5c40\u552f\u4e00\u6027\u6765\u4fdd\u8bc1SeaTunnel\u7684EOS\u8bed\u4e49\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e24\u9636\u6bb5\u63d0\u4ea4\uff082pc\uff09\uff0c\u9ed8\u8ba4\u4e3a false\u3002 \u5bf9\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\uff0c\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/dev/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STREAM-LOAD/"},"\u6b64\u5904"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,l.yg)("td",{parentName:"tr",align:null},"bool"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u5220\u9664\u3002 \u8be5\u9009\u9879\u9700\u8981Doris\u8868\u5f00\u542f\u6279\u91cf\u5220\u9664\u529f\u80fd\uff080.15+\u7248\u672c\u9ed8\u8ba4\u5f00\u542f\uff09\uff0c\u4e14\u4ec5\u652f\u6301Unique\u6a21\u578b\u3002 \u60a8\u53ef\u4ee5\u5728\u6b64",(0,l.yg)("a",{parentName:"td",href:"https://doris.apache.org/docs/dev/data-operate/delete/batch-delete-manual/"},"link"),"\u83b7\u5f97\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.check-interval"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u52a0\u8f7d\u8fc7\u7a0b\u4e2d\u68c0\u67e5\u5f02\u5e38\u65f6\u95f4\u95f4\u9694\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.max-retries"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5411\u6570\u636e\u5e93\u5199\u5165\u8bb0\u5f55\u5931\u8d25\u65f6\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"256 * 1024"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7f13\u5b58stream load\u6570\u636e\u7684\u7f13\u51b2\u533a\u5927\u5c0f\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink.buffer-count"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7f13\u5b58stream load\u6570\u636e\u7684\u7f13\u51b2\u533a\u8ba1\u6570\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.batch.size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"1024"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6bcf\u6b21http\u8bf7\u6c42\u5199\u5165doris\u7684\u6279\u91cf\u5927\u5c0f\uff0c\u5f53row\u8fbe\u5230\u8be5\u5927\u5c0f\u6216\u8005\u6267\u884ccheckpoint\u65f6\uff0c\u7f13\u5b58\u7684\u6570\u636e\u5c31\u4f1a\u5199\u5165\u670d\u52a1\u5668\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"needs_unsupported_type_casting"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"No"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u4e0d\u652f\u6301\u7684\u7c7b\u578b\u8f6c\u6362\uff0c\u4f8b\u5982 Decimal64 \u5230 Double\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"schema\u4fdd\u5b58\u6a21\u5f0f\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684",(0,l.yg)("inlineCode",{parentName:"td"},"schema_save_mode"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u4fdd\u5b58\u6a21\u5f0f\uff0c\u8bf7\u53c2\u8003\u4e0b\u9762\u7684",(0,l.yg)("inlineCode",{parentName:"td"},"data_save_mode"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"save_mode_create_template"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"see below"),(0,l.yg)("td",{parentName:"tr",align:null},"\u89c1\u4e0b\u6587\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53data_save_mode\u9009\u62e9CUSTOM_PROCESSING\u65f6\uff0c\u9700\u8981\u586b\u5199CUSTOM_SQL\u53c2\u6570\u3002 \u8be5\u53c2\u6570\u901a\u5e38\u586b\u5199\u4e00\u6761\u53ef\u4ee5\u6267\u884c\u7684SQL\u3002 SQL\u5c06\u5728\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\u6267\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"doris.config"),(0,l.yg)("td",{parentName:"tr",align:null},"map"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8be5\u9009\u9879\u7528\u4e8e\u652f\u6301\u81ea\u52a8\u751f\u6210sql\u65f6\u7684insert\u3001delete\u3001update\u7b49\u64cd\u4f5c\uff0c\u4ee5\u53ca\u652f\u6301\u7684\u683c\u5f0f\u3002")))),(0,l.yg)("h3",{id:"schema_save_modeenum"},"schema_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u5f00\u542f\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u73b0\u6709\u7684\u8868\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"RECREATE_SCHEMA")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u521b\u5efa\uff0c\u8868\u4fdd\u5b58\u65f6\u5220\u9664\u5e76\u91cd\u5efa\u3002\n",(0,l.yg)("inlineCode",{parentName:"p"},"CREATE_SCHEMA_WHEN_NOT_EXIST")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u521b\u5efa\uff0c\u8868\u5b58\u5728\u65f6\u8df3\u8fc7\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_SCHEMA_NOT_EXIST")," \uff1a\u8868\u4e0d\u5b58\u5728\u65f6\u4f1a\u62a5\u9519\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"IGNORE")," \uff1a\u5ffd\u7565\u5bf9\u8868\u7684\u5904\u7406\u3002"),(0,l.yg)("h3",{id:"data_save_modeenum"},"data_save_mode","[Enum]"),(0,l.yg)("p",null,"\u5728\u5f00\u542f\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u9488\u5bf9\u76ee\u6807\u7aef\u5df2\u6709\u7684\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002\n\u9009\u9879\u4ecb\u7ecd\uff1a",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"DROP_DATA"),"\uff1a \u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\u5e76\u5220\u9664\u6570\u636e\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"APPEND_DATA"),"\uff1a\u4fdd\u7559\u6570\u636e\u5e93\u7ed3\u6784\uff0c\u4fdd\u7559\u6570\u636e\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"CUSTOM_PROCESSING"),"\uff1a\u7528\u6237\u81ea\u5b9a\u4e49\u5904\u7406\u3002",(0,l.yg)("br",{parentName:"p"}),"\n",(0,l.yg)("inlineCode",{parentName:"p"},"ERROR_WHEN_DATA_EXISTS"),"\uff1a\u6709\u6570\u636e\u65f6\u62a5\u9519\u3002"),(0,l.yg)("h3",{id:"save_mode_create_template"},"save_mode_create_template"),(0,l.yg)("p",null,"\u4f7f\u7528\u6a21\u677f\u81ea\u52a8\u521b\u5efaDoris\u8868\uff0c\n\u4f1a\u6839\u636e\u4e0a\u6e38\u6570\u636e\u7c7b\u578b\u548cschema\u7c7b\u578b\u521b\u5efa\u76f8\u5e94\u7684\u5efa\u8868\u8bed\u53e5\uff0c\n\u9ed8\u8ba4\u6a21\u677f\u53ef\u4ee5\u6839\u636e\u60c5\u51b5\u8fdb\u884c\u4fee\u6539\u3002"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u6a21\u677f\uff1a"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}` (\n${rowtype_primary_key},\n${rowtype_fields}\n) ENGINE=OLAP\n UNIQUE KEY (${rowtype_primary_key})\nCOMMENT \'${comment}\'\nDISTRIBUTED BY HASH (${rowtype_primary_key})\n PROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"in_memory" = "false",\n"storage_format" = "V2",\n"disable_auto_compaction" = "false"\n)\n')),(0,l.yg)("p",null,"\u5982\u679c\u6a21\u677f\u4e2d\u586b\u5199\u4e86\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c\u4f8b\u5982\u6dfb\u52a0 id \u5b57\u6bb5"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE IF NOT EXISTS `${database}`.`${table_name}`\n(   \n    id,\n    ${rowtype_fields}\n) ENGINE = OLAP UNIQUE KEY (${rowtype_primary_key})\n    COMMENT \'${comment}\'\n    DISTRIBUTED BY HASH (${rowtype_primary_key})\n    PROPERTIES\n(\n    "replication_num" = "1"\n);\n')),(0,l.yg)("p",null,"\u8fde\u63a5\u5668\u4f1a\u81ea\u52a8\u4ece\u4e0a\u6e38\u83b7\u53d6\u5bf9\u5e94\u7c7b\u578b\u5b8c\u6210\u586b\u5145\uff0c\n\u5e76\u4ece\u201crowtype_fields\u201d\u4e2d\u5220\u9664 id \u5b57\u6bb5\u3002 \u8be5\u65b9\u6cd5\u53ef\u7528\u4e8e\u81ea\u5b9a\u4e49\u5b57\u6bb5\u7c7b\u578b\u548c\u5c5e\u6027\u7684\u4fee\u6539\u3002"),(0,l.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5360\u4f4d\u7b26\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"database\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u6570\u636e\u5e93\u3002"),(0,l.yg)("li",{parentName:"ul"},"table_name\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u8868\u540d\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_fields\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38schema\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\uff0c\u81ea\u52a8\u6620\u5c04\u5230Doris\u7684\u5b57\u6bb5\u63cf\u8ff0\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_primary_key\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u6a21\u5f0f\u4e2d\u7684\u4e3b\u952e\uff08\u53ef\u80fd\u662f\u5217\u8868\uff09\u3002"),(0,l.yg)("li",{parentName:"ul"},"rowtype_unique_key\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u6a21\u5f0f\u4e2d\u7684\u552f\u4e00\u952e\uff08\u53ef\u80fd\u662f\u5217\u8868\uff09\u3002"),(0,l.yg)("li",{parentName:"ul"},"comment\uff1a\u7528\u4e8e\u83b7\u53d6\u4e0a\u6e38\u6a21\u5f0f\u4e2d\u7684\u8868\u6ce8\u91ca\u3002")),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Doris \u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.yg)("td",{parentName:"tr",align:null},"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT"),(0,l.yg)("td",{parentName:"tr",align:null},"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"TINYINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.yg)("br",null),"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,l.yg)("br",null),"DOUBLE",(0,l.yg)("br",null),"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRING"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,l.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"MAP"),(0,l.yg)("td",{parentName:"tr",align:null},"MAP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"HLL"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5c1a\u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BITMAP"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5c1a\u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"QUANTILE_STATE"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5c1a\u4e0d\u652f\u6301")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5c1a\u4e0d\u652f\u6301")))),(0,l.yg)("h4",{id:"\u652f\u6301\u7684\u5bfc\u5165\u6570\u636e\u683c\u5f0f"},"\u652f\u6301\u7684\u5bfc\u5165\u6570\u636e\u683c\u5f0f"),(0,l.yg)("p",null,"\u652f\u6301\u7684\u683c\u5f0f\u5305\u62ec CSV \u548c JSON\u3002"),(0,l.yg)("h2",{id:"\u8c03\u4f18\u6307\u5357"},"\u8c03\u4f18\u6307\u5357"),(0,l.yg)("p",null,"\u9002\u5f53\u589e\u52a0",(0,l.yg)("inlineCode",{parentName:"p"},"sink.buffer-size"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"doris.batch.size"),"\u7684\u503c\u53ef\u4ee5\u63d0\u9ad8\u5199\u6027\u80fd\u3002"),(0,l.yg)("p",null,"\u5728\u6d41\u6a21\u5f0f\u4e0b\uff0c\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"doris.batch.size"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval"),"\u90fd\u914d\u7f6e\u4e3a\u8f83\u5927\u7684\u503c\uff0c\u6700\u540e\u5230\u8fbe\u7684\u6570\u636e\u53ef\u80fd\u4f1a\u6709\u8f83\u5927\u7684\u5ef6\u8fdf(\u5ef6\u8fdf\u7684\u65f6\u95f4\u5c31\u662f\u68c0\u67e5\u70b9\u95f4\u9694\u7684\u65f6\u95f4)\u3002"),(0,l.yg)("p",null,"\u8fd9\u662f\u56e0\u4e3a\u6700\u540e\u5230\u8fbe\u7684\u6570\u636e\u603b\u91cf\u53ef\u80fd\u4e0d\u4f1a\u8d85\u8fc7doris.batch.size\u6307\u5b9a\u7684\u9608\u503c\u3002\u56e0\u6b64\uff0c\u5728\u63a5\u6536\u5230\u6570\u636e\u7684\u6570\u636e\u91cf\u6ca1\u6709\u8d85\u8fc7\u8be5\u9608\u503c\u4e4b\u524d\u53ea\u6709\u68c0\u67e5\u70b9\u624d\u4f1a\u89e6\u53d1\u63d0\u4ea4\u64cd\u4f5c\u3002\u56e0\u6b64\uff0c\u9700\u8981\u9009\u62e9\u4e00\u4e2a\u5408\u9002\u7684\u68c0\u67e5\u70b9\u95f4\u9694\u3002"),(0,l.yg)("p",null,"\u6b64\u5916\uff0c\u5982\u679c\u4f60\u901a\u8fc7",(0,l.yg)("inlineCode",{parentName:"p"},"sink.enable-2pc=true"),"\u5c5e\u6027\u542f\u75282pc\u3002",(0,l.yg)("inlineCode",{parentName:"p"},"sink.buffer-size"),"\u5c06\u4f1a\u5931\u53bb\u4f5c\u7528\uff0c\u53ea\u6709\u68c0\u67e5\u70b9\u624d\u80fd\u89e6\u53d1\u63d0\u4ea4\u3002"),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4e0b\u9762\u7684\u4f8b\u5b50\u63cf\u8ff0\u4e86\u5411Doris\u5199\u5165\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u7528\u6237\u9700\u8981\u5728\u4e0b\u6e38\u521b\u5efa\u5bf9\u5e94\u7684\u8868\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    row.num = 10\n    map.size = 10\n    array.size = 10\n    bytes.length = 10\n    string.length = 10\n    schema = {\n      fields {\n        c_map = "map<string, array<int>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(16, 1)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    }\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"cdc\u76d1\u542c\u6570\u636e\u53d8\u66f4\u6355\u83b7\u4e8b\u4ef6"},"CDC\uff08\u76d1\u542c\u6570\u636e\u53d8\u66f4\u6355\u83b7\uff09\u4e8b\u4ef6\uff1a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u672c\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2aSeaTunnel\u540c\u6b65\u4efb\u52a1\uff0c\u901a\u8fc7FakeSource\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e76\u53d1\u9001\u7ed9Doris Sink\uff0cFakeSource\u4f7f\u7528schema\u3001score\uff08int\u7c7b\u578b\uff09\u6a21\u62dfCDC\u6570\u636e\uff0cDoris\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u540d\u4e3atest.e2e_table_sink\u7684sink\u4efb\u52a1\u53ca\u5176\u5bf9\u5e94\u7684\u8868 \u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  checkpoint.interval = 10000\n}\n\nsource {\n  FakeSource {\n    schema = {\n      fields {\n        pk_id = bigint\n        name = string\n        score = int\n        sex = boolean\n        number = tinyint\n        height = float\n        sight = double\n        create_time = date\n        update_time = timestamp\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [1, "A", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = INSERT\n        fields = [2, "B", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = INSERT\n        fields = [3, "C", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = UPDATE_BEFORE\n        fields = [1, "A", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = UPDATE_AFTER\n        fields = [1, "A_1", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      },\n      {\n        kind = DELETE\n        fields = [2, "B", 100, true, 1, 170.0, 4.3, "2020-02-02", "2020-02-02T02:02:02"]\n      }\n    ]\n  }\n}\n\nsink {\n  Doris {\n    fenodes = "doris_cdc_e2e:8030"\n    username = root\n    password = ""\n    database = "test"\n    table = "e2e_table_sink"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n\n')),(0,l.yg)("h3",{id:"\u4f7f\u7528json\u683c\u5f0f\u5bfc\u5165\u6570\u636e"},"\u4f7f\u7528JSON\u683c\u5f0f\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_json"\n        doris.config = {\n            format="json"\n            read_json_by_line="true"\n        }\n    }\n}\n\n')),(0,l.yg)("h3",{id:"\u4f7f\u7528csv\u683c\u5f0f\u5bfc\u5165\u6570\u636e"},"\u4f7f\u7528CSV\u683c\u5f0f\u5bfc\u5165\u6570\u636e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        database = "test"\n        table = "e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_csv"\n        doris.config = {\n          format = "csv"\n          column_separator = ","\n        }\n    }\n}\n')),(0,l.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 Doris sink\u8fde\u63a5\u5668")),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"[Improve]"," Change Doris Config Prefix ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/3856"},"3856"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"[Improve]"," Refactor some Doris Sink code as well as support 2pc and cdc ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/4235"},"4235")))),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"PR 4235 is an incompatible modification to PR 3856. Please refer to PR 4235 to use the new Doris connector")))}m.isMDXComponent=!0}}]);