import { provider1 } from './providers';
import { timeout, _log } from '../configs/utils';

const getPendingTxReceipt = async (hash: string) => {
  try {
    const _txReceipt = await getFromProviders(hash);
    return _txReceipt;
  } catch (e: any) {
    _log.error('getTransactionReceipt catch ', hash, e);
  }
};

const getFromProviders = async (hash: string) => {
  try {
    let txResponse = null;
    let who = 'null';
    txResponse = await goGetIt(provider1, hash, who);

    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    } else {
      if (!txResponse) {
        await timeout(500);
        who = 'provider1';
        txResponse = await goGetIt(provider1, hash, who);
      }

      if (!txResponse) {
        who = 'provider1';
        txResponse = await goGetIt(provider1, hash, who);
      }

      if (txResponse) {
        const { to, from } = txResponse;
        if (to && from) return txResponse;
      }
      _log.warn('getTransactionReceipt RETRY HAS NEVER FOUND TX', hash);
    }
  } catch (e: any) {
    _log.error('getTransactionReceipt catch ', hash, e);
  }
  return null;
};

const goGetIt = async (provider: any, hash: string, label: string) => {
  try {
    const _txResponse = await provider.getTransactionReceipt(hash);
    if (_txResponse) return _txResponse;
  } catch (e: any) {
    _log.warn('goGetIt getTransactionReceipt', label, hash, e.message);
  }
  return null;
};

export { getPendingTxReceipt };
