const router = require('express').Router();
const { Collection } = require('../../models');

//Create new collection
router.post('/', async (request, response) => {
    try{
            console.log(request.body);
            const collectionData = await Collection.create(request.body);
            response.status(200).json(collectionData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;