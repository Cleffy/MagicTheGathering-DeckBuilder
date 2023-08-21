const User = require('./user');
const Card = require('./card');
const Collection = require('./collection');
const Deck = require('./deck');
const Library = require('./library');


//User has a collection of cards
User.hasOne(Collection, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});
Collection.belongsTo(User, {
    foreignKey: 'userID',
});
//User has many decks
User.hasMany(Deck, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});
Deck.belongsTo(User, {
    foreignKey: 'userID',
});

//Collections have many cards
Collection.belongsToMany(Card, { through: 'CardCollections' });
Card.belongsToMany(Collection, { through: 'CardCollections' });

//Decks have many cards
Deck.belongsToMany(Card, { through: 'CardDecks' });
Card.belongsToMany(Deck, { through: 'CardDecks' });

//Libraries have many cards
Library.belongsToMany(Card, { through: 'CardLibraries' });
Card.belongsToMany(Library, { through: 'CardLibraries' });

module.exports = { User, Card, Collection };