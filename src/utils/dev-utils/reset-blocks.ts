import { startMongo, models } from '../mongo/config';
import { _log } from '../configs/utils';

const serverName = 'resetBlocks';

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
  await models.g.blocks.deleteMany({}, {});
  _log.ready('done');
};
