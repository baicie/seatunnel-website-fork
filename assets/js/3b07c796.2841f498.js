"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[97044,79124],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(a),d=r,u=s["".concat(g,".").concat(d)]||s[d]||c[d]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},i=void 0,o={unversionedId:"connector-v2/changelog/connector-redis",id:"connector-v2/changelog/connector-redis",title:"connector-redis",description:"Change Log",source:"@site/docs/connector-v2/changelog/connector-redis.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-redis",permalink:"/docs/connector-v2/changelog/connector-redis",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/changelog/connector-redis.md",tags:[],version:"current",frontMatter:{}},g={},p=[],m={toc:p},s="wrapper";function c(e){let{components:t,...a}=e;return(0,r.yg)(s,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Redis]"," Optimized Redis connection params (#8841)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e56f06cdf0"},"https://github.com/apache/seatunnel/commit/e56f06cdf0")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve]"," update Redis connector config option (#8631)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f1c313eea6"},"https://github.com/apache/seatunnel/commit/f1c313eea6")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Redis]"," Flush data when the time reaches checkpoint.interval and update test case (#8308)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e15757bcd7"},"https://github.com/apache/seatunnel/commit/e15757bcd7")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Revert ",'"',"[Feature][Redis]"," Flush data when the time reaches checkpoint interval",'"'," and ",'"',"[Feature][CDC]"," Add ","'","schema-changes.enabled","'"," options",'"'," (#8278)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fcb2938286"},"https://github.com/apache/seatunnel/commit/fcb2938286")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Redis]"," Flush data when the time reaches checkpoint.interval (#8198)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2e24941e6a"},"https://github.com/apache/seatunnel/commit/2e24941e6a")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix]"," Fix redis sink NPE (#8171)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b9074e769"},"https://github.com/apache/seatunnel/commit/6b9074e769")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][dist]","add shade check rule (#8136)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51ef800016"},"https://github.com/apache/seatunnel/commit/51ef800016")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-Redis]"," Redis connector support delete data (#7994)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/02a35c3979"},"https://github.com/apache/seatunnel/commit/02a35c3979")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]"," Redis support custom key and value (#7888)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/ef2c3c7283"},"https://github.com/apache/seatunnel/commit/ef2c3c7283")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve][Redis]","Redis scan command supports versions 5, 6, 7 (#7666)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6e70cbe334"},"https://github.com/apache/seatunnel/commit/6e70cbe334")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector]"," Add multi-table sink option check (#7360)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/2489f6446b"},"https://github.com/apache/seatunnel/commit/2489f6446b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.7")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Support using upstream table placeholders in sink options and auto replacement (#7131)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c4ca74122c"},"https://github.com/apache/seatunnel/commit/c4ca74122c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Redis]"," Redis reader use scan cammnd instead of keys, single mode reader/writer support batch (#7087)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/be37f05c07"},"https://github.com/apache/seatunnel/commit/be37f05c07")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Kafka]"," Support multi-table source read  (#5992)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/60104602d1"},"https://github.com/apache/seatunnel/commit/60104602d1")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","Support multi-table sink feature for redis (#6314)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fed89ae3fc"},"https://github.com/apache/seatunnel/commit/fed89ae3fc")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Upgrade flink source translation (#5100)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/5aabb14a94"},"https://github.com/apache/seatunnel/commit/5aabb14a94")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support TableSourceFactory/TableSinkFactory on redis  (#5901)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/e84dcb8c10"},"https://github.com/apache/seatunnel/commit/e84dcb8c10")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Common]"," Introduce new error define rule (#5793)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/9d1b2582b2"},"https://github.com/apache/seatunnel/commit/9d1b2582b2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," Remove use ",(0,r.yg)("inlineCode",{parentName:"td"},"SeaTunnelSink::getConsumedType")," method and mark it as deprecated (#5755)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/8de7408100"},"https://github.com/apache/seatunnel/commit/8de7408100")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-v2]","[Redis]"," Redis support select db (#5570)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/77fbbbd0ee"},"https://github.com/apache/seatunnel/commit/77fbbbd0ee")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Support config column/primaryKey/constraintKey in schema (#5564)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/eac76b4e50"},"https://github.com/apache/seatunnel/commit/eac76b4e50")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-v2]","[RedisSink]","Support redis to set expiration time. (#4975)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b5321ff1d2"},"https://github.com/apache/seatunnel/commit/b5321ff1d2")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Merge branch ","'","dev","'"," into merge/cdc"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4324ee1912"},"https://github.com/apache/seatunnel/commit/4324ee1912")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/423b583038"},"https://github.com/apache/seatunnel/commit/423b583038")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[improve][api]"," Refactoring schema parse (#4157)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/b2f573a13e"},"https://github.com/apache/seatunnel/commit/b2f573a13e")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector]"," add get source method to all source connector (#3846)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/417178fb84"},"https://github.com/apache/seatunnel/commit/417178fb84")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][OptionRule]"," Fix option rule about all connectors (#3592)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/226dc6a119"},"https://github.com/apache/seatunnel/commit/226dc6a119")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[Redis]"," Unified exception for redis source ","&"," sink exception (#3517)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/205f782585"},"https://github.com/apache/seatunnel/commit/205f782585")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"options in conditional need add to required or optional options (#3501)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/51d5bcba10"},"https://github.com/apache/seatunnel/commit/51d5bcba10")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[feature][api]"," add option validation for the ReadonlyConfig (#3417)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/4f824fea36"},"https://github.com/apache/seatunnel/commit/4f824fea36")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Redis Connector V2]"," Add Redis Connector Option Rules ","&"," Improve Redis Connector doc (#3320)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/1c10aacb30"},"https://github.com/apache/seatunnel/commit/1c10aacb30")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Connector-V2][ElasticSearch]"," Add ElasticSearch Source/Sink Factory (#3325)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/38254e3f26"},"https://github.com/apache/seatunnel/commit/38254e3f26")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Connector-V2]","[Redis]"," Support redis cluster connection ","&"," user authentication (#3188)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c7275a49cc"},"https://github.com/apache/seatunnel/commit/c7275a49cc")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[DEV][Api]"," Replace SeaTunnelContext with JobContext and remove singleton pattern (#2706)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cbf82f755c"},"https://github.com/apache/seatunnel/commit/cbf82f755c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add redis sink connector (#2647)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/71a9e4b019"},"https://github.com/apache/seatunnel/commit/71a9e4b019")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[#2606]","Dependency management split (#2630)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/fc047be69b"},"https://github.com/apache/seatunnel/commit/fc047be69b")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Add redis source connector (#2569)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/405f7d6f99"},"https://github.com/apache/seatunnel/commit/405f7d6f99")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta"))))))}c.isMDXComponent=!0},33348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>g,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),l=a(3417);const i={},o="Redis",g={unversionedId:"connector-v2/source/Redis",id:"connector-v2/source/Redis",title:"Redis",description:"Redis source connector",source:"@site/docs/connector-v2/source/Redis.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Redis",permalink:"/docs/connector-v2/source/Redis",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/connector-v2/source/Redis.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Rabbitmq",permalink:"/docs/connector-v2/source/Rabbitmq"},next:{title:"Redshift",permalink:"/docs/connector-v2/source/Redshift"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"hash_key_parse_mode string",id:"hash_key_parse_mode-string",level:3},{value:"keys string",id:"keys-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"data_type string",id:"data_type-string",level:3},{value:"user string",id:"user-string",level:3},{value:"auth string",id:"auth-string",level:3},{value:"db_num int",id:"db_num-int",level:3},{value:"mode string",id:"mode-string",level:3},{value:"nodes list",id:"nodes-list",level:3},{value:"format string",id:"format-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields config",id:"fields-config",level:4},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2}],s={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"redis"},"Redis"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Redis source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Redis."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes when mode=single"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"6379")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"keys"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"auth"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db_num"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"single")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hash_key_parse_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"all")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"nodes"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"yes when mode=cluster"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"yes when format=json"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"json")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,"redis host"),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"redis port"),(0,r.yg)("h3",{id:"hash_key_parse_mode-string"},"hash_key_parse_mode ","[string]"),(0,r.yg)("p",null,"hash key parse mode, support ",(0,r.yg)("inlineCode",{parentName:"p"},"all")," ",(0,r.yg)("inlineCode",{parentName:"p"},"kv"),", used to tell connector how to parse hash key."),(0,r.yg)("p",null,"when setting it to ",(0,r.yg)("inlineCode",{parentName:"p"},"all"),", connector will treat the value of hash key as a row and use the schema config to parse it, when setting it to ",(0,r.yg)("inlineCode",{parentName:"p"},"kv"),", connector will treat each kv in hash key as a row and use the schema config to parse it:"),(0,r.yg)("p",null,"for example, if the value of hash key is the following shown:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},'{ \n  "001": {\n    "name": "tyrantlucifer",\n    "age": 26\n  },\n  "002": {\n    "name": "Zongwen",\n    "age": 26\n  }\n}\n\n')),(0,r.yg)("p",null,"if hash_key_parse_mode is ",(0,r.yg)("inlineCode",{parentName:"p"},"all")," and schema config as the following shown, it will generate the following data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"schema {\n  fields {\n    001 {\n      name = string\n      age = int\n    }\n    002 {\n      name = string\n      age = int\n    }\n  }\n}\n\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"001"),(0,r.yg)("th",{parentName:"tr",align:null},"002"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Row(name=tyrantlucifer, age=26)"),(0,r.yg)("td",{parentName:"tr",align:null},"Row(name=Zongwen, age=26)")))),(0,r.yg)("p",null,"if hash_key_parse_mode is ",(0,r.yg)("inlineCode",{parentName:"p"},"kv")," and schema config as the following shown, it will generate the following data:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"schema {\n  fields {\n    hash_key = string\n    name = string\n    age = int\n  }\n}\n\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"hash_key"),(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"001"),(0,r.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,r.yg)("td",{parentName:"tr",align:null},"26")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"002"),(0,r.yg)("td",{parentName:"tr",align:null},"Zongwen"),(0,r.yg)("td",{parentName:"tr",align:null},"26")))),(0,r.yg)("p",null,"each kv that in hash key it will be treated as a row and send it to upstream."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips: connector will use the first field information of schema config as the field name of each k that in each kv")),(0,r.yg)("h3",{id:"keys-string"},"keys ","[string]"),(0,r.yg)("p",null,"keys pattern"),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"indicates the number of keys to attempt to return per iteration,default 10"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Tips:Redis source connector support fuzzy key matching, user needs to ensure that the matched keys are the same type")),(0,r.yg)("h3",{id:"data_type-string"},"data_type ","[string]"),(0,r.yg)("p",null,"redis data types, support ",(0,r.yg)("inlineCode",{parentName:"p"},"key")," ",(0,r.yg)("inlineCode",{parentName:"p"},"hash")," ",(0,r.yg)("inlineCode",{parentName:"p"},"list")," ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," ",(0,r.yg)("inlineCode",{parentName:"p"},"zset")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"key")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The value of each key will be sent downstream as a single row of data.\nFor example, the value of key is ",(0,r.yg)("inlineCode",{parentName:"p"},"SeaTunnel test message"),", the data received downstream is ",(0,r.yg)("inlineCode",{parentName:"p"},"SeaTunnel test message")," and only one message will be received.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"hash")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The hash key-value pairs will be formatted as json to be sent downstream as a single row of data.\nFor example, the value of hash is ",(0,r.yg)("inlineCode",{parentName:"p"},"name:tyrantlucifer age:26"),", the data received downstream is ",(0,r.yg)("inlineCode",{parentName:"p"},'{"name":"tyrantlucifer", "age":"26"}')," and only one message will be received.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"list")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Each element in the list will be sent downstream as a single row of data.\nFor example, the value of list is ",(0,r.yg)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.yg)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"set")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Each element in the set will be sent downstream as a single row of data\nFor example, the value of set is ",(0,r.yg)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.yg)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"zset")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Each element in the sorted set will be sent downstream as a single row of data\nFor example, the value of sorted set is ",(0,r.yg)("inlineCode",{parentName:"p"},"[tyrantlucier, CalvinKirs]"),", the data received downstream are ",(0,r.yg)("inlineCode",{parentName:"p"},"tyrantlucifer")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"CalvinKirs")," and only two message will be received.")),(0,r.yg)("h3",{id:"user-string"},"user ","[string]"),(0,r.yg)("p",null,"redis authentication user, you need it when you connect to an encrypted cluster"),(0,r.yg)("h3",{id:"auth-string"},"auth ","[string]"),(0,r.yg)("p",null,"redis authentication password, you need it when you connect to an encrypted cluster"),(0,r.yg)("h3",{id:"db_num-int"},"db_num ","[int]"),(0,r.yg)("p",null,"Redis database index ID. It is connected to db 0 by default"),(0,r.yg)("h3",{id:"mode-string"},"mode ","[string]"),(0,r.yg)("p",null,"redis mode, ",(0,r.yg)("inlineCode",{parentName:"p"},"single")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster"),", default is ",(0,r.yg)("inlineCode",{parentName:"p"},"single")),(0,r.yg)("h3",{id:"nodes-list"},"nodes ","[list]"),(0,r.yg)("p",null,"redis nodes information, used in cluster mode, must like as the following format:"),(0,r.yg)("p",null,'["host1:port1", "host2:port2"]'),(0,r.yg)("h3",{id:"format-string"},"format ","[string]"),(0,r.yg)("p",null,"the format of upstream data, now only support ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", default ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),"."),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.yg)("p",null,"you should assign schema as the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},"schema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"data"),(0,r.yg)("th",{parentName:"tr",align:null},"success"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"get success"),(0,r.yg)("td",{parentName:"tr",align:null},"true")))),(0,r.yg)("p",null,"when you assign format is ",(0,r.yg)("inlineCode",{parentName:"p"},"text"),", connector will do nothing for upstream data, for example:"),(0,r.yg)("p",null,"upstream data is the following:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,r.yg)("p",null,"connector will generate data as the following:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"content"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},'{"code":  200, "data":  "get success", "success":  true}')))),(0,r.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.yg)("h4",{id:"fields-config"},"fields ","[config]"),(0,r.yg)("p",null,"the schema fields of redis data"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"simple:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'Redis {\n  host = localhost\n  port = 6379\n  keys = "key_test*"\n  data_type = key\n  format = text\n}\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'Redis {\n  host = localhost\n  port = 6379\n  keys = "key_test*"\n  data_type = key\n  format = json\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n}\n')),(0,r.yg)("p",null,"read string type keys write append to list"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Redis {\n    host = "redis-e2e"\n    port = 6379\n    auth = "U2VhVHVubmVs"\n    keys = "string_test*"\n    data_type = string\n    batch_size = 33\n  }\n}\n\nsink {\n  Redis {\n    host = "redis-e2e"\n    port = 6379\n    auth = "U2VhVHVubmVs"\n    key = "string_test_list"\n    data_type = list\n    batch_size = 33\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}d.isMDXComponent=!0}}]);