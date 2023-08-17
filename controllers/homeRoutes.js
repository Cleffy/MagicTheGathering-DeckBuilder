const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//Home route
router.get('/', (request, response) => {
    response.render('home');
});
//DeckBuilder route
router.get('/deckBuilder', (request, response) => {
    response.render('deckBuilder');
});
//DeckViewer route
router.get('/deckViewer', (request, response) => {
    response.render('deckViewer');
});

module.exports = router;