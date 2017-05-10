var config = require('../config/config');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// setup global middleware here

module.exports = function(app) {
  if (config.env === 'development') {
    app.use(morgan('dev'));
  }
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
