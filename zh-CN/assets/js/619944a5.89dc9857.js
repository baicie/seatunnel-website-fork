"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25272],{15680:(e,l,n)=>{n.d(l,{xA:()=>s,yg:()=>k});var t=n(96540);function i(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function u(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?u(Object(n),!0).forEach((function(l){i(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function c(e,l){if(null==e)return{};var n,t,i=function(e,l){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],l.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=t.createContext({}),o=function(e){var l=t.useContext(r),n=l;return e&&(n="function"==typeof e?e(l):a(a({},l),e)),n},s=function(e){var l=o(e.components);return t.createElement(r.Provider,{value:l},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var l=e.children;return t.createElement(t.Fragment,{},l)}},y=t.forwardRef((function(e,l){var n=e.components,i=e.mdxType,u=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=o(n),y=i,k=g["".concat(r,".").concat(y)]||g[y]||p[y]||u;return n?t.createElement(k,a(a({ref:l},s),{},{components:n})):t.createElement(k,a({ref:l},s))}));function k(e,l){var n=arguments,i=l&&l.mdxType;if("string"==typeof e||i){var u=n.length,a=new Array(u);a[0]=y;var c={};for(var r in l)hasOwnProperty.call(l,r)&&(c[r]=l[r]);c.originalType=e,c[g]="string"==typeof e?e:i,a[1]=c;for(var o=2;o<u;o++)a[o]=n[o];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},49617:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>u,metadata:()=>c,toc:()=>o});var t=n(58168),i=(n(96540),n(15680));const u={},a="\u767e\u4ebf\u7ea7\u6570\u636e\u540c\u6b65\uff0c\u5982\u4f55\u57fa\u4e8e SeaTunnel \u7684 ClickHouse \u5b9e\u73b0\uff1f",c={permalink:"/zh-CN/blog/2022/05/10/ClickHouse",editUrl:"https://github.com/apache/seatunnel-website/edit/main/blog/2022-05-10-ClickHouse.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-05-10-ClickHouse.md",title:"\u767e\u4ebf\u7ea7\u6570\u636e\u540c\u6b65\uff0c\u5982\u4f55\u57fa\u4e8e SeaTunnel \u7684 ClickHouse \u5b9e\u73b0\uff1f",description:"\u4f5c\u8005 | Apache SeaTunnel(Incubating) Contributor \u8303\u4f73",date:"2022-05-10T00:00:00.000Z",formattedDate:"2022\u5e745\u670810\u65e5",tags:[],readingTime:9.77,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"Apache SeaTunnel \u4e0e\u8ba1\u7b97\u5f15\u64ce\u7684\u89e3\u8026\u4e4b\u9053\uff0c\u91cd\u6784API\u6211\u4eec\u505a\u4e86\u4e9b\u4ec0\u4e48",permalink:"/zh-CN/blog/2022/05/31/engine"},nextItem:{title:"SeaTunnel \u5728\u5b69\u5b50\u738b\u7684\u9009\u578b\u8fc7\u7a0b\u53ca\u5e94\u7528\u6539\u9020\u5b9e\u8df5",permalink:"/zh-CN/blog/2022/05/01/_Kidswant"}},r={authorsImageUrls:[]},o=[],s={toc:o},g="wrapper";function p(e){let{components:l,...u}=e;return(0,i.yg)(g,(0,t.A)({},s,u,{components:l,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(28726).A,width:"1920",height:"1275"})),(0,i.yg)("p",null,"\u4f5c\u8005 | Apache SeaTunnel(Incubating) Contributor \u8303\u4f73"),(0,i.yg)("p",null,"\u6574\u7406 | \u6d4b\u8bd5\u5de5\u7a0b\u5e08 \u51af\u79c0\u5170"),(0,i.yg)("p",null,"\u5bf9\u4e8e\u767e\u4ebf\u7ea7\u6279\u6570\u636e\u7684\u5bfc\u5165\uff0c\u4f20\u7edf\u7684 JDBC \u65b9\u5f0f\u5728\u4e00\u4e9b\u6d77\u91cf\u6570\u636e\u540c\u6b65\u573a\u666f\u4e0b\u7684\u8868\u73b0\u5e76\u4e0d\u5c3d\u5982\u4eba\u610f\u3002\u4e3a\u4e86\u63d0\u4f9b\u66f4\u5feb\u7684\u5199\u5165\u901f\u5ea6\uff0cApache SeaTunnel(Incubating) \u5728\u521a\u521a\u53d1\u5e03\u7684 2.1.1 \u7248\u672c\u4e2d\u63d0\u4f9b\u4e86 ClickhouseFile-Connector \u7684\u652f\u6301\uff0c\u4ee5\u5b9e\u73b0 Bulk load \u6570\u636e\u5199\u5165\u3002"),(0,i.yg)("p",null,"Bulk load \u6307\u628a\u6d77\u91cf\u6570\u636e\u540c\u6b65\u5230\u76ee\u6807 DB \u4e2d\uff0c\u76ee\u524d SeaTunnel \u5df2\u5b9e\u73b0\u6570\u636e\u540c\u6b65\u5230 ClickHouse \u4e2d\u3002"),(0,i.yg)("p",null,"\u5728 Apache SeaTunnel(Incubating) 4 \u6708 Meetup \u4e0a\uff0cApache SeaTunnel(Incubating) Contributor \u8303\u4f73\u5206\u4eab\u4e86\u300a\u57fa\u4e8e SeaTunnel \u7684 ClickHouse bulk load \u5b9e\u73b0\u300b\uff0c\u8be6\u7ec6\u8bb2\u89e3\u4e86 ClickHouseFile \u9ad8\u6548\u5904\u7406\u6d77\u91cf\u6570\u636e\u7684\u5177\u4f53\u5b9e\u73b0\u539f\u7406\u548c\u6d41\u7a0b\u3002"),(0,i.yg)("p",null,"\u611f\u8c22\u672c\u6587\u6574\u7406\u5fd7\u613f\u8005 \u6d4b\u8bd5\u5de5\u7a0b\u5e08 \u51af\u79c0\u5170 \u5bf9 Apache SeaTunnel(Incubating) \u9879\u76ee\u7684\u652f\u6301\uff01"),(0,i.yg)("p",null,"\u672c\u6b21\u6f14\u8bb2\u4e3b\u8981\u5305\u542b\u4e03\u4e2a\u90e8\u5206\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ClickHouse Sink \u73b0\u72b6\n"),(0,i.yg)("li",{parentName:"ul"},"ClickHouse Sink \u5f31\u573a\u666f\n"),(0,i.yg)("li",{parentName:"ul"},"ClickHouseFile \u63d2\u4ef6\u4ecb\u7ecd\n"),(0,i.yg)("li",{parentName:"ul"},"ClickHouseFile \u6838\u5fc3\u6280\u672f\u70b9\n"),(0,i.yg)("li",{parentName:"ul"},"ClickHouseFile \u63d2\u4ef6\u7684\u5b9e\u73b0\u89e3\u6790\n"),(0,i.yg)("li",{parentName:"ul"},"\u63d2\u4ef6\u80fd\u529b\u5bf9\u6bd4\n"),(0,i.yg)("li",{parentName:"ul"},"\u540e\u671f\u4f18\u5316\u65b9\u5411\n")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(82464).A,width:"1171",height:"1171"})),(0,i.yg)("p",null,"\u200b\u8303 \u4f73\u767d\u9cb8\u5f00\u6e90 \u9ad8\u7ea7\u5de5\u7a0b\u5e08"),(0,i.yg)("h1",{id:"01-clickhouse-sink-\u73b0\u72b6"},"01 ClickHouse Sink \u73b0\u72b6"),(0,i.yg)("p",null,"\u73b0\u9636\u6bb5\uff0cSeaTunnel \u628a\u6570\u636e\u540c\u6b65\u5230 ClickHouse \u7684\u6d41\u7a0b\u662f\uff1a\u53ea\u8981\u662f SeaTunnel \u652f\u6301\u7684\u6570\u636e\u6e90\uff0c\u90fd\u53ef\u4ee5\u628a\u6570\u636e\u62bd\u53d6\u51fa\u6765\uff0c\u62bd\u53d6\u51fa\u6765\u4e4b\u540e\uff0c\u7ecf\u8fc7\u8f6c\u6362\uff08\u4e5f\u53ef\u4ee5\u4e0d\u8f6c\u6362\uff09\uff0c\u76f4\u63a5\u628a\u6e90\u6570\u636e\u5199\u5165 ClickHouse sink connector \u4e2d\uff0c\u518d\u901a\u8fc7 JDBC \u5199\u5165\u5230 ClickHouse \u7684\u670d\u52a1\u5668\u4e2d\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(85627).A,width:"1139",height:"585"})),(0,i.yg)("p",null,"\u4f46\u662f\uff0c\u901a\u8fc7\u4f20\u7edf\u7684 JDBC \u5199\u5165\u5230 ClickHouse \u670d\u52a1\u5668\u4e2d\u4f1a\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\u3002"),(0,i.yg)("p",null,"\u9996\u5148\uff0c\u73b0\u9636\u6bb5\u4f7f\u7528\u7684\u5de5\u5177\u662f ClickHouse \u63d0\u4f9b\u7684\u9a71\u52a8\uff0c\u5b9e\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7 HTTP\uff0c\u7136\u800c HTTP \u5728\u67d0\u4e9b\u573a\u666f\u4e0b\uff0c\u5b9e\u73b0\u6548\u7387\u4e0d\u9ad8\u3002\u5176\u6b21\u662f\u6d77\u91cf\u6570\u636e\uff0c\u5982\u679c\u6709\u91cd\u590d\u6570\u636e\u6216\u8005\u4e00\u6b21\u6027\u5199\u5165\u5927\u91cf\u6570\u636e\uff0c\u4f7f\u7528\u4f20\u7edf\u7684\u65b9\u5f0f\u662f\u751f\u6210\u5bf9\u5e94\u7684\u63d2\u5165\u8bed\u53e5\uff0c\u901a\u8fc7 HTTP \u53d1\u9001\u5230 ClickHouse \u670d\u52a1\u5668\u7aef\uff0c\u5728\u670d\u52a1\u5668\u7aef\u6765\u8fdb\u884c\u9010\u6761\u6216\u5206\u6279\u6b21\u89e3\u6790\u3001\u6267\u884c\uff0c\u65e0\u6cd5\u5b9e\u73b0\u6570\u636e\u538b\u7f29\u3002"),(0,i.yg)("p",null,"\u6700\u540e\u5c31\u662f\u6211\u4eec\u901a\u5e38\u4f1a\u9047\u5230\u7684\u95ee\u9898\uff0c\u6570\u636e\u91cf\u8fc7\u5927\u53ef\u80fd\u5bfc\u81f4 SeaTunnel \u7aef OOM\uff0c\u6216\u8005\u670d\u52a1\u5668\u7aef\u56e0\u4e3a\u5199\u5165\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u9891\u7387\u8fc7\u9ad8\uff0c\u5bfc\u81f4\u670d\u52a1\u5668\u7aef\u6302\u6389\u3002"),(0,i.yg)("p",null,"\u4e8e\u662f\u6211\u4eec\u601d\u8003\uff0c\u662f\u5426\u6709\u6bd4 HTTP \u66f4\u5feb\u7684\u53d1\u9001\u65b9\u5f0f\uff1f\u5982\u679c\u53ef\u4ee5\u5728 SeaTunnel \u7aef\u505a\u6570\u636e\u9884\u5904\u7406\u6216\u6570\u636e\u538b\u7f29\uff0c\u90a3\u4e48\u7f51\u7edc\u5e26\u5bbd\u538b\u529b\u4f1a\u964d\u4f4e\uff0c\u4f20\u8f93\u901f\u7387\u4e5f\u4f1a\u63d0\u9ad8\u3002"),(0,i.yg)("h1",{id:"02-clickhouse-sink-\u7684\u5f31\u573a\u666f"},"02 ClickHouse Sink \u7684\u5f31\u573a\u666f"),(0,i.yg)("p",null,"\u5982\u679c\u4f7f\u7528 HTTP \u4f20\u8f93\u534f\u8bae\uff0c\u5f53\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u6279\u5904\u7406\u4ee5\u5fae\u6279\u7684\u5f62\u5f0f\u53d1\u9001\u8bf7\u6c42\uff0cHTTP \u53ef\u80fd\u5904\u7406\u4e0d\u8fc7\u6765\uff1b"),(0,i.yg)("p",null,"\u592a\u591a\u7684 insert \u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u538b\u529b\u5927\u3002\u5047\u8bbe\u5e26\u5bbd\u53ef\u4ee5\u627f\u53d7\u5927\u91cf\u7684\u8bf7\u6c42\uff0c\u4f46\u670d\u52a1\u5668\u7aef\u4e0d\u4e00\u5b9a\u80fd\u627f\u8f7d\u3002\u7ebf\u4e0a\u7684\u670d\u52a1\u5668\u4e0d\u4ec5\u9700\u8981\u6570\u636e\u63d2\u5165\uff0c\u66f4\u91cd\u8981\u7684\u662f\u67e5\u8be2\u6570\u636e\u4e3a\u5176\u4ed6\u4e1a\u52a1\u56e2\u961f\u4f7f\u7528\u3002\u82e5\u56e0\u4e3a\u63d2\u5165\u6570\u636e\u8fc7\u591a\u5bfc\u81f4\u670d\u52a1\u5668\u96c6\u7fa4\u5b95\u673a\uff0c\u662f\u5f97\u4e0d\u507f\u5931\u7684\u3002"),(0,i.yg)("h1",{id:"03-clickhouse-file-\u6838\u5fc3\u6280\u672f\u70b9"},"03 ClickHouse File \u6838\u5fc3\u6280\u672f\u70b9"),(0,i.yg)("p",null,"\u9488\u5bf9\u8fd9\u4e9b ClickHouse \u7684\u5f31\u573a\u666f\uff0c\u6211\u4eec\u60f3\uff0c\u6709\u6ca1\u6709\u4e00\u79cd\u65b9\u5f0f\uff0c\u65e2\u80fd\u5728 Spark \u7aef\u5c31\u80fd\u5b8c\u6210\u6570\u636e\u538b\u7f29\uff0c\u8fd8\u53ef\u4ee5\u5728\u6570\u636e\u5199\u5165\u65f6\u4e0d\u589e\u52a0 Server \u7684\u8d44\u6e90\u8d1f\u8f7d\uff0c\u5e76\u4e14\u80fd\u5feb\u901f\u5199\u5165\u6d77\u91cf\u6570\u636e\uff1f\u4e8e\u662f\u6211\u4eec\u5f00\u53d1\u4e86 ClickHouseFile \u63d2\u4ef6\u6765\u6ee1\u8db3\u8fd9\u4e9b\u9700\u6c42\u3002"),(0,i.yg)("p",null,"ClickHouseFile \u63d2\u4ef6\u7684\u5173\u952e\u6280\u672f\u662f ClickHouse -local\u3002ClickHouse-local \u6a21\u5f0f\u53ef\u4ee5\u8ba9\u7528\u6237\u80fd\u591f\u5bf9\u672c\u5730\u6587\u4ef6\u6267\u884c\u5feb\u901f\u5904\u7406\uff0c\u800c\u65e0\u9700\u90e8\u7f72\u548c\u914d\u7f6e ClickHouse \u670d\u52a1\u5668\u3002ClickHouse-local \u4f7f\u7528\u4e0e ClickHouse Server \u76f8\u540c\u7684\u6838\u5fc3\uff0c\u56e0\u6b64\u5b83\u652f\u6301\u5927\u591a\u6570\u529f\u80fd\u4ee5\u53ca\u76f8\u540c\u7684\u683c\u5f0f\u548c\u8868\u5f15\u64ce\u3002"),(0,i.yg)("p",null,"\u56e0\u4e3a\u6709\u8fd9 2 \u4e2a\u7279\u70b9,\u8fd9\u610f\u5473\u7740\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u5904\u7406\u672c\u5730\u6587\u4ef6\uff0c\u800c\u65e0\u9700\u5728 ClickHouse \u670d\u52a1\u5668\u7aef\u505a\u5904\u7406\u3002\u7531\u4e8e\u662f\u76f8\u540c\u7684\u683c\u5f0f\uff0c\u6211\u4eec\u5728\u8fdc\u7aef\u6216\u8005 SeaTunnel \u7aef\u8fdb\u884c\u7684\u64cd\u4f5c\u6240\u4ea7\u751f\u7684\u6570\u636e\u548c\u670d\u52a1\u5668\u7aef\u662f\u65e0\u7f1d\u517c\u5bb9\u7684\uff0c\u53ef\u4ee5\u4f7f\u7528 ClickHouse local \u6765\u8fdb\u884c\u6570\u636e\u5199\u5165\u3002ClickHouse local \u662f\u5b9e\u73b0 ClickHouseFile \u7684\u6838\u5fc3\u6280\u672f\u70b9\uff0c\u56e0\u4e3a\u6709\u4e86\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u73b0\u9636\u6bb5\u624d\u80fd\u591f\u5b9e\u73b0 ClickHouse file \u8fde\u63a5\u5668\u3002"),(0,i.yg)("p",null,"ClickHouse local \u6838\u5fc3\u4f7f\u7528\u65b9\u5f0f\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(7296).A,width:"1112",height:"262"})),(0,i.yg)("p",null,"\u7b2c\u4e00\u884c\uff1a\u5c06\u6570\u636e\u901a\u8fc7 Linux \u7ba1\u9053\u4f20\u9012\u7ed9 ClickHouse-local \u7a0b\u5e8f\u7684 test_table \u8868\u3002"),(0,i.yg)("p",null,"\u7b2c\u4e8c\u81f3\u4e94\u884c\uff1a\u521b\u5efa\u4e00\u4e2a result_table \u8868\u7528\u4e8e\u63a5\u6536\u6570\u636e\u3002"),(0,i.yg)("p",null,"\u7b2c\u516d\u884c\uff1a\u5c06\u6570\u636e\u4ece test","_","table \u5230 result","_","table \u8868\u3002"),(0,i.yg)("p",null,"\u7b2c\u4e03\u884c\uff1a\u5b9a\u4e49\u6570\u636e\u5904\u7406\u7684\u78c1\u76d8\u8def\u5f84\u3002"),(0,i.yg)("p",null,"\u901a\u8fc7\u8c03\u7528 Clickhouse-local \u7ec4\u4ef6\uff0c\u5b9e\u73b0\u5728 Apache SeaTunnel(Incubating) \u7aef\u5b8c\u6210\u6570\u636e\u6587\u4ef6\u7684\u751f\u6210\uff0c\u4ee5\u53ca\u6570\u636e\u538b\u7f29\u7b49\u4e00\u7cfb\u5217\u64cd\u4f5c\u3002\u518d\u901a\u8fc7\u548c Server \u8fdb\u884c\u901a\u4fe1\uff0c\u5c06\u751f\u6210\u7684\u6570\u636e\u76f4\u63a5\u53d1\u9001\u5230 Clickhouse \u7684\u4e0d\u540c\u8282\u70b9\uff0c\u518d\u5c06\u6570\u636e\u6587\u4ef6\u63d0\u4f9b\u7ed9\u8282\u70b9\u67e5\u8be2\u3002"),(0,i.yg)("p",null,"\u539f\u9636\u6bb5\u548c\u73b0\u9636\u6bb5\u5b9e\u73b0\u65b9\u5f0f\u5bf9\u6bd4\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(85417).A,width:"1272",height:"576"})),(0,i.yg)("p",null,"\u539f\u6765\u662f Spark \u628a\u6570\u636e\u5305\u62ec insert \u8bed\u53e5\uff0c\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7aef\uff0c\u670d\u52a1\u5668\u7aef\u505a SQL \u7684\u89e3\u6790\uff0c\u8868\u7684\u6570\u636e\u6587\u4ef6\u751f\u6210\u3001\u538b\u7f29\uff0c\u751f\u6210\u5bf9\u5e94\u7684\u6587\u4ef6\u3001\u5efa\u7acb\u5bf9\u5e94\u7d22\u5f15\u3002\u82e5\u4f7f\u7528 ClickHouse local \u6280\u672f\uff0c\u5219\u7531 SeaTunnel \u7aef\u505a\u6570\u636e\u6587\u4ef6\u7684\u751f\u6210\u3001\u6587\u4ef6\u538b\u7f29\uff0c\u4ee5\u53ca\u7d22\u5f15\u7684\u521b\u5efa\uff0c\u6700\u7ec8\u4ea7\u51fa\u5c31\u662f\u7ed9\u670d\u52a1\u5668\u7aef\u4f7f\u7528\u7684\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u540c\u6b65\u7ed9\u670d\u52a1\u5668\u540e\uff0c\u670d\u52a1\u5668\u5c31\u53ea\u9700\u5bf9\u6570\u636e\u67e5\u8be2\uff0c\u4e0d\u9700\u8981\u505a\u989d\u5916\u7684\u64cd\u4f5c\u3002"),(0,i.yg)("h1",{id:"04-\u6838\u5fc3\u6280\u672f\u70b9"},"04 \u6838\u5fc3\u6280\u672f\u70b9"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(45334).A,width:"1164",height:"435"})),(0,i.yg)("p",null,"\u4ee5\u4e0a\u6d41\u7a0b\u53ef\u4ee5\u4fc3\u4f7f\u6570\u636e\u540c\u6b65\u66f4\u52a0\u9ad8\u6548\uff0c\u5f97\u76ca\u4e8e\u6211\u4eec\u5bf9\u5176\u4e2d\u7684\u4e09\u70b9\u4f18\u5316\u3002"),(0,i.yg)("p",null,"\u7b2c\u4e00\uff0c\u6570\u636e\u5b9e\u9645\u4e0a\u5e08\u4ece\u7ba1\u9053\u4f20\u8f93\u5230 ClickHouseFile\uff0c\u5728\u957f\u5ea6\u548c\u5185\u5b58\u4e0a\u4f1a\u6709\u9650\u5236\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06 ClickHouse connector\uff0c\u4e5f\u5c31\u662f sink \u7aef\u6536\u5230\u7684\u6570\u636e\u901a\u8fc7 MMAP \u6280\u672f\u5199\u5165\u4e34\u65f6\u6587\u4ef6\uff0c\u518d\u7531 ClickHouse local \u8bfb\u53d6\u4e34\u65f6\u6587\u4ef6\u7684\u6570\u636e\uff0c\u751f\u6210\u6211\u4eec\u7684\u76ee\u6807 local file\uff0c\u4ee5\u8fbe\u5230\u589e\u91cf\u8bfb\u53d6\u6570\u636e\u7684\u6548\u679c\uff0c\u89e3\u51b3 OM \u7684\u95ee\u9898\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(58623).A,width:"1206",height:"565"})),(0,i.yg)("p",null,"\u7b2c\u4e8c\uff0c\u652f\u6301\u5206\u7247\u3002\u56e0\u4e3a\u5982\u679c\u5728\u96c6\u7fa4\u4e2d\u4f7f\u7528\uff0c\u5982\u679c\u53ea\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u6216\u6587\u4ef6\u5939\uff0c\u5b9e\u9645\u4e0a\u6587\u4ef6\u53ea\u5206\u53d1\u5230\u4e00\u4e2a\u8282\u70b9\u4e0a\uff0c\u4f1a\u5927\u5927\u964d\u4f4e\u67e5\u8be2\u7684\u6027\u80fd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u8fdb\u884c\u4e86\u5206\u7247\u652f\u6301\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u5939\u4e2d\u8bbe\u7f6e\u5206\u7247\u7684 key\uff0c\u7b97\u6cd5\u4f1a\u5c06\u6570\u636e\u5206\u4e3a\u591a\u4e2a log file\uff0c\u5199\u5165\u5230\u4e0d\u540c\u7684\u96c6\u7fa4\u8282\u70b9\u4e2d\uff0c\u5927\u5e45\u63d0\u5347\u8bfb\u53d6\u6027\u80fd\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(5412).A,width:"1043",height:"558"})),(0,i.yg)("p",null,"\u7b2c\u4e09\u4e2a\u91cd\u8981\u7684\u4f18\u5316\u662f\u6587\u4ef6\u4f20\u8f93\uff0c\u76ee\u524d SeaTunnel \u652f\u6301\u4e24\u79cd\u6587\u4ef6\u4f20\u8f93\u65b9\u5f0f\uff0c\u4e00\u79cd\u662f SCP\uff0c\u5176\u7279\u70b9\u662f\u5b89\u5168\u3001\u901a\u7528\u3001\u65e0\u9700\u989d\u5916\u914d\u7f6e\uff1b\u53e6\u4e00\u79cd\u662f RSYNC\uff0c\u5176\u6709\u70b9\u4e8b\u5feb\u901f\u9ad8\u6548\uff0c\u652f\u6301\u65ad\u70b9\u7eed\u4f20\uff0c\u4f46\u9700\u8981\u989d\u5916\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u9009\u62e9\u9002\u5408\u81ea\u5df1\u7684\u65b9\u5f0f\u3002"),(0,i.yg)("h1",{id:"05-\u63d2\u4ef6\u5b9e\u73b0\u89e3\u6790"},"05 \u63d2\u4ef6\u5b9e\u73b0\u89e3\u6790"),(0,i.yg)("p",null,"\u6982\u62ec\u800c\u8a00\uff0cClickHouseFile \u7684\u603b\u4f53\u5b9e\u73b0\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(59309).A,width:"533",height:"635"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u7f13\u5b58\u6570\u636e\uff0c\u7f13\u5b58\u5230 ClickHouse sink \u7aef\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"\u8c03\u7528\u672c\u5730\u7684 ClickHouse-local \u751f\u6210\u6587\u4ef6\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u53d1\u9001\u5230 ClickHouse \u670d\u52a1\u7aef\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"\u6267\u884c ATTACH \u547d\u4ee4\n")),(0,i.yg)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u56db\u4e2a\u6b65\u9aa4\uff0c\u751f\u6210\u7684\u6570\u636e\u8fbe\u5230\u53ef\u67e5\u8be2\u7684\u72b6\u6001\u3002"),(0,i.yg)("h1",{id:"06-\u63d2\u4ef6\u80fd\u529b\u5bf9\u6bd4"},"06 \u63d2\u4ef6\u80fd\u529b\u5bf9\u6bd4"),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(1530).A,width:"1071",height:"485"})),(0,i.yg)("p",null,"\u4ece\u6570\u636e\u4f20\u8f93\u89d2\u5ea6\u6765\u8bf4\uff0cClickHouseFile \u66f4\u9002\u7528\u4e8e\u6d77\u91cf\u6570\u636e\uff0c\u4f18\u52bf\u5728\u4e8e\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\uff0c\u901a\u7528\u6027\u5f3a\uff0c\u800c ClickHouseFile \u914d\u7f6e\u6bd4\u8f83\u590d\u6742\uff0c\u76ee\u524d\u652f\u6301\u7684 engine \u8f83\u5c11\uff1b"),(0,i.yg)("p",null,"\u5c31\u73af\u5883\u590d\u6742\u5ea6\u6765\u8bf4\uff0cClickHouse \u66f4\u9002\u5408\u73af\u5883\u590d\u6742\u5ea6\u9ad8\u7684\u60c5\u51b5\uff0c\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e\u5c31\u80fd\u76f4\u63a5\u8fd0\u884c\uff1b"),(0,i.yg)("p",null,"\u5728\u901a\u7528\u6027\u4e0a\uff0cClickHouse \u7531\u4e8e\u662f SeaTunnel \u5b98\u65b9\u652f\u6301\u7684 JDBC diver\uff0c\u57fa\u672c\u4e0a\u652f\u6301\u6240\u6709\u7684 engine \u7684\u6570\u636e\u5199\u5165\uff0cClickHouseFile \u652f\u6301\u7684 engine \u76f8\u5bf9\u8f83\u5c11\uff1b\u4ece\u670d\u52a1\u5668\u538b\u529b\u65b9\u9762\u6765\u8bf4\uff0cClickHouseFile \u7684\u4f18\u52bf\u5728\u6d77\u91cf\u6570\u636e\u4f20\u8f93\u65f6\u5c31\u4f53\u73b0\u51fa\u6765\u4e86\uff0c\u4e0d\u4f1a\u5bf9\u670d\u52a1\u5668\u9020\u6210\u592a\u5927\u7684\u538b\u529b\u3002"),(0,i.yg)("p",null,"\u4f46\u8fd9\u4e8c\u8005\u5e76\u4e0d\u662f\u7ade\u4e89\u5173\u7cfb\uff0c\u9700\u8981\u6839\u636e\u4f7f\u7528\u573a\u666f\u6765\u9009\u62e9\u3002"),(0,i.yg)("h1",{id:"07-\u540e\u7eed\u8ba1\u5212"},"07 \u540e\u7eed\u8ba1\u5212"),(0,i.yg)("p",null,"\u76ee\u524d\u867d\u7136 SeaTunnel \u652f\u6301 ClickHouseFile \u63d2\u4ef6\uff0c\u4f46\u662f\u8fd8\u6709\u5f88\u591a\u5730\u65b9\u9700\u8981\u4f18\u5316\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rsync \u652f\u6301\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"Exactly-Once \u652f\u6301\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301 Zero Copy \u4f20\u8f93\u6570\u636e\u6587\u4ef6\uff1b\n"),(0,i.yg)("li",{parentName:"ul"},"\u66f4\u591a Engine \u7684\u652f\u6301")))}p.isMDXComponent=!0},82464:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/0-1-56defefcc273a6e21b09dd483bf95914.png"},28726:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/0-c3f068094d4f0308d7100502a6162925.jpg"},85627:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/1-76284c6612152506e0111e0f0d25d0f5.png"},7296:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/2-2367f70ae655c30a94a2ec65e67a6b26.png"},85417:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/3-6204c709b48243f88914bfd492dc67f2.png"},45334:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/4-d47e1da865afa7ea4de50b2d6e4b6ac1.png"},58623:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/5-9f00635b1727843f705cd5a28632e2e4.png"},5412:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/6-35b30550d6a18fbea49856083aa85094.png"},59309:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/7-1be978da30a55fe0289c683f2ae61aac.png"},1530:(e,l,n)=>{n.d(l,{A:()=>t});const t=n.p+"assets/images/8-261e7ba686f3fadf5d7c1445e9be5b66.png"}}]);