"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[69882],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),g=u(t),c=l,y=g["".concat(p,".").concat(c)]||g[c]||s[c]||r;return t?a.createElement(y,o(o({ref:n},m),{},{components:t})):a.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[g]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(58168),l=(t(96540),t(15680));const r={},o="DynamicCompile",i={unversionedId:"transform-v2/dynamic-compile",id:"version-2.3.6/transform-v2/dynamic-compile",title:"DynamicCompile",description:"DynamicCompile transform plugin",source:"@site/versioned_docs/version-2.3.6/transform-v2/dynamic-compile.md",sourceDirName:"transform-v2",slug:"/transform-v2/dynamic-compile",permalink:"/docs/2.3.6/transform-v2/dynamic-compile",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.6/transform-v2/dynamic-compile.md",tags:[],version:"2.3.6",frontMatter:{},sidebar:"docs",previous:{title:"Copy",permalink:"/docs/2.3.6/transform-v2/copy"},next:{title:"FieldMapper",permalink:"/docs/2.3.6/transform-v2/field-mapper"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"source_code string",id:"source_code-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"compile_language Enum",id:"compile_language-enum",level:3},{value:"compile_pattern Enum",id:"compile_pattern-enum",level:3},{value:"absolute_path string",id:"absolute_path-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:u},g="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(g,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"dynamiccompile"},"DynamicCompile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"DynamicCompile transform plugin")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Provide a programmable way to process rows, allowing users to customize any business behavior, even RPC requests based on existing row fields as parameters, or to expand fields by retrieving associated data from other data sources. To distinguish businesses, you can also define multiple transforms to combine,\nIf the conversion is too complex, it may affect performance"),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"source_code"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_language"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"SOURCE_CODE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"absolute_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"source_code-string"},"source_code ","[string]"),(0,l.yg)("p",null,"The code must implement two methods: getInlineOutputColumns and getInlineOutputFieldValues. getInlineOutputColumns determines the columns you want to add or convert, and the original column structure can be obtained from CatalogTable\nGetInlineOutputFieldValues determines your column values. You can fulfill any of your requirements, and even complete RPC requests to obtain new values based on the original columns\nIf there are third-party dependency packages, please place them in ${SEATUNNEL_HOME}/lib, if you use spark or flink, you need to put it under the libs of the corresponding service."),(0,l.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.6/transform-v2/common-options"},"Transform Plugin")," for details"),(0,l.yg)("h3",{id:"compile_language-enum"},"compile_language ","[Enum]"),(0,l.yg)("p",null,"Some syntax in Java may not be supported, please refer ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/janino-compiler/janino"},"https://github.com/janino-compiler/janino"),"\nGROOVY,JAVA"),(0,l.yg)("h3",{id:"compile_pattern-enum"},"compile_pattern ","[Enum]"),(0,l.yg)("p",null,"SOURCE_CODE,ABSOLUTE_PATH\nIf it is a SOURCE-CODE enumeration; the SOURCE-CODE attribute is required, and the ABSOLUTE_PATH enumeration;ABSOLUTE_PATH attribute is required"),(0,l.yg)("h3",{id:"absolute_path-string"},"absolute_path ","[string]"),(0,l.yg)("p",null,"The absolute path of Java or Groovy files on the server"),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"The data read from source is a table like this:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'transform {\n DynamicCompile {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    compile_language="GROOVY"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column\n                 import org.apache.seatunnel.transform.common.SeaTunnelRowAccessor\n                 import org.apache.seatunnel.api.table.catalog.CatalogTable\n                 import org.apache.seatunnel.api.table.catalog.PhysicalColumn;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                 class demo  {\n                     public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n                          List<Column> columns = new ArrayList<>();\n                         PhysicalColumn destColumn =\n                         PhysicalColumn.of(\n                         "aa",\n                        BasicType.STRING_TYPE,\n                         10,\n                        true,\n                        "",\n                        "");\n                         columns.add(destColumn);\n                        return columns.toArray(new Column[0]);\n                     }\n                     public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                       Object[] fieldValues = new Object[1];\n                       fieldValues[0]="AA"\n                       return fieldValues;\n                     }\n                 };"""\n\n  }\n}\n\ntransform {\n DynamicCompile {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    compile_language="JAVA"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column;\n                 import org.apache.seatunnel.transform.common.SeaTunnelRowAccessor;\n                 import org.apache.seatunnel.api.table.catalog.*;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                     public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n\n                       ArrayList<Column> columns = new ArrayList<Column>();\n                                               PhysicalColumn destColumn =\n                                               PhysicalColumn.of(\n                                               "aa",\n                                              BasicType.STRING_TYPE,\n                                               10,\n                                              true,\n                                              "",\n                                              "");\n                                                 return new Column[]{\n                                                                destColumn\n                                                        };\n\n                     }\n                     public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                       Object[] fieldValues = new Object[1];\n                       fieldValues[0]="AA";\n                       return fieldValues;\n                     }\n                """\n\n  }\n } \n \n transform {\n DynamicCompile {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    compile_language="GROOVY"\n    compile_pattern="ABSOLUTE_PATH"\n    absolute_path="""/tmp/GroovyFile"""\n\n  }\n}\n')),(0,l.yg)("p",null,"Then the data in result table ",(0,l.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"),(0,l.yg)("th",{parentName:"tr",align:null},"aa"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"AA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"AA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"AA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"AA")))),(0,l.yg)("h2",{id:"changelog"},"Changelog"))}s.isMDXComponent=!0}}]);