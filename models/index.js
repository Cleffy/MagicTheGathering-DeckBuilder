const User = require('./user');
const Card = require('./card');
const Collection = require('./collection');
const Deck = require('./deck');
const Library = require('./library');

User.hasOne(Collection, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});
Collection.belongsTo(User, {
    foreignKey: 'userID',
});
User.hasMany(Deck, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});
Deck.belongsTo(User, {
    foreignKey: 'userID',
});

Collection.belongsToMany(Card, { through: 'CardCollections' });
Card.belongsToMany(Collection, { through: 'CardCollections' });

Deck.belongsToMany(Card, { through: 'CardDecks' });
Card.belongsToMany(Deck, { through: 'CardDecks' });

Library.belongsToMany(Card, { through: 'CardLibraries' });
Card.belongsToMany(Library, { through: 'CardLibraries' });

module.exports = { User, Card, Collection };