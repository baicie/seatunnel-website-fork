"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[88833],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var l=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=l.createContext({}),p=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return l.createElement(c.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,y=s["".concat(c,".").concat(m)]||s[m]||g[m]||a;return t?l.createElement(y,o(o({ref:n},u),{},{components:t})):l.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=t[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50797:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var l=t(58168),r=(t(96540),t(15680));const a={sidebar_position:4},o="\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a",i={unversionedId:"seatunnel-engine/local-mode-deployment",id:"version-2.3.9/seatunnel-engine/local-mode-deployment",title:"\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a",description:"\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/seatunnel-engine/local-mode-deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/local-mode-deployment",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/local-mode-deployment",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.3.9/seatunnel-engine/local-mode-deployment.md",tags:[],version:"2.3.9",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"SeaTunnel Engine(Zeta) \u5b89\u88c5\u90e8\u7f72",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/deployment"},next:{title:"\u90e8\u7f72 SeaTunnel Engine \u6df7\u5408\u6a21\u5f0f\u96c6\u7fa4",permalink:"/zh-CN/docs/2.3.9/seatunnel-engine/hybrid-cluster-deployment"}},c={},p=[{value:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72SeaTunnel Engine",id:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72seatunnel-engine",level:2},{value:"\u63d0\u4ea4\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4f5c\u4e1a",level:2},{value:"\u914d\u7f6e\u672c\u5730\u6a21\u5f0f\u7684JVM\u53c2\u6570",id:"\u914d\u7f6e\u672c\u5730\u6a21\u5f0f\u7684jvm\u53c2\u6570",level:3},{value:"\u4f5c\u4e1a\u8fd0\u7ef4",id:"\u4f5c\u4e1a\u8fd0\u7ef4",level:2}],u={toc:p},s="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,l.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u4ee5local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a"},"\u4ee5Local\u6a21\u5f0f\u8fd0\u884c\u4f5c\u4e1a"),(0,r.yg)("p",null,"\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u3002"),(0,r.yg)("p",null,"Local\u6a21\u5f0f\u4e0b\u6bcf\u4e2a\u4efb\u52a1\u90fd\u4f1a\u542f\u52a8\u4e00\u4e2a\u72ec\u7acb\u7684\u8fdb\u7a0b\uff0c\u4efb\u52a1\u8fd0\u884c\u5b8c\u6210\u540e\u8fdb\u7a0b\u4f1a\u9000\u51fa\u3002\u5728\u8be5\u6a21\u5f0f\u4e0b\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u4efb\u52a1\u7684\u6682\u505c\u3001\u6062\u590d\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u83b7\u53d6\u4efb\u52a1\u5217\u8868\u67e5\u770b\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301\u901a\u8fc7\u547d\u4ee4\u53d6\u6d88\u4f5c\u4e1a\uff0c\u53ea\u80fd\u901a\u8fc7Kill\u8fdb\u7a0b\u7684\u65b9\u5f0f\u7ec8\u6b62\u4efb\u52a1\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4e0d\u652f\u6301RESTful API\u3002")),(0,r.yg)("p",null,"\u6700\u63a8\u8350\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528SeaTunnel Engine\u7684",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.9/seatunnel-engine/separated-cluster-deployment"},"\u5206\u79bb\u96c6\u7fa4\u6a21\u5f0f")),(0,r.yg)("h2",{id:"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72seatunnel-engine"},"\u672c\u5730\u6a21\u5f0f\u90e8\u7f72SeaTunnel Engine"),(0,r.yg)("p",null,"\u672c\u5730\u6a21\u5f0f\u4e0b\uff0c\u4e0d\u9700\u8981\u90e8\u7f72SeaTunnel Engine\u96c6\u7fa4\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5373\u53ef\u63d0\u4ea4\u4f5c\u4e1a\u5373\u53ef\u3002\u7cfb\u7edf\u4f1a\u5728\u63d0\u4ea4\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u4e2d\u542f\u52a8SeaTunnel Engine(Zeta)\u670d\u52a1\u6765\u8fd0\u884c\u63d0\u4ea4\u7684\u4f5c\u4e1a\uff0c\u4f5c\u4e1a\u5b8c\u6210\u540e\u8fdb\u7a0b\u9000\u51fa\u3002"),(0,r.yg)("p",null,"\u8be5\u6a21\u5f0f\u4e0b\u53ea\u9700\u8981\u5c06\u4e0b\u8f7d\u548c\u5236\u4f5c\u597d\u7684\u5b89\u88c5\u5305\u62f7\u8d1d\u5230\u9700\u8981\u8fd0\u884c\u7684\u670d\u52a1\u5668\u4e0a\u5373\u53ef\uff0c\u5982\u679c\u9700\u8981\u8c03\u6574\u4f5c\u4e1a\u8fd0\u884c\u7684JVM\u53c2\u6570\uff0c\u53ef\u4ee5\u4fee\u6539$SEATUNNEL_HOME/config/jvm_client_options\u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u63d0\u4ea4\u4f5c\u4e1a"},"\u63d0\u4ea4\u4f5c\u4e1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -e local\n")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u672c\u5730\u6a21\u5f0f\u7684jvm\u53c2\u6570"},"\u914d\u7f6e\u672c\u5730\u6a21\u5f0f\u7684JVM\u53c2\u6570"),(0,r.yg)("p",null,"\u672c\u5730\u6a21\u5f0f\u652f\u6301\u4e24\u79cd\u8bbe\u7f6eJVM\u53c2\u6570\u7684\u65b9\u5f0f\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6dfb\u52a0JVM\u53c2\u6570\u5230",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_client_options"),"\u6587\u4ef6\u4e2d\u3002"),(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539",(0,r.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_client_options"),"\u6587\u4ef6\u4e2d\u7684JVM\u53c2\u6570\u3002 \u8bf7\u6ce8\u610f\uff0c\u8be5\u6587\u4ef6\u4e2d\u7684JVM\u53c2\u6570\u4f1a\u5e94\u7528\u5230\u6240\u6709\u4f7f\u7528",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel.sh"),"\u63d0\u4ea4\u7684\u4f5c\u4e1a\u3002\u5305\u62ecLocal\u6a21\u5f0f\u548c\u96c6\u7fa4\u6a21\u5f0f\u3002")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5728\u542f\u52a8Local\u6a21\u5f0f\u65f6\u6dfb\u52a0JVM\u53c2\u6570\u3002\u4f8b\u5982\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},'$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -m local -DJvmOption="-Xms2G -Xmx2G"')))),(0,r.yg)("h2",{id:"\u4f5c\u4e1a\u8fd0\u7ef4"},"\u4f5c\u4e1a\u8fd0\u7ef4"),(0,r.yg)("p",null,"Local\u6a21\u5f0f\u4e0b\u63d0\u4ea4\u7684\u4f5c\u4e1a\u4f1a\u5728\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u4e2d\u8fd0\u884c\uff0c\u4f5c\u4e1a\u5b8c\u6210\u540e\u8fdb\u7a0b\u4f1a\u9000\u51fa\uff0c\u5982\u679c\u8981\u4e2d\u6b62\u4f5c\u4e1a\u53ea\u9700\u8981\u9000\u51fa\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u5373\u53ef\u3002\u4f5c\u4e1a\u7684\u8fd0\u884c\u65e5\u5fd7\u4f1a\u8f93\u51fa\u5230\u63d0\u4ea4\u4f5c\u4e1a\u7684\u8fdb\u7a0b\u7684\u6807\u51c6\u8f93\u51fa\u4e2d\u3002"),(0,r.yg)("p",null,"\u4e0d\u652f\u6301\u5176\u5b83\u8fd0\u7ef4\u64cd\u4f5c\u3002"))}g.isMDXComponent=!0}}]);