var addresses = {
  // Pools
  '0x8429ab69b8721ffb29f2e66fdf06b1c65d66eb58': 'UbiqPool.io',
  '0xa5786b319685e77ab8514fcec26d75557afa5c38': 'UbiqPool.fr',
  '0x6febea2097f777af4ee701e9a09cef1551a397e1': 'UbiqPool.com',
  '0xaeb7897adf9b1309d7ef2dca6f3f6afb65358abd': 'MaxHash.org',
  '0xd9881bacbec51b831ef221f96c05e3891cd99544': 'Minerpool.net',
  '0x8f7120734c25ab63b2a59baeb63b063fec1ba7ff': 'UBQKings.com',
  '0x3cb1f80ad907d10d58896b64bfe2c2f7483c8337': 'HODLPool.com',
  '0xc759e1606051432d4eb3be7a6c34866c3bceca50': 'Millio.nz',
  '0x5eaba45c3962d1522d9ccb2200f0cb6e45e7bf99': 'Suprnova.cc',
  '0xd5bcc99b340504f670e47a04580c1e0cc7678d58': 'Coin-Miners.info',
  '0x19dd880fe54f2259ac0b6952850833afbe2d7b28': 'ALTpool.pro',
  '0xd144e30a0571aaf0d0c050070ac435deba461fab': 'Clona.ru',
  '0x81f87d1049d47cc772e6a4e9110817f0646ab411': 'Whalesburg.com',
  '0xf35074bbd0a9aee46f4ea137971feec024ab704e': 'Solopool.org',
  '0x4bdf392a77a498c3bfde9f8cc4ca45982cb06c72': 'Anorak.tech',
  '0x438cfa62edc703f4f0806e72082a02bf39bc0a1d': 'Ubiqminers.com',
  // Exchanges
  '0xb3c4e9ca7c12a6277deb9eef2dece65953d1c864': 'Bittrex',
  '0x57e0ebfade42211c8a4837ad1bb9c1c290ee265b': 'Einstein',
  '0x11e328fd0ee99a2c2f5e929a8f25afb94cecb660': 'ERC20 Exchange',
  // Other
  '0x2300b30dfd91306a5acfa8ae00a3a47d519303ee': 'Infinitum Card',
  '0xae3f04584446aa081cd98011f80f19977f8c10e0': 'Infinitum Flame',
  // Tokens
  '0xd245207cfbf6eb6f34970db2a807ab1d178fde6c': 'APX',
  '0xff3bf057adf3b0e015b6465331a6236e55688274': 'BeerToken',
  '0x79755ea6ccb143b0bd8e1b670efffd59ae874991': 'BettingWin',
  '0x0319b92eb57929684c27531da133b0d2bbf691af': 'Cauli',
  '0x08533d6a06ce365298b12ef92eb407cba8aa8273': 'CryptopiaFeeShare',
  '0x94ad7e41c1d44022c4f47cb1ba019fd1a022c536': 'Dotcoin',
  '0xcf3222b7fda7a7563b9e1e6c966bead04ac23c36': 'Escher',
  '0x105bbb0fd91329bec3f12546cbe7edfe624ec3ad': 'Giveaway',
  '0x500684ce0d4f04abedff3e54fcf8acc5e6cfc4bd': 'GeoCoin',
  '0x0826180a4c981d5095cb5c48bb2a098a44cf6f73': '10grans',
  '0x4b4899a10f3e507db207b0ee2426029efa168a67': 'Qwark',
  '0x5e1715bb79805bd672729760b3f7f34d6f485098': 'PickleRicks',
  '0x497e20586f86c35592ff8f65cde94f296514c387': 'Snarg01',
  '0xbc3e373d2b24faf1dfe5b3f3acff9d66a7b48869': 'WorldBit Token',
  // Contracts
  '0x256009e4687ab2183bbca3e4ea54ba6f0a7ad21e': 'ESCH Airdrop #1',
  '0x36ae3bdbbd19bc55f2fe3cccf41bf12c4c3afb42': 'ESCH Airdrop #2',
  '0xfcd0b547b89f001c17d50df98cf10ce406da5518': 'UIP #1',
  '0x96cf38c234d5e513c4fc783a3ba73d7320f2900b': 'UIP #2'
}

module.exports = {
  getAddressTag: function (hash) {
    if (addresses[hash]) {
      return addresses[hash]
    } else {
      return null
    }
  }
}
