"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[4622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(m,s(s({ref:t},c),{},{components:r})):a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var h=2;h<o;h++)s[h]=r[h];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=r(7462),n=(r(7294),r(3905));const o={slug:"transparency-july-august",title:"Flashbots Transparency Report \u2014 July & August 2021",authors:["robert"],tags:["transparency report"],image:"/img/transparency-january-1.jpeg",hide_table_of_contents:!1},s=void 0,i={permalink:"/transparency-july-august",source:"@site/content/2021-09-21-transparency-july-august.mdx",title:"Flashbots Transparency Report \u2014 July & August 2021",description:"Flashbots\u2019 last two months have been packed.",date:"2021-09-21T00:00:00.000Z",formattedDate:"September 21, 2021",tags:[{label:"transparency report",permalink:"/tags/transparency-report"}],readingTime:3.6,truncated:!0,authors:[{name:"Robert Miller",title:"Product @Flashbots",url:"https://twitter.com/bertcmiller",imageURL:"https://pbs.twimg.com/profile_images/1336354612064911360/qGVMxddJ_400x400.jpg",key:"robert"}],prevItem:{title:"Announcing Flashbots Protect",permalink:"/announcing-protect"},nextItem:{title:"On the Design of MEV Marketplaces",permalink:"/design-mev-marketplaces"}},l={authorsImageUrls:[void 0]},h=[{value:"Overview",id:"overview",children:[]},{value:"Flashbots Auction",id:"flashbots-auction",children:[{value:"Flashbots Auction v0.3",id:"flashbots-auction-v03",children:[]},{value:"Flashbots Auction v0.4",id:"flashbots-auction-v04",children:[]}]},{value:"Flashbots Data",id:"flashbots-data",children:[{value:"MEV-Inspect-py",id:"mev-inspect-py",children:[]},{value:"Reorg monitoring",id:"reorg-monitoring",children:[]},{value:"Dashboard maintenance",id:"dashboard-maintenance",children:[]}]},{value:"Flashbots Research",id:"flashbots-research",children:[]},{value:"Community",id:"community",children:[{value:"Get involved",id:"get-involved",children:[]}]}],c={toc:h};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Flashbots\u2019 last two months have been packed."),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Flashbots\u2019 last two months have been packed. In July we hosted MEV.wtf, a summit dedicated to MEV with top thinkers discussing a wide range of topics. We also released an update to MEV-Geth in advance of 1559, published an article on MEV and 1559, and clarified our stance on reorgs."),(0,n.kt)("p",null,"In August we shared our thoughts for how MEV marketplaces should be designed in the long term, hosted a summit dedicated to MEV and reorgs, pushed two updates to MEV-Geth, and saw the launch of an xDAI MEV relay. Flashbots also welcomed a new set of stewards and several full time employees!"),(0,n.kt)("h2",{id:"flashbots-auction"},"Flashbots Auction"),(0,n.kt)("h3",{id:"flashbots-auction-v03"},"Flashbots Auction v0.3"),(0,n.kt)("p",null,"On July 15th we published a release to MEV-Geth which added support for EIP-1559. After that in July and August we published three follow up releases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fix the consensus failure bug that occurred on Ropsten")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A maintenance release with no important changes for miners")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Patching a vulnerability in the EVM that was merged upstream"))),(0,n.kt)("h3",{id:"flashbots-auction-v04"},"Flashbots Auction v0.4"),(0,n.kt)("p",null,"With 1559 behind us Flashbots is focused on our next release: adding support for mega bundles. With the new RPC endpoint added ",(0,n.kt)("inlineCode",{parentName:"p"},"eth_sendMegaBundle")," in v0.4, MEV-geth can now insert larger bundles directly into the multi-worker. These larger bundles will be premerged upstream before miners receive them and will lead to more profitable blocks for miners due to better bundle scoring/merging. They will also increase inclusion rate for the searchers."),(0,n.kt)("p",null,"Read more about the discussions ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm/discussions/52"},"here")," and the specifications ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/miners/mev-geth-spec/v04/"},"here"),"."),(0,n.kt)("h2",{id:"flashbots-data"},"Flashbots Data"),(0,n.kt)("h3",{id:"mev-inspect-py"},"MEV-Inspect-py"),(0,n.kt)("p",null,"We started work on a python version of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-inspect-py"},"MEV-Inspect-py")," in July, making the decision to deprecate the rust version in order to better maintain MEV-Inspect and hopefully garner more community involvement."),(0,n.kt)("p",null,"There has been a ton of progress so far and we\u2019re excited by how powerful MEV-Inspect-py has become. In the coming weeks we hope to ship more features that will bring it to parity with the rust library. If you\u2019re interested in contributing please reach out!"),(0,n.kt)("p",null,"Shout out to our great July and August contributors: Luke, Gui, and Patrick!"),(0,n.kt)("h3",{id:"reorg-monitoring"},"Reorg monitoring"),(0,n.kt)("p",null,"Community contributor turned Flashbots member Metachris built a tool for monitoring reorgs which we\u2019ve been running and will open source. This monitoring tool watches for reorgs as they happen as well as checking for uncles that we may have missed which are included in protocol."),(0,n.kt)("h3",{id:"dashboard-maintenance"},"Dashboard maintenance"),(0,n.kt)("p",null,"We made a few improvements to the backend of our dashboard to more accurately reflect certain statistics. For example, post-1559 we made sure that base fee was accounted for where it should be. We also improved our detection of bundles from relays other than Flashbots and accounted for that."),(0,n.kt)("h2",{id:"flashbots-research"},"Flashbots Research"),(0,n.kt)("p",null,"Flashbots researcher Alejo Salles published a note ",(0,n.kt)("a",{parentName:"p",href:"https://hackmd.io/@flashbots/MEV-1559"},"on MEV and 1559"),", in collaboration with Kristof Gazso from Nethermind. The note highlights three areas where EIP-1559 might have interesting consequences for MEV: increased MEV extraction incentives for miners, the coexistence of different auctions in the Ethereum protocol and its implications for EIP design, and the role of Flashbots as a miner coordinating agent and its ethical implications."),(0,n.kt)("p",null,"Aside from 1559, our focus for the last 2 months has been on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research/blob/main/FRPs/FRP-16.md"},"MEV within and across Layer 2s"),", on transitioning some of our work on eth2 from research to productization while continuing research ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research/blob/main/FRPs/FRP-15.md"},"on eth2 security and inequality from MEV"),", and on an MPC-based approach to Flashbots\u2019 architecture. We\u2019re excited to share more about these efforts soon from Flashbots Research contributors Blagoj, Forrest, Lakshman, Marcello, Vaibhav, Caspar, Barnabe, Alon, Mikerah & Tomas (Hashcloak)!"),(0,n.kt)("p",null,"In the next month, we\u2019ll be starting our next wave of research grants, and will be onboarding new research contributors, please reach out if you\u2019re interested!"),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"In previous transparency reports we highlighted community activity. To better highlight this activity we\u2019re going to post about it separately in a reoccurring blog post specifically dedicated to the Flashbots community. Stay tuned!"),(0,n.kt)("h3",{id:"get-involved"},"Get involved"),(0,n.kt)("p",null,"At Flashbots, we research and build systems around MEV, and we would love to collaborate with you. We are a distributed organization with the principles of a ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T0fAznO1wA8"},"pirate hacker collective"),", and have ",(0,n.kt)("a",{parentName:"p",href:"https://www.notion.so/flashbots/Flashbots-Job-Board-94d53cb01ef04a9484711dacf18739e3"},"several open positions"),". We also issue grants to external researchers doing work aligned with ours, please find out more in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-research"},"our Research repository"),", or join our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/7hvTycdNcK"},"Discord"),"!"))}u.isMDXComponent=!0}}]);