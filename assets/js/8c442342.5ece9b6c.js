"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[3049],{6145:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"speeding-up-evm-part-1","metadata":{"permalink":"/research/speeding-up-evm-part-1","source":"@site/research/2022-01-17-speeding-up-evm-part-1.mdx","title":"Speeding up the EVM (part 1)","description":"Thanks to Alejo Salles, Hongbo Zhang, Alex Obadia, and Kushal Babel for feedback and review of this post.","date":"2022-01-17T00:00:00.000Z","formattedDate":"January 17, 2022","tags":[{"label":"optimization","permalink":"/research/tags/optimization"}],"readingTime":15.11,"truncated":true,"authors":[{"name":"Xinyuan Sun","title":"Research @Flashbots","url":"https://twitter.com/sxysun1","imageURL":"https://pbs.twimg.com/profile_images/1461834528629080071/xzfOvt9Q_400x400.jpg","key":"sxysun"}],"nextItem":{"title":"On the Formalization of MEV","permalink":"/research/formalization-mev"}}},{"id":"formalization-mev","metadata":{"permalink":"/research/formalization-mev","source":"@site/research/2021-12-04-on-the-formalization-of-mev.mdx","title":"On the Formalization of MEV","description":"Thanks to Phil Daian, Alex Obadia, and Mahimna Kelkar for plenty of discussions on the topic.","date":"2021-12-04T00:00:00.000Z","formattedDate":"December 4, 2021","tags":[{"label":"research","permalink":"/research/tags/research"}],"readingTime":12.335,"truncated":true,"authors":[{"name":"Alejo Salles","title":"Research @Flashbots","url":"https://twitter.com/fiiiu_","imageURL":"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg","key":"alejo"}],"prevItem":{"title":"Speeding up the EVM (part 1)","permalink":"/research/speeding-up-evm-part-1"},"nextItem":{"title":"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value","permalink":"/research/cross-domain-mev"}}},{"id":"cross-domain-mev","metadata":{"permalink":"/research/cross-domain-mev","source":"@site/research/2021-12-03-cross-domain-mev.mdx","title":"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value","description":"The multi-chain future is upon us. Modular architectures are coming to maturity across the ecosystem","date":"2021-12-03T00:00:00.000Z","formattedDate":"December 3, 2021","tags":[{"label":"research","permalink":"/research/tags/research"}],"readingTime":1.25,"truncated":true,"authors":[{"name":"Alex Obadia","title":"Research @Flashbots","url":"https://twitter.com/ObadiaAlex","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"obadiaa"},{"name":"Alejo Salles","title":"Research @Flashbots","url":"https://twitter.com/fiiiu_","imageURL":"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg","key":"alejo"},{"name":"Lakshman Sankar","title":"Researcher","url":"https://twitter.com/lakshmansankar","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"lakshman"},{"name":"Tarun Chitra","title":"Gauntlet Network","url":"https://twitter.com/tarunchitra","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"tarun"},{"name":"Phil Daian","title":"Research @Flashbots","url":"https://pdaian.com/","imageURL":"https://pbs.twimg.com/profile_images/968496806639398912/Th087Dhz_400x400.jpg","key":"phil"},{"name":"Vaibhav Chellani","title":"Movr","url":"https://twitter.com/vaibhavchellani","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"vaibhav"}],"prevItem":{"title":"On the Formalization of MEV","permalink":"/research/formalization-mev"},"nextItem":{"title":"MEV-Boost -- Merge ready Flashbots Architecture","permalink":"/research/mev-boost"}}},{"id":"mev-boost","metadata":{"permalink":"/research/mev-boost","source":"@site/research/2021-11-03-mev-boost.mdx","title":"MEV-Boost -- Merge ready Flashbots Architecture","description":"This document outlines the design for a marketplace for block construction (often referred to as block proposer / block builder separation or PBS) compatible with the upcoming Ethereum merge fork. This trust based solution closely resembles the current Flashbots auction design with modifications to enable solo staker participation without introducing changes to Ethereum consensus. This solution aims to bridge the gap to a permissionless PBS design which should be strongly considered for the cleanup fork in order to improve decentralization.","date":"2021-11-03T00:00:00.000Z","formattedDate":"November 3, 2021","tags":[{"label":"eth2","permalink":"/research/tags/eth-2"},{"label":"mev-boost","permalink":"/research/tags/mev-boost"}],"readingTime":0.61,"truncated":true,"authors":[{"name":"thegostep","title":"Product @Flashbots","url":"https://twitter.com/thegostep","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"thegostep"}],"prevItem":{"title":"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value","permalink":"/research/cross-domain-mev"},"nextItem":{"title":"MEV and EIP-1559","permalink":"/research/mev-1559"}}},{"id":"mev-1559","metadata":{"permalink":"/research/mev-1559","source":"@site/research/2021-07-19-mev-1559.mdx","title":"MEV and EIP-1559","description":"The incorporation of EIP-1559 in the London hardfork brings a major restructuring of the Ethereum fee mechanism, aiming to allow for easier fee estimation by users and consolidate ETH as the base currency of the network by burning part of the transaction fees. This post analyzes some of the consequences of this EIP under the light of the MEV (Maximal Extractable Value) phenomenon, that is, the permissionless extraction of value by the reordering, addition, or censoring of transactions.","date":"2021-07-19T00:00:00.000Z","formattedDate":"July 19, 2021","tags":[{"label":"research","permalink":"/research/tags/research"},{"label":"1559","permalink":"/research/tags/1559"}],"readingTime":15.97,"truncated":true,"authors":[{"name":"Alejo Salles","title":"Research @Flashbots","url":"https://twitter.com/fiiiu_","imageURL":"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg","key":"alejo"},{"name":"Kristof Gazso","title":"Research @Nethermind","url":"https://twitter.com/kristofgazso?lang=en","imageURL":"https://pbs.twimg.com/profile_images/1326269994074779648/840HwaDE_400x400.jpg","key":"kristof"}],"prevItem":{"title":"MEV-Boost -- Merge ready Flashbots Architecture","permalink":"/research/mev-boost"},"nextItem":{"title":"MEV in eth2 - an early exploration","permalink":"/research/mev-eth2"}}},{"id":"mev-eth2","metadata":{"permalink":"/research/mev-eth2","source":"@site/research/2021-06-09-mev-eth2.mdx","title":"MEV in eth2 - an early exploration","description":"Ethereum will soon transition from a Proof of Work (PoW) to a Proof of Stake (PoS) consensus protocol. This transition has been worked on for years and is happening in multiple steps. The first step in December 2020 consisted in launching the beacon chain. It is now live, and, at the time of writing, has more than 160k validators or an equivalent of ~5m ETH staked on it.","date":"2021-06-09T00:00:00.000Z","formattedDate":"June 9, 2021","tags":[{"label":"eth2","permalink":"/research/tags/eth-2"},{"label":"research","permalink":"/research/tags/research"}],"readingTime":18.285,"truncated":true,"authors":[{"name":"Alex Obadia","title":"Research @Flashbots","url":"https://twitter.com/ObadiaAlex","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"obadiaa"},{"name":"Taarush Vemulapalli","title":"Engineering @Flashbots","url":"https://github.com/taarushv","imageURL":"https://avatars.githubusercontent.com/u/17141788?v=4","key":"fireball"}],"prevItem":{"title":"MEV and EIP-1559","permalink":"/research/mev-1559"},"nextItem":{"title":"MEV-SGX -- A sealed bid MEV auction design","permalink":"/research/mev-sgx"}}},{"id":"mev-sgx","metadata":{"permalink":"/research/mev-sgx","source":"@site/research/2021-05-31-mev-sgx.mdx","title":"MEV-SGX -- A sealed bid MEV auction design","description":"While Flashbots Alpha has been and continues to be successful it offers incomplete trust guarantees. It is not permissionless because miners who adopt it have to be whitelisted by MEV-Relay in order to be forwarded bundles. It is not completely private because bundles can be seen by miners prior to inclusion on-chain. Lastly, Flashbots Alpha offers no finality protection against chain reorgs. While finality is important, we are focusing first on permissionless and complete privacy as the next design goals to achieve.","date":"2021-05-31T00:00:00.000Z","formattedDate":"May 31, 2021","tags":[{"label":"sgx","permalink":"/research/tags/sgx"}],"readingTime":0.48,"truncated":true,"authors":[{"name":"Robert Miller","title":"Product @Flashbots","url":"https://twitter.com/bertcmiller","imageURL":"https://pbs.twimg.com/profile_images/1336354612064911360/qGVMxddJ_400x400.jpg","key":"robert"}],"prevItem":{"title":"MEV in eth2 - an early exploration","permalink":"/research/mev-eth2"},"nextItem":{"title":"Quantifying Realized Extractable Value","permalink":"/research/quantifying-rev"}}},{"id":"quantifying-rev","metadata":{"permalink":"/research/quantifying-rev","source":"@site/research/2021-05-16-quantifying-rev.mdx","title":"Quantifying Realized Extractable Value","description":"Maximal (formerly Miner) Extractable Value ($\\\\textrm$) is the value that can be extracted from a blockchain by any agent without special permissions. Considering this permissionless nature, any agent with transaction ordering rights will be in a privileged position to perform the extraction. In Proof of Work blockchains, it is miners who determine transaction ordering within a block, hence the former \\"miner\\" term. In practice, bot operators seek to extract $\\\\textrm{MEV}$ by either paying high fees to increase the likelihood that their transactions are mined, or by fine-tuning their gas price choices in order to \\"time\\" their transactions right, as is the case when backrunning an oracle update to perform a liquidation.","date":"2021-05-16T00:00:00.000Z","formattedDate":"May 16, 2021","tags":[{"label":"research","permalink":"/research/tags/research"}],"readingTime":10.365,"truncated":true,"authors":[{"name":"Alejo Salles","title":"Research @Flashbots","url":"https://twitter.com/fiiiu_","imageURL":"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg","key":"alejo"}],"prevItem":{"title":"MEV-SGX -- A sealed bid MEV auction design","permalink":"/research/mev-sgx"},"nextItem":{"title":"Flashbots -- Frontrunning the MEV crisis","permalink":"/research/ethr-frontrunning-mev-crisis"}}},{"id":"ethr-frontrunning-mev-crisis","metadata":{"permalink":"/research/ethr-frontrunning-mev-crisis","source":"@site/research/2020-11-23-ethr-frontrunning-mev.mdx","title":"Flashbots -- Frontrunning the MEV crisis","description":"Flashbots is a research and development organization formed to mitigate the negative externalities and existential risks posed by miner-extractable value (MEV) to smart-contract blockchains. We propose a permissionless, transparent, and fair ecosystem for MEV extraction to preserve the ideals of Ethereum.","date":"2020-11-23T00:00:00.000Z","formattedDate":"November 23, 2020","tags":[{"label":"flashbots","permalink":"/research/tags/flashbots"},{"label":"architecture","permalink":"/research/tags/architecture"}],"readingTime":0.38,"truncated":true,"authors":[{"name":"thegostep","title":"Product @Flashbots","url":"https://twitter.com/thegostep","imageURL":"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg","key":"thegostep"}],"prevItem":{"title":"Quantifying Realized Extractable Value","permalink":"/research/quantifying-rev"}}}]}')}}]);