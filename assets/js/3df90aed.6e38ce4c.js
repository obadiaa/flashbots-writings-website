"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[5025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(m,o(o({ref:t},h),{},{components:n})):i.createElement(m,o({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={slug:"ken-griffin-mev",title:"Ken Griffin and the MEV dystopia",authors:["thegostep"],tags:["flashbots"],img:"/img/kenny-boi",hide_table_of_contents:!1},o="Ken Griffin and the MEV dystopia",s={permalink:"/ken-griffin-mev",source:"@site/content/2021-11-22-ken-griffin-mev.mdx",title:"Ken Griffin and the MEV dystopia",description:"Like many others, when I learned that Ken Griffith beat out 17k crypto frens at purchasing the copy of the constitution, I couldn't help but laugh.",date:"2021-11-22T00:00:00.000Z",formattedDate:"November 22, 2021",tags:[{label:"flashbots",permalink:"/tags/flashbots"}],readingTime:1.64,truncated:!0,authors:[{name:"Stephane Gosselin",title:"Architect @Flashbots",url:"https://twitter.com/thegostep",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"thegostep"}],prevItem:{title:"Announcing the Flashbots Eth2 Working Group",permalink:"/announcing-eth2-working-group"},nextItem:{title:"MEV-Boost -- Merge ready Flashbots Architecture",permalink:"/mev-boost"}},l={authorsImageUrls:[void 0]},c=[],h={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Like many others, when I learned that Ken Griffith beat out 17k crypto frens at purchasing the copy of the constitution, I couldn't help but laugh."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kenny-boi",src:n(6883).Z})),(0,r.kt)("p",null,"The outcome of the ConstitutionDAO was somewhat predictable. With the max bid of the DAO being public information, any interested buyer was aware of the floor price and could make sure to have sufficient capital on hand to win the auction. Meanwhile, the DAO was unable to collect additional capital, even though it was clear it could have with more time."),(0,r.kt)("p",null,"Ken has made his fortune benefiting from exploiting asymetric information advantages in markets. His company, Citadel Securities, makes money by purchasing the exclusive right to see the state of retail orders before anyone else. Ironic to say the least."),(0,r.kt)("p",null,"Many crypto believers presume this behavior is impossible in defi. They take censorship resistance and equal opportunity for granted. What they fail to realize is that the defi ecosystem is shifting towards the tradfi model of finance at an accelerated pace."),(0,r.kt)("p",null,"I call this the MEV dystopia."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mev-utopia-dystopia",src:n(9649).Z})),(0,r.kt)("p",null,'It\'s easy to brush off MEV as inconsequential and ignore the impact it has on economic systems. "Arbitrage is not MEV" and "CEXs can\'t have MEV" are both narratives that miss the forest for the trees.'),(0,r.kt)("p",null,"The reality is, without active efforts to build technical solutions which enable the democratization of MEV in all its forms, blockchains will turn into systems in which a small set of actors have an entrenched advantage which cannot be displaced due to barriers to entry."),(0,r.kt)("p",null,'This transition might be portrayed as "the market finding efficiency" but in reality it involve hiding skeletons in the closet. Those skeletons come back out to haunt retail investors in the form of flash crashes, cascading failures, and censorship.'),(0,r.kt)("p",null,"Protocol developers today are building systems which have the embedded assumption that actors like Ken Griffin have the best economic interest of retail investors at heart."),(0,r.kt)("p",null,"Maybe it\u2019s time to think again."))}p.isMDXComponent=!0},9649:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mev-utopia-dystopia-ebf8eefbbc873f740ffe24d56c4b482f.png"},6883:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/wsj-constitution-9f6393a3ca9d70e93291825607d56598.png"}}]);