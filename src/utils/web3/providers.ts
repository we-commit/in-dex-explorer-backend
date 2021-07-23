import { providers } from 'ethers';
import { KEYS, _log } from '../configs/utils';

const { PROVIDER_1_WS } = KEYS;
const { WebSocketProvider } = providers;

const provider1 = new WebSocketProvider(PROVIDER_1_WS);


export { provider1 };
