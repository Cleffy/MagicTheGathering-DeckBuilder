const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

/**
 * @class Card
 * @param id- unique identifier for easy reference
 * @param name- the name of the card
 * @param spellType- the card's method of being played (instant, sorcery, creature, artifact, enchantment, land, planeswalker)
 * @param subType(deprecated)- a category or "tribe" the card belongs to (goblins, elves, vehicles, equipment, etc.)
 * @param color- the 5 "flavors" of mana used for playing cards. (white-W, blue-U, black-B, red-R, green-G)
 * @param manaCost- the total of required mana to play the card.
 * @param ability- anything written in the text area of the card. this describes mechanical function within the game.
 * @param flavorText- additional text in the text area pertaining to the game's lore and having no mechanical function.
 * @param power- the force with which a creature damages its opposition.
 * @param toughness- force required to slay a creature.
 * @param image- artistic interpretation of the cared.
 * @param rarity- the arbitrary valuation of a card.
 * @param set- a group of cards released together.
 * @param artist- the specific human acknowledged as having created the image on the card.
 * @param supertype(deprecated)- the legendary quality imparts certain mechanical restrictions. otherwise: basic.
 * 
 * Holds information on a Magic Card
 */
class Card extends Model {
}

Card.init(
    {
        id: {
            type: DataTypes.STRING(50),
            allowNull: false, 
            primaryKey: true,
        },
        cardName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        /* --Deprecated
        subTypes: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        */
        color: {
            type: DataTypes.CHAR(5),
            allowNull: true
        },
        manaCost: { 
            type: DataTypes.STRING(20),
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
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        toughness: {
            type: DataTypes.CHAR(2),
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rarity: {
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        set_name: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        artist: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        /* --Deprecated
        superType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        */
        standard: {
            type: DataTypes.BOOLEAN,
        },
        future: {
            type: DataTypes.BOOLEAN,
        },
        historic: {
            type: DataTypes.BOOLEAN,
        },
        gladiator: {
            type: DataTypes.BOOLEAN,
        },
        pioneer: {
            type: DataTypes.BOOLEAN,
        },
        explorer: {
            type: DataTypes.BOOLEAN,
        },
        modern: {
            type: DataTypes.BOOLEAN,
        },
        legacy: {
            type: DataTypes.BOOLEAN,
        },
        pauper: {
            type: DataTypes.BOOLEAN,
        },
        vintage: {
            type: DataTypes.BOOLEAN,
        },
        penny: {
            type: DataTypes.BOOLEAN,
        },
        commander: {
            type: DataTypes.BOOLEAN,
        },
        oathbreaker: {
            type: DataTypes.BOOLEAN,
        },
        brawl: {
            type: DataTypes.BOOLEAN,
        },
        historicbrawl: {
            type: DataTypes.BOOLEAN,
        },
        alchemy: {
            type: DataTypes.BOOLEAN,
        },
        paupercommander: {
            type: DataTypes.BOOLEAN,
        },
        duel: {
            type: DataTypes.BOOLEAN,
        },
        oldschool: {
            type: DataTypes.BOOLEAN,
        },
        premodern: {
            type: DataTypes.BOOLEAN,
        },
        predh: {
            type: DataTypes.BOOLEAN,
        }        
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