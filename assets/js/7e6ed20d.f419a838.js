"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[93922],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),g=p(n),u=a,y=g["".concat(o,".").concat(u)]||g[u]||c[u]||s;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[g]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53491:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const s={},l="Tidb",i={unversionedId:"connector/source/Tidb",id:"version-2.1.1/connector/source/Tidb",title:"Tidb",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Tidb.md",sourceDirName:"connector/source",slug:"/connector/source/Tidb",permalink:"/docs/2.1.1/connector/source/Tidb",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Tidb.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Socket",permalink:"/docs/2.1.1/connector/source/Socket"},next:{title:"Webhook",permalink:"/docs/2.1.1/connector/source/Webhook"}},o={},p=[{value:"Description",id:"description",level:3},{value:"Env Options",id:"env-options",level:3},{value:"spark.tispark.pd.addresses string",id:"sparktisparkpdaddresses-string",level:5},{value:"spark.sql.extensions string",id:"sparksqlextensions-string",level:5},{value:"Options",id:"options",level:3},{value:"database string",id:"database-string",level:5},{value:"pre_sql string",id:"pre_sql-string",level:5},{value:"common options string",id:"common-options-string",level:5},{value:"Example",id:"example",level:3}],d={toc:p},g="wrapper";function c(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tidb"},"Tidb"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Tidb."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,a.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: Tidb"),(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink"))),(0,a.yg)("h3",{id:"env-options"},"Env Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#spark.tispark.pd.addresses-string"},"spark.tispark.pd.addresses")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#spark.sql.extensions-string"},"spark.sql.extensions")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"org.apache.spark.sql.TiExtensions")))),(0,a.yg)("h5",{id:"sparktisparkpdaddresses-string"},"spark.tispark.pd.addresses ","[string]"),(0,a.yg)("p",null,"your pd servers"),(0,a.yg)("h5",{id:"sparksqlextensions-string"},"spark.sql.extensions ","[string]"),(0,a.yg)("p",null,"default value : org.apache.spark.sql.TiExtensions"),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#database-string"},"database")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#pre_sql-string"},"pre_sql")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"Tidb database"),(0,a.yg)("h5",{id:"pre_sql-string"},"pre_sql ","[string]"),(0,a.yg)("p",null,"sql script"),(0,a.yg)("h5",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Source Plugin common parameters, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.1/connector/source/common-options"},"Source Plugin")," for details"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n    spark.tispark.pd.addresses = "192.168.0.1:2379"\n    spark.sql.extensions = "org.apache.spark.sql.TiExtensions"\n}\n\nsource {\n    tidb {\n        database = "test"\n        pre_sql = "select * from table1"\n    }\n}\n\n')))}c.isMDXComponent=!0}}]);