const User = require('./user');
const Deck = require('./deck');
const Card = require('./card');
const Collection = require('./collection');
const Ruleset = require('./ruleset');

//TODO: Add Belongs to info
//Cards: Many belongs to Deck
//Cards: Many belongs to Collection
//Deck: Many belongs to User
//Collection: Single belongs to User

module.exports = { User, Deck, Card, Collection, Ruleset };