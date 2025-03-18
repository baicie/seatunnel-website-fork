"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3236],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(g,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const l={},o="Neo4j",i={unversionedId:"connector-v2/sink/Neo4j",id:"version-2.3.1/connector-v2/sink/Neo4j",title:"Neo4j",description:"Neo4j sink connector",source:"@site/versioned_docs/version-2.3.1/connector-v2/sink/Neo4j.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Neo4j",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/Neo4j",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.1/connector-v2/sink/Neo4j.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"MongoDB",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/MongoDB"},next:{title:"OssFile",permalink:"/zh-CN/docs/2.3.1/connector-v2/sink/OssFile"}},g={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"queryParamPosition object",id:"queryparamposition-object",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"neo4j"},"Neo4j"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Neo4j sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Write data to Neo4j."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,a.yg)("h2",{id:"key-features"},"Key features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.1/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"uri"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"username"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bearer_token"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"query"),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"queryParamPosition"),(0,a.yg)("td",{parentName:"tr",align:null},"Object"),(0,a.yg)("td",{parentName:"tr",align:null},"Yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"30")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Long"),(0,a.yg)("td",{parentName:"tr",align:null},"No"),(0,a.yg)("td",{parentName:"tr",align:null},"30")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null},"config"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"uri-string"},"uri ","[string]"),(0,a.yg)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,a.yg)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,a.yg)("h3",{id:"username-string"},"username ","[string]"),(0,a.yg)("p",null,"username of the Neo4j"),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"password of the Neo4j. required if ",(0,a.yg)("inlineCode",{parentName:"p"},"username")," is provided"),(0,a.yg)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,a.yg)("p",null,"base64 encoded bearer token of the Neo4j. for Auth."),(0,a.yg)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,a.yg)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,a.yg)("h3",{id:"database-string"},"database ","[string]"),(0,a.yg)("p",null,"database name."),(0,a.yg)("h3",{id:"query-string"},"query ","[string]"),(0,a.yg)("p",null,"Query statement. contain parameter placeholders that are substituted with the corresponding values at runtime"),(0,a.yg)("h3",{id:"queryparamposition-object"},"queryParamPosition ","[object]"),(0,a.yg)("p",null,"position mapping information for query parameters."),(0,a.yg)("p",null,"key name is parameter placeholder name."),(0,a.yg)("p",null,"associated value is position of field in input data row."),(0,a.yg)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,a.yg)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,a.yg)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,a.yg)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.1/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "neo4j://localhost:7687"\n    username = "neo4j"\n    password = "1234"\n    database = "neo4j"\n\n    max_transaction_retry_time = 10\n    max_connection_timeout = 10\n\n    query = "CREATE (a:Person {name: $name, age: $age})"\n    queryParamPosition = {\n        name = 0\n        age = 1\n    }\n  }\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Neo4j Sink Connector")))}m.isMDXComponent=!0}}]);