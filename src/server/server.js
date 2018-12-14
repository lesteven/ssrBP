import app from './index';
import portNum from '../../port';

const debug = require('debug')('http');

const port = process.env.PORT || portNum;

app.listen(port, () => {
  debug(`Listening on port ${port}`);
});
