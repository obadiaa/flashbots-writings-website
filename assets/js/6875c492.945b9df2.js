(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[8610],{4284:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(3366),r=n(7294),i=n(6010),s=n(2194),o=n(3915),l="containerRoot_3RmU",c="TOC_1KIS",u=["sidebar","toc","children"];var m=function(e){e.sidebar;var t=e.toc,n=e.children,m=(0,a.Z)(e,u);return r.createElement(s.Z,m,r.createElement("div",{className:(0,i.Z)("container","margin-vert--md",l)},r.createElement("div",{className:"row"},r.createElement("main",{className:(0,i.Z)("col",{"col--12":!0}),itemScope:!0,itemType:"http://schema.org/Blog"},n),t&&r.createElement("div",{className:(0,i.Z)("col","col--2",c)},r.createElement(o.Z,{toc:t})))))}},6719:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var a=n(7294),r=n(6010),i=n(3905),s=n(4973),o=n(6742),l=n(4996),c=n(941),u=n(90),m="blogPostTitle_nmLu",d="blogPostData_3WzT",f="fixedColor_3yYP";var h=function(e){var t=e.author,n=t.name,r=(t.title,t.url);return t.imageURL,a.createElement("div",{className:"avatar margin-bottom--sm"},n&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(o.Z,{className:f,href:r,itemProp:"url"},a.createElement("span",{itemProp:"name"},n)))))},v="authorCol_HqTB";function g(e){var t=e.authors,n=e.assets;return 0===t.length?a.createElement(a.Fragment,null):a.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var i;return a.createElement("div",{className:(0,r.Z)("col col--6",v),key:t},a.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=n.authorsImageUrls[t])?i:e.imageURL})}))})))}var b=n(7484),p=n.n(b);var _=function(e){var t,n,f,h=(n=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),v=(0,l.C)().withBaseUrl,b=e.children,_=e.frontMatter,E=e.assets,Z=e.metadata,w=(e.truncated,e.isBlogPostPage),N=void 0!==w&&w,y=Z.date,$=(Z.formattedDate,Z.permalink),k=(Z.tags,Z.readingTime),D=Z.title,M=(Z.editUrl,Z.authors),S=null!=(t=E.image)?t:_.image;return a.createElement("article",{className:N?void 0:"margin-bottom--lg",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(f=N?"h1":"h2",a.createElement("header",null,a.createElement(f,{className:m,itemProp:"headline"},N?D:a.createElement(o.Z,{itemProp:"url",to:$},D)),a.createElement("div",{className:(0,r.Z)(d,"margin-vert--md")},a.createElement("time",{dateTime:y,itemProp:"datePublished"},p()(y).format("DD.MM.YY")),void 0!==k&&a.createElement(a.Fragment,null," \xb7 ",h(k))),a.createElement(g,{authors:M,assets:E}))),S&&a.createElement("meta",{itemProp:"image",content:v(S,{absolute:!0})}),a.createElement("div",{className:"markdown",itemProp:"articleBody"},a.createElement(i.Zo,{components:u.Z},b)))}},642:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(6742),i=n(4284),s=n(6719),o=n(4973),l=n(941);function c(e){var t,n=e.metadata,c=e.items,u=(e.sidebar,n.allTagsPath,n.name),m=n.count,d=(t=(0,l.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),f=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:d(m),tagName:u});return a.createElement(i.Z,{title:f,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"}},a.createElement("header",{className:"margin-bottom--md"},a.createElement("h1",null,f),a.createElement(r.Z,{href:"/"},a.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"Back to overview"))),c.map((function(e){var t=e.content;return a.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},a.createElement(t,null))})))}},2194:function(e,t,n){"use strict";n.d(t,{Z:function(){return V}});var a=n(7294),r=n(6010),i=n(3946),s=n(1261),o=n(7462),l=n(4973),c=n(1875),u=n(9189),m=n(5350),d=n(941),f=n(8232),h=n(1839),v=n(3783),g=n(907),b=n(6047),p=n(5537),_=n(4478),E=n(2670),Z="toggle_268h",w="navbarHideable_qfwt",N="navbarHidden_3G8N",y="navbarSidebarToggle_jHOO",$="navbarSidebarCloseSvg_3glt",k="navbarInner_2Qjc",D="logo_2BbA",M="title_2fsg",S="fixFlex_19nV",C="navRoot_1Vd8",I="customNav_qIxq",T="right";function P(){return(0,d.LU)().navbar.items}function O(){var e=(0,d.LU)().colorMode.disableSwitch,t=(0,m.Z)(),n=t.isDarkTheme,r=t.setLightTheme,i=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?i():r()}),[r,i]),disabled:e}}function L(e){var t=e.sidebarShown,n=e.toggleSidebar;(0,h.Z)(t);var i=P(),s=O(),c=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,i=null==(t=(0,d.g8)())?void 0:t({toggleSidebar:r}),s=(0,d.D9)(i),o=(0,a.useState)((function(){return!1})),l=o[0],c=o[1];(0,a.useEffect)((function(){i&&!s&&c(!0)}),[i,s]);var u=!!i;return(0,a.useEffect)((function(){u?n||c(!0):c(!1)}),[n,u]),{shown:l,hide:(0,a.useCallback)((function(){c(!1)}),[]),content:i}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(p.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(u.Z,{className:y,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(E.Z,{width:20,height:20,className:$}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":c.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},i.map((function(e,t){return a.createElement(b.Z,(0,o.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},i.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:c.hide},a.createElement(l.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu,\xa0 inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),c.content)))}var B=function(){var e,t=(0,d.LU)().navbar,n=t.hideOnScroll,i=t.style,s=function(){var e=(0,v.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],i=n[1];(0,d.Rb)((function(){r&&i(!1)}));var s=(0,a.useCallback)((function(){i((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&i(!1)}),[e]),{shouldRender:t,toggle:s,shown:r}}(),l=O(),m=(0,g.gA)(),h=(0,f.Z)(n),E=h.navbarRef,y=h.isNavbarVisible,$=P(),B=$.some((function(e){return"search"===e.type})),x=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:T)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:T)}))}}($),A=x.leftItems,U=x.rightItems;return a.createElement("nav",{ref:E,className:(0,r.Z)(C,"navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===i,"navbar--primary":"primary"===i,"navbar-sidebar--show":s.shown},e[w]=n,e[N]=n&&!y,e))},a.createElement("div",{className:(0,r.Z)(k,"navbar__inner")},a.createElement("div",{className:(0,r.Z)("navbar__items",S)},((null==$?void 0:$.length)>0||m)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:s.toggle,onKeyDown:s.toggle},a.createElement(_.Z,null)),a.createElement(p.Z,{className:"navbar__brand",imageClassName:(0,r.Z)("navbar__logo",D),titleClassName:(0,r.Z)("navbar__title",M)})),a.createElement("div",{className:(0,r.Z)("navbar__items navbar__items--right",S)},!l.disabled&&a.createElement(u.Z,{className:Z,checked:l.isDarkTheme,onChange:l.toggle}),!B&&a.createElement(c.Z,null)),a.createElement("div",{className:(0,r.Z)("navbar__items",S,I)},A.map((function(e,t){return a.createElement(b.Z,(0,o.Z)({},e,{key:t}))})),U.map((function(e,t){return a.createElement(b.Z,(0,o.Z)({},e,{key:t}))})))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:s.toggle}),s.shouldRender&&a.createElement(L,{sidebarShown:s.shown,toggleSidebar:s.toggle}))},x=n(7234),A=n(3792),U=n(9757),R=n(8245),H="layoutDefaults_1s0t";var V=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,l=e.pageClassName;return(0,R.Z)(),a.createElement(A.Z,null,a.createElement(U.Z,e),a.createElement(i.Z,null),a.createElement(s.Z,null),a.createElement(B,null),a.createElement("div",{className:(0,r.Z)(d.kM.wrapper.main,o,l,H)},t),!n&&a.createElement(x.Z,null))}},4517:function(e,t,n){"use strict";n.d(t,{O:function(){return v}});var a=n(7462),r=n(3366),i=n(7294),s=n(6010),o=n(6742),l=n(4996),c=n(3919),u=n(6047),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],h=["mobile","position"];function v(e){var t,n=e.activeBasePath,s=e.activeBaseRegex,u=e.to,d=e.href,f=e.label,h=e.activeClassName,v=void 0===h?"":h,g=e.prependBaseUrlToHref,b=(0,r.Z)(e,m),p=(0,l.Z)(u),_=(0,l.Z)(n),E=(0,l.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,c.Z)(d);return i.createElement(o.Z,(0,a.Z)({},d?{href:g?E:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=b.className)&&t.includes(v)?"":v,to:p},n||s?{isActive:function(e,t){return s?new RegExp(s).test(t.pathname):t.pathname.startsWith(_)}}:null),b),Z?i.createElement("span",null,f):f)}function g(e){var t=e.className,n=e.isDropdownItem,o=void 0!==n&&n,l=(0,r.Z)(e,d),c=i.createElement(v,(0,a.Z)({className:(0,s.Z)(o?"dropdown__link":"navbar__item navbar__link",t)},l));return o?i.createElement("li",null,c):c}function b(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,f));return i.createElement("li",{className:"menu__list-item"},i.createElement(v,(0,a.Z)({className:(0,s.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,s=void 0!==n&&n,o=(e.position,(0,r.Z)(e,h)),l=s?b:g;return i.createElement(l,(0,a.Z)({},o,{activeClassName:null!=(t=o.activeClassName)?t:(0,u.E)(s)}))}},9061:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),i=n(7294),s=n(4517),o=n(907),l=n(6010),c=n(6047),u=n(941),m=n(8780),d=["docId","label","docsPluginId"];function f(e){var t,n=e.docId,f=e.label,h=e.docsPluginId,v=(0,r.Z)(e,d),g=(0,o.Iw)(h),b=g.activeVersion,p=g.activeDoc,_=(0,u.J)(h).preferredVersion,E=(0,o.yW)(h),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,_,E].filter(Boolean)),n),w=(0,c.E)(v.mobile);return i.createElement(s.Z,(0,a.Z)({exact:!0},v,{className:(0,l.Z)(v.className,(t={},t[w]=(null==p?void 0:p.sidebar)&&p.sidebar===Z.sidebar,t)),activeClassName:w,label:null!=f?f:Z.id,to:Z.path}))}},3886:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var a=n(7462),r=n(3366),i=n(7294),s=n(4517),o=n(9553),l=n(907),c=n(941),u=n(4973),m=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],d=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function f(e){var t,n,f=e.mobile,h=e.docsPluginId,v=e.dropdownActiveClassDisabled,g=e.dropdownItemsBefore,b=e.dropdownItemsAfter,p=(0,r.Z)(e,m),_=(0,l.Iw)(h),E=(0,l.gB)(h),Z=(0,l.yW)(h),w=(0,c.J)(h),N=w.preferredVersion,y=w.savePreferredVersionName;var $,k=($=E.map((function(e){var t=(null==_?void 0:_.alternateDocVersions[e.name])||d(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==_?void 0:_.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(g,$,b)),D=null!=(t=null!=(n=_.activeVersion)?n:N)?t:Z,M=f&&k?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):D.label,S=f&&k?void 0:d(D).path;return k.length<=1?i.createElement(s.Z,(0,a.Z)({},p,{mobile:f,label:M,to:S,isActive:v?function(){return!1}:void 0})):i.createElement(o.Z,(0,a.Z)({},p,{mobile:f,label:M,to:S,items:k,isActive:v?function(){return!1}:void 0}))}},5412:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),i=n(7294),s=n(4517),o=n(907),l=n(941),c=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,r.Z)(e,c),f=(0,o.zu)(m),h=(0,l.J)(m).preferredVersion,v=(0,o.yW)(m),g=null!=(t=null!=f?f:h)?t:v,b=null!=n?n:g.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(g).path;return i.createElement(s.Z,(0,a.Z)({},d,{label:b,to:p}))}},9553:function(e,t,n){"use strict";var a=n(7462),r=n(3366),i=n(7294),s=n(6010),o=n(941),l=n(4517),c=n(6047),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function h(e){var t,n=e.items,o=e.position,m=e.className,d=(0,r.Z)(e,u),f=(0,i.useRef)(null),h=(0,i.useRef)(null),v=(0,i.useState)(!1),g=v[0],b=v[1];return(0,i.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),i.createElement("div",{ref:f,className:(0,s.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":g})},i.createElement(l.O,(0,a.Z)({className:(0,s.Z)("navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!g))}}),null!=(t=d.children)?t:d.label),i.createElement("ul",{ref:h,className:"dropdown__menu"},n.map((function(e,t){return i.createElement(c.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function v(e){var t,n=e.items,u=e.className,d=(e.position,(0,r.Z)(e,m)),h=(0,o.be)(),v=f(n,h),g=(0,o.uR)({initialState:function(){return!v}}),b=g.collapsed,p=g.toggleCollapsed,_=g.setCollapsed;return(0,i.useEffect)((function(){v&&_(!v)}),[h,v]),i.createElement("li",{className:(0,s.Z)("menu__list-item",{"menu__list-item--collapsed":b})},i.createElement(l.O,(0,a.Z)({role:"button",className:(0,s.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),i.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return i.createElement(c.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,d),s=n?v:h;return i.createElement(s,a)}},6047:function(e,t,n){"use strict";n.d(t,{Z:function(){return _},E:function(){return p}});var a=n(3366),r=n(7294),i=n(4517),s=n(9553),o=n(7462),l=n(3264),c=n(2263),u=n(941),m="iconLanguage_17ys",d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,i=e.dropdownItemsAfter,f=(0,a.Z)(e,d),h=(0,c.Z)().i18n,v=h.currentLocale,g=h.locales,b=h.localeConfigs,p=(0,u.l5)();function _(e){return b[e].label}var E=g.map((function(e){var t="pathname://"+p.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:_(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,E,i),w=t?"Languages":_(v);return r.createElement(s.Z,(0,o.Z)({},f,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(l.Z,{className:m}),r.createElement("span",null,w)),items:Z}))}var h=n(1875);function v(e){return e.mobile?null:r.createElement(h.Z,null)}var g=["type"],b={default:function(){return i.Z},localeDropdown:function(){return f},search:function(){return v},dropdown:function(){return s.Z},docsVersion:function(){return n(5412).Z},docsVersionDropdown:function(){return n(3886).Z},doc:function(){return n(9061).Z}};var p=function(e){return e?"menu__link--active":"navbar__link--active"};function _(e){var t=e.type,n=(0,a.Z)(e,g),i=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(i,n)}},3915:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(7294),r=n(6010),i=n(5035),s="tableOfContents_rbnR",o="table-of-contents__link",l={linkClassName:o,linkActiveClassName:"table-of-contents__link--active"};function c(e){var t=e.toc,n=e.isChild;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(c,{isChild:!0,toc:e.children}))}))):null}var u=function(e){var t=e.toc;return(0,i.Z)(l),a.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar")},a.createElement(c,{toc:t}))}},7484:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",r="second",i="minute",s="hour",o="day",l="week",c="month",u="quarter",m="year",d="date",f="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},p={s:b,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+b(a,2,"0")+":"+b(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(a,c),i=n-r<0,s=t.clone().add(a+(i?-1:1),c);return+(-(a+(n-r)/(i?r-s:s-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:m,w:l,d:o,D:d,h:s,m:i,s:r,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",E={};E[_]=g;var Z=function(e){return e instanceof $},w=function(e,t,n){var a;if(!e)return _;if("string"==typeof e)E[e]&&(a=e),t&&(E[e]=t,a=e);else{var r=e.name;E[r]=e,a=r}return!n&&a&&(_=a),a||!n&&_},N=function(e,t){if(Z(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new $(n)},y=p;y.l=w,y.i=Z,y.w=function(e,t){return N(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var $=function(){function g(e){this.$L=w(e.locale,null,!0),this.parse(e)}var b=g.prototype;return b.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(h);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},b.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},b.$utils=function(){return y},b.isValid=function(){return!(this.$d.toString()===f)},b.isSame=function(e,t){var n=N(e);return this.startOf(t)<=n&&n<=this.endOf(t)},b.isAfter=function(e,t){return N(e)<this.startOf(t)},b.isBefore=function(e,t){return this.endOf(t)<N(e)},b.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(e,t){var n=this,a=!!y.u(t)||t,u=y.p(e),f=function(e,t){var r=y.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?r:r.endOf(o)},h=function(e,t){return y.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},v=this.$W,g=this.$M,b=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case m:return a?f(1,0):f(31,11);case c:return a?f(1,g):f(0,g+1);case l:var _=this.$locale().weekStart||0,E=(v<_?v+7:v)-_;return f(a?b-E:b+(6-E),g);case o:case d:return h(p+"Hours",0);case s:return h(p+"Minutes",1);case i:return h(p+"Seconds",2);case r:return h(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(e){return this.startOf(e,!1)},b.$set=function(e,t){var n,l=y.p(e),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[d]=u+"Date",n[c]=u+"Month",n[m]=u+"FullYear",n[s]=u+"Hours",n[i]=u+"Minutes",n[r]=u+"Seconds",n[a]=u+"Milliseconds",n)[l],h=l===o?this.$D+(t-this.$W):t;if(l===c||l===m){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},b.set=function(e,t){return this.clone().$set(e,t)},b.get=function(e){return this[y.p(e)]()},b.add=function(a,u){var d,f=this;a=Number(a);var h=y.p(u),v=function(e){var t=N(f);return y.w(t.date(t.date()+Math.round(e*a)),f)};if(h===c)return this.set(c,this.$M+a);if(h===m)return this.set(m,this.$y+a);if(h===o)return v(1);if(h===l)return v(7);var g=(d={},d[i]=t,d[s]=n,d[r]=e,d)[h]||1,b=this.$d.getTime()+a*g;return y.w(b,this)},b.subtract=function(e,t){return this.add(-1*e,t)},b.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var a=e||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$H,s=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=function(e,n,r,i){return e&&(e[n]||e(t,a))||r[n].substr(0,i)},m=function(e){return y.s(i%12||12,e,"0")},d=n.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:u(n.monthsShort,o,c,3),MMMM:u(c,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,l,2),ddd:u(n.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:y.s(i,2,"0"),h:m(1),hh:m(2),a:d(i,s,!0),A:d(i,s,!1),m:String(s),mm:y.s(s,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return a.replace(v,(function(e,t){return t||h[e]||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(a,d,f){var h,v=y.p(d),g=N(a),b=(g.utcOffset()-this.utcOffset())*t,p=this-g,_=y.m(this,g);return _=(h={},h[m]=_/12,h[c]=_,h[u]=_/3,h[l]=(p-b)/6048e5,h[o]=(p-b)/864e5,h[s]=p/n,h[i]=p/t,h[r]=p/e,h)[v]||p,f?_:y.a(_)},b.daysInMonth=function(){return this.endOf(c).$D},b.$locale=function(){return E[this.$L]},b.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=w(e,t,!0);return a&&(n.$L=a),n},b.clone=function(){return y.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},g}(),k=$.prototype;return N.prototype=k,[["$ms",a],["$s",r],["$m",i],["$H",s],["$W",o],["$M",c],["$y",m],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),N.extend=function(e,t){return e.$i||(e(t,$,N),e.$i=!0),N},N.locale=w,N.isDayjs=Z,N.unix=function(e){return N(1e3*e)},N.en=E[_],N.Ls=E,N.p={},N}()}}]);