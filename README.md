# Backend Repo for Trojan Finance. (WIP)

An open source DEX explorer for Defi.

This repository consist of several scripts/workers/servers described in the following doc.

# Main scripts / workers / servers

- MongoDB: **The database is a mongo db cluster, that allows oplog reading to create a live websocket. The delay is low but can be improved a lot. Check the Atlas free tier** https://docs.atlas.mongodb.com/tutorial/deploy-free-tier-cluster/

- web: \_websocket-server.js: Websocket server web worker, used to expose data to the app in real time, reading the oplog from the mongo cluster.

- lm: listener-mempool.js: listen all incoming mempool txs and get their input data to decode swap txs information, writing it in a mongo db databse.

- lc: listener-confirmation.js listen all incoming blocks and get their txs data to decode confirm transactions, writing it in a mongo db databse.

- lcs: listener-commons.js it listen new blocks and get data from quicknode API, and gasnow, writing it in a mongo db databse.

## How it works.

Todo: IMAGE Diagram.

# Running.

Generate the .env file with all the data necesary as indicated in .sample-env file.

If you want to run this in heroku, check the set-heroku scripts, save some time.

## 1. Requirements

- Nodejs 14+

### Restrictions !! 🐶

- For now it works only for ethereum main net. but with a couple of changes should even work for bsc and pancake.

### 1.1 **Services Keys.**

- Atlas: Create an atlas mongo db cluster and get the connection information needed in .env
- Heroku: Create the apps to point the set-heroku script.
- Web3 providers: Get an api keys from the requiered providers in .env.

## 2. Check .sample-env

- Create a .env file and set your keys.

```
// Must be a mongodb cluster to oplog live updates.
ATLAS_STRING_1=mongodb://
// Fill this whith the appropiated section of the url, this is a sample
ATLAS_STRING_2=@cluster0-shard-00-00.url:port,cluster0-shard-00-01.url:port,cluster0-shard-00-02.url:port/
ATLAS_PARAMS=?authSource=**admin**&replicaSet=atlas-**id**-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true

DB_USER=DB_USER
DB_PW=DB_PW
DB_NAME=DB_NAME
COLLECTION_PREFIX=COLLECTION_PREFIX

// Main provider as the fastest and exact provider out there. Got a really good mempool.
MAIN_API_WS_URL="wss://MAIN_API_WS_URL"

// Get data from the gas prediction API, really cool feature and pretty much exact.
BLOCKNATIVE_API_KEY="KEY"

// To save calls from quicknode we use infura as first try to get TransactionResponse and TransactionReceipt.
// One provider for each worker.
INFURA_KEY1="KEY"
INFURA_KEY2="KEY"
INFURA_KEY3="KEY"
INFURA_KEY4="KEY"

// Some backup providers.
ALCHEMY_KEY1="KEY"
ALCHEMY_KEY2="KEY"
POKT_KEY="KEY"

// If it not in etherscan it doesnt exist. So these are used as final resource.
ETHERSCAN_KEY="KEY"
ETHERSCAN_KEY2="KEY"

// If you use heroku, this can save you a lot of time.
// Get the heroku cli and login to get access to your projects, once there, just run the **yarn set-heroku"
HEROKU_APP_NAME_CONFIRMED_WORKER="APP_NAME"
HEROKU_APP_NAME_PENDING_WORKER="APP_NAME"
HEROKU_APP_NAME_WEBSOCKET_WORKER="APP_NAME"

// Websocket server corst, should be at least limited to the app domain.
CORS_ORIGIN="*"
```

```
// Constants

GAS_STATION_API_URL="https://ethgasstation.info/api/ethgasAPI.json?"
BLOCKNATIVE_API_URL="https://api.blocknative.com/gasprices/blockprices"

// Routers to listen swap transactions.
UNIV2="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
UNIV3="0xE592427A0AEce92De3Edee1F18E0157C05861564"
SUSHIV2="0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F"


// Token Lists to init tokens cache.
WRAPPED="https://wrapped.tokensoft.eth.link/"
YEARN="https://yearn.science/static/tokenlist.json"
ROLL="https://app.tryroll.com/tokens.json"
SUSHISWAP="https://raw.githubusercontent.com/sushiswapclassic/token-list/master/sushiswap.tokenlist.json"
ONE_INCH="https://tokens.1inch.eth.link"
COINGECKO="https://tokens.coingecko.com/uniswap/all.json"
COMPOUND="https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json"
DEFIPRIME="https://defiprime.com/defiprime.tokenlist.json"
MESSARI="https://messari.io/tokenlist/messari-verified"
OPYN="https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json"
SNX="https://synths.snx.eth.link/"
SET="https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json"
AVE="https://tokenlist.aave.eth.link"
AGORA="https://datafi.theagora.eth.link"
CMCDEFI="https://defi.cmc.eth.link"
CMCSTABLECOIN="https://stablecoin.cmc.eth.link"
CMC200ERC20="https://erc20.cmc.eth.link"
KLEROS="https://t2crtokens.eth.link"
FURUCOMBO="https://cdn.furucombo.app/furucombo.tokenlist.json"
KYBER="https://api.kyber.network/tokenlist"
MYCRYPTOAPI="https://uniswap.mycryptoapi.com/"
ZAPPER="https://zapper.fi/api/token-list"
UMA="https://umaproject.org/uma.tokenlist.json"
BAZAR="https://raw.githubusercontent.com/EthereansOS/Organizations-Interface/master/bazar-tokens-list/dist/decentralizedFlexibleOrganizations.json"
ZERION="https://tokenlist.zerion.eth.link"

```

