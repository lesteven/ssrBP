import express from 'express';
import { handleRender } from './ssr/ssrFunctions';
import serverSetup from './setup/serverSetup';

const debug = require('debug')('http');

const app = express();

serverSetup(app);

// react
app.use(handleRender);


if (app.get('env') === 'development') {
  debug('Development mode!');
} else {
  debug('Production mode!');
}


export default app;
