const sequelize = require('../config/connection');
const { User, Deck, Card, Collection, Ruleset } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  //TODO: Add Seed Data Calls
  //TODO: Add Seed Data

  process.exit(0);
};

seedDatabase();