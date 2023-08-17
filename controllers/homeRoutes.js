const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (request, response) => {
    response.render('home');
});
router.get('/deckBuilder', (request, response) => {
    response.render('deckBuilder');
});
//TODO: get login status
//TODO: redirect to login if not logged in

//TODO: if logged in redirect to home

module.exports = router;