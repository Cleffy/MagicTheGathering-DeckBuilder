const router = require('express').Router();
const { Library } = require('../../models');

//Create new library
router.post('/', async (request, response) => {
    try{
            console.log(request.body);
            const libraryData = await Library.create(request.body);
            response.status(200).json(libraryData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;