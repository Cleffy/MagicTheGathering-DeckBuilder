const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Card extends Model {
}

User.init(
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
    }
);

module.exports = Card;