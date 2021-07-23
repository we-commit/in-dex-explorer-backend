import { Token } from '@uniswap/sdk-core';
import { checksum, _log } from '../configs/utils';
import { MAINNET } from '../../utils/web3/utils';
import { getContractData } from './getContractData';
import { models } from '../mongo/config';
import { saveToken, updateToken } from '../mongo/saveToken';

const newTokenUni = (data: any): Token | null => {
  try {
    if (data) return new Token(MAINNET, checksum(data.address), data.decimals, data.symbol, data.name);
  } catch (e: any) {}
  return null;
};

const getTokens = async (checkedPath: Array<string>, pName: string, dexSpace: string) => {
  try {
    if (checkedPath && pName && dexSpace) {
      let tks = [];

      for (const address of checkedPath) {
        if (!address) {
          _log.warn('getTokens bad checkedPath??', checkedPath);
          return null;
        } else {
          const t = await models.g.tokens.findOne({ address }, null, {});

          if (!t) {
            const contractToken = await getContractData(address);
            if (contractToken) {
              tks.push(newTokenUni(contractToken));
              saveToken(contractToken, pName, dexSpace);
            }
          } else {
            const tokenData = t._doc;
            if (dexSpace === 'v2') {
              tks.push(newTokenUni(tokenData));
              if (tokenData.isV2 === false) {
                updateToken(tokenData, pName, dexSpace);
              }
            }
          }
        }
      }
      if (tks.length === checkedPath.length) {
        return tks;
      } else {
        _log.warn('getTokens tks.length === checkedPath.length', tks.length === checkedPath.length);
      }
    } else {
      _log.error('getTokens data error', checkedPath, pName, dexSpace);
    }
  } catch (e: any) {
    _log.error('getTokens catch', e.message);
  }
  return null;
};

export { getTokens, newTokenUni };
