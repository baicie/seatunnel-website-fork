"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[83174],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return t?a.createElement(g,l(l({ref:n},p),{},{components:t})):a.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(58168),r=(t(96540),t(15680));const o={},l="Contribute Transform Guide",i={unversionedId:"contribution/contribute-transform-v2-guide",id:"version-2.3.1/contribution/contribute-transform-v2-guide",title:"Contribute Transform Guide",description:"This document describes how to understand, develop and contribute a transform.",source:"@site/versioned_docs/version-2.3.1/contribution/contribute-transform-v2-guide.md",sourceDirName:"contribution",slug:"/contribution/contribute-transform-v2-guide",permalink:"/docs/2.3.1/contribution/contribute-transform-v2-guide",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.1/contribution/contribute-transform-v2-guide.md",tags:[],version:"2.3.1",frontMatter:{},sidebar:"docs",previous:{title:"Coding guide",permalink:"/docs/2.3.1/contribution/coding-guide"},next:{title:"FAQ",permalink:"/docs/2.3.1/faq"}},s={},u=[{value:"Concepts",id:"concepts",level:2},{value:"DataType transform",id:"datatype-transform",level:3},{value:"Data transform",id:"data-transform",level:3},{value:"Translation",id:"translation",level:3},{value:"Core APIs",id:"core-apis",level:2},{value:"SeaTunnelTransform",id:"seatunneltransform",level:3},{value:"SingleFieldOutputTransform",id:"singlefieldoutputtransform",level:3},{value:"MultipleFieldOutputTransform",id:"multiplefieldoutputtransform",level:3},{value:"AbstractSeaTunnelTransform",id:"abstractseatunneltransform",level:3},{value:"Develop a Transform",id:"develop-a-transform",level:2},{value:"Example: copy field to new field",id:"example-copy-field-to-new-field",level:3},{value:"Transform Test Tool",id:"transform-test-tool",level:2}],p={toc:u},d="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"contribute-transform-guide"},"Contribute Transform Guide"),(0,r.yg)("p",null,"This document describes how to understand, develop and contribute a transform."),(0,r.yg)("p",null,"We also provide the ",(0,r.yg)("a",{parentName:"p",href:"../../../seatunnel-e2e/seatunnel-transforms-v2-e2e"},"transform e2e test"),"\nto verify the data input and output by the transform."),(0,r.yg)("h2",{id:"concepts"},"Concepts"),(0,r.yg)("p",null,"Using SeaTunnel you can read or write data through the connector, but if you need to\nprocess your data after reading or before writing, then need to use transform."),(0,r.yg)("p",null,"Use transform to make simple edits to your data rows or fields, such as split field,\nchange field values, add or remove field."),(0,r.yg)("h3",{id:"datatype-transform"},"DataType transform"),(0,r.yg)("p",null,"Transform receives datatype input from upstream(source or transform) and outputs new datatype to\ndownstream(sink or transform), this process is datatype transform."),(0,r.yg)("p",null,"Example 1\uff1aRemove fields"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n| A         | B         |\n|-----------|-----------|\n| STRING    | INT       |\n")),(0,r.yg)("p",null,"Example 2\uff1aSort fields"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"| B         | C         | A         |\n|-----------|-----------|-----------|\n| INT       | BOOLEAN   | STRING    |\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n")),(0,r.yg)("p",null,"Example 3\uff1aUpdate fields datatype"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | STRING    | STRING    |\n")),(0,r.yg)("p",null,"Example 4\uff1aAdd new fields"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         | D         |\n|-----------|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   | DOUBLE    |\n")),(0,r.yg)("h3",{id:"data-transform"},"Data transform"),(0,r.yg)("p",null,"After datatype transformed, Transform will receives data-row input from upstream(source or transform),\nedit into data-row with ","[new datatype]","(#DataType transform) and outputs to downstream (sink or transform).\nThis process is data transform."),(0,r.yg)("h3",{id:"translation"},"Translation"),(0,r.yg)("p",null,"Transform is decoupled from the execution engine, any transform implement can run into all engines\nwithout change the code & config, which requires the translation layer to adapt transform and execution engine."),(0,r.yg)("p",null,"Example\uff1aTranslation datatype & data"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'Original:\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\nDatatype translation:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<STRING>    | ENGINE<INT>       | ENGINE<BOOLEAN>   |\n\nData translation:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<"test">    | ENGINE<1>         |  ENGINE<false>    |\n')),(0,r.yg)("h2",{id:"core-apis"},"Core APIs"),(0,r.yg)("h3",{id:"seatunneltransform"},"SeaTunnelTransform"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SeaTunnelTransform")," provides all major and primary APIs, you can subclass it to do whatever transform."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Receive datatype input from upstream.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Set the data type info of input data.\n *\n * @param inputDataType The data type info of upstream input.\n */\n void setTypeInfo(SeaTunnelDataType<T> inputDataType);\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Outputs new datatype to downstream.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Get the data type of the records produced by this transform.\n *\n * @return Produced data type.\n */\nSeaTunnelDataType<T> getProducedType();\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Edit input data and outputs new data to downstream.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Transform input data to {@link this#getProducedType()} types data.\n *\n * @param row the data need be transform.\n * @return transformed data.\n */\nT map(T row);\n")),(0,r.yg)("h3",{id:"singlefieldoutputtransform"},"SingleFieldOutputTransform"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SingleFieldOutputTransform")," abstract single field change operator"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Define output field")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field\n *\n * @return\n */\nprotected abstract String getOutputFieldName();\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Define output field datatype")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field datatype\n *\n * @return\n */\nprotected abstract SeaTunnelDataType getOutputFieldDataType();\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Define output field value")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field value\n * \n * @param inputRow The inputRow of upstream input.\n * @return\n */\nprotected abstract Object getOutputFieldValue(SeaTunnelRowAccessor inputRow);\n")),(0,r.yg)("h3",{id:"multiplefieldoutputtransform"},"MultipleFieldOutputTransform"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"MultipleFieldOutputTransform")," abstract multiple fields change operator"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Define output fields")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields\n *\n * @return\n */\nprotected abstract String[] getOutputFieldNames();\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Define output fields datatype")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields datatype\n *\n * @return\n */\nprotected abstract SeaTunnelDataType[] getOutputFieldDataTypes();\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Define output field values")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields value\n *\n * @param inputRow The inputRow of upstream input.\n * @return\n */\nprotected abstract Object[] getOutputFieldValues(SeaTunnelRowAccessor inputRow);\n")),(0,r.yg)("h3",{id:"abstractseatunneltransform"},"AbstractSeaTunnelTransform"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"AbstractSeaTunnelTransform")," abstract datatype & fields change operator"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Transform input row type and outputs new row type")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs transformed row type.\n *\n * @param inputRowType upstream input row type\n * @return\n */\nprotected abstract SeaTunnelRowType transformRowType(SeaTunnelRowType inputRowType);\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Transform input row data and outputs new row data")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs transformed row data.\n * \n * @param inputRow upstream input row data\n * @return\n */\nprotected abstract SeaTunnelRow transformRow(SeaTunnelRow inputRow);\n")),(0,r.yg)("h2",{id:"develop-a-transform"},"Develop a Transform"),(0,r.yg)("p",null,"It must implement one of the following APIs:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"SeaTunnelTransform"),(0,r.yg)("li",{parentName:"ul"},"AbstractSeaTunnelTransform"),(0,r.yg)("li",{parentName:"ul"},"SingleFieldOutputTransform"),(0,r.yg)("li",{parentName:"ul"},"MultipleFieldOutputTransform")),(0,r.yg)("p",null,"Add implement subclass into module ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-transforms-v2"),"."),(0,r.yg)("h3",{id:"example-copy-field-to-new-field"},"Example: copy field to new field"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'@AutoService(SeaTunnelTransform.class)\npublic class CopyFieldTransform extends SingleFieldOutputTransform {\n\n    private String srcField;\n    private int srcFieldIndex;\n    private SeaTunnelDataType srcFieldDataType;\n    private String destField;\n\n    @Override\n    public String getPluginName() {\n        return "Copy";\n    }\n\n    @Override\n    protected void setConfig(Config pluginConfig) {\n        this.srcField = pluginConfig.getString("src_field");\n        this.destField = pluginConfig.getString("dest_fields");\n    }\n\n    @Override\n    protected void setInputRowType(SeaTunnelRowType inputRowType) {\n        srcFieldIndex = inputRowType.indexOf(srcField);\n        srcFieldDataType = inputRowType.getFieldType(srcFieldIndex);\n    }\n\n    @Override\n    protected String getOutputFieldName() {\n        return destField;\n    }\n\n    @Override\n    protected SeaTunnelDataType getOutputFieldDataType() {\n        return srcFieldDataType;\n    }\n\n    @Override\n    protected Object getOutputFieldValue(SeaTunnelRowAccessor inputRow) {\n        return inputRow.getField(srcFieldIndex);\n    }\n}\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"getPluginName")," method is used to identify the transform name."),(0,r.yg)("li",{parentName:"ol"},"The @AutoService is used to generate the ",(0,r.yg)("inlineCode",{parentName:"li"},"META-INF/services/org.apache.seatunnel.api.transform.SeaTunnelTransform"),"\nfile automatically."),(0,r.yg)("li",{parentName:"ol"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"setConfig")," method is used to inject user configs.")),(0,r.yg)("h2",{id:"transform-test-tool"},"Transform Test Tool"),(0,r.yg)("p",null,"Once you add a new plugin, it is recommended to add e2e tests for it.\nWe have a ",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e")," module to help you to do this."),(0,r.yg)("p",null,"For example, if you want to add an e2e test for ",(0,r.yg)("inlineCode",{parentName:"p"},"CopyFieldTransform"),", you can create a new test in\n",(0,r.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e")," module and extend the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestSuiteBase")," class in the test."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'public class TestCopyFieldTransformIT extends TestSuiteBase {\n\n    @TestTemplate\n    public void testCopyFieldTransform(TestContainer container) {\n        Container.ExecResult execResult = container.executeJob("/copy_transform.conf");\n        Assertions.assertEquals(0, execResult.getExitCode());\n    }\n}\n')),(0,r.yg)("p",null,"Once your testcase implements the ",(0,r.yg)("inlineCode",{parentName:"p"},"TestSuiteBase")," interface and use ",(0,r.yg)("inlineCode",{parentName:"p"},"@TestTemplate")," annotation startup,\nit will running job to all engines, and you just need to execute the executeJob method with your SeaTunnel configuration file,\nit will submit the SeaTunnel job."))}m.isMDXComponent=!0}}]);