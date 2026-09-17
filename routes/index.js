const router = require('express').Router();
//router.use('/', require('./swagger'));

router.use('/games', require('./games'));
router.use('/players', require('./players'));

module.exports = router;