const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    //TODO: Add password check
}

User.init( {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
       
        //TODO: add table info
        //UserID: Must be unique
        //UserName: Must be unique
        //UserEmail: Must be unique
        //UserPassword
    }
);

module.exports = User;