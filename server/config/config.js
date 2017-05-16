var _ = require('lodash');

// deafult config object for our api
var env = {
  /* just placing the name of our possible NODE_ENV values for later*/
  dev: 'development',
  test: 'testing',
  prod: 'production'
};

var config = {
  /* just placing the name of our possible NODE_ENV values for later*/
  port: process.env.PORT || 3000
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || env.dev;
// set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;

var envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require('./' + config.env);
  envConfig = envConfig || {};
}
catch(e) {
  envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);

