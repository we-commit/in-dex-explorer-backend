import { providers } from 'ethers';
import { KEYS, _log } from '../configs/utils';

const network = {
    name: 'homestead',
    chainId: 1,
};

const { INFURA_KEY1, INFURA_KEY2, INFURA_KEY3, ALCHEMY_KEY1, ETHERSCAN_KEY1, ETHERSCAN_KEY2, POKT_KEY, GET_BLOCK_KEY } = KEYS;

const { WebSocketProvider, EtherscanProvider, FallbackProvider, PocketProvider } = providers;

const mainWs1 = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY1, network);
const mainWs2 = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY2, network);
const mainWs3 = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY3, network);
const alche = new WebSocketProvider('wss://eth-mainnet.alchemyapi.io/v2/' + ALCHEMY_KEY1, network);

const escan = new EtherscanProvider(network, ETHERSCAN_KEY1);
const linkpool = new WebSocketProvider("wss://main-rpc.linkpool.io/ws", network);
const getblock = new WebSocketProvider('wss://eth.getblock.io/mainnet/?api_key=' + GET_BLOCK_KEY, network);

const fallbackConfigsP: Array<any> = [
    { provider: getblock, priority: 1, stallTimeout: 2500, weight: 2 },
    { provider: linkpool, priority: 2, stallTimeout: 1000, weight: 2 },
    { provider: escan, priority: 3, stallTimeout: 1000, weight: 2 },
];
const fallbackProviderP = new FallbackProvider(fallbackConfigsP, 1);

const pokt = new PocketProvider(network, POKT_KEY);
const escan2 = new EtherscanProvider(network, ETHERSCAN_KEY2);
const linkpool2 = new WebSocketProvider("wss://main-rpc.linkpool.io/ws", network);

const fallbackConfigsC: Array<any> = [
    { provider: linkpool2, priority: 1, stallTimeout: 2500, weight: 2 },
    { provider: pokt, priority: 2, stallTimeout: 1000, weight: 2 },
    { provider: escan2, priority: 3, stallTimeout: 1000, weight: 2 },

];
const fallbackProviderC = new FallbackProvider(fallbackConfigsC, 1);

export { fallbackProviderP, fallbackProviderC, mainWs1, mainWs2, mainWs3, alche };
