"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18953,82766],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=p(n),s=r,d=m["".concat(c,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(d,o(o({ref:t},g),{},{components:n})):a.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},47552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o=void 0,i={unversionedId:"connector-v2/changelog/connector-http-wechat",id:"connector-v2/changelog/connector-http-wechat",title:"connector-http-wechat",description:"Change Log",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-http-wechat.md",sourceDirName:"connector-v2/changelog",slug:"/connector-v2/changelog/connector-http-wechat",permalink:"/zh-CN/docs/connector-v2/changelog/connector-http-wechat",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/changelog/connector-http-wechat.md",tags:[],version:"current",frontMatter:{}},c={},p=[],g={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("details",null,(0,r.yg)("summary",null," Change Log "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Change"),(0,r.yg)("th",{parentName:"tr",align:null},"Commit"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Restapi]"," Allow metrics information to be associated to logical plan nodes (#7786)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6b7c53d03c"},"https://github.com/apache/seatunnel/commit/6b7c53d03c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.9")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Core]"," Support using upstream table placeholders in sink options and auto replacement (#7131)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/c4ca74122c"},"https://github.com/apache/seatunnel/commit/c4ca74122c")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]"," Support TableSourceFactory/TableSinkFactory on http (#5816)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/6f49ec6ead"},"https://github.com/apache/seatunnel/commit/6f49ec6ead")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][build]"," Give the maven module a human readable name (#4114)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/d7cd601051"},"https://github.com/apache/seatunnel/commit/d7cd601051")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Improve][Project]"," Code format with spotless plugin. (#4101)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/a2ab166561"},"https://github.com/apache/seatunnel/commit/a2ab166561")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Hotfix][OptionRule]"," Fix option rule about all connectors (#3592)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/226dc6a119"},"https://github.com/apache/seatunnel/commit/226dc6a119")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","[Http]"," Add option rules ","&","&"," Improve Myhours sink connector (#3351)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/cc8bb60c83"},"https://github.com/apache/seatunnel/commit/cc8bb60c83")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Bug][Connector-V2]"," Fix wechat sink data serialization (#2856)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/3aee11fc16"},"https://github.com/apache/seatunnel/commit/3aee11fc16")),(0,r.yg)("td",{parentName:"tr",align:null},"2.3.0-beta")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"[Feature][Connector-V2]","  Add Enterprise Wechat sink connector (#2412)"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/seatunnel/commit/3e200e0a38"},"https://github.com/apache/seatunnel/commit/3e200e0a38")),(0,r.yg)("td",{parentName:"tr",align:null},"2.2.0-beta"))))))}u.isMDXComponent=!0},65164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var a=n(58168),r=(n(96540),n(15680)),l=n(47552);const o={},i="Enterprise WeChat",c={unversionedId:"connector-v2/sink/Enterprise-WeChat",id:"connector-v2/sink/Enterprise-WeChat",title:"Enterprise WeChat",description:"Enterprise WeChat \u63a5\u6536\u5668\u8fde\u63a5\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Enterprise-WeChat.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Enterprise-WeChat",permalink:"/zh-CN/docs/connector-v2/sink/Enterprise-WeChat",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/sink/Enterprise-WeChat.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Email",permalink:"/zh-CN/docs/connector-v2/sink/Email"},next:{title:"\u98de\u4e66",permalink:"/zh-CN/docs/connector-v2/sink/Feishu"}},p={},g=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:2},{value:"\u5173\u952e\u7279\u6027",id:"\u5173\u952e\u7279\u6027",level:2},{value:"\u9009\u9879",id:"\u9009\u9879",level:2},{value:"url string",id:"url-string",level:3},{value:"mentioned_list array",id:"mentioned_list-array",level:3},{value:"mentioned_mobile_list array",id:"mentioned_mobile_list-array",level:3},{value:"common options",id:"common-options",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u53d8\u66f4\u65e5\u5fd7",id:"\u53d8\u66f4\u65e5\u5fd7",level:2}],m={toc:g},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"enterprise-wechat"},"Enterprise WeChat"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Enterprise WeChat \u63a5\u6536\u5668\u8fde\u63a5\u5668")),(0,r.yg)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.yg)("p",null,"\u4e00\u4e2a\u4f7f\u7528 Enterprise WeChat \u673a\u5668\u4eba\u53d1\u9001\u6d88\u606f\u7684\u63a5\u6536\u63d2\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u4f8b\u5982\uff0c\u5982\u679c\u6765\u81ea\u4e0a\u6e38\u7684\u6570\u636e\u662f ","[",(0,r.yg)("inlineCode",{parentName:"p"},'"alarmStatus": "firing", "alarmTime": "2022-08-03 01:38:49"\uff0c"alarmContent": "The disk usage exceeds the threshold"'),"]",", \u5fae\u4fe1\u673a\u5668\u4eba\u7684\u8f93\u51fa\u5185\u5bb9\u5982\u4e0b:"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},"alarmStatus: firing \nalarmTime: 2022-08-03 01:38:49\nalarmContent: The disk usage exceeds the threshold\n")),(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"\u5c0f\u8d34\u58eb: WeChat \u63a5\u6536\u5668\u4ec5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"strong"},"string")," \u7c7b\u578b webhook \uff0c\u6e90\u6570\u636e\u5c06\u88ab\u89c6\u4e3awebhook\u4e2d\u7684\u6b63\u6587\u5185\u5bb9."))),(0,r.yg)("h2",{id:"\u5173\u952e\u7279\u6027"},"\u5173\u952e\u7279\u6027"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/zh-CN/docs/concept/connector-v2-features"},"\u7cbe\u786e\u4e00\u6b21"))),(0,r.yg)("h2",{id:"\u9009\u9879"},"\u9009\u9879"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.yg)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"url"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mentioned_list"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"mentioned_mobile_list"),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null}),(0,r.yg)("td",{parentName:"tr",align:null},"\u5426"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))),(0,r.yg)("h3",{id:"url-string"},"url ","[string]"),(0,r.yg)("p",null,"\u4f01\u4e1a\u5fae\u4fe1\u7f51\u7edc\u6302\u94a9 url \u683c\u5f0f\u4e3a ",(0,r.yg)("a",{parentName:"p",href:"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX%EF%BC%88string%EF%BC%89"},"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=XXXXXX\uff08string\uff09")),(0,r.yg)("h3",{id:"mentioned_list-array"},"mentioned_list ","[array]"),(0,r.yg)("p",null,"\u4e00\u4e2a\u7528\u6237\u6807\u8bc6\u5217\u8868\uff0c\u7528\u4e8e\u63d0\u9192\u7ec4\u4e2d\u7684\u6307\u5b9a\u6210\u5458\uff08@A\u6210\u5458\uff09\uff0c@all\u610f\u5473\u7740\u63d0\u9192\u6bcf\u4e2a\u4eba\u3002\u5982\u679c\u5f00\u53d1\u4eba\u5458\u65e0\u6cd5\u83b7\u5f97\u7528\u6237ID\uff0c\u4ed6\u53ef\u4ee5\u4f7f\u7528called_mobile_list"),(0,r.yg)("h3",{id:"mentioned_mobile_list-array"},"mentioned_mobile_list ","[array]"),(0,r.yg)("p",null,"\u624b\u673a\u53f7\u7801\u5217\u8868\uff0c\u63d0\u9192\u7fa4\u7ec4\u6210\u5458\u5bf9\u5e94\u7684\u624b\u673a\u53f7\u7801\uff08@a\u6210\u5458\uff09\uff0c@all\u8868\u793a\u63d0\u9192\u5927\u5bb6"),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"\u63a5\u6536\u5668\u63d2\u4ef6\u5e38\u7528\u53c2\u6570\uff0c\u8be6\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink-common-options"},"Sink Common Options")," "),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("p",null,"\u7b80\u5355\u7684\u4f8b\u5b50:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n    }\n')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'WeChat {\n        url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=693axxx6-7aoc-4bc4-97a0-0ec2sifa5aaa"\n        mentioned_list=["wangqing","@all"]\n        mentioned_mobile_list=["13800001111","@all"]\n    }\n')),(0,r.yg)("h2",{id:"\u53d8\u66f4\u65e5\u5fd7"},"\u53d8\u66f4\u65e5\u5fd7"),(0,r.yg)(l.default,{mdxType:"ChangeLog"}))}s.isMDXComponent=!0}}]);