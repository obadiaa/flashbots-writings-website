"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[3085],{7979:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(6010),l=n(1401),o=n(3905),i=n(90),s=n(3915),c=n(941),u="mdxPageWrapper_3qD3";var m=function(e){var t=e.content,n=t.frontMatter,m=t.metadata,d=n.title,f=n.description,v=n.wrapperClassName,b=n.hide_table_of_contents,p=m.permalink;return a.createElement(l.Z,{title:d,description:f,permalink:p,wrapperClassName:null!=v?v:c.kM.wrapper.mdxPages,pageClassName:c.kM.page.mdxPage},a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,r.Z)("row",u)},a.createElement("div",{className:(0,r.Z)("col",!b&&"col--8")},a.createElement(o.Zo,{components:i.Z},a.createElement(t,null))),!b&&t.toc&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:t.toc})))))}},1401:function(e,t,n){n.d(t,{Z:function(){return z}});var a=n(7294),r=n(6010),l=n(3946),o=n(1261),i=n(7462),s=n(4973),c=n(1875),u=n(9189),m=n(5350),d=n(941),f=n(8232),v=n(1839),b=n(3783),p=n(907),_=n(6047),g=n(3366),Z=n(6742),h=n(4996),E=n(2263),N="logoTitle_2plQ",k="wrapper_1M7a",w=["imageClassName","titleClassName"],y=function(e){(0,E.Z)().siteConfig.title;var t=(0,d.LU)().navbar,n=t.title,l=t.logo,o=void 0===l?{src:""}:l,s=(e.imageClassName,e.titleClassName),c=(0,g.Z)(e,w),u=(0,h.Z)(o.href||"/");return a.createElement(Z.Z,(0,i.Z)({className:k,to:u},c,o.target&&{target:o.target}),a.createElement("svg",{width:"12",height:"14",viewBox:"0 0 12 14"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.07289 0L7.91879 0.483459L6.631 4.76674H11.5178L4.19989 12.679L3.35398 12.1956L4.72089 7.64736H0L7.07289 0ZM5.20514 6.03608L6.33835 2.26697L2.28701 6.64736H5.02136L5.20514 6.03608ZM4.93407 10.4124L9.23077 5.76674H6.33078L6.16271 6.3243L4.93407 10.4124Z",fill:"var(--ifm-font-color-base)"})),null!=n&&a.createElement("span",{className:(0,r.Z)(s,N)},n))},C=n(4478),I=n(2670),L={"layoutDefaults_src-theme-Layout-styles-module":"layoutDefaults_src-theme-Layout-styles-module_3uLU",toggle:"toggle_268h",navbarHideable:"navbarHideable_qfwt",navbarHidden:"navbarHidden_3G8N",navbarSidebarToggle:"navbarSidebarToggle_jHOO",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_3glt",logo:"logo_2BbA",title:"title_2fsg",fixFlex:"fixFlex_19nV",navRoot:"navRoot_1Vd8",customNav:"customNav_qIxq",navItems:"navItems_l2fJ"},D="right";function S(){return(0,d.LU)().navbar.items}function x(){var e=(0,d.LU)().colorMode.disableSwitch,t=(0,m.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function B(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,v.Z)(t);var l=S(),o=x(),c=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,d.g8)())?void 0:t({toggleSidebar:r}),o=(0,d.D9)(l),i=(0,a.useState)((function(){return!1})),s=i[0],c=i[1];(0,a.useEffect)((function(){l&&!o&&c(!0)}),[l,o]);var u=!!l;return(0,a.useEffect)((function(){u?n||c(!0):c(!1)}),[n,u]),{shown:s,hide:(0,a.useCallback)((function(){c(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(y,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!o.disabled&&a.createElement(u.Z,{className:L.navbarSidebarToggle,checked:o.isDarkTheme,onChange:o.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(I.Z,{width:20,height:20,className:L.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(_.Z,(0,i.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},a.createElement(s.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu,\xa0 inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}var T=function(){var e,t=(0,d.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,b.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,d.Rb)((function(){r&&l(!1)}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),s=x(),m=(0,p.gA)(),v=(0,f.Z)(n),g=v.navbarRef,Z=v.isNavbarVisible,h=S(),E=h.some((function(e){return"search"===e.type})),N=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:D)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:D)}))}}(h),k=N.leftItems,w=N.rightItems;return a.createElement("nav",{ref:g,className:(0,r.Z)(L.navRoot,"navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[L.navbarHideable]=n,e[L.navbarHidden]=n&&!Z,e))},a.createElement("div",{className:(0,r.Z)(L.navbarInner,"navbar__inner")},a.createElement("div",{className:(0,r.Z)("navbar__items",L.fixFlex)},((null==h?void 0:h.length)>0||m)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(C.Z,null)),a.createElement(y,{className:"navbar__brand",imageClassName:(0,r.Z)("navbar__logo",L.logo),titleClassName:(0,r.Z)("navbar__title",L.title)})),a.createElement("div",{className:(0,r.Z)("navbar__items navbar__items--right",L.fixFlex,L.navItems)},k.map((function(e,t){return a.createElement(_.Z,(0,i.Z)({},e,{key:t}))})),w.map((function(e,t){return a.createElement(_.Z,(0,i.Z)({},e,{key:t}))})),!s.disabled&&a.createElement(u.Z,{className:L.toggle,checked:s.isDarkTheme,onChange:s.toggle}),!E&&a.createElement(c.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(B,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},R=n(3919),H="footerLogoLink_qW4Z",A=n(8465),P=n(8617),M=["to","href","label","prependBaseUrlToHref"];function V(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,g.Z)(e,M),s=(0,h.Z)(t),c=(0,h.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(Z.Z,(0,i.Z)({className:"footer__link-item"},n?{href:l?c:n}:{to:s},o),n&&!(0,R.Z)(n)?a.createElement("span",null,r,a.createElement(P.Z,null)):r)}var U=function(e){var t=e.sources,n=e.alt;return a.createElement(A.Z,{className:"footer__logo",alt:n,sources:t})};var O=function(){var e=(0,d.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,c={light:(0,h.Z)(s.src),dark:(0,h.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(V,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(Z.Z,{href:s.href,className:H},a.createElement(U,{alt:s.alt,sources:c})):a.createElement(U,{alt:s.alt,sources:c})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},W=n(3792),q=n(9757),F=n(8245),j="layoutDefaults_1s0t";var z=function(e){var t=e.children,n=e.noFooter,i=e.wrapperClassName,s=e.pageClassName;return(0,F.Z)(),a.createElement(W.Z,null,a.createElement(q.Z,e),a.createElement(l.Z,null),a.createElement(o.Z,null),a.createElement(T,null),a.createElement("div",{className:(0,r.Z)(d.kM.wrapper.main,i,s,j)},t),!n&&a.createElement(O,null))}},4517:function(e,t,n){n.d(t,{O:function(){return b}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(6742),s=n(4996),c=n(3919),u=n(6047),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function b(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,u=e.to,d=e.href,f=e.label,v=e.activeClassName,b=void 0===v?"":v,p=e.prependBaseUrlToHref,_=(0,r.Z)(e,m),g=(0,s.Z)(u),Z=(0,s.Z)(n),h=(0,s.Z)(d,{forcePrependBaseUrl:!0}),E=f&&d&&!(0,c.Z)(d);return l.createElement(i.Z,(0,a.Z)({},d?{href:p?h:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=_.className)&&t.includes(b)?"":b,to:g},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(Z)}}:null),_),E?l.createElement("span",null,f):f)}function p(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,s=(0,r.Z)(e,d),c=l.createElement(b,(0,a.Z)({className:(0,o.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},s));return i?l.createElement("li",null,c):c}function _(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return l.createElement("li",{className:"menu__list-item"},l.createElement(b,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,i=(e.position,(0,r.Z)(e,v)),s=o?_:p;return l.createElement(s,(0,a.Z)({},i,{activeClassName:null!=(t=i.activeClassName)?t:(0,u.E)(o)}))}},9061:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),o=n(4517),i=n(907),s=n(6010),c=n(6047),u=n(941),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,v=e.docsPluginId,b=(0,r.Z)(e,d),p=(0,i.Iw)(v),_=p.activeVersion,g=p.activeDoc,Z=(0,u.J)(v).preferredVersion,h=(0,i.yW)(v),E=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([_,Z,h].filter(Boolean)),n),N=(0,c.E)(b.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},b,{className:(0,s.Z)(b.className,(t={},t[N]=(null==g?void 0:g.sidebar)&&g.sidebar===E.sidebar,t)),activeClassName:N,label:null!=f?f:E.id,to:E.path}))}},3886:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),l=n(7294),o=n(4517),i=n(9553),s=n(907),c=n(941),u=n(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,v=e.docsPluginId,b=e.dropdownActiveClassDisabled,p=e.dropdownItemsBefore,_=e.dropdownItemsAfter,g=(0,r.Z)(e,m),Z=(0,s.Iw)(v),h=(0,s.gB)(v),E=(0,s.yW)(v),N=(0,c.J)(v),k=N.preferredVersion,w=N.savePreferredVersionName;var y,C=(y=h.map((function(e){var t=(null==Z?void 0:Z.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==Z?void 0:Z.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(p,y,_)),I=null!=(t=null!=(n=Z.activeVersion)?n:k)?t:E,L=f&&C?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):I.label,D=f&&C?void 0:d(I).path;return C.length<=1?l.createElement(o.Z,(0,a.Z)({},g,{mobile:f,label:L,to:D,isActive:b?function(){return!1}:void 0})):l.createElement(i.Z,(0,a.Z)({},g,{mobile:f,label:L,to:D,items:C,isActive:b?function(){return!1}:void 0}))}},5412:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(4517),i=n(907),s=n(941),c=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,c),f=(0,i.zu)(m),v=(0,s.J)(m).preferredVersion,b=(0,i.yW)(m),p=null!=(t=null!=f?f:v)?t:b,_=null!=n?n:p.label,g=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(p).path;return l.createElement(o.Z,(0,a.Z)({},d,{label:_,to:g}))}},9553:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6010),i=n(941),s=n(4517),c=n(6047),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,i.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,i=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useState)(!1),p=b[0],_=b[1];return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===i,"dropdown--show":p})},l.createElement(s.O,(0,a.Z)({className:(0,o.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!p))}}),null!=(t=d.children)?t:d.label),l.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function b(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),v=(0,i.be)(),b=f(n,v),p=(0,i.uR)({initialState:function(){return!b}}),_=p.collapsed,g=p.toggleCollapsed,Z=p.setCollapsed;return(0,l.useEffect)((function(){b&&Z(!b)}),[v,b]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":_})},l.createElement(s.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),g()}}),null!=(t=d.children)?t:d.label),l.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},n.map((function(e,t){return l.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),o=n?b:v;return l.createElement(o,a)}},6047:function(e,t,n){n.d(t,{Z:function(){return Z},E:function(){return g}});var a=n(3366),r=n(7294),l=n(4517),o=n(9553),i=n(7462),s=n(3264),c=n(2263),u=n(941),m="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,f=(0,a.Z)(e,d),v=(0,c.Z)().i18n,b=v.currentLocale,p=v.locales,_=v.localeConfigs,g=(0,u.l5)();function Z(e){return _[e].label}var h=p.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:Z(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===b?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),E=[].concat(n,h,l),N=t?"Languages":Z(b);return r.createElement(o.Z,(0,i.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(s.Z,{className:m}),r.createElement("span",null,N)),items:E}))}var v=n(1875);function b(e){return e.mobile?null:r.createElement(v.Z,null)}var p=["type"],_={default:function(){return l.Z},localeDropdown:function(){return f},search:function(){return b},dropdown:function(){return o.Z},docsVersion:function(){return n(5412).Z},docsVersionDropdown:function(){return n(3886).Z},doc:function(){return n(9061).Z}};var g=function(e){return e?"menu__link--active":"navbar__link--active"};function Z(e){var t=e.type,n=(0,a.Z)(e,p),l=function(e){var t=_[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(l,n)}},3915:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),l=n(5035),o="tableOfContents_rbnR",i="table-of-contents__link",s={linkClassName:i,linkActiveClassName:"table-of-contents__link--active"};function c(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:i,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(c,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return(0,l.Z)(s),a.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar")},a.createElement(c,{toc:t}))}}}]);