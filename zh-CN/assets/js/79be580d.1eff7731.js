"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[12699,821],{15680:(t,e,n)=>{n.d(e,{xA:()=>c,yg:()=>m});var a=n(96540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,c=g(t,["components","mdxType","originalType","parentName"]),d=p(n),y=r,m=d["".concat(i,".").concat(y)]||d[y]||u[y]||l;return n?a.createElement(m,o(o({ref:e},c),{},{components:n})):a.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=y;var g={};for(var i in e)hasOwnProperty.call(e,i)&&(g[i]=e[i]);g.originalType=t,g[d]="string"==typeof t?t:r,o[1]=g;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9839:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,g={unversionedId:"connector-v2/changelog/connector-qdrant",id:"connector-v2/changelog/connector-qdrant",title:"connector-qdrant",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-qdrant.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-qdrant",permalink:"/zh-CN/docs/connector-v2/changelog/connector-qdrant",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-qdrant.md",tags:[],version:"current",frontMatter:{}},i={},p=[],c={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,r.yg)(d,(0,a.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve]"," restruct connector common options (#8634)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/f3499a6eeb"},"https://github.com/apache/seatunnel/commit/f3499a6eeb")),(0,r.yg)("td",{parentName:"tr",align:null},"dev")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support Qdrant sink and source connector (#7299)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c8590716ae"},"https://github.com/apache/seatunnel/commit/c8590716ae")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.8"))))))}u.isMDXComponent=!0},35808:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>g,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680)),l=n(9839);const o={},g="Qdrant",i={unversionedId:"connector-v2/sink/Qdrant",id:"connector-v2/sink/Qdrant",title:"Qdrant",description:"Qdrant \u6570\u636e\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Qdrant.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Qdrant",permalink:"/zh-CN/docs/connector-v2/sink/Qdrant",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Qdrant.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pulsar",permalink:"/zh-CN/docs/connector-v2/sink/Pulsar"},next:{title:"Rabbitmq",permalink:"/zh-CN/docs/connector-v2/sink/Rabbitmq"}},p={},c=[{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"collection_name string",id:"collection_name-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"api_key string",id:"api_key-string",level:3},{value:"use_tls bool",id:"use_tls-bool",level:3},{value:"\u901a\u7528\u9009\u9879",id:"\u901a\u7528\u9009\u9879",level:3},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2}],d={toc:c},u="wrapper";function y(t){let{components:e,...n}=t;return(0,r.yg)(u,(0,a.A)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"qdrant"},"Qdrant"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Qdrant \u6570\u636e\u8fde\u63a5\u5668")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://qdrant.tech/"},"Qdrant")," \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u7684\u5411\u91cf\u641c\u7d22\u5f15\u64ce\u548c\u5411\u91cf\u6570\u636e\u5e93\u3002"),(0,r.yg)("p",null,"\u8be5\u8fde\u63a5\u5668\u53ef\u7528\u4e8e\u5c06\u6570\u636e\u5199\u5165 Qdrant \u96c6\u5408\u3002"),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Qdrant \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BFLOAT16_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"DENSE_VECTOR")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_FLOAT_VECTOR"),(0,r.yg)("td",{parentName:"tr",align:null},"SPARSE_VECTOR")))),(0,r.yg)("p",null,"\u4e3b\u952e\u5217\u7684\u503c\u5c06\u7528\u4f5c Qdrant \u4e2d\u7684\u70b9 ID\u3002\u5982\u679c\u6ca1\u6709\u4e3b\u952e\uff0c\u5219\u5c06\u4f7f\u7528\u968f\u673a UUID\u3002"),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u586b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"collection_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"host"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"localhost")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"port"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"6334")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"use_tls"),(0,r.yg)("td",{parentName:"tr",align:null},"bool"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"collection_name-string"},"collection_name ","[string]"),(0,r.yg)("p",null,"\u8981\u4ece\u4e2d\u8bfb\u53d6\u6570\u636e\u7684 Qdrant \u96c6\u5408\u7684\u540d\u79f0\u3002"),(0,r.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,r.yg)("p",null,"\u6bcf\u4e2a upsert \u8bf7\u6c42\u5230 Qdrant \u7684\u6279\u91cf\u5927\u5c0f\u3002"),(0,r.yg)("h3",{id:"host-string"},"host ","[string]"),(0,r.yg)("p",null,'Qdrant \u5b9e\u4f8b\u7684\u4e3b\u673a\u540d\u3002\u9ed8\u8ba4\u4e3a "localhost"\u3002'),(0,r.yg)("h3",{id:"port-int"},"port ","[int]"),(0,r.yg)("p",null,"Qdrant \u5b9e\u4f8b\u7684 gRPC \u7aef\u53e3\u3002"),(0,r.yg)("h3",{id:"api_key-string"},"api_key ","[string]"),(0,r.yg)("p",null,"\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684 API \u5bc6\u94a5\uff08\u5982\u679c\u8bbe\u7f6e\uff09\u3002"),(0,r.yg)("h3",{id:"use_tls-bool"},"use_tls ","[bool]"),(0,r.yg)("p",null,"\u662f\u5426\u4f7f\u7528 TLS\uff08SSL\uff09\u8fde\u63a5\u3002\u5982\u679c\u4f7f\u7528 Qdrant \u4e91\uff08https\uff09\uff0c\u5219\u9700\u8981\u3002"),(0,r.yg)("h3",{id:"\u901a\u7528\u9009\u9879"},"\u901a\u7528\u9009\u9879"),(0,r.yg)("p",null,"\u63a5\u6536\u63d2\u4ef6\u7684\u901a\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink-common-options"},"\u6e90\u901a\u7528\u9009\u9879"),"\u4e86\u89e3\u8be6\u60c5\u3002"),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}y.isMDXComponent=!0}}]);