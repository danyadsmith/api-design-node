var router = require('express').Router();
var logger = require('../../util/logger');

router.route('/')
  .get(function(req, res, next){
    logger.log('Hey from category!!');
    return next(new Error('ERROR: messed up...'));

module.exports = router;
