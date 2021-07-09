import { get } from 'https';
import { qnProviderWs, infuraWsBlocks } from './providers';
import { _log, timeout } from '../configs/utils';

const getBlock = async (number: number) => {
  try {
    const block = await getFromBackupProviders(number);
    return block;
  } catch (e: any) {
    _log.error('getBlock catch', number, e.message);
  }
};

const getFromBackupProviders = async (number: number) => {
  try {
    let blockResponse = null;
    let who = 'null';
    blockResponse = await goGetIt(qnProviderWs, number);

    if (blockResponse) {
      return blockResponse;
    } else {
      if (!blockResponse) {
        await timeout(500);
        who = 'infuraWsBlocks';
        blockResponse = await goGetIt(infuraWsBlocks, number);
      }

      if (!blockResponse) {
        who = 'qnProviderWs';
        blockResponse = await goGetIt(qnProviderWs, number);
      }

      if (blockResponse) {
        const { to, from } = blockResponse;
        if (to && from) {
          _log.success('RETRY OUT getBlock', who, number);
          return blockResponse;
        }
      }
      _log.warn('RETRY HAS NEVER FOUND getBlock', number);
    }
  } catch (e: any) {
    _log.error('getBlock catch ', number, e);
  }
  return null;
};

const goGetIt = async (provider: any, number: number) => {
  try {
    const _blockResponse = await provider.getBlock(number);
    if (_blockResponse) return _blockResponse;
  } catch (e: any) {}
  return null;
};

async function getBlockInfo(url: string, opts: any): Promise<any> {
  return new Promise((resolve) => {
    get(url, opts, (res) => {
      if (res) {
        let body = '';

        res.on('error', (e: any) => {
          _log.error(e.message);
          resolve(null);
        });

        res.on('data', (chunk) => {
          body += chunk;
        });

        res.on('end', () => {
          const responseData = JSON.parse(body);
          if (responseData) resolve(responseData);
          else resolve(null);
        });
      }
    }).on('error', (e: any) => {
      _log.error('Get getBlockInfo on error', e.message);
      resolve(null);
    });
  });
}

export { getBlockInfo, getBlock };
