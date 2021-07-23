import { _log, ROUTERS } from '../../utils/configs/utils';
import { iUniV2Router } from '../../utils/web3/abis-interfaces';
import { TransactionResponse } from '@ethersproject/abstract-provider';
import { handleSwap as handleSwapV2 } from './_v2/handleSwap';
import { checkTx } from '../../utils/web3/checkTxs';

const dexSpacev2 = 'v2';

export const proccessPending = async (tx: TransactionResponse, whaleData: any, directConfirm: boolean) => {
  try {
    const isUniSpaceV2 = tx.to === ROUTERS.UNIV2;

      let parsedTx = null;
      let dexSpace = null;

      if (isUniSpaceV2) {
        parsedTx = iUniV2Router.parseTransaction(tx);
        dexSpace = dexSpacev2;
      }

      if (parsedTx && dexSpace) {
        const txMethod = parsedTx.functionFragment.name;

        if (txMethod.includes('swap')) {
          const nTx = {
            ...checkTx(tx, whaleData, isUniSpaceV2, false, false),
            mempoolData: { txMethod, decodedData: parsedTx.args, checkedPath: parsedTx.args['path'] }
          };
          handleSwapV2(nTx, dexSpace, directConfirm);
        }
      } else {
        _log.warn(`proccessPending cant parse tx?`, tx.hash);
      }
  } catch (e: any) {
    _log.error(`proccessPending catch`, e.message, tx.hash);
  }
  return;
};
