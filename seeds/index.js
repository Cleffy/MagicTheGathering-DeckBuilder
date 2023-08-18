const sequelize = require('../config/connection');
// const { User, Deck, Card, Collection, Ruleset } = require('../models');
const seedDecks = require('./deckData');

// const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //TODO: Add Seed Data Calls
  //TODO: Add Seed Data
  await seedDecks()
  console.log('decks seeded') 

  process.exit(0);
};

seedDatabase();