const router = require('express').Router();
const { Card, Collection, User } = require('../../models');

// GET all collections
router.get('/', async (request, response) => {
    try{
        const collectionData = await Collection.findAll({
            include: [{ model: Card }, { model: User }]
        })
        response.status(200).json(collectionData);
    }
    catch(error){
        response.status(500).json(error);
    }
});
// GET a collection by id
router.get('/:id', async (request, response) => {
    try{
        const collectionData = await Collection.findByPk(request.params.id, {
            include: [{ model: Card }, { model: User }]
        })

        if(!collectionData){
            response.status(404).json({ message: 'No collection exists with that id!'});
        }
        response.status(200).json(collectionData);
    }
    catch(error){
        response.status(500).json(error);
    }
});

// CREATE new collection
router.post('/', async (request, response) => {
    try{
            const collectionData = await Collection.create({
                userID: request.body.userID
            });
            response.status(200).json(collectionData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

// DELETE a collection by id
router.delete('/:id', async (request, response) => {
    try{
        const collectionData = await Collection.destroy({
            where: {
                id: request.params.id
            }
        });

        if(!collectionData){
            response.status(404).json({ message: 'No collection exists with that id!'});
        }
        response.status(200).json(collectionData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;