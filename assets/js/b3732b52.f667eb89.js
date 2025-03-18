"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16421],{15680:(e,n,r)=>{r.d(n,{xA:()=>m,yg:()=>g});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return r?t.createElement(g,o(o({ref:n},m),{},{components:r})):t.createElement(g,o({ref:n},m))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8787:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(96540),r(15680));const l={},o="FieldRename",i={unversionedId:"transform-v2/field-rename",id:"version-2.3.9/transform-v2/field-rename",title:"FieldRename",description:"FieldRename transform plugin",source:"@site/versioned_docs/version-2.3.9/transform-v2/field-rename.md",sourceDirName:"transform-v2",slug:"/transform-v2/field-rename",permalink:"/docs/2.3.9/transform-v2/field-rename",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.9/transform-v2/field-rename.md",tags:[],version:"2.3.9",frontMatter:{},sidebar:"docs",previous:{title:"FieldMapper",permalink:"/docs/2.3.9/transform-v2/field-mapper"},next:{title:"FilterRowKind",permalink:"/docs/2.3.9/transform-v2/filter-rowkind"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Convert field to uppercase",id:"convert-field-to-uppercase",level:3},{value:"Convert field name to lowercase",id:"convert-field-name-to-lowercase",level:3}],m={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"fieldrename"},"FieldRename"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"FieldRename transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"FieldRename transform plugin for rename field name."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"convert_case"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The case conversion type. The options can be ",(0,a.yg)("inlineCode",{parentName:"td"},"UPPER"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"LOWER"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"prefix"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The prefix to be added to the field name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"suffix"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The suffix to be added to the field name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"replacements_with_regex"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The array of replacement rules with regex. The replacement rule is a map with ",(0,a.yg)("inlineCode",{parentName:"td"},"replace_from")," and ",(0,a.yg)("inlineCode",{parentName:"td"},"replace_to")," fields.")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"convert-field-to-uppercase"},"Convert field to uppercase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n    MySQL-CDC {\n        plugin_output = "customers_mysql_cdc"\n        \n        username = "root"\n        password = "123456"\n        table-names = ["source.user_shop", "source.user_order"]\n        base-url = "jdbc:mysql://localhost:3306/source"\n    }\n}\n\ntransform {\n  FieldRename {\n    plugin_input = "customers_mysql_cdc"\n    plugin_output = "trans_result"\n    \n    convert_case = "UPPER"\n    prefix = "F_"\n    suffix = "_S"\n    replacements_with_regex = [\n      {\n        replace_from = "create_time"\n        replace_to = "SOURCE_CREATE_TIME"\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    plugin_input = "trans_result"\n    \n    driver="oracle.jdbc.OracleDriver"\n    url="jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    user="myuser"\n    password="mypwd"\n    \n    generate_sink_sql = true\n    database = "ORCLCDB"\n    table = "${database_name}.${table_name}"\n    primary_keys = ["${primary_key}"]\n    \n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode = "APPEND_DATA"\n  }\n}\n')),(0,a.yg)("h3",{id:"convert-field-name-to-lowercase"},"Convert field name to lowercase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Oracle-CDC {\n    plugin_output = "customers_oracle_cdc"\n    \n    base-url = "jdbc:oracle:thin:@localhost:1521/ORCLCDB"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["SOURCE.USER_SHOP", "SOURCE.USER_ORDER"]\n  }\n}\n\ntransform {\n  FieldRename {\n    plugin_input = "customers_oracle_cdc"\n    plugin_output = "trans_result"\n    \n    convert_case = "LOWER"\n    prefix = "f_"\n    suffix = "_s"\n    replacements_with_regex = [\n      {\n        replace_from = "CREATE_TIME"\n        replace_to = "source_create_time"\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    plugin_input = "trans_result"\n    \n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    \n    generate_sink_sql = true\n    database = "${schema_name}"\n    table = "${table_name}"\n    primary_keys = ["${primary_key}"]\n    \n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode = "APPEND_DATA"\n  }\n}\n')))}d.isMDXComponent=!0}}]);