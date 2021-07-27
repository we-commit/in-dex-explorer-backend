import { _log } from '../configs/utils';
import { fallbackProviderC, fallbackProviderP } from './providers';

const getPendingTxResponse = async (hash: string, provider: any, _CP: string) => {
  try {
    const _txResponse = await getFromBackupProviders(hash, provider, _CP);
    return _txResponse;
  } catch (e: any) {
    _log.error('getPendingTxResponse catch ', hash);
  }
  return null;
};

const getFromBackupProviders = async (hash: string, provider: any, _CP: string) => {
  try {
    const txResponse = await goGetIt(provider, hash);
    if (txResponse) {
      const { to, from } = txResponse;
      if (to && from) {
        return txResponse;
      }
    }
  } catch (e: any) {
    if (e.message === "noNetwork") {
      const txResponse = await goGetIt(_CP === "P" ? fallbackProviderP : fallbackProviderC, hash);
      if (txResponse) {
        const { to, from } = txResponse;
        if (to && from) {
          return txResponse;
        }
      }
    }

  }
  return null;
};

const goGetIt = async (provider: any, hash: string) => {
  try {
    const _txResponse = await provider.getTransaction(hash);
    if (_txResponse) return _txResponse;
  } catch (e: any) {
    _log.info(e);
    throw new Error(e.event);
  }
  return null;
};

export { getPendingTxResponse };
