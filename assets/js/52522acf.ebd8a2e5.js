"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[79023],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=t.createContext({}),i=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=i(e.components);return t.createElement(u.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,g=p["".concat(u,".").concat(d)]||p[d]||m[d]||l;return n?t.createElement(g,o(o({ref:a},c),{},{components:n})):t.createElement(g,o({ref:a},c))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(96540),r=n(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:a,hidden:n,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:n},a)}},11470:(e,a,n)=>{n.d(a,{A:()=>T});var t=n(58168),r=n(96540),l=n(20053),o=n(23104),s=n(56347),u=n(57485),i=n(31682),c=n(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function m(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,i.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const t=(0,s.W6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(t.location.search);a.set(l,e),t.replace({...t.location,search:a.toString()})}),[l,t])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[u,i]=g({queryString:n,groupId:t}),[p,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,l]=(0,c.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:t}),b=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var b=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:a,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),m=e=>{const a=e.currentTarget,n=c.indexOf(a),t=i[n].value;t!==s&&(p(a),u(t))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":n},a)},i.map((e=>{let{value:a,label:n,attributes:o}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>c.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":s===a})}),n??a)})))}function v(e){let{lazy:a,children:n,selectedValue:t}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function k(e){const a=f(e);return r.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},r.createElement(h,(0,t.A)({},e,a)),r.createElement(v,(0,t.A)({},e,a)))}function T(e){const a=(0,b.A)();return r.createElement(k,(0,t.A)({key:String(a)},e))}},93886:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680)),l=n(11470),o=n(19365);const s={},u="Command usage",i={unversionedId:"command/usage",id:"version-2.3.2/command/usage",title:"Command usage",description:"Command Entrypoint",source:"@site/versioned_docs/version-2.3.2/command/usage.mdx",sourceDirName:"command",slug:"/command/usage",permalink:"/docs/2.3.2/command/usage",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.2/command/usage.mdx",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"SQL",permalink:"/docs/2.3.2/transform-v2/sql"},next:{title:"about",permalink:"/docs/2.3.2/seatunnel-engine/about"}},c={},p=[{value:"Command Entrypoint",id:"command-entrypoint",level:2},{value:"Options",id:"options",level:2},{value:"Example",id:"example",level:2}],m={toc:p},d="wrapper";function g(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"command-usage"},"Command usage"),(0,r.yg)("h2",{id:"command-entrypoint"},"Command Entrypoint"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark2",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-2-connector-v2.sh\n"))),(0,r.yg)(o.A,{value:"spark3",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-3-connector-v2.sh\n"))),(0,r.yg)(o.A,{value:"flink13",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-13-connector-v2.sh\n"))),(0,r.yg)(o.A,{value:"flink15",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-15-connector-v2.sh\n")))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark2",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-spark-2-connector-v2.sh [options]\n  Options:\n    --check           Whether check config (default: false)\n    -c, --config      Config file\n    -e, --deploy-mode Spark deploy mode, support [cluster, client] (default: \n                      client) \n    -h, --help        Show the usage message\n    -m, --master      Spark master, support [spark://host:port, \n                      mesos://host:port, yarn, k8s://https://host:port, \n                      local], default local[*] (default: local[*])\n    -n, --name        SeaTunnel job name (default: SeaTunnel)\n    -i, --variable    Variable substitution, such as -i city=beijing, or -i \n                      date=20190318 (default: [])\n"))),(0,r.yg)(o.A,{value:"spark3",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-spark-3-connector-v2.sh [options]\n  Options:\n    --check           Whether check config (default: false)\n    -c, --config      Config file\n    -e, --deploy-mode Spark deploy mode, support [cluster, client] (default: \n                      client) \n    -h, --help        Show the usage message\n    -m, --master      Spark master, support [spark://host:port, \n                      mesos://host:port, yarn, k8s://https://host:port, \n                      local], default local[*] (default: local[*])\n    -n, --name        SeaTunnel job name (default: SeaTunnel)\n    -i, --variable    Variable substitution, such as -i city=beijing, or -i \n                      date=20190318 (default: [])\n"))),(0,r.yg)(o.A,{value:"flink13",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-flink-13-connector-v2.sh [options]\n  Options:\n    --check            Whether check config (default: false)\n    -c, --config       Config file\n    -e, --deploy-mode  Flink job deploy mode, support [run, run-application] \n                       (default: run)\n    -h, --help         Show the usage message\n    --master, --target Flink job submitted target master, support [local, \n                       remote, yarn-session, yarn-per-job, kubernetes-session, \n                       yarn-application, kubernetes-application]\n    -n, --name         SeaTunnel job name (default: SeaTunnel)\n    -i, --variable     Variable substitution, such as -i city=beijing, or -i \n                       date=20190318 (default: [])\n"))),(0,r.yg)(o.A,{value:"flink15",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"Usage: start-seatunnel-flink-15-connector-v2.sh [options]\n  Options:\n    --check            Whether check config (default: false)\n    -c, --config       Config file\n    -e, --deploy-mode  Flink job deploy mode, support [run, run-application] \n                       (default: run)\n    -h, --help         Show the usage message\n    --master, --target Flink job submitted target master, support [local, \n                       remote, yarn-session, yarn-per-job, kubernetes-session, \n                       yarn-application, kubernetes-application]\n    -n, --name         SeaTunnel job name (default: SeaTunnel)\n    -i, --variable     Variable substitution, such as -i city=beijing, or -i \n                       date=20190318 (default: [])\n")))),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark2",values:[{label:"Spark 2",value:"spark2"},{label:"Spark 3",value:"spark3"},{label:"Flink 13 14",value:"flink13"},{label:"Flink 15 16",value:"flink15"}],mdxType:"Tabs"},(0,r.yg)(o.A,{value:"spark2",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-2-connector-v2.sh --config config/v2.batch.config.template -m local -e client\n"))),(0,r.yg)(o.A,{value:"spark3",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-spark-3-connector-v2.sh --config config/v2.batch.config.template -m local -e client\n"))),(0,r.yg)(o.A,{value:"flink13",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-13-connector-v2.sh --config config/v2.batch.config.template\n"))),(0,r.yg)(o.A,{value:"flink15",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink-15-connector-v2.sh --config config/v2.batch.config.template\n")))))}g.isMDXComponent=!0}}]);