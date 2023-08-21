const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

/**
 * @class Deck
 * @param id
 * @param name
 * @param userID
 * 
 * Holds the cards information composing a deck.
 * May add number of views/likes
 */
class Deck extends Model {
}

Deck.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        //User foriegn ID
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "deck",
  }
);

module.exports = Deck;
