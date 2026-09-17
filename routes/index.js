const router = require('express').Router();
//router.use('/', require('./swagger'));

router.use('/games', require('./games'));

module.exports = router;