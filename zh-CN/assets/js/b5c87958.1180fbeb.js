"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[89158],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),u=o(n),d=r,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var g={};for(var s in t)hasOwnProperty.call(t,s)&&(g[s]=t[s]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var a=n(58168),r=(n(96540),n(15680));const l={},i="Neo4j",g={unversionedId:"spark/configuration/source-plugins/neo4j",id:"version-2.1.0/spark/configuration/source-plugins/neo4j",title:"Neo4j",description:"Source plugin: Neo4j [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/source-plugins/neo4j.md",sourceDirName:"spark/configuration/source-plugins",slug:"/spark/configuration/source-plugins/neo4j",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/neo4j",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/source-plugins/neo4j.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tidb",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/Tidb"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/spark/configuration/source-plugins/source-plugin"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"result.table.name string",id:"resulttablename-string",level:3},{value:"authentication.type string",id:"authenticationtype-string",level:3},{value:"authentication.basic.username string",id:"authenticationbasicusername-string",level:3},{value:"authentication.basic.password string",id:"authenticationbasicpassword-string",level:3},{value:"url string",id:"url-string",level:3},{value:"query string",id:"query-string",level:3},{value:"labels string",id:"labels-string",level:3},{value:"relationship string",id:"relationship-string",level:3},{value:"schema.flatten.limit string",id:"schemaflattenlimit-string",level:3},{value:"schema.strategy string",id:"schemastrategy-string",level:3},{value:"pushdown.filters.enabled string",id:"pushdownfiltersenabled-string",level:3},{value:"pushdown.columns.enabled string",id:"pushdowncolumnsenabled-string",level:3},{value:"partitions string",id:"partitions-string",level:3},{value:"query.count string",id:"querycount-string",level:3},{value:"relationship.nodes.map string",id:"relationshipnodesmap-string",level:3},{value:"relationship.source.labels string",id:"relationshipsourcelabels-string",level:3},{value:"relationship.target.labels string",id:"relationshiptargetlabels-string",level:3},{value:"Example",id:"example",level:2}],p={toc:o},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"neo4j"},"Neo4j"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Source plugin: Neo4j ","[Spark]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Read data from Neo4j."),(0,r.yg)("p",null,"Neo4j Connector for Apache Spark allows you to read data from Neo4j in 3 different ways: by node labels, by relationship name, and by direct Cypher query."),(0,r.yg)("p",null,"The Options required of yes* means that  you must specify  one way of (query labels relationship)"),(0,r.yg)("p",null,"for detail neo4j config message please visit ",(0,r.yg)("a",{parentName:"p",href:"https://neo4j.com/docs/spark/current/reading/"},"neo4j doc")," "),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#result.table.name-string"},"result_table_name")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#authentication.type-string"},"authentication.type")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#authentication.basic.username-string"},"authentication.basic.username")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#authentication.basic.password-string"},"authentication.basic.password")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#url-string"},"url")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#query-string"},"query")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes*"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#labels-string"},"labels")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes*"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#relationship-string"},"relationship")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes*"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#schema.flatten.limit-string"},"schema.flatten.limit")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#schema.strategy-string"},"schema.strategy")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#pushdown.filters.enabled-string"},"pushdown.filters.enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#pushdown.columns.enabled-string"},"pushdown.columns.enabled")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#partitions-string"},"partitions")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#query.count-string"},"query.count")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#relationship.nodes.map-string"},"relationship.nodes.map")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#relationship.source.labels-string"},"relationship.source.labels")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#relationship.target.labels-string"},"relationship.target.labels")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"resulttablename-string"},"result.table.name ","[string]"),(0,r.yg)("p",null,"result table name"),(0,r.yg)("h3",{id:"authenticationtype-string"},"authentication.type ","[string]"),(0,r.yg)("p",null,"authentication type"),(0,r.yg)("h3",{id:"authenticationbasicusername-string"},"authentication.basic.username ","[string]"),(0,r.yg)("p",null,"username"),(0,r.yg)("h3",{id:"authenticationbasicpassword-string"},"authentication.basic.password ","[string]"),(0,r.yg)("p",null,"password"),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"url "),(0,r.yg)("h3",{id:"query-string"},"query ","[string]"),(0,r.yg)("p",null,"Cypher query to read the data.You must specify one option from ","[query, labels OR relationship]"),(0,r.yg)("h3",{id:"labels-string"},"labels ","[string]"),(0,r.yg)("p",null,"List of node labels separated by : The first label will be the primary label. You must specify one option from ","[query, labels OR relationship]"),(0,r.yg)("h3",{id:"relationship-string"},"relationship ","[string]"),(0,r.yg)("p",null,"Name of a relationship. You must specify one option from ","[query, labels OR relationship]"),(0,r.yg)("h3",{id:"schemaflattenlimit-string"},"schema.flatten.limit ","[string]"),(0,r.yg)("p",null,"Number of records to be used to create the Schema (only if APOC are not installed)"),(0,r.yg)("h3",{id:"schemastrategy-string"},"schema.strategy ","[string]"),(0,r.yg)("p",null,"Strategy used by the connector in order to compute the Schema definition for the Dataset. Possibile values are string, sample. When string it coerces all the properties to String otherwise it will try to sample the Neo4j\u2019s dataset."),(0,r.yg)("h3",{id:"pushdownfiltersenabled-string"},"pushdown.filters.enabled ","[string]"),(0,r.yg)("p",null,"Enable or disable the Push Down Filters support"),(0,r.yg)("h3",{id:"pushdowncolumnsenabled-string"},"pushdown.columns.enabled ","[string]"),(0,r.yg)("p",null,"Enable or disable the Push Down Column support"),(0,r.yg)("h3",{id:"partitions-string"},"partitions ","[string]"),(0,r.yg)("p",null,"This defines the parallelization level while pulling data from Neo4j."),(0,r.yg)("p",null,"Note: as more parallelization does not mean more performances so please tune wisely in according to your Neo4j installation."),(0,r.yg)("h3",{id:"querycount-string"},"query.count ","[string]"),(0,r.yg)("p",null,"Query count, used only in combination with query option, it\u2019s a query that returns a count field like the following:"),(0,r.yg)("p",null,"MATCH (p:Person)-","[r:BOUGHT]","->(pr:Product)\nWHERE pr.name = 'An Awesome Product'\nRETURN count(p) AS count\nor a simple number that represents the amount of records returned by query. Consider that the number passed by this value represent the volume of the data pulled of Neo4j, so please use it carefully."),(0,r.yg)("h3",{id:"relationshipnodesmap-string"},"relationship.nodes.map ","[string]"),(0,r.yg)("p",null,"If true return source and target nodes as Map<String, String>, otherwise we flatten the properties by returning every single node property as column prefixed by source or target"),(0,r.yg)("h3",{id:"relationshipsourcelabels-string"},"relationship.source.labels ","[string]"),(0,r.yg)("p",null,"List of source node Labels separated by :"),(0,r.yg)("h3",{id:"relationshiptargetlabels-string"},"relationship.target.labels ","[string]"),(0,r.yg)("p",null,"List of target node Labels separated by :"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'   Neo4j {\n      result_table_name = "test"\n      authentication.type = "basic"\n      authentication.basic.username = "test"\n      authentication.basic.password = "test"\n      url = "bolt://localhost:7687"\n      labels = "Person"\n      #query = "MATCH (n1)-[r]->(n2) RETURN r, n1, n2 "\n   }\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The returned table is a data table in which both fields are strings")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"<id>")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"<labels>")),(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"born"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Keanu Reeves"),(0,r.yg)("td",{parentName:"tr",align:null},"1964")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Carrie-Anne Moss"),(0,r.yg)("td",{parentName:"tr",align:null},"1967")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Laurence Fishburne"),(0,r.yg)("td",{parentName:"tr",align:null},"1961")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Hugo Weaving"),(0,r.yg)("td",{parentName:"tr",align:null},"1960")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"5"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Andy Wachowski"),(0,r.yg)("td",{parentName:"tr",align:null},"1967")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"6"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Lana Wachowski"),(0,r.yg)("td",{parentName:"tr",align:null},"1965")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"7"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Joel Silver"),(0,r.yg)("td",{parentName:"tr",align:null},"1952")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"8"),(0,r.yg)("td",{parentName:"tr",align:null},"[Person]"),(0,r.yg)("td",{parentName:"tr",align:null},"Emil Eifrem"),(0,r.yg)("td",{parentName:"tr",align:null},"1978")))))}y.isMDXComponent=!0}}]);