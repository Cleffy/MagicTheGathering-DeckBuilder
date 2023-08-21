const router = require('express').Router();
const cardRoutes = require('./cardRoutes');
const collectionRoutes = require('./collectionRoutes');
const deckRoutes = require('./deckRoutes');
const libraryRoutes = require('./libraryRoutes');
const userRoutes = require('./userRoutes');

//Routes to use for individual models
router.use('/cards', cardRoutes);
router.use('/collections', collectionRoutes);
router.use('/decks', deckRoutes);
router.use('/libraries', libraryRoutes);
router.use('/users', userRoutes);

module.exports = router;