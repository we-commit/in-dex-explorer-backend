import { startMongo, models } from '../mongo/config';
import { _log } from '../configs/utils';

const serverName = 'resetPools';

startMongo(serverName).then((started) => {
  if (started) {
    startServer();
  } else {
    _log.error('---> started ', serverName, started);
  }
});

const startServer = () => {
  _log.start('---> startServer ', serverName);
  start();
};

const start = async () => {
  _log.start(serverName);
  await models.g.pools.deleteMany({}, {});
  _log.ready('done');
};
