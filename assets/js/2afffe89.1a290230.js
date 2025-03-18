"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[76278],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,m=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return t?a.createElement(m,o(o({ref:n},g),{},{components:t})):a.createElement(m,o({ref:n},g))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={},o="Hbase",l={unversionedId:"spark/configuration/sink-plugins/Hbase",id:"version-2.1.0/spark/configuration/sink-plugins/Hbase",title:"Hbase",description:"Sink plugin : Hbase [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Hbase.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Hbase",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Hbase",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Hbase.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"File",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/File"},next:{title:"Hive",permalink:"/docs/2.1.0/spark/configuration/sink-plugins/Hive"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"hbase.zookeeper.quorum string",id:"hbasezookeeperquorum-string",level:3},{value:"catalog string",id:"catalog-string",level:3},{value:"stagging_dir string",id:"stagging_dir-string",level:3},{value:"save_mode string",id:"save_mode-string",level:3},{value:"hbase.* string",id:"hbase-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],g={toc:p},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"hbase"},"Hbase"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Sink plugin : Hbase ","[Spark]")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Use ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hbase-connectors/tree/master/spark"},"hbase-connectors")," to output data to ",(0,r.yg)("inlineCode",{parentName:"p"},"Hbase")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"Hbase (>=2.1.0)")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Spark (>=2.0.0)")," version compatibility depends on ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase-connectors")," . The ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase-connectors")," in the official Apache Hbase documentation is also one of the ",(0,r.yg)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#repos"},"Apache Hbase Repos"),"."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hbase.zookeeper.quorum"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"staging_dir"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"append")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hbase.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"hbasezookeeperquorum-string"},"hbase.zookeeper.quorum ","[string]"),(0,r.yg)("p",null,"The address of the ",(0,r.yg)("inlineCode",{parentName:"p"},"zookeeper")," cluster, the format is: ",(0,r.yg)("inlineCode",{parentName:"p"},"host01:2181,host02:2181,host03:2181")),(0,r.yg)("h3",{id:"catalog-string"},"catalog ","[string]"),(0,r.yg)("p",null,"The structure of the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase")," table is defined by ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," , the name of the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase")," table and its ",(0,r.yg)("inlineCode",{parentName:"p"},"namespace")," , which ",(0,r.yg)("inlineCode",{parentName:"p"},"columns")," are used as ",(0,r.yg)("inlineCode",{parentName:"p"},"rowkey"),", and the correspondence between ",(0,r.yg)("inlineCode",{parentName:"p"},"column family")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"columns")," can be defined by ",(0,r.yg)("inlineCode",{parentName:"p"},"catalog")," ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase table catalog")),(0,r.yg)("h3",{id:"stagging_dir-string"},"stagging_dir ","[string]"),(0,r.yg)("p",null,"A path on ",(0,r.yg)("inlineCode",{parentName:"p"},"HDFS")," that will generate data that needs to be loaded into ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase")," . After the data is loaded, the data file will be deleted and the directory is still there."),(0,r.yg)("h3",{id:"save_mode-string"},"save_mode ","[string]"),(0,r.yg)("p",null,"Two write modes are supported, ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"append")," . ",(0,r.yg)("inlineCode",{parentName:"p"},"overwrite")," means that if there is data in the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase table")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"truncate")," will be performed and then the data will be loaded."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"append")," means that the original data of the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase table")," will not be cleared, and the load operation will be performed directly."),(0,r.yg)("h3",{id:"hbase-string"},"hbase.* ","[string]"),(0,r.yg)("p",null,"Users can also specify multiple optional parameters. For a detailed list of parameters, see ",(0,r.yg)("a",{parentName:"p",href:"https://hbase.apache.org/book.html#config.files"},"Hbase Supported Parameters"),"."),(0,r.yg)("p",null,"If these non-essential parameters are not specified, they will use the default values given in the official documentation."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.0/spark/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},' hbase {\n    source_table_name = "hive_dataset"\n    hbase.zookeeper.quorum = "host01:2181,host02:2181,host03:2181"\n    catalog = "{\\"table\\":{\\"namespace\\":\\"default\\", \\"name\\":\\"customer\\"},\\"rowkey\\":\\"c_custkey\\",\\"columns\\":{\\"c_custkey\\":{\\"cf\\":\\"rowkey\\", \\"col\\":\\"c_custkey\\", \\"type\\":\\"bigint\\"},\\"c_name\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_name\\", \\"type\\":\\"string\\"},\\"c_address\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_address\\", \\"type\\":\\"string\\"},\\"c_city\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_city\\", \\"type\\":\\"string\\"},\\"c_nation\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_nation\\", \\"type\\":\\"string\\"},\\"c_region\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_region\\", \\"type\\":\\"string\\"},\\"c_phone\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_phone\\", \\"type\\":\\"string\\"},\\"c_mktsegment\\":{\\"cf\\":\\"info\\", \\"col\\":\\"c_mktsegment\\", \\"type\\":\\"string\\"}}}"\n    staging_dir = "/tmp/hbase-staging/"\n    save_mode = "overwrite"\n}\n')),(0,r.yg)("p",null,"This plugin of ",(0,r.yg)("inlineCode",{parentName:"p"},"Hbase")," does not provide users with the function of creating tables, because the pre-partitioning method of the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase")," table will be related to business logic, so when running the plugin, the user needs to create the ",(0,r.yg)("inlineCode",{parentName:"p"},"hbase")," table and its pre-partition in advance; for ",(0,r.yg)("inlineCode",{parentName:"p"},"rowkey")," Design, catalog itself supports multi-column combined ",(0,r.yg)("inlineCode",{parentName:"p"},'rowkey="col1:col2:col3"')," , but if there are other design requirements for ",(0,r.yg)("inlineCode",{parentName:"p"},"rowkey")," , such as ",(0,r.yg)("inlineCode",{parentName:"p"},"add salt")," , etc., it can be completely decoupled based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"transform plugin")," pair ",(0,r.yg)("inlineCode",{parentName:"p"},"rowkey")," is modified."))}c.isMDXComponent=!0}}]);