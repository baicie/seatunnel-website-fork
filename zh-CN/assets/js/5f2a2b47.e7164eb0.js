"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2770],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,d=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9602:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const o={},i="Common Options",l={unversionedId:"connector/sink/common-options",id:"version-2.1.1/connector/sink/common-options",title:"Common Options",description:"Sink Plugin common parameters",source:"@site/versioned_docs/version-2.1.1/connector/sink/common-options.md",sourceDirName:"connector/sink",slug:"/connector/sink/common-options",permalink:"/zh-CN/docs/2.1.1/connector/sink/common-options",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/sink/common-options.md",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"TiDb",permalink:"/zh-CN/docs/2.1.1/connector/sink/Tidb"},next:{title:"Common Options",permalink:"/zh-CN/docs/2.1.1/transform/common-options"}},s={},c=[{value:"Sink Plugin common parameters",id:"sink-plugin-common-parameters",level:2},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"common-options"},"Common Options"),(0,a.yg)("h2",{id:"sink-plugin-common-parameters"},"Sink Plugin common parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,a.yg)("inlineCode",{parentName:"p"},"dataset")," output by the previous plugin in the configuration file;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plug-in is processing the data set corresponding to this parameter."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake"\n      sql = "select name from fake"\n      result_table_name = "fake_name"\n    }\n    sql {\n      source_table_name = "fake"\n      sql = "select age from fake"\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    console {\n      source_table_name = "fake_name"\n    }\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the console outputs the data of the last transform, and if it is set to ",(0,a.yg)("inlineCode",{parentName:"p"},"fake_name")," , it will output the data of ",(0,a.yg)("inlineCode",{parentName:"p"},"fake_name"))))}u.isMDXComponent=!0}}]);