import 'dotenv/config';
import consola from 'consola';
import { ethers } from 'ethers';

const _log = consola;

const checksum = ethers.utils.getAddress;

const timeout = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const nowMs = () => {
  return new Date().getTime();
};

const nowDate = () => {
  return new Date();
};

const ATLAS_STRING_1 = process.env.ATLAS_STRING_1 || '';
const DB_USER = process.env.DB_USER || '';
const DB_PW = process.env.DB_PW || '';
const ATLAS_STRING_2 = process.env.ATLAS_STRING_2 || '';
const COLLECTION_PREFIX = process.env.COLLECTION_PREFIX || '';
const ATLAS_PARAMS = process.env.ATLAS_PARAMS || '';

const ENV = {
  ATLAS_STRING: ATLAS_STRING_1 + DB_USER + ':' + DB_PW + ATLAS_STRING_2 + COLLECTION_PREFIX + ATLAS_PARAMS,
  COLLECTION_PREFIX,
  CORS_ORIGIN: process.env.CORS_ORIGIN || '',
  ES_TX: 'https://bscscan.com/tx/',
  ES_ADDRESS: 'https://bscscan.com/address/',
  ES_BLOCK: 'https://bscscan.com/block/'
};

const KEYS = {
  PROVIDER_1_WS: process.env.PROVIDER_1_WS || '',

  GAS_STATION_API_URL: process.env.GAS_STATION_API_URL || '',
  GAS_STATION_API_OPT: {},
  BLOCKNATIVE_API_URL: process.env.BLOCKNATIVE_API_URL || '',
  BLOCKNATIVE_API_OPT: {
    headers: { Authorization: process.env.BLOCKNATIVE_API_KEY || '' }
  },
  INFURA_KEY1: process.env.INFURA_KEY1 || '',
  INFURA_KEY2: process.env.INFURA_KEY2 || '',
  INFURA_KEY3: process.env.INFURA_KEY3 || '',
  INFURA_KEY4: process.env.INFURA_KEY4 || '',
  ALCHEMY_KEY1: process.env.ALCHEMY_KEY1 || '',
  ALCHEMY_KEY2: process.env.ALCHEMY_KEY2 || '',
  ETHERSCAN_KEY: process.env.ETHERSCAN_KEY || '',
  ETHERSCAN_KEY2: process.env.ETHERSCAN_KEY2 || '',
  POKT_KEY: process.env.POKT_KEY || ''
};

const ROUTERS = {
  UNIV2: checksum(process.env.UNIV2 || ''),
};

const TOKEN_LIST_ALL = Array<string>(
  process.env.WRAPPED || '',
  process.env.YEARN || '',
  process.env.ROLL || '',
  process.env.SUSHISWAP || '',
  process.env.ONE_INCH || '',
  process.env.COINGECKO || '',
  process.env.COMPOUND || '',
  process.env.DEFIPRIME || '',
  process.env.MESSARI || '',
  process.env.OPYN || '',
  process.env.SNX || '',
  process.env.SET || '',
  process.env.AVE || '',
  process.env.AGORA || '',
  process.env.CMCDEFI || '',
  process.env.CMCSTABLECOIN || '',
  process.env.CMC200ERC20 || '',
  process.env.KLEROS || '',
  process.env.FURUCOMBO || '',
  process.env.KYBER || '',
  process.env.MYCRYPTOAPI || '',
  process.env.ZAPPER || '',
  process.env.UMA || '',
  process.env.BAZAR || '',
  process.env.ZERION || ''
);

export { ENV, ROUTERS, KEYS, TOKEN_LIST_ALL, nowDate, nowMs, timeout, _log, checksum };
