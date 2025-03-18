"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[84737],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=r,d=p["".concat(i,".").concat(u)]||p[u]||g[u]||o;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36947:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={},l="MaxWell Format",s={unversionedId:"connector-v2/formats/maxwell-json",id:"version-2.3.9/connector-v2/formats/maxwell-json",title:"MaxWell Format",description:"Maxwell is a CDC (Changelog Data Capture) tool that can stream changes in real-time from MySQL into Kafka, Kinesis and other streaming connectors. Maxwell provides a unified format schema for changelog and supports to serialize messages using JSON.",source:"@site/versioned_docs/version-2.3.9/connector-v2/formats/maxwell-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/maxwell-json",permalink:"/zh-CN/docs/2.3.9/connector-v2/formats/maxwell-json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/formats/maxwell-json.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Kafka source \u517c\u5bb9 kafka-connect-json",permalink:"/zh-CN/docs/2.3.9/connector-v2/formats/kafka-compatible-kafkaconnect-json"},next:{title:"Ogg \u683c\u5f0f",permalink:"/zh-CN/docs/2.3.9/connector-v2/formats/ogg-json"}},i={},c=[{value:"Kafka Uses Example",id:"kafka-uses-example",level:2}],m={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"maxwell-format"},"MaxWell Format"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://maxwells-daemon.io/"},"Maxwell")," is a CDC (Changelog Data Capture) tool that can stream changes in real-time from MySQL into Kafka, Kinesis and other streaming connectors. Maxwell provides a unified format schema for changelog and supports to serialize messages using JSON."),(0,r.yg)("p",null,"Seatunnel supports to interpret MaxWell JSON messages as INSERT/UPDATE/DELETE messages into seatunnel system. This is useful in many cases to leverage this feature, such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"    synchronizing incremental data from databases to other systems\n    auditing logs\n    real-time materialized views on databases\n    temporal join changing history of a database table and so on.\n")),(0,r.yg)("p",null,"Seatunnel also supports to encode the INSERT/UPDATE/DELETE messages in Seatunnel as MaxWell JSON messages, and emit to storage like Kafka. However, currently Seatunnel can\u2019t combine UPDATE_BEFORE and UPDATE_AFTER into a single UPDATE message. Therefore, Seatunnel encodes UPDATE_BEFORE and UPDATE_AFTER as DELETE and INSERT MaxWell messages."),(0,r.yg)("h1",{id:"format-options"},"Format Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Option"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Specify what format to use, here should be 'maxwell_json'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxwell_json.ignore-parse-errors"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"Skip fields and rows with parse errors instead of failing. Fields are set to null in case of errors.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxwell_json.database.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific databases changelog rows by regular matching the "database" meta field in the MaxWell record. The pattern string is compatible with Java\'s Pattern.')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxwell_json.table.include"),(0,r.yg)("td",{parentName:"tr",align:null},"(none)"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},'An optional regular expression to only read the specific tables changelog rows by regular matching the "table" meta field in the MaxWell record. The pattern string is compatible with Java\'s Pattern.')))),(0,r.yg)("h1",{id:"how-to-use-maxwell-format"},"How To Use MaxWell format"),(0,r.yg)("h2",{id:"kafka-uses-example"},"Kafka Uses Example"),(0,r.yg)("p",null,"MaxWell provides a unified format for changelog, here is a simple example for an update operation captured from a MySQL products table:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n    "database":"test",\n    "table":"product",\n    "type":"insert",\n    "ts":1596684904,\n    "xid":7201,\n    "commit":true,\n    "data":{\n        "id":111,\n        "name":"scooter",\n        "description":"Big 2-wheel scooter ",\n        "weight":5.18\n    },\n    "primary_key_columns":[\n        "id"\n    ]\n}\n')),(0,r.yg)("p",null,"Note: please refer to MaxWell documentation about the meaning of each fields."),(0,r.yg)("p",null,"The MySQL products table has 4 columns (id, name, description and weight).\nThe above JSON message is an update change event on the products table where the weight value of the row with id = 111 is changed from 5.18 to 5.15.\nAssuming the messages have been synchronized to Kafka topic products_binlog, then we can use the following Seatunnel to consume this topic and interpret the change events."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    execution.parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "products_binlog"\n    plugin_output = "kafka_name"\n    start_mode = earliest\n    schema = {\n      fields {\n           id = "int"\n           name = "string"\n           description = "string"\n           weight = "string"\n      }\n    },\n    format = maxwell_json\n  }\n\n}\n\ntransform {\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "localhost:9092"\n    topic = "consume-binlog"\n    format = maxwell_json\n  }\n}\n')))}g.isMDXComponent=!0}}]);