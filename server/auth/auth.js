var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var config = require('../config/config');
var checkToken = expressJwt({ secret: config.secrets.jwt });
var User = require('../api/user/userModel');

exports.decodeToken = function() {
  return function(req, res, next) {
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }
    checkToken(req, res, next);
  };
};

exports.getFreshUser = function() {
  return function(req, res, next) {
    User.findById({username: req.user._id})
      then(function (user) {
        if (!user) {
          delete req.user;
          res.status(401).send('Unauthorized');
          return;
        } else {
          req.user = user;
          next();
        }
      })
  }
};

exports.verifyUser = function() {
  return function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if (!username || !password) {
      res.status(400).send('You must provide a username and a password.');
      return;
    }

    User.findOne({username: username})
      .then(function (user) {
        if (!user) {
          res.status(401).send('There is no user with the given username.');
        } else {
          if (!user.authenticate(password)) {
            res.status(401).send('Incorrect password.');
          } else {
            req.user = user;
            next();
          }
        }
      })
  };
};

exports.signToken = function(id) {
  return jwt.sign(
    {_id: id},
    config.secrets.jwt,
    {expiresInMinutes: config.expireTime}
  );
};
