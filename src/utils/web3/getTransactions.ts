import { provider1 } from './providers';

import { timeout, _log } from '../configs/utils';

const getPendingTxResponse = async (hash: string) => {
  try {
    const _txResponse = await getFromBackupProviders(hash);
    return _txResponse;
  } catch (e: any) {
    _log.error('getPendingTxResponse catch ', hash, e.message);
  }
  return null;
};

const getPendingTxResponseC = async (hash: string) => {
  try {
    const _txResponse = await getFromBackupProvidersC(hash);
    return _txResponse;
  } catch (e: any) {
    _log.error('getPendingTxResponseC catch ', hash, e.message);
  }
  return null;
};

const getFromBackupProviders = async (hash: string) => {
  try {
    let txResponse = null;
    let who = 'null';
    txResponse = await goGetIt(provider1, hash, 'provider1');

    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    } else {
      if (!txResponse) {
        await timeout(1000);
        who = 'provider1';
        txResponse = await goGetIt(provider1, hash, who);
      }

      if (txResponse) {
        const { to, from } = txResponse;
        if (to && from) return txResponse;
      }
      _log.warn('getTransaction NEVER FOUND TX', hash);
    }
  } catch (e: any) {
    _log.error('getTransaction catch ', hash, e.message);
  }
  return null;
};

const getFromBackupProvidersC = async (hash: string) => {
  try {
    let txResponse = null;
    let who = 'null';
    txResponse = await goGetIt(provider1, hash, 'provider1');

    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    } else {
      if (!txResponse) {
        await timeout(1000);
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
      _log.warn('getTransactionC NEVER FOUND TX', hash);
    }
  } catch (e: any) {
    _log.error('getTransactionC catch ', hash, e.message);
  }
  return null;
};

const goGetIt = async (provider: any, hash: string, label: string) => {
  try {
    const _txResponse = await provider.getTransaction(hash);
    if (_txResponse) {
      return _txResponse;
    }
  } catch (e: any) {
    _log.warn('goGetIt getTransaction', label, hash, e.message);
  }
  return null;
};

export { getPendingTxResponse, getPendingTxResponseC };
