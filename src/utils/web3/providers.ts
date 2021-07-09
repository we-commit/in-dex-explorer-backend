import { providers } from 'ethers';
import { KEYS, _log } from '../configs/utils';

const { ALCHEMY_KEY1, ALCHEMY_KEY2, QUICKNODE_API_WS, INFURA_KEY1, INFURA_KEY2, INFURA_KEY3, ETHERSCAN_KEY, ETHERSCAN_KEY2 } = KEYS;
const { WebSocketProvider, EtherscanProvider } = providers;

const qnProviderWs = new WebSocketProvider(QUICKNODE_API_WS, 'homestead');
const infuraWsPending = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY3, 'homestead');
const infuraWsConfirmed = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY2, 'homestead');
const infuraWsBlocks = new WebSocketProvider('wss://mainnet.infura.io/ws/v3/' + INFURA_KEY3, 'homestead');
const alProvider = new WebSocketProvider('wss://eth-mainnet.ws.alchemyapi.io/v2/' + ALCHEMY_KEY1, 'homestead');
const alProvider2 = new WebSocketProvider('wss://eth-mainnet.ws.alchemyapi.io/v2/' + ALCHEMY_KEY2, 'homestead');

const esProvider = new EtherscanProvider('homestead', ETHERSCAN_KEY);
const esProvider2 = new EtherscanProvider('homestead', ETHERSCAN_KEY2);

export { qnProviderWs, infuraWsBlocks, infuraWsPending, infuraWsConfirmed, esProvider2, esProvider, alProvider, alProvider2 };
