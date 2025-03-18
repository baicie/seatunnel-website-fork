"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22489],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,c=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33733:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const l={},i="SQL UDF",o={unversionedId:"transform-v2/sql-udf",id:"version-2.3.4/transform-v2/sql-udf",title:"SQL UDF",description:"UDF of SQL transform plugin",source:"@site/versioned_docs/version-2.3.4/transform-v2/sql-udf.md",sourceDirName:"transform-v2",slug:"/transform-v2/sql-udf",permalink:"/docs/2.3.4/transform-v2/sql-udf",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.4/transform-v2/sql-udf.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"SQL Functions",permalink:"/docs/2.3.4/transform-v2/sql-functions"},next:{title:"SQL",permalink:"/docs/2.3.4/transform-v2/sql"}},p={},u=[{value:"Description",id:"description",level:2},{value:"UDF API",id:"udf-api",level:2},{value:"UDF Implements Example",id:"udf-implements-example",level:2},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],g={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sql-udf"},"SQL UDF"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"UDF of SQL transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Use UDF SPI to extends the SQL transform functions lib."),(0,r.yg)("h2",{id:"udf-api"},"UDF API"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"package org.apache.seatunnel.transform.sql.zeta;\n\npublic interface ZetaUDF {\n    /**\n     * Function name\n     *\n     * @return function name\n     */\n    String functionName();\n\n    /**\n     * The type of function result\n     *\n     * @param argsType input arguments type\n     * @return result type\n     */\n    SeaTunnelDataType<?> resultType(List<SeaTunnelDataType<?>> argsType);\n\n    /**\n     * Evaluate\n     *\n     * @param args input arguments\n     * @return result value\n     */\n    Object evaluate(List<Object> args);\n}\n")),(0,r.yg)("h2",{id:"udf-implements-example"},"UDF Implements Example"),(0,r.yg)("p",null,"Add these dependencies and provided scope to your maven project:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\n<dependencies>\n    <dependency>\n        <groupId>org.apache.seatunnel</groupId>\n        <artifactId>seatunnel-transforms-v2</artifactId>\n        <version>2.3.2</version>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>org.apache.seatunnel</groupId>\n        <artifactId>seatunnel-api</artifactId>\n        <version>2.3.2</version>\n        <scope>provided</scope>\n    </dependency>\n    <dependency>\n        <groupId>com.google.auto.service</groupId>\n        <artifactId>auto-service</artifactId>\n        <version>1.0.1</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n\n")),(0,r.yg)("p",null,"Add a Java Class implements of ZetaUDF like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'\n@AutoService(ZetaUDF.class)\npublic class ExampleUDF implements ZetaUDF {\n    @Override\n    public String functionName() {\n        return "EXAMPLE";\n    }\n\n    @Override\n    public SeaTunnelDataType<?> resultType(List<SeaTunnelDataType<?>> argsType) {\n        return BasicType.STRING_TYPE;\n    }\n\n    @Override\n    public Object evaluate(List<Object> args) {\n        String arg = (String) args.get(0);\n        if (arg == null) return null;\n        return "UDF: " + arg;\n    }\n}\n')),(0,r.yg)("p",null,"Package the UDF project and copy the jar to the path: ${SEATUNNEL_HOME}/lib"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"id"),(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"21")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"24")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"22")))),(0,r.yg)("p",null,"We use UDF of SQL query to transform the source data like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  Sql {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    query = "select id, example(name) as name, age from fake"\n  }\n}\n')),(0,r.yg)("p",null,"Then the data in result table ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," will update to"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"id"),(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"1"),(0,r.yg)("td",{parentName:"tr",align:null},"UDF: Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"2"),(0,r.yg)("td",{parentName:"tr",align:null},"UDF: May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"21")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"UDF: Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"24")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"4"),(0,r.yg)("td",{parentName:"tr",align:null},"UDF: Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"22")))),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add UDF of SQL Transform Connector")))}d.isMDXComponent=!0}}]);