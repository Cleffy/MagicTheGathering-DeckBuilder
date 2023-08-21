const router = require('express').Router();
const { Card, Library } = require('../../models');

// GET all collections
router.get('/', async (request, response) => {
    try{
        const libraryData = await Library.findAll({
            include: [{ model: Card }]
        })
        response.status(200).json(libraryData);
    }
    catch(error){
        response.status(500).json(error);
    }
});
// GET a library by id
router.get('/:id', async (request, response) => {
    try{
        const libraryData = await Library.findByPk(request.params.id, {
            include: [{ model: Card }]
        })

        if(!libraryData){
            response.status(404).json({ message: 'No library exists with that id!'});
        }
        response.status(200).json(libraryData);
    }
    catch(error){
        response.status(500).json(error);
    }
});

// CREATE new library
router.post('/', async (request, response) => {
    try{
            const libraryData = await Library.create(request.body);
            response.status(200).json(libraryData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

// DELETE a library by id
router.delete('/:id', async (request, response) => {
    try{
        const libraryData = await Library.destroy({
            where: {
                id: request.params.id
            }
        });

        if(!libraryData){
            response.status(404).json({ message: 'No library exists with that id!'});
        }
        response.status(200).json(libraryData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;