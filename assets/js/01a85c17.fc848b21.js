"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[4013],{5035:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(6848);function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>l(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function s(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=s();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])}},4284:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010),l=a(3721),o=a(3915);const s="containerRoot_MxZn",c="TOC_BWJh";const i=function(e){const{sidebar:t,toc:a,children:i,...m}=e;return n.createElement(l.Z,m,n.createElement("div",{className:(0,r.Z)("container","margin-vert--md",s)},n.createElement("div",{className:"row"},n.createElement("main",{className:(0,r.Z)("col",{"col--12":!0}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:(0,r.Z)("col","col--2",c)},n.createElement(o.Z,{toc:a})))))}},1986:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(7294),r=a(4284),l=a(1917),o=a(6848);const s="tag_vPiY";function c(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,e))))),n.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,o.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(c,{key:e.letter,letterEntry:e}))))};const m=function(e){const{tags:t,sidebar:a}=e,l=(0,o.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(i,{tags:Object.values(t)}))}},3721:(e,t,a)=>{a.d(t,{Z:()=>W});var n=a(7294),r=a(6010),l=a(3946),o=a(1261),s=a(7462),c=a(4973),i=a(1875),m=a(9189),d=a(5350),u=a(6848),b=a(8232),v=a(1839),f=a(3783),g=a(907),h=a(6047),_=a(6742),E=a(4996),p=a(2263);const Z="logoTitle_PCW0",N="wrapper_BbhS",k=e=>{const{siteConfig:{title:t}}=(0,p.Z)(),{navbar:{title:a,logo:l={src:""}}}=(0,u.LU)(),{imageClassName:o,titleClassName:c,...i}=e,m=(0,E.Z)(l.href||"/");return n.createElement(_.Z,(0,s.Z)({className:N,to:m},i,l.target&&{target:l.target}),n.createElement("svg",{width:"12",height:"14",viewBox:"0 0 12 14"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.07289 0L7.91879 0.483459L6.631 4.76674H11.5178L4.19989 12.679L3.35398 12.1956L4.72089 7.64736H0L7.07289 0ZM5.20514 6.03608L6.33835 2.26697L2.28701 6.64736H5.02136L5.20514 6.03608ZM4.93407 10.4124L9.23077 5.76674H6.33078L6.16271 6.3243L4.93407 10.4124Z",fill:"var(--ifm-font-color-base)"})),null!=a&&n.createElement("span",{className:(0,r.Z)(c,Z)},a))};var w=a(4478),y=a(2670);const C={"layoutDefaults_src-theme-Layout-styles-module":"layoutDefaults_src-theme-Layout-styles-module_CJDC",toggle:"toggle_F2cT",navbarHideable:"navbarHideable_fBz2",navbarHidden:"navbarHidden_190W",navbarSidebarToggle:"navbarSidebarToggle_cnNu",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_noAl",logo:"logo_0HPH",title:"title_WuSz",fixFlex:"fixFlex_OJh4",navRoot:"navRoot_LKda",customNav:"customNav_XdyM",navItems:"navItems_TfOx"},L="right";function S(){return(0,u.LU)().navbar.items}function D(){const{colorMode:{disableSwitch:e}}=(0,u.LU)(),{isDarkTheme:t,setLightTheme:a,setDarkTheme:r}=(0,d.Z)();return{isDarkTheme:t,toggle:(0,n.useCallback)((e=>e.target.checked?r():a()),[a,r]),disabled:e}}function I(e){let{sidebarShown:t,toggleSidebar:a}=e;(0,v.Z)(t);const l=S(),o=D(),i=function(e){let{sidebarShown:t,toggleSidebar:a}=e;const r=(0,u.g8)()?.({toggleSidebar:a}),l=(0,u.D9)(r),[o,s]=(0,n.useState)((()=>!1));(0,n.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const c=!!r;return(0,n.useEffect)((()=>{c?t||s(!0):s(!1)}),[t,c]),{shown:o,hide:(0,n.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:a});return n.createElement("div",{className:"navbar-sidebar"},n.createElement("div",{className:"navbar-sidebar__brand"},n.createElement(k,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&n.createElement(m.Z,{className:C.navbarSidebarToggle,checked:o.isDarkTheme,onChange:o.toggle}),n.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:a},n.createElement(y.Z,{width:20,height:20,className:C.navbarSidebarCloseSvg}))),n.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},n.createElement("div",{className:"navbar-sidebar__item menu"},n.createElement("ul",{className:"menu__list"},l.map(((e,t)=>n.createElement(h.Z,(0,s.Z)({mobile:!0},e,{onClick:a,key:t})))))),n.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&n.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},n.createElement(c.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu,\xa0 inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const T=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,u.LU)(),a=function(){const e=(0,f.Z)(),t="mobile"===e,[a,r]=(0,n.useState)(!1);(0,u.Rb)((()=>{a&&r(!1)}));const l=(0,n.useCallback)((()=>{r((e=>!e))}),[]);return(0,n.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:a}}(),l=D(),o=(0,g.gA)(),{navbarRef:c,isNavbarVisible:d}=(0,b.Z)(e),v=S(),_=v.some((e=>"search"===e.type)),{leftItems:E,rightItems:p}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??L))),rightItems:e.filter((e=>"right"===(e.position??L)))}}(v);return n.createElement("nav",{ref:c,className:(0,r.Z)(C.navRoot,"navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":a.shown,[C.navbarHideable]:e,[C.navbarHidden]:e&&!d})},n.createElement("div",{className:(0,r.Z)(C.navbarInner,"navbar__inner")},n.createElement("div",{className:(0,r.Z)("navbar__items",C.fixFlex)},(v?.length>0||o)&&n.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:a.toggle,onKeyDown:a.toggle},n.createElement(w.Z,null)),n.createElement(k,{className:"navbar__brand",imageClassName:(0,r.Z)("navbar__logo",C.logo),titleClassName:(0,r.Z)("navbar__title",C.title)})),n.createElement("div",{className:(0,r.Z)("navbar__items navbar__items--right",C.fixFlex,C.navItems)},E.map(((e,t)=>n.createElement(h.Z,(0,s.Z)({},e,{key:t})))),p.map(((e,t)=>n.createElement(h.Z,(0,s.Z)({},e,{key:t})))),!l.disabled&&n.createElement(m.Z,{className:C.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!_&&n.createElement(i.Z,null))),n.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:a.toggle}),a.shouldRender&&n.createElement(I,{sidebarShown:a.shown,toggleSidebar:a.toggle}))},x="footerLogoLink_94kH";var B=a(8465);function R(e){let{to:t,href:a,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,E.Z)(t),i=(0,E.Z)(a,{forcePrependBaseUrl:!0});return n.createElement(_.Z,(0,s.Z)({className:"footer__link-item"},a?{href:l?i:a}:{to:c},o),r)}const H=e=>{let{sources:t,alt:a}=e;return n.createElement(B.Z,{className:"footer__logo",alt:a,sources:t})};const A=function(){const{footer:e}=(0,u.LU)(),{copyright:t,links:a=[],logo:l={}}=e||{},o={light:(0,E.Z)(l.src),dark:(0,E.Z)(l.srcDark||l.src)};return e?n.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},a&&a.length>0&&n.createElement("div",{className:"col footer__links"},a.map(((e,t)=>n.createElement("div",{key:t},null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"row footer__items"},e.items.map(((e,t)=>e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(R,e))))):null)))),(l||t)&&n.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&n.createElement("div",{className:"margin-bottom--sm"},l.href?n.createElement(_.Z,{href:l.href,className:x},n.createElement(H,{alt:l.alt,sources:o})):n.createElement(H,{alt:l.alt,sources:o})),t?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var M=a(3792),P=a(9757),O=a(8245);const U="layoutDefaults_XzHD";var V=a(6550);var z=a(340);const W=function(e){const{children:t,noFooter:a,wrapperClassName:s,pageClassName:c}=e;return(0,O.Z)(),(()=>{const e=["/writings/","/research/"],{pathname:t}=(0,V.TH)(),a=(0,E.Z)("/"),r=(0,V.k6)();(0,n.useEffect)((()=>{const n=e.find((e=>t.includes(e)));n&&r.push(`${a}${t.replace(n,"")}`)}),[t])})(),n.createElement(M.Z,null,n.createElement(z.c,null),n.createElement(P.Z,e),n.createElement(l.Z,null),n.createElement(o.Z,null),n.createElement(T,null),n.createElement("div",{className:(0,r.Z)(u.kM.wrapper.main,s,c,U)},t),!a&&n.createElement(A,null))}},4517:(e,t,a)=>{a.d(t,{O:()=>m,Z:()=>b});var n=a(7462),r=a(7294),l=a(6010),o=a(6742),s=a(4996),c=a(3919),i=a(6047);function m(e){let{activeBasePath:t,activeBaseRegex:a,to:l,href:i,label:m,activeClassName:d="",prependBaseUrlToHref:u,...b}=e;const v=(0,s.Z)(l),f=(0,s.Z)(t),g=(0,s.Z)(i,{forcePrependBaseUrl:!0}),h=m&&i&&!(0,c.Z)(i);return r.createElement(o.Z,(0,n.Z)({},i?{href:u?g:i}:{isNavLink:!0,activeClassName:b.className?.includes(d)?"":d,to:v,...t||a?{isActive:(e,t)=>a?new RegExp(a).test(t.pathname):t.pathname.startsWith(f)}:null},b),h?r.createElement("span",null,m):m)}function d(e){let{className:t,isDropdownItem:a=!1,...o}=e;const s=r.createElement(m,(0,n.Z)({className:(0,l.Z)(a?"dropdown__link":"navbar__item navbar__link",t)},o));return a?r.createElement("li",null,s):s}function u(e){let{className:t,isDropdownItem:a,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(m,(0,n.Z)({className:(0,l.Z)("menu__link",t)},o)))}const b=function(e){let{mobile:t=!1,position:a,...l}=e;const o=t?u:d;return r.createElement(o,(0,n.Z)({},l,{activeClassName:l.activeClassName??(0,i.E)(t)}))}},9061:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(4517),o=a(907),s=a(6010),c=a(6047),i=a(6848),m=a(8780);function d(e){let{docId:t,label:a,docsPluginId:d,...u}=e;const{activeVersion:b,activeDoc:v}=(0,o.Iw)(d),{preferredVersion:f}=(0,i.J)(d),g=(0,o.yW)(d),h=function(e,t){const a=e.flatMap((e=>e.docs)),n=a.find((e=>e.id===t));if(!n){const n=a.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${n}`)}return n}((0,m.uniq)([b,f,g].filter(Boolean)),t),_=(0,c.E)(u.mobile);return r.createElement(l.Z,(0,n.Z)({exact:!0},u,{className:(0,s.Z)(u.className,{[_]:v?.sidebar&&v.sidebar===h.sidebar}),activeClassName:_,label:a??h.id,to:h.path}))}},3886:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),l=a(4517),o=a(9553),s=a(907),c=a(6848),i=a(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function d(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:d,dropdownItemsBefore:u,dropdownItemsAfter:b,...v}=e;const f=(0,s.Iw)(a),g=(0,s.gB)(a),h=(0,s.yW)(a),{preferredVersion:_,savePreferredVersionName:E}=(0,c.J)(a);const p=function(){const e=g.map((e=>{const t=f?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===f?.activeVersion,onClick:()=>{E(e.name)}}}));return[...u,...e,...b]}(),Z=f.activeVersion??_??h,N=t&&p?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):Z.label,k=t&&p?void 0:m(Z).path;return p.length<=1?r.createElement(l.Z,(0,n.Z)({},v,{mobile:t,label:N,to:k,isActive:d?()=>!1:void 0})):r.createElement(o.Z,(0,n.Z)({},v,{mobile:t,label:N,to:k,items:p,isActive:d?()=>!1:void 0}))}},5412:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),l=a(4517),o=a(907),s=a(6848);function c(e){let{label:t,to:a,docsPluginId:c,...i}=e;const m=(0,o.zu)(c),{preferredVersion:d}=(0,s.J)(c),u=(0,o.yW)(c),b=m??d??u,v=t??b.label,f=a??(e=>e.docs.find((t=>t.id===e.mainDocId)))(b).path;return r.createElement(l.Z,(0,n.Z)({},i,{label:v,to:f}))}},9553:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(7462),r=a(7294),l=a(6010),o=a(6848),s=a(4517),c=a(6047);function i(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function m(e){let{items:t,position:a,className:o,...i}=e;const m=(0,r.useRef)(null),d=(0,r.useRef)(null),[u,b]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[m]),r.createElement("div",{ref:m,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===a,"dropdown--show":u})},r.createElement(s.O,(0,n.Z)({className:(0,l.Z)("navbar__link",o)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),b(!u))}}),i.children??i.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,a)=>r.createElement(c.Z,(0,n.Z)({isDropdownItem:!0,onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);const t=m.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active"},e,{key:a}))))))}function d(e){let{items:t,className:a,position:m,...d}=e;const u=(0,o.be)(),b=i(t,u),{collapsed:v,toggleCollapsed:f,setCollapsed:g}=(0,o.uR)({initialState:()=>!b});return(0,r.useEffect)((()=>{b&&g(!b)}),[u,b]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":v})},r.createElement(s.O,(0,n.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",a)},d,{onClick:e=>{e.preventDefault(),f()}}),d.children??d.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},t.map(((e,t)=>r.createElement(c.Z,(0,n.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const u=function(e){let{mobile:t=!1,...a}=e;const n=t?d:m;return r.createElement(n,a)}},6047:(e,t,a)=>{a.d(t,{Z:()=>g,E:()=>f});var n=a(7294),r=a(4517),l=a(9553),o=a(7462),s=a(3264),c=a(2263),i=a(6848);const m="iconLanguage_zID8";function d(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:r,...d}=e;const{i18n:{currentLocale:u,locales:b,localeConfigs:v}}=(0,c.Z)(),f=(0,i.l5)();function g(e){return v[e].label}const h=[...a,...b.map((e=>{const t=`pathname://${f.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===u?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],_=t?"Languages":g(u);return n.createElement(l.Z,(0,o.Z)({},d,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{className:m}),n.createElement("span",null,_)),items:h}))}var u=a(1875);function b(e){let{mobile:t}=e;return t?null:n.createElement(u.Z,null)}const v={default:()=>r.Z,localeDropdown:()=>d,search:()=>b,dropdown:()=>l.Z,docsVersion:()=>a(5412).Z,docsVersionDropdown:()=>a(3886).Z,doc:()=>a(9061).Z};const f=e=>e?"menu__link--active":"navbar__link--active";function g(e){let{type:t,...a}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==a.items),l=(e=>{const t=v[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()})(r);return n.createElement(l,a)}},3915:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),r=a(6010),l=a(5035);const o="tableOfContents_H-s0",s="table-of-contents__link",c={linkClassName:s,linkActiveClassName:"table-of-contents__link--active"};function i(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children}))))):null}const m=function(e){let{toc:t}=e;return(0,l.Z)(c),n.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar")},n.createElement(i,{toc:t}))}},1917:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010),l=a(6742);const o="tag_6TIk",s="tagRegular_fTkM",c="tagWithCount_4sRq";const i=function(e){const{permalink:t,name:a,count:i}=e;return n.createElement(l.Z,{href:t,className:(0,r.Z)(o,{[s]:!i,[c]:i})},a,i&&n.createElement("span",null,i))}}}]);