const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Ruleset extends Model {
}
//* need to find full rules doc//
Ruleset.init(
    {
        //TODO: add table info 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ruleset'
    },
);

module.exports = Ruleset;