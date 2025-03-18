"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83169],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>N});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},o=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,d=y(e,["components","mdxType","originalType","parentName"]),m=u(n),o=l,N=m["".concat(i,".").concat(o)]||m[o]||p[o]||r;return n?a.createElement(N,g(g({ref:t},d),{},{components:n})):a.createElement(N,g({ref:t},d))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,g=new Array(r);g[0]=o;var y={};for(var i in t)hasOwnProperty.call(t,i)&&(y[i]=t[i]);y.originalType=e,y[m]="string"==typeof e?e:l,g[1]=y;for(var u=2;u<r;u++)g[u]=n[u];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}o.displayName="MDXCreateElement"},52690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>g,default:()=>p,frontMatter:()=>r,metadata:()=>y,toc:()=>u});var a=n(58168),l=(n(96540),n(15680));const r={},g="MySQL",y={unversionedId:"connector-v2/sink/Mysql",id:"connector-v2/sink/Mysql",title:"MySQL",description:"JDBC Mysql Sink \u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Mysql.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Mysql",permalink:"/zh-CN/docs/connector-v2/sink/Mysql",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Mysql.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB",permalink:"/zh-CN/docs/connector-v2/sink/MongoDB"},next:{title:"Neo4j",permalink:"/zh-CN/docs/connector-v2/sink/Neo4j"}},i={},u=[{value:"\u652f\u6301\u7684Mysql\u7248\u672c",id:"\u652f\u6301\u7684mysql\u7248\u672c",level:2},{value:"\u5f15\u64ce\u652f\u6301",id:"\u5f15\u64ce\u652f\u6301",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u9700\u8981\u7684\u4f9d\u8d56\u9879",id:"\u9700\u8981\u7684\u4f9d\u8d56\u9879",level:2},{value:"\u5bf9\u4e8e Spark/Flink \u5f15\u64ce",id:"\u5bf9\u4e8e-sparkflink-\u5f15\u64ce",level:3},{value:"\u5bf9\u4e8e SeaTunnel Zeta \u5f15\u64ce",id:"\u5bf9\u4e8e-seatunnel-zeta-\u5f15\u64ce",level:3},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"Sink \u53c2\u6570",id:"sink-\u53c2\u6570",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:3},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u7684\u4f8b\u5b50:",id:"\u7b80\u5355\u7684\u4f8b\u5b50",level:3},{value:"\u751f\u6210Sink SQL",id:"\u751f\u6210sink-sql",level:3},{value:"\u7cbe\u786e\u4e00\u6b21\uff1a",id:"\u7cbe\u786e\u4e00\u6b21",level:3},{value:"CDC\uff08\u53d8\u66f4\u6570\u636e\u6355\u83b7\uff09\u4e8b\u4ef6",id:"cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u4e8b\u4ef6",level:3}],d={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"mysql"},"MySQL"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"JDBC Mysql Sink \u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684mysql\u7248\u672c"},"\u652f\u6301\u7684Mysql\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"5.5/5.6/5.7/8.0/8.1/8.2/8.3/8.4")),(0,l.yg)("h2",{id:"\u5f15\u64ce\u652f\u6301"},"\u5f15\u64ce\u652f\u6301"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u901a\u8fc7jdbc\u5199\u5165\u6570\u636e\u3002\u652f\u6301\u6279\u5904\u7406\u6a21\u5f0f\u548c\u6d41\u6a21\u5f0f\uff0c\u652f\u6301\u5e76\u53d1\u5199\u5165\uff0c\u652f\u6301exactly-once\u7cbe\u786e\u4e00\u6b21\n\u8bed\u4e49\uff08\u4f7f\u7528XA\u4e8b\u52a1\u4fdd\u8bc1\uff09\u3002"),(0,l.yg)("h2",{id:"\u9700\u8981\u7684\u4f9d\u8d56\u9879"},"\u9700\u8981\u7684\u4f9d\u8d56\u9879"),(0,l.yg)("h3",{id:"\u5bf9\u4e8e-sparkflink-\u5f15\u64ce"},"\u5bf9\u4e8e Spark/Flink \u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u786e\u4fdd ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc \u9a71\u52a8\u7a0b\u5e8f jar \u5305")," \u5df2\u653e\u7f6e\u5728\u76ee\u5f55 ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/")," \u4e2d\u3002"))),(0,l.yg)("h3",{id:"\u5bf9\u4e8e-seatunnel-zeta-\u5f15\u64ce"},"\u5bf9\u4e8e SeaTunnel Zeta \u5f15\u64ce"),(0,l.yg)("blockquote",null,(0,l.yg)("ol",{parentName:"blockquote"},(0,l.yg)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u786e\u4fdd ",(0,l.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc \u9a71\u52a8\u7a0b\u5e8f jar \u5305")," \u5df2\u653e\u7f6e\u5728\u76ee\u5f55 ",(0,l.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/")," \u4e2d\u3002"))),(0,l.yg)("h2",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"cdc"))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528\u201cXa\u4e8b\u52a1\u201d\u6765\u786e\u4fdd\u201c\u7cbe\u786e\u4e00\u6b21\u201d\u3002\u56e0\u6b64\uff0c\u6570\u636e\u5e93\u53ea\u652f\u6301\u201c\u7cbe\u786e\u4e00\u6b21\u201d\uff0c\u5373\n\u652f\u6301\u201cXa\u4e8b\u52a1\u201d\u3002\u60a8\u53ef\u4ee5\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true "),"\u6765\u542f\u7528\u5b83\u3002")),(0,l.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,l.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7684\u7248\u672c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8\u5668"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7f51\u5740"),(0,l.yg)("th",{parentName:"tr",align:null},"Maven\u4e0b\u8f7d\u94fe\u63a5"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Mysql"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u7684\u4f9d\u8d56\u7248\u672c\u5177\u6709\u4e0d\u540c\u7684\u9a71\u52a8\u7a0b\u5e8f\u7c7b\u3002"),(0,l.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,l.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306:3306/test"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"\u4e0b\u8f7d"))))),(0,l.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Mysql \u6570\u636e\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIT(1)",(0,l.yg)("br",null),"INT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,l.yg)("br",null),"TINYINT UNSIGNED",(0,l.yg)("br",null),"SMALLINT",(0,l.yg)("br",null),"SMALLINT UNSIGNED",(0,l.yg)("br",null),"MEDIUMINT",(0,l.yg)("br",null),"MEDIUMINT UNSIGNED",(0,l.yg)("br",null),"INT",(0,l.yg)("br",null),"INTEGER",(0,l.yg)("br",null),"YEAR"),(0,l.yg)("td",{parentName:"tr",align:null},"INT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,l.yg)("br",null),"INTEGER UNSIGNED",(0,l.yg)("br",null),"BIGINT"),(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(\u83b7\u53d6\u6307\u5b9a\u5217\u7684\u5217\u5927\u5c0f<38)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(\u83b7\u53d6\u6307\u5b9a\u5217\u7684\u5217\u5927\u5c0f>38)"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DECIMAL((DECIMAL((\u83b7\u53d6\u6307\u5b9a\u5217\u7684\u5217\u5927\u5c0f)+1,",(0,l.yg)("br",null),"(\u83b7\u53d6\u6307\u5b9a\u5217\u7684\u5c0f\u6570\u70b9\u53f3\u4fa7\u7684\u4f4d\u6570)))")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,l.yg)("br",null),"FLOAT UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.yg)("br",null),"DOUBLE UNSIGNED"),(0,l.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"CHAR",(0,l.yg)("br",null),"VARCHAR",(0,l.yg)("br",null),"TINYTEXT",(0,l.yg)("br",null),"MEDIUMTEXT",(0,l.yg)("br",null),"TEXT",(0,l.yg)("br",null),"LONGTEXT",(0,l.yg)("br",null),"JSON"),(0,l.yg)("td",{parentName:"tr",align:null},"STRING")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATE"),(0,l.yg)("td",{parentName:"tr",align:null},"DATE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TIME"),(0,l.yg)("td",{parentName:"tr",align:null},"TIME")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,l.yg)("br",null),"TIMESTAMP"),(0,l.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TINYBLOB",(0,l.yg)("br",null),"MEDIUMBLOB",(0,l.yg)("br",null),"BLOB",(0,l.yg)("br",null),"LONGBLOB",(0,l.yg)("br",null),"BINARY",(0,l.yg)("br",null),"VARBINAR",(0,l.yg)("br",null),"BIT(n)"),(0,l.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"GEOMETRY",(0,l.yg)("br",null),"UNKNOWN"),(0,l.yg)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.yg)("h2",{id:"sink-\u53c2\u6570"},"Sink \u53c2\u6570"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"url"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"JDBC \u8fde\u63a5\u7684 URL\u3002\u53c2\u89c1\u793a\u4f8b: ",(0,l.yg)("br",null),(0,l.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:3306:3306/test"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"driver"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8fde\u63a5\u8fdc\u7a0b\u6570\u636e\u6e90\u7684 JDBC \u7c7b\u540d\uff0c",(0,l.yg)("br",null),"\u5982\u679c\u4f7f\u7528 MySQL\uff0c\u503c\u4e3a ",(0,l.yg)("inlineCode",{parentName:"td"},"com.mysql.cj.jdbc.Driver"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5b9e\u4f8b\u7528\u6237\u540d\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u5b9e\u4f8b\u5bc6\u7801\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"query"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64sql\u5c06\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002\u4f8b\u5982\uff1a ",(0,l.yg)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,l.yg)("inlineCode",{parentName:"td"},"query")," \u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"database"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6b64 ",(0,l.yg)("inlineCode",{parentName:"td"},"database")," \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"table-name")," \u81ea\u52a8\u751f\u6210sql\u5e76\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002",(0,l.yg)("br",null),"\u6b64\u9009\u9879\u4e0e",(0,l.yg)("inlineCode",{parentName:"td"},"query")," \u4e92\u65a5\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u6570\u636e\u5e93\u548c\u6b64\u8868\u540d\u81ea\u52a8\u751f\u6210sql\u5e76\u63a5\u6536\u4e0a\u6e38\u8f93\u5165\u6570\u636e\u5199\u5165\u6570\u636e\u5e93\u3002",(0,l.yg)("br",null),"\u6b64\u9009\u9879\u4e0e",(0,l.yg)("inlineCode",{parentName:"td"},"query")," \u4e92\u65a5\uff0c\u5177\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.yg)("td",{parentName:"tr",align:null},"Array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6b64\u9009\u9879\u7528\u4e8e\u652f\u6301\u4ee5\u4e0b\u64cd\u4f5c\uff0c\u4f8b\u5982 ",(0,l.yg)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.yg)("inlineCode",{parentName:"td"},"delete"),", \u548c ",(0,l.yg)("inlineCode",{parentName:"td"},"update")," \u5f53\u81ea\u52a8\u751f\u6210sql.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9009\u62e9\u4f7f\u7528INSERT sql\u3001UPDATE sql\u6839\u636e\u67e5\u8be2\u4e3b\u952e\u662f\u5426\u5b58\u5728\u6765\u5904\u7406\u66f4\u65b0\u4e8b\u4ef6\uff08INSERT\u3001UPDATE_AFTER\uff09\u3002\u6b64\u914d\u7f6e\u4ec5\u5728\u6570\u636e\u5e93\u4e0d\u652f\u6301\u5347\u7ea7\u8bed\u6cd5\u65f6\u4f7f\u7528",(0,l.yg)("strong",{parentName:"td"},"\u6ce8"),"\uff1a\u6b64\u65b9\u6cd5\u6027\u80fd\u4f4e")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u7528\u4e8e\u9a8c\u8bc1\u8fde\u63a5\u7684\u6570\u636e\u5e93\u64cd\u4f5c\u5b8c\u6210\u7684\u65f6\u95f4\uff08\u79d2\uff09\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_retries"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u5931\u8d25\u7684\u91cd\u8bd5\u6b21\u6570\uff08executeBatch\uff09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1000"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5bf9\u4e8e\u6279\u91cf\u5199\u5165\uff0c\u5f53\u7f13\u51b2\u8bb0\u5f55\u7684\u6570\u91cf\u8fbe\u5230\u201cbatch_size\u201d\u7684\u6570\u91cf\u6216\u65f6\u95f4\u8fbe\u5230\u201ccheckpoint.interval\u201d",(0,l.yg)("br",null),"\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u5237\u65b0\u5230\u6570\u636e\u5e93\u4e2d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u542f\u7528\u7cbe\u786e\u4e00\u6b21\u8bed\u4e49\uff0c\u8fd9\u5c06\u4f7f\u7528Xa\u4e8b\u52a1\u3002\u5982\u679c\u542f\u7528\uff0c\u5219\u9700\u8981",(0,l.yg)("br",null),"\u8bbe\u7f6e",(0,l.yg)("inlineCode",{parentName:"td"},"xa_data_source_class_name"),"\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6839\u636e\u8981\u5199\u5165\u7684\u6570\u636e\u5e93\u8868\u751f\u6210sql\u8bed\u53e5")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93Driver\u7684xa\u6570\u636e\u6e90\u7c7b\u540d\uff0c\u4f8b\u5982mysql\u662f`com.mysql.cj.jdbc\u3002MysqlXADataSource\uff0c\u548c",(0,l.yg)("br",null),"\u8bf7\u53c2\u9605\u9644\u5f55\u4e86\u89e3\u5176\u4ed6\u6570\u636e\u6e90")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u63d0\u4ea4\u5931\u8d25\u7684\u91cd\u8bd5\u6b21\u6570")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-1"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4e8b\u52a1\u6253\u5f00\u540e\u7684\u8d85\u65f6\uff0c\u9ed8\u8ba4\u503c\u4e3a-1\uff08\u6c38\u4e0d\u8d85\u65f6\uff09\u3002\u8bf7\u6ce8\u610f\uff0c\u8bbe\u7f6e\u8d85\u65f6\u53ef\u80fd\u4f1a\u5f71\u54cd\uff1cbr/\uff1e\u7cbe\u786e\u4e00\u6b21\u8bed\u4e49")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u542f\u7528\u81ea\u52a8\u4e8b\u52a1\u63d0\u4ea4")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_ide"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u786e\u5b9a\u4ece\u6e90\u540c\u6b65\u5230\u6c47\u65f6\u662f\u5426\u9700\u8981\u8f6c\u6362\u5b57\u6bb5",(0,l.yg)("inlineCode",{parentName:"td"},"ORIGINAL\u8868\u793a\u4e0d\u9700\u8981\u8f6c\u6362"),"\u5927\u5199",(0,l.yg)("inlineCode",{parentName:"td"},"\u8868\u793a\u8f6c\u6362\u4e3a\u5927\u5199"),"LOWERCASE\u8868\u793a\u8f6c\u6362\u4e3a\u5c0f\u5199\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"properties"),(0,l.yg)("td",{parentName:"tr",align:null},"Map"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5176\u4ed6\u8fde\u63a5\u914d\u7f6e\u53c2\u6570\uff0c\u5f53\u5c5e\u6027\u548cURL\u5177\u6709\u76f8\u540c\u7684\u53c2\u6570\u65f6\uff0c\u4f18\u5148\u7ea7\u7531\u9a71\u52a8\u7a0b\u5e8f\u7684\u7279\u5b9a\u5b9e\u73b0\u51b3\u5b9a\u3002\u4f8b\u5982\uff0c\u5728MySQL\u4e2d\uff0c\u5c5e\u6027\u4f18\u5148\u4e8eURL\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003 ",(0,l.yg)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink Common Options")," \u8be6\u89c1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u5bf9\u76ee\u6807\u4fa7\u7684\u73b0\u6709\u8868\u9762\u7ed3\u6784\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5728\u542f\u52a8\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\uff0c\u5bf9\u76ee\u6807\u7aef\u7684\u73b0\u6709\u6570\u636e\u9009\u62e9\u4e0d\u540c\u7684\u5904\u7406\u65b9\u6848\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,l.yg)("td",{parentName:"tr",align:null},"String"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53data_save_mode\u9009\u62e9CUSTOM_PROCESSING\u65f6\uff0c\u60a8\u5e94\u8be5\u586b\u5199CUSTOM_SQL\u53c2\u6570\u3002\u6b64\u53c2\u6570\u901a\u5e38\u586b\u5145\u53ef\u4ee5\u6267\u884c\u7684SQL\u3002SQL\u5c06\u5728\u540c\u6b65\u4efb\u52a1\u4e4b\u524d\u6267\u884c\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_upsert"),(0,l.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"\u901a\u8fc7primary_keys\u5b58\u5728\u542f\u7528upstart\uff0c\u5982\u679c\u4efb\u52a1\u53ea\u6709\u201c\u63d2\u5165\u201d\uff0c\u5c06\u6b64\u53c2\u6570\u8bbe\u7f6e\u4e3a\u201cfalse\u201d\u53ef\u4ee5\u52a0\u5feb\u6570\u636e\u5bfc\u5165")))),(0,l.yg)("h3",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u672a\u8bbe\u7f6epartition_column\uff0c\u5b83\u5c06\u4ee5\u5355\u5e76\u53d1\u8fd0\u884c\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86partition_coolumn\uff0c\u5b83\u5c06\u6839\u636e\u4efb\u52a1\u7684\u5e76\u53d1\u6027\u5e76\u884c\u6267\u884c\u3002")),(0,l.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,l.yg)("h3",{id:"\u7b80\u5355\u7684\u4f8b\u5b50"},"\u7b80\u5355\u7684\u4f8b\u5b50:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2aSeaTunnel\u540c\u6b65\u4efb\u52a1\uff0c\u8be5\u4efb\u52a1\u901a\u8fc7FakeSource\u81ea\u52a8\u751f\u6210\u6570\u636e\u5e76\u5c06\u5176\u53d1\u9001\u5230JDBC Sink\u3002FakeSource\u603b\u5171\u751f\u621016\u884c\u6570\u636e\uff08row.num=16\uff09\uff0c\u6bcf\u884c\u6709\u4e24\u4e2a\u5b57\u6bb5\uff0cname\uff08\u5b57\u7b26\u4e32\u7c7b\u578b\uff09\u548cage\uff08int\u7c7b\u578b\uff09\u3002\u6700\u7ec8\u7684\u76ee\u6807\u8868\u662ftest_table\uff0c\u8868\u4e2d\u4e5f\u5c06\u670916\u884c\u6570\u636e\u3002\u5728\u8fd0\u884c\u6b64\u4f5c\u4e1a\u4e4b\u524d\uff0c\u60a8\u9700\u8981\u5728mysql\u4e2d\u521b\u5efa\u6570\u636e\u5e93\u6d4b\u8bd5\u8868test_table\u3002\u5982\u679c\u60a8\u5c1a\u672a\u5b89\u88c5\u548c\u90e8\u7f72SeaTunnel\uff0c\u5219\u9700\u8981\u6309\u7167","[\u5b89\u88c5SeaTunnel]","\uff08../../start-v2/local/deployment.md\uff09\u4e2d\u7684\u8bf4\u660e\u5b89\u88c5\u548c\u90e8\u7f72SeaTunnel\u3002\u7136\u540e\u6309\u7167","[\u5feb\u901f\u542f\u52a8SeaTunnel\u5f15\u64ce]","\uff08../../Start-v2/locale/Quick-Start SeaTunnel Engine.md\uff09\u4e2d\u7684\u8bf4\u660e\u8fd0\u884c\u6b64\u4f5c\u4e1a\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'# \u5b9a\u4e49\u8fd0\u884c\u65f6\u73af\u5883\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    plugin_output = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n    #\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u5b8c\u6574\u7684\u6e90\u63d2\u4ef6\u5217\u8868\uff0c\n    #\u8bf7\u524d\u5f80https://seatunnel.apache.org/docs/connector-v2/source\n}\n\ntransform {\n    #\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u8f6c\u6362\u63d2\u4ef6\u7684\u5b8c\u6574\u5217\u8868\uff0c\n    #\u8bf7\u524d\u5f80https://seatunnel.apache.org/docs/transform-v2\n}\n\nsink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n        }\n    #\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u914d\u7f6eseatunnel\u7684\u4fe1\u606f\uff0c\u5e76\u67e5\u770b\u5b8c\u6574\u7684sink\u63d2\u4ef6\u5217\u8868\uff0c\n    #\u8bf7\u524d\u5f80https://seatunnel.apache.org/docs/connector-v2/sink\n}\n')),(0,l.yg)("h3",{id:"\u751f\u6210sink-sql"},"\u751f\u6210Sink SQL"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6b64\u793a\u4f8b\u4e0d\u9700\u8981\u7f16\u5199\u590d\u6742\u7684sql\u8bed\u53e5\uff0c\u60a8\u53ef\u4ee5\u914d\u7f6e\u6570\u636e\u5e93\u540d\u79f0\u8868\u540d\u4ee5\u81ea\u52a8\u4e3a\u60a8\u751f\u6210add\u8bed\u53e5")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        # Automatically generate sql statements based on database table names\n        generate_sink_sql = true\n        database = test\n        table = test_table\n    }\n}\n')),(0,l.yg)("h3",{id:"\u7cbe\u786e\u4e00\u6b21"},"\u7cbe\u786e\u4e00\u6b21\uff1a"),(0,l.yg)("p",null,"\u4e3a\u4e86\u51c6\u786e\u7684\u4e66\u5199\u573a\u666f\uff0c\u6211\u4eec\u4fdd\u8bc1\u7cbe\u786e\u4e00\u6b21"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n        driver = "com.mysql.cj.jdbc.Driver"\n    \n        max_retries = 0\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n    \n        is_exactly_once = "true"\n    \n        xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n    }\n}\n')),(0,l.yg)("h3",{id:"cdc\u53d8\u66f4\u6570\u636e\u6355\u83b7\u4e8b\u4ef6"},"CDC\uff08\u53d8\u66f4\u6570\u636e\u6355\u83b7\uff09\u4e8b\u4ef6"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u4e5f\u652f\u6301CDC\u53d8\u66f4\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u914d\u7f6e\u6570\u636e\u5e93\u3001\u8868\u548c\u4e3b\u952e\u3002")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&rewriteBatchedStatements=true"\n        driver = "com.mysql.cj.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        \n        generate_sink_sql = true\n        # You need to configure both database and table\n        database = test\n        table = sink_table\n        primary_keys = ["id","name"]\n        field_ide = UPPERCASE\n        schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n        data_save_mode="APPEND_DATA"\n    }\n}\n')))}p.isMDXComponent=!0}}]);