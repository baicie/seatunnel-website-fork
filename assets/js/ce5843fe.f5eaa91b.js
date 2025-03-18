"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[42636],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>h});var r=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=r.createContext({}),i=function(e){var n=r.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(a),m=t,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return a?r.createElement(h,o(o({ref:n},d),{},{components:a})):r.createElement(h,o({ref:n},d))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=a.length,o=new Array(s);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:t,o[1]=c;for(var i=2;i<s;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42298:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=a(58168),t=(a(96540),a(15680));const s={},o="Schema evolution",c={unversionedId:"concept/schema-evolution",id:"concept/schema-evolution",title:"Schema evolution",description:"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations.",source:"@site/docs/concept/schema-evolution.md",sourceDirName:"concept",slug:"/concept/schema-evolution",permalink:"/docs/concept/schema-evolution",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/concept/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Event Listener",permalink:"/docs/concept/event-listener"},next:{title:"Source",permalink:"/docs/connector-v2/source"}},l={},i=[{value:"Supported engines",id:"supported-engines",level:2},{value:"Supported schema change event types",id:"supported-schema-change-event-types",level:2},{value:"Supported connectors",id:"supported-connectors",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Enable schema evolution",id:"enable-schema-evolution",level:2},{value:"Examples",id:"examples",level:2},{value:"Mysql-CDC -&gt; Jdbc-Mysql",id:"mysql-cdc---jdbc-mysql",level:3},{value:"Oracle-cdc -&gt; Jdbc-Oracle",id:"oracle-cdc---jdbc-oracle",level:3},{value:"Oracle-cdc -&gt; Jdbc-Mysql",id:"oracle-cdc---jdbc-mysql",level:3},{value:"Mysql-cdc -&gt; StarRocks",id:"mysql-cdc---starrocks",level:3},{value:"Mysql-CDC -&gt; Doris",id:"mysql-cdc---doris",level:3},{value:"Mysql-CDC -&gt; Jdbc-Postgres",id:"mysql-cdc---jdbc-postgres",level:3},{value:"Mysql-CDC -&gt; Jdbc-Dameng",id:"mysql-cdc---jdbc-dameng",level:3},{value:"Mysql-CDC -&gt; Jdbc-SqlServer",id:"mysql-cdc---jdbc-sqlserver",level:3}],d={toc:i},p="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(p,(0,r.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"schema-evolution"},"Schema evolution"),(0,t.yg)("p",null,"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations."),(0,t.yg)("h2",{id:"supported-engines"},"Supported engines"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Zeta")),(0,t.yg)("h2",{id:"supported-schema-change-event-types"},"Supported schema change event types"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"ADD COLUMN")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"DROP COLUMN")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"RENAME COLUMN")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"MODIFY COLUMN"))),(0,t.yg)("h2",{id:"supported-connectors"},"Supported connectors"),(0,t.yg)("h3",{id:"source"},"Source"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/MySQL-CDC.md"},"Mysql-CDC"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/Oracle-CDC.md"},"Oracle-CDC")),(0,t.yg)("h3",{id:"sink"},"Sink"),(0,t.yg)("p",null,(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Mysql"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Oracle"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Postgres"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Dameng"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-SqlServer"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/StarRocks.md"},"StarRocks"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Doris.md"},"Doris"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Paimon.md#Schema-Evolution"},"Paimon"),"\n",(0,t.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Elasticsearch.md#Schema-Evolution"},"Elasticsearch")),(0,t.yg)("p",null,"Note:  "),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"The schema evolution is not support the transform at now. The schema evolution of different types of databases\uff08Oracle-CDC -> Jdbc-Mysql\uff09is currently not supported the default value of the column in ddl.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"When you use the Oracle-CDC\uff0cyou can not use the username named ",(0,t.yg)("inlineCode",{parentName:"p"},"SYS")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"SYSTEM")," to modify the table schema, otherwise the ddl event will be filtered out which can lead to the schema evolution not working.\nOtherwise, If your table name start with ",(0,t.yg)("inlineCode",{parentName:"p"},"ORA_TEMP_")," will also has the same problem.")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("p",{parentName:"li"},"Earlier versions of ",(0,t.yg)("inlineCode",{parentName:"p"},"Dameng")," databases do not support the change of ",(0,t.yg)("inlineCode",{parentName:"p"},"Varchar")," type fields to ",(0,t.yg)("inlineCode",{parentName:"p"},"Text")," type fields."))),(0,t.yg)("h2",{id:"enable-schema-evolution"},"Enable schema evolution"),(0,t.yg)("p",null,"Schema evolution is disabled by default in CDC source. You need configure ",(0,t.yg)("inlineCode",{parentName:"p"},"schema-changes.enabled = true")," which is only supported in CDC to enable it."),(0,t.yg)("h2",{id:"examples"},"Examples"),(0,t.yg)("h3",{id:"mysql-cdc---jdbc-mysql"},"Mysql-CDC -> Jdbc-Mysql"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    database = shop\n    table = mysql_cdc_e2e_sink_table_with_schema_change_exactly_once\n    primary_keys = ["id"]\n    is_exactly_once = true\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n  }\n}\n')),(0,t.yg)("h3",{id:"oracle-cdc---jdbc-oracle"},"Oracle-cdc -> Jdbc-Oracle"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n    Jdbc {\n      plugin_input = "customers"\n      driver = "oracle.jdbc.driver.OracleDriver"\n      url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n      user = "dbzuser"\n      password = "dbz"\n      generate_sink_sql = true\n      database = "ORCLCDB"\n      table = "DEBEZIUM.FULL_TYPES_SINK"\n      batch_size = 1\n      primary_keys = ["ID"]\n      connection.pool.size = 1\n    }\n}\n')),(0,t.yg)("h3",{id:"oracle-cdc---jdbc-mysql"},"Oracle-cdc -> Jdbc-Mysql"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  Oracle-CDC {\n    plugin_output = "customers"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["ORCLCDB.DEBEZIUM.FULL_TYPES"]\n    base-url = "jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    source.reader.close.timeout = 120000\n    connection.pool.size = 1\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    plugin_input = "customers"\n    url = "jdbc:mysql://oracle-host:3306/oracle_sink"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = oracle_sink\n    table = oracle_cdc_2_mysql_sink_table\n    primary_keys = ["ID"]\n  }\n}\n')),(0,t.yg)("h3",{id:"mysql-cdc---starrocks"},"Mysql-cdc -> StarRocks"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  MySQL-CDC {\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    \n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  StarRocks {\n    nodeUrls = ["starrocks_cdc_e2e:8030"]\n    username = "root"\n    password = ""\n    database = "shop"\n    table = "${table_name}"\n    base-url = "jdbc:mysql://starrocks_cdc_e2e:9030/shop"\n    max_retries = 3\n    enable_upsert_delete = true\n    schema_save_mode="RECREATE_SCHEMA"\n    data_save_mode="DROP_DATA"\n    save_mode_create_template = """\n    CREATE TABLE IF NOT EXISTS shop.`${table_name}` (\n        ${rowtype_primary_key},\n        ${rowtype_fields}\n        ) ENGINE=OLAP\n        PRIMARY KEY (${rowtype_primary_key})\n        DISTRIBUTED BY HASH (${rowtype_primary_key})\n        PROPERTIES (\n                "replication_num" = "1",\n                "in_memory" = "false",\n                "enable_persistent_index" = "true",\n                "replicated_storage" = "true",\n                "compression" = "LZ4"\n          )\n    """\n  }\n}\n')),(0,t.yg)("h3",{id:"mysql-cdc---doris"},"Mysql-CDC -> Doris"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  Doris {\n    fenodes = "doris_e2e:8030"\n    username = "root"\n    password = ""\n    database = "shop"\n    table = "products"\n    sink.label-prefix = "test-cdc"\n    sink.enable-2pc = "true"\n    sink.enable-delete = "true"\n    doris.config {\n      format = "json"\n      read_json_by_line = "true"\n    }\n  }\n}\n')),(0,t.yg)("h3",{id:"mysql-cdc---jdbc-postgres"},"Mysql-CDC -> Jdbc-Postgres"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n\n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:postgresql://postgresql:5432/shop"\n    driver = "org.postgresql.Driver"\n    user = "postgres"\n    password = "postgres"\n    generate_sink_sql = true\n    database = shop\n    table = "public.sink_table_with_schema_change"\n    primary_keys = ["id"]\n\n    # Validate ddl update for sink writer multi replica\n    multi_table_sink_replica = 2\n  }\n}\n')),(0,t.yg)("h3",{id:"mysql-cdc---jdbc-dameng"},"Mysql-CDC -> Jdbc-Dameng"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n\n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:dm://e2e_dmdb:5236"\n    driver = "dm.jdbc.driver.DmDriver"\n    connection_check_timeout_sec = 1000\n    user = "SYSDBA"\n    password = "SYSDBA"\n    generate_sink_sql = true\n    database = "DAMENG"\n    table = "SYSDBA.sink_table_with_schema_change"\n    primary_keys = ["id"]\n\n    # Validate ddl update for sink writer multi replica\n    multi_table_sink_replica = 2\n  }\n}\n')),(0,t.yg)("h3",{id:"mysql-cdc---jdbc-sqlserver"},"Mysql-CDC -> Jdbc-SqlServer"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n\n    schema-changes.enabled = true\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:sqlserver://e2e_sqlserver:1433"\n    driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n    user = "sa"\n    password = "paanssy1234$"\n    generate_sink_sql = true\n    database = master\n    table = "dbo.sink_table_with_schema_change"\n    primary_keys = ["id"]\n\n    # Validate ddl update for sink writer multi replica\n    multi_table_sink_replica = 2\n  }\n}\n')))}u.isMDXComponent=!0}}]);