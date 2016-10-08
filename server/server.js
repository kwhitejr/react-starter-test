import Express from 'express';
import compression from 'compression';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import morgan from 'morgan';

// Webpack Requirements
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

// Import required modules
import serverConfig from './config';


// Initialize the Express App
const app = new Express();

// Run Webpack dev server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Duff Boods is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
});

export default app;
