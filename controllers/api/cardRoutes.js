const router = require("express").Router();
const { Card } = require("../../models");

router.get("/", async (req, res) => {
  try {
    console.log(request.body);
    const cardData = await Card.findAll(request.body);
    response.status(200).json(cardData);
  } catch (error) {
    response.status(400).json(error);
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
