"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[66044],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),s=c(a),m=r,d=s["".concat(p,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(d,o(o({ref:t},g),{},{components:a})):n.createElement(d,o({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(96540),a(15680));const l={},o="JDBC",i={unversionedId:"connector-v2/source/Jdbc",id:"version-2.3.0/connector-v2/source/Jdbc",title:"JDBC",description:"JDBC source connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/source/Jdbc.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Jdbc",permalink:"/docs/2.3.0/connector-v2/source/Jdbc",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/source/Jdbc.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"IoTDB",permalink:"/docs/2.3.0/connector-v2/source/IoTDB"},next:{title:"Jira",permalink:"/docs/2.3.0/connector-v2/source/Jira"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"connection_check_timeout_sec int",id:"connection_check_timeout_sec-int",level:3},{value:"partition_column string",id:"partition_column-string",level:3},{value:"partition_upper_bound long",id:"partition_upper_bound-long",level:3},{value:"partition_lower_bound long",id:"partition_lower_bound-long",level:3},{value:"partition_num int",id:"partition_num-int",level:3},{value:"fetch_size int",id:"fetch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"tips",id:"tips",level:2},{value:"appendix",id:"appendix",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],g={toc:c},s="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"jdbc"},"JDBC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDBC source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read external data source data through JDBC."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Warn: for license compliance, you have to provide database driver yourself, copy to ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/plugins/jdbc/lib/")," directory in order to make them work."),(0,r.yg)("p",{parentName:"admonition"},"e.g. If you use MySQL, should download and copy ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql-connector-java-xxx.jar")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/plugins/jdbc/lib/"))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"schema projection"))),(0,r.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"driver"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_column"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_upper_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_lower_bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_num"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"job parallelism")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fetch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,r.yg)("p",null,"The jdbc class name used to connect to the remote data source, if you use MySQL the value is ",(0,r.yg)("inlineCode",{parentName:"p"},"com.mysql.cj.jdbc.Driver"),"."),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"userName"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,"password"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"The URL of the JDBC connection. Refer to a case: jdbc:postgresql://localhost/test"),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Query statement"),(0,r.yg)("h3",{id:"connection_check_timeout_sec-int"},"connection_check_timeout_sec ","[int]"),(0,r.yg)("p",null,"The time in seconds to wait for the database operation used to validate the connection to complete."),(0,r.yg)("h3",{id:"partition_column-string"},"partition_column ","[string]"),(0,r.yg)("p",null,"The column name for parallelism's partition, only support numeric type."),(0,r.yg)("h3",{id:"partition_upper_bound-long"},"partition_upper_bound ","[long]"),(0,r.yg)("p",null,"The partition_column max value for scan, if not set SeaTunnel will query database get max value."),(0,r.yg)("h3",{id:"partition_lower_bound-long"},"partition_lower_bound ","[long]"),(0,r.yg)("p",null,"The partition_column min value for scan, if not set SeaTunnel will query database get min value."),(0,r.yg)("h3",{id:"partition_num-int"},"partition_num ","[int]"),(0,r.yg)("p",null,"The number of partition count, only support positive integer. default value is job parallelism"),(0,r.yg)("h3",{id:"fetch_size-int"},"fetch_size ","[int]"),(0,r.yg)("p",null,"For queries that return a large number of objects, you can configure the row fetch size used in the query to\nimprove performance by reducing the number database hits required to satisfy the selection criteria. Zero means use jdbc default value."),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.0/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("p",null,"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed\nin parallel according to the concurrency of tasks."),(0,r.yg)("h2",{id:"appendix"},"appendix"),(0,r.yg)("p",null,"there are some reference value for params above."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"driver"),(0,r.yg)("th",{parentName:"tr",align:null},"url"),(0,r.yg)("th",{parentName:"tr",align:null},"maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mysql"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"postgresql"),(0,r.yg)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/postgres"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"https://mvnrepository.com/artifact/org.postgresql/postgresql"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dm"),(0,r.yg)("td",{parentName:"tr",align:null},"dm.jdbc.driver.DmDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:dm://localhost:5236"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"},"https://mvnrepository.com/artifact/com.dameng/DmJdbcDriver18"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phoenix"),(0,r.yg)("td",{parentName:"tr",align:null},"org.apache.phoenix.queryserver.client.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"},"https://mvnrepository.com/artifact/com.aliyun.phoenix/ali-phoenix-shaded-thin-client"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sqlserver"),(0,r.yg)("td",{parentName:"tr",align:null},"com.microsoft.sqlserver.jdbc.SQLServerDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sqlserver://localhost:1433"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"},"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"oracle"),(0,r.yg)("td",{parentName:"tr",align:null},"oracle.jdbc.OracleDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:oracle:thin:@localhost:1521/xepdb1"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"},"https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sqlite"),(0,r.yg)("td",{parentName:"tr",align:null},"org.sqlite.JDBC"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:sqlite:test.db"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"},"https://mvnrepository.com/artifact/org.xerial/sqlite-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"gbase8a"),(0,r.yg)("td",{parentName:"tr",align:null},"com.gbase.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:gbase://e2e_gbase8aDb:5258/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"},"https://www.gbase8.cn/wp-content/uploads/2020/10/gbase-connector-java-8.3.81.53-build55.5.7-bin_min_mix.jar"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"starrocks"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db2"),(0,r.yg)("td",{parentName:"tr",align:null},"com.ibm.db2.jcc.DB2Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:db2://localhost:50000/testdb"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"},"https://mvnrepository.com/artifact/com.ibm.db2.jcc/db2jcc/db2jcc4"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tablestore"),(0,r.yg)("td",{parentName:"tr",align:null},"com.alicloud.openservices.tablestore.jdbc.OTSDriver"),(0,r.yg)("td",{parentName:"tr",align:null},'"jdbc:ots:http s://myinstance.cn-hangzhou.ots.aliyuncs.com/myinstance"'),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"},"https://mvnrepository.com/artifact/com.aliyun.openservices/tablestore-jdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris"),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"teradata"),(0,r.yg)("td",{parentName:"tr",align:null},"com.teradata.jdbc.TeraDriver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:teradata://localhost/DBS_PORT=1025,DATABASE=test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"},"https://mvnrepository.com/artifact/com.teradata.jdbc/terajdbc"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Redshift"),(0,r.yg)("td",{parentName:"tr",align:null},"com.amazon.redshift.jdbc42.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:redshift://localhost:5439/testdb"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"))))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n    }\n')),(0,r.yg)("p",null,"parallel:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'    Jdbc {\n        url = "jdbc:mysql://localhost/test?serverTimezone=GMT%2b8"\n        driver = "com.mysql.cj.jdbc.Driver"\n        connection_check_timeout_sec = 100\n        user = "root"\n        password = "123456"\n        query = "select * from type_bin"\n        partition_column = "id"\n        partition_num = 10\n    }\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ClickHouse Source Connector")),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Phoenix JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2499"},"2499"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support SQL Server JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2646"},"2646"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Oracle JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2550"},"2550"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support StarRocks JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3060"},"3060"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support GBase8a JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3026"},"3026"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support DB2 JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2410"},"2410"),")")),(0,r.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"[BugFix]"," Fix jdbc split bug (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3220"},"3220"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Sqlite JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3089"},"3089"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Tablestore Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3309"},"3309"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Teradata JDBC\u3000Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3362"},"3362"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support JDBC Fetch Size Config (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3478"},"3478"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Doris JDBC Source (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3586"},"3586"),")"),(0,r.yg)("li",{parentName:"ul"},"[Feature]"," Support Redshift JDBC Sink(",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3615"},"#3615"),")"),(0,r.yg)("li",{parentName:"ul"},"[BugFix]"," Fix jdbc connection reset bug (",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3670"},"3670"),")")))}u.isMDXComponent=!0}}]);