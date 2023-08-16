const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Collection extends Model {
}

Collection.init( {
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
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
{
    sequelize
},
);

module.exports = Collection;