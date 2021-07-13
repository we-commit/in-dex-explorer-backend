import { exec } from 'child_process';
import 'dotenv/config';
import { _log } from '../configs/utils';

const callbackpew = (error: any, stdout: string, stderr: string) => {
  if (error) _log.info(error);
  if (stderr) _log.info(stderr);
  if (stdout) _log.info(stdout);
};

//HEROKU_APP_NAME_CONFIRMED_WORKER
exec('heroku config:set ATLAS_STRING_1=' + process.env.ATLAS_STRING_1 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ATLAS_STRING_2=' + process.env.ATLAS_STRING_2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ATLAS_PARAMS="' + process.env.ATLAS_PARAMS + '" -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set DB_USER=' + process.env.DB_USER + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set DB_PW=' + process.env.DB_PW + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set DB_NAME=' + process.env.DB_NAME + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set COLLECTION_PREFIX=' + process.env.COLLECTION_PREFIX + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set CORS_ORIGIN=' + process.env.CORS_ORIGIN + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set QUICKNODE_API_WS=' + process.env.QUICKNODE_API_WS + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set GAS_STATION_API_URL=' + process.env.GAS_STATION_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_URL=' + process.env.BLOCKNATIVE_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_KEY=' + process.env.BLOCKNATIVE_API_KEY + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY1=' + process.env.INFURA_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY2=' + process.env.INFURA_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY3=' + process.env.INFURA_KEY3 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY4=' + process.env.INFURA_KEY4 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY1=' + process.env.ALCHEMY_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY2=' + process.env.ALCHEMY_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY=' + process.env.ETHERSCAN_KEY + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY2=' + process.env.ETHERSCAN_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set POKT_KEY=' + process.env.POKT_KEY + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set UNIV2=' + process.env.UNIV2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set UNIV3=' + process.env.UNIV3 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);
exec('heroku config:set SUSHIV2=' + process.env.SUSHIV2 + ' -a ' + process.env.HEROKU_APP_NAME_CONFIRMED_WORKER, callbackpew);

//HEROKU_APP_NAME_PENDING_WORKER
exec('heroku config:set ATLAS_STRING_1=' + process.env.ATLAS_STRING_1 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ATLAS_STRING_2=' + process.env.ATLAS_STRING_2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ATLAS_PARAMS="' + process.env.ATLAS_PARAMS + '" -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set DB_USER=' + process.env.DB_USER + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set DB_PW=' + process.env.DB_PW + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set DB_NAME=' + process.env.DB_NAME + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set COLLECTION_PREFIX=' + process.env.COLLECTION_PREFIX + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set CORS_ORIGIN=' + process.env.CORS_ORIGIN + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set QUICKNODE_API_WS=' + process.env.QUICKNODE_API_WS + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set GAS_STATION_API_URL=' + process.env.GAS_STATION_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_URL=' + process.env.BLOCKNATIVE_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_KEY=' + process.env.BLOCKNATIVE_API_KEY + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY1=' + process.env.INFURA_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY2=' + process.env.INFURA_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY3=' + process.env.INFURA_KEY3 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY4=' + process.env.INFURA_KEY4 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY1=' + process.env.ALCHEMY_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY2=' + process.env.ALCHEMY_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY=' + process.env.ETHERSCAN_KEY + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY2=' + process.env.ETHERSCAN_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set POKT_KEY=' + process.env.POKT_KEY + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set UNIV2=' + process.env.UNIV2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set UNIV3=' + process.env.UNIV3 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);
exec('heroku config:set SUSHIV2=' + process.env.SUSHIV2 + ' -a ' + process.env.HEROKU_APP_NAME_PENDING_WORKER, callbackpew);

//HEROKU_APP_NAME_WEBSOCKET_WORKER
exec('heroku config:set ATLAS_STRING_1=' + process.env.ATLAS_STRING_1 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ATLAS_STRING_2=' + process.env.ATLAS_STRING_2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ATLAS_PARAMS="' + process.env.ATLAS_PARAMS + '" -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set DB_USER=' + process.env.DB_USER + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set DB_PW=' + process.env.DB_PW + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set DB_NAME=' + process.env.DB_NAME + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set COLLECTION_PREFIX=' + process.env.COLLECTION_PREFIX + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set CORS_ORIGIN=' + process.env.CORS_ORIGIN + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set QUICKNODE_API_WS=' + process.env.QUICKNODE_API_WS + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set GAS_STATION_API_URL=' + process.env.GAS_STATION_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_URL=' + process.env.BLOCKNATIVE_API_URL + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set BLOCKNATIVE_API_KEY=' + process.env.BLOCKNATIVE_API_KEY + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY1=' + process.env.INFURA_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY2=' + process.env.INFURA_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY3=' + process.env.INFURA_KEY3 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set INFURA_KEY4=' + process.env.INFURA_KEY4 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY1=' + process.env.ALCHEMY_KEY1 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ALCHEMY_KEY2=' + process.env.ALCHEMY_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY=' + process.env.ETHERSCAN_KEY + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set ETHERSCAN_KEY2=' + process.env.ETHERSCAN_KEY2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set POKT_KEY=' + process.env.POKT_KEY + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set UNIV2=' + process.env.UNIV2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set UNIV3=' + process.env.UNIV3 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
exec('heroku config:set SUSHIV2=' + process.env.SUSHIV2 + ' -a ' + process.env.HEROKU_APP_NAME_WEBSOCKET_WORKER, callbackpew);
