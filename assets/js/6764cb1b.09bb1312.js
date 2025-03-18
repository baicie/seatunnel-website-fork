"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[62658],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=g(n),u=r,d=s["".concat(p,".").concat(u)]||s[u]||y[u]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const i={},l="File",o={unversionedId:"flink/configuration/sink-plugins/File",id:"version-2.1.0/flink/configuration/sink-plugins/File",title:"File",description:"Sink plugin : File [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/File.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/File",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/File",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/File.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/Elasticsearch"},next:{title:"InfluxDB",permalink:"/docs/2.1.0/flink/configuration/sink-plugins/InfluxDb"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:3},{value:"path string",id:"path-string",level:3},{value:"path_time_format string",id:"path_time_format-string",level:3},{value:"write_mode string",id:"write_mode-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],m={toc:g},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"file"},"File"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sink plugin : File ","[Flink]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Write data to the file system"),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"path_time_format"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"yyyyMMddHHmmss")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"write_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"parallelism"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"format-string"},"format ","[string]"),(0,r.yg)("p",null,"Currently, ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"json")," , and ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," are supported. The streaming mode currently only supports ",(0,r.yg)("inlineCode",{parentName:"p"},"text")),(0,r.yg)("h3",{id:"path-string"},"path ","[string]"),(0,r.yg)("p",null,"The file path is required. The ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,r.yg)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,r.yg)("inlineCode",{parentName:"p"},"file://"),",\nwe can add the variable ",(0,r.yg)("inlineCode",{parentName:"p"},"${now}")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"${uuid}")," in the path, like ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs:///test_${uuid}_${now}.txt"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,r.yg)("inlineCode",{parentName:"p"},"path_time_format")),(0,r.yg)("h3",{id:"path_time_format-string"},"path_time_format ","[string]"),(0,r.yg)("p",null,"When the format in the ",(0,r.yg)("inlineCode",{parentName:"p"},"path")," parameter is ",(0,r.yg)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"path_time_format")," can specify the time format of the path, and the default value is ",(0,r.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"y"),(0,r.yg)("td",{parentName:"tr",align:null},"Year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"M"),(0,r.yg)("td",{parentName:"tr",align:null},"Month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"d"),(0,r.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"H"),(0,r.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"m"),(0,r.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"s"),(0,r.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,r.yg)("h3",{id:"write_mode-string"},"write_mode ","[string]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"NO_OVERWRITE"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"No overwrite, there is an error in the path"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"OVERWRITE"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Overwrite, delete and then write if the path exists")))),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,r.yg)("h3",{id:"parallelism-int"},"parallelism ","[",(0,r.yg)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,r.yg)("p",null,"The parallelism of an individual operator, for FileSink"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'  FileSink {\n    format = "json"\n    path = "hdfs://localhost:9000/flink/output/"\n    write_mode = "OVERWRITE"\n  }\n')))}y.isMDXComponent=!0}}]);