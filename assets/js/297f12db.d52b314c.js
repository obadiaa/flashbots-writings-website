"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[4641],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3502:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={slug:"quantifying-mev",title:"Quantifying MEV\u2014Introducing MEV-Explore v0",authors:["obadiaa"],tags:["flashbots"],image:"/img/introducing-explore-1",hide_table_of_contents:!1},c=void 0,l={permalink:"/writings/quantifying-mev",source:"@site/writings/2021-02-22-quantifying-mev-explore.mdx",title:"Quantifying MEV\u2014Introducing MEV-Explore v0",description:"We took the first deep look at MEV and released our findings through MEV-Explore, a public dashboard and live MEV transactions explorer.",date:"2021-02-22T00:00:00.000Z",formattedDate:"February 22, 2021",tags:[{label:"flashbots",permalink:"/writings/tags/flashbots"}],readingTime:13.46,truncated:!0,authors:[{name:"Alex Obadia",title:"Research @Flashbots",url:"https://twitter.com/ObadiaAlex",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"obadiaa"}],prevItem:{title:"Flashbots Transparency Report \u2014 February 2021",permalink:"/writings/transparency-february"},nextItem:{title:"Flashbots Transparency Report \u2014 January 2021",permalink:"/writings/transparency-january"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We took the first deep look at MEV and released our findings through ",(0,o.kt)("a",{parentName:"p",href:"https://explore.flashbots.net/"},"MEV-Explore"),", a public dashboard and live MEV transactions explorer.\nAfter scraping the Ethereum blockchain starting from the first block of 2020, we\u2019ve classified more than 1.3M MEV transactions and found a total of at least $314M worth of Extracted MEV since Jan 1st 2020, as well as $4.5M wasted gas fees on failed MEV transactions, equivalent to 4,500 Ethereum blocks of wasted blockspace."))}d.isMDXComponent=!0}}]);