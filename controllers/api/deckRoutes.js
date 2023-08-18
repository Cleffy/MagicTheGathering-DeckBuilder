const router = require("express").Router();
const Deck = require("../../models/deck");

//TODO: Get Deck Info
router.get('/', (req, res) => {
    Deck.findAll().then((deckInfo) => {
        res.json(deckInfo);
    });
});
//TODO: Update Deck Info
router.put('/:deck_info', (req, res) => {
    Deck.update(
        {
            deck_name: req.body.Deck_name,
            deck_description: req.body.Deck_description,
            deck_image: req.body.Deck_image,
        }
    )
});
//TODO: Create Deck Info
//TODO: Delete Deck

router.delete('/:deck_info', (req, res) => {
     Deck.destroy({
      where: {
        deck_info: req.params.deck_info,
      },
    })
      .then((deletedBook) => {
        res.json(deletedBook);
      })
      .catch((err) => res.json(err));
  });

module.exports = router;
