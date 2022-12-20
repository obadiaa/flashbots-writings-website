"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[3562],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,m=c["".concat(l,".").concat(d)]||c[d]||u[d]||r;return a?i.createElement(m,o(o({ref:t},h),{},{components:a})):i.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6720:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={slug:"mev-supply-chain",title:"The MEV Supply Chain - a peek into the future of this industry",authors:["thegostep"],tags:["flashbots"],hide_table_of_contents:!1},o="The MEV Supply Chain - a peek into the future of this industry",s={permalink:"/mev-supply-chain",source:"@site/content/2022-05-02-mev-supply-chain.mdx",title:"The MEV Supply Chain - a peek into the future of this industry",description:"At mev.day in Amsterdam, I opened the day by introducing a new framework for thinking about the fast moving MEV industry and how it will evolve in the future. I call this framework the MEV Supply Chain. You can find a recording of this presentation here.",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"flashbots",permalink:"/tags/flashbots"}],readingTime:4.77,truncated:!0,authors:[{name:"Stephane Gosselin",title:"Architect @Flashbots",url:"https://twitter.com/thegostep",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"thegostep"}],prevItem:{title:"Why run mev-boost?",permalink:"/why-run-mevboost"},nextItem:{title:"Speeding up the EVM (part 1)",permalink:"/speeding-up-evm-part-1"}},l={authorsImageUrls:[void 0]},p=[{value:"What is the MEV Supply Chain?",id:"what-is-the-mev-supply-chain",children:[]},{value:"MEV Supply Chain - Utopia or Dystopia?",id:"mev-supply-chain---utopia-or-dystopia",children:[]}],h={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"At ",(0,n.kt)("a",{parentName:"p",href:"https://flashbots.notion.site/flashbots/mev-day-836f88806995412dabc1c7bb7ce4e830"},"mev.day")," in Amsterdam, I opened the day by introducing a new framework for thinking about the fast moving MEV industry and how it will evolve in the future. I call this framework the MEV Supply Chain. You can find a recording of this presentation ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=AuMkr5AnUvI"},"here"),"."),(0,n.kt)("h2",{id:"what-is-the-mev-supply-chain"},"What is the MEV Supply Chain?"),(0,n.kt)("p",null,"The MEV Supply Chain describes the chain of activity which helps users transform intentions into finalized state transitions in the presence of MEV. While the terminology is new, this supply chain actually exists in all blockchains regardless of the MEV mitigation technique or ordering rules they use. In fact, I would go as far as to say it exists in any market for user data, including traditional financial markets. But, this is a topic for a separate discussion. For today, let\u2019s focus on blockchains."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mev-supply-chain",src:a(1646).Z})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User")," - The user is anyone with an intention to enact a state transition on a blockchain. More abstractly, you can think of this as anyone with a specific preference on the future state of the world. An example of a specific user intent is swapping USDC for ETH at the best possible price. Since users don\u2019t yet have their brains plugged directly into the metaverse, they need help to execute their intentions."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wallet")," - The wallet is the user interface which helps the user encode their intent into a transaction that the blockchain can understand. Here, I group together everything at the application layer including dapp UI, wallet, and smart contract protocol as they work together to express user intent. Note: developers at this layer make decisions on behalf of their users on how to deal with MEV. One key decision they make is whether to route user transactions to a public transaction pool where they can be picked off by searchers indiscriminately, or to send them to a private routing system like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/overview/"},"Flashbots Protect")," which restricts what searchers can do with the transactions. You can find the mev.day panel discussion about dealing with MEV at the application layer ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3FHFOJqrJ4A"},"here"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Searcher")," - Searchers have a simple job: extract all the MEV possible for themselves. A searcher takes user transactions from all sources and converts them into complex transaction types like ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/searchers/advanced/understanding-bundles"},"bundles"),". This is an important role because the liquidity, arbitrage, and liquidations performed by searchers is what makes markets possible. However, in a dysfunctional supply chain, searchers can extract disproportionate value relative to the service they provide."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Builder")," - Builders have many names today, but their job is to aggregate transactions from various sources and construct a block. In Ethereum today, mining pools are performing the builder role. In a L2 execution system, the sequencer is the builder as they construct rollup payloads to submit to the L1."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Validator")," - Validators perform consensus duties which include validating and finalizing blocks. Historically, builders and validators have been the same logical entity. The introduction of Block Proposer / Builder Separation (PBS for short) to the Ethereum roadmap and the development of rollup centric data availability chains aim to separate these roles. As Vitalik describes in his ",(0,n.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/12/06/endgame.html"},"Endgame post"),", such a separation aims to maximize validator decentralization."),(0,n.kt)("h2",{id:"mev-supply-chain---utopia-or-dystopia"},"MEV Supply Chain - Utopia or Dystopia?"),(0,n.kt)("p",null,"In my last post, I introduced the concept of the MEV Utopia and Dystopia and the characteristics that each future presents. Let\u2019s see how we can apply this dichotomy to the MEV supply chain."),(0,n.kt)("p",null,"MEV can generally be thought of as originating from user interactions, whether directly or indirectly. A user submitting a large trade against a CEX can generate a direct arbitrage opportunity against multiple DEX and CEX on various domains. A user taking out a loan on a lending protocol creates an indirect liquidation opportunity at a future point in time."),(0,n.kt)("p",null,"I find the most useful heuristic for identifying if an MEV supply chain is tending towards a Utopia or a Dystopia is to look at value accrual."),(0,n.kt)("p",null,"In the MEV Dystopia, the MEV generated by users is captured in the center of the supply chain. We can call this future Centralized Block Building."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mev-dystopia",src:a(7896).Z})),(0,n.kt)("p",null,"There are many paths to centralized block building. The most likely is for some sophisticated searchers with a monopoly on their strategy space to integrate up and down the supply chain in an attempt to obtain a competitive advantage in other strategies and increase barriers to entry. This kind of vertical integration is textbook anti-competitive behavior and we are already seeing it emerge in various domains leading to what we can describe as the \u201cMEV MegaFund Blackbox\u201d. Hasu gave a ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=sYFuFLe9kp0"},"great talk")," at mev.day which explored this failure mode in depth."),(0,n.kt)("p",null,"In the MEV Utopia, all the MEV generated by users is returned to users, either in the form of direct cashbacks, gas fee subsidies, or network security subsidies. We can call this future Decentralized Block Building."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"mev-utopia",src:a(9012).Z})),(0,n.kt)("p",null,"Decentralized block building means each role is fulfilled by independent entities who compete in an open marketplace with low barriers to entry. The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-auction/overview"},"Flashbots Auction")," successfully introduced such a market between searchers and builders. In POW Ethereum there is little incentive for searchers to vertically integrate with miners while network security subsidies are maximized. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.flashbots.net/flashbots-protect/overview/"},"Flashbots Protect")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost"},"MEV-Boost")," extend this market to other layers of the supply chain."),(0,n.kt)("p",null,"It\u2019s important to keep in mind utopias are often unreachable and reality lies somewhere between utopia and dystopia. My goal in framing the MEV supply chain using this dichotomy is to provide a simple heuristic through which you can evaluate the quickly evolving ecosystem. As users and developers, it\u2019s your responsibility to use and build products which help the industry trend towards a decentralized utopian future rather than a centralized dystopian one."),(0,n.kt)("p",null,"Utopia or Dystopia, which will you pick?"))}c.isMDXComponent=!0},7896:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mev-dystopia-ac811bc239980f2db73e2a3370f05eaa.png"},1646:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mev-supply-chain-3f7dc05bde4dae186c2aa7c6a0f368a2.png"},9012:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/mev-utopia-757029717483e9ab11a7d714d73cc3ee.png"}}]);