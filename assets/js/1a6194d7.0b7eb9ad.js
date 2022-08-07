"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[2940],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var o=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,o,s=function(e,t){if(null==e)return{};var a,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=o.createContext({}),h=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=h(a),d=s,p=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?o.createElement(p,r(r({ref:t},c),{},{components:a})):o.createElement(p,r({ref:t},c))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,r=new Array(i);r[0]=m;var n={};for(var l in t)hasOwnProperty.call(t,l)&&(n[l]=t[l]);n.originalType=e,n.mdxType="string"==typeof e?e:s,r[1]=n;for(var h=2;h<i;h++)r[h]=a[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8113:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return c},toc:function(){return u},default:function(){return d}});var o=a(7462),s=a(3366),i=(a(7294),a(3905)),r=["components"],n={slug:"understanding-mev-boost-liveness-risks",title:"Understanding liveness risks from mev-boost",authors:["hasu"],tags:["mev-boost"],image:"img/og_forest.jpg",hide_table_of_contents:!1},l="Understanding liveness risks from mev-boost",h={permalink:"/writings/understanding-mev-boost-liveness-risks",source:"@site/writings/2022-08-05-mev-boost-understanding-liveness-risks.mdx",title:"Understanding liveness risks from mev-boost",description:"Over the last few days, mev-boost has been a hot discussion topic in the community. We want to take this opportunity to highlight and educate the design and trust assumptions that make mev-boost possible as a merge-ready PBS solution.",date:"2022-08-05T00:00:00.000Z",formattedDate:"August 5, 2022",tags:[{label:"mev-boost",permalink:"/writings/tags/mev-boost"}],readingTime:8.49,truncated:!1,authors:[{name:"Hasu",title:"Strategy lead",url:"https://twitter.com/hasufl",imageURL:"https://pbs.twimg.com/profile_images/1512839785232093193/BU3pInpO_400x400.jpg",key:"hasu"}],nextItem:{title:"Boost your MEV in Ethereum proof-of-stake",permalink:"/writings/mev-boost-call-for-testing"}},c={authorsImageUrls:[void 0]},u=[{value:"Block withholding attacks",id:"block-withholding-attacks",children:[]},{value:"Mapping the solution space",id:"mapping-the-solution-space",children:[]},{value:"Why was this design chosen?",id:"why-was-this-design-chosen",children:[]},{value:"Summary",id:"summary",children:[]},{value:"References",id:"references",children:[]}],m={toc:u};function d(e){var t=e.components,a=(0,s.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Over the last few days, mev-boost has been a hot discussion topic in the community. We want to take this opportunity to highlight and educate the design and trust assumptions that make mev-boost possible as a merge-ready PBS solution."),(0,i.kt)("p",null,"First, it\u2019s important to note that the reports of new issues or trust assumptions being discovered are false. Everything discussed in this post has been known properties of mev-boost and discussed in the initial ",(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"mev-boost research post"),". Each issue has a known and accepted mitigation which is being implemented in consensus clients. The merge and mev-boost are both on track for launch at the scheduled timeline. You can keep an eye on the readiness of each consensus client and node operator on the mev-boost landing page over at ",(0,i.kt)("a",{parentName:"p",href:"http://boost.flashbots.net"},"boost.flashbots.net")),(0,i.kt)("p",null,"With this said, let's take a deep look at the mev-boost design, trust assumptions and why they were chosen, and how we mitigate liveness risks to Ethereum."),(0,i.kt)("h2",{id:"block-withholding-attacks"},"Block withholding attacks"),(0,i.kt)("p",null,"To bring you up to speed, mev-boost is middleware that validators can run to outsource their block construction to a market of block builders. In the middle of builders and validators sit \u201crelays\u201d, which are in charge of facilitating smooth commerce between the two parties. The relay protects the builder from leaking any information about the block to the validators and ensures that even small validators can participate in the builder market. At the same time, the relay protects the validator from receiving blocks that are invalid, overstate their bid to the validator, or are missing entirely. (More on this later in \u201c",(0,i.kt)("em",{parentName:"p"},"Why was this design chosen?"),"\u201d)"),(0,i.kt)("p",null,"Relays can connect to one or many builders, and we expect that there will be both variants. A relay connecting to many builders will aggregate their bids (fun fact: in a previous iteration, we called them builder aggregators or builder pools). The relay can see all the blocks submitted by the builders to confirm their validity and how much they pay to the validator. The relay then only submits the highest valid bid to the validator to sign."),(0,i.kt)("p",null,"Before validators can receive any bids from relays, they need to ",(0,i.kt)("a",{parentName:"p",href:"https://boost.flashbots.net/"},"set up mev-boost")," and add relays to their mev-boost config. mev-boost is effectively just a relay aggregator or a local relay of relays. It will serve the validator the winning bid from all relays. A validator can connect to a small number of relays that aggregate all the builders, and many will probably do that. Other validators might connect to many relays."),(0,i.kt)("p",null,"If mev-boost has no relays in the config OR all relays are offline, then the beacon node (BN) will always fall back to constructing a block from the public mempool. So we know the risk is not all relays going offline. So what is the risk? It is that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The entire network connects to the same relay (not necessarily exclusively), AND"),(0,i.kt)("li",{parentName:"ul"},"That relay is the highest bidding relay, so its block is selected by validators, AND"),(0,i.kt)("li",{parentName:"ul"},"The relay sends the block header for signing (= it is not offline) but after receiving the validator signature, does not publish the final block to the network.")),(0,i.kt)("p",null,"In this case, the same relay would keep suggesting blocks to validators, and these validators would keep signing them, and then no block would be published. The result is a series of empty slots. The network not making blocks is typically called a ",(0,i.kt)("em",{parentName:"p"},"liveness issue"),". (It is different from a DDOS attack because the affected nodes still fulfill all of their other network duties like publishing attestations, gossiping messages, etc.)"),(0,i.kt)("p",null,"This fault can happen via a bug or a malicious relay. In the bug case, we expect the relay to realize their problem and fix it quickly or go offline entirely. So the more relevant case to protect against is a malicious relay launching a deliberate ",(0,i.kt)("em",{parentName:"p"},"withholding attack"),"."),(0,i.kt)("p",null,"It is important to emphasize that a ",(0,i.kt)("em",{parentName:"p"},"withholding attack")," can immediately cascade into a ",(0,i.kt)("em",{parentName:"p"},"liveness issue")," for the entire network. That is because a malicious relay can lie about its bid to guarantee it is always selected by all validators that register with it. For example, imagine a malicious relay bidding an artificially high number that is higher than that of honest relays."),(0,i.kt)("p",null,"This attack is free for the relay because it never publishes the block and pays the validator, and yet all affected validators miss their slot for proposing."),(0,i.kt)("p",null,"Importantly, we are not concerned about 10% of the network connecting to a faulty relay, but only when a faulty relay is so popular that it creates systemic risk for the network. To recycle a famous saying, if 10% of validators miss their slot, it is their problem. If 100% of validators miss their slot, it is Ethereum\u2019s problem."),(0,i.kt)("h2",{id:"mapping-the-solution-space"},"Mapping the solution space"),(0,i.kt)("p",null,"So, let\u2019s say a popular relay is withholding blocks; how does the system recover? From first principles, the system recovers when ",(0,i.kt)("em",{parentName:"p"},"any")," of the below steps happen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Validators remove the faulty relay from their mev-boost config (or turn off mev-boost entirely), OR"),(0,i.kt)("li",{parentName:"ol"},"Other relays start outbidding the faulty relay, OR"),(0,i.kt)("li",{parentName:"ol"},"The faulty relay goes offline entirely, OR"),(0,i.kt)("li",{parentName:"ol"},"The faulty relay starts publishing blocks again")),(0,i.kt)("p",null,"Looking at the \u201cdefenses\u201d against the faulty relay, it becomes clear that cases 3-4 are within the control of the faulty relay, and case 2 is in the control of the other relays. But as validators, we are only interested in solutions that let us remove relays once we realize they are faulty."),(0,i.kt)("p",null,"In this solution space, there are two categories: ",(0,i.kt)("em",{parentName:"p"},"local")," and ",(0,i.kt)("em",{parentName:"p"},"global solutions"),". The local solutions are the most simple \u2014 the validator (or their mev-boost) can track the most recent performance of a relay. If a relay misrepresented payments or didn\u2019t publish blocks, the validator can automatically remove it. But this solution has a problem of ",(0,i.kt)("em",{parentName:"p"},"local information.")," The solution protects a single validator from a bad relay, but the next validator doesn\u2019t know about the bad relay. A local solution may be enough for Coinbase, Lido, Binance, Kraken, etc., because they control so many validators that their \u201clocal\u201d is a good approximation for the network\u2019s \u201cglobal\u201d anyway \u2014 but it doesn\u2019t help smaller validators. These validators need to know how the relays performed ",(0,i.kt)("em",{parentName:"p"},"on the slots of previous other validators"),"."),(0,i.kt)("p",null,"It seems that we need a ",(0,i.kt)("em",{parentName:"p"},"global solution.")," In a global solution, validators look at the global history of the network, not just their own, to remove relays. The community is building two global solutions ahead of the merge."),(0,i.kt)("p",null,"The first is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost/issues/142"},"relay monitor")," operated by a trusted third party. This monitor watches the global performance of relays and can send a message a la \u201cremove relay x now\u201d to validators. So if any relay misbehaves, all validators who connect to the relay monitor will have their configs updated. Are there any new risks with this approach? We recall from earlier that an empty mev-boost config means that validators fall back to local block production. So the relay monitor can only temporarily remove relays from a validator\u2019s config, not any new ones, or cause the validator to miss any slots."),(0,i.kt)("p",null,"The second solution, introduced in the call by ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/ralexstokes"},"Alex Stokes"),", is a so-called ",(0,i.kt)("a",{parentName:"p",href:"https://hackmd.io/@ralexstokes/BJn9N6Thc"},"circuit breaker"),". It works similarly to a relay monitor but does not rely on a third-party service. The circuit breaker is part of the beacon node. It looks at the local view of the network, and if the node sees x out of y missed slots in a row, it will disconnect from the builder network and fall back to producing blocks locally. There is some nuance about picking a good x number because a small number would allow a large validator to miss slots on purpose to trigger the circuit breaker for the rest of the network and turn off their mev-boost. A large number could lead to many missed slots in a row."),(0,i.kt)("p",null,"The above and further, less-mature solutions are being discussed in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/flashbots/mev-boost/issues/222"},"GitHub issue"),". Eventually, Enshrined PBS will do away with relays entirely, but this is still a few years away."),(0,i.kt)("h2",{id:"why-was-this-design-chosen"},"Why was this design chosen?"),(0,i.kt)("p",null,"Due to the commit-reveal scheme used in mev-boost, relays can fail to release blocks after making the winning bid. This attack vector has been known from the start and it is a calculated choice. But why was it chosen?"),(0,i.kt)("p",null,"The alternative would have been to continue with Flashbots\u2019 pre-PoS design that we call \u201c",(0,i.kt)("a",{parentName:"p",href:"https://writings.flashbots.net/writings/why-run-mevboost"},"Stage 1 PBS"),"\u201d. In this system, block builders send full blocks to validators in cleartext, and validators have to open a DOS-sensitive RPC to block builders."),(0,i.kt)("p",null,"The advantage of that design has been that validators can always look at the block to verify that the block is valid and how much it pays the validator. If no builder sends a block in time, the validator can fall back to local block construction and there is no risk of ever missing a slot."),(0,i.kt)("p",null,"But the disadvantage is that block builders need to trust validators not to steal MEV from them, and validators need to trust block builders not to DoS attack them. The unfortunate consequence is that only trusted validators and builders can participate in the PBS market."),(0,i.kt)("p",null,"So, while this design has nice properties against block withholding attacks, but it would have completely cut off solo stakers from MEV extraction. After public discussions with the Ethereum community and other key stakeholders, this cost was deemed too high and we settled in favor of a design that can include them."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"I hope this post helps you frame the trust assumptions of mev-boost, why they were chosen, and what mitigations will be in place to avoid liveness risk to Ethereum. The relay monitor will be ready for the merge. The circuit breakers are being developed and some consensus clients already have them implemented. Together with validators practicing good relay hygiene (only using trusted relays until further mitigations are in place, setting up downtime monitors for their slots), I think we are in a good position for the merge."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ethresear.ch/t/mev-boost-merge-ready-flashbots-architecture/11177"},"mev-boost architecture")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://boost.flashbots.net/"},"mev-boost homepage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://writings.flashbots.net/writings/why-run-mevboost/"},"Why run mev-boost?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/222"},"liveness mitigations GitHub issue")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/flashbots/mev-boost/issues/142"},"relay monitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@ralexstokes/BJn9N6Thc"},"circuit breaker proposal"))))}d.isMDXComponent=!0}}]);