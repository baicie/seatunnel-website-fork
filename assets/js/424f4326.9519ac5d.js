"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[52332],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||l;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},i="Doris",o={unversionedId:"connector-v2/sink/Doris",id:"version-2.3.2/connector-v2/sink/Doris",title:"Doris",description:"Doris sink connector",source:"@site/versioned_docs/version-2.3.2/connector-v2/sink/Doris.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Doris",permalink:"/docs/2.3.2/connector-v2/sink/Doris",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/connector-v2/sink/Doris.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"DingTalk",permalink:"/docs/2.3.2/connector-v2/sink/DingTalk"},next:{title:"Elasticsearch",permalink:"/docs/2.3.2/connector-v2/sink/Elasticsearch"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"fenodes string",id:"fenodes-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"table.identifier string",id:"tableidentifier-string",level:3},{value:"sink.label-prefix string",id:"sinklabel-prefix-string",level:3},{value:"sink.enable-2pc bool",id:"sinkenable-2pc-bool",level:3},{value:"sink.enable-delete bool",id:"sinkenable-delete-bool",level:3},{value:"doris.config map",id:"dorisconfig-map",level:3},{value:"Supported import data formats",id:"supported-import-data-formats",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"Next version",id:"next-version",level:3}],d={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"doris"},"Doris"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Doris sink connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to send data to Doris. Both support streaming and batch mode.\nThe internal implementation of Doris sink connector is cached and imported by stream load in batches."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Version Supported"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"exactly-once & cdc supported  ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.1.x")),(0,r.yg)("li",{parentName:"ul"},"Array data type supported  ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is >= 1.2.x")),(0,r.yg)("li",{parentName:"ul"},"Map data type will be support in ",(0,r.yg)("inlineCode",{parentName:"li"},"Doris version is 2.x")))),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.2/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.2/concept/connector-v2-features"},"cdc"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"password"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table.identifier"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.label-prefix"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.enable-2pc"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"true")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sink.enable-delete"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"doris.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"fenodes-string"},"fenodes ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," cluster fenodes address, the format is ",(0,r.yg)("inlineCode",{parentName:"p"},'"fe_ip:fe_http_port, ..."')),(0,r.yg)("h3",{id:"username-string"},"username ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," user username"),(0,r.yg)("h3",{id:"password-string"},"password ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," user password"),(0,r.yg)("h3",{id:"tableidentifier-string"},"table.identifier ","[string]"),(0,r.yg)("p",null,"The name of ",(0,r.yg)("inlineCode",{parentName:"p"},"Doris")," table"),(0,r.yg)("h3",{id:"sinklabel-prefix-string"},"sink.label-prefix ","[string]"),(0,r.yg)("p",null,"The label prefix used by stream load imports. In the 2pc scenario, global uniqueness is required to ensure the EOS semantics of SeaTunnel."),(0,r.yg)("h3",{id:"sinkenable-2pc-bool"},"sink.enable-2pc ","[bool]"),(0,r.yg)("p",null,"Whether to enable two-phase commit (2pc), the default is true, to ensure Exactly-Once semantics. For two-phase commit, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"here"),"."),(0,r.yg)("h3",{id:"sinkenable-delete-bool"},"sink.enable-delete ","[bool]"),(0,r.yg)("p",null,"Whether to enable deletion. This option requires Doris table to enable batch delete function (0.15+ version is enabled by default), and only supports Unique model. you can get more detail at this link:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/data-operate/update-delete/batch-delete-manual"},"https://doris.apache.org/docs/dev/data-operate/update-delete/batch-delete-manual")),(0,r.yg)("h3",{id:"dorisconfig-map"},"doris.config ","[map]"),(0,r.yg)("p",null,"The parameter of the stream load ",(0,r.yg)("inlineCode",{parentName:"p"},"data_desc"),", you can get more detail at this link:"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},"https://doris.apache.org/docs/dev/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD")),(0,r.yg)("h4",{id:"supported-import-data-formats"},"Supported import data formats"),(0,r.yg)("p",null,"The supported formats include CSV and JSON. Default value: CSV"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Use JSON format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        table.identifier = "test.e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_json"\n        doris.config = {\n            format="json"\n            read_json_by_line="true"\n        }\n    }\n}\n\n')),(0,r.yg)("p",null,"Use CSV format to import data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'sink {\n    Doris {\n        fenodes = "e2e_dorisdb:8030"\n        username = root\n        password = ""\n        table.identifier = "test.e2e_table_sink"\n        sink.enable-2pc = "true"\n        sink.label-prefix = "test_csv"\n        doris.config = {\n          format = "csv"\n          column_separator = ","\n        }\n    }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Doris Sink Connector")),(0,r.yg)("h3",{id:"next-version"},"Next version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"[Improve]"," Change Doris Config Prefix ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/3856"},"3856"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"[Improve]"," Refactor some Doris Sink code as well as support 2pc and cdc ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/pull/4235"},"4235")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"PR 4235 is an incompatible modification to PR 3856. Please refer to PR 4235 to use the new Doris connector")))}u.isMDXComponent=!0}}]);