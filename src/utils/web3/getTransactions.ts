import { esProvider, esProvider2, qnProviderWs, alProvider, alProvider2, infuraWsBlocks } from './providers';

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
    txResponse = await goGetIt(qnProviderWs, hash, 'qnProviderWs');

    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    } else {
      if (!txResponse) {
        await timeout(1000);
        who = 'qnProviderWs';
        txResponse = await goGetIt(qnProviderWs, hash, who);
      }
      if (!txResponse) {
        who = 'infuraWsBlocks';
        txResponse = await goGetIt(infuraWsBlocks, hash, who);
      }

      if (!txResponse) {
        who = 'alProvider';
        txResponse = await goGetIt(alProvider, hash, who);
      }

      if (!txResponse) {
        who = 'esProvider';
        txResponse = await goGetIt(esProvider, hash, who);
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
    txResponse = await goGetIt(qnProviderWs, hash, 'qnProviderWs');

    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    } else {
      if (!txResponse) {
        await timeout(1000);
        who = 'qnProviderWs';
        txResponse = await goGetIt(qnProviderWs, hash, who);
      }

      if (!txResponse) {
        who = 'infuraWsBlocks';
        txResponse = await goGetIt(infuraWsBlocks, hash, who);
      }

      if (!txResponse) {
        who = 'alProvider2';
        txResponse = await goGetIt(alProvider2, hash, who);
      }

      if (!txResponse) {
        who = 'esProvider2';
        txResponse = await goGetIt(esProvider2, hash, who);
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
