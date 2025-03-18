"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[15290],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>c});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=t.createContext({}),p=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},y="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),y=p(a),u=r,c=y["".concat(g,".").concat(u)]||y[u]||o[u]||l;return a?t.createElement(c,i(i({ref:n},d),{},{components:a})):t.createElement(c,i({ref:n},d))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var g in n)hasOwnProperty.call(n,g)&&(s[g]=n[g]);s.originalType=e,s[y]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94194:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={},i="Cassandra",s={unversionedId:"connector-v2/sink/Cassandra",id:"connector-v2/sink/Cassandra",title:"Cassandra",description:"Cassandra \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Cassandra.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Cassandra",permalink:"/zh-CN/docs/connector-v2/sink/Cassandra",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Cassandra.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Assert",permalink:"/zh-CN/docs/connector-v2/sink/Assert"},next:{title:"Clickhouse",permalink:"/zh-CN/docs/connector-v2/sink/Clickhouse"}},g={},p=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"host string",id:"host-string",level:3},{value:"keyspace string",id:"keyspace-string",level:3},{value:"table String",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"datacenter String",id:"datacenter-string",level:3},{value:"consistency_level String",id:"consistency_level-string",level:3},{value:"fields array",id:"fields-array",level:3},{value:"batch_size number",id:"batch_size-number",level:3},{value:"batch_type String",id:"batch_type-string",level:3},{value:"async_write boolean",id:"async_write-boolean",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"\u4e0b\u4e00\u4e2a\u7248\u672c",id:"\u4e0b\u4e00\u4e2a\u7248\u672c",level:3}],d={toc:p},y="wrapper";function o(e){let{components:n,...a}=e;return(0,r.yg)(y,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"cassandra"},"Cassandra"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Cassandra \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u5c06\u6570\u636e\u5199\u5165 Apache Cassandra."),(0,r.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"keyspace"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datacenter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"datacenter1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consistency_level"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"LOCAL_ONE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"5000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_type"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"UNLOGGED")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"async_write"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7684\u96c6\u7fa4\u5730\u5740\uff0c\u683c\u5f0f\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port")," , \u5141\u8bb8\u6307\u5b9a\u591a\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"hosts")," . \u4f8b\u5982\n",(0,r.yg)("inlineCode",{parentName:"p"},'"cassandra1:9042,cassandra2:9042"'),"."),(0,r.yg)("h3",{id:"keyspace-string"},"keyspace ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u952e\u7a7a\u95f4."),(0,r.yg)("h3",{id:"table-string"},"table ","[String]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7684\u8868\u540d."),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7528\u6237\u7684\u7528\u6237\u540d."),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7528\u6237\u7684\u5bc6\u7801."),(0,r.yg)("h3",{id:"datacenter-string"},"datacenter ","[String]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7684\u6570\u636e\u4e2d\u5fc3, \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"datacenter1"),"."),(0,r.yg)("h3",{id:"consistency_level-string"},"consistency_level ","[String]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u5199\u5165\u4e00\u81f4\u6027\u7ea7\u522b, \u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"LOCAL_ONE"),"."),(0,r.yg)("h3",{id:"fields-array"},"fields ","[array]"),(0,r.yg)("p",null,"\u9700\u8981\u8f93\u51fa\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u7684\u6570\u636e\u5b57\u6bb5, \u5982\u679c\u672a\u914d\u7f6e, \u5982\u679c\u672a\u914d\u7f6e\uff0c\u5b83\u5c06\u81ea\u52a8\u9002\u5e94 sink \u8868 ",(0,r.yg)("inlineCode",{parentName:"p"},"schema"),"."),(0,r.yg)("h3",{id:"batch_size-number"},"batch_size ","[number]"),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/datastax/java-driver"},"Cassandra-Java-Driver")," \u6bcf\u6b21\u5199\u5165\u7684\u884c\u6570,\n\u9ed8\u8ba4\u503c ",(0,r.yg)("inlineCode",{parentName:"p"},"5000"),"."),(0,r.yg)("h3",{id:"batch_type-string"},"batch_type ","[String]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Cassandra")," \u6279\u5904\u7406\u6a21\u5f0f, \u9ed8\u8ba4\u503c ",(0,r.yg)("inlineCode",{parentName:"p"},"UNLOGGER"),"."),(0,r.yg)("h3",{id:"async_write-boolean"},"async_write ","[boolean]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"cassandra")," \u662f\u5426\u4ee5\u5f02\u6b65\u6a21\u5f0f\u5199\u5165, \u9ed8\u8ba4\u503c ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n Cassandra {\n     host = "localhost:9042"\n     username = "cassandra"\n     password = "cassandra"\n     datacenter = "datacenter1"\n     keyspace = "test"\n    }\n}\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)("h3",{id:"\u4e0b\u4e00\u4e2a\u7248\u672c"},"\u4e0b\u4e00\u4e2a\u7248\u672c"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6dfb\u52a0 Cassandra \u63a5\u6536\u5668\u8fde\u63a5\u5668")))}o.isMDXComponent=!0}}]);