## 3. Runing init scripts

```
  "scripts": {
    // a format code tool to clear code
    "pretty": "prettier --config .prettierrc 'src/**/*.ts' --write",
    // the build proccess
  1  "build": "tsc",
    // a heroku script to set env
  2  "set-heroku": "ts-node ./src/utils/initServer/set-heroku.ts",
    // some init database script and fixtures, should only run once and locally
  3  "ci": "ts-node ./src/utils/initServer/create-indexes.ts",
  4  "it": "ts-node ./src/utils/initServer/init-tokens.ts",
    // not used rigth now but u can run it, will get all pool creations from factories, usefull to have pools info locally and
    // classify 1inchv2v3 and other dex agregators txs knowing the pools they interact before they get confirmed.
    "ip": "ts-node ./src/utils/initServer/init-pools.ts",
  5  "iw": "ts-node ./src/utils/initServer/init-whales.ts",
    // some dev utils to reset collections
    "dev-d-txs": "ts-node ./src/utils/dev-utils/drop-transactions.ts",
    "dev-r-txs": "ts-node ./src/utils/dev-utils/reset-transactions.ts",
    "dev-r-txc": "ts-node ./src/utils/dev-utils/reset-transactions-c.ts",
    "dev-r-txp`": "ts-node ./src/utils/dev-utils/reset-transactions-p.ts",
    "dev-r-t-h": "ts-node ./src/utils/dev-utils/reset-transactions-t-h.ts",
    "dev-r-pools": "ts-node ./src/utils/dev-utils/reset-pools.ts",
    "dev-r-blocks": "ts-node ./src/utils/dev-utils/reset-blocks.ts",
    "dev-r-tokens": "ts-node ./src/utils/dev-utils/reset-tokens.ts",
        // just a 1 line push with comment and branch, try: yarn acp <comment> <branch>
    "acp": "func() { git add --all && git commit -m ${1} && git push origin ${2} ;}; func",
    // development servers
    // start to get first block object
  6  "lcs": "ts-node-dev ./src/listener-commons.ts",
    // start mempool listen
  7  "lm": "ts-node-dev ./src/listener-mempool.ts",
    // start confirmation listener
  8  "lc": "ts-node-dev ./src/listener-confirmation.ts",
    // with all servers started and working, start the websocket
  9  "web": "ts-node-dev ./src/_websocket-server.ts"
  },
```

If runing over heroku you should use this. this will set all env to heroku apps based on your .env file.

```
"set-heroku": "ts-node ./src/utils/initServer/set-heroku.ts"
```

Create the mongodb tables and indexes as requiered. To ensure unique indexes and other props.

```
"ci": "ts-node ./src/utils/initServer/create-indexes.ts"
```

Import some known tokens from the public token lists. To get a tokens database with the most known tokens.

```
"it": "ts-node ./src/utils/initServer/init-tokens.ts"
```

Just a table to tag addreses and mark txs if the receiver or sender is a known address.

```
"ip": "ts-node ./src/utils/initServer/init-pools.ts",
```

All these steps are required, once ready let run the app backend services.

## 4. Start servers.

Start a pending mempool listener. used to get the new txs, filter by dex swap, and decode their input data as needed.

```
"lm": "ts-node-dev ./src/listener-mempool.ts",
```

Start a new block listener. To confirm pending and incoming txs.

```
"lc": "ts-node-dev ./src/listener-confirmation.ts",
```

Start some common but not less important tasks. As blocks information and clear cache tables.

```
"lcs": "ts-node-dev ./src/listener-commons.ts",
```

Start a ws api, connected to the mongo cluster oplog and uses socket.io rooms pattern to serve live data over a token in a dex.

Every time a tx its writen or modified in mongo, the oplog will inform that action and we can send updates to the websocket clients subscribed to a room.

```
"web": "ts-node-dev ./src/\_websocket-server.ts"
```

## 5- Check logs and your database.

Todo:

- MongoDB Compass.

- Local Run

- Heroku cli logs.

## 6- Front end app.

Connect the app interface to the websocket server. Follow Here. Todo: Link

# Contribute.

# License.
