"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,d=c["".concat(l,".").concat(m)]||c[m]||f[m]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},935:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={slug:"geth-inside-sgx",title:"Running Geth within SGX: Our Experience, Learnings and Code",authors:["metachris","frieder"],tags:["privacy","sgx"],image:"/img/posts/sgx-og.jpg",hide_table_of_contents:!1,description:"We are happy to publish our efforts and a number of key learnings about running Geth inside SGX, for others to reuse, experiment with, and build upon."},o=void 0,s={permalink:"/geth-inside-sgx",source:"@site/content/2022-12-20-geth-in-sgx.mdx",title:"Running Geth within SGX: Our Experience, Learnings and Code",description:"We are happy to publish our efforts and a number of key learnings about running Geth inside SGX, for others to reuse, experiment with, and build upon.",date:"2022-12-20T00:00:00.000Z",formattedDate:"December 20, 2022",tags:[{label:"privacy",permalink:"/tags/privacy"},{label:"sgx",permalink:"/tags/sgx"}],readingTime:4.915,truncated:!0,authors:[{name:"Chris Hager",title:"Tech Lead @Flashbots",url:"https://twitter.com/metachris/",imageURL:"https://pbs.twimg.com/profile_images/1371171321426624514/x3Pr9XJd_400x400.jpg",key:"metachris"},{name:"Frieder Paape",key:"frieder"}],nextItem:{title:"The Future of MEV is SUAVE",permalink:"/the-future-of-mev-is-suave"}},l={authorsImageUrls:[void 0,void 0]},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"At Flashbots, we are exploring trusted execution environments (TEEs) such as SGX, as well as other privacy technologies such as Multi-Party Computation and Homomorphic Encryption, as important building blocks for trustless collaboration along the transaction supply chain. This is particularly relevant for applications such as decentralized block building and sharing private orderflow."),(0,i.kt)("p",null,"Today we are happy to publish our efforts and a number of key learnings about running Geth inside SGX, for others to reuse, experiment with, and build upon."))}c.isMDXComponent=!0}}]);