"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[9043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(m,o(o({ref:t},h),{},{components:a})):n.createElement(m,o({ref:t},h))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={slug:"the-future-of-mev-is-suave",title:"The Future of MEV is SUAVE",authors:["flashbots"],tags:["suave","sgx","orderflow auction","roadmap"],image:"/img/posts/suave/logo-landscape.jpg",hide_table_of_contents:!1,description:"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge - to decentralize block building itself."},o=void 0,s={permalink:"/the-future-of-mev-is-suave",source:"@site/content/2022-11-23-suave.mdx",title:"The Future of MEV is SUAVE",description:"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge - to decentralize block building itself.",date:"2022-11-23T00:00:00.000Z",formattedDate:"November 23, 2022",tags:[{label:"suave",permalink:"/tags/suave"},{label:"sgx",permalink:"/tags/sgx"},{label:"orderflow auction",permalink:"/tags/orderflow-auction"},{label:"roadmap",permalink:"/tags/roadmap"}],readingTime:19.37,truncated:!0,authors:[{name:"Flashbots",title:"The Flashbots Collective",url:"https://flashbots.net",imageURL:"https://s5-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/389/100/original/Robot_Emoji_OG.png?1657818356",key:"flashbots"}],prevItem:{title:"Running Geth within SGX: Our Experience, Learnings and Code",permalink:"/geth-inside-sgx"},nextItem:{title:"The Cost of Resilience",permalink:"/the-cost-of-resilience"}},l={authorsImageUrls:[void 0]},c=[{value:"I. Our Journey So Far",id:"i-our-journey-so-far",children:[]},{value:"II. The Challenges Ahead",id:"ii-the-challenges-ahead",children:[]},{value:"III. The Future of MEV",id:"iii-the-future-of-mev",children:[]},{value:"IV. SUAVE in the blockchain stack",id:"iv-suave-in-the-blockchain-stack",children:[]},{value:"V. Architecture of SUAVE",id:"v-architecture-of-suave",children:[{value:"Preference Environment",id:"preference-environment",children:[]},{value:"Execution Market",id:"execution-market",children:[]},{value:"Decentralized Block Building",id:"decentralized-block-building",children:[]}]},{value:"VI.  Roadmap and First Steps",id:"vi--roadmap-and-first-steps",children:[{value:"\ud83d\udcab SUAVE Centauri",id:"-suave-centauri",children:[]},{value:"\ud83c\udf0c SUAVE Andromeda",id:"-suave-andromeda",children:[]},{value:"\u2600\ufe0f SUAVE Helios",id:"\ufe0f-suave-helios",children:[]}]},{value:"VII. The Millennium Prize Problems of Crypto",id:"vii-the-millennium-prize-problems-of-crypto",children:[]}],h={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"TLDR:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge: ",(0,r.kt)("em",{parentName:"li"},"to decentralize block building itself"),". Exclusive orderflow and cross-domain MEV present emerging centralization threats to all cryptocurrencies, so ",(0,r.kt)("strong",{parentName:"li"},"we must make sure to keep MEV decentralized, or the decentralization of crypto will be lost.")),(0,r.kt)("li",{parentName:"ul"},"To hold ourselves to our decentralization commitments, we are building ",(0,r.kt)("strong",{parentName:"li"},"SUAVE - the Single Unifying Auction for Value Expression"),"."),(0,r.kt)("li",{parentName:"ul"},"SUAVE ",(0,r.kt)("strong",{parentName:"li"},"unbundles the mempool and block builder role")," from existing blockchains and offers a highly specialized and decentralized ",(0,r.kt)("strong",{parentName:"li"},"plug-and-play alternative"),". Sharing the same sequencing layer allows crypto to stay decentralized, block builders to capture cross-domain MEV, validators to maximize their revenue, and users to transact with the best execution, while reducing the economic centralization pressure on each domain."),(0,r.kt)("li",{parentName:"ul"},"We are building SUAVE in the open and invite all interested parties \u2014 users, wallets, searchers, builders, researchers, and blockchain developers \u2014 to work with us.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Suave Logo",src:a(8775).Z})),(0,r.kt)("h2",{id:"i-our-journey-so-far"},"I. Our Journey So Far"),(0,r.kt)("p",null,"Two years ago, we published ",(0,r.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/frontrunning-mev-crisis"},"Flashbots: Frontrunning the MEV crisis")," as a call-to-action for the entire community as we embarked on our collective journey to mitigate the negative externalities of MEV on public blockchains, starting with Ethereum. What we proposed was radical\u2014and radically different from traditional finance standards: a permissionless, transparent, and fair ecosystem for MEV extraction that would protect and reinforce the ideals of Ethereum."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mev landscape",src:a(5087).Z})),(0,r.kt)("p",null,"When we began, the MEV market was much different than today. Of the MEV theoretically available on Ethereum, very little was realized. MEV was primarily extracted by independent network participants called ",(0,r.kt)("em",{parentName:"p"},"MEV searchers,")," who are (as the name implies) searching for profitable MEV opportunities with the help of complex algorithms, and automatically submitting them to the network for inclusion. These searchers competed in priority gas auctions (PGAs) by paying high transaction fees and optimizing network latency on Ethereum, causing network congestion while driving up gas prices for users."),(0,r.kt)("p",null,"These ",(0,r.kt)("em",{parentName:"p"},"negative externalities")," from MEV extraction increasingly hurt users, yet the market structure was suboptimal for miners and searchers as well. Because miners controlled ordering, they were in the best position to extract that MEV themselves. Meanwhile, the searchers were handicapped by the execution risks of their bids in the PGA games, the limitation of expressivity in Ethereum\u2019s native transaction types, and fears of miners frontrunning their own strategies."),(0,r.kt)("p",null,"As a result, miners and searchers would have been rational to ",(0,r.kt)("em",{parentName:"p"},"integrate with each other"),": miners could increase their share of the MEV pie by making bespoke deals with searchers and outsourcing the finding of MEV opportunities to them, and searchers could gain greater control over the transaction ordering by having relations with miners they trust. The question that kept us awake at night was not ",(0,r.kt)("em",{parentName:"p"},"whether")," this integration would occur but ",(0,r.kt)("em",{parentName:"p"},"how")," \u2014 and what it would mean for Ethereum."),(0,r.kt)("p",null,"In particular, we were concerned that MEV extraction would disappear into permissioned dark pools and exclusive off-chain deals between large trading firms and miners. Over time, such an integrated block producer could earn outsized MEV profit over other block producers and reinvest into better MEV search and more hashrate. Eventually, they would grow to dominate block production \u2014 compromising the security model of Ethereum and other smart contract platforms. Such a cycle would create massive centralization pressure, concentrating power to the least scrupulous actors while degrading network execution and user guarantees."),(0,r.kt)("p",null,"In response to this existential MEV crisis, a handful of concerned researchers and whitehats came together as a collective. We formed a research and development organization - Flashbots, a response to ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1904.05234"},"Flashboys 2.0"),", the research paper that defined MEV. We believed that the next natural step would be to tackle MEV head-on by building a more decentralized financial system to correct the failures of traditional, centralized execution venues. In its name, Flashbots embodies our values \u2014 replacing the \u201cgood old boys\u201d of Wall St. and Flash Boys with interfaces for cutting-edge bots that keep user execution ",(0,r.kt)("strong",{parentName:"p"},"permissionless")," and ",(0,r.kt)("strong",{parentName:"p"},"decentralized"),"."),(0,r.kt)("p",null,"We had three goals in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Illuminate the Dark Forest.")," Our first priority was to reveal to a broader audience what was happening in this opaque MEV ecosystem, quantify its impact, and break down information asymmetry between participants."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Democratize Extraction"),". To prevent MEV from centralizing Ethereum\u2019s block production layer via exclusive integration and scale economies, we wanted miner-searcher integration to happen on an ",(0,r.kt)("em",{parentName:"li"},"open platform")," that maximizes competition between searchers and is freely available to all miners."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distribute Benefits.")," Return the MEV to those who create it \u2014 users of Ethereum.")),(0,r.kt)("p",null,"Two years later, we want to evaluate our progress against these goals."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have published ",(0,r.kt)("a",{parentName:"li",href:"https://transparency.flashbots.net/"},"data")," and ",(0,r.kt)("a",{parentName:"li",href:"https://writings.flashbots.net/research"},"research")," on MEV to bring more transparency and awareness to the space. We created a community around MEV via events like our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/flashbots/pm/blob/main/recordings.md"},"Roasts"),", ",(0,r.kt)("a",{parentName:"li",href:"http://mev.day/"},"MEV.day"),", and ",(0,r.kt)("a",{parentName:"li",href:"https://www.notion.so/MEV-sbc-Workshop-6dcb3501d7e647b98b703b6312c3e95b"},"MEV-SBC"),"."),(0,r.kt)("li",{parentName:"ul"},"We released ",(0,r.kt)("strong",{parentName:"li"},"MEV-geth and MEV-relay"),", a private transaction pool and sealed bid ",(0,r.kt)("a",{parentName:"li",href:"https://research.paradigm.xyz/ethereum-blockspace"},"blockspace")," auction that allowed a ",(0,r.kt)("em",{parentName:"li"},"marketplace for MEV opportunities")," to arise. ",(0,r.kt)("em",{parentName:"li"},"First"),", searchers would send ",(0,r.kt)("em",{parentName:"li"},"bundles")," to our relay. The bundle was a new transaction type with favorable properties for MEV extraction, most of all the ability to express a preference on the placement of your transaction in relation to another. ",(0,r.kt)("em",{parentName:"li"},"Next"),", the relay forwarded valid bundles to miners, who ran our custom Ethereum client, MEV-geth. This client would include the most profitable bundle at the top of the block, giving searchers better expressivity and miners a bigger profit share. ",(0,r.kt)("em",{parentName:"li"},"Later"),", ",(0,r.kt)("strong",{parentName:"li"},"Flashbots Protect")," extended the benefits of bundles (pre-trade privacy + no reverts) to regular users."),(0,r.kt)("li",{parentName:"ul"},"MEV-geth quickly became successful and reached over 90% adoption among Ethereum miners. Most importantly, it shifted the MEV market structure just like we hoped: bundles allowed searchers to extract more of the theoretical MEV through higher expressivity. The competition between searchers shifted the profit split ",(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/lvanseters/status/1481988717367767042?s=20&t=sibFboT8vSVSwMVkdfxqOw"},"dramatically towards miners"),".")),(0,r.kt)("p",null,"Exclusive integration and scale economies had been curtailed, for the time being. However, despite its success, the auction we built still had significant limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Permissioned miner participation:")," While searchers can submit bundles without permission, miners can see all bundles in clear text. As a result, we could allow only mining pools with credible operations to participate."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lack of client diversity:")," As a fork of geth, it only worked with a single Ethereum client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Centralized infrastructure:")," Our auction was still running on centralized infrastructure, posing a risk to Ethereum over the long term.")),(0,r.kt)("p",null,"As the Merge finally came around, we predicted that MEV would become an even bigger ",(0,r.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/mev-eth2/"},"centralizing force")," in Proof-of-Stake. With the extra responsibility on our shoulders, we designed our next iteration, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://boost.flashbots.net/"},"MEV-Boost"),",")," to respond to some of these issues."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The addition of a commit-reveal scheme relaxed the required trust in block producers, thereby allowing every staker to participate on equal footing \u2014 from single-validator enthusiasts to the largest staking pools."),(0,r.kt)("li",{parentName:"ul"},"To address the lack of client diversity, MEV-boost was designed as a sidecar for the beacon node - a separate piece of open-source software that works with any Ethereum client through the Builder API."),(0,r.kt)("li",{parentName:"ul"},"Opening up this Builder API had a pleasant side effect \u2014 instead of Flashbots being the sole channel to block producers, anyone could become a block builder now. A competitive builder market emerged, letting validators automatically choose the highest bid.")),(0,r.kt)("p",null,"Like MEV-Geth, MEV-Boost has quickly ",(0,r.kt)("a",{parentName:"p",href:"https://www.mevboost.org/"},(0,r.kt)("strong",{parentName:"a"},"gained almost 90% network adoption")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"block supply chain",src:a(6450).Z})),(0,r.kt)("p",null,"Top diagram: Block building today in the lens of transaction supply chain, excluding tx origins (mempool, private orderflow, etc.). Bottom diagram: zoomed in on the  inspired by diagrams from Barnabe Monnot and Hasu."),(0,r.kt)("h2",{id:"ii-the-challenges-ahead"},"II. The Challenges Ahead"),(0,r.kt)("p",null,"While MEV-Geth and MEV-Boost successfully isolated centralizing economies of scale to the block builder role and kept block building open to all validators and searchers thus far, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://simbro.medium.com/mev-driven-centralization-in-ethereum-ec829a214f18"},"builder centralization"))," becomes the Damocles\u2019 Sword that poses significant challenges ahead."),(0,r.kt)("p",null,"Builder centralization risks ",(0,r.kt)("strong",{parentName:"p"},"erosion of Ethereum\u2019s network neutrality and resilience, in particular censorship resistance of L1")," - ensuring all valid and fee-paying transactions reliably get included on chain."),(0,r.kt)("p",null,"Over the last 30 days, only five block builders have built ",(0,r.kt)("a",{parentName:"p",href:"https://www.relayscan.io/"},"80% of all Ethereum blocks.")," These five entities can impose many arbitrary rules on how blocks are constructed, including choosing to decline to process specific transactions. Transactions are the only way users can interact with any applications on-chain, so block building centralization risks a few actors being able to discriminate against users and/or applications."),(0,r.kt)("p",null,"The barriers to entry for becoming a builder must be as low as possible, but this is just a necessary, not a sufficient condition. Simply speaking, ",(0,r.kt)("strong",{parentName:"p"},"the existence of scale economies in the builder market")," suggests that a diversity of builders is not guaranteed and a small number of builders may emerge dominant."),(0,r.kt)("p",null,"Aside from eroding neutrality and resilience and creating a systemic chokepoint for Ethereum, such builder centralization would open the door to significant rent extraction from users, and risk centralizing the validator set."),(0,r.kt)("p",null,"The builder market is prone to centralization from several vectors:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Exclusive orderflow:")," If a particular builder can use ",(0,r.kt)("a",{parentName:"li",href:"https://writings.flashbots.net/order-flow-auctions-and-centralisation"},"inputs for their blocks other builders do not have"),", this can create ",(0,r.kt)("a",{parentName:"li",href:"https://writings.flashbots.net/order-flow-auctions-and-centralisation-II"},"a dangerous flywheel")," and allow them to dominate block production. The incentive for users to send their transactions to one builder over another, today, is two-fold: ",(0,r.kt)("em",{parentName:"li"},"first"),", the builder can offer users pre-confirmation privacy or other new features. This has been a big driver for users to migrate out of the public mempool and toward private RPC endpoints. ",(0,r.kt)("em",{parentName:"li"},"Second"),", the builder can ",(0,r.kt)("em",{parentName:"li"},"pay")," users for their orderflow, for example from the MEV that their transaction creates."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cross-domain MEV:")," Access to cross-domain MEV ",(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2112.01472"},"benefits builders who make blocks across multiple chains")," over builders that are only active on one chain, leading to entrenchment from cross-domain MEV ",(0,r.kt)("em",{parentName:"li"},"and")," validator set centralization.")),(0,r.kt)("h2",{id:"iii-the-future-of-mev"},"III. The Future of MEV"),(0,r.kt)("p",null,"We are now looking at two possible paths: either we find a way to shift MEV structure a ",(0,r.kt)("em",{parentName:"p"},"third time"),", and do so in a way that sustainably eliminates the centralizing forces in block building. In this case, the promise of crypto may be realized. Or we concede block building to a small number of centralized entities, and the decentralization of crypto will be lost."),(0,r.kt)("p",null,"We must align on unifying infrastructure that allows honest MEV actors to profit more than dishonest ones.  We must align to preserve shared ownership and competition with a global ecosystem of permissionless actors."),(0,r.kt)("p",null,"There is no shortage of companies or actors who are still more than happy to centralize cryptocurrency for their own gain. There is no shortage of those willing to embrace centralization as long as it is centralization to their own wallets. There is no shortage of those who would ",(0,r.kt)("strong",{parentName:"p"},"prefer")," that cryptocurrency looks more like the traditional financial systems they currently dominate."),(0,r.kt)("p",null,"We must make sure the decentralized, permissionless systems that we have put our hearts and souls into building survive the incentives of these actors. We must make sure block building as a process ends up meaningfully decentralized in power, because crypto must end up decentralized, and because humanity needs decentralization in its financial systems, now more than ever."),(0,r.kt)("p",null,"Over the past year, we thought hard about how that market structure would have to look like, and arrived at the following principles:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"First"),", to neutralize the pressure from exclusive orderflow, users should be empowered with pre-confirmation privacy and entitled to any MEV they create. Further, their transactions should be private, yet available to all block builders."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Second"),", to neutralize the pressure from cross-domain MEV, block builders across chains have to integrate with each other. But, similar to how the original Flashbots Auction integrated searchers with miners, they must do it in an open and permissionless way."),(0,r.kt)("p",null,"And ",(0,r.kt)("em",{parentName:"p"},"finally"),", the first two components \u2014 a transaction system that empowers users, and a block building system that empowers builders \u2014 must themselves be decentralized or risk becoming corrupted in time."),(0,r.kt)("p",null,"After a year of deep research and product collaboration, both in Flashbots and with the powerful MEV community, we have found the answer: ",(0,r.kt)("strong",{parentName:"p"},"SUAVE \u2014 the Single Unified Auction for Value Expression.")," SUAVE is our attempt to empower users and maximally decentralize public blockchains."),(0,r.kt)("h2",{id:"iv-suave-in-the-blockchain-stack"},"IV. SUAVE in the blockchain stack"),(0,r.kt)("p",null,"From a high level, SUAVE is an independent network that can act as a ",(0,r.kt)("strong",{parentName:"p"},"plug-and-play mempool and decentralized block builder")," for any blockchain. Although SUAVE is a new blockchain, it is not a general-purpose smart contract platform that rivals Ethereum or any other participating chain. Instead, SUAVE ",(0,r.kt)("strong",{parentName:"p"},"unbundles the mempool and block builder role")," from existing chains and offers a highly specialized ",(0,r.kt)("strong",{parentName:"p"},"plug-and-play alternative"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sequencing-stack.jpg",src:a(4869).Z})),(0,r.kt)("p",null,"Importantly, SUAVE goes beyond sequencing for a single blockchain. We designed SUAVE to be ",(0,r.kt)("strong",{parentName:"p"},"the mempool and block builder for all blockchains.")),(0,r.kt)("p",null,"There are many reasons why we think the market will evolve toward many chains sharing a single decentralized sequencing layer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block builders who only operate on a single domain will find themselves increasingly at a disadvantage due to ",(0,r.kt)("strong",{parentName:"li"},"cross-domain MEV"),"."),(0,r.kt)("li",{parentName:"ul"},"There are ",(0,r.kt)("strong",{parentName:"li"},"efficiency gains")," for users from aggregating and clearing their preferences inside the same auction."),(0,r.kt)("li",{parentName:"ul"},"We can leverage that credible neutrality to get many parties to share their views, strategies, and opinions in a single place, giving SUAVE an ",(0,r.kt)("strong",{parentName:"li"},"information advantage")," on centralized builders."),(0,r.kt)("li",{parentName:"ul"},"Enabling computation on sensitive data (user orderflow) in a permissionless setting is a hard problem. By solving it for many chains, we can ",(0,r.kt)("strong",{parentName:"li"},"amortize the cost")," across the ecosystem and reach a solution faster and cheaper than any individual participant could."),(0,r.kt)("li",{parentName:"ul"},"Because of how fundamental sequencing is to the blockchain stack, only another decentralized system can provide the necessary ",(0,r.kt)("strong",{parentName:"li"},"security and credible neutrality"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cross chain diagram.jpg",src:a(682).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sharing SUAVE as the same sequencing layer with each other")," unlocks the following benefits (in order of the stack):"),(0,r.kt)("p",null,"\u2705 For blockchains: maximally decentralized sequencing, maximal neutral network resilience."),(0,r.kt)("p",null,"\u2705 For validators: maximum revenue on their blockspace."),(0,r.kt)("p",null,"\u2705 For builders/searchers: open access to user and searcher transactions, express complex preferences, cross-chain coordination."),(0,r.kt)("p",null,"\u2705 For users: transact privately and with the best execution and the minimum possible fees."),(0,r.kt)("p",null,"We are convinced that building a decentralized sequencing layer is the only way to give domains control over their own validation guarantees and to ensure smaller domains stay decentralized in the face of centralizing MEV from both centralized venues and other blockchains. We predict that domains that seek to compete on MEV sequencing rather than collaborating will see severe network externalities and backdoor centralization induced by MEV search. So, we suggest that all domains ",(0,r.kt)("strong",{parentName:"p"},"must work together to avoid the centralizing endgame"),"."),(0,r.kt)("h2",{id:"v-architecture-of-suave"},"V. Architecture of SUAVE"),(0,r.kt)("p",null,"SUAVE is a single environment where parties can collaborate on the ",(0,r.kt)("em",{parentName:"p"},"expression,")," ",(0,r.kt)("em",{parentName:"p"},"execution,")," and ",(0,r.kt)("em",{parentName:"p"},"settlement")," of preferences in a decentralized way. It is composed of three main components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Universal Preference Environment:")," A chain and mempool specialized for preference expression and settlement to surface and aggregate the preferences from users and searchers from all participating chains in a single place."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optimal Execution Market:")," A network of special parties called executors who listen to the SUAVE mempool and compete to provide the best execution for user preferences."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Decentralized Block Building:")," A decentralized network for and of block builders to access the encrypted preferences from users and merge them into partial or full blocks.")),(0,r.kt)("p",null,"At the core of SUAVE is the concept of ",(0,r.kt)("em",{parentName:"p"},"preferences.")," A preference is a message that a user signs to express a particular goal and that unlocks a payment if the user\u2019s conditions have been met. These preferences can range from simple transfers or swaps in a single domain to arbitrarily complex sequences of events across multiple blockchains. You can think of preferences as the native transaction type on SUAVE. They can either contain a payload to be executed on a specific domain\u2014such as Ethereum\u2014or make a more abstract statement of what the user wants to achieve and leave the optimal routing to the executors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"overview.png",src:a(5113).Z})),(0,r.kt)("h3",{id:"preference-environment"},"Preference Environment"),(0,r.kt)("p",null,"The Preference Environment builds on the existing properties of bundles (pre-confirmation privacy and no reverts) and improves on existing mempools by allowing an even richer range of expression. We expect a vibrant ecosystem to arise around preference expression and execution that serves users\u2019 needs. For example, executors can specialize to \u201cpre-process\u201d transactions in ways that make them more valuable, such as batching similar transactions together or paying gas fees on their behalf."),(0,r.kt)("p",null,"The universality of the preference environment unlocks a network effect for all participants: ",(0,r.kt)("em",{parentName:"p"},"First"),", the more preferences become aggregated in one place, the more the final blocks can optimize for the welfare of all users, e.g. via the aforementioned batch clearing. ",(0,r.kt)("em",{parentName:"p"},"Second"),", block builders (and hence validators) also benefit because the unified auction makes them aware of cross-domain preferences, allowing them to coordinate with other builders on other domains in a credible way."),(0,r.kt)("h3",{id:"execution-market"},"Execution Market"),(0,r.kt)("p",null,"Once a user has submitted their preference to SUAVE, it is passed to the Execution Market. Executors compete in an auction to provide users with the best execution possible and address many users\u2019 preferences across many domains. In cases where a user\u2019s transaction creates MEV, executors would capture that as well and compete on paying as much as possible of it back to the user. The Execution Market recognizes the economic value of orderflow, aspiring to be a decentralized place where users, wallets, and other orderflow originators can earn the most for their transactions."),(0,r.kt)("h3",{id:"decentralized-block-building"},"Decentralized Block Building"),(0,r.kt)("p",null,"Finally, a decentralized block building ",(0,r.kt)("strong",{parentName:"p"},"network")," takes the collected preferences, many of which have their execution paths optimized by now, and turns them into blocks across all participating domains. The decentralized block-building market maximizes MEV for builders and validators while allowing the builder itself to become decentralized."),(0,r.kt)("p",null,"Our goal is to move past the stage of monolithic block builders and toward a world where many searchers/builders with strong geographical distribution collaborate to build the best block together. The most important step for that is to enable the sharing of orderflow/bundles between block builders without leaking their contents."),(0,r.kt)("p",null,"These three components will be enabled by a specialized ",(0,r.kt)("strong",{parentName:"p"},"SUAVE Chain"),". The chain will be EVM-compatible and provide the scaffolding for all these components to interact with each other and decentralize over time."),(0,r.kt)("h2",{id:"vi--roadmap-and-first-steps"},"VI.  Roadmap and First Steps"),(0,r.kt)("p",null,"This is an ambitious vision to build. We will need to be thoughtful in progressively decentralizing SUAVE and improving its trust guarantees, while at the same time making it more expressive over time. Below is a roadmap of our planned milestones (these may be subject to change):"),(0,r.kt)("h3",{id:"-suave-centauri"},"\ud83d\udcab SUAVE Centauri"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Privacy-aware orderflow auction")," to return to users the MEV that their transactions create. In this auction, searchers compete for the right to back run a user, thereby bidding up the value returned to them. Initially, the auction assumes trust in Flashbots but is private for users and searchers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SUAVE Chain devnet")," for stress testing and community experimentation.")),(0,r.kt)("h3",{id:"-suave-andromeda"},"\ud83c\udf0c SUAVE Andromeda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SUAVE Chain mainnet")," will allow users to express preferences and send them to the Execution Market"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SGX-based orderflow auction")," to remove trust in Flashbots and make the auction for efficient for searchers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SGX-based centralized block building")," to enable open but private orderflow for centralized builders")),(0,r.kt)("h3",{id:"\ufe0f-suave-helios"},"\u2600\ufe0f SUAVE Helios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SGX-based decentralized building network")," to allow for permissionless and private collaborative block building across many entities"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Onboard second domain to Suave")," to address MEV on another domain and provide a foundation for cross-domain MEV"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cross-domain MEV solutions")," that allow for expression and execution of cross-domain MEV preferences")),(0,r.kt)("p",null,"Beyond SUAVE Helios, we intend to look into custom secure enclaves, as well as using cryptography and cryptoeconomics to help further reduce the trust guarantees of users in the system. These improved trust guarantees will lower the barriers to entry for new parties and be a stepping stone towards orderflow that is both private yet open to all builders."),(0,r.kt)("p",null,"This marketplace needs to be bootstrapped, similar to how the previous marketplaces we\u2019ve built have needed bootstrapping. We\u2019d like to make it clear: we run centralized infrastructure today with the single goal of bootstrapping SUAVE and setting a healthy baseline for quality and competition. ",(0,r.kt)("strong",{parentName:"p"},"We do not intend to participate in the marketplace we build beyond bootstrapping it.")," We consider this strategy the most aligned with our mission and the health of the entire ecosystem."),(0,r.kt)("p",null,"For SUAVE to succeed against centralized block builders, it needs to become a neutral home for users, searchers, builders, and validators across many blockchains alike. In the SUAVE future, Flashbots would like to be the neutral marketplace designer\u2014not a participant\u2014and explore incentive-compatible ways to achieve organizational sustainability."),(0,r.kt)("h2",{id:"vii-the-millennium-prize-problems-of-crypto"},"VII. The Millennium Prize Problems of Crypto"),(0,r.kt)("p",null,"This is a time where our individual incentives must be, briefly, for an instance in time, put aside to build something that is greater than ourselves. In the past few months, our industry has seen the devastation of unbridled, centralized greed. We have seen first hand that papered-on faux decentralization is not enough. We have seen the devastation that embracing the same old trust cartels has on those we claim to build for."),(0,r.kt)("p",null,"Our industry today is tiny. To face the future and the world, we have to do a lot better."),(0,r.kt)("p",null,"We understand that the obvious incentive in MEV is to compete. However, we would like to instead encourage the community to ",(0,r.kt)("strong",{parentName:"p"},"collaborate"),". Because we deserve to see what meaningful decentralization looks like in the context of MEV. Because we are all here thanks to cryptocurrency\u2019s unique decentralized nature, and its global reach. Because these are all important properties that we hold dear, that are worth preserving. Because the endgame of block building becoming centralized is something we must all unite against."),(0,r.kt)("p",null,"We do not expect you to trust us as we walk down this road. It is our commitment to ",(0,r.kt)("strong",{parentName:"p"},"meaningfully decentralize.")," It is our commitment to not hold on to more than our fair share of power as we build these systems. It is our commitment to be more open, and to make decisions that benefit the commons even when it is at our short-term expense. We cannot dictate what is best for this community, and we do not intend to try."),(0,r.kt)("p",null,"If we cannot accomplish this mission by walking alongside and accelerating every single ecosystem project, every single perceived competitor in our market, and every single blockchain system, towards decentralization, we have already failed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MEV is the Millennium Prize Problem of crypto"),". We are deeply convinced that the value to be unlocked through coopetition in MEV is monumental. ",(0,r.kt)("strong",{parentName:"p"},"We believe that the sum is greater than its parts")," and that we can align the best possible execution with the most decentralized infrastructure. We commit to preserving the decentralization and respecting the preferences of every user and every domain that MEV touches."),(0,r.kt)("p",null,"We ask you to watch our actions, and to keep us to account. We ask you to walk with us on this road, so we can keep you to account as well."),(0,r.kt)("p",null,"Stay tuned for the SUAVE technical specs and posts that will provide more color on the different milestones on our roadmap, and how we can get there together. We look forward to iterating on and discussing them with you."),(0,r.kt)("br",null),(0,r.kt)("center",null,(0,r.kt)("p",null,"Onwards, to (more) decentralization!"),(0,r.kt)("p",null,"The Flashbots Collective"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://collective.flashbots.net/"},"collective.flashbots.net")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/"},"writings.flashbots.net")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm"},"flashbots-github"))))}u.isMDXComponent=!0},8775:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Logo2-f109dd33c31336a2838de929b5e24a0f.jpg"},6450:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/block-supply-chain-7413133b658fe4061afbd4cf28ddced0.png"},682:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cross-chain-b5478a535acb9cd29c97fc998de9bab0.jpg"},5087:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mev-landscape-30a3e9627d0521b84d99ff428f4a9895.png"},5113:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/overview-1551b42ff544868f1254598d20a1f1e1.png"},4869:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sequencing-stack-0fffa5134e87c6559d25e493940b3d77.jpg"}}]);