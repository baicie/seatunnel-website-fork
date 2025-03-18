"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[42105],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(y,l(l({ref:n},c),{},{components:t})):r.createElement(y,l({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const o={},l=void 0,s={unversionedId:"spark/deployment",id:"version-2.1.0/spark/deployment",title:"deployment",description:"Deployment and run",source:"@site/versioned_docs/version-2.1.0/spark/deployment.md",sourceDirName:"spark",slug:"/spark/deployment",permalink:"/zh-CN/docs/2.1.0/spark/deployment",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/deployment.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/zh-CN/docs/2.1.0/spark/configuration/transform-plugins/transform-plugin"},next:{title:"Download and install",permalink:"/zh-CN/docs/2.1.0/spark/installation"}},i={},p=[{value:"Deployment and run",id:"deployment-and-run",level:2},{value:"Run seatunnel locally in local mode",id:"run-seatunnel-locally-in-local-mode",level:2},{value:"Run seatunnel on Spark Standalone cluster",id:"run-seatunnel-on-spark-standalone-cluster",level:2},{value:"Run seatunnel on Yarn cluster",id:"run-seatunnel-on-yarn-cluster",level:2},{value:"Run seatunnel on Mesos cluster",id:"run-seatunnel-on-mesos-cluster",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"deployment-and-run"},"Deployment and run"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"seatunnel v2 For Spark relies on the Java runtime environment and Spark. For detailed seatunnel installation steps, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/installation"},"installing seatunnel"))),(0,a.yg)("p",null,"The following focuses on how different platforms operate:"),(0,a.yg)("h2",{id:"run-seatunnel-locally-in-local-mode"},"Run seatunnel locally in local mode"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/application.conf\n")),(0,a.yg)("h2",{id:"run-seatunnel-on-spark-standalone-cluster"},"Run seatunnel on Spark Standalone cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")),(0,a.yg)("h2",{id:"run-seatunnel-on-yarn-cluster"},"Run seatunnel on Yarn cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")),(0,a.yg)("h2",{id:"run-seatunnel-on-mesos-cluster"},"Run seatunnel on Mesos cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master mesos://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")),(0,a.yg)("p",null,"For the meaning of the ",(0,a.yg)("inlineCode",{parentName:"p"},"master")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"deploy-mode")," parameters of ",(0,a.yg)("inlineCode",{parentName:"p"},"start-seatunnel-spark.sh")," , please refer to: ",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1.0/spark/commands/start-seatunnel-spark.sh"},"Command Instructions")),(0,a.yg)("p",null,"If you want to specify the resource size occupied by ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel")," when running, or other ",(0,a.yg)("inlineCode",{parentName:"p"},"Spark parameters")," , you can specify it in the configuration file specified by ",(0,a.yg)("inlineCode",{parentName:"p"},"--config")," :"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  spark.executor.instances = 2\n  spark.executor.cores = 1\n  spark.executor.memory = "1g"\n  ...\n}\n...\n')),(0,a.yg)("p",null,"For how to configure ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel")," , please refer to ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel")," ",(0,a.yg)("a",{parentName:"p",href:"./configuration"},"common configuration")))}d.isMDXComponent=!0}}]);