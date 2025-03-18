"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[91972],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>c});var n=a(96540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=s(a),u=l,c=g["".concat(p,".").concat(u)]||g[u]||y[u]||r;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(58168),l=(a(96540),a(15680));const r={},o="ObsFile",i={unversionedId:"connector-v2/source/ObsFile",id:"version-2.3.9/connector-v2/source/ObsFile",title:"ObsFile",description:"Obs file source connector",source:"@site/versioned_docs/version-2.3.9/connector-v2/source/ObsFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/ObsFile",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/ObsFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/connector-v2/source/ObsFile.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"Notion",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/Notion"},next:{title:"OceanBase",permalink:"/zh-CN/docs/2.3.9/connector-v2/source/OceanBase"}},p={},s=[{value:"Support those engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Required Jar List",id:"required-jar-list",level:2},{value:"Options",id:"options",level:2},{value:"Tips",id:"tips",level:3},{value:'<span id="parse_partition_from_path"> parse_partition_from_path </span>',id:"-parse_partition_from_path-",level:4},{value:'<span id="date_format"> date_format </span>',id:"-date_format-",level:4},{value:'<span id="datetime_format"> datetime_format </span>',id:"-datetime_format-",level:3},{value:'<span id="time_format"> time_format </span>',id:"-time_format-",level:3},{value:'<span id="skip_header_row_number"> skip_header_row_number </span>',id:"-skip_header_row_number-",level:3},{value:'<span id="file_format_type"> file_format_type </span>',id:"-file_format_type-",level:3},{value:'<span id="schema"> schema  </span>',id:"-schema--",level:4},{value:"fields",id:"fields",level:5},{value:'<span id="schema"> read_columns </span>',id:"-read_columns-",level:4},{value:'<span id="common_options "> common options </span>',id:"-common-options-",level:4},{value:"Task Example",id:"task-example",level:2},{value:"text file",id:"text-file",level:3},{value:"parquet file",id:"parquet-file",level:3},{value:"orc file",id:"orc-file",level:3},{value:"json file",id:"json-file",level:3},{value:"excel file",id:"excel-file",level:3},{value:"csv file",id:"csv-file",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:s},g="wrapper";function y(e){let{components:t,...a}=e;return(0,l.yg)(g,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"obsfile"},"ObsFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Obs file source connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support those engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark"),(0,l.yg)("p",{parentName:"blockquote"},"Flink"),(0,l.yg)("p",{parentName:"blockquote"},"Seatunnel Zeta")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.yg)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel")))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from huawei cloud obs file system."),(0,l.yg)("p",null,"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",null,"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,l.yg)("p",null,"We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to OBS and this connector need some hadoop dependencies.\nIt only supports hadoop version ",(0,l.yg)("strong",{parentName:"p"},"2.9.X+"),"."),(0,l.yg)("h2",{id:"required-jar-list"},"Required Jar List"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"jar"),(0,l.yg)("th",{parentName:"tr",align:null},"supported versions"),(0,l.yg)("th",{parentName:"tr",align:null},"maven"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"hadoop-huaweicloud"),(0,l.yg)("td",{parentName:"tr",align:null},"support version >= 3.1.1.29"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://repo.huaweicloud.com/artifactory/sdk_public/org/apache/hadoop/hadoop-huaweicloud/"},"Download"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"esdk-obs-java"),(0,l.yg)("td",{parentName:"tr",align:null},"support version >= 3.19.7.3"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://repo.huaweicloud.com/artifactory/sdk_public/com/huawei/storage/esdk-obs-java/"},"Download"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"okhttp"),(0,l.yg)("td",{parentName:"tr",align:null},"support version >= 3.11.0"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/"},"Download"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"okio"),(0,l.yg)("td",{parentName:"tr",align:null},"support version >= 1.14.0"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"https://repo1.maven.org/maven2/com/squareup/okio/okio/"},"Download"))))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy them to the '$SEATUNNEL_HOME/plugins/jdbc/lib/' working directory."),(0,l.yg)("p",{parentName:"blockquote"},"And copy all jars to $SEATUNNEL_HOME/lib/")),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default"),(0,l.yg)("th",{parentName:"tr",align:null},"description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The target dir path")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"File type.",(0,l.yg)("a",{parentName:"td",href:"#file_format_type"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bucket"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The bucket address of obs file system, for example: ",(0,l.yg)("inlineCode",{parentName:"td"},"obs://obs-bucket-name"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The access key of obs file system")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The access secret of obs file system")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The endpoint of obs file system")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection.",(0,l.yg)("a",{parentName:"td",href:"#read_columns"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001"),(0,l.yg)("td",{parentName:"tr",align:null},"Field delimiter, used to tell connector how to slice and dice fields when reading text files")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path. ",(0,l.yg)("a",{parentName:"td",href:"#parse_partition_from_path"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,l.yg)("td",{parentName:"tr",align:null},"Date type format, used to tell the connector how to convert string to date.",(0,l.yg)("a",{parentName:"td",href:"#date_format"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Datetime type format, used to tell the connector how to convert string to datetime.",(0,l.yg)("a",{parentName:"td",href:"#datetime_format"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,l.yg)("td",{parentName:"tr",align:null},"Time type format, used to tell the connector how to convert string to time.",(0,l.yg)("a",{parentName:"td",href:"#time_format"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#schema"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#common_options"},"Tips"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")))),(0,l.yg)("h3",{id:"tips"},"Tips"),(0,l.yg)("h4",{id:"-parse_partition_from_path-"},(0,l.yg)("span",{id:"parse_partition_from_path"}," parse_partition_from_path ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Control whether parse the partition keys and values from file path"),(0,l.yg)("p",{parentName:"blockquote"},"For example if you read a file from path ",(0,l.yg)("inlineCode",{parentName:"p"},"obs://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")),(0,l.yg)("p",{parentName:"blockquote"},"Every record data from the file will be added these two fields:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26")))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Do not define partition fields in schema option")),(0,l.yg)("h4",{id:"-date_format-"},(0,l.yg)("span",{id:"date_format"}," date_format ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Date type format, used to tell the connector how to convert string to date, supported as the following formats:"),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd")),(0,l.yg)("p",{parentName:"blockquote"},"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd"))),(0,l.yg)("h3",{id:"-datetime_format-"},(0,l.yg)("span",{id:"datetime_format"}," datetime_format ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Datetime type format, used to tell the connector how to convert string to datetime, supported as the following formats:"),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyyMMddHHmmss")),(0,l.yg)("p",{parentName:"blockquote"},"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss"))),(0,l.yg)("h3",{id:"-time_format-"},(0,l.yg)("span",{id:"time_format"}," time_format ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Time type format, used to tell the connector how to convert string to time, supported as the following formats:"),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss.SSS")),(0,l.yg)("p",{parentName:"blockquote"},"default ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss"))),(0,l.yg)("h3",{id:"-skip_header_row_number-"},(0,l.yg)("span",{id:"skip_header_row_number"}," skip_header_row_number ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Skip the first few lines, but only for the txt and csv."),(0,l.yg)("p",{parentName:"blockquote"},"For example, set like following:"),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"skip_header_row_number = 2")),(0,l.yg)("p",{parentName:"blockquote"},"Then Seatunnel will skip the first 2 lines from source files")),(0,l.yg)("h3",{id:"-file_format_type-"},(0,l.yg)("span",{id:"file_format_type"}," file_format_type ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"File type, supported as the following file types:"),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")),(0,l.yg)("p",{parentName:"blockquote"},"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell the connector how to parse data to the row you want."),(0,l.yg)("p",{parentName:"blockquote"},"For example,upstream data is the following:"),(0,l.yg)("pre",{parentName:"blockquote"},(0,l.yg)("code",{parentName:"pre",className:"language-json"},""))),(0,l.yg)("p",null,'{"code":  200, "data":  "get success", "success":  true}'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'\n> You can also save multiple pieces of data in one file and split them by one newline:\n\n```json lines\n\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"you should assign schema as the following:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"connector will generate data as the following:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.yg)("p",{parentName:"blockquote"},"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,l.yg)("p",{parentName:"blockquote"},"For example, upstream data is the following:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If you do not assign data schema connector will treat the upstream data as the following:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"content"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If you assign data schema, you should also assign the option ",(0,l.yg)("inlineCode",{parentName:"p"},"delimiter")," too except CSV file type"),(0,l.yg)("p",{parentName:"blockquote"},"you should assign schema and delimiter as the following:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\ndelimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"connector will generate data as the following:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"gender"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26"),(0,l.yg)("td",{parentName:"tr",align:null},"male")))),(0,l.yg)("h4",{id:"-schema--"},(0,l.yg)("span",{id:"schema"}," schema  ")),(0,l.yg)("h5",{id:"fields"},"fields"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The schema of upstream data.")),(0,l.yg)("h4",{id:"-read_columns-"},(0,l.yg)("span",{id:"schema"}," read_columns ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The read column list of the data source, user can use it to implement field projection."),(0,l.yg)("p",{parentName:"blockquote"},"The file type supported column projection as the following shown:")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"text"),(0,l.yg)("li",{parentName:"ul"},"json"),(0,l.yg)("li",{parentName:"ul"},"csv"),(0,l.yg)("li",{parentName:"ul"},"orc"),(0,l.yg)("li",{parentName:"ul"},"parquet"),(0,l.yg)("li",{parentName:"ul"},"excel")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"If the user wants to use this feature when reading ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," files, the schema option must be configured")),(0,l.yg)("h4",{id:"-common-options-"},(0,l.yg)("span",{id:"common_options "}," common options ")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"../source-common-options.md"},"Source Common Options")," for details.")),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"text-file"},"text file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For text file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/text"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "text"\n  }\n\n')),(0,l.yg)("h3",{id:"parquet-file"},"parquet file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For parquet file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/parquet"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "parquet"\n  }\n\n')),(0,l.yg)("h3",{id:"orc-file"},"orc file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For orc file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/orc"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "orc"\n  }\n\n')),(0,l.yg)("h3",{id:"json-file"},"json file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For json file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/json"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "json"\n  }\n\n')),(0,l.yg)("h3",{id:"excel-file"},"excel file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For excel file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/excel"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "excel"\n  }\n\n')),(0,l.yg)("h3",{id:"csv-file"},"csv file"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"For csv file format simple config")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  ObsFile {\n    path = "/seatunnel/csv"\n    bucket = "obs://obs-bucket-name"\n    access_key = "xxxxxxxxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxxxxxxx"\n    endpoint = "obs.xxxxxx.myhuaweicloud.com"\n    file_format_type = "csv"\n    delimiter = ","\n  }\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"next-version"},"next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Obs File Source Connector")))}y.isMDXComponent=!0}}]);