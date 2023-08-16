const{Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')
class UserDecks extends Model{}


UserDecks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        deck_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'deck',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_decks',
    },
);

module.exports = UserDecks;