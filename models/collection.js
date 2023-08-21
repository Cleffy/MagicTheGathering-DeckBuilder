const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

/**
 * @class Collection
 * @param id
 * @param name
 * @param userID
 * 
 * Holds the cards within a user's collection
 */
class Collection extends Model {
}

Collection.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
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
        modelName: 'collection'
    },
);

module.exports = Collection;