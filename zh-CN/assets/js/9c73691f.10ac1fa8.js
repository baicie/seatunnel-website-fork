"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[21819],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=p(n),u=r,s=y["".concat(c,".").concat(u)]||y[u]||g[u]||l;return n?a.createElement(s,i(i({ref:t},d),{},{components:n})):a.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Redshift",o={unversionedId:"connector-v2/sink/Redshift",id:"connector-v2/sink/Redshift",title:"Redshift",description:"JDBC Redshift \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Redshift.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Redshift",permalink:"/zh-CN/docs/connector-v2/sink/Redshift",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/connector-v2/sink/Redis"},next:{title:"RocketMQ",permalink:"/zh-CN/docs/connector-v2/sink/RocketMQ"}},c={},p=[{value:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868",level:2},{value:"\u6570\u636e\u5e93\u76f8\u5173\u6027",id:"\u6570\u636e\u5e93\u76f8\u5173\u6027",level:2},{value:"\u9002\u7528\u4e8e Spark/Flink \u5f15\u64ce",id:"\u9002\u7528\u4e8e-sparkflink-\u5f15\u64ce",level:3},{value:"\u9002\u7528\u4e8e SeaTunnel Zeta \u5f15\u64ce",id:"\u9002\u7528\u4e8e-seatunnel-zeta-\u5f15\u64ce",level:3},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"CDC(\u66f4\u6539\u6570\u636e\u6355\u83b7) \u4e8b\u4ef6",id:"cdc\u66f4\u6539\u6570\u636e\u6355\u83b7-\u4e8b\u4ef6",level:3}],d={toc:p},y="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"redshift"},"Redshift"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC Redshift \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"},"\u652f\u6301\u4ee5\u4e0b\u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeatunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u6279\u5904\u7406")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u66f4\u6539\u6570\u636e\u6355\u83b7"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions")," \u786e\u4fdd ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),". \u56e0\u6b64\uff0c\u6570\u636e\u5e93\u53ea\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"exactly-once"),"\n\u5373\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"Xa transactions"),". \u60a8\u53ef\u4ee5\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"is_exactly_once=true")," \u6765\u542f\u7528\u5b83.")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u901a\u8fc7jdbc\u5199\u5165\u6570\u636e. \u652f\u6301\u6279\u5904\u7406\u6a21\u5f0f\u548c\u6d41\u6a21\u5f0f\uff0c\u652f\u6301\u5e76\u53d1\u5199\u5165\uff0c\u53ea\u652f\u6301\u4e00\u6b21\u8bed\u4e49 (\u4f7f\u7528 XA transaction guarantee)."),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u5217\u8868"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u652f\u6301\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9a71\u52a8"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"redshift"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u540c\u7684\u4f9d\u8d56\u7248\u672c\u6709\u4e0d\u540c\u7684\u9a71\u52a8\u7a0b\u5e8f\u7c7b."),(0,r.yg)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/database"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"\u4e0b\u8f7d"))))),(0,r.yg)("h2",{id:"\u6570\u636e\u5e93\u76f8\u5173\u6027"},"\u6570\u636e\u5e93\u76f8\u5173\u6027"),(0,r.yg)("h3",{id:"\u9002\u7528\u4e8e-sparkflink-\u5f15\u64ce"},"\u9002\u7528\u4e8e Spark/Flink \u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u786e\u4fdd ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"jdbc driver jar package")," \u5df2\u653e\u7f6e\u5728\u76ee\u5f55 ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"\u9002\u7528\u4e8e-seatunnel-zeta-\u5f15\u64ce"},"\u9002\u7528\u4e8e SeaTunnel Zeta \u5f15\u64ce"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u60a8\u9700\u8981\u786e\u4fdd ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"jdbc driver jar package")," \u5df2\u653e\u7f6e\u5728\u76ee\u5f55 ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Redshift \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT",(0,r.yg)("br",null)," SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"REAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE PRECISION")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING(<=65535)"),(0,r.yg)("td",{parentName:"tr",align:null},"CHARACTER VARYING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING(>65535)"),(0,r.yg)("td",{parentName:"tr",align:null},"SUPER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"BINARY VARYING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP",(0,r.yg)("br",null)," ARRAY",(0,r.yg)("br",null)," ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"SUPER")))),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:redshift://localhost:5439/mydatabase"\n        driver = "com.amazon.redshift.jdbc.Driver"\n        user = "myUser"\n        password = "myPassword"\n        \n        generate_sink_sql = true\n        schema = "public"\n        table = "sink_table"\n    }\n}\n')),(0,r.yg)("h3",{id:"cdc\u66f4\u6539\u6570\u636e\u6355\u83b7-\u4e8b\u4ef6"},"CDC(\u66f4\u6539\u6570\u636e\u6355\u83b7) \u4e8b\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6211\u4eec\u4e5f\u652f\u6301CDC\u66f4\u6539\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u914d\u7f6e\u6570\u636e\u5e93\u3001\u8868\u548c\u4e3b\u952e.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:redshift://localhost:5439/mydatabase"\n        driver = "com.amazon.redshift.jdbc.Driver"\n        user = "myUser"\n        password = "mypassword"\n        \n        generate_sink_sql = true\n        schema = "public"\n        table = "sink_table"\n        \n        # config update/delete primary keys\n        primary_keys = ["id","name"]\n    }\n}\n')))}g.isMDXComponent=!0}}]);