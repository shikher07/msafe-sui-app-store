export const config = {
  mainnet: {
    core: {
      version: '0x07871c4b3c847a0f674510d4978d5cf6f960452795e8ff6f189fd2088a3f6ac7',
      versionCap: '0x590a4011cb649b3878f3ea14b3a78674642a9548d79b7e091ef679574b158a07',
      object: '0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf',
      market: '0xa757975255146dc9686aa823b7838b507f315d704f428cbadad2f4ea061939d9',
      adminCap: '0x09689d018e71c337d9db6d67cbca06b74ed92196103624028ccc3ecea411777c',
      coinDecimalsRegistry: '0x200abe9bf19751cc566ae35aa58e2b7e4ff688fc1130f8d8909ea09bc137d668',
      obligationAccessStore: '0x733e30b7c94d619d78cb8f5bc4bfbb759ced9a531239028caabb2474e5be59c9',
      coins: {
        cetus: {
          id: '0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b',
          metaData: '0x4c0dce55eff2db5419bbd2d239d1aa22b4a400c01bbb648b058a9883989025da',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: 'e5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef',
              feedObject: '0x24c0247fb22457a719efac7f670cdc79be321b521460bd6bd2ccfa9f80713b14',
            },
          },
        },
        apt: {
          id: '0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37',
          metaData: '0xc969c5251f372c0f34c32759f1d315cf1ea0ee5e4454b52aea08778eacfdd0a8',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5',
              feedObject: '0x7c5b7837c44a69b469325463ac0673ac1aa8435ff44ddb4191c9ae380463647f',
            },
          },
        },
        sol: {
          id: '0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8',
          metaData: '0x4d2c39082b4477e3e79dc4562d939147ab90c42fc5f3e4acf03b94383cd69b6e',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: 'ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d',
              feedObject: '0x9d0d275efbd37d8a8855f6f2c761fa5983293dd8ce202ee5196626de8fcd4469',
            },
          },
        },
        btc: {
          id: '0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881',
          metaData: '0x5d3c6e60eeff8a05b693b481539e7847dfe33013e7070cdcb387f5c0cac05dfd',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: 'e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
              feedObject: '0x9a62b4863bdeaabdc9500fce769cf7e72d5585eeb28a6d26e4cafadc13f76ab2',
            },
          },
        },
        eth: {
          id: '0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5',
          metaData: '0x8900e4ceede3363bef086d6b50ca89d816d0e90bf6bc46efefe1f8455e08f50f',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: 'ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
              feedObject: '0x9193fd47f9a0ab99b6e365a464c8a9ae30e6150fc37ed2a89c1586631f6fc4ab',
            },
          },
        },
        usdc: {
          id: '0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf',
          metaData: '0x4fbf84f3029bd0c0b77164b587963be957f853eccf834a67bb9ecba6ec80f189',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: 'eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
              feedObject: '0x5dec622733a204ca27f5a90d8c2fad453cc6665186fd5dff13a83d0b6c9027ab',
            },
          },
        },
        usdt: {
          id: '0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c',
          metaData: '0xfb0e3eb97dd158a5ae979dddfa24348063843c5b20eb8381dd5fa7c93699e45c',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b',
              feedObject: '0x985e3db9f93f76ee8bace7c3dd5cc676a096accd5d9e09e9ae0fb6e492b14572',
            },
          },
        },
        sui: {
          id: '0x0000000000000000000000000000000000000000000000000000000000000002',
          metaData: '0x9258181f5ceac8dbffb7030890243caed69a9599d2886d957a9cb7656af3bdb3',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '0xbca474133638352ba83ccf7b5c931d50f764b09550e16612c9f70f1e21f3f594',
            pyth: {
              feed: '23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744',
              feedObject: '0x801dbc2f0053d34734814b2d6df491ce7807a725fe9a01ad74a07e9c51396c37',
            },
          },
        },
        afsui: {
          id: '0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc',
          metaData: '0x2f9217f533e51334873a39b8026a4aa6919497b47f49d0986a4f1aec66f8a34d',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744',
              feedObject: '0x801dbc2f0053d34734814b2d6df491ce7807a725fe9a01ad74a07e9c51396c37',
            },
          },
        },
        hasui: {
          id: '0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d',
          metaData: '0x2c5f33af93f6511df699aaaa5822d823aac6ed99d4a0de2a4a50b3afa0172e24',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744',
              feedObject: '0x801dbc2f0053d34734814b2d6df491ce7807a725fe9a01ad74a07e9c51396c37',
            },
          },
        },
        vsui: {
          id: '0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55',
          metaData: '0xabd84a23467b33854ab25cf862006fd97479f8f6f53e50fe732c43a274d939bd',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744',
              feedObject: '0x801dbc2f0053d34734814b2d6df491ce7807a725fe9a01ad74a07e9c51396c37',
            },
          },
        },
        sca: {
          id: '0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6',
          metaData: '0x5d26a1e9a55c88147ac870bfa31b729d7f49f8804b8b3adfdf3582d301cca844',
          treasury: '',
          oracle: {
            supra: '',
            switchboard: '',
            pyth: {
              feed: '7e17f0ac105abe9214deb9944c30264f5986bf292869c6bd8e8da3ccd92d79bc',
              feedObject: '0xf6de1d3279a269a597d813cbaca59aa906543ab9a8c64e84a4722f1a20863985',
            },
          },
        },
      },
      oracles: {
        xOracle: '0x93d5bf0936b71eb27255941e532fac33b5a5c7759e377b4923af0a1359ad494f',
        xOracleCap: '0x1edeae568fde99e090dbdec4bcdbd33a15f53a1ce1f87aeef1a560dedf4b4a90',
        supra: {
          registry: '',
          registryCap: '',
          holder: '',
        },
        switchboard: {
          registry: '',
          registryCap: '',
        },
        pyth: {
          registry: '0xedc293f9413a5a7a5d53bdba1fd889d0a4030894469228f0acdae4aa3c55a213',
          registryCap: '0xbcb07141eb1f7e01fbda4130ecf5f5adaeabb77f5d9c32158b7532bcd2197acd',
          state: '0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8',
          wormhole: '0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a',
          wormholeState: '0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c',
        },
      },
      packages: {
        coinDecimalsRegistry: {
          id: '0xca5a5a62f01c79a104bf4d31669e29daa387f325c241de4edbe30986a9bc8b0d',
          upgradeCap: '0x34e76a945d29f195bc53ca704fa70877d1cf3a5d7bbfdda1b13e633fff13c0f6',
        },
        math: {
          id: '0xad013d5fde39e15eabda32b3dbdafd67dac32b798ce63237c27a8f73339b9b6f',
          upgradeCap: '0x3a329598231de02e6135c62284b66005b41cad1d9ab7ca2dc79c08293aba2ec6',
        },
        whitelist: {
          id: '0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f',
          upgradeCap: '0xf5a22aea23db664f7b69855b6a546747f17c1ec4230319cfc17225e462b05761',
        },
        x: {
          id: '0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162',
          upgradeCap: '0x3f203f6fff6a69d151e4f1cd931f22b68c489ef2759765662fc7baf673943c9e',
        },
        protocol: {
          id: '0x38fe42a5a69f7eb3635404389e8003be9457b1a5c873f133184648c7e9bd47b7',
          upgradeCap: '0x38527d154618d1fd5a644b90717fe07cf0e9f26b46b63e9568e611a3f86d5c1a',
        },
        protocolWhitelist: {
          id: '0x4c262d9343dac53ecb28f482a2a3f62c73d0ebac5b5f03d57383d56ff219acdf',
          upgradeCap: '0x4a5e88a75039b00988f633f811f58117f31b8627a46bf822aa114d9010049449',
        },
        query: {
          id: '0xb8d603a39114a5efef3dd0bf84df0bed1be1fbd39b78b7dd6e8a61ccc5e6006f',
          upgradeCap: '0x0d535c35f608b9b01b7ccce11acf43b1dd80c1b72bf8b541744a6e28e8d2745f',
        },
        supra: {
          id: '',
          upgradeCap: '',
        },
        pyth: {
          id: '0x910f30cbc7f601f75a5141a01265cd47c62d468707c5e1aecb32a18f448cb25a',
          upgradeCap: '0xdf0ffbae1ea5bb25fbca5efba433dcf00c7cced65679af2f04728901275c6157',
        },
        switchboard: {
          id: '',
          upgradeCap: '',
        },
        xOracle: {
          id: '0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6',
          upgradeCap: '0x0f928a6b2e26b73330fecaf9b44acfc9800a4a9794d6415c2a3153bc70e3c1f0',
        },
        testCoin: {
          id: '',
          upgradeCap: '',
        },
      },
    },
    spool: {
      id: '0xec1ac7f4d01c5bf178ff4e62e523e7df7721453d81d4904a42a0ffc2686c843d',
      adminCap: '0xdd8a047cbbf802bfcde5288b8ef1910965d789cc614da11d39af05fca0bd020a',
      object: '0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a',
      pools: {
        seth: {
          id: '0xeec40beccb07c575bebd842eeaabb835f77cd3dab73add433477e57f583a6787',
          rewardPoolId: '0x957de68a18d87817de8309b30c1ec269a4d87ae513abbeed86b5619cb9ce1077',
        },
        ssui: {
          id: '0x4f0ba970d3c11db05c8f40c64a15b6a33322db3702d634ced6536960ab6f3ee4',
          rewardPoolId: '0x162250ef72393a4ad3d46294c4e1bdfcb03f04c869d390e7efbfc995353a7ee9',
        },
        susdc: {
          id: '0x4ace6648ddc64e646ba47a957c562c32c9599b3bba8f5ac1aadb2ae23a2f8ca0',
          rewardPoolId: '0xf4268cc9b9413b9bfe09e8966b8de650494c9e5784bf0930759cfef4904daff8',
        },
        susdt: {
          id: '0xcb328f7ffa7f9342ed85af3fdb2f22919e1a06dfb2f713c04c73543870d7548f',
          rewardPoolId: '0x2c9f934d67a5baa586ceec2cc24163a2f049a6af3d5ba36b84d8ac40f25c4080',
        },
        scetus: {
          id: '0xac1bb13bf4472a637c18c2415fb0e3c1227ea2bcf35242e50563c98215bd298e',
          rewardPoolId: '0x6835c1224126a45086fc6406adc249e3f30df18d779ca4f4e570e38716a17f3f',
        },
        safsui: {
          id: '0xeedf438abcaa6ce4d9625ffca110920592d5867e4c5637d84ad9f466c4feb800',
          rewardPoolId: '0x89255a2f86ed7fbfef35ab8b7be48cc7667015975be2685dd9a55a9a64baf76e',
        },
        shasui: {
          id: '0xa6148bc1b623e936d39a952ceb5bea79e8b37228a8f595067bf1852efd3c34aa',
          rewardPoolId: '0x6f3563644d3e2ef13176dbf9d865bd93479df60ccbe07b7e66db57f6309f5a66',
        },
        svsui: {
          id: '0x69ce8e537e750a95381e6040794afa5ab1758353a1a2e1de7760391b01f91670',
          rewardPoolId: '0xbca914adce058ad0902c7f3cfcd698392a475f00dcfdc3f76001d0370b98777a',
        },
      },
      version: '',
      versionCap: '',
    },
    borrowIncentive: {
      id: '0x874f1d43d81e2256e120bab2485938fe07ba0cc21d87129a99a1db11cacb382d',
      adminCap: '0xc486afa253646f4d381e81d7f1df8aa4723b845a6bb356f69bad635ffefffe2c',
      object: '0x002875153e09f8145ab63527bc85c00f2bd102e12f9573c47f8cdf1a1cb62934',
      query: '0x529edc54a3dce2207703ceebbccb0ac14133f7825c1f528775ba0d85a4063489',
      incentivePools: '0x6547e143d406b5ccd5f46aae482497de279cc1a68c406f701df70a05f9212ab4',
      incentiveAccounts: '0xc4701fdbc1c92f9a636d334d66012b3027659e9fb8aff27279a82edfb6b77d02',
      config: '0xdf5d04b4691cc67e82fd4db8394d89ff44823a9de29716c924f74bb4f11cc1f7',
      version: '',
      versionCap: '',
    },
    vesca: {
      id: '0xcfe2d87aa5712b67cad2732edb6a2201bfdf592377e5c0968b7cb02099bd8e21',
      adminCap: '0x4d105b16467acca81d18c132cdd1a3cee159920a86c1ef4bdbf2e8d7878500c5',
      tableId: '0x0a0b7f749baeb61e3dfee2b42245e32d0e6b484063f0a536b33e771d573d7246',
      table: '0xd3a4632b1080f7d96e1c2487d4dabf2c1196916937c505a69954ac9f393be8d0',
      treasury: '0xafa4b6231e49c15a22d641ce33fda761baaf650fa21899dfa2eb1716146e7306',
      config: '0x7cbcb0a342179577a117dfdff974cf1ab765d3b571067bf22ddf5f9e3a667922',
    },
  },
};