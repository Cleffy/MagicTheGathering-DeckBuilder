const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Deck extends Model {}

Deck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    //     // cards: {
    //         type: DataTypes.ARRAY(DataTypes.STRING),

    //     },
    //     // userID: {
    //         type: DataTypes.INTEGER,
    //         references: {
    //             model: 'User',
    //             key: 'id'
    //         }
    //     }
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
