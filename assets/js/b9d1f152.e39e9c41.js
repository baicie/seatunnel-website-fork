"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[1111],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),o=(n(96540),n(15680));const i={slug:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",title:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",tags:["Meetup"]},r="How dose Apache SeaTunnel (Incubating) refactor the API to decouple with the computing engine",s={permalink:"/blog/How dose Apache SeaTunnel refactor the API to decouple with the computing engine",editUrl:"https://github.com/apache/seatunnel-website/edit/main/blog/2022-05-31-engine.md",source:"@site/blog/2022-05-31-engine.md",title:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",description:"Translator | Critina",date:"2022-05-31T00:00:00.000Z",formattedDate:"May 31, 2022",tags:[{label:"Meetup",permalink:"/blog/tags/meetup"}],readingTime:11.1,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",title:"How dose Apache SeaTunnel refactor the API to decouple with the computing engine",tags:["Meetup"]},prevItem:{title:"Upcoming API Connector Development Analysis",permalink:"/blog/Upcoming API Connector Development Analysis"},nextItem:{title:"How to synchronize tens of billions of data based on SeaTunnel's ClickHouse",permalink:"/blog/How to synchronize tens of billions of data based on SeaTunnel's ClickHouse"}},l={authorsImageUrls:[]},c=[{value:"01 Background and motivation for refactoring",id:"01-background-and-motivation-for-refactoring",level:2},{value:"02 Apache SeaTunnel (Incubating) decouples with computing engine",id:"02-apache-seatunnel-incubating-decouples-with-computing-engine",level:2},{value:"03 Apache SeaTunnel(Incubating) overall design for refactoring",id:"03-apache-seatunnelincubating-overall-design-for-refactoring",level:2},{value:"04 Source API",id:"04-source-api",level:2},{value:"How to adapt to Spark and Flink engines",id:"how-to-adapt-to-spark-and-flink-engines",level:3},{value:"5 Sink API",id:"5-sink-api",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...i}=e;return(0,o.yg)(d,(0,a.A)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(85075).A,width:"1920",height:"1316"})),(0,o.yg)("p",null,"Translator | Critina"),(0,o.yg)("p",null,"In the May joint Meetup between Apache SeaTunnel and Apache Inlong, Li Zongwen, a senior engineer at WhaleOps, shared his experiences about finding and refactoring of the the four major problems with Apache SeaTunnel (Incubating).i.e. the connectors of SeaTunnel have to be implemented many times,the inconsistent parameters, SeaTunnel is not supportive of multiple versions of the engine, and it\u2019s difficult to upgrade the engine. In order to solve these problems, Li Zongwen aimed to decouple Apache SeaTunnel (Incubating) from thw computing engines, and re-factor the Source and Sink apis to improve the development experience."),(0,o.yg)("p",null,"This speech mainly consists of five parts.The first part is about Apache SeaTunnel (Incubator) refactoring background and motivation. The second part introduces Apache SeaTunnel (Incubating) Target for refactoring.The third part discusses Apache SeaTunnel (Incubating) overall design for refactoring. The last two parts is about Apache SeaTunnel (Incubating) Source API design and Apache SeaTunnel (Incubating) Sink API design."),(0,o.yg)("h2",{id:"01-background-and-motivation-for-refactoring"},"01 Background and motivation for refactoring"),(0,o.yg)("p",null,"Those of you who have used Apache SeaTunnel (Incubator) or developers should know that Apache SeaTunnel (Incubator) is now fully coupled with the engine, which is entirely based on Spark or Flink, and so are the configuration file parameters. From the perspective of contributors and users, we can find they face some problems."),(0,o.yg)("p",null,"In the view of the contributors, repeated implementing connector is meaningless and it is unable for potential contributors to contribute to the community due to inconsistent engine versions."),(0,o.yg)("p",null,"At present, many companies use Lambda architecture, Spark is used for offline operations and Flink is used for real-time operations. In the view of the users, it can be found that Spark may have the Connector of SeaTunnel, but Flink does not, and the parameters of the two engines for the Connector of the same storage engine are not unified, thus resulting a high cost of and deviating from its original intention of being easy to use. And some users question that Flink version 1.14 is not supported nowadays. While with the current SeaTunnel architecture, we must discard the previous version in order to support Flink version 1.14, which will bring great trouble for early version users."),(0,o.yg)("p",null,"As a result, it was difficult for us to either upgrade engine or support more versions."),(0,o.yg)("p",null,"In addition, Spark and Flink both adopt the Checkpoint fault-tolerant mechanism implemented by Chandy-Lamport algorithm and internally unify DataSet and DataStream. On this premise, we believe decoupling is feasible."),(0,o.yg)("h2",{id:"02-apache-seatunnel-incubating-decouples-with-computing-engine"},"02 Apache SeaTunnel (Incubating) decouples with computing engine"),(0,o.yg)("p",null,"Therefore, in order to solve the problems raised above, we set the following goals."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Connector is only implemented once. To solve the problems that parameters are not unified and Connector is implemented for too many times, we hope to achieve a unified Source and Sink API;")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Multiple versions of Spark and Flink engines are supported. A translation layer above the Source and Sink API is added to support multiple versions of Spark and Flink engines.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The logic for parallel shard of Source and the Sink submission should be clarified. We must provide a good API to support Connector development.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The full database synchronization in real-time scenarios should be supported. This is a derivative requirement that many users have mentioned for CDC support. I once participated the Flink CDC community before and many users pointed out that in the CDC scenario, if you wanted to use the Flink CDC directly, each table would have a link and there would be thousands of links for thousands of tables when you need to synchronize the whole library, which was unacceptable for both the database and the DBA. To solve this problem, the simplest way was to introduce Canal\u3001Debezium or other components, which were used to pull incremental data to Kafka or other MQ for intermediate storage, and then we could use Flink SQL for synchronization. This actually contradicted the original idea of the Flink CDC to reduce links. However, the Flink CDC aimed only a Connector and was unable to deal with the whole link, so the proposal was not seen in the SeaTunnel community. By the chance of the reconstruction, we submitted the proposal to the SeaTunnel community.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Automatic discovery and storage of meta information are realized. The users should have awful experience due to the storage engines such as Kafka lacking of record of the data structure, when we need to read structured data, the user must define the topic of structured data types before read one topic at a time . We hope once the configuration is completed, there is no need to do any redundant work again."))),(0,o.yg)("p",null,"Some people may wonder why we don\u2019t use Apache Beam directly. That is because Beam sources are divided into BOUNDED and UNBOUNDED sources, which means it needs to be implemented twice. Moreover, some features of Source and Sink are not supported, which will be mentioned later."),(0,o.yg)("h2",{id:"03-apache-seatunnelincubating-overall-design-for-refactoring"},"03 Apache SeaTunnel(Incubating) overall design for refactoring"),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(21910).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"The Apache SeaTunnel(Incubating) API architecture is described in the picture above."),(0,o.yg)("p",null,"The Source & Sink API is one of the core APIS of data integration, which defines the logic for parallel shard of Source and the commitment of Sink to realize the Connector."),(0,o.yg)("p",null,"The Engine API includes the translation and the execution layers. The translation is used to translate Souce and Sink API of SeaTunnel into connectors that can be run inside the engine."),(0,o.yg)("p",null,"The execution defines the execution logic of Source, Transform, Sink and other operations in the engine."),(0,o.yg)("p",null,"The Table SPI is mainly used to expose the interface of Source and Sink in SPI mode, and to specify mandatory and optional parameters of Connector etc."),(0,o.yg)("p",null,"The DataType includes SeaTunnel data structure used to isolate engines and declare Table schema."),(0,o.yg)("p",null,"The Catalog is Used to obtain Table schemes and Options, etc. The Catalog Storage is used to store Table Schemes defined by unstructured engines such as Kafka."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(11489).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"The execution flow we assumed nowadays can be see in the above picture."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Obtain task parameters from configuration files or UI.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Obtain the Table Schema, Option and other information by analyzing the parameters from Catalog.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Pull up the Connector of SeaTunnel in SPI mode and inject Table information.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Translate the Connector from SeaTunnel into the Connector within the engine.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Execute the operation logic of the engine. The multi-table distribution in the picture only exists in the synchronization of the whole database of CDC, while other connectors are single tables and do not need the distribution logic."))),(0,o.yg)("p",null,"It can be seen that the hardest part of the plan is to translate Source and Sink into an internal Source and Sink in the engine."),(0,o.yg)("p",null,"Many users today use Apache SeaTunnel (Incubating) not only as a data integration tool but also as a data storage tool, and use a lot of Spark and Flink SQLs. We want to preserve that SQL capability for users to upgrade seamlessly."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(33444).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"According to our research, the feature above shows the ideal execution logic of Source and Sink. Since SeaTunnel is incubated as WaterDrop, the terms in the figure are tended towards Spark."),(0,o.yg)("p",null,"Ideally, the Source and Sink coordinators can be run on the Driver, and the Source Reader and Sink Writer will run on the Worker. In terms of the Source Coordinator, we expect it to support several features."),(0,o.yg)("p",null,"The first capability is that the slicing logic of data can be dynamically added to the Reader."),(0,o.yg)("p",null,"The second is that the coordination of Reader can be supported. Source Reader is used to read data, and then send the data to the engine, and finally to the Source Writer for data writing. Meanwhile, Writer can support the two-phase transaction submission, and the coordinator of Sink supports the aggregation submission requirements of Connector such as Iceberg."),(0,o.yg)("h2",{id:"04-source-api"},"04 Source API"),(0,o.yg)("p",null,"After research, we found the following features that are required by Source."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Unified offline and real-time API , which supports that source is implemented only once and supports both offline and real-time API;")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Supportive of parallel reading. For example that Kafka generates a reader for each partition and execute in parallel.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Supporting dynamic slice-adding. For example, Kafka defines a regular topic, when a new topic needs to be added due to the volume of business, the Source API allows to dynamically add the slice to the job.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Supporting the work of coordinating reader, which is currently only needed in the CDC Connector. CDC is currently supported by NetFilx\u2019s DBlog parallel algorithms, which requires reader coordination between full synchronization and incremental synchronization.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Supporting a single reader to process multiple tables, i.e. to allows the whole database synchronization in the real-time scenario as mentioned above."))),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(27759).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"Based on the above requirements, we have created the basic API as shown in the figure above. And the code has been submitted to the API-Draft branch in the Apache SeaTunnel(Incubator) community. If you\u2019re interested, you can view the code in detail."),(0,o.yg)("h3",{id:"how-to-adapt-to-spark-and-flink-engines"},"How to adapt to Spark and Flink engines"),(0,o.yg)("p",null,"Flink and Spark unify the API of DataSet and DataStream, and they can support the first two features. Then, for the remaining three features, how do we"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Support dynamic slice-adding\uff1f"),(0,o.yg)("li",{parentName:"ul"},"Support the work of coordinating reader\uff1f"),(0,o.yg)("li",{parentName:"ul"},"Support a single reader to process multiple tables\uff1f")),(0,o.yg)("p",null,"Let's review the design with questions."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(43474).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"We found that other connectors do not need coordinators, except for CDC. For those connectors that do not need coordinators, we have a Source that supports parallel execution and engine translation."),(0,o.yg)("p",null,"As shown in the figure above, there is a slice enumerator on the left, which can list which slices the source needs and show what there are. After enumerating slices in real time, each slice would be distributed to SourceReader, the real data reading module. Boundedness marker is used to differentiate offline and real-time operations. Connector can mark whether there is a stop Offset in a slice. For example, Kafka can support real-time and offline operations. The degree of parallelism can be set for the ParallelSource in the engine to support parallel reading."),(0,o.yg)("p",null,"As shown in the figure above, in a scenario where a coordinator is required, Event transmission is done between the Reader and Enumerator. Enumerator coordinates events by the Event sent by the Reader. The Coordinated Source needs to ensure single parallelism at the engine level to ensure data consistency. Of course, this does not make good use of the engine\u2019s memory management mechanism, but trade-offs are necessary."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(53373).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"For the last question, how can we support a single reader to process multiple tables? This involves the Table API layer. Once all the required tables have been read from the Catalog, some of the tables may belong to a single job and can be read by a link, and some may need to be separated, depending on how Source is implemented. Since this is a special requirement, we want to make it easier for the developers. In the Table API layer, we will provide a SupportMultipleTable interface to declare that Source supports multiple Table reads. The Source is implemented based on the corresponding deserializer of multiple tables. As for how to separate derived multi-table data, Flink will adopt Side Output mechanism, while Spark is going to use Filter or Partition mechanism."),(0,o.yg)("h2",{id:"5-sink-api"},"5 Sink API"),(0,o.yg)("p",null,"At present, there are not many features required by Sink, but three mojor requirements are considerable according to our research."),(0,o.yg)("p",null,"The first is about idempotent writing, which requires no code and depends on whether the storage engine can support it."),(0,o.yg)("p",null,"The second is about distributed transactions. The mainstream method is two-phase commitments, such as Kafka etc."),(0,o.yg)("p",null,"The third is about the submission of aggregation. For Storage engines like Iceberg and Hoodie, we hope there is no issues triggered by small files, so we expect to aggregate these files into a single file and commit it as a whole."),(0,o.yg)("p",null,"Based on these three requirements, we built three APIS: SinkWriter, SinkCommitter, and SinkAggregated Committer. SinkWriter plays a role of writing, which may or may not be idempotent. SinkCommitter supports for two-phase commitments. SinkAggregatedCommitter supports for aggregated commitments."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(14144).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"Ideally, AggregatedCommitter runs in Driver in single or parallel, and Writer and Committer run in Worker with multiple parallels, with each parallel carrying its own pre-commit work and then send Aggregated messages to Aggregated committers."),(0,o.yg)("p",null,"Current advanced versions of Spark and Flink all support AggregatedCommitter running on the Driver(Job Manager) and Writer and Committer running on the worker(Task Manager)."),(0,o.yg)("p",null,(0,o.yg)("img",{src:n(3259).A,width:"1440",height:"810"})),(0,o.yg)("p",null,"However, for the lower versions of Flink, AggregatedCommitter cannot be supported to run in JM, so we are also carrying translation adaptation. Writer and Committer will act as pre-operators, packaged by Flink\u2019s ProcessFunction, supports concurrent pre-delivery and write, and implement two-phase commitment based on Flink\u2019s Checkpoint mechanism. This is also the current 2PC implementation of many of Flink connectors. The ProcessFunction can send messages about pre-commits to downstream Aggregated committers, which can be wrapped around operators such as SinkFunction or ProcessFunction. Of course, We need to ensure that only one single parallel will be started by the AggregatedCommitter in case of the broken of the logic of the aggregated commitment."),(0,o.yg)("p",null,"Thank you for watching. If you\u2019re interested in the specific implementations mentioned in my speech, you can refer to the Apache SeaTunnel (Incubating) community and check out the API-Draft branch code. Thank you again."))}p.isMDXComponent=!0},85075:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/0-1b0b7ccac22c107239f10a37321c7719.jpg"},21910:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1-cbc169e3bc121f1008b807103abe9fd8.jpg"},11489:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/2-507471aef3b2e7dc6ee4bc03188bc784.jpg"},33444:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/3-68113e215aa8e91a5d2469ccb37a3c22.jpg"},27759:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/4-ac907e3f8e305b9f6585d2171013a973.jpg"},43474:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/5-f743cf882b36bb3c383c66dec4bad95f.jpg"},53373:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/6-ef5d53449db28f4466c14827335d07a6.jpg"},14144:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/7-e9830d63f81f7139a7cd1d4d9b9f5e43.jpg"},3259:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/8-aa0537c76d15543b46623445ff00e490.jpg"}}]);