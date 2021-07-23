import { startMongo, models } from './utils/mongo/config';
import { provider1 } from './utils/web3/providers';
import { _log, timeout } from './utils/configs/utils';
import { getPendingTxResponseC } from './utils/web3/getTransactions';
import { proccessPending as pendingTx_uni_sushi } from './swapsDecoders/_uni_sushi/pending';
import { trashToconfirm } from './utils/mongo/saveConfirmed';

const { g } = models;
const { whales } = g;
const serverName = 'qnConfirmed';
const SwapV2 = ['0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822', '0x00000000000000000000000010ed43c718714eb63d5aa57b78b54704e256024e'];

let whalesCache = new Array<any>();

startMongo(serverName).then(async (started) => {
  await timeout(5000);

  if (started) {
    whales.find({}, null, {}, (e, docs) => {
      if (!e) whalesCache = docs;
    });
    await timeout(2000);

    _log.start('SwapV2 listenRouter Go!');
    listenRouter(SwapV2, true);
  } else {
    _log.error('---> started ', started);
  }
});

const listenRouter = async (arrayFilter: Array<any>, isV2: boolean) => {
  try {
    const topicsFilter = {
      topics: arrayFilter
    };

    provider1.on(topicsFilter, async (data) => {

      const hash = data.transactionHash;

      const knownTx_g_ = await g.trash.findOne({ hash }, null, {});
      if (knownTx_g_) {
        const knownTx_g = knownTx_g_._doc;
        let nTx = { ...knownTx_g };
        delete nTx._id;
        trashToconfirm(nTx, {}, serverName);
        return;
      } else {
      const tx = await getPendingTxResponseC(hash);
      if (tx) {
        const whaleData = whalesCache.find((w) => (w ? w.address.toLowerCase() === tx.from.toLowerCase() : false));
        pendingTx_uni_sushi(tx, whaleData, true);
      } else {
        _log.error('getPendingTxResponseC ', hash, 'not found confirmed tx?');
      }
      }
    });
  } catch (e: any) {
    _log.error('listen V2 catch ', e);
  }
  return;
};
