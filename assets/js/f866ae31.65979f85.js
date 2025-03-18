"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[27631],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>g});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),p=i,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},66604:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(58168),i=(a(96540),a(15680));const o={slug:"The-practice-of-SeaTunnel-in-Vip",title:"The practice of SeaTunnel in Vip",tags:["Vip","ClickHouse"]},r=void 0,s={permalink:"/user_cases/The-practice-of-SeaTunnel-in-Vip",source:"@site/user_cases/2022-2-18-Meetup-vip.md",title:"The practice of SeaTunnel in Vip",description:"Guest speaker: Vip Senior Big Data Engineer Wang Yu",date:"2022-02-18T00:00:00.000Z",formattedDate:"February 18, 2022",tags:[{label:"Vip",permalink:"/user_cases/tags/vip"},{label:"ClickHouse",permalink:"/user_cases/tags/click-house"}],readingTime:12.41,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"The-practice-of-SeaTunnel-in-Vip",title:"The practice of SeaTunnel in Vip",tags:["Vip","ClickHouse"]}},l={authorsImageUrls:[]},d=[{value:"1. Vipshop Data OLAP Architecture",id:"1-vipshop-data-olap-architecture",level:2},{value:"2. Requirements",id:"2-requirements",level:2},{value:"3. Pain points",id:"3-pain-points",level:2}],c={toc:d},h="wrapper";function u(e){let{components:t,...o}=e;return(0,i.yg)(h,(0,n.A)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Guest speaker: Vip Senior Big Data Engineer Wang Yu\nLecture preparation: Zhang Detong"),(0,i.yg)("p",null,"Introduction: Vip referenced SeaTunnel as early as version 1.0. We use SeaTunnel to perform some data interaction work between Hive and ClickHouse.\nToday's presentation will focus on the following points:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Requirements and pain points of ClickHouse data import;"),(0,i.yg)("li",{parentName:"ul"},"Selection of ClickHouse warehousing and warehousing tools;"),(0,i.yg)("li",{parentName:"ul"},"Hive to ClickHouse;"),(0,i.yg)("li",{parentName:"ul"},"ClickHouse to Hive;"),(0,i.yg)("li",{parentName:"ul"},"Integration of SeaTunnel and Vipshop data platform;"),(0,i.yg)("li",{parentName:"ul"},"Future outlook;")),(0,i.yg)("h1",{id:"requirements-and-pain-points-of-clickhouse-data-import"},"Requirements and pain points of ClickHouse data import"),(0,i.yg)("h2",{id:"1-vipshop-data-olap-architecture"},"1. Vipshop Data OLAP Architecture"),(0,i.yg)("p",null,"The picture shows the OLAP architecture of Vipshop. The modules we are responsible for are the data service and the computing engine in the picture. The underlying data warehouses are divided into offline data warehouses, real-time data warehouses, and lake warehouses. For computing engines, we use Presto, Kylin and Clickhouse. Although Clickhouse is a storage-integrated OLAP database, we have included it in the computing engine part in order to take advantage of Clickhouse's excellent computing performance. Based on OLAP components, we provide SQL data services and non-SQL independent analysis of Vipshop to serve different intelligences. For example, non-SQL services are services that provide data analysis that is closer to the business for BI and commerce. Multiple data applications are abstracted on top of data services.\n",(0,i.yg)("img",{alt:"1",src:a(13309).A,width:"2038",height:"1440"})),(0,i.yg)("h2",{id:"2-requirements"},"2. Requirements"),(0,i.yg)("p",null,"We connect the underlying Hive, Kudu, and Alluxio components through Presto Connector and Spark components. Big data components can import and export data to and from each other, and you can use appropriate components to analyze data according to the needs and scenarios of data analysis. But when we introduced Clickhouse, it was a data island, and it was difficult to import and export data. There is a lot of work between Hive and Clickhouse to implement import and export. Our first data import and export requirement is to improve the import and export efficiency and incorporate Clickhouse into the big data system.\n",(0,i.yg)("img",{alt:"2",src:a(912).A,width:"2037",height:"1440"})),(0,i.yg)("p",null,"The second requirement is that Presto runs SQL relatively slowly. The figure shows an example of slow SQL. The SQL where condition in the figure sets the date, time range, and specific filter conditions. This kind of SQL usage runs slowly because Presto uses partition granularity to push down. Even after optimization by other methods such as Hive's bucket table and bucketing, the return time is a few seconds, which cannot meet business requirements. In this case, we need to use Clickhouse for offline OLAP computing acceleration.\n",(0,i.yg)("img",{alt:"3",src:a(90809).A,width:"2035",height:"1440"})),(0,i.yg)("p",null,"Our real-time data is written to Clickhouse through Kafka and Flink SQL. However, it is not enough to use real-time data for analysis. It is necessary to use the Hive dimension table and the T+1 real-time table with the ETL calculation number for accelerated transportation in Clickhouse. This requires importing Hive data into Clickhouse, which is our third requirement.\n",(0,i.yg)("img",{alt:"4",src:a(57766).A,width:"2035",height:"1440"})),(0,i.yg)("h2",{id:"3-pain-points"},"3. Pain points"),(0,i.yg)("p",null,"First, we introduce a data component to consider its performance. The granularity of the Hive table is five minutes. Is there a component that can support a short ETL process and import the ETL results into Clickhouse within five minutes? Second, we need to ensure the quality of the data, and the accuracy of the data needs to be guaranteed. The number of data entries in Hive and Clickhouse needs to be consistent. If there is a problem with the data quality, can the data be repaired by rerunning and other mechanisms? Third, are the data types that data import needs to support complete? The data types and some mechanisms between different databases are different. We have data types such as HiperLogLog and BitMap that are widely used in a certain storage engine. Whether they can be correctly transmitted and identified, and can be used well."),(0,i.yg)("h1",{id:"selection-of-clickhouse-and-hive-warehousing-and-warehousing-tools"},"Selection of ClickHouse and Hive warehousing and warehousing tools"),(0,i.yg)("p",null,"Based on the pain points in the data business, we have compared and selected data warehouse and warehouse tools. We mainly choose among open source tools, without considering commercial warehouse entry and exit tools, we mainly compare DataX, SeaTunnel, and write Spark programs and use jdbc to insert ClickHouse among the three options.\nSeaTunnel and Spark rely on Vipshop's own Yarn cluster, which can directly implement distributed reading and writing. DataX is non-distributed, and the startup process between Reader and Writer takes a long time, and the performance is ordinary. The performance of SeaTunnel and Spark for data processing can reach several times that of DataX.\nData of more than one billion can run smoothly in SeaTunnel and Spark. DataX has great performance pressure after the amount of data is large, and it is difficult to process data of more than one billion.\nIn terms of read and write plug-in scalability, SeaTunnel supports a variety of data sources and supports users to develop plug-ins. SeaTunnel supports data import into Redis.\nIn terms of stability, since SeaTunnel and DataX are self-contained tools, the stability will be better. The stability aspect of Spark requires attention to code quality.\n",(0,i.yg)("img",{alt:"5",src:a(96783).A,width:"2035",height:"1440"})),(0,i.yg)("p",null,"The amount of data in our exposure table is in the billions of levels every day. We have the performance requirement to complete data processing within 5 minutes. We have the need to import and export data to Redis. We need import and export tools that can be connected to the data platform for task scheduling. . For the consideration of data volume, performance, scalability, and platform compatibility, we chose SeaTunnel as our data warehouse import and export tool."),(0,i.yg)("h1",{id:"import-hive-data-into-clickhouse"},"Import Hive data into ClickHouse"),(0,i.yg)("p",null,"The following will introduce our use of SeaTunnel.\nThe picture is a Hive table, which is our three-level product dimension table, including category products, dimension categories, and user population information. The primary key of the table is a third-level category ct_third_id, and the following value is the bitmap of two uids, which is the bitmap type of the user id. We need to import this Hive table into Clickhouse.\n",(0,i.yg)("img",{alt:"6",src:a(22292).A,width:"2036",height:"1440"})),(0,i.yg)("p",null,"SeaTunnel is easy to install, and the official website documentation describes how to install it. The figure below shows the configuration of SeaTunnel. In the configuration, env, source and sink are essential. In the env part, the example in the figure is the Spark configuration. The configuration includes concurrency, etc. These parameters can be adjusted. The source part is the data source. The Hive data source is configured here, including a Hive Select statement. Spark runs the SQL in the source configuration to read the data. UDF is supported here for simple ETL; the sink part is configured with Clickhouse, and you can see output_type= rowbinary and rowbinary are the self-developed acceleration solutions of Vipshop; pre_sql and check_sql are self-developed functions for data verification, which will be described in detail later; clickhouse.socket_timeout and bulk_size can be adjusted according to the actual situation.\n",(0,i.yg)("img",{alt:"7",src:a(38973).A,width:"2037",height:"1440"})),(0,i.yg)("p",null,"Run SeaTunnel, execute the sh script file, configure the conf file address and yarn information, and then you can.\n",(0,i.yg)("img",{alt:"8",src:a(62378).A,width:"2038",height:"1440"}),"\nSpark logs are generated during the running process, and both successful running and running errors can be viewed in the logs.\n",(0,i.yg)("img",{alt:"9",src:a(17587).A,width:"2038",height:"1440"})),(0,i.yg)("p",null,"In order to better fit the business, Vipshop will make some improvements to SeaTunnel. All our ETL tasks need to be rerun. We support pre_sql and check_sql to implement data rerun and logarithm. The main process is to execute pre_sql for preprocessing after the data is ready, delete the old partition data in Clickhouse, store it in a directory, and restore the partition and rename when it fails. check_sql will check, and the whole process will end after the check is passed; if the check fails, it will be rerun according to the configuration, and if the rerun fails, the corresponding person in charge will be alerted.\n",(0,i.yg)("img",{alt:"10",src:a(51747).A,width:"2037",height:"1440"})),(0,i.yg)("p",null,"Based on the 1.0 version of SeaTunnel, Vipshop has added RowBinary for acceleration, and it also makes it easier to import the binary files of HuperLogLog and BinaryBitmap from Hive to Clickhouse. We made changes in ClickHouse-jdbc, bulk_size, Hive-source. Use the extended api of CK-jdbc to write data to CK in rowbinary mode. Bulk_size introduces the control logic for writing to CK in rowbinary mode. Hive-source\nRDD is partitioned with HashPartitioner to break up data to prevent data from being skewed."),(0,i.yg)("p",null,"We also let SeaTunnel support multiple types. In order to circle the crowd, corresponding methods need to be implemented in Clickhouse, Preso, and Spark. We added Callback, HttpEntity, and RowBinaryStream that support Batch feature to Clickhouse-jdbc, added bitmap type mapping to Clickhouse-jdbc and Clickhouse-sink code, and implemented UDF of Clickhouse's Hyperloglog and Bitmap functions in Presto and Spark.\nIn the previous configuration, the clickhouse-sink part can specify the table name, and here is the difference between writing to the local table and the distributed table. The performance of writing to a distributed table is worse than that of writing to a local table, which will put more pressure on the Clickhouse cluster. However, in scenarios such as exposure meter, flow meter, and ABTest, two tables are required to join, and both tables are in the order of billions. . At this time, we hope that the Join key falls on the local machine, and the Join cost is smaller. When we built the table, we configured the murmurHash64 rule in the distributed table distribution rules of Clickhouse, and then directly configured the distributed table in the sink of Seatunnel, handed the writing rules to Clickhouse, and used the characteristics of the distributed table to write. Writing to the local table will put less pressure on Clickhouse, and the performance of writing will be better. In Seatunnel, we go to Clickhouse's System.cluster table to obtain the table distribution information and machine distribution host according to the sink's local table. Then write to these hosts according to the equalization rule. Put the distributed writing of data into Seatunnel.\nFor the writing of local tables and distributed tables, our future transformation direction is to implement consistent hashing in Seatunnel, write directly according to certain rules, such as Clickhouse, without relying on Clickhouse itself for data distribution, and improve Clickhouse's high CPU load problem."),(0,i.yg)("h1",{id:"clickhouse-data-import-into-hive"},"ClickHouse data import into Hive"),(0,i.yg)("p",null,"We have the needs of people in the circle. Every day, Vipshop gathers 200,000 people in the supplier circle, such as people born in the 1980s, Gao Fushuai, and Bai Fumei. These Bitmap crowd information in Clickhouse needs to be exported to the Hive table, coordinated with other ETL tasks in Hive, and finally pushed to PIKA for use by external media. We made SeaTunnel back-push Clickhouse Bitmap crowd data to Hive.\n",(0,i.yg)("img",{alt:"11",src:a(61914).A,width:"2035",height:"1440"})),(0,i.yg)("p",null,"The figure shows the SeaTunnel configuration. We configure the source as Clickhouse, the sink as Hive, and the data verification is also configured in Hive.\n",(0,i.yg)("img",{alt:"12",src:a(38161).A,width:"2035",height:"1440"})),(0,i.yg)("p",null,"Since we access SeaTunnel earlier, we have processed some modules, including adding plugin-spark-sink-hive module, plugin-spark-source-ClickHouse module, and rewriting Spark Row related methods so that they can be packaged through The Clickhouse data mapped by Schem, reconstruct the StructField and generate the DataFrame that finally needs to land on Hive. The latest version has many source and sink components, which is more convenient to use in SeaTunnel. It is now also possible to integrate the Flink connector directly in SeaTunnel."),(0,i.yg)("h1",{id:"integration-of-seatunnel-and-vipshop-data-platform"},"Integration of SeaTunnel and Vipshop Data Platform"),(0,i.yg)("p",null,"Each company has its own scheduling system, such as Beluga, Zeus. The scheduling tool of Vipshop is Shufang, and the scheduling tool integrates the data transmission tool. The following is the architecture diagram of the scheduling system, which includes the entry and exit of various types of data.\n",(0,i.yg)("img",{alt:"13",src:a(89768).A,width:"2036",height:"1440"})),(0,i.yg)("p",null,"The SeaTunnel task type is integrated into the platform. The picture is a screenshot of the scheduled task of Shufang. You can see that the selected part is a configured SeaTunnel task. resource information. The following shows the historical running instance information.\n",(0,i.yg)("img",{alt:"14",src:a(69383).A,width:"2037",height:"1440"})),(0,i.yg)("p",null,"We integrated SeaTunnel into the scheduling system. The Shufang Scheduling Master will assign tasks to the corresponding Agents according to the task types, and assign them to the appropriate machines to run according to the Agent load. The controller pulls the task scheduling configuration and information in the foreground. After arriving, a SeaTunnel cluster is generated and executed in a virtual environment similar to k8s pod and cgroup isolation. The running result will be judged by the data quality monitoring of the scheduling platform whether the task is completed and whether the operation is successful, and if it fails, it will rerun and alarm.\n",(0,i.yg)("img",{alt:"15",src:a(93598).A,width:"2038",height:"1440"})),(0,i.yg)("p",null,"SeaTunnel itself is a tool-based component, which is used to manage and control data blood relationship, data quality, historical records, high-alert monitoring, and resource allocation. We integrate SeaTunnel into the platform, and we can take advantage of the platform to take advantage of SeaTunnel.\nSeaTunnel is used for processing in the deposit crowd. By managing data, we divide the circled people into different people according to their paths and usage conditions, or thousands of people and thousands of faces, tag users, and push a certain type of people circled to users, analysts and suppliers.\n",(0,i.yg)("img",{alt:"16",src:a(13973).A,width:"2036",height:"1440"})),(0,i.yg)("p",null,"The traffic enters Kafka, enters the warehouse through Flink, and then forms a user label table through ETL. After the user label table is generated, we use the BitMap method implemented by Presto to type the data into a wide table in Hive. Users create tasks by box-selecting entries on the crowd system page, submit to Tengqun, and generate SQL query Clickhouse BitMap. Clickhouse's BitMap query speed is very fast. Due to its inherent advantages, we need to import Hive's BitMap table into Clickhouse through SeaTunnel. After the crowd is circled, we need to land the table to form a partition or a record of Clickhouse, and then store the resulting BitMap table in Hive through SeaTunnel. Finally, the synchronization tool will synchronize Hive's BitMap crowd results to the external media repository Pika. Around 20w people are circled every day.\nDuring the whole process, SeaTunnel is responsible for exporting the data from Hive to Clickhouse. After the ETL process of Clickhouse is completed, SeaTunnel exports the data from Clickhouse to Hive.\nIn order to fulfill this requirement, we implemented UDFs of ClickHouse's Hyperloglog and BitMap functions on Presto and Spark; we also developed the Seatunnel interface, so that the crowds circled by users using the Bitmap method in ClickHouse can be directly written to the Hive table through Seatunnel , without an intermediate landing step. Users can also call the SeaTunnel interface through spark to circle the crowd or reverse the crowd bitmap in Hive, so that the data can be directly transmitted to the ClickHouse result table without intermediate landing."),(0,i.yg)("h1",{id:"follow-up"},"Follow-up"),(0,i.yg)("p",null,"In the future, we will further improve the problem of high CPU load when Clickhouse writes data. In the next step, we will implement the CK-local mode of Clickhouse data source and read end in SeaTunnel, separate read and write, and reduce Clickhouse pressure. In the future we will also add more sink support, such as data push to Pika and corresponding data checking."))}u.isMDXComponent=!0},13309:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/1-1-f0cdf48f8c90391d9e8cfe410fc32bb1.png"},51747:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/10-15459320d13177fafe0fd49a06f92e03.png"},61914:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/11-8f601d01cedafe8901b091b5ddcefd59.png"},38161:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/12-9a03852b4e4065b3f9f909da1bb4b672.png"},89768:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/13-c93b070b1abe679688f557f3b6bcfc52.png"},69383:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/14-654566bbfb5ed478b1a9dcd28f2dba72.png"},93598:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/15-798a1029db30ff228befcc333645c3e4.png"},13973:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/16-8947f00847b3a55a537124964206e1b2.png"},912:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/2-0b1a1413f99ac6195aefc2146ba07c4b.png"},90809:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/3-a762d5f3914268cbc2b478215d8da72d.png"},57766:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/4-03112bb3e1bca7cc97ab7868fbdf6d78.png"},96783:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/5-e5c4ff850add4f0334c2f9a0de839c53.png"},22292:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/6-e37187a14e8316f82074f78b8a250a58.png"},38973:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/7-70fd49824f2fe94faa0ed91b9e31fdf6.png"},62378:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/8-fa6d66bcb7d1a37038666d5d63c64d3d.png"},17587:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/9-f08855ea40230b4f16d6c04408063346.png"}}]);