"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[7469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,h=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"design-mev-marketplaces",title:"On the Design of MEV Marketplaces",authors:["robert"],tags:["flashbots",1559],image:"/img/design-mev-marketplaces-1.jpeg",hide_table_of_contents:!1},i=void 0,l={permalink:"/design-mev-marketplaces",source:"@site/content/2021-08-04-design-mev-marketplaces.mdx",title:"On the Design of MEV Marketplaces",description:"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value).",date:"2021-08-04T00:00:00.000Z",formattedDate:"August 4, 2021",tags:[{label:"flashbots",permalink:"/tags/flashbots"},{label:"1559",permalink:"/tags/1559"}],readingTime:5.48,truncated:!0,authors:[{name:"Robert Miller",title:"Product @Flashbots",url:"https://twitter.com/bertcmiller",imageURL:"https://pbs.twimg.com/profile_images/1336354612064911360/qGVMxddJ_400x400.jpg",key:"robert"}],prevItem:{title:"Flashbots Transparency Report \u2014 July & August 2021",permalink:"/transparency-july-august"},nextItem:{title:"MEV and EIP-1559",permalink:"/mev-1559"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value)."))}u.isMDXComponent=!0}}]);