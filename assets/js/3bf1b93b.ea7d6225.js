"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6968],{3905:function(e,t,o){o.d(t,{Zo:function(){return h},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,b=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return o?r.createElement(b,s(s({ref:t},h),{},{components:o})):r.createElement(b,s({ref:t},h))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},250:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return h},toc:function(){return p},default:function(){return d}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],i={slug:"beginners-guide-mevboost",title:"Beginner's Guide to mev-boost",authors:["jolene"],tags:["mev-boost"],hide_table_of_contents:!1},l="Beginner's Guide to mev-boost",c={permalink:"/writings/beginners-guide-mevboost",source:"@site/writings/2022-06-15-beginners-guide-mevboost.mdx",title:"Beginner's Guide to mev-boost",description:"Understanding mev-boost as an iteration on the original Flashbots auction, and how it paves the way for full in-protocol PBS",date:"2022-06-15T00:00:00.000Z",formattedDate:"June 15, 2022",tags:[{label:"mev-boost",permalink:"/writings/tags/mev-boost"}],readingTime:5.99,truncated:!0,authors:[{name:"Jolene Dunne",title:"Research @Flashbots",key:"jolene"}],prevItem:{title:"Boost your MEV in Ethereum proof-of-stake",permalink:"/writings/mev-boost-call-for-testing"},nextItem:{title:"Why run mev-boost?",permalink:"/writings/why-run-mevboost"}},h={authorsImageUrls:[void 0]},p=[{value:"What is mev-boost?",id:"what-is-mev-boost",children:[]},{value:"Understanding the Flashbots Auction",id:"understanding-the-flashbots-auction",children:[]},{value:"Proposer/Builder Separation",id:"proposerbuilder-separation",children:[]},{value:"mev-boost",id:"mev-boost",children:[]},{value:"What is the link between PBS and MEV-boost?",id:"what-is-the-link-between-pbs-and-mev-boost",children:[]},{value:"Resources and Further Reading",id:"resources-and-further-reading",children:[]}],u={toc:p};function d(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Understanding mev-boost as an iteration on the original Flashbots auction, and how it paves the way for full in-protocol PBS"),(0,a.kt)("h3",{id:"what-is-mev-boost"},"What is mev-boost?"),(0,a.kt)("p",null,"mev-boost is the version of Flashbots that is adapted for and compatible with Proof of Stake Ethereum. It is related to the design for in-protocol proposer/builder separation, and can be conceptualised as an intermediate step to full in-protocol PBS. By understanding the current Flashbots auction, and by comparing this current state to the plans for PBS, we see how mev-boost provides block-building functionality that would otherwise be unavailable until PBS is completed."),(0,a.kt)("h3",{id:"understanding-the-flashbots-auction"},"Understanding the Flashbots Auction"),(0,a.kt)("p",null,"Currently, Flashbots provides a private transaction pool (",(0,a.kt)("inlineCode",{parentName:"p"},"mev-relay"),") and a sealed bid blockspace auction mechanism (",(0,a.kt)("inlineCode",{parentName:"p"},"mev-geth"),"). This allows miners to outsource the work of finding the optimal block construction."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"current-fb-auction.png",src:o(5506).Z}))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mev-geth")," introduced a new RPC endpoint, ",(0,a.kt)("inlineCode",{parentName:"p"},"eth_sendBundle")," - the message sent to this endpoint is called a bundle. ",(0,a.kt)("strong",{parentName:"p"},"Bundles")," consist of one or many transactions to be executed in an atomic batch."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Searchers")," are Ethereum users who prefer to use the FB private transaction pool over the regular p2p pool. They monitor the state of the chain and send bundles to the relayers. There is an option for searchers to express their bids for inclusion via the ether gas price, or by direct eth transfer to the miner's coinbase address."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"relay")," is a bundle propagation service that receives bundles from searchers and forwards them to miners. The relay is in charge of validating and routing FB bundles. Since searchers do not have to pay for failed bids (they can pay directly to the coinbase address, and make the payment conditional on their bundle succeeding), there is the potential that they could spam the network with invalid bundles. The relay therefore serves as a mitigation to this DOS threat. It will simulate each transaction and only forward valid bundles to the miner. "),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"miner")," (or more generally, block producer) is the party who ultimately collects all the bundles and produces a block. Miners traditionally run go-ethereum, and greedily order transactions by gas price. However, miners participating in Flashbots run a version of ",(0,a.kt)("inlineCode",{parentName:"p"},"mev-geth"),"."),(0,a.kt)("p",null,"These miners that are running mev-geth evaluate incoming bundles using the first-price sealed-bid auction and pick the most profitable bundles to place at the top of the block. The node then compares the Flashbots block to a normal block and begins mining on the most profitable."),(0,a.kt)("p",null,"The Flashbots bundle information allows the searcher to express blockspace preferences relative to the state of the chain as well as the state of the transaction pool. This enables price discovery for discrete MEV opportunities instead of competition for priority. The miner can evaluate all bundles received and combine those which do not conflict in order to produce the most profitable block."),(0,a.kt)("p",null,"Miners have full access to bundle content and could arbitrarily reorder/steal/censor bundles sent to them by searchers and relayers."),(0,a.kt)("h3",{id:"proposerbuilder-separation"},"Proposer/Builder Separation"),(0,a.kt)("p",null,"Proposer/block-builder separation (",(0,a.kt)("strong",{parentName:"p"},"PBS"),") was proposed by Ethereum researchers as a response to the risk that MEV poses to decentralisation of consensus networks. They have suggested that uncontrolled MEV extraction promotes economies of scale that have a centralising effect, as well as causing complications to decentralised pooling."),(0,a.kt)("p",null,"PBS is a change to the core protocol that aims to mitigate this. Instead of the block proposer (currently the miner, after PoS the validator) also trying to produce a maximally profitable block by itself, it can outsource this to a block building ",(0,a.kt)("em",{parentName:"p"},"market"),". Here, block builders would produce bundles consisting of a complete block and a fee for the proposer. The proposer just has to pick the block with the highest fee."),(0,a.kt)("p",null,"There are number of properties that are desired in the PBS design:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"untrusted proposers and builders should be able to participate successfully (there is little to no risk that a proposer would steal blocks from a builder, and vice versa) "),(0,a.kt)("li",{parentName:"ul"},"proposers are not advantaged by having high resources or technical competence"),(0,a.kt)("li",{parentName:"ul"},"proposers cannot extract transactions from bundles without paying the fee"),(0,a.kt)("li",{parentName:"ul"},"that the new design works with the existing consensus layer.")),(0,a.kt)("p",null,"PBS is still an open and active research area that is developing rapidly. The most recent design/specification for the in-protocol version is ",(0,a.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/two-slot-proposer-builder-separation/10980"},"two-slot PBS")," "),(0,a.kt)("h3",{id:"mev-boost"},"mev-boost"),(0,a.kt)("p",null,"Mev-boost is an updated Flashbots architecture that is compatible with PoS Ethereum. The design is as follows: "),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mevboost-proposed-architecture.png",src:o(6227).Z}))),(0,a.kt)("p",null,"We start with the existing Ethereum network and mempool in the above diagram. As discussed previously, in the current Flashbots model searchers take transactions from the public mempool, potentially adding their own, and arrange them into bundles. "),(0,a.kt)("p",null,"The possibility of ",(0,a.kt)("strong",{parentName:"p"},"private orderflow")," is also anticipated at this point. Private orderflow (also known as exclusive orderflow) refers to transactions that can be included in blocks but are not visible in the public mempool. This could be because the transactions are sent to a certain entity and they may route these transactions to their own nodes, or keep them secret in order to build more profitable blocks for themselves."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block builders")," are also introduced - these are services/providers that will aggregate various bundles and transactions into block templates. The builder orders the transactions in a block according to what is most profitable for them. The block templates are then forwarded to a relay."),(0,a.kt)("p",null,"The relay receives these block templates (also referred to as execution payloads), and will verify their validity. The ",(0,a.kt)("strong",{parentName:"p"},"MEV-boost")," component is a middleware which handles communication with the relays, the profit-switching logic, and a fallback mechanism in the case of some system failure."),(0,a.kt)("h3",{id:"what-is-the-link-between-pbs-and-mev-boost"},"What is the link between PBS and MEV-boost?"),(0,a.kt)("p",null,'If Flashbots Auction was the first step of "block building as a service", then PBS could be thought of as a response to the success and mainstream adoption of Flashbots. Instead of the entire network utilising one block builder (and thereby creating a centralising effect at the block-building level), the protocol would split block proposing and block building into two separate components. Block proposing would be handled in-protocol by the validators, and it is then much easier for block building to be delegated to a market of competing parties.'),(0,a.kt)("p",null,"However, the current designs of PBS require a change to beacon chain consensus (specifically the fork choice rule). For this reason (as well the designs not being completely finalised yet), it will need to wait until after the merge is successfully completed."),(0,a.kt)("p",null,"Flashbots MEV-boost acts as a prototype for what a block-building market would look like, and provides the necessary proposer logic and middleware that is missing from PoS Ethereum."),(0,a.kt)("p",null,"Longer-term, PBS is important to the Ethereum protocol for a number of reasons. Splitting block proposal and block building into separate components actually has desired effects that align with the protocol's goals, such as removing the requirement for validators to hold the full state (stateless Ethereum initiative). PBS is also a necessary step for the current favoured sharding proposal (Danksharding - ",(0,a.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq"},"https://notes.ethereum.org/@vbuterin/proto_danksharding_faq"),"). "),(0,a.kt)("h3",{id:"resources-and-further-reading"},"Resources and Further Reading"),(0,a.kt)("p",null,"These resources were directly referenced when creating this post"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.flashbots.net/flashbots-auction/overview"},"https://docs.flashbots.net/flashbots-auction/overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance"},"https://notes.ethereum.org/@vbuterin/pbs_censorship_resistance")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/two-slot-proposer-builder-separation/10980"},"https://ethresear.ch/t/two-slot-proposer-builder-separation/10980"))),(0,a.kt)("p",null,"Diagrams from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost"},"https://github.com/flashbots/mev-boost")),(0,a.kt)("p",null,"Further mev-boost and PBS resources and relevant talks have been curated by Flashbots here - ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost/wiki/Resources"},"https://github.com/flashbots/mev-boost/wiki/Resources")))}d.isMDXComponent=!0},5506:function(e,t,o){t.Z=o.p+"assets/images/current-fb-auction-74fe41e4b56744b254fb7575f3b7f576.png"},6227:function(e,t,o){t.Z=o.p+"assets/images/mevboost-proposed-architecture-58d23927aab395a7148b2d6126f5b374.png"}}]);