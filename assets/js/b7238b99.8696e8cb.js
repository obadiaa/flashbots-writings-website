"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6207],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8647:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"design-mev-marketplaces",title:"On the Design of MEV Marketplaces",authors:["robert"],tags:["flashbots",1559],image:"/img/design-mev-marketplaces-1.jpeg",hide_table_of_contents:!1},c=void 0,l={permalink:"/writings/design-mev-marketplaces",source:"@site/writings/2021-08-04-design-mev-marketplaces.mdx",title:"On the Design of MEV Marketplaces",description:"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value).",date:"2021-08-04T00:00:00.000Z",formattedDate:"August 4, 2021",tags:[{label:"flashbots",permalink:"/writings/tags/flashbots"},{label:"1559",permalink:"/writings/tags/1559"}],readingTime:5.48,truncated:!0,authors:[{name:"Robert Miller",title:"Product @Flashbots",url:"https://twitter.com/bertcmiller",imageURL:"https://pbs.twimg.com/profile_images/1336354612064911360/qGVMxddJ_400x400.jpg",key:"robert"}],prevItem:{title:"Flashbots Transparency Report \u2014 July & August 2021",permalink:"/writings/transparency-july-august"},nextItem:{title:"Flashbots on Reorgs",permalink:"/writings/flashbots-reorgs"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value)."))}m.isMDXComponent=!0}}]);