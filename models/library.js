const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

/**
 * @class Library
 * @param id
 * @param name
 * 
 * Collection of cards representing a library
 * Used for legal cards within a block
 */
class Library extends Model {
}

Library.init(
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
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'library'
    },
);

module.exports = Library;