const router = require('express').Router();
const { Card, Deck, User } = require('../../models');

// GET all collections
router.get('/', async (request, response) => {
    try{
        const deckData = await Deck.findAll({
            include: [{ model: Card }, { model: User }]
        })
        response.status(200).json(deckData);
    }
    catch(error){
        response.status(500).json(error);
    }
});
// GET a deck by id
router.get('/:id', async (request, response) => {
    try{
        const deckData = await Deck.findByPk(request.params.id, {
            include: [{ model: Card }, { model: User }]
        })

        if(!deckData){
            response.status(404).json({ message: 'No deck exists with that id!'});
        }
        response.status(200).json(deckData);
    }
    catch(error){
        response.status(500).json(error);
    }
});

// CREATE new deck
router.post('/', async (request, response) => {
    try{
            const deckData = await Deck.create({
                userID: request.body.userID
            });
            response.status(200).json(deckData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

// DELETE a deck by id
router.delete('/:id', async (request, response) => {
    try{
        const deckData = await Deck.destroy({
            where: {
                id: request.params.id
            }
        });

        if(!deckData){
            response.status(404).json({ message: 'No deck exists with that id!'});
        }
        response.status(200).json(deckData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;