"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[23785],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||l;return a?t.createElement(d,o(o({ref:n},c),{},{components:a})):t.createElement(d,o({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},54376:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const l={},o="Kafka",i={unversionedId:"connector-v2/source/kafka",id:"version-2.3.6/connector-v2/source/kafka",title:"Kafka",description:"Kafka source connector",source:"@site/versioned_docs/version-2.3.6/connector-v2/source/kafka.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/kafka",permalink:"/docs/2.3.6/connector-v2/source/kafka",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/connector-v2/source/kafka.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Source Common Options",permalink:"/docs/2.3.6/connector-v2/source/common-options"},next:{title:"Sink",permalink:"/docs/2.3.6/category/sink-v2"}},s={},p=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Regex Topic",id:"regex-topic",level:3},{value:"AWS MSK SASL/SCRAM",id:"aws-msk-saslscram",level:3},{value:"AWS MSK IAM",id:"aws-msk-iam",level:3},{value:"Kerberos Authentication Example",id:"kerberos-authentication-example",level:3},{value:"Multiple Kafka Source",id:"multiple-kafka-source",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Kafka source connector")),(0,r.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Spark",(0,r.yg)("br",null),"\nFlink",(0,r.yg)("br",null),"\nSeatunnel Zeta",(0,r.yg)("br",null))),(0,r.yg)("h2",{id:"key-features"},"Key Features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"stream")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.3.6/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Source connector for Apache Kafka."),(0,r.yg)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.yg)("p",null,"In order to use the Kafka connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Datasource"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.yg)("th",{parentName:"tr",align:null},"Maven"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kafka"),(0,r.yg)("td",{parentName:"tr",align:null},"Universal"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/seatunnel-connectors-v2/connector-kafka"},"Download"))))),(0,r.yg)("h2",{id:"source-options"},"Source Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topic"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic name(s) to read data from when the table is used as source. It also supports topic list for source by separating topic by comma like 'topic-1,topic-2'.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Topic list config You can configure only one ",(0,r.yg)("inlineCode",{parentName:"td"},"table_list")," and one ",(0,r.yg)("inlineCode",{parentName:"td"},"topic")," at the same time")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Comma separated list of Kafka brokers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"If ",(0,r.yg)("inlineCode",{parentName:"td"},"pattern")," is set to ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),",the regular expression for a pattern of topic names to read from. All topics in clients with names that match the specified regular expression will be subscribed by the consumer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"SeaTunnel-Consumer-Group"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Kafka consumer group id"),", used to distinguish different consumer groups.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"commit_on_checkpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"If true the consumer's offset will be periodically committed in the background.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"kafka.config"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"In addition to the above necessary parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"td"},"Kafka consumer")," client, users can also specify multiple ",(0,r.yg)("inlineCode",{parentName:"td"},"consumer")," client non-mandatory parameters, covering ",(0,r.yg)("a",{parentName:"td",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The structure of the data, including field names and field types.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"json"),(0,r.yg)("td",{parentName:"tr",align:null},'Data format. The default format is json. Optional text format, canal_json, debezium_json, ogg_json and avro.If you use json or text format. The default field separator is ", ". If you customize the delimiter, add the "field_delimiter" option.If you use canal format, please refer to ',(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.6/connector-v2/formats/canal-json"},"canal-json")," for details.If you use debezium format, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.6/connector-v2/formats/debezium-json"},"debezium-json")," for details.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format_error_handle_way"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"fail"),(0,r.yg)("td",{parentName:"tr",align:null},"The processing method of data format error. The default value is fail, and the optional value is (fail, skip). When fail is selected, data format error will block and an exception will be thrown. When skip is selected, data format error will skip this line data.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},","),(0,r.yg)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode"),(0,r.yg)("td",{parentName:"tr",align:null},"StartMode","[earliest]",",","[group_offsets]",",","[latest]",",","[specific_offsets]",",","[timestamp]"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"group_offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"The initial consumption pattern of consumers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.offsets"),(0,r.yg)("td",{parentName:"tr",align:null},"Config"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"The offset required for consumption mode to be specific_offsets.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"start_mode.timestamp"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},'The time required for consumption mode to be "timestamp".')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition-discovery.interval-millis"),(0,r.yg)("td",{parentName:"tr",align:null},"Long"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-1"),(0,r.yg)("td",{parentName:"tr",align:null},"The interval for dynamically discovering topics and partitions.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-"),(0,r.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.3.6/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,r.yg)("h2",{id:"task-example"},"Task Example"),(0,r.yg)("h3",{id:"simple"},"Simple"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This example reads the data of kafka's topic_1, topic_2, topic_3 and prints it to the client.And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in Install SeaTunnel to install and deploy SeaTunnel. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.6/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.6/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  parallelism = 2\n  job.mode = "BATCH"\n}\nsource {\n  Kafka {\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n    format = text\n    field_delimiter = "#"\n    topic = "topic_1,topic_2,topic_3"\n    bootstrap.servers = "localhost:9092"\n    kafka.config = {\n      client.id = client_1\n      max.poll.records = 500\n      auto.offset.reset = "earliest"\n      enable.auto.commit = "false"\n    }\n  }  \n}\nsink {\n  Console {}\n}\n')),(0,r.yg)("h3",{id:"regex-topic"},"Regex Topic"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n          topic = ".*seatunnel*."\n          pattern = "true" \n          bootstrap.servers = "localhost:9092"\n          consumer.group = "seatunnel_group"\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-saslscram"},"AWS MSK SASL/SCRAM"),(0,r.yg)("p",null,"Replace the following ",(0,r.yg)("inlineCode",{parentName:"p"},"${username}")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${password}")," with the configuration values in AWS MSK."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9096,xxx.amazonaws.com.cn:9096,xxxx.amazonaws.com.cn:9096"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_SSL\n            sasl.mechanism=SCRAM-SHA-512\n            sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=AWS_MSK_IAM\n            #sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            #sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"aws-msk-iam"},"AWS MSK IAM"),(0,r.yg)("p",null,"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"aws-msk-iam-auth-1.1.5.jar")," from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/aws/aws-msk-iam-auth/releases"},"https://github.com/aws/aws-msk-iam-auth/releases")," and put it in ",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/plugin/kafka/lib")," dir."),(0,r.yg)("p",null,"Please ensure the IAM policy have ",(0,r.yg)("inlineCode",{parentName:"p"},'"kafka-cluster:Connect",'),". Like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'"Effect": "Allow",\n"Action": [\n    "kafka-cluster:Connect",\n    "kafka-cluster:AlterCluster",\n    "kafka-cluster:DescribeCluster"\n],\n')),(0,r.yg)("p",null,"Source Config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "xx.amazonaws.com.cn:9098,xxx.amazonaws.com.cn:9098,xxxx.amazonaws.com.cn:9098"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            #security.protocol=SASL_SSL\n            #sasl.mechanism=SCRAM-SHA-512\n            #sasl.jaas.config="org.apache.kafka.common.security.scram.ScramLoginModule required username=\\"username\\" password=\\"password\\";"\n            security.protocol=SASL_SSL\n            sasl.mechanism=AWS_MSK_IAM\n            sasl.jaas.config="software.amazon.msk.auth.iam.IAMLoginModule required;"\n            sasl.client.callback.handler.class="software.amazon.msk.auth.iam.IAMClientCallbackHandler"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"kerberos-authentication-example"},"Kerberos Authentication Example"),(0,r.yg)("p",null,"Source Config"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'source {\n    Kafka {\n        topic = "seatunnel"\n        bootstrap.servers = "127.0.0.1:9092"\n        consumer.group = "seatunnel_group"\n        kafka.config = {\n            security.protocol=SASL_PLAINTEXT\n            sasl.kerberos.service.name=kafka\n            sasl.mechanism=GSSAPI\n            java.security.krb5.conf="/etc/krb5.conf"\n            sasl.jaas.config="com.sun.security.auth.module.Krb5LoginModule required \\n        useKeyTab=true \\n        storeKey=true  \\n        keyTab=\\"/path/to/xxx.keytab\\" \\n        principal=\\"user@xxx.com\\";"\n        }\n    }\n}\n')),(0,r.yg)("h3",{id:"multiple-kafka-source"},"Multiple Kafka Source"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This is written to the same pg table according to different formats and topics of parsing kafka Perform upsert operations based on the id")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  Kafka {\n    bootstrap.servers = "kafka_e2e:9092"\n    table_list = [\n      {\n        topic = "^test-ogg-sou.*"\n        pattern = "true"\n        consumer.group = "ogg_multi_group"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = ogg_json\n      },\n      {\n        topic = "test-cdc_mds"\n        start_mode = earliest\n        schema = {\n          fields {\n            id = "int"\n            name = "string"\n            description = "string"\n            weight = "string"\n          }\n        },\n        format = canal_json\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://postgresql:5432/test?loggerLevel=OFF"\n    user = test\n    password = test\n    generate_sink_sql = true\n    database = test\n    table = public.sink\n    primary_keys = ["id"]\n  }\n}\n')))}m.isMDXComponent=!0}}]);