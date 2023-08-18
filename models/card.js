const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

/**this is a table for the information specific to each card
 * id- unique identifier for easy reference
 * name- the name of the card
 * spellType- the card's method of being played (instant, sorcery, creature, artifact, enchantment, land, planeswalker)
 * subType- a category or "tribe" the card belongs to (goblins, elves, vehicles, equipment, etc.)
 * color- the 5 "flavors" of mana used for playing cards. (white-W, blue-U, black-B, red-R, green-G)
 * manaCost- the total of required mana to play the card.
 * ability- anything written in the text area of the card. this describes mechanical function within the game.
 * flavorText- additional text in the text area pertaining to the game's lore and having no mechanical function.
 * power- the force with which a creature damages its opposition.
 * toughness- force required to slay a creature.
 * image- artistic interpretation of the cared.
 * rarity- the arbitrary valuation of a card.
 * set- a group of cards released together.
 * artist- the specific human acknowledged as having created the image on the card.
 * supertype- the legendary quality imparts certain mechanical restrictions. otherwise: basic.
 * 
 */
class Card extends Model {
}

Card.init(
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
        spellType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subTypes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        },
        manaCost: { 
            type: DataTypes.STRING,
            allowNull: true,
        },
        ability: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        flavorText: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        power: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        toughness: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rarity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        set: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        superType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'card'
    },
);

module.exports = Card;