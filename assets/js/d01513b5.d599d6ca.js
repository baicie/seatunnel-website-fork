"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[29718],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),s=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,m=d["".concat(g,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},96126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(58168),r=(n(96540),n(15680));const l={},i="Clickhouse",o={unversionedId:"connector/sink/Clickhouse",id:"version-2.1.3/connector/sink/Clickhouse",title:"Clickhouse",description:"Description",source:"@site/versioned_docs/version-2.1.3/connector/sink/Clickhouse.md",sourceDirName:"connector/sink",slug:"/connector/sink/Clickhouse",permalink:"/docs/2.1.3/connector/sink/Clickhouse",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.3/connector/sink/Clickhouse.md",tags:[],version:"2.1.3",frontMatter:{},sidebar:"docs",previous:{title:"Assert",permalink:"/docs/2.1.3/connector/sink/Assert"},next:{title:"ClickhouseFile",permalink:"/docs/2.1.3/connector/sink/ClickhouseFile"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"bulk_size number",id:"bulk_size-number",level:3},{value:"database string",id:"database-string",level:3},{value:"fields array",id:"fields-array",level:3},{value:"host string",id:"host-string",level:3},{value:"password string",id:"password-string",level:3},{value:"retry number",id:"retry-number",level:3},{value:"retry_codes array",id:"retry_codes-array",level:3},{value:"table string",id:"table-string",level:3},{value:"username string",id:"username-string",level:3},{value:"clickhouse string",id:"clickhouse-string",level:3},{value:"split_mode boolean",id:"split_mode-boolean",level:3},{value:"sharding_key string",id:"sharding_key-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"ClickHouse type comparison table",id:"clickhouse-type-comparison-table",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"clickhouse"},"Clickhouse"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," to correspond the data source according to the field name and write it into ClickHouse. The corresponding data table needs to be created in advance before use"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Clickhouse"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Clickhouse"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bulk_size"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"20000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clickhouse.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"database"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fields"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry"),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"retry_codes"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"[ ]")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sharding_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"bulk_size-number"},"bulk_size ","[number]"),(0,r.yg)("p",null,"The number of rows written through ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"Clickhouse-jdbc")," each time, the ",(0,r.yg)("inlineCode",{parentName:"p"},"default is 20000")," ."),(0,r.yg)("h3",{id:"database-string"},"database ","[string]"),(0,r.yg)("p",null,"database name"),(0,r.yg)("h3",{id:"fields-array"},"fields ","[array]"),(0,r.yg)("p",null,"The data field that needs to be output to ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," , if not configured, it will be automatically adapted according to the data ",(0,r.yg)("inlineCode",{parentName:"p"},"schema")," ."),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," cluster address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},"host:port")," , allowing multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"hosts")," to be specified. Such as ",(0,r.yg)("inlineCode",{parentName:"p"},'"host1:8123,host2:8123"')," ."),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse user password")," . This field is only required when the permission is enabled in ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," ."),(0,r.yg)("h3",{id:"retry-number"},"retry ","[number]"),(0,r.yg)("p",null,"The number of retries, the default is 1"),(0,r.yg)("h3",{id:"retry_codes-array"},"retry_codes ","[array]"),(0,r.yg)("p",null,"When an exception occurs, the ClickHouse exception error code of the operation will be retried. For a detailed list of error codes, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/blob/master/clickhouse-jdbc/src/main/java/ru/yandex/clickhouse/except/ClickHouseErrorCode.java"},"ClickHouseErrorCode")),(0,r.yg)("p",null,"If multiple retries fail, this batch of data will be discarded, use with caution! !"),(0,r.yg)("h3",{id:"table-string"},"table ","[string]"),(0,r.yg)("p",null,"table name"),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," user username, this field is only required when permission is enabled in ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")),(0,r.yg)("h3",{id:"clickhouse-string"},"clickhouse ","[string]"),(0,r.yg)("p",null,"In addition to the above mandatory parameters that must be specified by ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," , users can also specify multiple optional parameters, which cover all the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc/blob/master/clickhouse-jdbc/src/main/java/ru/yandex/clickhouse/settings/ClickHouseProperties.java"},"parameters")," provided by ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse-jdbc")," ."),(0,r.yg)("p",null,"The way to specify the parameter is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse.")," to the original parameter name. For example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"socket_timeout")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse.socket_timeout = 50000")," . If these non-essential parameters are not specified, they will use the default values given by ",(0,r.yg)("inlineCode",{parentName:"p"},"clickhouse-jdbc"),"."),(0,r.yg)("h3",{id:"split_mode-boolean"},"split_mode ","[boolean]"),(0,r.yg)("p",null,"This mode only support clickhouse table which engine is 'Distributed'.And ",(0,r.yg)("inlineCode",{parentName:"p"},"internal_replication")," option\nshould be ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),". They will split distributed table data in seatunnel and perform write directly on each shard. The shard weight define is clickhouse will be\ncounted."),(0,r.yg)("h3",{id:"sharding_key-string"},"sharding_key ","[string]"),(0,r.yg)("p",null,"When use split_mode, which node to send data to is a problem, the default is random selection, but the\n'sharding_key' parameter can be used to specify the field for the sharding algorithm. This option only\nworked when 'split_mode' is true."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.3/connector/sink/common-options"},"common options")," for details"),(0,r.yg)("h2",{id:"clickhouse-type-comparison-table"},"ClickHouse type comparison table"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ClickHouse field type"),(0,r.yg)("th",{parentName:"tr",align:null},"Convert plugin conversion goal type"),(0,r.yg)("th",{parentName:"tr",align:null},"SQL conversion expression"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string()"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd"),"\xa0Format string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string()"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"),"\xa0Format string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int8"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Uint8"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int16"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Uint16"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int32"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"int()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Uint32"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Int64"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Uint64"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float32"),(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Float64"),(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double()"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Decimal(P, S)"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"CAST(source AS DECIMAL(P, S))"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal32(S), Decimal64(S), Decimal128(S)\xa0Can be used")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Array(T)"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nullable(T)"),(0,r.yg)("td",{parentName:"tr",align:null},"Depends on T"),(0,r.yg)("td",{parentName:"tr",align:null},"Depends on T"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LowCardinality(T)"),(0,r.yg)("td",{parentName:"tr",align:null},"Depends on T"),(0,r.yg)("td",{parentName:"tr",align:null},"Depends on T"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'clickhouse {\n    host = "localhost:8123"\n    clickhouse.socket_timeout = 50000\n    database = "nginx"\n    table = "access_msg"\n    fields = ["date", "datetime", "hostname", "http_code", "data_size", "ua", "request_time"]\n    username = "username"\n    password = "password"\n    bulk_size = 20000\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'ClickHouse {\n    host = "localhost:8123"\n    database = "nginx"\n    table = "access_msg"\n    fields = ["date", "datetime", "hostname", "http_code", "data_size", "ua", "request_time"]\n    username = "username"\n    password = "password"\n    bulk_size = 20000\n    retry_codes = [209, 210]\n    retry = 3\n}\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In case of network timeout or network abnormality, retry writing 3 times")))}u.isMDXComponent=!0}}]);