"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92510],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),y=a,d=u["".concat(s,".").concat(y)]||u[y]||g[y]||l;return t?r.createElement(d,o(o({ref:n},p),{},{components:t})):r.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=y;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},90259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),a=(t(96540),t(15680));const l={sidebar_position:3},o=void 0,i={unversionedId:"start-v2/locally/quick-start-flink",id:"version-2.3.7/start-v2/locally/quick-start-flink",title:"quick-start-flink",description:"----------------",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/quick-start-flink.md",sourceDirName:"start-v2/locally",slug:"/start-v2/locally/quick-start-flink",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-flink",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.7/start-v2/locally/quick-start-flink.md",tags:[],version:"2.3.7",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"quick-start-seatunnel-engine",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"},next:{title:"quick-start-spark",permalink:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-spark"}},s={},c=[{value:"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668",id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668",level:2},{value:"\u6b65\u9aa4 2: \u90e8\u7f72\u5e76\u914d\u7f6eFlink",id:"\u6b65\u9aa4-2-\u90e8\u7f72\u5e76\u914d\u7f6eflink",level:2},{value:"\u6b65\u9aa4 3: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",id:"\u6b65\u9aa4-3-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a",level:2},{value:"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f",id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f",level:2},{value:"\u6b64\u5916",id:"\u6b64\u5916",level:2}],p={toc:c},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("h1",{id:"flink-engine\u5feb\u901f\u5f00\u59cb"},"Flink Engine\u5feb\u901f\u5f00\u59cb"),(0,a.yg)("h2",{id:"\u6b65\u9aa4-1-\u90e8\u7f72seatunnel\u53ca\u8fde\u63a5\u5668"},"\u6b65\u9aa4 1: \u90e8\u7f72SeaTunnel\u53ca\u8fde\u63a5\u5668"),(0,a.yg)("p",null,"\u5728\u5f00\u59cb\u524d\uff0c\u8bf7\u786e\u4fdd\u60a8\u5df2\u7ecf\u6309\u7167",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/deployment"},"\u90e8\u7f72"),"\u4e2d\u7684\u63cf\u8ff0\u4e0b\u8f7d\u5e76\u90e8\u7f72\u4e86SeaTunnel\u3002"),(0,a.yg)("h2",{id:"\u6b65\u9aa4-2-\u90e8\u7f72\u5e76\u914d\u7f6eflink"},"\u6b65\u9aa4 2: \u90e8\u7f72\u5e76\u914d\u7f6eFlink"),(0,a.yg)("p",null,"\u8bf7\u5148",(0,a.yg)("a",{parentName:"p",href:"https://flink.apache.org/downloads.html"},"\u4e0b\u8f7dFlink"),"(",(0,a.yg)("strong",{parentName:"p"},"\u9700\u8981\u7248\u672c >= 1.12.0"),")\u3002\u66f4\u591a\u4fe1\u606f\u60a8\u53ef\u4ee5\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/standalone/overview/"},"\u5165\u95e8: Standalone\u6a21\u5f0f")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u914d\u7f6eSeaTunnel"),": \u4fee\u6539",(0,a.yg)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh"),"\u4e2d\u7684\u8bbe\u7f6e\uff0c\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"FLINK_HOME"),"\u914d\u7f6e\u8bbe\u7f6e\u4e3aFlink\u7684\u90e8\u7f72\u76ee\u5f55\u3002"),(0,a.yg)("h2",{id:"\u6b65\u9aa4-3-\u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"},"\u6b65\u9aa4 3: \u6dfb\u52a0\u4f5c\u4e1a\u914d\u7f6e\u6587\u4ef6\u6765\u5b9a\u4e49\u4f5c\u4e1a"),(0,a.yg)("p",null,"\u7f16\u8f91",(0,a.yg)("inlineCode",{parentName:"p"},"config/v2.streaming.conf.template"),"\uff0c\u5b83\u51b3\u5b9a\u4e86SeaTunnel\u542f\u52a8\u540e\u6570\u636e\u8f93\u5165\u3001\u5904\u7406\u548c\u8f93\u51fa\u7684\u65b9\u5f0f\u53ca\u903b\u8f91\u3002\n\u4e0b\u9762\u662f\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\uff0c\u5b83\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u76f8\u540c\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  FieldMapper {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    field_mapper = {\n      age = age\n      name = new_name\n    }\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n\n')),(0,a.yg)("p",null,"\u5173\u4e8e\u914d\u7f6e\u7684\u66f4\u591a\u4fe1\u606f\u8bf7\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/concept/config"},"\u914d\u7f6e\u7684\u57fa\u672c\u6982\u5ff5")),(0,a.yg)("h2",{id:"\u6b65\u9aa4-4-\u8fd0\u884cseatunnel\u5e94\u7528\u7a0b\u5e8f"},"\u6b65\u9aa4 4: \u8fd0\u884cSeaTunnel\u5e94\u7528\u7a0b\u5e8f"),(0,a.yg)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,a.yg)("p",null,"Flink\u7248\u672c",(0,a.yg)("inlineCode",{parentName:"p"},"1.12.x"),"\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"1.14.x")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-flink-13-connector-v2.sh --config ./config/v2.streaming.conf.template\n')),(0,a.yg)("p",null,"Flink\u7248\u672c",(0,a.yg)("inlineCode",{parentName:"p"},"1.15.x"),"\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"1.16.x")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'cd "apache-seatunnel-${version}"\n./bin/start-seatunnel-flink-15-connector-v2.sh --config ./config/v2.streaming.conf.template\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u67e5\u770b\u8f93\u51fa"),": \u5f53\u60a8\u8fd0\u884c\u8be5\u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u770b\u5230\u5b83\u7684\u8f93\u51fa\u3002\u60a8\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u662f\u547d\u4ee4\u8fd0\u884c\u6210\u529f\u6216\u5931\u8d25\u7684\u6807\u5fd7\u3002"),(0,a.yg)("p",null,"SeaTunnel\u63a7\u5236\u53f0\u5c06\u4f1a\u6253\u5370\u4e00\u4e9b\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"fields : name, age\ntypes : STRING, INT\nrow=1 : elWaB, 1984352560\nrow=2 : uAtnp, 762961563\nrow=3 : TQEIB, 2042675010\nrow=4 : DcFjo, 593971283\nrow=5 : SenEb, 2099913608\nrow=6 : DHjkg, 1928005856\nrow=7 : eScCM, 526029657\nrow=8 : sgOeE, 600878991\nrow=9 : gwdvw, 1951126920\nrow=10 : nSiKE, 488708928\nrow=11 : xubpl, 1420202810\nrow=12 : rHZqb, 331185742\nrow=13 : rciGD, 1112878259\nrow=14 : qLhdI, 1457046294\nrow=15 : ZTkRx, 1240668386\nrow=16 : SGZCr, 94186144\n")),(0,a.yg)("h2",{id:"\u6b64\u5916"},"\u6b64\u5916"),(0,a.yg)("p",null,"\u73b0\u5728,\u60a8\u5df2\u7ecf\u5feb\u901f\u6d4f\u89c8\u4e86SeaTunnel\u4f7f\u7528Flink\u5f15\u64ce\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7\u5728",(0,a.yg)("a",{parentName:"p",href:"/docs/category/connector-v2"},"\u8fde\u63a5\u5668"),"\u4e2d\u627e\u5230SeaTunnel\u6240\u652f\u6301\u7684\u6240\u6709sources\u548csinks\u3002\n\u5982\u679c\u60a8\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u5173\u4e8eSeaTunnel\u8fd0\u884c\u5728Flink\u4e0a\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/other-engine/flink"},"\u57fa\u4e8eFlink\u7684SeaTunnel"),"\u3002"),(0,a.yg)("p",null,"SeaTunnel\u6709\u5185\u7f6e\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"Zeta"),"\u5f15\u64ce\uff0c\u5b83\u662f\u4f5c\u4e3aSeaTunnel\u7684\u9ed8\u8ba4\u5f15\u64ce\u3002\u60a8\u53ef\u4ee5\u53c2\u8003",(0,a.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.7/start-v2/locally/quick-start-seatunnel-engine"},"\u5feb\u901f\u5f00\u59cb"),"\u914d\u7f6e\u548c\u8fd0\u884c\u6570\u636e\u540c\u6b65\u4f5c\u4e1a\u3002"))}g.isMDXComponent=!0}}]);