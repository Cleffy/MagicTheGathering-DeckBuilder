const router = require('express').Router();
const { Card } = require('../../models');

//const mtg = require('mtgsdk')
/*
mtg.card.find('', (result, request))
.then(result => {
    console.log(result.card.name) 
})

mtg.set.find()
.then(result => {
    console.log(result.set.name) 
})
*/
//Create new card
router.post('/', async (request, response) => {
    try{
            console.log(request.body);
            const cardData = await Card.create(request.body);
            response.status(200).json(cardData);
    }
    catch(error){
        response.status(400).json(error);
    }
});

module.exports = router;