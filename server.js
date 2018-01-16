var path = require('path');
const express = require('express');
const webpack = require('webpack');
//const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);


var devMiddleware = require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));
app.use(this.middleware = devMiddleware);

app.get('*', function(req, res) {
  /*eslint-disable */
  var index = this.middleware.fileSystem.readFileSync(path.join(config.output.path, 'index.html'));
  /*eslint-enable */
  res.end(index);
}.bind(this));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});