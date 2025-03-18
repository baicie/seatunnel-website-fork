"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[44695],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,f=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=g;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},37618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_position:3},l="Quick Start With Flink",i={unversionedId:"start-v2/locally/quick-start-flink",id:"start-v2/locally/quick-start-flink",title:"Quick Start With Flink",description:"Step 1: Deploy SeaTunnel And Connectors",source:"@site/docs/start-v2/locally/quick-start-flink.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-flink",permalink:"/docs/start-v2/locally/quick-start-flink",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/docs/start-v2/locally/quick-start-flink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Quick Start With SeaTunnel Engine",permalink:"/docs/start-v2/locally/quick-start-seatunnel-engine"},next:{title:"Quick Start With Spark",permalink:"/docs/start-v2/locally/quick-start-spark"}},s={},p=[{value:"Step 1: Deploy SeaTunnel And Connectors",id:"step-1-deploy-seatunnel-and-connectors",level:2},{value:"Step 2: Deployment And Config Flink",id:"step-2-deployment-and-config-flink",level:2},{value:"Step 3: Add Job Config File To Define A Job",id:"step-3-add-job-config-file-to-define-a-job",level:2},{value:"Step 4: Run SeaTunnel Application",id:"step-4-run-seatunnel-application",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"quick-start-with-flink"},"Quick Start With Flink"),(0,o.yg)("h2",{id:"step-1-deploy-seatunnel-and-connectors"},"Step 1: Deploy SeaTunnel And Connectors"),(0,o.yg)("p",null,"Before starting, make sure you have downloaded and deployed SeaTunnel as described in ",(0,o.yg)("a",{parentName:"p",href:"/docs/start-v2/locally/deployment"},"Deployment")),(0,o.yg)("h2",{id:"step-2-deployment-and-config-flink"},"Step 2: Deployment And Config Flink"),(0,o.yg)("p",null,"Please ",(0,o.yg)("a",{parentName:"p",href:"https://flink.apache.org/downloads.html"},"Download Flink")," first(",(0,o.yg)("strong",{parentName:"p"},"required version >= 1.12.0"),"). For more information you can see ",(0,o.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"Getting Started: Standalone")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Configure SeaTunnel"),": Change the setting in ",(0,o.yg)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/config/seatunnel-env.sh")," and set ",(0,o.yg)("inlineCode",{parentName:"p"},"FLINK_HOME")," to the Flink deployment dir."),(0,o.yg)("h2",{id:"step-3-add-job-config-file-to-define-a-job"},"Step 3: Add Job Config File To Define A Job"),(0,o.yg)("p",null,"Edit ",(0,o.yg)("inlineCode",{parentName:"p"},"config/v2.streaming.conf.template"),", which determines the way and logic of data input, processing, and output after seatunnel is started.\nThe following is an example of the configuration file, which is the same as the example application mentioned above."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FieldMapper {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    field_mapper = {\n      age = age\n      name = new_name\n    }\n  }\n}\n\nsink {\n  Console {\n    plugin_input = "fake1"\n  }\n}\n\n')),(0,o.yg)("p",null,"More information about config please check ",(0,o.yg)("a",{parentName:"p",href:"/docs/concept/config"},"Config Concept")),(0,o.yg)("h2",{id:"step-4-run-seatunnel-application"},"Step 4: Run SeaTunnel Application"),(0,o.yg)("p",null,"You can start the application by the following commands:"),(0,o.yg)("p",null,"Flink version between ",(0,o.yg)("inlineCode",{parentName:"p"},"1.12.x")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"1.14.x")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-flink-13-connector-v2.sh --config ./config/v2.streaming.conf.template\n')),(0,o.yg)("p",null,"Flink version between ",(0,o.yg)("inlineCode",{parentName:"p"},"1.15.x")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"1.18.x")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-flink-15-connector-v2.sh --config ./config/v2.streaming.conf.template\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"See The Output"),": When you run the command, you can see its output in your console. This\nis a sign to determine whether the command ran successfully or not."),(0,o.yg)("p",null,"The SeaTunnel console will print some logs as below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,o.yg)("h2",{id:"whats-more"},"What's More"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Start write your own config file now, choose the ",(0,o.yg)("a",{parentName:"li",href:"../../connector-v2/source"},"connector")," you want to use, and configure the parameters according to the connector's documentation."),(0,o.yg)("li",{parentName:"ul"},"See ",(0,o.yg)("a",{parentName:"li",href:"/docs/other-engine/flink"},"SeaTunnel With Flink")," if you want to know more about SeaTunnel With Flink."),(0,o.yg)("li",{parentName:"ul"},"SeaTunnel have a builtin engine named ",(0,o.yg)("inlineCode",{parentName:"li"},"Zeta"),", and it's the default engine of SeaTunnel. You can follow ",(0,o.yg)("a",{parentName:"li",href:"/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start")," to configure and run a data synchronization job.")))}d.isMDXComponent=!0}}]);