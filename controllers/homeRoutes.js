const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
//TODO add auth restriction to importData
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
//Registration route
router.get('/register', (request, response) => {
    response.render('register');
});
//ImportData route - requires admin access
router.get('/importData', (request, response) => {
    response.render('importData');
});

module.exports = router;