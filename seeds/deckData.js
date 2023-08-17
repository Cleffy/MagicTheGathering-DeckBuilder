const {Deck} = require('../models')

const deckData = [
    {
        name: 'someCard',
        complete: false,
    },
    {
        name: 'someCard1',
        complete: false,
    },
    {
        name: 'someCard2',
        complete: false,
    },
    {
        name: 'someCard3',
        complete: true,
    },
    {
        name: 'someCard4',
        complete: false,
    },
    {
        name: 'someCard5',
        complete: true,
    },
]

const seedDecks = () => Deck.bulkCreate(deckData)
module.exports = seedDecks;

