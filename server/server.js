console.log('express server file reading');
import Express from 'express';
import compression from 'compression';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';

import serverConfig from './config';

// Webpack Requirements
import { webpackMiddleware, webpackHotMiddleware } from './middleware/webpackMiddleware';
console.log('imported webpackMiddleware');

// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  console.log('running in dev mode');
  app.use(webpackMiddleware);
  app.use(webpackHotMiddleware);
}

app.use(compression());
app.use(Express.static(path.resolve(__dirname, '../dist')));
app.use(morgan('dev'));

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Duff Boods is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
