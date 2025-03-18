"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[41160],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,b=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(b,c(c({ref:n},u),{},{components:t})):r.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},56592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c="CDC compatible debezium-json",s={unversionedId:"connector-v2/formats/cdc-compatible-debezium-json",id:"version-2.3.3/connector-v2/formats/cdc-compatible-debezium-json",title:"CDC compatible debezium-json",description:"SeaTunnel supports to interpret cdc record as Debezium-JSON messages publish to mq(kafka) system.",source:"@site/versioned_docs/version-2.3.3/connector-v2/formats/cdc-compatible-debezium-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/cdc-compatible-debezium-json",permalink:"/zh-CN/docs/2.3.3/connector-v2/formats/cdc-compatible-debezium-json",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.3/connector-v2/formats/cdc-compatible-debezium-json.md",tags:[],version:"2.3.3",frontMatter:{}},i={},l=[{value:"MySQL-CDC output to Kafka",id:"mysql-cdc-output-to-kafka",level:2}],u={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cdc-compatible-debezium-json"},"CDC compatible debezium-json"),(0,o.yg)("p",null,"SeaTunnel supports to interpret cdc record as Debezium-JSON messages publish to mq(kafka) system."),(0,o.yg)("p",null,"This is useful in many cases to leverage this feature, such as compatible with the debezium ecosystem."),(0,o.yg)("h1",{id:"how-to-use"},"How to use"),(0,o.yg)("h2",{id:"mysql-cdc-output-to-kafka"},"MySQL-CDC output to Kafka"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 15000\n}\n\nsource {\n  MySQL-CDC {\n    result_table_name = "table1"\n\n    hostname = localhost\n    base-url="jdbc:mysql://localhost:3306/test"\n    "startup.mode"=INITIAL\n    catalog {\n        factory=MySQL\n    }\n    table-names=[\n        "database1.t1",\n        "database1.t2",\n        "database2.t1"\n    ]\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n    debezium = {\n        # include schema into kafka message\n        key.converter.schemas.enable = false\n        value.converter.schemas.enable = false\n        # include ddl\n        include.schema.changes = true\n        # topic prefix\n        database.server.name =  "mysql_cdc_1"\n    }\n    # compatible_debezium_json fixed schema\n    schema = {\n        fields = {\n            topic = string\n            key = string\n            value = string\n        }\n    }\n  }\n}\n\nsink {\n  Kafka {\n    source_table_name = "table1"\n\n    bootstrap.servers = "localhost:9092"\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n  }\n}\n')))}p.isMDXComponent=!0}}]);