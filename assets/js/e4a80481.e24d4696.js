"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[31666],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=o.createContext({}),c=function(e){var n=o.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(r.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(t),h=i,b=g["".concat(r,".").concat(h)]||g[h]||p[h]||a;return t?o.createElement(b,l(l({ref:n},u),{},{components:t})):o.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=h;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=e,s[g]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},37484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(58168),i=(t(96540),t(15680));const a={sidebar_position:12},l=void 0,s={unversionedId:"seatunnel-engine/user-command",id:"version-2.3.7/seatunnel-engine/user-command",title:"user-command",description:"-----------------",source:"@site/versioned_docs/version-2.3.7/seatunnel-engine/user-command.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/user-command",permalink:"/docs/2.3.7/seatunnel-engine/user-command",draft:!1,editUrl:"https://github.com/apache/seatunnel-website/edit/main/versioned_docs/version-2.3.7/seatunnel-engine/user-command.md",tags:[],version:"2.3.7",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"docs",previous:{title:"rest-api",permalink:"/docs/2.3.7/seatunnel-engine/rest-api"},next:{title:"Seatunnel Runs On Flink",permalink:"/docs/2.3.7/other-engine/flink"}},r={},c=[{value:"Submitting Jobs",id:"submitting-jobs",level:2},{value:"Viewing The Job List",id:"viewing-the-job-list",level:2},{value:"Viewing The Job Status",id:"viewing-the-job-status",level:2},{value:"Getting The Monitoring Information Of Running Jobs",id:"getting-the-monitoring-information-of-running-jobs",level:2},{value:"Getting the Monitoring Information of a Specified Job",id:"getting-the-monitoring-information-of-a-specified-job",level:2},{value:"Pausing Jobs",id:"pausing-jobs",level:2},{value:"Resuming Jobs",id:"resuming-jobs",level:2},{value:"Canceling Jobs",id:"canceling-jobs",level:2}],u={toc:c},g="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(g,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("hr",null),(0,i.yg)("h1",{id:"command-line-tool"},"Command Line Tool"),(0,i.yg)("p",null,"The SeaTunnel Engine provides a command line tool for managing the jobs of the SeaTunnel Engine. You can use the command line tool to submit, stop, pause, resume, delete jobs, view job status and monitoring metrics, etc."),(0,i.yg)("p",null,"You can obtain the help information of the command line tool through the following command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -h\n")),(0,i.yg)("p",null,"The output is as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\nUsage: seatunnel.sh [options]\n  Options:\n    --async                         Run the job asynchronously. When the job is submitted, the client will exit (default: false).\n    -can, --cancel-job              Cancel the job by JobId.\n    --check                         Whether to check the config (default: false).\n    -cj, --close-job                Close the client and the task will also be closed (default: true).\n    -cn, --cluster                  The name of the cluster.\n    -c, --config                    Config file.\n    --decrypt                       Decrypt the config file. When both --decrypt and --encrypt are specified, only --encrypt will take effect (default: false). \n    -m, --master, -e, --deploy-mode SeaTunnel job submit master, support [local, cluster] (default: cluster).\n    --encrypt                       Encrypt the config file. When both --decrypt and --encrypt are specified, only --encrypt will take effect (default: false). \n    --get_running_job_metrics       Get metrics for running jobs (default: false).\n    -h, --help                      Show the usage message.\n    -j, --job-id                    Get the job status by JobId.\n    -l, --list                      List the job status (default: false).\n    --metrics                       Get the job metrics by JobId.\n    -n, --name                      The SeaTunnel job name (default: SeaTunnel).\n    -r, --restore                   Restore with savepoint by jobId.\n    -s, --savepoint                 Savepoint the job by jobId.\n    -i, --variable                  Variable substitution, such as -i city=beijing, or -i date=20190318. We use ',' as a separator. When inside \"\", ',' are treated as normal characters instead of delimiters. (default: []).\n\n")),(0,i.yg)("h2",{id:"submitting-jobs"},"Submitting Jobs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"--async")," parameter allows the job to run in the background. When the job is submitted, the client will exit."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async\n")),(0,i.yg)("p",null,"The ",(0,i.yg)("strong",{parentName:"p"},"-n")," or ",(0,i.yg)("strong",{parentName:"p"},"--name")," parameter can specify the name of the job."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async -n myjob\n")),(0,i.yg)("h2",{id:"viewing-the-job-list"},"Viewing The Job List"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -l\n")),(0,i.yg)("p",null,"This command will output the list of all jobs in the current cluster (including completed historical jobs and running jobs)."),(0,i.yg)("h2",{id:"viewing-the-job-status"},"Viewing The Job Status"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -j &lt;jobId&gt;\n")),(0,i.yg)("p",null,"This command will output the status information of the specified job."),(0,i.yg)("h2",{id:"getting-the-monitoring-information-of-running-jobs"},"Getting The Monitoring Information Of Running Jobs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --get_running_job_metrics\n")),(0,i.yg)("p",null,"This command will output the monitoring information of running jobs."),(0,i.yg)("h2",{id:"getting-the-monitoring-information-of-a-specified-job"},"Getting the Monitoring Information of a Specified Job"),(0,i.yg)("p",null,"The --metrics parameter can get the monitoring information of a specified job."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh --metrics &lt;jobId&gt;\n")),(0,i.yg)("h2",{id:"pausing-jobs"},"Pausing Jobs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -s &lt;jobId&gt;\n")),(0,i.yg)("p",null,"This command will pause the specified job. Note that only jobs with checkpoints enabled support pausing jobs (real-time synchronization jobs have checkpoints enabled by default, and batch jobs do not have checkpoints enabled by default and need to configure checkpoint.interval in ",(0,i.yg)("inlineCode",{parentName:"p"},"env")," to enable checkpoints)."),(0,i.yg)("p",null,"Pausing a job is in the smallest unit of split. That is, after pausing a job, it will wait for the currently running split to finish running and then pause. After the task is resumed, it will continue to run from the paused split."),(0,i.yg)("h2",{id:"resuming-jobs"},"Resuming Jobs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -r &lt;jobId&gt; -c $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,i.yg)("p",null,"This command will resume the specified job. Note that only jobs with checkpoints enabled support resuming jobs (real-time synchronization jobs have checkpoints enabled by default, and batch jobs do not have checkpoints enabled by default and need to configure checkpoint.interval in ",(0,i.yg)("inlineCode",{parentName:"p"},"env")," to enable checkpoints)."),(0,i.yg)("p",null,"Resuming a job requires the jobId and the configuration file of the job."),(0,i.yg)("p",null,"Both failed jobs and jobs paused by seatunnel.sh -s ","<","jobId",">"," can be resumed by this command."),(0,i.yg)("h2",{id:"canceling-jobs"},"Canceling Jobs"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-shell"},"sh bin/seatunnel.sh -can &lt;jobId&gt;\n")),(0,i.yg)("p",null,"This command will cancel the specified job. After canceling the job, the job will be stopped and its status will become ",(0,i.yg)("inlineCode",{parentName:"p"},"CANCELED"),"."),(0,i.yg)("p",null,"All breakpoint information of the canceled job will be deleted and cannot be resumed by seatunnel.sh -r ","<","jobId",">","."))}p.isMDXComponent=!0}}]);