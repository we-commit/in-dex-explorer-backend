import { _log } from '../../../utils/configs/utils';
import { ITrojanTx } from '../../../models/TransactionSchema';

export const getMempoolData = async (tx: ITrojanTx, tokens: Array<any>, dexSpace: string) => {
  try {
    const { value, mempoolData } = tx;
    const { decodedData, } = mempoolData;

    const amountIn = decodedData['amountIn'] || decodedData['amountInMax'] || value;
    const amountOut = decodedData['amountOut'] || decodedData['amountOutMin'];

    if (amountIn && amountOut) {
      const tl = tokens.length - 1;
      const t0 = tokens[0];
      const t1 = tokens[tl];

      return {
        amountIn: amountIn.toString(),
        amountOut: amountOut.toString(),
        input: t0,
        output: t1,
        tokens
      };
    }
  } catch (e: any) {
    _log.error('getMempoolData catch', dexSpace, tx.hash, e);
  }
  return null;
};
