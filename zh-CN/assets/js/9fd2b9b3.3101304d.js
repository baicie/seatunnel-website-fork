"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[37442],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),y=o(t),d=l,u=y["".concat(p,".").concat(d)]||y[d]||s[d]||r;return t?a.createElement(u,i(i({ref:n},m),{},{components:t})):a.createElement(u,i({ref:n},m))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var g={};for(var p in n)hasOwnProperty.call(n,p)&&(g[p]=n[p]);g.originalType=e,g[y]="string"==typeof e?e:l,i[1]=g;for(var o=2;o<r;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},15149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>g,toc:()=>o});var a=t(58168),l=(t(96540),t(15680));const r={},i="OssJindoFile",g={unversionedId:"connector-v2/sink/OssJindoFile",id:"connector-v2/sink/OssJindoFile",title:"OssJindoFile",description:"OssJindo file sink \u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/OssJindoFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/OssJindoFile",permalink:"/zh-CN/docs/connector-v2/sink/OssJindoFile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/OssJindoFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"OssFile",permalink:"/zh-CN/docs/connector-v2/sink/OssFile"},next:{title:"Paimon",permalink:"/zh-CN/docs/connector-v2/sink/Paimon"}},p={},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"path string",id:"path-string",level:3},{value:"bucket string",id:"bucket-string",level:3},{value:"access_key string",id:"access_key-string",level:3},{value:"access_secret string",id:"access_secret-string",level:3},{value:"endpoint string",id:"endpoint-string",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"max_rows_in_memory int",id:"max_rows_in_memory-int",level:3},{value:"sheet_name string",id:"sheet_name-string",level:3},{value:"csv_string_quote_mode string",id:"csv_string_quote_mode-string",level:3},{value:"xml_root_tag string",id:"xml_root_tag-string",level:3},{value:"xml_row_tag string",id:"xml_row_tag-string",level:3},{value:"xml_use_attr_format boolean",id:"xml_use_attr_format-boolean",level:3},{value:"parquet_avro_write_timestamp_as_int96 boolean",id:"parquet_avro_write_timestamp_as_int96-boolean",level:3},{value:"parquet_avro_write_fixed_as_int96 array",id:"parquet_avro_write_fixed_as_int96-array",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"\u4e0b\u4e2a\u7248\u672c",id:"\u4e0b\u4e2a\u7248\u672c",level:3}],m={toc:o},y="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"ossjindofile"},"OssJindoFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"OssJindo file sink \u8fde\u63a5\u5668")),(0,l.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.yg)("p",null,"\u4f7f\u7528jindo-api\u5c06\u6570\u636e\u8f93\u51fa\u5230oss\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,l.yg)("p",null,":::\u63d0\u793a"),(0,l.yg)("p",null,"\u60a8\u9700\u8981\u4e0b\u8f7d",(0,l.yg)("a",{parentName:"p",href:"https://jindodata-binary.oss-cn-shanghai.aliyuncs.com/release/4.6.1/jindosdk-4.6.1.tar.gz"},"jindosdk-4.6.1.tar.gz"),"\n\u7136\u540e\u89e3\u538b\u7f29\uff0c\u5c06jindo-sdk-4.6.1.jar\u548cjindo-core-4.6.1.jar\u4ecelib\u590d\u5236\u5230${SEATUNNEL_HOME}/lib\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528spark/flink\uff0c\u4e3a\u4e86\u4f7f\u7528\u8fd9\u4e2a\u8fde\u63a5\u5668\uff0c\u4f60\u5fc5\u987b\u786e\u4fdd\u4f60\u7684spark/flink\u96c6\u7fa4\u5df2\u7ecf\u96c6\u6210\u4e86hadoop\u3002\u6d4b\u8bd5\u7684hadoop\u7248\u672c\u662f2.x\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528SeaTunnel\u5f15\u64ce\uff0c\u5f53\u4f60\u4e0b\u8f7d\u5e76\u5b89\u88c5SeaTunnel\u5f15\u64ce\u65f6\uff0c\u5b83\u4f1a\u81ea\u52a8\u96c6\u6210hadoop jar\u3002\u60a8\u53ef\u4ee5\u5728${SEATUNNEL_HOME}/lib\u4e0b\u68c0\u67e5jar\u5305\u4ee5\u786e\u8ba4\u8fd9\u4e00\u70b9\u3002"),(0,l.yg)("p",null,"\u4e3a\u4e86\u652f\u6301\u66f4\u591a\u7684\u6587\u4ef6\u7c7b\u578b\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u4e00\u4e9b\u6743\u8861\uff0c\u56e0\u6b64\u6211\u4eec\u4f7f\u7528HDFS\u534f\u8bae\u5bf9OSS\u8fdb\u884c\u5185\u90e8\u8bbf\u95ee\uff0c\u800c\u8fd9\u4e2a\u8fde\u63a5\u5668\u9700\u8981\u4e00\u4e9bhadoop\u4f9d\u8d56\u3002\u5b83\u53ea\u652f\u6301hadoop\u7248\u672c",(0,l.yg)("strong",{parentName:"p"},"2.9.X+"),"\u3002"),(0,l.yg)("p",null,":::"),(0,l.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,l.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4f7f\u75282PC commit\u6765\u786e\u4fdd\u201c\u7cbe\u786e\u4e00\u6b21\u201d"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6587\u4ef6\u683c\u5f0f\u7c7b\u578b",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","binary")))),(0,l.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,l.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tmp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,l.yg)("td",{parentName:"tr",align:null},"\u7ed3\u679c\u6587\u4ef6\u5c06\u9996\u5148\u5199\u5165\u4e34\u65f6\u8def\u5f84\uff0c\u7136\u540e\u4f7f\u7528",(0,l.yg)("inlineCode",{parentName:"td"},"mv"),"\u5c06tmp-dir\u63d0\u4ea4\u5230\u76ee\u6807\u76ee\u5f55\u3002\u9700\u8981\u4e00\u4e2aOSS \u76ee\u5f55\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bucket"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_key"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"access_secret"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728custom_filename\u4e3atrue\u65f6\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728custom_filename\u4e3atrue\u65f6\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53file_format_type\u4e3atext\u65f6\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53file_format_type\u4e3atext\u65f6\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u5904\u7406\u5206\u533a\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5728have_partition\u4e3atrue\u65f6\u624d\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5728have_partition\u4e3atrue\u65f6\u624d\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u53ea\u6709\u5728have_partition\u4e3atrue\u65f6\u624d\u4f7f\u7528")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u6b64\u53c2\u6570\u4e3a\u7a7a\u65f6\uff0c\u6240\u6709\u5b57\u6bb5\u90fd\u662fSink\u5217")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"1000000"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53file_format_type\u4e3aexcel\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53file_format_type\u4e3aexcel\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"csv_string_quote_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"MINIMAL"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3acsv\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_root_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORDS"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3axml\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3axml\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3axml\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"single_file_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u6bcf\u4e2a\u5e76\u884c\u5904\u7406\u53ea\u4f1a\u8f93\u51fa\u4e00\u4e2a\u6587\u4ef6\u3002\u542f\u7528\u6b64\u53c2\u6570\u540e\uff0cbatch_size\u5c06\u4e0d\u4f1a\u751f\u6548\u3002\u8f93\u51fa\u6587\u4ef6\u540d\u6ca1\u6709\u6587\u4ef6\u5757\u540e\u7f00\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"create_empty_file_when_no_data"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5f53\u4e0a\u6e38\u6ca1\u6709\u6570\u636e\u540c\u6b65\u65f6\uff0c\u4ecd\u7136\u4f1a\u751f\u6210\u76f8\u5e94\u7684\u6570\u636e\u6587\u4ef6\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_timestamp_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3aparquet\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_fixed_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5728file_format\u4e3aparquet\u65f6\u4f7f\u7528\u3002")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"\u4ec5\u5f53file_format_type\u4e3ajson\u3001text\u3001csv\u3001xml\u65f6\u4f7f\u7528\u3002")))),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"\u76ee\u6807\u76ee\u5f55\u8def\u5f84\u662f\u5fc5\u9700\u7684\u3002"),(0,l.yg)("h3",{id:"bucket-string"},"bucket ","[string]"),(0,l.yg)("p",null,"oss\u6587\u4ef6\u7cfb\u7edf\u7684bucket\u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,l.yg)("inlineCode",{parentName:"p"},"oss://tyrantlucifer-image-bed")),(0,l.yg)("h3",{id:"access_key-string"},"access_key ","[string]"),(0,l.yg)("p",null,"oss\u6587\u4ef6\u7cfb\u7edfaccess_key"),(0,l.yg)("h3",{id:"access_secret-string"},"access_secret ","[string]"),(0,l.yg)("p",null,"oss\u6587\u4ef6\u7cfb\u7edf\u7684access_secret"),(0,l.yg)("h3",{id:"endpoint-string"},"endpoint ","[string]"),(0,l.yg)("p",null,"oss\u6587\u4ef6\u7cfb\u7edf\u7684\u7aef\u70b9\u3002"),(0,l.yg)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,l.yg)("p",null,"\u662f\u5426\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d"),(0,l.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,l.yg)("p",null,"\u4ec5\u5728\u201ccustom_filename\u201d\u4e3a\u201ctrue\u201d\u65f6\u4f7f\u7528"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression\u63cf\u8ff0\u4e86\u5c06\u5728"),"path",(0,l.yg)("inlineCode",{parentName:"p"},"\u4e2d\u521b\u5efa\u7684\u6587\u4ef6\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u5728\u201cfile_name_expression\u201d\u4e2d\u6dfb\u52a0\u53d8\u91cf\u201c${now}\u201d\u6216\u201c${uuid}\u201d\uff0c\u7c7b\u4f3c\u4e8e\u201ctest\u201d_${uuid}_${now}"),"\uff0c",(0,l.yg)("inlineCode",{parentName:"p"},"${now}"),"\u8868\u793a\u5f53\u524d\u65f6\u95f4\uff0c\u5176\u683c\u5f0f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u9009\u9879",(0,l.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"\u6765\u5b9a\u4e49\u3002\n\u8bf7\u6ce8\u610f\uff0c\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6211\u4eec\u5c06\u81ea\u52a8\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_"),"\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002"),(0,l.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,l.yg)("p",null,"\u4ec5\u5728\u201ccustom_filename\u201d\u4e3a\u201ctrue\u201d\u65f6\u4f7f\u7528"),(0,l.yg)("p",null,"\u5f53",(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression"),"\u53c2\u6570\u4e2d\u7684\u683c\u5f0f\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"xxxx-${now}\u65f6\uff0c"),"filename_time_format",(0,l.yg)("inlineCode",{parentName:"p"},"\u53ef\u4ee5\u6307\u5b9a\u8def\u5f84\u7684\u65f6\u95f4\u683c\u5f0f\uff0c\u9ed8\u8ba4\u503c\u4e3a"),"yyyy.MM.dd\u3002\u5e38\u7528\u7684\u65f6\u95f4\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"y"),(0,l.yg)("td",{parentName:"tr",align:null},"Year")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"M"),(0,l.yg)("td",{parentName:"tr",align:null},"Month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"d"),(0,l.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"H"),(0,l.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"m"),(0,l.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"s"),(0,l.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"\u6211\u4eec\u652f\u6301\u4ee5\u4e0b\u6587\u4ef6\u7c7b\u578b\uff1a"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"p"},"xml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")),(0,l.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6700\u7ec8\u6587\u4ef6\u540d\u5c06\u4ee5file_format_type\u7684\u540e\u7f00\u7ed3\u5c3e\uff0c\u6587\u672c\u6587\u4ef6\u7684\u540e\u7f00\u4e3a\u201ctxt\u201d\u3002"),(0,l.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,l.yg)("p",null,"\u6570\u636e\u884c\u4e2d\u5217\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u53ea\u9700\u8981\u201ctext\u201d\u6587\u4ef6\u683c\u5f0f\u3002"),(0,l.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,l.yg)("p",null,"\u6587\u4ef6\u4e2d\u884c\u4e4b\u95f4\u7684\u5206\u9694\u7b26\u3002\u53ea\u9700\u8981\u201ctext\u201d\u6587\u4ef6\u683c\u5f0f\u3002"),(0,l.yg)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,l.yg)("p",null,"\u662f\u5426\u9700\u8981\u5904\u7406\u5206\u533a\u3002"),(0,l.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.yg)("p",null,"\u4ec5\u5728\u201chave_partition\u201d\u4e3a\u201ctrue\u201d\u65f6\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u6839\u636e\u6240\u9009\u5b57\u6bb5\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u533a\u3002"),(0,l.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,l.yg)("p",null,"\u4ec5\u5728\u201chave_partition\u201d\u4e3a\u201ctrue\u201d\u65f6\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86",(0,l.yg)("inlineCode",{parentName:"p"},"partition_by"),"\uff0c\u6211\u4eec\u5c06\u6839\u636e\u5206\u533a\u4fe1\u606f\u751f\u6210\u76f8\u5e94\u7684\u5206\u533a\u76ee\u5f55\uff0c\u5e76\u5c06\u6700\u7ec8\u6587\u4ef6\u653e\u7f6e\u5728\u5206\u533a\u76ee\u5f55\u4e2d\u3002"),(0,l.yg)("p",null,"\u9ed8\u8ba4\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"partition_dir_expression"),"\u662f`${k0}=${v0}/${k1}=${1v1}//${kn}=${vn}/``k0\u662f\u7b2c\u4e00\u4e2a\u5206\u533a\u5b57\u6bb5\uff0cv0\u662f\u7b2c\u4e00\u4e2a\u5212\u5206\u5b57\u6bb5\u7684\u503c\u3002"),(0,l.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,l.yg)("p",null,"\u4ec5\u5728\u201chave_partition\u201d\u4e3a\u201ctrue\u201d\u65f6\u4f7f\u7528\u3002"),(0,l.yg)("p",null,"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u5206\u533a\u5b57\u6bb5\u53ca\u5176\u503c\u5c06\u5199\u5165\u6570\u636e\u6587\u4ef6\u3002"),(0,l.yg)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u60f3\u5199\u4e00\u4e2aHive\u6570\u636e\u6587\u4ef6\uff0c\u5b83\u7684\u503c\u5e94\u8be5\u662f\u201cfalse\u201d\u3002"),(0,l.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,l.yg)("p",null,"\u54ea\u4e9b\u5217\u9700\u8981\u5199\u5165\u6587\u4ef6\uff0c\u9ed8\u8ba4\u503c\u662f\u4ece\u201cTransform\u201d\u6216\u201cSource\u201d\u83b7\u53d6\u7684\u6240\u6709\u5217\u3002"),(0,l.yg)("p",null,"\u5b57\u6bb5\u7684\u987a\u5e8f\u51b3\u5b9a\u4e86\u6587\u4ef6\u5b9e\u9645\u5199\u5165\u7684\u987a\u5e8f\u3002"),(0,l.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,l.yg)("p",null,"\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3atrue\uff0c\u6211\u4eec\u5c06\u786e\u4fdd\u6570\u636e\u5728\u5199\u5165\u76ee\u6807\u76ee\u5f55\u65f6\u4e0d\u4f1a\u4e22\u5931\u6216\u91cd\u590d\u3002"),(0,l.yg)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u6211\u4eec\u5c06\u81ea\u52a8\u6dfb\u52a0",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_"),"\u5728\u6587\u4ef6\u7684\u5f00\u5934\u3002"),(0,l.yg)("p",null,"\u73b0\u5728\u53ea\u652f\u6301\u201ctrue\u201d\u3002"),(0,l.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.yg)("p",null,"\u6587\u4ef6\u4e2d\u7684\u6700\u5927\u884c\u6570\u3002\u5bf9\u4e8eSeaTunnel\u5f15\u64ce\uff0c\u6587\u4ef6\u4e2d\u7684\u884c\u6570\u7531\u201cbatch_size\u201d\u548c\u201ccheckpoint.interval\u201d\u5171\u540c\u51b3\u5b9a\u3002\u5982\u679c\u201ccheckpoint.interval\u201d\u7684\u503c\u8db3\u591f\u5927\uff0csink writer\u5c06\u5728\u6587\u4ef6\u4e2d\u5199\u5165\u884c\uff0c\u76f4\u5230\u6587\u4ef6\u4e2d\u7684\u884c\u5927\u4e8e\u201cbatch_size\u201d\u3002\u5982\u679c\u201ccheckpoint.interval\u201d\u8f83\u5c0f\uff0c\u5219\u63a5\u6536\u5668\u5199\u5165\u7a0b\u5e8f\u5c06\u5728\u65b0\u7684\u68c0\u67e5\u70b9\u89e6\u53d1\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u3002"),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"\u6587\u4ef6\u7684\u538b\u7f29\u7f16\u89e3\u7801\u5668\u548c\u652f\u6301\u7684\u8be6\u7ec6\u4fe1\u606f\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"parquet: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"li"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none"))),(0,l.yg)("p",null,"\u63d0\u793a\uff1aexcel\u7c7b\u578b\u4e0d\u652f\u6301\u4efb\u4f55\u538b\u7f29\u683c\u5f0f"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8bf7\u53c2\u8003","[Sink common Options]","\uff08../sink-common-options.md\uff09\u4e86\u89e3\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,l.yg)("h3",{id:"max_rows_in_memory-int"},"max_rows_in_memory ","[int]"),(0,l.yg)("p",null,"\u5f53\u6587\u4ef6\u683c\u5f0f\u4e3aExcel\u65f6\uff0c\u5185\u5b58\u4e2d\u53ef\u4ee5\u7f13\u5b58\u7684\u6700\u5927\u6570\u636e\u9879\u6570\u3002"),(0,l.yg)("h3",{id:"sheet_name-string"},"sheet_name ","[string]"),(0,l.yg)("p",null,"\u7f16\u5199\u5de5\u4f5c\u7c3f\u7684\u5de5\u4f5c\u8868"),(0,l.yg)("h3",{id:"csv_string_quote_mode-string"},"csv_string_quote_mode ","[string]"),(0,l.yg)("p",null,"\u5f53\u6587\u4ef6\u683c\u5f0f\u4e3aCSV\u65f6\uff0cCSV\u7684\u5b57\u7b26\u4e32\u5f15\u7528\u6a21\u5f0f\u3002"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"ALL: \u6240\u6709\u5b57\u7b26\u4e32\u5b57\u6bb5\u90fd\u5c06\u88ab\u5f15\u7528\u3002"),(0,l.yg)("li",{parentName:"ul"},"MINIMAL: \u5f15\u53f7\u5b57\u6bb5\u5305\u542b\u7279\u6b8a\u5b57\u7b26\uff0c\u5982\u5b57\u6bb5\u5206\u9694\u7b26\u3001\u5f15\u53f7\u5b57\u7b26\u6216\u884c\u5206\u9694\u7b26\u5b57\u7b26\u4e32\u4e2d\u7684\u4efb\u4f55\u5b57\u7b26\u3002"),(0,l.yg)("li",{parentName:"ul"},"NONE: Never quotes fields. When the delimiter occurs in data, the printer prefixes it with the escape character. If the escape character is not set, format validation throws an exception.\n\u4ece\u4e0d\u5f15\u7528\u5b57\u6bb5\u3002\u5f53\u5206\u9694\u7b26\u51fa\u73b0\u5728\u6570\u636e\u4e2d\u65f6\uff0c\u6253\u5370\u4f1a\u7528\u8f6c\u4e49\u7b26\u4f5c\u4e3a\u524d\u7f00\u3002\u5982\u679c\u672a\u8bbe\u7f6e\u8f6c\u4e49\u7b26\uff0c\u683c\u5f0f\u9a8c\u8bc1\u5c06\u629b\u51fa\u5f02\u5e38\u3002")),(0,l.yg)("h3",{id:"xml_root_tag-string"},"xml_root_tag ","[string]"),(0,l.yg)("p",null,"\u6307\u5b9aXML\u6587\u4ef6\u4e2d\u6839\u5143\u7d20\u7684\u6807\u8bb0\u540d\u3002"),(0,l.yg)("h3",{id:"xml_row_tag-string"},"xml_row_tag ","[string]"),(0,l.yg)("p",null,"\u6307\u5b9aXML\u6587\u4ef6\u4e2d\u6570\u636e\u884c\u7684\u6807\u8bb0\u540d\u79f0\u3002"),(0,l.yg)("h3",{id:"xml_use_attr_format-boolean"},"xml_use_attr_format ","[boolean]"),(0,l.yg)("p",null,"\u6307\u5b9a\u662f\u5426\u4f7f\u7528\u6807\u8bb0\u5c5e\u6027\u683c\u5f0f\u5904\u7406\u6570\u636e\u3002"),(0,l.yg)("h3",{id:"parquet_avro_write_timestamp_as_int96-boolean"},"parquet_avro_write_timestamp_as_int96 ","[boolean]"),(0,l.yg)("p",null,"\u652f\u6301\u4ece\u65f6\u95f4\u6233\u5199\u5165Parquet INT96\uff0c\u4ec5\u9002\u7528\u4e8eparquet\u6587\u4ef6\u3002"),(0,l.yg)("h3",{id:"parquet_avro_write_fixed_as_int96-array"},"parquet_avro_write_fixed_as_int96 ","[array]"),(0,l.yg)("p",null,"\u652f\u6301\u4ece12\u5b57\u8282\u5b57\u6bb5\u5199\u5165Parquet INT96\uff0c\u4ec5\u9002\u7528\u4e8e\u62fc\u82b1\u5730\u677f\u6587\u4ef6\u3002"),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"\u4ec5\u5f53file_format_type\u4e3ajson\u3001text\u3001csv\u3001xml\u65f6\u4f7f\u7528\u3002\n\u8981\u5199\u5165\u7684\u6587\u4ef6\u7684\u7f16\u7801\u3002\u6b64\u53c2\u6570\u5c06\u7531",(0,l.yg)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"\u89e3\u6790\u3002"),(0,l.yg)("h2",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,l.yg)("p",null,"\u9002\u7528\u4e8e\u5177\u6709\u201chave_partition\u201d\u3001\u201ccustom_filename\u201d\u548c\u201csink_columns\u201d\u7684\u6587\u672c\u6587\u4ef6\u683c\u5f0f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  OssJindoFile {\n    path="/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n  }\n\n')),(0,l.yg)("p",null,"\u9002\u7528\u4e8e\u5e26\u6709`sink_columns\u7684parquet\u6587\u4ef6\u683c\u5f0f"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\n  OssJindoFile {\n    path = "/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "parquet"\n    sink_columns = ["name","age"]\n  }\n\n')),(0,l.yg)("p",null,"\u5bf9\u4e8eorc\u6587\u4ef6\u683c\u5f0f\u7684\u7b80\u5355\u914d\u7f6e"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\n  OssJindoFile {\n    path="/seatunnel/sink"\n    bucket = "oss://tyrantlucifer-image-bed"\n    access_key = "xxxxxxxxxxx"\n    access_secret = "xxxxxxxxxxx"\n    endpoint = "oss-cn-beijing.aliyuncs.com"\n    file_format_type = "orc"\n  }\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\u6dfb\u52a0OSS Jindo\u6587\u4ef6Sink\u8fde\u63a5\u5668")),(0,l.yg)("h3",{id:"\u4e0b\u4e2a\u7248\u672c"},"\u4e0b\u4e2a\u7248\u672c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[\u4f18\u5316]"," \u652f\u6301\u6587\u4ef6\u538b\u7f29\uff08",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3899"},"3899"),")")))}s.isMDXComponent=!0}}]);