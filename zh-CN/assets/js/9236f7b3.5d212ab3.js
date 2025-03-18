"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[98745],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(96540);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=s,d=p["".concat(o,".").concat(m)]||p[m]||g[m]||l;return t?a.createElement(d,r(r({ref:n},c),{},{components:t})):a.createElement(d,r({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,r[1]=i;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=t(58168),s=(t(96540),t(15680));const l={slug:"hdfs-to-clickhouse",title:"\u5982\u4f55\u5feb\u901f\u5730\u628a HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",tags:["HDFS","ClickHouse"]},r="\u5982\u4f55\u5feb\u901f\u5730\u628a HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",i={permalink:"/zh-CN/blog/hdfs-to-clickhouse",editUrl:"https://github.com/apache/seatunnel-website/edit/main/blog/2021-12-30-hdfs-to-clickhouse.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2021-12-30-hdfs-to-clickhouse.md",title:"\u5982\u4f55\u5feb\u901f\u5730\u628a HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",description:"ClickHouse \u662f\u9762\u5411 OLAP \u7684\u5206\u5e03\u5f0f\u5217\u5f0f DBMS\u3002\u6211\u4eec\u90e8\u95e8\u76ee\u524d\u5df2\u7ecf\u628a\u6240\u6709\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u65e5\u5fd7\u6570\u636e\u5b58\u50a8\u81f3 ClickHouse \u8fd9\u4e2a\u4f18\u79c0\u7684\u6570\u636e\u4ed3\u5e93\u4e4b\u4e2d\uff0c\u5f53\u524d\u65e5\u6570\u636e\u91cf\u8fbe\u5230\u4e86 300 \u4ebf\u3002",date:"2021-12-30T00:00:00.000Z",formattedDate:"2021\u5e7412\u670830\u65e5",tags:[{label:"HDFS",permalink:"/zh-CN/blog/tags/hdfs"},{label:"ClickHouse",permalink:"/zh-CN/blog/tags/click-house"}],readingTime:7.13,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"hdfs-to-clickhouse",title:"\u5982\u4f55\u5feb\u901f\u5730\u628a HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",tags:["HDFS","ClickHouse"]},prevItem:{title:"2.1.0 Released! Apache SeaTunnel(Incubating) First Apache Release Refactors Kernel and Supports Flink Overall",permalink:"/zh-CN/blog/2.1.0-Released-Apache-SeaTunnel-Incubating-First-Apache-Release-Refactors-Kernel-and-Supports-Flink-Overall"},nextItem:{title:"\u5982\u4f55\u5feb\u901f\u5730\u628a Hive \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse",permalink:"/zh-CN/blog/hive-to-clickhouse"}},o={authorsImageUrls:[]},u=[{value:"HDFS To ClickHouse",id:"hdfs-to-clickhouse",level:2},{value:"Log Sample",id:"log-sample",level:3},{value:"ClickHouse Schema",id:"clickhouse-schema",level:3},{value:"Seatunnel with ClickHouse",id:"seatunnel-with-clickhouse",level:2},{value:"Seatunnel",id:"seatunnel",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"seatunnel Pipeline",id:"seatunnel-pipeline",level:3},{value:"Spark",id:"spark",level:4},{value:"Input",id:"input",level:4},{value:"Filter",id:"filter",level:4},{value:"Output",id:"output",level:4},{value:"Running seatunnel",id:"running-seatunnel",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,s.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"ClickHouse \u662f\u9762\u5411 OLAP \u7684\u5206\u5e03\u5f0f\u5217\u5f0f DBMS\u3002\u6211\u4eec\u90e8\u95e8\u76ee\u524d\u5df2\u7ecf\u628a\u6240\u6709\u6570\u636e\u5206\u6790\u76f8\u5173\u7684\u65e5\u5fd7\u6570\u636e\u5b58\u50a8\u81f3 ClickHouse \u8fd9\u4e2a\u4f18\u79c0\u7684\u6570\u636e\u4ed3\u5e93\u4e4b\u4e2d\uff0c\u5f53\u524d\u65e5\u6570\u636e\u91cf\u8fbe\u5230\u4e86 300 \u4ebf\u3002"),(0,s.yg)("p",null,"\u4e4b\u524d\u4ecb\u7ecd\u7684\u6709\u5173\u6570\u636e\u5904\u7406\u5165\u5e93\u7684\u7ecf\u9a8c\u90fd\u662f\u57fa\u4e8e\u5b9e\u65f6\u6570\u636e\u6d41\uff0c\u6570\u636e\u5b58\u50a8\u5728 Kafka \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528 Java \u6216\u8005 Golang \u5c06\u6570\u636e\u4ece Kafka \u4e2d\u8bfb\u53d6\u3001\u89e3\u6790\u3001\u6e05\u6d17\u4e4b\u540e\u5199\u5165 ClickHouse \u4e2d\uff0c\u8fd9\u6837\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u5feb\u901f\u63a5\u5165\u3002\u7136\u800c\u5728\u5f88\u591a\u540c\u5b66\u7684\u4f7f\u7528\u573a\u666f\u4e2d\uff0c\u6570\u636e\u90fd\u4e0d\u662f\u5b9e\u65f6\u7684\uff0c\u53ef\u80fd\u9700\u8981\u5c06 HDFS \u6216\u8005\u662f Hive \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse\u3002\u6709\u7684\u540c\u5b66\u901a\u8fc7\u7f16\u5199 Spark \u7a0b\u5e8f\u6765\u5b9e\u73b0\u6570\u636e\u7684\u5bfc\u5165\uff0c\u90a3\u4e48\u662f\u5426\u6709\u66f4\u7b80\u5355\u3001\u9ad8\u6548\u7684\u65b9\u6cd5\u5462\u3002"),(0,s.yg)("p",null,"\u76ee\u524d\u5f00\u6e90\u793e\u533a\u4e0a\u6709\u4e00\u6b3e\u5de5\u5177 ",(0,s.yg)("strong",{parentName:"p"},"Seatunnel"),"\uff0c\u9879\u76ee\u5730\u5740 ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"https://github.com/apache/incubator-seatunnel"),"\uff0c\u53ef\u4ee5\u5feb\u901f\u5730\u5c06 HDFS \u4e2d\u7684\u6570\u636e\u5bfc\u5165 ClickHouse\u3002"),(0,s.yg)("h2",{id:"hdfs-to-clickhouse"},"HDFS To ClickHouse"),(0,s.yg)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u65e5\u5fd7\u5b58\u50a8\u5728 HDFS \u4e2d\uff0c\u6211\u4eec\u9700\u8981\u5c06\u65e5\u5fd7\u8fdb\u884c\u89e3\u6790\u5e76\u7b5b\u9009\u51fa\u6211\u4eec\u5173\u5fc3\u7684\u5b57\u6bb5\uff0c\u5c06\u5bf9\u5e94\u7684\u5b57\u6bb5\u5199\u5165 ClickHouse \u7684\u8868\u4e2d\u3002"),(0,s.yg)("h3",{id:"log-sample"},"Log Sample"),(0,s.yg)("p",null,"\u6211\u4eec\u5728 HDFS \u4e2d\u5b58\u50a8\u7684\u65e5\u5fd7\u683c\u5f0f\u5982\u4e0b\uff0c \u662f\u5f88\u5e38\u89c1\u7684 Nginx \u65e5\u5fd7"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'10.41.1.28 github.com 114.250.140.241 0.001s "127.0.0.1:80" [26/Oct/2018:03:09:32 +0800] "GET /Apache/Seatunnel HTTP/1.1" 200 0 "-" - "Dalvik/2.1.0 (Linux; U; Android 7.1.1; OPPO R11 Build/NMF26X)" "196" "-" "mainpage" "443" "-" "172.16.181.129"\n')),(0,s.yg)("h3",{id:"clickhouse-schema"},"ClickHouse Schema"),(0,s.yg)("p",null,"\u6211\u4eec\u7684 ClickHouse \u5efa\u8868\u8bed\u53e5\u5982\u4e0b\uff0c\u6211\u4eec\u7684\u8868\u6309\u65e5\u8fdb\u884c\u5206\u533a"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"CREATE TABLE cms.cms_msg\n(\n    date Date, \n    datetime DateTime, \n    url String, \n    request_time Float32, \n    status String, \n    hostname String, \n    domain String, \n    remote_addr String, \n    data_size Int32, \n    pool String\n) ENGINE = MergeTree PARTITION BY date ORDER BY date SETTINGS index_granularity = 16384\n")),(0,s.yg)("h2",{id:"seatunnel-with-clickhouse"},"Seatunnel with ClickHouse"),(0,s.yg)("p",null,"\u63a5\u4e0b\u6765\u4f1a\u7ed9\u5927\u5bb6\u8be6\u7ec6\u4ecb\u7ecd\uff0c\u6211\u4eec\u5982\u4f55\u901a\u8fc7 Seatunnel \u6ee1\u8db3\u4e0a\u8ff0\u9700\u6c42\uff0c\u5c06 HDFS \u4e2d\u7684\u6570\u636e\u5199\u5165 ClickHouse \u4e2d\u3002"),(0,s.yg)("h3",{id:"seatunnel"},"Seatunnel"),(0,s.yg)("p",null,(0,s.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"Seatunnel")," \u662f\u4e00\u4e2a\u975e\u5e38\u6613\u7528\uff0c\u9ad8\u6027\u80fd\uff0c\u80fd\u591f\u5e94\u5bf9\u6d77\u91cf\u6570\u636e\u7684\u5b9e\u65f6\u6570\u636e\u5904\u7406\u4ea7\u54c1\uff0c\u5b83\u6784\u5efa\u5728Spark\u4e4b\u4e0a\u3002Seatunnel \u62e5\u6709\u7740\u975e\u5e38\u4e30\u5bcc\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u4ece Kafka\u3001HDFS\u3001Kudu \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u8fdb\u884c\u5404\u79cd\u5404\u6837\u7684\u6570\u636e\u5904\u7406\uff0c\u5e76\u5c06\u7ed3\u679c\u5199\u5165 ClickHouse\u3001Elasticsearch \u6216\u8005 Kafka \u4e2d\u3002"),(0,s.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,s.yg)("p",null,"\u9996\u5148\u6211\u4eec\u9700\u8981\u5b89\u88c5 Seatunnel\uff0c\u5b89\u88c5\u5341\u5206\u7b80\u5355\uff0c\u65e0\u9700\u914d\u7f6e\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,s.yg)("ol",null,(0,s.yg)("li",{parentName:"ol"},"\u51c6\u5907 Spark \u73af\u5883"),(0,s.yg)("li",{parentName:"ol"},"\u5b89\u88c5 Seatunnel"),(0,s.yg)("li",{parentName:"ol"},"\u914d\u7f6e Seatunnel")),(0,s.yg)("p",null,"\u4ee5\u4e0b\u662f\u7b80\u6613\u6b65\u9aa4\uff0c\u5177\u4f53\u5b89\u88c5\u53ef\u4ee5\u53c2\u7167 ",(0,s.yg)("a",{parentName:"p",href:"/docs/quick-start"},"Quick Start")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"cd /usr/local\n\nwget https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\ntar -xvf https://archive.apache.org/dist/spark/spark-2.2.0/spark-2.2.0-bin-hadoop2.7.tgz\n\nwget https://github.com/InterestingLab/seatunnel/releases/download/v1.1.1/seatunnel-1.1.1.zip\n\nunzip seatunnel-1.1.1.zip\n\ncd seatunnel-1.1.1\nvim config/seatunnel-env.sh\n\n# \u6307\u5b9aSpark\u5b89\u88c5\u8def\u5f84\nSPARK_HOME=${SPARK_HOME:-/usr/local/spark-2.2.0-bin-hadoop2.7}\n")),(0,s.yg)("h3",{id:"seatunnel-pipeline"},"seatunnel Pipeline"),(0,s.yg)("p",null,"\u6211\u4eec\u4ec5\u9700\u8981\u7f16\u5199\u4e00\u4e2a seatunnel Pipeline \u7684\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\u3002"),(0,s.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5305\u62ec\u56db\u4e2a\u90e8\u5206\uff0c\u5206\u522b\u662f Spark\u3001Input\u3001filter \u548c Output\u3002"),(0,s.yg)("h4",{id:"spark"},"Spark"),(0,s.yg)("p",null,"\u8fd9\u4e00\u90e8\u5206\u662f Spark \u7684\u76f8\u5173\u914d\u7f6e\uff0c\u4e3b\u8981\u914d\u7f6e Spark \u6267\u884c\u65f6\u6240\u9700\u7684\u8d44\u6e90\u5927\u5c0f\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n')),(0,s.yg)("h4",{id:"input"},"Input"),(0,s.yg)("p",null,"\u8fd9\u4e00\u90e8\u5206\u5b9a\u4e49\u6570\u636e\u6e90\uff0c\u5982\u4e0b\u662f\u4ece HDFS \u6587\u4ef6\u4e2d\u8bfb\u53d6 text \u683c\u5f0f\u6570\u636e\u7684\u914d\u7f6e\u6848\u4f8b\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'input {\n    hdfs {\n        path = "hdfs://nomanode:8020/rowlog/accesslog"\n        table_name = "access_log"\n        format = "text"\n    }\n}\n')),(0,s.yg)("h4",{id:"filter"},"Filter"),(0,s.yg)("p",null,"\u5728 Filter \u90e8\u5206\uff0c\u8fd9\u91cc\u6211\u4eec\u914d\u7f6e\u4e00\u7cfb\u5217\u7684\u8f6c\u5316\uff0c\u5305\u62ec\u6b63\u5219\u89e3\u6790\u5c06\u65e5\u5fd7\u8fdb\u884c\u62c6\u5206\u3001\u65f6\u95f4\u8f6c\u6362\u5c06 HTTPDATE \u8f6c\u5316\u4e3a ClickHouse \u652f\u6301\u7684\u65e5\u671f\u683c\u5f0f\u3001\u5bf9 Number \u7c7b\u578b\u7684\u5b57\u6bb5\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\u4ee5\u53ca\u901a\u8fc7 SQL \u8fdb\u884c\u5b57\u6bb5\u7b5b\u51cf\u7b49"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'filter {\n    # \u4f7f\u7528\u6b63\u5219\u89e3\u6790\u539f\u59cb\u65e5\u5fd7\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:ha_ip}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\\"\\\\s%{DATA:uid}\\\\s%{DATA:session_id}\\\\s\\"%{DATA:pool}\\"\\\\s\\"%{DATA:tag2}\\"\\\\s%{DATA:tag3}\\\\s%{DATA:tag4}\'\n    }\n\n    # \u5c06"dd/MMM/yyyy:HH:mm:ss Z"\u683c\u5f0f\u7684\u6570\u636e\u8f6c\u6362\u4e3a\n    # "yyyy/MM/dd HH:mm:ss"\u683c\u5f0f\u7684\u6570\u636e\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy/MM/dd HH:mm:ss"\n    }\n\n    # \u4f7f\u7528SQL\u7b5b\u9009\u5173\u6ce8\u7684\u5b57\u6bb5\uff0c\u5e76\u5bf9\u5b57\u6bb5\u8fdb\u884c\u5904\u7406\n    # \u751a\u81f3\u53ef\u4ee5\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u8fc7\u6ee4\u6389\u4e0d\u5173\u5fc3\u7684\u6570\u636e\n    sql {\n        table_name = "access"\n        sql = "select substring(date, 1, 10) as date, datetime, hostname, url, http_code, float(request_time), int(data_size), domain from access"\n    }\n}\n')),(0,s.yg)("h4",{id:"output"},"Output"),(0,s.yg)("p",null,"\u6700\u540e\u6211\u4eec\u5c06\u5904\u7406\u597d\u7684\u7ed3\u6784\u5316\u6570\u636e\u5199\u5165 ClickHouse"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'output {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,s.yg)("h3",{id:"running-seatunnel"},"Running seatunnel"),(0,s.yg)("p",null,"\u6211\u4eec\u5c06\u4e0a\u8ff0\u56db\u90e8\u5206\u914d\u7f6e\u7ec4\u5408\u6210\u4e3a\u6211\u4eec\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,s.yg)("inlineCode",{parentName:"p"},"config/batch.conf"),"\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"vim config/batch.conf\n")),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},'spark {\n  spark.app.name = "seatunnel"\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n}\n\ninput {\n    hdfs {\n        path = "hdfs://nomanode:8020/rowlog/accesslog"\n        table_name = "access_log"\n        format = "text"\n    }\n}\n\nfilter {\n    # \u4f7f\u7528\u6b63\u5219\u89e3\u6790\u539f\u59cb\u65e5\u5fd7\n    grok {\n        source_field = "raw_message"\n        pattern = \'%{IP:ha_ip}\\\\s%{NOTSPACE:domain}\\\\s%{IP:remote_addr}\\\\s%{NUMBER:request_time}s\\\\s\\"%{DATA:upstream_ip}\\"\\\\s\\\\[%{HTTPDATE:timestamp}\\\\]\\\\s\\"%{NOTSPACE:method}\\\\s%{DATA:url}\\\\s%{NOTSPACE:http_ver}\\"\\\\s%{NUMBER:status}\\\\s%{NUMBER:body_bytes_send}\\\\s%{DATA:referer}\\\\s%{NOTSPACE:cookie_info}\\\\s\\"%{DATA:user_agent}\\"\\\\s%{DATA:uid}\\\\s%{DATA:session_id}\\\\s\\"%{DATA:pool}\\"\\\\s\\"%{DATA:tag2}\\"\\\\s%{DATA:tag3}\\\\s%{DATA:tag4}\'\n    }\n\n    # \u5c06"dd/MMM/yyyy:HH:mm:ss Z"\u683c\u5f0f\u7684\u6570\u636e\u8f6c\u6362\u4e3a\n    # "yyyy/MM/dd HH:mm:ss"\u683c\u5f0f\u7684\u6570\u636e\n    date {\n        source_field = "timestamp"\n        target_field = "datetime"\n        source_time_format = "dd/MMM/yyyy:HH:mm:ss Z"\n        target_time_format = "yyyy/MM/dd HH:mm:ss"\n    }\n\n    # \u4f7f\u7528SQL\u7b5b\u9009\u5173\u6ce8\u7684\u5b57\u6bb5\uff0c\u5e76\u5bf9\u5b57\u6bb5\u8fdb\u884c\u5904\u7406\n    # \u751a\u81f3\u53ef\u4ee5\u901a\u8fc7\u8fc7\u6ee4\u6761\u4ef6\u8fc7\u6ee4\u6389\u4e0d\u5173\u5fc3\u7684\u6570\u636e\n    sql {\n        table_name = "access"\n        sql = "select substring(date, 1, 10) as date, datetime, hostname, url, http_code, float(request_time), int(data_size), domain from access"\n    }\n}\n\noutput {\n    clickhouse {\n        host = "your.clickhouse.host:8123"\n        database = "seatunnel"\n        table = "access_log"\n        fields = ["date", "datetime", "hostname", "uri", "http_code", "request_time", "data_size", "domain"]\n        username = "username"\n        password = "password"\n    }\n}\n')),(0,s.yg)("p",null,"\u6267\u884c\u547d\u4ee4\uff0c\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\uff0c\u8fd0\u884c Seatunnel\uff0c\u5373\u53ef\u5c06\u6570\u636e\u5199\u5165 ClickHouse\u3002\u8fd9\u91cc\u6211\u4eec\u4ee5\u672c\u5730\u6a21\u5f0f\u4e3a\u4f8b\u3002"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/start-seatunnel.sh --config config/batch.conf -e client -m 'local[2]'\n")),(0,s.yg)("h2",{id:"conclusion"},"Conclusion"),(0,s.yg)("p",null,"\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Seatunnel \u5c06 HDFS \u4e2d\u7684 Nginx \u65e5\u5fd7\u6587\u4ef6\u5bfc\u5165 ClickHouse \u4e2d\u3002\u4ec5\u901a\u8fc7\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u4fbf\u53ef\u5feb\u901f\u5b8c\u6210\u6570\u636e\u7684\u5bfc\u5165\uff0c\u65e0\u9700\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u3002\u9664\u4e86\u652f\u6301 HDFS \u6570\u636e\u6e90\u4e4b\u5916\uff0cSeatunnel \u540c\u6837\u652f\u6301\u5c06\u6570\u636e\u4ece Kafka \u4e2d\u5b9e\u65f6\u8bfb\u53d6\u5904\u7406\u5199\u5165 ClickHouse \u4e2d\u3002\u6211\u4eec\u7684\u4e0b\u4e00\u7bc7\u6587\u7ae0\u5c06\u4f1a\u4ecb\u7ecd\uff0c\u5982\u4f55\u5c06 Hive \u4e2d\u7684\u6570\u636e\u5feb\u901f\u5bfc\u5165 ClickHouse \u4e2d\u3002"),(0,s.yg)("p",null,"\u5f53\u7136\uff0cSeatunnel \u4e0d\u4ec5\u4ec5\u662f ClickHouse \u6570\u636e\u5199\u5165\u7684\u5de5\u5177\uff0c\u5728 Elasticsearch \u4ee5\u53ca Kafka\u7b49 \u6570\u636e\u6e90\u7684\u5199\u5165\u4e0a\u540c\u6837\u53ef\u4ee5\u626e\u6f14\u76f8\u5f53\u91cd\u8981\u7684\u89d2\u8272\u3002"),(0,s.yg)("p",null,"\u5e0c\u671b\u4e86\u89e3 Seatunnel \u548c ClickHouse\u3001Elasticsearch\u3001Kafka \u7ed3\u5408\u4f7f\u7528\u7684\u66f4\u591a\u529f\u80fd\u548c\u6848\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u5b98\u7f51 ",(0,s.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/"},"https://seatunnel.apache.org/")),(0,s.yg)("p",null,"-- Power by ",(0,s.yg)("a",{parentName:"p",href:"https://github.com/InterestingLab"},"InterestingLab")))}g.isMDXComponent=!0}}]);