const router = require('express').Router();
const { withAuth , withAdmin } = require('../utils/auth');

//Home route
router.get('/', (request, response) => {
    response.render('home');
});
//DeckBuilder route
router.get('/deckBuilder', withAuth, (request, response) => {
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
router.get('/importData', withAdmin, async (request, response) => {
    response.render('importData');
});

module.exports = router;