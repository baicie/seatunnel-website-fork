"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[74692],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,y=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="Redshift",o={unversionedId:"connector-v2/source/Redshift",id:"version-2.3.9/connector-v2/source/Redshift",title:"Redshift",description:"JDBC Redshift Source Connector",source:"@site/versioned_docs/version-2.3.9/connector-v2/source/Redshift.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Redshift",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Redshift",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/source/Redshift.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Redis",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Redis"},next:{title:"RocketMQ",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/RocketMQ"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Support those engines",id:"support-those-engines",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key features",id:"key-features",level:2},{value:"Supported DataSource list",id:"supported-datasource-list",level:2},{value:"Database dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Example",id:"example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Multiple table read:",id:"multiple-table-read",level:3}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"redshift"},"Redshift"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC Redshift Source Connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("h2",{id:"support-those-engines"},"Support those engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeatunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"supports query SQL and can achieve projection effect.")),(0,r.yg)("h2",{id:"supported-datasource-list"},"Supported DataSource list"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"redshift"),(0,r.yg)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,r.yg)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/database"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"Download"))))),(0,r.yg)("h2",{id:"database-dependency"},"Database dependency"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,r.yg)("br",null),"\nFor example Redshift datasource: cp RedshiftJDBC42-xxx.jar $SEATUNNEL_HOME/plugins/jdbc/lib/")),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Redshift Data type"),(0,r.yg)("th",{parentName:"tr",align:null},"Seatunnel Data type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT",(0,r.yg)("br",null),"INT2"),(0,r.yg)("td",{parentName:"tr",align:null},"SHORT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"INT4"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT",(0,r.yg)("br",null),"INT8",(0,r.yg)("br",null),"OID"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL",(0,r.yg)("br",null),"NUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,r.yg)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"REAL",(0,r.yg)("br",null),"FLOAT4"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE_PRECISION",(0,r.yg)("br",null),"FLOAT8",(0,r.yg)("br",null),"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN",(0,r.yg)("br",null),"BOOL"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"CHARACTER",(0,r.yg)("br",null),"NCHAR",(0,r.yg)("br",null),"BPCHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"CHARACTER_VARYING",(0,r.yg)("br",null),"NVARCHAR",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"SUPER"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VARBYTE",(0,r.yg)("br",null),"BINARY_VARYING"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME",(0,r.yg)("br",null),"TIME_WITH_TIME_ZONE",(0,r.yg)("br",null),"TIMETZ"),(0,r.yg)("td",{parentName:"tr",align:null},"LOCALTIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,r.yg)("br",null),"TIMESTAMP_WITH_OUT_TIME_ZONE",(0,r.yg)("br",null),"TIMESTAMPTZ"),(0,r.yg)("td",{parentName:"tr",align:null},"LOCALDATETIME")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("h3",{id:"simple"},"Simple:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example queries type_bin 'table' 16 data in your test \"database\" in single parallel and queries all of its fields. You can also specify which fields to query for final output to the console.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource{\n    Jdbc {\n        url = "jdbc:redshift://localhost:5439/dev"\n        driver = "com.amazon.redshift.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        \n        table_path = "public.table2"\n        # Use query filetr rows & columns\n        query = "select id, name from public.table2 where id > 100"\n        \n        #split.size = 8096\n        #split.even-distribution.factor.upper-bound = 100\n        #split.even-distribution.factor.lower-bound = 0.05\n        #split.sample-sharding.threshold = 1000\n        #split.inverse-sampling.rate = 1000\n    }\n}\n\nsink {\n    Console {}\n}\n')),(0,r.yg)("h3",{id:"multiple-table-read"},"Multiple table read:"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("em",{parentName:"strong"},"Configuring ",(0,r.yg)("inlineCode",{parentName:"em"},"table_list")," will turn on auto split, you can configure `split."),"` to adjust the split strategy*")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n  parallelism = 2\n}\nsource {\n  Jdbc {\n    url = "jdbc:redshift://localhost:5439/dev"\n    driver = "com.amazon.redshift.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    table_list = [\n      {\n        table_path = "public.table1"\n      },\n      {\n        table_path = "public.table2"\n        # Use query filetr rows & columns\n        query = "select id, name from public.table2 where id > 100"\n      }\n    ]\n    #split.size = 8096\n    #split.even-distribution.factor.upper-bound = 100\n    #split.even-distribution.factor.lower-bound = 0.05\n    #split.sample-sharding.threshold = 1000\n    #split.inverse-sampling.rate = 1000\n  }\n}\n\nsink {\n  Console {}\n}\n')))}d.isMDXComponent=!0}}]);