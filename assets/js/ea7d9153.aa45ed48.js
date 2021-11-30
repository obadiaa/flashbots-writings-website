"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[9156],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4644:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={slug:"frontrunning-mev-crisis",title:"Flashbots\u2014Frontrunning the MEV Crisis",authors:["obadiaa"],tags:["flashbots"],image:"/img/frontrunning-mev-crisis-1",hide_table_of_contents:!1},l=void 0,c={permalink:"/writings/frontrunning-mev-crisis",source:"@site/writings/2020-11-23-frontrunning-mev-crisis.mdx",title:"Flashbots\u2014Frontrunning the MEV Crisis",description:"Flashbots is a research and development organization formed to mitigate the negative externalities and existential risks posed by miner-extractable value (MEV) to smart-contract blockchains. We propose a permissionless, transparent, and fair ecosystem for MEV extraction to reinforce the Ethereum ideals.",date:"2020-11-23T00:00:00.000Z",formattedDate:"November 23, 2020",tags:[{label:"flashbots",permalink:"/writings/tags/flashbots"}],readingTime:8.99,truncated:!0,authors:[{name:"Alex Obadia",title:"Research @Flashbots",url:"https://twitter.com/ObadiaAlex",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"obadiaa"}],prevItem:{title:"Flashbots Transparency Report \u2014 January 2021",permalink:"/writings/transparency-january"}},u={authorsImageUrls:[void 0]},p=[{value:"What is MEV",id:"what-is-mev",children:[]},{value:"The MEV Crisis",id:"the-mev-crisis",children:[]},{value:"Frontrunning the MEV crisis",id:"frontrunning-the-mev-crisis",children:[{value:"Illuminate the Dark Forest",id:"illuminate-the-dark-forest",children:[]},{value:"Democratize Extraction",id:"democratize-extraction",children:[]},{value:"Distribute Benefits",id:"distribute-benefits",children:[]}]},{value:"Our Public Commitments",id:"our-public-commitments",children:[]},{value:"Learn more",id:"learn-more",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flashbots is a research and development organization formed to mitigate the negative externalities and existential risks posed by miner-extractable value (MEV) to smart-contract blockchains. We propose a permissionless, transparent, and fair ecosystem for MEV extraction to reinforce the Ethereum ideals."),(0,i.kt)("p",null,"In this article, we cover the context and motivation for this project. Technical details of our proposed solution can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/flashbots-frontrunning-the-mev-crisis/8251"},"ETHResearch forum"),"."),(0,i.kt)("h2",{id:"what-is-mev"},"What is MEV"),(0,i.kt)("p",null,"Miner extractable value (MEV) is a measure devised to study consensus security by modeling the profit a miner (or validator, sequencer, or other privileged protocol actor) can make through their ability to arbitrarily include, exclude, or re-order transactions from the blocks they produce. MEV includes both \u2018conventional\u2019 profits from transaction fees and block rewards, and \u2018unconventional\u2019 profits from transaction reordering, transaction insertion, and transaction censorship within the block a miner is producing."),(0,i.kt)("p",null,"The term MEV can be misleading as one would assume it is miners who are extracting this value. In reality, the MEV present on Ethereum today is predominantly captured by DeFi traders through structural arbitrage trading strategies; miners indirectly profit from these traders\u2019 transaction fees. One example of such structural arbitrage opportunities are Uniswap price arbitrage trades: when a Uniswap pool\u2019s assets become mispriced, a profit opportunity is created to arbitrage the Uniswap pool back to parity with other trading venues. Of course, rather than letting the trader pay them a transaction fee for the privilege of collecting the arb profit, a miner could simply decide to run this strategy themselves."),(0,i.kt)("h2",{id:"the-mev-crisis"},"The MEV Crisis"),(0,i.kt)("p",null,"Transactors on Ethereum express their willingness to pay for inclusion in a block through their transaction\u2019s gas price, and therefore through the transaction fee they indicate they are willing to pay miners. Miners, as economically rational actors, pick the transactions with the highest gas price and order them by gas spend in the block they are producing. The financial system being built on Ethereum creates many \u2018pure\u2019 profit opportunities such as liquidations and arbitrages of many kinds. However, these opportunities are finite and episodic, and as such, traders compete to claim them. Right now, this competition is primarily expressed either via frontrunning, or via backrunning:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Frontrunning (also known as Priority Gas Auctions (PGAs)): Transaction A is broadcasted with a higher gas price than an already pending transaction B so that A gets mined before B.\n(eg. to snatch a Uniswap price arbitrage trade to rebalance a pool).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Backrunning: Transaction A is broadcasted with a slightly lower gas price than already pending transaction B so that A gets mined right after B in the same block.\n(eg. to execute a DyDx liquidation after a price oracle update that triggers a DyDx loan to go under the required collateralization ratio)."))),(0,i.kt)("p",null,"Unfortunately, both frontrunning and backrunning are inefficient and lead to negative externalities such as network congestion (i.e. p2p network load) and chain congestion (i.e. blockspace usage). In addition, this competition for MEV opportunities leads to Ethereum consensus security instability due to the creation of incentives for time-bandit attacks and permissioned communication infrastructure between traders and miners. Such an infrastructure erodes the neutrality, transparency, decentralization, and permissionlessness of Ethereum today."),(0,i.kt)("p",null,"While none of these existential risks and negative externalities are new, we find ourselves at a critical junction between alternative futures for Ethereum. A series of events in the past 6 months have lead usage of the network to reach a tipping point:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Steadily increasing contract interactions")," (ie. there are more complex transactions on Ethereum than before which increases the absolute amount of MEV up for grabs.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token market cap exceeding ETH market cap")," (ie. MEV revenue in ERC-20 tokens is starting to compete with regular transaction fees paid in ETH.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Transaction fees exceeding block rewards")," (ie. transaction fees have reached unprecedented levels partly due to traders pushing the gas prices up when competing for trading opportunities. It is a clue that MEV-related revenue may surpass block reward for miners.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Adoption of generalized frontrunners")," (ie. an indicator of increased sophistication in MEV extraction.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Adoption of permissioned mempools")," (ie. another indicator of such sophistication)"))),(0,i.kt)("p",null,"These events indicate an accelerating trend towards the foretold existential risks and negative externalities."),(0,i.kt)("h2",{id:"frontrunning-the-mev-crisis"},"Frontrunning the MEV crisis"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Enter Flashbots")),(0,i.kt)("p",null,"Flashbots is a research and development organization formed to mitigate the negative externalities and existential risks posed by MEV to smart-contract blockchains. We propose a permissionless, transparent, and fair ecosystem for MEV extraction to preserve the ideals of Ethereum."),(0,i.kt)("p",null,"Our approach to mitigating the MEV crisis can be broken down into three parts: Illuminate the Dark Forest, Democratize Extraction, and Distribute Benefits. We believe each part is necessary for Flashbots to succeed."),(0,i.kt)("h3",{id:"illuminate-the-dark-forest"},"Illuminate the Dark Forest"),(0,i.kt)("p",null,"MEV is currently opaque to users of Ethereum. It requires significant data analysis and in-depth knowledge of smart contracts to understand as it involves transactions with complex, sometimes obfuscated, logic and adversarial games played on several meta-levels (users, traders, generalized frontrunners, miners)."),(0,i.kt)("p",null,"As more and more security-critical infrastructure moves off-chain, and as chain state and size grows, this problem will only get worse and it will become increasingly difficult to leverage one of the original promises of cryptocurrency: transparency. By Illuminating the Dark Forest, we aim to preserve this original promise. More practically, we aim to allow for the objective assessment of the negative externalities of the MEV crisis and the impact of Flashbots technologies, and for the quantification of user harm caused by MEV extraction in order to provide tooling for builders to reduce their dApp\u2019s surface for MEV extraction."),(0,i.kt)("p",null,"Our first step to Illuminate the Dark Forest is quantifying its impact. We\u2019ve built MEV-Inspect for this purpose. It scans Ethereum blocks and enables visualization of MEV metrics over time. We use it to better understand the MEV ecosystem and provide it to the community in an attempt to annihilate information asymmetry."),(0,i.kt)("h3",{id:"democratize-extraction"},"Democratize Extraction"),(0,i.kt)("p",null,"MEV Extraction could likely go in a direction where it is centralized to a few players, for instance by being limited to permissioned dark transaction pools that have access to significant hashrate, or through unilateral off-chain deals between large traders and miners."),(0,i.kt)("p",null,"This power and capital centralization is a key point of security weakness, and erodes core properties of Ethereum: namely permissionlessness and decentralization. We believe that without the adoption of neutral, public, open-source infrastructure for permissionless MEV extraction, MEV risks becoming an insiders\u2019 game. By Democratizing MEV Extraction, we aim to ensure both small and large participants have equal access to low-level financial primitives and that core Ethereum properties are preserved."),(0,i.kt)("p",null,"MEV-Geth is our initial effort to Democratize Extraction. It is an upgrade to the go-ethereum client to enable a sealed-bid block space auction mechanism for communicating transaction order preference. Fundamentally, MEV-Geth creates a more efficient communication channel for miners and traders bidding for inclusion of their transactions. While the proof of concept of MEV-Geth has incomplete trust guarantees, we believe it is a significant improvement over the status quo. The adoption of MEV-Geth should relieve a lot of the network and chain congestion caused by frontrunning and backrunning bots."),(0,i.kt)("h3",{id:"distribute-benefits"},"Distribute Benefits"),(0,i.kt)("p",null,"MEV involves the entire Ethereum ecosystem, from miners, traders, DeFi developers, and, most importantly, Ethereum users. Our preliminary research shows MEV extraction currently disproportionately benefits traders and miners. As MEV extraction continues to grow in scale, we anticipate there will be a need for ~some~ value redistribution towards users and towards system stability"),(0,i.kt)("p",null,"We believe it is essential for Flashbots and the community working alongside us to be thoughtful and deliberate about value redistribution in order to maximize social good. This is particularly true given the aforementioned dangerous economic incentives inherent to MEV which cause existential risks. Not only do we want to mitigate such risks, but also believe it is our responsibility to replace them with virtuous economic cycles that will reinforce Ethereum\u2019s core value proposal by aligning incentives around MEV for all system participants."),(0,i.kt)("h2",{id:"our-public-commitments"},"Our Public Commitments"),(0,i.kt)("p",null,"Flashbots arose from the MEV Pi-Rate Ship, a neutral, chain-agnostic, interdisciplinary research collective that supports MEV-related theoretical and empirical research. As an open research organization, we commit today and in the future, to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Preserving the core values of Ethereum in what we create, i.e. openness, permisionlessness, decentralization, against the coming MEV crisis.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Making our research and core Flashbots infrastructure code open source for any community member to contribute to and benefit from.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Creating sustainable alignment across key actors of the ecosystem by taking into account the needs of users, miners, developers, node operators, public infrastructure operators and developers, contract/dapp devs, and ecosystem researchers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Contributing to open-ended ethical research questions in the MEV space, 100% in the public domain."))),(0,i.kt)("p",null,"It is our deeply held belief as both an organization and as the individuals involved that decentralized finance is at a critical crossroads. The substantial amount of value on the table from manipulating user transactions could serve as a centralizing force, damaging to consensus stability, and harmful to users of any system where such manipulation is valuable. MEV could grow to benefit a few at the expense of many, at the expense of the value of cryptocurrency itself."),(0,i.kt)("p",null,"Or, this value could stand to benefit all users, enhancing the security of a new generation of financial infrastructure that avoids the mistakes of its structurally unfair predecessors. By bringing MEV extraction and tooling into the open, by funding public research to answer open questions around MEV, and by using our organizational capital to align the incentives of all ecosystem participants, it is this new generation of fair infrastructure we aim to lay the foundations for."),(0,i.kt)("p",null,"This is a call to action. We can\u2019t wait to have you join us."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Review our technical proposal on ETHResearch"),"\nWe discuss the details of the Flashbots organization, our research roadmap, and the technical details of the initial projects, MEV-Inspect and MEV-Geth on the ETHResearch forum."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscribe to the MEV Ship Calendar")),(0,i.kt)("p",null,"You can follow the latest Flashbots updates and events by subscribing to our MEV Ship Calendar: join us on our semi-monthly community call \u201cMEV Ship Treasure Map Roast\u201d, semi-weekly core dev call, for our weekly research workshop, and for the upcoming unconference: MEV.wtf"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Engage with us")),(0,i.kt)("p",null,"Join the Flashbots community on Discord or contact us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:info@flashbots.net"},"info@flashbots.net")),(0,i.kt)("p",null,"Flashbots is stewarded by Scott Bigelow, Phil Daian, Stephane Gosselin, Alex Obadia, and Tina Zhen. We exist thanks to the continued support of members of the MEV Pi-Rate Ship and Paradigm."),(0,i.kt)("p",null,"Special thanks to Andrei Anisimov, Ivan Bogatyy, Vaibhav Chellani, Brock Elmore, Georgios Konstantopoulos, Jason Paryani, Alejo Salles, samczsun, Austin Williams for their contributions on MEV-Geth and MEV-Inspect, and Sunny Aggarwal, Surya Bakshi, Phillippe Castonguay, Tarun Chitra, Dan Elitzer, Lev Livnev, Charlie Noyes, Dev Ojha, Dan Robinson, Mark Tyneway, and Micah Zoltu for their feedback on MEV-research."))}d.isMDXComponent=!0}}]);