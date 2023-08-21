const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//Creates routes to API and View
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;