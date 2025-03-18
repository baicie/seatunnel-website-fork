"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[34866],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>N});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var y=a.createContext({}),p=function(e){var n=a.useContext(y),t=n;return e&&(t="function"==typeof e?e(n):g(g({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(y.Provider,{value:n},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,y=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(t),m=l,N=o["".concat(y,".").concat(m)]||o[m]||d[m]||r;return t?a.createElement(N,g(g({ref:n},u),{},{components:t})):a.createElement(N,g({ref:n},u))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,g=new Array(r);g[0]=m;var i={};for(var y in n)hasOwnProperty.call(n,y)&&(i[y]=n[y]);i.originalType=e,i[o]="string"==typeof e?e:l,g[1]=i;for(var p=2;p<r;p++)g[p]=t[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},70724:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>g,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(58168),l=(t(96540),t(15680));const r={},g="Snowflake",i={unversionedId:"connector-v2/sink/Snowflake",id:"connector-v2/sink/Snowflake",title:"Snowflake",description:"JDBC Snowflake Sink\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Snowflake.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Snowflake",permalink:"/zh-CN/docs/connector-v2/sink/Snowflake",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sls",permalink:"/zh-CN/docs/connector-v2/sink/Sls"},next:{title:"Socket",permalink:"/zh-CN/docs/connector-v2/sink/Socket"}},y={},p=[{value:"\u652f\u6301\u7684\u5f15\u64ce",id:"\u652f\u6301\u7684\u5f15\u64ce",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868",level:2},{value:"\u6570\u636e\u5e93\u4f9d\u8d56",id:"\u6570\u636e\u5e93\u4f9d\u8d56",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u914d\u7f6e\u9009\u9879",id:"\u914d\u7f6e\u9009\u9879",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b\uff1a",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"CDC\uff08\u53d8\u66f4\u6570\u636e\u6355\u83b7\uff09\u4e8b\u4ef6",id:"cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u4e8b\u4ef6",level:3}],u={toc:p},o="wrapper";function d(e){let{components:n,...t}=e;return(0,l.yg)(o,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"snowflake"},"Snowflake"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JDBC Snowflake Sink\u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u5f15\u64ce"},"\u652f\u6301\u7684\u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\uff08CDC\uff09"))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u901a\u8fc7JDBC\u5199\u5165\u6570\u636e\u3002\u652f\u6301\u6279\u5904\u7406\u6a21\u5f0f\u548c\u6d41\u5904\u7406\u6a21\u5f0f\uff0c\u652f\u6301\u5e76\u53d1\u5199\u5165\u3002"),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8\u7c7b"),(0,l.yg)("th",{parentName:"tr",align:null},"URL"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Snowflake"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u4f9d\u8d56\u7248\u672c\u5bf9\u5e94\u4e0d\u540c\u7684\u9a71\u52a8\u7c7b\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"net.snowflake.client.jdbc.SnowflakeDriver"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc\u2744\ufe0f//<account_name>.snowflakecomputing.com"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.snowflake/snowflake-jdbc"},"\u4e0b\u8f7d"))))),(0,l.yg)("h2",{id:"\u6570\u636e\u5e93\u4f9d\u8d56"},"\u6570\u636e\u5e93\u4f9d\u8d56"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u8bf7\u4e0b\u8f7d\u652f\u6301\u5217\u8868\u4e2d\u5bf9\u5e94\u7684'Maven'\u4f9d\u8d56\uff0c\u5e76\u5c06\u5176\u590d\u5236\u5230'$SEATUNNEL_HOME/plugins/jdbc/lib/'\u5de5\u4f5c\u76ee\u5f55\u4e0b",(0,l.yg)("br",null),"\n\u4f8b\u5982Snowflake\u6570\u636e\u6e90\uff1acp snowflake-connector-java-xxx.jar $SEATUNNEL_HOME/plugins/jdbc/lib/")),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Snowflake \u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"BYTEINT",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"SHORT_TYPE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT",(0,l.yg)("br",null),"INTEGER",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"LONG")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,l.yg)("br",null),"NUMERIC",(0,l.yg)("br",null),"NUMBER",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)\uff08\u83b7\u53d6\u6307\u5b9a\u5217\u7684\u5927\u5c0f>38\uff09"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"REAL",(0,l.yg)("br",null),"FLOAT4"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.yg)("br",null),"DOUBLE PRECISION",(0,l.yg)("br",null),"FLOAT8",(0,l.yg)("br",null),"FLOAT",(0,l.yg)("br",null)),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR",(0,l.yg)("br",null),"CHARACTER",(0,l.yg)("br",null),"VARCHAR",(0,l.yg)("br",null),"STRING",(0,l.yg)("br",null),"TEXT",(0,l.yg)("br",null),"VARIANT",(0,l.yg)("br",null),"OBJECT"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,l.yg)("br",null),"TIMESTAMP",(0,l.yg)("br",null),"TIMESTAMP_LTZ",(0,l.yg)("br",null),"TIMESTAMP_NTZ",(0,l.yg)("br",null),"TIMESTAMP_TZ"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BINARY",(0,l.yg)("br",null),"VARBINARY",(0,l.yg)("br",null),"GEOGRAPHY",(0,l.yg)("br",null),"GEOMETRY"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,l.yg)("h2",{id:"\u914d\u7f6e\u9009\u9879"},"\u914d\u7f6e\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC\u8fde\u63a5\u7684URL\u3002\u53c2\u8003\u793a\u4f8b\uff1ajdbc",":","snowflake://<account_name>.snowflakecomputing.com")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u8fdc\u7a0b\u6570\u636e\u6e90\u7684JDBC\u7c7b\u540d\uff0c",(0,l.yg)("br",null),"\u5982\u679c\u4f7f\u7528Snowflake\uff0c\u503c\u4e3a",(0,l.yg)("inlineCode",{parentName:"td"},"net.snowflake.client.jdbc.SnowflakeDriver"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5b9e\u4f8b\u7684\u7528\u6237\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5b9e\u4f8b\u7684\u5bc6\u7801")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64SQL\u5c06\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002\u4f8b\u5982",(0,l.yg)("inlineCode",{parentName:"td"},"INSERT ..."),"\uff0c",(0,l.yg)("inlineCode",{parentName:"td"},"query"),"\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64",(0,l.yg)("inlineCode",{parentName:"td"},"database"),"\u548c",(0,l.yg)("inlineCode",{parentName:"td"},"table-name"),"\u81ea\u52a8\u751f\u6210SQL\u5e76\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002",(0,l.yg)("br",null),"\u6b64\u9009\u9879\u4e0e",(0,l.yg)("inlineCode",{parentName:"td"},"query"),"\u4e92\u65a5\uff0c\u4e14\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"td"},"database"),"\u548c\u6b64",(0,l.yg)("inlineCode",{parentName:"td"},"table-name"),"\u81ea\u52a8\u751f\u6210SQL\u5e76\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002",(0,l.yg)("br",null),"\u6b64\u9009\u9879\u4e0e",(0,l.yg)("inlineCode",{parentName:"td"},"query"),"\u4e92\u65a5\uff0c\u4e14\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6b64\u9009\u9879\u7528\u4e8e\u5728\u81ea\u52a8\u751f\u6210SQL\u65f6\u652f\u6301",(0,l.yg)("inlineCode",{parentName:"td"},"insert"),"\u3001",(0,l.yg)("inlineCode",{parentName:"td"},"delete"),"\u548c",(0,l.yg)("inlineCode",{parentName:"td"},"update"),"\u7b49\u64cd\u4f5c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4f7f\u7528INSERT SQL\u3001UPDATE SQL\u6765\u5904\u7406\u66f4\u65b0\u4e8b\u4ef6\uff08INSERT, UPDATE_AFTER\uff09\uff0c\u57fa\u4e8e\u67e5\u8be2\u4e3b\u952e\u662f\u5426\u5b58\u5728\u3002\u6b64\u914d\u7f6e\u4ec5\u5728\u6570\u636e\u5e93\u4e0d\u652f\u6301upsert\u8bed\u6cd5\u65f6\u4f7f\u7528\u3002",(0,l.yg)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u6b64\u65b9\u6cd5\u6027\u80fd\u8f83\u4f4e\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u9a8c\u8bc1\u8fde\u63a5\u7684\u64cd\u4f5c\u7684\u7b49\u5f85\u65f6\u95f4\uff08\u79d2\uff09\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u5931\u8d25\uff08executeBatch\uff09\u7684\u91cd\u8bd5\u6b21\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u6279\u5904\u7406\u5199\u5165\uff0c\u5f53\u7f13\u51b2\u7684\u8bb0\u5f55\u6570\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"batch_size"),"\u6216\u65f6\u95f4\u8fbe\u5230",(0,l.yg)("inlineCode",{parentName:"td"},"checkpoint.interval"),"\u65f6\uff0c",(0,l.yg)("br",null),"\u6570\u636e\u5c06\u88ab\u5237\u65b0\u5230\u6570\u636e\u5e93\u4e2d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u63d0\u4ea4\u5931\u8d25\u7684\u91cd\u8bd5\u6b21\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u6253\u5f00\u540e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a-1\uff08\u6c38\u4e0d\u8d85\u65f6\uff09\u3002\u6ce8\u610f\uff0c\u8bbe\u7f6e\u8d85\u65f6\u53ef\u80fd\u4f1a\u5f71\u54cd",(0,l.yg)("br",null),"\u7cbe\u786e\u4e00\u6b21\u8bed\u4e49")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u542f\u7528\u81ea\u52a8\u4e8b\u52a1\u63d0\u4ea4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u989d\u5916\u7684\u8fde\u63a5\u914d\u7f6e\u53c2\u6570\uff0c\u5f53properties\u548cURL\u4e2d\u6709\u76f8\u540c\u53c2\u6570\u65f6\uff0c\u4f18\u5148\u7ea7\u7531\u9a71\u52a8\u7a0b\u5e8f\u7684",(0,l.yg)("br",null),"\u5177\u4f53\u5b9e\u73b0\u51b3\u5b9a\u3002\u4f8b\u5982\uff0c\u5728MySQL\u4e2d\uff0cproperties\u4f18\u5148\u4e8eURL\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63a5\u6536\u5668\u63d2\u4ef6\u901a\u7528\u53c2\u6570\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink-common-options"},"\u63a5\u6536\u5668\u901a\u7528\u9009\u9879"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7\u4e3b\u952e\u5b58\u5728\u542f\u7528upsert\uff0c\u5982\u679c\u4efb\u52a1\u6ca1\u6709\u952e\u91cd\u590d\u6570\u636e\uff0c\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a",(0,l.yg)("inlineCode",{parentName:"td"},"false"),"\u53ef\u4ee5\u52a0\u5feb\u6570\u636e\u5bfc\u5165\u901f\u5ea6")))),(0,l.yg)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u672a\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"partition_column"),"\uff0c\u5c06\u4ee5\u5355\u5e76\u53d1\u8fd0\u884c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"partition_column"),"\uff0c\u5c06\u6839\u636e\u4efb\u52a1\u7684\u5e76\u53d1\u5ea6\u5e76\u884c\u6267\u884c\u3002")),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b\uff1a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2aSeaTunnel\u540c\u6b65\u4efb\u52a1\uff0c\u901a\u8fc7FakeSource\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e76\u53d1\u9001\u5230JDBC Sink\u3002FakeSource\u603b\u5171\u751f\u621016\u884c\u6570\u636e\uff08row.num=16\uff09\uff0c\u6bcf\u884c\u6709\u4e24\u4e2a\u5b57\u6bb5\uff0cname\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u548cage\uff08int\u7c7b\u578b\uff09\u3002\u6700\u7ec8\u76ee\u6807\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test_table"),"\u4e2d\u4e5f\u5c06\u670916\u884c\u6570\u636e\u3002\u5728\u8fd0\u884c\u6b64\u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5728Snowflake\u6570\u636e\u5e93\u4e2d\u521b\u5efa\u6570\u636e\u5e93",(0,l.yg)("inlineCode",{parentName:"p"},"test"),"\u548c\u8868",(0,l.yg)("inlineCode",{parentName:"p"},"test_table"),"\u3002\u5982\u679c\u60a8\u5c1a\u672a\u5b89\u88c5\u548c\u90e8\u7f72SeaTunnel\uff0c\u8bf7\u6309\u7167",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"\u5b89\u88c5SeaTunnel"),"\u4e2d\u7684\u8bf4\u660e\u8fdb\u884c\u5b89\u88c5\u548c\u90e8\u7f72\u3002\u7136\u540e\u6309\u7167",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"\u4f7f\u7528SeaTunnel Engine\u5feb\u901f\u5165\u95e8"),"\u4e2d\u7684\u8bf4\u660e\u8fd0\u884c\u6b64\u4f5c\u4e1a\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# \u5b9a\u4e49\u8fd0\u884c\u65f6\u73af\u5883\nenv {\n    parallelism = 1\n    job.mode = "BATCH"\n}\nsource {\n    # \u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\u6e90\u63d2\u4ef6\uff0c**\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u548c\u6f14\u793a\u529f\u80fd\u6e90\u63d2\u4ef6**\n    FakeSource {\n        parallelism = 1\n        plugin_output = "fake"\n        row.num = 16\n        schema = {\n            fields {\n                name = "string"\n                age = "int"\n            }\n        }\n    }\n    # \u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eSeaTunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u5b8c\u6574\u7684\u6e90\u63d2\u4ef6\u5217\u8868\uff0c\n    # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/source\n}\ntransform {\n\n    # \u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eSeaTunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u5b8c\u6574\u7684\u8f6c\u6362\u63d2\u4ef6\u5217\u8868\uff0c\n    # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/transform-v2\n}\nsink {\n    jdbc {\n        url = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\n        driver = "net.snowflake.client.jdbc.SnowflakeDriver"\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n    }\n    # \u5982\u679c\u60a8\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eSeaTunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u5b8c\u6574\u7684\u63a5\u6536\u5668\u63d2\u4ef6\u5217\u8868\uff0c\n    # \u8bf7\u8bbf\u95ee https://seatunnel.apache.org/docs/connector-v2/sink\n}\n')),(0,l.yg)("h3",{id:"cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u4e8b\u4ef6"},"CDC\uff08\u53d8\u66f4\u6570\u636e\u6355\u83b7\uff09\u4e8b\u4ef6"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u4e5f\u652f\u6301CDC\u53d8\u66f4\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u914d\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"database"),"\u3001",(0,l.yg)("inlineCode",{parentName:"p"},"table"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"primary_keys"),"\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n   jdbc {\n   url = "jdbc:snowflake://<account_name>.snowflakecomputing.com"\n   driver = "net.snowflake.client.jdbc.SnowflakeDriver"\n   user = "root"\n   password = "123456"\n   generate_sink_sql = true\n   \n   \n   # \u60a8\u9700\u8981\u540c\u65f6\u914d\u7f6edatabase\u548ctable\n   database = test\n   table = sink_table\n   primary_keys = ["id","name"]\n  }\n}\n')))}d.isMDXComponent=!0}}]);