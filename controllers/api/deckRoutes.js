const router = require("express").Router();
const Deck = require("../../models/deck");

// Get Deck Info
router.get("/", (req, res) => {
  Deck.findAll().then((deckInfo) => {
    console.log({findAllDecks: deckInfo})
    res.status(400).send("No decks found")
    res.json(deckInfo);
  });
});
//  Update Deck Info
router.put("/:deck_info", (req, res) => {
  Deck.update({
    deck_name: req.body.Deck_name,
    deck_description: req.body.Deck_description,
    deck_image: req.body.Deck_image,
  }).then(result => {
    console.log({update: result})
  }) ;
});
//TODO: Create Deck Info
// Delete Deck

router.delete("/:deck_info", (req, res) => {
  Deck.destroy({
    where: {
      deck_info: req.params.deck_info,
    },
  })
    .then((deletedDeck) => {
      res.json(deletedDeck);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
