"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[34943],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=o(a),u=r,c=y["".concat(p,".").concat(u)]||y[u]||m[u]||l;return a?n.createElement(c,g(g({ref:t},d),{},{components:a})):n.createElement(c,g({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[y]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=a[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},50029:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(58168),r=(a(96540),a(15680));const l={},g="Apache Iceberg",i={unversionedId:"connector-v2/sink/Iceberg",id:"connector-v2/sink/Iceberg",title:"Apache Iceberg",description:"Apache Iceberg sink\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Iceberg.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Iceberg",permalink:"/zh-CN/docs/connector-v2/sink/Iceberg",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Iceberg.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/zh-CN/docs/connector-v2/sink/Hudi"},next:{title:"InfluxDB",permalink:"/zh-CN/docs/connector-v2/sink/InfluxDB"}},p={},o=[{value:"Iceberg \u7248\u672c\u652f\u6301",id:"iceberg-\u7248\u672c\u652f\u6301",level:2},{value:"\u5f15\u64ce\u652f\u6301",id:"\u5f15\u64ce\u652f\u6301",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u4e3b\u8981\u7279\u6027",id:"\u4e3b\u8981\u7279\u6027",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f",level:2},{value:"\u6570\u636e\u5e93\u4f9d\u8d56",id:"\u6570\u636e\u5e93\u4f9d\u8d56",level:2},{value:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04",level:2},{value:"Sink \u9009\u9879",id:"sink-\u9009\u9879",level:2},{value:"\u4efb\u52a1\u793a\u4f8b",id:"\u4efb\u52a1\u793a\u4f8b",level:2},{value:"\u7b80\u5355\u793a\u4f8b:",id:"\u7b80\u5355\u793a\u4f8b",level:3},{value:"Hive Catalog:",id:"hive-catalog",level:3},{value:"Hadoop catalog:",id:"hadoop-catalog",level:3},{value:"Multiple table\uff08\u591a\u8868\u5199\u5165\uff09",id:"multiple-table\u591a\u8868\u5199\u5165",level:3},{value:"\u793a\u4f8b1",id:"\u793a\u4f8b1",level:4},{value:"\u793a\u4f8b2",id:"\u793a\u4f8b2",level:4},{value:"Changelog\uff08\u53d8\u66f4\u65e5\u5fd7\uff09",id:"changelog\u53d8\u66f4\u65e5\u5fd7",level:2},{value:"2.3.4-SNAPSHOT 2024-01-18",id:"234-snapshot-2024-01-18",level:3},{value:"next version",id:"next-version",level:3}],d={toc:o},y="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(y,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"apache-iceberg"},"Apache Iceberg"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Apache Iceberg sink\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"iceberg-\u7248\u672c\u652f\u6301"},"Iceberg \u7248\u672c\u652f\u6301"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1.4.2")),(0,r.yg)("h2",{id:"\u5f15\u64ce\u652f\u6301"},"\u5f15\u64ce\u652f\u6301"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeaTunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"Apache Iceberg \u76ee\u6807\u8fde\u63a5\u5668\u652f\u6301cdc\u6a21\u5f0f\u3001\u81ea\u52a8\u5efa\u8868\u53ca\u8868\u7ed3\u6784\u53d8\u66f4."),(0,r.yg)("h2",{id:"\u4e3b\u8981\u7279\u6027"},"\u4e3b\u8981\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u652f\u6301\u591a\u8868\u5199\u5165"))),(0,r.yg)("h2",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"},"\u652f\u6301\u7684\u6570\u636e\u6e90\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6570\u636e\u6e90"),(0,r.yg)("th",{parentName:"tr",align:null},"\u4f9d\u8d56\u9879"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven\u4f9d\u8d56"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"hive-exec"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.hive/hive-exec"},"\u4e0b\u8f7d"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Iceberg"),(0,r.yg)("td",{parentName:"tr",align:null},"libfb303"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.thrift/libfb303"},"\u4e0b\u8f7d"))))),(0,r.yg)("h2",{id:"\u6570\u636e\u5e93\u4f9d\u8d56"},"\u6570\u636e\u5e93\u4f9d\u8d56"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4e3a\u4e86\u786e\u4fdd\u4e0e\u4e0d\u540c\u7248\u672c\u7684 Hadoop \u548c Hive \u517c\u5bb9\uff0c\u9879\u76ee pom \u6587\u4ef6\u4e2d\u7684 hive-exec \u4f9d\u8d56\u8303\u56f4\u88ab\u8bbe\u7f6e\u4e3a provided\u3002\u56e0\u6b64\uff0c\u5982\u679c\u60a8\u4f7f\u7528 Flink \u5f15\u64ce\uff0c\u53ef\u80fd\u9700\u8981\u5c06\u4ee5\u4e0b Jar \u5305\u6dfb\u52a0\u5230 <FLINK_HOME>/lib \u76ee\u5f55\u4e2d\uff1b\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Spark \u5f15\u64ce\u5e76\u4e14\u5df2\u7ecf\u96c6\u6210\u4e86 Hadoop\uff0c\u5219\u65e0\u9700\u6dfb\u52a0\u4ee5\u4e0b Jar \u5305\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hive-exec-xxx.jar\nlibfb303-xxx.jar\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u67d0\u4e9b\u7248\u672c\u7684 hive-exec \u5305\u4e2d\u4e0d\u5305\u542b libfb303-xxx.jar\uff0c\u56e0\u6b64\u60a8\u8fd8\u9700\u8981\u624b\u52a8\u5bfc\u5165\u8be5 Jar \u5305\u3002")),(0,r.yg)("h2",{id:"\u6570\u636e\u7c7b\u578b\u6620\u5c04"},"\u6570\u636e\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SeaTunnel \u6570\u636e\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"Iceberg \u6570\u636e\u7c7b\u578b"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"LONG")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"FIXED",(0,r.yg)("br",null),"BINARY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"LIST")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")))),(0,r.yg)("h2",{id:"sink-\u9009\u9879"},"Sink \u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,r.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"default"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u6307\u5b9a\u7684\u76ee\u5f55\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a",(0,r.yg)("inlineCode",{parentName:"td"},"default"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"namespace"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"default"),(0,r.yg)("td",{parentName:"tr",align:null},"backend catalog\uff08\u5143\u6570\u636e\u5b58\u50a8\u7684\u540e\u7aef\u76ee\u5f55\uff09\u4e2d Iceberg \u6570\u636e\u5e93\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"default"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"backend catalog\uff08\u5143\u6570\u636e\u5b58\u50a8\u7684\u540e\u7aef\u76ee\u5f55\uff09\u4e2d Iceberg \u8868\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.catalog.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'\u7528\u4e8e\u6307\u5b9a\u521d\u59cb\u5316 Iceberg Catalog \u7684\u5c5e\u6027\uff0c\u8fd9\u4e9b\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003\u6b64\u6587\u4ef6\uff1a"',(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/iceberg/blob/main/core/src/main/java/org/apache/iceberg/CatalogProperties.java%22"},'https://github.com/apache/iceberg/blob/main/core/src/main/java/org/apache/iceberg/CatalogProperties.java"'))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hadoop.config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 Hadoop \u914d\u7f6e\u7684\u5c5e\u6027")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.hadoop-conf-path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"td"},"core-site.xml"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"hdfs-site.xml"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"hive-site.xml")," \u6587\u4ef6\u7684\u52a0\u8f7d\u8def\u5f84")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"case_sensitive"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5217\u540d\u5339\u914d\u65f6\u662f\u5426\u533a\u5206\u5927\u5c0f\u5199")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.write-props"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4f20\u9012\u7ed9 Iceberg \u5199\u5165\u5668\u521d\u59cb\u5316\u7684\u5c5e\u6027\uff0c\u8fd9\u4e9b\u5c5e\u6027\u5177\u6709\u6700\u9ad8\u4f18\u5148\u7ea7\uff0c\u4f8b\u5982 ",(0,r.yg)("inlineCode",{parentName:"td"},"write.format.default"),"\u3001",(0,r.yg)("inlineCode",{parentName:"td"},"write.target-file-size-bytes")," \u7b49\u8bbe\u7f6e\u3002\u5177\u4f53\u53c2\u6570\u53ef\u4ee5\u53c2\u8003\uff1a'",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/iceberg/blob/main/core/src/main/java/org/apache/iceberg/TableProperties.java'"},"https://github.com/apache/iceberg/blob/main/core/src/main/java/org/apache/iceberg/TableProperties.java'"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.auto-create-props"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Iceberg \u81ea\u52a8\u5efa\u8868\u65f6\u6307\u5b9a\u7684\u914d\u7f6e")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.schema-evolution-enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e3a true \u65f6\uff0cIceberg \u8868\u53ef\u4ee5\u5728\u540c\u6b65\u8fc7\u7a0b\u4e2d\u652f\u6301 schema \u53d8\u66f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.primary-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6807\u8bc6\u8868\u4e2d\u4e00\u884c\u6570\u636e\u7684\u4e3b\u952e\u5217\u5217\u8868\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ee5\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.partition-keys"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8868\u65f6\u4f7f\u7528\u7684\u5206\u533a\u5b57\u6bb5\u5217\u8868\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ee5\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.upsert-mode-enabled"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"true")," \u4ee5\u542f\u7528 upsert \u6a21\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.yg)("inlineCode",{parentName:"td"},"false"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,r.yg)("td",{parentName:"tr",align:null},"schema \u53d8\u66f4\u65b9\u5f0f, \u8bf7\u53c2\u8003\u4e0b\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"schema_save_mode"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"Enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5199\u5165\u65b9\u5f0f, \u8bf7\u53c2\u8003\u4e0b\u9762\u7684 ",(0,r.yg)("inlineCode",{parentName:"td"},"data_save_mode"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_sql"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"td"},"delete")," \u6570\u636e\u7684 SQL \u8bed\u53e5\uff0c\u7528\u4e8e\u6570\u636e\u5199\u5165\u65b9\u5f0f\u3002\u4f8b\u5982\uff1a ",(0,r.yg)("inlineCode",{parentName:"td"},"delete from ... where ..."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"iceberg.table.commit-branch"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"\u63d0\u4ea4\u7684\u9ed8\u8ba4\u5206\u652f")))),(0,r.yg)("h2",{id:"\u4efb\u52a1\u793a\u4f8b"},"\u4efb\u52a1\u793a\u4f8b"),(0,r.yg)("h3",{id:"\u7b80\u5355\u793a\u4f8b"},"\u7b80\u5355\u793a\u4f8b:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  MySQL-CDC {\n    plugin_output = "customers_mysql_cdc_iceberg"\n    server-id = 5652\n    username = "st_user"\n    password = "seatunnel"\n    table-names = ["mysql_cdc.mysql_cdc_e2e_source_table"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/mysql_cdc"\n  }\n}\n\ntransform {\n}\n\nsink {\n  Iceberg {\n    catalog_name="seatunnel_test"\n    iceberg.catalog.config={\n      "type"="hadoop"\n      "warehouse"="file:///tmp/seatunnel/iceberg/hadoop-sink/"\n    }\n    namespace="seatunnel_namespace"\n    table="iceberg_sink_table"\n    iceberg.table.write-props={\n      write.format.default="parquet"\n      write.target-file-size-bytes=536870912\n    }\n    iceberg.table.primary-keys="id"\n    iceberg.table.partition-keys="f_datetime"\n    iceberg.table.upsert-mode-enabled=true\n    iceberg.table.schema-evolution-enabled=true\n    case_sensitive=true\n  }\n}\n')),(0,r.yg)("h3",{id:"hive-catalog"},"Hive Catalog:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Iceberg {\n    catalog_name="seatunnel_test"\n    iceberg.catalog.config={\n      type = "hive"\n      uri = "thrift://localhost:9083"\n      warehouse = "hdfs://your_cluster//tmp/seatunnel/iceberg/"\n    }\n    namespace="seatunnel_namespace"\n    table="iceberg_sink_table"\n    iceberg.table.write-props={\n      write.format.default="parquet"\n      write.target-file-size-bytes=536870912\n    }\n    iceberg.table.primary-keys="id"\n    iceberg.table.partition-keys="f_datetime"\n    iceberg.table.upsert-mode-enabled=true\n    iceberg.table.schema-evolution-enabled=true\n    case_sensitive=true\n  }\n}\n')),(0,r.yg)("h3",{id:"hadoop-catalog"},"Hadoop catalog:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  Iceberg {\n    catalog_name="seatunnel_test"\n    iceberg.catalog.config={\n      type = "hadoop"\n      warehouse = "hdfs://your_cluster/tmp/seatunnel/iceberg/"\n    }\n    namespace="seatunnel_namespace"\n    table="iceberg_sink_table"\n    iceberg.table.write-props={\n      write.format.default="parquet"\n      write.target-file-size-bytes=536870912\n    }\n    iceberg.table.primary-keys="id"\n    iceberg.table.partition-keys="f_datetime"\n    iceberg.table.upsert-mode-enabled=true\n    iceberg.table.schema-evolution-enabled=true\n    case_sensitive=true\n  }\n}\n\n')),(0,r.yg)("h3",{id:"multiple-table\u591a\u8868\u5199\u5165"},"Multiple table\uff08\u591a\u8868\u5199\u5165\uff09"),(0,r.yg)("h4",{id:"\u793a\u4f8b1"},"\u793a\u4f8b1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n}\n\nsource {\n  Mysql-CDC {\n    base-url = "jdbc:mysql://127.0.0.1:3306/seatunnel"\n    username = "root"\n    password = "******"\n    \n    table-names = ["seatunnel.role","seatunnel.user","galileo.Bucket"]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Iceberg {\n    ...\n    namespace = "${database_name}_test"\n    table = "${table_name}_test"\n  }\n}\n')),(0,r.yg)("h4",{id:"\u793a\u4f8b2"},"\u793a\u4f8b2"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Jdbc {\n    driver = oracle.jdbc.driver.OracleDriver\n    url = "jdbc:oracle:thin:@localhost:1521/XE"\n    user = testUser\n    password = testPassword\n\n    table_list = [\n      {\n        table_path = "TESTSCHEMA.TABLE_1"\n      },\n      {\n        table_path = "TESTSCHEMA.TABLE_2"\n      }\n    ]\n  }\n}\n\ntransform {\n}\n\nsink {\n  Iceberg {\n    ...\n    namespace = "${schema_name}_test"\n    table = "${table_name}_test"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog\u53d8\u66f4\u65e5\u5fd7"},"Changelog\uff08\u53d8\u66f4\u65e5\u5fd7\uff09"),(0,r.yg)("h3",{id:"234-snapshot-2024-01-18"},"2.3.4-SNAPSHOT 2024-01-18"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Iceberg Sink Connector")),(0,r.yg)("h3",{id:"next-version"},"next version"))}m.isMDXComponent=!0}}]);