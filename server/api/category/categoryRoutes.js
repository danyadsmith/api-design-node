var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
  .get(function(req, res, next){
    logger.log('Hey from category!!');
    return next(new Error('ERROR: messed up...'));
    res.send({ok: true});
  });

module.exports = router;
