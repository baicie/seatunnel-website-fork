"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[93082],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,u=d["".concat(g,".").concat(y)]||d[y]||m[y]||l;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},30284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="MySQL CDC",o={unversionedId:"connector-v2/source/MySQL-CDC",id:"connector-v2/source/MySQL-CDC",title:"MySQL CDC",description:"MySQL CDC source connector",source:"@site/docs/connector-v2/source/MySQL-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/MySQL-CDC",permalink:"/zh-CN/docs/connector-v2/source/MySQL-CDC",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/MySQL-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"My Hours",permalink:"/zh-CN/docs/connector-v2/source/MyHours"},next:{title:"MySQL",permalink:"/zh-CN/docs/connector-v2/source/Mysql"}},g={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"For Flink Engine",id:"for-flink-engine",level:4},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:4},{value:"Creating MySQL user",id:"creating-mysql-user",level:3},{value:"Enabling the MySQL Binlog",id:"enabling-the-mysql-binlog",level:3},{value:"Notes",id:"notes",level:3},{value:"Setting up MySQL session timeouts",id:"setting-up-mysql-session-timeouts",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Support debezium-compatible format send to kafka",id:"support-debezium-compatible-format-send-to-kafka",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3},{value:"Support schema evolution",id:"support-schema-evolution",level:3},{value:"Support table-pattern for multi-table reading",id:"support-table-pattern-for-multi-table-reading",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"mysql-cdc"},"MySQL CDC"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"MySQL CDC source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,r.yg)("br",null),"\nFlink ",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"The MySQL CDC connector allows for reading snapshot data and incremental data from MySQL database. This document\ndescribes how to set up the MySQL CDC connector to run SQL queries against MySQL databases."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Driver"),(0,r.yg)("th",{parentName:"tr",align:null},"Url"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("li",null," ",(0,r.yg)("a",{parentName:"td",href:"https://dev.mysql.com/doc"},"MySQL"),": 5.5, 5.6, 5.7, 8.0.x "),(0,r.yg)("li",null," ",(0,r.yg)("a",{parentName:"td",href:"https://www.aliyun.com/product/rds/mysql"},"RDS MySQL"),": 5.6, 5.7, 8.0.x ")),(0,r.yg)("td",{parentName:"tr",align:null},"com.mysql.cj.jdbc.Driver"),(0,r.yg)("td",{parentName:"tr",align:null},"jdbc:mysql://localhost:3306/test"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java/8.0.28"},"https://mvnrepository.com/artifact/mysql/mysql-connector-java/8.0.28"))))),(0,r.yg)("h2",{id:"using-dependency"},"Using Dependency"),(0,r.yg)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,r.yg)("h4",{id:"for-flink-engine"},"For Flink Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,r.yg)("h4",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,r.yg)("blockquote",null,(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"You need to ensure that the ",(0,r.yg)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/mysql/mysql-connector-java"},"jdbc driver jar package")," has been placed in directory ",(0,r.yg)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,r.yg)("h3",{id:"creating-mysql-user"},"Creating MySQL user"),(0,r.yg)("p",null,"You have to define a MySQL user with appropriate permissions on all databases that the Debezium MySQL connector monitors."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create the MySQL user:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Grant the required permissions to the user:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> GRANT SELECT, RELOAD, SHOW DATABASES, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'user' IDENTIFIED BY 'password';\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Finalize the user\u2019s permissions:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> FLUSH PRIVILEGES;\n")),(0,r.yg)("h3",{id:"enabling-the-mysql-binlog"},"Enabling the MySQL Binlog"),(0,r.yg)("p",null,"You must enable binary logging for MySQL replication. The binary logs record transaction updates for replication tools to propagate changes."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Check whether the ",(0,r.yg)("inlineCode",{parentName:"li"},"log-bin")," option is already on:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency');\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| binlog_row_image         | FULL           |\n| enforce_gtid_consistency | ON             |\n| gtid_mode                | ON             |\n| log_bin                  | ON             |\n+--------------------------+----------------+\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"If the value of ",(0,r.yg)("inlineCode",{parentName:"li"},"log_bin")," is not ",(0,r.yg)("inlineCode",{parentName:"li"},"on"),", configure your MySQL server configuration file(",(0,r.yg)("inlineCode",{parentName:"li"},"$MYSQL_HOME/mysql.cnf"),") with the following properties, which are described in the table below:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"# Enable binary replication log and set the prefix, expiration, and log format.\n# The prefix is arbitrary, expiration can be short for integration tests but would\n# be longer on a production system. Row-level info is required for ingest to work.\n# Server ID is required, but this will vary on production systems\nserver-id         = 223344\nlog_bin           = mysql-bin\nexpire_logs_days  = 10\nbinlog_format     = row\n# mysql 5.6+ requires binlog_row_image to be set to FULL\nbinlog_row_image  = FULL\n\n# optional enable gtid mode\n# mysql 5.6+ requires gtid_mode to be set to ON, but not required by mysql 8.0+\ngtid_mode = on\nenforce_gtid_consistency = on\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Restart MySQL Server")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"/etc/inint.d/mysqld restart\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Confirm your changes by checking the binlog status once more:")),(0,r.yg)("p",null,"MySQL 5.5:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency');\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| log_bin                  | ON             |\n+--------------------------+----------------+\n")),(0,r.yg)("p",null,"MySQL 5.6+:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency');\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| binlog_row_image         | FULL           |\n| enforce_gtid_consistency | ON             |\n| gtid_mode                | ON             |\n| log_bin                  | ON             |\n+--------------------------+----------------+\n")),(0,r.yg)("p",null,"MySQL 8.0+:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"show variables where variable_name in ('log_bin', 'binlog_format', 'binlog_row_image', 'gtid_mode', 'enforce_gtid_consistency')\n+--------------------------+----------------+\n| Variable_name            | Value          |\n+--------------------------+----------------+\n| binlog_format            | ROW            |\n| binlog_row_image         | FULL           |\n| enforce_gtid_consistency | OFF            |\n| gtid_mode                | OFF            |\n| log_bin                  | ON             |\n+--------------------------+----------------+  \n     \n")),(0,r.yg)("h3",{id:"notes"},"Notes"),(0,r.yg)("h4",{id:"setting-up-mysql-session-timeouts"},"Setting up MySQL session timeouts"),(0,r.yg)("p",null,"When an initial consistent snapshot is made for large databases, your established connection could timeout while the tables are being read. You can prevent this behavior by configuring interactive_timeout and wait_timeout in your MySQL configuration file."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"interactive_timeout"),": The number of seconds the server waits for activity on an interactive connection before closing it. See ",(0,r.yg)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_interactive_timeout"},"MySQL\u2019s documentation")," for more details."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"wait_timeout"),": The number of seconds the server waits for activity on a non-interactive connection before closing it. See ",(0,r.yg)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_wait_timeout"},"MySQL\u2019s documentation")," for more details.")),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"For more database settings see ",(0,r.yg)("a",{parentName:"em",href:"https://github.com/debezium/debezium/blob/v1.9.8.Final/documentation/modules/ROOT/pages/connectors/mysql.adoc#setting-up-mysql"},"Debezium MySQL Connector"))),(0,r.yg)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Mysql Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIT(1)",(0,r.yg)("br",null),"TINYINT(1)"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT UNSIGNED",(0,r.yg)("br",null),"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT UNSIGNED",(0,r.yg)("br",null),"MEDIUMINT",(0,r.yg)("br",null),"MEDIUMINT UNSIGNED",(0,r.yg)("br",null),"INT",(0,r.yg)("br",null),"INTEGER",(0,r.yg)("br",null),"YEAR"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,r.yg)("br",null),"INTEGER UNSIGNED",(0,r.yg)("br",null),"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p, s) ",(0,r.yg)("br",null),"DECIMAL(p, s) UNSIGNED ",(0,r.yg)("br",null),"NUMERIC(p, s) ",(0,r.yg)("br",null),"NUMERIC(p, s) UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT",(0,r.yg)("br",null),"FLOAT UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE",(0,r.yg)("br",null),"DOUBLE UNSIGNED",(0,r.yg)("br",null),"REAL",(0,r.yg)("br",null),"REAL UNSIGNED"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CHAR",(0,r.yg)("br",null),"VARCHAR",(0,r.yg)("br",null),"TINYTEXT",(0,r.yg)("br",null),"MEDIUMTEXT",(0,r.yg)("br",null),"TEXT",(0,r.yg)("br",null),"LONGTEXT",(0,r.yg)("br",null),"ENUM",(0,r.yg)("br",null),"JSON",(0,r.yg)("br",null),"ENUM"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME(s)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME(s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME",(0,r.yg)("br",null),"TIMESTAMP(s)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY",(0,r.yg)("br",null),"VARBINAR",(0,r.yg)("br",null),"BIT(p)",(0,r.yg)("br",null),"TINYBLOB",(0,r.yg)("br",null),"MEDIUMBLOB",(0,r.yg)("br",null),"BLOB",(0,r.yg)("br",null),"LONGBLOB ",(0,r.yg)("br",null),"GEOMETRY"),(0,r.yg)("td",{parentName:"tr",align:null},"BYTES")))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"base-url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:mysql://localhost:3306/test"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},".*"),(0,r.yg)("td",{parentName:"tr",align:null},"The database names RegEx of the database to capture, for example: ",(0,r.yg)("inlineCode",{parentName:"td"},"database_prefix.*"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-names"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Table name of the database to monitor. The table name needs to include the database name, for example: ",(0,r.yg)("inlineCode",{parentName:"td"},"database_name.table_name"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The table names RegEx of the database to capture. The table name needs to include the database name, for example: ",(0,r.yg)("inlineCode",{parentName:"td"},"database.*\\\\.table_.*"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table-names-config"),(0,r.yg)("td",{parentName:"tr",align:null},"List"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys": ','["key1"]',',"snapshotSplitColumn": "key2"}]')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"INITIAL"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional startup mode for MySQL CDC consumer, valid enumerations are ",(0,r.yg)("inlineCode",{parentName:"td"},"initial"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"earliest"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"latest")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"specific"),". ",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"initial"),": Synchronize historical data at startup, and then synchronize incremental data.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"earliest"),": Startup from the earliest offset possible.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),": Startup from the latest offset.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"specific"),": Startup from user-supplied specific offsets.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.specific-offset.file"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Start from the specified binlog file name. ",(0,r.yg)("strong",{parentName:"td"},"Note, This option is required when the ",(0,r.yg)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,r.yg)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"startup.specific-offset.pos"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Start from the specified binlog file position. ",(0,r.yg)("strong",{parentName:"td"},"Note, This option is required when the ",(0,r.yg)("inlineCode",{parentName:"strong"},"startup.mode")," option used ",(0,r.yg)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"NEVER"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional stop mode for MySQL CDC consumer, valid enumerations are ",(0,r.yg)("inlineCode",{parentName:"td"},"never"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"latest")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"specific"),". ",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"never"),": Real-time job don't stop the source.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"latest"),": Stop from the latest offset.",(0,r.yg)("br",null)," ",(0,r.yg)("inlineCode",{parentName:"td"},"specific"),": Stop from user-supplied specific offset.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.specific-offset.file"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Stop from the specified binlog file name. ",(0,r.yg)("strong",{parentName:"td"},"Note, This option is required when the ",(0,r.yg)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,r.yg)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stop.specific-offset.pos"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Stop from the specified binlog file position. ",(0,r.yg)("strong",{parentName:"td"},"Note, This option is required when the ",(0,r.yg)("inlineCode",{parentName:"strong"},"stop.mode")," option used ",(0,r.yg)("inlineCode",{parentName:"strong"},"specific"),"."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"8096"),(0,r.yg)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot of table.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1024"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-id"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"A numeric ID or a numeric ID range of this database client, The numeric ID syntax is like ",(0,r.yg)("inlineCode",{parentName:"td"},"5400"),", the numeric ID range syntax is like '5400-5408'. ",(0,r.yg)("br",null)," Every ID must be unique across all currently-running database processes in the MySQL cluster. This connector joins the ",(0,r.yg)("br",null)," MySQL cluster as another server (with this unique ID) so it can read the binlog. ",(0,r.yg)("br",null)," By default, a random number is generated between 6500 and 2,148,492,146, though we recommend setting an explicit value.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"server-time-zone"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"UTC"),(0,r.yg)("td",{parentName:"tr",align:null},"The session time zone in database server. If not set, then ZoneId.systemDefault() is used to determine the server time zone.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.timeout.ms"),(0,r.yg)("td",{parentName:"tr",align:null},"Duration"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"30000"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"The jdbc connection pool size.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"100"),(0,r.yg)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"0.05"),(0,r.yg)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,r.yg)("td",{parentName:"tr",align:null},"Integer"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"exactly_once"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"DEFAULT"),(0,r.yg)("td",{parentName:"tr",align:null},"Optional output format for MySQL CDC, valid enumerations are ",(0,r.yg)("inlineCode",{parentName:"td"},"DEFAULT"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"COMPATIBLE_DEBEZIUM_JSON"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema-changes.enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Schema evolution is disabled by default. Now we only support ",(0,r.yg)("inlineCode",{parentName:"td"},"add column"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"drop column"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"rename column")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"modify column"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"debezium"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Pass-through ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/debezium/debezium/blob/v1.9.8.Final/documentation/modules/ROOT/pages/connectors/mysql.adoc#connector-properties"},"Debezium's properties")," to Debezium Embedded Engine which is used to capture data changes from MySQL server.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"../source-common-options.md"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Support multi-table reading")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 10000\n}\n\nsource {\n  MySQL-CDC {\n    base-url = "jdbc:mysql://localhost:3306/testdb"\n    username = "root"\n    password = "root@123"\n    table-names = ["testdb.table1", "testdb.table2"]\n    \n    startup.mode = "initial"\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,r.yg)("h3",{id:"support-debezium-compatible-format-send-to-kafka"},"Support debezium-compatible format send to kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Must be used with kafka connector sink, see ",(0,r.yg)("a",{parentName:"p",href:"../formats/cdc-compatible-debezium-json.md"},"compatible debezium format")," for details")),(0,r.yg)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 10000\n}\n\nsource {\n  MySQL-CDC {\n    base-url = "jdbc:mysql://localhost:3306/testdb"\n    username = "root"\n    password = "root@123"\n    \n    table-names = ["testdb.table1", "testdb.table2"]\n    table-names-config = [\n      {\n        table = "testdb.table2"\n        primaryKeys = ["id"]\n      }\n    ]\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,r.yg)("h3",{id:"support-schema-evolution"},"Support schema evolution"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    database = shop\n    table = mysql_cdc_e2e_sink_table_with_schema_change_exactly_once\n    primary_keys = ["id"]\n    is_exactly_once = true\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n  }\n}\n\n')),(0,r.yg)("h3",{id:"support-table-pattern-for-multi-table-reading"},"Support table-pattern for multi-table reading"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"table-pattern")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"table-names")," are mutually exclusive"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n'))),(0,r.yg)("p",null,'source {\nMySQL-CDC {\nserver-id = 5652\nusername = "st_user_source"\npassword = "mysqlpw"\ndatabase-pattern = "source.',(0,r.yg)("em",{parentName:"p"},'"\ntable-pattern = "source.'),"\\",'..*"\nbase-url = "jdbc:mysql://mysql_cdc_e2e:3306"\n}\n}'),(0,r.yg)("p",null,"sink {\nConsole {\n}\n}"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\n\n## Changelog\n\n- Add MySQL CDC Source Connector\n\n### next version\n")))}m.isMDXComponent=!0}}]);