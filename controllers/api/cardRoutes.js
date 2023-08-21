const router = require("express").Router();
const { Card } = require("../../models");


//Get cards from standard format
router.get("/format/standard", async (request, response) => {
    try {
        const cardData = await Card.findAll({
            where: {standard : true}
        });
        response.status(200).json(cardData);
    } catch (error) {
        response.status(400).json(error);
    }
});
// GET a user by id
router.get('/:id', async (request, response) => {
  try {
      const cardData = await Card.findOne({
          where: {id : request.params.id}
      });
      if (!cardData) {
        response.status(404).json({ message: 'No card with this id!' });
        return;
      }
      response.status(200).json(cardData);
  } catch (error) {
      response.status(500).json(error);
  }
});

//Create new card
router.post("/", async (request, response) => {
    try {
        console.log(request.body);
        const cardData = await Card.create(request.body);
        response.status(200).json(cardData);
    } catch (error) {
        response.status(400).json(error);
    }
});

module.exports = router;
