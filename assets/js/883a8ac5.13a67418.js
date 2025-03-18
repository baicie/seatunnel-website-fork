"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[67970],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),m=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=m(e.components);return r.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,y=p["".concat(g,".").concat(d)]||p[d]||s[d]||l;return n?r.createElement(y,i(i({ref:t},o),{},{components:n})):r.createElement(y,i({ref:t},o))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var u={};for(var g in t)hasOwnProperty.call(t,g)&&(u[g]=t[g]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const l={},i=void 0,u={unversionedId:"configuration/input-plugins/RedisStream",id:"version-1.x/configuration/input-plugins/RedisStream",title:"RedisStream",description:"Input plugin : RedisStream [Streaming]",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/RedisStream.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/RedisStream",permalink:"/docs/1.x/configuration/input-plugins/RedisStream",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/RedisStream.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"MySQL",permalink:"/docs/1.x/configuration/input-plugins/MySQL"},next:{title:"S3",permalink:"/docs/1.x/configuration/input-plugins/S3"}},g={},m=[{value:"Input plugin : RedisStream Streaming",id:"input-plugin--redisstream-streaming",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"host string",id:"host-string",level:5},{value:"prefKey string",id:"prefkey-string",level:5},{value:"queue string",id:"queue-string",level:5},{value:"password string",id:"password-string",level:5},{value:"maxTotal number",id:"maxtotal-number",level:5},{value:"maxIdle number",id:"maxidle-number",level:5},{value:"maxWaitMillis number",id:"maxwaitmillis-number",level:5},{value:"connectionTimeout number",id:"connectiontimeout-number",level:5},{value:"soTimeout number",id:"sotimeout-number",level:5},{value:"maxAttempts number",id:"maxattempts-number",level:5},{value:"Example",id:"example",level:3}],o={toc:m},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"input-plugin--redisstream-streaming"},"Input plugin : RedisStream ","[Streaming]"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,a.yg)("li",{parentName:"ul"},"Homepage: ",(0,a.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,a.yg)("li",{parentName:"ul"},"Version: 1.1.0")),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"Read data from Redis."),(0,a.yg)("h3",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#host-string"},"host")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#prefKey-string"},"prefKey")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#queue-string"},"queue")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#password-string"},"password")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#maxTotal-number"},"maxTotal")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"200")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#maxIdle-number"},"maxIdle")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"200")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#maxWaitMillis-number"},"maxWaitMillis")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"2000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#connectionTimeout-number"},"connectionTimeout")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"5000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#soTimeout-number"},"soTimeout")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"5000")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#maxAttempts-number"},"maxAttempts")),(0,a.yg)("td",{parentName:"tr",align:null},"number"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"5")))),(0,a.yg)("h5",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"redis cluster server host"),(0,a.yg)("h5",{id:"prefkey-string"},"prefKey ","[string]"),(0,a.yg)("p",null,"redis key prefix , Splicing mode: prefKey + ':' + key"),(0,a.yg)("h5",{id:"queue-string"},"queue ","[string]"),(0,a.yg)("p",null,"redis queue name , Data stored to queue"),(0,a.yg)("h5",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"redis password"),(0,a.yg)("h5",{id:"maxtotal-number"},"maxTotal ","[number]"),(0,a.yg)("p",null,"redis maxTotal config"),(0,a.yg)("h5",{id:"maxidle-number"},"maxIdle ","[number]"),(0,a.yg)("p",null,"redis maxIdle config"),(0,a.yg)("h5",{id:"maxwaitmillis-number"},"maxWaitMillis ","[number]"),(0,a.yg)("p",null,"redis maxWaitMillis config"),(0,a.yg)("h5",{id:"connectiontimeout-number"},"connectionTimeout ","[number]"),(0,a.yg)("p",null,"redis connectionTimeout config"),(0,a.yg)("h5",{id:"sotimeout-number"},"soTimeout ","[number]"),(0,a.yg)("p",null,"redis soTimeout config"),(0,a.yg)("h5",{id:"maxattempts-number"},"maxAttempts ","[number]"),(0,a.yg)("p",null,"redis maxAttempts config"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'RedisStream {\n    host = "127.0.0.1:7000,127.0.0.1:7001,127.0.0.1:7002"\n    prefKey = "api"\n    queue = "test"\n    password = "root"\n}\n')))}s.isMDXComponent=!0}}]);