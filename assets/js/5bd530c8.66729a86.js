"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[34267],{15680:(n,e,t)=>{t.d(e,{xA:()=>p,yg:()=>d});var r=t(96540);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,p=c(n,["components","mdxType","originalType","parentName"]),m=l(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,i(i({ref:e},p),{},{components:t})):r.createElement(d,i({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c[m]="string"==typeof n?n:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5136:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const o={},i="Avro format",c={unversionedId:"connector-v2/formats/avro",id:"version-2.3.9/connector-v2/formats/avro",title:"Avro format",description:"Avro is very popular in streaming data pipeline. Now seatunnel supports Avro format in kafka connector.",source:"@site/versioned_docs/version-2.3.9/connector-v2/formats/avro.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/avro",permalink:"/docs/2.3.9/connector-v2/formats/avro",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/formats/avro.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Formats",permalink:"/docs/2.3.9/connector-v2/formats"},next:{title:"Canal Format",permalink:"/docs/2.3.9/connector-v2/formats/canal-json"}},s={},l=[{value:"Kafka uses example",id:"kafka-uses-example",level:2}],p={toc:l},m="wrapper";function u(n){let{components:e,...t}=n;return(0,a.yg)(m,(0,r.A)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"avro-format"},"Avro format"),(0,a.yg)("p",null,"Avro is very popular in streaming data pipeline. Now seatunnel supports Avro format in kafka connector."),(0,a.yg)("h1",{id:"how-to-use"},"How To Use"),(0,a.yg)("h2",{id:"kafka-uses-example"},"Kafka uses example"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is an example to generate data from fake source and sink to kafka with avro format.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 90\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          c_map = "map<string, string>"\n          c_array = "array<int>"\n          c_string = string\n          c_boolean = boolean\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n          c_bytes = bytes\n          c_date = date\n          c_decimal = "decimal(38, 18)"\n          c_timestamp = timestamp\n        }\n      }\n    }\n    plugin_output = "fake"\n  }\n}\n\nsink {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic_fake_source"\n    format = avro\n  }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"This is an example read data from kafka with avro format and print to console.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafkaCluster:9092"\n    topic = "test_avro_topic"\n    plugin_output = "kafka_table"\n    start_mode = "earliest"\n    format = avro\n    format_error_handle_way = skip\n    schema = {\n      fields {\n        id = bigint\n        c_map = "map<string, smallint>"\n        c_array = "array<tinyint>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(2, 1)"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n\nsink {\n  Console {\n    plugin_input = "kafka_table"\n  }\n}\n')))}u.isMDXComponent=!0}}]);