const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    //TODO: Add password check
}

User.init(
    {
        //TODO: add table info
    }
);

module.exports = User;