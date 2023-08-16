const User = require('./user');
const Deck = require('./deck');
const Card = require('./card');
const Collection = require('./collection');
const Ruleset = require('./ruleset');
const CollectionGroup = require('./collectionGroup');
const UserDecks = require('./userDecks');

//TODO: Add Belongs to info
//Cards: Many belongs to Deck
Card.belongsTo(Deck, {
    foreignKey: 'deckId', 
    onDelete: 'CASCADE',
})
//Cards: Many belongs to Collection
Card.belongsToMany(Collection,{
    through: CollectionGroup,
    foreignKey: 'cardId',
})
//Deck: Many belongs to User
Deck.belongsToMany(User,{
    through: UserDecks,
    foreignKey: 'deckId',
})
//Collection: Single belongs to User
Collection.belongsTo(User,{
    foreignKey: 'collectionId',
})

module.exports = { User, Deck, Card, Collection, Ruleset };