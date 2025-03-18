"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[88714,81774],{50010:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(96540),l=n(20053),o=n(1003),r=n(17559),c=n(2967),i=n(84142),s=n(32252),d=n(26588),m=n(10575),u=n(21312),b=n(23104),p=n(75062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.gk)();return(0,b.Mq)(((e,n)=>{let{scrollY:a}=e;const r=n?.scrollY;r&&(o.current?o.current=!1:a>=r?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.$)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>r(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.A)("clean-btn",r.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var g=n(53109),f=n(56347),_=n(24581),v=n(6342),A=n(23465),C=n(58168);function k(e){return a.createElement("svg",(0,C.A)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function N(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.A)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},a.createElement(k,{className:S.collapseSidebarButtonIcon}))}var T=n(65041),I=n(89532);const x=Symbol("EmptyContext"),B=a.createContext(x);function w(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(B.Provider,{value:o},t)}var y=n(41422),L=n(99169),M=n(75489),H=n(92303);function P(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.T)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function G(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.p)(),g=function(e){const t=(0,H.A)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i._o)(e):void 0),[e,t])}(t),f=(0,i.w8)(t,o),_=(0,L.ys)(h,o),{collapsed:A,setCollapsed:k}=(0,y.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(B);if(e===x)throw new I.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!A),N(e?null:s),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,I.ZC)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:f,collapsed:A,updateCollapsed:T}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&k(!0)}),[b,S,s,k,E]),a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemCategory,r.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":A},p)},a.createElement("div",{className:(0,l.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(M.A,(0,C.A)({className:(0,l.A)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{n?.(t),h?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!A:void 0,href:b?g??"#":g},d),u),h&&b&&a.createElement(P,{categoryLabel:u,onClick:e=>{e.preventDefault(),T()}})),a.createElement(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A},a.createElement(K,{items:m,tabIndex:A?-1:0,onItemClick:n,activePath:o,level:c+1})))}var F=n(16654),W=n(43186);const D={menuExternalLink:"menuExternalLink_NmtK"};function U(e){let{item:t,onItemClick:n,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i.w8)(t,o),E=(0,F.A)(m);return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(M.A,(0,C.A)({className:(0,l.A)("menu__link",!E&&D.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(W.A,null)))}const z={menuHtmlItem:"menuHtmlItem_M9Kj"};function R(e){let{item:t,level:n,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.A)(r.G.docs.docSidebarItemLink,r.G.docs.docSidebarItemLinkLevel(n),i&&[z.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(G,(0,C.A)({item:t},n));case"html":return a.createElement(R,(0,C.A)({item:t},n));default:return a.createElement(U,(0,C.A)({item:t},n))}}function j(e){let{items:t,...n}=e;return a.createElement(w,null,t.map(((e,t)=>a.createElement(V,(0,C.A)({key:t,item:e,index:t},n)))))}const K=(0,a.memo)(j),q={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function O(e){let{path:t,sidebar:n,className:o}=e;const c=function(){const{isActive:e}=(0,T.Mj)(),[t,n]=(0,a.useState)(e);return(0,b.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.A)("menu thin-scrollbar",q.menu,c&&q.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:n,activePath:t,level:1})))}const X="sidebar_njMd",Y="sidebarWithHideableNavbar_wUlq",Z="sidebarHidden_VK0M",$="sidebarLogo_isFc";function J(e){let{path:t,sidebar:n,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.p)();return a.createElement("div",{className:(0,l.A)(X,c&&Y,r&&Z)},c&&a.createElement(A.A,{tabIndex:-1,className:$}),a.createElement(O,{path:t,sidebar:n}),i&&a.createElement(N,{onClick:o}))}const Q=a.memo(J);var ee=n(75600),te=n(22069);const ne=e=>{let{sidebar:t,path:n}=e;const o=(0,te.M)();return a.createElement("ul",{className:(0,l.A)(r.G.docs.docSidebarMenu,"menu__list")},a.createElement(K,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ae(e){return a.createElement(ee.GX,{component:ne,props:e})}const le=a.memo(ae);function oe(e){const t=(0,_.l)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Q,e),l&&a.createElement(le,e))}const re={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:re.expandButton,title:(0,u.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(k,{className:re.expandButtonIcon}))}const ie={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function se(e){let{children:t}=e;const n=(0,d.t)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function de(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,f.zy)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),!i&&(0,g.O)()&&s(!0),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.A)(r.G.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&s(!0)}},a.createElement(se,null,a.createElement("div",{className:(0,l.A)(ie.sidebarViewport,i&&ie.sidebarViewportHidden)},a.createElement(oe,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ce,{toggleSidebar:d}))))}const me={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.t)();return a.createElement("main",{className:(0,l.A)(me.docMainContainer,(t||!o)&&me.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.A)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},n))}const be={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX","themedComponent--light":"themedComponent--light_NU7w"};function pe(e){let{children:t}=e;const n=(0,d.t)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.A,{wrapperClassName:be.docsWrapper},a.createElement(E,null),a.createElement("div",{className:be.docPage},n&&a.createElement(de,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(ue,{hiddenSidebarContainer:l},t)))}var he=n(81774),Ee=n(41463);function ge(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Ee.A,{version:t.version,tag:(0,c.tU)(t.pluginId,t.version)}),a.createElement(o.be,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,i.mz)(e);if(!n)return a.createElement(he.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(ge,e),a.createElement(o.e3,{className:(0,l.A)(r.G.wrapper.docsPages,r.G.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.n,{version:t},a.createElement(d.V,{name:m,items:u},a.createElement(pe,null,c)))))}},81774:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(96540),l=n(21312),o=n(1003),r=n(10575);function c(){return a.createElement(a.Fragment,null,a.createElement(o.be,{title:(0,l.T)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(r.A,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.A,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);