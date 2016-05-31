var express = require('express');
var harp = require('harp');
var app = express();
var harpMiddleware = require('./node_modules/harp/lib/middleware');
var path = require('path');
var logger = require('./lib/logger');
var config = require('config');
var serverConfig = config.get('server');

// Default server configuration in case
// no config files are present
var defaultServerConfig = {
  serveUnderscores: true,
  appRoot: 'src/',
  port: 9000
};

module.exports = createApp;

/**
 * Create express application
 *
 * @param options
 * @returns {*}
 */
function createApp (options) {

  // Merge configuration with server defaults
  config.util.extendDeep(defaultServerConfig, options)
  config.util.setModuleDefaults('server', defaultServerConfig);

  var appRoot = path.resolve(__dirname, serverConfig.appRoot);

  /**************************************************************************
   * Ignore files if needed
   *************************************************************************/

  if(serverConfig.serveUnderscores !== true){
    app.use(harpMiddleware.underscore);
  }

  /**************************************************************************
   * Configure logger
   *************************************************************************/

  app.use(logger());

  /**************************************************************************
   * Serve static assets
   *************************************************************************/

  app.use(express.static(appRoot));

  /**************************************************************************
   * Let harp serve application
   *************************************************************************/

  app.use(harp.mount(appRoot));

  /**************************************************************************
   * Handle unfound .js, .js.map and .css requests with 404
   * to prevent html from being returned by catch all
   *************************************************************************/

  app.all(/.*\.(js|css|js\.map)$/i, function(req, res, next){
    res.status(404).send('Not Found');
  });

  /**************************************************************************
   * Let 200.jade catch all other requests
   *************************************************************************/

  app.use(harpMiddleware.fallback);

  return app;
}

/**
 * Start the application if module is called
 * directly and not required by other module
 */
if(require.main === module){
  var server = createApp();
  var port = serverConfig.port;
  server.listen(port, function(){
    console.log('Angular Express running on port %s', port);
  });
}






