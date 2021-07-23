import { ethers } from 'ethers';
import { models, startMongo } from '../mongo/config';
import { checksum, nowMs, timeout, _log } from '../configs/utils';
import { provider1 } from '../web3/providers';
import { savePools } from '../mongo/savePools';

const serverName = 'initPools';
const { g } = models;

const factoryv2 = checksum('0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73');
const pairCreated = ethers.utils.id('PairCreated(address,address,address,uint256)');

const startServer = () => {
  _log.start('---> startServer ', serverName);
  startAddPools();
};

startMongo(serverName).then((started) => {
  if (started) {
    startServer();
  } else {
    _log.error('---> started ', serverName, started);
  }
});

const startAddPoolsGet = async (fromBlock: any, lastBlock: any, dex: string, factory: any, filterTopics: any) => {
  try {
    _log.info('startAddPoolsGet fromBlock lastBlock dex', fromBlock, lastBlock, dex);
    const toBlock = fromBlock + 100000;
    const filter = {
      address: factory,
      fromBlock,
      toBlock: toBlock >= lastBlock ? 'latest' : toBlock,
      topics: [filterTopics]
    };
    const result = await provider1.getLogs(filter);

    if (result)
      for (const r of result) {
        const data = r.data;
        const topics = r.topics;
        const t0 = checksum('0x' + topics[1].slice(66 - 40, 112));
        const t1 = checksum('0x' + topics[2].slice(66 - 40, 112));
        const address = checksum('0x' + data.slice(130 - 40, 130));
        const v2Address = checksum('0x' + data.slice(26, 66));
        const transactionHash = r.transactionHash;
        const p = {
          address: v2Address,
          hashAddress: v2Address,
          t0,
          t1,
          transactionHash,
          timestampTx: nowMs(),
          blockNumber: r.blockNumber,
          isV2: dex === 'v2',
        };
        savePools(p);
        await timeout(10);
      }
    if (toBlock <= lastBlock) {
      await startAddPoolsGet(toBlock, lastBlock, dex, factory, filterTopics);
    } else {
      _log.ready('startAddPoolsGet DONE', toBlock, lastBlock, dex);
    }
  } catch (e) {
    _log.error(e);
  }
  return;
};

const startAddPools = async () => {
  try {
    const lastBlock = await provider1.getBlockNumber();

    const pv2 = await g.pools.findOne({ isV2: true }, null, { sort: { blockNumber: -1 } });

    let iv2 = 10000835;

    if (pv2) {
      iv2 = pv2.blockNumber;
    }

    await startAddPoolsGet(iv2, lastBlock, 'v2', factoryv2, pairCreated);
  } catch (e) {
    _log.error(e);
  }
};

export { startAddPools as fetchNewPools };
